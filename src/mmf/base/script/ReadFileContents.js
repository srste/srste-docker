var requireFromString = require('require-from-string');
var srsteeConstants = require('./srstee-constants');
module.exports = function (app, lastSyncId, excludeFileContent, ws, scopeName) {
    var output = [], $tbl = {};
    var $qry = require('./$qry')({authorization: app.getAccessToken? app.getAccessToken(): ""}, app);
    var $script = require('./$script')({accessToken: app.getAccessToken? app.getAccessToken(): ""}, app);
    
    let ds = app.datasources['mmf']; 
    let models = ds.models;
    let modelNames = Object.keys(models);
    
    modelNames.forEach(function (modelName) {                      
        $tbl[modelName] = models[modelName];                 
    });
        
    return new Promise((resolve, reject) => {

        $tbl.MetaLocalSync.find({'where': {'Active': 1}})
        .then(async function (localSyncConfigs) {
            if (localSyncConfigs && localSyncConfigs.length > 0) {
                var indx = 0;
                let filesProcessed = 0;
                for(let localSyncConfigsIndx in localSyncConfigs) {
                    let localSyncConfig = localSyncConfigs[localSyncConfigsIndx];                    
                    var localSyncProps = {
                        table: localSyncConfig['Table'],
                        path: localSyncConfig['LocalPath'],
                        payloadKey: localSyncConfig['Field'],
                        transformScript: localSyncConfig['ExportScript'],
                        level: localSyncConfig['Level'],
                        exportCondition: localSyncConfig['ExportCondition']
                    }
                    try {
                        let filesCount = await loadData(localSyncProps, $tbl, $qry, $script, excludeFileContent, ws, scopeName)                    
                        if(filesCount && filesCount > 0) {
                            filesProcessed = filesProcessed + filesCount;
                            ws.send(JSON.stringify({type: srsteeConstants.pushStatusHeader, payload: {processed: filesProcessed, Name: localSyncConfig['Name']}}));                               
                        }
                        if(indx == localSyncConfigs.length - 1) {
                            resolve([])
                        }
                        indx++;
                    }catch(err) {
                        console.log('Error occurred while loading data - ' + err);
                        indx++;
                    }
                }
            }
        })
        .catch(function (err) {
            reject('Error while loading the component definition ' + err);
        });
    });
}

function loadData(localSyncProps, $tbl, $qry, $script, excludeFileContent, ws, scopeName) {
    return new Promise(async (resolve, reject) => {
        var filesProcessed = 0;
        let sourceModel;        

        if("Record" == localSyncProps['level']) {
            sourceModel = $tbl[localSyncProps['table']];
            if(!sourceModel) {
                reject("Error while loading files - no model found for the defined local sync configuration " + localSyncProps['table']);
            }
            sourceModel.find({})
            .then(async function (sourceDataRecords) {                
                if (sourceDataRecords && sourceDataRecords.length > 0) {                    
                    for(let sourceDataRecordIndx in sourceDataRecords) {
                        try {
                            let sourceDataRecord = sourceDataRecords[sourceDataRecordIndx];                    
                            let $liveInstance = sourceDataRecord;
                            let evalValue = await evaluateCondition($liveInstance, $qry, $script, localSyncProps['exportCondition'], scopeName)
                            
                            if(evalValue == true) {
                                try {
                                    let fileRec = await populateFile(localSyncProps, $liveInstance, $tbl, $qry, $script, excludeFileContent, scopeName);                               
                                    if(fileRec) {
                                        if(excludeFileContent){
                                            ws.send(JSON.stringify({type: srsteeConstants.payloadChunkSent, payload: JSON.stringify([fileRec])}));                                            
                                            filesProcessed++;
                                        }else if(fileRec["filePath"]) {
                                            ws.send(JSON.stringify({type: srsteeConstants.payloadChunkSent, payload: JSON.stringify([fileRec])}));                                            
                                            filesProcessed++;
                                        }
                                    }                                    
                                }catch(err) {                                
                                    console.log('Error occurred while loading data... ' + err);                                    
                                }
                            }  
                        }catch(err) {
                            console.error('Error occurred during load data - ' + err);                           
                        }                                            
                    }
                    resolve(filesProcessed);
                }else {
                    resolve(filesProcessed);
                }
            })
            .catch(function(err) {
                console.log(err);
                resolve(filesProcessed);
            });
        }else {
            let fileRec = await populateFile(localSyncProps, null, $tbl, $qry, $script, excludeFileContent, populateFile);
            try {
                ws.send(JSON.stringify({type: srsteeConstants.payloadChunkSent, payload: JSON.stringify([fileRec])}));                                            
                filesProcessed++;   
                resolve(filesProcessed);
            }catch(err) {
                resolve(filesProcessed);
            }
        }
    });
}

