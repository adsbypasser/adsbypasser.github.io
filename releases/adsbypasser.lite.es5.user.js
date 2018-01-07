// ==UserScript==
// @name           AdsBypasser Lite Legacy
// @namespace      AdsBypasser
// @description    Bypass Ads
// @copyright      2012+, Wei-Cheng Pan (legnaleurc)
// @version        6.6.0
// @license        BSD
// @homepageURL    https://adsbypasser.github.io/
// @supportURL     https://github.com/adsbypasser/adsbypasser/issues
// @updateURL      https://adsbypasser.github.io/releases/adsbypasser.lite.es5.meta.js
// @downloadURL    https://adsbypasser.github.io/releases/adsbypasser.lite.es5.user.js
// @icon           https://raw.githubusercontent.com/adsbypasser/adsbypasser/v6.6.0/resources/img/logo.png
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
 	return __webpack_require__(__webpack_require__.s = 77);
 })
 ([
 (function(module, exports) {
var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; 
 }),
 (function(module, exports, __webpack_require__) {
var store = __webpack_require__(41)('wks');
var uid = __webpack_require__(27);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';
var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};
$exports.store = store;
 }),
 (function(module, exports) {
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  : Function('return this')();
if (typeof __g == 'number') __g = global; 
 }),
 (function(module, exports, __webpack_require__) {
var global = __webpack_require__(2);
var core = __webpack_require__(0);
var ctx = __webpack_require__(13);
var hide = __webpack_require__(10);
var PROTOTYPE = 'prototype';
var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    out = own ? target[key] : source[key];
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    : IS_BIND && own ? ctx(out, global)
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
$export.F = 1;   
$export.G = 2;   
$export.S = 4;   
$export.P = 8;   
$export.B = 16;  
$export.W = 32;  
$export.U = 64;  
$export.R = 128; 
module.exports = $export;
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wait = exports.tryEvery = exports.partial = exports.nop = exports.none = exports.map = exports.isString = exports.forEach = exports.find = exports.every = exports.AdsBypasserError = undefined;
var _promise = __webpack_require__(9);
var _promise2 = _interopRequireDefault(_promise);
var _toConsumableArray2 = __webpack_require__(99);
var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
var _regenerator = __webpack_require__(22);
var _regenerator2 = _interopRequireDefault(_regenerator);
var _getIterator2 = __webpack_require__(46);
var _getIterator3 = _interopRequireDefault(_getIterator2);
var _slicedToArray2 = __webpack_require__(17);
var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
var _getOwnPropertyNames = __webpack_require__(73);
var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);
var _assign = __webpack_require__(111);
var _assign2 = _interopRequireDefault(_assign);
var _keys = __webpack_require__(115);
var _keys2 = _interopRequireDefault(_keys);
var _getPrototypeOf = __webpack_require__(48);
var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
var _classCallCheck2 = __webpack_require__(49);
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
var _createClass2 = __webpack_require__(50);
var _createClass3 = _interopRequireDefault(_createClass2);
var _possibleConstructorReturn2 = __webpack_require__(51);
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
var _inherits2 = __webpack_require__(55);
var _inherits3 = _interopRequireDefault(_inherits2);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _marked = _regenerator2.default.mark(enumerate);
var AdsBypasserError = function (_Error) {
  (0, _inherits3.default)(AdsBypasserError, _Error);
  function AdsBypasserError(message) {
    (0, _classCallCheck3.default)(this, AdsBypasserError);
    return (0, _possibleConstructorReturn3.default)(this, (AdsBypasserError.__proto__ || (0, _getPrototypeOf2.default)(AdsBypasserError)).call(this, message));
  }
  (0, _createClass3.default)(AdsBypasserError, [{
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
  return (0, _keys2.default)(collection).forEach(function (k) {
    return fn(collection[k], k, collection);
  });
}
function every(collection, fn) {
  if (isArrayLike(collection)) {
    return Array.prototype.every.call(collection, fn);
  }
  return (0, _keys2.default)(collection).every(function (k) {
    return fn(collection[k], k, collection);
  });
}
function map(collection, fn) {
  if (isArrayLike(collection)) {
    return Array.prototype.map.call(collection, fn);
  }
  var mapped = (0, _assign2.default)({}, collection);
  (0, _getOwnPropertyNames2.default)(mapped).forEach(function (k) {
    mapped[k] = fn(collection[k], k, collection);
  });
  return mapped;
}
function find(collection, fn) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;
  try {
    for (var _iterator = (0, _getIterator3.default)(enumerate(collection)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref = _step.value;
      var _ref2 = (0, _slicedToArray3.default)(_ref, 2);
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
  return _regenerator2.default.wrap(function enumerate$(_context) {
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
          keys = (0, _getOwnPropertyNames2.default)(collection);
          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _iteratorError2 = undefined;
          _context.prev = 7;
          _iterator2 = (0, _getIterator3.default)(keys);
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
function partial(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (typeof fn !== 'function') {
    throw new AdsBypasserError('must give a function');
  }
  return function () {
    for (var _len2 = arguments.length, innerArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      innerArgs[_key2] = arguments[_key2];
    }
    return fn.apply(undefined, (0, _toConsumableArray3.default)(args.concat(innerArgs)));
  };
}
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}
function nop() {}
var none = nop;
function wait(msDelay) {
  return new _promise2.default(function (resolve) {
    setTimeout(resolve, msDelay);
  });
}
function tryEvery(msInterval, fn) {
  return new _promise2.default(function (resolve) {
    var handle = setInterval(function () {
      var result = fn();
      if (result !== none) {
        clearInterval(handle);
        resolve(result);
      }
    }, msInterval);
  });
}
exports.AdsBypasserError = AdsBypasserError;
exports.every = every;
exports.find = find;
exports.forEach = forEach;
exports.isString = isString;
exports.map = map;
exports.none = none;
exports.nop = nop;
exports.partial = partial;
exports.tryEvery = tryEvery;
exports.wait = wait;
 }),
 (function(module, exports, __webpack_require__) {
var isObject = __webpack_require__(11);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};
 }),
 (function(module, exports, __webpack_require__) {
var anObject = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(59);
var toPrimitive = __webpack_require__(37);
var dP = Object.defineProperty;
exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};
 }),
 (function(module, exports, __webpack_require__) {
module.exports = !__webpack_require__(14)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});
 }),
 (function(module, exports, __webpack_require__) {
var IObject = __webpack_require__(62);
var defined = __webpack_require__(35);
module.exports = function (it) {
  return IObject(defined(it));
};
 }),
 (function(module, exports, __webpack_require__) {
module.exports = { "default": __webpack_require__(78), __esModule: true };
 }),
 (function(module, exports, __webpack_require__) {
var dP = __webpack_require__(6);
var createDesc = __webpack_require__(19);
module.exports = __webpack_require__(7) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};
 }),
 (function(module, exports) {
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
 }),
 (function(module, exports) {
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};
 }),
 (function(module, exports, __webpack_require__) {
var aFunction = __webpack_require__(26);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function () {
    return fn.apply(that, arguments);
  };
};
 }),
 (function(module, exports) {
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};
 }),
 (function(module, exports) {
module.exports = {};
 }),
 (function(module, exports, __webpack_require__) {
var $keys = __webpack_require__(61);
var enumBugKeys = __webpack_require__(42);
module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
exports.__esModule = true;
var _isIterable2 = __webpack_require__(106);
var _isIterable3 = _interopRequireDefault(_isIterable2);
var _getIterator2 = __webpack_require__(46);
var _getIterator3 = _interopRequireDefault(_getIterator2);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
var $at = __webpack_require__(79)(true);
__webpack_require__(58)(String, 'String', function (iterated) {
  this._t = String(iterated); 
  this._i = 0;                
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});
 }),
 (function(module, exports) {
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};
 }),
 (function(module, exports) {
var toString = {}.toString;
module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};
 }),
 (function(module, exports, __webpack_require__) {
var defined = __webpack_require__(35);
module.exports = function (it) {
  return Object(defined(it));
};
 }),
 (function(module, exports, __webpack_require__) {
module.exports = __webpack_require__(96);
 }),
 (function(module, exports) {
exports.f = {}.propertyIsEnumerable;
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GMAPI = exports.usw = exports.rawUSW = undefined;
var _defineProperty = __webpack_require__(76);
var _defineProperty2 = _interopRequireDefault(_defineProperty);
var _getOwnPropertyDescriptor = __webpack_require__(139);
var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);
var _typeof2 = __webpack_require__(32);
var _typeof3 = _interopRequireDefault(_typeof2);
var _promise = __webpack_require__(9);
var _promise2 = _interopRequireDefault(_promise);
var _core = __webpack_require__(4);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var rawUSW = getUnsafeWindow(); 
var usw = getUnsafeWindowProxy();
var GMAPI = getGreaseMonkeyAPI();
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
  if (rawUSW.global) {
    return null;
  }
  var gm = {};
  if (typeof GM_openInTab === 'function') {
    gm.openInTab = GM_openInTab;
  } else {
    gm.openInTab = GM.openInTab;
  }
  if (typeof GM_getValue === 'function') {
    gm.getValue = function (name, default_) {
      return _promise2.default.resolve(GM_getValue(name, default_));
    };
  } else {
    gm.getValue = GM.getValue;
  }
  if (typeof GM_setValue === 'function') {
    gm.setValue = function (name, value) {
      return _promise2.default.resolve(GM_setValue(name, value));
    };
  } else {
    gm.setValue = GM.setValue;
  }
  if (typeof GM_deleteValue === 'function') {
    gm.deleteValue = function (name) {
      return _promise2.default.resolve(GM_deleteValue(name));
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
    gm.registerMenuCommand = _core.nop;
  }
  if (typeof GM_getResourceURL === 'function') {
    gm.getResourceUrl = function (resourceName) {
      return _promise2.default.resolve(GM_getResourceURL(resourceName));
    };
  } else if ((typeof GM === 'undefined' ? 'undefined' : (0, _typeof3.default)(GM)) === 'object' && GM && GM.getResourceUrl) {
    gm.getResourceUrl = GM.getResourceUrl;
  }
  return gm;
}
var MAGIC_KEY = '__adsbypasser_reverse_proxy__';
function getUnsafeWindowProxy() {
  var isFirefox = typeof InstallTrigger !== 'undefined';
  var isWebExtension = typeof cloneInto === 'undefined' || typeof exportFunction === 'undefined';
  if (!isFirefox || isWebExtension) {
    return rawUSW;
  }
  var decorator = {
    set: function set(target, key, value) {
      if (key === MAGIC_KEY) {
        return false;
      }
      if (target === unsafeWindow && key === 'open') {
        var d = (0, _getOwnPropertyDescriptor2.default)(target, key);
        d.value = clone(function () {
          var rv = value();
          return cloneInto(rv, unsafeWindow);
        });
        (0, _defineProperty2.default)(target, key, d);
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
      var type = typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value);
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
exports.rawUSW = rawUSW;
exports.usw = usw;
exports.GMAPI = GMAPI;
 }),
 (function(module, exports) {
module.exports = true;
 }),
 (function(module, exports) {
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};
 }),
 (function(module, exports) {
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
 }),
 (function(module, exports, __webpack_require__) {
var def = __webpack_require__(6).f;
var has = __webpack_require__(12);
var TAG = __webpack_require__(1)('toStringTag');
module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};
 }),
 (function(module, exports, __webpack_require__) {
__webpack_require__(84);
var global = __webpack_require__(2);
var hide = __webpack_require__(10);
var Iterators = __webpack_require__(15);
var TO_STRING_TAG = __webpack_require__(1)('toStringTag');
var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');
for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
exports.__esModule = true;
var _promise = __webpack_require__(9);
var _promise2 = _interopRequireDefault(_promise);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }
      return step("next");
    });
  };
};
 }),
 (function(module, exports, __webpack_require__) {
var $export = __webpack_require__(3);
var core = __webpack_require__(0);
var fails = __webpack_require__(14);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
exports.__esModule = true;
var _iterator = __webpack_require__(122);
var _iterator2 = _interopRequireDefault(_iterator);
var _symbol = __webpack_require__(124);
var _symbol2 = _interopRequireDefault(_symbol);
var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warn = exports.info = undefined;
var _core = __webpack_require__(4);
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
exports.info = info;
exports.warn = warn;
 }),
 (function(module, exports) {
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
 }),
 (function(module, exports) {
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};
 }),
 (function(module, exports, __webpack_require__) {
var isObject = __webpack_require__(11);
var document = __webpack_require__(2).document;
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};
 }),
 (function(module, exports, __webpack_require__) {
var isObject = __webpack_require__(11);
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};
 }),
 (function(module, exports, __webpack_require__) {
var anObject = __webpack_require__(5);
var dPs = __webpack_require__(81);
var enumBugKeys = __webpack_require__(42);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');
var Empty = function () {  };
var PROTOTYPE = 'prototype';
var createDict = function () {
  var iframe = __webpack_require__(36)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(63).appendChild(iframe);
  iframe.src = 'javascript:'; 
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};
 }),
 (function(module, exports, __webpack_require__) {
var toInteger = __webpack_require__(34);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; 
};
 }),
 (function(module, exports, __webpack_require__) {
var shared = __webpack_require__(41)('keys');
var uid = __webpack_require__(27);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};
 }),
 (function(module, exports, __webpack_require__) {
var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};
 }),
 (function(module, exports) {
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
 }),
 (function(module, exports, __webpack_require__) {
var cof = __webpack_require__(20);
var TAG = __webpack_require__(1)('toStringTag');
var ARG = cof(function () { return arguments; }()) == 'Arguments';
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) {  }
};
module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    : ARG ? cof(O)
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
 }),
 (function(module, exports, __webpack_require__) {
var classof = __webpack_require__(43);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(15);
module.exports = __webpack_require__(0).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
var aFunction = __webpack_require__(26);
function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}
module.exports.f = function (C) {
  return new PromiseCapability(C);
};
 }),
 (function(module, exports, __webpack_require__) {
module.exports = { "default": __webpack_require__(104), __esModule: true };
 }),
 (function(module, exports) {
exports.f = Object.getOwnPropertySymbols;
 }),
 (function(module, exports, __webpack_require__) {
module.exports = { "default": __webpack_require__(118), __esModule: true };
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
exports.__esModule = true;
exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
exports.__esModule = true;
var _defineProperty = __webpack_require__(76);
var _defineProperty2 = _interopRequireDefault(_defineProperty);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
exports.__esModule = true;
var _typeof2 = __webpack_require__(32);
var _typeof3 = _interopRequireDefault(_typeof2);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
 }),
 (function(module, exports, __webpack_require__) {
exports.f = __webpack_require__(1);
 }),
 (function(module, exports, __webpack_require__) {
var global = __webpack_require__(2);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(25);
var wksExt = __webpack_require__(52);
var defineProperty = __webpack_require__(6).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};
 }),
 (function(module, exports, __webpack_require__) {
var pIE = __webpack_require__(23);
var createDesc = __webpack_require__(19);
var toIObject = __webpack_require__(8);
var toPrimitive = __webpack_require__(37);
var has = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(59);
var gOPD = Object.getOwnPropertyDescriptor;
exports.f = __webpack_require__(7) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {  }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
exports.__esModule = true;
var _setPrototypeOf = __webpack_require__(132);
var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
var _create = __webpack_require__(136);
var _create2 = _interopRequireDefault(_create);
var _typeof2 = __webpack_require__(32);
var _typeof3 = _interopRequireDefault(_typeof2);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }
  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findHandler = exports.register = undefined;
var _slicedToArray2 = __webpack_require__(17);
var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
var _core = __webpack_require__(4);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
          _find2 = (0, _slicedToArray3.default)(_find, 3),
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
      _find4 = (0, _slicedToArray3.default)(_find3, 3),
      r = _find4[2];
  return r !== _core.none ? r : null;
}
function dispatchByString(rule, url_3) {
  var scheme = /\*|https?|file|ftp|chrome-extension/;
  var host = /\*|(\*\.)?([^/*]+)/;
  var path = /\/.*/;
  var tmp = '^(' + scheme.source + ')://(' + host.source + ')?(' + path.source + ')$';
  var up = new RegExp(tmp);
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
  tmp = path.replace(/[*.[\]?+#]/g, function (c) {
    if (c === '*') {
      return '.*';
    }
    return '\\' + c;
  });
  path = new RegExp('^' + tmp + '$');
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
      _find6 = (0, _slicedToArray3.default)(_find5, 3),
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
exports.register = register;
exports.findHandler = findHandler;
 }),
 (function(module, exports) {
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
var LIBRARY = __webpack_require__(25);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(60);
var hide = __webpack_require__(10);
var has = __webpack_require__(12);
var Iterators = __webpack_require__(15);
var $iterCreate = __webpack_require__(80);
var setToStringTag = __webpack_require__(28);
var getPrototypeOf = __webpack_require__(64);
var ITERATOR = __webpack_require__(1)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); 
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';
var returnThis = function () { return this; };
module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
 }),
 (function(module, exports, __webpack_require__) {
module.exports = !__webpack_require__(7) && !__webpack_require__(14)(function () {
  return Object.defineProperty(__webpack_require__(36)('div'), 'a', { get: function () { return 7; } }).a != 7;
});
 }),
 (function(module, exports, __webpack_require__) {
module.exports = __webpack_require__(10);
 }),
 (function(module, exports, __webpack_require__) {
var has = __webpack_require__(12);
var toIObject = __webpack_require__(8);
var arrayIndexOf = __webpack_require__(82)(false);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');
module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
 }),
 (function(module, exports, __webpack_require__) {
var cof = __webpack_require__(20);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};
 }),
 (function(module, exports, __webpack_require__) {
var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;
 }),
 (function(module, exports, __webpack_require__) {
var has = __webpack_require__(12);
var toObject = __webpack_require__(21);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');
var ObjectProto = Object.prototype;
module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
 }),
 (function(module, exports, __webpack_require__) {
var anObject = __webpack_require__(5);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};
 }),
 (function(module, exports, __webpack_require__) {
var Iterators = __webpack_require__(15);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
 }),
 (function(module, exports, __webpack_require__) {
var anObject = __webpack_require__(5);
var aFunction = __webpack_require__(26);
var SPECIES = __webpack_require__(1)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
 }),
 (function(module, exports, __webpack_require__) {
var ctx = __webpack_require__(13);
var invoke = __webpack_require__(90);
var html = __webpack_require__(63);
var cel = __webpack_require__(36);
var global = __webpack_require__(2);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  if (__webpack_require__(20)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};
 }),
 (function(module, exports) {
module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};
 }),
 (function(module, exports, __webpack_require__) {
var anObject = __webpack_require__(5);
var isObject = __webpack_require__(11);
var newPromiseCapability = __webpack_require__(45);
module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};
 }),
 (function(module, exports, __webpack_require__) {
var ITERATOR = __webpack_require__(1)('iterator');
var SAFE_CLOSING = false;
try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  Array.from(riter, function () { throw 2; });
} catch (e) {  }
module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) {  }
  return safe;
};
 }),
 (function(module, exports, __webpack_require__) {
module.exports = { "default": __webpack_require__(98), __esModule: true };
 }),
 (function(module, exports, __webpack_require__) {
module.exports = { "default": __webpack_require__(109), __esModule: true };
 }),
 (function(module, exports, __webpack_require__) {
var toIObject = __webpack_require__(8);
var gOPN = __webpack_require__(75).f;
var toString = {}.toString;
var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];
var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};
 }),
 (function(module, exports, __webpack_require__) {
var $keys = __webpack_require__(61);
var hiddenKeys = __webpack_require__(42).concat('length', 'prototype');
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};
 }),
 (function(module, exports, __webpack_require__) {
module.exports = { "default": __webpack_require__(120), __esModule: true };
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
var _promise = __webpack_require__(9);
var _promise2 = _interopRequireDefault(_promise);
var _regenerator = __webpack_require__(22);
var _regenerator2 = _interopRequireDefault(_regenerator);
var _stringify = __webpack_require__(72);
var _stringify2 = _interopRequireDefault(_stringify);
var _asyncToGenerator2 = __webpack_require__(30);
var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
var beforeDOMReady = function () {
  var _ref = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee(handler) {
    var config;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _config.dumpConfig)();
          case 2:
            config = _context.sent;
            (0, _logger.info)('working on\n%s \nwith\n%s', window.location.toString(), (0, _stringify2.default)(config));
            disableLeavePrompt(_platform.usw);
            disableWindowOpen();
            _context.next = 8;
            return handler.start();
          case 8:
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
  var _ref2 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee2(handler) {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            disableLeavePrompt(_platform.usw.document.body);
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
  var _ref3 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee3() {
    var handler;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(_platform.rawUSW.top !== _platform.rawUSW.self)) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt('return');
          case 2:
            _platform.GMAPI.registerMenuCommand('AdsBypasser - Configure', function () {
              _platform.GMAPI.openInTab('https://adsbypasser.github.io/configure.html');
            });
            _context3.next = 5;
            return (0, _config.loadConfig)();
          case 5:
            handler = (0, _dispatcher.findHandler)();
            if (!handler) {
              _context3.next = 14;
              break;
            }
            _context3.next = 9;
            return beforeDOMReady(handler);
          case 9:
            _context3.next = 11;
            return waitDOM();
          case 11:
            _context3.next = 13;
            return afterDOMReady(handler);
          case 13:
            return _context3.abrupt('return');
          case 14:
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
var _core = __webpack_require__(4);
var _dispatcher = __webpack_require__(56);
var _platform = __webpack_require__(24);
var _config = __webpack_require__(142);
var _logger = __webpack_require__(33);
__webpack_require__(147);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
function disableWindowOpen() {
  _platform.usw.open = function () {
    return {
      closed: false
    };
  };
  _platform.usw.alert = _core.nop;
  _platform.usw.confirm = _core.nop;
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
    _platform.usw.Object.defineProperty(element, 'onbeforeunload', {
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
  return new _promise2.default(function (resolve) {
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
 }),
 (function(module, exports, __webpack_require__) {
__webpack_require__(57);
__webpack_require__(18);
__webpack_require__(29);
__webpack_require__(87);
__webpack_require__(94);
__webpack_require__(95);
module.exports = __webpack_require__(0).Promise;
 }),
 (function(module, exports, __webpack_require__) {
var toInteger = __webpack_require__(34);
var defined = __webpack_require__(35);
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
var create = __webpack_require__(38);
var descriptor = __webpack_require__(19);
var setToStringTag = __webpack_require__(28);
var IteratorPrototype = {};
__webpack_require__(10)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });
module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};
 }),
 (function(module, exports, __webpack_require__) {
var dP = __webpack_require__(6);
var anObject = __webpack_require__(5);
var getKeys = __webpack_require__(16);
module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
 }),
 (function(module, exports, __webpack_require__) {
var toIObject = __webpack_require__(8);
var toLength = __webpack_require__(39);
var toAbsoluteIndex = __webpack_require__(83);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      if (value != value) return true;
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
 }),
 (function(module, exports, __webpack_require__) {
var toInteger = __webpack_require__(34);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
var addToUnscopables = __webpack_require__(85);
var step = __webpack_require__(86);
var Iterators = __webpack_require__(15);
var toIObject = __webpack_require__(8);
module.exports = __webpack_require__(58)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); 
  this._i = 0;                   
  this._k = kind;                
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');
Iterators.Arguments = Iterators.Array;
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
 }),
 (function(module, exports) {
module.exports = function () {  };
 }),
 (function(module, exports) {
module.exports = function (done, value) {
  return { value: value, done: !!done };
};
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
var LIBRARY = __webpack_require__(25);
var global = __webpack_require__(2);
var ctx = __webpack_require__(13);
var classof = __webpack_require__(43);
var $export = __webpack_require__(3);
var isObject = __webpack_require__(11);
var aFunction = __webpack_require__(26);
var anInstance = __webpack_require__(88);
var forOf = __webpack_require__(89);
var speciesConstructor = __webpack_require__(67);
var task = __webpack_require__(68).set;
var microtask = __webpack_require__(91)();
var newPromiseCapabilityModule = __webpack_require__(45);
var perform = __webpack_require__(69);
var promiseResolve = __webpack_require__(70);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () {  };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
var USE_NATIVE = !!function () {
  try {
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function (exec) {
      exec(empty, empty);
    };
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) {  }
}();
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); 
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  } return true;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; 
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; 
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; 
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); 
  }
};
if (!USE_NATIVE) {
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor) {
    this._c = [];             
    this._a = undefined;      
    this._s = 0;              
    this._d = false;          
    this._v = undefined;      
    this._h = 0;              
    this._n = false;          
  };
  Internal.prototype = __webpack_require__(92)($Promise.prototype, {
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}
$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(28)($Promise, PROMISE);
__webpack_require__(93)(PROMISE);
Wrapper = __webpack_require__(0)[PROMISE];
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(71)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});
 }),
 (function(module, exports) {
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
 }),
 (function(module, exports, __webpack_require__) {
var ctx = __webpack_require__(13);
var call = __webpack_require__(65);
var isArrayIter = __webpack_require__(66);
var anObject = __webpack_require__(5);
var toLength = __webpack_require__(39);
var getIterFn = __webpack_require__(44);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;
 }),
 (function(module, exports) {
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};
 }),
 (function(module, exports, __webpack_require__) {
var global = __webpack_require__(2);
var macrotask = __webpack_require__(68).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(20)(process) == 'process';
module.exports = function () {
  var head, last, notify;
  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  } else if (Observer) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); 
    notify = function () {
      node.data = toggle = !toggle;
    };
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  } else {
    notify = function () {
      macrotask.call(global, flush);
    };
  }
  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};
 }),
 (function(module, exports, __webpack_require__) {
var hide = __webpack_require__(10);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
var global = __webpack_require__(2);
var core = __webpack_require__(0);
var dP = __webpack_require__(6);
var DESCRIPTORS = __webpack_require__(7);
var SPECIES = __webpack_require__(1)('species');
module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
var $export = __webpack_require__(3);
var core = __webpack_require__(0);
var global = __webpack_require__(2);
var speciesConstructor = __webpack_require__(67);
var promiseResolve = __webpack_require__(70);
$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
var $export = __webpack_require__(3);
var newPromiseCapability = __webpack_require__(45);
var perform = __webpack_require__(69);
$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });
 }),
 (function(module, exports, __webpack_require__) {
var g = (function() { return this })() || Function("return this")();
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
var oldRuntime = hadRuntime && g.regeneratorRuntime;
g.regeneratorRuntime = undefined;
module.exports = __webpack_require__(97);
if (hadRuntime) {
  g.regeneratorRuntime = oldRuntime;
} else {
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}
 }),
 (function(module, exports) {
!(function(global) {
  "use strict";
  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; 
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      module.exports = runtime;
    }
    return;
  }
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);
    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }
  runtime.wrap = wrap;
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }
  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    IteratorPrototype = NativeIteratorPrototype;
  }
  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }
  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };
  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };
  runtime.awrap = function(arg) {
    return { __await: arg };
  };
  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }
        return Promise.resolve(value).then(function(unwrapped) {
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }
    var previousPromise;
    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }
      return previousPromise =
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }
    this._invoke = enqueue;
  }
  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );
    return runtime.isGeneratorFunction(outerFn)
      ? iter 
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };
  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }
      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }
        return doneResult();
      }
      context.method = method;
      context.arg = arg;
      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if (context.method === "next") {
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }
          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }
        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;
          if (record.arg === ContinueSentinel) {
            continue;
          }
          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      context.delegate = null;
      if (context.method === "throw") {
        if (delegate.iterator.return) {
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);
          if (context.method === "throw") {
            return ContinueSentinel;
          }
        }
        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }
    var info = record.arg;
    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }
    if (info.done) {
      context[delegate.resultName] = info.value;
      context.next = delegate.nextLoc;
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      return info;
    }
    context.delegate = null;
    return ContinueSentinel;
  }
  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator";
  Gp[iteratorSymbol] = function() {
    return this;
  };
  Gp.toString = function() {
    return "[object Generator]";
  };
  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };
    if (1 in locs) {
      entry.catchLoc = locs[1];
    }
    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }
    this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }
  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }
      next.done = true;
      return next;
    };
  };
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }
      if (typeof iterable.next === "function") {
        return iterable;
      }
      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }
          next.value = undefined;
          next.done = true;
          return next;
        };
        return next.next = next;
      }
    }
    return { next: doneResult };
  }
  runtime.values = values;
  function doneResult() {
    return { value: undefined, done: true };
  }
  Context.prototype = {
    constructor: Context,
    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);
      if (!skipTempReset) {
        for (var name in this) {
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }
      return this.rval;
    },
    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }
      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        if (caught) {
          context.method = "next";
          context.arg = undefined;
        }
        return !! caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;
        if (entry.tryLoc === "root") {
          return handle("end");
        }
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        finallyEntry = null;
      }
      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;
      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }
      return this.complete(record);
    },
    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }
      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
      return ContinueSentinel;
    },
    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };
      if (this.method === "next") {
        this.arg = undefined;
      }
      return ContinueSentinel;
    }
  };
})(
  (function() { return this })() || Function("return this")()
);
 }),
 (function(module, exports, __webpack_require__) {
var core = __webpack_require__(0);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { 
  return $JSON.stringify.apply($JSON, arguments);
};
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
exports.__esModule = true;
var _from = __webpack_require__(100);
var _from2 = _interopRequireDefault(_from);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
 }),
 (function(module, exports, __webpack_require__) {
module.exports = { "default": __webpack_require__(101), __esModule: true };
 }),
 (function(module, exports, __webpack_require__) {
__webpack_require__(18);
__webpack_require__(102);
module.exports = __webpack_require__(0).Array.from;
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
var ctx = __webpack_require__(13);
var $export = __webpack_require__(3);
var toObject = __webpack_require__(21);
var call = __webpack_require__(65);
var isArrayIter = __webpack_require__(66);
var toLength = __webpack_require__(39);
var createProperty = __webpack_require__(103);
var getIterFn = __webpack_require__(44);
$export($export.S + $export.F * !__webpack_require__(71)(function (iter) { Array.from(iter); }), 'Array', {
  from: function from(arrayLike ) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
var $defineProperty = __webpack_require__(6);
var createDesc = __webpack_require__(19);
module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};
 }),
 (function(module, exports, __webpack_require__) {
__webpack_require__(29);
__webpack_require__(18);
module.exports = __webpack_require__(105);
 }),
 (function(module, exports, __webpack_require__) {
var anObject = __webpack_require__(5);
var get = __webpack_require__(44);
module.exports = __webpack_require__(0).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
 }),
 (function(module, exports, __webpack_require__) {
module.exports = { "default": __webpack_require__(107), __esModule: true };
 }),
 (function(module, exports, __webpack_require__) {
__webpack_require__(29);
__webpack_require__(18);
module.exports = __webpack_require__(108);
 }),
 (function(module, exports, __webpack_require__) {
var classof = __webpack_require__(43);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(15);
module.exports = __webpack_require__(0).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};
 }),
 (function(module, exports, __webpack_require__) {
__webpack_require__(110);
var $Object = __webpack_require__(0).Object;
module.exports = function getOwnPropertyNames(it) {
  return $Object.getOwnPropertyNames(it);
};
 }),
 (function(module, exports, __webpack_require__) {
__webpack_require__(31)('getOwnPropertyNames', function () {
  return __webpack_require__(74).f;
});
 }),
 (function(module, exports, __webpack_require__) {
module.exports = { "default": __webpack_require__(112), __esModule: true };
 }),
 (function(module, exports, __webpack_require__) {
__webpack_require__(113);
module.exports = __webpack_require__(0).Object.assign;
 }),
 (function(module, exports, __webpack_require__) {
var $export = __webpack_require__(3);
$export($export.S + $export.F, 'Object', { assign: __webpack_require__(114) });
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
var getKeys = __webpack_require__(16);
var gOPS = __webpack_require__(47);
var pIE = __webpack_require__(23);
var toObject = __webpack_require__(21);
var IObject = __webpack_require__(62);
var $assign = Object.assign;
module.exports = !$assign || __webpack_require__(14)(function () {
  var A = {};
  var B = {};
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { 
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;
 }),
 (function(module, exports, __webpack_require__) {
module.exports = { "default": __webpack_require__(116), __esModule: true };
 }),
 (function(module, exports, __webpack_require__) {
__webpack_require__(117);
module.exports = __webpack_require__(0).Object.keys;
 }),
 (function(module, exports, __webpack_require__) {
var toObject = __webpack_require__(21);
var $keys = __webpack_require__(16);
__webpack_require__(31)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});
 }),
 (function(module, exports, __webpack_require__) {
__webpack_require__(119);
module.exports = __webpack_require__(0).Object.getPrototypeOf;
 }),
 (function(module, exports, __webpack_require__) {
var toObject = __webpack_require__(21);
var $getPrototypeOf = __webpack_require__(64);
__webpack_require__(31)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});
 }),
 (function(module, exports, __webpack_require__) {
__webpack_require__(121);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};
 }),
 (function(module, exports, __webpack_require__) {
var $export = __webpack_require__(3);
$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperty: __webpack_require__(6).f });
 }),
 (function(module, exports, __webpack_require__) {
module.exports = { "default": __webpack_require__(123), __esModule: true };
 }),
 (function(module, exports, __webpack_require__) {
__webpack_require__(18);
__webpack_require__(29);
module.exports = __webpack_require__(52).f('iterator');
 }),
 (function(module, exports, __webpack_require__) {
module.exports = { "default": __webpack_require__(125), __esModule: true };
 }),
 (function(module, exports, __webpack_require__) {
__webpack_require__(126);
__webpack_require__(57);
__webpack_require__(130);
__webpack_require__(131);
module.exports = __webpack_require__(0).Symbol;
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
var global = __webpack_require__(2);
var has = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(7);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(60);
var META = __webpack_require__(127).KEY;
var $fails = __webpack_require__(14);
var shared = __webpack_require__(41);
var setToStringTag = __webpack_require__(28);
var uid = __webpack_require__(27);
var wks = __webpack_require__(1);
var wksExt = __webpack_require__(52);
var wksDefine = __webpack_require__(53);
var enumKeys = __webpack_require__(128);
var isArray = __webpack_require__(129);
var anObject = __webpack_require__(5);
var toIObject = __webpack_require__(8);
var toPrimitive = __webpack_require__(37);
var createDesc = __webpack_require__(19);
var _create = __webpack_require__(38);
var gOPNExt = __webpack_require__(74);
var $GOPD = __webpack_require__(54);
var $DP = __webpack_require__(6);
var $keys = __webpack_require__(16);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;
var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};
var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};
var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });
  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(75).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(23).f = $propertyIsEnumerable;
  __webpack_require__(47).f = $getOwnPropertySymbols;
  if (DESCRIPTORS && !__webpack_require__(25)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}
