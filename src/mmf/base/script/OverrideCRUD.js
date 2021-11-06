var secUtil = require('./SecurityUtil.js');
var LoopBackContext = require('loopback-context');

var mcache = require("memory-cache");

module.exports = {
  apply: function(modelInstance) {

    function createPromiseCallback() {
      let cb;
      const promise = new Promise(function(resolve, reject) {
        cb = function(err, data) {
          if (err) {
            console.log("Error occurred - " + err);
            return reject(err);
          }
          //write your business logic
          return resolve(data);
        };
      });
      cb.promise = promise;
      return cb;
    }

    //Overriding the definitions of persisted-model.js in loopback/lib
    var legacyMethodFn = {
      find: modelInstance.find,
      findOne: modelInstance.find,
      findById: modelInstance.findById
    };

    modelInstance["find"] =  async (filter, options, cb) => {   
      if((!options && !cb) || (!cb && typeof options != 'function')) {
        //assumption is that the proxyMethod will send a promise back in this case...
        let result = await proxyMethod("", filter, options, cb, "find"); 
        return Promise.resolve(result);
      }
      await proxyMethod("", filter, options, cb, "find");
    }   
    modelInstance["findOne"] =  async (filter, options, cb) => {  
      if((!options && !cb) || (!cb && typeof options != 'function')) {
        //assumption is that the proxyMethod will send a promise back in this case...
        let result = await proxyMethod("", filter, options, cb, "findOne");
        return Promise.resolve(result);
      }    
      await proxyMethod("", filter, options, cb, "findOne");
    }    
    modelInstance["findById"] =  async (id, cb) => {   
      if(!cb) {
        //assumption is that the proxyMethod will send a promise back in this case...
        let result = await proxyMethod(id, null, null, cb, "findById");
        return Promise.resolve(result);
      }    
      await proxyMethod(id, null, null, cb, "findById");
    }

    var proxyMethod = async (id, filter, options, cb, legacyMethod) => {     
      var results = null;
      var cacheHit = false;
      var cacheableRecord = false;
      var cacheDuration = 0;
      var cacheForFind = false;
      var cacheKey = "";

      if (options === undefined && cb === undefined) {
        //do not know this use-case yet...
        if (typeof filter === 'function') {
          cb =  filter;
          filter = {};
        }
      } else if (cb === undefined) {
        if (typeof options === 'function') {          
          cb = options;
          options = {};
        }
      }

      // cb = cb || createPromiseCallback();
      filter = filter || {};
      options = options || {};

      switch(modelInstance.name) {
        case "AccessToken":         
          if(legacyMethod == "findById") {
            cacheKey = modelInstance.name + "_" + id;             
          }else if(legacyMethod == "findOne") {
            cacheKey = modelInstance.name + "_" + JSON.stringify(filter);            
          }
          if(cacheKey) {
            results = await mcache.get(cacheKey);
            cacheHit = !!results;
          }
          cacheDuration = 10*60*1000; //10mins                              
          cacheableRecord = true;                        
          break;
        case "MetaBundle":
        case "MetaBundlefragment":
        case "User":                       
          if(legacyMethod == "findById") {
            cacheKey = modelInstance.name + "_" + id;            
          }else if(legacyMethod == "findOne" || legacyMethod == "find") {
            cacheKey = legacyMethod + "_" + modelInstance.name + "_" + JSON.stringify(filter);            
          }          
          cacheForFind = true;
          cacheDuration = 60*1000; //1min
          cacheableRecord = true;              
          if(cacheKey) {
            results = await mcache.get(cacheKey);                          
            cacheHit = !!results;            
          }          
          break;
        case "SrsteeUser": 
          if(legacyMethod == "findById") {
            cacheKey = modelInstance.name + "_" + id;              
          }else if(legacyMethod == "findOne") {
            cacheKey = modelInstance.name + "_" + JSON.stringify(filter);            
          }
          cacheableRecord = true;  
          cacheHit = !!results;            
          if(cacheKey) {
            cacheDuration = 60*1000; //1min
            results = await mcache.get(cacheKey);                                    
          }                     
          break;
        case "ACL": 
          if(legacyMethod == "findById") {
            cacheKey = modelInstance.name + "_" + id;                       
          }else if(legacyMethod == "findOne" || legacyMethod == "find") {        
            cacheKey = legacyMethod + "_" + modelInstance.name + "_" + JSON.stringify(filter);                
          }          
          
          if(cacheKey) {
            if(mcache.keys() && mcache.keys().indexOf(cacheKey) > -1) {
              results = await mcache.get(cacheKey);            
              cacheHit = true;
            }
          }
                    
          cacheForFind = true;
          cacheDuration = -1; //never remove from cache until cleared forceably...          
          cacheableRecord = true;                                     
          break;
        case "MetaReusableScript":  
        case "MetaScope":                                                          
        case "MetaQuery":    
        case "MetaSlide":               
        case "MetaSlideSlot":               
        case "MetaSlideSlotWidget":               
        case "MetaSlideProps":               
        case "MetaSlideAction":                   
        case "MetaWidgetProps":  
        case "MetaWidgetAction":   
        case "MetaOperationHook":
          cacheForFind = true;
          if(legacyMethod == "findById") {
            cacheKey = modelInstance.name + "_" + id;            
          }else if(legacyMethod == "findOne" || (legacyMethod == "find" && cacheForFind)) {
            cacheKey = legacyMethod + "_" + modelInstance.name + "_" + JSON.stringify(filter);            
          }                    
          cacheDuration = -1; //never remove from cache until cleared forceably...
          cacheableRecord = true;              
          if(cacheKey) {
            results = await mcache.get(cacheKey);          
            cacheHit = !!results;          
          }
          break;                                          
        case "MetaRoute":
        case "MetaRouteRequires":
          cacheForFind = true;
          if(legacyMethod == "findById") {
            cacheKey = modelInstance.name + "_" + id;            
          }else if(legacyMethod == "findOne" || (legacyMethod == "find" && cacheForFind == true)) {
            cacheKey = legacyMethod + "_" + modelInstance.name + "_" + JSON.stringify(filter);            
          }                    
          cacheableRecord = true;              
          cacheDuration = 5*1000; //never remove from cache until cleared forceably...
          if(cacheKey) {
            results = await mcache.get(cacheKey);
            cacheHit = !!results;          
          }          
          
          break;
      }  

      if(!cacheHit) {
        var ctx = LoopBackContext.getCurrentContext();
        var currentUser = ctx && ctx.get('currentUser');      
        var newCB = createPromiseCallback();
    
        try{
          switch(legacyMethod) {
            case "find": 
              try {
                legacyMethodFn[legacyMethod].apply( modelInstance, [filter, options, newCB]);
              }catch(err) {
                return Promise.resolve({});
              }              
              results = await newCB.promise;
              results = results?results: [];
              break;
            case "findOne":
              try {
                legacyMethodFn[legacyMethod].apply(modelInstance, [filter, options, newCB]);
              }catch(err) {
                return Promise.resolve({});
              }              
              results = await newCB.promise;
              if(results) {
                results = Array.isArray(results)? (results.length > 0?results[0]: null): results;
              }
              break;
            case "findById":
              try {
                legacyMethodFn[legacyMethod].apply(modelInstance, [id, newCB]);
              }catch(err) {
                return Promise.resolve({});
              }
              results = await newCB.promise;
              if(results) {
                results = Array.isArray(results)? (results.length > 0?results[0]: null): results;
              }           
              break;
          }        
        }catch(e){
          console.error("Error occurred in find method - " + e);
          // return cb(e, null);
          return Promise.resolve({});
        }
        
        let modifiedResults = results;
        if(results) {
          if (secUtil.isWhitelisted(modelInstance.name, filter)) {
            modifiedResults = results;
          } else {
              if (Array.isArray(results)) {
                modifiedResults = [];
                for (let resIn = 0; resIn < results.length; resIn++) {
                  let result = results[resIn];
                  result = await secUtil.filterNonViewableFields(result, currentUser);
                  modifiedResults.push(result);
                }
              } else {
                modifiedResults = await secUtil.filterNonViewableFields(results, currentUser);
              }
          }
        }

        results = modifiedResults;
        if(cacheableRecord) {
          if(cacheDuration == -1) {            
            await mcache.put(cacheKey, results);                                       
          }else {            
            if(legacyMethod == "findById" || legacyMethod == "findOne" || (legacyMethod == "find" && cacheForFind)) {
              await mcache.put(cacheKey, results, cacheDuration);              
            }            
          }          
        }
      }

      if (cb && typeof cb == "function") {        
          cb(null, results);                
      } else {
        return Promise.resolve(results);
      }
      
  }
       

    var upsertWithWhereLegacy = modelInstance.upsertWithWhere;
    modelInstance.upsertWithWhere = function(where, data, callback) {
      let args = [where, secUtil.filterNonWritableFields(data), callback];
      try{
        return upsertWithWhereLegacy.apply(this, args);
      }catch(err) {
        return Promise.resolve({});
      }
    }

    var upsertLegacy = modelInstance.upsert;
    modelInstance.upsert = function(data, callback) {
      let args = [secUtil.filterNonWritableFields(data), callback];
      try {
        return upsertLegacy.apply(this, arguments);
      }catch(err) {
        return Promise.resolve({});
      }     
    }
  }
}