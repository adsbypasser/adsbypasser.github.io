// ==UserScript==
// @name           AdsBypasser
// @namespace      AdsBypasser
// @description    Bypass Ads
// @copyright      2012+, Wei-Cheng Pan (legnaleurc)
// @version        6.11.0
// @license        BSD
// @homepageURL    https://adsbypasser.github.io/
// @supportURL     https://github.com/adsbypasser/adsbypasser/issues
// @updateURL      https://adsbypasser.github.io/releases/adsbypasser.full.es7.meta.js
// @downloadURL    https://adsbypasser.github.io/releases/adsbypasser.full.es7.user.js
// @icon           https://raw.githubusercontent.com/adsbypasser/adsbypasser/v6.11.0/resources/img/logo.png
// @grant          GM_deleteValue
// @grant          GM_getResourceURL
// @grant          GM_getValue
// @grant          GM_openInTab
// @grant          GM_registerMenuCommand
// @grant          GM_setValue
// @grant          GM_xmlhttpRequest
// @grant          GM.deleteValue
// @grant          GM.getResourceUrl
// @grant          GM.getValue
// @grant          GM.openInTab
// @grant          GM.setValue
// @grant          GM.xmlHttpRequest
// @grant          unsafeWindow
// @resource       alignCenter https://raw.githubusercontent.com/adsbypasser/adsbypasser/v6.11.0/resources/css/align_center.css
// @resource       scaleImage https://raw.githubusercontent.com/adsbypasser/adsbypasser/v6.11.0/resources/css/scale_image.css
// @resource       bgImage https://raw.githubusercontent.com/adsbypasser/adsbypasser/v6.11.0/resources/img/imagedoc-darknoise.png
// @run-at         document-start
// @include        http://*
// @include        https://*
// @connect        *
// ==/UserScript==

 (function(modules) { 
 	var installedModules = {};
 	function __webpack_require__(moduleId) {
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
 		module.l = true;
 		return module.exports;
 	}
 	__webpack_require__.m = modules;
 	__webpack_require__.c = installedModules;
 	__webpack_require__.d = function(exports, name, getter) {
 		if(!__webpack_require__.o(exports, name)) {
 			Object.defineProperty(exports, name, {
 				configurable: false,
 				enumerable: true,
 				get: getter
 			});
 		}
 	};
 	__webpack_require__.r = function(exports) {
 		Object.defineProperty(exports, '__esModule', { value: true });
 	};
 	__webpack_require__.n = function(module) {
 		var getter = module && module.__esModule ?
 			function getDefault() { return module['default']; } :
 			function getModuleExports() { return module; };
 		__webpack_require__.d(getter, 'a', getter);
 		return getter;
 	};
 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
 	__webpack_require__.p = "";
 	return __webpack_require__(__webpack_require__.s = 0);
 })
 ([
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 var util_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 var util_dispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
 var util_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
 var util_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
 var util_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
 var _ADSBYPASSER_HANDLERS___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
const isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
function disableWindowOpen () {
  util_platform__WEBPACK_IMPORTED_MODULE_2__["usw"].open = function () {
    return {
      closed: false,
    };
  };
  util_platform__WEBPACK_IMPORTED_MODULE_2__["usw"].alert = util_core__WEBPACK_IMPORTED_MODULE_0__["nop"];
  util_platform__WEBPACK_IMPORTED_MODULE_2__["usw"].confirm = util_core__WEBPACK_IMPORTED_MODULE_0__["nop"];
}
function disableLeavePrompt (element) {
  if (!element) {
    return;
  }
  const seal = {
    set: function () {
      Object(util_logger__WEBPACK_IMPORTED_MODULE_4__["info"])('blocked onbeforeunload');
    },
  };
  element.onbeforeunload = undefined;
  if (isSafari) {
    element.__defineSetter__('onbeforeunload', seal.set);
  } else {
    util_platform__WEBPACK_IMPORTED_MODULE_2__["usw"].Object.defineProperty(element, 'onbeforeunload', {
      configurable: true,
      enumerable: false,
      get: undefined,
      set: seal.set,
    });
  }
  const oael = element.addEventListener;
  const nael = function (type) {
    if (type === 'beforeunload') {
      Object(util_logger__WEBPACK_IMPORTED_MODULE_4__["info"])('blocked addEventListener onbeforeunload');
      return;
    }
    return oael.apply(this, arguments);
  };
  element.addEventListener = nael;
}
function changeTitle () {
  document.title += ' - AdsBypasser';
}
async function beforeDOMReady (handler) {
  const config = await Object(util_config__WEBPACK_IMPORTED_MODULE_3__["dumpConfig"])();
  Object(util_logger__WEBPACK_IMPORTED_MODULE_4__["info"])('working on\n%s \nwith\n%s', window.location.toString(), JSON.stringify(config));
  disableLeavePrompt(util_platform__WEBPACK_IMPORTED_MODULE_2__["usw"]);
  disableWindowOpen();
  await handler.start();
}
async function afterDOMReady (handler) {
  disableLeavePrompt(util_platform__WEBPACK_IMPORTED_MODULE_2__["usw"].document.body);
  changeTitle();
  await handler.ready();
}
function waitDOM () {
  return new Promise((resolve) => {
    if (document.readyState !== 'loading') {
      resolve();
      return;
    }
    document.addEventListener('DOMContentLoaded', () => {
      resolve();
    });
  });
}
async function main () {
  if (util_platform__WEBPACK_IMPORTED_MODULE_2__["rawUSW"].top !== util_platform__WEBPACK_IMPORTED_MODULE_2__["rawUSW"].self) {
    return;
  }
  util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].registerMenuCommand('AdsBypasser - Configure', () => {
    util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].openInTab('https://adsbypasser.github.io/configure.html');
  });
  await Object(util_config__WEBPACK_IMPORTED_MODULE_3__["loadConfig"])();
  const handler = Object(util_dispatcher__WEBPACK_IMPORTED_MODULE_1__["findHandler"])();
  if (handler) {
    await beforeDOMReady(handler);
    await waitDOM();
    await afterDOMReady(handler);
    return;
  }
}
main().catch((e) => {
  Object(util_logger__WEBPACK_IMPORTED_MODULE_4__["warn"])(e);
});
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, "AdsBypasserError", function() { return AdsBypasserError; });
 __webpack_require__.d(__webpack_exports__, "every", function() { return every; });
 __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
 __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
 __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
 __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
 __webpack_require__.d(__webpack_exports__, "none", function() { return none; });
 __webpack_require__.d(__webpack_exports__, "nop", function() { return nop; });
 __webpack_require__.d(__webpack_exports__, "partial", function() { return partial; });
 __webpack_require__.d(__webpack_exports__, "tryEvery", function() { return tryEvery; });
 __webpack_require__.d(__webpack_exports__, "wait", function() { return wait; });
class AdsBypasserError extends Error {
  constructor (message) {
    super(message);
  }
  get name () {
    return 'AdsBypasserError';
  }
}
function forEach (collection, fn) {
  if (isArrayLike(collection)) {
    return Array.prototype.forEach.call(collection, fn);
  }
  return Object.keys(collection).forEach((k) => {
    return fn(collection[k], k, collection);
  });
}
function every (collection, fn) {
  if (isArrayLike(collection)) {
    return Array.prototype.every.call(collection, fn);
  }
  return Object.keys(collection).every((k) => {
    return fn(collection[k], k, collection);
  });
}
function map (collection, fn) {
  if (isArrayLike(collection)) {
    return Array.prototype.map.call(collection, fn);
  }
  const mapped = Object.assign({}, collection);
  Object.getOwnPropertyNames(mapped).forEach((k) => {
    mapped[k] = fn(collection[k], k, collection);
  });
  return mapped;
}
function find (collection, fn) {
  for (const [k, v] of enumerate(collection)) {
    const r = fn(v, k, collection);
    if (r !== none) {
      return [k, v, r];
    }
  }
  return [none, none, none];
}
function * enumerate (collection) {
  if (isArrayLike(collection)) {
    yield * Array.prototype.entries.call(collection);
    return;
  }
  const keys = Object.getOwnPropertyNames(collection);
  for (const k of keys) {
    yield [k, collection[k]];
  }
}
function isArrayLike (collection) {
  return Array.isArray(collection) || isNodeList(collection);
}
function isNodeList (collection) {
  return collection.constructor.name === 'NodeList';
}
function partial (fn, ...args) {
  if (typeof fn !== 'function') {
    throw new AdsBypasserError('must give a function');
  }
  return (...innerArgs) => {
    return fn(...args.concat(innerArgs));
  };
}
function isString (value) {
  return (typeof value === 'string') || (value instanceof String);
}
function nop () {
}
const none = nop;
function wait (msDelay) {
  return new Promise((resolve) => {
    setTimeout(resolve, msDelay);
  });
}
function tryEvery (msInterval, fn) {
  return new Promise((resolve) => {
    const handle = setInterval(function () {
      const result = fn();
      if (result !== none) {
        clearInterval(handle);
        resolve(result);
      }
    }, msInterval);
  });
}
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
 __webpack_require__.d(__webpack_exports__, "findHandler", function() { return findHandler; });
 var util_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
const patterns = [];
function register (pattern) {
  patterns.push(pattern);
}
function dispatchByObject (rule, url_6) {
  const matched = Object(util_core__WEBPACK_IMPORTED_MODULE_0__["map"])(rule, (pattern, part) => {
    if (pattern instanceof RegExp) {
      return url_6[part].match(pattern);
    }
    if (Array.isArray(pattern)) {
      const [, , r] = Object(util_core__WEBPACK_IMPORTED_MODULE_0__["find"])(pattern, (sp) => {
        const m = url_6[part].match(sp);
        return m || util_core__WEBPACK_IMPORTED_MODULE_0__["none"];
      });
      return r !== util_core__WEBPACK_IMPORTED_MODULE_0__["none"] ? r : null;
    }
    throw new util_core__WEBPACK_IMPORTED_MODULE_0__["AdsBypasserError"]('invalid rule');
  });
  const passed = Object(util_core__WEBPACK_IMPORTED_MODULE_0__["every"])(matched, (v) => {
    return !!v;
  });
  return passed ? matched : null;
}
function dispatchByRegExp (rule, url_1) {
  return url_1.match(rule);
}
function dispatchByArray (rules, url_1, url_3, url_6) {
  const [, , r] = Object(util_core__WEBPACK_IMPORTED_MODULE_0__["find"])(rules, (rule) => {
    const m = dispatch(rule, url_1, url_3, url_6);
    return m ? m : util_core__WEBPACK_IMPORTED_MODULE_0__["none"];
  });
  return r !== util_core__WEBPACK_IMPORTED_MODULE_0__["none"] ? r : null;
}
function dispatchByString (rule, url_3) {
  let scheme = /\*|https?|file|ftp|chrome-extension/;
  let host = /\*|(\*\.)?([^/*]+)/;
  let path = /\/.*/;
  let tmp = `^(${scheme.source})://(${host.source})?(${path.source})$`;
  let up = new RegExp(tmp);
  const matched = rule.match(up);
  if (!matched) {
    return null;
  }
  scheme = matched[1];
  host = matched[2];
  const wc = matched[3];
  const sd = matched[4];
  path = matched[5];
  if (scheme === '*' && !/https?/.test(url_3.scheme)) {
    return null;
  }
  if (scheme !== url_3.scheme) {
    return null;
  }
  if (scheme !== 'file' && host !== '*') {
    if (wc) {
      up = url_3.host.indexOf(sd);
      if (up < 0 || up + sd.length !== url_3.host.length) {
        return null;
      }
    } else if (host !== url_3.host) {
      return null;
    }
  }
  tmp = path.replace(/[*.[\]?+#]/g, (c) => {
    if (c === '*') {
      return '.*';
    }
    return '\\' + c;
  });
  path = new RegExp(`^${tmp}$`);
  if (!path.test(url_3.path)) {
    return null;
  }
  return url_3;
}
function dispatchByFunction (rule, url_1, url_3, url_6) {
  return rule(url_1, url_3, url_6);
}
function dispatch (rule, url_1, url_3, url_6) {
  if (Array.isArray(rule)) {
    return dispatchByArray(rule, url_1, url_3, url_6);
  }
  if (typeof rule === 'function') {
    return dispatchByFunction(rule, url_1, url_3, url_6);
  }
  if (rule instanceof RegExp) {
    return dispatchByRegExp(rule, url_1);
  }
  if (Object(util_core__WEBPACK_IMPORTED_MODULE_0__["isString"])(rule)) {
    return dispatchByString(rule, url_3);
  }
  return dispatchByObject(rule, url_6);
}
function findHandler () {
  const url_1 = window.location.toString();
  const url_3 = {
    scheme: window.location.protocol.slice(0, -1),
    host: window.location.host,
    path: window.location.pathname + window.location.search + window.location.hash,
  };
  const url_6 = {
    scheme: window.location.protocol,
    host: window.location.hostname,
    port: window.location.port,
    path: window.location.pathname,
    query: window.location.search,
    hash: window.location.hash,
  };
  const [i, pattern, matched] = Object(util_core__WEBPACK_IMPORTED_MODULE_0__["find"])(patterns, (pattern) => {
    const m = dispatch(pattern.rule, url_1, url_3, url_6);
    return m ? m : util_core__WEBPACK_IMPORTED_MODULE_0__["none"];
  });
  if (i === util_core__WEBPACK_IMPORTED_MODULE_0__["none"]) {
    return null;
  }
  if (!pattern.start && !pattern.ready) {
    return null;
  }
  return {
    start: pattern.start ? Object(util_core__WEBPACK_IMPORTED_MODULE_0__["partial"])(pattern.start, matched) : util_core__WEBPACK_IMPORTED_MODULE_0__["nop"],
    ready: pattern.ready ? Object(util_core__WEBPACK_IMPORTED_MODULE_0__["partial"])(pattern.ready, matched) : util_core__WEBPACK_IMPORTED_MODULE_0__["nop"],
  };
}
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, "rawUSW", function() { return rawUSW; });
 __webpack_require__.d(__webpack_exports__, "usw", function() { return usw; });
 __webpack_require__.d(__webpack_exports__, "GMAPI", function() { return GMAPI; });
 var util_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
const rawUSW = getUnsafeWindow();
const usw = getUnsafeWindowProxy();
const GMAPI = getGreaseMonkeyAPI();
function getUnsafeWindow () {
  let w = null;
  try {
    w = unsafeWindow;
  } catch (e) {
    try {
      w = (0, eval)('this').global;
    } catch (e) {
    }
  }
  return w ? w : (0, eval)('this').window;
}
function getGreaseMonkeyAPI () {
  if (rawUSW.global) {
    return null;
  }
  const gm = {};
  if (typeof GM_openInTab === 'function') {
    gm.openInTab = GM_openInTab;
  } else {
    gm.openInTab = GM.openInTab;
  }
  if (typeof GM_getValue === 'function') {
    gm.getValue = (name, default_) => {
      return Promise.resolve(GM_getValue(name, default_));
    };
  } else {
    gm.getValue = GM.getValue;
  }
  if (typeof GM_setValue === 'function') {
    gm.setValue = (name, value) => {
      return Promise.resolve(GM_setValue(name, value));
    };
  } else {
    gm.setValue = GM.setValue;
  }
  if (typeof GM_deleteValue === 'function') {
    gm.deleteValue = (name) => {
      return Promise.resolve(GM_deleteValue(name));
    };
  } else {
    gm.deleteValue = GM.deleteValue;
  }
  if (typeof GM_xmlhttpRequest === 'function') {
    gm.xmlHttpRequest = GM_xmlhttpRequest;
  } else {
    gm.xmlHttpRequest = GM.xmlHttpRequest;
  }
  if (typeof GM_registerMenuCommand === 'function') {
    gm.registerMenuCommand = GM_registerMenuCommand;
  } else {
    gm.registerMenuCommand = util_core__WEBPACK_IMPORTED_MODULE_0__["nop"];
  }
  if (typeof GM_getResourceURL === 'function') {
    gm.getResourceUrl = (resourceName) => {
      return Promise.resolve(GM_getResourceURL(resourceName));
    };
  } else if (typeof GM === 'object' && GM && GM.getResourceUrl) {
    gm.getResourceUrl = GM.getResourceUrl;
  }
  return gm;
}
const MAGIC_KEY = '__adsbypasser_reverse_proxy__';
function getUnsafeWindowProxy () {
  const isFirefox = typeof InstallTrigger !== 'undefined';
  const isWebExtension = typeof cloneInto === 'undefined' || typeof exportFunction === 'undefined';
  if (!isFirefox || isWebExtension) {
    return rawUSW;
  }
  const decorator = {
    set (target, key, value) {
      if (key === MAGIC_KEY) {
        return false;
      }
      if (target === unsafeWindow && key === 'open') {
        const d = Object.getOwnPropertyDescriptor(target, key);
        d.value = clone(function () {
          const rv = value();
          return cloneInto(rv, unsafeWindow);
        });
        Object.defineProperty(target, key, d);
      } else {
        target[key] = clone(value);
      }
      return true;
    },
    get (target, key) {
      if (key === MAGIC_KEY) {
        return target;
      }
      const value = target[key];
      const type = typeof value;
      if (value === null || (type !== 'function' && type !== 'object')) {
        return value;
      }
      return new Proxy(value, decorator);
    },
    apply (target, self, args) {
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
    construct (target, args) {
      args = Array.prototype.slice.call(args);
      args.unshift(undefined);
      const usargs = clone(args);
      const bind = unsafeWindow.Function.prototype.bind;
      return new (bind.apply(target, usargs));
    },
  };
  return new Proxy(unsafeWindow, decorator);
}
function clone (safe) {
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
    for (let i = 0; i < safe.length; ++i) {
      unsafe.push(clone(safe[i]));
    }
    return unsafe;
  }
  const unsafe = new unsafeWindow.Object();
  Object(util_core__WEBPACK_IMPORTED_MODULE_0__["forEach"])(safe, (v, k) => {
    unsafe[k] = clone(v);
  });
  return unsafe;
}
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, "dumpConfig", function() { return dumpConfig; });
 __webpack_require__.d(__webpack_exports__, "loadConfig", function() { return loadConfig; });
 var util_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 var util_dispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
 var util_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
