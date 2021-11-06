'use strict';
var loopback = require('loopback');
var requireFromString = require('require-from-string');

module.exports = function (nonMetaModelInstance) {
  try {  
    function preserveOldData(ctx) {      
      return new Promise((resolve, reject) => {
        try{
          let live, past;
          if(ctx.isNewInstance) {
            let recordInstance = ctx.instance || ctx.currentInstance;            
            live = recordInstance && recordInstance.toObject? recordInstance.toObject(): recordInstance;
            past = null;            
          }else {
            live = ctx.data;            
            let recordInstance = ctx.instance || ctx.currentInstance; 
            if(live) {
              live.uid = recordInstance? recordInstance.uid: "";
              live.id = recordInstance.id;                       
            }
            past = recordInstance && recordInstance.toObject? recordInstance.toObject(): recordInstance;            
          }
          
          if(!ctx.isNewInstance){
            ctx.hookState.isNew = false;
            ctx.hookState.live = live;
            ctx.hookState.past = past;            
            resolve();
          }else{
            ctx.hookState.isNew = true;
            ctx.hookState.live = live;
            ctx.hookState.past = null;
            resolve();
          }  
        }catch(ex) {
          console.log('Error occurred in the preserveOldData... ' + ex);
          reject();
        }
      })      
    };

    function extractChanges(ctx){
      let changes = {};
      let live = ctx.hookState.live;
      let past = ctx.hookState.past;
      
      if(ctx.isNewInstance) {
          Object.keys(live).forEach(function(liveField){
            if(!liveField.startsWith("__") && !changes[liveField]){
              changes[liveField] = {'old': '', 'new': live[liveField]};
            }
          });
      }else {
        if(past){
          Object.keys(past).forEach(function(pastField){
            if(!pastField.startsWith("__") && pastField != "id" && live[pastField] && past[pastField] != live[pastField]){
              changes[pastField] = {'old': past[pastField], 'new': live[pastField]};
            }
          });

          Object.keys(live).forEach(function(liveField){
            if(!liveField.startsWith("__") && liveField != "id" && !changes[liveField] && !past[liveField]){
              changes[liveField] = {'old': '', 'new': live[liveField]}
            }
          });
        }
      }
      ctx.hookState.changes = changes;
    };

    function processBeforeSaveHooks(ctx, next){
      preserveOldData(ctx).then(function(result) {        
        extractChanges(ctx);
        var $tbl = {};
        var appinstance = ctx.Model? ctx.Model.app: {};
        if(ctx.Model && ctx.Model.app && ctx.Model.app.models) {
          var modelArry = ctx.Model.app.models();        
          modelArry.forEach(function(modelObj){
            //todo - need to make the modelObj immutable and expose only the crud operations.
            $tbl[modelObj.modelName] = modelObj;
          })
        }    

        //Fetch all the before Save hooks and call them in sequence...
        var $qry = require('./$qry')({authorization: ctx.Model.app.getAccessToken? ctx.Model.app.getAccessToken(): ""}, appinstance);                   
        var $script = require('./$script')({authorization: ctx.Model.app.getAccessToken? ctx.Model.app.getAccessToken(): ""}, appinstance);          
        if($tbl[ctx.Model.modelName]) {
          $tbl['MetaOperationHook'].find({'where': {'Model': ctx.Model.modelName}})
          .then(async function(instances) {                          
              var beforeSaveHooks = instances.filter(function(hook) {
                return hook.Type == 'before.save';
              });
              if(beforeSaveHooks) {
                for(let beforeSaveHookIndx in beforeSaveHooks) {
                  let beforeSaveHook = beforeSaveHooks[beforeSaveHookIndx];                
                  var hookObj = beforeSaveHook.toObject?beforeSaveHook.toObject():beforeSaveHook;                  
                  var wrappedDef = "module.exports = function($past, $live, $changes, $isNew, $swap, $script, $qry) {\n return (" + hookObj.Definition + ")();\n}";
                  var hookDefinition = requireFromString(wrappedDef);
                  await hookDefinition(ctx.hookState.past, ctx.hookState.live, ctx.hookState.changes, ctx.hookState.isNew, ctx.hookState.swap, $script, $qry);                                                           
                }                                                                                 
              }   
              next();                                                                                     
          })
          .catch(function(err) {
            console.log(err);
            next();
          });                                                   
        }
      });            
    }

    function processAfterSaveHooks(ctx, next){      
      // extractChanges(ctx);
      var $tbl = {};
      var appinstance = ctx.Model? ctx.Model.app: {};
      if(ctx.Model && ctx.Model.app && ctx.Model.app.models) {
        var modelArry = ctx.Model.app.models();        
        modelArry.forEach(function(modelObj){
          //todo - need to make the modelObj immutable and expose only the crud operations.
          $tbl[modelObj.modelName] = modelObj;
        })
      }    

      var $qry = require('./$qry')({authorization: ctx.Model.app.getAccessToken? ctx.Model.app.getAccessToken(): ""}, appinstance);                   
      var $script = require('./$script')({authorization: ctx.Model.app.getAccessToken? ctx.Model.app.getAccessToken(): ""}, appinstance);

      if($tbl[ctx.Model.modelName]) {
        $tbl['MetaOperationHook'].find({'where': {'Model': ctx.Model.modelName}})
        .then(async function(instances) {                          
          var afterSaveHooks = instances.filter(function(hook) {
            return hook.Type == 'after.save';
          });
          if(afterSaveHooks) {
            for(let afterSaveHookIndx in afterSaveHooks) {    
              let afterSaveHook = afterSaveHooks[afterSaveHookIndx];        
              var hookObj = afterSaveHook.toObject();
              var wrappedDef = "module.exports = function($past, $live, $changes, $isNew, $swap, $script, $qry) {\n return (" + hookObj.Definition + ")();\n}";
              var hookDefinition = requireFromString(wrappedDef);
              await hookDefinition(ctx.hookState.past, ctx.hookState.live, ctx.hookState.changes, ctx.hookState.isNew, ctx.hookState.swap, $script, $qry);
            }                                                                                
          }  
          next();                                                                                         
        })
        .catch(function(err) {
          console.log(err);
          next();
        });      
      }         
  }

    nonMetaModelInstance.observe('before save', processBeforeSaveHooks);
    nonMetaModelInstance.observe('after save', processAfterSaveHooks);

  }catch(ex) {
    console.log("Exception - " + ex);
    next();
  }finally {

  }
};
