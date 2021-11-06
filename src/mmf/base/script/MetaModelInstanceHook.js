'use strict';
var loopback = require('loopback');
var requireFromString = require('require-from-string');
const getHooksQuery = `query($whereClause:JSON){
  MetaOperationHook{
    MetaOperationHookFind(filter: $whereClause){
      edges{
        node{
          uid
          Name
          Type
          Scope
          Order
          Definition
        }
      }
    }
  }
}`;

module.exports = function (metaModelInstance) {  
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
            if(!pastField.startsWith("__") && live[pastField] && past[pastField] != live[pastField]){
              changes[pastField] = {'old': past[pastField], 'new': live[pastField]};
            }
          });

          Object.keys(live).forEach(function(liveField){
            if(!liveField.startsWith("__") && !changes[liveField] && !past[liveField]){
              changes[liveField] = {'old': '', 'new': live[liveField]}
            }
          });
        }
      }
      ctx.hookState.changes = changes;
    };

    function subscribeExistingHooks(model) {
      var appInstance = model.app;
      appInstance.model(definitionModel, { public: true });
    };

    function processBeforeSaveHooks(ctx, next){
      let hooksPromise = new Promise(async (resolve, reject) => {
        try {
          await preserveOldData(ctx);          
          await extractChanges(ctx);
          var appInstance = ctx.Model? ctx.Model.app: {};
          var $tbl = {};
          if(ctx.Model && ctx.Model.app && ctx.Model.app.models) {
            var modelArry = ctx.Model.app.models();
            modelArry.forEach(function(modelObj){
              //todo - need to make the modelObj immutable and expose only the crud operations.
              $tbl[modelObj.modelName] = modelObj;
            })
          }
  
          //Fetch all the before Save hooks and call them in sequence...
          var $qry = require('./$qry')({authorization: ctx.Model.app.getAccessToken? ctx.Model.app.getAccessToken(): ""}, appInstance);          
          var $script = require('./$script')({authorization: ctx.Model.app.getAccessToken? ctx.Model.app.getAccessToken(): "", appInstance});          
          let beforeSaveHooks = await $qry.getRecords("MetaOperationHook", {"where": { "Model": ctx.Model.modelName, Type: "before.save"}}, ["Name", "Scope", "Definition", "Order", "Type"]);
          beforeSaveHooks = beforeSaveHooks.sort((a,b)=> { let aOrder = a.Order?parseInt(a.Order): 0; let bOrder = b.Order?parseInt(b.Order):0; return aOrder - bOrder; })
          let isError = false;
          let errorMessage = "";
          ctx.hookState.swap = ctx.hookState.swap || {};
          for(let beforeSaveHookIndx in beforeSaveHooks) {
            let beforeSaveHook = beforeSaveHooks[beforeSaveHookIndx];                            
            var wrappedDef = "module.exports = function($past, $live, $changes, $isNew, $state, $script, $qry) {\n return (" + beforeSaveHook.Definition + ")();\n}";
            var hookDefinition = requireFromString(wrappedDef);
            await hookDefinition(ctx.hookState.past, ctx.hookState.live, ctx.hookState.changes, ctx.hookState.isNew, ctx.hookState.swap, $script, $qry);
            if(ctx.hookState.swap && ctx.hookState.swap.error) {
              isError = true;
              errorMessage = ctx.hookState.swap.error;
              break;
            }
          }   
          if(isError) {
            resolve({error: errorMessage})
          }else {
            resolve();            
          }
        }catch(err) {
          resolve({error: err.message});
        }          
      });
      hooksPromise.then((data)=> { 
        if(data && data.error) {
          next(data.error);
        }else {
          next();
        }        
      });
    }

    function processAfterSaveHooks(ctx, next){
      let hooksPromise = new Promise((resolve, reject) => {
        // extractChanges(ctx);

        var $tbl = {};
        var appinstance = ctx.Model?ctx.Model.app: {};
        if(ctx.Model && ctx.Model.app && ctx.Model.app.models) {
          var modelArry = ctx.Model.app.models();
          modelArry.forEach(function(modelObj){
            //todo - need to make the modelObj immutable and expose only the crud operations.
            $tbl[modelObj.modelName] = modelObj;
          })
        }

        var $qry = require('./$qry')({authorization: ctx.Model.app.getAccessToken? ctx.Model.app.getAccessToken(): ""}, appinstance);          
        var $script = require('./$script')({authorization: ctx.Model.app.getAccessToken? ctx.Model.app.getAccessToken(): ""}, appinstance);
        
        $qry._run(getHooksQuery, {"whereClause": {"where": { "Model": ctx.Model.modelName}}}, "data.MetaOperationHook.MetaOperationHookFind.edges")
          .then((async function(instances) {
            let afterSaveHooks = [];
            if(instances){
              instances.forEach(function(hookNode) {
                let hookObj = {
                  Name: hookNode.node.Name,
                  Scope: hookNode.node.Scope,    
                  Definition: hookNode.node.Definition,             
                  Order: hookNode.node.Order,
                  Type: hookNode.node.Type                                
                }
                afterSaveHooks.push(hookObj);
              })
            }
            afterSaveHooks = afterSaveHooks.filter((hook, indx)=> hook.Type == "after.save");
            afterSaveHooks = afterSaveHooks.sort((a,b)=> { let aOrder = a.Order?parseInt(a.Order): 0; let bOrder = b.Order?parseInt(b.Order):0; return aOrder - bOrder; })
            let isError = false;
            let errorMessage = "";
            ctx.hookState.swap = ctx.hookState.swap || {};
            for(let afterSaveHookIndx in afterSaveHooks) {
              let afterSaveHook = afterSaveHooks[afterSaveHookIndx];                       
              var wrappedDef = "module.exports = function($past, $live, $changes, $isNew, $state, $script, $qry) {\n return (" + afterSaveHook.Definition + ")();\n}";
              var hookDefinition = requireFromString(wrappedDef);
              await hookDefinition(ctx.hookState.past, ctx.hookState.live, ctx.hookState.changes, ctx.hookState.isNew, ctx.hookState.swap, $script, $qry);
              if(ctx.hookState.swap && ctx.hookState.swap.error) {
                isError = true;
                errorMessage = ctx.hookState.swap.error;
                break;
              }
            }
            if(isError) {
              resolve({error: errorMessage})
            }else {
              resolve();            
            }            
          }))
          .catch(function(err) {
            console.error(err);            
            resolve({error: (err && err.message) || "After Save Hooks - Unexpected error occurred." });
          })  
        })
        .catch(function(err) {
          console.error(err);
          resolve({error: (err && err.message) || "After Save Hooks - Unexpected error occurred." });
        });
        hooksPromise.then((data)=> { 
          if(data && data.error) {
            next(data.error);
          }else {
            next();
          }
        });         
    }

    function processBeforeDeleteHooks(ctx, next){
      let hooksPromise = new Promise((resolve, reject) => {
        preserveOldData(ctx).then(function(result) {
          extractChanges(ctx);
          var appInstance = ctx.Model? ctx.Model.app: {};
          var $tbl = {};
          if(ctx.Model && ctx.Model.app && ctx.Model.app.models) {
            var modelArry = ctx.Model.app.models();
            modelArry.forEach(function(modelObj){
              //todo - need to make the modelObj immutable and expose only the crud operations.
              $tbl[modelObj.modelName] = modelObj;
            })
          }
  
          //Fetch all the before Save hooks and call them in sequence...
          var $qry = require('./$qry')({authorization: ctx.Model.app.getAccessToken? ctx.Model.app.getAccessToken(): ""}, appInstance);          
          var $script = require('./$script')({authorization: ctx.Model.app.getAccessToken? ctx.Model.app.getAccessToken(): "", appInstance});          
          
          $qry._run(getHooksQuery, {"whereClause": {"where": { "Model": ctx.Model.modelName}}}, "data.MetaOperationHook.MetaOperationHookFind.edges")
          .then((async function(instances) {
            let beforeDeleteHooks = [];
            if(instances){
              instances.forEach(function(hookNode) {
                let hookObj = {
                  Name: hookNode.node.Name,
                  Scope: hookNode.node.Scope,    
                  Definition: hookNode.node.Definition,             
                  Order: hookNode.node.Order,
                  Type: hookNode.node.Type                                
                }
                beforeDeleteHooks.push(hookObj);
              })
            }
            beforeDeleteHooks = beforeDeleteHooks.filter((hook, indx)=> hook.Type == "before.delete");
            beforeDeleteHooks = beforeDeleteHooks.sort((a,b)=> { let aOrder = a.Order?parseInt(a.Order): 0; let bOrder = b.Order?parseInt(b.Order):0; return aOrder - bOrder; })
            let isError = false;
            let errorMessage = "";
            ctx.hookState.swap = ctx.hookState.swap || {};
            for(let beforeDeleteHookIndx in beforeDeleteHooks) {
              let beforeDeleteHook = beforeDeleteHooks[beforeDeleteHookIndx];                            
              var wrappedDef = "module.exports = function($past, $live, $changes, $state, $script, $qry) {\n return (" + beforeDeleteHook.Definition + ")();\n}";
              var hookDefinition = requireFromString(wrappedDef);
              await hookDefinition(ctx.hookState.past, ctx.hookState.live, ctx.hookState.changes, ctx.hookState.swap, $script, $qry);
              if(ctx.hookState.swap && ctx.hookState.swap.error) {
                isError = true;
                errorMessage = ctx.hookState.swap.error;
                break;
              }                           
            }            
            if(isError) {
              resolve({error: errorMessage})
            }else {
              resolve();            
            }            
          }))
          .catch(function(err) {
            console.error(err);
            resolve({error: (err && err.message) || "Before Delete Hooks - Unexpected error occurred." });
          });               
        })
        .catch(function(err) {
          console.error(err);
          resolve({error: (err && err.message) || "Before Delete Hooks - Unexpected error occurred." });
        })
      });
      hooksPromise.then((data)=> {
        if(data && data.error) {
          next(data.error);
        }else {
          next();
        }
      });
    }

    function processAfterDeleteHooks(ctx, next){
      let hooksPromise = new Promise((resolve, reject) => {
        preserveOldData(ctx).then(function(result) {
          extractChanges(ctx);
          var appInstance = ctx.Model? ctx.Model.app: {};
          var $tbl = {};
          if(ctx.Model && ctx.Model.app && ctx.Model.app.models) {
            var modelArry = ctx.Model.app.models();
            modelArry.forEach(function(modelObj){
              //todo - need to make the modelObj immutable and expose only the crud operations.
              $tbl[modelObj.modelName] = modelObj;
            })
          }
  
          //Fetch all the before Save hooks and call them in sequence...
          var $qry = require('./$qry')({authorization: ctx.Model.app.getAccessToken? ctx.Model.app.getAccessToken(): ""}, appInstance);          
          var $script = require('./$script')({authorization: ctx.Model.app.getAccessToken? ctx.Model.app.getAccessToken(): "", appInstance});          
          
          $qry._run(getHooksQuery, {"whereClause": {"where": { "Model": ctx.Model.modelName}}}, "data.MetaOperationHook.MetaOperationHookFind.edges")
          .then((async function(instances) {
            let afterDeleteHooks = [];
            if(instances){
              instances.forEach(function(hookNode) {
                let hookObj = {
                  Name: hookNode.node.Name,
                  Scope: hookNode.node.Scope,    
                  Definition: hookNode.node.Definition,             
                  Order: hookNode.node.Order,
                  Type: hookNode.node.Type                                
                }
                afterDeleteHooks.push(hookObj);
              })
            }
            afterDeleteHooks = afterDeleteHooks.filter((hook, indx)=> hook.Type == "after.delete");
            afterDeleteHooks = afterDeleteHooks.sort((a,b)=> { let aOrder = a.Order?parseInt(a.Order): 0; let bOrder = b.Order?parseInt(b.Order):0; return aOrder - bOrder; })
            let isError = false;
            let errorMessage = "";
            ctx.hookState.swap = ctx.hookState.swap || {};
            for(let afterDeleteHookIndx in afterDeleteHooks) {
              let afterDeleteHook = afterDeleteHooks[afterDeleteHookIndx];                            
              var wrappedDef = "module.exports = function($past, $live, $changes, $state, $script, $qry) {\n return (" + afterDeleteHook.Definition + ")();\n}";
              var hookDefinition = requireFromString(wrappedDef);
              await hookDefinition(ctx.hookState.past, ctx.hookState.live, ctx.hookState.changes, ctx.hookState.swap, $script, $qry);
              if(ctx.hookState.swap && ctx.hookState.swap.error) {
                isError = true;
                errorMessage = ctx.hookState.swap.error;
                break;
              }                           
            }            
            if(isError) {
              resolve({error: errorMessage})
            }else {
              resolve();            
            }            
          }))
          .catch(function(err) {
            console.error(err);
            resolve({error: (err && err.message) || "After Delete Hooks - Unexpected error occurred." });
          });               
        })
        .catch(function(err) {
          console.error(err);
          resolve({error: (err && err.message) || "After Delete Hooks - Unexpected error occurred." });
        })
      });
      hooksPromise.then((data)=> {
        if(data && data.error) {
          next(data.error);
        }else {
          next();
        }
      });
    }

    function processAccessHooks(ctx, next){
      let hooksPromise = new Promise((resolve, reject) => {
        preserveOldData(ctx).then(function(result) {
          extractChanges(ctx);
          var appInstance = ctx.Model? ctx.Model.app: {};
          var $tbl = {};
          if(ctx.Model && ctx.Model.app && ctx.Model.app.models) {
            var modelArry = ctx.Model.app.models();
            modelArry.forEach(function(modelObj){
              //todo - need to make the modelObj immutable and expose only the crud operations.
              $tbl[modelObj.modelName] = modelObj;
            })
          }
  
          //Fetch all the before Save hooks and call them in sequence...
          var $qry = require('./$qry')({authorization: ctx.Model.app.getAccessToken? ctx.Model.app.getAccessToken(): ""}, appInstance);          
          var $script = require('./$script')({authorization: ctx.Model.app.getAccessToken? ctx.Model.app.getAccessToken(): "", appInstance});          
          
          $qry._run(getHooksQuery, {"whereClause": {"where": { "Model": ctx.Model.modelName}}}, "data.MetaOperationHook.MetaOperationHookFind.edges")
          .then((async function(instances) {
            let accessHooks = [];
            if(instances){
              instances.forEach(function(hookNode) {
                let hookObj = {
                  Name: hookNode.node.Name,
                  Scope: hookNode.node.Scope,    
                  Definition: hookNode.node.Definition,             
                  Order: hookNode.node.Order,
                  Type: hookNode.node.Type                                
                }
                accessHooks.push(hookObj);
              })
            }
            accessHooks = accessHooks.filter((hook, indx)=> hook.Type == "access");
            accessHooks = accessHooks.sort((a,b)=> { let aOrder = a.Order?parseInt(a.Order): 0; let bOrder = b.Order?parseInt(b.Order):0; return aOrder - bOrder; })
            let isError = false;
            let errorMessage = "";
            ctx.hookState.swap = ctx.hookState.swap || {};
            for(let accessHookIndx in accessHooks) {
              let accessHook = accessHooks[accessHookIndx];                            
              var wrappedDef = "module.exports = function($past, $live, $changes, $state, $script, $qry) {\n return (" + accessHook.Definition + ")();\n}";
              var hookDefinition = requireFromString(wrappedDef);
              await hookDefinition(ctx.hookState.past, ctx.hookState.live, ctx.hookState.changes, ctx.hookState.swap, $script, $qry);
              if(ctx.hookState.swap && ctx.hookState.swap.error) {
                isError = true;
                errorMessage = ctx.hookState.swap.error;
                break;
              }                           
            }            
            if(isError) {
              resolve({error: errorMessage})
            }else {
              resolve();            
            }            
          }))
          .catch(function(err) {
            console.error(err);
            resolve({error: (err && err.message) || "Access Hooks - Unexpected error occurred." });
          });               
        })
        .catch(function(err) {
          console.error(err);
          resolve({error: (err && err.message) || "Access Hooks - Unexpected error occurred." });
        })
      });
      hooksPromise.then((data)=> {
        if(data && data.error) {
          next(data.error);
        }else {
          next();
        }
      });
    }

    metaModelInstance.observe('before save', processBeforeSaveHooks);
    metaModelInstance.observe('after save', processAfterSaveHooks);
    metaModelInstance.observe('before delete', processBeforeDeleteHooks);
    metaModelInstance.observe('after delete', processAfterDeleteHooks);
    // metaModelInstance.observe('access', processAccessHooks);
    
    // subscribeExistingHooks(metaModelInstance);

  }catch(ex) {
    console.log("Exception - " + ex);
    next();
  }finally {

  }
};
