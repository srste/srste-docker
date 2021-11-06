module.exports = function (app,table,filter,response) {    
    return new Promise((resolve, reject) => {              
        let model = null;
      
        let filterObj = JSON.parse(filter);
        
        let ds = app.datasources['mmf']; 
        let models = ds.models;
        
        for(let i=0;i<models.length;i++){
            let modelInstance = models[i];
            if(modelInstance.modelName == table){
            model = modelInstance
            break;
            }
        }
        
        model.find(filterObj).then(function(data){
            // response.set('Content-Type', 'application/octet-stream');
            response.setHeader("Content-Type", "text/csv");
            response.setHeader('Content-disposition', 'attachment; filename=' + table);
                                                    
            response.write(data);  
            // response.send(Buffer.from(data));
            response.end();  
            //response.send(data);
            resolve();
        });

        resolve();
    });
}