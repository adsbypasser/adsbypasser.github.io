// ==UserScript==
// @name           AdsBypasser Lite
// @namespace      AdsBypasser
// @description    Bypass Ads
// @copyright      2012+, Wei-Cheng Pan, https://adsbypasser.github.io/
// @version        7.23.0
// @license        BSD
// @homepageURL    https://adsbypasser.github.io/
// @supportURL     https://github.com/adsbypasser/adsbypasser/issues
// @updateURL      https://adsbypasser.github.io/releases/adsbypasser.lite.es7.meta.js
// @downloadURL    https://adsbypasser.github.io/releases/adsbypasser.lite.es7.user.js
// @icon           https://raw.githubusercontent.com/adsbypasser/adsbypasser/v7.23.0/resources/img/logo.png
// @grant          GM_deleteValue
// @grant          GM_getValue
// @grant          GM_openInTab
// @grant          GM_registerMenuCommand
// @grant          GM_setValue
// @grant          GM_xmlhttpRequest
// @grant          GM.deleteValue
// @grant          GM.getValue
// @grant          GM.openInTab
// @grant          GM.setValue
// @grant          GM.xmlHttpRequest
// @grant          unsafeWindow
// @run-at         document-start
// @include        http://*
// @include        https://*
// @connect        *
// ==/UserScript==

 (() => { 
 	"use strict";
 	var __webpack_modules__ = ([
,
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   AdsBypasserError: () => ( AdsBypasserError),
   every: () => ( every),
   find: () => ( find),
   forEach: () => ( forEach),
   isString: () => ( isString),
   map: () => ( map),
   none: () => ( none),
   nop: () => ( nop),
   partial: () => ( partial),
   tryEvery: () => ( tryEvery),
   wait: () => ( wait)
 });
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
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   findHandler: () => ( findHandler),
   register: () => ( register)
 });
 var util_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
const patterns = [];
function register (pattern) {
  patterns.push(pattern);
}
function dispatchByObject (rule, url_6) {
  const matched = (0,util_core__WEBPACK_IMPORTED_MODULE_0__.map)(rule, (pattern, part) => {
    if (pattern instanceof RegExp) {
      return url_6[part].match(pattern);
    }
    if (Array.isArray(pattern)) {
      const [, , r] = (0,util_core__WEBPACK_IMPORTED_MODULE_0__.find)(pattern, (sp) => {
        const m = url_6[part].match(sp);
        return m || util_core__WEBPACK_IMPORTED_MODULE_0__.none;
      });
      return r !== util_core__WEBPACK_IMPORTED_MODULE_0__.none ? r : null;
    }
    throw new util_core__WEBPACK_IMPORTED_MODULE_0__.AdsBypasserError('invalid rule');
  });
  const passed = (0,util_core__WEBPACK_IMPORTED_MODULE_0__.every)(matched, (v) => {
    return !!v;
  });
  return passed ? matched : null;
}
function dispatchByRegExp (rule, url_1) {
  return url_1.match(rule);
}
function dispatchByArray (rules, url_1, url_3, url_6) {
  const [, , r] = (0,util_core__WEBPACK_IMPORTED_MODULE_0__.find)(rules, (rule) => {
    const m = dispatch(rule, url_1, url_3, url_6);
    return m ? m : util_core__WEBPACK_IMPORTED_MODULE_0__.none;
  });
  return r !== util_core__WEBPACK_IMPORTED_MODULE_0__.none ? r : null;
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
  if ((0,util_core__WEBPACK_IMPORTED_MODULE_0__.isString)(rule)) {
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
  const [i, pattern, matched] = (0,util_core__WEBPACK_IMPORTED_MODULE_0__.find)(patterns, (pattern) => {
    const m = dispatch(pattern.rule, url_1, url_3, url_6);
    return m ? m : util_core__WEBPACK_IMPORTED_MODULE_0__.none;
  });
  if (i === util_core__WEBPACK_IMPORTED_MODULE_0__.none) {
    return null;
  }
  if (!pattern.start && !pattern.ready) {
    return null;
  }
  return {
    start: pattern.start ? (0,util_core__WEBPACK_IMPORTED_MODULE_0__.partial)(pattern.start, matched) : util_core__WEBPACK_IMPORTED_MODULE_0__.nop,
    ready: pattern.ready ? (0,util_core__WEBPACK_IMPORTED_MODULE_0__.partial)(pattern.ready, matched) : util_core__WEBPACK_IMPORTED_MODULE_0__.nop,
  };
}
 }),
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   GMAPI: () => ( GMAPI),
   rawUSW: () => ( rawUSW),
   usw: () => ( usw)
 });
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
    gm.registerMenuCommand = util_core__WEBPACK_IMPORTED_MODULE_0__.nop;
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
  (0,util_core__WEBPACK_IMPORTED_MODULE_0__.forEach)(safe, (v, k) => {
    unsafe[k] = clone(v);
  });
  return unsafe;
}
 }),
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   dumpConfig: () => ( dumpConfig),
   loadConfig: () => ( loadConfig)
 });
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
    const alignCenter = await util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.getValue('align_center');
    const changeBackground = await util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.getValue('change_background');
    const scaleImage = await util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.getValue('scale_image');
    const redirectImage = await util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.getValue('redirect_image');
    const ac = typeof alignCenter === 'boolean';
    if (typeof changeBackground !== 'boolean') {
      await util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.setValue('change_background', ac ? alignCenter : true);
    }
    if (typeof scaleImage !== 'boolean') {
      await util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.setValue('scale_image', ac ? alignCenter : true);
    }
    if (!ac) {
      await util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.setValue('align_center', true);
    }
    if (typeof redirectImage !== 'boolean') {
      await util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.setValue('redirect_image', true);
    }
  },
  async () => {
    const externalServerSupport = await util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.getValue('external_server_support');
    if (typeof externalServerSupport !== 'boolean') {
      await util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.setValue('external_server_support', false);
    }
  },
  async () => {
    const logLevel = await util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.getValue('log_level');
    if (typeof logLevel !== 'number') {
      await util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.setValue('log_level', 1);
    }
  },
  async () => {
    await util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.deleteValue('external_server_support');
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
    const rv = await util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.getValue(descriptor.key);
    return descriptor.verify(rv);
  });
  verifyResults = await Promise.all(verifyResults);
  const ok = (0,util_core__WEBPACK_IMPORTED_MODULE_0__.every)(verifyResults, v => v);
  if (!ok) {
    await util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.setValue('version', 0);
  }
}
async function migrate () {
  let currentVersion = await util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.getValue('version');
  if (currentVersion !== 0 && !currentVersion) {
    throw new util_core__WEBPACK_IMPORTED_MODULE_0__.AdsBypasserError('invalid version');
  }
  while (currentVersion < PATCHES.length) {
    PATCHES[currentVersion]();
    ++currentVersion;
  }
  await util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.setValue('version', currentVersion);
}
async function loadConfig () {
  await senityCheck();
  await migrate();
  (0,util_dispatcher__WEBPACK_IMPORTED_MODULE_1__.register)({
    rule: {
      host: /^adsbypasser\.github\.io$/,
      path: /^\/configure\.html$/,
    },
    async ready () {
      await waitForPage();
      util_platform__WEBPACK_IMPORTED_MODULE_2__.usw.commit = async (data) => {
        for (const [k, v] of Object.entries(data)) {
          await util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.setValue(k, v);
        }
      };
      util_platform__WEBPACK_IMPORTED_MODULE_2__.usw.render({
        version: await util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.getValue('version'),
        options: {
          align_center: {
            type: 'checkbox',
            value: await util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.getValue('align_center'),
            label: 'Align Center',
            help: 'Align image to the center if possible. (default: enabled)',
          },
          change_background: {
            type: 'checkbox',
            value: await util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.getValue('change_background'),
            label: 'Change Background',
            help: 'Use Firefox-like image background if possible. (default: enabled)',
          },
          redirect_image: {
            type: 'checkbox',
            value: await util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.getValue('redirect_image'),
            label: 'Redirect Image',
            help: [
              'Directly open image link if possible. (default: enabled)',
              'If disabled, redirection will only works on link shortener sites.',
            ].join('<br/>\n'),
          },
          scale_image: {
            type: 'checkbox',
            value: await util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.getValue('scale_image'),
            label: 'Scale Image',
            help: 'When image loaded, scale it to fit window if possible. (default: enabled)',
          },
          log_level: {
            type: 'select',
            value: await util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.getValue('log_level'),
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
      if (util_platform__WEBPACK_IMPORTED_MODULE_2__.usw.render) {
        clearInterval(i);
        resolve();
      }
    }, 50);
  });
}
async function dumpConfig () {
  let rv = MANIFEST.map(async (descriptor) => {
    return [descriptor.key, await util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.getValue(descriptor.key)];
  });
  rv = await Promise.all(rv);
  const o = {};
  for (const [k, v] of rv) {
    o[k] = v;
  }
  return o;
}
 }),
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   debug: () => ( debug),
   info: () => ( info),
   warn: () => ( warn)
 });
 var util_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
