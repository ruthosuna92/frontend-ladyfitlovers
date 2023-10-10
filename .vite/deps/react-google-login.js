import {
  require_react
} from "./chunk-ZAUFE7H7.js";
import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/react-google-login/dist/google-login.js
var require_google_login = __commonJS({
  "node_modules/react-google-login/dist/google-login.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t(require_react()) : "function" == typeof define && define.amd ? define(["react"], t) : "object" == typeof exports ? exports.GoogleLogin = t(require_react()) : e.GoogleLogin = t(e.react);
    }("undefined" != typeof self ? self : exports, function(e) {
      return o = {}, t.m = n = [function(t2) {
        t2.exports = e;
      }, function(e2, t2, n2) {
        e2.exports = n2(2)();
      }, function(e2, t2, n2) {
        "use strict";
        function o2() {
        }
        function r() {
        }
        var i = n2(3);
        r.resetWarningCache = o2, e2.exports = function() {
          function e3(e4, t4, n4, o3, r2, a) {
            if (a !== i) {
              var c = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
              throw c.name = "Invariant Violation", c;
            }
          }
          function t3() {
            return e3;
          }
          var n3 = { array: e3.isRequired = e3, bool: e3, func: e3, number: e3, object: e3, string: e3, symbol: e3, any: e3, arrayOf: t3, element: e3, elementType: e3, instanceOf: t3, node: e3, objectOf: t3, oneOf: t3, oneOfType: t3, shape: t3, exact: t3, checkPropTypes: r, resetWarningCache: o2 };
          return n3.PropTypes = n3;
        };
      }, function(e2) {
        "use strict";
        e2.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      }, function(e2, t2, n2) {
        "use strict";
        function o2(e3, t3) {
          return function(e4) {
            if (Array.isArray(e4))
              return e4;
          }(e3) || function(e4, t4) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e4)) {
              var n3 = [], o3 = true, r2 = false, i2 = void 0;
              try {
                for (var a2, c2 = e4[Symbol.iterator](); !(o3 = (a2 = c2.next()).done) && (n3.push(a2.value), !t4 || n3.length !== t4); o3 = true)
                  ;
              } catch (e5) {
                r2 = true, i2 = e5;
              } finally {
                try {
                  o3 || null == c2.return || c2.return();
                } finally {
                  if (r2)
                    throw i2;
                }
              }
              return n3;
            }
          }(e3, t3) || function(e4, t4) {
            if (e4) {
              if ("string" == typeof e4)
                return r(e4, t4);
              var n3 = Object.prototype.toString.call(e4).slice(8, -1);
              return "Object" === n3 && e4.constructor && (n3 = e4.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(n3) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? r(e4, t4) : void 0;
            }
          }(e3, t3) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function r(e3, t3) {
          null != t3 && t3 <= e3.length || (t3 = e3.length);
          for (var n3 = 0, o3 = Array(t3); n3 < t3; n3++)
            o3[n3] = e3[n3];
          return o3;
        }
        function i(e3, t3) {
          return function(e4) {
            if (Array.isArray(e4))
              return e4;
          }(e3) || function(e4, t4) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e4)) {
              var n3 = [], o3 = true, r2 = false, i2 = void 0;
              try {
                for (var a2, c2 = e4[Symbol.iterator](); !(o3 = (a2 = c2.next()).done) && (n3.push(a2.value), !t4 || n3.length !== t4); o3 = true)
                  ;
              } catch (e5) {
                r2 = true, i2 = e5;
              } finally {
                try {
                  o3 || null == c2.return || c2.return();
                } finally {
                  if (r2)
                    throw i2;
                }
              }
              return n3;
            }
          }(e3, t3) || function(e4, t4) {
            if (e4) {
              if ("string" == typeof e4)
                return a(e4, t4);
              var n3 = Object.prototype.toString.call(e4).slice(8, -1);
              return "Object" === n3 && e4.constructor && (n3 = e4.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(n3) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? a(e4, t4) : void 0;
            }
          }(e3, t3) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function a(e3, t3) {
          null != t3 && t3 <= e3.length || (t3 = e3.length);
          for (var n3 = 0, o3 = Array(t3); n3 < t3; n3++)
            o3[n3] = e3[n3];
          return o3;
        }
        function c(e3, t3) {
          return function(e4) {
            if (Array.isArray(e4))
              return e4;
          }(e3) || function(e4, t4) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e4)) {
              var n3 = [], o3 = true, r2 = false, i2 = void 0;
              try {
                for (var a2, c2 = e4[Symbol.iterator](); !(o3 = (a2 = c2.next()).done) && (n3.push(a2.value), !t4 || n3.length !== t4); o3 = true)
                  ;
              } catch (e5) {
                r2 = true, i2 = e5;
              } finally {
                try {
                  o3 || null == c2.return || c2.return();
                } finally {
                  if (r2)
                    throw i2;
                }
              }
              return n3;
            }
          }(e3, t3) || function(e4, t4) {
            if (e4) {
              if ("string" == typeof e4)
                return u(e4, t4);
              var n3 = Object.prototype.toString.call(e4).slice(8, -1);
              return "Object" === n3 && e4.constructor && (n3 = e4.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(n3) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? u(e4, t4) : void 0;
            }
          }(e3, t3) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function u(e3, t3) {
          null != t3 && t3 <= e3.length || (t3 = e3.length);
          for (var n3 = 0, o3 = Array(t3); n3 < t3; n3++)
            o3[n3] = e3[n3];
          return o3;
        }
        function l(e3, t3) {
          return function(e4) {
            if (Array.isArray(e4))
              return e4;
          }(e3) || function(e4, t4) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e4)) {
              var n3 = [], o3 = true, r2 = false, i2 = void 0;
              try {
                for (var a2, c2 = e4[Symbol.iterator](); !(o3 = (a2 = c2.next()).done) && (n3.push(a2.value), !t4 || n3.length !== t4); o3 = true)
                  ;
              } catch (e5) {
                r2 = true, i2 = e5;
              } finally {
                try {
                  o3 || null == c2.return || c2.return();
                } finally {
                  if (r2)
                    throw i2;
                }
              }
              return n3;
            }
          }(e3, t3) || function(e4, t4) {
            if (e4) {
              if ("string" == typeof e4)
                return s(e4, t4);
              var n3 = Object.prototype.toString.call(e4).slice(8, -1);
              return "Object" === n3 && e4.constructor && (n3 = e4.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(n3) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? s(e4, t4) : void 0;
            }
          }(e3, t3) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function s(e3, t3) {
          null != t3 && t3 <= e3.length || (t3 = e3.length);
          for (var n3 = 0, o3 = Array(t3); n3 < t3; n3++)
            o3[n3] = e3[n3];
          return o3;
        }
        function f(e3, t3, n3, o3, r2, i2) {
          var a2 = e3.getElementsByTagName(t3)[0], c2 = a2, u2 = a2;
          (u2 = e3.createElement(t3)).id = n3, u2.src = o3, c2 && c2.parentNode ? c2.parentNode.insertBefore(u2, c2) : e3.head.appendChild(u2), u2.onerror = i2, u2.onload = r2;
        }
        function d(e3, t3) {
          var n3 = e3.getElementById(t3);
          n3 && n3.parentNode.removeChild(n3);
        }
        function p(e3) {
          return b.a.createElement("span", { style: { paddingRight: 10, fontWeight: 500, paddingLeft: e3.icon ? 0 : 10, paddingTop: 10, paddingBottom: 10 } }, e3.children);
        }
        function g(e3) {
          return b.a.createElement("div", { style: { marginRight: 10, background: e3.active ? "#eee" : "#fff", padding: 10, borderRadius: 2 } }, b.a.createElement("svg", { width: "18", height: "18", xmlns: "http://www.w3.org/2000/svg" }, b.a.createElement("g", { fill: "#000", fillRule: "evenodd" }, b.a.createElement("path", { d: "M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z", fill: "#EA4335" }), b.a.createElement("path", { d: "M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z", fill: "#4285F4" }), b.a.createElement("path", { d: "M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z", fill: "#FBBC05" }), b.a.createElement("path", { d: "M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z", fill: "#34A853" }), b.a.createElement("path", { fill: "none", d: "M0 0h18v18H0z" }))));
        }
        function y(e3) {
          var t3 = i(Object(m.useState)(false), 2), n3 = t3[0], o3 = t3[1], r2 = i(Object(m.useState)(false), 2), a2 = r2[0], c2 = r2[1], u2 = e3.tag, l2 = e3.type, s2 = e3.className, f2 = e3.disabledStyle, d2 = e3.buttonText, y2 = e3.children, v2 = e3.render, S2 = e3.theme, j2 = e3.icon, O2 = e3.disabled, x = h({ onSuccess: e3.onSuccess, onAutoLoadFinished: e3.onAutoLoadFinished, onRequest: e3.onRequest, onFailure: e3.onFailure, onScriptLoadFailure: e3.onScriptLoadFailure, clientId: e3.clientId, cookiePolicy: e3.cookiePolicy, loginHint: e3.loginHint, hostedDomain: e3.hostedDomain, autoLoad: e3.autoLoad, isSignedIn: e3.isSignedIn, fetchBasicProfile: e3.fetchBasicProfile, redirectUri: e3.redirectUri, discoveryDocs: e3.discoveryDocs, uxMode: e3.uxMode, scope: e3.scope, accessType: e3.accessType, responseType: e3.responseType, jsSrc: e3.jsSrc, prompt: e3.prompt }), I = x.signIn, w = O2 || !x.loaded;
          if (v2)
            return v2({ onClick: I, disabled: w });
          var k = { backgroundColor: "dark" === S2 ? "rgb(66, 133, 244)" : "#fff", display: "inline-flex", alignItems: "center", color: "dark" === S2 ? "#fff" : "rgba(0, 0, 0, .54)", boxShadow: "0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)", padding: 0, borderRadius: 2, border: "1px solid transparent", fontSize: 14, fontWeight: "500", fontFamily: "Roboto, sans-serif" }, A = { cursor: "pointer", backgroundColor: "dark" === S2 ? "#3367D6" : "#eee", color: "dark" === S2 ? "#fff" : "rgba(0, 0, 0, .54)", opacity: 1 }, _ = w ? Object.assign({}, k, f2) : a2 ? Object.assign({}, k, A) : n3 ? Object.assign({}, k, { cursor: "pointer", opacity: 0.9 }) : k;
          return b.a.createElement(u2, { onMouseEnter: function() {
            return o3(true);
          }, onMouseLeave: function() {
            o3(false), c2(false);
          }, onMouseDown: function() {
            return c2(true);
          }, onMouseUp: function() {
            return c2(false);
          }, onClick: I, style: _, type: l2, disabled: w, className: s2 }, [j2 && b.a.createElement(g, { key: 1, active: a2 }), b.a.createElement(p, { icon: j2, key: 2 }, y2 || d2)]);
        }
        n2.r(t2), n2.d(t2, "default", function() {
          return S;
        }), n2.d(t2, "GoogleLogin", function() {
          return S;
        }), n2.d(t2, "GoogleLogout", function() {
          return O;
        }), n2.d(t2, "useGoogleLogin", function() {
          return h;
        }), n2.d(t2, "useGoogleLogout", function() {
          return j;
        });
        var m = n2(0), b = n2.n(m), h = (n2(1), function(e3) {
          function t3(e4) {
            var t4 = e4.getBasicProfile(), n4 = e4.getAuthResponse(true);
            e4.googleId = t4.getId(), e4.tokenObj = n4, e4.tokenId = n4.id_token, e4.accessToken = n4.access_token, e4.profileObj = { googleId: t4.getId(), imageUrl: t4.getImageUrl(), email: t4.getEmail(), name: t4.getName(), givenName: t4.getGivenName(), familyName: t4.getFamilyName() }, i2(e4);
          }
          function n3(e4) {
            if (e4 && e4.preventDefault(), P) {
              var n4 = window.gapi.auth2.getAuthInstance(), o3 = { prompt: L };
              p2(), "code" === _ ? n4.grantOfflineAccess(o3).then(function(e5) {
                return i2(e5);
              }, function(e5) {
                return l2(e5);
              }) : n4.signIn(o3).then(function(e5) {
                return t3(e5);
              }, function(e5) {
                return l2(e5);
              });
            }
          }
          var r2 = e3.onSuccess, i2 = void 0 === r2 ? function() {
          } : r2, a2 = e3.onAutoLoadFinished, c2 = void 0 === a2 ? function() {
          } : a2, u2 = e3.onFailure, l2 = void 0 === u2 ? function() {
          } : u2, s2 = e3.onRequest, p2 = void 0 === s2 ? function() {
          } : s2, g2 = e3.onScriptLoadFailure, y2 = e3.clientId, b2 = e3.cookiePolicy, h2 = e3.loginHint, v2 = e3.hostedDomain, S2 = e3.autoLoad, j2 = e3.isSignedIn, O2 = e3.fetchBasicProfile, x = e3.redirectUri, I = e3.discoveryDocs, w = e3.uxMode, k = e3.scope, A = e3.accessType, _ = e3.responseType, E = e3.jsSrc, T = void 0 === E ? "https://apis.google.com/js/api.js" : E, L = e3.prompt, M = o2(Object(m.useState)(false), 2), P = M[0], C = M[1];
          return Object(m.useEffect)(function() {
            var e4 = false, n4 = g2 || l2;
            return f(document, "script", "google-login", T, function() {
              var o3 = { client_id: y2, cookie_policy: b2, login_hint: h2, hosted_domain: v2, fetch_basic_profile: O2, discoveryDocs: I, ux_mode: w, redirect_uri: x, scope: k, access_type: A };
              "code" === _ && (o3.access_type = "offline"), window.gapi.load("auth2", function() {
                var r3 = window.gapi.auth2.getAuthInstance();
                r3 ? r3.then(function() {
                  e4 || (j2 && r3.isSignedIn.get() ? (C(true), c2(true), t3(r3.currentUser.get())) : (C(true), c2(false)));
                }, function(e5) {
                  l2(e5);
                }) : window.gapi.auth2.init(o3).then(function(n5) {
                  if (!e4) {
                    C(true);
                    var o4 = j2 && n5.isSignedIn.get();
                    c2(o4), o4 && t3(n5.currentUser.get());
                  }
                }, function(e5) {
                  C(true), c2(false), n4(e5);
                });
              });
            }, function(e5) {
              n4(e5);
            }), function() {
              e4 = true, d(document, "google-login");
            };
          }, []), Object(m.useEffect)(function() {
            S2 && n3();
          }, [P]), { signIn: n3, loaded: P };
        });
        function v(e3) {
          var t3 = l(Object(m.useState)(false), 2), n3 = t3[0], o3 = t3[1], r2 = l(Object(m.useState)(false), 2), i2 = r2[0], a2 = r2[1], c2 = e3.tag, u2 = e3.type, s2 = e3.className, f2 = e3.disabledStyle, d2 = e3.buttonText, y2 = e3.children, h2 = e3.render, v2 = e3.theme, S2 = e3.icon, O2 = e3.disabled, x = j({ jsSrc: e3.jsSrc, onFailure: e3.onFailure, onScriptLoadFailure: e3.onScriptLoadFailure, clientId: e3.clientId, cookiePolicy: e3.cookiePolicy, loginHint: e3.loginHint, hostedDomain: e3.hostedDomain, fetchBasicProfile: e3.fetchBasicProfile, discoveryDocs: e3.discoveryDocs, uxMode: e3.uxMode, redirectUri: e3.redirectUri, scope: e3.scope, accessType: e3.accessType, onLogoutSuccess: e3.onLogoutSuccess }), I = x.signOut, w = O2 || !x.loaded;
          if (h2)
            return h2({ onClick: I, disabled: w });
          var k = { backgroundColor: "dark" === v2 ? "rgb(66, 133, 244)" : "#fff", display: "inline-flex", alignItems: "center", color: "dark" === v2 ? "#fff" : "rgba(0, 0, 0, .54)", boxShadow: "0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)", padding: 0, borderRadius: 2, border: "1px solid transparent", fontSize: 14, fontWeight: "500", fontFamily: "Roboto, sans-serif" }, A = { cursor: "pointer", backgroundColor: "dark" === v2 ? "#3367D6" : "#eee", color: "dark" === v2 ? "#fff" : "rgba(0, 0, 0, .54)", opacity: 1 }, _ = w ? Object.assign({}, k, f2) : i2 ? Object.assign({}, k, A) : n3 ? Object.assign({}, k, { cursor: "pointer", opacity: 0.9 }) : k;
          return b.a.createElement(c2, { onMouseEnter: function() {
            return o3(true);
          }, onMouseLeave: function() {
            o3(false), a2(false);
          }, onMouseDown: function() {
            return a2(true);
          }, onMouseUp: function() {
            return a2(false);
          }, onClick: I, style: _, type: u2, disabled: w, className: s2 }, [S2 && b.a.createElement(g, { key: 1, active: i2 }), b.a.createElement(p, { icon: S2, key: 2 }, y2 || d2)]);
        }
        y.defaultProps = { type: "button", tag: "button", buttonText: "Sign in with Google", scope: "profile email", accessType: "online", prompt: "", cookiePolicy: "single_host_origin", fetchBasicProfile: true, isSignedIn: false, uxMode: "popup", disabledStyle: { opacity: 0.6 }, icon: true, theme: "light", onRequest: function() {
        } };
        var S = y, j = function(e3) {
          var t3 = e3.jsSrc, n3 = void 0 === t3 ? "https://apis.google.com/js/api.js" : t3, o3 = e3.onFailure, r2 = e3.onScriptLoadFailure, i2 = e3.clientId, a2 = e3.cookiePolicy, u2 = e3.loginHint, l2 = e3.hostedDomain, s2 = e3.fetchBasicProfile, p2 = e3.discoveryDocs, g2 = e3.uxMode, y2 = e3.redirectUri, b2 = e3.scope, h2 = e3.accessType, v2 = e3.onLogoutSuccess, S2 = c(Object(m.useState)(false), 2), j2 = S2[0], O2 = S2[1], x = Object(m.useCallback)(function() {
            if (window.gapi) {
              var e4 = window.gapi.auth2.getAuthInstance();
              null != e4 && e4.then(function() {
                e4.signOut().then(function() {
                  e4.disconnect(), v2();
                });
              }, function(e5) {
                return o3(e5);
              });
            }
          }, [v2]);
          return Object(m.useEffect)(function() {
            var e4 = r2 || o3;
            return f(document, "script", "google-login", n3, function() {
              var t4 = { client_id: i2, cookie_policy: a2, login_hint: u2, hosted_domain: l2, fetch_basic_profile: s2, discoveryDocs: p2, ux_mode: g2, redirect_uri: y2, scope: b2, access_type: h2 };
              window.gapi.load("auth2", function() {
                window.gapi.auth2.getAuthInstance() ? O2(true) : window.gapi.auth2.init(t4).then(function() {
                  return O2(true);
                }, function(t5) {
                  return e4(t5);
                });
              });
            }, function(t4) {
              e4(t4);
            }), function() {
              d(document, "google-login");
            };
          }, []), { signOut: x, loaded: j2 };
        };
        v.defaultProps = { type: "button", tag: "button", buttonText: "Logout of Google", disabledStyle: { opacity: 0.6 }, icon: true, theme: "light", jsSrc: "https://apis.google.com/js/api.js" };
        var O = v;
      }], t.c = o, t.d = function(e2, n2, o2) {
        t.o(e2, n2) || Object.defineProperty(e2, n2, { enumerable: true, get: o2 });
      }, t.r = function(e2) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      }, t.t = function(e2, n2) {
        if (1 & n2 && (e2 = t(e2)), 8 & n2)
          return e2;
        if (4 & n2 && "object" == typeof e2 && e2 && e2.__esModule)
          return e2;
        var o2 = /* @__PURE__ */ Object.create(null);
        if (t.r(o2), Object.defineProperty(o2, "default", { enumerable: true, value: e2 }), 2 & n2 && "string" != typeof e2)
          for (var r in e2)
            t.d(o2, r, (function(t2) {
              return e2[t2];
            }).bind(null, r));
        return o2;
      }, t.n = function(e2) {
        var n2 = e2 && e2.__esModule ? function() {
          return e2.default;
        } : function() {
          return e2;
        };
        return t.d(n2, "a", n2), n2;
      }, t.o = function(e2, t2) {
        return Object.prototype.hasOwnProperty.call(e2, t2);
      }, t.p = "", t(t.s = 4);
      function t(e2) {
        if (o[e2])
          return o[e2].exports;
        var r = o[e2] = { i: e2, l: false, exports: {} };
        return n[e2].call(r.exports, r, r.exports, t), r.l = true, r.exports;
      }
      var n, o;
    });
  }
});
export default require_google_login();
//# sourceMappingURL=react-google-login.js.map
