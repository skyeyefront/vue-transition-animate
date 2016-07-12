/**
 * 发布模式
 */
var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.config.js')
var utils = require('./utils.js')
var entry = {}
var name = utils.PACKAGE_JSON.name.replace(/ /g, '')
var filename = utils.PACKAGE_JSON._addons.filename
var library = utils.PACKAGE_JSON._addons.library
entry[ name ] = path.resolve(__dirname, '../src/index.js')

module.exports = merge(baseWebpackConfig, {
  entry: entry,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: filename,
    library: library,
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.BannerPlugin(utils.banner(), {
      entryOnly: true
    }),
    new webpack.DefinePlugin({
      'process.skyeye': {
        'ENV': JSON.stringify('pro'),
        'PACKAGE_JSON': JSON.stringify(utils.PACKAGE_JSON)
      }
    })
  ]
})