'use strict';

const GoogleAuthenticator = require('passport-2fa-totp').GoogeAuthenticator;
const Strategy = require('passport-2fa-totp').Strategy;

module.exports = app => {
  const config = app.config.passport2faTotp;

  app.passport.use(new Strategy(config, (req, username, password, done) => {
    // format user
    const user = {
      username,
      password,
    };
    // passport do verify and call verify hook
    app.passport.doVerify(req, user, done);
  }, function(req, user, done) {
    // 2nd step verification: TOTP
    if (!user.secret) {
      done(new Error('Google Authenticator is not setup yet.'));
    } else {
      const secret = GoogleAuthenticator.decodeSecret(user.secret);
      done(null, secret, app.config.passport2faTotp.time || 30);
    }
  }));
};
