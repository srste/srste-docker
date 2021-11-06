module.exports = function (app, {scope, name, mode}, {request, response}) {
    return new Promise((resolve, reject) => {
        var output = "var actions = {";
        var pageActionModel;
        let ds = app.datasources['mmf']; 
        let models = ds.models;
        let modelNames = Object.keys(models);
        
        modelNames.forEach(function (modelName) {    
            if(modelName == "MetaSlideAction") {
                pageActionModel = models[modelName];
            }                
        });        

        if(pageActionModel) {
            pageActionModel.find({
                'where': { 'Slide': name, 'Active': true } })
            .then(function (instances) {
                  if (instances && instances.length > 0) {
                    instances.map((instance, indx) => {
                      let delimiter = (indx>0)?',': '';
                      let actionName = instance["Name"];
                      let actionDefinition = instance["Definition"];                      
                      output = output + delimiter + `\n'${actionName}': (async function(_$page, _$notifier, $ctx) {\n
                              var $page = $ctx.cloneDeep? $ctx.cloneDeep(_$page): {..._$page};
                              var widgetsMap = $page["widgets"];\n     
                              var prevWidgetsMap = null;
                              var $pageUpdates = $page["pageUpdates"];\n                                                            
                              var $pageData = {};
                              $pageData["id"] = $page["uid"];
                              $pageData["name"] = $page["name"];
                              $pageData["scope"] = $page["scope"];
                              $pageData["path"] = $page["path"];
                              $pageData["pageType"] = $page["pageType"];
                              $pageData["pagesuffix"] = $page["pagesuffix"];
                              $pageData["model"] = $page["model"];
                              $pageData["modelscope"] = $page["modelscope"];
                              $pageData["recordid"] = $page["pageParams"]? $page["pageParams"].recordid: "";
                              $pageData["pageParams"] = $page["pageParams"];
                                                          
                              var prevPageData = $ctx.prevpagedata? ($ctx.cloneDeep?$ctx.cloneDeep($ctx.prevpagedata): $ctx.prevpagedata): null;  
                              if(prevPageData) {
                                $pageData["past"] = {};
                                prevWidgetsMap = prevPageData["widgets"];\n                                                            
                                $pageData["past"]["id"] = prevPageData["uid"];
                                $pageData["past"]["name"] = prevPageData["name"];
                                $pageData["past"]["scope"] = prevPageData["scope"];
                                $pageData["past"]["path"] = prevPageData["path"];
                                $pageData["past"]["pageType"] = prevPageData["pageType"];
                                $pageData["past"]["model"] = prevPageData["model"];
                                $pageData["past"]["modelscope"] = prevPageData["modelscope"];
                                $pageData["past"]["recordid"] =  prevPageData["pageParams"]? prevPageData["pageParams"].recordid: "";
                                $pageData["past"]["pageParams"] =  prevPageData["pageParams"];
                              }

                              var $notifier = _$notifier;\n  
                              var $pageParams = $pageData["pageParams"];                                                         
                              var $widgets = {};                                    
                              
                              widgetsMap && Object.keys(widgetsMap).map((widgetId) => {   
                                let widgetProperties = widgetsMap[widgetId];
                                if(widgetProperties && widgetProperties.props) {
                                    let fieldNameProp = widgetProperties.props["FieldName"];
                                    let widgetName = widgetProperties.props["Name"] || widgetId;
                                    $widgets[widgetName] = widgetProperties;
                                    if(prevWidgetsMap && prevWidgetsMap[widgetId]) {
                                        $widgets[widgetName].past = prevWidgetsMap[widgetId];
                                    }                                                                    
                                }                                
                              });
                                                            
                              try {
                                $widgets = await (${actionDefinition})();\n
                              }catch(err) {}
                              return $widgets;\n
                          })\n`;
                    })
                    output = output + " }\n";
                    output = output + "export default actions;\n";
                    response.send(output);
                    resolve();
                }else{
                    response.send("");
                    resolve();
                }
            })
            .catch(function (err) {
                console.log('Error while loading the component definition ' + err);
                response.send("");
                resolve()
            });
        }
    });
}