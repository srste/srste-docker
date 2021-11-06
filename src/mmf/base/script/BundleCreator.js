var $qry = require('./$qry')();
module.exports = function (app, bundleName, bundleData) {
    return new Promise((resolve, reject) => {
        var $tbl = [];
        const chunkSize = 1024 * 1024; //1MB chunks
        const numChunks = Math.ceil(bundleData.length / chunkSize);

        let ds = app.datasources['mmf']; 
        let models = ds.models;
        let modelNames = Object.keys(models);
        
        modelNames.forEach(function (modelName) {                                         
            $tbl[modelName] = models[modelName];                       
        });

        let bundleRecord = {
            'AppName': bundleName,
            'Active': 1
        }

        $tbl.MetaBundle.upsertWithWhere({ 'AppName': bundleName }, bundleRecord, (err, bundleRec) => {
            if (!err) {
                let bundleId = bundleRec.uid;
                $tbl.MetaBundlefragment.destroyAll({ 'BundleId': bundleId }, async (err, obj) => {

                    let fragment;                    
                    if (numChunks > 0) {                    
                        for(let fragmentIndx = 0; fragmentIndx < numChunks; fragmentIndx++) {                         
                            fragment = bundleData.substr(fragmentIndx * chunkSize, chunkSize);
                            let fragmentRecord = {
                                'BundleId': bundleId,
                                'Data': JSON.stringify(Buffer.from(fragment)),
                                'Order': (fragmentIndx + 1)
                            };
                            await createFragment(fragmentRecord, $tbl);                                
                        }
                        resolve(bundleId);                                            
                    }
                });
            } else {
                resolve(-1);
            }
        });
    });
}

function createFragment(data, $tbl) {
    return new Promise((resolve, reject) => {
        $tbl.MetaBundlefragment.create(data, (err, fragRec) => {
            if(err) {
                console.error("Error creating the fragment - " + err);
            }
            resolve();
        });
    });                  
}