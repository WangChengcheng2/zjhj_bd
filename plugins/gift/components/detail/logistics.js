(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/gift/components/detail/logistics"],{"0c75":function(e,t,s){"use strict";s.r(t);var n=s("6663"),o=s("7f87");for(var i in o)["default"].indexOf(i)<0&&function(e){s.d(t,e,(function(){return o[e]}))}(i);s("b128");var r=s("5d22"),a=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,"2aac1687",null);t["default"]=a.exports},2069:function(e,t,s){},6663:function(e,t,s){"use strict";s.d(t,"a",(function(){return n})),s.d(t,"b",(function(){return o}));var n=function(){var e=this,t=e.$createElement;e._self._c},o=[]},"7f87":function(e,t,s){"use strict";s.r(t);var n=s("cfac"),o=s.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){s.d(t,e,(function(){return n[e]}))}(i);t["default"]=o.a},b128:function(e,t,s){"use strict";s("2069")},cfac:function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={name:"logistics",props:["send_type","store","is_send","express","express_no","customer_name","cover_pic"],methods:{routeGo:function(){1!=this.send_type&&1==this.is_send&&this.express_no?e.navigateTo({url:"/pages/order/express-detail/express-detail?express=".concat(this.express,"&express_no=").concat(this.express_no,"&customer_name=").concat(this.customer_name,"&cover_pic=").concat(this.cover_pic)}):e.openLocation({latitude:parseFloat(this.store.latitude),longitude:parseFloat(this.store.longitude),address:this.store.address,name:this.store.name})}}};t.default=s}).call(this,s("d2c1")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'plugins/gift/components/detail/logistics-create-component',
    {
        'plugins/gift/components/detail/logistics-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('d2c1')['createComponent'](__webpack_require__("0c75"))
        })
    },
    [['plugins/gift/components/detail/logistics-create-component']]
]);                
