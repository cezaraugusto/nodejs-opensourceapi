<img src="imglicense.png" alt="Open Source Initiative" title="Open Source Initiative" align="right" height="96" width="96"/>

# nodejs-opensourceapi

[![npm version][npmimg]][npm]
[![Build Status][travisimg]][travis]
[![Downloads][downloadsimg]][downloads]

`nodejs-opensourceapi` is an API Wrapper that allows you to query the Open Source License API with NodeJS

## Installing

```
$ npm install --save nodejs-opensourceapi
```


## Example

```js
var licenses = require('nodejs-opensourceapi')

// List all licenses
licenses.all()

// Find all licenses with keyword "copyleft"
licenses.tagged('copyleft')

// Get the GPL-3.0 license
licenses.get('GPL-3.0')
```

**For more usage information please refer [here][opensourceorg].**


## License

MIT © [Cezar Augusto](http://cezaraugusto.net)

[npmimg]: https://img.shields.io/npm/v/nodejs-opensourceapi.svg
[npm]: https://www.npmjs.org/package/nodejs-opensourceapi
[travisimg]: https://api.travis-ci.org/cezaraugusto/nodejs-opensourceapi.svg
[travis]: https://travis-ci.org/cezaraugusto/nodejs-opensourceapi
[downloadsimg]: https://img.shields.io/npm/dm/nodejs-opensourceapi.svg
[downloads]: https://nodei.co/npm/nodejs-opensourceapi
[opensourceorg]: https://github.com/OpenSourceOrg/api/blob/master/doc/endpoints.md