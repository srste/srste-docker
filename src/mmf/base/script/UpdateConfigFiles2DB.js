var requireFromString = require('require-from-string');
var srsteeConstants = require('./srstee-constants');

module.exports = function (files2Update, app, lastSyncId, ws) {
    var output = [], $tbl = {};
    var $qry = require('./$qry')({authorization: app.getAccessToken? app.getAccessToken(): ""}, app);
    var $script = require('./$script')({authorization: app.getAccessToken? app.getAccessToken(): ""}, app);
    
    let ds = app.datasources['mmf']; 
    let models = ds.models;
    let modelNames = Object.keys(models);
    
    modelNames.forEach(function (modelName) {                      
        $tbl[modelName] = models[modelName];                 
    });    
    
    return new Promise((resolve, reject) => {
        $tbl.MetaLocalSync.find({'where': {'uid': '0d9009d0-63a4-11e8-9b18-cf07d4d58af4'}}) 
        .then(function (localSyncConfigs) {                            
            if (localSyncConfigs && localSyncConfigs.length == 1) {
                let result = {};          
                for(var localSyncConfigIndx in localSyncConfigs) {
                    let localSyncConfig = localSyncConfigs[localSyncConfigIndx];                
                    result[localSyncConfig['LocalPath']] =  {
                        table: localSyncConfig['Table'],
                        payloadKey: localSyncConfig['Field'],
                        transformScript: localSyncConfig['ImportScript'],
                        level: localSyncConfig['Level'],   
                        name: localSyncConfig['Name'],
                        order: localSyncConfig['Order']?parseInt(localSyncConfig['Order']): 0,
                        importCondition: localSyncConfig['ImportCondition']                     
                    }               
                }
                return(result);
            }             
        })
        .then(function(localSyncConfigMap) {
            var processedPatternMap = getProcessedPatterns(localSyncConfigMap);
            var validPatterns2Process = [];
            /* Collect all the patterns to process for all the files */
            for(var file2UpdateIndx in  files2Update) {
                let file2Update = files2Update[file2UpdateIndx];                          
                let filePath = file2Update['path'];
                let filePayload = file2Update['payload'];
                let fileUID = getFileUID(filePayload);
                
                //don't update the master data for the localsync record...
                if(fileUID != "0d9009d0-63a4-11e8-9b18-cf07d4d58af4") {
                    let {createdAt, updatedAt, createdBy, updatedBy} = getAuditFields(filePayload);
                    filePayload = trimFileUID(filePayload);                
                    var matchedPatterns = processedPatternMap.match(filePath);                
                    if(matchedPatterns && matchedPatterns.length > 0) {     
                        for(var matchedPatternIndx in matchedPatterns) {
                            let matchedPattern = matchedPatterns[matchedPatternIndx];                        
                            var script = matchedPattern.payload? matchedPattern.payload.transformScript: null;
                            if(script) {
                                validPatterns2Process.push({
                                    script: script,
                                    table: matchedPattern.payload.table,                                
                                    input: matchedPattern.input, 
                                    name: matchedPattern.payload.name,
                                    order: matchedPattern.payload.order,
                                    fileUID: fileUID,
                                    fileContent: filePayload,
                                    importCondition: matchedPattern.payload.importCondition,  
                                    createdAt, updatedAt, createdBy, updatedBy
                                });                            
                            }   
                        }                                     
                    }
                }                  
            }
            let validOrderedPatterns2Process = [];
            if(validPatterns2Process && validPatterns2Process.length > 1) {
                let patternsBasedOnName = {};
                for(var pattern2ProcessIndx in validPatterns2Process) {
                    let pattern2Process = validPatterns2Process[pattern2ProcessIndx];                
                    let matchingPatterns = patternsBasedOnName[pattern2Process.name] || [];
                    matchingPatterns.push(pattern2Process);
                    patternsBasedOnName[pattern2Process.name] = matchingPatterns;
                }

                if(patternsBasedOnName) {
                    let categoryNames =  Object.keys(patternsBasedOnName);
                    for(var categoryNamesIndx in categoryNames) {
                        let categoryName = categoryNames[categoryNamesIndx];                    
                        let matchingPatternsByCategory = patternsBasedOnName[categoryName];
                        matchingPatternsByCategory = matchingPatternsByCategory.sort((a, b)=>{
                            return a.order - b.order;
                        });
                        validOrderedPatterns2Process = validOrderedPatterns2Process.concat(matchingPatternsByCategory);
                    }
                }
            }else{
                validOrderedPatterns2Process = validPatterns2Process;
            }            
            return validOrderedPatterns2Process;
        })
        .then(async function(patterns2Execute) {            
            if(patterns2Execute && patterns2Execute.length > 0){
                let patternsAtSameLevel = {};
                let lastVisitedPatternOrder = -1;
                for(var pattern2ExecuteIndx in patterns2Execute) {
                    let pattern2Execute = patterns2Execute[pattern2ExecuteIndx];                
                    if(pattern2Execute.order != lastVisitedPatternOrder) {
                        lastVisitedPatternOrder = pattern2Execute.order;
                        patternsAtSameLevel[lastVisitedPatternOrder] = patternsAtSameLevel[lastVisitedPatternOrder] || [];
                        patternsAtSameLevel[lastVisitedPatternOrder].push(pattern2Execute);                      
                    }else{
                        patternsAtSameLevel[lastVisitedPatternOrder].push(pattern2Execute);
                    }
                }
                let orders = Object.keys(patternsAtSameLevel);
                for(var indx=0; indx<orders.length; indx++) {
                    await executePatterns(patternsAtSameLevel[orders[indx]], $tbl, $qry, $script);
                }
                resolve();
            }                        
        })           
        .catch(function (err) {
            reject('Error while loading the component definition ' + err);
        });  
    });        
}

