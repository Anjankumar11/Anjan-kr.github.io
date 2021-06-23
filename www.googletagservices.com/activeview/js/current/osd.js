(function(window, document) {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var k;

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
    var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ea = da(this);

    function fa(a, b) {
        if (b) a: {
            var c = ea;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ca(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }

    function ha(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }

    function t(a) {
        if (!(a instanceof Array)) {
            a = ha(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }
    var ia = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ja;
    if ("function" == typeof Object.setPrototypeOf) ja = Object.setPrototypeOf;
    else {
        var ka;
        a: {
            var la = {
                    a: !0
                },
                ma = {};
            try {
                ma.__proto__ = la;
                ka = ma.a;
                break a
            } catch (a) {}
            ka = !1
        }
        ja = ka ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var na = ja;

    function v(a, b) {
        a.prototype = ia(b.prototype);
        a.prototype.constructor = a;
        if (na) na(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.uc = b.prototype
    }
    var oa = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    fa("Object.assign", function(a) {
        return a || oa
    });
    fa("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    });
    var w = this || self;

    function pa() {}

    function x(a) {
        a.Ta = void 0;
        a.l = function() {
            return a.Ta ? a.Ta : a.Ta = new a
        }
    }

    function qa(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function ra(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function ta(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function ua(a, b) {
        a = a.split(".");
        var c = w;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function va(a) {
        return a
    };
    var wa;

    function xa(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function y(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    }

    function ya(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function za(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Aa(a, b, c) {
        var d = c;
        y(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Ba(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Ca(a, b) {
        var c = 0;
        y(a, function(d, e, f) {
            b.call(void 0, d, e, f) && ++c
        }, void 0);
        return c
    }

    function Da(a, b) {
        b = Ea(a, b, void 0);
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ea(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return f;
        return -1
    }

    function Fa(a, b) {
        return 0 <= xa(a, b)
    }

    function Ga(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Ha(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Ia(a, b) {
        a.sort(b || Ja)
    }

    function Ja(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function Ka(a) {
        if (!arguments.length) return [];
        for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++) arguments[d].length < c && (c = arguments[d].length);
        for (d = 0; d < c; d++) {
            for (var e = [], f = 0; f < arguments.length; f++) e.push(arguments[f][d]);
            b.push(e)
        }
        return b
    };

    function La(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };

    function Ma(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function Na(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Oa(a) {
        var b = Pa,
            c;
        for (c in b)
            if (!a.call(void 0, b[c], c, b)) return !1;
        return !0
    }

    function Qa(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }
    var Ra = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function z(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Ra.length; f++) c = Ra[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Sa;

    function Ta(a, b) {
        this.Gb = a === Ua && b || "";
        this.g = Va
    }
    Ta.prototype.Tb = !0;

    function Wa(a) {
        return a instanceof Ta && a.constructor === Ta && a.g === Va ? a.Gb : "type_error:Const"
    }
    var Va = {},
        Ua = {};

    function Ya(a) {
        if (void 0 === Sa) {
            var b = null;
            var c = w.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: va,
                        createScript: va,
                        createScriptURL: va
                    })
                } catch (d) {
                    w.console && w.console.error(d.message)
                }
                Sa = b
            } else Sa = b
        }(b = Sa) && b.createScriptURL(a)
    };

    function Za(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    var $a = /&/g,
        ab = /</g,
        bb = />/g,
        cb = /"/g,
        db = /'/g,
        eb = /\x00/g,
        fb = /[\x00&<>"']/;

    function A(a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    }

    function gb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var B;
    a: {
        var hb = w.navigator;
        if (hb) {
            var ib = hb.userAgent;
            if (ib) {
                B = ib;
                break a
            }
        }
        B = ""
    }

    function C(a) {
        return -1 != B.indexOf(a)
    };

    function jb() {
        return C("Safari") && !(kb() || C("Coast") || C("Opera") || C("Edge") || C("Edg/") || C("OPR") || C("Firefox") || C("FxiOS") || C("Silk") || C("Android"))
    }

    function kb() {
        return (C("Chrome") || C("CriOS")) && !C("Edge")
    };

    function lb(a) {
        fb.test(a) && (-1 != a.indexOf("&") && (a = a.replace($a, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(ab, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(bb, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(cb, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(db, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(eb, "&#0;")));
        return a
    }

    function mb() {
        return "opacity".replace(/\-([a-z])/g, function(a, b) {
            return b.toUpperCase()
        })
    }

    function nb(a) {
        return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
    }

    function ob(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var pb = "function" === typeof Uint8Array.prototype.slice,
        qb = 0,
        rb = 0;

    function sb() {
        this.g = new Uint8Array(64);
        this.h = 0
    }
    sb.prototype.push = function(a) {
        if (!(this.h + 1 < this.g.length)) {
            var b = this.g;
            this.g = new Uint8Array(Math.ceil(1 + 2 * this.g.length));
            this.g.set(b)
        }
        this.g[this.h++] = a
    };
    sb.prototype.length = function() {
        return this.h
    };
    sb.prototype.end = function() {
        var a = this.g,
            b = this.h;
        this.h = 0;
        return pb ? a.slice(0, b) : new Uint8Array(a.subarray(0, b))
    };

    function tb(a, b) {
        for (; 127 < b;) a.push(b & 127 | 128), b >>>= 7;
        a.push(b)
    }

    function ub(a, b) {
        a.push(b >>> 0 & 255);
        a.push(b >>> 8 & 255);
        a.push(b >>> 16 & 255);
        a.push(b >>> 24 & 255)
    };

    function vb(a) {
        vb[" "](a);
        return a
    }
    vb[" "] = pa;

    function wb(a, b) {
        try {
            return vb(a[b]), !0
        } catch (c) {}
        return !1
    }

    function zb(a, b) {
        var c = Ab;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var Bb = C("Opera"),
        E = C("Trident") || C("MSIE"),
        Cb = C("Edge"),
        Db = C("Gecko") && !(A(B, "WebKit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge"),
        Eb = A(B, "WebKit") && !C("Edge"),
        Fb = Eb && C("Mobile");

    function Gb() {
        var a = w.document;
        return a ? a.documentMode : void 0
    }
    var Hb;
    a: {
        var Ib = "",
            Jb = function() {
                var a = B;
                if (Db) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Cb) return /Edge\/([\d\.]+)/.exec(a);
                if (E) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Eb) return /WebKit\/(\S+)/.exec(a);
                if (Bb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Jb && (Ib = Jb ? Jb[1] : "");
        if (E) {
            var Kb = Gb();
            if (null != Kb && Kb > parseFloat(Ib)) {
                Hb = String(Kb);
                break a
            }
        }
        Hb = Ib
    }
    var Lb = Hb,
        Ab = {};

    function Mb(a) {
        return zb(a, function() {
            for (var b = 0, c = Za(String(Lb)).split("."), d = Za(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "",
                    h = d[f] || "";
                do {
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == g[0].length && 0 == h[0].length) break;
                    b = gb(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || gb(0 == g[2].length, 0 == h[2].length) || gb(g[2], h[2]);
                    g = g[3];
                    h = h[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }
    var Nb;
    if (w.document && E) {
        var Ob = Gb();
        Nb = Ob ? Ob : parseInt(Lb, 10) || void 0
    } else Nb = void 0;
    var Pb = Nb;
    var Qb = {},
        Rb = null;

    function Sb() {
        this.h = [];
        this.g = new sb
    }

    function Tb(a, b, c) {
        if (null != c) {
            tb(a.g, 8 * b);
            a = a.g;
            var d = c;
            c = 0 > d;
            d = Math.abs(d);
            b = d >>> 0;
            d = Math.floor((d - b) / 4294967296);
            d >>>= 0;
            c && (d = ~d >>> 0, b = (~b >>> 0) + 1, 4294967295 < b && (b = 0, d++, 4294967295 < d && (d = 0)));
            qb = b;
            rb = d;
            c = qb;
            for (b = rb; 0 < b || 127 < c;) a.push(c & 127 | 128), c = (c >>> 7 | b << 25) >>> 0, b >>>= 7;
            a.push(c)
        }
    };
    var Ub = "function" === typeof Uint8Array;

    function Vb() {}
    var Wb, Xb = Object.freeze([]);

    function Yb(a) {
        var b = a.j + a.i;
        a.g[b] || (a.h = a.g[b] = {})
    }

    function Zb(a, b) {
        if (b < a.j) {
            b += a.i;
            var c = a.g[b];
            return c !== Xb ? c : a.g[b] = []
        }
        if (a.h) return c = a.h[b], c === Xb ? a.h[b] = [] : c
    }

    function $b(a, b) {
        a = Zb(a, b);
        return null == a ? 0 : a
    }

    function ac(a, b, c) {
        0 !== c ? b < a.j ? a.g[b + a.i] = c : (Yb(a), a.h[b] = c) : b < a.j ? a.g[b + a.i] = null : (Yb(a), delete a.h[b]);
        return a
    }

    function bc(a) {
        if (a.m)
            for (var b in a.m)
                if (Object.prototype.hasOwnProperty.call(a.m, b)) {
                    var c = a.m[b];
                    if (Array.isArray(c))
                        for (var d = 0; d < c.length; d++) c[d] && bc(c[d]);
                    else c && bc(c)
                }
        return a.g
    }
    Vb.prototype.toString = function() {
        return bc(this).toString()
    };
    var cc;
    cc = ["av.key", "js", "20210607"].slice(-1)[0];
    var F = document,
        G = window;
    var dc = {};

    function ec() {}

    function fc(a, b) {
        if (b !== dc) throw Error("Bad secret");
        this.g = a
    }
    v(fc, ec);
    fc.prototype.toString = function() {
        return this.g
    };
    new fc("about:invalid#zTSz", dc);

    function gc(a, b, c) {
        c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var hc = La(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            w.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });

    function ic(a) {
        return a ? a.passive && hc() ? a : a.capture || !1 : !1
    }

    function jc(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, ic(d)), !0) : !1
    }

    function kc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, ic(void 0))
    };
    var lc = !E || 9 <= Number(Pb),
        mc = E || Bb || Eb;

    function H(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    H.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    H.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    H.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function I(a, b) {
        this.width = a;
        this.height = b
    }
    I.prototype.aspectRatio = function() {
        return this.width / this.height
    };
    I.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    I.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    I.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function nc(a) {
        return a ? new oc(J(a)) : wa || (wa = new oc)
    }

    function pc() {
        var a = document;
        a.getElementsByClassName ? a = a.getElementsByClassName("GoogleActiveViewContainer")[0] : (a = document, a = a.querySelectorAll && a.querySelector ? a.querySelector(".GoogleActiveViewContainer") : qc(a, "*", "GoogleActiveViewContainer", void 0)[0] || null);
        return a || null
    }

    function qc(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, g; g = a[f]; f++) b == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; g = a[f]; f++) b = g.className, "function" == typeof b.split && Fa(b.split(/\s+/), c) && (d[e++] = g);
            d.length = e;
            return d
        }
        return a
    }

    function rc(a, b) {
        Ma(b, function(c, d) {
            c && "object" == typeof c && c.Tb && (c = c.Gb);
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : sc.hasOwnProperty(d) ? a.setAttribute(sc[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var sc = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function tc(a) {
        var b = a.scrollingElement ? a.scrollingElement : Eb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return E && Mb("10") && a.pageYOffset != b.scrollTop ? new H(b.scrollLeft, b.scrollTop) : new H(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function uc(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function vc(a, b, c) {
        var d = arguments,
            e = document,
            f = String(d[0]),
            g = d[1];
        if (!lc && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', lb(g.name), '"');
            if (g.type) {
                f.push(' type="', lb(g.type), '"');
                var h = {};
                z(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = String(f);
        "application/xhtml+xml" === e.contentType && (f = f.toLowerCase());
        f = e.createElement(f);
        g && ("string" === typeof g ? f.className = g : Array.isArray(g) ? f.className = g.join(" ") : rc(f, g));
        2 < d.length && wc(e, f, d, 2);
        return f
    }

    function wc(a, b, c, d) {
        function e(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!qa(f) || ra(f) && 0 < f.nodeType) e(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (ra(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                y(g ? Ha(f) : f, e)
            }
        }
    }

    function J(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function xc(a) {
        try {
            return a.contentWindow || (a.contentDocument ? uc(a.contentDocument) : null)
        } catch (b) {}
        return null
    }

    function yc(a, b) {
        a && (a = a.parentNode);
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function oc(a) {
        this.g = a || w.document || document
    }
    oc.prototype.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    };
    oc.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    };
    oc.prototype.append = function(a, b) {
        wc(J(a), a, arguments, 1)
    };
    oc.prototype.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };

    function zc() {
        return C("iPad") || C("Android") && !C("Mobile") || C("Silk")
    };
    var Bc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function Cc(a) {
        try {
            return !!a && null != a.location.href && wb(a, "foo")
        } catch (b) {
            return !1
        }
    }

    function Dc(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function Ec() {
        var a = Fc;
        if (!a) return "";
        var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };

    function K(a, b, c, d) {
        this.top = a;
        this.h = b;
        this.g = c;
        this.left = d
    }

    function Gc(a) {
        return a.h - a.left
    }

    function Hc(a) {
        return a.g - a.top
    }

    function Ic(a) {
        return new K(a.top, a.h, a.g, a.left)
    }
    K.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.h = Math.ceil(this.h);
        this.g = Math.ceil(this.g);
        this.left = Math.ceil(this.left);
        return this
    };
    K.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.h = Math.floor(this.h);
        this.g = Math.floor(this.g);
        this.left = Math.floor(this.left);
        return this
    };
    K.prototype.round = function() {
        this.top = Math.round(this.top);
        this.h = Math.round(this.h);
        this.g = Math.round(this.g);
        this.left = Math.round(this.left);
        return this
    };

    function Jc(a, b, c) {
        b instanceof H ? (a.left += b.x, a.h += b.x, a.top += b.y, a.g += b.y) : (a.left += b, a.h += b, "number" === typeof c && (a.top += c, a.g += c));
        return a
    };

    function Kc(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = a.document.createElement("img");
        c && (d.referrerPolicy = "no-referrer");
        d.src = b;
        a.google_image_requests.push(d)
    }

    function Lc(a) {
        if (Mc()) Kc(window, a, !0);
        else {
            var b = w.document;
            if (b.body) {
                var c = b.getElementById("goog-srcless-iframe");
                c || (c = b.createElement("IFRAME"), c.style.display = "none", c.id = "goog-srcless-iframe", b.body.appendChild(c));
                b = c
            } else b = null;
            b && b.contentWindow && Kc(b.contentWindow, a, !0)
        }
    }
    var Mc = La(function() {
        return "referrerPolicy" in w.document.createElement("img")
    });
    var Nc = {};

    function Oc(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function Pc(a, b) {
        var c = new H(0, 0),
            d = uc(J(a));
        if (!wb(d, "parent")) return c;
        do {
            if (d == b) {
                var e = a,
                    f = J(e);
                var g = new H(0, 0);
                var h = f ? J(f) : document;
                h = !E || 9 <= Number(Pb) || "CSS1Compat" == nc(h).g.compatMode ? h.documentElement : h.body;
                e != h && (e = Oc(e), f = tc(nc(f).g), g.x = e.left + f.x, g.y = e.top + f.y)
            } else g = Oc(a), g = new H(g.left, g.top);
            c.x += g.x;
            c.y += g.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };

    function Qc(a) {
        return !(!a || !a.call) && "function" === typeof a
    }

    function Rc() {
        var a = F.documentElement,
            b = L();
        try {
            if (F.createEvent) {
                var c = F.createEvent("CustomEvent");
                c.initCustomEvent("osd_load", !0, !0, "");
                a.dispatchEvent(c)
            } else if (Qc(b.CustomEvent)) {
                var d = new b.CustomEvent("osd_load", {
                    bubbles: !0,
                    cancelable: !0,
                    detail: ""
                });
                a.dispatchEvent(d)
            } else if (Qc(b.Event)) {
                var e = new Event("osd_load", {
                    bubbles: !0,
                    cancelable: !0
                });
                a.dispatchEvent(e)
            }
        } catch (f) {}
    }

    function Sc() {
        var a = L();
        return "complete" === a.document.readyState || !!a.google_onload_fired
    }
    var Tc = !!window.google_async_iframe_id,
        Uc = Tc && window.parent || window;

    function L() {
        if (Tc && !Cc(Uc)) {
            var a = "." + F.domain;
            try {
                for (; 2 < a.split(".").length && !Cc(Uc);) F.domain = a = a.substr(a.indexOf(".") + 1), Uc = window.parent
            } catch (b) {}
            Cc(Uc) || (Uc = window)
        }
        return Uc
    };

    function Vc(a, b, c) {
        try {
            a && (b = b.top);
            var d = void 0;
            var e = b;
            c = void 0 === c ? !1 : c;
            a && null !== e && e != e.top && (e = e.top);
            try {
                if (void 0 === c ? 0 : c) var f = (new I(e.innerWidth, e.innerHeight)).round();
                else {
                    var g = (e || window).document,
                        h = "CSS1Compat" == g.compatMode ? g.documentElement : g.body;
                    f = (new I(h.clientWidth, h.clientHeight)).round()
                }
                d = f
            } catch (p) {
                d = new I(-12245933, -12245933)
            }
            a = d;
            var n = tc(nc(b.document).g);
            if (-12245933 == a.width) {
                var m = a.width;
                var l = new K(m, m, m, m)
            } else l = new K(n.y, n.x + a.width, n.y + a.height, n.x);
            return l
        } catch (p) {
            return new K(-12245933, -12245933, -12245933, -12245933)
        }
    };
    var Wc = {
            NONE: 0,
            $b: 1
        },
        Xc = {
            Zb: 0,
            oc: 1,
            nc: 2,
            pc: 3
        };

    function Yc() {
        this.B = 0;
        this.i = !1;
        this.h = -1;
        this.g = !1;
        this.j = 0
    }
    Yc.prototype.isVisible = function() {
        return this.g ? .3 <= this.B : .5 <= this.B
    };
    var M = {
            Yb: 0,
            ac: 1
        },
        Zc = {
            668123728: 0,
            668123729: 1
        },
        $c = {
            44731964: 0,
            44731965: 1
        },
        ad = {
            NONE: 0,
            hc: 1,
            bc: 2
        },
        bd = {
            480596784: 0,
            480596785: 1,
            21063355: 2
        };

    function cd() {
        this.g = null;
        this.j = !1;
        this.h = null
    }

    function N(a) {
        a.j = !0;
        return a
    }

    function dd(a, b) {
        a.h && y(b, function(c) {
            c = a.h[c];
            void 0 !== c && a.i(c)
        })
    }

    function ed(a) {
        cd.call(this);
        this.m = a
    }
    v(ed, cd);
    ed.prototype.i = function(a) {
        var b;
        if (!(b = null !== this.g)) {
            a: {
                b = this.m;
                for (c in b)
                    if (b[c] == a) {
                        var c = !0;
                        break a
                    }
                c = !1
            }
            b = !c
        }
        b || (this.g = a)
    };

    function fd() {
        cd.call(this)
    }
    v(fd, cd);
    fd.prototype.i = function(a) {
        null === this.g && "number" === typeof a && (this.g = a)
    };

    function gd() {
        this.g = {};
        this.h = {}
    }

    function O(a, b, c) {
        a.g[b] || (a.g[b] = new ed(c));
        return a.g[b]
    }

    function hd(a, b, c) {
        (a = a.g[b]) && a.i(c)
    }

    function id(a, b) {
        var c = a.h;
        if (null !== c && b in c) return a.h[b];
        if (a = a.g[b]) return a.g
    }

    function jd(a) {
        var b = {},
            c = Na(a.g, function(d) {
                return d.j
            });
        Ma(c, function(d, e) {
            d = void 0 !== a.h[e] ? String(a.h[e]) : d.j && null !== d.g ? String(d.g) : "";
            0 < d.length && (b[e] = d)
        }, a);
        return b
    }

    function kd(a, b) {
        b = b.split("&");
        for (var c = b.length - 1; 0 <= c; c--) {
            var d = b[c].split("="),
                e = d[0];
            d = 1 < d.length ? parseInt(d[1], 10) : 1;
            isNaN(d) || (e = a.g[e]) && e.i(d)
        }
        return b.join("&")
    }

    function ld(a, b) {
        y(Qa(a.g), function(c) {
            return dd(c, b)
        })
    }

    function md(a, b) {
        b && "string" === typeof b && (b = b.match(/[&;?]eid=([^&;]+)/)) && 2 === b.length && (b = decodeURIComponent(b[1]).split(","), b = za(b, function(c) {
            return Number(c)
        }), ld(a, b))
    };
    var nd = !E && !jb();

    function od(a, b) {
        if (/-[a-z]/.test(b)) return null;
        if (nd && a.dataset) {
            if (!(!C("Android") || kb() || C("Firefox") || C("FxiOS") || C("Opera") || C("Silk") || b in a.dataset)) return null;
            a = a.dataset[b];
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + nb(b))
    }

    function pd(a, b) {
        return /-[a-z]/.test(b) ? !1 : nd && a.dataset ? b in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + nb(b)) : !!a.getAttribute("data-" + nb(b))
    };

    function qd() {
        this.g = this.h = null;
        this.i = "no"
    };

    function rd(a, b) {
        this.h = (void 0 === a ? 0 : a) || 0;
        this.g = (void 0 === b ? "" : b) || ""
    }
    rd.prototype.i = function() {
        return !!this.h || !!this.g
    };
    rd.prototype.toString = function() {
        return this.h + (this.g ? "-" : "") + this.g
    };
    rd.prototype.matches = function(a) {
        return this.g || a.g ? this.g == a.g : this.h || a.h ? this.h == a.h : !1
    };

    function P() {}
    P.prototype.g = function() {
        return 0
    };
    P.prototype.i = function() {
        return 0
    };
    P.prototype.j = function() {
        return 0
    };
    P.prototype.h = function() {
        return 0
    };

    function sd() {
        if (!td()) throw Error();
    }
    v(sd, P);

    function td() {
        return !(!G || !G.performance)
    }
    sd.prototype.g = function() {
        return td() && G.performance.now ? G.performance.now() : P.prototype.g.call(this)
    };
    sd.prototype.i = function() {
        return td() && G.performance.memory ? G.performance.memory.totalJSHeapSize || 0 : P.prototype.i.call(this)
    };
    sd.prototype.j = function() {
        return td() && G.performance.memory ? G.performance.memory.usedJSHeapSize || 0 : P.prototype.j.call(this)
    };
    sd.prototype.h = function() {
        return td() && G.performance.memory ? G.performance.memory.jsHeapSizeLimit || 0 : P.prototype.h.call(this)
    };

    function ud() {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[F.visibilityState || F.webkitVisibilityState || F.mozVisibilityState || ""] || 0
    };

    function vd() {}
    vd.prototype.isVisible = function() {
        return 1 === ud()
    };
    var wd = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

    function xd() {
        var a = w,
            b = [],
            c = null;
        do {
            var d = a;
            if (Cc(d)) {
                var e = d.location.href;
                c = d.document && d.document.referrer || null
            } else e = c, c = null;
            b.push(new yd(e || "", d));
            try {
                a = d.parent
            } catch (f) {
                a = null
            }
        } while (a && d != a);
        d = 0;
        for (a = b.length - 1; d <= a; ++d) b[d].depth = a - d;
        d = w;
        if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
            for (a = 1; a < b.length; ++a) e = b[a], e.url || (e.url = d.location.ancestorOrigins[a - 1] || "", e.vb = !0);
        return b
    }

    function zd(a, b) {
        this.g = a;
        this.h = b
    }

    function yd(a, b, c) {
        this.url = a;
        this.C = b;
        this.vb = !!c;
        this.depth = null
    };

    function Ad() {
        this.i = "&";
        this.h = {};
        this.j = 0;
        this.g = []
    }

    function Bd(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function Cd(a, b, c, d, e) {
        var f = [];
        Dc(a, function(g, h) {
            (g = Dd(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Dd(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(Dd(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Cd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Ed(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = Fd(a) - c.length;
        if (0 > d) return "";
        a.g.sort(function(l, p) {
            return l - p
        });
        c = null;
        for (var e = "", f = 0; f < a.g.length; f++)
            for (var g = a.g[f], h = a.h[g], n = 0; n < h.length; n++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var m = Cd(h[n], a.i, ",$");
                if (m) {
                    m = e + m;
                    if (d >= m.length) {
                        d -= m.length;
                        b += m;
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

    function Fd(a) {
        var b = 1,
            c;
        for (c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    };

    function Gd() {
        this.h = new vd;
        this.g = td() ? new sd : new P
    }

    function Hd(a, b, c) {
        return G.setTimeout(b, c)
    }

    function Id(a) {
        Q();
        var b = L() || G;
        Kc(b, a, !1)
    }
    x(Gd);

    function Jd() {}

    function Q() {
        var a = Jd.l();
        if (!a.g) {
            if (!G) throw Error("Context has not been set and window is undefined.");
            a.g = Gd.l()
        }
        return a.g
    }
    x(Jd);

    function Kd(a) {
        this.m = null;
        Wb && (a || (a = Wb), Wb = null);
        var b = this.constructor.sc,
            c = this.constructor.rc;
        c = b || c;
        a || (a = c ? [b] : []);
        this.i = c ? 0 : -1;
        this.g = a;
        a: {
            if (a = this.g.length)
                if (--a, b = this.g[a], !(null === b || "object" != typeof b || Array.isArray(b) || Ub && b instanceof Uint8Array)) {
                    this.j = a - this.i;
                    this.h = b;
                    break a
                }
            this.j = Number.MAX_VALUE
        }
    }
    v(Kd, Vb);

    function Ld(a) {
        this.i = a;
        this.g = -1;
        this.h = this.j = 0
    }

    function Md(a, b) {
        return function(c) {
            for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e];
            if (-1 < a.g) return b.apply(null, t(d));
            try {
                return a.g = a.i.g.g(), b.apply(null, t(d))
            } finally {
                a.j += a.i.g.g() - a.g, a.g = -1, a.h += 1
            }
        }
    };

    function Nd(a, b) {
        this.h = a;
        this.i = b;
        this.g = new Ld(a)
    };
    var Od = {
        kc: 1,
        qc: 2,
        jc: 3
    };
    Ya(Wa(new Ta(Ua, "https://pagead2.googlesyndication.com/pagead/osd.js")));

    function R() {
        this.o = void 0;
        this.i = this.u = 0;
        this.s = -1;
        this.g = new gd;
        N(O(this.g, "mv", ad)).h = void 0 === bd ? null : bd;
        O(this.g, "omid", M);
        N(O(this.g, "epoh", M));
        N(O(this.g, "epph", M));
        N(O(this.g, "umt", M)).h = void 0 === Zc ? null : Zc;
        N(O(this.g, "phel", M));
        N(O(this.g, "phell", M));
        N(O(this.g, "oseid", Od));
        var a = this.g;
        a.g.sloi || (a.g.sloi = new fd);
        N(a.g.sloi);
        N(O(this.g, "ovms", Xc));
        N(O(this.g, "xdi", M));
        N(O(this.g, "amp", M));
        N(O(this.g, "prf", M));
        N(O(this.g, "gtx", M));
        N(O(this.g, "mvp_lv", M));
        N(O(this.g, "ssmol", M)).h = void 0 === $c ? null : $c;
        this.j = new Nd(Q(), this.g);
        this.h = null;
        this.m = !1
    }
    x(R);

    function Pd() {
        var a = "https:";
        G && G.location && "http:" === G.location.protocol && (a = "http:");
        this.h = a;
        this.g = .01;
        this.i = Math.random()
    }

    function Qd(a, b, c, d, e) {
        if ((d ? a.i : Math.random()) < (e || a.g)) try {
            if (c instanceof Ad) var f = c;
            else f = new Ad, Dc(c, function(h, n) {
                var m = f,
                    l = m.j++;
                h = Bd(n, h);
                m.g.push(l);
                m.h[l] = h
            });
            var g = Ed(f, a.h, "/pagead/gen_204?id=" + b + "&");
            g && Id(g)
        } catch (h) {}
    };
    var Rd = null;

    function Sd() {
        var a = w.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Td() {
        var a = void 0 === a ? w : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Ud(a, b) {
        var c = Td() || Sd();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var S = w.performance,
        Vd = !!(S && S.mark && S.measure && S.clearMarks),
        Wd = La(function() {
            var a;
            if (a = Vd) {
                var b;
                if (null === Rd) {
                    Rd = "";
                    try {
                        a = "";
                        try {
                            a = w.top.location.hash
                        } catch (c) {
                            a = w.location.hash
                        }
                        a && (Rd = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Rd;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Xd() {
        var a = L();
        this.h = [];
        this.i = a || w;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.g = Wd() || (null != b ? b : 1 > Math.random())
    }

    function Yd(a) {
        a && S && Wd() && (S.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), S.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    Xd.prototype.start = function(a, b) {
        if (!this.g) return null;
        a = new Ud(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        S && Wd() && S.mark(b);
        return a
    };
    Xd.prototype.end = function(a) {
        if (this.g && "number" === typeof a.value) {
            a.duration = (Td() || Sd()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            S && Wd() && S.mark(b);
            !this.g || 2048 < this.h.length || this.h.push(a)
        }
    };

    function Zd() {
        var a = $d;
        this.h = ae;
        this.mb = "jserror";
        this.Xa = !0;
        this.Ma = null;
        this.i = this.Ua;
        this.g = void 0 === a ? null : a
    }

    function be(a, b, c) {
        return Md(R.l().j.g, function() {
            try {
                if (a.g && a.g.g) {
                    var d = a.g.start(b.toString(), 3);
                    var e = c();
                    a.g.end(d)
                } else e = c()
            } catch (g) {
                var f = a.Xa;
                try {
                    Yd(d), f = a.i(b, new ce(de(g)), void 0, void 0)
                } catch (h) {
                    a.Ua(217, h)
                }
                if (!f) throw g;
            }
            return e
        })()
    }

    function ee(a, b) {
        var c = fe;
        return Md(R.l().j.g, function(d) {
            for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
            return be(c, a, function() {
                return b.apply(void 0, e)
            })
        })
    }
    Zd.prototype.Ua = function(a, b, c, d, e) {
        e = e || this.mb;
        try {
            var f = new Ad;
            f.g.push(1);
            f.h[1] = Bd("context", a);
            b.error && b.meta && b.id || (b = new ce(de(b)));
            if (b.msg) {
                var g = b.msg.substring(0, 512);
                f.g.push(2);
                f.h[2] = Bd("msg", g)
            }
            var h = b.meta || {};
            if (this.Ma) try {
                this.Ma(h)
            } catch (Ac) {}
            if (d) try {
                d(h)
            } catch (Ac) {}
            b = [h];
            f.g.push(3);
            f.h[3] = b;
            var n = xd(),
                m = new yd(w.location.href, w, !1);
            b = null;
            var l = n.length - 1;
            for (d = l; 0 <= d; --d) {
                var p = n[d];
                !b && wd.test(p.url) && (b = p);
                if (p.url && !p.vb) {
                    m = p;
                    break
                }
            }
            p = null;
            var q = n.length && n[l].url;
            0 != m.depth && q && (p = n[l]);
            var u = new zd(m, p);
            if (u.h) {
                var r = u.h.url || "";
                f.g.push(4);
                f.h[4] = Bd("top", r)
            }
            var D = {
                url: u.g.url || ""
            };
            if (u.g.url) {
                var sa = u.g.url.match(Bc),
                    Xa = sa[1],
                    ba = sa[3],
                    xb = sa[4];
                n = "";
                Xa && (n += Xa + ":");
                ba && (n += "//", n += ba, xb && (n += ":" + xb));
                var yb = n
            } else yb = "";
            D = [D, {
                url: yb
            }];
            f.g.push(5);
            f.h[5] = D;
            Qd(this.h, e, f, !1, c)
        } catch (Ac) {
            try {
                Qd(this.h, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: de(Ac),
                    url: u && u.g.url
                }, !1, c)
            } catch (li) {}
        }
        return this.Xa
    };

    function de(a) {
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
    }

    function ce(a) {
        gc.call(this, Error(a), {
            message: a
        })
    }
    v(ce, gc);
    var ae, fe, $d = new Xd;

    function ge() {
        var a = L();
        a && "undefined" != typeof a.google_measure_js_timing && !a.google_measure_js_timing && (a = $d, a.g = !1, a.h != a.i.google_js_reporting_queue && (Wd() && y(a.h, Yd), a.h.length = 0))
    }(function() {
        ae = new Pd;
        fe = new Zd;
        var a = L();
        a && a.document && ("complete" == a.document.readyState ? ge() : $d.g && jc(a, "load", function() {
            ge()
        }))
    })();

    function he(a) {
        fe.Ma = function(b) {
            y(a, function(c) {
                c(b)
            })
        }
    }

    function ie(a, b) {
        return be(fe, a, b)
    }

    function je(a, b) {
        return ee(a, b)
    }

    function ke(a, b) {
        Qd(ae, a, b, "jserror" != a, void 0)
    }

    function le(a, b, c, d) {
        fe.Ua(a, b, c, d)
    };
    var me = Date.now(),
        ne = -1,
        oe = -1,
        pe = !1;

    function T() {
        return Date.now() - me
    }

    function qe() {
        var a = R.l().o,
            b = 0 <= oe ? T() - oe : -1,
            c = pe ? T() - ne : -1;
        if (947190542 == a) return 100;
        if (79463069 == a) return 200;
        a = [2E3, 4E3];
        var d = [250, 500, 1E3];
        le(637, Error(), .001);
        var e = b; - 1 != c && c < b && (e = c);
        for (b = 0; b < a.length; ++b)
            if (e < a[b]) {
                var f = d[b];
                break
            }
        void 0 === f && (f = d[a.length]);
        return f
    };

    function re(a, b, c) {
        var d = new K(0, 0, 0, 0);
        this.time = a;
        this.volume = null;
        this.i = b;
        this.g = d;
        this.h = c
    };

    function se(a, b, c, d, e, f, g) {
        this.m = a;
        this.j = b;
        this.i = c;
        this.h = d;
        this.o = e;
        this.g = f;
        this.s = g
    };

    function te(a) {
        for (var b = 0, c = a, d = 0; a && a != a.parent;) a = a.parent, d++, Cc(a) && (c = a, b = d);
        return {
            C: c,
            level: b
        }
    };
    var Pa = {
        Xb: "addEventListener",
        cc: "getMaxSize",
        dc: "getScreenSize",
        ec: "getState",
        fc: "getVersion",
        lc: "removeEventListener",
        ic: "isViewable"
    };

    function ue(a) {
        var b = a !== a.top,
            c = a.top === te(a).C,
            d = -1,
            e = 0;
        if (b && c && a.top.mraid) {
            d = 3;
            var f = a.top.mraid
        } else d = (f = a.mraid) ? b ? c ? 2 : 1 : 0 : -1;
        f && (f.IS_GMA_SDK || (e = 2), Oa(function(g) {
            return "function" === typeof f[g]
        }) || (e = 1));
        return {
            J: f,
            za: e,
            Wb: d
        }
    };

    function ve(a) {
        return (a = a.document) && "function" === typeof a.elementFromPoint
    };
    if (F && F.URL) {
        var we, Fc = F.URL;
        we = !!Fc && 0 < Ec().length;
        fe.Xa = !we
    }

    function xe(a, b, c, d) {
        var e = void 0 === e ? !1 : e;
        c = ee(d, c);
        jc(a, b, c, {
            capture: e
        });
        return c
    };

    function ye(a) {
        var b = [];
        Ma(a, function(c, d) {
            d = encodeURIComponent(d);
            "string" === typeof c && (c = encodeURIComponent(c));
            b.push(d + "=" + c)
        });
        b.push("24=" + Date.now());
        return b.join("\n")
    };
    var ze = 0;

    function Ae(a) {
        var b = Math.pow(10, 2);
        return Math.floor(a * b) / b
    }

    function Be(a, b) {
        try {
            ze++, b.postMessage(a, "*")
        } catch (c) {}
    }

    function Ce(a, b) {
        b && (a(b), b.frames && y(b.frames, function(c) {
            Ce(a, c)
        }))
    }

    function De(a) {
        return new K(a.top, a.right, a.bottom, a.left)
    }

    function Ee() {
        var a = Q().h;
        return 0 === ud() ? -1 : a.isVisible() ? 0 : 1
    }

    function Fe(a) {
        return [a.top, a.left, a.g, a.h].join("-")
    }

    function Ge(a, b, c) {
        if (b && a)
            if (c && 0 < c.length)
                for (c = ya(c, function(e) {
                        var f = e.parent && e.parent !== e;
                        return e === G.top || f
                    }), a = ha(c), c = a.next(); !c.done; c = a.next()) Be(b, c.value);
            else {
                c = [];
                var d = xc(a);
                d && c.push(d);
                if (0 === c.length) try {
                    c = za(qc(document, "IFRAME".toString().toLowerCase(), void 0, a), function(e) {
                        return xc(e)
                    })
                } catch (e) {}
                a = ha(c);
                for (c = a.next(); !c.done; c = a.next()) {
                    c = c.value;
                    try {
                        b && Ce(ta(Be, b), c)
                    } catch (e) {}
                }
            }
    }

    function He(a, b, c) {
        try {
            var d = ye(b);
            Ge(a, d, c)
        } catch (e) {}
    };

    function Ie() {
        var a = B;
        return a ? Ba("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX".split(";"), function(b) {
            return A(a, b)
        }) || A(a, "OMI/") && !A(a, "XiaoMi/") ? !0 : A(a, "Presto") && A(a, "Linux") && !A(a, "X11") && !A(a, "Android") && !A(a, "Mobi") : !1
    }

    function Je() {
        var a = B;
        return A(a, "AppleTV") || A(a, "Apple TV") || A(a, "CFNetwork") || A(a, "tvOS")
    }

    function Ke() {
        var a = B;
        return A(a, "sdk_google_atv_x86") || A(a, "Android TV")
    };

    function U() {
        this.i = !Cc(G.top);
        this.F = !this.i;
        this.o = zc() || !zc() && (C("iPod") || C("iPhone") || C("Android") || C("IEMobile"));
        var a = xd();
        0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url && (a = a[a.length - 1].url.match(Bc)[3] || null) && decodeURI(a);
        this.g = new K(0, 0, 0, 0);
        this.s = new I(0, 0);
        this.m = new I(0, 0);
        this.h = new K(0, 0, 0, 0);
        this.u = new H(0, 0);
        this.D = this.A = !1;
        this.j = !(!G || !ue(G).J);
        Le(this)
    }

    function Me(a, b) {
        b && b.screen && (a.s = new I(b.screen.width, b.screen.height))
    }

    function Ne(a, b) {
        var c = a.g ? new I(Gc(a.g), Hc(a.g)) : new I(0, 0);
        b = void 0 === b ? G : b;
        null !== b && b != b.top && (b = b.top);
        var d = 0,
            e = 0;
        try {
            var f = b.document,
                g = f.body,
                h = f.documentElement;
            if ("CSS1Compat" == f.compatMode && h.scrollHeight) d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight, e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
            else {
                var n = h.scrollHeight,
                    m = h.scrollWidth,
                    l = h.offsetHeight,
                    p = h.offsetWidth;
                h.clientHeight != l && (n = g.scrollHeight, m = g.scrollWidth, l = g.offsetHeight, p = g.offsetWidth);
                n > c.height ? n > l ? (d = n, e = m) : (d = l, e = p) : n < l ? (d = n, e = m) : (d = l, e = p)
            }
            var q = new I(e, d)
        } catch (u) {
            q = new I(-12245933, -12245933)
        }
        a.m = q
    }

    function Le(a) {
        G && G.document && (a.h = Vc(!1, G, a.o), a.g = Vc(!0, G, a.o), Ne(a, G), Me(a, G))
    }

    function Oe() {
        if (U.l().D) return !0;
        var a = Q().h.isVisible(),
            b = 0 === ud();
        return a || b
    }
    x(U);

    function Pe(a) {
        this.i = a;
        this.h = 0;
        this.g = null
    }
    Pe.prototype.cancel = function() {
        Q();
        G.clearTimeout(this.g);
        this.g = null
    };

    function Qe(a) {
        Q();
        a.g = Hd(0, Md(R.l().j.g, je(143, function() {
            a.h++;
            a.i.Fb()
        })), qe())
    };

    function V(a, b, c) {
        this.C = a;
        this.U = void 0 === c ? "na" : c;
        this.j = [];
        this.A = !1;
        this.i = new re(-1, !0, this);
        this.g = this;
        this.o = b;
        this.D = this.u = !1;
        this.M = "uk";
        this.K = !1;
        this.s = !0
    }
    k = V.prototype;
    k.Y = function() {
        return !1
    };
    k.Fa = function() {
        return this.A = !0
    };
    k.aa = function() {
        return this.g.M
    };
    k.ha = function() {
        return this.g.D
    };

    function Re(a, b, c) {
        if (!a.D || (void 0 === c ? 0 : c)) a.D = !0, a.M = b, a.o = 0, a.g != a || Se(a)
    }
    k.I = function() {
        return this.g.U
    };
    k.R = function() {
        return this.g.pb()
    };
    k.pb = function() {
        return {}
    };
    k.S = function() {
        return this.g.o
    };

    function Te(a, b) {
        Fa(a.j, b) || (a.j.push(b), b.ga(a.g), b.W(a.i), b.V() && (a.u = !0))
    }
    k.Ga = function() {
        var a = U.l();
        a.g = Vc(!0, this.C, a.o)
    };
    k.Ha = function() {
        Me(U.l(), this.C)
    };
    k.ab = function() {
        Ne(U.l(), this.C)
    };
    k.bb = function() {
        var a = U.l();
        a.h = Vc(!1, this.C, a.o)
    };
    k.Ra = function() {
        return this.i.g
    };

    function Ue(a) {
        a = a.g;
        a.Ha();
        a.Ga();
        a.bb();
        a.ab();
        a.i.g = a.Ra()
    }
    k.Fb = function() {};

    function Ve(a) {
        a.u = a.j.length ? Ba(a.j, function(b) {
            return b.V()
        }) : !1
    }

    function We(a) {
        var b = Ha(a.j);
        y(b, function(c) {
            c.W(a.i)
        })
    }

    function Se(a) {
        var b = Ha(a.j);
        y(b, function(c) {
            c.ga(a.g)
        });
        a.g != a || We(a)
    }
    k.ga = function(a) {
        var b = this.g;
        this.g = a.S() >= this.o ? a : this;
        b !== this.g ? (this.s = this.g.s, Se(this)) : this.s !== this.g.s && (this.s = this.g.s, Se(this))
    };
    k.W = function(a) {
        if (a.h === this.g) {
            var b = this.i,
                c = this.u;
            if (c = a && (void 0 === c || !c || b.volume == a.volume) && b.i == a.i) b = b.g, c = a.g, c = b == c ? !0 : b && c ? b.top == c.top && b.h == c.h && b.g == c.g && b.left == c.left : !1;
            this.i = a;
            !c && We(this)
        }
    };
    k.V = function() {
        return this.u
    };
    k.G = function() {
        this.K = !0
    };
    k.ia = function() {
        return this.K
    };

    function Xe(a, b, c, d) {
        this.h = a;
        this.g = new K(0, 0, 0, 0);
        this.s = new K(0, 0, 0, 0);
        this.i = b;
        this.H = c;
        this.K = d;
        this.F = !1;
        this.timestamp = -1;
        this.u = new se(b.i, this.g, new K(0, 0, 0, 0), 0, 0, T(), 0)
    }
    k = Xe.prototype;
    k.na = function() {
        return !0
    };
    k.P = function() {};
    k.G = function() {
        if (!this.ia()) {
            var a = this.i,
                b = a.j,
                c = xa(b, this);
            0 <= c && Array.prototype.splice.call(b, c, 1);
            a.u && this.V() && Ve(a);
            this.P();
            this.F = !0
        }
    };
    k.ia = function() {
        return this.F
    };
    k.R = function() {
        return this.i.R()
    };
    k.S = function() {
        return this.i.S()
    };
    k.aa = function() {
        return this.i.aa()
    };
    k.ha = function() {
        return this.i.ha()
    };
    k.ga = function() {};
    k.W = function() {
        this.Z()
    };
    k.V = function() {
        return this.K
    };

    function Ye(a) {
        this.m = !1;
        this.g = a;
        this.j = pa
    }
    k = Ye.prototype;
    k.S = function() {
        return this.g.S()
    };
    k.aa = function() {
        return this.g.aa()
    };
    k.ha = function() {
        return this.g.ha()
    };
    k.create = function(a, b, c) {
        var d = null;
        this.g && (d = this.Pa(a, b, c), Te(this.g, d));
        return d
    };
    k.cb = function() {
        return this.oa()
    };
    k.oa = function() {
        return !1
    };
    k.tb = function(a) {
        return this.g.Fa() ? (Te(this.g, this), this.j = a, !0) : !1
    };
    k.ga = function(a) {
        0 == a.S() && this.j(a.aa(), this)
    };
    k.W = function() {};
    k.V = function() {
        return !1
    };
    k.G = function() {
        this.m = !0
    };
    k.ia = function() {
        return this.m
    };
    k.R = function() {
        return {}
    };

    function Ze(a, b, c) {
        this.i = void 0 === c ? 0 : c;
        this.h = a;
        this.g = null == b ? "" : b
    }

    function $e(a) {
        switch (Math.trunc(a.i)) {
            case -16:
                return -16;
            case -8:
                return -8;
            case 0:
                return 0;
            case 8:
                return 8;
            case 16:
                return 16;
            default:
                return 16
        }
    }

    function af(a, b) {
        return a.i < b.i ? !0 : a.i > b.i ? !1 : a.h < b.h ? !0 : a.h > b.h ? !1 : typeof a.g < typeof b.g ? !0 : typeof a.g > typeof b.g ? !1 : a.g < b.g
    };

    function bf() {
        this.i = 0;
        this.g = [];
        this.h = !1
    }
    bf.prototype.add = function(a, b, c) {
        ++this.i;
        a = new Ze(a, b, c);
        this.g.push(new Ze(a.h, a.g, a.i + this.i / 4096));
        this.h = !0;
        return this
    };

    function cf(a, b) {
        y(b.g, function(c) {
            a.add(c.h, c.g, $e(c))
        })
    }

    function df(a, b) {
        var c = void 0 === c ? 0 : c;
        var d = void 0 === d ? !0 : d;
        Dc(b, function(e, f) {
            d && void 0 === e || a.add(f, e, c)
        })
    }

    function ef(a) {
        var b = ff;
        a.h && (Ia(a.g, function(c, d) {
            return af(d, c) ? 1 : af(c, d) ? -1 : 0
        }), a.h = !1);
        return Aa(a.g, function(c, d) {
            d = b(d);
            return "" + c + ("" != c && "" != d ? "&" : "") + d
        }, "")
    };

    function ff(a) {
        var b = a.h;
        a = a.g;
        return "" === a ? b : "boolean" === typeof a ? a ? b : "" : Array.isArray(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (Fa(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    };

    function gf(a) {
        var b = void 0 === b ? !0 : b;
        this.g = new bf;
        void 0 !== a && cf(this.g, a);
        b && this.g.add("v", cc, -16)
    }
    gf.prototype.toString = function() {
        var a = "//pagead2.googlesyndication.com//pagead/gen_204",
            b = ef(this.g);
        0 < b.length && (a += "?" + b);
        return a
    };

    function hf(a) {
        var b = [],
            c = [];
        Ma(a, function(d, e) {
            if (!(e in Object.prototype) && "undefined" != typeof d) switch (Array.isArray(d) && (d = d.join(",")), d = [e, "=", d].join(""), e) {
                case "adk":
                case "r":
                case "tt":
                case "error":
                case "mtos":
                case "tos":
                case "p":
                case "bs":
                    b.unshift(d);
                    break;
                case "req":
                case "url":
                case "referrer":
                case "iframe_loc":
                    c.push(d);
                    break;
                default:
                    b.push(d)
            }
        });
        return b.concat(c)
    }

    function jf() {
        if (cc && "unreleased" !== cc) return cc
    };

    function kf() {
        this.g = 0
    }
    x(kf);

    function lf(a) {
        this.A = a;
        this.u = !1
    }
    lf.prototype.o = function(a, b) {
        this.g = a;
        this.h = b
    };

    function mf() {
        lf.call(this, "capability")
    }
    v(mf, lf);
    mf.prototype.s = function() {
        return !0
    };
    mf.prototype.m = function() {
        var a = {};
        return a.b_name = this.g.X, a.v_name = this.h.X, a
    };

    function nf() {
        lf.call(this, "diff")
    }
    v(nf, lf);
    nf.prototype.s = function() {
        return !(.02 >= Math.abs(this.h.B - this.g.B))
    };
    nf.prototype.m = function() {
        var a = {};
        return a.b_name = this.g.X, a.v_name = this.h.X, a.b_vp_off = JSON.stringify(this.g.L), a.v_vp_off = JSON.stringify(this.h.L), a.b_vp_sz = JSON.stringify(this.g.$a), a.v_vp_sz = JSON.stringify(this.h.$a), a.b_exp = this.g.B, a.v_exp = this.h.B, a.efp_occ = this.g.Jb, a.sbv = this.g.ka, a
    };

    function of () {
        lf.call(this, "capt");
        this.j = [];
        this.i = []
    }
    v( of , lf); of .prototype.o = function(a, b) {
        lf.prototype.o.call(this, a, b);
        20 <= this.i.length || (this.j.push(a.B), this.i.push(b.B))
    }; of .prototype.s = function() {
        return 20 === this.i.length
    }; of .prototype.m = function() {
        var a = pf(this.j, this.i),
            b = qf(this.j, this.i),
            c = {};
        return c.b_name = this.g.X, c.v_name = this.h.X, c.b_exp = this.j.join(","), c.v_exp = this.i.join(","), c.diff = a, c.diff_buckets = b, c
    };

    function pf(a, b) {
        return Ca(Ka(a, b), function(c) {
            return c[0] !== c[1]
        })
    }

    function qf(a, b) {
        function c(d) {
            return .25 * Math.floor(d / .25)
        }
        return pf(za(a, c), za(b, c))
    };

    function rf() {
        this.K = this.K;
        this.va = this.va
    }
    rf.prototype.K = !1;
    rf.prototype.ia = function() {
        return this.K
    };
    rf.prototype.G = function() {
        this.K || (this.K = !0, this.$())
    };
    rf.prototype.$ = function() {
        if (this.va)
            for (; this.va.length;) this.va.shift()()
    };

    function sf(a, b, c, d, e) {
        e = void 0 === e ? [new mf, new nf, new of ] : e;
        rf.call(this);
        this.g = a.Pa(b, c, this.V());
        this.g.na();
        this.i = e;
        this.h = d
    }
    v(sf, rf);
    sf.prototype.$ = function() {
        this.g && (this.g.P(), this.g.G())
    };

    function tf(a, b, c) {
        y(a.i, function(d) {
            var e = a.h;
            if (!d.u && (d.o(b, c), d.s())) {
                d.u = !0;
                var f = d.m(),
                    g = new bf;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.A);
                d = kf.l();
                g.add("i", d.g++);
                g.add("adk", e);
                df(g, f);
                e = new gf(g);
                var h = void 0 === h ? 4E3 : h;
                e = e.toString();
                /&v=[^&]+/.test(e) || (e = (f = jf()) ? e + "&v=" + encodeURIComponent(f) : e);
                e = e.substring(0, h);
                Id(e)
            }
        })
    }
    sf.prototype.W = function() {};
    sf.prototype.ga = function() {};
    sf.prototype.V = function() {
        return !1
    };

    function uf() {
        this.g = this.h = this.i = 0
    }

    function vf(a, b, c, d) {
        b && (a.i += c, a.h += c, a.g = Math.max(a.g, a.h));
        if (void 0 === d ? !b : d) a.h = 0
    };
    var wf = [1, .75, .5, .3, 0];

    function xf(a) {
        this.g = a = void 0 === a ? wf : a;
        this.h = za(this.g, function() {
            return new uf
        })
    }

    function yf(a) {
        return zf(a, function(b) {
            return b.i
        }, !1)
    }

    function Af(a) {
        return zf(a, function(b) {
            return b.g
        }, !0)
    }

    function Bf(a, b, c, d, e, f) {
        var g = void 0 === g ? !0 : g;
        c = f ? Math.min(b, c) : c;
        for (f = 0; f < a.g.length; f++) {
            var h = a.g[f],
                n = 0 < c && c >= h;
            h = !(0 < b && b >= h) || d;
            vf(a.h[f], g && n, e, !g || h)
        }
    }

    function zf(a, b, c) {
        a = za(a.h, function(d) {
            return b(d)
        });
        return c ? a : Cf(a)
    }

    function Cf(a) {
        return za(a, function(b, c, d) {
            return 0 < c ? d[c] - d[c - 1] : d[c]
        })
    };

    function Df() {
        this.g = new xf;
        this.i = new uf;
        this.h = -1;
        this.j = new xf([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0])
    }

    function W(a) {
        return 1E3 <= a.i.g
    };
    var Ef = new K(0, 0, 0, 0);

    function Ff(a, b) {
        b = Gf(b);
        return 0 === b ? 0 : Gf(a) / b
    }

    function Gf(a) {
        return Math.max(a.g - a.top, 0) * Math.max(a.h - a.left, 0)
    }

    function Hf(a, b) {
        if (!a || !b) return !1;
        for (var c = 0; null !== a && 100 > c++;) {
            if (a === b) return !0;
            try {
                a: {
                    var d = void 0;
                    if (mc && !(E && Mb("9") && !Mb("10") && w.SVGElement && a instanceof w.SVGElement) && (d = a.parentElement)) {
                        var e = d;
                        break a
                    }
                    d = a.parentNode;e = ra(d) && 1 == d.nodeType ? d : null
                }
                if (a = e || a) {
                    var f = J(a),
                        g = f && uc(f),
                        h = g && g.frameElement;
                    h && (a = h)
                }
            }
            catch (n) {
                break
            }
        }
        return !1
    }

    function If(a, b, c) {
        if (!a || !b) return !1;
        b = Jc(Ic(a), -b.left, -b.top);
        a = (b.left + b.h) / 2;
        b = (b.top + b.g) / 2;
        var d = L();
        Cc(d.top) && d.top && d.top.document && (d = d.top);
        if (!ve(d)) return !1;
        a = d.document.elementFromPoint(a, b);
        if (!a) return !1;
        b = (b = (b = J(c)) && b.defaultView && b.defaultView.frameElement) && Hf(b, a);
        d = a === c;
        a = !d && a && yc(a, function(e) {
            return e === c
        });
        return !(b || d || a)
    }

    function Jf(a, b, c, d) {
        return U.l().i ? !1 : 0 >= Gc(a) || 0 >= Hc(a) ? !0 : c && d ? ie(208, function() {
            return If(a, b, c)
        }) : !1
    };
    var Kf = new K(0, 0, 0, 0);

    function Lf(a, b, c) {
        rf.call(this);
        this.position = Ic(Kf);
        this.i = new Df;
        this.ra = -2;
        this.Lb = -1;
        this.Eb = b;
        this.qa = null;
        this.O = !1;
        this.L = null;
        this.M = -1;
        this.wa = c;
        this.Mb = this.La = pa;
        this.h = new qd;
        this.h.h = a;
        this.h.g = a;
        this.u = !1;
        this.o = {
            Da: null,
            Ca: null
        };
        this.ea = !0;
        this.H = null;
        R.l().u++;
        this.j = new Yc;
        this.Kb = this.ya = -1;
        this.Ea = 0;
        this.U = -1;
        this.g = null;
        this.Qa = new K(0, 0, 0, 0);
        this.Cb = !1;
        a = this.m = new gd;
        O(a, "od", Wc);
        N(O(a, "opac", M));
        N(O(a, "sbeos", M));
        N(O(a, "prf", M));
        N(O(a, "mwt", M));
        O(a, "iogeo", M);
        (a = this.h.h) && a.getAttribute && pd(a, "googleAvInapp") && (U.l().j = !0);
        1 == this.wa ? hd(this.m, "od", 1) : hd(this.m, "od", 0)
    }
    v(Lf, rf);
    k = Lf.prototype;
    k.$ = function() {
        Mf(this);
        this.H && this.H.G();
        this.g && this.g.G();
        delete this.i;
        delete this.La;
        delete this.Mb;
        delete this.h.h;
        delete this.h.g;
        delete this.o;
        delete this.H;
        delete this.g;
        delete this.m;
        rf.prototype.$.call(this)
    };

    function Nf(a) {
        return a.g ? a.g.g : a.position
    }
    k.Ia = function(a) {
        var b = R.l();
        "string" === typeof a && 0 != a.length && kd(b.g, a)
    };
    k.eb = function() {
        return !1
    };
    k.ja = function() {
        this.O = !0
    };
    k.Ba = function() {
        return this.O
    };
    k.Wa = function() {
        this.j.B = 0
    };

    function Of(a, b) {
        if (a.g) {
            if (b.I() === a.g.I()) return;
            a.g.G();
            a.g = null
        }
        b = b.create(a.h.g, a.m, a.eb());
        if (b = null != b && b.na() ? b : null) a.g = b
    }

    function Pf(a, b, c) {
        if (a.g) {
            a.g.Z();
            var d = a.g.u,
                e = d.m,
                f = e.g;
            if (null != d.i) {
                var g = d.j;
                a.L = new H(g.left - f.left, g.top - f.top);
                a.Qa = d.i
            }
            f = a.ka() ? Math.max(d.h, d.o) : d.h;
            g = {};
            null !== e.volume && (g.volume = e.volume);
            a.qa && -1 != a.Eb && -1 !== d.g && -1 !== a.qa.g ? (e = d.g - a.qa.g, e = 1E4 < e ? 0 : e) : e = 0;
            a.qa = d;
            a.Ya(f, b, c, !1, g, e, d.s)
        }
    }

    function Qf(a) {
        if (a.Ba() && a.H) {
            var b = 1 == id(a.m, "od"),
                c = U.l().g,
                d = a.H,
                e = new I(Gc(c), Hc(c));
            c = a.ka();
            a = {
                X: a.g ? a.g.I() : "ns",
                L: a.L,
                $a: e,
                ka: c,
                B: a.j.B,
                Jb: b
            };
            if (b = d.g) {
                b.Z();
                e = b.u;
                var f = e.m.g,
                    g = null,
                    h = null;
                null != e.i && f && (g = e.j, g = new H(g.left - f.left, g.top - f.top), h = new I(f.h - f.left, f.g - f.top));
                c = {
                    X: b.I(),
                    L: g,
                    $a: h,
                    ka: c,
                    Jb: !1,
                    B: c ? Math.max(e.h, e.o) : e.h
                }
            } else c = null;
            c && tf(d, a, c)
        }
    }
    k.Ya = function(a, b, c, d, e, f, g) {
        this.u || (this.Ba() && (e = new Yc, e.i = c, e.h = Ee(), e.B = 0 === this.M && 1 === id(this.m, "opac") ? 0 : a, e.g = this.ca(), e.j = g, a = this.i, c = this.j, d = d && this.j.B >= (this.ca() ? .3 : .5), a.h = Math.max(a.h, e.B), Bf(a.j, e.j, c.j, e.i, f, d), Bf(a.g, e.B, c.B, e.i, f, d), d = d || c.g != e.g ? c.isVisible() && e.isVisible() : c.isVisible(), c = !e.isVisible() || e.i, vf(a.i, d, f, c), this.Eb = b, 0 < e.B && (-1 === this.ya && (this.ya = b), this.Kb = b), -1 == this.Lb && W(this.i) && (this.Lb = b), -2 == this.ra && (this.ra = Gf(Nf(this)) ? e.B : -1), this.j = e), this.La(this))
    };
    k.ca = function() {
        return !1
    };
    k.ka = function() {
        return this.Cb || !1
    };

    function Rf(a) {
        a.h.g && (a.o.Da = xe(a.h.g, "mouseover", function() {
            a.U = T()
        }, 149), a.o.Ca = xe(a.h.g, "mouseout", function() {
            var b = T(); - 1 == a.U || b < a.U || (a.Ea += b - a.U);
            a.U = -1
        }, 150))
    }

    function Mf(a) {
        a.h.g && (a.o.Da && (kc(a.h.g, "mouseover", a.o.Da), a.o.Da = null), a.o.Ca && (kc(a.h.g, "mouseout", a.o.Ca), a.o.Ca = null))
    };
    Ya(Wa(new Ta(Ua, "https://www.googletagservices.com/activeview/js/current/osd.js")));

    function Sf() {
        this.h = this.g = null;
        this.i = !1;
        Tf(this)
    }

    function Tf(a) {
        a.g || "function" !== typeof G.Goog_AdSense_getAdAdapterInstance || (a.g = G.Goog_AdSense_getAdAdapterInstance());
        if (!a.h) {
            var b = w.goog_osd_adp;
            a.h = b && "function" === typeof b.getOseId ? b : null
        }!a.i && pc() && (a.i = !0)
    }

    function Uf(a, b, c, d) {
        Tf(a);
        var e = U.l().A;
        a.g && a.g.getNewBlocks(b, e);
        a.h && a.h.getNewBlocks(b, e);
        a.i && !c() && (d(!0), b(pc(), "", 13, !0))
    }

    function Vf(a) {
        Tf(a);
        return (a.g ? a.g.numBlocks() : 0) + (a.h ? a.h.numBlocks() : 0) + (a.i ? 1 : 0)
    }

    function Wf(a) {
        Tf(a);
        return a.g ? a.g.getOseId() : a.h ? a.h.getOseId() : 0
    };

    function Xf(a) {
        return jb() ? (a = (a = J(a)) && uc(a), !!(a && a.location && a.location.ancestorOrigins && 0 < a.location.ancestorOrigins.length && a.location.origin == a.location.ancestorOrigins[0])) : !0
    };
    var Yf = "StopIteration" in w ? w.StopIteration : {
        message: "StopIteration",
        stack: ""
    };

    function Zf() {}
    Zf.prototype.next = function() {
        return Zf.prototype.j.call(this)
    };
    Zf.prototype.j = function() {
        throw Yf;
    };
    Zf.prototype.fb = function() {
        return this
    };

    function $f(a) {
        if (a instanceof Zf) return a;
        if ("function" == typeof a.fb) return a.fb(!1);
        if (qa(a)) {
            var b = 0,
                c = new Zf;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw Yf;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function ag(a, b) {
        if (qa(a)) try {
            y(a, b, void 0)
        } catch (c) {
            if (c !== Yf) throw c;
        } else {
            a = $f(a);
            try {
                for (;;) b.call(void 0, a.next(), void 0, a)
            } catch (c) {
                if (c !== Yf) throw c;
            }
        }
    }

    function bg(a, b) {
        var c = 1;
        ag(a, function(d) {
            c = b.call(void 0, c, d)
        });
        return c
    }

    function cg(a, b) {
        var c = $f(a);
        a = new Zf;
        a.next = function() {
            var d = c.next();
            if (b.call(void 0, d, void 0, c)) return d;
            throw Yf;
        };
        return a
    }

    function dg(a) {
        var b = $f(a);
        a = new Zf;
        var c = 100;
        a.next = function() {
            if (0 < c--) return b.next();
            throw Yf;
        };
        return a
    };

    function eg(a, b) {
        this.i = b;
        this.h = null == a;
        this.g = a
    }
    v(eg, Zf);
    eg.prototype.next = function() {
        if (this.h) throw Yf;
        var a = this.g || null;
        this.h = null == a;
        var b;
        if (b = a) {
            b = this.i;
            if (wb(a, "parentElement") && null != a.parentElement && a != a.parentElement) var c = a.parentElement;
            else if (b) {
                var d = void 0 === d ? Xf : d;
                if (d(a)) try {
                    var e = J(a),
                        f = e && uc(e),
                        g = f && f.frameElement;
                    c = null == g ? null : g
                } catch (h) {
                    c = null
                } else c = null
            } else c = null;
            b = c
        }
        this.g = b;
        return a
    };

    function fg(a) {
        var b = 1;
        a = dg(new eg(a, !0));
        a = cg(a, function() {
            return 0 < b
        });
        return bg(a, function(c, d) {
            var e = 1;
            if (wb(d, "style") && d.style) {
                var f = parseFloat;
                a: {
                    var g = J(d);
                    if (g.defaultView && g.defaultView.getComputedStyle && (g = g.defaultView.getComputedStyle(d, null))) {
                        g = g.opacity || g.getPropertyValue("opacity") || "";
                        break a
                    }
                    g = ""
                }
                if (!g) {
                    g = d.style[mb()];
                    if ("undefined" !== typeof g) d = g;
                    else {
                        g = d.style;
                        var h = Nc.opacity;
                        if (!h) {
                            var n = mb();
                            h = n;
                            void 0 === d.style[n] && (n = (Eb ? "Webkit" : Db ? "Moz" : E ? "ms" : Bb ? "O" : null) + ob(n), void 0 !== d.style[n] && (h = n));
                            Nc.opacity = h
                        }
                        d = g[h] || ""
                    }
                    g = d
                }
                f = f(g);
                "number" !== typeof f || isNaN(f) || (e = f)
            }
            return b = c * e
        })
    };

    function gg(a, b, c, d, e, f, g) {
        g = void 0 === g ? [] : g;
        Lf.call(this, c, d, e);
        this.Ja = b;
        this.Ka = this.A = 0;
        this.yb = null;
        this.xb = this.ob = "";
        this.qb = [];
        this.sb = [];
        this.lb = this.wb = "";
        this.Bb = !1;
        this.D = 4;
        this.Hb = !1;
        this.ba = [];
        this.N = this.s = "";
        this.Db = this.nb = this.Ab = !1;
        this.pa = 0;
        this.fa = this.zb = Ee();
        this.ta = 0;
        this.da = f;
        this.Ib = !1;
        this.sa = this.Na = this.Oa = this.xa = this.F = -1;
        this.ua = g;
        hg(this, this.h.h);
        md(R.l().g, this.Ja)
    }
    v(gg, Lf);

    function ig(a, b, c) {
        return (a = String(a[b] || od(a, c) || "")) ? a.split("|") : []
    }

    function hg(a, b) {
        if (b) {
            if (0 == a.A)
                if (a.h.h) {
                    var c = a.h.h._adk_;
                    c || (c = (c = od(a.h.h, "googleAvAdk")) && !/[^0-9]/.test(c) ? parseInt(c, 10) : 0)
                } else c = 0;
            else c = a.A;
            a.A = c;
            "" == a.ob && (a.ob = String(b._avi_ || ""));
            "" == a.xb && (a.xb = b._avihost_ ? String(b._avihost_) : "pagead2.googlesyndication.com");
            a.qb.length || (a.qb = ig(b, "_avicxn_", "googleAvCxn"));
            a.sb.length || (a.sb = ig(b, "_avieoscxn_", "googleEOSAvCxn"));
            "" == a.wb && (a.wb = String(b._aviextcxn_ || od(b, "googleAvExtCxn") || ""));
            "" == a.lb && (a.lb = String(b._cid_ || ""));
            a.Bb || (a.Bb = !!b._imm_ || pd(b, "googleAvImmediate"));
            "" == a.N && (a.N = String(b._cvu_ || od(b, "googleAvCpmav") || ""));
            "" == a.s && (a.s = String(od(b, "googleAvBtr") || ""));
            a.Ia(String(b._avm_ || od(b, "googleAvMetadata") || ""));
            od(b, "googleAvFlags");
            R.l()
        }
    }
    k = gg.prototype;
    k.$ = function() {
        delete this.ba;
        delete this.ua;
        Lf.prototype.$.call(this)
    };

    function jg(a, b, c) {
        y(a.ua, function(d) {
            return d.g(a, c, b)
        })
    }
    k.Ba = function() {
        return this.O && !(1 == this.ta || 3 == this.ta)
    };
    k.Wa = function() {
        Lf.prototype.Wa.call(this);
        this.Qa = new K(0, 0, 0, 0)
    };
    k.ja = function() {
        this.O || (this.Oa = Sd(), void 0 !== this.da && this.da(!1, this.ra), null != this.s && "" != this.s && (Lc(this.s), this.s = ""));
        Lf.prototype.ja.call(this);
        kg(this)
    };

    function kg(a) {
        if (a.O && w == w.top) {
            var b = w.pageYOffset;
            null != b && (a.sa = Math.max(b, a.sa));
            jg(a, 4, {})
        }
    }

    function lg(a) {
        return new rd(a.A, a.yb)
    }
    k.Ia = function(a) {
        if ("string" === typeof a && 0 != a.length) {
            var b = new gd,
                c = R.l();
            O(b, "omid", M);
            kd(b, a);
            b = id(b, "omid");
            null !== b && (c.g.h.omid = b);
            a = kd(this.m, a);
            c = a.split("&");
            for (b = 0; b < c.length; b++) {
                var d = c[b];
                "ts=0" == d ? this.ea = !1 : 0 == d.lastIndexOf("la=", 0) ? (d = d.split("=")[1], "0" == d ? this.pa = 2 : "1" == d && (this.pa = 1)) : 0 == d.lastIndexOf("cr=", 0) ? "1" == d.split("=")[1] && (this.Cb = !0) : "adf=1" == d && (this.Ib = !0)
            }
            this.j.g = this.ca();
            Lf.prototype.Ia.call(this, a)
        }
    };
    k.Ya = function(a, b, c, d, e, f, g) {
        var h = W(this.i),
            n = Math.floor(100 * this.j.B);
        this.pa = 242500 <= Gf(Nf(this)) ? 1 : 2;
        Lf.prototype.Ya.call(this, a, b, c, d, e, f, g); - 1 == this.fa && -1 != this.j.h ? this.fa = this.j.h : 0 == this.fa && 1 == this.j.h && (this.fa = 1);
        a = W(this.i);
        b = Math.floor(100 * this.j.B);
        (!h && a || b != n) && void 0 !== this.da && this.da(a, b);
        try {
            this.M = fg(this.h.g)
        } catch (m) {}
        kg(this)
    };
    k.ca = function() {
        return Fb ? !1 : 1 == this.pa
    };

    function mg(a, b, c, d) {
        d = void 0 === d ? {} : d;
        var e = {},
            f = U.l(),
            g = jd(a.m),
            h = f.u,
            n = Nf(a);
        g.p = [n.top + h.y, n.left + h.x, n.g + h.y, n.h + h.x];
        h = a.i;
        g.tos = yf(h.g);
        g.mtos = Af(h.g);
        g.mcvt = h.i.g;
        g.rs = a.wa;
        (n = 5 == a.wa) || (g.ht = a.Ea);
        0 <= a.ya && (g.tfs = a.ya, g.tls = a.Kb);
        g.mc = Ae(h.h);
        g.lte = Ae(a.ra);
        g.bas = a.zb;
        g.bac = a.fa;
        f.i && (g["if"] = a.u ? 0 : 1);
        g.met = a.h.i;
        n && a.Ja && (g.req = encodeURIComponent(a.Ja).substring(0, 100));
        a.Db && (g.ci = "1");
        a.ca() && (g.la = "1");
        g.avms = a.g ? a.g.I() : "ns";
        a.g && z(g, a.g.R());
        0 != a.ta && (g.md = a.ta);
        g.btr = null != a.s && "" != a.s ? 1 : 0;
        g.cpmav = ng(a) ? 1 : 0;
        g.lm = a.D;
        z(g, og(a));
        d && z(g, d);
        g.adk = a.A;
        a.Ib && a.Ka && (g.adf = a.Ka);
        d = a.u;
        f = R.l();
        !c && d && f.h && (c = f.h);
        c && (g.r = c);
        0 === a.M && (g.invis = 1);
        c = hf(g).join("&");
        e[3] = c;
        e[11] = d;
        e[29] = R.l().i;
        e[0] = b;
        e[7] = a.j.B;
        e[9] = Fe(a.Qa);
        e[28] = a.wa;
        e[32] = a.g ? a.g.I() : "ns";
        e[5] = W(a.i) && 4 != a.D;
        e[13] = Af(a.i.g).join(",");
        e[18] = 0 == Gf(Nf(a));
        null != a.L && (e[20] = a.L.y, e[21] = a.L.x);
        b = U.l();
        null != b.h && (e[22] = Gc(b.h), e[23] = Hc(b.h));
        null != b.g && (e[30] = Gc(b.g), e[31] = Hc(b.g), e[38] = Fe(b.g));
        c = b.u;
        g = Nf(a);
        e[37] = Fe(new K(g.top + c.y, g.h + c.x, g.g + c.y, g.left + c.x));
        b.m && (b = b.m, e[39] = b.width + "-" + b.height); - 1 != a.M && (e[25] = a.M);
        if (a = lg(a)) a.h && (e[4] = a.h), a.g && (e[12] = a.g);
        return e
    }

    function og(a) {
        var b = a.F;
        var c = a.F;
        c = -1 == c || a.xa < c ? -1 : a.xa - c;
        var d = -1 == a.F || a.Oa < a.F ? -1 : a.Oa - a.F,
            e = {};
        return e.rst = 0 < b ? b : void 0, e.dlt = 0 <= c ? c : void 0, e.rpt = 0 <= d ? d : void 0, e.isd = 0 <= a.Na ? a.Na : void 0, e.msd = 0 <= a.sa ? a.sa : void 0, e
    }

    function ng(a) {
        return null != a.N && null != a.N.match(/\/pagead\/adview\?.*ai=.*&vt=\d+/i)
    }
    k.eb = function() {
        return !1
    };

    function pg(a, b, c, d) {
        Xe.call(this, a, b, c, d)
    }
    v(pg, Xe);
    k = pg.prototype;
    k.ib = function() {
        if (this.h) {
            var a = this.h,
                b = this.i.g.C;
            try {
                try {
                    var c = De(a.getBoundingClientRect())
                } catch (m) {
                    c = new K(0, 0, 0, 0)
                }
                var d = c.h - c.left,
                    e = c.g - c.top,
                    f = Pc(a, b),
                    g = f.x,
                    h = f.y;
                var n = new K(Math.round(h), Math.round(g + d), Math.round(h + e), Math.round(g))
            } catch (m) {
                n = Ic(Ef)
            }
            this.g = n
        }
    };
    k.jb = function() {
        this.s = this.i.i.g
    };
    k.ub = function(a) {
        return Jf(a, this.s, this.h, 1 == id(this.H, "od"))
    };
    k.Z = function() {
        this.timestamp = T();
        this.ib();
        if (this.h && "number" === typeof this.h.videoWidth && "number" === typeof this.h.videoHeight) {
            var a = this.h;
            var b = new I(a.videoWidth, a.videoHeight);
            a = this.g;
            var c = Gc(a),
                d = Hc(a),
                e = b.width;
            b = b.height;
            0 >= e || 0 >= b || 0 >= c || 0 >= d || (e /= b, a = Ic(a), e > c / d ? (c /= e, d = (d - c) / 2, 0 < d && (d = a.top + d, a.top = Math.round(d), a.g = Math.round(d + c))) : (d *= e, c = Math.round((c - d) / 2), 0 < c && (c = a.left + c, a.left = Math.round(c), a.h = Math.round(c + d))));
            this.g = a
        }
        this.jb();
        a = this.g;
        c = this.s;
        a = a.left <= c.h && c.left <= a.h && a.top <= c.g && c.top <= a.g ? new K(Math.max(a.top, c.top), Math.min(a.h, c.h), Math.min(a.g, c.g), Math.max(a.left, c.left)) : new K(0, 0, 0, 0);
        c = a.top >= a.g || a.left >= a.h ? new K(0, 0, 0, 0) : a;
        a = this.i.i;
        b = e = d = 0;
        0 < (this.g.g - this.g.top) * (this.g.h - this.g.left) && (this.ub(c) ? c = new K(0, 0, 0, 0) : (d = U.l().s, b = new K(0, d.height, d.width, 0), d = Ff(c, this.g), e = Ff(c, U.l().g), b = Ff(c, b)));
        c = c.top >= c.g || c.left >= c.h ? new K(0, 0, 0, 0) : Jc(c, -this.g.left, -this.g.top);
        Oe() || (e = d = 0);
        this.u = new se(a, this.g, c, d, e, this.timestamp, b)
    };
    k.I = function() {
        return this.i.I()
    };

    function qg(a) {
        var b = [];
        rg(new sg, a, b);
        return b.join("")
    }

    function sg() {}

    function rg(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (Array.isArray(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), rg(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), tg(d, c), c.push(":"), rg(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    tg(b, c);
                    break;
                case "number":
                    c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "function":
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    }
    var ug = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        vg = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

    function tg(a, b) {
        b.push('"', a.replace(vg, function(c) {
            var d = ug[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), ug[c] = d);
            return d
        }), '"')
    };

    function wg() {
        this.key = "goog_adspeed";
        this.i = [3, 4];
        this.h = null
    }
    wg.prototype.g = function(a, b, c) {
        if (!Fa(this.i, c) || !lg(a).i()) return !1;
        c = {};
        c = (c[0] = this.key, c[40] = qg(og(a)), c);
        var d;
        if (d = this.h) a: {
            d = this.h;
            for (var e in d)
                if (!(e in c) || d[e] !== c[e]) {
                    d = !1;
                    break a
                }
            for (var f in c)
                if (!(f in d)) {
                    d = !1;
                    break a
                }
            d = !0
        }
        if (d) return !1;
        this.h = c;
        e = {};
        z(e, c, b);
        return xg(a, {
            Za: {},
            Va: e
        })
    };

    function yg() {
        this.key = "goog_update_data";
        this.h = 0;
        this.i = !1
    }
    yg.prototype.g = function(a, b, c) {
        if (c != this.h || !lg(a).i()) return !1;
        c = 1 == a.D;
        var d = W(a.i),
            e = {},
            f = {};
        b = {
            Va: (e[0] = this.key, e[40] = qg(og(a)), e),
            Za: Object.assign({}, b, (f.r = b.r, f))
        };
        if (c) return d && !this.i ? (this.i = d, xg(a, b)) : !1;
        this.i = d;
        return xg(a, b)
    };

    function zg(a) {
        yg.call(this, a);
        this.key = "goog_image_request";
        this.h = 2
    }
    v(zg, yg);

    function Ag(a) {
        yg.call(this, a);
        this.key = "goog_image_request";
        this.h = 1
    }
    v(Ag, yg);
    Ag.prototype.g = function(a, b, c) {
        var d = !a.nb;
        if (W(a.i) && a.ea || d) {
            if (b = yg.prototype.g.call(this, a, b, c))
                if (W(a.i) || (a.nb = !0), W(a.i) || a.ea) a.ea = !1;
            return b
        }
        return !1
    };

    function Bg() {
        this.h = [];
        this.g = []
    }

    function Cg(a) {
        return Da(X.g, function(b) {
            return a.matches(lg(b))
        })
    }

    function Dg(a) {
        var b = X;
        return a ? Da(b.g, function(c) {
            return c.h.h == a
        }) : null
    }

    function Eg(a) {
        return Da(a.g, function() {
            return !1
        })
    }

    function Fg() {
        var a = X;
        return 0 == a.h.length ? a.g : 0 == a.g.length ? a.h : Ga(a.g, a.h)
    }

    function Gg() {
        var a = X;
        a.h = [];
        a.g = []
    }

    function Hg(a, b) {
        a = a.g;
        var c = Ea(a, function(d) {
            return d == b
        });
        return -1 != c ? (a.splice(c, 1), b.g && b.g.P(), b.G(), !0) : !1
    }

    function Ig(a) {
        var b = X;
        if (Hg(b, a)) {
            a = function() {
                return null
            };
            a = function() {
                return Eg(b)
            };
            for (var c = a(); c; c = a()) Hg(b, c)
        }
    }
    x(Bg);
    var X = Bg.l();

    function Jg() {
        this.g = this.h = null
    }

    function Kg(a, b) {
        function c(d, e) {
            b(d, e)
        }
        if (null == a.h) return !1;
        a.g = Da(a.h, function(d) {
            return null != d && d.cb()
        });
        a.g && (a.g.tb(c) ? Ue(a.g.g) : b(a.g.g.aa(), a.g));
        return null != a.g
    }
    x(Jg);

    function Lg(a) {
        a = Mg(a);
        Ye.call(this, a.length ? a[a.length - 1] : new V(G, 0));
        this.i = a;
        this.h = null
    }
    v(Lg, Ye);
    k = Lg.prototype;
    k.I = function() {
        return (this.h ? this.h : this.g).I()
    };
    k.R = function() {
        return (this.h ? this.h : this.g).R()
    };
    k.S = function() {
        return (this.h ? this.h : this.g).S()
    };
    k.tb = function(a) {
        var b = !1;
        y(this.i, function(c) {
            c.Fa() && (b = !0)
        });
        b && (this.j = a, Te(this.g, this));
        return b
    };
    k.G = function() {
        y(this.i, function(a) {
            a.G()
        });
        Ye.prototype.G.call(this)
    };
    k.cb = function() {
        return Ba(this.i, function(a) {
            return a.Y()
        })
    };
    k.oa = function() {
        return Ba(this.i, function(a) {
            return a.Y()
        })
    };
    k.Pa = function(a, b, c) {
        return new pg(a, this.g, b, c)
    };
    k.W = function(a) {
        this.h = a.h
    };

    function Mg(a) {
        if (!a.length) return [];
        a = ya(a, function(c) {
            return null != c && c.Y()
        });
        for (var b = 1; b < a.length; b++) Te(a[b - 1], a[b]);
        return a
    };
    var Ng = {
        threshold: [0, .3, .5, .75, 1]
    };

    function Og(a, b, c, d) {
        Xe.call(this, a, b, c, d);
        this.D = this.A = this.m = this.o = this.j = null
    }
    v(Og, pg);
    k = Og.prototype;
    k.na = function() {
        var a = this;
        this.D || (this.D = T());
        if (ie(298, function() {
                return Pg(a)
            })) return !0;
        Re(this.i, "msf");
        return !1
    };
    k.P = function() {
        if (this.j && this.h) try {
            this.j.unobserve(this.h), this.o ? (this.o.unobserve(this.h), this.o = null) : this.m && (this.m.disconnect(), this.m = null)
        } catch (a) {}
    };

    function Qg(a) {
        return a.j && a.j.takeRecords ? a.j.takeRecords() : []
    }

    function Pg(a) {
        if (!a.h) return !1;
        var b = a.h,
            c = a.i.g.C,
            d = R.l().j.g;
        a.j = new c.IntersectionObserver(Md(d, function(e) {
            return Rg(a, e)
        }), Ng);
        d = Md(d, function() {
            a.j.unobserve(b);
            a.j.observe(b);
            Rg(a, Qg(a))
        });
        c.ResizeObserver ? (a.o = new c.ResizeObserver(d), a.o.observe(b)) : c.MutationObserver && (a.m = new w.MutationObserver(d), a.m.observe(b, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }));
        a.j.observe(b);
        Rg(a, Qg(a));
        return !0
    }

    function Rg(a, b) {
        try {
            if (b.length) {
                a.A || (a.A = T());
                var c = Sg(b),
                    d = Pc(a.h, a.i.g.C),
                    e = d.x,
                    f = d.y;
                a.g = new K(Math.round(f), Math.round(e) + c.boundingClientRect.width, Math.round(f) + c.boundingClientRect.height, Math.round(e));
                var g = De(c.intersectionRect);
                a.s = Jc(g, a.g.left - g.left, a.g.top - g.top)
            }
        } catch (h) {
            a.P(), le(299, h)
        }
    }

    function Sg(a) {
        return Aa(a, function(b, c) {
            return b.time > c.time ? b : c
        }, a[0])
    }
    k.Z = function() {
        var a = Qg(this);
        0 < a.length && Rg(this, a);
        pg.prototype.Z.call(this)
    };
    k.ib = function() {};
    k.ub = function() {
        return !1
    };
    k.jb = function() {};
    k.R = function() {
        var a = {};
        return Object.assign(this.i.R(), (a.niot_obs = this.D, a.niot_cbk = this.A, a))
    };
    k.I = function() {
        return "nio"
    };

    function Tg(a) {
        a = void 0 === a ? G : a;
        Ye.call(this, new V(a, 2))
    }
    v(Tg, Ye);
    Tg.prototype.I = function() {
        return "nio"
    };
    Tg.prototype.oa = function() {
        return !U.l().j && null != this.g.g.C.IntersectionObserver
    };
    Tg.prototype.Pa = function(a, b, c) {
        return new Og(a, this.g, b, c)
    };

    function Ug() {
        var a = Vg();
        V.call(this, G.top, a, "geo")
    }
    v(Ug, V);
    Ug.prototype.Ra = function() {
        return U.l().g
    };
    Ug.prototype.Y = function() {
        var a = Vg();
        this.o !== a && (this.g != this && a > this.g.o && (this.g = this, Se(this)), this.o = a);
        return 2 == a
    };

    function Vg() {
        R.l();
        var a = U.l();
        return a.i || a.j ? 0 : 2
    }
    x(Ug);
    var Wg = {},
        Xg = (Wg[1] = function() {
            return new Tg
        }, Wg[2] = function() {
            return new Lg([Ug.l()])
        }, Wg);

    function Yg() {
        this.g = null;
        this.h = Xg
    }

    function Zg() {
        var a = Yg.l();
        a: {
            var b = id(R.l().g, "mv");
            if (null != b && (b = a.h[b]) && (b = b()) && b.oa()) break a;b = null
        }
        a.g = b
    }
    x(Yg);

    function $g() {
        this.done = !1;
        this.g = {
            hb: 0,
            gb: 0,
            tc: 0,
            kb: 0,
            Aa: -1,
            Qb: 0,
            Pb: 0,
            Rb: 0
        };
        this.s = null;
        this.m = this.u = !1;
        this.o = "";
        this.i = null;
        this.A = 0;
        this.h = new Pe(this)
    }

    function ah(a) {
        var b = Y;
        if (!b.u) {
            b.u = !0;
            if (a) {
                a = Fg();
                for (var c, d = 0; d < a.length; ++d) c = a[d], c.h.g && Rf(c)
            }
            bh(b, function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                return b.j.apply(b, t(f))
            });
            b.j()
        }
    }
    $g.prototype.Fb = function() {
        ch(this, Fg(), !1)
    };

    function dh() {
        var a = Yg.l();
        null != a.g && a.g.g && Ue(a.g.g);
        a = Jg.l();
        null != a.g && a.g.g ? Ue(a.g.g) : Le(U.l())
    }

    function ch(a, b, c) {
        if (!a.done)
            if (a.h.cancel(), 0 == b.length) a.m = !1;
            else {
                a.i = null;
                try {
                    dh();
                    var d = T(),
                        e = R.l();
                    e.s = d;
                    if (null != Jg.l().g)
                        for (e = 0; e < b.length; e++) Pf(b[e], d, c);
                    else ke(a.o, {
                        strategy_not_selected: 1,
                        bin: e.i
                    });
                    for (d = 0; d < b.length; d++) Qf(b[d]);
                    ++a.g.kb;
                    eh(a)
                } finally {
                    c ? y(b, function(f) {
                        return f.Wa()
                    }) : Qe(a.h)
                }
            }
    }

    function bh(a, b) {
        if (!a.s) {
            b = ee(142, b);
            Q();
            var c;
            F.visibilityState ? c = "visibilitychange" : F.mozVisibilityState ? c = "mozvisibilitychange" : F.webkitVisibilityState && (c = "webkitvisibilitychange");
            c && jc(F, c, b, {
                capture: !1
            }) && (a.s = b)
        }
    }
    $g.prototype.j = function() {
        var a = Oe(),
            b = T();
        a ? (pe || (ne = b, y(X.h, function(c) {
            return c.i.o(b, !c.s())
        })), pe = !0) : (this.A = fh(this, b), pe = !1, y(X.h, function(c) {
            c.Ba() && c.i.m(b)
        }));
        this.m = !0;
        ch(this, Fg(), !a)
    };

    function gh(a) {
        return !!(Date && a && a.screen && a.document && a.document.body && a.document.body.getBoundingClientRect)
    }

    function hh(a, b, c) {
        if (!a.i || c) {
            c = b.document;
            var d = 0 <= oe ? T() - oe : -1,
                e = T(); - 1 == a.g.Aa && (d = e);
            var f = U.l(),
                g = R.l(),
                h = jd(g.g),
                n = Fg();
            try {
                if (0 < n.length) {
                    var m = f.g;
                    m && (h.bs = [Gc(m), Hc(m)]);
                    var l = f.m;
                    l && (h.ps = [l.width, l.height]);
                    b.screen && (h.scs = [b.screen.width, b.screen.height])
                } else h.url = encodeURIComponent(b.location.href.substring(0, 512)), c.referrer && (h.referrer = encodeURIComponent(c.referrer.substring(0, 512)));
                h.tt = d;
                h.pt = oe;
                h.bin = g.i;
                void 0 !== b.google_osd_load_pub_page_exp && (h.olpp = b.google_osd_load_pub_page_exp);
                h.deb = [1, a.g.hb, a.g.gb, a.g.kb, a.g.Aa, ze, a.h.h, a.g.Qb, a.g.Pb, a.g.Rb].join("-");
                h.tvt = fh(a, e);
                f.j && (h.inapp = 1);
                if (null !== b && b != b.top) {
                    0 < n.length && (h.iframe_loc = encodeURIComponent(b.location.href.substring(0, 512)));
                    var p = f.h;
                    h.is = [Gc(p), Hc(p)]
                }
            } catch (D) {
                h.error = 1
            }
            a.i = h
        }
        b = a.i;
        a = {};
        for (var q in b) a[q] = b[q];
        q = R.l().j;
        var u;
        if (1 == id(q.i, "prf")) {
            b = new Kd;
            m = q.g;
            l = 0; - 1 < m.g && (l = m.i.g.g() - m.g);
            b = ac(b, 1, m.j + l);
            m = q.g;
            b = ac(b, 5, -1 < m.g ? m.h + 1 : m.h);
            b = ac(b, 2, q.h.g.j());
            b = ac(b, 3, q.h.g.i());
            m = ac(b, 4, q.h.g.h());
            q = {};
            b = new Sb;
            var r = void 0 === r ? 0 : r;
            l = Zb(m, 1);
            l = null == l ? l : +l;
            r = null == l ? r : l;
            if (0 !== r && (l = r, null != l)) {
                tb(b.g, 9);
                r = b.g;
                c = l;
                c = (l = 0 > c ? 1 : 0) ? -c : c;
                if (0 === c) rb = 0 < 1 / c ? 0 : 2147483648, qb = 0;
                else if (isNaN(c)) rb = 2147483647, qb = 4294967295;
                else if (1.7976931348623157E308 < c) rb = (l << 31 | 2146435072) >>> 0, qb = 0;
                else if (2.2250738585072014E-308 > c) c /= Math.pow(2, -1074), rb = (l << 31 | c / 4294967296) >>> 0, qb = c >>> 0;
                else {
                    d = c;
                    p = 0;
                    if (2 <= d)
                        for (; 2 <= d && 1023 > p;) p++, d /= 2;
                    else
                        for (; 1 > d && -1022 < p;) d *= 2, p--;
                    c *= Math.pow(2, -p);
                    rb = (l << 31 | p + 1023 << 20 | 1048576 * c & 1048575) >>> 0;
                    qb = 4503599627370496 * c >>> 0
                }
                ub(r, qb);
                ub(r, rb)
            }
            r = $b(m, 2);
            0 !== r && null != r && Tb(b, 2, r);
            r = $b(m, 3);
            0 !== r && null != r && Tb(b, 3, r);
            r = $b(m, 4);
            0 !== r && null != r && Tb(b, 4, r);
            r = $b(m, 5);
            if (0 !== r && null != r && (m = r, null != m))
                if (tb(b.g, 40), r = b.g, 0 <= m) tb(r, m);
                else {
                    for (l = 0; 9 > l; l++) r.push(m & 127 | 128), m >>= 7;
                    r.push(1)
                }
            r = new Uint8Array(b.g.length());
            l = b.h;
            p = l.length;
            for (c = m = 0; c < p; c++) d = l[c], r.set(d, m), m += d.length;
            l = b.g;
            r.set(l.g.subarray(0, l.h), m);
            l.h = 0;
            b.h = [r];
            void 0 === u && (u = 0);
            if (!Rb)
                for (Rb = {}, b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), m = ["+/=", "+/", "-_=", "-_.", "-_"], l = 0; 5 > l; l++)
                    for (p = b.concat(m[l].split("")), Qb[l] = p, c = 0; c < p.length; c++) d = p[c], void 0 === Rb[d] && (Rb[d] = c);
            u = Qb[u];
            b = Array(Math.floor(r.length / 3));
            m = u[64] || "";
            for (l = p = 0; p < r.length - 2; p += 3) e = r[p], f = r[p + 1], d = r[p + 2], c = u[e >> 2], e = u[(e & 3) << 4 | f >> 4], f = u[(f & 15) << 2 | d >> 6], d = u[d & 63], b[l++] = c + e + f + d;
            c = 0;
            d = m;
            switch (r.length - p) {
                case 2:
                    c = r[p + 1], d = u[(c & 15) << 2] || m;
                case 1:
                    r = r[p], b[l] = u[r >> 2] + u[(r & 3) << 4 | c >> 4] + d + m
            }
            u = (q.pf = b.join(""), q)
        } else u = {};
        z(a, u);
        return a
    }

    function ih() {
        y(Fg(), function(a) {
            if (a.h.h) {
                var b = a.A || 0,
                    c = Yg.l();
                if (b = c.g ? new sf(c.g, a.h.g, a.m, b) : null) a.H = b
            }
        })
    }

    function jh() {
        var a = Jg.l();
        if (null != a.g) {
            var b = a.g;
            y(Fg(), function(c) {
                return Of(c, b)
            })
        }
    }

    function eh(a) {
        var b = R.l(),
            c = 1 === id(b.g, "llp");
        "osd" == a.o && y(X.g, function(d) {
            if (c) {
                if (1 == b.i || W(d.i) || d.u) {
                    var e = {};
                    jg(d, 0, (e.r = void 0, e))
                }
            } else e = {}, jg(d, 0, (e.r = void 0, e))
        })
    }

    function fh(a, b) {
        a = a.A;
        pe && (a += b - ne);
        return a
    }

    function kh(a) {
        return (a = a.match(/[&\?;](?:dc_)?adk=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
    }

    function lh(a) {
        return (a = a.match(/[&\?;]adf=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
    }

    function mh() {
        var a = Y;
        var b = void 0 === b ? function() {
            return {}
        } : b;
        fe.mb = "av-js";
        ae.g = .01;
        he([function(c) {
            var d = R.l(),
                e = {};
            z(c, (e.bin = d.i, e.type = "error", e), jd(d.g), hh(a, G), b());
            if (d = jf()) e = {}, z(c, (e.v = encodeURIComponent(d), e))
        }])
    }

    function nh(a) {
        var b = new oh;
        switch (a) {
            case 0:
            case 5:
                return [];
            default:
                return [new yg(b), new Ag(b), new zg(b), new wg]
        }
    }
    x($g);
    var Y = $g.l();

    function oh() {}

    function xg(a, b) {
        var c = b || {};
        b = void 0 === c.Za ? {} : c.Za;
        c = void 0 === c.Va ? {} : c.Va;
        var d = c.r,
            e = b[0],
            f = hh(Y, L(), !1),
            g = {};
        z(g, f, b);
        b = {};
        z(b, mg(a, e, d, g), c);
        He(a.h.h, b, a.ba);
        return !0
    };

    function ph() {
        V.call(this, G, 2, "iem")
    }
    v(ph, V);
    k = ph.prototype;
    k.Ra = function() {
        function a(q, u) {
            return !!b.C.document.elementFromPoint(q, u)
        }
        var b = this,
            c = new K(0, this.C.innerWidth || this.C.width, this.C.innerHeight || this.C.height, 0),
            d = tc(document),
            e = Math.floor(c.left - d.x),
            f = Math.floor(c.top - d.y),
            g = Math.floor(c.h - d.x),
            h = Math.floor(c.g - d.y);
        c = a(e, f);
        d = a(g, h);
        if (c && d) return new K(f, g, h, e);
        var n = a(g, f),
            m = a(e, h);
        if (c) h = Z(f, h, function(q) {
            return a(e, q)
        }), g = Z(e, g, function(q) {
            return a(q, f)
        });
        else if (n) h = Z(f, h, function(q) {
            return a(g, q)
        }), e = Z(g, e, function(q) {
            return a(q, f)
        });
        else if (m) f = Z(h, f, function(q) {
            return a(e, q)
        }), g = Z(e, g, function(q) {
            return a(q, h)
        });
        else if (d) f = Z(h, f, function(q) {
            return a(g, q)
        }), e = Z(g, e, function(q) {
            return a(q, h)
        });
        else {
            var l = Math.floor((e + g) / 2),
                p = Math.floor((f + h) / 2);
            if (!a(l, p)) return new K(0, 0, 0, 0);
            f = Z(p, f, function(q) {
                return a(l, q)
            });
            h = Z(p, h, function(q) {
                return a(l, q)
            });
            e = Z(l, e, function(q) {
                return a(q, p)
            });
            g = Z(l, g, function(q) {
                return a(q, p)
            })
        }
        return new K(f, g, h, e)
    };

    function Z(a, b, c) {
        if (c(b)) return b;
        for (var d = 15; d--;) {
            var e = Math.floor((a + b) / 2);
            if (e == a || e == b) break;
            c(e) ? a = e : b = e
        }
        return a
    }
    k.Y = function() {
        return U.l().i && E && Mb(8) && ve(this.C)
    };
    k.Ga = function() {};
    k.Ha = function() {};
    k.ab = function() {};
    k.bb = function() {};
    x(ph);

    function qh() {
        V.call(this, G, 2, "mraid");
        this.N = 0;
        this.F = this.H = !1;
        this.m = null;
        this.h = ue(this.C);
        this.i.g = new K(0, 0, 0, 0);
        this.O = !1
    }
    v(qh, V);
    k = qh.prototype;
    k.Y = function() {
        return null != this.h.J
    };
    k.pb = function() {
        var a = {};
        this.N && (a.mraid = this.N);
        this.H && (a.mlc = 1);
        a.mtop = this.h.Wb;
        this.m && (a.mse = this.m);
        this.O && (a.msc = 1);
        a.mcp = this.h.za;
        return a
    };
    k.T = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        try {
            return this.h.J[a].apply(this.h.J, c)
        } catch (e) {
            le(538, e, .01, function(f) {
                f.method = a
            })
        }
    };

    function rh(a, b, c) {
        a.T("addEventListener", b, c)
    }
    k.Fa = function() {
        var a = this;
        if (this.A) return !this.ha();
        this.A = !0;
        if (2 === this.h.za) return this.m = "ng", Re(this, "w"), !1;
        if (1 === this.h.za) return this.m = "mm", Re(this, "w"), !1;
        U.l().D = !0;
        this.C.document.readyState && "complete" == this.C.document.readyState ? sh(this) : xe(this.C, "load", function() {
            Hd(Q(), je(292, function() {
                return sh(a)
            }), 100)
        }, 292);
        return !0
    };

    function sh(a) {
        R.l().m = !!a.T("isViewable");
        rh(a, "viewableChange", th);
        "loading" === a.T("getState") ? rh(a, "ready", uh) : vh(a)
    }

    function vh(a) {
        "string" === typeof a.h.J.AFMA_LIDAR ? (a.H = !0, wh(a)) : (a.h.za = 3, a.m = "nc", Re(a, "w"))
    }

    function wh(a) {
        a.F = !1;
        var b = 1 == id(R.l().g, "rmmt"),
            c = !!a.T("isViewable");
        (b ? !c : 1) && Hd(Q(), je(524, function() {
            a.F || (xh(a), le(540, Error()), a.m = "mt", Re(a, "w"))
        }), 500);
        yh(a);
        rh(a, a.h.J.AFMA_LIDAR, zh)
    }

    function yh(a) {
        var b = 1 == id(R.l().g, "sneio"),
            c = void 0 !== a.h.J.AFMA_LIDAR_EXP_1,
            d = void 0 !== a.h.J.AFMA_LIDAR_EXP_2;
        (b = b && d) && (a.h.J.AFMA_LIDAR_EXP_2 = !0);
        c && (a.h.J.AFMA_LIDAR_EXP_1 = !b)
    }

    function xh(a) {
        a.T("removeEventListener", a.h.J.AFMA_LIDAR, zh);
        a.H = !1
    }
    k.Ga = function() {
        var a = U.l(),
            b = Ah(this, "getMaxSize");
        a.g = new K(0, b.width, b.height, 0)
    };
    k.Ha = function() {
        U.l().s = Ah(this, "getScreenSize")
    };

    function Ah(a, b) {
        if ("loading" === a.T("getState")) return new I(-1, -1);
        b = a.T(b);
        if (!b) return new I(-1, -1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10);
        return isNaN(a) || isNaN(b) ? new I(-1, -1) : new I(a, b)
    }
    k.G = function() {
        xh(this);
        V.prototype.G.call(this)
    };

    function uh() {
        try {
            var a = qh.l();
            a.T("removeEventListener", "ready", uh);
            vh(a)
        } catch (b) {
            le(541, b)
        }
    }

    function zh(a, b) {
        try {
            var c = qh.l();
            c.F = !0;
            var d = a ? new K(a.y, a.x + a.width, a.y + a.height, a.x) : new K(0, 0, 0, 0);
            var e = T(),
                f = Oe();
            var g = new re(e, f, c);
            g.g = d;
            g.volume = b;
            c.W(g)
        } catch (h) {
            le(542, h)
        }
    }

    function th(a) {
        var b = R.l(),
            c = qh.l();
        a && !b.m && (b.m = !0, c.O = !0, c.m && Re(c, "w", !0))
    }
    x(qh);

    function Bh(a) {
        return (a = /[&\?#]exk=([^& ]+)/.exec(a)) && 2 == a.length ? a[1] : null
    };

    function Ch(a) {
        this.g = a;
        this.defaultValue = !1
    };
    var Dh = new Ch(160),
        Eh = new Ch(900),
        Fh = new Ch(382);
    var Gh = ["FRAME", "IMG", "IFRAME"],
        Hh = /^[01](px)?$/;

    function Ih(a, b, c) {
        var d = !0,
            e = !1;
        d = void 0 === d ? !0 : d;
        e = void 0 === e ? !1 : e;
        var f = void 0 === f ? !1 : f;
        if (a = "string" === typeof a ? document.getElementById(a) : a) {
            c || (c = function(ba, xb, yb) {
                ba.addEventListener(xb, yb)
            });
            for (var g = !1, h = function(ba) {
                    g || (g = !0, b(ba))
                }, n, m, l = 0; l < Gh.length; ++l)
                if (Gh[l] == a.tagName) {
                    m = 3;
                    n = [a];
                    break
                }
            n || (n = a.querySelectorAll(Gh.join(",")), m = 2);
            var p = 0,
                q = 0,
                u = a = !1;
            l = {};
            for (var r = 0; r < n.length; l = {
                    ma: l.ma
                }, r++) {
                var D = n[r];
                if (!("IMG" != D.tagName || !D.complete || D.naturalWidth && D.naturalHeight ? Hh.test(D.getAttribute("width")) && Hh.test(D.getAttribute("height")) : 1)) {
                    if ("IMG" == D.tagName) var sa = D.naturalWidth && D.naturalHeight ? !0 : !1;
                    else try {
                        sa = "complete" === (D.readyState ? D.readyState : D.contentWindow && D.contentWindow.document && D.contentWindow.document.readyState) ? !0 : !1
                    } catch (ba) {
                        sa = void 0 === e ? !1 : e
                    }
                    if (sa) a = !0;
                    else {
                        p++;
                        l.ma = "IMG" === D.tagName;
                        var Xa = function(ba) {
                            return function() {
                                p--;
                                p || h(m);
                                ba.ma && (q--, !q && u && h(m))
                            }
                        }(l);
                        c(D, "load", Xa);
                        l.ma && (q++, c(D, "error", Xa))
                    }
                }
            }
            n = null;
            if (0 === p && !a && "complete" === w.document.readyState) m = 5;
            else if (p || !a) {
                c(w, "load", function() {
                    f && q ? u = !0 : h(4)
                });
                return
            }
            d && h(m)
        }
    };

    function Jh(a) {
        this.methodName = a
    }
    var Kh = new Jh(15),
        Lh = new Jh(5),
        Mh = new Jh(6),
        Nh = new Jh(7),
        Oh = new Jh(8);

    function Ph(a, b, c) {
        return b[a.methodName] || c || function() {}
    };

    function Qh() {}
    x(Qh);

    function Rh() {
        var a = {};
        this.h = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.i = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.m = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.g = function() {}
    }
    x(Rh);

    function Sh(a) {
        return Rh.l().h(a.g, a.defaultValue)
    };

    function Th() {}
    x(Th);

    function Uh(a, b) {
        b = void 0 === b ? 0 : b;
        var c = Rh.l();
        c.h = function(d, e) {
            return Ph(Lh, a, function() {
                return !1
            })(d, e, b)
        };
        c.i = function(d, e) {
            return Ph(Mh, a, function() {
                return 0
            })(d, e, b)
        };
        c.j = function(d, e) {
            return Ph(Nh, a, function() {
                return ""
            })(d, e, b)
        };
        c.m = function(d, e) {
            return Ph(Oh, a, function() {
                return []
            })(d, e, b)
        };
        c.g = function() {
            Ph(Kh, a)(b)
        }
    };

    function Vh() {
        this.h = null;
        this.j = this.o = this.i = this.m = !1;
        Wh(this);
        mh()
    }

    function Xh() {
        var a = void 0,
            b = 4;
        if (void 0 === a) {
            var c = void 0 === c ? w : c;
            a = c.ggeac || (c.ggeac = {})
        }
        b = void 0 === b ? 0 : b;
        Qh.l();
        Uh(a, b);
        Th.l();
        Rh.l().g();
        b = R.l();
        Sh(Dh) && hd(b.g, "gtx", 1)
    }
    k = Vh.prototype;
    k.Ub = function(a) {
        this.m = a
    };
    k.rb = function() {
        Yh(this);
        Q();
        G.clearTimeout(this.h);
        this.h = null;
        oe = T();
        Zh(this)
    };

    function Yh(a) {
        R.l().i = 1;
        if (!(0 < oe)) {
            try {
                if (!$h(a)) return;
                dh();
                ai(a)
            } catch (b) {}
            a.h = Hd(Q(), je(129, function() {
                return Yh(a)
            }), 250)
        }
    }
    k.Vb = function(a, b, c, d, e, f, g, h, n) {
        var m = this;
        f = void 0 === f ? !1 : f;
        h = void 0 === h ? -1 : h;
        n = void 0 === n ? -1 : n;
        if (gh(G)) {
            var l = new gg(G, b, a, -1, c, g);
            l.ua = nh(l.D);
            e = R.l();
            0 < h && -1 == l.F && (l.F = h);
            0 <= n && (l.Na = n);
            l.La = function(p) {
                for (var q = [], u = 0; u < arguments.length; ++u) q[u] = arguments[u];
                return m.Sb.apply(m, t(q))
            };
            l.Mb = function(p) {
                for (var q = [], u = 0; u < arguments.length; ++u) q[u] = arguments[u];
                return m.Sa.apply(m, t(q))
            };
            13 != c && (l.A = kh(b), l.yb = Bh(b), l.Ka = lh(b));
            f && (l.Db = !0);
            hd(e.g, "oseid", Wf(this.g));
            X.g.push(l);
            ++Y.g.gb;
            e.h ? this.Sa(l, e.h) : ((b = Jg.l().g) && Of(l, b), Zh(this), e.h || (d ? (bi(l), l.ja()) : a && Ih(a, function() {
                l.ia() || (bi(l), l.ja())
            }, function(p, q, u) {
                xe(p, q, u, 130)
            }), Y.m || Y.j()))
        }
    };

    function ai(a) {
        ci(a);
        Uf(a.g, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.Vb.apply(a, t(c))
        }, function() {
            return a.m
        }, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.Ub.apply(a, t(c))
        })
    }

    function di(a) {
        R.l();
        var b = Sh(Fh),
            c = [ph.l()];
        b || c.push(qh.l());
        b = [Ug.l()];
        return [new Lg(c), new Tg(a), new Lg(b)]
    }

    function Zh(a) {
        if (!a.j) {
            a.j = !0;
            try {
                var b = L(),
                    c = U.l();
                R.l().o = 947190542;
                if ($h(a)) {
                    Y.g.hb = Vf(a.g);
                    var d = Jg.l();
                    if (null == d.h) {
                        var e = di(b);
                        d.h = e
                    }
                    if (Kg(d, function(g) {
                            return ei(a, g)
                        })) {
                        if (!Y.done) {
                            jh();
                            c.A = !0;
                            ai(a);
                            var f;
                            (f = U.l().j || A(B, "CrKey") || A(B, "PlayStation") || A(B, "Roku") || Ie() || A(B, "Xbox") || Je() || Ke()) || (Q(), f = 0 !== ud());
                            f ? (Zg(), ih(), fi(a), Rc()) : ei(a, "pv")
                        }
                    } else ei(a, "i")
                } else gi(a, "c")
            } catch (g) {
                throw ei(a, "x"), Gg(), g;
            }
        }
    }

    function fi(a) {
        if (-1 == Y.g.Aa) {
            L();
            var b = 2 == Wf(a.g);
            ah(b);
            Hd(Q(), je(131, function() {
                gi(a, "t")
            }), 36E5);
            Y.g.Aa = T() - oe
        }
    }

    function ei(a, b) {
        R.l().h = b;
        for (var c = ha(X.g), d = c.next(); !d.done; d = c.next()) d.value.u = !0;
        gi(a, b, !1)
    }

    function gi(a, b, c) {
        c = void 0 === c ? !0 : c;
        if (!Y.done) {
            Y.h.cancel();
            a.g || (a.g = new Sf);
            if (2 == Wf(a.g) || a.i)
                for (a = X.g, c && 0 < a.length && ch(Y, a, !0), c = ha(a), a = c.next(); !a.done; a = c.next()) {
                    a = a.value;
                    var d = {};
                    jg(a, 1, (d.r = b, d));
                    a.g && a.g.P()
                }
            Y.done = !0
        }
    }

    function $h(a) {
        if (!gh(L())) return !1;
        var b = new Sf;
        if (!(b.g || b.h || b.i)) return !1;
        a.g = b;
        return !0
    }
    k.Sa = function(a, b) {
        a.u = !0;
        var c = {};
        jg(a, 2, (c.r = b, c));
        a.g && a.g.P()
    };
    k.Sb = function(a) {
        a && W(a.i) && (0 >= Gf(Nf(a)) ? 0 : ng(a) && !a.Ab) && (Lc(a.N), a.Ab = !0)
    };

    function hi(a, b) {
        if (b && b.data && b.source) {
            var c = b.data;
            if ("string" !== typeof c) var d = null;
            else {
                d = {};
                c = c.split("\n");
                for (var e = 0; e != c.length; ++e) {
                    var f = c[e],
                        g = f.indexOf("=");
                    if (!(0 >= g)) {
                        var h = Number(f.substr(0, g));
                        f = f.substr(g + 1);
                        switch (h) {
                            case 36:
                            case 8:
                            case 11:
                            case 16:
                            case 5:
                            case 18:
                                f = "true" == f;
                                break;
                            case 4:
                            case 33:
                            case 6:
                            case 25:
                            case 28:
                            case 29:
                            case 24:
                            case 31:
                            case 30:
                            case 23:
                            case 22:
                            case 7:
                            case 21:
                            case 20:
                                f = Number(f);
                                break;
                            case 3:
                                if ("function" === typeof decodeURIComponent) try {
                                    f = decodeURIComponent(f)
                                } catch (n) {
                                    throw Error("Error: URI malformed: " + f);
                                }
                        }
                        d[h] = f
                    }
                }
                d = d[0] ? d : null
            }
            if (c = d)
                if (e = c[0], Fa("goog_creative_loaded goog_dom_content_loaded goog_listener_status goog_maybe_stop_monitoring goog_provide_mode goog_request_monitoring goog_stop_monitoring".split(" "), e) && (d = Cg(new rd(c[4], c[12]))))
                    if (h = c[33], 0 < h && -1 == d.xa && (d.xa = h), "goog_stop_monitoring" === e) Ig(d);
                    else if ("goog_maybe_stop_monitoring" !== e || void 0 !== d.da) {
                if (Fa(d.ba, b.source) || d.ba.push(b.source), "goog_request_monitoring" === e || !d.Hb)
                    if (d.Hb = !0, void 0 !== c[16] && (d.ea = !!c[16]), void 0 !== c[6]) {
                        c = c[6];
                        b = ii(c, d.D);
                        if (b != d.D) {
                            if (5 == b) {
                                d.u = !0;
                                Ig(d);
                                return
                            }
                            d.D = b;
                            d.ua = nh(b)
                        }
                        b = Sh(Eh);
                        4 != c || b || d.ja();
                        c = U.l();
                        e = mg(d, "goog_acknowledge_monitoring");
                        e[8] = c.i;
                        e[36] = c.F;
                        He(d.h.h, e, d.ba);
                        c = R.l();
                        d.u && c.h ? (a.Sa(d, c.h), Ig(d)) : b || (a.i = !0)
                    }
            } else Ig(d)
        }
    }

    function bi(a) {
        if (a && lg(a).i()) {
            var b = mg(a, "goog_get_mode");
            He(a.h.h, b)
        }
    }

    function ci(a) {
        if (!a.o) {
            xe(G, "message", function(c) {
                return hi(a, c)
            }, 132);
            var b = ji().contentWindow;
            b && xe(b, "message", function(c) {
                return hi(a, c)
            }, 132);
            a.o = !0
        }
    }

    function ki(a) {
        xe(L(), "unload", function() {
            gi(a, "u")
        }, 133)
    }

    function ii(a, b) {
        return Da([5, 2, 4, 3, 1, 0], function(c) {
            return c === a || c === b
        }) || 0
    }
    k.Nb = function(a) {
        (a = Dg(a)) && Ig(a)
    };
    k.Ob = function(a, b) {
        a && b && ra(a) && 1 == a.nodeType && ra(b) && 1 == b.nodeType && (a = Dg(a)) && (L(), Mf(a), a.h.g = b, Rf(a), hg(a, b), a.g && (a = a.g, a.P(), a.h = b, a.na(), a.Z()))
    };

    function ji() {
        var a = vc("IFRAME", {
            id: "google_osd_static_frame_" + Math.floor(1E13 * Math.random()),
            name: "google_osd_static_frame"
        });
        a.style.display = "none";
        a.style.width = "0px";
        a.style.height = "0px";
        G.document.body.appendChild(a);
        return a
    }

    function Wh(a) {
        ua("Goog_Osd_UnloadAdBlock", je(134, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.Nb.apply(a, t(c))
        }));
        ua("Goog_Osd_UpdateElementToMeasure", je(135, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.Ob.apply(a, t(c))
        }))
    };
    ie(155, function() {
        Xh();
        var a = new Vh;
        Y.o = "osd";
        ki(a);
        Sc() ? a.rb() : (Yh(a), xe(L(), "load", function() {
            Hd(Q(), je(153, function(b) {
                for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
                return a.rb.apply(a, t(c))
            }), 100)
        }, 154))
    });
}).call(this, this, this.document);