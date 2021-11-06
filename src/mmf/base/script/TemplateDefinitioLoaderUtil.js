module.exports = function ($qry, scopeName, scriptName) {
    let output = "";
    return new Promise((resolve, reject) => {
        if ($qry) {
            var accessPaths = ["data.MetaComponent.MetaComponentFindOne"].join();
            $qry.run("mmf.getComponentType", { "Name": scriptName, "Scope": scopeName }, accessPaths)
            .then(function (result) {
                
                switch (result.Type) {
                    case "React":
                        output = result.Definition;
                        output = output.replace(/\$Component/g, scriptName);
                        output += "\nexport default " + scriptName + ";\n";
                        break;
                    case "Snabbdom":
                        output  = "/** @jsx html */\n";
                        output += "import snabbdomJSX from 'snabbdom-jsx';\n";
                        output += "import h from 'snabbdom/h';\n";
                        output += "const html = snabbdomJSX.html;\n";
                        output += result.Definition + "\n";
                        break;
                    case "Vue":
                        output = replaceTemplate(result.Definition, result.HTML);
                        break;
                    default:
                        output = "export default \"" + escapeStr(result.Definition) + "\"\n}\n";
                        break;
                }

                output += "\nvar states =  " + getStates(result.States) + ";\n";
                output += "\nvar actions = {" + getActions(result.Actions) + "};\n";
                output += "\nexport {states};";
                output += "\nexport {actions};";
                resolve(output);
            })
            .catch(function (err) {
                console.error('Error occurred while fetching the client template definition of ' + scriptName + ' - ' + err);
                resolve("");
            });
        }
    });
}

function replaceTemplate(componentDef, templateHTML) {
    return componentDef.replace(/\@dynamic/, templateHTML);
}

function getStates(states) {
    var result = [];
    if (states && states.edges && states.edges.length > 0) {
        //process the states
        states.edges.forEach((state) => {
            result.push(state.node);
        });
    }
    return JSON.stringify(result);
}

function getActions(actions) {
    var result = "";
    if (actions && actions.edges && actions.edges.length > 0) {
        //process the actions
        actions.edges.forEach((action) => {
            result += "\"" + action.node.Action + "\": " + action.node.Definition + ",";
        });
    }
    return result;
}

function escapeStr(input) {
    var result = input;
    try {
        if (input && input.replace) {
            result = input
                .replace(/\"/g, '\\"')
                .replace(/\'/g, "\\'")
                .replace(/\t/g, '\\t')
                .replace(/\n/g, '\\n')
                .replace(/\r/g, '\\r');
        }
    } catch (err) {
        console.log('Error occurred while escaping ' + input + '--' + err);
    }

    return result;
}
