'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://192.168.95.57:8090/mainsite"'
  // BASE_API: '"http://192.168.16.117:8090/mainsite"'//dian
  // BASE_API: '"http://192.168.16.142:8090/mainsite"  '
  // BASE_API:'"HTTP://192.168.16.84:8090/mainsite"'
})
