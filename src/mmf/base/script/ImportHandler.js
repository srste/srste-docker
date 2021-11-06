var parseString = require('xml2js').parseString;

module.exports = function (app, table, data, response) {    
    return new Promise((resolve, reject) => {
        let resString = "Data imported successfully";
        try{
            let model = null;
            
            let ds = app.datasources['mmf']; 
            let models = ds.models;
            let modelNames = Object.keys(models);
            
            modelNames.forEach(function (modelName) {    
                if(modelName == table) {
                    model = models[modelName];
                }                
            });
                        
            //TODO: xml has to be received from request and has to be parsed
            var xml = "<root><Name>Minni</Name><Description>Something to have here</Description><Content>One more to go</Content><Sample4>Anotherthing is here</Sample4></root>"
            parseString(xml, function (err, result) {
                let rootObj = result.root;
                let tableData = {};
                Object.keys(rootObj).forEach(key => {
                    tableData[key] = rootObj[key][0];
                });
                model.create(tableData, (err, rec) => {
                    console.log(rec.uid);
                    resString += " "+rec.uid;
                    response.send(resString);
                    response.end();
                });
            });
        }catch(e){
            resString = "Error while importing the data "+ e.toString();
        }
         
        resolve();
    });
}