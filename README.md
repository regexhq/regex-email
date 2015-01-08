# regex-email
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Regular expression for email. [You shouldn't use RegExp for validating emails.](http://davidcel.is/blog/2012/09/06/stop-validating-email-addresses-with-regex/) Use it only for hinting to the user.


## Installation
```bash
$ npm install regex-email
```

## Usage
```js
var regex = require('regex-email');

regex.test('tobi+ferret@vision.com');
// => true
```

## See Also
- [Update your Email RegExp][ddiaz] by [Dustin Diaz](https://github.com/ded)
- [sindresorhus/email-regex](https://github.com/sindresorhus/email-regex)
- [You shouldn't use this for validating emails.][davidcelis] Use it only for hinting to the user.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/regex-email.svg?style=flat-square
[npm-url]: https://npmjs.org/package/regex-email
[travis-image]: https://img.shields.io/travis/regexps/regex-email.svg?style=flat-square
[travis-url]: https://travis-ci.org/regexps/regex-email
[coveralls-image]: https://img.shields.io/coveralls/regexps/regex-email.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/regexps/regex-email?branch=master
[downloads-image]: http://img.shields.io/npm/dm/regex-email.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/regex-email

[ddiaz]: http://www.dustindiaz.com/update-your-email-regexp/
[davidcelis]: http://davidcel.is/blog/2012/09/06/stop-validating-email-addresses-with-regex/
