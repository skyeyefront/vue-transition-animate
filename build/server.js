/**
 * Created by huangxinxin on 16/7/12.
 */
var packageJson = require('../package.json')
var path = require('path')
var express = require('express')
var app = express()
var server = require('http').Server(app)
var port = 3333

app.use('/static/dist', express.static(path.resolve(__dirname, './static/dist')))

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, './templates/index.html'))
})

server.listen(port, function () {
  console.log('Your plugin `' + packageJson.name + '` is running at port ' + port)
})