const MANIFEST = [
  {
    key: 'version',
    default_: 0,
    verify (v) {
      return typeof v === 'number' && v >= 0;
    },
    normalize: toNumber,
  },
  {
    key: 'align_center',
    default_: true,
    verify: isBoolean,
    normalize: toBoolean,
  },
  {
    key: 'change_background',
    default_: true,
    verify: isBoolean,
    normalize: toBoolean,
  },
  {
    key: 'redirect_image',
    default_: true,
    verify: isBoolean,
    normalize: toBoolean,
  },
  {
    key: 'scale_image',
    default_: true,
    verify: isBoolean,
    normalize: toBoolean,
  },
  {
    key: 'log_level',
    default_: 1,
    verify (v) {
      return typeof v === 'number' && v >= 0 && v <= 2;
    },
    normalize: toNumber,
  },
];
const PATCHES = [
  async () => {
    const alignCenter = await util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].getValue('align_center');
    const changeBackground = await util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].getValue('change_background');
    const scaleImage = await util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].getValue('scale_image');
    const redirectImage = await util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].getValue('redirect_image');
    const ac = typeof alignCenter === 'boolean';
    if (typeof changeBackground !== 'boolean') {
      await util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].setValue('change_background', ac ? alignCenter : true);
    }
    if (typeof scaleImage !== 'boolean') {
      await util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].setValue('scale_image', ac ? alignCenter : true);
    }
    if (!ac) {
      await util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].setValue('align_center', true);
    }
    if (typeof redirectImage !== 'boolean') {
      await util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].setValue('redirect_image', true);
    }
  },
  async () => {
    const externalServerSupport = await util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].getValue('external_server_support');
    if (typeof externalServerSupport !== 'boolean') {
      await util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].setValue('external_server_support', false);
    }
  },
  async () => {
    const logLevel = await util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].getValue('log_level');
    if (typeof logLevel !== 'number') {
      await util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].setValue('log_level', 1);
    }
  },
  async () => {
    await util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].deleteValue('external_server_support');
  },
];
function isBoolean (v) {
  return typeof v === 'boolean';
}
function toBoolean (v) {
  return !!v;
}
function toNumber (v) {
  return parseInt(v, 10);
}
async function senityCheck () {
  let verifyResults = MANIFEST.map(async (descriptor) => {
    const rv = await util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].getValue(descriptor.key);
    return descriptor.verify(rv);
  });
  verifyResults = await Promise.all(verifyResults);
  const ok = Object(util_core__WEBPACK_IMPORTED_MODULE_0__["every"])(verifyResults, v => v);
  if (!ok) {
    await util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].setValue('version', 0);
  }
}
async function migrate () {
  let currentVersion = await util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].getValue('version');
  if (currentVersion !== 0 && !currentVersion) {
    throw new util_core__WEBPACK_IMPORTED_MODULE_0__["AdsBypasserError"]('invalid version');
  }
  while (currentVersion < PATCHES.length) {
    PATCHES[currentVersion]();
    ++currentVersion;
  }
  await util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].setValue('version', currentVersion);
}
async function loadConfig () {
  await senityCheck();
  await migrate();
  Object(util_dispatcher__WEBPACK_IMPORTED_MODULE_1__["register"])({
    rule: {
      host: /^adsbypasser\.github\.io$/,
      path: /^\/configure\.html$/,
    },
    async ready () {
      await waitForPage();
      util_platform__WEBPACK_IMPORTED_MODULE_2__["usw"].commit = async (data) => {
        for (const [k, v] of Object.entries(data)) {
          await util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].setValue(k, v);
        }
      };
      util_platform__WEBPACK_IMPORTED_MODULE_2__["usw"].render({
        version: await util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].getValue('version'),
        options: {
          align_center: {
            type: 'checkbox',
            value: await util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].getValue('align_center'),
            label: 'Align Center',
            help: 'Align image to the center if possible. (default: enabled)',
          },
          change_background: {
            type: 'checkbox',
            value: await util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].getValue('change_background'),
            label: 'Change Background',
            help: 'Use Firefox-like image background if possible. (default: enabled)',
          },
          redirect_image: {
            type: 'checkbox',
            value: await util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].getValue('redirect_image'),
            label: 'Redirect Image',
            help: [
              'Directly open image link if possible. (default: enabled)',
              'If disabled, redirection will only works on link shortener sites.',
            ].join('<br/>\n'),
          },
          scale_image: {
            type: 'checkbox',
            value: await util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].getValue('scale_image'),
            label: 'Scale Image',
            help: 'When image loaded, scale it to fit window if possible. (default: enabled)',
          },
          log_level: {
            type: 'select',
            value: await util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].getValue('log_level'),
            menu: [
              [0, '0 (quiet)'],
              [1, '1 (default)'],
              [2, '2 (verbose)'],
            ],
            label: 'Log Level',
            help: [
              'Log level in developer console. (default: 1)',
              '0 will not print anything in console.',
              '1 will only print logs on affected sites.',
              '2 will print on any sites.',
            ].join('<br/>\n'),
          },
        },
      });
    },
  });
}
function waitForPage () {
  return new Promise((resolve) => {
    const i = setInterval(() => {
      if (util_platform__WEBPACK_IMPORTED_MODULE_2__["usw"].render) {
        clearInterval(i);
        resolve();
      }
    }, 50);
  });
}
async function dumpConfig () {
  let rv = MANIFEST.map(async (descriptor) => {
    return [descriptor.key, await util_platform__WEBPACK_IMPORTED_MODULE_2__["GMAPI"].getValue(descriptor.key)];
  });
  rv = await Promise.all(rv);
  const o = {};
  for (const [k, v] of rv) {
    o[k] = v;
  }
  return o;
}
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
 __webpack_require__.d(__webpack_exports__, "info", function() { return info; });
 __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
 var util_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
