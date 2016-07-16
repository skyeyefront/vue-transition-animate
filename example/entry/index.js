/**
 * Created by huangxinxin on 16/7/4.
 */
import App from '../App'
import Vue from 'vue'

let run = function () {
  return new Vue({
    el: 'body',
    replace: false,
    components: {
      App
    }
  })
}

run()
