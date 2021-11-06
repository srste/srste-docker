var cache = require("./cache");

module.exports = function (app, pageId, res) {    
    var $qry = require('./$qry')({authorization: app.getAccessToken? app.getAccessToken(): ""}, app);    
    return new Promise(async (resolve, reject) => {
        if($qry) {
            let pageScope = await $qry.getRecords("MetaSlide", {'where': { 'uid' : pageId }}, ["Scope"]);
            let pageFilter = { 'and' : [{'Type': 'Page'}, {'PageId': pageId}]};            
            let applicationFilter = pageScope && pageScope.Scope? { 'and' : [{'Type': 'Scope'}, {'Scope': pageScope.Scope}]}: null;
            let metaBundleMapFilter = applicationFilter? {'or': [pageFilter, applicationFilter]}: pageFilter;
            $qry.getRecords("MetaBundleMap", {'where': metaBundleMapFilter})
            .then(function(result){
                new Promise(async (_resolve, _reject) => {
                    await _loadBundles(_resolve, _reject, {app, result}, bundleName, res);
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

async function _loadBundles(resolve, reject, {app, result}, bundleName, response) {
  response.setHeader('Content-Type', 'application/javascript');
  if(result && result.Value == 'true') {
    let cachedBundle = await cache.get("bundle");
    if(cachedBundle && cachedBundle.length > 0) {
        response.write(new Buffer(JSON.parse(JSON.parse(cachedBundle)).data));
        response.write("\n");
        response.end();
        resolve();       
    }else {

        var $tbl = [];
        app.models().forEach(function (modelInstance) {
            $tbl[modelInstance.modelName] = modelInstance;
        });
        let query = {'where': {'Active': 1}};
        if(bundleName != 'all') {
            query = {'where': { 'and' : [{'Active': 1}, {'AppName': bundleName}]}};
        }
        let bundleFile = "";
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
                                    response.write(new Buffer(JSON.parse(JSON.parse(bundleFragment.Data)).data));
                                    bundleFile = bundleFile + bundleFragment.Data;
                                }
                            }
                            response.write("\n");                        
                            await cache.put("bundle", bundleFile);
                        }                    
                    }else{
                        response.write("{}");
                        await cache.put("bundle", "");                
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
      await cache.put("bundle", "");
      response.send("{}");
  }
}
