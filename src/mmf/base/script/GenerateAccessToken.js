module.exports = function(app, email, password, expiresIn, isImpersonate){
    return new Promise(async (resolve, reject) => {
        const bcrypt = require("bcryptjs");
        var jwt = require("jsonwebtoken");
        var cache = require("./cache");
        
        var expires = expiresIn?expiresIn: "8h";
        var token;
        var $tbl = {};
        let ds = app.datasources['mmf']; 
        let models = ds.models;
        let modelNames = Object.keys(models);
        
        modelNames.forEach(function (modelName) {                                         
            $tbl[modelName] = models[modelName];                       
        });
        
        try{
            var userInstance = await $tbl.SrsteeUser.find({"where": {"Email": email}});
            if (userInstance && userInstance.length > 0) {
                let instance = userInstance[0];                    
                // verify passwords
                if(isImpersonate || bcrypt.compareSync(password, instance.Password)) {
                    var privateKey = "srstee"; // need to get from system property
                    let jwtPayload = {data: { "username":  email, "srsUserId":instance.uid}};
                    if(isImpersonate) {
                        jwtPayload.data.p = true;
                    }
                    token = jwt.sign(jwtPayload, privateKey , { expiresIn: expires });
                    var userRoles = [];
                    var userDirectRoles = await $tbl.SrsteeUserRole.find({include:"role", "where":{"SrsteeUser":instance.uid}});
                    await _processDirectRoles(userDirectRoles,userRoles);
                    var userGroups = await $tbl.SrsteeUserGroup.find({include:"group", "where":{"SrsteeUser":instance.uid}});
                    await _processUserGroups(userGroups,userRoles,$tbl);
                    // cache both user roles and current user id
                    await cache.put(instance.uid + "_roles",userRoles);
                   // cache.put("current_user_id", instance.uid);
                    resolve({message: "success", jwtToken: token});
                }else{
                    resolve({message: "Password is not correct", jwtToken: null});
                }                   
            }else{
                resolve({message: "User does not exists", jwtToken: null});
            }
        } catch(err){
            console.error("Error while checking user data model " + err);  
            console.log(err); 
            reject({message: "Error while checking user data model ", jwtToken: null}); 
        }       
    });
    function _processDirectRoles(userDirectRoles,userRoles){
        return new Promise(async (resolve, reject)=>{
            if(userDirectRoles && userDirectRoles.length > 0){
                var totalRolesTobeProcessed = userDirectRoles.length;
                userDirectRoles.forEach(async (uRole)=>{
                    var roleData = await uRole.role();
                    userRoles.push(roleData.Name);
                    totalRolesTobeProcessed--;
                    if(totalRolesTobeProcessed == 0){
                        resolve();
                    }
                });
            }else{
                resolve();
            }
        });
    }
    function _processUserGroups(userGroups,userRoles,$tbl){
       return new Promise(async (resolve, reject)=>{
        if(userGroups && userGroups.length > 0){
            var totalGroupTobeProcessed = userGroups.length;
            userGroups.forEach(async (uGroup)=>{
                var groupData = await uGroup.group();
                var parentGroup = groupData.RootGroup || groupData.uid;
                var groupRoles = await $tbl.SrsteeGroupRole.find({include:"role", "where":{"SrsteeGroup":parentGroup}}); 
                await _processGroupRoles(groupRoles,userRoles);
                totalGroupTobeProcessed--;
                if(totalGroupTobeProcessed == 0){
                    resolve();
                }
            });
        }else{
            resolve();
        }
       });
    }
    function _processGroupRoles(groupRoles, userRoles){
        return new Promise(async (resolve, reject)=>{
            if(groupRoles && groupRoles.length > 0){
                var totalGroupRolesTobeProcessed = groupRoles.length;
                groupRoles.forEach(async (uGroup)=>{
                    var roleData = await uGroup.role();
                    userRoles.push(roleData.Name);
                    totalGroupRolesTobeProcessed--;
                    if(totalGroupRolesTobeProcessed == 0){
                        resolve();
                    }
                });
            }else{
                resolve();
            }
        });
    }
}
