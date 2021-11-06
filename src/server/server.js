'use strict';
var fs = require("fs");
var redis = require("redis");
var loopback = require('loopback');
var requireFromString = require('require-from-string');
var boot = require('loopback-boot');
var srsteeConstants = require('../mmf/base/script/srstee-constants');
var propertySetter = require('../mmf/base/script/PropertySetter');
var $qryFn = require("../mmf/base/script/$qry.js");
var $scriptFn = require("../mmf/base/script/$script.js");
var app = module.exports = loopback();
var $qry = $qryFn({}, app);
var $script = $scriptFn({}, app);
var syncClients = [];
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var cluster = require('cluster');
var accesslog = require('access-log');
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');
var LoopBackContext = require('loopback-context');
var http = require('http');
var https = require('https');
var sslConfig = require('./ssl-config');
var jwtTokenGen = require('../mmf/base/script/GenerateAndSaveAccessToken.js');   
var publicPages = [{type: "route", name:"ootb-page", path: "/page"}];
const helmet = require("helmet");
const compression = require("compression");
const { Client, logger, Variables, File} = require("camunda-external-task-client-js");
const nodeId = process.env.NODE_ID || "xxyyxx-xy5xyx".replace(/[xy]/g, function(c) {
  var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16);
});

var subscriber, publisher;

if(process.env.USE_REDIS + "" == "true") {
  let redisHost = process.env.REDIS?process.env.REDIS.split(":")[0]: "192.168.0.101";
  let redisPort = process.env.REDIS?process.env.REDIS.split(":")[1]: "6379";
  subscriber = redis.createClient({host: redisHost || "192.168.0.101", port: redisPort || "6379"});
  publisher = redis.createClient({host: redisHost || "192.168.0.101", port: redisPort || "6379"});
  subscriber.on("error", function(err) {
    console.error(err);
  });
  publisher.on("error", function(err) {
    console.error(err);
  });
  subscriber.subscribe("reload_cache");
  subscriber.subscribe("reload_models");
  subscriber.psubscribe("reload_model_*");
  subscriber.on("subscribe", function(channel, count) {
    console.log("Subscribed to channel " + channel + " with count = " + count);
  });

  subscriber.on("pmessage", function(pchannel, channel, message) {
    if(message != nodeId) {      
      if(channel.startsWith("reload_model_")) {
        let modelId = channel.split("reload_model_")[1];
        reloadCustomModel(app, {name: modelId});
      }      
    }
  });

  subscriber.on("message", function(channel, message) {
    if(message != nodeId) {
      switch(channel) {
        case "reload_cache": 
          //blow up the local cache
          let cache = require("memory-cache");
          cache.clear();
          break;
        case "reload_models":
          let startUpScriptPATH = __dirname + "/../mmf/base/script/startupScript.js";
          let mmfStartupScript = require(startUpScriptPATH);        
          mmfStartupScript(app, loopback, true); 
          break;
        case "reload_public": 
          refreshPublicPages(app);
          refreshPublicMethods(app);
          break;
        case "reload_wf":
          reloadWFTopics(app);
          break;        
      }
    }
  });
}

const catchAsync = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
}

// configuration for the Camunda Client:
//  - 'baseUrl': url to the Workflow Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: (process.env.WORKFLOW_URL? process.env.WORKFLOW_URL: "http://localhost:8090") + "/engine-rest", use: logger, asyncResponseTimeout: 10000 };

// create a Client instance with custom configuration
const camundaClient = new Client(config);

var publicMethods = [];

const createTestCafe   = require('testcafe');
const { baseURL } = require("../mmf/base/script/srstee-constants");
const cache = require("../mmf/base/script/cache");
var testCafeServer;

var cert_options = {
  key: sslConfig.privateKey,
  cert: sslConfig.certificate
};

app.start = function () {
  let listenFn = function () {
    app.emit('started');

    app.get("/", function(req, res) {
      res.redirect("/home");
    });        
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;      
      app.use(compression());

      app.use(async (req, res, next) => {        
        if (isCachableResource(req)) {                      
          res.append('Cache-Control', 'max-age=864000000');
                     
        }else {            
          res.append('Cache-Control', 'max-age=0');            
        }       
        next(); 
      });

      app.use(helmet.frameguard());      
      app.use(express.static(__dirname + '/../client/thirdpartylib', { maxAge: 864000000 }));
      app.use(express.static(__dirname + '/../client', { maxAge: 864000000 }));
      app.use(express.static(__dirname + '/../client/build', { maxAge: 864000000 }));                      

      // create application/json parser
      var jsonParser = bodyParser.json()

      // parse application/x-www-form-urlencoded
      app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))

      // parse application/json
      app.use(bodyParser.json())

      //default error handler 
      app.use(function (err, req, res, next) {
        console.error(err.stack)
        res.status(500).send('Something broke!')
      })

      app.all('*', jsonParser, async function(req, res, next){     
        try {  
          // accesslog(req, res); //enable it when required      
          var ctx = LoopBackContext.getCurrentContext();
          var reqId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
          });
          ctx.set("reqId", reqId);  
          //out of the box APIs -- REST API & GRAPHQL         
          if(req.path == "/index.js") {
            //It's an unknown call and need more exploration of the side effects of the below changes.
            res.send("{}");
            res.end();
          }else if(req.path === "/logout") {
            //expire the access token                       
            for (var prop in req.signedCookies) {                                
                res.cookie(prop, '', {expires: new Date(0)});
            }
            cleanupImpersonationRecords(app, req);
            res.redirect('/loginhome');          
          }else if(req.path.startsWith("/base/api/") || req.path.startsWith("/load/pagemodule/")) {
            let requestProcessed = await processBaseURL(app, req, res, next);
            if(!requestProcessed) { 
              res.statusCode = 401;
              res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
              res.end();       
            }
          }else if(req.path.startsWith(explorerPath) || req.path.startsWith("/api") || req.path.startsWith("/graphql") || req.path.startsWith("/graphiql")) {          
            catchAsync(verifyAuthenticationAndProceed(app, req, res, next));                    
          }else {               
            catchAsync(verifyAuthenticationAndProceed(app, req, res, next, async function(app, req, res, next) {
              let requestProcessed = await processBaseURL(app, req, res, next);
              if(!requestProcessed) { 
                res.sendFile(path.join(__dirname, '/../client/build', 'index.html'));              
              }
            }));                              
          }
        }catch(err) {
          next(err);
        }
      });      
    }

  };
  
  // start the web server

  var port = app.get('port');
  var httpsPort = app.get('sslport');  
  var server = http.createServer(app).listen(port, function() { 

    console.log('Web server listening at port:  %s', port);
    app.emit('Server started');
    listenFn();     
  });

  if(httpsPort) {
    https.createServer(cert_options, app).listen(httpsPort, function() {
      app.emit('SSL server started');
      console.log('Web server listening at  port:  %s', httpsPort);
      listenFn();
    });
  }   

  syncServer(app);  
  return server;
};

var cleanupImpersonationRecords = function (app, req) {
  var currentUserToken = req.signedCookies?req.signedCookies["authorization"]: (req.cookies? req.cookies["authorization"]: null);  
  var ctx = LoopBackContext.getCurrentContext();
  if(!currentUserToken) {
    currentUserToken = ctx && ctx.get('authorization');    
    if(!currentUserToken && req.headers) {
      if(req.headers.cookie && req.headers.cookie.indexOf("authorization=") > -1) {
        let cookieValues = req.headers.cookie;
        let authCookie = cookieValues.split("authorization=")[1];
        currentUserToken = authCookie.split(";")[0];        
      }else if(req.headers.Authorization) {
        currentUserToken = req.headers.Authorization;
      }else if(req.headers.authorization) {
        currentUserToken = req.headers.authorization;
      }
    }
  }
  removeImpersonation(app, currentUserToken);
}

var removeImpersonation = function (app, accessToken) {
  let ds = app.datasources['mmf']; 
  let models = ds.models;
  let impersonateModel = null;
  let modelNames = Object.keys(models);            
  modelNames.forEach(function (mName) {    
      if(mName == "MetaImpersonate") {
        impersonateModel = models[mName];                
      }                
  });
  
  if(impersonateModel) {      
    impersonateModel.findOne({'AccessToken': accessToken}, function (err, impersonateRecord) {              
        if(impersonateRecord && impersonateRecord.ParentAccessToken) {                      
          impersonateModel.destroyById(impersonateRecord.uid);
          removeImpersonation(app, impersonateRecord.ParentAccessToken);          
        }                             
    });
  }
}

var isCachableResource = function (req) {
  if (req.path.startsWith("/runscript") || req.path.startsWith("/graphql")
      || req.path.startsWith("/base/api" || req.path.startsWith("/api"))) {
      return false;
  } else {
      if (req.path.startsWith("/thirdpartylib/") || 
          req.path.startsWith("/jspm_packages/") || 
          req.path.startsWith("/load/bundle") ||                     
          req.path.startsWith("/load/debugbundle") || 
          req.path.startsWith("/load/pagebundle") ||  
          req.path.startsWith("/load/pagemodule") ||                             
          req.path.startsWith("/get_clientcache") ||                             
          // req.path.startsWith("/client/") ||
          // req.path.startsWith("/component/") || 
          // req.path.startsWith("/page/") ||
          req.path.startsWith("/widget/"
          )) {
          return true;
      } else {
          return false;
      }
  }
};

var createGuestSession = async function() {
  let email = "sr_guest@srstee.com";
  let passWord = "srguest@$89";                      
  var loginHelperPATH = __dirname + '/../' + "mmf/base/script/LoginHelper.js";
  var loginHelper = require(loginHelperPATH);
  let data = await loginHelper(app, email, passWord);
  return data.jwtToken;
}

var createSystemSession = async function() {
  let email = "system@srste.in";
  let passWord = "sitbpitw";                      
  var loginHelperPATH = __dirname + '/../' + "mmf/base/script/LoginHelper.js";
  var loginHelper = require(loginHelperPATH);
  let data = await loginHelper(app, email, passWord);
  return data.jwtToken;
}

const testCafeHandler = async (app, reqContext, {request, response}) => {   
  if(testCafeServer) {
    const remoteConnection = await testCafeServer.createBrowserConnection();
    // Visit this URL from the remote device.     
    response.redirect(remoteConnection.url);
    remoteConnection.once('ready', async ()=> {
      try {
        let testCafeRunner = testCafeServer.createRunner();   
        let testSuites = request.query['testsuites'];
        testSuites = testSuites? testSuites.split(":"): [];
        let testScripts = request.query['testscripts'];
        testScripts = testScripts? testScripts.split(":"): [];
        let tests2Run = await getTests(app, testSuites, testScripts);
        let memoryCache = require("memory-cache");
        await memoryCache.put("app", app);            
        let results = {};        
        
        if(tests2Run && tests2Run.length > 0) {
          let runId = await createTestRun(app, tests2Run);
          for(let test2RunIndx in tests2Run) {
            let test2Run = tests2Run[test2RunIndx];
            await memoryCache.put("testInfo", test2Run); 
            let result = await testCafeRunner
              .src("/app/srstee_prod/tests/" + "*")          
              .browsers(remoteConnection)
              .reporter('json', path.join(__dirname, "../tests/report.json"))
              .run({skipJsErrors: true});              
            let reportData = require('fs').readFileSync(path.join(__dirname, "../tests/report.json"));
            results[test2Run.id] = reportData;
            await createTestRunResult(app, runId, test2Run.id, reportData); 
          }
        }        
        await testCafeRunner.stop();    
      }catch(err) {        
        console.error(err); 
      }
    });
  }else {
    response.send({status: "Test server is down!"});
  } 
  
  response.end();
}

const createTestRun = (app, tests2Run) => {
  return new Promise((resolve, reject) => {    
    let ds = app.datasources['mmf'];
    let models = ds.models;
    let modelNames = Object.keys(models);
    let testRunModel;

    modelNames.forEach(function (modelName) {                 
      if(modelName == "MetaTestRun") {
        testRunModel = models[modelName];              
      }      
    });
    
    if(testRunModel) {      
      testRunModel.upsert({Description: JSON.stringify({"Total tests": tests2Run.length})}, (err, rec) => {
        if (rec.uid) {
          resolve(rec.uid);
        }                
      });
    }
  });
}

