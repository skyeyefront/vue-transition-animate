/**
 * Created by leijunping on 16/07/08.
 */
import Vue from 'vue'

import './index.css'
import template from './index.html'
import myPlugin from '../../../src/index.js'
Vue.use(myPlugin)
// 根据开发环境进行对应的操作
let debug = process.skyeye.ENV === 'dev'
Vue.config.debug = debug
Vue.config.devtools = debug

let app = {
  data () {
    return {
      MOD: debug ? '开发模式' : '发布模式',
      isShowFade: {
        lr: false,
        rl: false,
        ud: false,
        du: false
      },
      isShowBounce: {
        lr: false,
        rl: false,
        ud: false,
        du: false
      },
      isShowSlide: {
        lr: false,
        rl: false,
        ud: false,
        du: false
      },
      isShowFlip: {
        x: false,
        y: false
      },
      isShowZoom: {
        zoom: false
      },
      isShowRoll: {
        roll: false
      },
      isShowLightSpeed: {
        lightSpeed: false
      }
    }
  },
  methods: {
    toggle: function (obj, item) {
      this[obj][item] = !this[obj][item]
    }
  },
  template
}

let run = function () {
  return new Vue({
    el: 'body',
    components: {
      app
    }
  })
}
run()
