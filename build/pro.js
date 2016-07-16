var webpack = require('webpack')
var config = require('./webpack.pro.config.js')
var compiler = webpack(config)

console.log(
  '\n发布模式:\n'
)

compiler.run(function (err, stats) {
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
        modules: false,
        children: false,
        chunks: false,
        chunkOrigins: false,
        chunkModules: false,
        errorDetails: true
      }) + '\n'
    )
  }
})
