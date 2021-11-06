module.exports = function (app, {scope, name, mode}, {request, response}) {
    return new Promise((resolve, reject) => {              
        var output = "";
        var dataFieldMap = {"js":"Definition"};
        var componentActionModel;

        let ds = app.datasources['mmf']; 
        let models = ds.models;
        let modelNames = Object.keys(models);
        
        modelNames.forEach(function (modelName) {                 
            if(modelName == "MetaComponentAction") {
                componentActionModel = models[modelName];
            }                    
        });    

        if(componentActionModel) {
            componentActionModel.find({
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
                    resolve()
                }else{
                    response.send("");
                    resolve();
                }
            })
            .catch(function (err) {
                console.log('Error while loading the component definition ' + err);
                response.send("");
                resolve()
            });  
        }
    });
}