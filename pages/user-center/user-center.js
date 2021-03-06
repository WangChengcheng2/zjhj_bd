(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/user-center/user-center"], {
    1985: function(e, t, n) {},
    "26ae": function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("61ea"),
        o = n.n(r);
      for (var i in r)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return r[e]
        }))
      }(i);
      t["default"] = o.a
    },
    "61ea": function(e, t, n) {
      "use strict";
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var r = n("7736");

        function o(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
          }
          return n
        }

        function i(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? o(Object(n), !0).forEach((function(t) {
              c(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
          }
          return e
        }

        function c(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e
        }
        var u = function() {
            return Promise.all([n.e("common/vendor"), n.e("components/page-component/app-user-center-top/app-user-center-top")]).then(n.bind(null, "a527"))
          },
          a = function() {
            return n.e("components/page-component/app-account-balance/app-account-balance").then(n.bind(null, "14a1"))
          },
          p = function() {
            return n.e("components/page-component/app-my-order/app-my-order").then(n.bind(null, "d650"))
          },
          s = function() {
            return n.e("components/page-component/app-copyright/app-copyright").then(n.bind(null, "7fe8"))
          },
          f = function() {
            return Promise.all([n.e("common/vendor"), n.e("components/page-component/app-vip-card/app-vip-card")]).then(n.bind(null, "19f0"))
          },
          l = {
            name: "user-center",
            components: {
              AppCopyright: s,
              AppUserCenterTop: u,
              AppAccountBalance: a,
              AppMyOrder: p,
              AppVipCard: f
            },
            computed: i(i(i(i({}, (0, r.mapState)({
              copyright: function(e) {
                return e.mallConfig.copyright
              },
              userInfo: function(e) {
                return e.user.info
              },
              is_icon_super_vip: function(e) {
                return e.mallConfig.mall.setting.is_icon_super_vip
              },
              foot_bar: function(e) {
                return e.userCenter.data.foot_bar
              },
              account_bar_status: function() {
                return this.userCenter.account_bar ? this.userCenter.account_bar.status : 0
              }
            })), {}, {
              copyrightLink: function() {
                if (!this.copyright) return {};
                var e = this.copyright.link,
                  t = e.open_type,
                  n = e.new_link_url,
                  r = e.params;
                return {
                  openType: t,
                  url: n,
                  params: r || []
                }
              }
            }, (0, r.mapGetters)("mallConfig", {
              getTheme: "getTheme"
            })), (0, r.mapGetters)("userCenter", {
              userCenter: "userCenter"
            })), {}, {
              listStyle: function() {
                return 1 == this.userCenter.menu_style ? "row" : 2 == this.userCenter.menu_style ? "grid dir-left-wrap" : ""
              }
            }),
            onLoad: function() {
              this.$commonLoad.onload()
            },
            onShow: function() {
              var t = this;
              this.$event.on(this.$const.EVENT_USER_LOGIN).then((function() {
                e.redirectTo({
                  url: "/pages/user-center/user-center"
                })
              })), this.$user.isLogin() && this.$store.dispatch("user/refresh"), this.$nextTick().then((function() {
                t.$store.dispatch("userCenter/data")
              }))
            },
            methods: {
              router: function(t) {
                var n = "";
                n = "????????????" === t ? "/pages/favorite/favorite" : "/pages/foot/index/index", e.navigateTo({
                  url: n
                })
              }
            },
            filters: {
              showNum: function(e, t) {
                return "????????????" === e ? t && t.favorite ? t.favorite : 0 : t && t.footprint ? t.footprint : 0
              }
            }
          };
        t.default = l
      }).call(this, n("d2c1")["default"])
    },
    "678a": function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("fc9f"),
        o = n("26ae");
      for (var i in o)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(i);
      n("cfa8");
      var c = n("5d22"),
        u = Object(c["a"])(o["default"], r["a"], r["b"], !1, null, "7c054e8c", null);
      t["default"] = u.exports
    },
    cfa8: function(e, t, n) {
      "use strict";
      n("1985")
    },
    fc9f: function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
        return r
      })), n.d(t, "b", (function() {
        return o
      }));
      var r = function() {
          var e = this,
            t = e.$createElement,
            n = (e._self._c, e.__map(e.foot_bar, (function(t, n) {
              var r = e._f("showNum")(t.name, e.userInfo);
              return {
                $orig: e.__get_orig(t),
                f0: r
              }
            })));
          e.$mp.data = Object.assign({}, {
            $root: {
              l0: n
            }
          })
        },
        o = []
    }
  },
  [
    ["b62d", "common/runtime", "common/vendor"]
  ]
]);