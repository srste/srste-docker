"use strict";
var $qry = require("./$qry")();
var LoopBackContext = require("loopback-context");
var cache = require("./cache");

module.exports = function (app, loopback, role, context) {
  return new Promise(async (resolve, reject) => {    
    var modelName = context.modelName;
    var accessType = context.accessType;
    const filesToSkipAccessCheck = ["SrsteeACL", "SrsteeTableACL", "SrsteeTableACLRole",
      "SrsteeRecordACL", "SrsteeRecordACLRole", "SrsteeFieldACL", "SrsteeFieldACLRole",
      "SrsteeGroup", "SrsteeGroupRole", "SrsteeUserRole", "SrsteeUserGroup", "SrsteeRole",
      "MetaComponent", "MetaComponentProps", "MetaComponentState", "MetaComponentAction",
      "MetaRoute", "MetaModel", "MetaPalette", "MetaPaletteItem", "MetaRelationship",
      "MetaResource", "MetaRouteRequires", "MetaScope", "MetaSlide", "MetaSlideSlot",
      "MetaSlideSlotWidget", "MetaWidgetProps", "MetaWidgetAction",
      "MetaBundle", "MetaBundlefragment", "MetaDocument", "MetaDocfragment",
      "MetaReusableUIScript", "MetaQuery", "MetaProperty", "MetaReusableScript",
      "MetaTemplate", "MetaOperationHook"];
    var ctx = LoopBackContext.getCurrentContext();
        
    if (ctx.get("srsUserId")) {
      if (filesToSkipAccessCheck.includes(modelName)) {
        resolve(true);
      } else {
        try {          
          var access = await checkAccess(ctx.get("srsUserId"), modelName, accessType);
          resolve(access);
        } catch (err) {
          reject(false);
        }
      }
    } else {
      //user is not authenticated... allow few resources to load the login page     
      resolve(true);  
      // var need2bypassAuth = ctx && ctx.get("bypass_auth");
      // if (need2bypassAuth) {
      //   resolve(true);
      // } else {
      //   resolve(false);
      // }
    }
  });
  // helper functions to verify the roles
  function checkAccess(userId, modelName, accessType) {
    // check user access here
    return new Promise(async (resolve, reject) => {
      try {
        // get the acls for model
        var allow = false;
        var acls = await cache.get("acls");
        if(!acls || acls.length == 0) {
          //If no acls defined, give the access by default... will make it reverse later...
          resolve(true);          
        }else {
          var userRoles = await cache.get(userId);
          var modelAcls = acls[modelName];          
          var filteredAcls = modelAcls?modelAcls.filter((mAcl) => mAcl.AccessType == accessType): [];

          if(filteredAcls && filteredAcls.length > 0) {
            for (let acInd = 0; acInd < filteredAcls.length; acInd++) {
              let fAcl = filteredAcls[acInd];
              var tableAcls = fAcl.tableAcl;
              var recordAcls = fAcl.recordAcl;
              //var fieldAcls = fAcl.fieldAcl;
              // need to consider field level acls later
              if (tableAcls && tableAcls.length == 0 && recordAcls && recordAcls.length == 0) {
                allow = true;
                break;
              }
              if (!(tableAcls && tableAcls.length == 0) && executeTableAcl(tableAcls, userRoles)) {
                allow = true;
                break;
              }
              if (!(recordAcls && recordAcls.length == 0) && executeRecordAcl(recordAcls, userRoles)) {
                allow = true;
                break;
              }
            }
          }else {
            allow = true;
          }
        }
        resolve(allow);
      } catch (e) {
        console.error(e.message);
        resolve(false);
      }
    })
  }

  function executeTableAcl(tableAcls, userRoles) {
    return executeACL(tableAcls, userRoles);
  }
  function executeRecordAcl(recordAcls, userRoles) {
    return executeACL(recordAcls, userRoles);
  }
  function executeACL(innerAcls, userRoles) {
    var allowAccess = false;
    if(innerAcls && innerAcls.length > 0) {
      for (let tabIn = 0; tabIn < innerAcls.length; tabIn++) {
        let acl = innerAcls[tabIn];
        let condition = acl && acl.Condition;
        let script = acl && acl.Script;
        let roles = acl && acl.role;
        if (executeScript(script) && executeCondition(condition) && checkRoles(roles, userRoles)) {
          allowAccess = true;
          break;
        }
      }
    }else {
      allowAccess = true;
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
    if (roles && roles.length == 0) return true;
    var giveAccess = false;
    if(userRoles && userRoles.length > 0) {
      for (let rolIn = 0; rolIn < roles.length; rolIn++) {
        let roleName = roles[rolIn];
        if (roleName && userRoles.indexOf(roleName) != -1) {
          giveAccess = true;
          break;
        }
      }
    }
    
    return giveAccess;
  }
}