var loopback = require('loopback');
var boot = require('loopback-boot');
//var app = module.exports = loopback();
var app = require('../../../app'); 
var ds = app.datasources['mmf'];    

boot(app, __dirname);