'use strict'
var https = require('https')

var LicensesAPI = {
  init: 'https://api.opensource.org/',
  all: function () {
    return this.request('licenses/')
  },
  tagged: function (tag) {
    return this.request('licenses/' + tag)
  },
  get: function (id) {
    return this.request('license/' + id)
  },
  request: function (resource) {
    https.get(this.init + resource, function (response) {
      response.setEncoding('utf8')
      var body = []
      response.on('error', function (error) {
        console.log('Got error: ' + error.message)
      })
      .on('data', function (chunk) {
        body += chunk
      })
      .on('end', function () {
        var result = JSON.parse(body)
        console.log(result)
      })
    })
  }
}
module.exports = LicensesAPI
