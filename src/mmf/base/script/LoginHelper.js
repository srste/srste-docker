var  jwtTokenGen = require('./GenerateAccessToken');
module.exports = function(app, email, password, expiresIn, impersonate){
   return new Promise(async (resolve, reject)=> {
     try{
        let jwtPayload = await jwtTokenGen(app, email, password, expiresIn, impersonate);
        let {jwtToken} = jwtPayload;
        let srsteUser = getModel("SrsteeUser");
        if(jwtToken) {            
            if(srsteUser){
                var userInstances = await srsteUser.find({'where': {'Email': email}});
                if(userInstances && userInstances.length > 0){
                    var userInstance = userInstances[0];
                    if(!userInstance.Active){
                        resolve({message: "User is not active", jwtToken: null});
                    }else{
                        let userModel = getModel("User");
                        let userObj = {};
                        userObj["email"] = impersonate? userInstance.email: email;
                        userObj["password"] = impersonate? userInstance.password: password;
                        userObj["username"] = userInstance.uid;
                        let user = null; 
                        
                        if(impersonate) {
                            user = await userModel.findOne({'email': email});
                        }else {
                            user = await userModel.upsertWithWhere({'email': email}, userObj);                            
                        }
                        if(user && user.uid){
                            let roleModel = getModel("Role");
                            let role = await roleModel.upsertWithWhere({'name': 'srstee'}, {'name': 'srstee'});
                            if(role){
                                let roleMappingModel = getModel("RoleMapping");
                                let mappingRes = await roleMappingModel.upsertWithWhere({'and': [{'roleId': role.id},{'principalId':user.uid}]},{principalType: "USER",principalId: user.uid,roleId: role.id});
                                let accessToken = getModel("AccessToken");
                                let aObj = {};
                                aObj["id"] = jwtToken;
                                aObj["userId"] = user.uid;                                
                                let tokenRes = await accessToken.upsertWithWhere({'and': [{'id': jwtToken}, {'userId': user.uid }]}, aObj);
                                resolve(jwtPayload);
                            }
                        }
                    }
                }
            }
        }else {
            //password didn't match
            resolve(jwtPayload);
        }
     }catch(err){
       reject(err);  
     }
   });    
    function getModel(modelName){
        let model = null;
        let ds = app.datasources['mmf']; 
        let models = ds.models;

        let modelNames = Object.keys(models);            
        modelNames.forEach(function (mName) {    
            if(mName == modelName) {
                model = models[mName];                
            }                
        });
        
        return model;
    }
}