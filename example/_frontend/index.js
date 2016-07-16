/**
 * Created by leijunping on 16/07/08.
 */
import style from './style.less'
import template from './view.html'
let debug = process.skyeye.ENV === 'dev'
export default {
  data () {
    return {
      MOD: debug ? '开发模式' : '发布模式',
      style,
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