const createTestRunResult = (app, runId, testScriptId, reportData) => {
  return new Promise((resolve, reject) => {    
    let ds = app.datasources['mmf'];
    let models = ds.models;
    let modelNames = Object.keys(models);
    let testRunResultModel;

    modelNames.forEach(function (modelName) {                 
      if(modelName == "MetaTestRunResult") {
        testRunResultModel = models[modelName];              
      }      
    });
    
    if(testRunResultModel) {      
      testRunResultModel.upsert({RunId: runId, TestScriptId: testScriptId, Result: reportData}, (err, rec) => {
        if (rec.uid) {
          resolve(rec.uid);
        }                
      });
    }
  });
}

const getTests = (app, testSuiteIds, testScriptIds) => {  
  return new Promise((resolve, reject) => {
    let result = [], visitedTestScriptIds = [];
    let ds = app.datasources['mmf'];
    let models = ds.models;
    let modelNames = Object.keys(models);
    let testSuiteModel, testScriptModel;

    modelNames.forEach(function (modelName) {                 
      if(modelName == "MetaTestScript") {
        testScriptModel = models[modelName];              
      }
      if(modelName == "MetaTestSuite") {
        testSuiteModel = models[modelName];              
      }
    });
    
    if(testScriptModel && (testScriptIds.length > 0 || testSuiteIds.length > 0)) {
      let filter = {};
      if(testScriptIds.length > 0 && testSuiteIds.length > 0) {
        filter = {where: { or: [{uid: {inq: testScriptIds}}, {Suite: {inq: testSuiteIds}}]}};
      }else if(testScriptIds.length > 0) {
        filter = {where: {uid: {inq: testScriptIds}}};
      }else if(testSuiteIds.length > 0) {
        filter = {where: {Suite: {inq: testSuiteIds}}};
      }

      testScriptModel.find(filter)
      .then(function (testScripts) {
        if (testScripts && testScripts.length > 0) {
          for(var testScriptIndx in testScripts) {  
            let testScriptObj = testScripts[testScriptIndx];   
            if(testScriptObj && testScriptObj.uid && testScriptObj.Definition) {         
              if(visitedTestScriptIds.indexOf(testScriptObj.uid) == -1) {        
                //Check uniqueness of the test scripts... 
                result.push({code: testScriptObj.Definition, id: testScriptObj.uid, name: testScriptObj.Name});
                visitedTestScriptIds.push(testScriptObj.uid);
              }                        
            }
          }                            
        }
        resolve(result);                 
      });
    }
  });
}
    
const reloadWFMeta = async (app, reqContext, reqResp) => {
  let status = "started";
  if(process && process.send) {      
    process.send({task: "REFRESH_WFMETA", data: {}});
    status = "ready to process";
  }else {
    await reloadWFTopics(app);  
    publisher && publisher.publish("reload_wf", nodeId);
  }  
  reqResp.response.statusCode = 200; 
  reqResp.response.send({"result": status});
  reqResp.response.end();
  
}

const stopWorkflowClient = async (app, reqContext, reqResp) => {
  let status = "stoped";
  if(process && process.send) {      
    process.send({task: "STOP_WFMETA", data: {}});
    status = "ready to process";
  }else {
    await stopWFTopics(app);  
  }  
  reqResp.response.statusCode = 200; 
  reqResp.response.send({"result": status});
  reqResp.response.end();
  
}

var stopWFTopics = async function(app) {  
  app.topicSubscriptions = app.topicSubscriptions || {};
  
  //unsubscribe to the existing topics
  if(app.topicSubscriptions && Object.keys(app.topicSubscriptions).length > 0) {
    let topicNames = Object.keys(app.topicSubscriptions);
    for(let subscribedTopicNameIndx in topicNames) {
      let subscribedTopicName = topicNames[subscribedTopicNameIndx];
      let subscribedTopic = app.topicSubscriptions[subscribedTopicName];
      subscribedTopic && subscribedTopic.unsubscribe();
    }
  }
}

var reloadWFTopics = async function(app) {  
  app.topicSubscriptions = app.topicSubscriptions || {};
  
  //unsubscribe to the existing topics
  if(app.topicSubscriptions && Object.keys(app.topicSubscriptions).length > 0) {
    let topicNames = Object.keys(app.topicSubscriptions);
    for(let subscribedTopicNameIndx in topicNames) {
      let subscribedTopicName = topicNames[subscribedTopicNameIndx];
      let subscribedTopic = app.topicSubscriptions[subscribedTopicName];
      subscribedTopic && subscribedTopic.unsubscribe();
    }
  }
  
  let serviceTaskDefinitions = await $qry.getRecords("ServiceTask_workflow", {"where": {}}, ["uid", "Name", "Definition"]);

  if(serviceTaskDefinitions && serviceTaskDefinitions.length > 0) {
    for(let serviceTaskDefinitionIndx in serviceTaskDefinitions) {
      let serviceTaskDefinition = serviceTaskDefinitions[serviceTaskDefinitionIndx];
      let topicName = serviceTaskDefinition.Name;
      let topicHandlerDefinition = serviceTaskDefinition.Definition;      
      
      /*
        topicHandler - 
          (async function() {  
              console.log("In $script - " + JSON.stringify(task.variables));
              try {
                  await taskService.complete(task);
                  console.log('I completed my task successfully!!');
              } catch(e) {
                  console.error(`Failed completing my task, ${e}`)
              }      
          })
      */

      var topicHandlerStr = `module.exports = (async function({ task, taskService }) {                                                            
                              var loginHelper = require("../mmf/base/script/LoginHelper.js");                                        
                              let data = await loginHelper(this.app, this.cred.email, this.cred.password);
                              let systemSessionId = data.jwtToken;
                              let sysContext = {authorization: systemSessionId};                                        
                              let $qry = this.$qryFn(sysContext);                                                                           
                              let $script = this.$scriptFn(sysContext);             
                              let Variables = this.Variables;
                              await ${topicHandlerDefinition}()          
                              await $qry.deleteRecord("AccessToken", systemSessionId);
                            })`;

      var topicHandler = requireFromString(topicHandlerStr);
      topicHandler = topicHandler.bind({app, $qryFn, $scriptFn, cred: {email: srsteeConstants.defaultSystemEmail, password: srsteeConstants.defaultSystemPassword}, Variables});      

      let subscribedTopic = camundaClient.subscribe(topicName, topicHandler);
      app.topicSubscriptions[topicName] = subscribedTopic;
    }
  }
  
}

var reqWhitelisted = async function(req, response, createSessionIfPublicPage) {  
  let result = req.path.startsWith("/loginhome") ||
      req.path.startsWith("/register") ||                  
      !!req.path.match("/client/.*.js") || 
      !!req.path.match("/widget/.*/Action.js") || 
      !!req.path.match("/page/.*/Action.js") || 
      !!req.path.match("/component/.*.js") || 
      !!req.path.match("/component/.*/Style.css") || 
      !!req.path.match("/load/bundle/.*.js") || 
      !!req.path.match("/load/debugbundle/.*.js") || 
      req.path.startsWith("/load/pagebundle/all.js") ||          
      req.path.startsWith("/load/pagemodule/") ||    
      req.path.startsWith("/thirdpartylib/") ||   
      req.path.startsWith("/base/api/") ||    
      req.path.startsWith("/.well-known") ||    
      req.path.startsWith("/verifylogin");         
  
  if(result === true) 
    return {status: true};
  //Check if the requested path is a public resource
  if(req.path == "/graphql") {
    return {status: true};
  }

  if(req.path == "/runscript") {
    if(req.body && req.body.script && (!req.body.script.startsWith("$qry.run(\"mmf.getSlidesWithPath\"") && 
          !req.body.script.startsWith("$qry.run(\"mmf.getMatchingRoutes\""))) {
      return {status: true};
    }
    // return {status: true};
  }
    
  /*
    This detailed checking might not be required assuming the respective Tables have the ACLs to protect from the guest or no session user access

  switch(req.path) {
    case "/graphql": 
        let whereClause = (req.body.variables && Object.keys(req.body.variables).length == 1)?Object.keys(req.body.variables)[0]: "";                      
        result = (req.body.query.indexOf("MetaQueryFindOne") > -1) ||   
        (req.body.query.indexOf("MetaQueryFind") > -1) ||                         
        (req.body.query.indexOf("MetaComponentFindOne") > -1) ||                         
        (req.body.query.indexOf("MetaRouteFind") > -1)  ||
        (req.body.query.indexOf("MetaTemplateFindOne") > -1) ||          
        (req.body.query.indexOf("MetaSlideFind") > -1)  ||
        (req.body.query.indexOf("MetaScopeFind") > -1);
        if(!result && whereClause && req.body.variables[whereClause].where) {
          result = (req.body.variables[whereClause].where.Name == "enable.bundling") ||
          (req.body.variables[whereClause].where.or && req.body.variables[whereClause].where.Name == "React" && req.body.variables[whereClause].where.Scope == "mmf");
        }
        return {status: result};      
      break;
    case "/runscript": 
      result = req.body && req.body.script && (req.body.script.startsWith("$qry.run(\"mmf.getSlidesWithPath\"") || 
              req.body.script.startsWith("$qry.run(\"mmf.getMatchingRoutes\"")  ||
              req.body.script.startsWith("$qry.run(\"mmf.getScopes\"") ||       
              req.body.script.startsWith("$qry.run(\"mmf.getSlideDetailsById\"") ||
              req.body.script.startsWith("$script.runscript(\"mmf.getLoggedInUserScope\""));              
      return {status: result};
      break;      
  }    
  */     
  
  let isPublicPage = checkForPublicPage(req);
  let output = {};
  output["status"] = isPublicPage;
  if(isPublicPage && createSessionIfPublicPage) {
    let guestSessionToken = await createGuestSession();               
    output["token"] = guestSessionToken;
  }
  return output;   
}

var checkForPublicPage = function(req) {  
  let resource = req.path;
  if(req.path == "/runscript") {
    if(req.body && req.body.script) {
      if(req.body.script.startsWith("$qry.run(\"mmf.getSlidesWithPath\"") || req.body.script.startsWith("$qry.run(\"mmf.getMatchingRoutes\"")) {
        let matched = req.body.script.match(/"basePath":"([^"]+)"/);
        if(matched && matched.length >= 2) {
          resource = matched[1];
        }else {
          matched = req.body.script.match(/"PATH":"([^"]+)"/);
          if(matched && matched.length >= 2) {
            resource = matched[1];
          }
        }
      }else {
        //only check if the script is trying to launch a page otherwise allow it so that the security is handled at the DB access layer instead.
        return true;
      }
    }
  }

  if(publicPages &&  publicPages.length > 0) {
    for(var publicPageIndx in publicPages) {
      let publicResource = publicPages[publicPageIndx];
      let publicResourceUrl = publicResource.path.replace(/[:][a-zA-Z_]+/g, "[^/]+");
      if(resource.match(publicResourceUrl)) {        
        // get email and pwd from system props                  
        return true;                   
      }
    }
  }
  return false;
}

var getPublicMethod = function(req) {  
  if(publicMethods &&  publicMethods.length > 0) {
    for(var publicMethodIndx in publicMethods) {
      let publicResource = publicMethods[publicMethodIndx];
      let publicResourceUrl = publicResource.path.replace(/{[^\}]+}/g, "([a-zA-Z0-9-_]+)");
      if(req.path.match(publicResourceUrl)) {        
        // get email and pwd from system props                  
        return publicResource.uid;              
      }
    }
  }
  return null;
}

