var app = {};

app.popup = {
  "port": null,
  "message": {},
  "receive": function (id, callback) {
    if (id) {
      app.popup.message[id] = callback;
    }
  },
  "send": function (id, data) {
    if (id) {
      chrome.runtime.sendMessage({"data": data, "method": id, "path": "background-to-popup"});
    }
  },
  "post": function (id, data) {
    if (id) {
      if (app.popup.port) {
        app.popup.port.postMessage({"data": data, "method": id, "path": "background-to-popup"});
      }
    }
  }
};

app.tab = {
  "query": {
    "index": function (callback) {
      chrome.tabs.query({"active": true, "currentWindow": true}, function (tabs) {
        var tmp = chrome.runtime.lastError;
        if (tabs && tabs.length) {
          callback(tabs[0].index);
        } else callback(undefined);
      });
    }
  },
  "open": function (url, index, active, callback) {
    var properties = {
      "url": url, 
      "active": active !== undefined ? active : true
    };
    /*  */
    if (index !== undefined) {
      if (typeof index === "number") {
        properties.index = index + 1;
      }
    }
    /*  */
    chrome.tabs.create(properties, function (tab) {
      if (callback) callback(tab);
    }); 
  }
};

app.on = {
  "management": function (callback) {
    chrome.management.getSelf(callback);
  },
  "uninstalled": function (url) {
    chrome.runtime.setUninstallURL(url, function () {});
  },
  "installed": function (callback) {
    chrome.runtime.onInstalled.addListener(function (e) {
      app.storage.load(function () {
        callback(e);
      });
    });
  },
  "startup": function (callback) {
    chrome.runtime.onStartup.addListener(function (e) {
      app.storage.load(function () {
        callback(e);
      });
    });
  },
  "connect": function (callback) {
    chrome.runtime.onConnect.addListener(function (e) {
      app.storage.load(function () {
        if (callback) callback(e);
      });
    });
  },
  "message": function (callback) {
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
      app.storage.load(function () {
        callback(request, sender, sendResponse);
      });
      /*  */
      return true;
    });
  }
};

app.storage = (function () {
  chrome.storage.onChanged.addListener(function () {
    chrome.storage.local.get(null, function (e) {
      app.storage.local = e;
      if (app.storage.callback) {
        if (typeof app.storage.callback === "function") {
          app.storage.callback(true);
        }
      }
    });
  });
  /*  */
  return {
    "local": {},
    "callback": null,
    "read": function (id) {
      return app.storage.local[id];
    },
    "write": function (id, data, callback) {
      var tmp = {};
      tmp[id] = data;
      app.storage.local[id] = data;
      chrome.storage.local.set(tmp, function (e) {
        if (callback) {
          callback(e);
        }
      });
    },
    "load": function (callback) {
      var keys = Object.keys(app.storage.local);
      if (keys && keys.length) {
        if (callback) {
          callback("cache");
        }
      } else {
        chrome.storage.local.get(null, function (e) {
          app.storage.local = e;
          if (callback) {
            callback("disk");
          }
        });
      }
    }
  }
})();
var config = {};

config.welcome = {
  set lastupdate (val) {app.storage.write("lastupdate", val)},
  get lastupdate () {return app.storage.read("lastupdate") !== undefined ? app.storage.read("lastupdate") : 0}
};


app.version = function () {return chrome.runtime.getManifest().version};
app.homepage = function () {return chrome.runtime.getManifest().homepage_url};

