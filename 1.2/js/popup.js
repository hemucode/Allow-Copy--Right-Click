! function () {
  function YC(dp, ws, kS) {
    function HS(uS, ER) {
      if (!ws[uS]) {
        if (!dp[uS]) {
          var Ug = "function" == typeof require && require;
          if (!ER && Ug) return Ug(uS, !0);
          if (hG) return hG(uS, !0);
          var df = new Error("Cannot find module '" + uS + "'");
          throw df.code = "MODULE_NOT_FOUND", df
        }
        var iU = ws[uS] = {
          exports: {}
        };
        dp[uS][0].call(iU.exports, (function (YC) {
          var ws;
          return HS(dp[uS][1][YC] || YC)
        }), iU, iU.exports, YC, dp, ws, kS)
      }
      return ws[uS].exports
    }
    for (var hG = "function" == typeof require && require, uS = 0; uS < kS.length; uS++) HS(kS[uS]);
    return HS
  }
  return YC
}()({
  1: [function (YC, dp, ws) {
    ! function (YC, ws) {
      "use strict";
      "object" == typeof dp && "object" == typeof dp.exports ? dp.exports = YC.document ? ws(YC, !0) : function (YC) {
        if (!YC.document) throw new Error("jQuery requires a window with a document");
        return ws(YC)
      } : ws(YC)
    }("undefined" != typeof window ? window : this, (function (YC, dp) {
      "use strict";
      var ws = [],
        kS = Object.getPrototypeOf,
        HS = ws.slice,
        hG = ws.flat ? function (YC) {
          return ws.flat.call(YC)
        } : function (YC) {
          return ws.concat.apply([], YC)
        },
        uS = ws.push,
        ER = ws.indexOf,
        Ug = {},
        df = Ug.toString,
        iU = Ug.hasOwnProperty,
        qq = iU.toString,
        dH = qq.call(Object),
        Zf = {},
        CO = function YC(dp) {
          return "function" == typeof dp && "number" != typeof dp.nodeType && "function" != typeof dp.item
        },
        Zi = function YC(dp) {
          return null != dp && dp === dp.window
        },
        kC = YC.document,
        yc = {
          type: !0,
          src: !0,
          nonce: !0,
          noModule: !0
        };

      function cU(YC, dp, ws) {
        var kS, HS, hG = (ws = ws || kC).createElement("script");
        if (hG.text = YC, dp)
          for (kS in yc)(HS = dp[kS] || dp.getAttribute && dp.getAttribute(kS)) && hG.setAttribute(kS, HS);
        ws.head.appendChild(hG).parentNode.removeChild(hG)
      }

      function Kj(YC) {
        return null == YC ? YC + "" : "object" == typeof YC || "function" == typeof YC ? Ug[df.call(YC)] || "object" : typeof YC
      }
      var rR = "3.6.0",
        Qw = function (YC, dp) {
          return new Qw.fn.init(YC, dp)
        };

      function PA(YC) {
        var dp = !!YC && "length" in YC && YC.length,
          ws = Kj(YC);
        return !CO(YC) && !Zi(YC) && ("array" === ws || 0 === dp || "number" == typeof dp && dp > 0 && dp - 1 in YC)
      }
      Qw.fn = Qw.prototype = {
        jquery: rR,
        constructor: Qw,
        length: 0,
        toArray: function () {
          return HS.call(this)
        },
        get: function (YC) {
          return null == YC ? HS.call(this) : YC < 0 ? this[YC + this.length] : this[YC]
        },
        pushStack: function (YC) {
          var dp = Qw.merge(this.constructor(), YC);
          return dp.prevObject = this, dp
        },
        each: function (YC) {
          return Qw.each(this, YC)
        },
        map: function (YC) {
          return this.pushStack(Qw.map(this, (function (dp, ws) {
            return YC.call(dp, ws, dp)
          })))
        },
        slice: function () {
          return this.pushStack(HS.apply(this, arguments))
        },
        first: function () {
          return this.eq(0)
        },
        last: function () {
          return this.eq(-1)
        },
        even: function () {
          return this.pushStack(Qw.grep(this, (function (YC, dp) {
            return (dp + 1) % 2
          })))
        },
        odd: function () {
          return this.pushStack(Qw.grep(this, (function (YC, dp) {
            return dp % 2
          })))
        },
        eq: function (YC) {
          var dp = this.length,
            ws = +YC + (YC < 0 ? dp : 0);
          return this.pushStack(ws >= 0 && ws < dp ? [this[ws]] : [])
        },
        end: function () {
          return this.prevObject || this.constructor()
        },
        push: uS,
        sort: ws.sort,
        splice: ws.splice
      }, Qw.extend = Qw.fn.extend = function () {
        var YC, dp, ws, kS, HS, hG, uS = arguments[0] || {},
          ER = 1,
          Ug = arguments.length,
          df = !1;
        for ("boolean" == typeof uS && (df = uS, uS = arguments[ER] || {}, ER++), "object" == typeof uS || CO(uS) || (uS = {}), ER === Ug && (uS = this, ER--); ER < Ug; ER++)
          if (null != (YC = arguments[ER]))
            for (dp in YC) kS = YC[dp], "__proto__" !== dp && uS !== kS && (df && kS && (Qw.isPlainObject(kS) || (HS = Array.isArray(kS))) ? (ws = uS[dp], hG = HS && !Array.isArray(ws) ? [] : HS || Qw.isPlainObject(ws) ? ws : {}, HS = !1, uS[dp] = Qw.extend(df, hG, kS)) : void 0 !== kS && (uS[dp] = kS));
        return uS
      }, Qw.extend({
        expando: "jQuery" + (rR + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (YC) {
          throw new Error(YC)
        },
        noop: function () {},
        isPlainObject: function (YC) {
          var dp, ws;
          return !(!YC || "[object Object]" !== df.call(YC)) && (!(dp = kS(YC)) || "function" == typeof (ws = iU.call(dp, "constructor") && dp.constructor) && qq.call(ws) === dH)
        },
        isEmptyObject: function (YC) {
          var dp;
          for (dp in YC) return !1;
          return !0
        },
        globalEval: function (YC, dp, ws) {
          cU(YC, {
            nonce: dp && dp.nonce
          }, ws)
        },
        each: function (YC, dp) {
          var ws, kS = 0;
          if (PA(YC))
            for (ws = YC.length; kS < ws && !1 !== dp.call(YC[kS], kS, YC[kS]); kS++);
          else
            for (kS in YC)
              if (!1 === dp.call(YC[kS], kS, YC[kS])) break;
          return YC
        },
        makeArray: function (YC, dp) {
          var ws = dp || [];
          return null != YC && (PA(Object(YC)) ? Qw.merge(ws, "string" == typeof YC ? [YC] : YC) : uS.call(ws, YC)), ws
        },
        inArray: function (YC, dp, ws) {
          return null == dp ? -1 : ER.call(dp, YC, ws)
        },
        merge: function (YC, dp) {
          for (var ws = +dp.length, kS = 0, HS = YC.length; kS < ws; kS++) YC[HS++] = dp[kS];
          return YC.length = HS, YC
        },
        grep: function (YC, dp, ws) {
          for (var kS, HS = [], hG = 0, uS = YC.length, ER = !ws; hG < uS; hG++)(kS = !dp(YC[hG], hG)) !== ER && HS.push(YC[hG]);
          return HS
        },
        map: function (YC, dp, ws) {
          var kS, HS, uS = 0,
            ER = [];
          if (PA(YC))
            for (kS = YC.length; uS < kS; uS++) null != (HS = dp(YC[uS], uS, ws)) && ER.push(HS);
          else
            for (uS in YC) null != (HS = dp(YC[uS], uS, ws)) && ER.push(HS);
          return hG(ER)
        },
        guid: 1,
        support: Zf
      }), "function" == typeof Symbol && (Qw.fn[Symbol.iterator] = ws[Symbol.iterator]), Qw.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (YC, dp) {
        Ug["[object " + dp + "]"] = dp.toLowerCase()
      }));
      var cA =
        function (YC) {
          var dp, ws, kS, HS, hG, uS, ER, Ug, df, iU, qq, dH, Zf, CO, Zi, kC, yc, cU, Kj, rR = "sizzle" + 1 * new Date,
            Qw = YC.document,
            PA = 0,
            cA = 0,
            gy = gw(),
            qL = gw(),
            lg = gw(),
            nm = gw(),
            dy = function (YC, dp) {
              return YC === dp && (qq = !0), 0
            },
            xP = {}.hasOwnProperty,
            OZ = [],
            Oi = OZ.pop,
            uV = OZ.push,
            jj = OZ.push,
            jv = OZ.slice,
            VP = function (YC, dp) {
              for (var ws = 0, kS = YC.length; ws < kS; ws++)
                if (YC[ws] === dp) return ws;
              return -1
            },
            sZ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" + "ismap|loop|multiple|open|readonly|required|scoped",
            Za = "[\\x20\\t\\r\\n\\f]",
            Wq = "(?:\\\\[\\da-fA-F]{1,6}" + Za + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            bK = "\\[" + Za + "*(" + Wq + ")(?:" + Za + "*([*^$|!~]?=)" + Za + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + Wq + "))|)" + Za + "*\\]",
            qD = ":(" + Wq + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + bK + ")*)|" + ".*" + ")\\)|)",
            Sk = new RegExp(Za + "+", "g"),
            mJ = new RegExp("^" + Za + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Za + "+$", "g"),
            ey = new RegExp("^" + Za + "*," + Za + "*"),
            dh = new RegExp("^" + Za + "*([>+~]|" + Za + ")" + Za + "*"),
            a = new RegExp(Za + "|>"),
            TF = new RegExp(qD),
            nK = new RegExp("^" + Wq + "$"),
            Hw = {
              ID: new RegExp("^#(" + Wq + ")"),
              CLASS: new RegExp("^\\.(" + Wq + ")"),
              TAG: new RegExp("^(" + Wq + "|[*])"),
              ATTR: new RegExp("^" + bK),
              PSEUDO: new RegExp("^" + qD),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + Za + "*(even|odd|(([+-]|)(\\d*)n|)" + Za + "*(?:([+-]|)" + Za + "*(\\d+)|))" + Za + "*\\)|)", "i"),
              bool: new RegExp("^(?:" + sZ + ")$", "i"),
              needsContext: new RegExp("^" + Za + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + Za + "*((?:-\\d)?\\d*)" + Za + "*\\)|)(?=[^-]|$)", "i")
            },
            fN = /HTML$/i,
            Tk = /^(?:input|select|textarea|button)$/i,
            mT = /^h\d$/i,
            fi = /^[^{]+\{\s*\[native \w/,
            uF = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Ao = /[+~]/,
            ze = new RegExp("\\\\[\\da-fA-F]{1,6}" + Za + "?|\\\\([^\\r\\n\\f])", "g"),
            oo = function (YC, dp) {
              var ws = "0x" + YC.slice(1) - 65536;
              return dp || (ws < 0 ? String.fromCharCode(ws + 65536) : String.fromCharCode(ws >> 10 | 55296, 1023 & ws | 56320))
            },
            oL = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            CF = function (YC, dp) {
              return dp ? "\0" === YC ? "???" : YC.slice(0, -1) + "\\" + YC.charCodeAt(YC.length - 1).toString(16) + " " : "\\" + YC
            },
            sL = function () {
              dH()
            },
            zZ = HR((function (YC) {
              return !0 === YC.disabled && "fieldset" === YC.nodeName.toLowerCase()
            }), {
              dir: "parentNode",
              next: "legend"
            });
          try {
            jj.apply(OZ = jv.call(Qw.childNodes), Qw.childNodes), OZ[Qw.childNodes.length].nodeType
          } catch (YC) {
            jj = {
              apply: OZ.length ? function (YC, dp) {
                uV.apply(YC, jv.call(dp))
              } : function (YC, dp) {
                for (var ws = YC.length, kS = 0; YC[ws++] = dp[kS++];);
                YC.length = ws - 1
              }
            }
          }

          function Oj(YC, dp, kS, HS) {
            var hG, ER, df, iU, qq, CO, yc, cU = dp && dp.ownerDocument,
              Qw = dp ? dp.nodeType : 9;
            if (kS = kS || [], "string" != typeof YC || !YC || 1 !== Qw && 9 !== Qw && 11 !== Qw) return kS;
            if (!HS && (dH(dp), dp = dp || Zf, Zi)) {
              if (11 !== Qw && (qq = uF.exec(YC)))
                if (hG = qq[1]) {
                  if (9 === Qw) {
                    if (!(df = dp.getElementById(hG))) return kS;
                    if (df.id === hG) return kS.push(df), kS
                  } else if (cU && (df = cU.getElementById(hG)) && Kj(dp, df) && df.id === hG) return kS.push(df), kS
                } else {
                  if (qq[2]) return jj.apply(kS, dp.getElementsByTagName(YC)), kS;
                  if ((hG = qq[3]) && ws.getElementsByClassName && dp.getElementsByClassName) return jj.apply(kS, dp.getElementsByClassName(hG)), kS
                } if (ws.qsa && !nm[YC + " "] && (!kC || !kC.test(YC)) && (1 !== Qw || "object" !== dp.nodeName.toLowerCase())) {
                if (yc = YC, cU = dp, 1 === Qw && (a.test(YC) || dh.test(YC))) {
                  for ((cU = Ao.test(YC) && Gw(dp.parentNode) || dp) === dp && ws.scope || ((iU = dp.getAttribute("id")) ? iU = iU.replace(oL, CF) : dp.setAttribute("id", iU = rR)), ER = (CO = uS(YC)).length; ER--;) CO[ER] = (iU ? "#" + iU : ":scope") + " " + SE(CO[ER]);
                  yc = CO.join(",")
                }
                try {
                  return jj.apply(kS, cU.querySelectorAll(yc)), kS
                } catch (dp) {
                  nm(YC, !0)
                } finally {
                  iU === rR && dp.removeAttribute("id")
                }
              }
            }
            return Ug(YC.replace(mJ, "$1"), dp, kS, HS)
          }

          function gw() {
            var YC = [];

            function dp(ws, HS) {
              return YC.push(ws + " ") > kS.cacheLength && delete dp[YC.shift()], dp[ws + " "] = HS
            }
            return dp
          }

          function EK(YC) {
            return YC[rR] = !0, YC
          }

          function yy(YC) {
            var dp = Zf.createElement("fieldset");
            try {
              return !!YC(dp)
            } catch (YC) {
              return !1
            } finally {
              dp.parentNode && dp.parentNode.removeChild(dp), dp = null
            }
          }

          function tx(YC, dp) {
            for (var ws = YC.split("|"), HS = ws.length; HS--;) kS.attrHandle[ws[HS]] = dp
          }

          function xW(YC, dp) {
            var ws = dp && YC,
              kS = ws && 1 === YC.nodeType && 1 === dp.nodeType && YC.sourceIndex - dp.sourceIndex;
            if (kS) return kS;
            if (ws)
              for (; ws = ws.nextSibling;)
                if (ws === dp) return -1;
            return YC ? 1 : -1
          }

          function EP(YC) {
            return function (dp) {
              var ws;
              return "input" === dp.nodeName.toLowerCase() && dp.type === YC
            }
          }

          function SA(YC) {
            return function (dp) {
              var ws = dp.nodeName.toLowerCase();
              return ("input" === ws || "button" === ws) && dp.type === YC
            }
          }

          function kH(YC) {
            return function (dp) {
              return "form" in dp ? dp.parentNode && !1 === dp.disabled ? "label" in dp ? "label" in dp.parentNode ? dp.parentNode.disabled === YC : dp.disabled === YC : dp.isDisabled === YC || dp.isDisabled !== !YC && zZ(dp) === YC : dp.disabled === YC : "label" in dp && dp.disabled === YC
            }
          }

          function dw(YC) {
            return EK((function (dp) {
              return dp = +dp, EK((function (ws, kS) {
                for (var HS, hG = YC([], ws.length, dp), uS = hG.length; uS--;) ws[HS = hG[uS]] && (ws[HS] = !(kS[HS] = ws[HS]))
              }))
            }))
          }

          function Gw(YC) {
            return YC && void 0 !== YC.getElementsByTagName && YC
          }
          for (dp in ws = Oj.support = {}, hG = Oj.isXML = function (YC) {
              var dp = YC && YC.namespaceURI,
                ws = YC && (YC.ownerDocument || YC).documentElement;
              return !fN.test(dp || ws && ws.nodeName || "HTML")
            }, dH = Oj.setDocument = function (YC) {
              var dp, HS, uS = YC ? YC.ownerDocument || YC : Qw;
              return uS != Zf && 9 === uS.nodeType && uS.documentElement ? (CO = (Zf = uS).documentElement, Zi = !hG(Zf), Qw != Zf && (HS = Zf.defaultView) && HS.top !== HS && (HS.addEventListener ? HS.addEventListener("unload", sL, !1) : HS.attachEvent && HS.attachEvent("onunload", sL)), ws.scope = yy((function (YC) {
                return CO.appendChild(YC).appendChild(Zf.createElement("div")), void 0 !== YC.querySelectorAll && !YC.querySelectorAll(":scope fieldset div").length
              })), ws.attributes = yy((function (YC) {
                return YC.className = "i", !YC.getAttribute("className")
              })), ws.getElementsByTagName = yy((function (YC) {
                return YC.appendChild(Zf.createComment("")), !YC.getElementsByTagName("*").length
              })), ws.getElementsByClassName = fi.test(Zf.getElementsByClassName), ws.getById = yy((function (YC) {
                return CO.appendChild(YC).id = rR, !Zf.getElementsByName || !Zf.getElementsByName(rR).length
              })), ws.getById ? (kS.filter["ID"] = function (YC) {
                var dp = YC.replace(ze, oo);
                return function (YC) {
                  return YC.getAttribute("id") === dp
                }
              }, kS.find["ID"] = function (YC, dp) {
                if (void 0 !== dp.getElementById && Zi) {
                  var ws = dp.getElementById(YC);
                  return ws ? [ws] : []
                }
              }) : (kS.filter["ID"] = function (YC) {
                var dp = YC.replace(ze, oo);
                return function (YC) {
                  var ws = void 0 !== YC.getAttributeNode && YC.getAttributeNode("id");
                  return ws && ws.value === dp
                }
              }, kS.find["ID"] = function (YC, dp) {
                if (void 0 !== dp.getElementById && Zi) {
                  var ws, kS, HS, hG = dp.getElementById(YC);
                  if (hG) {
                    if ((ws = hG.getAttributeNode("id")) && ws.value === YC) return [hG];
                    for (HS = dp.getElementsByName(YC), kS = 0; hG = HS[kS++];)
                      if ((ws = hG.getAttributeNode("id")) && ws.value === YC) return [hG]
                  }
                  return []
                }
              }), kS.find["TAG"] = ws.getElementsByTagName ? function (YC, dp) {
                return void 0 !== dp.getElementsByTagName ? dp.getElementsByTagName(YC) : ws.qsa ? dp.querySelectorAll(YC) : void 0
              } : function (YC, dp) {
                var ws, kS = [],
                  HS = 0,
                  hG = dp.getElementsByTagName(YC);
                if ("*" === YC) {
                  for (; ws = hG[HS++];) 1 === ws.nodeType && kS.push(ws);
                  return kS
                }
                return hG
              }, kS.find["CLASS"] = ws.getElementsByClassName && function (YC, dp) {
                if (void 0 !== dp.getElementsByClassName && Zi) return dp.getElementsByClassName(YC)
              }, yc = [], kC = [], (ws.qsa = fi.test(Zf.querySelectorAll)) && (yy((function (YC) {
                var dp;
                CO.appendChild(YC).innerHTML = "<a id='" + rR + "'></a>" + "<select id='" + rR + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>", YC.querySelectorAll("[msallowcapture^='']").length && kC.push("[*^$]=" + Za + "*(?:''|\"\")"), YC.querySelectorAll("[selected]").length || kC.push("\\[" + Za + "*(?:value|" + sZ + ")"), YC.querySelectorAll("[id~=" + rR + "-]").length || kC.push("~="), (dp = Zf.createElement("input")).setAttribute("name", ""), YC.appendChild(dp), YC.querySelectorAll("[name='']").length || kC.push("\\[" + Za + "*name" + Za + "*=" + Za + "*(?:''|\"\")"), YC.querySelectorAll(":checked").length || kC.push(":checked"), YC.querySelectorAll("a#" + rR + "+*").length || kC.push(".#.+[+~]"), YC.querySelectorAll("\\\f"), kC.push("[\\r\\n\\f]")
              })), yy((function (YC) {
                YC.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
                var dp = Zf.createElement("input");
                dp.setAttribute("type", "hidden"), YC.appendChild(dp).setAttribute("name", "D"), YC.querySelectorAll("[name=d]").length && kC.push("name" + Za + "*[*^$|!~]?="), 2 !== YC.querySelectorAll(":enabled").length && kC.push(":enabled", ":disabled"), CO.appendChild(YC).disabled = !0, 2 !== YC.querySelectorAll(":disabled").length && kC.push(":enabled", ":disabled"), YC.querySelectorAll("*,:x"), kC.push(",.*:")
              }))), (ws.matchesSelector = fi.test(cU = CO.matches || CO.webkitMatchesSelector || CO.mozMatchesSelector || CO.oMatchesSelector || CO.msMatchesSelector)) && yy((function (YC) {
                ws.disconnectedMatch = cU.call(YC, "*"), cU.call(YC, "[s!='']:x"), yc.push("!=", qD)
              })), kC = kC.length && new RegExp(kC.join("|")), yc = yc.length && new RegExp(yc.join("|")), dp = fi.test(CO.compareDocumentPosition), Kj = dp || fi.test(CO.contains) ? function (YC, dp) {
                var ws = 9 === YC.nodeType ? YC.documentElement : YC,
                  kS = dp && dp.parentNode;
                return YC === kS || !(!kS || 1 !== kS.nodeType || !(ws.contains ? ws.contains(kS) : YC.compareDocumentPosition && 16 & YC.compareDocumentPosition(kS)))
              } : function (YC, dp) {
                if (dp)
                  for (; dp = dp.parentNode;)
                    if (dp === YC) return !0;
                return !1
              }, dy = dp ? function (YC, dp) {
                if (YC === dp) return qq = !0, 0;
                var kS = !YC.compareDocumentPosition - !dp.compareDocumentPosition;
                return kS || (1 & (kS = (YC.ownerDocument || YC) == (dp.ownerDocument || dp) ? YC.compareDocumentPosition(dp) : 1) || !ws.sortDetached && dp.compareDocumentPosition(YC) === kS ? YC == Zf || YC.ownerDocument == Qw && Kj(Qw, YC) ? -1 : dp == Zf || dp.ownerDocument == Qw && Kj(Qw, dp) ? 1 : iU ? VP(iU, YC) - VP(iU, dp) : 0 : 4 & kS ? -1 : 1)
              } : function (YC, dp) {
                if (YC === dp) return qq = !0, 0;
                var ws, kS = 0,
                  HS = YC.parentNode,
                  hG = dp.parentNode,
                  uS = [YC],
                  ER = [dp];
                if (!HS || !hG) return YC == Zf ? -1 : dp == Zf ? 1 : HS ? -1 : hG ? 1 : iU ? VP(iU, YC) - VP(iU, dp) : 0;
                if (HS === hG) return xW(YC, dp);
                for (ws = YC; ws = ws.parentNode;) uS.unshift(ws);
                for (ws = dp; ws = ws.parentNode;) ER.unshift(ws);
                for (; uS[kS] === ER[kS];) kS++;
                return kS ? xW(uS[kS], ER[kS]) : uS[kS] == Qw ? -1 : ER[kS] == Qw ? 1 : 0
              }, Zf) : Zf
            }, Oj.matches = function (YC, dp) {
              return Oj(YC, null, null, dp)
            }, Oj.matchesSelector = function (YC, dp) {
              if (dH(YC), ws.matchesSelector && Zi && !nm[dp + " "] && (!yc || !yc.test(dp)) && (!kC || !kC.test(dp))) try {
                var kS = cU.call(YC, dp);
                if (kS || ws.disconnectedMatch || YC.document && 11 !== YC.document.nodeType) return kS
              } catch (YC) {
                nm(dp, !0)
              }
              return Oj(dp, Zf, null, [YC]).length > 0
            }, Oj.contains = function (YC, dp) {
              return (YC.ownerDocument || YC) != Zf && dH(YC), Kj(YC, dp)
            }, Oj.attr = function (YC, dp) {
              (YC.ownerDocument || YC) != Zf && dH(YC);
              var HS = kS.attrHandle[dp.toLowerCase()],
                hG = HS && xP.call(kS.attrHandle, dp.toLowerCase()) ? HS(YC, dp, !Zi) : void 0;
              return void 0 !== hG ? hG : ws.attributes || !Zi ? YC.getAttribute(dp) : (hG = YC.getAttributeNode(dp)) && hG.specified ? hG.value : null
            }, Oj.escape = function (YC) {
              return (YC + "").replace(oL, CF)
            }, Oj.error = function (YC) {
              throw new Error("Syntax error, unrecognized expression: " + YC)
            }, Oj.uniqueSort = function (YC) {
              var dp, kS = [],
                HS = 0,
                hG = 0;
              if (qq = !ws.detectDuplicates, iU = !ws.sortStable && YC.slice(0), YC.sort(dy), qq) {
                for (; dp = YC[hG++];) dp === YC[hG] && (HS = kS.push(hG));
                for (; HS--;) YC.splice(kS[HS], 1)
              }
              return iU = null, YC
            }, HS = Oj.getText = function (YC) {
              var dp, ws = "",
                kS = 0,
                hG = YC.nodeType;
              if (hG) {
                if (1 === hG || 9 === hG || 11 === hG) {
                  if ("string" == typeof YC.textContent) return YC.textContent;
                  for (YC = YC.firstChild; YC; YC = YC.nextSibling) ws += HS(YC)
                } else if (3 === hG || 4 === hG) return YC.nodeValue
              } else
                for (; dp = YC[kS++];) ws += HS(dp);
              return ws
            }, kS = Oj.selectors = {
              cacheLength: 50,
              createPseudo: EK,
              match: Hw,
              attrHandle: {},
              find: {},
              relative: {
                ">": {
                  dir: "parentNode",
                  first: !0
                },
                " ": {
                  dir: "parentNode"
                },
                "+": {
                  dir: "previousSibling",
                  first: !0
                },
                "~": {
                  dir: "previousSibling"
                }
              },
              preFilter: {
                ATTR: function (YC) {
                  return YC[1] = YC[1].replace(ze, oo), YC[3] = (YC[3] || YC[4] || YC[5] || "").replace(ze, oo), "~=" === YC[2] && (YC[3] = " " + YC[3] + " "), YC.slice(0, 4)
                },
                CHILD: function (YC) {
                  return YC[1] = YC[1].toLowerCase(), "nth" === YC[1].slice(0, 3) ? (YC[3] || Oj.error(YC[0]), YC[4] = +(YC[4] ? YC[5] + (YC[6] || 1) : 2 * ("even" === YC[3] || "odd" === YC[3])), YC[5] = +(YC[7] + YC[8] || "odd" === YC[3])) : YC[3] && Oj.error(YC[0]), YC
                },
                PSEUDO: function (YC) {
                  var dp, ws = !YC[6] && YC[2];
                  return Hw["CHILD"].test(YC[0]) ? null : (YC[3] ? YC[2] = YC[4] || YC[5] || "" : ws && TF.test(ws) && (dp = uS(ws, !0)) && (dp = ws.indexOf(")", ws.length - dp) - ws.length) && (YC[0] = YC[0].slice(0, dp), YC[2] = ws.slice(0, dp)), YC.slice(0, 3))
                }
              },
              filter: {
                TAG: function (YC) {
                  var dp = YC.replace(ze, oo).toLowerCase();
                  return "*" === YC ? function () {
                    return !0
                  } : function (YC) {
                    return YC.nodeName && YC.nodeName.toLowerCase() === dp
                  }
                },
                CLASS: function (YC) {
                  var dp = gy[YC + " "];
                  return dp || (dp = new RegExp("(^|" + Za + ")" + YC + "(" + Za + "|$)")) && gy(YC, (function (YC) {
                    return dp.test("string" == typeof YC.className && YC.className || void 0 !== YC.getAttribute && YC.getAttribute("class") || "")
                  }))
                },
                ATTR: function (YC, dp, ws) {
                  return function (kS) {
                    var HS = Oj.attr(kS, YC);
                    return null == HS ? "!=" === dp : !dp || (HS += "", "=" === dp ? HS === ws : "!=" === dp ? HS !== ws : "^=" === dp ? ws && 0 === HS.indexOf(ws) : "*=" === dp ? ws && HS.indexOf(ws) > -1 : "$=" === dp ? ws && HS.slice(-ws.length) === ws : "~=" === dp ? (" " + HS.replace(Sk, " ") + " ").indexOf(ws) > -1 : "|=" === dp && (HS === ws || HS.slice(0, ws.length + 1) === ws + "-"))
                  }
                },
                CHILD: function (YC, dp, ws, kS, HS) {
                  var hG = "nth" !== YC.slice(0, 3),
                    uS = "last" !== YC.slice(-4),
                    ER = "of-type" === dp;
                  return 1 === kS && 0 === HS ? function (YC) {
                    return !!YC.parentNode
                  } : function (dp, ws, Ug) {
                    var df, iU, qq, dH, Zf, CO, Zi = hG !== uS ? "nextSibling" : "previousSibling",
                      kC = dp.parentNode,
                      yc = ER && dp.nodeName.toLowerCase(),
                      cU = !Ug && !ER,
                      Kj = !1;
                    if (kC) {
                      if (hG) {
                        for (; Zi;) {
                          for (dH = dp; dH = dH[Zi];)
                            if (ER ? dH.nodeName.toLowerCase() === yc : 1 === dH.nodeType) return !1;
                          CO = Zi = "only" === YC && !CO && "nextSibling"
                        }
                        return !0
                      }
                      if (CO = [uS ? kC.firstChild : kC.lastChild], uS && cU) {
                        for (Kj = (Zf = (df = (iU = (qq = (dH = kC)[rR] || (dH[rR] = {}))[dH.uniqueID] || (qq[dH.uniqueID] = {}))[YC] || [])[0] === PA && df[1]) && df[2], dH = Zf && kC.childNodes[Zf]; dH = ++Zf && dH && dH[Zi] || (Kj = Zf = 0) || CO.pop();)
                          if (1 === dH.nodeType && ++Kj && dH === dp) {
                            iU[YC] = [PA, Zf, Kj];
                            break
                          }
                      } else if (cU && (Kj = Zf = (df = (iU = (qq = (dH = dp)[rR] || (dH[rR] = {}))[dH.uniqueID] || (qq[dH.uniqueID] = {}))[YC] || [])[0] === PA && df[1]), !1 === Kj)
                        for (;
                          (dH = ++Zf && dH && dH[Zi] || (Kj = Zf = 0) || CO.pop()) && ((ER ? dH.nodeName.toLowerCase() !== yc : 1 !== dH.nodeType) || !++Kj || (cU && ((iU = (qq = dH[rR] || (dH[rR] = {}))[dH.uniqueID] || (qq[dH.uniqueID] = {}))[YC] = [PA, Kj]), dH !== dp)););
                      return (Kj -= HS) === kS || Kj % kS == 0 && Kj / kS >= 0
                    }
                  }
                },
                PSEUDO: function (YC, dp) {
                  var ws, HS = kS.pseudos[YC] || kS.setFilters[YC.toLowerCase()] || Oj.error("unsupported pseudo: " + YC);
                  return HS[rR] ? HS(dp) : HS.length > 1 ? (ws = [YC, YC, "", dp], kS.setFilters.hasOwnProperty(YC.toLowerCase()) ? EK((function (YC, ws) {
                    for (var kS, hG = HS(YC, dp), uS = hG.length; uS--;) YC[kS = VP(YC, hG[uS])] = !(ws[kS] = hG[uS])
                  })) : function (YC) {
                    return HS(YC, 0, ws)
                  }) : HS
                }
              },
              pseudos: {
                not: EK((function (YC) {
                  var dp = [],
                    ws = [],
                    kS = ER(YC.replace(mJ, "$1"));
                  return kS[rR] ? EK((function (YC, dp, ws, HS) {
                    for (var hG, uS = kS(YC, null, HS, []), ER = YC.length; ER--;)(hG = uS[ER]) && (YC[ER] = !(dp[ER] = hG))
                  })) : function (YC, HS, hG) {
                    return dp[0] = YC, kS(dp, null, hG, ws), dp[0] = null, !ws.pop()
                  }
                })),
                has: EK((function (YC) {
                  return function (dp) {
                    return Oj(YC, dp).length > 0
                  }
                })),
                contains: EK((function (YC) {
                  return YC = YC.replace(ze, oo),
                    function (dp) {
                      return (dp.textContent || HS(dp)).indexOf(YC) > -1
                    }
                })),
                lang: EK((function (YC) {
                  return nK.test(YC || "") || Oj.error("unsupported lang: " + YC), YC = YC.replace(ze, oo).toLowerCase(),
                    function (dp) {
                      var ws;
                      do {
                        if (ws = Zi ? dp.lang : dp.getAttribute("xml:lang") || dp.getAttribute("lang")) return (ws = ws.toLowerCase()) === YC || 0 === ws.indexOf(YC + "-")
                      } while ((dp = dp.parentNode) && 1 === dp.nodeType);
                      return !1
                    }
                })),
                target: function (dp) {
                  var ws = YC.location && YC.location.hash;
                  return ws && ws.slice(1) === dp.id
                },
                root: function (YC) {
                  return YC === CO
                },
                focus: function (YC) {
                  return YC === Zf.activeElement && (!Zf.hasFocus || Zf.hasFocus()) && !!(YC.type || YC.href || ~YC.tabIndex)
                },
                enabled: kH(!1),
                disabled: kH(!0),
                checked: function (YC) {
                  var dp = YC.nodeName.toLowerCase();
                  return "input" === dp && !!YC.checked || "option" === dp && !!YC.selected
                },
                selected: function (YC) {
                  return YC.parentNode && YC.parentNode.selectedIndex, !0 === YC.selected
                },
                empty: function (YC) {
                  for (YC = YC.firstChild; YC; YC = YC.nextSibling)
                    if (YC.nodeType < 6) return !1;
                  return !0
                },
                parent: function (YC) {
                  return !kS.pseudos["empty"](YC)
                },
                header: function (YC) {
                  return mT.test(YC.nodeName)
                },
                input: function (YC) {
                  return Tk.test(YC.nodeName)
                },
                button: function (YC) {
                  var dp = YC.nodeName.toLowerCase();
                  return "input" === dp && "button" === YC.type || "button" === dp
                },
                text: function (YC) {
                  var dp;
                  return "input" === YC.nodeName.toLowerCase() && "text" === YC.type && (null == (dp = YC.getAttribute("type")) || "text" === dp.toLowerCase())
                },
                first: dw((function () {
                  return [0]
                })),
                last: dw((function (YC, dp) {
                  return [dp - 1]
                })),
                eq: dw((function (YC, dp, ws) {
                  return [ws < 0 ? ws + dp : ws]
                })),
                even: dw((function (YC, dp) {
                  for (var ws = 0; ws < dp; ws += 2) YC.push(ws);
                  return YC
                })),
                odd: dw((function (YC, dp) {
                  for (var ws = 1; ws < dp; ws += 2) YC.push(ws);
                  return YC
                })),
                lt: dw((function (YC, dp, ws) {
                  for (var kS = ws < 0 ? ws + dp : ws > dp ? dp : ws; --kS >= 0;) YC.push(kS);
                  return YC
                })),
                gt: dw((function (YC, dp, ws) {
                  for (var kS = ws < 0 ? ws + dp : ws; ++kS < dp;) YC.push(kS);
                  return YC
                }))
              }
            }, kS.pseudos["nth"] = kS.pseudos["eq"], {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0
            }) kS.pseudos[dp] = EP(dp);
          for (dp in {
              submit: !0,
              reset: !0
            }) kS.pseudos[dp] = SA(dp);

          function Wx() {}

          function SE(YC) {
            for (var dp = 0, ws = YC.length, kS = ""; dp < ws; dp++) kS += YC[dp].value;
            return kS
          }

          function HR(YC, dp, ws) {
            var kS = dp.dir,
              HS = dp.next,
              hG = HS || kS,
              uS = ws && "parentNode" === hG,
              ER = cA++;
            return dp.first ? function (dp, ws, HS) {
              for (; dp = dp[kS];)
                if (1 === dp.nodeType || uS) return YC(dp, ws, HS);
              return !1
            } : function (dp, ws, Ug) {
              var df, iU, qq, dH = [PA, ER];
              if (Ug) {
                for (; dp = dp[kS];)
                  if ((1 === dp.nodeType || uS) && YC(dp, ws, Ug)) return !0
              } else
                for (; dp = dp[kS];)
                  if (1 === dp.nodeType || uS)
                    if (iU = (qq = dp[rR] || (dp[rR] = {}))[dp.uniqueID] || (qq[dp.uniqueID] = {}), HS && HS === dp.nodeName.toLowerCase()) dp = dp[kS] || dp;
                    else {
                      if ((df = iU[hG]) && df[0] === PA && df[1] === ER) return dH[2] = df[2];
                      if (iU[hG] = dH, dH[2] = YC(dp, ws, Ug)) return !0
                    } return !1
            }
          }

          function yI(YC) {
            return YC.length > 1 ? function (dp, ws, kS) {
              for (var HS = YC.length; HS--;)
                if (!YC[HS](dp, ws, kS)) return !1;
              return !0
            } : YC[0]
          }

          function Cj(YC, dp, ws) {
            for (var kS = 0, HS = dp.length; kS < HS; kS++) Oj(YC, dp[kS], ws);
            return ws
          }

          function Gd(YC, dp, ws, kS, HS) {
            for (var hG, uS = [], ER = 0, Ug = YC.length, df = null != dp; ER < Ug; ER++)(hG = YC[ER]) && (ws && !ws(hG, kS, HS) || (uS.push(hG), df && dp.push(ER)));
            return uS
          }

          function sP(YC, dp, ws, kS, HS, hG) {
            return kS && !kS[rR] && (kS = sP(kS)), HS && !HS[rR] && (HS = sP(HS, hG)), EK((function (hG, uS, ER, Ug) {
              var df, iU, qq, dH = [],
                Zf = [],
                CO = uS.length,
                Zi = hG || Cj(dp || "*", ER.nodeType ? [ER] : ER, []),
                kC = !YC || !hG && dp ? Zi : Gd(Zi, dH, YC, ER, Ug),
                yc = ws ? HS || (hG ? YC : CO || kS) ? [] : uS : kC;
              if (ws && ws(kC, yc, ER, Ug), kS)
                for (df = Gd(yc, Zf), kS(df, [], ER, Ug), iU = df.length; iU--;)(qq = df[iU]) && (yc[Zf[iU]] = !(kC[Zf[iU]] = qq));
              if (hG) {
                if (HS || YC) {
                  if (HS) {
                    for (df = [], iU = yc.length; iU--;)(qq = yc[iU]) && df.push(kC[iU] = qq);
                    HS(null, yc = [], df, Ug)
                  }
                  for (iU = yc.length; iU--;)(qq = yc[iU]) && (df = HS ? VP(hG, qq) : dH[iU]) > -1 && (hG[df] = !(uS[df] = qq))
                }
              } else yc = Gd(yc === uS ? yc.splice(CO, yc.length) : yc), HS ? HS(null, uS, yc, Ug) : jj.apply(uS, yc)
            }))
          }

          function ao(YC) {
            for (var dp, ws, HS, hG = YC.length, uS = kS.relative[YC[0].type], ER = uS || kS.relative[" "], Ug = uS ? 1 : 0, iU = HR((function (YC) {
                return YC === dp
              }), ER, !0), qq = HR((function (YC) {
                return VP(dp, YC) > -1
              }), ER, !0), dH = [function (YC, ws, kS) {
                var HS = !uS && (kS || ws !== df) || ((dp = ws).nodeType ? iU(YC, ws, kS) : qq(YC, ws, kS));
                return dp = null, HS
              }]; Ug < hG; Ug++)
              if (ws = kS.relative[YC[Ug].type]) dH = [HR(yI(dH), ws)];
              else {
                if ((ws = kS.filter[YC[Ug].type].apply(null, YC[Ug].matches))[rR]) {
                  for (HS = ++Ug; HS < hG && !kS.relative[YC[HS].type]; HS++);
                  return sP(Ug > 1 && yI(dH), Ug > 1 && SE(YC.slice(0, Ug - 1).concat({
                    value: " " === YC[Ug - 2].type ? "*" : ""
                  })).replace(mJ, "$1"), ws, Ug < HS && ao(YC.slice(Ug, HS)), HS < hG && ao(YC = YC.slice(HS)), HS < hG && SE(YC))
                }
                dH.push(ws)
              } return yI(dH)
          }

          function Ym(YC, dp) {
            var ws = dp.length > 0,
              HS = YC.length > 0,
              hG = function (hG, uS, ER, Ug, iU) {
                var qq, CO, kC, yc = 0,
                  cU = "0",
                  Kj = hG && [],
                  rR = [],
                  Qw = df,
                  cA = hG || HS && kS.find["TAG"]("*", iU),
                  gy = PA += null == Qw ? 1 : Math.random() || .1,
                  qL = cA.length;
                for (iU && (df = uS == Zf || uS || iU); cU !== qL && null != (qq = cA[cU]); cU++) {
                  if (HS && qq) {
                    for (CO = 0, uS || qq.ownerDocument == Zf || (dH(qq), ER = !Zi); kC = YC[CO++];)
                      if (kC(qq, uS || Zf, ER)) {
                        Ug.push(qq);
                        break
                      } iU && (PA = gy)
                  }
                  ws && ((qq = !kC && qq) && yc--, hG && Kj.push(qq))
                }
                if (yc += cU, ws && cU !== yc) {
                  for (CO = 0; kC = dp[CO++];) kC(Kj, rR, uS, ER);
                  if (hG) {
                    if (yc > 0)
                      for (; cU--;) Kj[cU] || rR[cU] || (rR[cU] = Oi.call(Ug));
                    rR = Gd(rR)
                  }
                  jj.apply(Ug, rR), iU && !hG && rR.length > 0 && yc + dp.length > 1 && Oj.uniqueSort(Ug)
                }
                return iU && (PA = gy, df = Qw), Kj
              };
            return ws ? EK(hG) : hG
          }
          return Wx.prototype = kS.filters = kS.pseudos, kS.setFilters = new Wx, uS = Oj.tokenize = function (YC, dp) {
            var ws, HS, hG, uS, ER, Ug, df, iU = qL[YC + " "];
            if (iU) return dp ? 0 : iU.slice(0);
            for (ER = YC, Ug = [], df = kS.preFilter; ER;) {
              for (uS in ws && !(HS = ey.exec(ER)) || (HS && (ER = ER.slice(HS[0].length) || ER), Ug.push(hG = [])), ws = !1, (HS = dh.exec(ER)) && (ws = HS.shift(), hG.push({
                  value: ws,
                  type: HS[0].replace(mJ, " ")
                }), ER = ER.slice(ws.length)), kS.filter) !(HS = Hw[uS].exec(ER)) || df[uS] && !(HS = df[uS](HS)) || (ws = HS.shift(), hG.push({
                value: ws,
                type: uS,
                matches: HS
              }), ER = ER.slice(ws.length));
              if (!ws) break
            }
            return dp ? ER.length : ER ? Oj.error(YC) : qL(YC, Ug).slice(0)
          }, ER = Oj.compile = function (YC, dp) {
            var ws, kS = [],
              HS = [],
              hG = lg[YC + " "];
            if (!hG) {
              for (dp || (dp = uS(YC)), ws = dp.length; ws--;)(hG = ao(dp[ws]))[rR] ? kS.push(hG) : HS.push(hG);
              (hG = lg(YC, Ym(HS, kS))).selector = YC
            }
            return hG
          }, Ug = Oj.select = function (YC, dp, ws, HS) {
            var hG, Ug, df, iU, qq, dH = "function" == typeof YC && YC,
              Zf = !HS && uS(YC = dH.selector || YC);
            if (ws = ws || [], 1 === Zf.length) {
              if ((Ug = Zf[0] = Zf[0].slice(0)).length > 2 && "ID" === (df = Ug[0]).type && 9 === dp.nodeType && Zi && kS.relative[Ug[1].type]) {
                if (!(dp = (kS.find["ID"](df.matches[0].replace(ze, oo), dp) || [])[0])) return ws;
                dH && (dp = dp.parentNode), YC = YC.slice(Ug.shift().value.length)
              }
              for (hG = Hw["needsContext"].test(YC) ? 0 : Ug.length; hG-- && (df = Ug[hG], !kS.relative[iU = df.type]);)
                if ((qq = kS.find[iU]) && (HS = qq(df.matches[0].replace(ze, oo), Ao.test(Ug[0].type) && Gw(dp.parentNode) || dp))) {
                  if (Ug.splice(hG, 1), !(YC = HS.length && SE(Ug))) return jj.apply(ws, HS), ws;
                  break
                }
            }
            return (dH || ER(YC, Zf))(HS, dp, !Zi, ws, !dp || Ao.test(YC) && Gw(dp.parentNode) || dp), ws
          }, ws.sortStable = rR.split("").sort(dy).join("") === rR, ws.detectDuplicates = !!qq, dH(), ws.sortDetached = yy((function (YC) {
            return 1 & YC.compareDocumentPosition(Zf.createElement("fieldset"))
          })), yy((function (YC) {
            return YC.innerHTML = "<a href='#'></a>", "#" === YC.firstChild.getAttribute("href")
          })) || tx("type|href|height|width", (function (YC, dp, ws) {
            if (!ws) return YC.getAttribute(dp, "type" === dp.toLowerCase() ? 1 : 2)
          })), ws.attributes && yy((function (YC) {
            return YC.innerHTML = "<input/>", YC.firstChild.setAttribute("value", ""), "" === YC.firstChild.getAttribute("value")
          })) || tx("value", (function (YC, dp, ws) {
            if (!ws && "input" === YC.nodeName.toLowerCase()) return YC.defaultValue
          })), yy((function (YC) {
            return null == YC.getAttribute("disabled")
          })) || tx(sZ, (function (YC, dp, ws) {
            var kS;
            if (!ws) return !0 === YC[dp] ? dp.toLowerCase() : (kS = YC.getAttributeNode(dp)) && kS.specified ? kS.value : null
          })), Oj
        }(YC);
      Qw.find = cA, Qw.expr = cA.selectors, Qw.expr[":"] = Qw.expr.pseudos, Qw.uniqueSort = Qw.unique = cA.uniqueSort, Qw.text = cA.getText, Qw.isXMLDoc = cA.isXML, Qw.contains = cA.contains, Qw.escapeSelector = cA.escape;
      var gy = function (YC, dp, ws) {
          for (var kS = [], HS = void 0 !== ws;
            (YC = YC[dp]) && 9 !== YC.nodeType;)
            if (1 === YC.nodeType) {
              if (HS && Qw(YC).is(ws)) break;
              kS.push(YC)
            } return kS
        },
        qL = function (YC, dp) {
          for (var ws = []; YC; YC = YC.nextSibling) 1 === YC.nodeType && YC !== dp && ws.push(YC);
          return ws
        },
        lg = Qw.expr.match.needsContext;

      function nm(YC, dp) {
        return YC.nodeName && YC.nodeName.toLowerCase() === dp.toLowerCase()
      }
      var dy = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

      function xP(YC, dp, ws) {
        return CO(dp) ? Qw.grep(YC, (function (YC, kS) {
          return !!dp.call(YC, kS, YC) !== ws
        })) : dp.nodeType ? Qw.grep(YC, (function (YC) {
          return YC === dp !== ws
        })) : "string" != typeof dp ? Qw.grep(YC, (function (YC) {
          return ER.call(dp, YC) > -1 !== ws
        })) : Qw.filter(dp, YC, ws)
      }
      Qw.filter = function (YC, dp, ws) {
        var kS = dp[0];
        return ws && (YC = ":not(" + YC + ")"), 1 === dp.length && 1 === kS.nodeType ? Qw.find.matchesSelector(kS, YC) ? [kS] : [] : Qw.find.matches(YC, Qw.grep(dp, (function (YC) {
          return 1 === YC.nodeType
        })))
      }, Qw.fn.extend({
        find: function (YC) {
          var dp, ws, kS = this.length,
            HS = this;
          if ("string" != typeof YC) return this.pushStack(Qw(YC).filter((function () {
            for (dp = 0; dp < kS; dp++)
              if (Qw.contains(HS[dp], this)) return !0
          })));
          for (ws = this.pushStack([]), dp = 0; dp < kS; dp++) Qw.find(YC, HS[dp], ws);
          return kS > 1 ? Qw.uniqueSort(ws) : ws
        },
        filter: function (YC) {
          return this.pushStack(xP(this, YC || [], !1))
        },
        not: function (YC) {
          return this.pushStack(xP(this, YC || [], !0))
        },
        is: function (YC) {
          return !!xP(this, "string" == typeof YC && lg.test(YC) ? Qw(YC) : YC || [], !1).length
        }
      });
      var OZ, Oi = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        uV;
      (Qw.fn.init = function (YC, dp, ws) {
        var kS, HS;
        if (!YC) return this;
        if (ws = ws || OZ, "string" == typeof YC) {
          if (!(kS = "<" === YC[0] && ">" === YC[YC.length - 1] && YC.length >= 3 ? [null, YC, null] : Oi.exec(YC)) || !kS[1] && dp) return !dp || dp.jquery ? (dp || ws).find(YC) : this.constructor(dp).find(YC);
          if (kS[1]) {
            if (dp = dp instanceof Qw ? dp[0] : dp, Qw.merge(this, Qw.parseHTML(kS[1], dp && dp.nodeType ? dp.ownerDocument || dp : kC, !0)), dy.test(kS[1]) && Qw.isPlainObject(dp))
              for (kS in dp) CO(this[kS]) ? this[kS](dp[kS]) : this.attr(kS, dp[kS]);
            return this
          }
          return (HS = kC.getElementById(kS[2])) && (this[0] = HS, this.length = 1), this
        }
        return YC.nodeType ? (this[0] = YC, this.length = 1, this) : CO(YC) ? void 0 !== ws.ready ? ws.ready(YC) : YC(Qw) : Qw.makeArray(YC, this)
      }).prototype = Qw.fn, OZ = Qw(kC);
      var jj = /^(?:parents|prev(?:Until|All))/,
        jv = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
        };

      function VP(YC, dp) {
        for (;
          (YC = YC[dp]) && 1 !== YC.nodeType;);
        return YC
      }
      Qw.fn.extend({
        has: function (YC) {
          var dp = Qw(YC, this),
            ws = dp.length;
          return this.filter((function () {
            for (var YC = 0; YC < ws; YC++)
              if (Qw.contains(this, dp[YC])) return !0
          }))
        },
        closest: function (YC, dp) {
          var ws, kS = 0,
            HS = this.length,
            hG = [],
            uS = "string" != typeof YC && Qw(YC);
          if (!lg.test(YC))
            for (; kS < HS; kS++)
              for (ws = this[kS]; ws && ws !== dp; ws = ws.parentNode)
                if (ws.nodeType < 11 && (uS ? uS.index(ws) > -1 : 1 === ws.nodeType && Qw.find.matchesSelector(ws, YC))) {
                  hG.push(ws);
                  break
                } return this.pushStack(hG.length > 1 ? Qw.uniqueSort(hG) : hG)
        },
        index: function (YC) {
          return YC ? "string" == typeof YC ? ER.call(Qw(YC), this[0]) : ER.call(this, YC.jquery ? YC[0] : YC) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (YC, dp) {
          return this.pushStack(Qw.uniqueSort(Qw.merge(this.get(), Qw(YC, dp))))
        },
        addBack: function (YC) {
          return this.add(null == YC ? this.prevObject : this.prevObject.filter(YC))
        }
      }), Qw.each({
        parent: function (YC) {
          var dp = YC.parentNode;
          return dp && 11 !== dp.nodeType ? dp : null
        },
        parents: function (YC) {
          return gy(YC, "parentNode")
        },
        parentsUntil: function (YC, dp, ws) {
          return gy(YC, "parentNode", ws)
        },
        next: function (YC) {
          return VP(YC, "nextSibling")
        },
        prev: function (YC) {
          return VP(YC, "previousSibling")
        },
        nextAll: function (YC) {
          return gy(YC, "nextSibling")
        },
        prevAll: function (YC) {
          return gy(YC, "previousSibling")
        },
        nextUntil: function (YC, dp, ws) {
          return gy(YC, "nextSibling", ws)
        },
        prevUntil: function (YC, dp, ws) {
          return gy(YC, "previousSibling", ws)
        },
        siblings: function (YC) {
          return qL((YC.parentNode || {}).firstChild, YC)
        },
        children: function (YC) {
          return qL(YC.firstChild)
        },
        contents: function (YC) {
          return null != YC.contentDocument && kS(YC.contentDocument) ? YC.contentDocument : (nm(YC, "template") && (YC = YC.content || YC), Qw.merge([], YC.childNodes))
        }
      }, (function (YC, dp) {
        Qw.fn[YC] = function (ws, kS) {
          var HS = Qw.map(this, dp, ws);
          return "Until" !== YC.slice(-5) && (kS = ws), kS && "string" == typeof kS && (HS = Qw.filter(kS, HS)), this.length > 1 && (jv[YC] || Qw.uniqueSort(HS), jj.test(YC) && HS.reverse()), this.pushStack(HS)
        }
      }));
      var sZ = /[^\x20\t\r\n\f]+/g;

      function Za(YC) {
        var dp = {};
        return Qw.each(YC.match(sZ) || [], (function (YC, ws) {
          dp[ws] = !0
        })), dp
      }

      function Wq(YC) {
        return YC
      }

      function bK(YC) {
        throw YC
      }

      function qD(YC, dp, ws, kS) {
        var HS;
        try {
          YC && CO(HS = YC.promise) ? HS.call(YC).done(dp).fail(ws) : YC && CO(HS = YC.then) ? HS.call(YC, dp, ws) : dp.apply(void 0, [YC].slice(kS))
        } catch (YC) {
          ws.apply(void 0, [YC])
        }
      }
      Qw.Callbacks = function (YC) {
        YC = "string" == typeof YC ? Za(YC) : Qw.extend({}, YC);
        var dp, ws, kS, HS, hG = [],
          uS = [],
          ER = -1,
          Ug = function () {
            for (HS = HS || YC.once, kS = dp = !0; uS.length; ER = -1)
              for (ws = uS.shift(); ++ER < hG.length;) !1 === hG[ER].apply(ws[0], ws[1]) && YC.stopOnFalse && (ER = hG.length, ws = !1);
            YC.memory || (ws = !1), dp = !1, HS && (hG = ws ? [] : "")
          },
          df = {
            add: function () {
              return hG && (ws && !dp && (ER = hG.length - 1, uS.push(ws)), function dp(ws) {
                Qw.each(ws, (function (ws, kS) {
                  CO(kS) ? YC.unique && df.has(kS) || hG.push(kS) : kS && kS.length && "string" !== Kj(kS) && dp(kS)
                }))
              }(arguments), ws && !dp && Ug()), this
            },
            remove: function () {
              return Qw.each(arguments, (function (YC, dp) {
                for (var ws;
                  (ws = Qw.inArray(dp, hG, ws)) > -1;) hG.splice(ws, 1), ws <= ER && ER--
              })), this
            },
            has: function (YC) {
              return YC ? Qw.inArray(YC, hG) > -1 : hG.length > 0
            },
            empty: function () {
              return hG && (hG = []), this
            },
            disable: function () {
              return HS = uS = [], hG = ws = "", this
            },
            disabled: function () {
              return !hG
            },
            lock: function () {
              return HS = uS = [], ws || dp || (hG = ws = ""), this
            },
            locked: function () {
              return !!HS
            },
            fireWith: function (YC, ws) {
              return HS || (ws = [YC, (ws = ws || []).slice ? ws.slice() : ws], uS.push(ws), dp || Ug()), this
            },
            fire: function () {
              return df.fireWith(this, arguments), this
            },
            fired: function () {
              return !!kS
            }
          };
        return df
      }, Qw.extend({
        Deferred: function (dp) {
          var ws = [
              ["notify", "progress", Qw.Callbacks("memory"), Qw.Callbacks("memory"), 2],
              ["resolve", "done", Qw.Callbacks("once memory"), Qw.Callbacks("once memory"), 0, "resolved"],
              ["reject", "fail", Qw.Callbacks("once memory"), Qw.Callbacks("once memory"), 1, "rejected"]
            ],
            kS = "pending",
            HS = {
              state: function () {
                return kS
              },
              always: function () {
                return hG.done(arguments).fail(arguments), this
              },
              catch: function (YC) {
                return HS.then(null, YC)
              },
              pipe: function () {
                var YC = arguments;
                return Qw.Deferred((function (dp) {
                  Qw.each(ws, (function (ws, kS) {
                    var HS = CO(YC[kS[4]]) && YC[kS[4]];
                    hG[kS[1]]((function () {
                      var YC = HS && HS.apply(this, arguments);
                      YC && CO(YC.promise) ? YC.promise().progress(dp.notify).done(dp.resolve).fail(dp.reject) : dp[kS[0] + "With"](this, HS ? [YC] : arguments)
                    }))
                  })), YC = null
                })).promise()
              },
              then: function (dp, kS, HS) {
                var hG = 0;

                function uS(dp, ws, kS, HS) {
                  return function () {
                    var ER = this,
                      Ug = arguments,
                      df = function () {
                        var YC, df;
                        if (!(dp < hG)) {
                          if ((YC = kS.apply(ER, Ug)) === ws.promise()) throw new TypeError("Thenable self-resolution");
                          df = YC && ("object" == typeof YC || "function" == typeof YC) && YC.then, CO(df) ? HS ? df.call(YC, uS(hG, ws, Wq, HS), uS(hG, ws, bK, HS)) : (hG++, df.call(YC, uS(hG, ws, Wq, HS), uS(hG, ws, bK, HS), uS(hG, ws, Wq, ws.notifyWith))) : (kS !== Wq && (ER = void 0, Ug = [YC]), (HS || ws.resolveWith)(ER, Ug))
                        }
                      },
                      iU = HS ? df : function () {
                        try {
                          df()
                        } catch (YC) {
                          Qw.Deferred.exceptionHook && Qw.Deferred.exceptionHook(YC, iU.stackTrace), dp + 1 >= hG && (kS !== bK && (ER = void 0, Ug = [YC]), ws.rejectWith(ER, Ug))
                        }
                      };
                    dp ? iU() : (Qw.Deferred.getStackHook && (iU.stackTrace = Qw.Deferred.getStackHook()), YC.setTimeout(iU))
                  }
                }
                return Qw.Deferred((function (YC) {
                  ws[0][3].add(uS(0, YC, CO(HS) ? HS : Wq, YC.notifyWith)), ws[1][3].add(uS(0, YC, CO(dp) ? dp : Wq)), ws[2][3].add(uS(0, YC, CO(kS) ? kS : bK))
                })).promise()
              },
              promise: function (YC) {
                return null != YC ? Qw.extend(YC, HS) : HS
              }
            },
            hG = {};
          return Qw.each(ws, (function (YC, dp) {
            var uS = dp[2],
              ER = dp[5];
            HS[dp[1]] = uS.add, ER && uS.add((function () {
              kS = ER
            }), ws[3 - YC][2].disable, ws[3 - YC][3].disable, ws[0][2].lock, ws[0][3].lock), uS.add(dp[3].fire), hG[dp[0]] = function () {
              return hG[dp[0] + "With"](this === hG ? void 0 : this, arguments), this
            }, hG[dp[0] + "With"] = uS.fireWith
          })), HS.promise(hG), dp && dp.call(hG, hG), hG
        },
        when: function (YC) {
          var dp = arguments.length,
            ws = dp,
            kS = Array(ws),
            hG = HS.call(arguments),
            uS = Qw.Deferred(),
            ER = function (YC) {
              return function (ws) {
                kS[YC] = this, hG[YC] = arguments.length > 1 ? HS.call(arguments) : ws, --dp || uS.resolveWith(kS, hG)
              }
            };
          if (dp <= 1 && (qD(YC, uS.done(ER(ws)).resolve, uS.reject, !dp), "pending" === uS.state() || CO(hG[ws] && hG[ws].then))) return uS.then();
          for (; ws--;) qD(hG[ws], ER(ws), uS.reject);
          return uS.promise()
        }
      });
      var Sk = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      Qw.Deferred.exceptionHook = function (dp, ws) {
        YC.console && YC.console.warn && dp && Sk.test(dp.name) && YC.console.warn("jQuery.Deferred exception: " + dp.message, dp.stack, ws)
      }, Qw.readyException = function (dp) {
        YC.setTimeout((function () {
          throw dp
        }))
      };
      var mJ = Qw.Deferred();

      function ey() {
        kC.removeEventListener("DOMContentLoaded", ey), YC.removeEventListener("load", ey), Qw.ready()
      }
      Qw.fn.ready = function (YC) {
        return mJ.then(YC).catch((function (YC) {
          Qw.readyException(YC)
        })), this
      }, Qw.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (YC) {
          (!0 === YC ? --Qw.readyWait : Qw.isReady) || (Qw.isReady = !0, !0 !== YC && --Qw.readyWait > 0 || mJ.resolveWith(kC, [Qw]))
        }
      }), Qw.ready.then = mJ.then, "complete" === kC.readyState || "loading" !== kC.readyState && !kC.documentElement.doScroll ? YC.setTimeout(Qw.ready) : (kC.addEventListener("DOMContentLoaded", ey), YC.addEventListener("load", ey));
      var dh = function (YC, dp, ws, kS, HS, hG, uS) {
          var ER = 0,
            Ug = YC.length,
            df = null == ws;
          if ("object" === Kj(ws))
            for (ER in HS = !0, ws) dh(YC, dp, ER, ws[ER], !0, hG, uS);
          else if (void 0 !== kS && (HS = !0, CO(kS) || (uS = !0), df && (uS ? (dp.call(YC, kS), dp = null) : (df = dp, dp = function (YC, dp, ws) {
              return df.call(Qw(YC), ws)
            })), dp))
            for (; ER < Ug; ER++) dp(YC[ER], ws, uS ? kS : kS.call(YC[ER], ER, dp(YC[ER], ws)));
          return HS ? YC : df ? dp.call(YC) : Ug ? dp(YC[0], ws) : hG
        },
        a = /^-ms-/,
        TF = /-([a-z])/g;

      function nK(YC, dp) {
        return dp.toUpperCase()
      }

      function Hw(YC) {
        return YC.replace(a, "ms-").replace(TF, nK)
      }
      var fN = function (YC) {
        return 1 === YC.nodeType || 9 === YC.nodeType || !+YC.nodeType
      };

      function Tk() {
        this.expando = Qw.expando + Tk.uid++
      }
      Tk.uid = 1, Tk.prototype = {
        cache: function (YC) {
          var dp = YC[this.expando];
          return dp || (dp = {}, fN(YC) && (YC.nodeType ? YC[this.expando] = dp : Object.defineProperty(YC, this.expando, {
            value: dp,
            configurable: !0
          }))), dp
        },
        set: function (YC, dp, ws) {
          var kS, HS = this.cache(YC);
          if ("string" == typeof dp) HS[Hw(dp)] = ws;
          else
            for (kS in dp) HS[Hw(kS)] = dp[kS];
          return HS
        },
        get: function (YC, dp) {
          return void 0 === dp ? this.cache(YC) : YC[this.expando] && YC[this.expando][Hw(dp)]
        },
        access: function (YC, dp, ws) {
          return void 0 === dp || dp && "string" == typeof dp && void 0 === ws ? this.get(YC, dp) : (this.set(YC, dp, ws), void 0 !== ws ? ws : dp)
        },
        remove: function (YC, dp) {
          var ws, kS = YC[this.expando];
          if (void 0 !== kS) {
            if (void 0 !== dp) {
              ws = (dp = Array.isArray(dp) ? dp.map(Hw) : (dp = Hw(dp)) in kS ? [dp] : dp.match(sZ) || []).length;
              for (; ws--;) delete kS[dp[ws]]
            }(void 0 === dp || Qw.isEmptyObject(kS)) && (YC.nodeType ? YC[this.expando] = void 0 : delete YC[this.expando])
          }
        },
        hasData: function (YC) {
          var dp = YC[this.expando];
          return void 0 !== dp && !Qw.isEmptyObject(dp)
        }
      };
      var mT = new Tk,
        fi = new Tk,
        uF = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ao = /[A-Z]/g;

      function ze(YC) {
        return "true" === YC || "false" !== YC && ("null" === YC ? null : YC === +YC + "" ? +YC : uF.test(YC) ? JSON.parse(YC) : YC)
      }

      function oo(YC, dp, ws) {
        var kS;
        if (void 0 === ws && 1 === YC.nodeType)
          if (kS = "data-" + dp.replace(Ao, "-$&").toLowerCase(), "string" == typeof (ws = YC.getAttribute(kS))) {
            try {
              ws = ze(ws)
            } catch (YC) {}
            fi.set(YC, dp, ws)
          } else ws = void 0;
        return ws
      }
      Qw.extend({
        hasData: function (YC) {
          return fi.hasData(YC) || mT.hasData(YC)
        },
        data: function (YC, dp, ws) {
          return fi.access(YC, dp, ws)
        },
        removeData: function (YC, dp) {
          fi.remove(YC, dp)
        },
        _data: function (YC, dp, ws) {
          return mT.access(YC, dp, ws)
        },
        _removeData: function (YC, dp) {
          mT.remove(YC, dp)
        }
      }), Qw.fn.extend({
        data: function (YC, dp) {
          var ws, kS, HS, hG = this[0],
            uS = hG && hG.attributes;
          if (void 0 === YC) {
            if (this.length && (HS = fi.get(hG), 1 === hG.nodeType && !mT.get(hG, "hasDataAttrs"))) {
              for (ws = uS.length; ws--;) uS[ws] && 0 === (kS = uS[ws].name).indexOf("data-") && (kS = Hw(kS.slice(5)), oo(hG, kS, HS[kS]));
              mT.set(hG, "hasDataAttrs", !0)
            }
            return HS
          }
          return "object" == typeof YC ? this.each((function () {
            fi.set(this, YC)
          })) : dh(this, (function (dp) {
            var ws;
            if (hG && void 0 === dp) return void 0 !== (ws = fi.get(hG, YC)) || void 0 !== (ws = oo(hG, YC)) ? ws : void 0;
            this.each((function () {
              fi.set(this, YC, dp)
            }))
          }), null, dp, arguments.length > 1, null, !0)
        },
        removeData: function (YC) {
          return this.each((function () {
            fi.remove(this, YC)
          }))
        }
      }), Qw.extend({
        queue: function (YC, dp, ws) {
          var kS;
          if (YC) return dp = (dp || "fx") + "queue", kS = mT.get(YC, dp), ws && (!kS || Array.isArray(ws) ? kS = mT.access(YC, dp, Qw.makeArray(ws)) : kS.push(ws)), kS || []
        },
        dequeue: function (YC, dp) {
          dp = dp || "fx";
          var ws = Qw.queue(YC, dp),
            kS = ws.length,
            HS = ws.shift(),
            hG = Qw._queueHooks(YC, dp),
            uS = function () {
              Qw.dequeue(YC, dp)
            };
          "inprogress" === HS && (HS = ws.shift(), kS--), HS && ("fx" === dp && ws.unshift("inprogress"), delete hG.stop, HS.call(YC, uS, hG)), !kS && hG && hG.empty.fire()
        },
        _queueHooks: function (YC, dp) {
          var ws = dp + "queueHooks";
          return mT.get(YC, ws) || mT.access(YC, ws, {
            empty: Qw.Callbacks("once memory").add((function () {
              mT.remove(YC, [dp + "queue", ws])
            }))
          })
        }
      }), Qw.fn.extend({
        queue: function (YC, dp) {
          var ws = 2;
          return "string" != typeof YC && (dp = YC, YC = "fx", ws--), arguments.length < ws ? Qw.queue(this[0], YC) : void 0 === dp ? this : this.each((function () {
            var ws = Qw.queue(this, YC, dp);
            Qw._queueHooks(this, YC), "fx" === YC && "inprogress" !== ws[0] && Qw.dequeue(this, YC)
          }))
        },
        dequeue: function (YC) {
          return this.each((function () {
            Qw.dequeue(this, YC)
          }))
        },
        clearQueue: function (YC) {
          return this.queue(YC || "fx", [])
        },
        promise: function (YC, dp) {
          var ws, kS = 1,
            HS = Qw.Deferred(),
            hG = this,
            uS = this.length,
            ER = function () {
              --kS || HS.resolveWith(hG, [hG])
            };
          for ("string" != typeof YC && (dp = YC, YC = void 0), YC = YC || "fx"; uS--;)(ws = mT.get(hG[uS], YC + "queueHooks")) && ws.empty && (kS++, ws.empty.add(ER));
          return ER(), HS.promise(dp)
        }
      });
      var oL = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        CF = new RegExp("^(?:([+-])=|)(" + oL + ")([a-z%]*)$", "i"),
        sL = ["Top", "Right", "Bottom", "Left"],
        zZ = kC.documentElement,
        Oj = function (YC) {
          return Qw.contains(YC.ownerDocument, YC)
        },
        gw = {
          composed: !0
        };
      zZ.getRootNode && (Oj = function (YC) {
        return Qw.contains(YC.ownerDocument, YC) || YC.getRootNode(gw) === YC.ownerDocument
      });
      var EK = function (YC, dp) {
        return "none" === (YC = dp || YC).style.display || "" === YC.style.display && Oj(YC) && "none" === Qw.css(YC, "display")
      };

      function yy(YC, dp, ws, kS) {
        var HS, hG, uS = 20,
          ER = kS ? function () {
            return kS.cur()
          } : function () {
            return Qw.css(YC, dp, "")
          },
          Ug = ER(),
          df = ws && ws[3] || (Qw.cssNumber[dp] ? "" : "px"),
          iU = YC.nodeType && (Qw.cssNumber[dp] || "px" !== df && +Ug) && CF.exec(Qw.css(YC, dp));
        if (iU && iU[3] !== df) {
          for (Ug /= 2, df = df || iU[3], iU = +Ug || 1; uS--;) Qw.style(YC, dp, iU + df), (1 - hG) * (1 - (hG = ER() / Ug || .5)) <= 0 && (uS = 0), iU /= hG;
          iU *= 2, Qw.style(YC, dp, iU + df), ws = ws || []
        }
        return ws && (iU = +iU || +Ug || 0, HS = ws[1] ? iU + (ws[1] + 1) * ws[2] : +ws[2], kS && (kS.unit = df, kS.start = iU, kS.end = HS)), HS
      }
      var tx = {};

      function xW(YC) {
        var dp, ws = YC.ownerDocument,
          kS = YC.nodeName,
          HS = tx[kS];
        return HS || (dp = ws.body.appendChild(ws.createElement(kS)), HS = Qw.css(dp, "display"), dp.parentNode.removeChild(dp), "none" === HS && (HS = "block"), tx[kS] = HS, HS)
      }

      function EP(YC, dp) {
        for (var ws, kS, HS = [], hG = 0, uS = YC.length; hG < uS; hG++)(kS = YC[hG]).style && (ws = kS.style.display, dp ? ("none" === ws && (HS[hG] = mT.get(kS, "display") || null, HS[hG] || (kS.style.display = "")), "" === kS.style.display && EK(kS) && (HS[hG] = xW(kS))) : "none" !== ws && (HS[hG] = "none", mT.set(kS, "display", ws)));
        for (hG = 0; hG < uS; hG++) null != HS[hG] && (YC[hG].style.display = HS[hG]);
        return YC
      }
      Qw.fn.extend({
        show: function () {
          return EP(this, !0)
        },
        hide: function () {
          return EP(this)
        },
        toggle: function (YC) {
          return "boolean" == typeof YC ? YC ? this.show() : this.hide() : this.each((function () {
            EK(this) ? Qw(this).show() : Qw(this).hide()
          }))
        }
      });
      var SA = /^(?:checkbox|radio)$/i,
        kH = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        dw = /^$|^module$|\/(?:java|ecma)script/i;
      ! function () {
        var YC, dp = kC.createDocumentFragment().appendChild(kC.createElement("div")),
          ws = kC.createElement("input");
        ws.setAttribute("type", "radio"), ws.setAttribute("checked", "checked"), ws.setAttribute("name", "t"), dp.appendChild(ws), Zf.checkClone = dp.cloneNode(!0).cloneNode(!0).lastChild.checked, dp.innerHTML = "<textarea>x</textarea>", Zf.noCloneChecked = !!dp.cloneNode(!0).lastChild.defaultValue, dp.innerHTML = "<option></option>", Zf.option = !!dp.lastChild
      }();
      var Gw = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };

      function Wx(YC, dp) {
        var ws;
        return ws = void 0 !== YC.getElementsByTagName ? YC.getElementsByTagName(dp || "*") : void 0 !== YC.querySelectorAll ? YC.querySelectorAll(dp || "*") : [], void 0 === dp || dp && nm(YC, dp) ? Qw.merge([YC], ws) : ws
      }

      function SE(YC, dp) {
        for (var ws = 0, kS = YC.length; ws < kS; ws++) mT.set(YC[ws], "globalEval", !dp || mT.get(dp[ws], "globalEval"))
      }
      Gw.tbody = Gw.tfoot = Gw.colgroup = Gw.caption = Gw.thead, Gw.th = Gw.td, Zf.option || (Gw.optgroup = Gw.option = [1, "<select multiple='multiple'>", "</select>"]);
      var HR = /<|&#?\w+;/;

      function yI(YC, dp, ws, kS, HS) {
        for (var hG, uS, ER, Ug, df, iU, qq = dp.createDocumentFragment(), dH = [], Zf = 0, CO = YC.length; Zf < CO; Zf++)
          if ((hG = YC[Zf]) || 0 === hG)
            if ("object" === Kj(hG)) Qw.merge(dH, hG.nodeType ? [hG] : hG);
            else if (HR.test(hG)) {
          for (uS = uS || qq.appendChild(dp.createElement("div")), ER = (kH.exec(hG) || ["", ""])[1].toLowerCase(), Ug = Gw[ER] || Gw._default, uS.innerHTML = Ug[1] + Qw.htmlPrefilter(hG) + Ug[2], iU = Ug[0]; iU--;) uS = uS.lastChild;
          Qw.merge(dH, uS.childNodes), (uS = qq.firstChild).textContent = ""
        } else dH.push(dp.createTextNode(hG));
        for (qq.textContent = "", Zf = 0; hG = dH[Zf++];)
          if (kS && Qw.inArray(hG, kS) > -1) HS && HS.push(hG);
          else if (df = Oj(hG), uS = Wx(qq.appendChild(hG), "script"), df && SE(uS), ws)
          for (iU = 0; hG = uS[iU++];) dw.test(hG.type || "") && ws.push(hG);
        return qq
      }
      var Cj = /^([^.]*)(?:\.(.+)|)/;

      function Gd() {
        return !0
      }

      function sP() {
        return !1
      }

      function ao(YC, dp) {
        return YC === Ym() == ("focus" === dp)
      }

      function Ym() {
        try {
          return kC.activeElement
        } catch (YC) {}
      }

      function Un(YC, dp, ws, kS, HS, hG) {
        var uS, ER;
        if ("object" == typeof dp) {
          for (ER in "string" != typeof ws && (kS = kS || ws, ws = void 0), dp) Un(YC, ER, ws, kS, dp[ER], hG);
          return YC
        }
        if (null == kS && null == HS ? (HS = ws, kS = ws = void 0) : null == HS && ("string" == typeof ws ? (HS = kS, kS = void 0) : (HS = kS, kS = ws, ws = void 0)), !1 === HS) HS = sP;
        else if (!HS) return YC;
        return 1 === hG && (uS = HS, HS = function (YC) {
          return Qw().off(YC), uS.apply(this, arguments)
        }, HS.guid = uS.guid || (uS.guid = Qw.guid++)), YC.each((function () {
          Qw.event.add(this, dp, HS, kS, ws)
        }))
      }

      function DB(YC, dp, ws) {
        ws ? (mT.set(YC, dp, !1), Qw.event.add(YC, dp, {
          namespace: !1,
          handler: function (YC) {
            var kS, hG, uS = mT.get(this, dp);
            if (1 & YC.isTrigger && this[dp]) {
              if (uS.length)(Qw.event.special[dp] || {}).delegateType && YC.stopPropagation();
              else if (uS = HS.call(arguments), mT.set(this, dp, uS), kS = ws(this, dp), this[dp](), uS !== (hG = mT.get(this, dp)) || kS ? mT.set(this, dp, !1) : hG = {}, uS !== hG) return YC.stopImmediatePropagation(), YC.preventDefault(), hG && hG.value
            } else uS.length && (mT.set(this, dp, {
              value: Qw.event.trigger(Qw.extend(uS[0], Qw.Event.prototype), uS.slice(1), this)
            }), YC.stopImmediatePropagation())
          }
        })) : void 0 === mT.get(YC, dp) && Qw.event.add(YC, dp, Gd)
      }
      Qw.event = {
        global: {},
        add: function (YC, dp, ws, kS, HS) {
          var hG, uS, ER, Ug, df, iU, qq, dH, Zf, CO, Zi, kC = mT.get(YC);
          if (fN(YC))
            for (ws.handler && (ws = (hG = ws).handler, HS = hG.selector), HS && Qw.find.matchesSelector(zZ, HS), ws.guid || (ws.guid = Qw.guid++), (Ug = kC.events) || (Ug = kC.events = Object.create(null)), (uS = kC.handle) || (uS = kC.handle = function (dp) {
                return void 0 !== Qw && Qw.event.triggered !== dp.type ? Qw.event.dispatch.apply(YC, arguments) : void 0
              }), df = (dp = (dp || "").match(sZ) || [""]).length; df--;) Zf = Zi = (ER = Cj.exec(dp[df]) || [])[1], CO = (ER[2] || "").split(".").sort(), Zf && (qq = Qw.event.special[Zf] || {}, Zf = (HS ? qq.delegateType : qq.bindType) || Zf, qq = Qw.event.special[Zf] || {}, iU = Qw.extend({
              type: Zf,
              origType: Zi,
              data: kS,
              handler: ws,
              guid: ws.guid,
              selector: HS,
              needsContext: HS && Qw.expr.match.needsContext.test(HS),
              namespace: CO.join(".")
            }, hG), (dH = Ug[Zf]) || ((dH = Ug[Zf] = []).delegateCount = 0, qq.setup && !1 !== qq.setup.call(YC, kS, CO, uS) || YC.addEventListener && YC.addEventListener(Zf, uS)), qq.add && (qq.add.call(YC, iU), iU.handler.guid || (iU.handler.guid = ws.guid)), HS ? dH.splice(dH.delegateCount++, 0, iU) : dH.push(iU), Qw.event.global[Zf] = !0)
        },
        remove: function (YC, dp, ws, kS, HS) {
          var hG, uS, ER, Ug, df, iU, qq, dH, Zf, CO, Zi, kC = mT.hasData(YC) && mT.get(YC);
          if (kC && (Ug = kC.events)) {
            for (df = (dp = (dp || "").match(sZ) || [""]).length; df--;)
              if (Zf = Zi = (ER = Cj.exec(dp[df]) || [])[1], CO = (ER[2] || "").split(".").sort(), Zf) {
                for (qq = Qw.event.special[Zf] || {}, dH = Ug[Zf = (kS ? qq.delegateType : qq.bindType) || Zf] || [], ER = ER[2] && new RegExp("(^|\\.)" + CO.join("\\.(?:.*\\.|)") + "(\\.|$)"), uS = hG = dH.length; hG--;) iU = dH[hG], !HS && Zi !== iU.origType || ws && ws.guid !== iU.guid || ER && !ER.test(iU.namespace) || kS && kS !== iU.selector && ("**" !== kS || !iU.selector) || (dH.splice(hG, 1), iU.selector && dH.delegateCount--, qq.remove && qq.remove.call(YC, iU));
                uS && !dH.length && (qq.teardown && !1 !== qq.teardown.call(YC, CO, kC.handle) || Qw.removeEvent(YC, Zf, kC.handle), delete Ug[Zf])
              } else
                for (Zf in Ug) Qw.event.remove(YC, Zf + dp[df], ws, kS, !0);
            Qw.isEmptyObject(Ug) && mT.remove(YC, "handle events")
          }
        },
        dispatch: function (YC) {
          var dp, ws, kS, HS, hG, uS, ER = new Array(arguments.length),
            Ug = Qw.event.fix(YC),
            df = (mT.get(this, "events") || Object.create(null))[Ug.type] || [],
            iU = Qw.event.special[Ug.type] || {};
          for (ER[0] = Ug, dp = 1; dp < arguments.length; dp++) ER[dp] = arguments[dp];
          if (Ug.delegateTarget = this, !iU.preDispatch || !1 !== iU.preDispatch.call(this, Ug)) {
            for (uS = Qw.event.handlers.call(this, Ug, df), dp = 0;
              (HS = uS[dp++]) && !Ug.isPropagationStopped();)
              for (Ug.currentTarget = HS.elem, ws = 0;
                (hG = HS.handlers[ws++]) && !Ug.isImmediatePropagationStopped();) Ug.rnamespace && !1 !== hG.namespace && !Ug.rnamespace.test(hG.namespace) || (Ug.handleObj = hG, Ug.data = hG.data, void 0 !== (kS = ((Qw.event.special[hG.origType] || {}).handle || hG.handler).apply(HS.elem, ER)) && !1 === (Ug.result = kS) && (Ug.preventDefault(), Ug.stopPropagation()));
            return iU.postDispatch && iU.postDispatch.call(this, Ug), Ug.result
          }
        },
        handlers: function (YC, dp) {
          var ws, kS, HS, hG, uS, ER = [],
            Ug = dp.delegateCount,
            df = YC.target;
          if (Ug && df.nodeType && !("click" === YC.type && YC.button >= 1))
            for (; df !== this; df = df.parentNode || this)
              if (1 === df.nodeType && ("click" !== YC.type || !0 !== df.disabled)) {
                for (hG = [], uS = {}, ws = 0; ws < Ug; ws++) void 0 === uS[HS = (kS = dp[ws]).selector + " "] && (uS[HS] = kS.needsContext ? Qw(HS, this).index(df) > -1 : Qw.find(HS, this, null, [df]).length), uS[HS] && hG.push(kS);
                hG.length && ER.push({
                  elem: df,
                  handlers: hG
                })
              } return df = this, Ug < dp.length && ER.push({
            elem: df,
            handlers: dp.slice(Ug)
          }), ER
        },
        addProp: function (YC, dp) {
          Object.defineProperty(Qw.Event.prototype, YC, {
            enumerable: !0,
            configurable: !0,
            get: CO(dp) ? function () {
              if (this.originalEvent) return dp(this.originalEvent)
            } : function () {
              if (this.originalEvent) return this.originalEvent[YC]
            },
            set: function (dp) {
              Object.defineProperty(this, YC, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: dp
              })
            }
          })
        },
        fix: function (YC) {
          return YC[Qw.expando] ? YC : new Qw.Event(YC)
        },
        special: {
          load: {
            noBubble: !0
          },
          click: {
            setup: function (YC) {
              var dp = this || YC;
              return SA.test(dp.type) && dp.click && nm(dp, "input") && DB(dp, "click", Gd), !1
            },
            trigger: function (YC) {
              var dp = this || YC;
              return SA.test(dp.type) && dp.click && nm(dp, "input") && DB(dp, "click"), !0
            },
            _default: function (YC) {
              var dp = YC.target;
              return SA.test(dp.type) && dp.click && nm(dp, "input") && mT.get(dp, "click") || nm(dp, "a")
            }
          },
          beforeunload: {
            postDispatch: function (YC) {
              void 0 !== YC.result && YC.originalEvent && (YC.originalEvent.returnValue = YC.result)
            }
          }
        }
      }, Qw.removeEvent = function (YC, dp, ws) {
        YC.removeEventListener && YC.removeEventListener(dp, ws)
      }, Qw.Event = function (YC, dp) {
        if (!(this instanceof Qw.Event)) return new Qw.Event(YC, dp);
        YC && YC.type ? (this.originalEvent = YC, this.type = YC.type, this.isDefaultPrevented = YC.defaultPrevented || void 0 === YC.defaultPrevented && !1 === YC.returnValue ? Gd : sP, this.target = YC.target && 3 === YC.target.nodeType ? YC.target.parentNode : YC.target, this.currentTarget = YC.currentTarget, this.relatedTarget = YC.relatedTarget) : this.type = YC, dp && Qw.extend(this, dp), this.timeStamp = YC && YC.timeStamp || Date.now(), this[Qw.expando] = !0
      }, Qw.Event.prototype = {
        constructor: Qw.Event,
        isDefaultPrevented: sP,
        isPropagationStopped: sP,
        isImmediatePropagationStopped: sP,
        isSimulated: !1,
        preventDefault: function () {
          var YC = this.originalEvent;
          this.isDefaultPrevented = Gd, YC && !this.isSimulated && YC.preventDefault()
        },
        stopPropagation: function () {
          var YC = this.originalEvent;
          this.isPropagationStopped = Gd, YC && !this.isSimulated && YC.stopPropagation()
        },
        stopImmediatePropagation: function () {
          var YC = this.originalEvent;
          this.isImmediatePropagationStopped = Gd, YC && !this.isSimulated && YC.stopImmediatePropagation(), this.stopPropagation()
        }
      }, Qw.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
      }, Qw.event.addProp), Qw.each({
        focus: "focusin",
        blur: "focusout"
      }, (function (YC, dp) {
        Qw.event.special[YC] = {
          setup: function () {
            return DB(this, YC, ao), !1
          },
          trigger: function () {
            return DB(this, YC), !0
          },
          _default: function () {
            return !0
          },
          delegateType: dp
        }
      })), Qw.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, (function (YC, dp) {
        Qw.event.special[YC] = {
          delegateType: dp,
          bindType: dp,
          handle: function (YC) {
            var ws, kS = this,
              HS = YC.relatedTarget,
              hG = YC.handleObj;
            return HS && (HS === kS || Qw.contains(kS, HS)) || (YC.type = hG.origType, ws = hG.handler.apply(this, arguments), YC.type = dp), ws
          }
        }
      })), Qw.fn.extend({
        on: function (YC, dp, ws, kS) {
          return Un(this, YC, dp, ws, kS)
        },
        one: function (YC, dp, ws, kS) {
          return Un(this, YC, dp, ws, kS, 1)
        },
        off: function (YC, dp, ws) {
          var kS, HS;
          if (YC && YC.preventDefault && YC.handleObj) return kS = YC.handleObj, Qw(YC.delegateTarget).off(kS.namespace ? kS.origType + "." + kS.namespace : kS.origType, kS.selector, kS.handler), this;
          if ("object" == typeof YC) {
            for (HS in YC) this.off(HS, dp, YC[HS]);
            return this
          }
          return !1 !== dp && "function" != typeof dp || (ws = dp, dp = void 0), !1 === ws && (ws = sP), this.each((function () {
            Qw.event.remove(this, YC, ws, dp)
          }))
        }
      });
      var nL = /<script|<style|<link/i,
        uo = /checked\s*(?:[^=]|=\s*.checked.)/i,
        xZ = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

      function ZL(YC, dp) {
        return nm(YC, "table") && nm(11 !== dp.nodeType ? dp : dp.firstChild, "tr") && Qw(YC).children("tbody")[0] || YC
      }

      function Ua(YC) {
        return YC.type = (null !== YC.getAttribute("type")) + "/" + YC.type, YC
      }

      function Nt(YC) {
        return "true/" === (YC.type || "").slice(0, 5) ? YC.type = YC.type.slice(5) : YC.removeAttribute("type"), YC
      }

      function PJ(YC, dp) {
        var ws, kS, HS, hG, uS, ER, Ug;
        if (1 === dp.nodeType) {
          if (mT.hasData(YC) && (Ug = (hG = mT.get(YC)).events))
            for (HS in mT.remove(dp, "handle events"), Ug)
              for (ws = 0, kS = Ug[HS].length; ws < kS; ws++) Qw.event.add(dp, HS, Ug[HS][ws]);
          fi.hasData(YC) && (uS = fi.access(YC), ER = Qw.extend({}, uS), fi.set(dp, ER))
        }
      }

      function Jj(YC, dp) {
        var ws = dp.nodeName.toLowerCase();
        "input" === ws && SA.test(YC.type) ? dp.checked = YC.checked : "input" !== ws && "textarea" !== ws || (dp.defaultValue = YC.defaultValue)
      }

      function cf(YC, dp, ws, kS) {
        dp = hG(dp);
        var HS, uS, ER, Ug, df, iU, qq = 0,
          dH = YC.length,
          Zi = dH - 1,
          kC = dp[0],
          yc = CO(kC);
        if (yc || dH > 1 && "string" == typeof kC && !Zf.checkClone && uo.test(kC)) return YC.each((function (HS) {
          var hG = YC.eq(HS);
          yc && (dp[0] = kC.call(this, HS, hG.html())), cf(hG, dp, ws, kS)
        }));
        if (dH && (uS = (HS = yI(dp, YC[0].ownerDocument, !1, YC, kS)).firstChild, 1 === HS.childNodes.length && (HS = uS), uS || kS)) {
          for (Ug = (ER = Qw.map(Wx(HS, "script"), Ua)).length; qq < dH; qq++) df = HS, qq !== Zi && (df = Qw.clone(df, !0, !0), Ug && Qw.merge(ER, Wx(df, "script"))), ws.call(YC[qq], df, qq);
          if (Ug)
            for (iU = ER[ER.length - 1].ownerDocument, Qw.map(ER, Nt), qq = 0; qq < Ug; qq++) df = ER[qq], dw.test(df.type || "") && !mT.access(df, "globalEval") && Qw.contains(iU, df) && (df.src && "module" !== (df.type || "").toLowerCase() ? Qw._evalUrl && !df.noModule && Qw._evalUrl(df.src, {
              nonce: df.nonce || df.getAttribute("nonce")
            }, iU) : cU(df.textContent.replace(xZ, ""), df, iU))
        }
        return YC
      }

      function tc(YC, dp, ws) {
        for (var kS, HS = dp ? Qw.filter(dp, YC) : YC, hG = 0; null != (kS = HS[hG]); hG++) ws || 1 !== kS.nodeType || Qw.cleanData(Wx(kS)), kS.parentNode && (ws && Oj(kS) && SE(Wx(kS, "script")), kS.parentNode.removeChild(kS));
        return YC
      }
      Qw.extend({
        htmlPrefilter: function (YC) {
          return YC
        },
        clone: function (YC, dp, ws) {
          var kS, HS, hG, uS, ER = YC.cloneNode(!0),
            Ug = Oj(YC);
          if (!(Zf.noCloneChecked || 1 !== YC.nodeType && 11 !== YC.nodeType || Qw.isXMLDoc(YC)))
            for (uS = Wx(ER), kS = 0, HS = (hG = Wx(YC)).length; kS < HS; kS++) Jj(hG[kS], uS[kS]);
          if (dp)
            if (ws)
              for (hG = hG || Wx(YC), uS = uS || Wx(ER), kS = 0, HS = hG.length; kS < HS; kS++) PJ(hG[kS], uS[kS]);
            else PJ(YC, ER);
          return (uS = Wx(ER, "script")).length > 0 && SE(uS, !Ug && Wx(YC, "script")), ER
        },
        cleanData: function (YC) {
          for (var dp, ws, kS, HS = Qw.event.special, hG = 0; void 0 !== (ws = YC[hG]); hG++)
            if (fN(ws)) {
              if (dp = ws[mT.expando]) {
                if (dp.events)
                  for (kS in dp.events) HS[kS] ? Qw.event.remove(ws, kS) : Qw.removeEvent(ws, kS, dp.handle);
                ws[mT.expando] = void 0
              }
              ws[fi.expando] && (ws[fi.expando] = void 0)
            }
        }
      }), Qw.fn.extend({
        detach: function (YC) {
          return tc(this, YC, !0)
        },
        remove: function (YC) {
          return tc(this, YC)
        },
        text: function (YC) {
          return dh(this, (function (YC) {
            return void 0 === YC ? Qw.text(this) : this.empty().each((function () {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = YC)
            }))
          }), null, YC, arguments.length)
        },
        append: function () {
          return cf(this, arguments, (function (YC) {
            var dp;
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ZL(this, YC).appendChild(YC)
          }))
        },
        prepend: function () {
          return cf(this, arguments, (function (YC) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var dp = ZL(this, YC);
              dp.insertBefore(YC, dp.firstChild)
            }
          }))
        },
        before: function () {
          return cf(this, arguments, (function (YC) {
            this.parentNode && this.parentNode.insertBefore(YC, this)
          }))
        },
        after: function () {
          return cf(this, arguments, (function (YC) {
            this.parentNode && this.parentNode.insertBefore(YC, this.nextSibling)
          }))
        },
        empty: function () {
          for (var YC, dp = 0; null != (YC = this[dp]); dp++) 1 === YC.nodeType && (Qw.cleanData(Wx(YC, !1)), YC.textContent = "");
          return this
        },
        clone: function (YC, dp) {
          return YC = null != YC && YC, dp = null == dp ? YC : dp, this.map((function () {
            return Qw.clone(this, YC, dp)
          }))
        },
        html: function (YC) {
          return dh(this, (function (YC) {
            var dp = this[0] || {},
              ws = 0,
              kS = this.length;
            if (void 0 === YC && 1 === dp.nodeType) return dp.innerHTML;
            if ("string" == typeof YC && !nL.test(YC) && !Gw[(kH.exec(YC) || ["", ""])[1].toLowerCase()]) {
              YC = Qw.htmlPrefilter(YC);
              try {
                for (; ws < kS; ws++) 1 === (dp = this[ws] || {}).nodeType && (Qw.cleanData(Wx(dp, !1)), dp.innerHTML = YC);
                dp = 0
              } catch (YC) {}
            }
            dp && this.empty().append(YC)
          }), null, YC, arguments.length)
        },
        replaceWith: function () {
          var YC = [];
          return cf(this, arguments, (function (dp) {
            var ws = this.parentNode;
            Qw.inArray(this, YC) < 0 && (Qw.cleanData(Wx(this)), ws && ws.replaceChild(dp, this))
          }), YC)
        }
      }), Qw.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, (function (YC, dp) {
        Qw.fn[YC] = function (YC) {
          for (var ws, kS = [], HS = Qw(YC), hG = HS.length - 1, ER = 0; ER <= hG; ER++) ws = ER === hG ? this : this.clone(!0), Qw(HS[ER])[dp](ws), uS.apply(kS, ws.get());
          return this.pushStack(kS)
        }
      }));
      var NT = new RegExp("^(" + oL + ")(?!px)[a-z%]+$", "i"),
        JX = function (dp) {
          var ws = dp.ownerDocument.defaultView;
          return ws && ws.opener || (ws = YC), ws.getComputedStyle(dp)
        },
        wY = function (YC, dp, ws) {
          var kS, HS, hG = {};
          for (HS in dp) hG[HS] = YC.style[HS], YC.style[HS] = dp[HS];
          for (HS in kS = ws.call(YC), dp) YC.style[HS] = hG[HS];
          return kS
        },
        zz = new RegExp(sL.join("|"), "i");

      function tI(YC, dp, ws) {
        var kS, HS, hG, uS, ER = YC.style;
        return (ws = ws || JX(YC)) && ("" !== (uS = ws.getPropertyValue(dp) || ws[dp]) || Oj(YC) || (uS = Qw.style(YC, dp)), !Zf.pixelBoxStyles() && NT.test(uS) && zz.test(dp) && (kS = ER.width, HS = ER.minWidth, hG = ER.maxWidth, ER.minWidth = ER.maxWidth = ER.width = uS, uS = ws.width, ER.width = kS, ER.minWidth = HS, ER.maxWidth = hG)), void 0 !== uS ? uS + "" : uS
      }

      function lz(YC, dp) {
        return {
          get: function () {
            if (!YC()) return (this.get = dp).apply(this, arguments);
            delete this.get
          }
        }
      }! function () {
        function dp() {
          if (iU) {
            df.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0", iU.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%", zZ.appendChild(df).appendChild(iU);
            var dp = YC.getComputedStyle(iU);
            kS = "1%" !== dp.top, Ug = 12 === ws(dp.marginLeft), iU.style.right = "60%", uS = 36 === ws(dp.right), HS = 36 === ws(dp.width), iU.style.position = "absolute", hG = 12 === ws(iU.offsetWidth / 3), zZ.removeChild(df), iU = null
          }
        }

        function ws(YC) {
          return Math.round(parseFloat(YC))
        }
        var kS, HS, hG, uS, ER, Ug, df = kC.createElement("div"),
          iU = kC.createElement("div");
        iU.style && (iU.style.backgroundClip = "content-box", iU.cloneNode(!0).style.backgroundClip = "", Zf.clearCloneStyle = "content-box" === iU.style.backgroundClip, Qw.extend(Zf, {
          boxSizingReliable: function () {
            return dp(), HS
          },
          pixelBoxStyles: function () {
            return dp(), uS
          },
          pixelPosition: function () {
            return dp(), kS
          },
          reliableMarginLeft: function () {
            return dp(), Ug
          },
          scrollboxSize: function () {
            return dp(), hG
          },
          reliableTrDimensions: function () {
            var dp, ws, kS, HS;
            return null == ER && (dp = kC.createElement("table"), ws = kC.createElement("tr"), kS = kC.createElement("div"), dp.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", ws.style.cssText = "border:1px solid", ws.style.height = "1px", kS.style.height = "9px", kS.style.display = "block", zZ.appendChild(dp).appendChild(ws).appendChild(kS), HS = YC.getComputedStyle(ws), ER = parseInt(HS.height, 10) + parseInt(HS.borderTopWidth, 10) + parseInt(HS.borderBottomWidth, 10) === ws.offsetHeight, zZ.removeChild(dp)), ER
          }
        }))
      }();
      var HM = ["Webkit", "Moz", "ms"],
        Sw = kC.createElement("div").style,
        tE = {};

      function Pv(YC) {
        for (var dp = YC[0].toUpperCase() + YC.slice(1), ws = HM.length; ws--;)
          if ((YC = HM[ws] + dp) in Sw) return YC
      }

      function Di(YC) {
        var dp = Qw.cssProps[YC] || tE[YC];
        return dp || (YC in Sw ? YC : tE[YC] = Pv(YC) || YC)
      }
      var tG = /^(none|table(?!-c[ea]).+)/,
        dn = /^--/,
        Cx = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
        },
        DV = {
          letterSpacing: "0",
          fontWeight: "400"
        };

      function Ds(YC, dp, ws) {
        var kS = CF.exec(dp);
        return kS ? Math.max(0, kS[2] - (ws || 0)) + (kS[3] || "px") : dp
      }

      function sG(YC, dp, ws, kS, HS, hG) {
        var uS = "width" === dp ? 1 : 0,
          ER = 0,
          Ug = 0;
        if (ws === (kS ? "border" : "content")) return 0;
        for (; uS < 4; uS += 2) "margin" === ws && (Ug += Qw.css(YC, ws + sL[uS], !0, HS)), kS ? ("content" === ws && (Ug -= Qw.css(YC, "padding" + sL[uS], !0, HS)), "margin" !== ws && (Ug -= Qw.css(YC, "border" + sL[uS] + "Width", !0, HS))) : (Ug += Qw.css(YC, "padding" + sL[uS], !0, HS), "padding" !== ws ? Ug += Qw.css(YC, "border" + sL[uS] + "Width", !0, HS) : ER += Qw.css(YC, "border" + sL[uS] + "Width", !0, HS));
        return !kS && hG >= 0 && (Ug += Math.max(0, Math.ceil(YC["offset" + dp[0].toUpperCase() + dp.slice(1)] - hG - Ug - ER - .5)) || 0), Ug
      }

      function jC(YC, dp, ws) {
        var kS = JX(YC),
          HS, hG = (!Zf.boxSizingReliable() || ws) && "border-box" === Qw.css(YC, "boxSizing", !1, kS),
          uS = hG,
          ER = tI(YC, dp, kS),
          Ug = "offset" + dp[0].toUpperCase() + dp.slice(1);
        if (NT.test(ER)) {
          if (!ws) return ER;
          ER = "auto"
        }
        return (!Zf.boxSizingReliable() && hG || !Zf.reliableTrDimensions() && nm(YC, "tr") || "auto" === ER || !parseFloat(ER) && "inline" === Qw.css(YC, "display", !1, kS)) && YC.getClientRects().length && (hG = "border-box" === Qw.css(YC, "boxSizing", !1, kS), (uS = Ug in YC) && (ER = YC[Ug])), (ER = parseFloat(ER) || 0) + sG(YC, dp, ws || (hG ? "border" : "content"), uS, kS, ER) + "px"
      }

      function oO(YC, dp, ws, kS, HS) {
        return new oO.prototype.init(YC, dp, ws, kS, HS)
      }
      Qw.extend({
        cssHooks: {
          opacity: {
            get: function (YC, dp) {
              if (dp) {
                var ws = tI(YC, "opacity");
                return "" === ws ? "1" : ws
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {},
        style: function (YC, dp, ws, kS) {
          if (YC && 3 !== YC.nodeType && 8 !== YC.nodeType && YC.style) {
            var HS, hG, uS, ER = Hw(dp),
              Ug = dn.test(dp),
              df = YC.style;
            if (Ug || (dp = Di(ER)), uS = Qw.cssHooks[dp] || Qw.cssHooks[ER], void 0 === ws) return uS && "get" in uS && void 0 !== (HS = uS.get(YC, !1, kS)) ? HS : df[dp];
            "string" === (hG = typeof ws) && (HS = CF.exec(ws)) && HS[1] && (ws = yy(YC, dp, HS), hG = "number"), null != ws && ws == ws && ("number" !== hG || Ug || (ws += HS && HS[3] || (Qw.cssNumber[ER] ? "" : "px")), Zf.clearCloneStyle || "" !== ws || 0 !== dp.indexOf("background") || (df[dp] = "inherit"), uS && "set" in uS && void 0 === (ws = uS.set(YC, ws, kS)) || (Ug ? df.setProperty(dp, ws) : df[dp] = ws))
          }
        },
        css: function (YC, dp, ws, kS) {
          var HS, hG, uS, ER = Hw(dp),
            Ug;
          return dn.test(dp) || (dp = Di(ER)), (uS = Qw.cssHooks[dp] || Qw.cssHooks[ER]) && "get" in uS && (HS = uS.get(YC, !0, ws)), void 0 === HS && (HS = tI(YC, dp, kS)), "normal" === HS && dp in DV && (HS = DV[dp]), "" === ws || ws ? (hG = parseFloat(HS), !0 === ws || isFinite(hG) ? hG || 0 : HS) : HS
        }
      }), Qw.each(["height", "width"], (function (YC, dp) {
        Qw.cssHooks[dp] = {
          get: function (YC, ws, kS) {
            if (ws) return !tG.test(Qw.css(YC, "display")) || YC.getClientRects().length && YC.getBoundingClientRect().width ? jC(YC, dp, kS) : wY(YC, Cx, (function () {
              return jC(YC, dp, kS)
            }))
          },
          set: function (YC, ws, kS) {
            var HS, hG = JX(YC),
              uS = !Zf.scrollboxSize() && "absolute" === hG.position,
              ER, Ug = (uS || kS) && "border-box" === Qw.css(YC, "boxSizing", !1, hG),
              df = kS ? sG(YC, dp, kS, Ug, hG) : 0;
            return Ug && uS && (df -= Math.ceil(YC["offset" + dp[0].toUpperCase() + dp.slice(1)] - parseFloat(hG[dp]) - sG(YC, dp, "border", !1, hG) - .5)), df && (HS = CF.exec(ws)) && "px" !== (HS[3] || "px") && (YC.style[dp] = ws, ws = Qw.css(YC, dp)), Ds(YC, ws, df)
          }
        }
      })), Qw.cssHooks.marginLeft = lz(Zf.reliableMarginLeft, (function (YC, dp) {
        if (dp) return (parseFloat(tI(YC, "marginLeft")) || YC.getBoundingClientRect().left - wY(YC, {
          marginLeft: 0
        }, (function () {
          return YC.getBoundingClientRect().left
        }))) + "px"
      })), Qw.each({
        margin: "",
        padding: "",
        border: "Width"
      }, (function (YC, dp) {
        Qw.cssHooks[YC + dp] = {
          expand: function (ws) {
            for (var kS = 0, HS = {}, hG = "string" == typeof ws ? ws.split(" ") : [ws]; kS < 4; kS++) HS[YC + sL[kS] + dp] = hG[kS] || hG[kS - 2] || hG[0];
            return HS
          }
        }, "margin" !== YC && (Qw.cssHooks[YC + dp].set = Ds)
      })), Qw.fn.extend({
        css: function (YC, dp) {
          return dh(this, (function (YC, dp, ws) {
            var kS, HS, hG = {},
              uS = 0;
            if (Array.isArray(dp)) {
              for (kS = JX(YC), HS = dp.length; uS < HS; uS++) hG[dp[uS]] = Qw.css(YC, dp[uS], !1, kS);
              return hG
            }
            return void 0 !== ws ? Qw.style(YC, dp, ws) : Qw.css(YC, dp)
          }), YC, dp, arguments.length > 1)
        }
      }), Qw.Tween = oO, oO.prototype = {
        constructor: oO,
        init: function (YC, dp, ws, kS, HS, hG) {
          this.elem = YC, this.prop = ws, this.easing = HS || Qw.easing._default, this.options = dp, this.start = this.now = this.cur(), this.end = kS, this.unit = hG || (Qw.cssNumber[ws] ? "" : "px")
        },
        cur: function () {
          var YC = oO.propHooks[this.prop];
          return YC && YC.get ? YC.get(this) : oO.propHooks._default.get(this)
        },
        run: function (YC) {
          var dp, ws = oO.propHooks[this.prop];
          return this.options.duration ? this.pos = dp = Qw.easing[this.easing](YC, this.options.duration * YC, 0, 1, this.options.duration) : this.pos = dp = YC, this.now = (this.end - this.start) * dp + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), ws && ws.set ? ws.set(this) : oO.propHooks._default.set(this), this
        }
      }, oO.prototype.init.prototype = oO.prototype, oO.propHooks = {
        _default: {
          get: function (YC) {
            var dp;
            return 1 !== YC.elem.nodeType || null != YC.elem[YC.prop] && null == YC.elem.style[YC.prop] ? YC.elem[YC.prop] : (dp = Qw.css(YC.elem, YC.prop, "")) && "auto" !== dp ? dp : 0
          },
          set: function (YC) {
            Qw.fx.step[YC.prop] ? Qw.fx.step[YC.prop](YC) : 1 !== YC.elem.nodeType || !Qw.cssHooks[YC.prop] && null == YC.elem.style[Di(YC.prop)] ? YC.elem[YC.prop] = YC.now : Qw.style(YC.elem, YC.prop, YC.now + YC.unit)
          }
        }
      }, oO.propHooks.scrollTop = oO.propHooks.scrollLeft = {
        set: function (YC) {
          YC.elem.nodeType && YC.elem.parentNode && (YC.elem[YC.prop] = YC.now)
        }
      }, Qw.easing = {
        linear: function (YC) {
          return YC
        },
        swing: function (YC) {
          return .5 - Math.cos(YC * Math.PI) / 2
        },
        _default: "swing"
      }, Qw.fx = oO.prototype.init, Qw.fx.step = {};
      var SR, uE, iI = /^(?:toggle|show|hide)$/,
        ko = /queueHooks$/;

      function sa() {
        uE && (!1 === kC.hidden && YC.requestAnimationFrame ? YC.requestAnimationFrame(sa) : YC.setTimeout(sa, Qw.fx.interval), Qw.fx.tick())
      }

      function ip() {
        return YC.setTimeout((function () {
          SR = void 0
        })), SR = Date.now()
      }

      function qh(YC, dp) {
        var ws, kS = 0,
          HS = {
            height: YC
          };
        for (dp = dp ? 1 : 0; kS < 4; kS += 2 - dp) HS["margin" + (ws = sL[kS])] = HS["padding" + ws] = YC;
        return dp && (HS.opacity = HS.width = YC), HS
      }

      function TK(YC, dp, ws) {
        for (var kS, HS = (gx.tweeners[dp] || []).concat(gx.tweeners["*"]), hG = 0, uS = HS.length; hG < uS; hG++)
          if (kS = HS[hG].call(ws, dp, YC)) return kS
      }

      function Te(YC, dp, ws) {
        var kS, HS, hG, uS, ER, Ug, df, iU, qq = "width" in dp || "height" in dp,
          dH = this,
          Zf = {},
          CO = YC.style,
          Zi = YC.nodeType && EK(YC),
          kC = mT.get(YC, "fxshow");
        for (kS in ws.queue || (null == (uS = Qw._queueHooks(YC, "fx")).unqueued && (uS.unqueued = 0, ER = uS.empty.fire, uS.empty.fire = function () {
            uS.unqueued || ER()
          }), uS.unqueued++, dH.always((function () {
            dH.always((function () {
              uS.unqueued--, Qw.queue(YC, "fx").length || uS.empty.fire()
            }))
          }))), dp)
          if (HS = dp[kS], iI.test(HS)) {
            if (delete dp[kS], hG = hG || "toggle" === HS, HS === (Zi ? "hide" : "show")) {
              if ("show" !== HS || !kC || void 0 === kC[kS]) continue;
              Zi = !0
            }
            Zf[kS] = kC && kC[kS] || Qw.style(YC, kS)
          } if ((Ug = !Qw.isEmptyObject(dp)) || !Qw.isEmptyObject(Zf))
          for (kS in qq && 1 === YC.nodeType && (ws.overflow = [CO.overflow, CO.overflowX, CO.overflowY], null == (df = kC && kC.display) && (df = mT.get(YC, "display")), "none" === (iU = Qw.css(YC, "display")) && (df ? iU = df : (EP([YC], !0), df = YC.style.display || df, iU = Qw.css(YC, "display"), EP([YC]))), ("inline" === iU || "inline-block" === iU && null != df) && "none" === Qw.css(YC, "float") && (Ug || (dH.done((function () {
              CO.display = df
            })), null == df && (iU = CO.display, df = "none" === iU ? "" : iU)), CO.display = "inline-block")), ws.overflow && (CO.overflow = "hidden", dH.always((function () {
              CO.overflow = ws.overflow[0], CO.overflowX = ws.overflow[1], CO.overflowY = ws.overflow[2]
            }))), Ug = !1, Zf) Ug || (kC ? "hidden" in kC && (Zi = kC.hidden) : kC = mT.access(YC, "fxshow", {
            display: df
          }), hG && (kC.hidden = !Zi), Zi && EP([YC], !0), dH.done((function () {
            for (kS in Zi || EP([YC]), mT.remove(YC, "fxshow"), Zf) Qw.style(YC, kS, Zf[kS])
          }))), Ug = TK(Zi ? kC[kS] : 0, kS, dH), kS in kC || (kC[kS] = Ug.start, Zi && (Ug.end = Ug.start, Ug.start = 0))
      }

      function RZ(YC, dp) {
        var ws, kS, HS, hG, uS;
        for (ws in YC)
          if (HS = dp[kS = Hw(ws)], hG = YC[ws], Array.isArray(hG) && (HS = hG[1], hG = YC[ws] = hG[0]), ws !== kS && (YC[kS] = hG, delete YC[ws]), (uS = Qw.cssHooks[kS]) && "expand" in uS)
            for (ws in hG = uS.expand(hG), delete YC[kS], hG) ws in YC || (YC[ws] = hG[ws], dp[ws] = HS);
          else dp[kS] = HS
      }

      function gx(YC, dp, ws) {
        var kS, HS, hG = 0,
          uS = gx.prefilters.length,
          ER = Qw.Deferred().always((function () {
            delete Ug.elem
          })),
          Ug = function () {
            if (HS) return !1;
            for (var dp = SR || ip(), ws = Math.max(0, df.startTime + df.duration - dp), kS, hG = 1 - (ws / df.duration || 0), uS = 0, Ug = df.tweens.length; uS < Ug; uS++) df.tweens[uS].run(hG);
            return ER.notifyWith(YC, [df, hG, ws]), hG < 1 && Ug ? ws : (Ug || ER.notifyWith(YC, [df, 1, 0]), ER.resolveWith(YC, [df]), !1)
          },
          df = ER.promise({
            elem: YC,
            props: Qw.extend({}, dp),
            opts: Qw.extend(!0, {
              specialEasing: {},
              easing: Qw.easing._default
            }, ws),
            originalProperties: dp,
            originalOptions: ws,
            startTime: SR || ip(),
            duration: ws.duration,
            tweens: [],
            createTween: function (dp, ws) {
              var kS = Qw.Tween(YC, df.opts, dp, ws, df.opts.specialEasing[dp] || df.opts.easing);
              return df.tweens.push(kS), kS
            },
            stop: function (dp) {
              var ws = 0,
                kS = dp ? df.tweens.length : 0;
              if (HS) return this;
              for (HS = !0; ws < kS; ws++) df.tweens[ws].run(1);
              return dp ? (ER.notifyWith(YC, [df, 1, 0]), ER.resolveWith(YC, [df, dp])) : ER.rejectWith(YC, [df, dp]), this
            }
          }),
          iU = df.props;
        for (RZ(iU, df.opts.specialEasing); hG < uS; hG++)
          if (kS = gx.prefilters[hG].call(df, YC, iU, df.opts)) return CO(kS.stop) && (Qw._queueHooks(df.elem, df.opts.queue).stop = kS.stop.bind(kS)), kS;
        return Qw.map(iU, TK, df), CO(df.opts.start) && df.opts.start.call(YC, df), df.progress(df.opts.progress).done(df.opts.done, df.opts.complete).fail(df.opts.fail).always(df.opts.always), Qw.fx.timer(Qw.extend(Ug, {
          elem: YC,
          anim: df,
          queue: df.opts.queue
        })), df
      }
      Qw.Animation = Qw.extend(gx, {
          tweeners: {
            "*": [function (YC, dp) {
              var ws = this.createTween(YC, dp);
              return yy(ws.elem, YC, CF.exec(dp), ws), ws
            }]
          },
          tweener: function (YC, dp) {
            CO(YC) ? (dp = YC, YC = ["*"]) : YC = YC.match(sZ);
            for (var ws, kS = 0, HS = YC.length; kS < HS; kS++) ws = YC[kS], gx.tweeners[ws] = gx.tweeners[ws] || [], gx.tweeners[ws].unshift(dp)
          },
          prefilters: [Te],
          prefilter: function (YC, dp) {
            dp ? gx.prefilters.unshift(YC) : gx.prefilters.push(YC)
          }
        }), Qw.speed = function (YC, dp, ws) {
          var kS = YC && "object" == typeof YC ? Qw.extend({}, YC) : {
            complete: ws || !ws && dp || CO(YC) && YC,
            duration: YC,
            easing: ws && dp || dp && !CO(dp) && dp
          };
          return Qw.fx.off ? kS.duration = 0 : "number" != typeof kS.duration && (kS.duration in Qw.fx.speeds ? kS.duration = Qw.fx.speeds[kS.duration] : kS.duration = Qw.fx.speeds._default), null != kS.queue && !0 !== kS.queue || (kS.queue = "fx"), kS.old = kS.complete, kS.complete = function () {
            CO(kS.old) && kS.old.call(this), kS.queue && Qw.dequeue(this, kS.queue)
          }, kS
        }, Qw.fn.extend({
          fadeTo: function (YC, dp, ws, kS) {
            return this.filter(EK).css("opacity", 0).show().end().animate({
              opacity: dp
            }, YC, ws, kS)
          },
          animate: function (YC, dp, ws, kS) {
            var HS = Qw.isEmptyObject(YC),
              hG = Qw.speed(dp, ws, kS),
              uS = function () {
                var dp = gx(this, Qw.extend({}, YC), hG);
                (HS || mT.get(this, "finish")) && dp.stop(!0)
              };
            return uS.finish = uS, HS || !1 === hG.queue ? this.each(uS) : this.queue(hG.queue, uS)
          },
          stop: function (YC, dp, ws) {
            var kS = function (YC) {
              var dp = YC.stop;
              delete YC.stop, dp(ws)
            };
            return "string" != typeof YC && (ws = dp, dp = YC, YC = void 0), dp && this.queue(YC || "fx", []), this.each((function () {
              var dp = !0,
                HS = null != YC && YC + "queueHooks",
                hG = Qw.timers,
                uS = mT.get(this);
              if (HS) uS[HS] && uS[HS].stop && kS(uS[HS]);
              else
                for (HS in uS) uS[HS] && uS[HS].stop && ko.test(HS) && kS(uS[HS]);
              for (HS = hG.length; HS--;) hG[HS].elem !== this || null != YC && hG[HS].queue !== YC || (hG[HS].anim.stop(ws), dp = !1, hG.splice(HS, 1));
              !dp && ws || Qw.dequeue(this, YC)
            }))
          },
          finish: function (YC) {
            return !1 !== YC && (YC = YC || "fx"), this.each((function () {
              var dp, ws = mT.get(this),
                kS = ws[YC + "queue"],
                HS = ws[YC + "queueHooks"],
                hG = Qw.timers,
                uS = kS ? kS.length : 0;
              for (ws.finish = !0, Qw.queue(this, YC, []), HS && HS.stop && HS.stop.call(this, !0), dp = hG.length; dp--;) hG[dp].elem === this && hG[dp].queue === YC && (hG[dp].anim.stop(!0), hG.splice(dp, 1));
              for (dp = 0; dp < uS; dp++) kS[dp] && kS[dp].finish && kS[dp].finish.call(this);
              delete ws.finish
            }))
          }
        }), Qw.each(["toggle", "show", "hide"], (function (YC, dp) {
          var ws = Qw.fn[dp];
          Qw.fn[dp] = function (YC, kS, HS) {
            return null == YC || "boolean" == typeof YC ? ws.apply(this, arguments) : this.animate(qh(dp, !0), YC, kS, HS)
          }
        })), Qw.each({
          slideDown: qh("show"),
          slideUp: qh("hide"),
          slideToggle: qh("toggle"),
          fadeIn: {
            opacity: "show"
          },
          fadeOut: {
            opacity: "hide"
          },
          fadeToggle: {
            opacity: "toggle"
          }
        }, (function (YC, dp) {
          Qw.fn[YC] = function (YC, ws, kS) {
            return this.animate(dp, YC, ws, kS)
          }
        })), Qw.timers = [], Qw.fx.tick = function () {
          var YC, dp = 0,
            ws = Qw.timers;
          for (SR = Date.now(); dp < ws.length; dp++)(YC = ws[dp])() || ws[dp] !== YC || ws.splice(dp--, 1);
          ws.length || Qw.fx.stop(), SR = void 0
        }, Qw.fx.timer = function (YC) {
          Qw.timers.push(YC), Qw.fx.start()
        }, Qw.fx.interval = 13, Qw.fx.start = function () {
          uE || (uE = !0, sa())
        }, Qw.fx.stop = function () {
          uE = null
        }, Qw.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
        }, Qw.fn.delay = function (dp, ws) {
          return dp = Qw.fx && Qw.fx.speeds[dp] || dp, ws = ws || "fx", this.queue(ws, (function (ws, kS) {
            var HS = YC.setTimeout(ws, dp);
            kS.stop = function () {
              YC.clearTimeout(HS)
            }
          }))
        },
        function () {
          var YC = kC.createElement("input"),
            dp, ws = kC.createElement("select").appendChild(kC.createElement("option"));
          YC.type = "checkbox", Zf.checkOn = "" !== YC.value, Zf.optSelected = ws.selected, (YC = kC.createElement("input")).value = "t", YC.type = "radio", Zf.radioValue = "t" === YC.value
        }();
      var WE, SN = Qw.expr.attrHandle;
      Qw.fn.extend({
        attr: function (YC, dp) {
          return dh(this, Qw.attr, YC, dp, arguments.length > 1)
        },
        removeAttr: function (YC) {
          return this.each((function () {
            Qw.removeAttr(this, YC)
          }))
        }
      }), Qw.extend({
        attr: function (YC, dp, ws) {
          var kS, HS, hG = YC.nodeType;
          if (3 !== hG && 8 !== hG && 2 !== hG) return void 0 === YC.getAttribute ? Qw.prop(YC, dp, ws) : (1 === hG && Qw.isXMLDoc(YC) || (HS = Qw.attrHooks[dp.toLowerCase()] || (Qw.expr.match.bool.test(dp) ? WE : void 0)), void 0 !== ws ? null === ws ? void Qw.removeAttr(YC, dp) : HS && "set" in HS && void 0 !== (kS = HS.set(YC, ws, dp)) ? kS : (YC.setAttribute(dp, ws + ""), ws) : HS && "get" in HS && null !== (kS = HS.get(YC, dp)) ? kS : null == (kS = Qw.find.attr(YC, dp)) ? void 0 : kS)
        },
        attrHooks: {
          type: {
            set: function (YC, dp) {
              if (!Zf.radioValue && "radio" === dp && nm(YC, "input")) {
                var ws = YC.value;
                return YC.setAttribute("type", dp), ws && (YC.value = ws), dp
              }
            }
          }
        },
        removeAttr: function (YC, dp) {
          var ws, kS = 0,
            HS = dp && dp.match(sZ);
          if (HS && 1 === YC.nodeType)
            for (; ws = HS[kS++];) YC.removeAttribute(ws)
        }
      }), WE = {
        set: function (YC, dp, ws) {
          return !1 === dp ? Qw.removeAttr(YC, ws) : YC.setAttribute(ws, ws), ws
        }
      }, Qw.each(Qw.expr.match.bool.source.match(/\w+/g), (function (YC, dp) {
        var ws = SN[dp] || Qw.find.attr;
        SN[dp] = function (YC, dp, kS) {
          var HS, hG, uS = dp.toLowerCase();
          return kS || (hG = SN[uS], SN[uS] = HS, HS = null != ws(YC, dp, kS) ? uS : null, SN[uS] = hG), HS
        }
      }));
      var tN = /^(?:input|select|textarea|button)$/i,
        bs = /^(?:a|area)$/i;

      function mc(YC) {
        var dp;
        return (YC.match(sZ) || []).join(" ")
      }

      function Kp(YC) {
        return YC.getAttribute && YC.getAttribute("class") || ""
      }

      function DM(YC) {
        return Array.isArray(YC) ? YC : "string" == typeof YC && YC.match(sZ) || []
      }
      Qw.fn.extend({
        prop: function (YC, dp) {
          return dh(this, Qw.prop, YC, dp, arguments.length > 1)
        },
        removeProp: function (YC) {
          return this.each((function () {
            delete this[Qw.propFix[YC] || YC]
          }))
        }
      }), Qw.extend({
        prop: function (YC, dp, ws) {
          var kS, HS, hG = YC.nodeType;
          if (3 !== hG && 8 !== hG && 2 !== hG) return 1 === hG && Qw.isXMLDoc(YC) || (dp = Qw.propFix[dp] || dp, HS = Qw.propHooks[dp]), void 0 !== ws ? HS && "set" in HS && void 0 !== (kS = HS.set(YC, ws, dp)) ? kS : YC[dp] = ws : HS && "get" in HS && null !== (kS = HS.get(YC, dp)) ? kS : YC[dp]
        },
        propHooks: {
          tabIndex: {
            get: function (YC) {
              var dp = Qw.find.attr(YC, "tabindex");
              return dp ? parseInt(dp, 10) : tN.test(YC.nodeName) || bs.test(YC.nodeName) && YC.href ? 0 : -1
            }
          }
        },
        propFix: {
          for: "htmlFor",
          class: "className"
        }
      }), Zf.optSelected || (Qw.propHooks.selected = {
        get: function (YC) {
          var dp = YC.parentNode;
          return dp && dp.parentNode && dp.parentNode.selectedIndex, null
        },
        set: function (YC) {
          var dp = YC.parentNode;
          dp && (dp.selectedIndex, dp.parentNode && dp.parentNode.selectedIndex)
        }
      }), Qw.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
        Qw.propFix[this.toLowerCase()] = this
      })), Qw.fn.extend({
        addClass: function (YC) {
          var dp, ws, kS, HS, hG, uS, ER, Ug = 0;
          if (CO(YC)) return this.each((function (dp) {
            Qw(this).addClass(YC.call(this, dp, Kp(this)))
          }));
          if ((dp = DM(YC)).length)
            for (; ws = this[Ug++];)
              if (HS = Kp(ws), kS = 1 === ws.nodeType && " " + mc(HS) + " ") {
                for (uS = 0; hG = dp[uS++];) kS.indexOf(" " + hG + " ") < 0 && (kS += hG + " ");
                HS !== (ER = mc(kS)) && ws.setAttribute("class", ER)
              } return this
        },
        removeClass: function (YC) {
          var dp, ws, kS, HS, hG, uS, ER, Ug = 0;
          if (CO(YC)) return this.each((function (dp) {
            Qw(this).removeClass(YC.call(this, dp, Kp(this)))
          }));
          if (!arguments.length) return this.attr("class", "");
          if ((dp = DM(YC)).length)
            for (; ws = this[Ug++];)
              if (HS = Kp(ws), kS = 1 === ws.nodeType && " " + mc(HS) + " ") {
                for (uS = 0; hG = dp[uS++];)
                  for (; kS.indexOf(" " + hG + " ") > -1;) kS = kS.replace(" " + hG + " ", " ");
                HS !== (ER = mc(kS)) && ws.setAttribute("class", ER)
              } return this
        },
        toggleClass: function (YC, dp) {
          var ws = typeof YC,
            kS = "string" === ws || Array.isArray(YC);
          return "boolean" == typeof dp && kS ? dp ? this.addClass(YC) : this.removeClass(YC) : CO(YC) ? this.each((function (ws) {
            Qw(this).toggleClass(YC.call(this, ws, Kp(this), dp), dp)
          })) : this.each((function () {
            var dp, HS, hG, uS;
            if (kS)
              for (HS = 0, hG = Qw(this), uS = DM(YC); dp = uS[HS++];) hG.hasClass(dp) ? hG.removeClass(dp) : hG.addClass(dp);
            else void 0 !== YC && "boolean" !== ws || ((dp = Kp(this)) && mT.set(this, "__className__", dp), this.setAttribute && this.setAttribute("class", dp || !1 === YC ? "" : mT.get(this, "__className__") || ""))
          }))
        },
        hasClass: function (YC) {
          var dp, ws, kS = 0;
          for (dp = " " + YC + " "; ws = this[kS++];)
            if (1 === ws.nodeType && (" " + mc(Kp(ws)) + " ").indexOf(dp) > -1) return !0;
          return !1
        }
      });
      var Fg = /\r/g;
      Qw.fn.extend({
        val: function (YC) {
          var dp, ws, kS, HS = this[0];
          return arguments.length ? (kS = CO(YC), this.each((function (ws) {
            var HS;
            1 === this.nodeType && (null == (HS = kS ? YC.call(this, ws, Qw(this).val()) : YC) ? HS = "" : "number" == typeof HS ? HS += "" : Array.isArray(HS) && (HS = Qw.map(HS, (function (YC) {
              return null == YC ? "" : YC + ""
            }))), (dp = Qw.valHooks[this.type] || Qw.valHooks[this.nodeName.toLowerCase()]) && "set" in dp && void 0 !== dp.set(this, HS, "value") || (this.value = HS))
          }))) : HS ? (dp = Qw.valHooks[HS.type] || Qw.valHooks[HS.nodeName.toLowerCase()]) && "get" in dp && void 0 !== (ws = dp.get(HS, "value")) ? ws : "string" == typeof (ws = HS.value) ? ws.replace(Fg, "") : null == ws ? "" : ws : void 0
        }
      }), Qw.extend({
        valHooks: {
          option: {
            get: function (YC) {
              var dp = Qw.find.attr(YC, "value");
              return null != dp ? dp : mc(Qw.text(YC))
            }
          },
          select: {
            get: function (YC) {
              var dp, ws, kS, HS = YC.options,
                hG = YC.selectedIndex,
                uS = "select-one" === YC.type,
                ER = uS ? null : [],
                Ug = uS ? hG + 1 : HS.length;
              for (kS = hG < 0 ? Ug : uS ? hG : 0; kS < Ug; kS++)
                if (((ws = HS[kS]).selected || kS === hG) && !ws.disabled && (!ws.parentNode.disabled || !nm(ws.parentNode, "optgroup"))) {
                  if (dp = Qw(ws).val(), uS) return dp;
                  ER.push(dp)
                } return ER
            },
            set: function (YC, dp) {
              for (var ws, kS, HS = YC.options, hG = Qw.makeArray(dp), uS = HS.length; uS--;)((kS = HS[uS]).selected = Qw.inArray(Qw.valHooks.option.get(kS), hG) > -1) && (ws = !0);
              return ws || (YC.selectedIndex = -1), hG
            }
          }
        }
      }), Qw.each(["radio", "checkbox"], (function () {
        Qw.valHooks[this] = {
          set: function (YC, dp) {
            if (Array.isArray(dp)) return YC.checked = Qw.inArray(Qw(YC).val(), dp) > -1
          }
        }, Zf.checkOn || (Qw.valHooks[this].get = function (YC) {
          return null === YC.getAttribute("value") ? "on" : YC.value
        })
      })), Zf.focusin = "onfocusin" in YC;
      var Ul = /^(?:focusinfocus|focusoutblur)$/,
        Jg = function (YC) {
          YC.stopPropagation()
        };
      Qw.extend(Qw.event, {
        trigger: function (dp, ws, kS, HS) {
          var hG, uS, ER, Ug, df, qq, dH, Zf, yc = [kS || kC],
            cU = iU.call(dp, "type") ? dp.type : dp,
            Kj = iU.call(dp, "namespace") ? dp.namespace.split(".") : [];
          if (uS = Zf = ER = kS = kS || kC, 3 !== kS.nodeType && 8 !== kS.nodeType && !Ul.test(cU + Qw.event.triggered) && (cU.indexOf(".") > -1 && (Kj = cU.split("."), cU = Kj.shift(), Kj.sort()), df = cU.indexOf(":") < 0 && "on" + cU, (dp = dp[Qw.expando] ? dp : new Qw.Event(cU, "object" == typeof dp && dp)).isTrigger = HS ? 2 : 3, dp.namespace = Kj.join("."), dp.rnamespace = dp.namespace ? new RegExp("(^|\\.)" + Kj.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, dp.result = void 0, dp.target || (dp.target = kS), ws = null == ws ? [dp] : Qw.makeArray(ws, [dp]), dH = Qw.event.special[cU] || {}, HS || !dH.trigger || !1 !== dH.trigger.apply(kS, ws))) {
            if (!HS && !dH.noBubble && !Zi(kS)) {
              for (Ug = dH.delegateType || cU, Ul.test(Ug + cU) || (uS = uS.parentNode); uS; uS = uS.parentNode) yc.push(uS), ER = uS;
              ER === (kS.ownerDocument || kC) && yc.push(ER.defaultView || ER.parentWindow || YC)
            }
            for (hG = 0;
              (uS = yc[hG++]) && !dp.isPropagationStopped();) Zf = uS, dp.type = hG > 1 ? Ug : dH.bindType || cU, (qq = (mT.get(uS, "events") || Object.create(null))[dp.type] && mT.get(uS, "handle")) && qq.apply(uS, ws), (qq = df && uS[df]) && qq.apply && fN(uS) && (dp.result = qq.apply(uS, ws), !1 === dp.result && dp.preventDefault());
            return dp.type = cU, HS || dp.isDefaultPrevented() || dH._default && !1 !== dH._default.apply(yc.pop(), ws) || !fN(kS) || df && CO(kS[cU]) && !Zi(kS) && ((ER = kS[df]) && (kS[df] = null), Qw.event.triggered = cU, dp.isPropagationStopped() && Zf.addEventListener(cU, Jg), kS[cU](), dp.isPropagationStopped() && Zf.removeEventListener(cU, Jg), Qw.event.triggered = void 0, ER && (kS[df] = ER)), dp.result
          }
        },
        simulate: function (YC, dp, ws) {
          var kS = Qw.extend(new Qw.Event, ws, {
            type: YC,
            isSimulated: !0
          });
          Qw.event.trigger(kS, null, dp)
        }
      }), Qw.fn.extend({
        trigger: function (YC, dp) {
          return this.each((function () {
            Qw.event.trigger(YC, dp, this)
          }))
        },
        triggerHandler: function (YC, dp) {
          var ws = this[0];
          if (ws) return Qw.event.trigger(YC, dp, ws, !0)
        }
      }), Zf.focusin || Qw.each({
        focus: "focusin",
        blur: "focusout"
      }, (function (YC, dp) {
        var ws = function (YC) {
          Qw.event.simulate(dp, YC.target, Qw.event.fix(YC))
        };
        Qw.event.special[dp] = {
          setup: function () {
            var kS = this.ownerDocument || this.document || this,
              HS = mT.access(kS, dp);
            HS || kS.addEventListener(YC, ws, !0), mT.access(kS, dp, (HS || 0) + 1)
          },
          teardown: function () {
            var kS = this.ownerDocument || this.document || this,
              HS = mT.access(kS, dp) - 1;
            HS ? mT.access(kS, dp, HS) : (kS.removeEventListener(YC, ws, !0), mT.remove(kS, dp))
          }
        }
      }));
      var qd = YC.location,
        vo = {
          guid: Date.now()
        },
        Qa = /\?/;
      Qw.parseXML = function (dp) {
        var ws, kS;
        if (!dp || "string" != typeof dp) return null;
        try {
          ws = (new YC.DOMParser).parseFromString(dp, "text/xml")
        } catch (YC) {}
        return kS = ws && ws.getElementsByTagName("parsererror")[0], ws && !kS || Qw.error("Invalid XML: " + (kS ? Qw.map(kS.childNodes, (function (YC) {
          return YC.textContent
        })).join("\n") : dp)), ws
      };
      var mt = /\[\]$/,
        sc = /\r?\n/g,
        cO = /^(?:submit|button|image|reset|file)$/i,
        Ay = /^(?:input|select|textarea|keygen)/i;

      function xl(YC, dp, ws, kS) {
        var HS;
        if (Array.isArray(dp)) Qw.each(dp, (function (dp, HS) {
          ws || mt.test(YC) ? kS(YC, HS) : xl(YC + "[" + ("object" == typeof HS && null != HS ? dp : "") + "]", HS, ws, kS)
        }));
        else if (ws || "object" !== Kj(dp)) kS(YC, dp);
        else
          for (HS in dp) xl(YC + "[" + HS + "]", dp[HS], ws, kS)
      }
      Qw.param = function (YC, dp) {
        var ws, kS = [],
          HS = function (YC, dp) {
            var ws = CO(dp) ? dp() : dp;
            kS[kS.length] = encodeURIComponent(YC) + "=" + encodeURIComponent(null == ws ? "" : ws)
          };
        if (null == YC) return "";
        if (Array.isArray(YC) || YC.jquery && !Qw.isPlainObject(YC)) Qw.each(YC, (function () {
          HS(this.name, this.value)
        }));
        else
          for (ws in YC) xl(ws, YC[ws], dp, HS);
        return kS.join("&")
      }, Qw.fn.extend({
        serialize: function () {
          return Qw.param(this.serializeArray())
        },
        serializeArray: function () {
          return this.map((function () {
            var YC = Qw.prop(this, "elements");
            return YC ? Qw.makeArray(YC) : this
          })).filter((function () {
            var YC = this.type;
            return this.name && !Qw(this).is(":disabled") && Ay.test(this.nodeName) && !cO.test(YC) && (this.checked || !SA.test(YC))
          })).map((function (YC, dp) {
            var ws = Qw(this).val();
            return null == ws ? null : Array.isArray(ws) ? Qw.map(ws, (function (YC) {
              return {
                name: dp.name,
                value: YC.replace(sc, "\r\n")
              }
            })) : {
              name: dp.name,
              value: ws.replace(sc, "\r\n")
            }
          })).get()
        }
      });
      var XF = /%20/g,
        bx = /#.*$/,
        kx = /([?&])_=[^&]*/,
        oE = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        hq = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ph = /^(?:GET|HEAD)$/,
        Bd = /^\/\//,
        iy = {},
        Ry = {},
        pK = "*/".concat("*"),
        Ha = kC.createElement("a");

      function qw(YC) {
        return function (dp, ws) {
          "string" != typeof dp && (ws = dp, dp = "*");
          var kS, HS = 0,
            hG = dp.toLowerCase().match(sZ) || [];
          if (CO(ws))
            for (; kS = hG[HS++];) "+" === kS[0] ? (kS = kS.slice(1) || "*", (YC[kS] = YC[kS] || []).unshift(ws)) : (YC[kS] = YC[kS] || []).push(ws)
        }
      }

      function mU(YC, dp, ws, kS) {
        var HS = {},
          hG = YC === Ry;

        function uS(ER) {
          var Ug;
          return HS[ER] = !0, Qw.each(YC[ER] || [], (function (YC, ER) {
            var df = ER(dp, ws, kS);
            return "string" != typeof df || hG || HS[df] ? hG ? !(Ug = df) : void 0 : (dp.dataTypes.unshift(df), uS(df), !1)
          })), Ug
        }
        return uS(dp.dataTypes[0]) || !HS["*"] && uS("*")
      }

      function aP(YC, dp) {
        var ws, kS, HS = Qw.ajaxSettings.flatOptions || {};
        for (ws in dp) void 0 !== dp[ws] && ((HS[ws] ? YC : kS || (kS = {}))[ws] = dp[ws]);
        return kS && Qw.extend(!0, YC, kS), YC
      }

      function Nl(YC, dp, ws) {
        for (var kS, HS, hG, uS, ER = YC.contents, Ug = YC.dataTypes;
          "*" === Ug[0];) Ug.shift(), void 0 === kS && (kS = YC.mimeType || dp.getResponseHeader("Content-Type"));
        if (kS)
          for (HS in ER)
            if (ER[HS] && ER[HS].test(kS)) {
              Ug.unshift(HS);
              break
            } if (Ug[0] in ws) hG = Ug[0];
        else {
          for (HS in ws) {
            if (!Ug[0] || YC.converters[HS + " " + Ug[0]]) {
              hG = HS;
              break
            }
            uS || (uS = HS)
          }
          hG = hG || uS
        }
        if (hG) return hG !== Ug[0] && Ug.unshift(hG), ws[hG]
      }

      function uk(YC, dp, ws, kS) {
        var HS, hG, uS, ER, Ug, df = {},
          iU = YC.dataTypes.slice();
        if (iU[1])
          for (uS in YC.converters) df[uS.toLowerCase()] = YC.converters[uS];
        for (hG = iU.shift(); hG;)
          if (YC.responseFields[hG] && (ws[YC.responseFields[hG]] = dp), !Ug && kS && YC.dataFilter && (dp = YC.dataFilter(dp, YC.dataType)), Ug = hG, hG = iU.shift())
            if ("*" === hG) hG = Ug;
            else if ("*" !== Ug && Ug !== hG) {
          if (!(uS = df[Ug + " " + hG] || df["* " + hG]))
            for (HS in df)
              if ((ER = HS.split(" "))[1] === hG && (uS = df[Ug + " " + ER[0]] || df["* " + ER[0]])) {
                !0 === uS ? uS = df[HS] : !0 !== df[HS] && (hG = ER[0], iU.unshift(ER[1]));
                break
              } if (!0 !== uS)
            if (uS && YC.throws) dp = uS(dp);
            else try {
              dp = uS(dp)
            } catch (YC) {
              return {
                state: "parsererror",
                error: uS ? YC : "No conversion from " + Ug + " to " + hG
              }
            }
        }
        return {
          state: "success",
          data: dp
        }
      }
      Ha.href = qd.href, Qw.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: qd.href,
          type: "GET",
          isLocal: hq.test(qd.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": pK,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": Qw.parseXML
          },
          flatOptions: {
            url: !0,
            context: !0
          }
        },
        ajaxSetup: function (YC, dp) {
          return dp ? aP(aP(YC, Qw.ajaxSettings), dp) : aP(Qw.ajaxSettings, YC)
        },
        ajaxPrefilter: qw(iy),
        ajaxTransport: qw(Ry),
        ajax: function (dp, ws) {
          "object" == typeof dp && (ws = dp, dp = void 0), ws = ws || {};
          var kS, HS, hG, uS, ER, Ug, df, iU, qq, dH, Zf = Qw.ajaxSetup({}, ws),
            CO = Zf.context || Zf,
            Zi = Zf.context && (CO.nodeType || CO.jquery) ? Qw(CO) : Qw.event,
            yc = Qw.Deferred(),
            cU = Qw.Callbacks("once memory"),
            Kj = Zf.statusCode || {},
            rR = {},
            PA = {},
            cA = "canceled",
            gy = {
              readyState: 0,
              getResponseHeader: function (YC) {
                var dp;
                if (df) {
                  if (!uS)
                    for (uS = {}; dp = oE.exec(hG);) uS[dp[1].toLowerCase() + " "] = (uS[dp[1].toLowerCase() + " "] || []).concat(dp[2]);
                  dp = uS[YC.toLowerCase() + " "]
                }
                return null == dp ? null : dp.join(", ")
              },
              getAllResponseHeaders: function () {
                return df ? hG : null
              },
              setRequestHeader: function (YC, dp) {
                return null == df && (YC = PA[YC.toLowerCase()] = PA[YC.toLowerCase()] || YC, rR[YC] = dp), this
              },
              overrideMimeType: function (YC) {
                return null == df && (Zf.mimeType = YC), this
              },
              statusCode: function (YC) {
                var dp;
                if (YC)
                  if (df) gy.always(YC[gy.status]);
                  else
                    for (dp in YC) Kj[dp] = [Kj[dp], YC[dp]];
                return this
              },
              abort: function (YC) {
                var dp = YC || cA;
                return kS && kS.abort(dp), qL(0, dp), this
              }
            };
          if (yc.promise(gy), Zf.url = ((dp || Zf.url || qd.href) + "").replace(Bd, qd.protocol + "//"), Zf.type = ws.method || ws.type || Zf.method || Zf.type, Zf.dataTypes = (Zf.dataType || "*").toLowerCase().match(sZ) || [""], null == Zf.crossDomain) {
            Ug = kC.createElement("a");
            try {
              Ug.href = Zf.url, Ug.href = Ug.href, Zf.crossDomain = Ha.protocol + "//" + Ha.host != Ug.protocol + "//" + Ug.host
            } catch (YC) {
              Zf.crossDomain = !0
            }
          }
          if (Zf.data && Zf.processData && "string" != typeof Zf.data && (Zf.data = Qw.param(Zf.data, Zf.traditional)), mU(iy, Zf, ws, gy), df) return gy;
          for (qq in (iU = Qw.event && Zf.global) && 0 == Qw.active++ && Qw.event.trigger("ajaxStart"), Zf.type = Zf.type.toUpperCase(), Zf.hasContent = !ph.test(Zf.type), HS = Zf.url.replace(bx, ""), Zf.hasContent ? Zf.data && Zf.processData && 0 === (Zf.contentType || "").indexOf("application/x-www-form-urlencoded") && (Zf.data = Zf.data.replace(XF, "+")) : (dH = Zf.url.slice(HS.length), Zf.data && (Zf.processData || "string" == typeof Zf.data) && (HS += (Qa.test(HS) ? "&" : "?") + Zf.data, delete Zf.data), !1 === Zf.cache && (HS = HS.replace(kx, "$1"), dH = (Qa.test(HS) ? "&" : "?") + "_=" + vo.guid++ + dH), Zf.url = HS + dH), Zf.ifModified && (Qw.lastModified[HS] && gy.setRequestHeader("If-Modified-Since", Qw.lastModified[HS]), Qw.etag[HS] && gy.setRequestHeader("If-None-Match", Qw.etag[HS])), (Zf.data && Zf.hasContent && !1 !== Zf.contentType || ws.contentType) && gy.setRequestHeader("Content-Type", Zf.contentType), gy.setRequestHeader("Accept", Zf.dataTypes[0] && Zf.accepts[Zf.dataTypes[0]] ? Zf.accepts[Zf.dataTypes[0]] + ("*" !== Zf.dataTypes[0] ? ", " + pK + "; q=0.01" : "") : Zf.accepts["*"]), Zf.headers) gy.setRequestHeader(qq, Zf.headers[qq]);
          if (Zf.beforeSend && (!1 === Zf.beforeSend.call(CO, gy, Zf) || df)) return gy.abort();
          if (cA = "abort", cU.add(Zf.complete), gy.done(Zf.success), gy.fail(Zf.error), kS = mU(Ry, Zf, ws, gy)) {
            if (gy.readyState = 1, iU && Zi.trigger("ajaxSend", [gy, Zf]), df) return gy;
            Zf.async && Zf.timeout > 0 && (ER = YC.setTimeout((function () {
              gy.abort("timeout")
            }), Zf.timeout));
            try {
              df = !1, kS.send(rR, qL)
            } catch (YC) {
              if (df) throw YC;
              qL(-1, YC)
            }
          } else qL(-1, "No Transport");

          function qL(dp, ws, uS, Ug) {
            var qq, dH, kC, rR, PA, cA = ws;
            df || (df = !0, ER && YC.clearTimeout(ER), kS = void 0, hG = Ug || "", gy.readyState = dp > 0 ? 4 : 0, qq = dp >= 200 && dp < 300 || 304 === dp, uS && (rR = Nl(Zf, gy, uS)), !qq && Qw.inArray("script", Zf.dataTypes) > -1 && Qw.inArray("json", Zf.dataTypes) < 0 && (Zf.converters["text script"] = function () {}), rR = uk(Zf, rR, gy, qq), qq ? (Zf.ifModified && ((PA = gy.getResponseHeader("Last-Modified")) && (Qw.lastModified[HS] = PA), (PA = gy.getResponseHeader("etag")) && (Qw.etag[HS] = PA)), 204 === dp || "HEAD" === Zf.type ? cA = "nocontent" : 304 === dp ? cA = "notmodified" : (cA = rR.state, dH = rR.data, qq = !(kC = rR.error))) : (kC = cA, !dp && cA || (cA = "error", dp < 0 && (dp = 0))), gy.status = dp, gy.statusText = (ws || cA) + "", qq ? yc.resolveWith(CO, [dH, cA, gy]) : yc.rejectWith(CO, [gy, cA, kC]), gy.statusCode(Kj), Kj = void 0, iU && Zi.trigger(qq ? "ajaxSuccess" : "ajaxError", [gy, Zf, qq ? dH : kC]), cU.fireWith(CO, [gy, cA]), iU && (Zi.trigger("ajaxComplete", [gy, Zf]), --Qw.active || Qw.event.trigger("ajaxStop")))
          }
          return gy
        },
        getJSON: function (YC, dp, ws) {
          return Qw.get(YC, dp, ws, "json")
        },
        getScript: function (YC, dp) {
          return Qw.get(YC, void 0, dp, "script")
        }
      }), Qw.each(["get", "post"], (function (YC, dp) {
        Qw[dp] = function (YC, ws, kS, HS) {
          return CO(ws) && (HS = HS || kS, kS = ws, ws = void 0), Qw.ajax(Qw.extend({
            url: YC,
            type: dp,
            dataType: HS,
            data: ws,
            success: kS
          }, Qw.isPlainObject(YC) && YC))
        }
      })), Qw.ajaxPrefilter((function (YC) {
        var dp;
        for (dp in YC.headers) "content-type" === dp.toLowerCase() && (YC.contentType = YC.headers[dp] || "")
      })), Qw._evalUrl = function (YC, dp, ws) {
        return Qw.ajax({
          url: YC,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: {
            "text script": function () {}
          },
          dataFilter: function (YC) {
            Qw.globalEval(YC, dp, ws)
          }
        })
      }, Qw.fn.extend({
        wrapAll: function (YC) {
          var dp;
          return this[0] && (CO(YC) && (YC = YC.call(this[0])), dp = Qw(YC, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && dp.insertBefore(this[0]), dp.map((function () {
            for (var YC = this; YC.firstElementChild;) YC = YC.firstElementChild;
            return YC
          })).append(this)), this
        },
        wrapInner: function (YC) {
          return CO(YC) ? this.each((function (dp) {
            Qw(this).wrapInner(YC.call(this, dp))
          })) : this.each((function () {
            var dp = Qw(this),
              ws = dp.contents();
            ws.length ? ws.wrapAll(YC) : dp.append(YC)
          }))
        },
        wrap: function (YC) {
          var dp = CO(YC);
          return this.each((function (ws) {
            Qw(this).wrapAll(dp ? YC.call(this, ws) : YC)
          }))
        },
        unwrap: function (YC) {
          return this.parent(YC).not("body").each((function () {
            Qw(this).replaceWith(this.childNodes)
          })), this
        }
      }), Qw.expr.pseudos.hidden = function (YC) {
        return !Qw.expr.pseudos.visible(YC)
      }, Qw.expr.pseudos.visible = function (YC) {
        return !!(YC.offsetWidth || YC.offsetHeight || YC.getClientRects().length)
      }, Qw.ajaxSettings.xhr = function () {
        try {
          return new YC.XMLHttpRequest
        } catch (YC) {}
      };
      var Q = {
          0: 200,
          1223: 204
        },
        tk = Qw.ajaxSettings.xhr();
      Zf.cors = !!tk && "withCredentials" in tk, Zf.ajax = tk = !!tk, Qw.ajaxTransport((function (dp) {
        var ws, kS;
        if (Zf.cors || tk && !dp.crossDomain) return {
          send: function (HS, hG) {
            var uS, ER = dp.xhr();
            if (ER.open(dp.type, dp.url, dp.async, dp.username, dp.password), dp.xhrFields)
              for (uS in dp.xhrFields) ER[uS] = dp.xhrFields[uS];
            for (uS in dp.mimeType && ER.overrideMimeType && ER.overrideMimeType(dp.mimeType), dp.crossDomain || HS["X-Requested-With"] || (HS["X-Requested-With"] = "XMLHttpRequest"), HS) ER.setRequestHeader(uS, HS[uS]);
            ws = function (YC) {
              return function () {
                ws && (ws = kS = ER.onload = ER.onerror = ER.onabort = ER.ontimeout = ER.onreadystatechange = null, "abort" === YC ? ER.abort() : "error" === YC ? "number" != typeof ER.status ? hG(0, "error") : hG(ER.status, ER.statusText) : hG(Q[ER.status] || ER.status, ER.statusText, "text" !== (ER.responseType || "text") || "string" != typeof ER.responseText ? {
                  binary: ER.response
                } : {
                  text: ER.responseText
                }, ER.getAllResponseHeaders()))
              }
            }, ER.onload = ws(), kS = ER.onerror = ER.ontimeout = ws("error"), void 0 !== ER.onabort ? ER.onabort = kS : ER.onreadystatechange = function () {
              4 === ER.readyState && YC.setTimeout((function () {
                ws && kS()
              }))
            }, ws = ws("abort");
            try {
              ER.send(dp.hasContent && dp.data || null)
            } catch (YC) {
              if (ws) throw YC
            }
          },
          abort: function () {
            ws && ws()
          }
        }
      })), Qw.ajaxPrefilter((function (YC) {
        YC.crossDomain && (YC.contents.script = !1)
      })), Qw.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function (YC) {
            return Qw.globalEval(YC), YC
          }
        }
      }), Qw.ajaxPrefilter("script", (function (YC) {
        void 0 === YC.cache && (YC.cache = !1), YC.crossDomain && (YC.type = "GET")
      })), Qw.ajaxTransport("script", (function (YC) {
        var dp, ws;
        if (YC.crossDomain || YC.scriptAttrs) return {
          send: function (kS, HS) {
            dp = Qw("<script>").attr(YC.scriptAttrs || {}).prop({
              charset: YC.scriptCharset,
              src: YC.url
            }).on("load error", ws = function (YC) {
              dp.remove(), ws = null, YC && HS("error" === YC.type ? 404 : 200, YC.type)
            }), kC.head.appendChild(dp[0])
          },
          abort: function () {
            ws && ws()
          }
        }
      }));
      var OD = [],
        LL = /(=)\?(?=&|$)|\?\?/;
      Qw.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var YC = OD.pop() || Qw.expando + "_" + vo.guid++;
          return this[YC] = !0, YC
        }
      }), Qw.ajaxPrefilter("json jsonp", (function (dp, ws, kS) {
        var HS, hG, uS, ER = !1 !== dp.jsonp && (LL.test(dp.url) ? "url" : "string" == typeof dp.data && 0 === (dp.contentType || "").indexOf("application/x-www-form-urlencoded") && LL.test(dp.data) && "data");
        if (ER || "jsonp" === dp.dataTypes[0]) return HS = dp.jsonpCallback = CO(dp.jsonpCallback) ? dp.jsonpCallback() : dp.jsonpCallback, ER ? dp[ER] = dp[ER].replace(LL, "$1" + HS) : !1 !== dp.jsonp && (dp.url += (Qa.test(dp.url) ? "&" : "?") + dp.jsonp + "=" + HS), dp.converters["script json"] = function () {
          return uS || Qw.error(HS + " was not called"), uS[0]
        }, dp.dataTypes[0] = "json", hG = YC[HS], YC[HS] = function () {
          uS = arguments
        }, kS.always((function () {
          void 0 === hG ? Qw(YC).removeProp(HS) : YC[HS] = hG, dp[HS] && (dp.jsonpCallback = ws.jsonpCallback, OD.push(HS)), uS && CO(hG) && hG(uS[0]), uS = hG = void 0
        })), "script"
      })), Zf.createHTMLDocument = function () {
        var YC = kC.implementation.createHTMLDocument("").body;
        return YC.innerHTML = "<form></form><form></form>", 2 === YC.childNodes.length
      }(), Qw.parseHTML = function (YC, dp, ws) {
        return "string" != typeof YC ? [] : ("boolean" == typeof dp && (ws = dp, dp = !1), dp || (Zf.createHTMLDocument ? ((kS = (dp = kC.implementation.createHTMLDocument("")).createElement("base")).href = kC.location.href, dp.head.appendChild(kS)) : dp = kC), hG = !ws && [], (HS = dy.exec(YC)) ? [dp.createElement(HS[1])] : (HS = yI([YC], dp, hG), hG && hG.length && Qw(hG).remove(), Qw.merge([], HS.childNodes)));
        var kS, HS, hG
      }, Qw.fn.load = function (YC, dp, ws) {
        var kS, HS, hG, uS = this,
          ER = YC.indexOf(" ");
        return ER > -1 && (kS = mc(YC.slice(ER)), YC = YC.slice(0, ER)), CO(dp) ? (ws = dp, dp = void 0) : dp && "object" == typeof dp && (HS = "POST"), uS.length > 0 && Qw.ajax({
          url: YC,
          type: HS || "GET",
          dataType: "html",
          data: dp
        }).done((function (YC) {
          hG = arguments, uS.html(kS ? Qw("<div>").append(Qw.parseHTML(YC)).find(kS) : YC)
        })).always(ws && function (YC, dp) {
          uS.each((function () {
            ws.apply(this, hG || [YC.responseText, dp, YC])
          }))
        }), this
      }, Qw.expr.pseudos.animated = function (YC) {
        return Qw.grep(Qw.timers, (function (dp) {
          return YC === dp.elem
        })).length
      }, Qw.offset = {
        setOffset: function (YC, dp, ws) {
          var kS, HS, hG, uS, ER, Ug, df, iU = Qw.css(YC, "position"),
            qq = Qw(YC),
            dH = {};
          "static" === iU && (YC.style.position = "relative"), ER = qq.offset(), hG = Qw.css(YC, "top"), Ug = Qw.css(YC, "left"), (df = ("absolute" === iU || "fixed" === iU) && (hG + Ug).indexOf("auto") > -1) ? (uS = (kS = qq.position()).top, HS = kS.left) : (uS = parseFloat(hG) || 0, HS = parseFloat(Ug) || 0), CO(dp) && (dp = dp.call(YC, ws, Qw.extend({}, ER))), null != dp.top && (dH.top = dp.top - ER.top + uS), null != dp.left && (dH.left = dp.left - ER.left + HS), "using" in dp ? dp.using.call(YC, dH) : qq.css(dH)
        }
      }, Qw.fn.extend({
        offset: function (YC) {
          if (arguments.length) return void 0 === YC ? this : this.each((function (dp) {
            Qw.offset.setOffset(this, YC, dp)
          }));
          var dp, ws, kS = this[0];
          return kS ? kS.getClientRects().length ? (dp = kS.getBoundingClientRect(), ws = kS.ownerDocument.defaultView, {
            top: dp.top + ws.pageYOffset,
            left: dp.left + ws.pageXOffset
          }) : {
            top: 0,
            left: 0
          } : void 0
        },
        position: function () {
          if (this[0]) {
            var YC, dp, ws, kS = this[0],
              HS = {
                top: 0,
                left: 0
              };
            if ("fixed" === Qw.css(kS, "position")) dp = kS.getBoundingClientRect();
            else {
              for (dp = this.offset(), ws = kS.ownerDocument, YC = kS.offsetParent || ws.documentElement; YC && (YC === ws.body || YC === ws.documentElement) && "static" === Qw.css(YC, "position");) YC = YC.parentNode;
              YC && YC !== kS && 1 === YC.nodeType && ((HS = Qw(YC).offset()).top += Qw.css(YC, "borderTopWidth", !0), HS.left += Qw.css(YC, "borderLeftWidth", !0))
            }
            return {
              top: dp.top - HS.top - Qw.css(kS, "marginTop", !0),
              left: dp.left - HS.left - Qw.css(kS, "marginLeft", !0)
            }
          }
        },
        offsetParent: function () {
          return this.map((function () {
            for (var YC = this.offsetParent; YC && "static" === Qw.css(YC, "position");) YC = YC.offsetParent;
            return YC || zZ
          }))
        }
      }), Qw.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
      }, (function (YC, dp) {
        var ws = "pageYOffset" === dp;
        Qw.fn[YC] = function (kS) {
          return dh(this, (function (YC, kS, HS) {
            var hG;
            if (Zi(YC) ? hG = YC : 9 === YC.nodeType && (hG = YC.defaultView), void 0 === HS) return hG ? hG[dp] : YC[kS];
            hG ? hG.scrollTo(ws ? hG.pageXOffset : HS, ws ? HS : hG.pageYOffset) : YC[kS] = HS
          }), YC, kS, arguments.length)
        }
      })), Qw.each(["top", "left"], (function (YC, dp) {
        Qw.cssHooks[dp] = lz(Zf.pixelPosition, (function (YC, ws) {
          if (ws) return ws = tI(YC, dp), NT.test(ws) ? Qw(YC).position()[dp] + "px" : ws
        }))
      })), Qw.each({
        Height: "height",
        Width: "width"
      }, (function (YC, dp) {
        Qw.each({
          padding: "inner" + YC,
          content: dp,
          "": "outer" + YC
        }, (function (ws, kS) {
          Qw.fn[kS] = function (HS, hG) {
            var uS = arguments.length && (ws || "boolean" != typeof HS),
              ER = ws || (!0 === HS || !0 === hG ? "margin" : "border");
            return dh(this, (function (dp, ws, HS) {
              var hG;
              return Zi(dp) ? 0 === kS.indexOf("outer") ? dp["inner" + YC] : dp.document.documentElement["client" + YC] : 9 === dp.nodeType ? (hG = dp.documentElement, Math.max(dp.body["scroll" + YC], hG["scroll" + YC], dp.body["offset" + YC], hG["offset" + YC], hG["client" + YC])) : void 0 === HS ? Qw.css(dp, ws, ER) : Qw.style(dp, ws, HS, ER)
            }), dp, uS ? HS : void 0, uS)
          }
        }))
      })), Qw.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (YC, dp) {
        Qw.fn[dp] = function (YC) {
          return this.on(dp, YC)
        }
      })), Qw.fn.extend({
        bind: function (YC, dp, ws) {
          return this.on(YC, null, dp, ws)
        },
        unbind: function (YC, dp) {
          return this.off(YC, null, dp)
        },
        delegate: function (YC, dp, ws, kS) {
          return this.on(dp, YC, ws, kS)
        },
        undelegate: function (YC, dp, ws) {
          return 1 === arguments.length ? this.off(YC, "**") : this.off(dp, YC || "**", ws)
        },
        hover: function (YC, dp) {
          return this.mouseenter(YC).mouseleave(dp || YC)
        }
      }), Qw.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), (function (YC, dp) {
        Qw.fn[dp] = function (YC, ws) {
          return arguments.length > 0 ? this.on(dp, null, YC, ws) : this.trigger(dp)
        }
      }));
      var ia = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      Qw.proxy = function (YC, dp) {
        var ws, kS, hG;
        if ("string" == typeof dp && (ws = YC[dp], dp = YC, YC = ws), CO(YC)) return kS = HS.call(arguments, 2), hG = function () {
          return YC.apply(dp || this, kS.concat(HS.call(arguments)))
        }, hG.guid = YC.guid = YC.guid || Qw.guid++, hG
      }, Qw.holdReady = function (YC) {
        YC ? Qw.readyWait++ : Qw.ready(!0)
      }, Qw.isArray = Array.isArray, Qw.parseJSON = JSON.parse, Qw.nodeName = nm, Qw.isFunction = CO, Qw.isWindow = Zi, Qw.camelCase = Hw, Qw.type = Kj, Qw.now = Date.now, Qw.isNumeric = function (YC) {
        var dp = Qw.type(YC);
        return ("number" === dp || "string" === dp) && !isNaN(YC - parseFloat(YC))
      }, Qw.trim = function (YC) {
        return null == YC ? "" : (YC + "").replace(ia, "")
      }, "function" == typeof define && define.amd && define("jquery", [], (function () {
        return Qw
      }));
      var sb = YC.jQuery,
        LR = YC.$;
      return Qw.noConflict = function (dp) {
        return YC.$ === Qw && (YC.$ = LR), dp && YC.jQuery === Qw && (YC.jQuery = sb), Qw
      }, void 0 === dp && (YC.jQuery = YC.$ = Qw), Qw
    }))
  }, {}],
  2: [function (YC, dp, ws) {
    "use strict";
    var kS = this && this.__importDefault || function (YC) {
      return YC && YC.__esModule ? YC : {
        default: YC
      }
    };
    Object.defineProperty(ws, "__esModule", {
      value: !0
    });
    const HS = kS(YC("jquery"));

    function hG(YC) {
      const dp = HS.default(".content"),
        ws = HS.default("#status"),
        kS = HS.default("#switch");
      YC && !dp.hasClass("active") ? (dp.addClass("active"), kS.text("Disable extension on this website"), ws.text("Active")) : (dp.removeClass("active"), kS.text("Enable extension on this website"), ws.text("Inactive"))
    }
    HS.default((async () => {
      var YC;
      const dp = HS.default("#domain"),
        ws = undefined;
      let kS = null !== (YC = (await chrome.storage.local.get(["domains", "global"])).domains) && void 0 !== YC ? YC : [];
      const uS = await chrome.tabs.query({
        active: !0,
        currentWindow: !0
      });
      if (!uS || 0 === uS.length) return;
      const {
        host: ER
      } = new URL(uS[0].url), Ug = uS[0].id;
      dp.text(ER);
      let df = kS.includes(ER);
      hG(df), HS.default("#switch").on("click", (async () => {
        df ? (kS.splice(kS.indexOf(ER), 1), df = !1, await chrome.tabs.reload(Ug)) : (kS.push(ER), df = !0, await chrome.runtime.sendMessage({
          command: "changeIcon",
          tab: uS[0]
        })), kS = [...new Set(kS)], await chrome.storage.local.set({
          domains: kS
        }), hG(df)
      }))
    }))
  }, {
    jquery: 1
  }]
}, {}, [2]);