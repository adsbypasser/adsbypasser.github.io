// ==UserScript==
// @name           AdsBypasserLite
// @namespace      AdsBypasser
// @description    Bypass Ads
// @copyright      2012+, Wei-Cheng Pan (legnaleurc)
// @version        6.1.3
// @license        BSD
// @homepageURL    https://adsbypasser.github.io/
// @supportURL     https://github.com/adsbypasser/adsbypasser/issues
// @updateURL      https://adsbypasser.github.io/releases/adsbypasser.lite.es5.meta.js
// @downloadURL    https://adsbypasser.github.io/releases/adsbypasser.lite.es5.user.js
// @icon           https://raw.githubusercontent.com/adsbypasser/adsbypasser/v6.1.3/img/logo.png
// @grant          unsafeWindow
// @grant          GM_xmlhttpRequest
// @grant          GM_deleteValue
// @grant          GM_getValue
// @grant          GM_openInTab
// @grant          GM_registerMenuCommand
// @grant          GM_setValue
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
 	__webpack_require__.n = function(module) {
 		var getter = module && module.__esModule ?
 			function getDefault() { return module['default']; } :
 			function getModuleExports() { return module; };
 		__webpack_require__.d(getter, 'a', getter);
 		return getter;
 	};
 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
 	__webpack_require__.p = "";
 	return __webpack_require__(__webpack_require__.s = 5);
 })
 ([
 (function(module, exports, __webpack_require__) {
"use strict";
(function(Promise) {
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
var _marked = regeneratorRuntime.mark(enumerate);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
exports.AdsBypasserError = AdsBypasserError;
exports.every = every;
exports.find = find;
exports.forEach = forEach;
exports.isString = isString;
exports.map = map;
exports.none = none;
exports.nop = nop;
exports.partial = partial;
exports.template = template;
exports.tryEvery = tryEvery;
exports.wait = wait;
var AdsBypasserError = function (_Error) {
  _inherits(AdsBypasserError, _Error);
  function AdsBypasserError(message) {
    _classCallCheck(this, AdsBypasserError);
    return _possibleConstructorReturn(this, (AdsBypasserError.__proto__ || Object.getPrototypeOf(AdsBypasserError)).call(this, message));
  }
  _createClass(AdsBypasserError, [{
    key: 'name',
    get: function get() {
      return 'AdsBypasserError';
    }
  }]);
  return AdsBypasserError;
}(Error);
function forEach(collection, fn) {
  if (isArrayLike(collection)) {
    return Array.prototype.forEach.call(collection, fn);
  }
  return Object.keys(collection).forEach(function (k) {
    return fn(collection[k], k, collection);
  });
}
function every(collection, fn) {
  if (isArrayLike(collection)) {
    return Array.prototype.every.call(collection, fn);
  }
  return Object.keys(collection).every(function (k) {
    return fn(collection[k], k, collection);
  });
}
function map(collection, fn) {
  if (isArrayLike(collection)) {
    return Array.prototype.map.call(collection, fn);
  }
  var mapped = Object.assign({}, collection);
  Object.getOwnPropertyNames(mapped).forEach(function (k) {
    mapped[k] = fn(collection[k], k, collection);
  });
  return mapped;
}
function find(collection, fn) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;
  try {
    for (var _iterator = enumerate(collection)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref = _step.value;
      var _ref2 = _slicedToArray(_ref, 2);
      var k = _ref2[0];
      var v = _ref2[1];
      var r = fn(v, k, collection);
      if (r !== none) {
        return [k, v, r];
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
  return [none, none, none];
}
function enumerate(collection) {
  var keys, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, k;
  return regeneratorRuntime.wrap(function enumerate$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!isArrayLike(collection)) {
            _context.next = 3;
            break;
          }
          return _context.delegateYield(Array.prototype.entries.call(collection), 't0', 2);
        case 2:
          return _context.abrupt('return');
        case 3:
          keys = Object.getOwnPropertyNames(collection);
          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _iteratorError2 = undefined;
          _context.prev = 7;
          _iterator2 = keys[Symbol.iterator]();
        case 9:
          if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
            _context.next = 16;
            break;
          }
          k = _step2.value;
          _context.next = 13;
          return [k, collection[k]];
        case 13:
          _iteratorNormalCompletion2 = true;
          _context.next = 9;
          break;
        case 16:
          _context.next = 22;
          break;
        case 18:
          _context.prev = 18;
          _context.t1 = _context['catch'](7);
          _didIteratorError2 = true;
          _iteratorError2 = _context.t1;
        case 22:
          _context.prev = 22;
          _context.prev = 23;
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        case 25:
          _context.prev = 25;
          if (!_didIteratorError2) {
            _context.next = 28;
            break;
          }
          throw _iteratorError2;
        case 28:
          return _context.finish(25);
        case 29:
          return _context.finish(22);
        case 30:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[7, 18, 22, 30], [23,, 25, 29]]);
}
function isArrayLike(collection) {
  return Array.isArray(collection) || isNodeList(collection);
}
function isNodeList(collection) {
  return collection.constructor.name === 'NodeList';
}
function template(s) {
  if (typeof s !== 'string') {
    if (s instanceof String) {
      s = s.toString();
    } else {
      throw new AdsBypasserError('template must be a string');
    }
  }
  var T = {
    '{{': '{',
    '}}': '}'
  };
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var kwargs = args[args.length - 1];
    return s.replace(/\{\{|\}\}|\{([^}]+)\}/g, function (m, key) {
      if (T.hasOwnProperty(m)) {
        return T[m];
      }
      if (args.hasOwnProperty(key)) {
        return args[key];
      }
      if (kwargs.hasOwnProperty(key)) {
        return kwargs[key];
      }
      return m;
    });
  };
}
function partial(fn) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  if (typeof fn !== 'function') {
    throw new AdsBypasserError('must give a function');
  }
  return function () {
    for (var _len3 = arguments.length, innerArgs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      innerArgs[_key3] = arguments[_key3];
    }
    return fn.apply(undefined, _toConsumableArray(args.concat(innerArgs)));
  };
}
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}
function nop() {}
var none = nop;
function wait(msDelay) {
  return new Promise(function (resolve) {
    setTimeout(resolve, msDelay);
  });
}
function tryEvery(msInterval, fn) {
  return new Promise(function (resolve) {
    var handle = setInterval(function () {
      var result = fn();
      if (result !== none) {
        clearInterval(handle);
        resolve(result);
      }
    }, msInterval);
  });
}
}.call(exports, __webpack_require__(1)["Promise_"]))
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
(function(Promise) {
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Promise_ = undefined;
var _platform = __webpack_require__(2);
exports.Promise_ = Promise_;
var Promise_ = getPromiseConstructor();
function getPromiseConstructor() {
  var _this = this;
  if (_platform.usw.Future) {
    return function (fn) {
      return _platform.usw.Future.call(_this, function (fr) {
        fn(fr.resolve.bind(fr), fr.reject.bind(fr));
      });
    };
  }
  if (PromiseResolver) {
    return function (fn) {
      return new Promise(function (pr) {
        fn(pr.resolve.bind(pr), pr.reject.bind(pr));
      });
    };
  }
  return Promise;
}
}.call(exports, __webpack_require__(1)["Promise_"]))
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GM = exports.uswProxy = exports.usw = undefined;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
var _core = __webpack_require__(0);
exports.usw = usw;
exports.uswProxy = uswProxy;
exports.GM = GM;
var usw = getUnsafeWindow();
var uswProxy = getUnsafeWindowProxy();
var GM = getGreaseMonkeyAPI();
function getUnsafeWindow() {
  var w = null;
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
function getGreaseMonkeyAPI() {
  if (usw.global) {
    return null;
  }
  return {
    openInTab: GM_openInTab,
    registerMenuCommand: GM_registerMenuCommand,
    getValue: GM_getValue,
    setValue: GM_setValue,
    deleteValue: GM_deleteValue,
    xmlhttpRequest: GM_xmlhttpRequest,
    getResourceText: GM_getResourceText,
    addStyle: GM_addStyle,
    getResourceURL: GM_getResourceURL
  };
}
var MAGIC_KEY = '__adsbypasser_reverse_proxy__';
function getUnsafeWindowProxy() {
  var isFirefox = typeof InstallTrigger !== 'undefined';
  var isWebExtension = typeof cloneInto === 'undefined' || typeof exportFunction === 'undefined';
  if (!isFirefox || isWebExtension) {
    return usw;
  }
  var decorator = {
    set: function set(target, key, value) {
      if (key === MAGIC_KEY) {
        return false;
      }
      if (target === unsafeWindow && key === 'open') {
        var d = Object.getOwnPropertyDescriptor(target, key);
        d.value = clone(function () {
          var rv = value();
          return cloneInto(rv, unsafeWindow);
        });
        Object.defineProperty(target, key, d);
      } else {
        target[key] = clone(value);
      }
      return true;
    },
    get: function get(target, key) {
      if (key === MAGIC_KEY) {
        return target;
      }
      var value = target[key];
      var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
      if (value === null || type !== 'function' && type !== 'object') {
        return value;
      }
      return new Proxy(value, decorator);
    },
    apply: function apply(target, self, args) {
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
      var usargs = clone(args);
      return target.apply(self, usargs);
    },
    construct: function construct(target, args) {
      args = Array.prototype.slice.call(args);
      args.unshift(undefined);
      var usargs = clone(args);
      var bind = unsafeWindow.Function.prototype.bind;
      return new (bind.apply(target, usargs))();
    }
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
      allowCrossOriginArguments: true
    });
  }
  if (safe instanceof Array) {
    var _unsafe = new unsafeWindow.Array();
    for (var i = 0; i < safe.length; ++i) {
      _unsafe.push(clone(safe[i]));
    }
    return _unsafe;
  }
  var unsafe = new unsafeWindow.Object();
  (0, _core.forEach)(safe, function (v, k) {
    unsafe[k] = clone(v);
  });
  return unsafe;
}
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warn = exports.info = undefined;
var _core = __webpack_require__(0);
exports.info = info;
exports.warn = warn;
var quiet = false;
function log(method, args) {
  if (quiet) {
    return;
  }
  args = Array.prototype.slice.call(args);
  if ((0, _core.isString)(args[0])) {
    args[0] = 'AdsBypasser: ' + args[0];
  } else {
    args.unshift('AdsBypasser:');
  }
  var f = console[method];
  if (typeof f === 'function') {
    f.apply(console, args);
  }
}
function info() {
  log('info', arguments);
}
function warn() {
  log('warn', arguments);
}
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findHandler = exports.register = undefined;
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
var _core = __webpack_require__(0);
exports.register = register;
exports.findHandler = findHandler;
var patterns = [];
function register(pattern) {
  patterns.push(pattern);
}
function dispatchByObject(rule, url_6) {
  var matched = (0, _core.map)(rule, function (pattern, part) {
    if (pattern instanceof RegExp) {
      return url_6[part].match(pattern);
    }
    if (Array.isArray(pattern)) {
      var _find = (0, _core.find)(pattern, function (sp) {
        var m = url_6[part].match(sp);
        return m || _core.none;
      }),
          _find2 = _slicedToArray(_find, 3),
          r = _find2[2];
      return r !== _core.none ? r : null;
    }
    throw new _core.AdsBypasserError('invalid rule');
  });
  var passed = (0, _core.every)(matched, function (v) {
    return !!v;
  });
  return passed ? matched : null;
}
function dispatchByRegExp(rule, url_1) {
  return url_1.match(rule);
}
function dispatchByArray(rules, url_1, url_3, url_6) {
  var _find3 = (0, _core.find)(rules, function (rule) {
    var m = dispatch(rule, url_1, url_3, url_6);
    return m ? m : _core.none;
  }),
      _find4 = _slicedToArray(_find3, 3),
      r = _find4[2];
  return r !== _core.none ? r : null;
}
function dispatchByString(rule, url_3) {
  var scheme = /\*|https?|file|ftp|chrome-extension/;
  var host = /\*|(\*\.)?([^/*]+)/;
  var path = /\/.*/;
  var tpl = (0, _core.template)('^({scheme})://({host})?({path})$');
  tpl = tpl({
    scheme: scheme.source,
    host: host.source,
    path: path.source
  });
  var up = new RegExp(tpl);
  var matched = rule.match(up);
  if (!matched) {
    return null;
  }
  scheme = matched[1];
  host = matched[2];
  var wc = matched[3];
  var sd = matched[4];
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
  tpl = (0, _core.template)('^{0}$');
  var tmp = path.replace(/[*.[\]?+#]/g, function (c) {
    if (c === '*') {
      return '.*';
    }
    return '\\' + c;
  });
  path = new RegExp(tpl(tmp));
  if (!path.test(url_3.path)) {
    return null;
  }
  return url_3;
}
function dispatchByFunction(rule, url_1, url_3, url_6) {
  return rule(url_1, url_3, url_6);
}
function dispatch(rule, url_1, url_3, url_6) {
  if (Array.isArray(rule)) {
    return dispatchByArray(rule, url_1, url_3, url_6);
  }
  if (typeof rule === 'function') {
    return dispatchByFunction(rule, url_1, url_3, url_6);
  }
  if (rule instanceof RegExp) {
    return dispatchByRegExp(rule, url_1);
  }
  if ((0, _core.isString)(rule)) {
    return dispatchByString(rule, url_3);
  }
  return dispatchByObject(rule, url_6);
}
function findHandler() {
  var url_1 = window.location.toString();
  var url_3 = {
    scheme: window.location.protocol.slice(0, -1),
    host: window.location.host,
    path: window.location.pathname + window.location.search + window.location.hash
  };
  var url_6 = {
    scheme: window.location.protocol,
    host: window.location.hostname,
    port: window.location.port,
    path: window.location.pathname,
    query: window.location.search,
    hash: window.location.hash
  };
  var _find5 = (0, _core.find)(patterns, function (pattern) {
    var m = dispatch(pattern.rule, url_1, url_3, url_6);
    return m ? m : _core.none;
  }),
      _find6 = _slicedToArray(_find5, 3),
      i = _find6[0],
      pattern = _find6[1],
      matched = _find6[2];
  if (i === _core.none) {
    return null;
  }
  if (!pattern.start && !pattern.ready) {
    return null;
  }
  return {
    start: pattern.start ? (0, _core.partial)(pattern.start, matched) : _core.nop,
    ready: pattern.ready ? (0, _core.partial)(pattern.ready, matched) : _core.nop
  };
}
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
(function(Promise) {
var beforeDOMReady = function () {
  var _ref = _asyncToGenerator( regeneratorRuntime.mark(function _callee(handler) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _logger.info)('working on\n%s \nwith\n%s', window.location.toString(), JSON.stringify(_config.config));
            disableLeavePrompt(_platform.uswProxy);
            disableWindowOpen();
            _context.next = 5;
            return handler.start();
          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return function beforeDOMReady(_x) {
    return _ref.apply(this, arguments);
  };
}();
var afterDOMReady = function () {
  var _ref2 = _asyncToGenerator( regeneratorRuntime.mark(function _callee2(handler) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            disableLeavePrompt(_platform.uswProxy.document.body);
            changeTitle();
            _context2.next = 4;
            return handler.ready();
          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return function afterDOMReady(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var main = function () {
  var _ref3 = _asyncToGenerator( regeneratorRuntime.mark(function _callee3() {
    var handler;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(_platform.usw.top !== _platform.usw.self)) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt('return');
          case 2:
            _platform.GM.registerMenuCommand('AdsBypasser - Configure', function () {
              _platform.GM.openInTab('https://adsbypasser.github.io/configure.html');
            });
            (0, _config.loadConfig)();
            handler = (0, _dispatcher.findHandler)();
            if (!handler) {
              _context3.next = 13;
              break;
            }
            _context3.next = 8;
            return beforeDOMReady(handler);
          case 8:
            _context3.next = 10;
            return waitDOM();
          case 10:
            _context3.next = 12;
            return afterDOMReady(handler);
          case 12:
            return _context3.abrupt('return');
          case 13:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return function main() {
    return _ref3.apply(this, arguments);
  };
}();
var _core = __webpack_require__(0);
var _dispatcher = __webpack_require__(4);
var _platform = __webpack_require__(2);
var _config = __webpack_require__(6);
var _logger = __webpack_require__(3);
__webpack_require__(7);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
function disableWindowOpen() {
  _platform.uswProxy.open = function () {
    return {
      closed: false
    };
  };
  _platform.uswProxy.alert = _core.nop;
  _platform.uswProxy.confirm = _core.nop;
}
function disableLeavePrompt(element) {
  if (!element) {
    return;
  }
  var seal = {
    set: function set() {
      (0, _logger.info)('blocked onbeforeunload');
    }
  };
  element.onbeforeunload = undefined;
  if (isSafari) {
    element.__defineSetter__('onbeforeunload', seal.set);
  } else {
    _platform.uswProxy.Object.defineProperty(element, 'onbeforeunload', {
      configurable: true,
      enumerable: false,
      get: undefined,
      set: seal.set
    });
  }
  var oael = element.addEventListener;
  var nael = function nael(type) {
    if (type === 'beforeunload') {
      (0, _logger.info)('blocked addEventListener onbeforeunload');
      return;
    }
    return oael.apply(this, arguments);
  };
  element.addEventListener = nael;
}
function changeTitle() {
  document.title += ' - AdsBypasser';
}
function waitDOM() {
  return new Promise(function (resolve) {
    if (document.readyState !== 'loading') {
      resolve();
      return;
    }
    document.addEventListener('DOMContentLoaded', function () {
      resolve();
    });
  });
}
main().catch(function (e) {
  (0, _logger.warn)(e);
});
}.call(exports, __webpack_require__(1)["Promise_"]))
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
(function(Promise) {
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.loadConfig = undefined;
var _core = __webpack_require__(0);
var _dispatcher = __webpack_require__(4);
var _platform = __webpack_require__(2);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
exports.loadConfig = loadConfig;
exports.config = config;
var MANIFEST = [{
  name: 'version',
  key: 'version',
  default_: 0,
  verify: function verify(v) {
    return typeof v === 'number' && v >= 0;
  },
  normalize: toNumber
}, {
  name: 'alignCenter',
  key: 'align_center',
  default_: true,
  verify: isBoolean,
  normalize: toBoolean
}, {
  name: 'changeBackground',
  key: 'change_background',
  default_: true,
  verify: isBoolean,
  normalize: toBoolean
}, {
  name: 'redirectImage',
  key: 'redirect_image',
  default_: true,
  verify: isBoolean,
  normalize: toBoolean
}, {
  name: 'scaleImage',
  key: 'scale_image',
  default_: true,
  verify: isBoolean,
  normalize: toBoolean
}, {
  name: 'logLevel',
  key: 'log_level',
  default_: 1,
  verify: function verify(v) {
    return typeof v === 'number' && v >= 0 && v <= 2;
  },
  normalize: toNumber
}];
var PATCHES = [function (c) {
  var ac = typeof c.alignCenter === 'boolean';
  if (typeof c.changeBackground !== 'boolean') {
    c.changeBackground = ac ? c.alignCenter : true;
  }
  if (typeof c.scaleImage !== 'boolean') {
    c.scaleImage = ac ? c.alignCenter : true;
  }
  if (!ac) {
    c.alignCenter = true;
  }
  if (typeof c.redirectImage !== 'boolean') {
    c.redirectImage = true;
  }
}, function (c) {
  if (typeof c.externalServerSupport !== 'boolean') {
    c.externalServerSupport = false;
  }
}, function (c) {
  if (typeof c.logLevel !== 'number') {
    c.logLevel = 1;
  }
}, function () {
  _platform.GM.deleteValue('external_server_support');
}];
function isBoolean(v) {
  return typeof v === 'boolean';
}
function toBoolean(v) {
  return !!v;
}
function toNumber(v) {
  return parseInt(v, 10);
}
function createConfig() {
  var c = {};
  (0, _core.forEach)(MANIFEST, function (m) {
    Object.defineProperty(c, m.name, {
      configurable: true,
      enumerable: true,
      get: function get() {
        return _platform.GM.getValue(m.key, m.default_);
      },
      set: function set(v) {
        _platform.GM.setValue(m.key, v);
        var nv = _platform.GM.getValue(m.key, m.default_);
        if (nv !== v) {
          var s = (0, _core.template)('failed to write config, key: {0}, value: {1}, new: {2}');
          throw new _core.AdsBypasserError(s(s.key, nv, v));
        }
      }
    });
  });
  return c;
}
function senityCheck(c) {
  var ok = (0, _core.every)(MANIFEST, function (m) {
    return m.verify(c[m.name]);
  });
  if (!ok) {
    c.version = 0;
  }
  return c;
}
function migrate(c) {
  if (typeof c.version !== 'number' || c.version < 0) {
    throw new _core.AdsBypasserError('wrong config version: ' + c.version);
  }
  for (var i = 0; c.version < PATCHES.length; ++i) {
    PATCHES[c.version](c);
    ++c.version;
    if (i >= PATCHES.length) {
      throw new _core.AdsBypasserError('invalid config state', i, c);
    }
  }
  return c;
}
var config = null;
function loadConfig() {
  exports.config = config = createConfig();
  exports.config = config = senityCheck(config);
  exports.config = config = migrate(config);
  (0, _dispatcher.register)({
    rule: {
      host: /^adsbypasser\.github\.io$/,
      path: /^\/configure\.html$/
    },
    ready: function () {
      var _ref = _asyncToGenerator( regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _platform.uswProxy.commit = function (data) {
                  data.version = config.version;
                  (0, _core.forEach)(data, function (v, k) {
                    config[k] = v;
                  });
                };
                _platform.uswProxy.render({
                  version: config.version,
                  options: {
                    alignCenter: {
                      type: 'checkbox',
                      value: config.alignCenter,
                      label: 'Align Center',
                      help: 'Align image to the center if possible. (default: enabled)'
                    },
                    changeBackground: {
                      type: 'checkbox',
                      value: config.changeBackground,
                      label: 'Change Background',
                      help: 'Use Firefox-like image background if possible. (default: enabled)'
                    },
                    redirectImage: {
                      type: 'checkbox',
                      value: config.redirectImage,
                      label: 'Redirect Image',
                      help: ['Directly open image link if possible. (default: enabled)', 'If disabled, redirection will only works on link shortener sites.'].join('<br/>\n')
                    },
                    scaleImage: {
                      type: 'checkbox',
                      value: config.scaleImage,
                      label: 'Scale Image',
                      help: 'When image loaded, scale it to fit window if possible. (default: enabled)'
                    },
                    logLevel: {
                      type: 'select',
                      value: config.logLevel,
                      menu: [[0, '0 (quiet)'], [1, '1 (default)'], [2, '2 (verbose)']],
                      label: 'Log Level',
                      help: ['Log level in developer console. (default: 1)', '0 will not print anything in console.', '1 will only print logs on affected sites.', '2 will print on any sites.'].join('<br/>\n')
                    }
                  }
                });
              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function ready() {
        return _ref.apply(this, arguments);
      }
      return ready;
    }()
  });
}
}.call(exports, __webpack_require__(1)["Promise_"]))
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
(function(Promise) {
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
var _ADSBYPASSER_NAMESPACE__ = __webpack_require__(8);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^akoam\.com$/,
    path: /^\/download\//
  },
  start: function () {
    var _ref = _asyncToGenerator( regeneratorRuntime.mark(function _callee() {
      var locationLink, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              locationLink = location.hash;
              _context.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.post(locationLink);
            case 3:
              data = _context.sent;
              _context.prev = 4;
              data = JSON.parse(data);
              _context.next = 12;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](4);
              _ADSBYPASSER_NAMESPACE__._.warn('JSON error:', _context.t0);
              return _context.abrupt('return');
            case 12:
              _context.next = 14;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(data.direct_link);
            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[4, 8]]);
    }));
    function start() {
      return _ref.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.anafile\.com$/
  },
  ready: function () {
    var _ref2 = _asyncToGenerator( regeneratorRuntime.mark(function _callee2() {
      var b;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              b = _ADSBYPASSER_NAMESPACE__.$.$('#btn_download');
              if (b) {
                _context2.next = 5;
                break;
              }
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('#plans_free form [type=submit]');
              b.click();
              return _context2.abrupt('return');
            case 5:
              b.disabled = false;
              _ADSBYPASSER_NAMESPACE__.$.remove('div[align=center]');
              return _context2.abrupt('return');
            case 8:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
    function ready() {
      return _ref2.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?arab\.sh$/,
    path: /^\/\w+$/
  },
  ready: function () {
    var _ref3 = _asyncToGenerator( regeneratorRuntime.mark(function _callee3() {
      var f;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('form[name=F1]');
              _context3.next = 3;
              return _ADSBYPASSER_NAMESPACE__._.wait(20 * 1000);
            case 3:
              f.submit();
            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));
    function ready() {
      return _ref3.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?coolrom\.com$/,
    path: /^\/dlpop\.php$/
  },
  ready: function () {
    var _ref4 = _asyncToGenerator( regeneratorRuntime.mark(function _callee4() {
      var matches;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              matches = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/<form method="POST" action="([^"]+)">/);
              _context4.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(matches[1]);
            case 3:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));
    function ready() {
      return _ref4.apply(this, arguments);
    }
    return ready;
  }()
});
(function () {
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^(www\.)?dl-protect\.com$/,
      path: /\/[A-Z0-9]+/
    },
    ready: function () {
      var _ref5 = _asyncToGenerator( regeneratorRuntime.mark(function _callee5() {
        var f, iIn, _ref6, _ref7, p, l;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!_ADSBYPASSER_NAMESPACE__.$.$('#captcha')) {
                  _context5.next = 2;
                  break;
                }
                return _context5.abrupt('return');
              case 2:
                f = _ADSBYPASSER_NAMESPACE__.$.$('form[name=ccerure]');
                if (!f) {
                  _context5.next = 21;
                  break;
                }
                iIn = (0, _ADSBYPASSER_NAMESPACE__.$)('input[id=in]');
                if (!iIn.value) {
                  _context5.next = 11;
                  break;
                }
                _context5.next = 8;
                return _ADSBYPASSER_NAMESPACE__._.wait(600);
              case 8:
                f.submit();
                _context5.next = 20;
                break;
              case 11:
                _context5.next = 13;
                return waitDOM(iIn, {
                  attributes: true
                }, function (mutation) {
                  if (!mutation.target.value || mutation.attributeName !== 'value') {
                    return _ADSBYPASSER_NAMESPACE__._.none;
                  }
                  iIn.value = 'Tracking too much hurts users\' privacy';
                  if (!canFastRedirect()) {
                    return;
                  }
                  return _ADSBYPASSER_NAMESPACE__._.wait(600);
                });
              case 13:
                _ref6 = _context5.sent;
                _ref7 = _slicedToArray(_ref6, 3);
                p = _ref7[2];
                if (!p) {
                  _context5.next = 20;
                  break;
                }
                _context5.next = 19;
                return p;
              case 19:
                f.submit();
              case 20:
                return _context5.abrupt('return');
              case 21:
                l = _ADSBYPASSER_NAMESPACE__.$.$$('#slinks > a');
                if (!(l.length === 1)) {
                  _context5.next = 25;
                  break;
                }
                _context5.next = 25;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(l[0].href);
              case 25:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function ready() {
        return _ref5.apply(this, arguments);
      }
      return ready;
    }()
  });
  function canFastRedirect() {
    return !_ADSBYPASSER_NAMESPACE__.$.$('form[name=ccerure]').onsubmit && !_ADSBYPASSER_NAMESPACE__.$.$('form[name=ccerure] input[name=pwd]');
  }
  function waitDOM(element, config, fn) {
    return new Promise(function (resolve) {
      var observer = new MutationObserver(function (mutations) {
        var _$find = _ADSBYPASSER_NAMESPACE__._.find(mutations, fn),
            _$find2 = _slicedToArray(_$find, 3),
            k = _$find2[0],
            v = _$find2[1],
            r = _$find2[2];
        if (k !== _ADSBYPASSER_NAMESPACE__._.none) {
          observer.disconnect();
          resolve([k, v, r]);
          return;
        }
      });
      observer.observe(element, config);
    });
  }
})();
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?embedupload\.com$/,
    path: /^\/$/,
    query: /^\?\w{2}=\w+$/
  },
  ready: function () {
    var _ref8 = _asyncToGenerator( regeneratorRuntime.mark(function _callee6() {
      var downloadPage;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              downloadPage = (0, _ADSBYPASSER_NAMESPACE__.$)('.categories a[target=_blank]');
              _context6.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(downloadPage);
            case 3:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));
    function ready() {
      return _ref8.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.fileproject\.com\.br$/,
    path: /^\/files\/+/
  },
  ready: function () {
    var _ref9 = _asyncToGenerator( regeneratorRuntime.mark(function _callee7() {
      var m;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/<a id="down" href="([^"]+)">/);
              _context7.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m[1]);
            case 3:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));
    function ready() {
      return _ref9.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?(firedrive|putlocker)\.com$/,
    path: /^\/file\/[0-9A-F]+$/
  },
  ready: function () {
    var _ref10 = _asyncToGenerator( regeneratorRuntime.mark(function _callee8() {
      var c;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              c = (0, _ADSBYPASSER_NAMESPACE__.$)('#confirm_form');
              c.submit();
            case 2:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));
    function ready() {
      return _ref10.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^iori\.us$/
  },
  ready: function () {
    var _ref11 = _asyncToGenerator( regeneratorRuntime.mark(function _callee9() {
      var a;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#wrapper .tombol a');
              _context9.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));
    function ready() {
      return _ref11.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?jheberg\.net$/,
    path: /^\/captcha\//
  },
  ready: function () {
    var _ref12 = _asyncToGenerator( regeneratorRuntime.mark(function _callee10() {
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              (0, _ADSBYPASSER_NAMESPACE__.$)('.dl-button').click();
            case 1:
            case 'end':
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));
    function ready() {
      return _ref12.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?jheberg\.net$/,
    path: /^\/redirect\//
  },
  ready: function () {
    var _ref13 = _asyncToGenerator( regeneratorRuntime.mark(function _callee11() {
      'use strict';
      var matches, slug, hoster, response, respJSON;
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.removeAllTimer();
              matches = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/'slug':\s*'([^']+)',\s*'hoster':\s*'([^']+)'/);
              slug = matches[1];
              hoster = matches[2];
              _context11.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.post('/get/link/', {
                slug: slug,
                hoster: hoster
              });
            case 6:
              response = _context11.sent;
              respJSON = JSON.parse(response);
              _context11.next = 10;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(respJSON.url);
            case 10:
            case 'end':
              return _context11.stop();
          }
        }
      }, _callee11, this);
    }));
    function ready() {
      return _ref13.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?larashare\.com$/,
    path: /^\/do\.php$/,
    query: /id=\d+/
  },
  start: function () {
    var _ref14 = _asyncToGenerator( regeneratorRuntime.mark(function _callee12() {
      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(document.location.href.replace('id=', 'down='));
            case 2:
            case 'end':
              return _context12.stop();
          }
        }
      }, _callee12, this);
    }));
    function start() {
      return _ref14.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?maxmirror\.com$/,
    path: /^\/redirect\//
  },
  ready: function () {
    var _ref15 = _asyncToGenerator( regeneratorRuntime.mark(function _callee13() {
      var l;
      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              l = (0, _ADSBYPASSER_NAMESPACE__.$)('#download_url > a');
              _context13.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l.href);
            case 3:
            case 'end':
              return _context13.stop();
          }
        }
      }, _callee13, this);
    }));
    function ready() {
      return _ref15.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?mirrorcreator\.com$/,
    path: /^\/showurl\.php$/
  },
  ready: function () {
    var _ref16 = _asyncToGenerator( regeneratorRuntime.mark(function _callee14() {
      var a;
      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              a = _ADSBYPASSER_NAMESPACE__.$.$('#redirectlink a');
              if (!a) {
                _context14.next = 5;
                break;
              }
              _context14.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 4:
              return _context14.abrupt('return');
            case 5:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#redirectlink > div.redirecturl');
              a = a.innerHTML;
              if (a.match(/^http/)) {
                _context14.next = 9;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('not a valid URL');
            case 9:
              _context14.next = 11;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a);
            case 11:
            case 'end':
              return _context14.stop();
          }
        }
      }, _callee14, this);
    }));
    function ready() {
      return _ref16.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.multiupfile\.com$/,
    path: /^\/f\//
  },
  ready: function () {
    var _ref17 = _asyncToGenerator( regeneratorRuntime.mark(function _callee15() {
      var f;
      return regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('#yw0');
              f.submit();
            case 2:
            case 'end':
              return _context15.stop();
          }
        }
      }, _callee15, this);
    }));
    function ready() {
      return _ref17.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^mylinkgen\.com$/,
    path: /^\/p\/(.+)$/
  },
  start: function () {
    var _ref18 = _asyncToGenerator( regeneratorRuntime.mark(function _callee16(m) {
      return regeneratorRuntime.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              _context16.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('/g/' + m.path[1]);
            case 2:
            case 'end':
              return _context16.stop();
          }
        }
      }, _callee16, this);
    }));
    function start(_x) {
      return _ref18.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^mylinkgen\.com$/,
    path: /^\/g\//
  },
  ready: function () {
    var _ref19 = _asyncToGenerator( regeneratorRuntime.mark(function _callee17() {
      var a;
      return regeneratorRuntime.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#main-content a.btn.btn-default');
              _context17.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context17.stop();
          }
        }
      }, _callee17, this);
    }));
    function ready() {
      return _ref19.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^openload\.co$/, /^oload\.tv$/],
    path: /^\/f\/.*/
  },
  start: function () {
    var _ref20 = _asyncToGenerator( regeneratorRuntime.mark(function _callee18() {
      return regeneratorRuntime.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.window.adblock = false;
              _ADSBYPASSER_NAMESPACE__.$.window.adblock2 = false;
              _ADSBYPASSER_NAMESPACE__.$.window.popAdsLoaded = true;
            case 3:
            case 'end':
              return _context18.stop();
          }
        }
      }, _callee18, this);
    }));
    function start() {
      return _ref20.apply(this, arguments);
    }
    return start;
  }(),
  ready: function () {
    var _ref21 = _asyncToGenerator( regeneratorRuntime.mark(function _callee19() {
      var timer, dlCtn, dlBtn, ePath, videoCtn, overlay;
      return regeneratorRuntime.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              _context19.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(500);
            case 2:
              timer = (0, _ADSBYPASSER_NAMESPACE__.$)('#downloadTimer');
              timer.style.display = 'none';
              dlCtn = (0, _ADSBYPASSER_NAMESPACE__.$)('#realdl');
              dlCtn.style.display = 'inline-block';
              dlBtn = (0, _ADSBYPASSER_NAMESPACE__.$)('a', dlCtn);
              ePath = (0, _ADSBYPASSER_NAMESPACE__.$)('#streamurl');
              dlBtn.href = '/stream/' + ePath.textContent;
              videoCtn = _ADSBYPASSER_NAMESPACE__.$.$('.videocontainer');
              if (!videoCtn) {
                _context19.next = 18;
                break;
              }
              overlay = (0, _ADSBYPASSER_NAMESPACE__.$)('#videooverlay', videoCtn);
              overlay.click();
              dlBtn.addEventListener('click', function (evt) {
                evt.preventDefault();
                var iframe = document.createElement('iframe');
                iframe.src = dlBtn.href;
                document.body.appendChild(iframe);
              });
              _ADSBYPASSER_NAMESPACE__._.info(_ADSBYPASSER_NAMESPACE__._.template('{0} -> {1}')(window.location, dlBtn.href));
              dlBtn.click();
              _context19.next = 20;
              break;
            case 18:
              _context19.next = 20;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(dlBtn.href);
            case 20:
            case 'end':
              return _context19.stop();
          }
        }
      }, _callee19, this);
    }));
    function ready() {
      return _ref21.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?upmirror\.info$/
  },
  ready: function () {
    var _ref22 = _asyncToGenerator( regeneratorRuntime.mark(function _callee20() {
      return regeneratorRuntime.wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.setCookie('user', 'ppp');
              if (!_ADSBYPASSER_NAMESPACE__.$.$('#countDownText')) {
                _context20.next = 4;
                break;
              }
              _context20.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(document.location.toString());
            case 4:
            case 'end':
              return _context20.stop();
          }
        }
      }, _callee20, this);
    }));
    function ready() {
      return _ref22.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?vidto\.me$/
  },
  ready: function () {
    var _ref23 = _asyncToGenerator( regeneratorRuntime.mark(function _callee21() {
      var f;
      return regeneratorRuntime.wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('#btn_download').form;
              _context21.next = 3;
              return _ADSBYPASSER_NAMESPACE__._.wait(6 * 1000);
            case 3:
              f.submit();
            case 4:
            case 'end':
              return _context21.stop();
          }
        }
      }, _callee21, this);
    }));
    function ready() {
      return _ref23.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^01\.nl$/
  },
  ready: function () {
    var _ref24 = _asyncToGenerator( regeneratorRuntime.mark(function _callee22() {
      var f;
      return regeneratorRuntime.wrap(function _callee22$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('iframe#redirectframe');
              _context22.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f.src);
            case 3:
            case 'end':
              return _context22.stop();
          }
        }
      }, _callee22, this);
    }));
    function ready() {
      return _ref24.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^10co\.(biz|xyz|co|me)$/
  },
  ready: function () {
    var _ref25 = _asyncToGenerator( regeneratorRuntime.mark(function _callee23() {
      var d;
      return regeneratorRuntime.wrap(function _callee23$(_context23) {
        while (1) {
          switch (_context23.prev = _context23.next) {
            case 0:
              d = (0, _ADSBYPASSER_NAMESPACE__.$)('.go');
              _context23.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(d.dataset.href);
            case 3:
            case 'end':
              return _context23.stop();
          }
        }
      }, _callee23, this);
    }));
    function ready() {
      return _ref25.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?1be\.biz$/,
    path: /^\/s\.php$/,
    query: /^\?(.+)/
  },
  start: function () {
    var _ref26 = _asyncToGenerator( regeneratorRuntime.mark(function _callee24(m) {
      return regeneratorRuntime.wrap(function _callee24$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              _context24.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m.query[1]);
            case 2:
            case 'end':
              return _context24.stop();
          }
        }
      }, _callee24, this);
    }));
    function start(_x2) {
      return _ref26.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?1tiny\.net$/,
    path: /\/\w+/
  },
  ready: function () {
    var _ref27 = _asyncToGenerator( regeneratorRuntime.mark(function _callee25() {
      var directUrl;
      return regeneratorRuntime.wrap(function _callee25$(_context25) {
        while (1) {
          switch (_context25.prev = _context25.next) {
            case 0:
              directUrl = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/window\.location='([^']+)';/);
              if (directUrl) {
                _context25.next = 3;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('script content changed');
            case 3:
              _context25.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(directUrl[1]);
            case 5:
            case 'end':
              return _context25.stop();
          }
        }
      }, _callee25, this);
    }));
    function ready() {
      return _ref27.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^2ty\.cc$/,
    path: /^\/.+/
  },
  ready: function () {
    var _ref28 = _asyncToGenerator( regeneratorRuntime.mark(function _callee26() {
      var a;
      return regeneratorRuntime.wrap(function _callee26$(_context26) {
        while (1) {
          switch (_context26.prev = _context26.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#close');
              _context26.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 4:
            case 'end':
              return _context26.stop();
          }
        }
      }, _callee26, this);
    }));
    function ready() {
      return _ref28.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?3ra\.be$/
  },
  ready: function () {
    var _ref29 = _asyncToGenerator( regeneratorRuntime.mark(function _callee27() {
      var f;
      return regeneratorRuntime.wrap(function _callee27$(_context27) {
        while (1) {
          switch (_context27.prev = _context27.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              f = _ADSBYPASSER_NAMESPACE__.$.window.fc;
              if (f) {
                _context27.next = 4;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('window.fc is undefined');
            case 4:
              f = f.toString();
              f = f.match(/href="([^"]*)/);
              if (f) {
                _context27.next = 8;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('url pattern outdated');
            case 8:
              _context27.next = 10;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f[1]);
            case 10:
            case 'end':
              return _context27.stop();
          }
        }
      }, _callee27, this);
    }));
    function ready() {
      return _ref29.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?4fun\.tw$/
  },
  ready: function () {
    var _ref30 = _asyncToGenerator( regeneratorRuntime.mark(function _callee28() {
      var i;
      return regeneratorRuntime.wrap(function _callee28$(_context28) {
        while (1) {
          switch (_context28.prev = _context28.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('#original_url');
              _context28.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(i.value);
            case 3:
            case 'end':
              return _context28.stop();
          }
        }
      }, _callee28, this);
    }));
    function ready() {
      return _ref30.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^ad2links\.com$/,
    path: /^\/\w-.+$/
  },
  ready: function () {
    var _ref31 = _asyncToGenerator( regeneratorRuntime.mark(function _callee29() {
      return regeneratorRuntime.wrap(function _callee29$(_context29) {
        while (1) {
          switch (_context29.prev = _context29.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              _context29.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(window.location.toString(), {
                post: {
                  image: 'Skip Ad.'
                }
              });
            case 3:
            case 'end':
              return _context29.stop();
          }
        }
      }, _callee29, this);
    }));
    function ready() {
      return _ref31.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^ad4\.fr$/
  },
  ready: function () {
    var _ref32 = _asyncToGenerator( regeneratorRuntime.mark(function _callee30() {
      var s;
      return regeneratorRuntime.wrap(function _callee30$(_context30) {
        while (1) {
          switch (_context30.prev = _context30.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              s = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/"src", "([^"]+)"/);
              if (s) {
                _context30.next = 5;
                break;
              }
              _ADSBYPASSER_NAMESPACE__._.warn('changed');
              return _context30.abrupt('return');
            case 5:
              _context30.next = 7;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(s[1]);
            case 7:
            case 'end':
              return _context30.stop();
          }
        }
      }, _callee30, this);
    }));
    function ready() {
      return _ref32.apply(this, arguments);
    }
    return ready;
  }()
});
(function () {
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^ad7\.biz$/,
      path: /^\/\d+\/(.*)$/
    },
    start: function () {
      var _ref33 = _asyncToGenerator( regeneratorRuntime.mark(function _callee31(m) {
        var redirectLink;
        return regeneratorRuntime.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                redirectLink = m.path[1];
                if (!redirectLink.match(/^https?:\/\//)) {
                  redirectLink = 'http://' + redirectLink;
                }
                _context31.next = 5;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(redirectLink);
              case 5:
              case 'end':
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));
      function start(_x3) {
        return _ref33.apply(this, arguments);
      }
      return start;
    }()
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^ad7\.biz$/,
      path: /^\/\w+$/
    },
    ready: function () {
      var _ref34 = _asyncToGenerator( regeneratorRuntime.mark(function _callee32() {
        var script, url;
        return regeneratorRuntime.wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                script = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts('const r_url');
                url = script.match(/&url=([^&]+)/);
                url = url[1];
                _context32.next = 6;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
              case 6:
              case 'end':
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));
      function ready() {
        return _ref34.apply(this, arguments);
      }
      return ready;
    }()
  });
})();
(function () {
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: [/^(www\.)?adb\.ug$/, /^(www\.)?lynk\.my$/, /^adyou\.me$/],
      path: /^(?!\/(?:privacy|terms|contact(\/.*)?|#.*)?$).*$/
    },
    ready: function () {
      var _ref35 = _asyncToGenerator( regeneratorRuntime.mark(function _callee33() {
        var m, args;
        return regeneratorRuntime.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/top\.location\.href="([^"]+)"/);
                if (!m) {
                  _context33.next = 6;
                  break;
                }
                _context33.next = 5;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(m[1]);
              case 5:
                return _context33.abrupt('return');
              case 6:
                _context33.next = 8;
                return getArguments();
              case 8:
                args = _context33.sent;
                tryLink(args);
              case 10:
              case 'end':
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));
      function ready() {
        return _ref35.apply(this, arguments);
      }
      return ready;
    }()
  });
  function getArguments() {
    var PATTERN = /\{\s*_args[^}]+\}[^}]+\}/;
    return new Promise(function (resolve) {
      var m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(PATTERN);
      if (m) {
        resolve(m);
        return;
      }
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          mutation.addedNodes.forEach(function (node) {
            if (node.localName === 'script') {
              var _m = node.textContent.match(PATTERN);
              if (_m) {
                observer.disconnect();
                resolve(_m);
              }
            }
          });
        });
      });
      observer.observe(document.body, {
        childList: true
      });
    }).then(function (m) {
      return eval('(' + m[0] + ')');
    });
  }
  function tryLink(args) {
    var url = window.location.pathname + '/skip_timer';
    var i = setInterval(function () {
      _ADSBYPASSER_NAMESPACE__.$.post(url, args).then(function (text) {
        var jj = JSON.parse(text);
        if (!jj.errors && jj.messages) {
          clearInterval(i);
          _ADSBYPASSER_NAMESPACE__.$.openLink(jj.messages.url);
        }
      });
    }, 1000);
  }
})();
(function () {
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^adf\.ly$/,
      path: /^\/redirecting\/(.+)$/
    },
    start: function () {
      var _ref36 = _asyncToGenerator( regeneratorRuntime.mark(function _callee34(m) {
        var url;
        return regeneratorRuntime.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                url = atob(m.path[1]);
                _context34.next = 3;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
              case 3:
              case 'end':
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));
      function start(_x4) {
        return _ref36.apply(this, arguments);
      }
      return start;
    }()
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      path: /\/locked$/,
      query: /url=([^&]+)/
    },
    start: function () {
      var _ref37 = _asyncToGenerator( regeneratorRuntime.mark(function _callee35(m) {
        var url;
        return regeneratorRuntime.wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.resetCookies();
                url = decodeURIComponent(m.query[1]);
                if (!url.match(/^http/)) {
                  _context35.next = 7;
                  break;
                }
                _context35.next = 5;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
              case 5:
                _context35.next = 9;
                break;
              case 7:
                _context35.next = 9;
                return _ADSBYPASSER_NAMESPACE__.$.openLink('/' + url);
              case 9:
              case 'end':
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));
      function start(_x5) {
        return _ref37.apply(this, arguments);
      }
      return start;
    }()
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: function rule() {
      var h = _ADSBYPASSER_NAMESPACE__.$.$('html[id="main_html"]');
      if (h) {
        return true;
      } else {
        return null;
      }
    },
    start: function () {
      var _ref38 = _asyncToGenerator( regeneratorRuntime.mark(function _callee36() {
        var token, url;
        return regeneratorRuntime.wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.window.document.write = _ADSBYPASSER_NAMESPACE__._.nop;
                _ADSBYPASSER_NAMESPACE__.$.window.btoa = _ADSBYPASSER_NAMESPACE__._.nop;
                _context36.next = 4;
                return waitDocumentHead();
              case 4:
                _context36.next = 6;
                return waitToken();
              case 6:
                token = _context36.sent;
                url = decodeToken(token);
                _context36.next = 10;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
              case 10:
              case 'end':
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));
      function start() {
        return _ref38.apply(this, arguments);
      }
      return start;
    }(),
    ready: function () {
      var _ref39 = _asyncToGenerator( regeneratorRuntime.mark(function _callee37() {
        var h, b, token;
        return regeneratorRuntime.wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                h = _ADSBYPASSER_NAMESPACE__.$.$('#main_html'), b = _ADSBYPASSER_NAMESPACE__.$.$('#home');
                if (!(!h || !b || h.nodeName !== 'HTML' || b.nodeName !== 'BODY')) {
                  _context37.next = 3;
                  break;
                }
                return _context37.abrupt('return');
              case 3:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                _ADSBYPASSER_NAMESPACE__.$.window.cookieCheck = _ADSBYPASSER_NAMESPACE__._.nop;
                token = getTokenFromRocketScript();
                if (token) {
                  _context37.next = 10;
                  break;
                }
                token = (0, _ADSBYPASSER_NAMESPACE__.$)('#adfly_bar');
                _ADSBYPASSER_NAMESPACE__.$.window.close_bar();
                return _context37.abrupt('return');
              case 10:
                token = decodeToken(token);
                _context37.next = 13;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(token);
              case 13:
              case 'end':
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));
      function ready() {
        return _ref39.apply(this, arguments);
      }
      return ready;
    }()
  });
  function waitToken() {
    return new Promise(function (resolve) {
      var o = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          _ADSBYPASSER_NAMESPACE__._.forEach(mutation.addedNodes, function (node) {
            if (node.localName === 'script') {
              var m = node.textContent.match(/var ysmm = '([^']+)'/);
              if (m) {
                o.disconnect();
                resolve(m[1]);
              }
            }
          });
        });
      });
      o.observe(document.head, {
        childList: true
      });
    });
  }
  function waitDocumentHead() {
    return new Promise(function (resolve) {
      if (document.head) {
        resolve();
        return;
      }
      var o = new MutationObserver(function () {
        if (document.head) {
          o.disconnect();
          resolve();
        }
      });
      o.observe(document.documentElement, {
        childList: true
      });
    });
  }
  function decodeToken(token) {
    var a = '';
    var b = '';
    for (var i = 0; i < token.length; ++i) {
      if (i % 2 === 0) {
        a = a + token.charAt(i);
      } else {
        b = token.charAt(i) + b;
      }
    }
    token = a + b;
    a = token.split('');
    for (var _i = 0; _i < a.length; ++_i) {
      if (/\d/.test(a[_i])) {
        for (var j = _i + 1; j < a.length; ++j) {
          if (/\d/.test(a[j])) {
            b = a[_i] ^ a[j];
            if (b < 10) {
              a[_i] = b;
            }
            _i = j;
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
  function getTokenFromRocketScript() {
    var a = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/const eu = '(?!false)(.*)'/);
    return a ? a[1] : null;
  }
})();
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?adfe\.es$/,
    path: /^\/\w+$/
  },
  ready: function () {
    var _ref40 = _asyncToGenerator( regeneratorRuntime.mark(function _callee38() {
      var f;
      return regeneratorRuntime.wrap(function _callee38$(_context38) {
        while (1) {
          switch (_context38.prev = _context38.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('#frmvideo');
              if (f.STEP4) {
                _context38.next = 3;
                break;
              }
              return _context38.abrupt('return');
            case 3:
              f.submit();
            case 4:
            case 'end':
              return _context38.stop();
          }
        }
      }, _callee38, this);
    }));
    function ready() {
      return _ref40.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: 'http://adfoc.us/*',
  ready: function () {
    var _ref41 = _asyncToGenerator( regeneratorRuntime.mark(function _callee39() {
      var promise, url;
      return regeneratorRuntime.wrap(function _callee39$(_context39) {
        while (1) {
          switch (_context39.prev = _context39.next) {
            case 0:
              promise = new Promise(function (resolve) {
                var root = document.body;
                var observer = new MutationObserver(function () {
                  var o = _ADSBYPASSER_NAMESPACE__.$.$('#showSkip');
                  if (o) {
                    observer.disconnect();
                    o = o.querySelector('a');
                    resolve(o.href);
                  }
                });
                observer.observe(root, {
                  childList: true,
                  subtree: true
                });
              });
              _context39.next = 3;
              return promise;
            case 3:
              url = _context39.sent;
              _context39.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 6:
            case 'end':
              return _context39.stop();
          }
        }
      }, _callee39, this);
    }));
    function ready() {
      return _ref41.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?adjet\.biz$/
  },
  ready: function () {
    var _ref42 = _asyncToGenerator( regeneratorRuntime.mark(function _callee40() {
      var m;
      return regeneratorRuntime.wrap(function _callee40$(_context40) {
        while (1) {
          switch (_context40.prev = _context40.next) {
            case 0:
              m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/href=(\S+)/);
              if (m) {
                _context40.next = 3;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('site changed');
            case 3:
              _context40.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m[1]);
            case 5:
            case 'end':
              return _context40.stop();
          }
        }
      }, _callee40, this);
    }));
    function ready() {
      return _ref42.apply(this, arguments);
    }
    return ready;
  }()
});
(function () {
  var secondStage = function () {
    var _ref44 = _asyncToGenerator( regeneratorRuntime.mark(function _callee42(page) {
      var f, args, url, data;
      return regeneratorRuntime.wrap(function _callee42$(_context42) {
        while (1) {
          switch (_context42.prev = _context42.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('#go-link', page);
              args = extractArgument(f);
              url = f.getAttribute('action');
              _context42.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.post(url, args);
            case 5:
              data = _context42.sent;
              data = JSON.parse(data);
              if (!(data && data.url)) {
                _context42.next = 9;
                break;
              }
              return _context42.abrupt('return', data.url);
            case 9:
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('wrong data');
            case 10:
            case 'end':
              return _context42.stop();
          }
        }
      }, _callee42, this);
    }));
    return function secondStage(_x6) {
      return _ref44.apply(this, arguments);
    };
  }();
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: [/^adlink\.guru$/, /^cypt\.ga$/, /^(filesbucks|tmearn|cut-urls)\.com$/, /^elink\.link$/, /^(payurl|urlst)\.me$/, /^url\.ht$/, /^urle\.co$/, /^(hashe|trlink|adshort)\.in$/, /^www\.worldhack\.net$/, /^123link\.top$/, /^pir\.im$/, /^bol\.tl$/, /^(tl|adfly)\.tc$/, /^(adfu|linkhits)\.us$/, /^short\.pastewma\.com$/, /^linkfly\.gaosmedia\.com$/]
    },
    ready: function () {
      var _ref43 = _asyncToGenerator( regeneratorRuntime.mark(function _callee41() {
        var page, url;
        return regeneratorRuntime.wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe', '.BJPPopAdsOverlay');
                _context41.next = 3;
                return firstStage();
              case 3:
                page = _context41.sent;
                _context41.next = 6;
                return secondStage(page);
              case 6:
                url = _context41.sent;
                _ADSBYPASSER_NAMESPACE__.$.nuke(url);
                _context41.next = 10;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
              case 10:
              case 'end':
                return _context41.stop();
            }
          }
        }, _callee41, this);
      }));
      function ready() {
        return _ref43.apply(this, arguments);
      }
      return ready;
    }()
  });
  function firstStage() {
    return new Promise(function (resolve) {
      var f = _ADSBYPASSER_NAMESPACE__.$.$('#link-view');
      if (!f) {
        resolve(document);
        return;
      }
      var args = extractArgument(f);
      var url = f.getAttribute('action');
      var p = _ADSBYPASSER_NAMESPACE__.$.post(url, args).then(function (data) {
        return _ADSBYPASSER_NAMESPACE__.$.toDOM(data);
      });
      resolve(p);
    });
  }
  function extractArgument(form) {
    var args = {};
    _ADSBYPASSER_NAMESPACE__._.forEach(_ADSBYPASSER_NAMESPACE__.$.$$('input', form), function (v) {
      args[v.name] = v.value;
    });
    return args;
  }
})();
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^adlock\.org$/
  },
  ready: function () {
    var _ref45 = _asyncToGenerator( regeneratorRuntime.mark(function _callee43() {
      var a;
      return regeneratorRuntime.wrap(function _callee43$(_context43) {
        while (1) {
          switch (_context43.prev = _context43.next) {
            case 0:
              a = _ADSBYPASSER_NAMESPACE__.$.$('#xre a.xxr, #downloadButton1');
              if (!a) {
                _context43.next = 5;
                break;
              }
              _context43.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 4:
              return _context43.abrupt('return');
            case 5:
              a = _ADSBYPASSER_NAMESPACE__.$.window.fileLocation;
              if (!a) {
                _context43.next = 9;
                break;
              }
              _context43.next = 9;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a);
            case 9:
            case 'end':
              return _context43.stop();
          }
        }
      }, _callee43, this);
    }));
    function ready() {
      return _ref45.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?adlot\.us$/
  },
  ready: function () {
    var _ref46 = _asyncToGenerator( regeneratorRuntime.mark(function _callee44() {
      var script, p, opt, tmp;
      return regeneratorRuntime.wrap(function _callee44$(_context44) {
        while (1) {
          switch (_context44.prev = _context44.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              script = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts('form');
              p = /name='([^']+)' value='([^']+)'/g;
              opt = {
                image: ' '
              };
              tmp = null;
              while (tmp = p.exec(script)) {
                opt[tmp[1]] = tmp[2];
              }
              _context44.next = 8;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('', {
                path: opt
              });
            case 8:
            case 'end':
              return _context44.stop();
          }
        }
      }, _callee44, this);
    }));
    function ready() {
      return _ref46.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^admy\.link$/
  },
  ready: function () {
    var _ref47 = _asyncToGenerator( regeneratorRuntime.mark(function _callee45() {
      var f;
      return regeneratorRuntime.wrap(function _callee45$(_context45) {
        while (1) {
          switch (_context45.prev = _context45.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('form.edit_link');
              f.submit();
            case 2:
            case 'end':
              return _context45.stop();
          }
        }
      }, _callee45, this);
    }));
    function ready() {
      return _ref47.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?ah-informatique\.com$/,
    path: /^\/ZipUrl/
  },
  ready: function () {
    var _ref48 = _asyncToGenerator( regeneratorRuntime.mark(function _callee46() {
      var a;
      return regeneratorRuntime.wrap(function _callee46$(_context46) {
        while (1) {
          switch (_context46.prev = _context46.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#zip3 a');
              _context46.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context46.stop();
          }
        }
      }, _callee46, this);
    }));
    function ready() {
      return _ref48.apply(this, arguments);
    }
    return ready;
  }()
});
(function () {
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^ah\.pe$/
    },
    ready: function () {
      var _ref49 = _asyncToGenerator( regeneratorRuntime.mark(function _callee47() {
        var script, path;
        return regeneratorRuntime.wrap(function _callee47$(_context47) {
          while (1) {
            switch (_context47.prev = _context47.next) {
              case 0:
                script = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts('eval');
                script = decodeScript(script);
                script = decodeScript(script);
                script = decodeScript(script);
                path = script.match(/([^;= ]+)=([^+ ;]+)\+"\."\+([^+ ]+)\+"\."\+([^; ]+);/);
                if (path) {
                  _context47.next = 7;
                  break;
                }
                throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('script changed');
              case 7:
                if (!(typeof _ADSBYPASSER_NAMESPACE__.$.window[path[2]] === 'undefined')) {
                  _context47.next = 10;
                  break;
                }
                _ADSBYPASSER_NAMESPACE__._.info('recaptcha');
                return _context47.abrupt('return');
              case 10:
                path = _ADSBYPASSER_NAMESPACE__._.template('{0}.{1}.{2}')(_ADSBYPASSER_NAMESPACE__.$.window[path[2]], _ADSBYPASSER_NAMESPACE__.$.window[path[3]], _ADSBYPASSER_NAMESPACE__.$.window[path[4]]);
                _context47.next = 13;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(path);
              case 13:
              case 'end':
                return _context47.stop();
            }
          }
        }, _callee47, this);
      }));
      function ready() {
        return _ref49.apply(this, arguments);
      }
      return ready;
    }()
  });
  function decodeScript(encoded) {
    var a = encoded.match(/^\s*;eval\((.+)\);\s*$/);
    a = a[1];
    var b = a.match(/^(.+)\('([^']+)','([^']+)','([^']+)','([^']+)'\)$/);
    var c = eval('(' + b[1] + ')');
    return c(b[2], b[3], b[4], b[5]);
  }
})();
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^aka\.gr$/
  },
  ready: function () {
    var _ref50 = _asyncToGenerator( regeneratorRuntime.mark(function _callee48() {
      var l;
      return regeneratorRuntime.wrap(function _callee48$(_context48) {
        while (1) {
          switch (_context48.prev = _context48.next) {
            case 0:
              l = (0, _ADSBYPASSER_NAMESPACE__.$)('iframe#yourls-frame');
              _context48.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l.src);
            case 3:
            case 'end':
              return _context48.stop();
          }
        }
      }, _callee48, this);
    }));
    function ready() {
      return _ref50.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^al\.ly$/, /^ally\.sh$/]
  },
  ready: function () {
    var _ref51 = _asyncToGenerator( regeneratorRuntime.mark(function _callee49() {
      var i, a;
      return regeneratorRuntime.wrap(function _callee49$(_context49) {
        while (1) {
          switch (_context49.prev = _context49.next) {
            case 0:
              i = _ADSBYPASSER_NAMESPACE__.$.$('body > section > iframe');
              if (!i) {
                _context49.next = 8;
                break;
              }
              i.src = 'about:blank';
              _context49.next = 5;
              return _ADSBYPASSER_NAMESPACE__._.wait(3000);
            case 5:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a.redirect');
              a.click();
              return _context49.abrupt('return');
            case 8:
              i = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/"href","([^"]+)"\)\.remove/);
              if (i) {
                _context49.next = 12;
                break;
              }
              _ADSBYPASSER_NAMESPACE__._.warn('site changed');
              return _context49.abrupt('return');
            case 12:
              i = i[1];
              _ADSBYPASSER_NAMESPACE__.$.openLink(i);
            case 14:
            case 'end':
              return _context49.stop();
          }
        }
      }, _callee49, this);
    }));
    function ready() {
      return _ref51.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^(www\.)?allkeyshop\.com$/, /^cshort\.org$/]
  },
  ready: function () {
    var _ref52 = _asyncToGenerator( regeneratorRuntime.mark(function _callee50() {
      var matches;
      return regeneratorRuntime.wrap(function _callee50$(_context50) {
        while (1) {
          switch (_context50.prev = _context50.next) {
            case 0:
              matches = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/window\.location\.href = "([^"]+)"/);
              matches = matches[1];
              _ADSBYPASSER_NAMESPACE__.$.nuke(matches);
              _context50.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(matches);
            case 5:
            case 'end':
              return _context50.stop();
          }
        }
      }, _callee50, this);
    }));
    function ready() {
      return _ref52.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^anonymbucks\.com$/
  },
  ready: function () {
    var _ref53 = _asyncToGenerator( regeneratorRuntime.mark(function _callee51() {
      var a;
      return regeneratorRuntime.wrap(function _callee51$(_context51) {
        while (1) {
          switch (_context51.prev = _context51.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#boton-continuar');
              a.click();
            case 2:
            case 'end':
              return _context51.stop();
          }
        }
      }, _callee51, this);
    }));
    function ready() {
      return _ref53.apply(this, arguments);
    }
    return ready;
  }()
});
(function () {
  var run = function () {
    var _ref60 = _asyncToGenerator( regeneratorRuntime.mark(function _callee58(dirtyFix) {
      var result;
      return regeneratorRuntime.wrap(function _callee58$(_context58) {
        while (1) {
          switch (_context58.prev = _context58.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              result = searchScript(true);
              if (result.direct) {
                _context58.next = 6;
                break;
              }
              knockServer(result.script, dirtyFix);
              _context58.next = 12;
              break;
            case 6:
              result = result.script.match(/top\.location\.href='([^']+)'/);
              if (result) {
                _context58.next = 9;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('script changed');
            case 9:
              result = result[1];
              _context58.next = 12;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(result);
            case 12:
            case 'end':
              return _context58.stop();
          }
        }
      }, _callee58, this);
    }));
    return function run(_x8) {
      return _ref60.apply(this, arguments);
    };
  }();
  var ajaxPattern = /\$.post\('([^']*)'[^{]+(\{\s*opt:\s*'make_log'[^}]+\}\s*\}),/i;
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: [/^bc\.vc$/, /^linc\.ml$/],
      path: /^.+(https?:\/\/.+)$/
    },
    start: function () {
      var _ref54 = _asyncToGenerator( regeneratorRuntime.mark(function _callee52(m) {
        return regeneratorRuntime.wrap(function _callee52$(_context52) {
          while (1) {
            switch (_context52.prev = _context52.next) {
              case 0:
                _context52.next = 2;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(m.path[1] + document.location.search + document.location.hash);
              case 2:
              case 'end':
                return _context52.stop();
            }
          }
        }, _callee52, this);
      }));
      function start(_x7) {
        return _ref54.apply(this, arguments);
      }
      return start;
    }()
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^bc\.vc$/,
      path: /^\/.+/
    },
    ready: function () {
      var _ref55 = _asyncToGenerator( regeneratorRuntime.mark(function _callee53() {
        var token, time, url, rv;
        return regeneratorRuntime.wrap(function _callee53$(_context53) {
          while (1) {
            switch (_context53.prev = _context53.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                token = findAJAXToken();
                time = fakeAJAXToken();
                url = _ADSBYPASSER_NAMESPACE__._.template('/fly/ajax.php?wds={0}&time={1}');
                url = url(token.wds, time);
                _context53.next = 7;
                return _ADSBYPASSER_NAMESPACE__._.wait(5000);
              case 7:
                _context53.next = 9;
                return _ADSBYPASSER_NAMESPACE__.$.post(url, {
                  xdf: {
                    afg: _ADSBYPASSER_NAMESPACE__.$.window.tZ,
                    bfg: _ADSBYPASSER_NAMESPACE__.$.window.cW,
                    cfg: _ADSBYPASSER_NAMESPACE__.$.window.cH,
                    jki: token.jki,
                    dfg: _ADSBYPASSER_NAMESPACE__.$.window.sW,
                    efg: _ADSBYPASSER_NAMESPACE__.$.window.sH
                  },
                  ojk: token.ojk
                });
              case 9:
                rv = _context53.sent;
                rv = JSON.parse(rv);
                if (!rv.error) {
                  _context53.next = 13;
                  break;
                }
                throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('auth error');
              case 13:
                _context53.next = 15;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(rv.message.url);
              case 15:
              case 'end':
                return _context53.stop();
            }
          }
        }, _callee53, this);
      }));
      function ready() {
        return _ref55.apply(this, arguments);
      }
      return ready;
    }()
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^adcrun\.ch$/,
      path: /^\/\w+$/
    },
    ready: function () {
      var _ref56 = _asyncToGenerator( regeneratorRuntime.mark(function _callee54() {
        var rSurveyLink, l;
        return regeneratorRuntime.wrap(function _callee54$(_context54) {
          while (1) {
            switch (_context54.prev = _context54.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('.user_content');
                rSurveyLink = /http\.open\("GET", "api_ajax\.php\?sid=\d*&ip=[^&]*&longurl=([^"]+)" \+ first_time, (?:true|false)\);/;
                l = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(rSurveyLink);
                if (!l) {
                  _context54.next = 7;
                  break;
                }
                _context54.next = 6;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(l[1]);
              case 6:
                return _context54.abrupt('return');
              case 7:
                _context54.next = 9;
                return run(true);
              case 9:
              case 'end':
                return _context54.stop();
            }
          }
        }, _callee54, this);
      }));
      function ready() {
        return _ref56.apply(this, arguments);
      }
      return ready;
    }()
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: [/^(1tk|hit|adbla|tl7|mylink)\.us$/, /^gx\.si$/, /^adwat\.ch$/, /^(fly2url|urlwiz|xafox)\.com$/, /^(zpoz|ultry)\.net$/, /^(wwy|myam)\.me$/, /^(ssl|srk)\.gs$/, /^shortit\.in$/, /^www\.adjet\.eu$/, /^cun\.bz$/, /^miniurl\.tk$/, /^vizzy\.es$/, /^kazan\.vc$/, /^linkcash\.ml$/],
      path: /^\/.+/
    },
    ready: run
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^adtr\.im|ysear\.ch|xip\.ir$/,
      path: /^\/.+/
    },
    ready: function () {
      var _ref57 = _asyncToGenerator( regeneratorRuntime.mark(function _callee55() {
        var a, f;
        return regeneratorRuntime.wrap(function _callee55$(_context55) {
          while (1) {
            switch (_context55.prev = _context55.next) {
              case 0:
                a = _ADSBYPASSER_NAMESPACE__.$.$('div.fly_head a.close');
                f = _ADSBYPASSER_NAMESPACE__.$.$('iframe.fly_frame');
                if (!(a && f)) {
                  _context55.next = 7;
                  break;
                }
                _context55.next = 5;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(f.src);
              case 5:
                _context55.next = 9;
                break;
              case 7:
                _context55.next = 9;
                return run();
              case 9:
              case 'end':
                return _context55.stop();
            }
          }
        }, _callee55, this);
      }));
      function ready() {
        return _ref57.apply(this, arguments);
      }
      return ready;
    }()
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^ad5\.eu$/,
      path: /^\/[^.]+$/
    },
    ready: function () {
      var _ref58 = _asyncToGenerator( regeneratorRuntime.mark(function _callee56() {
        var s, m, tz, d;
        return regeneratorRuntime.wrap(function _callee56$(_context56) {
          while (1) {
            switch (_context56.prev = _context56.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                s = searchScript(true);
                m = s.script.match(/(<form name="form1"method="post".*(?!<\\form>)<\/form>)/);
                if (m) {
                  _context56.next = 5;
                  break;
                }
                return _context56.abrupt('return');
              case 5:
                m = m[1];
                tz = -(new Date().getTimezoneOffset() / 60);
                m = m.replace('\'+timezone+\'', tz);
                d = document.createElement('div');
                d.setAttribute('id', 'AdsBypasserFTW');
                d.setAttribute('style', 'display:none;');
                d.innerHTML = m;
                document.body.appendChild(d);
                (0, _ADSBYPASSER_NAMESPACE__.$)('#AdsBypasserFTW > form[name=form1]').submit();
              case 14:
              case 'end':
                return _context56.stop();
            }
          }
        }, _callee56, this);
      }));
      function ready() {
        return _ref58.apply(this, arguments);
      }
      return ready;
    }()
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^tr5\.in$/,
      path: /^\/.+/
    },
    ready: function () {
      var _ref59 = _asyncToGenerator( regeneratorRuntime.mark(function _callee57() {
        return regeneratorRuntime.wrap(function _callee57$(_context57) {
          while (1) {
            switch (_context57.prev = _context57.next) {
              case 0:
                _context57.next = 2;
                return run(true);
              case 2:
              case 'end':
                return _context57.stop();
            }
          }
        }, _callee57, this);
      }));
      function ready() {
        return _ref59.apply(this, arguments);
      }
      return ready;
    }()
  });
  function decompress(script, unzip) {
    if (!unzip) {
      return script;
    }
    var matches = script.match(/eval(.*)/);
    if (!matches) {
      throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('no script matches /eval(.*)/');
    }
    matches = matches[1];
    script = eval(matches);
    return script;
  }
  function searchScript(unzip) {
    var content = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts('make_log');
    if (content) {
      return {
        direct: false,
        script: decompress(content, unzip)
      };
    }
    content = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts('click_log');
    if (content) {
      return {
        direct: true,
        script: decompress(content, unzip)
      };
    }
    throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('script changed');
  }
  function knockServer(script, dirtyFix) {
    var matches = script.match(ajaxPattern);
    if (!matches) {
      throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('(in knock server) no script matches $.post');
    }
    var make_url = matches[1];
    var make_opts = eval('(' + matches[2] + ')');
    var i = setInterval(function () {
      _ADSBYPASSER_NAMESPACE__.$.post(make_url, make_opts).then(function (text) {
        if (dirtyFix) {
          text = text.match(/\{.+\}/)[0];
        }
        var jj = JSON.parse(text);
        if (jj.message) {
          clearInterval(i);
          return _ADSBYPASSER_NAMESPACE__.$.openLink(jj.message.url);
        }
      });
    }, 1000);
  }
  function findAJAXToken() {
    var rv = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts('/fly/ajax.php');
    if (!rv) {
      throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('script changed');
    }
    var wds = rv.match(/\?wds=([^&]+)/);
    if (!wds) {
      throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('script changed');
    }
    wds = wds[1];
    var jki = rv.match(/jki:\s*'([^']+)'/);
    if (!jki) {
      throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('script changed');
    }
    jki = jki[1];
    var ojk = rv.match(/ojk:\s*'([^']+)'/);
    if (!ojk) {
      throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('script changed');
    }
    ojk = ojk[1];
    return {
      wds: wds,
      jki: jki,
      ojk: ojk
    };
  }
  function fakeAJAXToken() {
    var skipAd = (0, _ADSBYPASSER_NAMESPACE__.$)('div.fly_head span#redirectin').parentElement;
    var margin = 6;
    var fakePageX = skipAd.offsetLeft + margin + 50 + Math.random() * 10;
    var fakePageY = skipAd.offsetTop + margin + 15 + Math.random() * 1;
    var po = fakePageX + ',' + fakePageY;
    var posX = jQueryOffset(skipAd).left + margin;
    var posY = jQueryOffset(skipAd).top + margin;
    var pos = fakePageX - posX + ',' + (fakePageY - posY);
    var tsta_ = Math.floor((5 + Math.random()) * 1000);
    var time = po + ':' + pos + ':' + tsta_;
    return time;
  }
  function jQueryOffset(element) {
    var r = element.getBoundingClientRect();
    return {
      top: r.top + document.body.scrollTop,
      left: r.left + document.body.scrollLeft
    };
  }
})();
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?biglistofwebsites\.com$/,
    path: /^\/go\/(\w+\.\w+)$/
  },
  start: function () {
    var _ref61 = _asyncToGenerator( regeneratorRuntime.mark(function _callee59(m) {
      return regeneratorRuntime.wrap(function _callee59$(_context59) {
        while (1) {
          switch (_context59.prev = _context59.next) {
            case 0:
              _context59.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('http://' + m.path[1]);
            case 2:
            case 'end':
              return _context59.stop();
          }
        }
      }, _callee59, this);
    }));
    function start(_x9) {
      return _ref61.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: 'http://www.bild.me/bild.php?file=*',
  ready: function () {
    var _ref62 = _asyncToGenerator( regeneratorRuntime.mark(function _callee60() {
      var i;
      return regeneratorRuntime.wrap(function _callee60$(_context60) {
        while (1) {
          switch (_context60.prev = _context60.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('#Bild');
              _context60.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(i.src);
            case 3:
            case 'end':
              return _context60.stop();
          }
        }
      }, _callee60, this);
    }));
    function ready() {
      return _ref62.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: 'http://bildr.no/view/*',
  ready: function () {
    var _ref63 = _asyncToGenerator( regeneratorRuntime.mark(function _callee61() {
      var i;
      return regeneratorRuntime.wrap(function _callee61$(_context61) {
        while (1) {
          switch (_context61.prev = _context61.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('img.bilde');
              _context61.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(i.src);
            case 3:
            case 'end':
              return _context61.stop();
          }
        }
      }, _callee61, this);
    }));
    function ready() {
      return _ref63.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?([a-zA-Z0-9]+\.)?binbox\.io$/,
    path: /\/o\/([a-zA-Z0-9]+)/
  },
  start: function () {
    var _ref64 = _asyncToGenerator( regeneratorRuntime.mark(function _callee62(m) {
      var direct_link;
      return regeneratorRuntime.wrap(function _callee62$(_context62) {
        while (1) {
          switch (_context62.prev = _context62.next) {
            case 0:
              direct_link = window.atob(m.path[1]);
              _context62.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(direct_link);
            case 3:
            case 'end':
              return _context62.stop();
          }
        }
      }, _callee62, this);
    }));
    function start(_x10) {
      return _ref64.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?boxcash\.net$/,
    path: /^\/[\w~]+$/
  },
  ready: function () {
    var _ref65 = _asyncToGenerator( regeneratorRuntime.mark(function _callee63() {
      var m, response, l;
      return regeneratorRuntime.wrap(function _callee63$(_context63) {
        while (1) {
          switch (_context63.prev = _context63.next) {
            case 0:
              m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/'\/ajax_link\.php',\s*\{key:\s*'(\w+)',\s*url:\s*'(\d+)',\s*t:\s*'(\d+)',\s*r:\s*'(\w*)'\}/);
              if (m) {
                _context63.next = 3;
                break;
              }
              return _context63.abrupt('return');
            case 3:
              _context63.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.post('/ajax_link.php', {
                key: m[1],
                url: m[2],
                t: m[3],
                r: m[4]
              });
            case 5:
              response = _context63.sent;
              l = response.match(/window(?:.top.window)\.location="([^"]+)"/);
              _context63.next = 9;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l[1]);
            case 9:
            case 'end':
              return _context63.stop();
          }
        }
      }, _callee63, this);
    }));
    function ready() {
      return _ref65.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?boxcash\.net$/,
    path: /^\/redirect\.html$/,
    query: /url=(.+)$/
  },
  start: function () {
    var _ref66 = _asyncToGenerator( regeneratorRuntime.mark(function _callee64(m) {
      var l;
      return regeneratorRuntime.wrap(function _callee64$(_context64) {
        while (1) {
          switch (_context64.prev = _context64.next) {
            case 0:
              l = decodeURIComponent(m.query[1]);
              _context64.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l);
            case 3:
            case 'end':
              return _context64.stop();
          }
        }
      }, _callee64, this);
    }));
    function start(_x11) {
      return _ref66.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?(buz|vzt)url\.com$/
  },
  ready: function () {
    var _ref67 = _asyncToGenerator( regeneratorRuntime.mark(function _callee65() {
      var frame;
      return regeneratorRuntime.wrap(function _callee65$(_context65) {
        while (1) {
          switch (_context65.prev = _context65.next) {
            case 0:
              frame = (0, _ADSBYPASSER_NAMESPACE__.$)('frame[scrolling=yes]');
              _context65.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(frame.src);
            case 3:
            case 'end':
              return _context65.stop();
          }
        }
      }, _callee65, this);
    }));
    function ready() {
      return _ref67.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(cf|ex|xt)\d\.(me|co)$/
  },
  ready: function () {
    var _ref68 = _asyncToGenerator( regeneratorRuntime.mark(function _callee66() {
      var a;
      return regeneratorRuntime.wrap(function _callee66$(_context66) {
        while (1) {
          switch (_context66.prev = _context66.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#skip_button');
              _context66.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 4:
            case 'end':
              return _context66.stop();
          }
        }
      }, _callee66, this);
    }));
    function ready() {
      return _ref68.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^catcut\.net$/
  },
  ready: function () {
    var _ref69 = _asyncToGenerator( regeneratorRuntime.mark(function _callee67() {
      var a;
      return regeneratorRuntime.wrap(function _callee67$(_context67) {
        while (1) {
          switch (_context67.prev = _context67.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#rbs');
              _context67.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context67.stop();
          }
        }
      }, _callee67, this);
    }));
    function ready() {
      return _ref69.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^cf\.ly$/,
    path: /^\/[^/]+$/
  },
  start: function () {
    var _ref70 = _asyncToGenerator( regeneratorRuntime.mark(function _callee68(m) {
      return regeneratorRuntime.wrap(function _callee68$(_context68) {
        while (1) {
          switch (_context68.prev = _context68.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              _context68.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('/skip' + m.path[0]);
            case 3:
            case 'end':
              return _context68.stop();
          }
        }
      }, _callee68, this);
    }));
    function start(_x12) {
      return _ref70.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?cli\.gs$/
  },
  ready: function () {
    var _ref71 = _asyncToGenerator( regeneratorRuntime.mark(function _callee69() {
      var a;
      return regeneratorRuntime.wrap(function _callee69$(_context69) {
        while (1) {
          switch (_context69.prev = _context69.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a.RedirectLink');
              _context69.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context69.stop();
          }
        }
      }, _callee69, this);
    }));
    function ready() {
      return _ref71.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?clictune\.com$/,
    path: /^\/id=\d+/
  },
  ready: function () {
    var _ref72 = _asyncToGenerator( regeneratorRuntime.mark(function _callee70() {
      var matches, url;
      return regeneratorRuntime.wrap(function _callee70$(_context70) {
        while (1) {
          switch (_context70.prev = _context70.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              matches = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/<a href="http:\/\/(?:www.)?clictune\.com\/redirect\.php\?url=([^&]+)&/);
              url = decodeURIComponent(matches[1]);
              _context70.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 5:
            case 'end':
              return _context70.stop();
          }
        }
      }, _callee70, this);
    }));
    function ready() {
      return _ref72.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^clk\.im$/
  },
  ready: function () {
    var _ref73 = _asyncToGenerator( regeneratorRuntime.mark(function _callee71() {
      var matches;
      return regeneratorRuntime.wrap(function _callee71$(_context71) {
        while (1) {
          switch (_context71.prev = _context71.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              matches = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/\$\("\.countdown"\)\.attr\("href","([^"]+)"\)/);
              _context71.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(matches[1]);
            case 4:
            case 'end':
              return _context71.stop();
          }
        }
      }, _callee71, this);
    }));
    function ready() {
      return _ref73.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^cocoleech\.com$/
  },
  ready: function () {
    var _ref74 = _asyncToGenerator( regeneratorRuntime.mark(function _callee72() {
      var a;
      return regeneratorRuntime.wrap(function _callee72$(_context72) {
        while (1) {
          switch (_context72.prev = _context72.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#download');
              _context72.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context72.stop();
          }
        }
      }, _callee72, this);
    }));
    function ready() {
      return _ref74.apply(this, arguments);
    }
    return ready;
  }()
});
(function () {
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: [/^link\.animagz\.org$/, /^(coeg|disingkat|gunting)\.in$/, /^www\.telondasmu\.com$/],
      path: /^\/\w+$/
    },
    ready: function () {
      var _ref75 = _asyncToGenerator( regeneratorRuntime.mark(function _callee73(m) {
        var mapper, b64;
        return regeneratorRuntime.wrap(function _callee73$(_context73) {
          while (1) {
            switch (_context73.prev = _context73.next) {
              case 0:
                mapper = hostMapper(m.host[0]);
                b64 = mapper().match(/\?r=(\w+={0,2}?)/);
                _context73.next = 4;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(atob(b64[1]));
              case 4:
              case 'end':
                return _context73.stop();
            }
          }
        }, _callee73, this);
      }));
      function ready(_x13) {
        return _ref75.apply(this, arguments);
      }
      return ready;
    }()
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^sipkur\.(net|us)$/,
      path: [/^\/\w+$/, /^\/menujulink\//]
    },
    ready: function () {
      var _ref76 = _asyncToGenerator( regeneratorRuntime.mark(function _callee74() {
        var d;
        return regeneratorRuntime.wrap(function _callee74$(_context74) {
          while (1) {
            switch (_context74.prev = _context74.next) {
              case 0:
                d = (0, _ADSBYPASSER_NAMESPACE__.$)('#testapk > div');
                d = d.onclick.toString();
                d = d.match(/window\.open\('([^']+)'/);
                _context74.next = 5;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(d[1]);
              case 5:
              case 'end':
                return _context74.stop();
            }
          }
        }, _callee74, this);
      }));
      function ready() {
        return _ref76.apply(this, arguments);
      }
      return ready;
    }()
  });
  function hostMapper(host) {
    switch (host) {
      case 'disingkat.in':
        return function () {
          var a = (0, _ADSBYPASSER_NAMESPACE__.$)('a.btn-block.redirect');
          return a.href;
        };
      case 'link.animagz.org':
        return function () {
          var a = (0, _ADSBYPASSER_NAMESPACE__.$)('a.redirect');
          a = a.onclick.toString();
          a = a.match(/window\.open \('([^']+)'\)/);
          return a[1];
        };
      case 'coeg.in':
      case 'www.telondasmu.com':
        return function () {
          var a = (0, _ADSBYPASSER_NAMESPACE__.$)('.download-link a');
          return a.href;
        };
      case 'gunting.in':
        return function () {
          var a = (0, _ADSBYPASSER_NAMESPACE__.$)('div.col-sm-6:nth-child(1) > center:nth-child(1) > a:nth-child(1)');
          return a.href;
        };
      default:
        return null;
    }
  }
})();
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^coinlink\.co$/,
    path: /^\/i\//
  },
  ready: function () {
    var _ref77 = _asyncToGenerator( regeneratorRuntime.mark(function _callee75() {
      var a;
      return regeneratorRuntime.wrap(function _callee75$(_context75) {
        while (1) {
          switch (_context75.prev = _context75.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a#btn-main, a.btn.btn-block.btn-warning, a.btn.btn-block.btn-success');
              _context75.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context75.stop();
          }
        }
      }, _callee75, this);
    }));
    function ready() {
      return _ref77.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(?:(\w+)\.)?(coinurl\.com|cur\.lv)$/,
    path: /^\/([-\w]+)$/
  },
  ready: function () {
    var _ref78 = _asyncToGenerator( regeneratorRuntime.mark(function _callee76(m) {
      var host, param, mainFrameContent, docMainFrame, rExtractLink;
      return regeneratorRuntime.wrap(function _callee76$(_context76) {
        while (1) {
          switch (_context76.prev = _context76.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              host = 'http://cur.lv/redirect_curlv.php';
              param = m.host[1] === undefined ? {
                code: m.path[1]
              } : {
                zone: m.host[1],
                name: m.path[1]
              };
              _context76.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.get(host, param);
            case 5:
              mainFrameContent = _context76.sent;
              docMainFrame = null;
              _context76.prev = 7;
              docMainFrame = _ADSBYPASSER_NAMESPACE__.$.toDOM(mainFrameContent);
              _context76.next = 14;
              break;
            case 11:
              _context76.prev = 11;
              _context76.t0 = _context76['catch'](7);
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('main frame changed');
            case 14:
              rExtractLink = /onclick="open_url\('([^']+)',\s*'go'\)/;
              _ADSBYPASSER_NAMESPACE__._.forEach(_ADSBYPASSER_NAMESPACE__.$.$$('iframe', docMainFrame), function (currFrame) {
                var currFrameAddr = currFrame.getAttribute('src');
                _ADSBYPASSER_NAMESPACE__.$.get(currFrameAddr).then(function (currFrameContent) {
                  var aRealLink = rExtractLink.exec(currFrameContent);
                  if (aRealLink === undefined || aRealLink[1] === undefined) {
                    return;
                  }
                  var realLink = aRealLink[1];
                  return _ADSBYPASSER_NAMESPACE__.$.openLink(realLink);
                });
              });
            case 16:
            case 'end':
              return _context76.stop();
          }
        }
      }, _callee76, this, [[7, 11]]);
    }));
    function ready(_x14) {
      return _ref78.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^comyonet\.com$/
  },
  ready: function () {
    var _ref79 = _asyncToGenerator( regeneratorRuntime.mark(function _callee77() {
      var input;
      return regeneratorRuntime.wrap(function _callee77$(_context77) {
        while (1) {
          switch (_context77.prev = _context77.next) {
            case 0:
              input = (0, _ADSBYPASSER_NAMESPACE__.$)('input[name="enter"]');
              input.click();
            case 2:
            case 'end':
              return _context77.stop();
          }
        }
      }, _callee77, this);
    }));
    function ready() {
      return _ref79.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?cvc\.la$/,
    path: /^\/\w+$/
  },
  start: function () {
    var _ref80 = _asyncToGenerator( regeneratorRuntime.mark(function _callee78() {
      var text, matches;
      return regeneratorRuntime.wrap(function _callee78$(_context78) {
        while (1) {
          switch (_context78.prev = _context78.next) {
            case 0:
              _context78.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.post(document.location.href, {
                hidden: 24, 
                image: ' '
              });
            case 2:
              text = _context78.sent;
              matches = text.match(/window\.location\.replace\('([^']+)'\);/);
              _context78.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(matches[1]);
            case 6:
            case 'end':
              return _context78.stop();
          }
        }
      }, _callee78, this);
    }));
    function start() {
      return _ref80.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?dapat\.in$/
  },
  ready: function () {
    var _ref81 = _asyncToGenerator( regeneratorRuntime.mark(function _callee79() {
      var f;
      return regeneratorRuntime.wrap(function _callee79$(_context79) {
        while (1) {
          switch (_context79.prev = _context79.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('iframe[name=pagetext]');
              _context79.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f.src);
            case 3:
            case 'end':
              return _context79.stop();
          }
        }
      }, _callee79, this);
    }));
    function ready() {
      return _ref81.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?dd\.ma$/
  },
  ready: function () {
    var _ref82 = _asyncToGenerator( regeneratorRuntime.mark(function _callee80() {
      var i, a;
      return regeneratorRuntime.wrap(function _callee80$(_context80) {
        while (1) {
          switch (_context80.prev = _context80.next) {
            case 0:
              i = _ADSBYPASSER_NAMESPACE__.$.$('#mainframe');
              if (!i) {
                _context80.next = 5;
                break;
              }
              _context80.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(i.src);
            case 4:
              return _context80.abrupt('return');
            case 5:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#btn_open a');
              _context80.next = 8;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 8:
            case 'end':
              return _context80.stop();
          }
        }
      }, _callee80, this);
    }));
    function ready() {
      return _ref82.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?dereferer\.website$/,
    query: /^\?(.+)/
  },
  start: function () {
    var _ref83 = _asyncToGenerator( regeneratorRuntime.mark(function _callee81(m) {
      return regeneratorRuntime.wrap(function _callee81$(_context81) {
        while (1) {
          switch (_context81.prev = _context81.next) {
            case 0:
              _context81.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m.query[1]);
            case 2:
            case 'end':
              return _context81.stop();
          }
        }
      }, _callee81, this);
    }));
    function start(_x15) {
      return _ref83.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^dikit\.in$/
  },
  ready: function () {
    var _ref84 = _asyncToGenerator( regeneratorRuntime.mark(function _callee82() {
      var a;
      return regeneratorRuntime.wrap(function _callee82$(_context82) {
        while (1) {
          switch (_context82.prev = _context82.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.disclaimer a');
              _context82.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 4:
            case 'end':
              return _context82.stop();
          }
        }
      }, _callee82, this);
    }));
    function ready() {
      return _ref84.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^durl\.me$/
  },
  ready: function () {
    var _ref85 = _asyncToGenerator( regeneratorRuntime.mark(function _callee83() {
      var a;
      return regeneratorRuntime.wrap(function _callee83$(_context83) {
        while (1) {
          switch (_context83.prev = _context83.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a[class="proceedBtn"]');
              _context83.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context83.stop();
          }
        }
      }, _callee83, this);
    }));
    function ready() {
      return _ref85.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^easyurl\.net$/, /^(atu|clickthru|redirects|readthis)\.ca$/, /^goshrink\.com$/]
  },
  ready: function () {
    var _ref86 = _asyncToGenerator( regeneratorRuntime.mark(function _callee84() {
      var f;
      return regeneratorRuntime.wrap(function _callee84$(_context84) {
        while (1) {
          switch (_context84.prev = _context84.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('frame[name=main]');
              _context84.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f.src);
            case 3:
            case 'end':
              return _context84.stop();
          }
        }
      }, _callee84, this);
    }));
    function ready() {
      return _ref86.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^elde\.me$/
  },
  ready: function () {
    var _ref87 = _asyncToGenerator( regeneratorRuntime.mark(function _callee85() {
      var a;
      return regeneratorRuntime.wrap(function _callee85$(_context85) {
        while (1) {
          switch (_context85.prev = _context85.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe:not([name=undefined])');
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#modal-alert');
              a.style.display = 'block';
              a.style.top = 0;
              a.style.left = 0;
            case 5:
            case 'end':
              return _context85.stop();
          }
        }
      }, _callee85, this);
    }));
    function ready() {
      return _ref87.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^ethi\.in$/, /^st\.wardhanime\.net$/],
    path: /^\/i\/\d+$/
  },
  ready: function () {
    var _ref88 = _asyncToGenerator( regeneratorRuntime.mark(function _callee86() {
      var a;
      return regeneratorRuntime.wrap(function _callee86$(_context86) {
        while (1) {
          switch (_context86.prev = _context86.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#wrapper > [class^="tombo"] > a[target="_blank"]');
              _context86.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context86.stop();
          }
        }
      }, _callee86, this);
    }));
    function ready() {
      return _ref88.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?filoops\.info$/
  },
  ready: function () {
    var _ref89 = _asyncToGenerator( regeneratorRuntime.mark(function _callee87() {
      var a;
      return regeneratorRuntime.wrap(function _callee87$(_context87) {
        while (1) {
          switch (_context87.prev = _context87.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#text > center a, #text > div[align=center] a');
              _context87.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context87.stop();
          }
        }
      }, _callee87, this);
    }));
    function ready() {
      return _ref89.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^fit\.sh$/
  },
  ready: function () {
    var _ref90 = _asyncToGenerator( regeneratorRuntime.mark(function _callee88() {
      var m, interLink;
      return regeneratorRuntime.wrap(function _callee88$(_context88) {
        while (1) {
          switch (_context88.prev = _context88.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('.container-body');
              m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/token="([^"]+)"/);
              if (m) {
                _context88.next = 4;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('site changed');
            case 4:
              m = m[1];
              interLink = '/go/' + m + '?fa=15466&a=' + window.location.hash.substr(1);
              _context88.next = 8;
              return _ADSBYPASSER_NAMESPACE__._.wait(6 * 1000);
            case 8:
              _context88.next = 10;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(interLink);
            case 10:
            case 'end':
              return _context88.stop();
          }
        }
      }, _callee88, this);
    }));
    function ready() {
      return _ref90.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?fiuxy\.co$/,
    path: /^\/links?\/$/
  },
  ready: function () {
    var _ref91 = _asyncToGenerator( regeneratorRuntime.mark(function _callee89() {
      return regeneratorRuntime.wrap(function _callee89$(_context89) {
        while (1) {
          switch (_context89.prev = _context89.next) {
            case 0:
              _context89.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink((0, _ADSBYPASSER_NAMESPACE__.$)('a.btn.a').href);
            case 2:
            case 'end':
              return _context89.stop();
          }
        }
      }, _callee89, this);
    }));
    function ready() {
      return _ref91.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?fundurl\.com$/,
    query: /i=([^&]+)/
  },
  start: function () {
    var _ref92 = _asyncToGenerator( regeneratorRuntime.mark(function _callee90(m) {
      return regeneratorRuntime.wrap(function _callee90$(_context90) {
        while (1) {
          switch (_context90.prev = _context90.next) {
            case 0:
              _context90.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m.query[1]);
            case 2:
            case 'end':
              return _context90.stop();
          }
        }
      }, _callee90, this);
    }));
    function start(_x16) {
      return _ref92.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?fundurl\.com$/,
    path: /^\/(go-\w+|load\.php)$/
  },
  ready: function () {
    var _ref93 = _asyncToGenerator( regeneratorRuntime.mark(function _callee91() {
      var f;
      return regeneratorRuntime.wrap(function _callee91$(_context91) {
        while (1) {
          switch (_context91.prev = _context91.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('iframe[name=fpage3]');
              _context91.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f.src);
            case 3:
            case 'end':
              return _context91.stop();
          }
        }
      }, _callee91, this);
    }));
    function ready() {
      return _ref93.apply(this, arguments);
    }
    return ready;
  }()
});
(function () {
  var hosts = /^gca\.sh|repla\.cr$/;
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: hosts,
      path: /^\/adv\/\w+\/(.*)$/,
      query: /^(.*)$/,
      hash: /^(.*)$/
    },
    start: function () {
      var _ref94 = _asyncToGenerator( regeneratorRuntime.mark(function _callee92(m) {
        var l;
        return regeneratorRuntime.wrap(function _callee92$(_context92) {
          while (1) {
            switch (_context92.prev = _context92.next) {
              case 0:
                l = m.path[1] + m.query[1] + m.hash[1];
                _context92.next = 3;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(l);
              case 3:
              case 'end':
                return _context92.stop();
            }
          }
        }, _callee92, this);
      }));
      function start(_x17) {
        return _ref94.apply(this, arguments);
      }
      return start;
    }()
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: hosts
    },
    ready: function () {
      var _ref95 = _asyncToGenerator( regeneratorRuntime.mark(function _callee93() {
        var jQuery;
        return regeneratorRuntime.wrap(function _callee93$(_context93) {
          while (1) {
            switch (_context93.prev = _context93.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                jQuery = _ADSBYPASSER_NAMESPACE__.$.window.$;
                _context93.next = 4;
                return _ADSBYPASSER_NAMESPACE__._.wait(1000);
              case 4:
                jQuery('#captcha-dialog').dialog('open');
              case 5:
              case 'end':
                return _context93.stop();
            }
          }
        }, _callee93, this);
      }));
      function ready() {
        return _ref95.apply(this, arguments);
      }
      return ready;
    }()
  });
})();
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^gkurl\.us$/
  },
  ready: function () {
    var _ref96 = _asyncToGenerator( regeneratorRuntime.mark(function _callee94() {
      var iframe;
      return regeneratorRuntime.wrap(function _callee94$(_context94) {
        while (1) {
          switch (_context94.prev = _context94.next) {
            case 0:
              iframe = (0, _ADSBYPASSER_NAMESPACE__.$)('#gkurl-frame');
              _context94.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(iframe.src);
            case 3:
            case 'end':
              return _context94.stop();
          }
        }
      }, _callee94, this);
    }));
    function ready() {
      return _ref96.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^u\.go2\.me$/
  },
  ready: function () {
    var _ref97 = _asyncToGenerator( regeneratorRuntime.mark(function _callee95() {
      var iframe;
      return regeneratorRuntime.wrap(function _callee95$(_context95) {
        while (1) {
          switch (_context95.prev = _context95.next) {
            case 0:
              iframe = (0, _ADSBYPASSER_NAMESPACE__.$)('iframe');
              _context95.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(iframe.src);
            case 3:
            case 'end':
              return _context95.stop();
          }
        }
      }, _callee95, this);
    }));
    function ready() {
      return _ref97.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^goto\.loncat\.in$/,
    query: /open=(.+)/
  },
  start: function () {
    var _ref98 = _asyncToGenerator( regeneratorRuntime.mark(function _callee96(m) {
      var url;
      return regeneratorRuntime.wrap(function _callee96$(_context96) {
        while (1) {
          switch (_context96.prev = _context96.next) {
            case 0:
              url = atob(atob(m.query[1]));
              _context96.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 3:
            case 'end':
              return _context96.stop();
          }
        }
      }, _callee96, this);
    }));
    function start(_x18) {
      return _ref98.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^gsurl\.(me|in)$/, /^g5u\.pw$/]
  },
  ready: function () {
    var _ref99 = _asyncToGenerator( regeneratorRuntime.mark(function _callee97() {
      var a;
      return regeneratorRuntime.wrap(function _callee97$(_context97) {
        while (1) {
          switch (_context97.prev = _context97.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('#container');
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#link');
              _context97.next = 4;
              return _ADSBYPASSER_NAMESPACE__._.wait(5000);
            case 4:
              _context97.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 6:
            case 'end':
              return _context97.stop();
          }
        }
      }, _callee97, this);
    }));
    function ready() {
      return _ref99.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^hotshorturl\.com$/
  },
  ready: function () {
    var _ref100 = _asyncToGenerator( regeneratorRuntime.mark(function _callee98() {
      var frame;
      return regeneratorRuntime.wrap(function _callee98$(_context98) {
        while (1) {
          switch (_context98.prev = _context98.next) {
            case 0:
              frame = (0, _ADSBYPASSER_NAMESPACE__.$)('frame[scrolling=yes]');
              _context98.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(frame.src);
            case 3:
            case 'end':
              return _context98.stop();
          }
        }
      }, _callee98, this);
    }));
    function ready() {
      return _ref100.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?(ilix\.in|priva\.us)$/,
    path: /\/(\w+)/
  },
  ready: function () {
    var _ref101 = _asyncToGenerator( regeneratorRuntime.mark(function _callee99(m) {
      var realHost, realURL, f;
      return regeneratorRuntime.wrap(function _callee99$(_context99) {
        while (1) {
          switch (_context99.prev = _context99.next) {
            case 0:
              realHost = 'ilix.in';
              if (!(m.host[2] !== realHost)) {
                _context99.next = 6;
                break;
              }
              realURL = location.href.replace(m.host[2], realHost);
              _context99.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(realURL);
            case 5:
              return _context99.abrupt('return');
            case 6:
              f = _ADSBYPASSER_NAMESPACE__.$.$('iframe[name=ifram]');
              if (!f) {
                _context99.next = 11;
                break;
              }
              _context99.next = 10;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f.src);
            case 10:
              return _context99.abrupt('return');
            case 11:
              if (!_ADSBYPASSER_NAMESPACE__.$.$('img#captcha')) {
                (0, _ADSBYPASSER_NAMESPACE__.$)('form[name=frm]').submit();
              }
            case 12:
            case 'end':
              return _context99.stop();
          }
        }
      }, _callee99, this);
    }));
    function ready(_x19) {
      return _ref101.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^ilovebanten\.com$/
  },
  ready: function () {
    var _ref102 = _asyncToGenerator( regeneratorRuntime.mark(function _callee100() {
      var p;
      return regeneratorRuntime.wrap(function _callee100$(_context100) {
        while (1) {
          switch (_context100.prev = _context100.next) {
            case 0:
              p = (0, _ADSBYPASSER_NAMESPACE__.$)('.notblocked');
              _context100.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(p.textContent);
            case 3:
            case 'end':
              return _context100.stop();
          }
        }
      }, _callee100, this);
    }));
    function ready() {
      return _ref102.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^indexmovie\.me$/,
    path: /^\/([^/]+)$/
  },
  start: function () {
    var _ref103 = _asyncToGenerator( regeneratorRuntime.mark(function _callee101(m) {
      return regeneratorRuntime.wrap(function _callee101$(_context101) {
        while (1) {
          switch (_context101.prev = _context101.next) {
            case 0:
              _context101.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('/get/' + m.path[1]);
            case 2:
            case 'end':
              return _context101.stop();
          }
        }
      }, _callee101, this);
    }));
    function start(_x20) {
      return _ref103.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^itw\.me$/,
    path: /^\/r\//
  },
  ready: function () {
    var _ref104 = _asyncToGenerator( regeneratorRuntime.mark(function _callee102() {
      var f;
      return regeneratorRuntime.wrap(function _callee102$(_context102) {
        while (1) {
          switch (_context102.prev = _context102.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('.go-form');
              f.submit();
            case 2:
            case 'end':
              return _context102.stop();
          }
        }
      }, _callee102, this);
    }));
    function ready() {
      return _ref104.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^ity\.im$/
  },
  ready: function () {
    var _ref105 = _asyncToGenerator( regeneratorRuntime.mark(function _callee103() {
      var f, _$find3, _$find4, data;
      return regeneratorRuntime.wrap(function _callee103$(_context103) {
        while (1) {
          switch (_context103.prev = _context103.next) {
            case 0:
              f = _ADSBYPASSER_NAMESPACE__.$.$('#main');
              if (!f) {
                _context103.next = 5;
                break;
              }
              _context103.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f.src);
            case 4:
              return _context103.abrupt('return');
            case 5:
              _$find3 = _ADSBYPASSER_NAMESPACE__._.find(_ADSBYPASSER_NAMESPACE__.$.$$('frame'), function (frame) {
                if (frame.src.indexOf('interheader.php') < 0) {
                  return _ADSBYPASSER_NAMESPACE__._.none;
                }
                return frame.src;
              });
              _$find4 = _slicedToArray(_$find3, 3);
              f = _$find4[2];
              if (!(f !== _ADSBYPASSER_NAMESPACE__._.none)) {
                _context103.next = 12;
                break;
              }
              _context103.next = 11;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f);
            case 11:
              return _context103.abrupt('return');
            case 12:
              f = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/krypted=([^&]+)/);
              if (f) {
                _context103.next = 15;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('site changed');
            case 15:
              f = f[1];
              data = _ADSBYPASSER_NAMESPACE__.$.window.des('ksnslmtmk0v4Pdviusajqu', _ADSBYPASSER_NAMESPACE__.$.window.hexToString(f), 0, 0);
              if (!data) {
                _context103.next = 20;
                break;
              }
              _context103.next = 20;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('http://ity.im/1104_21_50846_' + data);
            case 20:
            case 'end':
              return _context103.stop();
          }
        }
      }, _callee103, this);
    }));
    function ready() {
      return _ref105.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?kingofshrink\.com$/
  },
  ready: function () {
    var _ref106 = _asyncToGenerator( regeneratorRuntime.mark(function _callee104() {
      var l;
      return regeneratorRuntime.wrap(function _callee104$(_context104) {
        while (1) {
          switch (_context104.prev = _context104.next) {
            case 0:
              l = (0, _ADSBYPASSER_NAMESPACE__.$)('#textresult > a');
              _context104.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l.href);
            case 3:
            case 'end':
              return _context104.stop();
          }
        }
      }, _callee104, this);
    }));
    function ready() {
      return _ref106.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^st\.kurogaze\.net$/,
    query: /r=(.+)/
  },
  start: function () {
    var _ref107 = _asyncToGenerator( regeneratorRuntime.mark(function _callee105(m) {
      var r;
      return regeneratorRuntime.wrap(function _callee105$(_context105) {
        while (1) {
          switch (_context105.prev = _context105.next) {
            case 0:
              r = atob(m.query[1]);
              _context105.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(r);
            case 3:
            case 'end':
              return _context105.stop();
          }
        }
      }, _callee105, this);
    }));
    function start(_x21) {
      return _ref107.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^st\.kurogaze\.net$/
  },
  ready: function () {
    var _ref108 = _asyncToGenerator( regeneratorRuntime.mark(function _callee106() {
      var a;
      return regeneratorRuntime.wrap(function _callee106$(_context106) {
        while (1) {
          switch (_context106.prev = _context106.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a.redirect');
              _context106.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context106.stop();
          }
        }
      }, _callee106, this);
    }));
    function ready() {
      return _ref108.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?leechbd\.tk$/,
    path: /^\/Shortener\/(\w+)$/
  },
  start: function () {
    var _ref109 = _asyncToGenerator( regeneratorRuntime.mark(function _callee107(m) {
      var text, r;
      return regeneratorRuntime.wrap(function _callee107$(_context107) {
        while (1) {
          switch (_context107.prev = _context107.next) {
            case 0:
              _context107.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.get('/Shortener/API/read/get', {
                id: m.path[1],
                type: 'json'
              });
            case 2:
              text = _context107.sent;
              r = JSON.parse(text);
              if (!(r.success == true && r.data.full)) {
                _context107.next = 9;
                break;
              }
              _context107.next = 7;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(r.data.full);
            case 7:
              _context107.next = 10;
              break;
            case 9:
              _ADSBYPASSER_NAMESPACE__._.warn('API Error ' + r.error.code + ' : ' + r.error.msg);
            case 10:
            case 'end':
              return _context107.stop();
          }
        }
      }, _callee107, this);
    }));
    function start(_x22) {
      return _ref109.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: 'http://www.lienscash.com/l/*',
  ready: function () {
    var _ref110 = _asyncToGenerator( regeneratorRuntime.mark(function _callee108() {
      var a;
      return regeneratorRuntime.wrap(function _callee108$(_context108) {
        while (1) {
          switch (_context108.prev = _context108.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#redir_btn');
              _context108.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context108.stop();
          }
        }
      }, _callee108, this);
    }));
    function ready() {
      return _ref110.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?\w+\.link-protector\.com$/
  },
  ready: function () {
    var _ref111 = _asyncToGenerator( regeneratorRuntime.mark(function _callee109() {
      var f;
      return regeneratorRuntime.wrap(function _callee109$(_context109) {
        while (1) {
          switch (_context109.prev = _context109.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('form[style="font-weight:normal;font-size:12;font-family:Verdana;"]');
              _context109.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f.action);
            case 3:
            case 'end':
              return _context109.stop();
          }
        }
      }, _callee109, this);
    }));
    function ready() {
      return _ref111.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?link\.im$/,
    path: /^\/\w+$/
  },
  start: function () {
    var _ref112 = _asyncToGenerator( regeneratorRuntime.mark(function _callee110() {
      var text, m;
      return regeneratorRuntime.wrap(function _callee110$(_context110) {
        while (1) {
          switch (_context110.prev = _context110.next) {
            case 0:
              _context110.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.post(document.location.href, {
                image: 'Continue'
              });
            case 2:
              text = _context110.sent;
              m = text.match(/window\.location\.replace\('([^']+)'\)/);
              _context110.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m[1]);
            case 6:
            case 'end':
              return _context110.stop();
          }
        }
      }, _callee110, this);
    }));
    function start() {
      return _ref112.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^link\.tl$/,
    path: /^\/fly\/site\.php$/,
    query: /^\?to=(.+)$/
  },
  ready: function () {
    var _ref113 = _asyncToGenerator( regeneratorRuntime.mark(function _callee111() {
      var a;
      return regeneratorRuntime.wrap(function _callee111$(_context111) {
        while (1) {
          switch (_context111.prev = _context111.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.skip > .btn');
              _context111.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context111.stop();
          }
        }
      }, _callee111, this);
    }));
    function ready() {
      return _ref113.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^link\.tl$/,
    path: /[^^](https?:\/\/.+)$/
  },
  start: function start(m) {
    'use strict';
    _ADSBYPASSER_NAMESPACE__.$.openLink(m.path[1]);
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^link\.tl$/,
    path: /^\/(.+)$/
  },
  start: function () {
    var _ref114 = _asyncToGenerator( regeneratorRuntime.mark(function _callee112(m) {
      return regeneratorRuntime.wrap(function _callee112$(_context112) {
        while (1) {
          switch (_context112.prev = _context112.next) {
            case 0:
              _context112.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('/fly/site.php?to=' + m.path[1]);
            case 2:
            case 'end':
              return _context112.stop();
          }
        }
      }, _callee112, this);
    }));
    function start(_x23) {
      return _ref114.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /\.link2dollar\.com$/,
    path: /^\/\d+$/
  },
  ready: function () {
    var _ref115 = _asyncToGenerator( regeneratorRuntime.mark(function _callee113() {
      var m;
      return regeneratorRuntime.wrap(function _callee113$(_context113) {
        while (1) {
          switch (_context113.prev = _context113.next) {
            case 0:
              m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/const rlink = '([^']+)';/);
              if (m) {
                _context113.next = 3;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('site changed');
            case 3:
              m = m[1];
              _context113.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m);
            case 6:
            case 'end':
              return _context113.stop();
          }
        }
      }, _callee113, this);
    }));
    function ready() {
      return _ref115.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^link2you\.ru$/,
    path: /^\/\d+\/(.+)$/
  },
  start: function () {
    var _ref116 = _asyncToGenerator( regeneratorRuntime.mark(function _callee114(m) {
      var url;
      return regeneratorRuntime.wrap(function _callee114$(_context114) {
        while (1) {
          switch (_context114.prev = _context114.next) {
            case 0:
              url = m.path[1];
              if (!url.match(/^https?:\/\//)) {
                url = '//' + url;
              }
              _context114.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 4:
            case 'end':
              return _context114.stop();
          }
        }
      }, _callee114, this);
    }));
    function start(_x24) {
      return _ref116.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^link(4ad|ajc)\.com$/,
    path: /^\/(.+)$/
  },
  ready: function () {
    var _ref117 = _asyncToGenerator( regeneratorRuntime.mark(function _callee115(m) {
      var d, url;
      return regeneratorRuntime.wrap(function _callee115$(_context115) {
        while (1) {
          switch (_context115.prev = _context115.next) {
            case 0:
              d = (0, _ADSBYPASSER_NAMESPACE__.$)('div[id^=module_]');
              d = d.id.match(/module_(\d+)/);
              d = d[1];
              _context115.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.post('form.php?block_id=' + d, {
                cmd: 'get_source',
                act: 'waiting',
                id: m.path[1]
              });
            case 5:
              url = _context115.sent;
              _context115.next = 8;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 8:
            case 'end':
              return _context115.stop();
          }
        }
      }, _callee115, this);
    }));
    function ready(_x25) {
      return _ref117.apply(this, arguments);
    }
    return ready;
  }()
});
(function () {
  var sendRequest = function () {
    var _ref119 = _asyncToGenerator( regeneratorRuntime.mark(function _callee117(opts) {
      var data, a;
      return regeneratorRuntime.wrap(function _callee117$(_context117) {
        while (1) {
          switch (_context117.prev = _context117.next) {
            case 0:
              _context117.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.post('/ajax/r.php', opts);
            case 2:
              data = _context117.sent;
              if (!(data.length <= 1)) {
                _context117.next = 7;
                break;
              }
              _context117.next = 6;
              return sendRequest(opts);
            case 6:
              return _context117.abrupt('return', _context117.sent);
            case 7:
              a = _ADSBYPASSER_NAMESPACE__.$.toDOM(data);
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a', a);
              return _context117.abrupt('return', a.href);
            case 10:
            case 'end':
              return _context117.stop();
          }
        }
      }, _callee117, this);
    }));
    return function sendRequest(_x27) {
      return _ref119.apply(this, arguments);
    };
  }();
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^link5s\.com$/,
      path: /^\/([^/]+)$/
    },
    ready: function () {
      var _ref118 = _asyncToGenerator( regeneratorRuntime.mark(function _callee116(m) {
        var i, opts, url;
        return regeneratorRuntime.wrap(function _callee116$(_context116) {
          while (1) {
            switch (_context116.prev = _context116.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.window.$ = null;
                i = (0, _ADSBYPASSER_NAMESPACE__.$)('#iframeID');
                opts = {
                  page: m.path[1],
                  advID: i.dataset.cmp,
                  u: i.dataset.u
                };
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                _context116.next = 6;
                return sendRequest(opts);
              case 6:
                url = _context116.sent;
                _context116.next = 9;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
              case 9:
              case 'end':
                return _context116.stop();
            }
          }
        }, _callee116, this);
      }));
      function ready(_x26) {
        return _ref118.apply(this, arguments);
      }
      return ready;
    }()
  });
})();
(function () {
  var sendRequest = function () {
    var _ref124 = _asyncToGenerator( regeneratorRuntime.mark(function _callee122(token) {
      var text, data;
      return regeneratorRuntime.wrap(function _callee122$(_context122) {
        while (1) {
          switch (_context122.prev = _context122.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.get(token.adurl);
              delete token.adurl;
              token.a_b = false;
              _ADSBYPASSER_NAMESPACE__._.info('waiting the interval');
              _context122.next = 6;
              return _ADSBYPASSER_NAMESPACE__._.wait(5000);
            case 6:
              _ADSBYPASSER_NAMESPACE__._.info('sending token: %o', token);
              _context122.next = 9;
              return _ADSBYPASSER_NAMESPACE__.$.get('/intermission/loadTargetUrl', token, {
                'X-Requested-With': _ADSBYPASSER_NAMESPACE__._.none,
                Origin: _ADSBYPASSER_NAMESPACE__._.none
              });
            case 9:
              text = _context122.sent;
              data = JSON.parse(text);
              _ADSBYPASSER_NAMESPACE__._.info('response: %o', data);
              if (!(!data.Success && data.Errors[0] === 'Invalid token')) {
                _context122.next = 17;
                break;
              }
              _ADSBYPASSER_NAMESPACE__._.warn('got invalid token');
              _context122.next = 16;
              return retry();
            case 16:
              return _context122.abrupt('return', _context122.sent);
            case 17:
              if (!data.AdBlockSpotted) {
                _context122.next = 20;
                break;
              }
              _ADSBYPASSER_NAMESPACE__._.warn('adblock spotted');
              return _context122.abrupt('return');
            case 20:
              if (!(data.Success && !data.AdBlockSpotted && data.Url)) {
                _context122.next = 22;
                break;
              }
              return _context122.abrupt('return', data.Url);
            case 22:
            case 'end':
              return _context122.stop();
          }
        }
      }, _callee122, this);
    }));
    return function sendRequest(_x30) {
      return _ref124.apply(this, arguments);
    };
  }();
  var retry = function () {
    var _ref125 = _asyncToGenerator( regeneratorRuntime.mark(function _callee123() {
      var text, d, t;
      return regeneratorRuntime.wrap(function _callee123$(_context123) {
        while (1) {
          switch (_context123.prev = _context123.next) {
            case 0:
              _context123.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.get(window.location.toString(), {}, {
                'X-Forwarded-For': _ADSBYPASSER_NAMESPACE__.$.generateRandomIP()
              });
            case 2:
              text = _context123.sent;
              d = _ADSBYPASSER_NAMESPACE__.$.toDOM(text);
              t = findToken(d);
              if (t) {
                _context123.next = 11;
                break;
              }
              _context123.next = 8;
              return _ADSBYPASSER_NAMESPACE__._.wait(1000);
            case 8:
              _context123.next = 10;
              return retry();
            case 10:
              return _context123.abrupt('return', _context123.sent);
            case 11:
              _context123.next = 13;
              return sendRequest(t);
            case 13:
              return _context123.abrupt('return', _context123.sent);
            case 14:
            case 'end':
              return _context123.stop();
          }
        }
      }, _callee123, this);
    }));
    return function retry() {
      return _ref125.apply(this, arguments);
    };
  }();
  var hostRules = [/^(([\w]{8}|www)\.)?(allanalpass|cash4files|drstickyfingers|fapoff|freegaysitepass|(gone|tube)viral|(pic|tna)bucks|whackyvidz|fuestfka)\.com$/, /^(([\w]{8}|www)\.)?(a[mn]y|deb|dyo|sexpalace)\.gs$/, /^(([\w]{8}|www)\.)?(filesonthe|poontown|seriousdeals|ultrafiles|urlbeat|zatnawqy|zytpirwai|jzrputtbut)\.net$/, /^(([\w]{8}|www)\.)?freean\.us$/, /^(([\w]{8}|www)\.)?galleries\.bz$/, /^(([\w]{8}|www)\.)?hornywood\.tv$/, /^(([\w]{8}|www)\.)?link(babes|bucks)\.com$/, /^(([\w]{8}|www)\.)?(megaline|miniurls|qqc|rqq|tinylinks|yyv|zff)\.co$/, /^(([\w]{8}|www)\.)?(these(blog|forum)s)\.com$/, /^(([\w]{8}|www)\.)?youfap\.me$/, /^warning-this-linkcode-will-cease-working-soon\.www\.linkbucksdns\.com$/];
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: hostRules,
      path: /^\/\w+\/url\/(.+)$/
    },
    ready: function () {
      var _ref120 = _asyncToGenerator( regeneratorRuntime.mark(function _callee118(m) {
        var url, match;
        return regeneratorRuntime.wrap(function _callee118$(_context118) {
          while (1) {
            switch (_context118.prev = _context118.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.removeAllTimer();
                _ADSBYPASSER_NAMESPACE__.$.resetCookies();
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                url = m.path[1] + window.location.search;
                match = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/UrlEncoded: ([^,]+)/);
                if (match && match[1] === 'true') {
                  url = decrypt(url);
                }
                _context118.next = 8;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
              case 8:
              case 'end':
                return _context118.stop();
            }
          }
        }, _callee118, this);
      }));
      function ready(_x28) {
        return _ref120.apply(this, arguments);
      }
      return ready;
    }()
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: hostRules
    },
    start: function () {
      var _ref121 = _asyncToGenerator( regeneratorRuntime.mark(function _callee119() {
        return regeneratorRuntime.wrap(function _callee119$(_context119) {
          while (1) {
            switch (_context119.prev = _context119.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.window.XMLHttpRequest = _ADSBYPASSER_NAMESPACE__._.nop;
              case 1:
              case 'end':
                return _context119.stop();
            }
          }
        }, _callee119, this);
      }));
      function start() {
        return _ref121.apply(this, arguments);
      }
      return start;
    }(),
    ready: function () {
      var _ref122 = _asyncToGenerator( regeneratorRuntime.mark(function _callee120() {
        var path, token, url;
        return regeneratorRuntime.wrap(function _callee120$(_context120) {
          while (1) {
            switch (_context120.prev = _context120.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.removeAllTimer();
                _ADSBYPASSER_NAMESPACE__.$.resetCookies();
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                if (!(window.location.pathname.indexOf('verify') >= 0)) {
                  _context120.next = 8;
                  break;
                }
                path = window.location.pathname.replace('/verify', '');
                _context120.next = 7;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(path);
              case 7:
                return _context120.abrupt('return');
              case 8:
                token = findToken(document);
                _context120.next = 11;
                return sendRequest(token);
              case 11:
                url = _context120.sent;
                _ADSBYPASSER_NAMESPACE__.$.nuke(url);
                _context120.next = 15;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
              case 15:
              case 'end':
                return _context120.stop();
            }
          }
        }, _callee120, this);
      }));
      function ready() {
        return _ref122.apply(this, arguments);
      }
      return ready;
    }()
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      query: /^(.*)[?&]_lbGate=\d+$/
    },
    start: function () {
      var _ref123 = _asyncToGenerator( regeneratorRuntime.mark(function _callee121(m) {
        return regeneratorRuntime.wrap(function _callee121$(_context121) {
          while (1) {
            switch (_context121.prev = _context121.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.setCookie('_lbGatePassed', 'true');
                _context121.next = 3;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(window.location.pathname + m.query[1]);
              case 3:
              case 'end':
                return _context121.stop();
            }
          }
        }, _callee121, this);
      }));
      function start(_x29) {
        return _ref123.apply(this, arguments);
      }
      return start;
    }()
  });
  function findToken(context) {
    var script = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts('    var f = window[\'init\' + \'Lb\' + \'js\' + \'\']', context);
    if (!script) {
      _ADSBYPASSER_NAMESPACE__._.warn('pattern changed');
      return null;
    }
    var adurl = script.match(/AdUrl\s*:\s*'([^']+)'/);
    if (!adurl) {
      return null;
    }
    adurl = adurl[1];
    var m1 = script.match(/AdPopUrl\s*:\s*'.+\?[^=]+=([\w\d]+)'/);
    var m2 = script.match(/Token\s*:\s*'([\w\d]+)'/);
    var token = m1[1] || m2[1];
    var m = script.match(/=\s*(\d+);/);
    var ak = parseInt(m[1], 10);
    var re = /\+\s*(\d+);/g;
    var tmp = null;
    while ((m = re.exec(script)) !== null) {
      tmp = m[1];
    }
    ak += parseInt(tmp, 10);
    return {
      t: token,
      aK: ak,
      adurl: adurl
    };
  }
  function decrypt(url) {
    url = ConvertFromHex(url);
    var unsafe = _ADSBYPASSER_NAMESPACE__._.template('({0})("{1}")');
    unsafe = unsafe(Encode.toString(), url);
    unsafe = (0, eval)(unsafe);
    return unsafe;
  }
  function ConvertFromHex(str) {
    var result = [];
    while (str.length >= 2) {
      result.push(String.fromCharCode(parseInt(str.substring(0, 2), 16)));
      str = str.substring(2, str.length);
    }
    return result.join('');
  }
  var Encode = function Encode(str) {
    var s = [],
        j = 0,
        x,
        res = '',
        k = arguments.callee.toString().replace(/\s+/g, '');
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
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^www\.linkdecode\.com$/, /^www\.fastdecode\.com$/],
    path: /^\/$/,
    query: /^\?(.+)$/
  },
  ready: function () {
    var _ref126 = _asyncToGenerator( regeneratorRuntime.mark(function _callee124(m) {
      var lnk, b;
      return regeneratorRuntime.wrap(function _callee124$(_context124) {
        while (1) {
          switch (_context124.prev = _context124.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              lnk = m.query[1];
              if (!m.query[1].match(/^https?:\/\//)) {
                _context124.next = 6;
                break;
              }
              _context124.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(lnk);
            case 5:
              return _context124.abrupt('return');
            case 6:
              b = _ADSBYPASSER_NAMESPACE__.$.$('#popup');
              if (!(b && b.href)) {
                _context124.next = 11;
                break;
              }
              _context124.next = 10;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(b.href);
            case 10:
              return _context124.abrupt('return');
            case 11:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('#m > .Visit_Link');
              b = b.onclick.toString().match(/window\.open\('([^']+)'/);
              if (b) {
                _context124.next = 15;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasser('pattern changed');
            case 15:
              lnk = b[1].match(/\?(https?:\/\/.*)$/);
              if (!lnk) {
                _context124.next = 20;
                break;
              }
              _context124.next = 19;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(lnk[1]);
            case 19:
              return _context124.abrupt('return');
            case 20:
              _context124.next = 22;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(b[1]);
            case 22:
            case 'end':
              return _context124.stop();
          }
        }
      }, _callee124, this);
    }));
    function ready(_x31) {
      return _ref126.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^linkdolar\.xyz$/
  },
  ready: function () {
    var _ref127 = _asyncToGenerator( regeneratorRuntime.mark(function _callee125() {
      var s, url, args, target;
      return regeneratorRuntime.wrap(function _callee125$(_context125) {
        while (1) {
          switch (_context125.prev = _context125.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              s = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/^\s*eval\((.+)\)\s*$/);
              if (s) {
                _context125.next = 5;
                break;
              }
              _ADSBYPASSER_NAMESPACE__._.warn('site changed');
              return _context125.abrupt('return');
            case 5:
              s = eval('(' + s[1] + ')');
              s = s.match(/\$\.post\('([^']+)',(\{.+\}),function/);
              if (!s) {
                _ADSBYPASSER_NAMESPACE__._.warn('site changed');
              }
              url = s[1];
              args = eval('(' + s[2] + ')');
              _context125.next = 12;
              return _ADSBYPASSER_NAMESPACE__.$.post(url, args);
            case 12:
              target = _context125.sent;
              _context125.next = 15;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(target);
            case 15:
            case 'end':
              return _context125.stop();
          }
        }
      }, _callee125, this);
    }));
    function ready() {
      return _ref127.apply(this, arguments);
    }
    return ready;
  }()
});
(function () {
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: [/^(www\.)?linkdrop\.net$/, /^dmus\.in$/, /^ulshare\.net$/, /^adurl\.id$/, /^goolink\.me$/, /^earningurl\.com$/]
    },
    ready: function () {
      var _ref128 = _asyncToGenerator( regeneratorRuntime.mark(function _callee126() {
        var f;
        return regeneratorRuntime.wrap(function _callee126$(_context126) {
          while (1) {
            switch (_context126.prev = _context126.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                f = getForm();
                if (f) {
                  _context126.next = 4;
                  break;
                }
                return _context126.abrupt('return');
              case 4:
                sendRequest(f);
              case 5:
              case 'end':
                return _context126.stop();
            }
          }
        }, _callee126, this);
      }));
      function ready() {
        return _ref128.apply(this, arguments);
      }
      return ready;
    }()
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: [/^sflnk\.me$/, /^idsly\.com$/]
    },
    ready: function () {
      var _ref129 = _asyncToGenerator( regeneratorRuntime.mark(function _callee127() {
        var f;
        return regeneratorRuntime.wrap(function _callee127$(_context127) {
          while (1) {
            switch (_context127.prev = _context127.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                f = getForm();
                if (f) {
                  _context127.next = 6;
                  break;
                }
                f = (0, _ADSBYPASSER_NAMESPACE__.$)('#link-view');
                f.submit();
                return _context127.abrupt('return');
              case 6:
                sendRequest(f);
              case 7:
              case 'end':
                return _context127.stop();
            }
          }
        }, _callee127, this);
      }));
      function ready() {
        return _ref129.apply(this, arguments);
      }
      return ready;
    }()
  });
  function getForm() {
    var jQuery = _ADSBYPASSER_NAMESPACE__.$.window.$;
    var f = jQuery('form[action="/links/go"], form[action="/links/linkdropgo"]');
    if (f.length > 0) {
      return f;
    }
    return null;
  }
  function sendRequest(f) {
    var jQuery = _ADSBYPASSER_NAMESPACE__.$.window.$;
    jQuery.ajax({
      dataType: 'json',
      type: 'POST',
      url: f.attr('action'),
      data: f.serialize(),
      success: function success(result) {
        if (result.url) {
          _ADSBYPASSER_NAMESPACE__.$.openLink(result.url);
        } else {
          _ADSBYPASSER_NAMESPACE__._.warn(result.message);
        }
      },
      error: function error(xhr, status, _error) {
        _ADSBYPASSER_NAMESPACE__._.warn(xhr, status, _error);
      }
    });
  }
})();
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^linkpaid\.net$/,
    path: /^\/go\//
  },
  ready: function () {
    var _ref130 = _asyncToGenerator( regeneratorRuntime.mark(function _callee128() {
      var f;
      return regeneratorRuntime.wrap(function _callee128$(_context128) {
        while (1) {
          switch (_context128.prev = _context128.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('#btn-main');
              f.click();
            case 2:
            case 'end':
              return _context128.stop();
          }
        }
      }, _callee128, this);
    }));
    function ready() {
      return _ref130.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?linkplugapp\.com$/
  },
  ready: function () {
    var _ref131 = _asyncToGenerator( regeneratorRuntime.mark(function _callee129() {
      var a;
      return regeneratorRuntime.wrap(function _callee129$(_context129) {
        while (1) {
          switch (_context129.prev = _context129.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#mc_embed_signup_scroll a');
              _context129.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context129.stop();
          }
        }
      }, _callee129, this);
    }));
    function ready() {
      return _ref131.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^linksas\.us$/,
    path: /^(\/\w+)$/
  },
  ready: function () {
    var _ref132 = _asyncToGenerator( regeneratorRuntime.mark(function _callee130(m) {
      var recaptcha, url, ipinfo, payload, token, data;
      return regeneratorRuntime.wrap(function _callee130$(_context130) {
        while (1) {
          switch (_context130.prev = _context130.next) {
            case 0:
              _context130.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.tryEvery(1000, function () {
                var recaptcha = (0, _ADSBYPASSER_NAMESPACE__.$)('#g-recaptcha-response');
                if (!recaptcha) {
                  return null;
                }
                if (!recaptcha.value) {
                  return _ADSBYPASSER_NAMESPACE__._.none;
                }
                return recaptcha.value;
              });
            case 2:
              recaptcha = _context130.sent;
              url = _ADSBYPASSER_NAMESPACE__._.template('http://ipinfo.io/{0}/json')(_ADSBYPASSER_NAMESPACE__.$.generateRandomIP());
              _context130.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.get(url);
            case 6:
              ipinfo = _context130.sent;
              ipinfo = JSON.parse(ipinfo);
              payload = {
                codeAds: 1,
                country: ipinfo.country,
                ipAddress: ipinfo.ip,
                recaptcha: recaptcha
              };
              token = _ADSBYPASSER_NAMESPACE__.$.getCookie('XSRF-TOKEN');
              _context130.next = 12;
              return _ADSBYPASSER_NAMESPACE__.$.post('/go' + m.path[1], payload, {
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': token
              });
            case 12:
              data = _context130.sent;
              data = JSON.parse(data);
              _context130.next = 16;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(data.message);
            case 16:
            case 'end':
              return _context130.stop();
          }
        }
      }, _callee130, this);
    }));
    function ready(_x32) {
      return _ref132.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^linksas\.us$/,
    path: /^\/go\//
  },
  ready: function () {
    var _ref133 = _asyncToGenerator( regeneratorRuntime.mark(function _callee131() {
      var a, url, pattern, lastURL, matched;
      return regeneratorRuntime.wrap(function _callee131$(_context131) {
        while (1) {
          switch (_context131.prev = _context131.next) {
            case 0:
              a = _ADSBYPASSER_NAMESPACE__.$.$('#btnSubmit');
              if (a) {
                _context131.next = 3;
                break;
              }
              return _context131.abrupt('return');
            case 3:
              url = a.href;
              pattern = /https?:\/\//g;
              lastURL = '';
            case 6:
              if (false) {
                _context131.next = 13;
                break;
              }
              matched = pattern.exec(url);
              if (matched) {
                _context131.next = 10;
                break;
              }
              return _context131.abrupt('break', 13);
            case 10:
              lastURL = matched + url.substring(pattern.lastIndex);
              _context131.next = 6;
              break;
            case 13:
              _context131.next = 15;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(lastURL);
            case 15:
            case 'end':
              return _context131.stop();
          }
        }
      }, _callee131, this);
    }));
    function ready() {
      return _ref133.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^linkshrink\.net$/,
    path: /^\/[a-zA-Z0-9]+$/
  },
  start: function () {
    var _ref134 = _asyncToGenerator( regeneratorRuntime.mark(function _callee132() {
      return regeneratorRuntime.wrap(function _callee132$(_context132) {
        while (1) {
          switch (_context132.prev = _context132.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.window._impspcabe = 0;
            case 1:
            case 'end':
              return _context132.stop();
          }
        }
      }, _callee132, this);
    }));
    function start() {
      return _ref134.apply(this, arguments);
    }
    return start;
  }(),
  ready: function () {
    var _ref135 = _asyncToGenerator( regeneratorRuntime.mark(function _callee133() {
      var l;
      return regeneratorRuntime.wrap(function _callee133$(_context133) {
        while (1) {
          switch (_context133.prev = _context133.next) {
            case 0:
              l = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/revC\("([^"]+)"\)/);
              l = atob(l[1]);
              _context133.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('/' + l);
            case 4:
            case 'end':
              return _context133.stop();
          }
        }
      }, _callee133, this);
    }));
    function ready() {
      return _ref135.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^linkshrink\.net$/,
    path: /=(.+)$/
  },
  start: function () {
    var _ref136 = _asyncToGenerator( regeneratorRuntime.mark(function _callee134(m) {
      return regeneratorRuntime.wrap(function _callee134$(_context134) {
        while (1) {
          switch (_context134.prev = _context134.next) {
            case 0:
              _context134.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m.path[1]);
            case 2:
            case 'end':
              return _context134.stop();
          }
        }
      }, _callee134, this);
    }));
    function start(_x33) {
      return _ref136.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: 'http://lix.in/-*',
  ready: function () {
    var _ref137 = _asyncToGenerator( regeneratorRuntime.mark(function _callee135() {
      var i;
      return regeneratorRuntime.wrap(function _callee135$(_context135) {
        while (1) {
          switch (_context135.prev = _context135.next) {
            case 0:
              i = _ADSBYPASSER_NAMESPACE__.$.$('#ibdc');
              if (!i) {
                _context135.next = 3;
                break;
              }
              return _context135.abrupt('return');
            case 3:
              i = _ADSBYPASSER_NAMESPACE__.$.$('form');
              if (!i) {
                _context135.next = 7;
                break;
              }
              i.submit();
              return _context135.abrupt('return');
            case 7:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('iframe');
              _context135.next = 10;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(i.src);
            case 10:
            case 'end':
              return _context135.stop();
          }
        }
      }, _callee135, this);
    }));
    function ready() {
      return _ref137.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^lnk\.in$/
  },
  ready: function () {
    var _ref138 = _asyncToGenerator( regeneratorRuntime.mark(function _callee136() {
      var a;
      return regeneratorRuntime.wrap(function _callee136$(_context136) {
        while (1) {
          switch (_context136.prev = _context136.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#divRedirectText a');
              _context136.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.innerHTML);
            case 3:
            case 'end':
              return _context136.stop();
          }
        }
      }, _callee136, this);
    }));
    function ready() {
      return _ref138.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(rd?)lnk\.co|reducelnk\.com$/,
    path: /^\/[^.]+$/
  },
  ready: function () {
    var _ref139 = _asyncToGenerator( regeneratorRuntime.mark(function _callee137() {
      var f, o;
      return regeneratorRuntime.wrap(function _callee137$(_context137) {
        while (1) {
          switch (_context137.prev = _context137.next) {
            case 0:
              f = _ADSBYPASSER_NAMESPACE__.$.$('iframe#dest');
              if (!f) {
                _context137.next = 5;
                break;
              }
              _context137.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f.src);
            case 4:
              return _context137.abrupt('return');
            case 5:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              o = _ADSBYPASSER_NAMESPACE__.$.$('#urlholder');
              if (!o) {
                _context137.next = 11;
                break;
              }
              _context137.next = 10;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(o.value);
            case 10:
              return _context137.abrupt('return');
            case 11:
              o = _ADSBYPASSER_NAMESPACE__.$.$('#skipBtn');
              if (!o) {
                _context137.next = 17;
                break;
              }
              o = o.querySelector('a');
              _context137.next = 16;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(o.href);
            case 16:
              return _context137.abrupt('return');
            case 17:
              o = document.title.replace(/(LNK.co|Linkbee)\s*:\s*/, '');
              _context137.next = 20;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(o);
            case 20:
            case 'end':
              return _context137.stop();
          }
        }
      }, _callee137, this);
    }));
    function ready() {
      return _ref139.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^lnx\.lu$/, /^url\.fm$/, /^z\.gs$/]
  },
  ready: function () {
    var _ref140 = _asyncToGenerator( regeneratorRuntime.mark(function _callee138() {
      var a;
      return regeneratorRuntime.wrap(function _callee138$(_context138) {
        while (1) {
          switch (_context138.prev = _context138.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#clickbtn a');
              _context138.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context138.stop();
          }
        }
      }, _callee138, this);
    }));
    function ready() {
      return _ref140.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.lolinez\.com$/,
    query: /\?(.+)/
  },
  start: function () {
    var _ref141 = _asyncToGenerator( regeneratorRuntime.mark(function _callee139(m) {
      return regeneratorRuntime.wrap(function _callee139$(_context139) {
        while (1) {
          switch (_context139.prev = _context139.next) {
            case 0:
              _context139.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m.query[1]);
            case 2:
            case 'end':
              return _context139.stop();
          }
        }
      }, _callee139, this);
    }));
    function start(_x34) {
      return _ref141.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?loook\.ga$/,
    path: /^\/\d+$/
  },
  ready: function () {
    var _ref142 = _asyncToGenerator( regeneratorRuntime.mark(function _callee140() {
      var a;
      return regeneratorRuntime.wrap(function _callee140$(_context140) {
        while (1) {
          switch (_context140.prev = _context140.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#download_link > a.btn');
              _context140.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context140.stop();
          }
        }
      }, _callee140, this);
    }));
    function ready() {
      return _ref142.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^looy\.in$/,
    path: /^\/Pro\/(.+)$/
  },
  ready: function () {
    var _ref143 = _asyncToGenerator( regeneratorRuntime.mark(function _callee141(m) {
      var url;
      return regeneratorRuntime.wrap(function _callee141$(_context141) {
        while (1) {
          switch (_context141.prev = _context141.next) {
            case 0:
              _context141.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.post('http://looy.in/Go/Index/ProSkipAd', {
                code: m.path[1],
                server: ''
              });
            case 2:
              url = _context141.sent;
              _context141.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 5:
            case 'end':
              return _context141.stop();
          }
        }
      }, _callee141, this);
    }));
    function ready(_x35) {
      return _ref143.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^looy\.in$/,
    path: /^\/(.+)$/
  },
  start: function () {
    var _ref144 = _asyncToGenerator( regeneratorRuntime.mark(function _callee142(m) {
      return regeneratorRuntime.wrap(function _callee142$(_context142) {
        while (1) {
          switch (_context142.prev = _context142.next) {
            case 0:
              _context142.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('/Pro/' + m.path[1]);
            case 2:
            case 'end':
              return _context142.stop();
          }
        }
      }, _callee142, this);
    }));
    function start(_x36) {
      return _ref144.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: ['http://madlink.sk/', 'http://madlink.sk/*.html']
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: 'http://madlink.sk/*',
  start: function () {
    var _ref145 = _asyncToGenerator( regeneratorRuntime.mark(function _callee143(m) {
      var text;
      return regeneratorRuntime.wrap(function _callee143$(_context143) {
        while (1) {
          switch (_context143.prev = _context143.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              _context143.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.post('/ajax/check_redirect.php', {
                link: m[1]
              });
            case 3:
              text = _context143.sent;
              _context143.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(text);
            case 6:
            case 'end':
              return _context143.stop();
          }
        }
      }, _callee143, this);
    }));
    function start(_x37) {
      return _ref145.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^mant[ae][pb]\.in$/, /^st\.oploverz\.net$/, /^minidroid\.net$/, /^ww3\.awaremmxv\.com$/, /^linkpoi\.in$/]
  },
  ready: function () {
    var _ref146 = _asyncToGenerator( regeneratorRuntime.mark(function _callee144() {
      var a;
      return regeneratorRuntime.wrap(function _callee144$(_context144) {
        while (1) {
          switch (_context144.prev = _context144.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a.redirect, a[target=_blank][rel=nofollow]');
              _context144.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context144.stop();
          }
        }
      }, _callee144, this);
    }));
    function ready() {
      return _ref146.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^susutin\.com$/
  },
  ready: function () {
    var _ref147 = _asyncToGenerator( regeneratorRuntime.mark(function _callee145() {
      var s;
      return regeneratorRuntime.wrap(function _callee145$(_context145) {
        while (1) {
          switch (_context145.prev = _context145.next) {
            case 0:
              s = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/="([^"]+)",/);
              _context145.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(s[1]);
            case 3:
            case 'end':
              return _context145.stop();
          }
        }
      }, _callee145, this);
    }));
    function ready() {
      return _ref147.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.mije\.net$/,
    path: /^\/\w+\/(.+)$/
  },
  start: function () {
    var _ref148 = _asyncToGenerator( regeneratorRuntime.mark(function _callee146(m) {
      var url;
      return regeneratorRuntime.wrap(function _callee146$(_context146) {
        while (1) {
          switch (_context146.prev = _context146.next) {
            case 0:
              url = atob(m.path[1]);
              _context146.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 3:
            case 'end':
              return _context146.stop();
          }
        }
      }, _callee146, this);
    }));
    function start(_x38) {
      return _ref148.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^mirrorfilehost\.com$/
  },
  ready: function () {
    var _ref149 = _asyncToGenerator( regeneratorRuntime.mark(function _callee147() {
      var frame, form, input;
      return regeneratorRuntime.wrap(function _callee147$(_context147) {
        while (1) {
          switch (_context147.prev = _context147.next) {
            case 0:
              _context147.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(3 * 1000);
            case 2:
              frame = frames[0];
              form = frame.document.createElement('form');
              form.target = '_parent';
              form.action = location.toString();
              input = frame.document.createElement('input');
              input.value = 'Download';
              input.type = 'submit';
              form.appendChild(input);
              frame.document.body.appendChild(form);
              input.click();
            case 12:
            case 'end':
              return _context147.stop();
          }
        }
      }, _callee147, this);
    }));
    function ready() {
      return _ref149.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^moe\.god\.jp$/, /^moesubs\.akurapopo\.pro$/, /^dl\.nsfk\.in$/]
  },
  ready: function () {
    var _ref150 = _asyncToGenerator( regeneratorRuntime.mark(function _callee148() {
      var a;
      return regeneratorRuntime.wrap(function _callee148$(_context148) {
        while (1) {
          switch (_context148.prev = _context148.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('div div center a');
              _context148.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context148.stop();
          }
        }
      }, _callee148, this);
    }));
    function ready() {
      return _ref150.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^moesubs\.com$/,
    path: /^\/url\//
  },
  ready: function () {
    var _ref151 = _asyncToGenerator( regeneratorRuntime.mark(function _callee149() {
      var a, i;
      return regeneratorRuntime.wrap(function _callee149$(_context149) {
        while (1) {
          switch (_context149.prev = _context149.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('body > div:nth-child(4) > i:nth-child(1)');
              a = a.textContent;
              i = a.lastIndexOf('http');
              a = a.substr(i);
              _context149.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a);
            case 6:
            case 'end':
              return _context149.stop();
          }
        }
      }, _callee149, this);
    }));
    function ready() {
      return _ref151.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^mt0\.org$/,
    path: /^\/[^/]+\/$/
  },
  ready: function () {
    var _ref152 = _asyncToGenerator( regeneratorRuntime.mark(function _callee150() {
      var f, i;
      return regeneratorRuntime.wrap(function _callee150$(_context150) {
        while (1) {
          switch (_context150.prev = _context150.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('frame[name=bottom]');
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('frame[name=top]');
              i = setInterval(function () {
                var a = _ADSBYPASSER_NAMESPACE__.$.$('div a', f.contentDocument);
                if (!a) {
                  return;
                }
                clearInterval(i);
                _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
              }, 1000);
            case 3:
            case 'end':
              return _context150.stop();
          }
        }
      }, _callee150, this);
    }));
    function ready() {
      return _ref152.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: 'http://my-link.pro/*',
  ready: function () {
    var _ref153 = _asyncToGenerator( regeneratorRuntime.mark(function _callee151() {
      var i;
      return regeneratorRuntime.wrap(function _callee151$(_context151) {
        while (1) {
          switch (_context151.prev = _context151.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('iframe[scrolling=auto]');
              if (!i) {
                _context151.next = 4;
                break;
              }
              _context151.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(i.src);
            case 4:
            case 'end':
              return _context151.stop();
          }
        }
      }, _callee151, this);
    }));
    function ready() {
      return _ref153.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^nmac\.to$/,
    path: /^\/download\/(.+)/
  },
  start: function () {
    var _ref154 = _asyncToGenerator( regeneratorRuntime.mark(function _callee152(m) {
      var url;
      return regeneratorRuntime.wrap(function _callee152$(_context152) {
        while (1) {
          switch (_context152.prev = _context152.next) {
            case 0:
              url = atob(m.path[1]);
              _context152.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 3:
            case 'end':
              return _context152.stop();
          }
        }
      }, _callee152, this);
    }));
    function start(_x39) {
      return _ref154.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^nsfw\.in$/
  },
  ready: function () {
    var _ref155 = _asyncToGenerator( regeneratorRuntime.mark(function _callee153() {
      var a;
      return regeneratorRuntime.wrap(function _callee153$(_context153) {
        while (1) {
          switch (_context153.prev = _context153.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#long_url a');
              _context153.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context153.stop();
          }
        }
      }, _callee153, this);
    }));
    function ready() {
      return _ref155.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^nutshellurl\.com$/
  },
  ready: function () {
    var _ref156 = _asyncToGenerator( regeneratorRuntime.mark(function _callee154() {
      var iframe;
      return regeneratorRuntime.wrap(function _callee154$(_context154) {
        while (1) {
          switch (_context154.prev = _context154.next) {
            case 0:
              iframe = (0, _ADSBYPASSER_NAMESPACE__.$)('iframe');
              _context154.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(iframe.src);
            case 3:
            case 'end':
              return _context154.stop();
          }
        }
      }, _callee154, this);
    }));
    function ready() {
      return _ref156.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?ohleech\.com$/,
    path: /^\/dl\/$/
  },
  ready: function () {
    var _ref157 = _asyncToGenerator( regeneratorRuntime.mark(function _callee155() {
      return regeneratorRuntime.wrap(function _callee155$(_context155) {
        while (1) {
          switch (_context155.prev = _context155.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.window.startdl();
            case 1:
            case 'end':
              return _context155.stop();
          }
        }
      }, _callee155, this);
    }));
    function ready() {
      return _ref157.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.oni\.vn$/
  },
  ready: function () {
    var _ref158 = _asyncToGenerator( regeneratorRuntime.mark(function _callee156() {
      var data, url;
      return regeneratorRuntime.wrap(function _callee156$(_context156) {
        while (1) {
          switch (_context156.prev = _context156.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              data = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/data:"([^"]+)"/);
              if (data) {
                _context156.next = 4;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('pattern changed');
            case 4:
              data = data[1];
              _context156.next = 7;
              return _ADSBYPASSER_NAMESPACE__.$.get('/click.html', data);
            case 7:
              url = _context156.sent;
              _context156.next = 10;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 10:
            case 'end':
              return _context156.stop();
          }
        }
      }, _callee156, this);
    }));
    function ready() {
      return _ref158.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?ouo\.(io|press)$/,
    path: /^\/go\/\w+$/
  },
  ready: function () {
    var _ref159 = _asyncToGenerator( regeneratorRuntime.mark(function _callee157() {
      return regeneratorRuntime.wrap(function _callee157$(_context157) {
        while (1) {
          switch (_context157.prev = _context157.next) {
            case 0:
              (0, _ADSBYPASSER_NAMESPACE__.$)('form').submit();
            case 1:
            case 'end':
              return _context157.stop();
          }
        }
      }, _callee157, this);
    }));
    function ready() {
      return _ref159.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^oxyl\.me$/
  },
  ready: function () {
    var _ref160 = _asyncToGenerator( regeneratorRuntime.mark(function _callee158() {
      var l;
      return regeneratorRuntime.wrap(function _callee158$(_context158) {
        while (1) {
          switch (_context158.prev = _context158.next) {
            case 0:
              l = _ADSBYPASSER_NAMESPACE__.$.$$('.links-container.result-form > a.result-a');
              if (!(l.length > 1)) {
                _context158.next = 3;
                break;
              }
              return _context158.abrupt('return');
            case 3:
              _context158.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l[0].href);
            case 5:
            case 'end':
              return _context158.stop();
          }
        }
      }, _callee158, this);
    }));
    function ready() {
      return _ref160.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^p\.pw$/
  },
  ready: function () {
    var _ref161 = _asyncToGenerator( regeneratorRuntime.mark(function _callee159() {
      var m;
      return regeneratorRuntime.wrap(function _callee159$(_context159) {
        while (1) {
          switch (_context159.prev = _context159.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/window\.location = "(.*)";/);
              m = m[1];
              _context159.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m);
            case 5:
            case 'end':
              return _context159.stop();
          }
        }
      }, _callee159, this);
    }));
    function ready() {
      return _ref161.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^pdi2\.net$/
  },
  ready: function () {
    var _ref162 = _asyncToGenerator( regeneratorRuntime.mark(function _callee160() {
      var s;
      return regeneratorRuntime.wrap(function _callee160$(_context160) {
        while (1) {
          switch (_context160.prev = _context160.next) {
            case 0:
              s = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/top\.location = '([^']+)'/);
              s = s[1];
              _context160.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(s);
            case 4:
            case 'end':
              return _context160.stop();
          }
        }
      }, _callee160, this);
    }));
    function ready() {
      return _ref162.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?\w+\.rapeit\.net$/,
    path: /^\/(go|prepair|request|collect|analyze)\/[a-f0-9]+$/
  },
  ready: function () {
    var _ref163 = _asyncToGenerator( regeneratorRuntime.mark(function _callee161() {
      var a;
      return regeneratorRuntime.wrap(function _callee161$(_context161) {
        while (1) {
          switch (_context161.prev = _context161.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a#download_link');
              _context161.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context161.stop();
          }
        }
      }, _callee161, this);
    }));
    function ready() {
      return _ref163.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: 'http://reffbux.com/refflinx/view/*',
  ready: function () {
    var _ref164 = _asyncToGenerator( regeneratorRuntime.mark(function _callee162() {
      var m, id, share, location, text;
      return regeneratorRuntime.wrap(function _callee162$(_context162) {
        while (1) {
          switch (_context162.prev = _context162.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/skip_this_ad_(\d+)_(\d+)/);
              id = m[1];
              share = m[2];
              location = window.location.toString();
              _context162.next = 7;
              return _ADSBYPASSER_NAMESPACE__.$.post('http://reffbux.com/refflinx/register', {
                id: id,
                share: share,
                fp: 0,
                location: location,
                referer: ''
              });
            case 7:
              text = _context162.sent;
              m = text.match(/'([^']+)'/);
              if (m) {
                _context162.next = 11;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('pattern changed');
            case 11:
              _context162.next = 13;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m[1]);
            case 13:
            case 'end':
              return _context162.stop();
          }
        }
      }, _callee162, this);
    }));
    function ready() {
      return _ref164.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: 'http://richlink.com/app/webscr?cmd=_click&key=*',
  ready: function () {
    var _ref165 = _asyncToGenerator( regeneratorRuntime.mark(function _callee163() {
      var f;
      return regeneratorRuntime.wrap(function _callee163$(_context163) {
        while (1) {
          switch (_context163.prev = _context163.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('frameset');
              f = f.onload.toString();
              f = f.match(/url=([^&]+)/);
              if (f) {
                f = decodeURIComponent(f[1]);
              } else {
                f = (0, _ADSBYPASSER_NAMESPACE__.$)('frame[name=site]');
                f = f.src;
              }
              _context163.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f);
            case 6:
            case 'end':
              return _context163.stop();
          }
        }
      }, _callee163, this);
    }));
    function ready() {
      return _ref165.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: 'http://rijaliti.info/*.php',
  ready: function () {
    var _ref166 = _asyncToGenerator( regeneratorRuntime.mark(function _callee164() {
      var a;
      return regeneratorRuntime.wrap(function _callee164$(_context164) {
        while (1) {
          switch (_context164.prev = _context164.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#main td[align="center"] a');
              _context164.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context164.stop();
          }
        }
      }, _callee164, this);
    }));
    function ready() {
      return _ref166.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^riurl\.com$/,
    path: /^\/.+/
  },
  ready: function () {
    var _ref167 = _asyncToGenerator( regeneratorRuntime.mark(function _callee165() {
      var s;
      return regeneratorRuntime.wrap(function _callee165$(_context165) {
        while (1) {
          switch (_context165.prev = _context165.next) {
            case 0:
              s = _ADSBYPASSER_NAMESPACE__.$.$('body script');
              if (!s) {
                _context165.next = 5;
                break;
              }
              s = s.innerHTML.indexOf('window.location.replace');
              if (!(s >= 0)) {
                _context165.next = 5;
                break;
              }
              return _context165.abrupt('return');
            case 5:
              _context165.next = 7;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('', {
                path: {
                  hidden: '1',
                  image: ' '
                }
              });
            case 7:
            case 'end':
              return _context165.stop();
          }
        }
      }, _callee165, this);
    }));
    function ready() {
      return _ref167.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^preview\.rlu\.ru$/
  },
  ready: function () {
    var _ref168 = _asyncToGenerator( regeneratorRuntime.mark(function _callee166() {
      var a;
      return regeneratorRuntime.wrap(function _callee166$(_context166) {
        while (1) {
          switch (_context166.prev = _context166.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#content > .long_url > a');
              _context166.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context166.stop();
          }
        }
      }, _callee166, this);
    }));
    function ready() {
      return _ref168.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^robo\.us$/
  },
  ready: function () {
    var _ref169 = _asyncToGenerator( regeneratorRuntime.mark(function _callee167() {
      var url;
      return regeneratorRuntime.wrap(function _callee167$(_context167) {
        while (1) {
          switch (_context167.prev = _context167.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              url = atob(_ADSBYPASSER_NAMESPACE__.$.window.fl);
              _context167.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 4:
            case 'end':
              return _context167.stop();
          }
        }
      }, _callee167, this);
    }));
    function ready() {
      return _ref169.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.ron\.vn$/
  },
  ready: function () {
    var _ref170 = _asyncToGenerator( regeneratorRuntime.mark(function _callee168() {
      var script, data, url;
      return regeneratorRuntime.wrap(function _callee168$(_context168) {
        while (1) {
          switch (_context168.prev = _context168.next) {
            case 0:
              script = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts('linknexttop');
              data = script.match(/data:"([^"]+)"/);
              url = _ADSBYPASSER_NAMESPACE__.$.window.domain + 'click.html?' + data[1];
              _context168.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.get(url, {}, {
                'Content-Type': 'application/json; charset=utf-8'
              });
            case 5:
              url = _context168.sent;
              _context168.next = 8;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 8:
            case 'end':
              return _context168.stop();
          }
        }
      }, _callee168, this);
    }));
    function ready() {
      return _ref170.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?sa\.ae$/,
    path: /^\/\w+\/$/
  },
  ready: function () {
    var _ref171 = _asyncToGenerator( regeneratorRuntime.mark(function _callee169() {
      var m;
      return regeneratorRuntime.wrap(function _callee169$(_context169) {
        while (1) {
          switch (_context169.prev = _context169.next) {
            case 0:
              m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/const real_link = '([^']+)';/);
              _context169.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m[1]);
            case 3:
            case 'end':
              return _context169.stop();
          }
        }
      }, _callee169, this);
    }));
    function ready() {
      return _ref171.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?safeurl\.eu$/,
    path: /\/\w+/
  },
  ready: function () {
    var _ref172 = _asyncToGenerator( regeneratorRuntime.mark(function _callee170() {
      var directUrl;
      return regeneratorRuntime.wrap(function _callee170$(_context170) {
        while (1) {
          switch (_context170.prev = _context170.next) {
            case 0:
              directUrl = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/window\.open\("([^"]+)"\);/);
              if (directUrl) {
                _context170.next = 3;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('script content changed');
            case 3:
              directUrl = directUrl[1];
              _context170.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(directUrl);
            case 6:
            case 'end':
              return _context170.stop();
          }
        }
      }, _callee170, this);
    }));
    function ready() {
      return _ref172.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^segmentnext\.com$/, /^(www\.)?videogamesblogger.com$/],
    path: /^\/interstitial\.html$/,
    query: /return_url=([^&]+)/
  },
  start: function () {
    var _ref173 = _asyncToGenerator( regeneratorRuntime.mark(function _callee171(m) {
      return regeneratorRuntime.wrap(function _callee171$(_context171) {
        while (1) {
          switch (_context171.prev = _context171.next) {
            case 0:
              _context171.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(decodeURIComponent(m.query[1]));
            case 2:
            case 'end':
              return _context171.stop();
          }
        }
      }, _callee171, this);
    }));
    function start(_x40) {
      return _ref173.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?(apploadz\.ru|seomafia\.net)$/
  },
  ready: function () {
    var _ref174 = _asyncToGenerator( regeneratorRuntime.mark(function _callee172() {
      var a;
      return regeneratorRuntime.wrap(function _callee172$(_context172) {
        while (1) {
          switch (_context172.prev = _context172.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('table a');
              _context172.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 4:
            case 'end':
              return _context172.stop();
          }
        }
      }, _callee172, this);
    }));
    function ready() {
      return _ref174.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: /http:\/\/setlinks\.us\/(p|t|d).*/,
  ready: function () {
    var _ref175 = _asyncToGenerator( regeneratorRuntime.mark(function _callee173() {
      var k, aLinks;
      return regeneratorRuntime.wrap(function _callee173$(_context173) {
        while (1) {
          switch (_context173.prev = _context173.next) {
            case 0:
              k = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/window\.location='([^']+)'/);
              if (!k) {
                _context173.next = 5;
                break;
              }
              _context173.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(k[1]);
            case 4:
              return _context173.abrupt('return');
            case 5:
              aLinks = _ADSBYPASSER_NAMESPACE__.$.$$('div.links-container.result-form:not(.p-links-container) > span.dlinks > a');
              if (!(aLinks.length === 1)) {
                _context173.next = 10;
                break;
              }
              _context173.next = 9;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(aLinks.at(0).href);
            case 9:
              return _context173.abrupt('return');
            case 10:
            case 'end':
              return _context173.stop();
          }
        }
      }, _callee173, this);
    }));
    function ready() {
      return _ref175.apply(this, arguments);
    }
    return ready;
  }()
}
);
(function () {
  var hostRules = [/^sh\.st$/, /^(dh10thbvu|u2ks|jnw0|qaafa|xiw34|cllkme|clkmein|corneey|ceesty)\.com$/, /^[dfg]estyy\.com$/, /^digg\.to$/, /^([vw]iid|clkme)\.me$/, /^short\.est$/];
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: hostRules,
      path: /^\/freeze\/.+/
    },
    ready: function () {
      var _ref176 = _asyncToGenerator( regeneratorRuntime.mark(function _callee174() {
        var promise, url;
        return regeneratorRuntime.wrap(function _callee174$(_context174) {
          while (1) {
            switch (_context174.prev = _context174.next) {
              case 0:
                promise = new Promise(function (resolve) {
                  var o = new MutationObserver(function (mutations) {
                    mutations.forEach(function (mutation) {
                      if (mutation.target.getAttribute('class').match(/active/)) {
                        o.disconnect();
                        resolve(mutation.target.href);
                      }
                    });
                  });
                  o.observe((0, _ADSBYPASSER_NAMESPACE__.$)('#skip_button'), {
                    attributes: true,
                    attributeFilter: ['class']
                  });
                });
                _context174.next = 3;
                return promise;
              case 3:
                url = _context174.sent;
                _context174.next = 6;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
              case 6:
              case 'end':
                return _context174.stop();
            }
          }
        }, _callee174, this);
      }));
      function ready() {
        return _ref176.apply(this, arguments);
      }
      return ready;
    }()
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: hostRules,
      path: /https?:\/\//
    },
    start: function () {
      var _ref177 = _asyncToGenerator( regeneratorRuntime.mark(function _callee175() {
        var url;
        return regeneratorRuntime.wrap(function _callee175$(_context175) {
          while (1) {
            switch (_context175.prev = _context175.next) {
              case 0:
                url = window.location.pathname + window.location.search + window.location.hash;
                url = url.match(/(https?:\/\/.*)$/);
                url = url[1];
                _context175.next = 5;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
              case 5:
              case 'end':
                return _context175.stop();
            }
          }
        }, _callee175, this);
      }));
      function start() {
        return _ref177.apply(this, arguments);
      }
      return start;
    }()
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: hostRules,
      path: /^\/[\d\w]+/
    },
    start: function () {
      var _ref178 = _asyncToGenerator( regeneratorRuntime.mark(function _callee176() {
        return regeneratorRuntime.wrap(function _callee176$(_context176) {
          while (1) {
            switch (_context176.prev = _context176.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.window._impspcabe = 0;
              case 1:
              case 'end':
                return _context176.stop();
            }
          }
        }, _callee176, this);
      }));
      function start() {
        return _ref178.apply(this, arguments);
      }
      return start;
    }(),
    ready: function () {
      var _ref179 = _asyncToGenerator( regeneratorRuntime.mark(function _callee177() {
        var m, o;
        return regeneratorRuntime.wrap(function _callee177$(_context177) {
          while (1) {
            switch (_context177.prev = _context177.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                _ADSBYPASSER_NAMESPACE__.$.removeAllTimer();
                m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/sessionId: "([\d\w]+)",/);
                if (!m) {
                  _context177.next = 6;
                  break;
                }
                afterGotSessionId(m[1]);
                return _context177.abrupt('return');
              case 6:
                o = new MutationObserver(function (mutations) {
                  mutations.forEach(function () {
                    var m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/sessionId: "([\d\w]+)",/);
                    if (m) {
                      o.disconnect();
                      afterGotSessionId(m[1]);
                    }
                  });
                });
                o.observe(document.body, {
                  childList: true
                });
              case 8:
              case 'end':
                return _context177.stop();
            }
          }
        }, _callee177, this);
      }));
      function ready() {
        return _ref179.apply(this, arguments);
      }
      return ready;
    }()
  });
  function afterGotSessionId(sessionId) {
    var X_NewRelic_ID = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/xpid:"([^"]+)"/);
    var data = {
      adSessionId: sessionId
    };
    var header = {
      Accept: 'application/json, text/javascript'
    };
    if (X_NewRelic_ID) {
      header['X-NewRelic-ID'] = X_NewRelic_ID;
    }
    var i = setInterval(function () {
      _ADSBYPASSER_NAMESPACE__.$.get('/shortest-url/end-adsession', data, header).then(function (text) {
        var r = JSON.parse(text);
        if (r.status == 'ok' && r.destinationUrl) {
          clearInterval(i);
          _ADSBYPASSER_NAMESPACE__.$.removeAllTimer();
          var url = decodeURIComponent(r.destinationUrl);
          return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
        }
      });
    }, 1000);
  }
})();
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^(www\.)?shink\.in$/, /^fas\.li$/, /^(www\.)?croco\.(me|site)$/, /^cpmlink\.net$/],
    path: /^\/\w+$/
  },
  ready: function () {
    var _ref180 = _asyncToGenerator( regeneratorRuntime.mark(function _callee178() {
      var f, o;
      return regeneratorRuntime.wrap(function _callee178$(_context178) {
        while (1) {
          switch (_context178.prev = _context178.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('#skip');
              if (!_ADSBYPASSER_NAMESPACE__.$.$('#captcha')) {
                f.submit();
              }
              o = new MutationObserver(function (mutations) {
                _ADSBYPASSER_NAMESPACE__.$.remove('.BJPPopAdsOverlay');
                mutations.forEach(function (mutation) {
                  mutation.addedNodes.forEach(function (node) {
                    if (node.localName === 'div') {
                      if (node.style.zIndex === '2147483647') {
                        node.parentNode.removeChild(node);
                        return;
                      }
                    }
                  });
                });
              });
              o.observe(document.body, {
                childList: true,
                subtree: true
              });
            case 4:
            case 'end':
              return _context178.stop();
          }
        }
      }, _callee178, this);
    }));
    function ready() {
      return _ref180.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: [{
    host: [/^cpmlink\.net$/],
    path: /^\/go\/\w+$/
  }, {
    host: /^(www\.)?croco\.(me|site)$/,
    path: /^\/ok\/\w+$/
  }],
  ready: function () {
    var _ref181 = _asyncToGenerator( regeneratorRuntime.mark(function _callee179() {
      var a, i;
      return regeneratorRuntime.wrap(function _callee179$(_context179) {
        while (1) {
          switch (_context179.prev = _context179.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#btn-main');
              i = a.href.lastIndexOf('http');
              a = a.href.substr(i);
              _context179.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a);
            case 5:
            case 'end':
              return _context179.stop();
          }
        }
      }, _callee179, this);
    }));
    function ready() {
      return _ref181.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^fas\.li$/, /^(www\.)?shink\.in$/],
    path: /^\/go\/\w+$/
  },
  ready: function () {
    var _ref182 = _asyncToGenerator( regeneratorRuntime.mark(function _callee180() {
      var f;
      return regeneratorRuntime.wrap(function _callee180$(_context180) {
        while (1) {
          switch (_context180.prev = _context180.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('#skip');
              f.submit();
            case 2:
            case 'end':
              return _context180.stop();
          }
        }
      }, _callee180, this);
    }));
    function ready() {
      return _ref182.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^short\.am$/
  },
  ready: function () {
    var _ref183 = _asyncToGenerator( regeneratorRuntime.mark(function _callee181() {
      return regeneratorRuntime.wrap(function _callee181$(_context181) {
        while (1) {
          switch (_context181.prev = _context181.next) {
            case 0:
              _context181.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(5000);
            case 2:
              _context181.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('', {
                post: {
                  _image: 'Continue'
                }
              });
            case 4:
            case 'end':
              return _context181.stop();
          }
        }
      }, _callee181, this);
    }));
    function ready() {
      return _ref183.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^(www\.)?shortenurl\.tk$/, /^(www\.)?pengaman\.link$/, /^urlgo\.gs$/, /^gunting\.web\.id$/],
    path: /^\/\w+$/
  },
  ready: function () {
    var _ref184 = _asyncToGenerator( regeneratorRuntime.mark(function _callee182() {
      var l;
      return regeneratorRuntime.wrap(function _callee182$(_context182) {
        while (1) {
          switch (_context182.prev = _context182.next) {
            case 0:
              l = (0, _ADSBYPASSER_NAMESPACE__.$)('a.btn-block.redirect');
              _context182.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l.href);
            case 3:
            case 'end':
              return _context182.stop();
          }
        }
      }, _callee182, this);
    }));
    function ready() {
      return _ref184.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?shorti\.ga$/,
    path: [/^\/\w+$/, /^\/url_redirector\.html$/]
  },
  ready: function () {
    var _ref185 = _asyncToGenerator( regeneratorRuntime.mark(function _callee183() {
      var f, _$find5, _$find6, v;
      return regeneratorRuntime.wrap(function _callee183$(_context183) {
        while (1) {
          switch (_context183.prev = _context183.next) {
            case 0:
              f = _ADSBYPASSER_NAMESPACE__.$.$$('frame');
              _$find5 = _ADSBYPASSER_NAMESPACE__._.find(f, function (value) {
                if (value.getAttribute('class')) {
                  return _ADSBYPASSER_NAMESPACE__._.none;
                }
                return 'Target frame found';
              }), _$find6 = _slicedToArray(_$find5, 2), v = _$find6[1];
              _context183.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(v.src);
            case 4:
            case 'end':
              return _context183.stop();
          }
        }
      }, _callee183, this);
    }));
    function ready() {
      return _ref185.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.shortskip\.com$/,
    path: /^\/short\.php$/,
    query: /i=([^&]+)/
  },
  start: function () {
    var _ref186 = _asyncToGenerator( regeneratorRuntime.mark(function _callee184(m) {
      var url;
      return regeneratorRuntime.wrap(function _callee184$(_context184) {
        while (1) {
          switch (_context184.prev = _context184.next) {
            case 0:
              url = decodeURIComponent(m.query[1]);
              _context184.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 3:
            case 'end':
              return _context184.stop();
          }
        }
      }, _callee184, this);
    }));
    function start(_x41) {
      return _ref186.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^get\.shrink-service\.it$/,
    path: /^\/(.+)/
  },
  start: function () {
    var _ref187 = _asyncToGenerator( regeneratorRuntime.mark(function _callee185(m) {
      var url;
      return regeneratorRuntime.wrap(function _callee185$(_context185) {
        while (1) {
          switch (_context185.prev = _context185.next) {
            case 0:
              url = _ADSBYPASSER_NAMESPACE__._.template('//www.shrink-service.it/shrinked/{0}');
              _context185.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url(m.path[1]));
            case 3:
            case 'end':
              return _context185.stop();
          }
        }
      }, _callee185, this);
    }));
    function start(_x42) {
      return _ref187.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.shrink-service\.it$/,
    path: /^\/shrinked\//
  },
  ready: function () {
    var _ref188 = _asyncToGenerator( regeneratorRuntime.mark(function _callee186() {
      var i;
      return regeneratorRuntime.wrap(function _callee186$(_context186) {
        while (1) {
          switch (_context186.prev = _context186.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('input[id][name]');
              _context186.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(i.value);
            case 3:
            case 'end':
              return _context186.stop();
          }
        }
      }, _callee186, this);
    }));
    function ready() {
      return _ref188.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.shrink-service\.it$/,
    path: /^\/[se]\//
  },
  ready: function () {
    var _ref189 = _asyncToGenerator( regeneratorRuntime.mark(function _callee187() {
      var i;
      return regeneratorRuntime.wrap(function _callee187$(_context187) {
        while (1) {
          switch (_context187.prev = _context187.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('body > input[id][name]');
              _ADSBYPASSER_NAMESPACE__.$.openLink(i.value);
            case 3:
            case 'end':
              return _context187.stop();
          }
        }
      }, _callee187, this);
    }));
    function ready() {
      return _ref189.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^sht\.io$/,
    path: /^\/\d+\/(.+)$/
  },
  start: function () {
    var _ref190 = _asyncToGenerator( regeneratorRuntime.mark(function _callee188(m) {
      var url;
      return regeneratorRuntime.wrap(function _callee188$(_context188) {
        while (1) {
          switch (_context188.prev = _context188.next) {
            case 0:
              url = atob(m.path[1]);
              url = url.match(/\{sht-io\}(.+)\{sht-io\}.*\{sht-io\}/);
              _context188.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url[1]);
            case 4:
            case 'end':
              return _context188.stop();
          }
        }
      }, _callee188, this);
    }));
    function start(_x43) {
      return _ref190.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?similarsites\.com$/,
    path: /^\/goto\/([^?]+)/
  },
  start: function () {
    var _ref191 = _asyncToGenerator( regeneratorRuntime.mark(function _callee189(m) {
      var l;
      return regeneratorRuntime.wrap(function _callee189$(_context189) {
        while (1) {
          switch (_context189.prev = _context189.next) {
            case 0:
              l = m.path[1];
              if (!/^https?:\/\//.test(l)) {
                l = 'http://' + l;
              }
              _context189.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l);
            case 4:
            case 'end':
              return _context189.stop();
          }
        }
      }, _callee189, this);
    }));
    function start(_x44) {
      return _ref191.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^smll\.io$/
  },
  ready: function () {
    var _ref192 = _asyncToGenerator( regeneratorRuntime.mark(function _callee190() {
      var m;
      return regeneratorRuntime.wrap(function _callee190$(_context190) {
        while (1) {
          switch (_context190.prev = _context190.next) {
            case 0:
              m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/window\.location="([^"]*)";/);
              _context190.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m[1]);
            case 3:
            case 'end':
              return _context190.stop();
          }
        }
      }, _callee190, this);
    }));
    function ready() {
      return _ref192.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.spaste\.com$/,
    path: /^\/go\/\w+$/
  },
  ready: function () {
    var _ref193 = _asyncToGenerator( regeneratorRuntime.mark(function _callee191() {
      var id, url;
      return regeneratorRuntime.wrap(function _callee191$(_context191) {
        while (1) {
          switch (_context191.prev = _context191.next) {
            case 0:
              id = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/\{id:'(\d+)'\}/);
              _context191.next = 3;
              return _ADSBYPASSER_NAMESPACE__._.wait(3000);
            case 3:
              _context191.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.post('/site/getRedirectLink', {
                id: id[1]
              });
            case 5:
              url = _context191.sent;
              _context191.next = 8;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 8:
            case 'end':
              return _context191.stop();
          }
        }
      }, _callee191, this);
    }));
    function ready() {
      return _ref193.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^srnk\.co$/,
    path: /^\/i\//
  },
  ready: function () {
    var _ref194 = _asyncToGenerator( regeneratorRuntime.mark(function _callee192() {
      var a, href, method, csrfParam, csrfToken, form, input, script, m;
      return regeneratorRuntime.wrap(function _callee192$(_context192) {
        while (1) {
          switch (_context192.prev = _context192.next) {
            case 0:
              a = _ADSBYPASSER_NAMESPACE__.$.$('#btn-with-link');
              if (a) {
                _context192.next = 3;
                break;
              }
              return _context192.abrupt('return');
            case 3:
              href = a.href;
              method = a.dataset.method;
              if (!method) {
                _context192.next = 22;
                break;
              }
              csrfParam = (0, _ADSBYPASSER_NAMESPACE__.$)('meta[name="csrf-param"]').content;
              csrfToken = (0, _ADSBYPASSER_NAMESPACE__.$)('meta[name="csrf-token"]').content;
              form = document.createElement('form');
              form.method = 'post';
              form.action = href;
              input = document.createElement('input');
              input.name = '_method';
              input.value = method;
              form.appendChild(input);
              input = document.createElement('input');
              input.name = csrfParam;
              input.value = csrfToken;
              form.appendChild(input);
              document.body.appendChild(form);
              form.submit();
              return _context192.abrupt('return');
            case 22:
              _context192.next = 24;
              return _ADSBYPASSER_NAMESPACE__.$.post(location.pathname + '.js');
            case 24:
              script = _context192.sent;
              m = script.match(/const link = "([^"]+)";/);
              if (m) {
                _context192.next = 29;
                break;
              }
              _ADSBYPASSER_NAMESPACE__._.warn('script changed');
              return _context192.abrupt('return');
            case 29:
              _context192.next = 31;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m[1]);
            case 31:
            case 'end':
              return _context192.stop();
          }
        }
      }, _callee192, this);
    }));
    function ready() {
      return _ref194.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^stash-coins\.com$/
  },
  start: function () {
    var _ref195 = _asyncToGenerator( regeneratorRuntime.mark(function _callee193() {
      var url, i;
      return regeneratorRuntime.wrap(function _callee193$(_context193) {
        while (1) {
          switch (_context193.prev = _context193.next) {
            case 0:
              url = window.location.toString();
              i = url.lastIndexOf('http');
              url = url.substr(i);
              _context193.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 5:
            case 'end':
              return _context193.stop();
          }
        }
      }, _callee193, this);
    }));
    function start() {
      return _ref195.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^streamingfrench\.net$/,
    path: /^\/$/,
    query: /^\?xb=(.+)$/
  },
  start: function () {
    var _ref196 = _asyncToGenerator( regeneratorRuntime.mark(function _callee194(m) {
      var url;
      return regeneratorRuntime.wrap(function _callee194$(_context194) {
        while (1) {
          switch (_context194.prev = _context194.next) {
            case 0:
              url = decodeURIComponent(m.query[1]);
              _context194.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 3:
            case 'end':
              return _context194.stop();
          }
        }
      }, _callee194, this);
    }));
    function start(_x45) {
      return _ref196.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?supercheats\.com$/,
    path: /^\/interstitial\.html$/,
    query: /(?:\?|&)oldurl=([^&]+)(?:$|&)/
  },
  start: function () {
    var _ref197 = _asyncToGenerator( regeneratorRuntime.mark(function _callee195(m) {
      return regeneratorRuntime.wrap(function _callee195$(_context195) {
        while (1) {
          switch (_context195.prev = _context195.next) {
            case 0:
              _context195.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m.query[1]);
            case 2:
            case 'end':
              return _context195.stop();
          }
        }
      }, _callee195, this);
    }));
    function start(_x46) {
      return _ref197.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: [{
    host: [/^(www\.)?sylnk\.net$/, /^dlneko\.(com|net|org)$/, /^rumahsimpel\.com$/],
    query: /link=([^&]+)/
  }, {
    host: /^(www\.)?compul\.in$/,
    path: /^\/[np]\.php$/,
    query: /v=([^&]+)/
  }, {
    host: /^(www\.)?safelinkair\.com$/,
    path: /^\/code$/,
    query: /(?:\?|&)link=([a-zA-Z0-9/=]+)(?:$|&)/
  }, {
    host: [/^link\.filmku\.net$/, /^www\.healthygress24\.ga$/, /^kombatch\.amankan\.link$/],
    path: /^\/p\/(go|healty-lie)\.html$/,
    query: /^\?url=([a-zA-Z0-9/=]+)$/
  }, {
    host: [/^(gadget|auto|sports)14\.pw$/, /^motosport\.pw$/, /^nar-04\.tk$/, /^lindung\.in$/, /^motonews\.club$/, /^ww[23]\.picnictrans\.com$/, /^gadget13\.com$/, /^azhie\.net$/, /^ww2\.awsubs\.co$/, /^autorp\.us$/],
    query: /^\?d=([a-zA-Z0-9/=]+)$/
  }, {
    host: /^www\.anisubsia\.tk$/,
    path: /^\/p\/link\.html$/,
    query: /^\?url=([a-zA-Z0-9/=]+)$/
  }, {
    host: [/^www\.insurance1\.tech$/, /^www\.freeanimeonline\.xyz$/],
    query: /^\?site=([a-zA-Z0-9/=]+)/
  }, {
    host: /^i\.gtaind\.com$/,
    query: /^\?([a-zA-Z0-9/=]+)$/
  },
  {
    host: /\.blogspot\.com?/,
    query: [
    /^\?url=([a-zA-Z0-9/=]+)$/, /^\?id=([a-zA-Z0-9/=]+)$/]
  }, {
    host: /^sehatlega\.com$/,
    query: /^\?lanjut=([a-zA-Z0-9/=]+)$/
  }, {
    host: /^shorten\.id$/,
    query: /^\?url=([a-zA-Z0-9/=]+)=$/
  }],
  start: function () {
    var _ref198 = _asyncToGenerator( regeneratorRuntime.mark(function _callee196(m) {
      var rawLink;
      return regeneratorRuntime.wrap(function _callee196$(_context196) {
        while (1) {
          switch (_context196.prev = _context196.next) {
            case 0:
              rawLink = atob(m.query[1]);
              _context196.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(rawLink);
            case 3:
            case 'end':
              return _context196.stop();
          }
        }
      }, _callee196, this);
    }));
    function start(_x47) {
      return _ref198.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: [{
    host: [
    /(^|\.)safelinkconverter2?\.com$/,
    /^safelink(s?review(er)?)\.com?$/, /^susutin\.com$/, /^(getcomics|miuitutorial)\.gq$/, /^awsubs\.cf$/, /^awsubsco\.ga$/],
    query: /id=([\w\\]+=*)/
  }, {
    host: [/^(www\.)?dlneko\.com$/, /^(satuasia|tawaku)\.com$/, /^ww3\.manteb\.in$/, /^link\.filmku\.net$/, /^www\.muucih\.com$/, /^(naisho|filmku)\.lompat\.in$/, /^edogawa\.lon\.pw$/, /^telolet\.in$/],
    query: /go=([\w\\]+=*)/
  }],
  start: function () {
    var _ref199 = _asyncToGenerator( regeneratorRuntime.mark(function _callee197(m) {
      var l, table;
      return regeneratorRuntime.wrap(function _callee197$(_context197) {
        while (1) {
          switch (_context197.prev = _context197.next) {
            case 0:
              l = atob(m.query[1]);
              table = {
                '!': 'a',
                ')': 'e',
                '_': 'i',
                '(': 'o',
                '*': 'u'
              };
              l = l.replace(/[!)_(*]/g, function (m) {
                return table[m];
              });
              _context197.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l);
            case 5:
            case 'end':
              return _context197.stop();
          }
        }
      }, _callee197, this);
    }));
    function start(_x48) {
      return _ref199.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?safelinkreview\.com$/,
    path: /^\/\w+\/cost\/([\w.]+)\/?$/
  },
  start: function () {
    var _ref200 = _asyncToGenerator( regeneratorRuntime.mark(function _callee198(m) {
      var l;
      return regeneratorRuntime.wrap(function _callee198$(_context198) {
        while (1) {
          switch (_context198.prev = _context198.next) {
            case 0:
              l = 'http://' + m.path[1];
              _context198.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l);
            case 3:
            case 'end':
              return _context198.stop();
          }
        }
      }, _callee198, this);
    }));
    function start(_x49) {
      return _ref200.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^(designinghomey|ani-share|sinopsisfilmku)\.com$/, /^motonews\.club$/, /^(autofans|landscapenature)\.pw$/, /^(sidespace|erogedownload)\.net$/],
    query: /get=([^&]+)/
  },
  ready: function () {
    var _ref201 = _asyncToGenerator( regeneratorRuntime.mark(function _callee199(m) {
      var s;
      return regeneratorRuntime.wrap(function _callee199$(_context199) {
        while (1) {
          switch (_context199.prev = _context199.next) {
            case 0:
              s = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/const a='([^']+)'/);
              if (!s) {
                _context199.next = 5;
                break;
              }
              _context199.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(s[1]);
            case 4:
              return _context199.abrupt('return');
            case 5:
              s = atob(m.query[1]);
              _context199.next = 8;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(s);
            case 8:
            case 'end':
              return _context199.stop();
          }
        }
      }, _callee199, this);
    }));
    function ready(_x50) {
      return _ref201.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^kombatch\.loncat\.pw$/
  },
  ready: function () {
    var _ref202 = _asyncToGenerator( regeneratorRuntime.mark(function _callee200() {
      var s;
      return regeneratorRuntime.wrap(function _callee200$(_context200) {
        while (1) {
          switch (_context200.prev = _context200.next) {
            case 0:
              s = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/\.open\("([^"]+)",/);
              s = s[1].match(/go=([^&]+)/);
              s = atob(s[1]);
              _context200.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(s);
            case 5:
            case 'end':
              return _context200.stop();
          }
        }
      }, _callee200, this);
    }));
    function ready() {
      return _ref202.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^ww[23]\.picnictrans\.com$/, /^short\.awsubs\.(co|me)$/]
  },
  ready: function () {
    var _ref203 = _asyncToGenerator( regeneratorRuntime.mark(function _callee201() {
      var a;
      return regeneratorRuntime.wrap(function _callee201$(_context201) {
        while (1) {
          switch (_context201.prev = _context201.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('div.kiri > center > a');
              _context201.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context201.stop();
          }
        }
      }, _callee201, this);
    }));
    function ready() {
      return _ref203.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^techfunda\.net$/,
    path: [/^\/link\//, /^\/safe\//]
  },
  ready: function () {
    var _ref204 = _asyncToGenerator( regeneratorRuntime.mark(function _callee202() {
      var a;
      return regeneratorRuntime.wrap(function _callee202$(_context202) {
        while (1) {
          switch (_context202.prev = _context202.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.hide a.btn');
              _context202.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context202.stop();
          }
        }
      }, _callee202, this);
    }));
    function ready() {
      return _ref204.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^thinfi\.com$/
  },
  ready: function () {
    var _ref205 = _asyncToGenerator( regeneratorRuntime.mark(function _callee203() {
      var a;
      return regeneratorRuntime.wrap(function _callee203$(_context203) {
        while (1) {
          switch (_context203.prev = _context203.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('div p a');
              _context203.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context203.stop();
          }
        }
      }, _callee203, this);
    }));
    function ready() {
      return _ref205.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^tinyarrows\.com$/,
    path: /^\/preview\.php$/,
    query: /^\?page=([^&]+)/
  },
  start: function () {
    var _ref206 = _asyncToGenerator( regeneratorRuntime.mark(function _callee204(m) {
      return regeneratorRuntime.wrap(function _callee204$(_context204) {
        while (1) {
          switch (_context204.prev = _context204.next) {
            case 0:
              _context204.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(decodeURIComponent(m.query[1]));
            case 2:
            case 'end':
              return _context204.stop();
          }
        }
      }, _callee204, this);
    }));
    function start(_x51) {
      return _ref206.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^topload\.pro$/
  },
  ready: function () {
    var _ref207 = _asyncToGenerator( regeneratorRuntime.mark(function _callee205() {
      var a;
      return regeneratorRuntime.wrap(function _callee205$(_context205) {
        while (1) {
          switch (_context205.prev = _context205.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.hide a.btn');
              _context205.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context205.stop();
          }
        }
      }, _callee205, this);
    }));
    function ready() {
      return _ref207.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?totaldebrid\.org$/,
    path: /\/l\/(l\.php)?$/,
    query: /\?ads=([a-zA-Z0-9=]+)$/
  },
  start: function () {
    var _ref208 = _asyncToGenerator( regeneratorRuntime.mark(function _callee206(m) {
      var l;
      return regeneratorRuntime.wrap(function _callee206$(_context206) {
        while (1) {
          switch (_context206.prev = _context206.next) {
            case 0:
              l = atob(m.query[1]);
              _context206.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l);
            case 3:
            case 'end':
              return _context206.stop();
          }
        }
      }, _callee206, this);
    }));
    function start(_x52) {
      return _ref208.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?typ\.me$/
  },
  ready: function () {
    var _ref209 = _asyncToGenerator( regeneratorRuntime.mark(function _callee207() {
      var a;
      return regeneratorRuntime.wrap(function _callee207$(_context207) {
        while (1) {
          switch (_context207.prev = _context207.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#skipAdBtn');
              _context207.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context207.stop();
          }
        }
      }, _callee207, this);
    }));
    function ready() {
      return _ref209.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?ultshare\.com$/,
    path: /^\/(?:(?:\d-)?(\d+)|index\.php)$/,
    query: /^(?:\?a=\d&c=(\d+))?$/
  },
  start: function () {
    var _ref210 = _asyncToGenerator( regeneratorRuntime.mark(function _callee208(m) {
      var linkId, directLink;
      return regeneratorRuntime.wrap(function _callee208$(_context208) {
        while (1) {
          switch (_context208.prev = _context208.next) {
            case 0:
              linkId = m.path[1] ? m.path[1] : m.query[1];
              directLink = '/3-' + linkId;
              _context208.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(directLink);
            case 4:
            case 'end':
              return _context208.stop();
          }
        }
      }, _callee208, this);
    }));
    function start(_x53) {
      return _ref210.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^unfake\.it$/
  },
  ready: function () {
    var _ref211 = _asyncToGenerator( regeneratorRuntime.mark(function _callee209() {
      var frame, i;
      return regeneratorRuntime.wrap(function _callee209$(_context209) {
        while (1) {
          switch (_context209.prev = _context209.next) {
            case 0:
              frame = (0, _ADSBYPASSER_NAMESPACE__.$)('frame');
              i = frame.src.lastIndexOf('http://');
              _context209.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(frame.src.substr(i));
            case 4:
            case 'end':
              return _context209.stop();
          }
        }
      }, _callee209, this);
    }));
    function ready() {
      return _ref211.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?(upan|gxp)\.so$/,
    path: /^\/\w+$/
  },
  ready: function () {
    var _ref212 = _asyncToGenerator( regeneratorRuntime.mark(function _callee210() {
      var a;
      return regeneratorRuntime.wrap(function _callee210$(_context210) {
        while (1) {
          switch (_context210.prev = _context210.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('table.td_line a[onclick="down_process_s();"]');
              _context210.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context210.stop();
          }
        }
      }, _callee210, this);
    }));
    function ready() {
      return _ref212.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^url\.ie$/
  },
  ready: function () {
    var _ref213 = _asyncToGenerator( regeneratorRuntime.mark(function _callee211() {
      var a;
      return regeneratorRuntime.wrap(function _callee211$(_context211) {
        while (1) {
          switch (_context211.prev = _context211.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a[title="Link to original URL"]');
              _context211.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context211.stop();
          }
        }
      }, _callee211, this);
    }));
    function ready() {
      return _ref213.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/(^|\.)urlcash\.(com|net|org)$/, /^(bat5|detonating|celebclk|eightteen|smilinglinks|peekatmygirlfriend|pornyhost|clb1|urlgalleries)\.com$/, /^looble\.net$/, /^xxxs\.org$/]
  },
  ready: function () {
    var _ref214 = _asyncToGenerator( regeneratorRuntime.mark(function _callee212() {
      var matches;
      return regeneratorRuntime.wrap(function _callee212$(_context212) {
        while (1) {
          switch (_context212.prev = _context212.next) {
            case 0:
              if (!(_ADSBYPASSER_NAMESPACE__.$.window && _ADSBYPASSER_NAMESPACE__.$.window.linkDestUrl)) {
                _context212.next = 4;
                break;
              }
              _context212.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(_ADSBYPASSER_NAMESPACE__.$.window.linkDestUrl);
            case 3:
              return _context212.abrupt('return');
            case 4:
              matches = document.body.innerHTML.match(/linkDestUrl = '(.+)'/);
              if (!matches) {
                _context212.next = 9;
                break;
              }
              _context212.next = 8;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(matches[1]);
            case 8:
              return _context212.abrupt('return');
            case 9:
            case 'end':
              return _context212.stop();
          }
        }
      }, _callee212, this);
    }));
    function ready() {
      return _ref214.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^urlinn\.com$/
  },
  ready: function () {
    var _ref215 = _asyncToGenerator( regeneratorRuntime.mark(function _callee213() {
      var m;
      return regeneratorRuntime.wrap(function _callee213$(_context213) {
        while (1) {
          switch (_context213.prev = _context213.next) {
            case 0:
              m = (0, _ADSBYPASSER_NAMESPACE__.$)('META[HTTP-EQUIV=refresh]').getAttribute('CONTENT').match(/url='([^']+)'/);
              if (!m) {
                _context213.next = 4;
                break;
              }
              _context213.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m[1]);
            case 4:
            case 'end':
              return _context213.stop();
          }
        }
      }, _callee213, this);
    }));
    function ready() {
      return _ref215.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^urlms\.com$/
  },
  ready: function () {
    var _ref216 = _asyncToGenerator( regeneratorRuntime.mark(function _callee214() {
      var iframe;
      return regeneratorRuntime.wrap(function _callee214$(_context214) {
        while (1) {
          switch (_context214.prev = _context214.next) {
            case 0:
              iframe = (0, _ADSBYPASSER_NAMESPACE__.$)('#content');
              _context214.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(iframe.src);
            case 3:
            case 'end':
              return _context214.stop();
          }
        }
      }, _callee214, this);
    }));
    function ready() {
      return _ref216.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?urlv2\.com$/
  },
  ready: function () {
    var _ref217 = _asyncToGenerator( regeneratorRuntime.mark(function _callee215() {
      var path, m, l;
      return regeneratorRuntime.wrap(function _callee215$(_context215) {
        while (1) {
          switch (_context215.prev = _context215.next) {
            case 0:
              if (!(window.location.pathname.indexOf('locked') >= 0)) {
                _context215.next = 5;
                break;
              }
              path = window.location.pathname.replace('/locked', '');
              _context215.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(path);
            case 4:
              return _context215.abrupt('return');
            case 5:
              m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/jeton=([\w]+)/);
              l = 'http://urlv2.com/algo.php?action=passer&px=0&so=1&jeton=' + m[1];
              _context215.next = 9;
              return _ADSBYPASSER_NAMESPACE__._.wait(5 * 1000);
            case 9:
              _context215.next = 11;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l);
            case 11:
            case 'end':
              return _context215.stop();
          }
        }
      }, _callee215, this);
    }));
    function ready() {
      return _ref217.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?uskip\.me$/,
    path: /^\/go\/\w+$/
  },
  ready: function () {
    var _ref218 = _asyncToGenerator( regeneratorRuntime.mark(function _callee216() {
      var a;
      return regeneratorRuntime.wrap(function _callee216$(_context216) {
        while (1) {
          switch (_context216.prev = _context216.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#btn-main');
              _context216.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context216.stop();
          }
        }
      }, _callee216, this);
    }));
    function ready() {
      return _ref218.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^vavi\.co$/
  },
  ready: function () {
    var _ref219 = _asyncToGenerator( regeneratorRuntime.mark(function _callee217() {
      var l;
      return regeneratorRuntime.wrap(function _callee217$(_context217) {
        while (1) {
          switch (_context217.prev = _context217.next) {
            case 0:
              l = (0, _ADSBYPASSER_NAMESPACE__.$)('#goLink');
              _context217.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l.href);
            case 3:
            case 'end':
              return _context217.stop();
          }
        }
      }, _callee217, this);
    }));
    function ready() {
      return _ref219.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?victly\.com$/,
    path: /^\/\w+$/
  },
  start: function () {
    var _ref220 = _asyncToGenerator( regeneratorRuntime.mark(function _callee218() {
      var text, m;
      return regeneratorRuntime.wrap(function _callee218$(_context218) {
        while (1) {
          switch (_context218.prev = _context218.next) {
            case 0:
              _context218.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.post(document.location.href, {
                hidden: '',
                image: 'Skip+Ads'
              });
            case 2:
              text = _context218.sent;
              m = text.match(/window\.location\.replace\('([^']+)'\)/);
              _context218.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m[1]);
            case 6:
            case 'end':
              return _context218.stop();
          }
        }
      }, _callee218, this);
    }));
    function start() {
      return _ref220.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.viidii\.info$/
  },
  ready: function () {
    var _ref221 = _asyncToGenerator( regeneratorRuntime.mark(function _callee219() {
      var o;
      return regeneratorRuntime.wrap(function _callee219$(_context219) {
        while (1) {
          switch (_context219.prev = _context219.next) {
            case 0:
              o = (0, _ADSBYPASSER_NAMESPACE__.$)('#directlink');
              _context219.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(o.href);
            case 3:
            case 'end':
              return _context219.stop();
          }
        }
      }, _callee219, this);
    }));
    function ready() {
      return _ref221.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?vir\.al$/
  },
  ready: function () {
    var _ref222 = _asyncToGenerator( regeneratorRuntime.mark(function _callee220() {
      var m;
      return regeneratorRuntime.wrap(function _callee220$(_context220) {
        while (1) {
          switch (_context220.prev = _context220.next) {
            case 0:
              m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/const target_url = '([^']+)';/);
              if (m) {
                _context220.next = 3;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('site changed');
            case 3:
              _context220.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m[1]);
            case 5:
            case 'end':
              return _context220.stop();
          }
        }
      }, _callee220, this);
    }));
    function ready() {
      return _ref222.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?wzzq\.me$/
  },
  ready: function () {
    var _ref223 = _asyncToGenerator( regeneratorRuntime.mark(function _callee221() {
      var l;
      return regeneratorRuntime.wrap(function _callee221$(_context221) {
        while (1) {
          switch (_context221.prev = _context221.next) {
            case 0:
              l = (0, _ADSBYPASSER_NAMESPACE__.$)('#img_loading_table2  div.wz_img_hit a[target=_blank]').href;
              _context221.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l);
            case 3:
            case 'end':
              return _context221.stop();
          }
        }
      }, _callee221, this);
    }));
    function ready() {
      return _ref223.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^xlink\.me$/
  },
  ready: function () {
    var _ref224 = _asyncToGenerator( regeneratorRuntime.mark(function _callee222() {
      var a;
      return regeneratorRuntime.wrap(function _callee222$(_context222) {
        while (1) {
          switch (_context222.prev = _context222.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#main_form > center > a');
              if (a) {
                _context222.next = 3;
                break;
              }
              return _context222.abrupt('return');
            case 3:
              _context222.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 5:
            case 'end':
              return _context222.stop();
          }
        }
      }, _callee222, this);
    }));
    function ready() {
      return _ref224.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: 'http://yep.it/preview.php?p=*',
  ready: function () {
    var _ref225 = _asyncToGenerator( regeneratorRuntime.mark(function _callee223() {
      var link;
      return regeneratorRuntime.wrap(function _callee223$(_context223) {
        while (1) {
          switch (_context223.prev = _context223.next) {
            case 0:
              link = (0, _ADSBYPASSER_NAMESPACE__.$)('font[color="grey"]').innerHTML;
              _context223.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(link);
            case 3:
            case 'end':
              return _context223.stop();
          }
        }
      }, _callee223, this);
    }));
    function ready() {
      return _ref225.apply(this, arguments);
    }
    return ready;
  }()
});
(function () {
  var getURL = function () {
    var _ref227 = _asyncToGenerator( regeneratorRuntime.mark(function _callee225(url) {
      var text, goodURL;
      return regeneratorRuntime.wrap(function _callee225$(_context225) {
        while (1) {
          switch (_context225.prev = _context225.next) {
            case 0:
              _context225.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.get(url);
            case 2:
              text = _context225.sent;
              goodURL = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:|@)|\/|\?)*)?$/i.test(text);
              if (!goodURL) {
                _context225.next = 8;
                break;
              }
              _context225.next = 7;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(text);
            case 7:
              return _context225.abrupt('return');
            case 8:
              _context225.next = 10;
              return _ADSBYPASSER_NAMESPACE__._.wait(500);
            case 10:
              _context225.next = 12;
              return getURL(url);
            case 12:
            case 'end':
              return _context225.stop();
          }
        }
      }, _callee225, this);
    }));
    return function getURL(_x54) {
      return _ref227.apply(this, arguments);
    };
  }();
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: 'http://www.yooclick.com/l/*',
    ready: function () {
      var _ref226 = _asyncToGenerator( regeneratorRuntime.mark(function _callee224() {
        var uniq, path, url;
        return regeneratorRuntime.wrap(function _callee224$(_context224) {
          while (1) {
            switch (_context224.prev = _context224.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                uniq = _ADSBYPASSER_NAMESPACE__.$.window.uniq || _ADSBYPASSER_NAMESPACE__.$.window.uniqi;
                if (uniq) {
                  _context224.next = 4;
                  break;
                }
                return _context224.abrupt('return');
              case 4:
                path = window.location.pathname;
                url = _ADSBYPASSER_NAMESPACE__._.template('{0}?ajax=true&adblock=false&old=false&framed=false&uniq={1}')(path, uniq);
                _context224.next = 8;
                return getURL(url);
              case 8:
              case 'end':
                return _context224.stop();
            }
          }
        }, _callee224, this);
      }));
      function ready() {
        return _ref226.apply(this, arguments);
      }
      return ready;
    }()
  });
})();
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^ysf\.pl$/,
    path: /^\/3\/(.+)$/
  },
  start: function () {
    var _ref228 = _asyncToGenerator( regeneratorRuntime.mark(function _callee226(m) {
      var url;
      return regeneratorRuntime.wrap(function _callee226$(_context226) {
        while (1) {
          switch (_context226.prev = _context226.next) {
            case 0:
              url = atob(m.path[1]);
              _context226.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 3:
            case 'end':
              return _context226.stop();
          }
        }
      }, _callee226, this);
    }));
    function start(_x55) {
      return _ref228.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^ysf\.pl$/,
    path: /^\/2\/(.+)$/
  },
  start: function () {
    var _ref229 = _asyncToGenerator( regeneratorRuntime.mark(function _callee227(m) {
      var url;
      return regeneratorRuntime.wrap(function _callee227$(_context227) {
        while (1) {
          switch (_context227.prev = _context227.next) {
            case 0:
              url = m.path[1].match(/.{2}/g).map(function (h) {
                return String.fromCharCode(parseInt(h, 16));
              }).join('');
              _context227.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 3:
            case 'end':
              return _context227.stop();
          }
        }
      }, _callee227, this);
    }));
    function start(_x56) {
      return _ref229.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.zintata\.com$/,
    path: /^\/link\/$/
  },
  ready: function () {
    var _ref230 = _asyncToGenerator( regeneratorRuntime.mark(function _callee228() {
      var a;
      return regeneratorRuntime.wrap(function _callee228$(_context228) {
        while (1) {
          switch (_context228.prev = _context228.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#one > center:nth-child(3) > a:nth-child(1)');
              _context228.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context228.stop();
          }
        }
      }, _callee228, this);
    }));
    function ready() {
      return _ref230.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: 'http://zo.mu/redirector/process?link=*',
  ready: function () {
    var _ref231 = _asyncToGenerator( regeneratorRuntime.mark(function _callee229() {
      return regeneratorRuntime.wrap(function _callee229$(_context229) {
        while (1) {
          switch (_context229.prev = _context229.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              window.location.reload();
            case 2:
            case 'end':
              return _context229.stop();
          }
        }
      }, _callee229, this);
    }));
    function ready() {
      return _ref231.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^zzz\.gl$/
  },
  ready: function () {
    var _ref232 = _asyncToGenerator( regeneratorRuntime.mark(function _callee230() {
      var m;
      return regeneratorRuntime.wrap(function _callee230$(_context230) {
        while (1) {
          switch (_context230.prev = _context230.next) {
            case 0:
              m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/const domainurl = '([^']+)';/);
              if (m) {
                _context230.next = 3;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('site changed');
            case 3:
              _context230.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m[1]);
            case 5:
            case 'end':
              return _context230.stop();
          }
        }
      }, _callee230, this);
    }));
    function ready() {
      return _ref232.apply(this, arguments);
    }
    return ready;
  }()
});
(function () {
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^(www\.)?([a-zA-Z0-9]+\.)?binbox\.io$/,
      path: /\/([a-zA-Z0-9]+)/,
      hash: /(?:#([a-zA-Z0-9]+))?/
    },
    ready: function () {
      var _ref233 = _asyncToGenerator( regeneratorRuntime.mark(function _callee231(m) {
        var sjcl, paste_id, paste_salt, API_URL, pasteInfo, raw_paste, elm, frame;
        return regeneratorRuntime.wrap(function _callee231$(_context231) {
          while (1) {
            switch (_context231.prev = _context231.next) {
              case 0:
                sjcl = _ADSBYPASSER_NAMESPACE__.$.window.sjcl;
                paste_id = m.path[1];
                paste_salt = m.hash[1];
                API_URL = _ADSBYPASSER_NAMESPACE__._.template('https://binbox.io/{0}.json')(paste_id);
                _context231.next = 6;
                return _ADSBYPASSER_NAMESPACE__.$.get(API_URL, false, {
                  Origin: _ADSBYPASSER_NAMESPACE__._.none,
                  Referer: _ADSBYPASSER_NAMESPACE__._.none,
                  Cookie: 'referrer=1',
                  'X-Requested-With': _ADSBYPASSER_NAMESPACE__._.none
                });
              case 6:
                pasteInfo = _context231.sent;
                pasteInfo = JSON.parse(pasteInfo);
                if (pasteInfo.ok) {
                  _context231.next = 10;
                  break;
                }
                throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('error when getting paste information');
              case 10:
                if (!pasteInfo.paste.url) {
                  _context231.next = 14;
                  break;
                }
                _context231.next = 13;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(pasteInfo.paste.url);
              case 13:
                return _context231.abrupt('return');
              case 14:
                raw_paste = sjcl.decrypt(paste_salt, pasteInfo.paste.text);
                if (!isLink(raw_paste)) {
                  _context231.next = 19;
                  break;
                }
                _context231.next = 18;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(raw_paste);
              case 18:
                return _context231.abrupt('return');
              case 19:
                elm = document.createElement('pre');
                elm.id = 'paste-text';
                elm.innerHTML = linkify(raw_paste);
                frame = (0, _ADSBYPASSER_NAMESPACE__.$)('#paste-frame, #captcha-page');
                frame.parentNode.replaceChild(elm, frame);
              case 24:
              case 'end':
                return _context231.stop();
            }
          }
        }, _callee231, this);
      }));
      function ready(_x57) {
        return _ref233.apply(this, arguments);
      }
      return ready;
    }()
  });
  var sUrl = '(\\b(https?|ftp|file)://[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])';
  function isLink(text) {
    var rUrl = new RegExp(_ADSBYPASSER_NAMESPACE__._.template('^{0}$')(sUrl), 'i');
    return rUrl.test(text);
  }
  function linkify(text) {
    var rUrl = new RegExp(sUrl, 'ig');
    return text.replace(rUrl, function (match) {
      return _ADSBYPASSER_NAMESPACE__._.template('<a href=\'{0}\'>{0}</a>')(match);
    });
  }
})();
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?pasted\.co$/,
    path: /^\/\w+$/
  },
  ready: function () {
    var _ref234 = _asyncToGenerator( regeneratorRuntime.mark(function _callee232() {
      return regeneratorRuntime.wrap(function _callee232$(_context232) {
        while (1) {
          switch (_context232.prev = _context232.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('#captcha_overlay');
            case 1:
            case 'end':
              return _context232.stop();
          }
        }
      }, _callee232, this);
    }));
    function ready() {
      return _ref234.apply(this, arguments);
    }
    return ready;
  }()
});
}.call(exports, __webpack_require__(1)["Promise_"]))
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$ = exports._ = undefined;
var _ajax = __webpack_require__(9);
var _cookie = __webpack_require__(10);
var _core = __webpack_require__(0);
var _dispatcher = __webpack_require__(4);
var _dom = __webpack_require__(11);
var _link = __webpack_require__(12);
var _logger = __webpack_require__(3);
var _misc = __webpack_require__(13);
var _platform = __webpack_require__(2);
exports._ = _;
exports.$ = $;
var _ = {
  AdsBypasserError: _core.AdsBypasserError,
  find: _core.find,
  forEach: _core.forEach,
  generateRandomIP: _misc.generateRandomIP,
  info: _logger.info,
  none: _core.none,
  partial: _core.partial,
  register: _dispatcher.register,
  template: _core.template,
  wait: _core.wait,
  warn: _logger.warn
};
function $(selector, context) {
  return (0, _dom.querySelector)(selector, context);
}
$.$ = _dom.querySelectorOrNull;
$.$$ = _dom.querySelectorAll;
$.get = _ajax.get;
$.getCookie = _cookie.getCookie;
$.nuke = _misc.nuke;
$.openLink = _link.openLink;
$.post = _ajax.post;
$.remove = _dom.remove;
$.removeAllTimer = _misc.removeAllTimer;
$.resetCookies = _cookie.resetCookies;
$.searchFromScripts = _dom.searchFromScripts;
$.setCookie = _cookie.setCookie;
$.window = _platform.uswProxy;
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
(function(Promise) {
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.post = exports.get = undefined;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
var _core = __webpack_require__(0);
var _platform = __webpack_require__(2);
exports.get = get;
exports.post = post;
function deepJoin(prefix, object) {
  var _this = this;
  var keys = Object.getOwnPropertyNames(object);
  var mapped = (0, _core.map)(keys, function (k) {
    var v = object[k];
    var key = (0, _core.template)('{0}[{1}]')(prefix, k);
    if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object') {
      return deepJoin(key, v);
    }
    var tpl = (0, _core.template)('{0}={1}');
    var tmp = [key, v].map(encodeURIComponent);
    return tpl.apply(_this, tmp);
  });
  return mapped.join('&');
}
function toQuery(data) {
  var _this2 = this;
  var type = typeof data === 'undefined' ? 'undefined' : _typeof(data);
  if (data === null || type !== 'string' && type !== 'object') {
    return '';
  }
  if (type === 'string') {
    return data;
  }
  if (data instanceof String) {
    return data.toString();
  }
  var keys = Object.getOwnPropertyNames(data);
  return (0, _core.map)(keys, function (k) {
    var v = data[k];
    if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object') {
      return deepJoin(k, v);
    }
    var tpl = (0, _core.template)('{0}={1}');
    var tmp = [k, v].map(encodeURIComponent);
    return tpl.apply(_this2, tmp);
  }).join('&');
}
function ajax(method, url, data, headers) {
  var l = document.createElement('a');
  l.href = url;
  var reqHost = l.hostname;
  var overrideHeaders = {
    Host: reqHost || window.location.host,
    Origin: window.location.origin,
    Referer: window.location.href,
    'X-Requested-With': 'XMLHttpRequest'
  };
  (0, _core.forEach)(overrideHeaders, function (v, k) {
    if (headers[k] === _core.none) {
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
  return new Promise(function (resolve, reject) {
    _platform.GM.xmlhttpRequest({
      method: method,
      url: url,
      data: data,
      headers: headers,
      onload: function onload(response) {
        response = typeof response.responseText !== 'undefined' ? response : this;
        if (response.status !== 200) {
          reject(response.responseText);
        } else {
          resolve(response.responseText);
        }
      },
      onerror: function onerror(response) {
        response = typeof response.responseText !== 'undefined' ? response : this;
        reject(response.responseText);
      }
    });
  });
}
function get(url, data, headers) {
  data = toQuery(data);
  data = data ? '?' + data : '';
  headers = headers || {};
  return ajax('GET', url + data, '', headers);
}
function post(url, data, headers) {
  var h = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  };
  if (headers) {
    (0, _core.forEach)(headers, function (v, k) {
      h[k] = v;
    });
  }
  return ajax('POST', url, data, h);
}
}.call(exports, __webpack_require__(1)["Promise_"]))
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetCookies = exports.getCookie = exports.setCookie = undefined;
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
var _core = __webpack_require__(0);
exports.setCookie = setCookie;
exports.getCookie = getCookie;
exports.resetCookies = resetCookies;
function setCookie(key, value) {
  var now = new Date();
  now.setTime(now.getTime() + 3600 * 1000);
  var tpl = (0, _core.template)('{0}={1};path={2};');
  document.cookie = tpl(key, value, window.location.pathname, now.toUTCString());
}
function getCookie(key) {
  var _find = (0, _core.find)(document.cookie.split(';'), function (v) {
    var k = v.replace(/^\s*([a-zA-Z0-9-_]+)=.+$/, '$1');
    if (k !== key) {
      return _core.none;
    }
  }),
      _find2 = _slicedToArray(_find, 2),
      c = _find2[1];
  if (c === _core.none) {
    return null;
  }
  c = c.replace(/^\s*[a-zA-Z0-9-_]+=([^;]+).?$/, '$1');
  if (!c) {
    return null;
  }
  return c;
}
function resetCookies() {
  var a = document.domain;
  var b = document.domain.replace(/^www\./, '');
  var c = document.domain.replace(/^(\w+\.)+?(\w+\.\w+)$/, '$2');
  var d = new Date(1e3).toUTCString();
  (0, _core.forEach)(document.cookie.split(';'), function (v) {
    var k = v.replace(/^\s*(\w+)=.+$/, '$1');
    document.cookie = (0, _core.template)('{0}=;expires={1};')(k, d);
    document.cookie = (0, _core.template)('{0}=;path=/;expires={1};')(k, d);
    var e = (0, _core.template)('{0}=;path=/;domain={1};expires={2};');
    document.cookie = e(k, a, d);
    document.cookie = e(k, b, d);
    document.cookie = e(k, c, d);
  });
}
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchFromScripts = exports.remove = exports.toDOM = exports.querySelectorAll = exports.querySelectorOrNull = exports.querySelector = undefined;
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var _core = __webpack_require__(0);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
exports.querySelector = querySelector;
exports.querySelectorOrNull = querySelectorOrNull;
exports.querySelectorAll = querySelectorAll;
exports.toDOM = toDOM;
exports.remove = remove;
exports.searchFromScripts = searchFromScripts;
var DomNotFoundError = function (_AdsBypasserError) {
  _inherits(DomNotFoundError, _AdsBypasserError);
  function DomNotFoundError(selector) {
    _classCallCheck(this, DomNotFoundError);
    return _possibleConstructorReturn(this, (DomNotFoundError.__proto__ || Object.getPrototypeOf(DomNotFoundError)).call(this, (0, _core.template)('`{0}` not found')(selector)));
  }
  _createClass(DomNotFoundError, [{
    key: 'name',
    get: function get() {
      return 'DomNotFoundError';
    }
  }]);
  return DomNotFoundError;
}(_core.AdsBypasserError);
function querySelector(selector, context) {
  if (!context || !context.querySelector) {
    context = document;
  }
  var n = context.querySelector(selector);
  if (!n) {
    throw new DomNotFoundError(selector);
  }
  return n;
}
function querySelectorOrNull(selector, context) {
  try {
    return querySelector(selector, context);
  } catch (e) {
    return null;
  }
}
function querySelectorAll(selector, context) {
  if (!context || !context.querySelectorAll) {
    context = document;
  }
  var ns = context.querySelectorAll(selector);
  return ns;
}
function toDOM(rawHTML) {
  try {
    var parser = new DOMParser();
    var DOMHTML = parser.parseFromString(rawHTML, 'text/html');
    return DOMHTML;
  } catch (e) {
    throw new _core.AdsBypasserError('could not parse HTML to DOM');
  }
}
function remove(selector, context) {
  var nodes = querySelectorAll(selector, context);
  (0, _core.forEach)(nodes, function (e) {
    e.parentNode.removeChild(e);
  });
}
function searchFromScriptsByRegExp(pattern, context) {
  var scripts = querySelectorAll('script', context);
  var _find = (0, _core.find)(scripts, function (s) {
    var m = s.textContent.match(pattern);
    if (!m) {
      return _core.none;
    }
    return m;
  }),
      _find2 = _slicedToArray(_find, 3),
      m = _find2[2];
  if (m === _core.none) {
    return null;
  }
  return m;
}
function searchFromScriptsByString(pattern, context) {
  var scripts = querySelectorAll('script', context);
  var _find3 = (0, _core.find)(scripts, function (s) {
    var m = s.textContent.indexOf(pattern);
    if (m < 0) {
      return _core.none;
    }
    return m;
  }),
      _find4 = _slicedToArray(_find3, 2),
      m = _find4[1];
  if (m === _core.none) {
    return null;
  }
  return m.textContent;
}
function searchFromScripts(pattern, context) {
  if (pattern instanceof RegExp) {
    return searchFromScriptsByRegExp(pattern, context);
  } else if ((0, _core.isString)(pattern)) {
    return searchFromScriptsByString(pattern, context);
  } else {
    return null;
  }
}
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
(function(Promise) {
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openLink = undefined;
var get = function () {
  var _ref = _asyncToGenerator( regeneratorRuntime.mark(function _callee(url) {
    var a, clicked, tick;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            a = document.createElement('a');
            a.href = url;
            clicked = false;
            a.addEventListener('click', function (event) {
              event.stopPropagation();
              clicked = true;
            });
            _context.next = 6;
            return prepare(a);
          case 6:
            a.click();
            tick = setInterval(function () {
              if (clicked) {
                (0, _logger.info)('already clicked');
                clearInterval(tick);
                return;
              }
              (0, _logger.info)('try again');
              a.click();
            }, 50);
          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return function get(_x) {
    return _ref.apply(this, arguments);
  };
}();
var post = function () {
  var _ref2 = _asyncToGenerator( regeneratorRuntime.mark(function _callee2(path, params) {
    var form;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            params = params || {};
            form = document.createElement('form');
            form.method = 'post';
            form.action = path;
            (0, _core.forEach)(params, function (value, key) {
              var input = document.createElement('input');
              input.type = 'hidden';
              input.name = key;
              input.value = value;
              form.appendChild(input);
            });
            _context2.next = 7;
            return prepare(form);
          case 7:
            form.submit();
          case 8:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return function post(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var openLink = function () {
  var _ref3 = _asyncToGenerator( regeneratorRuntime.mark(function _callee3(to, options) {
    var withReferer, postData, from;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(!(0, _core.isString)(to) && !to)) {
              _context3.next = 3;
              break;
            }
            (0, _logger.warn)('false URL');
            return _context3.abrupt('return');
          case 3:
            options = options || {};
            withReferer = typeof options.referer === 'undefined' ? true : options.referer;
            postData = options.post;
            from = window.location.toString();
            (0, _logger.info)((0, _core.template)('{0} -> {1}')(from, to));
            if (!postData) {
              _context3.next = 12;
              break;
            }
            _context3.next = 11;
            return post(to, postData);
          case 11:
            return _context3.abrupt('return');
          case 12:
            if (!withReferer) {
              _context3.next = 16;
              break;
            }
            _context3.next = 15;
            return get(to);
          case 15:
            return _context3.abrupt('return');
          case 16:
            window.top.location.replace(to);
          case 17:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return function openLink(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();
var _core = __webpack_require__(0);
var _logger = __webpack_require__(3);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
exports.openLink = openLink;
function prepare(e) {
  if (!document.body) {
    document.body = document.createElement('body');
  }
  document.body.appendChild(e);
  return (0, _core.wait)(0);
}
}.call(exports, __webpack_require__(1)["Promise_"]))
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateRandomIP = exports.nuke = exports.removeAllTimer = undefined;
var _core = __webpack_require__(0);
var _platform = __webpack_require__(2);
var _logger = __webpack_require__(3);
exports.removeAllTimer = removeAllTimer;
exports.nuke = nuke;
exports.generateRandomIP = generateRandomIP;
function removeAllTimer() {
  var handle = window.setInterval(_core.nop, 10);
  while (handle > 0) {
    window.clearInterval(handle--);
  }
  handle = window.setTimeout(_core.nop, 10);
  while (handle > 0) {
    window.clearTimeout(handle--);
  }
}
function nuke(url) {
  try {
    _platform.uswProxy.document.write('nuked by AdsBypasser, leading to ...<br/>');
  } catch (e) {
    (0, _logger.warn)('nuke failed', e);
  }
  var a = document.createElement('a');
  a.href = url;
  a.textContent = url;
  document.body.appendChild(a);
}
function generateRandomIP() {
  return [0, 0, 0, 0].map(function () {
    return Math.floor(Math.random() * 256);
  }).join('.');
}
 })
 ]);