$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
for (var es6Symbols = (
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);
for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);
$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});
$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  create: $create,
  defineProperty: $defineProperty,
  defineProperties: $defineProperties,
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  getOwnPropertyNames: $getOwnPropertyNames,
  getOwnPropertySymbols: $getOwnPropertySymbols
});
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; 
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
setToStringTag($Symbol, 'Symbol');
setToStringTag(Math, 'Math', true);
setToStringTag(global.JSON, 'JSON', true);
 }),
 (function(module, exports, __webpack_require__) {
var META = __webpack_require__(27)('meta');
var isObject = __webpack_require__(11);
var has = __webpack_require__(12);
var setDesc = __webpack_require__(6).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(14)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, 
    w: {}          
  } });
};
var fastKey = function (it, create) {
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    if (!isExtensible(it)) return 'F';
    if (!create) return 'E';
    setMeta(it);
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    if (!isExtensible(it)) return true;
    if (!create) return false;
    setMeta(it);
  } return it[META].w;
};
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
 }),
 (function(module, exports, __webpack_require__) {
var getKeys = __webpack_require__(16);
var gOPS = __webpack_require__(47);
var pIE = __webpack_require__(23);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};
 }),
 (function(module, exports, __webpack_require__) {
var cof = __webpack_require__(20);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};
 }),
 (function(module, exports, __webpack_require__) {
__webpack_require__(53)('asyncIterator');
 }),
 (function(module, exports, __webpack_require__) {
__webpack_require__(53)('observable');
 }),
 (function(module, exports, __webpack_require__) {
module.exports = { "default": __webpack_require__(133), __esModule: true };
 }),
 (function(module, exports, __webpack_require__) {
__webpack_require__(134);
module.exports = __webpack_require__(0).Object.setPrototypeOf;
 }),
 (function(module, exports, __webpack_require__) {
var $export = __webpack_require__(3);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(135).set });
 }),
 (function(module, exports, __webpack_require__) {
var isObject = __webpack_require__(11);
var anObject = __webpack_require__(5);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? 
    function (test, buggy, set) {
      try {
        set = __webpack_require__(13)(Function.call, __webpack_require__(54).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
 }),
 (function(module, exports, __webpack_require__) {
module.exports = { "default": __webpack_require__(137), __esModule: true };
 }),
 (function(module, exports, __webpack_require__) {
__webpack_require__(138);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};
 }),
 (function(module, exports, __webpack_require__) {
var $export = __webpack_require__(3);
$export($export.S, 'Object', { create: __webpack_require__(38) });
 }),
 (function(module, exports, __webpack_require__) {
module.exports = { "default": __webpack_require__(140), __esModule: true };
 }),
 (function(module, exports, __webpack_require__) {
__webpack_require__(141);
var $Object = __webpack_require__(0).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};
 }),
 (function(module, exports, __webpack_require__) {
var toIObject = __webpack_require__(8);
var $getOwnPropertyDescriptor = __webpack_require__(54).f;
__webpack_require__(31)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadConfig = exports.dumpConfig = undefined;
var _entries = __webpack_require__(143);
var _entries2 = _interopRequireDefault(_entries);
var _getIterator2 = __webpack_require__(46);
var _getIterator3 = _interopRequireDefault(_getIterator2);
var _slicedToArray2 = __webpack_require__(17);
var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
var _promise = __webpack_require__(9);
var _promise2 = _interopRequireDefault(_promise);
var _regenerator = __webpack_require__(22);
var _regenerator2 = _interopRequireDefault(_regenerator);
var _asyncToGenerator2 = __webpack_require__(30);
var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
var senityCheck = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee6() {
    var _this = this;
    var verifyResults, ok;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            verifyResults = MANIFEST.map(function () {
              var _ref6 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee5(descriptor) {
                var rv;
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return _platform.GMAPI.getValue(descriptor.key);
                      case 2:
                        rv = _context5.sent;
                        return _context5.abrupt('return', descriptor.verify(rv));
                      case 4:
                      case 'end':
                        return _context5.stop();
                    }
                  }
                }, _callee5, _this);
              }));
              return function (_x) {
                return _ref6.apply(this, arguments);
              };
            }());
            _context6.next = 3;
            return _promise2.default.all(verifyResults);
          case 3:
            verifyResults = _context6.sent;
            ok = (0, _core.every)(verifyResults, function (v) {
              return v;
            });
            if (ok) {
              _context6.next = 8;
              break;
            }
            _context6.next = 8;
            return _platform.GMAPI.setValue('version', 0);
          case 8:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));
  return function senityCheck() {
    return _ref5.apply(this, arguments);
  };
}();
var migrate = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee7() {
    var currentVersion;
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _platform.GMAPI.getValue('version');
          case 2:
            currentVersion = _context7.sent;
            if (!(currentVersion !== 0 && !currentVersion)) {
              _context7.next = 5;
              break;
            }
            throw new _core.AdsBypasserError('invalid version');
          case 5:
            while (currentVersion < PATCHES.length) {
              PATCHES[currentVersion]();
              ++currentVersion;
            }
            _context7.next = 8;
            return _platform.GMAPI.setValue('version', currentVersion);
          case 8:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));
  return function migrate() {
    return _ref7.apply(this, arguments);
  };
}();
var loadConfig = function () {
  var _ref8 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee10() {
    return _regenerator2.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return senityCheck();
          case 2:
            _context10.next = 4;
            return migrate();
          case 4:
            (0, _dispatcher.register)({
              rule: {
                host: /^adsbypasser\.github\.io$/,
                path: /^\/configure\.html$/
              },
              ready: function () {
                var _ref9 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee9() {
                  var _this2 = this;
                  return _regenerator2.default.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.next = 2;
                          return waitForPage();
                        case 2:
                          _platform.usw.commit = function () {
                            var _ref10 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee8(data) {
                              var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _ref11, _ref12, k, v;
                              return _regenerator2.default.wrap(function _callee8$(_context8) {
                                while (1) {
                                  switch (_context8.prev = _context8.next) {
                                    case 0:
                                      _iteratorNormalCompletion = true;
                                      _didIteratorError = false;
                                      _iteratorError = undefined;
                                      _context8.prev = 3;
                                      _iterator = (0, _getIterator3.default)((0, _entries2.default)(data));
                                    case 5:
                                      if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                        _context8.next = 15;
                                        break;
                                      }
                                      _ref11 = _step.value;
                                      _ref12 = (0, _slicedToArray3.default)(_ref11, 2);
                                      k = _ref12[0];
                                      v = _ref12[1];
                                      _context8.next = 12;
                                      return _platform.GMAPI.setValue(k, v);
                                    case 12:
                                      _iteratorNormalCompletion = true;
                                      _context8.next = 5;
                                      break;
                                    case 15:
                                      _context8.next = 21;
                                      break;
                                    case 17:
                                      _context8.prev = 17;
                                      _context8.t0 = _context8['catch'](3);
                                      _didIteratorError = true;
                                      _iteratorError = _context8.t0;
                                    case 21:
                                      _context8.prev = 21;
                                      _context8.prev = 22;
                                      if (!_iteratorNormalCompletion && _iterator.return) {
                                        _iterator.return();
                                      }
                                    case 24:
                                      _context8.prev = 24;
                                      if (!_didIteratorError) {
                                        _context8.next = 27;
                                        break;
                                      }
                                      throw _iteratorError;
                                    case 27:
                                      return _context8.finish(24);
                                    case 28:
                                      return _context8.finish(21);
                                    case 29:
                                    case 'end':
                                      return _context8.stop();
                                  }
                                }
                              }, _callee8, _this2, [[3, 17, 21, 29], [22,, 24, 28]]);
                            }));
                            return function (_x2) {
                              return _ref10.apply(this, arguments);
                            };
                          }();
                          _context9.t0 = _platform.usw;
                          _context9.next = 6;
                          return _platform.GMAPI.getValue('version');
                        case 6:
                          _context9.t1 = _context9.sent;
                          _context9.next = 9;
                          return _platform.GMAPI.getValue('align_center');
                        case 9:
                          _context9.t2 = _context9.sent;
                          _context9.t3 = {
                            type: 'checkbox',
                            value: _context9.t2,
                            label: 'Align Center',
                            help: 'Align image to the center if possible. (default: enabled)'
                          };
                          _context9.next = 13;
                          return _platform.GMAPI.getValue('change_background');
                        case 13:
                          _context9.t4 = _context9.sent;
                          _context9.t5 = {
                            type: 'checkbox',
                            value: _context9.t4,
                            label: 'Change Background',
                            help: 'Use Firefox-like image background if possible. (default: enabled)'
                          };
                          _context9.next = 17;
                          return _platform.GMAPI.getValue('redirect_image');
                        case 17:
                          _context9.t6 = _context9.sent;
                          _context9.t7 = ['Directly open image link if possible. (default: enabled)', 'If disabled, redirection will only works on link shortener sites.'].join('<br/>\n');
                          _context9.t8 = {
                            type: 'checkbox',
                            value: _context9.t6,
                            label: 'Redirect Image',
                            help: _context9.t7
                          };
                          _context9.next = 22;
                          return _platform.GMAPI.getValue('scale_image');
                        case 22:
                          _context9.t9 = _context9.sent;
                          _context9.t10 = {
                            type: 'checkbox',
                            value: _context9.t9,
                            label: 'Scale Image',
                            help: 'When image loaded, scale it to fit window if possible. (default: enabled)'
                          };
                          _context9.next = 26;
                          return _platform.GMAPI.getValue('log_level');
                        case 26:
                          _context9.t11 = _context9.sent;
                          _context9.t12 = [[0, '0 (quiet)'], [1, '1 (default)'], [2, '2 (verbose)']];
                          _context9.t13 = ['Log level in developer console. (default: 1)', '0 will not print anything in console.', '1 will only print logs on affected sites.', '2 will print on any sites.'].join('<br/>\n');
                          _context9.t14 = {
                            type: 'select',
                            value: _context9.t11,
                            menu: _context9.t12,
                            label: 'Log Level',
                            help: _context9.t13
                          };
                          _context9.t15 = {
                            align_center: _context9.t3,
                            change_background: _context9.t5,
                            redirect_image: _context9.t8,
                            scale_image: _context9.t10,
                            log_level: _context9.t14
                          };
                          _context9.t16 = {
                            version: _context9.t1,
                            options: _context9.t15
                          };
                          _context9.t0.render.call(_context9.t0, _context9.t16);
                        case 33:
                        case 'end':
                          return _context9.stop();
                      }
                    }
                  }, _callee9, this);
                }));
                function ready() {
                  return _ref9.apply(this, arguments);
                }
                return ready;
              }()
            });
          case 5:
          case 'end':
            return _context10.stop();
        }
      }
    }, _callee10, this);
  }));
  return function loadConfig() {
    return _ref8.apply(this, arguments);
  };
}();
var dumpConfig = function () {
  var _ref13 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee12() {
    var _this3 = this;
    var rv, o, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _ref15, _ref16, k, v;
    return _regenerator2.default.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            rv = MANIFEST.map(function () {
              var _ref14 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee11(descriptor) {
                return _regenerator2.default.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        _context11.t0 = descriptor.key;
                        _context11.next = 3;
                        return _platform.GMAPI.getValue(descriptor.key);
                      case 3:
                        _context11.t1 = _context11.sent;
                        return _context11.abrupt('return', [_context11.t0, _context11.t1]);
                      case 5:
                      case 'end':
                        return _context11.stop();
                    }
                  }
                }, _callee11, _this3);
              }));
              return function (_x3) {
                return _ref14.apply(this, arguments);
              };
            }());
            _context12.next = 3;
            return _promise2.default.all(rv);
          case 3:
            rv = _context12.sent;
            o = {};
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context12.prev = 8;
            for (_iterator2 = (0, _getIterator3.default)(rv); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              _ref15 = _step2.value;
              _ref16 = (0, _slicedToArray3.default)(_ref15, 2);
              k = _ref16[0];
              v = _ref16[1];
              o[k] = v;
            }
            _context12.next = 16;
            break;
          case 12:
            _context12.prev = 12;
            _context12.t0 = _context12['catch'](8);
            _didIteratorError2 = true;
            _iteratorError2 = _context12.t0;
          case 16:
            _context12.prev = 16;
            _context12.prev = 17;
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          case 19:
            _context12.prev = 19;
            if (!_didIteratorError2) {
              _context12.next = 22;
              break;
            }
            throw _iteratorError2;
          case 22:
            return _context12.finish(19);
          case 23:
            return _context12.finish(16);
          case 24:
            return _context12.abrupt('return', o);
          case 25:
          case 'end':
            return _context12.stop();
        }
      }
    }, _callee12, this, [[8, 12, 16, 24], [17,, 19, 23]]);
  }));
  return function dumpConfig() {
    return _ref13.apply(this, arguments);
  };
}();
var _core = __webpack_require__(4);
var _dispatcher = __webpack_require__(56);
var _platform = __webpack_require__(24);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var MANIFEST = [{
  key: 'version',
  default_: 0,
  verify: function verify(v) {
    return typeof v === 'number' && v >= 0;
  },
  normalize: toNumber
}, {
  key: 'align_center',
  default_: true,
  verify: isBoolean,
  normalize: toBoolean
}, {
  key: 'change_background',
  default_: true,
  verify: isBoolean,
  normalize: toBoolean
}, {
  key: 'redirect_image',
  default_: true,
  verify: isBoolean,
  normalize: toBoolean
}, {
  key: 'scale_image',
  default_: true,
  verify: isBoolean,
  normalize: toBoolean
}, {
  key: 'log_level',
  default_: 1,
  verify: function verify(v) {
    return typeof v === 'number' && v >= 0 && v <= 2;
  },
  normalize: toNumber
}];
var PATCHES = [(0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee() {
  var alignCenter, changeBackground, scaleImage, redirectImage, ac;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _platform.GMAPI.getValue('align_center');
        case 2:
          alignCenter = _context.sent;
          _context.next = 5;
          return _platform.GMAPI.getValue('change_background');
        case 5:
          changeBackground = _context.sent;
          _context.next = 8;
          return _platform.GMAPI.getValue('scale_image');
        case 8:
          scaleImage = _context.sent;
          _context.next = 11;
          return _platform.GMAPI.getValue('redirect_image');
        case 11:
          redirectImage = _context.sent;
          ac = typeof alignCenter === 'boolean';
          if (!(typeof changeBackground !== 'boolean')) {
            _context.next = 16;
            break;
          }
          _context.next = 16;
          return _platform.GMAPI.setValue('change_background', ac ? alignCenter : true);
        case 16:
          if (!(typeof scaleImage !== 'boolean')) {
            _context.next = 19;
            break;
          }
          _context.next = 19;
          return _platform.GMAPI.setValue('scale_image', ac ? alignCenter : true);
        case 19:
          if (ac) {
            _context.next = 22;
            break;
          }
          _context.next = 22;
          return _platform.GMAPI.setValue('align_center', true);
        case 22:
          if (!(typeof redirectImage !== 'boolean')) {
            _context.next = 25;
            break;
          }
          _context.next = 25;
          return _platform.GMAPI.setValue('redirect_image', true);
        case 25:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
})), (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee2() {
  var externalServerSupport;
  return _regenerator2.default.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _platform.GMAPI.getValue('external_server_support');
        case 2:
          externalServerSupport = _context2.sent;
          if (!(typeof externalServerSupport !== 'boolean')) {
            _context2.next = 6;
            break;
          }
          _context2.next = 6;
          return _platform.GMAPI.setValue('external_server_support', false);
        case 6:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, undefined);
})), (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee3() {
  var logLevel;
  return _regenerator2.default.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _platform.GMAPI.getValue('log_level');
        case 2:
          logLevel = _context3.sent;
          if (!(typeof logLevel !== 'number')) {
            _context3.next = 6;
            break;
          }
          _context3.next = 6;
          return _platform.GMAPI.setValue('log_level', 1);
        case 6:
        case 'end':
          return _context3.stop();
      }
    }
  }, _callee3, undefined);
})), (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee4() {
  return _regenerator2.default.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _platform.GMAPI.deleteValue('external_server_support');
        case 2:
        case 'end':
          return _context4.stop();
      }
    }
  }, _callee4, undefined);
}))];
function isBoolean(v) {
  return typeof v === 'boolean';
}
function toBoolean(v) {
  return !!v;
}
function toNumber(v) {
  return parseInt(v, 10);
}
function waitForPage() {
  return new _promise2.default(function (resolve) {
    var i = setInterval(function () {
      if (_platform.usw.render) {
        clearInterval(i);
        resolve();
      }
    }, 50);
  });
}
exports.dumpConfig = dumpConfig;
exports.loadConfig = loadConfig;
 }),
 (function(module, exports, __webpack_require__) {
module.exports = { "default": __webpack_require__(144), __esModule: true };
 }),
 (function(module, exports, __webpack_require__) {
__webpack_require__(145);
module.exports = __webpack_require__(0).Object.entries;
 }),
 (function(module, exports, __webpack_require__) {
var $export = __webpack_require__(3);
var $entries = __webpack_require__(146)(true);
$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});
 }),
 (function(module, exports, __webpack_require__) {
var getKeys = __webpack_require__(16);
var toIObject = __webpack_require__(8);
var isEnum = __webpack_require__(23).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
var _promise = __webpack_require__(9);
var _promise2 = _interopRequireDefault(_promise);
var _slicedToArray2 = __webpack_require__(17);
var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
var _regenerator = __webpack_require__(22);
var _regenerator2 = _interopRequireDefault(_regenerator);
var _asyncToGenerator2 = __webpack_require__(30);
var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
var _ADSBYPASSER_NAMESPACE__ = __webpack_require__(148);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^akoam\.com$/,
    path: /^\/download\//
  },
  start: function () {
    var _ref = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee() {
      var locationLink, data;
      return _regenerator2.default.wrap(function _callee$(_context) {
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
    var _ref2 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee2() {
      var b;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
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
    var _ref3 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee3() {
      var f;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
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
    var _ref4 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee4() {
      var matches;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
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
      var _ref5 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee5() {
        var f, iIn, _ref6, _ref7, p, l;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
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
                _ref7 = (0, _slicedToArray3.default)(_ref6, 3);
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
    return new _promise2.default(function (resolve) {
      var observer = new MutationObserver(function (mutations) {
        var _$find = _ADSBYPASSER_NAMESPACE__._.find(mutations, fn),
            _$find2 = (0, _slicedToArray3.default)(_$find, 3),
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
    var _ref8 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee6() {
      var downloadPage;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
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
    var _ref9 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee7() {
      var m;
      return _regenerator2.default.wrap(function _callee7$(_context7) {
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
    var _ref10 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee8() {
      var c;
      return _regenerator2.default.wrap(function _callee8$(_context8) {
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
    var _ref11 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee9() {
      var a;
      return _regenerator2.default.wrap(function _callee9$(_context9) {
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
    var _ref12 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee10() {
      return _regenerator2.default.wrap(function _callee10$(_context10) {
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
    var _ref13 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee11() {
      'use strict';
      var matches, slug, hoster, response, respJSON;
      return _regenerator2.default.wrap(function _callee11$(_context11) {
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
    var _ref14 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee12() {
      return _regenerator2.default.wrap(function _callee12$(_context12) {
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
    var _ref15 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee13() {
      var l;
      return _regenerator2.default.wrap(function _callee13$(_context13) {
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
    path: /^\/downlink\.php$/
  },
  ready: function () {
    var _ref16 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee14() {
      var a;
      return _regenerator2.default.wrap(function _callee14$(_context14) {
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
    var _ref17 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee15() {
      var f;
      return _regenerator2.default.wrap(function _callee15$(_context15) {
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
    var _ref18 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee16(m) {
      return _regenerator2.default.wrap(function _callee16$(_context16) {
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
    var _ref19 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee17() {
      var a;
      return _regenerator2.default.wrap(function _callee17$(_context17) {
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
    host: [/^openload\.co$/, /^oload\.(stream|info|tv)$/],
    path: /^\/f\/.*/
  },
  start: function () {
    var _ref20 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee18() {
      return _regenerator2.default.wrap(function _callee18$(_context18) {
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
    var _ref21 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee19() {
      var timer, dlCtn, dlBtn, ePath, videoCtn, overlay;
      return _regenerator2.default.wrap(function _callee19$(_context19) {
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
                iframe.style.display = 'none';
                document.body.appendChild(iframe);
              });
              _ADSBYPASSER_NAMESPACE__._.info(window.location + ' -> ' + dlBtn.href);
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
    var _ref22 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee20() {
      return _regenerator2.default.wrap(function _callee20$(_context20) {
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
    var _ref23 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee21() {
      var f;
      return _regenerator2.default.wrap(function _callee21$(_context21) {
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
    var _ref24 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee22() {
      var f;
      return _regenerator2.default.wrap(function _callee22$(_context22) {
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
    var _ref25 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee23() {
      var d;
      return _regenerator2.default.wrap(function _callee23$(_context23) {
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
    var _ref26 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee24(m) {
      return _regenerator2.default.wrap(function _callee24$(_context24) {
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
    var _ref27 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee25() {
      var directUrl;
      return _regenerator2.default.wrap(function _callee25$(_context25) {
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
    var _ref28 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee26() {
      var a;
      return _regenerator2.default.wrap(function _callee26$(_context26) {
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
    var _ref29 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee27() {
      var f;
      return _regenerator2.default.wrap(function _callee27$(_context27) {
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
    var _ref30 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee28() {
      var i;
      return _regenerator2.default.wrap(function _callee28$(_context28) {
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
    var _ref31 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee29() {
      return _regenerator2.default.wrap(function _callee29$(_context29) {
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
    var _ref32 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee30() {
      var s;
      return _regenerator2.default.wrap(function _callee30$(_context30) {
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
      var _ref33 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee31(m) {
        var redirectLink;
        return _regenerator2.default.wrap(function _callee31$(_context31) {
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
      var _ref34 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee32() {
        var script, url;
        return _regenerator2.default.wrap(function _callee32$(_context32) {
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
      host: [/^(www\.)?adb\.ug$/, /^(www\.)?lynk\.my$/, /^(www\.)?adyou\.(co|me)$/],
      path: /^(?!\/(?:privacy|terms|contact(\/.*)?|#.*)?$).*$/
    },
    ready: function () {
      var _ref35 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee33() {
        var m, args;
        return _regenerator2.default.wrap(function _callee33$(_context33) {
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
    return new _promise2.default(function (resolve) {
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
      var _ref36 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee34(m) {
        var url;
        return _regenerator2.default.wrap(function _callee34$(_context34) {
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
      var _ref37 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee35(m) {
        var url;
        return _regenerator2.default.wrap(function _callee35$(_context35) {
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
      var _ref38 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee36() {
        var token, url;
        return _regenerator2.default.wrap(function _callee36$(_context36) {
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
      var _ref39 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee37() {
        var h, b, token;
        return _regenerator2.default.wrap(function _callee37$(_context37) {
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
    return new _promise2.default(function (resolve) {
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
    return new _promise2.default(function (resolve) {
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
    var _ref40 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee38() {
      var f;
      return _regenerator2.default.wrap(function _callee38$(_context38) {
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
    var _ref41 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee39() {
      var promise, url;
      return _regenerator2.default.wrap(function _callee39$(_context39) {
        while (1) {
          switch (_context39.prev = _context39.next) {
            case 0:
              promise = new _promise2.default(function (resolve) {
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
    var _ref42 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee40() {
      var m;
      return _regenerator2.default.wrap(function _callee40$(_context40) {
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
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^adlock\.org$/
  },
  ready: function () {
    var _ref43 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee41() {
      var a;
      return _regenerator2.default.wrap(function _callee41$(_context41) {
        while (1) {
          switch (_context41.prev = _context41.next) {
            case 0:
              a = _ADSBYPASSER_NAMESPACE__.$.$('#xre a.xxr, #downloadButton1');
              if (!a) {
                _context41.next = 5;
                break;
              }
              _context41.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 4:
              return _context41.abrupt('return');
            case 5:
              a = _ADSBYPASSER_NAMESPACE__.$.window.fileLocation;
              if (!a) {
                _context41.next = 9;
                break;
              }
              _context41.next = 9;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a);
            case 9:
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
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?adlot\.us$/
  },
  ready: function () {
    var _ref44 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee42() {
      var script, p, opt, tmp;
      return _regenerator2.default.wrap(function _callee42$(_context42) {
        while (1) {
          switch (_context42.prev = _context42.next) {
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
              _context42.next = 8;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('', {
                path: opt
              });
            case 8:
            case 'end':
              return _context42.stop();
          }
        }
      }, _callee42, this);
    }));
    function ready() {
      return _ref44.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^admy\.link$/
  },
  ready: function () {
    var _ref45 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee43() {
      var f;
      return _regenerator2.default.wrap(function _callee43$(_context43) {
        while (1) {
          switch (_context43.prev = _context43.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('form.edit_link');
              f.submit();
            case 2:
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
    host: /^(www\.)?ah-informatique\.com$/,
    path: /^\/ZipUrl/
  },
  ready: function () {
    var _ref46 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee44() {
      var a;
      return _regenerator2.default.wrap(function _callee44$(_context44) {
        while (1) {
          switch (_context44.prev = _context44.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#zip3 a');
              _context44.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
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
(function () {
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^ah\.pe$/
    },
    ready: function () {
      var _ref47 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee45() {
        var script, path;
        return _regenerator2.default.wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                script = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts('eval');
                script = decodeScript(script);
                script = decodeScript(script);
                script = decodeScript(script);
                path = script.match(/([^;= ]+)=([^+ ;]+)\+"\."\+([^+ ]+)\+"\."\+([^; ]+);/);
                if (path) {
                  _context45.next = 7;
                  break;
                }
                throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('script changed');
              case 7:
                if (!(typeof _ADSBYPASSER_NAMESPACE__.$.window[path[2]] === 'undefined')) {
                  _context45.next = 10;
                  break;
                }
                _ADSBYPASSER_NAMESPACE__._.info('recaptcha');
                return _context45.abrupt('return');
              case 10:
                path = [_ADSBYPASSER_NAMESPACE__.$.window[path[2]], _ADSBYPASSER_NAMESPACE__.$.window[path[3]], _ADSBYPASSER_NAMESPACE__.$.window[path[4]]].join('.');
                _context45.next = 13;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(path);
              case 13:
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
    var _ref48 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee46() {
      var l;
      return _regenerator2.default.wrap(function _callee46$(_context46) {
        while (1) {
          switch (_context46.prev = _context46.next) {
            case 0:
              l = (0, _ADSBYPASSER_NAMESPACE__.$)('iframe#yourls-frame');
              _context46.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l.src);
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
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^al\.ly$/, /^ally\.sh$/]
  },
  ready: function () {
    var _ref49 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee47() {
      var i;
      return _regenerator2.default.wrap(function _callee47$(_context47) {
        while (1) {
          switch (_context47.prev = _context47.next) {
            case 0:
              i = _ADSBYPASSER_NAMESPACE__.$.$('#html_element');
              if (!i) {
                _context47.next = 5;
                break;
              }
              _ADSBYPASSER_NAMESPACE__.$.remove('#messa');
              i.classList.remove('hidden');
              return _context47.abrupt('return');
            case 5:
              i = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/"href","([^"]+)" \+ hash\)\.remove/);
              if (i) {
                _context47.next = 9;
                break;
              }
              _ADSBYPASSER_NAMESPACE__._.warn('site changed');
              return _context47.abrupt('return');
            case 9:
              i = i[1] + location.hash;
              _ADSBYPASSER_NAMESPACE__.$.openLink(i);
            case 11:
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
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^(www\.)?allkeyshop\.com$/, /^cshort\.org$/]
  },
  ready: function () {
    var _ref50 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee48() {
      var matches;
      return _regenerator2.default.wrap(function _callee48$(_context48) {
        while (1) {
          switch (_context48.prev = _context48.next) {
            case 0:
              matches = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/window\.location\.href = "([^"]+)"/);
              matches = matches[1];
              _ADSBYPASSER_NAMESPACE__.$.nuke(matches);
              _context48.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(matches);
            case 5:
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
    host: /^anonymbucks\.com$/
  },
  ready: function () {
    var _ref51 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee49() {
      var a;
      return _regenerator2.default.wrap(function _callee49$(_context49) {
        while (1) {
          switch (_context49.prev = _context49.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#boton-continuar');
              a.click();
            case 2:
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
(function () {
  var run = function () {
    var _ref58 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee56(dirtyFix) {
      var result;
      return _regenerator2.default.wrap(function _callee56$(_context56) {
        while (1) {
          switch (_context56.prev = _context56.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              result = searchScript(true);
              if (result.direct) {
                _context56.next = 6;
                break;
              }
              knockServer(result.script, dirtyFix);
              _context56.next = 12;
              break;
            case 6:
              result = result.script.match(/top\.location\.href='([^']+)'/);
              if (result) {
                _context56.next = 9;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('script changed');
            case 9:
              result = result[1];
              _context56.next = 12;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(result);
            case 12:
            case 'end':
              return _context56.stop();
          }
        }
      }, _callee56, this);
    }));
    return function run(_x7) {
      return _ref58.apply(this, arguments);
    };
  }();
  var ajaxPattern = /\$.post\('([^']*)'[^{]+(\{\s*opt:\s*'make_log'[^}]+\}\s*\}),/i;
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: [/^bc\.vc$/, /^linc\.ml$/],
      path: /^.+(https?:\/\/.+)$/
    },
    start: function () {
      var _ref52 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee50(m) {
        return _regenerator2.default.wrap(function _callee50$(_context50) {
          while (1) {
            switch (_context50.prev = _context50.next) {
              case 0:
                _context50.next = 2;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(m.path[1] + document.location.search + document.location.hash);
              case 2:
              case 'end':
                return _context50.stop();
            }
          }
        }, _callee50, this);
      }));
      function start(_x6) {
        return _ref52.apply(this, arguments);
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
      var _ref53 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee51() {
        var token, time, url, rv;
        return _regenerator2.default.wrap(function _callee51$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                token = findAJAXToken();
                time = fakeAJAXToken();
                url = '/fly/ajax.php?wds=' + token.wds + '&time=' + time;
                _context51.next = 6;
                return _ADSBYPASSER_NAMESPACE__._.wait(5000);
              case 6:
                _context51.next = 8;
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
              case 8:
                rv = _context51.sent;
                rv = JSON.parse(rv);
                if (!rv.error) {
                  _context51.next = 12;
                  break;
                }
                throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('auth error');
              case 12:
                _context51.next = 14;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(rv.message.url);
              case 14:
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
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^adcrun\.ch$/,
      path: /^\/\w+$/
    },
    ready: function () {
      var _ref54 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee52() {
        var rSurveyLink, l;
        return _regenerator2.default.wrap(function _callee52$(_context52) {
          while (1) {
            switch (_context52.prev = _context52.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('.user_content');
                rSurveyLink = /http\.open\("GET", "api_ajax\.php\?sid=\d*&ip=[^&]*&longurl=([^"]+)" \+ first_time, (?:true|false)\);/;
                l = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(rSurveyLink);
                if (!l) {
                  _context52.next = 7;
                  break;
                }
                _context52.next = 6;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(l[1]);
              case 6:
                return _context52.abrupt('return');
              case 7:
                _context52.next = 9;
                return run(true);
              case 9:
              case 'end':
                return _context52.stop();
            }
          }
        }, _callee52, this);
      }));
      function ready() {
        return _ref54.apply(this, arguments);
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
      var _ref55 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee53() {
        var a, f;
        return _regenerator2.default.wrap(function _callee53$(_context53) {
          while (1) {
            switch (_context53.prev = _context53.next) {
              case 0:
                a = _ADSBYPASSER_NAMESPACE__.$.$('div.fly_head a.close');
                f = _ADSBYPASSER_NAMESPACE__.$.$('iframe.fly_frame');
                if (!(a && f)) {
                  _context53.next = 7;
                  break;
                }
                _context53.next = 5;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(f.src);
              case 5:
                _context53.next = 9;
                break;
              case 7:
                _context53.next = 9;
                return run();
              case 9:
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
      host: /^ad5\.eu$/,
      path: /^\/[^.]+$/
    },
    ready: function () {
      var _ref56 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee54() {
        var s, m, tz, d;
        return _regenerator2.default.wrap(function _callee54$(_context54) {
          while (1) {
            switch (_context54.prev = _context54.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                s = searchScript(true);
                m = s.script.match(/(<form name="form1"method="post".*(?!<\\form>)<\/form>)/);
                if (m) {
                  _context54.next = 5;
                  break;
                }
                return _context54.abrupt('return');
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
      host: /^tr5\.in$/,
      path: /^\/.+/
    },
    ready: function () {
      var _ref57 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee55() {
        return _regenerator2.default.wrap(function _callee55$(_context55) {
          while (1) {
            switch (_context55.prev = _context55.next) {
              case 0:
                _context55.next = 2;
                return run(true);
              case 2:
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
    var _ref59 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee57(m) {
      return _regenerator2.default.wrap(function _callee57$(_context57) {
        while (1) {
          switch (_context57.prev = _context57.next) {
            case 0:
              _context57.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('http://' + m.path[1]);
            case 2:
            case 'end':
              return _context57.stop();
          }
        }
      }, _callee57, this);
    }));
    function start(_x8) {
      return _ref59.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: 'http://www.bild.me/bild.php?file=*',
  ready: function () {
    var _ref60 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee58() {
      var i;
      return _regenerator2.default.wrap(function _callee58$(_context58) {
        while (1) {
          switch (_context58.prev = _context58.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('#Bild');
              _context58.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(i.src);
            case 3:
            case 'end':
              return _context58.stop();
          }
        }
      }, _callee58, this);
    }));
    function ready() {
      return _ref60.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: 'http://bildr.no/view/*',
  ready: function () {
    var _ref61 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee59() {
      var i;
      return _regenerator2.default.wrap(function _callee59$(_context59) {
        while (1) {
          switch (_context59.prev = _context59.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('img.bilde');
              _context59.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(i.src);
            case 3:
            case 'end':
              return _context59.stop();
          }
        }
      }, _callee59, this);
    }));
    function ready() {
      return _ref61.apply(this, arguments);
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
    var _ref62 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee60(m) {
      var direct_link;
      return _regenerator2.default.wrap(function _callee60$(_context60) {
        while (1) {
          switch (_context60.prev = _context60.next) {
            case 0:
              direct_link = window.atob(m.path[1]);
              _context60.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(direct_link);
            case 3:
            case 'end':
              return _context60.stop();
          }
        }
      }, _callee60, this);
    }));
    function start(_x9) {
      return _ref62.apply(this, arguments);
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
    var _ref63 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee61() {
      var m, response, l;
      return _regenerator2.default.wrap(function _callee61$(_context61) {
        while (1) {
          switch (_context61.prev = _context61.next) {
            case 0:
              m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/'\/ajax_link\.php',\s*\{key:\s*'(\w+)',\s*url:\s*'(\d+)',\s*t:\s*'(\d+)',\s*r:\s*'(\w*)'\}/);
              if (m) {
                _context61.next = 3;
                break;
              }
              return _context61.abrupt('return');
            case 3:
              _context61.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.post('/ajax_link.php', {
                key: m[1],
                url: m[2],
                t: m[3],
                r: m[4]
              });
            case 5:
              response = _context61.sent;
              l = response.match(/window(?:.top.window)\.location="([^"]+)"/);
              _context61.next = 9;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l[1]);
            case 9:
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
    host: /^(www\.)?boxcash\.net$/,
    path: /^\/redirect\.html$/,
    query: /url=(.+)$/
  },
  start: function () {
    var _ref64 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee62(m) {
      var l;
      return _regenerator2.default.wrap(function _callee62$(_context62) {
        while (1) {
          switch (_context62.prev = _context62.next) {
            case 0:
              l = decodeURIComponent(m.query[1]);
              _context62.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l);
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
    host: /^(www\.)?(buz|vzt)url\.com$/
  },
  ready: function () {
    var _ref65 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee63() {
      var frame;
      return _regenerator2.default.wrap(function _callee63$(_context63) {
        while (1) {
          switch (_context63.prev = _context63.next) {
            case 0:
              frame = (0, _ADSBYPASSER_NAMESPACE__.$)('frame[scrolling=yes]');
              _context63.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(frame.src);
            case 3:
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
    host: /^(cf|ex|xt)\d\.(me|co)$/
  },
  ready: function () {
    var _ref66 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee64() {
      var a;
      return _regenerator2.default.wrap(function _callee64$(_context64) {
        while (1) {
          switch (_context64.prev = _context64.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#skip_button');
              _context64.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 4:
            case 'end':
              return _context64.stop();
          }
        }
      }, _callee64, this);
    }));
    function ready() {
      return _ref66.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^catcut\.net$/
  },
  ready: function () {
    var _ref67 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee65() {
      var a;
      return _regenerator2.default.wrap(function _callee65$(_context65) {
        while (1) {
          switch (_context65.prev = _context65.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#rbs');
              _context65.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
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
    host: /^cf\.ly$/,
    path: /^\/[^/]+$/
  },
  start: function () {
    var _ref68 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee66(m) {
      return _regenerator2.default.wrap(function _callee66$(_context66) {
        while (1) {
          switch (_context66.prev = _context66.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              _context66.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('/skip' + m.path[0]);
            case 3:
            case 'end':
              return _context66.stop();
          }
        }
      }, _callee66, this);
    }));
    function start(_x11) {
      return _ref68.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?cli\.gs$/
  },
  ready: function () {
    var _ref69 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee67() {
      var a;
      return _regenerator2.default.wrap(function _callee67$(_context67) {
        while (1) {
          switch (_context67.prev = _context67.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a.RedirectLink');
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
    host: /^(www\.)?clictune\.com$/,
    path: /^\/[^/]+$/
  },
  ready: function () {
    var _ref70 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee68() {
      var matches, url;
      return _regenerator2.default.wrap(function _callee68$(_context68) {
        while (1) {
          switch (_context68.prev = _context68.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              matches = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/<a href="http:\/\/(?:www.)?clictune\.com\/link\/redirect\/?url=([^&]+)&/);
              url = decodeURIComponent(matches[1]);
              _context68.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 5:
            case 'end':
              return _context68.stop();
          }
        }
      }, _callee68, this);
    }));
    function ready() {
      return _ref70.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^clk\.im$/
  },
  ready: function () {
    var _ref71 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee69() {
      var matches;
      return _regenerator2.default.wrap(function _callee69$(_context69) {
        while (1) {
          switch (_context69.prev = _context69.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              matches = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/\$\("\.countdown"\)\.attr\("href","([^"]+)"\)/);
              _context69.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(matches[1]);
            case 4:
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
    host: /^cocoleech\.com$/
  },
  ready: function () {
    var _ref72 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee70() {
      var a;
      return _regenerator2.default.wrap(function _callee70$(_context70) {
        while (1) {
          switch (_context70.prev = _context70.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#download');
              _context70.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
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
(function () {
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: [/^link\.animagz\.org$/, /^(coeg|disingkat|gunting)\.in$/, /^www\.telondasmu\.com$/],
      path: /^\/\w+$/
    },
    ready: function () {
      var _ref73 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee71(m) {
        var mapper, b64;
        return _regenerator2.default.wrap(function _callee71$(_context71) {
          while (1) {
            switch (_context71.prev = _context71.next) {
              case 0:
                mapper = hostMapper(m.host[0]);
                b64 = mapper().match(/\?r=(\w+={0,2}?)/);
                _context71.next = 4;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(atob(b64[1]));
              case 4:
              case 'end':
                return _context71.stop();
            }
          }
        }, _callee71, this);
      }));
      function ready(_x12) {
        return _ref73.apply(this, arguments);
      }
      return ready;
    }()
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^sipkur\.net$/,
      path: [/^\/\w+$/, /^\/menujulink\//]
    },
    ready: function () {
      var _ref74 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee72() {
        var d;
        return _regenerator2.default.wrap(function _callee72$(_context72) {
          while (1) {
            switch (_context72.prev = _context72.next) {
              case 0:
                d = (0, _ADSBYPASSER_NAMESPACE__.$)('#testapk > div');
                d = d.onclick.toString();
                d = d.match(/window\.open\('([^']+)'/);
                _context72.next = 5;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(d[1]);
              case 5:
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
    var _ref75 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee73() {
      var a;
      return _regenerator2.default.wrap(function _callee73$(_context73) {
        while (1) {
          switch (_context73.prev = _context73.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a#btn-main, a.btn.btn-block.btn-warning, a.btn.btn-block.btn-success');
              _context73.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context73.stop();
          }
        }
      }, _callee73, this);
    }));
    function ready() {
      return _ref75.apply(this, arguments);
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
    var _ref76 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee74(m) {
      var host, param, mainFrameContent, docMainFrame, rExtractLink;
      return _regenerator2.default.wrap(function _callee74$(_context74) {
        while (1) {
          switch (_context74.prev = _context74.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              host = 'http://cur.lv/redirect_curlv.php';
              param = m.host[1] === undefined ? {
                code: m.path[1]
              } : {
                zone: m.host[1],
                name: m.path[1]
              };
              _context74.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.get(host, param);
            case 5:
              mainFrameContent = _context74.sent;
              docMainFrame = null;
              _context74.prev = 7;
              docMainFrame = _ADSBYPASSER_NAMESPACE__.$.toDOM(mainFrameContent);
              _context74.next = 14;
              break;
            case 11:
              _context74.prev = 11;
              _context74.t0 = _context74['catch'](7);
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
              return _context74.stop();
          }
        }
      }, _callee74, this, [[7, 11]]);
    }));
    function ready(_x13) {
      return _ref76.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^comyonet\.com$/
  },
  ready: function () {
    var _ref77 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee75() {
      var input;
      return _regenerator2.default.wrap(function _callee75$(_context75) {
        while (1) {
          switch (_context75.prev = _context75.next) {
            case 0:
              input = (0, _ADSBYPASSER_NAMESPACE__.$)('input[name="enter"]');
              input.click();
            case 2:
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
    host: /^(www\.)?cvc\.la$/,
    path: /^\/\w+$/
  },
  start: function () {
    var _ref78 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee76() {
      var text, matches;
      return _regenerator2.default.wrap(function _callee76$(_context76) {
        while (1) {
          switch (_context76.prev = _context76.next) {
            case 0:
              _context76.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.post(document.location.href, {
                hidden: 24, 
                image: ' '
              });
            case 2:
              text = _context76.sent;
              matches = text.match(/window\.location\.replace\('([^']+)'\);/);
              _context76.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(matches[1]);
            case 6:
            case 'end':
              return _context76.stop();
          }
        }
      }, _callee76, this);
    }));
    function start() {
      return _ref78.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?dapat\.in$/
  },
  ready: function () {
    var _ref79 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee77() {
      var f;
      return _regenerator2.default.wrap(function _callee77$(_context77) {
        while (1) {
          switch (_context77.prev = _context77.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('iframe[name=pagetext]');
              _context77.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f.src);
            case 3:
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
    host: /^(www\.)?dd\.ma$/
  },
  ready: function () {
    var _ref80 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee78() {
      var i, a;
      return _regenerator2.default.wrap(function _callee78$(_context78) {
        while (1) {
          switch (_context78.prev = _context78.next) {
            case 0:
              i = _ADSBYPASSER_NAMESPACE__.$.$('#mainframe');
              if (!i) {
                _context78.next = 5;
                break;
              }
              _context78.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(i.src);
            case 4:
              return _context78.abrupt('return');
            case 5:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#btn_open a');
              _context78.next = 8;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 8:
            case 'end':
              return _context78.stop();
          }
        }
      }, _callee78, this);
    }));
    function ready() {
      return _ref80.apply(this, arguments);
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
    var _ref81 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee79(m) {
      return _regenerator2.default.wrap(function _callee79$(_context79) {
        while (1) {
          switch (_context79.prev = _context79.next) {
            case 0:
              _context79.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m.query[1]);
            case 2:
            case 'end':
              return _context79.stop();
          }
        }
      }, _callee79, this);
    }));
    function start(_x14) {
      return _ref81.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^dikit\.in$/
  },
  ready: function () {
    var _ref82 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee80() {
      var a;
      return _regenerator2.default.wrap(function _callee80$(_context80) {
        while (1) {
          switch (_context80.prev = _context80.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.disclaimer a');
              _context80.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 4:
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
    host: /^durl\.me$/
  },
  ready: function () {
    var _ref83 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee81() {
      var a;
      return _regenerator2.default.wrap(function _callee81$(_context81) {
        while (1) {
          switch (_context81.prev = _context81.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a[class="proceedBtn"]');
              _context81.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context81.stop();
          }
        }
      }, _callee81, this);
    }));
    function ready() {
      return _ref83.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^easyurl\.net$/, /^(atu|clickthru|redirects|readthis)\.ca$/, /^goshrink\.com$/]
  },
  ready: function () {
    var _ref84 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee82() {
      var f;
      return _regenerator2.default.wrap(function _callee82$(_context82) {
        while (1) {
          switch (_context82.prev = _context82.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('frame[name=main]');
              _context82.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f.src);
            case 3:
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
    host: /^elde\.me$/
  },
  ready: function () {
    var _ref85 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee83() {
      var a;
      return _regenerator2.default.wrap(function _callee83$(_context83) {
        while (1) {
          switch (_context83.prev = _context83.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe:not([name=undefined])');
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#modal-alert');
              a.style.display = 'block';
              a.style.top = 0;
              a.style.left = 0;
            case 5:
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
    host: [/^ethi\.in$/, /^st\.wardhanime\.net$/],
    path: /^\/i\/\d+$/
  },
  ready: function () {
    var _ref86 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee84() {
      var a;
      return _regenerator2.default.wrap(function _callee84$(_context84) {
        while (1) {
          switch (_context84.prev = _context84.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#wrapper > [class^="tombo"] > a[target="_blank"]');
              _context84.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
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
    host: /^(www\.)?filoops\.info$/
  },
  ready: function () {
    var _ref87 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee85() {
      var a;
      return _regenerator2.default.wrap(function _callee85$(_context85) {
        while (1) {
          switch (_context85.prev = _context85.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#text > center a, #text > div[align=center] a');
              _context85.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
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
    host: /^fit\.sh$/
  },
  ready: function () {
    var _ref88 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee86() {
      var m, interLink;
      return _regenerator2.default.wrap(function _callee86$(_context86) {
        while (1) {
          switch (_context86.prev = _context86.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('.container-body');
              m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/token="([^"]+)"/);
              if (m) {
                _context86.next = 4;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('site changed');
            case 4:
              m = m[1];
              interLink = '/go/' + m + '?fa=15466&a=' + window.location.hash.substr(1);
              _context86.next = 8;
              return _ADSBYPASSER_NAMESPACE__._.wait(6 * 1000);
            case 8:
              _context86.next = 10;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(interLink);
            case 10:
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
    host: /^(www\.)?fiuxy\.co$/,
    path: /^\/links?\/$/
  },
  ready: function () {
    var _ref89 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee87() {
      return _regenerator2.default.wrap(function _callee87$(_context87) {
        while (1) {
          switch (_context87.prev = _context87.next) {
            case 0:
              _context87.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink((0, _ADSBYPASSER_NAMESPACE__.$)('a.btn.a').href);
            case 2:
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
    host: /^(www\.)?fundurl\.com$/,
    query: /i=([^&]+)/
  },
  start: function () {
    var _ref90 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee88(m) {
      return _regenerator2.default.wrap(function _callee88$(_context88) {
        while (1) {
          switch (_context88.prev = _context88.next) {
            case 0:
              _context88.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m.query[1]);
            case 2:
            case 'end':
              return _context88.stop();
          }
        }
      }, _callee88, this);
    }));
    function start(_x15) {
      return _ref90.apply(this, arguments);
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
    var _ref91 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee89() {
      var f;
      return _regenerator2.default.wrap(function _callee89$(_context89) {
        while (1) {
          switch (_context89.prev = _context89.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('iframe[name=fpage3]');
              _context89.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f.src);
            case 3:
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
      var _ref92 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee90(m) {
        var l;
        return _regenerator2.default.wrap(function _callee90$(_context90) {
          while (1) {
            switch (_context90.prev = _context90.next) {
              case 0:
                l = m.path[1] + m.query[1] + m.hash[1];
                _context90.next = 3;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(l);
              case 3:
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
      host: hosts
    },
    ready: function () {
      var _ref93 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee91() {
        var jQuery;
        return _regenerator2.default.wrap(function _callee91$(_context91) {
          while (1) {
            switch (_context91.prev = _context91.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                jQuery = _ADSBYPASSER_NAMESPACE__.$.window.$;
                _context91.next = 4;
                return _ADSBYPASSER_NAMESPACE__._.wait(1000);
              case 4:
                jQuery('#captcha-dialog').dialog('open');
              case 5:
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
})();
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^gkurl\.us$/
  },
  ready: function () {
    var _ref94 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee92() {
      var iframe;
      return _regenerator2.default.wrap(function _callee92$(_context92) {
        while (1) {
          switch (_context92.prev = _context92.next) {
            case 0:
              iframe = (0, _ADSBYPASSER_NAMESPACE__.$)('#gkurl-frame');
              _context92.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(iframe.src);
            case 3:
            case 'end':
              return _context92.stop();
          }
        }
      }, _callee92, this);
    }));
    function ready() {
      return _ref94.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^u\.go2\.me$/
  },
  ready: function () {
    var _ref95 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee93() {
      var iframe;
      return _regenerator2.default.wrap(function _callee93$(_context93) {
        while (1) {
          switch (_context93.prev = _context93.next) {
            case 0:
              iframe = (0, _ADSBYPASSER_NAMESPACE__.$)('iframe');
              _context93.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(iframe.src);
            case 3:
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
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^goto\.loncat\.in$/,
    query: /open=(.+)/
  },
  start: function () {
    var _ref96 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee94(m) {
      var url;
      return _regenerator2.default.wrap(function _callee94$(_context94) {
        while (1) {
          switch (_context94.prev = _context94.next) {
            case 0:
              url = atob(atob(m.query[1]));
              _context94.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 3:
            case 'end':
              return _context94.stop();
          }
        }
      }, _callee94, this);
    }));
    function start(_x17) {
      return _ref96.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^gsurl\.(me|in)$/, /^g5u\.pw$/]
  },
  ready: function () {
    var _ref97 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee95() {
      var a;
      return _regenerator2.default.wrap(function _callee95$(_context95) {
        while (1) {
          switch (_context95.prev = _context95.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('#container');
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#link');
              _context95.next = 4;
              return _ADSBYPASSER_NAMESPACE__._.wait(5000);
            case 4:
              _context95.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 6:
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
    host: /^hotshorturl\.com$/
  },
  ready: function () {
    var _ref98 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee96() {
      var frame;
      return _regenerator2.default.wrap(function _callee96$(_context96) {
        while (1) {
          switch (_context96.prev = _context96.next) {
            case 0:
              frame = (0, _ADSBYPASSER_NAMESPACE__.$)('frame[scrolling=yes]');
              _context96.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(frame.src);
            case 3:
            case 'end':
              return _context96.stop();
          }
        }
      }, _callee96, this);
    }));
    function ready() {
      return _ref98.apply(this, arguments);
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
    var _ref99 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee97(m) {
      var realHost, realURL, f;
      return _regenerator2.default.wrap(function _callee97$(_context97) {
        while (1) {
          switch (_context97.prev = _context97.next) {
            case 0:
              realHost = 'ilix.in';
              if (!(m.host[2] !== realHost)) {
                _context97.next = 6;
                break;
              }
              realURL = location.href.replace(m.host[2], realHost);
              _context97.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(realURL);
            case 5:
              return _context97.abrupt('return');
            case 6:
              f = _ADSBYPASSER_NAMESPACE__.$.$('iframe[name=ifram]');
              if (!f) {
                _context97.next = 11;
                break;
              }
              _context97.next = 10;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f.src);
            case 10:
              return _context97.abrupt('return');
            case 11:
              if (!_ADSBYPASSER_NAMESPACE__.$.$('img#captcha')) {
                (0, _ADSBYPASSER_NAMESPACE__.$)('form[name=frm]').submit();
              }
            case 12:
            case 'end':
              return _context97.stop();
          }
        }
      }, _callee97, this);
    }));
    function ready(_x18) {
      return _ref99.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^ilovebanten\.com$/
  },
  ready: function () {
    var _ref100 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee98() {
      var p;
      return _regenerator2.default.wrap(function _callee98$(_context98) {
        while (1) {
          switch (_context98.prev = _context98.next) {
            case 0:
              p = (0, _ADSBYPASSER_NAMESPACE__.$)('.notblocked');
              _context98.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(p.textContent);
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
    host: /^indexmovie\.me$/,
    path: /^\/([^/]+)$/
  },
  start: function () {
    var _ref101 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee99(m) {
      return _regenerator2.default.wrap(function _callee99$(_context99) {
        while (1) {
          switch (_context99.prev = _context99.next) {
            case 0:
              _context99.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('/get/' + m.path[1]);
            case 2:
            case 'end':
              return _context99.stop();
          }
        }
      }, _callee99, this);
    }));
    function start(_x19) {
      return _ref101.apply(this, arguments);
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
    var _ref102 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee100() {
      var f;
      return _regenerator2.default.wrap(function _callee100$(_context100) {
        while (1) {
          switch (_context100.prev = _context100.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('.go-form');
              f.submit();
            case 2:
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
    host: /^ity\.im$/
  },
  ready: function () {
    var _ref103 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee101() {
      var f, _$find3, _$find4, data;
      return _regenerator2.default.wrap(function _callee101$(_context101) {
        while (1) {
          switch (_context101.prev = _context101.next) {
            case 0:
              f = _ADSBYPASSER_NAMESPACE__.$.$('#main');
              if (!f) {
                _context101.next = 5;
                break;
              }
              _context101.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f.src);
            case 4:
              return _context101.abrupt('return');
            case 5:
              _$find3 = _ADSBYPASSER_NAMESPACE__._.find(_ADSBYPASSER_NAMESPACE__.$.$$('frame'), function (frame) {
                if (frame.src.indexOf('interheader.php') < 0) {
                  return _ADSBYPASSER_NAMESPACE__._.none;
                }
                return frame.src;
              });
              _$find4 = (0, _slicedToArray3.default)(_$find3, 3);
              f = _$find4[2];
              if (!(f !== _ADSBYPASSER_NAMESPACE__._.none)) {
                _context101.next = 12;
                break;
              }
              _context101.next = 11;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f);
            case 11:
              return _context101.abrupt('return');
            case 12:
              f = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/krypted=([^&]+)/);
              if (f) {
                _context101.next = 15;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('site changed');
            case 15:
              f = f[1];
              data = _ADSBYPASSER_NAMESPACE__.$.window.des('ksnslmtmk0v4Pdviusajqu', _ADSBYPASSER_NAMESPACE__.$.window.hexToString(f), 0, 0);
              if (!data) {
                _context101.next = 20;
                break;
              }
              _context101.next = 20;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('http://ity.im/1104_21_50846_' + data);
            case 20:
            case 'end':
              return _context101.stop();
          }
        }
      }, _callee101, this);
    }));
    function ready() {
      return _ref103.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?kingofshrink\.com$/
  },
  ready: function () {
    var _ref104 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee102() {
      var l;
      return _regenerator2.default.wrap(function _callee102$(_context102) {
        while (1) {
          switch (_context102.prev = _context102.next) {
            case 0:
              l = (0, _ADSBYPASSER_NAMESPACE__.$)('#textresult > a');
              _context102.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l.href);
            case 3:
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
    host: /^st\.kurogaze\.net$/,
    query: /r=(.+)/
  },
  start: function () {
    var _ref105 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee103(m) {
      var r;
      return _regenerator2.default.wrap(function _callee103$(_context103) {
        while (1) {
          switch (_context103.prev = _context103.next) {
            case 0:
              r = atob(m.query[1]);
              _context103.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(r);
            case 3:
            case 'end':
              return _context103.stop();
          }
        }
      }, _callee103, this);
    }));
    function start(_x20) {
      return _ref105.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^st\.kurogaze\.net$/
  },
  ready: function () {
    var _ref106 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee104() {
      var a;
      return _regenerator2.default.wrap(function _callee104$(_context104) {
        while (1) {
          switch (_context104.prev = _context104.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a.redirect');
              _context104.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
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
    host: /^(www\.)?leechbd\.tk$/,
    path: /^\/Shortener\/(\w+)$/
  },
  start: function () {
    var _ref107 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee105(m) {
      var text, r;
      return _regenerator2.default.wrap(function _callee105$(_context105) {
        while (1) {
          switch (_context105.prev = _context105.next) {
            case 0:
              _context105.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.get('/Shortener/API/read/get', {
                id: m.path[1],
                type: 'json'
              });
            case 2:
              text = _context105.sent;
              r = JSON.parse(text);
              if (!(r.success == true && r.data.full)) {
                _context105.next = 9;
                break;
              }
              _context105.next = 7;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(r.data.full);
            case 7:
              _context105.next = 10;
              break;
            case 9:
              _ADSBYPASSER_NAMESPACE__._.warn('API Error ' + r.error.code + ' : ' + r.error.msg);
            case 10:
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
  rule: 'http://www.lienscash.com/l/*',
  ready: function () {
    var _ref108 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee106() {
      var a;
      return _regenerator2.default.wrap(function _callee106$(_context106) {
        while (1) {
          switch (_context106.prev = _context106.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#redir_btn');
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
    host: /^(www\.)?\w+\.link-protector\.com$/
  },
  ready: function () {
    var _ref109 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee107() {
      var f;
      return _regenerator2.default.wrap(function _callee107$(_context107) {
        while (1) {
          switch (_context107.prev = _context107.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('form[style="font-weight:normal;font-size:12;font-family:Verdana;"]');
              _context107.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f.action);
            case 3:
            case 'end':
              return _context107.stop();
          }
        }
      }, _callee107, this);
    }));
    function ready() {
      return _ref109.apply(this, arguments);
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
    var _ref110 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee108() {
      var text, m;
      return _regenerator2.default.wrap(function _callee108$(_context108) {
        while (1) {
          switch (_context108.prev = _context108.next) {
            case 0:
              _context108.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.post(document.location.href, {
                image: 'Continue'
              });
            case 2:
              text = _context108.sent;
              m = text.match(/window\.location\.replace\('([^']+)'\)/);
              _context108.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m[1]);
            case 6:
            case 'end':
              return _context108.stop();
          }
        }
      }, _callee108, this);
    }));
    function start() {
      return _ref110.apply(this, arguments);
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
    var _ref111 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee109() {
      var m;
      return _regenerator2.default.wrap(function _callee109$(_context109) {
        while (1) {
          switch (_context109.prev = _context109.next) {
            case 0:
              m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/const rlink = '([^']+)';/);
              if (m) {
                _context109.next = 3;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('site changed');
            case 3:
              m = m[1];
              _context109.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m);
            case 6:
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
    host: /^link2you\.ru$/,
    path: /^\/\d+\/(.+)$/
  },
  start: function () {
    var _ref112 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee110(m) {
      var url;
      return _regenerator2.default.wrap(function _callee110$(_context110) {
        while (1) {
          switch (_context110.prev = _context110.next) {
            case 0:
              url = m.path[1];
              if (!url.match(/^https?:\/\//)) {
                url = '//' + url;
              }
              _context110.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 4:
            case 'end':
              return _context110.stop();
          }
        }
      }, _callee110, this);
    }));
    function start(_x22) {
      return _ref112.apply(this, arguments);
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
    var _ref113 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee111(m) {
      var d, url;
      return _regenerator2.default.wrap(function _callee111$(_context111) {
        while (1) {
          switch (_context111.prev = _context111.next) {
            case 0:
              d = (0, _ADSBYPASSER_NAMESPACE__.$)('div[id^=module_]');
              d = d.id.match(/module_(\d+)/);
              d = d[1];
              _context111.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.post('form.php?block_id=' + d, {
                cmd: 'get_source',
                act: 'waiting',
                id: m.path[1]
              });
            case 5:
              url = _context111.sent;
              _context111.next = 8;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 8:
            case 'end':
              return _context111.stop();
          }
        }
      }, _callee111, this);
    }));
    function ready(_x23) {
      return _ref113.apply(this, arguments);
    }
    return ready;
  }()
});
(function () {
  var sendRequest = function () {
    var _ref115 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee113(opts) {
      var data, a;
      return _regenerator2.default.wrap(function _callee113$(_context113) {
        while (1) {
          switch (_context113.prev = _context113.next) {
            case 0:
              _context113.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.post('/ajax/r.php', opts);
            case 2:
              data = _context113.sent;
              if (!(data.length <= 1)) {
                _context113.next = 7;
                break;
              }
              _context113.next = 6;
              return sendRequest(opts);
            case 6:
              return _context113.abrupt('return', _context113.sent);
            case 7:
              a = _ADSBYPASSER_NAMESPACE__.$.toDOM(data);
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a', a);
              return _context113.abrupt('return', a.href);
            case 10:
            case 'end':
              return _context113.stop();
          }
        }
      }, _callee113, this);
    }));
    return function sendRequest(_x25) {
      return _ref115.apply(this, arguments);
    };
  }();
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^link5s\.com$/,
      path: /^\/([^/]+)$/
    },
    ready: function () {
      var _ref114 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee112(m) {
        var i, opts, url;
        return _regenerator2.default.wrap(function _callee112$(_context112) {
          while (1) {
            switch (_context112.prev = _context112.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.window.$ = null;
                i = (0, _ADSBYPASSER_NAMESPACE__.$)('#iframeID');
                opts = {
                  page: m.path[1],
                  advID: i.dataset.cmp,
                  u: i.dataset.u
                };
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                _context112.next = 6;
                return sendRequest(opts);
              case 6:
                url = _context112.sent;
                _context112.next = 9;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
              case 9:
              case 'end':
                return _context112.stop();
            }
          }
        }, _callee112, this);
      }));
      function ready(_x24) {
        return _ref114.apply(this, arguments);
      }
      return ready;
    }()
  });
})();
(function () {
  var sendRequest = function () {
    var _ref120 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee118(token) {
      var text, data;
      return _regenerator2.default.wrap(function _callee118$(_context118) {
        while (1) {
          switch (_context118.prev = _context118.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.get(token.adurl);
              delete token.adurl;
              token.a_b = false;
              _ADSBYPASSER_NAMESPACE__._.info('waiting the interval');
              _context118.next = 6;
              return _ADSBYPASSER_NAMESPACE__._.wait(5000);
            case 6:
              _ADSBYPASSER_NAMESPACE__._.info('sending token: %o', token);
              _context118.next = 9;
              return _ADSBYPASSER_NAMESPACE__.$.get('/intermission/loadTargetUrl', token, {
                'X-Requested-With': _ADSBYPASSER_NAMESPACE__._.none,
                Origin: _ADSBYPASSER_NAMESPACE__._.none
              });
            case 9:
              text = _context118.sent;
              data = JSON.parse(text);
              _ADSBYPASSER_NAMESPACE__._.info('response: %o', data);
              if (!(!data.Success && data.Errors[0] === 'Invalid token')) {
                _context118.next = 17;
                break;
              }
              _ADSBYPASSER_NAMESPACE__._.warn('got invalid token');
              _context118.next = 16;
              return retry();
            case 16:
              return _context118.abrupt('return', _context118.sent);
            case 17:
              if (!data.AdBlockSpotted) {
                _context118.next = 20;
                break;
              }
              _ADSBYPASSER_NAMESPACE__._.warn('adblock spotted');
              return _context118.abrupt('return');
            case 20:
              if (!(data.Success && !data.AdBlockSpotted && data.Url)) {
                _context118.next = 22;
                break;
              }
              return _context118.abrupt('return', data.Url);
            case 22:
            case 'end':
              return _context118.stop();
          }
        }
      }, _callee118, this);
    }));
    return function sendRequest(_x28) {
      return _ref120.apply(this, arguments);
    };
  }();
  var retry = function () {
    var _ref121 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee119() {
      var text, d, t;
      return _regenerator2.default.wrap(function _callee119$(_context119) {
        while (1) {
          switch (_context119.prev = _context119.next) {
            case 0:
              _context119.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.get(window.location.toString(), {}, {
                'X-Forwarded-For': _ADSBYPASSER_NAMESPACE__._.generateRandomIP()
              });
            case 2:
              text = _context119.sent;
              d = _ADSBYPASSER_NAMESPACE__.$.toDOM(text);
              t = findToken(d);
              if (t) {
                _context119.next = 11;
                break;
              }
              _context119.next = 8;
              return _ADSBYPASSER_NAMESPACE__._.wait(1000);
            case 8:
              _context119.next = 10;
              return retry();
            case 10:
              return _context119.abrupt('return', _context119.sent);
            case 11:
              _context119.next = 13;
              return sendRequest(t);
            case 13:
              return _context119.abrupt('return', _context119.sent);
            case 14:
            case 'end':
              return _context119.stop();
          }
        }
      }, _callee119, this);
    }));
    return function retry() {
      return _ref121.apply(this, arguments);
    };
  }();
  var hostRules = [/^(([\w]{8}|www)\.)?(allanalpass|cash4files|drstickyfingers|fapoff|freegaysitepass|(gone|tube)viral|(pic|tna)bucks|whackyvidz|fuestfka)\.com$/, /^(([\w]{8}|www)\.)?(a[mn]y|deb|dyo|sexpalace)\.gs$/, /^(([\w]{8}|www)\.)?(filesonthe|poontown|seriousdeals|ultrafiles|urlbeat|zatnawqy|jzrputtbut)\.net$/, /^(([\w]{8}|www)\.)?freean\.us$/, /^(([\w]{8}|www)\.)?galleries\.bz$/, /^(([\w]{8}|www)\.)?hornywood\.tv$/, /^(([\w]{8}|www)\.)?link(babes|bucks)\.com$/, /^(([\w]{8}|www)\.)?(megaline|miniurls|qqc|rqq|tinylinks|yyv|zff)\.co$/, /^(([\w]{8}|www)\.)?(these(blog|forum)s)\.com$/, /^(([\w]{8}|www)\.)?youfap\.me$/, /^warning-this-linkcode-will-cease-working-soon\.www\.linkbucksdns\.com$/];
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: hostRules,
      path: /^\/\w+\/url\/(.+)$/
    },
    ready: function () {
      var _ref116 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee114(m) {
        var url, match;
        return _regenerator2.default.wrap(function _callee114$(_context114) {
          while (1) {
            switch (_context114.prev = _context114.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.removeAllTimer();
                _ADSBYPASSER_NAMESPACE__.$.resetCookies();
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                url = m.path[1] + window.location.search;
                match = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/UrlEncoded: ([^,]+)/);
                if (match && match[1] === 'true') {
                  url = decrypt(url);
                }
                _context114.next = 8;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
              case 8:
              case 'end':
                return _context114.stop();
            }
          }
        }, _callee114, this);
      }));
      function ready(_x26) {
        return _ref116.apply(this, arguments);
      }
      return ready;
    }()
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: hostRules
    },
    start: function () {
      var _ref117 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee115() {
        return _regenerator2.default.wrap(function _callee115$(_context115) {
          while (1) {
            switch (_context115.prev = _context115.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.window.XMLHttpRequest = _ADSBYPASSER_NAMESPACE__._.nop;
              case 1:
              case 'end':
                return _context115.stop();
            }
          }
        }, _callee115, this);
      }));
      function start() {
        return _ref117.apply(this, arguments);
      }
      return start;
    }(),
    ready: function () {
      var _ref118 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee116() {
        var path, token, url;
        return _regenerator2.default.wrap(function _callee116$(_context116) {
          while (1) {
            switch (_context116.prev = _context116.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.removeAllTimer();
                _ADSBYPASSER_NAMESPACE__.$.resetCookies();
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                if (!(window.location.pathname.indexOf('verify') >= 0)) {
                  _context116.next = 8;
                  break;
                }
                path = window.location.pathname.replace('/verify', '');
                _context116.next = 7;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(path);
              case 7:
                return _context116.abrupt('return');
              case 8:
                token = findToken(document);
                _context116.next = 11;
                return sendRequest(token);
              case 11:
                url = _context116.sent;
                _ADSBYPASSER_NAMESPACE__.$.nuke(url);
                _context116.next = 15;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
              case 15:
              case 'end':
                return _context116.stop();
            }
          }
        }, _callee116, this);
      }));
      function ready() {
        return _ref118.apply(this, arguments);
      }
      return ready;
    }()
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      query: /^(.*)[?&]_lbGate=\d+$/
    },
    start: function () {
      var _ref119 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee117(m) {
        return _regenerator2.default.wrap(function _callee117$(_context117) {
          while (1) {
            switch (_context117.prev = _context117.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.setCookie('_lbGatePassed', 'true');
                _context117.next = 3;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(window.location.pathname + m.query[1]);
              case 3:
              case 'end':
                return _context117.stop();
            }
          }
        }, _callee117, this);
      }));
      function start(_x27) {
        return _ref119.apply(this, arguments);
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
    var unsafe = '(' + Encode.toString() + ')("' + url + '")';
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
    var _ref122 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee120(m) {
      var lnk, b;
      return _regenerator2.default.wrap(function _callee120$(_context120) {
        while (1) {
          switch (_context120.prev = _context120.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              lnk = m.query[1];
              if (!m.query[1].match(/^https?:\/\//)) {
                _context120.next = 6;
                break;
              }
              _context120.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(lnk);
            case 5:
              return _context120.abrupt('return');
            case 6:
              b = _ADSBYPASSER_NAMESPACE__.$.$('#popup');
              if (!(b && b.href)) {
                _context120.next = 11;
                break;
              }
              _context120.next = 10;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(b.href);
            case 10:
              return _context120.abrupt('return');
            case 11:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('#m > .Visit_Link');
              b = b.onclick.toString().match(/window\.open\('([^']+)'/);
              if (b) {
                _context120.next = 15;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasser('pattern changed');
            case 15:
              lnk = b[1].match(/\?(https?:\/\/.*)$/);
              if (!lnk) {
                _context120.next = 20;
                break;
              }
              _context120.next = 19;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(lnk[1]);
            case 19:
              return _context120.abrupt('return');
            case 20:
              _context120.next = 22;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(b[1]);
            case 22:
            case 'end':
              return _context120.stop();
          }
        }
      }, _callee120, this);
    }));
    function ready(_x29) {
      return _ref122.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^linkdolar\.xyz$/
  },
  ready: function () {
    var _ref123 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee121() {
      var s, url, args, target;
      return _regenerator2.default.wrap(function _callee121$(_context121) {
        while (1) {
          switch (_context121.prev = _context121.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              s = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/^\s*eval\((.+)\)\s*$/);
              if (s) {
                _context121.next = 5;
                break;
              }
              _ADSBYPASSER_NAMESPACE__._.warn('site changed');
              return _context121.abrupt('return');
            case 5:
              s = eval('(' + s[1] + ')');
              s = s.match(/\$\.post\('([^']+)',(\{.+\}),function/);
              if (!s) {
                _ADSBYPASSER_NAMESPACE__._.warn('site changed');
              }
              url = s[1];
              args = eval('(' + s[2] + ')');
              _context121.next = 12;
              return _ADSBYPASSER_NAMESPACE__.$.post(url, args);
            case 12:
              target = _context121.sent;
              _context121.next = 15;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(target);
            case 15:
            case 'end':
              return _context121.stop();
          }
        }
      }, _callee121, this);
    }));
    function ready() {
      return _ref123.apply(this, arguments);
    }
    return ready;
  }()
});
(function () {
  var secondStage = function () {
    var _ref127 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee125(page) {
      var f, args, url, data;
      return _regenerator2.default.wrap(function _callee125$(_context125) {
        while (1) {
          switch (_context125.prev = _context125.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('#go-link', page);
              args = extractArgument(f);
              url = f.getAttribute('action');
              _context125.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.post(url, args);
            case 5:
              data = _context125.sent;
              data = JSON.parse(data);
              if (!(data && data.url)) {
                _context125.next = 9;
                break;
              }
              return _context125.abrupt('return', data.url);
            case 9:
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('wrong data');
            case 10:
            case 'end':
              return _context125.stop();
          }
        }
      }, _callee125, this);
    }));
    return function secondStage(_x30) {
      return _ref127.apply(this, arguments);
    };
  }();
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: [/^(www\.)?linkdrop\.net$/, /^dmus\.in$/, /^ulshare\.net$/, /^adurl\.id$/, /^goolink\.me$/, /^earningurl\.com$/, /^cutwin\.com$/, /^cutwi\.in$/, /^(www\.)?ourl\.io$/]
    },
    ready: function () {
      var _ref124 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee122() {
        var f;
        return _regenerator2.default.wrap(function _callee122$(_context122) {
          while (1) {
            switch (_context122.prev = _context122.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe, [class$="Overlay"]');
                _ADSBYPASSER_NAMESPACE__.$.block('[class$="Overlay"]', document.body);
                f = getForm();
                if (f) {
                  _context122.next = 6;
                  break;
                }
                _ADSBYPASSER_NAMESPACE__._.info('no form');
                return _context122.abrupt('return');
              case 6:
                sendRequest(f);
              case 7:
              case 'end':
                return _context122.stop();
            }
          }
        }, _callee122, this);
      }));
      function ready() {
        return _ref124.apply(this, arguments);
      }
      return ready;
    }()
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: [/^sflnk\.me$/, /^idsly\.com$/, /^adbilty\.me$/, /^oke\.io$/]
    },
    ready: function () {
      var _ref125 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee123() {
        var f;
        return _regenerator2.default.wrap(function _callee123$(_context123) {
          while (1) {
            switch (_context123.prev = _context123.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                f = _ADSBYPASSER_NAMESPACE__.$.$('#captchaShortlink');
                if (!f) {
                  _context123.next = 4;
                  break;
                }
                return _context123.abrupt('return');
              case 4:
                f = getForm();
                if (f) {
                  _context123.next = 9;
                  break;
                }
                f = (0, _ADSBYPASSER_NAMESPACE__.$)('#link-view');
                f.submit();
                return _context123.abrupt('return');
              case 9:
                sendRequest(f);
              case 10:
              case 'end':
                return _context123.stop();
            }
          }
        }, _callee123, this);
      }));
      function ready() {
        return _ref125.apply(this, arguments);
      }
      return ready;
    }()
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: [/^adlink\.guru$/, /^clik\.pw$/, /^coshurl\.co$/, /^curs\.io$/, /^cypt\.ga$/, /^(filesbucks|tmearn|cut-urls)\.com$/, /^elink\.link$/, /^(payurl|urlst)\.me$/, /^u2s\.io$/, /^url\.ht$/, /^urle\.co$/, /^(hashe|trlink|adshort)\.in$/, /^www\.worldhack\.net$/, /^123link\.(io|co|press)$/, /^pir\.im$/, /^bol\.tl$/, /^(tl|adfly)\.tc$/, /^(adfu|linkhits)\.us$/, /^short\.pastewma\.com$/, /^l2s\.io$/, /^linkfly\.gaosmedia\.com$/, /^linclik\.com$/, /^link-earn\.com$/, /^zez\.io$/, /^adbull\.me$/, /^adshort\.im$/, /^adshorte\.com$/, /^weefy\.me$/]
    },
    ready: function () {
      var _ref126 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee124() {
        var page, url;
        return _regenerator2.default.wrap(function _callee124$(_context124) {
          while (1) {
            switch (_context124.prev = _context124.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe', '.BJPPopAdsOverlay');
                _context124.next = 3;
                return firstStage();
              case 3:
                page = _context124.sent;
                _context124.next = 6;
                return secondStage(page);
              case 6:
                url = _context124.sent;
                _ADSBYPASSER_NAMESPACE__.$.nuke(url);
                _context124.next = 10;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
              case 10:
              case 'end':
                return _context124.stop();
            }
          }
        }, _callee124, this);
      }));
      function ready() {
        return _ref126.apply(this, arguments);
      }
      return ready;
    }()
  });
  function getForm() {
    var jQuery = _ADSBYPASSER_NAMESPACE__.$.window.$;
    var f = jQuery('#go-link, .go-link, form[action="/links/go"], form[action="/links/linkdropgo"]');
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
  function firstStage() {
    return new _promise2.default(function (resolve) {
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
    host: /^linkpaid\.net$/,
    path: /^\/go\//
  },
  ready: function () {
    var _ref128 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee126() {
      var f;
      return _regenerator2.default.wrap(function _callee126$(_context126) {
        while (1) {
          switch (_context126.prev = _context126.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('#btn-main');
              f.click();
            case 2:
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
    host: /^(www\.)?linkplugapp\.com$/
  },
  ready: function () {
    var _ref129 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee127() {
      var a;
      return _regenerator2.default.wrap(function _callee127$(_context127) {
        while (1) {
          switch (_context127.prev = _context127.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#mc_embed_signup_scroll a');
              _context127.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
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
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^linksas\.us$/,
    path: /^(\/\w+)$/
  },
  ready: function () {
    var _ref130 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee128(m) {
      var recaptcha, url, ipinfo, payload, token, data;
      return _regenerator2.default.wrap(function _callee128$(_context128) {
        while (1) {
          switch (_context128.prev = _context128.next) {
            case 0:
              _context128.next = 2;
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
              recaptcha = _context128.sent;
              url = 'http://ipinfo.io/' + _ADSBYPASSER_NAMESPACE__._.generateRandomIP() + '/json';
              _context128.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.get(url);
            case 6:
              ipinfo = _context128.sent;
              ipinfo = JSON.parse(ipinfo);
              payload = {
                codeAds: 1,
                country: ipinfo.country,
                ipAddress: ipinfo.ip,
                recaptcha: recaptcha
              };
              token = _ADSBYPASSER_NAMESPACE__.$.getCookie('XSRF-TOKEN');
              _context128.next = 12;
              return _ADSBYPASSER_NAMESPACE__.$.post('/go' + m.path[1], payload, {
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': token
              });
            case 12:
              data = _context128.sent;
              data = JSON.parse(data);
              _context128.next = 16;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(data.message);
            case 16:
            case 'end':
              return _context128.stop();
          }
        }
      }, _callee128, this);
    }));
    function ready(_x31) {
      return _ref130.apply(this, arguments);
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
    var _ref131 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee129() {
      var a, url, pattern, lastURL, matched;
      return _regenerator2.default.wrap(function _callee129$(_context129) {
        while (1) {
          switch (_context129.prev = _context129.next) {
            case 0:
              a = _ADSBYPASSER_NAMESPACE__.$.$('#btnSubmit');
              if (a) {
                _context129.next = 3;
                break;
              }
              return _context129.abrupt('return');
            case 3:
              url = a.href;
              pattern = /https?:\/\//g;
              lastURL = '';
            case 6:
              if (false) {
                _context129.next = 13;
                break;
              }
              matched = pattern.exec(url);
              if (matched) {
                _context129.next = 10;
                break;
              }
              return _context129.abrupt('break', 13);
            case 10:
              lastURL = matched + url.substring(pattern.lastIndex);
              _context129.next = 6;
              break;
            case 13:
              _context129.next = 15;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(lastURL);
            case 15:
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
    host: /^linkshrink\.net$/,
    path: /^\/[a-zA-Z0-9]+$/
  },
  start: function () {
    var _ref132 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee130() {
      return _regenerator2.default.wrap(function _callee130$(_context130) {
        while (1) {
          switch (_context130.prev = _context130.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.window._impspcabe = 0;
            case 1:
            case 'end':
              return _context130.stop();
          }
        }
      }, _callee130, this);
    }));
    function start() {
      return _ref132.apply(this, arguments);
    }
    return start;
  }(),
  ready: function () {
    var _ref133 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee131() {
      var l;
      return _regenerator2.default.wrap(function _callee131$(_context131) {
        while (1) {
          switch (_context131.prev = _context131.next) {
            case 0:
              l = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/revC\("([^"]+)"\)/);
              l = atob(l[1]);
              _context131.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('/' + l);
            case 4:
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
    path: /=(.+)$/
  },
  start: function () {
    var _ref134 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee132(m) {
      return _regenerator2.default.wrap(function _callee132$(_context132) {
        while (1) {
          switch (_context132.prev = _context132.next) {
            case 0:
              _context132.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m.path[1]);
            case 2:
            case 'end':
              return _context132.stop();
          }
        }
      }, _callee132, this);
    }));
    function start(_x32) {
      return _ref134.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: 'http://lix.in/-*',
  ready: function () {
    var _ref135 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee133() {
      var i;
      return _regenerator2.default.wrap(function _callee133$(_context133) {
        while (1) {
          switch (_context133.prev = _context133.next) {
            case 0:
              i = _ADSBYPASSER_NAMESPACE__.$.$('#ibdc');
              if (!i) {
                _context133.next = 3;
                break;
              }
              return _context133.abrupt('return');
            case 3:
              i = _ADSBYPASSER_NAMESPACE__.$.$('form');
              if (!i) {
                _context133.next = 7;
                break;
              }
              i.submit();
              return _context133.abrupt('return');
            case 7:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('iframe');
              _context133.next = 10;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(i.src);
            case 10:
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
    host: /^lnk\.in$/
  },
  ready: function () {
    var _ref136 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee134() {
      var a;
      return _regenerator2.default.wrap(function _callee134$(_context134) {
        while (1) {
          switch (_context134.prev = _context134.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#divRedirectText a');
              _context134.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.innerHTML);
            case 3:
            case 'end':
              return _context134.stop();
          }
        }
      }, _callee134, this);
    }));
    function ready() {
      return _ref136.apply(this, arguments);
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
    var _ref137 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee135() {
      var f, o;
      return _regenerator2.default.wrap(function _callee135$(_context135) {
        while (1) {
          switch (_context135.prev = _context135.next) {
            case 0:
              f = _ADSBYPASSER_NAMESPACE__.$.$('iframe#dest');
              if (!f) {
                _context135.next = 5;
                break;
              }
              _context135.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f.src);
            case 4:
              return _context135.abrupt('return');
            case 5:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              o = _ADSBYPASSER_NAMESPACE__.$.$('#urlholder');
              if (!o) {
                _context135.next = 11;
                break;
              }
              _context135.next = 10;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(o.value);
            case 10:
              return _context135.abrupt('return');
            case 11:
              o = _ADSBYPASSER_NAMESPACE__.$.$('#skipBtn');
              if (!o) {
                _context135.next = 17;
                break;
              }
              o = o.querySelector('a');
              _context135.next = 16;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(o.href);
            case 16:
              return _context135.abrupt('return');
            case 17:
              o = document.title.replace(/(LNK.co|Linkbee)\s*:\s*/, '');
              _context135.next = 20;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(o);
            case 20:
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
    host: [/^lnx\.lu$/, /^url\.fm$/, /^z\.gs$/]
  },
  ready: function () {
    var _ref138 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee136() {
      var a;
      return _regenerator2.default.wrap(function _callee136$(_context136) {
        while (1) {
          switch (_context136.prev = _context136.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#clickbtn a');
              _context136.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
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
    host: /^www\.lolinez\.com$/,
    query: /\?(.+)/
  },
  start: function () {
    var _ref139 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee137(m) {
      return _regenerator2.default.wrap(function _callee137$(_context137) {
        while (1) {
          switch (_context137.prev = _context137.next) {
            case 0:
              _context137.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m.query[1]);
            case 2:
            case 'end':
              return _context137.stop();
          }
        }
      }, _callee137, this);
    }));
    function start(_x33) {
      return _ref139.apply(this, arguments);
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
    var _ref140 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee138() {
      var a;
      return _regenerator2.default.wrap(function _callee138$(_context138) {
        while (1) {
          switch (_context138.prev = _context138.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#download_link > a.btn');
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
    host: /^looy\.in$/,
    path: /^\/Pro\/(.+)$/
  },
  ready: function () {
    var _ref141 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee139(m) {
      var url;
      return _regenerator2.default.wrap(function _callee139$(_context139) {
        while (1) {
          switch (_context139.prev = _context139.next) {
            case 0:
              _context139.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.post('http://looy.in/Go/Index/ProSkipAd', {
                code: m.path[1],
                server: ''
              });
            case 2:
              url = _context139.sent;
              _context139.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 5:
            case 'end':
              return _context139.stop();
          }
        }
      }, _callee139, this);
    }));
    function ready(_x34) {
      return _ref141.apply(this, arguments);
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
    var _ref142 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee140(m) {
      return _regenerator2.default.wrap(function _callee140$(_context140) {
        while (1) {
          switch (_context140.prev = _context140.next) {
            case 0:
              _context140.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('/Pro/' + m.path[1]);
            case 2:
            case 'end':
              return _context140.stop();
          }
        }
      }, _callee140, this);
    }));
    function start(_x35) {
      return _ref142.apply(this, arguments);
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
    var _ref143 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee141(m) {
      var text;
      return _regenerator2.default.wrap(function _callee141$(_context141) {
        while (1) {
          switch (_context141.prev = _context141.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              _context141.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.post('/ajax/check_redirect.php', {
                link: m[1]
              });
            case 3:
              text = _context141.sent;
              _context141.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(text);
            case 6:
            case 'end':
              return _context141.stop();
          }
        }
      }, _callee141, this);
    }));
    function start(_x36) {
      return _ref143.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^mant[ae][pb]\.in$/, /^st\.oploverz\.net$/, /^minidroid\.net$/, /^ww3\.awaremmxv\.com$/, /^linkpoi\.in$/]
  },
  ready: function () {
    var _ref144 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee142() {
      var a;
      return _regenerator2.default.wrap(function _callee142$(_context142) {
        while (1) {
          switch (_context142.prev = _context142.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a.redirect, a[target=_blank][rel=nofollow]');
              _context142.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context142.stop();
          }
        }
      }, _callee142, this);
    }));
    function ready() {
      return _ref144.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^susutin\.com$/
  },
  ready: function () {
    var _ref145 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee143() {
      var s;
      return _regenerator2.default.wrap(function _callee143$(_context143) {
        while (1) {
          switch (_context143.prev = _context143.next) {
            case 0:
              s = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/="([^"]+)",/);
              _context143.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(s[1]);
            case 3:
            case 'end':
              return _context143.stop();
          }
        }
      }, _callee143, this);
    }));
    function ready() {
      return _ref145.apply(this, arguments);
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
    var _ref146 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee144(m) {
      var url;
      return _regenerator2.default.wrap(function _callee144$(_context144) {
        while (1) {
          switch (_context144.prev = _context144.next) {
            case 0:
              url = atob(m.path[1]);
              _context144.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 3:
            case 'end':
              return _context144.stop();
          }
        }
      }, _callee144, this);
    }));
    function start(_x37) {
      return _ref146.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^mirrorfilehost\.com$/
  },
  ready: function () {
    var _ref147 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee145() {
      var frame, form, input;
      return _regenerator2.default.wrap(function _callee145$(_context145) {
        while (1) {
          switch (_context145.prev = _context145.next) {
            case 0:
              _context145.next = 2;
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
    host: [/^moe\.god\.jp$/, /^moesubs\.akurapopo\.pro$/, /^dl\.nsfk\.in$/]
  },
  ready: function () {
    var _ref148 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee146() {
      var a;
      return _regenerator2.default.wrap(function _callee146$(_context146) {
        while (1) {
          switch (_context146.prev = _context146.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('div div center a');
              _context146.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context146.stop();
          }
        }
      }, _callee146, this);
    }));
    function ready() {
      return _ref148.apply(this, arguments);
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
    var _ref149 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee147() {
      var a, i;
      return _regenerator2.default.wrap(function _callee147$(_context147) {
        while (1) {
          switch (_context147.prev = _context147.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('body > div:nth-child(4) > i:nth-child(1)');
              a = a.textContent;
              i = a.lastIndexOf('http');
              a = a.substr(i);
              _context147.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a);
            case 6:
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
    host: /^mt0\.org$/,
    path: /^\/[^/]+\/$/
  },
  ready: function () {
    var _ref150 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee148() {
      var f, i;
      return _regenerator2.default.wrap(function _callee148$(_context148) {
        while (1) {
          switch (_context148.prev = _context148.next) {
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
  rule: 'http://my-link.pro/*',
  ready: function () {
    var _ref151 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee149() {
      var i;
      return _regenerator2.default.wrap(function _callee149$(_context149) {
        while (1) {
          switch (_context149.prev = _context149.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('iframe[scrolling=auto]');
              if (!i) {
                _context149.next = 4;
                break;
              }
              _context149.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(i.src);
            case 4:
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
    host: /^nmac\.to$/,
    path: /^\/download\/(.+)/
  },
  start: function () {
    var _ref152 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee150(m) {
      var url;
      return _regenerator2.default.wrap(function _callee150$(_context150) {
        while (1) {
          switch (_context150.prev = _context150.next) {
            case 0:
              url = atob(m.path[1]);
              _context150.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 3:
            case 'end':
              return _context150.stop();
          }
        }
      }, _callee150, this);
    }));
    function start(_x38) {
      return _ref152.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^nsfw\.in$/
  },
  ready: function () {
    var _ref153 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee151() {
      var a;
      return _regenerator2.default.wrap(function _callee151$(_context151) {
        while (1) {
          switch (_context151.prev = _context151.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#long_url a');
              _context151.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
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
    host: /^nutshellurl\.com$/
  },
  ready: function () {
    var _ref154 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee152() {
      var iframe;
      return _regenerator2.default.wrap(function _callee152$(_context152) {
        while (1) {
          switch (_context152.prev = _context152.next) {
            case 0:
              iframe = (0, _ADSBYPASSER_NAMESPACE__.$)('iframe');
              _context152.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(iframe.src);
            case 3:
            case 'end':
              return _context152.stop();
          }
        }
      }, _callee152, this);
    }));
    function ready() {
      return _ref154.apply(this, arguments);
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
    var _ref155 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee153() {
      return _regenerator2.default.wrap(function _callee153$(_context153) {
        while (1) {
          switch (_context153.prev = _context153.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.window.startdl();
            case 1:
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
    host: /^www\.oni\.vn$/
  },
  ready: function () {
    var _ref156 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee154() {
      var data, url;
      return _regenerator2.default.wrap(function _callee154$(_context154) {
        while (1) {
          switch (_context154.prev = _context154.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              data = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/data:"([^"]+)"/);
              if (data) {
                _context154.next = 4;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('pattern changed');
            case 4:
              data = data[1];
              _context154.next = 7;
              return _ADSBYPASSER_NAMESPACE__.$.get('/click.html', data);
            case 7:
              url = _context154.sent;
              _context154.next = 10;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 10:
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
    host: /^(www\.)?ouo\.(io|press)$/,
    path: /^\/go\/\w+$/
  },
  ready: function () {
    var _ref157 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee155() {
      return _regenerator2.default.wrap(function _callee155$(_context155) {
        while (1) {
          switch (_context155.prev = _context155.next) {
            case 0:
              (0, _ADSBYPASSER_NAMESPACE__.$)('form').submit();
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
    host: /^oxyl\.me$/
  },
  ready: function () {
    var _ref158 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee156() {
      var l;
      return _regenerator2.default.wrap(function _callee156$(_context156) {
        while (1) {
          switch (_context156.prev = _context156.next) {
            case 0:
              l = _ADSBYPASSER_NAMESPACE__.$.$$('.links-container.result-form > a.result-a');
              if (!(l.length > 1)) {
                _context156.next = 3;
                break;
              }
              return _context156.abrupt('return');
            case 3:
              _context156.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l[0].href);
            case 5:
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
    host: /^p\.pw$/
  },
  ready: function () {
    var _ref159 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee157() {
      var m;
      return _regenerator2.default.wrap(function _callee157$(_context157) {
        while (1) {
          switch (_context157.prev = _context157.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/window\.location = "(.*)";/);
              m = m[1];
              _context157.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m);
            case 5:
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
    host: /^pdi2\.net$/
  },
  ready: function () {
    var _ref160 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee158() {
      var s;
      return _regenerator2.default.wrap(function _callee158$(_context158) {
        while (1) {
          switch (_context158.prev = _context158.next) {
            case 0:
              s = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/top\.location = '([^']+)'/);
              s = s[1];
              _context158.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(s);
            case 4:
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
    host: /^(www\.)?\w+\.rapeit\.net$/,
    path: /^\/(go|prepair|request|collect|analyze)\/[a-f0-9]+$/
  },
  ready: function () {
    var _ref161 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee159() {
      var a;
      return _regenerator2.default.wrap(function _callee159$(_context159) {
        while (1) {
          switch (_context159.prev = _context159.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a#download_link');
              _context159.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
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
  rule: 'http://reffbux.com/refflinx/view/*',
  ready: function () {
    var _ref162 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee160() {
      var m, id, share, location, text;
      return _regenerator2.default.wrap(function _callee160$(_context160) {
        while (1) {
          switch (_context160.prev = _context160.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/skip_this_ad_(\d+)_(\d+)/);
              id = m[1];
              share = m[2];
              location = window.location.toString();
              _context160.next = 7;
              return _ADSBYPASSER_NAMESPACE__.$.post('http://reffbux.com/refflinx/register', {
                id: id,
                share: share,
                fp: 0,
                location: location,
                referer: ''
              });
            case 7:
              text = _context160.sent;
              m = text.match(/'([^']+)'/);
              if (m) {
                _context160.next = 11;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('pattern changed');
            case 11:
              _context160.next = 13;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m[1]);
            case 13:
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
  rule: 'http://richlink.com/app/webscr?cmd=_click&key=*',
  ready: function () {
    var _ref163 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee161() {
      var f;
      return _regenerator2.default.wrap(function _callee161$(_context161) {
        while (1) {
          switch (_context161.prev = _context161.next) {
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
              _context161.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f);
            case 6:
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
  rule: 'http://rijaliti.info/*.php',
  ready: function () {
    var _ref164 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee162() {
      var a;
      return _regenerator2.default.wrap(function _callee162$(_context162) {
        while (1) {
          switch (_context162.prev = _context162.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#main td[align="center"] a');
              _context162.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
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
  rule: {
    host: /^riurl\.com$/,
    path: /^\/.+/
  },
  ready: function () {
    var _ref165 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee163() {
      var s;
      return _regenerator2.default.wrap(function _callee163$(_context163) {
        while (1) {
          switch (_context163.prev = _context163.next) {
            case 0:
              s = _ADSBYPASSER_NAMESPACE__.$.$('body script');
              if (!s) {
                _context163.next = 5;
                break;
              }
              s = s.innerHTML.indexOf('window.location.replace');
              if (!(s >= 0)) {
                _context163.next = 5;
                break;
              }
              return _context163.abrupt('return');
            case 5:
              _context163.next = 7;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('', {
                path: {
                  hidden: '1',
                  image: ' '
                }
              });
            case 7:
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
  rule: {
    host: /^preview\.rlu\.ru$/
  },
  ready: function () {
    var _ref166 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee164() {
      var a;
      return _regenerator2.default.wrap(function _callee164$(_context164) {
        while (1) {
          switch (_context164.prev = _context164.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#content > .long_url > a');
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
    host: /^robo\.us$/
  },
  ready: function () {
    var _ref167 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee165() {
      var url;
      return _regenerator2.default.wrap(function _callee165$(_context165) {
        while (1) {
          switch (_context165.prev = _context165.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              url = atob(_ADSBYPASSER_NAMESPACE__.$.window.fl);
              _context165.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 4:
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
    host: /^www\.ron\.vn$/
  },
  ready: function () {
    var _ref168 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee166() {
      var script, data, url;
      return _regenerator2.default.wrap(function _callee166$(_context166) {
        while (1) {
          switch (_context166.prev = _context166.next) {
            case 0:
              script = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts('linknexttop');
              data = script.match(/data:"([^"]+)"/);
              url = _ADSBYPASSER_NAMESPACE__.$.window.domain + 'click.html?' + data[1];
              _context166.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.get(url, {}, {
                'Content-Type': 'application/json; charset=utf-8'
              });
            case 5:
              url = _context166.sent;
              _context166.next = 8;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 8:
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
    host: /^(www\.)?sa\.ae$/,
    path: /^\/\w+\/$/
  },
  ready: function () {
    var _ref169 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee167() {
      var m;
      return _regenerator2.default.wrap(function _callee167$(_context167) {
        while (1) {
          switch (_context167.prev = _context167.next) {
            case 0:
              m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/const real_link = '([^']+)';/);
              _context167.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m[1]);
            case 3:
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
    host: /^(www\.)?safeurl\.eu$/,
    path: /\/\w+/
  },
  ready: function () {
    var _ref170 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee168() {
      var directUrl;
      return _regenerator2.default.wrap(function _callee168$(_context168) {
        while (1) {
          switch (_context168.prev = _context168.next) {
            case 0:
              directUrl = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/window\.open\("([^"]+)"\);/);
              if (directUrl) {
                _context168.next = 3;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('script content changed');
            case 3:
              directUrl = directUrl[1];
              _context168.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(directUrl);
            case 6:
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
    host: [/^segmentnext\.com$/, /^(www\.)?videogamesblogger.com$/],
    path: /^\/interstitial\.html$/,
    query: /return_url=([^&]+)/
  },
  start: function () {
    var _ref171 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee169(m) {
      return _regenerator2.default.wrap(function _callee169$(_context169) {
        while (1) {
          switch (_context169.prev = _context169.next) {
            case 0:
              _context169.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(decodeURIComponent(m.query[1]));
            case 2:
            case 'end':
              return _context169.stop();
          }
        }
      }, _callee169, this);
    }));
    function start(_x39) {
      return _ref171.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?(apploadz\.ru|seomafia\.net)$/
  },
  ready: function () {
    var _ref172 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee170() {
      var a;
      return _regenerator2.default.wrap(function _callee170$(_context170) {
        while (1) {
          switch (_context170.prev = _context170.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('table a');
              _context170.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 4:
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
  rule: /http:\/\/setlinks\.us\/(p|t|d).*/,
  ready: function () {
    var _ref173 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee171() {
      var k, aLinks;
      return _regenerator2.default.wrap(function _callee171$(_context171) {
        while (1) {
          switch (_context171.prev = _context171.next) {
            case 0:
              k = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/window\.location='([^']+)'/);
              if (!k) {
                _context171.next = 5;
                break;
              }
              _context171.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(k[1]);
            case 4:
              return _context171.abrupt('return');
            case 5:
              aLinks = _ADSBYPASSER_NAMESPACE__.$.$$('div.links-container.result-form:not(.p-links-container) > span.dlinks > a');
              if (!(aLinks.length === 1)) {
                _context171.next = 10;
                break;
              }
              _context171.next = 9;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(aLinks.at(0).href);
            case 9:
              return _context171.abrupt('return');
            case 10:
            case 'end':
              return _context171.stop();
          }
        }
      }, _callee171, this);
    }));
    function ready() {
      return _ref173.apply(this, arguments);
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
      var _ref174 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee172() {
        var promise, url;
        return _regenerator2.default.wrap(function _callee172$(_context172) {
          while (1) {
            switch (_context172.prev = _context172.next) {
              case 0:
                promise = new _promise2.default(function (resolve) {
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
                _context172.next = 3;
                return promise;
              case 3:
                url = _context172.sent;
                _context172.next = 6;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
              case 6:
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
    rule: {
      host: hostRules,
      path: /https?:\/\//
    },
    start: function () {
      var _ref175 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee173() {
        var url;
        return _regenerator2.default.wrap(function _callee173$(_context173) {
          while (1) {
            switch (_context173.prev = _context173.next) {
              case 0:
                url = window.location.pathname + window.location.search + window.location.hash;
                url = url.match(/(https?:\/\/.*)$/);
                url = url[1];
                _context173.next = 5;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
              case 5:
              case 'end':
                return _context173.stop();
            }
          }
        }, _callee173, this);
      }));
      function start() {
        return _ref175.apply(this, arguments);
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
      var _ref176 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee174() {
        return _regenerator2.default.wrap(function _callee174$(_context174) {
          while (1) {
            switch (_context174.prev = _context174.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.window._impspcabe = 0;
              case 1:
              case 'end':
                return _context174.stop();
            }
          }
        }, _callee174, this);
      }));
      function start() {
        return _ref176.apply(this, arguments);
      }
      return start;
    }(),
    ready: function () {
      var _ref177 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee175() {
        var m, o;
        return _regenerator2.default.wrap(function _callee175$(_context175) {
          while (1) {
            switch (_context175.prev = _context175.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                _ADSBYPASSER_NAMESPACE__.$.removeAllTimer();
                m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/sessionId: "([\d\w]+)",/);
                if (!m) {
                  _context175.next = 6;
                  break;
                }
                afterGotSessionId(m[1]);
                return _context175.abrupt('return');
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
                return _context175.stop();
            }
          }
        }, _callee175, this);
      }));
      function ready() {
        return _ref177.apply(this, arguments);
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
    host: [/^(www\.)?shink\.(in|me)$/, /^fas\.li$/, /^(www\.)?croco\.(me|site)$/, /^cpmlink\.net$/],
    path: /^\/\w+$/
  },
  ready: function () {
    var _ref178 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee176() {
      var f;
      return _regenerator2.default.wrap(function _callee176$(_context176) {
        while (1) {
          switch (_context176.prev = _context176.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('#skip');
              if (!_ADSBYPASSER_NAMESPACE__.$.$('#captcha')) {
                f.submit();
              }
              _ADSBYPASSER_NAMESPACE__.$.remove('.BJPPopAdsOverlay');
              _ADSBYPASSER_NAMESPACE__.$.block(function (node) {
                return node.localName === 'div' && node.style.zIndex === '2147483647';
              }, document.body);
            case 4:
            case 'end':
              return _context176.stop();
          }
        }
      }, _callee176, this);
    }));
    function ready() {
      return _ref178.apply(this, arguments);
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
    var _ref179 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee177() {
      var a, i;
      return _regenerator2.default.wrap(function _callee177$(_context177) {
        while (1) {
          switch (_context177.prev = _context177.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#btn-main');
              i = a.href.lastIndexOf('http');
              a = a.href.substr(i);
              _context177.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a);
            case 5:
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
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^fas\.li$/, /^(www\.)?shink\.(in|me)$/],
    path: /^\/go\/\w+$/
  },
  ready: function () {
    var _ref180 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee178() {
      var f;
      return _regenerator2.default.wrap(function _callee178$(_context178) {
        while (1) {
          switch (_context178.prev = _context178.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('#skip');
              f.submit();
            case 2:
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
  rule: {
    host: /^short\.am$/
  },
  ready: function () {
    var _ref181 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee179() {
      return _regenerator2.default.wrap(function _callee179$(_context179) {
        while (1) {
          switch (_context179.prev = _context179.next) {
            case 0:
              _context179.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(5000);
            case 2:
              _context179.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('', {
                post: {
                  _image: 'Continue'
                }
              });
            case 4:
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
    host: [/^(www\.)?shortenurl\.tk$/, /^(www\.)?pengaman\.link$/, /^urlgo\.gs$/, /^gunting\.web\.id$/],
    path: /^\/\w+$/
  },
  ready: function () {
    var _ref182 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee180() {
      var l;
      return _regenerator2.default.wrap(function _callee180$(_context180) {
        while (1) {
          switch (_context180.prev = _context180.next) {
            case 0:
              l = (0, _ADSBYPASSER_NAMESPACE__.$)('a.btn-block.redirect');
              _context180.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l.href);
            case 3:
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
    host: /^(www\.)?shorti\.ga$/,
    path: [/^\/\w+$/, /^\/url_redirector\.html$/]
  },
  ready: function () {
    var _ref183 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee181() {
      var f, _$find5, _$find6, v;
      return _regenerator2.default.wrap(function _callee181$(_context181) {
        while (1) {
          switch (_context181.prev = _context181.next) {
            case 0:
              f = _ADSBYPASSER_NAMESPACE__.$.$$('frame');
              _$find5 = _ADSBYPASSER_NAMESPACE__._.find(f, function (value) {
                if (value.getAttribute('class')) {
                  return _ADSBYPASSER_NAMESPACE__._.none;
                }
                return 'Target frame found';
              }), _$find6 = (0, _slicedToArray3.default)(_$find5, 2), v = _$find6[1];
              _context181.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(v.src);
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
    host: /^www\.shortskip\.com$/,
    path: /^\/short\.php$/,
    query: /i=([^&]+)/
  },
  start: function () {
    var _ref184 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee182(m) {
      var url;
      return _regenerator2.default.wrap(function _callee182$(_context182) {
        while (1) {
          switch (_context182.prev = _context182.next) {
            case 0:
              url = decodeURIComponent(m.query[1]);
              _context182.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 3:
            case 'end':
              return _context182.stop();
          }
        }
      }, _callee182, this);
    }));
    function start(_x40) {
      return _ref184.apply(this, arguments);
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
    var _ref185 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee183(m) {
      return _regenerator2.default.wrap(function _callee183$(_context183) {
        while (1) {
          switch (_context183.prev = _context183.next) {
            case 0:
              _context183.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('//www.shrink-service.it/shrinked/' + m.path[1]);
            case 2:
            case 'end':
              return _context183.stop();
          }
        }
      }, _callee183, this);
    }));
    function start(_x41) {
      return _ref185.apply(this, arguments);
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
    var _ref186 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee184() {
      var i;
      return _regenerator2.default.wrap(function _callee184$(_context184) {
        while (1) {
          switch (_context184.prev = _context184.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('input[id][name]');
              _context184.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(i.value);
            case 3:
            case 'end':
              return _context184.stop();
          }
        }
      }, _callee184, this);
    }));
    function ready() {
      return _ref186.apply(this, arguments);
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
    var _ref187 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee185() {
      var i;
      return _regenerator2.default.wrap(function _callee185$(_context185) {
        while (1) {
          switch (_context185.prev = _context185.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('body > input[id][name]');
              _ADSBYPASSER_NAMESPACE__.$.openLink(i.value);
            case 3:
            case 'end':
              return _context185.stop();
          }
        }
      }, _callee185, this);
    }));
    function ready() {
      return _ref187.apply(this, arguments);
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
    var _ref188 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee186(m) {
      var url;
      return _regenerator2.default.wrap(function _callee186$(_context186) {
        while (1) {
          switch (_context186.prev = _context186.next) {
            case 0:
              url = atob(m.path[1]);
              url = url.match(/\{sht-io\}(.+)\{sht-io\}.*\{sht-io\}/);
              _context186.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url[1]);
            case 4:
            case 'end':
              return _context186.stop();
          }
        }
      }, _callee186, this);
    }));
    function start(_x42) {
      return _ref188.apply(this, arguments);
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
    var _ref189 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee187(m) {
      var l;
      return _regenerator2.default.wrap(function _callee187$(_context187) {
        while (1) {
          switch (_context187.prev = _context187.next) {
            case 0:
              l = m.path[1];
              if (!/^https?:\/\//.test(l)) {
                l = 'http://' + l;
              }
              _context187.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l);
            case 4:
            case 'end':
              return _context187.stop();
          }
        }
      }, _callee187, this);
    }));
    function start(_x43) {
      return _ref189.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^smll\.io$/
  },
  ready: function () {
    var _ref190 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee188() {
      var m;
      return _regenerator2.default.wrap(function _callee188$(_context188) {
        while (1) {
          switch (_context188.prev = _context188.next) {
            case 0:
              m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/window\.location="([^"]*)";/);
              _context188.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m[1]);
            case 3:
            case 'end':
              return _context188.stop();
          }
        }
      }, _callee188, this);
    }));
    function ready() {
      return _ref190.apply(this, arguments);
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
    var _ref191 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee189() {
      var id, url;
      return _regenerator2.default.wrap(function _callee189$(_context189) {
        while (1) {
          switch (_context189.prev = _context189.next) {
            case 0:
              id = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/\{id:'(\d+)'\}/);
              _context189.next = 3;
              return _ADSBYPASSER_NAMESPACE__._.wait(3000);
            case 3:
              _context189.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.post('/site/getRedirectLink', {
                id: id[1]
              });
            case 5:
              url = _context189.sent;
              _context189.next = 8;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 8:
            case 'end':
              return _context189.stop();
          }
        }
      }, _callee189, this);
    }));
    function ready() {
      return _ref191.apply(this, arguments);
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
    var _ref192 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee190() {
      var a, href, method, csrfParam, csrfToken, form, input, script, m;
      return _regenerator2.default.wrap(function _callee190$(_context190) {
        while (1) {
          switch (_context190.prev = _context190.next) {
            case 0:
              a = _ADSBYPASSER_NAMESPACE__.$.$('#btn-with-link');
              if (a) {
                _context190.next = 3;
                break;
              }
              return _context190.abrupt('return');
            case 3:
              href = a.href;
              method = a.dataset.method;
              if (!method) {
                _context190.next = 22;
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
              return _context190.abrupt('return');
            case 22:
              _context190.next = 24;
              return _ADSBYPASSER_NAMESPACE__.$.post(location.pathname + '.js');
            case 24:
              script = _context190.sent;
              m = script.match(/const link = "([^"]+)";/);
              if (m) {
                _context190.next = 29;
                break;
              }
              _ADSBYPASSER_NAMESPACE__._.warn('script changed');
              return _context190.abrupt('return');
            case 29:
              _context190.next = 31;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m[1]);
            case 31:
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
    host: /^stash-coins\.com$/
  },
  start: function () {
    var _ref193 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee191() {
      var url, i;
      return _regenerator2.default.wrap(function _callee191$(_context191) {
        while (1) {
          switch (_context191.prev = _context191.next) {
            case 0:
              url = window.location.toString();
              i = url.lastIndexOf('http');
              url = url.substr(i);
              _context191.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 5:
            case 'end':
              return _context191.stop();
          }
        }
      }, _callee191, this);
    }));
    function start() {
      return _ref193.apply(this, arguments);
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
    var _ref194 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee192(m) {
      var url;
      return _regenerator2.default.wrap(function _callee192$(_context192) {
        while (1) {
          switch (_context192.prev = _context192.next) {
            case 0:
              url = decodeURIComponent(m.query[1]);
              _context192.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 3:
            case 'end':
              return _context192.stop();
          }
        }
      }, _callee192, this);
    }));
    function start(_x44) {
      return _ref194.apply(this, arguments);
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
    var _ref195 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee193(m) {
      return _regenerator2.default.wrap(function _callee193$(_context193) {
        while (1) {
          switch (_context193.prev = _context193.next) {
            case 0:
              _context193.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m.query[1]);
            case 2:
            case 'end':
              return _context193.stop();
          }
        }
      }, _callee193, this);
    }));
    function start(_x45) {
      return _ref195.apply(this, arguments);
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
  }, {
    host: /^www\.compartiendofull\.net$/,
    path: /^\/go2/,
    query: /^\?p=([a-zA-Z0-9/=]+)$/
  }],
  start: function () {
    var _ref196 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee194(m) {
      var rawLink;
      return _regenerator2.default.wrap(function _callee194$(_context194) {
        while (1) {
          switch (_context194.prev = _context194.next) {
            case 0:
              rawLink = atob(m.query[1]);
              _context194.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(rawLink);
            case 3:
            case 'end':
              return _context194.stop();
          }
        }
      }, _callee194, this);
    }));
    function start(_x46) {
      return _ref196.apply(this, arguments);
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
    var _ref197 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee195(m) {
      var l, table;
      return _regenerator2.default.wrap(function _callee195$(_context195) {
        while (1) {
          switch (_context195.prev = _context195.next) {
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
              _context195.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l);
            case 5:
            case 'end':
              return _context195.stop();
          }
        }
      }, _callee195, this);
    }));
    function start(_x47) {
      return _ref197.apply(this, arguments);
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
    var _ref198 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee196(m) {
      var l;
      return _regenerator2.default.wrap(function _callee196$(_context196) {
        while (1) {
          switch (_context196.prev = _context196.next) {
            case 0:
              l = 'http://' + m.path[1];
              _context196.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l);
            case 3:
            case 'end':
              return _context196.stop();
          }
        }
      }, _callee196, this);
    }));
    function start(_x48) {
      return _ref198.apply(this, arguments);
    }
    return start;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: [{
    host: [/^(designinghomey|ani-share|sinopsisfilmku|autolinkach)\.com$/, /^motonews\.club$/, /^(autofans|landscapenature)\.pw$/, /^(sidespace|erogedownload)\.net$/],
    query: /get=([^&]+)/
  }, {
    host: /^sipkur\.us$/,
    path: /\.html$/
  }],
  ready: function () {
    var _ref199 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee197(m) {
      var s;
      return _regenerator2.default.wrap(function _callee197$(_context197) {
        while (1) {
          switch (_context197.prev = _context197.next) {
            case 0:
              s = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/(const|var) a='([^']+)'/);
              if (!s) {
                _context197.next = 5;
                break;
              }
              _context197.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(s[2]);
            case 4:
              return _context197.abrupt('return');
            case 5:
              s = atob(m.query[1]);
              _context197.next = 8;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(s);
            case 8:
            case 'end':
              return _context197.stop();
          }
        }
      }, _callee197, this);
    }));
    function ready(_x49) {
      return _ref199.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^kombatch\.loncat\.pw$/
  },
  ready: function () {
    var _ref200 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee198() {
      var s;
      return _regenerator2.default.wrap(function _callee198$(_context198) {
        while (1) {
          switch (_context198.prev = _context198.next) {
            case 0:
              s = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/\.open\("([^"]+)",/);
              s = s[1].match(/go=([^&]+)/);
              s = atob(s[1]);
              _context198.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(s);
            case 5:
            case 'end':
              return _context198.stop();
          }
        }
      }, _callee198, this);
    }));
    function ready() {
      return _ref200.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^ww[23]\.picnictrans\.com$/, /^short\.awsubs\.(co|me)$/]
  },
  ready: function () {
    var _ref201 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee199() {
      var a;
      return _regenerator2.default.wrap(function _callee199$(_context199) {
        while (1) {
          switch (_context199.prev = _context199.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('div.kiri > center > a');
              _context199.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case 'end':
              return _context199.stop();
          }
        }
      }, _callee199, this);
    }));
    function ready() {
      return _ref201.apply(this, arguments);
    }
    return ready;
  }()
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^susutinv2\.com$/
  },
  ready: function () {
    var _ref202 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee200() {
      var s;
      return _regenerator2.default.wrap(function _callee200$(_context200) {
        while (1) {
          switch (_context200.prev = _context200.next) {
            case 0:
              s = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/="([^"]+)",/);
              if (s) {
                _context200.next = 4;
                break;
              }
              _ADSBYPASSER_NAMESPACE__._.warn('site changed');
              return _context200.abrupt('return');
            case 4:
              _context200.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(s[1]);
            case 6:
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
    host: /^www\.njiir\.com$/
  },
  ready: function () {
    var _ref203 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee201() {
      var a;
      return _regenerator2.default.wrap(function _callee201$(_context201) {
        while (1) {
          switch (_context201.prev = _context201.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('div.download-link > a');
              a = a.href.match(/r=(.*)$/);
              a = atob(a[1]);
              _context201.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a);
            case 5:
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
    var _ref204 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee202() {
      var a;
      return _regenerator2.default.wrap(function _callee202$(_context202) {
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
    var _ref205 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee203() {
      var a;
      return _regenerator2.default.wrap(function _callee203$(_context203) {
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
    var _ref206 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee204(m) {
      return _regenerator2.default.wrap(function _callee204$(_context204) {
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
    function start(_x50) {
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
    var _ref207 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee205() {
      var a;
      return _regenerator2.default.wrap(function _callee205$(_context205) {
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
    var _ref208 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee206(m) {
      var l;
      return _regenerator2.default.wrap(function _callee206$(_context206) {
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
    function start(_x51) {
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
    var _ref209 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee207() {
      var a;
      return _regenerator2.default.wrap(function _callee207$(_context207) {
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
    var _ref210 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee208(m) {
      var linkId, directLink;
      return _regenerator2.default.wrap(function _callee208$(_context208) {
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
    function start(_x52) {
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
    var _ref211 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee209() {
      var frame, i;
      return _regenerator2.default.wrap(function _callee209$(_context209) {
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
    var _ref212 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee210() {
      var a;
      return _regenerator2.default.wrap(function _callee210$(_context210) {
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
    var _ref213 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee211() {
      var a;
      return _regenerator2.default.wrap(function _callee211$(_context211) {
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
    var _ref214 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee212() {
      var matches;
      return _regenerator2.default.wrap(function _callee212$(_context212) {
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
    var _ref215 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee213() {
      var m;
      return _regenerator2.default.wrap(function _callee213$(_context213) {
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
    var _ref216 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee214() {
      var iframe;
      return _regenerator2.default.wrap(function _callee214$(_context214) {
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
    var _ref217 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee215() {
      var path, m, l;
      return _regenerator2.default.wrap(function _callee215$(_context215) {
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
    var _ref218 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee216() {
      var a;
      return _regenerator2.default.wrap(function _callee216$(_context216) {
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
    var _ref219 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee217() {
      var l;
      return _regenerator2.default.wrap(function _callee217$(_context217) {
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
    var _ref220 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee218() {
      var text, m;
      return _regenerator2.default.wrap(function _callee218$(_context218) {
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
    var _ref221 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee219() {
      var o;
      return _regenerator2.default.wrap(function _callee219$(_context219) {
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
    var _ref222 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee220() {
      var m;
      return _regenerator2.default.wrap(function _callee220$(_context220) {
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
    var _ref223 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee221() {
      var l;
      return _regenerator2.default.wrap(function _callee221$(_context221) {
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
    var _ref224 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee222() {
      var a;
      return _regenerator2.default.wrap(function _callee222$(_context222) {
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
    var _ref225 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee223() {
      var link;
      return _regenerator2.default.wrap(function _callee223$(_context223) {
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
    var _ref227 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee225(url) {
      var text, goodURL;
      return _regenerator2.default.wrap(function _callee225$(_context225) {
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
    return function getURL(_x53) {
      return _ref227.apply(this, arguments);
    };
  }();
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: 'http://www.yooclick.com/l/*',
    ready: function () {
      var _ref226 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee224() {
        var uniq, path, url;
        return _regenerator2.default.wrap(function _callee224$(_context224) {
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
                url = path + '?ajax=true&adblock=false&old=false&framed=false&uniq=' + uniq;
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
    var _ref228 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee226(m) {
      var url;
      return _regenerator2.default.wrap(function _callee226$(_context226) {
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
    function start(_x54) {
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
    var _ref229 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee227(m) {
      var url;
      return _regenerator2.default.wrap(function _callee227$(_context227) {
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
    function start(_x55) {
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
    var _ref230 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee228() {
      var a;
      return _regenerator2.default.wrap(function _callee228$(_context228) {
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
    var _ref231 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee229() {
      return _regenerator2.default.wrap(function _callee229$(_context229) {
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
    var _ref232 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee230() {
      var m;
      return _regenerator2.default.wrap(function _callee230$(_context230) {
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
      var _ref233 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee231(m) {
        var sjcl, paste_id, paste_salt, API_URL, pasteInfo, raw_paste, elm, frame;
        return _regenerator2.default.wrap(function _callee231$(_context231) {
          while (1) {
            switch (_context231.prev = _context231.next) {
              case 0:
                sjcl = _ADSBYPASSER_NAMESPACE__.$.window.sjcl;
                paste_id = m.path[1];
                paste_salt = m.hash[1];
                API_URL = 'https://binbox.io/' + paste_id + '.json';
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
      function ready(_x56) {
        return _ref233.apply(this, arguments);
      }
      return ready;
    }()
  });
  var sUrl = '(\\b(https?|ftp|file)://[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])';
  function isLink(text) {
    var rUrl = new RegExp('^' + sUrl + '$', 'i');
    return rUrl.test(text);
  }
  function linkify(text) {
    var rUrl = new RegExp(sUrl, 'ig');
    return text.replace(rUrl, function (match) {
      return '<a href="' + match + '">' + match + '</a>';
    });
  }
})();
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?pasted\.co$/,
    path: /^\/\w+$/
  },
  ready: function () {
    var _ref234 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee232() {
      return _regenerator2.default.wrap(function _callee232$(_context232) {
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
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$ = exports._ = undefined;
var _ajax = __webpack_require__(149);
var _cookie = __webpack_require__(150);
var _core = __webpack_require__(4);
var _dispatcher = __webpack_require__(56);
var _dom = __webpack_require__(151);
var _link = __webpack_require__(152);
var _logger = __webpack_require__(33);
var _misc = __webpack_require__(153);
var _platform = __webpack_require__(24);
var _ = {
  AdsBypasserError: _core.AdsBypasserError,
  find: _core.find,
  forEach: _core.forEach,
  generateRandomIP: _misc.generateRandomIP,
  info: _logger.info,
  none: _core.none,
  partial: _core.partial,
  register: _dispatcher.register,
  tryEvery: _core.tryEvery,
  wait: _core.wait,
  warn: _logger.warn
};
function $(selector, context) {
  return (0, _dom.querySelector)(selector, context);
}
$.$ = _dom.querySelectorOrNull;
$.$$ = _dom.querySelectorAll;
$.block = _dom.block;
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
$.toDOM = _dom.toDOM;
$.window = _platform.usw;
exports._ = _;
exports.$ = $;
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.post = exports.get = undefined;
var _promise = __webpack_require__(9);
var _promise2 = _interopRequireDefault(_promise);
var _stringify = __webpack_require__(72);
var _stringify2 = _interopRequireDefault(_stringify);
var _typeof2 = __webpack_require__(32);
var _typeof3 = _interopRequireDefault(_typeof2);
var _getOwnPropertyNames = __webpack_require__(73);
var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);
var _getPrototypeOf = __webpack_require__(48);
var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
var _classCallCheck2 = __webpack_require__(49);
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
var _createClass2 = __webpack_require__(50);
var _createClass3 = _interopRequireDefault(_createClass2);
var _possibleConstructorReturn2 = __webpack_require__(51);
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
var _inherits2 = __webpack_require__(55);
var _inherits3 = _interopRequireDefault(_inherits2);
var _core = __webpack_require__(4);
var _platform = __webpack_require__(24);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var AjaxError = function (_AdsBypasserError) {
  (0, _inherits3.default)(AjaxError, _AdsBypasserError);
  function AjaxError(method, url, data, headers, status, response) {
    (0, _classCallCheck3.default)(this, AjaxError);
    var _this = (0, _possibleConstructorReturn3.default)(this, (AjaxError.__proto__ || (0, _getPrototypeOf2.default)(AjaxError)).call(this, method + ' ' + url + ' got ' + status));
    _this._method = method;
    _this._url = url;
    _this._data = data;
    _this._headers = headers;
    _this._status = status;
    _this._response = response;
    return _this;
  }
  (0, _createClass3.default)(AjaxError, [{
    key: 'name',
    get: function get() {
      return 'AjaxError';
    }
  }, {
    key: 'method',
    get: function get() {
      return this._method;
    }
  }, {
    key: 'url',
    get: function get() {
      return this._url;
    }
  }, {
    key: 'data',
    get: function get() {
      return this._data;
    }
  }, {
    key: 'headers',
    get: function get() {
      return this._headers;
    }
  }, {
    key: 'status',
    get: function get() {
      return this._status;
    }
  }, {
    key: 'response',
    get: function get() {
      return this._response;
    }
  }]);
  return AjaxError;
}(_core.AdsBypasserError);
function deepJoin(prefix, object) {
  var keys = (0, _getOwnPropertyNames2.default)(object);
  var mapped = (0, _core.map)(keys, function (k) {
    var v = object[k];
    var key = prefix + '[' + k + ']';
    if ((typeof v === 'undefined' ? 'undefined' : (0, _typeof3.default)(v)) === 'object') {
      return deepJoin(key, v);
    }
    var tmp = [key, v].map(encodeURIComponent);
    return tmp.join('=');
  });
  return mapped.join('&');
}
function toQuery(data) {
  var type = typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data);
  if (data === null || type !== 'string' && type !== 'object') {
    return '';
  }
  if (type === 'string') {
    return data;
  }
  if (data instanceof String) {
    return data.toString();
  }
  var keys = (0, _getOwnPropertyNames2.default)(data);
  return (0, _core.map)(keys, function (k) {
    var v = data[k];
    if ((typeof v === 'undefined' ? 'undefined' : (0, _typeof3.default)(v)) === 'object') {
      return deepJoin(k, v);
    }
    var tmp = [k, v].map(encodeURIComponent);
    return tmp.join('=');
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
      data = (0, _stringify2.default)(data);
    } else {
      data = toQuery(data);
    }
    headers['Content-Length'] = data.length;
  }
  return new _promise2.default(function (resolve, reject) {
    _platform.GMAPI.xmlHttpRequest({
      method: method,
      url: url,
      data: data,
      headers: headers,
      onload: function onload(response) {
        response = typeof response.responseText !== 'undefined' ? response : this;
        if (response.status !== 200) {
          reject(new AjaxError(method, url, data, headers, response.status, response.responseText));
        } else {
          resolve(response.responseText);
        }
      },
      onerror: function onerror(response) {
        response = typeof response.responseText !== 'undefined' ? response : this;
        reject(new AjaxError(method, url, data, headers, response.status, response.responseText));
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
exports.get = get;
exports.post = post;
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetCookies = exports.getCookie = exports.setCookie = undefined;
var _slicedToArray2 = __webpack_require__(17);
var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
var _core = __webpack_require__(4);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function setCookie(key, value) {
  document.cookie = key + '=' + value + ';path=' + location.pathname + ';';
}
function getCookie(key) {
  var _find = (0, _core.find)(document.cookie.split(';'), function (v) {
    var k = v.replace(/^\s*([a-zA-Z0-9-_]+)=.+$/, '$1');
    if (k !== key) {
      return _core.none;
    }
  }),
      _find2 = (0, _slicedToArray3.default)(_find, 2),
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
    document.cookie = k + '=;expires=' + d + ';';
    document.cookie = k + '=;path=/;expires=' + d + ';';
    var e = function e(a, b, c) {
      return a + '=;path=/;domain=' + b + ';expires=' + c + ';';
    };
    document.cookie = e(k, a, d);
    document.cookie = e(k, b, d);
    document.cookie = e(k, c, d);
  });
}
exports.setCookie = setCookie;
exports.getCookie = getCookie;
exports.resetCookies = resetCookies;
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toDOM = exports.searchFromScripts = exports.remove = exports.querySelectorOrNull = exports.querySelectorAll = exports.querySelector = exports.block = undefined;
var _slicedToArray2 = __webpack_require__(17);
var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
var _getPrototypeOf = __webpack_require__(48);
var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
var _classCallCheck2 = __webpack_require__(49);
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
var _createClass2 = __webpack_require__(50);
var _createClass3 = _interopRequireDefault(_createClass2);
var _possibleConstructorReturn2 = __webpack_require__(51);
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
var _inherits2 = __webpack_require__(55);
var _inherits3 = _interopRequireDefault(_inherits2);
var _core = __webpack_require__(4);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var DomNotFoundError = function (_AdsBypasserError) {
  (0, _inherits3.default)(DomNotFoundError, _AdsBypasserError);
  function DomNotFoundError(selector) {
    (0, _classCallCheck3.default)(this, DomNotFoundError);
    return (0, _possibleConstructorReturn3.default)(this, (DomNotFoundError.__proto__ || (0, _getPrototypeOf2.default)(DomNotFoundError)).call(this, '`' + selector + '` not found'));
  }
  (0, _createClass3.default)(DomNotFoundError, [{
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
function block(selector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!context) {
    context = document;
  }
  var fn = null;
  if ((0, _core.isString)(selector)) {
    fn = function fn() {
      remove(selector, context);
    };
  } else if (typeof selector === 'function') {
    fn = function fn(mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (selector(node)) {
          node.parentNode.removeChild(node);
        }
      });
    };
  } else {
    throw new TypeError('wrong selector');
  }
  var o = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      fn(mutation);
    });
  });
  o.observe(context, {
    childList: true,
    subtree: true
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
      _find2 = (0, _slicedToArray3.default)(_find, 3),
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
      _find4 = (0, _slicedToArray3.default)(_find3, 2),
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
exports.block = block;
exports.querySelector = querySelector;
exports.querySelectorAll = querySelectorAll;
exports.querySelectorOrNull = querySelectorOrNull;
exports.remove = remove;
exports.searchFromScripts = searchFromScripts;
exports.toDOM = toDOM;
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openLink = undefined;
var _regenerator = __webpack_require__(22);
var _regenerator2 = _interopRequireDefault(_regenerator);
var _asyncToGenerator2 = __webpack_require__(30);
var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
var get = function () {
  var _ref = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee(url) {
    var a, clicked, tick;
    return _regenerator2.default.wrap(function _callee$(_context) {
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
  var _ref2 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee2(path, params) {
    var form;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
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
  var _ref3 = (0, _asyncToGenerator3.default)( _regenerator2.default.mark(function _callee3(to, options) {
    var withReferer, postData, from;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
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
            (0, _logger.info)(from + ' -> ' + to);
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
var _core = __webpack_require__(4);
var _logger = __webpack_require__(33);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function prepare(e) {
  if (!document.body) {
    document.body = document.createElement('body');
  }
  document.body.appendChild(e);
  return (0, _core.wait)(0);
}
exports.openLink = openLink;
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateRandomIP = exports.nuke = exports.removeAllTimer = undefined;
var _core = __webpack_require__(4);
var _platform = __webpack_require__(24);
var _logger = __webpack_require__(33);
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
    _platform.usw.document.write('nuked by AdsBypasser, leading to ...<br/>');
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
exports.removeAllTimer = removeAllTimer;
exports.nuke = nuke;
exports.generateRandomIP = generateRandomIP;
 })
 ]);