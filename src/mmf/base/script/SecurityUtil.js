var $qry = require('./$qry')();
var aclExt = require('./ACLExecuter.js');
var LoopBackContext = require('loopback-context');

module.exports = {
  isSuperUser: (userObj) => {
    return true;
  },

  isWhitelisted: (modelName, filter) => {

    var context = LoopBackContext.getCurrentContext();
    var isSuperUser = context && context.get("isSuperUser");
    return true;
    
    if(isSuperUser)
      return true;

    return modelName == "AccessToken" ||
          modelName == "User" ||
          modelName == "SrsteeACL" ||
          modelName == "SrsteeTableACL" ||
          modelName == "SrsteeTableACLRole" ||
          modelName == "SrsteeFieldACL" ||
          modelName == "SrsteeFieldACLRole" ||
          modelName == "SrsteeGroup" ||
          modelName == "SrsteeGroupRole" ||
          modelName == "SrsteeRecordACL" ||
          modelName == "SrsteeRecordACLRole" ||
          modelName == "SrsteeRole" ||
          modelName == "SrsteeUserRole" ||
          modelName == "SrsteeUserGroup" ||
          (filter && filter.where && filter.where.Scope === "acl")
  },

  filterNonViewableFields: async (data, currentUser) => {
    if(!data) return data;
    let nonViewableFields = [];
    let modelName = data.constructor.name;
    //console.log(modelName);
    if(currentUser){
      nonViewableFields = await aclExt.executeACLs(modelName, currentUser, "READ");
    }

     if(nonViewableFields && Array.isArray(nonViewableFields)) {
      nonViewableFields.forEach((nonViewableField) => {
        data[nonViewableField] = "<<<No Access>>>";
      });
    }

    return data;
  },

  filterNonWritableFields: (data) => {
    let nonWritableFields = [];
    if(nonWritableFields) {
      nonWritableFields.forEach((nonWritableField) => {
        delete data[nonWritableField];
      });
    }
    return data;
  },
}
