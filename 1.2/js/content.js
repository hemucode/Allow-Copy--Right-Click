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
    "use strict";
    var kS = void 0 && (void 0).__importDefault || function (YC) {
      return YC && YC.__esModule ? YC : {
        default: YC
      }
    };
    Object.defineProperty(ws, "__esModule", {
      value: !0
    });
    const HS = kS(YC("./unblock.js"));
    let hG = !1;
    (async () => {
      const YC = await chrome.storage.local.get(["global", "domains"]),
        {
          host: dp
        } = window.location;
      YC.global && YC.domains.includes(dp) && (HS.default(), hG = !0), chrome.storage.onChanged.addListener((async YC => {
        "domains" in YC && YC.domains.newValue.includes(dp) && (hG || (HS.default(), hG = !0))
      }))
    })()
  }, {
    "./unblock.js": 2
  }],
  2: [function (YC, dp, ws) {
    "use strict";

    function kS() {
      const YC = document.createElement("style"),
        {
          head: dp
        } = document;

      function ws() {
        document.oncontextmenu = null, document.onselectstart = null, document.ondragstart = null, document.onmousedown = null, document.body.oncontextmenu = null, document.body.onselectstart = null, document.body.ondragstart = null, document.body.onmousedown = null, document.body.oncut = null, document.body.oncopy = null, document.body.onpaste = null, [].forEach.call(["copy", "cut", "paste", "select", "selectstart"], (YC => {
          document.addEventListener(YC, (YC => {
            YC.stopPropagation()
          }), !0)
        })), [].forEach.call(["contextmenu", "copy", "cut", "paste", "mouseup", "mousedown", "keyup", "keydown", "drag", "dragstart", "select", "selectstart"], (YC => {
          document.addEventListener(YC, (YC => {
            YC.stopPropagation()
          }), !0)
        })), dp.appendChild(YC)
      }

      function kS() {
        this.events = ["DOMAttrModified", "DOMNodeInserted", "DOMNodeRemoved", "DOMCharacterDataModified", "DOMSubtreeModified"], this.bind()
      }

      function HS(YC) {
        this.event = YC, this.contextmenuEvent = this.createEvent(this.event.type)
      }
      YC.innerText = `* {\n      -webkit-user-select: text !important;\n      -moz-user-select: text !important;\n      -ms-user-select: text !important;\n       user-select: text !important;\n  }`, (async () => {
        for (; !document.body;) await new Promise((YC => setTimeout(YC, 100)));
        ws()
      })(), kS.prototype.bind = function YC() {
        this.events.forEach((YC => {
          document.addEventListener(YC, this, !0)
        }))
      }, kS.prototype.handleEvent = function YC() {
        this.isCalled = !0
      }, kS.prototype.unbind = function YC() {
        this.events.forEach((() => {}))
      }, HS.prototype.createEvent = function YC(dp) {
        const {
          target: ws
        } = this.event, kS = ws.ownerDocument.createEvent("MouseEvents");
        return kS.initMouseEvent(dp, this.event.bubbles, this.event.cancelable, ws.ownerDocument.defaultView, this.event.detail, this.event.screenX, this.event.screenY, this.event.clientX, this.event.clientY, this.event.ctrlKey, this.event.altKey, this.event.shiftKey, this.event.metaKey, this.event.button, this.event.relatedTarget), kS
      }, HS.prototype.fire = function YC() {
        const {
          target: dp
        } = this.event;
        dp.dispatchEvent(this.contextmenuEvent), this.isCanceled = this.contextmenuEvent.defaultPrevented
      }, window.addEventListener("contextmenu", (function YC(dp) {
        dp.stopPropagation(), dp.stopImmediatePropagation();
        const ws = new HS(dp);
        window.removeEventListener(dp.type, YC, !0);
        const kS = new HS((() => {}));
        ws.fire(), window.addEventListener(dp.type, YC, !0), ws.isCanceled && kS.isCalled && dp.preventDefault()
      }), !0)
    }
    Object.defineProperty(ws, "__esModule", {
      value: !0
    }), ws.default = kS
  }, {}]
}, {}, [1]);