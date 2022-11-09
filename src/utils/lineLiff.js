/*! For license information please see sdk.js.LICENSE.txt */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("liff", [], t)
    : "object" == typeof exports
    ? (exports.liff = t())
    : (e.liff = t());
})(window, function () {
  return (function (e) {
    function t(t) {
      for (var n, i, o = t[0], a = t[1], s = 0, u = []; s < o.length; s++)
        (i = o[s]),
          Object.prototype.hasOwnProperty.call(r, i) && r[i] && u.push(r[i][0]),
          (r[i] = 0);
      for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
      for (c && c(t); u.length; ) u.shift()();
    }
    var n = {},
      r = { 1: 0 };
    function i(t) {
      if (n[t]) return n[t].exports;
      var r = (n[t] = { i: t, l: !1, exports: {} });
      return e[t].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
    }
    (i.e = function (e) {
      var t = [],
        n = r[e];
      if (0 !== n)
        if (n) t.push(n[2]);
        else {
          var o = new Promise(function (t, i) {
            n = r[e] = [t, i];
          });
          t.push((n[2] = o));
          var a,
            s = document.createElement("script");
          (s.charset = "utf-8"),
            (s.timeout = 120),
            i.nc && s.setAttribute("nonce", i.nc),
            (s.src = (function (e) {
              return (
                i.p +
                "" +
                ({ 0: "js-crypto-ec", 2: "vendors_js-crypto-ec" }[e] || e) +
                ".2f7cd5c34b6685f08e01.js"
              );
            })(e));
          var c = new Error();
          a = function (t) {
            (s.onerror = s.onload = null), clearTimeout(u);
            var n = r[e];
            if (0 !== n) {
              if (n) {
                var i = t && ("load" === t.type ? "missing" : t.type),
                  o = t && t.target && t.target.src;
                (c.message =
                  "Loading chunk " + e + " failed.\n(" + i + ": " + o + ")"),
                  (c.name = "ChunkLoadError"),
                  (c.type = i),
                  (c.request = o),
                  n[1](c);
              }
              r[e] = void 0;
            }
          };
          var u = setTimeout(function () {
            a({ type: "timeout", target: s });
          }, 12e4);
          (s.onerror = s.onload = a), document.head.appendChild(s);
        }
      return Promise.all(t);
    }),
      (i.m = e),
      (i.c = n),
      (i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (i.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (i.t = function (e, t) {
        if ((1 & t && (e = i(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (i.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var r in e)
            i.d(
              n,
              r,
              function (t) {
                return e[t];
              }.bind(null, r)
            );
        return n;
      }),
      (i.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return i.d(t, "a", t), t;
      }),
      (i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (i.p = "https://static.line-scdn.net/liff/edge/2/"),
      (i.oe = function (e) {
        throw e;
      });
    var o = (window.webpackJsonpliff = window.webpackJsonpliff || []),
      a = o.push.bind(o);
    (o.push = t), (o = o.slice());
    for (var s = 0; s < o.length; s++) t(o[s]);
    var c = a;
    return i((i.s = 11));
  })([
    function (e, t, n) {
      (function (t) {
        var r = n(9),
          i = "production",
          o = t.env.PORT || 8080,
          a = t.env.CIRCLE_BRANCH || "",
          s = r.version.match(/\d+/g)[0],
          c = t.env.SERVER_END_POINT || "line.me",
          u = t.env.LIFF_END_POINT || null,
          l = t.env.CDN || "https://static.line-scdn.net/liff/edge/" + s + "/";
        e.exports = {
          CDN: l,
          ENV: i,
          PORT: o,
          SERVER_END_POINT: c,
          LIFF_END_POINT: u,
          VERSION: r.version,
          IOS_HOMESCREEN_SHORTCUT_URL: "https://line.me/channel/shortcut",
          SHARE_TARGET_PICKER_SCHEME_URL: "line://picker",
          LIFF_CUSTOM_URL_SCHEME: "liff://",
          BRANCH: a,
        };
      }.call(this, n(4)));
    },
    function (e, t, n) {
      "use strict";
      t.a = function (e) {
        var t = this.constructor;
        return this.then(
          function (n) {
            return t.resolve(e()).then(function () {
              return n;
            });
          },
          function (n) {
            return t.resolve(e()).then(function () {
              return t.reject(n);
            });
          }
        );
      };
    },
    function (e, t, n) {
      var r, i, o;
      (i = []),
        void 0 ===
          (o =
            "function" ==
            typeof (r = function () {
              var e = function e(t) {
                function n(e, t) {
                  return (e >>> t) | (e << (32 - t));
                }
                for (
                  var r,
                    i,
                    o = Math.pow,
                    a = o(2, 32),
                    s = "",
                    c = [],
                    u = 8 * t.length,
                    l = (e.h = e.h || []),
                    f = (e.k = e.k || []),
                    d = f.length,
                    p = {},
                    h = 2;
                  d < 64;
                  h++
                )
                  if (!p[h]) {
                    for (r = 0; r < 313; r += h) p[r] = h;
                    (l[d] = (o(h, 0.5) * a) | 0),
                      (f[d++] = (o(h, 1 / 3) * a) | 0);
                  }
                for (t += "Â€"; (t.length % 64) - 56; ) t += "\0";
                for (r = 0; r < t.length; r++) {
                  if ((i = t.charCodeAt(r)) >> 8) return;
                  c[r >> 2] |= i << (((3 - r) % 4) * 8);
                }
                for (
                  c[c.length] = (u / a) | 0, c[c.length] = u, i = 0;
                  i < c.length;

                ) {
                  var v = c.slice(i, (i += 16)),
                    y = l;
                  for (l = l.slice(0, 8), r = 0; r < 64; r++) {
                    var w = v[r - 15],
                      m = v[r - 2],
                      g = l[0],
                      b = l[4],
                      _ =
                        l[7] +
                        (n(b, 6) ^ n(b, 11) ^ n(b, 25)) +
                        ((b & l[5]) ^ (~b & l[6])) +
                        f[r] +
                        (v[r] =
                          r < 16
                            ? v[r]
                            : (v[r - 16] +
                                (n(w, 7) ^ n(w, 18) ^ (w >>> 3)) +
                                v[r - 7] +
                                (n(m, 17) ^ n(m, 19) ^ (m >>> 10))) |
                              0);
                    (l = [
                      (_ +
                        ((n(g, 2) ^ n(g, 13) ^ n(g, 22)) +
                          ((g & l[1]) ^ (g & l[2]) ^ (l[1] & l[2])))) |
                        0,
                    ].concat(l))[4] = (l[4] + _) | 0;
                  }
                  for (r = 0; r < 8; r++) l[r] = (l[r] + y[r]) | 0;
                }
                for (r = 0; r < 8; r++)
                  for (i = 3; i + 1; i--) {
                    var I = (l[r] >> (8 * i)) & 255;
                    s += (I < 16 ? 0 : "") + I.toString(16);
                  }
                return s;
              };
              return (
                (e.code =
                  'var sha256=function a(b){function c(a,b){return a>>>b|a<<32-b}for(var d,e,f=Math.pow,g=f(2,32),h="length",i="",j=[],k=8*b[h],l=a.h=a.h||[],m=a.k=a.k||[],n=m[h],o={},p=2;64>n;p++)if(!o[p]){for(d=0;313>d;d+=p)o[d]=p;l[n]=f(p,.5)*g|0,m[n++]=f(p,1/3)*g|0}for(b+="\\x80";b[h]%64-56;)b+="\\x00";for(d=0;d<b[h];d++){if(e=b.charCodeAt(d),e>>8)return;j[d>>2]|=e<<(3-d)%4*8}for(j[j[h]]=k/g|0,j[j[h]]=k,e=0;e<j[h];){var q=j.slice(e,e+=16),r=l;for(l=l.slice(0,8),d=0;64>d;d++){var s=q[d-15],t=q[d-2],u=l[0],v=l[4],w=l[7]+(c(v,6)^c(v,11)^c(v,25))+(v&l[5]^~v&l[6])+m[d]+(q[d]=16>d?q[d]:q[d-16]+(c(s,7)^c(s,18)^s>>>3)+q[d-7]+(c(t,17)^c(t,19)^t>>>10)|0),x=(c(u,2)^c(u,13)^c(u,22))+(u&l[1]^u&l[2]^l[1]&l[2]);l=[w+x|0].concat(l),l[4]=l[4]+w|0}for(d=0;8>d;d++)l[d]=l[d]+r[d]|0}for(d=0;8>d;d++)for(e=3;e+1;e--){var y=l[d]>>8*e&255;i+=(16>y?0:"")+y.toString(16)}return i};'),
                e
              );
            })
              ? r.apply(t, i)
              : r) || (e.exports = o);
    },
    function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (r) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    function (e, t) {
      var n,
        r,
        i = (e.exports = {});
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function a() {
        throw new Error("clearTimeout has not been defined");
      }
      function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === o || !n) && setTimeout)
          return (n = setTimeout), setTimeout(e, 0);
        try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          n = "function" == typeof setTimeout ? setTimeout : o;
        } catch (e) {
          n = o;
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : a;
        } catch (e) {
          r = a;
        }
      })();
      var c,
        u = [],
        l = !1,
        f = -1;
      function d() {
        l &&
          c &&
          ((l = !1), c.length ? (u = c.concat(u)) : (f = -1), u.length && p());
      }
      function p() {
        if (!l) {
          var e = s(d);
          l = !0;
          for (var t = u.length; t; ) {
            for (c = u, u = []; ++f < t; ) c && c[f].run();
            (f = -1), (t = u.length);
          }
          (c = null),
            (l = !1),
            (function (e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === a || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(e);
              try {
                r(e);
              } catch (t) {
                try {
                  return r.call(null, e);
                } catch (t) {
                  return r.call(this, e);
                }
              }
            })(e);
        }
      }
      function h(e, t) {
        (this.fun = e), (this.array = t);
      }
      function v() {}
      (i.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        u.push(new h(e, t)), 1 !== u.length || l || s(p);
      }),
        (h.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (i.title = "browser"),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ""),
        (i.versions = {}),
        (i.on = v),
        (i.addListener = v),
        (i.once = v),
        (i.off = v),
        (i.removeListener = v),
        (i.removeAllListeners = v),
        (i.emit = v),
        (i.prependListener = v),
        (i.prependOnceListener = v),
        (i.listeners = function (e) {
          return [];
        }),
        (i.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (i.cwd = function () {
          return "/";
        }),
        (i.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (i.umask = function () {
          return 0;
        });
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        var r = n(1),
          i = setTimeout;
        function o(e) {
          return Boolean(e && void 0 !== e.length);
        }
        function a() {}
        function s(e) {
          if (!(this instanceof s))
            throw new TypeError("Promises must be constructed via new");
          if ("function" != typeof e) throw new TypeError("not a function");
          (this._state = 0),
            (this._handled = !1),
            (this._value = void 0),
            (this._deferreds = []),
            p(e, this);
        }
        function c(e, t) {
          for (; 3 === e._state; ) e = e._value;
          0 !== e._state
            ? ((e._handled = !0),
              s._immediateFn(function () {
                var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                if (null !== n) {
                  var r;
                  try {
                    r = n(e._value);
                  } catch (i) {
                    return void l(t.promise, i);
                  }
                  u(t.promise, r);
                } else (1 === e._state ? u : l)(t.promise, e._value);
              }))
            : e._deferreds.push(t);
        }
        function u(e, t) {
          try {
            if (t === e)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (t && ("object" == typeof t || "function" == typeof t)) {
              var n = t.then;
              if (t instanceof s)
                return (e._state = 3), (e._value = t), void f(e);
              if ("function" == typeof n)
                return void p(
                  ((r = n),
                  (i = t),
                  function () {
                    r.apply(i, arguments);
                  }),
                  e
                );
            }
            (e._state = 1), (e._value = t), f(e);
          } catch (o) {
            l(e, o);
          }
          var r, i;
        }
        function l(e, t) {
          (e._state = 2), (e._value = t), f(e);
        }
        function f(e) {
          2 === e._state &&
            0 === e._deferreds.length &&
            s._immediateFn(function () {
              e._handled || s._unhandledRejectionFn(e._value);
            });
          for (var t = 0, n = e._deferreds.length; t < n; t++)
            c(e, e._deferreds[t]);
          e._deferreds = null;
        }
        function d(e, t, n) {
          (this.onFulfilled = "function" == typeof e ? e : null),
            (this.onRejected = "function" == typeof t ? t : null),
            (this.promise = n);
        }
        function p(e, t) {
          var n = !1;
          try {
            e(
              function (e) {
                n || ((n = !0), u(t, e));
              },
              function (e) {
                n || ((n = !0), l(t, e));
              }
            );
          } catch (r) {
            if (n) return;
            (n = !0), l(t, r);
          }
        }
        (s.prototype.catch = function (e) {
          return this.then(null, e);
        }),
          (s.prototype.then = function (e, t) {
            var n = new this.constructor(a);
            return c(this, new d(e, t, n)), n;
          }),
          (s.prototype.finally = r.a),
          (s.all = function (e) {
            return new s(function (t, n) {
              if (!o(e))
                return n(new TypeError("Promise.all accepts an array"));
              var r = Array.prototype.slice.call(e);
              if (0 === r.length) return t([]);
              var i = r.length;
              function a(e, o) {
                try {
                  if (o && ("object" == typeof o || "function" == typeof o)) {
                    var s = o.then;
                    if ("function" == typeof s)
                      return void s.call(
                        o,
                        function (t) {
                          a(e, t);
                        },
                        n
                      );
                  }
                  (r[e] = o), 0 == --i && t(r);
                } catch (c) {
                  n(c);
                }
              }
              for (var s = 0; s < r.length; s++) a(s, r[s]);
            });
          }),
          (s.resolve = function (e) {
            return e && "object" == typeof e && e.constructor === s
              ? e
              : new s(function (t) {
                  t(e);
                });
          }),
          (s.reject = function (e) {
            return new s(function (t, n) {
              n(e);
            });
          }),
          (s.race = function (e) {
            return new s(function (t, n) {
              if (!o(e))
                return n(new TypeError("Promise.race accepts an array"));
              for (var r = 0, i = e.length; r < i; r++)
                s.resolve(e[r]).then(t, n);
            });
          }),
          (s._immediateFn =
            ("function" == typeof e &&
              function (t) {
                e(t);
              }) ||
            function (e) {
              i(e, 0);
            }),
          (s._unhandledRejectionFn = function (e) {
            "undefined" != typeof console && console;
          }),
          (t.a = s);
      }.call(this, n(6).setImmediate));
    },
    function (e, t, n) {
      (function (e) {
        var r =
            (void 0 !== e && e) ||
            ("undefined" != typeof self && self) ||
            window,
          i = Function.prototype.apply;
        function o(e, t) {
          (this._id = e), (this._clearFn = t);
        }
        (t.setTimeout = function () {
          return new o(i.call(setTimeout, r, arguments), clearTimeout);
        }),
          (t.setInterval = function () {
            return new o(i.call(setInterval, r, arguments), clearInterval);
          }),
          (t.clearTimeout = t.clearInterval =
            function (e) {
              e && e.close();
            }),
          (o.prototype.unref = o.prototype.ref = function () {}),
          (o.prototype.close = function () {
            this._clearFn.call(r, this._id);
          }),
          (t.enroll = function (e, t) {
            clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
          }),
          (t.unenroll = function (e) {
            clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
          }),
          (t._unrefActive = t.active =
            function (e) {
              clearTimeout(e._idleTimeoutId);
              var t = e._idleTimeout;
              t >= 0 &&
                (e._idleTimeoutId = setTimeout(function () {
                  e._onTimeout && e._onTimeout();
                }, t));
            }),
          n(8),
          (t.setImmediate =
            ("undefined" != typeof self && self.setImmediate) ||
            (void 0 !== e && e.setImmediate) ||
            (this && this.setImmediate)),
          (t.clearImmediate =
            ("undefined" != typeof self && self.clearImmediate) ||
            (void 0 !== e && e.clearImmediate) ||
            (this && this.clearImmediate));
      }.call(this, n(3)));
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        var t = n(5),
          r = n(1),
          i = (function () {
            if ("undefined" != typeof self) return self;
            if ("undefined" != typeof window) return window;
            if (void 0 !== e) return e;
            throw new Error("unable to locate global object");
          })();
        "Promise" in i
          ? i.Promise.prototype.finally || (i.Promise.prototype.finally = r.a)
          : (i.Promise = t.a);
      }.call(this, n(3)));
    },
    function (e, t, n) {
      (function (e, t) {
        !(function (e, n) {
          "use strict";
          if (!e.setImmediate) {
            var r,
              i,
              o,
              a,
              s,
              c = 1,
              u = {},
              l = !1,
              f = e.document,
              d = Object.getPrototypeOf && Object.getPrototypeOf(e);
            (d = d && d.setTimeout ? d : e),
              "[object process]" === {}.toString.call(e.process)
                ? (r = function (e) {
                    t.nextTick(function () {
                      h(e);
                    });
                  })
                : !(function () {
                    if (e.postMessage && !e.importScripts) {
                      var t = !0,
                        n = e.onmessage;
                      return (
                        (e.onmessage = function () {
                          t = !1;
                        }),
                        e.postMessage("", "*"),
                        (e.onmessage = n),
                        t
                      );
                    }
                  })()
                ? e.MessageChannel
                  ? (((o = new MessageChannel()).port1.onmessage = function (
                      e
                    ) {
                      h(e.data);
                    }),
                    (r = function (e) {
                      o.port2.postMessage(e);
                    }))
                  : f && "onreadystatechange" in f.createElement("script")
                  ? ((i = f.documentElement),
                    (r = function (e) {
                      var t = f.createElement("script");
                      (t.onreadystatechange = function () {
                        h(e),
                          (t.onreadystatechange = null),
                          i.removeChild(t),
                          (t = null);
                      }),
                        i.appendChild(t);
                    }))
                  : (r = function (e) {
                      setTimeout(h, 0, e);
                    })
                : ((a = "setImmediate$" + Math.random() + "$"),
                  (s = function (t) {
                    t.source === e &&
                      "string" == typeof t.data &&
                      0 === t.data.indexOf(a) &&
                      h(+t.data.slice(a.length));
                  }),
                  e.addEventListener
                    ? e.addEventListener("message", s, !1)
                    : e.attachEvent("onmessage", s),
                  (r = function (t) {
                    e.postMessage(a + t, "*");
                  })),
              (d.setImmediate = function (e) {
                "function" != typeof e && (e = new Function("" + e));
                for (
                  var t = new Array(arguments.length - 1), n = 0;
                  n < t.length;
                  n++
                )
                  t[n] = arguments[n + 1];
                var i = { callback: e, args: t };
                return (u[c] = i), r(c), c++;
              }),
              (d.clearImmediate = p);
          }
          function p(e) {
            delete u[e];
          }
          function h(e) {
            if (l) setTimeout(h, 0, e);
            else {
              var t = u[e];
              if (t) {
                l = !0;
                try {
                  !(function (e) {
                    var t = e.callback,
                      n = e.args;
                    switch (n.length) {
                      case 0:
                        t();
                        break;
                      case 1:
                        t(n[0]);
                        break;
                      case 2:
                        t(n[0], n[1]);
                        break;
                      case 3:
                        t(n[0], n[1], n[2]);
                        break;
                      default:
                        t.apply(void 0, n);
                    }
                  })(t);
                } finally {
                  p(e), (l = !1);
                }
              }
            }
          }
        })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
      }.call(this, n(3), n(4)));
    },
    function (e) {
      e.exports = JSON.parse(
        '{"name":"@line/liff","version":"2.5.0","main":"dist/lib/index.js","types":"dist/lib","files":["dist/lib","package.json","README.md"],"homepage":"https://developers.line.biz/en/docs/liff/overview/","license":"SEE THE LICENSE SECTION IN README.md","scripts":{"test":"jest","dev:watch:sdk":"webpack -w -c ./webpack.config.js","check:forbidden-urls":"node .circleci/check-forbidden-url.js","prettier":"prettier \'./lib/**\' -c","lint":"eslint \'./lib/**\' --ext .ts --ext .test.js","build:test":"NODE_ENV=test webpack --c ./webpack.config.js","build:qa":"npm run build:beta && npm run build:rc","build:beta":"NODE_ENV=beta yarn build_for_deploy","build:rc":"NODE_ENV=rc yarn build_for_deploy","build:master":"NODE_ENV=production yarn build_for_deploy","build:branch":"NODE_ENV=branch yarn build_for_deploy","build_for_deploy":"webpack --c ./webpack.config.js && cp -r dist/${NODE_ENV}/ dist/${NODE_ENV}-copied","deploy":"./script/deploy.sh","deploy:test":"npm run deploy -- test","deploy:qa":"npm run deploy:qa-beta-edge && npm run deploy:qa-beta-versions && npm run deploy:qa-rc-edge && npm run deploy:qa-rc-versions","deploy:qa-beta-edge":"npm run deploy -- qa-beta-edge","deploy:qa-beta-versions":"npm run deploy -- qa-beta-versions","deploy:qa-rc-edge":"npm run deploy -- qa-rc-edge","deploy:qa-rc-versions":"npm run deploy -- qa-rc-versions","deploy:beta":"npm run deploy:beta-edge && npm run deploy:beta-versions","deploy:beta-edge":"npm run deploy -- beta-edge","deploy:beta-versions":"npm run deploy -- beta-versions","deploy:rc":"npm run deploy:rc-edge && npm run deploy:rc-versions","deploy:rc-edge":"npm run deploy -- rc-edge","deploy:rc-versions":"npm run deploy -- rc-versions","deploy:master":"npm run deploy:master-edge && npm run deploy:master-versions","deploy:master-edge":"npm run deploy -- master-edge -r","deploy:master-versions":"npm run deploy -- master-versions -r","deploy:branch":"npm run deploy -- branch","prepublishOnly":"./build-package.sh"},"dependencies":{"@line/bot-sdk":"^7.0.0","js-crypto-ec":"^0.5.6","promise-polyfill":"^8.1.0","tiny-sha256":"^1.0.2","whatwg-fetch":"^3.0.0"},"devDependencies":{"@babel/core":"^7.7.7","@babel/plugin-proposal-class-properties":"^7.8.3","@babel/plugin-syntax-dynamic-import":"^7.7.4","@babel/preset-env":"^7.7.7","@babel/preset-typescript":"^7.7.7","@linecorp/eslint-config":"^4.0.0-alpha.4","@linecorp/eslint-config-typescript":"^4.0.0-alpha.4","@linecorp/reg":"^1.7.0","@types/jest":"^24.0.25","@typescript-eslint/eslint-plugin":"^2.13.0","@typescript-eslint/parser":"^2.13.0","babel-jest":"^24.6.0","babel-loader":"^8.0.6","chalk":"^3.0.0","eslint":"^6.8.0","eslint-config-prettier":"^6.8.0","eslint-loader":"^3.0.3","eslint-plugin-jest":"^23.1.1","fast-check":"^1.21.0","husky":"^3.1.0","jest":"^24.6.0","lint-staged":">=9.5.0","prettier":"^1.19.1","shelljs":"^0.8.3","terser-webpack-plugin":"^2.3.1","ts-loader":"^6.2.1","tslib":"^1.9.3","typescript":"^3.7.4","webpack":"^4.41.4","webpack-bundle-analyzer":"^3.6.0","webpack-cli":"^3.3.10"},"husky":{"hooks":{"pre-commit":"lint-staged"}},"lint-staged":{"*.ts":["prettier --write","eslint --fix","git add"],"*.test.js":["prettier --write","eslint --fix","git add"]}}'
      );
    },
    function (e, t) {
      !(function () {
        if ("function" != typeof window.CustomEvent) {
          function e(e, t) {
            var n = t || {},
              r = n.bubbles,
              i = void 0 !== r && r,
              o = n.cancelable,
              a = void 0 !== o && o,
              s = n.detail,
              c = void 0 === s ? void 0 : s,
              u = document.createEvent("CustomEvent");
            return u.initCustomEvent(e, i, a, c), u;
          }
          (e.prototype = Event.prototype), (window.CustomEvent = e);
        }
      })();
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "liff", function () {
          return Nt;
        });
      var r = "URLSearchParams" in self,
        i = "Symbol" in self && "iterator" in Symbol,
        o =
          "FileReader" in self &&
          "Blob" in self &&
          (function () {
            try {
              return new Blob(), !0;
            } catch (e) {
              return !1;
            }
          })(),
        a = "FormData" in self,
        s = "ArrayBuffer" in self;
      if (s)
        var c = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          u =
            ArrayBuffer.isView ||
            function (e) {
              return e && c.indexOf(Object.prototype.toString.call(e)) > -1;
            };
      function l(e) {
        if (
          ("string" != typeof e && (e = String(e)),
          /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
        )
          throw new TypeError("Invalid character in header field name");
        return e.toLowerCase();
      }
      function f(e) {
        return "string" != typeof e && (e = String(e)), e;
      }
      function d(e) {
        var t = {
          next: function () {
            var t = e.shift();
            return { done: void 0 === t, value: t };
          },
        };
        return (
          i &&
            (t[Symbol.iterator] = function () {
              return t;
            }),
          t
        );
      }
      function p(e) {
        (this.map = {}),
          e instanceof p
            ? e.forEach(function (e, t) {
                this.append(t, e);
              }, this)
            : Array.isArray(e)
            ? e.forEach(function (e) {
                this.append(e[0], e[1]);
              }, this)
            : e &&
              Object.getOwnPropertyNames(e).forEach(function (t) {
                this.append(t, e[t]);
              }, this);
      }
      function h(e) {
        if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
        e.bodyUsed = !0;
      }
      function v(e) {
        return new Promise(function (t, n) {
          (e.onload = function () {
            t(e.result);
          }),
            (e.onerror = function () {
              n(e.error);
            });
        });
      }
      function y(e) {
        var t = new FileReader(),
          n = v(t);
        return t.readAsArrayBuffer(e), n;
      }
      function w(e) {
        if (e.slice) return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)), t.buffer;
      }
      function m() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (e) {
            var t;
            (this._bodyInit = e),
              e
                ? "string" == typeof e
                  ? (this._bodyText = e)
                  : o && Blob.prototype.isPrototypeOf(e)
                  ? (this._bodyBlob = e)
                  : a && FormData.prototype.isPrototypeOf(e)
                  ? (this._bodyFormData = e)
                  : r && URLSearchParams.prototype.isPrototypeOf(e)
                  ? (this._bodyText = e.toString())
                  : s && o && (t = e) && DataView.prototype.isPrototypeOf(t)
                  ? ((this._bodyArrayBuffer = w(e.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : s && (ArrayBuffer.prototype.isPrototypeOf(e) || u(e))
                  ? (this._bodyArrayBuffer = w(e))
                  : (this._bodyText = e = Object.prototype.toString.call(e))
                : (this._bodyText = ""),
              this.headers.get("content-type") ||
                ("string" == typeof e
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : r &&
                    URLSearchParams.prototype.isPrototypeOf(e) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          o &&
            ((this.blob = function () {
              var e = h(this);
              if (e) return e;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              return this._bodyArrayBuffer
                ? h(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(y);
            })),
          (this.text = function () {
            var e,
              t,
              n,
              r = h(this);
            if (r) return r;
            if (this._bodyBlob)
              return (
                (e = this._bodyBlob),
                (t = new FileReader()),
                (n = v(t)),
                t.readAsText(e),
                n
              );
            if (this._bodyArrayBuffer)
              return Promise.resolve(
                (function (e) {
                  for (
                    var t = new Uint8Array(e), n = new Array(t.length), r = 0;
                    r < t.length;
                    r++
                  )
                    n[r] = String.fromCharCode(t[r]);
                  return n.join("");
                })(this._bodyArrayBuffer)
              );
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          a &&
            (this.formData = function () {
              return this.text().then(_);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      (p.prototype.append = function (e, t) {
        (e = l(e)), (t = f(t));
        var n = this.map[e];
        this.map[e] = n ? n + ", " + t : t;
      }),
        (p.prototype.delete = function (e) {
          delete this.map[l(e)];
        }),
        (p.prototype.get = function (e) {
          return (e = l(e)), this.has(e) ? this.map[e] : null;
        }),
        (p.prototype.has = function (e) {
          return this.map.hasOwnProperty(l(e));
        }),
        (p.prototype.set = function (e, t) {
          this.map[l(e)] = f(t);
        }),
        (p.prototype.forEach = function (e, t) {
          for (var n in this.map)
            this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
        }),
        (p.prototype.keys = function () {
          var e = [];
          return (
            this.forEach(function (t, n) {
              e.push(n);
            }),
            d(e)
          );
        }),
        (p.prototype.values = function () {
          var e = [];
          return (
            this.forEach(function (t) {
              e.push(t);
            }),
            d(e)
          );
        }),
        (p.prototype.entries = function () {
          var e = [];
          return (
            this.forEach(function (t, n) {
              e.push([n, t]);
            }),
            d(e)
          );
        }),
        i && (p.prototype[Symbol.iterator] = p.prototype.entries);
      var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function b(e, t) {
        var n,
          r,
          i = (t = t || {}).body;
        if (e instanceof b) {
          if (e.bodyUsed) throw new TypeError("Already read");
          (this.url = e.url),
            (this.credentials = e.credentials),
            t.headers || (this.headers = new p(e.headers)),
            (this.method = e.method),
            (this.mode = e.mode),
            (this.signal = e.signal),
            i || null == e._bodyInit || ((i = e._bodyInit), (e.bodyUsed = !0));
        } else this.url = String(e);
        if (
          ((this.credentials =
            t.credentials || this.credentials || "same-origin"),
          (!t.headers && this.headers) || (this.headers = new p(t.headers)),
          (this.method =
            ((n = t.method || this.method || "GET"),
            (r = n.toUpperCase()),
            g.indexOf(r) > -1 ? r : n)),
          (this.mode = t.mode || this.mode || null),
          (this.signal = t.signal || this.signal),
          (this.referrer = null),
          ("GET" === this.method || "HEAD" === this.method) && i)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(i);
      }
      function _(e) {
        var t = new FormData();
        return (
          e
            .trim()
            .split("&")
            .forEach(function (e) {
              if (e) {
                var n = e.split("="),
                  r = n.shift().replace(/\+/g, " "),
                  i = n.join("=").replace(/\+/g, " ");
                t.append(decodeURIComponent(r), decodeURIComponent(i));
              }
            }),
          t
        );
      }
      function I(e, t) {
        t || (t = {}),
          (this.type = "default"),
          (this.status = void 0 === t.status ? 200 : t.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = "statusText" in t ? t.statusText : "OK"),
          (this.headers = new p(t.headers)),
          (this.url = t.url || ""),
          this._initBody(e);
      }
      (b.prototype.clone = function () {
        return new b(this, { body: this._bodyInit });
      }),
        m.call(b.prototype),
        m.call(I.prototype),
        (I.prototype.clone = function () {
          return new I(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new p(this.headers),
            url: this.url,
          });
        }),
        (I.error = function () {
          var e = new I(null, { status: 0, statusText: "" });
          return (e.type = "error"), e;
        });
      var E = [301, 302, 303, 307, 308];
      I.redirect = function (e, t) {
        if (-1 === E.indexOf(t)) throw new RangeError("Invalid status code");
        return new I(null, { status: t, headers: { location: e } });
      };
      var T = self.DOMException;
      try {
        new T();
      } catch (Pt) {
        ((T = function (e, t) {
          (this.message = e), (this.name = t);
          var n = Error(e);
          this.stack = n.stack;
        }).prototype = Object.create(Error.prototype)),
          (T.prototype.constructor = T);
      }
      function O(e, t) {
        return new Promise(function (n, r) {
          var i = new b(e, t);
          if (i.signal && i.signal.aborted)
            return r(new T("Aborted", "AbortError"));
          var a = new XMLHttpRequest();
          function s() {
            a.abort();
          }
          (a.onload = function () {
            var e,
              t,
              r = {
                status: a.status,
                statusText: a.statusText,
                headers:
                  ((e = a.getAllResponseHeaders() || ""),
                  (t = new p()),
                  e
                    .replace(/\r?\n[\t ]+/g, " ")
                    .split(/\r?\n/)
                    .forEach(function (e) {
                      var n = e.split(":"),
                        r = n.shift().trim();
                      if (r) {
                        var i = n.join(":").trim();
                        t.append(r, i);
                      }
                    }),
                  t),
              };
            r.url =
              "responseURL" in a
                ? a.responseURL
                : r.headers.get("X-Request-URL");
            var i = "response" in a ? a.response : a.responseText;
            n(new I(i, r));
          }),
            (a.onerror = function () {
              r(new TypeError("Network request failed"));
            }),
            (a.ontimeout = function () {
              r(new TypeError("Network request failed"));
            }),
            (a.onabort = function () {
              r(new T("Aborted", "AbortError"));
            }),
            a.open(i.method, i.url, !0),
            "include" === i.credentials
              ? (a.withCredentials = !0)
              : "omit" === i.credentials && (a.withCredentials = !1),
            "responseType" in a && o && (a.responseType = "blob"),
            i.headers.forEach(function (e, t) {
              a.setRequestHeader(t, e);
            }),
            i.signal &&
              (i.signal.addEventListener("abort", s),
              (a.onreadystatechange = function () {
                4 === a.readyState && i.signal.removeEventListener("abort", s);
              })),
            a.send(void 0 === i._bodyInit ? null : i._bodyInit);
        });
      }
      (O.polyfill = !0),
        self.fetch ||
          ((self.fetch = O),
          (self.Headers = p),
          (self.Request = b),
          (self.Response = I));
      n(7);
      var A = function (e, t) {
        return (A =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          })(e, t);
      };
      var k,
        N = function () {
          return (N =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        };
      function P(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (t) {
              o(t);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (t) {
              o(t);
            }
          }
          function c(e) {
            e.done
              ? i(e.value)
              : new n(function (t) {
                  t(e.value);
                }).then(a, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      }
      function S(e, t) {
        var n,
          r,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: s(0), throw: s(1), return: s(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function s(o) {
          return function (s) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return a.label++, { value: o[1], done: !1 };
                    case 5:
                      a.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !((i = a.trys),
                        (i = i.length > 0 && i[i.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        a.label = o[1];
                        break;
                      }
                      if (6 === o[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = o);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(o);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  o = t.call(e, a);
                } catch (s) {
                  (o = [6, s]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, s]);
          };
        }
      }
      function C() {
        if (!k) {
          var e = window.navigator.userAgent.toLowerCase();
          k = /iphone|ipad|ipod/.test(e)
            ? "ios"
            : /android/.test(e)
            ? "android"
            : "web";
        }
        return k;
      }
      function D(e, t) {
        if (e === t) return 0;
        for (
          var n = e.split("."),
            r = t.split("."),
            i = Math.max(n.length, r.length),
            o = 0;
          o < i;
          o++
        ) {
          n[o] || (n[o] = "0"), r[o] || (r[o] = "0");
          var a = parseInt(n[o]) - parseInt(r[o]);
          if (0 !== a) return a > 0 ? 1 : -1;
        }
        return 0;
      }
      function R() {
        var e = navigator.userAgent.match(/Line\/\d+(\.\d+)*/i);
        return e ? e[0].slice(5) : null;
      }
      var j = "INIT_FAILED",
        L = "LIFF_STORE",
        x = {
          ACCESS_TOKEN: "accessToken",
          ID_TOKEN: "IDToken",
          DECODED_ID_TOKEN: "decodedIDToken",
          FEATURE_TOKEN: "featureToken",
          FEATURES: "features",
          LOGIN_TMP: "loginTmp",
          CONFIG: "config",
          CONTEXT: "context",
          EXPIRES: "expires",
          RAW_CONTEXT: "rawContext",
          CLIENT_ID: "clientId",
          IS_SUBSEQUENT_LIFF_APP: "isSubsequentLiffApp",
        },
        F = [
          "context_token",
          "feature_token",
          "access_token",
          "id_token",
          "client_id",
        ],
        U = ["openWindow", "closeWindow"];
      var M = null;
      function B() {
        var e;
        return (
          null === M &&
            (void 0 === e && (e = window.navigator.userAgent),
            (M =
              /Line\/\d+\.\d+\.\d+ LIFF/.test(e) ||
              ((function (e) {
                return (
                  void 0 === e && (e = window.navigator.userAgent),
                  /Line\/\d+\.\d+\.\d+/.test(e)
                );
              })() &&
                /[#|&]access_token=/.test(location.hash)) ||
              "1" === sessionStorage.getItem(L + ":isInClient")),
            sessionStorage.setItem(L + ":isInClient", M ? "1" : "0")),
          !!M
        );
      }
      var V = new Set(["400", "401", "403", "404", "429", "500"]),
        W = (function (e) {
          function t(t, n) {
            var r = e.call(this, n) || this;
            return (r.code = t), r;
          }
          return (
            (function (e, t) {
              function n() {
                this.constructor = e;
              }
              A(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            })(t, e),
            t
          );
        })(Error);
      function q(e, t) {
        return new W(e, t || "");
      }
      function G(e) {
        return (function (e, t) {
          if (!t)
            throw q("INVALID_CONFIG", "liffId is necessary for liff.init()");
          var n = (B() ? sessionStorage : localStorage).getItem(
            L + ":" + t + ":" + e
          );
          try {
            return null === n ? null : JSON.parse(n);
          } catch (r) {
            return null;
          }
        })(e, $().liffId);
      }
      function K(e, t) {
        var n = $().liffId;
        if (!n)
          throw q("INVALID_CONFIG", "liffId is necessary for liff.init()");
        (B() ? sessionStorage : localStorage).setItem(
          L + ":" + n + ":" + e,
          JSON.stringify(t)
        );
      }
      function H(e) {
        var t = $().liffId;
        if (!t)
          throw q("INVALID_CONFIG", "liffId is necessary for liff.init()");
        (B() ? sessionStorage : localStorage).removeItem(L + ":" + t + ":" + e);
      }
      var J = {
          set: function (e, t, n) {
            var r = e + "=" + t;
            if (n)
              for (var i in n) {
                r += "; " + i + (n[i] ? "=" + n[i] : "");
              }
            document.cookie = r;
          },
          get: function (e) {
            var t = new RegExp(
              "(?:(?:^|.*;\\s*)" + e + "\\s*\\=\\s*([^;]*).*$)|^.*$"
            );
            return document.cookie.replace(t, "$1");
          },
          remove: function (e, t) {
            var n = e + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
            if (t) for (var r in t) n += "; " + r + "=" + t[r];
            document.cookie = n;
          },
        },
        X = {
          get: G,
          set: K,
          remove: H,
          clean: function () {
            var e;
            Object.keys(x).forEach(function (e) {
              H(x[e]);
            }),
              (e = $()),
              J.remove(L + ":" + x.EXPIRES + ":" + e.liffId, { path: "/" });
          },
        },
        z = {};
      function $() {
        return z;
      }
      function Q() {
        return G(x.FEATURES);
      }
      function Y(e) {
        K(x.FEATURES, e);
      }
      function Z() {
        return G(x.LOGIN_TMP);
      }
      function ee() {
        H(x.LOGIN_TMP);
      }
      function te() {
        return G(x.ACCESS_TOKEN);
      }
      function ne(e) {
        K(x.ACCESS_TOKEN, e);
      }
      function re() {
        return G(x.ID_TOKEN);
      }
      function ie(e) {
        K(x.ID_TOKEN, e);
      }
      function oe() {
        return G(x.DECODED_ID_TOKEN);
      }
      function ae(e) {
        K(x.DECODED_ID_TOKEN, e);
      }
      function se() {
        return G(x.FEATURE_TOKEN);
      }
      function ce(e) {
        K(x.FEATURE_TOKEN, e);
      }
      function ue() {
        return G(x.CONTEXT);
      }
      function le(e) {
        K(x.CONTEXT, e);
      }
      function fe() {
        return !!te();
      }
      function de() {
        var e;
        return !((e = $()), J.get(L + ":" + x.EXPIRES + ":" + e.liffId));
      }
      function pe() {
        X.clean();
      }
      function he(e) {
        return Object.keys(e)
          .map(function (t) {
            var n = e[t],
              r = function (e) {
                return void 0 !== e
                  ? encodeURIComponent(t) + "=" + encodeURIComponent(e)
                  : encodeURIComponent(t);
              };
            return Array.isArray(n)
              ? n
                  .map(function (e) {
                    return r(e);
                  })
                  .join("&")
              : r(n);
          })
          .join("&");
      }
      var ve = {
          parse: function (e) {
            return e
              .replace(/^\?/, "")
              .replace(/^#\/?/, "")
              .split(/&+/)
              .filter(function (e) {
                return e.length > 0;
              })
              .reduce(function (e, t) {
                var n = t.split("=").map(decodeURIComponent),
                  r = n[0],
                  i = n[1],
                  o = e[r];
                return (
                  Array.isArray(o)
                    ? o.push(i)
                    : Object.prototype.hasOwnProperty.call(e, r)
                    ? (e[r] = [o, i])
                    : (e[r] = i),
                  e
                );
              }, {});
          },
          stringify: he,
        },
        ye = "",
        we = function () {
          var e = ue();
          if (!e) throw q(j, "Could not get Context from server.");
          if (!e.endpointUrl)
            throw q(j, "Could not get endpointUrl from server.");
          if (!e.permanentLinkPattern)
            throw q(j, "Could not get permanentLinkPattern from server.");
          return e;
        };
      function me(e) {
        try {
          var t = location.href,
            n = (function (e) {
              var t = we(),
                n = decodeURIComponent(e),
                r = new URL(t.endpointUrl),
                i = r.origin,
                o = r.pathname,
                a = r.search,
                s = t.permanentLinkPattern,
                c = n.indexOf("?"),
                u = n.indexOf("#", c + 1),
                l = n.substring(0, c >= 0 ? c : u >= 0 ? u : n.length),
                f = u > -1 ? "#" + n.substring(u + 1) : "",
                d = c > -1 ? n.substring(c + 1, u < 0 ? void 0 : u) : "";
              if ("replace" === s) {
                if (!l && !d && !f) return window.location.href;
                var p = (function (e) {
                  return e.replace(/\/{2,}/g, "/");
                })("/" + (l || "/"));
                return "" + window.location.origin + p + (d ? "?" + d : "") + f;
              }
              l.length > 0 &&
                ("/" === l ? (l = "") : n.startsWith("/") || (l = "/" + l));
              var h = f
                .split("&")
                .filter(function (e) {
                  return !/^context_token/.test(e);
                })
                .join("&");
              if (d) {
                var v = a ? a.substring(1) + "&" : "";
                n = l + "?" + v + d + h;
              } else n = "" + l + a + h;
              return (
                "" +
                i +
                (function () {
                  switch (!0) {
                    case "/" === o:
                      return "";
                    case o.endsWith("/") && l.startsWith("/"):
                      return o.substring(0, o.length - 1);
                    default:
                      return o;
                  }
                })() +
                n
              );
            })(e);
          n !== t && location.replace(n);
        } catch (r) {
          if (r.code === j) throw r;
        }
      }
      var ge = n(2),
        be = n.n(ge);
      function _e(e) {
        return ((t = be()(e)),
        (n = ""),
        t
          .replace(/\r|\n/g, "")
          .replace(/([\da-fA-F]{2}) ?/g, "0x$1 ")
          .replace(/ +$/, "")
          .split(" ")
          .forEach(function (e) {
            n += String.fromCharCode(parseInt(e));
          }),
        window.btoa(n))
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
          .replace(/=/g, "");
        var t, n;
      }
      var Ie = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      function Ee(e) {
        for (var t = "", n = 0; n < e; n++)
          t +=
            Ie[
              Math.floor(
                (window.crypto.getRandomValues(new Uint32Array(1))[0] /
                  4294967296) *
                  Ie.length
              )
            ];
        return t;
      }
      function Te(e) {
        var t = e.subdomain;
        return (
          "https://" + (void 0 === t ? "api" : t) + ".line.me/" + e.pathname
        );
      }
      var Oe = {
        token: Te({ pathname: "oauth2/v2.1/token" }),
        certs: Te({ pathname: "oauth2/v2.1/certs" }),
        "openid-configuration": Te({
          subdomain: "access",
          pathname: ".well-known/openid-configuration",
        }),
        authorize: Te({ subdomain: "access", pathname: "liff/v1/authorize" }),
        profile: Te({ pathname: "v2/profile" }),
        message: Te({ pathname: "message/v3/share" }),
        messageOTT: Te({ pathname: "message/v3/multisend?type=ott" }),
        friendship: Te({ pathname: "friendship/v1/status" }),
        shareTargetPicker: Te({
          subdomain: "access",
          pathname: "oauth2/v2.1/liff/shareTargetPicker",
        }),
        shareTargetPickerOtt: Te({ pathname: "liff/v2/apps" }),
        shareTargetPickerResult: Te({
          subdomain: "access",
          pathname: "oauth2/v2.1/liff/shareTargetPicker/result",
        }),
        apps: Te({ pathname: "liff/v2/apps" }),
      };
      function Ae(e) {
        return Oe[e] || "";
      }
      function ke() {
        return "2.5.0";
      }
      function Ne(e) {
        var t = Ee(43),
          n = _e(t),
          r = $();
        if (!r || !r.liffId)
          throw q(
            "INVALID_CONFIG",
            "You need to define `liffId` for liff.login()"
          );
        var i = {
          app_id: r.liffId,
          state: Ee(12),
          response_type: "code",
          code_challenge_method: "S256",
          code_challenge: n,
          liff_sdk_version: "2.5.0",
        };
        e && e.redirectUri && (i.redirect_uri = e.redirectUri),
          K(x.LOGIN_TMP, { codeVerifier: t });
        var o = Ae("authorize") + "?" + ve.stringify(i);
        window.location.href = o;
      }
      var Pe = {},
        Se = !1;
      function Ce(e, t) {
        Se ||
          ((Se = !0),
          window.addEventListener("liffEvent", function (e) {
            e &&
              e.detail &&
              e.detail.type &&
              Pe[e.detail.type] &&
              Pe[e.detail.type].forEach(function (t) {
                return t(e);
              });
          })),
          Pe[e] ? Pe[e].push(t) : (Pe[e] = [t]);
      }
      function De(e, t) {
        var n = Pe[e];
        if (n && Array.isArray(n)) {
          var r = n.indexOf(t);
          r >= 0 && n.splice(r, 1);
        }
      }
      var Re = function (e) {
        return Object.entries(e)
          .map(function (e) {
            var t = e[0],
              n = e[1];
            return (
              encodeURIComponent(t) +
              "=" +
              encodeURIComponent(
                (function (t) {
                  if ("object" == typeof t)
                    try {
                      return JSON.stringify(t);
                    } catch (e) {
                      return "" + t;
                    }
                  return "" + t;
                })(n)
              )
            );
          })
          .join("&");
      };
      function je(e, t) {
        !(function (e, t) {
          var n = !1,
            r = document.createElement("img");
          if (((r.width = 1), (r.height = 1), "function" == typeof t)) {
            var i = function () {
              n || (t(r), (n = !0));
            };
            (r.onload = i), setTimeout(i, 1500);
          }
          r.src = "https://torimochi.line-apps.com/1/req?" + Re(e);
        })(
          {
            cid: "liff",
            eventType: "debug",
            timestamp: Date.now(),
            logVersion: "1.6.9",
            threshold: 0,
            productKey: "liff-real",
            productVersion: "latest",
            url: location.href,
            host: location.hostname,
            path: location.pathname,
            query: location.search,
            hash: location.hash,
            referrer: document.referrer,
            userId: "liff",
            sessionId: "none",
            sessionPath: "",
            sessionQuery: "",
            sessionTime: "0",
            sessionDuration: "0",
            sessionParams: {},
            touchX: "0",
            touchY: "0",
            scrollX: "0",
            scrollY: "0",
            windowX: "0",
            windowY: "0",
            targets: [],
            content: { debug: { message: e } },
          },
          t
        );
      }
      function Le(e) {
        var t = e.split(".");
        if (t[1])
          try {
            var n = t[1].replace(/-/g, "+").replace(/_/g, "/");
            return JSON.parse(window.atob(n));
          } catch (r) {
            return null;
          }
        return null;
      }
      function xe(e) {
        return window.atob(e.replace(/-/g, "+").replace(/_/g, "/"));
      }
      function Fe(e) {
        for (
          var t = e.length,
            n = new ArrayBuffer(t),
            r = new Uint8Array(n),
            i = 0;
          i < t;
          i++
        )
          r[i] = e.charCodeAt(i);
        return n;
      }
      function Ue(e) {
        return P(this, void 0, void 0, function () {
          var t, n, r;
          return S(this, function (i) {
            switch (i.label) {
              case 0:
                if (!e.ok) return [3, 4];
                i.label = 1;
              case 1:
                return i.trys.push([1, 3, , 4]), [4, e.json()];
              case 2:
                return [2, i.sent()];
              case 3:
                return i.sent(), [2, e];
              case 4:
                return (
                  (t = String(e.status)),
                  (n = V.has(t) ? t : "UNKNOWN"),
                  [
                    4,
                    e.json().catch(function () {
                      throw q(n, e.statusText);
                    }),
                  ]
                );
              case 5:
                throw q(
                  (r = i.sent()).error || n,
                  r.error_description || r.message
                );
            }
          });
        });
      }
      function Me(e) {
        var t = (function (e) {
          if (e) return e;
          var t = te();
          if (!t)
            throw q(
              "UNAUTHORIZED",
              "Need access_token for api call, Please login first"
            );
          return {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + t,
          };
        })(e && e.headers);
        return N(N({}, e), { headers: t });
      }
      function Be(e, t) {
        var n;
        try {
          n = Me(t);
        } catch (r) {
          return Promise.reject(r);
        }
        return fetch(e, n).then(Ue);
      }
      var Ve = function () {
          return P(this, void 0, void 0, function () {
            return S(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, Be(Ae("certs"))];
                case 1:
                  return [2, e.sent()];
              }
            });
          });
        },
        We = function () {
          return (
            "ios" === C() &&
            null !==
              (e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)) &&
            parseInt(e[1], 10) <= 10
          );
          var e;
        };
      function qe(e, t, r) {
        return P(this, void 0, void 0, function () {
          var i, o, a, s;
          return S(this, function (c) {
            switch (c.label) {
              case 0:
                return We()
                  ? [
                      4,
                      Promise.all([n.e(2), n.e(0)]).then(
                        n.t.bind(null, 243, 7)
                      ),
                    ]
                  : [3, 2];
              case 1:
                return (
                  (o = c.sent()),
                  (a = o.default),
                  (i = a.verify(t, r, e, "SHA-256", "raw")),
                  [3, 5]
                );
              case 2:
                return [
                  4,
                  crypto.subtle.importKey(
                    "jwk",
                    e,
                    { name: "ECDSA", namedCurve: "P-256" },
                    !1,
                    ["verify"]
                  ),
                ];
              case 3:
                return (
                  (s = c.sent()),
                  [
                    4,
                    crypto.subtle.verify(
                      { name: "ECDSA", hash: { name: "SHA-256" } },
                      s,
                      r,
                      t
                    ),
                  ]
                );
              case 4:
                (i = c.sent()), (c.label = 5);
              case 5:
                return [2, i];
            }
          });
        });
      }
      function Ge(e, t) {
        return P(this, void 0, void 0, function () {
          var n, r, i, o, a, s, c, u, l, f, d, p, h, v;
          return S(this, function (y) {
            switch (y.label) {
              case 0:
                return (
                  (n = e.split(".")),
                  (r = n[0]),
                  (i = n[1]),
                  (o = n[2]),
                  (a = JSON.parse(xe(r))),
                  (s = JSON.parse(xe(i))),
                  (c = Fe(xe(o))),
                  (u = Fe(r + "." + i)),
                  [4, Ve()]
                );
              case 1:
                if (
                  ((l = y.sent()),
                  !(f = l.keys.find(function (e) {
                    return e.kid === a.kid;
                  })))
                )
                  return [3, 6];
                if ((delete f.alg, "ES256" !== a.alg))
                  throw q(
                    "INVALID_ID_TOKEN",
                    'Invalid "alg" value in ID_TOKEN'
                  );
                (d = void 0), (y.label = 2);
              case 2:
                return y.trys.push([2, 4, , 5]), [4, qe(f, u, c)];
              case 3:
                return (d = y.sent()), [3, 5];
              case 4:
                throw q(
                  "INVALID_ID_TOKEN",
                  "Failed to use Crypto API to verify ID_TOKEN: " + y.sent()
                );
              case 5:
                if (d) {
                  if (
                    ((p = "https://access.line.me" !== s.iss),
                    (h = s.aud !== t),
                    (v = 1e3 * s.exp < Date.now()),
                    p)
                  )
                    throw q(
                      "INVALID_ID_TOKEN",
                      'Invalid "iss" value in ID_TOKEN'
                    );
                  if (h)
                    throw q(
                      "INVALID_ID_TOKEN",
                      'Invalid "aud" value in ID_TOKEN'
                    );
                  if (v)
                    throw q(
                      "INVALID_ID_TOKEN",
                      'Invalid "exp" value in ID_TOKEN'
                    );
                  return [2, s];
                }
                throw q("INVALID_ID_TOKEN", "Invalid signature in ID_TOKEN");
              case 6:
                throw q("INVALID_ID_TOKEN", 'Invalid "kid" value in ID_TOKEN');
              case 7:
                return [2];
            }
          });
        });
      }
      var Ke = n(0);
      function He(e) {
        var t = e.pathname,
          n = e.query;
        return P(this, void 0, void 0, function () {
          var e, r;
          return S(this, function (i) {
            return (
              (e = n ? "?" + he(n) : ""),
              (r = "" + Ke.LIFF_CUSTOM_URL_SCHEME + t + e),
              (location.href = r),
              [2]
            );
          });
        });
      }
      var Je = ["shareTargetPicker", "multipleLiffTransition"],
        Xe = {
          shareTargetPicker: function () {
            if (!fe()) return !1;
            var e = ue();
            if (!e) return !1;
            var t = e.availability.shareTargetPicker,
              n = t.permission,
              r = t.minVer;
            if (!n) return !1;
            if (B()) {
              var i = R();
              return null !== i && D(i, r) >= 0;
            }
            return !0;
          },
          multipleLiffTransition: function () {
            var e = ue();
            if (!e || !e.availability) return !1;
            var t = e.availability.multipleLiffTransition.permission;
            return B() && t;
          },
        },
        ze = function (e) {
          if (!Je.includes(e))
            throw q("INVALID_ARGUMENT", "Unexpected API name.");
          var t = Xe[e];
          return !t || t();
        };
      function $e(e, t) {
        return P(this, void 0, void 0, function () {
          return S(this, function (n) {
            switch (n.label) {
              case 0:
                return ze("multipleLiffTransition")
                  ? [
                      4,
                      Promise.all([
                        new Promise(function (e, t) {
                          Ce("liffIdReceived", function n(r) {
                            De("liffIdReceived", n),
                              r.detail.data && r.detail.data.result
                                ? e()
                                : t(q(j));
                          });
                        }),
                        He({
                          pathname: "app/" + e,
                          query: { feature_token: t },
                        }),
                      ]),
                    ]
                  : [3, 2];
              case 1:
                n.sent(), (n.label = 2);
              case 2:
                return [2];
            }
          });
        });
      }
      var Qe,
        Ye = null;
      function Ze() {
        return (
          !!Boolean(G(x.IS_SUBSEQUENT_LIFF_APP)) ||
          (!(!B() || ve.parse(window.location.hash).feature_token || se()) &&
            (K(x.IS_SUBSEQUENT_LIFF_APP, !0), !0))
        );
      }
      function et() {
        "boolean" == typeof Ye &&
          (function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var n = console.warn;
            n.apply(void 0, e);
          })("liff.init is not expected to be called more than once"),
          (Ye = Ze());
      }
      function tt() {
        return Boolean(Ye);
      }
      function nt(e) {
        return Be(Ae("apps") + "/" + e + "/featureToken");
      }
      function rt(e) {
        return P(this, void 0, void 0, function () {
          var t, n, r, i, o, a, s;
          return S(this, function (c) {
            switch (c.label) {
              case 0:
                return (
                  (t = ve.parse(window.location.hash)),
                  (n = (function (e) {
                    for (var t = [], n = 1; n < arguments.length; n++)
                      t[n - 1] = arguments[n];
                    for (
                      var r = function (t) {
                          Object.keys(t)
                            .filter(function (e) {
                              return null !== t[e] && void 0 !== t[e];
                            })
                            .forEach(function (n) {
                              e[n] = t[n];
                            });
                        },
                        i = 0,
                        o = t;
                      i < o.length;
                      i++
                    ) {
                      var a = o[i];
                      r(a);
                    }
                    return e;
                  })(
                    {
                      access_token: te(),
                      context_token: G(x.RAW_CONTEXT),
                      feature_token: se(),
                      id_token: re(),
                      client_id: G(x.CLIENT_ID),
                    },
                    t
                  )),
                  tt() ? (fe() ? [4, nt(e)] : [3, 2]) : [3, 3]
                );
              case 1:
                (i = c.sent()),
                  (o = i.featureToken),
                  (a = i.features),
                  (r = a),
                  n.feature_token || (n.feature_token = o),
                  (c.label = 2);
              case 2:
                (s = (function (e) {
                  var t = e.match(/([^-]+)-[^-]+/);
                  return t && t[1];
                })(e)) && (n.client_id = s),
                  (c.label = 3);
              case 3:
                return [2, { credentials: n, features: r }];
            }
          });
        });
      }
      function it(e) {
        if (e.persisted && ze("multipleLiffTransition"))
          if ("ios" === C()) window.location.reload();
          else {
            var t = $().liffId,
              n = se();
            if (!t) throw q(j, "Invalid LIFF ID.");
            if (!n)
              throw q("FORBIDDEN", "Invalid featureToken for client features");
            He({ pathname: "app/" + t, query: { feature_token: n } });
          }
      }
      function ot(e) {
        return P(this, void 0, void 0, function () {
          var t, n, r, i, o, a, s, c, u, l;
          return S(this, function (f) {
            switch (f.label) {
              case 0:
                return [
                  4,
                  new Promise(function (e) {
                    var t = R();
                    if (!t || D(t, "9.5.0") < 0) Y(U), e();
                    else if (window._liff && window._liff.features)
                      Y(window._liff.features), e();
                    else {
                      var n = function (t) {
                        De("ready", n),
                          t &&
                            t.detail &&
                            t.detail.data &&
                            t.detail.data.features &&
                            Y(t.detail.data.features),
                          e();
                      };
                      Ce("ready", n);
                    }
                  }),
                ];
              case 1:
                return f.sent(), et(), [4, rt(e.liffId)];
              case 2:
                return (
                  (t = f.sent()),
                  (n = t.credentials),
                  (r = n.access_token),
                  (i = n.context_token),
                  (o = n.feature_token),
                  (a = n.id_token),
                  (s = n.client_id),
                  (c = t.features),
                  o ? [4, $e(e.liffId, o)] : [3, 4]
                );
              case 3:
                f.sent(), tt() && ce(o), (f.label = 4);
              case 4:
                return (
                  (u = "function" == typeof window._liff.validateFeatureToken),
                  i && le(Le(i)),
                  window.addEventListener("pageshow", it),
                  tt() && Y(c || U),
                  fe()
                    ? [3, 8]
                    : o && r
                    ? [3, 7]
                    : (Ne(tt() ? { redirectUri: location.href } : void 0),
                      tt() ? [4, new Promise(function () {})] : [3, 6])
                );
              case 5:
                f.sent(), (f.label = 6);
              case 6:
                throw q(j, "Failed to parse feature_token or access_token");
              case 7:
                if (
                  u &&
                  !(function (e, t) {
                    return (
                      (window._liff.makeFeatureTokenHash = function (e, t) {
                        return be()(e + "-" + t);
                      }),
                      !!window._liff.validateFeatureToken(e, t)
                    );
                  })(e.liffId, o)
                )
                  throw (Ne(), q(j, "Failed to validate feature_token"));
                !u && window.history.length > 1
                  ? je("potential abuser")
                  : (ce(o), ne(r)),
                  (f.label = 8);
              case 8:
                return (
                  a && !re() && ie(a), a && s && !oe() ? [4, Ge(a, s)] : [3, 10]
                );
              case 9:
                (l = f.sent()) && ae(l), (f.label = 10);
              case 10:
                return [2];
            }
          });
        });
      }
      function at(e) {
        return P(this, void 0, void 0, function () {
          var t, n, r, i, o, a, s;
          return S(this, function (c) {
            switch (c.label) {
              case 0:
                return (
                  (t = Ae("apps")),
                  (n = t + "/" + e + "/contextToken"),
                  (r = te()),
                  (i = {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  }),
                  r && (i.Authorization = "Bearer " + r),
                  [4, Be(n, { headers: i })]
                );
              case 1:
                if (((o = c.sent()), !(a = o.contextToken)))
                  throw q(j, "Can not get context from server.");
                if (!(s = Le(a))) throw q(j, "Invalid context token.");
                return [2, s];
            }
          });
        });
      }
      function st() {
        return P(this, void 0, void 0, function () {
          var e;
          return S(this, function (t) {
            switch (t.label) {
              case 0:
                if (!(e = $().liffId)) throw q(j, "Invalid LIFF ID.");
                return [4, at(e)];
              case 1:
                return le(t.sent()), [2];
            }
          });
        });
      }
      function ct(e) {
        return P(this, void 0, void 0, function () {
          var t,
            n,
            r,
            i = this;
          return S(this, function (o) {
            switch (o.label) {
              case 0:
                (t = function () {
                  return P(i, void 0, void 0, function () {
                    var t, n, r, i, o, a;
                    return S(this, function (s) {
                      switch (s.label) {
                        case 0:
                          return [
                            4,
                            ((c = $()),
                            (u = ve.parse(window.location.search)),
                            (l = Z()),
                            (f = {
                              grant_type: "authorization_code",
                              client_id: u.liffClientId,
                              appId: c.liffId,
                              code: u.code,
                              code_verifier: l.codeVerifier,
                              redirect_uri: c.redirectUri || u.liffRedirectUri,
                              id_token_key_type: "JWK",
                            }),
                            (d = ve.stringify(f)),
                            Be(Ae("token"), {
                              method: "POST",
                              headers: {
                                "Content-Type":
                                  "application/x-www-form-urlencoded;charset=UTF-8",
                              },
                              body: d,
                            })),
                          ];
                        case 1:
                          return (
                            (t = s.sent()),
                            (n = t.access_token),
                            (r = t.id_token),
                            (i = t.expires_in),
                            ne(n),
                            (function (e) {
                              var t = $();
                              J.set(
                                L + ":" + x.EXPIRES + ":" + t.liffId,
                                e.getTime(),
                                {
                                  expires: e.toUTCString(),
                                  path: "/",
                                  secure: null,
                                }
                              );
                            })(new Date(Date.now() + 1e3 * i)),
                            ee(),
                            r ? (ie(r), [4, Ge(r, e)]) : [3, 3]
                          );
                        case 2:
                          (o = s.sent()) && ae(o), (s.label = 3);
                        case 3:
                          return (a = ve.parse(location.hash).context_token)
                            ? (le(Le(a)), [3, 6])
                            : [3, 4];
                        case 4:
                          return [4, st()];
                        case 5:
                          s.sent(), (s.label = 6);
                        case 6:
                          return [2];
                      }
                      var c, u, l, f, d;
                    });
                  });
                }),
                  (o.label = 1);
              case 1:
                return o.trys.push([1, 3, , 4]), [4, t()];
              case 2:
                return o.sent(), [3, 4];
              case 3:
                throw ((n = o.sent()), (r = n), ee(), r);
              case 4:
                return [2];
            }
          });
        });
      }
      function ut(e) {
        return P(this, void 0, void 0, function () {
          var t;
          return S(this, function (n) {
            switch (n.label) {
              case 0:
                if (!e.liffId)
                  throw q(
                    "INVALID_CONFIG",
                    "liffId is necessary for liff.init()"
                  );
                if (
                  ((z = e),
                  (t = ve.parse(window.location.search)).error &&
                    t.liffOAuth2Error)
                )
                  throw (
                    ((o = t.error),
                    (a = t.error_description),
                    (s = a.replace(/\+/g, " ")),
                    q(j, o + ": " + s))
                  );
                return (
                  (r = t.code),
                  (i = Z()),
                  Boolean(r && !fe() && i && i.codeVerifier)
                    ? [4, ct(t.liffClientId)]
                    : [3, 2]
                );
              case 1:
                n.sent(), (n.label = 2);
              case 2:
                return B() ? [4, ot(e)] : [3, 4];
              case 3:
                return n.sent(), [3, 6];
              case 4:
                return fe() ? [3, 6] : [4, st()];
              case 5:
                n.sent(), (n.label = 6);
              case 6:
                return (
                  t["liff.state"] && me(t["liff.state"]),
                  B() || !fe() ? [2] : (de() && pe(), [2])
                );
            }
            var r, i, o, a, s;
          });
        });
      }
      var lt = new Promise(function (e) {
        Qe = e;
      });
      function ft() {
        var e;
        return "ios" === C()
          ? (e = R()) && D(e, "9.19.0") < 0
            ? "https://static.line-scdn.net/liff/edge/2/ios-918-extensions.js"
            : "https://static.line-scdn.net/liff/edge/2/ios-extensions.js"
          : "https://static.line-scdn.net/liff/edge/2/non-ios-extensions.js";
      }
      function dt() {
        return P(this, void 0, void 0, function () {
          return S(this, function (e) {
            switch (e.label) {
              case 0:
                return [3, 2];
              case 1:
                return [2, e.sent().default];
              case 2:
                return [
                  2,
                  new Promise(function (e, t) {
                    var n = document.createElement("script"),
                      r = ft();
                    (n.onload = function () {
                      var n = window.liffClientExtension;
                      n
                        ? e(n)
                        : t(
                            q(
                              j,
                              "Unable to load client features. (Extension is empty)"
                            )
                          );
                    }),
                      (n.onerror = function () {
                        t(q(j, "Unable to load client features."));
                      }),
                      (n.src = r),
                      (n.type = "text/javascript"),
                      document.body.appendChild(n);
                  }),
                ];
            }
          });
        });
      }
      function pt(e) {
        return P(this, void 0, void 0, function () {
          var t;
          return S(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, dt()];
              case 1:
                return (
                  (t = n.sent()),
                  (function (e) {
                    window && !window.liff && (window.liff = e);
                  })(e),
                  t.install(e),
                  [2]
                );
            }
          });
        });
      }
      function ht(e, t, n) {
        return Promise.all([pt(this), ut(e)])
          .then(function () {
            "function" == typeof t && t(), Qe();
          })
          .catch(function (e) {
            return "function" == typeof n && n(e), Promise.reject(e);
          });
      }
      n(10);
      function vt(e, t, n) {
        void 0 === t && (t = {}), void 0 === n && (n = "");
        var r = se();
        if (!r)
          throw q("FORBIDDEN", "Invalid featureToken for client features");
        if (!window._liff || !window._liff.postMessage)
          throw q(
            "INVALID_ARGUMENT",
            "postMessage is not available from client"
          );
        window._liff.postMessage(e, r, n, JSON.stringify(t));
      }
      function yt(e, t, n) {
        return (
          void 0 === t && (t = {}),
          void 0 === n && (n = { once: !0 }),
          se()
            ? ((n = N({ callbackId: Ee(12), once: !0 }, n)),
              new Promise(function (r, i) {
                var o = function (t) {
                  if (t && t.detail) {
                    var a = t.detail.callbackId === n.callbackId,
                      s = "string" != typeof t.detail.callbackId;
                    (a || s) &&
                      (n.once && De(e, o),
                      t.detail.error
                        ? i(t.detail.error)
                        : t.detail.data
                        ? r(t.detail.data)
                        : i(t.detail));
                  }
                  i();
                };
                Ce(e, o), vt(e, t, n.callbackId);
              }))
            : Promise.reject(
                q("FORBIDDEN", "Invalid featureToken for client features")
              )
        );
      }
      var wt = function (e) {
        return (
          "object" == typeof e &&
          null !== e &&
          (function (e) {
            return "string" == typeof e || e instanceof String;
          })(e.type)
        );
      };
      function mt(e) {
        return Promise.reject(q("INVALID_ARGUMENT", e));
      }
      function gt(e, t) {
        var n = bt,
          r = t.split(".")[0];
        e.removeEventListener(r, n[t]), (n[t] = null);
      }
      var bt = {},
        _t = !1,
        It = !1;
      function Et(e, t, n, r) {
        _t ||
          ((It = (function () {
            var e = !1;
            try {
              var t = Object.defineProperty({}, "passive", {
                get: function () {
                  return (e = !0), !1;
                },
              });
              window.addEventListener("test", t, t),
                window.removeEventListener("test", t, t);
            } catch (Pt) {
              e = !1;
            }
            return e;
          })()),
          (_t = !0));
        var i = t.split(".")[0];
        return new Promise(function (o) {
          var a = function (i) {
            o(i), n && n(i), r && r.once && gt(e, t);
          };
          (bt[t] = a), e.addEventListener(i, a, !!It && r);
        });
      }
      function Tt(e, t, n, r) {
        if ((void 0 === n && (n = {}), "object" != typeof e || !e.postMessage))
          throw q("INVALID_ARGUMENT", "target must be window object");
        if ("string" != typeof t)
          throw q("INVALID_ARGUMENT", "keyname must be string");
        if ("object" != typeof n)
          throw q(
            "INVALID_ARGUMENT",
            "incorrect body format. It should be Object or Array comprised of Object"
          );
        if (!r)
          throw q(
            "INVALID_ARGUMENT",
            "serverEndPointUrl isn't passed. please fill up with proper url"
          );
        if ("development" !== Ke.ENV && "*" === r)
          throw new Error("serverEndPointUrl doesn't allow to set '*'");
        var i = { name: t, body: n };
        e.postMessage(i, r);
      }
      function Ot(e, t) {
        var n;
        Et(
          window,
          "message." + (n = "receivedHealthcheck"),
          (function (e, t, n) {
            return function (r) {
              r.origin === n && r.data.name === e && t(r);
            };
          })(n, e, t)
        );
      }
      var At = (function () {
        function e() {
          (this.payloadToShareTargetPicker = null),
            (this.popupWindow = null),
            (this.doesWaitForSubwindowResult = !1);
        }
        return (
          (e.getInstance = function () {
            return (
              e.instance ? e.instance.reset() : (e.instance = new e()),
              e.instance
            );
          }),
          (e.prototype.init = function (e) {
            return P(this, void 0, void 0, function () {
              var t, n;
              return S(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      r.trys.push([0, 5, , 6]),
                      (this.liffId = e.referrer.liffId),
                      (this.doesWaitForSubwindowResult = !(
                        !e.options || !e.options.waitForSubwindowResult
                      )),
                      (this.allowPostMessageOrigin =
                        this.initAllowPostMessageOrigin()),
                      (this.payloadToShareTargetPicker =
                        this.buildPayloadToShareTargetPicker(e)),
                      window.AbortController &&
                        (this.abortController = new window.AbortController()),
                      this.prepareAnotherWindow(),
                      [4, this.initOtt()]
                    );
                  case 1:
                    return (
                      r.sent(),
                      this.initListener(),
                      this.openAnotherWindow(),
                      this.doesWaitForSubwindowResult
                        ? [4, this.pollingShareResult()]
                        : [3, 3]
                    );
                  case 2:
                    return (t = r.sent()), this.finalize(), [2, t];
                  case 3:
                    return [2];
                  case 4:
                    return [3, 6];
                  case 5:
                    if (
                      ((n = r.sent()), this.finalize(), "AbortError" !== n.name)
                    )
                      throw n;
                    return [3, 6];
                  case 6:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.resetAllVariables = function () {
            (this.liffId = ""),
              (this.allowPostMessageOrigin = ""),
              (this.payloadToShareTargetPicker = null),
              (this.ott = ""),
              (this.popupWindow = null),
              (this.timeoutIDForHealthCheck = null),
              (this.abortController = null),
              (this.internalError = null),
              (this.doesWaitForSubwindowResult = !1);
          }),
          (e.prototype.reset = function () {
            this.finalize(), this.resetAllVariables();
          }),
          (e.prototype.finalize = function () {
            var e, t;
            this.abortController && this.abortController.abort(),
              B() ||
                ((e = this.timeoutIDForHealthCheck),
                (t = this.popupWindow),
                gt(window, "message.receivedHealthcheck"),
                e && clearTimeout(e),
                t && !t.closed && t.close());
          }),
          (e.prototype.buildPayloadToShareTargetPicker = function (e) {
            return { messages: e.messages, referrer: e.referrer };
          }),
          (e.prototype.initAllowPostMessageOrigin = function (e) {
            return (
              void 0 === e && (e = Ae("shareTargetPicker")),
              (function (e) {
                var t = e.match(/^(https?:\/\/.*?)\//);
                return (t && t[1]) || "";
              })(e)
            );
          }),
          (e.prototype.initOtt = function () {
            return P(this, void 0, void 0, function () {
              var e, t, n;
              return S(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      this.abortController && (e = this.abortController.signal),
                      (t =
                        Ae("shareTargetPickerOtt") +
                        "/" +
                        this.liffId +
                        "/ott"),
                      (n = this),
                      [
                        4,
                        Be(t, { method: "GET", signal: e }).then(function (e) {
                          return e.ott;
                        }),
                      ]
                    );
                  case 1:
                    return (n.ott = r.sent()), [2];
                }
              });
            });
          }),
          (e.prototype.prepareAnotherWindow = function () {
            var e;
            B() ||
              ("ios" !== C() ||
              (void 0 === e && (e = window.navigator.userAgent),
              /ipad/.test(e.toLowerCase()))
                ? (this.popupWindow = window.open(
                    "",
                    "liffpopup",
                    "width=480, height=640, menubar=no, toolbar=no, scrollbars=yes"
                  ))
                : (this.popupWindow = window.open()));
          }),
          (e.prototype.openAnotherWindow = function () {
            if (B() && this.payloadToShareTargetPicker)
              (e = this.liffId),
                (t = this.ott),
                (n = this.payloadToShareTargetPicker),
                (r = { liffId: e, ott: t, data: JSON.stringify(n) }),
                (location.href =
                  Ke.SHARE_TARGET_PICKER_SCHEME_URL + "?" + he(r));
            else {
              if (
                ((this.timeoutIDForHealthCheck = window.setTimeout(
                  this.healthCheck.bind(this),
                  1e3
                )),
                !this.popupWindow)
              )
                throw q("CREATE_SUBWINDOW_FAILED");
              !(function (e, t, n) {
                var r = { liffId: t, ott: n };
                e.location.href = Ae("shareTargetPicker") + "?" + he(r);
              })(this.popupWindow, this.liffId, this.ott);
            }
            var e, t, n, r;
          }),
          (e.prototype.initListener = function () {
            B() ||
              Ot(
                this.onReceivedHealthcheck.bind(this),
                this.allowPostMessageOrigin
              );
          }),
          (e.prototype.healthCheck = function () {
            return P(this, void 0, void 0, function () {
              var e;
              return S(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (this.popupWindow && !this.popupWindow.closed)
                      return [3, 7];
                    if (!this.doesWaitForSubwindowResult) return [3, 5];
                    t.label = 1;
                  case 1:
                    return t.trys.push([1, 3, , 4]), [4, this.onCanceled()];
                  case 2:
                    return t.sent(), [3, 4];
                  case 3:
                    return (e = t.sent()), (this.internalError = e), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    this.finalize(), (t.label = 6);
                  case 6:
                    return [3, 8];
                  case 7:
                    (n = this.popupWindow),
                      (r = this.allowPostMessageOrigin),
                      Tt(n, "healthcheck", void 0, r),
                      (this.timeoutIDForHealthCheck = window.setTimeout(
                        this.healthCheck.bind(this),
                        1e3
                      )),
                      (t.label = 8);
                  case 8:
                    return [2];
                }
                var n, r;
              });
            });
          }),
          (e.prototype.onReceivedHealthcheck = function () {
            if (!this.popupWindow || !this.payloadToShareTargetPicker)
              throw q("CREATE_SUBWINDOW_FAILED");
            var e, t, n;
            (e = this.popupWindow),
              (t = this.payloadToShareTargetPicker),
              (n = this.allowPostMessageOrigin),
              Tt(e, "ready", t, n);
          }),
          (e.prototype.onCanceled = function () {
            return P(this, void 0, void 0, function () {
              var e, t;
              return S(this, function (n) {
                switch (n.label) {
                  case 0:
                    if (B() || !this.ott)
                      throw new Error("need to call with ott in client");
                    return (
                      this.abortController && (e = this.abortController.signal),
                      (t = { liffId: this.liffId, ott: this.ott }),
                      [
                        4,
                        Be(Ae("shareTargetPickerResult") + "?" + he(t), {
                          method: "POST",
                          signal: e,
                          headers: {
                            Accept: "application/json",
                            "Content-Type": "application/x-www-form-urlencoded",
                          },
                          body: "result=CANCEL",
                        }),
                      ]
                    );
                  case 1:
                    return [2, "ok" === n.sent().status];
                }
              });
            });
          }),
          (e.prototype.getShareResult = function () {
            return P(this, void 0, void 0, function () {
              var e, t;
              return S(this, function (n) {
                if (!this.ott)
                  throw new Error("need to call with ott in client");
                return (
                  this.abortController && (e = this.abortController.signal),
                  (t = { liffId: this.liffId, ott: this.ott }),
                  [
                    2,
                    Be(Ae("shareTargetPickerResult") + "?" + he(t), {
                      method: "GET",
                      headers: { Accept: "application/json" },
                      signal: e,
                    }),
                  ]
                );
              });
            });
          }),
          (e.isPollingTimeOut = function (e, t) {
            return (t - e) / 6e4 >= 10;
          }),
          (e.prototype.pollingShareResult = function () {
            return P(this, void 0, void 0, function () {
              var t, n;
              return S(this, function (r) {
                switch (r.label) {
                  case 0:
                    (t = Date.now()), (r.label = 1);
                  case 1:
                    if (e.isPollingTimeOut(t, Date.now())) return [3, 4];
                    if (this.internalError) throw this.internalError;
                    return [4, this.getShareResult()];
                  case 2:
                    if ((n = r.sent()) && n.result)
                      switch (n.result) {
                        case "SUCCESS":
                          return [2, { status: "success" }];
                        case "CANCEL":
                          return [2];
                        case "FAILURE":
                        default:
                          throw new Error(n.resultDescription);
                      }
                    return [
                      4,
                      new Promise(function (e) {
                        setTimeout(e, 500);
                      }),
                    ];
                  case 3:
                    return r.sent(), [3, 1];
                  case 4:
                    throw new Error("Timeout: not finished within 10min");
                }
              });
            });
          }),
          e
        );
      })();
      var kt = {
        init: ht,
        getOS: C,
        getVersion: ke,
        getLanguage: function () {
          return navigator.language;
        },
        isInClient: B,
        isLoggedIn: fe,
        login: Ne,
        logout: pe,
        getAccessToken: te,
        getIDToken: re,
        getDecodedIDToken: oe,
        getContext: ue,
        openWindow: function (e) {
          if (
            !(function (e) {
              if (!e || "object" != typeof e) return !1;
              var t = e,
                n = t.url,
                r = [typeof n, typeof t.external],
                i = r[1];
              return (
                "string" === r[0] &&
                "" !== n &&
                ("undefined" === i || "boolean" === i)
              );
            })(e)
          )
            throw q(
              "INVALID_ARGUMENT",
              "Invalid parameters for liff.openWindow()"
            );
          if (B())
            if (window._liff.postMessage) yt("openWindow", e);
            else {
              var t = e.url,
                n = e.external,
                r = void 0 !== n && n;
              window.open(
                (function (e, t) {
                  var n = e.split("?"),
                    r = n[0],
                    i = n[1],
                    o = (void 0 === i ? "" : i).split("#"),
                    a = o[0],
                    s = o[1];
                  return (
                    r +
                    "?is_liff_external_open_window=" +
                    !!t +
                    (a
                      ? "&" +
                        a
                          .split("&")
                          .map(decodeURIComponent)
                          .filter(function (e) {
                            return (
                              -1 === e.indexOf("is_liff_external_open_window")
                            );
                          })
                          .join("&")
                          .concat(s ? "#" + s : "")
                      : "")
                  );
                })(t, r)
              );
            }
          else window.open(e.url, "_blank");
        },
        closeWindow: function () {
          if (window._liff && window._liff.postMessage) {
            var e = R();
            null !== e && D(e, "10.15.0") >= 0
              ? "ios" === C()
                ? window._liff.postMessage("closeWindow", "")
                : window._liff.postMessage("closeWindow", "", "", "")
              : yt("closeWindow");
          } else window.close();
        },
        getFeatures: Q,
        getFriendship: function () {
          return Be(Ae("friendship"));
        },
        checkFeature: function (e) {
          var t = Q();
          return !!t && t.indexOf(e) > -1;
        },
        getAId: function () {
          return ((ue() || {}).d || {}).aId;
        },
        getProfilePlus: function () {
          return (ue() || {}).profilePlus;
        },
        getIsVideoAutoPlay: function () {
          return ((ue() || {}).d || {}).autoplay || !1;
        },
        getLineVersion: R,
        isApiAvailable: ze,
        getProfile: function () {
          return Be(Ae("profile"));
        },
        sendMessages: function (e) {
          if (
            !(function (e) {
              return Array.isArray(e) && e.every(wt);
            })(e)
          )
            return mt("Parameter 'messages' must be an array of { type, ... }");
          var t = e.length;
          return t < 1 || t > 5
            ? mt("Number of messages should be in range 1 to 5.")
            : Be(Ae("message"), {
                method: "POST",
                body: JSON.stringify({ messages: e }),
              });
        },
        shareTargetPicker: function (e) {
          return P(this, void 0, void 0, function () {
            var t, n, r, i, o, a, s, c, u, l;
            return S(this, function (f) {
              switch (f.label) {
                case 0:
                  if (
                    ((t = (ue() || {}).availability),
                    (n = (t || {}).shareTargetPicker),
                    (i = (r = n || {}).permission),
                    (o = r.minVer),
                    !i)
                  )
                    throw B()
                      ? q(
                          "FORBIDDEN",
                          "Need LINE App " +
                            o +
                            " at least or consent on shareTargetPicker usage on LINE developer site"
                        )
                      : q(
                          "FORBIDDEN",
                          "Need consent on shareTargetPicker usage on LINE developer site"
                        );
                  if (!fe())
                    throw q(
                      "UNAUTHORIZED",
                      "Need access_token for api call, Please login first"
                    );
                  if (!e || !Array.isArray(e) || 0 === e.length)
                    throw q("INVALID_ARGUMENT", "no proper argument");
                  if (e.length > 5)
                    throw q(
                      "INVALID_ARGUMENT",
                      "exceed the limit of num of messages"
                    );
                  if (!(a = $().liffId)) throw q("INVALID_CONFIG");
                  f.label = 1;
                case 1:
                  return (
                    f.trys.push([1, 3, , 4]),
                    (s = At.getInstance()),
                    (c = R()),
                    (u = { waitForSubwindowResult: !0 }),
                    B() &&
                      c &&
                      D(c, "10.11.0") < 0 &&
                      (u.waitForSubwindowResult = !1),
                    [
                      4,
                      s.init({
                        messages: e,
                        referrer: { liffId: a, url: location.origin },
                        options: u,
                      }),
                    ]
                  );
                case 2:
                  return [2, f.sent()];
                case 3:
                  throw (l = f.sent()) instanceof W
                    ? l
                    : q("EXCEPTION_IN_SUBWINDOW", l.message);
                case 4:
                  return [2];
              }
            });
          });
        },
        permanentLink: {
          createUrl: function () {
            var e = we(),
              t = window.location,
              n = t.pathname,
              r = t.search,
              i = t.hash,
              o = t.origin,
              a = new URL(e.endpointUrl);
            if (
              a.origin !== o ||
              !(function (e, t) {
                return (
                  0 === t.indexOf(e) &&
                  (e.endsWith("/") && (e = e.substring(0, e.length - 1)),
                  void 0 === t[e.length] || "/" === t[e.length])
                );
              })(a.pathname, n)
            )
              throw q(
                "INVALID_CONFIG",
                "Current page is not under entrypoint."
              );
            var s = n.substring(a.pathname.length);
            s.length > 0 && "/" !== s[0] && (s = "/" + s);
            var c = new RegExp("^" + F.join("|")),
              u = i
                .substring(1)
                .split("&")
                .filter(function (e) {
                  return !c.test(e) && Boolean(e);
                })
                .join("&"),
              l = u === a.hash.substring(1) ? "" : u,
              f = function (e) {
                return e
                  .substring(1)
                  .split("&")
                  .filter(function (e) {
                    return !/liff\.state/.test(e) && Boolean(e);
                  });
              },
              d = f(r),
              p = f(a.search);
            ye && d.push(ye);
            for (var h = 0; h < p.length; h++) {
              var v = p[h],
                y = d.indexOf(v);
              y > -1 && d.splice(y, 1);
            }
            var w = d.join("&"),
              m = s + ("" !== w ? "?" + w : "") + (l ? "#" + l : "");
            return (
              "replace" === e.permanentLinkPattern &&
                "" !== m &&
                (m = "" + n + r + (l ? "#" + l : "")),
              "https://liff.line.me/" + $().liffId + m
            );
          },
          setExtraQueryParam: function (e) {
            ye = e;
          },
        },
        ready: lt,
        get id() {
          return $().liffId || null;
        },
        _dispatchEvent: function (e) {
          var t = {};
          try {
            t = JSON.parse(e);
          } catch (r) {
            throw q("INVALID_ARGUMENT", r.message);
          }
          var n = (function (e) {
            return new CustomEvent("liffEvent", { detail: e });
          })(t);
          window.dispatchEvent(n);
        },
        _call: yt,
        _addListener: Ce,
        _removeListener: De,
        _postMessage: vt,
      };
      kt.init = ht.bind(kt);
      var Nt = kt;
      t.default = Nt;
    },
  ]).default;
});
