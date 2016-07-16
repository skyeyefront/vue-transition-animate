/**
 * Created by huangxinxin on 16/6/15.
 */
module.exports = function (grunt) {
  var utils = require('./build/utils.js')

  // 创建dist目录
  if (!grunt.file.exists(utils.distAbsolutePath)) {
    grunt.file.mkdir(utils.distAbsolutePath)
  }

  grunt.initConfig({
    /**
     * 清空编译后的目录, 避免冗余文件
     */
    clean: {
      options: {
        force: true
      },
      dist: {
        expand: true,
        cwd: utils.distAbsolutePath,
        src: [ '**/*' ]
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.registerTask('default', [ 'clean' ])
}