var verifyAuthenticationAndProceed = async function(app, req, res, next, nextFn) {
  // check authentication  
  var jwtToken = req.signedCookies?req.signedCookies["authorization"]: (req.cookies? req.cookies["authorization"]: null);  
  var ctx = LoopBackContext.getCurrentContext();
  if(!jwtToken) {
    jwtToken = ctx && ctx.get('authorization');    
    if(!jwtToken && req.headers) {
      if(req.headers.cookie && req.headers.cookie.indexOf("authorization=") > -1) {
        let cookieValues = req.headers.cookie;
        let authCookie = cookieValues.split("authorization=")[1];
        jwtToken = authCookie.split(";")[0];        
      }else if(req.headers.Authorization) {
        jwtToken = req.headers.Authorization;
      }else if(req.headers.authorization) {
        jwtToken = req.headers.authorization;
      }
    }
  }
  
  let secret = "srstee";
  let loginURL = "/loginhome"  
  if(jwtToken) {    
    let tokenExists = await tokenExistsInDB(jwtToken);
    if(!tokenExists) {
      for (var prop in req.signedCookies) {                                
        res.cookie(prop, '', {expires: new Date(0)});
      }
      res.cookie("authorization", "", {expires: new Date(0)});
      res.redirect('/loginhome');           
    }else {      
      jwt.verify(jwtToken, secret, async function(err, data) {                   
          if(err) {
            //access token expired. Clear the cookies and redirect to login page.
            for (var prop in req.signedCookies) {                                
              res.cookie(prop, '', {expires: new Date(0)});
            }
            res.cookie("authorization", "", {expires: new Date(0)});
            res.redirect('/loginhome');                  
          }else {
            //fetch roles and add to the app.currentUser              
            // Get the current access token
            let isGuestSession = await isGuestUserSession(jwtToken);      
            if(isGuestSession) {
              //For a guest session, the table ACLs and script execution ACLs should handle the security aspect...              
              let isPublicResource =  isGuestResource(req);         
              if(!isPublicResource) {
                for (var prop in req.signedCookies) {                                
                  res.cookie(prop, '', {expires: new Date(0)});
                }
                res.cookie("authorization", "", {expires: new Date(0)});
                res.redirect('/loginhome');  
                return;
              }
            }                  
            
            if(ctx){                
              ctx.set('authorization', jwtToken);
              ctx.set('currentUser', data && data.data && data.data.username);
              ctx.set("srsUserId", data && data.data && data.data.srsUserId);
            }                 

            if(nextFn) {
              nextFn(app, req, res, next);
            }else {
              try {
                next();
              }catch(err) {
                console.error(err);
              }              
            }      
          }
        }
      );
    }
  }else {
    let whiteListedData = await reqWhitelisted(req, res, true);
    if(whiteListedData && whiteListedData.status == true) {
      if(whiteListedData.token) {        
        res.cookie("authorization", whiteListedData.token)
        res.cookie("access_token", whiteListedData.token, {signed: true})  
        if(req.path == "/runscript") {
          res.send({status: "replay"});
        }else {
          res.redirect(req.path);
        }        
        res.end();
      }else {
        ctx.set('bypass_auth', true);
        if(nextFn) {
          nextFn(app, req, res, next);
        }else {
          next();
        }
      }      
    }else {
      for (var prop in req.signedCookies) {                       
        res.cookie(prop, '', {expires: new Date(0)});
      }
      if(req.path == "/runscript" || req.path == "/graphql") {
        res.send({status: "loggedout"});
        res.end();
      }else {
        res.redirect('/loginhome');
      }
    }
  }
}

var tokenExistsInDB = async function(token) {
  return new Promise((resolve, rejcet) => {        
    let accessTokenModel = getModel("AccessToken");
    try {
        accessTokenModel && accessTokenModel.findById(token).then((model) => {                      
          (model)?resolve(true): resolve(false);
        })
    }catch(err) {
      resolve(false);
    }  
  }); 
}

var isGuestUserSession = async function(token) {  
  return new Promise((resolve, rejeet) => {
    let accessTokenModel = getModel("AccessToken");
    try {
        accessTokenModel && accessTokenModel.findById(token).then((model) => {          
          (model && model.userId == "1f537a60-da1e-11ea-ac75-2174c377999a")?resolve(true): resolve(false);
        })
    }catch(err) {
      resolve(false);
    }         
  });  
}

var isGuestResource = function(req) {
  return req.path == "/graphql" ||
          req.path.startsWith("/loginhome") ||
          req.path.startsWith("/register") ||          
          !!req.path.match("/client/.*.js") || 
          !!req.path.match("/widget/.*/Action.js") || 
          !!req.path.match("/page/.*/Action.js") || 
          !!req.path.match("/component/.*.js") || 
          !!req.path.match("/component/.*/Style.css") || 
          !!req.path.match("/load/bundle/.*.js") || 
          !!req.path.match("/load/debugbundle/.*.js") || 
          req.path.startsWith("/load/pagebundle/all.js") ||        
          req.path.startsWith("/load/pagemodule/") ||                
          req.path.startsWith("/thirdpartylib/") ||          
          req.path.startsWith("/verifylogin") || checkForPublicPage(req);
}

var processBaseURL = function(app, req, res, next) {
  return new Promise((resolve, reject) => {
    var matchFound = false;
    var incomingURL = req.path;
    const metaReaders = [
      { expr: new RegExp('/component/(.*)/State\\.js'), handler: 'ComponentStateLoader.js', mode: 'js' },
      { expr: new RegExp('/.*/component/(.*)/State\\.js'), handler: 'ComponentStateLoader.js', mode: 'js' },
      { expr: new RegExp('/component/(.*)/Action\\.js'), handler: 'ComponentActionLoader.js', mode: 'js' },
      { expr: new RegExp('/.*/component/(.*)/Action\\.js'), handler: 'ComponentActionLoader.js', mode: 'js' },
      { expr: new RegExp('/component/(.*)/Style\\.css'), handler: 'ComponentLoader.js', mode: 'css' },
      { expr: new RegExp('/.*/component/(.*)/Style\\.css'), handler: 'ComponentLoader.js', mode: 'css' },
      { expr: new RegExp('/component/(.*)/Definition\\.js'), handler: 'ComponentLoader.js', mode: 'js' },
      { expr: new RegExp('/.*/component/(.*)/Definition\\.js'), handler: 'ComponentLoader.js', mode: 'js' },
      { expr: new RegExp('/client/script/(.*)\\.js'), handler: 'ReusableUIScriptLoader.js', mode: 'js' },
      { expr: new RegExp('/.*/client/script/(.*)\\.js'), handler: 'ReusableUIScriptLoader.js', mode: 'js' },
      { expr: new RegExp('/script/dynamic/(.*)\\.js'), handler: 'TransientDataLoader.js', mode: 'js' },
      { expr: new RegExp('/.*/script/dynamic/(.*)\\.js'), handler: 'TransientDataLoader.js', mode: 'js' },
      { expr: new RegExp('/client/template/(.*)\\.js'), handler: 'TemplateLoader.js', mode: 'js' },
      { expr: new RegExp('.*/client/template/(.*)\\.js'), handler: 'TemplateLoader.js', mode: 'js' },
      { expr: new RegExp('/client/test/(.*)\\.js'), handler: 'TestScriptLoader.js', mode: 'js' },
      { expr: new RegExp('.*/client/test/(.*)\\.js'), handler: 'TestScriptLoader.js', mode: 'js' },
      { expr: new RegExp('/component/(.*)\\.js'), handler: 'TemplateDefinitionLoader.js', mode: 'js' },
      { expr: new RegExp('.*/component/(.*)\\.js'), handler: 'TemplateDefinitionLoader.js', mode: 'js' },
      { expr: new RegExp('.*/common/style/(.*)\\.css'), handler: 'CommonStyleLoader.js', mode: 'css' },
      { expr: new RegExp('/common/style/(.*)\\.css'), handler: 'CommonStyleLoader.js', mode: 'css' },
      { expr: new RegExp('.*/common/style/(.*)\\.scss'), handler: 'CommonStyleLoader.js', mode: 'scss' },
      { expr: new RegExp('/common/style/(.*)\\.scss'), handler: 'CommonStyleLoader.js', mode: 'scss' },
      { expr: new RegExp('/widget/(.*)/Action\\.js'), handler: 'WidgetActionLoader.js', mode: 'js' },
      { expr: new RegExp('/page/(.*)/Action\\.js'), handler: 'PageActionLoader.js', mode: 'js' },
      
      { expr: new RegExp('/routes'), inlineHandler: routeHandler },
      { expr: new RegExp('/navigation'), inlineHandler: navHandler },
      { expr: new RegExp('/sync/files'), inlineHandler: fileSyncer },      
      { expr: new RegExp('/file/(.*)'), inlineHandler: fileLoadHandler },
      { expr: new RegExp('/runscript'), inlineHandler: scriptRunner },
      { expr: new RegExp('/load/pagemodule/(.*)'), inlineHandler: pageModulesFetcher },
      { expr: new RegExp('/load/bundle/(.*).js'), inlineHandler: bundleLoader },
      { expr: new RegExp('/load/debugbundle/(.*).js'), inlineHandler: debugBundleLoader },
      { expr: new RegExp('/load/pagebundle/(.*).js'), inlineHandler: pageBundleLoader },      
      { expr: new RegExp('/load/component'), inlineHandler: componentLoader },
      { expr: new RegExp('/waituntil'), inlineHandler: waitUntilHandler },  
      { expr: new RegExp('/exportscope/(.*)'), inlineHandler: exportScope },
      { expr: new RegExp('/importscope/(.*)'), inlineHandler: importScope },
      { expr: new RegExp('/export'), inlineHandler: exportHandler},
      { expr: new RegExp('/import'), inlineHandler: importHandler},
      { expr: new RegExp('/reload_model/(.*)'), inlineHandler: reloadCustomModel},
      { expr: new RegExp('/flush_cache/(.*)'), inlineHandler: flushCache},
      { expr: new RegExp('/registeruser'), inlineHandler: registerHandler},
      { expr: new RegExp('/verifylogin'), inlineHandler: loginHandler},
      { expr: new RegExp('/impersonate'), inlineHandler: impersonateHandler},
      { expr: new RegExp('/verifyimpersonated'), inlineHandler: isImpersonatedUser},
      { expr: new RegExp('/verifyimpersonator'), inlineHandler: canImpersonate},      
      { expr: new RegExp('/endimpersonate'), inlineHandler: endImpersonate},      
      { expr: new RegExp('/client/(.*)_styles\\.js'), inlineHandler: getStylesHandler },
      { expr: new RegExp('.*/client/(.*)_styles\\.js'), inlineHandler: getStylesHandler },
      { expr: new RegExp('/reload_models'), inlineHandler: refreshDB },
      { expr: new RegExp('/reload_public'), inlineHandler: refreshPublicResources }, 
      { expr: new RegExp('/reload_cache'), inlineHandler: reloadCache },  
      { expr: new RegExp('/lastsync'), inlineHandler: lastSync },                
      { expr: new RegExp('/get_clientcache'), inlineHandler: getClientCache },                
      { expr: new RegExp('/get_clientcache/(.*)'), inlineHandler: getClientCache },                
      { expr: new RegExp('/base/api/(.*)'), inlineHandler: restAPIHandler },
      { expr: new RegExp('/runtest'), inlineHandler: testCafeHandler },          
      { expr: new RegExp('/reload_wf'), inlineHandler: reloadWFMeta },
      { expr: new RegExp('/stop_wf'), inlineHandler: stopWorkflowClient }        
    ];
    try {
      for(var indx = 0; !matchFound && indx < metaReaders.length; indx++) {
        let metaReader = metaReaders[indx];
        var exprOutput = incomingURL.match(metaReader.expr);

        if(exprOutput){
          matchFound = true;
          var fileHandler = null;
          if(metaReader.inlineHandler) {
            fileHandler = metaReader.inlineHandler;
          }else {
            let fileHandlerPATH = __dirname + '/../' + "mmf/base/script/" + metaReader.handler;
            fileHandler = require(fileHandlerPATH);
          }

          let scope = 'mmf';
          let requestedResource = exprOutput[1] || exprOutput[0];

          requestedResource = requestedResource.split('/');
          if (requestedResource.length == 2) {
            scope = requestedResource[0];
            requestedResource = requestedResource[1];
          } else {
            requestedResource = requestedResource[0];
          }
          var fileHandlerPromise = fileHandler(app, {scope, name: requestedResource, mode: metaReader.mode, rawinput: exprOutput[1] || exprOutput[0]}, {request: req, response: res});
          if(fileHandlerPromise) {
            fileHandlerPromise.then((data) => {
              if(data && !data.processed) {
                if(data.headers) {
                  let headerNames = Object.keys(data.headers);
                  headerNames.forEach((headerName) => {
                    res.setHeader(headerName, data.headers[headerName]);
                  });
                }
                if(data.payload) {
                  res.write(data.payload);
                }
                res.end();
                resolve(matchFound);
              }else{
                resolve(matchFound);
              }
            })
            .catch((err) => {
              console.log(err);
              next(err);
              //resolve(matchFound);
            });
          }else {
            resolve(matchFound);
          }
        }
      }

      if(!matchFound) {
        resolve(matchFound);
      }
    }catch(err) {
      console.error(err);
      next(err);
      //resolve(false);
    }
  });
}

