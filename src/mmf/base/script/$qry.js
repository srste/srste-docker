var requireFromString = require('require-from-string');
var LoopBackContext = require('loopback-context');
var mcache = require("./cache");

module.exports = function (ctx, app) {
  return {    
    srsteeConstants: require('./srstee-constants'),
    graphqlLodashMod: require('graphql-lodash'),
    cache: mcache,
    getApp: function() { return app; },
    getContext: function () {
      if (ctx && ctx.authorization) {
        return ctx;
      }
      return LoopBackContext.getCurrentContext();
    },

    getConnector: function(dsType) {
      let requiredConnector = "";
      switch(dsType) {
          case "oracle": 
            requiredConnector = 'loopback-connector-oracle';
            break;      
          case "mysql": 
            requiredConnector = 'loopback-connector-mysql';
            break;
          case "mongodb":
            requiredConnector = 'loopback-connector-mongodb';
            break;          
          case "mssql": 
            requiredConnector = 'loopback-connector-mssql';
            break;          
          case "redis":
            requiredConnector = 'loopback-connector-redis';
            break;          
          case "postgresql":
            requiredConnector = 'loopback-connector-postgresql';
            break;          
          case "cassandra": 
            requiredConnector = 'loopback-connector-cassandra';
            break;          
          case "couchdb2":
            requiredConnector = 'loopback-connector-couchdb2';
            break;
          case "db2":
            requiredConnector = 'loopback-connector-db2';
            break;
          case "sqllite3":
            requiredConnector = 'loopback-connector-sqlite3';
            break;          
          case "openapi":
            requiredConnector = 'loopback-connector-openapi';
            break;          
          case "rest":
            requiredConnector = 'loopback-connector-rest';
            break;
          case "soap":
            requiredConnector = 'loopback-connector-soap';
            break;
          case "email":
            return "mail";
          case "googlecloud":
            requiredConnector = 'loopback-connector-google-cloud-datastore';
            break;
          case "redshift": 
            requiredConnector = 'loopback-connector-redshift';
            break;          
          case "elastic": 
            requiredConnector = 'loopback-connector-es';
            break;          
          case 'kafka':
            requiredConnector = 'loopback-connector-kafka';
            break;
          case 'couchdb': 
            requiredConnector = 'loopback-connector-couch';
            break;
          case 'neo4j': 
            requiredConnector = 'loopback-connector-neo4j';
            break;
          case 'twilio':
            requiredConnector = 'loopback-connector-twilio';
            break;
          case 'saphana':
            requiredConnector = 'loopback-connector-saphana';
            break;
          case 'rethinkdb':
            requiredConnector = 'loopback-connector-rethinkdb';
            break;
          case 'realtimedb':
            requiredConnector = 'loopback-connector-realtime-database';
            break;
      }

      delete require.cache[require.resolve(requiredConnector)];
      return require(requiredConnector);
    },

    $ds: function() {
      let self = this;
      let $qry = self.$qry || self;

      return {              
        defineDatasource: async function(dsName, type, connectionDetails, scope) {          
          if(dsName && type && scope) {
            let payload = {
              Name: dsName,
              Type: type, 
              Connection: connectionDetails, 
              Scope: scope
            };
            let dsRecord = await $qry.getRecords("MetaDataSource", {where: {Name: dsName}}, ["uid"]);
            if(dsRecord && dsRecord.length > 0) {
              dsRecord = dsRecord[0];
              if(dsRecord.uid) {
                //update datasource with new data...
                return await $qry.updateRecord("MetaDataSource", dsRecord.uid, payload, ["uid"]);
              }
            }else {
              return await $qry.createRecord("MetaDataSource", payload, ["uid"]);
            }          
          }
        },
        getDatasource: async function(datasourceName, disconnect) {
          let result = new Promise(async (resolve, reject) => {
            var DataSource, connector;
            let dsRecord = await $qry.getRecords("MetaDataSource", {where: {Name: datasourceName}}, ["uid", "Name", "Type", "Connection"]);
            if(dsRecord && dsRecord.length > 0) {
              dsRecord = dsRecord[0];
              let dsType = dsRecord.Type;
              let dsName = dsRecord.Name;
              let dsConnectDetails = { name: datasourceName };
              try {
                dsConnectDetails = JSON.parse(dsRecord.Connection);   
                dsConnectDetails.name = datasourceName;           
              }catch(err) {}
              DataSource = require('loopback-datasource-juggler').DataSource;
              if(app.datasources[datasourceName]) {
                if(!!disconnect) {
                  app.datasources[datasourceName].disconnect(function(err, result) {
                    if(err) {
                      console.error(err);
                    }                
                    connector = $qry.getConnector(dsType);
                    if(typeof connector == "object") {
                      app.datasources[dsName] = new DataSource(connector, dsConnectDetails);    
                    }else if(typeof connector == "string") {
                      dsConnectDetails.connector = connector;
                      app.datasources[dsName] = new DataSource(dsConnectDetails);
                    }                
                    resolve(app.datasources[dsName]);
                  });
                }else {
                  resolve(app.datasources[datasourceName]);
                }                
              }else {              
                connector = $qry.getConnector(dsType);
                if(typeof connector == "object") {
                  app.datasources[dsName] = new DataSource(connector, dsConnectDetails);    
                }else if(typeof connector == "string") {
                  dsConnectDetails.connector = connector;
                  app.datasources[dsName] = new DataSource(datasourceName, dsConnectDetails);
                } 
                resolve(app.datasources[dsName]);
              }              
            }else {
              resolve(null);
            } 
          });
          return await result;                   
        },
        
        defineModel: async function(modelName, scope, fieldMap, datasourceName, createIfNotExist) {
          if(modelName && datasourceName) {
            let payload = {
              Name: modelName,
              Datasource: datasourceName, 
              Definition: fieldMap, 
              Scope: scope
            };
            let xModelRecord = await $qry.getRecords("MetaXModel", {where: {Name: modelName}}, ["uid"]);
            if(xModelRecord && xModelRecord.length > 0) {
              xModelRecord = xModelRecord[0];
              if(xModelRecord.uid) {
                //update external model with new data...
                await $qry.updateRecord("MetaXModel", xModelRecord.uid, payload, ["uid"]);
              }
            }else {
              await $qry.createRecord("MetaXModel", payload, ["uid"]);
            } 

            if(createIfNotExist) {
              let ds = await this.getDatasource(datasourceName);
              ds.createModel(modelName, fieldMap.properties, fieldMap.options || {});
              ds.autoupdate(modelName, function (err, result) {});
            }
          }          
        },

        getModel: async function(modelName, datasourceName) {
          if(!modelName || !datasourceName) {
            return false;
          }

          let datasourceInstance = await this.getDatasource(datasourceName);
          let xModelRecord = await $qry.getRecords("MetaXModel", {where: {Name: modelName}}, ["uid", "Name", "Definition"]);
          if(xModelRecord && xModelRecord.length > 0) {
            xModelRecord = xModelRecord[0];            
            let definition = {};
            try {
              definition = JSON.parse(xModelRecord.Definition);   
            }catch(err) {}
          
            /*
              FieldMap example: { name: String, bio: String, approved: Boolean, joinedAt: Date, age: Number }
            */
            var ModelBuilder = require('loopback-datasource-juggler').ModelBuilder;
            var builder = new ModelBuilder();
            var modelObj = builder.define(modelName, definition.properties || {}, {...definition.options});
            modelObj.attachTo(datasourceInstance);
            return modelObj;
          }else {
            return null;
          }       
        },

        runOperation: async function(modelName, datasourceName, operation, instanceData ) {    
          return new Promise(async (resolve, reject) => {
            let modelObj = await this.getModel(modelName, datasourceName);
            if(modelObj && modelObj[operation]) {
              modelObj[operation](instanceData, function(err, result) {
                resolve(result);
              });
            }else {
              resolve(null);
            }
          });              
        }   
      }
    },

    getRecords: async function (model, filter, outputFields, pageNumber, pageSize) {        
      let result = [];
      let resultantFields = outputFields && outputFields.length > 0? outputFields: ["uid"];

      let recordNodes = await this.runscript("getRecords", {tableName: model, fields: outputFields, fieldAliases: null, filter: filter, pageNumber, pageSize});
      if(recordNodes && recordNodes.length > 0) {
          recordNodes.map((recordNode)=> {  
              let resultObj = {}; 
              resultantFields.map((resultantField)=>{
                  if(recordNode.node) {
                      resultObj[resultantField] = recordNode.node[resultantField] || "";
                  }                    
              });            
              result.push(resultObj);
          })
      }
      return result;
    },

    getRecordCount: async function (model, filter) {
      let queryDefinition = `query($input: JSON){
                              ${model}{
                                ${model}Count(where: $input)
                              }
                            }`;
      let variables = {
        "input": filter
      };

      let countData = await this._run(queryDefinition, variables);
      let countPath = `data.${model}.${model}Count`;
      let count = this.getValue(countData, countPath);
      return {count};
    },

    createRecord: function (model, fields, outputFields, cb) {
      let queryNParams = this._getInsertQueryNParams(model, fields, outputFields);
      if (cb) {
        this._run(queryNParams.query, queryNParams.variables, queryNParams.accesspath)
          .then((data) => {
            cb(data);
          })
          .catch((err) => {
            console.error("Error occurred in $qry.createRecord - " + err);
          });
      } else {
        return new Promise(async (resolve, reject) => {
          try {
            let data = await this._run(queryNParams.query, queryNParams.variables, queryNParams.accesspath);
            resolve(data);
          } catch (err) {
            resolve({ result: { error: true, msg: err } });
          }
        })
      }
    },

    updateRecord: function (model, modelId, fields, outputFields, cb) {
      let queryNParams = this._getUpsertQueryNParams(model, modelId, fields, outputFields);
      if (cb) {
        this._run(queryNParams.query, queryNParams.variables, queryNParams.accesspath)
          .then((data) => {
            cb(data);
          })
          .catch((err) => {
            console.error("Error occurred in $qry.updateRecord - " + err);
          });
      } else {
        return new Promise(async (resolve, reject) => {
          try {
            let data = await this._run(queryNParams.query, queryNParams.variables, queryNParams.accesspath);
            resolve(data);
          } catch (err) {
            resolve({ result: { error: true, msg: err } });
          }
        })
      }
    },

    updateRecords: function (model, filter, fields, outputFields, cb) {
      let queryNParams = this._getUpsertFilterQueryNParams(model, filter, fields, outputFields);
      if(cb) {
          this._run(queryNParams.query, queryNParams.variables, queryNParams.accesspath)
              .then((data) => {
                  cb(data);
              })
              .catch((err) => {
                  console.error("Error occurred in $qry.updateRecord - " + err);
              });
      }else {
          return new Promise(async (resolve, reject)=>{
              try {
                  let data = await this._run(queryNParams.query, queryNParams.variables, queryNParams.accesspath);
                  resolve(data);
              }catch(err) {
                 resolve({result: { error: true, msg: err}}); 
              }
          })
      }
  },

    deleteRecord: function (model, modelId, cb) {
      let queryNParams = this._getDeleteByIdQueryNParams(model, modelId);
      if (cb) {
        this._run(queryNParams.query, queryNParams.variables)
          .then((data) => {
            cb(data);
          })
          .catch((err) => {
            console.error("Error occurred in $qry.deleteRecord - " + err);
          });
      } else {
        return new Promise(async (resolve, reject) => {
          try {
            let data = await this._run(queryNParams.query, queryNParams.variables);
            resolve(data);
          } catch (err) {
            resolve({ result: { error: true, msg: err } });
          }
        })
      }
    },

    deleteRecords: function(model, filter, cb) {   
      let queryNParams = {
        query: `mutation($input:${model}DestroyAllInput!){
          ${model}DestroyAll(input:$input){
            obj
          }  
        }`,
        variables: `{
          "input": {
            "where": ${JSON.stringify(filter)}
          }  
        }`
      };

      if (cb) {
        this._run(queryNParams.query, queryNParams.variables)
          .then((data) => {
            let countPath = `data.${model}DestroyAll.obj`;
            let count = this.getValue(data, countPath);
            cb(count);
          })
          .catch((err) => {
            console.error("Error occurred in $qry.deleteRecord - " + err);
          });
      } else {
        return new Promise(async (resolve, reject) => {
          try {
            let countData = await this._run(queryNParams.query, queryNParams.variables);
            let countPath = `data.${model}DestroyAll.obj`;
            let count = this.getValue(countData, countPath);
            resolve(count);
          } catch (err) {
            resolve({ result: { error: true, msg: err } });
          }
        })
      }
    },

    _getInsertQueryNParams(tableName, fields, outputFields){
      let result = {};
      result["query"] = `mutation($input: ${tableName}CreateInput!){\n ${tableName}Create(input:$input){\n obj{\n ${outputFields.join(" ")} \n} \n} \n}`;
      result["variables"] = `{"input": { "data": ${JSON.stringify(fields)} } }`;
      result["accesspath"] = `data.${tableName}Create.obj`;
      return result;
    },
    
    _getUpsertQueryNParams(tableName, recordId, fields, outputFields){
      let result = {};
      result["query"] = `mutation($input: ${tableName}UpsertWithWhereInput!){\n ${tableName}UpsertWithWhere(input:$input){\n obj{\n ${outputFields.join(" ")} \n} \n} \n}`;
      result["variables"] = `{"input": { "data": ${JSON.stringify(fields)}, "where":{ "uid": "${recordId}" }  } }`;
      result["accesspath"] = `data.${tableName}UpsertWithWhere.obj`;
      return result;
    },

    _getUpsertFilterQueryNParams(tableName, filter, fields, outputFields) {
      let result = {};
      result["query"] = `mutation($input: ${tableName}UpsertWithWhereInput!){\n ${tableName}UpsertWithWhere(input:$input){\n obj{\n ${outputFields.join(" ")} \n} \n} \n}`;
      result["variables"] = `{"input": { "data": ${JSON.stringify(fields)}, "where":${JSON.stringify(filter)}  } }`;
      result["accesspath"] = `data.${tableName}UpsertWithWhere.obj`;
      return result;
    },

    _getDeleteByIdQueryNParams(tableName, recordId){
      let result = {};
      result["query"] = `mutation($input: ${tableName}DeleteByIdInput!){\n ${tableName}DeleteById(input:$input){\n obj \n} \n}`;
      result["variables"] = `{"input": { "id": "${recordId}" } }`;
      return result;
    },

    getQuery: function (queryName, scope) {
      var self = this;
      var scopeValue = (scope) ? scope : "mmf";
      return new Promise(async (resolve, reject) => {
        let cachedQueryResults = await self.cache.get("queries");    
        let filteredQueryData = cachedQueryResults && cachedQueryResults.filter((cachedQueryItem, indx) => cachedQueryItem.Name == queryName && cachedQueryItem.Scope == scopeValue);
        if(filteredQueryData && filteredQueryData.length > 0) {
          resolve(filteredQueryData[0]);
        }else {          
          //Get the query from meta-query table and run the details
          var query = "query($whereClause: JSON){\n  MetaQuery{\n  MetaQueryFindOne(filter: $whereClause){\n    uid\n    Name\n    Definition\n    Variables\n  AccessPath\n}\n }\n}\n";
          var variables = {
            "whereClause": {
              "where": {
                "Name": queryName,
                "Scope": scopeValue
              }
            }
          };
          this._run(query, variables)
            .then(async function (result) {
              let resultValue = self.getValue(result, 'data.MetaQuery.MetaQueryFindOne');              
              let queryResultsInCache = await self.cache.get("queries");
              queryResultsInCache = queryResultsInCache || [];
              queryResultsInCache.push(result);
              await self.cache.put("queries", queryResultsInCache);
              resolve(resultValue);
            })
            .catch(function (err) {
              console.log('Error occurred... ' + err);
              resolve("");
            });
        }        
      });

    },

    getValue: function (obj, paths) {
      var result;
      if (!paths) {
        return obj;
      }
      var accessPaths = paths.split(',');

      if (accessPaths) {
        accessPaths.forEach(function (path) {
          let partialResult = path.split('.').reduce(function (prev, curr) {
            return prev ? prev[curr] : null
          }, obj);
          if (result) {
            result = Object.assign(result, partialResult);
          } else {
            result = partialResult;
          }

        })
      }

      return result;
    },    

    run: async function (queryName, inputParams, overrideAccessPaths) {
      var self = this;
      return new Promise(async (resolve, reject) => {
        let cacheableQuery = false;
        let cacheHit = false;
        let results = null;
        let cacheDuration = -1;
        let cacheKey = "qry_" + queryName + JSON.stringify(inputParams);
        switch(queryName) {
          case "mmf.getSlideDetailsById":             
          case "mmf.getScopes":             
          case "mmf.getSlidesWithPath":             
          case "mmf.getSlidePropsById":            
          case "mmf.getSlideProps":                      
            cacheableQuery = true;
            results = await mcache.get(cacheKey);
            cacheHit = !!results;
            cacheDuration = -1; //1hr            
            break;           
          case "mmf.getMatchingRoutes": 
            cacheableQuery = true;
            results = await mcache.get(cacheKey);
            cacheHit = !!results;
            cacheDuration = -1; //1hr            
            break;           
          case "mmf.getLoggedInUserScope":
            cacheableQuery = true;
            results = await mcache.get(cacheKey);
            cacheHit = !!results;
            cacheDuration = -1; //1hr
            break;       
        }
        
        if(cacheHit) {
          resolve(results);
        }else {
          var self = this;
          let queryNameValue = queryName;
          let scopeValue = 'mmf';
          if (queryName.indexOf(".") >= 0) {
            let queryParts = queryName.split('.');
            queryNameValue = queryParts[1];
            scopeValue = queryParts[0];
          }
          try {
            this.getQuery(queryNameValue, scopeValue)
              .then(function (result) {
                if (result) {
                  let queryDefinition = result['Definition'];
                  let variables = result['Variables'];
                  let accessPaths = overrideAccessPaths ? overrideAccessPaths : result['AccessPath'];

                  if (inputParams) {
                    Object.keys(inputParams).forEach(function (inputParam) {
                      let paramValue = inputParams[inputParam];

                      if (typeof paramValue == "object") {
                        if (Array.isArray(paramValue)) {
                          paramValue = (paramValue == undefined || paramValue == null) ? [] : paramValue;
                        } else {
                          paramValue = (paramValue == undefined || paramValue == null) ? {} : paramValue;
                        }

                        var regex = new RegExp(`\"\\$\\{${inputParam}\\}\"`, "g");
                        variables = variables.replace(regex, JSON.stringify(paramValue));
                      } else {
                        paramValue = (paramValue == undefined || paramValue == null) ? "" : paramValue;
                        var regex = new RegExp("\\${" + inputParam + "}", "g");
                        variables = variables.replace(regex, escapeStr(paramValue));
                      }
                    });
                  }
                  variables = JSON.parse(variables);
                  self._run(queryDefinition, variables)
                    .then(async function (result) {
                      if (result && accessPaths) {                        
                        let output = self.getValue(result, accessPaths);
                        cacheableQuery && await self.cacheResults(cacheKey, output, cacheDuration);                                            
                        resolve(output);
                      } else {
                        resolve(result);
                      }
                    })
                    .catch(function (err) {
                      console.error('Error occurred... ' + err, queryName, inputParams);
                      resolve("");
                    });

                } else {
                  resolve("");
                }
              })
              .catch(function (err) {
                console.error('Error occurred... ' + err, queryName, inputParams);
                resolve("");
              });
          } catch (ex) {
            console.error('Error occurred... ' + ex, queryName, inputParams);
            resolve("");
          }
        }
      });
    },

    cacheResults: async function (key, value, duration) {
      if(duration == -1) {
        await mcache.put(key, value);
      }else {
        await mcache.put(key, value, duration);
      }
      
    },

    _escapeJSON: function (input) {
      let escapedValue = input;

      try {
        let escapedValue = JSON.parse(
          '"' + (
            JSON.stringify(input)

              .replace(/\\/g, '\\\\')
              .replace(/\//g, '\\\/')
              .replace(/\\\t/g, '\\\\t')
              .replace(/\\\r/g, '\\\\r')
              .replace(/\\\n/g, '\\\\n')
              .replace(/\\\b/g, '\\\\b')
              .replace(/\\\f/g, '\\\\f')              
              .replace(/"/g, '\\"')
              .replace(/'/g, '\\"')              
            // .slice(2, -2)
          ) + '"');
      } catch (err) {
        console.log('Error occurred escaping the $qry params - ' + JSON.stringify(input));
      }
      return escapedValue;
    },

    _run: function (query, variables, overrideAccessPaths) {
      let { query: _query, transform: _transform } = this.graphqlLodashMod ? this.graphqlLodashMod.graphqlLodash(query) : { query, function(q) { return q; } };
      var ctx = this.getContext();
      // Get the current access token
      var accessToken = ctx && (ctx.authorization || ctx.get('authorization'));

      var requestPayload = {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": accessToken
        },
        body: JSON.stringify({
          query: this._escapeJSON(_query),
          variables: this._escapeJSON(variables)
        })
      }
      let self = this;
      return new Promise((resolve, reject) => {
        let graphQLURL = this.srsteeConstants.baseURL + this.srsteeConstants.graphQLPath + "?";        
        fetch(graphQLURL, requestPayload)
          .then(function (response) {
            if (response.status >= 200 && response.status < 300) {
              return response;
            }                   
            const error = new Error(`HTTP Error ${response.statusText}`);
            error.status = response.statusText;
            error.response = response;             
            throw error;
          })
          .then(this.parseJSON)
          .then(function (result) {            
            let resultData = { data: _transform(result.data) };
            if (resultData && overrideAccessPaths) {
              resolve(self.getValue(resultData, overrideAccessPaths));
            } else {
              resolve(resultData);
            }
          })
          .catch(function (err) {
            console.error("Error occurred while fetching the graphql resource - " + err, requestPayload);
            resolve("");
          })
      });
    },

    runscript: function(name, inputParams) {
      var self = this;
      return new Promise((resolve, reject) => {
          try {
              self.getscript(name, inputParams, resolve, reject)
              .then(async (script2Execute) => {
                  let scriptResult = await script2Execute(inputParams);
                  resolve(scriptResult);                       
              })
              .catch((err)=> {
                  resolve("");
              })
          }catch(err) {
              resolve("");
          }                
      });
    },

    //add the cache option later...
    getscript: function(name, inputParams, $topResolve, $topReject) {        
      var scriptName = name.split('.');
      var scopeName;
      if(scriptName.length == 1) {
          scopeName = 'mmf';
          scriptName = scriptName[0];
      }else{
          scopeName = scriptName[0];
          scriptName = scriptName[1];
      }
      var self = this;

      return new Promise(async (resolve, reject) => {

        let cachedServerScripts = await self.cache.get("scripts");
        let filteredServerScript = cachedServerScripts && cachedServerScripts.filter((cachedServerScript, indx) => cachedServerScript.Name == scriptName && cachedServerScript.Scope == scopeName);
        var accessPaths = "data.MetaReusableScript.MetaReusableScriptFindOne";
        var $usr = {};
        var ctx = self.getContext();

        // Set the current access token                
        $usr.token = ctx && (ctx.authorization || ctx.get('authorization'));
        if(ctx && ctx.get && ctx.get('currentUser')) {
            $usr.user = ctx.get('currentUser');
        }else{
            //Fetch the user details and populate it to the ctx as well as $usr
        }
        let $qry = self.$qry || self;
        
        if(filteredServerScript && filteredServerScript.length > 0) {
          let result = filteredServerScript[0];
          if(result && result.Definition)  {
            var script2Execute = "module.exports = function($qry, $script, $usr, $input, $resolve, $reject) {\n" +
                                "    return (" +
                                result.Definition +
                                ")\n};";

            script2Execute = requireFromString(script2Execute)(self.$qry || self, {$qry: self.$qry || self, getContext: self.getContext, names: self.names || self._getScriptNames, runAtServer: self.runscript, getscript: self.getscript, runscript: self.runscript, cache: self.cache }, $usr, inputParams, $topResolve, $topReject);
            resolve(script2Execute);
          }else{
              resolve(null);
          }          
        }else {          
          //Example payload = [ { "node": { "Name": "Test1", "Scope": "demo", "Omni": true } } ]                              

          $qry.run("mmf.GetServerScript", {"Name":scriptName, "Scope":scopeName}, accessPaths)
          .then(async function(result){
              if(result && result.Definition)  {
                  var script2Execute = "module.exports = function($qry, $script, $usr, $input, $resolve, $reject) {\n" +
                                       "    return (" +
                                       result.Definition +
                                       ")\n};";

                  script2Execute = requireFromString(script2Execute)(self.$qry || self, {$qry: self.$qry || self, getContext: self.getContext, names: self.names || self._getScriptNames, runAtServer: self.runscript, getscript: self.getscript, runscript: self.runscript, cache: self.cache }, $usr, inputParams, $topResolve, $topReject);
                  let scriptsInCache = await self.cache.get("scripts");
                  scriptsInCache = scriptsInCache || [];
                  scriptsInCache.push(result);
                  await self.cache.put("scripts", scriptsInCache);                  
                  resolve(script2Execute);
              }else{
                  resolve(null);
              }
          })
          .catch(function(err) {
              console.error('Error occurred while fetching the server script - ' + err);
              resolve(null);
          });
        }          
      });
    },

    _getScriptNames: function() {
      var self = this;
      return new Promise((resolve, reject) => {
          var accessPaths = ["data.MetaReusableUIScript.MetaReusableUIScriptFind.edges",
                              "data.MetaReusableScript.MetaReusableScriptFind.edges"].join();
          self.run("mmf.getClientScripts", {}, accessPaths) 
          .then(function(result){
              var clientScripts = [];
              if(result && result.length > 0) {
                  result.forEach(function(eachFile) {
                      if(eachFile && eachFile.node) {
                          clientScripts.push(eachFile.node['Scope'] + '.' + eachFile.node['Name']);
                      }
                  });
              }
              resolve(clientScripts);
          })
          .catch(function(err) {
              resolve([]);
          })
      });
    },

    saveQuery: function (queryName, scopeValue, queryPayload, variablesPayload) {
      var query = "mutation($input: MetaQueryUpsertWithWhereInput!){\nMetaQueryUpsertWithWhere(input: $input) {\nobj{\nuid\n}\n}\n}\n";
      var updatedVariablesPayload = variablesPayload ? variablesPayload : {};

      var variables = {
        "input": {
          "where": {
            "Name": queryName,
            "Scope": scopeValue
          },
          "data": {
            "Name": queryName,
            "Scope": scopeValue,
            "Definition": queryPayload,
            "Variables": updatedVariablesPayload,
            "AccessPath": "data"
          }
        }
      }

      return this._run(query, variables);
    },

    checkStatus: function (response) {
      if (response.status >= 200 && response.status < 300) {
        return response;
      }
      console.error(response);
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      console.log(error); // eslint-disable-line no-console
      throw error;
    },

    parseJSON: function (response) {
      return response.json();
    }
  }
}

function escapeStr(input) {
  var result = input;
  try {
    if (input && input.replace) {
      result = input
        .replace(/\"/g, '\\"')
        .replace(/\'/g, "\\'")
        .replace(/\t/g, '\\t')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\+/g, '\\+');        
    }
  } catch (err) {
    console.log('Error occurred while escaping ' + input + '--' + err);
  }

  return result;
}
