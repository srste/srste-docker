var requireFromString = require('require-from-string');
var LoopBackContext = require('loopback-context');
var mcache = require("./cache");

module.exports = function(ctx, app) {
    return {        
        $qry: require('./$qry')(ctx, app),
        getContext: function() {
            if(ctx && ctx.authorization) {        
              return ctx;        
            }
            return LoopBackContext.getCurrentContext();
        },
        cache: mcache,
        names: function() {
            return new Promise((resolve, reject) => {
                var accessPaths = ["data.MetaReusableUIScript.MetaReusableUIScriptFind.edges",
                                    "data.MetaReusableScript.MetaReusableScriptFind.edges"].join();
                this.$qry.run("mmf.getClientScripts", {}, accessPaths) 
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

        runAtServer: function(name, inputParams) {
            return this.runscript(name, inputParams);
        },

        runscript: function(name, inputParams) {            
            return new Promise((resolve, reject) => {
                try {                    
                    // let scriptsInCache = await self.cache.get("script_results");
                    // let filteredScript  = scriptsInCache && scriptsInCache.filter((scriptsInCacheItem, indx)=>scriptsInCacheItem.Name == scriptName && scriptsInCacheItem.Scope == scopeName);
                    // if(filteredScript && filteredScript.length > 0) {
                    //     resolve(filteredScript[0]);
                    // }
                    this.getscript(name, inputParams, resolve, reject)
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
            var self = this;
            return new Promise(async (resolve, reject) => {
                let scriptName = name.split('.');
                let scopeName, script2Execute;
                if(scriptName.length == 1) {
                    scopeName = 'mmf';
                    scriptName = scriptName[0];
                }else{
                    scopeName = scriptName[0];
                    scriptName = scriptName[1];
                }
                let scriptsInCache = await self.cache.get("scripts");
                let filteredScript  = scriptsInCache && scriptsInCache.filter((scriptsInCacheItem, indx)=>scriptsInCacheItem.Name == scriptName && scriptsInCacheItem.Scope == scopeName);
                var $usr = {};

                var ctx = self.getContext();
                // Set the current access token                
                $usr.token = ctx && (ctx.authorization || ctx.get('authorization'));
                if(ctx && ctx.get && ctx.get('currentUser')) {
                    $usr.user = ctx.get('currentUser');
                }else{
                    //Fetch the user details and populate it to the ctx as well as $usr
                }
                var accessPaths = "data.MetaReusableScript.MetaReusableScriptFindOne";

                if(filteredScript && filteredScript.length > 0) {
                    script2Execute = "module.exports = function($qry, $script, $usr, $input, $resolve, $reject) {\n" +
                                                "    return (" +
                                                filteredScript[0].Definition +
                                                ")\n};";
                    script2Execute = requireFromString(script2Execute)(self.$qry || self, {$qry: self.$qry || self, cache: self.cache, getContext: self.getContext, names: self.names || self._getScriptNames, runAtServer: self.runscript, getscript: self.getscript, runscript: self.runscript }, $usr, inputParams, $topResolve, $topReject);
                    resolve(script2Execute);
                }else {                    
                    //Example payload = [ { "node": { "Name": "Test1", "Scope": "demo", "Omni": true } } ]                    
                    this.$qry.run("mmf.GetServerScript", {"Name":scriptName, "Scope":scopeName}, accessPaths)
                    .then(async function(result){
                        if(result && result.Definition)  {
                            var script2Execute = "module.exports = function($qry, $script, $usr, $input, $resolve, $reject) {\n" +
                                                "    return (" +
                                                    result.Definition +
                                                ")\n};";

                            script2Execute = requireFromString(script2Execute)(self.$qry, self, $usr, inputParams, $topResolve, $topReject);
                            let cachedScripts = await self.cache.get("scripts");
                            cachedScripts = cachedScripts || [];
                            cachedScripts.push(result);                            
                            await self.cache.put("scripts", cachedScripts);
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
        }
    }
}
