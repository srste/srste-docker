module.exports = async function (app, {scope, name}, {response}) {
    var $qry = require('./$qry')({authorization: app.getAccessToken? app.getAccessToken(): ""}, app);   
    try {
        let testScript = await $qry.getRecords("MetaTestScript", {where: {"Name":name, "Scope":scope}}, ["Definition"]);
        if(testScript && testScript.length == 1) {
            testScript = testScript[0].Definition;
            testScript = testScript.replace(/\\{/g, "{");  
            response.send(testScript);
        }else {
            response.send("");
        }
        response.end();
    }catch(err) { response.send(""); response.end() }
}
