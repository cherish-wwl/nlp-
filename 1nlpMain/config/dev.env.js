'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://192.168.16.151:8090/mainsite"',
  // CONSOLE_API: '"http://192.168.16.151:8090/console"',

  BASE_API: '"http://www.china-nlp.com/mainsite"',
  CONSOLE_API:'"http://www.china-nlp.com/console"'
})
