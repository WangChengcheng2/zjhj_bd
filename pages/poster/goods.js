(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/poster/goods"],{a2c5:function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"b",(function(){return i}));var n=function(){var e=this,t=e.$createElement,o=(e._self._c,e.__map(e.styleList,(function(t,o){var n=e.config.poster_style.indexOf(t.value.toString());return{$orig:e.__get_orig(t),g0:n}}))),n=e.__map(e.typesettingList,(function(t,o){var n=e.config.image_style.indexOf(t.value.toString());return{$orig:e.__get_orig(t),g1:n}}));e.$mp.data=Object.assign({},{$root:{l0:o,l1:n}})},i=[]},af38:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o("7736");function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var c=function(){return o.e("components/page-component/app-goods-poster/app-goods-poster-one").then(o.bind(null,"6d74"))},s=function(){return o.e("components/page-component/app-goods-poster/app-goods-poster-two").then(o.bind(null,"0737"))},l=function(){return o.e("components/page-component/app-goods-poster/app-goods-poster-three").then(o.bind(null,"cc06"))},u=function(){return o.e("components/page-component/app-goods-poster/app-goods-poster-four").then(o.bind(null,"2278"))},p={name:"goods",components:{AppGoodsPosterOne:c,AppGoodsPosterTwo:s,AppGoodsPosterThree:l,AppGoodsPosterFour:u},data:function(){return{loadShow:!1,styleList:[{label:"样式一",value:1},{label:"样式二",value:2},{label:"样式三",value:3},{label:"样式四",value:4}],typesettingList:[{label:"1张图",value:1,pic_url:"../../static/image/poster/pic-one.png"},{label:"2张图",value:2,pic_url:"../../static/image/poster/pic-two.png"},{label:"3张图",value:3,pic_url:"../../static/image/poster/pic-three.png"},{label:"4张图",value:4,pic_url:"../../static/image/poster/pic-four.png"},{label:"5张图",value:5,pic_url:"../../static/image/poster/pic-five.png"}],typeList:[],colorList:[],selectForm:null,config:{color:[],image_style:[],poster_style:[]},multiple:0,info:null,posterConfig:"",posterGenerate:""}},onLoad:function(e){this.$commonLoad.onload(e);var t=e.poster_config,o=e.poster_generate;t&&o&&(this.posterConfig=unescape(t),this.posterGenerate=unescape(o),this.$nextTick((function(){this.loadData()})))},methods:{calcMultiple:function(){var t=this,o=null;o=e.createSelectorQuery().in(this),o.select("#head").boundingClientRect((function(o){t.multiple=(o.height*(750/e.getSystemInfoSync().screenWidth)-24-24)/1334})).exec()},loadData:function(){var t=this;this.$request({url:this.posterConfig}).then((function(o){t.$hideLoading(),t.loadShow=!0;var n=o.code,i=o.data,r=o.msg;0===n?(t.config=i.config,t.info=i.info,t.typeList=[{label:"纯色",value:1},{label:"渐变",value:2}],t.selectForm={color:t.config["color"][0],style:t.config["poster_style"][0],typesetting:t.config["image_style"][0],type:1},setTimeout((function(){t.calcMultiple()}))):e.showToast({title:r,icon:"none"})}))},changeStyle:function(e){this.selectForm.style=e},changeTypeSetting:function(e){this.selectForm.typesetting=e},changeType:function(e){this.selectForm.type=e},changeColor:function(e){this.selectForm.color=e},submitSave:function(){var t=this;this.$showLoading({text:"生成中"}),this.$request({url:this.posterGenerate,data:this.selectForm}).then((function(o){t.$hideLoading();var n=o.code,i=o.data,r=o.msg;if(0===n){var a=i.pic_url;t.$utils.batchSave(a,"image").then((function(){e.showToast({title:"保存成功"})}))}else e.showToast({title:r,icon:"none"})})).catch((function(){t.$hideLoading()}))}},computed:r({},(0,n.mapGetters)("mallConfig",{getTheme:"getTheme"}))};t.default=p}).call(this,o("d2c1")["default"])},bed4:function(e,t,o){"use strict";o("d570")},d07c:function(e,t,o){"use strict";o.r(t);var n=o("af38"),i=o.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},d570:function(e,t,o){},ed1d:function(e,t,o){"use strict";o.r(t);var n=o("a2c5"),i=o("d07c");for(var r in i)["default"].indexOf(r)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(r);o("bed4");var a=o("5d22"),c=Object(a["a"])(i["default"],n["a"],n["b"],!1,null,"461abb12",null);t["default"]=c.exports}},[["ba80","common/runtime","common/vendor"]]]);