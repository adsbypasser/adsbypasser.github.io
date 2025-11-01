// ==UserScript==
// @name           AdsBypasser
// @namespace      AdsBypasser
// @description    Bypass Ads
// @author         AdsBypasser Team
// @version        8.5.0
// @license        BSD-3-Clause
// @homepageURL    https://adsbypasser.github.io/
// @supportURL     https://github.com/adsbypasser/adsbypasser/issues
// @updateURL      https://adsbypasser.github.io/releases/adsbypasser.full.meta.js
// @downloadURL    https://adsbypasser.github.io/releases/adsbypasser.full.user.js
// @icon           https://raw.githubusercontent.com/adsbypasser/adsbypasser/v8.5.0/static/img/logo.png
// @grant          GM_deleteValue
// @grant          GM_getValue
// @grant          GM_info
// @grant          GM_openInTab
// @grant          GM_registerMenuCommand
// @grant          GM_setValue
// @grant          GM_xmlhttpRequest
// @grant          GM.deleteValue
// @grant          GM.getValue
// @grant          GM.info
// @grant          GM.openInTab
// @grant          GM.registerMenuCommand
// @grant          GM.setValue
// @grant          GM.xmlHttpRequest
// @grant          unsafeWindow
// @noframes
// @run-at         document-start
// @connect        *
// @match          *://adsbypasser.github.io/*
// @match          *://*.14xpics.space/*
// @match          *://*.1ink.cc/*
// @match          *://*.1link.club/*
// @match          *://*.2i.cz/*
// @match          *://*.2i.sk/*
// @match          *://*.3minx.com/*
// @match          *://*.3xplanet.com/*
// @match          *://*.3xplanet.net/*
// @match          *://*.4fuk.me/*
// @match          *://*.555fap.com/*
// @match          *://*.a2zapk.io/*
// @match          *://*.adfoc.us/*
// @match          *://*.adsafelink.com/*
// @match          *://*.adshnk.com/*
// @match          *://*.adz7short.space/*
// @match          *://*.ai18.pics/*
// @match          *://*.ak.sv/*
// @match          *://*.anchoreth.com/*
// @match          *://*.anime-jav.com/*
// @match          *://*.apunkasoftware.net/*
// @match          *://*.aylink.co/*
// @match          *://*.bayimg.com/*
// @match          *://*.bcvc.ink/*
// @match          *://*.beeimg.com/*
// @match          *://*.binbox.io/*
// @match          *://*.blackwidof.org/*
// @match          *://*.blogmado.com/*
// @match          *://*.boost.ink/*
// @match          *://*.casimages.com/*
// @match          *://*.chinese-pics.com/*
// @match          *://*.clik.pw/*
// @match          *://*.clk.sh/*
// @match          *://*.cloudgallery.net/*
// @match          *://*.cn-av.com/*
// @match          *://*.cnpics.org/*
// @match          *://*.cnxx.me/*
// @match          *://*.cosplay18.pics/*
// @match          *://*.cpmlink.net/*
// @match          *://*.cpmlink.pro/*
// @match          *://*.croea.com/*
// @match          *://*.cubeupload.com/*
// @match          *://*.cutpaid.com/*
// @match          *://*.depic.me/*
// @match          *://*.directupload.eu/*
// @match          *://*.dpic.me/*
// @match          *://*.dz4link.com/*
// @match          *://*.earnlink.io/*
// @match          *://*.exe-links.com/*
// @match          *://*.exeo.app/*
// @match          *://*.fappic.com/*
// @match          *://*.fastpic.org/*
// @match          *://*.fc-lc.com/*
// @match          *://*.fc-lc.xyz/*
// @match          *://*.fc2ppv.stream/*
// @match          *://*.fikfok.net/*
// @match          *://*.fir3.net/*
// @match          *://*.forex-trnd.com/*
// @match          *://*.fotosik.pl/*
// @match          *://*.get-click2.blogspot.com/*
// @match          *://*.getthot.com/*
// @match          *://*.gitlink.pro/*
// @match          *://*.gofile.download/*
// @match          *://*.goo.st/*
// @match          *://*.gplinks.co/*
// @match          *://*.hen-tay.net/*
// @match          *://*.hentai-sub.com/*
// @match          *://*.hentai4f.com/*
// @match          *://*.hentaicovid.com/*
// @match          *://*.hentaicovid.org/*
// @match          *://*.hentaipig.com/*
// @match          *://*.hentaixnx.com/*
// @match          *://*.hostpic.org/*
// @match          *://*.ibb.co/*
// @match          *://*.icutlink.com/*
// @match          *://*.idol69.net/*
// @match          *://*.im.ge/*
// @match          *://*.imagebam.com/*
// @match          *://*.imageban.ru/*
// @match          *://*.imagehaha.com/*
// @match          *://*.imagehost.at/*
// @match          *://*.imagenetz.de/*
// @match          *://*.imagenpic.com/*
// @match          *://*.imageshack.com/*
// @match          *://*.imageshimage.com/*
// @match          *://*.imagetwist.com/*
// @match          *://*.imagetwist.netlify.app/*
// @match          *://*.imageup.ru/*
// @match          *://*.imageupper.com/*
// @match          *://*.imagevenue.com/*
// @match          *://*.imagexport.com/*
// @match          *://*.imgadult.com/*
// @match          *://*.imgair.net/*
// @match          *://*.imgbaron.com/*
// @match          *://*.imgbase.ru/*
// @match          *://*.imgbb.com/*
// @match          *://*.imgblaze.net/*
// @match          *://*.imgbox.com/*
// @match          *://*.imgcloud.pw/*
// @match          *://*.imgdawgknuttz.com/*
// @match          *://*.imgdrive.net/*
// @match          *://*.imgfira.cc/*
// @match          *://*.imgflip.com/*
// @match          *://*.imgfrost.net/*
// @match          *://*.imghit.com/*
// @match          *://*.imgouhmde.sbs/*
// @match          *://*.imgsto.com/*
// @match          *://*.imgtaxi.com/*
// @match          *://*.imgtraffic.com/*
// @match          *://*.imgwallet.com/*
// @match          *://*.imx.to/*
// @match          *://*.indishare.org/*
// @match          *://*.infidrive.net/*
// @match          *://*.jav-load.com/*
// @match          *://*.javball.com/*
// @match          *://*.javbee.vip/*
// @match          *://*.javlibrary.com/*
// @match          *://*.javring.com/*
// @match          *://*.javstore.net/*
// @match          *://*.javsunday.com/*
// @match          *://*.javtele.net/*
// @match          *://*.javtenshi.com/*
// @match          *://*.katfile.cloud/*
// @match          *://*.keeplinks.org/*
// @match          *://*.keptarolo.hu/*
// @match          *://*.kimochi.info/*
// @match          *://*.kin8-av.com/*
// @match          *://*.kin8-jav.com/*
// @match          *://*.kingofshrink.com/*
// @match          *://*.kr-av.com/*
// @match          *://*.linegee.net/*
// @match          *://*.linkpoi.me/*
// @match          *://*.linkshrink.net/*
// @match          *://*.lnk2.cc/*
// @match          *://*.loaninsurehub.com/*
// @match          *://*.lolinez.com/*
// @match          *://*.lookmyimg.com/*
// @match          *://*.mangalist.org/*
// @match          *://*.miragepics.com/*
// @match          *://*.mirrored.to/*
// @match          *://*.mitly.us/*
// @match          *://*.multiup.io/*
// @match          *://*.network-loop.com/*
// @match          *://*.noelshack.com/*
// @match          *://*.oke.io/*
// @match          *://*.oko.sh/*
// @match          *://*.otomi-games.com/*
// @match          *://*.ouo.io/*
// @match          *://*.ouo.press/*
// @match          *://*.ovabee.com/*
// @match          *://*.pahe.plus/*
// @match          *://*.payskip.org/*
// @match          *://*.pic-upload.de/*
// @match          *://*.picforall.ru/*
// @match          *://*.pics4you.org/*
// @match          *://*.picstate.com/*
// @match          *://*.pig69.com/*
// @match          *://*.pilot007.org/*
// @match          *://*.pimpandhost.com/*
// @match          *://*.pixhost.to/*
// @match          *://*.pixroute.com/*
// @match          *://*.pixxxar.com/*
// @match          *://*.pixxxels.cc/*
// @match          *://*.porn-pig.com/*
// @match          *://*.porn4f.com/*
// @match          *://*.porn4f.org/*
// @match          *://*.postimg.cc/*
// @match          *://*.postlmg.cc/*
// @match          *://*.prnt.sc/*
// @match          *://*.rintor.space/*
// @match          *://*.rlu.ru/*
// @match          *://*.ryuugames.com/*
// @match          *://*.s-porn.com/*
// @match          *://*.sfile.mobi/*
// @match          *://*.short.am/*
// @match          *://*.shortmoz.link/*
// @match          *://*.shotcan.com/*
// @match          *://*.silverpic.net/*
// @match          *://*.similarsites.com/*
// @match          *://*.spaste.com/*
// @match          *://*.srt.am/*
// @match          *://*.stfly.me/*
// @match          *://*.stfly.xyz/*
// @match          *://*.supercheats.com/*
// @match          *://*.sweetie-fox.com/*
// @match          *://*.swzz.xyz/*
// @match          *://*.techstudify.com/*
// @match          *://*.techtrendmakers.com/*
// @match          *://*.thefileslocker.net/*
// @match          *://*.thinfi.com/*
// @match          *://*.thotpacks.xyz/*
// @match          *://*.tmearn.net/*
// @match          *://*.tnshort.net/*
// @match          *://*.trafficimage.club/*
// @match          *://*.tribuntekno.com/*
// @match          *://*.turboimagehost.com/*
// @match          *://*.turkdown.com/*
// @match          *://*.tutwuri.id/*
// @match          *://*.uncenav.com/*
// @match          *://*.uploadhaven.com/*
// @match          *://*.uploadrar.com/*
// @match          *://*.urlcash.com/*
// @match          *://*.urlgalleries.net/*
// @match          *://*.usersdrive.com/*
// @match          *://*.vipr.im/*
// @match          *://*.xcamcovid.com/*
// @match          *://*.xxpics.org/*
// @match          *://*.xxxwebdlxxx.org/*
// @match          *://*.xxxwebdlxxx.top/*
// @match          *://*.zegtrends.com/*
// ==/UserScript==