const quiet = false;
function log (method, args) {
  if (quiet) {
    return;
  }
  args = Array.prototype.slice.call(args);
  if ((0,util_core__WEBPACK_IMPORTED_MODULE_0__.isString)(args[0])) {
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
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
__webpack_require__.r(__webpack_exports__);
 var _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^ak\.sv$/,
  },
  async ready () {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(1000);
    const any = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('html');
    any.click();
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(6000);
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('a[class="download_button"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(www\.)?apunkasoftware\.net$/,
  },
  async ready () {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('div#proceed-now > a#dlink');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^thefileslocker\.net$/,
  },
  async ready () {
    const button = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('#downloadbtn');
    button.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [
      /^(www\.)?indishare\.org$/,
      /^uploadrar\.com$/,
    ],
  },
  async ready () {
    const btn = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('button#downloadbtn.downloadbtn');
    btn.removeAttribute('disabled');
    btn.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^katfile\.com$/,
  },
  async ready () {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('a[id="dlink"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(www\.)?keeplinks\.org$/,
  },
  async ready () {
    const button = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('[id="btnproceedsubmit"]');
    button.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^mirrorace\.(com|org)$/,
    path: /^\/m\/.+\/\d+/,
  },
  async ready () {
    const ma = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('a.uk-button:nth-child(2)');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(ma.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: 'https://www.mirrored.to/files/*',
  async ready () {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('.col-sm.centered.extra-top a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host:
      /^multiup\.io$/,
  },
  async ready () {
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('button[class="btn btn-info btn-lg btn-block p-xlg hvr-shutter-out-horizontal"]');
    b.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.onlinefreecourse\.net$/,
  },
  async ready () {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('a[class="btn btn-success"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^sfile\.mobi$/,
  },
  async ready () {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(8000);
    const btn = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('#download');
    btn.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^uploadhaven\.com$/,
    path: /^\/download\//,
  },
  async ready () {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(5000);
    const f = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('.contactForm #downloadNowBtn.btn.btn-primary');
    f.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^usersdrive\.com$/,
  },
  async ready () {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('a[class="btn btn-download"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
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
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(url);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^1link\.club$/,
  },
  async ready () {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('a.btn.btn-lg.btn-outline');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^1v\.to$/,
    path: /^\/t\/[a-zA-Z0-9/=]+/,
  },
  async start () {
    const path = window.location.href.replace('/t/', '/saliendo/');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(path);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(www\.)?4fun\.tw$/,
  },
  async ready () {
    const i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('#original_url');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(i.value);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^ad4\.fr$/,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.remove('iframe');
    const s = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts(/"src", "([^"]+)"/);
    if (!s) {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.warn('changed');
      return;
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(s[1]);
  },
});
(function () {
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
    rule: {
      host: /^ad7\.biz$/,
      path: /^\/\d+\/(.*)$/,
    },
    async start (m) {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.remove('iframe');
      let redirectLink = m.path[1];
      if (!redirectLink.match(/^https?:\/\//)) {
        redirectLink = 'http://' + redirectLink;
      }
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(redirectLink);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
    rule: {
      host: /^ad7\.biz$/,
      path: /^\/\w+$/,
    },
    async ready () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.remove('iframe');
      const script = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts('const r_url');
      let url = script.match(/&url=([^&]+)/);
      url = url[1];
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(url);
    },
  });
})();
(function () {
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
    rule: {
      host: /^(www\.)?adb\.ug$/,
      path: /^(?!\/(?:privacy|terms|contact(\/.*)?|#.*)?$).*$/,
    },
    async ready () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.remove('iframe');
      const m = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts(/top\.location\.href="([^"]+)"/);
      if (m) {
        await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(m[1]);
        return;
      }
      const args = await getArguments();
      tryLink(args);
    },
  });
  function getArguments () {
    const PATTERN = /\{\s*_args[^}]+\}[^}]+\}/;
    return new Promise((resolve) => {
      const m = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts(PATTERN);
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
      return _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.evil(`(${m[0]})`);
    });
  }
  function tryLink (args) {
    const url = window.location.pathname + '/skip_timer';
    const i = setInterval(() => {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.post(url, args).then((text) => {
        const jj = JSON.parse(text);
        if (!jj.errors && jj.messages) {
          clearInterval(i);
          _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(jj.messages.url);
        }
      });
    }, 1000);
  }
})();
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: 'http://adfoc.us/*',
  async ready () {
    const promise = new Promise((resolve) => {
      const root = document.body;
      const observer = new MutationObserver(() => {
        let o = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.$('#showSkip');
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
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(url);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.adz7short\.space$/,
  },
  async ready () {
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('#continue');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(10000);
    b.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(www\.)?ah-informatique\.com$/,
    path: /^\/ZipUrl/,
  },
  async ready () {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('#zip3 a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^al\.ly$/,
  },
  async ready () {
    let i = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.$('#html_element');
    if (i) {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.remove('#messa');
      i.classList.remove('hidden');
      return;
    }
    i = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts(/"href","([^"]+)" \+ hash\)\.remove/);
    if (!i) {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.warn('site changed');
      return;
    }
    i = i[1] + location.hash;
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(i);
  },
});
(function () {
  const ajaxPattern = /\$.post\('([^']*)'[^{]+(\{\s*opt:\s*'make_log'[^}]+\}\s*\}),/i;
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
    rule: {
      host: /^bc\.vc$/,
      path: /^.+(https?:\/\/.+)$/,
    },
    async start (m) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(m.path[1] + document.location.search + document.location.hash);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
    rule: {
      host: /^bc\.vc$/,
      path: /^\/.+/,
    },
    async ready () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.remove('iframe');
      const token = await findAJAXToken();
      const time = fakeAJAXToken();
      const url = `/fly/ln.php?wds=${token.wds}&time=${time}`;
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(5000);
      let rv = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.post(url, {
        xdf: {
          afg: 300,
          bfg: 640,
          cfg: 480,
          jki: token.jki,
          dfg: 640,
          efg: 480,
          rt: token.rt,
        },
        ojk: token.ojk,
      });
      rv = JSON.parse(rv);
      if (rv.error) {
        throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.AdsBypasserError('auth error');
      }
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(rv.message.url);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
    rule: {
      host: [
        /^mylink\.us$/,
        /^zpoz\.net$/,
      ],
      path: /^\/.+/,
    },
    ready: run,
  });
  function decompress (script, unzip) {
    if (!unzip) {
      return script;
    }
    let matches = script.match(/eval(.*)/);
    if (!matches) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.AdsBypasserError('no script matches /eval(.*)/');
    }
    matches = matches[1];
    script = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.evil(matches);
    return script;
  }
  function searchScript (unzip) {
    let content = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts('make_log');
    if (content) {
      return {
        direct: false,
        script: decompress(content, unzip),
      };
    }
    content = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts('click_log');
    if (content) {
      return {
        direct: true,
        script: decompress(content, unzip),
      };
    }
    throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.AdsBypasserError('script changed');
  }
  function knockServer (script, dirtyFix) {
    const matches = script.match(ajaxPattern);
    if (!matches) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.AdsBypasserError('(in knock server) no script matches $.post');
    }
    const make_url = matches[1];
    const make_opts = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.evil(`(${matches[2]})`);
    const i = setInterval(function () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.post(make_url, make_opts).then(function (text) {
        if (dirtyFix) {
          text = text.match(/\{.+\}/)[0];
        }
        const jj = JSON.parse(text);
        if (jj.message) {
          clearInterval(i);
          return _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(jj.message.url);
        }
      });
    }, 1000);
  }
  async function run (dirtyFix) {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.remove('iframe');
    let result = searchScript(true);
    if (!result.direct) {
      knockServer(result.script,dirtyFix);
    } else {
      result = result.script.match(/top\.location\.href='([^']+)'/);
      if (!result) {
        throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.AdsBypasserError('script changed');
      }
      result = result[1];
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(result);
    }
  }
  async function findAJAXToken () {
    const rv = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts('xyz');
    if (!rv) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.AdsBypasserError('script changed');
    }
    let wds = rv.match(/xyz\s*=\s*'([^']+)'/);
    if (!wds) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.AdsBypasserError('script changed');
    }
    wds = wds[1];
    let jki = rv.match(/tkn\s*=\s*'([^']+)'/);
    if (!jki) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.AdsBypasserError('script changed');
    }
    jki = jki[1];
    const rt = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('#recaptchaToken');
    while (!rt.value) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(500);
    }
    return {
      wds: wds,
      jki: jki,
      ojk: 'jfhg',
      rt: rt.value,
    };
  }
  function fakeAJAXToken () {
    const skipAd = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('#getLink').parentElement;
    const margin = 6;
    const fakePageX = skipAd.offsetLeft + margin + 50 + (Math.random() * 10);
    const fakePageY = skipAd.offsetTop + margin + 15 + (Math.random() * 1);
    const po = fakePageX + ',' + fakePageY;
    const posX = jQueryOffset(skipAd).left + margin;
    const posY = jQueryOffset(skipAd).top + margin;
    const pos = Math.abs(fakePageX - posX) + ',' + Math.abs(fakePageY - posY);
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
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(www\.)?biglistofwebsites\.com$/,
    path: /^\/go\/(\w+\.\w+)$/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink('http://' + m.path[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: 'http://www.bild.me/bild.php?file=*',
  async ready () {
    const i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('#Bild');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: [
    {
      host: /^(www\.)?([a-zA-Z0-9]+\.)?binbox\.io$/,
      path: /\/o\/([a-zA-Z0-9]+)/,
    },
    {
      host: /^gsmzone\.site$/,
      path: /\/go\/([a-zA-Z0-9]+)/,
    },
  ],
  async start (m) {
    const direct_link = window.atob(m.path[1]);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(direct_link);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^bioskopkeren\.boo$/,
  },
  async ready () {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(1000);
    const c = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('.reklamgec');
    c.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^boost\.ink$/,
  },
  async start () {
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('body').getAttribute('result');
    if (b) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(atob(b));
    } else {
      return;
    }
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^cocoleech\.com$/,
  },
  async ready () {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('.btn.btn-block.btn-success');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: [
    {
      host: /^cpmlink\.net$/,
      path: /^\/go\/[\w-]+$/,
    },
  ],
  async ready () {
    let a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('#btn-main');
    const i = a.href.lastIndexOf('http');
    a = a.href.substr(i);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [
      /^shon\.xyz$/,
      /^shink\.me$/,
    ],
    path: /^\/[\w-]+$/,
  },
  async ready () {
    const f = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('#skip');
    f.submit();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^cshort\.org$/,
  },
  async ready () {
    let matches = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts(/window\.location\.href = "([^"]+)"/);
    matches = matches[1];
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.nuke(matches);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(matches);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^earnlink\.io$/,
  },
  async ready() {
    const directUrl = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts(/"([^"]+)"\)\.html\("Continue"\)/);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(directUrl[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [
      /^easyurl\.net$/,
      /^(atu|clickthru|redirects|readthis)\.ca$/,
      /^goshrink\.com$/,
    ],
  },
  async ready () {
    const f = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('frame[name=main]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(f.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^forex-trnd\.com$/,
  },
  async ready () {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(10000);
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('.get-link');
    a.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^exeo\.app$/,
  },
  async ready () {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('.link-button.button');
    a.click();
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(2000);
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('.link-button');
    b.click();
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(6000);
    const c = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('.link-button.get-link');
    c.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(www\.)?filoops\.info$/,
  },
  async ready () {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('#text > center a, #text > div[align=center] a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host:/^fir3\.net$/,
  },
  async ready () {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(12000);
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('.btn.btn-success.btn-lg.get-link');
    b.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^get-click2\.blogspot\.com$/,
  },
  async ready () {
    const clbt = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('button#gotolink');
    clbt.removeAttribute('disabled');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(1);
    clbt.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^gkurl\.us$/,
  },
  async ready () {
    const iframe = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('#gkurl-frame');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(iframe.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^gplinks\.co$/,
  },
  async ready () {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(8000);
    const d = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('.get-link');
    d.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^hen-tay\.net$/,
    path: /^\/go\//,
  },
  async ready () {
    const h = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('#download_url div a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(h.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^hotshorturl\.com$/,
  },
  async ready () {
    const frame = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('frame[scrolling=yes]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(frame.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^iiv\.pl$/,
  },
  async ready () {
    let d = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('#counting');
    let rv = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.post(location.pathname, {
      blocker: 0,
      salt: d.dataset.salt,
    }, {
      'X-OCTOBER-REQUEST-HANDLER': 'onAfterShortcutView',
      'X-OCTOBER-REQUEST-PARTIALS': 'shortcut/link_show',
    });
    rv = JSON.parse(rv);
    d = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.toDOM(rv['shortcut/link_show']);
    rv = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('a', d);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(rv.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^imagetwist\.netlify\.app$/,
  },
  async ready () {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('.btn.btn-dark');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule:
    {
      host: /^www\.javlibrary\.com$/,
      query: /url=([^&]+)/,
    },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(decodeURIComponent(m.query[1]));
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^kimochi\.info$/,
    path: /^\/inter$/
  },
  async ready () {
    const ma = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('a#next');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(ma.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(www\.)?kingofshrink\.com$/,
  },
  async ready () {
    const l = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('#textresult > a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(l.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^leechall\.download$/,
    path: /^\/file\/([a-zA-Z0-9/=]+)/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(decodeURIComponent(atob(m.path[1])));
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: 
    {
      host: /^leechpremium\.link$/,
      path: /^\/cheat\//,
      query: /^\?link=([a-zA-Z0-9/=]+)$/,
    },
  async start (m) {
    const rawLink = atob(decodeURIComponent(m.query[1]));
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(rawLink);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^link\.tl$/,
    path: /\//,
  },
  async ready () {
    let m = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts(/eval\((.+}\))\)/);
    m = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.evil(`(${m[1]})`);
    let l = m.match(/(?:\$\.ajax.+|href=')(http.+skip.+|http[^']+)',data/);
    l = l[1];
    if (!l.match(/skip/)) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(l);
      return;
    }
    const token = m.match(/'X-CSRF-TOKEN':'([^']+)'},/);
    let rl = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.post(l, '', {
      'X-CSRF-TOKEN': token[1],
    });
    rl = JSON.parse(rl);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(rl.url);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^link\.turkdown\.com$/,
  },
  async ready () {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(5000);
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('.btn-success.btn-lg.get-link');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^link1s\.com$/,
  },
  async ready () {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(10000);
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('.btn.btn-success.btn-lg.get-link');
    b.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.linkdecode\.com$/,
    path: /^\/$/,
    query: /^\?(.+)$/,
  },
  async ready (m) {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.remove('iframe');
    let lnk = m.query[1];
    if (m.query[1].match(/^https?:\/\//)) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(lnk);
      return;
    }
    let b = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.$('#popup');
    if (b && b.href) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(b.href);
      return;
    }
    b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('#m > .Visit_Link');
    b = b.onclick.toString().match(/window\.open\('([^']+)'/);
    if (!b) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.AdsBypasser('pattern changed');
    }
    lnk = b[1].match(/\?(https?:\/\/.*)$/);
    if (lnk) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(lnk[1]);
      return;
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(b[1]);
  },
});
(function () {
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
    rule: {
      host: [
        /^adsafelink\.com$/,
        /^birdurls\.com$/,
        /^clicksfly\.com$/,
        /^linkmoni\.com$/,
        /^go.linksop\.com$/,
        /^shrinkearn\.com$/,
        /^shrt10\.com$/,
        /^try2link\.com$/,
        /^urlshortx\.com$/,
        /^megaurl\.in$/,
        /^miniurl\.io$/,
        /^oke\.io$/,
        /^shrinkme\.io$/,
        /^uii\.io$/,
        /^illink\.net$/,
        /^linkrex\.net$/,
        /^vinaurl\.net$/,
        /^payskip\.org$/,
        /^clik\.pw$/,
        /^clk\.sh$/,
        /^megalink\.pro$/,
        /^pingit\.im$/,
        /^short\.pe$/,
        /^stfly\.(me|xyz)$/,
        /^tii\.la$/,
        /^tl\.tc$/,
      ],
    },
    async ready () {
      const handler = new RecaptchaHandler();
      await handler.call();
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
    rule: {
      host: [  
        /^aylink\.co$/,
        /^cutpaid\.com$/,
        /^dz4link\.com$/,
        /^fc-lc\.(com|xyz)$/,
        /^met\.bz/,
        /^mitly\.us$/,
        /^tmearn\.net$/,
      ],
    },
    async ready () {
      const handler = new InvisibleRecaptchaHandler();
      await handler.call();
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
    rule: {
      host: [
        /^adbull\.me$/,
        /^adshort\.co$/,
        /^adslink\.pw$/,
        /^linclik\.com$/,
      ],
    },
    async ready () {
      const handler = new StagedHandler();
      await handler.call();
    },
  });
  class AbstractHandler {
    constructor () {
      this._overlaySelector = [
        '[class$="Overlay"]',
        '#__random_class_name__',
        '#headlineatas',
        '#myModal',
        '.opacity_wrapper',
        '#overlay',
      ].join(', ');
      this._formSelector = [
        '#go-link',
        '.go-link',
        '#originalLink.get-link',
        'form[action="/links/go"]',
      ].join(', ');
    }
    removeOverlay () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.remove(this._overlaySelector);
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.block(this._overlaySelector, document.body);
      setInterval(() => {
        document.body.style.overflow = 'initial';
      }, 500);
    }
    removeFrame () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.remove('iframe');
    }
    async call () {
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
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(url);
    }
  }
  class RecaptchaHandler extends AbstractHandler {
    async prepare () {
      this.removeOverlay();
      const f = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.$('#captchaShortlink, div.g-recaptcha');
      if (!f) {
        return true;
      }
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.info('recaptcha detected, stop');
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.info('trying to listen submit button');
      const b = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.$('#invisibleCaptchaShortlink');
      if (!b) {
        return false;
      }
      await this.submitListen(b, f);
      return false;
    }
    async submitListen (b) {
      const o = new MutationObserver(() => {
        if (!b.disabled) {
          b.click();
        }
      });
      o.observe(b, {
        attributes: true,
      });
    }
    async getMiddleware () {
      return await getJQueryForm(this._formSelector);
    }
    withoutMiddleware () {
      const f = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('#link-view');
      f.submit();
    }
    async getURL (jForm) {
      while (true) {
        await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(1000);
        try {
          const url = await getURLFromJQueryForm(jForm);
          if (url) {
            return url;
          }
        } catch (e) {
          _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.warn(e);
        }
      }
    }
  }
  class InvisibleRecaptchaHandler extends RecaptchaHandler {
    async submitListen (b, f) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(1000);
      const click = f.clientWidth === 0 || f.childNodes.length === 0;
      if (click && !b.disabled) {
        _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.info('clicking submit button, because recaptcha was empty');
        b.setAttribute('onclick', '');
        b.click();
      }
    }
  }
  class StagedHandler extends AbstractHandler {
    prepare () {
      this.removeFrame();
      this.removeOverlay();
      return true;
    }
    async getMiddleware () {
      const f = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.$('#link-view');
      if (!f) {
        return document;
      }
      const args = extractArgument(f);
      const url = f.getAttribute('action');
      let page = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.post(url, args);
      page = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.toDOM(page);
      return page;
    }
    withoutMiddleware () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.info('no page');
    }
    async getURL (page) {
      const f = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('#go-link', page);
      const args = extractArgument(f);
      const url = f.getAttribute('action');
      let data = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.post(url, args);
      data = JSON.parse(data);
      if (data && data.url) {
        return data.url;
      }
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.AdsBypasserError('wrong data');
    }
  }
  function extractArgument (form) {
    const args = {};
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.forEach(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.$$('input', form), (v) => {
      args[v.name] = v.value;
    });
    return args;
  }
  async function getJQueryForm (selector) {
    let jQuery = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.window.$;
    while (!jQuery) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(50);
      jQuery = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.window.$;
    }
    const f = jQuery(selector);
    if (f.length > 0) {
      return f;
    }
    return null;
  }
  function getURLFromJQueryForm (jForm) {
    return new Promise((resolve, reject) => {
      if (jForm.is('a') && jForm.attr('href')) {
        resolve(jForm.attr('href'));
      }
      const jQuery = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.window.$;
      jQuery.ajax({
        dataType: 'json',
        type: 'POST',
        url: jForm.attr('action'),
        data: jForm.serialize(),
        success: (result) => {
          if (result.url) {
            resolve(result.url);
          } else {
            reject(new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.AdsBypasserError(result.message));
          }
        },
        error: (xhr, status, error) => {
          _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.warn(xhr, status, error);
          reject(new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.AdsBypasserError('request error'));
        },
      });
    });
  }
})();
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^n\.fcd\.su$/,
  },
  async ready () {
    const btn = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('a.btn:nth-child(2)');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(btn.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(www\.)?linkplugapp\.com$/,
  },
  async ready () {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('#mc_embed_signup_scroll a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^linkpoi\.me$/,
  },
  async ready () {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(6000);
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('.btn.btn-primary.btn-block.redirect.get-link');
    b.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^linkshrink\.net$/,
    path: /^\/[a-zA-Z0-9]+$/,
  },
  async start () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.window._impspcabe = 0;
  },
  async ready () {
    let l = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts(/revC\("([^"]+)"\)/);
    l = atob(l[1]);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink('/' + l);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^linksly\.co$/,
  },
  async ready () {
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('.btn.btn-primary');
    b.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^go\.linksly\.co$/,
  },
  async ready () {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(6000);
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('a[class="btn btn-success btn-lg get-link"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.lolinez\.com$/,
    query: /\?(.+)/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(m.query[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [
      /^lonelymoon\.net$/,
      /^(intercelestial|sweetlantern)\.com$/,
    ],
  },
  async ready () {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(1000);
    const ln = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('#landing.soractrl .to a');
    ln.click();
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(2000); 
    const tl = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('.soractrl img#showlink.spoint');
    tl.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^mangalist\.org$/,
  },
  async ready () {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(1000);
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('[class="btn btn-primary url text-center center-block"]');
    b.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^mirrorfilehost\.com$/,
  },
  async ready () {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(3 * 1000);
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
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^nmac\.to$/,
    path: /^\/download\/(.+)/,
  },
  async start (m) {
    const url = atob(m.path[1]);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(url);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^noriskdomain\.com$/,
  },
  async ready () {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(10000);
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('.uk-button.uk-button-large.uk-button-primary.go-to-button');
    if (b) {
      b.click();
    }
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('.uk-button.uk-button-large.uk-button-primary.go-to-button');
    if (a) {
      a.click();
    }
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^noweconomy\.live$/,
  },
  async ready () {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('[class="btn-main get-link"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.oni\.vn$/,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.remove('iframe');
    let data = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts(/data:"([^"]+)"/);
    if (!data) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.AdsBypasserError('pattern changed');
    }
    data = data[1];
    const url = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.get('/click.html', data);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(url);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(www\.)?ouo\.(io|press)$/,
    path: /(^\/\w+$|^\/go\/\w+$)/,
  },
  async ready () {
    (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('form').submit();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^paylinnk\.com$/,
  },
  async ready () {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(2000);
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('div.banner.banner-captcha');
    a.click();
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('.btn.btn-success.btn-lg.get-link');
    b.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^pucuk\.xyz$/,
    path: /^\/\w+/,
  },
  async ready () {
    const px = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('#content article center a.button.icon.fa-link');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(px.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [
      /^vyvmedia\.my\.id$/,
      /^realsht\.mobi$/,
    ],
  },
  async ready () {
    const n = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('#download_link');
    n.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^preview\.rlu\.ru$/,
  },
  async ready () {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('#content > .long_url > a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [
      /^segmentnext\.com$/,
      /^(www\.)?videogamesblogger\.com$/,
    ],
    path: /^\/interstitial\.html$/,
    query: /return_url=([^&]+)/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(decodeURIComponent(m.query[1]));
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [
      /^(www\.)?semprot\.com$/,
      /^46\.166\.167\.16$/,
    ],
    path: /^\/ahli\.php/,
    query: /^\?url=(.*)/,
  },
  async ready () {
    const sem = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts(/var the_url = '([^']+)';/);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(sem[1]);
  },
});
(function () {
  const hostRules = [
    /^(jnw0|cllkme|clkmein|corneey|ceesty)\.com$/,
    /^(destyy|festyy|gestyy)\.com$/,
    /^sh\.st$/,
    /^(viid|wiid)\.me$/,
  ];
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
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
        o.observe((0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('#skip_button'), {
          attributes: true,
          attributeFilter: ['class'],
        });
      });
      const url = await promise;
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(url);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
    rule: {
      host: hostRules,
      path: /https?:\/\//,
    },
    async start () {
      let url = window.location.pathname + window.location.search + window.location.hash;
      url = url.match(/(https?:\/\/.*)$/);
      url = url[1];
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(url);
    },
  });
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
    rule: {
      host: hostRules,
      path: /^\/[\d\w]+/,
    },
    async start () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.window._impspcabe = 0;
    },
    async ready () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.remove('iframe');
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.removeAllTimer();
      const m = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts(/sessionId: "([\d\w]+)",/);
      if (m) {
        afterGotSessionId(m[1]);
        return;
      }
      const o = new MutationObserver((mutations) => {
        mutations.forEach(() => {
          const m = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts(/sessionId: "([\d\w]+)",/);
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
    const X_NewRelic_ID = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts(/xpid:"([^"]+)"/);
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
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.get('/shortest-url/end-adsession', data, header).then(function (text) {
        const r = JSON.parse(text);
        if (r.status == 'ok' && r.destinationUrl) {
          clearInterval(i);
          _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.removeAllTimer();
          const url = decodeURIComponent(r.destinationUrl);
          return _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(url);
        }
      });
    }, 1000);
  }
})();
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(short|srt)\.am$/,
  },
  async ready () {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(5000);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink('', {
      post: {
        _image: 'Continue',
      },
    });
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [
      /^shortlinkto\.site$/,
      /^uplinkto\.hair$/,
    ],  
  },
  async ready () {
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('.btn.btn-primary.btn-block');
    b.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(www\.)?shortly\.xyz$/,
  },
  async ready () {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(8000);
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('.btn-success.btn-lg.get-link');
    a.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^shortmoz\.link$/,
  },
  async ready () {
    const button = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('.btn.btn-primary.btn-block');
    button.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^get\.shrink-service\.it$/,
    path: /^\/(.+)/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(`//www.shrink-service.it/shrinked/${m.path[1]}`);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.shrink-service\.it$/,
    path: /^\/btn\/(.+)/,
  },
  async ready (m) {
    const path_id = m.path[1];
    const API_URL = '//www.shrink-service.it/v3/api/prototype/init?req=init&uri=https://adshnk.com/'+path_id;
    let linkInfo = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.get(API_URL, false, {
      Origin: _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.none,
      Referer: _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.none,
      Cookie: 'referrer=1',
      'X-Requested-With': _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.none,
    });
    linkInfo = JSON.parse(linkInfo);
    if (!linkInfo.success) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.AdsBypasserError('error when getting api information');
    }
    const urlInfo = JSON.parse(linkInfo['0'].metadata);
    if (urlInfo.url) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(urlInfo.url);
      return;
    }
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.shrink-service\.it$/,
    path: /^\/shrinked\//,
  },
  async ready () {
    const i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('input[id][name]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(i.value);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.shrink-service\.it$/,
    path: /^\/[se]\//,
  },
  async ready () {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.remove('iframe');
    const i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('body > input[id][name]');
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(i.value);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(www\.)?similarsites\.com$/,
    path: /^\/goto\/([^?]+)/
  },
  async start (m) {
    let l = m.path[1];
    if (!/^https?:\/\//.test(l)) {
      l = 'http://' + l;
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(l);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.spaste\.com$/,
    path: /^\/site\//,
  },
  async ready () {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(15000);
    (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('#template-contactform-submit').click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^sub2unlock\.com$/,
    path: /^\/link\/get\//,
  },
  async ready () {
    const su = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('a#link.unlock-step-link.getlink');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(su.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^sub2unlock\.com$/,
    path: /^\/[a-zA-Z0-9]+/,
  },
  async ready () {
    const su = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts(/'href', '([^']+)'/);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(su[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(www\.)?supercheats\.com$/,
    path: /^\/interstitial\.html$/,
    query: /(?:\?|&)oldurl=([^&]+)(?:$|&)/,
  },
  async start (m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(m.query[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^surfsees\.com$/,
    query: /^\?go=([a-zA-Z0-9]+)$/,
  },
  async start () {
    const path = window.location.href.replace('go', 'link');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(path);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^surfsees\.com$/,
    query: /^\?link=([a-zA-Z0-9]+)(clickarurl)?$/,
  },
  async ready () {
    const s = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('input.btn.btn-primary');
    s.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^surfsees\.com$/,
  },
  async ready () {
    const surl = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('#wpsafe-linkz a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(surl.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^swzz\.xyz$/,
    path: /^\/link\/\w+\/$/,
  },
  async ready () {
    const g = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('a.btn-wrapper.link');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(g.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^techfunda\.net$/,
    path: [
      /^\/link\//,
      /^\/safe\//,
    ],
  },
  async ready () {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('.hide a.btn');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^techgeek\.digital$/,
  },
  async ready () {
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('[class="btn-main get-link"]');
    if (b) {
      b.click();
    }
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('a[class="btn-main get-link"]');
    if (a) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
    }
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^thinfi\.com$/,
  },
  async ready () {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('div p a');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^go\.tnshort\.net$/,
  },
  async ready () {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(3000);
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('a[class="btn btn-success btn-lg get-link"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^tribuntekno\.com$/,
  },
  async ready () {
    const b = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.$('#lite-human-verif-button');
    if (b) {
      b.click();
    }
    const c = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.$('#lite-start-sora-button');
    if (c) {
      c.click();
    }
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^u\.to$/,
    path: /^\/[\w-]+/,
  },
  async ready () {
    const u = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts(/window.location='([^']+)';/);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(u[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^url\.ie$/,
  },
  async ready () {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('a[title="Link to original URL"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [
      /(^|\.)urlcash\.(com|org)$/,
      /^(detonating|smilinglinks|pornyhost|urlgalleries)\.com$/,
      /^looble\.net$/,
      /^xxxs\.org$/,
    ],
  },
  async ready () {
    if (_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.window && _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.window.linkDestUrl) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.window.linkDestUrl);
      return;
    }
    const matches = document.body.innerHTML.match(/linkDestUrl = '(.+)'/);
    if (matches) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(matches[1]);
      return;
    }
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^ux9\.de$/,
  },
  async ready () {
    const meta = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('meta[http-equiv="refresh"][content*="url="]');
    const url = meta.getAttribute('content').match(/http.*/)[0];
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(url);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(www\.)?vzturl\.com$/,
  },
  async ready () {
    const frame = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('frame[scrolling=yes]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(frame.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^xpshort\.com$/,
  },
  async ready () {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(8000);
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('.btn.btn-success.btn-lg.get-link');
    a.click();
  },
});
 }),
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   $: () => ( $),
   _: () => ( _)
 });
 var util_ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
 var util_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
 var util_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
 var util_dispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
 var util_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
 var util_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
 var util_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
 var util_misc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
 var util_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
