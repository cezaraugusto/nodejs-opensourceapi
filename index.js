'use strict'
var https = require('https')
var path = require('path')

var request = function (resource, cb) {
  var options = {
    host: 'api.opensource.org',
    path: resource,
    method: 'GET'
  }

  https.get(options, function (response) {
    response.setEncoding('utf8')
    var body = []
    response.on('error', function (error) {
      console.error('Got error: ' + error.message)
    })
    .on('data', function (chunk) {
      body += chunk
    })
    .on('end', function () {
      cb(JSON.parse(body))
    })
  }).end()
}

var LicensesAPI = {
  all: function (cb) {
    return request('/licenses/', cb)
  },
  tagged: function (tag, cb) {
    return request(path.join('/licenses', tag), cb)
  },
  get: function (id, cb) {
    return request(path.join('/license', id), cb)
  }
}

module.exports = LicensesAPI
