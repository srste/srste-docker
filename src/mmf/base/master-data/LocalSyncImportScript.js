(function() {
    try{
        var record2Update = JSON.parse($fileContent);
        if (record2Update) {
            let payload = {
                'uid': $fileUID,
                'Name': record2Update.Name,
                'Scope': record2Update.Scope,
                'Table': record2Update.Table,	       
                'Order': record2Update.Order,
                'Field': record2Update.Field,
                'ExportScript': record2Update.ExportScript,
                'ImportScript': record2Update.ImportScript,	       
                'ExportCondition': record2Update.ExportCondition,
                'ImportCondition': record2Update.ImportCondition,
                'LocalPath': record2Update.LocalPath,
                'Level': record2Update.Level,	       
                'Active': record2Update.Active,
                "srs_created_at": $createdAt,
                "srs_updated_at": $updatedAt,
                "srs_created_by": $createdBy,
                "srs_updated_by": $updatedBy
            };
        
            $tbl[$dataTable].upsertWithWhere({uid:$fileUID}, payload)
                .then(function(resp) {       
                    $topResolve({});
                })
                .catch(function(err) {
                   console.log("error updating component - " + err);
                    $topResolve({});                 
                });
        }
    }catch(ex) {
        console.log("Error occurred while executing the import script for Component Definition - " + ex);
        $topReject();
    }
 })