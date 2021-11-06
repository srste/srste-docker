(function () {
    var payload = {
        "uid": $live["uid"],
        "Table": $live["Table"],
        "Name": $live["Name"],
        "Scope": $live["Scope"],
        "Order": $live["Order"],
        "Field": $live["Field"],
        "ExportScript": $live["ExportScript"],
        "ImportScript": $live["ImportScript"],
        "ExportCondition": $live["ExportCondition"],
        "ImportCondition": $live["ImportCondition"],
        "LocalPath": $live["LocalPath"],
        "Level": $live["Level"],
        "Active": $live["Active"]
    }    
    $topResolve({ "payload": JSON.stringify(payload, null, "\t")});
})