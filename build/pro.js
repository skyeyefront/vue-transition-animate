var ora = require('ora')
var webpack = require('webpack')
var config = require('./webpack.pro.config.js')
var compiler = webpack(config)

console.log(
  '  发布模式: Here we go !!!\n'
)

var spinner = ora('玩儿命编译打包中 ...')
spinner.start()

compiler.run(function (err, stats) {
  spinner.stop()
  if (err) {
    console.log('[ERR] =>\n', err, '\n')
    throw err
  } else {
    process.stdout.write(
      stats.toString({
        hash: true,
        version: true,
        timings: true,
        assets: true,
        colors: true,
        modules: true,
        children: true,
        chunks: true,
        chunkOrigins: true,
        chunkModules: true,
        errorDetails: true
      }) + '\n'
    )
  }
});