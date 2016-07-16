var utils = require('./utils')
var webpack = require('webpack')
var ProgressBar = require('progress')
var StyleLintPlugin = require('stylelint-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var extractCSS = new ExtractTextPlugin('[hash:8].[name].css')
var precss = require('precss')
var autoprefixer = require('autoprefixer')
// 提示进度条
var bar = new ProgressBar('编译中 [:bar] :percent :elapsed秒', {
  complete: '=',
  incomplete: ' ',
  width: 20,
  total: 100
})
var entry = {}
var name = utils.PACKAGE_JSON.name.replace(/ /g, '')
var filename = utils.PACKAGE_JSON._addons.filename
var library = utils.PACKAGE_JSON._addons.library
entry[ name ] = utils.srcAbsolutePath + '/index.js'

module.exports = {
  entry: entry,
  output: {
    path: utils.pluginDistAbsolutePath,
    filename: filename,
    library: library,
    libraryTarget: 'umd'
  },
  plugins: [
    extractCSS,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.skyeye': {
        'ENV': JSON.stringify('dev'),
        'PACKAGE_JSON': JSON.stringify(utils.PACKAGE_JSON)
      }
    }),
    new webpack.BannerPlugin(utils.banner(), {
      entryOnly: true
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: utils.srcAbsolutePath,
      files: '**/*.less',
      syntax: 'less'
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
      'd3': 'd3',
      'window.d3': 'd3',
      '_': 'lodash',
      'window._': 'lodash',
      'io': 'socket.io-client',
      'window.io': 'socket.io-client'
    }),
    new webpack.ProgressPlugin(function handler (percentage) {
      bar.tick(~~(percentage * 100) - bar.curr)
    })
  ],
  module: {
    noParse: [],
    preLoaders: [ {
      test: /\.js/,
      loader: 'eslint',
      exclude: /(node_modules|plugins)/
    } ],
    loaders: [ {
      test: /\.js/,
      loader: 'babel',
      exclude: /(node_modules|plugins)/
    }, {
      test: /\/worker\//,
      loader: 'worker',
      exclude: /(node_modules|plugins)/
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.css$/,
      loader: extractCSS.extract('style-loader', 'css-loader')
    }, {
      test: /\.less$/,
      loader: 'style-loader' +
      '!css-loader?modules&importLoaders=1&localIdentName=[local]-[hash:base64:7]' + // [name] 文件名 [local]原始样式名
      '!postcss-loader' +
      '!less-loader'
    }, {
      test: /\.(png|jpg|gif)\??.*$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: 'images/[name].[hash:7].[ext]'
      }
    }, {
      test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: 'fonts/[name].[ext]'
      }
    } ]
  },
  postcss: function () {
    return {
      plugins: [ precss, autoprefixer ]
    }
  }
}
