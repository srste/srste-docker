'use strict';
var loopback = require('loopback');
module.exports = function (metaModelInstance, appInstance) {
  try {
      function preserveOldData(ctx, next) {
        if (ctx && (ctx.instance || ctx.currentInstance)) {
          var loopbackCtx = loopback.getCurrentContext();
          let recordInstance = ctx.instance || ctx.currentInstance;
          loopbackCtx.stale = JSON.parse(JSON.stringify(recordInstance));
        }
        next();
      };

      function extractChanges(ctx, next) {
        var changes = {};
        var live = ctx.data;
        var loopbackCtx = loopback.getCurrentContext();
        var stale = loopbackCtx.stale;

        if (live) {
          if (stale) {
            stale.forEach(function (staleField) {
              if(staleField.uid) {
                changes["uid"] = { 'old': stale["uid"], 'new': stale["uid"] }
              }else{
                changes[staleField] = { 'old': stale[staleField], 'new': live[staleField] }
              };              
            });
          } else {
            live.forEach(function (liveField) {
              changes[liveField] = { 'old': null, 'new': live[liveField] };
            })
          }
        }

        loopbackCtx.changes = changes;
        next();
      };

      function registerModel(ctx) {
        var model = ctx.Model;
        var appInstance = model.app;
        var ds = appInstance.dataSources['mmf'];
        var registerModel2GraphQL = require(appInstance.__basedir + 'mmf/base/graphql/RegisterModel2GraphQL.js');

        if (ctx.instance || ctx.currentInstance) {
          let recordInstance = ctx.data || ctx.instance || ctx.currentInstance;
          var definition = JSON.parse(recordInstance.Definition);
          // appInstance.deleteModelByName(definition.name);
          // var models = appInstance.models();
          // models.forEach(function(modelInstance, indx) {
          //   if(modelInstance.modelName == definition.name) {
          //     delete models[indx];
          //   }
          // });


          // registerModel2GraphQL(appInstance, models);        

          ds.createModel(definition.name, definition.properties, definition.options);
          ds.autoupdate(definition.name, function (err, result) {
            ds.discoverModelProperties(definition.name, async function (err, props) {
              var definitionModel = ds.getModel(definition.name);            
              await rebindRelationsOnModel(appInstance, ds, definition.name);
              appInstance.model(definitionModel, { public: true });
              registerModel2GraphQL(appInstance, appInstance.models());
              notifySubscribersOnModelChange(appInstance, definition.name);
              
              //TODO - Make sure the old hooks are detached and again rebind it along with new hooks if available.
              addHooks(definitionModel, appInstance);
            });
          });
        }
      };

      function rebindRelationsOnModel(app, ds, sourceModelName) {
        return new Promise((resolve, reject) => {
            var relationshipModelJson = require(app.__basedir + 'mmf/base/model/meta-relationship.json');
            var relationshipModel = ds.getModel(relationshipModelJson.name);
            relationshipModel.find({where: {Table1: sourceModelName}})
            .then(function(results){
                if(results && results.length > 0) {
                    var totalMetaRelationshipInstances2Process = results.length;
                    results.forEach(function(relationshipObj, indx){
                        let table1 = ds.getModel(relationshipObj['Table1']);
                        let table2 = ds.getModel(relationshipObj['Table2']);
                        let relationType = relationshipObj['RelationType'];
                        let foreignKey = relationshipObj['ForeignKey'];
                        let foreignKeyAlias = relationshipObj['ForeignKeyAlias']?relationshipObj['ForeignKeyAlias']:foreignKey;

                        //Example: accessTokenModel.belongsTo(srsteUserModel, {id: 'uid', foreignKey: 'userId', as: 'userId'});
                        if(table1[relationType]) {
                            var result = table1[relationType](table2, {
                                foreignKey: foreignKey,
                                as: foreignKeyAlias
                            });
                        }

                        totalMetaRelationshipInstances2Process--;
                        if(totalMetaRelationshipInstances2Process == 0) {
                            resolve({app, ds});
                        }
                    });
                }else{
                    resolve({app, ds});
                }
            })

        });
    }

    function notifySubscribersOnModelChange(appInstance, modelName) {      
      if(appInstance && appInstance.notifyOnModelUpdate && appInstance.notifyOnModelUpdate[modelName]) {
          Object.keys(appInstance.notifyOnModelUpdate[modelName]).map(function(subscriberId) {
            let subscriberResponse = appInstance.notifyOnModelUpdate[modelName][subscriberId];
            subscriberResponse.end(JSON.stringify({status: "model_updated"}));            
          });
      }
      if(process && process.pid && process.send) {
        console.log("Notifying the schema change... " + process.pid + "::" + modelName);
        process.send({task: "SCHEMA_CHANGED", data: {pid: process.pid, schemaName: modelName}});
      }
    }

    function addHooks(definitionModel, appInstance) {
        var hookMetaModelInstances = require(appInstance.__basedir + 'mmf/base/script/MetaModelInstanceHook.js');
        hookMetaModelInstances(definitionModel);
    }

    metaModelInstance.observe('before save', function (ctx, next) {
      //post - {"instance":{"car type":"beat","car year":"2012"},"isNewInstance":true,"hookState":{},"options":{}}
      //put - {"where":{"id":1},"data":{"car year":"2013","id":1}            
      // registerModel(ctx);
      next();
    }).bind(this);

    metaModelInstance.observe('after save', function (ctx, next) {
      registerModel(ctx);
      next();
    }).bind(this);

  } catch (ex) {
    console.log("Exception - " + ex);
  } finally {

  }
};
