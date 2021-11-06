var cache = require("./cache");

module.exports = function(app,ds){
    return new Promise(async (resolve, reject) => {
        let acls = {};
        var $tbl = {};

        let keys = await cache.keys();
        let cachedData2Restore = {};
        
        for(let keyIndx in keys) {
            let keyName = keys[keyIndx];
            if(keyName.endsWith("_roles")) {
                cachedData2Restore[keyName] = await cache.get(keyName);
            }
        }

        //await cache.clear();     
        cache.put("lastsync", Date.now());   
        if(cachedData2Restore) {
            for(let cachedDataKey in cachedData2Restore) {
                await cache.put(cachedDataKey, cachedData2Restore[cachedDataKey]);
            }
        }        

        let ds = app.datasources['mmf']; 
        let models = ds.models;
        let modelNames = Object.keys(models);
        
        modelNames.forEach(function (modelName) {                                         
            $tbl[modelName] = models[modelName];                       
        });
        
        var allScripts = await $tbl.MetaReusableScript.find({});
        var scripts = [];
        if(allScripts && allScripts.length > 0){
            for(let scriptIndx in allScripts) {
                let script = allScripts[scriptIndx];
                scripts.push(script);
            }           
        }
        await cache.put("scripts", scripts);

        var routePageRecords = await $tbl.MetaRoute.find({});
        var slidePageRecords = await $tbl.MetaSlide.find({});

        var routes = [];
        var slides = [];

        if(routePageRecords && routePageRecords.length > 0){
            for(let routePageIndx in routePageRecords) {
                let routePageRecord = routePageRecords[routePageIndx];
                routes.push({pageId: routePageRecord.uid, path: routePageRecord.Path, name: routePageRecord.Name, scope: routePageRecord.Scope});
            }           
        }

        if(slidePageRecords && slidePageRecords.length > 0){
            for(let slidePageIndx in slidePageRecords) {
                let slidePageRecord = slidePageRecords[slidePageIndx];
                slides.push({pageId: slidePageRecord.uid, path: slidePageRecord.Path, name: slidePageRecord.Name, scope: slidePageRecord.Scope});
            }           
        }

        await cache.put("pages", {routes, slides});

        var allBundleMaps = await $tbl.MetaBundleMap.find({});  
        var scope = {};
        var page = {};        
        if(allBundleMaps && allBundleMaps.length > 0){
            for(let allBundleMapIndx in allBundleMaps) {
                let bundleMap = allBundleMaps[allBundleMapIndx];
                if(bundleMap.Page) {
                    page[bundleMap.Page] = page[bundleMap.Page] || [];
                    page[bundleMap.Page].push({ Name: bundleMap.Name, Resource: bundleMap.Resource, Type: bundleMap.Type });
                }else if(bundleMap.Application) {
                    scope[bundleMap.Application] = scope[bundleMap.Application] || [];
                    scope[bundleMap.Application].push({ Name: bundleMap.Name, Resource: bundleMap.Resource, Type: bundleMap.Type});
                }                
                
            }           
        }      
        await cache.put("bundleMaps", {scope, page});

        var allQueries = await $tbl.MetaQuery.find({});
        var queries = [];

        if(allQueries &&  allQueries.length > 0){
            for(let queryIndx in allQueries) {
                let query = allQueries[queryIndx];            
                queries.push(query);
            }            
        }

        await cache.put("queries", queries);

        var allAcls = await $tbl.SrsteeACL.find({include: ["tableAcl","recordAcl","fieldAcl"]});
        if(allAcls &&  allAcls.length > 0){
            var totalAclsTobeProcessed= allAcls.length;

            for(let aclIndx in allAcls) {
                let acl = allAcls[aclIndx];                            
                if(!acls[acl.Resource]) {
                    acls[acl.Resource] = [];
                }
                
                var accessToObj =  {};
                accessToObj["uid"] = acl.uid;
                accessToObj["Name"] = acl.Name;
                accessToObj["AccessType"] = acl.AccessType;
                

                let tableAcls = await acl.tableAcl.find({include:{relation:"role"}});
                await _processInnerACLs(tableAcls,accessToObj,"tableAcl");

                let recordAcls = await acl.recordAcl.find({include:{relation:"role"}});
                await _processInnerACLs(recordAcls,accessToObj,"recordAcl");
                
                let fieldAcls = await acl.fieldAcl.find({include:{relation:"role"}});
                await _processInnerACLs(fieldAcls,accessToObj,"fieldAcl");

                acls[acl.Resource].push(accessToObj);

                totalAclsTobeProcessed--;
                if(totalAclsTobeProcessed == 0) {
                   // console.log(JSON.stringify(acls,null,4));
                   await cache.put("acls", acls);
                   resolve();
                }
            };
        }else{
            resolve();
        }
    });

    function _processInnerACLs(innerAcls,accessToObj,innerAclName){
        return new Promise(async (resolve, reject)=>{
            if(innerAcls && innerAcls.length > 0){
                var totalInnerAclsTobeProcessed = innerAcls.length;
                for(let iAclIndx in innerAcls) {
                    let iAcl = innerAcls[iAclIndx];                
                    if(!accessToObj[innerAclName]){
                        accessToObj[innerAclName] = [];
                    }
                    var innerAclObj = {};
                    innerAclObj["Condition"] = iAcl.Condition;
                    innerAclObj["Script"] = iAcl.Script;

                    let rAcls =  await iAcl.role.find({include:"role"});
                    await _processACLRelationRoles(rAcls, innerAclObj);

                    accessToObj[innerAclName].push(innerAclObj);

                    totalInnerAclsTobeProcessed--;
                    if(totalInnerAclsTobeProcessed == 0) {
                        resolve();
                    }
                };
               
            }else{
                resolve();
            }
        });
    }

    function _processACLRelationRoles(rAcls, tableAclObj){
        return new Promise(async (resolve, reject)=>{
            if(rAcls && rAcls.length > 0){
                if(!tableAclObj["role"]){
                    tableAclObj["role"]  = [];
                }
                let totalRelationRolesTobeProcessed = rAcls.length;
                for(let rAclndx in rAcls) {
                    let rAcl = rAcls[rAclndx];                

                    let roleData = await rAcl.role();
                    tableAclObj["role"].push(roleData.Name);

                    totalRelationRolesTobeProcessed--;
                    if(totalRelationRolesTobeProcessed == 0){
                        resolve();
                    }
                } 
            }else {
                resolve();
            }
        });
    }
}