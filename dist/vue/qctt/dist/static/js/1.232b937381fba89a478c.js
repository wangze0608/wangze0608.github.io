"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

webpackJsonp([1], { "0eBz": function eBz(e, t, a) {
    "use strict";
    function i(e) {
      a("O8nl");
    }var r = a("AT1x"),
        s = a("uoKo"),
        n = a("VU/8"),
        o = i,
        l = n(r.a, s.a, !1, o, null, null);t.a = l.exports;
  }, AT1x: function AT1x(e, t, a) {
    "use strict";
    t.a = { data: function data() {
        return {};
      } };
  }, BDxy: function BDxy(e, t, a) {
    var i = a("gw6o");"string" == typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);a("rjj0")("0005436a", i, !0);
  }, "CU+x": function CUX(e, t, a) {
    "use strict";
    var i = a("NYxO"),
        r = a("i84Q"),
        s = a("zT5U"),
        n = (a.n(s), a("uySu")),
        o = (a.n(n), Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];for (var i in a) {
          Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
        }
      }return e;
    });t.a = { data: function data() {
        return { navList: [], navChecked: "1", navOffset: 0 };
      }, mounted: function mounted() {
        this.$nextTick(function () {
          var e = this;this.getNavList();var t = new Swiper(".swiper-nav", { slidesPerView: "auto", paginationClickable: !0, freeMode: !0, observer: !0, observeParents: !0, onTouchEnd: function onTouchEnd(t) {
              e.navOffset = t.getWrapperTranslate();
            } });this.getNavChecked(), this.setNavOffset(), t.setWrapperTranslate(this.navOffset);
        });
      }, watch: { navOffset: function navOffset() {
          this.setNavOffset();
        } }, methods: o({}, Object(i.b)(["NAV_INDEX", "NAV_OFFSET"]), { change: function change(e) {
          this.navList.map(function (e) {
            e.checked = !1;
          }), e.checked = !0;
        }, getNavList: function getNavList() {
          var e = this;this.$ajax.get("/static/nav.json").then(function (t) {
            e.navList = t.data.data;
          }).catch(function (e) {
            console.log(e);
          });
        }, getNavChecked: function getNavChecked() {
          var e = void 0 == Object(r.a)("nav_index") ? this.$store.state.navIndex : Object(r.a)("nav_index");this.navChecked = e;var t = void 0 == Object(r.b)("nav_offset") ? this.$store.state.navOffset : Object(r.b)("nav_offset");this.navOffset = t;
        }, setNavChecked: function setNavChecked(e) {
          this.$store.commit("NAV_INDEX", e), this.$store.commit("NAV_OFFSET", this.navOffset);
        }, setNavOffset: function setNavOffset() {
          this.$store.commit("NAV_OFFSET", this.navOffset);
        } }) };
  }, DaNQ: function DaNQ(e, t, a) {
    t = e.exports = a("FZ+f")(!0), t.push([e.i, "", "", { version: 3, sources: [], names: [], mappings: "", file: "HeaderTop.vue", sourceRoot: "" }]);
  }, Fw7Z: function Fw7Z(e, t, a) {
    "use strict";
    function i(e) {
      a("Nh6h");
    }Object.defineProperty(t, "__esModule", { value: !0 });var r = a("lRO8"),
        s = a("W+sb"),
        n = a("VU/8"),
        o = i,
        l = n(r.a, s.a, !1, o, "data-v-03e0d85f", null);t.default = l.exports;
  }, Nh6h: function Nh6h(e, t, a) {
    var i = a("j5Eb");"string" == typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);a("rjj0")("1c2289c2", i, !0);
  }, O8nl: function O8nl(e, t, a) {
    var i = a("DaNQ");"string" == typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);a("rjj0")("4005b718", i, !0);
  }, TAaC: function TAaC(e, t, a) {
    "use strict";
    var i = function i() {
      var e = this,
          t = e.$createElement;e._self._c;return e._m(0);
    },
        r = [function () {
      var e = this,
          t = e.$createElement,
          a = e._self._c || t;return a("div", { staticClass: "download" }, [a("div", { staticClass: "icon_L_box" }, [a("a", { staticClass: "linkL", attrs: { href: "javascript:;", target: "_self" } }, [a("img", { staticClass: "foot_down_logo", attrs: { src: "http://cools.qctt.cn/front/images/down_logo.png" } })])]), e._v(" "), a("div", { staticClass: "icon_R_box" }, [a("div", { staticClass: "linkR" }, [a("a", { staticClass: "icon_btn app_z", attrs: { href: "javascript:testApp('cn.qctt.CallsApp://','2')" } }, [e._v("\n        下载\n      ")]), e._v(" "), a("a", { staticClass: "icon_close", attrs: { href: "javascript:;" } })])])]);
    }],
        s = { render: i, staticRenderFns: r };t.a = s;
  }, TVmP: function TVmP(e, t, a) {
    "use strict";
    function i(e) {
      a("BDxy");
    }var r = a("UthT"),
        s = a("TAaC"),
        n = a("VU/8"),
        o = i,
        l = n(r.a, s.a, !1, o, "data-v-74a16b3a", null);t.a = l.exports;
  }, UthT: function UthT(e, t, a) {
    "use strict";
    t.a = { data: function data() {
        return {};
      } };
  }, "W+sb": function WSb(e, t, a) {
    "use strict";
    var i = function i() {
      var e = this,
          t = e.$createElement,
          a = e._self._c || t;return a("div", [a("header-top"), e._v(" "), a("header-nav"), e._v(" "), e._m(0), e._v(" "), a("section", [a("ul", { staticClass: "pic-list" }, e._l(e.msgList, function (t, i) {
        return a("li", { class: { video_video2: 8 == t.style, video_video: 9 == t.style, video_list3: 3 == t.style, video_list: 6 == t.style } }, [6 == t.is_news ? a("a", { staticClass: "A ui-link", attrs: { href: "https://m.qctt.cn" + t.jump_address, target: "_self" } }, [a("span", { staticClass: "pic" }, [a("img", { attrs: { src: t.image_url } })]), e._v(" "), a("p", { staticClass: "title" }, [e._v("\n            " + e._s(t.title) + "\n          ")]), e._v(" "), a("p", { staticClass: "txt" }, [a("span", { staticClass: "date" }, [e._v(e._s(t.origin))]), e._v(" "), t.CommuntCount ? a("span", { staticClass: "date pubtime" }, [e._v("评论(" + e._s(t.CommuntCount) + ")")]) : e._e()])]) : 1 == t.style ? a("a", { staticClass: "A ui-link", attrs: { href: "https://m.qctt.cn" + t.jump_address, target: "_self" } }, [a("span", { staticClass: "pic 11" }, [a("img", { attrs: { src: t.image_url } })]), e._v(" "), a("p", { staticClass: "title" }, [2 == t.articleType ? a("span", { staticClass: "yuanChuang" }, [e._v("原创")]) : 5 == t.articleType ? a("span", { staticClass: "tuiJian" }, [e._v("推荐")]) : 12 == t.articleType ? a("span", { staticClass: "yuanChuang" }, [e._v("争锋")]) : 1 == t.articleType ? a("span", { staticClass: "tuiJian" }, [e._v("热门")]) : e._e(), e._v("\n            " + e._s(t.title) + "\n          ")]), e._v(" "), a("p", { staticClass: "txt" }, [a("span", { staticClass: "date" }, [e._v(e._s(t.origin))]), e._v(" "), a("span", { staticClass: "date pubtime" }, [e._v(e._s(t.publishTime))])])]) : 5 == t.style ? a("a", { staticClass: "A ui-link", attrs: { href: "https://m.qctt.cn" + t.jump_address, target: "_self" } }, [a("span", { staticClass: "pic" }, [a("img", { attrs: { src: t.image_url } })]), e._v(" "), a("p", { staticClass: "title" }, [a("span", { staticClass: "tuiGuang" }, [e._v("推广")]), e._v(e._s(t.title))]), e._v(" "), a("p", { staticClass: "txt" }, [a("span", { staticClass: "date" }, [e._v(e._s(t.origin))]), e._v(" "), a("span", { staticClass: "date pubtime" }, [e._v(e._s(t.publishTime))])])]) : 4 == t.style ? a("a", { staticClass: "ui-link", attrs: { href: "https://m.qctt.cn" + t.jump_address, target: "_self" } }, [a("p", { staticClass: "word" }, [a("span", { staticClass: "tuiGuang" }, [e._v("推广")]), e._v(e._s(t.title) + " ")]), e._v(" "), a("div", { staticClass: "video_list_img" }, [a("img", { attrs: { src: t.link_image } }), e._v(" "), a("span", { staticClass: "video_button" }), e._v(" "), a("span", { staticClass: "video_time" })]), e._v(" "), a("p", { staticClass: "txt" }, [a("span", { staticClass: "date" }, [e._v(e._s(t.origin))]), e._v(" "), a("span", { staticClass: "date pubtime" }, [e._v(e._s(t.publishTime))])])]) : 3 == t.style ? a("a", { staticClass: "ui-link", attrs: { href: "https://m.qctt.cn" + t.jump_address, target: "_self" } }, [a("p", { staticClass: "word" }, [1 == t.is_top ? a("span", { staticClass: "zhiDing" }, [e._v("置顶")]) : 2 == t.articleType ? a("span", { staticClass: "yuanChuang" }, [e._v("原创")]) : 5 == t.articleType ? a("span", { staticClass: "tuiJian" }, [e._v("推荐")]) : 12 == t.articleType ? a("span", { staticClass: "yuanChuang" }, [e._v("争锋")]) : 1 == t.articleType ? a("span", { staticClass: "tuiJian" }, [e._v("热门")]) : e._e(), e._v("\n            " + e._s(t.title) + "\n          ")]), e._v(" "), a("div", { staticClass: "clearfix" }, e._l(t.picUrlList, function (e) {
          return a("img", { attrs: { src: e } });
        })), e._v(" "), a("p", { staticClass: "txt" }, [a("span", { staticClass: "date" }, [e._v(e._s(t.origin))]), e._v(" "), a("span", { staticClass: "date pubtime" }, [e._v(e._s(t.publishTime))])])]) : 13 == t.style ? a("a", { attrs: { href: "https://m.qctt.cn" + t.jump_address, target: "_self" } }, [a("p", { staticClass: "word" }, [a("span", { staticClass: "zhiBo" }, [e._v("直播")]), e._v("\n            " + e._s(t.title) + "\n          ")]), e._v(" "), a("div", { staticClass: "applive_img" }, [a("img", { attrs: { src: t.image_url } })])]) : 6 == t.style ? a("a", { staticClass: "ui-link", attrs: { href: "https://m.qctt.cn" + t.jump_address, target: "_self" } }, [a("p", { staticClass: "word" }, [a("span", { staticClass: "zhuanTi" }, [e._v("专题")]), e._v("\n            " + e._s(t.title) + "\n          ")]), e._v(" "), a("div", { staticClass: "video_list_img" }, [a("img", { attrs: { src: t.image_url } }), e._v(" "), a("span", { staticClass: "video_button" }), e._v(" "), a("span", { staticClass: "video_time" })]), e._v(" "), a("p", { staticClass: "txt" }, [a("span", { staticClass: "date pubtime" }, [e._v("更新至第" + e._s(t.specialArticleNum) + "篇")])])]) : 9 == t.style ? a("a", { attrs: { href: "https://m.qctt.cn" + t.jump_address, target: "_self" } }, [a("p", { staticClass: "word" }, [5 == t.is_news ? a("span", { staticClass: "tuiGuang" }, [e._v("推广")]) : 1 == t.is_top ? a("span", { staticClass: "zhiDing" }, [e._v("置顶")]) : e._e(), e._v(" "), 2 == t.articleType ? a("span", { staticClass: "yuanChuang" }, [e._v("原创")]) : 5 == t.articleType ? a("span", { staticClass: "tuiJian" }, [e._v("推荐")]) : e._e(), e._v("\n            " + e._s(t.title) + "\n          ")]), e._v(" "), a("div", { staticClass: "video_img" }, [5 == t.is_news ? a("img", { attrs: { src: t.link_image } }) : a("img", { attrs: { src: t.image_url } }), e._v(" "), a("span", { staticClass: "video_play_button" }), e._v(" "), a("span", { staticClass: "video_time" }, [e._v(e._s(t.lasting))])]), e._v(" "), a("p", { staticClass: "txt" }, [a("span", { staticClass: "date" }, [e._v(e._s(t.origin))]), e._v(" "), 5 == t.is_news ? a("span", { staticClass: "date pubtime" }, [e._v(e._s(t.read_count) + "次播放")]) : a("span", { staticClass: "date pubtime" }, [e._v(e._s(t.read_number) + "次播放")])])]) : 8 == t.style ? a("a", { staticClass: "A ui-link", attrs: { href: "https://m.qctt.cn" + t.jump_address, target: "_self" } }, [a("span", { staticClass: "pic" }, [a("img", { attrs: { src: t.link_image } }), e._v(" "), a("i", { staticClass: "video_time" }, [e._v(e._s(t.lasting))])]), e._v(" "), a("p", { staticClass: "title" }, [e._v("\n            " + e._s(t.title) + "\n            "), 5 == t.is_news ? a("span", { staticClass: "tuiGuang" }, [e._v("推广")]) : e._e()]), e._v(" "), a("p", { staticClass: "txt" }, [a("span", { staticClass: "date" }, [e._v(e._s(t.origin))]), e._v(" "), a("span", { staticClass: "date pubtime" }, [e._v(e._s(t.publishTime))])])]) : e._e()]);
      }))]), e._v(" "), a("footer-bottom")], 1);
    },
        r = [function () {
      var e = this,
          t = e.$createElement,
          a = e._self._c || t;return a("nav", [a("div", { staticClass: "swiper-container swiper-container-horizontal" }, [a("div", { staticClass: "swiper-wrapper" }, [a("div", { staticClass: "swiper-slide swiper-slide-active", staticStyle: { width: "375px" } }, [a("a", { attrs: { href: "/video/60611", target: "_self" } }, [a("img", { attrs: { src: "http://cools.qctt.cn/1508393519463?imageView2/1/w/1000/h/500" } }), e._v(" "), a("div", { staticClass: "blur_bg" }), e._v(" "), a("p", [e._v("视频60611")])])]), e._v(" "), a("div", { staticClass: "swiper-slide swiper-slide-active", staticStyle: { width: "375px" } }, [a("a", { attrs: { href: "/video/60611", target: "_self" } }, [a("img", { attrs: { src: "http://cools.qctt.cn/1508393519463?imageView2/1/w/1000/h/500" } }), e._v(" "), a("div", { staticClass: "blur_bg" }), e._v(" "), a("p", [e._v("视频60611")])])])]), e._v(" "), a("div", { staticClass: "swiper-pagination" })])]);
    }],
        s = { render: i, staticRenderFns: r };t.a = s;
  }, f70G: function f70G(e, t, a) {
    "use strict";
    var i = function i() {
      var e = this,
          t = e.$createElement,
          a = e._self._c || t;return a("div", [a("div", { staticClass: "swiper-nav" }, [a("div", { staticClass: "swiper-wrapper" }, e._l(e.navList, function (t, i) {
        return a("div", { staticClass: "swiper-slide", on: { click: function click(t) {
              e.setNavOffset();
            } } }, [a("a", { class: { active: t.nav_index == e.navChecked }, attrs: { href: t.addr }, domProps: { textContent: e._s(t.name) }, on: { click: function click(a) {
              e.setNavChecked(t.nav_index);
            } } })]);
      }))])]);
    },
        r = [],
        s = { render: i, staticRenderFns: r };t.a = s;
  }, gw6o: function gw6o(e, t, a) {
    t = e.exports = a("FZ+f")(!0), t.push([e.i, "", "", { version: 3, sources: [], names: [], mappings: "", file: "Footer.vue", sourceRoot: "" }]);
  }, i84Q: function i84Q(e, t, a) {
    "use strict";
    a.d(t, "a", function () {
      return r;
    }), a.d(t, "b", function () {
      return s;
    });var i = a("yclV"),
        r = function r(e) {
      return Object(i.a)(e);
    },
        s = function s(e) {
      return Object(i.a)(e);
    };
  }, j5Eb: function j5Eb(e, t, a) {
    t = e.exports = a("FZ+f")(!0), t.push([e.i, "", "", { version: 3, sources: [], names: [], mappings: "", file: "index.vue", sourceRoot: "" }]);
  }, k1aN: function k1aN(e, t, a) {
    "use strict";
    function i(e) {
      a("sxIh");
    }var r = a("CU+x"),
        s = a("f70G"),
        n = a("VU/8"),
        o = i,
        l = n(r.a, s.a, !1, o, "data-v-0c625507", null);t.a = l.exports;
  }, lRO8: function lRO8(e, t, a) {
    "use strict";
    var i = a("0eBz"),
        r = a("TVmP"),
        s = a("k1aN"),
        n = a("zT5U"),
        o = (a.n(n), a("uySu"));a.n(o);t.a = { data: function data() {
        return { msgList: [] };
      }, mounted: function mounted() {
        this.$nextTick(function () {
          new Swiper(".swiper-container", { pagination: ".swiper-pagination", loop: !1 }), this.getMsg();
        });
      }, methods: { getMsg: function getMsg() {
          var e = this;this.$ajax.get("/static/data.json").then(function (t) {
            e.msgList = t.data.data;
          }).catch(function (e) {
            console.log(response);
          });
        }, test: function test() {
          var e = this;setTimeout(function () {
            console.log(e.msgList);
          }, 1e3);
        } }, components: { HeaderTop: i.a, HeaderNav: s.a, FooterBottom: r.a } };
  }, obP6: function obP6(e, t, a) {
    t = e.exports = a("FZ+f")(!0), t.push([e.i, ".swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-moz-box-orient:vertical;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-transition-property:-webkit-transform;-moz-transition-property:-moz-transform;-o-transition-property:-o-transform;-ms-transition-property:-ms-transform;transition-property:transform;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translateZ(0);-moz-transform:translateZ(0);-o-transform:translate(0);-ms-transform:translateZ(0);transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{-webkit-box-lines:multiple;-moz-box-lines:multiple;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;-moz-transition-timing-function:ease-out;-ms-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex:0 0 auto;flex-shrink:0;width:100%;height:100%;position:relative}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-transition-property:-webkit-transform,height;-moz-transition-property:-moz-transform;-o-transition-property:-o-transform;-ms-transition-property:-ms-transform;transition-property:transform,height}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-wp8-horizontal{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-wp8-vertical{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;-moz-background-size:27px 44px;-webkit-background-size:27px 44px;background-size:27px 44px;background-position:50%;background-repeat:no-repeat}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23007aff'/%3E%3C/svg%3E\");left:10px;right:auto}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z'/%3E%3C/svg%3E\")}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23fff'/%3E%3C/svg%3E\")}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23007aff'/%3E%3C/svg%3E\");right:10px;left:auto}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z'/%3E%3C/svg%3E\")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23fff'/%3E%3C/svg%3E\")}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);-o-transform:translateZ(0);transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-white .swiper-pagination-bullet{background:#fff}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);-moz-transform:translate3d(0,-50%,0);-o-transform:translateY(-50%);-ms-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:5px 0;display:block}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 5px}.swiper-pagination-progress{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progress .swiper-pagination-progressbar{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);-ms-transform:scale(0);-o-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;-moz-transform-origin:left top;-ms-transform-origin:left top;-o-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progress .swiper-pagination-progressbar{-webkit-transform-origin:right top;-moz-transform-origin:right top;-ms-transform-origin:right top;-o-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progress{width:100%;height:4px;left:0;top:0}.swiper-container-vertical>.swiper-pagination-progress{width:4px;height:100%;left:0;top:0}.swiper-pagination-progress.swiper-pagination-white{background:hsla(0,0%,100%,.5)}.swiper-pagination-progress.swiper-pagination-white .swiper-pagination-progressbar{background:#fff}.swiper-pagination-progress.swiper-pagination-black .swiper-pagination-progressbar{background:#000}.swiper-container-3d{-webkit-perspective:1200px;-moz-perspective:1200px;-o-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(right,rgba(0,0,0,.5),transparent);background-image:-moz-linear-gradient(right,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(right,rgba(0,0,0,.5),transparent);background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5),transparent);background-image:-moz-linear-gradient(left,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(left,rgba(0,0,0,.5),transparent);background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.5),transparent);background-image:-moz-linear-gradient(bottom,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(bottom,rgba(0,0,0,.5),transparent);background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.5),transparent);background-image:-moz-linear-gradient(top,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(top,rgba(0,0,0,.5),transparent);background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-coverflow .swiper-wrapper,.swiper-container-flip .swiper-wrapper{-ms-perspective:1200px}.swiper-container-cube,.swiper-container-flip{overflow:visible}.swiper-container-cube .swiper-slide,.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-cube .swiper-slide .swiper-slide,.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active,.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top,.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-slide{visibility:hidden;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;-moz-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;-moz-transition-timing-function:ease-out;-ms-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;-moz-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;-moz-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12) infinite;-moz-animation:swiper-preloader-spin 1s steps(12) infinite;animation:swiper-preloader-spin 1s steps(12) infinite}.swiper-lazy-preloader:after{display:block;content:\"\";width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%236c6c6c' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E\");background-position:50%;-webkit-background-size:100%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%23fff' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E\")}@-webkit-keyframes swiper-preloader-spin{to{-webkit-transform:rotate(1turn)}}@keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}", "", { version: 3, sources: ["E:/mygithub/vue/qctt/src/style/swiper.min.css"], names: [], mappings: "AAcA,kBAAkB,iBAAiB,kBAAkB,kBAAkB,gBAAgB,SAAS,CAAC,2CAA2C,UAAU,CAAC,2CAA2C,4BAA4B,yBAAyB,0BAA0B,8BAA8B,qBAAqB,CAAC,gBAAgB,kBAAkB,WAAW,YAAY,UAAU,oBAAoB,iBAAiB,oBAAoB,qBAAqB,aAAa,8CAA8C,wCAAwC,oCAAoC,sCAAsC,8BAA8B,+BAA+B,4BAA4B,sBAAsB,CAAC,wDAAwD,gCAAqC,6BAAkC,0BAA4B,4BAAiC,uBAA4B,CAAC,2CAA2C,2BAA2B,wBAAwB,mBAAmB,uBAAuB,cAAc,CAAC,4CAA4C,4CAA4C,yCAAyC,wCAAwC,uCAAuC,oCAAoC,aAAa,CAAC,cAAc,sBAAsB,kBAAkB,cAAc,WAAW,YAAY,iBAAiB,CAAC,wEAAwE,WAAW,CAAC,6CAA6C,wBAAwB,qBAAqB,+BAA+B,uBAAuB,qDAAqD,wCAAwC,oCAAoC,sCAAsC,oCAAoC,CAAC,uCAAuC,kBAAkB,OAAO,MAAM,oBAAoB,UAAU,aAAa,CAAC,uBAAuB,uBAAuB,kBAAkB,CAAC,qBAAqB,uBAAuB,kBAAkB,CAAC,wCAAwC,kBAAkB,QAAQ,WAAW,YAAY,iBAAiB,WAAW,eAAe,+BAA+B,kCAAkC,0BAA0B,wBAA2B,2BAA2B,CAAC,sFAAsF,YAAY,YAAY,mBAAmB,CAAC,8DAA8D,oNAAoR,UAAU,UAAU,CAAC,sGAAsG,kMAAmR,CAAC,sGAAsG,gNAAmR,CAAC,8DAA8D,oNAAoR,WAAW,SAAS,CAAC,sGAAsG,kMAAmR,CAAC,sGAAsG,gNAAmR,CAAC,mBAAmB,kBAAkB,kBAAkB,uBAAuB,oBAAoB,kBAAkB,eAAe,gCAAqC,4BAAiC,2BAAgC,wBAA6B,UAAU,CAAC,4CAA4C,SAAS,CAAC,8GAA8G,YAAY,OAAO,UAAU,CAAC,0BAA0B,UAAU,WAAW,qBAAqB,mBAAmB,gBAAgB,UAAU,CAAC,gCAAgC,YAAY,SAAS,UAAU,gBAAgB,qBAAqB,oBAAoB,wBAAwB,eAAe,CAAC,uDAAuD,cAAc,CAAC,mDAAmD,eAAe,CAAC,iCAAiC,UAAU,kBAAkB,CAAC,0DAA0D,eAAe,CAAC,0DAA0D,eAAe,CAAC,sDAAsD,WAAW,QAAQ,wCAAwC,qCAAqC,8BAA+B,oCAAoC,+BAA+B,CAAC,gFAAgF,aAAa,aAAa,CAAC,kFAAkF,YAAY,CAAC,4BAA4B,2BAA2B,iBAAiB,CAAC,2DAA2D,mBAAmB,kBAAkB,OAAO,MAAM,WAAW,YAAY,2BAA2B,uBAAuB,sBAAsB,mBAAmB,kCAAkC,+BAA+B,8BAA8B,6BAA6B,yBAAyB,CAAC,iFAAiF,mCAAmC,gCAAgC,+BAA+B,8BAA8B,0BAA0B,CAAC,yDAAyD,WAAW,WAAW,OAAO,KAAK,CAAC,uDAAuD,UAAU,YAAY,OAAO,KAAK,CAAC,oDAAoD,6BAA+B,CAAC,mFAAmF,eAAe,CAAC,mFAAmF,eAAe,CAAC,qBAAqB,2BAA2B,wBAAwB,sBAAsB,kBAAkB,CAAC,+SAA+S,oCAAoC,iCAAiC,gCAAgC,2BAA2B,CAAC,8LAA8L,kBAAkB,OAAO,MAAM,WAAW,YAAY,oBAAoB,UAAU,CAAC,+CAA+C,kGAAoG,2EAA6E,wEAA0E,sEAAwE,mEAAsE,CAAC,gDAAgD,kGAAoG,0EAA4E,uEAAyE,qEAAuE,kEAAuE,CAAC,8CAA8C,oGAAsG,4EAA8E,yEAA2E,uEAAyE,iEAAqE,CAAC,iDAAiD,oGAAsG,yEAA2E,sEAAwE,oEAAsE,mEAAwE,CAAC,mFAAmF,sBAAsB,CAAC,8CAA8C,gBAAgB,CAAC,0EAA0E,oBAAoB,mCAAmC,gCAAgC,+BAA+B,2BAA2B,SAAS,CAAC,sGAAsG,mBAAmB,CAAC,0NAA0N,mBAAmB,CAAC,4YAA4Y,UAAU,mCAAmC,gCAAgC,+BAA+B,0BAA0B,CAAC,qCAAqC,kBAAkB,6BAA6B,0BAA0B,yBAAyB,qBAAqB,WAAW,WAAW,CAAC,0DAA0D,gCAAgC,6BAA6B,4BAA4B,uBAAuB,CAAC,wLAAwL,oBAAoB,kBAAkB,CAAC,2CAA2C,kBAAkB,OAAO,SAAS,WAAW,YAAY,gBAAgB,WAAW,0BAA0B,kBAAkB,SAAS,CAAC,gEAAgE,4CAA4C,yCAAyC,wCAAwC,uCAAuC,mCAAmC,CAAC,qCAAqC,oBAAoB,oCAAoC,iCAAiC,+BAA+B,2BAA2B,CAAC,mDAAmD,mBAAmB,CAAC,6GAA6G,mBAAmB,CAAC,uBAAuB,WAAW,YAAY,oBAAoB,iBAAiB,oBAAoB,qBAAqB,aAAa,wBAAwB,qBAAqB,qBAAqB,+BAA+B,uBAAuB,yBAAyB,sBAAsB,sBAAsB,2BAA2B,mBAAmB,iBAAiB,CAAC,oFAAoF,eAAe,gBAAgB,kBAAkB,CAAC,kBAAkB,mBAAmB,kBAAkB,sBAAsB,yBAAyB,CAAC,+CAA+C,kBAAkB,QAAQ,WAAW,WAAW,WAAW,SAAS,CAAC,6CAA6C,kBAAkB,UAAU,OAAO,WAAW,UAAU,UAAU,CAAC,uBAAuB,YAAY,WAAW,kBAAkB,0BAA0B,mBAAmB,OAAO,KAAK,CAAC,8BAA8B,WAAW,CAAC,uBAAuB,WAAW,YAAY,kBAAkB,SAAS,QAAQ,kBAAkB,iBAAiB,WAAW,6BAA6B,0BAA0B,qBAAqB,8DAAkE,2DAA+D,qDAAyD,CAAC,6BAA6B,cAAc,WAAW,WAAW,YAAY,gmCAAy7C,wBAAwB,6BAA6B,qBAAqB,2BAA2B,CAAC,mCAAmC,4lCAAq7C,CAAC,yCAAyC,GAAK,+BAAgC,CAAC,CAAC,iCAAiC,GAAK,uBAAwB,CAAC,CAAC", file: "swiper.min.css", sourcesContent: ["/**\n * Swiper 3.4.2\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * \n * http://www.idangero.us/swiper/\n * \n * Copyright 2017, Vladimir Kharlampidi\n * The iDangero.us\n * http://www.idangero.us/\n * \n * Licensed under MIT\n * \n * Released on: March 10, 2017\n */\n.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-moz-box-orient:vertical;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-transition-property:-webkit-transform;-moz-transition-property:-moz-transform;-o-transition-property:-o-transform;-ms-transition-property:-ms-transform;transition-property:transform;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-o-transform:translate(0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.swiper-container-multirow>.swiper-wrapper{-webkit-box-lines:multiple;-moz-box-lines:multiple;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;-moz-transition-timing-function:ease-out;-ms-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex:0 0 auto;flex-shrink:0;width:100%;height:100%;position:relative}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-transition-property:-webkit-transform,height;-moz-transition-property:-moz-transform;-o-transition-property:-o-transform;-ms-transition-property:-ms-transform;transition-property:transform,height}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-wp8-horizontal{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-wp8-vertical{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;-moz-background-size:27px 44px;-webkit-background-size:27px 44px;background-size:27px 44px;background-position:center;background-repeat:no-repeat}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-white .swiper-pagination-bullet{background:#fff}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);-moz-transform:translate3d(0,-50%,0);-o-transform:translate(0,-50%);-ms-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:5px 0;display:block}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 5px}.swiper-pagination-progress{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progress .swiper-pagination-progressbar{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);-ms-transform:scale(0);-o-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;-moz-transform-origin:left top;-ms-transform-origin:left top;-o-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progress .swiper-pagination-progressbar{-webkit-transform-origin:right top;-moz-transform-origin:right top;-ms-transform-origin:right top;-o-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progress{width:100%;height:4px;left:0;top:0}.swiper-container-vertical>.swiper-pagination-progress{width:4px;height:100%;left:0;top:0}.swiper-pagination-progress.swiper-pagination-white{background:rgba(255,255,255,.5)}.swiper-pagination-progress.swiper-pagination-white .swiper-pagination-progressbar{background:#fff}.swiper-pagination-progress.swiper-pagination-black .swiper-pagination-progressbar{background:#000}.swiper-container-3d{-webkit-perspective:1200px;-moz-perspective:1200px;-o-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-coverflow .swiper-wrapper,.swiper-container-flip .swiper-wrapper{-ms-perspective:1200px}.swiper-container-cube,.swiper-container-flip{overflow:visible}.swiper-container-cube .swiper-slide,.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-cube .swiper-slide .swiper-slide,.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active,.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top,.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-slide{visibility:hidden;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;-moz-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;-moz-transition-timing-function:ease-out;-ms-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;-moz-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;-moz-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12,end) infinite;-moz-animation:swiper-preloader-spin 1s steps(12,end) infinite;animation:swiper-preloader-spin 1s steps(12,end) infinite}.swiper-lazy-preloader:after{display:block;content:\"\";width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;-webkit-background-size:100%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{transform:rotate(360deg)}}"], sourceRoot: "" }]);
  }, "raT+": function raT(e, t, a) {
    t = e.exports = a("FZ+f")(!0), t.push([e.i, ".swiper-nav .swiper-slide[data-v-0c625507]{width:auto;height:40px;line-height:40px}.swiper-nav[data-v-0c625507]{background:#fafafa;height:40px;width:100%;overflow:hidden}.swiper-nav .swiper-slide a[data-v-0c625507]{color:#666;font-size:16px;padding:0 10px;text-align:center;font-weight:400;font-family:Open Sans,Arial,Hiragino Sans GB,Microsoft YaHei,\\\\5FAE\\8F6F\\96C5\\9ED1,STHeiti,SimSun,sans-serif}.swiper-nav .swiper-slide a.active[data-v-0c625507]{color:#17abc1;font-size:19px}", "", { version: 3, sources: ["E:/mygithub/vue/qctt/src/components/HeaderNav.vue"], names: [], mappings: "AACA,2CACE,WAAW,AACX,YAAa,AACb,gBAAiB,CAClB,AACD,6BACE,mBAAoB,AACpB,YAAY,AACZ,WAAW,AACX,eAAiB,CAClB,AACD,6CACE,WAAY,AACZ,eAAe,AACf,eAAe,AACf,kBAAmB,AACnB,gBAAmB,AACnB,4GAAqG,CACtG,AACD,oDACE,cAAe,AACf,cAAe,CAChB", file: "HeaderNav.vue", sourcesContent: ['\n.swiper-nav .swiper-slide[data-v-0c625507]{\n  width:auto;\n  height: 40px;\n  line-height:40px;\n}\n.swiper-nav[data-v-0c625507]{\n  background: #fafafa;\n  height:40px;\n  width:100%;\n  overflow: hidden;\n}\n.swiper-nav .swiper-slide a[data-v-0c625507]{\n  color: #666;\n  font-size:16px;\n  padding:0 10px;\n  text-align: center;\n  font-weight:normal;\n  font-family: "Open Sans",Arial,"Hiragino Sans GB","Microsoft YaHei","微软雅黑",STHeiti,SimSun,sans-serif;\n}\n.swiper-nav .swiper-slide a.active[data-v-0c625507]{\n  color: #17abc1;\n  font-size:19px;\n}\n'], sourceRoot: "" }]);
  }, sxIh: function sxIh(e, t, a) {
    var i = a("raT+");"string" == typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);a("rjj0")("6d90f348", i, !0);
  }, uoKo: function uoKo(e, t, a) {
    "use strict";
    var i = function i() {
      var e = this,
          t = e.$createElement;e._self._c;return e._m(0);
    },
        r = [function () {
      var e = this,
          t = e.$createElement,
          a = e._self._c || t;return a("div", [a("div", { staticClass: "header", attrs: { id: "header_top" } }, [a("a", { staticClass: "header_logo", attrs: { href: "http://wt.qctt.cn", target: "_top" } }, [a("img", { attrs: { src: "http://cools.qctt.cn/front/images/nav_log.png" } })]), e._v(" "), a("a", { staticClass: "header_nav", attrs: { href: "javascript:;" } }), e._v(" "), a("a", { staticClass: "header_search", attrs: { href: "javascript:;", target: "_self" } })]), e._v(" "), a("div", { staticClass: "header" })]);
    }],
        s = { render: i, staticRenderFns: r };t.a = s;
  }, uySu: function uySu(e, t, a) {
    var i = a("obP6");"string" == typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);a("rjj0")("fbb40658", i, !0);
  }, zT5U: function zT5U(e, t, a) {
    var i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return typeof e === "undefined" ? "undefined" : _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
    };!function () {
      "use strict";
      var e,
          t = function t(r, s) {
        function n(e) {
          return Math.floor(e);
        }function o() {
          var e = x.params.autoplay,
              t = x.slides.eq(x.activeIndex);t.attr("data-swiper-autoplay") && (e = t.attr("data-swiper-autoplay") || x.params.autoplay), x.autoplayTimeoutId = setTimeout(function () {
            x.params.loop ? (x.fixLoop(), x._slideNext(), x.emit("onAutoplay", x)) : x.isEnd ? s.autoplayStopOnLast ? x.stopAutoplay() : (x._slideTo(0), x.emit("onAutoplay", x)) : (x._slideNext(), x.emit("onAutoplay", x));
          }, e);
        }function l(t, a) {
          var i = e(t.target);if (!i.is(a)) if ("string" == typeof a) i = i.parents(a);else if (a.nodeType) {
            var r;return i.parents().each(function (e, t) {
              t === a && (r = a);
            }), r ? a : void 0;
          }if (0 !== i.length) return i[0];
        }function p(e, t) {
          t = t || {};var a = window.MutationObserver || window.WebkitMutationObserver,
              i = new a(function (e) {
            e.forEach(function (e) {
              x.onResize(!0), x.emit("onObserverUpdate", x, e);
            });
          });i.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), x.observers.push(i);
        }function d(e) {
          e.originalEvent && (e = e.originalEvent);var t = e.keyCode || e.charCode;if (!x.params.allowSwipeToNext && (x.isHorizontal() && 39 === t || !x.isHorizontal() && 40 === t)) return !1;if (!x.params.allowSwipeToPrev && (x.isHorizontal() && 37 === t || !x.isHorizontal() && 38 === t)) return !1;if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
            if (37 === t || 39 === t || 38 === t || 40 === t) {
              var a = !1;if (x.container.parents("." + x.params.slideClass).length > 0 && 0 === x.container.parents("." + x.params.slideActiveClass).length) return;var i = { left: window.pageXOffset, top: window.pageYOffset },
                  r = window.innerWidth,
                  s = window.innerHeight,
                  n = x.container.offset();x.rtl && (n.left = n.left - x.container[0].scrollLeft);for (var o = [[n.left, n.top], [n.left + x.width, n.top], [n.left, n.top + x.height], [n.left + x.width, n.top + x.height]], l = 0; l < o.length; l++) {
                var p = o[l];p[0] >= i.left && p[0] <= i.left + r && p[1] >= i.top && p[1] <= i.top + s && (a = !0);
              }if (!a) return;
            }x.isHorizontal() ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === t && !x.rtl || 37 === t && x.rtl) && x.slideNext(), (37 === t && !x.rtl || 39 === t && x.rtl) && x.slidePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && x.slideNext(), 38 === t && x.slidePrev()), x.emit("onKeyPress", x, t);
          }
        }function c(e) {
          var t = 0,
              a = 0,
              i = 0,
              r = 0;return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, r = 10 * a, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || r) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, r *= 40) : (i *= 800, r *= 800)), i && !t && (t = i < 1 ? -1 : 1), r && !a && (a = r < 1 ? -1 : 1), { spinX: t, spinY: a, pixelX: i, pixelY: r };
        }function u(e) {
          e.originalEvent && (e = e.originalEvent);var t = 0,
              a = x.rtl ? -1 : 1,
              i = c(e);if (x.params.mousewheelForceToAxis) {
            if (x.isHorizontal()) {
              if (!(Math.abs(i.pixelX) > Math.abs(i.pixelY))) return;t = i.pixelX * a;
            } else {
              if (!(Math.abs(i.pixelY) > Math.abs(i.pixelX))) return;t = i.pixelY;
            }
          } else t = Math.abs(i.pixelX) > Math.abs(i.pixelY) ? -i.pixelX * a : -i.pixelY;if (0 !== t) {
            if (x.params.mousewheelInvert && (t = -t), x.params.freeMode) {
              var r = x.getWrapperTranslate() + t * x.params.mousewheelSensitivity,
                  s = x.isBeginning,
                  n = x.isEnd;if (r >= x.minTranslate() && (r = x.minTranslate()), r <= x.maxTranslate() && (r = x.maxTranslate()), x.setWrapperTransition(0), x.setWrapperTranslate(r), x.updateProgress(), x.updateActiveIndex(), (!s && x.isBeginning || !n && x.isEnd) && x.updateClasses(), x.params.freeModeSticky ? (clearTimeout(x.mousewheel.timeout), x.mousewheel.timeout = setTimeout(function () {
                x.slideReset();
              }, 300)) : x.params.lazyLoading && x.lazy && x.lazy.load(), x.emit("onScroll", x, e), x.params.autoplay && x.params.autoplayDisableOnInteraction && x.stopAutoplay(), 0 === r || r === x.maxTranslate()) return;
            } else {
              if (new window.Date().getTime() - x.mousewheel.lastScrollTime > 60) if (t < 0) {
                if (x.isEnd && !x.params.loop || x.animating) {
                  if (x.params.mousewheelReleaseOnEdges) return !0;
                } else x.slideNext(), x.emit("onScroll", x, e);
              } else if (x.isBeginning && !x.params.loop || x.animating) {
                if (x.params.mousewheelReleaseOnEdges) return !0;
              } else x.slidePrev(), x.emit("onScroll", x, e);x.mousewheel.lastScrollTime = new window.Date().getTime();
            }return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1;
          }
        }function m(t, a) {
          t = e(t);var i,
              r,
              s,
              n = x.rtl ? -1 : 1;i = t.attr("data-swiper-parallax") || "0", r = t.attr("data-swiper-parallax-x"), s = t.attr("data-swiper-parallax-y"), r || s ? (r = r || "0", s = s || "0") : x.isHorizontal() ? (r = i, s = "0") : (s = i, r = "0"), r = r.indexOf("%") >= 0 ? parseInt(r, 10) * a * n + "%" : r * a * n + "px", s = s.indexOf("%") >= 0 ? parseInt(s, 10) * a + "%" : s * a + "px", t.transform("translate3d(" + r + ", " + s + ",0px)");
        }function g(e) {
          return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e;
        }if (!(this instanceof t)) return new t(r, s);var h = { direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, autoplay: !1, autoplayDisableOnInteraction: !0, autoplayStopOnLast: !1, iOSEdgeSwipeDetection: !1, iOSEdgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", coverflow: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 }, flip: { slideShadows: !0, limitRotation: !0 }, cube: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 }, fade: { crossFade: !1 }, parallax: !1, zoom: !1, zoomMax: 3, zoomMin: 1, zoomToggle: !0, scrollbar: null, scrollbarHide: !0, scrollbarDraggable: !1, scrollbarSnapOnRelease: !1, keyboardControl: !1, mousewheelControl: !1, mousewheelReleaseOnEdges: !1, mousewheelInvert: !1, mousewheelForceToAxis: !1, mousewheelSensitivity: 1, mousewheelEventsTarged: "container", hashnav: !1, hashnavWatchState: !1, history: !1, replaceState: !1, breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, onlyExternal: !1, threshold: 0, touchMoveStopPropagation: !0, touchReleaseOnEdges: !1, uniqueNavElements: !0, pagination: null, paginationElement: "span", paginationClickable: !1, paginationHide: !1, paginationBulletRender: null, paginationProgressRender: null, paginationFractionRender: null, paginationCustomRender: null, paginationType: "bullets", resistance: !0, resistanceRatio: .85, nextButton: null, prevButton: null, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, lazyLoading: !1, lazyLoadingInPrevNext: !1, lazyLoadingInPrevNextAmount: 1, lazyLoadingOnTransitionStart: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, control: void 0, controlInverse: !1, controlBy: "slide", normalizeSlideIndex: !0, allowSwipeToPrev: !0, allowSwipeToNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", buttonDisabledClass: "swiper-button-disabled", paginationCurrentClass: "swiper-pagination-current", paginationTotalClass: "swiper-pagination-total", paginationHiddenClass: "swiper-pagination-hidden", paginationProgressbarClass: "swiper-pagination-progressbar", paginationClickableClass: "swiper-pagination-clickable", paginationModifierClass: "swiper-pagination-", lazyLoadingClass: "swiper-lazy", lazyStatusLoadingClass: "swiper-lazy-loading", lazyStatusLoadedClass: "swiper-lazy-loaded", lazyPreloaderClass: "swiper-lazy-preloader", notificationClass: "swiper-notification", preloaderClass: "preloader", zoomContainerClass: "swiper-zoom-container", observer: !1, observeParents: !1, a11y: !1, prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", runCallbacksOnInit: !0 },
            f = s && s.virtualTranslate;s = s || {};var w = {};for (var v in s) {
          if ("object" != i(s[v]) || null === s[v] || s[v].nodeType || s[v] === window || s[v] === document || void 0 !== a && s[v] instanceof a || "undefined" != typeof jQuery && s[v] instanceof jQuery) w[v] = s[v];else {
            w[v] = {};for (var A in s[v]) {
              w[v][A] = s[v][A];
            }
          }
        }for (var b in h) {
          if (void 0 === s[b]) s[b] = h[b];else if ("object" == i(s[b])) for (var C in h[b]) {
            void 0 === s[b][C] && (s[b][C] = h[b][C]);
          }
        }var x = this;if (x.params = s, x.originalParams = w, x.classNames = [], void 0 !== e && void 0 !== a && (e = a), (void 0 !== e || (e = void 0 === a ? window.Dom7 || window.Zepto || window.jQuery : a)) && (x.$ = e, x.currentBreakpoint = void 0, x.getActiveBreakpoint = function () {
          if (!x.params.breakpoints) return !1;var e,
              t = !1,
              a = [];for (e in x.params.breakpoints) {
            x.params.breakpoints.hasOwnProperty(e) && a.push(e);
          }a.sort(function (e, t) {
            return parseInt(e, 10) > parseInt(t, 10);
          });for (var i = 0; i < a.length; i++) {
            (e = a[i]) >= window.innerWidth && !t && (t = e);
          }return t || "max";
        }, x.setBreakpoint = function () {
          var e = x.getActiveBreakpoint();if (e && x.currentBreakpoint !== e) {
            var t = e in x.params.breakpoints ? x.params.breakpoints[e] : x.originalParams,
                a = x.params.loop && t.slidesPerView !== x.params.slidesPerView;for (var i in t) {
              x.params[i] = t[i];
            }x.currentBreakpoint = e, a && x.destroyLoop && x.reLoop(!0);
          }
        }, x.params.breakpoints && x.setBreakpoint(), x.container = e(r), 0 !== x.container.length)) {
          if (x.container.length > 1) {
            var y = [];return x.container.each(function () {
              y.push(new t(this, s));
            }), y;
          }x.container[0].swiper = x, x.container.data("swiper", x), x.classNames.push(x.params.containerModifierClass + x.params.direction), x.params.freeMode && x.classNames.push(x.params.containerModifierClass + "free-mode"), x.support.flexbox || (x.classNames.push(x.params.containerModifierClass + "no-flexbox"), x.params.slidesPerColumn = 1), x.params.autoHeight && x.classNames.push(x.params.containerModifierClass + "autoheight"), (x.params.parallax || x.params.watchSlidesVisibility) && (x.params.watchSlidesProgress = !0), x.params.touchReleaseOnEdges && (x.params.resistanceRatio = 0), ["cube", "coverflow", "flip"].indexOf(x.params.effect) >= 0 && (x.support.transforms3d ? (x.params.watchSlidesProgress = !0, x.classNames.push(x.params.containerModifierClass + "3d")) : x.params.effect = "slide"), "slide" !== x.params.effect && x.classNames.push(x.params.containerModifierClass + x.params.effect), "cube" === x.params.effect && (x.params.resistanceRatio = 0, x.params.slidesPerView = 1, x.params.slidesPerColumn = 1, x.params.slidesPerGroup = 1, x.params.centeredSlides = !1, x.params.spaceBetween = 0, x.params.virtualTranslate = !0), "fade" !== x.params.effect && "flip" !== x.params.effect || (x.params.slidesPerView = 1, x.params.slidesPerColumn = 1, x.params.slidesPerGroup = 1, x.params.watchSlidesProgress = !0, x.params.spaceBetween = 0, void 0 === f && (x.params.virtualTranslate = !0)), x.params.grabCursor && x.support.touch && (x.params.grabCursor = !1), x.wrapper = x.container.children("." + x.params.wrapperClass), x.params.pagination && (x.paginationContainer = e(x.params.pagination), x.params.uniqueNavElements && "string" == typeof x.params.pagination && x.paginationContainer.length > 1 && 1 === x.container.find(x.params.pagination).length && (x.paginationContainer = x.container.find(x.params.pagination)), "bullets" === x.params.paginationType && x.params.paginationClickable ? x.paginationContainer.addClass(x.params.paginationModifierClass + "clickable") : x.params.paginationClickable = !1, x.paginationContainer.addClass(x.params.paginationModifierClass + x.params.paginationType)), (x.params.nextButton || x.params.prevButton) && (x.params.nextButton && (x.nextButton = e(x.params.nextButton), x.params.uniqueNavElements && "string" == typeof x.params.nextButton && x.nextButton.length > 1 && 1 === x.container.find(x.params.nextButton).length && (x.nextButton = x.container.find(x.params.nextButton))), x.params.prevButton && (x.prevButton = e(x.params.prevButton), x.params.uniqueNavElements && "string" == typeof x.params.prevButton && x.prevButton.length > 1 && 1 === x.container.find(x.params.prevButton).length && (x.prevButton = x.container.find(x.params.prevButton)))), x.isHorizontal = function () {
            return "horizontal" === x.params.direction;
          }, x.rtl = x.isHorizontal() && ("rtl" === x.container[0].dir.toLowerCase() || "rtl" === x.container.css("direction")), x.rtl && x.classNames.push(x.params.containerModifierClass + "rtl"), x.rtl && (x.wrongRTL = "-webkit-box" === x.wrapper.css("display")), x.params.slidesPerColumn > 1 && x.classNames.push(x.params.containerModifierClass + "multirow"), x.device.android && x.classNames.push(x.params.containerModifierClass + "android"), x.container.addClass(x.classNames.join(" ")), x.translate = 0, x.progress = 0, x.velocity = 0, x.lockSwipeToNext = function () {
            x.params.allowSwipeToNext = !1, !1 === x.params.allowSwipeToPrev && x.params.grabCursor && x.unsetGrabCursor();
          }, x.lockSwipeToPrev = function () {
            x.params.allowSwipeToPrev = !1, !1 === x.params.allowSwipeToNext && x.params.grabCursor && x.unsetGrabCursor();
          }, x.lockSwipes = function () {
            x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !1, x.params.grabCursor && x.unsetGrabCursor();
          }, x.unlockSwipeToNext = function () {
            x.params.allowSwipeToNext = !0, !0 === x.params.allowSwipeToPrev && x.params.grabCursor && x.setGrabCursor();
          }, x.unlockSwipeToPrev = function () {
            x.params.allowSwipeToPrev = !0, !0 === x.params.allowSwipeToNext && x.params.grabCursor && x.setGrabCursor();
          }, x.unlockSwipes = function () {
            x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !0, x.params.grabCursor && x.setGrabCursor();
          }, x.setGrabCursor = function (e) {
            x.container[0].style.cursor = "move", x.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", x.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab", x.container[0].style.cursor = e ? "grabbing" : "grab";
          }, x.unsetGrabCursor = function () {
            x.container[0].style.cursor = "";
          }, x.params.grabCursor && x.setGrabCursor(), x.imagesToLoad = [], x.imagesLoaded = 0, x.loadImage = function (e, t, a, i, r, s) {
            function n() {
              s && s();
            }var o;e.complete && r ? n() : t ? (o = new window.Image(), o.onload = n, o.onerror = n, i && (o.sizes = i), a && (o.srcset = a), t && (o.src = t)) : n();
          }, x.preloadImages = function () {
            function e() {
              void 0 !== x && null !== x && x && (void 0 !== x.imagesLoaded && x.imagesLoaded++, x.imagesLoaded === x.imagesToLoad.length && (x.params.updateOnImagesReady && x.update(), x.emit("onImagesReady", x)));
            }x.imagesToLoad = x.container.find("img");for (var t = 0; t < x.imagesToLoad.length; t++) {
              x.loadImage(x.imagesToLoad[t], x.imagesToLoad[t].currentSrc || x.imagesToLoad[t].getAttribute("src"), x.imagesToLoad[t].srcset || x.imagesToLoad[t].getAttribute("srcset"), x.imagesToLoad[t].sizes || x.imagesToLoad[t].getAttribute("sizes"), !0, e);
            }
          }, x.autoplayTimeoutId = void 0, x.autoplaying = !1, x.autoplayPaused = !1, x.startAutoplay = function () {
            return void 0 === x.autoplayTimeoutId && !!x.params.autoplay && !x.autoplaying && (x.autoplaying = !0, x.emit("onAutoplayStart", x), void o());
          }, x.stopAutoplay = function (e) {
            x.autoplayTimeoutId && (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId), x.autoplaying = !1, x.autoplayTimeoutId = void 0, x.emit("onAutoplayStop", x));
          }, x.pauseAutoplay = function (e) {
            x.autoplayPaused || (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId), x.autoplayPaused = !0, 0 === e ? (x.autoplayPaused = !1, o()) : x.wrapper.transitionEnd(function () {
              x && (x.autoplayPaused = !1, x.autoplaying ? o() : x.stopAutoplay());
            }));
          }, x.minTranslate = function () {
            return -x.snapGrid[0];
          }, x.maxTranslate = function () {
            return -x.snapGrid[x.snapGrid.length - 1];
          }, x.updateAutoHeight = function () {
            var e,
                t = [],
                a = 0;if ("auto" !== x.params.slidesPerView && x.params.slidesPerView > 1) for (e = 0; e < Math.ceil(x.params.slidesPerView); e++) {
              var i = x.activeIndex + e;if (i > x.slides.length) break;t.push(x.slides.eq(i)[0]);
            } else t.push(x.slides.eq(x.activeIndex)[0]);for (e = 0; e < t.length; e++) {
              if (void 0 !== t[e]) {
                var r = t[e].offsetHeight;a = r > a ? r : a;
              }
            }a && x.wrapper.css("height", a + "px");
          }, x.updateContainerSize = function () {
            var e, t;e = void 0 !== x.params.width ? x.params.width : x.container[0].clientWidth, t = void 0 !== x.params.height ? x.params.height : x.container[0].clientHeight, 0 === e && x.isHorizontal() || 0 === t && !x.isHorizontal() || (e = e - parseInt(x.container.css("padding-left"), 10) - parseInt(x.container.css("padding-right"), 10), t = t - parseInt(x.container.css("padding-top"), 10) - parseInt(x.container.css("padding-bottom"), 10), x.width = e, x.height = t, x.size = x.isHorizontal() ? x.width : x.height);
          }, x.updateSlidesSize = function () {
            x.slides = x.wrapper.children("." + x.params.slideClass), x.snapGrid = [], x.slidesGrid = [], x.slidesSizesGrid = [];var e,
                t = x.params.spaceBetween,
                a = -x.params.slidesOffsetBefore,
                i = 0,
                r = 0;if (void 0 !== x.size) {
              "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * x.size), x.virtualSize = -t, x.rtl ? x.slides.css({ marginLeft: "", marginTop: "" }) : x.slides.css({ marginRight: "", marginBottom: "" });var s;x.params.slidesPerColumn > 1 && (s = Math.floor(x.slides.length / x.params.slidesPerColumn) === x.slides.length / x.params.slidesPerColumn ? x.slides.length : Math.ceil(x.slides.length / x.params.slidesPerColumn) * x.params.slidesPerColumn, "auto" !== x.params.slidesPerView && "row" === x.params.slidesPerColumnFill && (s = Math.max(s, x.params.slidesPerView * x.params.slidesPerColumn)));var o,
                  l = x.params.slidesPerColumn,
                  p = s / l,
                  d = p - (x.params.slidesPerColumn * p - x.slides.length);for (e = 0; e < x.slides.length; e++) {
                o = 0;var c = x.slides.eq(e);if (x.params.slidesPerColumn > 1) {
                  var u, m, g;"column" === x.params.slidesPerColumnFill ? (m = Math.floor(e / l), g = e - m * l, (m > d || m === d && g === l - 1) && ++g >= l && (g = 0, m++), u = m + g * s / l, c.css({ "-webkit-box-ordinal-group": u, "-moz-box-ordinal-group": u, "-ms-flex-order": u, "-webkit-order": u, order: u })) : (g = Math.floor(e / p), m = e - g * p), c.css("margin-" + (x.isHorizontal() ? "top" : "left"), 0 !== g && x.params.spaceBetween && x.params.spaceBetween + "px").attr("data-swiper-column", m).attr("data-swiper-row", g);
                }"none" !== c.css("display") && ("auto" === x.params.slidesPerView ? (o = x.isHorizontal() ? c.outerWidth(!0) : c.outerHeight(!0), x.params.roundLengths && (o = n(o))) : (o = (x.size - (x.params.slidesPerView - 1) * t) / x.params.slidesPerView, x.params.roundLengths && (o = n(o)), x.isHorizontal() ? x.slides[e].style.width = o + "px" : x.slides[e].style.height = o + "px"), x.slides[e].swiperSlideSize = o, x.slidesSizesGrid.push(o), x.params.centeredSlides ? (a = a + o / 2 + i / 2 + t, 0 === i && 0 !== e && (a = a - x.size / 2 - t), 0 === e && (a = a - x.size / 2 - t), Math.abs(a) < .001 && (a = 0), r % x.params.slidesPerGroup == 0 && x.snapGrid.push(a), x.slidesGrid.push(a)) : (r % x.params.slidesPerGroup == 0 && x.snapGrid.push(a), x.slidesGrid.push(a), a = a + o + t), x.virtualSize += o + t, i = o, r++);
              }x.virtualSize = Math.max(x.virtualSize, x.size) + x.params.slidesOffsetAfter;var h;if (x.rtl && x.wrongRTL && ("slide" === x.params.effect || "coverflow" === x.params.effect) && x.wrapper.css({ width: x.virtualSize + x.params.spaceBetween + "px" }), x.support.flexbox && !x.params.setWrapperSize || (x.isHorizontal() ? x.wrapper.css({ width: x.virtualSize + x.params.spaceBetween + "px" }) : x.wrapper.css({ height: x.virtualSize + x.params.spaceBetween + "px" })), x.params.slidesPerColumn > 1 && (x.virtualSize = (o + x.params.spaceBetween) * s, x.virtualSize = Math.ceil(x.virtualSize / x.params.slidesPerColumn) - x.params.spaceBetween, x.isHorizontal() ? x.wrapper.css({ width: x.virtualSize + x.params.spaceBetween + "px" }) : x.wrapper.css({ height: x.virtualSize + x.params.spaceBetween + "px" }), x.params.centeredSlides)) {
                for (h = [], e = 0; e < x.snapGrid.length; e++) {
                  x.snapGrid[e] < x.virtualSize + x.snapGrid[0] && h.push(x.snapGrid[e]);
                }x.snapGrid = h;
              }if (!x.params.centeredSlides) {
                for (h = [], e = 0; e < x.snapGrid.length; e++) {
                  x.snapGrid[e] <= x.virtualSize - x.size && h.push(x.snapGrid[e]);
                }x.snapGrid = h, Math.floor(x.virtualSize - x.size) - Math.floor(x.snapGrid[x.snapGrid.length - 1]) > 1 && x.snapGrid.push(x.virtualSize - x.size);
              }0 === x.snapGrid.length && (x.snapGrid = [0]), 0 !== x.params.spaceBetween && (x.isHorizontal() ? x.rtl ? x.slides.css({ marginLeft: t + "px" }) : x.slides.css({ marginRight: t + "px" }) : x.slides.css({ marginBottom: t + "px" })), x.params.watchSlidesProgress && x.updateSlidesOffset();
            }
          }, x.updateSlidesOffset = function () {
            for (var e = 0; e < x.slides.length; e++) {
              x.slides[e].swiperSlideOffset = x.isHorizontal() ? x.slides[e].offsetLeft : x.slides[e].offsetTop;
            }
          }, x.currentSlidesPerView = function () {
            var e,
                t,
                a = 1;if (x.params.centeredSlides) {
              var i,
                  r = x.slides[x.activeIndex].swiperSlideSize;for (e = x.activeIndex + 1; e < x.slides.length; e++) {
                x.slides[e] && !i && (r += x.slides[e].swiperSlideSize, a++, r > x.size && (i = !0));
              }for (t = x.activeIndex - 1; t >= 0; t--) {
                x.slides[t] && !i && (r += x.slides[t].swiperSlideSize, a++, r > x.size && (i = !0));
              }
            } else for (e = x.activeIndex + 1; e < x.slides.length; e++) {
              x.slidesGrid[e] - x.slidesGrid[x.activeIndex] < x.size && a++;
            }return a;
          }, x.updateSlidesProgress = function (e) {
            if (void 0 === e && (e = x.translate || 0), 0 !== x.slides.length) {
              void 0 === x.slides[0].swiperSlideOffset && x.updateSlidesOffset();var t = -e;x.rtl && (t = e), x.slides.removeClass(x.params.slideVisibleClass);for (var a = 0; a < x.slides.length; a++) {
                var i = x.slides[a],
                    r = (t + (x.params.centeredSlides ? x.minTranslate() : 0) - i.swiperSlideOffset) / (i.swiperSlideSize + x.params.spaceBetween);if (x.params.watchSlidesVisibility) {
                  var s = -(t - i.swiperSlideOffset),
                      n = s + x.slidesSizesGrid[a];(s >= 0 && s < x.size || n > 0 && n <= x.size || s <= 0 && n >= x.size) && x.slides.eq(a).addClass(x.params.slideVisibleClass);
                }i.progress = x.rtl ? -r : r;
              }
            }
          }, x.updateProgress = function (e) {
            void 0 === e && (e = x.translate || 0);var t = x.maxTranslate() - x.minTranslate(),
                a = x.isBeginning,
                i = x.isEnd;0 === t ? (x.progress = 0, x.isBeginning = x.isEnd = !0) : (x.progress = (e - x.minTranslate()) / t, x.isBeginning = x.progress <= 0, x.isEnd = x.progress >= 1), x.isBeginning && !a && x.emit("onReachBeginning", x), x.isEnd && !i && x.emit("onReachEnd", x), x.params.watchSlidesProgress && x.updateSlidesProgress(e), x.emit("onProgress", x, x.progress);
          }, x.updateActiveIndex = function () {
            var e,
                t,
                a,
                i = x.rtl ? x.translate : -x.translate;for (t = 0; t < x.slidesGrid.length; t++) {
              void 0 !== x.slidesGrid[t + 1] ? i >= x.slidesGrid[t] && i < x.slidesGrid[t + 1] - (x.slidesGrid[t + 1] - x.slidesGrid[t]) / 2 ? e = t : i >= x.slidesGrid[t] && i < x.slidesGrid[t + 1] && (e = t + 1) : i >= x.slidesGrid[t] && (e = t);
            }x.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0), a = Math.floor(e / x.params.slidesPerGroup), a >= x.snapGrid.length && (a = x.snapGrid.length - 1), e !== x.activeIndex && (x.snapIndex = a, x.previousIndex = x.activeIndex, x.activeIndex = e, x.updateClasses(), x.updateRealIndex());
          }, x.updateRealIndex = function () {
            x.realIndex = parseInt(x.slides.eq(x.activeIndex).attr("data-swiper-slide-index") || x.activeIndex, 10);
          }, x.updateClasses = function () {
            x.slides.removeClass(x.params.slideActiveClass + " " + x.params.slideNextClass + " " + x.params.slidePrevClass + " " + x.params.slideDuplicateActiveClass + " " + x.params.slideDuplicateNextClass + " " + x.params.slideDuplicatePrevClass);var t = x.slides.eq(x.activeIndex);t.addClass(x.params.slideActiveClass), s.loop && (t.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + x.realIndex + '"]').addClass(x.params.slideDuplicateActiveClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + x.realIndex + '"]').addClass(x.params.slideDuplicateActiveClass));var a = t.next("." + x.params.slideClass).addClass(x.params.slideNextClass);x.params.loop && 0 === a.length && (a = x.slides.eq(0), a.addClass(x.params.slideNextClass));var i = t.prev("." + x.params.slideClass).addClass(x.params.slidePrevClass);if (x.params.loop && 0 === i.length && (i = x.slides.eq(-1), i.addClass(x.params.slidePrevClass)), s.loop && (a.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicateNextClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicateNextClass), i.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicatePrevClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicatePrevClass)), x.paginationContainer && x.paginationContainer.length > 0) {
              var r,
                  n = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length;if (x.params.loop ? (r = Math.ceil((x.activeIndex - x.loopedSlides) / x.params.slidesPerGroup), r > x.slides.length - 1 - 2 * x.loopedSlides && (r -= x.slides.length - 2 * x.loopedSlides), r > n - 1 && (r -= n), r < 0 && "bullets" !== x.params.paginationType && (r = n + r)) : r = void 0 !== x.snapIndex ? x.snapIndex : x.activeIndex || 0, "bullets" === x.params.paginationType && x.bullets && x.bullets.length > 0 && (x.bullets.removeClass(x.params.bulletActiveClass), x.paginationContainer.length > 1 ? x.bullets.each(function () {
                e(this).index() === r && e(this).addClass(x.params.bulletActiveClass);
              }) : x.bullets.eq(r).addClass(x.params.bulletActiveClass)), "fraction" === x.params.paginationType && (x.paginationContainer.find("." + x.params.paginationCurrentClass).text(r + 1), x.paginationContainer.find("." + x.params.paginationTotalClass).text(n)), "progress" === x.params.paginationType) {
                var o = (r + 1) / n,
                    l = o,
                    p = 1;x.isHorizontal() || (p = o, l = 1), x.paginationContainer.find("." + x.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + p + ")").transition(x.params.speed);
              }"custom" === x.params.paginationType && x.params.paginationCustomRender && (x.paginationContainer.html(x.params.paginationCustomRender(x, r + 1, n)), x.emit("onPaginationRendered", x, x.paginationContainer[0]));
            }x.params.loop || (x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.isBeginning ? (x.prevButton.addClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.disable(x.prevButton)) : (x.prevButton.removeClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.enable(x.prevButton))), x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.isEnd ? (x.nextButton.addClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.disable(x.nextButton)) : (x.nextButton.removeClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.enable(x.nextButton))));
          }, x.updatePagination = function () {
            if (x.params.pagination && x.paginationContainer && x.paginationContainer.length > 0) {
              var e = "";if ("bullets" === x.params.paginationType) {
                for (var t = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length, a = 0; a < t; a++) {
                  e += x.params.paginationBulletRender ? x.params.paginationBulletRender(x, a, x.params.bulletClass) : "<" + x.params.paginationElement + ' class="' + x.params.bulletClass + '"></' + x.params.paginationElement + ">";
                }x.paginationContainer.html(e), x.bullets = x.paginationContainer.find("." + x.params.bulletClass), x.params.paginationClickable && x.params.a11y && x.a11y && x.a11y.initPagination();
              }"fraction" === x.params.paginationType && (e = x.params.paginationFractionRender ? x.params.paginationFractionRender(x, x.params.paginationCurrentClass, x.params.paginationTotalClass) : '<span class="' + x.params.paginationCurrentClass + '"></span> / <span class="' + x.params.paginationTotalClass + '"></span>', x.paginationContainer.html(e)), "progress" === x.params.paginationType && (e = x.params.paginationProgressRender ? x.params.paginationProgressRender(x, x.params.paginationProgressbarClass) : '<span class="' + x.params.paginationProgressbarClass + '"></span>', x.paginationContainer.html(e)), "custom" !== x.params.paginationType && x.emit("onPaginationRendered", x, x.paginationContainer[0]);
            }
          }, x.update = function (e) {
            function t() {
              x.rtl, x.translate, a = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate()), x.setWrapperTranslate(a), x.updateActiveIndex(), x.updateClasses();
            }if (x) {
              x.updateContainerSize(), x.updateSlidesSize(), x.updateProgress(), x.updatePagination(), x.updateClasses(), x.params.scrollbar && x.scrollbar && x.scrollbar.set();var a;e ? (x.controller && x.controller.spline && (x.controller.spline = void 0), x.params.freeMode ? (t(), x.params.autoHeight && x.updateAutoHeight()) : (("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0)) || t()) : x.params.autoHeight && x.updateAutoHeight();
            }
          }, x.onResize = function (e) {
            x.params.onBeforeResize && x.params.onBeforeResize(x), x.params.breakpoints && x.setBreakpoint();var t = x.params.allowSwipeToPrev,
                a = x.params.allowSwipeToNext;x.params.allowSwipeToPrev = x.params.allowSwipeToNext = !0, x.updateContainerSize(), x.updateSlidesSize(), ("auto" === x.params.slidesPerView || x.params.freeMode || e) && x.updatePagination(), x.params.scrollbar && x.scrollbar && x.scrollbar.set(), x.controller && x.controller.spline && (x.controller.spline = void 0);var i = !1;if (x.params.freeMode) {
              var r = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate());x.setWrapperTranslate(r), x.updateActiveIndex(), x.updateClasses(), x.params.autoHeight && x.updateAutoHeight();
            } else x.updateClasses(), i = ("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0);x.params.lazyLoading && !i && x.lazy && x.lazy.load(), x.params.allowSwipeToPrev = t, x.params.allowSwipeToNext = a, x.params.onAfterResize && x.params.onAfterResize(x);
          }, x.touchEventsDesktop = { start: "mousedown", move: "mousemove", end: "mouseup" }, window.navigator.pointerEnabled ? x.touchEventsDesktop = { start: "pointerdown", move: "pointermove", end: "pointerup" } : window.navigator.msPointerEnabled && (x.touchEventsDesktop = { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" }), x.touchEvents = { start: x.support.touch || !x.params.simulateTouch ? "touchstart" : x.touchEventsDesktop.start, move: x.support.touch || !x.params.simulateTouch ? "touchmove" : x.touchEventsDesktop.move, end: x.support.touch || !x.params.simulateTouch ? "touchend" : x.touchEventsDesktop.end }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === x.params.touchEventsTarget ? x.container : x.wrapper).addClass("swiper-wp8-" + x.params.direction), x.initEvents = function (e) {
            var t = e ? "off" : "on",
                a = e ? "removeEventListener" : "addEventListener",
                i = "container" === x.params.touchEventsTarget ? x.container[0] : x.wrapper[0],
                r = x.support.touch ? i : document,
                n = !!x.params.nested;if (x.browser.ie) i[a](x.touchEvents.start, x.onTouchStart, !1), r[a](x.touchEvents.move, x.onTouchMove, n), r[a](x.touchEvents.end, x.onTouchEnd, !1);else {
              if (x.support.touch) {
                var o = !("touchstart" !== x.touchEvents.start || !x.support.passiveListener || !x.params.passiveListeners) && { passive: !0, capture: !1 };i[a](x.touchEvents.start, x.onTouchStart, o), i[a](x.touchEvents.move, x.onTouchMove, n), i[a](x.touchEvents.end, x.onTouchEnd, o);
              }(s.simulateTouch && !x.device.ios && !x.device.android || s.simulateTouch && !x.support.touch && x.device.ios) && (i[a]("mousedown", x.onTouchStart, !1), document[a]("mousemove", x.onTouchMove, n), document[a]("mouseup", x.onTouchEnd, !1));
            }window[a]("resize", x.onResize), x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.nextButton[t]("click", x.onClickNext), x.params.a11y && x.a11y && x.nextButton[t]("keydown", x.a11y.onEnterKey)), x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.prevButton[t]("click", x.onClickPrev), x.params.a11y && x.a11y && x.prevButton[t]("keydown", x.a11y.onEnterKey)), x.params.pagination && x.params.paginationClickable && (x.paginationContainer[t]("click", "." + x.params.bulletClass, x.onClickIndex), x.params.a11y && x.a11y && x.paginationContainer[t]("keydown", "." + x.params.bulletClass, x.a11y.onEnterKey)), (x.params.preventClicks || x.params.preventClicksPropagation) && i[a]("click", x.preventClicks, !0);
          }, x.attachEvents = function () {
            x.initEvents();
          }, x.detachEvents = function () {
            x.initEvents(!0);
          }, x.allowClick = !0, x.preventClicks = function (e) {
            x.allowClick || (x.params.preventClicks && e.preventDefault(), x.params.preventClicksPropagation && x.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
          }, x.onClickNext = function (e) {
            e.preventDefault(), x.isEnd && !x.params.loop || x.slideNext();
          }, x.onClickPrev = function (e) {
            e.preventDefault(), x.isBeginning && !x.params.loop || x.slidePrev();
          }, x.onClickIndex = function (t) {
            t.preventDefault();var a = e(this).index() * x.params.slidesPerGroup;x.params.loop && (a += x.loopedSlides), x.slideTo(a);
          }, x.updateClickedSlide = function (t) {
            var a = l(t, "." + x.params.slideClass),
                i = !1;if (a) for (var r = 0; r < x.slides.length; r++) {
              x.slides[r] === a && (i = !0);
            }if (!a || !i) return x.clickedSlide = void 0, void (x.clickedIndex = void 0);if (x.clickedSlide = a, x.clickedIndex = e(a).index(), x.params.slideToClickedSlide && void 0 !== x.clickedIndex && x.clickedIndex !== x.activeIndex) {
              var s,
                  n = x.clickedIndex,
                  o = "auto" === x.params.slidesPerView ? x.currentSlidesPerView() : x.params.slidesPerView;if (x.params.loop) {
                if (x.animating) return;s = parseInt(e(x.clickedSlide).attr("data-swiper-slide-index"), 10), x.params.centeredSlides ? n < x.loopedSlides - o / 2 || n > x.slides.length - x.loopedSlides + o / 2 ? (x.fixLoop(), n = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.' + x.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
                  x.slideTo(n);
                }, 0)) : x.slideTo(n) : n > x.slides.length - o ? (x.fixLoop(), n = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.' + x.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
                  x.slideTo(n);
                }, 0)) : x.slideTo(n);
              } else x.slideTo(n);
            }
          };var k,
              B,
              T,
              S,
              z,
              E,
              D,
              M,
              _,
              L,
              P = "input, select, textarea, button, video",
              I = Date.now(),
              F = [];x.animating = !1, x.touches = { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 };var Y, G;x.onTouchStart = function (t) {
            if (t.originalEvent && (t = t.originalEvent), (Y = "touchstart" === t.type) || !("which" in t) || 3 !== t.which) {
              if (x.params.noSwiping && l(t, "." + x.params.noSwipingClass)) return void (x.allowClick = !0);if (!x.params.swipeHandler || l(t, x.params.swipeHandler)) {
                var a = x.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                    i = x.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY;if (!(x.device.ios && x.params.iOSEdgeSwipeDetection && a <= x.params.iOSEdgeSwipeThreshold)) {
                  if (k = !0, B = !1, T = !0, z = void 0, G = void 0, x.touches.startX = a, x.touches.startY = i, S = Date.now(), x.allowClick = !0, x.updateContainerSize(), x.swipeDirection = void 0, x.params.threshold > 0 && (M = !1), "touchstart" !== t.type) {
                    var r = !0;e(t.target).is(P) && (r = !1), document.activeElement && e(document.activeElement).is(P) && document.activeElement.blur(), r && t.preventDefault();
                  }x.emit("onTouchStart", x, t);
                }
              }
            }
          }, x.onTouchMove = function (t) {
            if (t.originalEvent && (t = t.originalEvent), !Y || "mousemove" !== t.type) {
              if (t.preventedByNestedSwiper) return x.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, void (x.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY);if (x.params.onlyExternal) return x.allowClick = !1, void (k && (x.touches.startX = x.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, x.touches.startY = x.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, S = Date.now()));if (Y && x.params.touchReleaseOnEdges && !x.params.loop) if (x.isHorizontal()) {
                if (x.touches.currentX < x.touches.startX && x.translate <= x.maxTranslate() || x.touches.currentX > x.touches.startX && x.translate >= x.minTranslate()) return;
              } else if (x.touches.currentY < x.touches.startY && x.translate <= x.maxTranslate() || x.touches.currentY > x.touches.startY && x.translate >= x.minTranslate()) return;if (Y && document.activeElement && t.target === document.activeElement && e(t.target).is(P)) return B = !0, void (x.allowClick = !1);if (T && x.emit("onTouchMove", x, t), !(t.targetTouches && t.targetTouches.length > 1)) {
                if (x.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, x.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, void 0 === z) {
                  var a;x.isHorizontal() && x.touches.currentY === x.touches.startY || !x.isHorizontal() && x.touches.currentX === x.touches.startX ? z = !1 : (a = 180 * Math.atan2(Math.abs(x.touches.currentY - x.touches.startY), Math.abs(x.touches.currentX - x.touches.startX)) / Math.PI, z = x.isHorizontal() ? a > x.params.touchAngle : 90 - a > x.params.touchAngle);
                }if (z && x.emit("onTouchMoveOpposite", x, t), void 0 === G && (x.touches.currentX === x.touches.startX && x.touches.currentY === x.touches.startY || (G = !0)), k) {
                  if (z) return void (k = !1);if (G) {
                    x.allowClick = !1, x.emit("onSliderMove", x, t), t.preventDefault(), x.params.touchMoveStopPropagation && !x.params.nested && t.stopPropagation(), B || (s.loop && x.fixLoop(), D = x.getWrapperTranslate(), x.setWrapperTransition(0), x.animating && x.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), x.params.autoplay && x.autoplaying && (x.params.autoplayDisableOnInteraction ? x.stopAutoplay() : x.pauseAutoplay()), L = !1, !x.params.grabCursor || !0 !== x.params.allowSwipeToNext && !0 !== x.params.allowSwipeToPrev || x.setGrabCursor(!0)), B = !0;var i = x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY;i *= x.params.touchRatio, x.rtl && (i = -i), x.swipeDirection = i > 0 ? "prev" : "next", E = i + D;var r = !0;if (i > 0 && E > x.minTranslate() ? (r = !1, x.params.resistance && (E = x.minTranslate() - 1 + Math.pow(-x.minTranslate() + D + i, x.params.resistanceRatio))) : i < 0 && E < x.maxTranslate() && (r = !1, x.params.resistance && (E = x.maxTranslate() + 1 - Math.pow(x.maxTranslate() - D - i, x.params.resistanceRatio))), r && (t.preventedByNestedSwiper = !0), !x.params.allowSwipeToNext && "next" === x.swipeDirection && E < D && (E = D), !x.params.allowSwipeToPrev && "prev" === x.swipeDirection && E > D && (E = D), x.params.threshold > 0) {
                      if (!(Math.abs(i) > x.params.threshold || M)) return void (E = D);if (!M) return M = !0, x.touches.startX = x.touches.currentX, x.touches.startY = x.touches.currentY, E = D, void (x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY);
                    }x.params.followFinger && ((x.params.freeMode || x.params.watchSlidesProgress) && x.updateActiveIndex(), x.params.freeMode && (0 === F.length && F.push({ position: x.touches[x.isHorizontal() ? "startX" : "startY"], time: S }), F.push({ position: x.touches[x.isHorizontal() ? "currentX" : "currentY"], time: new window.Date().getTime() })), x.updateProgress(E), x.setWrapperTranslate(E));
                  }
                }
              }
            }
          }, x.onTouchEnd = function (t) {
            if (t.originalEvent && (t = t.originalEvent), T && x.emit("onTouchEnd", x, t), T = !1, k) {
              x.params.grabCursor && B && k && (!0 === x.params.allowSwipeToNext || !0 === x.params.allowSwipeToPrev) && x.setGrabCursor(!1);var a = Date.now(),
                  i = a - S;if (x.allowClick && (x.updateClickedSlide(t), x.emit("onTap", x, t), i < 300 && a - I > 300 && (_ && clearTimeout(_), _ = setTimeout(function () {
                x && (x.params.paginationHide && x.paginationContainer.length > 0 && !e(t.target).hasClass(x.params.bulletClass) && x.paginationContainer.toggleClass(x.params.paginationHiddenClass), x.emit("onClick", x, t));
              }, 300)), i < 300 && a - I < 300 && (_ && clearTimeout(_), x.emit("onDoubleTap", x, t))), I = Date.now(), setTimeout(function () {
                x && (x.allowClick = !0);
              }, 0), !k || !B || !x.swipeDirection || 0 === x.touches.diff || E === D) return void (k = B = !1);k = B = !1;var r;if (r = x.params.followFinger ? x.rtl ? x.translate : -x.translate : -E, x.params.freeMode) {
                if (r < -x.minTranslate()) return void x.slideTo(x.activeIndex);if (r > -x.maxTranslate()) return void (x.slides.length < x.snapGrid.length ? x.slideTo(x.snapGrid.length - 1) : x.slideTo(x.slides.length - 1));if (x.params.freeModeMomentum) {
                  if (F.length > 1) {
                    var s = F.pop(),
                        n = F.pop(),
                        o = s.position - n.position,
                        l = s.time - n.time;x.velocity = o / l, x.velocity = x.velocity / 2, Math.abs(x.velocity) < x.params.freeModeMinimumVelocity && (x.velocity = 0), (l > 150 || new window.Date().getTime() - s.time > 300) && (x.velocity = 0);
                  } else x.velocity = 0;x.velocity = x.velocity * x.params.freeModeMomentumVelocityRatio, F.length = 0;var p = 1e3 * x.params.freeModeMomentumRatio,
                      d = x.velocity * p,
                      c = x.translate + d;x.rtl && (c = -c);var u,
                      m = !1,
                      g = 20 * Math.abs(x.velocity) * x.params.freeModeMomentumBounceRatio;if (c < x.maxTranslate()) x.params.freeModeMomentumBounce ? (c + x.maxTranslate() < -g && (c = x.maxTranslate() - g), u = x.maxTranslate(), m = !0, L = !0) : c = x.maxTranslate();else if (c > x.minTranslate()) x.params.freeModeMomentumBounce ? (c - x.minTranslate() > g && (c = x.minTranslate() + g), u = x.minTranslate(), m = !0, L = !0) : c = x.minTranslate();else if (x.params.freeModeSticky) {
                    var h,
                        f = 0;for (f = 0; f < x.snapGrid.length; f += 1) {
                      if (x.snapGrid[f] > -c) {
                        h = f;break;
                      }
                    }c = Math.abs(x.snapGrid[h] - c) < Math.abs(x.snapGrid[h - 1] - c) || "next" === x.swipeDirection ? x.snapGrid[h] : x.snapGrid[h - 1], x.rtl || (c = -c);
                  }if (0 !== x.velocity) p = x.rtl ? Math.abs((-c - x.translate) / x.velocity) : Math.abs((c - x.translate) / x.velocity);else if (x.params.freeModeSticky) return void x.slideReset();x.params.freeModeMomentumBounce && m ? (x.updateProgress(u), x.setWrapperTransition(p), x.setWrapperTranslate(c), x.onTransitionStart(), x.animating = !0, x.wrapper.transitionEnd(function () {
                    x && L && (x.emit("onMomentumBounce", x), x.setWrapperTransition(x.params.speed), x.setWrapperTranslate(u), x.wrapper.transitionEnd(function () {
                      x && x.onTransitionEnd();
                    }));
                  })) : x.velocity ? (x.updateProgress(c), x.setWrapperTransition(p), x.setWrapperTranslate(c), x.onTransitionStart(), x.animating || (x.animating = !0, x.wrapper.transitionEnd(function () {
                    x && x.onTransitionEnd();
                  }))) : x.updateProgress(c), x.updateActiveIndex();
                }return void ((!x.params.freeModeMomentum || i >= x.params.longSwipesMs) && (x.updateProgress(), x.updateActiveIndex()));
              }var w,
                  v = 0,
                  A = x.slidesSizesGrid[0];for (w = 0; w < x.slidesGrid.length; w += x.params.slidesPerGroup) {
                void 0 !== x.slidesGrid[w + x.params.slidesPerGroup] ? r >= x.slidesGrid[w] && r < x.slidesGrid[w + x.params.slidesPerGroup] && (v = w, A = x.slidesGrid[w + x.params.slidesPerGroup] - x.slidesGrid[w]) : r >= x.slidesGrid[w] && (v = w, A = x.slidesGrid[x.slidesGrid.length - 1] - x.slidesGrid[x.slidesGrid.length - 2]);
              }var b = (r - x.slidesGrid[v]) / A;if (i > x.params.longSwipesMs) {
                if (!x.params.longSwipes) return void x.slideTo(x.activeIndex);"next" === x.swipeDirection && (b >= x.params.longSwipesRatio ? x.slideTo(v + x.params.slidesPerGroup) : x.slideTo(v)), "prev" === x.swipeDirection && (b > 1 - x.params.longSwipesRatio ? x.slideTo(v + x.params.slidesPerGroup) : x.slideTo(v));
              } else {
                if (!x.params.shortSwipes) return void x.slideTo(x.activeIndex);"next" === x.swipeDirection && x.slideTo(v + x.params.slidesPerGroup), "prev" === x.swipeDirection && x.slideTo(v);
              }
            }
          }, x._slideTo = function (e, t) {
            return x.slideTo(e, t, !0, !0);
          }, x.slideTo = function (e, t, a, i) {
            void 0 === a && (a = !0), void 0 === e && (e = 0), e < 0 && (e = 0), x.snapIndex = Math.floor(e / x.params.slidesPerGroup), x.snapIndex >= x.snapGrid.length && (x.snapIndex = x.snapGrid.length - 1);var r = -x.snapGrid[x.snapIndex];if (x.params.autoplay && x.autoplaying && (i || !x.params.autoplayDisableOnInteraction ? x.pauseAutoplay(t) : x.stopAutoplay()), x.updateProgress(r), x.params.normalizeSlideIndex) for (var s = 0; s < x.slidesGrid.length; s++) {
              -Math.floor(100 * r) >= Math.floor(100 * x.slidesGrid[s]) && (e = s);
            }return !(!x.params.allowSwipeToNext && r < x.translate && r < x.minTranslate() || !x.params.allowSwipeToPrev && r > x.translate && r > x.maxTranslate() && (x.activeIndex || 0) !== e || (void 0 === t && (t = x.params.speed), x.previousIndex = x.activeIndex || 0, x.activeIndex = e, x.updateRealIndex(), x.rtl && -r === x.translate || !x.rtl && r === x.translate ? (x.params.autoHeight && x.updateAutoHeight(), x.updateClasses(), "slide" !== x.params.effect && x.setWrapperTranslate(r), 1) : (x.updateClasses(), x.onTransitionStart(a), 0 === t || x.browser.lteIE9 ? (x.setWrapperTranslate(r), x.setWrapperTransition(0), x.onTransitionEnd(a)) : (x.setWrapperTranslate(r), x.setWrapperTransition(t), x.animating || (x.animating = !0, x.wrapper.transitionEnd(function () {
              x && x.onTransitionEnd(a);
            }))), 0)));
          }, x.onTransitionStart = function (e) {
            void 0 === e && (e = !0), x.params.autoHeight && x.updateAutoHeight(), x.lazy && x.lazy.onTransitionStart(), e && (x.emit("onTransitionStart", x), x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeStart", x), x.activeIndex > x.previousIndex ? x.emit("onSlideNextStart", x) : x.emit("onSlidePrevStart", x)));
          }, x.onTransitionEnd = function (e) {
            x.animating = !1, x.setWrapperTransition(0), void 0 === e && (e = !0), x.lazy && x.lazy.onTransitionEnd(), e && (x.emit("onTransitionEnd", x), x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeEnd", x), x.activeIndex > x.previousIndex ? x.emit("onSlideNextEnd", x) : x.emit("onSlidePrevEnd", x))), x.params.history && x.history && x.history.setHistory(x.params.history, x.activeIndex), x.params.hashnav && x.hashnav && x.hashnav.setHash();
          }, x.slideNext = function (e, t, a) {
            return x.params.loop ? !x.animating && (x.fixLoop(), x.container[0].clientLeft, x.slideTo(x.activeIndex + x.params.slidesPerGroup, t, e, a)) : x.slideTo(x.activeIndex + x.params.slidesPerGroup, t, e, a);
          }, x._slideNext = function (e) {
            return x.slideNext(!0, e, !0);
          }, x.slidePrev = function (e, t, a) {
            return x.params.loop ? !x.animating && (x.fixLoop(), x.container[0].clientLeft, x.slideTo(x.activeIndex - 1, t, e, a)) : x.slideTo(x.activeIndex - 1, t, e, a);
          }, x._slidePrev = function (e) {
            return x.slidePrev(!0, e, !0);
          }, x.slideReset = function (e, t, a) {
            return x.slideTo(x.activeIndex, t, e);
          }, x.disableTouchControl = function () {
            return x.params.onlyExternal = !0, !0;
          }, x.enableTouchControl = function () {
            return x.params.onlyExternal = !1, !0;
          }, x.setWrapperTransition = function (e, t) {
            x.wrapper.transition(e), "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTransition(e), x.params.parallax && x.parallax && x.parallax.setTransition(e), x.params.scrollbar && x.scrollbar && x.scrollbar.setTransition(e), x.params.control && x.controller && x.controller.setTransition(e, t), x.emit("onSetTransition", x, e);
          }, x.setWrapperTranslate = function (e, t, a) {
            var i = 0,
                r = 0;x.isHorizontal() ? i = x.rtl ? -e : e : r = e, x.params.roundLengths && (i = n(i), r = n(r)), x.params.virtualTranslate || (x.support.transforms3d ? x.wrapper.transform("translate3d(" + i + "px, " + r + "px, 0px)") : x.wrapper.transform("translate(" + i + "px, " + r + "px)")), x.translate = x.isHorizontal() ? i : r;var s,
                o = x.maxTranslate() - x.minTranslate();s = 0 === o ? 0 : (e - x.minTranslate()) / o, s !== x.progress && x.updateProgress(e), t && x.updateActiveIndex(), "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTranslate(x.translate), x.params.parallax && x.parallax && x.parallax.setTranslate(x.translate), x.params.scrollbar && x.scrollbar && x.scrollbar.setTranslate(x.translate), x.params.control && x.controller && x.controller.setTranslate(x.translate, a), x.emit("onSetTranslate", x, x.translate);
          }, x.getTranslate = function (e, t) {
            var a, i, r, s;return void 0 === t && (t = "x"), x.params.virtualTranslate ? x.rtl ? -x.translate : x.translate : (r = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (i = r.transform || r.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(function (e) {
              return e.replace(",", ".");
            }).join(", ")), s = new window.WebKitCSSMatrix("none" === i ? "" : i)) : (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = s.toString().split(",")), "x" === t && (i = window.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = window.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), x.rtl && i && (i = -i), i || 0);
          }, x.getWrapperTranslate = function (e) {
            return void 0 === e && (e = x.isHorizontal() ? "x" : "y"), x.getTranslate(x.wrapper[0], e);
          }, x.observers = [], x.initObservers = function () {
            if (x.params.observeParents) for (var e = x.container.parents(), t = 0; t < e.length; t++) {
              p(e[t]);
            }p(x.container[0], { childList: !1 }), p(x.wrapper[0], { attributes: !1 });
          }, x.disconnectObservers = function () {
            for (var e = 0; e < x.observers.length; e++) {
              x.observers[e].disconnect();
            }x.observers = [];
          }, x.createLoop = function () {
            x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove();var t = x.wrapper.children("." + x.params.slideClass);"auto" !== x.params.slidesPerView || x.params.loopedSlides || (x.params.loopedSlides = t.length), x.loopedSlides = parseInt(x.params.loopedSlides || x.params.slidesPerView, 10), x.loopedSlides = x.loopedSlides + x.params.loopAdditionalSlides, x.loopedSlides > t.length && (x.loopedSlides = t.length);var a,
                i = [],
                r = [];for (t.each(function (a, s) {
              var n = e(this);a < x.loopedSlides && r.push(s), a < t.length && a >= t.length - x.loopedSlides && i.push(s), n.attr("data-swiper-slide-index", a);
            }), a = 0; a < r.length; a++) {
              x.wrapper.append(e(r[a].cloneNode(!0)).addClass(x.params.slideDuplicateClass));
            }for (a = i.length - 1; a >= 0; a--) {
              x.wrapper.prepend(e(i[a].cloneNode(!0)).addClass(x.params.slideDuplicateClass));
            }
          }, x.destroyLoop = function () {
            x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove(), x.slides.removeAttr("data-swiper-slide-index");
          }, x.reLoop = function (e) {
            var t = x.activeIndex - x.loopedSlides;x.destroyLoop(), x.createLoop(), x.updateSlidesSize(), e && x.slideTo(t + x.loopedSlides, 0, !1);
          }, x.fixLoop = function () {
            var e;x.activeIndex < x.loopedSlides ? (e = x.slides.length - 3 * x.loopedSlides + x.activeIndex, e += x.loopedSlides, x.slideTo(e, 0, !1, !0)) : ("auto" === x.params.slidesPerView && x.activeIndex >= 2 * x.loopedSlides || x.activeIndex > x.slides.length - 2 * x.params.slidesPerView) && (e = -x.slides.length + x.activeIndex + x.loopedSlides, e += x.loopedSlides, x.slideTo(e, 0, !1, !0));
          }, x.appendSlide = function (e) {
            if (x.params.loop && x.destroyLoop(), "object" == (void 0 === e ? "undefined" : i(e)) && e.length) for (var t = 0; t < e.length; t++) {
              e[t] && x.wrapper.append(e[t]);
            } else x.wrapper.append(e);x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0);
          }, x.prependSlide = function (e) {
            x.params.loop && x.destroyLoop();var t = x.activeIndex + 1;if ("object" == (void 0 === e ? "undefined" : i(e)) && e.length) {
              for (var a = 0; a < e.length; a++) {
                e[a] && x.wrapper.prepend(e[a]);
              }t = x.activeIndex + e.length;
            } else x.wrapper.prepend(e);x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0), x.slideTo(t, 0, !1);
          }, x.removeSlide = function (e) {
            x.params.loop && (x.destroyLoop(), x.slides = x.wrapper.children("." + x.params.slideClass));var t,
                a = x.activeIndex;if ("object" == (void 0 === e ? "undefined" : i(e)) && e.length) {
              for (var r = 0; r < e.length; r++) {
                t = e[r], x.slides[t] && x.slides.eq(t).remove(), t < a && a--;
              }a = Math.max(a, 0);
            } else t = e, x.slides[t] && x.slides.eq(t).remove(), t < a && a--, a = Math.max(a, 0);x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0), x.params.loop ? x.slideTo(a + x.loopedSlides, 0, !1) : x.slideTo(a, 0, !1);
          }, x.removeAllSlides = function () {
            for (var e = [], t = 0; t < x.slides.length; t++) {
              e.push(t);
            }x.removeSlide(e);
          }, x.effects = { fade: { setTranslate: function setTranslate() {
                for (var e = 0; e < x.slides.length; e++) {
                  var t = x.slides.eq(e),
                      a = t[0].swiperSlideOffset,
                      i = -a;x.params.virtualTranslate || (i -= x.translate);var r = 0;x.isHorizontal() || (r = i, i = 0);var s = x.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);t.css({ opacity: s }).transform("translate3d(" + i + "px, " + r + "px, 0px)");
                }
              }, setTransition: function setTransition(e) {
                if (x.slides.transition(e), x.params.virtualTranslate && 0 !== e) {
                  var t = !1;x.slides.transitionEnd(function () {
                    if (!t && x) {
                      t = !0, x.animating = !1;for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], a = 0; a < e.length; a++) {
                        x.wrapper.trigger(e[a]);
                      }
                    }
                  });
                }
              } }, flip: { setTranslate: function setTranslate() {
                for (var t = 0; t < x.slides.length; t++) {
                  var a = x.slides.eq(t),
                      i = a[0].progress;x.params.flip.limitRotation && (i = Math.max(Math.min(a[0].progress, 1), -1));var r = a[0].swiperSlideOffset,
                      s = -180 * i,
                      n = s,
                      o = 0,
                      l = -r,
                      p = 0;if (x.isHorizontal() ? x.rtl && (n = -n) : (p = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(i)) + x.slides.length, x.params.flip.slideShadows) {
                    var d = x.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                        c = x.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");0 === d.length && (d = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), a.append(d)), 0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(c)), d.length && (d[0].style.opacity = Math.max(-i, 0)), c.length && (c[0].style.opacity = Math.max(i, 0));
                  }a.transform("translate3d(" + l + "px, " + p + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
                }
              }, setTransition: function setTransition(t) {
                if (x.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), x.params.virtualTranslate && 0 !== t) {
                  var a = !1;x.slides.eq(x.activeIndex).transitionEnd(function () {
                    if (!a && x && e(this).hasClass(x.params.slideActiveClass)) {
                      a = !0, x.animating = !1;for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < t.length; i++) {
                        x.wrapper.trigger(t[i]);
                      }
                    }
                  });
                }
              } }, cube: { setTranslate: function setTranslate() {
                var t,
                    a = 0;x.params.cube.shadow && (x.isHorizontal() ? (t = x.wrapper.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), x.wrapper.append(t)), t.css({ height: x.width + "px" })) : (t = x.container.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), x.container.append(t))));for (var i = 0; i < x.slides.length; i++) {
                  var r = x.slides.eq(i),
                      s = 90 * i,
                      n = Math.floor(s / 360);x.rtl && (s = -s, n = Math.floor(-s / 360));var o = Math.max(Math.min(r[0].progress, 1), -1),
                      l = 0,
                      p = 0,
                      d = 0;i % 4 == 0 ? (l = 4 * -n * x.size, d = 0) : (i - 1) % 4 == 0 ? (l = 0, d = 4 * -n * x.size) : (i - 2) % 4 == 0 ? (l = x.size + 4 * n * x.size, d = x.size) : (i - 3) % 4 == 0 && (l = -x.size, d = 3 * x.size + 4 * x.size * n), x.rtl && (l = -l), x.isHorizontal() || (p = l, l = 0);var c = "rotateX(" + (x.isHorizontal() ? 0 : -s) + "deg) rotateY(" + (x.isHorizontal() ? s : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + d + "px)";if (o <= 1 && o > -1 && (a = 90 * i + 90 * o, x.rtl && (a = 90 * -i - 90 * o)), r.transform(c), x.params.cube.slideShadows) {
                    var u = x.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                        m = x.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");0 === u.length && (u = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), r.append(u)), 0 === m.length && (m = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), r.append(m)), u.length && (u[0].style.opacity = Math.max(-o, 0)), m.length && (m[0].style.opacity = Math.max(o, 0));
                  }
                }if (x.wrapper.css({ "-webkit-transform-origin": "50% 50% -" + x.size / 2 + "px", "-moz-transform-origin": "50% 50% -" + x.size / 2 + "px", "-ms-transform-origin": "50% 50% -" + x.size / 2 + "px", "transform-origin": "50% 50% -" + x.size / 2 + "px" }), x.params.cube.shadow) if (x.isHorizontal()) t.transform("translate3d(0px, " + (x.width / 2 + x.params.cube.shadowOffset) + "px, " + -x.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + x.params.cube.shadowScale + ")");else {
                  var g = Math.abs(a) - 90 * Math.floor(Math.abs(a) / 90),
                      h = 1.5 - (Math.sin(2 * g * Math.PI / 360) / 2 + Math.cos(2 * g * Math.PI / 360) / 2),
                      f = x.params.cube.shadowScale,
                      w = x.params.cube.shadowScale / h,
                      v = x.params.cube.shadowOffset;t.transform("scale3d(" + f + ", 1, " + w + ") translate3d(0px, " + (x.height / 2 + v) + "px, " + -x.height / 2 / w + "px) rotateX(-90deg)");
                }var A = x.isSafari || x.isUiWebView ? -x.size / 2 : 0;x.wrapper.transform("translate3d(0px,0," + A + "px) rotateX(" + (x.isHorizontal() ? 0 : a) + "deg) rotateY(" + (x.isHorizontal() ? -a : 0) + "deg)");
              }, setTransition: function setTransition(e) {
                x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), x.params.cube.shadow && !x.isHorizontal() && x.container.find(".swiper-cube-shadow").transition(e);
              } }, coverflow: { setTranslate: function setTranslate() {
                for (var t = x.translate, a = x.isHorizontal() ? -t + x.width / 2 : -t + x.height / 2, i = x.isHorizontal() ? x.params.coverflow.rotate : -x.params.coverflow.rotate, r = x.params.coverflow.depth, s = 0, n = x.slides.length; s < n; s++) {
                  var o = x.slides.eq(s),
                      l = x.slidesSizesGrid[s],
                      p = o[0].swiperSlideOffset,
                      d = (a - p - l / 2) / l * x.params.coverflow.modifier,
                      c = x.isHorizontal() ? i * d : 0,
                      u = x.isHorizontal() ? 0 : i * d,
                      m = -r * Math.abs(d),
                      g = x.isHorizontal() ? 0 : x.params.coverflow.stretch * d,
                      h = x.isHorizontal() ? x.params.coverflow.stretch * d : 0;Math.abs(h) < .001 && (h = 0), Math.abs(g) < .001 && (g = 0), Math.abs(m) < .001 && (m = 0), Math.abs(c) < .001 && (c = 0), Math.abs(u) < .001 && (u = 0);var f = "translate3d(" + h + "px," + g + "px," + m + "px)  rotateX(" + u + "deg) rotateY(" + c + "deg)";if (o.transform(f), o[0].style.zIndex = 1 - Math.abs(Math.round(d)), x.params.coverflow.slideShadows) {
                    var w = x.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                        v = x.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");0 === w.length && (w = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), o.append(w)), 0 === v.length && (v = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(v)), w.length && (w[0].style.opacity = d > 0 ? d : 0), v.length && (v[0].style.opacity = -d > 0 ? -d : 0);
                  }
                }x.browser.ie && (x.wrapper[0].style.perspectiveOrigin = a + "px 50%");
              }, setTransition: function setTransition(e) {
                x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
              } } }, x.lazy = { initialImageLoaded: !1, loadImageInSlide: function loadImageInSlide(t, a) {
              if (void 0 !== t && (void 0 === a && (a = !0), 0 !== x.slides.length)) {
                var i = x.slides.eq(t),
                    r = i.find("." + x.params.lazyLoadingClass + ":not(." + x.params.lazyStatusLoadedClass + "):not(." + x.params.lazyStatusLoadingClass + ")");!i.hasClass(x.params.lazyLoadingClass) || i.hasClass(x.params.lazyStatusLoadedClass) || i.hasClass(x.params.lazyStatusLoadingClass) || (r = r.add(i[0])), 0 !== r.length && r.each(function () {
                  var t = e(this);t.addClass(x.params.lazyStatusLoadingClass);var r = t.attr("data-background"),
                      s = t.attr("data-src"),
                      n = t.attr("data-srcset"),
                      o = t.attr("data-sizes");x.loadImage(t[0], s || r, n, o, !1, function () {
                    if (void 0 !== x && null !== x && x) {
                      if (r ? (t.css("background-image", 'url("' + r + '")'), t.removeAttr("data-background")) : (n && (t.attr("srcset", n), t.removeAttr("data-srcset")), o && (t.attr("sizes", o), t.removeAttr("data-sizes")), s && (t.attr("src", s), t.removeAttr("data-src"))), t.addClass(x.params.lazyStatusLoadedClass).removeClass(x.params.lazyStatusLoadingClass), i.find("." + x.params.lazyPreloaderClass + ", ." + x.params.preloaderClass).remove(), x.params.loop && a) {
                        var e = i.attr("data-swiper-slide-index");if (i.hasClass(x.params.slideDuplicateClass)) {
                          var l = x.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + x.params.slideDuplicateClass + ")");x.lazy.loadImageInSlide(l.index(), !1);
                        } else {
                          var p = x.wrapper.children("." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');x.lazy.loadImageInSlide(p.index(), !1);
                        }
                      }x.emit("onLazyImageReady", x, i[0], t[0]);
                    }
                  }), x.emit("onLazyImageLoad", x, i[0], t[0]);
                });
              }
            }, load: function load() {
              var t,
                  a = x.params.slidesPerView;if ("auto" === a && (a = 0), x.lazy.initialImageLoaded || (x.lazy.initialImageLoaded = !0), x.params.watchSlidesVisibility) x.wrapper.children("." + x.params.slideVisibleClass).each(function () {
                x.lazy.loadImageInSlide(e(this).index());
              });else if (a > 1) for (t = x.activeIndex; t < x.activeIndex + a; t++) {
                x.slides[t] && x.lazy.loadImageInSlide(t);
              } else x.lazy.loadImageInSlide(x.activeIndex);if (x.params.lazyLoadingInPrevNext) if (a > 1 || x.params.lazyLoadingInPrevNextAmount && x.params.lazyLoadingInPrevNextAmount > 1) {
                var i = x.params.lazyLoadingInPrevNextAmount,
                    r = a,
                    s = Math.min(x.activeIndex + r + Math.max(i, r), x.slides.length),
                    n = Math.max(x.activeIndex - Math.max(r, i), 0);for (t = x.activeIndex + a; t < s; t++) {
                  x.slides[t] && x.lazy.loadImageInSlide(t);
                }for (t = n; t < x.activeIndex; t++) {
                  x.slides[t] && x.lazy.loadImageInSlide(t);
                }
              } else {
                var o = x.wrapper.children("." + x.params.slideNextClass);o.length > 0 && x.lazy.loadImageInSlide(o.index());var l = x.wrapper.children("." + x.params.slidePrevClass);l.length > 0 && x.lazy.loadImageInSlide(l.index());
              }
            }, onTransitionStart: function onTransitionStart() {
              x.params.lazyLoading && (x.params.lazyLoadingOnTransitionStart || !x.params.lazyLoadingOnTransitionStart && !x.lazy.initialImageLoaded) && x.lazy.load();
            }, onTransitionEnd: function onTransitionEnd() {
              x.params.lazyLoading && !x.params.lazyLoadingOnTransitionStart && x.lazy.load();
            } }, x.scrollbar = { isTouched: !1, setDragPosition: function setDragPosition(e) {
              var t = x.scrollbar,
                  a = x.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
                  i = a - t.track.offset()[x.isHorizontal() ? "left" : "top"] - t.dragSize / 2,
                  r = -x.minTranslate() * t.moveDivider,
                  s = -x.maxTranslate() * t.moveDivider;i < r ? i = r : i > s && (i = s), i = -i / t.moveDivider, x.updateProgress(i), x.setWrapperTranslate(i, !0);
            }, dragStart: function dragStart(e) {
              var t = x.scrollbar;t.isTouched = !0, e.preventDefault(), e.stopPropagation(), t.setDragPosition(e), clearTimeout(t.dragTimeout), t.track.transition(0), x.params.scrollbarHide && t.track.css("opacity", 1), x.wrapper.transition(100), t.drag.transition(100), x.emit("onScrollbarDragStart", x);
            }, dragMove: function dragMove(e) {
              var t = x.scrollbar;t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), x.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), x.emit("onScrollbarDragMove", x));
            }, dragEnd: function dragEnd(e) {
              var t = x.scrollbar;t.isTouched && (t.isTouched = !1, x.params.scrollbarHide && (clearTimeout(t.dragTimeout), t.dragTimeout = setTimeout(function () {
                t.track.css("opacity", 0), t.track.transition(400);
              }, 1e3)), x.emit("onScrollbarDragEnd", x), x.params.scrollbarSnapOnRelease && x.slideReset());
            }, draggableEvents: function () {
              return !1 !== x.params.simulateTouch || x.support.touch ? x.touchEvents : x.touchEventsDesktop;
            }(), enableDraggable: function enableDraggable() {
              var t = x.scrollbar,
                  a = x.support.touch ? t.track : document;e(t.track).on(t.draggableEvents.start, t.dragStart), e(a).on(t.draggableEvents.move, t.dragMove), e(a).on(t.draggableEvents.end, t.dragEnd);
            }, disableDraggable: function disableDraggable() {
              var t = x.scrollbar,
                  a = x.support.touch ? t.track : document;e(t.track).off(t.draggableEvents.start, t.dragStart), e(a).off(t.draggableEvents.move, t.dragMove), e(a).off(t.draggableEvents.end, t.dragEnd);
            }, set: function set() {
              if (x.params.scrollbar) {
                var t = x.scrollbar;t.track = e(x.params.scrollbar), x.params.uniqueNavElements && "string" == typeof x.params.scrollbar && t.track.length > 1 && 1 === x.container.find(x.params.scrollbar).length && (t.track = x.container.find(x.params.scrollbar)), t.drag = t.track.find(".swiper-scrollbar-drag"), 0 === t.drag.length && (t.drag = e('<div class="swiper-scrollbar-drag"></div>'), t.track.append(t.drag)), t.drag[0].style.width = "", t.drag[0].style.height = "", t.trackSize = x.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight, t.divider = x.size / x.virtualSize, t.moveDivider = t.divider * (t.trackSize / x.size), t.dragSize = t.trackSize * t.divider, x.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px", t.divider >= 1 ? t.track[0].style.display = "none" : t.track[0].style.display = "", x.params.scrollbarHide && (t.track[0].style.opacity = 0);
              }
            }, setTranslate: function setTranslate() {
              if (x.params.scrollbar) {
                var e,
                    t = x.scrollbar,
                    a = (x.translate, t.dragSize);e = (t.trackSize - t.dragSize) * x.progress, x.rtl && x.isHorizontal() ? (e = -e, e > 0 ? (a = t.dragSize - e, e = 0) : -e + t.dragSize > t.trackSize && (a = t.trackSize + e)) : e < 0 ? (a = t.dragSize + e, e = 0) : e + t.dragSize > t.trackSize && (a = t.trackSize - e), x.isHorizontal() ? (x.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), t.drag[0].style.width = a + "px") : (x.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), t.drag[0].style.height = a + "px"), x.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function () {
                  t.track[0].style.opacity = 0, t.track.transition(400);
                }, 1e3));
              }
            }, setTransition: function setTransition(e) {
              x.params.scrollbar && x.scrollbar.drag.transition(e);
            } }, x.controller = { LinearSpline: function LinearSpline(e, t) {
              var a = function () {
                var e, t, a;return function (i, r) {
                  for (t = -1, e = i.length; e - t > 1;) {
                    i[a = e + t >> 1] <= r ? t = a : e = a;
                  }return e;
                };
              }();this.x = e, this.y = t, this.lastIndex = e.length - 1;var i, r;this.x.length, this.interpolate = function (e) {
                return e ? (r = a(this.x, e), i = r - 1, (e - this.x[i]) * (this.y[r] - this.y[i]) / (this.x[r] - this.x[i]) + this.y[i]) : 0;
              };
            }, getInterpolateFunction: function getInterpolateFunction(e) {
              x.controller.spline || (x.controller.spline = x.params.loop ? new x.controller.LinearSpline(x.slidesGrid, e.slidesGrid) : new x.controller.LinearSpline(x.snapGrid, e.snapGrid));
            }, setTranslate: function setTranslate(e, a) {
              function i(t) {
                e = t.rtl && "horizontal" === t.params.direction ? -x.translate : x.translate, "slide" === x.params.controlBy && (x.controller.getInterpolateFunction(t), s = -x.controller.spline.interpolate(-e)), s && "container" !== x.params.controlBy || (r = (t.maxTranslate() - t.minTranslate()) / (x.maxTranslate() - x.minTranslate()), s = (e - x.minTranslate()) * r + t.minTranslate()), x.params.controlInverse && (s = t.maxTranslate() - s), t.updateProgress(s), t.setWrapperTranslate(s, !1, x), t.updateActiveIndex();
              }var r,
                  s,
                  n = x.params.control;if (Array.isArray(n)) for (var o = 0; o < n.length; o++) {
                n[o] !== a && n[o] instanceof t && i(n[o]);
              } else n instanceof t && a !== n && i(n);
            }, setTransition: function setTransition(e, a) {
              function i(t) {
                t.setWrapperTransition(e, x), 0 !== e && (t.onTransitionStart(), t.wrapper.transitionEnd(function () {
                  s && (t.params.loop && "slide" === x.params.controlBy && t.fixLoop(), t.onTransitionEnd());
                }));
              }var r,
                  s = x.params.control;if (Array.isArray(s)) for (r = 0; r < s.length; r++) {
                s[r] !== a && s[r] instanceof t && i(s[r]);
              } else s instanceof t && a !== s && i(s);
            } }, x.hashnav = { onHashCange: function onHashCange(e, t) {
              var a = document.location.hash.replace("#", "");a !== x.slides.eq(x.activeIndex).attr("data-hash") && x.slideTo(x.wrapper.children("." + x.params.slideClass + '[data-hash="' + a + '"]').index());
            }, attachEvents: function attachEvents(t) {
              var a = t ? "off" : "on";e(window)[a]("hashchange", x.hashnav.onHashCange);
            }, setHash: function setHash() {
              if (x.hashnav.initialized && x.params.hashnav) if (x.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + x.slides.eq(x.activeIndex).attr("data-hash") || "");else {
                var e = x.slides.eq(x.activeIndex),
                    t = e.attr("data-hash") || e.attr("data-history");document.location.hash = t || "";
              }
            }, init: function init() {
              if (x.params.hashnav && !x.params.history) {
                x.hashnav.initialized = !0;var e = document.location.hash.replace("#", "");if (e) for (var t = 0, a = x.slides.length; t < a; t++) {
                  var i = x.slides.eq(t),
                      r = i.attr("data-hash") || i.attr("data-history");if (r === e && !i.hasClass(x.params.slideDuplicateClass)) {
                    var s = i.index();x.slideTo(s, 0, x.params.runCallbacksOnInit, !0);
                  }
                }x.params.hashnavWatchState && x.hashnav.attachEvents();
              }
            }, destroy: function destroy() {
              x.params.hashnavWatchState && x.hashnav.attachEvents(!0);
            } }, x.history = { init: function init() {
              if (x.params.history) {
                if (!window.history || !window.history.pushState) return x.params.history = !1, void (x.params.hashnav = !0);x.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, x.params.runCallbacksOnInit), x.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState));
              }
            }, setHistoryPopState: function setHistoryPopState() {
              x.history.paths = x.history.getPathValues(), x.history.scrollToSlide(x.params.speed, x.history.paths.value, !1);
            }, getPathValues: function getPathValues() {
              var e = window.location.pathname.slice(1).split("/"),
                  t = e.length;return { key: e[t - 2], value: e[t - 1] };
            }, setHistory: function setHistory(e, t) {
              if (x.history.initialized && x.params.history) {
                var a = x.slides.eq(t),
                    i = this.slugify(a.attr("data-history"));window.location.pathname.includes(e) || (i = e + "/" + i), x.params.replaceState ? window.history.replaceState(null, null, i) : window.history.pushState(null, null, i);
              }
            }, slugify: function slugify(e) {
              return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
            }, scrollToSlide: function scrollToSlide(e, t, a) {
              if (t) for (var i = 0, r = x.slides.length; i < r; i++) {
                var s = x.slides.eq(i),
                    n = this.slugify(s.attr("data-history"));if (n === t && !s.hasClass(x.params.slideDuplicateClass)) {
                  var o = s.index();x.slideTo(o, e, a);
                }
              } else x.slideTo(0, e, a);
            } }, x.disableKeyboardControl = function () {
            x.params.keyboardControl = !1, e(document).off("keydown", d);
          }, x.enableKeyboardControl = function () {
            x.params.keyboardControl = !0, e(document).on("keydown", d);
          }, x.mousewheel = { event: !1, lastScrollTime: new window.Date().getTime() }, x.params.mousewheelControl && (x.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
            var e = "onwheel" in document;if (!e) {
              var t = document.createElement("div");t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel;
            }return !e && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (e = document.implementation.hasFeature("Events.wheel", "3.0")), e;
          }() ? "wheel" : "mousewheel"), x.disableMousewheelControl = function () {
            if (!x.mousewheel.event) return !1;var t = x.container;return "container" !== x.params.mousewheelEventsTarged && (t = e(x.params.mousewheelEventsTarged)), t.off(x.mousewheel.event, u), x.params.mousewheelControl = !1, !0;
          }, x.enableMousewheelControl = function () {
            if (!x.mousewheel.event) return !1;var t = x.container;return "container" !== x.params.mousewheelEventsTarged && (t = e(x.params.mousewheelEventsTarged)), t.on(x.mousewheel.event, u), x.params.mousewheelControl = !0, !0;
          }, x.parallax = { setTranslate: function setTranslate() {
              x.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                m(this, x.progress);
              }), x.slides.each(function () {
                var t = e(this);t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                  m(this, Math.min(Math.max(t[0].progress, -1), 1));
                });
              });
            }, setTransition: function setTransition(t) {
              void 0 === t && (t = x.params.speed), x.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                var a = e(this),
                    i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || t;0 === t && (i = 0), a.transition(i);
              });
            } }, x.zoom = { scale: 1, currentScale: 1, isScaling: !1, gesture: { slide: void 0, slideWidth: void 0, slideHeight: void 0, image: void 0, imageWrap: void 0, zoomMax: x.params.zoomMax }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 }, getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
              if (e.targetTouches.length < 2) return 1;var t = e.targetTouches[0].pageX,
                  a = e.targetTouches[0].pageY,
                  i = e.targetTouches[1].pageX,
                  r = e.targetTouches[1].pageY;return Math.sqrt(Math.pow(i - t, 2) + Math.pow(r - a, 2));
            }, onGestureStart: function onGestureStart(t) {
              var a = x.zoom;if (!x.support.gestures) {
                if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;a.gesture.scaleStart = a.getDistanceBetweenTouches(t);
              }if (!(a.gesture.slide && a.gesture.slide.length || (a.gesture.slide = e(this), 0 === a.gesture.slide.length && (a.gesture.slide = x.slides.eq(x.activeIndex)), a.gesture.image = a.gesture.slide.find("img, svg, canvas"), a.gesture.imageWrap = a.gesture.image.parent("." + x.params.zoomContainerClass), a.gesture.zoomMax = a.gesture.imageWrap.attr("data-swiper-zoom") || x.params.zoomMax, 0 !== a.gesture.imageWrap.length))) return void (a.gesture.image = void 0);a.gesture.image.transition(0), a.isScaling = !0;
            }, onGestureChange: function onGestureChange(e) {
              var t = x.zoom;if (!x.support.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;t.gesture.scaleMove = t.getDistanceBetweenTouches(e);
              }t.gesture.image && 0 !== t.gesture.image.length && (x.support.gestures ? t.scale = e.scale * t.currentScale : t.scale = t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale, t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)), t.scale < x.params.zoomMin && (t.scale = x.params.zoomMin + 1 - Math.pow(x.params.zoomMin - t.scale + 1, .5)), t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"));
            }, onGestureEnd: function onGestureEnd(e) {
              var t = x.zoom;!x.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), x.params.zoomMin), t.gesture.image.transition(x.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"), t.currentScale = t.scale, t.isScaling = !1, 1 === t.scale && (t.gesture.slide = void 0));
            }, onTouchStart: function onTouchStart(e, t) {
              var a = e.zoom;a.gesture.image && 0 !== a.gesture.image.length && (a.image.isTouched || ("android" === e.device.os && t.preventDefault(), a.image.isTouched = !0, a.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, a.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY));
            }, onTouchMove: function onTouchMove(e) {
              var t = x.zoom;if (t.gesture.image && 0 !== t.gesture.image.length && (x.allowClick = !1, t.image.isTouched && t.gesture.slide)) {
                t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth, t.image.height = t.gesture.image[0].offsetHeight, t.image.startX = x.getTranslate(t.gesture.imageWrap[0], "x") || 0, t.image.startY = x.getTranslate(t.gesture.imageWrap[0], "y") || 0, t.gesture.slideWidth = t.gesture.slide[0].offsetWidth, t.gesture.slideHeight = t.gesture.slide[0].offsetHeight, t.gesture.imageWrap.transition(0), x.rtl && (t.image.startX = -t.image.startX), x.rtl && (t.image.startY = -t.image.startY));var a = t.image.width * t.scale,
                    i = t.image.height * t.scale;if (!(a < t.gesture.slideWidth && i < t.gesture.slideHeight)) {
                  if (t.image.minX = Math.min(t.gesture.slideWidth / 2 - a / 2, 0), t.image.maxX = -t.image.minX, t.image.minY = Math.min(t.gesture.slideHeight / 2 - i / 2, 0), t.image.maxY = -t.image.minY, t.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, t.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !t.image.isMoved && !t.isScaling) {
                    if (x.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x) return void (t.image.isTouched = !1);if (!x.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y) return void (t.image.isTouched = !1);
                  }e.preventDefault(), e.stopPropagation(), t.image.isMoved = !0, t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX, t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY, t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8)), t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8)), t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8)), t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8)), t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x), t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y), t.velocity.prevTime || (t.velocity.prevTime = Date.now()), t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2, t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2, Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0), Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0), t.velocity.prevPositionX = t.image.touchesCurrent.x, t.velocity.prevPositionY = t.image.touchesCurrent.y, t.velocity.prevTime = Date.now(), t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)");
                }
              }
            }, onTouchEnd: function onTouchEnd(e, t) {
              var a = e.zoom;if (a.gesture.image && 0 !== a.gesture.image.length) {
                if (!a.image.isTouched || !a.image.isMoved) return a.image.isTouched = !1, void (a.image.isMoved = !1);a.image.isTouched = !1, a.image.isMoved = !1;var i = 300,
                    r = 300,
                    s = a.velocity.x * i,
                    n = a.image.currentX + s,
                    o = a.velocity.y * r,
                    l = a.image.currentY + o;0 !== a.velocity.x && (i = Math.abs((n - a.image.currentX) / a.velocity.x)), 0 !== a.velocity.y && (r = Math.abs((l - a.image.currentY) / a.velocity.y));var p = Math.max(i, r);a.image.currentX = n, a.image.currentY = l;var d = a.image.width * a.scale,
                    c = a.image.height * a.scale;a.image.minX = Math.min(a.gesture.slideWidth / 2 - d / 2, 0), a.image.maxX = -a.image.minX, a.image.minY = Math.min(a.gesture.slideHeight / 2 - c / 2, 0), a.image.maxY = -a.image.minY, a.image.currentX = Math.max(Math.min(a.image.currentX, a.image.maxX), a.image.minX), a.image.currentY = Math.max(Math.min(a.image.currentY, a.image.maxY), a.image.minY), a.gesture.imageWrap.transition(p).transform("translate3d(" + a.image.currentX + "px, " + a.image.currentY + "px,0)");
              }
            }, onTransitionEnd: function onTransitionEnd(e) {
              var t = e.zoom;t.gesture.slide && e.previousIndex !== e.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"), t.gesture.imageWrap.transform("translate3d(0,0,0)"), t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0, t.scale = t.currentScale = 1);
            }, toggleZoom: function toggleZoom(t, a) {
              var i = t.zoom;if (i.gesture.slide || (i.gesture.slide = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex), i.gesture.image = i.gesture.slide.find("img, svg, canvas"), i.gesture.imageWrap = i.gesture.image.parent("." + t.params.zoomContainerClass)), i.gesture.image && 0 !== i.gesture.image.length) {
                var r, s, n, o, l, p, d, c, u, m, g, h, f, w, v, A, b, C;void 0 === i.image.touchesStart.x && a ? (r = "touchend" === a.type ? a.changedTouches[0].pageX : a.pageX, s = "touchend" === a.type ? a.changedTouches[0].pageY : a.pageY) : (r = i.image.touchesStart.x, s = i.image.touchesStart.y), i.scale && 1 !== i.scale ? (i.scale = i.currentScale = 1, i.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), i.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), i.gesture.slide = void 0) : (i.scale = i.currentScale = i.gesture.imageWrap.attr("data-swiper-zoom") || t.params.zoomMax, a ? (b = i.gesture.slide[0].offsetWidth, C = i.gesture.slide[0].offsetHeight, n = i.gesture.slide.offset().left, o = i.gesture.slide.offset().top, l = n + b / 2 - r, p = o + C / 2 - s, u = i.gesture.image[0].offsetWidth, m = i.gesture.image[0].offsetHeight, g = u * i.scale, h = m * i.scale, f = Math.min(b / 2 - g / 2, 0), w = Math.min(C / 2 - h / 2, 0), v = -f, A = -w, d = l * i.scale, c = p * i.scale, d < f && (d = f), d > v && (d = v), c < w && (c = w), c > A && (c = A)) : (d = 0, c = 0), i.gesture.imageWrap.transition(300).transform("translate3d(" + d + "px, " + c + "px,0)"), i.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + i.scale + ")"));
              }
            }, attachEvents: function attachEvents(t) {
              var a = t ? "off" : "on";if (x.params.zoom) {
                var i = (x.slides, !("touchstart" !== x.touchEvents.start || !x.support.passiveListener || !x.params.passiveListeners) && { passive: !0, capture: !1 });x.support.gestures ? (x.slides[a]("gesturestart", x.zoom.onGestureStart, i), x.slides[a]("gesturechange", x.zoom.onGestureChange, i), x.slides[a]("gestureend", x.zoom.onGestureEnd, i)) : "touchstart" === x.touchEvents.start && (x.slides[a](x.touchEvents.start, x.zoom.onGestureStart, i), x.slides[a](x.touchEvents.move, x.zoom.onGestureChange, i), x.slides[a](x.touchEvents.end, x.zoom.onGestureEnd, i)), x[a]("touchStart", x.zoom.onTouchStart), x.slides.each(function (t, i) {
                  e(i).find("." + x.params.zoomContainerClass).length > 0 && e(i)[a](x.touchEvents.move, x.zoom.onTouchMove);
                }), x[a]("touchEnd", x.zoom.onTouchEnd), x[a]("transitionEnd", x.zoom.onTransitionEnd), x.params.zoomToggle && x.on("doubleTap", x.zoom.toggleZoom);
              }
            }, init: function init() {
              x.zoom.attachEvents();
            }, destroy: function destroy() {
              x.zoom.attachEvents(!0);
            } }, x._plugins = [];for (var O in x.plugins) {
            var W = x.plugins[O](x, x.params[O]);W && x._plugins.push(W);
          }return x.callPlugins = function (e) {
            for (var t = 0; t < x._plugins.length; t++) {
              e in x._plugins[t] && x._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }
          }, x.emitterEventListeners = {}, x.emit = function (e) {
            x.params[e] && x.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);var t;if (x.emitterEventListeners[e]) for (t = 0; t < x.emitterEventListeners[e].length; t++) {
              x.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }x.callPlugins && x.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
          }, x.on = function (e, t) {
            return e = g(e), x.emitterEventListeners[e] || (x.emitterEventListeners[e] = []), x.emitterEventListeners[e].push(t), x;
          }, x.off = function (e, t) {
            var a;if (e = g(e), void 0 === t) return x.emitterEventListeners[e] = [], x;if (x.emitterEventListeners[e] && 0 !== x.emitterEventListeners[e].length) {
              for (a = 0; a < x.emitterEventListeners[e].length; a++) {
                x.emitterEventListeners[e][a] === t && x.emitterEventListeners[e].splice(a, 1);
              }return x;
            }
          }, x.once = function (e, t) {
            e = g(e);var a = function a() {
              t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), x.off(e, a);
            };return x.on(e, a), x;
          }, x.a11y = { makeFocusable: function makeFocusable(e) {
              return e.attr("tabIndex", "0"), e;
            }, addRole: function addRole(e, t) {
              return e.attr("role", t), e;
            }, addLabel: function addLabel(e, t) {
              return e.attr("aria-label", t), e;
            }, disable: function disable(e) {
              return e.attr("aria-disabled", !0), e;
            }, enable: function enable(e) {
              return e.attr("aria-disabled", !1), e;
            }, onEnterKey: function onEnterKey(t) {
              13 === t.keyCode && (e(t.target).is(x.params.nextButton) ? (x.onClickNext(t), x.isEnd ? x.a11y.notify(x.params.lastSlideMessage) : x.a11y.notify(x.params.nextSlideMessage)) : e(t.target).is(x.params.prevButton) && (x.onClickPrev(t), x.isBeginning ? x.a11y.notify(x.params.firstSlideMessage) : x.a11y.notify(x.params.prevSlideMessage)), e(t.target).is("." + x.params.bulletClass) && e(t.target)[0].click());
            }, liveRegion: e('<span class="' + x.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'), notify: function notify(e) {
              var t = x.a11y.liveRegion;0 !== t.length && (t.html(""), t.html(e));
            }, init: function init() {
              x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.a11y.makeFocusable(x.nextButton), x.a11y.addRole(x.nextButton, "button"), x.a11y.addLabel(x.nextButton, x.params.nextSlideMessage)), x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.a11y.makeFocusable(x.prevButton), x.a11y.addRole(x.prevButton, "button"), x.a11y.addLabel(x.prevButton, x.params.prevSlideMessage)), e(x.container).append(x.a11y.liveRegion);
            }, initPagination: function initPagination() {
              x.params.pagination && x.params.paginationClickable && x.bullets && x.bullets.length && x.bullets.each(function () {
                var t = e(this);x.a11y.makeFocusable(t), x.a11y.addRole(t, "button"), x.a11y.addLabel(t, x.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1));
              });
            }, destroy: function destroy() {
              x.a11y.liveRegion && x.a11y.liveRegion.length > 0 && x.a11y.liveRegion.remove();
            } }, x.init = function () {
            x.params.loop && x.createLoop(), x.updateContainerSize(), x.updateSlidesSize(), x.updatePagination(), x.params.scrollbar && x.scrollbar && (x.scrollbar.set(), x.params.scrollbarDraggable && x.scrollbar.enableDraggable()), "slide" !== x.params.effect && x.effects[x.params.effect] && (x.params.loop || x.updateProgress(), x.effects[x.params.effect].setTranslate()), x.params.loop ? x.slideTo(x.params.initialSlide + x.loopedSlides, 0, x.params.runCallbacksOnInit) : (x.slideTo(x.params.initialSlide, 0, x.params.runCallbacksOnInit), 0 === x.params.initialSlide && (x.parallax && x.params.parallax && x.parallax.setTranslate(), x.lazy && x.params.lazyLoading && (x.lazy.load(), x.lazy.initialImageLoaded = !0))), x.attachEvents(), x.params.observer && x.support.observer && x.initObservers(), x.params.preloadImages && !x.params.lazyLoading && x.preloadImages(), x.params.zoom && x.zoom && x.zoom.init(), x.params.autoplay && x.startAutoplay(), x.params.keyboardControl && x.enableKeyboardControl && x.enableKeyboardControl(), x.params.mousewheelControl && x.enableMousewheelControl && x.enableMousewheelControl(), x.params.hashnavReplaceState && (x.params.replaceState = x.params.hashnavReplaceState), x.params.history && x.history && x.history.init(), x.params.hashnav && x.hashnav && x.hashnav.init(), x.params.a11y && x.a11y && x.a11y.init(), x.emit("onInit", x);
          }, x.cleanupStyles = function () {
            x.container.removeClass(x.classNames.join(" ")).removeAttr("style"), x.wrapper.removeAttr("style"), x.slides && x.slides.length && x.slides.removeClass([x.params.slideVisibleClass, x.params.slideActiveClass, x.params.slideNextClass, x.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), x.paginationContainer && x.paginationContainer.length && x.paginationContainer.removeClass(x.params.paginationHiddenClass), x.bullets && x.bullets.length && x.bullets.removeClass(x.params.bulletActiveClass), x.params.prevButton && e(x.params.prevButton).removeClass(x.params.buttonDisabledClass), x.params.nextButton && e(x.params.nextButton).removeClass(x.params.buttonDisabledClass), x.params.scrollbar && x.scrollbar && (x.scrollbar.track && x.scrollbar.track.length && x.scrollbar.track.removeAttr("style"), x.scrollbar.drag && x.scrollbar.drag.length && x.scrollbar.drag.removeAttr("style"));
          }, x.destroy = function (e, t) {
            x.detachEvents(), x.stopAutoplay(), x.params.scrollbar && x.scrollbar && x.params.scrollbarDraggable && x.scrollbar.disableDraggable(), x.params.loop && x.destroyLoop(), t && x.cleanupStyles(), x.disconnectObservers(), x.params.zoom && x.zoom && x.zoom.destroy(), x.params.keyboardControl && x.disableKeyboardControl && x.disableKeyboardControl(), x.params.mousewheelControl && x.disableMousewheelControl && x.disableMousewheelControl(), x.params.a11y && x.a11y && x.a11y.destroy(), x.params.history && !x.params.replaceState && window.removeEventListener("popstate", x.history.setHistoryPopState), x.params.hashnav && x.hashnav && x.hashnav.destroy(), x.emit("onDestroy"), !1 !== e && (x = null);
          }, x.init(), x;
        }
      };t.prototype = { isSafari: function () {
          var e = window.navigator.userAgent.toLowerCase();return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
        }(), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent), isArray: function isArray(e) {
          return "[object Array]" === Object.prototype.toString.apply(e);
        }, browser: { ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled, ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1, lteIE9: function () {
            var e = document.createElement("div");return e.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e", 1 === e.getElementsByTagName("i").length;
          }() }, device: function () {
          var e = window.navigator.userAgent,
              t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
              a = e.match(/(iPad).*OS\s([\d_]+)/),
              i = e.match(/(iPod)(.*OS\s([\d_]+))?/),
              r = !a && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);return { ios: a || r || i, android: t };
        }(), support: { touch: window.Modernizr && !0 === Modernizr.touch || function () {
            return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
          }(), transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function () {
            var e = document.createElement("div").style;return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e;
          }(), flexbox: function () {
            for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a++) {
              if (t[a] in e) return !0;
            }
          }(), observer: function () {
            return "MutationObserver" in window || "WebkitMutationObserver" in window;
          }(), passiveListener: function () {
            var e = !1;try {
              var t = Object.defineProperty({}, "passive", { get: function get() {
                  e = !0;
                } });window.addEventListener("testPassiveListener", null, t);
            } catch (e) {}return e;
          }(), gestures: function () {
            return "ongesturestart" in window;
          }() }, plugins: {} };for (var a = function () {
        var e = function e(_e) {
          var t = this,
              a = 0;for (a = 0; a < _e.length; a++) {
            t[a] = _e[a];
          }return t.length = _e.length, this;
        },
            t = function t(_t, a) {
          var i = [],
              r = 0;if (_t && !a && _t instanceof e) return _t;if (_t) if ("string" == typeof _t) {
            var s,
                n,
                o = _t.trim();if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
              var l = "div";for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), n = document.createElement(l), n.innerHTML = _t, r = 0; r < n.childNodes.length; r++) {
                i.push(n.childNodes[r]);
              }
            } else for (s = a || "#" !== _t[0] || _t.match(/[ .<>:~]/) ? (a || document).querySelectorAll(_t) : [document.getElementById(_t.split("#")[1])], r = 0; r < s.length; r++) {
              s[r] && i.push(s[r]);
            }
          } else if (_t.nodeType || _t === window || _t === document) i.push(_t);else if (_t.length > 0 && _t[0].nodeType) for (r = 0; r < _t.length; r++) {
            i.push(_t[r]);
          }return new e(i);
        };return e.prototype = { addClass: function addClass(e) {
            if (void 0 === e) return this;for (var t = e.split(" "), a = 0; a < t.length; a++) {
              for (var i = 0; i < this.length; i++) {
                this[i].classList.add(t[a]);
              }
            }return this;
          }, removeClass: function removeClass(e) {
            for (var t = e.split(" "), a = 0; a < t.length; a++) {
              for (var i = 0; i < this.length; i++) {
                this[i].classList.remove(t[a]);
              }
            }return this;
          }, hasClass: function hasClass(e) {
            return !!this[0] && this[0].classList.contains(e);
          }, toggleClass: function toggleClass(e) {
            for (var t = e.split(" "), a = 0; a < t.length; a++) {
              for (var i = 0; i < this.length; i++) {
                this[i].classList.toggle(t[a]);
              }
            }return this;
          }, attr: function attr(e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;for (var a = 0; a < this.length; a++) {
              if (2 === arguments.length) this[a].setAttribute(e, t);else for (var i in e) {
                this[a][i] = e[i], this[a].setAttribute(i, e[i]);
              }
            }return this;
          }, removeAttr: function removeAttr(e) {
            for (var t = 0; t < this.length; t++) {
              this[t].removeAttribute(e);
            }return this;
          }, data: function data(e, t) {
            if (void 0 !== t) {
              for (var a = 0; a < this.length; a++) {
                var i = this[a];i.dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
              }return this;
            }if (this[0]) {
              var r = this[0].getAttribute("data-" + e);return r || (this[0].dom7ElementDataStorage && (e in this[0].dom7ElementDataStorage) ? this[0].dom7ElementDataStorage[e] : void 0);
            }
          }, transform: function transform(e) {
            for (var t = 0; t < this.length; t++) {
              var a = this[t].style;a.webkitTransform = a.MsTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = e;
            }return this;
          }, transition: function transition(e) {
            "string" != typeof e && (e += "ms");for (var t = 0; t < this.length; t++) {
              var a = this[t].style;a.webkitTransitionDuration = a.MsTransitionDuration = a.msTransitionDuration = a.MozTransitionDuration = a.OTransitionDuration = a.transitionDuration = e;
            }return this;
          }, on: function on(e, a, i, r) {
            function s(e) {
              var r = e.target;if (t(r).is(a)) i.call(r, e);else for (var s = t(r).parents(), n = 0; n < s.length; n++) {
                t(s[n]).is(a) && i.call(s[n], e);
              }
            }var n,
                o,
                l = e.split(" ");for (n = 0; n < this.length; n++) {
              if ("function" == typeof a || !1 === a) for ("function" == typeof a && (i = arguments[1], r = arguments[2] || !1), o = 0; o < l.length; o++) {
                this[n].addEventListener(l[o], i, r);
              } else for (o = 0; o < l.length; o++) {
                this[n].dom7LiveListeners || (this[n].dom7LiveListeners = []), this[n].dom7LiveListeners.push({ listener: i, liveListener: s }), this[n].addEventListener(l[o], s, r);
              }
            }return this;
          }, off: function off(e, t, a, i) {
            for (var r = e.split(" "), s = 0; s < r.length; s++) {
              for (var n = 0; n < this.length; n++) {
                if ("function" == typeof t || !1 === t) "function" == typeof t && (a = arguments[1], i = arguments[2] || !1), this[n].removeEventListener(r[s], a, i);else if (this[n].dom7LiveListeners) for (var o = 0; o < this[n].dom7LiveListeners.length; o++) {
                  this[n].dom7LiveListeners[o].listener === a && this[n].removeEventListener(r[s], this[n].dom7LiveListeners[o].liveListener, i);
                }
              }
            }return this;
          }, once: function once(e, t, a, i) {
            function r(n) {
              a(n), s.off(e, t, r, i);
            }var s = this;"function" == typeof t && (t = !1, a = arguments[1], i = arguments[2]), s.on(e, t, r, i);
          }, trigger: function trigger(e, t) {
            for (var a = 0; a < this.length; a++) {
              var i;try {
                i = new window.CustomEvent(e, { detail: t, bubbles: !0, cancelable: !0 });
              } catch (a) {
                i = document.createEvent("Event"), i.initEvent(e, !0, !0), i.detail = t;
              }this[a].dispatchEvent(i);
            }return this;
          }, transitionEnd: function transitionEnd(e) {
            function t(s) {
              if (s.target === this) for (e.call(this, s), a = 0; a < i.length; a++) {
                r.off(i[a], t);
              }
            }var a,
                i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                r = this;if (e) for (a = 0; a < i.length; a++) {
              r.on(i[a], t);
            }return this;
          }, width: function width() {
            return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null;
          }, outerWidth: function outerWidth(e) {
            return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
          }, height: function height() {
            return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null;
          }, outerHeight: function outerHeight(e) {
            return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null;
          }, offset: function offset() {
            if (this.length > 0) {
              var e = this[0],
                  t = e.getBoundingClientRect(),
                  a = document.body,
                  i = e.clientTop || a.clientTop || 0,
                  r = e.clientLeft || a.clientLeft || 0,
                  s = window.pageYOffset || e.scrollTop,
                  n = window.pageXOffset || e.scrollLeft;return { top: t.top + s - i, left: t.left + n - r };
            }return null;
          }, css: function css(e, t) {
            var a;if (1 === arguments.length) {
              if ("string" != typeof e) {
                for (a = 0; a < this.length; a++) {
                  for (var i in e) {
                    this[a].style[i] = e[i];
                  }
                }return this;
              }if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e);
            }if (2 === arguments.length && "string" == typeof e) {
              for (a = 0; a < this.length; a++) {
                this[a].style[e] = t;
              }return this;
            }return this;
          }, each: function each(e) {
            for (var t = 0; t < this.length; t++) {
              e.call(this[t], t, this[t]);
            }return this;
          }, html: function html(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;for (var t = 0; t < this.length; t++) {
              this[t].innerHTML = e;
            }return this;
          }, text: function text(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;for (var t = 0; t < this.length; t++) {
              this[t].textContent = e;
            }return this;
          }, is: function is(a) {
            if (!this[0]) return !1;var i, r;if ("string" == typeof a) {
              var s = this[0];if (s === document) return a === document;if (s === window) return a === window;if (s.matches) return s.matches(a);if (s.webkitMatchesSelector) return s.webkitMatchesSelector(a);if (s.mozMatchesSelector) return s.mozMatchesSelector(a);if (s.msMatchesSelector) return s.msMatchesSelector(a);for (i = t(a), r = 0; r < i.length; r++) {
                if (i[r] === this[0]) return !0;
              }return !1;
            }if (a === document) return this[0] === document;if (a === window) return this[0] === window;if (a.nodeType || a instanceof e) {
              for (i = a.nodeType ? [a] : a, r = 0; r < i.length; r++) {
                if (i[r] === this[0]) return !0;
              }return !1;
            }return !1;
          }, index: function index() {
            if (this[0]) {
              for (var e = this[0], t = 0; null !== (e = e.previousSibling);) {
                1 === e.nodeType && t++;
              }return t;
            }
          }, eq: function eq(t) {
            if (void 0 === t) return this;var a,
                i = this.length;return t > i - 1 ? new e([]) : t < 0 ? (a = i + t, new e(a < 0 ? [] : [this[a]])) : new e([this[t]]);
          }, append: function append(t) {
            var a, i;for (a = 0; a < this.length; a++) {
              if ("string" == typeof t) {
                var r = document.createElement("div");for (r.innerHTML = t; r.firstChild;) {
                  this[a].appendChild(r.firstChild);
                }
              } else if (t instanceof e) for (i = 0; i < t.length; i++) {
                this[a].appendChild(t[i]);
              } else this[a].appendChild(t);
            }return this;
          }, prepend: function prepend(t) {
            var a, i;for (a = 0; a < this.length; a++) {
              if ("string" == typeof t) {
                var r = document.createElement("div");for (r.innerHTML = t, i = r.childNodes.length - 1; i >= 0; i--) {
                  this[a].insertBefore(r.childNodes[i], this[a].childNodes[0]);
                }
              } else if (t instanceof e) for (i = 0; i < t.length; i++) {
                this[a].insertBefore(t[i], this[a].childNodes[0]);
              } else this[a].insertBefore(t, this[a].childNodes[0]);
            }return this;
          }, insertBefore: function insertBefore(e) {
            for (var a = t(e), i = 0; i < this.length; i++) {
              if (1 === a.length) a[0].parentNode.insertBefore(this[i], a[0]);else if (a.length > 1) for (var r = 0; r < a.length; r++) {
                a[r].parentNode.insertBefore(this[i].cloneNode(!0), a[r]);
              }
            }
          }, insertAfter: function insertAfter(e) {
            for (var a = t(e), i = 0; i < this.length; i++) {
              if (1 === a.length) a[0].parentNode.insertBefore(this[i], a[0].nextSibling);else if (a.length > 1) for (var r = 0; r < a.length; r++) {
                a[r].parentNode.insertBefore(this[i].cloneNode(!0), a[r].nextSibling);
              }
            }
          }, next: function next(a) {
            return new e(this.length > 0 ? a ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(a) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : []);
          }, nextAll: function nextAll(a) {
            var i = [],
                r = this[0];if (!r) return new e([]);for (; r.nextElementSibling;) {
              var s = r.nextElementSibling;a ? t(s).is(a) && i.push(s) : i.push(s), r = s;
            }return new e(i);
          }, prev: function prev(a) {
            return new e(this.length > 0 ? a ? this[0].previousElementSibling && t(this[0].previousElementSibling).is(a) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : []);
          }, prevAll: function prevAll(a) {
            var i = [],
                r = this[0];if (!r) return new e([]);for (; r.previousElementSibling;) {
              var s = r.previousElementSibling;a ? t(s).is(a) && i.push(s) : i.push(s), r = s;
            }return new e(i);
          }, parent: function parent(e) {
            for (var a = [], i = 0; i < this.length; i++) {
              e ? t(this[i].parentNode).is(e) && a.push(this[i].parentNode) : a.push(this[i].parentNode);
            }return t(t.unique(a));
          }, parents: function parents(e) {
            for (var a = [], i = 0; i < this.length; i++) {
              for (var r = this[i].parentNode; r;) {
                e ? t(r).is(e) && a.push(r) : a.push(r), r = r.parentNode;
              }
            }return t(t.unique(a));
          }, find: function find(t) {
            for (var a = [], i = 0; i < this.length; i++) {
              for (var r = this[i].querySelectorAll(t), s = 0; s < r.length; s++) {
                a.push(r[s]);
              }
            }return new e(a);
          }, children: function children(a) {
            for (var i = [], r = 0; r < this.length; r++) {
              for (var s = this[r].childNodes, n = 0; n < s.length; n++) {
                a ? 1 === s[n].nodeType && t(s[n]).is(a) && i.push(s[n]) : 1 === s[n].nodeType && i.push(s[n]);
              }
            }return new e(t.unique(i));
          }, remove: function remove() {
            for (var e = 0; e < this.length; e++) {
              this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            }return this;
          }, add: function add() {
            var e,
                a,
                i = this;for (e = 0; e < arguments.length; e++) {
              var r = t(arguments[e]);for (a = 0; a < r.length; a++) {
                i[i.length] = r[a], i.length++;
              }
            }return i;
          } }, t.fn = e.prototype, t.unique = function (e) {
          for (var t = [], a = 0; a < e.length; a++) {
            -1 === t.indexOf(e[a]) && t.push(e[a]);
          }return t;
        }, t;
      }(), r = ["jQuery", "Zepto", "Dom7"], s = 0; s < r.length; s++) {
        window[r[s]] && function (e) {
          e.fn.swiper = function (a) {
            var i;return e(this).each(function () {
              var e = new t(this, a);i || (i = e);
            }), i;
          };
        }(window[r[s]]);
      }var n;n = void 0 === a ? window.Dom7 || window.Zepto || window.jQuery : a, n && ("transitionEnd" in n.fn || (n.fn.transitionEnd = function (e) {
        function t(s) {
          if (s.target === this) for (e.call(this, s), a = 0; a < i.length; a++) {
            r.off(i[a], t);
          }
        }var a,
            i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            r = this;if (e) for (a = 0; a < i.length; a++) {
          r.on(i[a], t);
        }return this;
      }), "transform" in n.fn || (n.fn.transform = function (e) {
        for (var t = 0; t < this.length; t++) {
          var a = this[t].style;a.webkitTransform = a.MsTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = e;
        }return this;
      }), "transition" in n.fn || (n.fn.transition = function (e) {
        "string" != typeof e && (e += "ms");for (var t = 0; t < this.length; t++) {
          var a = this[t].style;a.webkitTransitionDuration = a.MsTransitionDuration = a.msTransitionDuration = a.MozTransitionDuration = a.OTransitionDuration = a.transitionDuration = e;
        }return this;
      }), "outerWidth" in n.fn || (n.fn.outerWidth = function (e) {
        return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
      })), window.Swiper = t;
    }(), e.exports = window.Swiper;
  } });
//# sourceMappingURL=1.232b937381fba89a478c.js.map
//# sourceMappingURL=1.232b937381fba89a478c.js.map