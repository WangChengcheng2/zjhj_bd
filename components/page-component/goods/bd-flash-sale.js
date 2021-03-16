(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/goods/bd-flash-sale"],{"28dc":function(t,e,n){"use strict";n.r(e);var a=n("40f5"),u=n.n(a);for(var f in a)["default"].indexOf(f)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(f);e["default"]=u.a},"40f5":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"bd-flash-sale",props:{flashSale:{type:Object,default:function(){return{time_status:1,start_at:"",end_at:"",min_discount:""}}},theme:Object},computed:{flashStyle:function(){return"a"==this.theme.theme&&this.flashSale.cover?"background-image: url('"+this.flashSale.cover+")":"background:"+this.theme.background_p}},methods:{navigator:function(){t.navigateTo({url:this.flashSale.url})}}};e.default=n}).call(this,n("d2c1")["default"])},"87eb":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return u}));var a=function(){var t=this,e=t.$createElement;t._self._c},u=[]},"975a":function(t,e,n){"use strict";n.r(e);var a=n("87eb"),u=n("28dc");for(var f in u)["default"].indexOf(f)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(f);n("fa8a");var o=n("5d22"),r=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,"99165a04",null);e["default"]=r.exports},b45f:function(t,e,n){},fa8a:function(t,e,n){"use strict";n("b45f")}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/goods/bd-flash-sale-create-component',
    {
        'components/page-component/goods/bd-flash-sale-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('d2c1')['createComponent'](__webpack_require__("975a"))
        })
    },
    [['components/page-component/goods/bd-flash-sale-create-component']]
]);                
