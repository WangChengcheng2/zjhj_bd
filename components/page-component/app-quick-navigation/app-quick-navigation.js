(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-quick-navigation/app-quick-navigation"],{"3d17":function(e,t,n){"use strict";n("f2fb")},"4d92":function(e,t,n){"use strict";n.r(t);var a=n("ef62"),i=n("5f48");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("3d17");var p=n("5d22"),l=Object(p["a"])(i["default"],a["a"],a["b"],!1,null,"db6417b6",null);t["default"]=l.exports},"5f48":function(e,t,n){"use strict";n.r(t);var a=n("ef04"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},ef04:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("7736");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={name:"app-quick-navigation",props:{value:{type:Object,default:function(){return{closedPicUrl:"http://www.bangdian.net/web/uploads/mall51/20190724/3d3abd2944d5d32b9a9780fd3525bb50.jpg",customerService:{opened:!1,picUrl:"http://www.bangdian.net/web/uploads/mall51/20190724/3d3abd2944d5d32b9a9780fd3525bb50.jpg"},home:{opened:!1,picUrl:"http://www.bangdian.net/web/uploads/mall51/20190724/3d3abd2944d5d32b9a9780fd3525bb50.jpg"},mApp:{appId:"",opened:!1,page:"",picUrl:""},mapNav:{address:"南湖",latitude:"30.762457",location:"",longitude:"120.763779",opened:!1,picUrl:"http://www.bangdian.net/web/uploads/mall51/20190724/3d3abd2944d5d32b9a9780fd3525bb50.jpg"},navStyle:1,navSwitch:1,openedPicUrl:"http://www.bangdian.net/web/uploads/mall51/20190724/3d3abd2944d5d32b9a9780fd3525bb50.jpg",tel:{number:"1885813481",opened:!1,picUrl:"http://www.bangdian.net/web/uploads/mall51/20190724/3d3abd2944d5d32b9a9780fd3525bb50.jpg"},useMallConfig:!1,web:{opened:!0,picUrl:"http://www.bangdian.net/web/uploads/mall51/20190724/3d3abd2944d5d32b9a9780fd3525bb50.jpg",url:"www.baidu.com"},customize:{}}}},useMallConfig:{type:Boolean,default:function(){return!0}}},data:function(){return{collapse:!1,oldData:this.value}},computed:o(o({newData:function(){var e={};if(this.useMallConfig){var t=this.mall.setting;e={closedPicUrl:t.quick_navigation_closed_pic,openedPicUrl:t.quick_navigation_opened_pic,customerService:{opened:1==t.is_customer_services,picUrl:t.customer_services_pic,open_type:"contact"},home:{opened:1==t.is_quick_home&&this.oldData.home.opened,picUrl:t.quick_home_pic,open_type:"redirect",link_url:"/pages/index/index"},mApp:{appId:t.small_app_id,opened:1==t.is_small_app,page:t.small_app_url,picUrl:t.small_app_pic,open_type:"app"},mapNav:{opened:1==t.is_quick_map,address:t.quick_map_address,latitude:t.latitude,longitude:t.longitude,picUrl:t.quick_map_pic,open_type:"map"},tel:{opened:1==t.is_dial,number:t.contact_tel,picUrl:t.dial_pic,open_type:"tel"},web:{opened:1==t.is_web_service,url:"/pages/web/web?url="+t.web_service_url,picUrl:t.web_service_pic,open_type:"web"},customize:{opened:1==t.is_quick_customize,picUrl:t.quick_customize_pic,link_url:t.quick_customize_link_url,params:t.quick_customize_new_params,open_type:t.quick_customize_open_type},navStyle:t.quick_navigation_style,navSwitch:t.is_quick_navigation}}else for(var n in e={customerService:{open_type:"contact"},home:{open_type:"redirect",link_url:"/pages/index/index"},mApp:{open_type:"app"},mapNav:{open_type:"map"},tel:{open_type:"tel"},web:{open_type:"web"},customize:{open_type:""}},this.oldData)if("customerService"===n||"home"===n||"mApp"===n||"mapNav"===n||"tel"===n)e[n]=o(o({},e[n]),this.oldData[n]);else if("web"===n){var a="../web/web?url=".concat(this.oldData[n].url);e.web=o(o(o({},e.web),this.oldData[n]),{},{url:a})}else e[n]=this.oldData[n];return e}},(0,a.mapState)({mall:function(e){return e.mallConfig.mall},plugin:function(e){return e.mallConfig.plugin}})),(0,a.mapGetters)("iPhoneX",{getBoolEmpty:"getBoolEmpty"})),onLoad:function(){},watch:{oldData:{handler:function(){var e=getCurrentPages(),t=null;e.length&&(t=e[e.length-1]),this.currentRoute="/".concat(t.route.split("?")[0]),"/pages/index/index"===this.currentRoute?this.oldData.home.opened=!1:this.oldData.home.opened=!0},immediate:!0}},methods:{webService:function(){var t=this;function n(t){e.navigateTo({url:t})}"undefined"===typeof this.plugin.dianqilai?n(this.newData.web.url):this.$subscribe(this.plugin.dianqilai.template_message_captain).then((function(e){n(t.newData.web.url)})).catch((function(e){n(t.newData.web.url)}))}}};t.default=l}).call(this,n("d2c1")["default"])},ef62:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var a=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.collapse=!e.collapse})},i=[]},f2fb:function(e,t,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-quick-navigation/app-quick-navigation-create-component',
    {
        'components/page-component/app-quick-navigation/app-quick-navigation-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('d2c1')['createComponent'](__webpack_require__("4d92"))
        })
    },
    [['components/page-component/app-quick-navigation/app-quick-navigation-create-component']]
]);                