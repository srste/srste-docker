module.exports = function (app, {scope, name, mode}, {request, response}) {
    return new Promise((resolve, reject) => {
        var output = "var actions = {";
        var widgetActionModel;

        let ds = app.datasources['mmf']; 
        let models = ds.models;
        let modelNames = Object.keys(models);
        
        modelNames.forEach(function (modelName) {     
            if(modelName == "MetaWidgetAction") {
                widgetActionModel = models[modelName];
            }                    
        });       

        if(widgetActionModel) {
            widgetActionModel.find({
                'where': { 'or': [{ 'Widget': name, 'Active': true },
                                    { 'Widget': '', 'Active': true, 'Trigger': 'Always' },
                                    {'Trigger': 'System', 'Active': true}]} })                                    
            .then(function (instances) {
                  if (instances && instances.length > 0) {
                    instances.map((instance, indx) => {
                      let delimiter = (indx>0)?',': '';
                      let actionName = instance["Name"];
                      let actionDefinition = instance["Definition"];
                      let actionTriggerType = instance["Trigger"];
                      output = output + delimiter + `\n'${actionName}__${actionTriggerType}': (async function(_$page, _$live, _$notifier, $ctx) {\n
                              var $page = $ctx.cloneDeep? $ctx.cloneDeep(_$page): {..._$page};
                              if(!$page || Object.keys($page).length == 0) return;
                              var widgetsMap = $page["widgets"];\n                                   
                              var prevWidgetsMap = null;
                              var $pageUpdates = $page["pageUpdates"];\n
                              var $live = _$live;\n
                              var $liveFieldName = "";\n
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
                              
                              if($live && $live.FieldName && $live.FieldName.indexOf("@@[") > -1) {
                                $liveFieldName = $live.FieldName.split("@@[")[1];
                                $liveFieldName = $liveFieldName.substr(0, $liveFieldName.length - 1);
                              }

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
                              var $fields = {};
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
                                    if(fieldNameProp && fieldNameProp.indexOf("@@[") > -1) {
                                        let fieldNameValue  = fieldNameProp.split("@@[")[1];
                                        fieldNameValue = fieldNameValue.substr(0, fieldNameValue.length - 1);
                                        if(fieldNameValue && fieldNameValue.length > 0) {
                                            $fields[fieldNameValue] = {...widgetProperties.props, id: widgetProperties.id};   
                                            if(prevWidgetsMap && prevWidgetsMap[widgetId] && prevWidgetsMap[widgetId].props) {
                                                $fields[fieldNameValue].past = prevWidgetsMap[widgetId].props;
                                            }
                                        }

                                    }                                    
                                }                                
                              });

                              var $origin = null;
                              if($ctx.bubbledsource) {
                                $origin = {
                                    Name: $ctx.bubbledsource.props["Name"]? $ctx.bubbledsource.props["Name"]: $ctx.bubbledsource.id,
                                    Widget: $ctx.bubbledsource,
                                    Props: $ctx.bubbledsource.props,
                                    Page: $ctx.bubbledpage
                                }
                              }
                              try {\n
                                $live = await (${actionDefinition})();\n
                              }catch(err) {

                              }

                              return $live;\n
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