var cache = require("./cache");

module.exports = function (app, bundleName, res, debugMode) {    
    var $qry = require('./$qry')({authorization: app.getAccessToken? app.getAccessToken(): ""}, app);    
    return new Promise((resolve, reject) => {
        if($qry) {
            var accessPaths = ["data.MetaProperty.MetaPropertyFindOne"].join();

            $qry.run("getSystemProperty", {"Name":'enable.bundling'}, accessPaths)
            .then(function(result){
                new Promise(async (_resolve, _reject) => {
                    await _loadBundles(_resolve, _reject, {app, result}, bundleName, res, debugMode);
                }).then(()=> {
                    res.end();
                    resolve();
                });
            })
            .catch(function(err) {
                console.error('Error occurred while fetching the client script - ' + err);
                res.send("{}");
                res.end();
                resolve();
            })
        }
    });
}

async function _loadBundles(resolve, reject, {app, result}, bundleName, response, debugMode) {
  response.setHeader('Content-Type', 'application/javascript');
  if(result && result.Value == 'true') {    
    let bundleCacheKey = debugMode? "bundle_debug_" + bundleName: "bundle_" + bundleName;           
    let cachedBundle = await cache.get(bundleCacheKey);
    if(!debugMode && cachedBundle && cachedBundle.length > 0) {
        response.write(cachedBundle);
        response.write("\n");
        response.end();
        resolve();       
    }else {
        var $tbl = [];
        let bundleData = "";
        let ds = app.datasources['mmf']; 
        let models = ds.models;
        let modelNames = Object.keys(models);
        
        modelNames.forEach(function (modelName) {                                         
            $tbl[modelName] = models[modelName];                       
        });
        let coreModules = ["mmf", "studio", "pd", "persist", "buildingblock", "acl", "workspace"];
        let includeCoreQueryClause = { 'or': [] };
        let excludeCoreQueryClause = { 'and': [] };

        for(let coreModulesIndx in coreModules) {
            let coreModule = coreModules[coreModulesIndx];
            if(debugMode) {
                includeCoreQueryClause.or.push({'and': [{'AppName': coreModule}, {'DebugMode': {"neq": 1}}]});
                excludeCoreQueryClause.and.push({'AppName': {"neq": coreModule}});
            }else {
                includeCoreQueryClause.or.push({'AppName': coreModule});
                excludeCoreQueryClause.and.push({'AppName': {"neq": coreModule}});
            }       
        }
        debugMode && excludeCoreQueryClause.and.push({'DebugMode': {"neq": 1}});

        let query = {'where': {'Active': 1}};
        if(bundleName != 'all') {
            if(bundleName == 'core') {
                query = {'where': { 'and' : [{'Active': 1}, includeCoreQueryClause]}};
            }else if(bundleName == "apps"){
                query = {'where': { 'and' : [{'Active': 1}, excludeCoreQueryClause]}};
            }else {
                query = {'where': { 'and' : [{'Active': 1}, {'AppName': bundleName}]}};
            }            
        }        
        
        $tbl.MetaBundle.find(query)
        .then((bundleRecords) => {
            let bundleFragmentPromises = [];
            if (bundleRecords && bundleRecords.length > 0) {
                bundleRecords.forEach((bundleRecord) => {
                    bundleFragmentPromises.push($tbl.MetaBundlefragment.find({
                        'where': {
                            'BundleId': bundleRecord.uid
                        },
                        'order': 'Order ASC'
                    }));
                });
                Promise.all(bundleFragmentPromises)
                .then(async function (bundleFragmentsArry) {
                    if(bundleFragmentsArry && bundleFragmentsArry.length > 0) {
                        for(var bundleFragmentsArryIndx in bundleFragmentsArry) {  
                            var bundleFragments = bundleFragmentsArry[bundleFragmentsArryIndx];                    
                            if(bundleFragments && bundleFragments.length > 0) {
                                for(let bundleFragmentIndx in bundleFragments) {
                                    let bundleFragment = bundleFragments[bundleFragmentIndx];  
                                    bundleData = bundleData + Buffer.from(JSON.parse(JSON.parse(bundleFragment.Data)).data);                          
                                    response.write(Buffer.from(JSON.parse(JSON.parse(bundleFragment.Data)).data));
                                    // bundleFile = bundleFile + bundleFragment.Data;
                                }
                            }
                            response.write("\n");                                                    
                        }                                
                        cache.put(bundleCacheKey, bundleData);
                    }else{
                        response.write("{}");                        
                        await cache.put(bundleCacheKey, "{}");                
                    }

                    response.end();
                    resolve();
                })
                .catch((err) => {
                    console.log(err);
                    response.end();
                    resolve();
                });
            }else {
                response.end();
                resolve();
            }
        })
        .catch(function (err) {
            console.log(err);
            response.end();
            resolve();
        });
    }
  }else{      
      response.send("{}");
  }
}