const quiet = false;
function log (method, args) {
  if (quiet) {
    return;
  }
  args = Array.prototype.slice.call(args);
  if (Object(util_core__WEBPACK_IMPORTED_MODULE_0__["isString"])(args[0])) {
    args[0] = 'AdsBypasser: ' + args[0];
  } else {
    args.unshift('AdsBypasser:');
  }
  const f = console[method];
  if (typeof f === 'function') {
    f.apply(console, args);
  }
}
function debug () {
  log('debug', arguments);
}
function info () {
  log('info', arguments);
}
function warn () {
  log('warn', arguments);
}
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 var _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^akoam\.com$/,
    path: /^\/download\//,
  },
  async start () {
    const locationLink = location.hash;
    let data = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].post(locationLink);
    try {
      data = JSON.parse(data);
    } catch (e) {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].warn('JSON error:', e);
      return;
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(data.direct_link);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?coolrom\.com$/,
    path: /^\/dlpop\.php$/,
  },
  async ready () {
    const matches = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/<form method="POST" action="([^"]+)">/);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(matches[1]);
  },
});
(function () {
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^(www\.)?dl-protect\.com$/,
      path: /\/[A-Z0-9]+/,
    },
    async ready () {
      if (_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('#captcha')) {
        return;
      }
      const f = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('form[name=ccerure]');
      if (f) {
        const iIn = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('input[id=in]');
        if (iIn.value) {
          await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].wait(600);
          f.submit();
        } else {
          const [, , p] = await waitDOM(iIn, {
            attributes: true,
          }, (mutation) => {
            if (!mutation.target.value || mutation.attributeName !== 'value') {
              return _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].none;
            }
            iIn.value = 'Tracking too much hurts users\' privacy';
            if (!canFastRedirect()) {
              return;
            }
            return _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].wait(600);
          });
          if (p) {
            await p;
            f.submit();
          }
        }
        return;
      }
      const l = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$$('#slinks > a');
      if (l.length === 1) {
        await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(l[0].href);
      }
    },
  });
  function canFastRedirect () {
    return !_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('form[name=ccerure]').onsubmit && !_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('form[name=ccerure] input[name=pwd]');
  }
  function waitDOM (element, config, fn) {
    return new Promise((resolve) => {
      const observer = new MutationObserver((mutations) => {
        const [k, v, r] = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].find(mutations, fn);
        if (k !== _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].none) {
          observer.disconnect();
          resolve([k, v, r]);
          return;
        }
      });
      observer.observe(element, config);
    });
  }
})();
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?embedupload\.com$/,
    path: /^\/$/,
    query: /^\?\w{2}=\w+$/
  },
  async ready () {
    const downloadPage = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('.categories a[target=_blank]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(downloadPage);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^www\.fileproject\.com\.br$/,
    path: /^\/files\/+/,
  },
  async ready () {
    const m = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/<a id="down" href="([^"]+)">/);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(m[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?jheberg\.net$/,
    path: /^\/captcha\//,
  },
  async ready () {
    Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('.dl-button').click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?jheberg\.net$/,
    path: /^\/redirect\//,
  },
  async ready () {
    'use strict';
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].removeAllTimer();
    const matches = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/'slug':\s*'([^']+)',\s*'hoster':\s*'([^']+)'/);
    const slug = matches[1];
    const hoster = matches[2];
    const response = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].post('/get/link/', {
      slug,
      hoster,
    });
    const respJSON = JSON.parse(response);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(respJSON.url);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?mirrorcreator\.com$/,
    path: /^\/downlink\.php$/,
  },
  async ready () {
    let a = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('#redirectlink a');
    if (a) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
      return;
    }
    a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#redirectlink > div.redirecturl');
    a = a.innerHTML;
    if (!a.match(/^http/)) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].AdsBypasserError('not a valid URL');
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?mirrorcreator\.com$/,
    path: /^\/files\//,
  },
  async ready () {
    const b = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('.downloadarea.downlinks form button');
    b.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^www\.multiupfile\.com$/,
    path: /^\/f\//,
  },
  async ready () {
    const f = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#yw0');
    f.submit();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^mylinkgen\.com$/,
    path: /^\/p\/(.+)$/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink('/g/' + m.path[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^mylinkgen\.com$/,
    path: /^\/g\//,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#main-content a.btn.btn-default');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^openload\.co$/,
      /^oload\.(stream|info|site|tv|win)$/,
    ],
    path: /^\/f\/.*/,
  },
  async start () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.adblock = false;
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.adblock2 = false;
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.popAdsLoaded = true;
  },
  async ready () {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].wait(500);
    const timer = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#downloadTimer');
    timer.style.display = 'none';
    const dlCtn = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#realdl');
    dlCtn.style.display = 'inline-block';
    const dlBtn = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('a', dlCtn);
    const ePath = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#DtsBlkVFQx');
    dlBtn.href = '/stream/' + ePath.textContent;
    const videoCtn = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('.videocontainer');
    if (videoCtn) {
      const overlay = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#videooverlay', videoCtn);
      overlay.click();
      dlBtn.addEventListener('click', (evt) => {
        evt.preventDefault();
        const iframe = document.createElement('iframe');
        iframe.src = dlBtn.href;
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      });
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].info(`${window.location} -> ${dlBtn.href}`);
      dlBtn.click();
    } else {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(dlBtn.href);
    }
  }
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?putlocker\.com$/,
    path: /^\/file\/[0-9A-F]+$/,
  },
  async ready () {
    const c = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#confirm_form');
    c.submit();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?upmirror\.info$/,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].setCookie('user', 'ppp');
    if (_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('#countDownText')) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(document.location.toString());
    }
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?vidto\.me$/,
  },
  async ready () {
    const f = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#btn_download').form;
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].wait(6 * 1000);
    f.submit();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^01\.nl$/,
  },
  async ready () {
    const f = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('iframe#redirectframe');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(f.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^10co\.(biz|xyz|co|me)$/,
  },
  async ready () {
    const d = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('.go');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(d.dataset.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?1(be|dl)\.biz$/,
    path: /^\/z\.php$/,
    query: /^\?(.+)/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(m.query[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^1ink\.cc$/,
    path: /^\/\w+$/,
  },
  async ready () {
    let url = document.head.querySelector('[name=keywords]').content;
    const urlCheck = url.match(/^https?:\/\//);
    if (!urlCheck) {
      url = 'http://' + url;
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?1tiny\.net$/,
    path: /\/\w+/,
  },
  async ready () {
    const directUrl = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/window\.location='([^']+)';/);
    if (!directUrl) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].AdsBypasserError('script content changed');
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(directUrl[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^2ty\.cc$/,
    path: /^\/.+/,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#close');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?3ra\.be$/,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
    let f = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.fc;
    if (!f) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].AdsBypasserError('window.fc is undefined');
    }
    f = f.toString();
    f = f.match(/href="([^"]*)/);
    if (!f) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].AdsBypasserError('url pattern outdated');
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(f[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?4fun\.tw$/,
  },
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#original_url');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(i.value);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^ad2links\.com$/,
    path: /^\/\w-.+$/,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(window.location.toString(), {
      post: {
        image: 'Skip Ad.',
      },
    });
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^ad4\.fr$/,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
    const s = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/"src", "([^"]+)"/);
    if (!s) {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].warn('changed');
      return;
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(s[1]);
  },
});
(function () {
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^ad7\.biz$/,
      path: /^\/\d+\/(.*)$/,
    },
    async start (m) {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
      let redirectLink = m.path[1];
      if (!redirectLink.match(/^https?:\/\//)) {
        redirectLink = 'http://' + redirectLink;
      }
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(redirectLink);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^ad7\.biz$/,
      path: /^\/\w+$/,
    },
    async ready () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
      const script = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts('const r_url');
      let url = script.match(/&url=([^&]+)/);
      url = url[1];
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url);
    },
  });
})();
(function () {
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: [
        /^(www\.)?adb\.ug$/,
        /^(www\.)?lynk\.my$/,
        /^(www\.)?adyou\.(co|me)$/,
      ],
      path: /^(?!\/(?:privacy|terms|contact(\/.*)?|#.*)?$).*$/,
    },
    async ready () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
      const m = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/top\.location\.href="([^"]+)"/);
      if (m) {
        await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(m[1]);
        return;
      }
      const args = await getArguments();
      tryLink(args);
    },
  });
  function getArguments () {
    const PATTERN = /\{\s*_args[^}]+\}[^}]+\}/;
    return new Promise((resolve) => {
      const m = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(PATTERN);
      if (m) {
        resolve(m);
        return;
      }
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.localName === 'script') {
              const m = node.textContent.match(PATTERN);
              if (m) {
                observer.disconnect();
                resolve(m);
              }
            }
          });
        });
      });
      observer.observe(document.body, {
        childList: true,
      });
    }).then((m) => {
      return eval('(' + m[0] + ')');
    });
  }
  function tryLink (args) {
    const url = window.location.pathname + '/skip_timer';
    const i = setInterval(() => {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].post(url, args).then((text) => {
        const jj = JSON.parse(text);
        if (!jj.errors && jj.messages) {
          clearInterval(i);
          _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(jj.messages.url);
        }
      });
    }, 1000);
  }
})();
(function () {
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^adf\.ly$/,
      path: /^\/redirecting\/(.+)$/,
    },
    async start (m) {
      const url = atob(m.path[1]);
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      path: /\/locked$/,
      query: /url=([^&]+)/,
    },
    async start (m) {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].resetCookies();
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].setCookie('FLYSESSID', generateRandomSessionCookie(40));
      const url = decodeURIComponent(m.query[1]);
      if (url.match(/^http/)) {
        await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url);
      } else {
        await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(document.referrer);
      }
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule () {
      const h = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('html[id="main_html"]');
      if (h) {
        return true;
      } else {
        return null;
      }
    },
    async start () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.document.write = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].nop;
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.btoa = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].nop;
    },
    async ready () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].setCookie('FLYSESSID', generateRandomSessionCookie(40));
      let rv = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].get(location.href, '', {
        'Origin': _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].none,
        'Referer': _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].none,
        'X-Requested-With': _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].none,
      });
      rv = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].toDOM(rv);
      rv = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/var ysmm = '([^']+)'/, rv);
      rv = rv[1];
      rv = decodeToken(rv);
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(rv);
    },
  });
  function generateRandomSessionCookie (length) {
    const rv = [];
    for (let i = 0; i < length; ++i) {
      rv.push(Math.random().toString(36).charAt(2));
    }
    return rv.join('');
  }
  function decodeToken (token) {
    let a = '';
    let b = '';
    for (let i = 0; i < token.length; ++i) {
      if (i % 2 === 0) {
        a = a + token.charAt(i);
      } else {
        b = token.charAt(i) + b;
      }
    }
    token = a + b;
    a = token.split('');
    for (let i = 0; i < a.length; ++i) {
      if (/\d/.test(a[i])) {
        for (let j = i + 1; j < a.length; ++j) {
          if (/\d/.test(a[j])) {
            b = a[i] ^ a[j];
            if (b < 10) {
              a[i] = b;
            }
            i = j;
            j = a.length;
          }
        }
      }
    }
    token = a.join('');
    token = atob(token);
    token = token.substring(16);
    token = token.substring(0, token.length - 16);
    if (location.hash) {
      token += location.hash;
    }
    return token;
  }
})();
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?adfe\.es$/,
    path: /^\/\w+$/,
  },
  async ready () {
    const f = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#frmvideo');
    if (!f.STEP4) {
      return;
    }
    f.submit();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://adfoc.us/*',
  async ready () {
    const promise = new Promise((resolve) => {
      const root = document.body;
      const observer = new MutationObserver(() => {
        let o = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('#showSkip');
        if (o) {
          observer.disconnect();
          o = o.querySelector('a');
          resolve(o.href);
        }
      });
      observer.observe(root, {
        childList: true,
        subtree: true,
      });
    });
    const url = await promise;
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?adjet\.biz$/,
  },
  async ready () {
    const m = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/href=(\S+)/);
    if (!m) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].AdsBypasserError('site changed');
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(m[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^adlock\.org$/,
  },
  async ready () {
    let a = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('#xre a.xxr, #downloadButton1');
    if (a) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
      return;
    }
    a = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.fileLocation;
    if (a) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a);
    }
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?adlot\.us$/,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
    const script = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts('form');
    const p = /name='([^']+)' value='([^']+)'/g;
    const opt = {
      image: ' ',
    };
    let tmp = null;
    while ((tmp = p.exec(script))) {
      opt[tmp[1]] = tmp[2];
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink('', {
      path: opt,
    });
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^admy\.link$/,
  },
  async ready () {
    const f = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('form.edit_link');
    f.submit();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?ah-informatique\.com$/,
    path: /^\/ZipUrl/,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#zip3 a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
(function () {
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^ah\.pe$/,
    },
    async ready () {
      let script = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts('eval');
      script = decodeScript(script);
      script = decodeScript(script);
      script = decodeScript(script);
      let path = script.match(/([^;= ]+)=([^+ ;]+)\+"\."\+([^+ ]+)\+"\."\+([^; ]+);/);
      if (!path) {
        throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].AdsBypasserError('script changed');
      }
      if (typeof _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window[path[2]] === 'undefined') {
        _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].info('recaptcha');
        return;
      }
      path = [_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window[path[2]], _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window[path[3]], _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window[path[4]]].join('.');
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(path);
    },
  });
  function decodeScript (encoded) {
    let a = encoded.match(/^\s*;eval\((.+)\);\s*$/);
    a = a[1];
    const b = a.match(/^(.+)\('([^']+)','([^']+)','([^']+)','([^']+)'\)$/);
    const c = eval('(' + b[1] + ')');
    return c(b[2], b[3], b[4], b[5]);
  }
})();
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^aka\.gr$/
  },
  async ready () {
    const l = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('iframe#yourls-frame');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(l.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^al\.ly$/,
      /^ally\.sh$/,
    ],
  },
  async ready () {
    let i = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('#html_element');
    if (i) {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('#messa');
      i.classList.remove('hidden');
      return;
    }
    i = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/"href","([^"]+)" \+ hash\)\.remove/);
    if (!i) {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].warn('site changed');
      return;
    }
    i = i[1] + location.hash;
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(i);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^(www\.)?allkeyshop\.com$/,
      /^cshort\.org$/,
    ],
  },
  async ready () {
    let matches = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/window\.location\.href = "([^"]+)"/);
    matches = matches[1];
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].nuke(matches);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(matches);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^anonymbucks\.com$/,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#boton-continuar');
    a.click();
  },
});
(function () {
  const ajaxPattern = /\$.post\('([^']*)'[^{]+(\{\s*opt:\s*'make_log'[^}]+\}\s*\}),/i;
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: [
        /^bc\.vc$/,
        /^linc\.ml$/,
      ],
      path: /^.+(https?:\/\/.+)$/,
    },
    async start (m) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(m.path[1] + document.location.search + document.location.hash);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^bc\.vc$/,
      path: /^\/.+/,
    },
    async ready () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
      const token = findAJAXToken();
      const time = fakeAJAXToken();
      const url = `/fly/ajax.php?wds=${token.wds}&time=${time}`;
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].wait(5000);
      let rv = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].post(url, {
        xdf: {
          afg: _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.tZ,
          bfg: _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.cW,
          cfg: _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.cH,
          jki: token.jki,
          dfg: _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.sW,
          efg: _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.sH,
        },
        ojk: token.ojk,
      });
      rv = JSON.parse(rv);
      if (rv.error) {
        throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].AdsBypasserError('auth error');
      }
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(rv.message.url);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^adcrun\.ch$/,
      path: /^\/\w+$/,
    },
    async ready () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('.user_content');
      const rSurveyLink = /http\.open\("GET", "api_ajax\.php\?sid=\d*&ip=[^&]*&longurl=([^"]+)" \+ first_time, (?:true|false)\);/;
      const l = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(rSurveyLink);
      if (l) {
        await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(l[1]);
        return;
      }
      await run(true);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: [
        /^(1tk|hit|adbla|tl7)\.us$/,
        /^mylink\.(us|zone)$/,
        /^gx\.si$/,
        /^adwat\.ch$/,
        /^(fly2url|urlwiz|xafox)\.com$/,
        /^(zpoz|ultry)\.net$/,
        /^(wwy|myam)\.me$/,
        /^(ssl|srk)\.gs$/,
        /^www\.adjet\.eu$/,
        /^cun\.bz$/,
        /^miniurl\.tk$/,
        /^vizzy\.es$/,
        /^kazan\.vc$/,
        /^linkcash\.ml$/,
      ],
      path: /^\/.+/,
    },
    ready: run,
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^adtr\.im|ysear\.ch|xip\.ir$/,
      path: /^\/.+/,
    },
    async ready () {
      const a = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('div.fly_head a.close');
      const f = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('iframe.fly_frame');
      if (a && f) {
        await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(f.src);
      } else {
        await run();
      }
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^ad5\.eu$/,
      path: /^\/[^.]+$/,
    },
    async ready () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
      const s = searchScript(true);
      let m = s.script.match(/(<form name="form1"method="post".*(?!<\\form>)<\/form>)/);
      if (!m) {
        return;
      }
      m = m[1];
      const tz = -(new Date().getTimezoneOffset() / 60);
      m = m.replace('\'+timezone+\'', tz);
      const d = document.createElement('div');
      d.setAttribute('id', 'AdsBypasserFTW');
      d.setAttribute('style', 'display:none;');
      d.innerHTML = m;
      document.body.appendChild(d);
      Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#AdsBypasserFTW > form[name=form1]').submit();
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^tr5\.in$/,
      path: /^\/.+/,
    },
    async ready () {
      await run(true);
    },
  });
  function decompress (script, unzip) {
    if (!unzip) {
      return script;
    }
    let matches = script.match(/eval(.*)/);
    if (!matches) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].AdsBypasserError('no script matches /eval(.*)/');
    }
    matches = matches[1];
    script = eval(matches);
    return script;
  }
  function searchScript (unzip) {
    let content = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts('make_log');
    if (content) {
      return {
        direct: false,
        script: decompress(content, unzip),
      };
    }
    content = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts('click_log');
    if (content) {
      return {
        direct: true,
        script: decompress(content, unzip),
      };
    }
    throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].AdsBypasserError('script changed');
  }
  function knockServer (script, dirtyFix) {
    const matches = script.match(ajaxPattern);
    if (!matches) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].AdsBypasserError('(in knock server) no script matches $.post');
    }
    const make_url = matches[1];
    const make_opts = eval('(' + matches[2] + ')');
    const i = setInterval(function () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].post(make_url, make_opts).then(function (text) {
        if (dirtyFix) {
          text = text.match(/\{.+\}/)[0];
        }
        const jj = JSON.parse(text);
        if (jj.message) {
          clearInterval(i);
          return _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(jj.message.url);
        }
      });
    }, 1000);
  }
  async function run (dirtyFix) {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
    let result = searchScript(true);
    if (!result.direct) {
      knockServer(result.script,dirtyFix);
    } else {
      result = result.script.match(/top\.location\.href='([^']+)'/);
      if (!result) {
        throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].AdsBypasserError('script changed');
      }
      result = result[1];
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(result);
    }
  }
  function findAJAXToken () {
    const rv = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts('/fly/ajax.php');
    if (!rv) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].AdsBypasserError('script changed');
    }
    let wds = rv.match(/\?wds=([^&]+)/);
    if (!wds) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].AdsBypasserError('script changed');
    }
    wds = wds[1];
    let jki = rv.match(/jki:\s*'([^']+)'/);
    if (!jki) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].AdsBypasserError('script changed');
    }
    jki = jki[1];
    let ojk = rv.match(/ojk:\s*'([^']+)'/);
    if (!ojk) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].AdsBypasserError('script changed');
    }
    ojk = ojk[1];
    return {
      wds: wds,
      jki: jki,
      ojk: ojk,
    };
  }
  function fakeAJAXToken () {
    const skipAd = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('div.fly_head span#redirectin').parentElement;
    const margin = 6;
    const fakePageX = skipAd.offsetLeft + margin + 50 + (Math.random() * 10);
    const fakePageY = skipAd.offsetTop + margin + 15 + (Math.random() * 1);
    const po = fakePageX + ',' + fakePageY;
    const posX = jQueryOffset(skipAd).left + margin;
    const posY = jQueryOffset(skipAd).top + margin;
    const pos = (fakePageX - posX) + ',' + (fakePageY - posY);
    const tsta_ = Math.floor((5 + Math.random()) * 1000);
    const time = po + ':' + pos + ':' + tsta_;
    return time;
  }
  function jQueryOffset (element) {
    const r = element.getBoundingClientRect();
    return {
      top: r.top + document.body.scrollTop,
      left: r.left + document.body.scrollLeft,
    };
  }
})();
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?biglistofwebsites\.com$/,
    path: /^\/go\/(\w+\.\w+)$/
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink('http://' + m.path[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://www.bild.me/bild.php?file=*',
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#Bild');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://bildr.no/view/*',
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('img.bilde');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?([a-zA-Z0-9]+\.)?binbox\.io$/,
    path: /\/o\/([a-zA-Z0-9]+)/,
  },
  async start (m) {
    const direct_link = window.atob(m.path[1]);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(direct_link);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?boxcash\.net$/,
    path: /^\/[\w~]+$/,
  },
  async ready () {
    const m = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/'\/ajax_link\.php',\s*\{key:\s*'(\w+)',\s*url:\s*'(\d+)',\s*t:\s*'(\d+)',\s*r:\s*'(\w*)'\}/);
    if (!m) {
      return;
    }
    const response = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].post('/ajax_link.php', {
      key: m[1],
      url: m[2],
      t: m[3],
      r: m[4],
    });
    const l = response.match(/window(?:.top.window)\.location="([^"]+)"/);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(l[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?boxcash\.net$/,
    path: /^\/redirect\.html$/,
    query: /url=(.+)$/,
  },
  async start (m) {
    const l = decodeURIComponent(m.query[1]);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(l);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?(buz|vzt)url\.com$/,
  },
  async ready () {
    const frame = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('frame[scrolling=yes]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(frame.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(cf|ex|xt)\d\.(me|co)$/,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#skip_button');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^catcut\.net$/,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#rbs');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^cf\.ly$/,
    path: /^\/[^/]+$/,
  },
  async start (m) {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink('/skip' + m.path[0]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?cli\.gs$/,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('a.RedirectLink');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^clk\.im$/,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
    const matches = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/\$\("\.countdown"\)\.attr\("href","([^"]+)"\)/);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(matches[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^cocoleech\.com$/,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#download');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
(function () {
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: [
        /^link\.animagz\.org$/,
        /^(coeg|disingkat|gunting)\.in$/,
        /^www\.(telondasmu|siotong|siherp)\.com$/,
        /^www\.greget\.space$/,
      ],
      path: /^\/\w+$/,
    },
    async ready (m) {
      const mapper = hostMapper(m.host[0]);
      const b64 = mapper().match(/\?r=([\w/]+={0,2})/);
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(atob(b64[1]));
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^sipkur\.net$/,
      path: [
        /^\/\w+$/,
        /^\/menujulink\//,
      ],
    },
    async ready () {
      let d = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#testapk > div');
      d = d.onclick.toString();
      d = d.match(/window\.open\('([^']+)'/);
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(d[1]);
    },
  });
  function hostMapper (host) {
    switch (host) {
    case 'disingkat.in':
      return () => {
        const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('a.btn-block.redirect');
        return a.href;
      };
    case 'link.animagz.org':
      return () => {
        let a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('a.redirect');
        a = a.onclick.toString();
        a = a.match(/window\.open \('([^']+)'\)/);
        return a[1];
      };
    case 'coeg.in':
    case 'www.telondasmu.com':
    case 'www.siotong.com':
    case 'www.siherp.com':
    case 'www.greget.space':
      return () => {
        const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('.download-link a');
        return a.href;
      };
    case 'gunting.in':
      return () => {
        const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('div.col-sm-6:nth-child(1) > center:nth-child(1) > a:nth-child(1)');
        return a.href;
      };
    default:
      return null;
    }
  }
})();
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(?:(\w+)\.)?(coinurl\.com|cur\.lv)$/,
    path: /^\/([-\w]+)$/
  },
  async ready (m) {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
    const host = 'http://cur.lv/redirect_curlv.php';
    const param = m.host[1] === undefined ? {
      code: m.path[1],
    } : {
      zone: m.host[1],
      name: m.path[1],
    };
    const mainFrameContent = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].get(host, param);
    let docMainFrame = null;
    try {
      docMainFrame = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].toDOM(mainFrameContent);
    } catch (e) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].AdsBypasserError('main frame changed');
    }
    const rExtractLink = /onclick="open_url\('([^']+)',\s*'go'\)/;
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].forEach(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$$('iframe', docMainFrame), (currFrame) => {
      const currFrameAddr = currFrame.getAttribute('src');
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].get(currFrameAddr).then((currFrameContent) => {
        const aRealLink = rExtractLink.exec(currFrameContent);
        if (aRealLink === undefined || aRealLink[1] === undefined) {
          return;
        }
        const realLink = aRealLink[1];
        return _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(realLink);
      });
    });
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^comyonet\.com$/,
  },
  async ready () {
    const input = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('input[name="enter"]');
    input.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?cvc\.la$/,
    path: /^\/\w+$/,
  },
  async start () {
    const text = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].post(document.location.href, {
      hidden: 24, 
      image: ' ',
    });
    const matches = text.match(/window\.location\.replace\('([^']+)'\);/);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(matches[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?dapat\.in$/,
  },
  async ready () {
    const f = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('iframe[name=pagetext]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(f.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?dd\.ma$/,
  },
  async ready () {
    const i = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('#mainframe');
    if (i) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(i.src);
      return;
    }
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#btn_open a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?dereferer\.website$/,
    query: /^\?(.+)/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(m.query[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^dikit\.in$/,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('.disclaimer a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^durl\.me$/,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('a[class="proceedBtn"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^easyurl\.net$/,
      /^(atu|clickthru|redirects|readthis)\.ca$/,
      /^goshrink\.com$/,
    ],
  },
  async ready () {
    const f = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('frame[name=main]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(f.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^elde\.me$/,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe:not([name=undefined])');
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#modal-alert');
    a.style.display = 'block';
    a.style.top = 0;
    a.style.left = 0;
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^ethi\.in$/,
      /^st\.wardhanime\.net$/,
    ],
    path: /^\/i\/\d+$/,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#wrapper > [class^="tombo"] > a[target="_blank"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?filoops\.info$/,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#text > center a, #text > div[align=center] a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^fit\.sh$/,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('.container-body');
    let m = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/token="([^"]+)"/);
    if (!m) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].AdsBypasserError('site changed');
    }
    m = m[1];
    const interLink = '/go/' + m + '?fa=15466&a=' + window.location.hash.substr(1);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].wait(6 * 1000);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(interLink);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?fiuxy\.co$/,
    path: /^\/links?\/$/,
  },
  async ready () {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('a.btn.a').href);
  }
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?fundurl\.com$/,
    query: /i=([^&]+)/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(m.query[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?fundurl\.com$/,
    path: /^\/(go-\w+|load\.php)$/,
  },
  async ready () {
    const f = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('iframe[name=fpage3]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(f.src);
  },
});
(function () {
  const hosts = /^gca\.sh|repla\.cr$/;
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: hosts,
      path: /^\/adv\/\w+\/(.*)$/,
      query: /^(.*)$/,
      hash: /^(.*)$/,
    },
    async start (m) {
      const l = m.path[1] + m.query[1] + m.hash[1];
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(l);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: hosts,
    },
    async ready () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
      const jQuery = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.$;
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].wait(1000);
      jQuery('#captcha-dialog').dialog('open');
    },
  });
})();
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^gkurl\.us$/,
  },
  async ready () {
    const iframe = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#gkurl-frame');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(iframe.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^u\.go2\.me$/,
  },
  async ready () {
    const iframe = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('iframe');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(iframe.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^goto\.loncat\.in$/,
    query: /open=(.+)/,
  },
  async start (m) {
    const url = atob(atob(m.query[1]));
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^gsurl\.(me|in)$/,
      /^(gsul|getsl)\.me$/,
      /^gsur\.in$/,
      /^g5u\.pw$/,
      /^gurl\.ly$/,
    ],
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('#container');
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#link');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].wait(5000);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^hotshorturl\.com$/,
  },
  async ready () {
    const frame = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('frame[scrolling=yes]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(frame.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^iiv\.pl$/,
  },
  async ready () {
    let d = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#counting');
    let rv = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].post(location.pathname, {
      blocker: 0,
      salt: d.dataset.salt,
    }, {
      'X-OCTOBER-REQUEST-HANDLER': 'onAfterShortcutView',
      'X-OCTOBER-REQUEST-PARTIALS': 'shortcut/link_show',
    });
    rv = JSON.parse(rv);
    d = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].toDOM(rv['shortcut/link_show']);
    rv = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('a', d);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(rv.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?(ilix\.in|priva\.us)$/,
    path: /\/(\w+)/,
  },
  async ready (m) {
    const realHost = 'ilix.in';
    if (m.host[2] !== realHost) {
      const realURL = location.href.replace(m.host[2], realHost);
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(realURL);
      return;
    }
    const f = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('iframe[name=ifram]');
    if (f) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(f.src);
      return;
    }
    if (!_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('img#captcha')) {
      Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('form[name=frm]').submit();
    }
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^ilovebanten\.com$/,
  },
  async ready () {
    const p = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('.notblocked');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(p.textContent);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^indexmovie\.me$/,
    path: /^\/([^/]+)$/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink('/get/' + m.path[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^itw\.me$/,
    path: /^\/r\//,
  },
  async ready () {
    const f = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('.go-form');
    f.submit();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^ity\.im$/,
  },
  async ready () {
    let f = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('#main');
    if (f) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(f.src);
      return;
    }
    [, , f] = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].find(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$$('frame'), (frame) => {
      if (frame.src.indexOf('interheader.php') < 0) {
        return _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].none;
      }
      return frame.src;
    });
    if (f !== _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].none) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(f);
      return;
    }
    f = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/krypted=([^&]+)/);
    if (!f) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].AdsBypasserError('site changed');
    }
    f = f[1];
    const data = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.des('ksnslmtmk0v4Pdviusajqu', _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.hexToString(f), 0, 0);
    if (data) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink('http://ity.im/1104_21_50846_' + data);
    }
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?kingofshrink\.com$/,
  },
  async ready () {
    const l = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#textresult > a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(l.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^st\.kurogaze\.net$/,
    query: /r=(.+)/,
  },
  async start (m) {
    const r = atob(m.query[1]);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(r);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^st\.kurogaze\.net$/,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('a.redirect');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?leechbd\.tk$/,
    path: /^\/Shortener\/(\w+)$/,
  },
  async start (m) {
    const text = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].get('/Shortener/API/read/get', {
      id: m.path[1],
      type: 'json',
    });
    const r = JSON.parse(text);
    if (r.success == true && r.data.full) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(r.data.full);
    } else {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].warn('API Error ' + r.error.code + ' : ' + r.error.msg);
    }
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://www.lienscash.com/l/*',
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#redir_btn');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?\w+\.link-protector\.com$/,
  },
  async ready () {
    const f = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('form[style="font-weight:normal;font-size:12;font-family:Verdana;"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(f.action);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?link\.im$/,
    path: /^\/\w+$/,
  },
  async start () {
    const text = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].post(document.location.href, {
      image: 'Continue',
    });
    const m = text.match(/window\.location\.replace\('([^']+)'\)/);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(m[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /\.link2dollar\.com$/,
    path: /^\/\d+$/,
  },
  async ready () {
    let m = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/const rlink = '([^']+)';/);
    if (!m) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].AdsBypasserError('site changed');
    }
    m = m[1];
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(m);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^link2you\.ru$/,
    path: /^\/\d+\/(.+)$/,
  },
  async start (m) {
    let url = m.path[1];
    if (!url.match(/^https?:\/\//)) {
      url = '//' + url;
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^link(4ad|ajc)\.com$/,
    path: /^\/(.+)$/,
  },
  async ready (m) {
    let d = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('div[id^=module_]');
    d = d.id.match(/module_(\d+)/);
    d = d[1];
    const url = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].post('form.php?block_id=' + d, {
      cmd: 'get_source',
      act: 'waiting',
      id: m.path[1],
    });
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url);
  },
});
(function () {
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^link5s\.com$/,
      path: /^\/([^/]+)$/,
    },
    async ready (m) {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.$ = null;
      const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#iframeID');
      const opts = {
        page: m.path[1],
        advID: i.dataset.cmp,
        u: i.dataset.u,
      };
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
      const url = await sendRequest(opts);
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url);
    },
  });
  async function sendRequest (opts) {
    const data = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].post('/ajax/r.php', opts);
    if (data.length <= 1) {
      return await sendRequest(opts);
    }
    let a = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].toDOM(data);
    a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('a', a);
    return a.href;
  }
})();
(function() {
  const hostRules = [
    /^(([\w]{8}|www)\.)?(allanalpass|cash4files|drstickyfingers|fapoff|(gone|tube)viral|(pic|tna)bucks|whackyvidz)\.com$/,
    /^(([\w]{8}|www)\.)?(filesonthe|poontown|seriousdeals|ultrafiles|urlbeat|zatnawqy|zbqhfbetlmni)\.net$/,
    /^(([\w]{8}|www)\.)?freean\.us$/,
    /^(([\w]{8}|www)\.)?galleries\.bz$/,
    /^(([\w]{8}|www)\.)?hornywood\.tv$/,
    /^(([\w]{8}|www)\.)?link(babes|bucks)\.com$/,
    /^(([\w]{8}|www)\.)?(megaline|miniurls|qqc|rqq|tinylinks|yyv|zff)\.co$/,
    /^(([\w]{8}|www)\.)?(these(blog|forum)s)\.com$/,
    /^(([\w]{8}|www)\.)?youfap\.me$/,
    /^warning-this-linkcode-will-cease-working-soon\.www\.linkbucksdns\.com$/,
  ];
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: hostRules,
      path: /^\/\w+\/url\/(.+)$/,
    },
    async ready(m) {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].removeAllTimer();
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].resetCookies();
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
      let url = m.path[1] + window.location.search;
      const match = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/UrlEncoded: ([^,]+)/);
      if (match && match[1] === 'true') {
        url = decrypt(url);
      }
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url);
    }
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: hostRules,
    },
    async start () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.XMLHttpRequest = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].nop;
    },
    async ready () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].removeAllTimer();
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].resetCookies();
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
      if (window.location.pathname.indexOf('verify') >= 0) {
        const path = window.location.pathname.replace('/verify', '');
        await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(path);
        return;
      }
      const token = findToken(document);
      const url = await sendRequest(token);
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].nuke(url);
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      query: /^(.*)[?&]_lbGate=\d+$/,
    },
    async start (m) {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].setCookie('_lbGatePassed', 'true');
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(window.location.pathname + m.query[1]);
    },
  });
  function findToken (context) {
    const script = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts('    var f = window[\'init\' + \'Lb\' + \'js\' + \'\']', context);
    if (!script) {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].warn('pattern changed');
      return null;
    }
    let adurl = script.match(/AdUrl\s*:\s*'([^']+)'/);
    if (!adurl) {
      return null;
    }
    adurl = adurl[1];
    const m1 = script.match(/AdPopUrl\s*:\s*'.+\?[^=]+=([\w\d]+)'/);
    const m2 = script.match(/Token\s*:\s*'([\w\d]+)'/);
    const token = m1[1] || m2[1];
    let m = script.match(/=\s*(\d+);/);
    let ak = parseInt(m[1], 10);
    const re = /\+\s*(\d+);/g;
    let tmp = null;
    while((m = re.exec(script)) !== null) {
      tmp = m[1];
    }
    ak += parseInt(tmp, 10);
    return {
      t: token,
      aK: ak,
      adurl: adurl,
    };
  }
  async function sendRequest (token) {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].get(token.adurl);
    delete token.adurl;
    token.a_b = false;
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].info('waiting the interval');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].wait(5000);
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].info('sending token: %o', token);
    const text = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].get('/intermission/loadTargetUrl', token, {
      'X-Requested-With': _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].none,
      Origin: _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].none,
    });
    const data = JSON.parse(text);
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].info('response: %o', data);
    if (!data.Success && data.Errors[0] === 'Invalid token') {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].warn('got invalid token');
      return await retry();
    }
    if (data.AdBlockSpotted) {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].warn('adblock spotted');
      return;
    }
    if (data.Success && !data.AdBlockSpotted && data.Url) {
      return data.Url;
    }
  }
  async function retry () {
    const text = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].get(window.location.toString(), {}, {
      'X-Forwarded-For': _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].generateRandomIP(),
    });
    const d = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].toDOM(text);
    const t = findToken(d);
    if (!t) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].wait(1000);
      return await retry();
    }
    return await sendRequest(t);
  }
  function decrypt (url) {
    url = ConvertFromHex(url);
    let unsafe = `(${Encode.toString()})("${url}")`;
    unsafe = (0, eval)(unsafe);
    return unsafe;
  }
  function ConvertFromHex (str) {
    const result = [];
    while (str.length >= 2) {
      result.push(String.fromCharCode(parseInt(str.substring(0, 2), 16)));
      str = str.substring(2, str.length);
    }
    return result.join('');
  }
  const Encode = function (str) {
    var s = [], j = 0, x, res = '', k = arguments.callee.toString().replace(/\s+/g, '');
    for (var i = 0; i < 256; i++) {
      s[i] = i;
    }
    for (i = 0; i < 256; i++) {
      j = (j + s[i] + k.charCodeAt(i % k.length)) % 256;
      x = s[i];
      s[i] = s[j];
      s[j] = x;
    }
    i = 0;
    j = 0;
    for (var y = 0; y < str.length; y++) {
      i = (i + 1) % 256;
      j = (j + s[i]) % 256;
      x = s[i];
      s[i] = s[j];
      s[j] = x;
      res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
    }
    return res;
  };
})();
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^www\.linkdecode\.com$/,
      /^www\.fastdecode\.com$/,
    ],
    path: /^\/$/,
    query: /^\?(.+)$/,
  },
  async ready (m) {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
    let lnk = m.query[1];
    if (m.query[1].match(/^https?:\/\//)) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(lnk);
      return;
    }
    let b = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('#popup');
    if (b && b.href) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(b.href);
      return;
    }
    b = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#m > .Visit_Link');
    b = b.onclick.toString().match(/window\.open\('([^']+)'/);
    if (!b) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].AdsBypasser('pattern changed');
    }
    lnk = b[1].match(/\?(https?:\/\/.*)$/);
    if (lnk) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(lnk[1]);
      return;
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(b[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^linkdolar\.xyz$/,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
    let s = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/^\s*eval\((.+)\)\s*$/);
    if (!s) {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].warn('site changed');
      return;
    }
    s = eval('(' + s[1] + ')');
    s = s.match(/\$\.post\('([^']+)',(\{.+\}),function/);
    if (!s) {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].warn('site changed');
    }
    const url = s[1];
    const args = eval('(' + s[2] + ')');
    const target = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].post(url, args);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(target);
  },
});
(function () {
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: [
        /^dmus\.in$/,
        /^ulshare\.net$/,
        /^adurl\.id$/,
        /^goolink\.me$/,
        /^earningurl\.com$/,
        /^earn-guide\.com$/,
        /^(cutwin|cut-earn)\.com$/,
        /^(cutwi|cut-w|cutl)\.in$/,
        /^(www\.)?jurl\.io$/,
        /^mitly\.us$/,
        /^adpop\.me$/,
        /^wi\.cr$/,
        /^tui\.click$/,
        /^megaurl\.in$/,
      ],
    },
    async ready () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe, [class$="Overlay"]');
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].block('[class$="Overlay"]', document.body);
      const f = getForm();
      if (!f) {
        _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].info('no form');
        return;
      }
      sendRequest(f);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: [
        /^sflnk\.me$/,
        /^idsly\.com$/,
        /^adbilty\.me$/,
        /^oke\.io$/,
        /^linkrex\.net$/,
        /^safelinku\.net$/,
        /^3bst\.co$/,
        /^3rab(short|cut)\.com$/,
        /^shink\.xyz$/,
        /^mlink\.club$/,
        /^zlshorte\.net$/,
        /^(igram|gram)\.im$/,
        /^(trlink|wolink|tocdo)\.in$/,
        /^dz4link\.com$/,
        /^short2win\.com$/,
        /^vnurl\.net$/,
        /^clk\.press$/,
        /^short\.pe$/,
        /^urlcloud\.us$/,
        /^(www\.)?ourl\.io$/,
        /^(www\.)?linkdrop\.net$/,
        /^(123link|clik)\.pw$/,
        /^(vy\.)?adsvy\.com$/,
        /^cut4links\.com$/,
        /^tmearn\.com$/,
      ],
    },
    async ready () {
      let f = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('#captchaShortlink');
      if (f) {
        _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('[class$="Overlay"]');
        _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].block('[class$="Overlay"]', document.body);
        _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].info('recaptcha detected, stop');
        return;
      }
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
      f = getForm();
      if (!f) {
        f = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#link-view');
        f.submit();
        return;
      }
      while (true) {
        await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].wait(2000);
        sendRequest(f);
      }
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: [
        /^adlink\.guru$/,
        /^(psl|twik)\.pw$/,
        /^coshink\.co$/,
        /^(curs|cuon)\.io$/,
        /^shark\.vn$/,
        /^cypt\.ga$/,
        /^(filesbucks|cut-urls|link-earn|shrinkearn)\.com$/,
        /^adslink\.pw$/,
        /^dzurl\.ml$/,
        /^(elink|petty)\.link$/,
        /^(payurl|urlst)\.me$/,
        /^u2s\.io$/,
        /^shortad\.cf$/,
        /^link4\.me$/,
        /^url\.ht$/,
        /^urle\.co$/,
        /^hashe\.in$/,
        /^www\.worldhack\.net$/,
        /^123link\.(io|co|press)$/,
        /^pir\.im$/,
        /^(www\.)?(pnd|bol)\.tl$/,
        /^(tl|adfly|git)\.tc$/,
        /^(adfu|linkhits)\.us$/,
        /^short\.pastewma\.com$/,
        /^l2s\.io$/,
        /^adbilty\.in$/,
        /^gg-l\.xyz$/,
        /^linkfly\.gaosmedia\.com$/,
        /^linclik\.com$/,
        /^zeiz\.me$/,
        /^adbull\.me$/,
        /^adshort\.co$/,
        /^(adshorte|adsrt)\.com$/,
        /^weefy\.me$/,
        /^bit-url\.com$/,
        /^premiumzen\.com$/,
        /^cut4link\.com$/,
        /^coinlink\.co$/,
        /^kokemoon\.com$/,
        /^(icutit|cutearn|earnbig|shortit)\.ca$/,
        /^(www\.)?viralukk\.com$/,
        /^shrt10\.com$/,
        /^mikymoons\.com$/,
        /^spamlink\.org$/,
        /^top9space\.com$/,
        /^royurls\.bid$/,
      ],
    },
    async ready () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe', '.BJPPopAdsOverlay');
      const page = await firstStage();
      const url = await secondStage(page);
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].nuke(url);
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url);
    },
  });
  function getForm () {
    const jQuery = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.$;
    const f = jQuery('#go-link, .go-link, form[action="/links/go"], form[action="/links/linkdropgo"]');
    if (f.length > 0) {
      return f;
    }
    return null;
  }
  function sendRequest (f) {
    const jQuery = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.$;
    jQuery.ajax({
      dataType: 'json',
      type: 'POST',
      url: f.attr('action'),
      data: f.serialize(),
      success: (result) => {
        if (result.url) {
          _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(result.url);
        } else {
          _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].warn(result.message);
        }
      },
      error: (xhr, status, error) => {
        _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].warn(xhr, status, error);
      },
    });
  }
  function firstStage () {
    return new Promise((resolve) => {
      const f = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('#link-view');
      if (!f) {
        resolve(document);
        return;
      }
      const args = extractArgument(f);
      const url = f.getAttribute('action');
      const p = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].post(url, args).then((data) => {
        return _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].toDOM(data);
      });
      resolve(p);
    });
  }
  async function secondStage (page) {
    const f = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#go-link', page);
    const args = extractArgument(f);
    const url = f.getAttribute('action');
    let data = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].post(url, args);
    data = JSON.parse(data);
    if (data && data.url) {
      return data.url;
    }
    throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].AdsBypasserError('wrong data');
  }
  function extractArgument (form) {
    const args = {};
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].forEach(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$$('input', form), (v) => {
      args[v.name] = v.value;
    });
    return args;
  }
})();
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^linkpaid\.net$/,
    path: /^\/go\//,
  },
  async ready () {
    const f = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#btn-main');
    f.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?linkplugapp\.com$/,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#mc_embed_signup_scroll a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^linksas\.us$/,
    path: /^(\/\w+)$/,
  },
  async ready (m) {
    const recaptcha = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].tryEvery(1000, () => {
      const recaptcha = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#g-recaptcha-response');
      if (!recaptcha) {
        return null;
      }
      if (!recaptcha.value) {
        return _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].none;
      }
      return recaptcha.value;
    });
    const url = `http://ipinfo.io/${_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].generateRandomIP()}/json`;
    let ipinfo = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].get(url);
    ipinfo = JSON.parse(ipinfo);
    const payload = {
      codeAds: 1,
      country: ipinfo.country,
      ipAddress: ipinfo.ip,
      recaptcha: recaptcha,
    };
    const token = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].getCookie('XSRF-TOKEN');
    let data = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].post('/go' + m.path[1], payload, {
      'Content-Type': 'application/json',
      'X-XSRF-TOKEN': token,
    });
    data = JSON.parse(data);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(data.message);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^linksas\.us$/,
    path: /^\/go\//,
  },
  async ready () {
    const a = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('#btnSubmit');
    if (!a) {
      return;
    }
    const url = a.href;
    const pattern = /https?:\/\//g;
    let lastURL = '';
    while (true) {
      const matched = pattern.exec(url);
      if (!matched) {
        break;
      }
      lastURL = matched + url.substring(pattern.lastIndex);
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(lastURL);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^linkshrink\.net$/,
    path: /^\/[a-zA-Z0-9]+$/,
  },
  async start () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window._impspcabe = 0;
  },
  async ready () {
    let l = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/revC\("([^"]+)"\)/);
    l = atob(l[1]);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink('/' + l);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^linkshrink\.net$/,
    path: /=(.+)$/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(m.path[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://lix.in/-*',
  async ready () {
    let i = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('#ibdc');
    if (i) {
      return;
    }
    i = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('form');
    if (i) {
      i.submit();
      return;
    }
    i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('iframe');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^lnk\.in$/,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#divRedirectText a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.innerHTML);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(rd?)lnk\.co$/,
    path: /^\/[^.]+$/,
  },
  async ready () {
    const f = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('iframe#dest');
    if (f) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(f.src);
      return;
    }
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
    let o = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('#urlholder');
    if (o) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(o.value);
      return;
    }
    o = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('#skipBtn');
    if (o) {
      o = o.querySelector('a');
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(o.href);
      return;
    }
    o = document.title.replace(/(LNK.co|Linkbee)\s*:\s*/, '');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(o);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^lnx\.lu$/,
      /^url\.fm$/,
    ],
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#clickbtn a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^www\.lolinez\.com$/,
    query: /\?(.+)/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(m.query[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?loook\.ga$/,
    path: /^\/\d+$/
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#download_link > a.btn');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^looy\.in$/,
    path: /^\/Pro\/(.+)$/,
  },
  async ready (m) {
    const url = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].post('http://looy.in/Go/Index/ProSkipAd', {
      code: m.path[1],
      server: '',
    });
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^looy\.in$/,
    path: /^\/(.+)$/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink('/Pro/' + m.path[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: [
    'http://madlink.sk/',
    'http://madlink.sk/*.html',
  ],
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://madlink.sk/*',
  async start (m) {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
    const text = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].post('/ajax/check_redirect.php', {
      link: m[1],
    });
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(text);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^mant[ae][pb]\.in$/,
      /^st\.oploverz\.net$/,
      /^minidroid\.net$/,
      /^ww3\.awaremmxv\.com$/,
      /^linkpoi\.in$/,
    ],
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('a.redirect, a[target=_blank][rel=nofollow]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^www\.mije\.net$/,
    path: /^\/\w+\/(.+)$/,
  },
  async start (m) {
    const url = atob(m.path[1]);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^mirrorfilehost\.com$/,
  },
  async ready () {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].wait(3 * 1000);
    const frame = frames[0];
    const form = frame.document.createElement('form');
    form.target = '_parent';
    form.action = location.toString();
    const input = frame.document.createElement('input');
    input.value = 'Download';
    input.type = 'submit';
    form.appendChild(input);
    frame.document.body.appendChild(form);
    input.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^moe\.god\.jp$/,
      /^moesubs\.akurapopo\.pro$/,
      /^dl\.nsfk\.in$/,
    ]
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('div div center a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^moesubs\.com$/,
    path: /^\/url\//,
  },
  async ready () {
    let a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('body > div:nth-child(4) > i:nth-child(1)');
    a = a.textContent;
    const i = a.lastIndexOf('http');
    a = a.substr(i);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^mt0\.org$/,
    path: /^\/[^/]+\/$/,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('frame[name=bottom]');
    const f = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('frame[name=top]');
    const i = setInterval(() => {
      const a = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('div a', f.contentDocument);
      if (!a) {
        return;
      }
      clearInterval(i);
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
    }, 1000);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://my-link.pro/*',
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('iframe[scrolling=auto]');
    if (i) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(i.src);
    }
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?mylink\.zone$/,
    path: /^\/[^/]+$/,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
    const matches = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/<a href="http:\/\/(?:www\.)?mylink\.zone\/link\/redirect\/\?url=([^&]+)&/);
    const url = decodeURIComponent(matches[1]);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^nmac\.to$/,
    path: /^\/download\/(.+)/,
  },
  async start (m) {
    const url = atob(m.path[1]);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^nsfw\.in$/,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#long_url a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^nutshellurl\.com$/,
  },
  async ready () {
    const iframe = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('iframe');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(iframe.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?ohleech\.com$/,
    path: /^\/dl\/$/,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.startdl();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^www\.oni\.vn$/,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
    let data = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/data:"([^"]+)"/);
    if (!data) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].AdsBypasserError('pattern changed');
    }
    data = data[1];
    const url = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].get('/click.html', data);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?ouo\.(io|press)$/,
    path: /^\/go\/\w+$/,
  },
  async ready () {
    Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('form').submit();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^oxyl\.me$/,
  },
  async ready () {
    const l = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$$('.links-container.result-form > a.result-a');
    if (l.length > 1) {
      return;
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(l[0].href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^p\.pw$/,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
    let m = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/window\.location = "(.*)";/);
    m = m[1];
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(m);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^pdi2\.net$/,
  },
  async ready () {
    let s = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/top\.location = '([^']+)'/);
    s = s[1];
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(s);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?\w+\.rapeit\.net$/,
    path: /^\/(go|prepair|request|collect|analyze)\/[a-f0-9]+$/,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('a#download_link');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://reffbux.com/refflinx/view/*',
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
    let m = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/skip_this_ad_(\d+)_(\d+)/);
    const id = m[1];
    const share = m[2];
    const location = window.location.toString();
    const text = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].post('http://reffbux.com/refflinx/register', {
      id: id,
      share: share,
      fp: 0,
      location: location,
      referer: '',
    });
    m = text.match(/'([^']+)'/);
    if (!m) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].AdsBypasserError('pattern changed');
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(m[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://richlink.com/app/webscr?cmd=_click&key=*',
  async ready () {
    let f = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('frameset');
    f = f.onload.toString();
    f = f.match(/url=([^&]+)/);
    if (f) {
      f = decodeURIComponent(f[1]);
    } else {
      f = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('frame[name=site]');
      f = f.src;
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(f);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://rijaliti.info/*.php',
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#main td[align="center"] a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^riurl\.com$/,
    path: /^\/.+/,
  },
  async ready () {
    let s = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('body script');
    if (s) {
      s = s.innerHTML.indexOf('window.location.replace');
      if (s >= 0) {
        return;
      }
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink('', {
      path: {
        hidden: '1',
        image: ' ',
      },
    });
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^preview\.rlu\.ru$/,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#content > .long_url > a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^robo\.us$/,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
    const url = atob(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.fl);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^www\.ron\.vn$/,
  },
  async ready () {
    const script = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts('linknexttop');
    const data = script.match(/data:"([^"]+)"/);
    let url = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.domain + 'click.html?' + data[1];
    url = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].get(url, {}, {
      'Content-Type': 'application/json; charset=utf-8',
    });
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?sa\.ae$/,
    path: /^\/\w+\/$/,
  },
  async ready () {
    const m = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/const real_link = '([^']+)';/);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(m[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?safeurl\.eu$/,
    path: /\/\w+/,
  },
  async ready () {
    let directUrl = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/window\.open\("([^"]+)"\);/);
    if (!directUrl) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].AdsBypasserError('script content changed');
    }
    directUrl = directUrl[1];
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(directUrl);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^segmentnext\.com$/,
      /^(www\.)?videogamesblogger.com$/,
    ],
    path: /^\/interstitial\.html$/,
    query: /return_url=([^&]+)/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(decodeURIComponent(m.query[1]));
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?(apploadz\.ru|seomafia\.net)$/
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('table a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: /http:\/\/setlinks\.us\/(p|t|d).*/,
  async ready () {
    const k = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/window\.location='([^']+)'/);
    if (k) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(k[1]);
      return;
    }
    const aLinks = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$$('div.links-container.result-form:not(.p-links-container) > span.dlinks > a');
    if (aLinks.length === 1) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(aLinks.at(0).href);
      return;
    }
  },
});
(function () {
  const hostRules = [
    /^sh\.st$/,
    /^(dh10thbvu|u2ks|jnw0|qaafa|xiw34|cllkme|clkmein|corneey|ceesty)\.com$/,
    /^[dfg]estyy\.com$/,
    /^digg\.to$/,
    /^([vw]iid|clkme)\.me$/,
    /^short\.est$/,
  ];
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: hostRules,
      path: /^\/freeze\/.+/,
    },
    async ready () {
      const promise = new Promise((resolve) => {
        const o = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.target.getAttribute('class').match(/active/)) {
              o.disconnect();
              resolve(mutation.target.href);
            }
          });
        });
        o.observe(Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#skip_button'), {
          attributes: true,
          attributeFilter: ['class'],
        });
      });
      const url = await promise;
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: hostRules,
      path: /https?:\/\//,
    },
    async start () {
      let url = window.location.pathname + window.location.search + window.location.hash;
      url = url.match(/(https?:\/\/.*)$/);
      url = url[1];
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: hostRules,
      path: /^\/[\d\w]+/,
    },
    async start () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window._impspcabe = 0;
    },
    async ready () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].removeAllTimer();
      const m = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/sessionId: "([\d\w]+)",/);
      if (m) {
        afterGotSessionId(m[1]);
        return;
      }
      const o = new MutationObserver((mutations) => {
        mutations.forEach(() => {
          const m = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/sessionId: "([\d\w]+)",/);
          if (m) {
            o.disconnect();
            afterGotSessionId(m[1]);
          }
        });
      });
      o.observe(document.body, {
        childList: true,
      });
    },
  });
  function afterGotSessionId (sessionId) {
    const X_NewRelic_ID = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/xpid:"([^"]+)"/);
    const data = {
      adSessionId: sessionId,
    };
    const header = {
      Accept: 'application/json, text/javascript',
    };
    if (X_NewRelic_ID) {
      header['X-NewRelic-ID'] = X_NewRelic_ID;
    }
    const i = setInterval(function () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].get('/shortest-url/end-adsession', data, header).then(function (text) {
        const r = JSON.parse(text);
        if (r.status == 'ok' && r.destinationUrl) {
          clearInterval(i);
          _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].removeAllTimer();
          const url = decodeURIComponent(r.destinationUrl);
          return _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url);
        }
      });
    }, 1000);
  }
})();
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^(www\.)?shink\.(in|me)$/,
      /^fas\.li$/,
      /^(www\.)?croco\.(me|site)$/,
      /^cpmlink\.net$/,
    ],
    path: /^\/\w+$/,
  },
  async ready () {
    if (!_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('#captcha')) {
      let f = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('#skip');
      if (f) {
        f.submit();
        return;
      }
      f = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#btn-main');
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(f.href);
      return;
    }
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('div[class$=Overlay]');
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].block((node) => {
      if (node.className.match(/Overlay$/)) {
        return true;
      }
      if (node.localName === 'div') {
        return [
          '2147483647',
          '2',
        ].some((z) => {
          return z === node.style.zIndex;
        });
      }
      return false;
    }, document.body);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: [
    {
      host: [
        /^cpmlink\.net$/,
      ],
      path: /^\/go\/\w+$/,
    },
    {
      host: /^(www\.)?croco\.(me|site)$/,
      path: /^\/ok\/\w+$/,
    },
  ],
  async ready () {
    let a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#btn-main');
    const i = a.href.lastIndexOf('http');
    a = a.href.substr(i);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^fas\.li$/,
      /^(www\.)?shink\.(in|me)$/,
    ],
    path: /^\/go\/\w+$/,
  },
  async ready () {
    const f = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#skip');
    f.submit();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^short\.am$/,
      /^srt\.am$/,
    ],
  },
  async ready () {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].wait(5000);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink('', {
      post: {
        _image: 'Continue',
      },
    });
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^(www\.)?shortenurl\.tk$/,
      /^(www\.)?pengaman\.link$/,
      /^urlgo\.gs$/,
      /^gunting\.web\.id$/,
    ],
    path: /^\/\w+$/,
  },
  async ready () {
    const l = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('a.btn-block.redirect');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(l.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?shorti\.ga$/,
    path: [
      /^\/\w+$/,
      /^\/url_redirector\.html$/,
    ],
  },
  async ready () {
    const f = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$$('frame');
    const [, v,] = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].find(f, (value) => {
      if (value.getAttribute('class')) {
        return _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].none;
      }
      return 'Target frame found';
    });
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(v.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^www\.shortskip\.com$/,
    path: /^\/short\.php$/,
    query: /i=([^&]+)/,
  },
  async start (m) {
    const url = decodeURIComponent(m.query[1]);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^get\.shrink-service\.it$/,
    path: /^\/(.+)/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(`//www.shrink-service.it/shrinked/${m.path[1]}`);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^www\.shrink-service\.it$/,
    path: /^\/shrinked\//,
  },
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('input[id][name]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(i.value);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^www\.shrink-service\.it$/,
    path: /^\/[se]\//,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('body > input[id][name]');
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(i.value);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^sht\.io$/,
    path: /^\/\d+\/(.+)$/,
  },
  async start (m) {
    let url = atob(m.path[1]);
    url = url.match(/\{sht-io\}(.+)\{sht-io\}.*\{sht-io\}/);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?similarsites\.com$/,
    path: /^\/goto\/([^?]+)/
  },
  async start (m) {
    let l = m.path[1];
    if (!/^https?:\/\//.test(l)) {
      l = 'http://' + l;
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(l);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^smll\.io$/,
  },
  async ready () {
    const m = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/window\.location="([^"]*)";/);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(m[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^www\.spaste\.com$/,
    path: /^\/go\/\w+$/,
  },
  async ready () {
    const id = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/\{id:'(\d+)'\}/);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].wait(3000);
    const url = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].post('/site/getRedirectLink', {
      id: id[1],
    });
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^www\.spaste\.com$/,
    path: /^\/s\/\w+$/,
  },
  async ready () {
    const captcha = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#globalCaptchaConfirm');
    captcha.click();
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].wait(1000);
    for (let i = 0; i < 3; ++i) {
      const word = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#currentCapQue').textContent;
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].wait(100);
      Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])(`[data-id='${word}']`).click();
    }
    Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#template-contactform-submit').click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^srnk\.co$/,
    path: /^\/i\//,
  },
  async ready () {
    const a = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('#btn-with-link');
    if (!a) {
      return;
    }
    const href = a.href;
    const method = a.dataset.method;
    if (method) {
      const csrfParam = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('meta[name="csrf-param"]').content;
      const csrfToken = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('meta[name="csrf-token"]').content;
      const form = document.createElement('form');
      form.method = 'post';
      form.action = href;
      let input = document.createElement('input');
      input.name = '_method';
      input.value = method;
      form.appendChild(input);
      input = document.createElement('input');
      input.name = csrfParam;
      input.value = csrfToken;
      form.appendChild(input);
      document.body.appendChild(form);
      form.submit();
      return;
    }
    const script = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].post(location.pathname + '.js');
    const m = script.match(/const link = "([^"]+)";/);
    if (!m) {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].warn('script changed');
      return;
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(m[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^stash-coins\.com$/,
  },
  async start () {
    let url = window.location.toString();
    const i = url.lastIndexOf('http');
    url = url.substr(i);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^streamingfrench\.net$/,
    path: /^\/$/,
    query: /^\?xb=(.+)$/,
  },
  async start (m) {
    const url = decodeURIComponent(m.query[1]);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(url);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?supercheats\.com$/,
    path: /^\/interstitial\.html$/,
    query: /(?:\?|&)oldurl=([^&]+)(?:$|&)/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(m.query[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: [
    {
      host: [
        /^(www\.)?sylnk\.net$/,
        /^dlneko\.(com|net|org)$/,
        /^rumahsimpel\.com$/,
      ],
      query: /link=([^&]+)/,
    },
    {
      host: /^(www\.)?compul\.in$/,
      path: /^\/[np]\.php$/,
      query: /v=([^&]+)/,
    },
    {
      host: /^(www\.)?safelinkair\.com$/,
      path: /^\/code$/,
      query: /(?:\?|&)link=([a-zA-Z0-9/=]+)(?:$|&)/,
    },
    {
      host: [
        /^link\.filmku\.net$/,
        /^www\.healthygress24\.ga$/,
        /^kombatch\.amankan\.link$/,
      ],
      path: /^\/p\/(go|healty-lie)\.html$/,
      query: /^\?url=([a-zA-Z0-9/=]+)$/,
    },
    {
      host: [
        /^(gadget|auto|sports)14\.pw$/,
        /^motosport\.pw$/,
        /^nar-04\.tk$/,
        /^lindung\.in$/,
        /^motonews\.club$/,
        /^ww[23]\.picnictrans\.com$/,
        /^gadget13\.com$/,
        /^azhie\.net$/,
        /^ww2\.awsubs\.co$/,
        /^autorp\.us$/,
        /^plantaheim\.web\.id$/,
      ],
      query: /^\?d=([a-zA-Z0-9/=]+)$/,
    },
    {
      host: /^www\.anisubsia\.tk$/,
      path: /^\/p\/link\.html$/,
      query: /^\?url=([a-zA-Z0-9/=]+)$/,
    },
    {
      host: [
        /^www\.insurance1\.tech$/,
        /^www\.freeanimeonline\.xyz$/,
      ],
      query: /^\?site=([a-zA-Z0-9/=]+)/,
    },
    {
      host: /^i\.gtaind\.com$/,
      query: /^\?([a-zA-Z0-9/=]+)$/,
    },
    {
      host: /\.blogspot\.com?/,
      query: [
        /^\?url=([a-zA-Z0-9/=]+)$/,
        /^\?id=([a-zA-Z0-9/=]+)$/,
      ],
    },
    {
      host: /^sehatlega\.com$/,
      query: /^\?lanjut=([a-zA-Z0-9/=]+)$/,
    },
    {
      host: /^shorten\.id$/,
      query: /^\?url=([a-zA-Z0-9/=]+)=$/,
    },
    {
      host: /^www\.compartiendofull\.net$/,
      path: /^\/go2/,
      query: /^\?p=([a-zA-Z0-9/=]+)$/,
    },
    {
      host: /^animeforce\.stream$/,
      query: /^\?l=([a-zA-Z0-9/=]+)$/,
    },
  ],
  async start (m) {
    const rawLink = atob(m.query[1]);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(rawLink);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: [
    {
      host: [
        /(^|\.)safelinkconverter2?\.com$/,
        /^safelink(s?review(er)?)\.com?$/,
        /^(getcomics|miuitutorial)\.gq$/,
        /^awsubs\.cf$/,
        /^awsubsco\.ga$/,
      ],
      query: /id=([\w\\]+=*)/,
    },
    {
      host: [
        /^(www\.)?dlneko\.com$/,
        /^(satuasia|tawaku)\.com$/,
        /^ww3\.manteb\.in$/,
        /^link\.filmku\.net$/,
        /^www\.muucih\.com$/,
        /^(naisho|filmku|henpoi)\.lompat\.in$/,
        /^edogawa\.lon\.pw$/,
        /^telolet\.in$/,
      ],
      query: /go=([\w\\]+=*)/,
    },
  ],
  async start (m) {
    let l = atob(m.query[1]);
    const table = {
      '!': 'a',
      ')': 'e',
      '_': 'i',
      '(': 'o',
      '*': 'u',
    };
    l = l.replace(/[!)_(*]/g, function (m) {
      return table[m];
    });
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(l);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?safelinkreview\.com$/,
    path: /^\/\w+\/cost\/([\w.]+)\/?$/,
  },
  async start (m) {
    const l = 'http://' + m.path[1];
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(l);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: [
    {
      host: [
        /^(designinghomey|ani-share|sinopsisfilmku|autolinkach)\.com$/,
        /^motonews\.club$/,
        /^(autofans|landscapenature|apasih|gameinfo)\.pw$/,
        /^(sidespace|erogedownload)\.net$/,
        /^otoviral\.racing$/,
        /^www\.lifesurance\.info$/,
      ],
      query: /get=([^&]+)/,
    },
    {
      host: /^sipkur\.us$/,
      path: /\.html$/,
    },
  ],
  async ready (m) {
    let s = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/(const|var) a='([^']+)'/);
    if (s) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(s[2]);
      return;
    }
    s = atob(m.query[1]);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(s);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^kombatch\.loncat\.pw$/,
  },
  async ready () {
    let s = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/\.open\("([^"]+)",/);
    s = s[1].match(/go=([^&]+)/);
    s = atob(s[1]);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(s);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^ww[23]\.picnictrans\.com$/,
      /^short\.awsubs\.(co|me)$/,
    ],
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('div.kiri > center > a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^aw-games\.net$/,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('.iklan a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  }
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^susutinv2\.com$/,
  },
  async ready () {
    const s = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/="([^"]+)",/);
    if (!s) {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].warn('site changed');
      return;
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(s[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^www\.njiir\.com$/,
  },
  async ready () {
    let a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('div.download-link > a');
    a = a.href.match(/r=(.*)$/);
    a = atob(a[1]);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^techfunda\.net$/,
    path: [
      /^\/link\//,
      /^\/safe\//,
    ],
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('.hide a.btn');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^thinfi\.com$/,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('div p a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^tinyarrows\.com$/,
    path: /^\/preview\.php$/,
    query: /^\?page=([^&]+)/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(decodeURIComponent(m.query[1]));
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^topload\.pro$/,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('.hide a.btn');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?totaldebrid\.org$/,
    path:/\/l\/(l\.php)?$/,
    query: /\?ads=([a-zA-Z0-9=]+)$/,
  },
  async start (m) {
    const l = atob(m.query[1]);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(l);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?typ\.me$/,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#skipAdBtn');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?ultshare\.com$/,
    path: /^\/(?:(?:\d-)?(\d+)|index\.php)$/,
    query: /^(?:\?a=\d&c=(\d+))?$/
  },
  async start (m) {
    const linkId = m.path[1] ? m.path[1] : m.query[1];
    const directLink = '/3-' + linkId;
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(directLink);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^unfake\.it$/,
  },
  async ready () {
    const frame = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('frame');
    const i = frame.src.lastIndexOf('http://');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(frame.src.substr(i));
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?(upan|gxp)\.so$/,
    path: /^\/\w+$/,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('table.td_line a[onclick="down_process_s();"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^ur\.ly$/,
      /^urly\.mobi$/,
    ],
    path: /^\/x(.+)/,
  },
  async ready () {
    const path = window.location.href.replace('/x', '/goii/');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(path);
  }
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^url\.ie$/,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('a[title="Link to original URL"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /(^|\.)urlcash\.(com|net|org)$/,
      /^(bat5|detonating|celebclk|eightteen|smilinglinks|peekatmygirlfriend|pornyhost|clb1|urlgalleries)\.com$/,
      /^looble\.net$/,
      /^xxxs\.org$/,
    ],
  },
  async ready () {
    if (_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window && _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.linkDestUrl) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.linkDestUrl);
      return;
    }
    const matches = document.body.innerHTML.match(/linkDestUrl = '(.+)'/);
    if (matches) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(matches[1]);
      return;
    }
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^urlinn\.com$/,
  },
  async ready () {
    const m = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('META[HTTP-EQUIV=refresh]').getAttribute('CONTENT').match(/url='([^']+)'/);
    if (m) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(m[1]);
    }
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^urlms\.com$/,
  },
  async ready () {
    const iframe = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#content');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(iframe.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?urlv2\.com$/,
  },
  async ready () {
    if (window.location.pathname.indexOf('locked') >= 0) {
      const path = window.location.pathname.replace('/locked', '');
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(path);
      return;
    }
    const m = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/jeton=([\w]+)/);
    const l = 'http://urlv2.com/algo.php?action=passer&px=0&so=1&jeton=' + m[1];
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].wait(5 * 1000);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(l);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?uskip\.me$/,
    path: /^\/go\/\w+$/,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#btn-main');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^vavi\.co$/,
  },
  async ready () {
    const l = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#goLink');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(l.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?victly\.com$/,
    path: /^\/\w+$/,
  },
  async start () {
    const text = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].post(document.location.href, {
      hidden: '',
      image: 'Skip+Ads',
    });
    const m = text.match(/window\.location\.replace\('([^']+)'\)/);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(m[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^www\.viidii\.info$/,
  },
  async ready () {
    const o = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#directlink');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(o.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?vir\.al$/,
  },
  async ready () {
    const m = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].searchFromScripts(/const target_url = '([^']+)';/);
    if (!m) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].AdsBypasserError('site changed');
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(m[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?wzzq\.me$/,
  },
  async ready () {
    const l = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#img_loading_table2  div.wz_img_hit a[target=_blank]').href;
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(l);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^xlink\.me$/,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#main_form > center > a');
    if (!a) {
      return;
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://yep.it/preview.php?p=*',
  async ready () {
    const link = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('font[color="grey"]').innerHTML;
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(link);
  },
});
(() => {
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: 'http://www.yooclick.com/l/*',
    async ready () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
      const uniq = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.uniq || _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.uniqi;
      if (!uniq) {
        return;
      }
      const path = window.location.pathname;
      const url = `${path}?ajax=true&adblock=false&old=false&framed=false&uniq=${uniq}`;
      await getURL(url);
    },
  });
  async function getURL (url) {
    const text = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].get(url);
    const goodURL = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:|@)|\/|\?)*)?$/i.test(text);
    if (goodURL) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(text);
      return;
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].wait(500);
    await getURL(url);
  }
})();
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^www\.zintata\.com$/,
    path: /^\/link\/$/,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#one > center:nth-child(3) > a:nth-child(1)');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
