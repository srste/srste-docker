module.exports = function (app, {scope, name, mode}, {request, response}) {
    return new Promise((resolve, reject) => {              
        var output = "";
        var dataFieldMap = {"js":"Definition"};
        var componentStateModel;
        
        if (app.models) {
            componentStateModel = app.models().filter(function (modelObj) {
                return "MetaComponentState" == modelObj.modelName;
            });
            if (componentStateModel && componentStateModel.length > 0) {
                componentStateModel = componentStateModel[0];
            }
        }

        if(componentStateModel) {
            componentStateModel.find({
                'where': {
                    'Scope': scope,
                    'Name': name
                }
            })
            .then(function (instances) {            
                if (instances && instances.length > 0) {
                    let result = instances[0];                
                    output = result[dataFieldMap[mode]];                
                    response.send(output);
                    resolve();
                }else{
                    response.send("");
                    resolve();
                }
            })
            .catch(function (err) {
                console.log('Error while loading the component definition ' + err);
                response.send("");
                resolve();
            });  
        }
    });    
}