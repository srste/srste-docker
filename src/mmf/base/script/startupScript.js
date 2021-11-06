
'use strict';
module.exports = function(app, loopback, isSchemaReload) {
    var overrideMethods = require('./OverrideCRUD.js');
    var fs = require('fs');
    var path = require('path');
    var ds = app.datasources['mmf'];
    var requireFromString = require('require-from-string');
    let registrationProcessFlow = [];

    if(isSchemaReload) {
        registrationProcessFlow = [
            registerMetaModel,
            registerMetaOperationHook,
            registerRelationshipModel,
            registerRelationships];
    }else {
        registrationProcessFlow = [
            registerBuiltinModel,
            registerMetaModel,
            registerMetaOperationHook,                                  
            registerMetaStyles,
            registerMetaScope,
            registerMetaScopeDownload,
            registerMetaNavigation,
            registerMetaComponent,
            registerMetaComponentProps,
            registerMetaComponentRequires,
            registerMetaComponentAction,
            registerMetaComponentState,
            registerMetaResource,
            registerMetaLocalSync,
            registerMetaProperties,
            registerMetaReusableScript,            
            registerMetaRoute,
            registerMetaDataSource,
            registerMetaXModel,
            registerMetaRouteRequires,
            registerMetaRestMethod,
            registerMetaRouteDataLoaders,
            registerMetaQueries,
            registerMetaTransientData,
            registerMetaDomblocks,
            registerMetaTemplates,
            registerMetaBundles,
            registerMetaBundleFragment,
            registerMetaBundleMaps,
            registerMetaSlides,
            registerMetaSlideActions,
            registerMetaSlideProps,
            registerMetaSlideSlots,
            registerMetaSlideSlotWidgets,
            registerMetaWidgetProperties,
            registerMetaWidgetActions,
            registerUser,
            registerPalette, 
            registerPaletteItem,                                 
            registerDocument,
            registerDocFragment,
            registerDocumentMap,
            //registerUserAccessToken,
            registerSrsteeACLs,
            registerRelationshipModel,
            registerRelationships,
            registerMetaImpersonate,
            registerNonMetaModelOperationHooks,
            registerTestSuites,
            registerTestScripts,             
            registerTestRun,
            registerTestRunResult,            
            bootstrapEssentialData,
            importDBDump,
            cacheMetaData           
        ];
    }
    try {
        return executeRegistrationProcessFlow(registrationProcessFlow);
    }catch(err) {
        console.error(err);
    }

    function executeRegistrationProcessFlow(regProcessFlow) {
        return new Promise((resolve, reject) => {    
            regProcessFlow.reduce((current, next, index) => {
                return current.then(res => {
                    // you may customize what you pass to the next function in the chain
                    // and you may accumulate prior results in some other data structure here
                    return next(res.app, res.ds);
                });
            }, Promise.resolve({app, ds:ds})).then(async (result) => {
                await registerModels2GraphQL(app, ds)
                await overrideRegisteredModelCRUDOperations(app, ds);
                resolve();
            }).catch(err => {
                console.log('error occurred -' + err);
                resolve();
            });        
        });
    }

    function overrideRegisteredModelCRUDOperations(app, ds) {
      return new Promise((resolve, reject) => {
        let modelNames = Object.keys(ds.models);
        modelNames.forEach(function (modelName) {
            let modelInstance = ds.models[modelName];
            overrideMethods.apply(modelInstance);
        });
        resolve();
      });
    }

    // create user and acl and accesstoken models
    function registerBuiltinModel(app,ds){
        return new Promise((resolve, reject) => {
            var lbTables = ['User','AccessToken','ACL','RoleMapping','Role'];
            ds.autoupdate(lbTables,function(er){
                if (er) throw er;
                console.log('Loopback tables [' + lbTables + '] created in '+ds.adapter.name);
                resolve({app, ds});
            });
        });

    }

     //Create the meta-model model creation
    function registerMetaModel(app, ds){
        return new Promise((resolve, reject) => {
            var metaModelJSON = require(__dirname + '/../' +  'model/meta-model.json');
            var hookMetaModel = require(__dirname + '/../' +  'script/MetaModelHook.js');                             
            createModel(ds, metaModelJSON.name, metaModelJSON.properties, metaModelJSON.options);            
            ds.autoupdate(metaModelJSON.name, function (err, result) {
                ds.discoverModelProperties(metaModelJSON.name, function (err, props) {
                    var metaModel = ds.getModel(metaModelJSON.name);
                    bootstrapMetaModelInstances(app, ds, metaModel)
                    .then(function(output) {
                        hookMetaModel(metaModel);
                        app.model(metaModel, { public: true });
                        resolve({app, ds});
                    })
                    .catch(function(err) {
                        console.log(err);
                        resolve({app, ds});
                    })

                });
            });
        });
    }

    function bootstrapMetaModelInstances(app, ds, metaModel) {
        return new Promise((resolve, reject) => {
            var hookMetaModelInstances = require(__dirname + '/../' +  'script/MetaModelInstanceHook.js');
            metaModel.find({}, function(err, results){
                if(results && results.length > 0) {
                    var totalMeteModelInstances2Process = results.length - 1;
                    results.forEach(function(result, indx){
                        var modelJSON = JSON.parse(result['$Definition']);
                        createModel(ds, modelJSON.name, modelJSON.properties, modelJSON.options);                       
                        ds.autoupdate(modelJSON.name, function (err, result) {
                            ds.discoverModelProperties(modelJSON.name, function (err, props) {
                                var modelObj = ds.getModel(modelJSON.name);
                                hookMetaModelInstances(modelObj);
                                app.model(modelObj, {
                                    public: true
                                });
                                if(totalMeteModelInstances2Process == 0) {
                                    resolve({app, ds});
                                }else{
                                    totalMeteModelInstances2Process--;
                                }
                            });
                        });
                    });
                }else{
                    resolve({app, ds});
                }
            });
        });
    }

    function createModel(dataSource, modelName, properties, options) {
        let newOptions = options || {};
        newOptions["defaultPermission"] = 'DENY';
        newOptions["acls"] = [
            {
                "model": modelName,
                "principalType": "ROLE",
                "principalId": "srstee",
                "permission": "ALLOW",
                "property": "*",
                "accessType": "*"
            }
        ];        
        return dataSource.createModel(modelName, properties, newOptions)
    }

    function registerMetaScope(app, ds){
        return new Promise((resolve, reject) => {
            var metaScopeJSON = require(__dirname + '/../' +  'model/meta-scope.json');
            createModel(ds, metaScopeJSON.name, metaScopeJSON.properties, metaScopeJSON.options);
            ds.autoupdate(metaScopeJSON.name, function (err, result) {
                ds.discoverModelProperties(metaScopeJSON.name, function (err, props) {
                    var metaScopeModel = ds.getModel(metaScopeJSON.name);
                    app.model(metaScopeModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    function registerMetaScopeDownload(app, ds){
        return new Promise((resolve, reject) => {
            var metaScopeDownloadJSON = require(__dirname + '/../' +  'model/meta-scope-download.json');
            createModel(ds, metaScopeDownloadJSON.name, metaScopeDownloadJSON.properties, metaScopeDownloadJSON.options);
            ds.autoupdate(metaScopeDownloadJSON.name, function (err, result) {
                ds.discoverModelProperties(metaScopeDownloadJSON.name, function (err, props) {
                    var metaScopeDownloadModel = ds.getModel(metaScopeDownloadJSON.name);
                    app.model(metaScopeDownloadModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    function registerMetaNavigation(app, ds){
        return new Promise((resolve, reject) => {
            var metaNavigationJSON = require(__dirname + '/../' +  'model/meta-navigation.json');
            createModel(ds, metaNavigationJSON.name, metaNavigationJSON.properties, metaNavigationJSON.options);
            ds.autoupdate(metaNavigationJSON.name, function (err, result) {
                ds.discoverModelProperties(metaNavigationJSON.name, function (err, props) {
                    var metaNavigationModel = ds.getModel(metaNavigationJSON.name);
                    app.model(metaNavigationModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    //Create the meta-slide model creation
    function registerMetaSlides(app, ds){
        return new Promise((resolve, reject) => {
            var metaSlideJSON = require(__dirname + '/../' +  'model/meta-slide.json');
            createModel(ds, metaSlideJSON.name, metaSlideJSON.properties, metaSlideJSON.options);
            ds.autoupdate(metaSlideJSON.name, function (err, result) {
                ds.discoverModelProperties(metaSlideJSON.name, function (err, props) {
                    var MetaSlideModel = ds.getModel(metaSlideJSON.name);
                    app.model(MetaSlideModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    //Create the meta-slide-props model creation
    function registerMetaSlideProps(app, ds){
        return new Promise((resolve, reject) => {
            var metaSlidePropsJSON = require(__dirname + '/../' +  'model/meta-slide-props.json');
            createModel(ds, metaSlidePropsJSON.name, metaSlidePropsJSON.properties, metaSlidePropsJSON.options);
            ds.autoupdate(metaSlidePropsJSON.name, function (err, result) {
                ds.discoverModelProperties(metaSlidePropsJSON.name, function (err, props) {
                    var MetaSlidePropsModel = ds.getModel(metaSlidePropsJSON.name);
                    app.model(MetaSlidePropsModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    //Create the meta-slideslot model creation
    function registerMetaSlideSlots(app, ds){
        return new Promise((resolve, reject) => {
            var metaSlideSlotJSON = require(__dirname + '/../' +  'model/meta-slideslot.json');
            createModel(ds, metaSlideSlotJSON.name, metaSlideSlotJSON.properties, metaSlideSlotJSON.options);
            ds.autoupdate(metaSlideSlotJSON.name, function (err, result) {
                ds.discoverModelProperties(metaSlideSlotJSON.name, function (err, props) {
                    var MetaSlideSlotModel = ds.getModel(metaSlideSlotJSON.name);
                    app.model(MetaSlideSlotModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    //Create the meta-slideslotwidget model creation
    function registerMetaSlideSlotWidgets(app, ds){
        return new Promise((resolve, reject) => {
            var metaSlideSlotWidgetJSON = require(__dirname + '/../' +  'model/meta-slideslotwidget.json');
            createModel(ds, metaSlideSlotWidgetJSON.name, metaSlideSlotWidgetJSON.properties, metaSlideSlotWidgetJSON.options);
            ds.autoupdate(metaSlideSlotWidgetJSON.name, function (err, result) {
                ds.discoverModelProperties(metaSlideSlotWidgetJSON.name, function (err, props) {
                    var MetaSlideSlotWidgetsModel = ds.getModel(metaSlideSlotWidgetJSON.name);
                    app.model(MetaSlideSlotWidgetsModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    //Create the meta-widgetproperty model creation
    function registerMetaWidgetProperties(app, ds){
        return new Promise((resolve, reject) => {
            var metaWidgetProperiesJSON = require(__dirname + '/../' +  'model/meta-widgetproperties.json');
            createModel(ds, metaWidgetProperiesJSON.name, metaWidgetProperiesJSON.properties, metaWidgetProperiesJSON.options);
            ds.autoupdate(metaWidgetProperiesJSON.name, function (err, result) {
                ds.discoverModelProperties(metaWidgetProperiesJSON.name, function (err, props) {
                    var MetaWidgetPropertiesModel = ds.getModel(metaWidgetProperiesJSON.name);
                    app.model(MetaWidgetPropertiesModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    //Create the meta-widget-action model creation
    function registerMetaSlideActions(app, ds){
        return new Promise((resolve, reject) => {
            var metaSlideActionJSON = require(__dirname + '/../' +  'model/meta-slide-action.json');
            createModel(ds, metaSlideActionJSON.name, metaSlideActionJSON.properties, metaSlideActionJSON.options);
            ds.autoupdate(metaSlideActionJSON.name, function (err, result) {
                ds.discoverModelProperties(metaSlideActionJSON.name, function (err, props) {
                    var MetaSlideActionModel = ds.getModel(metaSlideActionJSON.name);
                    app.model(MetaSlideActionModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    //Create the meta-widget-action model creation
    function registerMetaWidgetActions(app, ds){
        return new Promise((resolve, reject) => {
            var metaWidgetActionJSON = require(__dirname + '/../' +  'model/meta-widget-action.json');
            createModel(ds, metaWidgetActionJSON.name, metaWidgetActionJSON.properties, metaWidgetActionJSON.options);
            ds.autoupdate(metaWidgetActionJSON.name, function (err, result) {
                ds.discoverModelProperties(metaWidgetActionJSON.name, function (err, props) {
                    var MetaWidgetActionModel = ds.getModel(metaWidgetActionJSON.name);
                    app.model(MetaWidgetActionModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    //Create the meta-component model creation
    function registerMetaComponent(app, ds){
        return new Promise((resolve, reject) => {
            var metaComponentJSON = require(__dirname + '/../' +  'model/meta-component.json');
            var hookMetaComponentModel = require(__dirname + '/../' +  'script/MetaComponentModelHook.js');

            createModel(ds, metaComponentJSON.name, metaComponentJSON.properties, metaComponentJSON.options);

            ds.autoupdate(metaComponentJSON.name, function (err, result) {
                ds.discoverModelProperties(metaComponentJSON.name, function (err, props) {
                    var MetaComponentModel = ds.getModel(metaComponentJSON.name);
                    hookMetaComponentModel(MetaComponentModel);
                    app.model(MetaComponentModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    //Create the meta-component model creation
    function registerMetaComponentProps(app, ds){
        return new Promise((resolve, reject) => {
            var metaComponentPropsJSON = require(__dirname + '/../' +  'model/meta-component-props.json');

            createModel(ds, metaComponentPropsJSON.name, metaComponentPropsJSON.properties, metaComponentPropsJSON.options);

            ds.autoupdate(metaComponentPropsJSON.name, function (err, result) {
                ds.discoverModelProperties(metaComponentPropsJSON.name, function (err, props) {
                    var MetaComponentPropsModel = ds.getModel(metaComponentPropsJSON.name);
                    app.model(MetaComponentPropsModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }


    //Create the meta-styles model creation
    function registerMetaStyles(app, ds){
        return new Promise((resolve, reject) => {
            var metaStylesJSON = require(__dirname + '/../' +  'model/meta-styles.json');
            createModel(ds, metaStylesJSON.name, metaStylesJSON.properties, metaStylesJSON.options);

            ds.autoupdate(metaStylesJSON.name, function (err, result) {
                ds.discoverModelProperties(metaStylesJSON.name, function (err, props) {
                    var metaStylesModel = ds.getModel(metaStylesJSON.name);
                    app.model(metaStylesModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    //Create the meta-component-requires model creation
    function registerMetaComponentRequires(app, ds){
        return new Promise((resolve, reject) => {
            var metaComponentRequiresJSON = require(__dirname + '/../' +  'model/meta-component-requires.json');
            createModel(ds, metaComponentRequiresJSON.name, metaComponentRequiresJSON.properties, metaComponentRequiresJSON.options);

            ds.autoupdate(metaComponentRequiresJSON.name, function (err, result) {
                ds.discoverModelProperties(metaComponentRequiresJSON.name, function (err, props) {
                    var metaComponentRequiresModel = ds.getModel(metaComponentRequiresJSON.name);
                    app.model(metaComponentRequiresModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    //Create the meta-route-requires model creation
    function registerMetaRouteRequires(app, ds){
        return new Promise((resolve, reject) => {
            var metaRouteRequiresJSON = require(__dirname + '/../' +  'model/meta-route-requires.json');
            createModel(ds, metaRouteRequiresJSON.name, metaRouteRequiresJSON.properties, metaRouteRequiresJSON.options);

            ds.autoupdate(metaRouteRequiresJSON.name, function (err, result) {
                ds.discoverModelProperties(metaRouteRequiresJSON.name, function (err, props) {
                    var metaRouteRequiresModel = ds.getModel(metaRouteRequiresJSON.name);
                    app.model(metaRouteRequiresModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }
    
    function registerMetaRestMethod(app, ds){
        return new Promise((resolve, reject) => {
            var metaRestMethodJSON = require(__dirname + '/../' +  'model/meta-rest-method.json');
            createModel(ds, metaRestMethodJSON.name, metaRestMethodJSON.properties, metaRestMethodJSON.options);

            ds.autoupdate(metaRestMethodJSON.name, function (err, result) {
                ds.discoverModelProperties(metaRestMethodJSON.name, function (err, props) {
                    var metaRestMethodModel = ds.getModel(metaRestMethodJSON.name);
                    app.model(metaRestMethodModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    function registerMetaRouteDataLoaders(app, ds){
        return new Promise((resolve, reject) => {
            var MetaRouteDataLoaderJSON = require(__dirname + '/../' +  'model/meta-route-dataloaders.json');
            createModel(ds, MetaRouteDataLoaderJSON.name, MetaRouteDataLoaderJSON.properties, MetaRouteDataLoaderJSON.options);

            ds.autoupdate(MetaRouteDataLoaderJSON.name, function (err, result) {
                ds.discoverModelProperties(MetaRouteDataLoaderJSON.name, function (err, props) {
                    var MetaRouteDataLoaderModel = ds.getModel(MetaRouteDataLoaderJSON.name);
                    app.model(MetaRouteDataLoaderModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    function registerMetaTemplates(app, ds){
        return new Promise((resolve, reject) => {
            var metaTemplatesJSON = require(__dirname + '/../' +  'model/meta-templates.json');
            createModel(ds, metaTemplatesJSON.name, metaTemplatesJSON.properties, metaTemplatesJSON.options);

            ds.autoupdate(metaTemplatesJSON.name, function (err, result) {
                ds.discoverModelProperties(metaTemplatesJSON.name, function (err, props) {
                    var metaTemplatesModel = ds.getModel(metaTemplatesJSON.name);
                    app.model(metaTemplatesModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    //Create the meta-component-action model creation
    function registerMetaComponentAction(app, ds){
        return new Promise((resolve, reject) => {
            var metaComponentActionJSON = require(__dirname + '/../' +  'model/meta-component-action.json');
            createModel(ds, metaComponentActionJSON.name, metaComponentActionJSON.properties, metaComponentActionJSON.options);

            ds.autoupdate(metaComponentActionJSON.name, function (err, result) {
                ds.discoverModelProperties(metaComponentActionJSON.name, function (err, props) {
                    var metaComponentActionModel = ds.getModel(metaComponentActionJSON.name);
                    app.model(metaComponentActionModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    //Create the meta-component-state model creation
    function registerMetaComponentState(app, ds){
        return new Promise((resolve, reject) => {
            var metaComponentStateJSON = require(__dirname + '/../' +  'model/meta-component-state.json');
            createModel(ds, metaComponentStateJSON.name, metaComponentStateJSON.properties, metaComponentStateJSON.options);

            ds.autoupdate(metaComponentStateJSON.name, function (err, result) {
                ds.discoverModelProperties(metaComponentStateJSON.name, function (err, props) {
                    var metaComponentStateModel = ds.getModel(metaComponentStateJSON.name);
                    app.model(metaComponentStateModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    //Create the meta-resource model creation
    function registerMetaResource(app, ds){
        return new Promise((resolve, reject) => {
            var metaResourceJSON = require(__dirname + '/../' +  'model/meta-resource.json');
            createModel(ds, metaResourceJSON.name, metaResourceJSON.properties, metaResourceJSON.options);

            ds.autoupdate(metaResourceJSON.name, function (err, result) {
                ds.discoverModelProperties(metaResourceJSON.name, function (err, props) {
                    var metaResourceModel = ds.getModel(metaResourceJSON.name);
                    app.model(metaResourceModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }


    //Create the meta-route model creation
    function registerMetaRoute(app, ds){
        return new Promise((resolve, reject) => {
            var metaRouterJSON = require(__dirname + '/../' +  'model/meta-router.json');
            createModel(ds, metaRouterJSON.name, metaRouterJSON.properties, metaRouterJSON.options);

            ds.autoupdate(metaRouterJSON.name, function (err, result) {
                ds.discoverModelProperties(metaRouterJSON.name, function (err, props) {
                    var metaRouterModel = ds.getModel(metaRouterJSON.name);
                    app.model(metaRouterModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    //Create the meta-datasource model creation
    function registerMetaDataSource(app, ds){
        return new Promise((resolve, reject) => {
            var metaDataSourceJSON = require(__dirname + '/../' +  'model/meta-datasource.json');
            createModel(ds, metaDataSourceJSON.name, metaDataSourceJSON.properties, metaDataSourceJSON.options);

            ds.autoupdate(metaDataSourceJSON.name, function (err, result) {
                ds.discoverModelProperties(metaDataSourceJSON.name, function (err, props) {
                    var metaDataSourceModel = ds.getModel(metaDataSourceJSON.name);
                    app.model(metaDataSourceModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    //Create the meta-xmodel model creation
    function registerMetaXModel(app, ds){
        return new Promise((resolve, reject) => {
            var metaXModelJSON = require(__dirname + '/../' +  'model/meta-xmodel.json');
            createModel(ds, metaXModelJSON.name, metaXModelJSON.properties, metaXModelJSON.options);

            ds.autoupdate(metaXModelJSON.name, function (err, result) {
                ds.discoverModelProperties(metaXModelJSON.name, function (err, props) {
                    var metaXModel = ds.getModel(metaXModelJSON.name);
                    app.model(metaXModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    

    //Create the meta-properties model creation
    function registerMetaProperties(app, ds){
        return new Promise((resolve, reject) => {
            var metaPropertyJSON = require(__dirname + '/../' +  'model/meta-properties.json');
            createModel(ds, metaPropertyJSON.name, metaPropertyJSON.properties, metaPropertyJSON.options);

            ds.autoupdate(metaPropertyJSON.name, function (err, result) {
                ds.discoverModelProperties(metaPropertyJSON.name, function (err, props) {
                    var metaPropertyModel = ds.getModel(metaPropertyJSON.name);
                    app.model(metaPropertyModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    function registerMetaImpersonate(app, ds){
        return new Promise((resolve, reject) => {
            var metaImpersonateJSON = require(__dirname + '/../' +  'model/meta-impersonate.json');
            createModel(ds, metaImpersonateJSON.name, metaImpersonateJSON.properties, metaImpersonateJSON.options);

            ds.autoupdate(metaImpersonateJSON.name, function (err, result) {
                ds.discoverModelProperties(metaImpersonateJSON.name, function (err, props) {
                    var metaImpersonateModel = ds.getModel(metaImpersonateJSON.name);
                    app.model(metaImpersonateModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    //Create the meta-localsync model creation
    function registerMetaLocalSync(app, ds){
        return new Promise((resolve, reject) => {
            var metaLocalSyncJSON = require(__dirname + '/../' +  'model/meta-localsync.json');
            createModel(ds, metaLocalSyncJSON.name, metaLocalSyncJSON.properties, metaLocalSyncJSON.options);

            ds.autoupdate(metaLocalSyncJSON.name, function (err, result) {
                ds.discoverModelProperties(metaLocalSyncJSON.name, function (err, props) {
                    var metaLocalSyncModel = ds.getModel(metaLocalSyncJSON.name);
                    app.model(metaLocalSyncModel, { public: true });
                    var localSyncConfiguration = require(__dirname + '/../' +  'master-data/LocalSyncConfiguration.js');
                    localSyncConfiguration(metaLocalSyncModel, app.__basedir);
                    resolve({app, ds});
                });
            });
        });
    }

    function registerDocument(app, ds) {
        return new Promise((resolve, reject) => {
            var metaDocumentJSON = require(__dirname + '/../' +  'model/meta-document.json');
            createModel(ds, metaDocumentJSON.name, metaDocumentJSON.properties, metaDocumentJSON.options);

            ds.autoupdate(metaDocumentJSON.name, function (err, result) {
                ds.discoverModelProperties(metaDocumentJSON.name, function (err, props) {
                    var metaDocumentModel = ds.getModel(metaDocumentJSON.name);
                    app.model(metaDocumentModel, { public: false });
                    resolve({app, ds});
                });
            });
        });
    }

    function registerDocFragment(app, ds) {
        return new Promise((resolve, reject) => {
            var metaDocFragmentJSON = require(__dirname + '/../' +  'model/meta-docfragment.json');
            createModel(ds, metaDocFragmentJSON.name, metaDocFragmentJSON.properties, metaDocFragmentJSON.options);

            ds.autoupdate(metaDocFragmentJSON.name, function (err, result) {
                ds.discoverModelProperties(metaDocFragmentJSON.name, function (err, props) {
                    var metaDocFragmentModel = ds.getModel(metaDocFragmentJSON.name);
                    app.model(metaDocFragmentModel, { public: false });
                    resolve({app, ds});
                });
            });
        });
    }

    function registerDocumentMap(app, ds) {
        return new Promise((resolve, reject) => {
            var metaDocumentMapJSON = require(__dirname + '/../' +  'model/meta-documentmap.json');
            createModel(ds, metaDocumentMapJSON.name, metaDocumentMapJSON.properties, metaDocumentMapJSON.options);

            ds.autoupdate(metaDocumentMapJSON.name, function (err, result) {
                ds.discoverModelProperties(metaDocumentMapJSON.name, function (err, props) {
                    var metaDocumentMapModel = ds.getModel(metaDocumentMapJSON.name);
                    app.model(metaDocumentMapModel, { public: false });
                    resolve({app, ds});
                });
            });
        });
    }

    function assignRoles(ctx,next){
        var app = ctx.Model.app;
        var Role = app.models.Role;
        var RoleMapping = app.models.RoleMapping;
        var SrsteUser = ctx.instance;

        Role.create({
            name: 'admin'
          }, function(err, role) {
            if (err) throw err;

            console.log('Created role:', role);

            //make bob an admin
            role.principals.create({
              principalType: RoleMapping.USER,
              principalId: SrsteUser.uid
            }, function(err, principal) {
              if (err) throw err;

              console.log('Created principal:', principal);
            });
          });

        //console.log("after registering the user model "+ctx.app.email);
        next();
    }

    // create srstee user model
    function registerUser(app, ds){
        return new Promise((resolve, reject) => {
            var metaUserJSON = require(__dirname + '/../' +  'model/meta-user.json');
            metaUserJSON.options = metaUserJSON.options || {};
            metaUserJSON.options["acls"] = [
                {
                  "principalType": "ROLE",
                  "principalId": "srstee",
                  "permission": "ALLOW",
                  "property": "*"
                }
            ];
            createModel(ds, metaUserJSON.name,metaUserJSON.properties, metaUserJSON.options);

            ds.autoupdate(metaUserJSON.name, function (err, result) {
                ds.discoverModelProperties(metaUserJSON.name, function (err, props) {
                    var metaUserModel = ds.getModel(metaUserJSON.name);
                    app.model(metaUserModel, { public: true });

                 //   var userActions = require(__dirname + '/../' +  'graphql/UserAuthActions.js');

                    //metaUserModel.observe('after save',assignRoles);

                    // metaUserModel.verifyEmail = function(msg,cb){
                    //     cb(null,"Greetings..."+msg);
                    // }

                    // metaUserModel.remoteMethod('verifyEmail',{
                    //     accepts: {arg: 'msg', type: 'string'},
                    //     returns: {arg: 'greeting', type: 'string'},
                    //     http: {path: '/sayhi', verb: 'get'}
                    //   });

                    resolve({app, ds});
                });
            });
        });
    }

    // create meta palette related models
    function registerPalette(app, ds){
        return new Promise((resolve, reject) => {
            var metaPaletteJSON = require(__dirname + '/../' +  'model/meta-palette.json');
            createModel(ds, metaPaletteJSON.name,metaPaletteJSON.properties, metaPaletteJSON.options);

            ds.autoupdate(metaPaletteJSON.name, function (err, result) {
                ds.discoverModelProperties(metaPaletteJSON.name, function (err, props) {
                    var metaPaletteModel = ds.getModel(metaPaletteJSON.name);
                    app.model(metaPaletteModel, { public: true });      
                    resolve({app, ds});                                     
                });
            });
        });
    }

    // create meta paletteitem related models
    function registerPaletteItem(app, ds){
        return new Promise((resolve, reject) => {
            var metaPaletteItemJSON = require(__dirname + '/../' +  'model/meta-palette-item.json');
            createModel(ds, metaPaletteItemJSON.name,metaPaletteItemJSON.properties, metaPaletteItemJSON.options);

            ds.autoupdate(metaPaletteItemJSON.name, function (err, result) {
                ds.discoverModelProperties(metaPaletteItemJSON.name, function (err, props) {
                    var metaPaletteItemModel = ds.getModel(metaPaletteItemJSON.name);
                    app.model(metaPaletteItemModel, { public: true });    
                    resolve({app, ds});                                                             
                });
            });
        });        
    }

     // create srstee user model
     function registerUserAccessToken(app, ds){
        return new Promise((resolve, reject) => {
            var metaUserAccessJSON = require(__dirname + '/../' +  'model/meta-strstee-access-token.json');
            createModel(ds, metaUserAccessJSON.name,metaUserAccessJSON.properties, metaUserAccessJSON.options);

            ds.autoupdate(metaUserAccessJSON.name, function (err, result) {
                ds.discoverModelProperties(metaUserAccessJSON.name, function (err, props) {
                    var metaUserAccessTokenModel = ds.getModel(metaUserAccessJSON.name);
                    app.model(metaUserAccessTokenModel, { public: true });

                    resolve({app, ds});
                });
            });
        });
    }


    //Load Meta Operation Hook API
    function registerMetaOperationHook(app, ds){
        return new Promise((resolve, reject) => {
            var metaOperationHookJSON = require(__dirname + '/../' +  'model/meta-operationhook.json');
            createModel(ds, metaOperationHookJSON.name, metaOperationHookJSON.properties, metaOperationHookJSON.options);

            ds.autoupdate(metaOperationHookJSON.name, function (err, result) {
                ds.discoverModelProperties(metaOperationHookJSON.name, function (err, props) {
                    var metaOperationHook = ds.getModel(metaOperationHookJSON.name);
                    app.model(metaOperationHook, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }
    
    //Load Reusable Scripts
    function registerMetaReusableScript(app, ds){
        return new Promise((resolve, reject) => {
            var reusableModelJson = require(__dirname + '/../' +  'model/meta-reusable-scripts.json');
            createModel(ds, reusableModelJson.name, reusableModelJson.properties, reusableModelJson.options);

            ds.autoupdate(reusableModelJson.name, function (err, result) {
                ds.discoverModelProperties(reusableModelJson.name, function (err, props) {
                    var reusableScriptModel = ds.getModel(reusableModelJson.name);
                    app.model(reusableScriptModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }
    
    //Load Test Scripts
    function registerTestScripts(app, ds){
        return new Promise((resolve, reject) => {
            var testScriptsModelJson = require(__dirname + '/../' +  'model/meta-test-scripts.json');
            createModel(ds, testScriptsModelJson.name, testScriptsModelJson.properties, testScriptsModelJson.options);

            ds.autoupdate(testScriptsModelJson.name, function (err, result) {
                ds.discoverModelProperties(testScriptsModelJson.name, function (err, props) {
                    var testScriptsModel = ds.getModel(testScriptsModelJson.name);
                    app.model(testScriptsModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    //Load Test Suite
    function registerTestSuites(app, ds){
        return new Promise((resolve, reject) => {
            var testSuitesModelJson = require(__dirname + '/../' +  'model/meta-test-suites.json');
            createModel(ds, testSuitesModelJson.name, testSuitesModelJson.properties, testSuitesModelJson.options);

            ds.autoupdate(testSuitesModelJson.name, function (err, result) {
                ds.discoverModelProperties(testSuitesModelJson.name, function (err, props) {
                    var testSuitesModel = ds.getModel(testSuitesModelJson.name);
                    app.model(testSuitesModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    //Load Test Run
    function registerTestRun(app, ds){
        return new Promise((resolve, reject) => {
            var testRunModelJson = require(__dirname + '/../' +  'model/meta-test-run.json');
            createModel(ds, testRunModelJson.name, testRunModelJson.properties, testRunModelJson.options);

            ds.autoupdate(testRunModelJson.name, function (err, result) {
                ds.discoverModelProperties(testRunModelJson.name, function (err, props) {
                    var testRunModel = ds.getModel(testRunModelJson.name);
                    app.model(testRunModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    //Load Test Run Results
    function registerTestRunResult(app, ds){
        return new Promise((resolve, reject) => {
            var testRunResultModelJson = require(__dirname + '/../' +  'model/meta-test-run-result.json'); 
            createModel(ds, testRunResultModelJson.name, testRunResultModelJson.properties, testRunResultModelJson.options);

            ds.autoupdate(testRunResultModelJson.name, function (err, result) {
                ds.discoverModelProperties(testRunResultModelJson.name, function (err, props) {
                    var testRunResultModel = ds.getModel(testRunResultModelJson.name);
                    app.model(testRunResultModel, { public: true });
                    resolve({app, ds});  
                });
            });
        });
    }

    //Load MetaQueries table
    function registerMetaQueries(app, ds) {
        return new Promise((resolve, reject) => {
            var queriesModelJson = require(__dirname + '/../' +  'model/meta-queries.json');
            createModel(ds, queriesModelJson.name, queriesModelJson.properties, queriesModelJson.options);

            ds.autoupdate(queriesModelJson.name, function (err, result) {
                ds.discoverModelProperties(queriesModelJson.name, function (err, props) {
                    var queriesModel = ds.getModel(queriesModelJson.name);
                    app.model(queriesModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    //Load registerMetaTransientData table
    function registerMetaTransientData(app, ds) {
        return new Promise((resolve, reject) => {
            var transientDataModelJson = require(__dirname + '/../' +  'model/meta-transient-data.json');
            createModel(ds, transientDataModelJson.name, transientDataModelJson.properties, transientDataModelJson.options);

            ds.autoupdate(transientDataModelJson.name, function (err, result) {
                ds.discoverModelProperties(transientDataModelJson.name, function (err, props) {
                    var transientDataModel = ds.getModel(transientDataModelJson.name);
                    app.model(transientDataModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    function registerMetaBundles(app, ds) {
        return new Promise((resolve, reject) => {
            var bundleModelJson = require(__dirname + '/../' +  'model/meta-bundles.json');
            createModel(ds, bundleModelJson.name, bundleModelJson.properties, bundleModelJson.options);

            ds.autoupdate(bundleModelJson.name, function (err, result) {
                ds.discoverModelProperties(bundleModelJson.name, function (err, props) {
                    var bundleModel = ds.getModel(bundleModelJson.name);
                    app.model(bundleModel, { public: false });
                    resolve({app, ds});
                });
            });
        });
    }

    function registerMetaBundleMaps(app, ds) {
        return new Promise((resolve, reject) => {
            var bundleMapModelJson = require(__dirname + '/../' +  'model/meta-bundle-map.json');
            createModel(ds, bundleMapModelJson.name, bundleMapModelJson.properties, bundleMapModelJson.options);

            ds.autoupdate(bundleMapModelJson.name, function (err, result) {
                ds.discoverModelProperties(bundleMapModelJson.name, function (err, props) {
                    var bundleMapModel = ds.getModel(bundleMapModelJson.name);
                    app.model(bundleMapModel, { public: false });
                    resolve({app, ds});
                });
            });
        });
    }
    
    function registerMetaBundleFragment(app, ds) {
        return new Promise((resolve, reject) => {
            var bundleFragmentModelJson = require(__dirname + '/../' +  'model/meta-bundlefragment.json');
            createModel(ds, bundleFragmentModelJson.name, bundleFragmentModelJson.properties, bundleFragmentModelJson.options);

            ds.autoupdate(bundleFragmentModelJson.name, function (err, result) {
                ds.discoverModelProperties(bundleFragmentModelJson.name, function (err, props) {
                    var bundleFragmentModel = ds.getModel(bundleFragmentModelJson.name);
                    app.model(bundleFragmentModel, { public: false });
                    resolve({app, ds});
                });
            });
        });
    }

    //Load Metadomblock table
    function registerMetaDomblocks(app, ds) {
        return new Promise((resolve, reject) => {
            var domblockModelJson = require(__dirname + '/../' +  'model/meta-dom-blocks.json');
            createModel(ds, domblockModelJson.name, domblockModelJson.properties, domblockModelJson.options);

            ds.autoupdate(domblockModelJson.name, function (err, result) {
                ds.discoverModelProperties(domblockModelJson.name, function (err, props) {
                    var domModel = ds.getModel(domblockModelJson.name);
                    app.model(domModel, { public: true });
                    resolve({app, ds});
                });
            });
        });
    }

    //Load registerRelationshipModel table
    function registerRelationshipModel(app, ds) {
        return new Promise((resolve, reject) => {
            var relationshipModelJson = require(__dirname + '/../' +  'model/meta-relationship.json');
            createModel(ds, relationshipModelJson.name, relationshipModelJson.properties, relationshipModelJson.options);
            ds.autoupdate(relationshipModelJson.name, function (err, result) {
                ds.discoverModelProperties(relationshipModelJson.name, function (err, props) {
                    var relationshipModel = ds.getModel(relationshipModelJson.name);
                    var hookRelationshipHook = require(__dirname + '/../' +  'script/MetaRelationshipHook.js');
                    hookRelationshipHook(relationshipModel, app);
                    app.model(relationshipModel, { public: true });
                    bootstrapMetaRelationshipInstances(app, ds, relationshipModel)
                    .then(function(result) {                        
                        resolve({app, ds});
                    })
                });
            });
        });
    }

    function bootstrapMetaRelationshipInstances(app, ds, relationshipModel) {
        return new Promise((resolve, reject) => {
            relationshipModel.find()
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


    //Load the Relations
    function registerRelationships(app, ds){

        return new Promise((resolve, reject) => {
            try {
                var metaOperationHookJSON = require(__dirname + '/../' +  'model/meta-operationhook.json');
                var metaModelJSON = require(__dirname + '/../' +  'model/meta-model.json');

                var metaModel = ds.getModel(metaModelJSON.name);
                var metaOperationHook = ds.getModel(metaOperationHookJSON.name);                
                metaModel.hasMany(metaOperationHook, {foreignKey: 'Model', as: 'hooks'});
                //metaOperationHook.belongsTo(metaModel, {foreignKey: 'Model', as: 'hooks'});

                var metaComponentJSON = require(__dirname + '/../' +  'model/meta-component.json');
                var metaComponentModel = ds.getModel(metaComponentJSON.name);

                var metaComponentRequiresJSON = require(__dirname + '/../' +  'model/meta-component-requires.json');
                var metaComponentRequiresModel = ds.getModel(metaComponentRequiresJSON.name);

                metaComponentModel.hasMany(metaComponentRequiresModel, {foreignKey: 'Component', as: 'requiredComponents'});
                metaComponentRequiresModel.belongsTo(metaComponentModel, {foreignKey: 'Component', as: 'component'});
                metaComponentRequiresModel.belongsTo(metaComponentModel, {foreignKey: 'RequiredComponent', as: 'requiredComponent'});

                var metaComponentStateJSON = require(__dirname + '/../' +  'model/meta-component-state.json');
                var metaComponentStateModel = ds.getModel(metaComponentStateJSON.name);
                
                metaComponentModel.hasMany(metaComponentStateModel, {foreignKey: 'StateComponent', as: 'States'});
                metaComponentStateModel.belongsTo(metaComponentModel, {foreignKey: 'StateComponent', as: 'stateComponent'});

                var metaComponentPropsJSON = require(__dirname + '/../' +  'model/meta-component-props.json');
                var metaComponentPropsModel = ds.getModel(metaComponentPropsJSON.name);
                
                metaComponentModel.hasMany(metaComponentPropsModel, {foreignKey: 'PropsComponent', as: 'Props'});
                metaComponentPropsModel.belongsTo(metaComponentModel, {foreignKey: 'PropsComponent', as: 'propsComponent'});

                var metaComponentActionJSON = require(__dirname + '/../' +  'model/meta-component-action.json');
                var metaComponentActionModel = ds.getModel(metaComponentActionJSON.name);

                metaComponentModel.hasMany(metaComponentActionModel, {foreignKey: 'ActionComponent', as: 'Actions'});
                metaComponentActionModel.belongsTo(metaComponentModel, {foreignKey: 'ActionComponent', as: 'actionComponent'});

                var metaRouterJSON = require(__dirname + '/../' +  'model/meta-router.json');
                var metaRouterModel = ds.getModel(metaRouterJSON.name);

                var metaRouteRequiresJSON = require(__dirname + '/../' +  'model/meta-route-requires.json');
                var metaRouteRequiresModel = ds.getModel(metaRouteRequiresJSON.name);

                metaRouterModel.hasMany(metaRouteRequiresModel, {foreignKey: 'Router', as: 'requiredComponents'});
                metaRouteRequiresModel.belongsTo(metaRouterModel, {foreignKey: 'Router', as: 'router'});
                metaRouteRequiresModel.belongsTo(metaComponentModel, {foreignKey: 'RequiredComponent', as: 'requiredComponent'});

                var metaPaletteJSON = require(__dirname + '/../' +  'model/meta-palette.json');
                var metaPaletteModel = ds.getModel(metaPaletteJSON.name);
                
                var metaPaletteItemJSON = require(__dirname + '/../' +  'model/meta-palette-item.json');
                var metaPaletteItemModel = ds.getModel(metaPaletteItemJSON.name);

                var metaSlideJSON = require(__dirname + '/../' +  'model/meta-slide.json');
                var metaSlideModel = ds.getModel(metaSlideJSON.name);

                var metaSlidePropsJSON = require(__dirname + '/../' +  'model/meta-slide-props.json');
                var metaSlidePropsModel = ds.getModel(metaSlidePropsJSON.name);

                var metaSlideSlotJSON = require(__dirname + '/../' +  'model/meta-slideslot.json');
                var metaSlideSlotModel = ds.getModel(metaSlideSlotJSON.name);

                var metaSlideSlotWidgetJSON = require(__dirname + '/../' +  'model/meta-slideslotwidget.json');
                var metaSlideSlotWidgetModel = ds.getModel(metaSlideSlotWidgetJSON.name);

                var metaWidgetPropertiesJSON = require(__dirname + '/../' +  'model/meta-widgetproperties.json');
                var metaWidgetPropertiesModel = ds.getModel(metaWidgetPropertiesJSON.name);

                var metaWidgetActionsJSON = require(__dirname + '/../' +  'model/meta-widget-action.json');
                var metaWidgetActionModel = ds.getModel(metaWidgetActionsJSON.name);

                metaPaletteItemModel.belongsTo(metaComponentModel, {foreignKey: 'ComponentId', as: 'component'});                

                metaSlidePropsModel.belongsTo(metaSlideModel, {foreignKey: 'PropsSlide', as: 'propsSlide'});
                
                metaSlideModel.hasMany(metaSlidePropsModel, {foreignKey: 'PropsSlide', as: 'props'});

                //SlideSlot belongs to Slide and Slide has many slots
                metaSlideSlotModel.belongsTo(metaSlideModel, {foreignKey: 'Slide', as: 'slotSlide'});                
                metaSlideModel.hasMany(metaSlideSlotModel, {foreignKey: 'Slide', as: 'slots'});

                //SlideSlotWidget belongs to SlideSlot & SlideSlotWidget belongs to MetaComponent
                metaSlideSlotWidgetModel.belongsTo(metaSlideSlotModel, {foreignKey: 'Slot', as: 'widgetSlot'});
                metaSlideSlotModel.belongsTo(metaSlideSlotWidgetModel, {foreignKey: 'Widget', as: 'slotWidget'});

                metaSlideSlotWidgetModel.belongsTo(metaComponentModel, {foreignKey: 'Component', as: 'component'});
                // metaComponentModel.belongsTo(metaSlideSlotWidgetModel, {foreignKey: 'Component', as: 'widget'});

                //SlideWidgetProperties belongs to SlideSlotWidget and SlideSlotWidget has many widgetproperties
                metaWidgetPropertiesModel.belongsTo(metaSlideSlotWidgetModel, {foreignKey: 'Widget', as: 'widget'});

                metaSlideSlotWidgetModel.hasMany(metaWidgetPropertiesModel, {foreignKey: 'Widget', as: 'widgetproperties'});

                //SlideWidgetAction belongs to SlideSlotWidget and SlideSlotWidget has many widget actions
                metaWidgetActionModel.belongsTo(metaSlideSlotWidgetModel, {foreignKey: 'Widget', as: 'widget'});
                metaSlideSlotWidgetModel.hasMany(metaWidgetActionModel, {foreignKey: 'Widget', as: 'widgetactions'});
                
                metaPaletteItemModel.belongsTo(metaPaletteModel, {foreignKey: 'Palette', as: 'itemPalette'});

                metaPaletteModel.hasMany(metaPaletteItemModel, {foreignKey: 'Palette', as: 'palette'});

                //app.deleteModelByName(metaModel.modelName);
                app.model(metaModel, { public: true });

                //app.deleteModelByName(metaOperationHook.modelName);
                app.model(metaOperationHook, { public: true });                

                //app.deleteModelByName(metaComponentModel.modelName);
                app.model(metaComponentModel, { public: true });

                app.model(metaComponentRequiresModel, { public: true });

                //app.deleteModelByName(metaComponentStateModel.modelName);
                app.model(metaComponentStateModel, { public: true });

                //app.deleteModelByName(metaComponentActionModel.modelName);
                app.model(metaComponentActionModel, { public: true });


                //app.model(srsteUserModel, { public: true });
                //app.model(accessTokenModel, { public: false });
                //app.model(roleModel, { public: false });

               // console.log("this is after creating...");
                resolve({app, ds});
            }catch(ex) {
                console.log('Error occurred while registering relationships - ' + ex);
                console.log(ex);
                resolve({app, ds});
            }

        });
    }

    //register non-metamodel-instance operation hooks

    function registerNonMetaModelOperationHooks(app, ds) {
        return new Promise((resolve,reject)=>{
            var initNonMetaModelOperationHooks = require(__dirname + '/../' +  'script/NonMetaModelInstanceHook.js');
            let modelNames = Object.keys(ds.models);
            modelNames.forEach(function (modelName) {
                let modelInstance = ds.models[modelName];        
                //todo - need to make the modelObj immutable and expose only the crud operations.
                if(modelInstance.modelName.startsWith('Meta')) {
                    initNonMetaModelOperationHooks(modelInstance);
                }
            });
            resolve({app, ds});
        });
    }

    function registerModels2GraphQL(app, ds) {
        return new Promise((resolve,reject)=>{            
            var registerModel2GraphQL = require(__dirname + '/../' +  'graphql/RegisterModel2GraphQL.js');
            registerModel2GraphQL(app, app.models);
            resolve({app, ds});
        });
    }

    // acls
    function registerSrsteeACLs(app, ds){
        return new Promise((resolve,reject)=>{
            var srsteeACLRegister = require(__dirname + '/../' +  'script/RegisterSrsteeACLs.js');
            srsteeACLRegister(app, ds)
            .then(function(){
                resolve({app, ds});
            })
        });
    }

    function bootstrapEssentialData(app, ds) {
        return new Promise((resolve,reject)=>{
            var $tbl = {};
            let modelNames = Object.keys(ds.models);
            modelNames.forEach(function (modelName) {
                let modelInstance = ds.models[modelName];                            
                $tbl[modelInstance.modelName] = modelInstance;
            });
            var sysAndGuestUsers = [{
                uid:  "4a9bbbb0-87b2-11ea-a34d-47ca0d8c82cb",
                FirstName: "System",
                LastName: "System",
                Email: "system@srste.in",
                Password: "$2b$10$TOYjTgDWjLw/cTnxy5PSUeUvcGYDEEXq5Skw2Psf1zjwwB8AdBYxG",
                LastVisitedScope: "mmf"
            },{
                uid:  "4a9bbbb0-87b2-11ea-a34d-47ca0d8c83ed",
                FirstName: "sr",
                LastName: "guest",
                Email: "sr_guest@srstee.com",
                Password: "$2a$10$7QaTcpxeMcLQ0fBy4FBra.lVX5zhhRVaGORTbNM2miwTQk/lUkszW",
                LastVisitedScope: "mmf"
            }];
            var totalUsersTobeInserted = sysAndGuestUsers.length;
            sysAndGuestUsers.forEach(function(sysAndGuestUsersObj){
                $tbl.SrsteeUser.upsertWithWhere({"uid": sysAndGuestUsersObj["uid"]}, sysAndGuestUsersObj, (err, obj) => {
                    if(err) resolve({app, ds});
                }); 
                totalUsersTobeInserted--;
                if(totalUsersTobeInserted == 0) {
                    resolve({app, ds});
                }
            });               
            //warm up the required data to be loaded into the cache...            
        });
    }

    function importDBDump(app, ds) {
        return new Promise(async (resolve, reject)=>{  
            var $tbl = {};
            let modelNames = Object.keys(ds.models);
            modelNames.forEach(function (modelName) {
                let modelInstance = ds.models[modelName];                           
                $tbl[modelInstance.modelName] = modelInstance;
            });
            let dataSourceConfig = null;
            //load the datasource based on the type of the NODE_ENV.
            if(process.env.NODE_ENV == "production") {
                dataSourceConfig = require(path.join(__dirname + '../../../../', 'server', 'datasources.production.js'));                
            }else {
                dataSourceConfig = fs.readFileSync(path.join(__dirname + '../../../../', 'server', 'datasources.json'));
                dataSourceConfig = JSON.parse(dataSourceConfig);
            }            

            $tbl.MetaProperty.find({where:  {uid:  "4a9bbcb0-89b2-10ea-a32d-47db0d8c82cb"}}, function(err, results){                
                if(!results || results.length == 0 || (results[0].Value != "true")) {                                       
                    const Importer = require('mysql-import');
                    const dbConfig  = dataSourceConfig.mmf;
                    // console.log(dbConfig);
                    const host = dbConfig.host;
                    const dbuser = dbConfig.user;
                    const dbpassword = dbConfig.password;
                    const database = dbConfig.database;
                    const dbport = dbConfig.port;

                    const importUtil = new Importer({host, user: dbuser, password: dbpassword, database, port: dbport});
                    console.log("dbdump importing... please wait a moment before the server is ready for use...");
                    importUtil.import(path.join(app.__basedir, 'dbdump', 'srstee.sql'))
                    .then(()=>{
                        var files_imported = importUtil.getImported();
                        console.log('Import successful. Server is ready now!');
                        $tbl.MetaProperty.upsertWithWhere({"uid": "4a9bbcb0-89b2-10ea-a32d-47db0d8c82cb"}, {
                            uid:  "4a9bbcb0-89b2-10ea-a32d-47db0d8c82cb",
                            Name: "db.dumped",
                            Value: "true"                                
                        }, async (err, obj) => {
                            await executeRegistrationProcessFlow([registerMetaModel, registerMetaOperationHook, registerRelationshipModel, registerRelationships]);
                            resolve({app, ds});
                        }); 
                    })
                    .catch(err=>{
                        console.error(err);
                        resolve({app, ds});
                    });     
                }else {
                    resolve({app, ds});
                }
            });            
        });
    }

    function cacheMetaData(app,ds){
        return new Promise((resolve, reject)=>{
            var cacheMetaData = require(__dirname + '/../' + "script/CacheMetaData.js");
            cacheMetaData(app, ds).then(function(){                                
                console.log("*** Cache reloaded ***");
                resolve({app, ds});                                
            });
        });
    }
}