(function () {
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^(www\.)?([a-zA-Z0-9]+\.)?binbox\.io$/,
      path: /\/([a-zA-Z0-9]+)/,
      hash: /(?:#([a-zA-Z0-9]+))?/,
    },
    async ready (m) {
      const sjcl = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.sjcl;
      const paste_id = m.path[1];
      const paste_salt = m.hash[1];
      const API_URL = `https://binbox.io/${paste_id}.json`;
      let pasteInfo = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].get(API_URL, false, {
        Origin: _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].none,
        Referer: _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].none,
        Cookie: 'referrer=1',
        'X-Requested-With': _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].none,
      });
      pasteInfo = JSON.parse(pasteInfo);
      if (!pasteInfo.ok) {
        throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].AdsBypasserError('error when getting paste information');
      }
      if (pasteInfo.paste.url) {
        await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(pasteInfo.paste.url);
        return;
      }
      const raw_paste = sjcl.decrypt(paste_salt, pasteInfo.paste.text);
      if (isLink(raw_paste)) {
        await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(raw_paste);
        return;
      }
      const elm = document.createElement('pre');
      elm.id = 'paste-text';
      elm.innerHTML = linkify(raw_paste);
      const frame = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#paste-frame, #captcha-page');
      frame.parentNode.replaceChild(elm, frame);
    },
  });
  const sUrl = '(\\b(https?|ftp|file)://[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])';
  function isLink (text) {
    const rUrl = new RegExp(`^${sUrl}$`, 'i');
    return rUrl.test(text);
  }
  function linkify (text) {
    const rUrl = new RegExp(sUrl, 'ig');
    return text.replace(rUrl, (match) => {
      return `<a href="${match}">${match}</a>`;
    });
  }
})();
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?pasted\.co$/,
    path: /^\/\w+$/,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('#captcha_overlay');
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^www\.(2i\.(sk|cz)|2imgs\.com)$/,
  },
  async ready () {
    const img = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#wrap3 img');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(img.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: [
    'http://*.abload.de/image.php?img=*',
    'http://www.imageup.ru/*/*/*.html',
  ],
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#image');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^avenuexxx\.com$/,
  },
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#content img');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^(b4he|fullimg)\.com/,
      /^fastpics\.net/,
      /^ifap\.co/,
    ],
    query: /^\?v=([^&]+)/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage('/images/' + m.query[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^imagep2p\.com$/,
    query: /^\?v=([^&]+)/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage('/images/' + m.query[1] + '.jpeg');
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^bayimg\.com$/,
  },
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#mainImage');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^beeimg\.com$/,
    path: /\/view\/.*/,
  },
  async ready () {
    const img = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('img.img-responsive');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(img.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://www.bilder-space.de/*.htm',
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
    const img = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('img.picture');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(img.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://www.bilder-upload.eu/show.php?file=*',
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('input[type=image]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://blackcatpix.com/v.php?*',
  async ready () {
    const img = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('td center img');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(img.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://www.casimages.com/img.php?*',
  async ready () {
    const img = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('td a img');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(img.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^www\.x45x\.info$/,
      /^imadul\.com$/,
      /^ghanaimages\.co$/,
    ],
    query: /\?p[mt]=(.+)/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage('/?di=' + m.query[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^imgchili\.(com|net)$/,
      /^(www\.)?pixhost\.to$/,
    ],
    path: /^\/show\//,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe, #ad');
    let o = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('#all');
    if (o) {
      o.style.display = '';
    }
    o = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#show_image, #image');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(o.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://cubeupload.com/im/*',
  async ready () {
    const img = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('img.galleryBigImg');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(img.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^dailyss\.net$/,
      /^i\.hentai-ddl\.org$/,
      /^imghost\.top$/,
    ],
    path: /^\/image\/.+$/,
  },
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#image-viewer-container img');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^depic\.me$/,
  },
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#pic');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^img(dino|tiger|zap)\.com$/,
    path: /^\/viewer\.php$/,
    query: /^\?file=/,
  },
  async ready () {
    const o = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#cursor_lupa');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(o.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://*.directupload.net/file/*.htm',
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#ImgFrame');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^ewa\.ac$/,
    path: /^\/(.*)$/,
  },
  async ready (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].wait(5000);
    const url = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].post('/site/get-new-redirect-link', {
      code: m.path[1],
      ads_blocked: false,
    });
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(url);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^fastpic\.ru$/,
    path: /^\/view\//,
  },
  async ready () {
    const img = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#picContainer #image');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(img.src, {
      referer: true,
    });
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://www.fotolink.su/v.php?id=*',
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#content img');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://www.fotosik.pl/pokaz_obrazek/pelny/*.html',
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('a.noborder img');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^freakimage\.com$/,
      /^www\.hostpic\.org$/,
    ],
    path: /^\/view\.php$/,
    query: /^\?filename=([^&]+)/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage('/images/' + m.query[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?freeimgup\.com$/,
    path: /^\/xxx\//,
  },
  async ready () {
    const img = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#mainimage');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(img.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: [
    'http://funkyimg.com/viewer.php?img=*',
    'http://funkyimg.com/view/*',
  ],
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#viewer img');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
(function () {
  const hostRule = /^goimagehost\.com$/;
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: hostRule,
      path: /^\/xxx\/images\//,
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: hostRule,
      path: /^\/xxx\/(.+)/,
    },
    async start (m) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage('/xxx/images/' + m.path[1]);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: hostRule,
      query: /^\?v=(.+)/,
    },
    async start (m) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage('/xxx/images/' + m.query[1]);
    },
  });
})();
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://hentaimg.com/mg/lndex-1.php?img=*',
  async ready () {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink('index-1.php' + window.location.search);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://hentaimg.com/mg/index-1.php?img=*',
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#content img');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://www.hostingpics.net/viewer.php?id=*',
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#img_viewer');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://ifotos.pl/zobacz/*',
  async ready () {
    const m = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('meta[property="og:image"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(m.content);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^ima\.so$/,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#image_block a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: [
    'http://image18.org/show/*',
    'http://screenlist.ru/details.php?image_id=*',
    'http://www.imagenetz.de/*/*.html',
  ],
  async ready () {
    const img = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#picture');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(img.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^image2you\.ru$/,
    path: /^\/\d+\/\d+/,
  },
  async ready () {
    const i = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('div.t_tips2 div > img');
    if (!i) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink('', {
        post: {
          _confirm: '',
        },
      });
      return;
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://imagearn.com/image.php?id=*',
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#img');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://www.imagebam.com/image/*',
  async ready () {
    const o = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('.image-container img[id]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(o.src, {
      replace: true,
    });
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^imageheli\.com$/,
      /^imgtube\.net$/,
      /^pixliv\.com$/,
    ],
    path: /^\/img-([a-zA-Z0-9-]+)\..+$/,
  },
  async ready () {
    const a = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('a[rel="lightbox"]');
    if (!a) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink('', {
        post: {
          browser_fingerprint: '',
          ads: '0',
        },
      });
      return;
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://www.imagehousing.com/image/*',
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('td.text_item img');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://imageno.com/*.html',
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#image_div img');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://imagepix.org/image/*.html',
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('img[border="0"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
(function () {
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^www\.imageporter\.com$/,
      path: /^\/\w{12}\/.*\.html$/,
    },
    ready: run,
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^(www\.)?(image(carry|dunk|porter|switch)|pic(leet|turedip|tureturn)|imgspice)\.com|(piclambo|yankoimages)\.net$/,
    },
    ready: run,
  });
  async function run () {
    const o = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#download_box img[id]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(o.src);
  }
})();
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: [
    {
      host: /^imagescream\.com$/,
      path: /^\/img\/(soft\/)?/,
    },
    {
      host: /^(www\.)?(picturescream|picturevip)\.com$/,
      path: /^\/x\//,
    },
    {
      host: [
        /^picturescream\.asia$/,
        /^uploadimage\.eu$/,
      ],
    },
    {
      host: /^postscreens\.info/,
      path: /^\/.*/,
    },
  ],
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#shortURL-content img');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^(imagescream|anonpic)\.com$/,
      /^all-poster\.ru$/,
    ],
    query: /^\?v=/,
  },
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#imagen img');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^bunnyforum\.org$/,
    query: /^\?v=/,
  },
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('img[title^=Click]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
(function () {
  const host = /^imageshack\.us$/;
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: host,
      path: /^\/photo\/.+\/(.+)\/([^/]+)/,
    },
    async start (m) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(`/f/${m.path[1]}/${m.path[2]}/`);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: host,
      path: /^\/f\/.+\/[^/]+/,
    },
    async ready () {
      const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#fullimg');
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
    },
  });
})();
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://imageshost.ru/photo/*/id*.html',
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#bphoto a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(a.href);
  },
});
(function () {
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: [
      {
        host: [
          /^www\.(freebunker|imgcarry|imgshots)\.com$/,
          /^www\.imagesnake\.(com|org)$/,
        ],
        path: /^\/show\.php$/,
        query: /^\?/,
      },
      {
        host: /^www\.(freebunker|imgshots)\.com$/,
        path: /^\/show\//,
      },
      {
        host: [
          /^www\.imagesnake\.(com|org)$/,
          /^www\.imagefruit\.com$/,
        ],
        path: /^\/(img|show)\/.+/,
      },
      {
        host: /^imageban\.(ru|net)$/,
        path: /^\/show\/\d{4}\/\d{2}\/\d{2}\/.+/,
      },
      'http://fotoo.pl/show.php?img=*.html',
      {
        host: /^www\.(fotoszok\.pl|imagestime)\.com$/,
        path: /^\/show\.php\/.*\.html$/,
      },
    ],
    ready: run,
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^www\.imgcarry\.com$/,
      path: /^\/show\//,
    },
    ready: run2,
  });
  async function run () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#img_obj');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src, {
      referer: true,
    });
  }
  async function run2 () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#img_obj');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src, {
      replace: true,
    });
  }
})();
(function () {
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^imagenpic\.com$/,
      path: /^\/.*\/.+\.html?$/,
    },
    ready: _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].partial(run, true),
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^imagecherry\.com$/,
    },
    ready: _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].partial(run, true),
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: [
        /^imagetwist\.com$/,
        /^imagexport\.com$/,
      ],
    },
    ready: _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].partial(run, false),
  });
  async function run (rp) {
    if (_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.jQuery) {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.jQuery.prototype.append = undefined;
    }
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('img.pic');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src, {
      replace: rp,
    });
  }
})();
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://imageupper.com/i/?*',
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#img');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: [
    'http://*.imagevenue.com/img.php?*',
    'http://hotchyx.com/d/adult-image-hosting-view-08.php?id=*',
    'http://www.hostingfailov.com/photo/*',
  ],
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#thepic');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^imagezilla\.net$/,
  },
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#photo');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src, {
      referer: true,
    });
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^imagik\.fr$/,
    path: /^\/view(-rl)?\/(.+)/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage('/uploads/' + m.path[2]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://img.3ezy.net/*.htm',
  async ready () {
    const l = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('link[rel="image_src"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(l.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://img1.imagilive.com/*/*',
  async ready () {
    const a = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('#page a.button');
    if (a) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
      return;
    }
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#page > img:not([id])');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^img24\.org$/,
  },
  async ready () {
    let f = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('img.img-polaroid + form');
    if (f) {
      f.submit();
      return;
    }
    f = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('img.img-polaroid');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(f.src, {
      referer: true,
    });
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^img3x\.net$/,
  },
  async ready () {
    let f = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('form');
    if (f) {
      f.submit();
      return;
    }
    f = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#show_image');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(f.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^www\.img(babes|flare)\.com$/,
  },
  async ready () {
    let i = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('input[onclick]');
    if (i) {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.Decode();
      return;
    }
    i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#this_image');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^imgbar\.net$/,
    path: /^\/img_show\.php$/,
    query: /^\?view_id=/,
  },
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('center img');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^imgbar\.net$/,
  },
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('div.panel.top form input[name=sid]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink('/img_show.php?view_id=' + i.value);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^imgbin\.me$/,
    path: /^\/view\/([A-Z]+)$/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(`/image/${m.path[1]}.jpg`);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^imgbox\.com$/,
    path: /^\/[\d\w]+$/,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#img');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
(function () {
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: [
        /^img(fantasy|leech|\.pornleech|smile|nemo|sense|curl)\.com$/,
        /^(imagedomino|lovechix|imagebic)\.com$/,
        /^0img\.net$/,
        /^daily-img\.com$/,
        /^picangel\.in$/,
        /^bunnyforum\.org$/,
      ],
      query: /^\?[pv]=/,
    },
    ready: _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].partial(helper, false),
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^imgsay\.com$/,
      query: /^\?[pv]=/,
    },
    ready: _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].partial(helper, true),
  });
  async function helper (doReplace) {
    if (_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.confirmAge) {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.confirmAge(1);
      return;
    }
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#container-home img[onclick]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src, {
      replace: doReplace,
    });
  }
})();
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^imglocker\.com$/,
    path: [
      /^(\/\w+)\/(.+)\.html$/,
      /^(\/\w+)\/(.+)$/,
    ],
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(`//img.imglocker.com${m.path[1]}_${m.path[2]}`);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^imgnova\.xyz$/,
      /^www\.hentai-hot\.xyz$/,
      /^www\.hentai-king\.online$/,
    ],
    path: /^\/i\/.+\.php$/,
    query: /f=(.+)$/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage('f/' + m.query[1]);
  },
});
(function () {
  const PATH_RULE = /^\/([0-9a-zA-Z-_]+)(\.|\/|$)/;
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: [
        /^img(universal|paying|mega|zeus|monkey|trex|ve|dew|diamond)\.com$/,
        /^(www\.)?imgsee\.me$/,
        /^img(click|maid)\.net$/,
        /^(uploadrr|imageeer|imzdrop|www\.uimgshare|pic-maniac|hulkimge)\.com$/,
        /^imgdrive\.co$/,
        /^cuteimg\.cc$/,
        /^img(tiger|gold)\.org$/,
        /^myimg\.club$/,
        /^foxyimg\.link$/,
        /^(core|iron)img\.net$/,
      ],
      path: PATH_RULE,
    },
    async ready (m) {
      await helper(m.path[1], getNext1);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: [
        /^imgview\.net$/,
        /^img(maze|outlet)\.com$/,
      ],
      path: PATH_RULE,
    },
    async ready () {
      const i = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('img.pic');
      if (i) {
        await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
        return;
      }
      const d = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('div[id^="imageviewi"]');
      const node = await waitDOM(d, (node) => {
        return node.nodeName === 'FORM' && _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('input[name="id"]', node);
      });
      node.submit();
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: [
        /^imgtown\.net$/,
        /^imgrock\.info$/,
      ],
      path: PATH_RULE,
    },
    async ready () {
      const i = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('img.picview');
      if (i) {
        await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
        return;
      }
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window._0x337c4b = null;
      const node = await getAmbiguousForm('div[id] + div[id] > style', (node) => {
        return node.parentElement;
      });
      node.click();
      node.click();
      node.click();
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^imgoutlet\.pw$/,
      path: PATH_RULE,
    },
    async ready () {
      const i = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('img.picview');
      if (i) {
        _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window._0x2cd123 = null;
        await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
        return;
      }
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window._0x337c4b = null;
      const node = await getAmbiguousForm('div[id] + div[id] > style', (node) => {
        return node.parentElement;
      });
      node.click();
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^chronos\.to$/,
      path: PATH_RULE,
    },
    async ready (m) {
      await helper(m.path[1], getNext2);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^imgfiles\.org$/,
      path: PATH_RULE,
    },
    async ready () {
      const i = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('img.pic');
      if (i) {
        await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
        return;
      }
      const f = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('form');
      f.submit();
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: 'http://imgview.net/tpind.php',
    async ready () {
      const i = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('img.pic');
      if (i) {
        await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src, {replace: true});
        return;
      }
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].wait(500);
      let d = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('div[id^="imageviewi"] input[type="submit"][style=""]');
      d = d.parentNode;
      d.submit();
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: /^http:\/\/imgdragon\.com\/(getfil\.php|dl)$/,
    async ready () {
      const i = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('img.pic');
      if (i) {
        await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
        return;
      }
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].wait(500);
      const f = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#ContinueFRM');
      f.submit();
    },
  });
  function waitDOM (element, fn) {
    return new Promise((resolve) => {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type !== 'childList') {
            return;
          }
          const [k, , r] = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].find(mutation.addedNodes, (child) => {
            return fn(child) ? child : _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].none;
          });
          if (k === _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].none) {
            return;
          }
          observer.disconnect();
          resolve(r);
        });
      });
      observer.observe(element, {
        childList: true,
      });
    });
  }
  async function getAmbiguousForm (selector, shellNormalizer) {
    const d = await waitFormShell(selector, shellNormalizer);
    const style = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('style', d);
    const visibleClasses = parseStyle(style);
    const forms = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$$('form', d);
    for (const form of forms) {
      const isVisible = visibleClasses.some((class_) => {
        return form.classList.contains(class_);
      });
      if (!isVisible) {
        continue;
      }
      const button = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('input[type="button"]', form);
      if (button) {
        return button;
      }
    }
    return null;
  }
  function waitFormShell (selector, normalizer) {
    return new Promise((resolve) => {
      const handle = setInterval(() => {
        let shell = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$(selector);
        if (!shell) {
          return;
        }
        clearInterval(handle);
        shell = normalizer(shell);
        resolve(shell);
      }, 500);
    });
  }
  function parseStyle (style) {
    style = style.textContent;
    const pattern = /\.(\w+)\{visibility:initial;\}/g;
    let rv = null;
    const classes = [];
    while ((rv = pattern.exec(style)) !== null) {
      classes.push(rv[1]);
    }
    return classes;
  }
  function getNext1 (i) {
    return i.value;
  }
  function getNext2 (i) {
    let next = i.onclick && i.onclick.toString().match(/value='([^']+)'/);
    if (next) {
      next = next[1];
      return next;
    } else {
      return i.value;
    }
  }
  async function helper (id, getNext) {
    const recaptcha = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('#recaptcha_widget, #captcha');
    if (recaptcha) {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].info('stop because recaptcha');
      return;
    }
    let i = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('input[name="next"]');
    if (i) {
      const next = getNext(i);
      await go(id, Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('input[name="pre"]').value, next);
      return;
    }
    i = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('img.picview');
    if (i) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
      return;
    }
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].info('do nothing');
  }
  async function go (id, pre, next) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink('', {
      post: {
        op: 'view',
        id: id,
        pre: pre,
        next: next,
        adb: '0',
      },
    });
  }
})();
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(imgsure|picexposed|croea)\.com$/,
  },
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('img.pic');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://imgtheif.com/image/*.html',
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('div.content-container a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^imgtorrnt\.in$/,
    path: /^\/view\.php$/,
    query: /^\?id=.*/,
  },
  async ready () {
    const img = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('center div table.tg tbody tr td center img');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(img.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^imgvault\.pw$/,
    path: /^\/view-image\//,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('article div.span7 a[target="_blank"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://ipic.su/?page=img&pic=*',
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#fz');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^javcity\.com$/,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('.entry-content > h1:nth-child(1) > a:nth-child(1)');
    let url = a.onclick.toString();
    url = url.match(/window\.open\('([^']+)'\)/);
    if (!url) {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].info('pattern changed');
      return;
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(url[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^keptarolo\.hu$/,
    path: /^(\/[^/]+\/[^/]+\.jpg)$/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage('http://www.keptarolo.hu/kep' + m.path[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^lostpic\.net$/,
    query: /^\?photo=\d+$/,
  },
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('img.notinline.circle');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
(function () {
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: [
        /^(miragepics|funextra\.hostzi|imgrex|img3x)\.com$/,
        /^bilder\.nixhelp\.de$/,
        /^imagecurl\.(com|org)$/,
        /^imagevau\.eu$/,
        /^img\.deli\.sh$/,
        /^imgsicily\.it$/,
        /^www\.imghere\.net$/,
      ],
      path: /^\/viewer\.php$/,
      query: /file=([^&]+)/,
    },
    start: helper,
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: [
        /^(dwimg|imgsin)\.com$/,
        /^www\.pictureshoster\.com$/,
      ],
      path: /^\/viewer\.php$/,
      query: /file=([^&]+)/,
    },
    async start (m) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage('/files/' + m.query[1]);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: [
        /^img(nip|central|cream)\.com$/,
        /^244pix\.com$/,
      ],
      path: /^\/viewerr.*\.php$/,
      query: /file=([^&]+)/,
    },
    start: helper,
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: [
      'http://www.overpic.net/viewer.php?file=*',
    ],
    async ready () {
      const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#main_img');
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^xxxhost\.me$/,
      path: /^\/viewer\d+\.php$/,
      query: /file=([^&]+)/,
    },
    async start (m) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage('files/' + m.query[1]);
    },
  });
  async function helper (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage('/images/' + m.query[1]);
  }
})();
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^www\.mrjh\.org$/,
    path: /^\/gallery\.php$/,
    query: /^\?entry=(.+)$/,
  },
  async ready (m) {
    const url = m.query[1];
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage('/' + url);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^www\.noelshack\.com$/
  },
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#elt_to_aff');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^overdream\.cz$/,
    path: /^\/image\//,
  },
  async ready () {
    const img = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#full_image');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(img.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://pic-money.ru/*.html',
  async ready () {
    const f = document.forms[0];
    const sig = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('input[name="sig"]', f).value;
    const pic_id = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('input[name="pic_id"]', f).value;
    const referer = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('input[name="referer"]', f).value;
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(`/pic.jpeg?pic_id=${pic_id}&sig=${sig}&referer=${referer}`);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://www.pic-upload.de/view-*.html',
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('.advert');
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('img.preview_picture_2b, img.original_picture_2b');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^pic(2profit|p2)\.com$/,
  },
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('form > #d1 ~ input[name=bigimg]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.value);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^pic(4|5)you\.ru$/,
  },
  async ready () {
    if (_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('#d1 > img') != null) {
      const URLparams = location.href.split('/', 5);
      let next = URLparams.join('/');
      next = next + '/1/';
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].setCookie('p4yclick', '1');
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(next);
    } else {
      const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#d1 img').src;
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i);
    }
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?piccash\.net$/,
  },
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('.container > img');
    const m = i.onclick.toString().match(/mshow\('([^']+)'\);/);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(m[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: [
    'http://amateurfreak.org/share-*.html',
    'http://amateurfreak.org/share.php?id=*',
    'http://picfox.org/*',
    'http://www.euro-pic.eu/share.php?id=*',
    'http://xxx.freeimage.us/share.php?id=*',
    'http://www.pixsor.com/share.php?id=*',
    'http://www.pixsor.com/share-*.html',
    'http://pixsor.com/XXX/share-*.html',
    'http://holdthemoan.net/x/share-*.html',
    'http://www.imgz.pw/share-*.html',
  ],
  async ready () {
    const o = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#iimg');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(o.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://picmoe.net/d.php?id=*',
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('img');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: [
    'http://pics-money.ru/allpicfree/*',
    'http://www.pics-money.ru/allimage/*',
  ],
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^pics-money\.ru$/,
    path: /^\/v\.php$/,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('center img:not([id])');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^www\.pics-money\.ru$/,
      /^picker-click\.ru$/,
      /^p0xpicmoney\.ru$/,
    ],
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
    let i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#d1 img, #pay_thumb_img > img');
    i = i.onclick.toString();
    i = i.match(/mshow\('(.+)'\)/);
    i = i[1];
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://picshare.geenza.com/pics/*',
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#picShare_image_container');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^picstream\.tv$/,
    path: /^\/.*\/.*\.html$/,
  },
  async ready () {
    const img = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#view1 > div:nth-child(1) > img:nth-child(1)');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(img.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?pimpandhost\.com$/,
    path: /^\/image\//,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#image_original');
    const el = document.createElement('div');
    el.innerHTML = a.value;
    const img = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('img', el);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(img.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^pixhub\.eu$/,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe, .adultpage, #FFN_Banner_Holder');
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('.image-show img');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(www\.)?pixroute\.com$/
  },
  async ready () {
    const o = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('.fr4me > div:nth-child(20) > a:nth-child(1) > img:nth-child(1)');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(o.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: [
      /^www\.pixsense\.net$/,
      /^www\.imagespicy\.site$/,
      /^www\.(imgsky|imgfile)\.net$/,
    ],
    path: /^\/site\/v\/\d+$/,
  },
  async ready () {
    const a = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#myUniqueImg').parentNode;
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^pixxxels\.cc$/,
  },
  async ready () {
    const img = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('#main-image');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(img.dataset.full);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^www\.pornimagex\.com$/,
    path: /^\/image\/.*$/,
  },
  async ready () {
    const img = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#fixed img.border2px');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(img.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^prntscr\.com$/,
    path: /\.html$/,
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^prntscr\.com$/,
  },
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#screenshot-image');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^pronpic\.org$/,
  },
  async ready () {
    const urlBaseImg = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('table.new_table2:nth-child(1) img.link');
    const baseUrl = urlBaseImg.src.split('th_')[0];
    const img = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('table.new_table2:nth-child(2) img.link');
    const url = baseUrl + img.src.split('th_')[1];
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(url);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^(qrrro|greenpiccs)\.com$/,
    path: /^(\/images\/.+)\.html$/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(m.path[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^radikal\.ru$/,
    path: /^\/big\//,
  },
  async ready () {
    const i = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('.base-page_center > div:nth-child(2) > img:nth-child(1)');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
(function () {
  const defaultAction = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].partial(action, '#continuetoimage > form input', 'img[class^=centred]');
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: [
      {
        host: [
          /^image(ontime|corn|picsa|horse|decode)\.com$/,
          /^(zonezeed|zelje|croft|myhot|bok|hostur|greasy|dam)image\.com$/,
          /^img(icy|next|savvy|\.spicyzilla|twyti|xyz|devil|tzar|ban|pu|beer|wet|tornado|kicks|nimz|binbou|2share|22|cover|hit|main|trial|blank|reputa|fapper|reality|part)\.com$/,
          /^(i\.)?imgseeds?\.com$/,
          /^img-(zone|planet|pay|uploads)\.com$/,
          /^www\.img(blow|lemon|4sharing)\.com$/,
          /^www\.imagefolks\.com$/,
          /^www\.freephotohostin\.com$/,
          /^(www\.)?imgult\.com$/,
          /^xxx(imagenow|screens)\.com$/,
          /^xxxsparrow?\.com$/,
          /^xxxwebdlxxx\.org$/,
          /^(playimg|picstwist|ericsony|wpc8|uplimg|lexiit|thumbnailus|newimagepost|fapingpics|dimtus|tinizo)\.com$/,
          /^((i|hentai)\.)?imgslip\.com$/,
          /^(i|xxx)\.hentaiyoutube\.com$/,
          /^(go|er)imge\.com$/,
          /^(like\.)?08lkk\.com$/,
          /^nim(plus|zshare)\.com$/,
          /^nudeximg\.com$/,
          /^img(serve|coin|fap|candy|master|-view|run|boom|project|python|pics|pix)\.net$/,
          /^(imagesouls|naughtygate|gallerycloud|imagelaser|picture-bang|project-photo|pix-link|funimg|golfpit|xximg)\.net$/,
          /^(shot|adult)img\.org$/,
          /^image(\.adlock|on|team)\.org$/,
          /^(voyeur|drag|teen|mega)image\.org$/,
          /^teenshot\.org$/,
          /^img(studio|spot)\.org$/,
          /^www\.hotimage\.uk$/,
          /^hotimages\.eu$/,
          /(^|\.)55888\.eu$/,
          /^img(cloud|mag)\.co$/,
          /^pixup\.us$/,
          /^(bulkimg|photo-up|myimg|pop-img|img-pop|ads-img)\.info$/,
          /^vava\.in$/,
          /^(pixxx|picspornfree|imgload|fapat)\.me$/,
          /^(domaink|pic2pic|porno-pirat|24aconstii|loftlm|18pron|imgplus)\.ru$/,
          /^imgease\.re$/,
          /^(goimg|xxx\.pornscreen)\.xyz$/,
          /^(pic2pic|picz)\.site$/,
          /^darpix\.ga$/,
          /^sxpics\.nl$/,
          /^darpix\.desi$/,
          /^pic4you\.top$/,
          /^imgsen\.se$/,
          /^ipicture\.su$/,
          /^acidimg\.cc$/,
          /^s\.imghost\.top$/,
          /^pic\.hotimg\.site$/,
        ],
        path: /^\/img-.*\.html/,
      },
      {
        host: [
          /^img(run|twyti)\.net$/,
          /^imgtwyti\.com$/,
          /^hentai-(pop|baka)\.com$/,
          /^star-hentai\.com$/,
          /^(jav|img)-hentai\.host$/,
          /^hentai-king\.host$/,
          /^img-king\.xyz$/,
        ],
        path: /^\/[ti]\/img-.*\.html/,
      },
      {
        host: /^imgking\.co$/,
        path: /^\/img4?-.*\.html/,
      },
      {
        host: /^imgbb\.net$/,
        path: /^\/.-.+$/,
      },
      {
        host: /^imgtor\.pw$/,
        path: /^\/img2\/.+$/,
      },
      {
        host: /^ima\.gy$/,
        path: /^\/i\/.+$/,
      },
    ],
    ready: defaultAction,
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^imgtor\.pw$/,
      path: /^\/img\/.*$/,
    },
    async start (m) {
      const imageUrl = 'http://' + m.host[0] + m.path[0].replace('img', 'img2');
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(imageUrl);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^imgrat\.com$/,
      path: /^\/img-.*\.html/,
    },
    ready: _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].partial(action, '#close', '#main_image img.center-block.img-responsive'),
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: [
        /^imageporn\.eu$/,
        /^imgzizi\.xyz$/,
      ],
      path: /^\/img-.*\.html/,
    },
    async start () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.document.createElement = null;
    },
    ready: defaultAction,
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: [
        /^(www\.)?imgfresh\.info$/,
      ],
      path: /^\/img-.*\.html$/,
    },
    async ready () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe');
      let node = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('#continuetoimage > form input');
      if (node) {
        node.click();
        node.click();
        return;
      }
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].resetCookies();
      node = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('img[class^=centred]');
      if (node) {
        await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(node.src);
        return;
      }
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].post(window.location.href.toString(), {
        cti: 1,
        ref: '',
        rc: 1,
        rp: 1,
        bt: 0,
        bw: 'edge',
      });
      window.location.reload();
    },
  });
  async function helper () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.setTimeout = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].nop;
    const data = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].get(window.location.toString());
    return _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].toDOM(data);
  }
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^08lkk\.com$/,
      path: /^\/Photo\/img-.+\.html$/,
    },
    async start () {
      const page = await helper();
      const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('img[class^=centred]', page);
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^08lkk\.com$/,
      path: /^\/\d+\/img-.*\.html$/,
    },
    async start () {
      const page = await helper();
      let bbcode = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$('#imagecodes input', page);
      bbcode = bbcode.value.match(/.+\[IMG\]([^[]+)\[\/IMG\].+/);
      bbcode = bbcode[1];
      bbcode = bbcode.replace('small', 'big');
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(bbcode);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: [
      {
        host: /^imgking\.co$/,
        path: /^\/imgs-.*\.html/,
      },
      {
        host: [
          /^img(kings|prime)\.com$/,
          /^imagerar\.com$/,
        ],
        path: /^\/img-.*\.html/,
      },
    ],
    async ready () {
      const url = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].window.linkid;
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(url);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^imgkings\.com$/,
      path: /^\/img2-.*\.html/,
    },
    ready: defaultAction,
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^imgprime\.com$/,
      path: /^\/imga-u\/(.+)\.jpeg\.html/,
    },
    async ready () {
      const path = window.location.href.replace('/imga-u', '/u').replace('.html', '');
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openLink(path);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: [
      {
        host: /^imagerar\.com$/,
        path: /^\/img2-/,
      },
      {
        host: /^imgking\.co$/,
        path: /^\/img[v3]-.*\.html/,
      },
      {
        host: /^imgprime\.com$/,
        path: /^\/img.*\.html$/,
      },
    ],
    async ready () {
      const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('img[alt]');
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: /^imx\.to$/,
      path: [
        /^\/img-.*\.html/,
        /^\/i\/.*/,
      ],
    },
    ready: _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].partial(action, '#continuebutton, #continuetoimage input[type="submit"]', 'img[class^=centred]'),
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
    rule: {
      host: [
        /^(www\.)?imgdrive\.net$/,
        /^(www\.)?img(taxi|wallet|adult)\.com$/,
      ],
      path: /^\/img-.*\.html$/,
    },
    async ready () {
      let m = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('meta[property="og:image"]');
      m = m.content.replace('small', 'big');
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(m);
    },
  });
  async function action (firstSelector, secondSelector) {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].remove('iframe, #adblock_detect, .popupOverlay');
    const node = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].$(firstSelector);
    if (node) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].wait(500);
      node.removeAttribute('disabled');
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].wait(500);
      node.focus();
      node.click();
      node.click();
      node.click();
      return;
    }
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])(secondSelector);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  }
})();
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://www.subirimagenes.com/*.html',
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#ImagenVisualizada');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://tinypic.com/view.php?pic=*',
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#imgElement');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^www\.turboimagehost\.com$/,
    path: /^\/p\//,
  },
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('#imageid');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: 'http://vvcap.net/db/*.htp',
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('img');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src, {
      replace: true,
    });
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["_"].register({
  rule: {
    host: /^x\.pixfarm\.net$/,
    path: /^\/sexy\/\d+\/\d+\/.+\.html$/,
  },
  async ready () {
    const i = Object(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"])('img');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__["$"].openImage(i.src);
  },
});
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
 __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
 var util_ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
 var util_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
 var util_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
 var util_dispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
 var util_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
 var util_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
 var util_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
 var util_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
 var util_misc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
 var util_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3);
