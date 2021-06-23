(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    'use strict';

    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }

    function ba(a) {
        var b = "undefined" != typeof m.Symbol && p(m.Symbol, "iterator") && a[p(m.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }
    var ca = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        q = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, d) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = d.value;
            return a
        };

    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var d = a[b];
            if (d && d.Math == Math) return d
        }
        throw Error("Cannot find global object");
    }
    var r = da(this),
        t = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        m = {},
        v = {};

    function p(a, b) {
        var d = v[b];
        if (null == d) return a[b];
        d = a[d];
        return void 0 !== d ? d : a[b]
    }

    function x(a, b, d) {
        if (b) a: {
            var c = a.split(".");a = 1 === c.length;
            var f = c[0],
                h;!a && f in m ? h = m : h = r;
            for (f = 0; f < c.length - 1; f++) {
                var e = c[f];
                if (!(e in h)) break a;
                h = h[e]
            }
            c = c[c.length - 1];d = t && "es6" === d ? h[c] : null;b = b(d);null != b && (a ? q(m, c, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== d && (void 0 === v[c] && (v[c] = t ? r.Symbol(c) : "$jscp$" + c), q(h, v[c], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    var y;
    if (t && "function" == typeof Object.setPrototypeOf) y = Object.setPrototypeOf;
    else {
        var z;
        a: {
            var ea = {
                    a: !0
                },
                fa = {};
            try {
                fa.__proto__ = ea;
                z = fa.a;
                break a
            } catch (a) {}
            z = !1
        }
        y = z ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var A = y;

    function B(a, b) {
        a.prototype = ca(b.prototype);
        a.prototype.constructor = a;
        if (A) A(a, b);
        else
            for (var d in b)
                if ("prototype" != d)
                    if (Object.defineProperties) {
                        var c = Object.getOwnPropertyDescriptor(b, d);
                        c && Object.defineProperty(a, d, c)
                    } else a[d] = b[d];
        a.T = b.prototype
    }

    function C() {
        this.l = !1;
        this.h = null;
        this.i = void 0;
        this.g = 1;
        this.A = this.s = 0;
        this.j = null
    }

    function D(a) {
        if (a.l) throw new TypeError("Generator is already running");
        a.l = !0
    }
    C.prototype.o = function(a) {
        this.i = a
    };

    function E(a, b) {
        a.j = {
            N: b,
            O: !0
        };
        a.g = a.s || a.A
    }
    C.prototype.return = function(a) {
        this.j = {
            return: a
        };
        this.g = this.A
    };

    function F(a, b, d) {
        a.g = d;
        return {
            value: b
        }
    }

    function ha(a) {
        this.g = new C;
        this.h = a
    }

    function ia(a, b) {
        D(a.g);
        var d = a.g.h;
        if (d) return G(a, "return" in d ? d["return"] : function(c) {
            return {
                value: c,
                done: !0
            }
        }, b, a.g.return);
        a.g.return(b);
        return H(a)
    }

    function G(a, b, d, c) {
        try {
            var f = b.call(a.g.h, d);
            if (!(f instanceof Object)) throw new TypeError("Iterator result " + f + " is not an object");
            if (!f.done) return a.g.l = !1, f;
            var h = f.value
        } catch (e) {
            return a.g.h = null, E(a.g, e), H(a)
        }
        a.g.h = null;
        c.call(a.g, h);
        return H(a)
    }

    function H(a) {
        for (; a.g.g;) try {
            var b = a.h(a.g);
            if (b) return a.g.l = !1, {
                value: b.value,
                done: !1
            }
        } catch (d) {
            a.g.i = void 0, E(a.g, d)
        }
        a.g.l = !1;
        if (a.g.j) {
            b = a.g.j;
            a.g.j = null;
            if (b.O) throw b.N;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }

    function ja(a) {
        this.next = function(b) {
            D(a.g);
            a.g.h ? b = G(a, a.g.h.next, b, a.g.o) : (a.g.o(b), b = H(a));
            return b
        };
        this.throw = function(b) {
            D(a.g);
            a.g.h ? b = G(a, a.g.h["throw"], b, a.g.o) : (E(a.g, b), b = H(a));
            return b
        };
        this.return = function(b) {
            return ia(a, b)
        };
        this[p(m.Symbol, "iterator")] = function() {
            return this
        }
    }

    function I(a, b) {
        b = new ja(new ha(b));
        A && a.prototype && A(b, a.prototype);
        return b
    }
    x("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new d("jscomp_symbol_" + (f || "") + "_" + c++, f)
        }

        function d(f, h) {
            this.g = f;
            q(this, "description", {
                configurable: !0,
                writable: !0,
                value: h
            })
        }
        if (a) return a;
        d.prototype.toString = function() {
            return this.g
        };
        var c = 0;
        return b
    }, "es6");
    x("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, m.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), d = 0; d < b.length; d++) {
            var c = r[b[d]];
            "function" === typeof c && "function" != typeof c.prototype[a] && q(c.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ka(aa(this))
                }
            })
        }
        return a
    }, "es6");

    function ka(a) {
        a = {
            next: a
        };
        a[p(m.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }
    x("Promise", function(a) {
        function b(e) {
            this.h = 0;
            this.i = void 0;
            this.g = [];
            this.s = !1;
            var g = this.j();
            try {
                e(g.resolve, g.reject)
            } catch (k) {
                g.reject(k)
            }
        }

        function d() {
            this.g = null
        }

        function c(e) {
            return e instanceof b ? e : new b(function(g) {
                g(e)
            })
        }
        if (a) return a;
        d.prototype.h = function(e) {
            if (null == this.g) {
                this.g = [];
                var g = this;
                this.i(function() {
                    g.l()
                })
            }
            this.g.push(e)
        };
        var f = r.setTimeout;
        d.prototype.i = function(e) {
            f(e, 0)
        };
        d.prototype.l = function() {
            for (; this.g && this.g.length;) {
                var e = this.g;
                this.g = [];
                for (var g = 0; g < e.length; ++g) {
                    var k =
                        e[g];
                    e[g] = null;
                    try {
                        k()
                    } catch (l) {
                        this.j(l)
                    }
                }
            }
            this.g = null
        };
        d.prototype.j = function(e) {
            this.i(function() {
                throw e;
            })
        };
        b.prototype.j = function() {
            function e(l) {
                return function(n) {
                    k || (k = !0, l.call(g, n))
                }
            }
            var g = this,
                k = !1;
            return {
                resolve: e(this.J),
                reject: e(this.l)
            }
        };
        b.prototype.J = function(e) {
            if (e === this) this.l(new TypeError("A Promise cannot resolve to itself"));
            else if (e instanceof b) this.L(e);
            else {
                a: switch (typeof e) {
                    case "object":
                        var g = null != e;
                        break a;
                    case "function":
                        g = !0;
                        break a;
                    default:
                        g = !1
                }
                g ? this.I(e) : this.o(e)
            }
        };
        b.prototype.I = function(e) {
            var g = void 0;
            try {
                g = e.then
            } catch (k) {
                this.l(k);
                return
            }
            "function" == typeof g ? this.M(g, e) : this.o(e)
        };
        b.prototype.l = function(e) {
            this.A(2, e)
        };
        b.prototype.o = function(e) {
            this.A(1, e)
        };
        b.prototype.A = function(e, g) {
            if (0 != this.h) throw Error("Cannot settle(" + e + ", " + g + "): Promise already settled in state" + this.h);
            this.h = e;
            this.i = g;
            2 === this.h && this.K();
            this.P()
        };
        b.prototype.K = function() {
            var e = this;
            f(function() {
                if (e.R()) {
                    var g = r.console;
                    "undefined" !== typeof g && g.error(e.i)
                }
            }, 1)
        };
        b.prototype.R =
            function() {
                if (this.s) return !1;
                var e = r.CustomEvent,
                    g = r.Event,
                    k = r.dispatchEvent;
                if ("undefined" === typeof k) return !0;
                "function" === typeof e ? e = new e("unhandledrejection", {
                    cancelable: !0
                }) : "function" === typeof g ? e = new g("unhandledrejection", {
                    cancelable: !0
                }) : (e = r.document.createEvent("CustomEvent"), e.initCustomEvent("unhandledrejection", !1, !0, e));
                e.promise = this;
                e.reason = this.i;
                return k(e)
            };
        b.prototype.P = function() {
            if (null != this.g) {
                for (var e = 0; e < this.g.length; ++e) h.h(this.g[e]);
                this.g = null
            }
        };
        var h = new d;
        b.prototype.L =
            function(e) {
                var g = this.j();
                e.B(g.resolve, g.reject)
            };
        b.prototype.M = function(e, g) {
            var k = this.j();
            try {
                e.call(g, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        b.prototype.then = function(e, g) {
            function k(u, w) {
                return "function" == typeof u ? function(S) {
                    try {
                        l(u(S))
                    } catch (T) {
                        n(T)
                    }
                } : w
            }
            var l, n, U = new b(function(u, w) {
                l = u;
                n = w
            });
            this.B(k(e, l), k(g, n));
            return U
        };
        b.prototype.catch = function(e) {
            return this.then(void 0, e)
        };
        b.prototype.B = function(e, g) {
            function k() {
                switch (l.h) {
                    case 1:
                        e(l.i);
                        break;
                    case 2:
                        g(l.i);
                        break;
                    default:
                        throw Error("Unexpected state: " +
                            l.h);
                }
            }
            var l = this;
            null == this.g ? h.h(k) : this.g.push(k);
            this.s = !0
        };
        b.resolve = c;
        b.reject = function(e) {
            return new b(function(g, k) {
                k(e)
            })
        };
        b.race = function(e) {
            return new b(function(g, k) {
                for (var l = ba(e), n = l.next(); !n.done; n = l.next()) c(n.value).B(g, k)
            })
        };
        b.all = function(e) {
            var g = ba(e),
                k = g.next();
            return k.done ? c([]) : new b(function(l, n) {
                function U(S) {
                    return function(T) {
                        u[S] = T;
                        w--;
                        0 == w && l(u)
                    }
                }
                var u = [],
                    w = 0;
                do u.push(void 0), w++, c(k.value).B(U(u.length - 1), n), k = g.next(); while (!k.done)
            })
        };
        return b
    }, "es6");
    x("Array.from", function(a) {
        return a ? a : function(b, d, c) {
            d = null != d ? d : function(g) {
                return g
            };
            var f = [],
                h = "undefined" != typeof m.Symbol && p(m.Symbol, "iterator") && b[p(m.Symbol, "iterator")];
            if ("function" == typeof h) {
                b = h.call(b);
                for (var e = 0; !(h = b.next()).done;) f.push(d.call(c, h.value, e++))
            } else
                for (h = b.length, e = 0; e < h; e++) f.push(d.call(c, b[e], e));
            return f
        }
    }, "es6");
    x("Promise.allSettled", function(a) {
        function b(c) {
            return {
                status: "fulfilled",
                value: c
            }
        }

        function d(c) {
            return {
                status: "rejected",
                reason: c
            }
        }
        return a ? a : function(c) {
            var f = this;
            c = p(Array, "from").call(Array, c, function(h) {
                return f.resolve(h).then(b, d)
            });
            return f.all(c)
        }
    }, "es_2020");
    var J = this || self,
        la = /^[\w+/_-]+[=]{0,2}$/,
        K = null;

    function ma(a) {
        return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && la.test(a) ? a : ""
    }

    function L(a) {
        return a
    };

    function M(a, b) {
        this.h = a === N && b || "";
        this.g = na
    }

    function O(a) {
        return a instanceof M && a.constructor === M && a.g === na ? a.h : "type_error:Const"
    }
    var na = {},
        N = {};

    function P(a, b) {
        var d = void 0;
        return new(d || (d = m.Promise))(function(c, f) {
            function h(k) {
                try {
                    g(b.next(k))
                } catch (l) {
                    f(l)
                }
            }

            function e(k) {
                try {
                    g(b["throw"](k))
                } catch (l) {
                    f(l)
                }
            }

            function g(k) {
                k.done ? c(k.value) : (new d(function(l) {
                    l(k.value)
                })).then(h, e)
            }
            g((b = b.apply(a, void 0)).next())
        })
    };

    function Q(a, b, d) {
        a.addEventListener && a.addEventListener(b, d, !1)
    };
    var R;

    function V(a, b) {
        this.g = b === oa ? a : ""
    }
    V.prototype.toString = function() {
        return this.g + ""
    };

    function pa(a) {
        return a instanceof V && a.constructor === V ? a.g : "type_error:TrustedResourceUrl"
    }

    function qa(a, b) {
        var d = O(a);
        if (!ra.test(d)) throw Error("Invalid TrustedResourceUrl format: " + d);
        a = d.replace(sa, function(c, f) {
            if (!Object.prototype.hasOwnProperty.call(b, f)) throw Error('Found marker, "' + f + '", in format string, "' + d + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            c = b[f];
            return c instanceof M ? O(c) : encodeURIComponent(String(c))
        });
        return W(a)
    }
    var sa = /%{(\w+)}/g,
        ra = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
        oa = {};

    function W(a) {
        if (void 0 === R) {
            var b = null;
            var d = J.trustedTypes;
            if (d && d.createPolicy) {
                try {
                    b = d.createPolicy("goog#html", {
                        createHTML: L,
                        createScript: L,
                        createScriptURL: L
                    })
                } catch (c) {
                    J.console && J.console.error(c.message)
                }
                R = b
            } else R = b
        }
        a = (b = R) ? b.createScriptURL(a) : a;
        return new V(a, oa)
    };

    function ta(a) {
        var b;
        (b = a.ownerDocument && a.ownerDocument.defaultView) && b != J ? b = ma(b.document) : (null === K && (K = ma(J.document)), b = K);
        b && a.setAttribute("nonce", b)
    };

    function ua(a, b) {
        var d = !1;
        d = void 0 === d ? !1 : d;
        return new m.Promise(function(c, f) {
            function h() {
                e.onload = null;
                e.onerror = null;
                b.document.body.removeChild(e)
            }
            var e = b.document.createElement("script");
            e.onload = function() {
                h();
                c()
            };
            e.onerror = function() {
                h();
                f(7)
            };
            e.type = "text/javascript";
            e.src = pa(a);
            ta(e);
            d && "complete" !== b.document.readyState ? Q(b, "load", function() {
                b.document.body.appendChild(e)
            }) : b.document.body.appendChild(e)
        })
    }

    function va(a, b) {
        var d = window;
        return new m.Promise(function(c) {
            void 0 === b && (b = d.document.createElement("iframe"));
            b.addEventListener("load", function() {
                c(b)
            });
            b.src = pa(a).toString();
            b.width = "0";
            b.height = "0";
            b.style.display = "none";
            d.document.body.appendChild(b)
        })
    };

    function wa(a) {
        return new m.Promise(function(b) {
            setTimeout(function() {
                return void b(void 0)
            }, a)
        })
    };

    function X(a, b, d) {
        var c = window;
        c = void 0 === c ? window : c;
        this.H = b;
        this.h = c;
        this.m = void 0 === d ? 0 : d;
        this.i = qa(new M(N, "https://pagead2.googlesyndication.com/bg/%{basename}.js"), {
            basename: encodeURIComponent(a)
        })
    }

    function xa(a) {
        return P(a, function d() {
            var c = this;
            return I(d, function(f) {
                switch (f.g) {
                    case 1:
                        return F(f, ya(c), 2);
                    case 2:
                        return F(f, za(c), 3);
                    case 3:
                        if (!(0 < c.m)) {
                            f.g = 4;
                            break
                        }
                        return F(f, wa(c.m), 4);
                    case 4:
                        return f.return(Aa(c))
                }
            })
        })
    }

    function ya(a) {
        return P(a, function d() {
            var c = this,
                f;
            return I(d, function(h) {
                f = document.createElement("iframe");
                f.style.display = "none";
                document.body.appendChild(f);
                if (!f.contentWindow) throw 3;
                c.h = f.contentWindow;
                return h.return(ua(c.i, c.h))
            })
        })
    }

    function za(a) {
        return new m.Promise(function(b, d) {
            a.h.botguard && a.h.botguard.bg ? a.g = new a.h.botguard.bg(a.H, b) : d(5)
        })
    }
    X.prototype.snapshotSync = function() {
        var a = void 0;
        if (this.g && this.g.invoke && (this.g.invoke(function(b) {
                a = b
            }, !1), a)) return a;
        throw 6;
    };

    function Aa(a) {
        return new m.Promise(function(b, d) {
            a.g && a.g.invoke ? a.g.invoke(function(c) {
                b(c)
            }, !0) : d(6)
        })
    };

    function Ba(a) {
        switch (a) {
            case "pt":
            case "cr":
                return a;
            default:
                return ""
        }
    }

    function Ca(a) {
        switch (a) {
            case "env":
            case "int":
                return a;
            default:
                return "env"
        }
    }

    function Da() {
        var a = window.GoogleGcLKhOms;
        if (a && 0 < a.length && (a = a.shift())) return void 0 === a._rc_ ? {
            context: Ba(a._ctx_),
            v: a._bgv_,
            u: a._bgp_,
            D: a._li_,
            C: a._jk_,
            F: Ca(a._st_),
            m: a._dl_
        } : {
            context: Ba(a._ctx_),
            v: a._bgv_,
            u: a._bgp_,
            D: a._li_,
            C: a._jk_,
            F: Ca(a._st_),
            G: a._rc_,
            m: a._dl_
        }
    }

    function Ea() {
        var a = window;
        if (a.GoogleDX5YKUSk) return a.GoogleDX5YKUSk[0];
        var b = new m.Promise(function(d) {
            a.GoogleDX5YKUSk = [b, d]
        });
        return b
    }

    function Fa() {
        return void 0 === window.GoogleGcLKhOms ? 13 : 1
    };

    function Ga(a) {
        this.g = a
    }

    function Ha(a) {
        this.g = a;
        var b = this;
        this.h = !1;
        var d = new MessageChannel;
        this.port = d.port1;
        this.i = new m.Promise(function(c) {
            b.port.onmessage = function() {
                c()
            };
            b.g.postMessage("GoogleBasRYoCJlVEB", "https://tpc.googlesyndication.com", [d.port2])
        })
    }
    B(Ha, Ga);

    function Ia(a, b) {
        return P(a, function c() {
            var f = this,
                h;
            return I(c, function(e) {
                return 1 == e.g ? (h = f, F(e, f.i, 2)) : e.return(new m.Promise(function(g, k) {
                    var l = new MessageChannel;
                    l.port1.onmessage = function(n) {
                        l.port1.close();
                        Array.isArray(n.data) ? g(n.data) : k(9)
                    };
                    h.port.postMessage(b, [l.port2])
                }))
            })
        })
    }

    function Ja(a, b) {
        return P(a, function c() {
            var f = this,
                h;
            return I(c, function(e) {
                if (1 == e.g) return e.s = 2, F(e, Ia(f, [1, b.S, b.H, b.m]), 4);
                if (2 != e.g) return h = e.i, e.return({
                    response: h[0],
                    error: h[1]
                });
                e.s = 0;
                e.j = null;
                return e.return({
                    error: 9
                })
            })
        })
    }

    function Ka() {
        Ga.apply(this, arguments);
        this.h = !0
    }
    B(Ka, Ga);

    function La(a, b) {
        Ma(a, void 0 === b ? null : b)
    }

    function Ma(a, b) {
        var d = window;
        d.google_image_requests || (d.google_image_requests = []);
        var c = d.document.createElement("img");
        if (b) {
            var f = function(h) {
                b && b(h);
                c.removeEventListener && c.removeEventListener("load", f, !1);
                c.removeEventListener && c.removeEventListener("error", f, !1)
            };
            Q(c, "load", f);
            Q(c, "error", f)
        }
        c.src = a;
        d.google_image_requests.push(c)
    };

    function Na() {
        this.url = "https://pagead2.googlesyndication.com/pagead/gen_204?id=sodar2&v=222"
    }

    function Y(a, b, d) {
        a.url += "&" + b + "=" + encodeURIComponent(d.toString())
    }

    function Oa(a, b, d) {
        var c = new Na;
        void 0 === d || d || (c.url = "https://pagead2.googlesyndication.com/pagead/sodar?id=sodar2&v=222");
        Y(c, "t", a);
        b && (Y(c, "li", b.D), Y(c, "cr" === b.context ? "bgai" : "jk", b.C));
        return c
    }

    function Pa(a) {
        return new m.Promise(function(b) {
            La(a, function() {
                b()
            })
        })
    }

    function Qa(a, b) {
        b = Oa(1, b);
        Y(b, "e", a);
        return Pa(b.url)
    };

    function Ra() {
        var a = this;
        this.promise = new m.Promise(function(b, d) {
            a.resolve = b;
            a.reject = d
        })
    };

    function Z(a) {
        this.g = a;
        this.m = 0;
        this.m = Number(this.g.m) || 0
    }

    function Sa(a) {
        return P(a, function d() {
            var c = this;
            return I(d, function(f) {
                if (1 == f.g) {
                    if (Ta(c)) throw 7;
                    c.h = new X(c.g.v, c.g.u, c.m);
                    return F(f, ya(c.h), 2)
                }
                return F(f, za(c.h), 0)
            })
        })
    }
    Z.prototype.snapshotSync = function() {
        if (this.h) return this.h.snapshotSync()
    };

    function Ua(a) {
        return P(a, function d() {
            var c = this;
            return I(d, function(f) {
                if (1 == f.g) {
                    if (Ta(c)) var h = Va(c);
                    else c.h = new X(c.g.v, c.g.u, c.m), h = xa(c.h);
                    return F(f, h, 2)
                }
                c.l = f.i;
                if (c.l) {
                    h = c.g;
                    var e = c.l,
                        g = Oa(2, h, void 0 !== e);
                    void 0 !== e && Y(g, "bg", e);
                    h = 2E3 < g.url.length ? Qa(4, h) : Pa(g.url);
                    f = F(f, h, 0)
                } else f.g = 0, f = void 0;
                return f
            })
        })
    }

    function Wa(a, b) {
        function d(h) {
            h && null !== h.data && "https://www.google.com" === h.origin && null != h.source && h.source === b.contentWindow && (a.i = "id=sodar2&v=222", a.g && (a.i += "&li=" + encodeURIComponent(a.g.D.toString()), a.i += "&" + ("cr" === a.g.context ? "bgai" : "jk") + "=" + encodeURIComponent(a.g.C.toString()), h.source.postMessage(JSON.stringify({
                id: "sodar",
                params: a.i
            }), "https://www.google.com"), c.removeEventListener("message", d, !1)), f.resolve())
        }
        var c = window,
            f = new Ra;
        c.addEventListener("message", d, !1);
        return f.promise
    }

    function Xa(a) {
        return P(a, function d() {
            var c = this,
                f, h, e, g, k;
            return I(d, function(l) {
                if (1 == l.g) {
                    if ("y" !== c.g.G) return l.return();
                    f = W(O(new M(N, "https://www.google.com/recaptcha/api2/aframe")));
                    h = window.document.createElement("iframe");
                    e = va(f, h);
                    g = Wa(c, h);
                    return F(l, m.Promise.all([e, g]), 2)
                }
                k = l.i;
                if (null === k[0].contentWindow) throw 15;
                l.g = 0
            })
        })
    }

    function Ya(a) {
        return P(a, function d() {
            var c = this;
            return I(d, function(f) {
                return F(f, p(m.Promise, "allSettled").call(m.Promise, [Ua(c), Xa(c)]), 0)
            })
        })
    }

    function Ta(a) {
        return "tpc.googlesyndication.com" === window.location.host || "int" === a.g.F ? !1 : !0
    }

    function Va(a) {
        return P(a, function d() {
            var c, f, h = this,
                e;
            return I(d, function(g) {
                if (1 == g.g) return c = W(O(new M(N, "https://tpc.googlesyndication.com/sodar/sodar2/222/runner.html"))), F(g, va(c), 2);
                if (4 != g.g) {
                    f = g.i;
                    if (!f.contentWindow) throw 3;
                    var k = f.contentWindow;
                    k = window.hasOwnProperty("MessageChannel") ? new Ha(k) : new Ka(k);
                    h.j = k;
                    if (h.j.h) {
                        k = h.j.g;
                        var l = k.postMessage;
                        var n = h.g;
                        n = JSON.stringify([n.context, n.v, n.u, n.D, n.C, n.F, void 0 === n.G ? "n" : n.G, void 0 === n.m ? "0" : n.m]);
                        l.call(k, n, "https://tpc.googlesyndication.com");
                        return g.return(void 0)
                    }
                    return F(g, Ja(h.j, {
                        S: h.g.v,
                        H: h.g.u,
                        m: h.m
                    }), 4)
                }
                e = g.i;
                f.parentNode && f.parentNode.removeChild(f);
                if (e.error) throw e.error;
                return g.return(e.response)
            })
        })
    };

    function Za() {
        Z.apply(this, arguments)
    }
    B(Za, Z);
    Za.prototype.o = function() {
        return P(this, function b() {
            var d = this,
                c;
            return I(b, function(f) {
                if (1 == f.g) {
                    if ("env" === d.g.F) return F(f, Ya(d), 0);
                    c = window;
                    return c.GoogleA13IjpGc ? f.return() : F(f, Sa(d), 4)
                }
                c.GoogleA13IjpGc = d;
                f.g = 0
            })
        })
    };

    function $a() {
        Z.apply(this, arguments)
    }
    B($a, Z);
    $a.prototype.o = function() {
        return P(this, function b() {
            var d = this;
            return I(b, function(c) {
                return F(c, Ya(d), 0)
            })
        })
    };

    function ab(a, b) {
        if ("number" === typeof a) b = Qa(a, b);
        else {
            var d = Oa(3, b);
            Y(d, "c", "init");
            var c = a.toString();
            a.name && -1 == c.indexOf(a.name) && (c += ": " + a.name);
            a.message && -1 == c.indexOf(a.message) && (c += ": " + a.message);
            if (a.stack) {
                a = a.stack;
                try {
                    -1 == a.indexOf(c) && (a = c + "\n" + a);
                    for (var f; a != f;) f = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    c = a.replace(/\n */g, "\n")
                } catch (h) {}
            }
            Y(d, "ex", c);
            b = 2E3 < d.url.length ? Qa(11, b) : Pa(d.url)
        }
        return b
    }

    function bb(a) {
        switch (a.context) {
            case "pt":
                a = new $a(a);
                break;
            case "cr":
                a = new Za(a);
                break;
            default:
                throw 2;
        }
        if (!window.postMessage && Ta(a)) throw 8;
        return a.o()
    };
    (function() {
        var a = Da();
        try {
            return a ? bb(a) : m.Promise.race([Ea(), new m.Promise(function(b, d) {
                setTimeout(function() {
                    d(Fa())
                }, 5E3)
            })]).then(function() {
                a = Da();
                if (!a) throw Fa();
                return bb(a)
            }, function(b) {
                return ab(b, a)
            })
        } catch (b) {
            return ab(b, a)
        }
    })();
}).call(this);