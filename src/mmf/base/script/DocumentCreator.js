var $qry = require('./$qry')();
module.exports = function (app, documentName, fileType, fileContents) {
    return new Promise((resolve, reject) => {
        var $tbl = [];
        const chunkSize = 1024 * 1024; //1MB chunks
        const numChunks = Math.ceil(fileContents.length / chunkSize);                

        app.models().forEach(function (modelInstance) {
            $tbl[modelInstance.modelName] = modelInstance;
        });

        $tbl.MetaDocument.create({ Name: documentName, MimeType: fileType}, async (err, docRecord) => {
            if (!err) {
                let documentId = docRecord.uid;                   
                let fragment;
                if (numChunks > 0) {                    
                    for(let fragmentIndx = 0; fragmentIndx < numChunks; fragmentIndx++) {                         
                        fragment = fileContents.substr(fragmentIndx * chunkSize, chunkSize);
                        let fragmentRecord = {
                            'DocumentId': documentId,
                            'Data': JSON.stringify(Buffer.from(fragment)),
                            'Order': (fragmentIndx + 1)
                        };
                        await createFragment(fragmentRecord, $tbl);                                
                    }
                    resolve(documentId);                                            
                }                
            } else {
                resolve(-1);
            }
        });
    });
}

function createFragment(data, $tbl) {
    return new Promise((resolve, reject) => {
        $tbl.MetaDocfragment.create(data, (err, fragRec) => {
            if(err) {
                console.error("Error creating the fragment - " + err);
            }
            resolve();
        });
    });                  
}