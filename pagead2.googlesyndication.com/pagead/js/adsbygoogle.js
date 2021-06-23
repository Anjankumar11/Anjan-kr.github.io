(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var n, aa;

    function ba(a) {
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
    var da = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ea(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var fa = ea(this),
        ha = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        p = {},
        ia = {};

    function r(a, b) {
        var c = ia[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function u(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in p ? f = p : f = fa;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = ha && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? da(p, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ia[d] && (a = 1E9 * Math.random() >>> 0, ia[d] = ha ? fa.Symbol(d) : "$jscp$" + a + "$" + d), da(f, ia[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    u("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.g = f;
            da(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    u("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, p.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = fa[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && da(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ja(ba(this))
                }
            })
        }
        return a
    }, "es6");

    function ja(a) {
        a = {
            next: a
        };
        a[r(p.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }

    function ka(a) {
        return a.raw = a
    }

    function w(a) {
        var b = "undefined" != typeof p.Symbol && r(p.Symbol, "iterator") && a[r(p.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: ba(a)
        }
    }

    function la(a) {
        if (!(a instanceof Array)) {
            a = w(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }
    var ma = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        na;
    if (ha && "function" == typeof Object.setPrototypeOf) na = Object.setPrototypeOf;
    else {
        var oa;
        a: {
            var pa = {
                    a: !0
                },
                qa = {};
            try {
                qa.__proto__ = pa;
                oa = qa.a;
                break a
            } catch (a) {}
            oa = !1
        }
        na = oa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ra = na;

    function x(a, b) {
        a.prototype = ma(b.prototype);
        a.prototype.constructor = a;
        if (ra) ra(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Db = b.prototype
    }

    function sa(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    u("WeakMap", function(a) {
        function b(g) {
            this.g = (f += Math.random() + 1).toString();
            if (g) {
                g = w(g);
                for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
            }
        }

        function c() {}

        function d(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var e = "$jscomp_hidden_" + Math.random(),
            f = 0;
        b.prototype.set = function(g, h) {
            if (!d(g)) throw Error("Invalid WeakMap key");
            if (!sa(g, e)) {
                var k = new c;
                da(g, e, {
                    value: k
                })
            }
            if (!sa(g, e)) throw Error("WeakMap key fail: " + g);
            g[e][this.g] = h;
            return this
        };
        b.prototype.get = function(g) {
            return d(g) && sa(g, e) ? g[e][this.g] : void 0
        };
        b.prototype.has = function(g) {
            return d(g) && sa(g, e) && sa(g[e], this.g)
        };
        b.prototype.delete = function(g) {
            return d(g) && sa(g, e) && sa(g[e], this.g) ? delete g[e][this.g] : !1
        };
        return b
    }, "es6");
    u("Map", function(a) {
        function b() {
            var h = {};
            return h.J = h.next = h.head = h
        }

        function c(h, k) {
            var l = h.g;
            return ja(function() {
                if (l) {
                    for (; l.head != h.g;) l = l.J;
                    for (; l.next != l.head;) return l = l.next, {
                        done: !1,
                        value: k(l)
                    };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
            var m = h.h[l];
            if (m && sa(h.h, l))
                for (h = 0; h < m.length; h++) {
                    var q = m[h];
                    if (k !== k && q.key !== q.key || k === q.key) return {
                        id: l,
                        list: m,
                        index: h,
                        v: q
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                v: void 0
            }
        }

        function e(h) {
            this.h = {};
            this.g = b();
            this.size = 0;
            if (h) {
                h = w(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(w([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x ||
                        "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (q) {
                    return !1
                }
            }()) return a;
        var f = new p.WeakMap;
        e.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.h[l.id] = []);
            l.v ? l.v.value = k : (l.v = {
                next: this.g,
                J: this.g.J,
                head: this.g,
                key: h,
                value: k
            }, l.list.push(l.v), this.g.J.next = l.v, this.g.J = l.v, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.v && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.h[h.id], h.v.J.next = h.v.next, h.v.next.J = h.v.J, h.v.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.h = {};
            this.g = this.g.J = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).v
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).v) && h.value
        };
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        };
        e.prototype.forEach = function(h, k) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value,
                h.call(k, m[1], m[0], this)
        };
        e.prototype[r(p.Symbol, "iterator")] = e.prototype.entries;
        var g = 0;
        return e
    }, "es6");

    function ta(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    u("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = ta(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");

    function ua(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {
                La: e,
                Ya: f
            }
        }
        return {
            La: -1,
            Ya: void 0
        }
    }
    u("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return ua(this, b, c).Ya
        }
    }, "es6");
    u("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = ta(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");

    function va(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[r(p.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    var wa = ha && "function" == typeof r(Object, "assign") ? r(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) sa(d, e) && (a[e] = d[e])
        }
        return a
    };
    u("Object.assign", function(a) {
        return a || wa
    }, "es6");
    u("Promise", function(a) {
        function b(g) {
            this.g = 0;
            this.i = void 0;
            this.h = [];
            this.u = !1;
            var h = this.j();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        }

        function c() {
            this.g = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.h = function(g) {
            if (null == this.g) {
                this.g = [];
                var h = this;
                this.i(function() {
                    h.l()
                })
            }
            this.g.push(g)
        };
        var e = fa.setTimeout;
        c.prototype.i = function(g) {
            e(g, 0)
        };
        c.prototype.l = function() {
            for (; this.g && this.g.length;) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var k =
                        g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.j(l)
                    }
                }
            }
            this.g = null
        };
        c.prototype.j = function(g) {
            this.i(function() {
                throw g;
            })
        };
        b.prototype.j = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.N),
                reject: g(this.l)
            }
        };
        b.prototype.N = function(g) {
            if (g === this) this.l(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.P(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.M(g) : this.m(g)
            }
        };
        b.prototype.M = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.l(k);
                return
            }
            "function" == typeof h ? this.ca(h, g) : this.m(g)
        };
        b.prototype.l = function(g) {
            this.C(2, g)
        };
        b.prototype.m = function(g) {
            this.C(1, g)
        };
        b.prototype.C = function(g, h) {
            if (0 != this.g) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.g);
            this.g = g;
            this.i = h;
            2 === this.g && this.O();
            this.K()
        };
        b.prototype.O = function() {
            var g = this;
            e(function() {
                if (g.L()) {
                    var h = fa.console;
                    "undefined" !== typeof h && h.error(g.i)
                }
            }, 1)
        };
        b.prototype.L =
            function() {
                if (this.u) return !1;
                var g = fa.CustomEvent,
                    h = fa.Event,
                    k = fa.dispatchEvent;
                if ("undefined" === typeof k) return !0;
                "function" === typeof g ? g = new g("unhandledrejection", {
                    cancelable: !0
                }) : "function" === typeof h ? g = new h("unhandledrejection", {
                    cancelable: !0
                }) : (g = fa.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
                g.promise = this;
                g.reason = this.i;
                return k(g)
            };
        b.prototype.K = function() {
            if (null != this.h) {
                for (var g = 0; g < this.h.length; ++g) f.h(this.h[g]);
                this.h = null
            }
        };
        var f = new c;
        b.prototype.P = function(g) {
            var h = this.j();
            g.fa(h.resolve, h.reject)
        };
        b.prototype.ca = function(g, h) {
            var k = this.j();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        b.prototype.then = function(g, h) {
            function k(t, v) {
                return "function" == typeof t ? function(A) {
                    try {
                        l(t(A))
                    } catch (G) {
                        m(G)
                    }
                } : v
            }
            var l, m, q = new b(function(t, v) {
                l = t;
                m = v
            });
            this.fa(k(g, l), k(h, m));
            return q
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.fa = function(g, h) {
            function k() {
                switch (l.g) {
                    case 1:
                        g(l.i);
                        break;
                    case 2:
                        h(l.i);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.g);
                }
            }
            var l = this;
            null == this.h ? f.h(k) : this.h.push(k);
            this.u = !0
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, k) {
                k(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, k) {
                for (var l = w(g), m = l.next(); !m.done; m = l.next()) d(m.value).fa(h, k)
            })
        };
        b.all = function(g) {
            var h = w(g),
                k = h.next();
            return k.done ? d([]) : new b(function(l, m) {
                function q(A) {
                    return function(G) {
                        t[A] = G;
                        v--;
                        0 == v && l(t)
                    }
                }
                var t = [],
                    v = 0;
                do t.push(void 0), v++, d(k.value).fa(q(t.length - 1), m), k = h.next();
                while (!k.done)
            })
        };
        return b
    }, "es6");
    u("Set", function(a) {
        function b(c) {
            this.g = new p.Map;
            if (c) {
                c = w(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.g.size
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(w([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x ||
                        f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        };
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.g.has(c)
        };
        b.prototype.entries = function() {
            return this.g.entries()
        };
        b.prototype.values = function() {
            return r(this.g, "values").call(this.g)
        };
        b.prototype.keys = r(b.prototype,
            "values");
        b.prototype[r(p.Symbol, "iterator")] = r(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    u("Array.prototype.findIndex", function(a) {
        return a ? a : function(b, c) {
            return ua(this, b, c).La
        }
    }, "es6");
    u("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return va(this, function(b) {
                return b
            })
        }
    }, "es6");
    u("Array.prototype.values", function(a) {
        return a ? a : function() {
            return va(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    u("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return p.Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return p.Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    }, "es9");
    var y = this || self;

    function xa(a) {
        a = a.split(".");
        for (var b = y, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function ya(a) {
        a.qa = void 0;
        a.s = function() {
            return a.qa ? a.qa : a.qa = new a
        }
    }

    function Aa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function Ba(a) {
        return Object.prototype.hasOwnProperty.call(a, Ca) && a[Ca] || (a[Ca] = ++Da)
    }
    var Ca = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Da = 0;

    function Ea(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Fa(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Ga(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ga = Ea : Ga = Fa;
        return Ga.apply(null, arguments)
    }

    function Ha(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ia(a) {
        var b = ["__uspapi"],
            c = y;
        b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
        for (var d; b.length && (d = b.shift());) b.length || void 0 === a ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = a
    }

    function Ja(a) {
        return a
    };
    var Ka = (new Date).getTime();
    var La;

    function Ma(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Na(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Oa(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Pa(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Qa(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ra(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Sa(a, b) {
        a: if ("string" === typeof a) a = "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            else {
                for (var c = 0; c < a.length; c++)
                    if (c in a && a[c] === b) {
                        a = c;
                        break a
                    }
                a = -1
            }return 0 <= a
    };

    function Ta(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Ua(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Va(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };

    function Wa(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Xa(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Ya(a, b) {
        return null !== a && b in a
    }

    function Za(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };
    var $a;

    function ab() {
        if (void 0 === $a) {
            var a = null,
                b = y.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Ja,
                        createScript: Ja,
                        createScriptURL: Ja
                    })
                } catch (c) {
                    y.console && y.console.error(c.message)
                }
                $a = a
            } else $a = a
        }
        return $a
    };

    function bb(a, b) {
        this.h = a === cb && b || "";
        this.g = db
    }
    var db = {},
        cb = {};

    function eb(a, b) {
        this.g = b === fb ? a : ""
    }
    eb.prototype.toString = function() {
        return this.g + ""
    };

    function gb(a) {
        return a instanceof eb && a.constructor === eb ? a.g : "type_error:TrustedResourceUrl"
    }
    var hb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        fb = {};

    function ib(a) {
        var b = ab();
        a = b ? b.createScriptURL(a) : a;
        return new eb(a, fb)
    }

    function jb(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };

    function kb(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function lb(a, b) {
        var c = 0;
        a = kb(String(a)).split(".");
        b = kb(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = mb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || mb(0 == f[2].length, 0 == g[2].length) || mb(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }

    function mb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var nb;
    a: {
        var ob = y.navigator;
        if (ob) {
            var pb = ob.userAgent;
            if (pb) {
                nb = pb;
                break a
            }
        }
        nb = ""
    }

    function z(a) {
        return -1 != nb.indexOf(a)
    }

    function qb(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };

    function rb() {
        function a(e) {
            e = Qa(e, d);
            return c[e] || ""
        }
        var b = nb;
        if (z("Trident") || z("MSIE")) return sb(b);
        b = qb(b);
        var c = {};
        Ma(b, function(e) {
            c[e[0]] = e[1]
        });
        var d = Ha(Ya, c);
        return z("Opera") ? a(["Version", "Opera"]) : z("Edge") ? a(["Edge"]) : z("Edg/") ? a(["Edg"]) : !z("Chrome") && !z("CriOS") || z("Edge") ? (b = b[2]) && b[1] || "" : a(["Chrome", "CriOS", "HeadlessChrome"])
    }

    function sb(a) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1]) return b[1];
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
            if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                if (a && a[1]) switch (a[1]) {
                    case "4.0":
                        b = "8.0";
                        break;
                    case "5.0":
                        b = "9.0";
                        break;
                    case "6.0":
                        b = "10.0";
                        break;
                    case "7.0":
                        b = "11.0"
                } else b = "7.0";
                else b = c[1];
        return b
    };

    function tb(a, b, c) {
        this.g = c === ub ? a : ""
    }
    tb.prototype.toString = function() {
        return this.g.toString()
    };

    function vb(a) {
        return a instanceof tb && a.constructor === tb ? a.g : "type_error:SafeHtml"
    }
    var ub = {};

    function wb(a) {
        var b = ab();
        a = b ? b.createHTML(a) : a;
        return new tb(a, null, ub)
    }
    var xb = new tb(y.trustedTypes && y.trustedTypes.emptyHTML || "", 0, ub);
    var yb = Ua(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = vb(xb);
        return !b.parentElement
    });

    function zb(a, b) {
        if (yb())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = vb(b)
    };

    function Ab(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function Bb(a) {
        Bb[" "](a);
        return a
    }
    Bb[" "] = function() {};
    var Cb = {},
        Db = null;
    var Eb = "function" === typeof Uint8Array;

    function B() {}
    var Fb;

    function C(a, b, c, d) {
        a.g = null;
        Fb && (b || (b = Fb), Fb = null);
        var e = a.constructor.messageId,
            f = a.constructor.yb;
        f = e || f;
        b || (b = f ? [e] : []);
        a.j = f ? 0 : -1;
        a.h = b;
        a: {
            if (b = a.h.length)
                if (--b, e = a.h[b], !(null === e || "object" != typeof e || Array.isArray(e) || Eb && e instanceof Uint8Array)) {
                    a.l = b - a.j;
                    a.i = e;
                    break a
                }
            a.l = Number.MAX_VALUE
        }
        a.u = {};
        if (c)
            for (b = 0; b < c.length; b++) e = c[b], e < a.l ? (e += a.j, a.h[e] = a.h[e] || Gb) : (Hb(a), a.i[e] = a.i[e] || Gb);
        if (d && d.length)
            for (c = 0; c < d.length; c++) Ib(a, d[c])
    }
    var Gb = Object.freeze([]);

    function Hb(a) {
        var b = a.l + a.j;
        a.h[b] || (a.i = a.h[b] = {})
    }

    function D(a, b) {
        if (b < a.l) {
            b += a.j;
            var c = a.h[b];
            return c !== Gb ? c : a.h[b] = []
        }
        if (a.i) return c = a.i[b], c === Gb ? a.i[b] = [] : c
    }

    function Jb(a, b) {
        a = D(a, b);
        return null == a ? a : !!a
    }

    function E(a, b, c) {
        a = D(a, b);
        return null == a ? c : a
    }

    function Kb(a, b, c) {
        c = void 0 === c ? !1 : c;
        a = Jb(a, b);
        return null == a ? c : a
    }

    function Lb(a, b) {
        var c = void 0 === c ? 0 : c;
        a = D(a, b);
        a = null == a ? a : +a;
        return null == a ? c : a
    }

    function Mb(a, b, c) {
        b < a.l ? a.h[b + a.j] = c : (Hb(a), a.i[b] = c);
        return a
    }

    function Ib(a, b) {
        for (var c, d, e = 0; e < b.length; e++) {
            var f = b[e],
                g = D(a, f);
            null != g && (c = f, d = g, Mb(a, f, void 0))
        }
        return c ? (Mb(a, c, d), c) : 0
    }

    function H(a, b, c) {
        a.g || (a.g = {});
        if (!a.g[c]) {
            var d = D(a, c);
            d && (a.g[c] = new b(d))
        }
        return a.g[c]
    }

    function I(a, b, c) {
        a.g || (a.g = {});
        if (!a.g[c]) {
            for (var d = D(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.g[c] = e
        }
        b = a.g[c];
        b == Gb && (b = a.g[c] = []);
        return b
    }

    function Nb(a) {
        if (a.g)
            for (var b in a.g)
                if (Object.prototype.hasOwnProperty.call(a.g, b)) {
                    var c = a.g[b];
                    if (Array.isArray(c))
                        for (var d = 0; d < c.length; d++) c[d] && Nb(c[d]);
                    else c && Nb(c)
                }
        return a.h
    }
    B.prototype.m = Eb ? function() {
        var a = Uint8Array.prototype.toJSON;
        Uint8Array.prototype.toJSON = function() {
            var b;
            void 0 === b && (b = 0);
            if (!Db) {
                Db = {};
                for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                    var f = c.concat(d[e].split(""));
                    Cb[e] = f;
                    for (var g = 0; g < f.length; g++) {
                        var h = f[g];
                        void 0 === Db[h] && (Db[h] = g)
                    }
                }
            }
            b = Cb[b];
            c = [];
            for (d = 0; d < this.length; d += 3) {
                var k = this[d],
                    l = (e = d + 1 < this.length) ? this[d + 1] : 0;
                h = (f = d + 2 < this.length) ? this[d + 2] : 0;
                g = k >>
                    2;
                k = (k & 3) << 4 | l >> 4;
                l = (l & 15) << 2 | h >> 6;
                h &= 63;
                f || (h = 64, e || (l = 64));
                c.push(b[g], b[k], b[l] || "", b[h] || "")
            }
            return c.join("")
        };
        try {
            return JSON.stringify(this.h && Nb(this), Ob)
        } finally {
            Uint8Array.prototype.toJSON = a
        }
    } : function() {
        return JSON.stringify(this.h && Nb(this), Ob)
    };

    function Ob(a, b) {
        return "number" !== typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b)
    }

    function Pb(a, b) {
        Fb = b = b ? JSON.parse(b) : null;
        a = new a(b);
        Fb = null;
        return a
    };

    function Qb(a) {
        C(this, a, Rb, null)
    }
    x(Qb, B);

    function Sb(a) {
        C(this, a, null, null)
    }
    x(Sb, B);
    var Rb = [2, 3];

    function J(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function Tb(a) {
        a = J(a);
        var b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Fa: !0,
            sb: b,
            na: a.ablation_viewport_offset
        } : null
    }

    function Ub(a) {
        a = J(a);
        a.eids || (a.eids = []);
        return a.eids
    }

    function Vb(a, b) {
        a = J(a);
        a.tag_partners = a.tag_partners || [];
        a.tag_partners.push(b)
    }

    function Wb(a, b) {
        a = J(a);
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b
    }

    function Xb(a) {
        J(K).allow_second_reactive_tag = a
    };

    function Yb(a) {
        return !!a
    }

    function Zb(a) {
        if (!($b || Yb)(a)) throw Error(String(a));
    };

    function ac(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function bc(a) {
        var b = K.document;
        if (b.currentScript) return ac(b.currentScript, a);
        b = w(b.scripts);
        for (var c = b.next(); !c.done; c = b.next())
            if (0 === ac(c.value, a)) return 0;
        return 1
    };
    var L = {},
        cc = (L.google_ad_channel = !0, L.google_ad_client = !0, L.google_ad_host = !0, L.google_ad_host_channel = !0, L.google_adtest = !0, L.google_tag_for_child_directed_treatment = !0, L.google_tag_for_under_age_of_consent = !0, L.google_tag_partner = !0, L.google_restrict_data_processing = !0, L.google_page_url = !0, L.google_debug_params = !0, L.google_adbreak_test = !0, L.google_ad_frequency_hint = !0, L.google_admob_interstitial_slot = !0, L.google_admob_rewarded_slot = !0, L.google_max_ad_content_rating = !0, L);
    var dc = {};

    function ec() {
        var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
        return null !== a && void 0 !== a ? a : null
    }
    var fc;

    function gc() {
        var a, b;
        void 0 === fc && (fc = null !== (b = null === (a = ec()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
            createHTML: function(c) {
                return c
            },
            createScript: function(c) {
                return c
            },
            createScriptURL: function(c) {
                return c
            }
        })) && void 0 !== b ? b : null);
        return fc
    };

    function ic() {}

    function jc(a, b) {
        if (b !== dc) throw Error("Bad secret");
        this.g = a
    }
    x(jc, ic);
    jc.prototype.toString = function() {
        return this.g.toString()
    };

    function kc(a) {
        var b, c = null === (b = gc()) || void 0 === b ? void 0 : b.createScriptURL(a);
        return new jc(null !== c && void 0 !== c ? c : a, dc)
    }

    function lc(a) {
        var b;
        if (null === (b = ec()) || void 0 === b ? 0 : b.isScriptURL(a)) return a;
        if (a instanceof jc) return a.g;
        throw Error("wrong type");
    };

    function mc(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        if (!Array.isArray(a) || !Array.isArray(a.raw)) throw new TypeError("trustedResourceUrl is a template literal tag function and can only be called as such (e.g. trustedResourceUrl`/somepath.js`)");
        if (0 === c.length) return kc(a[0]);
        d = a[0].toLowerCase();
        if (/^data:/.test(d)) throw Error("Data URLs cannot have expressions in the template literal input.");
        if (/^https:\/\//.test(d) || /^\/\//.test(d)) {
            var e = d.indexOf("//") + 2;
            var f = d.indexOf("/",
                e);
            if (f <= e) throw Error("Can't interpolate data in a url's origin, Please make sure to fully specify the origin, terminated with '/'.");
            e = d.substring(e, f);
            if (!/^[0-9a-z.:-]+$/i.test(e)) throw Error("The origin contains unsupported characters.");
            if (!/^[^:]*(:[0-9]+)?$/i.test(e)) throw Error("Invalid port number.");
            if (!/(^|\.)[a-z][^.]*$/i.test(e)) throw Error("The top-level domain must start with a letter.");
            e = !0
        } else e = !1;
        if (e = !e) {
            if (/^\//.test(d))
                if ("/" === d || 1 < d.length && "/" !== d[1] && "\\" !== d[1]) e = !0;
                else throw Error("The path start in the url is invalid.");
            else e = !1;
            e = !e
        }
        if (e) {
            if (/^about:blank/.test(d)) {
                if ("about:blank" !== d && !/^about:blank#/.test(d)) throw Error("The about url is invalid.");
                d = !0
            } else d = !1;
            e = !d
        }
        if (e) throw Error("Trying to interpolate expressions in an unsupported url format.");
        d = [a[0]];
        for (e = 0; e < c.length; e++) d.push(encodeURIComponent(c[e])), d.push(a[e + 1]);
        return kc(d.join(""))
    };
    var nc = ka(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/slotcar_library", ".js"]),
        oc = ka(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/slotcar_library", ".js"]),
        pc = ka(["https://googleads.g.doubleclick.net/pagead/html/", "/", "/zrt_lookup.html"]),
        qc = ka(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl", ".js"]),
        rc = ka(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl", ".js"]),
        sc = ka(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/",
            "/show_ads_impl_with_ama", ".js"
        ]),
        tc = ka(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl_with_ama", ".js"]),
        uc = ka(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_instrumented", ".js"]),
        vc = ka(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl_instrumented", ".js"]);
    var wc = document,
        K = window;
    var xc = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function yc(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };

    function zc(a) {
        return a instanceof ic ? lc(a) : gb(a)
    };

    function Ac(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    }

    function Bc(a) {
        return !!(a.error && a.meta && a.id)
    };

    function Cc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function Dc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    };

    function Ec(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Fc(a) {
        this.g = a || y.document || document
    }
    Fc.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function Gc() {
        return !Hc() && (z("iPod") || z("iPhone") || z("Android") || z("IEMobile"))
    }

    function Hc() {
        return z("iPad") || z("Android") && !z("Mobile") || z("Silk")
    };
    var Ic = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        Jc = /#|$/;

    function Kc(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    Bb(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function Lc(a, b) {
        var c = a.createElement("script");
        c.src = zc(b);
        var d;
        b = (c.ownerDocument && c.ownerDocument.defaultView || window).document;
        (d = (b = null === (d = b.querySelector) || void 0 === d ? void 0 : d.call(b, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", d);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function Mc(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Nc(a, b) {
        if (!Oc() && !Pc()) {
            var c = Math.random();
            if (c < b) return c = Qc(y), a[Math.floor(c * a.length)]
        }
        return null
    }

    function Qc(a) {
        if (!a.crypto) return Math.random();
        try {
            var b = new Uint32Array(1);
            a.crypto.getRandomValues(b);
            return b[0] / 65536 / 65536
        } catch (c) {
            return Math.random()
        }
    }

    function Rc(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function Sc(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Pc = Ua(function() {
        return Pa(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Tc) || 1E-4 > Math.random()
    });

    function Uc(a, b) {
        var c = -1;
        try {
            a && (c = parseInt(a.getItem(b), 10))
        } catch (d) {
            return null
        }
        return 0 <= c && 1E3 > c ? c : null
    }

    function Vc(a, b, c) {
        a = Pc() ? null : Math.floor(1E3 * Qc(a));
        var d;
        if (d = null != a && b) a: {
            var e = String(a);
            try {
                if (b) {
                    b.setItem(c, e);
                    d = e;
                    break a
                }
            } catch (f) {}
            d = null
        }
        return d ? a : null
    }
    var Oc = Ua(function() {
        return Tc("MSIE")
    });

    function Tc(a) {
        return -1 != nb.indexOf(a)
    }
    var Wc = /^([0-9.]+)px$/,
        Xc = /^(-?[0-9.]{1,30})$/;

    function Yc(a) {
        return Xc.test(a) && (a = Number(a), !isNaN(a)) ? a : null
    }

    function M(a) {
        return (a = Wc.exec(a)) ? +a[1] : null
    }

    function Zc(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (g) {
                d = !1
            }
            if (d) return a;
            a: {
                try {
                    var e = a.parent;
                    if (e && e != a) {
                        var f = e;
                        break a
                    }
                } catch (g) {}
                f = null
            }
            if (!(a = f)) break
        }
        return null
    }
    var $c = Ua(function() {
        return Gc() ? 2 : Hc() ? 1 : 0
    });

    function ad(a) {
        var b = {
            display: "none"
        };
        a.style.setProperty ? Rc(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        }) : a.style.cssText = bd(cd(ed(a.style.cssText), fd(b, function(c) {
            return c + " !important"
        })))
    }
    var cd = r(Object, "assign") || function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };

    function fd(a, b) {
        var c = {},
            d;
        for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
        return c
    }

    function bd(a) {
        var b = [];
        Rc(a, function(c, d) {
            null != c && "" !== c && b.push(d + ":" + c)
        });
        return b.length ? b.join(";") + ";" : ""
    }

    function ed(a) {
        var b = {};
        if (a) {
            var c = /\s*:\s*/;
            Ma((a || "").split(/\s*;\s*/), function(d) {
                if (d) {
                    var e = d.split(c);
                    d = e[0];
                    e = e[1];
                    d && e && (b[d.toLowerCase()] = e)
                }
            })
        }
        return b
    }
    var gd = [];

    function hd() {
        var a = gd;
        gd = [];
        a = w(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    }

    function id(a, b) {
        b = void 0 === b ? window.document : b;
        0 != a.length && b.head && a.forEach(function(c) {
            if (c) {
                var d = b;
                d = void 0 === d ? window.document : d;
                if (c && d.head) {
                    var e = document.createElement("meta");
                    d.head.appendChild(e);
                    e.httpEquiv = "origin-trial";
                    e.content = c
                }
            }
        })
    }

    function jd(a) {
        "complete" === wc.readyState || "interactive" === wc.readyState ? (gd.push(a), 1 == gd.length && (p.Promise ? p.Promise.resolve().then(hd) : window.setImmediate ? setImmediate(hd) : setTimeout(hd, 0))) : wc.addEventListener("DOMContentLoaded", a)
    };

    function kd(a) {
        a = void 0 === a ? y : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function ld(a) {
        return (a = a || kd()) ? Kc(a.master) ? a.master : null : null
    };

    function md(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = a.document.createElement("img");
        if (c) {
            var e = function(f) {
                c && c(f);
                Dc(d, "load", e);
                Dc(d, "error", e)
            };
            Cc(d, "load", e);
            Cc(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    }

    function nd(a, b) {
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        Rc(a, function(d, e) {
            d && (c += "&" + e + "=" + encodeURIComponent(d))
        });
        od(c)
    }

    function od(a) {
        var b = window;
        b.fetch ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : md(b, a, null)
    };

    function pd(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function qd(a) {
        return !(!a || !a.call) && "function" === typeof a
    }

    function rd(a) {
        var b = void 0 === b ? 1 : b;
        a = ld(kd(a)) || a;
        a.google_unique_id = (a.google_unique_id || 0) + b;
        return a.google_unique_id
    }

    function sd(a) {
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }
    var td = !!window.google_async_iframe_id,
        ud = td && window.parent || window;

    function vd() {
        if (td && !Kc(ud)) {
            var a = "." + wc.domain;
            try {
                for (; 2 < a.split(".").length && !Kc(ud);) wc.domain = a = a.substr(a.indexOf(".") + 1), ud = window.parent
            } catch (b) {}
            Kc(ud) || (ud = window)
        }
        return ud
    }
    var wd = /(^| )adsbygoogle($| )/;

    function xd() {
        var a = void 0 === a ? K : a;
        if (!a) return !1;
        try {
            return !(!a.navigator.standalone && !a.top.navigator.standalone)
        } catch (b) {
            return !1
        }
    }

    function yd(a) {
        a = a.top;
        return Kc(a) ? a : null
    };

    function zd(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = Ad(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function Ad(a) {
        var b = "";
        pd(a.split("_"), function(c) {
            b += c.substr(0, 2)
        });
        return b
    };

    function $b(a) {
        return "string" === typeof a
    };

    function Bd(a) {
        C(this, a, Cd, Dd)
    }
    x(Bd, B);
    var Cd = [2, 8],
        Dd = [
            [3, 4, 5],
            [6, 7]
        ];
    var Ed;
    Ed = {
        xb: 0,
        Za: 3,
        $a: 4,
        ab: 5
    };
    var Fd = Ed.Za,
        Gd = Ed.$a,
        Hd = Ed.ab;

    function Id(a) {
        return null != a ? !a : a
    }

    function Jd(a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d]();
            if (e === b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function Kd(a, b) {
        var c = I(a, Bd, 2);
        if (!c.length) return Ld(a, b);
        a = E(a, 1, 0);
        if (1 === a) return Id(Kd(c[0], b));
        c = Oa(c, function(d) {
            return function() {
                return Kd(d, b)
            }
        });
        switch (a) {
            case 2:
                return Jd(c, !1);
            case 3:
                return Jd(c, !0)
        }
    }

    function Ld(a, b) {
        var c = Ib(a, Dd[0]);
        a: {
            switch (c) {
                case Fd:
                    var d = E(a, 3, 0);
                    break a;
                case Gd:
                    d = E(a, 4, 0);
                    break a;
                case Hd:
                    d = E(a, 5, 0);
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b.apply(null, la(D(a, 8)))
            } catch (f) {
                return
            }
            b = E(a, 1, 0);
            if (4 === b) return !!e;
            d = null != e;
            if (5 === b) return d;
            if (12 === b) a = E(a, 7, "");
            else a: {
                switch (c) {
                    case Gd:
                        a = Lb(a, 6);
                        break a;
                    case Hd:
                        a = E(a, 7, "");
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 === b) return e === a;
                if (9 === b) return null != e && 0 === lb(String(e), a);
                if (d) switch (b) {
                    case 7:
                        return e < a;
                    case 8:
                        return e >
                            a;
                    case 12:
                        return $b(a) && $b(e) && (new RegExp(a)).test(e);
                    case 10:
                        return null != e && -1 === lb(String(e), a);
                    case 11:
                        return null != e && 1 === lb(String(e), a)
                }
            }
        }
    }

    function Md(a, b) {
        return !a || !(!b || !Kd(a, b))
    };

    function N(a) {
        C(this, a, Nd, null)
    }
    x(N, B);
    N.prototype.getId = function() {
        return D(this, 3)
    };
    var Nd = [4];

    function Od(a) {
        C(this, a, null, null)
    }
    x(Od, B);

    function Pd(a) {
        C(this, a, null, null)
    }
    x(Pd, B);

    function Qd(a) {
        C(this, a, null, null)
    }
    x(Qd, B);

    function Rd(a) {
        C(this, a, Sd, null)
    }
    x(Rd, B);
    var Sd = [6, 7, 9, 10, 11];

    function Td(a) {
        C(this, a, Ud, null)
    }
    x(Td, B);
    var Ud = [4];

    function Vd(a) {
        C(this, a, null, null)
    }
    x(Vd, B);

    function Wd(a) {
        C(this, a, Xd, Yd)
    }
    x(Wd, B);
    var Xd = [5],
        Yd = [
            [1, 2, 3, 6, 7]
        ];

    function Zd(a) {
        C(this, a, $d, null)
    }
    x(Zd, B);
    Zd.prototype.getId = function() {
        return E(this, 1, 0)
    };
    Zd.prototype.ga = function() {
        return E(this, 7, 0)
    };
    var $d = [2];

    function ae(a) {
        C(this, a, be, null)
    }
    x(ae, B);
    ae.prototype.ga = function() {
        return E(this, 5, 0)
    };
    var be = [2];

    function ce(a) {
        C(this, a, de, null)
    }
    x(ce, B);

    function ee(a) {
        C(this, a, fe, null)
    }
    x(ee, B);
    ee.prototype.ga = function() {
        return E(this, 1, 0)
    };
    var de = [1, 4, 2, 3],
        fe = [2];

    function ge(a) {
        C(this, a, null, null)
    }
    x(ge, B);

    function he(a, b, c) {
        a = a.style;
        a.border = "none";
        a.height = c + "px";
        a.width = b + "px";
        a.margin = 0;
        a.padding = 0;
        a.position = "relative";
        a.visibility = "visible";
        a.backgroundColor = "transparent"
    };

    function ie(a) {
        C(this, a, null, null)
    }
    x(ie, B);

    function je(a) {
        var b = new ie;
        return Mb(b, 5, a)
    };

    function ke(a) {
        if (!a) return "";
        (a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };
    var le = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

    function me(a, b) {
        this.g = a;
        this.h = b
    }

    function ne(a, b, c) {
        this.url = a;
        this.Y = b;
        this.Ma = !!c;
        this.depth = null
    };

    function oe() {
        this.i = "&";
        this.h = {};
        this.j = 0;
        this.g = []
    }

    function pe(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function qe(a, b, c, d, e) {
        var f = [];
        Rc(a, function(g, h) {
            (g = re(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function re(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(re(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(qe(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function se(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = te(a) - c.length;
        if (0 > d) return "";
        a.g.sort(function(m, q) {
            return m - q
        });
        c = null;
        for (var e = "", f = 0; f < a.g.length; f++)
            for (var g = a.g[f], h = a.h[g], k = 0; k < h.length; k++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var l = qe(h[k], a.i, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        b += l;
                        e = a.i;
                        break
                    }
                    c = null == c ? g : c
                }
            }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }

    function te(a) {
        var b = 1,
            c;
        for (c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    };

    function ue(a, b, c, d, e, f) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            if (c instanceof oe) var g = c;
            else g = new oe, Rc(c, function(k, l) {
                var m = g,
                    q = m.j++;
                k = pe(l, k);
                m.g.push(q);
                m.h[q] = k
            });
            var h = se(g, a.h, "/pagead/gen_204?id=" + b + "&");
            h && ("undefined" !== typeof f ? md(y, h, void 0 === f ? null : f) : md(y, h, null))
        } catch (k) {}
    };
    var ve = null;

    function we() {
        if (null === ve) {
            ve = "";
            try {
                var a = "";
                try {
                    a = y.top.location.hash
                } catch (c) {
                    a = y.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    ve = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return ve
    };

    function xe() {
        var a = y.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function ye() {
        var a = void 0 === a ? y : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function ze(a, b) {
        var c = ye() || xe();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var Ae = y.performance,
        Be = !!(Ae && Ae.mark && Ae.measure && Ae.clearMarks),
        Ce = Ua(function() {
            var a;
            if (a = Be) a = we(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function De() {
        var a = Ee;
        this.events = [];
        this.h = a || y;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.events = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.g = Ce() || (null != b ? b : 1 > Math.random())
    }

    function Fe(a) {
        a && Ae && Ce() && (Ae.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), Ae.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    De.prototype.start = function(a, b) {
        if (!this.g) return null;
        a = new ze(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        Ae && Ce() && Ae.mark(b);
        return a
    };
    De.prototype.end = function(a) {
        if (this.g && "number" === typeof a.value) {
            a.duration = (ye() || xe()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            Ae && Ce() && Ae.mark(b);
            !this.g || 2048 < this.events.length || this.events.push(a)
        }
    };

    function Ge() {
        var a = He;
        this.l = Ie;
        this.h = null;
        this.j = this.D;
        this.g = void 0 === a ? null : a;
        this.i = !1
    }
    n = Ge.prototype;
    n.Ua = function(a) {
        this.j = a
    };
    n.sa = function(a) {
        this.h = a
    };
    n.Va = function(a) {
        this.i = a
    };
    n.la = function(a, b, c) {
        try {
            if (this.g && this.g.g) {
                var d = this.g.start(a.toString(), 3);
                var e = b();
                this.g.end(d)
            } else e = b()
        } catch (h) {
            b = !0;
            try {
                Fe(d), b = this.j(a, new Ac(h, {
                    message: Je(h)
                }), void 0, c)
            } catch (k) {
                this.D(217, k)
            }
            if (b) {
                var f, g;
                null == (f = window.console) || null == (g = f.error) || g.call(f, h)
            } else throw h;
        }
        return e
    };
    n.Pa = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
            return e.la(a, function() {
                return b.apply(c, g)
            }, d)
        }
    };
    n.D = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new oe;
            f.g.push(1);
            f.h[1] = pe("context", a);
            Bc(b) || (b = new Ac(b, {
                message: Je(b)
            }));
            if (b.msg) {
                var g = b.msg.substring(0, 512);
                f.g.push(2);
                f.h[2] = pe("msg", g)
            }
            var h = b.meta || {};
            if (this.h) try {
                this.h(h)
            } catch (hc) {}
            if (d) try {
                d(h)
            } catch (hc) {}
            b = [h];
            f.g.push(3);
            f.h[3] = b;
            d = y;
            b = [];
            g = null;
            do {
                var k = d;
                if (Kc(k)) {
                    var l = k.location.href;
                    g = k.document && k.document.referrer || null
                } else l = g, g = null;
                b.push(new ne(l || "", k));
                try {
                    d = k.parent
                } catch (hc) {
                    d = null
                }
            } while (d && k != d);
            l = 0;
            for (var m =
                    b.length - 1; l <= m; ++l) b[l].depth = m - l;
            k = y;
            if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
                for (m = 1; m < b.length; ++m) {
                    var q = b[m];
                    q.url || (q.url = k.location.ancestorOrigins[m - 1] || "", q.Ma = !0)
                }
            var t = new ne(y.location.href, y, !1);
            k = null;
            var v = b.length - 1;
            for (q = v; 0 <= q; --q) {
                var A = b[q];
                !k && le.test(A.url) && (k = A);
                if (A.url && !A.Ma) {
                    t = A;
                    break
                }
            }
            A = null;
            var G = b.length && b[v].url;
            0 != t.depth && G && (A = b[v]);
            var F = new me(t, A);
            if (F.h) {
                var ca = F.h.url || "";
                f.g.push(4);
                f.h[4] = pe("top", ca)
            }
            var za = {
                url: F.g.url || ""
            };
            if (F.g.url) {
                var dd = F.g.url.match(Ic),
                    sf = dd[1],
                    tf = dd[3],
                    uf = dd[4];
                t = "";
                sf && (t += sf + ":");
                tf && (t += "//", t += tf, uf && (t += ":" + uf));
                var vf = t
            } else vf = "";
            za = [za, {
                url: vf
            }];
            f.g.push(5);
            f.h[5] = za;
            ue(this.l, e, f, this.i, c)
        } catch (hc) {
            try {
                ue(this.l, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: Je(hc),
                    url: F && F.g.url
                }, this.i, c)
            } catch (bn) {}
        }
        return !0
    };

    function Je(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            try {
                -1 == a.indexOf(b) && (a = b + "\n" + a);
                for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (d) {}
        }
        return b
    };

    function O(a) {
        a = void 0 === a ? "" : a;
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, O) : this.stack = Error().stack || ""
    }
    x(O, Error);

    function Ke() {
        this.g = null;
        this.i = !1;
        this.j = Math.random();
        this.h = this.D
    }
    n = Ke.prototype;
    n.sa = function(a) {
        this.g = a
    };
    n.Va = function(a) {
        this.i = a
    };
    n.Ua = function(a) {
        this.h = a
    };
    n.D = function(a, b, c, d, e) {
        if ((this.i ? this.j : Math.random()) > (void 0 === c ? .01 : c)) return !1;
        Bc(b) || (b = new Ac(b, {
            context: a,
            id: void 0 === e ? "jserror" : e
        }));
        if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
        y.google_js_errors = y.google_js_errors || [];
        y.google_js_errors.push(b);
        y.error_rep_loaded || (Lc(y.document, ib(y.location.protocol + "//pagead2.googlesyndication.com/pagead/js/err_rep.js")), y.error_rep_loaded = !0);
        return !1
    };
    n.la = function(a, b, c) {
        try {
            var d = b()
        } catch (e) {
            if (!this.h(a, e, .01, c, "jserror")) throw e;
        }
        return d
    };
    n.Pa = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
            return e.la(a, function() {
                return b.apply(c, g)
            }, d)
        }
    };
    var Ie, P, Ee = vd(),
        He = new De;

    function Le(a) {
        null != a && (Ee.google_measure_js_timing = a);
        Ee.google_measure_js_timing || (a = He, a.g = !1, a.events != a.h.google_js_reporting_queue && (Ce() && Ma(a.events, Fe), a.events.length = 0))
    }
    Ie = new function() {
        var a = void 0 === a ? K : a;
        this.h = "http:" === a.location.protocol ? "http:" : "https:";
        this.g = Math.random()
    };
    "number" !== typeof Ee.google_srt && (Ee.google_srt = Math.random());
    var Me = Ie,
        Ne = Ee.google_srt;
    0 <= Ne && 1 >= Ne && (Me.g = Ne);
    P = new Ge;
    P.sa(function() {});
    P.Va(!0);
    "complete" == Ee.document.readyState ? Le() : He.g && Cc(Ee, "load", function() {
        Le()
    });

    function Oe(a, b, c) {
        return P.la(a, b, c)
    }

    function Pe(a, b) {
        return P.Pa(a, b, void 0, void 0)
    }

    function Qe(a, b, c) {
        ue(Ie, a, b, !0, c, void 0)
    }

    function Re(a, b, c, d) {
        var e;
        Bc(b) ? e = b.msg || Je(b.error) : e = Je(b);
        return 0 == e.indexOf("TagError") ? (c = b instanceof Ac ? b.error : b, c.pbr || (c.pbr = !0, P.D(a, b, .1, d, "puberror")), !1) : P.D(a, b, c, d)
    };

    function Se(a) {
        var b = window;
        var c = void 0 === c ? null : c;
        Cc(b, "message", function(d) {
            try {
                var e = JSON.parse(d.data)
            } catch (f) {
                return
            }!e || "sc-cnf" !== e.googMsgType || c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d) || a(e, d)
        })
    };
    var Te = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5
    };

    function Ue() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new Ve
    }

    function We(a) {
        a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new Ve) : a.google_reactive_ads_global_state = new Ue;
        return a.google_reactive_ads_global_state
    }

    function Ve() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };

    function Xe(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function Q(a) {
        return Xe(a).clientWidth
    };

    function R() {
        this.j = this.j;
        this.l = this.l
    }
    R.prototype.j = !1;
    R.prototype.g = function() {
        if (this.l)
            for (; this.l.length;) this.l.shift()()
    };

    function Ye(a, b, c) {
        return Ze(a, void 0 === c ? "" : c, function(d) {
            return Pa(I(d, Sb, 2), function(e) {
                return D(e, 1) === b
            })
        })
    }

    function $e(a, b, c) {
        c = void 0 === c ? "" : c;
        var d = yd(a) || a;
        return af(d, b) ? !0 : Ze(a, c, function(e) {
            return Pa(D(e, 3), function(f) {
                return f === b
            })
        })
    }

    function bf(a) {
        return Ze(y, void 0 === a ? "" : a, function() {
            return !0
        })
    }

    function af(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Sa(a.split(","), b.toString())
    }

    function Ze(a, b, c) {
        a = yd(a) || a;
        var d = cf(a);
        b && (b = ke(String(b)));
        return Xa(d, function(e, f) {
            return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
        })
    }

    function cf(a) {
        a = df(a);
        var b = {};
        pd(a, function(c, d) {
            try {
                var e = new Qb(c);
                b[d] = e
            } catch (f) {}
        });
        return b
    }

    function df(a) {
        try {
            var b = a.localStorage.getItem("google_adsense_settings");
            if (!b) return {};
            var c = JSON.parse(b);
            return c !== Object(c) ? {} : Wa(c, function(d, e) {
                return Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d)
            })
        } catch (d) {
            return {}
        }
    };

    function ef() {
        var a = Bb("");
        return /^\d+$/.test(a) ? a : ""
    };

    function ff(a) {
        var b = {};
        this[Fd] = (b[55] = function() {
            return 0 === a
        }, b[23] = function(c) {
            return Ye(K, parseInt(c, 10))
        }, b[24] = function(c) {
            return $e(K, parseInt(c, 10))
        }, b);
        b = {};
        this[Gd] = (b[7] = function(c) {
            try {
                var d = window.localStorage
            } catch (g) {
                d = null
            }
            var e = c;
            c = window;
            e = void 0 === e ? 0 : e;
            e = 0 != e ? "google_experiment_mod" + e : "google_experiment_mod";
            var f = Uc(d, e);
            d = null === f ? Vc(c, d, e) : f;
            return null != d ? d : void 0
        }, b);
        b = {};
        this[Hd] = (b[6] = ef, b)
    };

    function gf() {
        var a = {};
        this.g = (a[Fd] = {}, a[Gd] = {}, a[Hd] = {}, a)
    }
    ya(gf);
    var hf = /^true$/.test("false");

    function jf(a, b) {
        switch (b) {
            case 1:
                return E(a, 1, 0);
            case 2:
                return E(a, 2, 0);
            case 3:
                return E(a, 3, 0);
            case 6:
                return E(a, 6, 0);
            default:
                return null
        }
    }

    function kf(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return Kb(a, 1);
            case 7:
                return E(a, 3, "");
            case 2:
                return Lb(a, 2);
            case 3:
                return E(a, 3, "");
            case 6:
                return D(a, 4);
            default:
                return null
        }
    }
    var lf = Ua(function() {
        if (!hf) return {};
        try {
            var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch (b) {}
        return {}
    });

    function mf(a, b, c, d) {
        d = void 0 === d ? 0 : d;
        var e = lf();
        if (null != e[b]) return e[b];
        b = nf(d)[b];
        if (!b) return c;
        b = new Wd(b);
        b = of (b);
        a = kf(b, a);
        return null != a ? a : c
    }

    function of (a) {
        var b = gf.s().g;
        if (b) {
            var c = Ra(I(a, Vd, 5), function(d) {
                return Md(H(d, Bd, 1), b)
            });
            if (c) return H(c, Td, 2)
        }
        return H(a, Td, 4)
    }

    function pf() {
        this.g = {};
        this.h = []
    }
    ya(pf);

    function qf(a, b, c) {
        return !!mf(1, a, void 0 === b ? !1 : b, c)
    }

    function rf(a, b, c) {
        b = void 0 === b ? 0 : b;
        a = Number(mf(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function wf(a, b, c) {
        return mf(3, a, void 0 === b ? "" : b, c)
    }

    function xf(a, b, c) {
        b = void 0 === b ? [] : b;
        return mf(6, a, b, c)
    }

    function nf(a) {
        return pf.s().g[a] || (pf.s().g[a] = {})
    }

    function yf(a, b) {
        var c = nf(b);
        Rc(a, function(d, e) {
            return c[e] = d
        })
    }

    function zf(a, b) {
        var c = nf(b);
        Ma(a, function(d) {
            var e = Ib(d, Yd[0]);
            (e = jf(d, e)) && (c[e] = Nb(d))
        })
    }

    function Af(a, b) {
        var c = nf(b);
        Ma(a, function(d) {
            var e = new Wd(d),
                f = Ib(e, Yd[0]);
            (e = jf(e, f)) && (c[e] || (c[e] = d))
        })
    }

    function Bf() {
        return Oa(r(Object, "keys").call(Object, pf.s().g), function(a) {
            return Number(a)
        })
    }

    function Cf(a) {
        Sa(pf.s().h, a) || yf(nf(4), a)
    };

    function S(a) {
        this.methodName = a
    }
    var Df = new S(1),
        Ef = new S(15),
        Ff = new S(2),
        Gf = new S(3),
        Hf = new S(4),
        If = new S(5),
        Jf = new S(6),
        Kf = new S(7),
        Lf = new S(8),
        Mf = new S(9),
        Nf = new S(10),
        Of = new S(11),
        Pf = new S(12),
        Qf = new S(13),
        Rf = new S(14);

    function T(a, b, c) {
        c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
            value: b
        })
    }

    function Sf(a, b, c) {
        return b[a.methodName] || c || function() {}
    }

    function Tf(a) {
        T(If, qf, a);
        T(Jf, rf, a);
        T(Kf, wf, a);
        T(Lf, xf, a);
        T(Qf, Af, a);
        T(Ef, Cf, a)
    }

    function Uf(a) {
        T(Hf, function(b) {
            gf.s().g = b
        }, a);
        T(Mf, function(b, c) {
            var d = gf.s();
            d.g[Fd][b] || (d.g[Fd][b] = c)
        }, a);
        T(Nf, function(b, c) {
            var d = gf.s();
            d.g[Gd][b] || (d.g[Gd][b] = c)
        }, a);
        T(Of, function(b, c) {
            var d = gf.s();
            d.g[Hd][b] || (d.g[Hd][b] = c)
        }, a);
        T(Rf, function(b) {
            for (var c = gf.s(), d = w([Fd, Gd, Hd]), e = d.next(); !e.done; e = d.next()) {
                var f = e.value;
                e = void 0;
                var g = c.g[f];
                f = b[f];
                for (e in f) g[e] = f[e]
            }
        }, a)
    }

    function Vf(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function Wf(a) {
        a = void 0 === a ? y : a;
        return a.ggeac || (a.ggeac = {})
    };

    function Xf() {
        this.h = function() {};
        this.g = function() {
            return []
        }
    }

    function Yf(a, b, c) {
        a.h = function(d) {
            Sf(Ff, b, function() {
                return []
            })(d, c)
        };
        a.g = function() {
            return Sf(Gf, b, function() {
                return []
            })(c)
        }
    }
    ya(Xf);

    function Zf(a, b) {
        try {
            a: {
                var c = a.split(".");a = y;
                for (var d = 0, e; d < c.length; d++)
                    if (e = a, a = a[c[d]], null == a) {
                        var f = null;
                        break a
                    }
                f = "function" === typeof a ? e[c[d - 1]]() : a
            }
            if (typeof f === b) return f
        }
        catch (g) {}
    }

    function $f() {
        var a = {};
        this[Fd] = (a[8] = function(b) {
            try {
                return null != xa(b)
            } catch (c) {}
        }, a[9] = function(b) {
            try {
                var c = xa(b)
            } catch (d) {
                return
            }
            if (b = "function" === typeof c) c = c && c.toString && c.toString(), b = "string" === typeof c && -1 != c.indexOf("[native code]");
            return b
        }, a[10] = function() {
            return window == window.top
        }, a[6] = function(b) {
            return Sa(Xf.s().g(), parseInt(b, 10))
        }, a[27] = function(b) {
            b = Zf(b, "boolean");
            return void 0 !== b ? b : void 0
        }, a);
        a = {};
        this[Gd] = (a[3] = function() {
            return $c()
        }, a[6] = function(b) {
            b = Zf(b, "number");
            return void 0 !==
                b ? b : void 0
        }, a[11] = function(b) {
            b = void 0 === b ? "" : b;
            var c = y;
            b = void 0 === b ? "" : b;
            c = void 0 === c ? window : c;
            b = (c = (c = c.location.href.match(Ic)[3] || null) ? decodeURI(c) : c) ? Sc(c + b) : null;
            return null == b ? void 0 : b % 1E3
        }, a);
        a = {};
        this[Hd] = (a[2] = function() {
            return window.location.href
        }, a[3] = function() {
            try {
                return window.top.location.hash
            } catch (b) {
                return ""
            }
        }, a[4] = function(b) {
            b = Zf(b, "string");
            return void 0 !== b ? b : void 0
        }, a)
    }
    ya($f);
    var ag = [12, 13];

    function bg() {}
    bg.prototype.init = function(a, b, c) {
        var d = this;
        c = void 0 === c ? {} : c;
        var e = void 0 === c.Ka ? !1 : c.Ka,
            f = void 0 === c.kb ? {} : c.kb;
        c = void 0 === c.nb ? [] : c.nb;
        this.i = a;
        this.l = {};
        this.m = e;
        this.j = f;
        a = {};
        this.g = (a[b] = [], a[4] = [], a);
        this.h = {};
        (b = we()) && Ma(b.split(",") || [], function(g) {
            (g = parseInt(g, 10)) && (d.h[g] = !0)
        });
        Ma(c, function(g) {
            d.h[g] = !0
        });
        return this
    };

    function cg(a, b, c) {
        if (a.l[b]) return .001 >= Math.random() && nd({
            b: c,
            dp: b
        }, "tagging_dupdiv"), !0;
        a.l[b] = !0;
        return !1
    }

    function dg(a, b, c) {
        var d = [],
            e = eg(a.i, b);
        if (9 !== b && cg(a, b, c) || !e.length) return d;
        var f = Sa(ag, b);
        Ma(e, function(g) {
            if (g = fg(a, g, c)) {
                var h = g.getId();
                d.push(h);
                gg(a, h, f ? 4 : c);
                var k = I(g, Wd, 2);
                k && (f ? Ma(Bf(), function(l) {
                    return zf(k, l)
                }) : zf(k, c))
            }
        });
        return d
    }

    function gg(a, b, c) {
        a.g[c] || (a.g[c] = []);
        a = a.g[c];
        Sa(a, b) ? nd({
            eids: JSON.stringify(a),
            dup: b
        }, "gpt_dupeid") : a.push(b)
    }

    function hg(a, b) {
        a.i.push.apply(a.i, la(Na(Oa(b, function(c) {
            return new ee(c)
        }), function(c) {
            return !Sa(ag, c.ga())
        })))
    }

    function fg(a, b, c) {
        var d = gf.s().g;
        if (!Md(H(b, Bd, 3), d)) return null;
        var e = I(b, Zd, 2),
            f = e.length * E(b, 1, 0),
            g = E(b, 6, 0);
        if (g) {
            f = d[Gd];
            switch (c) {
                case 2:
                    var h = f[8];
                    break;
                case 1:
                    h = f[7]
            }
            c = void 0;
            if (h) try {
                c = h(g)
            } catch (k) {}
            return (b = ig(b, c)) ? jg(a, [b], 1) : null
        }
        if (g = E(b, 10, 0)) {
            f = null;
            switch (c) {
                case 1:
                    f = d[Gd][9];
                    break;
                case 2:
                    f = d[Gd][10];
                    break;
                default:
                    return null
            }
            c = f ? f(String(g)) : void 0;
            return void 0 === c && 1 === E(b, 11, 0) ? null : (b = ig(b, c)) ? jg(a, [b], 1) : null
        }
        c = d ? Na(e, function(k) {
            return Md(H(k, Bd, 3), d)
        }) : e;
        return c.length ?
            (b = E(b, 4, 0)) ? kg(a, b, f, c) : jg(a, c, f / 1E3) : null
    }

    function kg(a, b, c, d) {
        var e = null != a.j[b] ? a.j[b] : 1E3;
        if (0 >= e) return null;
        d = jg(a, d, c / e);
        a.j[b] = d ? 0 : e - c;
        return d
    }

    function jg(a, b, c) {
        var d = a.h,
            e = Qa(b, function(f) {
                return !!d[f.getId()]
            });
        return e ? e : a.m ? null : Nc(b, c)
    }

    function lg(a, b) {
        T(Df, function(c) {
            a.h[c] = !0
        }, b);
        T(Ff, function(c, d) {
            return dg(a, c, d)
        }, b);
        T(Gf, function(c) {
            return (a.g[c] || []).concat(a.g[4])
        }, b);
        T(Pf, function(c) {
            return hg(a, c)
        }, b)
    }
    ya(bg);

    function eg(a, b) {
        return (a = Qa(a, function(c) {
            return c.ga() == b
        })) && I(a, ae, 2) || []
    }

    function ig(a, b) {
        var c = I(a, Zd, 2),
            d = c.length,
            e = E(a, 1, 0);
        a = E(a, 8, 0);
        b = void 0 !== b ? b : Math.floor(1E3 * Qc(window));
        var f = (b - a) % d;
        if (b < a || b - a - f >= d * e - 1) return null;
        c = c[f];
        d = gf.s().g;
        return !c || d && !Md(H(c, Bd, 3), d) ? null : c
    };

    function U(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    }

    function mg(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? 0 : b
    };
    var ng = new mg(62, .001),
        og = new U(316),
        pg = new U(313),
        qg = new U(369),
        rg = new U(1062),
        sg = new U(1061),
        tg = new mg(1041, 50),
        ug = new U(1042, !0),
        vg = new U(1040, !0),
        wg = new U(1026),
        xg = new U(1053),
        yg = new mg(1046),
        zg = new U(1049, !0),
        Ag = new U(218),
        Bg = new U(216),
        Cg = new U(217),
        Dg = new U(1002),
        Eg = new U(233),
        Fg = new U(232),
        Gg = new U(227),
        Hg = new U(208),
        Ig = new U(310, !0),
        Jg = new U(282),
        Kg = new function(a, b) {
            this.g = a;
            this.defaultValue = void 0 === b ? "" : b
        }(14),
        Lg = new U(251),
        Mg = new U(1059),
        Ng = new U(1936, !0),
        Og = new function(a, b) {
            b = void 0 ===
                b ? [] : b;
            this.g = a;
            this.defaultValue = b
        }(1939, ["AwfG8hAcHnPa/kJ1Co0EvG/K0F9l1s2JZGiDLt2mhC3QI5Fh4qmsmSwrWObZFbRC9ieDaSLU6lHRxhGUF/i9sgoAAACBeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "AwQ7dCmHkvR6FuOFxAuNnktYSQrGbL4dF+eBkrwNLALc69Wr//PnO1yzns3pjUoCaYbKHtVcnng2hU+8OUm0PAYAAACHeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
            "AysVDPGQTLD/Scn78x4mLwB1tMfje5jwUpAAzGRpWsr1NzoN7MTFhT3ClmImi2svDZA7V6nWGIV8YTPsSRTe0wYAAACHeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
        ]),
        Pg = new U(203),
        Qg = new U(241),
        Rg = new U(84),
        Sg = new mg(1929, 50),
        Tg = new mg(1905),
        Ug = new U(240),
        Vg = new U(1928),
        Wg = new U(1941),
        Xg = new U(370946349),
        Yg = new U(374326588),
        Zg = new mg(1935),
        $g = new U(1942);

    function ah() {
        var a = {};
        this.h = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.i = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.g = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.l = function() {}
    }
    ya(ah);

    function V(a) {
        return ah.s().h(a.g, a.defaultValue)
    }

    function bh(a) {
        return ah.s().i(a.g, a.defaultValue)
    };

    function ch() {
        this.g = function() {}
    }
    ya(ch);

    function dh(a) {
        ch.s().g(a)
    };

    function eh(a, b, c, d) {
        var e = 1;
        d = void 0 === d ? Wf() : d;
        e = void 0 === e ? 0 : e;
        d.hasOwnProperty("init-done") ? (Sf(Pf, d)(Oa(I(a, ee, 2), function(f) {
            return Nb(f)
        })), Sf(Qf, d)(Oa(I(a, Wd, 1), function(f) {
            return Nb(f)
        }), e), b && Sf(Rf, d)(b), fh(d, e)) : (lg(bg.s().init(I(a, ee, 2), e, c), d), Tf(d), Uf(d), Vf(d), fh(d, e), zf(I(a, Wd, 1), e), hf = hf || !(!c || !c.ib), dh($f.s()), b && dh(b))
    }

    function fh(a, b) {
        a = void 0 === a ? Wf() : a;
        b = void 0 === b ? 0 : b;
        var c = a,
            d = b;
        d = void 0 === d ? 0 : d;
        Yf(Xf.s(), c, d);
        gh(a, b);
        ch.s().g = Sf(Rf, a);
        ah.s().l()
    }

    function gh(a, b) {
        b = void 0 === b ? 0 : b;
        var c = ah.s();
        c.h = function(d, e) {
            return Sf(If, a, function() {
                return !1
            })(d, e, b)
        };
        c.i = function(d, e) {
            return Sf(Jf, a, function() {
                return 0
            })(d, e, b)
        };
        c.g = function(d, e) {
            return Sf(Kf, a, function() {
                return ""
            })(d, e, b)
        };
        c.j = function(d, e) {
            return Sf(Lf, a, function() {
                return []
            })(d, e, b)
        };
        c.l = function() {
            Sf(Ef, a)(b)
        }
    };

    function hh(a, b, c) {
        var d = J(a);
        if (d.plle) fh(Wf(a), 1);
        else {
            d.plle = !0;
            try {
                var e = a.localStorage
            } catch (f) {
                e = null
            }
            d = e;
            null == Uc(d, "goog_pem_mod") && Vc(a, d, "goog_pem_mod");
            d = H(b, ce, 12);
            e = Kb(b, 9);
            eh(d, new ff(c), {
                Ka: e && !!a.google_disable_experiments,
                ib: e
            }, Wf(a));
            Xf.s().h(12);
            Xf.s().h(10);
            c = Ub(a);
            (b = E(b, 10, "")) && c.push(b);
            a = yd(a) || a;
            zd(a.location, "google_mc_lab") && c.push("44738307")
        }
    };

    function ih(a) {
        var b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
            if (!d.match(c)) {
                var e = decodeURIComponent(d);
                if (e.match(b)) return e
            }
            return d.toUpperCase()
        })
    }

    function jh(a) {
        for (var b = "", c = /[/%?&=]/, d = 0; d < a.length; ++d) {
            var e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function kh(a) {
        C(this, a, null, lh)
    }
    x(kh, B);

    function mh(a) {
        C(this, a, null, null)
    }
    x(mh, B);

    function nh(a) {
        C(this, a, null, null)
    }
    x(nh, B);

    function oh(a) {
        C(this, a, null, null)
    }
    x(oh, B);
    var lh = [
        [1, 2, 3]
    ];

    function ph(a) {
        C(this, a, qh, null)
    }
    x(ph, B);

    function rh(a) {
        C(this, a, null, sh)
    }
    x(rh, B);

    function th(a) {
        C(this, a, null, null)
    }
    x(th, B);
    var qh = [1],
        sh = [
            [1, 2]
        ];

    function uh(a) {
        C(this, a, vh, null)
    }
    x(uh, B);

    function wh(a) {
        C(this, a, null, null)
    }
    x(wh, B);

    function xh(a) {
        C(this, a, yh, null)
    }
    x(xh, B);

    function zh(a) {
        C(this, a, null, null)
    }
    x(zh, B);

    function Ah(a) {
        C(this, a, null, null)
    }
    x(Ah, B);

    function Bh(a) {
        C(this, a, null, null)
    }
    x(Bh, B);
    var vh = [1, 2, 5, 7],
        yh = [2, 5, 6, 11];

    function Ch(a, b) {
        a = jh(ih(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        var c = Sc(a),
            d = Dh(a);
        return r(b, "find").call(b, function(e) {
            var f = null != D(e, 7) ? D(H(e, zh, 7), 1) : D(e, 1);
            e = null != D(e, 7) ? D(H(e, zh, 7), 2) : 2;
            if ("number" !== typeof f) return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function Dh(a) {
        for (var b = {};;) {
            b[Sc(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };

    function Eh(a) {
        this.g = a.slice(0)
    }
    Eh.prototype.apply = function(a) {
        return new Eh(a(this.g.slice(0)))
    };
    Eh.prototype.add = function(a) {
        var b = this.g.slice(0);
        b.push(a);
        return new Eh(b)
    };

    function Fh(a) {
        var b = void 0 === a.Ga ? void 0 : a.Ga,
            c = void 0 === a.hb ? void 0 : a.hb,
            d = void 0 === a.Ra ? void 0 : a.Ra;
        this.g = void 0 === a.cb ? void 0 : a.cb;
        this.j = new Eh(b || []);
        this.i = d;
        this.h = c
    };

    function Gh() {
        this.g = {};
        this.h = {}
    }
    Gh.prototype.set = function(a, b) {
        var c = Hh(a);
        this.g[c] = b;
        this.h[c] = a
    };
    Gh.prototype.get = function(a, b) {
        a = Hh(a);
        return void 0 !== this.g[a] ? this.g[a] : b
    };

    function Hh(a) {
        return a instanceof Object ? String(Ba(a)) : a + ""
    };

    function Ih(a) {
        var b = [],
            c = a.j;
        c && c.g.length && b.push({
            T: "a",
            $: Jh(c)
        });
        null != a.g && b.push({
            T: "as",
            $: a.g
        });
        null != a.h && b.push({
            T: "i",
            $: String(a.h)
        });
        null != a.i && b.push({
            T: "rp",
            $: String(a.i)
        });
        b.sort(function(d, e) {
            return d.T.localeCompare(e.T)
        });
        b.unshift({
            T: "t",
            $: "aa"
        });
        return b
    }

    function Jh(a) {
        a = a.g.slice(0).map(Kh);
        a = JSON.stringify(a);
        return Sc(a)
    }

    function Kh(a) {
        var b = {};
        null != D(a, 7) && (b.q = D(a, 7));
        null != D(a, 2) && (b.o = D(a, 2));
        null != D(a, 5) && (b.p = D(a, 5));
        return b
    };

    function Lh(a, b) {
        this.Ia = a;
        this.Qa = b
    }

    function Mh(a) {
        var b = [].slice.call(arguments).filter(Ta(function(e) {
            return null === e
        }));
        if (!b.length) return null;
        var c = [],
            d = {};
        b.forEach(function(e) {
            c = c.concat(e.Ia || []);
            d = r(Object, "assign").call(Object, d, e.Qa)
        });
        return new Lh(c, d)
    }

    function Nh(a) {
        switch (a) {
            case 1:
                return new Lh(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new Lh(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new Lh(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new Lh(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function Oh(a) {
        if (null == a) a = null;
        else {
            var b = Ih(a);
            a = [];
            b = w(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = String(c.$);
                a.push(c.T + "." + (20 >= d.length ? d : d.slice(0, 19) + "_"))
            }
            a = new Lh(null, {
                google_placement_id: a.join("~")
            })
        }
        return a
    };
    var Ph = {},
        Qh = new Lh(["google-auto-placed"], (Ph.google_reactive_ad_format = 40, Ph.google_tag_origin = "qs", Ph));
    var Rh = {},
        Sh = (Rh.google_ad_channel = !0, Rh.google_ad_host = !0, Rh);

    function Th(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        Qe("ama", b, .01)
    }

    function Uh(a) {
        var b = {};
        Rc(Sh, function(c, d) {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function Vh(a) {
        if (V(og)) var b = null;
        else try {
            b = a.getItem("google_ama_config")
        } catch (d) {
            b = null
        }
        try {
            var c = b ? Pb(uh, b) : null
        } catch (d) {
            c = null
        }
        return c
    };

    function Wh(a) {
        a = H(a, wh, 3);
        return !a || D(a, 1) <= Date.now() ? !1 : !0
    }

    function Xh(a) {
        return (a = Vh(a)) ? Wh(a) ? a : null : null
    }

    function Yh(a, b) {
        try {
            b.removeItem("google_ama_config")
        } catch (c) {
            Th(a, {
                lserr: 1
            })
        }
    };
    var Zh = null;

    function $h(a, b) {
        b = void 0 === b ? [] : b;
        var c = !1;
        y.google_logging_queue || (c = !0, y.google_logging_queue = []);
        y.google_logging_queue.push([a, b]);
        if (a = c) {
            if (null == Zh) {
                Zh = !1;
                try {
                    var d = yd(y);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (Zh = !0);
                    y.localStorage.getItem("google_logging") && (Zh = !0)
                } catch (e) {}
            }
            a = Zh
        }
        a && (d = y.document, a = new bb(cb, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), a = ib(a instanceof bb && a.constructor === bb && a.g === db ? a.h : "type_error:Const"), Lc(d, a))
    };

    function ai(a) {
        this.g = new Gh;
        if (a)
            for (var b = 0; b < a.length; ++b) this.add(a[b])
    }
    ai.prototype.add = function(a) {
        this.g.set(a, !0)
    };
    ai.prototype.contains = function(a) {
        return void 0 !== this.g.g[Hh(a)]
    };

    function bi(a) {
        C(this, a, null, null)
    }
    x(bi, B);

    function ci(a, b) {
        this.g = a;
        this.h = b
    }

    function di(a) {
        return null != a.g ? a.g.value : null
    }

    function ei(a, b) {
        null != a.g && b(a.g.value);
        return a
    }
    ci.prototype.map = function(a) {
        return null != this.g ? (a = a(this.g.value), a instanceof ci ? a : fi(a)) : this
    };

    function gi(a, b) {
        null != a.g || b(a.h);
        return a
    }

    function fi(a) {
        return new ci({
            value: a
        }, null)
    }

    function hi(a) {
        return new ci(null, a)
    }

    function ii(a) {
        try {
            return fi(a())
        } catch (b) {
            return hi(b)
        }
    };
    var ji = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };

    function ki(a, b) {
        for (var c = ["width", "height"], d = 0; d < c.length; d++) {
            var e = "google_ad_" + c[d];
            if (!b.hasOwnProperty(e)) {
                var f = M(a[c[d]]);
                f = null === f ? null : Math.round(f);
                null != f && (b[e] = f)
            }
        }
    }

    function li(a, b) {
        return !((Xc.test(b.google_ad_width) || Wc.test(a.style.width)) && (Xc.test(b.google_ad_height) || Wc.test(a.style.height)))
    }

    function mi(a, b) {
        return (a = ni(a, b)) ? a.y : 0
    }

    function ni(a, b) {
        try {
            var c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (e) {
            return null
        }
    }

    function oi(a, b) {
        do {
            var c = Mc(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    }

    function pi(a) {
        var b = 0,
            c;
        for (c in ji) - 1 != a.indexOf(c) && (b |= ji[c]);
        return b
    }

    function qi(a, b, c, d, e) {
        if (a.top != a) return yd(a) ? 3 : 16;
        if (!(488 > Q(a))) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        var f = Q(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = "true" != e.google_full_width_responsive) a: {
                c = Q(a);
                for (b = b.parentElement; b; b = b.parentElement)
                    if ((d = Mc(b, a)) && (e = M(d.width)) && !(e >= c) && "visible" != d.overflow) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function ri(a, b, c, d) {
        var e = qi(b, c, a, .3, d);
        !0 !== e ? a = e : "true" == d.google_full_width_responsive || oi(c, b) ? si(b) ? a = !0 : (b = Q(b), a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
        return a
    }

    function ti(a, b, c) {
        a = a.style;
        "rtl" == b ? V(Lg) ? a.setProperty("margin-right", c, "important") : a.marginRight = c : V(Lg) ? a.setProperty("margin-left", c, "important") : a.marginLeft = c
    }

    function ui(a, b) {
        if (3 == b.nodeType) return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            try {
                var c = Mc(b, a)
            } catch (d) {}
            return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
        }
        return !1
    }

    function vi(a, b) {
        for (var c = 0; 100 > c && b.parentElement; ++c) {
            for (var d = b.parentElement.childNodes, e = 0; e < d.length; ++e) {
                var f = d[e];
                if (f != b && ui(a, f)) return
            }
            b = b.parentElement;
            b.style.width = "100%";
            b.style.height = "auto"
        }
    }

    function wi(a, b, c) {
        a = ni(b, a);
        return "rtl" == c ? -a.x : a.x
    }

    function xi(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = Mc(c, a)) ? c.direction : "" : "";
        if (c) {
            b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            ti(b, c, "0px");
            b.style.width = Q(a) + "px";
            if (0 !== wi(a, b, c)) {
                ti(b, c, "0px");
                var d = wi(a, b, c);
                ti(b, c, -1 * d + "px");
                a = wi(a, b, c);
                0 !== a && a !== d && ti(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    }

    function si(a) {
        return V(Eg) || a.location && "#bffwroe2etoq" == a.location.hash
    };

    function W(a, b) {
        this.h = a;
        this.g = b
    }
    n = W.prototype;
    n.minWidth = function() {
        return this.h
    };
    n.height = function() {
        return this.g
    };
    n.X = function(a) {
        return 300 < a && 300 < this.g ? this.h : Math.min(1200, Math.round(a))
    };
    n.pa = function(a) {
        return this.X(a) + "x" + this.height()
    };
    n.ea = function() {};

    function yi(a, b, c, d) {
        d = void 0 === d ? function(f) {
            return f
        } : d;
        var e;
        return a.style && a.style[c] && d(a.style[c]) || (e = Mc(a, b)) && e[c] && d(e[c]) || null
    }

    function zi(a) {
        return function(b) {
            return b.minWidth() <= a
        }
    }

    function Ai(a, b, c, d) {
        var e = a && Bi(c, b),
            f = Ci(b, d);
        return function(g) {
            return !(e && g.height() >= f)
        }
    }

    function Di(a) {
        return function(b) {
            return b.height() <= a
        }
    }

    function Bi(a, b) {
        return mi(a, b) < Xe(b).clientHeight - 100
    }

    function Ei(a, b) {
        var c = yi(b, a, "height", M);
        if (c) return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = yi(b, a, "height", M);
        b.style.height = d;
        if (c) return c;
        c = Infinity;
        do(d = b.style && M(b.style.height)) && (c = Math.min(c, d)), (d = yi(b, a, "maxHeight", M)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }

    function Ci(a, b) {
        var c = 0 == sd(a);
        return b && c ? Math.max(250, 2 * Xe(a).clientHeight / 3) : 250
    };

    function Fi(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };

    function Gi(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    };

    function Hi(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        Gi(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };

    function Ii(a, b, c) {
        function d(f) {
            f = Ji(f);
            return null == f ? !1 : c > f
        }

        function e(f) {
            f = Ji(f);
            return null == f ? !1 : c < f
        }
        switch (b) {
            case 0:
                return {
                    init: Ki(a.previousSibling, e),
                    ha: function(f) {
                        return Ki(f.previousSibling, e)
                    },
                    ka: 0
                };
            case 2:
                return {
                    init: Ki(a.lastChild, e),
                    ha: function(f) {
                        return Ki(f.previousSibling, e)
                    },
                    ka: 0
                };
            case 3:
                return {
                    init: Ki(a.nextSibling, d),
                    ha: function(f) {
                        return Ki(f.nextSibling, d)
                    },
                    ka: 3
                };
            case 1:
                return {
                    init: Ki(a.firstChild, d),
                    ha: function(f) {
                        return Ki(f.nextSibling, d)
                    },
                    ka: 3
                }
        }
        throw Error("Un-handled RelativePosition: " +
            b);
    }

    function Ji(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Ki(a, b) {
        return a && b(a) ? a : null
    };

    function Li(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = Ab(d.Ab);
            a[e] = d.value
        }
    };

    function Mi(a, b, c, d) {
        this.j = a;
        this.h = b;
        this.i = c;
        this.g = d
    }

    function Ni(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.j)
        } catch (g) {}
        if (!c.length) return [];
        b = c;
        c = b.length;
        if (0 < c) {
            for (var d = Array(c), e = 0; e < c; e++) d[e] = b[e];
            b = d
        } else b = [];
        b = Oi(a, b);
        "number" === typeof a.h && (c = a.h, 0 > c && (c += b.length), b = 0 <= c && c < b.length ? [b[c]] : []);
        if ("number" === typeof a.i) {
            c = [];
            for (d = 0; d < b.length; d++) {
                e = Pi(b[d]);
                var f = a.i;
                0 > f && (f += e.length);
                0 <= f && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    Mi.prototype.toString = function() {
        return JSON.stringify({
            nativeQuery: this.j,
            occurrenceIndex: this.h,
            paragraphIndex: this.i,
            ignoreMode: this.g
        })
    };

    function Oi(a, b) {
        if (null == a.g) return b;
        switch (a.g) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.g);
        }
    }

    function Pi(a) {
        var b = [];
        Fi(a.getElementsByTagName("p"), function(c) {
            100 <= Qi(c) && b.push(c)
        });
        return b
    }

    function Qi(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Fi(a.childNodes, function(c) {
            b += Qi(c)
        });
        return b
    }

    function Ri(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    };

    function Si(a) {
        if (!a) return null;
        var b = D(a, 7);
        if (D(a, 1) || a.getId() || 0 < D(a, 4).length) {
            var c = a.getId(),
                d = D(a, 1),
                e = D(a, 4);
            b = D(a, 2);
            var f = D(a, 5);
            a = Ti(D(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + Ri(c));
            if (e)
                for (c = 0; c < e.length; c++) g += "." + Ri(e[c]);
            b = (e = g) ? new Mi(e, b, f, a) : null
        } else b = b ? new Mi(b, D(a, 2), D(a, 5), Ti(D(a, 6))) : null;
        return b
    }
    var Ui = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Ti(a) {
        return null == a ? a : Ui[a]
    }
    var Vi = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function Wi(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function Xi(a) {
        a = Wi(a);
        return a.optimization = a.optimization || {}
    };

    function Yi(a) {
        switch (D(a, 8)) {
            case 1:
            case 2:
                if (null == a) var b = null;
                else b = H(a, N, 1), null == b ? b = null : (a = D(a, 2), b = null == a ? null : new Fh({
                    Ga: [b],
                    Ra: a
                }));
                return null != b ? fi(b) : hi(Error("Missing dimension when creating placement id"));
            case 3:
                return hi(Error("Missing dimension when creating placement id"));
            default:
                return hi(Error("Invalid type: " + D(a, 8)))
        }
    };

    function Zi() {
        this.g = new Gh
    }
    Zi.prototype.set = function(a, b) {
        var c = this.g.get(a);
        c || (c = new ai, this.g.set(a, c));
        c.add(b)
    };

    function $i(a, b) {
        function c() {
            d.push({
                anchor: e.anchor,
                position: e.position
            });
            return e.anchor == b.anchor && e.position == b.position
        }
        for (var d = [], e = a; e;) {
            switch (e.position) {
                case 1:
                    if (c()) return d;
                    e.position = 2;
                case 2:
                    if (c()) return d;
                    if (e.anchor.firstChild) {
                        e = {
                            anchor: e.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else e.position = 3;
                case 3:
                    if (c()) return d;
                    e.position = 4;
                case 4:
                    if (c()) return d
            }
            for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body;) {
                e = {
                    anchor: e.anchor.parentNode,
                    position: 3
                };
                if (c()) return d;
                e.position = 4;
                if (c()) return d
            }
            e && e.anchor.nextSibling ? e = {
                anchor: e.anchor.nextSibling,
                position: 1
            } : e = null
        }
        return d
    };

    function aj(a, b) {
        this.h = a;
        this.g = b
    }

    function bj(a, b) {
        var c = new Zi,
            d = new ai;
        b.forEach(function(e) {
            if (H(e, mh, 1)) {
                e = H(e, mh, 1);
                if (H(e, Od, 1) && H(H(e, Od, 1), N, 1) && H(e, Od, 2) && H(H(e, Od, 2), N, 1)) {
                    var f = cj(a, H(H(e, Od, 1), N, 1)),
                        g = cj(a, H(H(e, Od, 2), N, 1));
                    if (f && g)
                        for (f = w($i({
                                anchor: f,
                                position: D(H(e, Od, 1), 2)
                            }, {
                                anchor: g,
                                position: D(H(e, Od, 2), 2)
                            })), g = f.next(); !g.done; g = f.next()) g = g.value, c.set(Ba(g.anchor), g.position)
                }
                H(e, Od, 3) && H(H(e, Od, 3), N, 1) && (f = cj(a, H(H(e, Od, 3), N, 1))) && c.set(Ba(f), D(H(e, Od, 3), 2))
            } else H(e, nh, 2) ? dj(a, H(e, nh, 2), c) : H(e, oh, 3) && ej(a, H(e,
                oh, 3), d)
        });
        return new aj(c, d)
    }

    function dj(a, b, c) {
        H(b, N, 1) && (a = fj(a, H(b, N, 1))) && a.forEach(function(d) {
            d = Ba(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3)
        })
    }

    function ej(a, b, c) {
        H(b, N, 1) && (a = fj(a, H(b, N, 1))) && a.forEach(function(d) {
            c.add(Ba(d))
        })
    }

    function cj(a, b) {
        return (a = fj(a, b)) && 0 < a.length ? a[0] : null
    }

    function fj(a, b) {
        return (b = Si(b)) ? Ni(b, a) : null
    };

    function gj(a, b) {
        if (!a) return !1;
        a = Mc(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function hj(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function ij(a) {
        return !!a.nextSibling || !!a.parentNode && ij(a.parentNode)
    };

    function jj(a, b) {
        return a && null != D(a, 4) && b[D(H(a, Qd, 4), 2)] ? !1 : !0
    }

    function kj(a) {
        var b = {};
        a && D(a, 6).forEach(function(c) {
            b[c] = !0
        });
        return b
    }

    function lj(a, b, c, d, e) {
        this.g = a;
        this.C = b;
        this.i = c;
        this.l = e || null;
        this.m = (this.u = d) ? bj(a.document, I(d, kh, 5)) : bj(a.document, []);
        this.h = 0;
        this.j = !1
    }

    function mj(a, b) {
        if (a.j) return !0;
        a.j = !0;
        var c = I(a.i, Rd, 1);
        a.h = 0;
        var d = kj(a.u);
        try {
            var e = a.g.localStorage.getItem("google_ama_settings");
            var f = e ? Pb(bi, e) : null
        } catch (m) {
            f = null
        }
        if (null !== f && Kb(f, 2, !1)) return Wi(a.g).eatf = !0, $h(7, [!0, 0, !1]), !0;
        f = new ai([2]);
        for (e = 0; e < c.length; e++) {
            var g = a;
            var h = c[e],
                k = e,
                l = b;
            if (H(h, Qd, 4) && f.contains(D(H(h, Qd, 4), 1)) && 1 === D(h, 8) && jj(h, d)) {
                g.h++;
                if (h = nj(g, h, l, d)) l = Wi(g.g), l.numAutoAdsPlaced || (l.numAutoAdsPlaced = 0), null == l.placed && (l.placed = []), l.numAutoAdsPlaced++, l.placed.push({
                    index: k,
                    element: h.da
                }), $h(7, [!1, g.h, !0]);
                g = h
            } else g = null;
            if (g) return !0
        }
        $h(7, [!1, a.h, !1]);
        return !1
    }

    function nj(a, b, c, d) {
        if (!jj(b, d) || 1 != D(b, 8)) return null;
        d = H(b, N, 1);
        if (!d) return null;
        d = Si(d);
        if (!d) return null;
        d = Ni(d, a.g.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = D(b, 2);
        e = Vi[e];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.g;
                switch (e) {
                    case 0:
                        f = gj(hj(d), f);
                        break a;
                    case 3:
                        f = gj(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = gj(g ? 1 == g.nodeType ? g : hj(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !ij(d))) c = 1 == e || 2 == e ? d : d.parentNode,
            c = !(c && !Gi(c) && 0 >= c.offsetWidth);f = !c
        }
        if (!(c = f)) {
            c = a.m;
            f = D(b, 2);
            g =
                Ba(d);
            g = c.h.g.get(g);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.g.contains(Ba(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.g.contains(Ba(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (c) return null;
        c = H(b, Pd, 3);
        f = {};
        c && (f.Xa = D(c, 1), f.Ha = D(c, 2), f.clearBoth = !!Jb(c, 3));
        c = H(b, Qd, 4) && D(H(b, Qd, 4), 2) ? D(H(b, Qd, 4), 2) : null;
        c = Nh(c);
        g = null == D(b, 12) ? null : D(b, 12);
        g = null == g ? null : new Lh(null, {
            google_ml_rank: g
        });
        b = oj(a, b);
        b = Mh(a.l, c, g, b);
        c = a.g;
        a = a.C;
        var h = c.document,
            k = f.clearBoth ||
            !1;
        g = Ec((new Fc(h)).g, "DIV");
        var l = g.style;
        l.width = "100%";
        l.height = "auto";
        l.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign = "center";
        f.lb && Li(k, f.lb);
        h = Ec((new Fc(h)).g, "INS");
        k = h.style;
        k.display = "block";
        k.margin = "auto";
        k.backgroundColor = "transparent";
        f.Xa && (k.marginTop = f.Xa);
        f.Ha && (k.marginBottom = f.Ha);
        f.bb && Li(k, f.bb);
        g.appendChild(h);
        f = {
            oa: g,
            da: h
        };
        f.da.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Ia) f.oa.className = h.join(" ");
        h = f.da;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client",
            a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var m = f.oa;
                var q = void 0 === q ? 0 : q;
                if (V(pg)) {
                    q = void 0 === q ? 0 : q;
                    var t = Ii(d, e, q);
                    if (t.init) {
                        var v = t.init;
                        for (d = v; d = t.ha(d);) v = d;
                        var A = {
                            anchor: v,
                            position: t.ka
                        }
                    } else A = {
                        anchor: d,
                        position: e
                    };
                    m["google-ama-order-assurance"] = q;
                    Hi(m, A.anchor, A.position)
                } else Hi(m, d, e);
                b: {
                    var G = f.da;G.setAttribute("data-adsbygoogle-status", "reserved");G.className += " adsbygoogle-noablate";m = {
                        element: G
                    };
                    var F = b && b.Qa;
                    if (G.hasAttribute("data-pub-vars")) {
                        try {
                            F = JSON.parse(G.getAttribute("data-pub-vars"))
                        } catch (ca) {
                            break b
                        }
                        G.removeAttribute("data-pub-vars")
                    }
                    F &&
                    (m.params = F);
                    (c.adsbygoogle = c.adsbygoogle || []).push(m)
                }
            } catch (ca) {
                (G = f.oa) && G.parentNode && (F = G.parentNode, F.removeChild(G), Gi(F) && (F.style.display = F.getAttribute("data-init-display") || "none"));
                G = !1;
                break a
            }
            G = !0
        }
        return G ? f : null
    }

    function oj(a, b) {
        return di(gi(Yi(b).map(Oh), function(c) {
            Wi(a.g).exception = c
        }))
    };

    function pj() {
        this.h = new qj(this);
        this.g = 0
    }
    pj.prototype.resolve = function(a) {
        rj(this);
        this.g = 1;
        this.j = a;
        sj(this.h)
    };
    pj.prototype.reject = function(a) {
        rj(this);
        this.g = 2;
        this.i = a;
        sj(this.h)
    };

    function rj(a) {
        if (0 != a.g) throw Error("Already resolved/rejected.");
    }

    function qj(a) {
        this.g = a
    }
    qj.prototype.then = function(a, b) {
        if (this.h) throw Error("Then functions already set.");
        this.h = a;
        this.i = b;
        sj(this)
    };

    function sj(a) {
        switch (a.g.g) {
            case 0:
                break;
            case 1:
                a.h && a.h(a.g.j);
                break;
            case 2:
                a.i && a.i(a.g.i);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    };

    function tj(a) {
        this.exception = a
    }

    function uj(a, b, c) {
        this.i = a;
        this.g = b;
        this.h = c
    }
    uj.prototype.start = function() {
        this.j()
    };
    uj.prototype.j = function() {
        try {
            switch (this.i.document.readyState) {
                case "complete":
                case "interactive":
                    mj(this.g, !0);
                    vj(this);
                    break;
                default:
                    mj(this.g, !1) ? vj(this) : this.i.setTimeout(Ga(this.j, this), 100)
            }
        } catch (a) {
            vj(this, a)
        }
    };

    function vj(a, b) {
        try {
            var c = a.h,
                d = c.resolve,
                e = a.g;
            Wi(e.g);
            I(e.i, Rd, 1);
            d.call(c, new tj(b))
        } catch (f) {
            a.h.reject(f)
        }
    };

    function wj(a) {
        Th(a, {
            atf: 1
        })
    }

    function xj(a, b) {
        (a.google_ama_state = a.google_ama_state || {}).exception = b;
        Th(a, {
            atf: 0
        })
    };

    function yj() {
        var a = this;
        this.promise = new p.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };

    function zj() {
        var a = new yj;
        this.promise = a.promise;
        this.resolve = a.resolve
    }

    function Aj(a) {
        y.google_llp || (y.google_llp = {});
        var b = y.google_llp;
        b[7] || (b[7] = new zj, a && a());
        return b[7]
    }

    function Bj(a) {
        return Aj(function() {
            Lc(y.document, a)
        }).promise
    };

    function Cj(a) {
        var b = {};
        return {
            enable_page_level_ads: (b.pltais = !0, b),
            google_ad_client: a
        }
    };

    function Dj(a) {
        var b = $e(y, 12, a.google_ad_client);
        a = "google_ad_host" in a;
        var c = .5 > Math.random(),
            d = zd(y.location, "google_ads_preview");
        return b && !a && c || d
    }

    function Ej(a) {
        if (y.google_apltlad || y.top != y || !a.google_ad_client) return null;
        var b = Dj(a);
        y.google_apltlad = !0;
        var c = Cj(a.google_ad_client),
            d = c.enable_page_level_ads;
        Rc(a, function(e, f) {
            cc[f] && "google_ad_client" !== f && (d[f] = e)
        });
        if (b) d.google_ad_channel = "AutoInsertAutoAdCode";
        else if (d.google_pgb_reactive = 7, "google_ad_section" in a || "google_ad_region" in a) d.google_ad_section = a.google_ad_section || a.google_ad_region;
        return c
    }

    function Fj(a) {
        return Aa(a.enable_page_level_ads) && 7 === a.enable_page_level_ads.google_pgb_reactive
    };
    var Gj = null;

    function Hj() {
        this.S = {}
    }

    function Ij() {
        if (Jj) return Jj;
        var a = ld() || vd(),
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Jj = b : a.google_persistent_state_async = Jj = new Hj
    }

    function Kj(a) {
        return Lj[a] || "google_ps_" + a
    }

    function Mj(a, b, c) {
        b = Kj(b);
        a = a.S;
        var d = a[b];
        return void 0 === d ? a[b] = c : d
    }

    function Nj() {
        var a = Ij();
        return Mj(a, 24, void 0)
    }
    var Jj = null,
        Oj = {},
        Lj = (Oj[8] = "google_prev_ad_formats_by_region", Oj[9] = "google_prev_ad_slotnames_by_region", Oj);

    function Pj(a) {
        C(this, a, null, null)
    }
    x(Pj, B);

    function Qj(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        var c = b;
        return c ? ii(function() {
            return Pb(Pj, c)
        }) : fi(null)
    };

    function Rj(a) {
        this.g = a || {
            cookie: ""
        }
    }
    Rj.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Bb;
            d = c.Cb || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.zb
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" +
            e : "")
    };
    Rj.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = kb(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };

    function Sj(a) {
        R.call(this);
        this.i = a;
        this.h = null;
        this.u = {};
        this.m = null
    }
    x(Sj, R);
    Sj.prototype.g = function() {
        this.u = {};
        this.m && (Dc(this.i, "message", this.m), delete this.m);
        delete this.u;
        delete this.i;
        delete this.h;
        R.prototype.g.call(this)
    };

    function Tj(a) {
        var b;
        (b = "function" === typeof a.i.__tcfapi) || (a.h ? a = a.h : (a.h = Zc(a.i, "__tcfapiLocator"), a = a.h), b = null != a);
        return b
    };

    function Uj(a) {
        var b = a.Y,
            c = a.Wa,
            d = a.eb;
        Vj({
            Y: b,
            ra: a.ra,
            ia: void 0 === a.ia ? !1 : a.ia,
            ja: void 0 === a.ja ? !1 : a.ja
        }) ? (a = Nj()) ? d(Wj(b, Xj(a))) : Yj(b, c).then(function(e) {
            return e.map(Xj)
        }).then(function(e) {
            return e.map(function(f) {
                return Wj(b, f)
            })
        }).then(d) : d(Wj(b, je(!0)))
    }

    function Vj(a) {
        var b = a.Y,
            c = a.ra,
            d = a.ia;
        if (!(a = !a.ja && Tj(new Sj(b)))) {
            if (d = !d) {
                if (c) {
                    b = Qj(b);
                    if (null != b.g)
                        if ((b = b.g.value) && null != D(b, 1)) b: switch (b = D(b, 1), b) {
                            case 1:
                                b = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + b);
                        } else b = !1;
                        else P.D(806, b.h, void 0, void 0), b = !1;
                    c = !b
                }
                d = c
            }
            a = d
        }
        return a ? !0 : !1
    }

    function Yj(a, b) {
        return p.Promise.race([Zj(), ak(a, b)])
    }

    function Zj() {
        return (new p.Promise(function(a) {
            var b = Ij();
            a = {
                resolve: a
            };
            var c = Mj(b, 25, []);
            c.push(a);
            b.S[Kj(25)] = c
        })).then(bk)
    }

    function ak(a, b) {
        return new p.Promise(function(c) {
            a.setTimeout(c, b, hi(Error("tcto")))
        })
    }

    function bk(a) {
        return a ? fi(a) : hi(Error("tcnull"))
    }

    function Xj(a) {
        var b = void 0 === b ? !1 : b;
        if (!1 === a.gdprApplies) var c = !0;
        else void 0 === a.internalErrorState && (void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0), void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0), a.internalErrorState = void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3), c = "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus &&
            ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1;
        if (c)
            if (!1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !b || "string" !== typeof a.tcString || !a.tcString.length) a = !0;
            else {
                var d = void 0 === d ? "755" : d;
                b: {
                    if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"], void 0 !== b)) {
                        b = b[void 0 === d ? "755" : d];
                        break b
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (d = !(!b || !b[void 0 === d ? "755" : d])) && a.purposeOneTreatment && ("DE" === a.publisherCC ||
                    V(Ng) && "CH" === a.publisherCC) ? a = !0 : (d && (a = a.purpose.consents, d = !(!a || !a["1"])), a = d)) : a = !0
            }
        else a = !1;
        return je(a)
    }

    function Wj(a, b) {
        a: {
            a = void 0 === a ? window : a;
            if (Jb(b, 5)) try {
                var c = a.localStorage;
                break a
            } catch (d) {}
            c = null
        }
        return (b = c) ? fi(b) : hi(Error("unav"))
    };

    function ck(a, b, c, d, e, f, g) {
        this.g = y;
        this.C = a;
        this.i = b;
        this.h = c;
        this.u = d;
        this.l = e;
        this.j = f;
        this.m = g
    }

    function dk(a) {
        if (a.i) Uj({
            Y: a.g,
            ra: a.m,
            Wa: a.h,
            eb: function(c) {
                return ek(a, c)
            },
            ja: a.l,
            ia: a.j
        });
        else {
            try {
                var b = fi(a.g.localStorage)
            } catch (c) {
                b = hi(Error("unav"))
            }
            ek(a, b)
        }
    }

    function ek(a, b) {
        gi(ei(b, function(c) {
            fk(a, "ok");
            gk(a.g, a.C, c)
        }), function(c) {
            return fk(a, c.message)
        })
    }

    function fk(a, b) {
        a.u && Qe("abg::amalserr", {
            status: b,
            guarding: a.i,
            timeout: a.h,
            rate: .01
        }, .01)
    }

    function gk(a, b, c) {
        if (!J(K).ama_ran_on_page) {
            var d = Xh(c);
            if (d) {
                if (null != D(d, 24)) {
                    c = Xi(a);
                    c.availableAbg = !0;
                    var e, f;
                    c.ablationFromStorage = !!(null == (e = H(d, ph, 24)) ? 0 : null == (f = H(e, rh, 3)) ? 0 : H(f, th, 2))
                }
                if (Fj(b) && (e = Ch(a, I(d, xh, 7)), !e || !Jb(e, 8))) return;
                J(K).ama_ran_on_page = !0;
                if ((e = H(d, Ah, 13)) && 1 === D(e, 1)) {
                    var g = 0,
                        h = H(e, Bh, 6);
                    h && D(h, 3) && (g = D(h, 3) || 0);
                    Wb(a, g)
                } else if (null == (g = H(d, ph, 24)) ? 0 : null == (h = H(g, rh, 3)) ? 0 : H(h, th, 2)) Xi(a).ablatingThisPageview = !0, Wb(a, 1);
                $h(3, [Nb(d)]);
                var k = b.google_ad_client || "";
                b = Uh(Aa(b.enable_page_level_ads) ?
                    b.enable_page_level_ads : {});
                var l = Mh(Qh, new Lh(null, b));
                Oe(782, function() {
                    var m = l;
                    try {
                        var q = Ch(a, I(d, xh, 7)),
                            t;
                        if (t = q) a: {
                            var v;
                            if (v = D(q, 2))
                                for (var A = 0; A < v.length; A++)
                                    if (1 == v[A]) {
                                        t = !0;
                                        break a
                                    }
                            t = !1
                        }
                        if (t) {
                            if (D(q, 4)) {
                                t = {};
                                var G = new Lh(null, (t.google_package = D(q, 4), t));
                                m = Mh(m, G)
                            }
                            var F = new lj(a, k, d, q, m),
                                ca = new pj;
                            (new uj(a, F, ca)).start();
                            ca.h.then(Ha(wj, a), Ha(xj, a))
                        }
                    } catch (za) {
                        Th(a, {
                            atf: -1
                        })
                    }
                })
            } else Yh(a, c)
        }
    };

    function hk() {
        this.debugCard = null;
        this.debugCardRequested = !1
    };

    function ik(a, b) {
        a.sa(function(c) {
            c.shv = String(b);
            c.mnvr = "";
            var d = Xf.s().g();
            var e = Ub(y);
            (d = d.concat(e).join(",")) && (c.eid = 50 < d.length ? d.substring(0, 50) + "T" : d)
        })
    };
    var jk = "undefined" === typeof sttc ? void 0 : sttc;

    function kk(a) {
        try {
            return Zb(a), new ge(JSON.parse(a))
        } catch (b) {
            P.D(838, b instanceof Error ? b : Error(String(b)), void 0, function(c) {
                c.jspb = String(a)
            })
        }
        return new ge
    };
    var lk = null;

    function X(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        W.call(this, a, b);
        this.aa = c;
        this.jb = d
    }
    x(X, W);
    X.prototype.ma = function() {
        return this.aa
    };
    X.prototype.ea = function(a, b, c) {
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };

    function mk(a) {
        return function(b) {
            return !!(b.aa & a)
        }
    };
    var nk = Bb("script");

    function ok(a, b, c, d, e, f, g, h, k, l, m, q) {
        this.m = a;
        this.P = b;
        this.aa = void 0 === c ? null : c;
        this.h = void 0 === d ? null : d;
        this.N = void 0 === e ? null : e;
        this.g = void 0 === f ? null : f;
        this.i = void 0 === g ? null : g;
        this.K = void 0 === h ? null : h;
        this.L = void 0 === k ? null : k;
        this.j = void 0 === l ? null : l;
        this.l = void 0 === m ? null : m;
        this.M = void 0 === q ? null : q;
        this.O = this.C = this.u = null
    }
    ok.prototype.size = function() {
        return this.P
    };

    function pk(a, b, c) {
        null != a.aa && (c.google_responsive_formats = a.aa);
        null != a.N && (c.google_safe_for_responsive_override = a.N);
        null != a.g && (!0 === a.g ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.g));
        null != a.i && !0 !== a.i && (c.gfwrnher = a.i);
        var d = a.l || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.j || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.size().X(b);
        var e = a.size().height();
        c.google_ad_resize || (c.google_ad_width = d, c.google_ad_height =
            e, c.google_ad_format = a.size().pa(b), c.google_responsive_auto_format = a.m, null != a.h && (c.armr = a.h), c.google_ad_resizable = !0, c.google_override_format = 1, c.google_loader_features_used = 128, !0 === a.g && (c.gfwrnh = a.size().height() + "px"));
        null != a.K && (c.gfwroml = a.K);
        null != a.L && (c.gfwromr = a.L);
        null != a.j && (c.gfwroh = a.j);
        null != a.l && (c.gfwrow = a.l);
        null != a.M && (c.gfwroz = a.M);
        null != a.u && (c.gml = a.u);
        null != a.C && (c.gmr = a.C);
        null != a.O && (c.gzi = a.O);
        b = vd();
        b = yd(b) || b;
        zd(b.location, "google_responsive_slot_debug") && (c.ds = "outline:thick dashed " +
            (d && e ? !0 !== a.g || !0 !== a.i ? "#ffa500" : "#0f0" : "#f00") + " !important;");
        zd(b.location, "google_responsive_dummy_ad") && (Sa([1, 2, 3, 4, 5, 6, 7, 8], a.m) || 1 === a.h) && 2 !== a.h && (a = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = "<" + nk + ">window.top.postMessage('" + a + "', '*');\n          </" + nk + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' +
            d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
    };
    /* 
     
     Copyright 2019 The AMP HTML Authors. All Rights Reserved. 
     
     Licensed under the Apache License, Version 2.0 (the "License"); 
     you may not use this file except in compliance with the License. 
     You may obtain a copy of the License at 
     
          http://www.apache.org/licenses/LICENSE-2.0 
     
     Unless required by applicable law or agreed to in writing, software 
     distributed under the License is distributed on an "AS-IS" BASIS, 
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
     See the License for the specific language governing permissions and 
     limitations under the License. 
    */
    var qk = {},
        rk = (qk.image_stacked = 1 / 1.91, qk.image_sidebyside = 1 / 3.82, qk.mobile_banner_image_sidebyside = 1 / 3.82, qk.pub_control_image_stacked = 1 / 1.91, qk.pub_control_image_sidebyside = 1 / 3.82, qk.pub_control_image_card_stacked = 1 / 1.91, qk.pub_control_image_card_sidebyside = 1 / 3.74, qk.pub_control_text = 0, qk.pub_control_text_card = 0, qk),
        sk = {},
        tk = (sk.image_stacked = 80, sk.image_sidebyside = 0, sk.mobile_banner_image_sidebyside = 0, sk.pub_control_image_stacked = 80, sk.pub_control_image_sidebyside = 0, sk.pub_control_image_card_stacked =
            85, sk.pub_control_image_card_sidebyside = 0, sk.pub_control_text = 80, sk.pub_control_text_card = 80, sk),
        uk = {},
        vk = (uk.pub_control_image_stacked = 100, uk.pub_control_image_sidebyside = 200, uk.pub_control_image_card_stacked = 150, uk.pub_control_image_card_sidebyside = 250, uk.pub_control_text = 100, uk.pub_control_text_card = 150, uk);

    function wk(a) {
        var b = 0;
        a.I && b++;
        a.F && b++;
        a.G && b++;
        if (3 > b) return {
            H: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.I.split(",");
        var c = a.G.split(",");
        a = a.F.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            H: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            H: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (b.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')
        };
        for (var d = [], e = [], f = 0; f < b.length; f++) {
            var g =
                Number(c[f]);
            if (isNaN(g) || 0 === g) return {
                H: "Wrong value '" + c[f] + "' for data-matched-content-rows-num."
            };
            d.push(g);
            g = Number(a[f]);
            if (isNaN(g) || 0 === g) return {
                H: "Wrong value '" + a[f] + "' for data-matched-content-columns-num."
            };
            e.push(g)
        }
        return {
            G: d,
            F: e,
            Oa: b
        }
    }

    function xk(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    };
    var yk = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

    function zk(a, b) {
        W.call(this, a, b)
    }
    x(zk, W);
    zk.prototype.X = function(a) {
        return Math.min(1200, Math.max(this.minWidth(), Math.round(a)))
    };

    function Ak(a, b) {
        Bk(a, b);
        if ("pedestal" == b.google_content_recommendation_ui_type) return new ok(9, new zk(a, Math.floor(a * b.google_phwr)));
        var c = Gc();
        468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * rk.mobile_banner_image_sidebyside + tk.mobile_banner_image_sidebyside) + 96), a = {
            W: a,
            U: c,
            F: 1,
            G: 12,
            I: "mobile_banner_image_sidebyside"
        }) : (a = xk(a), a = {
            W: a.width,
            U: a.height,
            F: 1,
            G: 13,
            I: "image_sidebyside"
        }) : (a = xk(a), a = {
            W: a.width,
            U: a.height,
            F: 4,
            G: 2,
            I: "image_stacked"
        });
        Ck(b, a);
        return new ok(9, new zk(a.W, a.U))
    }

    function Dk(a, b) {
        Bk(a, b);
        var c = wk({
            G: b.google_content_recommendation_rows_num,
            F: b.google_content_recommendation_columns_num,
            I: b.google_content_recommendation_ui_type
        });
        if (c.H) a = {
            W: 0,
            U: 0,
            F: 0,
            G: 0,
            I: "image_stacked",
            H: c.H
        };
        else {
            var d = 2 === c.Oa.length && 468 <= a ? 1 : 0;
            var e = c.Oa[d];
            e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
            var f = vk[e];
            for (var g = c.F[d]; a / g < f && 1 < g;) g--;
            f = g;
            c = c.G[d];
            d = Math.floor(((a - 8 * f - 8) / f * rk[e] + tk[e]) * c + 8 * c + 8);
            a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    ta: "Calculated slot width is too large: " + a
                } :
                1500 < d ? {
                    width: 0,
                    height: 0,
                    ta: "Calculated slot height is too large: " + d
                } : {
                    width: a,
                    height: d
                };
            a = a.ta ? {
                W: 0,
                U: 0,
                F: 0,
                G: 0,
                I: e,
                H: a.ta
            } : {
                W: a.width,
                U: a.height,
                F: f,
                G: c,
                I: e
            }
        }
        if (a.H) throw new O(a.H);
        Ck(b, a);
        return new ok(9, new zk(a.W, a.U))
    }

    function Bk(a, b) {
        if (0 >= a) throw new O("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function Ck(a, b) {
        a.google_content_recommendation_ui_type = b.I;
        a.google_content_recommendation_columns_num = b.F;
        a.google_content_recommendation_rows_num = b.G
    };

    function Ek(a, b) {
        W.call(this, a, b)
    }
    x(Ek, W);
    Ek.prototype.X = function() {
        return this.minWidth()
    };
    Ek.prototype.ea = function(a, b, c) {
        xi(a, c);
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };
    var Fk = {
        "image-top": function(a) {
            return 600 >= a ? 284 + .414 * (a - 250) : 429
        },
        "image-middle": function(a) {
            return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
        },
        "image-side": function(a) {
            return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
        },
        "text-only": function(a) {
            return 500 >= a ? 187 - .228 * (a - 250) : 130
        },
        "in-article": function(a) {
            return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
        }
    };

    function Gk(a, b) {
        W.call(this, a, b)
    }
    x(Gk, W);
    Gk.prototype.X = function() {
        return Math.min(1200, this.minWidth())
    };

    function Hk(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if ("in-article" == f && "false" != e.google_full_width_responsive) {
            var g = qi(b, c, a, .2, e);
            if (!0 !== g) e.gfwrnwer = g;
            else if (g = Q(b)) e.google_full_width_responsive_allowed = !0, c.parentElement && (vi(b, c), xi(b, c), a = g)
        }
        if (250 > a) throw new O("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
        a = Math.min(1200, Math.floor(a));
        if (d && "in-article" != f) {
            f = Math.ceil(d);
            if (50 > f) throw new O("Fluid responsive ads must be at least 50px tall: height=" +
                f);
            return new ok(11, new W(a, f))
        }
        if ("in-article" != f && (d = e.google_ad_layout_key)) {
            f = "" + d;
            b = Math.pow(10, 3);
            if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length) {
                e = [];
                for (g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
                b = e
            } else b = null;
            if (!b) throw new O("Invalid data-ad-layout-key value: " + f);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++) c += b[g] * d, d *= f;
            f = Math.ceil(1E3 * c - -725 + 10);
            if (isNaN(f)) throw new O("Invalid height: height=" + f);
            if (50 > f) throw new O("Fluid responsive ads must be at least 50px tall: height=" + f);
            if (1200 < f) throw new O("Fluid responsive ads must be at most 1200px tall: height=" + f);
            return new ok(11, new W(a, f))
        }
        d = Fk[f];
        if (!d) throw new O("Invalid data-ad-layout value: " + f);
        c = Bi(c, b);
        b = Q(b);
        b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
        return new ok(11, "in-article" == f ? new Gk(a, b) : new W(a, b))
    };

    function Ik(a) {
        return function(b) {
            for (var c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function Jk(a, b, c) {
        for (var d = a.length, e = null, f = 0; f < d; ++f) {
            var g = a[f];
            if (b(g)) {
                if (!c || c(g)) return g;
                null === e && (e = g)
            }
        }
        return e
    };
    var Y = [new X(970, 90, 2), new X(728, 90, 2), new X(468, 60, 2), new X(336, 280, 1), new X(320, 100, 2), new X(320, 50, 2), new X(300, 600, 4), new X(300, 250, 1), new X(250, 250, 1), new X(234, 60, 2), new X(200, 200, 1), new X(180, 150, 1), new X(160, 600, 4), new X(125, 125, 1), new X(120, 600, 4), new X(120, 240, 4), new X(120, 120, 1, !0)],
        Kk = [Y[6], Y[12], Y[3], Y[0], Y[7], Y[14], Y[1], Y[8], Y[10], Y[4], Y[15], Y[2], Y[11], Y[5], Y[13], Y[9], Y[16]];

    function Lk(a, b, c, d, e) {
        "false" == e.google_full_width_responsive ? c = {
            A: a,
            B: 1
        } : "autorelaxed" == b && e.google_full_width_responsive || Mk(b) || e.google_ad_resize ? (488 > Q(c) && (si(c) || V(Dg)) && vi(c, d), b = ri(a, c, d, e), c = !0 !== b ? {
            A: a,
            B: b
        } : {
            A: Q(c) || a,
            B: !0
        }) : c = {
            A: a,
            B: 2
        };
        b = c.B;
        return !0 !== b ? {
            A: a,
            B: b
        } : d.parentElement ? {
            A: c.A,
            B: b
        } : {
            A: a,
            B: b
        }
    }

    function Nk(a, b, c, d, e) {
        var f = Oe(247, function() {
                return Lk(a, b, c, d, e)
            }),
            g = f.A;
        f = f.B;
        var h = !0 === f,
            k = M(d.style.width),
            l = M(d.style.height),
            m = Ok(g, b, c, d, e, h);
        g = m.V;
        h = m.R;
        var q = m.ma;
        m = m.Na;
        var t = Pk(b, q),
            v, A = (v = yi(d, c, "marginLeft", M)) ? v + "px" : "",
            G = (v = yi(d, c, "marginRight", M)) ? v + "px" : "";
        v = yi(d, c, "zIndex") || "";
        return new ok(t, g, q, null, m, f, h, A, G, l, k, v)
    }

    function Mk(a) {
        return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function Ok(a, b, c, d, e, f) {
        b = "auto" == b ? .25 >= a / Math.min(1200, Q(c)) ? 4 : 3 : pi(b);
        var g = !1,
            h = !1;
        if (488 > Q(c)) {
            var k = oi(d, c);
            var l = Bi(d, c);
            g = !l && k;
            h = l && k
        }
        l = 488 > Q(c);
        var m = [zi(a), mk(b)];
        si(c) || m.push(Ai(l, c, d, h));
        null != e.google_max_responsive_height && m.push(Di(e.google_max_responsive_height));
        var q = [function(v) {
            return !v.jb
        }];
        !g && !h || si(c) || (g = Ei(c, d), q.push(Di(g)));
        var t = l && !f && 3 === b && Qk(c) ? new X(a, Math.floor(a / 1.2), 1) : Jk(Kk.slice(0), Ik(m), Ik(q));
        if (!t) throw new O("No slot size for availableWidth=" + a);
        l = Oe(248,
            function() {
                var v;
                a: if (f) {
                    if (e.gfwrnh && (v = M(e.gfwrnh))) {
                        v = {
                            V: new Ek(a, v),
                            R: !0
                        };
                        break a
                    }
                    v = a / 1.2;
                    if (si(c)) var A = v;
                    else {
                        A = Math;
                        var G = A.min;
                        if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var F = Infinity;
                        else {
                            F = d;
                            var ca = Infinity;
                            do {
                                var za = yi(F, c, "height", M);
                                za && (ca = Math.min(ca, za));
                                (za = yi(F, c, "maxHeight", M)) && (ca = Math.min(ca, za))
                            } while ((F = F.parentElement) && "HTML" != F.tagName);
                            F = ca
                        }
                        A = G.call(A, v, F);
                        if (A < .5 * v || 100 > A) A = v
                    }
                    V(Jg) && !Bi(d, c) && (A = Math.max(A, .5 * Xe(c).clientHeight));
                    v = {
                        V: new Ek(a,
                            Math.floor(A)),
                        R: A < v ? 102 : !0
                    }
                } else v = {
                    V: t,
                    R: 100
                };
                return v
            });
        g = l.V;
        l = l.R;
        return "in-article" === e.google_ad_layout && Rk(c) ? {
            V: Sk(a, c, d, g, e),
            R: !1,
            ma: b,
            Na: k
        } : {
            V: g,
            R: l,
            ma: b,
            Na: k
        }
    }

    function Pk(a, b) {
        if ("auto" == a) return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8
        }
        throw Error("bad mask");
    }

    function Sk(a, b, c, d, e) {
        var f = e.google_ad_height || yi(c, b, "height", M);
        b = Hk(a, b, c, f, e).size();
        return b.minWidth() * b.height() > a * d.height() ? new X(b.minWidth(), b.height(), 1) : d
    }

    function Rk(a) {
        return V(Gg) || a.location && "#hffwroe2etoq" == a.location.hash
    }

    function Qk(a) {
        return V(Fg) || a.location && "#affwroe2etoq" == a.location.hash
    };

    function Tk(a, b) {
        W.call(this, a, b)
    }
    x(Tk, W);
    Tk.prototype.X = function() {
        return this.minWidth()
    };
    Tk.prototype.pa = function(a) {
        return W.prototype.pa.call(this, a) + "_0ads_al"
    };
    var Uk = [new Tk(728, 15), new Tk(468, 15), new Tk(200, 90), new Tk(180, 90), new Tk(160, 90), new Tk(120, 90)];

    function Vk(a, b, c) {
        var d = 250,
            e = 90;
        d = void 0 === d ? 130 : d;
        e = void 0 === e ? 30 : e;
        var f = Jk(Uk, zi(a));
        if (!f) throw new O("No link unit size for width=" + a + "px");
        a = Math.min(a, 1200);
        f = f.height();
        b = Math.max(f, b);
        d = (new ok(10, new Tk(a, Math.min(b, 15 == f ? e : d)))).size();
        b = d.minWidth();
        d = d.height();
        15 <= c && (d = c);
        return new ok(10, new Tk(b, d))
    }

    function Wk(a, b, c, d) {
        if ("false" == d.google_full_width_responsive) return d.google_full_width_responsive_allowed = !1, d.gfwrnwer = 1, a;
        var e = ri(a, b, c, d);
        if (!0 !== e) return d.google_full_width_responsive_allowed = !1, d.gfwrnwer = e, a;
        e = Q(b);
        if (!e) return a;
        d.google_full_width_responsive_allowed = !0;
        xi(b, c);
        return e
    };

    function Xk(a, b, c, d, e) {
        var f;
        (f = Q(b)) ? 488 > Q(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, xi(b, c), f = {
            A: f,
            B: !0
        }) : f = {
            A: a,
            B: 5
        } : f = {
            A: a,
            B: 4
        }: f = {
            A: a,
            B: 10
        };
        var g = f;
        f = g.A;
        g = g.B;
        if (!0 !== g || a == f) return new ok(12, new W(a, d), null, null, !0, g, 100);
        a = Ok(f, "auto", b, c, e, !0);
        return new ok(1, a.V, a.ma, 2, !0, g, a.R)
    };

    function Yk(a, b) {
        var c = b.google_ad_format;
        if ("autorelaxed" == c) {
            a: {
                if ("pedestal" != b.google_content_recommendation_ui_type)
                    for (a = w(yk), c = a.next(); !c.done; c = a.next())
                        if (null != b[c.value]) {
                            b = !0;
                            break a
                        }
                b = !1
            }
            return b ? 9 : 5
        }
        if (Mk(c)) return 1;
        if ("link" == c) return 4;
        if ("fluid" == c) {
            if (c = "in-article" === b.google_ad_layout) c = V(Hg) || V(Gg) || a.location && ("#hffwroe2etop" == a.location.hash || "#hffwroe2etoq" == a.location.hash);
            return c ? (Zk(b), 1) : 8
        }
        if (27 === b.google_reactive_ad_format) return Zk(b), 1
    }

    function $k(a, b, c, d, e) {
        e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && yi(b, d, "width", M) || c.google_ad_width || 0;
        (V(Ig) || d.location && "#ooimne2e" == d.location.hash) && 4 === a && (c.google_ad_format = "auto", a = 1);
        var f = (f = al(a, e, b, c, d)) ? f : Nk(e, c.google_ad_format, d, b, c);
        f.size().ea(d, c, b);
        pk(f, e, c);
        1 != a && (a = f.size().height(), b.style.height = a + "px")
    }

    function al(a, b, c, d, e) {
        var f = d.google_ad_height || yi(c, e, "height", M);
        switch (a) {
            case 5:
                return a = Oe(247, function() {
                    return Lk(b, d.google_ad_format, e, c, d)
                }), f = a.A, a = a.B, !0 === a && b != f && xi(e, c), !0 === a ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = a), Ak(f, d);
            case 9:
                return Dk(b, d);
            case 4:
                return a = Wk(b, e, c, d), Vk(a, Ei(e, c), f);
            case 8:
                return Hk(b, e, c, f, d);
            case 10:
                return Xk(b, e, c, f, d)
        }
    }

    function Zk(a) {
        a.google_ad_format = "auto";
        a.armr = 3
    };

    function Z(a) {
        this.j = [];
        this.h = a || window;
        this.g = 0;
        this.i = null;
        this.l = 0
    }
    var bl;
    n = Z.prototype;
    n.fb = function(a, b) {
        0 != this.g || 0 != this.j.length || b && b != window ? this.Ja(a, b) : (this.g = 2, this.Ta(new cl(a, window)))
    };
    n.Ja = function(a, b) {
        this.j.push(new cl(a, b || this.h));
        dl(this)
    };
    n.mb = function(a) {
        this.g = 1;
        if (a) {
            var b = Pe(188, Ga(this.Sa, this, !0));
            this.i = this.h.setTimeout(b, a)
        }
    };
    n.Sa = function(a) {
        a && ++this.l;
        1 == this.g && (null != this.i && (this.h.clearTimeout(this.i), this.i = null), this.g = 0);
        dl(this)
    };
    n.tb = function() {
        return !(!window || !Array)
    };
    n.gb = function() {
        return this.l
    };

    function dl(a) {
        var b = Pe(189, Ga(a.ub, a));
        a.h.setTimeout(b, 0)
    }
    n.ub = function() {
        if (0 == this.g && this.j.length) {
            var a = this.j.shift();
            this.g = 2;
            var b = Pe(190, Ga(this.Ta, this, a));
            a.Y.setTimeout(b, 0);
            dl(this)
        }
    };
    n.Ta = function(a) {
        this.g = 0;
        a.g()
    };

    function el(a) {
        try {
            return a.sz()
        } catch (b) {
            return !1
        }
    }

    function fl() {
        if (bl && el(bl)) return bl;
        var a;
        if (!Gj) {
            for (var b = a = y, c = 0; a && a != a.parent;)
                if (a = a.parent, c++, Kc(a)) b = a;
                else break;
            Gj = b
        }
        a = Gj;
        return (b = a.google_jobrunner) && ("object" === typeof b || "function" === typeof b) && el(b) && qd(b.nq) && qd(b.nqa) && qd(b.al) && qd(b.rl) ? bl = b : a.google_jobrunner = bl = new Z(a)
    }

    function gl(a, b) {
        fl().nq(a, b)
    }

    function hl(a, b) {
        fl().nqa(a, b)
    }
    Z.prototype.nq = Z.prototype.fb;
    Z.prototype.nqa = Z.prototype.Ja;
    Z.prototype.al = Z.prototype.mb;
    Z.prototype.rl = Z.prototype.Sa;
    Z.prototype.sz = Z.prototype.tb;
    Z.prototype.tc = Z.prototype.gb;

    function cl(a, b) {
        this.g = a;
        this.Y = b
    };

    function il(a, b) {
        var c = yd(b);
        if (c) {
            c = Q(c);
            var d = Mc(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" != d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };
    var jl = {},
        kl = (jl.google_ad_modifications = !0, jl.google_analytics_domain_name = !0, jl.google_analytics_uacct = !0, jl.google_pause_ad_requests = !0, jl.google_trust_token_operation_status = !0, jl.google_user_agent_client_hint = !0, jl);

    function ll(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && /google_ad_client/.test(a[1]) ? a[1] : null
    }

    function ml(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && /google_ad_client/.test(a[1])) return a[1];
        return null
    }

    function nl(a) {
        switch (a) {
            case "true":
                return !0;
            case "false":
                return !1;
            case "null":
                return null;
            case "undefined":
                break;
            default:
                try {
                    var b = a.match(/^(?:'(.*)'|"(.*)")$/);
                    if (b) return b[1] || b[2] || "";
                    if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                        var c = parseFloat(a);
                        return c === c ? c : void 0
                    }
                } catch (d) {}
        }
    };

    function ol() {
        var a = K.document;
        a = void 0 === a ? window.document : a;
        var b = ah.s().j(Og.g, Og.defaultValue);
        id(b, a)
    };
    var pl = ["A3HucHUo1oW9s+9kIKz8mLkbcmdaj5lxt3eiIMp1Nh49dkkBlg1Fhg4Fd/r0vL69mRRA36YutI9P/lJUfL8csQoAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A0OysezhLoCRYomumeYlubLurZTCmsjTb087OvtCy95jNM65cfEsbajrJnhaGwiTxhz38ZZbm+UhUwQuXfVPTg0AAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
        "AxoOxdZQmIoA1WeAPDixRAeWDdgs7ZtVFfH2y19ziTgD1iaHE5ZGz2UdSjubkWvob9C5PrjUfkWi4ZSLgWk3Xg8AAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A7+rMYR5onPnACrz+niKSeFdH3xw1IyHo2AZSHmxrofRk9w4HcQPMYcpBUKu6OQ6zsdxf4m/vqa6tG6Na4OLpAQAAAB4eyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
    ];

    function ql() {
        var a = K.document;
        a = void 0 === a ? window.document : a;
        id(pl, a)
    };

    function rl(a, b, c) {
        var d = window;
        return function() {
            var e = ye(),
                f = 3;
            try {
                var g = b.apply(this, arguments)
            } catch (h) {
                f = 13;
                if (c) return c(a, h), g;
                throw h;
            } finally {
                d.google_measure_js_timing && e && (e = {
                    label: a.toString(),
                    value: e,
                    duration: (ye() || 0) - e,
                    type: f
                }, f = d.google_js_reporting_queue = d.google_js_reporting_queue || [], 2048 > f.length && f.push(e))
            }
            return g
        }
    }

    function sl(a, b) {
        return rl(a, b, function(c, d) {
            (new Ke).D(c, d)
        })
    };

    function tl(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function ul(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function vl() {
        var a = new p.Set;
        try {
            if ("undefined" === typeof googletag || !googletag.pubads) return a;
            for (var b = googletag.pubads(), c = w(b.getSlots()), d = c.next(); !d.done; d = c.next()) a.add(d.value.getSlotId().getDomId())
        } catch (e) {}
        return a
    }

    function wl(a) {
        a = a.id;
        return null != a && (vl().has(a) || r(a, "startsWith").call(a, "google_ads_iframe_") || r(a, "startsWith").call(a, "aswift"))
    }

    function xl(a, b, c) {
        if (!a.sources) return !1;
        var d = bh(Sg);
        switch (yl(a)) {
            case 2:
                var e = zl(a);
                if (e) return c.some(function(g) {
                    return Al(e, g, d)
                });
            case 1:
                var f = Bl(a);
                if (f) return b.some(function(g) {
                    return Al(f, g, d)
                })
        }
        return !1
    }

    function yl(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function Bl(a) {
        return Cl(a, function(b) {
            return b.currentRect
        })
    }

    function zl(a) {
        return Cl(a, function(b) {
            return b.previousRect
        })
    }

    function Cl(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function Dl() {
        R.call(this);
        this.i = this.h = this.M = this.L = this.C = 0;
        this.Ba = this.ya = Number.NEGATIVE_INFINITY;
        this.ua = this.wa = this.xa = this.za = this.Ea = this.m = this.Da = this.P = 0;
        this.va = !1;
        this.N = this.K = this.u = 0;
        var a = document.querySelector("[data-google-query-id]");
        this.Ca = a ? a.getAttribute("data-google-query-id") : null;
        this.O = null;
        this.Aa = !1;
        this.ca = function() {}
    }
    x(Dl, R);

    function El() {
        var a = new Dl;
        if (V(Pg) && !window.google_plmetrics && window.PerformanceObserver) {
            window.google_plmetrics = !0;
            for (var b = w(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]), c = b.next(); !c.done; c = b.next()) c = c.value, Fl(a).observe({
                type: c,
                buffered: !V(Ug)
            });
            Gl(a)
        }
    }

    function Fl(a) {
        a.O || (a.O = new PerformanceObserver(sl(640, function(b) {
            var c = Hl !== window.scrollX || Il !== window.scrollY ? [] : Jl,
                d = Kl();
            b = w(b.getEntries());
            for (var e = b.next(); !e.done; e = b.next()) switch (e = e.value, e.entryType) {
                case "layout-shift":
                    var f = a;
                    if (!e.hadRecentInput && (!V(Qg) || .01 < e.value)) {
                        f.C += Number(e.value);
                        Number(e.value) > f.L && (f.L = Number(e.value));
                        f.M += 1;
                        var g = xl(e, c, d);
                        g && (f.m += e.value, f.za++);
                        if (5E3 < e.startTime - f.ya || 1E3 < e.startTime - f.Ba) f.ya = e.startTime, f.h = 0, f.i = 0;
                        f.Ba = e.startTime;
                        f.h += e.value;
                        g && (f.i += e.value);
                        f.h > f.P && (f.P = f.h, f.Ea = f.i, f.Da = e.startTime + e.duration)
                    }
                    break;
                case "largest-contentful-paint":
                    a.xa = Math.floor(e.renderTime || e.loadTime);
                    a.wa = e.size;
                    break;
                case "first-input":
                    a.ua = Number((e.processingStart - e.startTime).toFixed(3));
                    a.va = !0;
                    break;
                case "longtask":
                    e = Math.max(0, e.duration - 50), a.u += e, a.K = Math.max(a.K, e), a.N += 1
            }
        })));
        return a.O
    }

    function Gl(a) {
        var b = sl(641, function() {
                var f = document;
                2 == ({
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[f.visibilityState || f.webkitVisibilityState || f.mozVisibilityState || ""] || 0) && Ll(a)
            }),
            c = sl(641, function() {
                return void Ll(a)
            });
        document.addEventListener("visibilitychange", b);
        document.addEventListener("unload", c);
        var d = bh(Tg),
            e;
        0 < d && (e = setTimeout(c, 1E3 * d));
        a.ca = function() {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("unload", c);
            Fl(a).disconnect();
            e && clearTimeout(e)
        }
    }
    Dl.prototype.g = function() {
        R.prototype.g.call(this);
        this.ca()
    };

    function Ll(a) {
        if (!a.Aa) {
            a.Aa = !0;
            Fl(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += ul("cls", a.C), b += ul("mls", a.L), b += tl("nls", a.M), window.LayoutShiftAttribution && (b += ul("cas", a.m), b += tl("nas", a.za)), b += ul("wls", a.P), b += ul("tls", a.Da), window.LayoutShiftAttribution && (b += ul("was", a.Ea)));
            window.LargestContentfulPaint && (b += tl("lcp", a.xa), b += tl("lcps", a.wa));
            window.PerformanceEventTiming && a.va && (b += tl("fid", a.ua));
            window.PerformanceLongTaskTiming &&
                (b += tl("cbt", a.u), b += tl("mbt", a.K), b += tl("nlt", a.N));
            for (var c = 0, d = w(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) wl(e.value) && c++;
            b += tl("nif", c);
            b += tl("ifi", sd(window));
            c = Xf.s().g();
            b += "&eid=" + encodeURIComponent(c.join());
            b += "&top=" + (y === y.top ? 1 : 0);
            if (a.Ca) c = "&qqid=" + encodeURIComponent(a.Ca);
            else {
                if ("number" !== typeof y.goog_pvsid) try {
                    Object.defineProperty(y, "goog_pvsid", {
                        value: Math.floor(Math.random() * Math.pow(2, 52)),
                        configurable: !1
                    })
                } catch (f) {}
                c = tl("pvsid", Number(y.goog_pvsid) ||
                    -1)
            }
            b += c;
            window.googletag && (b += "&gpt=1");
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.j || (a.j = !0, a.g())
        }
    }

    function Al(a, b, c) {
        if (0 === c) return !0;
        var d = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= d || 0 >= a ? !1 : 100 * d * a / ((b.right - b.left) * (b.bottom - b.top)) >= c
    }

    function Kl() {
        var a = [].concat(la(document.getElementsByTagName("iframe"))).filter(wl),
            b = [].concat(la(vl())).map(function(c) {
                return document.getElementById(c)
            }).filter(function(c) {
                return null !== c
            });
        Hl = window.scrollX;
        Il = window.scrollY;
        return Jl = [].concat(la(a), la(b)).map(function(c) {
            return c.getBoundingClientRect()
        })
    }
    var Hl = void 0,
        Il = void 0,
        Jl = [];

    function Ml(a) {
        a = void 0 === a ? window : a;
        return !a.PeriodicSyncManager
    }

    function Nl() {
        var a = void 0 === a ? window : a;
        if (!Ml(a) && V(Vg) || Ml(a) && V(Wg)) {
            a = a.navigator.userAgent;
            var b = /Chrome/.test(a);
            return /Android/.test(a) && b
        }
        return !1
    };
    var Ol = ["A+b/H0b8RPXNaJgaNFpO0YOFuGK6myDQXlwnJB3SwzvNMfcndat4DZYMrP4ClJIzYWo3/yP2S+8FTZ/lpqbPAAEAAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=", "A9ZgbRtm4pU3oZiuNzOsKcC8ppFSZdcjP2qYcdQrFKVzkmiWH1kdYY1Mi9x7G8+PS8HV9Ha9Cz0gaMdKsiVZIgMAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
            "AxL6oBxcpn5rQDPKSAs+d0oxNyJYq2/4esBUh3Yx5z8QfcLu+AU8iFCXYRcr/CEEfDnkxxLTsvXPJFQBxHfvkgMAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A9KPtG5kl3oLTk21xqynDPGQ5t18bSOpwt0w6kGa6dEWbuwjpffmdUpR3W+faZDubGT+KIk2do0BX2ca16x8qAcAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
        ],
        Pl = [{
            issuerOrigin: "https://adservice.google.com",
            issuancePath: "/tt/i",
            redemptionPath: "/tt/r",
            shouldRedeemToken: function() {
                var a = void 0 === a ? window : a;
                return V(Yg) ? !1 : !Ml(a) || V($g) ? !0 : !1
            },
            shouldRequestToken: function() {
                return !1
            }
        }, {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r",
            shouldRedeemToken: function() {
                return Nl()
            },
            shouldRequestToken: function() {
                return Nl()
            }
        }];

    function Ql(a) {
        R.call(this);
        var b = void 0 === b ? window.document : b;
        id(Ol, b);
        this.m = Pl;
        this.i = a;
        document.hasTrustToken && !V(Xg) && (this.h = Rl(this))
    }
    x(Ql, R);

    function Rl(a) {
        var b = a.m.map(function(c) {
            return {
                issuerOrigin: c.issuerOrigin,
                state: 1
            }
        });
        a.i(b);
        return b
    }

    function Sl(a, b, c) {
        var d = r(a.h, "findIndex").call(a.h, function(e) {
            return e.issuerOrigin === b
        });
        0 <= d && (a.h[d].state = c, a.i(a.h))
    }

    function Tl(a, b) {
        var c = b.issuerOrigin + b.redemptionPath,
            d = {
                keepalive: !0,
                redirect: "follow",
                method: "get",
                trustToken: {
                    type: "token-redemption",
                    issuer: b.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        Sl(a, b.issuerOrigin, 2);
        return window.fetch(c, d).then(function(e) {
            if (!e.ok) throw Error(e.status + ": Network response was not ok!");
            Sl(a, b.issuerOrigin, 6)
        }).catch(function(e) {
            e && "NoModificationAllowedError" === e.name ? Sl(a, b.issuerOrigin, 6) : Sl(a, b.issuerOrigin, 5)
        })
    }

    function Ul(a, b, c) {
        var d = b.issuerOrigin + b.issuancePath;
        Sl(a, b.issuerOrigin, 8);
        return window.fetch(d, {
            trustToken: {
                type: "token-request"
            }
        }).then(function(e) {
            if (!e.ok) throw Error(e.status + ": Network response was not ok!");
            Sl(a, b.issuerOrigin, 10);
            if (c) return Tl(a, b)
        }).catch(function(e) {
            if (e && "NoModificationAllowedError" === e.name) {
                if (Sl(a, b.issuerOrigin, 10), c) return Tl(a, b)
            } else Sl(a, b.issuerOrigin, 9)
        })
    }

    function Vl(a) {
        if (document.hasTrustToken && !V(Xg)) {
            var b = [];
            a.m.forEach(function(c) {
                var d = c.shouldRedeemToken(),
                    e = c.shouldRequestToken();
                if (d || e) {
                    var f = document.hasTrustToken(c.issuerOrigin).then(function(g) {
                        if (g) {
                            if (d) return Tl(a, c)
                        } else {
                            if (e) return Ul(a, c, d);
                            Sl(a, c.issuerOrigin, 3)
                        }
                    });
                    b.push(f)
                } else Sl(a, c.issuerOrigin, 7)
            });
            if (p.Promise && p.Promise.all) return p.Promise.all(b)
        }
    };

    function Wl(a) {
        C(this, a, Xl, null)
    }
    x(Wl, B);
    var Xl = [6];
    var Yl = ["platform", "platformVersion", "architecture", "model", "uaFullVersion"];

    function Zl() {
        var a = K;
        return a.navigator && a.navigator.userAgentData && "function" === typeof a.navigator.userAgentData.getHighEntropyValues ? a.navigator.userAgentData.getHighEntropyValues(Yl).then(function(b) {
            var c = new Wl;
            c = Mb(c, 1, b.platform);
            c = Mb(c, 2, b.platformVersion);
            c = Mb(c, 3, b.architecture);
            c = Mb(c, 4, b.model);
            return Mb(c, 5, b.uaFullVersion)
        }) : null
    };

    function $l(a) {
        a.google_sa_impl && !a.document.getElementById("google_shimpl") && (a.google_sa_queue = null, a.google_sl_win = null, a.google_sa_impl = null)
    }

    function am(a, b, c) {
        var d = K;
        c = void 0 === c ? "" : c;
        $l(d);
        d.google_sa_queue || (d.google_sa_queue = [], d.google_sl_win = d, d.google_process_slots = function() {
            return bm(d)
        }, a = cm(d, c, a, b), Lc(d.document, a).id = "google_shimpl")
    }
    var bm = Pe(215, function(a) {
        var b = a.google_sa_queue,
            c = b.shift();
        a.google_sa_impl || Qe("shimpl", {
            t: "no_fn"
        });
        "function" === typeof c && Oe(216, c);
        b.length && a.setTimeout(function() {
            return bm(a)
        }, 0)
    });

    function dm(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }

    function cm(a, b, c, d) {
        var e = Math.random() < bh(yg) ? ib(zc(c.pb).toString()) : null;
        c = Kb(d, 4) ? c.ob : c.qb;
        e = e ? e : ib(zc(c).toString());
        a: {
            if (Kb(d, 4)) {
                b || (b = em(a));
                if (b) {
                    d = {};
                    a = (d.client = b, d.plah = a.location.host, d.amaexp = 1, d);
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            a = {}
        }
        d = a;
        a = [];
        ah.s().g(Kg.g, Kg.defaultValue) && a.push(ah.s().g(Kg.g, Kg.defaultValue));
        b = 0 === a.length ? {} : {
            bust: a.join("~")
        };
        a = {};
        for (var f in d) a[f] = d[f];
        for (var g in b) a[g] || (a[g] = b[g]);
        f = hb.exec(gb(e).toString());
        g = f[3] || "";
        return ib(f[1] +
            jb("?", f[2] || "", a) + jb("#", g, void 0))
    }

    function em(a) {
        if (a.google_ad_client) return a.google_ad_client;
        if (zg) {
            var b = J(a).head_tag_slot_vars;
            if (b && b.google_ad_client) return b.google_ad_client
        } else if (b = a.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]')) return b.getAttribute("data-ad-client");
        if (b = a.document.querySelector(".adsbygoogle[data-ad-client]")) return b.getAttribute("data-ad-client");
        b: {
            b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = /appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa\/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube/i.test(a) ||
            /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !xd() ? ll : ml;
            for (var c = b.length - 1; 0 <= c; c--) {
                var d = b[c];
                if (!d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) {
                    b = d;
                    break b
                }
            }
            b = null
        }
        if (b) {
            a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
            for (c = {}; d = a.exec(b);) c[d[1]] = nl(d[2]);
            b = c.google_ad_client ? c.google_ad_client : ""
        } else b = "";
        return b ? b : ""
    }

    function fm(a) {
        if (!lk) a: {
            for (var b = [y.top], c = [], d = 0, e; e = b[d++];) {
                c.push(e);
                try {
                    if (e.frames)
                        for (var f = e.frames.length, g = 0; g < f && 1024 > b.length; ++g) b.push(e.frames[g])
                } catch (l) {}
            }
            for (b = 0; b < c.length; b++) try {
                var h = c[b].frames.google_esf;
                if (h) {
                    lk = h;
                    break a
                }
            } catch (l) {}
            lk = null
        }
        if (lk) return null;
        c = Ec(document, "IFRAME");
        c.id = "google_esf";
        c.name = "google_esf";
        a = a.wb;
        if (a instanceof ic) {
            var k;
            a = lc(a);
            a = (null === (k = ec()) || void 0 === k ? 0 : k.isScriptURL(a)) ? TrustedScriptURL.prototype.toString.apply(a) : a
        } else a = gb(a).toString();
        c.src = a;
        c.style.display = "none";
        return c
    }

    function gm(a, b, c, d) {
        hm(a, b, c, d, function(e, f) {
            var g = e.document;
            e = void 0;
            for (var h = 0; !e || g.getElementById(e + "_anchor");) e = "aswift_" + h++;
            h = Number(f.google_ad_width || 0);
            var k = Number(f.google_ad_height || 0),
                l = f.ds || "";
            l && (l += r(l, "endsWith").call(l, ";") ? "" : ";");
            if (V(Mg)) f = Ec(document, "INS"), f.id = e + "_anchor", he(f, h, k), f.style.display = "block", g = Ec(document, "INS"), g.id = e + "_expand", he(g, h, k), g.style.display = "inline-table", g.appendChild(f), c.appendChild(g);
            else {
                var m = "";
                m = void 0 === m ? "" : m;
                h = "border:none;height:" +
                    k + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + (h + "px;background-color:transparent;");
                h = ['<ins id="' + (e + '_expand"'), ' style="display:inline-table;' + h + (void 0 === l ? "" : l) + '"', m ? ' data-ad-slot="' + m + '">' : ">", '<ins id="' + (e + '_anchor" style="display:block;') + h + '">', "</ins></ins>"].join("");
                16 == f.google_reactive_ad_format || f.rss ? (f = g.createElement("div"), g = wb(h), zb(f, g), c.appendChild(f.firstChild)) : (f = wb(h), zb(c, f))
            }
            return e
        })
    }

    function hm(a, b, c, d, e) {
        var f = e(a, b);
        im(a, c, b);
        c = Ka;
        e = (new Date).getTime();
        b.google_lrv = E(d, 2, "");
        b.google_async_iframe_id = f;
        b.google_start_time = c;
        b.google_bpp = e > c ? e - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[f] = b;
        b.dninfo = b.google_loader_used;
        c = (d = !!a.document.getElementById(f + "_anchor")) ? gl : hl;
        b.dninfo += "_" + d;
        var g = {
            pubWin: a,
            iframeWin: null,
            vars: b
        };
        dm(a, function() {
            b.dninfo += "_" + !!a.document.getElementById(f + "_anchor");
            a.google_sa_impl(g)
        }, c)
    }

    function im(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" != d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !xc[c.google_ad_width + "x" + c.google_ad_height] && "aa" == c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
                c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = Sc(e.join(":")).toString();
            var h = void 0 === h ? !1 : h;
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = "";
                void 0 !== h && h || (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        for (var k = b.parentElement.childNodes, l = 0, m = 0; m < k.length; ++m) {
                            var q = k[m];
                            if (q.nodeName && q.nodeName.toString().toLowerCase() ===
                                g) {
                                if (b === q) {
                                    g = "." + l;
                                    break a
                                }++l
                            }
                        }
                    }
                    g = ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            h = e.join() + ":";
            b = [];
            if (a) try {
                var t = a.parent;
                for (e = 0; t && t !== a && 25 > e; ++e) {
                    var v = t.frames;
                    for (d = 0; d < v.length; ++d)
                        if (a === v[d]) {
                            b.push(d);
                            break
                        }
                    a = t;
                    t = a.parent
                }
            } catch (A) {}
            c.google_ad_dom_fingerprint = Sc(h + b.join()).toString()
        }
    };

    function jm(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            case "google_allow_expandable_ads":
                return /^true$/.test(b);
            default:
                return b
        }
    }

    function km(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "";
            var d = c.search(Jc),
                e;
            b: {
                for (e = 0; 0 <= (e = c.indexOf("client", e)) && e < d;) {
                    var f = c.charCodeAt(e - 1);
                    if (38 == f || 63 == f)
                        if (f = c.charCodeAt(e + 6), !f || 61 == f || 38 == f || 35 == f) break b;
                    e += 7
                }
                e = -1
            }
            if (0 > e) c = null;
            else {
                f = c.indexOf("&", e);
                if (0 > f || f > d) f = d;
                e += 7;
                c = decodeURIComponent(c.substr(e, f - e).replace(/\+/g, " "))
            }
            c && (b.google_ad_client = jm("google_ad_client", c))
        }
        a = a.attributes;
        c = a.length;
        for (d = 0; d < c; d++) f = a[d], /data-/.test(f.name) && (e = kb(f.name.replace("data-matched-content",
            "google_content_recommendation").replace("data", "google").replace(/-/g, "_")), b.hasOwnProperty(e) || (f = jm(e, f.value), null !== f && (b[e] = f)))
    }

    function lm(a) {
        if (a = kd(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function mm(a, b, c) {
        km(a, b);
        if (c.document && c.document.body && !Yk(c, b) && !b.google_reactive_ad_format) {
            var d = parseInt(a.style.width, 10),
                e = il(a, c);
            if (0 < e && d > e) {
                var f = parseInt(a.style.height, 10);
                d = !!xc[d + "x" + f];
                var g = e;
                if (d) {
                    var h = yc(e, f);
                    if (h) g = h, b.google_ad_format = h + "x" + f + "_0ads_al";
                    else throw new O("No slot size for availableWidth=" + e);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = g;
                d || (b.google_ad_format = null, b.google_override_format = !0);
                e = g;
                a.style.width = e + "px";
                f = Nk(e, "auto", c, a, b);
                g = e;
                f.size().ea(c, b,
                    a);
                pk(f, g, b);
                f = f.size();
                b.google_responsive_formats = null;
                f.minWidth() > e && !d && (b.google_ad_width = f.minWidth(), a.style.width = f.minWidth() + "px")
            }
        }
        d = a.offsetWidth || yi(a, c, "width", M) || b.google_ad_width || 0;
        e = Ha(Nk, d, "auto", c, a, b, !1, !0);
        f = yd(c) || c;
        g = b.google_ad_client;
        f = f.location && "#ftptohbh" === f.location.hash ? 2 : zd(f.location, "google_responsive_slot_debug") || zd(f.location, "google_responsive_slot_preview") || V(Cg) ? 1 : V(Ag) ? 2 : Ye(f, 1, g) ? 1 : 0;
        if (g = 0 !== f) b: if (!(488 > Q(c) || V(Bg)) || b.google_reactive_ad_format || Yk(c,
                    b) || li(a, b)) g = !1;
            else {
                for (g = a; g; g = g.parentElement) {
                    h = Mc(g, c);
                    if (!h) {
                        b.gfwrnwer = 18;
                        g = !1;
                        break b
                    }
                    if (!Sa(["static", "relative"], h.position)) {
                        b.gfwrnwer = 17;
                        g = !1;
                        break b
                    }
                }
                if (!V(Bg) && (g = qi(c, a, d, .3, b), !0 !== g)) {
                    b.gfwrnwer = g;
                    g = !1;
                    break b
                }
                g = c.top == c ? !0 : !1
            }
        g ? (b.google_resizing_allowed = !0, b.ovlp = !0, 2 === f ? (f = {}, pk(e(), d, f), b.google_resizing_width = f.google_ad_width, b.google_resizing_height = f.google_ad_height, f.ds && (b.ds = f.ds), b.iaaso = !1) : (b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1), d = !0) : d = !1;
        if (e = Yk(c, b)) $k(e,
            a, b, c, d);
        else {
            if (li(a, b)) {
                if (d = Mc(a, c)) a.style.width = d.width, a.style.height = d.height, ki(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = lm(c)
            } else ki(a.style, b);
            c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? $k(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = ri(a.offsetWidth ||
                parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };

    function nm(a) {
        C(this, a, null, null)
    }
    x(nm, B);

    function om(a) {
        C(this, a, null, null)
    }
    x(om, B);

    function pm(a) {
        C(this, a, null, null)
    }
    x(pm, B);

    function qm(a) {
        a = (a = (new Rj(a)).get("FCCDCF", "")) ? a : null;
        try {
            return a ? Pb(nm, a) : null
        } catch (b) {
            return null
        }
    }

    function rm(a) {
        return (a = qm(a)) ? H(a, om, 4) : null
    };

    function sm(a) {
        function b() {
            if (!a.frames.__uspapiLocator)
                if (c.body) {
                    var e = Ec(d.g, "IFRAME");
                    e.style.display = "none";
                    e.style.width = "0px";
                    e.style.height = "0px";
                    e.style.border = "none";
                    e.style.zIndex = "-1000";
                    e.style.left = "-1000px";
                    e.style.top = "-1000px";
                    e.name = "__uspapiLocator";
                    c.body.appendChild(e)
                } else a.setTimeout(b, 5)
        }
        var c = a.document,
            d = a ? new Fc(9 == a.nodeType ? a : a.ownerDocument || a.document) : La || (La = new Fc);
        b()
    };

    function tm(a) {
        this.g = a;
        this.h = a.document;
        this.i = (a = (a = qm(this.h)) ? H(a, pm, 5) || null : null) ? D(a, 2) : null;
        (a = rm(this.h)) && null != D(a, 1) && D(a, 1);
        (a = rm(this.h)) && null != D(a, 2) && D(a, 2)
    }

    function um() {
        var a = window;
        a.__uspapi || a.frames.__uspapiLocator || (a = new tm(a), vm(a))
    }

    function vm(a) {
        !a.i || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc", sm(a.g), Ia(function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.j.apply(a, la(c))
        }))
    }
    tm.prototype.j = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.i
        }, !0)
    };

    function wm(a, b) {
        b = void 0 === b ? 500 : b;
        R.call(this);
        this.i = a;
        this.Wa = b;
        this.h = null;
        this.u = {};
        this.m = null
    }
    x(wm, R);
    wm.prototype.g = function() {
        this.u = {};
        this.m && (Dc(this.i, "message", this.m), delete this.m);
        delete this.u;
        delete this.i;
        delete this.h;
        R.prototype.g.call(this)
    };

    function xm(a) {
        R.call(this);
        this.i = a;
        this.h = null;
        this.m = !1
    }
    x(xm, R);
    var ym = null,
        zm = [];

    function Am(a) {
        return wd.test(a.className) && "done" != a.getAttribute("data-adsbygoogle-status")
    }

    function Bm(a, b, c) {
        a.setAttribute("data-adsbygoogle-status", "done");
        Cm(a, b, c)
    }

    function Cm(a, b, c) {
        var d = window,
            e = vd();
        e.google_spfd || (e.google_spfd = mm);
        (e = b.google_reactive_ads_config) || mm(a, b, d);
        if (!Dm(a, b, d)) {
            e || (d.google_lpabyc = mi(a, d) + yi(a, d, "height", M));
            if (e) {
                e = e.page_level_pubvars || {};
                if (J(K).page_contains_reactive_tag && !J(K).allow_second_reactive_tag) {
                    if (e.pltais) {
                        Xb(!1);
                        return
                    }
                    throw new O("Only one 'enable_page_level_ads' allowed per page.");
                }
                J(K).page_contains_reactive_tag = !0;
                Xb(7 === e.google_pgb_reactive)
            }
            b.google_unique_id = rd(d);
            pd(kl, function(f, g) {
                b[g] = b[g] || d[g]
            });
            b.google_loader_used = "aa";
            b.google_reactive_tag_first = 1 === (J(K).first_tag_on_page || 0);
            Oe(164, function() {
                gm(d, b, a, c)
            })
        }
    }

    function Dm(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = "string" === typeof a.className && /(\W|^)adsbygoogle-noablate(\W|$)/.test(a.className),
            f = Tb(c);
        if (f && f.Fa && "on" != b.google_adtest && !e) {
            e = mi(a, c);
            var g = Xe(c).clientHeight;
            if (!f.na || f.na && ((0 == g ? null : e / g) || 0) >= f.na) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = Ba(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", d), "slot" == f.sb && (null !== Yc(a.getAttribute("width")) &&
                a.setAttribute("width", 0), null !== Yc(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = Mc(a, c)) && "none" == f.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
            !a ? !1 : (y.console && y.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function Em(a) {
        var b = document.getElementsByTagName("INS");
        for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
            var e = d;
            if (Am(e) && "reserved" != e.getAttribute("data-adsbygoogle-status") && (!a || d.id == a)) return d
        }
        return null
    }

    function Fm(a, b, c) {
        if (a && a.shift)
            for (var d = 20; 0 < a.length && 0 < d;) {
                try {
                    Gm(a.shift(), b, c)
                } catch (e) {
                    setTimeout(function() {
                        throw e;
                    })
                }--d
            }
    }

    function Hm() {
        var a = Ec(document, "INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        ad(a);
        return a
    }

    function Im(a, b) {
        var c = {};
        pd(Te, function(f, g) {
            !1 === a.enable_page_level_ads ? c[g] = !1 : a.hasOwnProperty(g) && (c[g] = a[g])
        });
        Aa(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        var d = Hm();
        wc.body.appendChild(d);
        var e = {};
        e = (e.google_reactive_ads_config = c, e.google_ad_client = a.google_ad_client, e);
        e.google_pause_ad_requests = !!J(K).pause_ad_requests;
        Bm(d, e, b)
    }

    function Jm(a, b) {
        function c() {
            return Im(a, b)
        }
        We(y).wasPlaTagProcessed = !0;
        var d = y.document;
        if (d.body || "complete" == d.readyState || "interactive" == d.readyState) c();
        else {
            var e = Va(Pe(191, c));
            Cc(d, "DOMContentLoaded", e);
            (new y.MutationObserver(function(f, g) {
                d.body && (e(), g.disconnect())
            })).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function Gm(a, b, c) {
        var d = {};
        Oe(165, function() {
            Km(a, d, b, c)
        }, function(e) {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function Lm(a) {
        delete a.google_checked_head;
        Rc(a, function(b, c) {
            cc[c] || (delete a[c], y.console.warn("AdSense head tag doesn't support " + c.replace("google", "data").replace(/_/g, "-") + " attribute."))
        })
    }

    function Mm(a) {
        var b = K,
            c = V(zg) && b.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || b.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = J(window);
            if (d.head_tag_slot_vars) throw new O("Only one AdSense head tag supported per page. The second tag is ignored.");
            var e = {};
            km(c, e);
            Lm(e);
            var f = Za(e);
            d.head_tag_slot_vars = f;
            c = {
                google_ad_client: e.google_ad_client,
                enable_page_level_ads: e
            };
            b.adsbygoogle || (b.adsbygoogle = []);
            b = b.adsbygoogle;
            b.loaded ? b.push(c) : b.splice(0, 0, c);
            e.google_adbreak_test && Nm(f, a);
            Se(function() {
                Nm(f, a)
            })
        }
    }

    function Om(a) {
        if ("object" === typeof a && null != a) {
            if ("string" === typeof a.type) return 2;
            if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks || "string" === typeof a.EXPERIMENTAL_userInteractionChecks) return 3
        }
        return 0
    }

    function Km(a, b, c, d) {
        if (null == a) throw new O("push() called with no parameters.");
        Pm(a, E(d, 7, ""), E(d, 2, ""));
        var e = Om(a);
        if (0 !== e) null == ym ? zm.push(a) : 3 === e ? Oe(787, function() {
            ym.handleAdConfig(a)
        }) : ym.handleAdBreak(a).catch(function(g) {
            P.D(730, g instanceof Error ? g : Error(String(g)), void 0, void 0)
        });
        else {
            Ka = (new Date).getTime();
            am(c, d, Qm(a));
            Rm();
            a: {
                if (void 0 != a.enable_page_level_ads) {
                    if ("string" === typeof a.google_ad_client) {
                        c = !0;
                        break a
                    }
                    throw new O("'google_ad_client' is missing from the tag config.");
                }
                c = !1
            }
            if (c) Sm(a, d, b);
            else if ((c = a.params) && pd(c, function(g, h) {
                    b[h] = g
                }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                c = Tm(a.element);
                km(c, b);
                e = J(y).head_tag_slot_vars || {};
                Rc(e, function(g, h) {
                    b.hasOwnProperty(h) || (b[h] = g)
                });
                if (c.hasAttribute("data-require-head") && !J(y).head_tag_slot_vars) throw new O("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new O("Ad client is missing from the slot.");
                b.google_apsail = bf(b.google_ad_client);
                var f = (e = 0 === (J(K).first_tag_on_page || 0) && Ej(b)) && Fj(e);
                e && !f && (Sm(e, d), J(K).skip_next_reactive_tag = !0);
                0 === (J(K).first_tag_on_page || 0) && (J(K).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!J(K).pause_ad_requests;
                Bm(c, b, d);
                e && f && Um(e)
            }
        }
    }
    var Vm = !1;

    function Pm(a, b, c) {
        var d = K;
        V(xg) && !Vm && (Vm = !0, (a = Qm(a)) || (a = em(d)), Qe("predictive_abg", {
            a_c: a,
            p_c: b,
            b_v: c
        }, 1))
    }

    function Qm(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }

    function Rm() {
        var a = K;
        if (V(qg)) {
            var b = Tb(a);
            if (!(b = b && b.Fa)) {
                try {
                    var c = a.localStorage
                } catch (d) {
                    c = null
                }
                c = c ? Vh(c) : null;
                b = !(c && Wh(c) && c)
            }
            b || Wb(a, 1)
        }
    }

    function Um(a) {
        jd(function() {
            We(y).wasPlaTagProcessed || y.adsbygoogle && y.adsbygoogle.push(a)
        })
    }

    function Sm(a, b, c) {
        J(K).skip_next_reactive_tag ? J(K).skip_next_reactive_tag = !1 : (0 === (J(K).first_tag_on_page || 0) && (J(K).first_tag_on_page = 1), c && a.tag_partner && (Vb(y, a.tag_partner), Vb(c, a.tag_partner)), c = Kb(b, 6), J(K).ama_ran_on_page || dk(new ck(a, V(vg), bh(tg), V(ug), V(sg), V(rg), c)), Jm(a, b))
    }

    function Tm(a) {
        if (a) {
            if (!Am(a) && (a.id ? a = Em(a.id) : a = null, !a)) throw new O("'element' has already been filled.");
            if (!("innerHTML" in a)) throw new O("'element' is not a good DOM element.");
        } else if (a = Em(), !a) throw new O("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }

    function Wm() {
        var a = K,
            b = new Sj(a),
            c = new wm(a),
            d = new xm(a);
        a = a.__cmp ? 1 : 0;
        b = Tj(b) ? 1 : 0;
        var e, f;
        (f = "function" === typeof(null === (e = c.i) || void 0 === e ? void 0 : e.__uspapi)) || (c.h ? c = c.h : (c.h = Zc(c.i, "__uspapiLocator"), c = c.h), f = null != c);
        d.m || (d.h || (d.i.googlefc ? d.h = d.i : d.h = Zc(d.i, "googlefcPresent")), d.m = !0);
        Qe("cmpMet", {
            tcfv1: a,
            tcfv2: b,
            usp: f ? 1 : 0,
            fc: d.h ? 1 : 0,
            ptt: 9
        }, bh(ng))
    }

    function Xm(a) {
        Ij().S[Kj(26)] = !!Number(a)
    }

    function Ym(a) {
        Number(a) ? J(K).pause_ad_requests = !0 : (J(K).pause_ad_requests = !1, a = function() {
            if (!J(K).pause_ad_requests) {
                var b = vd(),
                    c = vd();
                try {
                    if (wc.createEvent) {
                        var d = wc.createEvent("CustomEvent");
                        d.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !1, !1, "");
                        b.dispatchEvent(d)
                    } else if (qd(c.CustomEvent)) {
                        var e = new c.CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", {
                            bubbles: !1,
                            cancelable: !1,
                            detail: ""
                        });
                        b.dispatchEvent(e)
                    } else if (qd(c.Event)) {
                        var f = new Event("adsbygoogle-pub-unpause-ad-requests-event", {
                            bubbles: !1,
                            cancelable: !1
                        });
                        b.dispatchEvent(f)
                    }
                } catch (g) {}
            }
        }, y.setTimeout(a, 0), y.setTimeout(a, 1E3))
    }

    function Zm(a) {
        switch (a) {
            case 0:
            case 2:
                a = !0;
                break;
            case 1:
                a = !1;
                break;
            default:
                throw Error("Illegal value of cookieOptions: " + a);
        }
        K._gfp_a_ = a
    }

    function $m(a) {
        qd(a) && window.setTimeout(a, 0)
    }

    function Nm(a, b) {
        (aa = Bj(ib(zc(b.rb).toString())).then(function(c) {
            null == ym && (c.init(a), ym = c, an())
        }).catch(function(c) {
            P.D(723, c instanceof Error ? c : Error(String(c)), void 0, void 0)
        }), r(aa, "finally")).call(aa, function() {
            zm.length = 0
        })
    }

    function an() {
        for (var a = {}, b = w(zm), c = b.next(); !c.done; a = {
                ba: a.ba,
                Z: a.Z
            }, c = b.next()) a.Z = c.value, a.ba = Om(a.Z), Oe(723, function(d) {
            return function() {
                3 === d.ba ? ym.handleAdConfig(d.Z) : 2 === d.ba && ym.handleAdBreakBeforeReady(d.Z).catch(function(e) {
                    P.D(730, e instanceof Error ? e : Error(String(e)), void 0, void 0)
                })
            }
        }(a))
    };
    (function(a, b, c, d) {
        d = void 0 === d ? function() {} : d;
        P.Ua(Re);
        Oe(166, function() {
            var e = kk(b);
            ik(P, E(e, 2, ""));
            d();
            $h(16, [1, Nb(e)]);
            var f = ld(kd(K)) || K,
                g = c(a, e);
            hh(f, e, null === K.document.currentScript ? 1 : bc(g.vb));
            if ((!z("Trident") && !z("MSIE") || 0 <= lb(rb(), 11)) && (null == (K.Prototype || {}).Version || !V(wg))) {
                Le(V(Rg));
                var h = Pe(780, function(t) {
                    K.google_trust_token_operation_status = t
                });
                Pe(779, function() {
                    var t = new Ql(h);
                    0 < bh(Zg) ? K.google_trust_token_operation_promise = Vl(t) : Vl(t)
                })();
                f = Zl();
                null != f && f.then(function(t) {
                    K.google_user_agent_client_hint =
                        t.m()
                });
                ql();
                ol();
                um();
                try {
                    El()
                } catch (t) {}
                if (f = yd(y)) f = We(f), f.tagSpecificState[1] || (f.tagSpecificState[1] = new hk);
                Mm(g);
                f = window;
                var k = f.adsbygoogle;
                if (!k || !k.loaded) {
                    bh(ng) && Wm();
                    var l = {
                        push: function(t) {
                            Gm(t, g, e)
                        },
                        loaded: !0
                    };
                    try {
                        Object.defineProperty(l, "requestNonPersonalizedAds", {
                            set: Xm
                        }), Object.defineProperty(l, "pauseAdRequests", {
                            set: Ym
                        }), Object.defineProperty(l, "cookieOptions", {
                            set: Zm
                        }), Object.defineProperty(l, "onload", {
                            set: $m
                        })
                    } catch (t) {}
                    if (k)
                        for (var m = w(["requestNonPersonalizedAds", "pauseAdRequests",
                                "cookieOptions"
                            ]), q = m.next(); !q.done; q = m.next()) q = q.value, void 0 !== k[q] && (l[q] = k[q]);
                    "_gfp_a_" in window || (window._gfp_a_ = !0);
                    Fm(k, g, e);
                    f.adsbygoogle = l;
                    k && (l.onload = k.onload);
                    (f = fm(g)) && document.documentElement.appendChild(f)
                }
            }
        })
    })("", jk, function(a, b) {
        var c = 2012 < E(b, 1, 0) ? "_fy" + E(b, 1, 0) : "";
        E(b, 3, "");
        var d = E(b, 3, "").replace(/^\//, "");
        b = E(b, 2, "");
        var e = a ? mc(nc, a, c) : mc(oc, b, d, c),
            f = mc(pc, b, d);
        return {
            rb: e,
            qb: a ? mc(qc, a, c) : mc(rc, b, d, c),
            ob: a ? mc(sc, a, c) : mc(tc, b, d, c),
            pb: a ? mc(uc, a, c) : mc(vc, b, d, c),
            wb: f,
            vb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2019,\"r20210603\",\"\/r20190131\",null,[],null,null,\".google.co.in\",null,null,null,[[[null,62,null,[null,0.001]],[383,null,null,[1]],[null,1010,null,[null,1]],[null,1017,null,[null,-1]],[1021,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[null,1041,null,[null,50]],[1042,null,null,[1]],[1040,null,null,[1]],[1071,null,null,[1]],[1049,null,null,[1]],[205,null,null,[1]],[null,29,null,[null,2]],[null,30,null,[null,3]],[1069,null,null,[1]],[1036,null,null,[1]],[310,null,null,[1]],[1051,null,null,[1]],[325,null,null,[1]],[1063,null,null,[1]],[1070,null,null,[1]],[1007,null,null,[1]],[null,1008,null,[null,2]],[null,63,null,[null,30]],[1055,null,null,[1]],[1054,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[null,64,null,[null,300]],[230,null,null,[1]],[null,null,null,[null,null,null,[\"AwfG8hAcHnPa\/kJ1Co0EvG\/K0F9l1s2JZGiDLt2mhC3QI5Fh4qmsmSwrWObZFbRC9ieDaSLU6lHRxhGUF\/i9sgoAAACBeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"AwQ7dCmHkvR6FuOFxAuNnktYSQrGbL4dF+eBkrwNLALc69Wr\/\/PnO1yzns3pjUoCaYbKHtVcnng2hU+8OUm0PAYAAACHeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"AysVDPGQTLD\/Scn78x4mLwB1tMfje5jwUpAAzGRpWsr1NzoN7MTFhT3ClmImi2svDZA7V6nWGIV8YTPsSRTe0wYAAACHeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,1939],[1931,null,null,[1]],[1943,null,null,[1]],[1945,null,null,[1]],[1938,null,null,[1]],[null,1929,null,[null,50]],[null,null,null,[null,null,null,[\"facebook[.]com\",\"whatsapp[.]com\",\"youtube[.]com\",\"google[.]com\",\"\\\\\/ads?\\\\\/\"]],null,9]],[[10,[[10,[[44739547],[44739548,[[1049,null,null,[1]]]]]],[1,[[21066108],[21066109,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[21066110],[21066111,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[42530528],[42530529,[[368,null,null,[1]]]],[42530530,[[369,null,null,[1]],[368,null,null,[1]]]]]],[150,[[42530671],[42530672,[[1004,null,null,[1]]]]]],[1,[[42530887,[[290,null,null,[1]]]],[42530888,[[290,null,null,[1]]]],[42530889,[[290,null,null,[1]]]],[42530890,[[290,null,null,[1]]]],[42530891,[[290,null,null,[1]]]],[42530892,[[290,null,null,[1]]]],[42530893,[[290,null,null,[1]]]]],null,null,null,53],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[1,[[44743411],[44743412,[[null,1072,null,[null,0.75]]]],[44743413,[[null,1072,null,[null,0.75]]]]],null,null,null,53,null,100],[1,[[44743414],[44743415,[[null,1072,null,[null,0.75]]]],[44743416,[[null,1072,null,[null,0.75]]]]],null,null,null,53,null,120],[1,[[44743417],[44743418,[[null,1072,null,[null,0.75]]]],[44743419,[[null,1072,null,[null,0.75]]]]],null,null,null,53,null,140],[5,[[44739390],[44739391,[[1033,null,null,[1]]]],[44739392,[[1033,null,null,[1]]]]]],[5,[[44744331],[44744332,[[1033,null,null,[1]]]],[44744333,[[1033,null,null,[1]]]],[44744334,[[1033,null,null,[1]]]],[44744335,[[1033,null,null,[1]]]],[44744336,[[1033,null,null,[1]]]]]],[20,[[182982000,[[218,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982100,[[217,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[20,[[182982200,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982300,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[10,[[182984000,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984100,[[218,null,null,[1]]],[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,37,10,1],[10,[[182984200,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984300,null,[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,37,10,1],[10,[[21066428],[21066429]]],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[500,[[31060004,null,[2,[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[12,null,null,null,4,null,\"Chrome\/(89|9\\\\d|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]]],[31060005,[[1928,null,null,[1]]],[2,[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[12,null,null,null,4,null,\"Chrome\/(89|9\\\\d|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]]]]],[10,[[31060030],[31060031,[[1928,null,null,[1]]]]]],[1,[[31060138],[31060139,[[1043,null,null,[1]]]]]],[50,[[31060614],[31060615,[[383,null,null,[1]]]]]],[10,[[31060930],[31060932,[[1060,null,null,[1]]]]]],[50,[[31060956],[31060957,[[1059,null,null,[1]]]]]],[50,[[31060972]]],[1000,[[31060973,null,[6,null,null,null,6,null,\"31060917\"]],[31060974,[[null,null,14,[null,null,\"exp=31060974\"]]],[6,null,null,null,6,null,\"31060918\"]],[31060975,[[null,null,14,[null,null,\"exp=31060975\"]]],[6,null,null,null,6,null,\"31060919\"]]]],[1,[[44736076],[44736077,[[null,1046,null,[null,0.01]]]]]],[null,[[44742562],[44742563,[[null,1067,null,[]],[null,1066,null,[null,100]]]]]]]],[17,[[5,[[44744439,[[290,null,null,[1]],[190,null,null,[1]]]],[44744440,[[1064,null,null,[1]],[null,1056,null,[null,3000]],[null,1057,null,[null,650]],[290,null,null,[1]],[190,null,null,[1]]]],[44744441,[[1064,null,null,[1]],[null,1056,null,[null,3000]],[null,1057,null,[null,650]],[290,null,null,[1]],[190,null,null,[1]]]]],null,null,null,null,null,null,null,105],[10,[[31060047]],null,null,null,44,null,900],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101],[10,[[31060566]]]]],[11,[[1000,[[21067496]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]]],[1000,[[31060474,null,[2,[[1,[[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]],[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]]]]]]],[100,[[31060744],[31060745,[[360245598,null,null,[1]],[null,1927,null,[null,100]]]]],[4,null,9,null,null,null,null,[\"document.interestCohort\"]]],[1000,[[31060791,null,[4,null,8,null,null,null,null,[\"window.top.frames.google_ads_top_frame_ctrl\"]]],[31060792,[[null,1044,null,[null,200]]],[4,null,8,null,null,null,null,[\"window.top.frames.google_ads_top_frame\"]]]]]]],[12,[[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[10,[[21066612],[21066613,[[83,null,null,[1]],[84,null,null,[1]]]]]],[50,[[31060839],[31060840,[[3655606,null,null,[1]]]]]],[null,[[31061217],[31061218,[[374326588,null,null,[1]]]]]],[1,[[31061334],[31061335,[[373442741,null,null,[1]]]]]],[50,[[44740386]]],[10,[[44740387,[[1940,null,null,[1]],[1946,null,null,[1]]]],[44743203,[[1940,null,null,[1]],[1946,null,null,[1]]]],[44744007,[[1946,null,null,[1]]]]]],[10,[[44743204,[[1940,null,null,[]]]],[44744170]]],[50,[[44744015],[44744016,[[1946,null,null,[1]]]]]]]],[13,[[10,[[21065726,null,[4,null,6,null,null,null,null,[\"21065725\"]]],[21065727,[[240,null,null,[1]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21065728,[[241,null,null,[1]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[500,[[21066614],[21066615,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"21066613\"]]],[100,[[21067087],[21067088,[[78,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,[\"21066613\"]]]]],[10,[[21067664,null,[4,null,6,null,null,null,null,[\"21065725\"]]],[21067665,[[null,1905,null,[null,30]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21067666,[[null,1905,null,[null,60]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21067667,[[null,1905,null,[null,120]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[10,[[21069888,[[null,1929,null,[null,50]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069889,[[null,1929,null,[null,25]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069890,[[null,1929,null,[null,1]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069891,[[null,1929,null,[null,75]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069892,[[null,1929,null,[null,100]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]]]]]]]");