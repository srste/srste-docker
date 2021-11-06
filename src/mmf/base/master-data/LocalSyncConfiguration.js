'use strict';

module.exports = function($tbl, baseDir) {  
    return new Promise((resolve, reject) => {
        var exportScriptPATH = baseDir + 'mmf/base/master-data/LocalSyncExportScript.js';
        var importScriptPATH = baseDir + 'mmf/base/master-data/LocalSyncImportScript.js';
        var exportScript;
        var importScript;
        var fs = require("fs");
        fs.readFile(exportScriptPATH, 'utf8', function(err, exportScriptData) {
            if(err) {
                console.log('Error occurred while reading file - LocalSyncExportScript.js');
            }else{
                exportScript = exportScriptData;
                fs.readFile(importScriptPATH, 'utf8', function(err, importScriptData) {
                    if(err) {
                        console.log('Error occurred while reading file - LocalSyncImportScript.js');
                    }
                    importScript = importScriptData;
                    var payload = {
                        "uid": "0d9009d0-63a4-11e8-9b18-cf07d4d58af4",
                        "Table": "MetaLocalSync",
                        "Name" : "ImportExport",
                        "Order":1,
                        "Field": "payload",
                        "LocalPath": "/server/localsync/${Scope}/${Name}.js",
                        "Name": "ImportExport", 
                        "Order": 1,
                        "Level": "Record",
                        "Active": "true",
                        "ExportScript": exportScript,
                        "ImportScript": importScript,
                        "ExportCondition": null,
                        "ImportCondition": null
                    }
                
                    $tbl.upsertWithWhere({uid: '0d9009d0-63a4-11e8-9b18-cf07d4d58af4'}, payload) 
                    .then(function(resp) {
                        console.log('*** Loaded local sync base properties ****');
                        resolve();
                    })
                    .catch(function(err) {
                        console.log('Something went wrong while reading the file');
                        console.log(err);
                        reject();        
                    });                       
                });
            }                    
        });        
    });
}