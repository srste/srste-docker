module.exports = function(app) {
    var ds = app.datasources['mmf'];  
    (function(appInstance, ds){
        var MMFConstants = require('./MMFConstants');
        const fs = require('fs');
        var metaComponentJSON = require(appInstance.__basedir + 'mmf/base/model/meta-component.json');
        var componentsFilePath = appInstance.__basedir + 'client/src/Components.js';        
             
        var metaComponentModel = ds.getModel(MMFConstants.MetaComponent);                               
        var importTemplate = "import React from 'react'\nimport ReactDOM from 'react-dom'\nimport {\n  BrowserRouter as Router,\n  Route,\n  Link\n} from 'react-router-dom'\nimport MonacoEditor from 'react-monaco-editor'\n";                    

        ds.createModel(metaComponentJSON.name, metaComponentJSON.properties, metaComponentJSON.options);
    
        ds.autoupdate(metaComponentJSON.name, function (err, result) {
            ds.discoverModelProperties(metaComponentJSON.name, function (err, props) {                
                var metaComponentModel = ds.getModel(metaComponentJSON.name);       
                var payload = this.loadComponents(metaComponentModel, write2File);

                function write2File(payload) {                    
                    var fileContent = importTemplate + payload.scopeDefs + payload.exportTemplate;
            
                    fs.writeFile(componentsFilePath, fileContent, function (err) {
                        if (err) throw err;
                    });                
                };                
            });
        });             
    })(app, ds);

    loadComponents = function(metaComponentModel, callback) {
        var output = {scopeDefs: "", exportTemplate: "\nmodule.exports = {\n"};
        metaComponentModel.find({}, function(err, results){
            var scopeComponents = {};            
            if(results){
                results.forEach(function(component){
                    if(!scopeComponents[component.Scope]){
                        scopeComponents[component.Scope] = [];
                    }
                    scopeComponents[component.Scope].push({name: component.Name, definition: component.Definition});
                })
            }
            if(scopeComponents){
                Object.keys(scopeComponents).forEach(function(scope) {                    
                    var componentsArry = scopeComponents[scope];                    
                    var scopeDef = "";
                    if(componentsArry) {
                        scopeDef = "\nvar " + scope + " = {\n";
                        componentsArry.forEach(function(component){                            
                            if(component){
                                scopeDef = scopeDef + "	  " + component.name + " : " + component.definition + ",\n";
                            }
                            output.exportTemplate = output.exportTemplate + "   " + scope + "_" + component.name + " : " + scope + "." + component.name + ",\n";
                        });
                        scopeDef = scopeDef + "};\n";
                    }
                    if(scopeDef) {
                        output.scopeDefs = output.scopeDefs + scopeDef;
                    }                    
                    output.exportTemplate = output.exportTemplate + "}";
                    output.scopeDef = output.scopeDef + scopeDef;                                       
                });
                callback(output);                
            }     
        });        
    }
}