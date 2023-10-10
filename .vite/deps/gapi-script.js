import "./chunk-UXIASGQL.js";

// node_modules/gapi-script/gapiScript.js
var gapi = window.gapi = window.gapi || {};
gapi._bs = (/* @__PURE__ */ new Date()).getTime();
(function() {
  var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a2, b2, c) {
    if (a2 == Array.prototype || a2 == Object.prototype)
      return a2;
    a2[b2] = c.value;
    return a2;
  }, da = function(a2) {
    a2 = ["object" == typeof globalThis && globalThis, a2, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b2 = 0; b2 < a2.length; ++b2) {
      var c = a2[b2];
      if (c && c.Math == Math)
        return c;
    }
    throw Error("Cannot find global object");
  }, ea = da(this), fa = function(a2, b2) {
    if (b2)
      a: {
        var c = ea;
        a2 = a2.split(".");
        for (var d = 0; d < a2.length - 1; d++) {
          var e = a2[d];
          if (!(e in c))
            break a;
          c = c[e];
        }
        a2 = a2[a2.length - 1];
        d = c[a2];
        b2 = b2(d);
        b2 != d && null != b2 && aa(c, a2, { configurable: true, writable: true, value: b2 });
      }
  }, ha = function(a2) {
    var b2 = 0;
    return function() {
      return b2 < a2.length ? { done: false, value: a2[b2++] } : { done: true };
    };
  };
  fa("Symbol", function(a2) {
    if (a2)
      return a2;
    var b2 = function(e, f) {
      this.ba = e;
      aa(this, "description", { configurable: true, writable: true, value: f });
    };
    b2.prototype.toString = function() {
      return this.ba;
    };
    var c = 0, d = function(e) {
      if (this instanceof d)
        throw new TypeError("Symbol is not a constructor");
      return new b2("jscomp_symbol_" + (e || "") + "_" + c++, e);
    };
    return d;
  });
  fa("Symbol.iterator", function(a2) {
    if (a2)
      return a2;
    a2 = Symbol("Symbol.iterator");
    for (var b2 = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b2.length; c++) {
      var d = ea[b2[c]];
      "function" === typeof d && "function" != typeof d.prototype[a2] && aa(d.prototype, a2, { configurable: true, writable: true, value: function() {
        return ia(ha(this));
      } });
    }
    return a2;
  });
  var ia = function(a2) {
    a2 = { next: a2 };
    a2[Symbol.iterator] = function() {
      return this;
    };
    return a2;
  }, ja = function(a2, b2) {
    a2 instanceof String && (a2 += "");
    var c = 0, d = false, e = { next: function() {
      if (!d && c < a2.length) {
        var f = c++;
        return { value: b2(f, a2[f]), done: false };
      }
      d = true;
      return { done: true, value: void 0 };
    } };
    e[Symbol.iterator] = function() {
      return e;
    };
    return e;
  };
  fa("Array.prototype.keys", function(a2) {
    return a2 ? a2 : function() {
      return ja(this, function(b2) {
        return b2;
      });
    };
  });
  var m = this || self, ka = function(a2) {
    var b2 = typeof a2;
    return "object" != b2 ? b2 : a2 ? Array.isArray(a2) ? "array" : b2 : "null";
  }, la = function(a2, b2, c) {
    return a2.call.apply(a2.bind, arguments);
  }, ma = function(a2, b2, c) {
    if (!a2)
      throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function() {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a2.apply(b2, e);
      };
    }
    return function() {
      return a2.apply(b2, arguments);
    };
  }, na = function(a2, b2, c) {
    na = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
    return na.apply(null, arguments);
  }, oa = function(a2, b2) {
    function c() {
    }
    c.prototype = b2.prototype;
    a2.ma = b2.prototype;
    a2.prototype = new c();
    a2.prototype.constructor = a2;
    a2.A = function(d, e, f) {
      for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
        g[h - 2] = arguments[h];
      return b2.prototype[e].apply(d, g);
    };
  }, pa = function(a2) {
    return a2;
  }, qa = function(a2) {
    var b2 = null, c = m.trustedTypes;
    if (!c || !c.createPolicy)
      return b2;
    try {
      b2 = c.createPolicy(a2, { createHTML: pa, createScript: pa, createScriptURL: pa });
    } catch (d) {
      m.console && m.console.error(d.message);
    }
    return b2;
  };
  function q(a2) {
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, q);
    else {
      var b2 = Error().stack;
      b2 && (this.stack = b2);
    }
    a2 && (this.message = String(a2));
  }
  oa(q, Error);
  q.prototype.name = "CustomError";
  var ra = function(a2, b2) {
    a2 = a2.split("%s");
    for (var c = "", d = a2.length - 1, e = 0; e < d; e++)
      c += a2[e] + (e < b2.length ? b2[e] : "%s");
    q.call(this, c + a2[d]);
  };
  oa(ra, q);
  ra.prototype.name = "AssertionError";
  var sa = function(a2, b2, c, d) {
    var e = "Assertion failed";
    if (c) {
      e += ": " + c;
      var f = d;
    } else
      a2 && (e += ": " + a2, f = b2);
    throw new ra("" + e, f || []);
  }, ta = function(a2, b2, c) {
    a2 || sa("", null, b2, Array.prototype.slice.call(arguments, 2));
    return a2;
  }, ua = function(a2, b2) {
    throw new ra("Failure" + (a2 ? ": " + a2 : ""), Array.prototype.slice.call(arguments, 1));
  }, va = function(a2, b2, c) {
    "string" !== typeof a2 && sa("Expected string but got %s: %s.", [ka(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
  };
  var xa = function(a2, b2) {
    a: {
      try {
        var c = a2 && a2.ownerDocument, d = c && (c.defaultView || c.parentWindow);
        d = d || m;
        if (d.Element && d.Location) {
          var e = d;
          break a;
        }
      } catch (g) {
      }
      e = null;
    }
    if (e && "undefined" != typeof e[b2] && (!a2 || !(a2 instanceof e[b2]) && (a2 instanceof e.Location || a2 instanceof e.Element))) {
      e = typeof a2;
      if ("object" == e && null != a2 || "function" == e)
        try {
          var f = a2.constructor.displayName || a2.constructor.name || Object.prototype.toString.call(a2);
        } catch (g) {
          f = "<object could not be stringified>";
        }
      else
        f = void 0 === a2 ? "undefined" : null === a2 ? "null" : typeof a2;
      ua("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b2, f);
    }
    return a2;
  };
  var ya;
  var t = function(a2, b2) {
    this.P = a2 === za && b2 || "";
    this.ca = Aa;
  };
  t.prototype.J = true;
  t.prototype.H = function() {
    return this.P;
  };
  t.prototype.toString = function() {
    return "Const{" + this.P + "}";
  };
  var Ba = function(a2) {
    if (a2 instanceof t && a2.constructor === t && a2.ca === Aa)
      return a2.P;
    ua("expected object of type Const, got '" + a2 + "'");
    return "type_error:Const";
  }, Aa = {}, za = {};
  var v = function(a2, b2) {
    this.N = b2 === Ca ? a2 : "";
  };
  v.prototype.J = true;
  v.prototype.H = function() {
    return this.N.toString();
  };
  v.prototype.toString = function() {
    return "SafeUrl{" + this.N + "}";
  };
  var Da = function(a2) {
    if (a2 instanceof v && a2.constructor === v)
      return a2.N;
    ua("expected object of type SafeUrl, got '" + a2 + "' of type " + ka(a2));
    return "type_error:SafeUrl";
  }, Ea = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, Fa = function(a2) {
    if (a2 instanceof v)
      return a2;
    a2 = "object" == typeof a2 && a2.J ? a2.H() : String(a2);
    ta(Ea.test(a2), "%s does not match the safe URL pattern", a2) || (a2 = "about:invalid#zClosurez");
    return new v(a2, Ca);
  }, Ca = {};
  var w = function(a2, b2, c) {
    this.M = c === Ga ? a2 : "";
  };
  w.prototype.J = true;
  w.prototype.H = function() {
    return this.M.toString();
  };
  w.prototype.toString = function() {
    return "SafeHtml{" + this.M + "}";
  };
  var Ha = function(a2) {
    if (a2 instanceof w && a2.constructor === w)
      return a2.M;
    ua("expected object of type SafeHtml, got '" + a2 + "' of type " + ka(a2));
    return "type_error:SafeHtml";
  }, Ga = {}, Ia = new w(m.trustedTypes && m.trustedTypes.emptyHTML || "", 0, Ga);
  var Ja = { MATH: true, SCRIPT: true, STYLE: true, SVG: true, TEMPLATE: true }, Ka = function(a2) {
    var b2 = false, c;
    return function() {
      b2 || (c = a2(), b2 = true);
      return c;
    };
  }(function() {
    if ("undefined" === typeof document)
      return false;
    var a2 = document.createElement("div"), b2 = document.createElement("div");
    b2.appendChild(document.createElement("div"));
    a2.appendChild(b2);
    if (!a2.firstChild)
      return false;
    b2 = a2.firstChild.firstChild;
    a2.innerHTML = Ha(Ia);
    return !b2.parentElement;
  });
  var x = window, z = document, La = x.location, Ma = function() {
  }, Na = /\[native code\]/, A = function(a2, b2, c) {
    return a2[b2] = a2[b2] || c;
  }, Oa = function(a2) {
    for (var b2 = 0; b2 < this.length; b2++)
      if (this[b2] === a2)
        return b2;
    return -1;
  }, Pa = function(a2) {
    a2 = a2.sort();
    for (var b2 = [], c = void 0, d = 0; d < a2.length; d++) {
      var e = a2[d];
      e != c && b2.push(e);
      c = e;
    }
    return b2;
  }, Qa = /&/g, Ra = /</g, Sa = />/g, Ua = /"/g, Va = /'/g, Wa = function(a2) {
    return String(a2).replace(Qa, "&amp;").replace(Ra, "&lt;").replace(Sa, "&gt;").replace(Ua, "&quot;").replace(Va, "&#39;");
  }, B = function() {
    var a2;
    if ((a2 = Object.create) && Na.test(a2))
      a2 = a2(null);
    else {
      a2 = {};
      for (var b2 in a2)
        a2[b2] = void 0;
    }
    return a2;
  }, C = function(a2, b2) {
    return Object.prototype.hasOwnProperty.call(a2, b2);
  }, Xa = function(a2) {
    if (Na.test(Object.keys))
      return Object.keys(a2);
    var b2 = [], c;
    for (c in a2)
      C(a2, c) && b2.push(c);
    return b2;
  }, D = function(a2, b2) {
    a2 = a2 || {};
    for (var c in a2)
      C(a2, c) && (b2[c] = a2[c]);
  }, Ya = function(a2) {
    return function() {
      x.setTimeout(a2, 0);
    };
  }, E = function(a2, b2) {
    if (!a2)
      throw Error(b2 || "");
  }, F = A(x, "gapi", {});
  var H = function(a2, b2, c) {
    var d = new RegExp("([#].*&|[#])" + b2 + "=([^&#]*)", "g");
    b2 = new RegExp("([?#].*&|[?#])" + b2 + "=([^&#]*)", "g");
    if (a2 = a2 && (d.exec(a2) || b2.exec(a2)))
      try {
        c = decodeURIComponent(a2[2]);
      } catch (e) {
      }
    return c;
  }, Za = new RegExp(/^/.source + /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source + /(\/\/[^\/?#]*)?/.source + /([^?#]*)?/.source + /(\?([^#]*))?/.source + /(#((#|[^#])*))?/.source + /$/.source), $a = /[\ud800-\udbff][\udc00-\udfff]|[^!-~]/g, ab = new RegExp(
    /(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source + /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source,
    "g"
  ), bb = /%([a-f]|[0-9a-fA-F][a-f])/g, cb = /^(https?|ftp|file|chrome-extension):$/i, I = function(a2) {
    a2 = String(a2);
    a2 = a2.replace($a, function(e) {
      try {
        return encodeURIComponent(e);
      } catch (f) {
        return encodeURIComponent(e.replace(/^[^%]+$/g, "�"));
      }
    }).replace(ab, function(e) {
      return e.replace(/%/g, "%25");
    }).replace(bb, function(e) {
      return e.toUpperCase();
    });
    a2 = a2.match(Za) || [];
    var b2 = B(), c = function(e) {
      return e.replace(/\\/g, "%5C").replace(/\^/g, "%5E").replace(/`/g, "%60").replace(/\{/g, "%7B").replace(/\|/g, "%7C").replace(
        /\}/g,
        "%7D"
      );
    }, d = !!(a2[1] || "").match(cb);
    b2.A = c((a2[1] || "") + (a2[2] || "") + (a2[3] || (a2[2] && d ? "/" : "")));
    d = function(e) {
      return c(e.replace(/\?/g, "%3F").replace(/#/g, "%23"));
    };
    b2.query = a2[5] ? [d(a2[5])] : [];
    b2.g = a2[7] ? [d(a2[7])] : [];
    return b2;
  }, db = function(a2) {
    return a2.A + (0 < a2.query.length ? "?" + a2.query.join("&") : "") + (0 < a2.g.length ? "#" + a2.g.join("&") : "");
  }, eb = function(a2, b2) {
    var c = [];
    if (a2) {
      for (var d in a2)
        if (C(a2, d) && null != a2[d]) {
          var e = b2 ? b2(a2[d]) : a2[d];
          c.push(encodeURIComponent(d) + "=" + encodeURIComponent(e));
        }
    }
    return c;
  }, fb = function(a2, b2, c, d) {
    a2 = I(a2);
    a2.query.push.apply(a2.query, eb(b2, d));
    a2.g.push.apply(a2.g, eb(c, d));
    return db(a2);
  }, gb = new RegExp(/\/?\??#?/.source + "(" + /[\/?#]/i.source + "|" + /[\uD800-\uDBFF]/i.source + "|" + /%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source + "|" + /%[0-9a-f]?/i.source + ")$", "i"), hb = function(a2, b2) {
    var c = I(b2);
    b2 = c.A;
    c.query.length && (b2 += "?" + c.query.join(""));
    c.g.length && (b2 += "#" + c.g.join(""));
    var d = "";
    2e3 < b2.length && (d = b2, b2 = b2.substr(0, 2e3), b2 = b2.replace(gb, ""), d = d.substr(b2.length));
    var e = a2.createElement("div");
    a2 = a2.createElement("a");
    c = I(b2);
    b2 = c.A;
    c.query.length && (b2 += "?" + c.query.join(""));
    c.g.length && (b2 += "#" + c.g.join(""));
    b2 = new v(b2, Ca);
    xa(a2, "HTMLAnchorElement");
    b2 = b2 instanceof v ? b2 : Fa(b2);
    a2.href = Da(b2);
    e.appendChild(a2);
    b2 = e.innerHTML;
    c = new t(za, "Assignment to self.");
    va(Ba(c), "must provide justification");
    ta(!/^[\s\xa0]*$/.test(Ba(c)), "must provide non-empty justification");
    void 0 === ya && (ya = qa("gapi#html"));
    b2 = (c = ya) ? c.createHTML(b2) : b2;
    b2 = new w(b2, null, Ga);
    if (e.tagName && Ja[e.tagName.toUpperCase()])
      throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + e.tagName + ".");
    if (Ka())
      for (; e.lastChild; )
        e.removeChild(e.lastChild);
    e.innerHTML = Ha(b2);
    b2 = String(e.firstChild.href);
    e.parentNode && e.parentNode.removeChild(e);
    c = I(b2 + d);
    d = c.A;
    c.query.length && (d += "?" + c.query.join(""));
    c.g.length && (d += "#" + c.g.join(""));
    return d;
  }, ib = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
  var jb = function(a2, b2, c, d) {
    if (x[c + "EventListener"])
      x[c + "EventListener"](a2, b2, false);
    else if (x[d + "tachEvent"])
      x[d + "tachEvent"]("on" + a2, b2);
  }, kb = function() {
    var a2 = z.readyState;
    return "complete" === a2 || "interactive" === a2 && -1 == navigator.userAgent.indexOf("MSIE");
  }, nb = function(a2) {
    var b2 = lb;
    if (!kb())
      try {
        b2();
      } catch (c) {
      }
    mb(a2);
  }, mb = function(a2) {
    if (kb())
      a2();
    else {
      var b2 = false, c = function() {
        if (!b2)
          return b2 = true, a2.apply(this, arguments);
      };
      x.addEventListener ? (x.addEventListener("load", c, false), x.addEventListener("DOMContentLoaded", c, false)) : x.attachEvent && (x.attachEvent("onreadystatechange", function() {
        kb() && c.apply(this, arguments);
      }), x.attachEvent("onload", c));
    }
  }, ob = function(a2) {
    for (; a2.firstChild; )
      a2.removeChild(a2.firstChild);
  }, pb = { button: true, div: true, span: true };
  var K;
  K = A(x, "___jsl", B());
  A(K, "I", 0);
  A(K, "hel", 10);
  var qb = function(a2) {
    return K.dpo ? K.h : H(a2, "jsh", K.h);
  }, rb = function(a2) {
    var b2 = A(K, "sws", []);
    b2.push.apply(b2, a2);
  }, sb = function(a2) {
    return A(K, "watt", B())[a2];
  }, tb = function(a2) {
    var b2 = A(K, "PQ", []);
    K.PQ = [];
    var c = b2.length;
    if (0 === c)
      a2();
    else
      for (var d = 0, e = function() {
        ++d === c && a2();
      }, f = 0; f < c; f++)
        b2[f](e);
  }, ub = function(a2) {
    return A(A(K, "H", B()), a2, B());
  };
  var vb = A(K, "perf", B()), wb = A(vb, "g", B()), xb = A(vb, "i", B());
  A(vb, "r", []);
  B();
  B();
  var yb = function(a2, b2, c) {
    var d = vb.r;
    "function" === typeof d ? d(a2, b2, c) : d.push([a2, b2, c]);
  }, L = function(a2, b2, c) {
    wb[a2] = !b2 && wb[a2] || c || (/* @__PURE__ */ new Date()).getTime();
    yb(a2);
  }, Ab = function(a2, b2, c) {
    b2 && 0 < b2.length && (b2 = zb(b2), c && 0 < c.length && (b2 += "___" + zb(c)), 28 < b2.length && (b2 = b2.substr(0, 28) + (b2.length - 28)), c = b2, b2 = A(xb, "_p", B()), A(b2, c, B())[a2] = (/* @__PURE__ */ new Date()).getTime(), yb(a2, "_p", c));
  }, zb = function(a2) {
    return a2.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/,/g, "_");
  };
  var Bb = B(), N = [], O = function(a2) {
    throw Error("Bad hint" + (a2 ? ": " + a2 : ""));
  };
  N.push(["jsl", function(a2) {
    for (var b2 in a2)
      if (C(a2, b2)) {
        var c = a2[b2];
        "object" == typeof c ? K[b2] = A(K, b2, []).concat(c) : A(K, b2, c);
      }
    if (b2 = a2.u)
      a2 = A(K, "us", []), a2.push(b2), (b2 = /^https:(.*)$/.exec(b2)) && a2.push("http:" + b2[1]);
  }]);
  var Cb = /^(\/[a-zA-Z0-9_\-]+)+$/, Db = [/\/amp\//, /\/amp$/, /^\/amp$/], Eb = /^[a-zA-Z0-9\-_\.,!]+$/, Fb = /^gapi\.loaded_[0-9]+$/, Gb = /^[a-zA-Z0-9,._-]+$/, Kb = function(a2, b2, c, d) {
    var e = a2.split(";"), f = e.shift(), g = Bb[f], h = null;
    g ? h = g(e, b2, c, d) : O("no hint processor for: " + f);
    h || O("failed to generate load url");
    b2 = h;
    c = b2.match(Hb);
    (d = b2.match(Ib)) && 1 === d.length && Jb.test(b2) && c && 1 === c.length || O("failed sanity: " + a2);
    return h;
  }, Nb = function(a2, b2, c, d) {
    a2 = Lb(a2);
    Fb.test(c) || O("invalid_callback");
    b2 = Mb(b2);
    d = d && d.length ? Mb(d) : null;
    var e = function(f) {
      return encodeURIComponent(f).replace(/%2C/g, ",");
    };
    return [encodeURIComponent(a2.pathPrefix).replace(/%2C/g, ",").replace(/%2F/g, "/"), "/k=", e(a2.version), "/m=", e(b2), d ? "/exm=" + e(d) : "", "/rt=j/sv=1/d=1/ed=1", a2.S ? "/am=" + e(a2.S) : "", a2.Z ? "/rs=" + e(a2.Z) : "", a2.aa ? "/t=" + e(a2.aa) : "", "/cb=", e(c)].join("");
  }, Lb = function(a2) {
    "/" !== a2.charAt(0) && O("relative path");
    for (var b2 = a2.substring(1).split("/"), c = []; b2.length; ) {
      a2 = b2.shift();
      if (!a2.length || 0 == a2.indexOf("."))
        O("empty/relative directory");
      else if (0 < a2.indexOf("=")) {
        b2.unshift(a2);
        break;
      }
      c.push(a2);
    }
    a2 = {};
    for (var d = 0, e = b2.length; d < e; ++d) {
      var f = b2[d].split("="), g = decodeURIComponent(f[0]), h = decodeURIComponent(f[1]);
      2 == f.length && g && h && (a2[g] = a2[g] || h);
    }
    b2 = "/" + c.join("/");
    Cb.test(b2) || O("invalid_prefix");
    c = 0;
    for (d = Db.length; c < d; ++c)
      Db[c].test(b2) && O("invalid_prefix");
    c = Ob(a2, "k", true);
    d = Ob(a2, "am");
    e = Ob(a2, "rs");
    a2 = Ob(a2, "t");
    return { pathPrefix: b2, version: c, S: d, Z: e, aa: a2 };
  }, Mb = function(a2) {
    for (var b2 = [], c = 0, d = a2.length; c < d; ++c) {
      var e = a2[c].replace(/\./g, "_").replace(/-/g, "_");
      Gb.test(e) && b2.push(e);
    }
    return b2.join(",");
  }, Ob = function(a2, b2, c) {
    a2 = a2[b2];
    !a2 && c && O("missing: " + b2);
    if (a2) {
      if (Eb.test(a2))
        return a2;
      O("invalid: " + b2);
    }
    return null;
  }, Jb = /^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/, Ib = /\/cb=/g, Hb = /\/\//g, Pb = function() {
    var a2 = qb(La.href);
    if (!a2)
      throw Error("Bad hint");
    return a2;
  };
  Bb.m = function(a2, b2, c, d) {
    (a2 = a2[0]) || O("missing_hint");
    return "https://apis.google.com" + Nb(a2, b2, c, d);
  };
  var Qb = decodeURI("%73cript"), Rb = /^[-+_0-9\/A-Za-z]+={0,2}$/, Sb = function(a2, b2) {
    for (var c = [], d = 0; d < a2.length; ++d) {
      var e = a2[d];
      e && 0 > Oa.call(b2, e) && c.push(e);
    }
    return c;
  }, Tb = function() {
    var a2 = K.nonce;
    return void 0 !== a2 ? a2 && a2 === String(a2) && a2.match(Rb) ? a2 : K.nonce = null : z.querySelector ? (a2 = z.querySelector("script[nonce]")) ? (a2 = a2.nonce || a2.getAttribute("nonce") || "", a2 && a2 === String(a2) && a2.match(Rb) ? K.nonce = a2 : K.nonce = null) : null : null;
  }, Wb = function(a2) {
    if ("loading" != z.readyState)
      Ub(a2);
    else {
      var b2 = Tb(), c = "";
      null !== b2 && (c = ' nonce="' + b2 + '"');
      a2 = "<" + Qb + ' src="' + encodeURI(a2) + '"' + c + "></" + Qb + ">";
      z.write(Vb ? Vb.createHTML(a2) : a2);
    }
  }, Ub = function(a2) {
    var b2 = z.createElement(Qb);
    b2.setAttribute("src", Vb ? Vb.createScriptURL(a2) : a2);
    a2 = Tb();
    null !== a2 && b2.setAttribute("nonce", a2);
    b2.async = "true";
    (a2 = z.getElementsByTagName(Qb)[0]) ? a2.parentNode.insertBefore(b2, a2) : (z.head || z.body || z.documentElement).appendChild(b2);
  }, Xb = function(a2, b2) {
    var c = b2 && b2._c;
    if (c)
      for (var d = 0; d < N.length; d++) {
        var e = N[d][0], f = N[d][1];
        f && C(c, e) && f(c[e], a2, b2);
      }
  }, Zb = function(a2, b2, c) {
    Yb(function() {
      var d = b2 === qb(La.href) ? A(F, "_", B()) : B();
      d = A(ub(b2), "_", d);
      a2(d);
    }, c);
  }, ac = function(a2, b2) {
    var c = b2 || {};
    "function" == typeof b2 && (c = {}, c.callback = b2);
    Xb(a2, c);
    b2 = a2 ? a2.split(":") : [];
    var d = c.h || Pb(), e = A(K, "ah", B());
    if (e["::"] && b2.length) {
      a2 = [];
      for (var f = null; f = b2.shift(); ) {
        var g = f.split(".");
        g = e[f] || e[g[1] && "ns:" + g[0] || ""] || d;
        var h = a2.length && a2[a2.length - 1] || null, k = h;
        h && h.hint == g || (k = { hint: g, V: [] }, a2.push(k));
        k.V.push(f);
      }
      var l = a2.length;
      if (1 < l) {
        var n = c.callback;
        n && (c.callback = function() {
          0 == --l && n();
        });
      }
      for (; b2 = a2.shift(); )
        $b(
          b2.V,
          c,
          b2.hint
        );
    } else
      $b(b2 || [], c, d);
  }, $b = function(a2, b2, c) {
    a2 = Pa(a2) || [];
    var d = b2.callback, e = b2.config, f = b2.timeout, g = b2.ontimeout, h = b2.onerror, k = void 0;
    "function" == typeof h && (k = h);
    var l = null, n = false;
    if (f && !g || !f && g)
      throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
    h = A(ub(c), "r", []).sort();
    var p = A(ub(c), "L", []).sort(), r = [].concat(h), u = function(M, ba) {
      if (n)
        return 0;
      x.clearTimeout(l);
      p.push.apply(p, y);
      var ca = ((F || {}).config || {}).update;
      ca ? ca(e) : e && A(K, "cu", []).push(e);
      if (ba) {
        Ab(
          "me0",
          M,
          r
        );
        try {
          Zb(ba, c, k);
        } finally {
          Ab("me1", M, r);
        }
      }
      return 1;
    };
    0 < f && (l = x.setTimeout(function() {
      n = true;
      g();
    }, f));
    var y = Sb(a2, p);
    if (y.length) {
      y = Sb(a2, h);
      var G = A(K, "CP", []), J = G.length;
      G[J] = function(M) {
        if (!M)
          return 0;
        Ab("ml1", y, r);
        var ba = function(wa) {
          G[J] = null;
          u(y, M) && tb(function() {
            d && d();
            wa();
          });
        }, ca = function() {
          var wa = G[J + 1];
          wa && wa();
        };
        0 < J && G[J - 1] ? G[J] = function() {
          ba(ca);
        } : ba(ca);
      };
      if (y.length) {
        var Ta = "loaded_" + K.I++;
        F[Ta] = function(M) {
          G[J](M);
          F[Ta] = null;
        };
        a2 = Kb(c, y, "gapi." + Ta, h);
        h.push.apply(h, y);
        Ab("ml0", y, r);
        b2.sync || x.___gapisync ? Wb(a2) : Ub(a2);
      } else
        G[J](Ma);
    } else
      u(y) && d && d();
  }, Vb = qa("gapi#gapi");
  var Yb = function(a2, b2) {
    if (K.hee && 0 < K.hel)
      try {
        return a2();
      } catch (c) {
        b2 && b2(c), K.hel--, ac("debug_error", function() {
          try {
            window.___jsl.hefn(c);
          } catch (d) {
            throw c;
          }
        });
      }
    else
      try {
        return a2();
      } catch (c) {
        throw b2 && b2(c), c;
      }
  };
  F.load = function(a2, b2) {
    return Yb(function() {
      return ac(a2, b2);
    });
  };
  var bc = function(a2) {
    var b2 = window.___jsl = window.___jsl || {};
    b2[a2] = b2[a2] || [];
    return b2[a2];
  }, cc = function(a2) {
    var b2 = window.___jsl = window.___jsl || {};
    b2.cfg = !a2 && b2.cfg || {};
    return b2.cfg;
  }, dc = function(a2) {
    return "object" === typeof a2 && /\[native code\]/.test(a2.push);
  }, P = function(a2, b2, c) {
    if (b2 && "object" === typeof b2)
      for (var d in b2)
        !Object.prototype.hasOwnProperty.call(b2, d) || c && "___goc" === d && "undefined" === typeof b2[d] || (a2[d] && b2[d] && "object" === typeof a2[d] && "object" === typeof b2[d] && !dc(a2[d]) && !dc(b2[d]) ? P(a2[d], b2[d]) : b2[d] && "object" === typeof b2[d] ? (a2[d] = dc(b2[d]) ? [] : {}, P(a2[d], b2[d])) : a2[d] = b2[d]);
  }, ec = function(a2) {
    if (a2 && !/^\s+$/.test(a2)) {
      for (; 0 == a2.charCodeAt(a2.length - 1); )
        a2 = a2.substring(0, a2.length - 1);
      try {
        var b2 = window.JSON.parse(a2);
      } catch (c) {
      }
      if ("object" === typeof b2)
        return b2;
      try {
        b2 = new Function("return (" + a2 + "\n)")();
      } catch (c) {
      }
      if ("object" === typeof b2)
        return b2;
      try {
        b2 = new Function("return ({" + a2 + "\n})")();
      } catch (c) {
      }
      return "object" === typeof b2 ? b2 : {};
    }
  }, fc = function(a2, b2) {
    var c = { ___goc: void 0 };
    a2.length && a2[a2.length - 1] && Object.hasOwnProperty.call(a2[a2.length - 1], "___goc") && "undefined" === typeof a2[a2.length - 1].___goc && (c = a2.pop());
    P(c, b2);
    a2.push(c);
  }, gc = function(a2) {
    cc(true);
    var b2 = window.___gcfg, c = bc("cu"), d = window.___gu;
    b2 && b2 !== d && (fc(c, b2), window.___gu = b2);
    b2 = bc("cu");
    var e = document.scripts || document.getElementsByTagName("script") || [];
    d = [];
    var f = [];
    f.push.apply(f, bc("us"));
    for (var g = 0; g < e.length; ++g)
      for (var h = e[g], k = 0; k < f.length; ++k)
        h.src && 0 == h.src.indexOf(f[k]) && d.push(h);
    0 == d.length && 0 < e.length && e[e.length - 1].src && d.push(e[e.length - 1]);
    for (e = 0; e < d.length; ++e)
      d[e].getAttribute("gapi_processed") || (d[e].setAttribute("gapi_processed", true), (f = d[e]) ? (g = f.nodeType, f = 3 == g || 4 == g ? f.nodeValue : f.textContent || f.innerText || f.innerHTML || "") : f = void 0, (f = ec(f)) && b2.push(f));
    a2 && fc(c, a2);
    d = bc("cd");
    a2 = 0;
    for (b2 = d.length; a2 < b2; ++a2)
      P(cc(), d[a2], true);
    d = bc("ci");
    a2 = 0;
    for (b2 = d.length; a2 < b2; ++a2)
      P(cc(), d[a2], true);
    a2 = 0;
    for (b2 = c.length; a2 < b2; ++a2)
      P(cc(), c[a2], true);
  }, Q = function(a2) {
    var b2 = cc();
    if (!a2)
      return b2;
    a2 = a2.split("/");
    for (var c = 0, d = a2.length; b2 && "object" === typeof b2 && c < d; ++c)
      b2 = b2[a2[c]];
    return c === a2.length && void 0 !== b2 ? b2 : void 0;
  }, hc = function(a2, b2) {
    var c;
    if ("string" === typeof a2) {
      var d = c = {};
      a2 = a2.split("/");
      for (var e = 0, f = a2.length; e < f - 1; ++e) {
        var g = {};
        d = d[a2[e]] = g;
      }
      d[a2[e]] = b2;
    } else
      c = a2;
    gc(c);
  };
  var ic = function() {
    var a2 = window.__GOOGLEAPIS;
    a2 && (a2.googleapis && !a2["googleapis.config"] && (a2["googleapis.config"] = a2.googleapis), A(K, "ci", []).push(a2), window.__GOOGLEAPIS = void 0);
  };
  var jc = { callback: 1, clientid: 1, cookiepolicy: 1, openidrealm: -1, includegrantedscopes: -1, requestvisibleactions: 1, scope: 1 }, kc = false, lc = B(), mc = function() {
    if (!kc) {
      for (var a2 = document.getElementsByTagName("meta"), b2 = 0; b2 < a2.length; ++b2) {
        var c = a2[b2].name.toLowerCase();
        if (0 == c.lastIndexOf("google-signin-", 0)) {
          c = c.substring(14);
          var d = a2[b2].content;
          jc[c] && d && (lc[c] = d);
        }
      }
      if (window.self !== window.top) {
        a2 = document.location.toString();
        for (var e in jc)
          0 < jc[e] && (b2 = H(a2, e, "")) && (lc[e] = b2);
      }
      kc = true;
    }
    e = B();
    D(lc, e);
    return e;
  }, nc = function(a2) {
    return !!(a2.clientid && a2.scope && a2.callback);
  };
  var oc = window.console, pc = function(a2) {
    oc && oc.log && oc.log(a2);
  };
  var qc = function() {
    return !!K.oa;
  }, rc = function() {
  };
  var R = A(K, "rw", B()), sc = function(a2) {
    for (var b2 in R)
      a2(R[b2]);
  }, tc = function(a2, b2) {
    (a2 = R[a2]) && a2.state < b2 && (a2.state = b2);
  };
  var uc;
  var vc = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/u\/(\d)\//, wc = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/b\/(\d{10,21})\//, xc = function(a2) {
    var b2 = Q("googleapis.config/sessionIndex");
    "string" === typeof b2 && 254 < b2.length && (b2 = null);
    null == b2 && (b2 = window.__X_GOOG_AUTHUSER);
    "string" === typeof b2 && 254 < b2.length && (b2 = null);
    if (null == b2) {
      var c = window.google;
      c && (b2 = c.authuser);
    }
    "string" === typeof b2 && 254 < b2.length && (b2 = null);
    null == b2 && (a2 = a2 || window.location.href, b2 = H(a2, "authuser") || null, null == b2 && (b2 = (b2 = a2.match(vc)) ? b2[1] : null));
    if (null == b2)
      return null;
    b2 = String(b2);
    254 < b2.length && (b2 = null);
    return b2;
  }, yc = function(a2) {
    var b2 = Q("googleapis.config/sessionDelegate");
    "string" === typeof b2 && 21 < b2.length && (b2 = null);
    null == b2 && (b2 = (a2 = (a2 || window.location.href).match(wc)) ? a2[1] : null);
    if (null == b2)
      return null;
    b2 = String(b2);
    21 < b2.length && (b2 = null);
    return b2;
  };
  var zc, S, T = void 0, U = function(a2) {
    try {
      return m.JSON.parse.call(m.JSON, a2);
    } catch (b2) {
      return false;
    }
  }, V = function(a2) {
    return Object.prototype.toString.call(a2);
  }, Ac = V(0), Bc = V(/* @__PURE__ */ new Date(0)), Cc = V(true), Dc = V(""), Ec = V({}), Fc = V([]), W = function(a2, b2) {
    if (b2) {
      for (var c = 0, d = b2.length; c < d; ++c)
        if (a2 === b2[c])
          throw new TypeError("Converting circular structure to JSON");
    }
    d = typeof a2;
    if ("undefined" !== d) {
      c = Array.prototype.slice.call(b2 || [], 0);
      c[c.length] = a2;
      b2 = [];
      var e = V(a2);
      if (null != a2 && "function" === typeof a2.toJSON && (Object.prototype.hasOwnProperty.call(
        a2,
        "toJSON"
      ) || (e !== Fc || a2.constructor !== Array && a2.constructor !== Object) && (e !== Ec || a2.constructor !== Array && a2.constructor !== Object) && e !== Dc && e !== Ac && e !== Cc && e !== Bc))
        return W(a2.toJSON.call(a2), c);
      if (null == a2)
        b2[b2.length] = "null";
      else if (e === Ac)
        a2 = Number(a2), isNaN(a2) || isNaN(a2 - a2) ? a2 = "null" : -0 === a2 && 0 > 1 / a2 && (a2 = "-0"), b2[b2.length] = String(a2);
      else if (e === Cc)
        b2[b2.length] = String(!!Number(a2));
      else {
        if (e === Bc)
          return W(a2.toISOString.call(a2), c);
        if (e === Fc && V(a2.length) === Ac) {
          b2[b2.length] = "[";
          var f = 0;
          for (d = Number(a2.length) >> 0; f < d; ++f)
            f && (b2[b2.length] = ","), b2[b2.length] = W(a2[f], c) || "null";
          b2[b2.length] = "]";
        } else if (e == Dc && V(a2.length) === Ac) {
          b2[b2.length] = '"';
          f = 0;
          for (c = Number(a2.length) >> 0; f < c; ++f)
            d = String.prototype.charAt.call(a2, f), e = String.prototype.charCodeAt.call(a2, f), b2[b2.length] = "\b" === d ? "\\b" : "\f" === d ? "\\f" : "\n" === d ? "\\n" : "\r" === d ? "\\r" : "	" === d ? "\\t" : "\\" === d || '"' === d ? "\\" + d : 31 >= e ? "\\u" + (e + 65536).toString(16).substr(1) : 32 <= e && 65535 >= e ? d : "�";
          b2[b2.length] = '"';
        } else if ("object" === d) {
          b2[b2.length] = "{";
          d = 0;
          for (f in a2)
            Object.prototype.hasOwnProperty.call(
              a2,
              f
            ) && (e = W(a2[f], c), void 0 !== e && (d++ && (b2[b2.length] = ","), b2[b2.length] = W(f), b2[b2.length] = ":", b2[b2.length] = e));
          b2[b2.length] = "}";
        } else
          return;
      }
      return b2.join("");
    }
  }, Gc = /[\0-\x07\x0b\x0e-\x1f]/, Hc = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/, Ic = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/, Jc = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/, Kc = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g, Lc = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g, Mc = /[ \t\n\r]+/g, Nc = /[^"]:/, Oc = /""/g, Pc = /true|false|null/g, Qc = /00/, Rc = /[\{]([^0\}]|0[^:])/, Sc = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/, Tc = /[^\[,:][\[\{]/, Uc = /^(\{|\}|\[|\]|,|:|0)+/, Vc = /\u2028/g, Wc = /\u2029/g, Xc = function(a) {
    a = String(a);
    if (Gc.test(a) || Hc.test(a) || Ic.test(a) || Jc.test(a))
      return false;
    var b = a.replace(Kc, '""');
    b = b.replace(Lc, "0");
    b = b.replace(Mc, "");
    if (Nc.test(b))
      return false;
    b = b.replace(Oc, "0");
    b = b.replace(Pc, "0");
    if (Qc.test(b) || Rc.test(b) || Sc.test(b) || Tc.test(b) || !b || (b = b.replace(Uc, "")))
      return false;
    a = a.replace(Vc, "\\u2028").replace(
      Wc,
      "\\u2029"
    );
    b = void 0;
    try {
      b = T ? [U(a)] : eval("(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n" + a + "\n)");
    } catch (c) {
      return false;
    }
    return b && 1 === b.length ? b[0] : false;
  }, Yc = function() {
    var a2 = ((m.document || {}).scripts || []).length;
    if ((void 0 === zc || void 0 === T || S !== a2) && -1 !== S) {
      zc = T = false;
      S = -1;
      try {
        try {
          T = !!m.JSON && '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' === m.JSON.stringify.call(m.JSON, { a: [3, true, /* @__PURE__ */ new Date(0)], c: function() {
          } }) && true === U("true") && 3 === U('[{"a":3}]')[0].a;
        } catch (b2) {
        }
        zc = T && !U("[00]") && !U('"\x07"') && !U('"\\0"') && !U('"\\v"');
      } finally {
        S = a2;
      }
    }
  }, Zc = function(a2) {
    if (-1 === S)
      return false;
    Yc();
    return (zc ? U : Xc)(a2);
  }, $c = function(a2) {
    if (-1 !== S)
      return Yc(), T ? m.JSON.stringify.call(m.JSON, a2) : W(a2);
  }, ad = !Date.prototype.toISOString || "function" !== typeof Date.prototype.toISOString || "1970-01-01T00:00:00.000Z" !== (/* @__PURE__ */ new Date(0)).toISOString(), bd = function() {
    var a2 = Date.prototype.getUTCFullYear.call(this);
    return [0 > a2 ? "-" + String(1e6 - a2).substr(1) : 9999 >= a2 ? String(1e4 + a2).substr(1) : "+" + String(1e6 + a2).substr(1), "-", String(101 + Date.prototype.getUTCMonth.call(this)).substr(1), "-", String(100 + Date.prototype.getUTCDate.call(this)).substr(1), "T", String(100 + Date.prototype.getUTCHours.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1), ".", String(1e3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1), "Z"].join("");
  };
  Date.prototype.toISOString = ad ? bd : Date.prototype.toISOString;
  var cd = function() {
    this.j = -1;
  };
  var dd = function() {
    this.j = 64;
    this.b = [];
    this.G = [];
    this.da = [];
    this.C = [];
    this.C[0] = 128;
    for (var a2 = 1; a2 < this.j; ++a2)
      this.C[a2] = 0;
    this.D = this.o = 0;
    this.reset();
  };
  oa(dd, cd);
  dd.prototype.reset = function() {
    this.b[0] = 1732584193;
    this.b[1] = 4023233417;
    this.b[2] = 2562383102;
    this.b[3] = 271733878;
    this.b[4] = 3285377520;
    this.D = this.o = 0;
  };
  var ed = function(a2, b2, c) {
    c || (c = 0);
    var d = a2.da;
    if ("string" === typeof b2)
      for (var e = 0; 16 > e; e++)
        d[e] = b2.charCodeAt(c) << 24 | b2.charCodeAt(c + 1) << 16 | b2.charCodeAt(c + 2) << 8 | b2.charCodeAt(c + 3), c += 4;
    else
      for (e = 0; 16 > e; e++)
        d[e] = b2[c] << 24 | b2[c + 1] << 16 | b2[c + 2] << 8 | b2[c + 3], c += 4;
    for (e = 16; 80 > e; e++) {
      var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
      d[e] = (f << 1 | f >>> 31) & 4294967295;
    }
    b2 = a2.b[0];
    c = a2.b[1];
    var g = a2.b[2], h = a2.b[3], k = a2.b[4];
    for (e = 0; 80 > e; e++) {
      if (40 > e)
        if (20 > e) {
          f = h ^ c & (g ^ h);
          var l = 1518500249;
        } else
          f = c ^ g ^ h, l = 1859775393;
      else
        60 > e ? (f = c & g | h & (c | g), l = 2400959708) : (f = c ^ g ^ h, l = 3395469782);
      f = (b2 << 5 | b2 >>> 27) + f + k + l + d[e] & 4294967295;
      k = h;
      h = g;
      g = (c << 30 | c >>> 2) & 4294967295;
      c = b2;
      b2 = f;
    }
    a2.b[0] = a2.b[0] + b2 & 4294967295;
    a2.b[1] = a2.b[1] + c & 4294967295;
    a2.b[2] = a2.b[2] + g & 4294967295;
    a2.b[3] = a2.b[3] + h & 4294967295;
    a2.b[4] = a2.b[4] + k & 4294967295;
  };
  dd.prototype.update = function(a2, b2) {
    if (null != a2) {
      void 0 === b2 && (b2 = a2.length);
      for (var c = b2 - this.j, d = 0, e = this.G, f = this.o; d < b2; ) {
        if (0 == f)
          for (; d <= c; )
            ed(this, a2, d), d += this.j;
        if ("string" === typeof a2)
          for (; d < b2; ) {
            if (e[f] = a2.charCodeAt(d), ++f, ++d, f == this.j) {
              ed(this, e);
              f = 0;
              break;
            }
          }
        else
          for (; d < b2; )
            if (e[f] = a2[d], ++f, ++d, f == this.j) {
              ed(this, e);
              f = 0;
              break;
            }
      }
      this.o = f;
      this.D += b2;
    }
  };
  dd.prototype.digest = function() {
    var a2 = [], b2 = 8 * this.D;
    56 > this.o ? this.update(this.C, 56 - this.o) : this.update(this.C, this.j - (this.o - 56));
    for (var c = this.j - 1; 56 <= c; c--)
      this.G[c] = b2 & 255, b2 /= 256;
    ed(this, this.G);
    for (c = b2 = 0; 5 > c; c++)
      for (var d = 24; 0 <= d; d -= 8)
        a2[b2] = this.b[c] >> d & 255, ++b2;
    return a2;
  };
  var fd = function() {
    this.O = new dd();
  };
  fd.prototype.reset = function() {
    this.O.reset();
  };
  var gd = x.crypto, hd = false, id = 0, jd = 0, kd = 1, ld = 0, md = "", nd = function(a2) {
    a2 = a2 || x.event;
    var b2 = a2.screenX + a2.clientX << 16;
    b2 += a2.screenY + a2.clientY;
    b2 *= (/* @__PURE__ */ new Date()).getTime() % 1e6;
    kd = kd * b2 % ld;
    0 < id && ++jd == id && jb("mousemove", nd, "remove", "de");
  }, od = function(a2) {
    var b2 = new fd();
    a2 = unescape(encodeURIComponent(a2));
    for (var c = [], d = 0, e = a2.length; d < e; ++d)
      c.push(a2.charCodeAt(d));
    b2.O.update(c);
    b2 = b2.O.digest();
    a2 = "";
    for (c = 0; c < b2.length; c++)
      a2 += "0123456789ABCDEF".charAt(Math.floor(b2[c] / 16)) + "0123456789ABCDEF".charAt(b2[c] % 16);
    return a2;
  };
  hd = !!gd && "function" == typeof gd.getRandomValues;
  hd || (ld = 1e6 * (screen.width * screen.width + screen.height), md = od(z.cookie + "|" + z.location + "|" + (/* @__PURE__ */ new Date()).getTime() + "|" + Math.random()), id = Q("random/maxObserveMousemove") || 0, 0 != id && jb("mousemove", nd, "add", "at"));
  var pd = function() {
    var a2 = kd;
    a2 += parseInt(md.substr(0, 20), 16);
    md = od(md);
    return a2 / (ld + Math.pow(16, 20));
  }, qd = function() {
    var a2 = new x.Uint32Array(1);
    gd.getRandomValues(a2);
    return Number("0." + a2[0]);
  };
  var rd = function() {
    var a2 = K.onl;
    if (!a2) {
      a2 = B();
      K.onl = a2;
      var b2 = B();
      a2.e = function(c) {
        var d = b2[c];
        d && (delete b2[c], d());
      };
      a2.a = function(c, d) {
        b2[c] = d;
      };
      a2.r = function(c) {
        delete b2[c];
      };
    }
    return a2;
  }, sd = function(a2, b2) {
    b2 = b2.onload;
    return "function" === typeof b2 ? (rd().a(a2, b2), b2) : null;
  }, td = function(a2) {
    E(/^\w+$/.test(a2), "Unsupported id - " + a2);
    rd();
    return 'onload="window.___jsl.onl.e(&#34;' + a2 + '&#34;)"';
  }, ud = function(a2) {
    rd().r(a2);
  };
  var vd = { allowtransparency: "true", frameborder: "0", hspace: "0", marginheight: "0", marginwidth: "0", scrolling: "no", style: "", tabindex: "0", vspace: "0", width: "100%" }, wd = { allowtransparency: true, onload: true }, xd = 0, yd = function(a2) {
    E(!a2 || ib.test(a2), "Illegal url for new iframe - " + a2);
  }, zd = function(a2, b2, c, d, e) {
    yd(c.src);
    var f, g = sd(d, c), h = g ? td(d) : "";
    try {
      document.all && (f = a2.createElement('<iframe frameborder="' + Wa(String(c.frameborder)) + '" scrolling="' + Wa(String(c.scrolling)) + '" ' + h + ' name="' + Wa(String(c.name)) + '"/>'));
    } catch (l) {
    } finally {
      f || (f = a2.createElement("iframe"), g && (f.onload = function() {
        f.onload = null;
        g.call(this);
      }, ud(d)));
    }
    f.setAttribute("ng-non-bindable", "");
    for (var k in c)
      a2 = c[k], "style" === k && "object" === typeof a2 ? D(a2, f.style) : wd[k] || f.setAttribute(k, String(a2));
    (k = e && e.beforeNode || null) || e && e.dontclear || ob(b2);
    b2.insertBefore(f, k);
    f = k ? k.previousSibling : b2.lastChild;
    c.allowtransparency && (f.allowTransparency = true);
    return f;
  };
  var Ad = /^:[\w]+$/, Bd = /:([a-zA-Z_]+):/g, Cd = function() {
    var a2 = xc() || "0", b2 = yc();
    var c = xc(void 0) || a2;
    var d = yc(void 0), e = "";
    c && (e += "u/" + encodeURIComponent(String(c)) + "/");
    d && (e += "b/" + encodeURIComponent(String(d)) + "/");
    c = e || null;
    (e = (d = false === Q("isLoggedIn")) ? "_/im/" : "") && (c = "");
    var f = Q("iframes/:socialhost:"), g = Q("iframes/:im_socialhost:");
    return uc = { socialhost: f, ctx_socialhost: d ? g : f, session_index: a2, session_delegate: b2, session_prefix: c, im_prefix: e };
  }, Dd = function(a2, b2) {
    return Cd()[b2] || "";
  }, Ed = function(a2) {
    return function(b2, c) {
      return a2 ? Cd()[c] || a2[c] || "" : Cd()[c] || "";
    };
  };
  var Fd = function(a2) {
    var b2;
    a2.match(/^https?%3A/i) && (b2 = decodeURIComponent(a2));
    return hb(document, b2 ? b2 : a2);
  }, Gd = function(a2) {
    a2 = a2 || "canonical";
    for (var b2 = document.getElementsByTagName("link"), c = 0, d = b2.length; c < d; c++) {
      var e = b2[c], f = e.getAttribute("rel");
      if (f && f.toLowerCase() == a2 && (e = e.getAttribute("href")) && (e = Fd(e)) && null != e.match(/^https?:\/\/[\w\-_\.]+/i))
        return e;
    }
    return window.location.href;
  };
  var Hd = { se: "0" }, Id = { post: true }, Jd = { style: "position:absolute;top:-10000px;width:450px;margin:0px;border-style:none" }, Kd = "onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" "), Ld = A(K, "WI", B()), Md = function(a2, b2, c) {
    var d;
    var e = {};
    var f = d = a2;
    "plus" == a2 && b2.action && (d = a2 + "_" + b2.action, f = a2 + "/" + b2.action);
    (d = Q("iframes/" + d + "/url")) || (d = ":im_socialhost:/:session_prefix::im_prefix:_/widget/render/" + f + "?usegapi=1");
    for (var g in Hd)
      e[g] = g + "/" + (b2[g] || Hd[g]) + "/";
    e = hb(z, d.replace(
      Bd,
      Ed(e)
    ));
    g = "iframes/" + a2 + "/params/";
    f = {};
    D(b2, f);
    (d = Q("lang") || Q("gwidget/lang")) && (f.hl = d);
    Id[a2] || (f.origin = window.location.origin || window.location.protocol + "//" + window.location.host);
    f.exp = Q(g + "exp");
    if (g = Q(g + "location"))
      for (d = 0; d < g.length; d++) {
        var h = g[d];
        f[h] = x.location[h];
      }
    switch (a2) {
      case "plus":
      case "follow":
        g = f.href;
        d = b2.action ? void 0 : "publisher";
        g = (g = "string" == typeof g ? g : void 0) ? Fd(g) : Gd(d);
        f.url = g;
        delete f.href;
        break;
      case "plusone":
        g = (g = b2.href) ? Fd(g) : Gd();
        f.url = g;
        g = b2.db;
        d = Q();
        null == g && d && (g = d.db, null == g && (g = d.gwidget && d.gwidget.db));
        f.db = g || void 0;
        g = b2.ecp;
        d = Q();
        null == g && d && (g = d.ecp, null == g && (g = d.gwidget && d.gwidget.ecp));
        f.ecp = g || void 0;
        delete f.href;
        break;
      case "signin":
        f.url = Gd();
    }
    K.ILI && (f.iloader = "1");
    delete f["data-onload"];
    delete f.rd;
    for (var k in Hd)
      f[k] && delete f[k];
    f.gsrc = Q("iframes/:source:");
    k = Q("inline/css");
    "undefined" !== typeof k && 0 < c && k >= c && (f.ic = "1");
    k = /^#|^fr-/;
    c = {};
    for (var l in f)
      C(f, l) && k.test(l) && (c[l.replace(k, "")] = f[l], delete f[l]);
    l = "q" == Q("iframes/" + a2 + "/params/si") ? f : c;
    k = mc();
    for (var n in k)
      !C(k, n) || C(f, n) || C(c, n) || (l[n] = k[n]);
    n = [].concat(Kd);
    (l = Q("iframes/" + a2 + "/methods")) && "object" === typeof l && Na.test(l.push) && (n = n.concat(l));
    for (var p in b2)
      C(b2, p) && /^on/.test(p) && ("plus" != a2 || "onconnect" != p) && (n.push(p), delete f[p]);
    delete f.callback;
    c._methods = n.join(",");
    return fb(e, f, c);
  }, Nd = ["style", "data-gapiscan"], Pd = function(a2) {
    for (var b2 = B(), c = 0 != a2.nodeName.toLowerCase().indexOf("g:"), d = 0, e = a2.attributes.length; d < e; d++) {
      var f = a2.attributes[d], g = f.name, h = f.value;
      0 <= Oa.call(
        Nd,
        g
      ) || c && 0 != g.indexOf("data-") || "null" === h || "specified" in f && !f.specified || (c && (g = g.substr(5)), b2[g.toLowerCase()] = h);
    }
    a2 = a2.style;
    (c = Od(a2 && a2.height)) && (b2.height = String(c));
    (a2 = Od(a2 && a2.width)) && (b2.width = String(a2));
    return b2;
  }, Od = function(a2) {
    var b2 = void 0;
    "number" === typeof a2 ? b2 = a2 : "string" === typeof a2 && (b2 = parseInt(a2, 10));
    return b2;
  }, Rd = function() {
    var a2 = K.drw;
    sc(function(b2) {
      if (a2 !== b2.id && 4 != b2.state && "share" != b2.type) {
        var c = b2.id, d = b2.type, e = b2.url;
        b2 = b2.userParams;
        var f = z.getElementById(c);
        if (f) {
          var g = Md(d, b2, 0);
          g ? (f = f.parentNode, e.replace(/#.*/, "").replace(/(\?|&)ic=1/, "") !== g.replace(/#.*/, "").replace(/(\?|&)ic=1/, "") && (b2.dontclear = true, b2.rd = true, b2.ri = true, b2.type = d, Qd(f, b2), (d = R[f.lastChild.id]) && (d.oid = c), tc(c, 4))) : delete R[c];
        } else
          delete R[c];
      }
    });
  };
  var Sd, Td, X, Ud, Vd, Wd = /(?:^|\s)g-((\S)*)(?:$|\s)/, Xd = { plusone: true, autocomplete: true, profile: true, signin: true, signin2: true };
  Sd = A(K, "SW", B());
  Td = A(K, "SA", B());
  X = A(K, "SM", B());
  Ud = A(K, "FW", []);
  Vd = null;
  var Zd = function(a2, b2) {
    Yd(void 0, false, a2, b2);
  }, Yd = function(a2, b2, c, d) {
    L("ps0", true);
    c = ("string" === typeof c ? document.getElementById(c) : c) || z;
    var e = z.documentMode;
    if (c.querySelectorAll && (!e || 8 < e)) {
      e = d ? [d] : Xa(Sd).concat(Xa(Td)).concat(Xa(X));
      for (var f = [], g = 0; g < e.length; g++) {
        var h = e[g];
        f.push(".g-" + h, "g\\:" + h);
      }
      e = c.querySelectorAll(f.join(","));
    } else
      e = c.getElementsByTagName("*");
    c = B();
    for (f = 0; f < e.length; f++) {
      g = e[f];
      var k = g;
      h = d;
      var l = k.nodeName.toLowerCase(), n = void 0;
      if (k.getAttribute("data-gapiscan"))
        h = null;
      else {
        var p = l.indexOf("g:");
        0 == p ? n = l.substr(2) : (p = (p = String(k.className || k.getAttribute("class"))) && Wd.exec(p)) && (n = p[1]);
        h = !n || !(Sd[n] || Td[n] || X[n]) || h && n !== h ? null : n;
      }
      h && (Xd[h] || 0 == g.nodeName.toLowerCase().indexOf("g:") || 0 != Xa(Pd(g)).length) && (g.setAttribute("data-gapiscan", true), A(c, h, []).push(g));
    }
    if (b2)
      for (var r in c)
        for (b2 = c[r], d = 0; d < b2.length; d++)
          b2[d].setAttribute("data-onload", true);
    for (var u in c)
      Ud.push(u);
    L("ps1", true);
    if ((r = Ud.join(":")) || a2)
      try {
        F.load(r, a2);
      } catch (G) {
        pc(G);
        return;
      }
    if ($d(Vd || {}))
      for (var y in c) {
        a2 = c[y];
        u = 0;
        for (b2 = a2.length; u < b2; u++)
          a2[u].removeAttribute("data-gapiscan");
        ae(y);
      }
    else {
      d = [];
      for (y in c)
        for (a2 = c[y], u = 0, b2 = a2.length; u < b2; u++)
          e = a2[u], be(y, e, Pd(e), d, b2);
      ce(r, d);
    }
  }, de = function(a2) {
    var b2 = A(F, a2, {});
    b2.go || (b2.go = function(c) {
      return Zd(c, a2);
    }, b2.render = function(c, d) {
      d = d || {};
      d.type = a2;
      return Qd(c, d);
    });
  }, ee = function(a2) {
    Sd[a2] = true;
  }, fe = function(a2) {
    Td[a2] = true;
  }, ge = function(a2) {
    X[a2] = true;
  };
  var ae = function(a2, b2) {
    var c = sb(a2);
    b2 && c ? (c(b2), (c = b2.iframeNode) && c.setAttribute("data-gapiattached", true)) : F.load(a2, function() {
      var d = sb(a2), e = b2 && b2.iframeNode, f = b2 && b2.userParams;
      e && d ? (d(b2), e.setAttribute("data-gapiattached", true)) : (d = F[a2].go, "signin2" == a2 ? d(e, f) : d(e && e.parentNode, f));
    });
  }, $d = function() {
    return false;
  }, ce = function() {
  }, be = function(a2, b2, c, d, e, f, g) {
    switch (he(b2, a2, f)) {
      case 0:
        a2 = X[a2] ? a2 + "_annotation" : a2;
        d = {};
        d.iframeNode = b2;
        d.userParams = c;
        ae(a2, d);
        break;
      case 1:
        if (b2.parentNode) {
          for (var h in c) {
            if (f = C(c, h))
              f = c[h], f = !!f && "object" === typeof f && (!f.toString || f.toString === Object.prototype.toString || f.toString === Array.prototype.toString);
            if (f)
              try {
                c[h] = $c(c[h]);
              } catch (y) {
                delete c[h];
              }
          }
          f = true;
          c.dontclear && (f = false);
          delete c.dontclear;
          rc();
          h = Md(a2, c, e);
          e = g || {};
          e.allowPost = 1;
          e.attributes = Jd;
          e.dontclear = !f;
          g = {};
          g.userParams = c;
          g.url = h;
          g.type = a2;
          if (c.rd)
            var k = b2;
          else
            k = document.createElement("div"), b2.setAttribute("data-gapistub", true), k.style.cssText = "position:absolute;width:450px;left:-10000px;", b2.parentNode.insertBefore(k, b2);
          g.siteElement = k;
          k.id || (b2 = k, A(Ld, a2, 0), f = "___" + a2 + "_" + Ld[a2]++, b2.id = f);
          b2 = B();
          b2[">type"] = a2;
          D(c, b2);
          f = h;
          c = k;
          h = e || {};
          b2 = h.attributes || {};
          E(!(h.allowPost || h.forcePost) || !b2.onload, "onload is not supported by post iframe (allowPost or forcePost)");
          e = b2 = f;
          Ad.test(b2) && (e = Q("iframes/" + e.substring(1) + "/url"), E(!!e, "Unknown iframe url config for - " + b2));
          f = hb(z, e.replace(Bd, Dd));
          b2 = c.ownerDocument || z;
          k = 0;
          do
            e = h.id || ["I", xd++, "_", (/* @__PURE__ */ new Date()).getTime()].join("");
          while (b2.getElementById(e) && 5 > ++k);
          E(5 > k, "Error creating iframe id");
          k = {};
          var l = {};
          b2.documentMode && 9 > b2.documentMode && (k.hostiemode = b2.documentMode);
          D(h.queryParams || {}, k);
          D(h.fragmentParams || {}, l);
          var n = h.pfname;
          var p = B();
          Q("iframes/dropLegacyIdParam") || (p.id = e);
          p._gfid = e;
          p.parent = b2.location.protocol + "//" + b2.location.host;
          var r = H(b2.location.href, "parent");
          n = n || "";
          !n && r && (r = H(b2.location.href, "_gfid", "") || H(b2.location.href, "id", ""), n = H(b2.location.href, "pfname", ""), n = r ? n + "/" + r : "");
          n || (r = Zc(H(b2.location.href, "jcp", ""))) && "object" == typeof r && (n = (n = r.id) ? r.pfname + "/" + n : "");
          p.pfname = n;
          h.connectWithJsonParam && (r = {}, r.jcp = $c(p), p = r);
          r = H(f, "rpctoken") || k.rpctoken || l.rpctoken;
          r || (r = h.rpctoken || String(Math.round(1e8 * (hd ? qd() : pd()))), p.rpctoken = r);
          h.rpctoken = r;
          D(p, h.connectWithQueryParams ? k : l);
          r = b2.location.href;
          p = B();
          (n = H(r, "_bsh", K.bsh)) && (p._bsh = n);
          (r = qb(r)) && (p.jsh = r);
          h.hintInFragment ? D(p, l) : D(p, k);
          f = fb(f, k, l, h.paramsSerializer);
          l = B();
          D(vd, l);
          D(h.attributes, l);
          l.name = l.id = e;
          l.src = f;
          h.eurl = f;
          k = h || {};
          p = !!k.allowPost;
          if (k.forcePost || p && 2e3 < f.length) {
            k = I(f);
            l.src = "";
            h.dropDataPostorigin || (l["data-postorigin"] = f);
            f = zd(b2, c, l, e);
            if (-1 != navigator.userAgent.indexOf("WebKit")) {
              var u = f.contentWindow.document;
              u.open();
              l = u.createElement("div");
              p = {};
              r = e + "_inner";
              p.name = r;
              p.src = "";
              p.style = "display:none";
              zd(b2, l, p, r, h);
            }
            l = (h = k.query[0]) ? h.split("&") : [];
            h = [];
            for (p = 0; p < l.length; p++)
              r = l[p].split("=", 2), h.push([decodeURIComponent(r[0]), decodeURIComponent(r[1])]);
            k.query = [];
            l = db(k);
            E(ib.test(l), "Invalid URL: " + l);
            k = b2.createElement("form");
            k.method = "POST";
            k.target = e;
            k.style.display = "none";
            e = l instanceof v ? l : Fa(l);
            xa(k, "HTMLFormElement").action = Da(e);
            for (e = 0; e < h.length; e++)
              l = b2.createElement("input"), l.type = "hidden", l.name = h[e][0], l.value = h[e][1], k.appendChild(l);
            c.appendChild(k);
            k.submit();
            k.parentNode.removeChild(k);
            u && u.close();
            u = f;
          } else
            u = zd(b2, c, l, e, h);
          g.iframeNode = u;
          g.id = u.getAttribute("id");
          u = g.id;
          c = B();
          c.id = u;
          c.userParams = g.userParams;
          c.url = g.url;
          c.type = g.type;
          c.state = 1;
          R[u] = c;
          u = g;
        } else
          u = null;
        u && ((g = u.id) && d.push(g), ae(a2, u));
    }
  }, he = function(a2, b2, c) {
    if (a2 && 1 === a2.nodeType && b2) {
      if (c)
        return 1;
      if (X[b2]) {
        if (pb[a2.nodeName.toLowerCase()])
          return (a2 = a2.innerHTML) && a2.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") ? 0 : 1;
      } else {
        if (Td[b2])
          return 0;
        if (Sd[b2])
          return 1;
      }
    }
    return null;
  }, Qd = function(a2, b2) {
    var c = b2.type;
    delete b2.type;
    var d = ("string" === typeof a2 ? document.getElementById(a2) : a2) || void 0;
    if (d) {
      a2 = {};
      for (var e in b2)
        C(b2, e) && (a2[e.toLowerCase()] = b2[e]);
      a2.rd = 1;
      (b2 = !!a2.ri) && delete a2.ri;
      e = [];
      be(c, d, a2, e, 0, b2, void 0);
      ce(c, e);
    } else
      pc("string" === "gapi." + c + ".render: missing element " + typeof a2 ? a2 : "");
  };
  A(F, "platform", {}).go = Zd;
  $d = function(a2) {
    for (var b2 = ["_c", "jsl", "h"], c = 0; c < b2.length && a2; c++)
      a2 = a2[b2[c]];
    b2 = qb(La.href);
    return !a2 || 0 != a2.indexOf("n;") && 0 != b2.indexOf("n;") && a2 !== b2;
  };
  ce = function(a2, b2) {
    ie(a2, b2);
  };
  var lb = function(a2) {
    Yd(a2, true);
  }, je = function(a2, b2) {
    b2 = b2 || [];
    for (var c = 0; c < b2.length; ++c)
      a2(b2[c]);
    for (a2 = 0; a2 < b2.length; a2++)
      de(b2[a2]);
  };
  N.push(["platform", function(a2, b2, c) {
    Vd = c;
    b2 && Ud.push(b2);
    je(ee, a2);
    je(fe, c._c.annotation);
    je(ge, c._c.bimodal);
    ic();
    gc();
    if ("explicit" != Q("parsetags")) {
      rb(a2);
      nc(mc()) && !Q("disableRealtimeCallback") && rc();
      if (c && (a2 = c.callback)) {
        var d = Ya(a2);
        delete c.callback;
      }
      nb(function() {
        lb(d);
      });
    }
  }]);
  F._pl = true;
  var ke = function(a2) {
    a2 = (a2 = R[a2]) ? a2.oid : void 0;
    if (a2) {
      var b2 = z.getElementById(a2);
      b2 && b2.parentNode.removeChild(b2);
      delete R[a2];
      ke(a2);
    }
  };
  var le = /^\{h:'/, me = /^!_/, ne = "", ie = function(a2, b2) {
    function c() {
      jb("message", d, "remove", "de");
    }
    function d(f) {
      var g = f.data, h = f.origin;
      if (oe(g, b2)) {
        var k = e;
        e = false;
        k && L("rqe");
        pe(a2, function() {
          k && L("rqd");
          c();
          for (var l = A(K, "RPMQ", []), n = 0; n < l.length; n++)
            l[n]({ data: g, origin: h });
        });
      }
    }
    if (0 !== b2.length) {
      ne = H(La.href, "pfname", "");
      var e = true;
      jb("message", d, "add", "at");
      ac(a2, c);
    }
  }, oe = function(a2, b2) {
    a2 = String(a2);
    if (le.test(a2))
      return true;
    var c = false;
    me.test(a2) && (c = true, a2 = a2.substr(2));
    if (!/^\{/.test(a2))
      return false;
    var d = Zc(a2);
    if (!d)
      return false;
    a2 = d.f;
    if (d.s && a2 && -1 != Oa.call(b2, a2)) {
      if ("_renderstart" === d.s || d.s === ne + "/" + a2 + "::_renderstart") {
        if (d = d.a && d.a[c ? 0 : 1], b2 = z.getElementById(a2), tc(a2, 2), d && b2 && d.width && d.height) {
          a: {
            c = b2.parentNode;
            a2 = d || {};
            if (qc()) {
              var e = b2.id;
              if (e) {
                d = (d = R[e]) ? d.state : void 0;
                if (1 === d || 4 === d)
                  break a;
                ke(e);
              }
            }
            (d = c.nextSibling) && d.getAttribute && d.getAttribute("data-gapistub") && (c.parentNode.removeChild(d), c.style.cssText = "");
            d = a2.width;
            var f = a2.height, g = c.style;
            g.textIndent = "0";
            g.margin = "0";
            g.padding = "0";
            g.background = "transparent";
            g.borderStyle = "none";
            g.cssFloat = "none";
            g.styleFloat = "none";
            g.lineHeight = "normal";
            g.fontSize = "1px";
            g.verticalAlign = "baseline";
            c = c.style;
            c.display = "inline-block";
            g = b2.style;
            g.position = "static";
            g.left = "0";
            g.top = "0";
            g.visibility = "visible";
            d && (c.width = g.width = d + "px");
            f && (c.height = g.height = f + "px");
            a2.verticalAlign && (c.verticalAlign = a2.verticalAlign);
            e && tc(e, 3);
          }
          b2["data-csi-wdt"] = (/* @__PURE__ */ new Date()).getTime();
        }
      }
      return true;
    }
    return false;
  }, pe = function(a2, b2) {
    ac(a2, b2);
  };
  var qe = function(a2, b2) {
    this.L = a2;
    a2 = b2 || {};
    this.fa = Number(a2.maxAge) || 0;
    this.U = a2.domain;
    this.X = a2.path;
    this.ga = !!a2.secure;
  };
  qe.prototype.read = function() {
    for (var a2 = this.L + "=", b2 = document.cookie.split(/;\s*/), c = 0; c < b2.length; ++c) {
      var d = b2[c];
      if (0 == d.indexOf(a2))
        return d.substr(a2.length);
    }
  };
  qe.prototype.write = function(a2, b2) {
    if (!re.test(this.L))
      throw "Invalid cookie name";
    if (!se.test(a2))
      throw "Invalid cookie value";
    a2 = this.L + "=" + a2;
    this.U && (a2 += ";domain=" + this.U);
    this.X && (a2 += ";path=" + this.X);
    b2 = "number" === typeof b2 ? b2 : this.fa;
    if (0 <= b2) {
      var c = /* @__PURE__ */ new Date();
      c.setSeconds(c.getSeconds() + b2);
      a2 += ";expires=" + c.toUTCString();
    }
    this.ga && (a2 += ";secure");
    document.cookie = a2;
    return true;
  };
  qe.prototype.clear = function() {
    this.write("", 0);
  };
  var se = /^[-+/_=.:|%&a-zA-Z0-9@]*$/, re = /^[A-Z_][A-Z0-9_]{0,63}$/;
  qe.iterate = function(a2) {
    for (var b2 = document.cookie.split(/;\s*/), c = 0; c < b2.length; ++c) {
      var d = b2[c].split("="), e = d.shift();
      a2(e, d.join("="));
    }
  };
  var te = function(a2) {
    this.B = a2;
  };
  te.prototype.read = function() {
    if (Y.hasOwnProperty(this.B))
      return Y[this.B];
  };
  te.prototype.write = function(a2) {
    Y[this.B] = a2;
    return true;
  };
  te.prototype.clear = function() {
    delete Y[this.B];
  };
  var Y = {};
  te.iterate = function(a2) {
    for (var b2 in Y)
      Y.hasOwnProperty(b2) && a2(b2, Y[b2]);
  };
  var ue = "https:" === window.location.protocol, ve = ue || "http:" === window.location.protocol ? qe : te, we = function(a2) {
    var b2 = a2.substr(1), c = "", d = window.location.hostname;
    if ("" !== b2) {
      c = parseInt(b2, 10);
      if (isNaN(c))
        return null;
      b2 = d.split(".");
      if (b2.length < c - 1)
        return null;
      b2.length == c - 1 && (d = "." + d);
    } else
      d = "";
    return { i: "S" == a2.charAt(0), domain: d, l: c };
  }, xe = function() {
    var a2, b2 = null;
    ve.iterate(function(c, d) {
      0 === c.indexOf("G_AUTHUSER_") && (c = we(c.substring(11)), !a2 || c.i && !a2.i || c.i == a2.i && c.l > a2.l) && (a2 = c, b2 = d);
    });
    return { ea: a2, F: b2 };
  };
  var ye = function(a2) {
    if (0 !== a2.indexOf("GCSC"))
      return null;
    var b2 = { W: false };
    a2 = a2.substr(4);
    if (!a2)
      return b2;
    var c = a2.charAt(0);
    a2 = a2.substr(1);
    var d = a2.lastIndexOf("_");
    if (-1 == d)
      return b2;
    var e = we(a2.substr(d + 1));
    if (null == e)
      return b2;
    a2 = a2.substring(0, d);
    if ("_" !== a2.charAt(0))
      return b2;
    d = "E" === c && e.i;
    return !d && ("U" !== c || e.i) || d && !ue ? b2 : { W: true, i: d, ja: a2.substr(1), domain: e.domain, l: e.l };
  }, ze = function(a2) {
    if (!a2)
      return [];
    a2 = a2.split("=");
    return a2[1] ? a2[1].split("|") : [];
  }, Ae = function(a2) {
    a2 = a2.split(":");
    return {
      clientId: a2[0].split("=")[1],
      ia: ze(a2[1]),
      la: ze(a2[2]),
      ka: ze(a2[3])
    };
  }, Be = function() {
    var a2 = xe(), b2 = a2.ea;
    a2 = a2.F;
    if (null !== a2) {
      var c;
      ve.iterate(function(f, g) {
        (f = ye(f)) && f.W && f.i == b2.i && f.l == b2.l && (c = g);
      });
      if (c) {
        var d = Ae(c), e = d && d.ia[Number(a2)];
        d = d && d.clientId;
        if (e)
          return { F: a2, ha: e, clientId: d };
      }
    }
    return null;
  };
  var Z = function() {
    this.T = Ce;
  };
  Z.prototype.$ = function() {
    this.K || (this.v = 0, this.K = true, this.Y());
  };
  Z.prototype.Y = function() {
    this.K && (this.T() ? this.v = this.R : this.v = Math.min(2 * (this.v || this.R), 120), window.setTimeout(na(this.Y, this), 1e3 * this.v));
  };
  Z.prototype.v = 0;
  Z.prototype.R = 2;
  Z.prototype.T = null;
  Z.prototype.K = false;
  for (var De = 0; 64 > De; ++De)
    ;
  var Ee = null;
  qc = function() {
    return K.oa = true;
  };
  rc = function() {
    K.oa = true;
    var a2 = Be();
    (a2 = a2 && a2.F) && hc("googleapis.config/sessionIndex", a2);
    Ee || (Ee = A(K, "ss", new Z()));
    a2 = Ee;
    a2.$ && a2.$();
  };
  var Ce = function() {
    var a2 = Be(), b2 = a2 && a2.ha || null, c = a2 && a2.clientId;
    ac("auth", { callback: function() {
      var d = x.gapi.auth, e = { client_id: c, session_state: b2 };
      d.checkSessionState(e, function(f) {
        var g = e.session_state, h = Q("isLoggedIn");
        f = Q("debug/forceIm") ? false : g && f || !g && !f;
        if (h = h != f)
          hc("isLoggedIn", f), rc(), Rd(), f || ((f = d.signOut) ? f() : (f = d.setToken) && f(null));
        f = mc();
        var k = Q("savedUserState");
        g = d._guss(f.cookiepolicy);
        k = k != g && "undefined" != typeof k;
        hc("savedUserState", g);
        (h || k) && nc(f) && !Q("disableRealtimeCallback") && d._pimf(
          f,
          true
        );
      });
    } });
    return true;
  };
  L("bs0", true, window.gapi._bs);
  L("bs1", true);
  delete window.gapi._bs;
}).call(void 0);
var gapiComplete = gapi.load("", { callback: window["gapi_onload"], _c: { "jsl": { "ci": { "deviceType": "desktop", "oauth-flow": { "authUrl": "https://accounts.google.com/o/oauth2/auth", "proxyUrl": "https://accounts.google.com/o/oauth2/postmessageRelay", "disableOpt": true, "idpIframeUrl": "https://accounts.google.com/o/oauth2/iframe", "usegapi": false }, "debug": { "reportExceptionRate": 0.05, "forceIm": false, "rethrowException": false, "host": "https://apis.google.com" }, "enableMultilogin": true, "googleapis.config": { "auth": { "useFirstPartyAuthV2": true } }, "isPlusUser": false, "inline": { "css": 1 }, "disableRealtimeCallback": false, "drive_share": { "skipInitCommand": true }, "csi": { "rate": 0.01 }, "client": { "cors": false }, "isLoggedIn": true, "signInDeprecation": { "rate": 0 }, "include_granted_scopes": true, "llang": "pt", "iframes": { "youtube": { "params": { "location": ["search", "hash"] }, "url": ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1", "methods": ["scroll", "openwindow"] }, "ytsubscribe": { "url": "https://www.youtube.com/subscribe_embed?usegapi=1" }, "plus_circle": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi=1" }, "plus_share": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare=true&usegapi=1" }, "rbr_s": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller" }, ":source:": "3p", "playemm": { "url": "https://play.google.com/work/embedded/search?usegapi=1&usegapi=1" }, "savetoandroidpay": { "url": "https://pay.google.com/gp/v/widget/save" }, "blogger": { "params": { "location": ["search", "hash"] }, "url": ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1", "methods": ["scroll", "openwindow"] }, "evwidget": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix:_/events/widget?usegapi=1" }, "partnersbadge": { "url": "https://www.gstatic.com/partners/badge/templates/badge.html?usegapi=1" }, "dataconnector": { "url": "https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi=1" }, "surveyoptin": { "url": "https://www.google.com/shopping/customerreviews/optin?usegapi=1" }, ":socialhost:": "https://apis.google.com", "shortlists": { "url": "" }, "hangout": { "url": "https://talkgadget.google.com/:session_prefix:talkgadget/_/widget" }, "plus_followers": { "params": { "url": "" }, "url": ":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1" }, "post": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi=1" }, ":gplus_url:": "https://plus.google.com", "signin": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix:_/widget/render/signin?usegapi=1", "methods": ["onauth"] }, "rbr_i": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation" }, "share": { "url": ":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi=1" }, "plusone": { "params": { "count": "", "size": "", "url": "" }, "url": ":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi=1" }, "comments": { "params": { "location": ["search", "hash"] }, "url": ":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1", "methods": ["scroll", "openwindow"] }, ":im_socialhost:": "https://plus.googleapis.com", "backdrop": { "url": "https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi=1" }, "visibility": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix:_/widget/render/visibility?usegapi=1" }, "autocomplete": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix:_/widget/render/autocomplete" }, "additnow": { "url": "https://apis.google.com/marketplace/button?usegapi=1", "methods": ["launchurl"] }, ":signuphost:": "https://plus.google.com", "ratingbadge": { "url": "https://www.google.com/shopping/customerreviews/badge?usegapi=1" }, "appcirclepicker": { "url": ":socialhost:/:session_prefix:_/widget/render/appcirclepicker" }, "follow": { "url": ":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1" }, "community": { "url": ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1" }, "sharetoclassroom": { "url": "https://classroom.google.com/sharewidget?usegapi=1" }, "ytshare": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi=1" }, "plus": { "url": ":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1" }, "family_creation": { "params": { "url": "" }, "url": "https://families.google.com/webcreation?usegapi=1&usegapi=1" }, "commentcount": { "url": ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1" }, "configurator": { "url": ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1" }, "zoomableimage": { "url": "https://ssl.gstatic.com/microscope/embed/" }, "appfinder": { "url": "https://workspace.google.com/:session_prefix:marketplace/appfinder?usegapi=1" }, "savetowallet": { "url": "https://pay.google.com/gp/v/widget/save" }, "person": { "url": ":socialhost:/:session_prefix:_/widget/render/person?usegapi=1" }, "savetodrive": { "url": "https://drive.google.com/savetodrivebutton?usegapi=1", "methods": ["save"] }, "page": { "url": ":socialhost:/:session_prefix:_/widget/render/page?usegapi=1" }, "card": { "url": ":socialhost:/:session_prefix:_/hovercard/card" } } }, "h": "m;/_/scs/apps-static/_/js/k=oz.gapi.pt_BR.l4Bv_WkVC6g.O/am=wQE/d=1/ct=zgms/rs=AGLTcCOuH5S2uqmF6E8zOW7n3yiqiwhzNQ/m=__features__", "u": "https://apis.google.com/js/platform.js", "hee": true, "fp": "821a251b140e4add32f87f4a7a08f044a59aa0e9", "dpo": false }, "platform": ["additnow", "backdrop", "blogger", "comments", "commentcount", "community", "donation", "family_creation", "follow", "hangout", "health", "page", "partnersbadge", "person", "playemm", "playreview", "plus", "plusone", "post", "ratingbadge", "savetoandroidpay", "savetodrive", "savetowallet", "sharetoclassroom", "shortlists", "signin2", "surveyoptin", "visibility", "youtube", "ytsubscribe", "zoomableimage"], "fp": "821a251b140e4add32f87f4a7a08f044a59aa0e9", "annotation": ["interactivepost", "recobar", "signin2", "autocomplete", "profile"], "bimodal": ["signin", "share"] } });

// node_modules/gapi-script/index.js
var loadAuth2 = async function(gapiScript, clientId, scopes) {
  return new Promise((resolve) => {
    gapiScript.load("auth2", () => {
      resolve(gapiScript.auth2.init({
        client_id: clientId,
        scope: scopes
      }));
    });
  });
};
var loadAuth2WithProps = async function(gapiScript, props) {
  return new Promise((resolve) => {
    gapiScript.load("auth2", () => {
      resolve(gapiScript.auth2.init(props));
    });
  });
};
var loadClientAuth2 = async function(gapiScript, clientId, scopes) {
  return new Promise((resolve) => {
    gapiScript.load("client", () => {
      resolve(gapiScript.client.init({
        client_id: clientId,
        scope: scopes
      }));
    });
    gapiScript.load("auth2", () => {
      resolve(gapiScript.client.init({
        client_id: clientId,
        scope: scopes
      }));
    });
  });
};
var loadGapiInsideDOM = async function() {
  return new Promise((resolve) => {
    const element = document.getElementsByTagName("script")[0];
    const js = document.createElement("script");
    js.id = "google-platform";
    js.src = "//apis.google.com/js/platform.js";
    js.async = true;
    js.defer = true;
    element.parentNode.insertBefore(js, element);
    js.onload = async () => {
      resolve(window.gapi);
    };
  });
};
export {
  gapi,
  gapiComplete,
  loadAuth2,
  loadAuth2WithProps,
  loadClientAuth2,
  loadGapiInsideDOM
};
//# sourceMappingURL=gapi-script.js.map
