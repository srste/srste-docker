var path = require('path'),
fs = require("fs");
exports.privateKey = fs.readFileSync(path.join(__dirname, './cert/sslforfree/private.key')).toString();
exports.certificate = fs.readFileSync(path.join(__dirname, './cert/sslforfree/certificate.crt')).toString();