const _ = {
  AdsBypasserError: util_core__WEBPACK_IMPORTED_MODULE_2__["AdsBypasserError"],
  find: util_core__WEBPACK_IMPORTED_MODULE_2__["find"],
  forEach: util_core__WEBPACK_IMPORTED_MODULE_2__["forEach"],
  generateRandomIP: util_misc__WEBPACK_IMPORTED_MODULE_8__["generateRandomIP"],
  info: util_logger__WEBPACK_IMPORTED_MODULE_7__["info"],
  none: util_core__WEBPACK_IMPORTED_MODULE_2__["none"],
  partial: util_core__WEBPACK_IMPORTED_MODULE_2__["partial"],
  register: util_dispatcher__WEBPACK_IMPORTED_MODULE_3__["register"],
  tryEvery: util_core__WEBPACK_IMPORTED_MODULE_2__["tryEvery"],
  wait: util_core__WEBPACK_IMPORTED_MODULE_2__["wait"],
  warn: util_logger__WEBPACK_IMPORTED_MODULE_7__["warn"],
};
function $ (selector, context) {
  return Object(util_dom__WEBPACK_IMPORTED_MODULE_4__["querySelector"])(selector, context);
}
$.$ = util_dom__WEBPACK_IMPORTED_MODULE_4__["querySelectorOrNull"];
$.$$ = util_dom__WEBPACK_IMPORTED_MODULE_4__["querySelectorAll"];
$.block = util_dom__WEBPACK_IMPORTED_MODULE_4__["block"];
$.get = util_ajax__WEBPACK_IMPORTED_MODULE_0__["get"];
$.getCookie = util_cookie__WEBPACK_IMPORTED_MODULE_1__["getCookie"];
$.nuke = util_misc__WEBPACK_IMPORTED_MODULE_8__["nuke"];
$.openImage = util_image__WEBPACK_IMPORTED_MODULE_5__["openImage"];
$.openLink = util_link__WEBPACK_IMPORTED_MODULE_6__["openLink"];
$.post = util_ajax__WEBPACK_IMPORTED_MODULE_0__["post"];
$.remove = util_dom__WEBPACK_IMPORTED_MODULE_4__["remove"];
$.removeAllTimer = util_misc__WEBPACK_IMPORTED_MODULE_8__["removeAllTimer"];
$.resetCookies = util_cookie__WEBPACK_IMPORTED_MODULE_1__["resetCookies"];
$.searchFromScripts = util_dom__WEBPACK_IMPORTED_MODULE_4__["searchFromScripts"];
$.setCookie = util_cookie__WEBPACK_IMPORTED_MODULE_1__["setCookie"];
$.toDOM = util_dom__WEBPACK_IMPORTED_MODULE_4__["toDOM"];
$.window = util_platform__WEBPACK_IMPORTED_MODULE_9__["usw"];
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
 __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
 var util_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 var util_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
 var util_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
