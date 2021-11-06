
module.exports = function (app, {scope, name, mode}, {response}) { 
    var $qry = require('./$qry')({authorization: app.getAccessToken? app.getAccessToken(): ""}, app);    
    return new Promise(async (resolve, reject) => {                 
        var templateDefinitionLoaderUtil = require('./TemplateDefinitioLoaderUtil');    
        try {
            let output = await templateDefinitionLoaderUtil($qry, scope, name);
            response.send(output);
            response.end();
            resolve();
        } catch(err) {
            console.error('Error occurred while fetching the client template definition - ' + err);
            response.send("");
            response.end();
            resolve();
        }
    });
}