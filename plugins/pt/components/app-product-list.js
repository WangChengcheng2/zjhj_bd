(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/pt/components/app-product-list"],{"0a88":function(t,e,n){"use strict";n.r(e);var r=n("28dcd"),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},"28dcd":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("7736");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a={name:"app-product-list",computed:i(i({},(0,r.mapState)({appSetting:function(t){return t.mallConfig.mall.setting},appImg:function(t){return t.mallConfig.__wxapp_img.mall},platform:function(t){return t.gConfig.systemInfo.platform}})),(0,r.mapGetters)("mallConfig",{getVideo:"getVideo"})),props:{list:{type:Array,default:function(){return[]}},theme:Object},data:function(){return{disable:"disable"}},methods:{route_go:function(e){e.video_url&&1==this.getVideo?t.navigateTo({url:"/pages/goods/video?goods_id=".concat(e.id,"&sign=pintuan")}):t.navigateTo({url:"/plugins/pt/goods/goods?goods_id=".concat(e.id)})}}};e.default=a}).call(this,n("d2c1")["default"])},bbb8:function(t,e,n){"use strict";n.r(e);var r=n("d7be"),o=n("0a88");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("e768");var u=n("5d22"),a=Object(u["a"])(o["default"],r["a"],r["b"],!1,null,"4bcc3f13",null);e["default"]=a.exports},d7be:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(){var t=this,e=t.$createElement;t._self._c},o=[]},dd07:function(t,e,n){},e768:function(t,e,n){"use strict";n("dd07")}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'plugins/pt/components/app-product-list-create-component',
    {
        'plugins/pt/components/app-product-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('d2c1')['createComponent'](__webpack_require__("bbb8"))
        })
    },
    [['plugins/pt/components/app-product-list-create-component']]
]);                