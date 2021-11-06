module.exports = function (app, email, password, expiresIn, isImpersonate) {
    return new Promise((resolve, reject) => {
        const bcrypt = require('bcryptjs');
        var jwt = require('jsonwebtoken');
        var expires = expiresIn ? expiresIn : "4h";
        var expiresMilli = expiresIn && expiresIn.indexOf("h") > -1? parseInt(expiresIn.split("h")[0])*60*60*1000: 60*60*1000;
        var userModel, token;

        let ds = app.datasources['mmf']; 
        let models = ds.models;
                
        if (models) {
            let modelNames = Object.keys(models);
        
            modelNames.forEach(function (modelName) {   
                if("SrsteeUser" == modelName) {
                    userModel = models[modelName];
                }                                                      
            });            

            if (userModel) {
                userModel.find({
                    'where': {
                        'Email': email
                    }
                })
                    .then(function (instances) {
                        if (instances && instances.length > 0) {
                            let instance = instances[0];
                            // verify passwords
                            if (isImpersonate || bcrypt.compareSync(password, instance.Password)) {
                                var privateKey = "srstee"; // need to get from system property
                                token = jwt.sign({
                                    data: { "username": email, "password": instance.Password }
                                }, privateKey, { expiresIn: expires });
                                                                
                                saveToken(token)
                                    .then(() => {
                                        resolve({ message: "success", jwtToken: token });
                                    })
                            }
                        } else {
                            resolve({ message: "Password is not correct", jwtToken: null });
                        }
                    })
                    .catch(function (err) {
                        console.error('Error while checking user data model ' + err);
                        console.log(err);
                        resolve({ message: "User does not exists", jwtToken: null });
                    });
            }
        }
    });

    function saveToken(jwtToken) {
        return new Promise((resolve, reject) => {
            // store the user to user table to default loopback
            let models = app.models();

            let srsteUser = models.filter(function (modelObj) {
                return "SrsteeUser" == modelObj.modelName;
            });
            if (srsteUser && srsteUser.length > 0) {
                srsteUser = srsteUser[0];
            }

            if (srsteUser) {
                srsteUser.find({
                    'where': {
                        'Email': email
                    }
                })
                    .then(function (instances) {
                        let instance = instances[0];
                        let userModel = getModel("User");
                        let userObj = {};
                        userObj["email"] = email;
                        userObj["password"] = password;
                        userObj["username"] = instance.uid;

                        userModel.upsertWithWhere({ 'email': email }, userObj, (err, rec) => {
                            if (rec.uid) {
                                // create a default role for the user as srstee
                                let roleModel = getModel("Role");
                                roleModel.upsertWithWhere({'name': 'srstee' }, { 'name': 'srstee' }, function (err, role) {
                                    if (role) {
                                        // map the user to role model
                                        let roleMappingModel = getModel("RoleMapping");
                                        roleMappingModel.upsertWithWhere( {'and': [{ 'roleId': role.id}, {'principalId': rec.uid }]}, {
                                            principalType: "USER",
                                            principalId: rec.uid,
                                            roleId: role.id
                                        }, function (err, roleMapping) {
                                            // create access token                                            
                                            let accessToken = getModel("AccessToken");
                                            let aObj = {};
                                            aObj["id"] = jwtToken;
                                            aObj["userId"] = rec.uid;
                                            accessToken.upsertWithWhere({ 'and': [{'id': jwtToken}, {'userId': rec.uid }]}, aObj, (err, accRec) => {
                                                resolve();
                                            });                                            
                                        });
                                    }
                                });
                            }
                        });
                    });
            }
        });
    }

    function getModel(modelName) {
        let model = null;
        let models = app.models();
        for (let i = 0; i < models.length; i++) {
            let modelInstance = models[i];
            if (modelInstance.modelName == modelName) {
                model = modelInstance
                break;
            }
        }

        return model;
    }
}