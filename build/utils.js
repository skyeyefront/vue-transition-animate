/**
 * 驼峰
 * @param str
 * @param splitStr
 * @returns {*}
 */
var PACKAGE_JSON = require('../package.json')

exports.PACKAGE_JSON = PACKAGE_JSON

exports.camel = function (str, splitStr) {
  splitStr = splitStr || '.'
  str = '' + str
  return str.split(splitStr).reduce(function (c, a) {
    return c + a[ 0 ].toUpperCase() + a.slice(1, a.length)
  })
}

exports.banner = function () {
  return PACKAGE_JSON.name + '\n' +
    'Version: ' + PACKAGE_JSON.version + '\n' +
    'Author: ' + PACKAGE_JSON.author + '\n' +
    'Group: ' + PACKAGE_JSON._addons.group + '\n' +
    'Build Time: ' + new Date().toLocaleString()
}
