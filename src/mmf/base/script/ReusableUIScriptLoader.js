module.exports = function (app, {scope, name}, {response}) {
    var $qry = require('./$qry')({authorization: app.getAccessToken? app.getAccessToken(): ""}, app);    
    return new Promise((resolve, reject) => {
        var accessPaths = ["data.MetaReusableScript.MetaReusableScriptFind.edges"].join();

        $qry.run("getClientScript", {"Name":name, "Scope":scope}, accessPaths)
        .then(function(result){
            if(result && result.length > 0 && result[0] && result[0].node) {
                if(result[0].node.Type == "common") {
                    let data = result[0].node.Definition?result[0].node.Definition.replace(/\\{/g, "{"):result[0].node.Definition;
                    // let scriptCode = "export default (\n\t" + data + "\n)";

                    let scriptCode = `export default function() {
                        return new Promise(async (resolve, reject)=> {
                            let $resolve = resolve;
                            let $reject = reject;
                            let $input = arguments[0];
                            let result = (${data})(arguments);                                                       
                            if(result && result.then) {$qry
                                result.then((data)=> $resolve(data));
                            }else{
                                setTimeout(()=>$resolve(result), 2000);                                
                            }
                        })
                    }`;

                    response.send(scriptCode);
                }else if (result[0].node.Type == "client") {
                    let data = result[0].node.Definition?result[0].node.Definition.replace(/\\{/g, "{"):result[0].node.Definition;
                    response.send(data);
                }else{
                    let data = result[0].node.Definition?result[0].node.Definition.replace(/\\{/g, "{"):result[0].node.Definition;
                    response.send(data);
                }
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
        });
    });
}
