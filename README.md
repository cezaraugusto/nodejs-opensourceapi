<img src="imglicense.png" alt="Open Source Initiative" title="Open Source Initiative" align="right" height="96" width="96"/>

# nodejs-opensourceapi

[![npm version][npmimg]][npm]
[![Build Status][travisimg]][travis]
[![Downloads][downloadsimg]][downloads]
[![licenses cool][licensescool]][licensescoollink]

`nodejs-opensourceapi` is an API Wrapper that allows you to query the Open Source License API with NodeJS

<br>


## Installing (requires Node >= v0.10)

```
$ npm install --save nodejs-opensourceapi
```


## Example

```js
var licenses = require('nodejs-opensourceapi')

// List all licenses
licenses.all((result) => {
  // ...something cool
})

// Find all licenses with keyword "copyleft"
licenses.tagged('copyleft', (result) => {
  // ...something cool
})

// Get the GPL-3.0 license
licenses.get('GPL-3.0', (result) => {
  // ...something cool
})
```

**For more usage information please refer [here][opensourceorg].**

## License

MIT © [Cezar Augusto](http://cezaraugusto.net)

[npmimg]: https://img.shields.io/npm/v/nodejs-opensourceapi.svg
[npm]: https://www.npmjs.org/package/nodejs-opensourceapi
[travisimg]: https://api.travis-ci.org/cezaraugusto/nodejs-opensourceapi.svg
[travis]: https://travis-ci.org/cezaraugusto/nodejs-opensourceapi
[downloadsimg]: https://img.shields.io/npm/dt/nodejs-opensourceapi.svg
[downloads]: https://nodei.co/npm/nodejs-opensourceapi
[licensescool]: https://img.shields.io/badge/licenses-cool-green.svg
[licensescoollink]: https://opensource.org/
[opensourceorg]: https://github.com/OpenSourceOrg/api/blob/master/doc/endpoints.md