const _ = {
  AdsBypasserError: util_core__WEBPACK_IMPORTED_MODULE_2__.AdsBypasserError,
  evil: util_misc__WEBPACK_IMPORTED_MODULE_7__.evil,
  find: util_core__WEBPACK_IMPORTED_MODULE_2__.find,
  forEach: util_core__WEBPACK_IMPORTED_MODULE_2__.forEach,
  generateRandomIP: util_misc__WEBPACK_IMPORTED_MODULE_7__.generateRandomIP,
  info: util_logger__WEBPACK_IMPORTED_MODULE_6__.info,
  none: util_core__WEBPACK_IMPORTED_MODULE_2__.none,
  partial: util_core__WEBPACK_IMPORTED_MODULE_2__.partial,
  register: util_dispatcher__WEBPACK_IMPORTED_MODULE_3__.register,
  tryEvery: util_core__WEBPACK_IMPORTED_MODULE_2__.tryEvery,
  wait: util_core__WEBPACK_IMPORTED_MODULE_2__.wait,
  warn: util_logger__WEBPACK_IMPORTED_MODULE_6__.warn,
};
function $ (selector, context) {
  return (0,util_dom__WEBPACK_IMPORTED_MODULE_4__.querySelector)(selector, context);
}
$.$ = util_dom__WEBPACK_IMPORTED_MODULE_4__.querySelectorOrNull;
$.$$ = util_dom__WEBPACK_IMPORTED_MODULE_4__.querySelectorAll;
$.block = util_dom__WEBPACK_IMPORTED_MODULE_4__.block;
$.get = util_ajax__WEBPACK_IMPORTED_MODULE_0__.get;
$.getCookie = util_cookie__WEBPACK_IMPORTED_MODULE_1__.getCookie;
$.nuke = util_misc__WEBPACK_IMPORTED_MODULE_7__.nuke;
$.openLink = util_link__WEBPACK_IMPORTED_MODULE_5__.openLink;
$.post = util_ajax__WEBPACK_IMPORTED_MODULE_0__.post;
$.remove = util_dom__WEBPACK_IMPORTED_MODULE_4__.remove;
$.removeAllTimer = util_misc__WEBPACK_IMPORTED_MODULE_7__.removeAllTimer;
$.resetCookies = util_cookie__WEBPACK_IMPORTED_MODULE_1__.resetCookies;
$.searchFromScripts = util_dom__WEBPACK_IMPORTED_MODULE_4__.searchFromScripts;
$.setCookie = util_cookie__WEBPACK_IMPORTED_MODULE_1__.setCookie;
$.toDOM = util_dom__WEBPACK_IMPORTED_MODULE_4__.toDOM;
$.window = util_platform__WEBPACK_IMPORTED_MODULE_8__.usw;
 }),
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   get: () => ( get),
   post: () => ( post)
 });
 var util_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 var util_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
 var util_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
