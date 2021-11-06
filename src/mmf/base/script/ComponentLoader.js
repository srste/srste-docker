module.exports = function (app, {scope, name, mode}) {    
    return new Promise((resolve, reject) => {              
        var output = {"headers": {}, "payload": ""};
        var dataFieldMap = {"js":"Definition", "css":"CSS"};
        var componentModel;
        output.headers['content-type'] = (mode == 'js')? 'application/javascript': 'text/css';

        let ds = app.datasources['mmf']; 
        let models = ds.models;
        let modelNames = Object.keys(models);
        
        modelNames.forEach(function (modelName) {     
            if(modelName == "MetaComponent") {
                componentModel = models[modelName];
            }                    
        });   

        if(componentModel) {        
            componentModel.find({
                'where': {
                    'Scope': scope,
                    'Name': name
                }
            })
            .then(function (instances) {                                  
                if (instances && instances.length > 0) {
                    let result = instances[0];                
                    output.payload = result[dataFieldMap[mode]];
                    if('js' == mode) {                        
                        output.payload = output.payload.replace(/\$Component/g, name);
                        output.payload += "\nexport default " + name + ";\n";
                    }                                   
                    resolve(output);
                }else{                                    
                    resolve(output);
                }
            })
            .catch(function (err) {
                console.log('Error while loading the component definition ' + err);
                resolve(output);
            });  
        }else{
            resolve(output);
        }
    });
}