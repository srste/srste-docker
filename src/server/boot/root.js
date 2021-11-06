'use strict';

module.exports = function(server) {
  // Install a `/healthcheck` route that returns server status
  var router = server.loopback.Router();
  router.get('/healthcheck', server.loopback.status());
  server.use(router);
};