const refreshDB = (app, {name}, {request, response}) => {
  return new Promise(async (resolve, reject) => {   
    if(process && process.send) {      
      process.send({task: "SCHEMA_CHANGED", data: {}});
    }else {
      let startUpScriptPATH = __dirname + "/../mmf/base/script/startupScript.js";
      let mmfStartupScript = require(startUpScriptPATH);        
      mmfStartupScript(app, loopback, true);
      publisher && publisher.publish("reload_models", nodeId);
    }
    response.send({"result": "reloaded"});
    response.end();
    resolve();
  });
}

const reloadCache = async (app, reqContext, {request, response}) => {
  let status = "started";
  if(process && process.send) {      
    process.send({task: "REFRESH_CACHE", data: {}});
    status = "ready to process";
  }else {
    let localCacheForPersistedModels = require("memory-cache");
    localCacheForPersistedModels.clear();
    await refreshCache(app);  
    publisher && publisher.publish("reload_cache", nodeId);
  }  
  response.statusCode = 200; 
  response.send({"result": status});
  response.end();
}

const lastSync = async (app, reqContext, {request, response}) => {
  let cachePATH = __dirname + '/../' +  "mmf/base/script/cache.js";
  let cache = require(cachePATH);
  let lastSync = await cache.get("lastsync"); 
  if(!lastSync) {
    lastSync = Date.now();
    await cache.put("lastsync", lastSync);
  }
  response.statusCode = 200; 
  response.send({"result": lastSync});
  response.end();
}

const getClientCache = async (app, reqContext, {request, response}) => {
  let cachePATH = __dirname + '/../' +  "mmf/base/script/cache.js";
  let cache = require(cachePATH);
  let slideCache = await cache.get("meta_pages");
  let formActionCache = await cache.get("meta_formactions");
  let formTemplateCache = await cache.get("meta_formtemplates");
  let themeCache = await cache.get("meta_theme");
  response.statusCode = 200; 
  response.send({result: {...slideCache, ...formActionCache, ...formTemplateCache, ...themeCache}});
  response.end();
}

const refreshCache = async (app) => {
  var cacheMetaData = require(__dirname + '/../' + "mmf/base/script/CacheMetaData.js");
  await cacheMetaData(app);
  refreshClientCache(app);
}

const refreshClientCache = async (app, isNodeStarting) => {
  const cache = require(__dirname + "/../mmf/base/script/cache");            
  // let themeCache = await cache.get("meta_theme");
  // if(themeCache && Object.keys(themeCache).length == 0) {
    //only cache if it is the first time any node is restarted or redis got bounced and the node is restarting
    let scriptCode = 
      `(async function() { 

        await $script.runscript("studio.updatePageCache", {});
        await $script.runscript("studio.updateFormTemplateCache", {});
        await $script.runscript("studio.updateFormActionCache", {});
        await $script.runscript("studio.updateThemeCache", {});
      })`;

    var scriptCodeWrapper = `module.exports = (async function() {                                                            
      var loginHelper = require("../mmf/base/script/LoginHelper.js");                                        
      let data = await loginHelper(this.app, this.cred.email, this.cred.password);
      let systemSessionId = data.jwtToken;
      let sysContext = {authorization: systemSessionId};                                        
      let $qry = this.$qryFn(sysContext);                                                                           
      let $script = this.$scriptFn(sysContext);                 
      await ${scriptCode}()              
    })`;

    var scriptCodeHandler = requireFromString(scriptCodeWrapper);
    scriptCodeHandler = scriptCodeHandler.bind({app, $qryFn, $scriptFn, cred: {email: srsteeConstants.defaultSystemEmail, password: srsteeConstants.defaultSystemPassword}});      
    await scriptCodeHandler();  
  // }
}

const refreshPublicResources = (app, {name}, {request, response}) => {
  return new Promise(async (resolve, reject) => {   
    if(process && process.send) {      
      process.send({task: "REFRESH_PUBLIC", data: {}});
    }else {
      refreshPublicPages(app);
      refreshPublicMethods(app);
      publisher && publisher.publish("reload_public", nodeId);
    }
    response.send({"result": "reloaded"});
    response.end();
    resolve();
  });
}

const getStylesHandler = (app, {name}, {request, response}) => {
  return new Promise(async (resolve, reject) => {   
    let componentModel = null; 
    let result = {};
    let ds = app.datasources['mmf'];
    let models = ds.models;
    let modelNames = Object.keys(models);
    
    modelNames.forEach(function (modelName) {                 
      if(modelName == "MetaComponent") {
        componentModel = models[modelName];              
      }
    });
    
    var filterBuilder = "{\"where\":{\"Scope\":\"" + name + "\"}}";

    if(componentModel) {
      componentModel.find(JSON.parse(filterBuilder))
        .then(function (componentInstances) {                                                   
          if (componentInstances && componentInstances.length > 0) {
            for(var componentInstanceIndx in componentInstances) {              
              result[componentInstances[componentInstanceIndx].Name] = componentInstances[componentInstanceIndx].CSS || "";
            }                            
          }          
          let resultFn = `export default function() { return ${JSON.stringify(result)};}`;
          response.send(resultFn);
          response.end();           
          resolve();
        });
    }          
  });
}

const waitUntilHandler = (app, reqContext, {request, response}) => {
  return new Promise(async (resolve, reject) => {    
    var condition = request.body ? request.body.condition : request.query['condition'];
    var conditionValue = request.body ? request.body.condition_value : request.query['condition_value'];
    let subscriptionId = parseInt(Math.random()*100000000);
    if(process && process.pid) {
      console.log("Waituntil on node pid = " + process.pid + " with condition = " + condition + "::" + conditionValue);
    }

    if(condition && conditionValue) {
      switch(condition) {
        case "model.upsert":
            app.notifyOnModelUpdate = app.notifyOnModelUpdate || {};
            app.notifyOnModelUpdate[conditionValue] = app.notifyOnModelUpdate[conditionValue] || {};            
            app.notifyOnModelUpdate[conditionValue][subscriptionId] = response;
            request.on('close', function() {
              delete app.notifyOnModelUpdate[conditionValue][subscriptionId];
              if(!app.notifyOnModelUpdate[conditionValue]
                  || Object.keys(app.notifyOnModelUpdate[conditionValue]).length == 0) {
                delete app.notifyOnModelUpdate[conditionValue];
                resolve();
              }
            });
            break;
        case "relationship.upsert":
            app.notifyOnRelationshipUpdate = app.notifyOnRelationshipUpdate || {};
            app.notifyOnRelationshipUpdate[conditionValue] = app.notifyOnRelationshipUpdate[conditionValue] || {};            
            app.notifyOnRelationshipUpdate[conditionValue][subscriptionId] = response;
            request.on('close', function() {
              delete app.notifyOnRelationshipUpdate[conditionValue][subscriptionId];
              if(!app.notifyOnRelationshipUpdate[conditionValue]
                  || Object.keys(app.notifyOnRelationshipUpdate[conditionValue]).length == 0) {
                delete app.notifyOnRelationshipUpdate[conditionValue];
                resolve();
              }
            });
            break;
            
      }
    }else {
      resolve();
      response.end(JSON.stringify({status: "invalid_params"}));
    }
  });
}

const flushCache =  (app, {name}, reqResp) => {
  return new Promise(async (resolve, reject) => {
    try {      
      let response = reqResp? reqResp.response: null;                  
      var mainCache = require("./cache");
      await mainCache.del(name);          
      response.statusCode = 200; 
      response.send({"result": "flushed the cache"});
      response.end(); 
      resolve();     
    }catch(err) {}
  });
}

const reloadCustomModel = (app, {name}, reqResp) => {
  return new Promise((resolve, reject) => {
    try {      
      let response = reqResp? reqResp.response: null;      
      let ds = app.datasources['mmf'];
      if(!name) {
        response && response.send(JSON.stringify({status: "warning", message: "Model Id is mandatory!"}));
        resolve({app, ds});
      }
      
      var hookMetaModelInstances = require(__dirname + '/../' +  'mmf/base/script/MetaModelInstanceHook.js');
      var registerModel2GraphQL = require(__dirname + '/../' +  'mmf/base/graphql/RegisterModel2GraphQL.js');
      var overrideMethods = require(__dirname + '/../' +  'mmf/base/script/OverrideCRUD.js');
      ds.models["MetaModel"].find({where: {uid: name}}, function(err, results){
          if(results && results.length == 1) {        
            let modelInstance = results[0];
            if(modelInstance) {
              reqResp && publisher && publisher.publish("reload_model_" + name, nodeId);
              var modelJSON = JSON.parse(modelInstance['$Definition']);
              let newOptions = modelJSON.option || {};
              newOptions["defaultPermission"] = 'DENY';
              newOptions["acls"] = [
                  {
                      "model": modelJSON.name,
                      "principalType": "ROLE",
                      "principalId": "srstee",
                      "permission": "ALLOW",
                      "property": "*",
                      "accessType": "*"
                  }
              ];        
              ds.createModel(modelJSON.name, modelJSON.properties, modelJSON.option);
                               
              ds.autoupdate(modelJSON.name, function (err, result) {
                  ds.discoverModelProperties(modelJSON.name, function (err, props) {
                      var modelObj = ds.getModel(modelJSON.name);
                      hookMetaModelInstances(modelObj);
                      response && response.send(JSON.stringify({status: "success", message: "Instance successfully reload."}));                      
                      app.model(modelObj, {
                          public: true
                      });                      
                      registerModel2GraphQL(app);
                      let modelNames = Object.keys(ds.models);
                      modelNames.forEach(function (modelName) {
                          let modelInstance = ds.models[modelName];
                          overrideMethods.apply(modelInstance);
                      });
                  });
              });
            }                                                  
          }else{
              response && response.send(JSON.stringify({status: "warning", message: "No instances found to reload."}));                                        
              resolve({app, ds});
          }
      }); 
    }catch(err) {
      response && response.send(JSON.stringify({status: "error", message: err.message}));
      resolve({app, ds});
    }           
  });
}

const exportHandler = (app, reqContext, {request, response}) => {
  // use $qry to get the data
  // TODO: check for table data access
  return new Promise(async (resolve, reject) => {
      var table = request.query['table'] || request.body.table;
      var filter = request.query['filter'] || request.body.filter;

      var exportHandlerPath = __dirname + '/../' +  "mmf/base/script/ExportHandler.js";
      var exportHandler = require(exportHandlerPath);
      await exportHandler(app, table, filter, response);
      resolve();
    });
}

const importHandler = (app, reqContext, {request, response}) => {
  
  return new Promise(async (resolve, reject) => {
      var table = request.query['table'] || request.body.table;
      var data = request.query['data'] || request.body.data;

      var importHandlerPath = __dirname + '/../' +  "mmf/base/script/ImportHandler.js";
      var importHandler = require(importHandlerPath);
      await importHandler(app, table, data, response);
      resolve();
    });
}

