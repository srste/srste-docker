var LoopBackContext = require('loopback-context');
var secUtil = require('../mmf/base/script/SecurityUtil.js');

module.exports = function(options) {
  return function storeCurrentUser(req, res, next) {
    if (!req.accessToken) {      
      return next();
    }

    req.app.models.User.findById(req.accessToken.userId, function(err, user) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return next(new Error('No user with this access token was found.'));
      }
      var loopbackContext = LoopBackContext.getCurrentContext();
      if (loopbackContext) {
        loopbackContext.set('currentUser', user);
        if(secUtil.isSuperUser(user))
          loopbackContext.set('isSuperUser', true);
      }
      next();
    });
  };
};
