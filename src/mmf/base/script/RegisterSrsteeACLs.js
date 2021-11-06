module.exports = function(app, ds){

    return new Promise((resolve, reject) => {
        let aclRegistrationFlow = [
                                    registerSrsteeACL,                                   
                                    registerTableACL,
                                    registerRecordACL,
                                    registerFieldACL,
                                    registerGroupACL,                                    
                                    registerSrsteeRoleACL,   
                                    registerSrsteeGroupRoleACL,                                    
                                    registerUserGroupsACL,
                                    registerUserRolesACL, 
                                    registerTableRoleACL,
                                    registerRecordRoleACL,
                                    registerFieldRoleACL,                                
                                    registerAclRelations
                                  ];
    
                aclRegistrationFlow.reduce((current, next, index) => {
                return current.then(res => {
                    // you may customize what you pass to the next function in the chain
                    // and you may accumulate prior results in some other data structure here
                    return next(res.app, res.ds);
                });
            }, Promise.resolve({app, ds:ds})).then(result => {
                resolve();
            }).catch(err => {
                console.log('error occurred in acls registration-' + err);
                resolve();
            });  
    });

    function registerSrsteeACL(app, ds){
        return registerACL(app, ds, app.__basedir + 'mmf/base/model/acls/srstee-acl.json');
    }
    function registerTableACL(app, ds){
        return registerACL(app, ds, app.__basedir + 'mmf/base/model/acls/srstee-table-acl.json');
    }
    function registerRecordACL(app, ds){
        return registerACL(app, ds, app.__basedir + 'mmf/base/model/acls/srstee-record-acl.json');
    }
    function registerFieldACL(app, ds){
        return registerACL(app, ds, app.__basedir + 'mmf/base/model/acls/srstee-field-acl.json');
    }
    function registerGroupACL(app, ds){
        return registerACL(app, ds, app.__basedir + 'mmf/base/model/acls/srstee-group.json');
    }
    function registerSrsteeRoleACL(app, ds){
        return registerACL(app, ds, app.__basedir + 'mmf/base/model/acls/srstee-role.json');
    }
    function registerSrsteeGroupRoleACL(app, ds){
        return registerACL(app, ds, app.__basedir + 'mmf/base/model/acls/srstee-group-role.json');
    }    
    function registerUserGroupsACL(app, ds){
        return registerACL(app, ds, app.__basedir + 'mmf/base/model/acls/srstee-user-groups.json');
    }
    function registerUserRolesACL(app, ds){
        return registerACL(app, ds, app.__basedir + 'mmf/base/model/acls/srstee-user-roles.json');
    } 

    function registerTableRoleACL(app, ds){
        return registerACL(app, ds, app.__basedir + 'mmf/base/model/acls/srstee-tableacl-role.json');
    }

    function registerRecordRoleACL(app, ds){
        return registerACL(app, ds, app.__basedir + 'mmf/base/model/acls/srstee-recordacl-role.json');
    }

    function registerFieldRoleACL(app, ds){
        return registerACL(app, ds, app.__basedir + 'mmf/base/model/acls/srstee-fieldacl-role.json');
    }
    
    function registerACL(app, ds, path){
        return new Promise((resolve, reject) => {
            var aclJSON = require(path);
            ds.createModel(aclJSON.name, aclJSON.properties, aclJSON.options);

            ds.autoupdate(aclJSON.name, function (err, result) {
                ds.discoverModelProperties(aclJSON.name, function (err, props) {
                    var aclModel = ds.getModel(aclJSON.name);               
                    app.model(aclModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    function registerAclRelations(app,ds){
        return new Promise((resolve, reject) => {
            try {
                var srsteeAclJSON = require(app.__basedir + 'mmf/base/model/acls/srstee-acl.json');
                var srsteeTableAclJSON = require(app.__basedir + 'mmf/base/model/acls/srstee-table-acl.json');
                var srsteeRecordAclJSON = require(app.__basedir + 'mmf/base/model/acls/srstee-record-acl.json');
                var srsteeFieldAclJSON = require(app.__basedir + 'mmf/base/model/acls/srstee-field-acl.json');

                var srsteeGroupJSON = require(app.__basedir + 'mmf/base/model/acls/srstee-group.json');                
                var srsteeRoleJSON = require(app.__basedir + 'mmf/base/model/acls/srstee-role.json');                
                var srsteeGroupRoleJSON = require(app.__basedir + 'mmf/base/model/acls/srstee-group-role.json');

                var srsteeTableAclRoleJSON = require(app.__basedir + 'mmf/base/model/acls/srstee-tableacl-role.json');
                var srsteeRecordAclRoleJSON = require(app.__basedir + 'mmf/base/model/acls/srstee-recordacl-role.json');
                var srsteeFieldAclRoleJSON = require(app.__basedir + 'mmf/base/model/acls/srstee-fieldacl-role.json');

                var srsteeUserGroupsJSON = require(app.__basedir + 'mmf/base/model/acls/srstee-user-groups.json');
                var srsteeUserRolesJSON = require(app.__basedir + 'mmf/base/model/acls/srstee-user-roles.json'); 
                
                var srsteeUserJSON = require(app.__basedir + 'mmf/base/model/meta-user.json');  

                var srsteeACL = ds.getModel(srsteeAclJSON.name); 
                var srsteeTableACL = ds.getModel(srsteeTableAclJSON.name);
                var srsteeRecordACL = ds.getModel(srsteeRecordAclJSON.name);
                var srsteeFieldACL = ds.getModel(srsteeFieldAclJSON.name);

                var srsteeGroup = ds.getModel(srsteeGroupJSON.name);                 
                var srsteeRole = ds.getModel(srsteeRoleJSON.name);    
                var srsteeGroupRole = ds.getModel(srsteeGroupRoleJSON.name);
                var srsteeTableACLRole = ds.getModel(srsteeTableAclRoleJSON.name);
                var srsteeRecordACLRole = ds.getModel(srsteeRecordAclRoleJSON.name);
                var srsteeFieldACLRole = ds.getModel(srsteeFieldAclRoleJSON.name);

                var srsteeUserGroups = ds.getModel(srsteeUserGroupsJSON.name); 
                var srsteeUserRoles = ds.getModel(srsteeUserRolesJSON.name); 
                var srsteeUserModel = ds.getModel(srsteeUserJSON.name);                
               // var userModel = ds.getModel("User"); 

                // acls
                srsteeACL.hasMany(srsteeTableACL, {foreignKey: 'SrsteeAcl', as: 'tableAcl'});
                srsteeTableACL.belongsTo(srsteeACL, {foreignKey: 'SrsteeAcl', as: 'acl'});

                srsteeACL.hasMany(srsteeRecordACL, {id: 'uid', foreignKey: 'SrsteeAcl', as: 'recordAcl'});
                srsteeRecordACL.belongsTo(srsteeACL, {id: 'uid', foreignKey: 'SrsteeAcl', as: 'acl'});

                srsteeACL.hasMany(srsteeFieldACL, {id: 'uid', foreignKey: 'SrsteeAcl', as: 'fieldAcl'});
                srsteeFieldACL.belongsTo(srsteeACL, {id: 'uid', foreignKey: 'SrsteeAcl', as: 'acl'});
                
                srsteeTableACL.hasMany(srsteeRecordACL, {id: 'uid', foreignKey: 'TableAcl', as: 'recordAcl'});
                srsteeRecordACL.belongsTo(srsteeTableACL, {id: 'uid', foreignKey: 'TableAcl', as: 'tableAcl'});
                
                srsteeRecordACL.hasMany(srsteeFieldACL, {id: 'uid', foreignKey: 'RecordAcl', as: 'fieldAcl'});
                srsteeFieldACL.belongsTo(srsteeRecordACL, {id: 'uid', foreignKey: 'RecordAcl', as: 'recordAcl'});
                
                srsteeRole.hasMany(srsteeRole,{id: 'uid', foreignKey: 'ContainedRole', as: 'containedRole'});
                srsteeRole.belongsTo(srsteeRole, {id: 'uid', foreignKey: 'ContainedRole', as: 'parentRole'});                

                // group mappings
                srsteeGroup.hasMany(srsteeGroup,{foreignKey: 'ContainedGroup', as: 'containedGroup'});
                srsteeGroup.belongsTo(srsteeGroup,{foreignKey: 'ContainedGroup', as: 'parentGroup'});                                
                
                srsteeGroup.hasMany(srsteeGroup,{foreignKey: 'RootGroup', as: 'childGroup'});
                srsteeGroup.belongsTo(srsteeGroup,{foreignKey: 'RootGroup', as: 'rootGroup'});

                //group roles
                srsteeGroup.hasMany(srsteeGroupRole,{foreignKey: 'SrsteeGroup', as: 'role'});
                srsteeGroupRole.belongsTo(srsteeGroup,{foreignKey: 'SrsteeGroup', as: 'group'});
                
                srsteeRole.hasMany(srsteeGroupRole,{foreignKey: 'SrsteeRole', as: 'group'});
                srsteeGroupRole.belongsTo(srsteeRole,{foreignKey: 'SrsteeRole', as: 'role'});

                //Table ACL- Roles
                srsteeTableACL.hasMany(srsteeTableACLRole,{foreignKey: 'SrsteeTableAcl', as: 'role'});
                srsteeTableACLRole.belongsTo(srsteeTableACL,{foreignKey: 'SrsteeTableAcl', as: 'tableAcl'});
                
                srsteeRole.hasMany(srsteeTableACLRole,{foreignKey: 'SrsteeRole', as: 'tableAcl'});
                srsteeTableACLRole.belongsTo(srsteeRole,{foreignKey: 'SrsteeRole', as: 'role'});

                //Record ACL - Roles
                srsteeRecordACL.hasMany(srsteeRecordACLRole,{foreignKey: 'SrsteeRecordAcl', as: 'role'});
                srsteeRecordACLRole.belongsTo(srsteeRecordACL,{foreignKey: 'SrsteeRecordAcl', as: 'recordAcl'});
                
                srsteeRole.hasMany(srsteeRecordACLRole,{foreignKey: 'SrsteeRole', as: 'recordAcl'});
                srsteeRecordACLRole.belongsTo(srsteeRole,{foreignKey: 'SrsteeRole', as: 'role'});

                //Field ACL - Roles
                srsteeFieldACL.hasMany(srsteeFieldACLRole,{foreignKey: 'SrsteeFieldAcl', as: 'role'});
                srsteeFieldACLRole.belongsTo(srsteeFieldACL,{foreignKey: 'SrsteeFieldAcl', as: 'fieldAcl'});
                
                srsteeRole.hasMany(srsteeFieldACLRole,{foreignKey: 'SrsteeRole', as: 'fieldAcl'});
                srsteeFieldACLRole.belongsTo(srsteeRole,{foreignKey: 'SrsteeRole', as: 'role'});              

                // user groups
                srsteeGroup.hasMany(srsteeUserGroups,{foreignKey: 'SrsteeGroup', as: 'user'});
                srsteeUserGroups.belongsTo(srsteeGroup,{foreignKey: 'SrsteeGroup', as: 'group'});
                               
                srsteeUserModel.hasMany(srsteeUserGroups,{foreignKey: 'SrsteeUser', as: 'group'});
                srsteeUserGroups.belongsTo(srsteeUserModel,{foreignKey: 'SrsteeUser', as: 'user'});
                
                // user roles
                srsteeUserModel.hasMany(srsteeUserRoles,{foreignKey: 'SrsteeUser', as: 'role'});
                srsteeUserRoles.belongsTo(srsteeUserModel,{foreignKey: 'SrsteeUser', as: 'user'});

                srsteeRole.hasMany(srsteeUserRoles,{foreignKey: 'SrsteeRole', as: 'user'});                
                srsteeUserRoles.belongsTo(srsteeRole,{foreignKey: 'SrsteeRole', as: 'role'});

                srsteeRole.hasMany(srsteeRole,{foreignKey: 'RootRole', as: 'childRole'});
                srsteeRole.belongsTo(srsteeRole,{foreignKey: 'RootRole', as: 'rootRole'});
               
                resolve({app, ds});
            }catch(ex) {
                console.log('Error occurred while registering acl relationships - ' + ex);
                resolve({app, ds});
            }
            
        });
    }
};