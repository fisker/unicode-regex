# unicode-regex

[![npm](https://img.shields.io/npm/v/unicode-regex.svg)](https://www.npmjs.com/package/unicode-regex)
[![build](https://img.shields.io/travis/ikatyang/unicode-regex/master.svg)](https://travis-ci.org/ikatyang/unicode-regex/builds)
[![coverage](https://img.shields.io/codecov/c/github/ikatyang/unicode-regex/master.svg)](https://codecov.io/gh/ikatyang/unicode-regex)

regular expression for matching [unicode category](http://unicode.org/reports/tr44/#GC_Values_Table) (data from [`unicode`](https://www.npmjs.com/package/unicode))

[Changelog](https://github.com/ikatyang/unicode-regex/blob/master/CHANGELOG.md)

## Install

```sh
# using npm
npm install --save unicode-regex

# using yarn
yarn add unicode-regex
```

## Usage

```js
const get_unicode_regex = require('unicode-regex');

const regex = unicode_regex(['Pc', 'Pd', 'Pe', 'Pf', 'Pi', 'Po', 'Ps']);
regex.test('a'); //=> false
regex.test('"'); //=> true
regex.test('“'); //=> true
```

## Development

```sh
# lint
yarn run lint

# build
yarn run build

# test
yarn run test
```

## License

MIT © [Ika](https://github.com/ikatyang)