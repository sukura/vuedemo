const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    TITLE: '"VUE demo测试"',
    NODE_ENV: '"development"',
    TIMEOUT: 3000000
})
