module.exports = function (app, {scope, name}, {response}) { 
    var $qry = require('./$qry')({authorization: app.getAccessToken? app.getAccessToken(): ""}, app);    
    return new Promise((resolve, reject) => {          
        if($qry) {
            var accessPaths = ["data.MetaTemplate.MetaTemplateFindOne"].join();

            $qry.run("getTemplate", {"Name":name, "Scope":scope}, accessPaths)
            .then(function(result){
                if(result) {
                    response.send(result.Definition);
                }else{
                    response.send("");
                }             
                response.end(); 
                resolve();  
            })
            .catch(function(err) {
                console.error('Error occurred while fetching the client script - ' + err);
                response.send("");
                response.end();
                resolve();
            })
        }
    });
}