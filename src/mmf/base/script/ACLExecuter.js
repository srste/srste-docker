
var $qry = require('./$qry')();

module.exports = {

    executeACLs: async (modelName, user, accessType) => {
        return await getNonViewableFields(user.uid, modelName, accessType);

        async function getNonViewableFields(userId, modelName, accessType) {
            let fields = [];
            let aclNodes = await getModelACLs(modelName, accessType);
            let roles = await getUserRoles(userId);

            if (aclNodes && aclNodes.length > 0) {
                // check one fo the record level acl gives access
                if (checkRecordAccess(aclNodes, roles)) {
                    fields = checkFieldAccess(aclNodes, roles);
                }
            }

            return fields;
        }

        function getModelACLs(modelName, accessType) {
           return new Promise((resolve,reject)=>{
            $qry.run("acl.getModelAcls", { "Resource": modelName, "AccessType": accessType })
            .then(function(qryResult){
                resolve(qryResult);
            });
          });
        }

        async function getUserRoles(userId) {
            let userRoles = [];
            let directRoles = await getUserDirectRoles(userId);
            stackRoles(userRoles, directRoles);
            let indirectRoles = await getUserIndirectRoles(userId);
            stackRoles(userRoles, indirectRoles);
            return userRoles;
        }

        async function getUserDirectRoles(userId) {
            // relation is on userroles tables, which has reference to roles table that has
            // table, record and field level acls
            return new Promise((resolve, reject)=>{
                $qry.run("acl.getUserRoles", { "SrsteeUser": userId })
                .then(function(qryResult){
                    resolve(qryResult);
                })
            });

        }

        function getUserIndirectRoles(userId) {
            return new Promise((resolve, reject)=>{
                $qry.run("acl.getUserGroups", { "SrsteeUser": userId })
                .then(function(groups){
                    var parentgroupId = null;
                    if (groups && groups.length > 0) {
                        groups.every(function (group) {
                            parentgroupId = group.RootGroup || group.uid;
                            return false;
                        })
                    }

                    $qry.run("acl.getGroupRoles", { "SrsteeGroup": parentgroupId })
                    .then(function(qryResult){
                        resolve(qryResult);
                    });

                })
            });
        }

        function stackRoles(userRoles, result) {
            if (result && result.length > 0) {
                result.forEach(function (role) {
                    if (role.node && role.node.role) {
                        userRoles.push(role.node.role.Name);
                    }
                })
            }
        }

        function executeFieldAcl(aclEdge, userRoles, fields) {
            for (let tabIn = 0; tabIn < aclEdge.length; tabIn++) {
                var acl = aclEdge[tabIn] && aclEdge[tabIn].node;

                let condition = acl && acl.Condition;
                let script = acl && acl.Script;
                let roles = acl && acl.role;
                let field = acl && acl.Field;

                if (executeScript(script) && executeCondition(condition) && checkRoles(roles, userRoles)) {
                    if(field){
                        fields.push(field);
                    }
                }
            }
            return fields;
        }

        function executeRecordAcl(aclEdge, userRoles) {
            return executeACL(aclEdge, userRoles);
        }

        function executeACL(aclEdge, userRoles) {
            var allowAccess = false;

            for (let tabIn = 0; tabIn < aclEdge.length; tabIn++) {
                var acl = aclEdge[tabIn] && aclEdge[tabIn].node;

                let condition = acl && acl.Condition;
                let script = acl && acl.Script;
                let roles = acl && acl.role;

                if (executeScript(script) && executeCondition(condition) && checkRoles(roles, userRoles)) {
                    allowAccess = true;
                    break;
                }
            }

            return allowAccess;
        }

        function executeScript(script) {
            // if script is not there then allow
            if (!script) return true;

            return true;
        }

        function executeCondition(condition) {
            // if condition is not there then allow
            if (!condition) return true;

            return true;
        }

        function checkRoles(roles, userRoles) {
            // if there are no acl roles then allow
            if (roles && roles.edges && roles.edges.length == 0) return true;
            var giveAccess = false;
            for (let rolIn = 0; rolIn < roles.edges.length; rolIn++) {
                let roleNode = roles.edges[rolIn] && roles.edges[rolIn].node;
                let roleName = roleNode && roleNode.role && roleNode.role.Name;

                if (roleName && userRoles.indexOf(roleName) != -1) {
                    giveAccess = true;
                    break;
                }
            }

            return giveAccess;
        }

        function checkRecordAccess(aclNodes, userRoles) {
            let recordAccess = false;
            for (let acInd = 0; acInd < aclNodes.length; acInd++) {
                let node = aclNodes[acInd] && aclNodes[acInd].node;
                let recordAcl = node && node.recordAcl;
                // check if record level acls are not ther
                // then allow user to access
                if (recordAcl && recordAcl.edges && recordAcl.edges.length != 0 && executeRecordAcl(recordAcl.edges, userRoles)) {
                    recordAccess = true;
                    break;
                }
                // check if no record acls on it
                if (recordAcl && recordAcl.edges && recordAcl.edges.length == 0) {
                    recordAccess = true;
                }
            }

            return recordAccess;
        }

        function checkFieldAccess(aclNodes, userRoles) {
            var fields = [];

            for (let acInd = 0; acInd < aclNodes.length; acInd++) {
                let node = aclNodes[acInd] && aclNodes[acInd].node;
                let fieldAcl = node && node.fieldAcl;
                // check if field level acls are not ther
                // then allow user to access
                if (fieldAcl && fieldAcl.edges && fieldAcl.edges.length != 0) {
                    fields = executeFieldAcl(fieldAcl.edges, userRoles, fields);
                }
            }
            return fields;
        }
    }

}
