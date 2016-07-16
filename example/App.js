/**
 * Created by huangxinxin on 16/7/5.
 */
import style from './App.less'
import template from './App.html'
import infoComponent from './InfoComponent/index'
import Vue from 'vue'
import example from './_frontend/index'
import myPlugin from '../src/index'
Vue.use(myPlugin)

export default {
  template,
  data () {
    return {
      style,
      active: 'example'
    }
  },
  methods: {
    showInfo () {
      this.active = 'infoComponent'
    },
    back () {
      this.active = 'example'
    }
  },
  components: {
    infoComponent,
    example
  },
  created () {}
}
