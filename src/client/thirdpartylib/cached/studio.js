export default {
    "mmf.getScopes%7B%7Ddata.MetaScope.MetaScopeFind": {
        "workflow": {
            "uid": "2087cc00-1403-11eb-9f23-e138d7998ba3",
            "Name": "workflow",
            "Code": "workflow",
            "Description": "WorkFlow",
            "IconName": "archive/32",
            "Category": "Platform"
        },
        "crm": {
            "uid": "21497170-6f20-11eb-a88e-337264a1ff65",
            "Name": "CRM",
            "Code": "crm",
            "Description": "Customer Relationship Management",
            "IconName": "awake/16",
            "Category": "CRM"
        },
        "workspace": {
            "uid": "42ab0370-1ec0-11eb-a30a-a5c828913b33",
            "Name": "Workspace",
            "Code": "workspace",
            "Description": "Workspace",
            "IconName": "bookmark/32",
            "Category": "Platform"
        },
        "studio": {
            "uid": "484db550-5ee7-11ea-b33b-d9b555e03e5d",
            "Name": "Studio",
            "Code": "studio",
            "Description": "IDE for component creation and more...",
            "IconName": "apps/16",
            "Category": "Platform"
        },
        "pos": {
            "uid": "52de9020-c54e-11ea-8dc8-ddf839cbd7bf",
            "Name": "POS",
            "Code": "pos",
            "Description": "Point of Sale",
            "IconName": "restaurant/32",
            "Category": "Sales"
        },
        "accounting": {
            "uid": "562f7740-6f20-11eb-a88e-337264a1ff65",
            "Name": "Accounting",
            "Code": "accounting",
            "Description": "Accounting Management",
            "IconName": "apps/16",
            "Category": "CRM"
        },
        "mmf": {
            "uid": "59e41e80-5ee7-11ea-927c-1ffa9de1432d",
            "Name": "mmf",
            "Code": "mmf",
            "Description": "Meta model framework",
            "IconName": "awake/16",
            "Category": "Platform"
        },
        "demopages": {
            "uid": "5bdc3f50-a493-11ea-8d9a-9d04d4bb82b4",
            "Name": "DemoPages",
            "Code": "demopages",
            "Description": "Demo of different page configurations",
            "IconName": "restaurant/32",
            "Category": "Demos"
        },
        "srste": {
            "uid": "5f906be0-2b15-11eb-a896-13717cc4a3bf",
            "Name": "srste",
            "Code": "srste",
            "Description": "srste website",
            "IconName": "calculator/32",
            "Category": "Website"
        },
        "pharma": {
            "uid": "70395d40-6cff-11eb-8caa-cb8ef987858d",
            "Name": "Pharma",
            "Code": "pharma",
            "Description": "Pharma",
            "IconName": "calculator/32",
            "Category": "Healthcare"
        },
        "designer": {
            "uid": "8fe03490-638f-11ea-a478-0b6ea760b834",
            "Name": "Designer",
            "Code": "designer",
            "Description": "Srste Designer",
            "IconName": "awake/16",
            "Category": "Platform"
        },
        "demo2": {
            "uid": "979b4e10-fc12-11ea-8345-5929ec36a57e",
            "Name": "Demo2",
            "Code": "demo2",
            "Description": "demo2",
            "IconName": "bookmark/32",
            "Category": "Demos"
        },
        "agilecore": {
            "uid": "a4b383e0-a4b7-11ea-9201-51ea2d5a3fdc",
            "Name": "AgileCore",
            "Code": "agilecore",
            "Description": "Agile Core Application",
            "IconName": "apps/16",
            "Category": "Agile"
        },
        "integrator": {
            "uid": "c4dd6570-9a5a-11eb-88f1-119921dbf335",
            "Name": "Integrator",
            "Code": "integrator",
            "Description": "Data Integration Framework",
            "IconName": "calculator/32",
            "Category": "DataAnalytics"
        },
        "slimfit": {
            "uid": "d971b330-e69e-11ea-a1f7-799bcf5ac8db",
            "Name": "Slim Fit",
            "Code": "slimfit",
            "Description": "Slim Fit Network",
            "IconName": "calculator/32",
            "Category": "HealthFitness"
        },
        "asset": {
            "uid": "efb10140-6f25-11eb-a88e-337264a1ff65",
            "Name": "Assets",
            "Code": "asset",
            "Description": "Asset Management",
            "IconName": "apps/16",
            "Category": "CRM"
        },
        "appointment": {
            "uid": "ffc13210-bf7d-11ea-b6f2-13a090ae60ee",
            "Name": "appointment",
            "Code": "appointment",
            "Description": "Appointments",
            "IconName": "archive/32",
            "Category": "Healthcare"
        }
    },
    "MetaSlide%7B%22where%22:%7B%22uid%22:%22425479b0-5d63-11eb-b0ac-e32bd614ab39%22%7D%7Duid,Name,Scope": [
        {
            "uid": "425479b0-5d63-11eb-b0ac-e32bd614ab39",
            "Name": "ModelList",
            "Scope": "studio"
        }
    ],
    "MetaBundleMap%7B%22where%22:%7B%22or%22:%5B%7B%22and%22:%5B%7B%22Application%22:%22studio%22%7D,%7B%22Page%22:%22%22%7D%5D%7D,%7B%22and%22:%5B%7B%22Application%22:%22studio%22%7D,%7B%22Page%22:%22425479b0-5d63-11eb-b0ac-e32bd614ab39%22%7D%5D%7D%5D%7D%7Duid,Type,Name,Resource": [],
    "mmf.getSlideDetailsById%7B%22uid%22:%22425479b0-5d63-11eb-b0ac-e32bd614ab39%22%7Ddata.slide": {
        "uid": "425479b0-5d63-11eb-b0ac-e32bd614ab39",
        "Name": "ModelList",
        "Scope": "studio",
        "Type": "FreeForm",
        "Path": "/list/:params",
        "Styles": ".topPreviewContainer {\n    height: fit-content !important;\n}",
        "props": {
            "22bb7ac0-8f5b-11eb-b2b1-67a4b461c2ae": {
                "uid": "22bb7ac0-8f5b-11eb-b2b1-67a4b461c2ae",
                "Name": "title",
                "Value": ""
            },
            "4334c790-5d63-11eb-b0ac-e32bd614ab39": {
                "uid": "4334c790-5d63-11eb-b0ac-e32bd614ab39",
                "Name": "table",
                "Value": ""
            },
            "4355e420-5d63-11eb-b0ac-e32bd614ab39": {
                "uid": "4355e420-5d63-11eb-b0ac-e32bd614ab39",
                "Name": "filter",
                "Value": ""
            },
            "4356ce80-5d63-11eb-b0ac-e32bd614ab39": {
                "uid": "4356ce80-5d63-11eb-b0ac-e32bd614ab39",
                "Name": "fields",
                "Value": ""
            },
            "e485ce30-6e77-11eb-8f90-035ec4313fe9": {
                "uid": "e485ce30-6e77-11eb-8f90-035ec4313fe9",
                "Name": "view",
                "Value": ""
            }
        },
        "slots": {
            "b671aa20-5d63-11eb-b0ac-e32bd614ab39": {
                "uid": "b671aa20-5d63-11eb-b0ac-e32bd614ab39",
                "xposition": 0,
                "yposition": 0,
                "width": 96,
                "height": 80,
                "minwidth": 0,
                "minheight": 0,
                "maxwidth": 96,
                "maxheight": 80,
                "resize": null,
                "move": null,
                "Layout": "default",
                "widget": {
                    "uid": "b6f1fdb0-5d63-11eb-b0ac-e32bd614ab39",
                    "component": {
                        "uid": "0a678560-477e-11eb-b1fb-e340ce98f98d",
                        "Name": "SrsGrid",
                        "Scope": "studio",
                        "Type": "React",
                        "WebComponent": null,
                        "Version": "1.0.0",
                        "Props": {
                            "ActionNames": null,
                            "Filter": null,
                            "Rows": "{}",
                            "Name": "",
                            "Columns": null,
                            "TableName": null,
                            "ColumnFilters": null,
                            "Fields": null,
                            "HideRowClickAction": null,
                            "GroupFields": null,
                            "ShowTitle": "",
                            "Title": "",
                            "EnableRowSelect": null,
                            "View": null
                        }
                    },
                    "widgetproperties": {
                        "ShowTitle": {
                            "uid": "0ce56c10-8f5b-11eb-b2b1-67a4b461c2ae",
                            "name": "ShowTitle",
                            "value": "true"
                        },
                        "Title": {
                            "uid": "0ce5ba30-8f5b-11eb-b2b1-67a4b461c2ae",
                            "name": "Title",
                            "value": ""
                        },
                        "__Pageparam__Title": {
                            "uid": "1aa7e9e0-8f5b-11eb-b2b1-67a4b461c2ae",
                            "name": "__Pageparam__Title",
                            "value": "title"
                        },
                        "__Pageparam__TableName": {
                            "uid": "1d21b010-6e78-11eb-8f90-035ec4313fe9",
                            "name": "__Pageparam__TableName",
                            "value": "table"
                        },
                        "__Pageparam__View": {
                            "uid": "25edbb80-6e78-11eb-8f90-035ec4313fe9",
                            "name": "__Pageparam__View",
                            "value": "view"
                        },
                        "__Pageparam__Filter": {
                            "uid": "286dd6b0-6e78-11eb-8f90-035ec4313fe9",
                            "name": "__Pageparam__Filter",
                            "value": "filter"
                        },
                        "Component": {
                            "uid": "c7f54ea0-5d63-11eb-b0ac-e32bd614ab39",
                            "name": "Component",
                            "value": "0a678560-477e-11eb-b1fb-e340ce98f98d"
                        },
                        "Slot": {
                            "uid": "c7f834d0-5d63-11eb-b0ac-e32bd614ab39",
                            "name": "Slot",
                            "value": "b671aa20-5d63-11eb-b0ac-e32bd614ab39"
                        },
                        "Rows": {
                            "uid": "df837050-5de1-11eb-b0ac-e32bd614ab39",
                            "name": "Rows",
                            "value": "{}"
                        },
                        "Name": {
                            "uid": "df8433a0-5de1-11eb-b0ac-e32bd614ab39",
                            "name": "Name",
                            "value": "List"
                        },
                        "TriggerActionOnChange": {
                            "uid": "e0f772b0-5de1-11eb-b0ac-e32bd614ab39",
                            "name": "TriggerActionOnChange",
                            "value": "true"
                        },
                        "ActionNames": {
                            "uid": "f0e6bb90-5de1-11eb-b0ac-e32bd614ab39",
                            "name": "ActionNames",
                            "value": "[{\"name\":\"New\",\"value\":\"\"}]"
                        },
                        "EnableRowSelect": {
                            "uid": "f2e598d0-5de1-11eb-b0ac-e32bd614ab39",
                            "name": "EnableRowSelect",
                            "value": "true"
                        }
                    },
                    "widgetactions": {
                        "onActionPerformed@@ModelList_studio": {
                            "uid": "e709b5b0-5e2b-11eb-b0ac-e32bd614ab39",
                            "Name": "onActionPerformed@@ModelList_studio",
                            "Scope": "studio",
                            "Definition": "(function() {\n\tlet pageState = $notifier.getState();\n\tlet pastClickTS = $widgets.List && $widgets.List.past && $widgets.List.past.props && $widgets.List.past.props.ActionClicked && $widgets.List.past.props.ActionClicked.clickts?$widgets.List.past.props.ActionClicked.clickts: 0; \n\tlet currentClickTS = $live.ActionClicked && $live.ActionClicked.clickts? $live.ActionClicked.clickts: 0;\n    let formUrl = \"/form/\";\n\tif(pastClickTS != currentClickTS && currentClickTS > 0) {\n\t\tlet actionName = $live.ActionClicked.name;\n\t\tlet actionPayload = $live.ActionClicked.actionPayload;\n        let tableName = actionPayload && actionPayload.row && actionPayload.row.tableName? actionPayload.row.tableName: (pageState.table?pageState.table: $live.TableName);\n        tableName = tableName.endsWith(\"_mmf\")? tableName.split(\"_mmf\")[0]: tableName;\n        let view = actionPayload && actionPayload.row && actionPayload.row.view? actionPayload.row.view: (pageState.view? pageState.view: $live.View);\n\t\tswitch(actionName) {\n\t\t\tcase \"New\": \t\t\t\t\t\t\t\t\n\t\t\t\tif(pageState.parentstate) {\t\t\t\t\n\t\t\t\t\tpageState.parentstate.data = pageState.parentstate.data || {};\n\t\t\t\t\tpageState.parentstate.data.mode = \"form\";\n\t\t\t\t\tpageState.parentstate.data.id = \"\";\n                    if(actionPayload && actionPayload.row && actionPayload.row.tableName) {\n                        pageState.parentstate.data.table = actionPayload.row.tableName;\n                    }                    \n                    if(actionPayload && actionPayload.row && actionPayload.row.view) {\n                        pageState.parentstate.data.view = actionPayload.row.view;\n                    }\n                    $notifier.setState(pageState);\n\t\t\t\t}else {                                        \n                    if($live.TableName) {\n                        navigateTo(\"/form/table/\" + $live.TableName + \"/view/\" + $live.View);\n                    }                 \n\t\t\t\t}\n\t\t\t\tbreak;\n\t\t\tcase \"open_record\":\t\t\t\t\n\t\t\t\tif(pageState.parentstate) {\n\t\t\t\t\tpageState.parentstate.data = pageState.parentstate.data || {};\n\t\t\t\t\tpageState.parentstate.data.mode = \"form\";\n\t\t\t\t\tpageState.parentstate.data.id = actionPayload && actionPayload.row && actionPayload.row.uid? actionPayload.row.uid: \"\";\n                    if(actionPayload && actionPayload.row && actionPayload.row.tableName) {\n                        pageState.parentstate.data.table = actionPayload.row.tableName;\n                    }                    \n                    if(actionPayload && actionPayload.row && actionPayload.row.view) {\n                        pageState.parentstate.data.view = actionPayload.row.view;\n                    }\n                    $notifier.setState(pageState);\n\t\t\t\t}else {\n                    let rowId = actionPayload && actionPayload.row && actionPayload.row.uid? actionPayload.row.uid: \"\";\n                    formUrl = formUrl + \"table/\" + tableName + \"/id/\" + rowId;\t\t\t\t\n                    if(view) {\n                        formUrl = formUrl + \"/view/\" + view;\n                    }\n                    navigateTo(formUrl);\n                }\t\t\t\t\n\t\t\t\tbreak;\n            default: \n                if(pageState.parentstate) {\t\t\t\t\n\t\t\t\t\tpageState.parentstate.action = pageState.parentstate.action || {};\n\t\t\t\t\tpageState.parentstate.action.name = actionName;\n                    pageState.parentstate.action.payload = actionPayload;\t\t\t\t\t\n\t\t\t\t}else {\n\t\t\t\t\tpageState.action = pageState.action || {};\n\t\t\t\t\tpageState.action.name = actionName;\n\t\t\t\t\tpageState.action.payload = actionPayload;\n\t\t\t\t}\n                $notifier.setState(pageState);\n                break;\n\t\t}\t\t\t\t\t\t\n\t}\n    return $live;\n})",
                            "Trigger": "onChange",
                            "Active": true,
                            "Order": 1,
                            "Type": "Current",
                            "Target": null
                        }
                    }
                }
            }
        }
    },
    "mmf.getSlidePropsById%7B%22uid%22:%22425479b0-5d63-11eb-b0ac-e32bd614ab39%22%7Ddata.slide": {
        "uid": "425479b0-5d63-11eb-b0ac-e32bd614ab39",
        "Name": "ModelList",
        "Scope": "studio",
        "Type": "FreeForm",
        "Path": "/list/:params",
        "props": {
            "title": "",
            "table": "",
            "filter": "",
            "fields": "",
            "view": ""
        }
    },
    "mmf.getSlideProps%7B%22pageId%22:%22425479b0-5d63-11eb-b0ac-e32bd614ab39%22%7Ddata.MetaSlideProps.MetaSlidePropsFind": {
        "title": "",
        "table": "",
        "filter": "",
        "fields": "",
        "view": ""
    },
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22SrsteeUser%22,%22View%22:%22Default%22,%22Scope%22:%22mmf%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "8b49ba40-7a96-11eb-9e38-d5c898336ee7",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"FirstName\":{\"code\":\"FirstName\",\"label\":\"FirstName\",\"type\":\"string\",\"name\":\"FirstName\"},\"LastName\":{\"code\":\"LastName\",\"label\":\"LastName\",\"type\":\"string\",\"name\":\"LastName\"},\"Email\":{\"code\":\"Email\",\"label\":\"Email\",\"type\":\"string\",\"name\":\"Email\"},\"LastVisitedScope\":{\"code\":\"LastVisitedScope\",\"label\":\"LastVisitedScope\",\"type\":\"string\",\"name\":\"LastVisitedScope\"},\"Password\":{\"code\":\"Password\",\"label\":\"Password\",\"type\":\"string\",\"name\":\"Password\"},\"Active\":{\"code\":\"Active\",\"label\":\"Active\",\"type\":\"boolean\",\"name\":\"Active\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"FirstName\":{\"code\":\"FirstName\",\"label\":\"FirstName\",\"type\":\"string\",\"name\":\"FirstName\"},\"LastName\":{\"code\":\"LastName\",\"label\":\"LastName\",\"type\":\"string\",\"name\":\"LastName\"},\"Active\":{\"code\":\"Active\",\"label\":\"Active\",\"type\":\"boolean\",\"name\":\"Active\"},\"Email\":{\"code\":\"Email\",\"label\":\"Email\",\"type\":\"string\",\"name\":\"Email\"},\"uid\":{\"type\":\"string\"}}}"
        }
    ],
    "mmf.getSlidesWithPath%7B%22basePath%22:%22/list%22%7Dundefined": {
        "425479b0-5d63-11eb-b0ac-e32bd614ab39": {
            "pageId": "425479b0-5d63-11eb-b0ac-e32bd614ab39",
            "Path": "/list/:params",
            "Type": "FreeForm",
            "Styles": ".topPreviewContainer {\n    height: fit-content !important;\n}",
            "props": {
                "title": "",
                "table": "",
                "filter": "",
                "fields": "",
                "view": ""
            }
        }
    },
    "mmf.getMatchingRoutes%7B%22PATH%22:%22/page%22%7Dundefined": [
        {
            "node": {
                "uid": "bfe6cfe0-d32b-11e9-a8bc-a10e1974cbad",
                "Name": "PageRenderer",
                "Path": "/page/:pageId/:pageParams",
                "Scope": "studio",
                "HTML": "<!-- URL = http://localhost:8080/page/12334/modelName/Student/recordId=123232 -->\n<!-- URL = http://localhost:8080/page/<slide-id>/<record-id>>-->\n\n<link rel=\"stylesheet\" href=\"/thirdpartylib/carbon-components/styles.css\"/>\n<style>\n    .manialevel1 {\n        text-decoration: none;\n        display: block;\n        width: 100%;\n        height: 100vh;\n        overflow: hidden;\n    }\n    .maniacontent{\n        width:100%;\n        overflow-y: scroll;\n        overflow-x: hidden;\n        height: 95vh;\n        min-height: 95vh;\n    }\n    \n    .maniacontentNoHeader{\n        width:100%;\n        overflow-y: scroll;\n        overflow-x: hidden;\n        height: 100vh;\n        min-height: 100vh;\n    }\n\n   .manialevel1>li {\n        display:inline-block;\n        float:left;\n    }\n    .maniaheader {\n        height: 3rem;\n        width: 100%;\n    }    \n    .pageloader {\n        position: fixed !important;\n        top: 40%;\n        left:46%;\n    }\n\n    .hide {\n        display: none;\n    }\n\n    .MuiDialog-scrollPaper {\n        position: fixed;\n        z-index: 1000;\n        background-color: white;\n        border: 1px solid #c6c0c0;\n        border-radius: 5px;\n        padding: 10px;\n        top: 40%;\n        left: 40%;\n        transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n    }\n\n    .MuiDialogContent-root {\n        padding: 20px 0px;\n    }\n\n    .MuiButtonBase-root {\n        margin: 5px;\n    }\n\n    .MuiBackdrop-root {\n        opacity: 0.1 !important;\n        transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n        top: 0;\n        left: 0;\n        height: 100%;\n        width: 100%;\n        background-color: #1a1129;\n    }\n\n</style>\n<ul class=\"manialevel1\">\n    <li class=\"maniaheader\"></li>    \n    <li class=\"maniacontent\">\n        <page-renderer pageid=\"${pageId}\" params=\"${pageParams}\" style=\"height: inherit;\"></page-renderer>\n    </li>\n    <div data-inline-loading class=\"bx--inline-loading pageloader\" role=\"alert\" aria-live=\"assertive\">\n        <div class=\"bx--inline-loading__animation\">\n            <div data-inline-loading-spinner class=\"bx--loading bx--loading--small\">\n            <svg class=\"bx--loading__svg\" viewBox=\"-75 -75 150 150\">\n                <circle class=\"bx--loading__background\" cx=\"0\" cy=\"0\" r=\"26.8125\" />\n                <circle class=\"bx--loading__stroke\" cx=\"0\" cy=\"0\" r=\"26.8125\"/>\n            </svg>\n            </div>\n            <svg focusable=\"false\" preserveAspectRatio=\"xMidYMid meet\" style=\"will-change: transform;\" xmlns=\"http://www.w3.org/2000/svg\" class=\"bx--inline-loading__checkmark-container\" hidden=\"\" data-inline-loading-finished=\"\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" aria-hidden=\"true\"><path d=\"M8,1C4.1,1,1,4.1,1,8c0,3.9,3.1,7,7,7s7-3.1,7-7C15,4.1,11.9,1,8,1z M7,11L4.3,8.3l0.9-0.8L7,9.3l4-3.9l0.9,0.8L7,11z\"></path><path d=\"M7,11L4.3,8.3l0.9-0.8L7,9.3l4-3.9l0.9,0.8L7,11z\" data-icon-path=\"inner-path\" opacity=\"0\"></path></svg>\n        </div>\n        <p data-inline-loading-text-active class=\"bx--inline-loading__text\">Loading data...</p>\n        <p data-inline-loading-text-finished hidden class=\"bx--inline-loading__text\">Data loaded.</p>\n    </div>\n</ul>\n\n<script>        \n    function getUrlQueryParams() {\n        let urlParams = {};\n        let match,\n            pl = /\\+/g,  // Regex for replacing addition symbol with a space\n            search = /([^&=]+)=?([^&]*)/g,\n            decode = function (s) {\n                return decodeURIComponent(s.replace(pl, \" \"));\n            },\n            query = window.location.search.substring(1);\n\n        while (match = search.exec(query)) {\n            if (decode(match[1]) in urlParams) {\n                if (!Array.isArray(urlParams[decode(match[1])])) {\n                    urlParams[decode(match[1])] = [urlParams[decode(match[1])]];\n                }\n                urlParams[decode(match[1])].push(decode(match[2]));\n            } else {\n                urlParams[decode(match[1])] = decode(match[2]);\n            }\n        }\n        return urlParams;\n    }\n    \n    if(getUrlQueryParams().noheader == true || getUrlQueryParams().noheader == \"true\") {\n        $(\".maniaheader\").remove();\n        $(\".maniacontent\").addClass(\"maniacontentNoHeader\").removeClass(\"maniacontent\");\n    }else {\n        $(\".maniaheader\").append(\"<srstee-header preview={true}></srstee-header>\");\n    }\n\n    customElements.whenDefined(\"page-renderer\").then(()=> {\n        $(\".pageloader\").addClass(\"hide\");\n    });\n</script>",
                "requiredComponents": {
                    "edges": [
                        {
                            "node": {
                                "requiredComponent": {
                                    "uid": "2c264770-076c-11ea-a5f7-ad7e201d6360",
                                    "Name": "PreviewComponent",
                                    "Scope": "studio",
                                    "HTML": "<!-- add html code to be injected when rendering the component -->",
                                    "Type": "React",
                                    "States": {
                                        "edges": [
                                            {
                                                "node": {
                                                    "KeyName": "ide_reload",
                                                    "AccessPath": "ide_reload",
                                                    "DefaultValue": "{\"ide_reload\": false}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "cancelpreview",
                                                    "AccessPath": "cancelpreview",
                                                    "DefaultValue": "{\"cancelpreview\": \"false\"}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "showpreview",
                                                    "AccessPath": "showpreview",
                                                    "DefaultValue": "{\"showpreview\": \"false\"}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "showpreview_target",
                                                    "AccessPath": "showpreview_target",
                                                    "DefaultValue": "{\"showpreview_target\": \"\"}"
                                                }
                                            }
                                        ]
                                    },
                                    "Actions": {
                                        "edges": []
                                    }
                                }
                            }
                        },
                        {
                            "node": {
                                "requiredComponent": {
                                    "uid": "23302cd0-84a9-11e9-ad68-219145a9bbff",
                                    "Name": "PageDesignerPreview",
                                    "Scope": "studio",
                                    "HTML": "<!-- add html code to be injected when rendering the component -->",
                                    "Type": "React",
                                    "States": {
                                        "edges": [
                                            {
                                                "node": {
                                                    "KeyName": "currentscope",
                                                    "AccessPath": "currentscope",
                                                    "DefaultValue": "{\"currentscope\": \"\"}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "active_widget_id",
                                                    "AccessPath": "active_widget_id",
                                                    "DefaultValue": "{\"active_widget_id\": \"\"}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "pages",
                                                    "AccessPath": "pages",
                                                    "DefaultValue": "{\"pages\": {}}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "headerMenuItems",
                                                    "AccessPath": "header.menuitems",
                                                    "DefaultValue": "{\"header\": {\"menuitems\": {}}}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "scrollfired",
                                                    "AccessPath": "scrollfired",
                                                    "DefaultValue": "{\"scrollfired\": false}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "menuScope",
                                                    "AccessPath": "header.menu.scope",
                                                    "DefaultValue": "{\"header\": {\"menu\": {\"scope\": \"\"}}}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "parentPage",
                                                    "AccessPath": "pages.${pageid}",
                                                    "DefaultValue": "{\"pages\": {\"${pageid}\": {}}}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "active_page_id",
                                                    "AccessPath": "active_page_id",
                                                    "DefaultValue": "{\"active_page_id\":\"\"}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "pagereload",
                                                    "AccessPath": "pagereload.${pageid}",
                                                    "DefaultValue": "{\"pagereload\": {\"${pageid}\": false}}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "is_design_time",
                                                    "AccessPath": "is_design_time",
                                                    "DefaultValue": "{\"is_design_time\": false}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "previewpageid",
                                                    "AccessPath": "previewpageid",
                                                    "DefaultValue": "{\"previewpageid\": \"\"}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "pageData",
                                                    "AccessPath": "pages.${previewpageid}${pagesuffix}",
                                                    "DefaultValue": "{\"pages\": {\"${previewpageid}${pagesuffix}\": {}}}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "pageState",
                                                    "AccessPath": "pagestate.${previewpageid}${pagesuffix}",
                                                    "DefaultValue": "{\"pagestate\": {\"${previewpageid}${pagesuffix}\": {}}}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "pageid",
                                                    "AccessPath": "pageid",
                                                    "DefaultValue": "{\"pageid\": \"\"}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "parentPageState",
                                                    "AccessPath": "pagestate.${pageid}",
                                                    "DefaultValue": "{\"pagestate\": {\"${pageid}\": {}}}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "pagesuffix",
                                                    "AccessPath": "pagesuffix",
                                                    "DefaultValue": "{\"pagesuffix\":  \"\"}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "widgetProps",
                                                    "AccessPath": "pages.${pageid}.widgets.${widgetid}.props",
                                                    "DefaultValue": "{\"pages\": {\"${pageid}\": {\"widgets\": {\"${widgetid}\": {\"props\": {}}}}}}"
                                                }
                                            }
                                        ]
                                    },
                                    "Actions": {
                                        "edges": []
                                    }
                                }
                            }
                        },
                        {
                            "node": {
                                "requiredComponent": {
                                    "uid": "d2202500-cc76-11e9-8bcf-1fc7a6960356",
                                    "Name": "SrsTextField",
                                    "Scope": "studio",
                                    "HTML": "<!-- add html code to be injected when rendering the component -->",
                                    "Type": "React",
                                    "States": {
                                        "edges": [
                                            {
                                                "node": {
                                                    "KeyName": "widgetProps",
                                                    "AccessPath": "pages.${pageid}${pagesuffix}.widgets.${widgetid}.props",
                                                    "DefaultValue": "{\"pages\": {\"${pageid}${pagesuffix}\": {\"widgets\": {\"${widgetid}\": {\"props\": {}}}}}}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "controlProps",
                                                    "AccessPath": "controls.${pageid}${pagesuffix}_${controlid}",
                                                    "DefaultValue": "{\"controls\": {\"${pageid}${pagesuffix}_${controlid}\": {}}}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "controls",
                                                    "AccessPath": "controls",
                                                    "DefaultValue": "{\"controls\": {}}"
                                                }
                                            }
                                        ]
                                    },
                                    "Actions": {
                                        "edges": []
                                    }
                                }
                            }
                        },
                        {
                            "node": {
                                "requiredComponent": {
                                    "uid": "a436f0c0-083e-11ea-a5f7-ad7e201d6360",
                                    "Name": "NotificationBar",
                                    "Scope": "mmf",
                                    "HTML": "<!-- add html code to be injected when rendering the component -->",
                                    "Type": "React",
                                    "States": {
                                        "edges": [
                                            {
                                                "node": {
                                                    "KeyName": "notifications",
                                                    "AccessPath": "notifications",
                                                    "DefaultValue": "{\"notifications\": []}"
                                                }
                                            }
                                        ]
                                    },
                                    "Actions": {
                                        "edges": []
                                    }
                                }
                            }
                        },
                        {
                            "node": {
                                "requiredComponent": {
                                    "uid": "14ba29f0-d32b-11e9-a8bc-a10e1974cbad",
                                    "Name": "PageRenderer",
                                    "Scope": "studio",
                                    "HTML": "<!-- add html code to be injected when rendering the component -->",
                                    "Type": "React",
                                    "States": {
                                        "edges": [
                                            {
                                                "node": {
                                                    "KeyName": "showpreview_target",
                                                    "AccessPath": "showpreview_target",
                                                    "DefaultValue": "{\"showpreview_target\": \"\"}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "showpreview",
                                                    "AccessPath": "showpreview",
                                                    "DefaultValue": "{\"showpreview\": \"\"}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "headerMenuItems",
                                                    "AccessPath": "header.menuitems",
                                                    "DefaultValue": "{\"header\": {\"menuitems\": {}}}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "pageState",
                                                    "AccessPath": "pagestate.${pageid}",
                                                    "DefaultValue": "{\"pagestate\": {\"${pageid}\": {}}}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "cancelpreview",
                                                    "AccessPath": "cancelpreview",
                                                    "DefaultValue": "{\"cancelpreview\": \"false\"}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "pagemodal",
                                                    "AccessPath": "pagemodal",
                                                    "DefaultValue": "{\"pagemodal\": {}}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "sideNavOpen",
                                                    "AccessPath": "sideNavOpen",
                                                    "DefaultValue": "{\"sideNavOpen\": \"open\"}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "notifications",
                                                    "AccessPath": "notifications",
                                                    "DefaultValue": "{\"notifications\": []}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "pages",
                                                    "AccessPath": "pages",
                                                    "DefaultValue": "{\"pages\": {}}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "pageData",
                                                    "AccessPath": "pages.${pageid}",
                                                    "DefaultValue": "{\"pages\": {\"${pageid}\": {}}}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "urlforward",
                                                    "AccessPath": "urlforward",
                                                    "DefaultValue": "{\"urlforward\": []}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "sideNavPinned",
                                                    "AccessPath": "sideNavPinned",
                                                    "DefaultValue": "{\"sideNavPinned\": true}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "urlhistory",
                                                    "AccessPath": "urlhistory",
                                                    "DefaultValue": "{\"urlhistory\": []}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "currentscope",
                                                    "AccessPath": "currentscope",
                                                    "DefaultValue": "{\"currentscope\":  \"\"}"
                                                }
                                            }
                                        ]
                                    },
                                    "Actions": {
                                        "edges": []
                                    }
                                }
                            }
                        },
                        {
                            "node": {
                                "requiredComponent": {
                                    "uid": "9e6b2280-9e7e-11e9-a462-396c9ec97b12",
                                    "Name": "SrsteeHeader",
                                    "Scope": "studio",
                                    "HTML": "<!-- add html code to be injected when rendering the component -->",
                                    "Type": "React",
                                    "States": {
                                        "edges": [
                                            {
                                                "node": {
                                                    "KeyName": "switch_from",
                                                    "AccessPath": "switch_from",
                                                    "DefaultValue": "{\"switch_from\": \"\"}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "showNav",
                                                    "AccessPath": "showNav",
                                                    "DefaultValue": "{\"showNav\":true}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "scopes",
                                                    "AccessPath": "scopes",
                                                    "DefaultValue": "{\"scopes\": {}}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "currentscope",
                                                    "AccessPath": "currentscope",
                                                    "DefaultValue": "{\"currentscope\": \"\"}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "headerMenuItems",
                                                    "AccessPath": "header.menuitems",
                                                    "DefaultValue": "{\"header\": {\"menuitems\": {}}}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "sideNavOpen",
                                                    "AccessPath": "sideNavOpen",
                                                    "DefaultValue": "{\"sideNavOpen\": \"close\"}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "switch_to",
                                                    "AccessPath": "switch_to",
                                                    "DefaultValue": "{\"switch_to\": \"\"}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "loggedIn",
                                                    "AccessPath": "loggedIn",
                                                    "DefaultValue": "{\"loggedIn\":false}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "urlforward",
                                                    "AccessPath": "urlforward",
                                                    "DefaultValue": "{\"urlforward\": []}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "sideNavPinned",
                                                    "AccessPath": "sideNavPinned",
                                                    "DefaultValue": "{\"sideNavPinned\": false}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "urlhistory",
                                                    "AccessPath": "urlhistory",
                                                    "DefaultValue": "{\"urlhistory\": []}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "currentscopeid",
                                                    "AccessPath": "currentscopeid",
                                                    "DefaultValue": "{\"currentscopeid\": \"\"}"
                                                }
                                            }
                                        ]
                                    },
                                    "Actions": {
                                        "edges": []
                                    }
                                }
                            }
                        },
                        {
                            "node": {
                                "requiredComponent": {
                                    "uid": "18288090-8fde-11e9-86b1-9f4523b18524",
                                    "Name": "WidgetContainer",
                                    "Scope": "studio",
                                    "HTML": "<!-- add html code to be injected when rendering the component -->",
                                    "Type": "React",
                                    "States": {
                                        "edges": [
                                            {
                                                "node": {
                                                    "KeyName": "widgets2Delete",
                                                    "AccessPath": "widgets2Delete",
                                                    "DefaultValue": "{\"widgets2Delete\": []}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "active_widget_field_value",
                                                    "AccessPath": "active_widget_field_value",
                                                    "DefaultValue": "{\"active_widget_field_value\": \"\"}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "widgetProps",
                                                    "AccessPath": "pages.${pageid}${pagesuffix}.widgets.${widgetid}.props",
                                                    "DefaultValue": "{\"pages\": {\"${pageid}${pagesuffix}\": {\"widgets\": {\"${widgetid}\": {\"props\": {}}}}}}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "active_widget_id",
                                                    "AccessPath": "active_widget_id",
                                                    "DefaultValue": "{\"active_widget_id\": \"\"}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "is_design_time",
                                                    "AccessPath": "is_design_time",
                                                    "DefaultValue": "{\"is_design_time\": false}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "activePageWidgets",
                                                    "AccessPath": "pages.${active_page_id}.widgets",
                                                    "DefaultValue": "{\"pages\": {\"${active_page_id}\": {\"widgets\": {}}}}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "pages",
                                                    "AccessPath": "pages",
                                                    "DefaultValue": "{\"pages\": {}}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "pageData",
                                                    "AccessPath": "pages.${pageid}${pagesuffix}",
                                                    "DefaultValue": "{\"pages\": {\"${pageid}${pagesuffix}\": {}}}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "currentscope",
                                                    "AccessPath": "currentscope",
                                                    "DefaultValue": "{\"currentscope\": \"\"}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "headerMenuItems",
                                                    "AccessPath": "header.menuitems",
                                                    "DefaultValue": "{\"header\": {\"menuitems\": {}}}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "show_widget_actions",
                                                    "AccessPath": "show_widget_actions",
                                                    "DefaultValue": "{\"show_widget_actions\": false}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "show_widget_props",
                                                    "AccessPath": "show_widget_props",
                                                    "DefaultValue": "{\"show_widget_props\": false}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "currentWidget",
                                                    "AccessPath": "pages.${pageid}${pagesuffix}.widgets.${widgetid}",
                                                    "DefaultValue": "{\"pages\": {\"${pageid}${pagesuffix}\": {\"widgets\": {\"${widgetid}\": {}}}}}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "pageState",
                                                    "AccessPath": "pagestate.${pageid}${pagesuffix}",
                                                    "DefaultValue": "{\"pagestate\": {\"${pageid}${pagesuffix}\": {}}}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "component_id",
                                                    "AccessPath": "component_id",
                                                    "DefaultValue": "{\"component_id\":\"\"}"
                                                }
                                            },
                                            {
                                                "node": {
                                                    "KeyName": "active_page_id",
                                                    "AccessPath": "active_page_id",
                                                    "DefaultValue": "{\"active_page_id\": \"\"}"
                                                }
                                            }
                                        ]
                                    },
                                    "Actions": {
                                        "edges": []
                                    }
                                }
                            }
                        }
                    ]
                }
            }
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22WorkflowVersion%22,%22View%22:%22Default%22,%22Scope%22:%22workflow%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "93515d70-9372-11eb-a4bd-7da498ed85b5",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Version\":{\"code\":\"Version\",\"label\":\"Version\",\"type\":\"string\",\"name\":\"Version\"},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},\"Status\":{\"code\":\"Status\",\"label\":\"Status\",\"type\":\"string\",\"name\":\"Status\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"ActivityInfo\":{\"code\":\"ActivityInfo\",\"label\":\"Activity Info\",\"type\":\"string\",\"name\":\"ActivityInfo\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Version\":{\"code\":\"Version\",\"label\":\"Version\",\"type\":\"string\",\"name\":\"Version\"},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},\"Status\":{\"code\":\"Status\",\"label\":\"Status\",\"type\":\"string\",\"name\":\"Status\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"}}}"
        }
    ],
    "mmf.getSlidesWithPath%7B%22basePath%22:%22/form%22%7Dundefined": {
        "b870b1b0-57c1-11eb-a638-d95bfca5c886": {
            "pageId": "b870b1b0-57c1-11eb-a638-d95bfca5c886",
            "Path": "/form/:params",
            "Type": "FreeForm",
            "Styles": ".topPreviewContainer {\n    height: fit-content !important;\n}",
            "props": {
                "table": "",
                "view": "",
                "id": "",
                "template": "",
                "mode": "",
                "filter": "",
                "default": "",
                "listfields": ""
            }
        }
    },
    "MetaSlide%7B%22where%22:%7B%22uid%22:%22b870b1b0-57c1-11eb-a638-d95bfca5c886%22%7D%7Duid,Name,Scope": [
        {
            "uid": "b870b1b0-57c1-11eb-a638-d95bfca5c886",
            "Name": "ModelForm",
            "Scope": "studio"
        }
    ],
    "MetaBundleMap%7B%22where%22:%7B%22or%22:%5B%7B%22and%22:%5B%7B%22Application%22:%22studio%22%7D,%7B%22Page%22:%22%22%7D%5D%7D,%7B%22and%22:%5B%7B%22Application%22:%22studio%22%7D,%7B%22Page%22:%22b870b1b0-57c1-11eb-a638-d95bfca5c886%22%7D%5D%7D%5D%7D%7Duid,Type,Name,Resource": [],
    "mmf.getSlideDetailsById%7B%22uid%22:%22b870b1b0-57c1-11eb-a638-d95bfca5c886%22%7Ddata.slide": {
        "uid": "b870b1b0-57c1-11eb-a638-d95bfca5c886",
        "Name": "ModelForm",
        "Scope": "studio",
        "Type": "FreeForm",
        "Path": "/form/:params",
        "Styles": "${Styles}",
        "props": {
            "3e563720-57ca-11eb-a638-d95bfca5c886": {
                "uid": "3e563720-57ca-11eb-a638-d95bfca5c886",
                "Name": "table",
                "Value": ""
            },
            "3e568540-57ca-11eb-a638-d95bfca5c886": {
                "uid": "3e568540-57ca-11eb-a638-d95bfca5c886",
                "Name": "view",
                "Value": ""
            },
            "3e56ac50-57ca-11eb-a638-d95bfca5c886": {
                "uid": "3e56ac50-57ca-11eb-a638-d95bfca5c886",
                "Name": "id",
                "Value": ""
            },
            "54b6b070-70c1-11eb-96f2-d9ebe8efa3e2": {
                "uid": "54b6b070-70c1-11eb-96f2-d9ebe8efa3e2",
                "Name": "template",
                "Value": ""
            },
            "785e80d0-669d-11eb-b64c-a5825c8399b4": {
                "uid": "785e80d0-669d-11eb-b64c-a5825c8399b4",
                "Name": "mode",
                "Value": ""
            },
            "785ea7e0-669d-11eb-b64c-a5825c8399b4": {
                "uid": "785ea7e0-669d-11eb-b64c-a5825c8399b4",
                "Name": "filter",
                "Value": ""
            },
            "b1b057d0-8f03-11eb-85b7-a9194201a842": {
                "uid": "b1b057d0-8f03-11eb-85b7-a9194201a842",
                "Name": "default",
                "Value": ""
            },
            "c16241c0-5eac-11eb-9d92-8504f340ace4": {
                "uid": "c16241c0-5eac-11eb-9d92-8504f340ace4",
                "Name": "listfields",
                "Value": ""
            }
        },
        "slots": {
            "cd0e4060-57c1-11eb-a638-d95bfca5c886": {
                "uid": "cd0e4060-57c1-11eb-a638-d95bfca5c886",
                "xposition": 0,
                "yposition": 0,
                "width": 96,
                "height": 79,
                "minwidth": 0,
                "minheight": 0,
                "maxwidth": 96,
                "maxheight": 80,
                "resize": null,
                "move": null,
                "Layout": "default",
                "widget": {
                    "uid": "cd789af0-57c1-11eb-a638-d95bfca5c886",
                    "component": {
                        "uid": "c45bbaf0-41c9-11eb-b886-810e138508df",
                        "Name": "SrsDynamicForm",
                        "Scope": "studio",
                        "Type": "React",
                        "WebComponent": null,
                        "Version": "1.0.0",
                        "Props": {
                            "FormTemplate": null,
                            "InlineStyles": null,
                            "Name": null,
                            "TableName": null,
                            "DefaultData": null,
                            "View": null,
                            "Template": null,
                            "PreventDefaultSave": null,
                            "RecordId": null
                        }
                    },
                    "widgetproperties": {
                        "__Pageparam__Mode": {
                            "uid": "11e294b0-6e6b-11eb-8f90-035ec4313fe9",
                            "name": "__Pageparam__Mode",
                            "value": "mode"
                        },
                        "FormOutput": {
                            "uid": "6f839b60-57c2-11eb-a638-d95bfca5c886",
                            "name": "FormOutput",
                            "value": "{}"
                        },
                        "Name": {
                            "uid": "6fbea890-57c2-11eb-a638-d95bfca5c886",
                            "name": "Name",
                            "value": "Form"
                        },
                        "__Pageparam__Template": {
                            "uid": "714ef0d0-70c1-11eb-96f2-d9ebe8efa3e2",
                            "name": "__Pageparam__Template",
                            "value": "template"
                        },
                        "__Pageparam__DefaultValue": {
                            "uid": "c9a994a0-8f03-11eb-85b7-a9194201a842",
                            "name": "__Pageparam__DefaultValue",
                            "value": "default"
                        },
                        "TriggerActionOnChange": {
                            "uid": "cdcf5170-5e9b-11eb-9d92-8504f340ace4",
                            "name": "TriggerActionOnChange",
                            "value": "true"
                        },
                        "__Pageparam__View": {
                            "uid": "d6032090-6e6a-11eb-8f90-035ec4313fe9",
                            "name": "__Pageparam__View",
                            "value": "view"
                        },
                        "__Pageparam__TableName": {
                            "uid": "e199bdb0-6e6a-11eb-8f90-035ec4313fe9",
                            "name": "__Pageparam__TableName",
                            "value": "table"
                        },
                        "__Pageparam__RecordId": {
                            "uid": "e7ac9c90-6e6a-11eb-8f90-035ec4313fe9",
                            "name": "__Pageparam__RecordId",
                            "value": "id"
                        },
                        "__Pageparam__Filter": {
                            "uid": "fe6c6f00-6e6a-11eb-8f90-035ec4313fe9",
                            "name": "__Pageparam__Filter",
                            "value": "filter"
                        }
                    },
                    "widgetactions": {
                        "navigateTo@@ModelForm_studio": {
                            "uid": "0a2b9620-8f01-11eb-85b7-a9194201a842",
                            "Name": "navigateTo@@ModelForm_studio",
                            "Scope": "studio",
                            "Definition": "(async function() {\n\tlet pastData = $widgets.Form && $widgets.Form.past && $widgets.Form.past.props;\n\tlet lodash = await System.import(\"lodash\");\n\tlet isChange = (pastData.mode != $live.mode || pastData.TableName != $live.TableName || pastData.View != $live.View || !lodash.isEqual(pastData.Filter,$live.Filter) || pastData.RecordId != $live.RecordId);\n\tlet isPageModal = !!$pageData.pagesuffix;\n\tlet tableName = $live.TableName;\n\ttableName = tableName.endsWith(\"_mmf\")?tableName.split(\"_mmf\")[0]: tableName;\n\tif(isChange && !isPageModal && !$live.Template) {\n\t\tlet isNavigate = false;\t\t\n\t\tlet url = $live.mode == \"list\"? \"/list\": \"/form\";\n\n\t\tif(tableName) {\n\t\t\tisNavigate = true;\n\t\t\turl = url + \"/table/\" + tableName;\n\t\t}\n\t\tif($live.View) {\n\t\t\turl = url + \"/view/\" + $live.View;\n\t\t}\n\t\tif($live.RecordId) {\n\t\t\turl = url + \"/id/\" + $live.RecordId;\n\t\t}\n\t\tif($live.Filter) {\n\t\t\turl = url + \"/filter/\" + $live.Filter;\n\t\t}\n\t\tif($live.DefaultValue) {\n\t\t\turl = url + \"/default/\" + encodeURIComponent($live.DefaultValue);\n\t\t}\n\t\tisNavigate && navigateTo(url+\"\");\n\t}\t\n})",
                            "Trigger": "onChange",
                            "Active": true,
                            "Order": 1,
                            "Type": "Current",
                            "Target": null
                        },
                        "handleListActions@@ModelForm_studio": {
                            "uid": "97a91ac0-5eac-11eb-9d92-8504f340ace4",
                            "Name": "handleListActions@@ModelForm_studio",
                            "Scope": "appointment",
                            "Definition": "(async function() {\t\n\t\n})",
                            "Trigger": "onChange",
                            "Active": true,
                            "Order": 1,
                            "Type": "Current",
                            "Target": null
                        },
                        "onPageParamsChange@@ModelForm_studio": {
                            "uid": "a8fdc9e0-6e6c-11eb-8f90-035ec4313fe9",
                            "Name": "onPageParamsChange@@ModelForm_studio",
                            "Scope": "appointment",
                            "Definition": "(async function() {\t\t\t\n\tlet pastProps = $widgets && $widgets.Form && $widgets.Form.past && $widgets.Form.past.props? $widgets.Form.past.props: null;\n\tif(($live && $live.Mode) && (!pastProps || pastProps.Mode != $live.Mode)) {\n\t\t//change the layout in the page state...\n\t\t$live && $live.Mode && $notifier.setState({currentLayout: $live.Mode == \"list\"? \"ListView\": \"default\"});\n\t}else {\n\t\tif(!pastProps || (pastProps.TableName != $live.TableName || pastProps.View != $live.View || pastProps.RecordId != $live.RecordId || pastProps.Mode != $live.Mode)) {\n\t\t\tlet scope = \"\";\t\n\t\t\tlet tableName = $live.TableName;\n\t\t\tlet viewName = $live.View? $live.View: \"Default\";\n\n\t\t\tif(tableName) {\n\t\t\t\tlet tableNameParts = tableName.split(\"_\");\n\t\t\t\ttableName = tableNameParts.splice(0, tableNameParts.length -1).join(\"_\");\n\t\t\t\tscope = tableNameParts.splice(tableNameParts.length -1).join(\"_\");\n\t\t\t\tlet templateId = \"\";\n\t\t\t\tif(tableName && scope) {\n\t\t\t\t\tlet formTemplateData = await $qry.getRecords(\"FormTemplate_studio\", {where: {\"ModelName\": tableName, \"Scope\": scope, \"View\": viewName}}, \n\t\t\t\t\t\t\t[\"uid\", \"Name\", \"Scope\", \"Model\", \"View\", \"ModelName\", \"schema\", \"rawschema\", \"uischema\", \"rawuischema\", \"listschema\", \"default\"]);\n\t\t\t\t\tif(formTemplateData && formTemplateData.length == 1) {\n\t\t\t\t\t\tformTemplateData = formTemplateData[0]\n\t\t\t\t\t\ttemplateId = formTemplateData.uid;\n\t\t\t\t\t\t$live.FormTemplate = templateId;\n\t\t\t\t\t}\t\t\t\t\n\t\t\t\t}\t\t\t\n\t\t\t}\n\t\t}\n\t\treturn $live;\n\t}\n})",
                            "Trigger": "Always",
                            "Active": false,
                            "Order": 1,
                            "Type": "Current",
                            "Target": null
                        },
                        "handleFormActions@@ModelForm_studio": {
                            "uid": "f544a2f0-5e9b-11eb-9d92-8504f340ace4",
                            "Name": "handleFormActions@@ModelForm_studio",
                            "Scope": "studio",
                            "Definition": "(async function() {\t\t\t\n\tlet pastClickTS = $widgets && $widgets.Form && $widgets.Form.past && $widgets.Form.past.props && $widgets.Form.past.props.FormOutput && $widgets.Form.past.props.FormOutput &&\n\t\t\t\t\t\t$widgets.Form.past.props.FormOutput.form_action && $widgets.Form.past.props.FormOutput.form_action.actionPayload && $widgets.Form.past.props.FormOutput.form_action.actionPayload.clickts? $widgets.Form.past.props.FormOutput.form_action.actionPayload.clickts: 0;\n\tlet currentClickTS = $live.FormOutput && $live.FormOutput.form_action && $live.FormOutput.form_action.actionPayload && $live.FormOutput.form_action.actionPayload.clickts? $live.FormOutput.form_action.actionPayload.clickts: 0;\n\n\tlet pastRefClickTS = $widgets && $widgets.Form && $widgets.Form.past && $widgets.Form.past.props && $widgets.Form.past.props.FormOutput &&\n\t\t\t\t\t\t$widgets.Form.past.props.FormOutput.ref_action && $widgets.Form.past.props.FormOutput.ref_action.actionPayload && $widgets.Form.past.props.FormOutput.ref_action.actionPayload.clickts? $widgets.Form.past.props.FormOutput.ref_action.actionPayload.clickts: 0;\n\tlet currentRefClickTS = $live.FormOutput && $live.FormOutput.ref_action && $live.FormOutput.ref_action.actionPayload && $live.FormOutput.ref_action.actionPayload.clickts? $live.FormOutput.ref_action.actionPayload.clickts: 0;\n\n\tlet pastListClickTS = $widgets && $widgets.Form && $widgets.Form.past && $widgets.Form.past.props && $widgets.Form.past.props.FormOutput &&\n\t\t\t\t\t\t$widgets.Form.past.props.FormOutput.list_action && $widgets.Form.past.props.FormOutput.list_action.actionPayload && $widgets.Form.past.props.FormOutput.list_action.actionPayload.clickts? $widgets.Form.past.props.FormOutput.list_action.actionPayload.clickts: 0;\n\tlet currentListClickTS = $live.FormOutput && $live.FormOutput.list_action && $live.FormOutput.list_action.actionPayload && $live.FormOutput.list_action.actionPayload.clickts? $live.FormOutput.list_action.actionPayload.clickts: 0;\n\n\tlet actionClicked = $live.FormOutput && $live.FormOutput.form_action? $live.FormOutput.form_action.actionClicked: \"\";\t\n\tlet preventDefaultSave = $live.FormOutput && $live.FormOutput.form_action? $live.FormOutput.form_action.preventDefaultSave: false;\n    let preventDefaultNew = $live.FormOutput && $live.FormOutput.form_action? $live.FormOutput.form_action.preventDefaultNew: false;\n\tlet preventDefaultShowList = $live.FormOutput && $live.FormOutput.form_action? $live.FormOutput.form_action.preventDefaultShowList: false;\n\tlet refActionClicked = $live.FormOutput && $live.FormOutput.ref_action? $live.FormOutput.ref_action.actionClicked: \"\";\t\n\tlet listActionClicked = $live.FormOutput && $live.FormOutput.list_action && $live.FormOutput.list_action.actionClicked? $live.FormOutput.list_action.actionClicked: \"\";\t\n    let preventDefaultRefAction = $live.FormOutput && $live.FormOutput.ref_action? $live.FormOutput.ref_action.preventDefault: false;\n\n\tif((pastClickTS != currentClickTS && currentClickTS > 0 && actionClicked) || (pastRefClickTS != currentRefClickTS && currentRefClickTS > 0 && refActionClicked) || \n\t\t(pastListClickTS != currentListClickTS && currentListClickTS > 0 && listActionClicked)) {\n\t\tlet formOutput = $live.FormOutput;\n\t\tlet pageState = $notifier.getState();\n\t\tlet recordData = {};\n\t\tlet actionObj = $live.FormOutput.ref_action || $live.FormOutput.form_action || $live.FormOutput.list_action;\n        let tableName = $live.TableName;        \n        tableName = tableName.endsWith(\"_mmf\")? tableName.split(\"_mmf\")[0]: tableName;\n                        \n\t\tif(formOutput) {\n\t\t\tlet formOutputKeys = Object.keys(formOutput);\n\t\t\tfor(let formOutputIndx in formOutputKeys) {\n\t\t\t\tlet formOutputKey = formOutputKeys[formOutputIndx];\n\t\t\t\tif(formOutputKey != \"form_action\" && formOutputKey != \"list_action\") {\n\t\t\t\t\trecordData[formOutputKey] = formOutput[formOutputKey];\n\t\t\t\t}\t\t\t\t\n\t\t\t}\n\t\t}\t\t\n\t\tlet actionData = actionClicked || refActionClicked || listActionClicked;\n\t\tswitch(actionData) {\n\t\t\tcase \"save_as\": \n                if(!preventDefaultSave && tableName) {\n\t\t\t\t\trecordData = actionObj && actionObj.actionPayload && actionObj.actionPayload.data? {...actionObj.actionPayload.data, ...recordData}: recordData;\n                    if(Object.keys(recordData).length > 0) {\t\t      \t\n                \t\tfor(let recordKey in recordData) {\n\t                    if(recordKey == \"srs_created_at\" || recordKey == \"srs_created_by\" || recordKey == \"srs_updated_at\" || recordKey == \"srs_updated_by\" || recordKey == \"uid\") {\n\t\t\t\tdelete recordData[recordKey];\n                  \t  } \n\t                    if(recordData[recordKey] == \"\") {\n         \t               recordData[recordKey] = null;\n                 \t\t  }\n                \t\t}\n                       \n                        for(let recordKey in recordData) {\n                            if(recordData[recordKey] == \"\") {\n                                recordData[recordKey] = null;\n                            }\n                        }\n                        let createdRecord = await $qry.createRecord(tableName, recordData, [\"uid\"]);\n\t\t\t\t\t\tif(createdRecord && createdRecord.errors) {\n\t\t\t\t\t\t\t$notifier.addErrorMessage({title: \"Error - \", subtitle: \"Unable to create a record, please try again.\"});\t\t\t\t\t\t\t\n\t\t\t\t\t\t}else if(createdRecord && createdRecord.uid) {\n                            $live.RecordId = createdRecord.uid;\t\n                            recordData.uid = createdRecord.uid;\t\t\t\t\t\n                            $notifier.addFlashMessage({title: \"Success - \", subtitle: \"Created the record successfully.\"});\n                        }\n                    }\t\t\t\n                }\n\t\t\t\tbreak;\n\t\t\tcase \"save\": \n                recordData = actionObj && actionObj.actionPayload && actionObj.actionPayload.data? {...actionObj.actionPayload.data, ...recordData}: recordData;\n                for(let recordKey in recordData) {\n                    if(recordKey == \"srs_created_at\" || recordKey == \"srs_created_by\" || recordKey == \"srs_updated_at\" || recordKey == \"srs_updated_by\") {\n\t\t\t\t\t\tdelete recordData[recordKey];\n                    } \n                    if(recordData[recordKey] == \"\") {\n                        recordData[recordKey] = null;\n                    }\n                }\n                \n            \n\t\t\t\tif(!preventDefaultSave && tableName && $live.PreventDefaultSave + \"\" != \"true\") {\n\t\t\t\t\tif($live.RecordId) {\n\t\t\t\t\t\tlet updatedRecord = await $qry.updateRecord(tableName, $live.RecordId, recordData, [\"uid\"]);  \n\t\t\t\t\t\tif(updatedRecord && updatedRecord.errors) {\n\t\t\t\t\t\t\t$notifier.addErrorMessage({title: \"Error - \", subtitle: \"Unable to create a record, please try again.\"});\t\t\t\t\t\t\t\n\t\t\t\t\t\t}else {\n\t\t\t\t\t\t\t$notifier.addFlashMessage({title: \"Success - \", subtitle: \"Updated the record successfully.\"});\n\t\t\t\t\t\t}                      \t\t\t\t\t\t\n\t\t\t\t\t}else {\n\t\t\t\t\t\tlet createdRecord = await $qry.createRecord(tableName, recordData, [\"uid\"]);\n\t\t\t\t\t\tif(createdRecord && createdRecord.errors) {\n\t\t\t\t\t\t\t$notifier.addErrorMessage({title: \"Error - \", subtitle: \"Unable to create a record, please try again.\"});\t\t\t\t\t\t\t\n\t\t\t\t\t\t}else {\n\t\t\t\t\t\t\t$live.RecordId = createdRecord.uid;\t\n\t\t\t\t\t\t\trecordData.uid = createdRecord.uid;\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t$notifier.addFlashMessage({title: \"Success - \", subtitle: \"Created the record successfully.\"});\n\t\t\t\t\t\t}\n\t\t\t\t\t}\t\t\t\t\t\n\t\t\t\t}\n\t\t\t\tbreak;\n\t\t\tcase \"show_list\":\t\n\t\t\t\tif(pageState.parentstate) {\n\t\t\t\t\tpageState.parentstate.data = pageState.parentstate.data || {};\n\t\t\t\t\tpageState.parentstate.data.mode = \"list\";\n\t\t\t\t\t!preventDefaultShowList && $notifier.setState(pageState);\n\t\t\t\t}else {\n\t\t\t\t\tif(actionClicked) {\n                        pageState.data = pageState.data || {};\t\t\t\t\t\t\t\n                        if(tableName) {\n                            pageState.data.table = tableName;\n                        }\n                        pageState.data.recordId = \"\";\n                        !preventDefaultShowList && $notifier.setState(pageState);                                                                                    \n                        if(!preventDefaultShowList && tableName) {                                \n                            let url = \"/list/table/\" + tableName + \"/view/\" + $live.View;\n                            navigateTo(url);\n                        }                                                                                    \n                    }\n\t\t\t\t}\t\t\t                \t\t \t\t\t\t  \n    \t\t\t\n\t\t\t\tbreak;\n\t\t\tcase \"open_record\": \n\t\t\t\tlet {tableName:actionTableName, view: actionView} = actionObj.actionPayload;\n                actionTableName = actionTableName.endsWith(\"_mmf\")? actionTableName.split(\"_mmf\")[0]:actionTableName;\n                let actionRecordId = actionObj.actionPayload.record? actionObj.actionPayload.record.uid: actionObj.actionPayload.recordId;\n\t\t\t\tif(pageState.parentstate) {\n\t\t\t\t\tpageState.parentstate.data = pageState.parentstate.data || {};\n\t\t\t\t\tpageState.parentstate.data.mode = \"form\";\n\t\t\t\t\tpageState.parentstate.data.id = actionRecordId;\n                    if(actionTableName) {\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t    pageState.parentstate.data.table = actionTableName;\n                    }\n                    if(actionView) {\n                        pageState.parentstate.data.view = actionView;\n                    }\n\t\t\t\t\t$notifier.setState(pageState);\n\t\t\t\t}else {\n\t\t\t\t\tpageState.data = pageState.data || {};\t\n\t\t\t\t\tpageState.currentLayout = \"default\";\t\t      \t\t\t\n\t\t\t\t\tif(actionTableName) {\n\t\t\t\t\t\tpageState.data.table = actionTableName;\n\t\t\t\t\t}\n                    if(actionView) {\n\t\t\t\t\t\tpageState.data.view = actionView;\n\t\t\t\t\t}\n\t\t\t\t\tpageState.data.recordId = actionRecordId;\n\t\t\t\t\t!preventDefaultRefAction && $notifier.setState(pageState);\n                    if(!preventDefaultRefAction && actionTableName) {                                \n                        let url = \"/form/table/\" + actionTableName + \"/id/\" + actionRecordId + \"/view/\" + $live.View;\n                        navigateTo(url);\n                    }\n\t\t\t\t}\t\t\t\t\n    \t\t\t\n\t\t\t\tbreak;\n\t\t\tcase \"new\":\n\t\t\tcase \"New\": \n\t\t\t\tlet {tableName:newFormTableName} = actionObj.actionPayload;\t\t\t\t\n\t\t\t\tif(pageState.parentstate) {\n\t\t\t\t\tpageState.parentstate.data = pageState.parentstate.data || {};\n\t\t\t\t\tpageState.parentstate.data.mode = \"form\";\n\t\t\t\t\tpageState.parentstate.data.id = \"\";\n\t\t\t\t\tpageState.parentstate.data.table = newFormTableName;\n\t\t\t\t\t$notifier.setState(pageState);\n\t\t\t\t}else {\n\t\t\t\t\tpageState.data = pageState.data || {};\n\t\t\t\t\tpageState.currentLayout = \"default\";\t\n                    newFormTableName = newFormTableName.endsWith(\"_mmf\")?newFormTableName.split(\"_mmf\")[0]: newFormTableName;\n\t\t\t\t\tif(newFormTableName) {\n\t\t\t\t\t\tpageState.data.table = newFormTableName;\n\t\t\t\t\t}\t\t      \t\t\t\n\t\t\t\t\tpageState.data.recordId = \"\";\n\t\t\t\t\t!preventDefaultNew && $notifier.setState(pageState);\t\t\n                    if(!preventDefaultNew && newFormTableName) {                                \n                        let url = \"/form/table/\" + newFormTableName + \"/view/\" + $live.View;\n                        navigateTo(url);\n                    }\n\t\t\t\t}\t\t\t\t\n\t\t\t\tbreak;            \t\t\t\t\n\t\t}\n        if(pastClickTS != currentClickTS && actionClicked) {\n            if(pageState.parentstate) {\t\t\t\t\n                pageState.parentstate.action = pageState.parentstate.action || {};\n                pageState.parentstate.action.name = actionData;\n                pageState.parentstate.action.clickts = currentClickTS;\n                pageState.parentstate.action.payload = recordData?recordData: {};\n            }else {\n                pageState.action = pageState.action || {};\n                pageState.action.name = actionData;\n                pageState.action.clickts = currentClickTS;\n                pageState.action.payload = actionObj?actionObj.actionPayload: {};\n            }\n            $notifier.setState(pageState);\n        }\n        // $live.FormOutput && delete $live.FormOutput.form_action;        \n        // $live.FormOutput && delete $live.FormOutput.ref_action;        \n        // $live.FormOutput && delete $live.FormOutput.list_action;        \n\t}\n\treturn $live;\n})",
                            "Trigger": "onChange",
                            "Active": true,
                            "Order": 1,
                            "Type": "Current",
                            "Target": null
                        }
                    }
                }
            }
        }
    },
    "mmf.getSlidePropsById%7B%22uid%22:%22b870b1b0-57c1-11eb-a638-d95bfca5c886%22%7Ddata.slide": {
        "uid": "b870b1b0-57c1-11eb-a638-d95bfca5c886",
        "Name": "ModelForm",
        "Scope": "studio",
        "Type": "FreeForm",
        "Path": "/form/:params",
        "props": {
            "table": "",
            "view": "",
            "id": "",
            "template": "",
            "mode": "",
            "filter": "",
            "default": "",
            "listfields": ""
        }
    },
    "mmf.getSlideProps%7B%22pageId%22:%22b870b1b0-57c1-11eb-a638-d95bfca5c886%22%7Ddata.MetaSlideProps.MetaSlidePropsFind": {
        "table": "",
        "view": "",
        "id": "",
        "template": "",
        "mode": "",
        "filter": "",
        "default": "",
        "listfields": ""
    },
    "ControlTheme_studio%7B%7Duid,FormTheme,Styles,Control": [
        {
            "uid": "3e5389b0-9f34-11eb-ba1c-7f6db0e3ef7f",
            "FormTheme": "f47ae380-99a5-11eb-ba01-67948a9bbedb",
            "Styles": ".bx--label {\r\n    color: black !important;\r\n    font-size: 0.9rem !important;\r\n    font-weight:800 !important;\r\n}\r\n\r\n.bx--text-input {\r\n    border: 1px solid lightgray !important;\r\n}\n\n.bx--select {\n    width: 100% !important;\n}\n\n.bx--select-input__wrapper {\n    width: 100% !important;\n}\n\n.bx--select-input {\n    width: 100% !important;\n    max-width: 100% !important;\n    border: 1px solid lightgray !important;\n}",
            "Control": "Dynamic Choice"
        },
        {
            "uid": "4075cd70-9f34-11eb-ba1c-7f6db0e3ef7f",
            "FormTheme": "f47ae380-99a5-11eb-ba01-67948a9bbedb",
            "Styles": ".bx--label {\r\n    color: black !important;\r\n    font-size: 0.9rem !important;\r\n    font-weight:800 !important;\r\n}\r\n\r\n.bx--text-input {\r\n    border: 1px solid lightgray !important;\r\n}\n\n.bx--select {\n    width: 100% !important;\n}\n\n.bx--select-input__wrapper {\n    width: 100% !important;\n}\n\n.bx--select-input {\n    width: 100% !important;\n    max-width: 100% !important;\n    border: 1px solid lightgray !important;\n}",
            "Control": "Choice"
        },
        {
            "uid": "42acf8c0-9f34-11eb-ba1c-7f6db0e3ef7f",
            "FormTheme": "f47ae380-99a5-11eb-ba01-67948a9bbedb",
            "Styles": ".bx--tile {\n    position: relative !important;\n    display: block !important;\n    padding: 15px !important;\n    background-color: white !important;\n    border: 1px solid lightgray !important;\n    border-radius: 4px !important;\n    font-size: x-large !important;\n    font-weight: 900 !important;\n}",
            "Control": "Label"
        },
        {
            "uid": "44cc2f40-9f34-11eb-ba1c-7f6db0e3ef7f",
            "FormTheme": "f47ae380-99a5-11eb-ba01-67948a9bbedb",
            "Styles": ".bx--label {\r\n    color: black !important;\r\n    font-size: 0.9rem !important;\r\n    font-weight:800 !important;\r\n}",
            "Control": "Script"
        },
        {
            "uid": "4643db20-9f34-11eb-ba1c-7f6db0e3ef7f",
            "FormTheme": "f47ae380-99a5-11eb-ba01-67948a9bbedb",
            "Styles": ".bx--label {\r\n    color: black !important;\r\n    font-size: 0.9rem !important;\r\n    font-weight:800 !important;\r\n}\r\n\r\n.bx--text-input {\r\n    border: 1px solid lightgray !important;\r\n}",
            "Control": "Reference"
        },
        {
            "uid": "47db9220-9f34-11eb-ba1c-7f6db0e3ef7f",
            "FormTheme": "f47ae380-99a5-11eb-ba01-67948a9bbedb",
            "Styles": ".Primary {\n    background-color: #4CAF50 !important;\n    border: none !important;\n    color: white !important;\n    text-align: center !important;\n    text-decoration: none !important;\n    display: inline-block !important;\n    font-size: 16px !important;\n    margin: 4px 2px !important;\n    transition-duration: 0.4s !important;\n    cursor: pointer !important;\n    border-radius:5px !important;\n}\n\n.Secondary {\n    background-color: #00B5B8 !important;\n    border: none !important;\n    color: white !important;\n    text-align: center !important;\n    text-decoration: none !important;\n    display: inline-block !important;\n    font-size: 16px !important;\n    margin: 4px 2px !important;\n    transition-duration: 0.4s !important;\n    cursor: pointer !important;\n    border-radius:5px !important;\n}\n\n.Informative {\n    border: none !important;\n    color: white !important;\n    text-align: center !important;\n    text-decoration: none !important;\n    display: inline-block !important;\n    font-size: 16px !important;\n    margin: 4px 2px !important;\n    transition-duration: 0.4s !important;\n    cursor: pointer !important;\n    border-radius: 5px !important;\n}\n",
            "Control": "Actions"
        },
        {
            "uid": "66316b90-9f35-11eb-ba1c-7f6db0e3ef7f",
            "FormTheme": "f47ae380-99a5-11eb-ba01-67948a9bbedb",
            "Styles": ".gridTop {\n    box-shadow: none !important;\n}",
            "Control": "List"
        },
        {
            "uid": "68116560-9f35-11eb-ba1c-7f6db0e3ef7f",
            "FormTheme": "f47ae380-99a5-11eb-ba01-67948a9bbedb",
            "Styles": ".bx--label {\r\n    color: black !important;\r\n    font-size: 0.9rem !important;\r\n    font-weight:800 !important;\r\n}\r\n\r\n.bx--text-input {\r\n    border: 1px solid lightgray !important;\r\n}",
            "Control": "String"
        },
        {
            "uid": "68116560-9f35-11eb-ba1c-7f6db0e5ef7f",
            "FormTheme": "f47ae380-99a5-11eb-ba01-67948a9bbedb",
            "Styles": ".bx--label {\n    color: black !important;\n    font-size: 0.9rem !important;\n    font-weight:800 !important;\n}\n\ninput {\n    border: 0px !important;\n}\n\n.bx--number__input-wrapper {\n    border: 1px solid lightgray !important;\n}\n\n",
            "Control": "Number"
        },
        {
            "uid": "68516560-9f35-11eb-ba1c-7f6db0e3ef7f",
            "FormTheme": "f47ae380-99a5-11eb-ba01-67948a9bbedb",
            "Styles": ".bx--label {\r\n    color: black !important;\r\n    font-size: 0.9rem !important;\r\n    font-weight:800 !important;\r\n}\r\n\r\n.bx--text-area {\r\n    border: 1px solid lightgray !important;\r\n}",
            "Control": "Text"
        },
        {
            "uid": "74a2ee10-9f35-11eb-ba1c-7f6db0e3ef7f",
            "FormTheme": "f47ae380-99a5-11eb-ba01-67948a9bbedb",
            "Styles": "",
            "Control": "Custom"
        },
        {
            "uid": "7673b670-9f35-11eb-ba1c-7f6db0e3ef7f",
            "FormTheme": "f47ae380-99a5-11eb-ba01-67948a9bbedb",
            "Styles": ".bx--tile {\n    position: relative;\n    display: block;\n    padding: 15px;\n    background-color: white !important;\n    border: 1px solid lightgray !important;\n    border-radius: 4px !important;\n    font-size: x-large !important;\n    font-weight: 900 !important;\n}\n\n.labelTop {\n    padding-left : 2px !important;\n}\n\n.bx--date-picker__input {\n   border: 1px solid lightgray !important;\n}\n\n.bx--date-picker__input, .bx--date-picker,.bx--date-picker-container {\n    width: 100% !important;\n}\n\n.bx--label {\n    color: black !important;\n    font-size: 0.9rem !important;\n    font-weight:800 !important;\n}\n\n.bx--text-input {\n    border: 1px solid lightgray !important;\n}\n\n\n.Primary {\n    background-color: #4CAF50 !important;\n    border: none !important;\n    color: white !important;\n    text-align: center !important;\n    text-decoration: none !important;\n    display: inline-block !important;\n    font-size: 16px !important;\n    margin: 4px 2px !important;\n    transition-duration: 0.4s !important;\n    cursor: pointer !important;\n    border-radius:5px !important;\n}\n\n.Secondary {\n    background-color: #00B5B8 !important;\n    border: none !important;\n    color: white !important;\n    text-align: center !important;\n    text-decoration: none !important;\n    display: inline-block !important;\n    font-size: 16px !important;\n    margin: 4px 2px !important;\n    transition-duration: 0.4s !important;\n    cursor: pointer !important;\n    border-radius:5px !important;\n}\n\n.Informative {\n    border: none !important;\n    color: white !important;\n    text-align: center !important;\n    text-decoration: none !important;\n    display: inline-block !important;\n    font-size: 16px !important;\n    margin: 4px 2px !important;\n    transition-duration: 0.4s !important;\n    cursor: pointer !important;\n    border-radius: 5px !important;\n}\n\n.top {\n    border-bottom : 2px solid lightgray !important;\n    min-width: 8rem !important;\n    min-height : 1rem !important;\n    padding: 10px !important;\n    background-color: none !important;\n}\n\n\n.gridTop {\n    border-shadow: none !important;\n}\n\n.MuiGrid-root {\npadding : 2px 4px !important;\n}\n\n.MuiAccordionSummary-root.Mui-expanded {\n    min-height: 0px !important;\n}\n\n.MuiGrid-container{\n    margin-left: 20px !important;\n    width: 100% !important;\n    padding: 2px !important;\n    font-family: 'Open Sans','IBM Plex Sans' !important;\n    \n}\n\n.MuiGrid-spacing-xs-2 {\n    width: 98% !important;\n    margin: -2px !important;\n}\n\n.form_header {\n    height: fit-content;\n    width: 100% !important;\n    overflow: hidden auto !important;\n    text-align: left !important;\n    min-height: 60% !important;\n    max-height: 100% !important;\n    padding-left: 20px !important;\n    padding-right: 50px !important;\n}\n\n.controlTop, .labelTop, .dateTop {\n    padding-top: 5px !important;\n    padding-bottom: 5px !important;\n    padding-left: 20px !important;\n}\n\n.MuiTypography-h5 {\n    font-size: 1.2rem !important;\n    font-weight: 600 !important;\n    line-height: 0.2em !important;\n    letter-spacing: 0em !important;\n}\n\n",
            "Control": "Form"
        },
        {
            "uid": "78462c80-9f35-11eb-ba1c-7f6db0e3ab7f",
            "FormTheme": "f47ae380-99a5-11eb-ba01-67948a9bbedb",
            "Styles": ".verticalTop {\r\n    padding: 2px !important;\r\n}",
            "Control": "VerticalLayout"
        },
        {
            "uid": "78462c80-9f35-11eb-ba1c-7f6db0e3ad7f",
            "FormTheme": "f47ae380-99a5-11eb-ba01-67948a9bbedb",
            "Styles": ".tabsTop {\r\n    padding: 2px !important;\r\n}",
            "Control": "TabsLayout"
        },
        {
            "uid": "78462c80-9f35-11eb-ba1c-7f6db0e3ba7f",
            "FormTheme": "f47ae380-99a5-11eb-ba01-67948a9bbedb",
            "Styles": ".horizontalTop {\r\n    padding: 2px !important;\r\n}",
            "Control": "HorizontalLayout"
        },
        {
            "uid": "78462c80-9f35-11eb-ba1c-7f6db0e3df7f",
            "FormTheme": "f47ae380-99a5-11eb-ba01-67948a9bbedb",
            "Styles": ".groupTop {\r\n    padding: 2px !important;\r\n}",
            "Control": "Group"
        },
        {
            "uid": "78462c80-9f35-11eb-ba1c-7f6db0e3ed7f",
            "FormTheme": "f47ae380-99a5-11eb-ba01-67948a9bbedb",
            "Styles": ".stepperTop {\r\n    padding: 5px !important;\r\n}",
            "Control": "StepperLayout"
        },
        {
            "uid": "78462c80-9f35-11eb-ba1c-7f6db0e3ef7f",
            "FormTheme": "f47ae380-99a5-11eb-ba01-67948a9bbedb",
            "Styles": ".bx--label {\r\n    color: black !important;\r\n    font-size: 0.9rem !important;\r\n    font-weight:800 !important;\r\n}",
            "Control": "Date"
        },
        {
            "uid": "78462c80-9f35-11eb-ba1c-7f6db0e5ef7e",
            "FormTheme": "f47ae380-99a5-11eb-ba01-67948a9bbedb",
            "Styles": ".bx--form-item {\n\tpadding-top: 15px !important;\n}\n\n.bx--btn--primary {\n\tbackground-color: white !important;\n\tcolor: #00b241 !important;\n\tfont-weight: 900 !important;\n}",
            "Control": "File"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22WorkflowVersion%22%7D,%7B%22Scope%22:%22workflow%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "93515d70-9372-11eb-a4bd-7da498ed85b5",
            "Name": "WorkflowVersion_Default",
            "Scope": "workflow",
            "Model": "54843710-1e75-11eb-a30a-a5c828913b33",
            "View": "Default",
            "ModelName": "WorkflowVersion",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Version\":{\"code\":\"Version\",\"label\":\"Version\",\"type\":\"string\",\"name\":\"Version\"},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},\"Status\":{\"code\":\"Status\",\"label\":\"Status\",\"type\":\"string\",\"name\":\"Status\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"ActivityInfo\":{\"code\":\"ActivityInfo\",\"label\":\"Activity Info\",\"type\":\"string\",\"name\":\"ActivityInfo\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"Version\",\"label\":\"Version\",\"dataType\":\"string\",\"name\":\"Version\"},{\"code\":\"Definition\",\"label\":\"Definition\",\"dataType\":\"text\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},{\"code\":\"Status\",\"label\":\"Status\",\"dataType\":\"string\",\"name\":\"Status\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"ActivityInfo\",\"label\":\"Activity Info\",\"dataType\":\"text\",\"name\":\"ActivityInfo\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Form - Workflow \",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_wf\",\"label\":\"Save\",\"mode\":\"Secondary\"},{\"name\":\"publish\",\"label\":\"Publish\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Name\"},{\"type\":\"Control\",\"scope\":\"#/properties/Version\"}]},{\"type\":\"Control\",\"subtype\":\"CustomComponent\",\"scope\":\"#/properties/Definition\",\"controlname\":\"Definition\",\"componentname\":\"WorkflowModeler\",\"componentscope\":\"workflow\",\"componentprops\":{\"inputxml\":\"${Definition}\",\"activityinfo\":\"${ActivityInfo}\"},\"inlinestyles\":\"#head { height: 50vh !important; width: 98vw;     margin-left: -8%;     border: 1px solid #959595;     box-shadow: 0px 0px 3px 0px #4b4b4b;  overflow: auto; }\"}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Form - Workflow \",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_wf\",\"label\":\"Save\",\"mode\":\"Secondary\"},{\"name\":\"publish\",\"label\":\"Publish\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Name\"},{\"dataType\":\"Control\",\"scope\":\"Version\"}]},{\"dataType\":\"CustomComponent\",\"name\":\"Definition\",\"componentname\":\"WorkflowModeler\",\"componentscope\":\"workflow\",\"componentprops\":[{\"name\":\"inputxml\",\"value\":\"${Definition}\"},{\"name\":\"activityinfo\",\"value\":\"${ActivityInfo}\"}],\"inlinestyles\":\"#head { height: 50vh !important; width: 98vw;     margin-left: -8%;     border: 1px solid #959595;     box-shadow: 0px 0px 3px 0px #4b4b4b;  overflow: auto; }\"}],\"rule\":{}}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%2254843710-1e75-11eb-a30a-a5c828913b33%22%7D,%7B%22or%22:%5B%7B%22Form%22:%2293515d70-9372-11eb-a4bd-7da498ed85b5%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [
        {
            "uid": "12bd8a40-9bf0-11eb-88f1-119921dbf335",
            "Name": "onActivityModalClose",
            "Form": "93515d70-9372-11eb-a4bd-7da498ed85b5",
            "SourceActionType": "onModalChange",
            "SourceField": "",
            "CustomSource": "",
            "SourceAction": "",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 100,
            "TargetActionScript": "(async function() { \n    debugger;\n    let modalForm = {};\n    if($modal.DefaultData) {\n        try {\n            modalForm = typeof $modal.DefaultData == \"string\"? JSON.parse($modal.DefaultData): modalForm;\n            modalForm.SubForm = modalForm.SubForm && typeof modalForm.SubForm == \"string\"? JSON.parse(modalForm.SubForm): modalForm.SubForm;\n        }catch(err) {}\n    }\n    \n    modalForm = {...modalForm, ...$modal.FormOutput};\n    let category = modalForm.Category;\n    let serviceTask = modalForm.ServiceTask;\n    let subFormId = modalForm.SubFormId;\n    let subFormData = modalForm.SubForm;\n    let activityId = modalForm.ActivityId;\n    let outputVarName = modalForm.OutputVariableName;\n    let serviceTaskRecord = await $qry.getRecords(\"ServiceTask_workflow\", {where: {uid: serviceTask}}, [\"Name\"]);\n    serviceTaskRecord = serviceTaskRecord && serviceTaskRecord.length > 0? serviceTaskRecord[0]: serviceTaskRecord;\n\n    if(activityId) {\n        let activityInfo = $form.ActivityInfo || {};\n        try {\n            if(activityInfo && typeof activityInfo == \"string\") {\n                activityInfo = JSON.parse(activityInfo);\n            }else {\n                activityInfo = Object.assign({}, activityInfo);\n            }\n        }catch(err) {}\n\n        activityInfo[activityId] = {\n            taskConfig: {\n                config: {\n                    ServiceTaskName: serviceTaskRecord?serviceTaskRecord.Name: \"\",\n                    ServiceTaskId: serviceTask\n                },\n                data: subFormData,\n                outputVariableName: outputVarName\n            },\n            defaultValue: {\n                Category: category,\n                ServiceTask: serviceTask,                \n                SubFormId: subFormId,\n                SubForm: JSON.stringify(subFormData),\n                OutputVariableName: outputVarName\n            }\n        }\n        $form.ActivityInfo = JSON.stringify(activityInfo);    \n        let updatedRecord = await $qry.updateRecord(\"WorkflowVersion_workflow\", $form.uid, {ActivityInfo: $form.ActivityInfo}, [\"uid\"]);\n    }\n    return {data: $form, meta: {Definition: {componentprops: {savets: Date.now()}}}};\n\n})",
            "Condition": "(async function() {\n    return true;\n})",
            "PreventDefaultSave": "",
            "PreventDefaultShowList": ""
        },
        {
            "uid": "42ea5570-9a8a-11eb-88f1-119921dbf335",
            "Name": "openActivity",
            "Form": "93515d70-9372-11eb-a4bd-7da498ed85b5",
            "SourceActionType": "onClick",
            "SourceField": "",
            "CustomSource": "",
            "SourceAction": "open_activity",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 500,
            "TargetActionScript": "(async function() {\n    console.log($form);    \n    let actionPayload = $action || {};\n    let activityId = actionPayload.activityId;\n\n    if(activityId) {\n        let activityInfo = $form.ActivityInfo;\n        try {\n            if(activityInfo && typeof activityInfo == \"string\") {\n                activityInfo = JSON.parse(activityInfo);\n            }else {\n                activityInfo = Object.assign({}, activityInfo);\n            }\n        }catch(err) {}\n\n        let elementInfo = activityInfo[activityId];\n        //let defaultValue = {ServiceTask: \"a188e920-2fe6-11eb-983c-55d7c395c2e4\", SubFormId: \"d8b7d160-70bc-11eb-805d-1d1986854aa7\", SubForm: JSON.stringify({\"Account1\":\"02122650-6f9b-11eb-9293-3fa84b99d548\",\"Account2\":\"28992a10-70b5-11eb-805d-1d1986854aa7\",\"Amount\":300})};\n        let defaultValue = elementInfo? elementInfo.defaultValue: {};\n        $notifier.openModal({name: \"ActivitySelector\", type: \"form\", \n                            formname: \"ActivitySelector\", formdata: JSON.stringify({...defaultValue, ActivityId: actionPayload.activityId}), layout: \"center-large\"});\n    }        \n})",
            "Condition": "(async function() {\n    return true;\n})",
            "PreventDefaultSave": "",
            "PreventDefaultShowList": ""
        },
        {
            "uid": "f4b50150-99dc-11eb-ba01-67948a9bbedb",
            "Name": "onSaveWF",
            "Form": "93515d70-9372-11eb-a4bd-7da498ed85b5",
            "SourceActionType": "onClick",
            "SourceField": "",
            "CustomSource": "",
            "SourceAction": "save_wf",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 100,
            "TargetActionScript": "(async function() {\n    // return {data: $form, meta: {\"Definition\": {componentprops: {savets: Date.now()}}}};    \n    if(!$form.uid) {\n        let createdRecord = await $qry.createRecord(\"WorkflowVersion_workflow\", \n                                        {Name: $form.Name, Version: $form.Version, Definition: $form.Definition, Status: \"Active\"}, [\"uid\"]);\n        if(createdRecord && createdRecord.length > 0) {\n            navigateTo(\"/form/table/WorkflowVersion_workflow/view/Default/id/\" + createdRecord[0].uid);\n        }\n    }else {\n        let updatedRecord = await $qry.updateRecord(\"WorkflowVersion_workflow\", $form.uid,\n                                        {Name: $form.Name, Version: $form.Version, Definition: $form.Definition, Status: \"Active\"}, [\"uid\"]);\n        $notifier.addFlashMessage({title: \"Success - \", subtitle: \"Updated workflow successfully!\"});\n    }\n})\n\n",
            "Condition": "(async function() {\n    return true;\n})",
            "PreventDefaultSave": true,
            "PreventDefaultShowList": true
        },
        {
            "uid": "f5216270-9a02-11eb-88f1-119921dbf335",
            "Name": "onWFPublish",
            "Form": "93515d70-9372-11eb-a4bd-7da498ed85b5",
            "SourceActionType": "onClick",
            "SourceField": "",
            "CustomSource": "",
            "SourceAction": "publish",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 200,
            "TargetActionScript": "(async function() {\n    if($form.uid) {\n        let result = await $script.runAtServer(\"workflow.deployWFVersion\", {workflowVersionId: $form.uid});\n        $notifier.addFlashMessage({title: \"Success - \", subtitle: \"Workflow deployed successfully!\" });\n    }else {\n        $notifier.addWarningMessage({title: \"Warning - \", subtitle: \"Save the workflow and try publish it again.\"});\n    }\n})",
            "Condition": "(async function() {\n    return true;\n})",
            "PreventDefaultSave": true,
            "PreventDefaultShowList": ""
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22ServiceTask%22,%22View%22:%22Default%22,%22Scope%22:%22workflow%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "a2a8efa0-9371-11eb-a4bd-7da498ed85b5",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},\"SubForm\":{\"code\":\"SubForm\",\"label\":\"SubForm\",\"type\":\"string\",\"name\":\"SubForm\",\"widgetType\":\"Reference\",\"tableName\":\"FormTemplate_studio\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Category\":{\"code\":\"Category\",\"label\":\"Category\",\"type\":\"string\",\"name\":\"Category\",\"widgetType\":\"Reference\",\"choiceList\":[{\"name\":\"Choose a Type\"},{\"name\":\"Component\",\"value\":\"component\"},{\"name\":\"Page\",\"value\":\"page\"}],\"tableName\":\"WorkflowCategory_workflow\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Category\":{\"code\":\"Category\",\"label\":\"Category\",\"type\":\"string\",\"name\":\"Category\",\"widgetType\":\"Reference\",\"tableName\":\"WorkflowCategory_workflow\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"SubForm\":{\"code\":\"SubForm\",\"label\":\"SubForm\",\"type\":\"string\",\"name\":\"SubForm\",\"widgetType\":\"Reference\",\"tableName\":\"FormTemplate_studio\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}}}"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22uid%22:%7B%22inq%22:%5B%22e1b8b8f0-9ac0-11eb-88f1-119921dbf335%22,%22d8b7d160-70bc-11eb-805d-1d1986854aa7%22,%22e1b8b8f0-9ac0-11eb-88f1-119921dbf335%22%5D%7D%7D%7Duid,Name": [
        {
            "uid": "d8b7d160-70bc-11eb-805d-1d1986854aa7",
            "Name": "AccountTransfer"
        },
        {
            "uid": "e1b8b8f0-9ac0-11eb-88f1-119921dbf335",
            "Name": "CreateRecord"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22ServiceTask%22%7D,%7B%22Scope%22:%22workflow%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "a2a8efa0-9371-11eb-a4bd-7da498ed85b5",
            "Name": "ServiceTask_Default",
            "Scope": "workflow",
            "Model": "e06b56f0-1e75-11eb-a30a-a5c828913b33",
            "View": "Default",
            "ModelName": "ServiceTask",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},\"SubForm\":{\"code\":\"SubForm\",\"label\":\"SubForm\",\"type\":\"string\",\"name\":\"SubForm\",\"widgetType\":\"Reference\",\"tableName\":\"FormTemplate_studio\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Category\":{\"code\":\"Category\",\"label\":\"Category\",\"type\":\"string\",\"name\":\"Category\",\"widgetType\":\"Reference\",\"choiceList\":[{\"name\":\"Choose a Type\"},{\"name\":\"Component\",\"value\":\"component\"},{\"name\":\"Page\",\"value\":\"page\"}],\"tableName\":\"WorkflowCategory_workflow\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"Definition\",\"label\":\"Definition\",\"dataType\":\"text\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},{\"code\":\"SubForm\",\"label\":\"SubForm\",\"dataType\":\"string\",\"name\":\"SubForm\",\"widgetType\":\"Reference\",\"tableName\":\"FormTemplate_studio\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"Category\",\"label\":\"Category\",\"dataType\":\"string\",\"name\":\"Category\",\"widgetType\":\"Reference\",\"choiceList\":[{\"name\":\"Choose a Type\"},{\"name\":\"Component\",\"value\":\"component\"},{\"name\":\"Page\",\"value\":\"page\"}],\"tableName\":\"WorkflowCategory_workflow\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Form - Service Task\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Name\"},{\"type\":\"Control\",\"scope\":\"#/properties/Category\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/SubForm\",\"label\":\"Sub Form\",\"rule\":{\"condition\":{}}}]},{\"type\":\"Control\",\"scope\":\"#/properties/Definition\",\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}  .bx--label {    color: black !important;     font-size: 0.9rem !important;     font-weight: 800 !important;} \"}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Form - Service Task\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Name\"},{\"dataType\":\"Control\",\"scope\":\"Category\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"SubForm\",\"options\":null,\"tableName\":\"MetaComponent\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\",\"label\":\"Sub Form\",\"rule\":{\"schemaType\":{\"schemaType\":\"Simple\",\"expectedValue\":\"component\"}}}]},{\"dataType\":\"Control\",\"scope\":\"Definition\",\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}  .bx--label {    color: black !important;     font-size: 0.9rem !important;     font-weight: 800 !important;} \"}],\"rule\":{}}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22e06b56f0-1e75-11eb-a30a-a5c828913b33%22%7D,%7B%22or%22:%5B%7B%22Form%22:%22a2a8efa0-9371-11eb-a4bd-7da498ed85b5%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22WorkflowResults%22,%22View%22:%22Default%22,%22Scope%22:%22workflow%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "f0c9bd80-9372-11eb-a4bd-7da498ed85b5",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"ProcessInstanceId\":{\"code\":\"ProcessInstanceId\",\"label\":\"ProcessInstanceId\",\"type\":\"string\",\"name\":\"ProcessInstanceId\"},\"State\":{\"code\":\"State\",\"label\":\"State\",\"type\":\"string\",\"name\":\"State\"},\"Result\":{\"code\":\"Result\",\"label\":\"Result\",\"type\":\"string\",\"name\":\"Result\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"ProcessInstanceId\":{\"code\":\"ProcessInstanceId\",\"label\":\"ProcessInstanceId\",\"type\":\"string\",\"name\":\"ProcessInstanceId\"},\"State\":{\"code\":\"State\",\"label\":\"State\",\"type\":\"string\",\"name\":\"State\"}}}"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22WorkflowResults%22%7D,%7B%22Scope%22:%22workflow%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "f0c9bd80-9372-11eb-a4bd-7da498ed85b5",
            "Name": "WorkflowResults_Default",
            "Scope": "workflow",
            "Model": "0994b680-1e75-11eb-a30a-a5c828913b33",
            "View": "Default",
            "ModelName": "WorkflowResults",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"ProcessInstanceId\":{\"code\":\"ProcessInstanceId\",\"label\":\"ProcessInstanceId\",\"type\":\"string\",\"name\":\"ProcessInstanceId\"},\"State\":{\"code\":\"State\",\"label\":\"State\",\"type\":\"string\",\"name\":\"State\"},\"Result\":{\"code\":\"Result\",\"label\":\"Result\",\"type\":\"string\",\"name\":\"Result\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"ProcessInstanceId\",\"label\":\"ProcessInstanceId\",\"dataType\":\"string\",\"name\":\"ProcessInstanceId\"},{\"code\":\"State\",\"label\":\"State\",\"dataType\":\"string\",\"name\":\"State\"},{\"code\":\"Result\",\"label\":\"Result\",\"dataType\":\"text\",\"name\":\"Result\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Form - Workflow Results\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/ProcessInstanceId\"},{\"type\":\"Control\",\"scope\":\"#/properties/State\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Result\"}]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Form - Workflow Results\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"subtype\":\"Actions\",\"actions\":[{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\",\"draggable\":false},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"ProcessInstanceId\"},{\"dataType\":\"Control\",\"scope\":\"State\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Result\"}]}],\"rule\":{}}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%220994b680-1e75-11eb-a30a-a5c828913b33%22%7D,%7B%22or%22:%5B%7B%22Form%22:%22f0c9bd80-9372-11eb-a4bd-7da498ed85b5%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaReusableScript%22,%22View%22:%22Default%22,%22Scope%22:%22mmf%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "52e52240-7e4a-11eb-a3cf-39ae28036b92",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Type\":{\"code\":\"Type\",\"label\":\"Type\",\"type\":\"string\",\"name\":\"Type\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"client\",\"value\":\"client\"},{\"name\":\"server\",\"value\":\"server\"},{\"name\":\"common\",\"value\":\"common\"}]},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Type\":{\"code\":\"Type\",\"label\":\"Type\",\"type\":\"string\",\"name\":\"Type\"},\"uid\":{\"type\":\"string\"}}}"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaReusableScript%22%7D,%7B%22Scope%22:%22mmf%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "52e52240-7e4a-11eb-a3cf-39ae28036b92",
            "Name": "MetaReusableScript_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaReusableScript",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Type\":{\"code\":\"Type\",\"label\":\"Type\",\"type\":\"string\",\"name\":\"Type\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"client\",\"value\":\"client\"},{\"name\":\"server\",\"value\":\"server\"},{\"name\":\"common\",\"value\":\"common\"}]},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"Scope\",\"label\":\"Scope\",\"dataType\":\"string\",\"name\":\"Scope\"},{\"code\":\"Type\",\"label\":\"Type\",\"dataType\":\"string\",\"name\":\"Type\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"client\",\"value\":\"client\"},{\"name\":\"server\",\"value\":\"server\"},{\"name\":\"common\",\"value\":\"common\"}]},{\"code\":\"Definition\",\"label\":\"Definition\",\"dataType\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Reusable Script - Details\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"Group\",\"label\":\"Details\",\"elements\":[{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Name\"},{\"type\":\"Control\",\"scope\":\"#/properties/Scope\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Type\"}]}]},{\"type\":\"Control\",\"scope\":\"#/properties/Definition\",\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}  .bx--label {    color: black !important;     font-size: 0.9rem !important;     font-weight: 800 !important;} \",\"widget\":{\"widgetType\":\"Script\",\"draggable\":\"\",\"contentType\":\"JS\",\"editorHeight\":\"40vh\",\"language\":\"javascript\",\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}  .bx--label {    color: black !important;     font-size: 0.9rem !important;     font-weight: 800 !important;} \"}},{\"type\":\"HorizontalLayout\",\"elements\":[]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Reusable Script - Details\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\",\"draggable\":\"\"},{\"dataType\":\"Group\",\"label\":\"Details\",\"Properties\":[{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Name\",\"draggable\":false},{\"dataType\":\"Control\",\"scope\":\"Scope\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Type\",\"draggable\":false}]}]},{\"dataType\":\"Control\",\"scope\":\"Definition\",\"draggable\":\"\",\"widgetType\":\"Script\",\"options\":null,\"contentType\":\"JS\",\"editorHeight\":\"40vh\",\"language\":\"javascript\",\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}  .bx--label {    color: black !important;     font-size: 0.9rem !important;     font-weight: 800 !important;} \"},{\"dataType\":\"HorizontalLayout\"}],\"rule\":{}}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22MetaReusableScript%22%7D,%7B%22or%22:%5B%7B%22Form%22:%2252e52240-7e4a-11eb-a3cf-39ae28036b92%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "mmf.getSlidesWithPath%7B%22basePath%22:%22/component%22%7Dundefined": {
        "c3c38e00-90b7-11eb-a4bd-7da498ed85b5": {
            "pageId": "c3c38e00-90b7-11eb-a4bd-7da498ed85b5",
            "Path": "/component/:params",
            "Type": "FreeForm",
            "Styles": ".topPreviewContainer {\n    height: fit-content !important;\n}",
            "props": {
                "scope": "",
                "name": "",
                "props": ""
            }
        }
    },
    "MetaSlide%7B%22where%22:%7B%22uid%22:%22c3c38e00-90b7-11eb-a4bd-7da498ed85b5%22%7D%7Duid,Name,Scope": [
        {
            "uid": "c3c38e00-90b7-11eb-a4bd-7da498ed85b5",
            "Name": "ComponentFrame",
            "Scope": "studio"
        }
    ],
    "MetaBundleMap%7B%22where%22:%7B%22or%22:%5B%7B%22and%22:%5B%7B%22Application%22:%22studio%22%7D,%7B%22Page%22:%22%22%7D%5D%7D,%7B%22and%22:%5B%7B%22Application%22:%22studio%22%7D,%7B%22Page%22:%22c3c38e00-90b7-11eb-a4bd-7da498ed85b5%22%7D%5D%7D%5D%7D%7Duid,Type,Name,Resource": [],
    "mmf.getSlideDetailsById%7B%22uid%22:%22c3c38e00-90b7-11eb-a4bd-7da498ed85b5%22%7Ddata.slide": {
        "uid": "c3c38e00-90b7-11eb-a4bd-7da498ed85b5",
        "Name": "ComponentFrame",
        "Scope": "studio",
        "Type": "FreeForm",
        "Path": "/component/:params",
        "Styles": ".topPreviewContainer {\n    height: fit-content !important;\n}",
        "props": {
            "1fea96a0-90ff-11eb-a4bd-7da498ed85b5": {
                "uid": "1fea96a0-90ff-11eb-a4bd-7da498ed85b5",
                "Name": "scope",
                "Value": ""
            },
            "45c7ea60-90fc-11eb-a4bd-7da498ed85b5": {
                "uid": "45c7ea60-90fc-11eb-a4bd-7da498ed85b5",
                "Name": "name",
                "Value": ""
            },
            "c4144610-90b7-11eb-a4bd-7da498ed85b5": {
                "uid": "c4144610-90b7-11eb-a4bd-7da498ed85b5",
                "Name": "props",
                "Value": ""
            }
        },
        "slots": {
            "f9ff8b70-90fa-11eb-a4bd-7da498ed85b5": {
                "uid": "f9ff8b70-90fa-11eb-a4bd-7da498ed85b5",
                "xposition": 0,
                "yposition": 0,
                "width": 96,
                "height": 80,
                "minwidth": 0,
                "minheight": 0,
                "maxwidth": 96,
                "maxheight": 80,
                "resize": null,
                "move": null,
                "Layout": "default",
                "widget": {
                    "uid": "fa4a01f0-90fa-11eb-a4bd-7da498ed85b5",
                    "component": {
                        "uid": "5bb8c650-90f7-11eb-a4bd-7da498ed85b5",
                        "Name": "RenderComponent",
                        "Scope": "studio",
                        "Type": "React",
                        "WebComponent": null,
                        "Version": "1.0.0",
                        "Props": {
                            "ComponentName": null,
                            "ComponentScope": "studio",
                            "ComponentParameters": "{}",
                            "Name": null
                        }
                    },
                    "widgetproperties": {
                        "TriggerActionOnChange": {
                            "uid": "188ef930-9101-11eb-a4bd-7da498ed85b5",
                            "name": "TriggerActionOnChange",
                            "value": "true"
                        },
                        "__Pageparam__ComponentName": {
                            "uid": "3ce430e0-90ff-11eb-a4bd-7da498ed85b5",
                            "name": "__Pageparam__ComponentName",
                            "value": "name"
                        },
                        "__Pageparam__ComponentScope": {
                            "uid": "452b2dd0-90ff-11eb-a4bd-7da498ed85b5",
                            "name": "__Pageparam__ComponentScope",
                            "value": "scope"
                        },
                        "__Pageparam__ComponentParameters": {
                            "uid": "4ed36870-90ff-11eb-a4bd-7da498ed85b5",
                            "name": "__Pageparam__ComponentParameters",
                            "value": "props"
                        },
                        "Name": {
                            "uid": "4fb69950-90fb-11eb-a4bd-7da498ed85b5",
                            "name": "Name",
                            "value": "RenderComponent"
                        },
                        "ComponentName": {
                            "uid": "7cba3af0-90fc-11eb-a4bd-7da498ed85b5",
                            "name": "ComponentName",
                            "value": ""
                        },
                        "ComponentScope": {
                            "uid": "c23908b0-90ff-11eb-a4bd-7da498ed85b5",
                            "name": "ComponentScope",
                            "value": ""
                        },
                        "ComponentParameters": {
                            "uid": "c808c410-90ff-11eb-a4bd-7da498ed85b5",
                            "name": "ComponentParameters",
                            "value": ""
                        }
                    },
                    "widgetactions": {}
                }
            }
        }
    },
    "mmf.getSlidePropsById%7B%22uid%22:%22c3c38e00-90b7-11eb-a4bd-7da498ed85b5%22%7Ddata.slide": {
        "uid": "c3c38e00-90b7-11eb-a4bd-7da498ed85b5",
        "Name": "ComponentFrame",
        "Scope": "studio",
        "Type": "FreeForm",
        "Path": "/component/:params",
        "props": {
            "scope": "",
            "name": "",
            "props": ""
        }
    },
    "mmf.getSlideProps%7B%22pageId%22:%22c3c38e00-90b7-11eb-a4bd-7da498ed85b5%22%7Ddata.MetaSlideProps.MetaSlidePropsFind": {
        "scope": "",
        "name": "",
        "props": ""
    },
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22FormTemplate%22,%22View%22:%22Default%22,%22Scope%22:%22studio%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "77d44ff0-83ee-11eb-b84e-93a050de95db",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"schema\":{\"code\":\"schema\",\"label\":\"schema\",\"type\":\"string\",\"name\":\"schema\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},\"uischema\":{\"code\":\"uischema\",\"label\":\"uischema\",\"type\":\"string\",\"name\":\"uischema\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},\"default\":{\"code\":\"default\",\"label\":\"default\",\"type\":\"string\",\"name\":\"default\"},\"listschema\":{\"code\":\"listschema\",\"label\":\"listschema\",\"type\":\"string\",\"name\":\"listschema\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"rawschema\":{\"code\":\"rawschema\",\"label\":\"rawschema\",\"type\":\"string\",\"name\":\"rawschema\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},\"rawuischema\":{\"code\":\"rawuischema\",\"label\":\"rawuischema\",\"type\":\"string\",\"name\":\"rawuischema\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},\"rawlistschema\":{\"code\":\"rawlistschema\",\"label\":\"rawlistschema\",\"type\":\"string\",\"name\":\"rawlistschema\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Model\":{\"code\":\"Model\",\"label\":\"Model\",\"type\":\"string\",\"name\":\"Model\",\"widgetType\":\"Reference\",\"tableName\":\"MetaModel\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"View\":{\"code\":\"View\",\"label\":\"View\",\"type\":\"string\",\"name\":\"View\"},\"ModelName\":{\"code\":\"ModelName\",\"label\":\"ModelName\",\"type\":\"string\",\"name\":\"ModelName\"},\"GeneratedUI\":{\"code\":\"GeneratedUI\",\"label\":\"GeneratedUI\",\"type\":\"boolean\",\"name\":\"GeneratedUI\"},\"GeneratedList\":{\"code\":\"GeneratedList\",\"label\":\"GeneratedList\",\"type\":\"boolean\",\"name\":\"GeneratedList\"},\"Theme\":{\"code\":\"Theme\",\"label\":\"Theme\",\"type\":\"string\",\"name\":\"Theme\",\"widgetType\":\"Reference\",\"tableName\":\"FormTheme_studio\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Model\":{\"code\":\"Model\",\"label\":\"Model\",\"type\":\"string\",\"name\":\"Model\",\"widgetType\":\"Reference\",\"tableName\":\"MetaModel\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"View\":{\"code\":\"View\",\"label\":\"View\",\"type\":\"string\",\"name\":\"View\"},\"ModelName\":{\"code\":\"ModelName\",\"label\":\"ModelName\",\"type\":\"string\",\"name\":\"ModelName\"},\"GeneratedUI\":{\"code\":\"GeneratedUI\",\"label\":\"GeneratedUI\",\"type\":\"boolean\",\"name\":\"GeneratedUI\"},\"GeneratedList\":{\"code\":\"GeneratedList\",\"label\":\"GeneratedList\",\"type\":\"boolean\",\"name\":\"GeneratedList\"},\"Theme\":{\"code\":\"Theme\",\"label\":\"Theme\",\"type\":\"string\",\"name\":\"Theme\",\"widgetType\":\"Reference\",\"tableName\":\"FormTheme_studio\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}}}"
        }
    ],
    "FormTemplate_studio%7B%7Duid,Name,Scope,Model,View,ModelName,GeneratedUI,GeneratedList,Theme": [
        {
            "uid": "00b712f0-824e-11eb-9b97-c98340ba04d3",
            "Name": "ModelField_Default",
            "Scope": "studio",
            "Model": "55158900-d423-11ea-84d6-cf0129194199",
            "View": "Default",
            "ModelName": "ModelField",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "0303a580-746d-11eb-9f27-656e9d52f979",
            "Name": "Defect_Default",
            "Scope": "agilecore",
            "Model": "0213c740-746d-11eb-9f27-656e9d52f979",
            "View": "Default",
            "ModelName": "Defect",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "0708ffb0-9991-11eb-ba01-67948a9bbedb",
            "Name": "ControlTheme_Default",
            "Scope": "studio",
            "Model": "18006c90-994b-11eb-ba01-67948a9bbedb",
            "View": "Default",
            "ModelName": "ControlTheme",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "07dd9f10-5cdb-11eb-b0ac-e32bd614ab39",
            "Name": "Doctor_Default",
            "Scope": "appointment",
            "Model": "05ea3380-5cdb-11eb-b0ac-e32bd614ab39",
            "View": "Default",
            "ModelName": "Doctor",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "0ae6c950-7335-11eb-9f47-7de7b654d8df",
            "Name": "AccountBalanceSheet",
            "Scope": "crm",
            "Model": "",
            "View": "",
            "ModelName": "",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "0c5931a0-7e44-11eb-a3cf-39ae28036b92",
            "Name": "MetaComponentAction_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaComponentAction",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "130a9c90-7071-11eb-805d-1d1986854aa7",
            "Name": "Employee_Default",
            "Scope": "crm",
            "Model": "120d9ef0-7071-11eb-805d-1d1986854aa7",
            "View": "Default",
            "ModelName": "Employee",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "18e06f50-7e4f-11eb-a3cf-32bd47036b92",
            "Name": "MetaOperationHook_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaOperationHook",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "18e06f50-7e4f-11eb-a3cf-39ae28036b92",
            "Name": "MetaWidgetAction_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaWidgetAction",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "1bf274c0-706e-11eb-805d-1d1986854aa7",
            "Name": "Warehouse_Default",
            "Scope": "crm",
            "Model": "1af1f4b0-706e-11eb-805d-1d1986854aa7",
            "View": "Default",
            "ModelName": "Warehouse",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "1c3af800-7f2b-11eb-a3cf-39ae28036b92",
            "Name": "SrsteeUserGroup_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "SrsteeUserGroup",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "1cc815d0-9300-11eb-a4bd-7da498ed85b5",
            "Name": "MetaLocalSync_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaLocalSync",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "25c6b7a0-78a1-11eb-a9d7-e3c5acd479ba",
            "Name": "ProductItem_Default",
            "Scope": "crm",
            "Model": "02b95020-78cd-11eb-9ce1-e7492a2683f7",
            "View": "Default",
            "ModelName": "ProductItem",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "2669d520-41dd-11eb-b886-810e138508df",
            "Name": "TestForm1",
            "Scope": "studio",
            "Model": "",
            "View": "",
            "ModelName": "",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "2838f660-706d-11eb-805d-1d1986854aa7",
            "Name": "Country_Default",
            "Scope": "crm",
            "Model": "27539f70-706d-11eb-805d-1d1986854aa7",
            "View": "Default",
            "ModelName": "Country",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "2e20bec0-746c-11eb-9f27-656e9d52f979",
            "Name": "TeamMember_Default",
            "Scope": "agilecore",
            "Model": "2d0b7e30-746c-11eb-9f27-656e9d52f979",
            "View": "Default",
            "ModelName": "TeamMember",
            "GeneratedUI": true,
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "31e43cc0-7427-11eb-9234-0742a608ec48",
            "Name": "PurchaseOrder_Default",
            "Scope": "crm",
            "Model": "309aa5c0-7427-11eb-9234-0742a608ec48",
            "View": "Default",
            "ModelName": "PurchaseOrder",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "33978c40-7e52-11eb-a3cf-39ae28036b92",
            "Name": "MetaScope_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaScope",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "343f40b0-6db9-11eb-b755-b195ba5452ad",
            "Name": "Composition_Default",
            "Scope": "pharma",
            "Model": "31e80a40-6db9-11eb-b755-b195ba5452ad",
            "View": "Default",
            "ModelName": "Composition",
            "GeneratedUI": true,
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "346a9b40-5764-11eb-a638-d95bfca5c886",
            "Name": "VariantPricingRules_custom1",
            "Scope": "pos",
            "Model": "1f5487b0-f1cb-11ea-83d9-51bb12c859eb",
            "View": "custom1",
            "ModelName": "VariantPricingRules",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "36ebf2e0-7066-11eb-805d-1d1986854aa7",
            "Name": "Department_Default",
            "Scope": "crm",
            "Model": "360849a0-7066-11eb-805d-1d1986854aa7",
            "View": "Default",
            "ModelName": "Department",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "37eec060-78cb-11eb-9ce1-e7492a2683f7",
            "Name": "MetaPalette_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaPalette",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "383aaa20-7e34-11eb-a3cf-39ae28036b92",
            "Name": "MetaComponentState_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaComponentState",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "398af030-a439-11eb-87f5-41baa2365190",
            "Name": "DataSource_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaDataSource",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "3ae8baf0-93b0-11eb-856d-05f275e0b59a",
            "Name": "Customer_Default",
            "Scope": "accounting",
            "Model": "38b427b0-93b0-11eb-856d-05f275e0b59a",
            "View": "Default",
            "ModelName": "Customer",
            "GeneratedUI": true,
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "3b395160-92ff-11eb-a4bd-7da498ed85b5",
            "Name": "MetaRouteRequires_Default",
            "Scope": "mmf",
            "Model": "MetaRoute",
            "View": "Default",
            "ModelName": "MetaRouteRequires",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "44e9e5d0-6f23-11eb-a88e-337264a1ff65",
            "Name": "Company_Default",
            "Scope": "crm",
            "Model": "42a9e0e0-6f23-11eb-a88e-337264a1ff65",
            "View": "Default",
            "ModelName": "Company",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "46b75c80-8af3-11eb-b582-d11e34753cab",
            "Name": "TestModal2",
            "Scope": "crm",
            "Model": "",
            "View": "",
            "ModelName": "",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "474ead50-7f28-11eb-a3cf-39ae28036b92",
            "Name": "SrsteeRecordACLRole_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "SrsteeRecordACLRole",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "4a0bb130-9f37-11eb-ba1c-7f6db0e3ef7f",
            "Name": "ApplicationTheme_Default",
            "Scope": "studio",
            "Model": "48609940-9f37-11eb-ba1c-7f6db0e3ef7f",
            "View": "Default",
            "ModelName": "ApplicationTheme",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "4b964ea0-706d-11eb-805d-1d1986854aa7",
            "Name": "States_Default",
            "Scope": "crm",
            "Model": "4aa0f220-706d-11eb-805d-1d1986854aa7",
            "View": "Default",
            "ModelName": "States",
            "GeneratedUI": true,
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "516fe220-707a-11eb-805d-1d1986854aa7",
            "Name": "CostCenter_Default",
            "Scope": "crm",
            "Model": "8781c620-706c-11eb-805d-1d1986854aa7",
            "View": "Default",
            "ModelName": "CostCenter",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "52e52240-7e4a-11eb-a3cf-39ae28036b92",
            "Name": "MetaReusableScript_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaReusableScript",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "55c3ec90-93b1-11eb-856d-05f275e0b59a",
            "Name": "ItemEntry_Default",
            "Scope": "accounting",
            "Model": "53664d80-93b1-11eb-856d-05f275e0b59a",
            "View": "Default",
            "ModelName": "ItemEntry",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "597c9940-746c-11eb-9f27-656e9d52f979",
            "Name": "Team_Default",
            "Scope": "agilecore",
            "Model": "f888ce10-746b-11eb-9f27-656e9d52f979",
            "View": "Default",
            "ModelName": "Team",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "5a9ee430-7f17-11eb-a3cf-39ae28036b92",
            "Name": "SrsteeTableACL_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "SrsteeTableACL",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "5f2ec380-7409-11eb-9019-b542e2b0daa0",
            "Name": "DosageForm_Default",
            "Scope": "crm",
            "Model": "5e581290-7409-11eb-9019-b542e2b0daa0",
            "View": "Default",
            "ModelName": "DosageForm",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "61a92d50-7f15-11eb-a3cf-39ae28036b92",
            "Name": "MetaProperty_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaProperty",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "679f17b0-83de-11eb-b84e-93a050de95db",
            "Name": "FormActions_Default",
            "Scope": "studio",
            "Model": "65c352d0-83de-11eb-b84e-93a050de95db",
            "View": "Default",
            "ModelName": "FormActions",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "689bff60-7f2a-11eb-a3cf-39ae28036b92",
            "Name": "SrsteeUserRole_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "SrsteeUserRole",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "69481860-746a-11eb-9f27-656e9d52f979",
            "Name": "Release_Default",
            "Scope": "agilecore",
            "Model": "686fb9c0-746a-11eb-9f27-656e9d52f979",
            "View": "Default",
            "ModelName": "Release",
            "GeneratedUI": true,
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "6b5e4e60-7e53-11eb-a3cf-39ae28036b92",
            "Name": "MetaSlide_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaSlide",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "7753c6c0-9a12-11eb-88f1-119921dbf335",
            "Name": "ActivitySelector",
            "Scope": "workflow",
            "Model": "",
            "View": "",
            "ModelName": "",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "77d44ff0-83ee-11eb-b84e-93a050de95db",
            "Name": "FormTemplate_Default",
            "Scope": "studio",
            "Model": "5fa26760-3fc8-11eb-b43d-4d65ccbfa01e",
            "View": "Default",
            "ModelName": "FormTemplate",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "781685e0-5cda-11eb-b0ac-e32bd614ab39",
            "Name": "Speciality_Default",
            "Scope": "appointment",
            "Model": "766fb3b0-5cda-11eb-b0ac-e32bd614ab39",
            "View": "Default",
            "ModelName": "Speciality",
            "GeneratedUI": true,
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "781cbb50-b459-11eb-99d3-0d9d1761c6fb",
            "Name": "AutoNumber_Default",
            "Scope": "studio",
            "Model": "75dcb660-b459-11eb-99d3-0d9d1761c6fb",
            "View": "Default",
            "ModelName": "AutoNumber",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "79693440-4265-11eb-b886-810e138508df",
            "Name": "TestForm2",
            "Scope": "studio",
            "Model": "",
            "View": "",
            "ModelName": "",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "79c3afe0-9ac3-11eb-88f1-119921dbf335",
            "Name": "TestDemo3_Default",
            "Scope": "studio",
            "Model": "77b06040-9ac3-11eb-88f1-119921dbf335",
            "View": "Default",
            "ModelName": "TestDemo3",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "7c89ef20-706e-11eb-805d-1d1986854aa7",
            "Name": "ProductCategory_Default",
            "Scope": "crm",
            "Model": "7b8b91f0-706e-11eb-805d-1d1986854aa7",
            "View": "Default",
            "ModelName": "ProductCategory",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "7f3f0140-7e49-11eb-a3cf-39ae28036b92",
            "Name": "MetaRestMethod_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaRestMethod",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "7fc91e20-5810-11eb-a3a1-058d6c35de65",
            "Name": "VariantPricingRules_Default",
            "Scope": "pos",
            "Model": "1f5487b0-f1cb-11ea-83d9-51bb12c859eb",
            "View": "Default",
            "ModelName": "VariantPricingRules",
            "GeneratedUI": true,
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "81580ff0-6f24-11eb-a88e-337264a1ff65",
            "Name": "Address_Default",
            "Scope": "crm",
            "Model": "7f63ba00-6f24-11eb-a88e-337264a1ff65",
            "View": "Default",
            "ModelName": "Address",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "830739d0-93b3-11eb-856d-05f275e0b59a",
            "Name": "Invoice_Default",
            "Scope": "accounting",
            "Model": "09cf54b0-9388-11eb-856d-05f275e0b59a",
            "View": "Default",
            "ModelName": "Invoice",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "85913fc0-7f1d-11eb-a3cf-39ae28036b92",
            "Name": "SrsteeFieldACL_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "SrsteeFieldACL",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "862fac30-7f29-11eb-a3cf-39ae28036b92",
            "Name": "SrsteeGroup_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "SrsteeGroup",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "8725da50-9807-11eb-8912-cd01a55dad3f",
            "Name": "ModelBuilder",
            "Scope": "studio",
            "Model": "",
            "View": "",
            "ModelName": "",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "891e7850-7e24-11eb-a3cf-39ae28036b92",
            "Name": "MetaComponent_Default",
            "Scope": "mmf",
            "Model": "MetaLocalSync",
            "View": "Default",
            "ModelName": "MetaComponent",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "8929aaa0-7e1e-11eb-a3cf-39ae28036b92",
            "Name": "MetaPaletteItem_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaPaletteItem",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "89bc6500-746b-11eb-9f27-656e9d52f979",
            "Name": "ScrumMember_Default",
            "Scope": "agilecore",
            "Model": "88cef7c0-746b-11eb-9f27-656e9d52f979",
            "View": "Default",
            "ModelName": "ScrumMember",
            "GeneratedUI": true,
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "8b49ba40-7a96-11eb-9e38-d5c898336ee7",
            "Name": "SrsteeUser_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "SrsteeUser",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "8b8fad70-9a12-11eb-88f1-119921dbf335",
            "Name": "WorkflowCategory_Default",
            "Scope": "workflow",
            "Model": "898c8a70-9a12-11eb-88f1-119921dbf335",
            "View": "Default",
            "ModelName": "WorkflowCategory",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "8d46fbc0-92fe-11eb-a4bd-7da498ed85b5",
            "Name": "MetaRoute_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaRoute",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "8ff53600-7f2d-11eb-a3cf-39ae28036b92",
            "Name": "MetaQuery_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaQuery",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "92dc3d40-706f-11eb-805d-1d1986854aa7",
            "Name": "Transactions_Default",
            "Scope": "crm",
            "Model": "91ec37f0-706f-11eb-805d-1d1986854aa7",
            "View": "Default",
            "ModelName": "Transactions",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "93515d70-9372-11eb-a4bd-7da498ed85b5",
            "Name": "WorkflowVersion_Default",
            "Scope": "workflow",
            "Model": "54843710-1e75-11eb-a30a-a5c828913b33",
            "View": "Default",
            "ModelName": "WorkflowVersion",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "93bdeee0-7068-11eb-805d-1d1986854aa7",
            "Name": "Item_Default",
            "Scope": "crm",
            "Model": "92e409a0-7068-11eb-805d-1d1986854aa7",
            "View": "Default",
            "ModelName": "Item",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "9a315590-706e-11eb-805d-1d1986854aa7",
            "Name": "ProductSubCategory_Default",
            "Scope": "crm",
            "Model": "9937b350-706e-11eb-805d-1d1986854aa7",
            "View": "Default",
            "ModelName": "ProductSubCategory",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "9b748b50-83f3-11eb-b84e-93a050de95db",
            "Name": "VendorVariant_Default",
            "Scope": "pos",
            "Model": "ae5cdcb0-2ff0-11eb-983c-55d7c395c2e4",
            "View": "Default",
            "ModelName": "VendorVariant",
            "GeneratedUI": true,
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "9d31ccb0-5cd8-11eb-b0ac-e32bd614ab39",
            "Name": "Patient_Default",
            "Scope": "appointment",
            "Model": "884d8e30-bf7e-11ea-b6f2-13a090ae60ee",
            "View": "Default",
            "ModelName": "Patient",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "a1f21a90-bab4-11eb-819f-b75a8651a80d",
            "Name": "Tax",
            "Scope": "accounting",
            "Model": "",
            "View": "Default",
            "ModelName": "",
            "GeneratedUI": true,
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "a2a8efa0-9371-11eb-a4bd-7da498ed85b5",
            "Name": "ServiceTask_Default",
            "Scope": "workflow",
            "Model": "e06b56f0-1e75-11eb-a30a-a5c828913b33",
            "View": "Default",
            "ModelName": "ServiceTask",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "a4817800-bab4-11eb-8449-8115f58150cd",
            "Name": "Tax_Default",
            "Scope": "accounting",
            "Model": "a2886720-bab4-11eb-9fc3-5bba890aa666",
            "View": "Default",
            "ModelName": "Tax",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "a583a2c0-6f26-11eb-a88e-337264a1ff65",
            "Name": "Asset_Default",
            "Scope": "asset",
            "Model": "a3198090-6f26-11eb-a88e-337264a1ff65",
            "View": "Default",
            "ModelName": "Asset",
            "GeneratedUI": true,
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "a5de5df0-994c-11eb-ba01-67948a9bbedb",
            "Name": "FormTheme_Default",
            "Scope": "studio",
            "Model": "f6e790a0-994b-11eb-ba01-67948a9bbedb",
            "View": "Default",
            "ModelName": "FormTheme",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "a8eec920-7427-11eb-9234-0742a608ec48",
            "Name": "PurchaseOrderItem_Default",
            "Scope": "crm",
            "Model": "a7be5f70-7427-11eb-9234-0742a608ec48",
            "View": "Default",
            "ModelName": "PurchaseOrderItem",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "a9892c80-7f2c-11eb-a3cf-39ae28036b92",
            "Name": "MetaSlideAction_Default",
            "Scope": "mmf",
            "Model": "MetaWidgetAction",
            "View": "Default",
            "ModelName": "MetaSlideAction",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "ab1c8080-5c6b-11eb-9cd0-cdd92b5a8dba",
            "Name": "WorkItem_Default",
            "Scope": "agilecore",
            "Model": "68f7f5a0-a950-11ea-967e-23ce1d0dc4d9",
            "View": "Default",
            "ModelName": "WorkItem",
            "GeneratedUI": true,
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "b0f663b0-5cdc-11eb-b0ac-e32bd614ab39",
            "Name": "WorkingHours_Default",
            "Scope": "appointment",
            "Model": "af4b99e0-5cdc-11eb-b0ac-e32bd614ab39",
            "View": "Default",
            "ModelName": "WorkingHours",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "b538a5a0-7f28-11eb-a3cf-39ae28036b92",
            "Name": "SrsteeFieldACLRole_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "SrsteeFieldACLRole",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "b71b98a0-9a12-11eb-88f1-119921dbf335",
            "Name": "WorkflowSubCategory_Default",
            "Scope": "workflow",
            "Model": "b4e46d50-9a12-11eb-88f1-119921dbf335",
            "View": "Default",
            "ModelName": "WorkflowSubCategory",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "bd5fd590-7fd8-11eb-9b97-c98340ba04d3",
            "Name": "MetaModel_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaModel",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "bffd6940-7f27-11eb-a3cf-39ae28036b92",
            "Name": "SrsteeTableACLRole_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "SrsteeTableACLRole",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "c236a5d0-6f20-11eb-a88e-337264a1ff65",
            "Name": "Account_Default",
            "Scope": "crm",
            "Model": "bf0b0860-6f20-11eb-a88e-337264a1ff65",
            "View": "Default",
            "ModelName": "Account",
            "GeneratedUI": true,
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "c42f1460-5f0f-11eb-9d92-8504f340ace4",
            "Name": "Appointment_Default",
            "Scope": "appointment",
            "Model": "c29e6240-5f0f-11eb-9d92-8504f340ace4",
            "View": "Default",
            "ModelName": "Appointment",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "c52fd530-706b-11eb-805d-1d1986854aa7",
            "Name": "Variant_Default",
            "Scope": "crm",
            "Model": "c44aa550-706b-11eb-805d-1d1986854aa7",
            "View": "Default",
            "ModelName": "Variant",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "c5483ac0-a456-11eb-87f5-41baa2365190",
            "Name": "ExternalModel_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaXModel",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "c70adf00-6d03-11eb-bd26-b91b8d104a2b",
            "Name": "Product_Default",
            "Scope": "pharma",
            "Model": "c52afb70-6d03-11eb-bd26-b91b8d104a2b",
            "View": "Default",
            "ModelName": "Product",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "c9adbca0-6ff1-11eb-805d-1d1986854aa7",
            "Name": "Company_Tab",
            "Scope": "crm",
            "Model": "42a9e0e0-6f23-11eb-a88e-337264a1ff65",
            "View": "Tab",
            "ModelName": "Company",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "caaa1510-7e36-11eb-a3cf-39ae28036b92",
            "Name": "MetaComponentProps_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaComponentProps",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "cb4798c0-6578-11eb-adc1-9f56977e733b",
            "Name": "MyTesting Rules",
            "Scope": "studio",
            "Model": "",
            "View": "",
            "ModelName": "",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "ce5f8040-7f18-11eb-a3cf-39ae28036b92",
            "Name": "SrsteeRecordACL_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "SrsteeRecordACL",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "cf8660d0-6d00-11eb-a523-d57096654973",
            "Name": "Manufacturer_Default",
            "Scope": "pharma",
            "Model": "cbc36560-6d00-11eb-a523-d57096654973",
            "View": "Default",
            "ModelName": "Manufacturer",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "cfa7ecc0-9206-11eb-a4bd-7da498ed85b5",
            "Name": "VendorProductVariant_Default",
            "Scope": "pos",
            "Model": "00a37ac0-101a-11eb-8f54-2bd5e56b68a8",
            "View": "Default",
            "ModelName": "VendorProductVariant",
            "GeneratedUI": true,
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "d2d4da80-5b23-11eb-a3a1-058d6c35de65",
            "Name": "Project_Default",
            "Scope": "agilecore",
            "Model": "2199eeb0-a4ba-11ea-9201-51ea2d5a3fdc",
            "View": "Default",
            "ModelName": "Project",
            "GeneratedUI": true,
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "d68b1270-452f-11eb-b3a0-3160645881e7",
            "Name": "MyForm2",
            "Scope": "demo2",
            "Model": "",
            "View": "",
            "ModelName": "",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "d7c82130-7f15-11eb-a3cf-39ae28036b92",
            "Name": "MetaRelationship_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaRelationship",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "d8b7d160-70bc-11eb-805d-1d1986854aa7",
            "Name": "AccountTransfer",
            "Scope": "crm",
            "Model": "",
            "View": "",
            "ModelName": "",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "da1cd5b0-5cde-11eb-b0ac-e32bd614ab39",
            "Name": "Slot_Default",
            "Scope": "appointment",
            "Model": "d85730e0-5cde-11eb-b0ac-e32bd614ab39",
            "View": "Default",
            "ModelName": "Slot",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "e0117c30-7f22-11eb-a3cf-39ae28036b92",
            "Name": "SrsteeRole_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "SrsteeRole",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "e1b8b8f0-9ac0-11eb-88f1-119921dbf335",
            "Name": "CreateRecord",
            "Scope": "workflow",
            "Model": "",
            "View": "",
            "ModelName": "",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "e8556cc0-746a-11eb-9f27-656e9d52f979",
            "Name": "Story_Default",
            "Scope": "agilecore",
            "Model": "e771c380-746a-11eb-9f27-656e9d52f979",
            "View": "Default",
            "ModelName": "Story",
            "GeneratedUI": true,
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "ea2c9330-7469-11eb-9f27-656e9d52f979",
            "Name": "Sprint_Default",
            "Scope": "agilecore",
            "Model": "e9390b70-7469-11eb-9f27-656e9d52f979",
            "View": "Default",
            "ModelName": "Sprint",
            "GeneratedUI": true,
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "eb219e80-706c-11eb-805d-1d1986854aa7",
            "Name": "Supplier_Default",
            "Scope": "crm",
            "Model": "ea3b8440-706c-11eb-805d-1d1986854aa7",
            "View": "Default",
            "ModelName": "Supplier",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "ee6a0070-b480-11eb-82d6-2d087058067a",
            "Name": "SideNavMenu_Default",
            "Scope": "studio",
            "Model": "ded55ab0-b480-11eb-82d6-2d087058067a",
            "View": "Default",
            "ModelName": "SideNavMenu",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "f0c24580-706a-11eb-805d-1d1986854aa7",
            "Name": "VariantNames_Default",
            "Scope": "crm",
            "Model": "efe30910-706a-11eb-805d-1d1986854aa7",
            "View": "Default",
            "ModelName": "VariantNames",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "f0c9bd80-9372-11eb-a4bd-7da498ed85b5",
            "Name": "WorkflowResults_Default",
            "Scope": "workflow",
            "Model": "0994b680-1e75-11eb-a30a-a5c828913b33",
            "View": "Default",
            "ModelName": "WorkflowResults",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "f10fe280-b585-11eb-bf9c-538fef06ad58",
            "Name": "Address_Parent",
            "Scope": "crm",
            "Model": "7f63ba00-6f24-11eb-a88e-337264a1ff65",
            "View": "Parent",
            "ModelName": "Address",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "f46db290-7f16-11eb-a3cf-39ae28036b92",
            "Name": "SrsteeACL_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "SrsteeACL",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "f4ca1880-7072-11eb-805d-1d1986854aa7",
            "Name": "Transactions_Transfer",
            "Scope": "crm",
            "Model": "91ec37f0-706f-11eb-805d-1d1986854aa7",
            "View": "Transfer",
            "ModelName": "Transactions",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "faee7740-8ac3-11eb-b582-d11e34753cab",
            "Name": "TestModal1",
            "Scope": "crm",
            "Model": "",
            "View": "Default",
            "ModelName": "",
            "GeneratedUI": "",
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "ff5e8b20-7e58-11eb-a3cf-39ae28036b92",
            "Name": "MetaSlideProps_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaSlideProps",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        },
        {
            "uid": "ff790500-7f29-11eb-a3cf-39ae28036b92",
            "Name": "SrsteeGroupRole_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "SrsteeGroupRole",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "MetaModel%7B%22where%22:%7B%22uid%22:%7B%22inq%22:%5B%2255158900-d423-11ea-84d6-cf0129194199%22,%220213c740-746d-11eb-9f27-656e9d52f979%22,%2218006c90-994b-11eb-ba01-67948a9bbedb%22,%2205ea3380-5cdb-11eb-b0ac-e32bd614ab39%22,%22%22,%22%22,%22120d9ef0-7071-11eb-805d-1d1986854aa7%22,%22%22,%22%22,%221af1f4b0-706e-11eb-805d-1d1986854aa7%22,%22%22,%22%22,%2202b95020-78cd-11eb-9ce1-e7492a2683f7%22,%22%22,%2227539f70-706d-11eb-805d-1d1986854aa7%22,%222d0b7e30-746c-11eb-9f27-656e9d52f979%22,%22309aa5c0-7427-11eb-9234-0742a608ec48%22,%22%22,%2231e80a40-6db9-11eb-b755-b195ba5452ad%22,%221f5487b0-f1cb-11ea-83d9-51bb12c859eb%22,%22360849a0-7066-11eb-805d-1d1986854aa7%22,%22%22,%22%22,%22%22,%2238b427b0-93b0-11eb-856d-05f275e0b59a%22,%22MetaRoute%22,%2242a9e0e0-6f23-11eb-a88e-337264a1ff65%22,%22%22,%22%22,%2248609940-9f37-11eb-ba1c-7f6db0e3ef7f%22,%224aa0f220-706d-11eb-805d-1d1986854aa7%22,%228781c620-706c-11eb-805d-1d1986854aa7%22,%22%22,%2253664d80-93b1-11eb-856d-05f275e0b59a%22,%22f888ce10-746b-11eb-9f27-656e9d52f979%22,%22%22,%225e581290-7409-11eb-9019-b542e2b0daa0%22,%22%22,%2265c352d0-83de-11eb-b84e-93a050de95db%22,%22%22,%22686fb9c0-746a-11eb-9f27-656e9d52f979%22,%22%22,%22%22,%225fa26760-3fc8-11eb-b43d-4d65ccbfa01e%22,%22766fb3b0-5cda-11eb-b0ac-e32bd614ab39%22,%2275dcb660-b459-11eb-99d3-0d9d1761c6fb%22,%22%22,%2277b06040-9ac3-11eb-88f1-119921dbf335%22,%227b8b91f0-706e-11eb-805d-1d1986854aa7%22,%22%22,%221f5487b0-f1cb-11ea-83d9-51bb12c859eb%22,%227f63ba00-6f24-11eb-a88e-337264a1ff65%22,%2209cf54b0-9388-11eb-856d-05f275e0b59a%22,%22%22,%22%22,%22%22,%22MetaLocalSync%22,%22%22,%2288cef7c0-746b-11eb-9f27-656e9d52f979%22,%22%22,%22898c8a70-9a12-11eb-88f1-119921dbf335%22,%22%22,%22%22,%2291ec37f0-706f-11eb-805d-1d1986854aa7%22,%2254843710-1e75-11eb-a30a-a5c828913b33%22,%2292e409a0-7068-11eb-805d-1d1986854aa7%22,%229937b350-706e-11eb-805d-1d1986854aa7%22,%22ae5cdcb0-2ff0-11eb-983c-55d7c395c2e4%22,%22884d8e30-bf7e-11ea-b6f2-13a090ae60ee%22,%22%22,%22e06b56f0-1e75-11eb-a30a-a5c828913b33%22,%22a2886720-bab4-11eb-9fc3-5bba890aa666%22,%22a3198090-6f26-11eb-a88e-337264a1ff65%22,%22f6e790a0-994b-11eb-ba01-67948a9bbedb%22,%22a7be5f70-7427-11eb-9234-0742a608ec48%22,%22MetaWidgetAction%22,%2268f7f5a0-a950-11ea-967e-23ce1d0dc4d9%22,%22af4b99e0-5cdc-11eb-b0ac-e32bd614ab39%22,%22%22,%22b4e46d50-9a12-11eb-88f1-119921dbf335%22,%22%22,%22%22,%22bf0b0860-6f20-11eb-a88e-337264a1ff65%22,%22c29e6240-5f0f-11eb-9d92-8504f340ace4%22,%22c44aa550-706b-11eb-805d-1d1986854aa7%22,%22%22,%22c52afb70-6d03-11eb-bd26-b91b8d104a2b%22,%2242a9e0e0-6f23-11eb-a88e-337264a1ff65%22,%22%22,%22%22,%22%22,%22cbc36560-6d00-11eb-a523-d57096654973%22,%2200a37ac0-101a-11eb-8f54-2bd5e56b68a8%22,%222199eeb0-a4ba-11ea-9201-51ea2d5a3fdc%22,%22%22,%22%22,%22%22,%22d85730e0-5cde-11eb-b0ac-e32bd614ab39%22,%22%22,%22%22,%22e771c380-746a-11eb-9f27-656e9d52f979%22,%22e9390b70-7469-11eb-9f27-656e9d52f979%22,%22ea3b8440-706c-11eb-805d-1d1986854aa7%22,%22ded55ab0-b480-11eb-82d6-2d087058067a%22,%22efe30910-706a-11eb-805d-1d1986854aa7%22,%220994b680-1e75-11eb-a30a-a5c828913b33%22,%227f63ba00-6f24-11eb-a88e-337264a1ff65%22,%22%22,%2291ec37f0-706f-11eb-805d-1d1986854aa7%22,%22%22,%22%22,%22%22%5D%7D%7D%7Duid,Name": [
        {
            "uid": "00a37ac0-101a-11eb-8f54-2bd5e56b68a8",
            "Name": "VendorProductVariant"
        },
        {
            "uid": "0213c740-746d-11eb-9f27-656e9d52f979",
            "Name": "Defect"
        },
        {
            "uid": "02b95020-78cd-11eb-9ce1-e7492a2683f7",
            "Name": "ProductItem"
        },
        {
            "uid": "05ea3380-5cdb-11eb-b0ac-e32bd614ab39",
            "Name": "Doctor"
        },
        {
            "uid": "0994b680-1e75-11eb-a30a-a5c828913b33",
            "Name": "WorkflowResults"
        },
        {
            "uid": "09cf54b0-9388-11eb-856d-05f275e0b59a",
            "Name": "Invoice"
        },
        {
            "uid": "120d9ef0-7071-11eb-805d-1d1986854aa7",
            "Name": "Employee"
        },
        {
            "uid": "18006c90-994b-11eb-ba01-67948a9bbedb",
            "Name": "ControlTheme"
        },
        {
            "uid": "1af1f4b0-706e-11eb-805d-1d1986854aa7",
            "Name": "Warehouse"
        },
        {
            "uid": "1f5487b0-f1cb-11ea-83d9-51bb12c859eb",
            "Name": "VariantPricingRules"
        },
        {
            "uid": "2199eeb0-a4ba-11ea-9201-51ea2d5a3fdc",
            "Name": "Project"
        },
        {
            "uid": "27539f70-706d-11eb-805d-1d1986854aa7",
            "Name": "Country"
        },
        {
            "uid": "2d0b7e30-746c-11eb-9f27-656e9d52f979",
            "Name": "TeamMember"
        },
        {
            "uid": "309aa5c0-7427-11eb-9234-0742a608ec48",
            "Name": "PurchaseOrder"
        },
        {
            "uid": "31e80a40-6db9-11eb-b755-b195ba5452ad",
            "Name": "Composition"
        },
        {
            "uid": "360849a0-7066-11eb-805d-1d1986854aa7",
            "Name": "Department"
        },
        {
            "uid": "38b427b0-93b0-11eb-856d-05f275e0b59a",
            "Name": "Customer"
        },
        {
            "uid": "42a9e0e0-6f23-11eb-a88e-337264a1ff65",
            "Name": "Company"
        },
        {
            "uid": "48609940-9f37-11eb-ba1c-7f6db0e3ef7f",
            "Name": "ApplicationTheme"
        },
        {
            "uid": "4aa0f220-706d-11eb-805d-1d1986854aa7",
            "Name": "States"
        },
        {
            "uid": "53664d80-93b1-11eb-856d-05f275e0b59a",
            "Name": "ItemEntry"
        },
        {
            "uid": "54843710-1e75-11eb-a30a-a5c828913b33",
            "Name": "WorkflowVersion"
        },
        {
            "uid": "55158900-d423-11ea-84d6-cf0129194199",
            "Name": "ModelField"
        },
        {
            "uid": "5e581290-7409-11eb-9019-b542e2b0daa0",
            "Name": "DosageForm"
        },
        {
            "uid": "5fa26760-3fc8-11eb-b43d-4d65ccbfa01e",
            "Name": "FormTemplate"
        },
        {
            "uid": "65c352d0-83de-11eb-b84e-93a050de95db",
            "Name": "FormActions"
        },
        {
            "uid": "686fb9c0-746a-11eb-9f27-656e9d52f979",
            "Name": "Release"
        },
        {
            "uid": "68f7f5a0-a950-11ea-967e-23ce1d0dc4d9",
            "Name": "WorkItem"
        },
        {
            "uid": "75dcb660-b459-11eb-99d3-0d9d1761c6fb",
            "Name": "AutoNumber"
        },
        {
            "uid": "766fb3b0-5cda-11eb-b0ac-e32bd614ab39",
            "Name": "Speciality"
        },
        {
            "uid": "77b06040-9ac3-11eb-88f1-119921dbf335",
            "Name": "TestDemo3"
        },
        {
            "uid": "7b8b91f0-706e-11eb-805d-1d1986854aa7",
            "Name": "ProductCategory"
        },
        {
            "uid": "7f63ba00-6f24-11eb-a88e-337264a1ff65",
            "Name": "Address"
        },
        {
            "uid": "8781c620-706c-11eb-805d-1d1986854aa7",
            "Name": "CostCenter"
        },
        {
            "uid": "884d8e30-bf7e-11ea-b6f2-13a090ae60ee",
            "Name": "Patient"
        },
        {
            "uid": "88cef7c0-746b-11eb-9f27-656e9d52f979",
            "Name": "ScrumMember"
        },
        {
            "uid": "898c8a70-9a12-11eb-88f1-119921dbf335",
            "Name": "WorkflowCategory"
        },
        {
            "uid": "91ec37f0-706f-11eb-805d-1d1986854aa7",
            "Name": "Transactions"
        },
        {
            "uid": "92e409a0-7068-11eb-805d-1d1986854aa7",
            "Name": "Item"
        },
        {
            "uid": "9937b350-706e-11eb-805d-1d1986854aa7",
            "Name": "ProductSubCategory"
        },
        {
            "uid": "a2886720-bab4-11eb-9fc3-5bba890aa666",
            "Name": "Tax"
        },
        {
            "uid": "a3198090-6f26-11eb-a88e-337264a1ff65",
            "Name": "Asset"
        },
        {
            "uid": "a7be5f70-7427-11eb-9234-0742a608ec48",
            "Name": "PurchaseOrderItem"
        },
        {
            "uid": "ae5cdcb0-2ff0-11eb-983c-55d7c395c2e4",
            "Name": "VendorVariant"
        },
        {
            "uid": "af4b99e0-5cdc-11eb-b0ac-e32bd614ab39",
            "Name": "WorkingHours"
        },
        {
            "uid": "b4e46d50-9a12-11eb-88f1-119921dbf335",
            "Name": "WorkflowSubCategory"
        },
        {
            "uid": "bf0b0860-6f20-11eb-a88e-337264a1ff65",
            "Name": "Account"
        },
        {
            "uid": "c29e6240-5f0f-11eb-9d92-8504f340ace4",
            "Name": "Appointment"
        },
        {
            "uid": "c44aa550-706b-11eb-805d-1d1986854aa7",
            "Name": "Variant"
        },
        {
            "uid": "c52afb70-6d03-11eb-bd26-b91b8d104a2b",
            "Name": "Product"
        },
        {
            "uid": "cbc36560-6d00-11eb-a523-d57096654973",
            "Name": "Manufacturer"
        },
        {
            "uid": "d85730e0-5cde-11eb-b0ac-e32bd614ab39",
            "Name": "Slot"
        },
        {
            "uid": "ded55ab0-b480-11eb-82d6-2d087058067a",
            "Name": "SideNavMenu"
        },
        {
            "uid": "e06b56f0-1e75-11eb-a30a-a5c828913b33",
            "Name": "ServiceTask"
        },
        {
            "uid": "e771c380-746a-11eb-9f27-656e9d52f979",
            "Name": "Story"
        },
        {
            "uid": "e9390b70-7469-11eb-9f27-656e9d52f979",
            "Name": "Sprint"
        },
        {
            "uid": "ea3b8440-706c-11eb-805d-1d1986854aa7",
            "Name": "Supplier"
        },
        {
            "uid": "efe30910-706a-11eb-805d-1d1986854aa7",
            "Name": "VariantNames"
        },
        {
            "uid": "f6e790a0-994b-11eb-ba01-67948a9bbedb",
            "Name": "FormTheme"
        },
        {
            "uid": "f888ce10-746b-11eb-9f27-656e9d52f979",
            "Name": "Team"
        }
    ],
    "FormTheme_studio%7B%22where%22:%7B%22uid%22:%7B%22inq%22:%5B%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22,%22f47ae380-99a5-11eb-ba01-67948a9bbedb%22%5D%7D%7D%7Duid,Name": [
        {
            "uid": "f47ae380-99a5-11eb-ba01-67948a9bbedb",
            "Name": "Default-1"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22FormTemplate%22%7D,%7B%22Scope%22:%22studio%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "77d44ff0-83ee-11eb-b84e-93a050de95db",
            "Name": "FormTemplate_Default",
            "Scope": "studio",
            "Model": "5fa26760-3fc8-11eb-b43d-4d65ccbfa01e",
            "View": "Default",
            "ModelName": "FormTemplate",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"schema\":{\"code\":\"schema\",\"label\":\"schema\",\"type\":\"string\",\"name\":\"schema\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},\"uischema\":{\"code\":\"uischema\",\"label\":\"uischema\",\"type\":\"string\",\"name\":\"uischema\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},\"default\":{\"code\":\"default\",\"label\":\"default\",\"type\":\"string\",\"name\":\"default\"},\"listschema\":{\"code\":\"listschema\",\"label\":\"listschema\",\"type\":\"string\",\"name\":\"listschema\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"rawschema\":{\"code\":\"rawschema\",\"label\":\"rawschema\",\"type\":\"string\",\"name\":\"rawschema\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},\"rawuischema\":{\"code\":\"rawuischema\",\"label\":\"rawuischema\",\"type\":\"string\",\"name\":\"rawuischema\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},\"rawlistschema\":{\"code\":\"rawlistschema\",\"label\":\"rawlistschema\",\"type\":\"string\",\"name\":\"rawlistschema\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Model\":{\"code\":\"Model\",\"label\":\"Model\",\"type\":\"string\",\"name\":\"Model\",\"widgetType\":\"Reference\",\"tableName\":\"MetaModel\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"View\":{\"code\":\"View\",\"label\":\"View\",\"type\":\"string\",\"name\":\"View\"},\"ModelName\":{\"code\":\"ModelName\",\"label\":\"ModelName\",\"type\":\"string\",\"name\":\"ModelName\"},\"GeneratedUI\":{\"code\":\"GeneratedUI\",\"label\":\"GeneratedUI\",\"type\":\"boolean\",\"name\":\"GeneratedUI\"},\"GeneratedList\":{\"code\":\"GeneratedList\",\"label\":\"GeneratedList\",\"type\":\"boolean\",\"name\":\"GeneratedList\"},\"Theme\":{\"code\":\"Theme\",\"label\":\"Theme\",\"type\":\"string\",\"name\":\"Theme\",\"widgetType\":\"Reference\",\"tableName\":\"FormTheme_studio\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"schema\",\"label\":\"schema\",\"dataType\":\"text\",\"name\":\"schema\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},{\"code\":\"uischema\",\"label\":\"uischema\",\"dataType\":\"text\",\"name\":\"uischema\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},{\"code\":\"default\",\"label\":\"default\",\"dataType\":\"string\",\"name\":\"default\"},{\"code\":\"listschema\",\"label\":\"listschema\",\"dataType\":\"text\",\"name\":\"listschema\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"rawschema\",\"label\":\"rawschema\",\"dataType\":\"text\",\"name\":\"rawschema\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},{\"code\":\"rawuischema\",\"label\":\"rawuischema\",\"dataType\":\"text\",\"name\":\"rawuischema\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},{\"code\":\"rawlistschema\",\"label\":\"rawlistschema\",\"dataType\":\"text\",\"name\":\"rawlistschema\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},{\"code\":\"Scope\",\"label\":\"Scope\",\"dataType\":\"string\",\"name\":\"Scope\"},{\"code\":\"Model\",\"label\":\"Model\",\"dataType\":\"string\",\"name\":\"Model\",\"widgetType\":\"Reference\",\"tableName\":\"MetaModel\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},{\"code\":\"View\",\"label\":\"View\",\"dataType\":\"string\",\"name\":\"View\"},{\"code\":\"ModelName\",\"label\":\"ModelName\",\"dataType\":\"string\",\"name\":\"ModelName\"},{\"code\":\"GeneratedUI\",\"label\":\"GeneratedUI\",\"dataType\":\"boolean\",\"name\":\"GeneratedUI\"},{\"code\":\"GeneratedList\",\"label\":\"GeneratedList\",\"dataType\":\"boolean\",\"name\":\"GeneratedList\"},{\"code\":\"Theme\",\"label\":\"Theme\",\"dataType\":\"string\",\"name\":\"Theme\",\"widgetType\":\"Reference\",\"tableName\":\"FormTheme_studio\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Form Template - Details\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Name\",\"label\":\"Name\"},{\"type\":\"Control\",\"scope\":\"#/properties/Scope\",\"label\":\"Scope\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/View\"},{\"type\":\"Control\",\"scope\":\"#/properties/Model\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/default\"},{\"type\":\"Control\",\"scope\":\"#/properties/Theme\",\"label\":\"Theme\"}]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Form Template - Details\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Name\",\"label\":\"Name\"},{\"dataType\":\"Control\",\"scope\":\"Scope\",\"label\":\"Scope\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"View\"},{\"dataType\":\"Control\",\"scope\":\"Model\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"default\"},{\"dataType\":\"Control\",\"scope\":\"Theme\",\"label\":\"Theme\"}]}],\"rule\":{}}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%225fa26760-3fc8-11eb-b43d-4d65ccbfa01e%22%7D,%7B%22or%22:%5B%7B%22Form%22:%2277d44ff0-83ee-11eb-b84e-93a050de95db%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22uid%22:%220303a580-746d-11eb-9f27-656e9d52f979%22%7D%7Duid,Name,schema,uischema,default,listschema,srs_created_at,srs_updated_at,srs_created_by,srs_updated_by,rawschema,rawuischema,rawlistschema,Scope,Model,View,ModelName,GeneratedUI,GeneratedList,Theme": [
        {
            "uid": "0303a580-746d-11eb-9f27-656e9d52f979",
            "Name": "Defect_Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Number\":{\"code\":\"Number\",\"label\":\"Number\",\"type\":\"string\",\"name\":\"Number\"},\"STR\":{\"code\":\"STR\",\"label\":\"STR\",\"type\":\"string\",\"name\":\"STR\"},\"Developer\":{\"code\":\"Developer\",\"label\":\"Developer\",\"type\":\"string\",\"name\":\"Developer\",\"widgetType\":\"Reference\",\"tableName\":\"ScrumMember_agilecore\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"QualityEngineer\":{\"code\":\"QualityEngineer\",\"label\":\"QualityEngineer\",\"type\":\"string\",\"name\":\"QualityEngineer\",\"widgetType\":\"Reference\",\"tableName\":\"ScrumMember_agilecore\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"Sprint\":{\"code\":\"Sprint\",\"label\":\"Sprint\",\"type\":\"string\",\"name\":\"Sprint\",\"widgetType\":\"Reference\",\"tableName\":\"Sprint_agilecore\",\"displayField\":\"Name\",\"secondaryDisplayField\":\"Number\",\"filter\":\"{}\",\"searchfields\":\"Name,Number\"},\"Team\":{\"code\":\"Team\",\"label\":\"Team\",\"type\":\"string\",\"name\":\"Team\",\"widgetType\":\"Reference\",\"tableName\":\"Team_agilecore\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"Story\":{\"code\":\"Story\",\"label\":\"Story\",\"type\":\"string\",\"name\":\"Story\",\"widgetType\":\"Reference\",\"tableName\":\"Story_agilecore\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"Status\":{\"code\":\"Status\",\"label\":\"Status\",\"type\":\"string\",\"name\":\"Status\"}}}",
            "uischema": "{\"type\":\"VerticalLayout\",\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Form - Defect\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"save\",\"label\":\"Save\"}],\"align\":\"left\"},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Name\"},{\"type\":\"Control\",\"scope\":\"#/properties/Number\"}]},{\"type\":\"Group\",\"label\":\"Details\",\"elements\":[{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/STR\"},{\"type\":\"Control\",\"scope\":\"#/properties/Developer\"},{\"type\":\"Control\",\"scope\":\"#/properties/QualityEngineer\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Sprint\"}]}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Team\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Status\"},{\"type\":\"Control\",\"scope\":\"#/properties/Story\"},{\"type\":\"Control\",\"subtype\":\"EmbeddedList\",\"scope\":\"#/properties/form_list\",\"label\":\"Items\",\"name\":\"Stories\",\"title\":\"Stories\",\"fields\":[{\"name\":\"Field1\",\"value\":\"Field1\",\"dataType\":\"string\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"choice1\",\"value\":\"choiceval1\"},{\"name\":\"choice2\",\"value\":\"choiceval2\"},{\"name\":\"choice3\",\"value\":\"choiceval3\"}]},{\"name\":\"Field2\",\"value\":\"Field2\",\"dataType\":\"string\",\"widgetType\":\"Reference\",\"tableName\":\"FormActions_studio\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},{\"name\":\"Field3\",\"value\":\"Field3\",\"dataType\":\"string\",\"widgetType\":\"Dynamic Choice\",\"tableName\":\"FormActions_studio\",\"choiceLabelFieldName\":\"Name\",\"choiceValueFieldName\":\"Model\",\"condition\":\"{}\"}],\"listActions\":[],\"rowActions\":[]}]}]}",
            "default": "{\"Name\":\"\",\"STR\":\"\",\"form_actions\":{\"parent\":{\"Name\":\"\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Number\":{\"code\":\"Number\",\"label\":\"Number\",\"type\":\"string\",\"name\":\"Number\"},\"STR\":{\"code\":\"STR\",\"label\":\"STR\",\"type\":\"string\",\"name\":\"STR\"},\"Developer\":{\"code\":\"Developer\",\"label\":\"Developer\",\"type\":\"string\",\"name\":\"Developer\",\"widgetType\":\"Reference\",\"tableName\":\"ScrumMember_agilecore\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"QualityEngineer\":{\"code\":\"QualityEngineer\",\"label\":\"QualityEngineer\",\"type\":\"string\",\"name\":\"QualityEngineer\",\"widgetType\":\"Reference\",\"tableName\":\"ScrumMember_agilecore\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"Sprint\":{\"code\":\"Sprint\",\"label\":\"Sprint\",\"type\":\"string\",\"name\":\"Sprint\",\"widgetType\":\"Reference\",\"tableName\":\"Sprint_agilecore\",\"displayField\":\"Name\",\"secondaryDisplayField\":\"Number\",\"filter\":\"{}\",\"searchfields\":\"Name,Number\"},\"Team\":{\"code\":\"Team\",\"label\":\"Team\",\"type\":\"string\",\"name\":\"Team\",\"widgetType\":\"Reference\",\"tableName\":\"Team_agilecore\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"Story\":{\"code\":\"Story\",\"label\":\"Story\",\"type\":\"string\",\"name\":\"Story\",\"widgetType\":\"Reference\",\"tableName\":\"Story_agilecore\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"Status\":{\"code\":\"Status\",\"label\":\"Status\",\"type\":\"string\",\"name\":\"Status\"}}}",
            "srs_created_at": "2021-02-21T17:48:32.000Z",
            "srs_updated_at": "2021-02-21T17:48:32.000Z",
            "srs_created_by": "System",
            "srs_updated_by": "System",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"Number\",\"label\":\"Number\",\"dataType\":\"string\",\"name\":\"Number\"},{\"code\":\"STR\",\"label\":\"STR\",\"dataType\":\"string\",\"name\":\"STR\"},{\"code\":\"Developer\",\"label\":\"Developer\",\"dataType\":\"string\",\"name\":\"Developer\",\"widgetType\":\"Reference\",\"tableName\":\"ScrumMember_agilecore\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},{\"code\":\"QualityEngineer\",\"label\":\"QualityEngineer\",\"dataType\":\"string\",\"name\":\"QualityEngineer\",\"widgetType\":\"Reference\",\"tableName\":\"ScrumMember_agilecore\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},{\"code\":\"Sprint\",\"label\":\"Sprint\",\"dataType\":\"string\",\"name\":\"Sprint\",\"widgetType\":\"Reference\",\"tableName\":\"Sprint_agilecore\",\"displayField\":\"Name\",\"secondaryDisplayField\":\"Number\",\"filter\":\"{}\",\"searchfields\":\"Name,Number\"},{\"code\":\"Team\",\"label\":\"Team\",\"dataType\":\"string\",\"name\":\"Team\",\"widgetType\":\"Reference\",\"tableName\":\"Team_agilecore\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},{\"code\":\"Story\",\"label\":\"Story\",\"dataType\":\"string\",\"name\":\"Story\",\"widgetType\":\"Reference\",\"tableName\":\"Story_agilecore\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},{\"code\":\"Status\",\"label\":\"Status\",\"dataType\":\"string\",\"name\":\"Status\"}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Form - Defect\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"draggable\":\"\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"save\",\"label\":\"Save\"}],\"align\":\"left\"},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Name\",\"draggable\":\"\"},{\"dataType\":\"Control\",\"scope\":\"Number\",\"draggable\":\"\"}]},{\"dataType\":\"Group\",\"label\":\"Details\",\"Properties\":[{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"STR\",\"draggable\":false},{\"dataType\":\"Control\",\"scope\":\"Developer\"},{\"dataType\":\"Control\",\"scope\":\"QualityEngineer\",\"draggable\":false}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Sprint\"}]}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Team\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Status\",\"draggable\":\"\"},{\"dataType\":\"Control\",\"scope\":\"Story\",\"draggable\":false},{\"dataType\":\"List\",\"listType\":\"Embedded\",\"label\":\"Items\",\"fields\":[{\"name\":\"Field1\",\"value\":\"Field1\",\"dataType\":\"string\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"choice1\",\"value\":\"choiceval1\"},{\"name\":\"choice2\",\"value\":\"choiceval2\"},{\"name\":\"choice3\",\"value\":\"choiceval3\"}]},{\"name\":\"Field2\",\"value\":\"Field2\",\"dataType\":\"string\",\"widgetType\":\"Reference\",\"tableName\":\"FormActions_studio\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},{\"name\":\"Field3\",\"value\":\"Field3\",\"dataType\":\"string\",\"widgetType\":\"Dynamic Choice\",\"tableName\":\"FormActions_studio\",\"choiceLabelFieldName\":\"Name\",\"choiceValueFieldName\":\"Model\",\"condition\":\"{}\"}],\"title\":\"Stories\",\"name\":\"Stories\",\"draggable\":false}]}]}",
            "rawlistschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"Number\",\"label\":\"Number\",\"dataType\":\"string\",\"name\":\"Number\"},{\"code\":\"STR\",\"label\":\"STR\",\"dataType\":\"string\",\"name\":\"STR\"},{\"code\":\"Developer\",\"label\":\"Developer\",\"dataType\":\"string\",\"name\":\"Developer\",\"widgetType\":\"Reference\",\"tableName\":\"ScrumMember_agilecore\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},{\"code\":\"QualityEngineer\",\"label\":\"QualityEngineer\",\"dataType\":\"string\",\"name\":\"QualityEngineer\",\"widgetType\":\"Reference\",\"tableName\":\"ScrumMember_agilecore\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},{\"code\":\"Sprint\",\"label\":\"Sprint\",\"dataType\":\"string\",\"name\":\"Sprint\",\"widgetType\":\"Reference\",\"tableName\":\"Sprint_agilecore\",\"displayField\":\"Name\",\"secondaryDisplayField\":\"Number\",\"filter\":\"{}\",\"searchfields\":\"Name,Number\"},{\"code\":\"Team\",\"label\":\"Team\",\"dataType\":\"string\",\"name\":\"Team\",\"widgetType\":\"Reference\",\"tableName\":\"Team_agilecore\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},{\"code\":\"Story\",\"label\":\"Story\",\"dataType\":\"string\",\"name\":\"Story\",\"widgetType\":\"Reference\",\"tableName\":\"Story_agilecore\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},{\"code\":\"Status\",\"label\":\"Status\",\"dataType\":\"string\",\"name\":\"Status\"}]}",
            "Scope": "agilecore",
            "Model": "0213c740-746d-11eb-9f27-656e9d52f979",
            "View": "Default",
            "ModelName": "Defect",
            "GeneratedUI": "",
            "GeneratedList": true,
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22FormActions%22,%22View%22:%22Default%22,%22Scope%22:%22studio%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "679f17b0-83de-11eb-b84e-93a050de95db",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Model\":{\"code\":\"Model\",\"label\":\"Model\",\"type\":\"string\",\"name\":\"Model\",\"widgetType\":\"Reference\",\"tableName\":\"MetaModel\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\",\"choiceLabelFieldName\":\"Name\",\"choiceValueFieldName\":\"Name\",\"condition\":\"{}\"},\"SourceActionType\":{\"code\":\"SourceActionType\",\"label\":\"SourceActionType\",\"type\":\"string\",\"name\":\"SourceActionType\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"Choose a Type\"},{\"name\":\"onChange\",\"value\":\"onChange\"},{\"name\":\"onClick\",\"value\":\"onClick\"},{\"name\":\"onLoad\",\"value\":\"onLoad\"},{\"name\":\"onModalChange\",\"value\":\"onModalChange\"}]},\"SourceField\":{\"code\":\"SourceField\",\"label\":\"SourceField\",\"type\":\"string\",\"name\":\"SourceField\",\"tableName\":\"ModelField_studio\",\"displayField\":\"FieldCode\",\"filter\":\"{\\\"Model\\\": \\\"${Model}\\\"}\",\"searchfields\":\"FieldCode,FieldName\",\"choiceLabelFieldName\":\"FieldName\",\"choiceValueFieldName\":\"FieldCode\",\"condition\":\"{\\\"Model\\\": \\\"${Model}\\\"}\"},\"TargetActionType\":{\"code\":\"TargetActionType\",\"label\":\"TargetActionType\",\"type\":\"string\",\"name\":\"TargetActionType\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"Choose a Type\"},{\"name\":\"Show\",\"value\":\"Show\"},{\"name\":\"Hide\",\"value\":\"Hide\"},{\"name\":\"Required\",\"value\":\"Required\"},{\"name\":\"Not Required\",\"value\":\"NotRequired\"},{\"name\":\"ReadOnly\",\"value\":\"ReadOnly\"},{\"name\":\"ReadWrite\",\"value\":\"ReadWrite\"},{\"name\":\"Scripted\",\"value\":\"Scripted\"}]},\"TargetActionField\":{\"code\":\"TargetActionField\",\"label\":\"TargetActionField\",\"type\":\"string\",\"name\":\"TargetActionField\",\"widgetType\":\"Dynamic Choice\",\"tableName\":\"ModelField_studio\",\"displayField\":\"FieldCode\",\"secondaryDisplayField\":\"FieldCode\",\"filter\":\"{\\\"Model\\\": \\\"${Model}\\\"}\",\"searchfields\":\"FieldCode,FieldName\",\"choiceLabelFieldName\":\"FieldName\",\"choiceValueFieldName\":\"FieldCode\",\"condition\":\"{\\\"Model\\\": \\\"${Model}\\\"}\"},\"Order\":{\"code\":\"Order\",\"label\":\"Order\",\"type\":\"number\",\"name\":\"Order\"},\"TargetActionScript\":{\"code\":\"TargetActionScript\",\"label\":\"TargetActionScript\",\"type\":\"string\",\"name\":\"TargetActionScript\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"40vh\",\"language\":\"javascript\"},\"Form\":{\"code\":\"Form\",\"label\":\"Form\",\"type\":\"string\",\"name\":\"Form\",\"widgetType\":\"Reference\",\"tableName\":\"FormTemplate_studio\",\"displayField\":\"Name\",\"filter\":\"{\\\"Model\\\": \\\"${Model}\\\"}\",\"searchfields\":\"Name\"},\"Condition\":{\"code\":\"Condition\",\"label\":\"Match If\",\"type\":\"string\",\"name\":\"Condition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"30vh\",\"language\":\"javascript\"},\"SourceAction\":{\"code\":\"SourceAction\",\"label\":\"Source Action Name\",\"type\":\"string\",\"name\":\"SourceAction\"},\"PreventDefaultSave\":{\"code\":\"PreventDefaultSave\",\"label\":\"PreventDefaultSave\",\"type\":\"boolean\",\"name\":\"PreventDefaultSave\"},\"PreventDefaultShowList\":{\"code\":\"PreventDefaultShowList\",\"label\":\"PreventDefaultShowList\",\"type\":\"boolean\",\"name\":\"PreventDefaultShowList\"},\"Active\":{\"code\":\"Active\",\"label\":\"Active\",\"type\":\"boolean\",\"name\":\"Active\"},\"CustomSource\":{\"code\":\"CustomSource\",\"label\":\"Custom Source\",\"type\":\"string\",\"name\":\"CustomSource\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"SourceActionType\":{\"code\":\"SourceActionType\",\"label\":\"SourceActionType\",\"type\":\"string\",\"name\":\"SourceActionType\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"Choose a Type\"},{\"name\":\"onChange\",\"value\":\"onChange\"},{\"name\":\"onClick\",\"value\":\"onClick\"},{\"name\":\"onLoad\",\"value\":\"onLoad\"},{\"name\":\"onModalChange\",\"value\":\"onModalChange\"}]},\"SourceField\":{\"code\":\"SourceField\",\"label\":\"SourceField\",\"type\":\"string\",\"name\":\"SourceField\",\"widgetType\":\"Dynamic Choice\",\"tableName\":\"ModelField_studio\",\"displayField\":\"FieldCode\",\"filter\":\"{\\\"Model\\\": \\\"${Model}\\\"}\",\"searchfields\":\"FieldCode,FieldName\",\"choiceLabelFieldName\":\"FieldName\",\"choiceValueFieldName\":\"FieldCode\",\"condition\":\"{\\\"Model\\\": \\\"${Model}\\\"}\"},\"SourceAction\":{\"code\":\"SourceAction\",\"label\":\"Source Action Name\",\"type\":\"string\",\"name\":\"SourceAction\"},\"Model\":{\"code\":\"Model\",\"label\":\"Model\",\"type\":\"string\",\"name\":\"Model\",\"widgetType\":\"Reference\",\"tableName\":\"MetaModel\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\",\"choiceLabelFieldName\":\"Name\",\"choiceValueFieldName\":\"Name\",\"condition\":\"{}\"},\"Form\":{\"code\":\"Form\",\"label\":\"Form\",\"type\":\"string\",\"name\":\"Form\",\"widgetType\":\"Reference\",\"tableName\":\"FormTemplate_studio\",\"displayField\":\"Name\",\"filter\":\"{\\\"Model\\\": \\\"${Model}\\\"}\",\"searchfields\":\"Name\"},\"TargetActionType\":{\"code\":\"TargetActionType\",\"label\":\"TargetActionType\",\"type\":\"string\",\"name\":\"TargetActionType\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"Choose a Type\"},{\"name\":\"Show\",\"value\":\"Show\"},{\"name\":\"Hide\",\"value\":\"Hide\"},{\"name\":\"Required\",\"value\":\"Required\"},{\"name\":\"Not Required\",\"value\":\"NotRequired\"},{\"name\":\"ReadOnly\",\"value\":\"ReadOnly\"},{\"name\":\"ReadWrite\",\"value\":\"ReadWrite\"},{\"name\":\"Scripted\",\"value\":\"Scripted\"}]},\"TargetActionField\":{\"code\":\"TargetActionField\",\"label\":\"TargetActionField\",\"type\":\"string\",\"name\":\"TargetActionField\",\"widgetType\":\"Dynamic Choice\",\"tableName\":\"ModelField_studio\",\"displayField\":\"FieldCode\",\"secondaryDisplayField\":\"FieldCode\",\"filter\":\"{\\\"Model\\\": \\\"${Model}\\\"}\",\"searchfields\":\"FieldCode,FieldName\",\"choiceLabelFieldName\":\"FieldName\",\"choiceValueFieldName\":\"FieldCode\",\"condition\":\"{\\\"Model\\\": \\\"${Model}\\\"}\"},\"Order\":{\"code\":\"Order\",\"label\":\"Order\",\"type\":\"number\",\"name\":\"Order\"},\"Active\":{\"code\":\"Active\",\"label\":\"Active\",\"type\":\"boolean\",\"name\":\"Active\"}}}"
        }
    ],
    "FormActions_studio%7B%7Duid,Name,SourceActionType,SourceField,SourceAction,Model,Form,TargetActionType,TargetActionField,Order,Active": [
        {
            "uid": "0b09ebd0-9ac0-11eb-88f1-119921dbf335",
            "Name": "onServiceTaskChange",
            "SourceActionType": "onChange",
            "SourceField": "",
            "SourceAction": "",
            "Model": "",
            "Form": "7753c6c0-9a12-11eb-88f1-119921dbf335",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 100,
            "Active": true
        },
        {
            "uid": "12bd8a40-9bf0-11eb-88f1-119921dbf335",
            "Name": "onActivityModalClose",
            "SourceActionType": "onModalChange",
            "SourceField": "",
            "SourceAction": "",
            "Model": "54843710-1e75-11eb-a30a-a5c828913b33",
            "Form": "93515d70-9372-11eb-a4bd-7da498ed85b5",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 100,
            "Active": true
        },
        {
            "uid": "22c98ee0-b3d6-11eb-99d3-0d9d1761c6fb",
            "Name": "onItemEntryDetele",
            "SourceActionType": "onClick",
            "SourceField": "",
            "SourceAction": "deleteitem",
            "Model": "09cf54b0-9388-11eb-856d-05f275e0b59a",
            "Form": "830739d0-93b3-11eb-856d-05f275e0b59a",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 10,
            "Active": true
        },
        {
            "uid": "277c3110-8b7f-11eb-b582-d11e34753cab",
            "Name": "onItemEntryModalClose",
            "SourceActionType": "onModalChange",
            "SourceField": "",
            "SourceAction": "",
            "Model": "09cf54b0-9388-11eb-856d-05f275e0b59a",
            "Form": "830739d0-93b3-11eb-856d-05f275e0b59a",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 200,
            "Active": true
        },
        {
            "uid": "3839b570-bf7f-11eb-80ad-53395e882ff7",
            "Name": "OnSaveTax",
            "SourceActionType": "onClick",
            "SourceField": "",
            "SourceAction": "save",
            "Model": "a2886720-bab4-11eb-9fc3-5bba890aa666",
            "Form": "a4817800-bab4-11eb-8449-8115f58150cd",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 11,
            "Active": true
        },
        {
            "uid": "3a43ed50-b77c-11eb-bf9c-538fef06ad58",
            "Name": "onLoad",
            "SourceActionType": "onLoad",
            "SourceField": "",
            "SourceAction": "",
            "Model": "0213c740-746d-11eb-9f27-656e9d52f979",
            "Form": "0303a580-746d-11eb-9f27-656e9d52f979",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 100,
            "Active": true
        },
        {
            "uid": "42ea5570-9a8a-11eb-88f1-119921dbf335",
            "Name": "openActivity",
            "SourceActionType": "onClick",
            "SourceField": "",
            "SourceAction": "open_activity",
            "Model": "54843710-1e75-11eb-a30a-a5c828913b33",
            "Form": "93515d70-9372-11eb-a4bd-7da498ed85b5",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 500,
            "Active": true
        },
        {
            "uid": "45267bb0-86b3-11eb-b84e-93a050de95db",
            "Name": "onSerialNumberChange",
            "SourceActionType": "onChange",
            "SourceField": "SerialNumber",
            "SourceAction": "",
            "Model": "02b95020-78cd-11eb-9ce1-e7492a2683f7",
            "Form": "25c6b7a0-78a1-11eb-a9d7-e3c5acd479ba",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 100,
            "Active": true
        },
        {
            "uid": "45eebed0-a42d-11eb-87f5-41baa2365190",
            "Name": "Ignore Action",
            "SourceActionType": "onChange",
            "SourceField": "",
            "SourceAction": "",
            "Model": "09cf54b0-9388-11eb-856d-05f275e0b59a",
            "Form": "830739d0-93b3-11eb-856d-05f275e0b59a",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": "",
            "Active": ""
        },
        {
            "uid": "52f2eb40-bb0e-11eb-9fc3-5bba890aa666",
            "Name": "OnEmbedProductChange",
            "SourceActionType": "onChange",
            "SourceField": "",
            "SourceAction": "",
            "Model": "09cf54b0-9388-11eb-856d-05f275e0b59a",
            "Form": "830739d0-93b3-11eb-856d-05f275e0b59a",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": "",
            "Active": true
        },
        {
            "uid": "54ba9f20-9c52-11eb-88f1-119921dbf335",
            "Name": "onActivitySelectorApply",
            "SourceActionType": "onClick",
            "SourceField": "",
            "SourceAction": "Apply",
            "Model": "",
            "Form": "7753c6c0-9a12-11eb-88f1-119921dbf335",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 100,
            "Active": true
        },
        {
            "uid": "59ea80d0-b3e7-11eb-99d3-0d9d1761c6fb",
            "Name": "onItemIncrement",
            "SourceActionType": "onClick",
            "SourceField": "",
            "SourceAction": "increment",
            "Model": "09cf54b0-9388-11eb-856d-05f275e0b59a",
            "Form": "830739d0-93b3-11eb-856d-05f275e0b59a",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 200,
            "Active": true
        },
        {
            "uid": "5fed5590-93e7-11eb-86f2-9958296e19e9",
            "Name": "onAddEntry",
            "SourceActionType": "onClick",
            "SourceField": "",
            "SourceAction": "Add",
            "Model": "09cf54b0-9388-11eb-856d-05f275e0b59a",
            "Form": "830739d0-93b3-11eb-856d-05f275e0b59a",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 100,
            "Active": true
        },
        {
            "uid": "649b9e90-93eb-11eb-86f2-9958296e19e9",
            "Name": "AddItemEntry",
            "SourceActionType": "onClick",
            "SourceField": "",
            "SourceAction": "Add",
            "Model": "53664d80-93b1-11eb-856d-05f275e0b59a",
            "Form": "55c3ec90-93b1-11eb-856d-05f275e0b59a",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 100,
            "Active": true
        },
        {
            "uid": "75240c90-9740-11eb-8912-cd01a55dad3f",
            "Name": "onPrint",
            "SourceActionType": "onClick",
            "SourceField": "",
            "SourceAction": "print",
            "Model": "09cf54b0-9388-11eb-856d-05f275e0b59a",
            "Form": "830739d0-93b3-11eb-856d-05f275e0b59a",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 100,
            "Active": true
        },
        {
            "uid": "77f22fb0-b3e7-11eb-99d3-0d9d1761c6fb",
            "Name": "onItemDecrement",
            "SourceActionType": "onClick",
            "SourceField": "",
            "SourceAction": "decrement",
            "Model": "09cf54b0-9388-11eb-856d-05f275e0b59a",
            "Form": "830739d0-93b3-11eb-856d-05f275e0b59a",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 200,
            "Active": true
        },
        {
            "uid": "7c658720-9792-11eb-8912-cd01a55dad3a",
            "Name": "onProductSearchChange",
            "SourceActionType": "onChange",
            "SourceField": "OrderId",
            "SourceAction": "",
            "Model": "09cf54b0-9388-11eb-856d-05f275e0b59a",
            "Form": "830739d0-93b3-11eb-856d-05f275e0b59a",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 100,
            "Active": ""
        },
        {
            "uid": "7c658720-9792-11eb-8912-cd01a55dad3f",
            "Name": "onProductSearchChange",
            "SourceActionType": "onChange",
            "SourceField": "SalesPerson",
            "SourceAction": "",
            "Model": "09cf54b0-9388-11eb-856d-05f275e0b59a",
            "Form": "830739d0-93b3-11eb-856d-05f275e0b59a",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 100,
            "Active": true
        },
        {
            "uid": "a4ec2f40-b0c5-11eb-95a7-7f801e78a21f",
            "Name": "onSaveInvoice",
            "SourceActionType": "onClick",
            "SourceField": "",
            "SourceAction": "save",
            "Model": "09cf54b0-9388-11eb-856d-05f275e0b59a",
            "Form": "830739d0-93b3-11eb-856d-05f275e0b59a",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 100,
            "Active": true
        },
        {
            "uid": "b6293b20-bb08-11eb-8a59-7f957c14b749",
            "Name": "onParentChange",
            "SourceActionType": "onChange",
            "SourceField": "Parent",
            "SourceAction": "",
            "Model": "a2886720-bab4-11eb-9fc3-5bba890aa666",
            "Form": "a4817800-bab4-11eb-8449-8115f58150cd",
            "TargetActionType": "Scripted",
            "TargetActionField": "Is_Group",
            "Order": "",
            "Active": true
        },
        {
            "uid": "baaa98f0-8891-11eb-9b02-831389389741",
            "Name": "onClose",
            "SourceActionType": "onClick",
            "SourceField": "SerialNumber",
            "SourceAction": "close",
            "Model": "",
            "Form": "faee7740-8ac3-11eb-b582-d11e34753cab",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 300,
            "Active": true
        },
        {
            "uid": "baaa98f0-8891-11eb-9b02-831689389741",
            "Name": "onConvert",
            "SourceActionType": "onClick",
            "SourceField": "SerialNumber",
            "SourceAction": "convert",
            "Model": "02b95020-78cd-11eb-9ce1-e7492a2683f7",
            "Form": "25c6b7a0-78a1-11eb-a9d7-e3c5acd479ba",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 300,
            "Active": true
        },
        {
            "uid": "baac92d0-87e3-11eb-b84e-93a050de95db",
            "Name": "onSave",
            "SourceActionType": "onClick",
            "SourceField": "SerialNumber",
            "SourceAction": "save",
            "Model": "02b95020-78cd-11eb-9ce1-e7492a2683f7",
            "Form": "25c6b7a0-78a1-11eb-a9d7-e3c5acd479ba",
            "TargetActionType": "Scripted",
            "TargetActionField": "PackSize",
            "Order": 200,
            "Active": true
        },
        {
            "uid": "e166b340-9d2f-11eb-ba1c-7f6db0e3ef7f",
            "Name": "HideEmbedAndListAggregate",
            "SourceActionType": "onLoad",
            "SourceField": "",
            "SourceAction": "",
            "Model": "09cf54b0-9388-11eb-856d-05f275e0b59a",
            "Form": "830739d0-93b3-11eb-856d-05f275e0b59a",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 300,
            "Active": true
        },
        {
            "uid": "ebf88d30-9f35-11eb-ba1c-7f6db0e3ef7f",
            "Name": "calculateAggTotals",
            "SourceActionType": "onChange",
            "SourceField": "",
            "SourceAction": "",
            "Model": "09cf54b0-9388-11eb-856d-05f275e0b59a",
            "Form": "830739d0-93b3-11eb-856d-05f275e0b59a",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 700,
            "Active": true
        },
        {
            "uid": "ed841230-8b8c-11eb-b582-d11e34753cab",
            "Name": "onFormLoad1",
            "SourceActionType": "onLoad",
            "SourceField": "",
            "SourceAction": "",
            "Model": "02b95020-78cd-11eb-9ce1-e7492a2683f7",
            "Form": "25c6b7a0-78a1-11eb-a9d7-e3c5acd479ba",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 400,
            "Active": true
        },
        {
            "uid": "f2ddc1b0-b0c4-11eb-95a7-7f801e78a21f",
            "Name": "onSave",
            "SourceActionType": "onClick",
            "SourceField": "",
            "SourceAction": "save",
            "Model": "09cf54b0-9388-11eb-856d-05f275e0b59a",
            "Form": "830739d0-93b3-11eb-856d-05f275e0b59a",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 800,
            "Active": true
        },
        {
            "uid": "f4b50150-99dc-11eb-ba01-67948a9bbedb",
            "Name": "onSaveWF",
            "SourceActionType": "onClick",
            "SourceField": "",
            "SourceAction": "save_wf",
            "Model": "54843710-1e75-11eb-a30a-a5c828913b33",
            "Form": "93515d70-9372-11eb-a4bd-7da498ed85b5",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 100,
            "Active": true
        },
        {
            "uid": "f5216270-9a02-11eb-88f1-119921dbf335",
            "Name": "onWFPublish",
            "SourceActionType": "onClick",
            "SourceField": "",
            "SourceAction": "publish",
            "Model": "54843710-1e75-11eb-a30a-a5c828913b33",
            "Form": "93515d70-9372-11eb-a4bd-7da498ed85b5",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 200,
            "Active": true
        }
    ],
    "MetaModel%7B%22where%22:%7B%22uid%22:%7B%22inq%22:%5B%22%22,%2254843710-1e75-11eb-a30a-a5c828913b33%22,%2209cf54b0-9388-11eb-856d-05f275e0b59a%22,%2209cf54b0-9388-11eb-856d-05f275e0b59a%22,%22a2886720-bab4-11eb-9fc3-5bba890aa666%22,%220213c740-746d-11eb-9f27-656e9d52f979%22,%2254843710-1e75-11eb-a30a-a5c828913b33%22,%2202b95020-78cd-11eb-9ce1-e7492a2683f7%22,%2209cf54b0-9388-11eb-856d-05f275e0b59a%22,%2209cf54b0-9388-11eb-856d-05f275e0b59a%22,%22%22,%2209cf54b0-9388-11eb-856d-05f275e0b59a%22,%2209cf54b0-9388-11eb-856d-05f275e0b59a%22,%2253664d80-93b1-11eb-856d-05f275e0b59a%22,%2209cf54b0-9388-11eb-856d-05f275e0b59a%22,%2209cf54b0-9388-11eb-856d-05f275e0b59a%22,%2209cf54b0-9388-11eb-856d-05f275e0b59a%22,%2209cf54b0-9388-11eb-856d-05f275e0b59a%22,%2209cf54b0-9388-11eb-856d-05f275e0b59a%22,%22a2886720-bab4-11eb-9fc3-5bba890aa666%22,%22%22,%2202b95020-78cd-11eb-9ce1-e7492a2683f7%22,%2202b95020-78cd-11eb-9ce1-e7492a2683f7%22,%2209cf54b0-9388-11eb-856d-05f275e0b59a%22,%2209cf54b0-9388-11eb-856d-05f275e0b59a%22,%2202b95020-78cd-11eb-9ce1-e7492a2683f7%22,%2209cf54b0-9388-11eb-856d-05f275e0b59a%22,%2254843710-1e75-11eb-a30a-a5c828913b33%22,%2254843710-1e75-11eb-a30a-a5c828913b33%22%5D%7D%7D%7Duid,Name": [
        {
            "uid": "0213c740-746d-11eb-9f27-656e9d52f979",
            "Name": "Defect"
        },
        {
            "uid": "02b95020-78cd-11eb-9ce1-e7492a2683f7",
            "Name": "ProductItem"
        },
        {
            "uid": "09cf54b0-9388-11eb-856d-05f275e0b59a",
            "Name": "Invoice"
        },
        {
            "uid": "53664d80-93b1-11eb-856d-05f275e0b59a",
            "Name": "ItemEntry"
        },
        {
            "uid": "54843710-1e75-11eb-a30a-a5c828913b33",
            "Name": "WorkflowVersion"
        },
        {
            "uid": "a2886720-bab4-11eb-9fc3-5bba890aa666",
            "Name": "Tax"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22uid%22:%7B%22inq%22:%5B%227753c6c0-9a12-11eb-88f1-119921dbf335%22,%2293515d70-9372-11eb-a4bd-7da498ed85b5%22,%22830739d0-93b3-11eb-856d-05f275e0b59a%22,%22830739d0-93b3-11eb-856d-05f275e0b59a%22,%22a4817800-bab4-11eb-8449-8115f58150cd%22,%220303a580-746d-11eb-9f27-656e9d52f979%22,%2293515d70-9372-11eb-a4bd-7da498ed85b5%22,%2225c6b7a0-78a1-11eb-a9d7-e3c5acd479ba%22,%22830739d0-93b3-11eb-856d-05f275e0b59a%22,%22830739d0-93b3-11eb-856d-05f275e0b59a%22,%227753c6c0-9a12-11eb-88f1-119921dbf335%22,%22830739d0-93b3-11eb-856d-05f275e0b59a%22,%22830739d0-93b3-11eb-856d-05f275e0b59a%22,%2255c3ec90-93b1-11eb-856d-05f275e0b59a%22,%22830739d0-93b3-11eb-856d-05f275e0b59a%22,%22830739d0-93b3-11eb-856d-05f275e0b59a%22,%22830739d0-93b3-11eb-856d-05f275e0b59a%22,%22830739d0-93b3-11eb-856d-05f275e0b59a%22,%22830739d0-93b3-11eb-856d-05f275e0b59a%22,%22a4817800-bab4-11eb-8449-8115f58150cd%22,%22faee7740-8ac3-11eb-b582-d11e34753cab%22,%2225c6b7a0-78a1-11eb-a9d7-e3c5acd479ba%22,%2225c6b7a0-78a1-11eb-a9d7-e3c5acd479ba%22,%22830739d0-93b3-11eb-856d-05f275e0b59a%22,%22830739d0-93b3-11eb-856d-05f275e0b59a%22,%2225c6b7a0-78a1-11eb-a9d7-e3c5acd479ba%22,%22830739d0-93b3-11eb-856d-05f275e0b59a%22,%2293515d70-9372-11eb-a4bd-7da498ed85b5%22,%2293515d70-9372-11eb-a4bd-7da498ed85b5%22%5D%7D%7D%7Duid,Name": [
        {
            "uid": "0303a580-746d-11eb-9f27-656e9d52f979",
            "Name": "Defect_Default"
        },
        {
            "uid": "25c6b7a0-78a1-11eb-a9d7-e3c5acd479ba",
            "Name": "ProductItem_Default"
        },
        {
            "uid": "55c3ec90-93b1-11eb-856d-05f275e0b59a",
            "Name": "ItemEntry_Default"
        },
        {
            "uid": "7753c6c0-9a12-11eb-88f1-119921dbf335",
            "Name": "ActivitySelector"
        },
        {
            "uid": "830739d0-93b3-11eb-856d-05f275e0b59a",
            "Name": "Invoice_Default"
        },
        {
            "uid": "93515d70-9372-11eb-a4bd-7da498ed85b5",
            "Name": "WorkflowVersion_Default"
        },
        {
            "uid": "a4817800-bab4-11eb-8449-8115f58150cd",
            "Name": "Tax_Default"
        },
        {
            "uid": "faee7740-8ac3-11eb-b582-d11e34753cab",
            "Name": "TestModal1"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22FormActions%22%7D,%7B%22Scope%22:%22studio%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "679f17b0-83de-11eb-b84e-93a050de95db",
            "Name": "FormActions_Default",
            "Scope": "studio",
            "Model": "65c352d0-83de-11eb-b84e-93a050de95db",
            "View": "Default",
            "ModelName": "FormActions",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Model\":{\"code\":\"Model\",\"label\":\"Model\",\"type\":\"string\",\"name\":\"Model\",\"widgetType\":\"Reference\",\"tableName\":\"MetaModel\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\",\"choiceLabelFieldName\":\"Name\",\"choiceValueFieldName\":\"Name\",\"condition\":\"{}\"},\"SourceActionType\":{\"code\":\"SourceActionType\",\"label\":\"SourceActionType\",\"type\":\"string\",\"name\":\"SourceActionType\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"Choose a Type\"},{\"name\":\"onChange\",\"value\":\"onChange\"},{\"name\":\"onClick\",\"value\":\"onClick\"},{\"name\":\"onLoad\",\"value\":\"onLoad\"},{\"name\":\"onModalChange\",\"value\":\"onModalChange\"}]},\"SourceField\":{\"code\":\"SourceField\",\"label\":\"SourceField\",\"type\":\"string\",\"name\":\"SourceField\",\"tableName\":\"ModelField_studio\",\"displayField\":\"FieldCode\",\"filter\":\"{\\\"Model\\\": \\\"${Model}\\\"}\",\"searchfields\":\"FieldCode,FieldName\",\"choiceLabelFieldName\":\"FieldName\",\"choiceValueFieldName\":\"FieldCode\",\"condition\":\"{\\\"Model\\\": \\\"${Model}\\\"}\"},\"TargetActionType\":{\"code\":\"TargetActionType\",\"label\":\"TargetActionType\",\"type\":\"string\",\"name\":\"TargetActionType\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"Choose a Type\"},{\"name\":\"Show\",\"value\":\"Show\"},{\"name\":\"Hide\",\"value\":\"Hide\"},{\"name\":\"Required\",\"value\":\"Required\"},{\"name\":\"Not Required\",\"value\":\"NotRequired\"},{\"name\":\"ReadOnly\",\"value\":\"ReadOnly\"},{\"name\":\"ReadWrite\",\"value\":\"ReadWrite\"},{\"name\":\"Scripted\",\"value\":\"Scripted\"}]},\"TargetActionField\":{\"code\":\"TargetActionField\",\"label\":\"TargetActionField\",\"type\":\"string\",\"name\":\"TargetActionField\",\"widgetType\":\"Dynamic Choice\",\"tableName\":\"ModelField_studio\",\"displayField\":\"FieldCode\",\"secondaryDisplayField\":\"FieldCode\",\"filter\":\"{\\\"Model\\\": \\\"${Model}\\\"}\",\"searchfields\":\"FieldCode,FieldName\",\"choiceLabelFieldName\":\"FieldName\",\"choiceValueFieldName\":\"FieldCode\",\"condition\":\"{\\\"Model\\\": \\\"${Model}\\\"}\"},\"Order\":{\"code\":\"Order\",\"label\":\"Order\",\"type\":\"number\",\"name\":\"Order\"},\"TargetActionScript\":{\"code\":\"TargetActionScript\",\"label\":\"TargetActionScript\",\"type\":\"string\",\"name\":\"TargetActionScript\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"40vh\",\"language\":\"javascript\"},\"Form\":{\"code\":\"Form\",\"label\":\"Form\",\"type\":\"string\",\"name\":\"Form\",\"widgetType\":\"Reference\",\"tableName\":\"FormTemplate_studio\",\"displayField\":\"Name\",\"filter\":\"{\\\"Model\\\": \\\"${Model}\\\"}\",\"searchfields\":\"Name\"},\"Condition\":{\"code\":\"Condition\",\"label\":\"Match If\",\"type\":\"string\",\"name\":\"Condition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"30vh\",\"language\":\"javascript\"},\"SourceAction\":{\"code\":\"SourceAction\",\"label\":\"Source Action Name\",\"type\":\"string\",\"name\":\"SourceAction\"},\"PreventDefaultSave\":{\"code\":\"PreventDefaultSave\",\"label\":\"PreventDefaultSave\",\"type\":\"boolean\",\"name\":\"PreventDefaultSave\"},\"PreventDefaultShowList\":{\"code\":\"PreventDefaultShowList\",\"label\":\"PreventDefaultShowList\",\"type\":\"boolean\",\"name\":\"PreventDefaultShowList\"},\"Active\":{\"code\":\"Active\",\"label\":\"Active\",\"type\":\"boolean\",\"name\":\"Active\"},\"CustomSource\":{\"code\":\"CustomSource\",\"label\":\"Custom Source\",\"type\":\"string\",\"name\":\"CustomSource\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"Model\",\"label\":\"Model\",\"dataType\":\"string\",\"name\":\"Model\",\"widgetType\":\"Reference\",\"tableName\":\"MetaModel\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\",\"choiceLabelFieldName\":\"Name\",\"choiceValueFieldName\":\"Name\",\"condition\":\"{}\"},{\"code\":\"SourceActionType\",\"label\":\"SourceActionType\",\"dataType\":\"string\",\"name\":\"SourceActionType\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"Choose a Type\"},{\"name\":\"onChange\",\"value\":\"onChange\"},{\"name\":\"onClick\",\"value\":\"onClick\"},{\"name\":\"onLoad\",\"value\":\"onLoad\"},{\"name\":\"onModalChange\",\"value\":\"onModalChange\"}]},{\"code\":\"SourceField\",\"label\":\"SourceField\",\"dataType\":\"string\",\"name\":\"SourceField\",\"tableName\":\"ModelField_studio\",\"displayField\":\"FieldCode\",\"filter\":\"{\\\"Model\\\": \\\"${Model}\\\"}\",\"searchfields\":\"FieldCode,FieldName\",\"choiceLabelFieldName\":\"FieldName\",\"choiceValueFieldName\":\"FieldCode\",\"condition\":\"{\\\"Model\\\": \\\"${Model}\\\"}\"},{\"code\":\"TargetActionType\",\"label\":\"TargetActionType\",\"dataType\":\"string\",\"name\":\"TargetActionType\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"Choose a Type\"},{\"name\":\"Show\",\"value\":\"Show\"},{\"name\":\"Hide\",\"value\":\"Hide\"},{\"name\":\"Required\",\"value\":\"Required\"},{\"name\":\"Not Required\",\"value\":\"NotRequired\"},{\"name\":\"ReadOnly\",\"value\":\"ReadOnly\"},{\"name\":\"ReadWrite\",\"value\":\"ReadWrite\"},{\"name\":\"Scripted\",\"value\":\"Scripted\"}]},{\"code\":\"TargetActionField\",\"label\":\"TargetActionField\",\"dataType\":\"string\",\"name\":\"TargetActionField\",\"widgetType\":\"Dynamic Choice\",\"tableName\":\"ModelField_studio\",\"displayField\":\"FieldCode\",\"secondaryDisplayField\":\"FieldCode\",\"filter\":\"{\\\"Model\\\": \\\"${Model}\\\"}\",\"searchfields\":\"FieldCode,FieldName\",\"choiceLabelFieldName\":\"FieldName\",\"choiceValueFieldName\":\"FieldCode\",\"condition\":\"{\\\"Model\\\": \\\"${Model}\\\"}\"},{\"code\":\"Order\",\"label\":\"Order\",\"dataType\":\"number\",\"name\":\"Order\"},{\"code\":\"TargetActionScript\",\"label\":\"TargetActionScript\",\"dataType\":\"text\",\"name\":\"TargetActionScript\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"40vh\",\"language\":\"javascript\"},{\"code\":\"Form\",\"label\":\"Form\",\"dataType\":\"string\",\"name\":\"Form\",\"widgetType\":\"Reference\",\"tableName\":\"FormTemplate_studio\",\"displayField\":\"Name\",\"filter\":\"{\\\"Model\\\": \\\"${Model}\\\"}\",\"searchfields\":\"Name\"},{\"code\":\"Condition\",\"label\":\"Match If\",\"dataType\":\"text\",\"name\":\"Condition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"30vh\",\"language\":\"javascript\"},{\"code\":\"SourceAction\",\"label\":\"Source Action Name\",\"dataType\":\"string\",\"name\":\"SourceAction\"},{\"code\":\"PreventDefaultSave\",\"label\":\"PreventDefaultSave\",\"dataType\":\"boolean\",\"name\":\"PreventDefaultSave\"},{\"code\":\"PreventDefaultShowList\",\"label\":\"PreventDefaultShowList\",\"dataType\":\"boolean\",\"name\":\"PreventDefaultShowList\"},{\"code\":\"Active\",\"label\":\"Active\",\"dataType\":\"boolean\",\"name\":\"Active\"},{\"code\":\"CustomSource\",\"label\":\"Custom Source\",\"dataType\":\"string\",\"name\":\"CustomSource\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Form Action - Details\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"Group\",\"label\":\"Details\",\"elements\":[{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Name\",\"label\":\"Name\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Model\",\"label\":\"Model\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Form\",\"label\":\"Form\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Order\"},{\"type\":\"Control\",\"scope\":\"#/properties/Active\",\"label\":\"Active\"}]}]},{\"type\":\"Group\",\"label\":\"When to run\",\"elements\":[{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/SourceActionType\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/SourceAction\",\"label\":\"Source Action Name\",\"rule\":{\"condition\":{\"scope\":\"#/properties/SourceActionType\",\"schema\":{\"enum\":[\"onClick\"]}},\"effect\":\"SHOW\"}},{\"type\":\"Control\",\"scope\":\"#/properties/SourceField\",\"widget\":{\"widgetType\":\"Dynamic Choice\",\"tableName\":\"ModelField_studio\",\"condition\":\"{\\\"Model\\\": \\\"${Model}\\\"}\",\"choiceLabelFieldName\":\"FieldName\",\"choiceValueFieldName\":\"FieldCode\",\"draggable\":\"\"},\"rule\":{\"condition\":{\"scope\":\"#/properties/SourceActionType\",\"schema\":{\"enum\":[\"onChange\"]}},\"effect\":\"SHOW\"}},{\"type\":\"Control\",\"scope\":\"#/properties/CustomSource\",\"label\":\"Custom Source\",\"rule\":{\"condition\":{\"scope\":\"#/properties/SourceActionType\",\"schema\":{\"enum\":[\"onChange\"]}},\"effect\":\"SHOW\"}}]}]},{\"type\":\"Group\",\"label\":\"What to check\",\"elements\":[{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Condition\",\"label\":\"Match If (Source)\",\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}\"}]}]},{\"type\":\"Group\",\"label\":\"What to run\",\"elements\":[{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/TargetActionType\"},{\"type\":\"Control\",\"scope\":\"#/properties/TargetActionField\",\"rule\":{\"condition\":{\"scope\":\"#/properties/TargetActionType\",\"schema\":{\"enum\":[\"Scripted\"]}},\"effect\":\"HIDE\"}}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/TargetActionScript\",\"label\":\"Scripted Action\",\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height: 95% !important;}\",\"rule\":{\"condition\":{\"scope\":\"#/properties/TargetActionType\",\"schema\":{\"enum\":[\"Scripted\"]}},\"effect\":\"SHOW\"}}]}]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Form Action - Details\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\",\"draggable\":\"\"},{\"dataType\":\"Group\",\"label\":\"Details\",\"Properties\":[{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Name\",\"label\":\"Name\",\"draggable\":\"\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Model\",\"label\":\"Model\",\"draggable\":\"\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Form\",\"label\":\"Form\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Order\",\"draggable\":\"\"},{\"dataType\":\"Control\",\"scope\":\"Active\",\"label\":\"Active\",\"draggable\":\"\"}]}]},{\"dataType\":\"Group\",\"label\":\"When to run\",\"Properties\":[{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"SourceActionType\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"SourceAction\",\"label\":\"Source Action Name\",\"rule\":{\"scope\":\"SourceActionType\",\"effect\":\"SHOW\",\"condition\":\"SCHEMA\",\"expectedValue\":\"onClick\",\"schemaType\":{\"schemaType\":\"Simple\",\"expectedValue\":\"onClick\"}},\"draggable\":\"\"},{\"dataType\":\"Control\",\"scope\":\"SourceField\",\"rule\":{\"scope\":\"SourceActionType\",\"effect\":\"SHOW\",\"condition\":\"SCHEMA\",\"schemaType\":{\"schemaType\":\"Simple\",\"expectedValue\":\"onChange\",\"Properties\":[{}]}},\"widgetType\":\"Dynamic Choice\",\"options\":null,\"tableName\":\"ModelField_studio\",\"condition\":\"{\\\"Model\\\": \\\"${Model}\\\"}\",\"choiceLabelFieldName\":\"FieldName\",\"choiceValueFieldName\":\"FieldCode\",\"draggable\":\"\"},{\"dataType\":\"Control\",\"scope\":\"CustomSource\",\"label\":\"Custom Source\",\"rule\":{\"scope\":\"SourceActionType\",\"effect\":\"SHOW\",\"condition\":\"SCHEMA\",\"schemaType\":{\"schemaType\":\"Simple\",\"expectedValue\":\"onChange\"}},\"draggable\":\"\"}]}]},{\"dataType\":\"Group\",\"label\":\"What to check\",\"Properties\":[{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Condition\",\"label\":\"Match If (Source)\",\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}\",\"draggable\":false}]}]},{\"dataType\":\"Group\",\"label\":\"What to run\",\"Properties\":[{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"TargetActionType\"},{\"dataType\":\"Control\",\"scope\":\"TargetActionField\",\"rule\":{\"scope\":\"TargetActionType\",\"effect\":\"HIDE\",\"condition\":\"SCHEMA\",\"schemaType\":{\"schemaType\":\"Simple\",\"expectedValue\":\"Scripted\",\"isRequired\":false}}}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"TargetActionScript\",\"label\":\"Scripted Action\",\"rule\":{\"scope\":\"TargetActionType\",\"effect\":\"SHOW\",\"condition\":\"SCHEMA\",\"schemaType\":{\"schemaType\":\"Simple\",\"expectedValue\":\"Scripted\"}},\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}  .bx--label {    color: black !important;     font-size: 0.9rem !important;     font-weight: 800 !important;} \",\"draggable\":false}]}]}],\"rule\":{}}",
            "default": "{\"SourceActionType\":\"onChange\",\"form_actions\":{\"parent\":{\"SourceActionType\":\"onChange\"}}}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%2265c352d0-83de-11eb-b84e-93a050de95db%22%7D,%7B%22or%22:%5B%7B%22Form%22:%22679f17b0-83de-11eb-b84e-93a050de95db%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormActions_studio%7B%22where%22:%7B%22uid%22:%2222c98ee0-b3d6-11eb-99d3-0d9d1761c6fb%22%7D%7Duid,srs_created_at,srs_updated_at,srs_created_by,srs_updated_by,Name,Model,SourceActionType,SourceField,TargetActionType,TargetActionField,Order,TargetActionScript,Form,Condition,SourceAction,PreventDefaultSave,PreventDefaultShowList,Active,CustomSource": [
        {
            "uid": "22c98ee0-b3d6-11eb-99d3-0d9d1761c6fb",
            "srs_created_at": "2021-05-13T10:29:45.000Z",
            "srs_updated_at": "2021-05-13T10:29:45.000Z",
            "srs_created_by": "System",
            "srs_updated_by": "System",
            "Name": "onItemEntryDetele",
            "Model": "09cf54b0-9388-11eb-856d-05f275e0b59a",
            "SourceActionType": "onClick",
            "SourceField": "",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 10,
            "TargetActionScript": "(async function() {\n    //debugger;\n    let uid = $action.record && $action.record.uid;\n    if(uid){\n       let delRec = await $qry.deleteRecord(\"ItemEntry_accounting\", uid);\n       let recTotalAmount = $action.record && $action.record.TotalAmount || 0;\n       let subTotal = $form.SubTotal && parseFloat($form.SubTotal) || 0;\n       subTotal = subTotal - recTotalAmount;\n       let discount = $form.Discount && parseFloat($form.Discount) || 0;\n       let shippingCharges = $form.ShippingCharges && parseFloat($form.ShippingCharges) || 0;\n       let adjustment = $form.Adjustment && parseFloat($form.Adjustment) || 0;\n    \n       subTotal = subTotal.toFixed(2);\n       $form.SubTotal = subTotal;\n       let totalAmount = (subTotal - (subTotal * discount) - shippingCharges - adjustment).toFixed(2);\n       $form.TotalAmount = totalAmount;\n       \n       let fieldMap = {};\n\n       fieldMap[\"SubTotal\"] = subTotal;\n       fieldMap[\"TotalAmount\"] = totalAmount;\n       let recUpdate = await $qry.updateRecord(\"Invoice_accounting\", $form.uid, fieldMap, [\"uid\"]);\n    }\n\n    $notifier.addFlashMessage({title: \"Info - \", subtitle: \"Product deleted successfully.\"});\n    return {data: $form, meta:{ AggregateViewer:{reload: Date.now()}}};\n})",
            "Form": "830739d0-93b3-11eb-856d-05f275e0b59a",
            "Condition": "(async function() {\n    return true;\n})",
            "SourceAction": "deleteitem",
            "PreventDefaultSave": "",
            "PreventDefaultShowList": "",
            "Active": true,
            "CustomSource": ""
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaRoute%22,%22View%22:%22Default%22,%22Scope%22:%22mmf%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "8d46fbc0-92fe-11eb-a4bd-7da498ed85b5",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Path\":{\"code\":\"Path\",\"label\":\"Path\",\"type\":\"string\",\"name\":\"Path\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"LoadingComponent\":{\"code\":\"LoadingComponent\",\"label\":\"LoadingComponent\",\"type\":\"string\",\"name\":\"LoadingComponent\"},\"HTML\":{\"code\":\"HTML\",\"label\":\"HTML\",\"type\":\"string\",\"name\":\"HTML\"},\"is_public\":{\"code\":\"is_public\",\"label\":\"is_public\",\"type\":\"boolean\",\"name\":\"is_public\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Path\":{\"code\":\"Path\",\"label\":\"Path\",\"type\":\"string\",\"name\":\"Path\"},\"uid\":{\"type\":\"string\"}}}"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaRoute%22%7D,%7B%22Scope%22:%22mmf%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "8d46fbc0-92fe-11eb-a4bd-7da498ed85b5",
            "Name": "MetaRoute_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaRoute",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Path\":{\"code\":\"Path\",\"label\":\"Path\",\"type\":\"string\",\"name\":\"Path\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"LoadingComponent\":{\"code\":\"LoadingComponent\",\"label\":\"LoadingComponent\",\"type\":\"string\",\"name\":\"LoadingComponent\"},\"HTML\":{\"code\":\"HTML\",\"label\":\"HTML\",\"type\":\"string\",\"name\":\"HTML\"},\"is_public\":{\"code\":\"is_public\",\"label\":\"is_public\",\"type\":\"boolean\",\"name\":\"is_public\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"Path\",\"label\":\"Path\",\"dataType\":\"string\",\"name\":\"Path\"},{\"code\":\"Scope\",\"label\":\"Scope\",\"dataType\":\"string\",\"name\":\"Scope\"},{\"code\":\"LoadingComponent\",\"label\":\"LoadingComponent\",\"dataType\":\"string\",\"name\":\"LoadingComponent\"},{\"code\":\"HTML\",\"label\":\"HTML\",\"dataType\":\"text\",\"name\":\"HTML\"},{\"code\":\"is_public\",\"label\":\"is_public\",\"dataType\":\"boolean\",\"name\":\"is_public\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Form - Page Details\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Name\"},{\"type\":\"Control\",\"scope\":\"#/properties/Path\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Scope\"},{\"type\":\"Control\",\"scope\":\"#/properties/is_public\",\"label\":\"Is Public\"}]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Form - Page Details\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Name\"},{\"dataType\":\"Control\",\"scope\":\"Path\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Scope\"},{\"dataType\":\"Control\",\"scope\":\"is_public\",\"label\":\"Is Public\"}]}],\"rule\":{}}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22MetaRoute%22%7D,%7B%22or%22:%5B%7B%22Form%22:%228d46fbc0-92fe-11eb-a4bd-7da498ed85b5%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaSlide%22,%22View%22:%22Default%22,%22Scope%22:%22mmf%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "6b5e4e60-7e53-11eb-a3cf-39ae28036b92",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Type\":{\"code\":\"Type\",\"label\":\"Type\",\"type\":\"string\",\"name\":\"Type\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"FreeForm\",\"value\":\"FreeForm\"},{\"name\":\"CreateView\",\"value\":\"CreateView\"},{\"name\":\"EditView\",\"value\":\"EditView\"}]},\"Path\":{\"code\":\"Path\",\"label\":\"Path\",\"type\":\"string\",\"name\":\"Path\"},\"Styles\":{\"code\":\"Styles\",\"label\":\"Styles\",\"type\":\"string\",\"name\":\"Styles\",\"widgetType\":\"Script\",\"contentType\":\"CSS\",\"editorHeight\":\"40vh\",\"language\":\"css\"},\"is_public\":{\"code\":\"is_public\",\"label\":\"is_public\",\"type\":\"boolean\",\"name\":\"is_public\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Type\":{\"code\":\"Type\",\"label\":\"Type\",\"type\":\"string\",\"name\":\"Type\"},\"Path\":{\"code\":\"Path\",\"label\":\"Path\",\"type\":\"string\",\"name\":\"Path\"},\"is_public\":{\"code\":\"is_public\",\"label\":\"is_public\",\"type\":\"string\",\"name\":\"is_public\"},\"uid\":{\"type\":\"string\"}}}"
        }
    ],
    "MetaSlide%7B%7Duid,Name,Scope,Type,Path,is_public": [
        {
            "uid": "01ba8e50-e12e-11ea-9420-191979222227",
            "Name": "CustomerDetails",
            "Scope": "pos",
            "Type": "FreeForm",
            "Path": "/customerdetails",
            "is_public": ""
        },
        {
            "uid": "02b987a0-b935-11ea-9d0f-6591fe08f6ce",
            "Name": "DemoPageUnderPage1",
            "Scope": "demopages",
            "Type": "FreeForm",
            "Path": "/page11",
            "is_public": ""
        },
        {
            "uid": "02f2c870-fb12-11ea-ba07-25a44ee913ce",
            "Name": "WorktItems",
            "Scope": "agilecore",
            "Type": "FreeForm",
            "Path": "/workitems",
            "is_public": ""
        },
        {
            "uid": "077e2a20-7e7e-11eb-a3cf-39ae28036b92",
            "Name": "CoreForm",
            "Scope": "studio",
            "Type": "FreeForm",
            "Path": "/coreform/:params",
            "is_public": ""
        },
        {
            "uid": "0a3c79a0-41df-11eb-b886-810e138508df",
            "Name": "TestForm",
            "Scope": "demo2",
            "Type": "FreeForm",
            "Path": "/testform1",
            "is_public": ""
        },
        {
            "uid": "0a54b570-8f63-11eb-b2b1-67a4b461c2ae",
            "Name": "ApplicationHome",
            "Scope": "studio",
            "Type": "FreeForm",
            "Path": "/home",
            "is_public": ""
        },
        {
            "uid": "0ccfb290-b490-11ea-85d5-538848a128c2",
            "Name": "NavItemForm",
            "Scope": "studio",
            "Type": "FreeForm",
            "Path": "/navitemform",
            "is_public": ""
        },
        {
            "uid": "116429d0-22a4-11eb-bd9f-99b2335d8890",
            "Name": "ProductVariants",
            "Scope": "pos",
            "Type": "FreeForm",
            "Path": "/variants/:product_id",
            "is_public": ""
        },
        {
            "uid": "17a07500-b44b-11ea-a76f-2def58415259",
            "Name": "PaletteEdit",
            "Scope": "studio",
            "Type": "EditView",
            "Path": "/paletteedit/:id",
            "is_public": ""
        },
        {
            "uid": "1e671870-f1e1-11ea-855c-7fbf7757f64d",
            "Name": "ProductAttributes",
            "Scope": "pos",
            "Type": "FreeForm",
            "Path": "/attributes/:vproductId",
            "is_public": ""
        },
        {
            "uid": "220cdf90-e125-11ea-9420-191979222227",
            "Name": "CustomerProductList",
            "Scope": "pos",
            "Type": "FreeForm",
            "Path": "/customerproducts",
            "is_public": ""
        },
        {
            "uid": "258f8190-78ce-11eb-9ce1-e7492a2683f7",
            "Name": "LoginHome-91487",
            "Scope": "studio",
            "Type": "FreeForm",
            "Path": "/loginhome",
            "is_public": ""
        },
        {
            "uid": "26cd7c30-bad6-11ea-a2a4-5b3a25027848",
            "Name": "DummyPage",
            "Scope": "demopages",
            "Type": "FreeForm",
            "Path": "/dp1",
            "is_public": ""
        },
        {
            "uid": "28198200-df66-11ea-b7dd-dfe6f63173d9",
            "Name": "Home",
            "Scope": "pharma",
            "Type": "FreeForm",
            "Path": "/pharma",
            "is_public": ""
        },
        {
            "uid": "2e4bcb70-9810-11eb-8912-cd01a55dad3f",
            "Name": "CustomForm",
            "Scope": "studio",
            "Type": "FreeForm",
            "Path": "/cform/:params",
            "is_public": ""
        },
        {
            "uid": "305cd7a0-e1e6-11ea-befb-ef9be177f3a2",
            "Name": "PaymentSettings",
            "Scope": "pos",
            "Type": "FreeForm",
            "Path": "/payment-settings",
            "is_public": ""
        },
        {
            "uid": "30b43730-7335-11eb-9f47-7de7b654d8df",
            "Name": "AccountBalanceSheet",
            "Scope": "crm",
            "Type": "FreeForm",
            "Path": "/account_sheet",
            "is_public": ""
        },
        {
            "uid": "31bfba60-ca29-11ea-b951-771e74364676",
            "Name": "DemoPageSwitchPage1",
            "Scope": "demopages",
            "Type": "CreateView",
            "Path": "/dps-page1",
            "is_public": ""
        },
        {
            "uid": "366ef340-e122-11ea-9420-191979222227",
            "Name": "OrderForm",
            "Scope": "pos",
            "Type": "FreeForm",
            "Path": "/orderform/:vendorId",
            "is_public": ""
        },
        {
            "uid": "37bdc950-b06d-11ea-9202-cb2d354d5188",
            "Name": "NavItemEdit",
            "Scope": "studio",
            "Type": "EditView",
            "Path": "/navitem/:id",
            "is_public": ""
        },
        {
            "uid": "425479b0-5d63-11eb-b0ac-e32bd614ab39",
            "Name": "ModelList",
            "Scope": "studio",
            "Type": "FreeForm",
            "Path": "/list/:params",
            "is_public": ""
        },
        {
            "uid": "4709fc30-1409-11eb-9f23-e138d7998ba3",
            "Name": "WorkflowModeler",
            "Scope": "workflow",
            "Type": "FreeForm",
            "Path": "/wfmodeler",
            "is_public": ""
        },
        {
            "uid": "48d6f090-f276-11ea-83d9-51bb12c859eb",
            "Name": "ProductOptions",
            "Scope": "pos",
            "Type": "FreeForm",
            "Path": "/productoptions/:product_id",
            "is_public": ""
        },
        {
            "uid": "4be82430-2376-11eb-bd9f-99b2335d8890",
            "Name": "Option_Edit",
            "Scope": "pos",
            "Type": "FreeForm",
            "Path": "/productoption/:params",
            "is_public": ""
        },
        {
            "uid": "4e119920-f1cc-11ea-83d9-51bb12c859eb",
            "Name": "PricingRules",
            "Scope": "pos",
            "Type": "FreeForm",
            "Path": "/pricingrules/:variant_id",
            "is_public": ""
        },
        {
            "uid": "4f6dd9c0-ca38-11ea-b951-771e74364676",
            "Name": "DemoPageSwitcherList",
            "Scope": "demopages",
            "Type": "FreeForm",
            "Path": "/dps-list",
            "is_public": ""
        },
        {
            "uid": "55a3c1c0-da22-11ea-9c03-5f5fa0fa3b1e",
            "Name": "Product_List",
            "Scope": "pos",
            "Type": "FreeForm",
            "Path": "/products",
            "is_public": ""
        },
        {
            "uid": "573bf500-d42f-11ea-84d6-cf0129194199",
            "Name": "ModelFieldEdit",
            "Scope": "studio",
            "Type": "EditView",
            "Path": "/db_fieldedit/:recordid",
            "is_public": ""
        },
        {
            "uid": "5b74adc0-b935-11ea-9d0f-6591fe08f6ce",
            "Name": "DemoPage1UnderTabs",
            "Scope": "demopages",
            "Type": "FreeForm",
            "Path": "/pageundertabs",
            "is_public": ""
        },
        {
            "uid": "5e5d0310-d862-11ea-9eaa-2d839f603c82",
            "Name": "PaletteParentCreate",
            "Scope": "studio",
            "Type": "CreateView",
            "Path": "/palette-parent",
            "is_public": ""
        },
        {
            "uid": "5e88b1f0-bf7f-11ea-8200-21eb09f08983",
            "Name": "Patient",
            "Scope": "appointment",
            "Type": "CreateView",
            "Path": "/patient",
            "is_public": ""
        },
        {
            "uid": "5f621340-b832-11ea-b764-af48d9a77036",
            "Name": "TwoPagesDemo",
            "Scope": "demopages",
            "Type": "FreeForm",
            "Path": "/demo-2pages",
            "is_public": ""
        },
        {
            "uid": "628f9190-2674-11eb-a896-13717cc4a3bf",
            "Name": "WFCreateRecordMapper",
            "Scope": "workflow",
            "Type": "FreeForm",
            "Path": "/wf_createrecord",
            "is_public": ""
        },
        {
            "uid": "67b10660-a2b0-11ea-bad8-f10d450db69b",
            "Name": "Palettes",
            "Scope": "studio",
            "Type": "FreeForm",
            "Path": "/studio/palettes",
            "is_public": ""
        },
        {
            "uid": "6a856300-ca37-11ea-b951-771e74364676",
            "Name": "DemoWidgetContainer",
            "Scope": "demopages",
            "Type": "FreeForm",
            "Path": "/demo-wc",
            "is_public": ""
        },
        {
            "uid": "6b5b2a40-4330-11eb-8882-47de76d3b476",
            "Name": "VendorProduct_List",
            "Scope": "pos",
            "Type": "FreeForm",
            "Path": "/vendor_products",
            "is_public": ""
        },
        {
            "uid": "6e861e70-e217-11ea-9f92-935677f73a84",
            "Name": "OrderConfirmation",
            "Scope": "pos",
            "Type": "FreeForm",
            "Path": "/order_confirm",
            "is_public": ""
        },
        {
            "uid": "70212df0-229b-11eb-bd9f-99b2335d8890",
            "Name": "WorkflowLauncher",
            "Scope": "workflow",
            "Type": "FreeForm",
            "Path": "/wflauncher/:params",
            "is_public": ""
        },
        {
            "uid": "71da93d0-d425-11ea-84d6-cf0129194199",
            "Name": "ModelFields",
            "Scope": "studio",
            "Type": "CreateView",
            "Path": "/db_fields",
            "is_public": ""
        },
        {
            "uid": "7b36b310-d87f-11ea-9eaa-2d839f603c82",
            "Name": "Vendor_Signin",
            "Scope": "pos",
            "Type": "FreeForm",
            "Path": "/vsignin",
            "is_public": true
        },
        {
            "uid": "7f150850-2376-11eb-bd9f-99b2335d8890",
            "Name": "Variant_Edit",
            "Scope": "pos",
            "Type": "FreeForm",
            "Path": "/productvariant/:variant_id",
            "is_public": ""
        },
        {
            "uid": "8552fa80-e9bd-11ea-a879-a95062f22781",
            "Name": "VendorForm",
            "Scope": "pos",
            "Type": "FreeForm",
            "Path": "/vendor-form",
            "is_public": ""
        },
        {
            "uid": "85d1de60-dade-11ea-85ec-59b9fdf21beb",
            "Name": "Story",
            "Scope": "agilecore",
            "Type": "CreateView",
            "Path": "/story_create",
            "is_public": ""
        },
        {
            "uid": "89b3fdf0-6ff4-11eb-805d-1d1986854aa7",
            "Name": "CRMForm",
            "Scope": "crm",
            "Type": "FreeForm",
            "Path": "/crm_form/:params",
            "is_public": ""
        },
        {
            "uid": "8efe33d0-ca2b-11ea-b951-771e74364676",
            "Name": "DemoPageSwitchPage2",
            "Scope": "demopages",
            "Type": "EditView",
            "Path": "/dps-page2",
            "is_public": ""
        },
        {
            "uid": "9b3ad0a0-b832-11ea-b764-af48d9a77036",
            "Name": "DemoPage1",
            "Scope": "demopages",
            "Type": "EditView",
            "Path": "/demo-page1",
            "is_public": ""
        },
        {
            "uid": "9c0b3fc0-63b7-11eb-8100-ad1de3a4a5dc",
            "Name": "HMSWorkspace",
            "Scope": "appointment",
            "Type": "FreeForm",
            "Path": "/hms",
            "is_public": ""
        },
        {
            "uid": "9d572210-ca27-11ea-b951-771e74364676",
            "Name": "DemoPageSwitcher",
            "Scope": "demopages",
            "Type": "FreeForm",
            "Path": "/demo-page-switcher",
            "is_public": ""
        },
        {
            "uid": "9e26c8d0-0659-11eb-becf-d91857c7ffbd",
            "Name": "PageBundles",
            "Scope": "studio",
            "Type": "FreeForm",
            "Path": "/pagebundles/:pageid",
            "is_public": ""
        },
        {
            "uid": "9f509340-df7f-11ea-a9d9-c39825146e9d",
            "Name": "LoginHome",
            "Scope": "studio",
            "Type": "FreeForm",
            "Path": "/loginhome1",
            "is_public": true
        },
        {
            "uid": "a5680160-d63c-11ea-ad4a-854d082f7369",
            "Name": "MyTestLink",
            "Scope": "mmf",
            "Type": "FreeForm",
            "Path": "/test",
            "is_public": ""
        },
        {
            "uid": "ac05f0f0-6d94-11eb-bd26-b91b8d104a2b",
            "Name": "HMSForm",
            "Scope": "appointment",
            "Type": "FreeForm",
            "Path": "/hms_form/:params",
            "is_public": ""
        },
        {
            "uid": "ac0a68b0-b935-11ea-9d0f-6591fe08f6ce",
            "Name": "DemoPage2UnderTabs",
            "Scope": "demopages",
            "Type": "FreeForm",
            "Path": "/page2undertabs",
            "is_public": ""
        },
        {
            "uid": "ae1b2e00-7efb-11eb-a3cf-39ae28036b92",
            "Name": "CoreList",
            "Scope": "studio",
            "Type": "FreeForm",
            "Path": "/corelist/:params",
            "is_public": ""
        },
        {
            "uid": "ae29b520-eebd-11ea-b1b0-bb0ca96b2ec7",
            "Name": "DummyPage2",
            "Scope": "demopages",
            "Type": "FreeForm",
            "Path": "/dp2",
            "is_public": ""
        },
        {
            "uid": "aeb47800-2099-11eb-a9d8-09b03b59a8cd",
            "Name": "ServiceTaskList",
            "Scope": "workflow",
            "Type": "FreeForm",
            "Path": "/servicetasklist",
            "is_public": ""
        },
        {
            "uid": "aefb34e0-6e80-11eb-9f95-8fc86a1926f0",
            "Name": "HMSList",
            "Scope": "appointment",
            "Type": "FreeForm",
            "Path": "/hms_list/:params",
            "is_public": ""
        },
        {
            "uid": "b072dbd0-d424-11ea-84d6-cf0129194199",
            "Name": "Modelling",
            "Scope": "studio",
            "Type": "FreeForm",
            "Path": "/studio/db",
            "is_public": ""
        },
        {
            "uid": "b264ae40-6ff7-11eb-805d-1d1986854aa7",
            "Name": "CRMList",
            "Scope": "crm",
            "Type": "FreeForm",
            "Path": "/crm_list/:params",
            "is_public": ""
        },
        {
            "uid": "b2f429b0-ad7b-11ea-ace4-2b816387a3b2",
            "Name": "NavItemCreate",
            "Scope": "studio",
            "Type": "CreateView",
            "Path": "/navitem",
            "is_public": ""
        },
        {
            "uid": "b870b1b0-57c1-11eb-a638-d95bfca5c886",
            "Name": "ModelForm",
            "Scope": "studio",
            "Type": "FreeForm",
            "Path": "/form/:params",
            "is_public": ""
        },
        {
            "uid": "ba411550-f00d-11ea-aea0-5374b9e75888",
            "Name": "VendorProfile",
            "Scope": "pos",
            "Type": "EditView",
            "Path": "/vendor_profile/:vid",
            "is_public": ""
        },
        {
            "uid": "bd3cb870-ad7a-11ea-a58c-e18cffa49a2d",
            "Name": "StudioControlPanel",
            "Scope": "studio",
            "Type": "FreeForm",
            "Path": "/studio",
            "is_public": ""
        },
        {
            "uid": "c04ec470-bf83-11ea-8200-21eb09f08983",
            "Name": "PatientList",
            "Scope": "appointment",
            "Type": "FreeForm",
            "Path": "/patientList",
            "is_public": ""
        },
        {
            "uid": "c2101590-da34-11ea-984e-05c52145f6d4",
            "Name": "Product_Edit",
            "Scope": "pos",
            "Type": "FreeForm",
            "Path": "/product/:product_id",
            "is_public": ""
        },
        {
            "uid": "c3c38e00-90b7-11eb-a4bd-7da498ed85b5",
            "Name": "ComponentFrame",
            "Scope": "studio",
            "Type": "FreeForm",
            "Path": "/component/:params",
            "is_public": ""
        },
        {
            "uid": "c65b9cc0-0638-11eb-99b5-e3e656c3a553",
            "Name": "ApplicationDesigner",
            "Scope": "studio",
            "Type": "FreeForm",
            "Path": "/appdesign",
            "is_public": ""
        },
        {
            "uid": "c66d9830-69cf-11eb-8a28-a989e4092011",
            "Name": "TestPage2",
            "Scope": "demo2",
            "Type": "FreeForm",
            "Path": "/tp2",
            "is_public": ""
        },
        {
            "uid": "c69ff9f0-b832-11ea-b764-af48d9a77036",
            "Name": "DemoPage2",
            "Scope": "demopages",
            "Type": "FreeForm",
            "Path": "/demo-page2",
            "is_public": ""
        },
        {
            "uid": "cb168080-57ec-11eb-a638-d95bfca5c886",
            "Name": "FormBuilder",
            "Scope": "studio",
            "Type": "FreeForm",
            "Path": "/formbuilder/:params",
            "is_public": ""
        },
        {
            "uid": "d01bffb0-9063-11eb-b5f5-8df69ef914b1",
            "Name": "FramePage",
            "Scope": "studio",
            "Type": "FreeForm",
            "Path": "/frame/:uri",
            "is_public": ""
        },
        {
            "uid": "d8aa79c0-b7c6-11ea-b764-af48d9a77036",
            "Name": "TwoWidgetsDemo",
            "Scope": "demopages",
            "Type": "FreeForm",
            "Path": "/demo-2widgets",
            "is_public": ""
        },
        {
            "uid": "daae8d20-626a-11eb-8100-ad1de3a4a5dc",
            "Name": "Workspace",
            "Scope": "studio",
            "Type": "FreeForm",
            "Path": "/ws/:params",
            "is_public": ""
        },
        {
            "uid": "dc133290-2eeb-11eb-8ddd-c9f23053865b",
            "Name": "DemoToUseWorkflowLogic",
            "Scope": "demo2",
            "Type": "FreeForm",
            "Path": "/demowflogic",
            "is_public": ""
        },
        {
            "uid": "deff4b80-63dc-11eb-adc1-9f56977e733b",
            "Name": "HMSAdmin",
            "Scope": "appointment",
            "Type": "FreeForm",
            "Path": "/hms_admin",
            "is_public": ""
        },
        {
            "uid": "e4dcf0f0-0713-11eb-99b5-e3e656c3a553",
            "Name": "Vendor_Verification",
            "Scope": "pos",
            "Type": "FreeForm",
            "Path": "/vverfication",
            "is_public": ""
        },
        {
            "uid": "e7a6f160-301b-11eb-b2fe-9fb0d7cf4d20",
            "Name": "VendorWorkspace",
            "Scope": "pos",
            "Type": "FreeForm",
            "Path": "/vendorws",
            "is_public": ""
        },
        {
            "uid": "ea614b30-b23f-11ea-aa71-0d409f236171",
            "Name": "PageBuilder",
            "Scope": "studio",
            "Type": "FreeForm",
            "Path": "/pageBuilder",
            "is_public": ""
        },
        {
            "uid": "ebb532b0-3144-11eb-a5ca-5b6f16ebfd53",
            "Name": "Modal_ProductSelection",
            "Scope": "pos",
            "Type": "FreeForm",
            "Path": "/get_product",
            "is_public": ""
        },
        {
            "uid": "efb55c50-bf84-11ea-bec4-db693cbc13c2",
            "Name": "PatientEdit",
            "Scope": "appointment",
            "Type": "EditView",
            "Path": "/patientedit/:id",
            "is_public": ""
        },
        {
            "uid": "f46c71a0-fc12-11ea-8345-5929ec36a57e",
            "Name": "TestPage1",
            "Scope": "demo2",
            "Type": "FreeForm",
            "Path": "/testpage2",
            "is_public": ""
        },
        {
            "uid": "f64f5260-b448-11ea-a76f-2def58415259",
            "Name": "PaletteCreate",
            "Scope": "studio",
            "Type": "CreateView",
            "Path": "/palettenew/:id",
            "is_public": ""
        },
        {
            "uid": "f9414400-b40d-11ea-8669-37d13f2c1b0a",
            "Name": "Navigator",
            "Scope": "studio",
            "Type": "FreeForm",
            "Path": "/studio/navigator",
            "is_public": ""
        },
        {
            "uid": "fa2ca2e0-72d2-11eb-9f47-7de7b654d8df",
            "Name": "Dashboard",
            "Scope": "crm",
            "Type": "FreeForm",
            "Path": "/crm_dashboard",
            "is_public": ""
        },
        {
            "uid": "fb8d7160-701f-11eb-805d-1d1986854aa7",
            "Name": "CRM",
            "Scope": "crm",
            "Type": "FreeForm",
            "Path": "/crm",
            "is_public": ""
        },
        {
            "uid": "fd675a10-07eb-11eb-936b-3507f9f9ab2f",
            "Name": "Vendor_Add_Product",
            "Scope": "pos",
            "Type": "FreeForm",
            "Path": "/addproduct",
            "is_public": ""
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaSlide%22%7D,%7B%22Scope%22:%22mmf%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "6b5e4e60-7e53-11eb-a3cf-39ae28036b92",
            "Name": "MetaSlide_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaSlide",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Type\":{\"code\":\"Type\",\"label\":\"Type\",\"type\":\"string\",\"name\":\"Type\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"FreeForm\",\"value\":\"FreeForm\"},{\"name\":\"CreateView\",\"value\":\"CreateView\"},{\"name\":\"EditView\",\"value\":\"EditView\"}]},\"Path\":{\"code\":\"Path\",\"label\":\"Path\",\"type\":\"string\",\"name\":\"Path\"},\"Styles\":{\"code\":\"Styles\",\"label\":\"Styles\",\"type\":\"string\",\"name\":\"Styles\",\"widgetType\":\"Script\",\"contentType\":\"CSS\",\"editorHeight\":\"40vh\",\"language\":\"css\"},\"is_public\":{\"code\":\"is_public\",\"label\":\"is_public\",\"type\":\"boolean\",\"name\":\"is_public\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"Scope\",\"label\":\"Scope\",\"dataType\":\"string\",\"name\":\"Scope\"},{\"code\":\"Type\",\"label\":\"Type\",\"dataType\":\"string\",\"name\":\"Type\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"FreeForm\",\"value\":\"FreeForm\"},{\"name\":\"CreateView\",\"value\":\"CreateView\"},{\"name\":\"EditView\",\"value\":\"EditView\"}]},{\"code\":\"Path\",\"label\":\"Path\",\"dataType\":\"string\",\"name\":\"Path\"},{\"code\":\"Styles\",\"label\":\"Styles\",\"dataType\":\"string\",\"name\":\"Styles\",\"widgetType\":\"Script\",\"contentType\":\"CSS\",\"editorHeight\":\"40vh\",\"language\":\"css\"},{\"code\":\"is_public\",\"label\":\"is_public\",\"dataType\":\"boolean\",\"name\":\"is_public\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Slide - Details\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Name\"},{\"type\":\"Control\",\"scope\":\"#/properties/Scope\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Type\",\"label\":\"Type\",\"options\":{}},{\"type\":\"Control\",\"scope\":\"#/properties/Path\"},{\"type\":\"Control\",\"scope\":\"#/properties/is_public\",\"label\":\"Is Public\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Styles\",\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}  .bx--label {    color: black !important;     font-size: 0.9rem !important;     font-weight: 800 !important;} \"}]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Slide - Details\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\",\"draggable\":\"\"},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Name\"},{\"dataType\":\"Control\",\"scope\":\"Scope\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Type\",\"label\":\"Type\",\"options\":\"[]\"},{\"dataType\":\"Control\",\"scope\":\"Path\"},{\"dataType\":\"Control\",\"scope\":\"is_public\",\"label\":\"Is Public\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Styles\",\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}  .bx--label {    color: black !important;     font-size: 0.9rem !important;     font-weight: 800 !important;} \"}]}],\"rule\":{}}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22MetaSlide%22%7D,%7B%22or%22:%5B%7B%22Form%22:%226b5e4e60-7e53-11eb-a3cf-39ae28036b92%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "MetaSlide%7B%22where%22:%7B%22uid%22:%2202f2c870-fb12-11ea-ba07-25a44ee913ce%22%7D%7Duid,srs_created_at,srs_updated_at,srs_created_by,srs_updated_by,Name,Scope,Type,Path,Styles,is_public": [
        {
            "uid": "02f2c870-fb12-11ea-ba07-25a44ee913ce",
            "srs_created_at": "2020-09-20T07:22:17.000Z",
            "srs_updated_at": "2020-09-20T07:22:17.000Z",
            "srs_created_by": "System",
            "srs_updated_by": "System",
            "Name": "WorktItems",
            "Scope": "agilecore",
            "Type": "FreeForm",
            "Path": "/workitems",
            "Styles": "",
            "is_public": ""
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaSlideAction%22,%22View%22:%22Default%22,%22Scope%22:%22mmf%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "a9892c80-7f2c-11eb-a3cf-39ae28036b92",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Type\":{\"code\":\"Type\",\"label\":\"Type\",\"type\":\"string\",\"name\":\"Type\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"Choose a Type\"},{\"name\":\"Load\",\"value\":\"Load\"}]},\"Active\":{\"code\":\"Active\",\"label\":\"Active\",\"type\":\"boolean\",\"name\":\"Active\"},\"Order\":{\"code\":\"Order\",\"label\":\"Order\",\"type\":\"number\",\"name\":\"Order\"},\"Slide\":{\"code\":\"Slide\",\"label\":\"Slide\",\"type\":\"string\",\"name\":\"Slide\",\"widgetType\":\"Reference\",\"tableName\":\"MetaSlide\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"language\":\"javascript\",\"editorHeight\":\"60vh\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Type\":{\"code\":\"Type\",\"label\":\"Type\",\"type\":\"string\",\"name\":\"Type\"},\"Active\":{\"code\":\"Active\",\"label\":\"Active\",\"type\":\"boolean\",\"name\":\"Active\"},\"Order\":{\"code\":\"Order\",\"label\":\"Order\",\"type\":\"number\",\"name\":\"Order\"},\"Slide\":{\"code\":\"Slide\",\"label\":\"Slide\",\"type\":\"string\",\"name\":\"Slide\",\"widgetType\":\"Reference\",\"tableName\":\"MetaSlide\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"uid\":{\"type\":\"string\"}}}"
        }
    ],
    "MetaSlide%7B%22where%22:%7B%22uid%22:%7B%22inq%22:%5B%22c3c38e00-90b7-11eb-a4bd-7da498ed85b5%22,%22077e2a20-7e7e-11eb-a3cf-39ae28036b92%22,%2248d6f090-f276-11ea-83d9-51bb12c859eb%22,%224be82430-2376-11eb-bd9f-99b2335d8890%22,%22c2101590-da34-11ea-984e-05c52145f6d4%22,%22258f8190-78ce-11eb-9ce1-e7492a2683f7%22,%229e26c8d0-0659-11eb-becf-d91857c7ffbd%22,%22aefb34e0-6e80-11eb-9f95-8fc86a1926f0%22,%220a54b570-8f63-11eb-b2b1-67a4b461c2ae%22,%22fb8d7160-701f-11eb-805d-1d1986854aa7%22,%22b072dbd0-d424-11ea-84d6-cf0129194199%22,%22aeb47800-2099-11eb-a9d8-09b03b59a8cd%22,%22b870b1b0-57c1-11eb-a638-d95bfca5c886%22,%22e7a6f160-301b-11eb-b2fe-9fb0d7cf4d20%22,%222e4bcb70-9810-11eb-8912-cd01a55dad3f%22,%22b870b1b0-57c1-11eb-a638-d95bfca5c886%22,%2228198200-df66-11ea-b7dd-dfe6f63173d9%22,%22f46c71a0-fc12-11ea-8345-5929ec36a57e%22,%22425479b0-5d63-11eb-b0ac-e32bd614ab39%22,%22ae29b520-eebd-11ea-b1b0-bb0ca96b2ec7%22,%22425479b0-5d63-11eb-b0ac-e32bd614ab39%22,%22d01bffb0-9063-11eb-b5f5-8df69ef914b1%22,%228552fa80-e9bd-11ea-a879-a95062f22781%22,%22ac05f0f0-6d94-11eb-bd26-b91b8d104a2b%22,%22fa2ca2e0-72d2-11eb-9f47-7de7b654d8df%22,%2289b3fdf0-6ff4-11eb-805d-1d1986854aa7%22,%224709fc30-1409-11eb-9f23-e138d7998ba3%22,%2228198200-df66-11ea-b7dd-dfe6f63173d9%22,%226e861e70-e217-11ea-9f92-935677f73a84%22,%22deff4b80-63dc-11eb-adc1-9f56977e733b%22,%22cb168080-57ec-11eb-a638-d95bfca5c886%22,%229c0b3fc0-63b7-11eb-8100-ad1de3a4a5dc%22,%22b264ae40-6ff7-11eb-805d-1d1986854aa7%22,%22ae1b2e00-7efb-11eb-a3cf-39ae28036b92%22,%2255a3c1c0-da22-11ea-9c03-5f5fa0fa3b1e%22%5D%7D%7D%7Duid,Name": [
        {
            "uid": "077e2a20-7e7e-11eb-a3cf-39ae28036b92",
            "Name": "CoreForm"
        },
        {
            "uid": "0a54b570-8f63-11eb-b2b1-67a4b461c2ae",
            "Name": "ApplicationHome"
        },
        {
            "uid": "258f8190-78ce-11eb-9ce1-e7492a2683f7",
            "Name": "LoginHome-91487"
        },
        {
            "uid": "28198200-df66-11ea-b7dd-dfe6f63173d9",
            "Name": "Home"
        },
        {
            "uid": "2e4bcb70-9810-11eb-8912-cd01a55dad3f",
            "Name": "CustomForm"
        },
        {
            "uid": "425479b0-5d63-11eb-b0ac-e32bd614ab39",
            "Name": "ModelList"
        },
        {
            "uid": "4709fc30-1409-11eb-9f23-e138d7998ba3",
            "Name": "WorkflowModeler"
        },
        {
            "uid": "48d6f090-f276-11ea-83d9-51bb12c859eb",
            "Name": "ProductOptions"
        },
        {
            "uid": "4be82430-2376-11eb-bd9f-99b2335d8890",
            "Name": "Option_Edit"
        },
        {
            "uid": "55a3c1c0-da22-11ea-9c03-5f5fa0fa3b1e",
            "Name": "Product_List"
        },
        {
            "uid": "6e861e70-e217-11ea-9f92-935677f73a84",
            "Name": "OrderConfirmation"
        },
        {
            "uid": "8552fa80-e9bd-11ea-a879-a95062f22781",
            "Name": "VendorForm"
        },
        {
            "uid": "89b3fdf0-6ff4-11eb-805d-1d1986854aa7",
            "Name": "CRMForm"
        },
        {
            "uid": "9c0b3fc0-63b7-11eb-8100-ad1de3a4a5dc",
            "Name": "HMSWorkspace"
        },
        {
            "uid": "9e26c8d0-0659-11eb-becf-d91857c7ffbd",
            "Name": "PageBundles"
        },
        {
            "uid": "ac05f0f0-6d94-11eb-bd26-b91b8d104a2b",
            "Name": "HMSForm"
        },
        {
            "uid": "ae1b2e00-7efb-11eb-a3cf-39ae28036b92",
            "Name": "CoreList"
        },
        {
            "uid": "ae29b520-eebd-11ea-b1b0-bb0ca96b2ec7",
            "Name": "DummyPage2"
        },
        {
            "uid": "aeb47800-2099-11eb-a9d8-09b03b59a8cd",
            "Name": "ServiceTaskList"
        },
        {
            "uid": "aefb34e0-6e80-11eb-9f95-8fc86a1926f0",
            "Name": "HMSList"
        },
        {
            "uid": "b072dbd0-d424-11ea-84d6-cf0129194199",
            "Name": "Modelling"
        },
        {
            "uid": "b264ae40-6ff7-11eb-805d-1d1986854aa7",
            "Name": "CRMList"
        },
        {
            "uid": "b870b1b0-57c1-11eb-a638-d95bfca5c886",
            "Name": "ModelForm"
        },
        {
            "uid": "c2101590-da34-11ea-984e-05c52145f6d4",
            "Name": "Product_Edit"
        },
        {
            "uid": "c3c38e00-90b7-11eb-a4bd-7da498ed85b5",
            "Name": "ComponentFrame"
        },
        {
            "uid": "cb168080-57ec-11eb-a638-d95bfca5c886",
            "Name": "FormBuilder"
        },
        {
            "uid": "d01bffb0-9063-11eb-b5f5-8df69ef914b1",
            "Name": "FramePage"
        },
        {
            "uid": "deff4b80-63dc-11eb-adc1-9f56977e733b",
            "Name": "HMSAdmin"
        },
        {
            "uid": "e7a6f160-301b-11eb-b2fe-9fb0d7cf4d20",
            "Name": "VendorWorkspace"
        },
        {
            "uid": "f46c71a0-fc12-11ea-8345-5929ec36a57e",
            "Name": "TestPage1"
        },
        {
            "uid": "fa2ca2e0-72d2-11eb-9f47-7de7b654d8df",
            "Name": "Dashboard"
        },
        {
            "uid": "fb8d7160-701f-11eb-805d-1d1986854aa7",
            "Name": "CRM"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaSlideAction%22%7D,%7B%22Scope%22:%22mmf%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "a9892c80-7f2c-11eb-a3cf-39ae28036b92",
            "Name": "MetaSlideAction_Default",
            "Scope": "mmf",
            "Model": "MetaWidgetAction",
            "View": "Default",
            "ModelName": "MetaSlideAction",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Type\":{\"code\":\"Type\",\"label\":\"Type\",\"type\":\"string\",\"name\":\"Type\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"Choose a Type\"},{\"name\":\"Load\",\"value\":\"Load\"}]},\"Active\":{\"code\":\"Active\",\"label\":\"Active\",\"type\":\"boolean\",\"name\":\"Active\"},\"Order\":{\"code\":\"Order\",\"label\":\"Order\",\"type\":\"number\",\"name\":\"Order\"},\"Slide\":{\"code\":\"Slide\",\"label\":\"Slide\",\"type\":\"string\",\"name\":\"Slide\",\"widgetType\":\"Reference\",\"tableName\":\"MetaSlide\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"language\":\"javascript\",\"editorHeight\":\"60vh\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"Scope\",\"label\":\"Scope\",\"dataType\":\"string\",\"name\":\"Scope\"},{\"code\":\"Type\",\"label\":\"Type\",\"dataType\":\"string\",\"name\":\"Type\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"Choose a Type\"},{\"name\":\"Load\",\"value\":\"Load\"}]},{\"code\":\"Active\",\"label\":\"Active\",\"dataType\":\"boolean\",\"name\":\"Active\"},{\"code\":\"Order\",\"label\":\"Order\",\"dataType\":\"number\",\"name\":\"Order\"},{\"code\":\"Slide\",\"label\":\"Slide\",\"dataType\":\"string\",\"name\":\"Slide\",\"widgetType\":\"Reference\",\"tableName\":\"MetaSlide\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},{\"code\":\"Definition\",\"label\":\"Definition\",\"dataType\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"language\":\"javascript\",\"editorHeight\":\"60vh\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Slide Action - Details\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Group\",\"label\":\"Details\",\"elements\":[{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Name\"},{\"type\":\"Control\",\"scope\":\"#/properties/Scope\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Type\"},{\"type\":\"Control\",\"scope\":\"#/properties/Active\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Slide\"},{\"type\":\"Control\",\"scope\":\"#/properties/Order\"}]}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Definition\"}]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Slide Action - Details\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"draggable\":\"\",\"subtype\":\"Actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"draggable\":false,\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Group\",\"label\":\"Details\",\"Properties\":[{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Name\",\"draggable\":false},{\"dataType\":\"Control\",\"scope\":\"Scope\",\"draggable\":false}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Type\",\"draggable\":false},{\"dataType\":\"Control\",\"scope\":\"Active\",\"draggable\":false}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Slide\",\"draggable\":false},{\"dataType\":\"Control\",\"scope\":\"Order\",\"draggable\":false}]}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Definition\"}]}]}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22MetaWidgetAction%22%7D,%7B%22or%22:%5B%7B%22Form%22:%22a9892c80-7f2c-11eb-a3cf-39ae28036b92%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaWidgetAction%22,%22View%22:%22Default%22,%22Scope%22:%22mmf%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "18e06f50-7e4f-11eb-a3cf-39ae28036b92",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Active\":{\"code\":\"Active\",\"label\":\"Active\",\"type\":\"boolean\",\"name\":\"Active\"},\"Order\":{\"code\":\"Order\",\"label\":\"Order\",\"type\":\"number\",\"name\":\"Order\"},\"Widget\":{\"code\":\"Widget\",\"label\":\"Widget\",\"type\":\"string\",\"name\":\"Widget\"},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"60vh\",\"language\":\"javascript\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Type\":{\"code\":\"Type\",\"label\":\"Type\",\"type\":\"string\",\"name\":\"Type\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"before save\",\"value\":\"before save\"},{\"name\":\"after save\",\"value\":\"after save\"}]},\"Order\":{\"code\":\"Order\",\"label\":\"Order\",\"type\":\"number\",\"name\":\"Order\"},\"Widget\":{\"code\":\"Widget\",\"label\":\"Widget\",\"type\":\"string\",\"name\":\"Widget\"},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"60vh\",\"language\":\"javascript\"}}}"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaWidgetAction%22%7D,%7B%22Scope%22:%22mmf%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "18e06f50-7e4f-11eb-a3cf-39ae28036b92",
            "Name": "MetaWidgetAction_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaWidgetAction",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Active\":{\"code\":\"Active\",\"label\":\"Active\",\"type\":\"boolean\",\"name\":\"Active\"},\"Order\":{\"code\":\"Order\",\"label\":\"Order\",\"type\":\"number\",\"name\":\"Order\"},\"Widget\":{\"code\":\"Widget\",\"label\":\"Widget\",\"type\":\"string\",\"name\":\"Widget\"},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"60vh\",\"language\":\"javascript\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"Scope\",\"label\":\"Scope\",\"dataType\":\"string\",\"name\":\"Scope\"},{\"code\":\"Active\",\"label\":\"Active\",\"dataType\":\"boolean\",\"name\":\"Active\"},{\"code\":\"Order\",\"label\":\"Order\",\"dataType\":\"number\",\"name\":\"Order\"},{\"code\":\"Widget\",\"label\":\"Widget\",\"dataType\":\"string\",\"name\":\"Widget\"},{\"code\":\"Definition\",\"label\":\"Definition\",\"dataType\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"60vh\",\"language\":\"javascript\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Widget Action - Details\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"}],\"align\":\"right\"},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Name\"},{\"type\":\"Control\",\"scope\":\"#/properties/Scope\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Active\",\"label\":\"Active\"},{\"type\":\"Control\",\"scope\":\"#/properties/Order\",\"label\":\"Order\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Widget\",\"label\":\"Widget\",\"widget\":{\"widgetType\":\"Reference\",\"tableName\":\"MetaSlideSlotWidget\",\"displayField\":\"uid\",\"filter\":\"{}\",\"searchfields\":\"uid\"}},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"label\":\"uid\",\"options\":{\"isHidden\":\"true\"}}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Definition\",\"label\":\"Definition\"}]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Widget Action - Details\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"}],\"align\":\"right\",\"draggable\":false},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Name\"},{\"dataType\":\"Control\",\"scope\":\"Scope\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Active\",\"label\":\"Active\"},{\"dataType\":\"Control\",\"scope\":\"Order\",\"label\":\"Order\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Widget\",\"label\":\"Widget\",\"widgetType\":\"Reference\",\"options\":null,\"tableName\":\"MetaSlideSlotWidget\",\"displayField\":\"uid\",\"filter\":\"{}\",\"searchfields\":\"uid\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"label\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Definition\",\"label\":\"Definition\"}]}],\"rule\":{}}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22MetaWidgetAction%22%7D,%7B%22or%22:%5B%7B%22Form%22:%2218e06f50-7e4f-11eb-a3cf-39ae28036b92%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaComponent%22,%22View%22:%22Default%22,%22Scope%22:%22mmf%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "891e7850-7e24-11eb-a3cf-39ae28036b92",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Type\":{\"code\":\"Type\",\"label\":\"Type\",\"type\":\"string\",\"name\":\"Type\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"Choose a Type\"},{\"name\":\"React\",\"value\":\"React\"},{\"name\":\"Vue\",\"value\":\"Vue\"}]},\"Version\":{\"code\":\"Version\",\"label\":\"Version\",\"type\":\"string\",\"name\":\"Version\"},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"CSS\",\"editorHeight\":\"60vh\",\"language\":\"javascript\"},\"CSS\":{\"code\":\"CSS\",\"label\":\"CSS\",\"type\":\"string\",\"name\":\"CSS\",\"widgetType\":\"Script\",\"contentType\":\"CSS\",\"editorHeight\":\"80vh\",\"language\":\"css\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Type\":{\"code\":\"Type\",\"label\":\"Type\",\"type\":\"string\",\"name\":\"Type\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"Choose a Type\"},{\"name\":\"React\",\"value\":\"React\"},{\"name\":\"Vue\",\"value\":\"Vue\"}]}}}"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaComponent%22%7D,%7B%22Scope%22:%22mmf%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "891e7850-7e24-11eb-a3cf-39ae28036b92",
            "Name": "MetaComponent_Default",
            "Scope": "mmf",
            "Model": "MetaLocalSync",
            "View": "Default",
            "ModelName": "MetaComponent",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Type\":{\"code\":\"Type\",\"label\":\"Type\",\"type\":\"string\",\"name\":\"Type\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"Choose a Type\"},{\"name\":\"React\",\"value\":\"React\"},{\"name\":\"Vue\",\"value\":\"Vue\"}]},\"Version\":{\"code\":\"Version\",\"label\":\"Version\",\"type\":\"string\",\"name\":\"Version\"},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"CSS\",\"editorHeight\":\"60vh\",\"language\":\"javascript\"},\"CSS\":{\"code\":\"CSS\",\"label\":\"CSS\",\"type\":\"string\",\"name\":\"CSS\",\"widgetType\":\"Script\",\"contentType\":\"CSS\",\"editorHeight\":\"80vh\",\"language\":\"css\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"Scope\",\"label\":\"Scope\",\"dataType\":\"string\",\"name\":\"Scope\"},{\"code\":\"Type\",\"label\":\"Type\",\"dataType\":\"string\",\"name\":\"Type\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"Choose a Type\"},{\"name\":\"React\",\"value\":\"React\"},{\"name\":\"Vue\",\"value\":\"Vue\"}]},{\"code\":\"Version\",\"label\":\"Version\",\"dataType\":\"string\",\"name\":\"Version\"},{\"code\":\"Definition\",\"label\":\"Definition\",\"dataType\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"CSS\",\"editorHeight\":\"60vh\",\"language\":\"javascript\"},{\"code\":\"CSS\",\"label\":\"CSS\",\"dataType\":\"string\",\"name\":\"CSS\",\"widgetType\":\"Script\",\"contentType\":\"CSS\",\"editorHeight\":\"80vh\",\"language\":\"css\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Component Details\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"Group\",\"label\":\"Details\",\"elements\":[{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Name\",\"label\":\"Name\"},{\"type\":\"Control\",\"scope\":\"#/properties/Scope\",\"label\":\"Scope\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Type\",\"label\":\"Type\"},{\"type\":\"Control\",\"scope\":\"#/properties/Version\",\"label\":\"Version\"}]}]},{\"type\":\"Categorization\",\"elements\":[{\"type\":\"Category\",\"scope\":\"#/properties/Definition\",\"label\":\"Definition\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Definition\",\"label\":\"Definition\",\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}  .bx--label {    color: black !important;     font-size: 0.9rem !important;     font-weight: 800 !important;} \"}]},{\"type\":\"Category\",\"label\":\"CSS\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/CSS\",\"label\":\"CSS\",\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}  .bx--label {    color: black !important;     font-size: 0.9rem !important;     font-weight: 800 !important;} \"}]},{\"type\":\"Category\",\"label\":\"State List\",\"elements\":[{\"type\":\"Control\",\"subtype\":\"RelatedList\",\"scope\":\"#/properties/form_list\",\"name\":\"StateList\",\"tableName\":\"MetaComponentState\",\"fields\":[{\"name\":\"KeyName\",\"value\":\"KeyName\",\"dataType\":\"string\"}],\"filter\":\"{}\",\"relatedField\":\"StateComponent\",\"parentField\":\"uid\",\"rowClick\":true,\"listActions\":[{\"name\":\"New\"}],\"rowActions\":[]}]},{\"type\":\"Category\",\"label\":\"Property List\",\"elements\":[{\"type\":\"Control\",\"subtype\":\"RelatedList\",\"scope\":\"#/properties/form_list\",\"name\":\"PropsList\",\"tableName\":\"MetaComponentProps\",\"fields\":[{\"name\":\"Name\",\"value\":\"Name\",\"dataType\":\"string\"},{\"name\":\"Order\",\"value\":\"Order\",\"dataType\":\"string\"}],\"filter\":\"{}\",\"relatedField\":\"PropsComponent\",\"parentField\":\"uid\",\"rowClick\":true,\"listActions\":[{\"name\":\"New\"}],\"rowActions\":[]}]}]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Component Details\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"dataType\":\"Group\",\"label\":\"Details\",\"Properties\":[{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Name\",\"label\":\"Name\",\"draggable\":false},{\"dataType\":\"Control\",\"scope\":\"Scope\",\"label\":\"Scope\",\"draggable\":false}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Type\",\"label\":\"Type\"},{\"dataType\":\"Control\",\"scope\":\"Version\",\"label\":\"Version\"}]}]},{\"dataType\":\"Categorization\",\"Properties\":[{\"dataType\":\"Category\",\"scope\":\"Definition\",\"label\":\"Definition\",\"draggable\":false,\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Definition\",\"label\":\"Definition\",\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}  .bx--label {    color: black !important;     font-size: 0.9rem !important;     font-weight: 800 !important;} \"}]},{\"dataType\":\"Category\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"CSS\",\"label\":\"CSS\",\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}  .bx--label {    color: black !important;     font-size: 0.9rem !important;     font-weight: 800 !important;} \"}],\"label\":\"CSS\"},{\"dataType\":\"Category\",\"Properties\":[{\"dataType\":\"List\",\"listType\":\"Related\",\"name\":\"StateList\",\"tableName\":\"MetaComponentState\",\"fields\":[{\"name\":\"KeyName\",\"value\":\"KeyName\",\"dataType\":\"string\"}],\"filter\":\"{}\",\"relatedField\":\"StateComponent\",\"parentField\":\"uid\",\"rowSelection\":{\"onClick\":\"Change State\"},\"listActions\":[{\"name\":\"New\",\"onClick\":\"Change State\"}]}],\"label\":\"State List\"},{\"dataType\":\"Category\",\"Properties\":[{\"dataType\":\"List\",\"listType\":\"Related\",\"name\":\"PropsList\",\"tableName\":\"MetaComponentProps\",\"fields\":[{\"name\":\"Name\",\"value\":\"Name\",\"dataType\":\"string\"},{\"name\":\"Order\",\"value\":\"Order\",\"dataType\":\"string\"}],\"filter\":\"{}\",\"relatedField\":\"PropsComponent\",\"parentField\":\"uid\",\"rowSelection\":{\"onClick\":\"Change State\"},\"listActions\":[{\"name\":\"New\",\"onClick\":\"Change State\"}]}],\"label\":\"Property List\"}]}],\"rule\":{}}",
            "default": "{\"Definition\":\"asdfasf\\nasdfasfd\",\"form_actions\":{\"parent\":{}}}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22MetaLocalSync%22%7D,%7B%22or%22:%5B%7B%22Form%22:%22891e7850-7e24-11eb-a3cf-39ae28036b92%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaComponentState%22,%22View%22:%22Default%22,%22Scope%22:%22mmf%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "383aaa20-7e34-11eb-a3cf-39ae28036b92",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"KeyName\":{\"code\":\"KeyName\",\"label\":\"KeyName\",\"type\":\"string\",\"name\":\"KeyName\"},\"AccessPath\":{\"code\":\"AccessPath\",\"label\":\"AccessPath\",\"type\":\"string\",\"name\":\"AccessPath\"},\"DefaultValue\":{\"code\":\"DefaultValue\",\"label\":\"DefaultValue\",\"type\":\"string\",\"name\":\"DefaultValue\"},\"StateComponent\":{\"code\":\"StateComponent\",\"label\":\"StateComponent\",\"type\":\"string\",\"name\":\"StateComponent\",\"widgetType\":\"Reference\",\"tableName\":\"MetaComponent\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"KeyName\":{\"code\":\"KeyName\",\"label\":\"KeyName\",\"type\":\"string\",\"name\":\"KeyName\"},\"StateComponent\":{\"code\":\"StateComponent\",\"label\":\"StateComponent\",\"type\":\"string\",\"name\":\"StateComponent\",\"widgetType\":\"Reference\",\"tableName\":\"MetaComponent\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"uid\":{\"type\":\"string\"}}}"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaComponentState%22%7D,%7B%22Scope%22:%22mmf%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "383aaa20-7e34-11eb-a3cf-39ae28036b92",
            "Name": "MetaComponentState_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaComponentState",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"KeyName\":{\"code\":\"KeyName\",\"label\":\"KeyName\",\"type\":\"string\",\"name\":\"KeyName\"},\"AccessPath\":{\"code\":\"AccessPath\",\"label\":\"AccessPath\",\"type\":\"string\",\"name\":\"AccessPath\"},\"DefaultValue\":{\"code\":\"DefaultValue\",\"label\":\"DefaultValue\",\"type\":\"string\",\"name\":\"DefaultValue\"},\"StateComponent\":{\"code\":\"StateComponent\",\"label\":\"StateComponent\",\"type\":\"string\",\"name\":\"StateComponent\",\"widgetType\":\"Reference\",\"tableName\":\"MetaComponent\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"KeyName\",\"label\":\"KeyName\",\"dataType\":\"string\",\"name\":\"KeyName\"},{\"code\":\"AccessPath\",\"label\":\"AccessPath\",\"dataType\":\"string\",\"name\":\"AccessPath\"},{\"code\":\"DefaultValue\",\"label\":\"DefaultValue\",\"dataType\":\"string\",\"name\":\"DefaultValue\"},{\"code\":\"StateComponent\",\"label\":\"StateComponent\",\"dataType\":\"string\",\"name\":\"StateComponent\",\"widgetType\":\"Reference\",\"tableName\":\"MetaComponent\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Component State - Details\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"VerticalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/KeyName\",\"label\":\"KeyName\"},{\"type\":\"Control\",\"scope\":\"#/properties/StateComponent\"}]},{\"type\":\"VerticalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/AccessPath\",\"label\":\"AccessPath\"},{\"type\":\"Control\",\"scope\":\"#/properties/DefaultValue\",\"label\":\"DefaultValue\"}]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Component State - Details\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"KeyName\",\"label\":\"KeyName\"},{\"dataType\":\"Control\",\"scope\":\"StateComponent\"}]},{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"AccessPath\",\"label\":\"AccessPath\"},{\"dataType\":\"Control\",\"scope\":\"DefaultValue\",\"label\":\"DefaultValue\"}]}],\"rule\":{}}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22MetaComponentState%22%7D,%7B%22or%22:%5B%7B%22Form%22:%22383aaa20-7e34-11eb-a3cf-39ae28036b92%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaComponentProps%22,%22View%22:%22Default%22,%22Scope%22:%22mmf%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "caaa1510-7e36-11eb-a3cf-39ae28036b92",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Type\":{\"code\":\"Type\",\"label\":\"Type\",\"type\":\"string\",\"name\":\"Type\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"Checkbox\",\"value\":\"Checkbox\"},{\"name\":\"ComponentSelector\",\"value\":\"ComponentSelector\"},{\"name\":\"Date\",\"value\":\"Date\"},{\"name\":\"FieldMap\",\"value\":\"FieldMap\"},{\"name\":\"FieldSelector\",\"value\":\"FieldSelector\"},{\"name\":\"Hidden\",\"value\":\"Hidden\"},{\"name\":\"KeyFieldList\",\"value\":\"KeyFieldList\"},{\"name\":\"KeyValueList\",\"value\":\"KeyValueList\"},{\"name\":\"NavSelector\",\"value\":\"NavSelector\"},{\"name\":\"Number\",\"value\":\"Number\"},{\"name\":\"PageParameter\",\"value\":\"PageParameter\"},{\"name\":\"PageSelector\",\"value\":\"PageSelector\"},{\"name\":\"Radio\",\"value\":\"Radio\"},{\"name\":\"RecordSelector\",\"value\":\"RecordSelector\"},{\"name\":\"Select\",\"value\":\"Select\"},{\"name\":\"TableSelector\",\"value\":\"TableSelector\"},{\"name\":\"TabMap\",\"value\":\"TabMap\"},{\"name\":\"Tabs\",\"value\":\"Tabs\"},{\"name\":\"TextArea\",\"value\":\"TextArea\"},{\"name\":\"TextInput\",\"value\":\"TextInput\"},{\"name\":\"Time\",\"value\":\"Time\"}]},\"DefaultValue\":{\"code\":\"DefaultValue\",\"label\":\"DefaultValue\",\"type\":\"string\",\"name\":\"DefaultValue\"},\"Order\":{\"code\":\"Order\",\"label\":\"Order\",\"type\":\"number\",\"name\":\"Order\"},\"Attributes\":{\"code\":\"Attributes\",\"label\":\"Attributes\",\"type\":\"string\",\"name\":\"Attributes\"},\"PropsComponent\":{\"code\":\"PropsComponent\",\"label\":\"PropsComponent\",\"type\":\"string\",\"name\":\"PropsComponent\",\"widgetType\":\"Reference\",\"tableName\":\"MetaComponent\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Type\":{\"code\":\"Type\",\"label\":\"Type\",\"type\":\"string\",\"name\":\"Type\"},\"Order\":{\"code\":\"Order\",\"label\":\"Order\",\"type\":\"number\",\"name\":\"Order\"},\"PropsComponent\":{\"code\":\"PropsComponent\",\"label\":\"PropsComponent\",\"type\":\"string\",\"name\":\"PropsComponent\",\"widgetType\":\"Reference\",\"tableName\":\"MetaComponent\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"uid\":{\"type\":\"string\"}}}"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaComponentProps%22%7D,%7B%22Scope%22:%22mmf%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "caaa1510-7e36-11eb-a3cf-39ae28036b92",
            "Name": "MetaComponentProps_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaComponentProps",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Type\":{\"code\":\"Type\",\"label\":\"Type\",\"type\":\"string\",\"name\":\"Type\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"Checkbox\",\"value\":\"Checkbox\"},{\"name\":\"ComponentSelector\",\"value\":\"ComponentSelector\"},{\"name\":\"Date\",\"value\":\"Date\"},{\"name\":\"FieldMap\",\"value\":\"FieldMap\"},{\"name\":\"FieldSelector\",\"value\":\"FieldSelector\"},{\"name\":\"Hidden\",\"value\":\"Hidden\"},{\"name\":\"KeyFieldList\",\"value\":\"KeyFieldList\"},{\"name\":\"KeyValueList\",\"value\":\"KeyValueList\"},{\"name\":\"NavSelector\",\"value\":\"NavSelector\"},{\"name\":\"Number\",\"value\":\"Number\"},{\"name\":\"PageParameter\",\"value\":\"PageParameter\"},{\"name\":\"PageSelector\",\"value\":\"PageSelector\"},{\"name\":\"Radio\",\"value\":\"Radio\"},{\"name\":\"RecordSelector\",\"value\":\"RecordSelector\"},{\"name\":\"Select\",\"value\":\"Select\"},{\"name\":\"TableSelector\",\"value\":\"TableSelector\"},{\"name\":\"TabMap\",\"value\":\"TabMap\"},{\"name\":\"Tabs\",\"value\":\"Tabs\"},{\"name\":\"TextArea\",\"value\":\"TextArea\"},{\"name\":\"TextInput\",\"value\":\"TextInput\"},{\"name\":\"Time\",\"value\":\"Time\"}]},\"DefaultValue\":{\"code\":\"DefaultValue\",\"label\":\"DefaultValue\",\"type\":\"string\",\"name\":\"DefaultValue\"},\"Order\":{\"code\":\"Order\",\"label\":\"Order\",\"type\":\"number\",\"name\":\"Order\"},\"Attributes\":{\"code\":\"Attributes\",\"label\":\"Attributes\",\"type\":\"string\",\"name\":\"Attributes\"},\"PropsComponent\":{\"code\":\"PropsComponent\",\"label\":\"PropsComponent\",\"type\":\"string\",\"name\":\"PropsComponent\",\"widgetType\":\"Reference\",\"tableName\":\"MetaComponent\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"Type\",\"label\":\"Type\",\"dataType\":\"string\",\"name\":\"Type\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"Checkbox\",\"value\":\"Checkbox\"},{\"name\":\"ComponentSelector\",\"value\":\"ComponentSelector\"},{\"name\":\"Date\",\"value\":\"Date\"},{\"name\":\"FieldMap\",\"value\":\"FieldMap\"},{\"name\":\"FieldSelector\",\"value\":\"FieldSelector\"},{\"name\":\"Hidden\",\"value\":\"Hidden\"},{\"name\":\"KeyFieldList\",\"value\":\"KeyFieldList\"},{\"name\":\"KeyValueList\",\"value\":\"KeyValueList\"},{\"name\":\"NavSelector\",\"value\":\"NavSelector\"},{\"name\":\"Number\",\"value\":\"Number\"},{\"name\":\"PageParameter\",\"value\":\"PageParameter\"},{\"name\":\"PageSelector\",\"value\":\"PageSelector\"},{\"name\":\"Radio\",\"value\":\"Radio\"},{\"name\":\"RecordSelector\",\"value\":\"RecordSelector\"},{\"name\":\"Select\",\"value\":\"Select\"},{\"name\":\"TableSelector\",\"value\":\"TableSelector\"},{\"name\":\"TabMap\",\"value\":\"TabMap\"},{\"name\":\"Tabs\",\"value\":\"Tabs\"},{\"name\":\"TextArea\",\"value\":\"TextArea\"},{\"name\":\"TextInput\",\"value\":\"TextInput\"},{\"name\":\"Time\",\"value\":\"Time\"}]},{\"code\":\"DefaultValue\",\"label\":\"DefaultValue\",\"dataType\":\"string\",\"name\":\"DefaultValue\"},{\"code\":\"Order\",\"label\":\"Order\",\"dataType\":\"number\",\"name\":\"Order\"},{\"code\":\"Attributes\",\"label\":\"Attributes\",\"dataType\":\"string\",\"name\":\"Attributes\"},{\"code\":\"PropsComponent\",\"label\":\"PropsComponent\",\"dataType\":\"string\",\"name\":\"PropsComponent\",\"widgetType\":\"Reference\",\"tableName\":\"MetaComponent\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Component Props - Details\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Name\"},{\"type\":\"Control\",\"scope\":\"#/properties/Type\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Order\"},{\"type\":\"Control\",\"scope\":\"#/properties/PropsComponent\",\"label\":\"Component\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/DefaultValue\"},{\"type\":\"Control\",\"scope\":\"#/properties/Attributes\",\"label\":\"Attributes\"}]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Component Props - Details\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Name\"},{\"dataType\":\"Control\",\"scope\":\"Type\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Order\"},{\"dataType\":\"Control\",\"scope\":\"PropsComponent\",\"label\":\"Component\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"DefaultValue\"},{\"dataType\":\"Control\",\"scope\":\"Attributes\",\"label\":\"Attributes\"}]}],\"rule\":{}}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22MetaComponentProps%22%7D,%7B%22or%22:%5B%7B%22Form%22:%22caaa1510-7e36-11eb-a3cf-39ae28036b92%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaComponentAction%22,%22View%22:%22Default%22,%22Scope%22:%22mmf%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "0c5931a0-7e44-11eb-a3cf-39ae28036b92",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Action\":{\"code\":\"Action\",\"label\":\"Action\",\"type\":\"string\",\"name\":\"Action\"},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"60vh\",\"language\":\"javascript\"},\"ActionComponent\":{\"code\":\"ActionComponent\",\"label\":\"ActionComponent\",\"type\":\"string\",\"name\":\"ActionComponent\",\"widgetType\":\"Reference\",\"tableName\":\"MetaComponent\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"Action\":{\"code\":\"Action\",\"label\":\"Action\",\"type\":\"string\",\"name\":\"Action\"}}}"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaComponentAction%22%7D,%7B%22Scope%22:%22mmf%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "0c5931a0-7e44-11eb-a3cf-39ae28036b92",
            "Name": "MetaComponentAction_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaComponentAction",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Action\":{\"code\":\"Action\",\"label\":\"Action\",\"type\":\"string\",\"name\":\"Action\"},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"60vh\",\"language\":\"javascript\"},\"ActionComponent\":{\"code\":\"ActionComponent\",\"label\":\"ActionComponent\",\"type\":\"string\",\"name\":\"ActionComponent\",\"widgetType\":\"Reference\",\"tableName\":\"MetaComponent\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"Action\",\"label\":\"Action\",\"dataType\":\"string\",\"name\":\"Action\"},{\"code\":\"Definition\",\"label\":\"Definition\",\"dataType\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"60vh\",\"language\":\"javascript\"},{\"code\":\"ActionComponent\",\"label\":\"ActionComponent\",\"dataType\":\"string\",\"name\":\"ActionComponent\",\"widgetType\":\"Reference\",\"tableName\":\"MetaComponent\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Component Action - Details\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"VerticalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Action\"},{\"type\":\"Control\",\"scope\":\"#/properties/ActionComponent\",\"label\":\"Action Component\"}]},{\"type\":\"VerticalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Definition\",\"label\":\"Definition\",\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}  .bx--label {    color: black !important;     font-size: 0.9rem !important;     font-weight: 800 !important;} \"}]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Component Action - Details\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Action\"},{\"dataType\":\"Control\",\"scope\":\"ActionComponent\",\"label\":\"Action Component\"}]},{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Definition\",\"label\":\"Definition\",\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}  .bx--label {    color: black !important;     font-size: 0.9rem !important;     font-weight: 800 !important;} \"}]}],\"rule\":{}}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22MetaComponentAction%22%7D,%7B%22or%22:%5B%7B%22Form%22:%220c5931a0-7e44-11eb-a3cf-39ae28036b92%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaRestMethod%22,%22View%22:%22Default%22,%22Scope%22:%22mmf%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "7f3f0140-7e49-11eb-a3cf-39ae28036b92",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Path\":{\"code\":\"Path\",\"label\":\"Path\",\"type\":\"string\",\"name\":\"Path\"},\"Type\":{\"code\":\"Type\",\"label\":\"Type\",\"type\":\"string\",\"name\":\"Type\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"GET\",\"value\":\"GET\"},{\"name\":\"POST\",\"value\":\"POST\"},{\"name\":\"PUT\",\"value\":\"PUT\"},{\"name\":\"DELETE\",\"value\":\"DELETE\"}]},\"Collection\":{\"code\":\"Collection\",\"label\":\"Collection\",\"type\":\"string\",\"name\":\"Collection\"},\"is_public\":{\"code\":\"is_public\",\"label\":\"is_public\",\"type\":\"boolean\",\"name\":\"is_public\"},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Path\":{\"code\":\"Path\",\"label\":\"Path\",\"type\":\"string\",\"name\":\"Path\"},\"Type\":{\"code\":\"Type\",\"label\":\"Type\",\"type\":\"string\",\"name\":\"Type\"},\"Collection\":{\"code\":\"Collection\",\"label\":\"Collection\",\"type\":\"string\",\"name\":\"Collection\"},\"is_public\":{\"code\":\"is_public\",\"label\":\"is_public\",\"type\":\"boolean\",\"name\":\"is_public\"},\"uid\":{\"type\":\"string\"}}}"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaRestMethod%22%7D,%7B%22Scope%22:%22mmf%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "7f3f0140-7e49-11eb-a3cf-39ae28036b92",
            "Name": "MetaRestMethod_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaRestMethod",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Path\":{\"code\":\"Path\",\"label\":\"Path\",\"type\":\"string\",\"name\":\"Path\"},\"Type\":{\"code\":\"Type\",\"label\":\"Type\",\"type\":\"string\",\"name\":\"Type\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"GET\",\"value\":\"GET\"},{\"name\":\"POST\",\"value\":\"POST\"},{\"name\":\"PUT\",\"value\":\"PUT\"},{\"name\":\"DELETE\",\"value\":\"DELETE\"}]},\"Collection\":{\"code\":\"Collection\",\"label\":\"Collection\",\"type\":\"string\",\"name\":\"Collection\"},\"is_public\":{\"code\":\"is_public\",\"label\":\"is_public\",\"type\":\"boolean\",\"name\":\"is_public\"},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"Scope\",\"label\":\"Scope\",\"dataType\":\"string\",\"name\":\"Scope\"},{\"code\":\"Path\",\"label\":\"Path\",\"dataType\":\"string\",\"name\":\"Path\"},{\"code\":\"Type\",\"label\":\"Type\",\"dataType\":\"string\",\"name\":\"Type\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"GET\",\"value\":\"GET\"},{\"name\":\"POST\",\"value\":\"POST\"},{\"name\":\"PUT\",\"value\":\"PUT\"},{\"name\":\"DELETE\",\"value\":\"DELETE\"}]},{\"code\":\"Collection\",\"label\":\"Collection\",\"dataType\":\"string\",\"name\":\"Collection\"},{\"code\":\"is_public\",\"label\":\"is_public\",\"dataType\":\"boolean\",\"name\":\"is_public\"},{\"code\":\"Definition\",\"label\":\"Definition\",\"dataType\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Rest Method - Details\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"Group\",\"label\":\"Details\",\"elements\":[{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Name\"},{\"type\":\"Control\",\"scope\":\"#/properties/Scope\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Type\"},{\"type\":\"Control\",\"scope\":\"#/properties/Path\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Collection\"},{\"type\":\"Control\",\"scope\":\"#/properties/is_public\"}]}]},{\"type\":\"Control\",\"scope\":\"#/properties/Definition\",\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}  .bx--label {    color: black !important;     font-size: 0.9rem !important;     font-weight: 800 !important;} \"}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Rest Method - Details\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"dataType\":\"Group\",\"label\":\"Details\",\"Properties\":[{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Name\",\"draggable\":false},{\"dataType\":\"Control\",\"scope\":\"Scope\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Type\"},{\"dataType\":\"Control\",\"scope\":\"Path\",\"draggable\":false}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Collection\"},{\"dataType\":\"Control\",\"scope\":\"is_public\"}]}]},{\"dataType\":\"Control\",\"scope\":\"Definition\",\"draggable\":\"\",\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}  .bx--label {    color: black !important;     font-size: 0.9rem !important;     font-weight: 800 !important;} \"}],\"rule\":{}}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22MetaRestMethod%22%7D,%7B%22or%22:%5B%7B%22Form%22:%227f3f0140-7e49-11eb-a3cf-39ae28036b92%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaScope%22,%22View%22:%22Default%22,%22Scope%22:%22mmf%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "33978c40-7e52-11eb-a3cf-39ae28036b92",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Code\":{\"code\":\"Code\",\"label\":\"Code\",\"type\":\"string\",\"name\":\"Code\"},\"Description\":{\"code\":\"Description\",\"label\":\"Description\",\"type\":\"string\",\"name\":\"Description\"},\"IconName\":{\"code\":\"IconName\",\"label\":\"IconName\",\"type\":\"string\",\"name\":\"IconName\"},\"Category\":{\"code\":\"Category\",\"label\":\"Category\",\"type\":\"string\",\"name\":\"Category\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Code\":{\"code\":\"Code\",\"label\":\"Code\",\"type\":\"string\",\"name\":\"Code\"},\"Description\":{\"code\":\"Description\",\"label\":\"Description\",\"type\":\"string\",\"name\":\"Description\"},\"IconName\":{\"code\":\"IconName\",\"label\":\"IconName\",\"type\":\"string\",\"name\":\"IconName\"},\"Category\":{\"code\":\"Category\",\"label\":\"Category\",\"type\":\"string\",\"name\":\"Category\"}}}"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaScope%22%7D,%7B%22Scope%22:%22mmf%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "33978c40-7e52-11eb-a3cf-39ae28036b92",
            "Name": "MetaScope_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaScope",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Code\":{\"code\":\"Code\",\"label\":\"Code\",\"type\":\"string\",\"name\":\"Code\"},\"Description\":{\"code\":\"Description\",\"label\":\"Description\",\"type\":\"string\",\"name\":\"Description\"},\"IconName\":{\"code\":\"IconName\",\"label\":\"IconName\",\"type\":\"string\",\"name\":\"IconName\"},\"Category\":{\"code\":\"Category\",\"label\":\"Category\",\"type\":\"string\",\"name\":\"Category\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"Code\",\"label\":\"Code\",\"dataType\":\"string\",\"name\":\"Code\"},{\"code\":\"Description\",\"label\":\"Description\",\"dataType\":\"string\",\"name\":\"Description\"},{\"code\":\"IconName\",\"label\":\"IconName\",\"dataType\":\"string\",\"name\":\"IconName\"},{\"code\":\"Category\",\"label\":\"Category\",\"dataType\":\"string\",\"name\":\"Category\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Form - Application\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/IconName\"},{\"type\":\"Control\",\"scope\":\"#/properties/Category\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Description\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Name\"},{\"type\":\"Control\",\"scope\":\"#/properties/Code\"}]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Form - Application\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\",\"draggable\":false},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"IconName\"},{\"dataType\":\"Control\",\"scope\":\"Category\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Description\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Name\"},{\"dataType\":\"Control\",\"scope\":\"Code\"}]}]}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22MetaScope%22%7D,%7B%22or%22:%5B%7B%22Form%22:%2233978c40-7e52-11eb-a3cf-39ae28036b92%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaLocalSync%22,%22View%22:%22Default%22,%22Scope%22:%22mmf%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "1cc815d0-9300-11eb-a4bd-7da498ed85b5",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Order\":{\"code\":\"Order\",\"label\":\"Order\",\"type\":\"number\",\"name\":\"Order\"},\"Table\":{\"code\":\"Table\",\"label\":\"Table\",\"type\":\"string\",\"name\":\"Table\"},\"Field\":{\"code\":\"Field\",\"label\":\"Field\",\"type\":\"string\",\"name\":\"Field\"},\"ExportScript\":{\"code\":\"ExportScript\",\"label\":\"ExportScript\",\"type\":\"string\",\"name\":\"ExportScript\"},\"ImportScript\":{\"code\":\"ImportScript\",\"label\":\"ImportScript\",\"type\":\"string\",\"name\":\"ImportScript\"},\"LocalPath\":{\"code\":\"LocalPath\",\"label\":\"LocalPath\",\"type\":\"string\",\"name\":\"LocalPath\"},\"Level\":{\"code\":\"Level\",\"label\":\"Level\",\"type\":\"string\",\"name\":\"Level\"},\"ImportCondition\":{\"code\":\"ImportCondition\",\"label\":\"ImportCondition\",\"type\":\"string\",\"name\":\"ImportCondition\"},\"ExportCondition\":{\"code\":\"ExportCondition\",\"label\":\"ExportCondition\",\"type\":\"string\",\"name\":\"ExportCondition\"},\"Active\":{\"code\":\"Active\",\"label\":\"Active\",\"type\":\"string\",\"name\":\"Active\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Table\":{\"code\":\"Table\",\"label\":\"Table\",\"type\":\"string\",\"name\":\"Table\"},\"LocalPath\":{\"code\":\"LocalPath\",\"label\":\"LocalPath\",\"type\":\"string\",\"name\":\"LocalPath\"},\"uid\":{\"type\":\"string\"}}}"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaLocalSync%22%7D,%7B%22Scope%22:%22mmf%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "1cc815d0-9300-11eb-a4bd-7da498ed85b5",
            "Name": "MetaLocalSync_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaLocalSync",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Order\":{\"code\":\"Order\",\"label\":\"Order\",\"type\":\"number\",\"name\":\"Order\"},\"Table\":{\"code\":\"Table\",\"label\":\"Table\",\"type\":\"string\",\"name\":\"Table\"},\"Field\":{\"code\":\"Field\",\"label\":\"Field\",\"type\":\"string\",\"name\":\"Field\"},\"ExportScript\":{\"code\":\"ExportScript\",\"label\":\"ExportScript\",\"type\":\"string\",\"name\":\"ExportScript\"},\"ImportScript\":{\"code\":\"ImportScript\",\"label\":\"ImportScript\",\"type\":\"string\",\"name\":\"ImportScript\"},\"LocalPath\":{\"code\":\"LocalPath\",\"label\":\"LocalPath\",\"type\":\"string\",\"name\":\"LocalPath\"},\"Level\":{\"code\":\"Level\",\"label\":\"Level\",\"type\":\"string\",\"name\":\"Level\"},\"ImportCondition\":{\"code\":\"ImportCondition\",\"label\":\"ImportCondition\",\"type\":\"string\",\"name\":\"ImportCondition\"},\"ExportCondition\":{\"code\":\"ExportCondition\",\"label\":\"ExportCondition\",\"type\":\"string\",\"name\":\"ExportCondition\"},\"Active\":{\"code\":\"Active\",\"label\":\"Active\",\"type\":\"string\",\"name\":\"Active\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"Order\",\"label\":\"Order\",\"dataType\":\"number\",\"name\":\"Order\"},{\"code\":\"Table\",\"label\":\"Table\",\"dataType\":\"string\",\"name\":\"Table\"},{\"code\":\"Field\",\"label\":\"Field\",\"dataType\":\"string\",\"name\":\"Field\"},{\"code\":\"ExportScript\",\"label\":\"ExportScript\",\"dataType\":\"text\",\"name\":\"ExportScript\"},{\"code\":\"ImportScript\",\"label\":\"ImportScript\",\"dataType\":\"text\",\"name\":\"ImportScript\"},{\"code\":\"LocalPath\",\"label\":\"LocalPath\",\"dataType\":\"string\",\"name\":\"LocalPath\"},{\"code\":\"Level\",\"label\":\"Level\",\"dataType\":\"string\",\"name\":\"Level\"},{\"code\":\"ImportCondition\",\"label\":\"ImportCondition\",\"dataType\":\"string\",\"name\":\"ImportCondition\"},{\"code\":\"ExportCondition\",\"label\":\"ExportCondition\",\"dataType\":\"string\",\"name\":\"ExportCondition\"},{\"code\":\"Active\",\"label\":\"Active\",\"dataType\":\"string\",\"name\":\"Active\"},{\"code\":\"Scope\",\"label\":\"Scope\",\"dataType\":\"string\",\"name\":\"Scope\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Form - Import Export\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"Group\",\"label\":\"Details\",\"elements\":[{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Name\"},{\"type\":\"Control\",\"scope\":\"#/properties/Scope\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Table\"},{\"type\":\"Control\",\"scope\":\"#/properties/Field\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/LocalPath\"},{\"type\":\"Control\",\"scope\":\"#/properties/Level\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Active\"},{\"type\":\"Control\",\"scope\":\"#/properties/Scope\"}]},{\"type\":\"Control\",\"scope\":\"#/properties/ExportCondition\"},{\"type\":\"Control\",\"scope\":\"#/properties/ImportCondition\"}]},{\"type\":\"Control\",\"scope\":\"#/properties/ImportScript\",\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}  .bx--label {    color: black !important;     font-size: 0.9rem !important;     font-weight: 800 !important;} \",\"widget\":{\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"40vh\",\"language\":\"javascript\",\"draggable\":false,\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}  .bx--label {    color: black !important;     font-size: 0.9rem !important;     font-weight: 800 !important;} \"}},{\"type\":\"HorizontalLayout\",\"elements\":[]},{\"type\":\"Control\",\"scope\":\"#/properties/ExportScript\",\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}  .bx--label {    color: black !important;     font-size: 0.9rem !important;     font-weight: 800 !important;} \",\"widget\":{\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"40vh\",\"language\":\"javascript\",\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}  .bx--label {    color: black !important;     font-size: 0.9rem !important;     font-weight: 800 !important;} \"}}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Form - Import Export\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"dataType\":\"Group\",\"label\":\"Details\",\"Properties\":[{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Name\"},{\"dataType\":\"Control\",\"scope\":\"Scope\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Table\"},{\"dataType\":\"Control\",\"scope\":\"Field\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"LocalPath\"},{\"dataType\":\"Control\",\"scope\":\"Level\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Active\",\"options\":\"\",\"choiceList\":\"[]\"},{\"dataType\":\"Control\",\"scope\":\"Scope\"}]},{\"dataType\":\"Control\",\"scope\":\"ExportCondition\",\"draggable\":false},{\"dataType\":\"Control\",\"scope\":\"ImportCondition\",\"draggable\":false}]},{\"dataType\":\"Control\",\"scope\":\"ImportScript\",\"widgetType\":\"Script\",\"options\":null,\"contentType\":\"JS\",\"editorHeight\":\"40vh\",\"language\":\"javascript\",\"draggable\":false,\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}  .bx--label {    color: black !important;     font-size: 0.9rem !important;     font-weight: 800 !important;} \"},{\"dataType\":\"HorizontalLayout\",\"Properties\":[]},{\"dataType\":\"Control\",\"scope\":\"ExportScript\",\"widgetType\":\"Script\",\"options\":null,\"contentType\":\"JS\",\"editorHeight\":\"40vh\",\"language\":\"javascript\",\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}  .bx--label {    color: black !important;     font-size: 0.9rem !important;     font-weight: 800 !important;} \"}],\"rule\":{}}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22MetaLocalSync%22%7D,%7B%22or%22:%5B%7B%22Form%22:%221cc815d0-9300-11eb-a4bd-7da498ed85b5%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22SrsteeUser%22%7D,%7B%22Scope%22:%22mmf%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "8b49ba40-7a96-11eb-9e38-d5c898336ee7",
            "Name": "SrsteeUser_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "SrsteeUser",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"FirstName\":{\"code\":\"FirstName\",\"label\":\"FirstName\",\"type\":\"string\",\"name\":\"FirstName\"},\"LastName\":{\"code\":\"LastName\",\"label\":\"LastName\",\"type\":\"string\",\"name\":\"LastName\"},\"Email\":{\"code\":\"Email\",\"label\":\"Email\",\"type\":\"string\",\"name\":\"Email\"},\"LastVisitedScope\":{\"code\":\"LastVisitedScope\",\"label\":\"LastVisitedScope\",\"type\":\"string\",\"name\":\"LastVisitedScope\"},\"Password\":{\"code\":\"Password\",\"label\":\"Password\",\"type\":\"string\",\"name\":\"Password\"},\"Active\":{\"code\":\"Active\",\"label\":\"Active\",\"type\":\"boolean\",\"name\":\"Active\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"FirstName\",\"label\":\"FirstName\",\"dataType\":\"string\",\"name\":\"FirstName\"},{\"code\":\"LastName\",\"label\":\"LastName\",\"dataType\":\"string\",\"name\":\"LastName\"},{\"code\":\"Email\",\"label\":\"Email\",\"dataType\":\"string\",\"name\":\"Email\"},{\"code\":\"LastVisitedScope\",\"label\":\"LastVisitedScope\",\"dataType\":\"string\",\"name\":\"LastVisitedScope\"},{\"code\":\"Password\",\"label\":\"Password\",\"dataType\":\"string\",\"name\":\"Password\"},{\"code\":\"Active\",\"label\":\"Active\",\"dataType\":\"boolean\",\"name\":\"Active\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Form - User Details\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Email\"},{\"type\":\"Control\",\"scope\":\"#/properties/LastVisitedScope\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Password\"},{\"type\":\"Control\",\"scope\":\"#/properties/Active\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/FirstName\"},{\"type\":\"Control\",\"scope\":\"#/properties/LastName\"}]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Form - User Details\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"draggable\":false},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\",\"draggable\":false},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Email\"},{\"dataType\":\"Control\",\"scope\":\"LastVisitedScope\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Password\"},{\"dataType\":\"Control\",\"scope\":\"Active\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"FirstName\"},{\"dataType\":\"Control\",\"scope\":\"LastName\"}]}],\"rule\":{}}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22SrsteeUser%22%7D,%7B%22or%22:%5B%7B%22Form%22:%228b49ba40-7a96-11eb-9e38-d5c898336ee7%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22SrsteeRole%22,%22View%22:%22Default%22,%22Scope%22:%22mmf%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "e0117c30-7f22-11eb-a3cf-39ae28036b92",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Description\":{\"code\":\"Description\",\"label\":\"Description\",\"type\":\"string\",\"name\":\"Description\"},\"ContainedRole\":{\"code\":\"ContainedRole\",\"label\":\"ContainedRole\",\"type\":\"string\",\"name\":\"ContainedRole\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeRole\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"RootRole\":{\"code\":\"RootRole\",\"label\":\"RootRole\",\"type\":\"string\",\"name\":\"RootRole\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeRole\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"ContainedRole\":{\"code\":\"ContainedRole\",\"label\":\"ContainedRole\",\"type\":\"string\",\"name\":\"ContainedRole\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeRole\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"RootRole\":{\"code\":\"RootRole\",\"label\":\"RootRole\",\"type\":\"string\",\"name\":\"RootRole\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeRole\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"uid\":{\"type\":\"string\"}}}"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22SrsteeRole%22%7D,%7B%22Scope%22:%22mmf%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "e0117c30-7f22-11eb-a3cf-39ae28036b92",
            "Name": "SrsteeRole_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "SrsteeRole",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Description\":{\"code\":\"Description\",\"label\":\"Description\",\"type\":\"string\",\"name\":\"Description\"},\"ContainedRole\":{\"code\":\"ContainedRole\",\"label\":\"ContainedRole\",\"type\":\"string\",\"name\":\"ContainedRole\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeRole\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"RootRole\":{\"code\":\"RootRole\",\"label\":\"RootRole\",\"type\":\"string\",\"name\":\"RootRole\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeRole\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"Description\",\"label\":\"Description\",\"dataType\":\"string\",\"name\":\"Description\"},{\"code\":\"ContainedRole\",\"label\":\"ContainedRole\",\"dataType\":\"string\",\"name\":\"ContainedRole\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeRole\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},{\"code\":\"RootRole\",\"label\":\"RootRole\",\"dataType\":\"string\",\"name\":\"RootRole\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeRole\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Role - Details\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Name\"},{\"type\":\"Control\",\"scope\":\"#/properties/Description\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/ContainedRole\"},{\"type\":\"Control\",\"scope\":\"#/properties/RootRole\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Role - Details\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Name\"},{\"dataType\":\"Control\",\"scope\":\"Description\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"ContainedRole\"},{\"dataType\":\"Control\",\"scope\":\"RootRole\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[]}],\"rule\":{}}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22SrsteeRole%22%7D,%7B%22or%22:%5B%7B%22Form%22:%22e0117c30-7f22-11eb-a3cf-39ae28036b92%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22SrsteeUserRole%22,%22View%22:%22Default%22,%22Scope%22:%22mmf%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "689bff60-7f2a-11eb-a3cf-39ae28036b92",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"SrsteeUser\":{\"code\":\"SrsteeUser\",\"label\":\"SrsteeUser\",\"type\":\"string\",\"name\":\"SrsteeUser\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeUser\",\"displayField\":\"FirstName\",\"secondaryDisplayField\":\"LastName\",\"filter\":\"{}\",\"searchfields\":\"FirstName,LastName\"},\"SrsteeRole\":{\"code\":\"SrsteeRole\",\"label\":\"SrsteeRole\",\"type\":\"string\",\"name\":\"SrsteeRole\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeRole\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"SrsteeUser\":{\"code\":\"SrsteeUser\",\"label\":\"SrsteeUser\",\"type\":\"string\",\"name\":\"SrsteeUser\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeUser\",\"displayField\":\"FirstName\",\"searchfields\":\"FirstName,LastName\",\"secondaryDisplayField\":\"LastName\",\"filter\":\"{}\"},\"SrsteeRole\":{\"code\":\"SrsteeRole\",\"label\":\"SrsteeRole\",\"type\":\"string\",\"name\":\"SrsteeRole\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeRole\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"uid\":{\"type\":\"string\"}}}"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22SrsteeUserRole%22%7D,%7B%22Scope%22:%22mmf%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "689bff60-7f2a-11eb-a3cf-39ae28036b92",
            "Name": "SrsteeUserRole_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "SrsteeUserRole",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"SrsteeUser\":{\"code\":\"SrsteeUser\",\"label\":\"SrsteeUser\",\"type\":\"string\",\"name\":\"SrsteeUser\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeUser\",\"displayField\":\"FirstName\",\"secondaryDisplayField\":\"LastName\",\"filter\":\"{}\",\"searchfields\":\"FirstName,LastName\"},\"SrsteeRole\":{\"code\":\"SrsteeRole\",\"label\":\"SrsteeRole\",\"type\":\"string\",\"name\":\"SrsteeRole\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeRole\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"SrsteeUser\",\"label\":\"SrsteeUser\",\"dataType\":\"string\",\"name\":\"SrsteeUser\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeUser\",\"displayField\":\"FirstName\",\"secondaryDisplayField\":\"LastName\",\"filter\":\"{}\",\"searchfields\":\"FirstName,LastName\"},{\"code\":\"SrsteeRole\",\"label\":\"SrsteeRole\",\"dataType\":\"string\",\"name\":\"SrsteeRole\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeRole\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"User Role - Details\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/SrsteeUser\"},{\"type\":\"Control\",\"scope\":\"#/properties/SrsteeRole\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"User Role - Details\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"SrsteeUser\"},{\"dataType\":\"Control\",\"scope\":\"SrsteeRole\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[]}],\"rule\":{}}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22SrsteeUserRole%22%7D,%7B%22or%22:%5B%7B%22Form%22:%22689bff60-7f2a-11eb-a3cf-39ae28036b92%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22SrsteeGroup%22,%22View%22:%22Default%22,%22Scope%22:%22mmf%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "862fac30-7f29-11eb-a3cf-39ae28036b92",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Description\":{\"code\":\"Description\",\"label\":\"Description\",\"type\":\"string\",\"name\":\"Description\"},\"ContainedGroup\":{\"code\":\"ContainedGroup\",\"label\":\"ContainedGroup\",\"type\":\"string\",\"name\":\"ContainedGroup\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeGroup\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"RootGroup\":{\"code\":\"RootGroup\",\"label\":\"RootGroup\",\"type\":\"string\",\"name\":\"RootGroup\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeGroup\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"ContainedGroup\":{\"code\":\"ContainedGroup\",\"label\":\"ContainedGroup\",\"type\":\"string\",\"name\":\"ContainedGroup\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeGroup\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"RootGroup\":{\"code\":\"RootGroup\",\"label\":\"RootGroup\",\"type\":\"string\",\"name\":\"RootGroup\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeGroup\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"uid\":{\"type\":\"string\"}}}"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22SrsteeGroup%22%7D,%7B%22Scope%22:%22mmf%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "862fac30-7f29-11eb-a3cf-39ae28036b92",
            "Name": "SrsteeGroup_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "SrsteeGroup",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Description\":{\"code\":\"Description\",\"label\":\"Description\",\"type\":\"string\",\"name\":\"Description\"},\"ContainedGroup\":{\"code\":\"ContainedGroup\",\"label\":\"ContainedGroup\",\"type\":\"string\",\"name\":\"ContainedGroup\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeGroup\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"RootGroup\":{\"code\":\"RootGroup\",\"label\":\"RootGroup\",\"type\":\"string\",\"name\":\"RootGroup\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeGroup\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"Description\",\"label\":\"Description\",\"dataType\":\"string\",\"name\":\"Description\"},{\"code\":\"ContainedGroup\",\"label\":\"ContainedGroup\",\"dataType\":\"string\",\"name\":\"ContainedGroup\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeGroup\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},{\"code\":\"RootGroup\",\"label\":\"RootGroup\",\"dataType\":\"string\",\"name\":\"RootGroup\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeGroup\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Group - Details\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Name\"},{\"type\":\"Control\",\"scope\":\"#/properties/Description\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/ContainedGroup\"},{\"type\":\"Control\",\"scope\":\"#/properties/RootGroup\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Group - Details\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Name\"},{\"dataType\":\"Control\",\"scope\":\"Description\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"ContainedGroup\"},{\"dataType\":\"Control\",\"scope\":\"RootGroup\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[]}],\"rule\":{}}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22SrsteeGroup%22%7D,%7B%22or%22:%5B%7B%22Form%22:%22862fac30-7f29-11eb-a3cf-39ae28036b92%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22SrsteeGroupRole%22,%22View%22:%22Default%22,%22Scope%22:%22mmf%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "ff790500-7f29-11eb-a3cf-39ae28036b92",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"SrsteeGroup\":{\"code\":\"SrsteeGroup\",\"label\":\"SrsteeGroup\",\"type\":\"string\",\"name\":\"SrsteeGroup\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeGroup\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"SrsteeRole\":{\"code\":\"SrsteeRole\",\"label\":\"SrsteeRole\",\"type\":\"string\",\"name\":\"SrsteeRole\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeRole\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"SrsteeGroup\":{\"code\":\"SrsteeGroup\",\"label\":\"SrsteeGroup\",\"type\":\"string\",\"name\":\"SrsteeGroup\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeGroup\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"SrsteeRole\":{\"code\":\"SrsteeRole\",\"label\":\"SrsteeRole\",\"type\":\"string\",\"name\":\"SrsteeRole\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeRole\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"uid\":{\"type\":\"string\"}}}"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22SrsteeGroupRole%22%7D,%7B%22Scope%22:%22mmf%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "ff790500-7f29-11eb-a3cf-39ae28036b92",
            "Name": "SrsteeGroupRole_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "SrsteeGroupRole",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"SrsteeGroup\":{\"code\":\"SrsteeGroup\",\"label\":\"SrsteeGroup\",\"type\":\"string\",\"name\":\"SrsteeGroup\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeGroup\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"SrsteeRole\":{\"code\":\"SrsteeRole\",\"label\":\"SrsteeRole\",\"type\":\"string\",\"name\":\"SrsteeRole\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeRole\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"SrsteeGroup\",\"label\":\"SrsteeGroup\",\"dataType\":\"string\",\"name\":\"SrsteeGroup\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeGroup\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},{\"code\":\"SrsteeRole\",\"label\":\"SrsteeRole\",\"dataType\":\"string\",\"name\":\"SrsteeRole\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeRole\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Group Role - Details\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/SrsteeGroup\"},{\"type\":\"Control\",\"scope\":\"#/properties/SrsteeRole\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Group Role - Details\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"SrsteeGroup\"},{\"dataType\":\"Control\",\"scope\":\"SrsteeRole\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[]}],\"rule\":{}}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22SrsteeGroupRole%22%7D,%7B%22or%22:%5B%7B%22Form%22:%22ff790500-7f29-11eb-a3cf-39ae28036b92%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22SrsteeUserGroup%22,%22View%22:%22Default%22,%22Scope%22:%22mmf%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "1c3af800-7f2b-11eb-a3cf-39ae28036b92",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"SrsteeGroup\":{\"code\":\"SrsteeGroup\",\"label\":\"SrsteeGroup\",\"type\":\"string\",\"name\":\"SrsteeGroup\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeGroup\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"SrsteeUser\":{\"code\":\"SrsteeUser\",\"label\":\"SrsteeUser\",\"type\":\"string\",\"name\":\"SrsteeUser\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeUser\",\"displayField\":\"FirstName\",\"searchfields\":\"FirstName,LastName\",\"secondaryDisplayField\":\"LastName\",\"filter\":\"{}\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"SrsteeUser\":{\"code\":\"SrsteeUser\",\"label\":\"SrsteeUser\",\"type\":\"string\",\"name\":\"SrsteeUser\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeUser\",\"displayField\":\"FirstName\",\"secondaryDisplayField\":\"LastName\",\"filter\":\"{}\",\"searchfields\":\"FirstName,LastName\"},\"SrsteeGroup\":{\"code\":\"SrsteeGroup\",\"label\":\"SrsteeGroup\",\"type\":\"string\",\"name\":\"SrsteeGroup\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeGroup\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"uid\":{\"type\":\"string\"}}}"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22SrsteeUserGroup%22%7D,%7B%22Scope%22:%22mmf%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "1c3af800-7f2b-11eb-a3cf-39ae28036b92",
            "Name": "SrsteeUserGroup_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "SrsteeUserGroup",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"SrsteeGroup\":{\"code\":\"SrsteeGroup\",\"label\":\"SrsteeGroup\",\"type\":\"string\",\"name\":\"SrsteeGroup\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeGroup\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"SrsteeUser\":{\"code\":\"SrsteeUser\",\"label\":\"SrsteeUser\",\"type\":\"string\",\"name\":\"SrsteeUser\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeUser\",\"displayField\":\"FirstName\",\"searchfields\":\"FirstName,LastName\",\"secondaryDisplayField\":\"LastName\",\"filter\":\"{}\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"SrsteeGroup\",\"label\":\"SrsteeGroup\",\"dataType\":\"string\",\"name\":\"SrsteeGroup\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeGroup\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},{\"code\":\"SrsteeUser\",\"label\":\"SrsteeUser\",\"dataType\":\"string\",\"name\":\"SrsteeUser\",\"widgetType\":\"Reference\",\"tableName\":\"SrsteeUser\",\"displayField\":\"FirstName\",\"searchfields\":\"FirstName,LastName\",\"secondaryDisplayField\":\"LastName\",\"filter\":\"{}\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"User Group - Details\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/SrsteeGroup\"},{\"type\":\"Control\",\"scope\":\"#/properties/SrsteeUser\"}]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"User Group - Details\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\",\"draggable\":false}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"SrsteeGroup\"},{\"dataType\":\"Control\",\"scope\":\"SrsteeUser\"}]}],\"rule\":{}}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22SrsteeUserGroup%22%7D,%7B%22or%22:%5B%7B%22Form%22:%221c3af800-7f2b-11eb-a3cf-39ae28036b92%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22SrsteeACL%22,%22View%22:%22Default%22,%22Scope%22:%22mmf%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "f46db290-7f16-11eb-a3cf-39ae28036b92",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"AccessTo\":{\"code\":\"AccessTo\",\"label\":\"AccessTo\",\"type\":\"string\",\"name\":\"AccessTo\"},\"Resource\":{\"code\":\"Resource\",\"label\":\"Resource\",\"type\":\"string\",\"name\":\"Resource\"},\"AccessType\":{\"code\":\"AccessType\",\"label\":\"AccessType\",\"type\":\"string\",\"name\":\"AccessType\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"AccessTo\":{\"code\":\"AccessTo\",\"label\":\"AccessTo\",\"type\":\"string\",\"name\":\"AccessTo\"},\"Resource\":{\"code\":\"Resource\",\"label\":\"Resource\",\"type\":\"string\",\"name\":\"Resource\"},\"AccessType\":{\"code\":\"AccessType\",\"label\":\"AccessType\",\"type\":\"string\",\"name\":\"AccessType\"},\"uid\":{\"type\":\"string\"}}}"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22SrsteeACL%22%7D,%7B%22Scope%22:%22mmf%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "f46db290-7f16-11eb-a3cf-39ae28036b92",
            "Name": "SrsteeACL_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "SrsteeACL",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"AccessTo\":{\"code\":\"AccessTo\",\"label\":\"AccessTo\",\"type\":\"string\",\"name\":\"AccessTo\"},\"Resource\":{\"code\":\"Resource\",\"label\":\"Resource\",\"type\":\"string\",\"name\":\"Resource\"},\"AccessType\":{\"code\":\"AccessType\",\"label\":\"AccessType\",\"type\":\"string\",\"name\":\"AccessType\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"AccessTo\",\"label\":\"AccessTo\",\"dataType\":\"string\",\"name\":\"AccessTo\"},{\"code\":\"Resource\",\"label\":\"Resource\",\"dataType\":\"string\",\"name\":\"Resource\"},{\"code\":\"AccessType\",\"label\":\"AccessType\",\"dataType\":\"string\",\"name\":\"AccessType\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"ACL - Details\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Name\"},{\"type\":\"Control\",\"scope\":\"#/properties/AccessTo\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Resource\"},{\"type\":\"Control\",\"scope\":\"#/properties/AccessType\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"ACL - Details\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Name\"},{\"dataType\":\"Control\",\"scope\":\"AccessTo\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Resource\"},{\"dataType\":\"Control\",\"scope\":\"AccessType\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[]}],\"rule\":{}}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22SrsteeACL%22%7D,%7B%22or%22:%5B%7B%22Form%22:%22f46db290-7f16-11eb-a3cf-39ae28036b92%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaModel%22,%22View%22:%22Default%22,%22Scope%22:%22mmf%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "bd5fd590-7fd8-11eb-9b97-c98340ba04d3",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"60vh\",\"language\":\"javascript\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"}}}"
        }
    ],
    "MetaModel%7B%7Duid,Name,Scope": [
        {
            "uid": "00a37ac0-101a-11eb-8f54-2bd5e56b68a8",
            "Name": "VendorProductVariant",
            "Scope": "pos"
        },
        {
            "uid": "0213c740-746d-11eb-9f27-656e9d52f979",
            "Name": "Defect",
            "Scope": "agilecore"
        },
        {
            "uid": "02b95020-78cd-11eb-9ce1-e7492a2683f7",
            "Name": "ProductItem",
            "Scope": "crm"
        },
        {
            "uid": "05ea3380-5cdb-11eb-b0ac-e32bd614ab39",
            "Name": "Doctor",
            "Scope": "appointment"
        },
        {
            "uid": "0994b680-1e75-11eb-a30a-a5c828913b33",
            "Name": "WorkflowResults",
            "Scope": "workflow"
        },
        {
            "uid": "09cf54b0-9388-11eb-856d-05f275e0b59a",
            "Name": "Invoice",
            "Scope": "accounting"
        },
        {
            "uid": "120d9ef0-7071-11eb-805d-1d1986854aa7",
            "Name": "Employee",
            "Scope": "crm"
        },
        {
            "uid": "18006c90-994b-11eb-ba01-67948a9bbedb",
            "Name": "ControlTheme",
            "Scope": "studio"
        },
        {
            "uid": "1af1f4b0-706e-11eb-805d-1d1986854aa7",
            "Name": "Warehouse",
            "Scope": "crm"
        },
        {
            "uid": "1f5487b0-f1cb-11ea-83d9-51bb12c859eb",
            "Name": "VariantPricingRules",
            "Scope": "pos"
        },
        {
            "uid": "2199eeb0-a4ba-11ea-9201-51ea2d5a3fdc",
            "Name": "Project",
            "Scope": "agilecore"
        },
        {
            "uid": "27539f70-706d-11eb-805d-1d1986854aa7",
            "Name": "Country",
            "Scope": "crm"
        },
        {
            "uid": "2af492a0-2ff0-11eb-983c-55d7c395c2e4",
            "Name": "ProductOptions",
            "Scope": "pos"
        },
        {
            "uid": "2c70e840-d8a2-11ea-b1e0-8f932ded0e91",
            "Name": "Auth_OTP",
            "Scope": "pos"
        },
        {
            "uid": "2d0b7e30-746c-11eb-9f27-656e9d52f979",
            "Name": "TeamMember",
            "Scope": "agilecore"
        },
        {
            "uid": "308ebd00-c55e-11ea-9458-6338e220f2fa",
            "Name": "ProductAttributes",
            "Scope": "pos"
        },
        {
            "uid": "309aa5c0-7427-11eb-9234-0742a608ec48",
            "Name": "PurchaseOrder",
            "Scope": "crm"
        },
        {
            "uid": "31e80a40-6db9-11eb-b755-b195ba5452ad",
            "Name": "Composition",
            "Scope": "pharma"
        },
        {
            "uid": "34323480-e1e4-11ea-befb-ef9be177f3a2",
            "Name": "VendorPaymentConfiguration",
            "Scope": "pos"
        },
        {
            "uid": "360849a0-7066-11eb-805d-1d1986854aa7",
            "Name": "Department",
            "Scope": "crm"
        },
        {
            "uid": "38b427b0-93b0-11eb-856d-05f275e0b59a",
            "Name": "Customer",
            "Scope": "accounting"
        },
        {
            "uid": "42a9e0e0-6f23-11eb-a88e-337264a1ff65",
            "Name": "Company",
            "Scope": "crm"
        },
        {
            "uid": "48609940-9f37-11eb-ba1c-7f6db0e3ef7f",
            "Name": "ApplicationTheme",
            "Scope": "studio"
        },
        {
            "uid": "4aa0f220-706d-11eb-805d-1d1986854aa7",
            "Name": "States",
            "Scope": "crm"
        },
        {
            "uid": "53664d80-93b1-11eb-856d-05f275e0b59a",
            "Name": "ItemEntry",
            "Scope": "accounting"
        },
        {
            "uid": "54843710-1e75-11eb-a30a-a5c828913b33",
            "Name": "WorkflowVersion",
            "Scope": "workflow"
        },
        {
            "uid": "55158900-d423-11ea-84d6-cf0129194199",
            "Name": "ModelField",
            "Scope": "studio"
        },
        {
            "uid": "5c6e0230-f26a-11ea-a4ea-f930a3dd2096",
            "Name": "VendorProductOptions",
            "Scope": "pos"
        },
        {
            "uid": "5e581290-7409-11eb-9019-b542e2b0daa0",
            "Name": "DosageForm",
            "Scope": "crm"
        },
        {
            "uid": "5fa26760-3fc8-11eb-b43d-4d65ccbfa01e",
            "Name": "FormTemplate",
            "Scope": "studio"
        },
        {
            "uid": "65c352d0-83de-11eb-b84e-93a050de95db",
            "Name": "FormActions",
            "Scope": "studio"
        },
        {
            "uid": "686fb9c0-746a-11eb-9f27-656e9d52f979",
            "Name": "Release",
            "Scope": "agilecore"
        },
        {
            "uid": "68f7f5a0-a950-11ea-967e-23ce1d0dc4d9",
            "Name": "WorkItem",
            "Scope": "agilecore"
        },
        {
            "uid": "6aa1d7a0-2ff0-11eb-983c-55d7c395c2e4",
            "Name": "ProductVariant",
            "Scope": "pos"
        },
        {
            "uid": "6d174670-101d-11eb-8f54-2bd5e56b68a8",
            "Name": "VendorProductVariantOptions",
            "Scope": "pos"
        },
        {
            "uid": "75dcb660-b459-11eb-99d3-0d9d1761c6fb",
            "Name": "AutoNumber",
            "Scope": "studio"
        },
        {
            "uid": "766fb3b0-5cda-11eb-b0ac-e32bd614ab39",
            "Name": "Speciality",
            "Scope": "appointment"
        },
        {
            "uid": "77b06040-9ac3-11eb-88f1-119921dbf335",
            "Name": "TestDemo3",
            "Scope": "studio"
        },
        {
            "uid": "7b8b91f0-706e-11eb-805d-1d1986854aa7",
            "Name": "ProductCategory",
            "Scope": "crm"
        },
        {
            "uid": "7f63ba00-6f24-11eb-a88e-337264a1ff65",
            "Name": "Address",
            "Scope": "crm"
        },
        {
            "uid": "8505f9f0-2ff0-11eb-983c-55d7c395c2e4",
            "Name": "VariantOptions",
            "Scope": "pos"
        },
        {
            "uid": "8781c620-706c-11eb-805d-1d1986854aa7",
            "Name": "CostCenter",
            "Scope": "crm"
        },
        {
            "uid": "884d8e30-bf7e-11ea-b6f2-13a090ae60ee",
            "Name": "Patient",
            "Scope": "appointment"
        },
        {
            "uid": "88cef7c0-746b-11eb-9f27-656e9d52f979",
            "Name": "ScrumMember",
            "Scope": "agilecore"
        },
        {
            "uid": "898c8a70-9a12-11eb-88f1-119921dbf335",
            "Name": "WorkflowCategory",
            "Scope": "workflow"
        },
        {
            "uid": "8d0d0de0-b832-11ea-b764-af48d9a77036",
            "Name": "DemoModel",
            "Scope": "demopages"
        },
        {
            "uid": "91ec37f0-706f-11eb-805d-1d1986854aa7",
            "Name": "Transactions",
            "Scope": "crm"
        },
        {
            "uid": "92e409a0-7068-11eb-805d-1d1986854aa7",
            "Name": "Item",
            "Scope": "crm"
        },
        {
            "uid": "9937b350-706e-11eb-805d-1d1986854aa7",
            "Name": "ProductSubCategory",
            "Scope": "crm"
        },
        {
            "uid": "a2886720-bab4-11eb-9fc3-5bba890aa666",
            "Name": "Tax",
            "Scope": "accounting"
        },
        {
            "uid": "a3198090-6f26-11eb-a88e-337264a1ff65",
            "Name": "Asset",
            "Scope": "asset"
        },
        {
            "uid": "a7be5f70-7427-11eb-9234-0742a608ec48",
            "Name": "PurchaseOrderItem",
            "Scope": "crm"
        },
        {
            "uid": "ab0a6630-c55c-11ea-9458-6338e220f2fa",
            "Name": "Catalog",
            "Scope": "pos"
        },
        {
            "uid": "ae5cdcb0-2ff0-11eb-983c-55d7c395c2e4",
            "Name": "VendorVariant",
            "Scope": "pos"
        },
        {
            "uid": "af4b99e0-5cdc-11eb-b0ac-e32bd614ab39",
            "Name": "WorkingHours",
            "Scope": "appointment"
        },
        {
            "uid": "b4e46d50-9a12-11eb-88f1-119921dbf335",
            "Name": "WorkflowSubCategory",
            "Scope": "workflow"
        },
        {
            "uid": "b5cc1b80-de94-11ea-97e1-815c9af43514",
            "Name": "VendorProducts",
            "Scope": "pos"
        },
        {
            "uid": "bb6ced90-2c86-11eb-8e63-0bebea6299d7",
            "Name": "CustomerCart",
            "Scope": "pos"
        },
        {
            "uid": "bf0b0860-6f20-11eb-a88e-337264a1ff65",
            "Name": "Account",
            "Scope": "crm"
        },
        {
            "uid": "bfcd5960-fb21-11ea-8eaf-11d95e51ef81",
            "Name": "DBLog",
            "Scope": "mmf"
        },
        {
            "uid": "c204f6a0-a456-11eb-87f5-41baa2365190",
            "Name": "ExternalModel",
            "Scope": "mmf"
        },
        {
            "uid": "c29e6240-5f0f-11eb-9d92-8504f340ace4",
            "Name": "Appointment",
            "Scope": "appointment"
        },
        {
            "uid": "c44aa550-706b-11eb-805d-1d1986854aa7",
            "Name": "Variant",
            "Scope": "crm"
        },
        {
            "uid": "c52afb70-6d03-11eb-bd26-b91b8d104a2b",
            "Name": "Product",
            "Scope": "pharma"
        },
        {
            "uid": "cbc36560-6d00-11eb-a523-d57096654973",
            "Name": "Manufacturer",
            "Scope": "pharma"
        },
        {
            "uid": "d5b56750-e1e4-11ea-9f92-935677f73a84",
            "Name": "VendorOrders",
            "Scope": "pos"
        },
        {
            "uid": "d63440d0-2fef-11eb-983c-55d7c395c2e4",
            "Name": "Options",
            "Scope": "pos"
        },
        {
            "uid": "d85730e0-5cde-11eb-b0ac-e32bd614ab39",
            "Name": "Slot",
            "Scope": "appointment"
        },
        {
            "uid": "d9259250-c55d-11ea-9458-6338e220f2fa",
            "Name": "ProductCategory",
            "Scope": "pos"
        },
        {
            "uid": "ded55ab0-b480-11eb-82d6-2d087058067a",
            "Name": "SideNavMenu",
            "Scope": "studio"
        },
        {
            "uid": "e06b56f0-1e75-11eb-a30a-a5c828913b33",
            "Name": "ServiceTask",
            "Scope": "workflow"
        },
        {
            "uid": "e771c380-746a-11eb-9f27-656e9d52f979",
            "Name": "Story",
            "Scope": "agilecore"
        },
        {
            "uid": "e8dfe1c0-d893-11ea-a042-f74803e9ecb1",
            "Name": "Vendor_Profile",
            "Scope": "pos"
        },
        {
            "uid": "e9390b70-7469-11eb-9f27-656e9d52f979",
            "Name": "Sprint",
            "Scope": "agilecore"
        },
        {
            "uid": "ea3b8440-706c-11eb-805d-1d1986854aa7",
            "Name": "Supplier",
            "Scope": "crm"
        },
        {
            "uid": "efe30910-706a-11eb-805d-1d1986854aa7",
            "Name": "VariantNames",
            "Scope": "crm"
        },
        {
            "uid": "f3b49740-2fef-11eb-983c-55d7c395c2e4",
            "Name": "OptionValues",
            "Scope": "pos"
        },
        {
            "uid": "f6e790a0-994b-11eb-ba01-67948a9bbedb",
            "Name": "FormTheme",
            "Scope": "studio"
        },
        {
            "uid": "f888ce10-746b-11eb-9f27-656e9d52f979",
            "Name": "Team",
            "Scope": "agilecore"
        },
        {
            "uid": "fddf9460-c55d-11ea-9458-6338e220f2fa",
            "Name": "Product",
            "Scope": "pos"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaModel%22%7D,%7B%22Scope%22:%22mmf%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "bd5fd590-7fd8-11eb-9b97-c98340ba04d3",
            "Name": "MetaModel_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaModel",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"60vh\",\"language\":\"javascript\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"Scope\",\"label\":\"Scope\",\"dataType\":\"string\",\"name\":\"Scope\"},{\"code\":\"Definition\",\"label\":\"Definition\",\"dataType\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"60vh\",\"language\":\"javascript\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Model - Details\",\"scope\":\"#/properties/title\",\"nane\":\"title\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save Draft\",\"mode\":\"Secondary\"},{\"name\":\"Publish\",\"label\":\"Publish\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"Group\",\"label\":\"Details\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Name\",\"label\":\"Name\"},{\"type\":\"Control\",\"scope\":\"#/properties/Scope\",\"label\":\"Scope\"}]},{\"type\":\"Categorization\",\"elements\":[{\"type\":\"Category\",\"label\":\"Fields\",\"elements\":[{\"type\":\"Control\",\"subtype\":\"RelatedList\",\"scope\":\"#/properties/form_list\",\"label\":\"Definition\",\"name\":\"ModelFields\",\"tableName\":\"ModelField_studio\",\"fields\":[{\"name\":\"FieldName\",\"value\":\"FieldName\",\"dataType\":\"string\"},{\"name\":\"FieldCode\",\"value\":\"FieldCode\",\"dataType\":\"string\"},{\"name\":\"Type\",\"value\":\"Type\",\"dataType\":\"string\"},{\"name\":\"SubType\",\"value\":\"SubType\",\"dataType\":\"string\"}],\"relatedField\":\"Model\",\"parentField\":\"uid\",\"rowClick\":true,\"listActions\":[{\"name\":\"New\"}],\"rowActions\":[]}]},{\"type\":\"Category\",\"label\":\"Forms\",\"elements\":[{\"type\":\"Control\",\"subtype\":\"RelatedList\",\"scope\":\"#/properties/form_list\",\"name\":\"Forms\",\"tableName\":\"FormTemplate_studio\",\"fields\":[{\"name\":\"Name\",\"value\":\"Name\",\"dataType\":\"string\"},{\"name\":\"View\",\"value\":\"View\",\"dataType\":\"string\"}],\"relatedField\":\"Model\",\"parentField\":\"uid\",\"rowClick\":true,\"listActions\":[{\"name\":\"New\"}],\"rowActions\":[]}]},{\"type\":\"Category\",\"scope\":\"#/properties/Definition\",\"label\":\"ACLs\",\"elements\":[{\"type\":\"Control\",\"subtype\":\"RelatedList\",\"scope\":\"#/properties/form_list\",\"name\":\"ModelACLs\",\"tableName\":\"SrsteeACL\",\"fields\":[{\"name\":\"Name\",\"value\":\"Name\",\"dataType\":\"string\"},{\"name\":\"AccessType\",\"value\":\"AccessType\",\"dataType\":\"string\"},{\"name\":\"AccessTo\",\"value\":\"AccessTo\",\"dataType\":\"string\"}],\"relatedField\":\"AccessTo\",\"parentField\":\"Name\",\"rowClick\":true,\"listActions\":[{\"name\":\"New\"}],\"rowActions\":[]}]},{\"type\":\"Category\",\"label\":\"Operation Hooks\",\"elements\":[{\"type\":\"Control\",\"subtype\":\"RelatedList\",\"scope\":\"#/properties/form_list\",\"name\":\"HooksList\",\"tableName\":\"MetaOperationHook\",\"fields\":[{\"name\":\"Name\",\"value\":\"Name\",\"dataType\":\"string\"},{\"name\":\"Scope\",\"value\":\"Scope\",\"dataType\":\"string\"},{\"name\":\"Type\",\"value\":\"Type\",\"dataType\":\"string\"},{\"name\":\"Order\",\"value\":\"Order\",\"dataType\":\"string\"}],\"relatedField\":\"Model\",\"parentField\":\"Name\",\"rowClick\":true,\"listActions\":[{\"name\":\"New\"}],\"rowActions\":[]}]},{\"type\":\"Category\",\"label\":\"Relationships\",\"elements\":[{\"type\":\"Control\",\"subtype\":\"RelatedList\",\"scope\":\"#/properties/form_list\",\"name\":\"Relations\",\"tableName\":\"MetaRelationship\",\"fields\":[{\"name\":\"Name\",\"value\":\"Name\",\"dataType\":\"string\"},{\"name\":\"Table1\",\"value\":\"Table1\",\"dataType\":\"string\"},{\"name\":\"Table2\",\"value\":\"Table2\",\"dataType\":\"string\"},{\"name\":\"RelationType\",\"value\":\"RelationType\",\"dataType\":\"string\"},{\"name\":\"ForeignKey\",\"value\":\"ForeignKey\",\"dataType\":\"string\"},{\"name\":\"ForeignKeyAlias\",\"value\":\"ForeignKeyAlias\",\"dataType\":\"string\"}],\"relatedField\":\"Table1\",\"parentField\":\"Name\",\"rowClick\":true,\"listActions\":[{\"name\":\"New\"}],\"rowActions\":[]}]}]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Model - Details\",\"name\":\"title\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save Draft\",\"mode\":\"Secondary\"},{\"name\":\"Publish\",\"label\":\"Publish\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"dataType\":\"Group\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Name\",\"label\":\"Name\"},{\"dataType\":\"Control\",\"scope\":\"Scope\",\"label\":\"Scope\"}],\"label\":\"Details\"},{\"dataType\":\"Categorization\",\"Properties\":[{\"dataType\":\"Category\",\"text\":\"Definition\",\"label\":\"Fields\",\"Properties\":[{\"dataType\":\"List\",\"scope\":\"Definition\",\"label\":\"Definition\",\"listType\":\"Related\",\"name\":\"ModelFields\",\"tableName\":\"ModelField_studio\",\"fields\":[{\"name\":\"FieldName\",\"value\":\"FieldName\",\"dataType\":\"string\"},{\"name\":\"FieldCode\",\"value\":\"FieldCode\",\"dataType\":\"string\"},{\"name\":\"Type\",\"value\":\"Type\",\"dataType\":\"string\"},{\"name\":\"SubType\",\"value\":\"SubType\",\"dataType\":\"string\"}],\"parentField\":\"uid\",\"relatedField\":\"Model\",\"rowSelection\":{\"onClick\":\"Change State\"},\"listActions\":[{\"name\":\"New\",\"onClick\":\"Change State\"}]}]},{\"dataType\":\"Category\",\"label\":\"Forms\",\"Properties\":[{\"dataType\":\"List\",\"listType\":\"Related\",\"name\":\"Forms\",\"tableName\":\"FormTemplate_studio\",\"fields\":[{\"name\":\"Name\",\"value\":\"Name\",\"dataType\":\"string\"},{\"name\":\"View\",\"value\":\"View\",\"dataType\":\"string\"}],\"relatedField\":\"Model\",\"parentField\":\"uid\",\"rowSelection\":{\"onClick\":\"Change State\"},\"listActions\":[{\"name\":\"New\",\"onClick\":\"Change State\"}]}]},{\"dataType\":\"Category\",\"scope\":\"Definition\",\"label\":\"ACLs\",\"Properties\":[{\"dataType\":\"List\",\"listType\":\"Related\",\"name\":\"ModelACLs\",\"tableName\":\"SrsteeACL\",\"relatedField\":\"AccessTo\",\"parentField\":\"Name\",\"rowSelection\":{\"onClick\":\"Change State\"},\"listActions\":[{\"name\":\"New\",\"onClick\":\"Change State\"}],\"fields\":[{\"name\":\"Name\",\"value\":\"Name\",\"dataType\":\"string\"},{\"name\":\"AccessType\",\"value\":\"AccessType\",\"dataType\":\"string\"},{\"name\":\"AccessTo\",\"value\":\"AccessTo\",\"dataType\":\"string\"}]}]},{\"dataType\":\"Category\",\"label\":\"Operation Hooks\",\"Properties\":[{\"dataType\":\"List\",\"listType\":\"Related\",\"name\":\"HooksList\",\"tableName\":\"MetaOperationHook\",\"fields\":[{\"name\":\"Name\",\"value\":\"Name\",\"dataType\":\"string\"},{\"name\":\"Scope\",\"value\":\"Scope\",\"dataType\":\"string\"},{\"name\":\"Type\",\"value\":\"Type\",\"dataType\":\"string\"},{\"name\":\"Order\",\"value\":\"Order\",\"dataType\":\"string\"}],\"relatedField\":\"Model\",\"parentField\":\"Name\",\"rowSelection\":{\"onClick\":\"Change State\"},\"listActions\":[{\"name\":\"New\",\"onClick\":\"Change State\"}]}]},{\"dataType\":\"Category\",\"label\":\"Relationships\",\"Properties\":[{\"dataType\":\"List\",\"listType\":\"Related\",\"name\":\"Relations\",\"tableName\":\"MetaRelationship\",\"fields\":[{\"name\":\"Name\",\"value\":\"Name\",\"dataType\":\"string\"},{\"name\":\"Table1\",\"value\":\"Table1\",\"dataType\":\"string\"},{\"name\":\"Table2\",\"value\":\"Table2\",\"dataType\":\"string\"},{\"name\":\"RelationType\",\"value\":\"RelationType\",\"dataType\":\"string\"},{\"name\":\"ForeignKey\",\"value\":\"ForeignKey\",\"dataType\":\"string\"},{\"name\":\"ForeignKeyAlias\",\"value\":\"ForeignKeyAlias\",\"dataType\":\"string\"}],\"relatedField\":\"Table1\",\"parentField\":\"Name\",\"rowSelection\":{\"onClick\":\"Change State\"},\"listActions\":[{\"name\":\"New\",\"onClick\":\"Change State\"}]}]}],\"Stepper\":false,\"StepNavigation\":false}],\"rule\":{}}",
            "default": "{\"Name\":\"\"}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22MetaModel%22%7D,%7B%22or%22:%5B%7B%22Form%22:%22bd5fd590-7fd8-11eb-9b97-c98340ba04d3%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "MetaModel%7B%22where%22:%7B%22uid%22:%2200a37ac0-101a-11eb-8f54-2bd5e56b68a8%22%7D%7Duid,srs_created_at,srs_updated_at,srs_created_by,srs_updated_by,Name,Scope,Definition": [
        {
            "uid": "00a37ac0-101a-11eb-8f54-2bd5e56b68a8",
            "srs_created_at": "2020-10-17T01:42:23.000Z",
            "srs_updated_at": "2020-10-17T01:42:23.000Z",
            "srs_created_by": "System",
            "srs_updated_by": "System",
            "Name": "VendorProductVariant",
            "Scope": "pos",
            "Definition": "{\"name\":\"VendorProductVariant_pos\",\"plural\":\"VendorProductVariants_pos\",\"idInjection\":false,\"base\":\"PersistedModel\",\"options\":{\"validateUpsert\":true,\"public\":true},\"properties\":{\"uid\":{\"type\":\"String\",\"id\":true,\"defaultFn\":\"guid\"},\"Name\":{\"type\":\"String\"},\"Availability\":{\"type\":\"String\"},\"vProductId\":{\"type\":\"String\"},\"srs_created_at\":{\"type\":\"date\",\"dataType\":\"timestamp\",\"defaultFn\":\"now\"},\"srs_updated_at\":{\"type\":\"date\",\"dataType\":\"timestamp\",\"defaultFn\":\"now\"},\"srs_created_by\":{\"type\":\"String\",\"default\":\"System\"},\"srs_updated_by\":{\"type\":\"String\",\"default\":\"System\"},\"Active\":{\"type\":\"Boolean\"}}}"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22ModelField%22%7D,%7B%22Scope%22:%22studio%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "00b712f0-824e-11eb-9b97-c98340ba04d3",
            "Name": "ModelField_Default",
            "Scope": "studio",
            "Model": "55158900-d423-11ea-84d6-cf0129194199",
            "View": "Default",
            "ModelName": "ModelField",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"FieldName\":{\"code\":\"FieldName\",\"label\":\"FieldName\",\"type\":\"string\",\"name\":\"FieldName\"},\"FieldCode\":{\"code\":\"FieldCode\",\"label\":\"FieldCode\",\"type\":\"string\",\"name\":\"FieldCode\"},\"Model\":{\"code\":\"Model\",\"label\":\"Model\",\"type\":\"string\",\"name\":\"Model\",\"widgetType\":\"Reference\",\"tableName\":\"MetaModel\",\"displayField\":\"Name\",\"filter\":\"{\\\"Name\\\": \\\"${FieldName}\\\"}\",\"searchfields\":\"Name\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"DefaultOrder\":{\"code\":\"DefaultOrder\",\"label\":\"DefaultOrder\",\"type\":\"number\",\"name\":\"DefaultOrder\"},\"Type\":{\"code\":\"Type\",\"label\":\"Type\",\"type\":\"string\",\"name\":\"Type\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"Choose a Type\"},{\"name\":\"String\",\"value\":\"String\"},{\"name\":\"Text\",\"value\":\"Text\"},{\"name\":\"Number\",\"value\":\"Number\"},{\"name\":\"Date\",\"value\":\"date\"},{\"name\":\"Boolean\",\"value\":\"Boolean\"}]},\"SubType\":{\"code\":\"SubType\",\"label\":\"SubType\",\"type\":\"string\",\"name\":\"SubType\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"Choose a subtype\"},{\"name\":\"timestamp\",\"value\":\"timestamp\"},{\"name\":\"longtext\",\"value\":\"longtext\"},{\"name\":\"mediumtext\",\"value\":\"mediumtext\"}]}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"FieldName\",\"label\":\"FieldName\",\"dataType\":\"string\",\"name\":\"FieldName\"},{\"code\":\"FieldCode\",\"label\":\"FieldCode\",\"dataType\":\"string\",\"name\":\"FieldCode\"},{\"code\":\"Model\",\"label\":\"Model\",\"dataType\":\"string\",\"name\":\"Model\",\"widgetType\":\"Reference\",\"tableName\":\"MetaModel\",\"displayField\":\"Name\",\"filter\":\"{\\\"Name\\\": \\\"${FieldName}\\\"}\",\"searchfields\":\"Name\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"DefaultOrder\",\"label\":\"DefaultOrder\",\"dataType\":\"number\",\"name\":\"DefaultOrder\"},{\"code\":\"Type\",\"label\":\"Type\",\"dataType\":\"string\",\"name\":\"Type\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"Choose a Type\"},{\"name\":\"String\",\"value\":\"String\"},{\"name\":\"Text\",\"value\":\"Text\"},{\"name\":\"Number\",\"value\":\"Number\"},{\"name\":\"Date\",\"value\":\"date\"},{\"name\":\"Boolean\",\"value\":\"Boolean\"}]},{\"code\":\"SubType\",\"label\":\"SubType\",\"dataType\":\"string\",\"name\":\"SubType\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"Choose a subtype\"},{\"name\":\"timestamp\",\"value\":\"timestamp\"},{\"name\":\"longtext\",\"value\":\"longtext\"},{\"name\":\"mediumtext\",\"value\":\"mediumtext\"}]}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Field Details\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/FieldName\"},{\"type\":\"Control\",\"scope\":\"#/properties/FieldCode\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Type\"},{\"type\":\"Control\",\"scope\":\"#/properties/SubType\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Model\"},{\"type\":\"Control\",\"scope\":\"#/properties/DefaultOrder\"}]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Field Details\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"FieldName\"},{\"dataType\":\"Control\",\"scope\":\"FieldCode\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Type\"},{\"dataType\":\"Control\",\"scope\":\"SubType\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Model\"},{\"dataType\":\"Control\",\"scope\":\"DefaultOrder\"}]}],\"rule\":{}}",
            "default": "{\"FieldName\":\"Defect\",\"form_actions\":{\"parent\":{\"FieldName\":\"Defec\"}}}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%2255158900-d423-11ea-84d6-cf0129194199%22%7D,%7B%22or%22:%5B%7B%22Form%22:%2200b712f0-824e-11eb-9b97-c98340ba04d3%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%7D,%7B%22Model%22:%2200a37ac0-101a-11eb-8f54-2bd5e56b68a8%22%7D%5D%7D%7Duid,Name,View": [
        {
            "uid": "cfa7ecc0-9206-11eb-a4bd-7da498ed85b5",
            "Name": "VendorProductVariant_Default",
            "View": "Default"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22uid%22:%22cfa7ecc0-9206-11eb-a4bd-7da498ed85b5%22%7D%7Duid,Name,schema,uischema,default,listschema,srs_created_at,srs_updated_at,srs_created_by,srs_updated_by,rawschema,rawuischema,rawlistschema,Scope,Model,View,ModelName,GeneratedUI,GeneratedList,Theme": [
        {
            "uid": "cfa7ecc0-9206-11eb-a4bd-7da498ed85b5",
            "Name": "VendorProductVariant_Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Availability\":{\"code\":\"Availability\",\"label\":\"Availability\",\"type\":\"string\",\"name\":\"Availability\"},\"vProductId\":{\"code\":\"vProductId\",\"label\":\"vProductId\",\"type\":\"string\",\"name\":\"vProductId\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Active\":{\"code\":\"Active\",\"label\":\"Active\",\"type\":\"boolean\",\"name\":\"Active\"}}}",
            "uischema": "{\"type\":\"VerticalLayout\",\"elements\":[{\"type\":\"Label\",\"text\":\"Form - VendorProductVariant\"},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Name\"},{\"type\":\"Control\",\"scope\":\"#/properties/Availability\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/vProductId\"},{\"type\":\"Control\",\"scope\":\"#/properties/Active\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[]},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"save\",\"label\":\"Save\"}],\"align\":\"left\"}]}",
            "default": "{\"Name\":\"\",\"Availability\":\"\",\"vProductId\":\"\",\"Active\":false,\"form_actions\":{\"parent\":{}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Availability\":{\"code\":\"Availability\",\"label\":\"Availability\",\"type\":\"string\",\"name\":\"Availability\"},\"vProductId\":{\"code\":\"vProductId\",\"label\":\"vProductId\",\"type\":\"string\",\"name\":\"vProductId\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Active\":{\"code\":\"Active\",\"label\":\"Active\",\"type\":\"boolean\",\"name\":\"Active\"}}}",
            "srs_created_at": "2021-03-31T09:52:32.000Z",
            "srs_updated_at": "2021-03-31T09:52:32.000Z",
            "srs_created_by": "System",
            "srs_updated_by": "System",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"Availability\",\"label\":\"Availability\",\"dataType\":\"string\",\"name\":\"Availability\"},{\"code\":\"vProductId\",\"label\":\"vProductId\",\"dataType\":\"string\",\"name\":\"vProductId\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"Active\",\"label\":\"Active\",\"dataType\":\"boolean\",\"name\":\"Active\"}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Form - VendorProductVariant\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Name\"},{\"dataType\":\"Control\",\"scope\":\"Availability\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"vProductId\"},{\"dataType\":\"Control\",\"scope\":\"Active\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"save\",\"label\":\"Save\"}],\"align\":\"left\"}]}",
            "rawlistschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"Availability\",\"label\":\"Availability\",\"dataType\":\"string\",\"name\":\"Availability\"},{\"code\":\"vProductId\",\"label\":\"vProductId\",\"dataType\":\"string\",\"name\":\"vProductId\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"Active\",\"label\":\"Active\",\"dataType\":\"boolean\",\"name\":\"Active\"}]}",
            "Scope": "pos",
            "Model": "00a37ac0-101a-11eb-8f54-2bd5e56b68a8",
            "View": "Default",
            "ModelName": "VendorProductVariant",
            "GeneratedUI": true,
            "GeneratedList": "",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaOperationHook%22%7D,%7B%22Scope%22:%22mmf%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "18e06f50-7e4f-11eb-a3cf-32bd47036b92",
            "Name": "MetaOperationHook_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaOperationHook",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Type\":{\"code\":\"Type\",\"label\":\"Type\",\"type\":\"string\",\"name\":\"Type\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"before save\",\"value\":\"before save\"},{\"name\":\"after save\",\"value\":\"after save\"}]},\"Order\":{\"code\":\"Order\",\"label\":\"Order\",\"type\":\"number\",\"name\":\"Order\"},\"Model\":{\"code\":\"Model\",\"label\":\"Model\",\"type\":\"string\",\"name\":\"Model\"},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"60vh\",\"language\":\"javascript\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"Scope\",\"label\":\"Scope\",\"dataType\":\"string\",\"name\":\"Scope\"},{\"code\":\"Type\",\"label\":\"Type\",\"dataType\":\"string\",\"name\":\"Type\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"before save\",\"value\":\"before save\"},{\"name\":\"after save\",\"value\":\"after save\"}]},{\"code\":\"Order\",\"label\":\"Order\",\"dataType\":\"number\",\"name\":\"Order\"},{\"code\":\"Model\",\"label\":\"Model\",\"dataType\":\"string\",\"name\":\"Model\"},{\"code\":\"Definition\",\"label\":\"Definition\",\"dataType\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"60vh\",\"language\":\"javascript\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Operation Hook - Details\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"Group\",\"label\":\"Details\",\"elements\":[{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Name\"},{\"type\":\"Control\",\"scope\":\"#/properties/Scope\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Order\"},{\"type\":\"Control\",\"scope\":\"#/properties/Type\",\"widget\":{\"widgetType\":\"Choice\",\"draggable\":false,\"choiceList\":[{\"name\":\"Before Save\",\"value\":\"before.save\"},{\"name\":\"After Save\",\"value\":\"after.save\"},{\"name\":\"Before Delete\",\"value\":\"before.delete\"},{\"name\":\"After Delete\",\"value\":\"after.delete\"}]}}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Model\"},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"label\":\"uid\",\"options\":{\"isHidden\":\"true\"}}]}]},{\"type\":\"Control\",\"scope\":\"#/properties/Definition\",\"label\":\"Definition\",\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}  .bx--label {    color: black !important;     font-size: 0.9rem !important;     font-weight: 800 !important;} \"}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Operation Hook - Details\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"dataType\":\"Group\",\"label\":\"Details\",\"Properties\":[{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Name\",\"draggable\":false},{\"dataType\":\"Control\",\"scope\":\"Scope\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Order\"},{\"dataType\":\"Control\",\"scope\":\"Type\",\"draggable\":false,\"widgetType\":\"Choice\",\"options\":null,\"choiceList\":[{\"name\":\"Before Save\",\"value\":\"before.save\"},{\"name\":\"After Save\",\"value\":\"after.save\"},{\"name\":\"Before Delete\",\"value\":\"before.delete\"},{\"name\":\"After Delete\",\"value\":\"after.delete\"}]}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Model\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"label\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]}]}]},{\"dataType\":\"Control\",\"scope\":\"Definition\",\"label\":\"Definition\",\"draggable\":\"\",\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}  .bx--label {    color: black !important;     font-size: 0.9rem !important;     font-weight: 800 !important;} \"}],\"rule\":{}}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22MetaOperationHook%22%7D,%7B%22or%22:%5B%7B%22Form%22:%2218e06f50-7e4f-11eb-a3cf-32bd47036b92%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaRelationship%22%7D,%7B%22Scope%22:%22mmf%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "d7c82130-7f15-11eb-a3cf-39ae28036b92",
            "Name": "MetaRelationship_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaRelationship",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Table1\":{\"code\":\"Table1\",\"label\":\"Table1\",\"type\":\"string\",\"name\":\"Table1\"},\"RelationType\":{\"code\":\"RelationType\",\"label\":\"RelationType\",\"type\":\"string\",\"name\":\"RelationType\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"belongsTo\",\"value\":\"belongsTo\"},{\"name\":\"hasMany\",\"value\":\"hasMany\"}]},\"Table2\":{\"code\":\"Table2\",\"label\":\"Table2\",\"type\":\"string\",\"name\":\"Table2\"},\"ForeignKey\":{\"code\":\"ForeignKey\",\"label\":\"ForeignKey\",\"type\":\"string\",\"name\":\"ForeignKey\"},\"ForeignKeyAlias\":{\"code\":\"ForeignKeyAlias\",\"label\":\"ForeignKeyAlias\",\"type\":\"string\",\"name\":\"ForeignKeyAlias\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"Table1\",\"label\":\"Table1\",\"dataType\":\"string\",\"name\":\"Table1\"},{\"code\":\"RelationType\",\"label\":\"RelationType\",\"dataType\":\"string\",\"name\":\"RelationType\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"belongsTo\",\"value\":\"belongsTo\"},{\"name\":\"hasMany\",\"value\":\"hasMany\"}]},{\"code\":\"Table2\",\"label\":\"Table2\",\"dataType\":\"string\",\"name\":\"Table2\"},{\"code\":\"ForeignKey\",\"label\":\"ForeignKey\",\"dataType\":\"string\",\"name\":\"ForeignKey\"},{\"code\":\"ForeignKeyAlias\",\"label\":\"ForeignKeyAlias\",\"dataType\":\"string\",\"name\":\"ForeignKeyAlias\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Relationship - Details\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Name\"},{\"type\":\"Control\",\"scope\":\"#/properties/Table1\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/RelationType\"},{\"type\":\"Control\",\"scope\":\"#/properties/Table2\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/ForeignKey\"},{\"type\":\"Control\",\"scope\":\"#/properties/ForeignKeyAlias\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Relationship - Details\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Name\"},{\"dataType\":\"Control\",\"scope\":\"Table1\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"RelationType\"},{\"dataType\":\"Control\",\"scope\":\"Table2\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"ForeignKey\"},{\"dataType\":\"Control\",\"scope\":\"ForeignKeyAlias\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[]}],\"rule\":{}}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22MetaRelationship%22%7D,%7B%22or%22:%5B%7B%22Form%22:%22d7c82130-7f15-11eb-a3cf-39ae28036b92%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaOperationHook%22,%22View%22:%22Default%22,%22Scope%22:%22mmf%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "18e06f50-7e4f-11eb-a3cf-32bd47036b92",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Type\":{\"code\":\"Type\",\"label\":\"Type\",\"type\":\"string\",\"name\":\"Type\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"before save\",\"value\":\"before save\"},{\"name\":\"after save\",\"value\":\"after save\"}]},\"Order\":{\"code\":\"Order\",\"label\":\"Order\",\"type\":\"number\",\"name\":\"Order\"},\"Model\":{\"code\":\"Model\",\"label\":\"Model\",\"type\":\"string\",\"name\":\"Model\"},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"60vh\",\"language\":\"javascript\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Type\":{\"code\":\"Type\",\"label\":\"Type\",\"type\":\"string\",\"name\":\"Type\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"before save\",\"value\":\"before save\"},{\"name\":\"after save\",\"value\":\"after save\"}]},\"Order\":{\"code\":\"Order\",\"label\":\"Order\",\"type\":\"number\",\"name\":\"Order\"},\"Model\":{\"code\":\"Model\",\"label\":\"Model\",\"type\":\"string\",\"name\":\"Model\"},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"60vh\",\"language\":\"javascript\"}}}"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaRelationship%22,%22View%22:%22Default%22,%22Scope%22:%22mmf%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "d7c82130-7f15-11eb-a3cf-39ae28036b92",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Table1\":{\"code\":\"Table1\",\"label\":\"Table1\",\"type\":\"string\",\"name\":\"Table1\"},\"RelationType\":{\"code\":\"RelationType\",\"label\":\"RelationType\",\"type\":\"string\",\"name\":\"RelationType\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"belongsTo\",\"value\":\"belongsTo\"},{\"name\":\"hasMany\",\"value\":\"hasMany\"}]},\"Table2\":{\"code\":\"Table2\",\"label\":\"Table2\",\"type\":\"string\",\"name\":\"Table2\"},\"ForeignKey\":{\"code\":\"ForeignKey\",\"label\":\"ForeignKey\",\"type\":\"string\",\"name\":\"ForeignKey\"},\"ForeignKeyAlias\":{\"code\":\"ForeignKeyAlias\",\"label\":\"ForeignKeyAlias\",\"type\":\"string\",\"name\":\"ForeignKeyAlias\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Table1\":{\"code\":\"Table1\",\"label\":\"Table1\",\"type\":\"string\",\"name\":\"Table1\"},\"Table2\":{\"code\":\"Table2\",\"label\":\"Table2\",\"type\":\"string\",\"name\":\"Table2\"},\"RelationType\":{\"code\":\"RelationType\",\"label\":\"RelationType\",\"type\":\"string\",\"name\":\"RelationType\"},\"uid\":{\"type\":\"string\"}}}"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaQuery%22,%22View%22:%22Default%22,%22Scope%22:%22mmf%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "8ff53600-7f2d-11eb-a3cf-39ae28036b92",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},\"Variables\":{\"code\":\"Variables\",\"label\":\"Variables\",\"type\":\"string\",\"name\":\"Variables\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},\"AccessPath\":{\"code\":\"AccessPath\",\"label\":\"AccessPath\",\"type\":\"string\",\"name\":\"AccessPath\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"AccessPath\":{\"code\":\"AccessPath\",\"label\":\"AccessPath\",\"type\":\"string\",\"name\":\"AccessPath\"},\"uid\":{\"type\":\"string\"}}}"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaQuery%22%7D,%7B%22Scope%22:%22mmf%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "8ff53600-7f2d-11eb-a3cf-39ae28036b92",
            "Name": "MetaQuery_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaQuery",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},\"Variables\":{\"code\":\"Variables\",\"label\":\"Variables\",\"type\":\"string\",\"name\":\"Variables\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},\"AccessPath\":{\"code\":\"AccessPath\",\"label\":\"AccessPath\",\"type\":\"string\",\"name\":\"AccessPath\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"Scope\",\"label\":\"Scope\",\"dataType\":\"string\",\"name\":\"Scope\"},{\"code\":\"Definition\",\"label\":\"Definition\",\"dataType\":\"string\",\"name\":\"Definition\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},{\"code\":\"Variables\",\"label\":\"Variables\",\"dataType\":\"string\",\"name\":\"Variables\",\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"50vh\",\"language\":\"javascript\"},{\"code\":\"AccessPath\",\"label\":\"AccessPath\",\"dataType\":\"string\",\"name\":\"AccessPath\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Query - Details\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"Group\",\"label\":\"Details\",\"elements\":[{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Name\"},{\"type\":\"Control\",\"scope\":\"#/properties/Scope\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/AccessPath\"}]}]},{\"type\":\"Control\",\"scope\":\"#/properties/Definition\",\"label\":\"Definition\"},{\"type\":\"HorizontalLayout\",\"elements\":[]},{\"type\":\"Control\",\"scope\":\"#/properties/Variables\",\"label\":\"Variables\",\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}  .bx--label {    color: black !important;     font-size: 0.9rem !important;     font-weight: 800 !important;} \"}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Query - Details\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Go to List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"dataType\":\"Group\",\"label\":\"Details\",\"Properties\":[{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Name\"},{\"dataType\":\"Control\",\"scope\":\"Scope\",\"draggable\":false}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"AccessPath\"}]}]},{\"dataType\":\"Control\",\"scope\":\"Definition\",\"label\":\"Definition\",\"draggable\":false},{\"dataType\":\"HorizontalLayout\"},{\"dataType\":\"Control\",\"scope\":\"Variables\",\"draggable\":false,\"label\":\"Variables\",\"inlinestyles\":\".monaco-editor, .overflow-guard { width: 95% !important; height:95% !important;}  .bx--label {    color: black !important;     font-size: 0.9rem !important;     font-weight: 800 !important;} \"}],\"rule\":{}}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22MetaQuery%22%7D,%7B%22or%22:%5B%7B%22Form%22:%228ff53600-7f2d-11eb-a3cf-39ae28036b92%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaDataSource%22,%22View%22:%22Default%22,%22Scope%22:%22mmf%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "398af030-a439-11eb-87f5-41baa2365190",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Type\":{\"code\":\"Type\",\"label\":\"Type\",\"type\":\"string\",\"name\":\"Type\"},\"Connection\":{\"code\":\"Connection\",\"label\":\"Connection\",\"type\":\"string\",\"subtype\":\"Text\",\"name\":\"Connection\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Type\":{\"code\":\"Type\",\"label\":\"Type\",\"type\":\"string\",\"name\":\"Type\"},\"uid\":{\"type\":\"string\"}}}"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaDataSource%22%7D,%7B%22Scope%22:%22mmf%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "398af030-a439-11eb-87f5-41baa2365190",
            "Name": "DataSource_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaDataSource",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Type\":{\"code\":\"Type\",\"label\":\"Type\",\"type\":\"string\",\"name\":\"Type\"},\"Connection\":{\"code\":\"Connection\",\"label\":\"Connection\",\"type\":\"string\",\"subtype\":\"Text\",\"name\":\"Connection\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"Scope\",\"label\":\"Scope\",\"dataType\":\"string\",\"name\":\"Scope\"},{\"code\":\"Type\",\"label\":\"Type\",\"dataType\":\"string\",\"name\":\"Type\"},{\"code\":\"Connection\",\"label\":\"Connection\",\"dataType\":\"text\",\"name\":\"Connection\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Form - DataSource\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Show List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Name\"},{\"type\":\"Control\",\"scope\":\"#/properties/Scope\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Type\",\"label\":\"Connector Type\",\"widget\":{\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"Oracle\",\"value\":\"oracle\"},{\"name\":\"MySQL\",\"value\":\"mysql\"},{\"name\":\"MongoDB\",\"value\":\"mongodb\"},{\"name\":\"SQL Server\",\"value\":\"mssql\"},{\"name\":\"Redis\",\"value\":\"redis\"},{\"name\":\"PostgreSQL\",\"value\":\"postgresql\"},{\"name\":\"REST\",\"value\":\"rest\"},{\"name\":\"SOAP\",\"value\":\"soap\"},{\"name\":\"Email\",\"value\":\"email\"},{\"name\":\"Google Cloud\",\"value\":\"googlecloud\"},{\"name\":\"RedShift\",\"value\":\"redshift\"},{\"name\":\"Elastic\",\"value\":\"elastic\"},{\"name\":\"Kafka\",\"value\":\"kafka\"},{\"name\":\"SAPHana\",\"value\":\"saphana\"},{\"name\":\"Neo4J\",\"value\":\"neo4j\"},{\"name\":\"Twilio\",\"value\":\"twilio\"},{\"name\":\"RethinkDB\",\"value\":\"rethinkdb\"},{\"name\":\"RealTimeDB\",\"value\":\"realtimedb\"},{\"name\":\"Cassandra\",\"value\":\"cassandra\"},{\"name\":\"OpenAPI\",\"value\":\"openapi\"},{\"name\":\"SQLLite3\",\"value\":\"sqllite3\"},{\"name\":\"IBM DB2\",\"value\":\"db2\"},{\"name\":\"CouchDB\",\"value\":\"couchdb\"},{\"name\":\"CouchDB2\",\"value\":\"couchdb2\"}]}},{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\" \",\"scope\":\"#/properties/labelcomponent\",\"showtile\":false}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Connection\",\"label\":\"Connection Details\",\"widget\":{\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"35vh\",\"language\":\"javascript\"}}]},{\"type\":\"HorizontalLayout\",\"elements\":[]},{\"type\":\"Control\",\"subtype\":\"RelatedList\",\"scope\":\"#/properties/form_list\",\"label\":\"Data Models\",\"name\":\"DataModels\",\"title\":\"Data Models\",\"tableName\":\"MetaXModel\",\"fields\":[{\"name\":\"Name\",\"value\":\"Name\",\"dataType\":\"string\"}],\"compact\":true,\"relatedField\":\"Datasource\",\"parentField\":\"Name\",\"rowClick\":true,\"listActions\":[{\"name\":\"New\"}],\"rowActions\":[]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Form - DataSource\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Show List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Name\"},{\"dataType\":\"Control\",\"scope\":\"Scope\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Type\",\"label\":\"Connector Type\",\"widgetType\":\"Choice\",\"options\":null,\"choiceList\":[{\"name\":\"Oracle\",\"value\":\"oracle\"},{\"name\":\"MySQL\",\"value\":\"mysql\"},{\"name\":\"MongoDB\",\"value\":\"mongodb\"},{\"name\":\"SQL Server\",\"value\":\"mssql\"},{\"name\":\"Redis\",\"value\":\"redis\"},{\"name\":\"PostgreSQL\",\"value\":\"postgresql\"},{\"name\":\"REST\",\"value\":\"rest\"},{\"name\":\"SOAP\",\"value\":\"soap\"},{\"name\":\"Email\",\"value\":\"email\"},{\"name\":\"Google Cloud\",\"value\":\"googlecloud\"},{\"name\":\"RedShift\",\"value\":\"redshift\"},{\"name\":\"Elastic\",\"value\":\"elastic\"},{\"name\":\"Kafka\",\"value\":\"kafka\"},{\"name\":\"SAPHana\",\"value\":\"saphana\"},{\"name\":\"Neo4J\",\"value\":\"neo4j\"},{\"name\":\"Twilio\",\"value\":\"twilio\"},{\"name\":\"RethinkDB\",\"value\":\"rethinkdb\"},{\"name\":\"RealTimeDB\",\"value\":\"realtimedb\"},{\"name\":\"Cassandra\",\"value\":\"cassandra\"},{\"name\":\"OpenAPI\",\"value\":\"openapi\"},{\"name\":\"SQLLite3\",\"value\":\"sqllite3\"},{\"name\":\"IBM DB2\",\"value\":\"db2\"},{\"name\":\"CouchDB\",\"value\":\"couchdb\"},{\"name\":\"CouchDB2\",\"value\":\"couchdb2\"}]},{\"dataType\":\"Label\",\"text\":\" \"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Connection\",\"label\":\"Connection Details\",\"widgetType\":\"Script\",\"options\":null,\"contentType\":\"JS\",\"editorHeight\":\"35vh\",\"language\":\"javascript\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[]},{\"dataType\":\"List\",\"listType\":\"Related\",\"label\":\"Data Models\",\"name\":\"DataModels\",\"tableName\":\"MetaXModel\",\"fields\":[{\"name\":\"Name\",\"value\":\"Name\",\"dataType\":\"string\"}],\"title\":\"Data Models\",\"compact\":true,\"relatedField\":\"Datasource\",\"parentField\":\"Name\",\"rowSelection\":{\"onClick\":\"Change State\"},\"listActions\":[{\"name\":\"New\",\"onClick\":\"Change State\"}],\"draggable\":false}]}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22MetaDataSource%22%7D,%7B%22or%22:%5B%7B%22Form%22:%22398af030-a439-11eb-87f5-41baa2365190%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaXModel%22%7D,%7B%22Scope%22:%22mmf%22%7D,%7B%22or%22:%5B%7B%22View%22:%22Default%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%5D%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "c5483ac0-a456-11eb-87f5-41baa2365190",
            "Name": "ExternalModel_Default",
            "Scope": "mmf",
            "Model": "",
            "View": "Default",
            "ModelName": "MetaXModel",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Datasource\":{\"code\":\"Datasource\",\"label\":\"Datasource\",\"type\":\"string\",\"name\":\"Datasource\"},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"subtype\":\"Text\",\"name\":\"Definition\"}}}",
            "rawschema": "{\"dataType\":[{\"code\":\"uid\",\"label\":\"uid\",\"dataType\":\"string\",\"name\":\"uid\"},{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"dataType\":\"date-time\",\"name\":\"srs_created_at\"},{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"dataType\":\"date-time\",\"name\":\"srs_updated_at\"},{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"dataType\":\"string\",\"name\":\"srs_created_by\"},{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"dataType\":\"string\",\"name\":\"srs_updated_by\"},{\"code\":\"Name\",\"label\":\"Name\",\"dataType\":\"string\",\"name\":\"Name\"},{\"code\":\"Scope\",\"label\":\"Scope\",\"dataType\":\"string\",\"name\":\"Scope\"},{\"code\":\"Datasource\",\"label\":\"Datasource\",\"dataType\":\"string\",\"name\":\"Datasource\"},{\"code\":\"Definition\",\"label\":\"Definition\",\"dataType\":\"text\",\"name\":\"Definition\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Form - External Model\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Show List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"type\":\"Control\",\"scope\":\"#/properties/uid\",\"options\":{\"isHidden\":\"true\"}},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Name\"},{\"type\":\"Control\",\"scope\":\"#/properties/Scope\"}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Datasource\",\"widget\":{\"widgetType\":\"Dynamic Choice\",\"tableName\":\"MetaDataSource\",\"displayField\":\"Name\",\"filter\":\"{}\",\"choiceLabelFieldName\":\"Name\",\"choiceValueFieldName\":\"Name\",\"condition\":\"{}\"}},{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\" \",\"scope\":\"#/properties/labelcomponent\",\"showtile\":false}]},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Definition\",\"label\":\"Definition\",\"widget\":{\"widgetType\":\"Script\",\"contentType\":\"JS\",\"editorHeight\":\"35vh\",\"language\":\"javascript\"}}]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Form - External Model\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Actions\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"show_list\",\"label\":\"Show List\",\"mode\":\"Secondary\"},{\"name\":\"save_as\",\"label\":\"Create Another\",\"mode\":\"Secondary\"},{\"name\":\"save\",\"label\":\"Save\",\"mode\":\"Primary\"}],\"align\":\"right\"},{\"dataType\":\"Control\",\"scope\":\"uid\",\"options\":[{\"name\":\"isHidden\",\"value\":\"true\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Name\"},{\"dataType\":\"Control\",\"scope\":\"Scope\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Datasource\",\"widgetType\":\"Dynamic Choice\",\"options\":null,\"tableName\":\"MetaDataSource\",\"displayField\":\"Name\",\"filter\":\"{}\",\"choiceLabelFieldName\":\"Name\",\"choiceValueFieldName\":\"Name\",\"condition\":\"{}\"},{\"dataType\":\"Label\",\"text\":\" \"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Definition\",\"label\":\"Definition\",\"widgetType\":\"Script\",\"options\":null,\"contentType\":\"JS\",\"editorHeight\":\"35vh\",\"language\":\"javascript\"}]}],\"rule\":{}}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22MetaXModel%22%7D,%7B%22or%22:%5B%7B%22Form%22:%22c5483ac0-a456-11eb-87f5-41baa2365190%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22MetaXModel%22,%22View%22:%22Default%22,%22Scope%22:%22mmf%22%7D,%7B%7D%5D%7D%7Duid,View,schema,listschema": [
        {
            "uid": "c5483ac0-a456-11eb-87f5-41baa2365190",
            "View": "Default",
            "schema": "{\"type\":\"object\",\"properties\":{\"uid\":{\"code\":\"uid\",\"label\":\"uid\",\"type\":\"string\",\"name\":\"uid\"},\"srs_created_at\":{\"code\":\"srs_created_at\",\"label\":\"srs_created_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_created_at\"},\"srs_updated_at\":{\"code\":\"srs_updated_at\",\"label\":\"srs_updated_at\",\"type\":\"string\",\"format\":\"date-time\",\"name\":\"srs_updated_at\"},\"srs_created_by\":{\"code\":\"srs_created_by\",\"label\":\"srs_created_by\",\"type\":\"string\",\"name\":\"srs_created_by\"},\"srs_updated_by\":{\"code\":\"srs_updated_by\",\"label\":\"srs_updated_by\",\"type\":\"string\",\"name\":\"srs_updated_by\"},\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Datasource\":{\"code\":\"Datasource\",\"label\":\"Datasource\",\"type\":\"string\",\"name\":\"Datasource\"},\"Definition\":{\"code\":\"Definition\",\"label\":\"Definition\",\"type\":\"string\",\"subtype\":\"Text\",\"name\":\"Definition\"}}}",
            "listschema": "{\"type\":\"object\",\"properties\":{\"Name\":{\"code\":\"Name\",\"label\":\"Name\",\"type\":\"string\",\"name\":\"Name\"},\"Scope\":{\"code\":\"Scope\",\"label\":\"Scope\",\"type\":\"string\",\"name\":\"Scope\"},\"Datasource\":{\"code\":\"Datasource\",\"label\":\"Datasource\",\"type\":\"string\",\"name\":\"Datasource\"},\"uid\":{\"type\":\"string\"}}}"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22Name%22:%22ModelBuilder%22%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "8725da50-9807-11eb-8912-cd01a55dad3f",
            "Name": "ModelBuilder",
            "Scope": "studio",
            "Model": "",
            "View": "",
            "ModelName": "",
            "schema": "{\"type\":\"object\",\"properties\":{}}",
            "rawschema": "{\"dataType\":\"object\",\"Properties\":[]}",
            "uischema": "{\"type\":\"Categorization\",\"elements\":[{\"type\":\"Category\",\"label\":\"Model Builder\",\"elements\":[{\"type\":\"Control\",\"subtype\":\"CustomComponent\",\"scope\":\"#/properties/ModelBuilder\",\"controlname\":\"ModelBuilder\",\"componentname\":\"JsonModelBuilder\",\"componentscope\":\"studio\"}]},{\"type\":\"Category\",\"label\":\"Custom Form Builder\",\"elements\":[{\"type\":\"Control\",\"subtype\":\"CustomComponent\",\"scope\":\"#/properties/CustomFormBuilder\",\"controlname\":\"CustomFormBuilder\",\"componentname\":\"JsonFormGenerator\",\"componentscope\":\"studio\"}]}]}",
            "rawuischema": "{\"dataType\":\"Categorization\",\"Properties\":[{\"dataType\":\"Category\",\"name\":\"ModelBuilder\",\"componentname\":\"JSONModelBuilder\",\"componentscope\":\"studio\",\"componentprops\":[{\"name\":\"embedded\",\"value\":\"true\"}],\"label\":\"Model Builder\",\"Properties\":[{\"dataType\":\"CustomComponent\",\"name\":\"ModelBuilder\",\"componentname\":\"JSONModelBuilder\",\"componentscope\":\"studio\",\"componentprops\":[]}]},{\"dataType\":\"Category\",\"label\":\"Custom Form Builder\",\"Properties\":[{\"dataType\":\"CustomComponent\",\"name\":\"CustomFormBuilder\",\"componentname\":\"JSONFormGenerator\",\"componentscope\":\"studio\"}]}],\"rule\":{}}",
            "default": "{}",
            "Theme": ""
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22%22%7D,%7B%22or%22:%5B%7B%22Form%22:%228725da50-9807-11eb-8912-cd01a55dad3f%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22%22%7D,%7B%22Scope%22:%22studio%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%7Duid,Name,Scope,Model,ModelName,View,schema,rawschema,uischema,rawuischema,default,Theme": [],
    "mmf.getSlidesWithPath%7B%22basePath%22:%22/http:%22%7Dundefined": {},
    "mmf.getMatchingRoutes%7B%22PATH%22:%22/http:%22%7Dundefined": [],
    "mmf.getSlidesWithPath%7B%22basePath%22:%22/wfmodeler%22%7Dundefined": {
        "4709fc30-1409-11eb-9f23-e138d7998ba3": {
            "pageId": "4709fc30-1409-11eb-9f23-e138d7998ba3",
            "Path": "/wfmodeler",
            "Type": "FreeForm",
            "Styles": ".topPreviewContainer {\n   height: fit-content !important;\n}",
            "props": {}
        }
    },
    "MetaSlide%7B%22where%22:%7B%22uid%22:%224709fc30-1409-11eb-9f23-e138d7998ba3%22%7D%7Duid,Name,Scope": [
        {
            "uid": "4709fc30-1409-11eb-9f23-e138d7998ba3",
            "Name": "WorkflowModeler",
            "Scope": "workflow"
        }
    ],
    "MetaBundleMap%7B%22where%22:%7B%22or%22:%5B%7B%22and%22:%5B%7B%22Application%22:%22workflow%22%7D,%7B%22Page%22:%22%22%7D%5D%7D,%7B%22and%22:%5B%7B%22Application%22:%22workflow%22%7D,%7B%22Page%22:%224709fc30-1409-11eb-9f23-e138d7998ba3%22%7D%5D%7D%5D%7D%7Duid,Type,Name,Resource": [
        {
            "uid": "31f6dd70-140b-11eb-9f23-e138d7998ba3",
            "Type": "external",
            "Name": "bpmn",
            "Resource": "https://unpkg.com/srstecdn@1.0.59/bpmn/bpmn.js"
        }
    ],
    "mmf.getSlideDetailsById%7B%22uid%22:%224709fc30-1409-11eb-9f23-e138d7998ba3%22%7Ddata.slide": {
        "uid": "4709fc30-1409-11eb-9f23-e138d7998ba3",
        "Name": "WorkflowModeler",
        "Scope": "workflow",
        "Type": "FreeForm",
        "Path": "/wfmodeler",
        "Styles": ".topPreviewContainer {\n   height: fit-content !important;\n}",
        "props": {},
        "slots": {
            "0de9c290-141e-11eb-9f23-e138d7998ba3": {
                "uid": "0de9c290-141e-11eb-9f23-e138d7998ba3",
                "xposition": 0,
                "yposition": 15,
                "width": 96,
                "height": 69,
                "minwidth": 0,
                "minheight": 0,
                "maxwidth": 96,
                "maxheight": 80,
                "resize": null,
                "move": null,
                "Layout": "default",
                "widget": {
                    "uid": "0e2aea40-141e-11eb-9f23-e138d7998ba3",
                    "component": {
                        "uid": "8ae6b2b0-140c-11eb-9f23-e138d7998ba3",
                        "Name": "WorkflowModeler",
                        "Scope": "workflow",
                        "Type": "React",
                        "WebComponent": null,
                        "Version": "1.0.0",
                        "Props": {
                            "BPMN_XML": null,
                            "Name": null,
                            "UpdateXML": ""
                        }
                    },
                    "widgetproperties": {
                        "TriggerActionOnChange": {
                            "uid": "455fb530-21cb-11eb-a9d8-09b03b59a8cd",
                            "name": "TriggerActionOnChange",
                            "value": "true"
                        },
                        "UpdateXML": {
                            "uid": "963134c0-2338-11eb-bd9f-99b2335d8890",
                            "name": "UpdateXML",
                            "value": ""
                        },
                        "__State__BPMN_XML": {
                            "uid": "96502e70-2338-11eb-bd9f-99b2335d8890",
                            "name": "__State__BPMN_XML",
                            "value": "BPMN_XML"
                        },
                        "Name": {
                            "uid": "9b8b2530-21ca-11eb-a9d8-09b03b59a8cd",
                            "name": "Name",
                            "value": "WorkflowModeler"
                        },
                        "__State__UpdateXML": {
                            "uid": "a7a79420-21ca-11eb-a9d8-09b03b59a8cd",
                            "name": "__State__UpdateXML",
                            "value": "saveWF"
                        }
                    },
                    "widgetactions": {
                        "onXMLChange@@WorkflowModeler_workflow": {
                            "uid": "41170f00-21cb-11eb-a9d8-09b03b59a8cd",
                            "Name": "onXMLChange@@WorkflowModeler_workflow",
                            "Scope": "workflow",
                            "Definition": "(async function() {\n \tif($widgets.WorkflowModeler.past) {\n      if($widgets.WorkflowModeler.past.props.UpdateXML != $widgets.WorkflowModeler.props.UpdateXML) {\n        //no need to save it when the updated bpmn xml data is not yet loaded\n      }else if($widgets.WorkflowModeler.past.props.BPMN_XML != $widgets.WorkflowModeler.props.BPMN_XML && $widgets.WorkflowModeler.props.BPMN_XML) {\n        //save process\n        if($widgets.VersionNumber && $widgets.VersionNumber.props && $widgets.VersionNumber.props.value &&\n          \t$widgets.WFName && $widgets.WFName.props && $widgets.WFName.props.value) {\n\t\t\tlet pageState = $notifier.getState();\n          \tlet wfName = $widgets.WFName.props.value.replace(\" \", \"_\");\n\t        let BPMN_XML = $widgets.WorkflowModeler.props.BPMN_XML;\n          \tBPMN_XML = BPMN_XML.replace(\"Process_1\", $widgets.WFName.props.value);\n          \tBPMN_XML = BPMN_XML.replace(\"easy_starter_1\", wfName); \n          \tlet payload = {\n            \tName: wfName,\n              \tVersion: $widgets.VersionNumber.props.value,\n              \tDefinition: BPMN_XML,\n              \tStatus: \"Active\"\n            }\n          \tif(pageState.wfVersionId) {\n              \tlet wfId = await $qry.updateRecord(\"WorkflowVersion_workflow\", pageState.wfVersionId, payload, [\"uid\"]);\n            \t$notifier.addFlashMessage({title: \"Success - \", subtitle: \"Workflow version updated successfully!\"});\n              \t$notifier.setState({WFName: wfName});\n            }else {\n\t          \tlet wfId = await $qry.createRecord(\"WorkflowVersion_workflow\", payload, [\"uid\"]);\n              \t$notifier.addFlashMessage({title: \"Success - \", subtitle: \"Workflow version saved successfully!\"});\n              \t$notifier.setState({wfVersionId: wfId.uid, WFName: wfName});\n            }\n        }else {\n          $notifier.addErrorMessage({title: \"Error - \", subtitle: \"Provide Name and Version number to save the workflow!\"});\n        }\n      }\n    } \t\n})\n",
                            "Trigger": "onChange",
                            "Active": true,
                            "Order": 1,
                            "Type": "Current",
                            "Target": null
                        }
                    }
                }
            },
            "43fc6bf0-21dc-11eb-a9d8-09b03b59a8cd": {
                "uid": "43fc6bf0-21dc-11eb-a9d8-09b03b59a8cd",
                "xposition": 0,
                "yposition": 5,
                "width": 24,
                "height": 8,
                "minwidth": 0,
                "minheight": 0,
                "maxwidth": 96,
                "maxheight": 80,
                "resize": null,
                "move": null,
                "Layout": "default",
                "widget": {
                    "uid": "44444a60-21dc-11eb-a9d8-09b03b59a8cd",
                    "component": {
                        "uid": "d2202500-cc76-11e9-8bcf-1fc7a6960356",
                        "Name": "SrsTextField",
                        "Scope": "studio",
                        "Type": "React",
                        "WebComponent": null,
                        "Version": "1.0.0",
                        "Props": {
                            "helperText": "*Required",
                            "InvalidText": "Value is required",
                            "Password": null,
                            "value": null,
                            "Name": null,
                            "FieldName": "",
                            "LightMode": "0",
                            "Label": "TextLabel",
                            "Placeholder": "Enter text...",
                            "DefaultValue": "Enter text...",
                            "ClassName": "",
                            "EmbeddedStyles": null
                        }
                    },
                    "widgetproperties": {
                        "Name": {
                            "uid": "4dc17d60-21dc-11eb-a9d8-09b03b59a8cd",
                            "name": "Name",
                            "value": "WFName"
                        },
                        "Label": {
                            "uid": "4fa50a70-21dc-11eb-a9d8-09b03b59a8cd",
                            "name": "Label",
                            "value": "Name"
                        },
                        "DefaultValue": {
                            "uid": "58fb0660-21dc-11eb-a9d8-09b03b59a8cd",
                            "name": "DefaultValue",
                            "value": ""
                        },
                        "InvalidText": {
                            "uid": "594555d0-21dc-11eb-a9d8-09b03b59a8cd",
                            "name": "InvalidText",
                            "value": ""
                        },
                        "helperText": {
                            "uid": "5945a3f0-21dc-11eb-a9d8-09b03b59a8cd",
                            "name": "helperText",
                            "value": ""
                        },
                        "LightMode": {
                            "uid": "5946dc70-21dc-11eb-a9d8-09b03b59a8cd",
                            "name": "LightMode",
                            "value": "true"
                        },
                        "Placeholder": {
                            "uid": "86ca7cd0-2338-11eb-bd9f-99b2335d8890",
                            "name": "Placeholder",
                            "value": "Enter text..."
                        },
                        "__State__value": {
                            "uid": "8776c260-2338-11eb-bd9f-99b2335d8890",
                            "name": "__State__value",
                            "value": "WFName"
                        },
                        "FieldName": {
                            "uid": "ef33c030-22a0-11eb-bd9f-99b2335d8890",
                            "name": "FieldName",
                            "value": "@@[]"
                        },
                        "ClassName": {
                            "uid": "ef5bba90-22a0-11eb-bd9f-99b2335d8890",
                            "name": "ClassName",
                            "value": ""
                        }
                    },
                    "widgetactions": {}
                }
            },
            "50844e40-21d9-11eb-a9d8-09b03b59a8cd": {
                "uid": "50844e40-21d9-11eb-a9d8-09b03b59a8cd",
                "xposition": 25,
                "yposition": 5,
                "width": 17,
                "height": 8,
                "minwidth": 0,
                "minheight": 0,
                "maxwidth": 96,
                "maxheight": 80,
                "resize": null,
                "move": null,
                "Layout": "default",
                "widget": {
                    "uid": "50bc4e30-21d9-11eb-a9d8-09b03b59a8cd",
                    "component": {
                        "uid": "d2202500-cc76-11e9-8bcf-1fc7a6960356",
                        "Name": "SrsTextField",
                        "Scope": "studio",
                        "Type": "React",
                        "WebComponent": null,
                        "Version": "1.0.0",
                        "Props": {
                            "helperText": "*Required",
                            "InvalidText": "Value is required",
                            "Password": null,
                            "value": null,
                            "Name": null,
                            "FieldName": "",
                            "LightMode": "0",
                            "Label": "TextLabel",
                            "Placeholder": "Enter text...",
                            "DefaultValue": "Enter text...",
                            "ClassName": "",
                            "EmbeddedStyles": null
                        }
                    },
                    "widgetproperties": {
                        "Name": {
                            "uid": "5f1c1d70-21d9-11eb-a9d8-09b03b59a8cd",
                            "name": "Name",
                            "value": "VersionNumber"
                        },
                        "Placeholder": {
                            "uid": "64473460-21d9-11eb-a9d8-09b03b59a8cd",
                            "name": "Placeholder",
                            "value": "Enter Version Number..."
                        },
                        "DefaultValue": {
                            "uid": "6a6b9f70-21d9-11eb-a9d8-09b03b59a8cd",
                            "name": "DefaultValue",
                            "value": ""
                        },
                        "InvalidText": {
                            "uid": "6aa63770-21d9-11eb-a9d8-09b03b59a8cd",
                            "name": "InvalidText",
                            "value": ""
                        },
                        "helperText": {
                            "uid": "6aa6aca0-21d9-11eb-a9d8-09b03b59a8cd",
                            "name": "helperText",
                            "value": ""
                        },
                        "LightMode": {
                            "uid": "6aa721d0-21d9-11eb-a9d8-09b03b59a8cd",
                            "name": "LightMode",
                            "value": "true"
                        },
                        "ClassName": {
                            "uid": "8c1625e0-224d-11eb-bd9f-99b2335d8890",
                            "name": "ClassName",
                            "value": ""
                        },
                        "FieldName": {
                            "uid": "8c164cf0-224d-11eb-bd9f-99b2335d8890",
                            "name": "FieldName",
                            "value": "@@[]"
                        },
                        "__State__value": {
                            "uid": "8df422e0-2338-11eb-bd9f-99b2335d8890",
                            "name": "__State__value",
                            "value": "Version"
                        },
                        "Label": {
                            "uid": "da4911a0-224d-11eb-bd9f-99b2335d8890",
                            "name": "Label",
                            "value": "Version"
                        }
                    },
                    "widgetactions": {}
                }
            },
            "63222a10-2191-11eb-a9d8-09b03b59a8cd": {
                "uid": "63222a10-2191-11eb-a9d8-09b03b59a8cd",
                "xposition": 60,
                "yposition": 5,
                "width": 16,
                "height": 5,
                "minwidth": 0,
                "minheight": 0,
                "maxwidth": 96,
                "maxheight": 80,
                "resize": null,
                "move": null,
                "Layout": "default",
                "widget": null
            },
            "68805130-218c-11eb-a9d8-09b03b59a8cd": {
                "uid": "68805130-218c-11eb-a9d8-09b03b59a8cd",
                "xposition": 80,
                "yposition": 6,
                "width": 7,
                "height": 3,
                "minwidth": 0,
                "minheight": 0,
                "maxwidth": 96,
                "maxheight": 80,
                "resize": null,
                "move": null,
                "Layout": "default",
                "widget": {
                    "uid": "68c5bea0-218c-11eb-a9d8-09b03b59a8cd",
                    "component": {
                        "uid": "bceef530-ce60-11e9-96ad-0f185d3b9dc1",
                        "Name": "SrsButton",
                        "Scope": "studio",
                        "Type": "React",
                        "WebComponent": true,
                        "Version": "1.0.0",
                        "Props": {
                            "IconPath": null,
                            "IconOnly": "0",
                            "Status": null,
                            "Size": "small",
                            "OneColumnBottomAnchor": "",
                            "ButtonAction": "Custom",
                            "Styles": "",
                            "OneColumnTopAnchor": "",
                            "EmbeddedStyles": null,
                            "Label": "Button",
                            "Name": ""
                        }
                    },
                    "widgetproperties": {
                        "Name": {
                            "uid": "6f5e4840-218c-11eb-a9d8-09b03b59a8cd",
                            "name": "Name",
                            "value": "SaveBtn"
                        },
                        "Label": {
                            "uid": "765bfc50-218c-11eb-a9d8-09b03b59a8cd",
                            "name": "Label",
                            "value": "Save"
                        },
                        "ButtonAction": {
                            "uid": "765c2360-218c-11eb-a9d8-09b03b59a8cd",
                            "name": "ButtonAction",
                            "value": ""
                        },
                        "Size": {
                            "uid": "766cc530-218c-11eb-a9d8-09b03b59a8cd",
                            "name": "Size",
                            "value": "small"
                        }
                    },
                    "widgetactions": {
                        "onSaveWorkFlow@@WorkflowModeler_workflow": {
                            "uid": "8ca005e0-21ca-11eb-a9d8-09b03b59a8cd",
                            "Name": "onSaveWorkFlow@@WorkflowModeler_workflow",
                            "Scope": "workflow",
                            "Definition": "(function() {\n\t  //$live, $pageData, $fields, $widgets, $ctx\n  \tlet pageState = $notifier.getState();\n\t$notifier.setState({saveWF: !pageState.saveWF});\n})",
                            "Trigger": "onClick",
                            "Active": true,
                            "Order": 1,
                            "Type": "Current",
                            "Target": null
                        }
                    }
                }
            },
            "69170f60-2fe4-11eb-983c-55d7c395c2e4": {
                "uid": "69170f60-2fe4-11eb-983c-55d7c395c2e4",
                "xposition": 71,
                "yposition": 10,
                "width": 8,
                "height": 4,
                "minwidth": 0,
                "minheight": 0,
                "maxwidth": 96,
                "maxheight": 80,
                "resize": null,
                "move": null,
                "Layout": "default",
                "widget": {
                    "uid": "6962be60-2fe4-11eb-983c-55d7c395c2e4",
                    "component": {
                        "uid": "6b1150f0-ce60-11e9-96ad-0f185d3b9dc1",
                        "Name": "SrsLink",
                        "Scope": "studio",
                        "Type": "React",
                        "WebComponent": true,
                        "Version": "1.0.0",
                        "Props": {
                            "HREF": "#",
                            "NavigateToURL": null,
                            "Name": null,
                            "Label": "Link",
                            "Inline": null,
                            "Styles": ""
                        }
                    },
                    "widgetproperties": {
                        "Name": {
                            "uid": "7cccd620-2fe4-11eb-983c-55d7c395c2e4",
                            "name": "Name",
                            "value": "ServiceTasks"
                        },
                        "Label": {
                            "uid": "801a5370-2fe4-11eb-983c-55d7c395c2e4",
                            "name": "Label",
                            "value": "Service Tasks"
                        },
                        "Inline": {
                            "uid": "87d82330-2fe4-11eb-983c-55d7c395c2e4",
                            "name": "Inline",
                            "value": "false"
                        },
                        "NavigateToURL": {
                            "uid": "91a264c0-2fe4-11eb-983c-55d7c395c2e4",
                            "name": "NavigateToURL",
                            "value": "true"
                        },
                        "HREF": {
                            "uid": "942bf5d0-2fe4-11eb-983c-55d7c395c2e4",
                            "name": "HREF",
                            "value": "/servicetasklist"
                        },
                        "Styles": {
                            "uid": "ac8ad240-2fe4-11eb-983c-55d7c395c2e4",
                            "name": "Styles",
                            "value": ""
                        }
                    },
                    "widgetactions": {}
                }
            },
            "6f0ca620-229a-11eb-bd9f-99b2335d8890": {
                "uid": "6f0ca620-229a-11eb-bd9f-99b2335d8890",
                "xposition": 80,
                "yposition": 10,
                "width": 5,
                "height": 4,
                "minwidth": 0,
                "minheight": 0,
                "maxwidth": 96,
                "maxheight": 80,
                "resize": null,
                "move": null,
                "Layout": "default",
                "widget": {
                    "uid": "6f800160-229a-11eb-bd9f-99b2335d8890",
                    "component": {
                        "uid": "bceef530-ce60-11e9-96ad-0f185d3b9dc1",
                        "Name": "SrsButton",
                        "Scope": "studio",
                        "Type": "React",
                        "WebComponent": true,
                        "Version": "1.0.0",
                        "Props": {
                            "IconPath": null,
                            "IconOnly": "0",
                            "Status": null,
                            "Size": "small",
                            "OneColumnBottomAnchor": "",
                            "ButtonAction": "Custom",
                            "Styles": "",
                            "OneColumnTopAnchor": "",
                            "EmbeddedStyles": null,
                            "Label": "Button",
                            "Name": ""
                        }
                    },
                    "widgetproperties": {
                        "Name": {
                            "uid": "74956d70-229a-11eb-bd9f-99b2335d8890",
                            "name": "Name",
                            "value": "StartBtn"
                        },
                        "Label": {
                            "uid": "7b5afa80-229a-11eb-bd9f-99b2335d8890",
                            "name": "Label",
                            "value": "Test Run"
                        },
                        "ButtonAction": {
                            "uid": "7b845470-229a-11eb-bd9f-99b2335d8890",
                            "name": "ButtonAction",
                            "value": ""
                        },
                        "Size": {
                            "uid": "7b84f0b0-229a-11eb-bd9f-99b2335d8890",
                            "name": "Size",
                            "value": "small"
                        },
                        "IconOnly": {
                            "uid": "a0d3f670-2cc4-11eb-8e63-0bebea6299d7",
                            "name": "IconOnly",
                            "value": "true"
                        },
                        "IconPath": {
                            "uid": "b6a52320-2cc4-11eb-8e63-0bebea6299d7",
                            "name": "IconPath",
                            "value": "caret--right/32"
                        },
                        "OneColumnBottomAnchor": {
                            "uid": "d1b944e0-229a-11eb-bd9f-99b2335d8890",
                            "name": "OneColumnBottomAnchor",
                            "value": ""
                        },
                        "Styles": {
                            "uid": "d1cc30a0-229a-11eb-bd9f-99b2335d8890",
                            "name": "Styles",
                            "value": ""
                        },
                        "OneColumnTopAnchor": {
                            "uid": "d1dece40-229a-11eb-bd9f-99b2335d8890",
                            "name": "OneColumnTopAnchor",
                            "value": ""
                        }
                    },
                    "widgetactions": {
                        "onTestRun@@WorkflowModeler_workflow": {
                            "uid": "4e982080-229b-11eb-bd9f-99b2335d8890",
                            "Name": "onTestRun@@WorkflowModeler_workflow",
                            "Scope": "workflow",
                            "Definition": "(function() {\n\tlet wfKey = $widgets.WFName.props.value;\n\t$notifier.openModal({modalpage: \"70212df0-229b-11eb-bd9f-99b2335d8890\", modalparams: {\"wfkey\": wfKey}});\n})",
                            "Trigger": "onClick",
                            "Active": true,
                            "Order": 1,
                            "Type": "Current",
                            "Target": null
                        }
                    }
                }
            },
            "80afd5b0-218b-11eb-a9d8-09b03b59a8cd": {
                "uid": "80afd5b0-218b-11eb-a9d8-09b03b59a8cd",
                "xposition": 73,
                "yposition": 6,
                "width": 7,
                "height": 4,
                "minwidth": 0,
                "minheight": 0,
                "maxwidth": 96,
                "maxheight": 80,
                "resize": null,
                "move": null,
                "Layout": "default",
                "widget": {
                    "uid": "81152730-218b-11eb-a9d8-09b03b59a8cd",
                    "component": {
                        "uid": "bceef530-ce60-11e9-96ad-0f185d3b9dc1",
                        "Name": "SrsButton",
                        "Scope": "studio",
                        "Type": "React",
                        "WebComponent": true,
                        "Version": "1.0.0",
                        "Props": {
                            "IconPath": null,
                            "IconOnly": "0",
                            "Status": null,
                            "Size": "small",
                            "OneColumnBottomAnchor": "",
                            "ButtonAction": "Custom",
                            "Styles": "",
                            "OneColumnTopAnchor": "",
                            "EmbeddedStyles": null,
                            "Label": "Button",
                            "Name": ""
                        }
                    },
                    "widgetproperties": {
                        "Size": {
                            "uid": "d62ac4f0-218b-11eb-a9d8-09b03b59a8cd",
                            "name": "Size",
                            "value": "small"
                        },
                        "OneColumnBottomAnchor": {
                            "uid": "d6906490-218b-11eb-a9d8-09b03b59a8cd",
                            "name": "OneColumnBottomAnchor",
                            "value": ""
                        },
                        "ButtonAction": {
                            "uid": "d6908ba0-218b-11eb-a9d8-09b03b59a8cd",
                            "name": "ButtonAction",
                            "value": ""
                        },
                        "Styles": {
                            "uid": "d690d9c0-218b-11eb-a9d8-09b03b59a8cd",
                            "name": "Styles",
                            "value": ""
                        },
                        "Label": {
                            "uid": "d69127e0-218b-11eb-a9d8-09b03b59a8cd",
                            "name": "Label",
                            "value": "Publish"
                        },
                        "OneColumnTopAnchor": {
                            "uid": "d6923950-218b-11eb-a9d8-09b03b59a8cd",
                            "name": "OneColumnTopAnchor",
                            "value": ""
                        },
                        "Name": {
                            "uid": "d6ec6740-218b-11eb-a9d8-09b03b59a8cd",
                            "name": "Name",
                            "value": "PublishBtn"
                        }
                    },
                    "widgetactions": {
                        "publishWF@@WorkflowModeler_workflow": {
                            "uid": "400270a0-224d-11eb-bd9f-99b2335d8890",
                            "Name": "publishWF@@WorkflowModeler_workflow",
                            "Scope": "workflow",
                            "Definition": "(async function() {\n\t//$live, $pageData, $fields, $widgets, $ctx\n  let pageState = $notifier.getState();\n  if(pageState.wfVersionId) {\n    let result = await $script.runAtServer(\"workflow.deployWFVersion\", {workflowVersionId: pageState.wfVersionId});\n    $notifier.addFlashMessage({title: \"Success - \", subtitle: \"Workflow is deployed successfully!\" });\n  }\n})",
                            "Trigger": "onClick",
                            "Active": true,
                            "Order": 1,
                            "Type": "Current",
                            "Target": null
                        }
                    }
                }
            },
            "83c55da0-218c-11eb-a9d8-09b03b59a8cd": {
                "uid": "83c55da0-218c-11eb-a9d8-09b03b59a8cd",
                "xposition": 85,
                "yposition": 10,
                "width": 10,
                "height": 4,
                "minwidth": 0,
                "minheight": 0,
                "maxwidth": 96,
                "maxheight": 80,
                "resize": null,
                "move": null,
                "Layout": "default",
                "widget": {
                    "uid": "840329f0-218c-11eb-a9d8-09b03b59a8cd",
                    "component": {
                        "uid": "f6d10820-ce5f-11e9-96ad-0f185d3b9dc1",
                        "Name": "SrsToggle",
                        "Scope": "studio",
                        "Type": "React",
                        "WebComponent": true,
                        "Version": "1.0.0",
                        "Props": {
                            "Name": null,
                            "DefaultValue": "true",
                            "ON_Label": "On",
                            "OFF_Label": "Off"
                        }
                    },
                    "widgetproperties": {
                        "OFF_Label": {
                            "uid": "8cacb940-218c-11eb-a9d8-09b03b59a8cd",
                            "name": "OFF_Label",
                            "value": "Active"
                        },
                        "ON_Label": {
                            "uid": "8fbbce00-218c-11eb-a9d8-09b03b59a8cd",
                            "name": "ON_Label",
                            "value": "Active"
                        },
                        "Name": {
                            "uid": "92aafeb0-218c-11eb-a9d8-09b03b59a8cd",
                            "name": "Name",
                            "value": "ActiveBtn"
                        }
                    },
                    "widgetactions": {}
                }
            },
            "8c3f1bf0-22a0-11eb-bd9f-99b2335d8890": {
                "uid": "8c3f1bf0-22a0-11eb-bd9f-99b2335d8890",
                "xposition": 66,
                "yposition": 6,
                "width": 6,
                "height": 4,
                "minwidth": 0,
                "minheight": 0,
                "maxwidth": 96,
                "maxheight": 80,
                "resize": null,
                "move": null,
                "Layout": "default",
                "widget": {
                    "uid": "8c7d0f50-22a0-11eb-bd9f-99b2335d8890",
                    "component": {
                        "uid": "bceef530-ce60-11e9-96ad-0f185d3b9dc1",
                        "Name": "SrsButton",
                        "Scope": "studio",
                        "Type": "React",
                        "WebComponent": true,
                        "Version": "1.0.0",
                        "Props": {
                            "IconPath": null,
                            "IconOnly": "0",
                            "Status": null,
                            "Size": "small",
                            "OneColumnBottomAnchor": "",
                            "ButtonAction": "Custom",
                            "Styles": "",
                            "OneColumnTopAnchor": "",
                            "EmbeddedStyles": null,
                            "Label": "Button",
                            "Name": ""
                        }
                    },
                    "widgetproperties": {
                        "IconOnly": {
                            "uid": "1c36ad10-2759-11eb-a896-13717cc4a3bf",
                            "name": "IconOnly",
                            "value": "true"
                        },
                        "IconPath": {
                            "uid": "27b04c50-2759-11eb-a896-13717cc4a3bf",
                            "name": "IconPath",
                            "value": "document--import/32"
                        },
                        "Name": {
                            "uid": "9232da10-22a0-11eb-bd9f-99b2335d8890",
                            "name": "Name",
                            "value": "OpenBtn"
                        },
                        "Label": {
                            "uid": "985a7970-22a0-11eb-bd9f-99b2335d8890",
                            "name": "Label",
                            "value": "Show List"
                        },
                        "ButtonAction": {
                            "uid": "98818970-22a0-11eb-bd9f-99b2335d8890",
                            "name": "ButtonAction",
                            "value": ""
                        },
                        "Size": {
                            "uid": "9883fa70-22a0-11eb-bd9f-99b2335d8890",
                            "name": "Size",
                            "value": "small"
                        },
                        "OneColumnBottomAnchor": {
                            "uid": "afc87ae0-231c-11eb-bd9f-99b2335d8890",
                            "name": "OneColumnBottomAnchor",
                            "value": ""
                        },
                        "Styles": {
                            "uid": "afc91720-231c-11eb-bd9f-99b2335d8890",
                            "name": "Styles",
                            "value": ""
                        },
                        "OneColumnTopAnchor": {
                            "uid": "afc93e30-231c-11eb-bd9f-99b2335d8890",
                            "name": "OneColumnTopAnchor",
                            "value": ""
                        }
                    },
                    "widgetactions": {
                        "onOpen@@WorkflowModeler_workflow": {
                            "uid": "e091dee0-22a0-11eb-bd9f-99b2335d8890",
                            "Name": "onOpen@@WorkflowModeler_workflow",
                            "Scope": "workflow",
                            "Definition": "(async function() {\n\tlet pageState = $notifier.getState();    \n    pageState.currentLayout = \"withList\";\n    $notifier.setState(pageState);\n})",
                            "Trigger": "onClick",
                            "Active": true,
                            "Order": 1,
                            "Type": "Current",
                            "Target": null
                        }
                    }
                }
            },
            "c0776710-2318-11eb-bd9f-99b2335d8890": {
                "uid": "c0776710-2318-11eb-bd9f-99b2335d8890",
                "xposition": 28,
                "yposition": 18,
                "width": 67,
                "height": 60,
                "minwidth": 0,
                "minheight": 0,
                "maxwidth": 96,
                "maxheight": 80,
                "resize": null,
                "move": null,
                "Layout": "withList",
                "widget": {
                    "uid": "c0996e00-2318-11eb-bd9f-99b2335d8890",
                    "component": {
                        "uid": "8ae6b2b0-140c-11eb-9f23-e138d7998ba3",
                        "Name": "WorkflowModeler",
                        "Scope": "workflow",
                        "Type": "React",
                        "WebComponent": null,
                        "Version": "1.0.0",
                        "Props": {
                            "BPMN_XML": null,
                            "Name": null,
                            "UpdateXML": ""
                        }
                    },
                    "widgetproperties": {
                        "UpdateXML": {
                            "uid": "29337130-2338-11eb-bd9f-99b2335d8890",
                            "name": "UpdateXML",
                            "value": ""
                        },
                        "__State__BPMN_XML": {
                            "uid": "2943c4e0-2338-11eb-bd9f-99b2335d8890",
                            "name": "__State__BPMN_XML",
                            "value": "BPMN_XML"
                        },
                        "TriggerActionOnChange": {
                            "uid": "c14bce10-2318-11eb-bd9f-99b2335d8890",
                            "name": "TriggerActionOnChange",
                            "value": "true"
                        },
                        "Name": {
                            "uid": "c15b3760-2318-11eb-bd9f-99b2335d8890",
                            "name": "Name",
                            "value": "WorkflowModeler"
                        },
                        "__State__UpdateXML": {
                            "uid": "c16a0470-2318-11eb-bd9f-99b2335d8890",
                            "name": "__State__UpdateXML",
                            "value": "saveWF"
                        }
                    },
                    "widgetactions": {
                        "onXMLChange@@WorkflowModeler_workflow": {
                            "uid": "c17e4fc0-2318-11eb-bd9f-99b2335d8890",
                            "Name": "onXMLChange@@WorkflowModeler_workflow",
                            "Scope": "workflow",
                            "Definition": "(async function() {\n  \tlet pageState = $notifier.getState();\n  \tdebugger;\n \tif($widgets.WorkflowModeler.past) {\n      if($widgets.WorkflowModeler.past.props.UpdateXML != $widgets.WorkflowModeler.props.UpdateXML) {\n        //no need to save it when the updated bpmn xml data is not yet loaded\n      }else if(pageState.wfloading == true) {\n        $notifier.setState({wfloading: false, showloader: false, currentLayout: \"default\"});\n      }else if($widgets.WorkflowModeler.past.props.BPMN_XML != $widgets.WorkflowModeler.props.BPMN_XML && $widgets.WorkflowModeler.props.BPMN_XML) {\n        //save process\n        if($widgets.VersionNumber && $widgets.VersionNumber.props && $widgets.VersionNumber.props.value &&\n          \t$widgets.WFName && $widgets.WFName.props && $widgets.WFName.props.value) {\n\t\t\tlet pageState = $notifier.getState();\n\t        let BPMN_XML = $widgets.WorkflowModeler.props.BPMN_XML;\n          \tBPMN_XML = BPMN_XML.replace(\"Process_1\", $widgets.WFName.props.value);\n          \tlet payload = {\n            \tName: $widgets.WFName.props.value,\n              \tVersion: $widgets.VersionNumber.props.value,\n              \tDefinition: BPMN_XML,\n              \tStatus: \"Active\"\n            }\n          \tif(pageState.wfVersionId) {\n              \tlet wfId = await $qry.updateRecord(\"WorkflowVersion_workflow\", pageState.wfVersionId, payload, [\"uid\"]);\n            \t$notifier.addFlashMessage({title: \"Success - \", subtitle: \"Workflow version updated successfully!\"});\n            }else {\n\t          \tlet wfId = await $qry.createRecord(\"WorkflowVersion_workflow\", payload, [\"uid\"]);\n              \t$notifier.addFlashMessage({title: \"Success - \", subtitle: \"Workflow version saved successfully!\"});\n              \t$notifier.setState({wfVersionId: wfId.uid});\n            }\n        }else {\n          $notifier.addErrorMessage({title: \"Error - \", subtitle: \"Provide Name and Version number to save the workflow!\"});\n        }\n      }\n    } \t\n})\n",
                            "Trigger": "onChange",
                            "Active": true,
                            "Order": 1,
                            "Type": "Current",
                            "Target": null
                        }
                    }
                }
            },
            "c18c8090-2318-11eb-bd9f-99b2335d8890": {
                "uid": "c18c8090-2318-11eb-bd9f-99b2335d8890",
                "xposition": 28,
                "yposition": 6,
                "width": 17,
                "height": 8,
                "minwidth": 0,
                "minheight": 0,
                "maxwidth": 96,
                "maxheight": 80,
                "resize": null,
                "move": null,
                "Layout": "withList",
                "widget": {
                    "uid": "c1af23c0-2318-11eb-bd9f-99b2335d8890",
                    "component": {
                        "uid": "d2202500-cc76-11e9-8bcf-1fc7a6960356",
                        "Name": "SrsTextField",
                        "Scope": "studio",
                        "Type": "React",
                        "WebComponent": null,
                        "Version": "1.0.0",
                        "Props": {
                            "helperText": "*Required",
                            "InvalidText": "Value is required",
                            "Password": null,
                            "value": null,
                            "Name": null,
                            "FieldName": "",
                            "LightMode": "0",
                            "Label": "TextLabel",
                            "Placeholder": "Enter text...",
                            "DefaultValue": "Enter text...",
                            "ClassName": "",
                            "EmbeddedStyles": null
                        }
                    },
                    "widgetproperties": {
                        "Name": {
                            "uid": "c289a540-2318-11eb-bd9f-99b2335d8890",
                            "name": "Name",
                            "value": "WFName"
                        },
                        "Label": {
                            "uid": "c29983c0-2318-11eb-bd9f-99b2335d8890",
                            "name": "Label",
                            "value": "Name"
                        },
                        "DefaultValue": {
                            "uid": "c2a98950-2318-11eb-bd9f-99b2335d8890",
                            "name": "DefaultValue",
                            "value": ""
                        },
                        "InvalidText": {
                            "uid": "c2b82f50-2318-11eb-bd9f-99b2335d8890",
                            "name": "InvalidText",
                            "value": ""
                        },
                        "helperText": {
                            "uid": "c2e2c1c0-2318-11eb-bd9f-99b2335d8890",
                            "name": "helperText",
                            "value": ""
                        },
                        "LightMode": {
                            "uid": "c2f20400-2318-11eb-bd9f-99b2335d8890",
                            "name": "LightMode",
                            "value": "true"
                        },
                        "FieldName": {
                            "uid": "c304a1a0-2318-11eb-bd9f-99b2335d8890",
                            "name": "FieldName",
                            "value": "@@[]"
                        },
                        "ClassName": {
                            "uid": "c3132090-2318-11eb-bd9f-99b2335d8890",
                            "name": "ClassName",
                            "value": ""
                        },
                        "Placeholder": {
                            "uid": "e06e4ab0-2337-11eb-bd9f-99b2335d8890",
                            "name": "Placeholder",
                            "value": "Enter text..."
                        },
                        "__State__value": {
                            "uid": "e09840e0-2337-11eb-bd9f-99b2335d8890",
                            "name": "__State__value",
                            "value": "WFName"
                        }
                    },
                    "widgetactions": {}
                }
            },
            "c3215160-2318-11eb-bd9f-99b2335d8890": {
                "uid": "c3215160-2318-11eb-bd9f-99b2335d8890",
                "xposition": 46,
                "yposition": 6,
                "width": 14,
                "height": 8,
                "minwidth": 0,
                "minheight": 0,
                "maxwidth": 96,
                "maxheight": 80,
                "resize": null,
                "move": null,
                "Layout": "withList",
                "widget": {
                    "uid": "c3468ca0-2318-11eb-bd9f-99b2335d8890",
                    "component": {
                        "uid": "d2202500-cc76-11e9-8bcf-1fc7a6960356",
                        "Name": "SrsTextField",
                        "Scope": "studio",
                        "Type": "React",
                        "WebComponent": null,
                        "Version": "1.0.0",
                        "Props": {
                            "helperText": "*Required",
                            "InvalidText": "Value is required",
                            "Password": null,
                            "value": null,
                            "Name": null,
                            "FieldName": "",
                            "LightMode": "0",
                            "Label": "TextLabel",
                            "Placeholder": "Enter text...",
                            "DefaultValue": "Enter text...",
                            "ClassName": "",
                            "EmbeddedStyles": null
                        }
                    },
                    "widgetproperties": {
                        "Name": {
                            "uid": "c427c4e0-2318-11eb-bd9f-99b2335d8890",
                            "name": "Name",
                            "value": "VersionNumber"
                        },
                        "Placeholder": {
                            "uid": "c4388dc0-2318-11eb-bd9f-99b2335d8890",
                            "name": "Placeholder",
                            "value": "Enter Version Number..."
                        },
                        "DefaultValue": {
                            "uid": "c446be90-2318-11eb-bd9f-99b2335d8890",
                            "name": "DefaultValue",
                            "value": ""
                        },
                        "InvalidText": {
                            "uid": "c4556490-2318-11eb-bd9f-99b2335d8890",
                            "name": "InvalidText",
                            "value": ""
                        },
                        "helperText": {
                            "uid": "c463e380-2318-11eb-bd9f-99b2335d8890",
                            "name": "helperText",
                            "value": ""
                        },
                        "LightMode": {
                            "uid": "c471ed40-2318-11eb-bd9f-99b2335d8890",
                            "name": "LightMode",
                            "value": "true"
                        },
                        "ClassName": {
                            "uid": "c4817da0-2318-11eb-bd9f-99b2335d8890",
                            "name": "ClassName",
                            "value": ""
                        },
                        "FieldName": {
                            "uid": "c48e75f0-2318-11eb-bd9f-99b2335d8890",
                            "name": "FieldName",
                            "value": "@@[]"
                        },
                        "Label": {
                            "uid": "c49b9550-2318-11eb-bd9f-99b2335d8890",
                            "name": "Label",
                            "value": "Version"
                        },
                        "__State__value": {
                            "uid": "da727640-2337-11eb-bd9f-99b2335d8890",
                            "name": "__State__value",
                            "value": "Version"
                        }
                    },
                    "widgetactions": {}
                }
            },
            "ca3b4000-2318-11eb-bd9f-99b2335d8890": {
                "uid": "ca3b4000-2318-11eb-bd9f-99b2335d8890",
                "xposition": 71,
                "yposition": 6,
                "width": 12,
                "height": 4,
                "minwidth": 0,
                "minheight": 0,
                "maxwidth": 96,
                "maxheight": 80,
                "resize": null,
                "move": null,
                "Layout": "withList",
                "widget": {
                    "uid": "ca7ae110-2318-11eb-bd9f-99b2335d8890",
                    "component": {
                        "uid": "bceef530-ce60-11e9-96ad-0f185d3b9dc1",
                        "Name": "SrsButton",
                        "Scope": "studio",
                        "Type": "React",
                        "WebComponent": true,
                        "Version": "1.0.0",
                        "Props": {
                            "IconPath": null,
                            "IconOnly": "0",
                            "Status": null,
                            "Size": "small",
                            "OneColumnBottomAnchor": "",
                            "ButtonAction": "Custom",
                            "Styles": "",
                            "OneColumnTopAnchor": "",
                            "EmbeddedStyles": null,
                            "Label": "Button",
                            "Name": ""
                        }
                    },
                    "widgetproperties": {
                        "IconPath": {
                            "uid": "95a1b440-2d23-11eb-8ddd-c9f23053865b",
                            "name": "IconPath",
                            "value": "document--import/32"
                        },
                        "Styles": {
                            "uid": "95cf05d0-2d23-11eb-8ddd-c9f23053865b",
                            "name": "Styles",
                            "value": ""
                        },
                        "IconOnly": {
                            "uid": "95d0b380-2d23-11eb-8ddd-c9f23053865b",
                            "name": "IconOnly",
                            "value": "true"
                        },
                        "Name": {
                            "uid": "cb0f58e0-2318-11eb-bd9f-99b2335d8890",
                            "name": "Name",
                            "value": "OpenBtn"
                        },
                        "Label": {
                            "uid": "cb1e4d00-2318-11eb-bd9f-99b2335d8890",
                            "name": "Label",
                            "value": "Hide List"
                        },
                        "ButtonAction": {
                            "uid": "cb2e79a0-2318-11eb-bd9f-99b2335d8890",
                            "name": "ButtonAction",
                            "value": ""
                        },
                        "Size": {
                            "uid": "cb3fdec0-2318-11eb-bd9f-99b2335d8890",
                            "name": "Size",
                            "value": "small"
                        },
                        "OneColumnBottomAnchor": {
                            "uid": "cd54ada0-231b-11eb-bd9f-99b2335d8890",
                            "name": "OneColumnBottomAnchor",
                            "value": ""
                        },
                        "OneColumnTopAnchor": {
                            "uid": "cd576cc0-231b-11eb-bd9f-99b2335d8890",
                            "name": "OneColumnTopAnchor",
                            "value": ""
                        }
                    },
                    "widgetactions": {
                        "onOpen@@WorkflowModeler_workflow": {
                            "uid": "cb4f6f20-2318-11eb-bd9f-99b2335d8890",
                            "Name": "onOpen@@WorkflowModeler_workflow",
                            "Scope": "workflow",
                            "Definition": "(async function() {\n\tlet pageState = $notifier.getState();    \n    pageState.currentLayout = \"default\";\n    $notifier.setState(pageState);\n})",
                            "Trigger": "onClick",
                            "Active": true,
                            "Order": 1,
                            "Type": "Current",
                            "Target": null
                        }
                    }
                }
            },
            "cbf09120-2318-11eb-bd9f-99b2335d8890": {
                "uid": "cbf09120-2318-11eb-bd9f-99b2335d8890",
                "xposition": 0,
                "yposition": 0,
                "width": 96,
                "height": 5,
                "minwidth": 0,
                "minheight": 0,
                "maxwidth": 96,
                "maxheight": 80,
                "resize": null,
                "move": null,
                "Layout": "withList",
                "widget": {
                    "uid": "cc1222e0-2318-11eb-bd9f-99b2335d8890",
                    "component": {
                        "uid": "74fcbc00-3a01-11ea-89d4-074c81db075c",
                        "Name": "SrsTitle",
                        "Scope": "studio",
                        "Type": "React",
                        "WebComponent": null,
                        "Version": "1.0.0",
                        "Props": {
                            "Styles": ".bx--tile { font-size: 6rem; }",
                            "EmbeddedStyles": null,
                            "Title ": "Secton 123",
                            "Name": null
                        }
                    },
                    "widgetproperties": {
                        "Title": {
                            "uid": "cc861a60-2318-11eb-bd9f-99b2335d8890",
                            "name": "Title",
                            "value": "WorkFlow Designer"
                        },
                        "Styles": {
                            "uid": "cc970a50-2318-11eb-bd9f-99b2335d8890",
                            "name": "Styles",
                            "value": "{\"backgroundColor\": \"lightgrey\", \"borderBottom\":\"1px solid green\", \"textAlign\": \"center\"}"
                        },
                        "Name": {
                            "uid": "cca69ab0-2318-11eb-bd9f-99b2335d8890",
                            "name": "Name",
                            "value": "Title"
                        }
                    },
                    "widgetactions": {}
                }
            },
            "f0737000-218b-11eb-a9d8-09b03b59a8cd": {
                "uid": "f0737000-218b-11eb-a9d8-09b03b59a8cd",
                "xposition": 0,
                "yposition": 0,
                "width": 96,
                "height": 5,
                "minwidth": 0,
                "minheight": 0,
                "maxwidth": 96,
                "maxheight": 80,
                "resize": null,
                "move": null,
                "Layout": "default",
                "widget": {
                    "uid": "f0db0b70-218b-11eb-a9d8-09b03b59a8cd",
                    "component": {
                        "uid": "74fcbc00-3a01-11ea-89d4-074c81db075c",
                        "Name": "SrsTitle",
                        "Scope": "studio",
                        "Type": "React",
                        "WebComponent": null,
                        "Version": "1.0.0",
                        "Props": {
                            "Styles": ".bx--tile { font-size: 6rem; }",
                            "EmbeddedStyles": null,
                            "Title ": "Secton 123",
                            "Name": null
                        }
                    },
                    "widgetproperties": {
                        "Title": {
                            "uid": "014be060-218c-11eb-a9d8-09b03b59a8cd",
                            "name": "Title",
                            "value": "WorkFlow Designer"
                        },
                        "Styles": {
                            "uid": "12ea38d0-218c-11eb-a9d8-09b03b59a8cd",
                            "name": "Styles",
                            "value": "{\"backgroundColor\": \"lightgrey\", \"borderBottom\": \"1px solid green\", \"textAlign\": \"center\"}"
                        },
                        "Name": {
                            "uid": "fb12dbe0-218b-11eb-a9d8-09b03b59a8cd",
                            "name": "Name",
                            "value": "Title"
                        }
                    },
                    "widgetactions": {}
                }
            },
            "f3e5c100-2318-11eb-bd9f-99b2335d8890": {
                "uid": "f3e5c100-2318-11eb-bd9f-99b2335d8890",
                "xposition": 0,
                "yposition": 6,
                "width": 28,
                "height": 72,
                "minwidth": 0,
                "minheight": 0,
                "maxwidth": 96,
                "maxheight": 80,
                "resize": null,
                "move": null,
                "Layout": "withList",
                "widget": {
                    "uid": "f4419ca0-2318-11eb-bd9f-99b2335d8890",
                    "component": {
                        "uid": "d7886b60-552a-11e9-8411-0b877641942f",
                        "Name": "ListLayout",
                        "Scope": "mmf",
                        "Type": "React",
                        "WebComponent": null,
                        "Version": "1",
                        "Props": {
                            "Size": "short",
                            "Fields": null,
                            "PageSize": "10",
                            "StickyHeader": "",
                            "Title": "",
                            "Filter": null,
                            "ShowRadioButton": null,
                            "EditBtn": null,
                            "HideFilter": null,
                            "ShowUID": "false",
                            "EditPage": "",
                            "CreatePage": "",
                            "isSortable": null,
                            "Reload": "false",
                            "TableName": null,
                            "Name": "",
                            "EditableRowId": "-1",
                            "SelectedRowIds": "",
                            "ShowNewButton": "",
                            "ShowEditButton": "",
                            "ShowHeader": "1"
                        }
                    },
                    "widgetproperties": {
                        "Title": {
                            "uid": "0e0e8800-2319-11eb-bd9f-99b2335d8890",
                            "name": "Title",
                            "value": "WFList"
                        },
                        "Name": {
                            "uid": "0e9236f0-2319-11eb-bd9f-99b2335d8890",
                            "name": "Name",
                            "value": "WFList"
                        },
                        "TableName": {
                            "uid": "186d6870-2319-11eb-bd9f-99b2335d8890",
                            "name": "TableName",
                            "value": "WorkflowVersion_workflow"
                        },
                        "Fields": {
                            "uid": "18d48eb0-2319-11eb-bd9f-99b2335d8890",
                            "name": "Fields",
                            "value": "[{\"name\":\"\",\"value\":\"Name\"},{\"name\":\"\",\"value\":\"Version\"}]"
                        },
                        "PageSize": {
                            "uid": "7df0bbf0-231b-11eb-bd9f-99b2335d8890",
                            "name": "PageSize",
                            "value": "10"
                        },
                        "ShowUID": {
                            "uid": "7e491520-231b-11eb-bd9f-99b2335d8890",
                            "name": "ShowUID",
                            "value": "false"
                        },
                        "Reload": {
                            "uid": "7e493c30-231b-11eb-bd9f-99b2335d8890",
                            "name": "Reload",
                            "value": "false"
                        },
                        "CreatePage": {
                            "uid": "7e585760-231b-11eb-bd9f-99b2335d8890",
                            "name": "CreatePage",
                            "value": ""
                        },
                        "EditPage": {
                            "uid": "7e587e70-231b-11eb-bd9f-99b2335d8890",
                            "name": "EditPage",
                            "value": ""
                        },
                        "EditableRowId": {
                            "uid": "7e6c0670-231b-11eb-bd9f-99b2335d8890",
                            "name": "EditableRowId",
                            "value": "-1"
                        },
                        "SelectedRowIds": {
                            "uid": "7eaf9f20-231b-11eb-bd9f-99b2335d8890",
                            "name": "SelectedRowIds",
                            "value": ""
                        },
                        "ShowNewButton": {
                            "uid": "7ecd3940-231b-11eb-bd9f-99b2335d8890",
                            "name": "ShowNewButton",
                            "value": "true"
                        },
                        "ShowEditButton": {
                            "uid": "7ecd6050-231b-11eb-bd9f-99b2335d8890",
                            "name": "ShowEditButton",
                            "value": "true"
                        },
                        "HideFilter": {
                            "uid": "8845ff70-231b-11eb-bd9f-99b2335d8890",
                            "name": "HideFilter",
                            "value": "false"
                        },
                        "TriggerActionOnChange": {
                            "uid": "abe157d0-232b-11eb-bd9f-99b2335d8890",
                            "name": "TriggerActionOnChange",
                            "value": "true"
                        }
                    },
                    "widgetactions": {
                        "onItemSelect@@WorkflowModeler_workflow": {
                            "uid": "98d31bb0-232b-11eb-bd9f-99b2335d8890",
                            "Name": "onItemSelect@@WorkflowModeler_workflow",
                            "Scope": "workflow",
                            "Definition": "(async function() {\n  \tdebugger;\n\tif($live.EditableRowId == -1) {\n    \t//set the pageState with new workflow to create\n      \t$notifier.setState({ wfloading: true, wfVersionId: \"\", WFName: \"\", Version: \"\", BPMN_XML: \"\"});\n    }else {\n      //load the Workflow and set the respective fields to update it further...\n      let wfId = $live.EditableRowId;\n      let wfRecord = await $qry.getRecords(\"WorkflowVersion_workflow\", {\"where\": {\"uid\": wfId}}, [\"uid\", \"Name\", \"Version\", \"Definition\", \"Status\"]);\n      if(wfRecord && wfRecord.length == 1) {\n\t  \t$notifier.setState({showloader: true, wfloading: true, wfVersionId: wfId, WFName: wfRecord[0].Name, Version: wfRecord[0].Version, BPMN_XML: wfRecord[0].Definition});\n      }\n    }\n})",
                            "Trigger": "onChange",
                            "Active": true,
                            "Order": 1,
                            "Type": "Current",
                            "Target": null
                        }
                    }
                }
            },
            "ffcf5b40-21c7-11eb-a9d8-09b03b59a8cd": {
                "uid": "ffcf5b40-21c7-11eb-a9d8-09b03b59a8cd",
                "xposition": 87,
                "yposition": 6,
                "width": 8,
                "height": 4,
                "minwidth": 0,
                "minheight": 0,
                "maxwidth": 96,
                "maxheight": 80,
                "resize": null,
                "move": null,
                "Layout": "default",
                "widget": {
                    "uid": "0033c260-21c8-11eb-a9d8-09b03b59a8cd",
                    "component": {
                        "uid": "bceef530-ce60-11e9-96ad-0f185d3b9dc1",
                        "Name": "SrsButton",
                        "Scope": "studio",
                        "Type": "React",
                        "WebComponent": true,
                        "Version": "1.0.0",
                        "Props": {
                            "IconPath": null,
                            "IconOnly": "0",
                            "Status": null,
                            "Size": "small",
                            "OneColumnBottomAnchor": "",
                            "ButtonAction": "Custom",
                            "Styles": "",
                            "OneColumnTopAnchor": "",
                            "EmbeddedStyles": null,
                            "Label": "Button",
                            "Name": ""
                        }
                    },
                    "widgetproperties": {
                        "Name": {
                            "uid": "0790fb90-21c8-11eb-a9d8-09b03b59a8cd",
                            "name": "Name",
                            "value": "ValidateBtn"
                        },
                        "Label": {
                            "uid": "0b839280-21c8-11eb-a9d8-09b03b59a8cd",
                            "name": "Label",
                            "value": "Validate"
                        },
                        "ButtonAction": {
                            "uid": "0bacec70-21c8-11eb-a9d8-09b03b59a8cd",
                            "name": "ButtonAction",
                            "value": ""
                        },
                        "Size": {
                            "uid": "0c12da30-21c8-11eb-a9d8-09b03b59a8cd",
                            "name": "Size",
                            "value": "small"
                        }
                    },
                    "widgetactions": {}
                }
            }
        }
    },
    "mmf.getSlidePropsById%7B%22uid%22:%224709fc30-1409-11eb-9f23-e138d7998ba3%22%7Ddata.slide": {
        "uid": "4709fc30-1409-11eb-9f23-e138d7998ba3",
        "Name": "WorkflowModeler",
        "Scope": "workflow",
        "Type": "FreeForm",
        "Path": "/wfmodeler",
        "props": {}
    },
    "mmf.getSlideProps%7B%22pageId%22:%224709fc30-1409-11eb-9f23-e138d7998ba3%22%7Ddata.MetaSlideProps.MetaSlidePropsFind": {},
    "FormTemplate_studio%7B%22where%22:%7B%22Name%22:%22ActivitySelector%22%7D%7Duid": [
        {
            "uid": "7753c6c0-9a12-11eb-88f1-119921dbf335"
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22uid%22:%227753c6c0-9a12-11eb-88f1-119921dbf335%22%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "7753c6c0-9a12-11eb-88f1-119921dbf335",
            "Name": "ActivitySelector",
            "Scope": "workflow",
            "Model": "",
            "View": "",
            "ModelName": "",
            "schema": "{\"type\":\"object\",\"properties\":{\"Category\":{\"type\":\"string\",\"name\":\"Category\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"Connector\",\"value\":\"Connector\"},{\"name\":\"Data Utilities\",\"value\":\"DataUtils\"},{\"name\":\"Data Filters\",\"value\":\"DataFilters\"}]},\"ServiceTask\":{\"type\":\"string\",\"name\":\"ServiceTask\",\"choiceList\":[{}],\"widgetType\":\"Reference\",\"tableName\":\"ServiceTask_workflow\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},\"SubFormId\":{\"type\":\"string\",\"name\":\"SubFormId\"},\"ActivityId\":{\"type\":\"string\",\"name\":\"ActivityId\"},\"OutputVariableName\":{\"type\":\"string\",\"name\":\"OutputVariableName\"}}}",
            "rawschema": "{\"dataType\":\"object\",\"Properties\":[{\"dataType\":\"string\",\"name\":\"Category\",\"widgetType\":\"Choice\",\"choiceList\":[{\"name\":\"Connector\",\"value\":\"Connector\"},{\"name\":\"Data Utilities\",\"value\":\"DataUtils\"},{\"name\":\"Data Filters\",\"value\":\"DataFilters\"}]},{\"dataType\":\"string\",\"name\":\"ServiceTask\",\"choiceList\":[{}],\"widgetType\":\"Reference\",\"tableName\":\"ServiceTask_workflow\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},{\"dataType\":\"string\",\"name\":\"SubFormId\"},{\"dataType\":\"string\",\"name\":\"ActivityId\"},{\"dataType\":\"string\",\"name\":\"OutputVariableName\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Activity Configuration\",\"scope\":\"#/properties/Label\",\"nane\":\"Label\",\"inlinestyles\":\".top { border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"Control\",\"scope\":\"#/properties/SubFormId\",\"rule\":{\"condition\":{\"scope\":\"#/properties/SubCategory\",\"schema\":{\"enum\":[null]}},\"effect\":\"SHOW\"}},{\"type\":\"Control\",\"subtype\":\"Actions\",\"scope\":\"#/properties/form_actions\",\"actions\":[{\"name\":\"Apply\",\"label\":\"Apply\"}],\"align\":\"right\"},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/Category\",\"label\":\"Category\",\"widget\":{\"widgetType\":\"Reference\",\"tableName\":\"WorkflowCategory_workflow\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"}},{\"type\":\"Control\",\"scope\":\"#/properties/ServiceTask\",\"label\":\"Service Task\"},{\"type\":\"Control\",\"scope\":\"#/properties/OutputVariableName\",\"label\":\"Output Variable\"}]},{\"type\":\"HorizontalLayout\",\"rule\":{\"condition\":{}},\"elements\":[{\"type\":\"Control\",\"subtype\":\"CustomComponent\",\"scope\":\"#/properties/SubForm\",\"controlname\":\"SubForm\",\"componentname\":\"SrsDynamicForm\",\"componentscope\":\"studio\",\"componentprops\":{\"templateid\":\"${SubFormId}\",\"defaultdata\":\"${SubForm}\",\"key\":\"${SubFormId}\"}}]},{\"type\":\"HorizontalLayout\",\"elements\":[]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"name\":\"Label\",\"text\":\"Activity Configuration\",\"showtile\":true,\"inlinestyles\":\".top { border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"Control\",\"name\":\"subformid\",\"rule\":{\"effect\":\"SHOW\",\"condition\":\"SCHEMA\",\"schemaType\":{\"schemaType\":\"Simple\"},\"scope\":\"SubCategory\"},\"scope\":\"SubFormId\",\"options\":null},{\"dataType\":\"Actions\",\"align\":\"right\",\"actions\":[{\"name\":\"Apply\",\"label\":\"Apply\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"Category\",\"label\":\"Category\",\"widgetType\":\"Reference\",\"options\":null,\"tableName\":\"WorkflowCategory_workflow\",\"displayField\":\"Name\",\"filter\":\"{}\",\"searchfields\":\"Name\"},{\"dataType\":\"Control\",\"scope\":\"ServiceTask\",\"label\":\"Service Task\",\"options\":null,\"tableName\":\"WorkflowSubCategory_workflow\",\"choiceLabelFieldName\":\"Name\",\"choiceValueFieldName\":\"Name\",\"condition\":\"{\\\"Category\\\": \\\"${Category}\\\"}\"},{\"dataType\":\"Control\",\"scope\":\"OutputVariableName\",\"label\":\"Output Variable\"}]},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"CustomComponent\",\"name\":\"SubForm\",\"componentname\":\"SrsDynamicForm\",\"componentscope\":\"studio\",\"componentprops\":[{\"name\":\"templateid\",\"value\":\"${SubFormId}\"},{\"name\":\"defaultdata\",\"value\":\"${SubForm}\"},{\"name\":\"key\",\"value\":\"${SubFormId}\"}]}],\"rule\":{\"schemaType\":{\"schemaType\":\"Simple\",\"isRequired\":true,\"Properties\":[{}]}}},{\"dataType\":\"HorizontalLayout\"}]}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22%22%7D,%7B%22or%22:%5B%7B%22Form%22:%227753c6c0-9a12-11eb-88f1-119921dbf335%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": [
        {
            "uid": "0b09ebd0-9ac0-11eb-88f1-119921dbf335",
            "Name": "onServiceTaskChange",
            "Form": "7753c6c0-9a12-11eb-88f1-119921dbf335",
            "SourceActionType": "onChange",
            "SourceField": "",
            "CustomSource": "ServiceTask",
            "SourceAction": "",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 100,
            "TargetActionScript": "(async function() {\n    //$form.SubFormId = \"e1b8b8f0-9ac0-11eb-88f1-119921dbf335\";\n    let records = await $qry.getRecords(\"ServiceTask_workflow\", {where: {uid: $form.ServiceTask}}, [\"uid\", \"SubForm\"]);\n    if(records && records.length > 0) {\n        $form.SubFormId = records[0].SubForm;\n    }\n    return {data: $form, meta: {SubForm: {reload: Date.now()}}};\n})",
            "Condition": "(async function() {\n    return true;\n})",
            "PreventDefaultSave": "",
            "PreventDefaultShowList": ""
        },
        {
            "uid": "54ba9f20-9c52-11eb-88f1-119921dbf335",
            "Name": "onActivitySelectorApply",
            "Form": "7753c6c0-9a12-11eb-88f1-119921dbf335",
            "SourceActionType": "onClick",
            "SourceField": "",
            "CustomSource": "",
            "SourceAction": "Apply",
            "TargetActionType": "Scripted",
            "TargetActionField": "",
            "Order": 100,
            "TargetActionScript": "(async function() {\n    debugger;\n    $notifier.closeModal();\n})",
            "Condition": "(async function() {\n    return true;\n})",
            "PreventDefaultSave": "",
            "PreventDefaultShowList": ""
        }
    ],
    "FormTemplate_studio%7B%22where%22:%7B%22and%22:%5B%7B%22ModelName%22:%22%22%7D,%7B%22Scope%22:%22workflow%22%7D,%7B%22View%22:%22Default%22%7D%5D%7D%7Duid,Name,Scope,Model,ModelName,View,schema,rawschema,uischema,rawuischema,default,Theme": [],
    "FormTemplate_studio%7B%22where%22:%7B%22uid%22:%22e1b8b8f0-9ac0-11eb-88f1-119921dbf335%22%7D%7Duid,Name,Scope,Model,View,ModelName,schema,rawschema,uischema,rawuischema,default,Theme": [
        {
            "uid": "e1b8b8f0-9ac0-11eb-88f1-119921dbf335",
            "Name": "CreateRecord",
            "Scope": "workflow",
            "Model": "",
            "View": "",
            "ModelName": "",
            "schema": "{\"type\":\"object\",\"properties\":{\"TableName\":{\"type\":\"string\",\"name\":\"TableName\"},\"Fields\":{\"type\":\"string\",\"name\":\"Fields\"}}}",
            "rawschema": "{\"dataType\":\"object\",\"Properties\":[{\"dataType\":\"string\",\"name\":\"TableName\"},{\"dataType\":\"string\",\"name\":\"Fields\"}]}",
            "uischema": "{\"type\":\"VerticalLayout\",\"elements\":[{\"type\":\"Control\",\"subtype\":\"Label\",\"text\":\"Create Record Configuration\",\"scope\":\"#/properties/labelcomponent\",\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\",\"showtile\":true},{\"type\":\"HorizontalLayout\",\"elements\":[{\"type\":\"Group\",\"elements\":[{\"type\":\"Control\",\"scope\":\"#/properties/TableName\",\"label\":\"Table Name\"},{\"type\":\"Control\",\"scope\":\"#/properties/Fields\",\"label\":\"Fields (ex: {\\\"Field1\\\": \\\"value1\\\", \\\"Field2\\\": \\\"value2\\\"...})\"}]}]}]}",
            "rawuischema": "{\"dataType\":\"VerticalLayout\",\"Properties\":[{\"dataType\":\"Label\",\"text\":\"Create Record Configuration\",\"showtile\":true,\"inlinestyles\":\".top { background-color: white !important; border-bottom: 1px solid green; font-size: large;}\"},{\"dataType\":\"HorizontalLayout\",\"Properties\":[{\"dataType\":\"Group\",\"Properties\":[{\"dataType\":\"Control\",\"scope\":\"TableName\",\"label\":\"Table Name\"},{\"dataType\":\"Control\",\"scope\":\"Fields\",\"label\":\"Fields (ex: {\\\"Field1\\\": \\\"value1\\\", \\\"Field2\\\": \\\"value2\\\"...})\"}]}]}]}",
            "default": "{}",
            "Theme": "f47ae380-99a5-11eb-ba01-67948a9bbedb"
        }
    ],
    "FormActions_studio%7B%22where%22:%7B%22and%22:%5B%7B%22Model%22:%22%22%7D,%7B%22or%22:%5B%7B%22Form%22:%22e1b8b8f0-9ac0-11eb-88f1-119921dbf335%22%7D,%7B%22Form%22:%22%22%7D%5D%7D%5D%7D%7Duid,Name,Form,SourceActionType,SourceField,CustomSource,SourceAction,TargetActionType,TargetActionField,Order,TargetActionScript,Condition,PreventDefaultSave,PreventDefaultShowList": []
}