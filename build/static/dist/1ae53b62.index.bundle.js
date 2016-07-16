/*!
 * skyeye-vue-transition-animate
 * Version: 1.1.0
 * Author: leijunping@360
 * Group: 360 SkyEye FrontEnd
 * Build Time: 7/16/2016, 6:10:36 PM
 */
webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _App = __webpack_require__(34);

	var _App2 = _interopRequireDefault(_App);

	var _vue = __webpack_require__(43);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by huangxinxin on 16/7/4.
	 */


	var run = function run() {
	  return new _vue2.default({
	    el: 'body',
	    replace: false,
	    components: {
	      App: _App2.default
	    }
	  });
	};

	run();

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _App = __webpack_require__(35);

	var _App2 = _interopRequireDefault(_App);

	var _App3 = __webpack_require__(37);

	var _App4 = _interopRequireDefault(_App3);

	var _index = __webpack_require__(38);

	var _index2 = _interopRequireDefault(_index);

	var _vue = __webpack_require__(43);

	var _vue2 = _interopRequireDefault(_vue);

	var _index3 = __webpack_require__(45);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(49);

	var _index6 = _interopRequireDefault(_index5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by huangxinxin on 16/7/5.
	 */

	_vue2.default.use(_index6.default);

	exports.default = {
	  template: _App4.default,
	  data: function data() {
	    return {
	      style: _App2.default,
	      active: 'example'
	    };
	  },

	  methods: {
	    showInfo: function showInfo() {
	      this.active = 'infoComponent';
	    },
	    back: function back() {
	      this.active = 'example';
	    }
	  },
	  components: {
	    infoComponent: _index2.default,
	    example: _index4.default
	  },
	  created: function created() {}
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[local]-[hash:base64:7]!./../node_modules/postcss-loader/index.js!./../node_modules/less-loader/index.js!./App.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[local]-[hash:base64:7]!./../node_modules/postcss-loader/index.js!./../node_modules/less-loader/index.js!./App.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	// imports


	// module
	exports.push([module.id, "html, body {\n  margin: 0;\n  padding: 0;\n  font-family: \"Microsoft YaHei\", Helvetica, Arial, sans-serif;\n}\n#SkyEyeApp-Jh8ysO3 {\n  margin: 10px auto;\n  font-size: 14px;\n}\n.info-btn-1bgTj0l {\n  float: right;\n  margin-right: 24px;\n}\n", ""]);

	// exports
	exports.locals = {
		"SkyEyeApp": "SkyEyeApp-Jh8ysO3",
		"info-btn": "info-btn-1bgTj0l"
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "<div id=\"{{style.SkyEyeApp}}\">\n    <div class=\"info-component\">\n        <button class=\"btn btn-default {{style['info-btn']}}\" @click=\"showInfo\" v-show=\"active == 'example'\">组件信息</button>\n        <button class=\"btn btn-default {{style['info-btn']}}\" @click=\"back\" v-show=\"active == 'infoComponent'\">返回</button>\n    </div>\n    <component :is=\"active\"></component>\n</div>\n";

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _style = __webpack_require__(39);

	var _style2 = _interopRequireDefault(_style);

	var _view = __webpack_require__(42);

	var _view2 = _interopRequireDefault(_view);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PACKAGE_JSON = ({"name":"skyeye-vue-transition-animate","version":"1.1.0","description":"自定义 transition 动画","main":"dist/skyeye-vue-transition-animate.min.js","scripts":{"test":"echo \"Error: no test specified\" && exit 1","dev":"grunt && node build/dev.js","pro":"node build/pro.js","start":"node build/server.js"},"repository":{"type":"git","url":"https://github.com/skyeyefront/vue-transition-animate.git"},"keywords":["vue","transition"],"author":"leijunping@360","license":"ISC","devDependencies":{"autoprefixer":"~6.3.6","babel-core":"^6.9.0","babel-eslint":"^6.0.4","babel-loader":"^6.2.4","babel-preset-es2015":"^6.9.0","css-loader":"^0.23.1","eslint":"^2.10.2","eslint-config-standard":"^5.3.1","eslint-friendly-formatter":"^2.0.4","eslint-loader":"^1.3.0","eslint-plugin-html":"^1.4.0","eslint-plugin-promise":"^1.1.0","eslint-plugin-standard":"^1.3.2","express":"^4.14.0","extract-text-webpack-plugin":"^1.0.1","file-loader":"^0.8.5","grunt":"~1.0.1","grunt-contrib-clean":"~1.0.0","grunt-contrib-copy":"~1.0.0","html-loader":"^0.4.3","html-webpack-plugin":"^2.21.0","imports-loader":"~0.6.5","less":"^2.7.1","less-loader":"^2.2.3","mockjs":"^1.0.1-beta2","ora":"^0.2.1","path":"^0.12.7","postcss-loader":"~0.9.1","precss":"~1.4.0","progress":"~1.1.8","socket.io":"^1.4.8","style-loader":"^0.13.1","stylelint-config-standard":"^10.0.0","stylelint-webpack-plugin":"^0.2.0","time-grunt":"~1.3.0","url-loader":"^0.5.7","webpack":"^1.13.0","webpack-dev-server":"^1.14.1","webpack-merge":"^0.12.0","worker-loader":"~0.7.0"},"dependencies":{"animate.css":"^3.5.1","bootstrap":"^3.3.6","d3":"^3.5.17","font-awesome":"^4.6.3","highcharts":"^4.2.5","jquery":"~2.1.4","jquery-ui":"^1.10.5","lodash":"^4.13.1","moment":"^2.13.0","postal":"^2.0.4","socket.io-client":"^1.4.6","vue":"^1.0.24","vuex":"^0.6.3"},"_addons":{"filename":"skyeye-vue-transition-animate.min.js","library":"skyeye-vue-transition-animate","group":"360 SkyEye FrontEnd"}});

	exports.default = {
	  template: _view2.default,
	  data: function data() {
	    return {
	      style: _style2.default,
	      name: PACKAGE_JSON.name,
	      author: PACKAGE_JSON.author,
	      version: PACKAGE_JSON.version,
	      description: PACKAGE_JSON.description,
	      dependencies: PACKAGE_JSON.dependencies,
	      addons: PACKAGE_JSON._addons
	    };
	  }
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(40);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[local]-[hash:base64:7]!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[local]-[hash:base64:7]!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	// imports


	// module
	exports.push([module.id, ".logo-3qMzIfi {\n  display: inline-block;\n  width: 116px;\n  height: 116px;\n  background: url(" + __webpack_require__(41) + ") no-repeat left;\n}\n.brand-31SDi6L {\n  color: #173075;\n}\n.fcenter-6Wc-ltQ {\n  text-align: center;\n}\n.info-base-2xNqsnR .list-group-item {\n  text-align: right;\n}\n.info-base-2xNqsnR .list-group-item .label {\n  float: left;\n}\n", ""]);

	// exports
	exports.locals = {
		"logo": "logo-3qMzIfi",
		"brand": "brand-31SDi6L",
		"fcenter": "fcenter-6Wc-ltQ",
		"info-base": "info-base-2xNqsnR"
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/favicon.69b550d.png";

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\n    <section class=\"{{ style.fcenter }}\">\n        <span class=\"{{ style.logo }}\"></span>\n        <h1 class=\"{{ style.brand }}\">SkyEye前端插件开发“脚手架”</h1>\n        <h3>速速去开始你的插件编写...</h3>\n    </section>\n    <div class=\"page-header\">\n        <h1>基础信息</h1>\n    </div>\n    <ul class=\"list-group {{ style['info-base'] }}\">\n        <li class=\"list-group-item\">\n            <span class=\"label label-info\">项目名称</span> {{ name }}\n        </li>\n        <li class=\"list-group-item\">\n            <span class=\"label label-info\">项目描述</span> {{ description }}\n        </li>\n        <li class=\"list-group-item\">\n            <span class=\"label label-info\">作者</span> {{ author }}\n        </li>\n        <li class=\"list-group-item\">\n            <span class=\"label label-info\">组织</span> {{ addons.group }}\n        </li>\n        <li class=\"list-group-item\">\n            <span class=\"label label-info\">插件（库）名</span> {{ addons.library }}\n        </li>\n        <li class=\"list-group-item\">\n            <span class=\"label label-info\">文件名</span> {{ addons.filename }}\n        </li>\n        <li class=\"list-group-item\">\n            <span class=\"label label-info\">版本号</span> {{ version }}\n        </li>\n    </ul>\n    <div class=\"page-header\">\n        <h1>依赖环境信息</h1>\n    </div>\n    <ul class=\"list-group\">\n        <li class=\"list-group-item\" v-for=\"(k, v) in dependencies\">\n            <span class=\"badge\">{{ v }}</span> {{ k }}\n        </li>\n    </ul>\n</div>\n";

/***/ },
/* 43 */,
/* 44 */,
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _style = __webpack_require__(46);

	var _style2 = _interopRequireDefault(_style);

	var _view = __webpack_require__(48);

	var _view2 = _interopRequireDefault(_view);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by leijunping on 16/07/08.
	 */

	var debug = ("dev") === 'dev';
	exports.default = {
	  data: function data() {
	    return {
	      MOD: debug ? '开发模式' : '发布模式',
	      style: _style2.default,
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
	    };
	  },

	  methods: {
	    toggle: function toggle(obj, item) {
	      this[obj][item] = !this[obj][item];
	    }
	  },
	  template: _view2.default
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(47);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[local]-[hash:base64:7]!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[local]-[hash:base64:7]!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	// imports


	// module
	exports.push([module.id, "html, body {\n  margin: 0;\n  padding: 0;\n  font-family: \"Microsoft YaHei\";\n  font-size: 12px;\n}\n.container-2j1x_LD {\n  max-width: 1024px;\n  margin: 0 auto;\n  padding: 8px 24px;\n}\nh1 {\n  color: darkcyan;\n}\nh2 {\n  color: #40a070;\n}\n.animate-section-3jx-QKn {\n  padding: 8px;\n  background-color: #2e2e2e;\n  color: #fff;\n  margin-bottom: 16px;\n}\n.animate-section-3jx-QKn .animate-block-1Q5uQ_M {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.animate-section-3jx-QKn .animate-block-1Q5uQ_M .div-wHHIxf- {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  border-left: 1px solid #fff;\n  padding: 10px;\n}\n.animate-element-1cQLQZo {\n  width: 150px;\n  height: 150px;\n  border: 1px solid #fff;\n  font-size: 16px;\n  font-weight: 700;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n", ""]);

	// exports
	exports.locals = {
		"container": "container-2j1x_LD",
		"animate-section": "animate-section-3jx-QKn",
		"animate-block": "animate-block-1Q5uQ_M",
		"div": "div-wHHIxf-",
		"animate-element": "animate-element-1cQLQZo"
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "<div id=\"demo\" class=\"{{style.container}}\">\n    <h1>自定义过渡</h1>\n    <h2>********需要借助animate.css动画库************</h2>\n    <p>在使用v-if, v-show,v-for或者插入删除元素的时候,transition动画会自动生效</p>\n    <section class=\"{{style['animate-section']}}\">\n        <b>fade动画</b>\n        <div class=\"{{style['animate-block']}}\">\n            <div class=\"fade-lr {{style.div}}\">\n                <p>fadeLR</p>\n                <button type=\"button\" class=\"btn btn-default\" @click=\"toggle('isShowFade','lr')\">toggle</button>\n                <div v-if=\"isShowFade.lr\" class=\"animated {{style['animate-element']}}\" transition=\"fadeLR\">animate.css</div>\n            </div>\n            <div class=\"fade-rl {{style.div}}\">\n                <p>fadeRL</p>\n                <button type=\"button\" class=\"btn btn-default\" @click=\"toggle('isShowFade','rl')\">toggle</button>\n                <div v-if=\"isShowFade.rl\" class=\"animated {{style['animate-element']}}\" transition=\"fadeRL\">animate.css</div>\n            </div>\n            <div class=\"fade-ud {{style.div}}\">\n                <p>fadeUD</p>\n                <button type=\"button\" class=\"btn btn-default\" @click=\"toggle('isShowFade','ud')\">toggle</button>\n                <div v-if=\"isShowFade.ud\" class=\"animated {{style['animate-element']}}\" transition=\"fadeUD\">animate.css</div>\n            </div>\n            <div class=\"fade-du {{style.div}}\">\n                <p>fadeDU</p>\n                <button type=\"button\" class=\"btn btn-default\" @click=\"toggle('isShowFade','du')\">toggle</button>\n                <div v-if=\"isShowFade.du\" class=\"animated {{style['animate-element']}}\" transition=\"fadeDU\">animate.css</div>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"{{style['animate-section']}}\">\n        <b>bounce动画</b>\n        <div class=\"{{style['animate-block']}}\">\n            <div class=\"bounce-lr {{style.div}}\">\n                <p>bounceLR</p>\n                <button type=\"button\" class=\"btn btn-default\" @click=\"toggle('isShowBounce','lr')\">toggle</button>\n                <div v-if=\"isShowBounce.lr\" class=\"animated {{style['animate-element']}}\" transition=\"bounceLR\">animate.css</div>\n            </div>\n            <div class=\"bounce-rl {{style.div}}\">\n                <p>bounceRL</p>\n                <button type=\"button\" class=\"btn btn-default\" @click=\"toggle('isShowBounce','rl')\">toggle</button>\n                <div v-if=\"isShowBounce.rl\" class=\"animated {{style['animate-element']}}\" transition=\"bounceRL\">animate.css</div>\n            </div>\n            <div class=\"bounce-ud {{style.div}}\">\n                <p>bounceUD</p>\n                <button type=\"button\" class=\"btn btn-default\" @click=\"toggle('isShowBounce','ud')\">toggle</button>\n                <div v-if=\"isShowBounce.ud\" class=\"animated {{style['animate-element']}}\" transition=\"bounceUD\">animate.css</div>\n            </div>\n            <div class=\"bounce-du {{style.div}}\">\n                <p>bounceDU</p>\n                <button type=\"button\" class=\"btn btn-default\" @click=\"toggle('isShowBounce','du')\">toggle</button>\n                <div v-if=\"isShowBounce.du\" class=\"animated {{style['animate-element']}}\" transition=\"bounceDU\">animate.css</div>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"{{style['animate-section']}}\">\n        <b>slide动画</b>\n        <div class=\"{{style['animate-block']}}\">\n            <div class=\"slide-lr {{style.div}}\">\n                <p>slideLR</p>\n                <button type=\"button\" class=\"btn btn-default\" @click=\"toggle('isShowSlide','lr')\">toggle</button>\n                <div v-if=\"isShowSlide.lr\" class=\"animated {{style['animate-element']}}\" transition=\"slideLR\">animate.css</div>\n            </div>\n            <div class=\"slide-rl {{style.div}}\">\n                <p>slideRL</p>\n                <button type=\"button\" class=\"btn btn-default\" @click=\"toggle('isShowSlide','rl')\">toggle</button>\n                <div v-if=\"isShowSlide.rl\" class=\"animated {{style['animate-element']}}\" transition=\"slideRL\">animate.css</div>\n            </div>\n            <div class=\"slide-ud {{style.div}}\">\n                <p>slideUD</p>\n                <button type=\"button\" class=\"btn btn-default\" @click=\"toggle('isShowSlide','ud')\">toggle</button>\n                <div v-if=\"isShowSlide.ud\" class=\"animated {{style['animate-element']}}\" transition=\"slideUD\">animate.css</div>\n            </div>\n            <div class=\"slide-du {{style.div}}\">\n                <p>slideDU</p>\n                <button type=\"button\" class=\"btn btn-default\" @click=\"toggle('isShowSlide','du')\">toggle</button>\n                <div v-if=\"isShowSlide.du\" class=\"animated {{style['animate-element']}}\" transition=\"slideDU\">animate.css</div>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"{{style['animate-section']}}\">\n        <b>flip动画</b>\n        <div class=\"{{style['animate-block']}}\">\n            <div class=\"flip-x {{style.div}}\">\n                <p>flipX</p>\n                <button type=\"button\" class=\"btn btn-default\" @click=\"toggle('isShowFlip','x')\">toggle</button>\n                <div v-if=\"isShowFlip.x\" class=\"animated {{style['animate-element']}}\" transition=\"flipX\">animate.css</div>\n            </div>\n            <div class=\"flip-y {{style.div}}\">\n                <p>flipY</p>\n                <button type=\"button\" class=\"btn btn-default\" @click=\"toggle('isShowFlip','y')\">toggle</button>\n                <div v-if=\"isShowFlip.y\" class=\"animated {{style['animate-element']}}\" transition=\"flipY\">animate.css</div>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"{{style['animate-section']}}\">\n        <b>zoom动画</b>\n        <div class=\"{{style['animate-block']}}\">\n            <div class=\"zoom {{style.div}}\">\n                <p>zoom</p>\n                <button type=\"button\" class=\"btn btn-default\" @click=\"toggle('isShowZoom','zoom')\">toggle</button>\n                <div v-if=\"isShowZoom.zoom\" class=\"animated {{style['animate-element']}}\" transition=\"zoom\">animate.css</div>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"{{style['animate-section']}}\">\n        <b>lightSpeed动画</b>\n        <div class=\"{{style['animate-block']}}\">\n            <div class=\"light-speed {{style.div}}\">\n                <p>lightSpeed</p>\n                <button type=\"button\" class=\"btn btn-default\" @click=\"toggle('isShowLightSpeed','lightSpeed')\">toggle</button>\n                <div v-if=\"isShowLightSpeed.lightSpeed\" class=\"animated {{style['animate-element']}}\" transition=\"lightSpeed\">animate.css</div>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"{{style['animate-section']}}\">\n        <b>roll动画</b>\n        <div class=\"{{style['animate-block']}}\">\n            <div class=\"roll {{style.div}}\">\n                <p>roll</p>\n                <button type=\"button\" class=\"btn btn-default\" @click=\"toggle('isShowRoll','roll')\">toggle</button>\n                <div v-if=\"isShowRoll.roll\" class=\"animated {{style['animate-element']}}\" transition=\"roll\">animate.css</div>\n            </div>\n        </div>\n    </section>\n</div>";

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  install: function install(Vue) {
	    var _factory = function _factory(enterClass, leaveClass) {
	      var getVueObj = function getVueObj(el) {
	        var vueObj = el.__vue__ || el.__v_trans && el.__v_trans.vm || null;
	        return vueObj;
	      };
	      return {
	        beforeEnter: function beforeEnter(el) {
	          var vueObj = getVueObj(el);
	          if (vueObj) {
	            vueObj.transitionBeforeEnter instanceof Function && vueObj.transitionBeforeEnter();
	          }
	        },
	        enter: function enter(el) {
	          var vueObj = getVueObj(el);
	          if (vueObj) {
	            vueObj.transitionEnter instanceof Function && vueObj.transitionEnter();
	          }
	        },
	        afterEnter: function afterEnter(el) {
	          var vueObj = getVueObj(el);
	          if (vueObj) {
	            vueObj.transitionAfterEnter instanceof Function && vueObj.transitionAfterEnter();
	          }
	        },
	        enterCancelled: function enterCancelled(el) {
	          var vueObj = getVueObj(el);
	          if (vueObj) {
	            vueObj.transitionEnterCancelled instanceof Function && vueObj.transitionEnterCancelled();
	          }
	        },
	        beforeLeave: function beforeLeave(el) {
	          var vueObj = getVueObj(el);
	          if (vueObj) {
	            vueObj.transitionBeforeLeave instanceof Function && vueObj.transitionBeforeLeave();
	          }
	        },
	        leave: function leave(el) {
	          var vueObj = getVueObj(el);
	          if (vueObj) {
	            vueObj.transitionLeave instanceof Function && vueObj.transitionLeave();
	          }
	        },
	        afterLeave: function afterLeave(el) {
	          var vueObj = getVueObj(el);
	          if (vueObj) {
	            vueObj.transitionAfterLeave instanceof Function && vueObj.transitionAfterLeave();
	          }
	        },
	        leaveCancelled: function leaveCancelled(el) {
	          var vueObj = getVueObj(el);
	          if (vueObj) {
	            vueObj.transitionLeaveCancelled instanceof Function && vueObj.transitionLeaveCancelled();
	          }
	        },
	        enterClass: enterClass, leaveClass: leaveClass
	      };
	    };

	    Vue.transition('bounceUD', _factory('bounceInUp', 'bounceOutDown'));
	    Vue.transition('bounceDU', _factory('bounceInDown', 'bounceOutUp'));
	    Vue.transition('bounceLR', _factory('bounceInLeft', 'bounceOutRight'));
	    Vue.transition('bounceRL', _factory('bounceInRight', 'bounceOutLeft'));

	    Vue.transition('fadeUD', _factory('fadeInUp', 'fadeOutDown'));
	    Vue.transition('fadeDU', _factory('fadeInDown', 'fadeOutUp'));
	    Vue.transition('fadeLR', _factory('fadeInLeft', 'fadeOutRight'));
	    Vue.transition('fadeRL', _factory('fadeInRight', 'fadeOutLeft'));

	    Vue.transition('slideUD', _factory('slideInUp', 'slideOutDown'));
	    Vue.transition('slideDU', _factory('slideInDown', 'slideOutUp'));
	    Vue.transition('slideLR', _factory('slideInLeft', 'slideOutRight'));
	    Vue.transition('slideRL', _factory('slideInRight', 'slideOutLeft'));

	    Vue.transition('zoom', _factory('zoomIn', 'zoomOut'));

	    Vue.transition('lightSpeed', _factory('lightSpeedIn', 'lightSpeedOut'));

	    Vue.transition('roll', _factory('rollIn', 'rollOut'));

	    Vue.transition('flipX', _factory('flipInX', 'flipOutX'));
	    Vue.transition('flipY', _factory('flipInY', 'flipOutY'));
	  }
	};

/***/ }
]);