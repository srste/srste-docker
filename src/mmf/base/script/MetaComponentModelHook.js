'use strict';
var loopback = require('loopback');
module.exports = function (metaComponentModelInstance, appInstance) {
  try {

    function processAfterSaveHooks(ctx) {      
      if (ctx.Model && ctx.Model.app) {
        var clientIndexJS = ctx.Model.app.__basedir + 'client/src/index.js'
        const fs = require('fs');
        fs.readFile(clientIndexJS, 'utf8', function (err, data) {
          if (err) {
            return console.log(err);
          }
          var result = data.replace(/LastModified:.*\n/g, 'LastModified:' + Date.now() + '\n');
          console.log('In processAfterSaveHooks - ' + result);

          fs.writeFile(clientIndexJS, result, 'utf8', function (err) {
            if (err) return console.log(err);
          });
        });
      }
    }

    metaComponentModelInstance.observe('after save', function (ctx, next) {
      //processAfterSaveHooks(ctx);
      next();
    }).bind(this);

  } catch (ex) {
    console.log("Exception - " + ex);
  } finally {

  }
};