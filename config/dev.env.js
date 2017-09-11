const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    TITLE: '"VUE demo测试"',
    NODE_ENV: '"development"',
    BASE_API: '"http://www.easy-mock.com/mock/59b236cce0dc663341a22f8b/vuetest"'
})