const endImpersonate = async (app, reqContext, {request, response}) => {
  return new Promise(async (resolve, reject) => {
    var jwtToken = request.signedCookies?request.signedCookies["authorization"]: (request.cookies? request.cookies["authorization"]: null);  
    var ctx = LoopBackContext.getCurrentContext();
    if(!jwtToken) {
      jwtToken = ctx && ctx.get('authorization');    
      if(!jwtToken && request.headers) {
        if(request.headers.cookie && request.headers.cookie.indexOf("authorization=") > -1) {
          let cookieValues = request.headers.cookie;
          let authCookie = cookieValues.split("authorization=")[1];
          jwtToken = authCookie.split(";")[0];        
        }else if(request.headers.Authorization) {
          jwtToken = req.headers.Authorization;
        }else if(request.headers.authorization) {
          jwtToken = request.headers.authorization;
        }
      }
    }

    let ds = app.datasources['mmf']; 
    let models = ds.models;
    let impersonateModel = null;
    let modelNames = Object.keys(models);            
    modelNames.forEach(function (mName) {    
        if(mName == "MetaImpersonate") {
          impersonateModel = models[mName];                
        }                
    });
    
    if(impersonateModel) {      
      impersonateModel.findOne({'AccessToken': jwtToken}, function (err, impersonateRecord) {              
          if(impersonateRecord && impersonateRecord.ParentAccessToken) {            
            response.cookie("authorization", impersonateRecord.ParentAccessToken)
            response.cookie("access_token", impersonateRecord.ParentAccessToken, {signed: true});
            response.send(JSON.stringify({"status": true}));
            impersonateModel.destroyById(impersonateRecord.uid);
            resolve();
          }else {
            response.send(JSON.stringify({"status": false}));
            resolve();
          }                                
      });
    }else {
      response.send(JSON.stringify({"status": false}));
      resolve();
    }        
  });
}

const isImpersonatedUser = async (app, reqContext, {request, response}) => {
  return new Promise(async (resolve, reject) => {

    var jwtToken = request.signedCookies?request.signedCookies["authorization"]: (request.cookies? request.cookies["authorization"]: null);  
    var ctx = LoopBackContext.getCurrentContext();
    if(!jwtToken) {
      jwtToken = ctx && ctx.get('authorization');    
      if(!jwtToken && request.headers) {
        if(request.headers.cookie && request.headers.cookie.indexOf("authorization=") > -1) {
          let cookieValues = request.headers.cookie;
          let authCookie = cookieValues.split("authorization=")[1];
          jwtToken = authCookie.split(";")[0];        
        }else if(request.headers.Authorization) {
          jwtToken = req.headers.Authorization;
        }else if(request.headers.authorization) {
          jwtToken = request.headers.authorization;
        }
      }
    }
    
    let secret = "srstee";        
    jwt.verify(jwtToken, secret, async function(err, data) {                   
      if(err) {        
        response.send(JSON.stringify({"status": false}));
        resolve();
      }else {        
        if(data && data.data && data.data.p + "" == "true") {
          response.send(JSON.stringify({"status": true}));
        }else {
          response.send(JSON.stringify({"status": false}));
        }        
        resolve();
      }
    });
  });
}

const impersonateHandler = async (app, reqContext, {request, response}) => {
  return new Promise(async (resolve, reject) => {
    var email = request.query["email"] || request.body.email;    
    if(!email) {
      let errMsg = {"status": "error","msg": "Unable to impersonate"};
        response.send(JSON.stringify(errMsg));
        resolve();
    }else {
      await loginUtil(email, "", false, true, app, request, response);      
      resolve();
    }
  });
}

const loginHandler = async (app, reqContext, {request, response}) => {
  return new Promise(async (resolve, reject) => {
    var email = request.query["email"] || request.body.email;
    var password = request.query["password"] || request.body.password;
    var isGuestLogin = request.query["isGuest"] || request.body.isGuest;
    await loginUtil(email, password, isGuestLogin, false, app, request, response);
    resolve();
  });
}

const canImpersonate = async (app, reqContext, {request, response}) => {
  return new Promise(async (resolve, reject) => {
    let result = await canCurrentUserImpersonate(request);
    response.send(JSON.stringify(result));
    resolve();
  });
}

const loginUtil = async (email, passWord, isGuestLogin, needsImpersonate, app, request, response) => {
  return new Promise(async (resolve, reject) => {
    let cachePATH = __dirname + '/../' +  "mmf/base/script/cache.js";
    let cache = require(cachePATH);
    let loginProps = await cache.get("LoginProps");  
    let expiresIn = loginProps && loginProps.expiresIn? loginProps.expiresIn: "8h";
    if(!!needsImpersonate) {
      let canUserImpersonate = await canCurrentUserImpersonate(request);
      if(!canUserImpersonate) {
        let errMsg = {"status": "error","msg": "Unable to impersonate"};
        response.send(JSON.stringify(errMsg));
        resolve();
      }else {
        var loginHelperPATH = __dirname + '/../' +  "mmf/base/script/LoginHelper.js";
        var loginHelper = require(loginHelperPATH);
        let data = await loginHelper(app, email, "", expiresIn, needsImpersonate);  
        let token = data.jwtToken;
        let ds = app.datasources['mmf']; 
        let models = ds.models;
        let impersonateModel = null;

        let modelNames = Object.keys(models);            
        modelNames.forEach(function (mName) {    
            if(mName == "MetaImpersonate") {
              impersonateModel = models[mName];                
            }                
        });        
        
        // response.cookie("authorization", data.jwtToken, {signed: true})
        response.cookie("authorization", token)
        response.cookie("access_token", token, {signed: true})
        response.send(JSON.stringify(data));
        
        if(impersonateModel) {
          var jwtToken = request.signedCookies?request.signedCookies["authorization"]: (request.cookies? request.cookies["authorization"]: null);  
          var ctx = LoopBackContext.getCurrentContext();
          if(!jwtToken) {
            jwtToken = ctx && ctx.get('authorization');    
            if(!jwtToken && request.headers) {
              if(request.headers.cookie && request.headers.cookie.indexOf("authorization=") > -1) {
                let cookieValues = request.headers.cookie;
                let authCookie = cookieValues.split("authorization=")[1];
                jwtToken = authCookie.split(";")[0];        
              }else if(request.headers.Authorization) {
                jwtToken = req.headers.Authorization;
              }else if(request.headers.authorization) {
                jwtToken = request.headers.authorization;
              }
            }
          }
          impersonateModel.upsertWithWhere({'AccessToken': token}, { 'AccessToken': token, 'ParentAccessToken': jwtToken }, function (err, impersonateRecord) {                          
              resolve();            
          });
        }else {
          resolve();
        }      
      }
    }else { 
      if(isGuestLogin){
        // get email and pwd from system props
        email = "sr_guest@srstee.com";
        passWord = "srguest@$89";
      }
      if (email && passWord) {
        var loginHelperPATH = __dirname + '/../' +  "mmf/base/script/LoginHelper.js";
        var loginHelper = require(loginHelperPATH);
        let data = await loginHelper(app, email, passWord, expiresIn, needsImpersonate);      
        // response.cookie("authorization", data.jwtToken, {signed: true})
        response.cookie("authorization", data.jwtToken)
        response.cookie("access_token", data.jwtToken, {signed: true})
        response.send(JSON.stringify(data));
        resolve();
      }else{
        let errData = {"msg":"Something went wrong.."};
        response.send(JSON.stringify(errData));
        resolve();
      }
    }
  });  
}

const canCurrentUserImpersonate = async (request) => {
  return new Promise((resolve, reject) => {
    var jwtToken = request.signedCookies?request.signedCookies["authorization"]: (request.cookies? request.cookies["authorization"]: null);  
    var ctx = LoopBackContext.getCurrentContext();
    if(!jwtToken) {
      jwtToken = ctx && ctx.get('authorization');    
      if(!jwtToken && request.headers) {
        if(request.headers.cookie && request.headers.cookie.indexOf("authorization=") > -1) {
          let cookieValues = request.headers.cookie;
          let authCookie = cookieValues.split("authorization=")[1];
          jwtToken = authCookie.split(";")[0];        
        }else if(request.headers.Authorization) {
          jwtToken = req.headers.Authorization;
        }else if(request.headers.authorization) {
          jwtToken = request.headers.authorization;
        }
      }
    }
    
    let secret = "srstee";        
    jwt.verify(jwtToken, secret, async function(err, data) {                   
      if(err) {                
        resolve({result: false});
      }else {        
        if(data && data.data && data.data.srsUserId) {
          let currentUserId = data.data.srsUserId;
          let ds = app.datasources['mmf']; 
          let models = ds.models;  
          let srsteUserRoleModel = models["SrsteeUserRole"];
          let srsteRoleModel = models["SrsteeRole"];
          let roleIds = [];
          if(srsteUserRoleModel){
              var userRoles = await srsteUserRoleModel.find({'where': {'SrsteeUser': currentUserId}});
              let matchFound = false;
              if(userRoles && userRoles.length > 0){
                for(let userRoleIndx in userRoles) {
                  let userRole = userRoles[userRoleIndx];
                  roleIds.push(userRole.SrsteeRole);
                  if(userRole.uid == 1) { // role uid = 1 is the impersonate role by default
                    matchFound = true;
                    resolve({result: true});
                  }          
                }
              }
              if(!matchFound) {
                //if ootb role is not available, check if there is a custom role with name as impersonate       
                var impersonateRole = await srsteRoleModel.find({'where': {'uid': { "inq": roleIds }, Name: "Impersonator" }});
                if(impersonateRole && impersonateRole.length > 0) {
                  resolve({result: true});
                }
              }
          }
          resolve({result: false});
        }else {
          resolve({result: false});
        }        
        resolve();
      }
    });
  })      
}
  

const registerHandler = (app, reqContext, {request, response}) => {
  return new Promise(async (resolve, reject) => {
    var firstName = request.query['firstname'] || request.body.firstname;
    var lastName = request.query['lastname'] || request.body.lastname;
    var email = request.query['email'] || request.body.email;
    var password = request.query['password'] || request.body.password;

    let userObj = {};
    userObj["FirstName"] = firstName;
    userObj["LastName"] = lastName;
    userObj["Email"] = email;
    userObj["Password"] = password;

    var registerHelperPATH = __dirname + '/../' +  "mmf/base/script/RegisterHelper.js";
    var registerHelper = require(registerHelperPATH);

    let data = await registerHelper(app, userObj, response);
    resolve(data);
  });
}

const restAPIHandler = async (app, reqContext, {request, response}) => {      
  if(!request.headers["authorization"]) {
      let publicResourceUID = getPublicMethod(request);
      if(publicResourceUID) {
        try {
          await processRESTMethod(app, request, response, publicResourceUID);
        }catch(err) {
          res.statusCode = 200; 
          res.send({"status": "error", "message": err});
          res.end();
        }        
      }else {
        // No Authorization header was passed in so it's the first time the browser hit us
        // Sending a 401 will require authentication, we need to send the 'WWW-Authenticate' to tell them the sort of authentication to use
        // Basic auth is quite literally the easiest and least secure, it simply gives back  base64( username + ":" + password ) from the browser
        response.statusCode = 401;
        response.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
        response.end();  
      }               
  }else {      
    let auth = "";
    if(request.headers.cookie && request.headers.cookie.indexOf("authorization=") > -1) {
      let cookieValues = request.headers.cookie;
      let authCookie = cookieValues.split("authorization=")[1];
      auth = authCookie.split(";")[0];        
    }else if(request.headers.Authorization) {
      auth = request.headers.Authorization;
    }else if(request.headers.authorization) {
      auth = request.headers.authorization;
    }
    let tmp = auth.split(' ');
    let buf = new Buffer(tmp[1], 'base64'); 
    let plain_auth = buf.toString();  
    let creds = plain_auth.split(':');
    let username = creds[0];
    let password = creds[1];
    var  jwtTokenGen = require(path.join(app.__basedir, "mmf/base/script/GenerateAccessToken"));
    jwtTokenGen(app, username, password)
    .then(async (jwtPayload)=>{
        let {jwtToken} = jwtPayload;
        if(jwtToken) {
          try {
            await processRESTMethod(app, request, response);
          }catch(err) {
            res.statusCode = 200; 
            res.send({"status": "error", "message": err});
            res.end();
          }          
        }else {
          res.statusCode = 401; // Force them to retry authentication
          res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
        }
      });
  }  
}