class AjaxError extends util_core__WEBPACK_IMPORTED_MODULE_0__["AdsBypasserError"] {
  constructor (method, url, data, headers, status, response) {
    super(`${method} ${url} got ${status}`);
    this._method = method;
    this._url = url;
    this._data = data;
    this._headers = headers;
    this._status = status;
    this._response = response;
  }
  get name () {
    return 'AjaxError';
  }
  get method () {
    return this._method;
  }
  get url () {
    return this._url;
  }
  get data () {
    return this._data;
  }
  get headers () {
    return this._headers;
  }
  get status () {
    return this._status;
  }
  get response () {
    return this._response;
  }
}
function deepJoin (prefix, object) {
  const keys = Object.getOwnPropertyNames(object);
  const mapped = Object(util_core__WEBPACK_IMPORTED_MODULE_0__["map"])(keys, (k) => {
    const v = object[k];
    const key = `${prefix}[${k}]`;
    if (typeof v === 'object') {
      return deepJoin(key, v);
    }
    const tmp = [key, v].map(encodeURIComponent);
    return tmp.join('=');
  });
  return mapped.join('&');
}
function toQuery (data) {
  const type = typeof data;
  if (data === null || (type !== 'string' && type !== 'object')) {
    return '';
  }
  if (type === 'string') {
    return data;
  }
  if (data instanceof String) {
    return data.toString();
  }
  const keys = Object.getOwnPropertyNames(data);
  return Object(util_core__WEBPACK_IMPORTED_MODULE_0__["map"])(keys, (k) => {
    const v = data[k];
    if (typeof v === 'object') {
      return deepJoin(k, v);
    }
    const tmp = [k, v].map(encodeURIComponent);
    return tmp.join('=');
  }).join('&');
}
function ajax (method, url, data, headers) {
  Object(util_logger__WEBPACK_IMPORTED_MODULE_2__["debug"])('ajax', method, url, data, headers);
  const l = document.createElement('a');
  l.href = url;
  const reqHost = l.hostname;
  const overrideHeaders = {
    Host: reqHost || window.location.host,
    Origin: window.location.origin,
    Referer: window.location.href,
    'X-Requested-With': 'XMLHttpRequest',
  };
  Object(util_core__WEBPACK_IMPORTED_MODULE_0__["forEach"])(overrideHeaders, (v, k) => {
    if (headers[k] === util_core__WEBPACK_IMPORTED_MODULE_0__["none"]) {
      delete headers[k];
    } else {
      headers[k] = v;
    }
  });
  if (data) {
    if (headers['Content-Type'].indexOf('json') >= 0) {
      data = JSON.stringify(data);
    } else {
      data = toQuery(data);
    }
    headers['Content-Length'] = data.length;
  }
  return new Promise((resolve, reject) => {
    util_platform__WEBPACK_IMPORTED_MODULE_1__["GMAPI"].xmlHttpRequest({
      method: method,
      url: url,
      data: data,
      headers: headers,
      onload (response) {
        response = (typeof response.responseText !== 'undefined') ? response : this;
        if (response.status !== 200) {
          reject(new AjaxError(method, url, data, headers, response.status, response.responseText));
        } else {
          resolve(response.responseText);
        }
      },
      onerror (response) {
        response = (typeof response.responseText !== 'undefined') ? response : this;
        reject(new AjaxError(method, url, data, headers, response.status, response.responseText));
      },
    });
  });
}
function get (url, data, headers) {
  data = toQuery(data);
  data = data ? '?' + data : '';
  headers = headers || {};
  return ajax('GET', url + data, '', headers);
}
function post (url, data, headers) {
  const h = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  };
  if (headers) {
    Object(util_core__WEBPACK_IMPORTED_MODULE_0__["forEach"])(headers, (v, k) => {
      h[k] = v;
    });
  }
  return ajax('POST', url, data, h);
}
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
 __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
 __webpack_require__.d(__webpack_exports__, "resetCookies", function() { return resetCookies; });
 var util_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function setCookie (key, value) {
  document.cookie = `${key}=${value};path=${location.pathname};`;
}
function getCookie (key) {
  let [, c,] = Object(util_core__WEBPACK_IMPORTED_MODULE_0__["find"])(document.cookie.split(';'), (v) => {
    const k = v.replace(/^\s*([a-zA-Z0-9-_]+)=.+$/, '$1');
    if (k !== key) {
      return util_core__WEBPACK_IMPORTED_MODULE_0__["none"];
    }
  });
  if (c === util_core__WEBPACK_IMPORTED_MODULE_0__["none"]) {
    return null;
  }
  c = c.replace(/^\s*[a-zA-Z0-9-_]+=([^;]+).?$/, '$1');
  if (!c) {
    return null;
  }
  return c;
}
function resetCookies () {
  const a = document.domain;
  const b = document.domain.replace(/^www\./, '');
  const c = document.domain.replace(/^(\w+\.)+?(\w+\.\w+)$/, '$2');
  const d = (new Date(1e3)).toUTCString();
  Object(util_core__WEBPACK_IMPORTED_MODULE_0__["forEach"])(document.cookie.split(';'), (v) => {
    const k = v.replace(/^\s*(\w+)=.+$/, '$1');
    document.cookie = `${k}=;expires=${d};`;
    document.cookie = `${k}=;path=/;expires=${d};`;
    const e = (a, b, c) => `${a}=;path=/;domain=${b};expires=${c};`;
    document.cookie = e(k, a, d);
    document.cookie = e(k, b, d);
    document.cookie = e(k, c, d);
  });
}
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, "block", function() { return block; });
 __webpack_require__.d(__webpack_exports__, "querySelector", function() { return querySelector; });
 __webpack_require__.d(__webpack_exports__, "querySelectorAll", function() { return querySelectorAll; });
 __webpack_require__.d(__webpack_exports__, "querySelectorOrNull", function() { return querySelectorOrNull; });
 __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
 __webpack_require__.d(__webpack_exports__, "searchFromScripts", function() { return searchFromScripts; });
 __webpack_require__.d(__webpack_exports__, "toDOM", function() { return toDOM; });
 var util_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 var util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
