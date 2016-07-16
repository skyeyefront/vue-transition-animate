var path = require('path')
var PACKAGE_JSON = require('../package.json')

// templates
var templatesRelativePath = './templates'
var templatesAbsolutePath = path.resolve(__dirname, templatesRelativePath)

// dist
var distPublicPath = '/static/dist/'
var distRelativePath = './static/dist'
var distAbsolutePath = path.resolve(__dirname, distRelativePath)

// assets
var assetsRelativePath = '../assets'
var assetsAbsolutePath = path.resolve(__dirname, assetsRelativePath)

// src
var srcRelativePath = '../src'
var srcAbsolutePath = path.resolve(__dirname, srcRelativePath)

// example
var exampleRelativePath = '../example'
var exampleAbsolutePath = path.resolve(__dirname, exampleRelativePath)

// entry
var entryRelativePath = exampleRelativePath + '/entry'
var entryAbsolutePath = path.resolve(__dirname, entryRelativePath)

var pluginDistRelativePath = '../dist'
var pluginDistAbsolutePath = path.resolve(__dirname, pluginDistRelativePath)

/**
 * 公用变量
 */
exports.PACKAGE_JSON = PACKAGE_JSON

exports.templatesRelativePath = templatesRelativePath
exports.templatesAbsolutePath = templatesAbsolutePath

exports.distRelativePath = distRelativePath
exports.distAbsolutePath = distAbsolutePath
exports.distPublicPath = distPublicPath

exports.assetsRelativePath = assetsRelativePath
exports.assetsAbsolutePath = assetsAbsolutePath

exports.srcRelativePath = srcRelativePath
exports.srcAbsolutePath = srcAbsolutePath

exports.exampleRelativePath = exampleRelativePath
exports.exampleAbsolutePath = exampleAbsolutePath

exports.entryRelativePath = entryRelativePath
exports.entryAbsolutePath = entryAbsolutePath

exports.pluginDistRelativePath = pluginDistRelativePath
exports.pluginDistAbsolutePath = pluginDistAbsolutePath

/**
 * 驼峰
 * @param str
 * @param splitStr
 * @returns {*}
 */
exports.camel = function (str, splitStr) {
  splitStr = splitStr || '.'
  str = '' + str
  return str.split(splitStr).reduce(function (c, a) {
    return c + a[ 0 ].toUpperCase() + a.slice(1, a.length)
  })
}

/**
 * banner 信息
 * @returns {string}
 */
exports.banner = function () {
  return PACKAGE_JSON.name + '\n' +
    'Version: ' + PACKAGE_JSON.version + '\n' +
    'Author: ' + PACKAGE_JSON.author + '\n' +
    'Group: ' + PACKAGE_JSON._addons.group + '\n' +
    'Build Time: ' + new Date().toLocaleString()
}
