(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-goods-poster/app-goods-poster-one"],{"0c78":function(t,e,o){"use strict";o("2497")},2497:function(t,e,o){},"66b3":function(t,e,o){"use strict";o.r(e);var n=o("d936"),r=o.n(n);for(var c in n)["default"].indexOf(c)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(c);e["default"]=r.a},"6d74":function(t,e,o){"use strict";o.r(e);var n=o("f19b"),r=o("66b3");for(var c in r)["default"].indexOf(c)<0&&function(t){o.d(e,t,(function(){return r[t]}))}(c);o("0c78");var u=o("5d22"),i=Object(u["a"])(r["default"],n["a"],n["b"],!1,null,"41e4082c",null);e["default"]=i.exports},d936:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(){return o.e("components/page-component/app-goods-poster/app-poster-image").then(o.bind(null,"446e"))},r=function(){return o.e("components/page-component/app-goods-poster/app-poster-price").then(o.bind(null,"b30d"))},c={name:"app-goods-poster-one",components:{appPosterImage:n,appPosterPrice:r},props:{multiple:{type:Number,required:!0},info:{type:Object,required:!0},form:{type:Object,required:!0}},computed:{customize:function(){return this.info.customize_text?this.info.customize_text:"向您推荐一个好物"},background:function(){return 2===parseInt(this.form.type)?"linear-gradient(".concat(this.form.color,",").concat(this.$utils.colorRgba(this.form.color,.5),")"):this.form.color}}};e.default=c},f19b:function(t,e,o){"use strict";o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement;t._self._c},r=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-goods-poster/app-goods-poster-one-create-component',
    {
        'components/page-component/app-goods-poster/app-goods-poster-one-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('d2c1')['createComponent'](__webpack_require__("6d74"))
        })
    },
    [['components/page-component/app-goods-poster/app-goods-poster-one-create-component']]
]);                