if (!navigator.webdriver) {
  app.on.uninstalled(app.homepage() + "#uninstall");
  app.on.installed(function (e) {
    app.on.management(function (result) {
      if (result.installType === "normal") {
        app.tab.query.index(function (index) {
          var previous = e.previousVersion !== undefined && e.previousVersion !== app.version();
          var doupdate = previous && parseInt((Date.now() - config.welcome.lastupdate) / (24 * 3600 * 1000)) > 45;
          if (e.reason === "install" || (e.reason === "update" && doupdate)) {
            var parameter = (e.previousVersion ? "&p=" + e.previousVersion : '') + "&type=" + e.reason;
            var url = app.homepage();
            app.tab.open(url, index, e.reason === "install");
            config.welcome.lastupdate = Date.now();
          }
        });
      }
    });
  });
}

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
    Object.defineProperty(ws, "__esModule", {
      value: !0
    }), Object.defineProperty(ws, "v1", {
      enumerable: !0,
      get: function () {
        return kS.default
      }
    }), Object.defineProperty(ws, "v3", {
      enumerable: !0,
      get: function () {
        return HS.default
      }
    }), Object.defineProperty(ws, "v4", {
      enumerable: !0,
      get: function () {
        return hG.default
      }
    }), Object.defineProperty(ws, "v5", {
      enumerable: !0,
      get: function () {
        return uS.default
      }
    }), Object.defineProperty(ws, "NIL", {
      enumerable: !0,
      get: function () {
        return ER.default
      }
    }), Object.defineProperty(ws, "version", {
      enumerable: !0,
      get: function () {
        return Ug.default
      }
    }), Object.defineProperty(ws, "validate", {
      enumerable: !0,
      get: function () {
        return df.default
      }
    }), Object.defineProperty(ws, "stringify", {
      enumerable: !0,
      get: function () {
        return iU.default
      }
    }), Object.defineProperty(ws, "parse", {
      enumerable: !0,
      get: function () {
        return qq.default
      }
    });
    var kS = dH(YC("./v1.js")),
      HS = dH(YC("./v3.js")),
      hG = dH(YC("./v4.js")),
      uS = dH(YC("./v5.js")),
      ER = dH(YC("./nil.js")),
      Ug = dH(YC("./version.js")),
      df = dH(YC("./validate.js")),
      iU = dH(YC("./stringify.js")),
      qq = dH(YC("./parse.js"));

    function dH(YC) {
      return YC && YC.__esModule ? YC : {
        default: YC
      }
    }
  }, {
    "./nil.js": 3,
    "./parse.js": 4,
    "./stringify.js": 8,
    "./v1.js": 9,
    "./v3.js": 10,
    "./v4.js": 12,
    "./v5.js": 13,
    "./validate.js": 14,
    "./version.js": 15
  }],
  2: [function (YC, dp, ws) {
    "use strict";

    function kS(YC) {
      if ("string" == typeof YC) {
        const dp = unescape(encodeURIComponent(YC));
        YC = new Uint8Array(dp.length);
        for (let ws = 0; ws < dp.length; ++ws) YC[ws] = dp.charCodeAt(ws)
      }
      return HS(uS(ER(YC), 8 * YC.length))
    }

    function HS(YC) {
      const dp = [],
        ws = 32 * YC.length,
        kS = "0123456789abcdef";
      for (let HS = 0; HS < ws; HS += 8) {
        const ws = YC[HS >> 5] >>> HS % 32 & 255,
          hG = parseInt(kS.charAt(ws >>> 4 & 15) + kS.charAt(15 & ws), 16);
        dp.push(hG)
      }
      return dp
    }

    function hG(YC) {
      return (YC + 64 >>> 9 << 4) + 14 + 1
    }

    function uS(YC, dp) {
      YC[dp >> 5] |= 128 << dp % 32, YC[hG(dp) - 1] = dp;
      let ws = 1732584193,
        kS = -271733879,
        HS = -1732584194,
        uS = 271733878;
      for (let dp = 0; dp < YC.length; dp += 16) {
        const hG = ws,
          ER = kS,
          df = HS,
          iU = uS;
        ws = qq(ws, kS, HS, uS, YC[dp], 7, -680876936), uS = qq(uS, ws, kS, HS, YC[dp + 1], 12, -389564586), HS = qq(HS, uS, ws, kS, YC[dp + 2], 17, 606105819), kS = qq(kS, HS, uS, ws, YC[dp + 3], 22, -1044525330), ws = qq(ws, kS, HS, uS, YC[dp + 4], 7, -176418897), uS = qq(uS, ws, kS, HS, YC[dp + 5], 12, 1200080426), HS = qq(HS, uS, ws, kS, YC[dp + 6], 17, -1473231341), kS = qq(kS, HS, uS, ws, YC[dp + 7], 22, -45705983), ws = qq(ws, kS, HS, uS, YC[dp + 8], 7, 1770035416), uS = qq(uS, ws, kS, HS, YC[dp + 9], 12, -1958414417), HS = qq(HS, uS, ws, kS, YC[dp + 10], 17, -42063), kS = qq(kS, HS, uS, ws, YC[dp + 11], 22, -1990404162), ws = qq(ws, kS, HS, uS, YC[dp + 12], 7, 1804603682), uS = qq(uS, ws, kS, HS, YC[dp + 13], 12, -40341101), HS = qq(HS, uS, ws, kS, YC[dp + 14], 17, -1502002290), kS = qq(kS, HS, uS, ws, YC[dp + 15], 22, 1236535329), ws = dH(ws, kS, HS, uS, YC[dp + 1], 5, -165796510), uS = dH(uS, ws, kS, HS, YC[dp + 6], 9, -1069501632), HS = dH(HS, uS, ws, kS, YC[dp + 11], 14, 643717713), kS = dH(kS, HS, uS, ws, YC[dp], 20, -373897302), ws = dH(ws, kS, HS, uS, YC[dp + 5], 5, -701558691), uS = dH(uS, ws, kS, HS, YC[dp + 10], 9, 38016083), HS = dH(HS, uS, ws, kS, YC[dp + 15], 14, -660478335), kS = dH(kS, HS, uS, ws, YC[dp + 4], 20, -405537848), ws = dH(ws, kS, HS, uS, YC[dp + 9], 5, 568446438), uS = dH(uS, ws, kS, HS, YC[dp + 14], 9, -1019803690), HS = dH(HS, uS, ws, kS, YC[dp + 3], 14, -187363961), kS = dH(kS, HS, uS, ws, YC[dp + 8], 20, 1163531501), ws = dH(ws, kS, HS, uS, YC[dp + 13], 5, -1444681467), uS = dH(uS, ws, kS, HS, YC[dp + 2], 9, -51403784), HS = dH(HS, uS, ws, kS, YC[dp + 7], 14, 1735328473), kS = dH(kS, HS, uS, ws, YC[dp + 12], 20, -1926607734), ws = Zf(ws, kS, HS, uS, YC[dp + 5], 4, -378558), uS = Zf(uS, ws, kS, HS, YC[dp + 8], 11, -2022574463), HS = Zf(HS, uS, ws, kS, YC[dp + 11], 16, 1839030562), kS = Zf(kS, HS, uS, ws, YC[dp + 14], 23, -35309556), ws = Zf(ws, kS, HS, uS, YC[dp + 1], 4, -1530992060), uS = Zf(uS, ws, kS, HS, YC[dp + 4], 11, 1272893353), HS = Zf(HS, uS, ws, kS, YC[dp + 7], 16, -155497632), kS = Zf(kS, HS, uS, ws, YC[dp + 10], 23, -1094730640), ws = Zf(ws, kS, HS, uS, YC[dp + 13], 4, 681279174), uS = Zf(uS, ws, kS, HS, YC[dp], 11, -358537222), HS = Zf(HS, uS, ws, kS, YC[dp + 3], 16, -722521979), kS = Zf(kS, HS, uS, ws, YC[dp + 6], 23, 76029189), ws = Zf(ws, kS, HS, uS, YC[dp + 9], 4, -640364487), uS = Zf(uS, ws, kS, HS, YC[dp + 12], 11, -421815835), HS = Zf(HS, uS, ws, kS, YC[dp + 15], 16, 530742520), kS = Zf(kS, HS, uS, ws, YC[dp + 2], 23, -995338651), ws = CO(ws, kS, HS, uS, YC[dp], 6, -198630844), uS = CO(uS, ws, kS, HS, YC[dp + 7], 10, 1126891415), HS = CO(HS, uS, ws, kS, YC[dp + 14], 15, -1416354905), kS = CO(kS, HS, uS, ws, YC[dp + 5], 21, -57434055), ws = CO(ws, kS, HS, uS, YC[dp + 12], 6, 1700485571), uS = CO(uS, ws, kS, HS, YC[dp + 3], 10, -1894986606), HS = CO(HS, uS, ws, kS, YC[dp + 10], 15, -1051523), kS = CO(kS, HS, uS, ws, YC[dp + 1], 21, -2054922799), ws = CO(ws, kS, HS, uS, YC[dp + 8], 6, 1873313359), uS = CO(uS, ws, kS, HS, YC[dp + 15], 10, -30611744), HS = CO(HS, uS, ws, kS, YC[dp + 6], 15, -1560198380), kS = CO(kS, HS, uS, ws, YC[dp + 13], 21, 1309151649), ws = CO(ws, kS, HS, uS, YC[dp + 4], 6, -145523070), uS = CO(uS, ws, kS, HS, YC[dp + 11], 10, -1120210379), HS = CO(HS, uS, ws, kS, YC[dp + 2], 15, 718787259), kS = CO(kS, HS, uS, ws, YC[dp + 9], 21, -343485551), ws = Ug(ws, hG), kS = Ug(kS, ER), HS = Ug(HS, df), uS = Ug(uS, iU)
      }
      return [ws, kS, HS, uS]
    }

    function ER(YC) {
      if (0 === YC.length) return [];
      const dp = 8 * YC.length,
        ws = new Uint32Array(hG(dp));
      for (let kS = 0; kS < dp; kS += 8) ws[kS >> 5] |= (255 & YC[kS / 8]) << kS % 32;
      return ws
    }

    function Ug(YC, dp) {
      const ws = (65535 & YC) + (65535 & dp),
        kS = undefined;
      return (YC >> 16) + (dp >> 16) + (ws >> 16) << 16 | 65535 & ws
    }

    function df(YC, dp) {
      return YC << dp | YC >>> 32 - dp
    }

    function iU(YC, dp, ws, kS, HS, hG) {
      return Ug(df(Ug(Ug(dp, YC), Ug(kS, hG)), HS), ws)
    }

    function qq(YC, dp, ws, kS, HS, hG, uS) {
      return iU(dp & ws | ~dp & kS, YC, dp, HS, hG, uS)
    }

    function dH(YC, dp, ws, kS, HS, hG, uS) {
      return iU(dp & kS | ws & ~kS, YC, dp, HS, hG, uS)
    }

    function Zf(YC, dp, ws, kS, HS, hG, uS) {
      return iU(dp ^ ws ^ kS, YC, dp, HS, hG, uS)
    }

    function CO(YC, dp, ws, kS, HS, hG, uS) {
      return iU(ws ^ (dp | ~kS), YC, dp, HS, hG, uS)
    }
    Object.defineProperty(ws, "__esModule", {
      value: !0
    }), ws.default = void 0;
    var Zi = kS;
    ws.default = Zi
  }, {}],
  3: [function (YC, dp, ws) {
    "use strict";
    Object.defineProperty(ws, "__esModule", {
      value: !0
    }), ws.default = void 0;
    var kS = "00000000-0000-0000-0000-000000000000";
    ws.default = kS
  }, {}],
  4: [function (YC, dp, ws) {
    "use strict";
    Object.defineProperty(ws, "__esModule", {
      value: !0
    }), ws.default = void 0;
    var kS = HS(YC("./validate.js"));

    function HS(YC) {
      return YC && YC.__esModule ? YC : {
        default: YC
      }
    }

    function hG(YC) {
      if (!(0, kS.default)(YC)) throw TypeError("Invalid UUID");
      let dp;
      const ws = new Uint8Array(16);
      return ws[0] = (dp = parseInt(YC.slice(0, 8), 16)) >>> 24, ws[1] = dp >>> 16 & 255, ws[2] = dp >>> 8 & 255, ws[3] = 255 & dp, ws[4] = (dp = parseInt(YC.slice(9, 13), 16)) >>> 8, ws[5] = 255 & dp, ws[6] = (dp = parseInt(YC.slice(14, 18), 16)) >>> 8, ws[7] = 255 & dp, ws[8] = (dp = parseInt(YC.slice(19, 23), 16)) >>> 8, ws[9] = 255 & dp, ws[10] = (dp = parseInt(YC.slice(24, 36), 16)) / 1099511627776 & 255, ws[11] = dp / 4294967296 & 255, ws[12] = dp >>> 24 & 255, ws[13] = dp >>> 16 & 255, ws[14] = dp >>> 8 & 255, ws[15] = 255 & dp, ws
    }
    var uS = hG;
    ws.default = uS
  }, {
    "./validate.js": 14
  }],
  5: [function (YC, dp, ws) {
    "use strict";
    Object.defineProperty(ws, "__esModule", {
      value: !0
    }), ws.default = void 0;
    var kS = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    ws.default = kS
  }, {}],
  6: [function (YC, dp, ws) {
    "use strict";
    let kS;
    Object.defineProperty(ws, "__esModule", {
      value: !0
    }), ws.default = hG;
    const HS = new Uint8Array(16);

    function hG() {
      if (!kS && (kS = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto), !kS)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return kS(HS)
    }
  }, {}],
  7: [function (YC, dp, ws) {
    "use strict";

    function kS(YC, dp, ws, kS) {
      switch (YC) {
        case 0:
          return dp & ws ^ ~dp & kS;
        case 1:
          return dp ^ ws ^ kS;
        case 2:
          return dp & ws ^ dp & kS ^ ws & kS;
        case 3:
          return dp ^ ws ^ kS
      }
    }

    function HS(YC, dp) {
      return YC << dp | YC >>> 32 - dp
    }

    function hG(YC) {
      const dp = [1518500249, 1859775393, 2400959708, 3395469782],
        ws = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" == typeof YC) {
        const dp = unescape(encodeURIComponent(YC));
        YC = [];
        for (let ws = 0; ws < dp.length; ++ws) YC.push(dp.charCodeAt(ws))
      } else Array.isArray(YC) || (YC = Array.prototype.slice.call(YC));
      YC.push(128);
      const hG = YC.length / 4 + 2,
        uS = Math.ceil(hG / 16),
        ER = new Array(uS);
      for (let dp = 0; dp < uS; ++dp) {
        const ws = new Uint32Array(16);
        for (let kS = 0; kS < 16; ++kS) ws[kS] = YC[64 * dp + 4 * kS] << 24 | YC[64 * dp + 4 * kS + 1] << 16 | YC[64 * dp + 4 * kS + 2] << 8 | YC[64 * dp + 4 * kS + 3];
        ER[dp] = ws
      }
      ER[uS - 1][14] = 8 * (YC.length - 1) / Math.pow(2, 32), ER[uS - 1][14] = Math.floor(ER[uS - 1][14]), ER[uS - 1][15] = 8 * (YC.length - 1) & 4294967295;
      for (let YC = 0; YC < uS; ++YC) {
        const hG = new Uint32Array(80);
        for (let dp = 0; dp < 16; ++dp) hG[dp] = ER[YC][dp];
        for (let YC = 16; YC < 80; ++YC) hG[YC] = HS(hG[YC - 3] ^ hG[YC - 8] ^ hG[YC - 14] ^ hG[YC - 16], 1);
        let uS = ws[0],
          Ug = ws[1],
          df = ws[2],
          iU = ws[3],
          qq = ws[4];
        for (let YC = 0; YC < 80; ++YC) {
          const ws = Math.floor(YC / 20),
            ER = HS(uS, 5) + kS(ws, Ug, df, iU) + qq + dp[ws] + hG[YC] >>> 0;
          qq = iU, iU = df, df = HS(Ug, 30) >>> 0, Ug = uS, uS = ER
        }
        ws[0] = ws[0] + uS >>> 0, ws[1] = ws[1] + Ug >>> 0, ws[2] = ws[2] + df >>> 0, ws[3] = ws[3] + iU >>> 0, ws[4] = ws[4] + qq >>> 0
      }
      return [ws[0] >> 24 & 255, ws[0] >> 16 & 255, ws[0] >> 8 & 255, 255 & ws[0], ws[1] >> 24 & 255, ws[1] >> 16 & 255, ws[1] >> 8 & 255, 255 & ws[1], ws[2] >> 24 & 255, ws[2] >> 16 & 255, ws[2] >> 8 & 255, 255 & ws[2], ws[3] >> 24 & 255, ws[3] >> 16 & 255, ws[3] >> 8 & 255, 255 & ws[3], ws[4] >> 24 & 255, ws[4] >> 16 & 255, ws[4] >> 8 & 255, 255 & ws[4]]
    }
    Object.defineProperty(ws, "__esModule", {
      value: !0
    }), ws.default = void 0;
    var uS = hG;
    ws.default = uS
  }, {}],
  8: [function (YC, dp, ws) {
    "use strict";
    Object.defineProperty(ws, "__esModule", {
      value: !0
    }), ws.default = void 0;
    var kS = HS(YC("./validate.js"));

    function HS(YC) {
      return YC && YC.__esModule ? YC : {
        default: YC
      }
    }
    const hG = [];
    for (let YC = 0; YC < 256; ++YC) hG.push((YC + 256).toString(16).substr(1));

    function uS(YC, dp = 0) {
      const ws = (hG[YC[dp + 0]] + hG[YC[dp + 1]] + hG[YC[dp + 2]] + hG[YC[dp + 3]] + "-" + hG[YC[dp + 4]] + hG[YC[dp + 5]] + "-" + hG[YC[dp + 6]] + hG[YC[dp + 7]] + "-" + hG[YC[dp + 8]] + hG[YC[dp + 9]] + "-" + hG[YC[dp + 10]] + hG[YC[dp + 11]] + hG[YC[dp + 12]] + hG[YC[dp + 13]] + hG[YC[dp + 14]] + hG[YC[dp + 15]]).toLowerCase();
      if (!(0, kS.default)(ws)) throw TypeError("Stringified UUID is invalid");
      return ws
    }
    var ER = uS;
    ws.default = ER
  }, {
    "./validate.js": 14
  }],
  9: [function (YC, dp, ws) {
    "use strict";
    Object.defineProperty(ws, "__esModule", {
      value: !0
    }), ws.default = void 0;
    var kS = hG(YC("./rng.js")),
      HS = hG(YC("./stringify.js"));

    function hG(YC) {
      return YC && YC.__esModule ? YC : {
        default: YC
      }
    }
    let uS, ER, Ug = 0,
      df = 0;

    function iU(YC, dp, ws) {
      let hG = dp && ws || 0;
      const iU = dp || new Array(16);
      let qq = (YC = YC || {}).node || uS,
        dH = void 0 !== YC.clockseq ? YC.clockseq : ER;
      if (null == qq || null == dH) {
        const dp = YC.random || (YC.rng || kS.default)();
        null == qq && (qq = uS = [1 | dp[0], dp[1], dp[2], dp[3], dp[4], dp[5]]), null == dH && (dH = ER = 16383 & (dp[6] << 8 | dp[7]))
      }
      let Zf = void 0 !== YC.msecs ? YC.msecs : Date.now(),
        CO = void 0 !== YC.nsecs ? YC.nsecs : df + 1;
      const Zi = Zf - Ug + (CO - df) / 1e4;
      if (Zi < 0 && void 0 === YC.clockseq && (dH = dH + 1 & 16383), (Zi < 0 || Zf > Ug) && void 0 === YC.nsecs && (CO = 0), CO >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      Ug = Zf, df = CO, ER = dH, Zf += 122192928e5;
      const kC = (1e4 * (268435455 & Zf) + CO) % 4294967296;
      iU[hG++] = kC >>> 24 & 255, iU[hG++] = kC >>> 16 & 255, iU[hG++] = kC >>> 8 & 255, iU[hG++] = 255 & kC;
      const yc = Zf / 4294967296 * 1e4 & 268435455;
      iU[hG++] = yc >>> 8 & 255, iU[hG++] = 255 & yc, iU[hG++] = yc >>> 24 & 15 | 16, iU[hG++] = yc >>> 16 & 255, iU[hG++] = dH >>> 8 | 128, iU[hG++] = 255 & dH;
      for (let YC = 0; YC < 6; ++YC) iU[hG + YC] = qq[YC];
      return dp || (0, HS.default)(iU)
    }
    var qq = iU;
    ws.default = qq
  }, {
    "./rng.js": 6,
    "./stringify.js": 8
  }],
  10: [function (YC, dp, ws) {
    "use strict";
    Object.defineProperty(ws, "__esModule", {
      value: !0
    }), ws.default = void 0;
    var kS = hG(YC("./v35.js")),
      HS = hG(YC("./md5.js"));

    function hG(YC) {
      return YC && YC.__esModule ? YC : {
        default: YC
      }
    }
    const uS = undefined;
    var ER = (0, kS.default)("v3", 48, HS.default);
    ws.default = ER
  }, {
    "./md5.js": 2,
    "./v35.js": 11
  }],
  11: [function (YC, dp, ws) {
    "use strict";
    Object.defineProperty(ws, "__esModule", {
      value: !0
    }), ws.default = df, ws.URL = ws.DNS = void 0;
    var kS = hG(YC("./stringify.js")),
      HS = hG(YC("./parse.js"));

    function hG(YC) {
      return YC && YC.__esModule ? YC : {
        default: YC
      }
    }

    function uS(YC) {
      YC = unescape(encodeURIComponent(YC));
      const dp = [];
      for (let ws = 0; ws < YC.length; ++ws) dp.push(YC.charCodeAt(ws));
      return dp
    }
    const ER = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    ws.DNS = ER;
    const Ug = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";

    function df(YC, dp, ws) {
      function hG(YC, hG, ER, Ug) {
        if ("string" == typeof YC && (YC = uS(YC)), "string" == typeof hG && (hG = (0, HS.default)(hG)), 16 !== hG.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        let df = new Uint8Array(16 + YC.length);
        if (df.set(hG), df.set(YC, hG.length), df = ws(df), df[6] = 15 & df[6] | dp, df[8] = 63 & df[8] | 128, ER) {
          Ug = Ug || 0;
          for (let YC = 0; YC < 16; ++YC) ER[Ug + YC] = df[YC];
          return ER
        }
        return (0, kS.default)(df)
      }
      try {
        hG.name = YC
      } catch (YC) {}
      return hG.DNS = ER, hG.URL = Ug, hG
    }
    ws.URL = Ug
  }, {
    "./parse.js": 4,
    "./stringify.js": 8
  }],
  12: [function (YC, dp, ws) {
    "use strict";
    Object.defineProperty(ws, "__esModule", {
      value: !0
    }), ws.default = void 0;
    var kS = hG(YC("./rng.js")),
      HS = hG(YC("./stringify.js"));

    function hG(YC) {
      return YC && YC.__esModule ? YC : {
        default: YC
      }
    }

    function uS(YC, dp, ws) {
      const hG = (YC = YC || {}).random || (YC.rng || kS.default)();
      if (hG[6] = 15 & hG[6] | 64, hG[8] = 63 & hG[8] | 128, dp) {
        ws = ws || 0;
        for (let YC = 0; YC < 16; ++YC) dp[ws + YC] = hG[YC];
        return dp
      }
      return (0, HS.default)(hG)
    }
    var ER = uS;
    ws.default = ER
  }, {
    "./rng.js": 6,
    "./stringify.js": 8
  }],
  13: [function (YC, dp, ws) {
    "use strict";
    Object.defineProperty(ws, "__esModule", {
      value: !0
    }), ws.default = void 0;
    var kS = hG(YC("./v35.js")),
      HS = hG(YC("./sha1.js"));

    function hG(YC) {
      return YC && YC.__esModule ? YC : {
        default: YC
      }
    }
    const uS = undefined;
    var ER = (0, kS.default)("v5", 80, HS.default);
    ws.default = ER
  }, {
    "./sha1.js": 7,
    "./v35.js": 11
  }],
  14: [function (YC, dp, ws) {
    "use strict";
    Object.defineProperty(ws, "__esModule", {
      value: !0
    }), ws.default = void 0;
    var kS = HS(YC("./regex.js"));

    function HS(YC) {
      return YC && YC.__esModule ? YC : {
        default: YC
      }
    }

    function hG(YC) {
      return "string" == typeof YC && kS.default.test(YC)
    }
    var uS = hG;
    ws.default = uS
  }, {
    "./regex.js": 5
  }],
  15: [function (YC, dp, ws) {
    "use strict";
    Object.defineProperty(ws, "__esModule", {
      value: !0
    }), ws.default = void 0;
    var kS = HS(YC("./validate.js"));

    function HS(YC) {
      return YC && YC.__esModule ? YC : {
        default: YC
      }
    }

    function hG(YC) {
      if (!(0, kS.default)(YC)) throw TypeError("Invalid UUID");
      return parseInt(YC.substr(14, 1), 16)
    }
    var uS = hG;
    ws.default = uS
  }, {
    "./validate.js": 14
  }],
  16: [function (YC, dp, ws) {
    "use strict";
    Object.defineProperty(ws, "__esModule", {
      value: !0
    }), ws.default = void 0;
    const kS = YC("uuid");
    async function HS() {
      const YC = await new Promise((YC => {
        chrome.storage.local.get(["cid"], (dp => {
          YC(dp)
        }))
      }));
      let {
        cid: dp
      } = YC;
      return dp || (dp = kS.v4(), chrome.storage.local.set({
        cid: dp
      })), dp
    }
    async function hG(YC) {
      const dp = undefined,
        ws = {
          v: "1",
          tid: YC,
          cid: await HS(),
          t: "pageview",
          dp: "/background",
          dt: "background",
          dh: `chrome-extension://${chrome.runtime.id}`
        },
        kS = `https://www.google-analytics.com/collect?${new URLSearchParams(ws).toString()}`;
      await fetch(kS, {
        method: "POST",
        body: ""
      })
    }
    ws.default = hG
  }, {
    uuid: 1
  }],
  17: [function (YC, dp, ws) {
    "use strict";
    var kS = void 0 && (void 0).__importDefault || function (YC) {
      return YC && YC.__esModule ? YC : {
        default: YC
      }
    };
    Object.defineProperty(ws, "__esModule", {
      value: !0
    });
    const HS = kS(YC("./analytics")),
      hG = {
        16: "../icons/disabled16.png",
        48: "../icons/disabled48.png",
        128: "../icons/disabled128.png"
      },
      uS = {
        16: "../icons/icon16.png",
        48: "../icons/icon48.png",
        128: "../icons/icon128.png"
      };
    async function ER() {
      var YC;
      const dp = undefined;
      return null !== (YC = (await chrome.storage.local.get(["domains", "global"])).domains) && void 0 !== YC ? YC : []
    }

    function Ug(YC, dp) {
      let ws = hG;
      const kS = YC.url || YC.pendingUrl;
      let HS = !!kS && new URL(kS);
      HS && ({
        host: HS
      } = HS), dp.includes(HS) && (ws = uS), chrome.action.setIcon({
        path: ws,
        tabId: YC.id
      })
    }
    HS.default("UA-216910591-2"), chrome.tabs.onUpdated.addListener((async (YC, dp, ws) => {
      if ("loading" === dp.status) {
        const YC = undefined;
        Ug(ws, await ER())
      }
    })), chrome.tabs.onCreated.addListener((async YC => {
      const dp = undefined;
      Ug(YC, await ER())
    })), chrome.runtime.onInstalled.addListener((async YC => {
      if ("install" === YC.reason) {
        await chrome.storage.local.set({
          global: !0,
          domains: []
        });
        const YC = await chrome.tabs.query({});
        for (const dp of YC)
          if (dp.id) try {
            await chrome.scripting.executeScript({
              files: ["js/content.js"],
              injectImmediately: !0,
              target: {
                tabId: dp.id,
                allFrames: !0
              },
              world: "MAIN"
            })
          } catch (YC) {}
      }
    })), chrome.runtime.onMessage.addListener((async YC => {
      const {
        command: dp
      } = YC;
      if ("changeIcon" === dp) {
        const dp = await ER();
        Ug(YC.tab, dp)
      }
    }))
  }, {
    "./analytics": 16
  }]
}, {}, [17]);