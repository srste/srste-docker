module.exports = function (app, inputURL) {        
    var $tbl = {};
    var $qry = require('./$qry')({authorization: app.getAccessToken? app.getAccessToken(): ""}, app);
    var $script = require('./$script')({authorization: app.getAccessToken? app.getAccessToken(): ""}, app);
    
    let ds = app.datasources['mmf']; 
    let models = ds.models;
    let modelNames = Object.keys(models);
    
    modelNames.forEach(function (modelName) {                      
        $tbl[modelName] = models[modelName];                 
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
    var inputPaths = inputURL.split('\/');
    var inputPathIncrement = "";
    var filterBuilder = "{\"where\":{\"or\":[";    
    let arryDelimiter = "";

    if(inputPaths && inputPaths.length>0) {        
        for(var indx=0; indx<inputPaths.length; indx++) {
            inputPathIncrement = (inputPathIncrement.endsWith("/"))?inputPathIncrement + inputPaths[indx]: inputPathIncrement + "/" + inputPaths[indx];
            filterBuilder = filterBuilder + arryDelimiter + "{\"and\":[{\"Path\":\"" + inputPathIncrement + "\"},{\"Exact\":\"false\"}]}";
            arryDelimiter = ",";
        }        
    }    
    
    filterBuilder = filterBuilder + arryDelimiter + "{\"and\":[{\"Path\":\"" + inputURL + "\"},{\"Exact\":\"true\"}]}";
    filterBuilder = filterBuilder + "]}}";
    
    var output = "";
    return new Promise((resolve, reject) => {    
            $tbl.MetaRoute.find(JSON.parse(filterBuilder))
            .then(function (routeInstances) {          
                var routeInstance;         
                output = "";
                var componentState = {};
                var componentAction = {};
                var rootComponents = [];
                if (routeInstances && routeInstances.length > 0) {
                    routeInstance = routeInstances[0];
                }
                    
                if(routeInstance) {
                    output = output + getRouteDefinition(routeInstance);
                    rootComponents.push(routeInstance['ComponentName']);
                    
                    output = output + "\nexport {routes};\n"; 
                    let componentName = routeInstance['Object'];
                    let componentScope = routeInstance['ObjectScope'];
                    $tbl.MetaComponent.find({'where': {'Name': componentName, 'Scope': componentScope}})
                    .then(function(componentInstance) {
                        if(componentInstance && componentInstance.length > 0) {
                            componentInstance = componentInstance[0];
                            buildComponentState(routeInstance, $tbl, componentInstance['uid'])
                            .then(function(componentStateConstruct) {
                                output = output + componentStateConstruct + "\nexport {componentState};\n";
                                buildComponentAction(routeInstance, $tbl, componentInstance['uid'])
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
                        }
                    })
                    .catch(function(err) {
                        console.log('Error finding the component defined for the Route... ' + err);
                    })                          
                }else{
                    resolve(output);
                }
                
            })
            .catch(function (err) {
                console.log('Error while loading the component definition ' + err);
                reject('Error while loading the component definition.');
            });  
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
function buildComponentState(routeInstance, $tbl, componentUID) {
    return new Promise(function(resolve, reject){
        var output = "var componentState = {};\n";
        
        try { 
                let stateForInstance = routeInstance['forInstance'];  
                if(stateForInstance) {
                    //Needs complete refactoring...
                } else {                   
                    output = output + "componentState." + routeInstance['Object'] + " = {};\n";
                    //Fetch all the defined state key/value pairs from model for the given component.
                    $tbl.MetaComponentState.find({'where': {'StateComponent': componentUID}})
                    .then(function(selectedRecords) {                    
                        if(selectedRecords && selectedRecords.length > 0) {
                            selectedRecords.forEach(function(selectedRecord) {
                                output = output + "componentState." + routeInstance['Object'] + 
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

function buildComponentAction(routeInstance, $tbl, componentUID) {
    return new Promise(function(resolve, reject){        
        var output = "var componentAction = {};\n";

        try{
            let stateForInstance = routeInstance['forInstance'];              
            if(stateForInstance) {
                //Needs complete refactoring...
            } else {
                output = output + "componentAction." + routeInstance['Object'] + " = {};\n";
                //Fetch all the defined state key/value pairs from model for the given component.
                $tbl.MetaComponentAction.find({'where': {'ActionComponent': componentUID}})
                .then(function(selectedRecords) {                    
                    if(selectedRecords && selectedRecords.length > 0) {
                        selectedRecords.forEach(function(selectedRecord) {
                            output = output + "componentAction." + routeInstance['Object'] + 
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

function getRouteDefinition(instance) {
    var componentDefinition = "import {" + instance['Name'] + "} from '/component/" + instance['ObjectScope'] + "/" + instance['Object'] + "/Definition.js'\n" +
                              "var routes = {};\n" + 
                              "routes." + instance['Name'] + " = {\n" + 
                              "   path: '" + instance['Path'] + "',\n" + 
                              "   component: " + instance['Object'] + ",\n" +                               
                              "   exact: " + instance['Exact'] + "\n" +        
                              "};\n";
    return componentDefinition;                            
}