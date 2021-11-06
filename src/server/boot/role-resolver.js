var loopback = require('loopback');

module.exports = function(app){
    var Role = app.models.Role;
    
    Role.registerResolver('srstee', function(role, context, cb) {          

        var roleResolverScriptPATH = app.__basedir + "mmf/base/script/SrsteRoleResolver.js";
        var mmfRoleResolverScript = require(roleResolverScriptPATH);
        
        mmfRoleResolverScript(app, loopback, role, context)
        .then(function(response){                        
            return cb(null, response);
        }).catch(function(error){                                                
            return cb(null, false);
        });             
    });    
};