(function () {
  'use strict';
  class AdsBypasserError extends Error {
    constructor(message) {
      super(message);
    }
    get name() {
      return "AdsBypasserError";
    }
  }
  function forEach(collection, fn) {
    if (isArrayLike(collection)) {
      return Array.prototype.forEach.call(collection, fn);
    }
    return Object.keys(collection).forEach((k) =>
      fn(collection[k], k, collection),
    );
  }
  function every(collection, fn) {
    if (isArrayLike(collection)) {
      return Array.prototype.every.call(collection, fn);
    }
    return Object.keys(collection).every((k) => fn(collection[k], k, collection));
  }
  function map(collection, fn) {
    if (isArrayLike(collection)) {
      return Array.prototype.map.call(collection, fn);
    }
    const mapped = Object.assign({}, collection);
    Object.getOwnPropertyNames(mapped).forEach((k) => {
      mapped[k] = fn(collection[k], k, collection);
    });
    return mapped;
  }
  function find(collection, fn) {
    for (const [k, v] of enumerate(collection)) {
      const r = fn(v, k, collection);
      if (r !== none) return [k, v, r];
    }
    return [none, none, none];
  }
  function* enumerate(collection) {
    if (isArrayLike(collection)) {
      yield* Array.prototype.entries.call(collection);
      return;
    }
    const keys = Object.getOwnPropertyNames(collection);
    for (const k of keys) yield [k, collection[k]];
  }
  function isArrayLike(collection) {
    return Array.isArray(collection) || isNodeList(collection);
  }
  function isNodeList(collection) {
    return collection.constructor.name === "NodeList";
  }
  function partial(fn, ...args) {
    if (typeof fn !== "function")
      throw new AdsBypasserError("must give a function");
    return (...innerArgs) => fn(...args.concat(innerArgs));
  }
  function isString(value) {
    return typeof value === "string" || value instanceof String;
  }
  function nop() {}
  const none = nop;
  function wait(msDelay) {
    return new Promise((resolve) => setTimeout(resolve, msDelay));
  }
  function tryEvery(msInterval, fn) {
    return new Promise((resolve) => {
      const handle = setInterval(() => {
        const result = fn();
        if (result !== none) {
          clearInterval(handle);
          resolve(result);
        }
      }, msInterval);
    });
  }
  const patterns = [];
  function register(pattern) {
    patterns.push(pattern);
  }
  function dispatchByObject(rule, urlObj) {
    const matched = map(rule, (pattern, part) => {
      if (pattern instanceof RegExp) return urlObj[part].match(pattern);
      if (Array.isArray(pattern)) {
        const [, , r] = find(pattern, (sp) => {
          const m = urlObj[part].match(sp);
          return m || none;
        });
        return r !== none ? r : null;
      }
      throw new AdsBypasserError("invalid rule");
    });
    const passed = every(matched, (v) => !!v);
    return passed ? matched : null;
  }
  function dispatchByRegExp(rule, url) {
    return url.match(rule);
  }
  function dispatchByArray(rules, url1, url3, url6) {
    const [, , r] = find(rules, (rule) => {
      const m = dispatch(rule, url1, url3, url6);
      return m ? m : none;
    });
    return r !== none ? r : null;
  }
  function dispatchByString(rule, urlObj) {
    const schemeRegex = /\*|https?|file|ftp|chrome-extension/;
    const hostRegex = /\*|(\*\.)?([^/*]+)/;
    const pathRegex = /\/.*/;
    const tmp = `^(${schemeRegex.source})://(${hostRegex.source})?(${pathRegex.source})$`;
    const up = new RegExp(tmp);
    const matched = rule.match(up);
    if (!matched) return null;
    const [, scheme, host, wc, sd, path] = matched;
    if (
      (scheme === "*" && !/https?/.test(urlObj.scheme)) ||
      scheme !== urlObj.scheme
    )
      return null;
    if (scheme !== "file" && host !== "*") {
      if (wc) {
        const idx = urlObj.host.indexOf(sd);
        if (idx < 0 || idx + sd.length !== urlObj.host.length) return null;
      } else if (host !== urlObj.host) return null;
    }
    const pathRegexFinal = new RegExp(
      `^${path.replace(/[*.[\]?+#]/g, (c) => (c === "*" ? ".*" : "\\" + c))}$`,
    );
    if (!pathRegexFinal.test(urlObj.path)) return null;
    return urlObj;
  }
  function dispatchByFunction(rule, url1, url3, url6) {
    return rule(url1, url3, url6);
  }
  function dispatch(rule, url1, url3, url6) {
    if (Array.isArray(rule)) return dispatchByArray(rule, url1, url3, url6);
    if (typeof rule === "function")
      return dispatchByFunction(rule, url1, url3, url6);
    if (rule instanceof RegExp) return dispatchByRegExp(rule, url1);
    if (isString(rule)) return dispatchByString(rule, url3);
    return dispatchByObject(rule, url6);
  }
  function findHandler() {
    const url1 = window.location.toString();
    const url3 = {
      scheme: window.location.protocol.slice(0, -1),
      host: window.location.host,
      path:
        window.location.pathname + window.location.search + window.location.hash,
    };
    const url6 = {
      scheme: window.location.protocol,
      host: window.location.hostname,
      port: window.location.port,
      path: window.location.pathname,
      query: window.location.search,
      hash: window.location.hash,
    };
    const [i, pattern, matched] = find(patterns, (pattern) => {
      const m = dispatch(pattern.rule, url1, url3, url6);
      return m ? m : none;
    });
    if (i === none) return null;
    if (!pattern.start && !pattern.ready) return null;
    return {
      start: pattern.start ? partial(pattern.start, matched) : nop,
      ready: pattern.ready ? partial(pattern.ready, matched) : nop,
    };
  }
  const rawUSW = getUnsafeWindow();
  const usw = getUnsafeWindowProxy();
  const GMAPI = getGreaseMonkeyAPI();
  const VERSION = getGMInfo().script?.version ?? "";
  function getUnsafeWindow() {
    let w = null;
    try {
      w = unsafeWindow;
    } catch {
      try {
        w = (0, eval)("this").global;
      } catch {
      }
    }
    return w ? w : (0, eval)("this").window;
  }
  function getGreaseMonkeyAPI() {
    if (rawUSW.global) {
      return null;
    }
    return {
      openInTab: GM?.openInTab ?? GM_openInTab,
      getValue: GM?.getValue ?? promisify(GM_getValue),
      setValue: GM?.setValue ?? promisify(GM_setValue),
      deleteValue: GM?.deleteValue ?? promisify(GM_deleteValue),
      xmlHttpRequest: GM?.xmlHttpRequest ?? GM_xmlhttpRequest,
      registerMenuCommand: GM?.registerMenuCommand ?? GM_registerMenuCommand,
    };
  }
  function promisify(fn) {
    return (...args) => Promise.resolve(fn(...args));
  }
  function getGMInfo() {
    return GM?.info ?? GM_info ?? {};
  }
  function needStructuredClone() {
    const isFirefox = typeof mozInnerScreenX === "number";
    if (!isFirefox) {
      return false;
    }
    const { scriptHandler } = getGMInfo();
    const excludedHandlers = new Set(["Tampermonkey", "Violentmonkey"]);
    return !excludedHandlers.has(scriptHandler);
  }
  const MAGIC_KEY = "__adsbypasser_reverse_proxy__";
  function getUnsafeWindowProxy() {
    if (!needStructuredClone()) {
      return rawUSW;
    }
    const decorator = {
      set(target, key, value) {
        if (key === MAGIC_KEY) {
          return false;
        } else {
          target[key] = clone(value);
        }
        return true;
      },
      get(target, key) {
        if (key === MAGIC_KEY) {
          return target;
        }
        const value = target[key];
        const type = typeof value;
        if (value === null || (type !== "function" && type !== "object")) {
          return value;
        }
        return new Proxy(value, decorator);
      },
      apply(target, self, args) {
        args = Array.prototype.slice.call(args);
        if (target === unsafeWindow.Object.defineProperty) {
          args[0] = args[0][MAGIC_KEY];
        }
        if (target === unsafeWindow.Function.apply) {
          self = self[MAGIC_KEY];
          args[1] = Array.prototype.slice.call(args[1]);
        }
        if (target === unsafeWindow.document.querySelector) {
          self = self[MAGIC_KEY];
        }
        if (target === unsafeWindow.document.write) {
          self = self[MAGIC_KEY];
        }
        const usargs = clone(args);
        return target.apply(self, usargs);
      },
      construct(target, args) {
        args = Array.prototype.slice.call(args);
        args.unshift(undefined);
        const usargs = clone(args);
        const bind = unsafeWindow.Function.prototype.bind;
        return new (bind.apply(target, usargs))();
      },
    };
    return new Proxy(unsafeWindow, decorator);
  }
  function clone(safe) {
    if (safe === null || !(safe instanceof Object)) {
      return safe;
    }
    if (safe === unsafeWindow) {
      return safe;
    }
    if (safe instanceof String) {
      return safe.toString();
    }
    if (safe instanceof Function) {
      return exportFunction(safe, unsafeWindow, {
        allowCrossOriginArguments: true,
      });
    }
    if (safe instanceof Array) {
      const unsafe = new unsafeWindow.Array();
      for (let i = 0; i < safe.length; i++) {
        unsafe.push(clone(safe[i]));
      }
      return unsafe;
    }
    const unsafe = new unsafeWindow.Object();
    forEach(safe, (v, k) => {
      unsafe[k] = clone(v);
    });
    return unsafe;
  }
  const MANIFEST = [
    {
      key: "version",
      default_: 0,
      verify: (v) => typeof v === "number" && v >= 0,
      normalize: parseInt,
    },
    {
      key: "align_center",
      default_: true,
      verify: (v) => typeof v === "boolean",
      normalize: Boolean,
      label: "Align Center",
      help: "Align image to the center if possible.",
      type: "checkbox",
    },
    {
      key: "change_background",
      default_: true,
      verify: (v) => typeof v === "boolean",
      normalize: Boolean,
      label: "Change Background",
      help: "Use Firefox-like image background.",
      type: "checkbox",
    },
    {
      key: "redirect_image",
      default_: true,
      verify: (v) => typeof v === "boolean",
      normalize: Boolean,
      label: "Redirect Image",
      help: "Directly open image link if possible.",
      type: "checkbox",
    },
    {
      key: "scale_image",
      default_: true,
      verify: (v) => typeof v === "boolean",
      normalize: Boolean,
      label: "Scale Image",
      help: "Scale image to fit window.",
      type: "checkbox",
    },
    {
      key: "log_level",
      default_: 1,
      verify: (v) => typeof v === "number" && v >= 0 && v <= 2,
      normalize: parseInt,
      label: "Log Level",
      help: "0: quiet, 1: default, 2: verbose",
      type: "select",
      menu: [
        [0, "0 (quiet)"],
        [1, "1 (default)"],
        [2, "2 (verbose)"],
      ],
    },
  ];
  async function sanityCheck() {
    const values = await Promise.all(MANIFEST.map((d) => GMAPI.getValue(d.key)));
    const updates = {};
    MANIFEST.forEach((d, i) => {
      let val = values[i];
      if (!d.verify(val)) val = d.default_;
      updates[d.key] = val;
    });
    await Promise.all(
      Object.entries(updates).map(([k, v]) => GMAPI.setValue(k, v)),
    );
  }
  function waitForPage() {
    return new Promise((resolve) => {
      if (document.readyState === "complete" && usw.render) return resolve();
      const check = () => {
        if (document.readyState === "complete" && usw.render) {
          clearInterval(interval);
          resolve();
        }
      };
      const interval = setInterval(check, 50);
      document.addEventListener("DOMContentLoaded", check);
    });
  }
  async function dumpConfig() {
    const values = await Promise.all(MANIFEST.map((d) => GMAPI.getValue(d.key)));
    const o = {};
    MANIFEST.forEach((d, i) => (o[d.key] = values[i]));
    return o;
  }
  async function loadConfig() {
    await sanityCheck();
    register({
      rule: { host: /^adsbypasser\.github\.io$/, path: /^\/configure\.html$/ },
      async ready() {
        await waitForPage();
        usw.commit = async (data) => {
          for (const [k, v] of Object.entries(data)) await GMAPI.setValue(k, v);
        };
        const config = await dumpConfig();
        const options = MANIFEST.reduce((acc, d) => {
          if (!d.type || d.key === "version") return acc;
          acc[d.key] = {
            type: d.type,
            value: config[d.key],
            label: d.label,
            help: d.help,
          };
          if (d.type === "select") acc[d.key].menu = d.menu;
          return acc;
        }, {});
        usw.render({ version: config.version, options });
      },
    });
  }
  function log(method, args) {
    args = Array.prototype.slice.call(args);
    if (isString(args[0])) {
      args[0] = "AdsBypasser: " + args[0];
    } else {
      args.unshift("AdsBypasser:");
    }
    const fn = console[method];
    if (typeof fn === "function") {
      fn.apply(console, args);
    }
  }
  function debug() {
    log("debug", arguments);
  }
  function info() {
    log("info", arguments);
  }
  function warn() {
    log("warn", arguments);
  }
  class AjaxError extends AdsBypasserError {
    constructor(method, url, data, headers, status, response) {
      super(`${method} ${url} got ${status}`);
      this._method = method;
      this._url = url;
      this._data = data;
      this._headers = headers;
      this._status = status;
      this._response = response;
    }
    get name() {
      return "AjaxError";
    }
    get method() {
      return this._method;
    }
    get url() {
      return this._url;
    }
    get data() {
      return this._data;
    }
    get headers() {
      return this._headers;
    }
    get status() {
      return this._status;
    }
    get response() {
      return this._response;
    }
  }
  function* flattenObject(object) {
    if (!object) return;
    for (const [k, v] of Object.entries(object)) {
      if (Array.isArray(v)) {
        for (const v_ of v) yield [[k, ""], v_];
      } else if (typeof v === "object") {
        for (const [k_, v_] of flattenObject(v)) yield [[k, ...k_], v_];
      } else {
        yield [[k], v];
      }
    }
  }
  function flattenKey(keyList) {
    const [head, ...rest] = keyList;
    return `${head}${rest.map((_) => `[${_}]`)}`;
  }
  function deepJoin(prefix, object) {
    const keys = Object.getOwnPropertyNames(object);
    const mapped = map(keys, (k) => {
      const v = object[k];
      const key = `${prefix}[${k}]`;
      if (typeof v === "object") return deepJoin(key, v);
      return [key, v].map(encodeURIComponent).join("=");
    });
    return mapped.join("&");
  }
  function toQuery(data) {
    const type = typeof data;
    if (data === null || (type !== "string" && type !== "object")) return "";
    if (type === "string") return data;
    if (data instanceof String) return data.toString();
    const keys = Object.getOwnPropertyNames(data);
    return map(keys, (k) => {
      const v = data[k];
      if (typeof v === "object") return deepJoin(k, v);
      return [k, v].map(encodeURIComponent).join("=");
    }).join("&");
  }
  function toForm(data) {
    const type = typeof data;
    if (data === null || (type !== "string" && type !== "object")) return "";
    if (type === "string") return data;
    if (data instanceof String) return data.toString();
    const form = new FormData();
    for (const [k, v] of flattenObject(data)) {
      form.append(flattenKey(k), v);
    }
    return form;
  }
  function ajax(method, url, data, headers) {
    debug("ajax", method, url, data, headers);
    const l = document.createElement("a");
    l.href = url;
    const reqHost = l.hostname;
    const overrideHeaders = {
      Host: reqHost || window.location.host,
      Origin: window.location.origin,
      Referer: window.location.href,
      "X-Requested-With": "XMLHttpRequest",
    };
    forEach(overrideHeaders, (v, k) => {
      if (headers[k] === none) {
        delete headers[k];
      } else {
        headers[k] = v;
      }
    });
    if (data) {
      if (headers["Content-Type"]?.indexOf("json") >= 0) {
        data = JSON.stringify(data);
      } else if (headers["Content-Type"]?.indexOf("multipart") >= 0) {
        data = toForm(data);
      } else {
        data = toQuery(data);
      }
      headers["Content-Length"] = data.length;
    }
    return new Promise((resolve, reject) => {
      GMAPI.xmlHttpRequest({
        method,
        url,
        data,
        headers,
        onload(response) {
          response =
            typeof response.responseText !== "undefined" ? response : this;
          if (response.status !== 200) {
            reject(
              new AjaxError(
                method,
                url,
                data,
                headers,
                response.status,
                response.responseText,
              ),
            );
          } else {
            resolve(response.responseText);
          }
        },
        onerror(response) {
          response =
            typeof response.responseText !== "undefined" ? response : this;
          reject(
            new AjaxError(
              method,
              url,
              data,
              headers,
              response.status,
              response.responseText,
            ),
          );
        },
      });
    });
  }
  function get$1(url, data, headers) {
    data = toQuery(data);
    data = data ? `?${data}` : "";
    headers = headers || {};
    return ajax("GET", url + data, "", headers);
  }
  function post$1(url, data, headers) {
    const h = {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    };
    if (headers)
      forEach(headers, (v, k) => {
        h[k] = v;
      });
    return ajax("POST", url, data, h);
  }
  function setCookie(key, value) {
    document.cookie = `${key}=${value};path=${location.pathname};`;
  }
  function getCookie(key) {
    const [, c] = find(document.cookie.split(";"), (v) => {
      const k = v.replace(/^\s*([a-zA-Z0-9-_]+)=.+$/, "$1");
      if (k !== key) return none;
    });
    if (c === none) return null;
    const match = c.replace(/^\s*[a-zA-Z0-9-_]+=([^;]+).?$/, "$1");
    return match || null;
  }
  function resetCookies() {
    const domainFull = location.hostname;
    const domainNoWWW = domainFull.replace(/^www\./, "");
    const domainRoot = domainFull.replace(/^(\w+\.)+?(\w+\.\w+)$/, "$2");
    const expired = new Date(1e3).toUTCString();
    forEach(document.cookie.split(";"), (v) => {
      const k = v.replace(/^\s*(\w+)=.+$/, "$1");
      document.cookie = `${k}=;expires=${expired};`;
      document.cookie = `${k}=;path=/;expires=${expired};`;
      const cookieString = (key, dom, exp) =>
        `${key}=;path=/;domain=${dom};expires=${exp};`;
      document.cookie = cookieString(k, domainFull, expired);
      document.cookie = cookieString(k, domainNoWWW, expired);
      document.cookie = cookieString(k, domainRoot, expired);
    });
  }
  class DomNotFoundError extends AdsBypasserError {
    constructor(selector) {
      super(`\`${selector}\` not found`);
    }
    get name() {
      return "DomNotFoundError";
    }
  }
  function querySelector(selector, context) {
    if (!context || !context.querySelector) context = document;
    const node = context.querySelector(selector);
    if (!node) throw new DomNotFoundError(selector);
    return node;
  }
  function querySelectorOrNull(selector, context) {
    try {
      return querySelector(selector, context);
    } catch {
      return null;
    }
  }
  function querySelectorAll(selector, context) {
    if (!context || !context.querySelectorAll) context = document;
    return context.querySelectorAll(selector);
  }
  function toDOM(rawHTML) {
    try {
      const parser = new DOMParser();
      return parser.parseFromString(rawHTML, "text/html");
    } catch {
      throw new AdsBypasserError("could not parse HTML to DOM");
    }
  }
  function remove(selector, context) {
    const nodes = querySelectorAll(selector, context);
    forEach(nodes, (el) => {
      debug("removed", el);
      el.remove();
    });
  }
  function block(selector, context = document) {
    let fn;
    if (isString(selector)) {
      fn = () => remove(selector, context);
    } else if (typeof selector === "function") {
      fn = (mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (selector(node)) node.parentNode.removeChild(node);
        });
      };
    } else {
      throw new TypeError("wrong selector");
    }
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => fn(mutation));
    });
    observer.observe(context, {
      childList: true,
      subtree: true,
    });
  }
  function searchFromScriptsByRegExp(pattern, context) {
    const scripts = querySelectorAll("script", context);
    const [, , m] = find(scripts, (s) => {
      const match = s.textContent.match(pattern);
      return match || none;
    });
    return m === none ? null : m;
  }
  function searchFromScriptsByString(pattern, context) {
    const scripts = querySelectorAll("script", context);
    const [, m] = find(scripts, (s) => {
      const idx = s.textContent.indexOf(pattern);
      return idx < 0 ? none : idx;
    });
    return m === none ? null : m.textContent;
  }
  function searchFromScripts(pattern, context) {
    if (pattern instanceof RegExp)
      return searchFromScriptsByRegExp(pattern, context);
    if (isString(pattern)) return searchFromScriptsByString(pattern, context);
    return null;
  }
  function prepare(element) {
    if (!document.body) {
      document.body = document.createElement("body");
    }
    document.body.appendChild(element);
    return wait(0);
  }
  async function get(url) {
    const a = document.createElement("a");
    a.href = url;
    let clicked = false;
    a.addEventListener(
      "click",
      (event) => {
        event.stopPropagation();
        clicked = true;
      },
      true,
    );
    await prepare(a);
    a.click();
    const tick = setInterval(() => {
      if (clicked) {
        info("already clicked");
        clearInterval(tick);
        return;
      }
      info("try again");
      a.click();
    }, 500);
  }
  async function post(path, params = {}) {
    const form = document.createElement("form");
    form.method = "post";
    form.action = path;
    forEach(params, (value, key) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });
    await prepare(form);
    form.submit();
  }
  async function openLink(to, options = {}) {
    if (!isString(to) || !to) {
      warn("false URL");
      return;
    }
    const withReferer =
      typeof options.referer === "undefined" ? true : options.referer;
    const postData = options.post;
    const from = window.location.toString();
    info(`${from} -> ${to}`);
    if (postData) {
      await post(to, postData);
      return;
    }
    if (withReferer) {
      await get(to);
      return;
    }
    window.top.location.replace(to);
  }
  function removeAllTimer() {
    let handle = window.setInterval(nop, 10);
    while (handle > 0) {
      window.clearInterval(handle--);
    }
    handle = window.setTimeout(nop, 10);
    while (handle > 0) {
      window.clearTimeout(handle--);
    }
  }
  function nuke(url) {
    try {
      usw.document.write("nuked by AdsBypasser, leading to ...<br/>");
    } catch (e) {
      warn("nuke failed", e);
    }
    const a = document.createElement("a");
    a.href = url;
    a.textContent = url;
    document.body.appendChild(a);
  }
  function generateRandomIP() {
    return [0, 0, 0, 0].map(() => Math.floor(Math.random() * 256)).join(".");
  }
  function evil(script) {
    return ((
      GM,
      GM_deleteValue,
      GM_getValue,
      GM_openInTab,
      GM_registerMenuCommand,
      GM_setValue,
      GM_xmlhttpRequest,
      unsafeWindow,
      window,
    ) => {
      return eval(script);
    })();
  }
  const RESOURCE_ROOT = `https://raw.githubusercontent.com/adsbypasser/adsbypasser/v${VERSION}/static`;
  const ALIGN_CENTER = `${RESOURCE_ROOT}/css/align_center.css`;
  const SCALE_IMAGE = `${RESOURCE_ROOT}/css/scale_image.css`;
  const BACKGROUND_IMAGE = `${RESOURCE_ROOT}/img/imagedoc-darknoise.png`;
  async function openImage(imgSrc, options = {}) {
    const replace = !!options.replace;
    const referer = !!options.referer;
    if (replace) {
      await replaceBody(imgSrc);
      return;
    }
    const redirectImage = await GMAPI.getValue("redirect_image");
    if (redirectImage) {
      await openLink(imgSrc, { referer });
    }
  }
  function enableScrolling() {
    const el =
      document.compatMode === "CSS1Compat"
        ? document.documentElement
        : document.body;
    el.style.overflow = "";
  }
  function toggleShrinking() {
    this.classList.toggle("adsbypasser-shrinked");
  }
  function checkScaling() {
    const nw = this.naturalWidth;
    const nh = this.naturalHeight;
    const cw = document.documentElement.clientWidth;
    const ch = document.documentElement.clientHeight;
    if (
      (nw > cw || nh > ch) &&
      !this.classList.contains("adsbypasser-resizable")
    ) {
      this.classList.add("adsbypasser-resizable", "adsbypasser-shrinked");
      this.addEventListener("click", toggleShrinking);
    } else if (
      nw <= cw &&
      nh <= ch &&
      this.classList.contains("adsbypasser-resizable")
    ) {
      this.removeEventListener("click", toggleShrinking);
      this.classList.remove("adsbypasser-shrinked", "adsbypasser-resizable");
    }
  }
  function scaleImage(img) {
    appendStyleURL(SCALE_IMAGE);
    if (img.naturalWidth && img.naturalHeight) {
      checkScaling.call(img);
    } else {
      img.addEventListener("load", checkScaling);
    }
    let h = 0;
    window.addEventListener("resize", () => {
      clearTimeout(h);
      h = setTimeout(checkScaling.bind(img), 100);
    });
  }
  function changeBackground() {
    document.body.style.backgroundColor = "#222222";
    document.body.style.backgroundImage = `url('${BACKGROUND_IMAGE}')`;
  }
  function alignCenter() {
    appendStyleURL(ALIGN_CENTER);
  }
  function injectStyle(wrapper, img) {
    remove("style, link[rel=stylesheet]");
    wrapper.id = "adsbypasser-wrapper";
    img.id = "adsbypasser-image";
  }
  function appendStyleURL(url) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;
    document.head.appendChild(link);
  }
  async function replaceBody(imgSrc) {
    const redirectImage = await GMAPI.getValue("redirect_image");
    if (!redirectImage || !imgSrc) {
      if (!imgSrc) warn("false url");
      return;
    }
    info(`replacing body with \`${imgSrc}\` ...`);
    removeAllTimer();
    enableScrolling();
    document.body = document.createElement("body");
    const wrapper = document.createElement("div");
    document.body.appendChild(wrapper);
    const img = document.createElement("img");
    img.src = imgSrc;
    wrapper.appendChild(img);
    const ac = await GMAPI.getValue("align_center");
    const si = await GMAPI.getValue("scale_image");
    if (ac || si) {
      injectStyle(wrapper, img);
    }
    if (ac) {
      alignCenter();
    }
    const cb = await GMAPI.getValue("change_background");
    if (cb) {
      changeBackground();
    }
    if (si) {
      scaleImage(img);
    }
  }
  const _ = {
    AdsBypasserError,
    evil,
    find,
    forEach,
    generateRandomIP,
    info,
    none,
    partial,
    register,
    tryEvery,
    wait,
    warn,
  };
  function $(selector, context) {
    return querySelector(selector, context);
  }
  $.$ = querySelectorOrNull;
  $.$$ = querySelectorAll;
  $.block = block;
  $.get = get$1;
  $.getCookie = getCookie;
  $.nuke = nuke;
  $.openImage = openImage;
  $.openLink = openLink;
  $.post = post$1;
  $.remove = remove;
  $.removeAllTimer = removeAllTimer;
  $.resetCookies = resetCookies;
  $.searchFromScripts = searchFromScripts;
  $.setCookie = setCookie;
  $.toDOM = toDOM;
  $.window = usw;
  _.register({
    rule: {
      host: /^ak\.sv$/,
    },
    async ready() {
      await _.wait(1000);
      const any = $("html");
      any.click();
      await _.wait(6000);
      const a = $('a[class="download_button"]');
      await $.openLink(a);
    },
  });
  _.register({
    rule: {
      host: /^(www\.)?apunkasoftware\.net$/,
    },
    async ready() {
      const a = $("div#proceed-now > a#dlink");
      await $.openLink(a.href);
    },
  });
  _.register({
    rule: {
      host: /^thefileslocker\.net$/,
    },
    async ready() {
      const button = $("#downloadbtn");
      button.click();
    },
  });
  _.register({
    rule: {
      host: [/^(www\.)?indishare\.org$/, /^uploadrar\.com$/],
    },
    async ready() {
      const btn = $("button#downloadbtn.downloadbtn");
      btn.removeAttribute("disabled");
      btn.click();
    },
  });
  _.register({
    rule: {
      host: /^infidrive\.net$/,
    },
    async ready() {
      await _.wait(40000);
      const b = $("button.inline-flex:nth-child(2)");
      b.click();
    },
  });
  _.register({
    rule: {
      host: /^katfile\.cloud$/,
    },
    async ready() {
      const a = $('a[id="dlink"]');
      await $.openLink(a.href);
    },
  });
  _.register({
    rule: {
      host: /^(www\.)?keeplinks\.org$/,
    },
    async ready() {
      const button = $('[id="btnproceedsubmit"]');
      button.click();
    },
  });
  _.register({
    rule: {
      host: /^(www\.)?mirrored\.to$/,
      path: /^\/files\//,
    },
    async ready() {
      const a = $(".secondary");
      a.click();
    },
  });
  _.register({
    rule: {
      host: /^multiup\.io$/,
    },
    async ready() {
      const b = $("#download-button");
      b.click();
    },
  });
  _.register({
    rule: {
      host: /^sfile\.mobi$/,
    },
    async ready() {
      await _.wait(8000);
      const btn = $("#download");
      btn.click();
    },
  });
  _.register({
    rule: {
      host: /^uploadhaven\.com$/,
      path: /^\/download\//,
    },
    async ready() {
      await _.wait(18000);
      const f = $("#submitFree");
      f.click();
    },
  });
  _.register({
    rule: {
      host: /^usersdrive\.com$/,
    },
    async ready() {
      const a = $(".btn-download");
      await $.openLink(a.href);
    },
  });
  _.register({
    rule: {
      host: /^1ink\.cc$/,
    },
    async ready() {
      const a = $("#countingbtn");
      await $.openLink(a.href);
    },
  });
  _.register({
    rule: {
      host: /^1link\.club$/,
    },
    async ready() {
      const a = $("#download.btn");
      await $.openLink(a.href);
    },
  });
  _.register({
    rule: {
      host: /^a2zapk\.io$/,
    },
    async ready() {
      const a = $("#dlbtn li a");
      await $.openLink(a.href);
    },
  });
  _.register({
    rule: {
      host: /^adfoc\.us$/,
    },
    async ready() {
      const a = $(".skip");
      await $.openLink(a.href);
    },
  });
  _.register({
    rule: {
      host: /^adshnk\.com$/,
    },
    async ready() {
      await _.wait(16000);
      const b = $(
        'button[class="ui right labeled icon button primary huge fluid"]',
      );
      b.click();
      await _.wait(18000);
      const a = $('a[id="final_redirect"]');
      await $.openLink(a.href);
    },
  });
  _.register({
    rule: {
      host: /^www\.adz7short\.space$/,
    },
    async ready() {
      const b = $("#continue");
      await _.wait(10000);
      b.click();
    },
  });
  _.register({
    rule: {
      host: /^anchoreth\.com$/,
      query: /v=([^&]+)/,
    },
    async start(m) {
      await $.openLink(atob(m.query[1]));
    },
  });
  _.register({
    rule: {
      host: /^bcvc\.ink$/,
    },
    async ready() {
      await _.wait(5000);
      const b = $("#getLink");
      b.click();
    },
  });
  _.register({
    rule: [
      {
        host: /^(www\.)?([a-zA-Z0-9]+\.)?binbox\.io$/,
        path: /\/o\/([a-zA-Z0-9]+)/,
      },
    ],
    async start(m) {
      const direct_link = window.atob(m.path[1]);
      await $.openLink(direct_link);
    },
  });
  _.register({
    rule: {
      host: /^blogmado\.com/,
    },
    async ready() {
      await _.wait(3000);
      const b = $(".btn");
      b.click();
    },
  });
  _.register({
    rule: {
      host: /^boost\.ink$/,
    },
    async start() {
      const b = $("body").getAttribute("result");
      if (b) {
        await $.openLink(atob(b));
      } else {
        return;
      }
    },
  });
  _.register({
    rule: {
      host: /^cpmlink\.net$/,
    },
    async ready() {
      const a = $("#btn-main");
      await $.openLink(a.href);
    },
  });
  _.register({
    rule: {
      host: /^cutpaid\.com$/,
    },
    async ready() {
      const a = $(".btn-lg.get-link");
      await _.wait(9000);
      await $.openLink(a.href);
    },
  });
  _.register({
    rule: {
      host: /^earnlink\.io$/,
    },
    async ready() {
      const directUrl = $.searchFromScripts(/"([^"]+)"\)\.html\("Continue"\)/);
      await $.openLink(directUrl[1]);
    },
  });
  _.register({
    rule: {
      host: /^forex-trnd\.com$/,
    },
    async ready() {
      await _.wait(10000);
      const a = $(".get-link");
      a.click();
    },
  });
  _.register({
    rule: {
      host: [/^exe-links\.com$/, /^exeo\.app$/],
    },
    async ready() {
      const a = $(".link-button.button");
      a.click();
      await _.wait(2000);
      const b = $(".link-button");
      b.click();
      await _.wait(6000);
      const c = $(".link-button.get-link");
      c.click();
    },
  });
  _.register({
    rule: {
      host: /^fc-lc\.(com|xyz)$/,
    },
    async ready() {
      await _.wait(2000);
      const b = $(".btn-primary.btn-captcha.mb-4");
      b.click();
    },
  });
  _.register({
    rule: {
      host: /^loaninsurehub\.com$/,
    },
    async ready() {
      const b = $("#glink");
      if (b) {
        b.click();
      }
      await _.wait(12000);
      $.remove("#overlay");
      const a = $("#surl");
      if (a) {
        a.click();
      }
    },
  });
  _.register({
    rule: {
      host: /^fir3\.net$/,
    },
    async ready() {
      await _.wait(12000);
      const b = $(".btn.btn-success.btn-lg.get-link");
      b.click();
    },
  });
  _.register({
    rule: {
      host: /^get-click2\.blogspot\.com$/,
    },
    async ready() {
      const clbt = $("button#gotolink");
      clbt.removeAttribute("disabled");
      await _.wait(1);
      clbt.click();
    },
  });
  _.register({
    rule: {
      host: /^getthot\.com$/,
    },
    async ready() {
      await _.wait(12000);
      const a = $(".skip-btn");
      await $.openLink(a.href);
    },
  });
  _.register({
    rule: {
      host: /^gplinks\.co$/,
    },
    async ready() {
      await _.wait(8000);
      const d = $(".get-link");
      d.click();
    },
  });
  _.register({
    rule: {
      host: /^hen-tay\.net$/,
      path: /^\/go\//,
    },
    async ready() {
      const h = $("#download_url div a");
      await $.openLink(h.href);
    },
  });
  _.register({
    rule: {
      host: /^icutlink\.com$/,
    },
    async ready() {
      await _.wait(10000);
      const a = $(".btn-success.btn-lg.get-link");
      await $.openLink(a);
    },
  });
  _.register({
    rule: {
      host: /^zegtrends\.com$/,
    },
    async ready() {
      await _.wait(12000);
      const b = $("div > button.bsub");
      b.click();
    },
  });
  _.register({
    rule: {
      host: /^imagetwist\.netlify\.app$/,
    },
    async ready() {
      const a = $("center h2 p a, .btn-dark");
      await $.openLink(a.href);
    },
  });
  _.register({
    rule: {
      host: /^www\.javlibrary\.com$/,
      query: /url=([^&]+)/,
    },
    async start(m) {
      await $.openLink(decodeURIComponent(m.query[1]));
    },
  });
  _.register({
    rule: {
      host: /^kimochi\.info$/,
      path: /^\/inter$/,
    },
    async ready() {
      const ma = $("a#next");
      await $.openLink(ma.href);
    },
  });
  _.register({
    rule: {
      host: /^(www\.)?kingofshrink\.com$/,
    },
    async ready() {
      const l = $("#textresult > a");
      await $.openLink(l.href);
    },
  });
  _.register({
    rule: {
      host: /^linegee\.net$/,
    },
    async ready() {
      await _.wait(3000);
      const b = $(".btn-xs");
      b.click();
    },
  });
  _.register({
    rule: {
      host: /^link\.turkdown\.com$/,
    },
    async ready() {
      await _.wait(5000);
      const a = $(".btn-success.btn-lg.get-link");
      await $.openLink(a.href);
    },
  });
  (function () {
    _.register({
      rule: {
        host: [
          /^adsafelink\.com$/,
          /^dz4link\.com$/,
          /^tmearn\.net$/,
          /^payskip\.org$/,
          /^clik\.pw$/,
          /^aylink\.co$/,
          /^(clk|oko)\.sh$/,
          /^cpmlink\.pro$/,
          /^gitlink\.pro$/,
          /^mitly\.us$/,
          /^oke\.io$/,
          /^pahe\.plus$/,
          /^thotpacks\.xyz$/,
        ],
      },
      async ready() {
        const handler = new RecaptchaHandler();
        await handler.call();
      },
    });
    class AbstractHandler {
      constructor() {
        this._overlaySelector = [
          '[class$="Overlay"]',
          "#__random_class_name__",
          "#headlineatas",
          "#myModal",
          ".opacity_wrapper",
          "#overlay",
        ].join(", ");
        this._formSelector = [
          "#go-link",
          ".go-link",
          "#originalLink.get-link",
          'form[action="/links/go"]',
        ].join(", ");
      }
      removeOverlay() {
        $.remove(this._overlaySelector);
        $.block(this._overlaySelector, document.body);
        setInterval(() => {
          document.body.style.overflow = "initial";
        }, 500);
      }
      removeFrame() {
        $.remove("iframe");
      }
      async call() {
        const ok = await this.prepare();
        if (!ok) {
          return;
        }
        const mw = await this.getMiddleware();
        if (!mw) {
          this.withoutMiddleware();
          return;
        }
        const url = await this.getURL(mw);
        await $.openLink(url);
      }
    }
    class RecaptchaHandler extends AbstractHandler {
      async prepare() {
        this.removeOverlay();
        const f = $.$("#captchaShortlink, div.g-recaptcha");
        if (!f) {
          return true;
        }
        _.info("recaptcha detected, stop");
        _.info("trying to listen submit button");
        const b = $.$("#invisibleCaptchaShortlink");
        if (!b) {
          return false;
        }
      }
      async submitListen(b) {
        const o = new MutationObserver(() => {
          if (!b.disabled) {
            b.click();
          }
        });
        o.observe(b, {
          attributes: true,
        });
      }
      async getMiddleware() {
        return await getJQueryForm(this._formSelector);
      }
      withoutMiddleware() {
        const f = $("#link-view");
        f.submit();
      }
      async getURL(jForm) {
        while (true) {
          await _.wait(1000);
          try {
            const url = await getURLFromJQueryForm(jForm);
            if (url) {
              return url;
            }
          } catch (e) {
            _.warn(e);
          }
        }
      }
    }
    async function getJQueryForm(selector) {
      let jQuery = $.window.$;
      while (!jQuery) {
        await _.wait(50);
        jQuery = $.window.$;
      }
      const f = jQuery(selector);
      if (f.length > 0) {
        return f;
      }
      return null;
    }
    function getURLFromJQueryForm(jForm) {
      return new Promise((resolve, reject) => {
        if (jForm.is("a") && jForm.attr("href")) {
          resolve(jForm.attr("href"));
        }
        const jQuery = $.window.$;
        jQuery.ajax({
          dataType: "json",
          type: "POST",
          url: jForm.attr("action"),
          data: jForm.serialize(),
          success: (result) => {
            if (result.url) {
              resolve(result.url);
            } else {
              reject(new _.AdsBypasserError(result.message));
            }
          },
          error: (xhr, status, error) => {
            _.warn(xhr, status, error);
            reject(new _.AdsBypasserError("request error"));
          },
        });
      });
    }
  })();
  _.register({
    rule: {
      host: /^linkpoi\.me$/,
    },
    async ready() {
      await _.wait(6000);
      const b = $(".btn.btn-primary.btn-block.redirect.get-link");
      b.click();
    },
  });
  _.register({
    rule: {
      host: /^linkshrink\.net$/,
      path: /^\/[a-zA-Z0-9]+$/,
    },
    async start() {
      $.window._impspcabe = 0;
    },
    async ready() {
      let l = $.searchFromScripts(/revC\("([^"]+)"\)/);
      l = atob(l[1]);
      await $.openLink("/" + l);
    },
  });
  _.register({
    rule: {
      host: /^lnk2\.cc$/,
      path: /^\/go\//,
    },
    async ready() {
      $.remove("iframe, .popupOverlay");
      await _.wait(18000);
      const b = $("#getLink");
      b.click();
    },
  });
  _.register({
    rule: {
      host: /^www\.lolinez\.com$/,
      query: /\?(.+)/,
    },
    async start(m) {
      await $.openLink(m.query[1]);
    },
  });
  _.register({
    rule: {
      host: /^mangalist\.org$/,
    },
    async ready() {
      await _.wait(1000);
      const b = $(".btn-primary.url.text-center");
      b.click();
    },
  });
  _.register({
    rule: {
      host: /^network-loop\.com$/,
      query: /u=([^&]+)/,
    },
    async start() {
      await _.wait(3000);
      const shadowHost = document.querySelector("#print_button");
      const shadowRoot = shadowHost.shadowRoot;
      const buttonInShadow = shadowRoot.querySelector("a#pb_2");
      await $.openLink(buttonInShadow.href);
    },
  });
  _.register({
    rule: {
      host: /^otomi-games\.com$/,
      path: /^\/go\//,
    },
    async ready() {
      const ma = $("#wpsafe-link a");
      await $.openLink(ma.href);
    },
  });
  _.register({
    rule: {
      host: /^(www\.)?ouo\.(io|press)$/,
      path: /(^\/\w+$|^\/go\/\w+$)/,
    },
    async ready() {
      $("form").submit();
    },
  });
  _.register({
    rule: {
      host: /^preview\.rlu\.ru$/,
    },
    async ready() {
      const a = $("#content > .long_url > a");
      await $.openLink(a.href);
    },
  });
  _.register({
    rule: {
      host: /^www\.ryuugames\.com$/,
      query: /^\?eroge=/,
    },
    async ready() {
      const ma = $("#wpsafe-link a");
      await $.openLink(ma.href);
    },
  });
  _.register({
    rule: {
      host: /^(short|srt)\.am$/,
    },
    async ready() {
      await _.wait(6000);
      const button = $(".skipp");
      button.click();
    },
  });
  _.register({
    rule: {
      host: [/^goo\.st$/, /^shortmoz\.link$/, /^swzz\.xyz$/],
    },
    async ready() {
      const button = $(".btn-primary");
      button.click();
    },
  });
  _.register({
    rule: {
      host: /^(www\.)?similarsites\.com$/,
      path: /^\/goto\/([^?]+)/,
    },
    async start(m) {
      let l = m.path[1];
      if (!/^https?:\/\//.test(l)) {
        l = "http://" + l;
      }
      await $.openLink(l);
    },
  });
  _.register({
    rule: {
      host: /^www\.spaste\.com$/,
      path: /^\/site\//,
    },
    async ready() {
      await _.wait(15000);
      $("#template-contactform-submit").click();
    },
  });
  _.register({
    rule: {
      host: /^stfly\.(me|xyz)$/,
    },
    async ready() {
      const b = $(".btn-captcha.m-2.form-send");
      b.click();
    },
  });
  _.register({
    rule: {
      host: /^techtrendmakers\.com$/,
    },
    async ready() {
      const b = $(".btn-captcha.m-2.form-send.step_btn");
      await _.wait(6000);
      b.click();
    },
  });
  _.register({
    rule: {
      host: /^(www\.)?supercheats\.com$/,
      path: /^\/interstitial\.html$/,
      query: /(?:\?|&)oldurl=([^&]+)(?:$|&)/,
    },
    async start(m) {
      await $.openLink(m.query[1]);
    },
  });
  _.register({
    rule: {
      host: /^techstudify\.com$/,
      path: /^\/elon.php/,
      query: /link=([^&]+)/,
    },
    async start(m) {
      await $.openLink("https://rplinks.in/" + m.query[1]);
    },
  });
  _.register({
    rule: {
      host: /^thinfi\.com$/,
    },
    async ready() {
      const a = $("div p a");
      await $.openLink(a.href);
    },
  });
  _.register({
    rule: {
      host: /^go\.tnshort\.net$/,
    },
    async ready() {
      await _.wait(3000);
      const a = $('a[class="btn btn-success btn-lg get-link"]');
      await $.openLink(a.href);
    },
  });
  _.register({
    rule: {
      host: /^tribuntekno\.com$/,
    },
    async ready() {
      const b = $.$("#lite-human-verif-button");
      if (b) {
        b.click();
      }
      const c = $.$("#lite-start-sora-button");
      if (c) {
        c.click();
      }
    },
  });
  _.register({
    rule: {
      host: /^tutwuri\.id$/,
    },
    async ready() {
      await _.wait(1000);
      const a = $("#btn-1");
      a.click();
      await _.wait(12000);
      const b = $("#btn-2");
      b.click();
      const c = $("#btn-3");
      c.click();
    },
  });
  _.register({
    rule: {
      host: /(^|\.)urlcash\.com$/,
    },
    async ready() {
      if ($.window && $.window.linkDestUrl) {
        await $.openLink($.window.linkDestUrl);
        return;
      }
      const matches = document.body.innerHTML.match(/linkDestUrl = '(.+)'/);
      if (matches) {
        await $.openLink(matches[1]);
        return;
      }
    },
  });
  _.register({
    rule: {
      host: /^urlgalleries\.net$/,
    },
    async ready() {
      await _.wait(1000);
      const b = $("#overlay.butstyle");
      b.click();
    },
  });
  _.register({
    rule: {
      host: /^bayimg\.com$/,
    },
    async ready() {
      const i = $("#mainImage");
      await $.openImage(i.src);
    },
  });
  _.register({
    rule: {
      host: /^beeimg\.com$/,
    },
    async ready() {
      const img = $("#beeimage");
      await $.openImage(img.src);
    },
  });
  _.register({
    rule: {
      host: /^www\.casimages\.com$/,
    },
    async ready() {
      const img = $("div.logo a img");
      await $.openImage(img.src);
    },
  });
  _.register({
    rule: {
      host: /^cubeupload\.com$/,
    },
    async ready() {
      const img = $("img.galleryBigImg");
      await $.openImage(img.src);
    },
  });
  _.register({
    rule: {
      host: /^(depic|dpic)\.me$/,
    },
    async ready() {
      const i = $("#pic");
      await $.openImage(i.src);
    },
  });
  _.register({
    rule: {
      host: [/^www\.directupload\.eu$/, /^www\.noelshack\.com$/],
    },
    async ready() {
      const i = $('meta[property="og:image"]');
      await $.openImage(i.content);
    },
  });
  _.register({
    rule: {
      host: /^fastpic\.org$/,
    },
    async ready() {
      const img = $("img.image.img-fluid");
      await $.openImage(img.src);
    },
  });
  _.register({
    rule: {
      host: /^www\.fotosik\.pl$/,
    },
    async ready() {
      const i = $(".simple-photo img");
      await $.openImage(i.src);
    },
  });
  _.register({
    rule: {
      host: /^www\.hostpic\.org$/,
    },
    async ready() {
      const i = $("#photo");
      await $.openImage(i.src);
    },
  });
  _.register({
    rule: {
      host: /^www\.imagebam\.com$/,
    },
    async ready() {
      let a = $.$("#continue > a");
      if (a) {
        a.click();
      }
      a = $(".main-image");
      await $.openImage(a.src);
    },
  });
  _.register({
    rule: {
      host: /^imageban\.ru$/,
    },
    async ready() {
      const i = $("#img_main");
      await $.openImage(i.src);
    },
  });
  _.register({
    rule: [
      {
        host: [/^www\.imagehost\.at$/, "pixxxar.com"],
        path: /^\/image\//,
      },
      {
        host: /^im\.ge$/,
        path: /^\/i\//,
      },
    ],
    async ready() {
      const i = $('meta[property="og:image"]');
      await $.openImage(i.content);
    },
  });
  _.register({
    rule: {
      host: /^www\.imagenetz\.de$/,
    },
    async ready() {
      const img = $(".img-rounded.img-responsive");
      await $.openImage(img.src);
    },
  });
  _.register({
    rule: {
      host: /^imageshack\.com$/,
      path: /^\/i\//,
    },
    async ready() {
      const i = $("#lp-image");
      await $.openImage(i.src);
    },
  });
  _.register({
    rule: {
      host: [
        /^croea\.com$/,
        /^fappic\.com$/,
        /^imagehaha\.com$/,
        /^imagenpic\.com$/,
        /^imageshimage\.com$/,
        /^imagetwist\.com$/,
        /^imagexport\.com$/,
        /^vipr\.im$/,
      ],
    },
    async ready() {
      const i = $("img.pic");
      await $.openImage(i.src);
    },
  });
  _.register({
    rule: {
      host: /^imageup\.ru$/,
    },
    async ready() {
      const i = $("#image");
      await $.openImage(i.src);
    },
  });
  _.register({
    rule: {
      host: [/^imageupper\.com$/, /^imgbox\.com$/],
    },
    async ready() {
      const i = $("#img");
      await $.openImage(i.src);
    },
  });
  _.register({
    rule: {
      host: /^www\.imagevenue\.com$/,
    },
    async ready() {
      const i = $("#main-image");
      await $.openImage(i.src);
    },
  });
  _.register({
    rule: {
      host: [
        /^cloudgallery\.net$/,
        /^imgair\.net$/,
        /^imgblaze\.net$/,
        /^imgfira\.cc$/,
        /^imgfrost\.net$/,
        /^img[a-z]{2,10}\.(sbs|shop)$/,
        /^pic[a-z]{2,10}\.(sbs|shop)$/,
        /^pix[a-z]{2,10}\.sbs$/,
      ],
    },
    async ready() {
      const matches = $.searchFromScripts(/imgbg\.src = "([^"]+)";/);
      await $.openImage(matches[1], { referer: true });
    },
  });
  _.register({
    rule: {
      host: [
        /^imgbaron\.com$/,
        /^imgsto\.com$/,
        /^pics4you\.org$/,
        /^silverpic\.net$/,
      ],
    },
    async ready() {
      const i = $.$(".main-content-image img");
      if (i) {
        await $.openImage(i.src);
        return;
      }
      const f = $("form");
      f.submit();
    },
  });
  _.register({
    rule: {
      host: [/^(imgbase|picforall)\.ru$/],
    },
    async ready() {
      let i = $("#pay_thumb_img img, #d1 table tbody tr td img");
      i = i.getAttribute("onclick");
      i = i.match(/mshow\('(.+)'\)/);
      i = i[1];
      await $.openImage(i);
    },
  });
  _.register({
    rule: {
      host: [/^ibb\.co$/, /^imgbb\.com$/],
    },
    async ready() {
      const img = $(".image-viewer-container img");
      await $.openImage(img.src);
    },
  });
  _.register({
    rule: {
      host: [
        /^14xpics\.space$/,
        /^www\.2i\.(cz|sk)$/,
        /^imgcloud\.pw$/,
        /^www\.imghit\.com$/,
        /^img\.javstore\.net$/,
        /^lookmyimg\.com$/,
        /^pilot007\.org$/,
        /^rintor\.space$/,
        /^shotcan\.com$/,
        /^(img\.)?trafficimage\.club$/,
      ],
      path: /^\/(image|i)\/.*/,
    },
    async ready() {
      const l = $('link[rel="image_src"]');
      await $.openImage(l.href);
    },
  });
  _.register({
    rule: {
      host: [
        /^(www\.)?(imgadult|imgtaxi|imgwallet)\.com$/,
        /^(www\.)?imgdrive\.net$/,
      ],
    },
    async ready() {
      let m = $('meta[property="og:image"]');
      m = m.content.replace("small", "big");
      await $.openImage(m);
    },
  });
  _.register({
    rule: {
      host: /^imgflip\.com$/,
    },
    async ready() {
      const i = $("#im");
      await $.openImage(i.src);
    },
  });
  _.register({
    rule: {
      host: /^imgtraffic\.com$/,
      path: /^\/a-1\/(.+)\.jpeg\.html/,
    },
    async start() {
      const path = window.location.href.replace("/a-", "/").replace(".html", "");
      await $.openImage(path);
    },
  });
  _.register({
    rule: {
      host: /^imgtraffic\.com$/,
      path: /^\/i-1\/(.+)\.jpeg\.html/,
    },
    async start() {
      const path = window.location.href.replace("/i-", "/").replace(".html", "");
      await $.openImage(path);
    },
  });
  _.register({
    rule: {
      host: /^imgtraffic\.com$/,
      path: /^\/n-1\/(.+)\.jpeg\.html/,
    },
    async start() {
      const path = window.location.href.replace("/n-", "/").replace(".html", "");
      await $.openImage(path);
    },
  });
  _.register({
    rule: {
      host: /^imgtraffic\.com$/,
      path: /^\/z-1\/(.+)\.jpeg\.html/,
    },
    async start() {
      const path = window.location.href.replace("/z-", "/").replace(".html", "");
      await $.openImage(path);
    },
  });
  _.register({
    rule: {
      host: /^imx\.to$/,
    },
    async ready() {
      let a = $.$("#continuebutton, .button");
      if (a) {
        a.click();
      }
      a = $(".centred");
      await $.openImage(a.src);
    },
  });
  _.register({
    rule: [
      "https://3minx.com/upload/en/*",
      "https://4fuk.me/upload/en/*",
      "https://555fap.com/upload/en/*",
      "https://ai18.pics/upload/en/*",
      "https://anime-jav.com/upload/en/*",
      "https://blackwidof.org/upload/en/*",
      "https://chinese-pics.com/upload/en/*",
      "https://cn-av.com/upload/en/*",
      "https://cnpics.org/upload/en/*",
      "https://cnxx.me/upload/en/*",
      "https://cosplay18.pics/upload/en/*",
      "https://fc2ppv.stream/upload/en/*",
      "https://fikfok.net/upload/en/*",
      "https://gofile.download/upload/en/*",
      "https://hentai-sub.com/upload/en/*",
      "https://hentai4f.com/upload/en/*",
      "https://hentaicovid.com/uploads/en/*",
      "https://hentaicovid.org/upload/en/*",
      "https://hentaipig.com/upload/en/*",
      "https://hentaixnx.com/upload/en/*",
      "https://idol69.net/upload/en/*",
      "https://javball.com/upload/en/*",
      "https://javring.com/upload/en/*",
      "https://javsunday.com/upload/en/*",
      "https://javtele.net/upload/en/*",
      "https://kin8-av.com/upload/en/*",
      "https://kin8-jav.com/upload/en/*",
      "https://kr-av.com/upload/en/*",
      "https://ovabee.com/upload/en/*",
      "https://pig69.com/upload/en/*",
      "https://porn-pig.com/upload/en/*",
      "https://porn4f.com/upload/en/*",
      "https://porn4f.org/upload/en/*",
      "https://s-porn.com/upload/en/*",
      "https://sweetie-fox.com/upload/en/*",
      "https://xcamcovid.com/upload/en/*",
      "https://xxpics.org/upload/en/*",
    ],
    async ready() {
      const m = $('meta[property="og:image"]');
      await $.openImage(m.content);
    },
  });
  _.register({
    rule: {
      host: /^image\.javbee\.vip$/,
      path: /^\/en\//,
    },
    async ready() {
      const i = $('meta[property="og:image"]');
      await $.openLink(i.content);
    },
  });
  _.register({
    rule: {
      host: /^image\.javbee\.vip$/,
      path: /^\/ib\//,
    },
    async ready() {
      const a = $("a");
      await $.openImage(a.href);
    },
  });
  _.register({
    rule: "https://javbee.vip/upload/en/*",
    async ready() {
      const m = $('meta[property="og:image"]');
      await $.openImage(m.content);
    },
  });
  _.register({
    rule: {
      host: /^keptarolo\.hu$/,
      path: /^(\/[^/]+\/[^/]+)$/,
    },
    async start(m) {
      await $.openImage("http://www.keptarolo.hu/kep" + m.path[1]);
    },
  });
  (function () {
    _.register({
      rule: {
        host: /^miragepics\.com$/,
        path: /^\/viewer\.php$/,
        query: /file=([^&]+)/,
      },
      start: helper,
    });
    async function helper(m) {
      await $.openImage("/images/" + m.query[1]);
    }
  })();
  _.register({
    rule: {
      host: /^www\.pic-upload\.de$/,
    },
    async ready() {
      const i = $(".preview_picture_2b");
      await $.openImage(i.src);
    },
  });
  _.register({
    rule: {
      host: /^picstate\.com$/,
      path: /^\/view\/full\/.*/,
    },
    async ready() {
      const i = $("#image_container a img");
      await $.openImage(i.src);
    },
  });
  _.register({
    rule: {
      host: /^(www\.)?pimpandhost\.com$/,
      path: /^\/image\/\d+/,
      query: /^\?size=original/,
    },
    async ready() {
      const img = $("#overflow-wrapper img.original");
      await $.openImage(img.src);
    },
  });
  _.register({
    rule: {
      host: /^(www\.)?pimpandhost\.com$/,
      path: /^\/image\/\d+/,
    },
    async start(m) {
      await $.openImage(m.path + "?size=original");
    },
  });
  _.register({
    rule: [
      {
        host: /^(www\.)?pixhost\.to$/,
        path: /^\/show\//,
      },
      {
        host: [
          /^3xplanet\.(com|net)$/,
          /^jav-load\.com$/,
          /^javtenshi\.com$/,
          /^uncenav\.com$/,
        ],
        path: /^\/viewimage\//,
      },
    ],
    async ready() {
      $.remove("iframe, #ad");
      let o = $.$("#all");
      if (o) {
        o.style.display = "";
      }
      o = $("#show_image, #image");
      await $.openImage(o.src);
    },
  });
  _.register({
    rule: {
      host: /^(www\.)?pixroute\.com$/,
    },
    async ready() {
      const o = $("#download_box img#imgpreview.pic");
      await $.openImage(o.src);
    },
  });
  _.register({
    rule: {
      host: [/^pixxxels\.cc$/, /^postimg\.cc$/, /^postlmg\.cc$/],
    },
    async ready() {
      const ele = $("#download");
      const img = ele.href.replace("?dl=1", "");
      await $.openImage(img);
    },
  });
  _.register({
    rule: {
      host: [/^prnt\.sc$/],
      path: /\.html$/,
    },
  });
  _.register({
    rule: {
      host: [/^prnt\.sc$/],
    },
    async ready() {
      const i = $("#screenshot-image");
      await $.openImage(i.src);
    },
  });
  _.register({
    rule: {
      host: /^www\.turboimagehost\.com$/,
      path: /^\/p\//,
    },
    async ready() {
      const i = $("#imageid");
      await $.openImage(i.src);
    },
  });
  _.register({
    rule: {
      host: [/^imgdawgknuttz\.com$/, /^xxxwebdlxxx\.(org|top)$/],
    },
    async ready() {
      const a = $(".centred, .centred_resized");
      await $.openImage(a.src);
    },
  });
  const isSafari =
    Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0;
  function disableWindowOpen() {
    try {
      usw.open = () => ({ closed: false });
    } catch {
      warn("cannot mock window.open");
    }
    usw.alert = nop;
    usw.confirm = nop;
  }
  function disableLeavePrompt(element) {
    if (!element) return;
    const seal = {
      set: () => info("blocked onbeforeunload"),
    };
    element.onbeforeunload = undefined;
    if (isSafari) {
      element.__defineSetter__("onbeforeunload", seal.set);
    } else {
      usw.Object.defineProperty(element, "onbeforeunload", {
        configurable: true,
        enumerable: false,
        get: undefined,
        set: seal.set,
      });
    }
    const originalAddEventListener = element.addEventListener;
    element.addEventListener = function (type) {
      if (type === "beforeunload") {
        info("blocked addEventListener onbeforeunload");
        return;
      }
      return originalAddEventListener.apply(this, arguments);
    };
  }
  function changeTitle() {
    document.title += " - AdsBypasser";
  }
  function waitDOM() {
    return new Promise((resolve) => {
      if (document.readyState !== "loading") {
        resolve();
        return;
      }
      document.addEventListener("DOMContentLoaded", () => resolve());
    });
  }
  async function beforeDOMReady(handler) {
    const config = await dumpConfig();
    info(
      "working on\n%s \nwith\n%s",
      window.location.toString(),
      JSON.stringify(config),
    );
    disableLeavePrompt(usw);
    disableWindowOpen();
    await handler.start();
  }
  async function afterDOMReady(handler) {
    disableLeavePrompt(usw.document.body);
    changeTitle();
    await handler.ready();
  }
  async function main() {
    if (rawUSW.top !== rawUSW.self) return; 
    GMAPI.registerMenuCommand("AdsBypasser - Configure", () => {
      GMAPI.openInTab("https://adsbypasser.github.io/configure.html");
    });
    await loadConfig();
    const handler = findHandler();
    if (handler) {
      await beforeDOMReady(handler);
      await waitDOM();
      await afterDOMReady(handler);
    }
  }
  main().catch((_) => warn(_));
})();