function executePatterns(patterns2Execute, $tbl, $qry, $script) {
    return new Promise((resolve, reject) => {
        if(patterns2Execute && patterns2Execute.length > 0){
            var pendingPatternsCount = patterns2Execute.length - 1;    
            for(var pattern2ExecuteIndx in patterns2Execute) {
                let pattern2Execute = patterns2Execute[pattern2ExecuteIndx];
            
                evaluateCondition(pattern2Execute.fileContent, $qry, $script, pattern2Execute.importCondition)
                .then(function(evalValue) {
                    if(evalValue == true) {
                        executeScript(pattern2Execute.script, pattern2Execute.table, pattern2Execute.input, 
                                        pattern2Execute.fileUID, pattern2Execute.fileContent, $tbl, $qry, $script, 
                                        pattern2Execute.createdAt, pattern2Execute.updatedAt, pattern2Execute.createdBy, pattern2Execute.updatedBy)
                        .then(function(result) {
                            if(pendingPatternsCount == 0) {
                                resolve({});
                            }else{
                                pendingPatternsCount--;
                            }
    
                        })
                        .catch(function(err) {
                            console.log('Error occurred while executing the import script - ' + err);
                            pendingPatternsCount--;
                        });                 
                    }else{  
                        if(pendingPatternsCount == 0) {
                            resolve({});
                        }else{
                            pendingPatternsCount--;
                        }                                                                                 
                    }                    
                })
                .catch(function(err) {
                    console.error('Error occurred during load data - ' + err);
                    if(pendingPatternsCount == 0) {
                        resolve({});
                    }else{
                        pendingPatternsCount--;
                    }             
                });
            }                
        }
    });
}

function trimFileUID(filePayload) {
    var trimmedContent = filePayload;
    try {
        let regEx = new RegExp("\n\\/\\*srsti-uid=[a-zA-Z0-9-_]+(##.*)?\\*\\/");        
        let match = regEx.exec(trimmedContent);        
        if(match && match.length == 2) {
            trimmedContent = trimmedContent.split(match[0]);
            trimmedContent = (trimmedContent && trimmedContent.length > 0)? trimmedContent[0]: filePayload;
        }
    }catch(ex) {
        console.log('Error occurred while trimming the file payload.');
    }
    return trimmedContent;
}

function getFileUID(filePayload) {
    var uid = "";
    try {
        let regEx = new RegExp("\\/\\*srsti-uid=([a-zA-Z0-9-_]+)(##.*)?\\*\\/");
        let match = regEx.exec(filePayload);
        if(match && match.length == 3) {
            uid = match[1];
        }
    }catch(ex) {
        console.log('Error occurred while extracting UID from file payload.');
    }
    return uid;
}