class DomNotFoundError extends util_core__WEBPACK_IMPORTED_MODULE_0__["AdsBypasserError"] {
  constructor (selector) {
    super(`\`${selector}\` not found`);
  }
  get name () {
    return 'DomNotFoundError';
  }
}
function querySelector (selector, context) {
  if (!context || !context.querySelector) {
    context = document;
  }
  const n = context.querySelector(selector);
  if (!n) {
    throw new DomNotFoundError(selector);
  }
  return n;
}
function querySelectorOrNull (selector, context) {
  try {
    return querySelector(selector, context);
  } catch (e) {
    return null;
  }
}
function querySelectorAll (selector, context) {
  if (!context || !context.querySelectorAll) {
    context = document;
  }
  const ns = context.querySelectorAll(selector);
  return ns;
}
function toDOM (rawHTML) {
  try {
    const parser = new DOMParser();
    const DOMHTML = parser.parseFromString(rawHTML, 'text/html');
    return DOMHTML;
  } catch (e) {
    throw new util_core__WEBPACK_IMPORTED_MODULE_0__["AdsBypasserError"]('could not parse HTML to DOM');
  }
}
function remove (selector, context) {
  const nodes = querySelectorAll(selector, context);
  Object(util_core__WEBPACK_IMPORTED_MODULE_0__["forEach"])(nodes, (e) => {
    Object(util_logger__WEBPACK_IMPORTED_MODULE_1__["debug"])('removed', e);
    e.remove();
  });
}
function block (selector, context=null) {
  if (!context) {
    context = document;
  }
  let fn = null;
  if (Object(util_core__WEBPACK_IMPORTED_MODULE_0__["isString"])(selector)) {
    fn = () => {
      remove(selector, context);
    };
  } else if (typeof selector === 'function') {
    fn = (mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (selector(node)) {
          node.parentNode.removeChild(node);
        }
      });
    };
  } else {
    throw new TypeError('wrong selector');
  }
  const o = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      fn(mutation);
    });
  });
  o.observe(context, {
    childList: true,
    subtree: true,
  });
}
function searchFromScriptsByRegExp (pattern, context) {
  const scripts = querySelectorAll('script', context);
  const [, , m] = Object(util_core__WEBPACK_IMPORTED_MODULE_0__["find"])(scripts, (s) => {
    const m = s.textContent.match(pattern);
    if (!m) {
      return util_core__WEBPACK_IMPORTED_MODULE_0__["none"];
    }
    return m;
  });
  if (m === util_core__WEBPACK_IMPORTED_MODULE_0__["none"]) {
    return null;
  }
  return m;
}
function searchFromScriptsByString (pattern, context) {
  const scripts = querySelectorAll('script', context);
  const [, m,] = Object(util_core__WEBPACK_IMPORTED_MODULE_0__["find"])(scripts, (s) => {
    const m = s.textContent.indexOf(pattern);
    if (m < 0) {
      return util_core__WEBPACK_IMPORTED_MODULE_0__["none"];
    }
    return m;
  });
  if (m === util_core__WEBPACK_IMPORTED_MODULE_0__["none"]) {
    return null;
  }
  return m.textContent;
}
function searchFromScripts (pattern, context) {
  if (pattern instanceof RegExp) {
    return searchFromScriptsByRegExp(pattern, context);
  } else if (Object(util_core__WEBPACK_IMPORTED_MODULE_0__["isString"])(pattern)) {
    return searchFromScriptsByString(pattern, context);
  } else {
    return null;
  }
}
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, "openImage", function() { return openImage; });
 var util_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
 var util_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
 var util_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
 var util_misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
 var util_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
