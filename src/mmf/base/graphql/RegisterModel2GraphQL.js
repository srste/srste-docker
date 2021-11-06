'use strict';

const fs = require('fs');
const graphql = require('graphql-server-express');
const bodyParser = require('body-parser');
const { getSchema } = require('./schema/index');
const { printSchema } = require('graphql/utilities');
const resolversFn = require('./graphql-upload/resolvers');
const typeDefs = require('./graphql-upload/types');
const { ApolloServer } = require('apollo-server-express');
const { graphqlUploadExpress } = require('graphql-upload');
const { flushCache } = require('./types/type.js');

const {
    makeExecutableSchema,
    addMockFunctionsToSchema,
    mergeSchemas,
  } = require('graphql-tools');

module.exports = function (app) {

    let options = {
        graphiqlPath: '/graphiql',
        path: '/graphql',
        "modelMutationGroups": true,
        "modelQueryGroups": true
    };

    flushCache();
    
    let ds = app.datasources['mmf'];     
    
    let modelsArry = [];
    let modelNames = Object.keys(ds.models);
    modelNames.forEach(function (modelName) {
        let modelInstance = ds.models[modelName];             
        //todo - need to make the modelObj immutable and expose only the crud operations.

        if(!modelName.startsWith("AnonymousModel_") && modelName != "Application" && modelName != "Change" && modelName != "Scope" && 
            modelName != "Checkpoint" && modelName != "Email" && modelName != "KeyValueModel" && modelName != "Model" && modelName != "PersistedModel") {
            modelsArry.push(modelInstance);
        }                
    });

    
    const docModels = {};
    modelsArry.forEach(function (modelObj) {
        switch (modelObj && modelObj.modelName) {
            case 'MetaDocfragment':
            case 'MetaDocument':
            case 'MetaDocumentMap':
                docModels[modelObj.modelName] = modelObj;
                break;
        }
    });

    const resolvers = resolversFn(app, docModels);

    if (modelsArry.length >= 1) {

        var graphiqlPath = options.graphiqlPath || '/graphiql';
        var path = options.path || '/graphql';
        try {
            var uploadSchema = makeExecutableSchema({ typeDefs, resolvers });
            var allSchemas = mergeSchemas({
                schemas: [
                    getSchema(modelsArry, options),
                    uploadSchema
                ]
            });
        }catch(ex) {
            console.error("Error occurred while getting the db schema " + ex);
        }
        

        app.use(
            graphqlUploadExpress({
                maxFileSize: 2000000000, // 2000 MB
                maxFiles: 20
            })
        );

        // const server = new ApolloServer({schema: allSchemas});
        // server.applyMiddleware({ app, path });

        app.use(path, bodyParser.json(), graphql.graphqlExpress((req) => {
            let ds = app.datasources['mmf'];     

            let modelsArry = [];
            let modelNames = Object.keys(ds.models);
            modelNames.forEach(function (modelName) {
                let modelInstance = ds.models[modelName];             
                //todo - need to make the modelObj immutable and expose only the crud operations.
        
                if(!modelName.startsWith("AnonymousModel_") && modelName != "Application" && modelName != "Change" && modelName != "Scope" && 
                    modelName != "Checkpoint" && modelName != "Email" && modelName != "KeyValueModel" && modelName != "Model" && modelName != "PersistedModel") {
                    modelsArry.push(modelInstance);
                }                
            });
            return {
                schema: mergeSchemas({
                    schemas: [
                        getSchema(modelsArry, options),
                        uploadSchema
                    ]
                }),
                context: {
                    app,
                    req
                }
            };
        }));

        app.use(graphiqlPath, graphql.graphiqlExpress({
            endpointURL: path
        }));
    }
};