class AjaxError extends util_core__WEBPACK_IMPORTED_MODULE_0__.AdsBypasserError {
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
function * flattenObject (object) {
  if (!object) {
    return;
  }
  for (const [k, v] of Object.entries(object)) {
    if (Array.isArray(v)) {
      for (const v_ of v) {
        yield [[k, ''], v_];
      }
    } else if (typeof v === 'object') {
      for (const [k_, v_] of flattenObject(v)) {
        yield [[k, ...k_], v_];
      }
    } else {
      yield [[k], v];
    }
  }
}
function flattenKey (keyList) {
  const [head, ...rest] = keyList;
  return `${head}${rest.map(_ => `[${_}]`)}`;
}
function deepJoin (prefix, object) {
  const keys = Object.getOwnPropertyNames(object);
  const mapped = (0,util_core__WEBPACK_IMPORTED_MODULE_0__.map)(keys, (k) => {
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
  return (0,util_core__WEBPACK_IMPORTED_MODULE_0__.map)(keys, (k) => {
    const v = data[k];
    if (typeof v === 'object') {
      return deepJoin(k, v);
    }
    const tmp = [k, v].map(encodeURIComponent);
    return tmp.join('=');
  }).join('&');
}
function toForm (data) {
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
  const form = new FormData();
  for (const [k, v] of flattenObject(data)) {
    form.append(flattenKey(k), v);
  }
  return form;
}
function ajax (method, url, data, headers) {
  (0,util_logger__WEBPACK_IMPORTED_MODULE_2__.debug)('ajax', method, url, data, headers);
  const l = document.createElement('a');
  l.href = url;
  const reqHost = l.hostname;
  const overrideHeaders = {
    Host: reqHost || window.location.host,
    Origin: window.location.origin,
    Referer: window.location.href,
    'X-Requested-With': 'XMLHttpRequest',
  };
  (0,util_core__WEBPACK_IMPORTED_MODULE_0__.forEach)(overrideHeaders, (v, k) => {
    if (headers[k] === util_core__WEBPACK_IMPORTED_MODULE_0__.none) {
      delete headers[k];
    } else {
      headers[k] = v;
    }
  });
  if (data) {
    if (headers['Content-Type'].indexOf('json') >= 0) {
      data = JSON.stringify(data);
    } else if (headers['Content-Type'].indexOf('multipart') >= 0) {
      data = toForm(data);
    } else {
      data = toQuery(data);
    }
    headers['Content-Length'] = data.length;
  }
  return new Promise((resolve, reject) => {
    util_platform__WEBPACK_IMPORTED_MODULE_1__.GMAPI.xmlHttpRequest({
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
    (0,util_core__WEBPACK_IMPORTED_MODULE_0__.forEach)(headers, (v, k) => {
      h[k] = v;
    });
  }
  return ajax('POST', url, data, h);
}
 }),
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   getCookie: () => ( getCookie),
   resetCookies: () => ( resetCookies),
   setCookie: () => ( setCookie)
 });
 var util_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function setCookie (key, value) {
  document.cookie = `${key}=${value};path=${location.pathname};`;
}
function getCookie (key) {
  let [, c,] = (0,util_core__WEBPACK_IMPORTED_MODULE_0__.find)(document.cookie.split(';'), (v) => {
    const k = v.replace(/^\s*([a-zA-Z0-9-_]+)=.+$/, '$1');
    if (k !== key) {
      return util_core__WEBPACK_IMPORTED_MODULE_0__.none;
    }
  });
  if (c === util_core__WEBPACK_IMPORTED_MODULE_0__.none) {
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
  (0,util_core__WEBPACK_IMPORTED_MODULE_0__.forEach)(document.cookie.split(';'), (v) => {
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
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   block: () => ( block),
   querySelector: () => ( querySelector),
   querySelectorAll: () => ( querySelectorAll),
   querySelectorOrNull: () => ( querySelectorOrNull),
   remove: () => ( remove),
   searchFromScripts: () => ( searchFromScripts),
   toDOM: () => ( toDOM)
 });
 var util_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 var util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
class DomNotFoundError extends util_core__WEBPACK_IMPORTED_MODULE_0__.AdsBypasserError {
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
    throw new util_core__WEBPACK_IMPORTED_MODULE_0__.AdsBypasserError('could not parse HTML to DOM');
  }
}
function remove (selector, context) {
  const nodes = querySelectorAll(selector, context);
  (0,util_core__WEBPACK_IMPORTED_MODULE_0__.forEach)(nodes, (e) => {
    (0,util_logger__WEBPACK_IMPORTED_MODULE_1__.debug)('removed', e);
    e.remove();
  });
}
function block (selector, context=null) {
  if (!context) {
    context = document;
  }
  let fn = null;
  if ((0,util_core__WEBPACK_IMPORTED_MODULE_0__.isString)(selector)) {
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
  const [, , m] = (0,util_core__WEBPACK_IMPORTED_MODULE_0__.find)(scripts, (s) => {
    const m = s.textContent.match(pattern);
    if (!m) {
      return util_core__WEBPACK_IMPORTED_MODULE_0__.none;
    }
    return m;
  });
  if (m === util_core__WEBPACK_IMPORTED_MODULE_0__.none) {
    return null;
  }
  return m;
}
function searchFromScriptsByString (pattern, context) {
  const scripts = querySelectorAll('script', context);
  const [, m,] = (0,util_core__WEBPACK_IMPORTED_MODULE_0__.find)(scripts, (s) => {
    const m = s.textContent.indexOf(pattern);
    if (m < 0) {
      return util_core__WEBPACK_IMPORTED_MODULE_0__.none;
    }
    return m;
  });
  if (m === util_core__WEBPACK_IMPORTED_MODULE_0__.none) {
    return null;
  }
  return m.textContent;
}
function searchFromScripts (pattern, context) {
  if (pattern instanceof RegExp) {
    return searchFromScriptsByRegExp(pattern, context);
  } else if ((0,util_core__WEBPACK_IMPORTED_MODULE_0__.isString)(pattern)) {
    return searchFromScriptsByString(pattern, context);
  } else {
    return null;
  }
}
 }),
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   openLink: () => ( openLink)
 });
 var util_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 var util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
