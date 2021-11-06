'use strict';
var loopback = require('loopback');
module.exports = function (metaRelationshipModel, appInstance) {
  try {
    function registerRelationship(ctx) {
      /*TODO: If the relationship record in MetaRelationship table is an update operation, need to handle
        the removal of the existing relationship using the stale object and then create the new relationship using the live object*/

      var model = ctx.Model;
      var appInstance = model.app;
      var ds = appInstance.dataSources['mmf'];

      if (ctx.instance) {
        let relationshipName = ctx.instance['Name'];
        let table1Model = ds.getModel(ctx.instance['Table1']);
        let table2Model = ds.getModel(ctx.instance['Table2']);
        let relationType = ctx.instance['RelationType'];
        let foreignKey = ctx.instance['ForeignKey'];
        let foreignKeyAlias = ctx.instance['ForeignKeyAlias']?ctx.instance['ForeignKeyAlias']:foreignKey;
        //Example: accessTokenModel.belongsTo(srsteUserModel, {id: 'uid', foreignKey: 'userId', as: 'userId'});

        if(table1Model && table2Model && table1Model[relationType] && foreignKey) {
          let foreignKeyMap = {foreignKey}
          if(foreignKeyAlias) {
            foreignKeyMap['as'] = foreignKeyAlias;
          }
          table1Model[relationType](table2Model, foreignKeyMap);
          var registerModel2GraphQL = require(appInstance.__basedir + 'mmf/base/graphql/RegisterModel2GraphQL.js');
          registerModel2GraphQL(appInstance, appInstance.models());
          notifySubscribersOnRelationshipChange(appInstance, relationshipName);
        }
      }
    };

    function notifySubscribersOnRelationshipChange(appInstance, relationshipName) {           
      if(appInstance && appInstance.notifyOnRelationshipUpdate && appInstance.notifyOnRelationshipUpdate[relationshipName]) {
          Object.keys(appInstance.notifyOnRelationshipUpdate[relationshipName]).map(function(subscriberId) {
            let subscriberResponse = appInstance.notifyOnRelationshipUpdate[relationshipName][subscriberId];
            subscriberResponse.end(JSON.stringify({status: "relationship_updated"}));
          });
      }
      if(process && process.send) {
        process.send({task: "RELATIONSHIP_CHANGED", data: {pid: process.pid, schemaName: relationshipName}});
      } 
    }


    metaRelationshipModel.observe('before save', function (ctx, next) {
      //post - {"instance":{"car type":"beat","car year":"2012"},"isNewInstance":true,"hookState":{},"options":{}}
      //put - {"where":{"id":1},"data":{"car year":"2013","id":1}
      next();
    });

    metaRelationshipModel.observe('after save', function (ctx, next) {
      registerRelationship(ctx);
      next();
    });

  } catch (ex) {
    console.log("Exception - " + ex);
  } finally {

  }
};
