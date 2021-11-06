module.exports = function(app, userObj, responseObj){
    const bcrypt = require('bcryptjs');
    var userModel = null;
    let password = userObj["Password"];    

    userObj["Password"] = bcrypt.hashSync(password, 10);
    userObj["Active"] = 0;
    
    let models = app.models();
    for(let i=0;i<models.length;i++){
        let modelInstance = models[i];
        if(modelInstance.modelName == "SrsteeUser"){
            userModel = modelInstance
            break;
        }
    }
    userModel.create(userObj, (err, rec) => {
        responseObj.send(JSON.stringify(rec.uid));
    });
}