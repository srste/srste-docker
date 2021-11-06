module.exports = function (app, {scope, name, mode}, {request, response}) {
    return new Promise((resolve, reject) => {
        var output = "";
        var stylesModel;

        let ds = app.datasources['mmf']; 
        let models = ds.models;
        let modelNames = Object.keys(models);
        
        modelNames.forEach(function (modelName) {     
            if(modelName == "MetaStyle") {
                stylesModel = models[modelName];
            } 
        });

        if(stylesModel) {
            stylesModel.find({
                'where': {
                    'Scope': scope,
                    'Name': name
                }
            })
            .then(function (instances) {
                if (instances && instances.length > 0) {
                    let result = instances[0];
                    output = result['Styles']?result['Styles']:"";
                    response.setHeader('content-type', 'text/css');
                    response.send(output);
                    resolve();
                }else{
                  response.setHeader('content-type', 'text/css');
                  response.send("");
                  resolve();
                }
            })
            .catch(function (err) {
                console.log('Error while loading the component definition ' + err);
                response.send("");
                resolve();
            });
        }else{
          response.setHeader('content-type', 'text/css');
          response.send("");
          resolve();
        }
    });
}
