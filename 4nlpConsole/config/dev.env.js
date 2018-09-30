'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://192.168.95.57:8090/mainsite"'
  // BASE_API: '"http://192.168.16.128:8094/console"'
  // BASE_API: '"http://192.168.16.105:8094/console"'//sun
  // BASE_API: '"http://192.168.16.176:8094/console"'//dian
  // BASE_API: '"http://192.168.16.142:8090/mainsite"  '
  BASE_API:'"HTTP://192.168.16.151:8094/console"'
  // BASE_API: '"http://192.168.181.145:8094/console"'
  
  
})