function evaluateCondition($live, $qry, $script, conditionScript, scopeName) {
    var result = true;
    return new Promise((resolve, reject) => {
        if(conditionScript){
            var scriptUtils = require('./ScriptUtils');

            let script2Execute = requireFromString("module.exports=function($live, $qry, $script, $topResolve, $topReject, $utils, $scope) { \n (" +
                                 conditionScript + ")()\n}");
            script2Execute($live, $qry, $script, resolve, reject, scriptUtils(), scopeName);
        }else{
            resolve(result);
        }
    });
}

function populateFile(configProps, $live, $tbl, $qry, $script, excludeFileContent, scopeName) {
    return new Promise((resolve, reject) => {
        let fileRecord = {};
        let scriptCode = configProps['transformScript'];
        executeScript(scriptCode, $live, $tbl, $qry, $script, scopeName)
        .then(function(scriptResult) {
                var lookupObj = {};
                lookupObj.getValue = function (key) {
                    if ($live && $live[key]) {
                        return $live[key];
                    } else {
                        return scriptResult[key];
                    }
                }
                lookupObj.scriptResult = scriptResult;
                return lookupObj;
        })
        .then(function($scope) {
            let localPath = configProps['path'].replace(/(\$\{([a-zA-Z_]+)\})/g, function(a, b, c) {
                return this.getValue(c);
            }.bind($scope));
            let payloadData = $scope.getValue(configProps['payloadKey']);
            if(payloadData) {
                if(excludeFileContent) {
                    resolve(localPath);
                }else{
                    fileRecord['filePath'] = localPath;
                    if($scope.getValue('uid')) {
                        let created_at = $scope.getValue('srs_created_at')? Date.parse($scope.getValue('srs_created_at'))/1000: Date.parse(new Date())/100;
                        let updated_at = $scope.getValue('srs_updated_at')?Date.parse($scope.getValue('srs_updated_at'))/1000: Date.parse(new Date())/100;
                        let created_by = $scope.getValue('srs_created_by')?$scope.getValue('srs_created_by'): "System";
                        let updated_by = $scope.getValue('srs_updated_by')?$scope.getValue('srs_updated_by'): "System";
                        payloadData = payloadData.trim() + `\n/*srsti-uid=${$scope.getValue('uid')}##created_at=${created_at}##updated_at=${updated_at}##created_by=${created_by}##updated_by=${updated_by}*/\n`;                        
                    }
                    fileRecord['payload'] =  payloadData;

                    if(fileRecord['payload']) {
                        resolve(fileRecord);
                    }else{
                        resolve("");
                    }
                }
            }else {
                resolve("");
            }
        })
        .catch(function(err) {
            resolve("");
        })
    });
}

function executeScript(script, $live, $tbl, $qry, $script, scopeName) {
    return new Promise((resolve, reject) => {
        try{
            if(script) {
                var scriptUtils = require('./ScriptUtils');
                let script2Execute = requireFromString("module.exports=function($live, $tbl, $topResolve, $topReject, $qry, $script, $utils, $scope) { \n (" +
                                                    script + ")()\n}");
                script2Execute($live, $tbl, resolve, reject, $qry, $script, scriptUtils(), scopeName);
            }else{
                resolve({});
            }
        }catch(ex) {
            console.log(ex);
        }

    });
}
