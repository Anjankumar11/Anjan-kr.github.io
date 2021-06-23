(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var aa = {},
        r = this || self;

    function ba() {}

    function ca(a) {
        a.Fb = void 0;
        a.V = function() {
            return a.Fb ? a.Fb : a.Fb = new a
        }
    }

    function ea(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function fa(a) {
        return Object.prototype.hasOwnProperty.call(a, ha) && a[ha] || (a[ha] = ++ja)
    }
    var ha = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ja = 0;

    function ka(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function la(a, b, c) {
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

    function ma(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ma = ka : ma = la;
        return ma.apply(null, arguments)
    }

    function na(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function oa() {
        return Date.now()
    }

    function pa(a, b) {
        a = a.split(".");
        var c = r;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function qa(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Eh = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.wh = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function ra(a) {
        return a
    };

    function sa(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, sa);
        else {
            const b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    qa(sa, Error);
    sa.prototype.name = "CustomError";
    var ta;

    function ua(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        sa.call(this, c + a[d])
    }
    qa(ua, sa);
    ua.prototype.name = "AssertionError";

    function va(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function wa(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function ya(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = "string" === typeof a ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function za(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Aa(a, b, c) {
        let d = c;
        wa(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Ba(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Ca(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return e;
        return -1
    }

    function Da(a, b) {
        return 0 <= va(a, b)
    }

    function Ea(a, b) {
        b = va(a, b);
        let c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function Fa(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Ga(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Ha(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function Ia(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = Ia.apply(null, Ha(d, e, e + 8192));
                    for (let g = 0; g < f.length; g++) b.push(f[g])
                } else b.push(d)
        }
        return b
    }

    function Ja(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; 0 < c; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };

    function Ka() {
        return !1
    }

    function La() {
        return !0
    }

    function Ma(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function Na(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Oa(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Pa(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function Qa(a, b) {
        let c = 0;
        return function(d) {
            r.clearTimeout(c);
            const e = arguments;
            c = r.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function Ra(a, b) {
        function c() {
            e = r.setTimeout(d, 63);
            let h = g;
            g = [];
            a.apply(b, h)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };

    function Sa(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Ta(a) {
        var b = Ua;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function Va(a) {
        let b = 0;
        for (const c in a) b++
    }

    function Wa(a, b) {
        return null !== a && b in a
    }

    function Xa(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const Ya = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Za(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < Ya.length; f++) c = Ya[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var $a = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var ab;

    function bb() {
        if (void 0 === ab) {
            var a = null,
                b = r.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ra,
                        createScript: ra,
                        createScriptURL: ra
                    })
                } catch (c) {
                    r.console && r.console.error(c.message)
                }
                ab = a
            } else ab = a
        }
        return ab
    };

    function db(a, b) {
        this.l = a === eb && b || "";
        this.B = fb
    }
    db.prototype.ga = !0;
    db.prototype.j = function() {
        return this.l
    };

    function gb(a) {
        return a instanceof db && a.constructor === db && a.B === fb ? a.l : "type_error:Const"
    }

    function hb(a) {
        return new db(eb, a)
    }
    var fb = {},
        eb = {};
    var jb = class {
        constructor(a, b) {
            this.B = b === ib ? a : ""
        }
    };
    jb.prototype.ga = !0;
    jb.prototype.j = function() {
        return this.B.toString()
    };
    jb.prototype.A = !0;
    jb.prototype.l = function() {
        return 1
    };

    function kb(a, b) {
        a = lb.exec(mb(a).toString());
        var c = a[3] || "";
        return nb(a[1] + ob("?", a[2] || "", b) + ob("#", c, void 0))
    }
    jb.prototype.toString = function() {
        return this.B + ""
    };

    function mb(a) {
        return a instanceof jb && a.constructor === jb ? a.B : "type_error:TrustedResourceUrl"
    }

    function pb(a, b) {
        var c = gb(a);
        if (!qb.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(rb, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof db ? gb(d) : encodeURIComponent(String(d))
        });
        return nb(a)
    }
    var rb = /%{(\w+)}/g,
        qb = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
        lb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        ib = {};

    function nb(a) {
        const b = bb();
        a = b ? b.createScriptURL(a) : a;
        return new jb(a, ib)
    }

    function ob(a, b, c) {
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

    function sb(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function tb(a) {
        if (!ub.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(vb, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(wb, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(xb, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(yb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(zb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ab, "&#0;"));
        return a
    }
    var vb = /&/g,
        wb = /</g,
        xb = />/g,
        yb = /"/g,
        zb = /'/g,
        Ab = /\x00/g,
        ub = /[\x00&<>"']/;

    function Bb(a, b) {
        let c = 0;
        a = sb(String(a)).split(".");
        b = sb(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length) break;
                c = Cb(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || Cb(0 == e[2].length, 0 == f[2].length) || Cb(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }

    function Cb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var Eb = class {
        constructor(a, b) {
            this.B = b === Db ? a : ""
        }
    };
    Eb.prototype.ga = !0;
    Eb.prototype.j = function() {
        return this.B.toString()
    };
    Eb.prototype.A = !0;
    Eb.prototype.l = function() {
        return 1
    };
    Eb.prototype.toString = function() {
        return this.B.toString()
    };

    function Fb(a) {
        return a instanceof Eb && a.constructor === Eb ? a.B : "type_error:SafeUrl"
    }
    var Gb = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
        Hb = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;

    function Ib(a) {
        a = String(a);
        a = a.replace(/(%0A|%0D)/g, "");
        var b = a.match(Hb);
        return b && Gb.test(b[1]) ? new Eb(a, Db) : null
    }
    var Jb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Kb(a) {
        if (a instanceof Eb) return a;
        a = "object" == typeof a && a.ga ? a.j() : String(a);
        return Jb.test(a) ? new Eb(a, Db) : Ib(a)
    }

    function Lb(a, b) {
        if (a instanceof Eb) return a;
        a = "object" == typeof a && a.ga ? a.j() : String(a);
        if (b && /^data:/i.test(a) && (b = Ib(a) || Mb, b.j() == a)) return b;
        Jb.test(a) || (a = "about:invalid#zClosurez");
        return new Eb(a, Db)
    }
    var Db = {},
        Mb = new Eb("about:invalid#zClosurez", Db);
    var Ob = class {
        constructor(a, b) {
            this.l = b === Nb ? a : ""
        }
    };
    Ob.prototype.ga = !0;
    Ob.prototype.j = function() {
        return this.l
    };
    Ob.prototype.toString = function() {
        return this.l.toString()
    };
    var Nb = {},
        Pb = new Ob("", Nb);

    function Qb(a) {
        if (a instanceof Eb) return 'url("' + Fb(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof db) a = gb(a);
        else {
            a = String(a);
            var b = a.replace(Rb, "$1").replace(Rb, "$1").replace(Sb, "url");
            if (Tb.test(b)) {
                if (b = !Ub.test(a)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && Vb(a)
                }
                a = b ? Wb(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new ua("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function Vb(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    var Tb = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
        Sb = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
        Rb = /\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
        Ub = /\/\*/;

    function Wb(a) {
        return a.replace(Sb, function(b, c, d, e) {
            var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function(g, h, k) {
                f = h;
                return k
            });
            b = (Kb(d) || Mb).j();
            return c + f + b + f + e
        })
    };
    var Xb;
    a: {
        var Yb = r.navigator;
        if (Yb) {
            var Zb = Yb.userAgent;
            if (Zb) {
                Xb = Zb;
                break a
            }
        }
        Xb = ""
    }

    function t(a) {
        return -1 != Xb.indexOf(a)
    }

    function $b(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };

    function ac() {
        return t("Opera")
    }

    function bc() {
        return t("Trident") || t("MSIE")
    }

    function cc() {
        return t("Firefox") || t("FxiOS")
    }

    function dc() {
        return t("Safari") && !(ec() || t("Coast") || ac() || t("Edge") || t("Edg/") || t("OPR") || cc() || t("Silk") || t("Android"))
    }

    function ec() {
        return (t("Chrome") || t("CriOS")) && !t("Edge")
    }

    function fc() {
        function a(e) {
            const f = Ca(e, d);
            return c[0 > f ? null : "string" === typeof e ? e.charAt(f) : e[f]] || ""
        }
        var b = Xb;
        if (bc()) return gc(b);
        b = $b(b);
        var c = {};
        wa(b, function(e) {
            c[e[0]] = e[1]
        });
        var d = na(Wa, c);
        return ac() ? a(["Version", "Opera"]) : t("Edge") ? a(["Edge"]) : t("Edg/") ? a(["Edg"]) : ec() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (b = b[2]) && b[1] || ""
    }

    function gc(a) {
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
    var ic = class {
        constructor(a, b, c) {
            this.B = c === hc ? a : "";
            this.C = b
        }
    };
    ic.prototype.A = !0;
    ic.prototype.l = function() {
        return this.C
    };
    ic.prototype.ga = !0;
    ic.prototype.j = function() {
        return this.B.toString()
    };
    ic.prototype.toString = function() {
        return this.B.toString()
    };

    function jc(a) {
        return a instanceof ic && a.constructor === ic ? a.B : "type_error:SafeHtml"
    }

    function kc(a) {
        if (a instanceof ic) return a;
        var b = "object" == typeof a,
            c = null;
        b && a.A && (c = a.l());
        return lc(tb(b && a.ga ? a.j() : String(a)), c)
    }
    var mc = /^[a-zA-Z0-9-]+$/,
        nc = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        oc = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };

    function pc(a) {
        function b(f) {
            Array.isArray(f) ? wa(f, b) : (f = kc(f), e.push(jc(f).toString()), f = f.l(), 0 == d ? d = f : 0 != f && d != f && (d = null))
        }
        var c = kc(qc),
            d = c.l(),
            e = [];
        wa(a, b);
        return lc(e.join(jc(c).toString()), d)
    }

    function rc(a) {
        return pc(Array.prototype.slice.call(arguments))
    }
    var hc = {};

    function lc(a, b) {
        const c = bb();
        a = c ? c.createHTML(a) : a;
        return new ic(a, b, hc)
    }
    var sc = lc("<!DOCTYPE html>", 0),
        qc = new ic(r.trustedTypes && r.trustedTypes.emptyHTML || "", 0, hc);
    var tc = Oa(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = jc(qc);
        return !b.parentElement
    });

    function uc(a, b) {
        if (tc())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = jc(b)
    }

    function vc(a, b) {
        b = b instanceof Eb ? b : Lb(b, /^data:image\//i.test(b));
        a.src = Fb(b)
    }
    var wc = /^[\w+/_-]+[=]{0,2}$/;

    function xc() {
        var a = r.document;
        return a.querySelector ? (a = a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && wc.test(a) ? a : "" : ""
    };

    function yc(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : r.document.createElement("div");
        return a.replace(zc, function(e, f) {
            var g = c[e];
            if (g) return g;
            "#" == f.charAt(0) && (f = Number("0" + f.substr(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = lc(e + " ", null), uc(d, g), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var zc = /&([^;\s<&]+);?/g;

    function Ac(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function Bc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function Cc(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function Dc(a) {
        Dc[" "](a);
        return a
    }
    Dc[" "] = ba;

    function Ec(a, b) {
        try {
            return Dc(a[b]), !0
        } catch (c) {}
        return !1
    }

    function Fc(a, b) {
        var c = Gc;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var Hc = ac(),
        Ic = bc(),
        Jc = t("Edge"),
        Kc = Jc || Ic,
        Lc = t("Gecko") && !(-1 != Xb.toLowerCase().indexOf("webkit") && !t("Edge")) && !(t("Trident") || t("MSIE")) && !t("Edge"),
        Mc = -1 != Xb.toLowerCase().indexOf("webkit") && !t("Edge");

    function Nc() {
        var a = r.document;
        return a ? a.documentMode : void 0
    }
    var Oc;
    a: {
        var Pc = "",
            Qc = function() {
                var a = Xb;
                if (Lc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Jc) return /Edge\/([\d\.]+)/.exec(a);
                if (Ic) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Mc) return /WebKit\/(\S+)/.exec(a);
                if (Hc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Qc && (Pc = Qc ? Qc[1] : "");
        if (Ic) {
            var Rc = Nc();
            if (null != Rc && Rc > parseFloat(Pc)) {
                Oc = String(Rc);
                break a
            }
        }
        Oc = Pc
    }
    var Sc = Oc,
        Gc = {};

    function Tc(a) {
        return Fc(a, function() {
            return 0 <= Bb(Sc, a)
        })
    }
    var Uc;
    if (r.document && Ic) {
        var Vc = Nc();
        Uc = Vc ? Vc : parseInt(Sc, 10) || void 0
    } else Uc = void 0;
    var Wc = Uc;
    var Xc = {},
        Yc = null;

    function Zc(a, b) {
        void 0 === b && (b = 0);
        if (!Yc) {
            Yc = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                Xc[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Yc[h] && (Yc[h] = g)
                }
            }
        }
        b = Xc[b];
        c = [];
        for (d = 0; d < a.length; d += 3) {
            var k = a[d],
                l = (e = d + 1 < a.length) ? a[d + 1] : 0;
            h = (f = d + 2 < a.length) ? a[d + 2] : 0;
            g = k >> 2;
            k = (k & 3) << 4 | l >> 4;
            l = (l & 15) << 2 | h >> 6;
            h &= 63;
            f || (h = 64, e || (l = 64));
            c.push(b[g], b[k], b[l] || "", b[h] || "")
        }
        return c.join("")
    }

    function $c(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return Zc(b, 3)
    };
    var ad = "function" === typeof Uint8Array;

    function bd(a) {
        let b;
        if (Array.isArray(a)) {
            var c = Array(a.length);
            for (var d = 0; d < a.length; d++) b = a[d], null != b && (c[d] = "object" == typeof b ? bd(b) : b);
            return c
        }
        if (ad && a instanceof Uint8Array) return new Uint8Array(a);
        c = {};
        for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (b = a[d], null != b && (c[d] = "object" == typeof b ? bd(b) : b));
        return c
    };

    function w() {}
    let cd;

    function x(a, b, c, d) {
        a.j = null;
        cd && (b || (b = cd), cd = null);
        var e = a.constructor.messageId,
            f = a.constructor.zh;
        f = e || f;
        b || (b = f ? [e] : []);
        a.C = f ? 0 : -1;
        a.A = b;
        a: {
            if (b = a.A.length)
                if (--b, e = a.A[b], !(null === e || "object" != typeof e || Array.isArray(e) || ad && e instanceof Uint8Array)) {
                    a.D = b - a.C;
                    a.B = e;
                    break a
                }
            a.D = Number.MAX_VALUE
        }
        a.H = {};
        if (c)
            for (b = 0; b < c.length; b++) e = c[b], e < a.D ? (e += a.C, a.A[e] = a.A[e] || dd) : (ed(a), a.B[e] = a.B[e] || dd);
        if (d && d.length)
            for (e = 0; e < d.length; e++) {
                {
                    let g = f = void 0;
                    c = a;
                    b = d[e];
                    for (let h = 0; h < b.length; h++) {
                        let k =
                            b[h],
                            l = y(c, k);
                        null != l && (g = k, f = l, z(c, k, void 0))
                    }
                    g && z(c, g, f)
                }
            }
    }
    const dd = Object.freeze([]);

    function ed(a) {
        let b = a.D + a.C;
        a.A[b] || (a.B = a.A[b] = {})
    }

    function y(a, b) {
        if (b < a.D) {
            b += a.C;
            var c = a.A[b];
            return c !== dd ? c : a.A[b] = []
        }
        if (a.B) return c = a.B[b], c === dd ? a.B[b] = [] : c
    }

    function E(a, b) {
        return null != y(a, b)
    }

    function fd(a, b) {
        a = y(a, b);
        return null == a ? a : +a
    }

    function G(a, b) {
        a = y(a, b);
        return null == a ? a : !!a
    }

    function gd(a, b, c) {
        a = y(a, b);
        return null == a ? c : a
    }

    function H(a, b) {
        return gd(a, b, "")
    }

    function hd(a, b, c = !1) {
        a = G(a, b);
        return null == a ? c : a
    }

    function z(a, b, c) {
        b < a.D ? a.A[b + a.C] = c : (ed(a), a.B[b] = c);
        return a
    }

    function id(a, b) {
        return jd(a, b, 1, 0)
    }

    function jd(a, b, c, d) {
        c !== d ? z(a, b, c) : b < a.D ? a.A[b + a.C] = null : (ed(a), delete a.B[b]);
        return a
    }

    function J(a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            let d = y(a, c);
            d && (a.j[c] = new b(d))
        }
        return a.j[c]
    }

    function K(a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            let d = y(a, c),
                e = [];
            for (let f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.j[c] = e
        }
        b = a.j[c];
        b == dd && (b = a.j[c] = []);
        return b
    }

    function kd(a, b, c) {
        a.j || (a.j = {});
        let d = c ? ld(c) : c;
        a.j[b] = c;
        return z(a, b, d)
    }

    function ld(a) {
        if (a.j)
            for (var b in a.j)
                if (Object.prototype.hasOwnProperty.call(a.j, b)) {
                    var c = a.j[b];
                    if (Array.isArray(c))
                        for (var d = 0; d < c.length; d++) c[d] && ld(c[d]);
                    else c && ld(c)
                }
        return a.A
    }
    w.prototype.F = ad ? function() {
        var a = Uint8Array.prototype.toJSON;
        Uint8Array.prototype.toJSON = function() {
            return Zc(this)
        };
        try {
            return JSON.stringify(this.A && ld(this), md)
        } finally {
            Uint8Array.prototype.toJSON = a
        }
    } : function() {
        return JSON.stringify(this.A && ld(this), md)
    };

    function md(a, b) {
        return "number" !== typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b)
    }

    function nd(a, b) {
        cd = b = b ? JSON.parse(b) : null;
        a = new a(b);
        cd = null;
        return a
    };

    function od(a, b) {
        var c = void 0;
        return new(c || (c = Promise))(function(d, e) {
            function f(k) {
                try {
                    h(b.next(k))
                } catch (l) {
                    e(l)
                }
            }

            function g(k) {
                try {
                    h(b["throw"](k))
                } catch (l) {
                    e(l)
                }
            }

            function h(k) {
                k.done ? d(k.value) : (new c(function(l) {
                    l(k.value)
                })).then(f, g)
            }
            h((b = b.apply(a, void 0)).next())
        })
    };
    var pd = hb("https://tpc.googlesyndication.com/sodar/%{basename}.js");
    var qd = {};

    function rd() {
        if (qd !== qd) throw Error("Bad secret");
    };

    function sd() {
        var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
        return null !== a && void 0 !== a ? a : null
    }
    let ud;

    function vd() {
        var a, b;
        void 0 === ud && (ud = null !== (b = null === (a = sd()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
            createHTML: c => c,
            createScript: c => c,
            createScriptURL: c => c
        })) && void 0 !== b ? b : null);
        return ud
    };
    var wd = class {};
    class xd extends wd {
        constructor(a) {
            super();
            rd();
            this.j = a
        }
        toString() {
            return this.j.toString()
        }
    };
    var yd = class {};
    class zd extends yd {
        constructor(a) {
            super();
            rd();
            this.j = a
        }
        toString() {
            return this.j
        }
    }
    var Ad = new zd("about:invalid#zTSz");
    var Bd = class {};
    class Cd extends Bd {
        constructor(a) {
            super();
            rd();
            this.j = a
        }
        toString() {
            return this.j.toString()
        }
    }

    function Dd(a) {
        var b;
        const c = null === (b = vd()) || void 0 === b ? void 0 : b.createScriptURL(a);
        return new Cd(null !== c && void 0 !== c ? c : a)
    };

    function Ed(a) {
        if (a instanceof Bd) {
            var b;
            if (null === (b = sd()) || void 0 === b || !b.isScriptURL(a))
                if (a instanceof Cd) a = a.j;
                else throw Error("wrong type");
        } else a = mb(a);
        return a
    }

    function Fd(a) {
        if (a instanceof yd)
            if (a instanceof zd) a = a.j;
            else throw Error("wrong type");
        else a = Fb(a);
        return a
    };

    function Gd(a, b) {
        a.src = Ed(b);
        var c;
        b = (a.ownerDocument && a.ownerDocument.defaultView || window).document;
        (c = (b = null === (c = b.querySelector) || void 0 === c ? void 0 : c.call(b, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    };
    var Hd = {
            passive: !0
        },
        Id = Oa(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                r.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Jd(a) {
        return a ? a.passive && Id() ? a : a.capture || !1 : !1
    }

    function L(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Jd(d)), !0) : !1
    }

    function Kd(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Jd(d)), !0) : !1
    };

    function Ld(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                var g;
                f.onload = null;
                f.onerror = null;
                null === (g = f.parentElement) || void 0 === g ? void 0 : g.removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            Gd(f, a);
            "complete" !== b.document.readyState ? L(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };

    function Md(a) {
        return od(this, function*() {
            var b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.j}` + `&tv=${a.l}&st=` + `${a.xa}`;
            let c = void 0;
            try {
                c = yield Nd(b)
            } catch (f) {}
            if (c) {
                b = a.Ga || c.sodar_query_id;
                var d = void 0 === c.rc_enable ? "n" : c.rc_enable,
                    e = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
                if (b && c.bg_hash_basename && c.bg_binary) return {
                    context: a.A,
                    dd: c.bg_hash_basename,
                    cd: c.bg_binary,
                    xd: a.j + "_" + a.l,
                    Ga: b,
                    xa: a.xa,
                    jb: d,
                    rb: e
                }
            }
        })
    }
    let Nd = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });

    function Od(a) {
        od(this, function*() {
            const b = yield Md(a);
            if (b) {
                var c = window,
                    d = c.GoogleGcLKhOms;
                d && "function" === typeof d.push || (d = c.GoogleGcLKhOms = []);
                d.push({
                    ["_ctx_"]: b.context,
                    ["_bgv_"]: b.dd,
                    ["_bgp_"]: b.cd,
                    ["_li_"]: b.xd,
                    ["_jk_"]: b.Ga,
                    ["_st_"]: b.xa,
                    ["_rc_"]: b.jb,
                    ["_dl_"]: b.rb
                });
                if (d = c.GoogleDX5YKUSk) c.GoogleDX5YKUSk = void 0, d[1]();
                c = pb(pd, {
                    basename: "sodar2"
                });
                Ld(c)
            }
            return b
        })
    };

    function Pd(a, b) {
        return kd(a, 5, b)
    }

    function Qd(a, b) {
        return jd(a, 3, b, "")
    }
    var Rd = class extends w {
        constructor() {
            super();
            x(this, void 0, null, null)
        }
    };

    function Sd(a, b) {
        return jd(a, 1, b, "")
    }
    var Td = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };

    function Ud(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            default:
                return "unk"
        }
    }
    var Vd = class {
            constructor(a) {
                this.j = a.j;
                this.l = a.l;
                this.A = a.A;
                this.Ga = a.Ga;
                this.$ = a.M();
                this.xa = a.xa;
                this.jb = a.jb;
                this.rb = a.rb
            }
        },
        Wd = class {
            constructor(a, b, c) {
                this.j = a;
                this.l = b;
                this.A = c;
                this.$ = window;
                this.xa = "env";
                this.jb = "n";
                this.rb = "0"
            }
            M() {
                return this.$
            }
        };
    var Yd = class extends w {
            constructor(a) {
                super();
                x(this, a, Xd, null)
            }
        },
        Xd = [2, 3];
    var Zd = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };
    var $d = {
        ee: "google_adtest",
        ie: "google_ad_client",
        je: "google_ad_format",
        le: "google_ad_height",
        ze: "google_ad_width",
        qe: "google_ad_layout",
        re: "google_ad_layout_key",
        se: "google_ad_output",
        te: "google_ad_region",
        we: "google_ad_slot",
        xe: "google_ad_type",
        ye: "google_ad_url",
        Ae: "google_allow_expandable_ads",
        Oe: "google_analytics_domain_name",
        Pe: "google_analytics_uacct",
        df: "google_container_id",
        pf: "google_gl",
        Jf: "google_enable_ose",
        Rf: "google_full_width_responsive",
        Jg: "google_rl_filtering",
        Ig: "google_rl_mode",
        Kg: "google_rt",
        Hg: "google_rl_dest_url",
        ug: "google_max_radlink_len",
        zg: "google_num_radlinks",
        Ag: "google_num_radlinks_per_unit",
        he: "google_ad_channel",
        tg: "google_max_num_ads",
        vg: "google_max_responsive_height",
        Ye: "google_color_border",
        If: "google_enable_content_recommendations",
        lf: "google_content_recommendation_ui_type",
        kf: "google_source_type",
        jf: "google_content_recommendation_rows_num",
        hf: "google_content_recommendation_columns_num",
        gf: "google_content_recommendation_ad_positions",
        mf: "google_content_recommendation_use_square_imgs",
        $e: "google_color_link",
        Ze: "google_color_line",
        cf: "google_color_url",
        fe: "google_ad_block",
        ve: "google_ad_section",
        ge: "google_ad_callback",
        Ve: "google_captcha_token",
        bf: "google_color_text",
        Me: "google_alternate_ad_url",
        pe: "google_ad_host_tier_id",
        We: "google_city",
        me: "google_ad_host",
        ne: "google_ad_host_channel",
        Ne: "google_alternate_color",
        Xe: "google_color_bg",
        Kf: "google_encoding",
        Pf: "google_font_face",
        sf: "google_cust_ch",
        vf: "google_cust_job",
        uf: "google_cust_interests",
        tf: "google_cust_id",
        wf: "google_cust_u_url",
        Tf: "google_hints",
        hg: "google_image_size",
        wg: "google_mtl",
        ph: "google_cpm",
        ff: "google_contents",
        yg: "google_native_settings_key",
        nf: "google_country",
        gh: "google_targeting",
        Qf: "google_font_size",
        zf: "google_disable_video_autoplay",
        uh: "google_video_product_type",
        th: "google_video_doc_id",
        sh: "google_cust_gender",
        ah: "google_cust_lh",
        $g: "google_cust_l",
        oh: "google_tfs",
        xg: "google_native_ad_template",
        mg: "google_kw",
        bh: "google_tag_for_child_directed_treatment",
        eh: "google_tag_for_under_age_of_consent",
        Mg: "google_region",
        rf: "google_cust_criteria",
        ue: "google_safe",
        qf: "google_ctr_threshold",
        Ng: "google_resizing_allowed",
        Pg: "google_resizing_width",
        Og: "google_resizing_height",
        rh: "google_cust_age",
        LANGUAGE: "google_language",
        ng: "google_kw_type",
        Fg: "google_pucrd",
        Eg: "google_page_url",
        fh: "google_tag_partner",
        Tg: "google_restrict_data_processing",
        be: "google_adbreak_test",
        ke: "google_ad_frequency_hint",
        ce: "google_admob_interstitial_slot",
        de: "google_admob_rewarded_slot",
        sg: "google_max_ad_content_rating"
    };
    var ae = a => {
            a.google_ad_modifications || (a.google_ad_modifications = {});
            return a.google_ad_modifications
        },
        be = a => {
            a = ae(a);
            a.eids || (a.eids = []);
            return a.eids
        },
        ce = (a, b) => {
            a = ae(a);
            a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
            const c = !a.processed_sra_frame_pingbacks[b];
            a.processed_sra_frame_pingbacks[b] = !0;
            return c
        };
    var ee = class extends w {
            constructor(a) {
                super();
                x(this, a, de, null)
            }
        },
        fe = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        he = class extends w {
            constructor(a) {
                super();
                x(this, a, ge, null)
            }
        },
        de = [2],
        ge = [2];
    class ie {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    var je = Ic && !Tc("9");

    function ke(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function le(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function me(a) {
        return le.apply(null, arguments) / arguments.length
    };

    function ne(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    ne.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    ne.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    ne.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function oe(a, b) {
        this.width = a;
        this.height = b
    }
    oe.prototype.aspectRatio = function() {
        return this.width / this.height
    };
    oe.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    oe.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    oe.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function pe(a) {
        return a ? new qe(re(a)) : ta || (ta = new qe)
    }

    function se(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new oe(a.clientWidth, a.clientHeight)
    }

    function te(a) {
        var b = a.scrollingElement ? a.scrollingElement : Mc || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return Ic && Tc("10") && a.pageYOffset != b.scrollTop ? new ne(b.scrollLeft, b.scrollTop) : new ne(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function ue(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function ve(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function we(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    }

    function re(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    var xe = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        ye = {
            IMG: " ",
            BR: "\n"
        };

    function ze(a) {
        if (je && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            Ae(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        je || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function Ae(a, b, c) {
        if (!(a.nodeName in xe))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in ye) b.push(ye[a.nodeName]);
        else
            for (a = a.firstChild; a;) Ae(a, b, c), a = a.nextSibling
    }

    function Be(a, b, c, d) {
        if (!b && !c) return null;
        var e = b ? String(b).toUpperCase() : null;
        return Ce(a, function(f) {
            return (!e || f.nodeName == e) && (!c || "string" === typeof f.className && Da(f.className.split(/\s+/), c))
        }, d)
    }

    function Ce(a, b, c) {
        for (var d = 0; a && (null == c || d <= c);) {
            if (b(a)) return a;
            a = a.parentNode;
            d++
        }
        return null
    }

    function qe(a) {
        this.j = a || r.document || document
    }

    function De(a, b) {
        return ve(a.j, b)
    }
    qe.prototype.M = function() {
        var a = this.j;
        return a.parentWindow || a.defaultView
    };
    qe.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    qe.prototype.l = we;

    function Ee() {
        return !(t("iPad") || t("Android") && !t("Mobile") || t("Silk")) && (t("iPod") || t("iPhone") || t("Android") || t("IEMobile"))
    };
    var Fe = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function Ge(a) {
        try {
            return !!a && null != a.location.href && Ec(a, "foo")
        } catch (b) {
            return !1
        }
    }

    function He(a, b, c, d) {
        d = d || r;
        c && (d = Le(d));
        for (c = 0; d && 40 > c++ && (!b && !Ge(d) || !a(d));) d = Le(d)
    }

    function Le(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch (b) {}
        return null
    }

    function Me(a, b) {
        const c = a.createElement("script");
        Gd(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function Ne(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Oe(a, b) {
        if (!Pe()) {
            let c = Math.random();
            if (c < b) return c = Qe(r), a[Math.floor(c * a.length)]
        }
        return null
    }

    function Qe(a) {
        if (!a.crypto) return Math.random();
        try {
            const b = new Uint32Array(1);
            a.crypto.getRandomValues(b);
            return b[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function Re(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function Se(a) {
        const b = [];
        Re(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Te(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Pe = Oa(() => Ba(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Ue) || 1E-4 > Math.random());
    const Ue = a => -1 != Xb.indexOf(a);
    var Ve = /^([0-9.]+)px$/,
        We = /^(-?[0-9.]{1,30})$/;

    function Xe(a, b) {
        return We.test(a) && (a = Number(a), !isNaN(a)) ? a : void 0 == b ? null : b
    }

    function Ye(a) {
        return /^true$/.test(a)
    }

    function Ze(a) {
        return (a = Ve.exec(a)) ? +a[1] : null
    }

    function $e() {
        var a = r.document.URL;
        if (!a) return "";
        const b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            const c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (c) {}
        return ""
    }
    var af = {
        Be: "allow-forms",
        Ce: "allow-modals",
        De: "allow-orientation-lock",
        Ee: "allow-pointer-lock",
        Fe: "allow-popups",
        Ge: "allow-popups-to-escape-sandbox",
        He: "allow-presentation",
        Ie: "allow-same-origin",
        Je: "allow-scripts",
        Ke: "allow-top-navigation",
        Le: "allow-top-navigation-by-user-activation"
    };
    const bf = Oa(() => Se(af));

    function cf() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = bf();
        return a.length ? ya(b, c => !Da(a, c)) : b
    }

    function df() {
        const a = ve(document, "IFRAME"),
            b = {};
        wa(bf(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var ef = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch (c) {
                return !1
            }
        },
        ff = (a, b) => {
            for (let c = 0; 50 > c; ++c) {
                if (ef(a, b)) return a;
                if (!(a = Le(a))) break
            }
            return null
        },
        M = (a, b) => {
            a.style.setProperty ? Re(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            }) : a.style.cssText = gf(hf(jf(a.style.cssText), kf(b, c => c + " !important")))
        },
        hf = Object.assign || function(a, b) {
            for (let c = 1; c < arguments.length; c++) {
                const d = arguments[c];
                if (d)
                    for (let e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
            }
            return a
        },
        kf = (a, b) => {
            const c = {};
            for (let d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
            return c
        },
        gf = a => {
            const b = [];
            Re(a, (c, d) => {
                null != c && "" !== c && b.push(d + ":" + c)
            });
            return b.length ? b.join(";") + ";" : ""
        },
        jf = a => {
            const b = {};
            if (a) {
                const c = /\s*:\s*/;
                wa((a || "").split(/\s*;\s*/), d => {
                    if (d) {
                        var e = d.split(c);
                        d = e[0];
                        e = e[1];
                        d && e && (b[d.toLowerCase()] = e)
                    }
                })
            }
            return b
        },
        lf = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        mf = /\.proxy\.googleprod\.com(:\d+)?$/;
    const nf = /.*domain\.test$/;
    var of = a => !!lf[a] || mf.test(a) || nf.test(a), pf = (a, b) => {
        b = Ca(a, b);
        if (0 <= b) {
            const c = a[b];
            Array.prototype.splice.call(a, b, 1);
            return c
        }
        return null
    }, qf = (a, b) => {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * 2 ** 52),
                configurable: !1
            })
        } catch (c) {
            b && b.ca(784, c)
        }
        a = Number(a.goog_pvsid);
        b && (!a || 0 >= a) && b.ca(784, Error(`Invalid correlator, ${a}`));
        return a || -1
    };

    function rf(a, b, c, d = []) {
        const e = new a.MutationObserver(f => {
            for (const g of f)
                for (const h of g.removedNodes)
                    if (d && (h === b || we(h, b))) {
                        for (const k of d) k.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
        });
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        He(f => {
            if (!f.parent || !Ge(f.parent)) return !1;
            const g = f.parent.document.getElementsByTagName("iframe");
            for (let l = 0; l < g.length; l++) try {
                a: {
                    var h = g[l];
                    try {
                        var k = h.contentWindow || (h.contentDocument ? ue(h.contentDocument) : null);
                        break a
                    } catch (n) {}
                    k =
                    null
                }
                if (k == f) {
                    rf(f.parent, g[l], c, d);
                    break
                }
            }
            catch (n) {}
            return !1
        }, !1, !1, a)
    }
    var sf = (a, b) => {
            rf(ue(re(a)), a, b)
        },
        tf = (a, b) => {
            const c = document.createElement("div");
            c.id = a;
            c.textContent = b;
            M(c, {
                height: "24px",
                "line-height": "24px",
                "text-align": "center",
                "vertical-align": "middle",
                color: "white",
                "background-color": "black",
                margin: "0",
                "font-family": "Roboto",
                "font-style": "normal",
                "font-weight": "500",
                "font-size": "11px",
                "letter-spacing": "0.08em"
            });
            return c
        },
        uf = (a, b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function vf(a, b, c = null) {
        wf(a, b, c)
    }

    function wf(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        const d = a.document.createElement("img");
        if (c) {
            const e = f => {
                c && c(f);
                Kd(d, "load", e);
                Kd(d, "error", e)
            };
            L(d, "load", e);
            L(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    }
    var yf = a => {
            let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=gfp_cw_status";
            Re(a, (c, d) => {
                c && (b += `&${d}=${encodeURIComponent(c)}`)
            });
            xf(b)
        },
        xf = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : vf(b, a)
        };
    var zf = document,
        N = window;

    function Af(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    Af.prototype.getHeight = function() {
        return this.bottom - this.top
    };

    function Bf(a) {
        return new Af(a.top, a.right, a.bottom, a.left)
    }
    Af.prototype.contains = function(a) {
        return this && a ? a instanceof Af ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function Cf(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    Af.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    Af.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    Af.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function Df(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function Ef(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new Df(c, e, d - c, a - e)
        }
        return null
    }

    function Ff(a, b) {
        var c = Ef(a, b);
        if (!c || !c.height || !c.width) return [new Df(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            k = b.top + b.height;
        b.top > a.top && (c.push(new Df(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        k < g && (c.push(new Df(a.left, k, a.width, g - k)), e = k - d);
        b.left > a.left && c.push(new Df(a.left, d, b.left - a.left, e));
        h < f && c.push(new Df(h, d, f - h, e));
        return c
    }
    Df.prototype.contains = function(a) {
        return a instanceof ne ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    Df.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Df.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Df.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    const Gf = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function Hf(a = r) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function If() {
        const a = Hf();
        return a && a.initialIntersection
    }

    function Jf() {
        const a = If();
        return a && ea(a.rootBounds) ? new oe(a.rootBounds.width, a.rootBounds.height) : null
    }

    function Kf(a) {
        return (a = a || Hf()) ? Ge(a.master) ? a.master : null : null
    }

    function Lf(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            Ea(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = g => {
            if (a.ampInaboxInitialized) g = !0;
            else {
                var h, k = "amp-ini-load" === g.data;
                a.ampInaboxPendingMessages && !k && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized ||
                    g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Me(a.document, g ? pb(hb("https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"), {
                        ampVersion: g
                    }) : nb(gb(hb("https://cdn.ampproject.org/amp4ads-host-v0.js")))));
                g = !1
            }
            g && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, L(a, "message", f), d = () => {
            Kd(a, "message", f)
        });
        return e
    };

    function Mf(a, b, c) {
        if (!Array.isArray(a) || !Array.isArray(a.raw) || !b && 1 !== a.length) throw new TypeError(c);
    };
    class Nf {
        constructor(a) {
            this.wd = a
        }
    }

    function Of(a) {
        return new Nf(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const Pf = [Of("data"), Of("http"), Of("https"), Of("mailto"), Of("ftp"), new Nf(a => /^[^:]*([/?#]|$)/.test(a))];

    function Qf(a, b = Pf) {
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof Nf && d.wd(a)) return new zd(a)
        }
    }

    function Rf(a) {
        return Qf(a, Pf) || Ad
    };

    function Sf(a) {
        Tf();
        return nb(a)
    }
    var Tf = ba;

    function Uf(a, b, c) {
        if ("string" === typeof b)(b = Vf(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = Vf(c, d);
                f && (c.style[f] = e)
            }
    }
    var Wf = {};

    function Vf(a, b) {
        var c = Wf[b];
        if (!c) {
            var d = Bc(b);
            c = d;
            void 0 === a.style[d] && (d = (Mc ? "Webkit" : Lc ? "Moz" : Ic ? "ms" : Hc ? "O" : null) + Cc(d), void 0 !== a.style[d] && (c = d));
            Wf[b] = c
        }
        return c
    }

    function Xf(a, b) {
        var c = re(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function Yf(a, b) {
        return Xf(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Zf(a) {
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

    function $f(a) {
        var b = re(a),
            c = new ne(0, 0);
        var d = b ? re(b) : document;
        d = !Ic || 9 <= Number(Wc) || "CSS1Compat" == pe(d).j.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = Zf(a);
        b = te(pe(b).j);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function ag(a) {
        var b = bg;
        if ("none" != Yf(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function bg(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Mc && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Zf(a), new oe(a.right - a.left, a.bottom - a.top)) : new oe(b, c)
    }

    function cg(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }

    function dg(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? cg(a, b) : 0
    }
    var eg = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function fg(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in eg ? eg[b] : cg(a, b)
    };
    var gg = (a, b) => {
            if (a)
                for (let c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
        },
        hg = a => !(!a || !a.call) && "function" === typeof a,
        ig = a => "number" === typeof a && 0 < a,
        jg = () => {
            var a = O();
            "google_onload_fired" in a || (a.google_onload_fired = !1, L(a, "load", () => {
                a.google_onload_fired = !0
            }))
        },
        lg = (a, b) => {
            a = kg(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + ("?" === c || "#" === c ? "" : "&") + a
        },
        kg = a => Object.entries(mg(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"),
        mg = a => {
            const b = {};
            gg(a,
                (c, d) => {
                    if (c || 0 === c || !1 === c) "boolean" === typeof c && (c = c ? 1 : 0), b[d] = c
                });
            return b
        },
        ng = () => {
            try {
                return N.history.length
            } catch (a) {
                return 0
            }
        },
        og = a => {
            a = Kf(Hf(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1
        },
        pg = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a : 0
        },
        qg = a => {
            a.u_tz = -(new Date).getTimezoneOffset();
            a.u_his = ng();
            a.u_java = !!N.navigator && "unknown" !== typeof N.navigator.javaEnabled && !!N.navigator.javaEnabled && N.navigator.javaEnabled();
            N.screen && (a.u_h = N.screen.height, a.u_w = N.screen.width, a.u_ah =
                N.screen.availHeight, a.u_aw = N.screen.availWidth, a.u_cd = N.screen.colorDepth);
            N.navigator && N.navigator.plugins && (a.u_nplug = N.navigator.plugins.length);
            N.navigator && N.navigator.mimeTypes && (a.u_nmime = N.navigator.mimeTypes.length)
        },
        rg = a => {
            let b;
            b = 9 !== a.nodeType && a.id;
            a: {
                if (a && a.nodeName && a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f < d.length; ++f) {
                        const g = d[f];
                        if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                            if (a === g) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c = ""
            }
            return (a.nodeName && a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
        },
        sg = !!window.google_async_iframe_id;
    let tg = sg && window.parent || window;
    var O = () => {
            if (sg && !Ge(tg)) {
                let a = "." + zf.domain;
                try {
                    for (; 2 < a.split(".").length && !Ge(tg);) zf.domain = a = a.substr(a.indexOf(".") + 1), tg = window.parent
                } catch (b) {}
                Ge(tg) || (tg = window)
            }
            return tg
        },
        ug = /(^| )adsbygoogle($| )/,
        vg = a => function() {
            if (a) {
                const b = a;
                a = null;
                b.apply(null, arguments)
            }
        },
        wg = () => {
            var a;
            let b;
            const c = window.ActiveXObject;
            if (navigator.plugins && navigator.mimeTypes.length) {
                if ((a = navigator.plugins["Shockwave Flash"]) && a.description) return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/,
                    ".")
            } else {
                if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
                    b = 3;
                    for (a = 1; a;) try {
                        a = new c("ShockwaveFlash.ShockwaveFlash." + (b + 1)), b++
                    } catch (d) {
                        a = null
                    }
                    return b.toString()
                }
                if (bc()) {
                    a = null;
                    try {
                        a = new c("ShockwaveFlash.ShockwaveFlash.7")
                    } catch (d) {
                        b = 0;
                        try {
                            a = new c("ShockwaveFlash.ShockwaveFlash.6"), b = 6, a.AllowScriptAccess = "always"
                        } catch (e) {
                            if (6 === b) return b.toString()
                        }
                        try {
                            a = new c("ShockwaveFlash.ShockwaveFlash")
                        } catch (e) {}
                    }
                    if (a) return b = a.GetVariable("$version").split(" ")[1], b.replace(/,/g,
                        ".")
                }
            }
            return "0"
        },
        xg = a => (a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1,
        yg = a => {
            a = a.top;
            return Ge(a) ? a : null
        },
        zg = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(0 < b && 0 < c)) {
                a: {
                    try {
                        const e = String(a.google_ad_format);
                        if (e && e.match) {
                            const f = e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const g = parseInt(f[1], 10),
                                    h = parseInt(f[2], 10);
                                if (0 < g && 0 < h) {
                                    var d = {
                                        width: g,
                                        height: h
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = 0 < b ? b : a.width;c = 0 < c ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        },
        Ag = (a, b) => a.source !== b.contentWindow &&
        a.source.parent !== b.contentWindow ? !1 : !0;
    const Bg = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;
    var Cg = class {
            constructor(a, b) {
                this.j = a;
                this.l = b
            }
        },
        Dg = class {
            constructor(a, b, c) {
                this.url = a;
                this.$ = b;
                this.dc = !!c;
                this.depth = null
            }
        };

    function Eg(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Fg(a, b, c, d, e) {
        const f = [];
        Re(a, function(g, h) {
            (g = Gg(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Gg(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Gg(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Fg(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Hg(a) {
        let b = 1;
        for (const c in a.l) b = c.length > b ? c.length : b;
        return 3997 - b - a.A.length - 1
    }

    function Ig(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        let d = Hg(a) - c.length;
        if (0 > d) return "";
        a.j.sort(function(f, g) {
            return f - g
        });
        c = null;
        let e = "";
        for (let f = 0; f < a.j.length; f++) {
            const g = a.j[f],
                h = a.l[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                let l = Fg(h[k], a.A, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        b += l;
                        e = a.A;
                        break
                    }
                    c = null == c ? g : c
                }
            }
        }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }
    class Jg {
        constructor() {
            this.A = "&";
            this.l = {};
            this.B = 0;
            this.j = []
        }
    };

    function P(a, b, c, d, e, f) {
        if ((d ? a.j : Math.random()) < (e || .01)) try {
            let g;
            c instanceof Jg ? g = c : (g = new Jg, Re(c, (k, l) => {
                var n = g,
                    m = n.B++;
                k = Eg(l, k);
                n.j.push(m);
                n.l[m] = k
            }));
            const h = Ig(g, a.l, "/pagead/gen_204?id=" + b + "&");
            h && ("undefined" !== typeof f ? vf(r, h, f) : vf(r, h))
        } catch (g) {}
    }
    class Kg {
        constructor() {
            this.l = "http:" === N.location.protocol ? "http:" : "https:";
            this.j = Math.random()
        }
    };
    let Lg = null;

    function Mg() {
        if (null === Lg) {
            Lg = "";
            try {
                let a = "";
                try {
                    a = r.top.location.hash
                } catch (b) {
                    a = r.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Lg = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Lg
    };
    var Ng = () => {
            const a = r.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : oa()
        },
        Og = () => {
            const a = r.performance;
            return a && a.now ? a.now() : null
        };
    class Pg {
        constructor(a, b) {
            var c = Og() || Ng();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.slotId = void 0
        }
    };
    const Qg = r.performance,
        Rg = !!(Qg && Qg.mark && Qg.measure && Qg.clearMarks),
        Sg = Oa(() => {
            var a;
            if (a = Rg) a = Mg(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function Tg(a) {
        a && Qg && Sg() && (Qg.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Qg.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function Ug(a) {
        a.j = !1;
        a.events != a.l.google_js_reporting_queue && (Sg() && wa(a.events, Tg), a.events.length = 0)
    }

    function Vg(a, b) {
        if (!a.j) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw Tg(c), e;
        }
        a.end(c);
        return d
    }
    class Wg {
        constructor(a) {
            this.events = [];
            this.l = a || r;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.events = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.j = Sg() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.j) return null;
            a = new Pg(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Qg && Sg() && Qg.mark(b);
            return a
        }
        end(a) {
            if (this.j && "number" === typeof a.value) {
                a.duration = (Og() || Ng()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Qg && Sg() && Qg.mark(b);
                !this.j ||
                    2048 < this.events.length || this.events.push(a)
            }
        }
    };

    function Xg(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = Yg(a.stack, b));
        return b
    }

    function Yg(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
            return a.replace(/\n */g, "\n")
        } catch (c) {
            return b
        }
    }

    function Zg(a, b) {
        a.j = b
    }

    function $g(a, b, c, d) {
        let e, f;
        try {
            a.l && a.l.j ? (f = a.l.start(b.toString(), 3), e = c(), a.l.end(f)) : e = c()
        } catch (g) {
            c = !0;
            try {
                Tg(f), c = a.C(b, new ie(g, {
                    message: Xg(g)
                }), void 0, d)
            } catch (h) {
                a.ca(217, h)
            }
            if (c) {
                let h, k;
                null == (h = window.console) || null == (k = h.error) || k.call(h, g)
            } else throw g;
        }
        return e
    }

    function ah(a, b, c, d, e) {
        return (...f) => $g(a, b, () => c.apply(d, f), e)
    }
    class bh {
        constructor() {
            var a = ch;
            this.B = Q;
            this.j = null;
            this.C = this.ca;
            this.l = void 0 === a ? null : a;
            this.A = !1
        }
        ca(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const C = new Jg;
                var g = C;
                g.j.push(1);
                g.l[1] = Eg("context", a);
                b.error && b.meta && b.id || (b = new ie(b, {
                    message: Xg(b)
                }));
                if (b.msg) {
                    g = C;
                    var h = b.msg.substring(0, 512);
                    g.j.push(2);
                    g.l[2] = Eg("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.j) try {
                    this.j(b)
                } catch (T) {}
                if (d) try {
                    d(b)
                } catch (T) {}
                d = C;
                k = [k];
                d.j.push(3);
                d.l[3] = k;
                d = r;
                k = [];
                b = null;
                do {
                    var l = d;
                    if (Ge(l)) {
                        var n = l.location.href;
                        b = l.document &&
                            l.document.referrer || null
                    } else n = b, b = null;
                    k.push(new Dg(n || "", l));
                    try {
                        d = l.parent
                    } catch (T) {
                        d = null
                    }
                } while (d && l != d);
                for (let T = 0, ia = k.length - 1; T <= ia; ++T) k[T].depth = ia - T;
                l = r;
                if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1)
                    for (n = 1; n < k.length; ++n) {
                        var m = k[n];
                        m.url || (m.url = l.location.ancestorOrigins[n - 1] || "", m.dc = !0)
                    }
                var p = k;
                let da = new Dg(r.location.href, r, !1);
                l = null;
                const cb = p.length - 1;
                for (m = cb; 0 <= m; --m) {
                    var q = p[m];
                    !l && Bg.test(q.url) && (l = q);
                    if (q.url && !q.dc) {
                        da = q;
                        break
                    }
                }
                q = null;
                const xa = p.length && p[cb].url;
                0 != da.depth && xa && (q = p[cb]);
                f = new Cg(da, q);
                if (f.l) {
                    p = C;
                    var v = f.l.url || "";
                    p.j.push(4);
                    p.l[4] = Eg("top", v)
                }
                var u = {
                    url: f.j.url || ""
                };
                if (f.j.url) {
                    var A = f.j.url.match(Fe),
                        D = A[1],
                        F = A[3],
                        I = A[4];
                    v = "";
                    D && (v += D + ":");
                    F && (v += "//", v += F, I && (v += ":" + I));
                    var B = v
                } else B = "";
                D = C;
                u = [u, {
                    url: B
                }];
                D.j.push(5);
                D.l[5] = u;
                P(this.B, e, C, this.A, c)
            } catch (C) {
                try {
                    P(this.B, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Xg(C),
                        url: f && f.j.url
                    }, this.A, c)
                } catch (da) {}
            }
            return !0
        }
    };
    let Q, dh;
    const eh = O(),
        ch = new Wg(eh);
    Q = new Kg;
    "number" !== typeof eh.google_srt && (eh.google_srt = Math.random());
    var fh = Q,
        gh = eh.google_srt;
    0 <= gh && 1 >= gh && (fh.j = gh);
    dh = new bh;
    dh.j = () => {};
    dh.A = !0;
    "complete" == eh.document.readyState ? eh.google_measure_js_timing || Ug(ch) : ch.j && L(eh, "load", () => {
        eh.google_measure_js_timing || Ug(ch)
    });
    var hh = (a, b) => $g(dh, a, b, void 0),
        R = (a, b, c) => ah(dh, a, b, c, void 0),
        ih = (a, b, c, d) => {
            P(Q, a, b, !0, c, d)
        };
    class jh {
        constructor() {
            this.l = !1;
            this.j = 0
        }
    }

    function kh(a, b, c, d, e, f, g) {
        for (let I = 0; I < b.childNodes.length; I++) {
            var h = b.childNodes[I];
            if (h.nodeType === Node.TEXT_NODE && "" !== h.textContent) {
                a: {
                    var k = a;
                    var l = d,
                        n = e,
                        m = h.textContent,
                        p = c,
                        q = f,
                        v = g,
                        u = [];
                    let B = 0;
                    for (;;) {
                        var A = m.length;
                        let C = null;
                        var D = "";
                        for (const da of K(p, he, 2))
                            for (const cb of K(da, fe, 2)) {
                                const xa = H(cb, 1);
                                for (var F = B; F < m.length;) {
                                    F = m.indexOf(xa, F);
                                    if (-1 === F) break;
                                    if (F > A || F === A && null !== C && xa.length < C.length) break;
                                    if (q.j + lh(m.substr(B, F - B)) >= gd(p, 5, 0)) {
                                        A = F;
                                        C = xa;
                                        D = H(da, 1);
                                        break
                                    }
                                    F += 1
                                }
                            }
                        if (null ===
                            C) {
                            if (0 === B) {
                                q.j += lh(m);
                                k = null;
                                break a
                            }
                            B < m.length && (l = m.substr(B), u.push(k.document.createTextNode(l)), q.j += lh(l));
                            k = u;
                            break a
                        }
                        A > B && u.push(k.document.createTextNode(m.substr(B, A - B)));
                        u.push(mh(k, D, l, H(p, 1), C, n));
                        q.j = 0;
                        B = A + C.length;
                        A = v;
                        A.l++;
                        A.j.add(D)
                    }
                }
                if (k) {
                    for (const B of k) b.insertBefore(B, h);
                    b.removeChild(h);
                    I += k.length - 1;
                    if (!f.l) a: {
                        h = a;k = b;u = H(c, 3);f.l = !0;q = h;l = u;u = q.document.createElement("P");u.className = "google-adfil-skip";u.appendChild(q.document.createTextNode(l));q = u.style;q.border = "0 solid #bdc1c6";
                        q.borderWidth = "1px 0";q.margin = "6pt 0";q.padding = "21px";q.width = "100%";q = u;
                        for (u = k; u;) {
                            b: switch (u.tagName) {
                                case "DIV":
                                case "DL":
                                case "P":
                                case "UL":
                                case "OL":
                                case "TABLE":
                                    k = !0;
                                    break b;
                                default:
                                    k = !1
                            }
                            if (k) {
                                u.parentNode && u.parentNode.insertBefore(q, u.nextSibling);
                                break a
                            }
                            u = u.parentElement
                        }
                        h.document.body.appendChild(q)
                    }
                }
            }
            else {
                a: if (k = h, k.nodeType !== Node.ELEMENT_NODE || k.classList.contains("google-adfil-skip")) k = !1;
                    else switch (k.tagName) {
                        case "A":
                        case "IFRAME":
                        case "BUTTON":
                        case "CANVAS":
                        case "CODE":
                        case "EMBED":
                        case "H1":
                        case "H2":
                        case "H3":
                        case "H4":
                        case "H5":
                        case "H6":
                        case "OBJECT":
                        case "PRE":
                        case "SAMP":
                        case "SCRIPT":
                        case "SELECT":
                        case "SUB":
                        case "SUPER":
                        case "SVG":
                        case "TEXTAREA":
                        case "VIDEO":
                            k = !1;
                            break a;
                        default:
                            k = !0
                    }
                k && kh(a, h, c, d, e, f, g)
            }
        }
    }

    function mh(a, b, c, d, e, f) {
        const g = Rf("https://www.google.com/search?psb=1&tbm=shop" + `&q=${encodeURIComponent(`"${b}"`)}` + `&utm_source=${encodeURIComponent(c)}` + "&utm_medium=web-affiliate" + `&utm_campaign=${encodeURIComponent(d)}` + `&utm_term=${encodeURIComponent(e)}` + "&utm_content=textlink"),
            h = a.document.createElement("A");
        h.appendChild(a.document.createTextNode(e));
        h.href = Fd(g);
        h.style.setProperty("webkitTextDecoration", h.style.textDecoration = "underline dotted currentcolor");
        const k = a.performance.now();
        h.addEventListener("click", l => {
            ih("adfil-clk", {
                wp: c,
                c: f,
                e: d,
                m: e,
                q: b,
                v: Math.round(a.performance.now() - k)
            }, 1, () => {
                a.location.href = Fd(g)
            });
            l.preventDefault();
            return !1
        });
        return h
    }

    function lh(a) {
        a = a.trim();
        return "" === a ? 0 : a.split(/\s+/).length
    };
    var nh = class {
        constructor() {
            this.l = 0;
            this.j = new Set;
            this.A = 0
        }
    };
    const oh = a => !!a;

    function ph(a) {
        if (!(qh || oh)(a)) throw Error(String(a));
    };
    var Ua = {
        Lg: 0,
        Lf: 1,
        Mf: 2,
        Sf: 8,
        Wg: 9,
        qg: 10,
        rg: 11,
        Sg: 16,
        yf: 17,
        xf: 24,
        og: 25,
        Re: 26,
        Qe: 27,
        Ec: 30,
        jg: 32,
        lg: 40
    };
    var rh = {
            Se: "google_ads_preview",
            Af: "google_mc_lab",
            Of: "google_anchor_debug",
            Nf: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            ig: "google_scr_debug",
            kg: "google_ia_debug_allow_onclick",
            Dg: "googleads",
            Ec: "google_pedestal_debug",
            Xg: "google_shoppable_images_debug",
            Yg: "google_shoppable_images_cookie",
            Zg: "google_shoppable_images_forced",
            Fc: "google_responsive_slot_debug",
            Rg: "google_responsive_slot_preview",
            Qg: "google_responsive_dummy_ad"
        },
        sh = {
            ["google_bottom_anchor_debug"]: 1,
            ["google_anchor_debug"]: 2,
            ["google_ia_debug"]: 8,
            ["google_scr_debug"]: 9,
            ["googleads"]: 2,
            ["google_pedestal_debug"]: 30
        };
    var th = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        Vg: 4,
        Fc: 6
    };
    var vh = (a, b) => {
            if (!a) return !1;
            a = a.hash;
            if (!a || !a.indexOf) return !1;
            if (-1 != a.indexOf(b)) return !0;
            b = uh(b);
            return "go" != b && -1 != a.indexOf(b) ? !0 : !1
        },
        uh = a => {
            let b = "";
            gg(a.split("_"), c => {
                b += c.substr(0, 2)
            });
            return b
        },
        wh = () => {
            var a = r.location;
            let b = !1;
            gg(rh, c => {
                vh(a, c) && (b = !0)
            });
            return b
        },
        xh = (a, b) => {
            switch (a) {
                case 1:
                    return vh(b, "google_ia_debug");
                case 2:
                    return vh(b, "google_bottom_anchor_debug");
                case 3:
                    return vh(b, "google_anchor_debug") || vh(b, "googleads");
                case 4:
                    return vh(b, "google_scr_debug");
                case 6:
                    return vh(b,
                        "google_responsive_slot_debug")
            }
            return !1
        };
    var qh = a => "string" === typeof a;
    var yh;
    yh = {
        Gg: 0,
        Cc: 3,
        Dc: 4,
        Gc: 5
    };
    var zh = yh.Cc,
        Ah = yh.Dc,
        Bh = yh.Gc;

    function Ch(a, b) {
        b && !a.j && (a.j = b.split(":").find(c => 0 === c.indexOf("ID=")) || null)
    }
    var Dh = class {
            constructor() {
                this.j = null;
                this.l = {
                    [zh]: {},
                    [Ah]: {},
                    [Bh]: {}
                };
                const a = b => this.j ? Te(`${b} + ${this.j}`) % 1E3 : void 0;
                this.l[Ah] = {
                    [9]: (...b) => a(b[0])
                }
            }
        },
        Eh;
    var Gh = class extends w {
            constructor(a) {
                super();
                x(this, a, Fh, null)
            }
        },
        Fh = [4];
    var Hh = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };
    var Jh = class extends w {
            constructor(a) {
                super();
                x(this, a, Ih, null)
            }
        },
        Ih = [3, 4];
    var Kh = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
        T() {
            return J(this, Gh, 1)
        }
        l() {
            return y(this, 2)
        }
    };
    var Lh = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };

    function Mh() {
        var a = new Nh;
        return z(a, 2, 1)
    }
    var Nh = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };
    var Ph = class extends w {
            constructor(a) {
                super();
                x(this, a, Oh, null)
            }
            T() {
                return J(this, Gh, 1)
            }
            l() {
                return y(this, 2)
            }
        },
        Oh = [6, 7, 9, 10, 11];
    var Rh = class extends w {
            constructor(a) {
                super();
                x(this, a, Qh, null)
            }
        },
        Qh = [4];
    var Sh = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };
    var Th = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };

    function Uh(a, ...b) {
        Mf(a, !0, "trustedResourceUrl is a template literal tag function and can only be called as such (e.g. trustedResourceUrl`/somepath.js`)");
        if (0 === b.length) return Dd(a[0]);
        var c = a[0].toLowerCase();
        if (/^data:/.test(c)) throw Error("Data URLs cannot have expressions in the template literal input.");
        if (/^https:\/\//.test(c) || /^\/\//.test(c)) {
            var d = c.indexOf("//") + 2;
            var e = c.indexOf("/", d);
            if (e <= d) throw Error("Can't interpolate data in a url's origin, Please make sure to fully specify the origin, terminated with '/'.");
            d = c.substring(d, e);
            if (!/^[0-9a-z.:-]+$/i.test(d)) throw Error("The origin contains unsupported characters.");
            if (!/^[^:]*(:[0-9]+)?$/i.test(d)) throw Error("Invalid port number.");
            if (!/(^|\.)[a-z][^.]*$/i.test(d)) throw Error("The top-level domain must start with a letter.");
            d = !0
        } else d = !1;
        if (d = !d) {
            if (/^\//.test(c))
                if ("/" === c || 1 < c.length && "/" !== c[1] && "\\" !== c[1]) d = !0;
                else throw Error("The path start in the url is invalid.");
            else d = !1;
            d = !d
        }
        if (d) {
            if (/^about:blank/.test(c)) {
                if ("about:blank" !== c && !/^about:blank#/.test(c)) throw Error("The about url is invalid.");
                c = !0
            } else c = !1;
            d = !c
        }
        if (d) throw Error("Trying to interpolate expressions in an unsupported url format.");
        c = [a[0]];
        for (d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return Dd(c.join(""))
    }

    function Vh() {
        var a;
        var b = Wh;
        var c;
        if (null === (c = sd()) || void 0 === c || !c.isScript(b))
            if (b instanceof xd) b = b.j;
            else throw Error("wrong type");
        b = (null === (a = sd()) || void 0 === a ? 0 : a.isScript(b)) ? TrustedScript.prototype.toString.apply(b) : b;
        return Dd(URL.createObjectURL(new Blob([b], {
            type: "text/javascript"
        })))
    };
    var Xh = class extends w {
        constructor() {
            super();
            x(this, void 0, null, null)
        }
    };
    var Yh = class {
        constructor(a, b, c, d, e) {
            this.j = a;
            this.pubWin = b;
            this.G = c;
            this.A = d;
            this.F = e;
            this.D = b.document.getElementById(this.G.google_async_iframe_id + "_anchor");
            this.B = b.document.getElementById(this.G.google_async_iframe_id + "_expand");
            this.H = -1;
            this.l = 0;
            this.J = this.L = null;
            this.N = this.I = 0;
            this.C = [];
            this.Ca = this.K = ""
        }
    };
    var Zh = (a, b, c) => {
        a.l |= 2;
        return b[c % b.length]
    };
    var $h = class {
            constructor() {
                var a = {
                    notify: /^expandable-xpc-ready$/
                };
                this.j = this.l = null;
                "function" === typeof a ? this.j = a : this.l = a
            }
            getVerifier(a) {
                return this.l ? this.l[a] : null
            }
            getSchema(a) {
                return this.j ? this.j(a) : null
            }
            doesReturnAnotherSchema() {
                return this.j ? !0 : !1
            }
        },
        ai = (a, b, c, d = null) => {
            const e = g => {
                let h;
                try {
                    h = JSON.parse(g.data)
                } catch (k) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            L(a, "message", e);
            let f = !1;
            return () => {
                let g = !1;
                f || (f = !0, g = Kd(a, "message", e));
                return g
            }
        },
        bi = (a, b, c, d = null) => {
            const e = ai(a, b, Ma(c, () => e()), d);
            return e
        },
        ci = class extends Error {
            constructor() {
                super()
            }
        },
        di = (a, b, c, d, e) => {
            if (Array.isArray(a)) {
                var f = a;
                for (var g = 0; g < a.length; g++) a[g] = di(a[g], b, c, d, e)
            } else if (ea(a)) {
                if (b.doesReturnAnotherSchema())
                    if (f = b.getSchema(a)) {
                        if (b = f, b.doesReturnAnotherSchema()) return di(a, b, c, d, e)
                    } else throw new ci;
                f = {};
                for (g in a)
                    if (Object.prototype.hasOwnProperty.call(a, g)) {
                        d = b.getVerifier(g);
                        c = a[g];
                        var h = b;
                        if (d) {
                            const k = d.predicate || d;
                            if ("function" === typeof k) {
                                h = k(c);
                                if (!h) {
                                    if (!d || !d.nullOnInvalid) throw new ci;
                                    e && (e[g] = !0);
                                    f[g] = null;
                                    continue
                                }
                                if (h instanceof $h) d = null;
                                else {
                                    f[g] = c;
                                    continue
                                }
                            }
                        } else if (!ea(c)) continue;
                        f[g] = di(c, h, g, d, e)
                    }
            } else if (f = a, b = d ? d.predicate || d : void 0, b instanceof RegExp && !b.test("string" === typeof a || void 0 == a ? a : String(a)) || "function" === typeof b && !b(a)) {
                if (!d || !d.nullOnInvalid) throw new ci;
                e && (e[c] = !0);
                f = null
            }
            return f
        },
        fi = (a, b) => {
            var c = ei;
            return ai(a, "ct", (d, e) => {
                try {
                    const f = di(d, c, null, null, null);
                    b(f, e)
                } catch (f) {
                    if (!(f instanceof ci)) throw f;
                }
            })
        },
        gi = (a, b, c, d, e) => {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) 1 < e && gi(a[f], b, c, d, --e)
        };
    var hi = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5
        },
        ii = {
            [1]: 1,
            [2]: 1,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };

    function ji(a) {
        a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new ki) : a.google_reactive_ads_global_state = new li;
        return a.google_reactive_ads_global_state
    }
    class li {
        constructor() {
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
            this.floatingAdsStacking = new ki
        }
    }
    var ki = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var mi = 728 * 1.38,
        ni = (a, b = 420) => (a = S(a).clientWidth) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384,
        oi = a => {
            var b = S(a).clientWidth;
            a = a.innerWidth;
            return (b = b && a ? b / a : 0) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072
        },
        qi = a => Math.max(0, pi(a, !0) - S(a).clientHeight),
        S = a => {
            a = a.document;
            let b = {};
            a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
            return b || {}
        },
        pi = (a, b) => {
            const c = S(a);
            return b ? c.scrollHeight == S(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight
        },
        si = (a, b) => ri(b) || 10 === b || !a.adCount ? !1 : 1 == b || 2 == b ? !(!a.adCount[1] &&
            !a.adCount[2]) : (a = a.adCount[b]) ? 1 <= a : !1,
        ti = (a, b) => a && a.source ? a.source === b || a.source.parent === b : !1,
        ui = a => void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset,
        vi = a => void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset,
        wi = a => {
            const b = {};
            let c;
            Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
            if (c)
                for (a = 0; a < c.length; a++) {
                    const d = c[a];
                    if ("key" in d && "value" in d) {
                        const e =
                            d.value;
                        b[d.key] = null == e ? null : String(e)
                    }
                }
            return b
        },
        xi = (a, b, c, d, e) => {
            P(c, b, {
                c: e.data.substring(0, 500),
                u: a.location.href.substring(0, 500)
            }, !0, .1);
            return !0
        },
        ri = a => 26 === a || 27 === a || 40 === a;

    function yi() {
        this.N = this.N;
        this.W = this.W
    }
    yi.prototype.N = !1;
    yi.prototype.Ya = function() {
        this.N || (this.N = !0, this.B())
    };
    yi.prototype.B = function() {
        if (this.W)
            for (; this.W.length;) this.W.shift()()
    };

    function zi(a, b, c) {
        try {
            if (! of (c.origin)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        "string" === typeof d && (e = a.Oa[d]) && $g(a.da, 168, () => {
            e.call(a, b, c)
        }, f => {
            f.msg_type = d
        })
    }
    class Ai extends yi {
        constructor(a) {
            var b = Q;
            super();
            this.j = a;
            this.da = dh;
            this.Hc = b;
            this.Oa = {};
            this.Bc = ah(this.da, 168, (c, d) => void zi(this, c, d));
            this.$c = ah(this.da, 169, (c, d) => xi(this.j, "ras::xsf", this.Hc, c, d));
            this.na = [];
            this.L(this.Oa);
            this.na.push(ai(this.j, "sth", this.Bc, this.$c))
        }
        B() {
            for (const a of this.na) a();
            this.na.length = 0;
            super.B()
        }
    };
    class Bi extends Ai {
        constructor(a) {
            super(a);
            this.j = a
        }
    };

    function Ci(a) {
        try {
            const b = a.localStorage.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : Sa(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }
    class Di extends Bi {
        constructor(a, b) {
            super(a);
            this.l = b;
            this.A = () => {};
            L(this.l, "load", this.A)
        }
        B() {
            this.l && Kd(this.l, "load", this.A);
            super.B();
            this.l = null
        }
        L(a) {
            a["adsense-labs"] = b => {
                if (b = wi(b).settings) try {
                    var c = new Yd(JSON.parse(b));
                    if (E(c, 1)) {
                        var d = this.j,
                            e = y(c, 1) || "";
                        const f = Ci(d);
                        null !== c && (f[e] = ld(c));
                        try {
                            d.localStorage.setItem("google_adsense_settings", JSON.stringify(f))
                        } catch (g) {}
                    }
                } catch (f) {}
            }
        }
    };
    class Ei {
        constructor(a) {
            this.methodName = a
        }
    }
    var Fi = new Ei(15),
        Gi = new Ei(2),
        Hi = new Ei(3),
        Ii = new Ei(5),
        Ji = new Ei(6),
        Ki = new Ei(7),
        Li = new Ei(8),
        Mi = new Ei(14),
        Ni = (a, b, c) => b[a.methodName] || c || (() => {});
    var Oi = (a = r) => a.ggeac || (a.ggeac = {});

    function Pi(a, b) {
        a.j = c => {
            Ni(Gi, b, () => [])(c, 1)
        };
        a.l = () => Ni(Hi, b, () => [])(1)
    }
    class Qi {
        constructor() {
            this.j = () => {};
            this.l = () => []
        }
    }
    ca(Qi);
    var U = class {
            constructor(a, b = !1) {
                this.j = a;
                this.defaultValue = b
            }
        },
        Ri = class {
            constructor(a, b = 0) {
                this.j = a;
                this.defaultValue = b
            }
        };
    var Si = new U(236),
        Ti = new U(383, !0),
        Ui = new U(1043),
        Vi = new Ri(1032),
        Wi = new Ri(1044),
        Xi = new Ri(1017, -1),
        Yi = new U(316),
        Zi = new U(1021, !0),
        $i = new U(334),
        aj = new Ri(54),
        bj = new U(1004),
        cj = new U(313),
        dj = new Ri(66, -1),
        ej = new Ri(65, -1),
        fj = new U(369),
        gj = new U(368),
        hj = new Ri(1067),
        ij = new U(348),
        jj = new U(265),
        kj = new U(260),
        lj = new U(233),
        mj = new Ri(29, 2),
        nj = new Ri(30, 3),
        oj = new Ri(1056),
        pj = new Ri(1057),
        qj = new Ri(1072),
        rj = new U(1073),
        sj = new U(290),
        tj = new U(190),
        uj = new Ri(1068),
        vj = new U(1036, !0),
        wj = new U(154),
        xj = new U(1045),
        yj = new U(1074),
        zj = new U(251),
        Aj = new U(1031),
        Bj = new Ri(1066),
        Cj = new U(83),
        Dj = new U(360245598),
        Ej = new U(1936, !0),
        Fj = new Ri(1927),
        Gj = new U(1931, !0),
        Hj = new U(77),
        Ij = new U(78),
        Jj = new U(309),
        Kj = new U(373442741),
        Lj = new U(80),
        Mj = new U(76),
        Nj = new U(81),
        Oj = new U(84),
        Pj = new U(3655606),
        Qj = new U(188),
        Rj = new Ri(1935);
    var Sj = class {
        constructor() {
            const a = {};
            this.l = (b, c) => null != a[b] ? a[b] : c;
            this.A = (b, c) => null != a[b] ? a[b] : c;
            this.B = (b, c) => null != a[b] ? a[b] : c;
            this.C = (b, c) => null != a[b] ? a[b] : c;
            this.j = () => {}
        }
    };
    ca(Sj);
    var V = a => Sj.V().l(a.j, a.defaultValue),
        Tj = a => Sj.V().A(a.j, a.defaultValue);
    class Uj {
        constructor() {
            this.j = () => {}
        }
    }
    ca(Uj);
    var Wj = (a = Oi()) => {
            Pi(Qi.V(), a);
            Vj(a);
            Uj.V().j = Ni(Mi, a);
            Sj.V().j()
        },
        Vj = a => {
            const b = Sj.V();
            b.l = (c, d) => Ni(Ii, a, () => !1)(c, d, 1);
            b.A = (c, d) => Ni(Ji, a, () => 0)(c, d, 1);
            b.B = (c, d) => Ni(Ki, a, () => "")(c, d, 1);
            b.C = (c, d) => Ni(Li, a, () => [])(c, d, 1);
            b.j = () => {
                Ni(Fi, a)(1)
            }
        };
    var Xj = a => {
        const b = Qi.V().l();
        a = be(a);
        return b.concat(a).join(",")
    };
    var Yj = (a, b) => {
        const c = $e();
        return a + (-1 == a.indexOf("?") ? "?" : "&") + [0 < c.length ? "google_debug" + (c ? "=" + c : "") + "&" : "", "xpc=", b, "&p=", encodeURIComponent(r.document.location.protocol), "//", encodeURIComponent(r.document.location.host)].join("")
    };
    nb(gb(hb("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var ei = new $h;

    function Zj(a, b, c, d) { of (d.origin) && "expandable-xpc-ready" == c.notify && ak(a, b)
    }

    function ak(a, b) {
        var c = a.Eb;
        c.google_eas_queue = c.google_eas_queue || [];
        c.google_eas_queue.push({
            a: a.id,
            b: a.url,
            c: a.width,
            d: a.height,
            e: a.Vb,
            f: a.Kd,
            g: a.Tc,
            h: a.vd,
            i: void 0
        });
        r.setTimeout(R(220, vg(na(function(d) {
            Me(c.document, Sf(d))
        }, b))), 0)
    };

    function bk(a, b = r) {
        a = a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return new ne(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function ck(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };
    var dk = (a, b = !1) => {
            try {
                return b ? (new oe(a.innerWidth, a.innerHeight)).round() : se(a || window).round()
            } catch (c) {
                return new oe(-12245933, -12245933)
            }
        },
        ek = (a, b) => {
            var c;
            var d;
            c = (d = (d = Hf()) && (c = d.initialLayoutRect) && "number" === typeof c.top && "number" === typeof c.left && "number" === typeof c.width && "number" === typeof c.height ? new Df(c.left, c.top, c.width, c.height) : null) ? new ne(d.left, d.top) : (c = If()) && ea(c.rootBounds) ? new ne(c.rootBounds.left + c.boundingClientRect.left, c.rootBounds.top + c.boundingClientRect.top) : null;
            if (c) return c;
            try {
                var e = new ne(0, 0),
                    f = ue(re(b));
                if (Ec(f, "parent")) {
                    do {
                        if (f == a) var g = $f(b);
                        else {
                            var h = Zf(b);
                            g = new ne(h.left, h.top)
                        }
                        c = g;
                        e.x += c.x;
                        e.y += c.y
                    } while (f && f != a && f != f.parent && (b = f.frameElement) && (f = f.parent))
                }
                return e
            } catch (k) {
                return dh.ca(888, k), new ne(-12245933, -12245933)
            }
        };
    var gk = class extends w {
            constructor() {
                super();
                x(this, void 0, fk, null)
            }
        },
        fk = [15];
    var hk = class extends w {
        constructor() {
            super();
            x(this, void 0, null, null)
        }
    };
    var ik = class extends w {
        constructor() {
            super();
            x(this, void 0, null, null)
        }
    };
    let jk = null,
        kk = null;
    var lk = () => {
            if (null != jk) return jk;
            jk = !1;
            try {
                const a = yg(r);
                a && -1 !== a.location.hash.indexOf("google_logging") && (jk = !0);
                r.localStorage.getItem("google_logging") && (jk = !0)
            } catch (a) {}
            return jk
        },
        mk = () => {
            if (null != kk) return kk;
            kk = !1;
            try {
                const a = yg(r);
                if (a && -1 !== a.location.hash.indexOf("auto_ads_logging") || r.localStorage.getItem("auto_ads_logging")) kk = !0
            } catch (a) {}
            return kk
        },
        nk = (a, b = []) => {
            let c = !1;
            r.google_logging_queue || (c = !0, r.google_logging_queue = []);
            r.google_logging_queue.push([a, b]);
            c && lk() && Me(r.document,
                nb(gb(hb("https://pagead2.googlesyndication.com/pagead/js/logging_library.js"))))
        };
    nb(gb(hb("https://pagead2.googlesyndication.com/pagead/osd.js")));

    function ok() {
        var a = pk,
            b = qk;
        if (!(window && Math.random && navigator)) return -1;
        if (window.__google_ad_urls) {
            var c = window.__google_ad_urls;
            try {
                if (c && c.getOseId()) return c.getOseId()
            } catch (d) {}
        }
        if (!window.__google_ad_urls_id) {
            c = window.google_enable_ose;
            let d;
            !0 === c ? d = 2 : !1 !== c && (d = Oe([0], a), null == d && ((d = Oe([2], b)) || (d = 3)));
            if (!d) return 0;
            window.__google_ad_urls_id = d
        }
        return window.__google_ad_urls_id
    };

    function rk(a) {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function sk(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function tk(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };
    const uk = new Wg(O());
    var vk = () => {
        const a = O();
        a && "undefined" != typeof a.google_measure_js_timing && (a.google_measure_js_timing || Ug(uk))
    };
    (() => {
        const a = O();
        a && a.document && ("complete" == a.document.readyState ? vk() : uk.j && L(a, "load", () => {
            vk()
        }))
    })();
    var xk = () => {
            var a = wk;
            const b = O() || r;
            return b.google_osd_loaded ? !1 : (Me(b.document, a), b.google_osd_loaded = !0)
        },
        yk = (a, b, c) => {
            a && (c ? L(a, "load", b) : Kd(a, "load", b))
        },
        zk = () => {
            const a = (O() || r).google_osd_amcb;
            return "function" === typeof a ? a : null
        },
        Ak = nb(gb(hb("https://www.googletagservices.com/activeview/js/current/osd.js")));

    function Bk() {
        const a = O(),
            b = a.__google_ad_urls;
        if (!b) return a.__google_ad_urls = new Ck(a);
        try {
            if (0 <= b.getOseId()) return b
        } catch (c) {}
        try {
            return a.__google_ad_urls = new Ck(a, b)
        } catch (c) {
            return a.__google_ad_urls = new Ck(a)
        }
    }
    class Ck {
        constructor(a, b) {
            this.l = b && b.l ? b.l : 0;
            this.A = b ? b.A : "";
            this.j = b && b.j ? b.j : [];
            if (b)
                for (a = 0; a < this.j.length; ++a) this.j[a].B = !0
        }
        getNewBlocks(a, b) {
            let c = this.j.length;
            for (let d = 0; d < c; d++) {
                let e = this.j[d];
                !e.A && e.j && (e.A = !0, a(e.j, e.D, e.J, e.l, void 0, e.B, e.F, e.I, e.H))
            }
            b && ((O() || r).google_osd_amcb = a)
        }
        setupOse(a) {
            if (this.getOseId()) return this.getOseId();
            let b = ok();
            if (!b) return 0;
            this.l = b;
            this.A = String(a || 0);
            return this.getOseId()
        }
        getOseId() {
            return window && Math.random && navigator ? this.l : -1
        }
        getCorrelator() {
            return this.A
        }
        numBlocks() {
            return this.j.length
        }
        registerAdBlock(a,
            b, c, d, e, f, g = () => {}) {
            c = zk();
            e = Ng() || -1;
            f = r.pageYOffset;
            0 <= f || (f = -1);
            c && d ? c(d, a, b, !1, void 0, !1, g, e, f) : (g = new Dk(a, b, d, g, e, f), this.j.push(g), yk(d, g.C, !0), wk || (vf(r, "//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om" + `&rs=${b}` + `&req=${a}`), wk = Ak), xk() && jg())
        }
        unloadAdBlock(a, b, c = !1) {
            b = O();
            void 0 !== b.Goog_Osd_UnloadAdBlock && b.Goog_Osd_UnloadAdBlock(a);
            c && (c = pf(this.j, d => d.j == a)) && yk(a, c.C, !1)
        }
    }
    var wk = null,
        qk = 0,
        pk = 0,
        Dk = class {
            constructor(a, b, c, d = ba, e = -1, f = -1) {
                this.D = a;
                this.J = b;
                this.j = c;
                this.B = this.A = this.l = !1;
                this.F = d;
                this.I = e;
                this.H = f;
                this.C = () => this.l = !0
            }
        };
    window.Goog_AdSense_getAdAdapterInstance = Bk;
    pa("Goog_AdSense_OsdAdapter", Ck);

    function Ek() {
        let a = O();
        const b = a.__google_ad_urls;
        return b ? b : a.__google_ad_urls = new Fk
    }
    class Fk {
        getNewBlocks() {}
        setupOse() {}
        getOseId() {
            return -1
        }
        getCorrelator() {
            return ""
        }
        numBlocks() {
            return 0
        }
        registerAdBlock() {}
        unloadAdBlock() {}
    };
    let Gk = null;
    var Hk = (a, b) => {
            let c = 0,
                d = a,
                e = 0;
            for (; a && a != a.parent;)
                if (a = a.parent, e++, Ge(a)) d = a, c = e;
                else if (b) break;
            return {
                $: d,
                level: c
            }
        },
        Ik = () => {
            Gk || (Gk = Hk(r, !0).$);
            return Gk
        };
    var Jk = (a, b, c, d) => {
            c = c || a.google_ad_width;
            d = d || a.google_ad_height;
            if (a && a.top == a) return !1;
            const e = b.documentElement;
            if (c && d) {
                let f = 1,
                    g = 1;
                a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
                if (g > 2 * d || f > 2 * c) return !1
            }
            return !0
        },
        Kk = (a, b) => {
            gg(a, (c, d) => {
                b[d] = c
            })
        },
        Lk = a => {
            let b = a.location.href;
            if (a == a.top) return {
                url: b,
                kb: !0
            };
            let c = !1;
            const d = a.document;
            d && d.referrer && (b = d.referrer, a.parent == a.top && (c = !0));
            (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 == b.indexOf(a) && (c = !1, b = a);
            return {
                url: b,
                kb: c
            }
        },
        Mk = () => {
            var a = O();
            if (a == a.top) return 0;
            for (; a && a != a.top && Ge(a); a = a.parent) {
                if (a.sf_) return 2;
                if (a.$sf) return 3;
                if (a.inGptIF) return 4;
                if (a.inDapIF) return 5
            }
            return 1
        };
    var Nk = a => {
            a = a.google_reactive_ad_format;
            return Ta(a) ? "" + a : null
        },
        Ok = a => !!Nk(a) || null != a.google_pgb_reactive,
        Pk = a => {
            a = Nk(a);
            return 26 == a || 27 == a || 30 == a || 16 == a || 40 == a
        };
    const Qk = a => {
            const b = /[a-zA-Z0-9._~-]/,
                c = /%[89a-zA-Z]./;
            return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
                if (!d.match(c)) {
                    const e = decodeURIComponent(d);
                    if (e.match(b)) return e
                }
                return d.toUpperCase()
            })
        },
        Rk = a => {
            let b = "";
            const c = /[/%?&=]/;
            for (let d = 0; d < a.length; ++d) {
                const e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        };
    var Tk = class extends w {
            constructor(a) {
                super();
                x(this, a, Sk, null)
            }
        },
        Uk = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        Vk = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        Sk = [3];
    var Xk = class extends w {
            constructor(a) {
                super();
                x(this, a, Wk, null)
            }
        },
        Wk = [2];
    var Yk = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };
    var $k = class extends w {
            constructor(a) {
                super();
                x(this, a, Zk, null)
            }
        },
        Zk = [1];
    var bl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, al)
            }
        },
        cl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        dl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        el = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        al = [
            [1, 2, 3]
        ];
    var gl = class extends w {
            constructor(a) {
                super();
                x(this, a, fl, null)
            }
        },
        hl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        fl = [1];
    var jl = class extends w {
            constructor(a) {
                super();
                x(this, a, il, null)
            }
        },
        ll = class extends w {
            constructor(a) {
                super();
                x(this, a, kl, null)
            }
        },
        ml = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        ol = class extends w {
            constructor(a) {
                super();
                x(this, a, null, nl)
            }
        },
        ql = class extends w {
            constructor(a) {
                super();
                x(this, a, null, pl)
            }
        },
        rl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        il = [1],
        kl = [1],
        nl = [
            [1, 2]
        ],
        pl = [
            [1, 2]
        ];

    function sl(a) {
        return J(a, tl, 13)
    }

    function ul(a) {
        return J(a, vl, 15)
    }
    var xl = class extends w {
            constructor(a) {
                super();
                x(this, a, wl, null)
            }
        },
        yl = class extends w {
            constructor() {
                super();
                x(this, void 0, null, null)
            }
        },
        zl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        Bl = class extends w {
            constructor(a) {
                super();
                x(this, a, Al, null)
            }
        },
        Cl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        Dl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        tl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        El = class extends w {
            constructor(a) {
                super();
                x(this,
                    a, null, null)
            }
        },
        vl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        Fl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        Gl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        wl = [1, 2, 5, 7],
        Al = [2, 5, 6, 11];
    var Hl = (a, b) => {
        a = y(a, 2);
        if (!a) return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    };
    const Jl = (a, b) => {
            a = Rk(Qk(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
            const c = Te(a),
                d = Il(a);
            return b.find(e => {
                const f = E(e, 7) ? y(J(e, Cl, 7), 1) : y(e, 1);
                e = E(e, 7) ? y(J(e, Cl, 7), 2) : 2;
                if ("number" !== typeof f) return !1;
                switch (e) {
                    case 1:
                        return f == c;
                    case 2:
                        return d[f] || !1
                }
                return !1
            }) || null
        },
        Il = a => {
            const b = {};
            for (;;) {
                b[Te(a)] = !0;
                if (!a) return b;
                a = a.substring(0, a.lastIndexOf("/"))
            }
        };
    class Kl {
        constructor(a = 1) {
            this.j = a
        }
        next() {
            var a = 48271 * this.j % 2147483647;
            this.j = 0 > 2147483647 * a ? a + 2147483647 : a;
            return this.j / 2147483647
        }
    };

    function Ll(a, b) {
        a.j.forEach((c, d) => void b(c, d, a))
    }

    function Ml(a, b, c) {
        const d = [];
        for (const e of a.j) b(e) ? d.push(e) : c(e);
        return new Nl(d)
    }

    function Ol(a, b = 1) {
        a = a.j.slice(0);
        const c = new Kl(b);
        Ja(a, () => c.next());
        return new Nl(a)
    }
    const Nl = class {
        constructor(a) {
            this.j = a.slice(0)
        }
        filter(a) {
            return new Nl(ya(this.j, a))
        }
        apply(a) {
            return new Nl(a(this.j.slice(0)))
        }
        sort(a) {
            return new Nl(this.j.slice(0).sort(a))
        }
        add(a) {
            const b = this.j.slice(0);
            b.push(a);
            return new Nl(b)
        }
    };
    class Pl {
        constructor(a, {
            Tb: b,
            Lc: c,
            td: d,
            uc: e
        }) {
            this.C = a;
            this.A = c;
            this.B = new Nl(b || []);
            this.l = e;
            this.j = d
        }
    };

    function Ql(a, b) {
        return void 0 !== a.j[Rl(b)]
    }

    function Sl(a) {
        var b = [],
            c;
        for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
        return b
    }

    function Tl(a) {
        var b = [],
            c;
        for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }
    const Ul = class {
        constructor() {
            this.j = {};
            this.l = {}
        }
        set(a, b) {
            const c = Rl(a);
            this.j[c] = b;
            this.l[c] = a
        }
        get(a, b) {
            a = Rl(a);
            return void 0 !== this.j[a] ? this.j[a] : b
        }
        Ea() {
            return Sl(this).length
        }
    };

    function Rl(a) {
        return a instanceof Object ? String(fa(a)) : a + ""
    };
    var Vl = a => {
            var b = a.split("~").filter(c => 0 < c.length);
            a = new Ul;
            for (const c of b) b = c.indexOf("."), -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        Xl = a => {
            var b = Wl(a);
            a = [];
            for (let c of b) b = String(c.Aa), a.push(c.la + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const Wl = a => {
            const b = [],
                c = a.B;
            c && c.j.length && b.push({
                la: "a",
                Aa: Yl(c)
            });
            null != a.A && b.push({
                la: "as",
                Aa: a.A
            });
            null != a.j && b.push({
                la: "i",
                Aa: String(a.j)
            });
            null != a.l && b.push({
                la: "rp",
                Aa: String(a.l)
            });
            b.sort(function(d, e) {
                return d.la.localeCompare(e.la)
            });
            b.unshift({
                la: "t",
                Aa: Zl(a.C)
            });
            return b
        },
        Zl = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        Yl = a => {
            a = a.j.slice(0).map($l);
            a = JSON.stringify(a);
            return Te(a)
        },
        $l = a => {
            const b = {};
            null != y(a, 7) && (b.q = y(a, 7));
            null !=
                y(a, 2) && (b.o = y(a, 2));
            null != y(a, 5) && (b.p = y(a, 5));
            return b
        };

    function am(a) {
        const b = [].slice.call(arguments).filter(Na(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Wb || []);
            d = Object.assign(d, e.Fa())
        });
        return new bm(c, d)
    }

    function cm(a) {
        switch (a) {
            case 1:
                return new bm(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new bm(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new bm(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new bm(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function dm(a) {
        return null == a ? null : new bm(null, {
            google_placement_id: Xl(a)
        })
    }
    class bm {
        constructor(a, b) {
            this.Wb = a;
            this.j = b
        }
        Fa() {
            return this.j
        }
    };
    const em = {
        ["google_ad_channel"]: !0,
        ["google_ad_host"]: !0
    };
    var fm = (a, b) => {
            a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
            P(Q, "ama", b, !0, .01, void 0)
        },
        gm = a => {
            const b = {};
            Re(em, (c, d) => {
                d in a && (b[d] = a[d])
            });
            return b
        };
    var hm = a => {
        try {
            try {
                a.localStorage.removeItem("google_ama_config")
            } catch (b) {
                fm(a, {
                    lserr: 1
                })
            }
        } catch (b) {
            fm(a, {
                lserr: 1
            })
        }
    };
    var im = class extends w {
        constructor() {
            super();
            x(this, void 0, null, null)
        }
    };

    function jm(a, b) {
        if (b) {
            var c = b.adClient;
            if ("string" === typeof c && c) {
                a.Qa = c;
                a.A = !!b.adTest;
                c = b.pubVars;
                ea(c) && (a.G = c);
                if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
                    a.D = {};
                    for (d of b.fillMessage) a.D[d.key] = d.value
                }
                a.B = b.adWidth;
                a.l = b.adHeight;
                ig(a.B) && ig(a.l) || P(Q, "rctnosize", b, !0, void 0, void 0);
                var d = !0
            } else d = !1
        } else d = !1;
        return d && a.H(b)
    }
    class km {
        constructor() {
            this.D = this.G = this.A = this.Qa = null;
            this.l = this.B = 0
        }
        H() {
            return !0
        }
    };
    class lm extends km {
        constructor() {
            super();
            this.C = !1;
            this.j = null;
            this.F = !1
        }
        H(a) {
            this.C = !!a.enableAma;
            var b = a.amaConfig;
            if (b) try {
                var c = nd(xl, b)
            } catch (d) {
                c = null
            } else c = null;
            this.j = c;
            Array.isArray(a.fillMessage) && (this.F = !0);
            return !0
        }
    };
    var om = (a, b) => {
        const c = new mm(a, b);
        return () => nm(c)
    };

    function nm(a) {
        if (a.j) return !1;
        if (null == a.l) return pm(a), !0;
        const b = a.l + 1E3 - (new Date).getTime();
        if (1 > b) return pm(a), !0;
        qm(a, b);
        return !0
    }

    function pm(a) {
        a.l = (new Date).getTime();
        a.B()
    }

    function qm(a, b) {
        a.j = !0;
        a.A.setTimeout(() => {
            a.j = !1;
            pm(a)
        }, b)
    }
    class mm {
        constructor(a, b) {
            this.A = a;
            this.B = b;
            this.l = null;
            this.j = !1
        }
    };

    function rm(a, b) {
        a.D ? b(a.A) : a.l.push(b)
    }

    function sm(a, b) {
        a.D = !0;
        a.A = b;
        a.l.forEach(c => {
            c(a.A)
        });
        a.l = []
    }
    class tm {
        constructor(a) {
            this.j = a;
            this.l = [];
            this.D = !1;
            this.C = this.A = null;
            this.F = om(a, () => {
                if (null != this.C) {
                    var b = pi(this.j, !0) - this.C;
                    1E3 < b && sm(this, b)
                }
            });
            this.B = null
        }
        P(a, b) {
            null == a ? (this.C = a = pi(this.j, !0), this.j.addEventListener("scroll", this.F), null != b && b(a)) : this.B = this.j.setTimeout(() => {
                this.P(void 0, b)
            }, a)
        }
        Ya() {
            null != this.B && this.j.clearTimeout(this.B);
            this.j.removeEventListener("scroll", this.F);
            this.l = [];
            this.A = null
        }
    };
    const um = class {
        constructor(a) {
            this.j = new Ul;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.j.set(a, !0)
        }
        contains(a) {
            return Ql(this.j, a)
        }
    };
    var vm = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };

    function wm(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? nd(vm, b) : null
        } catch (b) {
            return null
        }
    }

    function xm(a, b) {
        if (void 0 !== a.zb) {
            let c = wm(b);
            c || (c = new vm);
            void 0 !== a.zb && z(c, 2, a.zb);
            z(c, 1, oa() + 864E5);
            a = c.F();
            try {
                b.localStorage.setItem("google_ama_settings", a)
            } catch (d) {}
        } else if ((a = wm(b)) && y(a, 1) < oa()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (c) {}
    };

    function ym(a, b, c = !1) {
        a.l.push(b);
        c && b(a.j)
    }

    function zm(a, b) {
        a.j = b;
        wa(a.l, c => {
            c(a.j)
        })
    }

    function Am(a, b) {
        ym(b, c => zm(a, c), !0)
    }
    class Bm {
        constructor(a) {
            this.j = a;
            this.l = []
        }
        map(a) {
            const b = new Bm(a(this.j));
            ym(this, c => zm(b, a(c)));
            return b
        }
    };
    const Cm = ["-webkit-text-fill-color"];

    function Dm(a) {
        if (Kc) {
            {
                const c = Ne(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = Em(a)
                } else a = Fm()
            }
        } else a = Fm();
        return a
    }
    var Fm = () => {
        const a = {
            all: "initial"
        };
        wa(Cm, b => {
            a[b] = "unset"
        });
        return a
    };

    function Em(a) {
        wa(Cm, b => {
            delete a[b]
        });
        return a
    };

    function Gm(a, b) {
        const c = a.document.createElement("img");
        Hm(a, c);
        vc(c, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg");
        M(c, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: null == b ? "auto" : "pointer"
        });
        b && c.addEventListener("click", d => {
            b();
            d.stopPropagation()
        });
        return c
    }

    function Im(a, b) {
        const c = b.document.createElement("button");
        Hm(b, c);
        M(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.l));
        c.addEventListener("click", d => {
            a.A();
            d.stopPropagation()
        });
        return c
    }

    function Jm(a, b, c) {
        const d = b.document.createElement("img");
        vc(d, "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg");
        d.setAttribute("aria-label", a.B);
        Hm(b, d);
        M(d, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        d.addEventListener("click", e => {
            c();
            e.stopPropagation()
        });
        return d
    }

    function Km(a) {
        const b = a.document.createElement("ins");
        Hm(a, b);
        M(b, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)"
        });
        return b
    }
    class Lm {
        constructor(a, b, c) {
            this.l = a;
            this.B = b;
            this.A = c;
            this.j = new Bm(!1)
        }
        $a(a, b, c, d) {
            const e = Gm(a, d),
                f = Gm(a),
                g = Im(this, a),
                h = Jm(this, a, c);
            a = Km(a);
            a.appendChild(e);
            a.appendChild(f);
            a.appendChild(g);
            a.appendChild(h);
            ym(this.j, k => {
                M(e, {
                    display: k ? "none" : "inline"
                });
                M(f, {
                    display: k ? "inline" : "none"
                });
                k ? (M(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), M(h, {
                        margin: "0px 12px 0px 8px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms"
                    })) :
                    (M(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), M(h, {
                        margin: "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 100ms, opacity 50ms, width 100ms"
                    }))
            }, !0);
            return a
        }
        cc() {
            return 40
        }
        lc() {
            zm(this.j, !1);
            return 0
        }
        mc() {
            zm(this.j, !0)
        }
    }

    function Hm(a, b) {
        M(b, Dm(a));
        M(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    };

    function Mm(a, b) {
        const c = b.document.createElement("button");
        Nm(a, b, c);
        b = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.l
        };
        a.j && (b["border-top"] = a.j, b["border-bottom"] = a.j);
        M(c, b);
        c.addEventListener("click", d => {
            a.D();
            d.stopPropagation()
        });
        return c
    }

    function Om(a, b, c, d) {
        const e = b.document.createElement("div");
        M(e, {
            "align-items": "center",
            "background-color": a.l,
            display: "flex",
            "justify-content": "center"
        });
        const f = b.document.createElement("span");
        f.appendChild(b.document.createTextNode(d));
        M(f, Dm(b));
        M(f, {
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            padding: "8px 0px"
        });
        b = b.matchMedia("(min-width: 768px)");
        d = g => {
            g.matches ? (M(e, {
                    "flex-direction": "row"
                }), a.j && M(e, {
                    "border-top": a.j,
                    "border-bottom": a.j
                }), M(f, {
                    "margin-left": "8px",
                    "text-align": "start"
                }),
                M(c, {
                    border: "0",
                    "margin-right": "8px",
                    width: "auto"
                })) : (M(e, {
                border: "0",
                "flex-direction": "column"
            }), M(f, {
                "margin-left": "0",
                "text-align": "center"
            }), M(c, {
                "margin-right": "0",
                width: "100%"
            }), a.j && M(c, {
                "border-top": a.j,
                "border-bottom": a.j
            }))
        };
        d(b);
        b.addEventListener("change", d);
        e.appendChild(c);
        e.appendChild(f);
        return e
    }

    function Nm(a, b, c) {
        M(c, Dm(b));
        M(c, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.F,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.H,
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class Pm {
        constructor(a, b, c, d, e, f = null, g = null, h = null) {
            this.C = a;
            this.D = b;
            this.H = c;
            this.l = d;
            this.F = e;
            this.B = f;
            this.j = g;
            this.A = h
        }
        $a(a) {
            const b = a.document.createElement("div");
            Nm(this, a, b);
            M(b, {
                display: "inline-flex",
                padding: "8px 0px",
                "background-color": this.l
            });
            if (this.B) {
                var c = a.document.createElement("img");
                vc(c, this.B);
                Nm(this, a, c);
                M(c, {
                    margin: "0px 8px 0px 0px",
                    width: "24px",
                    height: "24px"
                })
            } else c = null;
            c && b.appendChild(c);
            c = a.document.createElement("span");
            Nm(this, a, c);
            M(c, {
                "line-height": "24px"
            });
            c.appendChild(a.document.createTextNode(this.C));
            b.appendChild(c);
            c = Mm(this, a);
            c.appendChild(b);
            return this.A ? Om(this, a, c, this.A) : c
        }
    };

    function Qm(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function Rm(a) {
        a = za(a, b => new Af(b.top, b.right, b.bottom, b.left));
        a = Sm(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function Sm(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return Aa(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, Bf(a[0]))
    };

    function Tm(a, b, c) {
        return {
            top: a.j - c,
            right: a.A + a.l + b,
            bottom: a.j + c,
            left: a.A - b
        }
    }
    class Um {
        constructor(a, b, c) {
            this.A = a;
            this.j = b;
            this.l = c
        }
    };

    function Vm(a) {
        return new Wm({
            value: a
        }, null)
    }

    function Xm(a) {
        return null != a.j ? a.j.value : null
    }

    function Ym(a, b) {
        null != a.j || b(a.l);
        return a
    }
    class Wm {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        map(a) {
            return null != this.j ? (a = a(this.j.value), a instanceof Wm ? a : Vm(a)) : this
        }
    };
    var Zm = (a, b) => {
            try {
                const c = b.document.documentElement.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                return {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (c) {
                return null
            }
        },
        $m = (a, b) => {
            const c = 40 === a.google_reactive_ad_format,
                d = !!a.rss || 16 === a.google_reactive_ad_format;
            return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b.top == b
        },
        an = (a, b, c) => {
            a = a.style;
            "rtl" == b ? V(zj) ? a.setProperty("margin-right", c, "important") :
                a.marginRight = c : V(zj) ? a.setProperty("margin-left", c, "important") : a.marginLeft = c
        };
    const bn = (a, b, c) => {
        a = Zm(b, a);
        return "rtl" == c ? -a.x : a.x
    };
    var cn = (a, b) => {
            b = b.parentElement;
            return b ? (a = Ne(b, a)) ? a.direction : "" : ""
        },
        dn = (a, b, c) => {
            if (0 === bn(a, b, c)) return !1;
            an(b, c, "0px");
            const d = bn(a, b, c);
            an(b, c, -1 * d + "px");
            a = bn(a, b, c);
            0 !== a && a !== d && an(b, c, d / (a - d) * d + "px");
            return !0
        };

    function en(a, b) {
        fn(a).forEach(b, void 0)
    }

    function fn(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function hn(a) {
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
    }

    function jn(a) {
        return fn(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };

    function kn(a, b) {
        a = De(new qe(a), "DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function ln(a, b, c) {
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
        hn(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function mn(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            hn(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var on = (a, b, c, d = 0) => {
            var e = nn(b, c, d);
            if (e.P) {
                for (c = b = e.P; c = e.bb(c);) b = c;
                e = {
                    anchor: b,
                    position: e.ob
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            ln(a, e.anchor, e.position)
        },
        pn = (a, b, c, d = 0) => {
            V(cj) ? on(a, b, c, d) : ln(a, b, c)
        };

    function nn(a, b, c) {
        const d = f => {
                f = qn(f);
                return null == f ? !1 : c < f
            },
            e = f => {
                f = qn(f);
                return null == f ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    P: rn(a.previousSibling, d),
                    bb: f => rn(f.previousSibling, d),
                    ob: 0
                };
            case 2:
                return {
                    P: rn(a.lastChild, d),
                    bb: f => rn(f.previousSibling, d),
                    ob: 0
                };
            case 3:
                return {
                    P: rn(a.nextSibling, e),
                    bb: f => rn(f.nextSibling, e),
                    ob: 3
                };
            case 1:
                return {
                    P: rn(a.firstChild, e),
                    bb: f => rn(f.nextSibling, e),
                    ob: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function qn(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function rn(a, b) {
        return a && b(a) ? a : null
    };

    function sn(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = Bc(d.Kb);
            a[e] = d.value
        }
    }

    function tn(a, b, c, d, e, f) {
        a = un(a, e);
        a.Y.setAttribute("data-ad-format", d ? d : "auto");
        vn(a, b, c, f);
        return a
    }

    function wn(a, b, c = null) {
        a = un(a, {});
        vn(a, b, null, c);
        return a
    }

    function vn(a, b, c, d) {
        var e = [];
        if (d = d && d.Wb) a.sa.className = d.join(" ");
        a = a.Y;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function un(a, b) {
        var c = kn(a, b.clearBoth || !1),
            d = c.style;
        d.textAlign = "center";
        b.nb && sn(d, b.nb);
        a = De(new qe(a), "INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.Rb && (d.marginTop = b.Rb);
        b.wb && (d.marginBottom = b.wb);
        b.ya && sn(d, b.ya);
        c.appendChild(a);
        return {
            sa: c,
            Y: a
        }
    }

    function xn(a, b, c) {
        b.setAttribute("data-adsbygoogle-status", "reserved");
        b.className += " adsbygoogle-noablate";
        var d = {
            element: b
        };
        c = c && c.Fa();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function yn(a) {
        var b = jn(a.document);
        wa(b, function(c) {
            var d = zn(a, c),
                e;
            if (e = d) e = Zm(c, a), e = !((e ? e.y : 0) < S(a).clientHeight);
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), xn(a, c))
        })
    }

    function zn(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in $d) a[$d[c]] && (b[$d[c]] = a[$d[c]]);
        return b
    };

    function An(a) {
        var b = [];
        en(a.getElementsByTagName("p"), function(c) {
            100 <= Bn(c) && b.push(c)
        });
        return b
    }

    function Bn(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        en(a.childNodes, function(c) {
            b += Bn(c)
        });
        return b
    }

    function Cn(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Dn(a, b) {
        if (null == a.j) return b;
        switch (a.j) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.j);
        }
    }

    function En(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.B)
        } catch (g) {}
        if (!c.length) return [];
        b = Ga(c);
        b = Dn(a, b);
        "number" === typeof a.l && (c = a.l, 0 > c && (c += b.length), b = 0 <= c && c < b.length ? [b[c]] : []);
        if ("number" === typeof a.A) {
            c = [];
            for (var d = 0; d < b.length; d++) {
                var e = An(b[d]),
                    f = a.A;
                0 > f && (f += e.length);
                0 <= f && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    const Fn = class {
        constructor(a, b, c, d) {
            this.B = a;
            this.l = b;
            this.A = c;
            this.j = d
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.B,
                occurrenceIndex: this.l,
                paragraphIndex: this.A,
                ignoreMode: this.j
            })
        }
    };

    function Gn(a) {
        if (!a) return null;
        var b = y(a, 7);
        if (y(a, 1) || y(a, 3) || 0 < y(a, 4).length) {
            var c = y(a, 3),
                d = y(a, 1),
                e = y(a, 4);
            b = y(a, 2);
            var f = y(a, 5);
            a = Hn(y(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + Cn(c));
            if (e)
                for (c = 0; c < e.length; c++) g += "." + Cn(e[c]);
            b = (e = g) ? new Fn(e, b, f, a) : null
        } else b = b ? new Fn(b, y(a, 2), y(a, 5), Hn(y(a, 6))) : null;
        return b
    }
    var In = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Hn(a) {
        return null == a ? a : In[a]
    }

    function Jn(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = y(a[c], 1),
                e = y(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.Kb = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function Kn(a, b) {
        var c = {};
        a && (c.Rb = y(a, 1), c.wb = y(a, 2), c.clearBoth = !!G(a, 3));
        b && (c.nb = Jn(K(b, Hh, 3)), c.ya = Jn(K(b, Hh, 4)));
        return c
    }
    var Ln = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        Mn = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    const Nn = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            return tn(d.document, a, null, null, this.j, b)
        }
        A() {
            return null
        }
    };
    const On = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            var e = 0 < K(this.j, Jh, 9).length ? K(this.j, Jh, 9)[0] : null,
                f = Kn(J(this.j, Lh, 3), e);
            if (!e) return null;
            if (e = y(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = De(new qe(d), g);
                c.style.clear = f.clearBoth ? "both" : "none";
                "A" == g && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.nb && sn(c.style, f.nb);
                d = De(new qe(d), "INS");
                f.ya && sn(d.style, f.ya);
                c.appendChild(d);
                f = {
                    sa: c,
                    Y: d
                };
                f.Y.setAttribute("data-ad-type", "text");
                f.Y.setAttribute("data-native-settings-key",
                    e);
                vn(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        A() {
            var a = 0 < K(this.j, Jh, 9).length ? K(this.j, Jh, 9)[0] : null;
            if (!a) return null;
            a = K(a, Hh, 3);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if ("height" == y(c, 1) && 0 < parseInt(y(c, 2), 10)) return parseInt(y(c, 2), 10)
            }
            return null
        }
    };
    var Pn = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            if (!this.j) return null;
            const e = this.j.google_ad_format || null,
                f = this.j.google_ad_slot || null;
            if (c = c.style) {
                var g = [];
                for (let h = 0; h < c.length; h++) {
                    const k = c.item(h);
                    "width" !== k && "height" !== k && g.push({
                        Kb: k,
                        value: c.getPropertyValue(k)
                    })
                }
                c = {
                    ya: g
                }
            } else c = {};
            a = tn(d.document, a, f, e, c, b);
            a.Y.setAttribute("data-pub-vars", JSON.stringify(this.j));
            return a
        }
        A() {
            return this.j ? parseInt(this.j.google_ad_height, 10) || null : null
        }
        Fa() {
            return this.j
        }
    };
    class Qn {
        constructor(a) {
            this.l = a
        }
        j() {
            return new bm([], {
                ["google_ad_type"]: this.l,
                ["google_reactive_ad_format"]: 26,
                ["google_ad_format"]: "fluid"
            })
        }
    };
    var Rn = class {
        constructor(a, b) {
            this.B = a;
            this.A = b
        }
        l() {
            return this.A
        }
        j(a) {
            a = En(this.B, a.document);
            return 0 < a.length ? a[0] : null
        }
    };

    function Sn(a, b, c, d) {
        var e = a.T();
        if (!e) return null;
        var f = Gn(e);
        if (!f) return null;
        var g = a.l();
        g = Ln[g];
        var h = void 0 === g ? null : g;
        if (null === h) return null;
        g = (g = J(a, Lh, 3)) ? G(g, 3) : null;
        f = new Rn(f, h);
        h = y(a, 10).slice(0);
        E(e, 5) && h.push(1);
        var k = d ? d : {};
        d = y(a, 12);
        e = E(a, 4) ? J(a, Nh, 4) : null;
        switch (y(a, 8)) {
            case 1:
                return k = k.bd || null, new Tn(f, new Nn(Kn(J(a, Lh, 3), null)), k, g, 0, h, e, c, b, d, a);
            case 2:
                return new Tn(f, new On(a), k.ud || new Qn("text"), g, 1, h, e, c, b, d, a)
        }
        return null
    }

    function Un(a, b, c) {
        const d = [];
        for (let e = 0; e < a.length; e++) {
            const f = Sn(a[e], e, b, c);
            null !== f && d.push(f)
        }
        return d
    }

    function Vn(a) {
        return a.B
    }

    function Wn(a) {
        return a.D instanceof Pn ? a.D.Fa() : null
    }

    function Xn(a, b, c) {
        Ql(a.K, b) || a.K.set(b, []);
        a.K.get(b).push(c)
    }

    function Yn(a) {
        return kn(a.j.document, a.I || !1)
    }

    function Zn(a) {
        return a.D.A(a.j)
    }

    function $n(a, b = null, c = null) {
        return new Tn(a.H, b || a.D, c || a.L, a.I, a.ua, a.Hb, a.Ia, a.j, a.W, a.F, a.A, a.C, a.N)
    }
    class Tn {
        constructor(a, b, c, d, e, f, g, h, k, l = null, n = null, m = null, p = null) {
            this.H = a;
            this.D = b;
            this.L = c;
            this.I = d;
            this.ua = e;
            this.Hb = f;
            this.Ia = g ? g : new Nh;
            this.j = h;
            this.W = k;
            this.F = l;
            this.A = n;
            this.C = m;
            this.N = p;
            this.J = [];
            this.B = !1;
            this.K = new Ul
        }
        M() {
            return this.j
        }
        l() {
            return this.H.l()
        }
    };
    var ao = a => (null == a ? 0 : a.google_ad_slot) ? Vm(new Pl(1, {
            Lc: a.google_ad_slot
        })) : new Wm(null, Error("Missing dimension when creating placement id")),
        co = a => {
            switch (a.ua) {
                case 0:
                case 1:
                    var b = a.A;
                    null == b ? a = null : (a = b.T(), null == a ? a = null : (b = b.l(), a = null == b ? null : new Pl(0, {
                        Tb: [a],
                        uc: b
                    })));
                    return null != a ? Vm(a) : new Wm(null, Error("Missing dimension when creating placement id"));
                case 2:
                    return a = bo(a), null != a ? Vm(a) : new Wm(null, Error("Missing dimension when creating placement id"));
                default:
                    return new Wm(null, Error("Invalid type: " +
                        a.ua))
            }
        };
    const bo = a => {
        if (null == a || null == a.C) return null;
        const b = J(a.C, Gh, 1),
            c = J(a.C, Gh, 2);
        if (null == b || null == c) return null;
        const d = a.N;
        if (null == d) return null;
        a = a.l();
        return null == a ? null : new Pl(0, {
            Tb: [b, c],
            td: d,
            uc: Mn[a]
        })
    };

    function eo(a) {
        const b = Wn(a.O);
        return (b ? ao(b) : co(a.O)).map(c => Xl(c))
    }

    function fo(a) {
        a.j = a.j || eo(a);
        return a.j
    }

    function go(a, b) {
        if (a.O.B) throw Error("AMA:AP:AP");
        pn(b, a.T(), a.O.l());
        a = a.O;
        a.B = !0;
        null != b && a.J.push(b)
    }
    var ho = class {
        constructor(a, b, c) {
            this.O = a;
            this.l = b;
            this.U = c;
            this.j = null
        }
        T() {
            return this.l
        }
        fill(a, b) {
            var c = this.O;
            (a = c.D.l(a, b, this.l, c.j)) && go(this, a.sa);
            return a
        }
    };
    var io = R(754, function(a, b) {
        var c = [],
            d = [];
        try {
            for (var e = [], f = 0; f < a.length; f++) {
                var g = a[f],
                    h = g.H.j(g.j);
                h && e.push({
                    oc: g,
                    anchorElement: h
                })
            }
            for (f = 0; f < e.length; f++) {
                a = d;
                var k = a.push;
                var l = e[f],
                    n = l.anchorElement,
                    m = l.oc,
                    p = m.I,
                    q = m.j.document.createElement("div");
                q.className = "google-auto-placed";
                var v = q.style;
                v.textAlign = "center";
                v.width = "100%";
                v.height = "0px";
                v.clear = p ? "both" : "none";
                var u = q;
                try {
                    pn(u, n, m.l());
                    var A = u
                } catch (C) {
                    throw mn(u), C;
                }
                k.call(a, A)
            }
            var D = ui(b),
                F = vi(b);
            for (f = 0; f < d.length; f++) {
                b = F;
                k = D;
                var I =
                    d[f].getBoundingClientRect(),
                    B = e[f];
                c.push(new ho(B.oc, B.anchorElement, new Um(I.left + b, I.top + k, I.right - I.left)))
            }
        } finally {
            for (f = 0; f < d.length; f++) mn(d[f])
        }
        return c
    });
    var jo = (a, b) => {
        b = b.filter(c => 5 == y(J(c, Nh, 4), 1) && 1 == y(c, 8));
        b = Un(b, a);
        a = io(b, a);
        a.sort((c, d) => d.U.j - c.U.j);
        return a[0] || null
    };
    var mo = (a, b, c, d = null, e) => {
            let f = 0;
            try {
                f = e ? f | (a.innerHeight >= e ? 0 : 1024) : f | (a.innerHeight >= a.innerWidth ? 0 : 8), f |= ni(a, c), f |= oi(a)
            } catch (g) {
                f |= 32
            }
            switch (b) {
                case 2:
                    ko(a, d) && (f |= 16777216);
                    break;
                case 1:
                    lo(a, d) && (f |= 16777216)
            }
            return f
        },
        ko = (a, b = null) => {
            const c = no(a.innerWidth, 0, Math.round(a.innerWidth / 320 * 50 + 15));
            return oo(a, c, b)
        },
        lo = (a, b = null) => {
            const c = a.innerWidth,
                d = a.innerHeight,
                e = Math.round(a.innerWidth / 320 * 50 + 15),
                f = no(c, d - e, d);
            25 < e && f.push({
                x: c - 25,
                y: d - 25
            });
            return oo(a, f, b)
        },
        qo = (a, b) => {
            const c = a.innerWidth,
                d = a.innerHeight;
            let e = d;
            for (; e > b;) {
                var f = no(c, e - b, e);
                f = po(a, f);
                if (!f) return d - e;
                e = f.getBoundingClientRect().top - 1
            }
            return null
        },
        oo = (a, b, c = null) => null != po(a, b, c);

    function po(a, b, c = null) {
        for (const d of b)
            if (b = ro(a, d, c)) return b;
        return null
    }

    function ro(a, b, c = null) {
        var d = a.document;
        var e = b.x;
        b = b.y;
        d.hasOwnProperty("_goog_efp_called_") || (d._goog_efp_called_ = d.elementFromPoint(e, b));
        return (d = d.elementFromPoint(e, b)) ? so(d, a, c) || to(d, a, c) || null : null
    }

    function to(a, b, c = null) {
        const d = b.document;
        for (a = a.offsetParent; a && a != d.body; a = a.offsetParent) {
            const e = so(a, b, c);
            if (e) return e
        }
        return null
    }
    var no = (a, b, c) => {
        const d = [];
        for (let f = 0; 3 > f; f++)
            for (let g = 0; 3 > g; g++) {
                var e = d;
                e.push.call(e, {
                    x: g / 2 * a,
                    y: b + f / 2 * (c - b)
                })
            }
        return d
    };

    function so(a, b, c = null) {
        if ("fixed" !== Yf(a, "position")) return null;
        var d = "GoogleActiveViewInnerContainer" == a.getAttribute("class") || 1 >= ag(a).width && 1 >= ag(a).height ? !0 : !1;
        c && P(c, "ach_evt", {
            url: b.location.href,
            tn: a.tagName,
            id: a.getAttribute("id"),
            cls: a.getAttribute("class"),
            ign: d
        }, !0, 1);
        return d ? null : a
    };

    function uo(a) {
        if (a.I) {
            const b = ui(a.j);
            if (b > a.l + 100 || b < a.l - 100) vo(a), a.l = qi(a.j)
        }
        a.J && a.j.clearTimeout(a.J);
        a.J = a.j.setTimeout(() => wo(a), 200)
    }

    function wo(a) {
        var b = qi(a.j);
        a.l && a.l > b && (a.l = b);
        b = ui(a.j);
        b >= a.l - 100 && (a.l = Math.max(a.l, b), xo(a))
    }

    function yo(a) {
        a.j.removeEventListener("scroll", a.L)
    }

    function vo(a) {
        a.I = !1;
        const b = a.D.lc();
        switch (b) {
            case 0:
                zm(a.C, a.F);
                break;
            case 1:
                a.A && (M(a.A, {
                    display: "none"
                }), zm(a.C, null));
                break;
            default:
                throw Error("Unhandled OnHideOutcome: " + b);
        }
    }

    function xo(a) {
        a.A || (a.A = zo(a));
        M(a.A, {
            display: "block"
        });
        a.I = !0;
        a.D.mc();
        zm(a.C, a.F)
    }

    function zo(a) {
        var b = qo(a.j, a.D.cc() + 60);
        b = null == b ? 30 : b + 30;
        const c = a.j.document.createElement("div");
        M(c, Dm(a.j));
        M(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.F = a.D.$a(a.j, () => a.B(), () => {
            yo(a);
            vo(a)
        }, () => {
            yo(a);
            xo(a)
        });
        c.appendChild(a.F);
        a.K && (c.className = a.K);
        a.j.document.body.appendChild(c);
        return c
    }
    class Ao {
        constructor(a, b, c) {
            this.j = a;
            this.D = b;
            this.F = null;
            this.C = new Bm(null);
            this.K = c || null;
            this.A = null;
            this.I = !1;
            this.l = 0;
            this.J = null;
            this.L = () => uo(this)
        }
        P() {
            this.j.addEventListener("scroll", this.L);
            this.l = qi(this.j);
            wo(this)
        }
        B() {
            this.A && this.A.parentNode && this.A.parentNode.removeChild(this.A);
            this.A = null;
            yo(this);
            zm(this.C, null)
        }
        H() {
            return this.C
        }
    };

    function Bo(a) {
        const b = Yn(a.A.O),
            c = a.D.$a(a.F, () => a.B());
        b.appendChild(c);
        a.C && (b.className = a.C);
        return {
            ld: b,
            hd: c
        }
    }
    class Co {
        constructor(a, b, c, d) {
            this.F = a;
            this.A = b;
            this.D = c;
            this.C = d || null;
            this.j = null;
            this.l = new Bm(null)
        }
        P() {
            const a = Bo(this);
            this.j = a.ld;
            go(this.A, this.j);
            zm(this.l, a.hd)
        }
        B() {
            this.j && this.j.parentNode && this.j.parentNode.removeChild(this.j);
            this.j = null;
            zm(this.l, null)
        }
        H() {
            return this.l
        }
    };

    function Do(a) {
        zm(a.F, 0);
        null != a.A && (a.A.B(), a.A = null);
        null != a.l && (a.l.B(), a.l = null)
    }

    function Eo(a) {
        a.l = new Ao(a.D, a.K, a.I);
        a.l.P();
        Am(a.C, a.l.H());
        zm(a.F, 2)
    }
    class Fo {
        constructor(a, b, c, d, e) {
            this.D = a;
            this.J = b;
            this.L = c;
            this.K = d;
            this.I = e;
            this.F = new Bm(0);
            this.C = new Bm(null);
            this.l = this.A = this.j = null
        }
        P() {
            this.J ? (this.A = new Co(this.D, this.J, this.L, this.I), this.A.P(), Am(this.C, this.A.H()), zm(this.F, 1), null == this.j && (this.j = new tm(this.D), this.j.P(2E3)), rm(this.j, () => {
                Do(this);
                Eo(this)
            })) : Eo(this)
        }
        B() {
            Do(this);
            this.j && (this.j.Ya(), this.j = null)
        }
        H() {
            return this.C
        }
    };
    var Go = (a, b, c, d, e) => {
        a = new Fo(a, jo(a, e), new Pm(b, d, "#FFF", "#4A4A4A", "normal"), new Lm(b, c, d), "google-dns-link-placeholder");
        a.P();
        return a
    };
    var Ho = a => a.googlefc = a.googlefc || {},
        Io = a => {
            a = a.googlefc = a.googlefc || {};
            return a.ccpa = a.ccpa || {}
        };

    function Jo(a) {
        const b = Ko(a);
        wa(a.j.maxZIndexListeners, c => c(b))
    }

    function Ko(a) {
        a = Se(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    class Lo {
        constructor(a) {
            this.j = ji(a).floatingAdsStacking
        }
    }

    function Mo(a) {
        if (null == a.j) {
            var b = a.l;
            const c = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[c] = 2147483643;
            Jo(b);
            a.j = c
        }
    }

    function No(a) {
        if (null != a.j) {
            var b = a.l;
            delete b.j.maxZIndexRestrictions[a.j];
            Jo(b);
            a.j = null
        }
    }
    class Oo {
        constructor(a) {
            this.l = a;
            this.j = null
        }
    };

    function Po(a) {
        var b = Io(a.j);
        if (Qo(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            null != c && null != b && (a.l = Go(a.j, c, b, () => Ro(a), a.B))
        }
    }

    function So(a) {
        const b = Ho(a.j);
        Io(a.j).overrideDnsLink = !0;
        b.callbackQueue = b.callbackQueue || [];
        b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: () => Po(a)
        })
    }

    function Ro(a) {
        Mo(a.A);
        Io(a.j).openConfirmationDialog(b => {
            b && a.l && (a.l.B(), a.l = null);
            No(a.A)
        })
    }
    class To {
        constructor(a, b, c) {
            this.j = a;
            this.A = new Oo(b);
            this.B = c;
            this.l = null
        }
    }

    function Qo(a, b) {
        switch (a) {
            case b.CCPA_DOES_NOT_APPLY:
            case b.OPTED_OUT:
                return !1;
            case b.NOT_OPTED_OUT:
                return !0;
            default:
                return !0
        }
    };

    function Uo(a) {
        const b = a.document.createElement("ins");
        Vo(a, b);
        M(b, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return b
    }

    function Wo(a, b, c, d) {
        const e = a.document.createElement("img");
        vc(e, b);
        d && e.setAttribute("aria-label", d);
        Vo(a, e);
        M(e, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        e.addEventListener("click", f => {
            c();
            f.stopPropagation()
        });
        return e
    }

    function Xo(a, b) {
        const c = b.document.createElement("span");
        Vo(b, c);
        M(c, {
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.B));
        c.addEventListener("click", d => {
            a.l();
            d.stopPropagation()
        });
        return c
    }

    function Yo(a, b) {
        const c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.A));
        M(c, Dm(b));
        M(c, {
            "border-top": "11px solid #ECEDED",
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            "line-height": "1414px",
            padding: "8px 32px",
            "text-align": "center"
        });
        return c
    }

    function Zo(a) {
        const b = a.document.createElement("div");
        M(b, Dm(a));
        M(b, {
            "align-items": "flex-start",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
            display: "inline-flex",
            "flex-direction": "column",
            "float": "left"
        });
        return b
    }
    class $o {
        constructor(a, b, c, d) {
            this.B = a;
            this.C = b;
            this.A = c;
            this.l = d;
            this.j = new Bm(!1)
        }
        $a(a, b, c, d) {
            c = Uo(a);
            const e = Wo(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d),
                f = Wo(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.l),
                g = Xo(this, a),
                h = Wo(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.C);
            M(h, {
                "margin-left": "auto"
            });
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(g);
            c.appendChild(h);
            const k = Yo(this, a);
            a = Zo(a);
            a.appendChild(c);
            a.appendChild(k);
            ym(this.j, l => {
                M(e, {
                    display: l ? "none" : "inline"
                });
                M(f, {
                    display: l ? "inline" : "none"
                });
                l ? (M(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), M(h, {
                        "margin-right": "12px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 50ms, opacity 50ms 50ms, width 50ms"
                    }), M(k, {
                        "border-width": "1px",
                        "line-height": "14px",
                        "max-width": "100vw",
                        opacity: "1",
                        padding: "8px 32px",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms"
                    })) :
                    (M(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), M(h, {
                        "margin-right": "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms"
                    }), M(k, {
                        "border-width": "0px",
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        padding: "0",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms"
                    }))
            }, !0);
            return a
        }
        cc() {
            return 71
        }
        lc() {
            zm(this.j, !1);
            return 0
        }
        mc() {
            zm(this.j, !0)
        }
    }

    function Vo(a, b) {
        M(b, Dm(a));
        M(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    };

    function ap(a) {
        bp(a.l, b => {
            var c = a.B,
                d = b.Td,
                e = b.gd,
                f = b.Uc;
            b = b.showRevocationMessage;
            (new Fo(c, jo(c, a.A), new Pm(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new $o(d, e, f, b), "google-revocation-link-placeholder")).P()
        }, () => {
            No(a.j)
        })
    }
    class cp {
        constructor(a, b, c, d) {
            this.B = a;
            this.j = new Oo(b);
            this.A = c;
            this.l = d
        }
    };
    var dp = a => {
        if (!a || !E(a, 1)) return !1;
        a = y(a, 1);
        switch (a) {
            case 1:
                return !0;
            case 2:
                return !1;
            default:
                throw Error("Unhandled AutoConsentUiStatus: " + a);
        }
    };

    function ep(a) {
        if (!0 !== a.j.adsbygoogle_ama_fc_has_run) {
            var b = !1;
            dp(a.l) && (b = new cp(a.j, a.C, a.B || K(a.l, Ph, 4), a.A), Mo(b.j), ap(b), b = !0);
            var c;
            a: if ((c = a.l) && E(c, 3)) switch (c = y(c, 3), c) {
                case 1:
                    c = !0;
                    break a;
                case 2:
                    c = !1;
                    break a;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + c);
            } else c = !1;
            c && (So(new To(a.j, a.C, a.B || K(a.l, Ph, 4))), b = !0);
            b && (a.A.start(), a.j.adsbygoogle_ama_fc_has_run = !0)
        }
    }
    class fp {
        constructor(a, b, c, d, e) {
            this.j = a;
            this.A = b;
            this.l = c;
            this.C = d;
            this.B = e || null
        }
    };
    var gp = (a, b, c, d, e, f) => {
            try {
                const g = a.j,
                    h = De(a, "SCRIPT");
                h.async = !0;
                Gd(h, b);
                g.head.appendChild(h);
                h.addEventListener("load", () => {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", () => {
                    0 < c ? gp(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
                })
            } catch (g) {
                f()
            }
        },
        hp = (a, b, c = () => {}, d = () => {}) => {
            gp(pe(a), b, 0, !1, c, d)
        };
    var ip = (a = null) => {
        a = a || r;
        return a.googlefc || (a.googlefc = {})
    };
    var jp = {
        dg: 0,
        cg: 1,
        $f: 2,
        Vf: 3,
        ag: 4,
        Wf: 5,
        bg: 6,
        Yf: 7,
        Zf: 8,
        Uf: 9,
        Xf: 10
    };
    var kp = {
        fg: 0,
        gg: 1,
        eg: 2
    };
    Va(jp);
    Va(kp);
    var lp = (a, b) => {
        const c = a.document,
            d = pe(a),
            e = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const f = De(d, "IFRAME");
                        f.style.display = "none";
                        f.style.width = "0px";
                        f.style.height = "0px";
                        f.style.border = "none";
                        f.style.zIndex = "-1000";
                        f.style.left = "-1000px";
                        f.style.top = "-1000px";
                        f.name = b;
                        c.body.appendChild(f)
                    } else a.setTimeout(e, 5)
            };
        e()
    };
    const mp = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };

    function np(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = mp(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1
    }

    function op(a) {
        if (a.l) return a.l;
        a.l = ff(a.j, "__tcfapiLocator");
        return a.l
    }

    function pp(a) {
        return "function" === typeof a.j.__tcfapi || null != op(a)
    }

    function qp(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.j.__tcfapi) a = a.j.__tcfapi, a(b, 2, c, d);
        else if (op(a)) {
            rp(a);
            const e = ++a.F;
            a.D[e] = c;
            a.l && a.l.postMessage({
                ["__tcfapiCall"]: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function sp(a, b) {
        let c = {
            internalErrorState: 0
        };
        const d = Pa(() => b(c));
        let e = 0; - 1 !== a.C && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.C));
        qp(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = mp(c), np(c) && (0 != c.internalErrorState && (c.tcString = "tcunavailable"), qp(a, "removeEventListener", null, c.listenerId), e && (clearTimeout(e), e = 0), d()))
        })
    }

    function tp(a, b) {
        let c = {
            internalErrorState: 0
        };
        const d = Pa(() => b(c));
        let e = 0; - 1 !== a.C && (e = setTimeout(() => {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.C));
        qp(a, "addEventListener", (f, g) => {
            e && (clearTimeout(e), e = 0);
            g && (c = f);
            c.internalErrorState = mp(c);
            0 != c.internalErrorState && (c.tcString = "tcunavailable");
            if (0 != c.internalErrorState || np(c)) qp(a, "removeEventListener", null, c.listenerId), d()
        })
    }

    function up(a) {
        return new Promise(b => {
            tp(a, b)
        })
    }

    function rp(a) {
        a.A || (a.A = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.D[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, L(a.j, "message", a.A))
    }
    class vp extends yi {
        constructor(a, b = 500) {
            super();
            this.j = a;
            this.l = null;
            this.D = {};
            this.F = 0;
            this.C = b;
            this.A = null
        }
        B() {
            this.D = {};
            this.A && (Kd(this.j, "message", this.A), delete this.A);
            delete this.D;
            delete this.j;
            delete this.l;
            super.B()
        }
        addEventListener(a) {
            let b = {};
            const c = Pa(() => a(b));
            let d = 0; - 1 !== this.C && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.C));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = mp(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable",
                    g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                qp(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && qp(this, "removeEventListener", null, a.listenerId)
        }
    };

    function bp(a, b, c) {
        const d = ip(a.j);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = ip(a.j),
                    f = new vp(a.j);
                pp(f) && sp(f, g => {
                    300 === g.cmpId && g.tcString && "tcunavailable" !== g.tcString && b({
                        Td: e.getDefaultConsentRevocationText(),
                        gd: e.getDefaultConsentRevocationCloseText(),
                        Uc: e.getDefaultConsentRevocationAttestationText(),
                        showRevocationMessage: () => e.showRevocationMessage()
                    })
                });
                c()
            }
        })
    }

    function wp(a) {
        const b = pb(hb("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
            id: a.l,
            ers: 2
        });
        hp(a.j, b, () => {}, () => {})
    }
    class xp {
        constructor(a, b) {
            this.j = a;
            pe(this.j);
            this.l = b
        }
        start() {
            try {
                lp(this.j, "googlefcPresent"), wp(this)
            } catch (a) {}
        }
    };
    var yp = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    class zp {
        constructor(a) {
            this.j = new um(a)
        }
        contains(a) {
            return this.j.contains(a)
        }
    };
    var Ap = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, b |= ni(a, 1E4)
            } catch (c) {
                b |= 32
            }
            return b
        },
        Bp = a => {
            if (460 <= a) return a = Math.min(a, 1200), Math.ceil(800 > a ? a / 4 : 200);
            a = Math.min(a, 600);
            return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
        };
    var Cp = class {
        constructor() {
            this.j = {
                clearBoth: !0
            }
        }
        l(a, b, c, d) {
            return tn(d.document, a, null, null, this.j, b)
        }
        A(a) {
            return Bp(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };
    class Dp {
        constructor(a) {
            this.l = a
        }
        j(a) {
            a = Math.floor(a.l);
            const b = Bp(a);
            return new bm(["ap_container"], {
                ["google_reactive_ad_format"]: 27,
                ["google_responsive_auto_format"]: 16,
                ["google_max_num_ads"]: 1,
                ["google_ad_type"]: this.l,
                ["google_ad_format"]: a + "x" + b,
                ["google_ad_width"]: a,
                ["google_ad_height"]: b
            })
        }
    };
    var Ep = class {
        constructor(a, b) {
            this.B = a;
            this.A = b
        }
        j() {
            return this.B
        }
        l() {
            return this.A
        }
    };
    const Fp = {
        TABLE: {
            Ba: new zp([1, 2])
        },
        THEAD: {
            Ba: new zp([0, 3, 1, 2])
        },
        TBODY: {
            Ba: new zp([0, 3, 1, 2])
        },
        TR: {
            Ba: new zp([0, 3, 1, 2])
        },
        TD: {
            Ba: new zp([0, 3])
        }
    };

    function Gp(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = va(e, f), 0 > c || b.push(new Hp(a, [f], c, f, 3, ze(f).trim(), d));
        return b
    }

    function Ip(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            g = f.length;
        let h = 0,
            k = "";
        for (let m = 0; m < g; m++) {
            var l = f[m];
            if (1 == l.nodeType || 3 == l.nodeType) {
                a: {
                    var n = l;
                    if (1 != n.nodeType) {
                        n = null;
                        break a
                    }
                    if ("BR" == n.tagName) break a;
                    const p = c.getComputedStyle(n).getPropertyValue("display");n = "inline" == p || "inline-block" == p ? null : n
                }
                n ? (d.length && k && e.push(new Hp(a, d, m - 1, n, 0, k, c)), d = [], h = m + 1, k = "") : (d.push(l), l = ze(l).trim(), k += l && k ? " " + l : l)
            }
        }
        d.length && k && e.push(new Hp(a, d, h, b, 2, k, c));
        return e
    }

    function Jp(a, b) {
        return a.j - b.j
    }
    class Hp {
        constructor(a, b, c, d, e, f, g) {
            this.A = a;
            this.Wa = b.slice(0);
            this.j = c;
            this.sb = d;
            this.tb = e;
            this.B = f;
            this.l = g
        }
        M() {
            return this.l
        }
    };

    function Kp(a) {
        return Fa(a.C ? Ip(a.j, a.A, a.l) : [], a.B ? Gp(a.j, a.B, a.A, a.l) : []).filter(b => {
            var c = b.sb.tagName;
            c ? (c = Fp[c.toUpperCase()], b = null != c && c.Ba.contains(b.tb)) : b = !1;
            return !b
        })
    }
    class Lp {
        constructor(a, b, c) {
            this.A = a;
            this.B = b.Va;
            this.C = b.$b;
            this.j = b.articleStructure;
            this.l = c
        }
    };
    const Mp = new um("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));
    const Np = (a, b) => {
        if (3 == b.nodeType) return 3 == b.nodeType ? (b = b.data, a = -1 != b.indexOf("&") ? yc(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (1 == b.nodeType) {
            var c = a.getComputedStyle(b);
            if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility) return !1;
            if ((c = b.tagName) && Mp.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (Np(a, b[c])) return !0
        }
        return !1
    };

    function Op(a, b) {
        if (!b) return !1;
        const c = fa(b),
            d = a.j.get(c);
        if (null != d) return d;
        if (1 == b.nodeType && ("UL" == b.tagName || "OL" == b.tagName) && "none" != a.l.getComputedStyle(b).getPropertyValue("list-style-type")) return a.j.set(c, !0), !0;
        b = Op(a, b.parentNode);
        a.j.set(c, b);
        return b
    }

    function Pp(a, b) {
        return Ba(b.Wa, c => Op(a, c))
    }
    class Qp {
        constructor(a) {
            this.j = new Ul;
            this.l = a
        }
    };
    class Rp {
        constructor(a, b) {
            this.B = a;
            this.j = [];
            this.l = [];
            this.A = b
        }
    };
    var Tp = (a, {
            yh: b = !1,
            Ah: c = 3,
            Wd: d = null
        } = {}) => {
            a = Kp(a);
            return Sp(a, b, c, d)
        },
        Sp = (a, b = !1, c = 3, d = null) => {
            if (2 > c) throw Error("minGroupSize should be at least 2, found " + c);
            var e = a.slice(0);
            e.sort(Jp);
            a = [];
            b = new Rp(b, d);
            for (const l of e) {
                d = b;
                e = {
                    pb: l,
                    hb: 51 > l.B.length ? !1 : null != d.A ? !Pp(d.A, l) : !0
                };
                if (d.B || e.hb) {
                    if (d.j.length) {
                        var f = d.j[d.j.length - 1].pb;
                        b: {
                            var g = f.M();
                            var h = f.Wa[f.Wa.length - 1];f = e.pb.Wa[0];
                            if (!h || !f) {
                                g = !1;
                                break b
                            }
                            var k = h.parentElement;
                            const n = f.parentElement;
                            if (k && n && k == n) {
                                k = 0;
                                for (h = h.nextSibling; 10 >
                                    k && h;) {
                                    if (h == f) {
                                        g = !0;
                                        break b
                                    }
                                    if (Np(g, h)) break;
                                    h = h.nextSibling;
                                    k++
                                }
                                g = !1
                            } else g = !1
                        }
                    } else g = !0;
                    g ? (d.j.push(e), e.hb && d.l.push(e.pb)) : (d.j = [e], d.l = e.hb ? [e.pb] : [])
                }
                if (b.l.length >= c) {
                    if (1 >= b.l.length) d = null;
                    else {
                        e = b.l[1];
                        for (d = b; d.j.length && !d.j[0].hb;) d.j.shift();
                        d.j.shift();
                        d.l.shift();
                        d = e
                    }
                    d && a.push(d)
                }
            }
            return a
        };
    var Vp = (a, b) => {
            a = Up(a, b);
            const c = new Qp(b);
            return yp(a, d => Tp(d, {
                Wd: c
            }))
        },
        Up = (a, b) => {
            const c = new Ul;
            a.forEach(d => {
                var e = Gn(J(d, Gh, 1));
                if (e) {
                    const f = e.toString();
                    Ql(c, f) || c.set(f, {
                        articleStructure: d,
                        Sc: e,
                        Va: null,
                        $b: !1
                    });
                    e = c.get(f);
                    (d = (d = J(d, Gh, 2)) ? y(d, 7) : null) ? e.Va = e.Va ? e.Va + "," + d : d: e.$b = !0
                }
            });
            return Tl(c).map(d => {
                const e = En(d.Sc, b.document);
                return e.length ? new Lp(e[0], d, b) : null
            }).filter(d => null != d)
        };
    var Wp = (a, b, c) => {
        const d = J(a, gl, 6);
        if (!d) return [];
        c = Vp(K(d, hl, 1), c);
        return (a = ul(a)) && G(a, 11) ? c.map(e => {
            const f = Mh();
            return new Tn(new Ep(e.sb, e.tb), new Nn({
                clearBoth: !0
            }), null, !0, 2, [], f, e.l, null, null, null, e.A, e.j)
        }) : c.map(e => {
            const f = Mh();
            return new Tn(new Ep(e.sb, e.tb), new Cp, new Dp(b), !0, 2, [], f, e.l, null, null, null, e.A, e.j)
        })
    };
    var Xp = !Ic && !dc();

    function Yp(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (Xp && a.dataset) {
            if (!(!t("Android") || ec() || cc() || ac() || t("Silk") || "adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var Zp = (a, b, c) => {
            if (!b) return null;
            const d = ve(document, "INS");
            d.id = "google_pedestal_container";
            d.style.width = "100%";
            d.style.zIndex = "-1";
            if (c) {
                var e = a.getComputedStyle(c),
                    f = "";
                if (e && "static" != e.position) {
                    var g = c.parentNode.lastElementChild;
                    for (f = e.position; g && g != c;) {
                        if ("none" != a.getComputedStyle(g).display) {
                            f = a.getComputedStyle(g).position;
                            break
                        }
                        g = g.previousElementSibling
                    }
                }
                if (c = f) d.style.position = c
            }
            b.appendChild(d);
            if (d) {
                var h = a.document;
                f = h.createElement("div");
                f.style.width = "100%";
                f.style.height =
                    "2000px";
                c = S(a).clientHeight;
                e = h.body.scrollHeight;
                a = a.innerHeight;
                g = h.body.getBoundingClientRect().bottom;
                d.appendChild(f);
                var k = f.getBoundingClientRect().top;
                h = h.body.getBoundingClientRect().top;
                d.removeChild(f);
                f = e;
                e <= a && 0 < c && 0 < g && (f = g - h);
                a = k - h >= .8 * f
            } else a = !1;
            return a ? d : (b.removeChild(d), null)
        },
        aq = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, Ee() || (b |= 1048576), 1200 >= Math.floor(a.document.body.getBoundingClientRect().width) || (b |= 32768), $p(a) && (b |= 33554432)
            } catch (c) {
                b |= 32
            }
            return b
        },
        $p = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if ("autorelaxed" == Yp(a[b])) return !0;
            return !1
        };
    var bq = (a, b) => {
        var c = 0;
        try {
            c |= a != a.top ? 512 : 0;
            var d = Math.min(a.screen.width || 0, a.screen.height || 0);
            c |= d ? 320 > d ? 8192 : 0 : 2048;
            var e;
            if (e = a.navigator) {
                var f = a.navigator.userAgent;
                e = /Firefox/.test(f) || /Android 2/.test(f) || /iPhone OS [34]_/.test(f) || /Windows Phone (?:OS )?[67]/.test(f)
            }
            c |= e ? 1048576 : 0
        } catch (g) {
            c |= 32
        }
        c |= 0;
        e = Math.max(Tj(oj), mi);
        f = Q;
        d = a.innerWidth;
        d = 0 < Tj(oj) && d > mi;
        return a = c | mo(a, b, e, f, d ? Tj(pj) : 0)
    };
    class cq {
        constructor() {
            this.promise = new Promise(a => {
                this.j = a
            })
        }
    };

    function dq(a) {
        var b;
        if (!(b = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                const d = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var c = "__storage_test__" == d
            } catch (d) {
                c = !1
            }
            b = !c
        }
        return b ? null : (a = eq(a)) ? fq(a) : null
    }

    function fq(a = []) {
        const b = Date.now();
        return ya(a, c => 36E5 > b - c)
    }
    var eq = a => {
        try {
            const b = a.getItem("__lsv__");
            if (!b) return [];
            let c;
            try {
                c = JSON.parse(b)
            } catch (d) {}
            return !Array.isArray(c) || Ba(c, d => !Number.isInteger(d)) ? (a.removeItem("__lsv__"), []) : c
        } catch (b) {
            return null
        }
    };
    var gq = (a, b, c) => {
        let d = 0;
        try {
            d |= a != a.top ? 512 : 0;
            d |= oi(a);
            d |= ni(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var e;
            if (e = b) {
                var f = dq(c);
                e = !(f && 1 > f.length)
            }
            e && (d |= 134217728)
        } catch (g) {
            d |= 32
        }
        return d
    };

    function hq(a) {
        var b = ["Could not locate a suitable placement in the content below the fold."];
        xh(4, a.location) && (a = ji(a).tagSpecificState[1] || null) && (a = a.debugCard && 4 === a.debugCard.getAdType() ? a.debugCard : null) && a.displayAdLoadedContent(b)
    };
    const iq = {
            1: "0.5vp",
            2: "300px"
        },
        jq = {
            1: 700,
            2: 1200
        },
        kq = {
            [1]: {
                zc: "3vp",
                Pb: "1vp",
                yc: "0.3vp"
            },
            [2]: {
                zc: "900px",
                Pb: "300px",
                yc: "90px"
            }
        };

    function lq(a) {
        const b = mq(a);
        return nq(b, S(a).clientHeight || jq[b])
    }
    class oq {
        constructor(a, b, c, d, e, f) {
            this.A = a;
            this.C = b;
            this.D = c.sort((g, h) => g.adCount - h.adCount);
            this.l = d;
            this.B = e;
            this.j = f
        }
    }

    function pq(a, b) {
        for (let c of a)
            if (y(c, 1) == b) return c;
        return null
    }

    function qq(a, b) {
        if (void 0 === a) return null;
        const c = [];
        for (let d of a) {
            a = y(d, 1);
            const e = rq(y(d, 2), b),
                f = rq(y(d, 3), b);
            if ("number" !== typeof a || null === e) return null;
            c.push({
                adCount: a,
                Ob: {
                    mb: e,
                    ka: f
                }
            })
        }
        return c
    }

    function sq(a, b) {
        const c = rq(y(a, 2), b),
            d = rq(y(a, 5), b);
        if (null === c) return null;
        const e = y(a, 4);
        if (null == e) return null;
        var f = K(a, Uk, 3);
        f = qq(f, b);
        if (null === f) return null;
        const g = J(a, Vk, 7);
        b = g ? tq(g, b) : void 0;
        return new oq(c, d, f, e, fd(a, 6), b)
    }

    function nq(a, b) {
        a = rq(iq[a], b);
        return new oq(null === a ? Infinity : a, null, [], 3, null)
    }

    function rq(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function mq(a) {
        a = 900 <= S(a).clientWidth;
        return Ee() && !a ? 1 : 2
    }

    function uq(a, b, c) {
        if (4 > c) return [];
        const d = Math.ceil(c / 2);
        return [{
            adCount: d,
            Ob: {
                mb: 2 * a,
                ka: 2 * b
            }
        }, {
            adCount: d + Math.ceil((c - d) / 2),
            Ob: {
                mb: 3 * a,
                ka: 3 * b
            }
        }]
    }

    function tq(a, b) {
        const c = rq(y(a, 2), b) || 0,
            d = y(a, 3) || 1;
        a = rq(y(a, 1), b) || 0;
        return {
            kc: c,
            jc: d,
            za: a
        }
    };

    function vq(a, b, c) {
        return Qm({
            top: a.j.top - (c + 1),
            right: a.j.right + (c + 1),
            bottom: a.j.bottom + (c + 1),
            left: a.j.left - (c + 1)
        }, b.j)
    }

    function wq(a) {
        if (!a.length) return null;
        const b = Rm(a.map(c => c.j));
        a = a.reduce((c, d) => c + d.l, 0);
        return new xq(b, a)
    }
    class xq {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };
    var Dq = (a, b) => {
        const c = Ga(b.document.querySelectorAll(".google-auto-placed")),
            d = yq(b),
            e = zq(b),
            f = Aq(b),
            g = Bq(b),
            h = Ga(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = Ga(b.document.querySelectorAll("div.googlepublisherpluginad"));
        let l = [].concat(Ga(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Ga(b.document.querySelectorAll("ins.adsbygoogle")));
        b = [];
        for (const [n, m] of [
                [a.eb, c],
                [a.ta, d],
                [a.sd, e],
                [a.fb, f],
                [a.gb, g],
                [a.pd, h],
                [a.rd, k]
            ]) a = m, !1 === n ? b = b.concat(a) :
            l = l.concat(a);
        a = Cq(l);
        b = Cq(b);
        a = a.slice(0);
        for (const n of b)
            for (b = 0; b < a.length; b++)(n.contains(a[b]) || a[b].contains(n)) && a.splice(b, 1);
        return a
    };
    const Eq = a => {
            try {
                return ya(za(a.googletag.pubads().getSlots(), b => a.document.getElementById(b.getSlotElementId())), b => null != b)
            } catch (b) {}
            return null
        },
        yq = a => Ga(a.document.querySelectorAll('ins.adsbygoogle[data-anchor-shown="true"]')),
        zq = a => Ga(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        Aq = a => (Eq(a) || Ga(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Ga(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        Bq = a => Ga(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var Cq = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    var Fq = R(453, Dq),
        Gq = R(454, (a, b) => {
            const c = Ga(b.document.querySelectorAll(".google-auto-placed")),
                d = yq(b),
                e = zq(b),
                f = Aq(b),
                g = Bq(b),
                h = Ga(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"));
            b = Ga(b.document.querySelectorAll("div.googlepublisherpluginad"));
            return Cq([].concat(!0 === a.eb ? c : [], !0 === a.ta ? d : [], !0 === a.sd ? e : [], !0 === a.fb ? f : [], !0 === a.gb ? g : [], !0 === a.pd ? h : [], !0 === a.rd ? b : []))
        });

    function Hq(a, b, c) {
        const d = Iq(a);
        b = Jq(d, b, c);
        return new Kq(a, d, b)
    }

    function Lq(a) {
        return 1 < (a.bottom - a.top) * (a.right - a.left)
    }

    function Mq(a) {
        return a.j.map(b => b.box)
    }

    function Nq(a) {
        return a.j.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    class Kq {
        constructor(a, b, c) {
            this.A = a;
            this.j = b.slice(0);
            this.B = c.slice(0);
            this.l = null
        }
    }

    function Iq(a) {
        const b = Fq({
                ta: !1
            }, a),
            c = vi(a),
            d = ui(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && -1 != e.className.indexOf("google-auto-placed")) || Lq(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                vh: e ? 1 : 0
            } : null
        }).filter(Na(e => null === e))
    }

    function Jq(a, b, c) {
        return void 0 != b && a.length <= (void 0 != c ? c : 8) ? Oq(a, b) : za(a, d => new xq(d.box, 1))
    }

    function Oq(a, b) {
        a = za(a, d => new xq(d.box, 1));
        const c = [];
        for (; 0 < a.length;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (vq(d, a[f], b)) {
                        d = wq([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function Pq(a) {
        return new bm(["pedestal_container"], {
            ["google_reactive_ad_format"]: 30,
            ["google_phwr"]: 2.189,
            ["google_ad_width"]: Math.floor(a),
            ["google_ad_format"]: "autorelaxed",
            ["google_full_width_responsive"]: !0,
            ["google_enable_content_recommendations"]: !0,
            ["google_content_recommendation_ui_type"]: "pedestal"
        })
    }
    class Qq {
        j(a) {
            return Pq(Math.floor(a.l))
        }
    };
    var Rq = {};

    function Sq(a, b, c) {
        let d = Tq(a, c, b);
        if (!d) return !0;
        let e = -1;
        const f = c.D.l;
        for (; d.Ha && d.Ha.length;) {
            const h = d.Ha.shift();
            var g = Zn(h.O);
            const k = h.U.j,
                l = !!c.l.Ja || !!c.l.Ka || Uq(c.A.j) || !!c.l.Yb || k > e;
            g = !g || g <= d.Ua;
            if (l && g && Vq(c, h, {
                    hc: d.Ua
                })) {
                e = k;
                if (d.Sa.j.length + 1 >= f) return !0;
                d = Tq(a, c, b);
                if (!d) return !0
            }
        }
        return c.B
    }
    var Tq = (a, b, c) => {
        var d = b.D.l,
            e = b.D.B,
            f = b.D;
        f = Hq(b.M(), f.j ? f.j.za : void 0, d);
        if (f.j.length >= d) return null;
        e ? (d = f.l || (f.l = S(f.A).scrollHeight || null), e = !d || 0 > d ? -1 : f.l * e - Nq(f)) : e = void 0;
        a = null == e || 50 <= e ? Wq(b, f, {
            types: a
        }, c) : null;
        return {
            Sa: f,
            Ua: e,
            Ha: a
        }
    };
    Rq[2] = na(function(a, b) {
        a = Wq(b, Hq(b.M()), {
            types: a,
            pa: lq(b.M())
        }, 2);
        if (0 == a.length) return !0;
        for (var c = 0; c < a.length; c++)
            if (Vq(b, a[c])) return !0;
        return b.B ? (b.C.push(11), !0) : !1
    }, [0]);
    Rq[5] = na(Sq, [0], 5);
    Rq[3] = function(a) {
        if (!a.B) return !1;
        var b = Wq(a, Hq(a.M()), {
            types: [0],
            pa: lq(a.M())
        }, 3);
        if (0 == b.length) return !0;
        for (var c = b.length - 1; 0 <= c; c--)
            if (Vq(a, b[c])) return !0;
        a.C.push(11);
        return !0
    };
    var Xq = a => {
            var b;
            a.l.Ac ? b = new oq(0, null, [], 3, null) : b = lq(a.M());
            return {
                types: [0],
                pa: b
            }
        },
        Zq = a => {
            var b = a.M().document.body.getBoundingClientRect().width;
            b = Pq(b);
            var c = a.j;
            var d = c.document.body,
                e = Zp(c, d, null);
            if (e) c = e;
            else {
                if (c.document.body) {
                    e = Math.floor(c.document.body.getBoundingClientRect().width);
                    for (var f = [{
                            element: c.document.body,
                            depth: 0,
                            height: 0
                        }], g = -1, h = null; 0 < f.length;) {
                        const l = f.pop(),
                            n = l.element;
                        var k = l.height;
                        0 < l.depth && k > g && (g = k, h = n);
                        if (5 > l.depth)
                            for (let m = 0; m < n.children.length; m++) {
                                const p =
                                    n.children[m];
                                k = e;
                                const q = p.getBoundingClientRect().width;
                                (null == q || null == k ? 0 : q >= .9 * k && q <= 1.01 * k) && f.push({
                                    element: p,
                                    depth: l.depth + 1,
                                    height: p.getBoundingClientRect().height
                                })
                            }
                    }
                    e = h
                } else e = null;
                c = e ? Zp(c, e.parentNode || d, e) : null
            }
            c && (b = am(a.I, b), d = tn(a.j.document, a.F, null, null, {}, b)) && (pn(d.sa, c, 2, 256), Yq(a, d, b))
        },
        ar = (a, b) => {
            var c = Xq(a);
            c.Nb = [5];
            c = Wq(a, Hq(a.M()), c, 8);
            $q(a, c.reverse(), b)
        },
        $q = (a, b, c) => {
            for (const d of b)
                if (b = c.j(d.U), Vq(a, d, {
                        Kc: b
                    })) return !0;
            return !1
        };
    Rq[8] = function(a) {
        var b = a.M().document;
        if ("complete" != b.readyState) return b.addEventListener("readystatechange", () => Rq[8](a), {
            once: !0
        }), !0;
        if (!a.B) return !1;
        if (!a.ib()) return !0;
        b = Xq(a);
        b.Mb = [2, 4, 5];
        b = Wq(a, Hq(a.M()), b, 8);
        const c = new Qq;
        if ($q(a, b, c)) return !0;
        if (a.l.Zb) switch (a.l.nc || 0) {
            case 1:
                ar(a, c);
                break;
            default:
                Zq(a)
        }
        return !0
    };
    Rq[6] = na(Sq, [2], 6);
    Rq[7] = na(Sq, [1], 7);
    Rq[9] = function(a) {
        const b = Tq([0, 2], a, 9);
        if (!b || !b.Ha) return a.C.push(17), hq(a.M()), a.B;
        for (var c of b.Ha) {
            var d = c;
            var e = a.l.Bb || null;
            null == e ? d = null : (e = $n(d.O, new br, new cr(e, a.M())), d = new ho(e, d.T(), d.U));
            if (d && !(Zn(d.O) > b.Ua) && Vq(a, d, {
                    hc: b.Ua,
                    ed: !0
                })) return a = d.O.J, c = c.O, a = 0 < a.length ? a[0] : null, c.B = !0, null != a && c.J.push(a), !0
        }
        a.C.push(17);
        hq(a.M());
        return a.B
    };
    class br {
        l(a, b, c, d) {
            return wn(d.document, a, b)
        }
        A(a) {
            return S(a).clientHeight || 0
        }
    };
    var dr = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= ni(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var er = (a, b) => "relative" === a ? b : ["https://", a, b].join("");
    var fr = class {
        constructor() {
            const a = new cq;
            this.promise = a.promise;
            this.resolve = a.j
        }
    };

    function gr(a, b, c) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        b[a] || (b[a] = new fr, c && c());
        return b[a]
    }

    function hr(a, b, c) {
        return gr(a, b, function() {
            Me(b.document, c)
        }).promise
    };
    var ir = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, b |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
            } catch (c) {
                b |= 32
            }
            return b
        },
        jr = (a, b, c) => {
            let d = 0;
            try {
                d |= ni(a, 2500);
                if (V(Jj)) {
                    const g = S(a).clientHeight;
                    d |= g ? 320 > g ? -2147483648 : 0 : 1073741824
                }
                d |= oi(a);
                var e;
                if (e = b) {
                    var f = dq(c);
                    e = !(f && 1 > f.length)
                }
                e && (d |= 134217728)
            } catch (g) {
                d |= 32
            }
            return d
        };
    const kr = {
        [27]: 512,
        [26]: 128
    };
    var lr = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return 0 === bq(a, c);
                case 8:
                    return b = !("on" === b.google_adtest || vh(a.location, "google_ia_debug")), 0 == (ir(a) | jr(a, b, d));
                case 9:
                    return b = !("on" === b.google_adtest || vh(a.location, "google_scr_debug")), !gq(a, b, d);
                case 30:
                    return 0 == aq(a);
                case 26:
                    return 0 == dr(a);
                case 27:
                    return 0 === Ap(a);
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        mr = (a, b, c, d) => {
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return bq(a, c);
                case 8:
                    return b = !("on" === b.google_adtest || vh(a.location,
                        "google_ia_debug")), ir(a) | jr(a, b, d);
                case 9:
                    return gq(a, !("on" === b.google_adtest || vh(a.location, "google_scr_debug")), d);
                case 16:
                    return $m(b, a) ? 0 : 8388608;
                case 30:
                    return aq(a);
                case 26:
                    return dr(a);
                case 27:
                    return Ap(a);
                default:
                    return 32
            }
        },
        nr = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!Ta(d)) return !1;
            a = yg(a);
            if (!a || !lr(a, b, d, c)) return !1;
            b = ji(a);
            if (si(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] = 0);
            b.adCount[d]++;
            return !0
        },
        or = a => {
            const b = a.google_reactive_ad_format;
            return !a.google_reactive_ads_config &&
                Ok(a) && 16 !== b && 10 !== b && 11 !== b && 40 !== b
        },
        pr = a => {
            if (!a.hash) return null;
            let b = null;
            gg(rh, c => {
                !b && vh(a, c) && (b = sh[c])
            });
            return b
        },
        rr = a => {
            const b = a.j;
            if (!b.document.getElementById("goog_info_card")) {
                var c = ji(b).tagSpecificState[1] || null;
                c && gg(th, d => {
                    !c.debugCardRequested && xh(d, b.location) && (c.debugCardRequested = !0, qr(b, a.F.jd, e => {
                        c.debugCard = e.createDebugCard(d, b, a.G)
                    }))
                })
            }
        },
        tr = (a, b, c) => {
            if (!b) return null;
            const d = ji(b);
            let e = 0;
            gg(Ua, f => {
                const g = kr[f];
                g && 0 === sr(a, b, f, c) && (e |= g)
            });
            d.wasPlaTagProcessed && (e |=
                256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? "" + e : null
        },
        ur = (a, b, c) => {
            const d = [];
            gg(Ua, e => {
                const f = sr(b, a, e, c);
                0 !== f && d.push(e + ":" + f)
            });
            return d.join(",") || null
        },
        vr = a => {
            const b = [],
                c = {};
            gg(a, (d, e) => {
                if ((e = hi[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (!1 === d) d = 2;
                    else return;
                    b.push(e + ":" + d)
                }
            });
            return b.join(",")
        },
        wr = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return "boolean" === typeof a ? a ? "1" : "0" : ""
        },
        sr = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            const f = ji(b),
                g = si(f, c);
            if (a.google_reactive_ad_format == c || g) e |=
                64;
            let h = !1;
            gg(f.reactiveTypeDisabledByPublisher, (k, l) => {
                String(c) === l && (h = !0)
            });
            h && pr(b.location) !== c && (e |= 128);
            return e | mr(b, a, c, d)
        },
        xr = (a, b) => {
            if (a) {
                var c = ji(a),
                    d = {};
                gg(b, (e, f) => {
                    (f = hi[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0)
                });
                gg(Ua, e => {
                    d[ii[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        yr = (a, b, c) => {
            b = R(b, c);
            return hr(1, O(), nb(Ed(a).toString())).then(b)
        },
        qr = (a, b, c) => {
            c = R(212, c);
            hr(3, a, nb(Ed(b).toString())).then(c)
        };
    const zr = a => {
        a.adsbygoogle || (a.adsbygoogle = [], Me(a.document, Sf(er("pagead2.googlesyndication.com", "/pagead/js/adsbygoogle.js"))))
    };
    var Ar = (a, b) => {
        L(a, "load", () => {
            zr(a);
            a.adsbygoogle.push(b)
        })
    };
    class cr {
        constructor(a, b) {
            this.l = a;
            this.A = b
        }
        j() {
            var a = this.l,
                b = this.A;
            const c = a.G || {};
            c.google_ad_client = a.Qa;
            c.google_ad_height = S(b).clientHeight || 0;
            c.google_ad_width = S(b).clientWidth || 0;
            c.google_reactive_ad_format = 9;
            b = new im;
            z(b, 1, a.C);
            a.j && kd(b, 2, a.j);
            a.F && z(b, 3, !0);
            c.google_rasc = b.F();
            a.A && (c.google_adtest = "on");
            return new bm(["fsi_container"], c)
        }
    };

    function Br(a, b, c) {
        const d = Tm(c, 1, b + 1);
        return !Ba(a, e => Qm(e, d))
    }

    function Cr(a, b, c, d, e) {
        e = e.U;
        const f = Tm(e, 0, b),
            g = Tm(e, 0, c),
            h = Tm(e, 0, d);
        return !Ba(a, k => Qm(k, g) || Qm(k, f) && !Qm(k, h))
    }

    function Dr(a, b, c, d) {
        const e = Mq(a);
        if (Br(e, b, d.U)) return !0;
        if (!Cr(e, b, c.kc, c.za, d)) return !1;
        const f = new xq(Tm(d.U, 0, 0), 1);
        a = ya(a.B, g => vq(g, f, c.za));
        b = Aa(a, (g, h) => g + h.l, 1);
        return 0 === a.length || b > c.jc ? !1 : !0
    };
    class Er {
        constructor() {
            this.j = new Ul
        }
        set(a, b) {
            let c = this.j.get(a);
            c || (c = new um, this.j.set(a, c));
            c.add(b)
        }
    };
    var Fr = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function Gr(a, b) {
        const c = new Er,
            d = new um;
        b.forEach(e => {
            if (J(e, cl, 1)) {
                e = J(e, cl, 1);
                if (J(e, Kh, 1) && J(e, Kh, 1).T() && J(e, Kh, 2) && J(e, Kh, 2).T()) {
                    const g = Hr(a, J(e, Kh, 1).T()),
                        h = Hr(a, J(e, Kh, 2).T());
                    if (g && h)
                        for (var f of Fr({
                                anchor: g,
                                position: J(e, Kh, 1).l()
                            }, {
                                anchor: h,
                                position: J(e, Kh, 2).l()
                            })) c.set(fa(f.anchor), f.position)
                }
                J(e, Kh, 3) && J(e, Kh, 3).T() && (f = Hr(a, J(e, Kh, 3).T())) && c.set(fa(f), J(e, Kh, 3).l())
            } else J(e, dl, 2) ? Ir(a, J(e, dl, 2), c) : J(e, el, 3) && Jr(a, J(e, el, 3), d)
        });
        return new Kr(c, d)
    }
    class Kr {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    }
    const Ir = (a, b, c) => {
            J(b, Gh, 1) && (a = Lr(a, J(b, Gh, 1))) && a.forEach(d => {
                d = fa(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        Jr = (a, b, c) => {
            J(b, Gh, 1) && (a = Lr(a, J(b, Gh, 1))) && a.forEach(d => {
                c.add(fa(d))
            })
        },
        Hr = (a, b) => (a = Lr(a, b)) && 0 < a.length ? a[0] : null,
        Lr = (a, b) => (b = Gn(b)) ? En(b, a) : null;

    function Mr(a) {
        return function(b) {
            return io(b, a)
        }
    }

    function Nr(a) {
        const b = S(a).clientHeight;
        return b ? na(Or, b + ui(a)) : Ka
    }

    function Pr(a, b, c) {
        if (0 > a) throw Error("ama::ead:nd");
        if (Infinity === a) return Ka;
        const d = Mq(c || Hq(b));
        return e => Br(d, a, e.U)
    }

    function Qr(a, b, c, d) {
        if (0 > a || 0 > b.kc || 0 > b.jc || 0 > b.za) throw Error("ama::ead:nd");
        return Infinity === a ? Ka : e => Dr(d || Hq(c, b.za), a, b, e)
    }

    function Rr(a) {
        if (!a.length) return Ka;
        const b = new zp(a);
        return c => b.contains(c.ua)
    }

    function Sr(a) {
        return function(b) {
            for (let c of b.Hb)
                if (-1 < a.indexOf(c)) return !1;
            return !0
        }
    }

    function Tr(a) {
        return a.length ? function(b) {
            const c = b.Hb;
            return a.some(d => -1 < c.indexOf(d))
        } : La
    }

    function Ur(a, b) {
        if (0 >= a) return La;
        const c = S(b).scrollHeight - a;
        return function(d) {
            return d.U.j <= c
        }
    }

    function Vr(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[y(c.Ia, 2) || 0]
        }
    }

    function Wr(a) {
        return a.length ? b => a.includes(y(b.Ia, 2) || 0) : La
    }

    function Xr(a) {
        return a.length ? b => a.includes(y(b.Ia, 1) || 0) : La
    }

    function Yr(a, b) {
        const c = Gr(a, b);
        return function(d) {
            var e = d.T();
            d = Mn[d.O.l()];
            var f = fa(e);
            f = c.l.j.get(f);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.j.contains(fa(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.j.contains(fa(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }
    const Or = (a, b) => b.U.j >= a,
        Zr = (a, b, c) => {
            c = c.U.l;
            return a <= c && c <= b
        };
    var $r = Xl(new Pl(0, {})),
        as = Xl(new Pl(1, {})),
        bs = a => a === $r || a === as;

    function cs(a, b, c) {
        Ql(a.j, b) || a.j.set(b, []);
        a.j.get(b).push(c)
    }
    class ds {
        constructor() {
            this.j = new Ul
        }
    };

    function es(a, b) {
        a.F.wpc = b;
        return a
    }

    function fs(a, b) {
        for (var c = 0; c < b.length; c++) a.ba(b[c]);
        return a
    }

    function gs(a, b) {
        a.A = a.A ? a.A : b;
        return a
    }
    class hs {
        constructor(a) {
            this.F = {};
            this.F.c = a;
            this.C = [];
            this.A = null;
            this.D = [];
            this.H = 0
        }
        ba(a) {
            for (var b = 0; b < this.C.length; b++)
                if (this.C[b] == a) return this;
            this.C.push(a);
            return this
        }
        B(a) {
            var b = Xa(this.F);
            0 < this.H && (b.t = this.H);
            b.err = this.C.join();
            b.warn = this.D.join();
            this.A && (b.excp_n = this.A.name, b.excp_m = this.A.message && this.A.message.substring(0, 512), b.excp_s = this.A.stack && Yg(this.A.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function is(a, b) {
        b && (a.l.apv = y(b, 4), E(b, 23) && (a.l.sat = "" + y(J(b, zl, 23), 1)));
        return a
    }

    function js(a, b) {
        a.l.afm = b.join(",");
        return a
    }
    class ks extends hs {
        constructor(a) {
            super(a);
            this.l = {}
        }
        B(a) {
            try {
                this.l.su = a.location.hostname
            } catch (b) {
                this.l.su = "_ex"
            }
            a = super.B(a);
            Za(a, this.l);
            return a
        }
    }

    function ls(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function ms(a, b) {
        a.j.op = ns(b)
    }

    function os(a, b, c) {
        30 >= c.length ? a.j[b] = ps(c) : (a.j[b] = ps(c.slice(0, 30)), a.j[b + "_c"] = c.length.toString())
    }

    function qs(a, b, c) {
        os(a, "fap", b);
        a.j.fad = ns(c)
    }

    function rs(a, b, c) {
        os(a, "fmp", b);
        a.j.fmd = ns(c)
    }

    function ss(a, b, c) {
        os(a, "vap", b);
        a.j.vad = ns(c)
    }

    function ts(a, b, c) {
        os(a, "vmp", b);
        a.j.vmd = ns(c)
    }

    function us(a, b, c) {
        os(a, "pap", b);
        a.j.pad = ns(c)
    }

    function vs(a, b, c) {
        os(a, "pmp", b);
        a.j.pmd = ns(c)
    }
    var ws = class extends ks {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.j = {}
        }
        B(a) {
            a = super.B(a);
            Object.assign(a, this.j);
            return a
        }
    };

    function ps(a) {
        return a.map(b => b.toString()).join("~")
    }

    function ns(a) {
        return null == a ? "null" : "string" === typeof a ? a : "boolean" === typeof a ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };
    class xs {
        constructor(a) {
            this.j = this.A = this.l = !1;
            this.B = null;
            this.wa = a
        }
    }

    function ys(a, b) {
        var c = zs;
        const d = a.O;
        if (!Ql(c.j, d)) {
            let e;
            c.j.set(d, new xs(null != (e = Xm(fo(a))) ? e : ""))
        }
        b(c.j.get(d))
    }

    function As(a) {
        ys(a, b => {
            b.l = !0
        })
    }

    function Bs(a) {
        ys(a, b => {
            b.A = !0
        })
    }

    function Cs(a) {
        ys(a, b => {
            b.j = !0
        })
    }

    function Ds(a, b) {
        ys(a, c => {
            c.B = b
        })
    }

    function Es(a, b, c) {
        const d = [];
        let e = 0;
        for (const f of c.filter(b)) {
            let g;
            if (bs(null != (g = f.B) ? g : "")) ++e;
            else {
                let h;
                b = a.l.get(null != (h = f.B) ? h : "", -1);
                d.push(b)
            }
        }
        return {
            list: d.sort((f, g) => f - g),
            va: e
        }
    }

    function Fs(a, b) {
        ms(b, a.l.Ea());
        var c = Tl(a.j).filter(f => 0 === (f.wa.startsWith($r) ? 0 : 1));
        const d = Tl(a.j).filter(f => 1 === (f.wa.startsWith($r) ? 0 : 1));
        var e = Es(a, f => f.l, c);
        qs(b, e.list, e.va);
        e = Es(a, f => f.l, d);
        rs(b, e.list, e.va);
        e = Es(a, f => f.A, c);
        ss(b, e.list, e.va);
        e = Es(a, f => f.A, d);
        ts(b, e.list, e.va);
        c = Es(a, f => f.j, c);
        us(b, c.list, c.va);
        a = Es(a, f => f.j, d);
        vs(b, a.list, a.va)
    }
    var zs = new class {
        constructor() {
            this.C = null;
            this.F = this.D = !1;
            this.A = null;
            this.I = this.H = !1;
            this.B = null;
            this.l = new Ul;
            this.j = new Ul
        }
    };
    class Gs {
        constructor(a = 0) {
            this.j = a
        }
    };
    class Hs {
        constructor(a) {
            this.l = a;
            this.j = -1
        }
    };

    function Is(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function Js(a, b) {
        const c = a.B.filter(d => Sl(d.Xa).every(e => d.Xa.get(e) === b.get(e)));
        return 0 === c.length ? (a.l.push(19), null) : c.reduce((d, e) => d.Xa.Ea() > e.Xa.Ea() ? d : e, c[0])
    }

    function Ks(a, b) {
        b = fo(b);
        if (null == b.j) return a.l.push(18), null;
        b = b.j.value;
        if (Ql(a.A, b)) return a.A.get(b);
        var c = Vl(b);
        c = Js(a, c);
        a.A.set(b, c);
        return c
    }

    function Ls(a, b) {
        let c;
        return (null == (c = Ks(a, b)) ? void 0 : c.Ld) || Number.MAX_VALUE
    }
    var Ms = class {
        constructor(a) {
            this.j = a;
            this.A = new Ul;
            let b;
            this.B = ((null == (b = J(a, ll, 2)) ? void 0 : K(b, ml, 1)) || []).map(c => {
                const d = Vl(H(c, 1)),
                    e = gd(c, 2, 0);
                return {
                    Xa: d,
                    Ld: e,
                    wa: H(c, 1)
                }
            });
            this.l = []
        }
    };

    function Uq(a) {
        return !!a.j && 0 < [...y(a.j.j, 1)].length
    }

    function Ns(a, b) {
        var c = b.U.j,
            d = Math,
            e = d.min;
        const f = b.T(),
            g = b.O.l();
        c += 200 * e.call(d, 20, 0 == g || 3 == g ? Is(f.parentElement) : Is(f));
        d = a.A;
        0 > d.j && (d.j = S(d.l).scrollHeight || 0);
        d = d.j - b.U.j;
        c += 1E3 < d ? 0 : 2 * (1E3 - d);
        a = a.l;
        b = b.T();
        return c + ("string" === typeof b.className && 0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot") ? a.j : 0)
    }

    function Os(a, b) {
        if (0 == b.j.length) return b;
        const c = Tj(qj) || 0;
        return 0 == c && Uq(a) || 0 < c && Uq(a) && c < b.filter(d => {
            let e;
            d = (null == (e = Ks(a.j, d)) ? void 0 : e.wa) || "";
            return "" != d && !(d === $r || d === as)
        }).j.length / b.j.length ? b.sort((d, e) => Ls(a.j, d) - Ls(a.j, e)) : b.sort((d, e) => Ns(a, d) - Ns(a, e))
    }

    function Ps(a, b) {
        return b.sort((c, d) => {
            const e = c.O.F,
                f = d.O.F;
            var g;
            null == e || null == f ? g = null == e && null == f ? Ns(a, c) - Ns(a, d) : null == e ? 1 : -1 : g = e - f;
            return g
        })
    }
    class Qs {
        constructor(a, b = 0, c = null) {
            this.A = new Hs(a);
            this.l = new Gs(b);
            this.j = c && new Ms(c)
        }
    };
    class Rs {
        constructor(a, b, c, d) {
            this.A = new Nl(a);
            this.j = new Qs(b, void 0 === c ? 0 : c, void 0 === d ? null : d);
            this.l = b;
            this.B = new ds
        }
        find(a, b) {
            b = void 0 === b ? 0 : b;
            const c = a.ec ? a.ec : [0],
                d = "number" === typeof a.Ib || null === a.Ib ? a.Ib : 0,
                e = "number" === typeof a.minWidth ? a.minWidth : 0,
                f = "number" === typeof a.maxWidth ? a.maxWidth : Infinity,
                g = "number" === typeof a.ka ? a.ka : 0,
                h = new um(a.Xd || []);
            let k = this.A.filter((n, m) => !h.contains(m));
            k = Ml(Ml(Ml(Ml(Ml(Ml(Ml(k, Rr(c), Ss(1, b)), Sr(a.Da || []), Ss(2, b)), Vr(a.Ab || []), Ss(3, b)), Wr(a.Bh || []), Ss(4,
                b)), Xr(a.Nb || []), Ss(5, b)), Tr(a.Mb || []), Ss(6, b)), Na(Vn), Ss(7, b));
            k = k.apply(Mr(this.l));
            Uq(this.j) && Ll(k, n => {
                As(n);
                var m;
                null != (m = this.j.j) && (m = Ks(m, n), null != (null == m ? void 0 : m.wa) && Ds(n, m.wa))
            });
            let l = k;
            null !== d && (l = a.Ta && a.Xb ? Ml(l, Qr(d, a.Xb, this.l, a.Sa), Ts(16, b)) : Ml(l, Pr(d, this.l, a.Sa), Ts(9, b)));
            l = Ml(l, na(Zr, e, f), Ts(10, b));
            a.Ra && (l = Ml(l, Yr(this.l.document, a.Ra), Ts(11, b)));
            l = Ml(Ml(l, Nr(this.l), Ts(12, b)), Ur(g, this.l), Ts(13, b));
            Uq(this.j) && Ll(l, n => Bs(n));
            l = a.Ka ? Ps(this.j, l) : Os(this.j, l);
            a.Ja && (l = Ol(l,
                Ac(this.l.location.href + this.l.localStorage.google_experiment_mod)));
            1 === c.length && cs(this.B, c[0], {
                Wc: k.j.length,
                Zd: l.j.length
            });
            return l.j.slice(0)
        }
    }
    const Ss = (a, b) => c => Xn(c, b, a),
        Ts = (a, b) => c => Xn(c.O, b, a);

    function Us(a, b) {
        if (!a) return !1;
        a = Ne(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function Vs(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function Ws(a) {
        return !!a.nextSibling || !!a.parentNode && Ws(a.parentNode)
    };

    function Xs(a) {
        const b = pi(a, !0),
            c = S(a).scrollWidth,
            d = S(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = ui(a);
        const g = [];
        var h = [];
        const k = [],
            l = [];
        var n = [],
            m = [],
            p = [];
        let q = 0,
            v = 0,
            u = Infinity,
            A = Infinity,
            D = null;
        var F = Dq({
            ta: !1
        }, a);
        for (var I of F) {
            F = I.getBoundingClientRect();
            const da = b - (F.bottom + f);
            var B = void 0,
                C = void 0;
            if (I.className && -1 != I.className.indexOf("adsbygoogle-ablated-ad-slot")) {
                B = I.getAttribute("google_element_uid");
                C = a.google_sv_map;
                if (!B ||
                    !C || !C[B]) continue;
                B = (C = zg(C[B])) ? C.height : 0;
                C = C ? C.width : 0
            } else if (B = F.bottom - F.top, C = F.right - F.left, 1 >= B || 1 >= C) continue;
            g.push(B);
            k.push(C);
            l.push(B * C);
            I.className && -1 != I.className.indexOf("google-auto-placed") ? (v += 1, I.className && -1 != I.className.indexOf("pedestal_container") && (D = B)) : (u = Math.min(u, da), m.push(F), q += 1, h.push(B), n.push(B * C));
            A = Math.min(A, da);
            p.push(F)
        }
        u = Infinity === u ? null : u;
        A = Infinity === A ? null : A;
        f = Ys(m);
        p = Ys(p);
        h = Zs(b, h);
        m = Zs(b, g);
        n = Zs(b * c, n);
        I = Zs(b * c, l);
        return new $s(a, {
            kd: e,
            Jb: b,
            Gd: c,
            Fd: d,
            yd: q,
            Vc: v,
            Yc: at(g),
            Zc: at(k),
            Xc: at(l),
            Dd: f,
            Cd: p,
            Bd: u,
            Ad: A,
            yb: h,
            xb: m,
            Rc: n,
            Qc: I,
            Hd: D
        })
    }

    function bt(a, b, c, d) {
        const e = Ee() && !(900 <= S(a.l).clientWidth);
        d = ya(d, f => Da(a.A, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.j.kd,
            pg_h: ct(a.j.Jb),
            pg_w: ct(a.j.Gd),
            pg_hs: ct(a.j.Fd),
            c: ct(a.j.yd),
            aa_c: ct(a.j.Vc),
            av_h: ct(a.j.Yc),
            av_w: ct(a.j.Zc),
            av_a: ct(a.j.Xc),
            s: ct(a.j.Dd),
            all_s: ct(a.j.Cd),
            b: ct(a.j.Bd),
            all_b: ct(a.j.Ad),
            d: ct(a.j.yb),
            all_d: ct(a.j.xb),
            ard: ct(a.j.Rc),
            all_ard: ct(a.j.Qc),
            pd_h: ct(a.j.Hd),
            dt: e ? "m" : "d"
        }
    }
    class $s {
        constructor(a, b) {
            this.l = a;
            this.j = b;
            this.A = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function at(a) {
        return me.apply(null, ya(a, b => 0 < b)) || null
    }

    function Zs(a, b) {
        return 0 >= a ? null : le.apply(null, b) / a
    }

    function Ys(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                0 < c && (b = Math.min(c, b))
            }
        return Infinity !== b ? b : null
    }

    function ct(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function dt(a, b) {
        b = (S(b).clientHeight || 0) - ui(b);
        let c = 0;
        for (let d = 0; d < a.length; d++) {
            const e = a[d].getBoundingClientRect();
            Lq(e) && e.top <= b && (c += 1)
        }
        return c
    }

    function et(a) {
        const b = {};
        var c = Fq({
            ta: !1,
            eb: !1,
            fb: !1,
            gb: !1
        }, a).map(d => d.getBoundingClientRect()).filter(Lq);
        b.Mc = c.length;
        c = Gq({
            fb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Lq);
        b.md = c.length;
        c = Gq({
            gb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Lq);
        b.Ed = c.length;
        c = Gq({
            eb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Lq);
        b.Pc = c.length;
        c = (S(a).clientHeight || 0) - ui(a);
        c = Fq({
            ta: !1
        }, a).map(d => d.getBoundingClientRect()).filter(Lq).filter(ma(ft, null, c));
        b.Nc = c.length;
        a = Xs(a);
        c = null != a.j.yb ? a.j.yb :
            null;
        null != c && (b.zd = c);
        a = null != a.j.xb ? a.j.xb : null;
        null != a && (b.Oc = a);
        return b
    }

    function Vq(a, b, {
        hc: c,
        Kc: d,
        ed: e
    } = {}) {
        const f = b.O;
        if (f.B) return !1;
        var g = b.T(),
            h = f.l(),
            k = a.B;
        a: {
            var l = a.j;
            switch (h) {
                case 0:
                    l = Us(Vs(g), l);
                    break a;
                case 3:
                    l = Us(g, l);
                    break a;
                case 2:
                    var n = g.lastChild;
                    l = Us(n ? 1 == n.nodeType ? n : Vs(n) : null, l);
                    break a
            }
            l = !1
        }
        if (k = !l && !(!k && 2 == h && !Ws(g))) g = 1 == h || 2 == h ? g : g.parentNode, k = !(g && !hn(g) && 0 >= g.offsetWidth);
        if (!k) return !1;
        c = null == c ? null : new bm(null, {
            google_max_responsive_height: c
        });
        g = cm(y(f.Ia, 2) || 0);
        h = f.F;
        h = null == h ? null : new bm(null, {
            google_ml_rank: h
        });
        k = gt(a, f);
        d = am(a.I, f.L ?
            f.L.j(b.U) : null, c, d || null, g, h, k);
        c = b.fill(a.F, d);
        if (e) {
            if (c) {
                e = c.Y;
                g = e.style.width;
                e.style.width = "100%";
                h = e.offsetWidth;
                e.style.width = g;
                e = h;
                g = a.j;
                h = c.Y;
                k = d && d.Fa() || {};
                if (g.top != g) l = yg(g) ? 3 : 16;
                else if (488 > S(g).clientWidth)
                    if (g.innerHeight >= g.innerWidth)
                        if (l = S(g).clientWidth, !l || .3 < (l - e) / l) l = 6;
                        else {
                            if (l = "true" != k.google_full_width_responsive) c: {
                                n = h.parentElement;
                                for (l = S(g).clientWidth; n; n = n.parentElement) {
                                    const m = Ne(n, g);
                                    if (!m) continue;
                                    const p = Ze(m.width);
                                    if (p && !(p >= l) && "visible" != m.overflow) {
                                        l = !0;
                                        break c
                                    }
                                }
                                l = !1
                            }
                            l = l ? 7 : !0
                        }
                else l = 5;
                else l = 4;
                if (!0 !== l) e = l;
                else {
                    if (!(k = "true" == k.google_full_width_responsive)) b: {
                        do
                            if ((k = Ne(h, g)) && "fixed" == k.position) {
                                k = !1;
                                break b
                            }
                        while (h = h.parentElement);
                        k = !0
                    }
                    k ? V(lj) || g.location && "#bffwroe2etoq" == g.location.hash ? e = !0 : (g = S(g).clientWidth, e = g - e, e = g && 0 <= e ? !0 : g ? -10 > e ? 11 : 0 > e ? 14 : 12 : 10) : e = 9
                }
                if (e) {
                    e = a.j;
                    g = c.Y;
                    if (h = cn(e, g)) g.style.border = g.style.borderStyle = g.style.outline = g.style.outlineStyle = g.style.transition = "none", g.style.borderSpacing = g.style.padding = "0", an(g, h, "0px"),
                        g.style.width = S(e).clientWidth + "px", dn(e, g, h), g.style.zIndex = 30;
                    e = !0
                } else mn(c.sa), e = !1
            } else e = !1;
            e = !e
        }
        if (e || !Yq(a, c, d)) return !1;
        nk(9, [f.F, f.ua]);
        Uq(a.A.j) && Cs(b);
        return !0
    }

    function Wq(a, b, c, d) {
        const e = c.pa ? c.pa : a.D;
        var f = {
            mb: e.A,
            ka: e.C
        };
        for (let g of e.D) g.adCount <= b.j.length && (f = g.Ob);
        return a.A.find({
            Xd: ht(a),
            ec: c.types,
            Ib: f.mb,
            Sa: b,
            Da: a.N,
            ka: f.ka || void 0,
            Ja: !!a.l.Ja,
            Ka: !!a.l.Ka,
            Mb: c.Mb,
            minWidth: c.minWidth,
            maxWidth: c.maxWidth,
            Ab: a.L,
            Ra: a.K,
            Nb: c.Nb,
            Ta: !!a.l.Ta,
            Xb: e.j
        }, d)
    }

    function it(a) {
        return a.H ? a.H : a.H = a.j.google_ama_state
    }

    function ht(a) {
        if (V(bj)) return [];
        const b = it(a);
        return null == b || null == b.placed ? [] : b.placed.map(c => c.index).filter(c => 0 <= c && c < a.A.A.j.length)
    }

    function gt(a, b) {
        return Xm(Ym(co(b).map(dm), () => {
            a.C.push(18)
        }))
    }

    function Yq(a, b, c) {
        if (!b) return !1;
        try {
            xn(a.j, b.Y, c)
        } catch (d) {
            return mn(b.sa), a.C.push(6), !1
        }
        return !0
    }
    class jt {
        constructor(a, b, c, d, e = {}) {
            this.A = a;
            this.F = b;
            this.j = c;
            this.D = d.pa;
            this.N = d.Da || [];
            this.I = d.nd || null;
            this.L = d.Ab || [];
            this.K = d.Ra || [];
            this.l = e;
            this.B = !1;
            this.J = [];
            this.C = [];
            this.H = void 0
        }
        M() {
            return this.j
        }
        ba(a) {
            this.J.push(a)
        }
        Gb() {
            return !!this.l.wc
        }
        ib() {
            return !$p(this.j)
        }
    }
    const ft = (a, b) => b.top <= a;

    function kt(a, b, c, d, e) {
        this.qa = a;
        this.ja = b;
        this.La = c;
        this.j = d;
        this.l = e
    };
    var lt = (a, b, {
        ib: c = !1,
        Gb: d = !1,
        Ud: e = !1
    } = {}) => {
        const f = [];
        e && f.push(9); - 1 < b.indexOf(3) && f.push(6); - 1 < b.indexOf(4) && !d && c && f.push(8); - 1 < b.indexOf(1) && (3 === a ? f.push(1, 5) : f.push(1, 2, 3)); - 1 < b.indexOf(2) && f.push(7); - 1 < b.indexOf(4) && d && c && f.push(8);
        return f
    };
    class mt {
        constructor(a, b) {
            this.B = a.slice(0);
            this.l = a.slice(0);
            this.A = Ea(this.l, 1);
            this.j = b
        }
    };

    function nt(a) {
        if (0 != a.j) throw Error("Already resolved/rejected.");
    }
    var pt = class {
        constructor() {
            this.l = new ot(this);
            this.j = 0
        }
    };

    function qt(a) {
        switch (a.j.j) {
            case 0:
                break;
            case 1:
                a.l && a.l(a.j.B);
                break;
            case 2:
                a.A && a.A(a.j.A);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var ot = class {
        constructor(a) {
            this.j = a
        }
        then(a, b) {
            if (this.l) throw Error("Then functions already set.");
            this.l = a;
            this.A = b;
            qt(this)
        }
    };
    const rt = class {
        constructor(a) {
            this.j = a;
            this.exception = void 0
        }
    };
    class st {
        j() {
            return new bm([], {
                ["google_reactive_ad_format"]: 40,
                ["google_tag_origin"]: "qs"
            })
        }
    };
    class tt {
        j() {
            return new bm(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function ut(a) {
        return jn(a.j.document).map(b => {
            const c = new Ep(b, 3);
            b = new Pn(zn(a.j, b));
            return new Tn(c, b, a.l, !1, 0, [], null, a.j, null)
        })
    }
    class vt {
        constructor(a) {
            var b = new tt;
            this.j = a;
            this.l = b || null
        }
    };
    const wt = {
        Rb: "10px",
        wb: "10px"
    };

    function xt(a) {
        return fn(a.j.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new Tn(new Ep(b, 1), new Nn(wt), a.l, !1, 0, [], null, a.j, null))
    }
    class yt {
        constructor(a, b) {
            this.j = a;
            this.l = b || null
        }
    };

    function zt(a, b) {
        a = a.getBoundingClientRect();
        return new At(a.top + ui(b), a.bottom - a.top)
    }

    function Bt(a) {
        return new At(Math.round(a.ma), Math.round(a.j))
    }
    class At {
        constructor(a, b) {
            this.ma = a;
            this.j = b
        }
        getHeight() {
            return this.j
        }
    };

    function Ct(a, b) {
        return null == a ? b + "ShouldNotBeNull" : 0 == a ? b + "ShouldNotBeZero" : -1 > a ? b + "ShouldNotBeLessMinusOne" : null
    }

    function Dt(a) {
        return it(a.A) && it(a.A).placed || []
    }

    function Et(a) {
        return Dt(a).map(b => Bt(zt(b.element, a.j)))
    }

    function Ft(a) {
        return Dt(a).map(b => b.index)
    }

    function Gt(a, b) {
        const c = b.O;
        return !a.D && c.A && E(c.A, 8) && 1 == y(c.A, 8) ? [] : c.B ? (c.J || []).map(d => Bt(zt(d, a.j))) : [Bt(new At(b.U.j, 0))]
    }

    function Ht(a) {
        a.sort((e, f) => e.ma - f.ma);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.ma;
            d = d.ma + d.j;
            f <= c ? c = Math.max(c, d) : (b.push(new At(c, f - c)), c = d)
        }
        return b
    }

    function It(a, b) {
        const c = [];
        let d = 0;
        for (const e of Sl(b)) {
            const f = b.get(e);
            f.sort((g, h) => h.getHeight() - g.getHeight());
            a.I || f.splice(a.C, f.length);
            !a.F && d + f.length > a.l && f.splice(a.l - d, f.length);
            c.push(e + "G" + f.map(g => g.ma + "~" + g.getHeight()).join("G"));
            d += f.length;
            if (!a.F && d >= a.l) break
        }
        return c
    }
    var Jt = class {
        constructor(a, b, c) {
            this.H = -1 == c.Cb;
            this.B = c.Cb;
            this.I = -1 == c.Za;
            this.C = c.Za;
            this.F = -1 == c.lb;
            this.l = c.lb;
            this.D = c.qd;
            this.A = b;
            this.j = a
        }
    };
    var Kt = {
            ea: "ama_success",
            Z: .1
        },
        Lt = {
            ea: "ama_failure",
            Z: .1
        },
        Mt = {
            ea: "ama_inf_scr",
            Z: .1
        },
        Nt = {
            ea: "ama_inf_scr",
            Z: .1
        },
        Ot = {
            ea: "ama_coverage",
            Z: .1
        },
        Pt = {
            ea: "ama_inf_scr",
            Z: 1
        },
        Qt = {
            ea: "ama_opt",
            Z: .1
        };

    function Rt(a, b, c) {
        a = c.B(a.j);
        0 < b.Z && (a.r = b.Z, P(Q, b.ea, a, !0, b.Z, void 0))
    }
    var St = class {
        constructor(a) {
            this.j = a
        }
    };

    function Tt(a) {
        a.F.forEach(b => {
            switch (b) {
                case 0:
                    Ut(a);
                    break;
                case 2:
                    if (b = J(a.j, Rh, 18)) {
                        const c = a.X || new xp(a.l, a.D);
                        ep(new fp(a.l, c, b, new Lo(a.l), K(a.j, Ph, 1)))
                    }
            }
        })
    }

    function Ut(a) {
        Vt(a) && Wt(a, "p", Xt(a));
        if (sl(a.j) && 1 === y(sl(a.j), 1)) {
            var b = J(sl(a.j), El, 6);
            b && 2 === y(b, 1) && yn(a.l)
        }
        b = a.A.Jd;
        a: {
            var c = a.l;
            var d = mq(c);c = S(c).clientHeight || jq[d];
            var e = pq(K(b, Tk, 2), d);
            if (e && (e = sq(e, c))) {
                d = e;
                break a
            }
            d = nq(d, c)
        }
        if (a.A.R && E(a.A.R, 10) && (c = fd(J(a.A.R, Dl, 10), 1), null !== c && void 0 !== c)) {
            var f = a.l;
            d = c;
            c = mq(f);
            e = S(f).clientHeight || jq[c];
            var g = void 0;
            b && (g = (g = (g = pq(K(b, Tk, 2), c)) ? J(g, Vk, 7) : void 0) ? tq(g, e) : void 0);
            var h = mq(f);
            f = S(f).clientHeight || jq[h];
            const T = rq(kq[h].Pb, f);
            f = null ===
                T ? nq(h, f) : new oq(T, T, uq(T, T, 8), 8, .3, g);
            g = rq(kq[c].zc, e);
            h = rq(kq[c].Pb, e);
            e = rq(kq[c].yc, e);
            c = f.A;
            g && e && h && void 0 !== d && (c = .5 >= d ? h + (1 - 2 * d) * (g - h) : e + (2 - 2 * d) * (h - e));
            d = c;
            d = new oq(c, d, uq(c, d, f.l), f.l, f.B, f.j)
        }
        if (E(a.j, 26)) {
            c = J(a.j, Gl, 26);
            e = a.l;
            g = G(c, 2);
            c = J(c, Tk, 1);
            f = S(e).clientHeight || jq[mq(e)];
            var k;
            e = null != (k = rq(null == c ? void 0 : y(c, 2), f)) ? k : d.A;
            var l;
            k = null != (l = rq(null == c ? void 0 : y(c, 5), f)) ? l : d.C;
            var n;
            l = g ? [] : null != (n = qq(null == c ? void 0 : K(c, Uk, 3), f)) ? n : d.D;
            var m;
            n = null != (m = null == c ? void 0 : y(c, 4)) ? m : d.l;
            var p;
            m = null != (p = null == c ? void 0 : fd(c, 6)) ? p : d.B;
            var q;
            p = null != (q = (null == c ? 0 : E(c, 7)) ? tq(J(c, Vk, 7), f) : null) ? q : d.j;
            d = new oq(e, k, l, n, m, p)
        }
        q = a.A.R ? y(a.A.R, 6) : [];
        p = a.A.R ? K(a.A.R, bl, 5) : [];
        var v;
        n = a.j;
        k = K(n, Ph, 1);
        l = a.A.R && Hl(a.A.R, 1) ? "text_image" : "text";
        c = new st;
        m = Un(k, a.l, {
            bd: c,
            ud: new Qn(l)
        });
        k.length != m.length && a.K.push(13);
        m = m.concat(xt(new yt(a.l, c)));
        k = 0;
        c = V(fj);
        e = !1;
        sl(n) && 1 === y(sl(n), 1) && (f = J(sl(n), El, 6)) && (k = y(f, 2) || 0, 1 === y(f, 1) && (e = !0));
        var u, A;
        f = (null == (v = J(n, jl, 24)) ? void 0 : null == (u = J(v, ol, 3)) ? void 0 :
            null == (A = J(u, ql, 3)) ? void 0 : J(A, rl, 2)) || !1;
        if (c || e || f) v = ut(new vt(a.l)), m = m.concat(v), zs.H = !0, zs.B = v.length;
        m = m.concat(Wp(n, l, a.l));
        v = J(n, jl, 24);
        v = new Rs(m, a.l, k, v);
        u = a.D;
        A = a.l;
        q = {
            pa: d,
            nd: a.W,
            Da: a.A.Da,
            Ab: q,
            Ra: p
        };
        m = V(gj);
        ul(a.j) ? (p = ul(a.j), m = m || hd(p, 14, !1), n = hd(p, 2, !1), l = hd(p, 3, !1), k = hd(p, 4, !1), d = hd(p, 5, !1), c = hd(p, 6, !1), e = fd(p, 8), p = {
            Ja: m,
            Ka: n,
            Yb: l,
            Ac: k,
            Zb: d,
            wc: c,
            Id: null == e ? 0 : e,
            nc: y(p, 10),
            Ta: Yt(a),
            Bb: a.L
        }) : p = {
            Ja: m,
            Ka: !1,
            Yb: !1,
            Ac: !1,
            Zb: !1,
            wc: !1,
            Id: 0,
            nc: 0,
            Ta: Yt(a),
            Bb: a.L
        };
        a.B = new jt(v, u, A, q, p);
        v = a.A.R ?
            y(a.A.R, 2) : [];
        u = y(b, 1);
        b = a.B;
        v = lt(u, v, {
            ib: b.ib(),
            Gb: b.Gb(),
            Ud: !!b.l.Bb
        });
        b = new mt(v, b);
        a.H = b;
        v = a.H;
        b = new pt;
        for (v.j.B = !0; 0 < v.l.length;) u = v, (A = Rq[v.l[0]]) ? u = A(u.j) : (u.j.ba(12), u = !0), u || v.j.ba(5), v.l.shift();
        try {
            var D = v.j.A.A.filter(Vn).j.length,
                F = v.j.J.slice(0),
                I = v.j,
                B = [...I.C],
                C = I.A.j;
            var da = Uq(C) ? [...C.j.l] : [];
            var cb = [...B, ...da];
            var xa = new rt(new kt(D, F, cb, v.j.A.A.j.length, v.j.A.B.j));
            nt(b);
            b.j = 1;
            b.B = xa;
            qt(b.l)
        } catch (T) {
            D = T, nt(b), b.j = 2, b.A = D, qt(b.l)
        }
        b.l.then(ma(a.da, a), ma(a.N, a))
    }

    function Yt(a) {
        return a.A.R && E(a.A.R, 10) ? .5 <= (fd(J(a.A.R, Dl, 10), 1) || 0) : !0
    }

    function Zt(a, b) {
        for (var c = fs(fs(new ks(b.qa), b.ja), a.K), d = b.La, e = 0; e < d.length; e++) a: {
            for (var f = d[e], g = 0; g < c.D.length; g++)
                if (c.D[g] == f) break a;c.D.push(f)
        }
        c.l.ppos = b.pc;
        c.l.eatf = b.vb;
        c.l.reatf = b.cb;
        c.l.a = a.H.B.slice(0).join(",");
        a = es(js(is(c, a.j), a.F), a.D);
        if (c = b.ub) a.l.as_count = c.Mc, a.l.d_count = c.md, a.l.ng_count = c.Ed, a.l.am_count = c.Pc, a.l.atf_count = c.Nc, a.l.mdns = ls(c.zd), a.l.alldns = ls(c.Oc);
        c = b.qb;
        null != c && (a.l.allp = c);
        if (c = b.od) {
            d = [];
            for (var h of Sl(c)) 0 < c.get(h).length && (e = c.get(h)[0], d.push("(" + [h, e.Wc, e.Zd].join() + ")"));
            a.l.fd = d.join(",")
        }
        h = b.Jb;
        null != h && (a.l.pgh = h);
        void 0 !== b.exception && gs(a, b.exception).ba(1);
        return a
    }

    function $t(a, b) {
        var c = Zt(a, b);
        Rt(a.C, 0 < b.ja.length || 0 < a.K.length || void 0 !== b.exception ? 0 < a.J ? Nt : Lt : 0 < a.J ? Mt : Kt, c);
        if (J(a.j, jl, 24)) {
            b = a.B.A.j.j;
            zs.C = [...y(b.j, 1)];
            var d;
            let k;
            zs.F = !!(null == (d = J(b.j, ol, 3)) ? 0 : null == (k = J(d, ql, 3)) ? 0 : J(k, rl, 2));
            d = new Ul;
            var e;
            let l;
            for (const m of null != (l = null == (e = J(b.j, ll, 2)) ? void 0 : K(e, ml, 1)) ? l : []) d.set(H(m, 1), gd(m, 2, 0));
            zs.l = d;
            e = it(a.B);
            var f;
            zs.A = !!(null == e ? 0 : null == (f = e.optimization) ? 0 : f.ablationFromStorage);
            var g;
            if (null == e ? 0 : null == (g = e.optimization) ? 0 : g.ablatingThisPageview) zs.D = !0;
            let n;
            zs.I = !!(null == e ? 0 : null == (n = e.optimization) ? 0 : n.availableAbg);
            var h;
            f = zs;
            c = new ws(c);
            f.C ? (g = null != (h = f.C) ? h : [], c.j.sl = g.join("~"), c.j.ab = ns(f.D), c.j.rr = ns(f.H), c.j.oab = ns(f.F), null != f.A && (c.j.sab = ns(f.A)), c.j.ls = ns(f.I), ms(c, f.l.Ea()), null != f.B && (c.j.rp = ns(f.B)), Fs(f, c)) : (h = "irr".replace(/~/g, ""), c.j.e = c.j.e ? c.j.e + ("~" + h) : h);
            h = c;
            Rt(a.C, Qt, h)
        }
    }

    function au(a) {
        return sl(a.j) && 1 === y(sl(a.j), 1) ? !(J(sl(a.j), El, 6) && 1 <= (y(J(sl(a.j), El, 6), 3) || 0)) : !1
    }

    function bu(a) {
        if (au(a)) {
            a = a.B;
            var b = Gq({
                fb: !0,
                gb: !0
            }, a.j);
            a = 0 < dt(b, a.j)
        } else a = a.B.j, b = Fq({
            ta: !1,
            eb: !1
        }, a), a = 0 < dt(b, a);
        return a
    }

    function cu(a) {
        if (Vt(a)) {
            var b = Xt(a);
            a.I.P(null == b ? void 0 : b, () => {
                Wt(a, "s", b)
            });
            rm(a.I, c => {
                Wt(a, "d", Xt(a), c);
                a.I.Ya();
                let d, e;
                if (null == (d = a.j) ? 0 : null == (e = ul(d)) ? 0 : hd(e, 21, !1)) {
                    let f, g;
                    null != (f = a.j) && null != (g = ul(f)) && z(g, 18, !1);
                    try {
                        let h;
                        if (null == (h = a.F) ? 0 : h.includes(0)) a.J++, Ut(a), Wt(a, "r", Xt(a), c)
                    } catch (h) {
                        Wt(a, "f", Xt(a), c), Rt(a.C, Nt, gs(js(is(es(new ks(0), a.D), a.j), a.F).ba(1), h))
                    }
                }
            })
        }
    }

    function du(a, b, c) {
        {
            var d = it(a.B),
                e = b.j;
            const f = e.j;
            let g = e.qa,
                h = e.ja.slice(),
                k = e.La.slice(),
                l = b.exception;
            d ? (d.numAutoAdsPlaced ? g += d.numAutoAdsPlaced : a.H.A && k.push(13), void 0 !== d.exception && (l = d.exception), c = {
                qa: g,
                qb: f,
                ja: e.ja.slice(),
                La: k,
                exception: l,
                cb: c,
                vb: !!d.eatf
            }) : (k.push(12), a.H.A && k.push(13), c = {
                qa: g,
                qb: f,
                ja: h,
                La: k,
                exception: l,
                cb: c,
                vb: !1
            })
        }
        c.ub = et(a.B.j);
        if (b = b.j.l) c.od = b;
        c.Jb = S(a.l).scrollHeight;
        if (mk()) {
            d = a.B.A.A.j.slice(0);
            b = [];
            for (const f of d) {
                d = {};
                e = f.K;
                for (const g of Sl(e)) d[g] = e.get(g);
                d = {
                    anchorElement: f.H.j(f.j),
                    position: f.l(),
                    clearBoth: f.I,
                    locationType: f.ua,
                    placed: f.B,
                    placementProto: f.A ? ld(f.A) : null,
                    articleStructure: f.C ? ld(f.C) : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            nk(14, [{
                placementIdentifiers: b
            }, a.B.F, c.ub])
        }
        return c
    }

    function eu(a, b) {
        a = a.B.j;
        a = a.googleSimulationState = a.googleSimulationState || {};
        a.amaConfigPlacementCount = b.qb;
        a.numAutoAdsPlaced = b.qa;
        a.hasAtfAd = b.cb;
        void 0 !== b.exception && (a.exception = b.exception)
    }

    function Wt(a, b, c, d) {
        a = {
            r: b,
            pg_h: S(a.l).scrollHeight,
            su: a.l.location.hostname,
            d: void 0 == c ? -1 : c
        };
        void 0 !== d && (a.pg_hd = d);
        P(Q, Pt.ea, a, !0, Pt.Z, void 0)
    }

    function Vt(a) {
        let b, c, d;
        return null != (d = null == (b = a.j) ? void 0 : null == (c = ul(b)) ? void 0 : hd(c, 18, !1)) ? d : !1
    }

    function Xt(a) {
        let b = null;
        ul(a.j) && E(ul(a.j), 19) && (b = y(ul(a.j), 19));
        return b
    }
    class fu {
        constructor(a, b, c, d, e, f, g, h, k, l) {
            this.l = a;
            this.C = b;
            this.D = c;
            this.j = d;
            this.A = e;
            this.F = f;
            this.W = g || null;
            this.K = [];
            this.X = h;
            this.I = k;
            this.L = l;
            this.J = 0
        }
        da(a) {
            try {
                const b = bu(this) || au(this) ? bu(this) : void 0;
                xm({
                    zb: b
                }, this.l);
                cu(this);
                const c = du(this, a, bu(this));
                E(this.j, 25) && G(J(this.j, Fl, 25), 1) && eu(this, c);
                $t(this, c);
                R(753, () => {
                    if (V($i) && null != this.B) {
                        var d = this.l;
                        var e = this.B;
                        var f = {
                                Cb: Tj(ej),
                                Za: Tj(dj),
                                lb: Tj(aj),
                                qd: V(Zi)
                            },
                            g = Ct(f.Cb, "gapsMeasurementWindow") || Ct(f.Za, "gapsPerMeasurementWindow") ||
                            Ct(f.lb, "maxGapsToReport");
                        e = null != g ? new Wm(null, Error(g)) : -1 == f.Za && -1 == f.lb ? new Wm(null, Error("ShouldHaveLimits")) : Vm(new Jt(d, e, f));
                        d = Xa(c);
                        if (null != e.j) {
                            e = e.j.value;
                            f = io(e.A.A.A.j.slice(0), e.j);
                            g = Et(e);
                            var h = new um(Ft(e));
                            for (var k = 0; k < f.length; ++k)
                                if (!h.contains(k)) {
                                    var l = Gt(e, f[k]);
                                    g.push(...l)
                                }
                            g.push(new At(0, 0));
                            g.push(Bt(new At(S(e.j).scrollHeight, 0)));
                            f = Ht(g);
                            g = new Ul;
                            for (h = 0; h < f.length; ++h) k = f[h], l = e.H ? 0 : Math.floor(k.ma / e.B), Ql(g, l) || g.set(l, []), g.get(l).push(k);
                            f = It(e, g);
                            d.pc = `M${e.l}H${e.B}C${e.C}B${Number(!!e.D)}W${f.join("W")}`
                        } else d.pc =
                            "E" + e.l.message;
                        d = Zt(this, d);
                        Rt(this.C, Ot, d)
                    }
                })()
            } catch (b) {
                this.N(b)
            }
        }
        N(a) {
            $t(this, {
                qa: 0,
                qb: void 0,
                ja: [],
                La: [],
                exception: a,
                cb: void 0,
                vb: void 0,
                ub: void 0
            })
        }
    };
    var gu = (a, b, c, d, e = null) => {
        try {
            var f = a.localStorage
        } catch (n) {
            f = null
        }
        if (f) {
            if (V(Yi)) var g = null;
            else try {
                g = f.getItem("google_ama_config")
            } catch (n) {
                g = null
            }
            try {
                var h = g ? nd(xl, g) : null
            } catch (n) {
                h = null
            }
            g = h
        } else g = null;
        a: {
            if (d) try {
                var k = nd(xl, d);
                break a
            } catch (n) {
                fm(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            k = null
        }
        if (d = k) {
            k = new yl;
            kd(d, 3, k);
            g = ul(d) && y(ul(d), 13) ? y(ul(d), 13) : 1;
            z(k, 1, Date.now() + 864E5 * g);
            cd = k = bd(ld(d));
            k = new d.constructor(k);
            cd = null;
            ul(d) && (g = new vl, h = hd(ul(d), 12, !1), g = z(g, 12, h), h = hd(ul(d), 15, !1), g = z(g, 15, h), kd(k, 15, g));
            g = K(k, Ph, 1);
            for (h = 0; h < g.length; h++) z(g[h], 11, []);
            kd(k, 22, void 0);
            if (V(Yi)) hm(a);
            else try {
                a.localStorage.setItem("google_ama_config", k.F())
            } catch (n) {
                fm(a, {
                    lserr: 1
                })
            }
            k = Jl(a, K(d, Bl, 7));
            a: {
                if (k && (g = y(k, 3), h = J(d, $k, 9), g && h)) {
                    b: {
                        h = K(h, Yk, 1);
                        for (l of h)
                            if (y(l, 1) == g) {
                                var l = J(l, Xk, 2) || null;
                                break b
                            }
                        l = null
                    }
                    if (l) break a
                }
                l = J(d, Xk, 8) || new Xk
            }
            l = {
                Jd: l
            };
            k && (l.R = k);
            k && Hl(k, 3) && (l.Da = [1]);
            if (7 == c.google_pgb_reactive && (k = l.R, !k || !G(k, 8))) return !1;
            if (ce(a, 2))
                if (nk(5, [ld(d)]), k = gm(c), c = (c = l.R) && y(c, 4) || "", k.google_package =
                    c, k = new bm(["google-auto-placed"], k), c = new St(a), k = void 0 === k ? null : k, g = new tm(a), e = void 0 === e ? null : e, h = null, k = void 0 === k ? null : k, h = void 0 === h ? null : h, g = void 0 === g ? null : g, e = void 0 === e ? null : e, b)
                    if (d) {
                        f = [];
                        J(d, Rh, 18) && f.push(2);
                        l.R && f.push(0);
                        try {
                            Tt(new fu(a, c, b, d, l, f, k, h, g, e))
                        } catch (n) {
                            mk() && nk(15, [n]), Rt(c, Lt, gs(js(is(es(new ks(0), b), d), f).ba(1), n))
                        }
                    } else Rt(c, Lt, es(new ks(0), b).ba(8));
            else Rt(c, Lt, (new ks(0)).ba(9));
            return !0
        }
        g && (fm(a, {
            cfg: 1,
            cl: 1
        }), hm(a));
        return !1
    };
    var hu = a => "number" === typeof a.google_reactive_sra_index,
        mu = (a, b, c) => {
            const d = b.j || b.pubWin,
                e = b.G;
            e.google_reactive_plat = ur(d, e, c);
            var f = vr(a);
            f && (e.google_reactive_plaf = f);
            (f = wr(a)) && (e.google_reactive_fba = f);
            iu(a, e);
            f = pr(b.pubWin.location);
            ju(a, f, e);
            f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
            Jf() || dk(b.pubWin.top);
            f = R(429, (h, k) => ku(b, d, e.google_ad_client, a, h, k, c));
            const g = R(430, na(xi, b.pubWin, 431, Q));
            bi(b.pubWin, "rsrai", f, g);
            ji(d).wasReactiveTagRequestSent = !0;
            lu(b, a)
        };
    const lu = (a, b) => {
        const c = a.G,
            d = ea(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = R(353, (f, g) => {
            var h = a.pubWin,
                k = c.google_ad_client;
            return of(g.origin) ? gu(h, k, d, f.config) : !1
        });
        const e = R(353, na(xi, a.pubWin, 353, Q));
        bi(a.pubWin, "apcnf", b, e)
    };
    var ku = (a, b, c, d, e, f, g) => {
            if (! of (f.origin)) return !1;
            f = e.data;
            if (!Array.isArray(f)) return !1;
            if (!ce(b, 1)) return !0;
            f && nk(6, [f]);
            e = e.amaConfig;
            const h = [],
                k = [],
                l = ji(b);
            let n = null;
            for (let m = 0; m < f.length; m++) {
                if (!f[m]) continue;
                const p = f[m],
                    q = p.adFormat;
                l && p.enabledInAsfe && (l.reactiveTypeEnabledInAsfe[q] = !0);
                if (!p.noCreative) {
                    p.google_reactive_sra_index = m;
                    if (9 === q && e) {
                        p.pubVars = Object.assign(p.pubVars || {}, nu(d, p));
                        const v = new lm;
                        if (jm(v, p)) {
                            n = v;
                            continue
                        }
                    }
                    h.push(p);
                    k.push(q)
                }
            }
            h.length && (ih("rasra::pm", {
                rt: k.join(","),
                c
            }, .1), yr(a.F.qc, 522, m => {
                ou(h, b, c, m, d, g)
            }));
            e && gu(b, c, d, e, n);
            return !0
        },
        nu = (a, b) => {
            const c = b.adFormat,
                d = b.adKey;
            delete b.adKey;
            const e = {};
            a = a.page_level_pubvars;
            ea(a) && Object.assign(e, a);
            e.google_ad_unit_key = d;
            e.google_reactive_sra_index = b.google_reactive_sra_index;
            30 === c && (e.google_reactive_ad_format = 30);
            e.google_pgb_reactive = e.google_pgb_reactive || 5;
            return b.pubVars = e
        },
        ou = (a, b, c, d, e, f) => {
            const g = [];
            for (let h = 0; h < a.length; h++) {
                const k = a[h],
                    l = k.adFormat,
                    n = k.adKey,
                    m = d.configProcessorForAdFormat(l);
                l && m && n ? (k.pubVars = nu(e, k), delete k.google_reactive_sra_index, g.push(l), hh(466, () => m.verifyAndProcessConfig(b, k, f))) : ih("rasra::ivc", {
                    af: l,
                    ak: n,
                    c
                }, .1)
            }
            ih("rasra::pr", {
                rt: g.join(","),
                c
            }, .1)
        },
        iu = (a, b) => {
            const c = [];
            let d = !1;
            gg(hi, (e, f) => {
                let g;
                if (a.hasOwnProperty(f)) {
                    const h = a[f];
                    ea(h) && h.google_ad_channel && (g = String(h.google_ad_channel))
                }
                f = hi[f] - 1;
                c[f] && "+" != c[f] || (c[f] = g ? g.replace(/,/g, "+") : "+", d = d || g)
            });
            d && (b.google_reactive_sra_channels = c.join(","))
        },
        ju = (a, b, c) => {
            const d = a.page_level_pubvars;
            !c.google_adtest &&
                ("on" == a.google_adtest || d && "on" == d.google_adtest || b) && (c.google_adtest = "on")
        };
    Dc("script");
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
    var pu = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function qu() {
        var a = O(),
            b = Hf(a);
        if (b) return (b = b || Hf()) ? (a = b.pageViewId, b = b.clientId, "string" === typeof b && (a += b.replace(/\D/g, "").substr(0, 6))) : a = null, +a;
        a = Hk(a, !1).$;
        (b = a.google_global_correlator) || (a.google_global_correlator = b = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
        return b
    }

    function ru() {
        if (su) return su;
        const a = Kf() || O(),
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? su = b : a.google_persistent_state_async = su = new tu
    }

    function uu(a) {
        return vu[a] || "google_ps_" + a
    }

    function X(a, b, c) {
        b = uu(b);
        a = a.S;
        const d = a[b];
        return void 0 === d ? a[b] = c : d
    }

    function wu(a, b) {
        var c = X(a, b, 0) + 1;
        return a.S[uu(b)] = c
    }

    function xu() {
        var a = ru();
        return X(a, 20, {})
    }

    function yu() {
        var a = ru();
        return X(a, 28, [])
    }
    class tu {
        constructor() {
            this.S = {}
        }
    }
    var su = null;
    const vu = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function zu(a, b) {
        if (!$m(b, a)) return () => {};
        a = Au(b, a);
        if (!a) return () => {};
        const c = yu();
        b = Xa(b);
        const d = {
            Lb: a,
            G: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => Ea(c, d)
    }

    function Au(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !ug.test(a.className);) a = a.parentElement;
        return a
    }

    function Bu(a, b) {
        for (let g = 0; g < a.childNodes.length; g++) {
            const h = {},
                k = a.childNodes[g];
            var c = k.style,
                d = h,
                e = ["width", "height"];
            for (let l = 0; l < e.length; l++) {
                const n = "google_ad_" + e[l];
                if (!d.hasOwnProperty(n)) {
                    var f = Ze(c[e[l]]);
                    f = null === f ? null : Math.round(f);
                    null != f && (d[n] = f)
                }
            }
            if (h.google_ad_width == b.google_ad_width && h.google_ad_height == b.google_ad_height) return k
        }
        return null
    }

    function Cu(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function Du(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 0 : 90;
        if (a.j != c) {
            a.j = c;
            a = yu();
            for (const d of a)
                if (d.Lb.offsetWidth != d.offsetWidth || d.G.google_full_width_responsive_allowed) d.offsetWidth = d.Lb.offsetWidth, hh(467, () => {
                    var e = d.Lb,
                        f = d.G;
                    const g = Bu(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? f.gfwroh + "px" : "", e.style.width = f.gfwrow ? f.gfwrow + "px" : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    O().google_spfd(e, f, b);
                    const h = Bu(e, f);
                    !h && g && 1 == e.childNodes.length ? (Cu(g, !1), V(xj) ? f.rss = 1 : (f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize"), e.setAttribute("data-adsbygoogle-status", "reserved"), e.className += " adsbygoogle-noablate", zr(b), b.adsbygoogle.push({
                        element: e,
                        params: f
                    })) : h && g ? h != g && (Cu(g, !1), Cu(h, !0)) : P(Q, "auto_size_refresh", {
                        context: "showOrHideElm",
                        url: b.location.href,
                        nodes: e.childNodes.length
                    }, !0, void 0, void 0)
                })
        }
    }
    class Eu {
        constructor() {
            this.j = null
        }
        P(a) {
            const b = ru();
            X(b, 27, !1) || (b.S[uu(27)] = !0, this.j = a.innerHeight >= a.innerWidth ? 0 : 90, L(a, "resize", () => Du(this, a)))
        }
    }
    ca(Eu);
    var Fu = (a, b) => {
        Zg(a, c => {
            c.shv = String(b);
            c.mnvr = "";
            const d = Xj(r);
            d && (c.eid = 50 < d.length ? d.substring(0, 50) + "T" : d)
        })
    };
    var Gu = class {
        constructor(a, b, c) {
            this.B = a;
            this.A = b;
            this.j = c;
            this.l = null;
            this.C = this.D = 0
        }
        F() {
            10 <= ++this.D && r.clearInterval(this.l);
            var a = cn(this.B, this.A);
            a = dn(this.B, this.A, a);
            const b = Zm(this.A, this.B);
            null != b && 0 === b.x || r.clearInterval(this.l);
            a && (this.C++, a = {
                aligns: this.C,
                attempt: this.D,
                client: this.j.google_ad_client,
                eoffs: null != b ? b.x : null,
                eids: Xj(this.j),
                slot: this.j.google_ad_slot,
                url: this.j.google_page_url
            }, P(Q, "rspv:al", a, !0, .01, void 0))
        }
    };

    function Hu(a) {
        try {
            return a.sz()
        } catch (b) {
            return !1
        }
    }

    function Iu(a) {
        return !!a && ("object" === typeof a || "function" === typeof a) && Hu(a) && hg(a.nq) && hg(a.nqa) && hg(a.al) && hg(a.rl)
    }

    function Ju(a) {
        const b = R(189, ma(a.N, a));
        a.l.setTimeout(b, 0)
    }
    class Ku {
        constructor(a) {
            this.B = [];
            this.l = a || window;
            this.j = 0;
            this.A = null;
            this.H = 0
        }
        I(a, b) {
            0 != this.j || 0 != this.B.length || b && b != window ? this.C(a, b) : (this.j = 2, this.F(new Lu(a, window)))
        }
        C(a, b) {
            this.B.push(new Lu(a, b || this.l));
            Ju(this)
        }
        K(a) {
            this.j = 1;
            if (a) {
                const b = R(188, ma(this.D, this, !0));
                this.A = this.l.setTimeout(b, a)
            }
        }
        D(a) {
            a && ++this.H;
            1 == this.j && (null != this.A && (this.l.clearTimeout(this.A), this.A = null), this.j = 0);
            Ju(this)
        }
        L() {
            return !(!window || !Array)
        }
        J() {
            return this.H
        }
        N() {
            if (0 == this.j && this.B.length) {
                const a =
                    this.B.shift();
                this.j = 2;
                const b = R(190, ma(this.F, this, a));
                a.$.setTimeout(b, 0);
                Ju(this)
            }
        }
        F(a) {
            this.j = 0;
            a.j()
        }
    }
    var Mu;
    Ku.prototype.nq = Ku.prototype.I;
    Ku.prototype.nqa = Ku.prototype.C;
    Ku.prototype.al = Ku.prototype.K;
    Ku.prototype.rl = Ku.prototype.D;
    Ku.prototype.sz = Ku.prototype.L;
    Ku.prototype.tc = Ku.prototype.J;
    var Lu = class {
        constructor(a, b) {
            this.j = a;
            this.$ = b
        }
    };
    var Nu = "undefined" === typeof sttc ? void 0 : sttc;

    function Ou(a) {
        try {
            return ph(a), new Th(JSON.parse(a))
        } catch (b) {
            dh.ca(838, b instanceof Error ? b : Error(String(b)), void 0, c => {
                c.jspb = String(a)
            })
        }
        return new Th
    };
    let Pu = (new Date).getTime();

    function Qu(a) {
        this.j = a || {
            cookie: ""
        }
    }
    Qu.prototype.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        "object" === typeof c && (h = c.Ch, g = c.Vd || !1, f = c.domain || void 0, e = c.path || void 0, d = c.ic);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    Qu.prototype.get = function(a, b) {
        const c = a + "=",
            d = (this.j.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = sb(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    Qu.prototype.Ea = function() {
        return this.j.cookie ? (this.j.cookie || "").split(";").length : 0
    };

    function Ru(a, b = window) {
        if (G(a, 5)) try {
            return b.localStorage
        } catch (c) {}
        return null
    }

    function Su(a) {
        return V(Kj) && !a.navigator.cookieEnabled ? !1 : "null" !== a.origin
    }

    function Tu(a, b) {
        return G(a, 5) && Su(b) ? b.document.cookie : null
    }

    function Uu(a, b, c) {
        b = Tu(b, c);
        return null === b ? null : (new Qu({
            cookie: b
        })).get(a) || ""
    };

    function Vu(a, b) {
        return Uu("__gads", b, a.j)
    }
    var Wu = class {
        constructor(a) {
            this.j = a;
            this.l = 0
        }
    };

    function Xu(a) {
        return a.some(b => 6 === b.state)
    }

    function Yu(a, b) {
        a = a.filter(c => 6 === c.state).map(c => c.issuerOrigin);
        if (0 == a.length) return null;
        a = {
            type: "send-redemption-record",
            issuers: a,
            refreshPolicy: "none",
            signRequestData: "include",
            includeTimestampHeader: !0,
            additionalSignedHeaders: ["sec-time", "Sec-Redemption-Record"]
        };
        b && 0 < Object.keys(b).length && (a.additionalSigningData = $c(JSON.stringify(b)));
        return a
    };
    var Zu = R(215, a => {
            const b = a.google_sa_queue,
                c = b.shift();
            a.google_sa_impl || ih("shimpl", {
                t: "no_fn"
            });
            "function" === typeof c && hh(216, c);
            b.length && a.setTimeout(() => Zu(a), 0)
        }),
        $u = a => {
            const b = ve(document, "IFRAME");
            gg(a, (c, d) => {
                null != c && b.setAttribute(d, c)
            });
            return b
        },
        av = (a, b) => {
            const c = new XMLHttpRequest;
            try {
                c.open("GET", a)
            } catch (d) {
                throw Error("Error opening XHR: " + d);
            }
            return new Promise(d => {
                const e = () => {
                    c.readyState != XMLHttpRequest.DONE || 300 <= c.status || d(b(c.responseText))
                };
                c.onreadystatechange = e;
                c.onload =
                    e;
                c.onerror = () => {
                    throw Error("XHR error: " + a);
                };
                c.send()
            })
        },
        bv = a => av(a, b => b.includes('"_cookies_":') ? JSON.parse(b) : b);

    function cv(a, b, c, d) {
        return R(629, e => {
            if ("string" === typeof e) {
                if ("[]" === e) return Promise.resolve();
                e = nd(Zd, e);
                V(Aj) && z(e, 4, d)
            } else {
                delete a._gfp_s_;
                if (!e) throw Error("Invalid JSONP response");
                e = e._cookies_;
                if (!e) return Promise.resolve();
                var f = e[0];
                if (!f) throw Error("Invalid JSONP response");
                var g = f._value_,
                    h = f._expires_;
                e = f._path_;
                f = f._domain_;
                if ("string" !== typeof g || "number" !== typeof h || "string" !== typeof e) throw Error("Invalid JSONP response");
                var k = new Zd;
                g = z(k, 1, g);
                h = z(g, 2, h);
                e = z(h, 3, e);
                if (V(Aj)) z(e,
                    4, d);
                else {
                    if ("string" !== typeof f) throw Error("Invalid JSONP response");
                    z(e, 4, f)
                }
            }
            f = {
                ic: y(e, 2) - c.j.Date.now() / 1E3,
                path: y(e, 3),
                domain: y(e, 4),
                Vd: !1
            };
            h = y(e, 1);
            g = c.j;
            G(b, 5) && Su(g) && (new Qu(g.document)).set("__gads", h, f);
            G(b, 5) && .01 > c.j.Math.random() && (f = Vu(c, b), yf({
                domain: y(e, 4),
                host: c.j.location.host,
                success: f === y(e, 1) ? "1" : "0"
            }));
            return Promise.resolve()
        })
    }

    function dv(a, b, c) {
        let d = void 0;
        if (V(Aj)) {
            a: {
                var e = c.location.host;
                if (c.navigator.cookieEnabled && e.includes(".")) {
                    e = e.replace(/:\d+$/, "");
                    e = e.split(".");
                    for (let h = 2; h <= e.length; h++) {
                        const k = e.slice(e.length - h).join(".");
                        var f = {
                                domain: k
                            },
                            g = c;
                        G(b, 5) && Su(g) && (new Qu(g.document)).set("gadsTest", "test", f);
                        if ("test" === Uu("gadsTest", b, c)) {
                            e = k;
                            break a
                        }
                    }
                }
                e = null
            }
            e && (d = cv(c, b, a, e))
        }
        else {
            if (0 === a.l) {
                if (Vu(a, b)) e = !0;
                else if (e = a.j, G(b, 5) && Su(e) && (new Qu(e.document)).set("GoogleAdServingTest", "Good", void 0), e = "Good" ===
                    Uu("GoogleAdServingTest", b, a.j)) f = a.j, G(b, 5) && Su(f) && (f = new Qu(f.document), f.get("GoogleAdServingTest"), f.set("GoogleAdServingTest", "", {
                    ic: 0,
                    path: void 0,
                    domain: void 0
                }));
                a.l = e ? 2 : 1
            }
            2 === a.l && (d = cv(c, b, a))
        }
        c._gfp_p_ = !0;
        return d
    }

    function ev(a, b, c, d) {
        d = {
            domain: c.location.hostname,
            callback: "_gfp_s_",
            client: d
        };
        const e = Vu(b, a) || "";
        e && (d.cookie = e);
        const f = kb(nb(gb(hb("https://partner.googleadservices.com/gampad/cookie.js"))), d),
            g = dv(b, a, c);
        g ? new Promise(h => {
            c._gfp_s_ = k => {
                g(k).then(h)
            };
            Me(c.document, f)
        }) : Promise.resolve()
    }

    function fv(a, b, c) {
        "_gfp_p_" in b || (b._gfp_p_ = !1, "_gfp_a_" in b || (b._gfp_a_ = !0));
        var d = new Wu(b);
        c = b.google_ad_client || c;
        var e = b._gfp_a_;
        if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
        if (e) {
            e = b._gfp_p_;
            if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_p_"}: ${e}`);
            e ? Promise.resolve() : V(Ui) ? (c = `${"https://partner.googleadservices.com/gampad/cookie.js"}?domain=${b.location.hostname}&client=${c}`, (e = Vu(d, a) || "") && (c += `&cookie=${e}`), (b = dv(d, a, b)) ? bv(c).then(b) : Promise.resolve()) :
                ev(a, d, b, c)
        } else Promise.resolve();
        a = Vu(d, a) || "";
        Eh || (Eh = new Dh);
        d = Eh;
        Ch(d, a);
        a = d.l;
        Uj.V().j(a);
        Qi.V().j(17)
    };
    var hv = a => {
            const b = {};
            b.dtd = gv((new Date).getTime(), Pu);
            return lg(b, a)
        },
        gv = (a, b, c = 1E5) => {
            a -= b;
            return a >= c ? "M" : 0 <= a ? a : "-M"
        };
    var jv = (a, b, c) => {
        let d;
        const e = (null == (d = b.parentElement) ? 0 : d.classList.contains("adsbygoogle")) ? b.parentElement : b;
        c.addEventListener("load", () => iv(e));
        return bi(a, "adpnt", (f, g) => {
            var h;
            if (ti(g, c.contentWindow)) {
                f = wi(f).qid;
                try {
                    c.setAttribute("data-google-query-id", f);
                    var k;
                    if (V(Pj)) {
                        null !== (h = a.googletag) && void 0 !== h ? h : a.googletag = {};
                        var l = null !== (k = a.googletag.queryIds) && void 0 !== k ? k : [];
                        l.push(f);
                        500 < l.length && l.shift();
                        a.googletag.queryIds = l
                    }
                } catch (n) {}
                e.dataset.adStatus && P(Q, "adsense_late_fill", {
                    status: e.dataset.adStatus
                }, !0, void 0, void 0);
                e.dataset.adStatus = "filled";
                h = !0
            } else h = !1;
            return h
        })
    };

    function iv(a) {
        setTimeout(() => {
            "filled" !== a.dataset.adStatus && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };
    var kv = a => {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? .05 : a
    };

    function lv(a, b) {
        const c = a.B;
        return c ? new mv(a, b, c) : null
    }

    function nv(a) {
        a.A = a.D;
        a.H.style.transition = "height 500ms";
        a.C.style.transition = "height 500ms";
        a.F.style.transition = "height 500ms";
        a.l.style.transition = "height 500ms";
        ov(a)
    }

    function pv(a, b) {
        (a.l.contentWindow || a.l.contentWindow).postMessage(JSON.stringify({
            ["msg_type"]: "expand-on-scroll-result",
            ["eos_success"]: !0,
            ["eos_amount"]: b,
            googMsgType: "sth"
        }), "*")
    }

    function ov(a) {
        const b = `rect(0px, ${a.l.width}px, ${a.A}px, 0px)`;
        a.l.style.clip = b;
        a.F.style.clip = b;
        a.l.setAttribute("height", a.A);
        a.l.style.height = a.A + "px";
        a.F.setAttribute("height", a.A);
        a.F.style.height = a.A + "px";
        a.C.style.height = a.A + "px";
        a.H.style.height = a.A + "px"
    }

    function qv(a, b) {
        b = Xe(b.r_nh);
        a.D = null == b ? 0 : b;
        if (0 >= a.D) return "1";
        a.J = $f(a.H).y;
        a.I = ui(a.j);
        if (a.J + a.A < a.I) return "2";
        if (a.J > pi(a.j) - a.j.innerHeight) return "3";
        b = a.I;
        a.l.setAttribute("height", a.D);
        a.l.style.height = a.D + "px";
        a.F.style.overflow = "hidden";
        a.H.style.position = "relative";
        a.H.style.transition = "height 100ms";
        a.C.style.transition = "height 100ms";
        a.F.style.transition = "height 100ms";
        a.l.style.transition = "height 100ms";
        b = Math.min(b + a.j.innerHeight - a.J, a.A);
        Uf(a.C, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.l.width}px, ${b}px, 0px)`;
        Uf(a.l, {
            clip: b
        });
        Uf(a.F, {
            clip: b
        });
        return "0"
    }

    function rv(a, b = {}) {
        a.X && (b.eid = a.X);
        b.qid = a.ha;
        P(Q, "eoscrl", b, !0, kv(String(a.Ma)), void 0)
    }
    class mv extends Bi {
        constructor(a, b, c) {
            super(a.j);
            this.l = b;
            this.F = c.firstElementChild;
            this.C = c;
            this.H = this.C.parentElement && this.C.parentElement.classList.contains("adsbygoogle") ? this.C.parentElement : this.C;
            this.A = parseInt(this.C.style.height, 10);
            this.X = null;
            this.Pa = this.Na = !1;
            this.ha = "";
            this.aa = this.I = this.D = 0;
            this.Jc = this.A / 5;
            this.J = $f(this.H).y;
            this.Ma = null;
            this.Ic = Ra(R(651, () => {
                this.J = $f(this.H).y;
                var d = this.I;
                this.I = ui(this.j);
                this.A < this.D ? (d = this.I - d, 0 < d && (this.aa += d, this.aa >= this.Jc ? (nv(this),
                    pv(this, this.D)) : (this.A = Math.min(this.D, this.A + d), pv(this, d), ov(this)))) : Kd(this.j, "scroll", this.K)
            }), this);
            this.K = () => {
                var d = this.Ic;
                N.requestAnimationFrame ? N.requestAnimationFrame(d) : d()
            }
        }
        L(a) {
            a["expand-on-scroll"] = (b, c) => {
                Ag(c, this.l) && (b = wi(b), this.X = b.i_expid, this.ha = b.qid, this.Ma = b.gen204_fraction, this.Na || (this.Na = !0, b = qv(this, b), "0" === b && L(this.j, "scroll", this.K, Hd), c.source.postMessage(JSON.stringify({
                        ["msg_type"]: "expand-on-scroll-result",
                        ["eos_success"]: "0" === b,
                        googMsgType: "sth"
                    }), "*"),
                    rv(this, {
                        err: b
                    })))
            };
            a["expand-on-scroll-force-expand"] = (b, c) => {
                Ag(c, this.l) && !this.Pa && (this.Pa = !0, nv(this), Kd(this.j, "scroll", this.K))
            }
        }
        B() {
            this.K && Kd(this.j, "scroll", this.K, Hd);
            super.B()
        }
    };

    function sv(a) {
        const b = a.A.getBoundingClientRect(),
            c = 0 > b.top + b.height;
        return !(b.top > a.l.innerHeight) && !c
    }
    class tv extends yi {
        constructor(a, b, c) {
            super();
            this.l = a;
            this.D = b;
            this.A = c;
            this.F = 0;
            this.A && (this.C = sv(this), this.I = Qa(this.H, this), this.j = R(433, () => {
                var d = this.I;
                N.requestAnimationFrame ? N.requestAnimationFrame(d) : d()
            }), L(this.l, "scroll", this.j, Hd))
        }
        H() {
            const a = sv(this);
            if (a && !this.C) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.D.contentWindow;
                c && (gi(c, "ig", b, "*", 2), 10 <= ++this.F && this.j && Kd(this.l, "scroll", this.j, Hd))
            }
            this.C = a
        }
    };
    class uv extends Bi {
        constructor(a, b) {
            a.j && super(a.j);
            this.l = b;
            this.C = a.B;
            this.A = a.D
        }
        L(a) {
            a.interscroller = (b, c) => {
                if (Ag(c, this.l) && (c = wi(b), b = c.i_h, c = c.i_f, null != b && "" !== b && null != c && "" !== c)) {
                    if (!this.C || !this.A) throw Error("intscrl_no_ins");
                    this.C.style.position = "relative";
                    M(this.A, {
                        position: "absolute",
                        clip: "rect(0, auto, auto, 0)"
                    });
                    var d = this.A.firstElementChild;
                    d && d.id == this.l.id && M(d, {
                        position: "fixed"
                    });
                    d = Xe(Yf(this.A, "zIndex").toString(), 0) + 1;
                    b = tf(this.l.id + "_header", b);
                    M(b, {
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        right: "0px",
                        "z-index": d
                    });
                    this.C.insertAdjacentElement("afterbegin", b);
                    b = tf(this.l.id + "_footer", c);
                    M(b, {
                        position: "absolute",
                        bottom: "0px",
                        left: "0px",
                        right: "0px",
                        "z-index": d
                    });
                    this.C.insertAdjacentElement("beforeend", b)
                }
            }
        }
    };
    const vv = {
        display: "block",
        left: "auto",
        position: "fixed",
        bottom: "0px"
    };

    function wv(a, b) {
        const c = a.B;
        return c ? new xv(a, b, c) : null
    }

    function yv(a, b) {
        if (!a.ha) return "1";
        b = Xe(b.r_nh);
        a.D = null == b ? 0 : b;
        if (0 >= a.D) return "2";
        a.C = $f(a.A).y;
        b = a.j.innerHeight;
        if (a.C + a.X < b) return "4";
        if (a.C > pi(a.j) - b) return "3";
        a.A.setAttribute("height", a.D);
        a.A.style.height = a.D + "px";
        Uf(a.l, vv);
        a.l.style.height = a.D + "px";
        a.K.style.position = "relative";
        a.aa();
        return "0"
    }

    function zv(a, b = {}) {
        a.F && (b.eid = a.F);
        b.qid = a.H;
        P(Q, "pscrl", b, !0, kv(String(a.I)), void 0)
    }
    class xv extends Bi {
        constructor(a, b, c) {
            a.j && super(a.j);
            this.A = b;
            this.l = c;
            this.K = this.l.parentElement;
            this.X = parseInt(this.l.style.height, 10);
            this.F = null;
            this.J = !1;
            this.H = "";
            this.D = 0;
            this.C = $f(this.A).y;
            this.I = null;
            this.ha = r.requestAnimationFrame || r.webkitRequestAnimationFrame || r.mozRequestAnimationFrame || r.oRequestAnimationFrame || r.msRequestAnimationFrame;
            this.aa = R(636, () => {
                this.ha.call(this.j, this.aa);
                var d = this.j.innerHeight,
                    e = ui(this.j);
                this.C = $f(this.K).y;
                e + d > this.C ? (e = e + d - this.C, d = Math.min(e,
                    this.X), e = this.D - e, e = Math.max(0, e), 0 >= e ? Uf(this.l, {
                    position: "absolute",
                    top: "0px",
                    bottom: "auto"
                }) : Uf(this.l, {
                    position: "fixed",
                    top: "auto",
                    bottom: "0px"
                }), Uf(this.l, {
                    clip: "rect(" + e + "px, " + this.A.width + "px, " + (e + d) + "px, 0px)"
                })) : Uf(this.l, {
                    clip: "rect(3000px, " + this.A.width + "px, 0px, 0px)"
                })
            })
        }
        L(a) {
            a["parallax-scroll"] = (b, c) => {
                b = wi(b);
                this.F = b.i_expid;
                this.H = b.qid;
                this.I = b.gen204_fraction;
                !this.J && Ag(c, this.A) && (this.J = !0, b = yv(this, b), c.source.postMessage(JSON.stringify({
                    ["msg_type"]: "parallax-scroll-result",
                    ["ps_success"]: "0" === b,
                    googMsgType: "sth"
                }), "*"), zv(this, {
                    err: b
                }))
            }
        }
    };

    function Av(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = se(a.j.M() || window);
        if (0 >= c.bottom || c.bottom > d.height || 0 >= c.right || c.left >= d.width) return null;
        var e = Bv(a, b, c, a.j.j.elementsFromPoint(ke(c.left + c.width / 2, c.left, c.right - 1), ke(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = Bv(a, b, c, a.j.j.elementsFromPoint(ke(c.left + c.width / 2, c.left, c.right - 1), ke(c.top + 2, c.top, c.bottom - 1)), 2, e.ia),
            g = Bv(a, b, c, a.j.j.elementsFromPoint(ke(c.left + 2, c.left, c.right - 1), ke(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.ia, ...f.ia]);
        const h = Bv(a, b, c, a.j.j.elementsFromPoint(ke(c.right - 1 - 2, c.left, c.right - 1), ke(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.ia, ...f.ia, ...g.ia]);
        var k = Cv(a, b, c),
            l = m => Da(a.A, m.overlapType) && Da(a.B, m.overlapDepth) && Da(a.l, m.overlapDetectionPoint);
        e = ya([...e.entries, ...f.entries, ...g.entries, ...h.entries], l);
        l = ya(k, l);
        k = [...e, ...l];
        f = -2 > c.left || c.right > d.width + 2;
        f = 0 < k.length || f;
        g = te(a.j.j);
        const n = new Df(c.left, c.top, c.width, c.height);
        e = [...za(e, m => new Df(m.elementRect.left,
            m.elementRect.top, m.elementRect.width, m.elementRect.height)), ...Ia(za(l, m => Ff(n, m.elementRect))), ...ya(Ff(n, new Df(0, 0, d.width, d.height)), m => 0 <= m.top && m.top + m.height <= d.height)];
        return {
            entries: k,
            isOverlappingOrOutsideViewport: f,
            scrollPosition: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            targetRect: c,
            viewportSize: {
                width: d.width,
                height: d.height
            },
            overlappedArea: 20 > e.length ? Dv(n, e) : Ev(c, e)
        }
    }

    function Fv(a, b) {
        const c = a.j.M(),
            d = a.j.j;
        return new Promise((e, f) => {
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(k => {
                                    const l = new Wg,
                                        n = Vg(l, () => Av(a, k));
                                    n && (l.events.length && (n.executionTime = Math.round(Number(l.events[0].duration))), h.disconnect(), e(n))
                                }, Gv);
                                h.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function Bv(a, b, c, d, e, f) {
        if (0 === c.width || 0 === c.height) return {
            entries: [],
            ia: []
        };
        const g = [],
            h = [];
        for (let m = 0; m < d.length; m++) {
            const p = d[m];
            if (p === b) continue;
            if (Da(f, p)) continue;
            h.push(p);
            const q = p.getBoundingClientRect();
            if (a.j.contains(p, b)) {
                g.push(Hv(a, c, p, q, 1, e));
                continue
            }
            if (a.j.contains(b, p)) {
                g.push(Hv(a, c, p, q, 2, e));
                continue
            }
            a: {
                var k = a;
                var l = b,
                    n = p;
                const A = k.j.l(l, n);
                if (!A) {
                    k = null;
                    break a
                }
                const {
                    suspectAncestor: D,
                    ra: F
                } = Iv(k, l, A, n) || {},
                {
                    suspectAncestor: I,
                    ra: B
                } = Iv(k, n, A, l) || {};k = D && F && I && B ? F <= B ? {
                    suspectAncestor: D,
                    overlapType: Jv[F]
                } : {
                    suspectAncestor: I,
                    overlapType: Kv[B]
                } : D && F ? {
                    suspectAncestor: D,
                    overlapType: Jv[F]
                } : I && B ? {
                    suspectAncestor: I,
                    overlapType: Kv[B]
                } : null
            }
            const {
                suspectAncestor: v,
                overlapType: u
            } = k || {};
            v && u ? g.push(Hv(a, c, p, q, u, e, v)) : g.push(Hv(a, c, p, q, 9, e))
        }
        return {
            entries: g,
            ia: h
        }
    }

    function Cv(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = Ne(b, a.j.M());
                e && "visible" !== e.overflow && ("auto" !== e.overflowY && "scroll" !== e.overflowY && c.bottom > f.bottom + 2 ? d.push(Hv(a, c, b, f, 5, 1)) : (e = "auto" === e.overflowX || "scroll" === e.overflowX, !e && c.left < f.left - 2 ? d.push(Hv(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(Hv(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function Dv(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++, e = Ef(e, b[g]), e)); g++);
            e && (c = 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function Ev(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function Hv(a, b, c, d, e, f, g) {
        const h = {
            element: c,
            elementRect: d,
            overlapType: e,
            overlapDetectionPoint: f
        };
        if (Da(a.A, e) && Da(a.l, f)) {
            b = new Af(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = Lv(a, c)) && Cf(b, a)) c = 4;
            else {
                a = Mv(c, d);
                if (Ic) {
                    e = dg(c, "paddingLeft");
                    f = dg(c, "paddingRight");
                    var k = dg(c, "paddingTop"),
                        l = dg(c, "paddingBottom");
                    e = new Af(k, f, l, e)
                } else e = Xf(c, "paddingLeft"), f = Xf(c, "paddingRight"), k = Xf(c, "paddingTop"), l = Xf(c, "paddingBottom"), e = new Af(parseFloat(k), parseFloat(f), parseFloat(l), parseFloat(e));
                Cf(b, new Af(a.top +
                    e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = Mv(c, d), c = Cf(b, c) ? 2 : 1)
            }
            h.overlapDepth = c
        }
        g && (h.suspectAncestor = g);
        return h
    }

    function Iv(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.j.M();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = Ne(h, c);
            if (g) {
                if ("fixed" === g.position) return {
                    suspectAncestor: h,
                    ra: 1
                };
                if ("sticky" === g.position && a.j.contains(h.parentElement, d)) return {
                    suspectAncestor: h,
                    ra: 2
                };
                if ("absolute" === g.position) return {
                    suspectAncestor: h,
                    ra: 3
                };
                if ("none" !== g.cssFloat) {
                    g = h === e[0];
                    const k = Nv(a, e.slice(0, f), h);
                    if (g || k) return {
                        suspectAncestor: h,
                        ra: 4
                    }
                }
            }
        }
        return (a = Nv(a, e, b)) ? {
                suspectAncestor: a,
                ra: 5
            } :
            null
    }

    function Nv(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.j.contains(f, c)) continue;
            const g = f.getBoundingClientRect();
            if (!g) continue;
            const h = Ne(f, a.j.M());
            if (h && d.bottom > g.bottom + 2 && "visible" === h.overflowY) return f
        }
        return null
    }

    function Lv(a, b) {
        var c = a.j.j;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return 0 === a.width || 0 === a.height ? null : new Af(a.top, a.right, a.bottom, a.left)
    }

    function Mv(a, b) {
        if (!Ic || 9 <= Number(Wc)) {
            var c = Xf(a, "borderLeftWidth");
            d = Xf(a, "borderRightWidth");
            e = Xf(a, "borderTopWidth");
            a = Xf(a, "borderBottomWidth");
            c = new Af(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        } else {
            c = fg(a, "borderLeft");
            var d = fg(a, "borderRight"),
                e = fg(a, "borderTop");
            a = fg(a, "borderBottom");
            c = new Af(e, d, a, c)
        }
        return new Af(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class Ov {
        constructor(a, b = Pv) {
            this.j = pe(a);
            this.A = [5, 8, 9];
            this.B = [3, 4];
            this.l = b
        }
    }
    const Jv = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        Kv = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        };
    ya(Se({
        Gf: 1,
        Hf: 2,
        ih: 3,
        jh: 4,
        lh: 5,
        Cf: 6,
        Df: 7,
        Ff: 8,
        Bg: 9,
        kh: 10,
        Ef: 11,
        hh: 12,
        Bf: 13
    }), a => !Da([1, 2], a));
    Se({
        Te: 1,
        Cg: 2,
        ef: 3,
        mh: 4
    });
    const Pv = Se({
            Ue: 1,
            qh: 2,
            pg: 3,
            Ug: 4
        }),
        Gv = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function Qv(a, b) {
        Array.isArray(b) || (b = [b]);
        b = za(b, function(c) {
            return "string" === typeof c ? c : c.Kb + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        Uf(a, "transition", b.join(","))
    }
    var Rv = Oa(function() {
        if (Ic) return Tc("10.0");
        var a = ve(document, "DIV"),
            b = Mc ? "-webkit" : Lc ? "-moz" : Ic ? "-ms" : Hc ? "-o" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = {
            style: c
        };
        if (!mc.test("div")) throw Error("");
        if ("DIV" in oc) throw Error("");
        c = null;
        var d = "";
        if (b)
            for (l in b)
                if (Object.prototype.hasOwnProperty.call(b, l)) {
                    if (!mc.test(l)) throw Error("");
                    var e = b[l];
                    if (null != e) {
                        var f = l;
                        var g = e;
                        if (g instanceof db) g = gb(g);
                        else if ("style" == f.toLowerCase()) {
                            e = void 0;
                            if (!ea(g)) throw Error("");
                            if (!(g instanceof Ob)) {
                                var h = "";
                                for (e in g)
                                    if (Object.prototype.hasOwnProperty.call(g, e)) {
                                        if (!/^[-_a-zA-Z0-9]+$/.test(e)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + e);
                                        var k = g[e];
                                        null != k && (k = Array.isArray(k) ? za(k, Qb).join(" ") : Qb(k), h += e + ":" + k + ";")
                                    }
                                g = h ? new Ob(h, Nb) : Pb
                            }
                            g = g instanceof Ob && g.constructor === Ob ? g.l : "type_error:SafeStyle"
                        } else {
                            if (/^on/i.test(f)) throw Error("");
                            if (f.toLowerCase() in nc)
                                if (g instanceof jb) g = mb(g).toString();
                                else if (g instanceof Eb) g = Fb(g);
                            else if ("string" === typeof g) g =
                                (Kb(g) || Mb).j();
                            else throw Error("");
                        }
                        g.ga && (g = g.j());
                        f = f + '="' + tb(String(g)) + '"';
                        d += " " + f
                    }
                }
        var l = "<div" + d;
        d = void 0;
        null == d ? d = [] : Array.isArray(d) || (d = [d]);
        !0 === $a.div ? l += ">" : (c = rc(d), l += ">" + jc(c).toString() + "</div>", c = c.l());
        (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? c = 0 : c = null);
        b = lc(l, c);
        uc(a, b);
        a = a.firstChild;
        b = a.style[Bc("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[Vf(a, "transition")] || "")
    });

    function Sv(a, b, c) {
        0 > a.l[b].indexOf(c) && (a.l[b] += c)
    }

    function Tv(a, b) {
        0 <= a.j.indexOf(b) || (a.j = b + a.j)
    }

    function Uv(a, b) {
        0 > a.A.indexOf(b) && (a.A = b + a.A)
    }

    function Vv(a, b, c, d) {
        return "" != a.A || b ? null : "" == a.j.replace(Wv, "") ? null != c && a.l[0] || null != d && a.l[1] ? !1 : !0 : !1
    }

    function Xv(a) {
        var b = Vv(a, "", null, 0);
        if (null === b) return "XS";
        b = b ? "C" : "N";
        a = a.j;
        return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S"
    }
    var Yv = class {
        constructor(a, b) {
            this.l = ["", ""];
            this.j = a || "";
            this.A = b || ""
        }
        toString() {
            return [this.l[0], this.l[1], this.j, this.A].join("|")
        }
    };

    function Zv(a) {
        let b = a.X;
        a.J = function() {};
        $v(a, a.I, b);
        let c = a.I.parentElement;
        if (!c) return a.j;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : Ne(c, b)
            } catch (g) {
                Uv(a.j, "c")
            }
            const f = aw(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.W = !0);
            if (d && !f && bw(e)) {
                Tv(a.j, "l");
                a.K = c;
                break
            }
            d = d && f;
            if (e && cw(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.Oa) break;
                try {
                    if (c = b.frameElement, b = b.parent, !Ge(b)) {
                        Tv(a.j, "c");
                        break
                    }
                } catch (g) {
                    Tv(a.j,
                        "c");
                    break
                }
            }
        }
        a.H && a.B && dw(a);
        return a.j
    }

    function ew(a) {
        function b() {
            fw(c, f, g);
            if (h && !k && !g) {
                const l = function(n) {
                    for (let m = 0; m < n.length; m++) Uf(h, n[m], "0px")
                };
                l(gw);
                l(hw)
            }
        }
        const c = a.I;
        c.style.overflow = a.Na ? "visible" : "hidden";
        a.H && (a.K ? (Qv(c, iw), Qv(a.K, iw)) : Qv(c, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== a.N && (c.style.opacity = a.N);
        const d = null != a.F && null != a.A && (a.na || a.A > a.F) ? a.A : null,
            e = null != a.D && null != a.l && (a.na || a.l > a.D) ? a.l : null;
        if (a.L) {
            const l = a.L.length;
            for (let n = 0; n < l; n++) fw(a.L[n], d, e)
        }
        const f = a.A,
            g = a.l,
            h = a.K,
            k = a.W;
        a.H ? r.setTimeout(b, 1E3) : b()
    }

    function jw(a) {
        if (a.B && !a.ha || null == a.A && null == a.l && null == a.N && a.B) return a.j;
        var b = a.B;
        a.B = !1;
        Zv(a);
        a.B = b;
        if (!b || null != a.da && !Vv(a.j, a.da, a.A, a.l)) return a.j;
        0 <= a.j.j.indexOf("n") && (a.F = null, a.D = null);
        if (null == a.F && null !== a.A || null == a.D && null !== a.l) a.H = !1;
        (0 == a.A || 0 == a.l) && 0 <= a.j.j.indexOf("l") && (a.A = 0, a.l = 0);
        b = a.j;
        b.l[0] = "";
        b.l[1] = "";
        b.j = "";
        b.A = "";
        ew(a);
        return Zv(a)
    }

    function cw(a, b) {
        let c = !1;
        "none" == b.display && (Tv(a.j, "n"), a.B && (c = !0));
        "hidden" != b.visibility && "collapse" != b.visibility || Tv(a.j, "v");
        "hidden" == b.overflow && Tv(a.j, "o");
        "absolute" == b.position ? (Tv(a.j, "a"), c = !0) : "fixed" == b.position && (Tv(a.j, "f"), c = !0);
        return c
    }

    function $v(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const g = b.parentElement.childNodes;
        for (let k = 0; k < g.length; k++) {
            var h = g[k];
            h == b ? e = !0 : (h = kw(a, h, c), d |= h, e && (f |= h))
        }
        f & 1 && (d & 2 && Sv(a.j, 0, "o"), d & 4 && Sv(a.j, 1, "o"));
        return !(d & 1)
    }

    function aw(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (A) {
            Uv(a.j, "s")
        }
        var f = c.getAttribute("width"),
            g = Xe(f),
            h = c.getAttribute("height"),
            k = Xe(h),
            l = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        const n = $v(a, c, b);
        var m = d && d.width,
            p = d && d.height,
            q = e && e.width,
            v = e && e.height,
            u = Ze(m) == a.F && Ze(p) == a.D;
        m = u ? m : q;
        v = u ? p : v;
        q = Ze(m);
        u = Ze(v);
        g = null !== a.F && (null !== q && a.F >= q || null !== g && a.F >= g);
        u = null !== a.D && (null !== u && a.D >= u || null !== k && a.D >= k);
        k = !n && bw(d);
        u = n || u || k || !(f || m || d && (!lw(String(d.minWidth)) || !mw(String(d.maxWidth))));
        l = n || g || k || l || !(h || v || d && (!lw(String(d.minHeight)) || !mw(String(d.maxHeight))));
        nw(a, 0, u, c, "width", f, a.F, a.A);
        ow(a, 0, "d", u, e, d, "width", m, a.F, a.A);
        ow(a, 0, "m", u, e, d, "minWidth", e && e.minWidth, a.F, a.A);
        ow(a, 0, "M", u, e, d, "maxWidth", e && e.maxWidth, a.F, a.A);
        if (a.Pa) {
            c = /^html|body$/i.test(c.nodeName);
            p = Ze(p);
            h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1;
            (f = null != a.l && d && p && Math.round(p) !== a.l) && !(f = !h) && (f = p, f = (V(kj) || b.location && "#gffwroe2ettq" == b.location.hash) && Math.round(f) < .8 * Math.round(b.innerHeight));
            f = f && "100%" !== d.minHeight;
            if (c = a.B && !c && f) c = !(a.Ma && d && (V(jj) || b.location && "#gffwroe2etoq" == b.location.hash) && Math.round(Ze(d.minHeight)) === Math.round(b.innerHeight));
            c && (e.setProperty("height", "auto", "important"), d && !lw(String(d.minHeight)) && e.setProperty("min-height", "0px", "important"), d && !mw(String(d.maxHeight)) && a.l && Math.round(p) < a.l && e.setProperty("max-height", "none", "important"))
        } else nw(a, 1, l, c, "height", h, a.D, a.l), ow(a, 1, "d", l, e, d, "height", v, a.D, a.l), ow(a, 1, "m", l, e, d, "minHeight", e && e.minHeight,
            a.D, a.l), ow(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.D, a.l);
        return n
    }

    function dw(a) {
        function b() {
            if (0 < c) {
                var l = Ne(e, d) || {};
                const n = Ze(l.width);
                l = Ze(l.height);
                null !== n && null !== f && h && h(0, f - n);
                null !== l && null !== g && h && h(1, g - l);
                --c
            } else r.clearInterval(k), h && (h(0, 0), h(1, 0))
        }
        let c = 31.25;
        const d = a.X,
            e = a.I,
            f = a.A,
            g = a.l,
            h = a.J;
        let k;
        r.setTimeout(function() {
            k = r.setInterval(b, 16)
        }, 990)
    }

    function kw(a, b, c) {
        if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
        if (1 == b.nodeType) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = Ne(b, c)
            } catch (e) {}
            if (d) {
                if ("none" == d.display || "fixed" == d.position) return 0;
                if ("absolute" == d.position) {
                    if (!a.C.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility) return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.C.boundingClientRect.left ? 2 : 0) | (c.bottom > a.C.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function nw(a, b, c, d, e, f, g, h) {
        if (null != h) {
            if ("string" == typeof f) {
                if ("100%" == f || !f) return;
                f = Xe(f);
                null == f && (Uv(a.j, "n"), Sv(a.j, b, "d"))
            }
            if (null != f)
                if (c) {
                    if (a.B)
                        if (a.H) {
                            const k = Math.max(f + h - (g || 0), 0),
                                l = a.J;
                            a.J = function(n, m) {
                                n == b && d.setAttribute(e, k - m);
                                l && l(n, m)
                            }
                        } else d.setAttribute(e, h)
                } else Sv(a.j, b, "d")
        }
    }

    function ow(a, b, c, d, e, f, g, h, k, l) {
        if (null != l) {
            f = f && f[g];
            "string" != typeof f || ("m" == c ? lw(f) : mw(f)) || (f = Ze(f), null == f ? Tv(a.j, "p") : null != k && Tv(a.j, f == k ? "E" : "e"));
            if ("string" == typeof h) {
                if ("m" == c ? lw(h) : mw(h)) return;
                h = Ze(h);
                null == h && (Uv(a.j, "p"), Sv(a.j, b, c))
            }
            if (null != h)
                if (d && e) {
                    if (a.B)
                        if (a.H) {
                            const n = Math.max(h + l - (k || 0), 0),
                                m = a.J;
                            a.J = function(p, q) {
                                p == b && (e[g] = n - q + "px");
                                m && m(p, q)
                            }
                        } else e[g] = l + "px"
                } else Sv(a.j, b, c)
        }
    }
    var tw = class {
        constructor(a, b, c, d, e, f, g) {
            this.Oa = a;
            this.L = c;
            this.I = b;
            this.X = (a = this.I.ownerDocument) && (a.defaultView || a.parentWindow);
            this.C = new pw(this.I);
            this.B = g;
            this.ha = qw(this.C, d.Qb, d.height, d.xc);
            this.F = this.B ? this.C.boundingClientRect ? this.C.boundingClientRect.right - this.C.boundingClientRect.left : null : e;
            this.D = this.B ? this.C.boundingClientRect ? this.C.boundingClientRect.bottom - this.C.boundingClientRect.top : null : f;
            this.A = rw(d.width);
            this.l = rw(d.height);
            this.N = this.B ? rw(d.opacity) : null;
            this.da =
                d.check;
            this.H = "animate" == d.Qb && !sw(this.C, this.l, this.aa) && Rv();
            this.Na = !!d.Sb;
            this.j = new Yv;
            sw(this.C, this.l, this.aa) && Tv(this.j, "r");
            e = this.C;
            e.j && e.l >= e.A && Tv(this.j, "b");
            this.K = this.J = null;
            this.W = !1;
            this.na = !!d.Sd;
            this.Pa = !!d.vc;
            this.aa = !!d.xc;
            this.Ma = d.Qa
        }
    };

    function sw(a, b, c) {
        var d;
        (d = a.j) && !(d = !a.B) && (c ? (b = a.l + Math.min(b, rw(a.getHeight())), a = a.j && b >= a.A) : a = a.j && a.l >= a.A, d = a);
        return d
    }
    var pw = class {
        constructor(a) {
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow),
                d;
            if (d = c) d = Ge(c.top) ? c.top : null;
            c = d;
            this.j = !!c;
            this.boundingClientRect = null;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (g) {}
            d = a;
            let e = 0,
                f = this.boundingClientRect;
            for (; d;) try {
                f && (e += f.top);
                const g = d.ownerDocument,
                    h = g && (g.defaultView || g.parentWindow);
                (d = h && h.frameElement) && (f = d.getBoundingClientRect())
            } catch (g) {
                break
            }
            this.l = e;
            c = c || r;
            this.A = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement :
                c.document.body).clientHeight;
            b = b && rk(b);
            this.B = !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.B
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function qw(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return sw(a, c, d)
        }
    }

    function bw(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function uw(a, b, c, d) {
        return jw(new tw(a, b, d, c, null, null, !0))
    }
    var vw = new Yv("s", ""),
        Wv = /[lonvafrbpEe]/g;

    function mw(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function lw(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function fw(a, b, c) {
        null !== b && null !== Xe(a.getAttribute("width")) && a.setAttribute("width", b);
        null !== c && null !== Xe(a.getAttribute("height")) && a.setAttribute("height", c);
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }
    var gw = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        hw = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");
    let ww = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
        xw = gw;
    for (let a = 0; a < xw.length; a++) ww += ", " + xw[a] + " .2s cubic-bezier(.4, 0, 1, 1)";
    xw = hw;
    for (let a = 0; a < xw.length; a++) ww += ", " + xw[a] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
    var iw = ww;

    function rw(a) {
        return "string" === typeof a ? Xe(a) : "number" === typeof a && isFinite(a) ? a : null
    };

    function yw(a, b, c, d, e, f, g, h, k, l) {
        const n = O();
        if (!a.l || !n) return l.err = "2", zw(a, l, null), !1;
        if ("no_rsz" === f) return l.err = "7", zw(a, l, null), !0;
        const m = new pw(a.l);
        if (!m.j) return l.err = "3", zw(a, l, null), !1;
        var p = m.boundingClientRect ? m.boundingClientRect.right - m.boundingClientRect.left : null;
        null != p && (l.w = p);
        p = m.getHeight();
        null != p && (l.h = p);
        if (qw(m, f, d, k)) {
            var q = a.l.ownerDocument.getElementById(a.l.id + "_anchor");
            p = q ? [a.l] : null;
            q = q || a.l;
            const v = V(wj);
            b = uw(n, q, {
                width: c,
                height: d,
                opacity: e,
                check: b,
                Qb: f,
                Sb: g,
                Sd: h,
                vc: v,
                xc: k
            }, p);
            l.r_cui && Ye(l.r_cui.toString()) && M(q, {
                height: (null === d ? 0 : d - 48) + "px",
                top: "24px"
            });
            null != c && (l.nw = c);
            null != d && (l.nh = d);
            l.rsz = b.toString();
            l.abl = Xv(b);
            l.frsz = ("force" === f).toString();
            l.err = "0";
            zw(a, l, m);
            Ba(Qi.V().l(), u => Da([248427477, 248427478], u)) && a.j === n && Fv(new Ov(a.j, void 0), q).then(u => {
                nk(8, [u]);
                return u
            }).then(u => {
                P(Q, "resize-ovlp", {
                    adf: a.A,
                    eid: a.F,
                    io: Number(u.isOverlappingOrOutsideViewport),
                    oa: u.overlappedArea.toFixed(2),
                    qid: l.qid || "",
                    slot: a.H,
                    url: a.I,
                    vp: u.viewportSize.width +
                        "x" + u.viewportSize.height
                }, !0, 1, void 0)
            }).catch(u => {
                P(Q, "resize-ovlp-err", {
                    err: u.message
                }, !0, 1, void 0)
            });
            return !0
        }
        l.err = "1";
        zw(a, l, m);
        return !1
    }

    function Aw(a, b, c) {
        const d = {
            scrl: ui(a.j || O()),
            adk: a.D,
            adf: a.A,
            fmt: a.C
        };
        b && (d.str = sw(b, Xe(c.r_nh), Ye(c.r_cab)), d.ad_y = b.l, d.vph = b.A);
        gg(c, (e, f) => {
            d[f] = e
        });
        return d
    }

    function zw(a, b, c) {
        const d = kv(String(b.gen204_fraction));
        b = Aw(a, c, b);
        b.url = a.j.document.URL;
        P(Q, "resize", b, !0, d, void 0)
    }
    class Bw extends Bi {
        constructor(a, b, c) {
            super(a);
            this.l = b;
            this.D = String(c.google_ad_unit_key || "");
            this.A = String(c.google_ad_dom_fingerprint || "");
            this.C = String(c.google_ad_format || "");
            this.F = Xj(c);
            this.H = String(c.google_ad_slot || "");
            this.I = String(c.google_page_url || "")
        }
        L(a) {
            a["ablate-me"] = (b, c) => {
                ti(c, this.l.contentWindow) && (P(Q, "lgcabl", {}, !0, void 0, void 0), b = wi(b), c = b.clp_btf_only, yw(this, null, null, 0, 0, "animate" === b["collapse-after-close"] ? "animate" : "1" === c ? "safe" : "force", !1, !0, !1, b))
            };
            a["resize-me"] =
                (b, c) => {
                    if (ti(c, this.l.contentWindow)) {
                        b = wi(b);
                        var d = b.r_chk;
                        if (null == d || "" === d) {
                            var e = Xe(b.r_nw),
                                f = Xe(b.r_nh),
                                g = Xe(b.r_no);
                            null != g || 0 !== e && 0 !== f || (g = 0);
                            var h = b.r_str;
                            h = h ? h : null;
                            e = yw(this, d, e, f, g, h, Ye(b.r_ao), Ye(b.r_ifr), Ye(b.r_cab), b);
                            d = {
                                msg_type: "resize-result"
                            };
                            d.r_str = h;
                            d.r_status = e;
                            c = c.source;
                            d.googMsgType = "sth";
                            c.postMessage(JSON.stringify(d), "*");
                            this.l.dataset.googleQueryId || this.l.setAttribute("data-google-query-id", b.qid)
                        }
                    }
                }
        }
        B() {
            super.B();
            this.l = null
        }
    };
    var Cw = {
        ["google_ad_block"]: "ad_block",
        ["google_ad_client"]: "client",
        ["google_ad_output"]: "output",
        ["google_ad_callback"]: "callback",
        ["google_ad_height"]: "h",
        ["google_ad_resize"]: "twa",
        ["google_ad_slot"]: "slotname",
        ["google_ad_unit_key"]: "adk",
        ["google_ad_dom_fingerprint"]: "adf",
        ["google_placement_id"]: "pi",
        ["google_ad_width"]: "w",
        ["google_captcha_token"]: "captok",
        ["google_content_recommendation_columns_num"]: "cr_col",
        ["google_content_recommendation_rows_num"]: "cr_row",
        ["google_ctr_threshold"]: "ctr_t",
        ["google_cust_criteria"]: "cust_params",
        ["gfwrnwer"]: "fwrn",
        ["gfwrnher"]: "fwrnh",
        ["google_image_size"]: "image_size",
        ["google_last_modified_time"]: "lmt",
        ["google_loeid"]: "loeid",
        ["google_max_num_ads"]: "num_ads",
        ["google_max_radlink_len"]: "max_radlink_len",
        ["google_mtl"]: "mtl",
        ["google_native_settings_key"]: "nsk",
        ["google_enable_content_recommendations"]: "ecr",
        ["google_num_radlinks"]: "num_radlinks",
        ["google_num_radlinks_per_unit"]: "num_radlinks_per_unit",
        ["google_pucrd"]: "pucrd",
        ["google_reactive_plaf"]: "plaf",
        ["google_reactive_plat"]: "plat",
        ["google_reactive_fba"]: "fba",
        ["google_reactive_sra_channels"]: "plach",
        ["google_responsive_auto_format"]: "rafmt",
        ["armr"]: "armr",
        ["google_rl_dest_url"]: "rl_dest_url",
        ["google_rl_filtering"]: "rl_filtering",
        ["google_rl_mode"]: "rl_mode",
        ["google_rt"]: "rt",
        ["google_video_play_muted"]: "vpmute",
        ["google_source_type"]: "src_type",
        ["google_restrict_data_processing"]: "rdp",
        ["google_tag_for_child_directed_treatment"]: "tfcd",
        ["google_tag_for_under_age_of_consent"]: "tfua",
        ["google_tag_origin"]: "to",
        ["google_ad_semantic_area"]: "sem",
        ["google_tfs"]: "tfs",
        ["google_package"]: "pwprc",
        ["google_tag_partner"]: "tp",
        ["fra"]: "fpla",
        ["google_ml_rank"]: "mlr",
        ["google_apsail"]: "psa",
        ["google_ad_channel"]: "channel",
        ["google_ad_type"]: "ad_type",
        ["google_ad_format"]: "format",
        ["google_color_bg"]: "color_bg",
        ["google_color_border"]: "color_border",
        ["google_color_link"]: "color_link",
        ["google_color_text"]: "color_text",
        ["google_color_url"]: "color_url",
        ["google_page_url"]: "url",
        ["google_allow_expandable_ads"]: "ea",
        ["google_ad_section"]: "region",
        ["google_cpm"]: "cpm",
        ["google_encoding"]: "oe",
        ["google_safe"]: "adsafe",
        ["google_flash_version"]: "flash",
        ["google_font_face"]: "f",
        ["google_font_size"]: "fs",
        ["google_hints"]: "hints",
        ["google_ad_host"]: "host",
        ["google_ad_host_channel"]: "h_ch",
        ["google_ad_host_tier_id"]: "ht_id",
        ["google_kw_type"]: "kw_type",
        ["google_kw"]: "kw",
        ["google_contents"]: "contents",
        ["google_targeting"]: "targeting",
        ["google_adtest"]: "adtest",
        ["google_alternate_color"]: "alt_color",
        ["google_alternate_ad_url"]: "alternate_ad_url",
        ["google_cust_age"]: "cust_age",
        ["google_cust_ch"]: "cust_ch",
        ["google_cust_gender"]: "cust_gender",
        ["google_cust_interests"]: "cust_interests",
        ["google_cust_job"]: "cust_job",
        ["google_cust_l"]: "cust_l",
        ["google_cust_lh"]: "cust_lh",
        ["google_cust_u_url"]: "cust_u_url",
        ["google_cust_id"]: "cust_id",
        ["google_language"]: "hl",
        ["google_city"]: "gcs",
        ["google_country"]: "gl",
        ["google_region"]: "gr",
        ["google_content_recommendation_ad_positions"]: "ad_pos",
        ["google_content_recommendation_columns_num"]: "cr_col",
        ["google_content_recommendation_rows_num"]: "cr_row",
        ["google_content_recommendation_ui_type"]: "crui",
        ["google_content_recommendation_use_square_imgs"]: "cr_sq_img",
        ["google_color_line"]: "color_line",
        ["google_disable_video_autoplay"]: "disable_video_autoplay",
        ["google_full_width_responsive_allowed"]: "fwr",
        ["google_full_width_responsive"]: "fwrattr",
        ["efwr"]: "efwr",
        ["google_pgb_reactive"]: "pra",
        ["google_resizing_allowed"]: "rs",
        ["google_resizing_height"]: "rh",
        ["google_resizing_width"]: "rw",
        ["rpe"]: "rpe",
        ["google_responsive_formats"]: "resp_fmts",
        ["google_safe_for_responsive_override"]: "sfro",
        ["google_video_doc_id"]: "video_doc_id",
        ["google_video_product_type"]: "video_product_type",
        ["google_webgl_support"]: "wgl"
    };
    let Dw = navigator;
    var Ew = a => {
            let b = 1;
            let c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        Fw = (a, b) => {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return Ew(a.toLowerCase())
        };
    const Gw = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,
        Hw = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/,
        Iw = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;
    const Jw = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    const Kw = /^blogger$/,
        Lw = /^wordpress(.|\s|$)/i,
        Mw = /^joomla!/i,
        Nw = /^drupal/i,
        Ow = /\/wp-content\//,
        Pw = /\/wp-content\/plugins\/advanced-ads/,
        Qw = /\/wp-content\/themes\/genesis/,
        Rw = /\/wp-content\/plugins\/genesis/;
    var Sw = a => {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src");
                if (Pw.test(e)) return 5;
                if (Rw.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href"), Qw.test(e) || Rw.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
                f = f.getAttribute("content");
                if (Kw.test(f)) return 1;
                if (Lw.test(f)) return 2;
                if (Mw.test(f)) return 3;
                if (Nw.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href"), Ow.test(d))) return 2;
        return 0
    };

    function Tw(a) {
        -1 == a.l && (a.l = Aa(a.j, (b, c, d) => c ? b + 2 ** d : b, 0));
        return a.l
    }
    class Uw {
        constructor() {
            this.j = [];
            this.l = -1
        }
        set(a, b = !0) {
            0 <= a && 52 > a && 0 === a % 1 && this.j[a] != b && (this.j[a] = b, this.l = -1)
        }
        get(a) {
            return !!this.j[a]
        }
    };
    var Vw = () => {
        const a = new Uw;
        r.SVGElement && r.document.createElementNS && a.set(0);
        const b = df();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        r.crypto && r.crypto.subtle && a.set(3);
        r.TextDecoder && r.TextEncoder && a.set(4);
        return Tw(a)
    };

    function Ww(a, b, c) {
        const d = a.createElement("link");
        try {
            d.rel = "preload", d.href = b instanceof jb ? mb(b).toString() : b instanceof Eb ? Fb(b) : Fb(Lb(b))
        } catch (e) {
            return
        }
        d.as = "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch (e) {}
    };
    const Xw = /^\.google\.(com?\.)?[a-z]{2,3}$/,
        Yw = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/;
    let Zw = () => r,
        $w = r;
    const ax = a => {
        a = "https://" + `adservice${a}/adsid/integrator.${"js"}`;
        const b = [`domain=${encodeURIComponent(r.location.hostname)}`];
        Y[3] >= oa() && b.push(`adsid=${encodeURIComponent(Y[1])}`);
        return a + "?" + b.join("&")
    };
    let Y, Z;
    const bx = () => {
        $w = Zw();
        Y = $w.googleToken = $w.googleToken || {};
        var a = oa();
        Y[1] && Y[3] > a && 0 < Y[2] || (Y[1] = "", Y[2] = -1, Y[3] = -1, Y[4] = "", Y[6] = "");
        Z = $w.googleIMState = $w.googleIMState || {};
        a = Z[1];
        Xw.test(a) && !Yw.test(a) || (Z[1] = ".google.com");
        Array.isArray(Z[5]) || (Z[5] = []);
        "boolean" !== typeof Z[6] && (Z[6] = !1);
        Array.isArray(Z[7]) || (Z[7] = []);
        "number" !== typeof Z[8] && (Z[8] = 0)
    };
    var cx = a => {
        bx();
        Xw.test(a) && !Yw.test(a) && (Z[1] = a)
    };
    const dx = {
            Db: () => 0 < Z[8],
            Od: () => {
                Z[8]++
            },
            Pd: () => {
                0 < Z[8] && Z[8]--
            },
            Qd: () => {
                Z[8] = 0
            },
            Dh: () => !1,
            ac: () => Z[5],
            Ub: a => {
                try {
                    a()
                } catch (b) {
                    r.setTimeout(() => {
                        throw b;
                    }, 0)
                }
            },
            sc: () => {
                if (!dx.Db()) {
                    var a = r.document,
                        b = e => {
                            e = ax(e);
                            a: {
                                try {
                                    var f = xc();
                                    break a
                                } catch (g) {}
                                f = void 0
                            }
                            Ww(a, e, f);
                            f = a.createElement("script");
                            f.type = "text/javascript";
                            f.onerror = () => r.processGoogleToken({}, 2);
                            e = Sf(e);
                            Gd(f, e);
                            try {
                                (a.head || a.body || a.documentElement).appendChild(f), dx.Od()
                            } catch (g) {}
                        },
                        c = Z[1];
                    b(c);
                    ".google.com" != c && b(".google.com");
                    var d = {
                        ["newToken"]: "FBT"
                    };
                    r.setTimeout(() => r.processGoogleToken(d, 1), 1E3)
                }
            }
        },
        ex = a => {
            bx();
            const b = $w.googleToken[5] || 0;
            a && (0 != b || Y[3] >= oa() ? dx.Ub(a) : (dx.ac().push(a), dx.sc()));
            Y[3] >= oa() && Y[2] >= oa() || dx.sc()
        };
    var gx = a => {
        r.processGoogleToken = r.processGoogleToken || ((b, c) => fx(b, c));
        ex(a)
    };
    const fx = (a = {}, b = 0) => {
        var c = a.newToken || "",
            d = "NT" == c,
            e = parseInt(a.freshLifetimeSecs || "", 10),
            f = parseInt(a.validLifetimeSecs || "", 10);
        const g = a["1p_jar"] || "";
        a = a.pucrd || "";
        bx();
        1 == b ? dx.Qd() : dx.Pd();
        var h = $w.googleToken = $w.googleToken || {},
            k = 0 == b && c && "string" === typeof c && !d && "number" === typeof e && 0 < e && "number" === typeof f && 0 < f && "string" === typeof g;
        d = d && !dx.Db() && (!(Y[3] >= oa()) || "NT" == Y[1]);
        var l = !(Y[3] >= oa()) && 0 != b;
        if (k || d || l) d = oa(), e = d + 1E3 * e, f = d + 1E3 * f, 1E-5 > Math.random() && vf(r, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr" +
            `&err=${b}`), h[5] = b, h[1] = c, h[2] = e, h[3] = f, h[4] = g, h[6] = a, bx();
        if (k || !dx.Db()) {
            b = dx.ac();
            for (c = 0; c < b.length; c++) dx.Ub(b[c]);
            b.length = 0
        }
    };
    const hx = /[+, ]/;
    var kx = (a, b, c) => {
            const d = a.G;
            var e = O().document,
                f = {},
                g = O(),
                h;
            var k = Hk(O(), !1).$;
            var l = Lk(k);
            var n = h = Jk(O(), e, d.google_ad_width, d.google_ad_height);
            l = l.kb;
            var m = O();
            m = m.top == m ? 0 : Ge(m.top) ? 1 : 2;
            let p = 4;
            n || 1 != m ? n || 2 != m ? n && 1 == m ? p = 7 : n && 2 == m && (p = 8) : p = 6 : p = 5;
            l && (p |= 16);
            n = "" + p;
            l = Mk();
            m = !!d.google_page_url;
            f.google_iframing = n;
            0 != l && (f.google_iframing_environment = l);
            if (!m && "ad.yieldmanager.com" == e.domain) {
                for (n = e.URL.substring(e.URL.lastIndexOf("http")); - 1 < n.indexOf("%");) try {
                    n = decodeURIComponent(n)
                } catch (v) {
                    break
                }
                d.google_page_url = n;
                m = !!n
            }
            m ? (f.google_page_url = d.google_page_url, f.google_page_location = (h ? e.referrer : e.URL) || "EMPTY") : (h && Ge(g.top) && e.referrer && g.top.document.referrer === e.referrer ? f.google_page_url = g.top.document.URL : f.google_page_url = h ? e.referrer : e.URL, f.google_page_location = null);
            if (e.URL === f.google_page_url) try {
                var q = Math.round(Date.parse(e.lastModified) / 1E3) || null
            } catch (v) {
                q = null
            } else q = null;
            f.google_last_modified_time = q;
            e = k == k.top ? k.document.referrer : (e = Hf()) && e.referrer || "";
            f.google_referrer_url = e;
            Kk(f, d);
            f =
                d.google_page_location || d.google_page_url;
            "EMPTY" == f && (f = d.google_page_url);
            f ? (f = f.toString(), 0 == f.indexOf("http://") ? f = f.substring(7, f.length) : 0 == f.indexOf("https://") && (f = f.substring(8, f.length)), e = f.indexOf("/"), -1 == e && (e = f.length), f = f.substring(0, e).split("."), e = !1, 3 <= f.length && (e = f[f.length - 3] in Jw), 2 <= f.length && (e = e || f[f.length - 2] in Jw), f = e) : f = !1;
            f = f ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net";
            b = ix(a, c, b);
            c = a.G;
            e = c.google_ad_channel;
            g = "/pagead/ads?";
            "ca-pub-6219811747049371" ===
            c.google_ad_client && jx.test(e) && (g = "/pagead/lopri?");
            c = er(f, g);
            a = hd(a.A, 9) && d.google_debug_params ? d.google_debug_params : "";
            a = lg(b, c + a);
            return d.google_ad_url = a
        },
        lx = a => encodeURIComponent("RS-" + a.google_reactive_sra_index + "-") + "&" + kg({
            ["adk"]: a.google_ad_unit_key,
            ["client"]: a.google_ad_client,
            ["fa"]: a.google_reactive_ad_format
        }),
        mx = a => {
            try {
                if (a.parentNode) return a.parentNode
            } catch (c) {
                return null
            }
            if (9 === a.nodeType) a: {
                try {
                    const c = ue(a);
                    if (c) {
                        const d = c.frameElement;
                        if (d && Ge(c.parent)) {
                            var b = d;
                            break a
                        }
                    }
                } catch (c) {}
                b =
                null
            }
            else b = null;
            return b
        },
        nx = (a, b) => {
            b.eid = Xj(a.pubWin);
            const c = a.G.google_loeid;
            "string" === typeof c && (a.l |= 4096, b.loeid = c)
        },
        ox = (a, b) => {
            a = (a = yg(a.pubWin)) && a.document ? bk(a.document, a) : new ne(-12245933, -12245933);
            b.scr_x = Math.round(a.x);
            b.scr_y = Math.round(a.y)
        };
    const px = a => {
        try {
            const b = r.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch (b) {}
        return ""
    };
    var qx = a => {
        const b = Mg();
        b && (a.debug_experiment_id = b);
        a.creatives = px(/\b(?:creatives)=([\d,]+)/);
        a.adgroups = px(/\b(?:adgroups)=([\d,]+)/);
        a.adgroups && (a.adtest = "on", a.disable_budget_throttling = !0, a.use_budget_filtering = !1, a.retrieve_only = !0, a.disable_fcap = !0)
    };

    function rx(a, b, c, d) {
        const e = a.G;
        var f = a.pubWin,
            g = a.j,
            h = Ik();
        c.ref = e.google_referrer_url;
        c.loc = e.google_page_location;
        var k;
        (k = Hf(f)) && ea(k.data) && "string" === typeof k.data.type ? (k = k.data.type.toLowerCase(), k = "doubleclick" == k || "adsense" == k ? null : k) : k = null;
        k && (c.apn = k.substr(0, 10));
        h = 0 < Tj(Wi) && a.Ca ? {
            url: a.Ca,
            kb: !0
        } : Lk(h);
        c.url || c.loc || !h.url || (c.url = h.url, h.kb || (c.usrc = 1));
        k = e.google_trust_token_additional_signing_data || {};
        k.url = c.url;
        e.google_trust_token_additional_signing_data = k;
        h.url != (c.loc || c.url) &&
            (c.top = h.url);
        Mu && Hu(Mu) ? h = Mu : (h = Ik(), k = h.google_jobrunner, h = Iu(k) ? Mu = k : h.google_jobrunner = Mu = new Ku(h));
        (h = hg(h.tc) ? h.tc() : null) && (c.jtc = h);
        0 <= a.H && (c.eae = a.H);
        d = g ? Ru(d, g) : null;
        (d = tr(e, g, d)) && (c.fc = d);
        if (!xg(e)) {
            d = a.pubWin.document;
            h = "";
            if (d.documentMode && (k = De(new qe(d), "IFRAME"), k.frameBorder = "0", k.style.height = 0, k.style.width = 0, k.style.position = "absolute", d.body)) {
                d.body.appendChild(k);
                try {
                    var l = k.contentWindow.document;
                    l.open();
                    l.write(jc(sc));
                    l.close();
                    h += l.documentMode
                } catch (W) {}
                d.body.removeChild(k)
            }
            c.docm =
                h
        }
        let n, m, p, q, v, u, A, D, F, I;
        try {
            n = f.screenX, m = f.screenY
        } catch (W) {}
        try {
            p = f.outerWidth, q = f.outerHeight
        } catch (W) {}
        try {
            v = f.innerWidth, u = f.innerHeight
        } catch (W) {}
        try {
            A = f.screenLeft, D = f.screenTop
        } catch (W) {}
        try {
            v = f.innerWidth, u = f.innerHeight
        } catch (W) {}
        try {
            F = f.screen.availWidth, I = f.screen.availTop
        } catch (W) {}
        c.brdim = [A, D, n, m, F, I, p, q, v, u].join();
        l = 0;
        void 0 === r.postMessage && (l |= 1);
        0 < l && (c.osd = l);
        c.vis = rk(f.document);
        b && (b = Ok(e) ? vw : jw(new tw(f, b, null, {
                width: 0,
                height: 0
            }, e.google_ad_width, e.google_ad_height, !1)),
            c.rsz = b.toString(), c.abl = Xv(b));
        if (!Ok(e) && (b = zg(e))) {
            f = 0;
            a: {
                try {
                    {
                        var B = e.google_async_iframe_id;
                        const W = O().document;
                        if (B) var C = W.getElementById(B);
                        else {
                            var da = W.getElementsByTagName("script"),
                                cb = da[da.length - 1];
                            C = cb && cb.parentNode || null
                        }
                    }
                    if (B = C) {
                        C = [];
                        da = 0;
                        for (var xa = Date.now(); 100 >= ++da && 50 > Date.now() - xa && (B = mx(B));) 1 === B.nodeType && C.push(B);
                        var T = C;
                        b: {
                            for (xa = 0; xa < T.length; xa++) {
                                c: {
                                    var ia = T[xa];
                                    try {
                                        if (ia.parentNode && 0 < ia.offsetWidth && 0 < ia.offsetHeight && ia.style && "none" !== ia.style.display && "hidden" !==
                                            ia.style.visibility && (!ia.style.opacity || 0 !== Number(ia.style.opacity))) {
                                            const W = ia.getBoundingClientRect();
                                            var Ie = 0 < W.right && 0 < W.bottom;
                                            break c
                                        }
                                    } catch (W) {}
                                    Ie = !1
                                }
                                if (!Ie) {
                                    var Je = !1;
                                    break b
                                }
                            }
                            Je = !0
                        }
                        if (Je) {
                            b: {
                                const W = Date.now();Je = /^html|body$/i;Ie = /^fixed/i;
                                for (ia = 0; ia < T.length && 50 > Date.now() - W; ia++) {
                                    const Ke = T[ia];
                                    if (!Je.test(Ke.tagName) && Ie.test(Ke.style.position || Yf(Ke, "position"))) {
                                        var td = Ke;
                                        break b
                                    }
                                }
                                td = null
                            }
                            break a
                        }
                    }
                } catch (W) {}
                td = null
            }
            td && td.offsetWidth * td.offsetHeight <= 4 * b.width * b.height && (f = 1);
            c.pfx = f
        }
        a: {
            if (.05 > Math.random() && g) try {
                const W = g.document.getElementsByTagName("head")[0];
                var gn = W ? Sw(W) : 0;
                break a
            } catch (W) {}
            gn = 0
        }
        g = gn;
        0 !== g && (c.cms = g);
        e.google_lrv !== H(a.A, 2) && (c.alvm = e.google_lrv || "none")
    }
    var sx = (a, b) => {
            let c = 0;
            a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : He(() => {
                c++;
                return !1
            }, !0, !0, a);
            c && (b.nhd = c)
        },
        tx = (a, b) => {
            const c = X(b, 8, {});
            b = X(b, 9, {});
            const d = a.google_ad_section,
                e = a.google_ad_format;
            a = a.google_ad_slot;
            e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
        },
        ux = (a, b, c) => {
            const d = a.G;
            var e = a.G;
            b.dt = Pu;
            e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
            e = O();
            a: {
                var f = O();
                try {
                    var g = f.performance;
                    if (g && g.timing && g.now) {
                        var h = g.timing.navigationStart +
                            Math.round(g.now()) - g.timing.domLoading;
                        break a
                    }
                } catch (C) {}
                h = null
            }(e = h ? gv(h, e.Date.now() - Pu, 1E6) : null) && (b.bdt = e);
            b.idt = gv(a.N, Pu);
            e = a.G;
            b.shv = H(a.A, 2);
            b.cbv = H(a.A, 3);
            "sa" == e.google_loader_used ? b.ptt = 5 : "aa" == e.google_loader_used && (b.ptt = 9);
            /^\w{1,3}$/.test(e.google_loader_used) && (b.saldr = e.google_loader_used);
            if (e = Hf(a.pubWin)) {
                b.is_amp = 1;
                h = e || Hf();
                b.amp_v = h && h.mode ? +h.mode.version || null : null;
                if ((e = e || Hf()) && e.container) {
                    e = e.container.split(",");
                    h = [];
                    for (g = 0; g < e.length; g++) h.push(Gf[e[g]] || "x");
                    e =
                        h.join()
                } else e = null;
                e && (b.act = e)
            }
            O() == window.top && (b.abxe = 1);
            if ("_gfp_a_" in a.pubWin) {
                e = a.pubWin._gfp_a_;
                if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
                e && (e = Vu(new Wu(a.pubWin), c)) && (b.cookie = e)
            }
            e = ru();
            g = X(e, 8, {});
            h = d.google_ad_section;
            g[h] && (b.prev_fmts = g[h]);
            g = X(e, 9, {});
            g[h] && (b.prev_slotnames = g[h].toLowerCase());
            tx(d, e);
            h = X(e, 15, 0);
            0 < h && (b.nras = String(h));
            b.correlator = X(e, 7, qu());
            V(Cj) && (b.rume = 1);
            if (d.google_ad_channel) {
                h = X(e, 10, {});
                g = "";
                f = d.google_ad_channel.split(hx);
                for (var k = 0; k < f.length; k++) {
                    var l = f[k];
                    h[l] ? g += l + "+" : h[l] = !0
                }
                b.pv_ch = g
            }
            if (d.google_ad_host_channel) {
                g = X(e, 11, []);
                f = d.google_ad_host_channel.split("|");
                e = -1;
                h = [];
                for (k = 0; k < f.length; k++) {
                    l = f[k].split(hx);
                    g[k] || (g[k] = {});
                    var n = "";
                    for (var m = 0; m < l.length; m++) {
                        var p = l[m];
                        "" !== p && (g[k][p] ? n += "+" + p : g[k][p] = !0)
                    }
                    n = n.slice(1);
                    h[k] = n;
                    "" !== n && (e = k)
                }
                g = "";
                if (-1 < e) {
                    for (f = 0; f < e; f++) g += h[f] + "|";
                    g += h[e]
                }
                b.pv_h_ch = g
            }
            b.frm = d.google_iframing;
            b.ife = d.google_iframing_environment;
            e = d.google_ad_client;
            try {
                var q = Ik(),
                    v = q.google_prev_clients;
                v || (v = q.google_prev_clients = {});
                if (e in v) var u = 1;
                else v[e] = !0, u = 2
            } catch (C) {
                u = 0
            }
            b.pv = u;
            q = a.pubWin.document;
            u = a.G;
            e = Tu(c, a.pubWin) || "";
            c = q.domain;
            f = a.pubWin.screen;
            k = q.referrer;
            n = ng();
            if (Hf()) var A = O().gaGlobal || {};
            else {
                h = Math.round((new Date).getTime() / 1E3);
                g = u.google_analytics_domain_name;
                c = "undefined" == typeof g ? Fw("auto", c) : Fw(g, c);
                m = -1 < e.indexOf("__utma=" + c + ".");
                l = -1 < e.indexOf("__utmb=" + c);
                (q = (Kf() || O()).gaGlobal) || (q = {}, (Kf() || O()).gaGlobal = q);
                v = !1;
                if (m) {
                    var D = e.split("__utma=" + c + ".")[1].split(";")[0].split(".");
                    l ? q.sid = D[3] : q.sid || (q.sid = h + "");
                    q.vid = D[0] + "." + D[1];
                    q.from_cookie = !0
                } else {
                    q.sid || (q.sid = h + "");
                    if (!q.vid) {
                        v = !0;
                        l = Math.round(2147483647 * Math.random());
                        m = Dw.appName;
                        p = Dw.version;
                        var F = Dw.language ? Dw.language : Dw.browserLanguage,
                            I = Dw.platform,
                            B = Dw.userAgent;
                        try {
                            D = Dw.javaEnabled()
                        } catch (C) {
                            D = !1
                        }
                        D = [m, p, F, I, B, D ? 1 : 0].join("");
                        f ? D += f.width + "x" + f.height + f.colorDepth : r.java && r.java.awt && (f = r.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), D += f.screen.width + "x" + f.screen.height);
                        D = D + e + (k || "");
                        for (f = D.length; 0 <
                            n;) D += n-- ^ f++;
                        q.vid = (l ^ Ew(D) & 2147483647) + "." + h
                    }
                    q.from_cookie = !1
                }
                if (!q.cid) {
                    b: for (h = g, D = 999, h && (h = 0 == h.indexOf(".") ? h.substr(1) : h, D = h.split(".").length), h = 999, e = e.split(";"), g = 0; g < e.length; g++)
                        if (f = Gw.exec(e[g]) || Hw.exec(e[g]) || Iw.exec(e[g])) {
                            k = f[1] || 0;
                            if (k == D) {
                                A = f[2];
                                break b
                            }
                            k < h && (h = k, A = f[2])
                        }v && A && -1 != A.search(/^\d+\.\d+$/) ? (q.vid = A, q.from_cookie = !0) : A != q.vid && (q.cid = A)
                }
                q.dh = c;
                q.hid || (q.hid = Math.round(2147483647 * Math.random()));
                A = q
            }
            b.ga_vid = A.vid;
            b.ga_sid = A.sid;
            b.ga_hid = A.hid;
            b.ga_fc = A.from_cookie;
            b.ga_cid = A.cid;
            b.ga_wpids = u.google_analytics_uacct;
            sx(a.pubWin, b);
            (a = d.google_ad_layout) && 0 <= pu[a] && (b.rplot = pu[a])
        };
    const vx = (a, b) => {
        a = a.J;
        var c;
        (c = null == a ? 0 : G(a, 6)) || (c = ru(), c = X(c, 26, void 0));
        c && (b.npa = 1);
        a && (E(a, 3) && (b.gdpr = G(a, 3) ? "1" : "0"), (c = y(a, 1)) && (b.us_privacy = c), (c = y(a, 2)) && (b.gdpr_consent = c), (c = y(a, 4)) && (b.addtl_consent = c), (a = y(a, 7)) && (b.tcfe = a))
    };
    var wx = (a, b) => {
            const c = a.G;
            vx(a, b);
            gg(Cw, (d, e) => {
                b[d] = c[e]
            });
            Ok(c) && (a = Nk(c), b.fa = a);
            b.pi || null == c.google_ad_slot || (a = ao(c), null != a.j && (a = Xl(a.j.value), b.pi = a))
        },
        xx = (a, b) => {
            var c = Jf() || dk(a.pubWin.top);
            c && (b.biw = c.width, b.bih = c.height);
            c = a.pubWin;
            c.top != c && (a = dk(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
        },
        yx = (a, b) => {
            var c = a.pubWin;
            null !== c && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = dk(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = Te(a.join(""))) : a = 0;
            0 !== a && (b.ifk = a)
        },
        zx = (a, b) => {
            (a = xu()[a.G.google_ad_client]) && (b.psts = a.join())
        },
        Ax = (a, b, c) => {
            a = Ru(c, a.pubWin);
            a: {
                c = -1;
                try {
                    a && (c = parseInt(a.getItem("goog_pem_mod"), 10))
                } catch (d) {
                    a = null;
                    break a
                }
                a = 0 <= c && 1E3 > c ? c : null
            }
            b.pem = a
        },
        Bx = (a, b) => {
            (a = a.pubWin.google_user_agent_client_hint) && (b.uach = $c(a))
        },
        Cx = (a, b) => {
            (a = a.pubWin.google_trust_token_operation_status) && 0 < a.length && (b.tt_state = $c(JSON.stringify(a)))
        },
        Dx = (a, b) => {
            if (a = a.pubWin.google_floc) b.floc_id = a.id, b.floc_ver = a.version
        },
        Ex = (a, b) => {
            try {
                const d = a.pubWin && a.pubWin.external &&
                    a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
                if (d) {
                    var c = parseInt(JSON.parse(d("os-mode"))["os-mode"], 10);
                    0 <= c && (b.wsm = c + 1)
                }
            } catch (d) {}
        },
        ix = (a, b, c) => {
            const d = {};
            wx(a, d);
            bx();
            d.adsid = Y[1];
            bx();
            d.pucrd = Y[6];
            Bx(a, d);
            Cx(a, d);
            Dx(a, d);
            ux(a, d, c);
            qg(d);
            b && hh(889, () => {
                if (V(yj) && null == a.j) d.adx = -12245933, d.ady = -12245933;
                else {
                    var e = ek(a.j, b);
                    d.adx && -12245933 != d.adx && d.ady && -12245933 != d.ady || (d.adx = Math.round(e.x), d.ady = Math.round(e.y));
                    ck(b) || (d.adx = -12245933, d.ady = -12245933, a.l |= 32768)
                }
            });
            xx(a, d);
            yx(a, d);
            ox(a, d);
            nx(a, d);
            a.I && (d.oid = a.I);
            zx(a, d);
            d.pvsid = qf(a.pubWin, dh);
            Ax(a, d, c);
            Ex(a, d);
            a.K && (d.scar = a.K);
            rx(a, b, d, c);
            d.fu = a.l;
            d.bc = Vw();
            bx();
            d.jar = Y[4];
            hd(a.A, 9) && qx(d);
            lk() && (d.atl = !0);
            d.rc = a.G.rss;
            return d
        };
    const jx = /YtLoPri/;
    var Fx = class extends w {
        constructor() {
            super();
            x(this, void 0, null, null)
        }
    };
    class Gx {
        constructor(a, b, c, d) {
            this.j = a;
            this.A = b;
            this.C = c;
            this.l = !1;
            this.B = d
        }
    };
    Va(jp);
    Va(kp);
    var Hx = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        Ix = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        Jx = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        };
    const Kx = a => {
            a = (a = (new Qu(a)).get("FCCDCF", "")) ? a : null;
            try {
                return a ? nd(Hx, a) : null
            } catch (b) {
                return null
            }
        },
        Lx = a => (a = Kx(a)) ? J(a, Ix, 4) : null;

    function Mx(a) {
        a.__uspapi || a.frames.__uspapiLocator || (a = new Nx(a), Ox(a))
    }

    function Ox(a) {
        !a.A || a.j.__uspapi || a.j.frames.__uspapiLocator || (a.j.__uspapiManager = "fc", lp(a.j, "__uspapiLocator"), pa("__uspapi", (...b) => Px(a, ...b)))
    }

    function Px(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.A
        }, !0)
    }
    class Nx {
        constructor(a) {
            this.j = a;
            this.l = a.document;
            this.A = (a = (a = Kx(this.l)) ? J(a, Jx, 5) || null : null) ? y(a, 2) : null;
            (a = Lx(this.l)) && E(a, 1) && y(a, 1);
            (a = Lx(this.l)) && E(a, 2) && y(a, 2)
        }
    };

    function Qx(a, b, c, d) {
        var e, f, g, h, k, l, n;
        const m = new cq;
        let p = "";
        const q = v => {
            try {
                const u = "object" === typeof v.data ? v.data : JSON.parse(v.data);
                p === u.paw_id && (Kd(a, "message", q), m.j(d(u)))
            } catch (u) {}
        };
        return "function" === typeof(null === (e = a.gmaSdk) || void 0 === e ? void 0 : e.getQueryInfo) ? (L(a, "message", q), p = c(a.gmaSdk), m.promise) : "function" === typeof(null === (h = null === (g = null === (f = a.webkit) || void 0 === f ? void 0 : f.messageHandlers) || void 0 === g ? void 0 : g.getGmaQueryInfo) || void 0 === h ? void 0 : h.postMessage) || "function" ===
            typeof(null === (n = null === (l = null === (k = a.webkit) || void 0 === k ? void 0 : k.messageHandlers) || void 0 === l ? void 0 : l.getGmaSig) || void 0 === n ? void 0 : n.postMessage) ? (p = String(Math.floor(2147483647 * Qe(a))), L(a, "message", q), b(a.webkit.messageHandlers, p), m.promise) : null
    }

    function Rx(a) {
        return Qx(a, (b, c) => {
            var d;
            return void(null !== (d = b.getGmaQueryInfo) && void 0 !== d ? d : b.getGmaSig).postMessage(c)
        }, b => b.getQueryInfo(), b => b.signal)
    };

    function Sx(a) {
        if (a.j) return a.j;
        a.j = ff(a.l, "__uspapiLocator");
        return a.j
    }

    function Tx(a) {
        var b;
        return "function" === typeof(null === (b = a.l) || void 0 === b ? void 0 : b.__uspapi) || null != Sx(a)
    }

    function Ux(a, b) {
        var c, d;
        if ("function" === typeof(null === (c = a.l) || void 0 === c ? void 0 : c.__uspapi))(null === (d = a.l) || void 0 === d ? void 0 : d.__uspapi)("getUSPData", 1, b);
        else if (Sx(a)) {
            Vx(a);
            const e = ++a.D;
            a.C[e] = b;
            a.j && a.j.postMessage({
                ["__uspapiCall"]: {
                    command: "getUSPData",
                    version: 1,
                    callId: e
                }
            }, "*")
        }
    }

    function Wx(a, b) {
        let c = {};
        if (Tx(a)) {
            var d = Pa(() => b(c));
            Ux(a, (e, f) => {
                f && (c = e);
                d()
            });
            setTimeout(d, 500)
        } else b(c)
    }

    function Vx(a) {
        a.A || (a.A = b => {
            var c;
            try {
                let e = {};
                "string" === typeof b.data ? e = JSON.parse(b.data) : e = b.data;
                var d = e.__uspapiReturn;
                null === (c = a.C) || void 0 === c ? void 0 : c[d.callId](d.returnValue, d.success)
            } catch (e) {}
        }, L(a.l, "message", a.A))
    }
    var Xx = class extends yi {
        constructor(a) {
            super();
            this.l = a;
            this.j = null;
            this.C = {};
            this.D = 0;
            this.A = null
        }
        B() {
            this.C = {};
            this.A && (Kd(this.l, "message", this.A), delete this.A);
            delete this.C;
            delete this.l;
            delete this.j;
            super.B()
        }
    };
    var Yx = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };
    var $x = class extends w {
            constructor(a) {
                super();
                x(this, a, Zx, null)
            }
        },
        Zx = [1, 2];
    var ay = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };
    var by = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };

    function cy(a) {
        a.D || (a.l || (a.j.googlefc ? a.l = a.j : a.l = ff(a.j, "googlefcPresent")), a.D = !0);
        return !!a.l
    }

    function dy(a) {
        a.A || (a.A = b => {
            try {
                const c = nd(by, b.data.__fciReturn);
                (0, a.C[y(c, 1)])(c)
            } catch (c) {}
        }, L(a.j, "message", a.A))
    }

    function ey(a, b, c) {
        if (cy(a))
            if (a.l === a.j) a = a.j.googlefc || (a.j.googlefc = {}), a.__fci = a.__fci || [], a.__fci.push(b, d => {
                c(nd(by, d))
            });
            else {
                dy(a);
                const d = a.F++;
                a.C[d] = c;
                a.l.postMessage({
                    ["__fciCall"]: {
                        command: b,
                        callId: d
                    }
                }, "*")
            }
    }

    function fy(a, b) {
        return new Promise(c => {
            ey(a, b, c)
        })
    }
    var gy = class extends yi {
            constructor(a) {
                super();
                this.j = a;
                this.A = this.l = null;
                this.C = {};
                this.F = 0;
                this.D = !1
            }
        },
        hy = (a, b, c, d) => {
            if (!b) return Promise.resolve(null);
            const e = J(b, Yx, 3);
            b = J(b, ay, 2);
            return e && b && 1 === y(b, 1) && 2 === y(e, 1) ? fy(a, "getM25Consent").then(f => {
                var g = J(f, $x, 4);
                if (g) {
                    if (f = d, c) {
                        const h = y(g, 1);
                        h && h.includes(c) && (f = !1);
                        (g = y(g, 2)) && g.includes(c) && (f = !0)
                    }
                } else f = null;
                return f
            }) : Promise.resolve(null)
        };
    const iy = (a, b) => {
        try {
            var c, d, e = Ud(gd(b, 2, 0)),
                f = H(b, 3);
            a: switch (gd(b, 4, 0)) {
                case 1:
                    var g = "pt";
                    break a;
                case 2:
                    g = "cr";
                    break a;
                default:
                    g = ""
            }
            var h = new Wd(e, f, g),
                k = null !== (d = null === (c = J(b, Td, 5)) || void 0 === c ? void 0 : H(c, 1)) && void 0 !== d ? d : "";
            h.Ga = k;
            h.$ = a;
            Od(new Vd(h))
        } catch (l) {}
    };

    function jy(a, b) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? iy(a, b) : L(a, "load", () => void iy(a, b)))
    };

    function ky(a) {
        var b, c;
        try {
            return (null !== (c = null === (b = a.top) || void 0 === b ? void 0 : b.frames) && void 0 !== c ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    }

    function ly(a) {
        const b = /^https?:\/\/[^/#?]+\/?$/;
        return !!a && !b.test(a)
    }

    function my(a) {
        if (a === a.top || Ge(a.top)) return Promise.resolve({
            status: 4
        });
        const b = ky(a);
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && ly(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new cq;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            "__goog_top_url_resp" === d.data.msgType && c.j({
                Ca: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    var Wh = (function(a) {
        Mf(a, !1, "safeScript is a template literal tag function that only accepts template literals without expressions. For example, safeScript`foo`;");
        var b;
        a = a[0];
        var c = null === (b = vd()) || void 0 === b ? void 0 : b.createScript(a);
        return new xd(null !== c && void 0 !== c ? c : a)
    })
    `onmessage=function(e){var b=e.data.a;if(b>0){var t=performance.now();while(t+b>performance.now());}postMessage(b);};postMessage(-1)`;
    var oy = async (a, b, c) => {
            const d = c.vars,
                e = new Yh(yg(c.pubWin), c.pubWin, d, a, b);
            e.N = Date.now();
            nk(1, [e.G]);
            e.D || ih("noins", {
                info: d.dninfo,
                ifmid: d.google_async_iframe_id
            });
            try {
                await ny(e)
            } catch (f) {
                if (!dh.ca(159, f, void 0, void 0)) throw f;
            }
            hh(639, () => {
                {
                    var f = e.G;
                    const h = e.j;
                    if (h && 1 === f.google_responsive_auto_format && !0 === f.google_full_width_responsive_allowed) {
                        var g;
                        (g = (g = h.document.getElementById(f.google_async_iframe_id)) ? Be(g, "INS", "adsbygoogle") : null) ? (f = new Gu(h, g, f), f.l = r.setInterval(ma(f.F, f), 500),
                            f.F(), f = !0) : f = !1
                    } else f = !1
                }
                return f
            });
            hh(160, () => {
                const f = Ik().google_jobrunner;
                Iu(f) && f.rl()
            });
            hh(898, () => {
                a: {
                    var f = c.pubWin;
                    var g = c.vars;g.hasOwnProperty("adfcb") || (f = Pe() ? null : Math.floor(20 * Qe(f)), g.adfcb = f);g = g.adfcb;
                    if (null !== g) {
                        f = c.pubWin.top;
                        try {
                            if (!f.document.body) {
                                var h = void 0;
                                break a
                            }
                        } catch (p) {
                            h = void 0;
                            break a
                        }
                        h = c.vars.google_ad_client;
                        var k, l, n = null === (l = null === (k = f.location) || void 0 === k ? void 0 : k.hash) || void 0 === l ? void 0 : l.match(/\bgoog_cpmi=([^&]*)/);
                        if (n) {
                            k = decodeURIComponent(n[1]);
                            try {
                                var m =
                                    new ee(JSON.parse(k))
                            } catch (p) {
                                m = null
                            }
                        } else m = null;
                        if (k = m || J(a, ee, 11)) m = f.document.body, m.hasAttribute("data-google-affiliate-annotated") || (m.setAttribute("data-google-affiliate-annotated", "1"), l = f.performance.now(), m = new nh, n = lh(f.document.body.innerText), m.A = n, n >= gd(k, 4, 0) && kh(f, f.document.body, k, h, g, new jh, m), f = f.performance.now() - l, k = H(k, 1), P(Q, "adfil-imp", {
                            wp: h,
                            c: g,
                            e: k,
                            n: m.l,
                            t: m.j.size,
                            w: m.A,
                            x: Math.round(f)
                        }, !0, 1, void 0))
                    }
                    h = void 0
                }
                return h
            })
        },
        ny = a => {
            if (/_sdo/.test(a.G.google_ad_format)) return Promise.resolve();
            var b = ru(),
                c = X(b, 22, !1);
            c || (b.S[uu(22)] = !0);
            c || (Qi.V().j(13), Qi.V().j(11), b = be(a.G), (c = H(a.A, 10)) && b.push(c));
            b = ru();
            (c = X(b, 23, !1)) || (b.S[uu(23)] = !0);
            if (!c) {
                c = J(a.A, Sh, 5) || new Sh;
                b = hd(a.A, 6);
                b = new Gx(a.pubWin, a.G.google_ad_client, c, b);
                c = V(vj);
                b.l = c;
                const e = J(b.C, Rh, 1);
                if (b.l) {
                    c = b.j;
                    if (b.B && !dp(e)) {
                        var d = new Fx;
                        d = z(d, 1, 1)
                    } else d = null;
                    if (d) {
                        d = d.F();
                        try {
                            c.localStorage.setItem("google_auto_fc_cmp_setting", d)
                        } catch (f) {}
                    }
                }
                e && ep(new fp(b.j, new xp(b.j, b.A), e, new Lo(b.j)))
            }
            b = !Hf() && !ac();
            return !b || b && !py(a) ?
                qy(a) : Promise.resolve()
        };
    const ry = (a, b, c) => {
        c = void 0 === c ? !1 : c;
        b = ek(a.j, b);
        const d = Jf() || dk(a.pubWin.top);
        if (!b || -12245933 == b.y || -12245933 == d.width || -12245933 == d.height || !d.height) return 0;
        let e = 0;
        try {
            const f = a.pubWin.top;
            e = bk(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    };

    function py(a) {
        return sy(a) || ty(a)
    }

    function sy(a) {
        const b = a.G;
        if (!b.google_pause_ad_requests) return !1;
        const c = r.setTimeout(() => {
                P(Q, "abg:cmppar", {
                    client: a.G.google_ad_client,
                    url: a.G.google_page_url
                }, !0, void 0, void 0)
            }, 1E4),
            d = R(450, () => {
                b.google_pause_ad_requests = !1;
                r.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                py(a) || qy(a)
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function ty(a) {
        const b = a.pubWin.document,
            c = uy();
        if (0 > c.hidden && 0 > c.visible) return !1;
        const d = a.D,
            e = sk(b);
        if (!d || !e) return !1;
        if (!tk(b)) return vy(a, c.visible, d);
        const f = 3 === rk(b);
        if (ry(a, d) <= c.hidden && !f) return !1;
        let g = R(332, () => {
            !tk(b) && g && (Kd(b, e, g), vy(a, c.visible, d) || qy(a), g = null)
        });
        return L(b, e, g)
    }
    async function wy() {
        if (!bc() && !t("Edge")) {
            var a = Tj(hj),
                b = Tj(Bj);
            if (!(0 >= b)) {
                var c = Vh(),
                    d = new Worker(Ed(c), void 0);
                c = new Promise(f => {
                    d.addEventListener("message", g => {
                        0 <= g.data ? f() : d.postMessage({
                            a
                        })
                    })
                });
                var e = performance.now();
                await Promise.race([c, uf(b, "timeout")]).then(f => {
                    "timeout" === f ? P(Q, "adsense_td_worker_timeout", {
                        wait_ms: a,
                        timeout_ms: b
                    }, !0, void 0, void 0) : P(Q, "adsense_td_worker_time", {
                        wait_ms: Math.round(performance.now() - e),
                        timeout_ms: b
                    }, !0, void 0, void 0)
                })
            }
        }
    }

    function uy() {
        const a = {
            hidden: 0,
            visible: Tj(nj) || 4
        };
        if (!r.IntersectionObserver || V(ij)) a.visible = -1;
        if (Ee()) {
            const b = Tj(mj) || 1;
            a.visible *= b
        }
        return a
    }

    function vy(a, b, c) {
        if (!c || 0 > b) return !1;
        var d = a.G;
        if (!ri(d.google_reactive_ad_format) && (Ok(d) || d.google_reactive_ads_config) || !ck(c) || ry(a, c) <= b) return !1;
        var e = ru();
        const f = X(e, 8, {});
        e = X(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const g = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !g) return !1;
        a.L = new r.IntersectionObserver((h, k) => {
            wa(h, l => {
                0 >= l.intersectionRatio || (k.unobserve(l.target), hh(294, () => {
                    qy(a)
                }))
            })
        }, {
            rootMargin: 100 * b + "%"
        });
        a.L.observe(c);
        return !0
    }
    var qy = async a => {
            hh(326, () => {
                if (1 === pg(a.G)) {
                    var c = V(Qj),
                        d = c || V(Oj),
                        e = O();
                    if (d && e === e.top) {
                        var f = new hk;
                        d = new ik;
                        var g = qf(a.pubWin);
                        jd(f, 1, g, 0);
                        g = Xj(a.pubWin);
                        jd(f, 5, g, "");
                        id(f, 2);
                        kd(d, 1, f);
                        f = new gk;
                        f = jd(f, 10, !0, !1);
                        g = V(Hj);
                        f = jd(f, 8, g, !1);
                        g = V(Ij);
                        f = jd(f, 9, g, !1);
                        g = V(Mj);
                        f = jd(f, 7, g, !1);
                        g = V(Lj);
                        f = jd(f, 13, g, !1);
                        g = V(Nj);
                        f = jd(f, 14, g, !1);
                        kd(d, 2, f);
                        e.google_rum_config = ld(d);
                        c = hd(a.A, 9) && c ? a.F.Md : a.F.Nd;
                        Me(e.document, nb(Ed(c).toString()))
                    } else Ug(ch)
                }
            });
            try {
                await xy(a)
            } catch (c) {
                dh.ca(827, c, void 0, void 0)
            }
            a.G.google_ad_channel =
                yy(a, a.G.google_ad_channel);
            a.G.google_tag_partner = zy(a, a.G.google_tag_partner);
            Ay(a);
            const b = a.G.google_start_time;
            "number" === typeof b && (Pu = b, a.G.google_start_time = null);
            hh(161, () => {
                const c = a.G;
                null == c.google_ad_output && (c.google_ad_output = "html");
                if (null != c.google_ad_client) {
                    var d;
                    (d = String(c.google_ad_client)) ? (d = d.toLowerCase()) && "ca-" != d.substring(0, 3) && (d = "ca-" + d): d = "";
                    c.google_ad_client = d
                }
                null != c.google_ad_slot && (c.google_ad_slot = String(c.google_ad_slot));
                if (null == c.google_flash_version) {
                    try {
                        var e =
                            wg()
                    } catch (f) {
                        e = "0"
                    }
                    c.google_flash_version = e
                }
                c.google_webgl_support = !!N.WebGLRenderingContext;
                c.google_ad_section = c.google_ad_section || c.google_ad_region || "";
                c.google_country = c.google_country || c.google_gl || "";
                e = (new Date).getTime();
                Array.isArray(c.google_color_bg) && (c.google_color_bg = Zh(a, c.google_color_bg, e));
                Array.isArray(c.google_color_text) && (c.google_color_text = Zh(a, c.google_color_text, e));
                Array.isArray(c.google_color_link) && (c.google_color_link = Zh(a, c.google_color_link, e));
                Array.isArray(c.google_color_url) &&
                    (c.google_color_url = Zh(a, c.google_color_url, e));
                Array.isArray(c.google_color_border) && (c.google_color_border = Zh(a, c.google_color_border, e));
                Array.isArray(c.google_color_line) && (c.google_color_line = Zh(a, c.google_color_line, e))
            });
            By(a);
            Ok(a.G) && (wh() && (a.G.google_adtest = a.G.google_adtest || "on"), a.G.google_pgb_reactive = a.G.google_pgb_reactive || 3);
            Cy(a.j);
            return Dy(a)
        },
        By = a => {
            a.j && (rr(a), pr(a.j.location) && Ar(a.j, {
                enable_page_level_ads: {
                    ["pltais"]: !0
                },
                google_ad_client: a.G.google_ad_client
            }))
        },
        yy = (a, b) =>
        (b ? [b] : []).concat(ae(a.G).ad_channels || []).join("+"),
        zy = (a, b) => (b ? [b] : []).concat(ae(a.G).tag_partners || []).join("+"),
        Fy = (a, b, c, d) => {
            const e = d.D;
            if (!e) throw Error("no_ins");
            c.src = hv(a);
            const f = d.pubWin.document;
            a = O() == window.top;
            const g = De(new qe(f), "IFRAME");
            gg(c, (h, k) => {
                null != h && g.setAttribute(k, h)
            });
            a && d.C.push(Lf(d.pubWin, g));
            Ey(e, g);
            V(Si) && r.setTimeout(R(644, () => {
                sf(f.getElementById(b), () => {
                    r.setTimeout(() => {
                        for (const h of d.C) h();
                        d.C.length = 0
                    }, 200)
                })
            }), 0);
            return Promise.resolve(g)
        },
        Gy = (a, b, c) => {
            if (!a.j) return ih("jserror", {
                context: "ac_crai"
            }), null;
            const d = a.D;
            return 9 == a.G.google_reactive_ad_format && a.B && Be(a.B, null, "fsi_container", void 0) ? (d.appendChild(b), Promise.resolve(b)) : yr(a.F.qc, 525, e => {
                a.D.appendChild(b);
                const f = Ru(c, a.pubWin);
                e.createAdSlot(a.j, a.G, b, a.B.parentElement, f);
                return b
            })
        };

    function Hy(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        jy(a.pubWin, Qd(id(id(Pd(new Rd, Sd(new Td, String(qf(a.pubWin)))), 4), 2), H(a.A, 2)));
        const f = "string" === typeof b ? a.pubWin.document.getElementById(b) : b;
        if (f) {
            var g = a.j;
            a.G.google_acr && a.G.google_acr(f);
            L(f, "load", () => {
                f && f.setAttribute("data-load-complete", !0);
                if ((a.G.ovlp || V(tj)) && g && g === a.pubWin && f) {
                    const h = a.B;
                    h && Iy(g, a, h, f)
                }
            });
            e = h => {
                h && a.C.push(() => h.Ya())
            };
            Jy(a, f);
            !g || Ok(a.G) && !Pk(a.G) || (e(new uv(a, f)), e(new Bw(g, f, a.G)), e(wv(a, f)), e(lv(a, f)), e(g.IntersectionObserver ?
                null : new tv(g, f, a.D)));
            g && (e(new Di(g, f)), a.C.push(zu(g, a.G)), Eu.V().P(g), a.C.push(jv(g, a.B, f)));
            V(rj) || Ky(a, c, f);
            f && f.setAttribute("data-google-container-id", d);
            e = a.G.iaaso;
            if (null != e && f) {
                const h = a.B,
                    k = h.parentElement;
                (k && ug.test(k.className) ? k : h).setAttribute("data-auto-ad-size", e)
            }
            f && (e = a.B) && (e.setAttribute("tabindex", "0"), e.setAttribute("title", "Advertisement"), e.setAttribute("aria-label", "Advertisement"));
            Ly(a)
        } else e ? ih("jserror", {
            context: "ac::nfrm",
            url: c
        }) : (e = R(162, () => Hy(a, b, c, d, !0)), r.setTimeout(e,
            0))
    }
    var Jy = (a, b) => {
        const c = a.pubWin,
            d = a.G.google_ad_client,
            e = xu();
        let f = null;
        const g = ai(c, "pvt", (h, k) => {
            "string" === typeof h.token && k.source === b.contentWindow && (f = h.token, g(), e[d] = e[d] || [], e[d].push(f), 100 < e[d].length && e[d].shift())
        })
    };
    const Ly = a => {
            const b = Hf(a.pubWin);
            if (b)
                if ("AMP-STICKY-AD" === b.container) {
                    const c = e => {
                            "fill_sticky" === e.data && b.renderStart && b.renderStart()
                        },
                        d = R(616, c, this);
                    L(a.pubWin, "message", d);
                    a.C.push(() => {
                        Kd(a.pubWin, "message", c)
                    })
                } else b.renderStart && b.renderStart()
        },
        Iy = (a, b, c, d) => {
            Fv(new Ov(a, void 0), c).then(e => {
                nk(8, [e]);
                return e
            }).then(e => {
                const f = c.parentElement;
                (f && ug.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
                return e
            }).then(e => {
                const f = b.G.armr ||
                    "",
                    g = e.executionTime || "",
                    h = null == b.G.iaaso ? "" : Number(b.G.iaaso),
                    k = Number(e.isOverlappingOrOutsideViewport),
                    l = za(e.entries, A => `${A.overlapType}:${A.overlapDepth}:${A.overlapDetectionPoint}`),
                    n = e.overlappedArea.toFixed(2),
                    m = d.dataset.googleQueryId || "",
                    p = n * e.targetRect.width * e.targetRect.height,
                    q = e.scrollPosition.scrollX + "," + e.scrollPosition.scrollY,
                    v = rg(e.target),
                    u = [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join();
                e = e.viewportSize.width + "x" + e.viewportSize.height;
                ih("ovlp", {
                    adf: b.G.google_ad_dom_fingerprint,
                    armr: f,
                    client: b.G.google_ad_client,
                    eid: Xj(b.G),
                    et: g,
                    fwrattr: b.G.google_full_width_responsive,
                    iaaso: h,
                    io: k,
                    saldr: b.G.google_loader_used,
                    oa: n,
                    oe: l.join(","),
                    qid: m,
                    rafmt: b.G.google_responsive_auto_format,
                    roa: p,
                    slot: b.G.google_ad_slot,
                    sp: q,
                    tgt: v,
                    tr: u,
                    url: b.G.google_page_url,
                    vp: e
                }, 1)
            }).catch(e => {
                nk(8, ["Error:", e.message, c]);
                P(Q, "ovlp-err", {
                    err: e.message
                }, !0, 1, void 0)
            })
        };
    var My = a => {
            var b = t("Edge") ? 4E3 : 8100;
            var c = a;
            c.length > b && (c = c.substring(0, b - 8), c = c.replace(/%\w?$/, ""), c = c.replace(/&[^=]*=?$/, ""), c += "&trunc=1");
            if (c !== a) {
                b -= 8;
                let d = a.lastIndexOf("&", b); - 1 === d && (d = a.lastIndexOf("?", b));
                P(Q, "trn", {
                    ol: a.length,
                    tr: -1 === d ? "" : a.substring(d + 1),
                    url: a
                }, !0, .01, void 0)
            }
            return c
        },
        Ny = (a, b, c) => {
            const d = a.G.google_async_iframe_id;
            var e = b,
                f = 0 === a.H;
            b = a.G;
            const g = b.google_async_iframe_id,
                h = b.google_ad_width,
                k = b.google_ad_height,
                l = hu(b),
                n = {
                    id: g,
                    name: g
                };
            l || (n.style = "left:0;position:absolute;top:0;border:0;" +
                `width:${h}px;` + `height:${k}px;`);
            var m = df();
            if (m["allow-top-navigation-by-user-activation"] && m["allow-popups-to-escape-sandbox"]) {
                m = e;
                if (e = "fsb=" + encodeURIComponent("1")) {
                    var p = m.indexOf("#");
                    0 > p && (p = m.length);
                    var q = m.indexOf("?");
                    if (0 > q || q > p) {
                        q = p;
                        var v = ""
                    } else v = m.substring(q + 1, p);
                    m = [m.substr(0, q), v, m.substr(p)];
                    p = m[1];
                    m[1] = e ? p ? p + "&" + e : e : p;
                    e = m[0] + (m[1] ? "?" + m[1] : "") + m[2]
                } else e = m;
                n.sandbox = cf().join(" ")
            }
            p = e;
            e = My(e);
            q = f ? e.replace(/&ea=[^&]*/, "") + "&ea=0" : e;
            m = l ? e : hv(q);
            null != h && (n.width = String(h));
            null != k && (n.height = String(k));
            n.frameborder = "0";
            n.src = m;
            n.marginwidth = "0";
            n.marginheight = "0";
            n.vspace = "0";
            n.hspace = "0";
            n.allowtransparency = "true";
            n.scrolling = "no";
            n.allowfullscreen = "true";
            m = "";
            if (f) {
                m = 10;
                for (q = ""; 0 < m--;) q += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62 * Math.random()));
                m = q;
                e = Yj(e, m);
                Yj(p, m)
            } else e = q;
            b.dash && (n.srcdoc = b.dash);
            p = a.pubWin.google_trust_token_operation_status;
            q = b.google_trust_token_additional_signing_data;
            p && Xu(p) && (p = Yu(p, q)) && (n.trustToken =
                JSON.stringify(p));
            if (V(Gj)) {
                var u;
                if (null == (u = a.pubWin.document.featurePolicy) ? 0 : u.features().includes("conversion-measurement")) n.allow = "conversion-measurement 'src'"
            }
            l ? (n.name = "", u = $u(n), c = Gy(a, u, c)) : c = Fy(e, g, n, a);
            f && (f = a.F.$d.toString(), b = {
                id: g,
                url: e,
                width: h,
                height: k,
                Vb: m,
                Kd: a.pubWin,
                Tc: g,
                xh: "google_expandable_ad_slot" + pg(b),
                vd: f,
                Eb: a.pubWin
            }, b = !b.id || !b.url || 0 >= b.width || 0 >= b.height || !b.Vb || !b.Eb ? void 0 : fi(b.Eb, na(Zj, b, f)), b && a.C.push(b));
            return c || d
        },
        Ky = (a, b, c) => {
            const d = !bc() || 0 <= Bb(fc(), 11) ?
                Bk() : Ek();
            d.getOseId() && (O().Goog_AdSense_getAdAdapterInstance = Bk, d.registerAdBlock(b, 1, "", c), a.C.push(() => {
                d.unloadAdBlock(c, !1, !0)
            }))
        };
    const Ry = async (a, b) => {
            var c = a.G,
                d = a.pubWin,
                e = a.J;
            const f = Ru(e, a.pubWin);
            if (!G(e, 5) && V(Ti)) return Promise.resolve();
            G(e, 5) && fv(e, a.pubWin, a.G.google_ad_client);
            var g = a.G.google_reactive_ads_config;
            if (g) {
                xr(a.j, g);
                const k = Ru(e);
                mu(g, a, k);
                g = g.page_level_pubvars;
                ea(g) && Za(a.G, g)
            }
            await wy();
            G(e, 5) && await Oy(a.G);
            const h = Tj(Rj);
            g = d.google_trust_token_operation_promise;
            0 < h && g && await Promise.race([g, new Promise(k => void setTimeout(() => k(), h))]);
            g = "";
            hu(c) ? (g = a.F.ae.toString() + "#" + lx(c), tx(c, ru()), Py(c)) : (5 ==
                c.google_pgb_reactive && c.google_reactive_ads_config || !or(c) || nr(d, c, f)) && Py(c) && (g = kx(a, e, b));
            nk(2, [c, g]);
            if (!g) return Promise.resolve();
            c.google_async_iframe_id || og(d);
            d = pg(c);
            c = r.window === r.window.top ? "a!" + d.toString(36) : `${d.toString(36)}.${Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^oa()).toString(36)}`;
            b = b ? 0 < ry(a, b, !0) : !1;
            d = {
                ["ifi"]: d,
                ["uci"]: c
            };
            b && (b = ru(), d.btvi = X(b, 21, 1), wu(b, 21));
            g = lg(d, g);
            e = Ny(a, g, e);
            g = My(g);
            Qy(a, a.D);
            e = await e;
            try {
                Hy(a,
                    e, g, c)
            } catch (k) {
                dh.ca(223, k, void 0, void 0)
            }
        },
        Oy = a => "aa" !== a.google_loader_used && "sa" !== a.google_loader_used || !(dc() ? 0 <= Bb(fc(), 11) : cc() && 0 <= Bb(fc(), 65)) ? (gx(null), Promise.resolve()) : new Promise(b => {
            gx(b.bind(null, !0))
        }),
        Sy = a => {
            const b = new Xx(a);
            return new Promise(c => {
                Wx(b, d => {
                    d && "string" === typeof d.uspString ? c(d.uspString) : c()
                })
            })
        },
        Ty = a => {
            let b = Tj(Xi);
            0 > b && (b = -1);
            a = new vp(a, b);
            return pp(a) ? up(a) : Promise.resolve()
        },
        Uy = a => {
            var b = ef(r.top, "googlefcPresent");
            r.googlefc && !b && P(Q, "adsense_fc_has_namespace_but_no_iframes", {
                publisherId: a
            }, !0, 1, void 0)
        },
        Vy = a => cy(a) ? fy(a, "loaded") : Promise.resolve(),
        Wy = (a, b) => {
            const c = b.Yd,
                d = b.uspString;
            b = b.Rd;
            const e = new Xh;
            if (c) {
                if (np(c))
                    if (!1 !== c.gdprApplies && "tcunavailable" !== c.tcString && void 0 !== c.gdprApplies && "string" === typeof c.tcString && c.tcString.length) {
                        b: {
                            if (c.publisher && c.publisher.restrictions) {
                                var f = c.publisher.restrictions["1"];
                                if (void 0 !== f) {
                                    f = f["755"];
                                    break b
                                }
                            }
                            f = void 0
                        }
                        0 === f ? f = !1 : c.purpose && c.vendor ? (f = c.vendor.consents, (f = !(!f || !f["755"])) && c.purposeOneTreatment && ("DE" ===
                            c.publisherCC || V(Ej) && "CH" === c.publisherCC) ? f = !0 : f && (f = c.purpose.consents, f = !(!f || !f["1"]))) : f = !0
                    }
                else f = !0;
                else f = !1;
                f = z(e, 5, f);
                f = z(f, 2, c.tcString);
                f = z(f, 4, c.addtlConsent || "");
                z(f, 7, c.internalErrorState);
                void 0 !== c.gdprApplies && z(e, 3, c.gdprApplies)
            } else z(e, 5, !0);
            d && z(e, 1, d);
            null !== b && z(e, 6, b);
            a.J = e
        },
        Xy = a => {
            var b = Tj(Vi);
            return 0 >= b ? Promise.resolve() : Promise.race([hh(809, () => Rx(a)), uf(b)])
        },
        Yy = a => {
            var b = Tj(Wi);
            if (0 >= b) return Promise.resolve();
            const c = Ng();
            return Promise.race([hh(832, () => my(a)), uf(b)]).then(d => {
                let e;
                var f = {
                    etus: null != (e = null == d ? void 0 : d.status) ? e : 100,
                    sig: Ng() - c,
                    tms: b
                };
                P(Q, "afc_etu", f, !0, void 0, void 0);
                return null == d ? void 0 : d.Ca
            })
        };
    async function Zy(a, b) {
        Zw = O;
        cx(H(a.A, 8));
        Mx(a.pubWin);
        Uy(a.G.google_ad_client);
        var c = new gy(a.pubWin),
            d = await Vy(c);
        c = [Ty(a.pubWin), Sy(a.pubWin), hy(c, d, a.G.google_ad_client, hd(a.A, 6))];
        c = await Promise.all(c);
        Wy(a, {
            Yd: c[0],
            uspString: c[1],
            Rd: c[2]
        });
        c = Xy(a.pubWin);
        d = hh(868, () => Yy(a.pubWin));
        a.K = await c || "";
        a.Ca = await d || "";
        await Ry(a, b)
    }
    var Dy = a => {
        var b = a.G.google_ad_width,
            c = a.G.google_ad_height,
            d = a.pubWin.document,
            e = a.G;
        let f = 0;
        try {
            !1 === e.google_allow_expandable_ads && (f |= 1);
            if (!d.body || isNaN(e.google_ad_height) || isNaN(e.google_ad_width) || !/^http/.test(d.location.protocol)) f |= 2;
            a: {
                e = navigator;
                const h = e.userAgent,
                    k = e.platform,
                    l = /WebKit\/(\d+)/,
                    n = /rv:(\d+\.\d+)/,
                    m = /rv:1\.8([^.]|\.0)/;
                if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(k) && !/^Opera/.test(h)) {
                    const p = (l.exec(h) || [0, 0])[1],
                        q = (n.exec(h) || [0, 0])[1];
                    if (/Win/.test(k) && /Trident/.test(h) &&
                        11 <= d.documentMode || !p && "Gecko" === e.product && 27 <= q && !m.test(h) || 536 <= p) {
                        var g = !0;
                        break a
                    }
                }
                g = !1
            }
            g || (f |= 4)
        } catch (h) {
            f |= 8
        }
        d = f;
        Jk(a.pubWin, a.pubWin.document, b, c) && (d |= 2);
        a.H = d;
        0 === a.H || (a.G.google_allow_expandable_ads = !1);
        Ik() != a.pubWin && (a.l |= 4);
        3 === rk(a.pubWin.document) && (a.l |= 32);
        if (b = a.j) b = a.j, b = !(S(b).scrollWidth <= S(b).clientWidth);
        b && (a.l |= 1024);
        a.pubWin.Prototype && a.pubWin.Prototype.Version && (a.l |= 16384);
        a.G.google_loader_features_used && (a.l |= a.G.google_loader_features_used);
        V(rj) ? a.I = 2 : (b = Tj(uj),
            wk = Ak, qk = .02, pk = b, b = !bc() || 0 <= Bb(fc(), 11) ? Bk() : Ek(), c = ru(), a.I = b.setupOse(X(c, 7, qu())));
        return Zy(a, a.G.google_async_iframe_id ? a.D : null)
    };

    function Ey(a, b) {
        a.style.visibility = "visible";
        for (var c; c = a.firstChild;) a.removeChild(c);
        a.appendChild(b)
    }
    var Py = a => {
            const b = ru(),
                c = a.google_ad_section;
            Ok(a) && wu(b, 15);
            if (xg(a)) {
                if (100 < wu(b, 5)) return !1
            } else if (100 < wu(b, 6) - X(b, 15, 0) && "" == c) return !1;
            return !0
        },
        Qy = (a, b) => {
            b && a.G.rpe && uw(a.pubWin, b, {
                height: a.G.google_ad_height,
                Qb: "force",
                Sb: !0,
                vc: !0,
                Qa: a.G.google_ad_client
            })
        },
        Ay = a => {
            const b = a.j;
            if (b && !ae(b).ads_density_stats_processed && !Hf(b) && (ae(b).ads_density_stats_processed = !0, V(sj) || .01 > Qe(b))) {
                const c = () => {
                    if (b) {
                        var d = bt(Xs(b), a.G.google_ad_client, b.location.hostname, Xj(a.G).split(","));
                        P(Q, "ama_stats",
                            d, !0, 1, void 0)
                    }
                };
                "complete" === b.document.readyState ? r.setTimeout(c, 1E3) : L(b, "load", () => {
                    r.setTimeout(c, 1E3)
                })
            }
        },
        Cy = a => {
            a && !ae(a).host_pinged_back && (ae(a).host_pinged_back = !0, P(Q, "abg_host", {
                host: a.location.host
            }, !0, .01, void 0))
        },
        xy = async a => {
            const b = a.pubWin.document;
            if ("function" === typeof b.interestCohort && V(Dj)) {
                const c = Tj(Fj),
                    d = await Promise.race([(async () => {
                        const e = performance.now(),
                            f = await b.interestCohort();
                        P(Q, "flocapi", {
                            time: performance.now() - e
                        }, !0, 1, void 0);
                        return f
                    })(), new Promise(e => void setTimeout(() =>
                        e(), c))]);
                d && (a.pubWin.google_floc = d)
            }
        };
    ((a, b, c) => {
        hh(843, () => {
            var d = r.google_sl_win || r;
            if (!d.google_sa_impl) {
                var e = Ou(a);
                Fu(dh, H(e, 2));
                nk(16, [3, ld(e)]);
                var f = c(b, e);
                d.google_sa_impl = async g => {
                    await oy(e, f, g)
                };
                Wj(Oi(d));
                d.google_process_slots && d.google_process_slots();
                d = (r.Prototype || {}).Version;
                null != d && ih("prtpjs", {
                    version: d
                })
            }
        })
    })(Nu, "", function(a, b) {
        const c = 2012 < gd(b, 1, 0) ? `_fy${gd(b,1,0)}` : "";
        H(b, 3);
        const d = H(b, 3).replace(/^\//, ""),
            e = H(b, 2);
        return {
            Nd: Uh `https://pagead2.googlesyndication.com/pagead/js/${e}/${d}/rum${c}.js`,
            Md: Uh `https://pagead2.googlesyndication.com/pagead/js/${e}/${d}/rum_debug${c}.js`,
            qc: a ? Uh `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/reactive_library${c}.js` : Uh `https://pagead2.googlesyndication.com/pagead/js/${H(b,2)}/${d}/reactive_library${c}.js`,
            jd: a ? Uh `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/debug_card_library${c}.js` : Uh `https://pagead2.googlesyndication.com/pagead/js/${H(b,2)}/${d}/debug_card_library${c}.js`,
            $d: Uh `https://pagead2.googlesyndication.com/pagead/js/${e}/${d}/creativetoolset/xpc_expansion_embed.js`,
            ae: Uh `https://googleads.g.doubleclick.net/pagead/html/${e}/${d}/zrt_lookup.html`
        }
    });
}).call(this, "[2019,\"r20210603\",\"\/r20190131\",null,[],null,null,\".google.co.in\"]");