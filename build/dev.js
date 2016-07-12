var webpack = require('webpack')
var config = require('./webpack.dev.config.js')
var compiler = webpack(config)

console.log(
  '  开发模式: Here we go !!!\n' +
  '  请在"examples"目录下运行python demorun.py (Flask)\n'
)

compiler.watch({// watch options:
  // wait so long for more changes
  aggregateTimeout: 300,
  // use polling instead of native watchers
  // pass a number to set the polling interval
  poll: true
}, function (err, stats) {
  if (err) {
    console.log('[ERR] =>\n', err, '\n')
    throw err
  } else {
    console.log(
      '\n[有更新...]' + new Date().toLocaleString() + ' => \n'
    )
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
});