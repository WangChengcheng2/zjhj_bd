(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/full_reduce/search/search"],{3140:function(t,e,n){"use strict";n.r(e);var r=n("c5af"),o=n("6eb9");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("cb6f");var a=n("5d22"),s=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,"719452af",null);e["default"]=s.exports},"6eb9":function(t,e,n){"use strict";n.r(e);var r=n("bf94"),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},bf94:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("b096")),o=n("7736");function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return g(t)||d(t)||l(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){if(t){if("string"===typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}function d(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function g(t){if(Array.isArray(t))return p(t)}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function h(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,o)}function y(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){h(i,r,o,a,s,"next",t)}function s(t){h(i,r,o,a,s,"throw",t)}a(void 0)}))}}var m="FULL_REDUCE_SEARCH",b=function(){return n.e("components/page-component/app-product-list/app-product-list").then(n.bind(null,"75cc"))},v=function(){return n.e("components/page-component/app-no-goods/app-no-goods").then(n.bind(null,"8112"))},S={name:"search",data:function(){return{keyword:"",strong:[],page:1,goods_list:[],search:!1,is_search:0,loading:!1}},onLoad:function(){this.$commonLoad.onload(),this.$storage.getStorageSync(m)?this.strong=this.$storage.getStorageSync(m):this.$storage.setStorageSync(m,[])},methods:{request:function(){var t=y(r.default.mark((function t(e){var n,o;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$request({url:this.$api.full_reduce.list,method:"get",data:{page:this.page,keyword:this.keyword}});case 2:n=t.sent,this.loading=!0,0===n.code&&(e&&(this.goods_list=[]),(o=this.goods_list).push.apply(o,u(n.data.list)),this.page_count=n.data.pagination.page_count);case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),searchRequest:function(t){this.search=!0,this.goods_list=[],this.page=1,this.keyword=t,this.request(1)},setRequest:function(){var t=this;this.keyword=this.keyword.trim(),this.keyword.match(/^[ ]*$/)||(this.search=!0,this.goods_list=[],this.request().then((function(){for(var e=t.$storage.getStorageSync(m),n=0;n<e.length;n++)if(e[n]===t.keyword)return;e.unshift(t.keyword),e.length>15&&(e=e.slice(0,15)),t.$storage.setStorageSync(m,e)})))},routeGo:function(e){e.video_url&&1==this.getVideo?t.navigateTo({url:"/pages/goods/video?goods_id=".concat(e.id)}):t.navigateTo({url:e.page_url})},empyt_search:function(){this.goods_list=[],this.keyword="",this.search=!1,this.$storage.getStorageSync(m)?this.strong=this.$storage.getStorageSync(m):this.$storage.setStorageSync(m,[])},setClearStorage:function(){this.$storage.removeStorageSync(m),this.strong=[],this.$storage.setStorageSync(m,[])}},components:{"app-product-list":b,appNoGoods:v},computed:s(s(s({},(0,o.mapGetters)("mallConfig",{getTheme:"getTheme"})),(0,o.mapGetters)("mallConfig",{getVideo:"getVideo"})),(0,o.mapState)({platform:function(t){return t.gConfig.systemInfo.platform}})),onReachBottom:function(){this.page<this.page_count&&(this.page++,this.request())}};e.default=S}).call(this,n("d2c1")["default"])},c5af:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(){var t=this,e=t.$createElement;t._self._c},o=[]},cb6f:function(t,e,n){"use strict";n("f604")},f604:function(t,e,n){}},[["5213","common/runtime","common/vendor"]]]);