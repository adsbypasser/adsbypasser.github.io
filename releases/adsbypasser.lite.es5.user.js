// ==UserScript==
// @name           AdsBypasser Lite Legacy
// @namespace      AdsBypasser
// @description    Bypass Ads
// @copyright      2012+, Wei-Cheng Pan, https://adsbypasser.github.io/
// @version        7.20.0
// @license        BSD
// @homepageURL    https://adsbypasser.github.io/
// @supportURL     https://github.com/adsbypasser/adsbypasser/issues
// @updateURL      https://adsbypasser.github.io/releases/adsbypasser.lite.es5.meta.js
// @downloadURL    https://adsbypasser.github.io/releases/adsbypasser.lite.es5.user.js
// @icon           https://raw.githubusercontent.com/adsbypasser/adsbypasser/v7.20.0/resources/img/logo.png
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
 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
 		}
 	};
 	__webpack_require__.r = function(exports) {
 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 		}
 		Object.defineProperty(exports, '__esModule', { value: true });
 	};
 	__webpack_require__.t = function(value, mode) {
 		if(mode & 1) value = __webpack_require__(value);
 		if(mode & 8) return value;
 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
 		var ns = Object.create(null);
 		__webpack_require__.r(ns);
 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
 		return ns;
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
 (function(module, exports, __webpack_require__) {
"use strict";
var _interopRequireDefault = __webpack_require__(1);
var _regenerator = _interopRequireDefault(__webpack_require__(2));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(4));
var _core = __webpack_require__(5);
var _dispatcher = __webpack_require__(28);
var _platform = __webpack_require__(29);
var _config = __webpack_require__(30);
var _logger = __webpack_require__(31);
__webpack_require__(32);
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
function disableWindowOpen() {
  try {
    _platform.usw.open = function () {
      return {
        closed: false
      };
    };
  } catch (e) {
    (0, _logger.warn)('cannot mock window.open');
  }
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
function beforeDOMReady(_x) {
  return _beforeDOMReady.apply(this, arguments);
}
function _beforeDOMReady() {
  _beforeDOMReady = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee(handler) {
    var config;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _config.dumpConfig)();
          case 2:
            config = _context.sent;
            (0, _logger.info)('working on\n%s \nwith\n%s', window.location.toString(), JSON.stringify(config));
            disableLeavePrompt(_platform.usw);
            disableWindowOpen();
            _context.next = 8;
            return handler.start();
          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _beforeDOMReady.apply(this, arguments);
}
function afterDOMReady(_x2) {
  return _afterDOMReady.apply(this, arguments);
}
function _afterDOMReady() {
  _afterDOMReady = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee2(handler) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            disableLeavePrompt(_platform.usw.document.body);
            changeTitle();
            _context2.next = 4;
            return handler.ready();
          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _afterDOMReady.apply(this, arguments);
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
function main() {
  return _main.apply(this, arguments);
}
function _main() {
  _main = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee3() {
    var handler;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(_platform.rawUSW.top !== _platform.rawUSW.self)) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
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
            return _context3.abrupt("return");
          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _main.apply(this, arguments);
}
main()["catch"](function (e) {
  (0, _logger.warn)(e);
});
 }),
 (function(module, exports) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 (function(module, exports, __webpack_require__) {
module.exports = __webpack_require__(3);
 }),
 (function(module, exports, __webpack_require__) {
var runtime = (function (exports) {
  "use strict";
  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; 
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);
    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }
  exports.wrap = wrap;
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
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    IteratorPrototype = NativeIteratorPrototype;
  }
  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }
  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };
  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };
  exports.awrap = function(arg) {
    return { __await: arg };
  };
  function AsyncIterator(generator, PromiseImpl) {
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
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }
        return PromiseImpl.resolve(value).then(function(unwrapped) {
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          return invoke("throw", error, resolve, reject);
        });
      }
    }
    var previousPromise;
    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
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
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );
    return exports.isGeneratorFunction(outerFn)
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
        if (delegate.iterator["return"]) {
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
  define(Gp, toStringTagSymbol, "Generator");
  define(Gp, iteratorSymbol, function() {
    return this;
  });
  define(Gp, "toString", function() {
    return "[object Generator]";
  });
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
  exports.keys = function(object) {
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
  exports.values = values;
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
  return exports;
}(
   true ? module.exports : undefined
));
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
 }),
 (function(module, exports) {
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
var _regeneratorRuntime2 = __webpack_require__(2);
var _interopRequireDefault = __webpack_require__(1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdsBypasserError = void 0;
exports.every = every;
exports.find = find;
exports.forEach = forEach;
exports.isString = isString;
exports.map = map;
exports.none = void 0;
exports.nop = nop;
exports.partial = partial;
exports.tryEvery = tryEvery;
exports.wait = wait;
var _regenerator = _interopRequireDefault(__webpack_require__(2));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(6));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(12));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(16));
var _createClass2 = _interopRequireDefault(__webpack_require__(17));
var _inherits2 = _interopRequireDefault(__webpack_require__(18));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(20));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(23));
var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(24));
var _marked = _regeneratorRuntime2.mark(enumerate);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var AdsBypasserError = function (_Error) {
  (0, _inherits2["default"])(AdsBypasserError, _Error);
  var _super = _createSuper(AdsBypasserError);
  function AdsBypasserError(message) {
    (0, _classCallCheck2["default"])(this, AdsBypasserError);
    return _super.call(this, message);
  }
  (0, _createClass2["default"])(AdsBypasserError, [{
    key: "name",
    get: function get() {
      return 'AdsBypasserError';
    }
  }]);
  return AdsBypasserError;
}( (0, _wrapNativeSuper2["default"])(Error));
exports.AdsBypasserError = AdsBypasserError;
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
  var _iterator = _createForOfIteratorHelper(enumerate(collection)),
      _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = (0, _slicedToArray2["default"])(_step.value, 2),
          k = _step$value[0],
          v = _step$value[1];
      var r = fn(v, k, collection);
      if (r !== none) {
        return [k, v, r];
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return [none, none, none];
}
function enumerate(collection) {
  var keys, _iterator2, _step2, k;
  return _regenerator["default"].wrap(function enumerate$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!isArrayLike(collection)) {
            _context.next = 3;
            break;
          }
          return _context.delegateYield(Array.prototype.entries.call(collection), "t0", 2);
        case 2:
          return _context.abrupt("return");
        case 3:
          keys = Object.getOwnPropertyNames(collection);
          _iterator2 = _createForOfIteratorHelper(keys);
          _context.prev = 5;
          _iterator2.s();
        case 7:
          if ((_step2 = _iterator2.n()).done) {
            _context.next = 13;
            break;
          }
          k = _step2.value;
          _context.next = 11;
          return [k, collection[k]];
        case 11:
          _context.next = 7;
          break;
        case 13:
          _context.next = 18;
          break;
        case 15:
          _context.prev = 15;
          _context.t1 = _context["catch"](5);
          _iterator2.e(_context.t1);
        case 18:
          _context.prev = 18;
          _iterator2.f();
          return _context.finish(18);
        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[5, 15, 18, 21]]);
}
function isArrayLike(collection) {
  return Array.isArray(collection) || isNodeList(collection);
}
function isNodeList(collection) {
  return collection.constructor.name === 'NodeList';
}
function partial(fn) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (typeof fn !== 'function') {
    throw new AdsBypasserError('must give a function');
  } 
  return function () {
    for (var _len2 = arguments.length, innerArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      innerArgs[_key2] = arguments[_key2];
    }
    return fn.apply(void 0, (0, _toConsumableArray2["default"])(args.concat(innerArgs)));
  };
}
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}
function nop() {}
var none = nop;
exports.none = none;
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
 }),
 (function(module, exports, __webpack_require__) {
var arrayWithoutHoles = __webpack_require__(7);
var iterableToArray = __webpack_require__(9);
var unsupportedIterableToArray = __webpack_require__(10);
var nonIterableSpread = __webpack_require__(11);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 (function(module, exports, __webpack_require__) {
var arrayLikeToArray = __webpack_require__(8);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 (function(module, exports) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 (function(module, exports) {
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 (function(module, exports, __webpack_require__) {
var arrayLikeToArray = __webpack_require__(8);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 (function(module, exports) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 (function(module, exports, __webpack_require__) {
var arrayWithHoles = __webpack_require__(13);
var iterableToArrayLimit = __webpack_require__(14);
var unsupportedIterableToArray = __webpack_require__(10);
var nonIterableRest = __webpack_require__(15);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 (function(module, exports) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 (function(module, exports) {
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 (function(module, exports) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 (function(module, exports) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 (function(module, exports) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 (function(module, exports, __webpack_require__) {
var setPrototypeOf = __webpack_require__(19);
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 (function(module, exports) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 (function(module, exports, __webpack_require__) {
var _typeof = __webpack_require__(21)["default"];
var assertThisInitialized = __webpack_require__(22);
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 (function(module, exports) {
function _typeof(obj) {
  "@babel/helpers - typeof";
  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 (function(module, exports) {
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 (function(module, exports) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 (function(module, exports, __webpack_require__) {
var getPrototypeOf = __webpack_require__(23);
var setPrototypeOf = __webpack_require__(19);
var isNativeFunction = __webpack_require__(25);
var construct = __webpack_require__(26);
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _wrapNativeSuper(Class);
}
module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 (function(module, exports) {
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 (function(module, exports, __webpack_require__) {
var setPrototypeOf = __webpack_require__(19);
var isNativeReflectConstruct = __webpack_require__(27);
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _construct.apply(null, arguments);
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 (function(module, exports) {
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
var _interopRequireDefault = __webpack_require__(1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findHandler = findHandler;
exports.register = register;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(12));
var _core = __webpack_require__(5);
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
          _find2 = (0, _slicedToArray2["default"])(_find, 3),
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
      _find4 = (0, _slicedToArray2["default"])(_find3, 3),
      r = _find4[2];
  return r !== _core.none ? r : null;
}
function dispatchByString(rule, url_3) {
  var scheme = /\*|https?|file|ftp|chrome-extension/; 
  var host = /\*|(\*\.)?([^/*]+)/; 
  var path = /\/.*/; 
  var tmp = "^(".concat(scheme.source, ")://(").concat(host.source, ")?(").concat(path.source, ")$");
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
  path = new RegExp("^".concat(tmp, "$"));
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
      _find6 = (0, _slicedToArray2["default"])(_find5, 3),
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
var _interopRequireDefault = __webpack_require__(1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usw = exports.rawUSW = exports.GMAPI = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(21));
var _core = __webpack_require__(5);
var rawUSW = getUnsafeWindow();
exports.rawUSW = rawUSW;
var usw = getUnsafeWindowProxy();
exports.usw = usw;
var GMAPI = getGreaseMonkeyAPI();
exports.GMAPI = GMAPI;
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
      return Promise.resolve(GM_getValue(name, default_));
    };
  } else {
    gm.getValue = GM.getValue;
  }
  if (typeof GM_setValue === 'function') {
    gm.setValue = function (name, value) {
      return Promise.resolve(GM_setValue(name, value));
    };
  } else {
    gm.setValue = GM.setValue;
  }
  if (typeof GM_deleteValue === 'function') {
    gm.deleteValue = function (name) {
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
    gm.registerMenuCommand = _core.nop;
  } 
  if (typeof GM_getResourceURL === 'function') {
    gm.getResourceUrl = function (resourceName) {
      return Promise.resolve(GM_getResourceURL(resourceName));
    };
  } else if ((typeof GM === "undefined" ? "undefined" : (0, _typeof2["default"])(GM)) === 'object' && GM && GM.getResourceUrl) {
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
      var type = (0, _typeof2["default"])(value);
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
var _interopRequireDefault = __webpack_require__(1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dumpConfig = dumpConfig;
exports.loadConfig = loadConfig;
var _regenerator = _interopRequireDefault(__webpack_require__(2));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(12));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(4));
var _core = __webpack_require__(5);
var _dispatcher = __webpack_require__(28);
var _platform = __webpack_require__(29);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
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
var PATCHES = [(0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee() {
  var alignCenter, changeBackground, scaleImage, redirectImage, ac;
  return _regenerator["default"].wrap(function _callee$(_context) {
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
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})), (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee2() {
  var externalServerSupport;
  return _regenerator["default"].wrap(function _callee2$(_context2) {
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
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})), (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee3() {
  var logLevel;
  return _regenerator["default"].wrap(function _callee3$(_context3) {
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
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
})), (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee4() {
  return _regenerator["default"].wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _platform.GMAPI.deleteValue('external_server_support');
        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _callee4);
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
function senityCheck() {
  return _senityCheck.apply(this, arguments);
}
function _senityCheck() {
  _senityCheck = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee6() {
    var verifyResults, ok;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            verifyResults = MANIFEST.map( function () {
              var _ref5 = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee5(descriptor) {
                var rv;
                return _regenerator["default"].wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return _platform.GMAPI.getValue(descriptor.key);
                      case 2:
                        rv = _context5.sent;
                        return _context5.abrupt("return", descriptor.verify(rv));
                      case 4:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));
              return function (_x) {
                return _ref5.apply(this, arguments);
              };
            }());
            _context6.next = 3;
            return Promise.all(verifyResults);
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
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _senityCheck.apply(this, arguments);
}
function migrate() {
  return _migrate.apply(this, arguments);
}
function _migrate() {
  _migrate = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee7() {
    var currentVersion;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
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
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _migrate.apply(this, arguments);
}
function loadConfig() {
  return _loadConfig.apply(this, arguments);
}
function _loadConfig() {
  _loadConfig = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee10() {
    return _regenerator["default"].wrap(function _callee10$(_context10) {
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
              ready: function ready() {
                return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee9() {
                  return _regenerator["default"].wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.next = 2;
                          return waitForPage();
                        case 2:
                          _platform.usw.commit = function () {
                            var _ref6 = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee8(data) {
                              var _i, _Object$entries, _Object$entries$_i, k, v;
                              return _regenerator["default"].wrap(function _callee8$(_context8) {
                                while (1) {
                                  switch (_context8.prev = _context8.next) {
                                    case 0:
                                      _i = 0, _Object$entries = Object.entries(data);
                                    case 1:
                                      if (!(_i < _Object$entries.length)) {
                                        _context8.next = 8;
                                        break;
                                      }
                                      _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2), k = _Object$entries$_i[0], v = _Object$entries$_i[1];
                                      _context8.next = 5;
                                      return _platform.GMAPI.setValue(k, v);
                                    case 5:
                                      _i++;
                                      _context8.next = 1;
                                      break;
                                    case 8:
                                    case "end":
                                      return _context8.stop();
                                  }
                                }
                              }, _callee8);
                            }));
                            return function (_x2) {
                              return _ref6.apply(this, arguments);
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
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, _callee9);
                }))();
              }
            });
          case 5:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _loadConfig.apply(this, arguments);
}
function waitForPage() {
  return new Promise(function (resolve) {
    var i = setInterval(function () {
      if (_platform.usw.render) {
        clearInterval(i);
        resolve();
      }
    }, 50);
  });
}
function dumpConfig() {
  return _dumpConfig.apply(this, arguments);
}
function _dumpConfig() {
  _dumpConfig = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee12() {
    var rv, o, _iterator, _step, _step$value, k, v;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            rv = MANIFEST.map( function () {
              var _ref7 = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee11(descriptor) {
                return _regenerator["default"].wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        _context11.t0 = descriptor.key;
                        _context11.next = 3;
                        return _platform.GMAPI.getValue(descriptor.key);
                      case 3:
                        _context11.t1 = _context11.sent;
                        return _context11.abrupt("return", [_context11.t0, _context11.t1]);
                      case 5:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11);
              }));
              return function (_x3) {
                return _ref7.apply(this, arguments);
              };
            }());
            _context12.next = 3;
            return Promise.all(rv);
          case 3:
            rv = _context12.sent;
            o = {};
            _iterator = _createForOfIteratorHelper(rv);
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _step$value = (0, _slicedToArray2["default"])(_step.value, 2), k = _step$value[0], v = _step$value[1];
                o[k] = v;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return _context12.abrupt("return", o);
          case 8:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _dumpConfig.apply(this, arguments);
}
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debug = debug;
exports.info = info;
exports.warn = warn;
var _core = __webpack_require__(5);
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
function debug() {
  log('debug', arguments);
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
var _interopRequireDefault = __webpack_require__(1);
var _regenerator = _interopRequireDefault(__webpack_require__(2));
var _inherits2 = _interopRequireDefault(__webpack_require__(18));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(20));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(23));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(16));
var _createClass2 = _interopRequireDefault(__webpack_require__(17));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(12));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(4));
var _ADSBYPASSER_NAMESPACE__ = __webpack_require__(33);
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^akoam\.net$/,
    path: /^\/download\/([^/]+)\//
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee() {
      var data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.post(location.href, m.path[1]);
            case 2:
              data = _context.sent;
              _context.prev = 3;
              data = JSON.parse(data);
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](3);
              _ADSBYPASSER_NAMESPACE__._.warn('JSON error:', _context.t0);
              return _context.abrupt("return");
            case 11:
              _context.next = 13;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(data.direct_link);
            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 7]]);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?coolrom\.com$/,
    path: /^\/dlpop\.php$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee2() {
      var matches;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              matches = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/<form method="POST" action="([^"]+)">/);
              _context2.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(matches[1]);
            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
});
(function () {
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^(www\.)?dl-protect\.com$/,
      path: /\/[A-Z0-9]+/
    },
    ready: function ready() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee3() {
        var f, iIn, _yield$waitDOM, _yield$waitDOM2, p, l;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!_ADSBYPASSER_NAMESPACE__.$.$('#captcha')) {
                  _context3.next = 2;
                  break;
                }
                return _context3.abrupt("return");
              case 2:
                f = _ADSBYPASSER_NAMESPACE__.$.$('form[name=ccerure]');
                if (!f) {
                  _context3.next = 21;
                  break;
                }
                iIn = (0, _ADSBYPASSER_NAMESPACE__.$)('input[id=in]');
                if (!iIn.value) {
                  _context3.next = 11;
                  break;
                }
                _context3.next = 8;
                return _ADSBYPASSER_NAMESPACE__._.wait(600);
              case 8:
                f.submit();
                _context3.next = 20;
                break;
              case 11:
                _context3.next = 13;
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
                _yield$waitDOM = _context3.sent;
                _yield$waitDOM2 = (0, _slicedToArray2["default"])(_yield$waitDOM, 3);
                p = _yield$waitDOM2[2];
                if (!p) {
                  _context3.next = 20;
                  break;
                }
                _context3.next = 19;
                return p;
              case 19:
                f.submit();
              case 20:
                return _context3.abrupt("return");
              case 21:
                l = _ADSBYPASSER_NAMESPACE__.$.$$('#slinks > a'); 
                if (!(l.length === 1)) {
                  _context3.next = 25;
                  break;
                }
                _context3.next = 25;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(l[0].href);
              case 25:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }); 
  function canFastRedirect() {
    return !_ADSBYPASSER_NAMESPACE__.$.$('form[name=ccerure]').onsubmit && !_ADSBYPASSER_NAMESPACE__.$.$('form[name=ccerure] input[name=pwd]');
  }
  function waitDOM(element, config, fn) {
    return new Promise(function (resolve) {
      var observer = new MutationObserver(function (mutations) {
        var _$find = _ADSBYPASSER_NAMESPACE__._.find(mutations, fn),
            _$find2 = (0, _slicedToArray2["default"])(_$find, 3),
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
    host: /^elsfile\.org$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee4() {
      var down, countdown, o, script;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              down = _ADSBYPASSER_NAMESPACE__.$.$('#btn_download');
              if (!down) {
                _context4.next = 4;
                break;
              }
              down.click();
              return _context4.abrupt("return");
            case 4:
              countdown = (0, _ADSBYPASSER_NAMESPACE__.$)('#frmdlcenter');
              o = new MutationObserver(function () {
                var submit = _ADSBYPASSER_NAMESPACE__.$.$('input[type="submit"][name="method_free"]');
                if (submit) {
                  submit.click();
                }
              });
              o.observe(countdown, {
                childList: true
              }); 
              script = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/.*eval\(function\(p,a,c,k,e,d\).*/);
              if (script.length > 0) {
                script = script[0].replace('||important', '|0|important');
                _ADSBYPASSER_NAMESPACE__._.evil(script);
              }
            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?embedupload\.com$/,
    path: /^\/$/,
    query: /^\?\w{2}=\w+$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee5() {
      var downloadPage;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              downloadPage = (0, _ADSBYPASSER_NAMESPACE__.$)('.categories a[target=_blank]');
              _context5.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(downloadPage);
            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.fileproject\.com\.br$/,
    path: /^\/files\/+/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee6() {
      var m;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/<a id="down" href="([^"]+)">/);
              _context6.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m[1]);
            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^(www\.)?indishare\.(org|me)$/, /^bdupload\.(info|asia)$/, /^upgrand\.site$/, /^3zfile\.net$/, /^uploadrar\.com$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee7() {
      var btn;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              btn = (0, _ADSBYPASSER_NAMESPACE__.$)('button#downloadbtn.downloadbtn');
              btn.removeAttribute('disabled');
              btn.click();
            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^insurance-waifu\.cf$/,
    query: /u=(.+)$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee8() {
      var f, args, response, l;
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('form');
              args = {};
              _ADSBYPASSER_NAMESPACE__._.forEach(f, function (v) {
                args[v.name] = v.value;
              });
              _context8.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.post(f.getAttribute('action'), args);
            case 5:
              response = _context8.sent;
              l = response.match(/window\.location\.href.'([^']+)';/);
              _context8.next = 9;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l[1]);
            case 9:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?jheberg\.net$/,
    path: /^\/captcha\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee9() {
      return _regenerator["default"].wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              (0, _ADSBYPASSER_NAMESPACE__.$)('.dl-button').click();
            case 1:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?jheberg\.net$/,
    path: /^\/redirect\//
  },
  ready: function ready() {
    'use strict'; 
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee10() {
      var matches, slug, hoster, response, respJSON;
      return _regenerator["default"].wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.removeAllTimer();
              matches = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/'slug':\s*'([^']+)',\s*'hoster':\s*'([^']+)'/);
              slug = matches[1];
              hoster = matches[2];
              _context10.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.post('/get/link/', {
                slug: slug,
                hoster: hoster
              });
            case 6:
              response = _context10.sent;
              respJSON = JSON.parse(response);
              _context10.next = 10;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(respJSON.url);
            case 10:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^mirrorace\.(com|org)$/,
    path: /^\/m\/.+\/\d+/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee11() {
      var ma;
      return _regenerator["default"].wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              ma = (0, _ADSBYPASSER_NAMESPACE__.$)('a.uk-button:nth-child(2)');
              _context11.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(ma.href);
            case 3:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^(www\.)?mirrorcreator\.com$/, /^(www\.)?mirrored\.to$/],
    path: /^\/downlink\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee12() {
      var a;
      return _regenerator["default"].wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.col-sm.centered.highlight a');
              _context12.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^(www\.)?mirrorcreator\.com$/, /^(www\.)?mirrored\.to$/],
    path: /^\/files\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee13() {
      return _regenerator["default"].wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              (0, _ADSBYPASSER_NAMESPACE__.$)('#dl_form').submit();
            case 1:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^multifilemirror\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee14() {
      var m;
      return _regenerator["default"].wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              m = (0, _ADSBYPASSER_NAMESPACE__.$)('#lcode form button');
              m.click();
            case 2:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.multiupfile\.com$/,
    path: /^\/f\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee15() {
      var f;
      return _regenerator["default"].wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('#yw0');
              f.submit();
            case 2:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^mylinkgen\.com$/,
    path: /^\/p\/(.+)$/
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee16() {
      return _regenerator["default"].wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              _context16.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('/g/' + m.path[1]);
            case 2:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^mylinkgen\.com$/,
    path: /^\/g\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee17() {
      var a;
      return _regenerator["default"].wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#main-content a.btn.btn-default');
              _context17.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?putlocker\.com$/,
    path: /^\/file\/[0-9A-F]+$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee18() {
      var c;
      return _regenerator["default"].wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              c = (0, _ADSBYPASSER_NAMESPACE__.$)('#confirm_form');
              c.submit();
            case 2:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^uploadhaven\.com$/,
    path: /^\/download\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee19() {
      var f;
      return _regenerator["default"].wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              _context19.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(5000);
            case 2:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('.contactForm #downloadNowBtn.btn.btn-primary');
              f.click();
            case 4:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?upmirror\.info$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee20() {
      return _regenerator["default"].wrap(function _callee20$(_context20) {
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
            case "end":
              return _context20.stop();
          }
        }
      }, _callee20);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?vidto\.me$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee21() {
      var f;
      return _regenerator["default"].wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('#btn_download').form;
              _context21.next = 3;
              return _ADSBYPASSER_NAMESPACE__._.wait(6 * 1000);
            case 3:
              f.submit();
            case 4:
            case "end":
              return _context21.stop();
          }
        }
      }, _callee21);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^zupload\.me$/, /^zeefiles\.download$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee22() {
      var z;
      return _regenerator["default"].wrap(function _callee22$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              z = (0, _ADSBYPASSER_NAMESPACE__.$)('button#link_button');
              z.removeAttribute('disabled');
              z.click();
            case 3:
            case "end":
              return _context22.stop();
          }
        }
      }, _callee22);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^01\.nl$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee23() {
      var f;
      return _regenerator["default"].wrap(function _callee23$(_context23) {
        while (1) {
          switch (_context23.prev = _context23.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('iframe#redirectframe');
              _context23.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f.src);
            case 3:
            case "end":
              return _context23.stop();
          }
        }
      }, _callee23);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^10co\.(biz|xyz|co|me)$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee24() {
      var d;
      return _regenerator["default"].wrap(function _callee24$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              d = (0, _ADSBYPASSER_NAMESPACE__.$)('.go');
              _context24.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(d.dataset.href);
            case 3:
            case "end":
              return _context24.stop();
          }
        }
      }, _callee24);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?(1be|1dl)\.biz$/,
    path: /^\/z\.php$/,
    query: /^\?(.+)/
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee25() {
      return _regenerator["default"].wrap(function _callee25$(_context25) {
        while (1) {
          switch (_context25.prev = _context25.next) {
            case 0:
              _context25.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m.query[1]);
            case 2:
            case "end":
              return _context25.stop();
          }
        }
      }, _callee25);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(1be|1dl)\.biz$/,
    path: /^\/[jt]\.php$/,
    query: /^\?s=/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee26() {
      var a;
      return _regenerator["default"].wrap(function _callee26$(_context26) {
        while (1) {
          switch (_context26.prev = _context26.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.j-link');
              _context26.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case "end":
              return _context26.stop();
          }
        }
      }, _callee26);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^1ink\.(cc|info)$/,
    path: /^\/\w+$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee27() {
      var url, urlCheck;
      return _regenerator["default"].wrap(function _callee27$(_context27) {
        while (1) {
          switch (_context27.prev = _context27.next) {
            case 0:
              url = document.head.querySelector('[name=keywords]').content;
              urlCheck = url.match(/^https?:\/\//);
              if (!urlCheck) {
                url = 'http://' + url;
              }
              _context27.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 5:
            case "end":
              return _context27.stop();
          }
        }
      }, _callee27);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?1tiny\.net$/,
    path: /\/\w+/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee28() {
      var directUrl;
      return _regenerator["default"].wrap(function _callee28$(_context28) {
        while (1) {
          switch (_context28.prev = _context28.next) {
            case 0:
              directUrl = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/window\.location='([^']+)';/);
              if (directUrl) {
                _context28.next = 3;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('script content changed');
            case 3:
              _context28.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(directUrl[1]);
            case 5:
            case "end":
              return _context28.stop();
          }
        }
      }, _callee28);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^1v\.to$/,
    path: /^\/t\/[a-zA-Z0-9/=]+/
  },
  start: function start() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee29() {
      var path;
      return _regenerator["default"].wrap(function _callee29$(_context29) {
        while (1) {
          switch (_context29.prev = _context29.next) {
            case 0:
              path = window.location.href.replace('/t/', '/saliendo/');
              _context29.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(path);
            case 3:
            case "end":
              return _context29.stop();
          }
        }
      }, _callee29);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?4fun\.tw$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee30() {
      var i;
      return _regenerator["default"].wrap(function _callee30$(_context30) {
        while (1) {
          switch (_context30.prev = _context30.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('#original_url');
              _context30.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(i.value);
            case 3:
            case "end":
              return _context30.stop();
          }
        }
      }, _callee30);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^ad2links\.com$/,
    path: /^\/\w-.+$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee31() {
      return _regenerator["default"].wrap(function _callee31$(_context31) {
        while (1) {
          switch (_context31.prev = _context31.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              _context31.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(window.location.toString(), {
                post: {
                  image: 'Skip Ad.'
                }
              });
            case 3:
            case "end":
              return _context31.stop();
          }
        }
      }, _callee31);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^ad4\.fr$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee32() {
      var s;
      return _regenerator["default"].wrap(function _callee32$(_context32) {
        while (1) {
          switch (_context32.prev = _context32.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              s = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/"src", "([^"]+)"/);
              if (s) {
                _context32.next = 5;
                break;
              }
              _ADSBYPASSER_NAMESPACE__._.warn('changed');
              return _context32.abrupt("return");
            case 5:
              _context32.next = 7;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(s[1]);
            case 7:
            case "end":
              return _context32.stop();
          }
        }
      }, _callee32);
    }))();
  }
});
(function () {
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^ad7\.biz$/,
      path: /^\/\d+\/(.*)$/
    },
    start: function start(m) {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee33() {
        var redirectLink;
        return _regenerator["default"].wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe'); 
                redirectLink = m.path[1];
                if (!redirectLink.match(/^https?:\/\//)) {
                  redirectLink = 'http://' + redirectLink;
                }
                _context33.next = 5;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(redirectLink);
              case 5:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33);
      }))();
    }
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^ad7\.biz$/,
      path: /^\/\w+$/
    },
    ready: function ready() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee34() {
        var script, url;
        return _regenerator["default"].wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                script = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts('const r_url');
                url = script.match(/&url=([^&]+)/);
                url = url[1];
                _context34.next = 6;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
              case 6:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34);
      }))();
    }
  });
})();
(function () {
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: [/^(www\.)?adb\.ug$/, /^(www\.)?lynk\.my$/, /^(www\.)?adyou\.(co|me)$/],
      path: /^(?!\/(?:privacy|terms|contact(\/.*)?|#.*)?$).*$/
    },
    ready: function ready() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee35() {
        var m, args;
        return _regenerator["default"].wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe'); 
                m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/top\.location\.href="([^"]+)"/);
                if (!m) {
                  _context35.next = 6;
                  break;
                }
                _context35.next = 5;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(m[1]);
              case 5:
                return _context35.abrupt("return");
              case 6:
                _context35.next = 8;
                return getArguments();
              case 8:
                args = _context35.sent;
                tryLink(args);
              case 10:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35);
      }))();
    }
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
      return _ADSBYPASSER_NAMESPACE__._.evil("(".concat(m[0], ")"));
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
    start: function start(m) {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee36() {
        var url;
        return _regenerator["default"].wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                url = atob(m.path[1]);
                _context36.next = 3;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
              case 3:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36);
      }))();
    }
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      path: /\/locked$/,
      query: /url=([^&]+)/
    },
    start: function start(m) {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee37() {
        var url;
        return _regenerator["default"].wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.resetCookies();
                _ADSBYPASSER_NAMESPACE__.$.setCookie('FLYSESSID', generateRandomSessionCookie(40));
                url = decodeURIComponent(m.query[1]);
                if (!url.match(/^http/)) {
                  _context37.next = 8;
                  break;
                }
                _context37.next = 6;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
              case 6:
                _context37.next = 10;
                break;
              case 8:
                _context37.next = 10;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(document.referrer);
              case 10:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37);
      }))();
    }
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      path: /pushredirect/,
      query: /.*dest=([^&]+)/
    },
    start: function start(m) {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee38() {
        var url;
        return _regenerator["default"].wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                url = decodeURIComponent(m.query[1]);
                if (!url.match(/^http/)) {
                  _context38.next = 4;
                  break;
                }
                _context38.next = 4;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
              case 4:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38);
      }))();
    }
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      query: /lp=adfly_allow&.*href=([^&]+)/
    },
    start: function start(m) {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee39() {
        var url;
        return _regenerator["default"].wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                url = decodeURIComponent(m.query[1]);
                if (!url.match(/^http/)) {
                  _context39.next = 4;
                  break;
                }
                _context39.next = 4;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
              case 4:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39);
      }))();
    }
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
    start: function start() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee40() {
        return _regenerator["default"].wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.window.document.write = _ADSBYPASSER_NAMESPACE__._.nop; 
                _ADSBYPASSER_NAMESPACE__.$.window.btoa = _ADSBYPASSER_NAMESPACE__._.nop;
              case 2:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40);
      }))();
    },
    ready: function ready() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee41() {
        var close, rv;
        return _regenerator["default"].wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe'); 
                _ADSBYPASSER_NAMESPACE__.$.setCookie('FLYSESSID', generateRandomSessionCookie(40));
                close = _ADSBYPASSER_NAMESPACE__.$.$('div[onclick="close_bar();"]');
                if (close) {
                  close.click();
                }
                _context41.next = 6;
                return _ADSBYPASSER_NAMESPACE__.$.get(location.href, '', {
                  'Origin': _ADSBYPASSER_NAMESPACE__._.none,
                  'Referer': _ADSBYPASSER_NAMESPACE__._.none,
                  'X-Requested-With': _ADSBYPASSER_NAMESPACE__._.none
                });
              case 6:
                rv = _context41.sent;
                rv = _ADSBYPASSER_NAMESPACE__.$.toDOM(rv);
                rv = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/var ysmm = '([^']+)'/, rv);
                rv = rv[1];
                rv = decodeToken(rv);
                _context41.next = 13;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(rv);
              case 13:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41);
      }))();
    }
  });
  function generateRandomSessionCookie(length) {
    var rv = [];
    for (var i = 0; i < length; ++i) {
      rv.push(Math.random().toString(36).charAt(2));
    }
    return rv.join('');
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
})();
_ADSBYPASSER_NAMESPACE__._.register({
  rule: 'http://adfoc.us/*',
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee42() {
      var promise, url;
      return _regenerator["default"].wrap(function _callee42$(_context42) {
        while (1) {
          switch (_context42.prev = _context42.next) {
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
              _context42.next = 3;
              return promise;
            case 3:
              url = _context42.sent;
              _context42.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 6:
            case "end":
              return _context42.stop();
          }
        }
      }, _callee42);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?adlot\.us$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee43() {
      var script, p, opt, tmp;
      return _regenerator["default"].wrap(function _callee43$(_context43) {
        while (1) {
          switch (_context43.prev = _context43.next) {
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
              _context43.next = 8;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('', {
                path: opt
              });
            case 8:
            case "end":
              return _context43.stop();
          }
        }
      }, _callee43);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^admy\.link$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee44() {
      var f;
      return _regenerator["default"].wrap(function _callee44$(_context44) {
        while (1) {
          switch (_context44.prev = _context44.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('form.edit_link');
              f.submit();
            case 2:
            case "end":
              return _context44.stop();
          }
        }
      }, _callee44);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?ah-informatique\.com$/,
    path: /^\/ZipUrl/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee45() {
      var a;
      return _regenerator["default"].wrap(function _callee45$(_context45) {
        while (1) {
          switch (_context45.prev = _context45.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#zip3 a');
              _context45.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case "end":
              return _context45.stop();
          }
        }
      }, _callee45);
    }))();
  }
});
(function () {
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^ah\.pe$/
    },
    ready: function ready() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee46() {
        var script, path;
        return _regenerator["default"].wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                script = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts('eval');
                script = decodeScript(script);
                script = decodeScript(script);
                script = decodeScript(script);
                path = script.match(/([^;= ]+)=([^+ ;]+)\+"\."\+([^+ ]+)\+"\."\+([^; ]+);/);
                if (path) {
                  _context46.next = 7;
                  break;
                }
                throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('script changed');
              case 7:
                if (!(typeof _ADSBYPASSER_NAMESPACE__.$.window[path[2]] === 'undefined')) {
                  _context46.next = 10;
                  break;
                }
                _ADSBYPASSER_NAMESPACE__._.info('recaptcha');
                return _context46.abrupt("return");
              case 10:
                path = [_ADSBYPASSER_NAMESPACE__.$.window[path[2]], _ADSBYPASSER_NAMESPACE__.$.window[path[3]], _ADSBYPASSER_NAMESPACE__.$.window[path[4]]].join('.');
                _context46.next = 13;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(path);
              case 13:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46);
      }))();
    }
  });
  function decodeScript(encoded) {
    var a = encoded.match(/^\s*;eval\((.+)\);\s*$/);
    a = a[1];
    var b = a.match(/^(.+)\('([^']+)','([^']+)','([^']+)','([^']+)'\)$/);
    var c = _ADSBYPASSER_NAMESPACE__._.evil("(".concat(b[1], ")"));
    return c(b[2], b[3], b[4], b[5]);
  }
})();
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^aka\.gr$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee47() {
      var l;
      return _regenerator["default"].wrap(function _callee47$(_context47) {
        while (1) {
          switch (_context47.prev = _context47.next) {
            case 0:
              l = (0, _ADSBYPASSER_NAMESPACE__.$)('iframe#yourls-frame');
              _context47.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l.src);
            case 3:
            case "end":
              return _context47.stop();
          }
        }
      }, _callee47);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^al\.ly$/, /^ally\.sh$/, /^ally\.shortens\.co$/, /^(dausel|onle)\.co$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee48() {
      var i;
      return _regenerator["default"].wrap(function _callee48$(_context48) {
        while (1) {
          switch (_context48.prev = _context48.next) {
            case 0:
              i = _ADSBYPASSER_NAMESPACE__.$.$('#html_element');
              if (!i) {
                _context48.next = 5;
                break;
              }
              _ADSBYPASSER_NAMESPACE__.$.remove('#messa');
              i.classList.remove('hidden');
              return _context48.abrupt("return");
            case 5:
              i = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/"href","([^"]+)" \+ hash\)\.remove/);
              if (i) {
                _context48.next = 9;
                break;
              }
              _ADSBYPASSER_NAMESPACE__._.warn('site changed');
              return _context48.abrupt("return");
            case 9:
              i = i[1] + location.hash;
              _ADSBYPASSER_NAMESPACE__.$.openLink(i);
            case 11:
            case "end":
              return _context48.stop();
          }
        }
      }, _callee48);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^(www\.)?allkeyshop\.com$/, /^cshort\.org$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee49() {
      var matches;
      return _regenerator["default"].wrap(function _callee49$(_context49) {
        while (1) {
          switch (_context49.prev = _context49.next) {
            case 0:
              matches = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/window\.location\.href = "([^"]+)"/);
              matches = matches[1];
              _ADSBYPASSER_NAMESPACE__.$.nuke(matches);
              _context49.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(matches);
            case 5:
            case "end":
              return _context49.stop();
          }
        }
      }, _callee49);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^apkmodif\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee50() {
      var a;
      return _regenerator["default"].wrap(function _callee50$(_context50) {
        while (1) {
          switch (_context50.prev = _context50.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('[name="geturl"]').getAttribute('value');
              _context50.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a);
            case 3:
            case "end":
              return _context50.stop();
          }
        }
      }, _callee50);
    }))();
  }
});
(function () {
  var ajaxPattern = /\$.post\('([^']*)'[^{]+(\{\s*opt:\s*'make_log'[^}]+\}\s*\}),/i; 
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^bc\.vc$/,
      path: /^.+(https?:\/\/.+)$/
    },
    start: function start(m) {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee51() {
        return _regenerator["default"].wrap(function _callee51$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                _context51.next = 2;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(m.path[1] + document.location.search + document.location.hash);
              case 2:
              case "end":
                return _context51.stop();
            }
          }
        }, _callee51);
      }))();
    }
  }); 
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^bc\.vc$/,
      path: /^\/.+/
    },
    ready: function ready() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee52() {
        var token, time, url, rv;
        return _regenerator["default"].wrap(function _callee52$(_context52) {
          while (1) {
            switch (_context52.prev = _context52.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                _context52.next = 3;
                return findAJAXToken();
              case 3:
                token = _context52.sent;
                time = fakeAJAXToken();
                url = "/fly/ln.php?wds=".concat(token.wds, "&time=").concat(time);
                _context52.next = 8;
                return _ADSBYPASSER_NAMESPACE__._.wait(5000);
              case 8:
                _context52.next = 10;
                return _ADSBYPASSER_NAMESPACE__.$.post(url, {
                  xdf: {
                    afg: 300,
                    bfg: 640,
                    cfg: 480,
                    jki: token.jki,
                    dfg: 640,
                    efg: 480,
                    rt: token.rt
                  },
                  ojk: token.ojk
                });
              case 10:
                rv = _context52.sent;
                rv = JSON.parse(rv);
                if (!rv.error) {
                  _context52.next = 14;
                  break;
                }
                throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('auth error');
              case 14:
                _context52.next = 16;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(rv.message.url);
              case 16:
              case "end":
                return _context52.stop();
            }
          }
        }, _callee52);
      }))();
    }
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: [/^mylink\.us$/, /^xafox\.com$/, /^zpoz\.net$/, /^www\.adjet\.eu$/],
      path: /^\/.+/
    },
    ready: run
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^ysear\.ch$/,
      path: /^\/.+/
    },
    ready: function ready() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee53() {
        var a, f;
        return _regenerator["default"].wrap(function _callee53$(_context53) {
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
              case "end":
                return _context53.stop();
            }
          }
        }, _callee53);
      }))();
    }
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^ad5\.eu$/,
      path: /^\/[^.]+$/
    },
    ready: function ready() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee54() {
        var s, m, tz, d;
        return _regenerator["default"].wrap(function _callee54$(_context54) {
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
                return _context54.abrupt("return");
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
              case "end":
                return _context54.stop();
            }
          }
        }, _callee54);
      }))();
    }
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^tr5\.in$/,
      path: /^\/.+/
    },
    ready: function ready() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee55() {
        return _regenerator["default"].wrap(function _callee55$(_context55) {
          while (1) {
            switch (_context55.prev = _context55.next) {
              case 0:
                _context55.next = 2;
                return run(true);
              case 2:
              case "end":
                return _context55.stop();
            }
          }
        }, _callee55);
      }))();
    }
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
    script = _ADSBYPASSER_NAMESPACE__._.evil(matches);
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
    var make_opts = _ADSBYPASSER_NAMESPACE__._.evil("(".concat(matches[2], ")")); 
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
  function run(_x) {
    return _run.apply(this, arguments);
  }
  function _run() {
    _run = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee56(dirtyFix) {
      var result;
      return _regenerator["default"].wrap(function _callee56$(_context56) {
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
            case "end":
              return _context56.stop();
          }
        }
      }, _callee56);
    }));
    return _run.apply(this, arguments);
  }
  function findAJAXToken() {
    return _findAJAXToken.apply(this, arguments);
  }
  function _findAJAXToken() {
    _findAJAXToken = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee57() {
      var rv, wds, jki, rt;
      return _regenerator["default"].wrap(function _callee57$(_context57) {
        while (1) {
          switch (_context57.prev = _context57.next) {
            case 0:
              rv = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts('xyz');
              if (rv) {
                _context57.next = 3;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('script changed');
            case 3:
              wds = rv.match(/xyz\s*=\s*'([^']+)'/);
              if (wds) {
                _context57.next = 6;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('script changed');
            case 6:
              wds = wds[1];
              jki = rv.match(/tkn\s*=\s*'([^']+)'/);
              if (jki) {
                _context57.next = 10;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('script changed');
            case 10:
              jki = jki[1];
              rt = (0, _ADSBYPASSER_NAMESPACE__.$)('#recaptchaToken');
            case 12:
              if (rt.value) {
                _context57.next = 17;
                break;
              }
              _context57.next = 15;
              return _ADSBYPASSER_NAMESPACE__._.wait(500);
            case 15:
              _context57.next = 12;
              break;
            case 17:
              return _context57.abrupt("return", {
                wds: wds,
                jki: jki,
                ojk: 'jfhg',
                rt: rt.value
              });
            case 18:
            case "end":
              return _context57.stop();
          }
        }
      }, _callee57);
    }));
    return _findAJAXToken.apply(this, arguments);
  }
  function fakeAJAXToken() {
    var skipAd = (0, _ADSBYPASSER_NAMESPACE__.$)('#getLink').parentElement;
    var margin = 6;
    var fakePageX = skipAd.offsetLeft + margin + 50 + Math.random() * 10;
    var fakePageY = skipAd.offsetTop + margin + 15 + Math.random() * 1;
    var po = fakePageX + ',' + fakePageY;
    var posX = jQueryOffset(skipAd).left + margin;
    var posY = jQueryOffset(skipAd).top + margin;
    var pos = Math.abs(fakePageX - posX) + ',' + Math.abs(fakePageY - posY);
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
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee58() {
      return _regenerator["default"].wrap(function _callee58$(_context58) {
        while (1) {
          switch (_context58.prev = _context58.next) {
            case 0:
              _context58.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('http://' + m.path[1]);
            case 2:
            case "end":
              return _context58.stop();
          }
        }
      }, _callee58);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: 'http://www.bild.me/bild.php?file=*',
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee59() {
      var i;
      return _regenerator["default"].wrap(function _callee59$(_context59) {
        while (1) {
          switch (_context59.prev = _context59.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('#Bild');
              _context59.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(i.src);
            case 3:
            case "end":
              return _context59.stop();
          }
        }
      }, _callee59);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: 'http://bildr.no/view/*',
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee60() {
      var i;
      return _regenerator["default"].wrap(function _callee60$(_context60) {
        while (1) {
          switch (_context60.prev = _context60.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('img.bilde');
              _context60.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(i.src);
            case 3:
            case "end":
              return _context60.stop();
          }
        }
      }, _callee60);
    }))();
  }
}); 
_ADSBYPASSER_NAMESPACE__._.register({
  rule: [{
    host: /^(www\.)?([a-zA-Z0-9]+\.)?binbox\.io$/,
    path: /\/o\/([a-zA-Z0-9]+)/
  }, {
    host: /^gsmzone\.site$/,
    path: /\/go\/([a-zA-Z0-9]+)/
  }],
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee61() {
      var direct_link;
      return _regenerator["default"].wrap(function _callee61$(_context61) {
        while (1) {
          switch (_context61.prev = _context61.next) {
            case 0:
              direct_link = window.atob(m.path[1]);
              _context61.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(direct_link);
            case 3:
            case "end":
              return _context61.stop();
          }
        }
      }, _callee61);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^blog\.langw\.web\.id$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee62() {
      var url;
      return _regenerator["default"].wrap(function _callee62$(_context62) {
        while (1) {
          switch (_context62.prev = _context62.next) {
            case 0:
              url = decodeURIComponent(decodeURIComponent(_ADSBYPASSER_NAMESPACE__.$.getCookie('wpb_visit_time')));
              if (!url.match(/^http/)) {
                _context62.next = 5;
                break;
              }
              _ADSBYPASSER_NAMESPACE__.$.resetCookies();
              _context62.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 5:
            case "end":
              return _context62.stop();
          }
        }
      }, _callee62);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^bluemediafiles\.com$/,
    path: /^\/creatinglinks/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee63() {
      var b;
      return _regenerator["default"].wrap(function _callee63$(_context63) {
        while (1) {
          switch (_context63.prev = _context63.next) {
            case 0:
              b = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/FinishMessage = '<a href="([^"]+)" >/);
              _context63.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(b[1]);
            case 3:
            case "end":
              return _context63.stop();
          }
        }
      }, _callee63);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^catcut\.net$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee64() {
      var a;
      return _regenerator["default"].wrap(function _callee64$(_context64) {
        while (1) {
          switch (_context64.prev = _context64.next) {
            case 0:
              a = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/decodeURIComponent\('([^']+)'\)/);
              a = decodeURIComponent(a[1]);
              a = new URL(a);
              a = a.searchParams.get('a');
              a = atob(a);
              _context64.next = 7;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a);
            case 7:
            case "end":
              return _context64.stop();
          }
        }
      }, _callee64);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?cli\.gs$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee65() {
      var a;
      return _regenerator["default"].wrap(function _callee65$(_context65) {
        while (1) {
          switch (_context65.prev = _context65.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a.RedirectLink');
              _context65.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case "end":
              return _context65.stop();
          }
        }
      }, _callee65);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^clk\.im$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee66() {
      var matches;
      return _regenerator["default"].wrap(function _callee66$(_context66) {
        while (1) {
          switch (_context66.prev = _context66.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              matches = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/\$\("\.countdown"\)\.attr\("href","([^"]+)"\)/);
              _context66.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(matches[1]);
            case 4:
            case "end":
              return _context66.stop();
          }
        }
      }, _callee66);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^cocoleech\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee67() {
      var a;
      return _regenerator["default"].wrap(function _callee67$(_context67) {
        while (1) {
          switch (_context67.prev = _context67.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn.btn-block.btn-success');
              _context67.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case "end":
              return _context67.stop();
          }
        }
      }, _callee67);
    }))();
  }
});
(function () {
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: [/^(coeg|disingkat)\.in$/, /^www\.(telondasmu|siotong|siherp)\.com$/, /^www\.greget\.space$/],
      path: /^\/.+$/
    },
    ready: function ready(m) {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee68() {
        var mapper, b64;
        return _regenerator["default"].wrap(function _callee68$(_context68) {
          while (1) {
            switch (_context68.prev = _context68.next) {
              case 0:
                mapper = hostMapper(m.host[0]);
                b64 = mapper().match(/\?r=([\w/]+={0,2})/);
                _context68.next = 4;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(atob(b64[1]));
              case 4:
              case "end":
                return _context68.stop();
            }
          }
        }, _callee68);
      }))();
    }
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^sipkur\.net$/,
      path: [/^\/\w+$/, /^\/menujulink\//]
    },
    ready: function ready() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee69() {
        var d;
        return _regenerator["default"].wrap(function _callee69$(_context69) {
          while (1) {
            switch (_context69.prev = _context69.next) {
              case 0:
                d = (0, _ADSBYPASSER_NAMESPACE__.$)('#testapk > div');
                d = d.onclick.toString();
                d = d.match(/window\.open\('([^']+)'/);
                _context69.next = 5;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(d[1]);
              case 5:
              case "end":
                return _context69.stop();
            }
          }
        }, _callee69);
      }))();
    }
  });
  function hostMapper(host) {
    switch (host) {
      case 'disingkat.in':
        return function () {
          var a = (0, _ADSBYPASSER_NAMESPACE__.$)('a.btn-block.redirect');
          return a.href;
        };
      case 'coeg.in':
      case 'www.telondasmu.com':
      case 'www.siotong.com':
      case 'www.siherp.com':
      case 'www.greget.space':
        return function () {
          var a = (0, _ADSBYPASSER_NAMESPACE__.$)('.download-link a');
          return a.href;
        };
      default:
        return null;
    }
  }
})();
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^(?:(\w+)\.)?coinurl\.com$/, /^(?:(\w+)\.)?cur\.lv$/],
    path: /^\/([-\w]+)$/
  },
  ready: function ready(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee70() {
      var host, param, mainFrameContent, docMainFrame, rExtractLink;
      return _regenerator["default"].wrap(function _callee70$(_context70) {
        while (1) {
          switch (_context70.prev = _context70.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              host = 'http://cur.lv/redirect_curlv.php';
              param = m.host[1] === undefined ? {
                code: m.path[1]
              } : {
                zone: m.host[1],
                name: m.path[1]
              }; 
              _context70.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.get(host, param);
            case 5:
              mainFrameContent = _context70.sent;
              docMainFrame = null;
              _context70.prev = 7;
              docMainFrame = _ADSBYPASSER_NAMESPACE__.$.toDOM(mainFrameContent);
              _context70.next = 14;
              break;
            case 11:
              _context70.prev = 11;
              _context70.t0 = _context70["catch"](7);
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
            case "end":
              return _context70.stop();
          }
        }
      }, _callee70, null, [[7, 11]]);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^comyonet\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee71() {
      var input;
      return _regenerator["default"].wrap(function _callee71$(_context71) {
        while (1) {
          switch (_context71.prev = _context71.next) {
            case 0:
              input = (0, _ADSBYPASSER_NAMESPACE__.$)('input[name="enter"]');
              input.click();
            case 2:
            case "end":
              return _context71.stop();
          }
        }
      }, _callee71);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^crockolinks\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee72() {
      var c;
      return _regenerator["default"].wrap(function _callee72$(_context72) {
        while (1) {
          switch (_context72.prev = _context72.next) {
            case 0:
              c = (0, _ADSBYPASSER_NAMESPACE__.$)('.head > div:nth-child(3) > .skip');
              c.click();
            case 2:
            case "end":
              return _context72.stop();
          }
        }
      }, _callee72);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^dawnstation\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee73() {
      var a;
      return _regenerator["default"].wrap(function _callee73$(_context73) {
        while (1) {
          switch (_context73.prev = _context73.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#tidakakanselamanya > a');
              _context73.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case "end":
              return _context73.stop();
          }
        }
      }, _callee73);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^durl\.me$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee74() {
      var a;
      return _regenerator["default"].wrap(function _callee74$(_context74) {
        while (1) {
          switch (_context74.prev = _context74.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a[class="proceedBtn"]');
              _context74.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case "end":
              return _context74.stop();
          }
        }
      }, _callee74);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^easyurl\.net$/, /^(atu|clickthru|redirects|readthis)\.ca$/, /^goshrink\.com$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee75() {
      var f;
      return _regenerator["default"].wrap(function _callee75$(_context75) {
        while (1) {
          switch (_context75.prev = _context75.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('frame[name=main]');
              _context75.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f.src);
            case 3:
            case "end":
              return _context75.stop();
          }
        }
      }, _callee75);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^(www\.)?shink\.me$/, /^(shon|likn)\.xyz$/, /^fas\.li$/, /^(www\.)?croco\.(me|site)$/, /^cpmlink\.net$/],
    path: /^\/[\w-]+$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee76() {
      var f;
      return _regenerator["default"].wrap(function _callee76$(_context76) {
        while (1) {
          switch (_context76.prev = _context76.next) {
            case 0:
              if (_ADSBYPASSER_NAMESPACE__.$.$('#captcha')) {
                _context76.next = 9;
                break;
              }
              f = _ADSBYPASSER_NAMESPACE__.$.$('#skip');
              if (!f) {
                _context76.next = 5;
                break;
              }
              f.submit();
              return _context76.abrupt("return");
            case 5:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('#btn-main');
              _context76.next = 8;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f.href);
            case 8:
              return _context76.abrupt("return");
            case 9:
              _ADSBYPASSER_NAMESPACE__.$.remove('div[class$=Overlay]');
              _ADSBYPASSER_NAMESPACE__.$.block(function (node) {
                if (node.className.match(/Overlay$/)) {
                  return true;
                }
                if (node.localName === 'div') {
                  return ['2147483647', '2'].some(function (z) {
                    return z === node.style.zIndex;
                  });
                }
                return false;
              }, document.body);
            case 11:
            case "end":
              return _context76.stop();
          }
        }
      }, _callee76);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: [{
    host: /^cpmlink\.net$/,
    path: /^\/go\/[\w-]+$/
  }, {
    host: /^(www\.)?croco\.(me|site)$/,
    path: /^\/ok\/\w+$/
  }],
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee77() {
      var a, i;
      return _regenerator["default"].wrap(function _callee77$(_context77) {
        while (1) {
          switch (_context77.prev = _context77.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#btn-main');
              i = a.href.lastIndexOf('http');
              a = a.href.substr(i);
              _context77.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a);
            case 5:
            case "end":
              return _context77.stop();
          }
        }
      }, _callee77);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^fas\.li$/, /^(www\.)?shink\.me$/],
    path: /^\/go\/\w+$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee78() {
      var f;
      return _regenerator["default"].wrap(function _callee78$(_context78) {
        while (1) {
          switch (_context78.prev = _context78.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('#skip');
              f.submit();
            case 2:
            case "end":
              return _context78.stop();
          }
        }
      }, _callee78);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^filemedia\.net$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee79() {
      var script;
      return _regenerator["default"].wrap(function _callee79$(_context79) {
        while (1) {
          switch (_context79.prev = _context79.next) {
            case 0:
              script = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/window.location.href\s?=\s?\("(http.+?)"\)/);
              if (!(script.length > 1)) {
                _context79.next = 4;
                break;
              }
              _context79.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(script[1]);
            case 4:
            case "end":
              return _context79.stop();
          }
        }
      }, _callee79);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?filoops\.info$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee80() {
      var a;
      return _regenerator["default"].wrap(function _callee80$(_context80) {
        while (1) {
          switch (_context80.prev = _context80.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#text > center a, #text > div[align=center] a');
              _context80.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case "end":
              return _context80.stop();
          }
        }
      }, _callee80);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www|links)\.fiuxy\.(co|bz)$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee81() {
      return _regenerator["default"].wrap(function _callee81$(_context81) {
        while (1) {
          switch (_context81.prev = _context81.next) {
            case 0:
              _context81.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink((0, _ADSBYPASSER_NAMESPACE__.$)('a.btn.a').href);
            case 2:
            case "end":
              return _context81.stop();
          }
        }
      }, _callee81);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^gamemod\.pro$/,
    path: /^\/download-file\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee82() {
      var gp;
      return _regenerator["default"].wrap(function _callee82$(_context82) {
        while (1) {
          switch (_context82.prev = _context82.next) {
            case 0:
              gp = (0, _ADSBYPASSER_NAMESPACE__.$)('#wait-done > p > a');
              _context82.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(gp.href);
            case 3:
            case "end":
              return _context82.stop();
          }
        }
      }, _callee82);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^gkurl\.us$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee83() {
      var iframe;
      return _regenerator["default"].wrap(function _callee83$(_context83) {
        while (1) {
          switch (_context83.prev = _context83.next) {
            case 0:
              iframe = (0, _ADSBYPASSER_NAMESPACE__.$)('#gkurl-frame');
              _context83.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(iframe.src);
            case 3:
            case "end":
              return _context83.stop();
          }
        }
      }, _callee83);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^goto\.loncat\.in$/,
    query: /open=(.+)/
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee84() {
      var url;
      return _regenerator["default"].wrap(function _callee84$(_context84) {
        while (1) {
          switch (_context84.prev = _context84.next) {
            case 0:
              url = atob(atob(m.query[1]));
              _context84.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 3:
            case "end":
              return _context84.stop();
          }
        }
      }, _callee84);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^gsurl\.(me|in)$/, /^(gsul|getsl|glinks)\.me$/, /^gsur\.in$/, /^g5u\.pw$/, /^gurl\.ly$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee85() {
      var a;
      return _regenerator["default"].wrap(function _callee85$(_context85) {
        while (1) {
          switch (_context85.prev = _context85.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('#container');
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#link');
              _context85.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink("".concat(a.href, "&ab=").concat(_ADSBYPASSER_NAMESPACE__.$.window.x));
            case 4:
            case "end":
              return _context85.stop();
          }
        }
      }, _callee85);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^gunting\.web\.id$/,
    path: /^\/\w+$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee86() {
      var l;
      return _regenerator["default"].wrap(function _callee86$(_context86) {
        while (1) {
          switch (_context86.prev = _context86.next) {
            case 0:
              l = (0, _ADSBYPASSER_NAMESPACE__.$)('a.btn-block.redirect');
              _context86.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l.href);
            case 3:
            case "end":
              return _context86.stop();
          }
        }
      }, _callee86);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^healthykk\.com$/,
    path: /^\/wordpress\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee87() {
      var h;
      return _regenerator["default"].wrap(function _callee87$(_context87) {
        while (1) {
          switch (_context87.prev = _context87.next) {
            case 0:
              h = (0, _ADSBYPASSER_NAMESPACE__.$)('#content center button');
              h.click();
            case 2:
            case "end":
              return _context87.stop();
          }
        }
      }, _callee87);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^hen-tay\.net$/,
    path: /^\/go\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee88() {
      var h;
      return _regenerator["default"].wrap(function _callee88$(_context88) {
        while (1) {
          switch (_context88.prev = _context88.next) {
            case 0:
              h = (0, _ADSBYPASSER_NAMESPACE__.$)('#download_url div a');
              _context88.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(h.href);
            case 3:
            case "end":
              return _context88.stop();
          }
        }
      }, _callee88);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^hotshorturl\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee89() {
      var frame;
      return _regenerator["default"].wrap(function _callee89$(_context89) {
        while (1) {
          switch (_context89.prev = _context89.next) {
            case 0:
              frame = (0, _ADSBYPASSER_NAMESPACE__.$)('frame[scrolling=yes]');
              _context89.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(frame.src);
            case 3:
            case "end":
              return _context89.stop();
          }
        }
      }, _callee89);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^iiv\.pl$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee90() {
      var d, rv;
      return _regenerator["default"].wrap(function _callee90$(_context90) {
        while (1) {
          switch (_context90.prev = _context90.next) {
            case 0:
              d = (0, _ADSBYPASSER_NAMESPACE__.$)('#counting');
              _context90.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.post(location.pathname, {
                blocker: 0,
                salt: d.dataset.salt
              }, {
                'X-OCTOBER-REQUEST-HANDLER': 'onAfterShortcutView',
                'X-OCTOBER-REQUEST-PARTIALS': 'shortcut/link_show'
              });
            case 3:
              rv = _context90.sent;
              rv = JSON.parse(rv);
              d = _ADSBYPASSER_NAMESPACE__.$.toDOM(rv['shortcut/link_show']);
              rv = (0, _ADSBYPASSER_NAMESPACE__.$)('a', d);
              _context90.next = 9;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(rv.href);
            case 9:
            case "end":
              return _context90.stop();
          }
        }
      }, _callee90);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^itw\.me$/,
    path: /^\/r\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee91() {
      var f;
      return _regenerator["default"].wrap(function _callee91$(_context91) {
        while (1) {
          switch (_context91.prev = _context91.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('.go-form');
              f.submit();
            case 2:
            case "end":
              return _context91.stop();
          }
        }
      }, _callee91);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^ity\.im$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee92() {
      var f, _$find3, _$find4, data;
      return _regenerator["default"].wrap(function _callee92$(_context92) {
        while (1) {
          switch (_context92.prev = _context92.next) {
            case 0:
              f = _ADSBYPASSER_NAMESPACE__.$.$('#main');
              if (!f) {
                _context92.next = 5;
                break;
              }
              _context92.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f.src);
            case 4:
              return _context92.abrupt("return");
            case 5:
              _$find3 = _ADSBYPASSER_NAMESPACE__._.find(_ADSBYPASSER_NAMESPACE__.$.$$('frame'), function (frame) {
                if (frame.src.indexOf('interheader.php') < 0) {
                  return _ADSBYPASSER_NAMESPACE__._.none;
                }
                return frame.src;
              });
              _$find4 = (0, _slicedToArray2["default"])(_$find3, 3);
              f = _$find4[2];
              if (!(f !== _ADSBYPASSER_NAMESPACE__._.none)) {
                _context92.next = 12;
                break;
              }
              _context92.next = 11;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f);
            case 11:
              return _context92.abrupt("return");
            case 12:
              f = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/krypted=([^&]+)/);
              if (f) {
                _context92.next = 15;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('site changed');
            case 15:
              f = f[1];
              data = _ADSBYPASSER_NAMESPACE__.$.window.des('ksnslmtmk0v4Pdviusajqu', _ADSBYPASSER_NAMESPACE__.$.window.hexToString(f), 0, 0);
              if (!data) {
                _context92.next = 20;
                break;
              }
              _context92.next = 20;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('http://ity.im/1104_21_50846_' + data);
            case 20:
            case "end":
              return _context92.stop();
          }
        }
      }, _callee92);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?kingofshrink\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee93() {
      var l;
      return _regenerator["default"].wrap(function _callee93$(_context93) {
        while (1) {
          switch (_context93.prev = _context93.next) {
            case 0:
              l = (0, _ADSBYPASSER_NAMESPACE__.$)('#textresult > a');
              _context93.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l.href);
            case 3:
            case "end":
              return _context93.stop();
          }
        }
      }, _callee93);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: [{
    host: /^st\.kurogaze\.net$/,
    query: /r=(.+)/
  }, {
    host: /^s\.yukisubs\.com$/,
    query: /link=(.+)/
  }],
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee94() {
      var r;
      return _regenerator["default"].wrap(function _callee94$(_context94) {
        while (1) {
          switch (_context94.prev = _context94.next) {
            case 0:
              r = atob(m.query[1]);
              _context94.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(r);
            case 3:
            case "end":
              return _context94.stop();
          }
        }
      }, _callee94);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^st\.kurogaze\.net$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee95() {
      var a;
      return _regenerator["default"].wrap(function _callee95$(_context95) {
        while (1) {
          switch (_context95.prev = _context95.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a.redirect');
              _context95.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case "end":
              return _context95.stop();
          }
        }
      }, _callee95);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^dl\.layarkaca21\.vip$/,
    path: /^\/iframe\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee96() {
      var lv;
      return _regenerator["default"].wrap(function _callee96$(_context96) {
        while (1) {
          switch (_context96.prev = _context96.next) {
            case 0:
              lv = (0, _ADSBYPASSER_NAMESPACE__.$)('.content #skip a');
              _context96.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(lv.href);
            case 3:
            case "end":
              return _context96.stop();
          }
        }
      }, _callee96);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^dl\.layarkaca21\.vip$/,
    path: /^\/(.+)\//
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee97() {
      return _regenerator["default"].wrap(function _callee97$(_context97) {
        while (1) {
          switch (_context97.prev = _context97.next) {
            case 0:
              _context97.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('/iframe/top.php?slug=' + m.path[1]);
            case 2:
            case "end":
              return _context97.stop();
          }
        }
      }, _callee97);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^leechall\.download$/,
    path: /^\/file\/([a-zA-Z0-9/=]+)/
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee98() {
      return _regenerator["default"].wrap(function _callee98$(_context98) {
        while (1) {
          switch (_context98.prev = _context98.next) {
            case 0:
              _context98.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(decodeURIComponent(atob(m.path[1])));
            case 2:
            case "end":
              return _context98.stop();
          }
        }
      }, _callee98);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: 'http://www.lienscash.com/l/*',
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee99() {
      var a;
      return _regenerator["default"].wrap(function _callee99$(_context99) {
        while (1) {
          switch (_context99.prev = _context99.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#redir_btn');
              _context99.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case "end":
              return _context99.stop();
          }
        }
      }, _callee99);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?link\.im$/,
    path: /^\/\w+$/
  },
  start: function start() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee100() {
      var text, m;
      return _regenerator["default"].wrap(function _callee100$(_context100) {
        while (1) {
          switch (_context100.prev = _context100.next) {
            case 0:
              _context100.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.post(document.location.href, {
                image: 'Continue'
              });
            case 2:
              text = _context100.sent;
              m = text.match(/window\.location\.replace\('([^']+)'\)/);
              _context100.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m[1]);
            case 6:
            case "end":
              return _context100.stop();
          }
        }
      }, _callee100);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^link\.tl$/,
    path: /\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee101() {
      var m, l, token, rl;
      return _regenerator["default"].wrap(function _callee101$(_context101) {
        while (1) {
          switch (_context101.prev = _context101.next) {
            case 0:
              m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/eval\((.+}\))\)/);
              m = _ADSBYPASSER_NAMESPACE__._.evil("(".concat(m[1], ")"));
              l = m.match(/(?:\$\.ajax.+|href=')(http.+skip.+|http[^']+)',data/);
              l = l[1];
              if (l.match(/skip/)) {
                _context101.next = 8;
                break;
              }
              _context101.next = 7;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l);
            case 7:
              return _context101.abrupt("return");
            case 8:
              token = m.match(/'X-CSRF-TOKEN':'([^']+)'},/);
              _context101.next = 11;
              return _ADSBYPASSER_NAMESPACE__.$.post(l, '', {
                'X-CSRF-TOKEN': token[1]
              });
            case 11:
              rl = _context101.sent;
              rl = JSON.parse(rl);
              _context101.next = 15;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(rl.url);
            case 15:
            case "end":
              return _context101.stop();
          }
        }
      }, _callee101);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^link4ad\.com$/,
    path: /^\/(.+)$/
  },
  ready: function ready(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee102() {
      var d, url;
      return _regenerator["default"].wrap(function _callee102$(_context102) {
        while (1) {
          switch (_context102.prev = _context102.next) {
            case 0:
              d = (0, _ADSBYPASSER_NAMESPACE__.$)('div[id^=module_]');
              d = d.id.match(/module_(\d+)/);
              d = d[1];
              _context102.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.post('form.php?block_id=' + d, {
                cmd: 'get_source',
                act: 'waiting',
                id: m.path[1]
              });
            case 5:
              url = _context102.sent;
              _context102.next = 8;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 8:
            case "end":
              return _context102.stop();
          }
        }
      }, _callee102);
    }))();
  }
});
(function () {
  var hostRules = [
  /^(([\w]{8}|www)\.)?(allanalpass|drstickyfingers|whackyvidz)\.com$/, /^(([\w]{8}|www)\.)?(linkbabes|linkbucks)\.com$/, /^(([\w]{8}|www)\.)?theseblogs\.com$/, /^warning-this-linkcode-will-cease-working-soon\.www\.linkbucksdns\.com$/, 
  /^(([\w]{8}|www)\.)?(filesonthe|poontown|seriousdeals|urlbeat)\.net$/, /^(([\w]{8}|www)\.)?(zatnawqy|rhvgmritmziwcm|dwrfslsqpdfqfwy)\.net$/, 
  /^(([\w]{8}|www)\.)?freean\.us$/, /^(([\w]{8}|www)\.)?(miniurls|qqc|rqq|tinylinks|yyv)\.co$/, /^(([\w]{8}|www)\.)?youfap\.me$/];
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: hostRules,
      path: /^\/\w+\/url\/(.+)$/
    },
    ready: function ready(m) {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee103() {
        var url, match;
        return _regenerator["default"].wrap(function _callee103$(_context103) {
          while (1) {
            switch (_context103.prev = _context103.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.removeAllTimer();
                _ADSBYPASSER_NAMESPACE__.$.resetCookies();
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                url = m.path[1] + window.location.search;
                match = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/UrlEncoded: ([^,]+)/);
                if (match && match[1] === 'true') {
                  url = decrypt(url);
                }
                _context103.next = 8;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
              case 8:
              case "end":
                return _context103.stop();
            }
          }
        }, _callee103);
      }))();
    }
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: hostRules
    },
    start: function start() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee104() {
        return _regenerator["default"].wrap(function _callee104$(_context104) {
          while (1) {
            switch (_context104.prev = _context104.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.window.XMLHttpRequest = _ADSBYPASSER_NAMESPACE__._.nop;
              case 1:
              case "end":
                return _context104.stop();
            }
          }
        }, _callee104);
      }))();
    },
    ready: function ready() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee105() {
        var path, token, url;
        return _regenerator["default"].wrap(function _callee105$(_context105) {
          while (1) {
            switch (_context105.prev = _context105.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.removeAllTimer();
                _ADSBYPASSER_NAMESPACE__.$.resetCookies();
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                if (!(window.location.pathname.indexOf('verify') >= 0)) {
                  _context105.next = 8;
                  break;
                }
                path = window.location.pathname.replace('/verify', '');
                _context105.next = 7;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(path);
              case 7:
                return _context105.abrupt("return");
              case 8:
                token = findToken(document);
                _context105.next = 11;
                return sendRequest(token);
              case 11:
                url = _context105.sent;
                _ADSBYPASSER_NAMESPACE__.$.nuke(url);
                _context105.next = 15;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
              case 15:
              case "end":
                return _context105.stop();
            }
          }
        }, _callee105);
      }))();
    }
  }); 
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      query: /^(.*)[?&]_lbGate=\d+$/
    },
    start: function start(m) {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee106() {
        return _regenerator["default"].wrap(function _callee106$(_context106) {
          while (1) {
            switch (_context106.prev = _context106.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.setCookie('_lbGatePassed', 'true');
                _context106.next = 3;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(window.location.pathname + m.query[1]);
              case 3:
              case "end":
                return _context106.stop();
            }
          }
        }, _callee106);
      }))();
    }
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
  function sendRequest(_x2) {
    return _sendRequest.apply(this, arguments);
  }
  function _sendRequest() {
    _sendRequest = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee107(token) {
      var text, data;
      return _regenerator["default"].wrap(function _callee107$(_context107) {
        while (1) {
          switch (_context107.prev = _context107.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.get(token.adurl);
              delete token.adurl;
              token.a_b = false;
              _ADSBYPASSER_NAMESPACE__._.info('waiting the interval');
              _context107.next = 6;
              return _ADSBYPASSER_NAMESPACE__._.wait(5000);
            case 6:
              _ADSBYPASSER_NAMESPACE__._.info('sending token: %o', token);
              _context107.next = 9;
              return _ADSBYPASSER_NAMESPACE__.$.get('/intermission/loadTargetUrl', token, {
                'X-Requested-With': _ADSBYPASSER_NAMESPACE__._.none,
                Origin: _ADSBYPASSER_NAMESPACE__._.none
              });
            case 9:
              text = _context107.sent;
              data = JSON.parse(text);
              _ADSBYPASSER_NAMESPACE__._.info('response: %o', data);
              if (!(!data.Success && data.Errors[0] === 'Invalid token')) {
                _context107.next = 17;
                break;
              }
              _ADSBYPASSER_NAMESPACE__._.warn('got invalid token');
              _context107.next = 16;
              return retry();
            case 16:
              return _context107.abrupt("return", _context107.sent);
            case 17:
              if (!data.AdBlockSpotted) {
                _context107.next = 20;
                break;
              }
              _ADSBYPASSER_NAMESPACE__._.warn('adblock spotted');
              return _context107.abrupt("return");
            case 20:
              if (!(data.Success && !data.AdBlockSpotted && data.Url)) {
                _context107.next = 22;
                break;
              }
              return _context107.abrupt("return", data.Url);
            case 22:
            case "end":
              return _context107.stop();
          }
        }
      }, _callee107);
    }));
    return _sendRequest.apply(this, arguments);
  }
  function retry() {
    return _retry.apply(this, arguments);
  }
  function _retry() {
    _retry = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee108() {
      var text, d, t;
      return _regenerator["default"].wrap(function _callee108$(_context108) {
        while (1) {
          switch (_context108.prev = _context108.next) {
            case 0:
              _context108.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.get(window.location.toString(), {}, {
                'X-Forwarded-For': _ADSBYPASSER_NAMESPACE__._.generateRandomIP()
              });
            case 2:
              text = _context108.sent;
              d = _ADSBYPASSER_NAMESPACE__.$.toDOM(text);
              t = findToken(d);
              if (t) {
                _context108.next = 11;
                break;
              }
              _context108.next = 8;
              return _ADSBYPASSER_NAMESPACE__._.wait(1000);
            case 8:
              _context108.next = 10;
              return retry();
            case 10:
              return _context108.abrupt("return", _context108.sent);
            case 11:
              _context108.next = 13;
              return sendRequest(t);
            case 13:
              return _context108.abrupt("return", _context108.sent);
            case 14:
            case "end":
              return _context108.stop();
          }
        }
      }, _callee108);
    }));
    return _retry.apply(this, arguments);
  }
  function decrypt(url) {
    url = ConvertFromHex(url);
    var unsafe = "(".concat(Encode.toString(), ")(\"").concat(url, "\")"); 
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
    host: /^www\.linkdecode\.com$/,
    path: /^\/$/,
    query: /^\?(.+)$/
  },
  ready: function ready(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee109() {
      var lnk, b;
      return _regenerator["default"].wrap(function _callee109$(_context109) {
        while (1) {
          switch (_context109.prev = _context109.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe'); 
              lnk = m.query[1]; 
              if (!m.query[1].match(/^https?:\/\//)) {
                _context109.next = 6;
                break;
              }
              _context109.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(lnk);
            case 5:
              return _context109.abrupt("return");
            case 6:
              b = _ADSBYPASSER_NAMESPACE__.$.$('#popup');
              if (!(b && b.href)) {
                _context109.next = 11;
                break;
              }
              _context109.next = 10;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(b.href);
            case 10:
              return _context109.abrupt("return");
            case 11:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('#m > .Visit_Link');
              b = b.onclick.toString().match(/window\.open\('([^']+)'/);
              if (b) {
                _context109.next = 15;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasser('pattern changed');
            case 15:
              lnk = b[1].match(/\?(https?:\/\/.*)$/);
              if (!lnk) {
                _context109.next = 20;
                break;
              }
              _context109.next = 19;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(lnk[1]);
            case 19:
              return _context109.abrupt("return");
            case 20:
              _context109.next = 22;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(b[1]);
            case 22:
            case "end":
              return _context109.stop();
          }
        }
      }, _callee109);
    }))();
  }
});
(function () {
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: [/^met\.bz$/, /^tui\.click$/, /^earn-guide\.com$/, /^adurl\.id$/, /^(cutwi|cut-w|cutl|dmus)\.in$/, /^(www\.)?jurl\.io$/, /^lapak\.link$/, /^(ulshare|urlike)\.net$/]
    },
    ready: function ready() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee110() {
        var handler;
        return _regenerator["default"].wrap(function _callee110$(_context110) {
          while (1) {
            switch (_context110.prev = _context110.next) {
              case 0:
                handler = new NoRecaptchaHandler();
                _context110.next = 3;
                return handler.call();
              case 3:
              case "end":
                return _context110.stop();
            }
          }
        }, _callee110);
      }))();
    }
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: [
      /^(dz4link|gocitlink|3rabcut|short2win|adsrt|shortglobal|jainjinvani|agradarpan|birdurls)\.com$/, /^(payshorturl|urltips|shrinkearn|itiad|cutsouf|enewstalk|lnks4all|jejaklagu|urlshortx)\.com$/, /^(earn-url|bit-url|cut-win|link-zero|cut-earn|oturl|glory-link|coolmitten|hosexx)\.com$/, /^(empireshort|empearn|tarnwh2i|tabeikh|yourw-ay|reb7konline|factural|akla4|techsapparel)\.com$/, /^(shrinkbuck|clkpay|linksht|haxrs|click2-url|cooltxtgen|arba7co|shortlinko|ez4linkss)\.com$/, /^(partqb2i|khraba|adlpu|tabakhelo|amenitiees|cosmicmony|ilinkshortx|a-egy|adsafelink)\.com$/, /^(advance-wishingjs|govtsmartjob|bloggingraja|techkti|sxtsquad|adpaytm|pustkala)\.com$/, /^(thegyaanipoint|downloaddoom|linkfay|5brgedid|earthpiclover|adigp|tomient|dz4invest)\.com$/, /^(techmen-world|razerflixs|gamesindians|dislooks|elkhbrel7sry|onaah|ultraskora)\.com$/, /^(wrap-w0rld|ommantrameditation|mawdok|techfinda|clixg|boardgift|beast-birds|click-paid)\.com$/, /^(talkittechy|newsinjules|kutpay|nikkarr|veblink|al3amall|6aba2day|oploverzhome)\.com$/, /^(kooramubashir|healthfary|justlikeyojna|sarkarijobsresultss|zalipay|thefreech)\.com$/, /^(hindibeen|pastekan|e7kelyana|ea-isly|aristoderas|shortzon|trading-area|alseoo)\.com$/, /^(techtremendous|freespinwins|w-rajem|timetoka|foodpuff|linksop|bollywooddramanews)\.com$/, /^(linkexa|admew|shrtfly|kuylink|cut4links|adskipme|skipurls|ely-om7|brenhealth)\.com$/, /^(smarteasystudy|cyahealth|ershadat|z2i|srtfly|arba7kpro|health-goood|stategossip)\.com$/, /^(blogginggyanbox|yourtechguider|gifsis|3rab-cash|pinkhindi|wishes2|weawp|a5barfawria)\.com$/, /^(mykinggo|li-nkz|win4cut|khabratk|programsfre|safelinkblogger|linkwea|ourcareerblog)\.com$/, /^(linkorlink|mrfourtech|fabsdeals|tech4utoday|urlsamo|earnwithshortlink|swiggygold)\.com$/, /^(earnmoneytalk|newupdatesonline|uptoos|bakilink|gossipcorners|slegle|futurefoundationngo)\.com$/, /^(loopdiet|infotaxco|newsatfit|go99tech|fullytech24|adflyurl|kekolink|rifurl|ac-mo)\.com$/, /^(apkshrt)\.com$/, /^(vy\.)?adsvy\.com$/, /^(www\.)?(clkpays|lnkjob|efshort)\.com$/, /^shrt(8|10)\.com$/, 
      /^(trlink|wolink|tocdo|cuturl|counsellingresult2016|iitjeemainguide|healthhindigyan)\.in$/, /^(utimetableresult|daily-sale|linkszone|viraltechnical)\.in$/, 
      /^(oke|cuon|cuio|cuee|cuus|cuto|linktor|flylink|uiz|uii|exey|shrinkme|shotly)\.io$/, /^cu(2|3|5|6|7)\.io$/, 
      /^(adbilty|adpop|ujv|tpx|adsrt|2fly|lin65|short2win|suarankri|infotrendy)\.me$/, /^(advancedautorepairtips|takeitfor|jelajahinternet|virtualdata|muhammadyoga|s2w)\.me$/, /^(cepmuzikindir|shrinke)\.me$/, 
      /^link\.akuno\.net$/, /^(safelinku|tinylinks|licklink|linkrex|zlshorte|vivads|clickar|bigb0ss)\.net$/, /^(vnurl|vinaurl|foxurl|short2win|cashat|shrtfly|shortye|ventax)\.net$/, /^(link4win|linksad|topurl|xemlink|directedlink|illink)\.net$/, 
      /^(click2url|ln435|merdekaid)\.online$/, /^(www\.)?bloggerworld\.online$/, 
      /^(lotechnocan|updatetribun|templink|ez4link|shortearn|adbull|oneurls|adsrt|freebcc)\.org$/, /^voxc\.org$/, 
      /^(clik|tokenfly|getlink|psl|pss|shln|lpe|chrt|szs|miniurl)\.pw$/, /^(www\.)?lwt\.pw$/, 
      /^(el3id|allreports|clickskaro)\.site$/, /^123link\.carpartsviet97\.site$/, 
      /^(shink|shrten|gg-l|vnurl|bloggingdekh|ln11|sh11|tradeguru|newskart|kidsors|xz2)\.xyz$/, /^(techinhub|viralnow|shophipro|technocanvas|getfreshcloud|profitstudy|ijobanana)\.xyz$/, /^(autocarsmagz|getpocket|yasinews|dunyanews|komiupdates|allapp|smwebs|news-tech)\.xyz$/, /^cutdl\.xyz$/, 
      /^(ckk|iir|tii)\.ai$/, /^thin\.at$/, /^(tips\.)?atv\.pw$/, /^skip\.az$/, /^(funnyquiz|mediakita|kabarviral)\.blog$/, /^(icutit|earnbig|cutearn)\.ca$/, /^e2s\.cc$/, /^(adzurl|link2link)\.cf$/, /^(mlink|cl250|xpickle|infosehatku)\.club$/, /^(3bst|coinlink|itiurl|coshink|link5s|curs|makeurl|mooddisorder|cutls)\.co$/, /^bestscholaeshipdegree\.date$/, /^click2see\.desi$/, /^(tny|tiny)\.ec$/, /^8o\.ee$/, /^pa4l\.esy\.es$/, /^(shortearn|enrt)\.eu$/, /^(sciencelife|cpm4all)\.ga$/, /^za\.gl$/, /^zi\.ht$/, /^shorted\.id$/, /^(igram|gram|pingit)\.im$/, /^megaurl\.(in|link)$/, /^(businessiss2|techandreview|yesmoviesapp|kpscthulasilogin)\.info$/, /^stfly\.(io|press)$/, /^lyon\.kim$/, /^fc\.lc$/, /^(petty|skips|tr|flaz)\.link$/, /^payskip\.(me|org)$/, /^btc\.ms$/, /^splashnews\.ooo$/, /^express-cut\.ovh$/, /^short\.pe$/, /^(clk|cll)\.(press|ink|sh|icu)$/, /^(lopte|megalink)\.pro$/, /^123link\.(pw|vip)$/, /^royalown\.review$/, /^earn\.theplusit\.ro$/, /^sk-ip\.(ru|tech)$/, /^tinylink\.run$/, /^(oko|aii|shorten)\.sh$/, /^(dutchycorp|abouttech)\.space$/, /^buyitonline\.store$/, /^eatings\.stream$/, /^tl\.tc$/, /^(1921681254|geki|wegner|gpshort)\.tech$/, /^(linkvip|4short)\.tk$/, /^(www\.)?pnd\.tl$/, /^get\.ujv\.al$/, /^(urlcloud|imageoptimizer)\.us$/, /^(koylinks|buy-in-599rs)\.win$/, /^exe\.(io|app)$/, /^slink\.bid$/]
    },
    ready: function ready() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee111() {
        var handler;
        return _regenerator["default"].wrap(function _callee111$(_context111) {
          while (1) {
            switch (_context111.prev = _context111.next) {
              case 0:
                handler = new RecaptchaHandler();
                _context111.next = 3;
                return handler.call();
              case 3:
              case "end":
                return _context111.stop();
            }
          }
        }, _callee111);
      }))();
    }
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: [/^(arabtvlink|safeku|dz4link)\.com$/, /^linksoflife\.co$/, /^wi\.cr$/, /^(bitcoinly|cashurl)\.in$/, /^linksof\.life$/, /^wicr\.me$/, /^shrtit\.tech$/, /^fireshorts\.tk$/, /^mitly\.us$/]
    },
    ready: function ready() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee112() {
        var handler;
        return _regenerator["default"].wrap(function _callee112$(_context112) {
          while (1) {
            switch (_context112.prev = _context112.next) {
              case 0:
                handler = new InvisibleRecaptchaHandler();
                _context112.next = 3;
                return handler.call();
              case 3:
              case "end":
                return _context112.stop();
            }
          }
        }, _callee112);
      }))();
    }
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: [/^123short\.biz$/, /^(cutpaid|tmearn|icutlink)\.com$/, /^(ctui|cuti)\.in$/, /^zutrox\.link$/, /^(techcraze|healthinsider)\.online$/, /^cutwin\.(us|com)$/, /^(www\.)?shrink\.vip$/]
    },
    ready: function ready() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee113() {
        var handler;
        return _regenerator["default"].wrap(function _callee113$(_context113) {
          while (1) {
            switch (_context113.prev = _context113.next) {
              case 0:
                handler = new NonDisabledRecaptchaHandler();
                _context113.next = 3;
                return handler.call();
              case 3:
              case "end":
                return _context113.stop();
            }
          }
        }, _callee113);
      }))();
    }
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^(www\.)?ourl\.io$/
    },
    ready: function ready() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee114() {
        var handler;
        return _regenerator["default"].wrap(function _callee114$(_context114) {
          while (1) {
            switch (_context114.prev = _context114.next) {
              case 0:
                handler = new OURLHandler();
                _context114.next = 3;
                return handler.call();
              case 3:
              case "end":
                return _context114.stop();
            }
          }
        }, _callee114);
      }))();
    }
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^(www\.)?linkdrop\.net$/
    },
    ready: function ready() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee115() {
        var handler;
        return _regenerator["default"].wrap(function _callee115$(_context115) {
          while (1) {
            switch (_context115.prev = _context115.next) {
              case 0:
                handler = new LinkDropHandler();
                _context115.next = 3;
                return handler.call();
              case 3:
              case "end":
                return _context115.stop();
            }
          }
        }, _callee115);
      }))();
    }
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^www\.shortly\.xyz$/,
      path: /^\/link$/
    },
    ready: function ready() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee116() {
        var handler;
        return _regenerator["default"].wrap(function _callee116$(_context116) {
          while (1) {
            switch (_context116.prev = _context116.next) {
              case 0:
                handler = new ShortlyHandler();
                _context116.next = 3;
                return handler.call();
              case 3:
              case "end":
                return _context116.stop();
            }
          }
        }, _callee116);
      }))();
    }
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: [
      /^(cut-urls|linclik|premiumzen|by6dk|mikymoons|man2pro)\.com$/, /^(link4win|loadurl|cut4link|raolink|adshorte)\.com$/, /^short\.pastewma\.com$/, /^linkfly\.gaosmedia\.com$/, /^(www\.)?viralukk\.com$/, /^(www\.)?niagoshort\.com$/, 
      /^www\.worldhack\.net$/, /^(eklink)\.net$/, 
      /^royurls\.bid$/, /^shortit\.ca$/, /^(urle|adshort)\.co$/, /^(1)?idsly\.(com|bid|net|org)$/, /^shortad\.cf$/, /^(adbilty|taive)\.in$/, /^(curs|crus|4cut|u2s|l2s)\.io$/, /^123link\.(io|co|press|pro)$/, /^petty\.link$/, /^(weefy|adbull|zeiz|link4|adcoin)\.me$/, /^dzurl\.ml$/, /^spamlink\.org$/, /^(twik|adslink)\.pw$/, /^git\.tc$/, /^(adfu|linku)\.us$/]
    },
    ready: function ready() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee117() {
        var handler;
        return _regenerator["default"].wrap(function _callee117$(_context117) {
          while (1) {
            switch (_context117.prev = _context117.next) {
              case 0:
                handler = new StagedHandler();
                _context117.next = 3;
                return handler.call();
              case 3:
              case "end":
                return _context117.stop();
            }
          }
        }, _callee117);
      }))();
    }
  });
  var AbstractHandler = function () {
    function AbstractHandler() {
      (0, _classCallCheck2["default"])(this, AbstractHandler);
      this._overlaySelector = ['[class$="Overlay"]', '#__random_class_name__', '#headlineatas', '#myModal', '.opacity_wrapper', '#overlay'].join(', '); 
      this._formSelector = ['#go-link', '.go-link', '#originalLink.get-link', 'form[action="/links/go"]', 'form[action="/links/linkdropgo"]'].join(', ');
    }
    (0, _createClass2["default"])(AbstractHandler, [{
      key: "removeOverlay",
      value: function removeOverlay() {
        _ADSBYPASSER_NAMESPACE__.$.remove(this._overlaySelector);
        _ADSBYPASSER_NAMESPACE__.$.block(this._overlaySelector, document.body); 
        setInterval(function () {
          document.body.style.overflow = 'initial';
        }, 500);
      }
    }, {
      key: "removeFrame",
      value: function removeFrame() {
        _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
      }
    }, {
      key: "call",
      value: function () {
        var _call = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee118() {
          var ok, mw, url;
          return _regenerator["default"].wrap(function _callee118$(_context118) {
            while (1) {
              switch (_context118.prev = _context118.next) {
                case 0:
                  _context118.next = 2;
                  return this.prepare();
                case 2:
                  ok = _context118.sent;
                  if (ok) {
                    _context118.next = 5;
                    break;
                  }
                  return _context118.abrupt("return");
                case 5:
                  _context118.next = 7;
                  return this.getMiddleware();
                case 7:
                  mw = _context118.sent;
                  if (mw) {
                    _context118.next = 11;
                    break;
                  }
                  this.withoutMiddleware();
                  return _context118.abrupt("return");
                case 11:
                  _context118.next = 13;
                  return this.getURL(mw);
                case 13:
                  url = _context118.sent;
                  _context118.next = 16;
                  return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
                case 16:
                case "end":
                  return _context118.stop();
              }
            }
          }, _callee118, this);
        }));
        function call() {
          return _call.apply(this, arguments);
        }
        return call;
      }()
    }]);
    return AbstractHandler;
  }();
  var NoRecaptchaHandler = function (_AbstractHandler) {
    (0, _inherits2["default"])(NoRecaptchaHandler, _AbstractHandler);
    var _super = _createSuper(NoRecaptchaHandler);
    function NoRecaptchaHandler() {
      (0, _classCallCheck2["default"])(this, NoRecaptchaHandler);
      return _super.apply(this, arguments);
    }
    (0, _createClass2["default"])(NoRecaptchaHandler, [{
      key: "prepare",
      value: function prepare() {
        this.removeFrame();
        this.removeOverlay();
        return true;
      }
    }, {
      key: "getMiddleware",
      value: function () {
        var _getMiddleware = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee119() {
          return _regenerator["default"].wrap(function _callee119$(_context119) {
            while (1) {
              switch (_context119.prev = _context119.next) {
                case 0:
                  _context119.next = 2;
                  return getJQueryForm(this._formSelector);
                case 2:
                  return _context119.abrupt("return", _context119.sent);
                case 3:
                case "end":
                  return _context119.stop();
              }
            }
          }, _callee119, this);
        }));
        function getMiddleware() {
          return _getMiddleware.apply(this, arguments);
        }
        return getMiddleware;
      }()
    }, {
      key: "withoutMiddleware",
      value: function withoutMiddleware() {
        _ADSBYPASSER_NAMESPACE__._.info('no form');
      }
    }, {
      key: "getURL",
      value: function () {
        var _getURL = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee120(jForm) {
          return _regenerator["default"].wrap(function _callee120$(_context120) {
            while (1) {
              switch (_context120.prev = _context120.next) {
                case 0:
                  _context120.next = 2;
                  return getURLFromJQueryForm(jForm);
                case 2:
                  return _context120.abrupt("return", _context120.sent);
                case 3:
                case "end":
                  return _context120.stop();
              }
            }
          }, _callee120);
        }));
        function getURL(_x3) {
          return _getURL.apply(this, arguments);
        }
        return getURL;
      }()
    }]);
    return NoRecaptchaHandler;
  }(AbstractHandler);
  var RecaptchaHandler = function (_AbstractHandler2) {
    (0, _inherits2["default"])(RecaptchaHandler, _AbstractHandler2);
    var _super2 = _createSuper(RecaptchaHandler);
    function RecaptchaHandler() {
      (0, _classCallCheck2["default"])(this, RecaptchaHandler);
      return _super2.apply(this, arguments);
    }
    (0, _createClass2["default"])(RecaptchaHandler, [{
      key: "prepare",
      value: function () {
        var _prepare = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee121() {
          var f, b;
          return _regenerator["default"].wrap(function _callee121$(_context121) {
            while (1) {
              switch (_context121.prev = _context121.next) {
                case 0:
                  this.removeOverlay();
                  f = _ADSBYPASSER_NAMESPACE__.$.$('#captchaShortlink, div.g-recaptcha');
                  if (f) {
                    _context121.next = 4;
                    break;
                  }
                  return _context121.abrupt("return", true);
                case 4:
                  _ADSBYPASSER_NAMESPACE__._.info('recaptcha detected, stop'); 
                  _ADSBYPASSER_NAMESPACE__._.info('trying to listen submit button');
                  b = _ADSBYPASSER_NAMESPACE__.$.$('#invisibleCaptchaShortlink');
                  if (b) {
                    _context121.next = 9;
                    break;
                  }
                  return _context121.abrupt("return", false);
                case 9:
                  _context121.next = 11;
                  return this.submitListen(b, f);
                case 11:
                  return _context121.abrupt("return", false);
                case 12:
                case "end":
                  return _context121.stop();
              }
            }
          }, _callee121, this);
        }));
        function prepare() {
          return _prepare.apply(this, arguments);
        }
        return prepare;
      }()
    }, {
      key: "submitListen",
      value: function () {
        var _submitListen = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee122(b) {
          var o;
          return _regenerator["default"].wrap(function _callee122$(_context122) {
            while (1) {
              switch (_context122.prev = _context122.next) {
                case 0:
                  o = new MutationObserver(function () {
                    if (!b.disabled) {
                      b.click();
                    }
                  });
                  o.observe(b, {
                    attributes: true
                  });
                case 2:
                case "end":
                  return _context122.stop();
              }
            }
          }, _callee122);
        }));
        function submitListen(_x4) {
          return _submitListen.apply(this, arguments);
        }
        return submitListen;
      }()
    }, {
      key: "getMiddleware",
      value: function () {
        var _getMiddleware2 = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee123() {
          return _regenerator["default"].wrap(function _callee123$(_context123) {
            while (1) {
              switch (_context123.prev = _context123.next) {
                case 0:
                  _context123.next = 2;
                  return getJQueryForm(this._formSelector);
                case 2:
                  return _context123.abrupt("return", _context123.sent);
                case 3:
                case "end":
                  return _context123.stop();
              }
            }
          }, _callee123, this);
        }));
        function getMiddleware() {
          return _getMiddleware2.apply(this, arguments);
        }
        return getMiddleware;
      }()
    }, {
      key: "withoutMiddleware",
      value: function withoutMiddleware() {
        var f = (0, _ADSBYPASSER_NAMESPACE__.$)('#link-view');
        f.submit();
      }
    }, {
      key: "getURL",
      value: function () {
        var _getURL2 = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee124(jForm) {
          var url;
          return _regenerator["default"].wrap(function _callee124$(_context124) {
            while (1) {
              switch (_context124.prev = _context124.next) {
                case 0:
                  if (false) {}
                  _context124.next = 3;
                  return _ADSBYPASSER_NAMESPACE__._.wait(1000);
                case 3:
                  _context124.prev = 3;
                  _context124.next = 6;
                  return getURLFromJQueryForm(jForm);
                case 6:
                  url = _context124.sent;
                  if (!url) {
                    _context124.next = 9;
                    break;
                  }
                  return _context124.abrupt("return", url);
                case 9:
                  _context124.next = 14;
                  break;
                case 11:
                  _context124.prev = 11;
                  _context124.t0 = _context124["catch"](3);
                  _ADSBYPASSER_NAMESPACE__._.warn(_context124.t0);
                case 14:
                  _context124.next = 0;
                  break;
                case 16:
                case "end":
                  return _context124.stop();
              }
            }
          }, _callee124, null, [[3, 11]]);
        }));
        function getURL(_x5) {
          return _getURL2.apply(this, arguments);
        }
        return getURL;
      }()
    }]);
    return RecaptchaHandler;
  }(AbstractHandler);
  var InvisibleRecaptchaHandler = function (_RecaptchaHandler) {
    (0, _inherits2["default"])(InvisibleRecaptchaHandler, _RecaptchaHandler);
    var _super3 = _createSuper(InvisibleRecaptchaHandler);
    function InvisibleRecaptchaHandler() {
      (0, _classCallCheck2["default"])(this, InvisibleRecaptchaHandler);
      return _super3.apply(this, arguments);
    }
    (0, _createClass2["default"])(InvisibleRecaptchaHandler, [{
      key: "submitListen",
      value: function () {
        var _submitListen2 = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee125(b, f) {
          var click;
          return _regenerator["default"].wrap(function _callee125$(_context125) {
            while (1) {
              switch (_context125.prev = _context125.next) {
                case 0:
                  _context125.next = 2;
                  return _ADSBYPASSER_NAMESPACE__._.wait(1000);
                case 2:
                  click = f.clientWidth === 0 || f.childNodes.length === 0;
                  if (click && !b.disabled) {
                    _ADSBYPASSER_NAMESPACE__._.info('clicking submit button, because recaptcha was empty'); 
                    b.setAttribute('onclick', '');
                    b.click();
                  }
                case 4:
                case "end":
                  return _context125.stop();
              }
            }
          }, _callee125);
        }));
        function submitListen(_x6, _x7) {
          return _submitListen2.apply(this, arguments);
        }
        return submitListen;
      }()
    }]);
    return InvisibleRecaptchaHandler;
  }(RecaptchaHandler);
  var NonDisabledRecaptchaHandler = function (_RecaptchaHandler2) {
    (0, _inherits2["default"])(NonDisabledRecaptchaHandler, _RecaptchaHandler2);
    var _super4 = _createSuper(NonDisabledRecaptchaHandler);
    function NonDisabledRecaptchaHandler() {
      (0, _classCallCheck2["default"])(this, NonDisabledRecaptchaHandler);
      return _super4.apply(this, arguments);
    }
    (0, _createClass2["default"])(NonDisabledRecaptchaHandler, [{
      key: "submitListen",
      value: function () {
        var _submitListen3 = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee126(b) {
          return _regenerator["default"].wrap(function _callee126$(_context126) {
            while (1) {
              switch (_context126.prev = _context126.next) {
                case 0:
                  if (false) {}
                  _context126.next = 3;
                  return _ADSBYPASSER_NAMESPACE__._.wait(500);
                case 3:
                  if (!(grecaptcha && grecaptcha.getResponse().length !== 0)) {
                    _context126.next = 6;
                    break;
                  }
                  b.click();
                  return _context126.abrupt("break", 8);
                case 6:
                  _context126.next = 0;
                  break;
                case 8:
                case "end":
                  return _context126.stop();
              }
            }
          }, _callee126);
        }));
        function submitListen(_x8) {
          return _submitListen3.apply(this, arguments);
        }
        return submitListen;
      }()
    }]);
    return NonDisabledRecaptchaHandler;
  }(RecaptchaHandler);
  var OURLHandler = function (_RecaptchaHandler3) {
    (0, _inherits2["default"])(OURLHandler, _RecaptchaHandler3);
    var _super5 = _createSuper(OURLHandler);
    function OURLHandler() {
      (0, _classCallCheck2["default"])(this, OURLHandler);
      return _super5.apply(this, arguments);
    }
    (0, _createClass2["default"])(OURLHandler, [{
      key: "getMiddleware",
      value: function () {
        var _getMiddleware3 = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee127() {
          return _regenerator["default"].wrap(function _callee127$(_context127) {
            while (1) {
              switch (_context127.prev = _context127.next) {
                case 0:
                  _context127.next = 2;
                  return getJQueryForm('#get-link');
                case 2:
                  _context127.t0 = _context127.sent;
                  _context127.next = 5;
                  return getJQueryForm(this._formSelector);
                case 5:
                  _context127.t1 = _context127.sent;
                  return _context127.abrupt("return", {
                    verify: _context127.t0,
                    go: _context127.t1
                  });
                case 7:
                case "end":
                  return _context127.stop();
              }
            }
          }, _callee127, this);
        }));
        function getMiddleware() {
          return _getMiddleware3.apply(this, arguments);
        }
        return getMiddleware;
      }()
    }, {
      key: "getURL",
      value: function () {
        var _getURL3 = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee128(jFormObject) {
          return _regenerator["default"].wrap(function _callee128$(_context128) {
            while (1) {
              switch (_context128.prev = _context128.next) {
                case 0:
                  _context128.next = 2;
                  return getURLFromJQueryForm(jFormObject.verify);
                case 2:
                  _context128.next = 4;
                  return getURLFromJQueryForm(jFormObject.go);
                case 4:
                  return _context128.abrupt("return", _context128.sent);
                case 5:
                case "end":
                  return _context128.stop();
              }
            }
          }, _callee128);
        }));
        function getURL(_x9) {
          return _getURL3.apply(this, arguments);
        }
        return getURL;
      }()
    }]);
    return OURLHandler;
  }(RecaptchaHandler);
  var LinkDropHandler = function (_RecaptchaHandler4) {
    (0, _inherits2["default"])(LinkDropHandler, _RecaptchaHandler4);
    var _super6 = _createSuper(LinkDropHandler);
    function LinkDropHandler() {
      (0, _classCallCheck2["default"])(this, LinkDropHandler);
      return _super6.apply(this, arguments);
    }
    (0, _createClass2["default"])(LinkDropHandler, [{
      key: "getMiddleware",
      value: function () {
        var _getMiddleware4 = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee129() {
          return _regenerator["default"].wrap(function _callee129$(_context129) {
            while (1) {
              switch (_context129.prev = _context129.next) {
                case 0:
                  _context129.next = 2;
                  return getJQueryForm('#mylink1');
                case 2:
                  return _context129.abrupt("return", _context129.sent);
                case 3:
                case "end":
                  return _context129.stop();
              }
            }
          }, _callee129);
        }));
        function getMiddleware() {
          return _getMiddleware4.apply(this, arguments);
        }
        return getMiddleware;
      }()
    }]);
    return LinkDropHandler;
  }(RecaptchaHandler);
  var StagedHandler = function (_AbstractHandler3) {
    (0, _inherits2["default"])(StagedHandler, _AbstractHandler3);
    var _super7 = _createSuper(StagedHandler);
    function StagedHandler() {
      (0, _classCallCheck2["default"])(this, StagedHandler);
      return _super7.apply(this, arguments);
    }
    (0, _createClass2["default"])(StagedHandler, [{
      key: "prepare",
      value: function prepare() {
        this.removeFrame();
        this.removeOverlay();
        return true;
      }
    }, {
      key: "getMiddleware",
      value: function () {
        var _getMiddleware5 = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee130() {
          var f, args, url, page;
          return _regenerator["default"].wrap(function _callee130$(_context130) {
            while (1) {
              switch (_context130.prev = _context130.next) {
                case 0:
                  f = _ADSBYPASSER_NAMESPACE__.$.$('#link-view');
                  if (f) {
                    _context130.next = 3;
                    break;
                  }
                  return _context130.abrupt("return", document);
                case 3:
                  args = extractArgument(f);
                  url = f.getAttribute('action');
                  _context130.next = 7;
                  return _ADSBYPASSER_NAMESPACE__.$.post(url, args);
                case 7:
                  page = _context130.sent;
                  page = _ADSBYPASSER_NAMESPACE__.$.toDOM(page);
                  return _context130.abrupt("return", page);
                case 10:
                case "end":
                  return _context130.stop();
              }
            }
          }, _callee130);
        }));
        function getMiddleware() {
          return _getMiddleware5.apply(this, arguments);
        }
        return getMiddleware;
      }()
    }, {
      key: "withoutMiddleware",
      value: function withoutMiddleware() {
        _ADSBYPASSER_NAMESPACE__._.info('no page');
      }
    }, {
      key: "getURL",
      value: function () {
        var _getURL4 = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee131(page) {
          var f, args, url, data;
          return _regenerator["default"].wrap(function _callee131$(_context131) {
            while (1) {
              switch (_context131.prev = _context131.next) {
                case 0:
                  f = (0, _ADSBYPASSER_NAMESPACE__.$)('#go-link', page);
                  args = extractArgument(f);
                  url = f.getAttribute('action');
                  _context131.next = 5;
                  return _ADSBYPASSER_NAMESPACE__.$.post(url, args);
                case 5:
                  data = _context131.sent;
                  data = JSON.parse(data);
                  if (!(data && data.url)) {
                    _context131.next = 10;
                    break;
                  }
                  _ADSBYPASSER_NAMESPACE__.$.nuke(data.url);
                  return _context131.abrupt("return", data.url);
                case 10:
                  throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('wrong data');
                case 11:
                case "end":
                  return _context131.stop();
              }
            }
          }, _callee131);
        }));
        function getURL(_x10) {
          return _getURL4.apply(this, arguments);
        }
        return getURL;
      }()
    }]);
    return StagedHandler;
  }(AbstractHandler);
  var ShortlyHandler = function (_AbstractHandler4) {
    (0, _inherits2["default"])(ShortlyHandler, _AbstractHandler4);
    var _super8 = _createSuper(ShortlyHandler);
    function ShortlyHandler() {
      (0, _classCallCheck2["default"])(this, ShortlyHandler);
      return _super8.apply(this, arguments);
    }
    (0, _createClass2["default"])(ShortlyHandler, [{
      key: "prepare",
      value: function prepare() {
        return true;
      }
    }, {
      key: "getMiddleware",
      value: function () {
        var _getMiddleware6 = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee132() {
          var a;
          return _regenerator["default"].wrap(function _callee132$(_context132) {
            while (1) {
              switch (_context132.prev = _context132.next) {
                case 0:
                  a = (0, _ADSBYPASSER_NAMESPACE__.$)('#myModal .btn-primary');
                  a = a.pathname.match(/^\/r\/(.+)/);
                  return _context132.abrupt("return", a[1]);
                case 3:
                case "end":
                  return _context132.stop();
              }
            }
          }, _callee132);
        }));
        function getMiddleware() {
          return _getMiddleware6.apply(this, arguments);
        }
        return getMiddleware;
      }()
    }, {
      key: "withoutMiddleware",
      value: function withoutMiddleware() {
        _ADSBYPASSER_NAMESPACE__._.info('no page');
      }
    }, {
      key: "getURL",
      value: function () {
        var _getURL5 = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee133(id) {
          return _regenerator["default"].wrap(function _callee133$(_context133) {
            while (1) {
              switch (_context133.prev = _context133.next) {
                case 0:
                  if (false) {}
                  _ADSBYPASSER_NAMESPACE__.$.window.jQuery.post('getlink.php', {
                    id: id
                  }).done(function (url) {
                    if (url.match(/^http/)) {
                      _ADSBYPASSER_NAMESPACE__.$.openLink(url);
                    }
                  });
                  _context133.next = 4;
                  return _ADSBYPASSER_NAMESPACE__._.wait(500);
                case 4:
                  _context133.next = 0;
                  break;
                case 6:
                case "end":
                  return _context133.stop();
              }
            }
          }, _callee133);
        }));
        function getURL(_x11) {
          return _getURL5.apply(this, arguments);
        }
        return getURL;
      }()
    }]);
    return ShortlyHandler;
  }(AbstractHandler);
  function extractArgument(form) {
    var args = {};
    _ADSBYPASSER_NAMESPACE__._.forEach(_ADSBYPASSER_NAMESPACE__.$.$$('input', form), function (v) {
      args[v.name] = v.value;
    });
    return args;
  }
  function getJQueryForm(_x12) {
    return _getJQueryForm.apply(this, arguments);
  }
  function _getJQueryForm() {
    _getJQueryForm = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee134(selector) {
      var jQuery, f;
      return _regenerator["default"].wrap(function _callee134$(_context134) {
        while (1) {
          switch (_context134.prev = _context134.next) {
            case 0:
              jQuery = _ADSBYPASSER_NAMESPACE__.$.window.$;
            case 1:
              if (jQuery) {
                _context134.next = 7;
                break;
              }
              _context134.next = 4;
              return _ADSBYPASSER_NAMESPACE__._.wait(50);
            case 4:
              jQuery = _ADSBYPASSER_NAMESPACE__.$.window.$;
              _context134.next = 1;
              break;
            case 7:
              f = jQuery(selector);
              if (!(f.length > 0)) {
                _context134.next = 10;
                break;
              }
              return _context134.abrupt("return", f);
            case 10:
              return _context134.abrupt("return", null);
            case 11:
            case "end":
              return _context134.stop();
          }
        }
      }, _callee134);
    }));
    return _getJQueryForm.apply(this, arguments);
  }
  function getURLFromJQueryForm(jForm) {
    return new Promise(function (resolve, reject) {
      if (jForm.is('a') && jForm.attr('href')) {
        resolve(jForm.attr('href'));
      }
      var jQuery = _ADSBYPASSER_NAMESPACE__.$.window.$;
      jQuery.ajax({
        dataType: 'json',
        type: 'POST',
        url: jForm.attr('action'),
        data: jForm.serialize(),
        success: function success(result) {
          if (result.url) {
            resolve(result.url);
          } else {
            reject(new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError(result.message));
          }
        },
        error: function error(xhr, status, _error) {
          _ADSBYPASSER_NAMESPACE__._.warn(xhr, status, _error);
          reject(new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('request error'));
        }
      });
    });
  }
})();
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^linkduit\.net$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee135() {
      var l, check;
      return _regenerator["default"].wrap(function _callee135$(_context135) {
        while (1) {
          switch (_context135.prev = _context135.next) {
            case 0:
              l = (0, _ADSBYPASSER_NAMESPACE__.$)('.col-lg-8 h1').textContent;
              check = l.match(/^https?:\/\//);
              if (!check) {
                _context135.next = 7;
                break;
              }
              _context135.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l);
            case 5:
              _context135.next = 8;
              break;
            case 7:
              return _context135.abrupt("return");
            case 8:
            case "end":
              return _context135.stop();
          }
        }
      }, _callee135);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?linkplugapp\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee136() {
      var a;
      return _regenerator["default"].wrap(function _callee136$(_context136) {
        while (1) {
          switch (_context136.prev = _context136.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#mc_embed_signup_scroll a');
              _context136.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case "end":
              return _context136.stop();
          }
        }
      }, _callee136);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^linksas\.us$/,
    path: /^(\/\w+)$/
  },
  ready: function ready(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee137() {
      var recaptcha, url, ipinfo, payload, token, data;
      return _regenerator["default"].wrap(function _callee137$(_context137) {
        while (1) {
          switch (_context137.prev = _context137.next) {
            case 0:
              _context137.next = 2;
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
              recaptcha = _context137.sent;
              url = "http://ipinfo.io/".concat(_ADSBYPASSER_NAMESPACE__._.generateRandomIP(), "/json");
              _context137.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.get(url);
            case 6:
              ipinfo = _context137.sent;
              ipinfo = JSON.parse(ipinfo);
              payload = {
                codeAds: 1,
                country: ipinfo.country,
                ipAddress: ipinfo.ip,
                recaptcha: recaptcha
              }; 
              token = _ADSBYPASSER_NAMESPACE__.$.getCookie('XSRF-TOKEN');
              _context137.next = 12;
              return _ADSBYPASSER_NAMESPACE__.$.post('/go' + m.path[1], payload, {
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': token
              });
            case 12:
              data = _context137.sent;
              data = JSON.parse(data);
              _context137.next = 16;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(data.message);
            case 16:
            case "end":
              return _context137.stop();
          }
        }
      }, _callee137);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^linksas\.us$/,
    path: /^\/go\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee138() {
      var a, url, pattern, lastURL, matched;
      return _regenerator["default"].wrap(function _callee138$(_context138) {
        while (1) {
          switch (_context138.prev = _context138.next) {
            case 0:
              a = _ADSBYPASSER_NAMESPACE__.$.$('#btnSubmit');
              if (a) {
                _context138.next = 3;
                break;
              }
              return _context138.abrupt("return");
            case 3:
              url = a.href;
              pattern = /https?:\/\//g;
              lastURL = '';
            case 6:
              if (false) {}
              matched = pattern.exec(url);
              if (matched) {
                _context138.next = 10;
                break;
              }
              return _context138.abrupt("break", 13);
            case 10:
              lastURL = matched + url.substring(pattern.lastIndex);
              _context138.next = 6;
              break;
            case 13:
              _context138.next = 15;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(lastURL);
            case 15:
            case "end":
              return _context138.stop();
          }
        }
      }, _callee138);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(linkshrink|lnkshrnk)\.net$/,
    path: /^\/[a-zA-Z0-9]+$/
  },
  start: function start() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee139() {
      return _regenerator["default"].wrap(function _callee139$(_context139) {
        while (1) {
          switch (_context139.prev = _context139.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.window._impspcabe = 0;
            case 1:
            case "end":
              return _context139.stop();
          }
        }
      }, _callee139);
    }))();
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee140() {
      var l;
      return _regenerator["default"].wrap(function _callee140$(_context140) {
        while (1) {
          switch (_context140.prev = _context140.next) {
            case 0:
              l = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/revC\("([^"]+)"\)/);
              l = atob(l[1]);
              _context140.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('/' + l);
            case 4:
            case "end":
              return _context140.stop();
          }
        }
      }, _callee140);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(linkshrink|lnkshrnk)\.net$/,
    path: /=(.+)$/
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee141() {
      return _regenerator["default"].wrap(function _callee141$(_context141) {
        while (1) {
          switch (_context141.prev = _context141.next) {
            case 0:
              _context141.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m.path[1]);
            case 2:
            case "end":
              return _context141.stop();
          }
        }
      }, _callee141);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^dwindly\.io$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee142() {
      var l;
      return _regenerator["default"].wrap(function _callee142$(_context142) {
        while (1) {
          switch (_context142.prev = _context142.next) {
            case 0:
              l = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/encD\("([^"]+)"\)/);
              if (!l) {
                _context142.next = 6;
                break;
              }
              l = atob(l[1]);
              _context142.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('/' + l);
            case 5:
              return _context142.abrupt("return");
            case 6:
              l = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/document\.location\.href = "([^"]+)"/);
              _context142.next = 9;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l[1]);
            case 9:
            case "end":
              return _context142.stop();
          }
        }
      }, _callee142);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^linksupto\.com$/, /^uplinkto\.me$/],
    path: /^\/view\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee143() {
      var l;
      return _regenerator["default"].wrap(function _callee143$(_context143) {
        while (1) {
          switch (_context143.prev = _context143.next) {
            case 0:
              l = (0, _ADSBYPASSER_NAMESPACE__.$)('.submit-captcha.row .col-sm-3.col-sm-offset-4 button');
              l.click();
            case 2:
            case "end":
              return _context143.stop();
          }
        }
      }, _callee143);
    }))();
  }
}); 
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^link-to\.net$/, /^linkvertise\.com$/],
    query: /^\?r=([a-zA-Z0-9/=]+)$/
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee144() {
      var url;
      return _regenerator["default"].wrap(function _callee144$(_context144) {
        while (1) {
          switch (_context144.prev = _context144.next) {
            case 0:
              url = atob(m.query[1]);
              _context144.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 3:
            case "end":
              return _context144.stop();
          }
        }
      }, _callee144);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^direct-link\.net$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee145() {
      var lv;
      return _regenerator["default"].wrap(function _callee145$(_context145) {
        while (1) {
          switch (_context145.prev = _context145.next) {
            case 0:
              lv = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/window.location.href = \("([^"]+)"\);/);
              _context145.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(lv[1]);
            case 3:
            case "end":
              return _context145.stop();
          }
        }
      }, _callee145);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(rd?)lnk\.co$/,
    path: /^\/[^.]+$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee146() {
      var f, o;
      return _regenerator["default"].wrap(function _callee146$(_context146) {
        while (1) {
          switch (_context146.prev = _context146.next) {
            case 0:
              f = _ADSBYPASSER_NAMESPACE__.$.$('iframe#dest');
              if (!f) {
                _context146.next = 5;
                break;
              }
              _context146.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f.src);
            case 4:
              return _context146.abrupt("return");
            case 5:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              o = _ADSBYPASSER_NAMESPACE__.$.$('#urlholder');
              if (!o) {
                _context146.next = 11;
                break;
              }
              _context146.next = 10;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(o.value);
            case 10:
              return _context146.abrupt("return");
            case 11:
              o = _ADSBYPASSER_NAMESPACE__.$.$('#skipBtn');
              if (!o) {
                _context146.next = 17;
                break;
              }
              o = o.querySelector('a');
              _context146.next = 16;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(o.href);
            case 16:
              return _context146.abrupt("return");
            case 17:
              o = document.title.replace(/(LNK.co|Linkbee)\s*:\s*/, '');
              _context146.next = 20;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(o);
            case 20:
            case "end":
              return _context146.stop();
          }
        }
      }, _callee146);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.lolinez\.com$/,
    query: /\?(.+)/
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee147() {
      return _regenerator["default"].wrap(function _callee147$(_context147) {
        while (1) {
          switch (_context147.prev = _context147.next) {
            case 0:
              _context147.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m.query[1]);
            case 2:
            case "end":
              return _context147.stop();
          }
        }
      }, _callee147);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.mije\.net$/,
    path: /^\/\w+\/(.+)$/
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee148() {
      var url;
      return _regenerator["default"].wrap(function _callee148$(_context148) {
        while (1) {
          switch (_context148.prev = _context148.next) {
            case 0:
              url = atob(m.path[1]); 
              _context148.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 3:
            case "end":
              return _context148.stop();
          }
        }
      }, _callee148);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^minidroid\.net$/, /^linkpoi\.in$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee149() {
      var a;
      return _regenerator["default"].wrap(function _callee149$(_context149) {
        while (1) {
          switch (_context149.prev = _context149.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a.redirect, a[target=_blank][rel=nofollow]');
              _context149.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case "end":
              return _context149.stop();
          }
        }
      }, _callee149);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^mirrorfilehost\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee150() {
      var frame, form, input;
      return _regenerator["default"].wrap(function _callee150$(_context150) {
        while (1) {
          switch (_context150.prev = _context150.next) {
            case 0:
              _context150.next = 2;
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
            case "end":
              return _context150.stop();
          }
        }
      }, _callee150);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^moesubs\.com$/,
    path: /^\/url\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee151() {
      var a, i;
      return _regenerator["default"].wrap(function _callee151$(_context151) {
        while (1) {
          switch (_context151.prev = _context151.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.gotolink > center:nth-child(1) > div:nth-child(1) > i:nth-child(2)');
              a = a.textContent;
              i = a.lastIndexOf('http');
              a = a.substr(i);
              _context151.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a);
            case 6:
            case "end":
              return _context151.stop();
          }
        }
      }, _callee151);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: 'http://my-link.pro/*',
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee152() {
      var i;
      return _regenerator["default"].wrap(function _callee152$(_context152) {
        while (1) {
          switch (_context152.prev = _context152.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('iframe[scrolling=auto]');
              if (!i) {
                _context152.next = 4;
                break;
              }
              _context152.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(i.src);
            case 4:
            case "end":
              return _context152.stop();
          }
        }
      }, _callee152);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?mylink\.zone$/,
    path: /^\/[^/]+$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee153() {
      var matches, url;
      return _regenerator["default"].wrap(function _callee153$(_context153) {
        while (1) {
          switch (_context153.prev = _context153.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              matches = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/<a href="https:\/\/(?:www\.)?mylink\.zone\/link\/redirect\/\?url=([^&]+)&/);
              url = decodeURIComponent(matches[1]);
              _context153.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 5:
            case "end":
              return _context153.stop();
          }
        }
      }, _callee153);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^onepiece-ex\.com\.br$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee154() {
      var matches;
      return _regenerator["default"].wrap(function _callee154$(_context154) {
        while (1) {
          switch (_context154.prev = _context154.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              matches = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/<a href="([^&]+)(?=" )/);
              _context154.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(matches[1]);
            case 4:
            case "end":
              return _context154.stop();
          }
        }
      }, _callee154);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^www\.namiyt\.com$/, /^realsht\.mobi$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee155() {
      var n;
      return _regenerator["default"].wrap(function _callee155$(_context155) {
        while (1) {
          switch (_context155.prev = _context155.next) {
            case 0:
              n = (0, _ADSBYPASSER_NAMESPACE__.$)('#section1 form input#section1');
              n.click();
            case 2:
            case "end":
              return _context155.stop();
          }
        }
      }, _callee155);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^nmac\.to$/,
    path: /^\/download\/(.+)/
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee156() {
      var url;
      return _regenerator["default"].wrap(function _callee156$(_context156) {
        while (1) {
          switch (_context156.prev = _context156.next) {
            case 0:
              url = atob(m.path[1]);
              _context156.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 3:
            case "end":
              return _context156.stop();
          }
        }
      }, _callee156);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^nsfw\.in$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee157() {
      var a;
      return _regenerator["default"].wrap(function _callee157$(_context157) {
        while (1) {
          switch (_context157.prev = _context157.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#long_url a');
              _context157.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case "end":
              return _context157.stop();
          }
        }
      }, _callee157);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^nutshellurl\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee158() {
      var iframe;
      return _regenerator["default"].wrap(function _callee158$(_context158) {
        while (1) {
          switch (_context158.prev = _context158.next) {
            case 0:
              iframe = (0, _ADSBYPASSER_NAMESPACE__.$)('iframe');
              _context158.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(iframe.src);
            case 3:
            case "end":
              return _context158.stop();
          }
        }
      }, _callee158);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.oni\.vn$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee159() {
      var data, url;
      return _regenerator["default"].wrap(function _callee159$(_context159) {
        while (1) {
          switch (_context159.prev = _context159.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              data = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/data:"([^"]+)"/);
              if (data) {
                _context159.next = 4;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('pattern changed');
            case 4:
              data = data[1];
              _context159.next = 7;
              return _ADSBYPASSER_NAMESPACE__.$.get('/click.html', data);
            case 7:
              url = _context159.sent;
              _context159.next = 10;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 10:
            case "end":
              return _context159.stop();
          }
        }
      }, _callee159);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^(www\.)?ouo\.(io|press)$/, /^(sloomp|novaenreta)\.space$/],
    path: /^\/go\/\w+$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee160() {
      return _regenerator["default"].wrap(function _callee160$(_context160) {
        while (1) {
          switch (_context160.prev = _context160.next) {
            case 0:
              (0, _ADSBYPASSER_NAMESPACE__.$)('form').submit();
            case 1:
            case "end":
              return _context160.stop();
          }
        }
      }, _callee160);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^p\.pw$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee161() {
      var m;
      return _regenerator["default"].wrap(function _callee161$(_context161) {
        while (1) {
          switch (_context161.prev = _context161.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/window\.location = "(.*)";/);
              m = m[1];
              _context161.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m);
            case 5:
            case "end":
              return _context161.stop();
          }
        }
      }, _callee161);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^pdi2\.net$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee162() {
      var s;
      return _regenerator["default"].wrap(function _callee162$(_context162) {
        while (1) {
          switch (_context162.prev = _context162.next) {
            case 0:
              s = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/top\.location = '([^']+)'/);
              s = s[1];
              _context162.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(s);
            case 4:
            case "end":
              return _context162.stop();
          }
        }
      }, _callee162);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^(probusinesshub|tecnogb)\.com$/, /^(trackywe|starvate)\.in$/, /^viralcollect\.info$/, /^(technodia|ourtechnoew|mutharammss|thanda|thinana)\.xyz$/, /^entretendonaweb\.ga$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee163() {
      var f;
      return _regenerator["default"].wrap(function _callee163$(_context163) {
        while (1) {
          switch (_context163.prev = _context163.next) {
            case 0:
              f = _ADSBYPASSER_NAMESPACE__.$.$('form[id$=-subscribe]');
              if (!f) {
                _context163.next = 5;
                break;
              }
              f.action = f.action.replace('http:', 'https:');
              f.submit();
              return _context163.abrupt("return");
            case 5:
              f = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/location\.href="([^"]+)"/);
              f = f[1];
              _context163.next = 9;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f);
            case 9:
            case "end":
              return _context163.stop();
          }
        }
      }, _callee163);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^pucuk\.xyz$/,
    path: /^\/\w+/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee164() {
      var px;
      return _regenerator["default"].wrap(function _callee164$(_context164) {
        while (1) {
          switch (_context164.prev = _context164.next) {
            case 0:
              px = (0, _ADSBYPASSER_NAMESPACE__.$)('#content article center a.button.icon.fa-link');
              _context164.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(px.href);
            case 3:
            case "end":
              return _context164.stop();
          }
        }
      }, _callee164);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: 'http://richlink.com/app/webscr?cmd=_click&key=*',
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee165() {
      var f;
      return _regenerator["default"].wrap(function _callee165$(_context165) {
        while (1) {
          switch (_context165.prev = _context165.next) {
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
              _context165.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(f);
            case 6:
            case "end":
              return _context165.stop();
          }
        }
      }, _callee165);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^preview\.rlu\.ru$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee166() {
      var a;
      return _regenerator["default"].wrap(function _callee166$(_context166) {
        while (1) {
          switch (_context166.prev = _context166.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#content > .long_url > a');
              _context166.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case "end":
              return _context166.stop();
          }
        }
      }, _callee166);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.ron\.vn$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee167() {
      var script, data, url;
      return _regenerator["default"].wrap(function _callee167$(_context167) {
        while (1) {
          switch (_context167.prev = _context167.next) {
            case 0:
              script = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts('linknexttop');
              data = script.match(/data:"([^"]+)"/);
              url = _ADSBYPASSER_NAMESPACE__.$.window.domain + 'click.html?' + data[1];
              _context167.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.get(url, {}, {
                'Content-Type': 'application/json; charset=utf-8'
              });
            case 5:
              url = _context167.sent;
              _context167.next = 8;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 8:
            case "end":
              return _context167.stop();
          }
        }
      }, _callee167);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?sa\.ae$/,
    path: /^\/\w+\/$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee168() {
      var m;
      return _regenerator["default"].wrap(function _callee168$(_context168) {
        while (1) {
          switch (_context168.prev = _context168.next) {
            case 0:
              m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/const real_link = '([^']+)';/);
              _context168.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m[1]);
            case 3:
            case "end":
              return _context168.stop();
          }
        }
      }, _callee168);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?safeurl\.eu$/,
    path: /\/\w+/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee169() {
      var directUrl;
      return _regenerator["default"].wrap(function _callee169$(_context169) {
        while (1) {
          switch (_context169.prev = _context169.next) {
            case 0:
              directUrl = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/window\.open\("([^"]+)"\);/);
              if (directUrl) {
                _context169.next = 3;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('script content changed');
            case 3:
              directUrl = directUrl[1];
              _context169.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(directUrl);
            case 6:
            case "end":
              return _context169.stop();
          }
        }
      }, _callee169);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^segmentnext\.com$/, /^(www\.)?videogamesblogger\.com$/],
    path: /^\/interstitial\.html$/,
    query: /return_url=([^&]+)/
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee170() {
      return _regenerator["default"].wrap(function _callee170$(_context170) {
        while (1) {
          switch (_context170.prev = _context170.next) {
            case 0:
              _context170.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(decodeURIComponent(m.query[1]));
            case 2:
            case "end":
              return _context170.stop();
          }
        }
      }, _callee170);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^(www\.)?semprot\.com$/, /^46\.166\.167\.16$/],
    path: /^\/ahli\.php/,
    query: /^\?url=(.*)/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee171() {
      var sem;
      return _regenerator["default"].wrap(function _callee171$(_context171) {
        while (1) {
          switch (_context171.prev = _context171.next) {
            case 0:
              sem = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/var the_url = '([^']+)';/);
              _context171.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(sem[1]);
            case 3:
            case "end":
              return _context171.stop();
          }
        }
      }, _callee171);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^(www\.)?apploadz\.ru$/, /^(www\.)?seomafia\.net$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee172() {
      var a;
      return _regenerator["default"].wrap(function _callee172$(_context172) {
        while (1) {
          switch (_context172.prev = _context172.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('table a');
              _context172.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 4:
            case "end":
              return _context172.stop();
          }
        }
      }, _callee172);
    }))();
  }
});
(function () {
  var hostRules = [
  /^(jnw0|cllkme|clkmein|corneey|ceesty)\.com$/, /^(destyy|festyy|gestyy)\.com$/, 
  /^sh\.st$/, /^(viid|wiid|clkme)\.me$/];
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: hostRules,
      path: /^\/freeze\/.+/
    },
    ready: function ready() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee173() {
        var promise, url;
        return _regenerator["default"].wrap(function _callee173$(_context173) {
          while (1) {
            switch (_context173.prev = _context173.next) {
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
                _context173.next = 3;
                return promise;
              case 3:
                url = _context173.sent;
                _context173.next = 6;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
              case 6:
              case "end":
                return _context173.stop();
            }
          }
        }, _callee173);
      }))();
    }
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: hostRules,
      path: /https?:\/\//
    },
    start: function start() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee174() {
        var url;
        return _regenerator["default"].wrap(function _callee174$(_context174) {
          while (1) {
            switch (_context174.prev = _context174.next) {
              case 0:
                url = window.location.pathname + window.location.search + window.location.hash;
                url = url.match(/(https?:\/\/.*)$/);
                url = url[1];
                _context174.next = 5;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
              case 5:
              case "end":
                return _context174.stop();
            }
          }
        }, _callee174);
      }))();
    }
  });
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: hostRules,
      path: /^\/[\d\w]+/
    },
    start: function start() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee175() {
        return _regenerator["default"].wrap(function _callee175$(_context175) {
          while (1) {
            switch (_context175.prev = _context175.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.window._impspcabe = 0;
              case 1:
              case "end":
                return _context175.stop();
            }
          }
        }, _callee175);
      }))();
    },
    ready: function ready() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee176() {
        var m, o;
        return _regenerator["default"].wrap(function _callee176$(_context176) {
          while (1) {
            switch (_context176.prev = _context176.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                _ADSBYPASSER_NAMESPACE__.$.removeAllTimer();
                m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/sessionId: "([\d\w]+)",/);
                if (!m) {
                  _context176.next = 6;
                  break;
                }
                afterGotSessionId(m[1]);
                return _context176.abrupt("return");
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
              case "end":
                return _context176.stop();
            }
          }
        }, _callee176);
      }))();
    }
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
    host: /^(short|srt)\.am$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee177() {
      return _regenerator["default"].wrap(function _callee177$(_context177) {
        while (1) {
          switch (_context177.prev = _context177.next) {
            case 0:
              _context177.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(5000);
            case 2:
              _context177.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('', {
                post: {
                  _image: 'Continue'
                }
              });
            case 4:
            case "end":
              return _context177.stop();
          }
        }
      }, _callee177);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?shorti\.ga$/,
    path: [/^\/\w+$/, /^\/url_redirector\.html$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee178() {
      var f, _$find5, _$find6, v;
      return _regenerator["default"].wrap(function _callee178$(_context178) {
        while (1) {
          switch (_context178.prev = _context178.next) {
            case 0:
              f = _ADSBYPASSER_NAMESPACE__.$.$$('frame'); 
              _$find5 = _ADSBYPASSER_NAMESPACE__._.find(f, function (value) {
                if (value.getAttribute('class')) {
                  return _ADSBYPASSER_NAMESPACE__._.none;
                } 
                return 'Target frame found';
              }), _$find6 = (0, _slicedToArray2["default"])(_$find5, 2), v = _$find6[1];
              _context178.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(v.src);
            case 4:
            case "end":
              return _context178.stop();
          }
        }
      }, _callee178);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^shortid\.co$/,
    path: /^\/[a-zA-Z0-9]+/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee179() {
      var s;
      return _regenerator["default"].wrap(function _callee179$(_context179) {
        while (1) {
          switch (_context179.prev = _context179.next) {
            case 0:
              s = (0, _ADSBYPASSER_NAMESPACE__.$)('a#makingdifferenttimer');
              _context179.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(s.href);
            case 3:
            case "end":
              return _context179.stop();
          }
        }
      }, _callee179);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^get\.shrink-service\.it$/,
    path: /^\/(.+)/
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee180() {
      return _regenerator["default"].wrap(function _callee180$(_context180) {
        while (1) {
          switch (_context180.prev = _context180.next) {
            case 0:
              _context180.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink("//www.shrink-service.it/shrinked/".concat(m.path[1]));
            case 2:
            case "end":
              return _context180.stop();
          }
        }
      }, _callee180);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.shrink-service\.it$/,
    path: /^\/shrinked\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee181() {
      var i;
      return _regenerator["default"].wrap(function _callee181$(_context181) {
        while (1) {
          switch (_context181.prev = _context181.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('input[id][name]');
              _context181.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(i.value);
            case 3:
            case "end":
              return _context181.stop();
          }
        }
      }, _callee181);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.shrink-service\.it$/,
    path: /^\/[se]\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee182() {
      var i;
      return _regenerator["default"].wrap(function _callee182$(_context182) {
        while (1) {
          switch (_context182.prev = _context182.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('body > input[id][name]');
              _ADSBYPASSER_NAMESPACE__.$.openLink(i.value);
            case 3:
            case "end":
              return _context182.stop();
          }
        }
      }, _callee182);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^sht\.io$/,
    path: /^\/\d+\/(.+)$/
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee183() {
      var url;
      return _regenerator["default"].wrap(function _callee183$(_context183) {
        while (1) {
          switch (_context183.prev = _context183.next) {
            case 0:
              url = atob(m.path[1]); 
              url = url.match(/\{sht-io\}(.+)\{sht-io\}.*\{sht-io\}/);
              _context183.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url[1]);
            case 4:
            case "end":
              return _context183.stop();
          }
        }
      }, _callee183);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^shtlink\.co$/,
    path: /^\/short-url\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee184() {
      var meta, url;
      return _regenerator["default"].wrap(function _callee184$(_context184) {
        while (1) {
          switch (_context184.prev = _context184.next) {
            case 0:
              meta = (0, _ADSBYPASSER_NAMESPACE__.$)('meta[name="description"]');
              url = meta.content;
              _context184.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 4:
            case "end":
              return _context184.stop();
          }
        }
      }, _callee184);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^shtme\.co$/,
    path: /^\/\w+/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee185() {
      var s;
      return _regenerator["default"].wrap(function _callee185$(_context185) {
        while (1) {
          switch (_context185.prev = _context185.next) {
            case 0:
              s = (0, _ADSBYPASSER_NAMESPACE__.$)('.content div a button');
              s.click();
            case 2:
            case "end":
              return _context185.stop();
          }
        }
      }, _callee185);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?similarsites\.com$/,
    path: /^\/goto\/([^?]+)/
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee186() {
      var l;
      return _regenerator["default"].wrap(function _callee186$(_context186) {
        while (1) {
          switch (_context186.prev = _context186.next) {
            case 0:
              l = m.path[1];
              if (!/^https?:\/\//.test(l)) {
                l = 'http://' + l;
              }
              _context186.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l);
            case 4:
            case "end":
              return _context186.stop();
          }
        }
      }, _callee186);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^slink\.bid$/,
    path: /^\/short\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee187() {
      var a;
      return _regenerator["default"].wrap(function _callee187$(_context187) {
        while (1) {
          switch (_context187.prev = _context187.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.text-center a#btn-main.btn.btn-main');
              _context187.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case "end":
              return _context187.stop();
          }
        }
      }, _callee187);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.spaste\.com$/,
    path: /^\/go\/\w+$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee188() {
      var id, url;
      return _regenerator["default"].wrap(function _callee188$(_context188) {
        while (1) {
          switch (_context188.prev = _context188.next) {
            case 0:
              id = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/\{id:'(\d+)'\}/);
              _context188.next = 3;
              return _ADSBYPASSER_NAMESPACE__._.wait(3000);
            case 3:
              _context188.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.post('/site/getRedirectLink', {
                id: id[1]
              });
            case 5:
              url = _context188.sent;
              _context188.next = 8;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 8:
            case "end":
              return _context188.stop();
          }
        }
      }, _callee188);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.spaste\.com$/,
    path: /^\/(s|site)\/\w+$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee189() {
      var captcha, i, word;
      return _regenerator["default"].wrap(function _callee189$(_context189) {
        while (1) {
          switch (_context189.prev = _context189.next) {
            case 0:
              captcha = (0, _ADSBYPASSER_NAMESPACE__.$)('#globalCaptchaConfirm');
              captcha.click(); 
              _context189.next = 4;
              return _ADSBYPASSER_NAMESPACE__._.wait(1000);
            case 4:
              i = 0;
            case 5:
              if (!(i < 3)) {
                _context189.next = 13;
                break;
              }
              word = (0, _ADSBYPASSER_NAMESPACE__.$)('#currentCapQue').textContent;
              _context189.next = 9;
              return _ADSBYPASSER_NAMESPACE__._.wait(100);
            case 9:
              (0, _ADSBYPASSER_NAMESPACE__.$)("[data-id='".concat(word, "']")).click();
            case 10:
              ++i;
              _context189.next = 5;
              break;
            case 13:
              (0, _ADSBYPASSER_NAMESPACE__.$)('#template-contactform-submit').click();
            case 14:
            case "end":
              return _context189.stop();
          }
        }
      }, _callee189);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^sub2unlock\.com$/,
    path: /^\/link\/get\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee190() {
      var su;
      return _regenerator["default"].wrap(function _callee190$(_context190) {
        while (1) {
          switch (_context190.prev = _context190.next) {
            case 0:
              su = (0, _ADSBYPASSER_NAMESPACE__.$)('a#link.unlock-step-link.getlink');
              _context190.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(su.href);
            case 3:
            case "end":
              return _context190.stop();
          }
        }
      }, _callee190);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^sub2unlock\.com$/,
    path: /^\/[a-zA-Z0-9]+/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee191() {
      var su;
      return _regenerator["default"].wrap(function _callee191$(_context191) {
        while (1) {
          switch (_context191.prev = _context191.next) {
            case 0:
              su = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/'href', '([^']+)'/);
              _context191.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(su[1]);
            case 3:
            case "end":
              return _context191.stop();
          }
        }
      }, _callee191);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?supercheats\.com$/,
    path: /^\/interstitial\.html$/,
    query: /(?:\?|&)oldurl=([^&]+)(?:$|&)/
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee192() {
      return _regenerator["default"].wrap(function _callee192$(_context192) {
        while (1) {
          switch (_context192.prev = _context192.next) {
            case 0:
              _context192.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m.query[1]);
            case 2:
            case "end":
              return _context192.stop();
          }
        }
      }, _callee192);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^surfsees\.com$/,
    query: /^\?go=([a-zA-Z0-9]+)$/
  },
  start: function start() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee193() {
      var path;
      return _regenerator["default"].wrap(function _callee193$(_context193) {
        while (1) {
          switch (_context193.prev = _context193.next) {
            case 0:
              path = window.location.href.replace('go', 'link');
              _context193.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(path);
            case 3:
            case "end":
              return _context193.stop();
          }
        }
      }, _callee193);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^surfsees\.com$/,
    query: /^\?link=([a-zA-Z0-9]+)(clickarurl)?$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee194() {
      var s;
      return _regenerator["default"].wrap(function _callee194$(_context194) {
        while (1) {
          switch (_context194.prev = _context194.next) {
            case 0:
              s = (0, _ADSBYPASSER_NAMESPACE__.$)('input.btn.btn-primary');
              s.click();
            case 2:
            case "end":
              return _context194.stop();
          }
        }
      }, _callee194);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^surfsees\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee195() {
      var surl;
      return _regenerator["default"].wrap(function _callee195$(_context195) {
        while (1) {
          switch (_context195.prev = _context195.next) {
            case 0:
              surl = (0, _ADSBYPASSER_NAMESPACE__.$)('#wpsafe-linkz a');
              _context195.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(surl.href);
            case 3:
            case "end":
              return _context195.stop();
          }
        }
      }, _callee195);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^swzz\.xyz$/,
    path: /^\/link\/\w+\/$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee196() {
      var g;
      return _regenerator["default"].wrap(function _callee196$(_context196) {
        while (1) {
          switch (_context196.prev = _context196.next) {
            case 0:
              g = (0, _ADSBYPASSER_NAMESPACE__.$)('a.btn-wrapper.link');
              _context196.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(g.href);
            case 3:
            case "end":
              return _context196.stop();
          }
        }
      }, _callee196);
    }))();
  }
}); 
_ADSBYPASSER_NAMESPACE__._.register({
  rule: [{
    host: /^(www\.)?sylnk\.net$/,
    query: /link=([^&]+)/
  }, {
    host: /^(www\.)?compul\.in$/,
    path: /^\/[np]\.php$/,
    query: /v=([^&]+)/
  }, {
    host: [/^(sports14|motosport)\.pw$/, /^lindung\.in$/, /^motonews\.club$/, /^ww[23]\.picnictrans\.com$/, /^(azhie|skinnycat)\.net$/, /^ww2\.awsubs\.co$/, /^plantaheim\.(web\.id|com)$/, /^irisvera\.com$/],
    query: /^\?d=([a-zA-Z0-9/=]+)$/
  }, {
    host: [/^i\.gtaind\.com$/, /^pebisnis-muda\.com$/, /^hikarinoakariost\.info$/],
    query: /^\?([a-zA-Z0-9/=]+)$/
  }, 
  {
    host: [
    /\.blogspot\.com?/, /^(www\.)?designmyhomee\.com$/, /^(www\.)?losstor\.com$/, /^((kurosafe|kurosafety)\.)?menantisenja\.com$/, /^drive\.jepitkertas\.com$/, /^lewat\.wibuindo\.com$/, /^(omgmusik|omglyrics|k2nblog)\.com$/, 
    /^(simaholina|autech)\.xyz$/, /^(www\.)?id-securelink\.xyz$/, /^(www\.)?converthinks\.xyz$/, /^(www\.)?marivelkece\.xyz$/, /^(www\.)?yametesenpai\.xyz$/, 
    /^(www\.)?tojros\.tk$/, /^(www\.)?anjay\.info$/, /^(www\.)?kakkoiisafe\.us$/, /^(www\.)?kurosafe\.(website|online)$/, /^(www\.)?drakorsafe\.tech$/, /^(fmlawkers|indexmovie)\.club$/, /^micin\.online$/, /^unduh\.in/, /^ad4msan\.win$/, /^nooyul\.co$/, /^pafpaf\.info$/, /^hightech\.web\.id$/],
    query: [
    /^\?url=([a-zA-Z0-9/=]+)$/, /^\?id=([a-zA-Z0-9/=]+)$/, /^\?site=([a-zA-Z0-9/=]+)$/]
  }, {
    host: [/^(sehatlega|davinsurance|healthtod|irisvera|akanosora|subetenews)\.com$/, /^(www\.)?menantisenja\.com$/, /^(businessforyouand|travelwithtricks|situsbaru)\.me$/, /^plantaheim\.(web\.id|com)$/, /^(www\.)?starzone\.cc$/, /^(www\.)?kakkoiisafe\.us$/, /^(www\.)?polrec\.site$/, /^yumechan\.club$/, /^ceklinku\.xyz$/, /^lindung\.(in|me)$/, /^(www\.)?bolaoke\.club$/],
    query: /^\?r=([a-zA-Z0-9/=]+)$/
  }, {
    host: /^www\.compartiendofull\.net$/,
    path: /^\/go2/,
    query: /^\?p=([a-zA-Z0-9/=]+)$/
  }, {
    host: /^animeforce\.stream$/,
    query: /^\?l=([a-zA-Z0-9/=]+)$/
  }, {
    host: /^(www\.)?dukun-cit\.com$/,
    query: /^\?s=([a-zA-Z0-9/=]+)$/
  }, {
    host: /^ultimate\.turkdown\.com$/,
    query: /^\?stepone=([a-zA-Z0-9/=]+)$/
  }, {
    host: /^leechpremium\.link$/,
    path: /^\/cheat\//,
    query: /^\?link=([a-zA-Z0-9/=]+)$/
  }, {
    host: /^closetopic\.site$/,
    query: /^\?go=([a-zA-Z0-9/=]+)$/
  }, {
    host: /^infosia\.xyz$/,
    query: /^\?kesehatan=([a-zA-Z0-9/=%]+)$/
  }, {
    host: /^remiyu\.me$/,
    query: /^\?reff=([a-zA-Z0-9/=]+)$/
  }],
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee197() {
      var rawLink;
      return _regenerator["default"].wrap(function _callee197$(_context197) {
        while (1) {
          switch (_context197.prev = _context197.next) {
            case 0:
              rawLink = atob(decodeURIComponent(m.query[1]));
              _context197.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(rawLink);
            case 3:
            case "end":
              return _context197.stop();
          }
        }
      }, _callee197);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: [{
    host: [
    /(^|\.)safelink(converter|reviewx?)\.com?$/, /^giga74\.com$/, /^(awsubsco|ad4msan)\.ml$/, /^nekopoi\.ga$/],
    query: /id=([\w\\]+=*)/
  }, {
    host: [/^(naisho|filmku|henpoi)\.lompat\.in$/, /^edogawa\.lon\.pw$/, /^telolet\.in$/],
    query: /go=([\w\\]+=*)/
  }],
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee198() {
      var l, table;
      return _regenerator["default"].wrap(function _callee198$(_context198) {
        while (1) {
          switch (_context198.prev = _context198.next) {
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
              _context198.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l);
            case 5:
            case "end":
              return _context198.stop();
          }
        }
      }, _callee198);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?safelinkreview\.com$/,
    path: /^\/\w+\/cost\/([\w.]+)\/?$/
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee199() {
      var l;
      return _regenerator["default"].wrap(function _callee199$(_context199) {
        while (1) {
          switch (_context199.prev = _context199.next) {
            case 0:
              l = 'http://' + m.path[1];
              _context199.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l);
            case 3:
            case "end":
              return _context199.stop();
          }
        }
      }, _callee199);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^(gameinfo|apasih|autoride)\.pw$/, /^(www\.)?lifesurance\.info$/, /^speedcar\.club$/, /^(www\.)?bolaoke\.club$/, /^(intercelestial|sweetlantern|davinsurance|technlab)\.com$/, /^awcar\.icu$/, /^skyinsurance\.ml$/, /^(getinfos|sehatsegar|lonelymoon)\.net$/, /^stt\.awsubs\.co$/, /^(wibuindo|naturalhealthy)\.xyz$/, /^waifusafe\.ooo$/],
    query: /^\?(id|c|k)=([a-zA-Z0-9/=]+)$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee200() {
      var f;
      return _regenerator["default"].wrap(function _callee200$(_context200) {
        while (1) {
          switch (_context200.prev = _context200.next) {
            case 0:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('form');
              f.submit();
            case 2:
            case "end":
              return _context200.stop();
          }
        }
      }, _callee200);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^(linkach|autolinkach)\.com$/],
    query: /^\?id=([a-zA-Z0-9/=]+)$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee201() {
      var g;
      return _regenerator["default"].wrap(function _callee201$(_context201) {
        while (1) {
          switch (_context201.prev = _context201.next) {
            case 0:
              g = (0, _ADSBYPASSER_NAMESPACE__.$)('.humancheck form');
              g.submit();
            case 2:
            case "end":
              return _context201.stop();
          }
        }
      }, _callee201);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: [{
    host: [
    /^motonews\.club$/, /^(www\.)?bolaoke\.club$/, 
    /^(ani-share|autolinkach)\.com$/, /^(autofans|landscapenature)\.pw$/, /^(www\.)?lifesurance\.info$/],
    query: /get=([^&]+)/
  }, {
    host: [/^(gameinfo)\.pw$/, /^(www\.)?lifesurance\.info$/, /^speedcar\.club$/, /^(www\.)?bolaoke\.club$/, /^(autolinkach|davinsurance)\.com$/, /^awcar\.icu$/, /^skyinsurance\.ml$/, /^(getinfos)\.net$/, /^stt\.awsubs\.co$/, /^wibuindo\.xyz$/]
  }],
  ready: function ready(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee202() {
      var s;
      return _regenerator["default"].wrap(function _callee202$(_context202) {
        while (1) {
          switch (_context202.prev = _context202.next) {
            case 0:
              s = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/(const|var) a='([^']+)'/);
              if (!s) {
                _context202.next = 5;
                break;
              }
              _context202.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(s[2]);
            case 4:
              return _context202.abrupt("return");
            case 5:
              s = atob(m.query[1]);
              _context202.next = 8;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(s);
            case 8:
            case "end":
              return _context202.stop();
          }
        }
      }, _callee202);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^waifusafe\.ooo$/, /^naturalhealthy\.xyz$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee203() {
      var ln, tl;
      return _regenerator["default"].wrap(function _callee203$(_context203) {
        while (1) {
          switch (_context203.prev = _context203.next) {
            case 0:
              _context203.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(1000);
            case 2:
              ln = (0, _ADSBYPASSER_NAMESPACE__.$)('#landing.rurasafectrl .to a');
              ln.click();
              _context203.next = 6;
              return _ADSBYPASSER_NAMESPACE__._.wait(1000);
            case 6:
              tl = (0, _ADSBYPASSER_NAMESPACE__.$)('.rurasafectrl img#showlink.spoint');
              tl.click();
            case 8:
            case "end":
              return _context203.stop();
          }
        }
      }, _callee203);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^(sehatsegar|lonelymoon)\.net$/, /^(intercelestial|sweetlantern)\.com$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee204() {
      var ln, tl;
      return _regenerator["default"].wrap(function _callee204$(_context204) {
        while (1) {
          switch (_context204.prev = _context204.next) {
            case 0:
              _context204.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(1000);
            case 2:
              ln = (0, _ADSBYPASSER_NAMESPACE__.$)('#landing.soractrl .to a');
              ln.click();
              _context204.next = 6;
              return _ADSBYPASSER_NAMESPACE__._.wait(2000);
            case 6:
              tl = (0, _ADSBYPASSER_NAMESPACE__.$)('.soractrl img#showlink.spoint');
              tl.click();
            case 8:
            case "end":
              return _context204.stop();
          }
        }
      }, _callee204);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^(linkach|technlab)\.com$/, /^(apasih|autoride)\.pw$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee205() {
      var ln, tl;
      return _regenerator["default"].wrap(function _callee205$(_context205) {
        while (1) {
          switch (_context205.prev = _context205.next) {
            case 0:
              _context205.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(1000);
            case 2:
              ln = (0, _ADSBYPASSER_NAMESPACE__.$)('#landing.soractrl .to a');
              ln.click();
              _context205.next = 6;
              return _ADSBYPASSER_NAMESPACE__._.wait(5000);
            case 6:
              tl = (0, _ADSBYPASSER_NAMESPACE__.$)('.soractrl img#showlink.spoint');
              tl.click();
            case 8:
            case "end":
              return _context205.stop();
          }
        }
      }, _callee205);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^lewat\.in$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee206() {
      var l;
      return _regenerator["default"].wrap(function _callee206$(_context206) {
        while (1) {
          switch (_context206.prev = _context206.next) {
            case 0:
              l = (0, _ADSBYPASSER_NAMESPACE__.$)('#lanjut > #goes > a');
              _context206.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l.href);
            case 3:
            case "end":
              return _context206.stop();
          }
        }
      }, _callee206);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^sardeath\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee207() {
      var sd;
      return _regenerator["default"].wrap(function _callee207$(_context207) {
        while (1) {
          switch (_context207.prev = _context207.next) {
            case 0:
              sd = (0, _ADSBYPASSER_NAMESPACE__.$)('.download-link > a');
              _context207.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(sd.href);
            case 3:
            case "end":
              return _context207.stop();
          }
        }
      }, _callee207);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^goou\.in$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee208() {
      var g;
      return _regenerator["default"].wrap(function _callee208$(_context208) {
        while (1) {
          switch (_context208.prev = _context208.next) {
            case 0:
              g = (0, _ADSBYPASSER_NAMESPACE__.$)('#download_link > a');
              _context208.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(g.href);
            case 3:
            case "end":
              return _context208.stop();
          }
        }
      }, _callee208);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: [{
    host: /^tout-debrid\.net$/,
    path: /^\/api\//
  }, {
    host: /^163\.172\.83\.145$/,
    path: /^\/deb\/api\//
  }],
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee209() {
      var t;
      return _regenerator["default"].wrap(function _callee209$(_context209) {
        while (1) {
          switch (_context209.prev = _context209.next) {
            case 0:
              t = (0, _ADSBYPASSER_NAMESPACE__.$)('.download-box > div > a');
              _context209.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(t.href);
            case 3:
            case "end":
              return _context209.stop();
          }
        }
      }, _callee209);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^drivehub\.link$/,
    path: /^\/file\.php/,
    query: /^\?id=(.+)/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee210() {
      var d;
      return _regenerator["default"].wrap(function _callee210$(_context210) {
        while (1) {
          switch (_context210.prev = _context210.next) {
            case 0:
              d = (0, _ADSBYPASSER_NAMESPACE__.$)('.infobox > center > b > a#proceed.btn.btn-danger');
              _context210.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(d.href);
            case 3:
            case "end":
              return _context210.stop();
          }
        }
      }, _callee210);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^kombatch\.loncat\.pw$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee211() {
      var s;
      return _regenerator["default"].wrap(function _callee211$(_context211) {
        while (1) {
          switch (_context211.prev = _context211.next) {
            case 0:
              s = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/\.open\("([^"]+)",/);
              s = s[1].match(/go=([^&]+)/);
              s = atob(s[1]);
              _context211.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(s);
            case 5:
            case "end":
              return _context211.stop();
          }
        }
      }, _callee211);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^skiplink\.io$/,
    path: /^\/get\/link\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee212() {
      var s;
      return _regenerator["default"].wrap(function _callee212$(_context212) {
        while (1) {
          switch (_context212.prev = _context212.next) {
            case 0:
              s = (0, _ADSBYPASSER_NAMESPACE__.$)('.panel.panel-default.panel-body > center > center > a');
              _context212.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(s.href);
            case 3:
            case "end":
              return _context212.stop();
          }
        }
      }, _callee212);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^(v1\.)?hexafile\.net$/, /^skiplink\.io$/],
    path: /^\/[a-zA-Z0-9]+/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee213() {
      var h;
      return _regenerator["default"].wrap(function _callee213$(_context213) {
        while (1) {
          switch (_context213.prev = _context213.next) {
            case 0:
              h = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/="([^"]+)",e=0,f=a/);
              _context213.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(h[1]);
            case 3:
            case "end":
              return _context213.stop();
          }
        }
      }, _callee213);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^drivefiles\.bid$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee214() {
      var d;
      return _regenerator["default"].wrap(function _callee214$(_context214) {
        while (1) {
          switch (_context214.prev = _context214.next) {
            case 0:
              d = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/window\.open\('([^']+)'\);/);
              _context214.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(d[1]);
            case 3:
            case "end":
              return _context214.stop();
          }
        }
      }, _callee214);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^android-1\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee215() {
      var a;
      return _regenerator["default"].wrap(function _callee215$(_context215) {
        while (1) {
          switch (_context215.prev = _context215.next) {
            case 0:
              a = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/id=download><\/div><a href=([^>]+)>/);
              _context215.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a[1]);
            case 3:
            case "end":
              return _context215.stop();
          }
        }
      }, _callee215);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^boost\.ink$/
  },
  start: function start() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee216() {
      var b;
      return _regenerator["default"].wrap(function _callee216$(_context216) {
        while (1) {
          switch (_context216.prev = _context216.next) {
            case 0:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('body').getAttribute('result');
              if (!b) {
                _context216.next = 6;
                break;
              }
              _context216.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(atob(b));
            case 4:
              _context216.next = 7;
              break;
            case 6:
              return _context216.abrupt("return");
            case 7:
            case "end":
              return _context216.stop();
          }
        }
      }, _callee216);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^download-mirror\.ga$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee217() {
      var dm;
      return _regenerator["default"].wrap(function _callee217$(_context217) {
        while (1) {
          switch (_context217.prev = _context217.next) {
            case 0:
              dm = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/a href='([^']+)'/);
              _context217.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(dm[1]);
            case 3:
            case "end":
              return _context217.stop();
          }
        }
      }, _callee217);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^url\.hulblog\.com$/,
    path: /^\/[a-zA-Z0-9]+/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee218() {
      var h;
      return _regenerator["default"].wrap(function _callee218$(_context218) {
        while (1) {
          switch (_context218.prev = _context218.next) {
            case 0:
              h = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/"href='([^']+)'/);
              _context218.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(h[1]);
            case 3:
            case "end":
              return _context218.stop();
          }
        }
      }, _callee218);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^ww[23]\.picnictrans\.com$/, /^short\.awsubs\.(co|me)$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee219() {
      var a;
      return _regenerator["default"].wrap(function _callee219$(_context219) {
        while (1) {
          switch (_context219.prev = _context219.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('div.kiri > center > a');
              _context219.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case "end":
              return _context219.stop();
          }
        }
      }, _callee219);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [
    /^(www\.)?anjay\.info$/, /^(www\.)?tetew\.info$/, 
    /^www\.njiir\.com$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee220() {
      var a;
      return _regenerator["default"].wrap(function _callee220$(_context220) {
        while (1) {
          switch (_context220.prev = _context220.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('div.download-link > a');
              a = a.href.match(/r=(.*)$/);
              a = atob(a[1]);
              _context220.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a);
            case 5:
            case "end":
              return _context220.stop();
          }
        }
      }, _callee220);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^spacetica\.com$/, /^skinnycat\.org$/],
    path: /^\/\w+$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee221() {
      var l;
      return _regenerator["default"].wrap(function _callee221$(_context221) {
        while (1) {
          switch (_context221.prev = _context221.next) {
            case 0:
              l = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn');
              _context221.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l.href);
            case 3:
            case "end":
              return _context221.stop();
          }
        }
      }, _callee221);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^daunshorte\.teknologilink\.com$/,
    path: /^\/linkshortelink\/safelink\.php$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee222() {
      var l;
      return _regenerator["default"].wrap(function _callee222$(_context222) {
        while (1) {
          switch (_context222.prev = _context222.next) {
            case 0:
              l = (0, _ADSBYPASSER_NAMESPACE__.$)('div.article > div:nth-child(1) > center > a');
              _context222.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l.href, {
                referer: false
              });
            case 3:
            case "end":
              return _context222.stop();
          }
        }
      }, _callee222);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^teknosafe\.teknologilink\.com$/,
    path: /^\/linkteknolink\/safelinkscript\.php$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee223() {
      var l;
      return _regenerator["default"].wrap(function _callee223$(_context223) {
        while (1) {
          switch (_context223.prev = _context223.next) {
            case 0:
              l = (0, _ADSBYPASSER_NAMESPACE__.$)('#templatemo_content > div > a');
              _context223.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l.href, {
                referer: false
              });
            case 3:
            case "end":
              return _context223.stop();
          }
        }
      }, _callee223);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^zap\.in$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee224() {
      var z;
      return _regenerator["default"].wrap(function _callee224$(_context224) {
        while (1) {
          switch (_context224.prev = _context224.next) {
            case 0:
              z = (0, _ADSBYPASSER_NAMESPACE__.$)('.panel-body button');
              z.click();
            case 2:
            case "end":
              return _context224.stop();
          }
        }
      }, _callee224);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^(sataniabatch|get-click2)\.blogspot\.com$/, /^(www\.)?vehicle-techno\.cf$/, /^(www\.)?tetewlink\.me$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee225() {
      var clbt;
      return _regenerator["default"].wrap(function _callee225$(_context225) {
        while (1) {
          switch (_context225.prev = _context225.next) {
            case 0:
              clbt = (0, _ADSBYPASSER_NAMESPACE__.$)('button#gotolink');
              clbt.removeAttribute('disabled');
              _context225.next = 4;
              return _ADSBYPASSER_NAMESPACE__._.wait(1);
            case 4:
              clbt.click();
            case 5:
            case "end":
              return _context225.stop();
          }
        }
      }, _callee225);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^idnation\.net$/,
    query: /^\?page=/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee226() {
      var l;
      return _regenerator["default"].wrap(function _callee226$(_context226) {
        while (1) {
          switch (_context226.prev = _context226.next) {
            case 0:
              l = (0, _ADSBYPASSER_NAMESPACE__.$)('#linko');
              _context226.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l.href);
            case 3:
            case "end":
              return _context226.stop();
          }
        }
      }, _callee226);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^techfunda\.net$/,
    path: [/^\/link\//, /^\/safe\//]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee227() {
      var a;
      return _regenerator["default"].wrap(function _callee227$(_context227) {
        while (1) {
          switch (_context227.prev = _context227.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.hide a.btn');
              _context227.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case "end":
              return _context227.stop();
          }
        }
      }, _callee227);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^thinfi\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee228() {
      var a;
      return _regenerator["default"].wrap(function _callee228$(_context228) {
        while (1) {
          switch (_context228.prev = _context228.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('div p a');
              _context228.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case "end":
              return _context228.stop();
          }
        }
      }, _callee228);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^hello\.tribuntekno\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee229() {
      var a;
      return _regenerator["default"].wrap(function _callee229$(_context229) {
        while (1) {
          switch (_context229.prev = _context229.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('div p u b a');
              _context229.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case "end":
              return _context229.stop();
          }
        }
      }, _callee229);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: [{
    host: /^tinyarrows\.com$/,
    path: /^\/preview\.php$/,
    query: /^\?page=([^&]+)/
  }, {
    host: /^www\.javlibrary\.com$/,
    query: /url=([^&]+)/
  }],
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee230() {
      return _regenerator["default"].wrap(function _callee230$(_context230) {
        while (1) {
          switch (_context230.prev = _context230.next) {
            case 0:
              _context230.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(decodeURIComponent(m.query[1]));
            case 2:
            case "end":
              return _context230.stop();
          }
        }
      }, _callee230);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^tinyurl\.is$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee231() {
      var link;
      return _regenerator["default"].wrap(function _callee231$(_context231) {
        while (1) {
          switch (_context231.prev = _context231.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.window.count = 0;
              _context231.next = 3;
              return _ADSBYPASSER_NAMESPACE__._.tryEvery(200, function () {
                var link = (0, _ADSBYPASSER_NAMESPACE__.$)('a[id^=newskip-btn]').href;
                if (link.includes('tinyurl.is')) {
                  return _ADSBYPASSER_NAMESPACE__._.none;
                } else {
                  return link;
                }
              });
            case 3:
              link = _context231.sent;
              _context231.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(link);
            case 6:
            case "end":
              return _context231.stop();
          }
        }
      }, _callee231);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?totaldebrid\.org$/,
    path: /\/l\/(l\.php)?$/,
    query: /\?ads=([a-zA-Z0-9=]+)$/
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee232() {
      var l;
      return _regenerator["default"].wrap(function _callee232$(_context232) {
        while (1) {
          switch (_context232.prev = _context232.next) {
            case 0:
              l = atob(m.query[1]);
              _context232.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l);
            case 3:
            case "end":
              return _context232.stop();
          }
        }
      }, _callee232);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^turkdown\.com$/,
    path: /^\/link/,
    query: /^\?id=(.+)/
  },
  ready: function ready(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee233() {
      var html, res;
      return _regenerator["default"].wrap(function _callee233$(_context233) {
        while (1) {
          switch (_context233.prev = _context233.next) {
            case 0:
              _context233.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.get("?ajax=".concat(m.query[1]));
            case 2:
              html = _context233.sent;
              html = JSON.parse(html);
              res = /stepone=(.+)/.exec(html.url);
              _context233.next = 7;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(atob(res[1]));
            case 7:
            case "end":
              return _context233.stop();
          }
        }
      }, _callee233);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^u\.to$/,
    path: /^\/[\w-]+/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee234() {
      var u;
      return _regenerator["default"].wrap(function _callee234$(_context234) {
        while (1) {
          switch (_context234.prev = _context234.next) {
            case 0:
              u = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/window.location='([^']+)';/);
              _context234.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(u[1]);
            case 3:
            case "end":
              return _context234.stop();
          }
        }
      }, _callee234);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^unfake\.it$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee235() {
      var frame, i;
      return _regenerator["default"].wrap(function _callee235$(_context235) {
        while (1) {
          switch (_context235.prev = _context235.next) {
            case 0:
              frame = (0, _ADSBYPASSER_NAMESPACE__.$)('frame');
              i = frame.src.lastIndexOf('http://');
              _context235.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(frame.src.substr(i));
            case 4:
            case "end":
              return _context235.stop();
          }
        }
      }, _callee235);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^ur\.ly$/, /^urly\.mobi$/],
    path: /^\/x(.+)/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee236() {
      var path;
      return _regenerator["default"].wrap(function _callee236$(_context236) {
        while (1) {
          switch (_context236.prev = _context236.next) {
            case 0:
              path = window.location.href.replace('/x', '/goii/');
              _context236.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(path);
            case 3:
            case "end":
              return _context236.stop();
          }
        }
      }, _callee236);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^url\.fm$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee237() {
      var a;
      return _regenerator["default"].wrap(function _callee237$(_context237) {
        while (1) {
          switch (_context237.prev = _context237.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#clickbtn a');
              _context237.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case "end":
              return _context237.stop();
          }
        }
      }, _callee237);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^url\.ie$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee238() {
      var a;
      return _regenerator["default"].wrap(function _callee238$(_context238) {
        while (1) {
          switch (_context238.prev = _context238.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a[title="Link to original URL"]');
              _context238.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case "end":
              return _context238.stop();
          }
        }
      }, _callee238);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/(^|\.)urlcash\.(com|net|org)$/, /^(bat5|detonating|celebclk|eightteen|smilinglinks|peekatmygirlfriend|pornyhost|clb1|urlgalleries)\.com$/, /^looble\.net$/, /^xxxs\.org$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee239() {
      var matches;
      return _regenerator["default"].wrap(function _callee239$(_context239) {
        while (1) {
          switch (_context239.prev = _context239.next) {
            case 0:
              if (!(_ADSBYPASSER_NAMESPACE__.$.window && _ADSBYPASSER_NAMESPACE__.$.window.linkDestUrl)) {
                _context239.next = 4;
                break;
              }
              _context239.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(_ADSBYPASSER_NAMESPACE__.$.window.linkDestUrl);
            case 3:
              return _context239.abrupt("return");
            case 4:
              matches = document.body.innerHTML.match(/linkDestUrl = '(.+)'/);
              if (!matches) {
                _context239.next = 9;
                break;
              }
              _context239.next = 8;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(matches[1]);
            case 8:
              return _context239.abrupt("return");
            case 9:
            case "end":
              return _context239.stop();
          }
        }
      }, _callee239);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^urlinn\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee240() {
      var m;
      return _regenerator["default"].wrap(function _callee240$(_context240) {
        while (1) {
          switch (_context240.prev = _context240.next) {
            case 0:
              m = (0, _ADSBYPASSER_NAMESPACE__.$)('META[HTTP-EQUIV=refresh]').getAttribute('CONTENT').match(/url='([^']+)'/);
              if (!m) {
                _context240.next = 4;
                break;
              }
              _context240.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m[1]);
            case 4:
            case "end":
              return _context240.stop();
          }
        }
      }, _callee240);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^urlms\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee241() {
      var iframe;
      return _regenerator["default"].wrap(function _callee241$(_context241) {
        while (1) {
          switch (_context241.prev = _context241.next) {
            case 0:
              iframe = (0, _ADSBYPASSER_NAMESPACE__.$)('#content');
              _context241.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(iframe.src);
            case 3:
            case "end":
              return _context241.stop();
          }
        }
      }, _callee241);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?urlv2\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee242() {
      var path, m, l;
      return _regenerator["default"].wrap(function _callee242$(_context242) {
        while (1) {
          switch (_context242.prev = _context242.next) {
            case 0:
              if (!(window.location.pathname.indexOf('locked') >= 0)) {
                _context242.next = 5;
                break;
              }
              path = window.location.pathname.replace('/locked', '');
              _context242.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(path);
            case 4:
              return _context242.abrupt("return");
            case 5:
              m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/jeton=([\w]+)/);
              l = 'http://urlv2.com/algo.php?action=passer&px=0&so=1&jeton=' + m[1]; 
              _context242.next = 9;
              return _ADSBYPASSER_NAMESPACE__._.wait(5 * 1000);
            case 9:
              _context242.next = 11;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l);
            case 11:
            case "end":
              return _context242.stop();
          }
        }
      }, _callee242);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?uskip\.me$/,
    path: /^\/go\/\w+$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee243() {
      var a;
      return _regenerator["default"].wrap(function _callee243$(_context243) {
        while (1) {
          switch (_context243.prev = _context243.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#btn-main');
              _context243.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case "end":
              return _context243.stop();
          }
        }
      }, _callee243);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^ux9\.de$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee244() {
      var meta, url;
      return _regenerator["default"].wrap(function _callee244$(_context244) {
        while (1) {
          switch (_context244.prev = _context244.next) {
            case 0:
              meta = (0, _ADSBYPASSER_NAMESPACE__.$)('meta[http-equiv="refresh"][content*="url="]');
              url = meta.getAttribute('content').match(/http.*/)[0];
              _context244.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 4:
            case "end":
              return _context244.stop();
          }
        }
      }, _callee244);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^vavi\.co$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee245() {
      var l;
      return _regenerator["default"].wrap(function _callee245$(_context245) {
        while (1) {
          switch (_context245.prev = _context245.next) {
            case 0:
              l = (0, _ADSBYPASSER_NAMESPACE__.$)('#goLink');
              _context245.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l.href);
            case 3:
            case "end":
              return _context245.stop();
          }
        }
      }, _callee245);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^vcrypt\.net$/,
    path: /^\/fastshield\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee246() {
      var v;
      return _regenerator["default"].wrap(function _callee246$(_context246) {
        while (1) {
          switch (_context246.prev = _context246.next) {
            case 0:
              v = (0, _ADSBYPASSER_NAMESPACE__.$)('form input.btncontinue');
              v.click();
            case 2:
            case "end":
              return _context246.stop();
          }
        }
      }, _callee246);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.viidii\.info$/,
    query: /url=([^&]+)/
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee247() {
      var url;
      return _regenerator["default"].wrap(function _callee247$(_context247) {
        while (1) {
          switch (_context247.prev = _context247.next) {
            case 0:
              url = decodeURIComponent(m.query[1]);
              _context247.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 3:
            case "end":
              return _context247.stop();
          }
        }
      }, _callee247);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.viidii\.info$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee248() {
      var o;
      return _regenerator["default"].wrap(function _callee248$(_context248) {
        while (1) {
          switch (_context248.prev = _context248.next) {
            case 0:
              o = (0, _ADSBYPASSER_NAMESPACE__.$)('.bglink');
              _context248.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(o.href);
            case 3:
            case "end":
              return _context248.stop();
          }
        }
      }, _callee248);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?vir\.al$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee249() {
      var m;
      return _regenerator["default"].wrap(function _callee249$(_context249) {
        while (1) {
          switch (_context249.prev = _context249.next) {
            case 0:
              m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/const target_url = '([^']+)';/);
              if (m) {
                _context249.next = 3;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('site changed');
            case 3:
              _context249.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m[1]);
            case 5:
            case "end":
              return _context249.stop();
          }
        }
      }, _callee249);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?vzturl\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee250() {
      var frame;
      return _regenerator["default"].wrap(function _callee250$(_context250) {
        while (1) {
          switch (_context250.prev = _context250.next) {
            case 0:
              frame = (0, _ADSBYPASSER_NAMESPACE__.$)('frame[scrolling=yes]');
              _context250.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(frame.src);
            case 3:
            case "end":
              return _context250.stop();
          }
        }
      }, _callee250);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^st\.wardhanime\.net$/,
    path: /^\/i\/\d+$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee251() {
      var a;
      return _regenerator["default"].wrap(function _callee251$(_context251) {
        while (1) {
          switch (_context251.prev = _context251.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#wrapper > [class^="tombo"] > a[target="_blank"]');
              _context251.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case "end":
              return _context251.stop();
          }
        }
      }, _callee251);
    }))();
  }
}); 
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^wikiall\.org$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee252() {
      var div, o;
      return _regenerator["default"].wrap(function _callee252$(_context252) {
        while (1) {
          switch (_context252.prev = _context252.next) {
            case 0:
              div = (0, _ADSBYPASSER_NAMESPACE__.$)('div#place.get-btn');
              o = new MutationObserver(function () {
                var a = _ADSBYPASSER_NAMESPACE__.$.$('div#place.get-btn > a[href]');
                if (a && a.href) {
                  _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
                }
              });
              o.observe(div, {
                childList: true
              });
            case 3:
            case "end":
              return _context252.stop();
          }
        }
      }, _callee252);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^won\.pe$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee253() {
      var captcha, p;
      return _regenerator["default"].wrap(function _callee253$(_context253) {
        while (1) {
          switch (_context253.prev = _context253.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('.progress.captcha_loader, skipbox'); 
              captcha = (0, _ADSBYPASSER_NAMESPACE__.$)('#recaptcha');
              captcha.style.display = 'block'; 
              p = new Promise(function (resolve) {
                var observer = new MutationObserver(function () {
                  if (captcha.style.display === 'none') {
                    observer.disconnect();
                    resolve();
                  }
                });
                observer.observe(captcha, {
                  attributes: true
                });
              });
              _context253.next = 6;
              return p;
            case 6:
              _context253.next = 8;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(_ADSBYPASSER_NAMESPACE__.$.window.longURL);
            case 8:
            case "end":
              return _context253.stop();
          }
        }
      }, _callee253);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: 'http://yep.it/preview.php?p=*',
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee254() {
      var link;
      return _regenerator["default"].wrap(function _callee254$(_context254) {
        while (1) {
          switch (_context254.prev = _context254.next) {
            case 0:
              link = (0, _ADSBYPASSER_NAMESPACE__.$)('font[color="grey"]').innerHTML;
              _context254.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(link);
            case 3:
            case "end":
              return _context254.stop();
          }
        }
      }, _callee254);
    }))();
  }
});
(function () {
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: 'http://www.yooclick.com/l/*',
    ready: function ready() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee255() {
        var uniq, path, url;
        return _regenerator["default"].wrap(function _callee255$(_context255) {
          while (1) {
            switch (_context255.prev = _context255.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                uniq = _ADSBYPASSER_NAMESPACE__.$.window.uniq || _ADSBYPASSER_NAMESPACE__.$.window.uniqi;
                if (uniq) {
                  _context255.next = 4;
                  break;
                }
                return _context255.abrupt("return");
              case 4:
                path = window.location.pathname; 
                url = "".concat(path, "?ajax=true&adblock=false&old=false&framed=false&uniq=").concat(uniq);
                _context255.next = 8;
                return getURL(url);
              case 8:
              case "end":
                return _context255.stop();
            }
          }
        }, _callee255);
      }))();
    }
  });
  function getURL(_x13) {
    return _getURL6.apply(this, arguments);
  }
  function _getURL6() {
    _getURL6 = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee256(url) {
      var text, goodURL;
      return _regenerator["default"].wrap(function _callee256$(_context256) {
        while (1) {
          switch (_context256.prev = _context256.next) {
            case 0:
              _context256.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.get(url);
            case 2:
              text = _context256.sent;
              goodURL = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:|@)|\/|\?)*)?$/i.test(text); 
              if (!goodURL) {
                _context256.next = 8;
                break;
              }
              _context256.next = 7;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(text);
            case 7:
              return _context256.abrupt("return");
            case 8:
              _context256.next = 10;
              return _ADSBYPASSER_NAMESPACE__._.wait(500);
            case 10:
              _context256.next = 12;
              return getURL(url);
            case 12:
            case "end":
              return _context256.stop();
          }
        }
      }, _callee256);
    }));
    return _getURL6.apply(this, arguments);
  }
})();
(function () {
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: /^(www\.)?([a-zA-Z0-9]+\.)?binbox\.io$/,
      path: /\/([a-zA-Z0-9]+)/,
      hash: /(?:#([a-zA-Z0-9]+))?/
    },
    ready: function ready(m) {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee257() {
        var sjcl, paste_id, paste_salt, API_URL, pasteInfo, raw_paste, elm, frame;
        return _regenerator["default"].wrap(function _callee257$(_context257) {
          while (1) {
            switch (_context257.prev = _context257.next) {
              case 0:
                sjcl = _ADSBYPASSER_NAMESPACE__.$.window.sjcl;
                paste_id = m.path[1];
                paste_salt = m.hash[1];
                API_URL = "https://binbox.io/".concat(paste_id, ".json");
                _context257.next = 6;
                return _ADSBYPASSER_NAMESPACE__.$.get(API_URL, false, {
                  Origin: _ADSBYPASSER_NAMESPACE__._.none,
                  Referer: _ADSBYPASSER_NAMESPACE__._.none,
                  Cookie: 'referrer=1',
                  'X-Requested-With': _ADSBYPASSER_NAMESPACE__._.none
                });
              case 6:
                pasteInfo = _context257.sent;
                pasteInfo = JSON.parse(pasteInfo);
                if (pasteInfo.ok) {
                  _context257.next = 10;
                  break;
                }
                throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('error when getting paste information');
              case 10:
                if (!pasteInfo.paste.url) {
                  _context257.next = 14;
                  break;
                }
                _context257.next = 13;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(pasteInfo.paste.url);
              case 13:
                return _context257.abrupt("return");
              case 14:
                raw_paste = sjcl.decrypt(paste_salt, pasteInfo.paste.text);
                if (!isLink(raw_paste)) {
                  _context257.next = 19;
                  break;
                }
                _context257.next = 18;
                return _ADSBYPASSER_NAMESPACE__.$.openLink(raw_paste);
              case 18:
                return _context257.abrupt("return");
              case 19:
                elm = document.createElement('pre');
                elm.id = 'paste-text';
                elm.innerHTML = linkify(raw_paste); 
                frame = (0, _ADSBYPASSER_NAMESPACE__.$)('#paste-frame, #captcha-page');
                frame.parentNode.replaceChild(elm, frame);
              case 24:
              case "end":
                return _context257.stop();
            }
          }
        }, _callee257);
      }))();
    }
  });
  var sUrl = '(\\b(https?|ftp|file)://[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])';
  function isLink(text) {
    var rUrl = new RegExp("^".concat(sUrl, "$"), 'i');
    return rUrl.test(text);
  }
  function linkify(text) {
    var rUrl = new RegExp(sUrl, 'ig');
    return text.replace(rUrl, function (match) {
      return "<a href=\"".concat(match, "\">").concat(match, "</a>");
    });
  }
})();
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?pasted\.co$/,
    path: /^\/\w+$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee258() {
      return _regenerator["default"].wrap(function _callee258$(_context258) {
        while (1) {
          switch (_context258.prev = _context258.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('#captcha_overlay');
            case 1:
            case "end":
              return _context258.stop();
          }
        }
      }, _callee258);
    }))();
  }
});
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$ = $;
exports._ = void 0;
var _ajax = __webpack_require__(34);
var _cookie = __webpack_require__(36);
var _core = __webpack_require__(5);
var _dispatcher = __webpack_require__(28);
var _dom = __webpack_require__(37);
var _link = __webpack_require__(38);
var _logger = __webpack_require__(31);
var _misc = __webpack_require__(39);
var _platform = __webpack_require__(29);
var _ = {
  AdsBypasserError: _core.AdsBypasserError,
  evil: _misc.evil,
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
exports._ = _;
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
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
var _regeneratorRuntime2 = __webpack_require__(2);
var _interopRequireDefault = __webpack_require__(1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.post = post;
var _regenerator = _interopRequireDefault(__webpack_require__(2));
var _toArray2 = _interopRequireDefault(__webpack_require__(35));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(6));
var _typeof2 = _interopRequireDefault(__webpack_require__(21));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(12));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(16));
var _createClass2 = _interopRequireDefault(__webpack_require__(17));
var _inherits2 = _interopRequireDefault(__webpack_require__(18));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(20));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(23));
var _core = __webpack_require__(5);
var _platform = __webpack_require__(29);
var _logger = __webpack_require__(31);
var _marked = _regeneratorRuntime2.mark(flattenObject);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var AjaxError = function (_AdsBypasserError) {
  (0, _inherits2["default"])(AjaxError, _AdsBypasserError);
  var _super = _createSuper(AjaxError);
  function AjaxError(method, url, data, headers, status, response) {
    var _this;
    (0, _classCallCheck2["default"])(this, AjaxError);
    _this = _super.call(this, "".concat(method, " ").concat(url, " got ").concat(status));
    _this._method = method;
    _this._url = url;
    _this._data = data;
    _this._headers = headers;
    _this._status = status;
    _this._response = response;
    return _this;
  }
  (0, _createClass2["default"])(AjaxError, [{
    key: "name",
    get: function get() {
      return 'AjaxError';
    }
  }, {
    key: "method",
    get: function get() {
      return this._method;
    }
  }, {
    key: "url",
    get: function get() {
      return this._url;
    }
  }, {
    key: "data",
    get: function get() {
      return this._data;
    }
  }, {
    key: "headers",
    get: function get() {
      return this._headers;
    }
  }, {
    key: "status",
    get: function get() {
      return this._status;
    }
  }, {
    key: "response",
    get: function get() {
      return this._response;
    }
  }]);
  return AjaxError;
}(_core.AdsBypasserError);
function flattenObject(object) {
  var _i, _Object$entries, _Object$entries$_i, k, v, _iterator, _step, v_, _iterator2, _step2, _step2$value, k_, _v_;
  return _regenerator["default"].wrap(function flattenObject$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (object) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return");
        case 2:
          _i = 0, _Object$entries = Object.entries(object);
        case 3:
          if (!(_i < _Object$entries.length)) {
            _context.next = 50;
            break;
          }
          _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2), k = _Object$entries$_i[0], v = _Object$entries$_i[1];
          if (!Array.isArray(v)) {
            _context.next = 25;
            break;
          }
          _iterator = _createForOfIteratorHelper(v);
          _context.prev = 7;
          _iterator.s();
        case 9:
          if ((_step = _iterator.n()).done) {
            _context.next = 15;
            break;
          }
          v_ = _step.value;
          _context.next = 13;
          return [[k, ''], v_];
        case 13:
          _context.next = 9;
          break;
        case 15:
          _context.next = 20;
          break;
        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](7);
          _iterator.e(_context.t0);
        case 20:
          _context.prev = 20;
          _iterator.f();
          return _context.finish(20);
        case 23:
          _context.next = 47;
          break;
        case 25:
          if (!((0, _typeof2["default"])(v) === 'object')) {
            _context.next = 45;
            break;
          }
          _iterator2 = _createForOfIteratorHelper(flattenObject(v));
          _context.prev = 27;
          _iterator2.s();
        case 29:
          if ((_step2 = _iterator2.n()).done) {
            _context.next = 35;
            break;
          }
          _step2$value = (0, _slicedToArray2["default"])(_step2.value, 2), k_ = _step2$value[0], _v_ = _step2$value[1];
          _context.next = 33;
          return [[k].concat((0, _toConsumableArray2["default"])(k_)), _v_];
        case 33:
          _context.next = 29;
          break;
        case 35:
          _context.next = 40;
          break;
        case 37:
          _context.prev = 37;
          _context.t1 = _context["catch"](27);
          _iterator2.e(_context.t1);
        case 40:
          _context.prev = 40;
          _iterator2.f();
          return _context.finish(40);
        case 43:
          _context.next = 47;
          break;
        case 45:
          _context.next = 47;
          return [[k], v];
        case 47:
          _i++;
          _context.next = 3;
          break;
        case 50:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[7, 17, 20, 23], [27, 37, 40, 43]]);
}
function flattenKey(keyList) {
  var _keyList = (0, _toArray2["default"])(keyList),
      head = _keyList[0],
      rest = _keyList.slice(1);
  return "".concat(head).concat(rest.map(function (_) {
    return "[".concat(_, "]");
  }));
}
function deepJoin(prefix, object) {
  var keys = Object.getOwnPropertyNames(object);
  var mapped = (0, _core.map)(keys, function (k) {
    var v = object[k];
    var key = "".concat(prefix, "[").concat(k, "]");
    if ((0, _typeof2["default"])(v) === 'object') {
      return deepJoin(key, v);
    }
    var tmp = [key, v].map(encodeURIComponent);
    return tmp.join('=');
  });
  return mapped.join('&');
}
function toQuery(data) {
  var type = (0, _typeof2["default"])(data);
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
    if ((0, _typeof2["default"])(v) === 'object') {
      return deepJoin(k, v);
    }
    var tmp = [k, v].map(encodeURIComponent);
    return tmp.join('=');
  }).join('&');
}
function toForm(data) {
  var type = (0, _typeof2["default"])(data);
  if (data === null || type !== 'string' && type !== 'object') {
    return '';
  }
  if (type === 'string') {
    return data;
  }
  if (data instanceof String) {
    return data.toString();
  }
  var form = new FormData();
  var _iterator3 = _createForOfIteratorHelper(flattenObject(data)),
      _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _step3$value = (0, _slicedToArray2["default"])(_step3.value, 2),
          k = _step3$value[0],
          v = _step3$value[1];
      form.append(flattenKey(k), v);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return form;
}
function ajax(method, url, data, headers) {
  (0, _logger.debug)('ajax', method, url, data, headers); 
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
    } else if (headers['Content-Type'].indexOf('multipart') >= 0) {
      data = toForm(data);
    } else {
      data = toQuery(data);
    }
    headers['Content-Length'] = data.length;
  }
  return new Promise(function (resolve, reject) {
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
 }),
 (function(module, exports, __webpack_require__) {
var arrayWithHoles = __webpack_require__(13);
var iterableToArray = __webpack_require__(9);
var unsupportedIterableToArray = __webpack_require__(10);
var nonIterableRest = __webpack_require__(15);
function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableRest();
}
module.exports = _toArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
var _interopRequireDefault = __webpack_require__(1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCookie = getCookie;
exports.resetCookies = resetCookies;
exports.setCookie = setCookie;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(12));
var _core = __webpack_require__(5);
function setCookie(key, value) {
  document.cookie = "".concat(key, "=").concat(value, ";path=").concat(location.pathname, ";");
}
function getCookie(key) {
  var _find = (0, _core.find)(document.cookie.split(';'), function (v) {
    var k = v.replace(/^\s*([a-zA-Z0-9-_]+)=.+$/, '$1');
    if (k !== key) {
      return _core.none;
    }
  }),
      _find2 = (0, _slicedToArray2["default"])(_find, 2),
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
    document.cookie = "".concat(k, "=;expires=").concat(d, ";");
    document.cookie = "".concat(k, "=;path=/;expires=").concat(d, ";");
    var e = function e(a, b, c) {
      return "".concat(a, "=;path=/;domain=").concat(b, ";expires=").concat(c, ";");
    };
    document.cookie = e(k, a, d);
    document.cookie = e(k, b, d);
    document.cookie = e(k, c, d);
  });
}
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
var _interopRequireDefault = __webpack_require__(1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.block = block;
exports.querySelector = querySelector;
exports.querySelectorAll = querySelectorAll;
exports.querySelectorOrNull = querySelectorOrNull;
exports.remove = remove;
exports.searchFromScripts = searchFromScripts;
exports.toDOM = toDOM;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(12));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(16));
var _createClass2 = _interopRequireDefault(__webpack_require__(17));
var _inherits2 = _interopRequireDefault(__webpack_require__(18));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(20));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(23));
var _core = __webpack_require__(5);
var _logger = __webpack_require__(31);
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var DomNotFoundError = function (_AdsBypasserError) {
  (0, _inherits2["default"])(DomNotFoundError, _AdsBypasserError);
  var _super = _createSuper(DomNotFoundError);
  function DomNotFoundError(selector) {
    (0, _classCallCheck2["default"])(this, DomNotFoundError);
    return _super.call(this, "`".concat(selector, "` not found"));
  }
  (0, _createClass2["default"])(DomNotFoundError, [{
    key: "name",
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
    (0, _logger.debug)('removed', e);
    e.remove();
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
      _find2 = (0, _slicedToArray2["default"])(_find, 3),
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
      _find4 = (0, _slicedToArray2["default"])(_find3, 2),
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
var _interopRequireDefault = __webpack_require__(1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openLink = openLink;
var _regenerator = _interopRequireDefault(__webpack_require__(2));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(4));
var _core = __webpack_require__(5);
var _logger = __webpack_require__(31);
function prepare(e) {
  if (!document.body) {
    document.body = document.createElement('body');
  }
  document.body.appendChild(e); 
  return (0, _core.wait)(0);
}
function get(_x) {
  return _get.apply(this, arguments);
}
function _get() {
  _get = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee(url) {
    var a, clicked, tick;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            a = document.createElement('a');
            a.href = url; 
            clicked = false;
            a.addEventListener('click', function (event) {
              event.stopPropagation();
              clicked = true;
            }, true); 
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
            }, 500);
          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _get.apply(this, arguments);
}
function post(_x2, _x3) {
  return _post.apply(this, arguments);
} 
function _post() {
  _post = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee2(path, params) {
    var form;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
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
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _post.apply(this, arguments);
}
function openLink(_x4, _x5) {
  return _openLink.apply(this, arguments);
}
function _openLink() {
  _openLink = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee3(to, options) {
    var withReferer, postData, from;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(!(0, _core.isString)(to) && !to)) {
              _context3.next = 3;
              break;
            }
            (0, _logger.warn)('false URL');
            return _context3.abrupt("return");
          case 3:
            options = options || {};
            withReferer = typeof options.referer === 'undefined' ? true : options.referer;
            postData = options.post;
            from = window.location.toString();
            (0, _logger.info)("".concat(from, " -> ").concat(to));
            if (!postData) {
              _context3.next = 12;
              break;
            }
            _context3.next = 11;
            return post(to, postData);
          case 11:
            return _context3.abrupt("return");
          case 12:
            if (!withReferer) {
              _context3.next = 16;
              break;
            }
            _context3.next = 15;
            return get(to);
          case 15:
            return _context3.abrupt("return");
          case 16:
            window.top.location.replace(to);
          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _openLink.apply(this, arguments);
}
 }),
 (function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.evil = evil;
exports.generateRandomIP = generateRandomIP;
exports.nuke = nuke;
exports.removeAllTimer = removeAllTimer;
var _core = __webpack_require__(5);
var _platform = __webpack_require__(29);
var _logger = __webpack_require__(31);
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
function evil(script) {
  return function (GM, GM_deleteValue, GM_getResourceURL, GM_getValue, GM_openInTab, GM_registerMenuCommand, GM_setValue, GM_xmlhttpRequest, unsafeWindow, window) {
    return eval(script);
  }();
}
 })
 ]);