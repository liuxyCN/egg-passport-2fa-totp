'use strict';

/**
 * egg-passport-2fa-totp default config
 * @member Config#passport2faTotp
 * @property {String} SOME_KEY - some description
 */
exports.passport2faTotp = {
  passReqToCallback: true,
  // Google Authenticator uses 30 seconds key period
  time: 30,
};