function prepare (e) {
  if (!document.body) {
    document.body = document.createElement('body');
  }
  document.body.appendChild(e);
  return (0,util_core__WEBPACK_IMPORTED_MODULE_0__.wait)(0);
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
      (0,util_logger__WEBPACK_IMPORTED_MODULE_1__.info)('already clicked');
      clearInterval(tick);
      return;
    }
    (0,util_logger__WEBPACK_IMPORTED_MODULE_1__.info)('try again');
    a.click();
  }, 500);
}
async function post (path, params) {
  params = params || {};
  const form = document.createElement('form');
  form.method = 'post';
  form.action = path;
  (0,util_core__WEBPACK_IMPORTED_MODULE_0__.forEach)(params, (value, key) => {
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
  if (!(0,util_core__WEBPACK_IMPORTED_MODULE_0__.isString)(to) && !to) {
    (0,util_logger__WEBPACK_IMPORTED_MODULE_1__.warn)('false URL');
    return;
  }
  options = options || {};
  const withReferer = typeof options.referer === 'undefined' ? true : options.referer;
  const postData = options.post;
  const from = window.location.toString();
  (0,util_logger__WEBPACK_IMPORTED_MODULE_1__.info)(`${from} -> ${to}`);
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
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   evil: () => ( evil),
   generateRandomIP: () => ( generateRandomIP),
   nuke: () => ( nuke),
   removeAllTimer: () => ( removeAllTimer)
 });
 var util_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 var util_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
 var util_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
function removeAllTimer () {
  let handle = window.setInterval(util_core__WEBPACK_IMPORTED_MODULE_0__.nop, 10);
  while (handle > 0) {
    window.clearInterval(handle--);
  }
  handle = window.setTimeout(util_core__WEBPACK_IMPORTED_MODULE_0__.nop, 10);
  while (handle > 0) {
    window.clearTimeout(handle--);
  }
}
function nuke (url) {
  try {
    util_platform__WEBPACK_IMPORTED_MODULE_1__.usw.document.write('nuked by AdsBypasser, leading to ...<br/>');
  } catch (e) {
    (0,util_logger__WEBPACK_IMPORTED_MODULE_2__.warn)('nuke failed', e);
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
function evil (script) {
  return ((
    GM,
    GM_deleteValue,
    GM_getResourceURL,
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
 })
 	]);
 	var __webpack_module_cache__ = {};
 	function __webpack_require__(moduleId) {
 		var cachedModule = __webpack_module_cache__[moduleId];
 		if (cachedModule !== undefined) {
 			return cachedModule.exports;
 		}
 		var module = __webpack_module_cache__[moduleId] = {
 			exports: {}
 		};
 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
 		return module.exports;
 	}
 	(() => {
 		__webpack_require__.d = (exports, definition) => {
 			for(var key in definition) {
 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
 				}
 			}
 		};
 	})();
 	(() => {
 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
 	})();
 	(() => {
 		__webpack_require__.r = (exports) => {
 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 			}
 			Object.defineProperty(exports, '__esModule', { value: true });
 		};
 	})();
