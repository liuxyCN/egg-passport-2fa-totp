# egg-passport-2fa-totp

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-passport-2fa-totp.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-passport-2fa-totp
[travis-image]: https://img.shields.io/travis/eggjs/egg-passport-2fa-totp.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-passport-2fa-totp
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-passport-2fa-totp.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-passport-2fa-totp?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-passport-2fa-totp.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-passport-2fa-totp
[snyk-image]: https://snyk.io/test/npm/egg-passport-2fa-totp/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-passport-2fa-totp
[download-image]: https://img.shields.io/npm/dm/egg-passport-2fa-totp.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-passport-2fa-totp

<!--
Description here.
-->

## Install

```bash
$ npm i egg-passport-2fa-totp --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.passport2faTotp = {
  enable: true,
  package: 'egg-passport-2fa-totp',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.passport2faTotp = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
