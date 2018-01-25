var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"dev"',
    STATS: '"dev"',
    ISJAP: 'true', //是否需要埋点
    ISMARK: 'true' //是否需要水印
})