async function openImage (imgSrc, options) {
  options = options || {};
  const replace = !!options.replace;
  const referer = !!options.referer;
  if (replace) {
    await replaceBody(imgSrc);
    return;
  }
  const redirectImage = await util_platform__WEBPACK_IMPORTED_MODULE_4__["GMAPI"].getValue('redirect_image');
  if (redirectImage) {
    await Object(util_link__WEBPACK_IMPORTED_MODULE_0__["openLink"])(imgSrc, {
      referer: referer,
    });
  }
}
function enableScrolling () {
  const o = document.compatMode === 'CSS1Compat' ? document.documentElement : document.body;
  o.style.overflow = '';
}
function toggleShrinking () {
  this.classList.toggle('adsbypasser-shrinked');
}
function checkScaling () {
  const nw = this.naturalWidth;
  const nh = this.naturalHeight;
  const cw = document.documentElement.clientWidth;
  const ch = document.documentElement.clientHeight;
  if ((nw > cw || nh > ch) && !this.classList.contains('adsbypasser-resizable')) {
    this.classList.add('adsbypasser-resizable');
    this.classList.add('adsbypasser-shrinked');
    this.addEventListener('click', toggleShrinking);
  } else {
    this.removeEventListener('click', toggleShrinking);
    this.classList.remove('adsbypasser-shrinked');
    this.classList.remove('adsbypasser-resizable');
  }
}
async function scaleImage (i) {
  const siURL = await util_platform__WEBPACK_IMPORTED_MODULE_4__["GMAPI"].getResourceUrl('scaleImage');
  appendStyleURL(siURL);
  if (i.naturalWidth && i.naturalHeight) {
    checkScaling.call(i);
  } else {
    i.addEventListener('load', checkScaling);
  }
  let h = 0;
  window.addEventListener('resize', () => {
    window.clearTimeout(h);
    h = window.setTimeout(checkScaling.bind(i), 100);
  });
}
async function changeBackground () {
  const bgImage = await util_platform__WEBPACK_IMPORTED_MODULE_4__["GMAPI"].getResourceUrl('bgImage');
  document.body.style.backgroundColor = '#222222';
  document.body.style.backgroundImage = `url('${bgImage}')`;
}
async function alignCenter () {
  const acURL = await util_platform__WEBPACK_IMPORTED_MODULE_4__["GMAPI"].getResourceUrl('alignCenter');
  appendStyleURL(acURL);
}
function injectStyle (d, i) {
  Object(util_dom__WEBPACK_IMPORTED_MODULE_1__["remove"])('style, link[rel=stylesheet]');
  d.id = 'adsbypasser-wrapper';
  i.id = 'adsbypasser-image';
}
function appendStyleURL (url) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  document.head.appendChild(link);
}
async function replaceBody (imgSrc) {
  const redirectImage = await util_platform__WEBPACK_IMPORTED_MODULE_4__["GMAPI"].getValue('redirect_image');
  if (!redirectImage) {
    return;
  }
  if (!imgSrc) {
    Object(util_logger__WEBPACK_IMPORTED_MODULE_2__["warn"])('false url');
    return;
  }
  Object(util_logger__WEBPACK_IMPORTED_MODULE_2__["info"])(`replacing body with \`${imgSrc}\` ...`);
  Object(util_misc__WEBPACK_IMPORTED_MODULE_3__["removeAllTimer"])();
  enableScrolling();
  document.body = document.createElement('body');
  const d = document.createElement('div');
  document.body.appendChild(d);
  const i = document.createElement('img');
  i.src = imgSrc;
  d.appendChild(i);
  const ac = await util_platform__WEBPACK_IMPORTED_MODULE_4__["GMAPI"].getValue('align_center');
  const si = await util_platform__WEBPACK_IMPORTED_MODULE_4__["GMAPI"].getValue('scale_image');
  if (ac || si) {
    injectStyle(d, i);
  }
  if (ac) {
    await alignCenter();
  }
  const cb = await util_platform__WEBPACK_IMPORTED_MODULE_4__["GMAPI"].getValue('change_background');
  if (cb) {
    await changeBackground();
  }
  if (si) {
    await scaleImage(i);
  }
}
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, "openLink", function() { return openLink; });
 var util_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 var util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
function prepare (e) {
  if (!document.body) {
    document.body = document.createElement('body');
  }
  document.body.appendChild(e);
  return Object(util_core__WEBPACK_IMPORTED_MODULE_0__["wait"])(0);
}
async function get (url) {
  const a = document.createElement('a');
  a.href = url;
  let clicked = false;
  a.addEventListener('click', (event) => {
    event.stopPropagation();
    clicked = true;
  }, true);
  await prepare(a);
  a.click();
  const tick = setInterval(() => {
    if (clicked) {
      Object(util_logger__WEBPACK_IMPORTED_MODULE_1__["info"])('already clicked');
      clearInterval(tick);
      return;
    }
    Object(util_logger__WEBPACK_IMPORTED_MODULE_1__["info"])('try again');
    a.click();
  }, 500);
}
async function post (path, params) {
  params = params || {};
  const form = document.createElement('form');
  form.method = 'post';
  form.action = path;
  Object(util_core__WEBPACK_IMPORTED_MODULE_0__["forEach"])(params, (value, key) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = value;
    form.appendChild(input);
  });
  await prepare(form);
  form.submit();
}
async function openLink (to, options) {
  if (!Object(util_core__WEBPACK_IMPORTED_MODULE_0__["isString"])(to) && !to) {
    Object(util_logger__WEBPACK_IMPORTED_MODULE_1__["warn"])('false URL');
    return;
  }
  options = options || {};
  const withReferer = typeof options.referer === 'undefined' ? true : options.referer;
  const postData = options.post;
  const from = window.location.toString();
  Object(util_logger__WEBPACK_IMPORTED_MODULE_1__["info"])(`${from} -> ${to}`);
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
 }),
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, "removeAllTimer", function() { return removeAllTimer; });
 __webpack_require__.d(__webpack_exports__, "nuke", function() { return nuke; });
 __webpack_require__.d(__webpack_exports__, "generateRandomIP", function() { return generateRandomIP; });
 var util_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 var util_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
 var util_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
function removeAllTimer () {
  let handle = window.setInterval(util_core__WEBPACK_IMPORTED_MODULE_0__["nop"], 10);
  while (handle > 0) {
    window.clearInterval(handle--);
  }
  handle = window.setTimeout(util_core__WEBPACK_IMPORTED_MODULE_0__["nop"], 10);
  while (handle > 0) {
    window.clearTimeout(handle--);
  }
}
function nuke (url) {
  try {
    util_platform__WEBPACK_IMPORTED_MODULE_1__["usw"].document.write('nuked by AdsBypasser, leading to ...<br/>');
  } catch (e) {
    Object(util_logger__WEBPACK_IMPORTED_MODULE_2__["warn"])('nuke failed', e);
  }
  const a = document.createElement('a');
  a.href = url;
  a.textContent = url;
  document.body.appendChild(a);
}
function generateRandomIP () {
  return [0, 0, 0, 0].map(() => {
    return Math.floor(Math.random() * 256);
  }).join('.');
}
 })
 ]);