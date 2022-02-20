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
    // let passport do verify and call verify hook
    app.passport.doVerify(req, user, done);
  }, function(req, user, done) {
    // 2nd step verification: TOTP code from Google Authenticator
    if (!user.secret) {
      done(new Error('Google Authenticator is not setup yet.'));
    } else {
      // Google Authenticator uses 30 seconds key period
      // https://github.com/google/google-authenticator/wiki/Key-Uri-Format

      const secret = GoogleAuthenticator.decodeSecret(user.secret);
      done(null, secret, 30);
    }
  }));
};
