module.exports = function (app) {
    var output = [];    
    var $qry = require('./$qry')({authorization: app.getAccessToken? app.getAccessToken(): ""}, app);    
    return new Promise((resolve, reject) => {
        if ($qry) {
            var accessPaths = ["data.MetaBundle.MetaBundleFind.edges"].join();
            var ComponentLoader = require(app.__basedir + "mmf/base/script/ComponentLoader.js");
            $qry.run("mmf.getActiveBundles", {}, accessPaths)
            .then(function (results) {                                    
                if(results) {
                    results.forEach((result) => {
                        if(result && result.node && result.node.AppName) {
                            output.push(result.node.AppName);
                        }                    
                    });
                }                
                resolve(output);
            })
            .catch(function (err) {
                console.error('Error occurred while fetching the bundle names - ' + err);
                resolve(output);
            })
        }
    });    
}