var utils = require('./utils')
var webpack = require('webpack')
var ProgressBar = require('progress')
var HtmlWebpackPlugin = require('html-webpack-plugin')
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

module.exports = {
  entry: {
    'vendor': [
      'd3', 'jquery', 'jquery-ui', 'highcharts',
      'lodash', 'moment', 'postal',
      'socket.io-client', 'vue', 'vuex'
    ],
    'commons': utils.entryAbsolutePath + '/commons.js',
    'index': utils.entryAbsolutePath + '/index.js'
  },
  output: {
    path: utils.distAbsolutePath,
    publicPath: utils.distPublicPath,
    filename: '[chunkhash:8].[name].bundle.js',
    chunkFilename: '[name].[chunkhash:8].js'
  },
  plugins: [
    extractCSS,
    new webpack.DefinePlugin({
      'process.skyeye': {
        'ENV': JSON.stringify('dev'),
        'PACKAGE_JSON': JSON.stringify(utils.PACKAGE_JSON)
      }
    }),
    new webpack.BannerPlugin(utils.banner(), {
      entryOnly: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[chunkhash:8].vendor.bundle.js'
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: utils.exampleAbsolutePath,
      files: '**/*.less',
      syntax: 'less'
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: utils.srcAbsolutePath,
      files: '**/*.less',
      syntax: 'less'
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      title: utils.PACKAGE_JSON.name,
      chunks: [ 'vendor', 'commons', 'index' ],
      chunksSortMode: 'dependency',
      template: utils.entryAbsolutePath + '/index.ejs',
      filename: utils.templatesAbsolutePath + '/index.html',
      favicon: utils.assetsAbsolutePath + '/images/favicon.png'
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