var __webpack_exports__ = {};
(() => {
__webpack_require__.r(__webpack_exports__);
 var util_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 var util_dispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
 var util_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
 var util_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
 var util_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
 var _ADSBYPASSER_HANDLERS___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
const isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
function disableWindowOpen () {
  try {
    util_platform__WEBPACK_IMPORTED_MODULE_2__.usw.open = function () {
      return {
        closed: false,
      };
    };
  } catch (e) {
    (0,util_logger__WEBPACK_IMPORTED_MODULE_4__.warn)('cannot mock window.open');
  }
  util_platform__WEBPACK_IMPORTED_MODULE_2__.usw.alert = util_core__WEBPACK_IMPORTED_MODULE_0__.nop;
  util_platform__WEBPACK_IMPORTED_MODULE_2__.usw.confirm = util_core__WEBPACK_IMPORTED_MODULE_0__.nop;
}
function disableLeavePrompt (element) {
  if (!element) {
    return;
  }
  const seal = {
    set: function () {
      (0,util_logger__WEBPACK_IMPORTED_MODULE_4__.info)('blocked onbeforeunload');
    },
  };
  element.onbeforeunload = undefined;
  if (isSafari) {
    element.__defineSetter__('onbeforeunload', seal.set);
  } else {
    util_platform__WEBPACK_IMPORTED_MODULE_2__.usw.Object.defineProperty(element, 'onbeforeunload', {
      configurable: true,
      enumerable: false,
      get: undefined,
      set: seal.set,
    });
  }
  const oael = element.addEventListener;
  const nael = function (type) {
    if (type === 'beforeunload') {
      (0,util_logger__WEBPACK_IMPORTED_MODULE_4__.info)('blocked addEventListener onbeforeunload');
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
  const config = await (0,util_config__WEBPACK_IMPORTED_MODULE_3__.dumpConfig)();
  (0,util_logger__WEBPACK_IMPORTED_MODULE_4__.info)('working on\n%s \nwith\n%s', window.location.toString(), JSON.stringify(config));
  disableLeavePrompt(util_platform__WEBPACK_IMPORTED_MODULE_2__.usw);
  disableWindowOpen();
  await handler.start();
}
async function afterDOMReady (handler) {
  disableLeavePrompt(util_platform__WEBPACK_IMPORTED_MODULE_2__.usw.document.body);
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
  if (util_platform__WEBPACK_IMPORTED_MODULE_2__.rawUSW.top !== util_platform__WEBPACK_IMPORTED_MODULE_2__.rawUSW.self) {
    return;
  }
  util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.registerMenuCommand('AdsBypasser - Configure', () => {
    util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.openInTab('https://adsbypasser.github.io/configure.html');
  });
  await (0,util_config__WEBPACK_IMPORTED_MODULE_3__.loadConfig)();
  const handler = (0,util_dispatcher__WEBPACK_IMPORTED_MODULE_1__.findHandler)();
  if (handler) {
    await beforeDOMReady(handler);
    await waitDOM();
    await afterDOMReady(handler);
    return;
  }
}
main().catch((e) => {
  (0,util_logger__WEBPACK_IMPORTED_MODULE_4__.warn)(e);
});
})();
 })()
;