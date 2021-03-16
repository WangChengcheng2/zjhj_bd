(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/book/components/app-write-off-code"],{"110f":function(t,e,n){"use strict";n.r(e);var i=n("368b"),a=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=a.a},"35b3":function(t,e,n){},"368b":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"app-write-off-code",props:{hidden:{type:Boolean,default:function(){return!1}},itemId:{type:String,default:function(){return"-1"}}},data:function(){return{file_path:""}},watch:{hidden:{handler:function(t){var e=this;!0===t&&this.$request({url:this.$api.book.clerk_code,data:{id:this.itemId}}).then((function(t){0===t.code&&(e.file_path=t.data.file_path)}))}}},methods:{hiddenHandler:function(){this.$emit("hiden",!1),this.file_path=""}}};e.default=i},c7ca:function(t,e,n){"use strict";n("35b3")},e604:function(t,e,n){"use strict";n.r(e);var i=n("e9b4"),a=n("110f");for(var u in a)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("c7ca");var f=n("5d22"),o=Object(f["a"])(a["default"],i["a"],i["b"],!1,null,"6f85493c",null);e["default"]=o.exports},e9b4:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));var i=function(){var t=this,e=t.$createElement;t._self._c},a=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'plugins/book/components/app-write-off-code-create-component',
    {
        'plugins/book/components/app-write-off-code-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('d2c1')['createComponent'](__webpack_require__("e604"))
        })
    },
    [['plugins/book/components/app-write-off-code-create-component']]
]);                
