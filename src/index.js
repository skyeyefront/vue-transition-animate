import 'animate.css/animate.css'
export default {
  install: function (Vue) {
    let _factory = function (enterClass, leaveClass) {
      let getVueObj = function (el) {
        let vueObj = el.__vue__ || el.__v_trans && el.__v_trans.vm || null
        return vueObj
      }
      return {
        beforeEnter: function (el) {
          let vueObj = getVueObj(el)
          if (vueObj) {
            vueObj.transitionBeforeEnter instanceof Function && vueObj.transitionBeforeEnter()
          }
        },
        enter: function (el) {
          let vueObj = getVueObj(el)
          if (vueObj) {
            vueObj.transitionEnter instanceof Function && vueObj.transitionEnter()
          }
        },
        afterEnter: function (el) {
          let vueObj = getVueObj(el)
          if (vueObj) {
            vueObj.transitionAfterEnter instanceof Function && vueObj.transitionAfterEnter()
          }
        },
        enterCancelled: function (el) {
          let vueObj = getVueObj(el)
          if (vueObj) {
            vueObj.transitionEnterCancelled instanceof Function && vueObj.transitionEnterCancelled()
          }
        },
        beforeLeave: function (el) {
          let vueObj = getVueObj(el)
          if (vueObj) {
            vueObj.transitionBeforeLeave instanceof Function && vueObj.transitionBeforeLeave()
          }
        },
        leave: function (el) {
          let vueObj = getVueObj(el)
          if (vueObj) {
            vueObj.transitionLeave instanceof Function && vueObj.transitionLeave()
          }
        },
        afterLeave: function (el) {
          let vueObj = getVueObj(el)
          if (vueObj) {
            vueObj.transitionAfterLeave instanceof Function && vueObj.transitionAfterLeave()
          }
        },
        leaveCancelled: function (el) {
          let vueObj = getVueObj(el)
          if (vueObj) {
            vueObj.transitionLeaveCancelled instanceof Function && vueObj.transitionLeaveCancelled()
          }
        },
        enterClass, leaveClass
      }
    }

    Vue.transition('bounceUD', _factory('bounceInUp', 'bounceOutDown'))
    Vue.transition('bounceDU', _factory('bounceInDown', 'bounceOutUp'))
    Vue.transition('bounceLR', _factory('bounceInLeft', 'bounceOutRight'))
    Vue.transition('bounceRL', _factory('bounceInRight', 'bounceOutLeft'))

    Vue.transition('fadeUD', _factory('fadeInUp', 'fadeOutDown'))
    Vue.transition('fadeDU', _factory('fadeInDown', 'fadeOutUp'))
    Vue.transition('fadeLR', _factory('fadeInLeft', 'fadeOutRight'))
    Vue.transition('fadeRL', _factory('fadeInRight', 'fadeOutLeft'))

    Vue.transition('slideUD', _factory('slideInUp', 'slideOutDown'))
    Vue.transition('slideDU', _factory('slideInDown', 'slideOutUp'))
    Vue.transition('slideLR', _factory('slideInLeft', 'slideOutRight'))
    Vue.transition('slideRL', _factory('slideInRight', 'slideOutLeft'))

    Vue.transition('zoom', _factory('zoomIn', 'zoomOut'))

    Vue.transition('lightSpeed', _factory('lightSpeedIn', 'lightSpeedOut'))

    Vue.transition('roll', _factory('rollIn', 'rollOut'))

    Vue.transition('flipX', _factory('flipInX', 'flipOutX'))
    Vue.transition('flipY', _factory('flipInY', 'flipOutY'))
  }
}
