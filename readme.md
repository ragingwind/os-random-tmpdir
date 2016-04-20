# os-random-tmpdir [![Build Status](https://travis-ci.org/ragingwind/os-random-tmpdir.svg?branch=master)](https://travis-ci.org/ragingwind/os-random-tmpdir)

> Return randomized hashed path under the temp dir. It is extension of [os-tmpdir](https://github.com/sindresorhus/os-tmpdir)


## Install

```
$ npm install --save os-random-tmpdir
```


## Usage

```js
const randomTmpdir = require('os-random-tmpdir');

randomTmpdir('PREFIX');
//=> /var/folders/wf/bjnghq1d7k15dxmw2sw4h4yh0000gp/T/PREFIX/da4f8ecb4d66f2f50ae04e25dfcbcf03
```


## API

### randomTmpdir(prefix)

#### prefix

Type: `string`

return path with prefix subpath

## License

MIT © [Jimmy Moon](http://ragingwind.me)
