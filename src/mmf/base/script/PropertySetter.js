module.exports = function (app, propertyName, propertyValue) {
    var $qry = require('./$qry')({authorization: app.getAccessToken? app.getAccessToken(): ""}, app);    
    return new Promise((resolve, reject) => {
        if($qry) {
            var accessPaths = ["data"].join();
            $qry.run("setSystemProperty", {"Name":propertyName, "Value": propertyValue}, accessPaths)
            .then(function(result){              
                resolve();
            })
            .catch(function(err) {
                console.error('Error occurred while updating the property - ' + err);
                resolve();
            })
        }
    });
}
