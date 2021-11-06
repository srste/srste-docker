const fs = require('fs');
const GraphQLUpload = require('graphql-upload');
const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const mkdirp = require('mkdirp');
const promisesAll = require('promises-all');
const shortid = require('shortid');
var streamLength = require("stream-length");
const stream = require("stream");
const splitFileStream = require("split-file-stream");
var $qry = require('../../script/$qry')();
const UPLOAD_DIR = './uploads'
const db = lowdb(new FileSync('db.json'))

// Seed an empty DB
db.defaults({ uploads: [] }).write()

// Ensure upload directory exists
mkdirp.sync(UPLOAD_DIR)

module.exports = function (app, $tbl) {
  $qry = app.$qry? app.$qry: $qry;  
  const storeFS = ({ streamInput, filename }) => {
    const id = shortid.generate()
    const path = `${UPLOAD_DIR}/${id}-${filename}`
    console.log('Uploading file to path - ' + path);
    return new Promise((resolve, reject) =>
      streamInput
        .on('error', error => {
          if (streamInput.truncated)
            // Delete the truncated file
            fs.unlinkSync(path)
          reject(error)
        })
        .pipe(fs.createWriteStream(path))
        .on('error', error => reject(error))
        .on('finish', () => resolve({ id, path }))
    )
  }

  const storeDB = function (file) {
    db
      .get('uploads')
      .push(file)
      .last()
      .write()
  }

  const storeInSrstee = async function (fileObj) {
    const { createReadStream, filename, mimetype } = fileObj;
    let streamInput = createReadStream({ highWaterMark: 128 });
    let streamSize = streamInput._readableState?streamInput._readableState.highWaterMark: -1;
    let { documentId } = await createDocumentRecord({
      Name: filename,
      type: mimetype,
      path: '/file/abcde',
      version: '1.0.0',
      size: streamSize
    });
    await storeChunks(createReadStream, documentId);
    return { id: documentId, path: "/file/" + documentId, filename, mimetype };
  }

  const storeChunks = (createReadStream, documentId) => {
    return new Promise((resolve, reject) => {
      const streamInput = createReadStream({ highWaterMark: 128 });
      let partitionStreamSize = 10*1024; // 10 KB per partition
      const outStreamCreate = (partitionNum) => {
        return stream.PassThrough();
      };

      splitFileStream._splitToStream(outStreamCreate, streamInput, partitionStreamSize, async (outStreams) => {        
        for(let outStreamsIndx in outStreams) {
          let outStream = outStreams[outStreamsIndx];        
          await processStream(outStream, outStreamsIndx, documentId);
        }        
        resolve();
      });
      streamInput.read();
    });
  }

  const createDocumentRecord = (data) => {
    return new Promise((resolve, reject) => {
      $qry.run("mmf.createDocument", {
        "Name": data.Name,
        "MimeType": data.type,
        "Path": data.path,
        "Version": data.version,
        "FileSize": data.size
      }, "data.MetaDocumentCreate.obj")
        .then((res) => {
          resolve({ documentId: res.uid });
        })
        .catch((err) => {
          console.error('Error creating the document record - ' + err);
          resolve({ documentId: '-1' });
        })
    });
  }

  const processStream = function (streamInput, order, documentId) {    
    return new Promise((resolve, reject) => {
      var chunks = [];
      streamInput.on("data", function (chunk) {
        chunks.push(chunk);
      });

      // Send the buffer or you can put it into a var
      streamInput.on("end", function () {
        $tbl.MetaDocfragment.create({
          'DocumentId': documentId,
          'Data': JSON.stringify(Buffer.concat(chunks)),
          'Order': order
        }, (err, obj)=> resolve());        
      });
      streamInput.read();
    });
  }

  const processUpload = async upload => {
    debugger;
    const { createReadStream, filename, mimetype } = await upload
    // const streamInput = createReadStream({ highWaterMark: 128 })
    // const { id, path } = await storeFS({ streamInput, filename })
    return await storeInSrstee({ createReadStream, filename, mimetype });
    // return storeDB({ id, filename, mimetype, path })
  }

  return {
    Upload: GraphQLUpload,
    Query: {
      uploads: () => db.get('uploads').value()
    },
    Mutation: {
      singleUpload: (obj, { file }) => processUpload(file),
      async multipleUpload(obj, { files }) {
        const { resolve, reject } = await promisesAll.all(
          files.map(processUpload)
        )

        if (reject.length)
          reject.forEach(({ name, message }) =>
            // eslint-disable-next-line no-console
            console.error(`${name}: ${message}`)
          )

        return resolve
      }
    }
  }
}
