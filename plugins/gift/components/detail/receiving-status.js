(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/gift/components/detail/receiving-status"],{"0976":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"receiving-status",props:["theme","type","gift_id","status","status_num","user_id","order_id","notPayOrder","detail"],methods:{route_go:function(e){t.navigateTo({url:e})},setShare:function(){this.$emit("setShare")},receipt:function(){this.$emit("receipt",this.order_id)},getConvert:function(t){for(var e=!0,n=0;n<t.length;n++)-1==t[n].is_convert&&(e=!1);return e}}};e.default=n}).call(this,n("d2c1")["default"])},"0f8c":function(t,e,n){"use strict";n("d69a")},"0fc1":function(t,e,n){"use strict";n.r(e);var i=n("5c28b"),r=n("fd54");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("0f8c");var u=n("5d22"),o=Object(u["a"])(r["default"],i["a"],i["b"],!1,null,"40a9bb0a",null);e["default"]=o.exports},"5c28b":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.getConvert(t.detail)),i=t.getConvert(t.detail),r=t.getConvert(t.detail),a=t.getConvert(t.detail);t.$mp.data=Object.assign({},{$root:{m0:n,m1:i,m2:r,m3:a}})},r=[]},d69a:function(t,e,n){},fd54:function(t,e,n){"use strict";n.r(e);var i=n("0976"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'plugins/gift/components/detail/receiving-status-create-component',
    {
        'plugins/gift/components/detail/receiving-status-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('d2c1')['createComponent'](__webpack_require__("0fc1"))
        })
    },
    [['plugins/gift/components/detail/receiving-status-create-component']]
]);                