const processRESTMethod = (app, request, response, restMethodUID) => {
  return new Promise(async (resolve, reject) => {
    let $tbl = {};
    //Get the best matching rest endpoint based on the given relativePath...
    let ds = app.datasources['mmf'];
    let models = ds.models;
    let modelNames = Object.keys(models);

    modelNames.forEach(function (modelName) {      
      let modelInstance = models[modelName];
      $tbl[modelInstance.modelName] = modelInstance;
    });

    let inputScript = null;
    let pathParams = {};    
    let restMethods = restMethodUID? await $tbl.MetaRestMethod.find({where: {uid: restMethodUID}}): await $tbl.MetaRestMethod.find({where: {uid: restMethodUID}});
    if(restMethods && restMethods.length > 0) {
      let relativeURL = request.path.split("/base/api")[1];
      for(var methodIndx in restMethods) {
        let restMethod = restMethods[methodIndx];
        let restMethodPath = restMethod["Path"]? restMethod["Path"].replace(/{[^\}]+}/g, "([a-zA-Z0-9-_]+)"): restMethod["Path"];
        let pathMatch = relativeURL.match(restMethodPath);        
        if(pathMatch && request.method.toUpperCase() == restMethod.Type.toUpperCase()) {          
          let pathDef = restMethod["Path"];
          let pathParamNames = pathDef.match(/{[a-zA-Z0-9-_]+}/gi);
          let matchedPathParamValues = relativeURL.match(restMethodPath);
          if(pathParamNames) {
            pathParamNames.map((pathParamName, indx)=> {
              if(matchedPathParamValues && matchedPathParamValues.length > indx+1) {
                pathParams[pathParamName.replace("{", "").replace("}", "")] = matchedPathParamValues[indx+1];
              }
            });
          }
          inputScript = restMethod["Definition"];
          break;
        }
      }
    }
    
    if (inputScript) {

      var code2ExecuteStr = "module.exports = function($qry, $script, $pathParams, request, response){ \n" +
        " return new Promise((resolve, reject) => {" +
        "   (function($qry, $script, $pathParams, request, response, $resolve, $reject){\n" +
        inputScript + "()" +
        "   })($qry, $script, $pathParams, request, response, resolve, reject)\n" +
        "\n});\n" +
        "};\n\n";
      var code2Execute = requireFromString(code2ExecuteStr);
      code2Execute($qry, $script, pathParams, request, response)
        .then(function (result) {
          if(result) {
            response.send(result);
            response.end();
          }              
          resolve();
        })
        .catch(function (err) {
          response.send(err);
          response.end(); 
          resolve();         
        });
    } else {
      response.status(405).send('Method not allowed');
      response.end();      
    }
    
    resolve();
  });
}

const routeHandler = (app, reqContext, {request, response}) => {
  return new Promise(async (resolve, reject) => {
    var urlParam = request.query['param.url'];
    var result = "";
    if (urlParam) {
      var routeBuilderPATH = __dirname + '/../' +  "mmf/base/script/RouteBuilder.js";
      var routeBuilder = require(routeBuilderPATH);
      var data = await routeBuilder(app, urlParam);
      result = result + "\n" + data;
      response.send(result);
      response.end();
      resolve();
    }
  });
}


const exportScope = async (app, {rawinput}, {request, response}) => {
  return new Promise(async (resolve, reject) => {  
    let scopeName, dowloadVersionRecordId, verionId = "";
    /* studio/scopeId/xyz/version/x.y.z/ts/123 */
    let inputParts = rawinput.split("/");
    if(inputParts.length > 0) {
      scopeName = inputParts[0];
    }

    if(inputParts.length > 2) {
      if(inputParts[1] == "scopeId") {
        dowloadVersionRecordId = inputParts[2];
      } 
      if(inputParts[1] == "version") {
        verionId = inputParts[2];
      } 
      if(inputParts[3] == "scopeId") {
        dowloadVersionRecordId = inputParts[4];
      } 
      if(inputParts[3] == "version") {
        verionId = inputParts[4];
      } 
    }

    let referenceId = await ackExportScope(app, scopeName, dowloadVersionRecordId);
    if(referenceId == -1) {      
      response.send({result: -1, error: "Unexpected error occurred."});
      response.end();
      resolve();
    }else {      
      response.send({result: referenceId, link: "/form/table/MetaScopeDownload/id/" + referenceId});
      response.end();      
      await exportScopePostProcessing(app, scopeName, verionId, referenceId);    
      resolve();
    }        
  });
}

const importScope = async (app, {name}, {request, response}) => {
  return new Promise(async (resolve, reject) => {  
    var $tbl = {};
    let ds = app.datasources['mmf']; 
    let models = ds.models;
    let modelNames = Object.keys(models);    
    modelNames.forEach(function (modelName) {                     
        $tbl[modelName] = models[modelName];
    });

    let jsonData = await getJSONDataFromDoc(app, name);
    if(jsonData) {      
      await $tbl.MetaScopeDownload.upsertWithWhere({'uid': name}, {Status: "installing"});
      response.send({result: "processing " + name});
      response.end();
      await processFiles(jsonData);
      await $tbl.MetaScopeDownload.upsertWithWhere({'uid': name}, {Status: "installed"});
      resolve();
    }else {      
      response.send({error: "Invalid JSON data."});
      response.end();         
      resolve();
    }        
  });
}

const processFiles = async (filesData) => { 
  let updateFiles2DBUtilPATH = __dirname + '/../' +  "mmf/base/script/UpdateFiles2DB.js";    
  var updateFiles2DBUtil = require(updateFiles2DBUtilPATH);
  let output = [];
  let outputStream = {      
    send: (data)=> {                     
    },  
    get: () => { return output; }
  }
  let payload = await preprocessData(filesData);
  if (payload) {    
    await updateFiles2DBUtil(payload, app, null, outputStream);
    return output;
  }
}

const preprocessData = async (filesData) => {
  let output = [];
  if(Array.isArray(filesData)) {
    filesData.map((filesChunk) => {
      if(filesChunk.type == "payloadChunkSent") {
        let filesChunkPayload = JSON.parse(filesChunk.payload);
        if(filesChunkPayload.length > 0){
          filesChunkPayload.map((filesChunkPayloadItem)=>{
            let filePath = filesChunkPayloadItem.filePath;
            let filePayload = filesChunkPayloadItem.payload;
            output.push({path: filePath, payload: filePayload});
          });
        }
      }
    });
  }else {
    if(filesData.type == "payloadChunkSent") {
      let filesDataPayload = JSON.parse(filesData.payload);
      if(filesDataPayload.length > 0){
        filesDataPayload.map((filesDataPayloadItem)=>{
          let filePath = filesDataPayloadItem.filePath;
          let filePayload = filesDataPayloadItem.payload;
          output.push({path: filePath, payload: filePayload});
        });
      }
    }
  }
  
  return output;  
}

const getJSONDataFromDoc = async (app, appDownloadId) => {
  return new Promise(async (resolve, reject)=> {
    var $tbl = {};
    let ds = app.datasources['mmf']; 
    let models = ds.models;
    let modelNames = Object.keys(models);
    let output = "";
    modelNames.forEach(function (modelName) {                     
        $tbl[modelName] = models[modelName];
    });

    let scopeDownloadRecord = await $tbl.MetaScopeDownload.findOne({'where': {'uid': appDownloadId}});
    if(!scopeDownloadRecord) {
      resolve(null);
      return;
    }

    $tbl.MetaDocument.findOne({ 'where': { 'uid': scopeDownloadRecord.DocumentId }})
    .then((result) => {
        if(!result || !result.MimeType || !result.Name || result.MimeType != "application/json") {            
            resolve(null);            
        }
        
        $tbl.MetaDocfragment.find({ 'where': { 'DocumentId': scopeDownloadRecord.DocumentId }, 'order': 'Order ASC'})
          .then(function (results) {  
            if(results) {                          
                results.forEach((result) => {
                    try {                            
                      output += new Buffer(JSON.parse(JSON.parse(result.Data)).data);
                    }catch(err) {
                        console.error(err);
                    }                                    
                });   
                try {
                  output = JSON.parse(output);
                  resolve(output); 
                }catch(err) { 
                  resolve(null);
                }                                
            }else {                
                resolve("");
            }                    
          })
          .catch((err) => {
            console.error('Error occurred - ' + err);
          })
        })
  });
}

const ackExportScope = async (app, scopeName, referenceId)=> {
  let scopeStore = null;  
  let ds = app.datasources['mmf']; 
  let models = ds.models;
  let modelNames = Object.keys(models);
  
  modelNames.forEach(function (modelName) {                 
    if(modelName == "MetaScopeDownload") {
      scopeStore = models[modelName];              
    }
  });

  if(scopeStore) {
    let storeInstance;
    if(referenceId) {
      storeInstance = await scopeStore.upsertWithWhere({uid: referenceId}, {uid: referenceId, Scope: scopeName, Status: "exporting"});
      if (storeInstance && storeInstance.uid) {
        return storeInstance.uid;                           
      }
    }else {
      storeInstance = await scopeStore.create({uid: referenceId, Scope: scopeName, Status: "exporting"});
      if (storeInstance && storeInstance.uid) {
        return storeInstance.uid;                           
      }
    }            
  }  
  return -1;     
}

const exportScopePostProcessing = async (app, scopeName, versionId, referenceId) => {
  var lastSyncId = null;
  var fetchFileContentsUtilPATH = __dirname + '/../' +  "mmf/base/script/ReadFileContents.js";
  var fetchFileContentsUtil = require(fetchFileContentsUtilPATH);
  let output = [];
  let outputStream = {      
    send: (data)=> {         
      "HEADER:push-status:"
      output.push(JSON.parse(data)) 
    },  
    get: () => { return output; }
  };

  await fetchFileContentsUtil(app, lastSyncId, null, outputStream, scopeName);
  await uploadApplicationFile(app, JSON.stringify(output), "application/json", versionId? scopeName + "_" + versionId + ".json": scopeName + ".json", referenceId);
}

const uploadApplicationFile = async (app, fileContents, mimeType, applicationName, referenceId) => { 
  return new Promise(async (resolve, reject)=>{
    var docCreatorPATH = __dirname + '/../' +  "mmf/base/script/DocumentCreator.js";
    var docCreator = require(docCreatorPATH);
    let documentId = await docCreator(app, applicationName, mimeType, fileContents);
    let scopeStore = null;  
    let ds = app.datasources['mmf']; 
    let models = ds.models;
    let modelNames = Object.keys(models);
    
    modelNames.forEach(function (modelName) {                 
      if(modelName == "MetaScopeDownload") {
        scopeStore = models[modelName];              
      }
    });

    if(scopeStore) {    
      scopeStore.upsertWithWhere({ "uid":  referenceId}, {DocumentId: documentId, Status: "exported"}, (err, storeInstance) => {
        resolve();
      });  
    }
  });  
}

const navHandler = async (app, reqContext, {request, response}) => {
  return new Promise(async (resolve, reject) => {
    var navigationPATH = __dirname + '/../' +  "mmf/base/script/ReadFileContents.js";
    var navigationHandler = require(navigationPATH);

    let data = await navigationHandler(app, null, true)
    response.send(data);
    response.end();
    resolve();
  });
}

const fileSyncer = function (app, reqContext, {request, response}) {
  return new Promise(async (resolve, reject) => {
    var lastSyncId = request.query['param.lastSyncId'];
    var fetchFileContentsUtilPATH = __dirname + '/../' +  "mmf/base/script/ReadFileContents.js";
    var fetchFileContentsUtil = require(fetchFileContentsUtilPATH);

    let data = await fetchFileContentsUtil(app, lastSyncId);
    response.contentType('application/json');
    response.send(JSON.stringify(data));
    response.end();
    resolve();
  });
}

const fileLoadHandler =  function (app, reqContext, {request, response}) {
  return new Promise(async (resolve, reject) => {
    var fetchFileContentsUtilPATH = __dirname + '/../' +  "mmf/base/script/FileDownloader.js";
    var fetchFileContentsUtil = require(fetchFileContentsUtilPATH);
    let documentId = reqContext.name;
    await fetchFileContentsUtil(app, documentId, response);
    resolve();
  });
}

const scriptRunner = function (app, reqContext, {request, response}) {
  return new Promise(async (rs, rj) => {
    var inputScript = request.body ? request.body.script : "";
    let result = await _scriptRunner(inputScript);
    let result2send = result.result || result.error || result.message;
    response.send(result2send);
    response.end();
    rs();    
  });
}

