(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/goods/bd-comments"],{"54c9":function(t,e,n){},"754e":function(t,e,n){"use strict";n.r(e);var o=n("963b"),r=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},9470:function(t,e,n){"use strict";n.r(e);var o=n("a923"),r=n("754e");for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("e38e");var c=n("5d22"),s=Object(c["a"])(r["default"],o["a"],o["b"],!1,null,"da7246d4",null);e["default"]=s.exports},"963b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("7736");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={name:"bd-comments",props:{goodsId:Number},data:function(){return{list:[]}},computed:i({},(0,o.mapState)({isComment:function(t){return t.mallConfig.mall.setting.is_comment}})),methods:{getList:function(e){var n=this;this.$request({url:this.$api.goods.comments_list,data:{goods_id:e}}).then((function(e){0===e.code?n.list=e.data.comments.slice(0,2):t.showToast({icon:"none",title:e.msg})}))},imgPreview:function(e,n){this.list&&this.list[e]&&this.list[e].pic_url&&this.list[e].pic_url.length>0&&t.previewImage({current:n,urls:this.list[e].pic_url})},goto:function(){t.navigateTo({url:"/pages/comments/comments?goods_id=".concat(this.goodsId)})}},watch:{goodsId:{immediate:!0,handler:function(t){this.getList(t)}}}};e.default=s}).call(this,n("d2c1")["default"])},a923:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=function(){var t=this,e=t.$createElement;t._self._c},r=[]},e38e:function(t,e,n){"use strict";n("54c9")}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/goods/bd-comments-create-component',
    {
        'components/page-component/goods/bd-comments-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('d2c1')['createComponent'](__webpack_require__("9470"))
        })
    },
    [['components/page-component/goods/bd-comments-create-component']]
]);                