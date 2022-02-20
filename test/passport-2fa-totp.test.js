'use strict';

const mock = require('egg-mock');

describe('test/passport-2fa-totp.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/passport-2fa-totp-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, passport2faTotp')
      .expect(200);
  });
});
