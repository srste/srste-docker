module.exports = function (app, documentId, response) {      
    return new Promise((resolve, reject) => {        
        var $tbl = {};
        let ds = app.datasources['mmf']; 
        let models = ds.models;
        let modelNames = Object.keys(models);
        
        modelNames.forEach(function (modelName) {                                         
            $tbl[modelName] = models[modelName];                       
        });
                
        var mimeType, filename;
        $tbl.MetaDocument.findOne({
            'where': {
                'uid': documentId
            }
        }).then((result) => {
            if(!result || !result.MimeType || !result.Name) {
                response.end();
                resolve();
                return;
            }

            mimeType = result.MimeType;
            filename = result.Name;

            $tbl.MetaDocfragment.find({
                'where': {
                    'DocumentId': documentId
                },
                'order': 'Order ASC'
              })
              .then(function (results) {  
                if(results) {
                
                    response.setHeader("content-type", mimeType);
                    response.setHeader('Content-disposition', 'attachment; filename=' + filename);                                        
                    
                    results.forEach((result) => {
                        try {                            
                            response.write(new Buffer(JSON.parse(JSON.parse(result.Data)).data));                              
                        }catch(err) {
                            console.error(err);
                        }
                                        
                    });
                    response.end();  
                    resolve();                                       
                }else{
                    response.end();
                    resolve();
                }                    
              })
              .catch((err) => {
                console.error('Error occurred - ' + err);
              })
            })
    });
}
