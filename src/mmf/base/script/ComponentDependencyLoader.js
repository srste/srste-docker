module.exports = function (app, componentName) {        
    var componentModel, componentStateModel, componentActionModel;

    let ds = app.datasources['mmf']; 
    let models = ds.models;
    let modelNames = Object.keys(models);
    
    modelNames.forEach(function (modelName) {     
        if(modelName == "MetaComponent") {
            componentModel = models[modelName];
        } 
        if(modelName == "MetaComponentState") {
            componentStateModel = models[modelName];
        } 
        if(modelName == "MetaComponentAction") {
            componentActionModel = models[modelName];
        }                    
    });
   
    /*
        {"where":
            {"or": 
                [
                    {"and":[
                                {"Path":"\/"},{"Exact":"false"}
                            ]
                    }, 
                    {"and":[
                                {"Path":"\/about"},{"Exact":"false"}
                            ]
                    },
                    {"and": [{"Path:"\/"},"
                ]
            }
        }
    */
    var filterBuilder = "{\"where\":{\"Name\":\"" + componentName + "\"}}";

    var output = "";
    return new Promise((resolve, reject) => {
        if(componentModel) {            
            componentModel.find(JSON.parse(filterBuilder))
            .then(function (instances) {                   
                output = output + "var rootComponent;\n";
                var componentState = {};
                var componentAction = {};
                var rootComponent = [];
                if (instances && instances.length > 0) {
                        var componentDefinition = instances[0]['Definition'];
                        output = output + componentDefinition.replace(/\$Component/g, componentName);
                        output = output + "\nrootComponent = " + componentName + ";";
                        output = output + "\nexport {rootComponent};\n"   
                } 

                buildComponentState(componentName, componentStateModel)
                .then(function(componentStateConstruct) {
                    output = output + componentStateConstruct + "\nexport {componentState};\n";
                    buildComponentAction(componentName, componentActionModel)
                    .then(function(componentActionConstruct) {
                        output = output + componentActionConstruct + "\nexport {componentAction};\n";
                        resolve(output);                                            
                    }).catch(function(err) {
                        console.log('Error while loading component Action - ' + err);
                        resolve(output);
                    });;
                }).catch(function(err){
                    console.log('Error while loading the component State - ' + err);
                    resolve(output);
                })                
            })
            .catch(function (err) {
                console.log('Error while loading the component definition ' + err);
                reject('Error while loading the component definition.');
            });  
        }else{
            resolve(output);
        } 
      });    
}

/*
    var universe2component = function() {
        var store2props = {};
        store2props['value'] = {access: "titleChanger.title", default: {titleChanger:{title:'Hello!'}}};
        store2props['status'] = {access:"titleChanger.status", default:{}};
        return store2props;  
    }
    export {universe2component}
*/
function buildComponentState(componentName, model) {
    return new Promise(function(resolve, reject){
        var output = "var componentState = {};\n";
        
        try {
                let filterCondition = "{\"where\":{\"Component\":\"" + componentName + "\"}}";
                if(componentName) {
                    output = output + "componentState." + componentName + " = {};\n";
                    //Fetch all the defined state key/value pairs from model for the given component.
                    model.find(JSON.parse(filterCondition))
                    .then(function(selectedRecords) {                    
                        if(selectedRecords && selectedRecords.length > 0) {
                            selectedRecords.forEach(function(selectedRecord) {
                                output = output + "componentState." + componentName + 
                                            "." + selectedRecord['KeyName'] + " = { access: \"" + selectedRecord['AccessPath'] + 
                                            "\", default: " + selectedRecord['DefaultValue'] + "};\n";                                                    
                            });
                        }
                        resolve(output);
                    }).catch(function(err) {
                        console.log('Error occurred in buildComponentState - ' + err);
                        resolve(output);
                    });                                         
                }               
        }catch(ex) {
            reject('Error occured in building component state instances - ' + ex);
        }             
    });   
}

function buildComponentAction(componentName, model) {
    return new Promise(function(resolve, reject){        
        var output = "var componentAction = {};\n";

        try{
            let filterCondition = "{\"where\":{\"Component\":\"" + componentName + "\"}}";
            if(componentName) {
                output = output + "componentAction." + componentName + " = {};\n";
                //Fetch all the defined state key/value pairs from model for the given component.
                model.find(JSON.parse(filterCondition))
                .then(function(selectedRecords) {                    
                    if(selectedRecords && selectedRecords.length > 0) {
                        selectedRecords.forEach(function(selectedRecord) {
                            output = output + "componentAction." + componentName + 
                                        "." + selectedRecord['Action'] + " = " + selectedRecord['Definition'] + "\n";
                        });
                    }
                    resolve(output);
                }).catch(function(err) {
                    console.log('Error occurred in buildComponentState - ' + err);
                    resolve(output);
                });
            }
        }catch(ex) {
            reject('Error occured in building component action instances - ' + ex);
        }               
    });   
}