const _scriptRunner = function (inputScript) {
  return new Promise(async (rs, rj) => {    
    if (inputScript) {
      var code2ExecuteStr = "module.exports = function($qry, $script){ \n" +
        " return new Promise((resolve, reject) => {" +
        "   (function($qry, $script, $resolve, $reject){\n" +
        inputScript +
        "   })($qry, $script, resolve, reject)\n" +
        "\n});\n" +
        "};\n\n";
      var code2Execute = requireFromString(code2ExecuteStr);
      code2Execute($qry, $script)
        .then(function (result) {          
          rs({result: result});
        })
        .catch(function (err) {          
          rs({error: err.message});
        });
    } else {      
      rs({message: "No script found to run."});
    }
  });
}

const bundleLoader = function (app, {name}, {request, response}) {
  return new Promise(async (resolve, reject) => {
    var bundleLoaderPATH = __dirname + '/../' +  "mmf/base/script/BundleLoader.js";
    var bundleLoader = require(bundleLoaderPATH);
    await bundleLoader(app, name, response, false);
    resolve();
  });
}

const debugBundleLoader = function (app, {name}, {request, response}) {
  return new Promise(async (resolve, reject) => {
    var bundleLoaderPATH = __dirname + '/../' +  "mmf/base/script/BundleLoader.js";
    var bundleLoader = require(bundleLoaderPATH);
    await bundleLoader(app, name, response, true);
    resolve();
  });
}

const getModules = async function(pageId, scope) {
  var cachePATH = __dirname + '/../' +  "mmf/base/script/cache.js";
  var cache = require(cachePATH);

  let bundleMaps = await cache.get("bundleMaps");  
  let pageModules = [];
  if(bundleMaps) {
    if(bundleMaps.page && bundleMaps.page[pageId]) {
      let allPageBundles = bundleMaps.page[pageId];
      if(allPageBundles && allPageBundles.length > 0) {
        for(let pageBundleIndx in allPageBundles) {
          let pageBundle = allPageBundles[pageBundleIndx];
          if(pageBundle.Type == "module") {
            pageModules.push({name: pageBundle.Name, url: pageBundle.Resource});
          }
        }
      }
    }
    if(bundleMaps.scope && bundleMaps.scope[scope]) {
      let allScopeBundles = bundleMaps.scope[scope];
      if(allScopeBundles && allScopeBundles.length > 0) {
        for(let scopeBundleIndx in allScopeBundles) {
          let scopeBundle = allScopeBundles[scopeBundleIndx];
          if(scopeBundle.Type == "module") {
            pageModules.push({name: scopeBundle.Name, url: scopeBundle.Resource});
          }
        }
      }
    }
    if(bundleMaps.scope && bundleMaps.scope["*"]){
        let allScopeBundles = bundleMaps.scope["*"];
        if(allScopeBundles && allScopeBundles.length > 0) {
          for(let scopeBundleIndx in allScopeBundles) {
            let scopeBundle = allScopeBundles[scopeBundleIndx];
            if(scopeBundle.Type == "module") {
              pageModules.push({name: scopeBundle.Name, url: scopeBundle.Resource});
            }
         }
       }
     }          
  }
  return pageModules;
} 

const pageModulesFetcher = async function (app, {name}, {request, response}) {  
  var cachePATH = __dirname + '/../' +  "mmf/base/script/cache.js";
  var cache = require(cachePATH);

  let rootPath = name;
  rootPath = rootPath.indexOf("/") > -1? rootPath.split("/")[0]:rootPath;        
  rootPath = (!rootPath.startsWith("/"))?"/" + rootPath: rootPath;  
  let pages = await cache.get("pages"); 
  let result = [];
  if(pages) {
    if(pages.routes && pages.routes.length > 0) {
      for(let routeIndx in pages.routes) {
        let route = pages.routes[routeIndx];
        let currentPageBasePath = route.path;
        if(currentPageBasePath && currentPageBasePath.split("/").length > 2) {
          currentPageBasePath = currentPageBasePath.split("/")[0] + "/" + currentPageBasePath.split("/")[1];
        }
        if(currentPageBasePath.startsWith(rootPath)) {
          result = await getModules(route.pageId, route.scope);
        }        
      }
    }

    if(pages.slides && pages.slides.length > 0) {
      for(let slideIndx in pages.slides) {
        let slide = pages.slides[slideIndx];
        let currentSlideBasePath = slide.path;
        if(currentSlideBasePath && currentSlideBasePath.split("/").length > 2) {
          currentSlideBasePath = currentSlideBasePath.split("/")[0] + "/" + currentSlideBasePath.split("/")[1];
        }
        if(currentSlideBasePath.startsWith(rootPath)) {
          result = await getModules(slide.pageId, slide.scope);          
        }        
      }
    }
  }
  
  response.contentType('application/json');
  response.send(result);
  response.end();
}

const pageBundleLoader = function (app, {name}, {request, response}) {
  return new Promise(async (resolve, reject) => {
    var pageBundleLoaderPATH = __dirname + '/../' +  "mmf/base/script/PageBundleLoader.js";
    var pageBundleLoader = require(pageBundleLoaderPATH);
    await pageBundleLoader(app, name, response);
    resolve();
  });
}

const componentLoader = function (app, reqContext, {request, response}) {
  return new Promise(async (resolve, reject) => {
    var componentName = request.query['param.name'];
    var result = "";
    if (componentName) {
      var componentDependencyLoaderPATH = __dirname + '/../' +  "mmf/base/script/ComponentDependencyLoader.js";
      var componentDependencyLoader = require(componentDependencyLoaderPATH);
      componentDependencyLoader(app, componentName).then(function (output) {
        result = result + "\n" + output;
        response.send(result);
        response.end();
        resolve();
      }).catch(function (err) {
        response.send("");
        response.end();
        resolve();
      })
    }
  });
}

var syncServer = function (app) {
  try {
    var syncPort = app.get("syncPort");
    var WebSocketServer = require('ws').Server,
      wss = new WebSocketServer({ port: syncPort });
    wss.on('connection', function (ws) {      
      ws.on('message', function (rawMessage) {        
        let message = JSON.parse(rawMessage);
        let payload = message.payload;        

        var appInstance = (function(accessToken) {            
            return new Proxy(app, {
            get: function (target, name, receiver) {
              return target[name] || this[name];
            },
            getAccessToken: function() {
              return accessToken;
            } 
          });  
        })(message.accessToken);   

        if (payload.startsWith(srsteeConstants.getAccessToken)) {
          pushToken(ws, payload);
        }else if (payload.startsWith(srsteeConstants.request2Server2SendFilesHeader)) {
          pushData(ws, appInstance, payload);
        } else if (payload.startsWith(srsteeConstants.syncConfigRequestHeader)) {
          processData(ws, payload, appInstance, true);
        } else if (payload.startsWith(srsteeConstants.syncDataRequestHeader)) {
          processData(ws, payload, appInstance, false);
        } else if (payload.startsWith(srsteeConstants.request2Server2UpdateBundleMap)) {
          updateBundleMap(ws, payload, appInstance);
        } else if (payload.startsWith(srsteeConstants.request2Server2UpdateBundle)) {
          updateBundle(ws, payload, appInstance);
        } else if (payload.startsWith(srsteeConstants.enableBundling)) {
          setBundling(ws, appInstance, true);
        } else if(payload.startsWith(srsteeConstants.disableBundling)) {
          setBundling(ws, appInstance, false);
        }
      });
      syncClients.push(ws);
    });
  } catch (ex) {
    console.error('Exception occurred ' + ex);
  }
}

var setBundling = async function(ws, app, isEnabled) {
  await propertySetter(app, "enable.bundling", isEnabled);
  ws.send(JSON.stringify({type: 'Done'}));
}

var updateBundle = function (ws, inputPayload, app) {
  var bundleFilePATH = __dirname + '/../' +  'client/src/bundle.js';
  let payloadComponent = inputPayload.split(srsteeConstants.request2Server2UpdateBundle);
  if (payloadComponent && payloadComponent.length == 2) {
    payloadComponent = payloadComponent[1];
    let bundleData = payloadComponent.split(srsteeConstants.Delimiter);
    if (bundleData && bundleData.length == 2) {
      fs.writeFile(bundleFilePATH, bundleData[1], function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('Bundle file uploaded successfully!');
        }
        ws.send(JSON.stringify({type: 'bundle'}));
      });

      var bundleCreatorPATH = __dirname + '/../' +  "mmf/base/script/BundleCreator.js";
      var bundleCreator = require(bundleCreatorPATH);
      bundleCreator(app, bundleData[0], bundleData[1]);
    }
  }
}

var updateBundleMap = function (ws, inputPayload, app) {
  var bundleFilePATH = __dirname + '/../' +  'client/src/bundle.js.map';
  let payloadComponent = inputPayload.split(srsteeConstants.request2Server2UpdateBundleMap);
  if (payloadComponent && payloadComponent.length == 2) {
    payloadComponent = payloadComponent[1];
    fs.writeFile(bundleFilePATH, payloadComponent, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Bundle map file uploaded successfully!');
      }
      ws.send(JSON.stringify({type: 'bundlemap'}));
    });
  }
}

var processData = async function(ws, inputPayload, app, hasSequel) {
  var payload = [];
  var updateFiles2DBUtilPATH = "";
  if (hasSequel) {
    updateFiles2DBUtilPATH = __dirname + '/../' +  "mmf/base/script/UpdateConfigFiles2DB.js";
    let payloadComponent = inputPayload.split(srsteeConstants.syncConfigRequestHeader);
    if (payloadComponent && payloadComponent.length == 2) {
      payloadComponent = payloadComponent[1];
      payload = JSON.parse(payloadComponent);      
    }
  } else {
    updateFiles2DBUtilPATH = __dirname + '/../' +  "mmf/base/script/UpdateFiles2DB.js";
    let payloadComponent = inputPayload.split(srsteeConstants.syncDataRequestHeader);
    if (payloadComponent && payloadComponent.length == 2) {
      payloadComponent = payloadComponent[1];
      if (payloadComponent) {
        payload = JSON.parse(payloadComponent);
      }
    }
  }
  
  var updateFiles2DBUtil = require(updateFiles2DBUtilPATH);

  if (payload) {
    if(Array.isArray(payload))  {      
      var updateFilesHandler = updateFiles2DBUtil(payload, app, null, ws);      
    }else {      
      var updateFilesHandler = updateFiles2DBUtil(payload, app, null, ws);      
    } 
    updateFilesHandler.then(function () {
      if (hasSequel) {
        ws.send(JSON.stringify({type: srsteeConstants.request2Client2SendFilesHeader}));
      } else {
        ws.send(JSON.stringify({type: srsteeConstants.syncCompletedResponseHeader}));
      }
    });   
  }
}

var getModel = function(modelName){
  let model = null;
  let ds = app.datasources['mmf'];
  let models = ds.models;
  let modelNames = Object.keys(models);
  
  for(let i=0;i<modelNames.length;i++){
      let mName = modelNames[i];
      let modelInstance = models[mName];
      if(modelInstance.modelName == modelName){
          model = modelInstance
          break;
      }
  }

  return model;
}

var pushToken = async function(ws, payload) {
  let credentialsJSON = payload.split(srsteeConstants.getAccessToken + "-")[1];
  let responseObj = {};
  try {
    let credentials = JSON.parse(credentialsJSON);    
    if(credentials) {     
      var {jwtToken} = await jwtTokenGen(app, credentials.username, credentials.password)                                                            
      if(jwtToken) {        
        responseObj["payload"] = jwtToken;
        responseObj["type"] = srsteeConstants.getAccessToken;
        ws.send(JSON.stringify(responseObj));                                                               
      }else {
        //password didn't match
        responseObj["type"] = srsteeConstants.authFailed;
        ws.send(JSON.stringify(responseObj));
      }         
    }
  }catch(err) {
    console.error(err);
    responseObj["type"] = srsteeConstants.authFailed;
    responseObj["message"] = "username/password not valid";
    ws.send(JSON.stringify(responseObj));
  } 
}

