module.exports = function (app, {name}, {response}) {
    var $qry = require('./$qry')({authorization: app.getAccessToken? app.getAccessToken(): ""}, app);    
    return new Promise((resolve, reject) => {        
        var output = "";
        $qry.run("getTransientData", {"transientID":  name})
        .then(function(result){
            output = result['Payload'];
            response.send(output.replace(/\\{/g, "{"));
            response.end();
            resolve();
        })
        .catch(function(result) {
            response.send("");
            resolve();
        });
    });
}