function getAuditFields(filePayload) {
    var auditFields = {};
    try {        
        let regEx = new RegExp("\\/\\*srsti-uid=[a-zA-Z0-9-_]+##created_at=(.*)##updated_at=(.*)##created_by=(.*)##updated_by=(.*)\\*\\/");
        let match = regEx.exec(filePayload);
        if(match && match.length == 5) {
            new Date().toUTCString()
            auditFields["createdAt"] = match[1]? new Date(parseInt(match[1])*1000).toUTCString(): new Date().toUTCString();
            auditFields["updatedAt"] = match[2]? new Date(parseInt(match[1])*1000).toUTCString(): new Date().toUTCString();
            auditFields["createdBy"] = match[3]? match[3]: "System";
            auditFields["updatedBy"] = match[4]? match[4]: "System";
        }
    }catch(ex) {
        console.log('Error occurred while extracting audit fields from file payload.');
    }
    return auditFields;
}

function getProcessedPatterns(localSyncConfigMap) {
    var processedPatterns = {     
        patternMap: {},   
        match: function(input) {
            let result = [];
            if(this.patternMap) {
                let patternObjs = Object.keys(this.patternMap);                
                if(patternObjs) {
                    let self = this;      
                    for(var pattern2MatchIndx in patternObjs) {
                        let pattern2Match = patternObjs[pattern2MatchIndx];                    
                        let match = new RegExp(pattern2Match).exec(input);
                        if(match && match.length > 0) {  
                            let matchedPatternResult = {
                                'input': {}                    
                            };                          
                            var fields2Map = (self.patternMap[pattern2Match])?self.patternMap[pattern2Match]['slots']:null;
                            if(fields2Map) {
                                for(let indx = 1; indx < match.length && indx <= fields2Map.length; indx++) {                                
                                    matchedPatternResult['input'][fields2Map[indx-1]] = match[indx]
                                }
                            }                           
                            matchedPatternResult['payload'] = (self.patternMap[pattern2Match])?self.patternMap[pattern2Match]['payload']: null;
                            result.push(matchedPatternResult);
                        }
                    }
                    return result;
                }
            }
        }
    };

    var inputPatterns = Object.keys(localSyncConfigMap);

    inputPatterns.forEach(function(patternObj) {
        let patternSlots = [];
        let transformedPatternObj = patternObj.replace(/(\$\{([$0-9a-zA-Z_]+)\})/g, function(a, b, c) {
            patternSlots.push(c);
            return "([$0-9a-zA-Z_]+)"     
        });        
        processedPatterns.patternMap[transformedPatternObj] = {
            slots: patternSlots,
            payload: localSyncConfigMap[patternObj]
        }
    });

    return processedPatterns;
}

function executeScript(script, $dataTable, $input, $fileUID, $fileContent, $tbl, $qry, $script, $created_at, $updated_at, $created_by, $updated_by) {                                
    return new Promise((resolve, reject) => {
        try{
            if(script) {
                var script2ExecuteStr = "module.exports=function($dataTable, $tbl, $qry, $script, $input, $fileUID, $fileContent, $topResolve, $topReject, $createdAt, $updatedAt, $createdBy, $updatedBy) { \n (" + 
                                        script + ")()\n}";
                let script2Execute;
                try {
                    script2Execute= requireFromString(script2ExecuteStr);                    
                    script2Execute($dataTable, $tbl, $qry, $script, $input, $fileUID, $fileContent, resolve, reject, $created_at, $updated_at, $created_by, $updated_by);
                }catch(ex) {
                    console.error('Error occurred while loading the script - ' + ex + ' - ' + script2ExecuteStr );
                    resolve({});
                }                                                
            }else{
                resolve({});
            }            
        }catch(ex) {
            console.log(ex);
        }
        
    });
}

function evaluateCondition($live, $qry, $script, conditionScript) {
    var result = true;
    return new Promise((resolve, reject) => {
        if(conditionScript){
            var scriptUtils = require('./ScriptUtils');

            let script2Execute = requireFromString("module.exports=function($live, $qry, $script, $topResolve, $topReject, $utils) { \n (" +            
                                 conditionScript + ")()\n}");    
            script2Execute($live, $qry, $script, resolve, reject, scriptUtils());
        }else{
            resolve(result);
        }
    });
}