var pushData = function (ws, app, lastSyncId) {    
  var fetchFileContentsUtilPATH = __dirname + '/../' +  "mmf/base/script/ReadFileContents.js";  
  var fetchFileContentsUtil = require(fetchFileContentsUtilPATH);
  var fileContentsLoader = fetchFileContentsUtil(app, lastSyncId, null, ws);
  if (syncClients) {
    var indx = 0;
    if (syncClients) {
      syncClients.forEach(function (clientConnect) {
        indx++;
      })
    }
  }

  fileContentsLoader.then(function (fileContents) {
    ws.send(JSON.stringify({type: srsteeConstants.payloadSent, payload: JSON.stringify(fileContents)}));
  }).catch(function (err) {
    ws.send(JSON.stringify({type: srsteeConstants.payloadSent, payload: JSON.stringify([])}));
  });
}

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
 boot(app, __dirname, async function (err) {
  if (err) throw err;  
  var debugMode = app.get("debugMode");
  var totalWorkers = (process.argv.length == 3 && process.argv[2] ==  "--single")? 1: app.get("numberOfWorkers");  
  totalWorkers = totalWorkers? parseInt(totalWorkers): require('os').cpus().length;

  if(totalWorkers == 1) {
    app.start();
    app.__basedir = __dirname + '/../';
    app.version = 1;
    app.$qry = require(__dirname + '/../' +  'mmf/base/script/$qry.js')();
    var startUpScriptPATH = __dirname + '/../' +  "mmf/base/script/startupScript.js";
    var mmfStartupScript = require(startUpScriptPATH);
    var LoopBackContext = require('loopback-context');
    app.use(cookieParser("srste-platform")); 
    // app.use(loopback.token({cookies: ['authorization']}));
    app.use(LoopBackContext.perRequest());
    testCafeServer =  await createTestCafe('localhost', app.get("testport1")?app.get("testport1"): 1337, app.get("testport2")?app.get("testport2"): 1338);    

    mmfStartupScript(app, loopback).then(()=> {
      refreshPublicPages(app);
    });
    await reloadWFTopics(app);
  }else {    
    runInClusterMode(app, totalWorkers, debugMode);
  }
});

var processWorkerMessages = function(message) {
  console.log("Message from worker = " + message); 
  let sourceWorkerId = -1; 
  switch(message.task) {
    case "status-report": 
      console.log('Worker ' + message.data.pid + ' - ' + message.data.status);
      break;
    case "SCHEMA_CHANGED":
      sourceWorkerId = message.data.pid;
      let modelName = message.data.schemaName;
      //Send the schema changed notification to all the workers so the requests waiting on each worker can be freed up...
      if(app.workers && Object.keys(app.workers).length > 1) {
        Object.keys(app.workers).map((workerId) => {
          if(workerId != sourceWorkerId) {
            console.log("workerId - " + workerId);
            if(app.workers[workerId]) {                            
              app.workers[workerId].send({command: "SCHEMA_CHANGED", data: {schemaName: modelName}});
            }
          }
        });
      }
      break;
      case "RELATIONSHIP_CHANGED":
      sourceWorkerId = message.data.pid;
      let relationshipName = message.data.schemaName;
      //Send the schema changed notification to all the workers so the requests waiting on each worker can be freed up...
      if(app.workers && Object.keys(app.workers).length > 1) {
        Object.keys(app.workers).map((workerId) => {
          if(workerId != sourceWorkerId) {
            if(app.workers[workerId]) {              
              app.workers[workerId].send({command: "RELATIONSHIP_CHANGED", data: {schemaName: relationshipName}});
            }
          }
        });
      }
      break;
    case "RELOAD_SCHEMA": 
      let workerToReloadSchema = message.data.pid;      
      if(app.workers && Object.keys(app.workers).length > 1) {
        Object.keys(app.workers).map((workerId) => {
          if(workerId != workerToReloadSchema) {
            if(app.workers[workerId]) {              
              app.workers[workerId].send({command: "RELOAD_SCHEMA", data: {}});
            }
          }
        });
      }      
      break;
    case "BOUNCE": 
      let workerToRestart = message.data.pid;      
      // Restart the worker
      if(app.workers && app.workers[workerToRestart]) {    
        app.workers[workerToRestart].send({command: "SHUTDOWN"});
        setTimeout(function() {
          if(cluster.workers[workerToRestart]) {
              cluster.workers[workerToRestart].kill('SIGKILL');
          }
        }, 5000);   
      }
      break;
    case "REFRESH_PUBLIC": 
      sourceWorkerId = message.data.pid;      
      //Send the schema changed notification to all the workers so the requests waiting on each worker can be freed up...
      if(app.workers && Object.keys(app.workers).length > 1) {
        Object.keys(app.workers).map((workerId) => {
          if(workerId != sourceWorkerId) {            
            if(app.workers[workerId]) {                            
              app.workers[workerId].send({command: "REFRESH_PUBLIC", data: {}});
            }
          }
        });
      }
      break;
    case "REFRESH_CACHE": 
      sourceWorkerId = message.data.pid;      
      //Send the schema changed notification to all the workers so the requests waiting on each worker can be freed up...
      if(app.workers && Object.keys(app.workers).length > 1) {
        Object.keys(app.workers).map((workerId) => {
          if(workerId != sourceWorkerId) {            
            if(app.workers[workerId]) {                            
              app.workers[workerId].send({command: "REFRESH_CACHE", data: {}});
            }
          }
        });
      }
      break;
    case "REFRESH_WFMETA": 
      sourceWorkerId = message.data.pid;      
      //Send the schema changed notification to all the workers so the requests waiting on each worker can be freed up...
      if(app.workers && Object.keys(app.workers).length > 1) {
        Object.keys(app.workers).map((workerId) => {
          if(workerId != sourceWorkerId) {            
            if(app.workers[workerId]) {                            
              app.workers[workerId].send({command: "REFRESH_WFMETA", data: {}});
            }
          }
        });
      }
      break;
    case "STOP_WFMETA": 
      sourceWorkerId = message.data.pid;      
      //Send the schema changed notification to all the workers so the requests waiting on each worker can be freed up...
      if(app.workers && Object.keys(app.workers).length > 1) {
        Object.keys(app.workers).map((workerId) => {
          if(workerId != sourceWorkerId) {            
            if(app.workers[workerId]) {                            
              app.workers[workerId].send({command: "STOP_WFMETA", data: {}});
            }
          }
        });
      }
      break;
    default: 
      break;
  }        
};

var refreshPublicPages = function(app) {
  var $tbl = {};  
  let ds = app.datasources['mmf'];
  let models = ds.models;
  let modelNames = Object.keys(models);
  
  modelNames.forEach(function (modelName) {                 
    let modelInstance = models[modelName];
    $tbl[modelInstance.modelName] = modelInstance;
  });

  $tbl.MetaSlide.find({where: {is_public: true}}, (err, slideObjs)=> {
    if(slideObjs && slideObjs.length > 0) {
      for(var slideObjIndx in slideObjs) {
        let slideData = slideObjs[slideObjIndx];
        publicPages.push({type: "slide", name: slideData.Name, path: slideData.Path});
      }
    }
  });
  $tbl.MetaRoute.find({where: {is_public: true}}, (err, routeObjs)=> {
    if(routeObjs && routeObjs.length > 0) {
      for(var routeObjIndx in routeObjs) {
        let routeData = routeObjs[routeObjIndx];
        publicPages.push({type: "route", name: routeData.Name, path: routeData.Path});
      }
    }
  });
}

var refreshPublicMethods = function(app) {
  var $tbl = {};
  let ds = app.datasources['mmf'];
  let models = ds.models;
  let modelNames = Object.keys(models);

  modelNames.forEach(function (modelName) {           
    let modelInstance = models[modelName];      
    $tbl[modelInstance.modelName] = modelInstance;
  });

  $tbl.MetaRestMethod.find({where: {is_public: true}}, (err, restMethods)=> {
    if(restMethods && restMethods.length > 0) {
      for(var restMethodIndx in restMethods) {
        let restMethod = restMethods[restMethodIndx];
        publicMethods.push({type: "restmethod", name: restMethod.Name, path: restMethod.Path, uid: restMethod.uid});
      }
    }
  }); 
}

var runInClusterMode = async function(app, numOfWorkers, debugMode) {
  // start the server if `$ node server.js`  
  
  if (require.main === module) {

    if(cluster.isMaster) {      
      var numWorkers = numOfWorkers? parseInt(numOfWorkers): require('os').cpus().length;

      console.log('Master cluster setting up ' + numWorkers + ' workers...');
      app.__basedir = __dirname + '/../';
      app.workers = {};                 

      for(var workerIndx = 0; workerIndx < numWorkers; workerIndx++) {                   
        
        let worker = cluster.fork();
        app.workers[worker.process.pid] = worker;

        //From worker to master 
        worker.on("message", processWorkerMessages);        
      }    
      cluster.on('online', function(worker) {
        console.log("Worker with pid " + worker.process.pid + " is online");        
      });
    
      cluster.on('exit', function(worker, code, signal) {
          console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
          console.log('Starting a new worker');
          let newworker = cluster.fork();
          if(app.workers[worker.process.pid]) {
            delete app.workers[worker.process.pid];
          }
          app.workers[newworker.process.pid] = newworker;
          newworker.on("message", processWorkerMessages);        
      });      
    } else {
      app.start();    
      testCafeServer =  await createTestCafe('localhost', app.get("testport1")?app.get("testport1"): 1337, app.get("testport2")?app.get("testport2"): 1338);    
      app.__basedir = __dirname + '/../';
      app.version = 1;
      app.$qry = require(__dirname + '/../' + 'mmf/base/script/$qry.js')();
      var startUpScriptPATH = __dirname + '/../' + "mmf/base/script/startupScript.js";
      var mmfStartupScript = require(startUpScriptPATH);
      var LoopBackContext = require('loopback-context');
      app.use(cookieParser("srste-platform")); 
      app.use(LoopBackContext.perRequest());
      await mmfStartupScript(app, loopback)   
      await refreshPublicPages(app);
      await refreshPublicMethods(app);
      await reloadWFTopics(app);
      //From master to worker
      process.on("message", async function(message) {
        switch(message.command) {
          case "SHUTDOWN": 
            console.log("Master asked me to shutdown and hence going down...");
            process.exit(0);
            break;
          case "SCHEMA_CHANGED":
            let modelName = message.data? message.data.schemaName: "";
            if(modelName){
              if(app && app.notifyOnModelUpdate && app.notifyOnModelUpdate[modelName]) {
                let subscriberIds = Object.keys(app.notifyOnModelUpdate[modelName]);                
                for(let subscriberIdIndx in subscriberIds) {
                  let subscriberId = subscriberIds[subscriberIdIndx];                  
                  let subscriberResponse = app.notifyOnModelUpdate[modelName][subscriberId];
                  subscriberResponse.end(JSON.stringify({status: "model_updated"}));                
                }
              }
            }            
            process.send({task: "RELOAD_SCHEMA", data: {pid: process.pid}});            
            break;
          case "RELATIONSHIP_CHANGED":
            let relationshipName = message.data? message.data.schemaName: "";
            if(relationshipName){
              if(app && app.notifyOnRelationshipUpdate && app.notifyOnRelationshipUpdate[relationshipName]) {
                let subscriberIds = Object.keys(app.notifyOnRelationshipUpdate[relationshipName]);      
                for(let subscriberIdIndx in subscriberIds) {        
                  let subscriberId = subscriberIds[subscriberIdIndx];                  
                  let subscriberResponse = app.notifyOnRelationshipUpdate[relationshipName][subscriberId];
                  subscriberResponse.end(JSON.stringify({status: "relationship_updated"}));
                }
              }
            }
            process.send({task: "RELOAD_SCHEMA", data: {pid: process.pid}});                                  
            break;
          case "RELOAD_SCHEMA":                         
              let startUpScriptPATH = __dirname + "/../mmf/base/script/startupScript.js";
              let mmfStartupScript = require(startUpScriptPATH);        
              mmfStartupScript(app, loopback, true);            
              break;   
          case "REFRESH_PUBLIC": 
              await refreshPublicPages(app);
              await refreshPublicMethods(app);
              break;  
          case "REFRESH_CACHE": 
              await reloadCache(app);
              break;        
          case "REFRESH_WFMETA": 
              await reloadWFTopics(app);
              break;
          case "STOP_WFMETA":
              await stopWFTopics(app);
              break;
        }                                
      });      
      //Send from worker to master
      if(process.send) {
        process.send({task: "status-report", data: {pid: process.pid, status: "booting"}});
      }      
    }    
  }
}
