// ==UserScript==
// @name           AdsBypasser Legacy
// @namespace      AdsBypasser
// @description    Bypass Ads
// @copyright      2012+, Wei-Cheng Pan, https://adsbypasser.github.io/
// @version        7.31.0
// @license        BSD
// @homepageURL    https://adsbypasser.github.io/
// @supportURL     https://github.com/adsbypasser/adsbypasser/issues
// @updateURL      https://adsbypasser.github.io/releases/adsbypasser.full.es5.meta.js
// @downloadURL    https://adsbypasser.github.io/releases/adsbypasser.full.es5.user.js
// @icon           https://raw.githubusercontent.com/adsbypasser/adsbypasser/v7.31.0/resources/img/logo.png
// @grant          GM_deleteValue
// @grant          GM_getResourceURL
// @grant          GM_getValue
// @grant          GM_info
// @grant          GM_openInTab
// @grant          GM_registerMenuCommand
// @grant          GM_setValue
// @grant          GM_xmlhttpRequest
// @grant          GM.deleteValue
// @grant          GM.getResourceUrl
// @grant          GM.getValue
// @grant          GM.info
// @grant          GM.openInTab
// @grant          GM.setValue
// @grant          GM.xmlHttpRequest
// @grant          unsafeWindow
// @resource       alignCenter https://raw.githubusercontent.com/adsbypasser/adsbypasser/v7.31.0/resources/css/align_center.css
// @resource       scaleImage https://raw.githubusercontent.com/adsbypasser/adsbypasser/v7.31.0/resources/css/scale_image.css
// @resource       bgImage https://raw.githubusercontent.com/adsbypasser/adsbypasser/v7.31.0/resources/img/imagedoc-darknoise.png
// @noframes
// @run-at         document-start
// @include        http://*
// @include        https://*
// @connect        *
// ==/UserScript==

 (() => { 
 	var __webpack_modules__ = ([
,
 ((module) => {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 ((module, __unused_webpack_exports, __webpack_require__) => {
module.exports = __webpack_require__(3);
 }),
 ((module) => {
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
   true ? module.exports : 0
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
 ((module) => {
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
 ((__unused_webpack_module, exports, __webpack_require__) => {
"use strict";
var _regeneratorRuntime2 = __webpack_require__(2);
var _interopRequireDefault = __webpack_require__(1);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
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
 ((module, __unused_webpack_exports, __webpack_require__) => {
var arrayWithoutHoles = __webpack_require__(7);
var iterableToArray = __webpack_require__(9);
var unsupportedIterableToArray = __webpack_require__(10);
var nonIterableSpread = __webpack_require__(11);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 ((module, __unused_webpack_exports, __webpack_require__) => {
var arrayLikeToArray = __webpack_require__(8);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 ((module) => {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 ((module) => {
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 ((module, __unused_webpack_exports, __webpack_require__) => {
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
 ((module) => {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 ((module, __unused_webpack_exports, __webpack_require__) => {
var arrayWithHoles = __webpack_require__(13);
var iterableToArrayLimit = __webpack_require__(14);
var unsupportedIterableToArray = __webpack_require__(10);
var nonIterableRest = __webpack_require__(15);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 ((module) => {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 ((module) => {
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
 ((module) => {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 ((module) => {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 ((module) => {
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
 ((module, __unused_webpack_exports, __webpack_require__) => {
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
 ((module) => {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 ((module, __unused_webpack_exports, __webpack_require__) => {
var _typeof = (__webpack_require__(21)["default"]);
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
 ((module) => {
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
 ((module) => {
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 ((module) => {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 ((module, __unused_webpack_exports, __webpack_require__) => {
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
 ((module) => {
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 ((module, __unused_webpack_exports, __webpack_require__) => {
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
 ((module) => {
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
 ((__unused_webpack_module, exports, __webpack_require__) => {
"use strict";
var _interopRequireDefault = __webpack_require__(1);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
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
 ((__unused_webpack_module, exports, __webpack_require__) => {
"use strict";
var _interopRequireDefault = __webpack_require__(1);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
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
function getGMInfo() {
  if ((typeof GM_info === "undefined" ? "undefined" : (0, _typeof2["default"])(GM_info)) === 'object' && GM_info) {
    return GM_info;
  } else if ((typeof GM === "undefined" ? "undefined" : (0, _typeof2["default"])(GM)) === 'object' && GM && GM.info) {
    return GM.info;
  } else {
    return {};
  }
}
var MAGIC_KEY = '__adsbypasser_reverse_proxy__';
function getUnsafeWindowProxy() {
  var isGreaseMonkey = getGMInfo().scriptHandler === 'Greasemonkey';
  if (!isGreaseMonkey) {
    return rawUSW;
  }
  var decorator = {
    set: function set(target, key, value) {
      if (key === MAGIC_KEY) {
        return false;
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
 ((__unused_webpack_module, exports, __webpack_require__) => {
"use strict";
var _interopRequireDefault = __webpack_require__(1);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
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
 ((__unused_webpack_module, exports, __webpack_require__) => {
"use strict";
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
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
 ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
"use strict";
var _interopRequireDefault = __webpack_require__(1);
var _regenerator = _interopRequireDefault(__webpack_require__(2));
var _inherits2 = _interopRequireDefault(__webpack_require__(18));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(20));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(23));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(16));
var _createClass2 = _interopRequireDefault(__webpack_require__(17));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(4));
var _ADSBYPASSER_NAMESPACE__ = __webpack_require__(33);
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^ak\.sv$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee() {
      var any, a;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(1000);
            case 2:
              any = (0, _ADSBYPASSER_NAMESPACE__.$)('html');
              any.click();
              _context.next = 6;
              return _ADSBYPASSER_NAMESPACE__._.wait(6000);
            case 6:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a[class="download_button"]');
              _context.next = 9;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a);
            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?apunkasoftware\.net$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee2() {
      var a;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('div#proceed-now > a#dlink');
              _context2.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^thefileslocker\.net$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee3() {
      var button;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              button = (0, _ADSBYPASSER_NAMESPACE__.$)('#downloadbtn');
              button.click();
            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^(www\.)?indishare\.org$/, /^uploadrar\.com$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee4() {
      var btn;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              btn = (0, _ADSBYPASSER_NAMESPACE__.$)('button#downloadbtn.downloadbtn');
              btn.removeAttribute('disabled');
              btn.click();
            case 3:
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
    host: /^infidrive\.net$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee5() {
      var b;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(40000);
            case 2:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('button.inline-flex:nth-child(2)');
              b.click();
            case 4:
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
    host: /^k2s\.cc$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee6() {
      var a;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(35000);
            case 2:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a.link-to-file');
              _context6.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 5:
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
    host: /^katfile\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee7() {
      var a;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a[id="dlink"]');
              _context7.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
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
    host: /^(www\.)?keeplinks\.org$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee8() {
      var button;
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              button = (0, _ADSBYPASSER_NAMESPACE__.$)('[id="btnproceedsubmit"]');
              button.click();
            case 2:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: 'https://www.mirrored.to/files/*',
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee9() {
      var a;
      return _regenerator["default"].wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.col-sm.centered.extra-top a');
              _context9.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
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
    host: /^multiup\.io$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee10() {
      var b;
      return _regenerator["default"].wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn-info.btn-lg.btn-block');
              b.click();
            case 2:
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
    host: /^www\.onlinefreecourse\.net$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee11() {
      var a;
      return _regenerator["default"].wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a[class="btn btn-success"]');
              _context11.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a);
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
    host: /^sfile\.mobi$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee12() {
      var btn;
      return _regenerator["default"].wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(8000);
            case 2:
              btn = (0, _ADSBYPASSER_NAMESPACE__.$)('#download');
              btn.click();
            case 4:
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
    host: /^uploadhaven\.com$/,
    path: /^\/download\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee13() {
      var f;
      return _regenerator["default"].wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(18000);
            case 2:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn-submit-free.btn-download-free');
              f.click();
            case 4:
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
    host: /^usersdrive\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee14() {
      var a;
      return _regenerator["default"].wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn-download');
              _context14.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
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
    host: /^1ink\.cc$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee15() {
      var a;
      return _regenerator["default"].wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#countingbtn');
              _context15.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
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
    host: /^1link\.club$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee16() {
      var a;
      return _regenerator["default"].wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#download.btn');
              _context16.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
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
    host: /^a2zapk\.io$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee17() {
      var a;
      return _regenerator["default"].wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#dlbtn li a');
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
    host: /^adfoc\.us$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee18() {
      var a;
      return _regenerator["default"].wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.skip');
              _context18.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
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
    host: /^adshnk\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee19() {
      var b, a;
      return _regenerator["default"].wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              _context19.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(16000);
            case 2:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('button[class="ui right labeled icon button primary huge fluid"]');
              b.click();
              _context19.next = 6;
              return _ADSBYPASSER_NAMESPACE__._.wait(18000);
            case 6:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a[id="final_redirect"]');
              _context19.next = 9;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 9:
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
    host: /^www\.adz7short\.space$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee20() {
      var b;
      return _regenerator["default"].wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('#continue');
              _context20.next = 3;
              return _ADSBYPASSER_NAMESPACE__._.wait(10000);
            case 3:
              b.click();
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
    host: /^bcvc\.ink$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee21() {
      var b;
      return _regenerator["default"].wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              _context21.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(5000);
            case 2:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('#getLink');
              b.click();
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
    host: /^(www\.)?biglistofwebsites\.com$/,
    path: /^\/go\/(\w+\.\w+)$/
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee22() {
      return _regenerator["default"].wrap(function _callee22$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              _context22.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('http://' + m.path[1]);
            case 2:
            case "end":
              return _context22.stop();
          }
        }
      }, _callee22);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: [{
    host: /^(www\.)?([a-zA-Z0-9]+\.)?binbox\.io$/,
    path: /\/o\/([a-zA-Z0-9]+)/
  }],
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee23() {
      var direct_link;
      return _regenerator["default"].wrap(function _callee23$(_context23) {
        while (1) {
          switch (_context23.prev = _context23.next) {
            case 0:
              direct_link = window.atob(m.path[1]);
              _context23.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(direct_link);
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
    host: /^bioskopkeren\.boo$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee24() {
      var c;
      return _regenerator["default"].wrap(function _callee24$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              _context24.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(1000);
            case 2:
              c = (0, _ADSBYPASSER_NAMESPACE__.$)('.reklamgec');
              c.click();
            case 4:
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
    host: /^boost\.ink$/
  },
  start: function start() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee25() {
      var b;
      return _regenerator["default"].wrap(function _callee25$(_context25) {
        while (1) {
          switch (_context25.prev = _context25.next) {
            case 0:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('body').getAttribute('result');
              if (!b) {
                _context25.next = 6;
                break;
              }
              _context25.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(atob(b));
            case 4:
              _context25.next = 7;
              break;
            case 6:
              return _context25.abrupt("return");
            case 7:
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
    host: /^cocoleech\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee26() {
      var a;
      return _regenerator["default"].wrap(function _callee26$(_context26) {
        while (1) {
          switch (_context26.prev = _context26.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn.btn-block.btn-success');
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
    host: /^cpmlink\.net$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee27() {
      var a;
      return _regenerator["default"].wrap(function _callee27$(_context27) {
        while (1) {
          switch (_context27.prev = _context27.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#btn-main');
              _context27.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
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
    host: /^cutpaid\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee28() {
      var a;
      return _regenerator["default"].wrap(function _callee28$(_context28) {
        while (1) {
          switch (_context28.prev = _context28.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn-primary');
              if (!a) {
                _context28.next = 5;
                break;
              }
              _context28.next = 4;
              return _ADSBYPASSER_NAMESPACE__._.wait(20000);
            case 4:
              a.click();
            case 5:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn-success.btn-lg.get-link');
              _context28.next = 8;
              return _ADSBYPASSER_NAMESPACE__._.wait(9000);
            case 8:
              _context28.next = 10;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 10:
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
    host: /^www\.dlink3\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee29() {
      var a;
      return _regenerator["default"].wrap(function _callee29$(_context29) {
        while (1) {
          switch (_context29.prev = _context29.next) {
            case 0:
              _context29.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(12000);
            case 2:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('[class="myButton"]');
              _context29.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 5:
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
    host: /^dlupload\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee30() {
      var b, btn;
      return _regenerator["default"].wrap(function _callee30$(_context30) {
        while (1) {
          switch (_context30.prev = _context30.next) {
            case 0:
              _context30.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(3500);
            case 2:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn-block.btn-primary.text-white.shadow.m-1.position-relative.up-tooltip-container');
              b.click();
              _context30.next = 6;
              return _ADSBYPASSER_NAMESPACE__._.wait(6000);
            case 6:
              btn = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn-block.continue-btn-bg');
              btn.click();
            case 8:
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
    host: /^earnlink\.io$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee31() {
      var directUrl;
      return _regenerator["default"].wrap(function _callee31$(_context31) {
        while (1) {
          switch (_context31.prev = _context31.next) {
            case 0:
              directUrl = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/"([^"]+)"\)\.html\("Continue"\)/);
              _context31.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(directUrl[1]);
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
    host: /^forex-trnd\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee32() {
      var a;
      return _regenerator["default"].wrap(function _callee32$(_context32) {
        while (1) {
          switch (_context32.prev = _context32.next) {
            case 0:
              _context32.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(10000);
            case 2:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.get-link');
              a.click();
            case 4:
            case "end":
              return _context32.stop();
          }
        }
      }, _callee32);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^exeo\.app$/, /^exe-links\.com$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee33() {
      var a, b, c;
      return _regenerator["default"].wrap(function _callee33$(_context33) {
        while (1) {
          switch (_context33.prev = _context33.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.link-button.button');
              a.click();
              _context33.next = 4;
              return _ADSBYPASSER_NAMESPACE__._.wait(2000);
            case 4:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('.link-button');
              b.click();
              _context33.next = 8;
              return _ADSBYPASSER_NAMESPACE__._.wait(6000);
            case 8:
              c = (0, _ADSBYPASSER_NAMESPACE__.$)('.link-button.get-link');
              c.click();
            case 10:
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
    host: /^fc-lc\.(com|xyz)$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee34() {
      var b;
      return _regenerator["default"].wrap(function _callee34$(_context34) {
        while (1) {
          switch (_context34.prev = _context34.next) {
            case 0:
              _context34.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(2000);
            case 2:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn-primary.btn-captcha.mb-4');
              b.click();
            case 4:
            case "end":
              return _context34.stop();
          }
        }
      }, _callee34);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^loaninsurehub\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee35() {
      var b, a;
      return _regenerator["default"].wrap(function _callee35$(_context35) {
        while (1) {
          switch (_context35.prev = _context35.next) {
            case 0:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('#glink');
              if (b) {
                b.click();
              }
              _context35.next = 4;
              return _ADSBYPASSER_NAMESPACE__._.wait(12000);
            case 4:
              _ADSBYPASSER_NAMESPACE__.$.remove('#overlay');
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#surl');
              if (a) {
                a.click();
              }
            case 7:
            case "end":
              return _context35.stop();
          }
        }
      }, _callee35);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^fir3\.net$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee36() {
      var b;
      return _regenerator["default"].wrap(function _callee36$(_context36) {
        while (1) {
          switch (_context36.prev = _context36.next) {
            case 0:
              _context36.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(12000);
            case 2:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn.btn-success.btn-lg.get-link');
              b.click();
            case 4:
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
    host: /^get-click2\.blogspot\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee37() {
      var clbt;
      return _regenerator["default"].wrap(function _callee37$(_context37) {
        while (1) {
          switch (_context37.prev = _context37.next) {
            case 0:
              clbt = (0, _ADSBYPASSER_NAMESPACE__.$)('button#gotolink');
              clbt.removeAttribute('disabled');
              _context37.next = 4;
              return _ADSBYPASSER_NAMESPACE__._.wait(1);
            case 4:
              clbt.click();
            case 5:
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
    host: /^getthot\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee38() {
      var a;
      return _regenerator["default"].wrap(function _callee38$(_context38) {
        while (1) {
          switch (_context38.prev = _context38.next) {
            case 0:
              _context38.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(12000);
            case 2:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.skip-btn');
              _context38.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 5:
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
    host: /^gplinks\.co$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee39() {
      var d;
      return _regenerator["default"].wrap(function _callee39$(_context39) {
        while (1) {
          switch (_context39.prev = _context39.next) {
            case 0:
              _context39.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(8000);
            case 2:
              d = (0, _ADSBYPASSER_NAMESPACE__.$)('.get-link');
              d.click();
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
  rule: {
    host: /^hen-tay\.net$/,
    path: /^\/go\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee40() {
      var h;
      return _regenerator["default"].wrap(function _callee40$(_context40) {
        while (1) {
          switch (_context40.prev = _context40.next) {
            case 0:
              h = (0, _ADSBYPASSER_NAMESPACE__.$)('#download_url div a');
              _context40.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(h.href);
            case 3:
            case "end":
              return _context40.stop();
          }
        }
      }, _callee40);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^hotshorturl\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee41() {
      var frame;
      return _regenerator["default"].wrap(function _callee41$(_context41) {
        while (1) {
          switch (_context41.prev = _context41.next) {
            case 0:
              frame = (0, _ADSBYPASSER_NAMESPACE__.$)('frame[scrolling=yes]');
              _context41.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(frame.src);
            case 3:
            case "end":
              return _context41.stop();
          }
        }
      }, _callee41);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^icutlink\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee42() {
      var a;
      return _regenerator["default"].wrap(function _callee42$(_context42) {
        while (1) {
          switch (_context42.prev = _context42.next) {
            case 0:
              _context42.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(10000);
            case 2:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn-success.btn-lg.get-link');
              _context42.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a);
            case 5:
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
    host: /^zegtrends\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee43() {
      var b;
      return _regenerator["default"].wrap(function _callee43$(_context43) {
        while (1) {
          switch (_context43.prev = _context43.next) {
            case 0:
              _context43.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(12000);
            case 2:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('div > button.bsub');
              b.click();
            case 4:
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
    host: /^imagetwist\.netlify\.app$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee44() {
      var a;
      return _regenerator["default"].wrap(function _callee44$(_context44) {
        while (1) {
          switch (_context44.prev = _context44.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn.btn-dark');
              _context44.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
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
    host: /^www\.javlibrary\.com$/,
    query: /url=([^&]+)/
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee45() {
      return _regenerator["default"].wrap(function _callee45$(_context45) {
        while (1) {
          switch (_context45.prev = _context45.next) {
            case 0:
              _context45.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(decodeURIComponent(m.query[1]));
            case 2:
            case "end":
              return _context45.stop();
          }
        }
      }, _callee45);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^kimochi\.info$/,
    path: /^\/inter$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee46() {
      var ma;
      return _regenerator["default"].wrap(function _callee46$(_context46) {
        while (1) {
          switch (_context46.prev = _context46.next) {
            case 0:
              ma = (0, _ADSBYPASSER_NAMESPACE__.$)('a#next');
              _context46.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(ma.href);
            case 3:
            case "end":
              return _context46.stop();
          }
        }
      }, _callee46);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?kingofshrink\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee47() {
      var l;
      return _regenerator["default"].wrap(function _callee47$(_context47) {
        while (1) {
          switch (_context47.prev = _context47.next) {
            case 0:
              l = (0, _ADSBYPASSER_NAMESPACE__.$)('#textresult > a');
              _context47.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l.href);
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
    host: /^linegee\.net$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee48() {
      var b;
      return _regenerator["default"].wrap(function _callee48$(_context48) {
        while (1) {
          switch (_context48.prev = _context48.next) {
            case 0:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('p.kecil a');
              b.click();
            case 2:
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
    host: /^link\.turkdown\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee49() {
      var a;
      return _regenerator["default"].wrap(function _callee49$(_context49) {
        while (1) {
          switch (_context49.prev = _context49.next) {
            case 0:
              _context49.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(5000);
            case 2:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn-success.btn-lg.get-link');
              _context49.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
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
    host: /^link1s\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee50() {
      var b;
      return _regenerator["default"].wrap(function _callee50$(_context50) {
        while (1) {
          switch (_context50.prev = _context50.next) {
            case 0:
              _context50.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(10000);
            case 2:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn.btn-success.btn-lg.get-link');
              b.click();
            case 4:
            case "end":
              return _context50.stop();
          }
        }
      }, _callee50);
    }))();
  }
});
(function () {
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: [
      /^adsafelink\.com$/, /^birdurls\.com$/, /^dz4link\.com$/, /^(linkmoni|shrinkcash)\.com$/, /^shrt10\.com$/,
      /^tmearn\.net$/, /^vinaurl\.net$/,
      /^payskip\.org$/,
      /^clik\.pw$/, /^miniurl\.pw$/,
      /^aylink\.co$/, /^(clk|oko)\.sh$/, /^cpmlink\.pro$/, /^gitlink\.pro$/, /^megalink\.pro$/, /^met\.bz/, /^mitly\.us$/, /^oke\.io$/, /^pahe\.plus$/, /^pingit\.im$/, /^thotpacks\.xyz$/]
    },
    ready: function ready() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee51() {
        var handler;
        return _regenerator["default"].wrap(function _callee51$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                handler = new RecaptchaHandler();
                _context51.next = 3;
                return handler.call();
              case 3:
              case "end":
                return _context51.stop();
            }
          }
        }, _callee51);
      }))();
    }
  });
  var AbstractHandler = function () {
    function AbstractHandler() {
      (0, _classCallCheck2["default"])(this, AbstractHandler);
      this._overlaySelector = ['[class$="Overlay"]', '#__random_class_name__', '#headlineatas', '#myModal', '.opacity_wrapper', '#overlay'].join(', ');
      this._formSelector = ['#go-link', '.go-link', '#originalLink.get-link', 'form[action="/links/go"]'].join(', ');
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
        var _call = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee52() {
          var ok, mw, url;
          return _regenerator["default"].wrap(function _callee52$(_context52) {
            while (1) {
              switch (_context52.prev = _context52.next) {
                case 0:
                  _context52.next = 2;
                  return this.prepare();
                case 2:
                  ok = _context52.sent;
                  if (ok) {
                    _context52.next = 5;
                    break;
                  }
                  return _context52.abrupt("return");
                case 5:
                  _context52.next = 7;
                  return this.getMiddleware();
                case 7:
                  mw = _context52.sent;
                  if (mw) {
                    _context52.next = 11;
                    break;
                  }
                  this.withoutMiddleware();
                  return _context52.abrupt("return");
                case 11:
                  _context52.next = 13;
                  return this.getURL(mw);
                case 13:
                  url = _context52.sent;
                  _context52.next = 16;
                  return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
                case 16:
                case "end":
                  return _context52.stop();
              }
            }
          }, _callee52, this);
        }));
        function call() {
          return _call.apply(this, arguments);
        }
        return call;
      }()
    }]);
    return AbstractHandler;
  }();
  var RecaptchaHandler = function (_AbstractHandler) {
    (0, _inherits2["default"])(RecaptchaHandler, _AbstractHandler);
    var _super = _createSuper(RecaptchaHandler);
    function RecaptchaHandler() {
      (0, _classCallCheck2["default"])(this, RecaptchaHandler);
      return _super.apply(this, arguments);
    }
    (0, _createClass2["default"])(RecaptchaHandler, [{
      key: "prepare",
      value: function () {
        var _prepare = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee53() {
          var f, b;
          return _regenerator["default"].wrap(function _callee53$(_context53) {
            while (1) {
              switch (_context53.prev = _context53.next) {
                case 0:
                  this.removeOverlay();
                  f = _ADSBYPASSER_NAMESPACE__.$.$('#captchaShortlink, div.g-recaptcha');
                  if (f) {
                    _context53.next = 4;
                    break;
                  }
                  return _context53.abrupt("return", true);
                case 4:
                  _ADSBYPASSER_NAMESPACE__._.info('recaptcha detected, stop');
                  _ADSBYPASSER_NAMESPACE__._.info('trying to listen submit button');
                  b = _ADSBYPASSER_NAMESPACE__.$.$('#invisibleCaptchaShortlink');
                  if (b) {
                    _context53.next = 9;
                    break;
                  }
                  return _context53.abrupt("return", false);
                case 9:
                case "end":
                  return _context53.stop();
              }
            }
          }, _callee53, this);
        }));
        function prepare() {
          return _prepare.apply(this, arguments);
        }
        return prepare;
      }()
    }, {
      key: "submitListen",
      value: function () {
        var _submitListen = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee54(b) {
          var o;
          return _regenerator["default"].wrap(function _callee54$(_context54) {
            while (1) {
              switch (_context54.prev = _context54.next) {
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
                  return _context54.stop();
              }
            }
          }, _callee54);
        }));
        function submitListen(_x) {
          return _submitListen.apply(this, arguments);
        }
        return submitListen;
      }()
    }, {
      key: "getMiddleware",
      value: function () {
        var _getMiddleware = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee55() {
          return _regenerator["default"].wrap(function _callee55$(_context55) {
            while (1) {
              switch (_context55.prev = _context55.next) {
                case 0:
                  _context55.next = 2;
                  return getJQueryForm(this._formSelector);
                case 2:
                  return _context55.abrupt("return", _context55.sent);
                case 3:
                case "end":
                  return _context55.stop();
              }
            }
          }, _callee55, this);
        }));
        function getMiddleware() {
          return _getMiddleware.apply(this, arguments);
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
        var _getURL = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee56(jForm) {
          var url;
          return _regenerator["default"].wrap(function _callee56$(_context56) {
            while (1) {
              switch (_context56.prev = _context56.next) {
                case 0:
                  if (false) {}
                  _context56.next = 3;
                  return _ADSBYPASSER_NAMESPACE__._.wait(1000);
                case 3:
                  _context56.prev = 3;
                  _context56.next = 6;
                  return getURLFromJQueryForm(jForm);
                case 6:
                  url = _context56.sent;
                  if (!url) {
                    _context56.next = 9;
                    break;
                  }
                  return _context56.abrupt("return", url);
                case 9:
                  _context56.next = 14;
                  break;
                case 11:
                  _context56.prev = 11;
                  _context56.t0 = _context56["catch"](3);
                  _ADSBYPASSER_NAMESPACE__._.warn(_context56.t0);
                case 14:
                  _context56.next = 0;
                  break;
                case 16:
                case "end":
                  return _context56.stop();
              }
            }
          }, _callee56, null, [[3, 11]]);
        }));
        function getURL(_x2) {
          return _getURL.apply(this, arguments);
        }
        return getURL;
      }()
    }]);
    return RecaptchaHandler;
  }(AbstractHandler);
  function getJQueryForm(_x3) {
    return _getJQueryForm.apply(this, arguments);
  }
  function _getJQueryForm() {
    _getJQueryForm = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee57(selector) {
      var jQuery, f;
      return _regenerator["default"].wrap(function _callee57$(_context57) {
        while (1) {
          switch (_context57.prev = _context57.next) {
            case 0:
              jQuery = _ADSBYPASSER_NAMESPACE__.$.window.$;
            case 1:
              if (jQuery) {
                _context57.next = 7;
                break;
              }
              _context57.next = 4;
              return _ADSBYPASSER_NAMESPACE__._.wait(50);
            case 4:
              jQuery = _ADSBYPASSER_NAMESPACE__.$.window.$;
              _context57.next = 1;
              break;
            case 7:
              f = jQuery(selector);
              if (!(f.length > 0)) {
                _context57.next = 10;
                break;
              }
              return _context57.abrupt("return", f);
            case 10:
              return _context57.abrupt("return", null);
            case 11:
            case "end":
              return _context57.stop();
          }
        }
      }, _callee57);
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
    host: /^n\.fcd\.su$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee58() {
      var btn;
      return _regenerator["default"].wrap(function _callee58$(_context58) {
        while (1) {
          switch (_context58.prev = _context58.next) {
            case 0:
              btn = (0, _ADSBYPASSER_NAMESPACE__.$)('a.btn:nth-child(2)');
              _context58.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(btn.href);
            case 3:
            case "end":
              return _context58.stop();
          }
        }
      }, _callee58);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^linkpoi\.me$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee59() {
      var b;
      return _regenerator["default"].wrap(function _callee59$(_context59) {
        while (1) {
          switch (_context59.prev = _context59.next) {
            case 0:
              _context59.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(6000);
            case 2:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn.btn-primary.btn-block.redirect.get-link');
              b.click();
            case 4:
            case "end":
              return _context59.stop();
          }
        }
      }, _callee59);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^linkshrink\.net$/,
    path: /^\/[a-zA-Z0-9]+$/
  },
  start: function start() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee60() {
      return _regenerator["default"].wrap(function _callee60$(_context60) {
        while (1) {
          switch (_context60.prev = _context60.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.window._impspcabe = 0;
            case 1:
            case "end":
              return _context60.stop();
          }
        }
      }, _callee60);
    }))();
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee61() {
      var l;
      return _regenerator["default"].wrap(function _callee61$(_context61) {
        while (1) {
          switch (_context61.prev = _context61.next) {
            case 0:
              l = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/revC\("([^"]+)"\)/);
              l = atob(l[1]);
              _context61.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('/' + l);
            case 4:
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
    host: /^linksly\.co$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee62() {
      var b;
      return _regenerator["default"].wrap(function _callee62$(_context62) {
        while (1) {
          switch (_context62.prev = _context62.next) {
            case 0:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn-primary');
              b.click();
            case 2:
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
    host: [/^go\.linksly\.co$/, /^go\.bitcosite\.com$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee63() {
      var a;
      return _regenerator["default"].wrap(function _callee63$(_context63) {
        while (1) {
          switch (_context63.prev = _context63.next) {
            case 0:
              _context63.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(8000);
            case 2:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn-success.btn-lg.get-link');
              _context63.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 5:
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
    host: /^lnk2\.cc$/,
    path: /^\/go\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee64() {
      var b;
      return _regenerator["default"].wrap(function _callee64$(_context64) {
        while (1) {
          switch (_context64.prev = _context64.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe, .popupOverlay');
              _context64.next = 3;
              return _ADSBYPASSER_NAMESPACE__._.wait(18000);
            case 3:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('#getLink');
              b.click();
            case 5:
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
    host: /^www\.lolinez\.com$/,
    query: /\?(.+)/
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee65() {
      return _regenerator["default"].wrap(function _callee65$(_context65) {
        while (1) {
          switch (_context65.prev = _context65.next) {
            case 0:
              _context65.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m.query[1]);
            case 2:
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
    host: /^mangalist\.org$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee66() {
      var b;
      return _regenerator["default"].wrap(function _callee66$(_context66) {
        while (1) {
          switch (_context66.prev = _context66.next) {
            case 0:
              _context66.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(1000);
            case 2:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn-primary.url.text-center');
              b.click();
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
    host: /^nmac\.to$/,
    path: /^\/dl\/(.+)/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee67() {
      var a;
      return _regenerator["default"].wrap(function _callee67$(_context67) {
        while (1) {
          switch (_context67.prev = _context67.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn-medium.btn-block');
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
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^noweconomy\.live$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee68() {
      var a;
      return _regenerator["default"].wrap(function _callee68$(_context68) {
        while (1) {
          switch (_context68.prev = _context68.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('[class="btn-main get-link"]');
              _context68.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
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
    host: /^www\.oni\.vn$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee69() {
      var data, url;
      return _regenerator["default"].wrap(function _callee69$(_context69) {
        while (1) {
          switch (_context69.prev = _context69.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
              data = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/data:"([^"]+)"/);
              if (data) {
                _context69.next = 4;
                break;
              }
              throw new _ADSBYPASSER_NAMESPACE__._.AdsBypasserError('pattern changed');
            case 4:
              data = data[1];
              _context69.next = 7;
              return _ADSBYPASSER_NAMESPACE__.$.get('/click.html', data);
            case 7:
              url = _context69.sent;
              _context69.next = 10;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(url);
            case 10:
            case "end":
              return _context69.stop();
          }
        }
      }, _callee69);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^otomi-games\.com$/,
    path: /^\/go\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee70() {
      var ma;
      return _regenerator["default"].wrap(function _callee70$(_context70) {
        while (1) {
          switch (_context70.prev = _context70.next) {
            case 0:
              ma = (0, _ADSBYPASSER_NAMESPACE__.$)('#wpsafe-link a');
              _context70.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(ma.href);
            case 3:
            case "end":
              return _context70.stop();
          }
        }
      }, _callee70);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?ouo\.(io|press)$/,
    path: /(^\/\w+$|^\/go\/\w+$)/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee71() {
      return _regenerator["default"].wrap(function _callee71$(_context71) {
        while (1) {
          switch (_context71.prev = _context71.next) {
            case 0:
              (0, _ADSBYPASSER_NAMESPACE__.$)('form').submit();
            case 1:
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
    host: /^icerik\.site$/,
    path: /^\/go/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee72() {
      var button;
      return _regenerator["default"].wrap(function _callee72$(_context72) {
        while (1) {
          switch (_context72.prev = _context72.next) {
            case 0:
              _context72.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(500);
            case 2:
              button = (0, _ADSBYPASSER_NAMESPACE__.$)('#get_link_btn');
              button.click();
            case 4:
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
    host: [/^realsht\.mobi$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee73() {
      var n;
      return _regenerator["default"].wrap(function _callee73$(_context73) {
        while (1) {
          switch (_context73.prev = _context73.next) {
            case 0:
              n = (0, _ADSBYPASSER_NAMESPACE__.$)('#download_link');
              n.click();
            case 2:
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
    host: /^preview\.rlu\.ru$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee74() {
      var a;
      return _regenerator["default"].wrap(function _callee74$(_context74) {
        while (1) {
          switch (_context74.prev = _context74.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#content > .long_url > a');
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
    host: /^www\.ryuugames\.com$/,
    query: /^\?eroge=/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee75() {
      var ma;
      return _regenerator["default"].wrap(function _callee75$(_context75) {
        while (1) {
          switch (_context75.prev = _context75.next) {
            case 0:
              ma = (0, _ADSBYPASSER_NAMESPACE__.$)('#wpsafe-link a');
              _context75.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(ma.href);
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
    host: /^segmentnext\.com$/,
    path: /^\/interstitial\.html$/,
    query: /return_url=([^&]+)/
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee76() {
      return _regenerator["default"].wrap(function _callee76$(_context76) {
        while (1) {
          switch (_context76.prev = _context76.next) {
            case 0:
              _context76.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(decodeURIComponent(m.query[1]));
            case 2:
            case "end":
              return _context76.stop();
          }
        }
      }, _callee76);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(short|srt)\.am$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee77() {
      return _regenerator["default"].wrap(function _callee77$(_context77) {
        while (1) {
          switch (_context77.prev = _context77.next) {
            case 0:
              _context77.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(5000);
            case 2:
              _context77.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('', {
                post: {
                  _image: 'Continue'
                }
              });
            case 4:
            case "end":
              return _context77.stop();
          }
        }
      }, _callee77);
    }))();
  }
});
(function () {
  var hostRules = [/^(cllkme|clkmein|corneey|ceesty)\.com$/, /^(destyy|festyy|gestyy)\.com$/,
  /^sh\.st$/];
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: hostRules,
      path: /^\/[\d\w]+/
    },
    ready: function ready() {
      return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee78() {
        var m, o;
        return _regenerator["default"].wrap(function _callee78$(_context78) {
          while (1) {
            switch (_context78.prev = _context78.next) {
              case 0:
                _ADSBYPASSER_NAMESPACE__.$.remove('iframe');
                _ADSBYPASSER_NAMESPACE__.$.removeAllTimer();
                m = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/sessionId: "([\d\w]+)",/);
                if (!m) {
                  _context78.next = 6;
                  break;
                }
                afterGotSessionId(m[1]);
                return _context78.abrupt("return");
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
                return _context78.stop();
            }
          }
        }, _callee78);
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
    host: [/^shortlinkto\.biz$/, /^uplinkto\.hair$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee79() {
      var a;
      return _regenerator["default"].wrap(function _callee79$(_context79) {
        while (1) {
          switch (_context79.prev = _context79.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.view-well a');
              _context79.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
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
    host: /^shortmoz\.link$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee80() {
      var button;
      return _regenerator["default"].wrap(function _callee80$(_context80) {
        while (1) {
          switch (_context80.prev = _context80.next) {
            case 0:
              button = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn.btn-primary.btn-block');
              button.click();
            case 2:
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
    host: /^(www\.)?similarsites\.com$/,
    path: /^\/goto\/([^?]+)/
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee81() {
      var l;
      return _regenerator["default"].wrap(function _callee81$(_context81) {
        while (1) {
          switch (_context81.prev = _context81.next) {
            case 0:
              l = m.path[1];
              if (!/^https?:\/\//.test(l)) {
                l = 'http://' + l;
              }
              _context81.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(l);
            case 4:
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
    host: /^spacetica\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee82() {
      var b;
      return _regenerator["default"].wrap(function _callee82$(_context82) {
        while (1) {
          switch (_context82.prev = _context82.next) {
            case 0:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn.btn-primary.btn-xs');
              b.click();
            case 2:
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
    host: /^www\.spaste\.com$/,
    path: /^\/site\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee83() {
      return _regenerator["default"].wrap(function _callee83$(_context83) {
        while (1) {
          switch (_context83.prev = _context83.next) {
            case 0:
              _context83.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(15000);
            case 2:
              (0, _ADSBYPASSER_NAMESPACE__.$)('#template-contactform-submit').click();
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
    host: /^stfly\.(me|xyz)$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee84() {
      var b;
      return _regenerator["default"].wrap(function _callee84$(_context84) {
        while (1) {
          switch (_context84.prev = _context84.next) {
            case 0:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn-captcha.m-2.form-send');
              b.click();
            case 2:
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
    host: /^blogbux\.net$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee85() {
      var b;
      return _regenerator["default"].wrap(function _callee85$(_context85) {
        while (1) {
          switch (_context85.prev = _context85.next) {
            case 0:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn-captcha.m-2.form-send');
              _context85.next = 3;
              return _ADSBYPASSER_NAMESPACE__._.wait(12000);
            case 3:
              b.click();
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
    host: /^techtrendmakers\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee86() {
      var b;
      return _regenerator["default"].wrap(function _callee86$(_context86) {
        while (1) {
          switch (_context86.prev = _context86.next) {
            case 0:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn-captcha.m-2.form-send.step_btn');
              _context86.next = 3;
              return _ADSBYPASSER_NAMESPACE__._.wait(6000);
            case 3:
              b.click();
            case 4:
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
    host: /^(www\.)?supercheats\.com$/,
    path: /^\/interstitial\.html$/,
    query: /(?:\?|&)oldurl=([^&]+)(?:$|&)/
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee87() {
      return _regenerator["default"].wrap(function _callee87$(_context87) {
        while (1) {
          switch (_context87.prev = _context87.next) {
            case 0:
              _context87.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m.query[1]);
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
    host: /^swzz\.xyz$/,
    path: /^\/link\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee88() {
      var g;
      return _regenerator["default"].wrap(function _callee88$(_context88) {
        while (1) {
          switch (_context88.prev = _context88.next) {
            case 0:
              g = (0, _ADSBYPASSER_NAMESPACE__.$)('a.btn.btn-primary');
              _context88.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(g.href);
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
    host: /^techgeek\.digital$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee89() {
      var b, a;
      return _regenerator["default"].wrap(function _callee89$(_context89) {
        while (1) {
          switch (_context89.prev = _context89.next) {
            case 0:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('[class="btn-main get-link"]');
              if (b) {
                b.click();
              }
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a[class="btn-main get-link"]');
              if (!a) {
                _context89.next = 6;
                break;
              }
              _context89.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 6:
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
    host: /^techstudify\.com$/,
    path: /^\/elon.php/,
    query: /link=([^&]+)/
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee90() {
      return _regenerator["default"].wrap(function _callee90$(_context90) {
        while (1) {
          switch (_context90.prev = _context90.next) {
            case 0:
              _context90.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink('https://rplinks.in/' + m.query[1]);
            case 2:
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
    host: /^thinfi\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee91() {
      var a;
      return _regenerator["default"].wrap(function _callee91$(_context91) {
        while (1) {
          switch (_context91.prev = _context91.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('div p a');
              _context91.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 3:
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
    host: /^go\.tnshort\.net$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee92() {
      var a;
      return _regenerator["default"].wrap(function _callee92$(_context92) {
        while (1) {
          switch (_context92.prev = _context92.next) {
            case 0:
              _context92.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(3000);
            case 2:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a[class="btn btn-success btn-lg get-link"]');
              _context92.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 5:
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
    host: /^tribuntekno\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee93() {
      var b, c;
      return _regenerator["default"].wrap(function _callee93$(_context93) {
        while (1) {
          switch (_context93.prev = _context93.next) {
            case 0:
              b = _ADSBYPASSER_NAMESPACE__.$.$('#lite-human-verif-button');
              if (b) {
                b.click();
              }
              c = _ADSBYPASSER_NAMESPACE__.$.$('#lite-start-sora-button');
              if (c) {
                c.click();
              }
            case 4:
            case "end":
              return _context93.stop();
          }
        }
      }, _callee93);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^tutwuri\.id$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee94() {
      var a, b, c;
      return _regenerator["default"].wrap(function _callee94$(_context94) {
        while (1) {
          switch (_context94.prev = _context94.next) {
            case 0:
              _context94.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(1000);
            case 2:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('#btn-1');
              a.click();
              _context94.next = 6;
              return _ADSBYPASSER_NAMESPACE__._.wait(12000);
            case 6:
              b = (0, _ADSBYPASSER_NAMESPACE__.$)('#btn-2');
              b.click();
              c = (0, _ADSBYPASSER_NAMESPACE__.$)('#btn-3');
              c.click();
            case 10:
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
    host: /^urlbluemedia\.shop$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee95() {
      var a;
      return _regenerator["default"].wrap(function _callee95$(_context95) {
        while (1) {
          switch (_context95.prev = _context95.next) {
            case 0:
              _context95.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(7000);
            case 2:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('input#nut');
              a.click();
            case 4:
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
    host: [/(^|\.)urlcash\.(com|org)$/, /^(detonating|smilinglinks|pornyhost|urlgalleries)\.com$/, /^looble\.net$/, /^xxxs\.org$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee96() {
      var matches;
      return _regenerator["default"].wrap(function _callee96$(_context96) {
        while (1) {
          switch (_context96.prev = _context96.next) {
            case 0:
              if (!(_ADSBYPASSER_NAMESPACE__.$.window && _ADSBYPASSER_NAMESPACE__.$.window.linkDestUrl)) {
                _context96.next = 4;
                break;
              }
              _context96.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(_ADSBYPASSER_NAMESPACE__.$.window.linkDestUrl);
            case 3:
              return _context96.abrupt("return");
            case 4:
              matches = document.body.innerHTML.match(/linkDestUrl = '(.+)'/);
              if (!matches) {
                _context96.next = 9;
                break;
              }
              _context96.next = 8;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(matches[1]);
            case 8:
              return _context96.abrupt("return");
            case 9:
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
    host: /^(www\.)?vzturl\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee97() {
      var frame;
      return _regenerator["default"].wrap(function _callee97$(_context97) {
        while (1) {
          switch (_context97.prev = _context97.next) {
            case 0:
              frame = (0, _ADSBYPASSER_NAMESPACE__.$)('frame[scrolling=yes]');
              _context97.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(frame.src);
            case 3:
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
    host: /^xpshort\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee98() {
      var a;
      return _regenerator["default"].wrap(function _callee98$(_context98) {
        while (1) {
          switch (_context98.prev = _context98.next) {
            case 0:
              _context98.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(8000);
            case 2:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.btn-success.btn-lg.get-link');
              a.click();
            case 4:
            case "end":
              return _context98.stop();
          }
        }
      }, _callee98);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^22pixx\.xyz$/,
    path: /^\/ia-[aio]\/(.+)\.jpeg\.html/
  },
  start: function start() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee99() {
      var path;
      return _regenerator["default"].wrap(function _callee99$(_context99) {
        while (1) {
          switch (_context99.prev = _context99.next) {
            case 0:
              path = window.location.href.replace('/ia-', '/').replace('.html', '');
              _context99.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(path);
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
    host: /^22pixx\.xyz$/,
    path: /^\/ib-[aior]\/(.+)\.jpeg\.html/
  },
  start: function start() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee100() {
      var path;
      return _regenerator["default"].wrap(function _callee100$(_context100) {
        while (1) {
          switch (_context100.prev = _context100.next) {
            case 0:
              path = window.location.href.replace('/ib-', '/').replace('.html', '');
              _context100.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(path);
            case 3:
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
    host: /^22pixx\.xyz$/,
    path: /^\/i-[ai1]\/(.+)\.jpeg\.html/
  },
  start: function start() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee101() {
      var path;
      return _regenerator["default"].wrap(function _callee101$(_context101) {
        while (1) {
          switch (_context101.prev = _context101.next) {
            case 0:
              path = window.location.href.replace('/i-', '/').replace('.html', '');
              _context101.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(path);
            case 3:
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
    host: /^22pixx\.xyz$/,
    path: /^\/x-[aor]\/(.+)\.jpeg\.html/
  },
  start: function start() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee102() {
      var path;
      return _regenerator["default"].wrap(function _callee102$(_context102) {
        while (1) {
          switch (_context102.prev = _context102.next) {
            case 0:
              path = window.location.href.replace('/x-', '/').replace('.html', '');
              _context102.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(path);
            case 3:
            case "end":
              return _context102.stop();
          }
        }
      }, _callee102);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^22pixx\.xyz$/,
    path: /^\/y-[ao1]\/(.+)\.jpeg\.html/
  },
  start: function start() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee103() {
      var path;
      return _regenerator["default"].wrap(function _callee103$(_context103) {
        while (1) {
          switch (_context103.prev = _context103.next) {
            case 0:
              path = window.location.href.replace('/y-', '/').replace('.html', '');
              _context103.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(path);
            case 3:
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
    host: /^22pixx\.xyz$/,
    path: /^\/x-i\/(.+)\.jpeg\.html/
  },
  start: function start() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee104() {
      var path;
      return _regenerator["default"].wrap(function _callee104$(_context104) {
        while (1) {
          switch (_context104.prev = _context104.next) {
            case 0:
              path = window.location.href.replace('/x', '/y');
              _context104.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(path);
            case 3:
            case "end":
              return _context104.stop();
          }
        }
      }, _callee104);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^acidimg\.cc$/, /^imx\.to$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee105() {
      var a;
      return _regenerator["default"].wrap(function _callee105$(_context105) {
        while (1) {
          switch (_context105.prev = _context105.next) {
            case 0:
              a = _ADSBYPASSER_NAMESPACE__.$.$('#continuebutton, .button');
              if (a) {
                a.click();
              } else {
                a = _ADSBYPASSER_NAMESPACE__.$.$('#imgContinue, .button');
                if (a) {
                  a.click();
                }
              }
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.centred');
              _context105.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(a.src);
            case 5:
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
    host: /^bayimg\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee106() {
      var i;
      return _regenerator["default"].wrap(function _callee106$(_context106) {
        while (1) {
          switch (_context106.prev = _context106.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('#mainImage');
              _context106.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(i.src);
            case 3:
            case "end":
              return _context106.stop();
          }
        }
      }, _callee106);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^beeimg\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee107() {
      var img;
      return _regenerator["default"].wrap(function _callee107$(_context107) {
        while (1) {
          switch (_context107.prev = _context107.next) {
            case 0:
              img = (0, _ADSBYPASSER_NAMESPACE__.$)('#beeimage');
              _context107.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(img.src);
            case 3:
            case "end":
              return _context107.stop();
          }
        }
      }, _callee107);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.casimages\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee108() {
      var img;
      return _regenerator["default"].wrap(function _callee108$(_context108) {
        while (1) {
          switch (_context108.prev = _context108.next) {
            case 0:
              img = (0, _ADSBYPASSER_NAMESPACE__.$)('div.logo a img');
              _context108.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(img.src);
            case 3:
            case "end":
              return _context108.stop();
          }
        }
      }, _callee108);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^cubeupload\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee109() {
      var img;
      return _regenerator["default"].wrap(function _callee109$(_context109) {
        while (1) {
          switch (_context109.prev = _context109.next) {
            case 0:
              img = (0, _ADSBYPASSER_NAMESPACE__.$)('img.galleryBigImg');
              _context109.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(img.src);
            case 3:
            case "end":
              return _context109.stop();
          }
        }
      }, _callee109);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(depic|dpic)\.me$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee110() {
      var i;
      return _regenerator["default"].wrap(function _callee110$(_context110) {
        while (1) {
          switch (_context110.prev = _context110.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('#pic');
              _context110.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(i.src);
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
    host: /^www\.directupload\.eu$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee111() {
      var i;
      return _regenerator["default"].wrap(function _callee111$(_context111) {
        while (1) {
          switch (_context111.prev = _context111.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('meta[property="og:image"]');
              _context111.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(i.content);
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
    host: /^fastpic\.org$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee112() {
      var a;
      return _regenerator["default"].wrap(function _callee112$(_context112) {
        while (1) {
          switch (_context112.prev = _context112.next) {
            case 0:
              a = _ADSBYPASSER_NAMESPACE__.$.$('#imglink');
              if (!a) {
                _context112.next = 5;
                break;
              }
              _context112.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 4:
              return _context112.abrupt("return");
            case 5:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.image');
              _context112.next = 8;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(a.src);
            case 8:
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
    host: /^www\.fotosik\.pl$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee113() {
      var i;
      return _regenerator["default"].wrap(function _callee113$(_context113) {
        while (1) {
          switch (_context113.prev = _context113.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('.simple-photo img');
              _context113.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(i.src);
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
    host: /^www\.hostpic\.org$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee114() {
      var i;
      return _regenerator["default"].wrap(function _callee114$(_context114) {
        while (1) {
          switch (_context114.prev = _context114.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('#photo');
              _context114.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(i.src);
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
    host: /^www\.imagebam\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee115() {
      var a;
      return _regenerator["default"].wrap(function _callee115$(_context115) {
        while (1) {
          switch (_context115.prev = _context115.next) {
            case 0:
              a = _ADSBYPASSER_NAMESPACE__.$.$('#continue > a');
              if (a) {
                a.click();
              }
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.main-image');
              _context115.next = 5;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(a.src);
            case 5:
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
    host: /^imageban\.ru$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee116() {
      var i;
      return _regenerator["default"].wrap(function _callee116$(_context116) {
        while (1) {
          switch (_context116.prev = _context116.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('#img_main');
              _context116.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(i.src);
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
    host: /^imagehaha\.com$/,
    path: /\/*\/.*/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee117() {
      var img;
      return _regenerator["default"].wrap(function _callee117$(_context117) {
        while (1) {
          switch (_context117.prev = _context117.next) {
            case 0:
              img = (0, _ADSBYPASSER_NAMESPACE__.$)('img.img-responsive');
              _context117.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(img.src);
            case 3:
            case "end":
              return _context117.stop();
          }
        }
      }, _callee117);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: 'https://www.imagehost.at/image/*',
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee118() {
      var i;
      return _regenerator["default"].wrap(function _callee118$(_context118) {
        while (1) {
          switch (_context118.prev = _context118.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('meta[property="og:image"]');
              _context118.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(i.content);
            case 3:
            case "end":
              return _context118.stop();
          }
        }
      }, _callee118);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.imagenetz\.de$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee119() {
      var img;
      return _regenerator["default"].wrap(function _callee119$(_context119) {
        while (1) {
          switch (_context119.prev = _context119.next) {
            case 0:
              img = (0, _ADSBYPASSER_NAMESPACE__.$)('.img-rounded.img-responsive');
              _context119.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(img.src);
            case 3:
            case "end":
              return _context119.stop();
          }
        }
      }, _callee119);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^imageshack\.com$/,
    path: /^\/i\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee120() {
      var i;
      return _regenerator["default"].wrap(function _callee120$(_context120) {
        while (1) {
          switch (_context120.prev = _context120.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('#lp-image');
              _context120.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(i.src);
            case 3:
            case "end":
              return _context120.stop();
          }
        }
      }, _callee120);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^imagetwist\.com$/, /^imagenpic\.com$/, /^imagexport\.com$/, /^imageshimage\.com$/, /^croea\.com$/, /^vipr\.im$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee121() {
      var i;
      return _regenerator["default"].wrap(function _callee121$(_context121) {
        while (1) {
          switch (_context121.prev = _context121.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('img.pic');
              if (!(window.location.host === 'vipr.im')) {
                _context121.next = 6;
                break;
              }
              _context121.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(i.src, {
                replace: true
              });
            case 4:
              _context121.next = 8;
              break;
            case 6:
              _context121.next = 8;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(i.src);
            case 8:
            case "end":
              return _context121.stop();
          }
        }
      }, _callee121);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^imageup\.ru$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee122() {
      var i;
      return _regenerator["default"].wrap(function _callee122$(_context122) {
        while (1) {
          switch (_context122.prev = _context122.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('#image');
              _context122.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(i.src);
            case 3:
            case "end":
              return _context122.stop();
          }
        }
      }, _callee122);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^imageupper\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee123() {
      var i;
      return _regenerator["default"].wrap(function _callee123$(_context123) {
        while (1) {
          switch (_context123.prev = _context123.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('#img');
              _context123.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(i.src);
            case 3:
            case "end":
              return _context123.stop();
          }
        }
      }, _callee123);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.imagevenue\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee124() {
      var i;
      return _regenerator["default"].wrap(function _callee124$(_context124) {
        while (1) {
          switch (_context124.prev = _context124.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('#main-image');
              _context124.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(i.src);
            case 3:
            case "end":
              return _context124.stop();
          }
        }
      }, _callee124);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^cloudgallery\.net$/, /^imgair\.net$/, /^imgblaze\.net$/, /^imgfrost\.net$/, /^img[a-z]{2,10}\.(sbs|shop)$/, /^pic[a-z]{2,10}\.(sbs|shop)$/, /^pix[a-z]{2,10}\.sbs$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee125() {
      var matches;
      return _regenerator["default"].wrap(function _callee125$(_context125) {
        while (1) {
          switch (_context125.prev = _context125.next) {
            case 0:
              matches = _ADSBYPASSER_NAMESPACE__.$.searchFromScripts(/imgbg\.src = "([^"]+)";/);
              _context125.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(matches[1]);
            case 3:
            case "end":
              return _context125.stop();
          }
        }
      }, _callee125);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^imgbaron\.com$/, /^imgsto\.com$/, /^silverpic\.com$/, /^www\.fappic\.com$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee126() {
      var i, f;
      return _regenerator["default"].wrap(function _callee126$(_context126) {
        while (1) {
          switch (_context126.prev = _context126.next) {
            case 0:
              i = _ADSBYPASSER_NAMESPACE__.$.$('img.pic');
              if (!i) {
                _context126.next = 5;
                break;
              }
              _context126.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(i.src);
            case 4:
              return _context126.abrupt("return");
            case 5:
              f = (0, _ADSBYPASSER_NAMESPACE__.$)('form');
              f.submit();
            case 7:
            case "end":
              return _context126.stop();
          }
        }
      }, _callee126);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^(imgbase|picforall)\.ru$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee127() {
      var i;
      return _regenerator["default"].wrap(function _callee127$(_context127) {
        while (1) {
          switch (_context127.prev = _context127.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('#pay_thumb_img img, #d1 table tbody tr td img');
              i = i.getAttribute('onclick');
              i = i.match(/mshow\('(.+)'\)/);
              i = i[1];
              _context127.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(i);
            case 6:
            case "end":
              return _context127.stop();
          }
        }
      }, _callee127);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^imgbb\.com$/, /^ibb\.co$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee128() {
      var img;
      return _regenerator["default"].wrap(function _callee128$(_context128) {
        while (1) {
          switch (_context128.prev = _context128.next) {
            case 0:
              img = (0, _ADSBYPASSER_NAMESPACE__.$)('.image-viewer-container img');
              _context128.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(img.src);
            case 3:
            case "end":
              return _context128.stop();
          }
        }
      }, _callee128);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^imgbox\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee129() {
      var i;
      return _regenerator["default"].wrap(function _callee129$(_context129) {
        while (1) {
          switch (_context129.prev = _context129.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('#img');
              _context129.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(i.src);
            case 3:
            case "end":
              return _context129.stop();
          }
        }
      }, _callee129);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^2i\.(cz|sk)$/, /^(picnew|rintor)\.space$/, /^[0-9]{1,3}xpics\.space$/, /^imgcloud\.pw$/, /^pilot007\.org$/, /^img\.javstore\.net$/, /^(lookmyimg|shotcan|teenyxo)\.com$/, /^www\.imghit\.com$/, /^xxxaddicted\.top$/],
    path: /^\/(image|i)\/.*/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee130() {
      var l;
      return _regenerator["default"].wrap(function _callee130$(_context130) {
        while (1) {
          switch (_context130.prev = _context130.next) {
            case 0:
              l = (0, _ADSBYPASSER_NAMESPACE__.$)('link[rel="image_src"]');
              _context130.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(l.href);
            case 3:
            case "end":
              return _context130.stop();
          }
        }
      }, _callee130);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^imgdawgknuttz\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee131() {
      var a;
      return _regenerator["default"].wrap(function _callee131$(_context131) {
        while (1) {
          switch (_context131.prev = _context131.next) {
            case 0:
              _context131.next = 2;
              return _ADSBYPASSER_NAMESPACE__._.wait(1000);
            case 2:
              a = _ADSBYPASSER_NAMESPACE__.$.$('.button');
              if (a) {
                a.click();
              }
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.centred');
              _context131.next = 7;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(a.src);
            case 7:
            case "end":
              return _context131.stop();
          }
        }
      }, _callee131);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^(www\.)?imgdrive\.net$/, /^(www\.)?(imgtaxi|imgwallet|imgadult)\.com$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee132() {
      var m;
      return _regenerator["default"].wrap(function _callee132$(_context132) {
        while (1) {
          switch (_context132.prev = _context132.next) {
            case 0:
              m = (0, _ADSBYPASSER_NAMESPACE__.$)('meta[property="og:image"]');
              m = m.content.replace('small', 'big');
              _context132.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(m);
            case 4:
            case "end":
              return _context132.stop();
          }
        }
      }, _callee132);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^imgflip\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee133() {
      var i;
      return _regenerator["default"].wrap(function _callee133$(_context133) {
        while (1) {
          switch (_context133.prev = _context133.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('#im');
              _context133.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(i.src);
            case 3:
            case "end":
              return _context133.stop();
          }
        }
      }, _callee133);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^imgprime\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee134() {
      var a;
      return _regenerator["default"].wrap(function _callee134$(_context134) {
        while (1) {
          switch (_context134.prev = _context134.next) {
            case 0:
              a = _ADSBYPASSER_NAMESPACE__.$.$('#continuetoimage a');
              if (!a) {
                _context134.next = 5;
                break;
              }
              _context134.next = 4;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(a.href);
            case 4:
              return _context134.abrupt("return");
            case 5:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('center a img');
              _context134.next = 8;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(a.src);
            case 8:
            case "end":
              return _context134.stop();
          }
        }
      }, _callee134);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^imgspice\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee135() {
      var o;
      return _regenerator["default"].wrap(function _callee135$(_context135) {
        while (1) {
          switch (_context135.prev = _context135.next) {
            case 0:
              o = (0, _ADSBYPASSER_NAMESPACE__.$)('#imgpreview.pic');
              _context135.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(o.src);
            case 3:
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
    host: /^imgtraffic\.com$/,
    path: /^\/a-1\/(.+)\.jpeg\.html/
  },
  start: function start() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee136() {
      var path;
      return _regenerator["default"].wrap(function _callee136$(_context136) {
        while (1) {
          switch (_context136.prev = _context136.next) {
            case 0:
              path = window.location.href.replace('/a-', '/').replace('.html', '');
              _context136.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(path);
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
    host: /^imgtraffic\.com$/,
    path: /^\/i-1\/(.+)\.jpeg\.html/
  },
  start: function start() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee137() {
      var path;
      return _regenerator["default"].wrap(function _callee137$(_context137) {
        while (1) {
          switch (_context137.prev = _context137.next) {
            case 0:
              path = window.location.href.replace('/i-', '/').replace('.html', '');
              _context137.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(path);
            case 3:
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
    host: /^imgtraffic\.com$/,
    path: /^\/n-1\/(.+)\.jpeg\.html/
  },
  start: function start() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee138() {
      var path;
      return _regenerator["default"].wrap(function _callee138$(_context138) {
        while (1) {
          switch (_context138.prev = _context138.next) {
            case 0:
              path = window.location.href.replace('/n-', '/').replace('.html', '');
              _context138.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(path);
            case 3:
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
    host: /^imgtraffic\.com$/,
    path: /^\/z-1\/(.+)\.jpeg\.html/
  },
  start: function start() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee139() {
      var path;
      return _regenerator["default"].wrap(function _callee139$(_context139) {
        while (1) {
          switch (_context139.prev = _context139.next) {
            case 0:
              path = window.location.href.replace('/z-', '/').replace('.html', '');
              _context139.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(path);
            case 3:
            case "end":
              return _context139.stop();
          }
        }
      }, _callee139);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: ['https://3minx.com/upload/en/*', 'https://4fuk.me/upload/en/*', 'https://555fap.com/upload/en/*', 'https://ai18.pics/upload/en/*', 'https://anime-jav.com/upload/en/*', 'https://blackwidof.org/upload/en/*', 'https://chinese-pics.com/upload/en/*', 'https://cn-av.com/upload/en/*', 'https://cnpics.org/upload/en/*', 'https://cnxx.me/upload/en/*', 'https://cosplay-xxx.com/upload/en/*', 'https://cosplay18.pics/upload/en/*', 'https://fc2ppv.stream/upload/en/*', 'https://fikfok.net/upload/en/*', 'https://gofile.download/upload/en/*', 'https://hentai-sub.com/upload/en/*', 'https://hentai4f.com/upload/en/*', 'https://hentaicovid.com/uploads/en/*', 'https://hentaicovid.org/upload/en/*', 'https://hentaipig.com/upload/en/*', 'https://hentaixnx.com/upload/en/*', 'https://idol69.net/upload/en/*', 'https://javball.com/upload/en/*', 'https://javring.com/upload/en/*', 'https://javsunday.com/upload/en/*', 'https://javtele.net/upload/en/*', 'https://kin8-av.com/upload/en/*', 'https://kin8-jav.com/upload/en/*', 'https://kr-av.com/upload/en/*', 'https://ovabee.com/upload/en/*', 'https://pig69.com/upload/en/*', 'https://porn-pig.com/upload/en/*', 'https://porn4f.com/upload/en/*', 'https://porn4f.org/upload/en/*', 'https://sweetie-fox.com/upload/en/*', 'https://xcamcovid.com/upload/en/*', 'https://xxpics.org/upload/en/*'],
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee140() {
      var m;
      return _regenerator["default"].wrap(function _callee140$(_context140) {
        while (1) {
          switch (_context140.prev = _context140.next) {
            case 0:
              m = (0, _ADSBYPASSER_NAMESPACE__.$)('meta[property="og:image"]');
              _context140.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(m.content);
            case 3:
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
    host: /^image\.javbee\.vip$/,
    path: /^\/en\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee141() {
      var i;
      return _regenerator["default"].wrap(function _callee141$(_context141) {
        while (1) {
          switch (_context141.prev = _context141.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('meta[property="og:image"]'); 
              _context141.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(i.content);
            case 3:
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
    host: /^image\.javbee\.vip$/,
    path: /^\/ib\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee142() {
      var a;
      return _regenerator["default"].wrap(function _callee142$(_context142) {
        while (1) {
          switch (_context142.prev = _context142.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('a');
              _context142.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(a.href);
            case 3:
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
    host: /^keptarolo\.hu$/,
    path: /^(\/[^/]+\/[^/]+)$/
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee143() {
      return _regenerator["default"].wrap(function _callee143$(_context143) {
        while (1) {
          switch (_context143.prev = _context143.next) {
            case 0:
              _context143.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openImage('http://www.keptarolo.hu/kep' + m.path[1]);
            case 2:
            case "end":
              return _context143.stop();
          }
        }
      }, _callee143);
    }))();
  }
});
(function () {
  _ADSBYPASSER_NAMESPACE__._.register({
    rule: {
      host: [/^miragepics\.com$/, /^foto-pic\.net$/],
      path: /^\/viewer\.php$/,
      query: /file=([^&]+)/
    },
    start: helper
  });
  function helper(_x4) {
    return _helper.apply(this, arguments);
  }
  function _helper() {
    _helper = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee144(m) {
      return _regenerator["default"].wrap(function _callee144$(_context144) {
        while (1) {
          switch (_context144.prev = _context144.next) {
            case 0:
              _context144.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openImage('/images/' + m.query[1]);
            case 2:
            case "end":
              return _context144.stop();
          }
        }
      }, _callee144);
    }));
    return _helper.apply(this, arguments);
  }
})();
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^www\.mrjh\.org$/,
    path: /^\/gallery\.php$/,
    query: /^\?entry=(.+)$/
  },
  ready: function ready(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee145() {
      var url;
      return _regenerator["default"].wrap(function _callee145$(_context145) {
        while (1) {
          switch (_context145.prev = _context145.next) {
            case 0:
              url = m.query[1];
              _context145.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage('/' + url);
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
    host: /^www\.noelshack\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee146() {
      var i;
      return _regenerator["default"].wrap(function _callee146$(_context146) {
        while (1) {
          switch (_context146.prev = _context146.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('meta[property="og:image"]');
              _context146.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(i.content);
            case 3:
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
    host: [/^dewimg\.com$/, /^outletpic\.com$/, /^pictwn\.com$/, /^picyield\.com$/, /^tezzpic\.com$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee147() {
      var img;
      return _regenerator["default"].wrap(function _callee147$(_context147) {
        while (1) {
          switch (_context147.prev = _context147.next) {
            case 0:
              img = (0, _ADSBYPASSER_NAMESPACE__.$)('center > img.picview');
              _context147.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(img.src);
            case 3:
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
    host: /^www\.pic-upload\.de$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee148() {
      var i;
      return _regenerator["default"].wrap(function _callee148$(_context148) {
        while (1) {
          switch (_context148.prev = _context148.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('.preview_picture_2b');
              _context148.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(i.src);
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
    host: /^picstate\.com$/,
    path: /^\/view\/full\/.*/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee149() {
      var i;
      return _regenerator["default"].wrap(function _callee149$(_context149) {
        while (1) {
          switch (_context149.prev = _context149.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('#image_container a img');
              _context149.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(i.src);
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
    host: [/^picturedent\.org$/, /^everest\.picturedent\.org$/, /^pacific\.picturedent\.org$/],
    path: /^\/image\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee150() {
      var i;
      return _regenerator["default"].wrap(function _callee150$(_context150) {
        while (1) {
          switch (_context150.prev = _context150.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('#full_img');
              _context150.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(i.src);
            case 3:
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
    host: /^(www\.)?pimpandhost\.com$/,
    path: /^\/image\/\d+/,
    query: /^\?size=original/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee151() {
      var img;
      return _regenerator["default"].wrap(function _callee151$(_context151) {
        while (1) {
          switch (_context151.prev = _context151.next) {
            case 0:
              img = (0, _ADSBYPASSER_NAMESPACE__.$)('#overflow-wrapper img.original');
              _context151.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(img.src);
            case 3:
            case "end":
              return _context151.stop();
          }
        }
      }, _callee151);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: /^(www\.)?pimpandhost\.com$/,
    path: /^\/image\/\d+/
  },
  start: function start(m) {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee152() {
      return _regenerator["default"].wrap(function _callee152$(_context152) {
        while (1) {
          switch (_context152.prev = _context152.next) {
            case 0:
              _context152.next = 2;
              return _ADSBYPASSER_NAMESPACE__.$.openLink(m.path + '?size=original');
            case 2:
            case "end":
              return _context152.stop();
          }
        }
      }, _callee152);
    }))();
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: [{
    host: /^(www\.)?pixhost\.to$/,
    path: /^\/show\//
  }, {
    host: [/^3xplanet\.(com|net)$/, /^javtenshi\.com$/, /^jav-load\.com$/, /^uncenav\.com$/],
    path: /^\/viewimage\//
  }],
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee153() {
      var o;
      return _regenerator["default"].wrap(function _callee153$(_context153) {
        while (1) {
          switch (_context153.prev = _context153.next) {
            case 0:
              _ADSBYPASSER_NAMESPACE__.$.remove('iframe, #ad');
              o = _ADSBYPASSER_NAMESPACE__.$.$('#all');
              if (o) {
                o.style.display = '';
              }
              o = (0, _ADSBYPASSER_NAMESPACE__.$)('#show_image, #image');
              _context153.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(o.src);
            case 6:
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
    host: /^(www\.)?pixroute\.com$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee154() {
      var o;
      return _regenerator["default"].wrap(function _callee154$(_context154) {
        while (1) {
          switch (_context154.prev = _context154.next) {
            case 0:
              o = (0, _ADSBYPASSER_NAMESPACE__.$)('#download_box img#imgpreview.pic');
              _context154.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(o.src);
            case 3:
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
    host: [/^postimg\.cc$/, /^postlmg\.cc$/, /^pixxxels\.cc$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee155() {
      var img;
      return _regenerator["default"].wrap(function _callee155$(_context155) {
        while (1) {
          switch (_context155.prev = _context155.next) {
            case 0:
              img = (0, _ADSBYPASSER_NAMESPACE__.$)('#main-image');
              _context155.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(img.src);
            case 3:
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
    host: [/^prnt\.sc$/],
    path: /\.html$/
  }
});
_ADSBYPASSER_NAMESPACE__._.register({
  rule: {
    host: [/^prnt\.sc$/]
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee156() {
      var i;
      return _regenerator["default"].wrap(function _callee156$(_context156) {
        while (1) {
          switch (_context156.prev = _context156.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('#screenshot-image');
              _context156.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(i.src);
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
    host: /^pronpic\.org$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee157() {
      var urlBaseImg, baseUrl, img, url;
      return _regenerator["default"].wrap(function _callee157$(_context157) {
        while (1) {
          switch (_context157.prev = _context157.next) {
            case 0:
              urlBaseImg = (0, _ADSBYPASSER_NAMESPACE__.$)('table.new_table2:nth-child(1) img.link');
              baseUrl = urlBaseImg.src.split('th_')[0];
              img = (0, _ADSBYPASSER_NAMESPACE__.$)('table.new_table2:nth-child(2) img.link');
              url = baseUrl + img.src.split('th_')[1];
              _context157.next = 6;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(url);
            case 6:
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
    host: /^starimage\.club$/,
    path: /^\/image\/.+$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee158() {
      var i;
      return _regenerator["default"].wrap(function _callee158$(_context158) {
        while (1) {
          switch (_context158.prev = _context158.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('img.no-select.cursor-zoom-in');
              _context158.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(i.src);
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
  rule: [{
    host: [/^img\.trafficimage\.club$/, /^trafficimage\.club$/],
    path: /^\/image\//
  }, {
    host: /^im\.ge$/,
    path: /^\/i\//
  }],
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee159() {
      var img;
      return _regenerator["default"].wrap(function _callee159$(_context159) {
        while (1) {
          switch (_context159.prev = _context159.next) {
            case 0:
              img = (0, _ADSBYPASSER_NAMESPACE__.$)('meta[property="og:image"]');
              _context159.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(img.content);
            case 3:
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
    host: /^www\.turboimagehost\.com$/,
    path: /^\/p\//
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee160() {
      var i;
      return _regenerator["default"].wrap(function _callee160$(_context160) {
        while (1) {
          switch (_context160.prev = _context160.next) {
            case 0:
              i = (0, _ADSBYPASSER_NAMESPACE__.$)('#imageid');
              _context160.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(i.src);
            case 3:
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
    host: /^xxxwebdlxxx\.(org|top)$/
  },
  ready: function ready() {
    return (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee161() {
      var a;
      return _regenerator["default"].wrap(function _callee161$(_context161) {
        while (1) {
          switch (_context161.prev = _context161.next) {
            case 0:
              a = (0, _ADSBYPASSER_NAMESPACE__.$)('.centred, .centred_resized');
              _context161.next = 3;
              return _ADSBYPASSER_NAMESPACE__.$.openImage(a.src);
            case 3:
            case "end":
              return _context161.stop();
          }
        }
      }, _callee161);
    }))();
  }
});
 }),
 ((__unused_webpack_module, exports, __webpack_require__) => {
"use strict";
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.$ = $;
exports._ = void 0;
var _ajax = __webpack_require__(34);
var _cookie = __webpack_require__(36);
var _core = __webpack_require__(5);
var _dispatcher = __webpack_require__(28);
var _dom = __webpack_require__(37);
var _image = __webpack_require__(38);
var _link = __webpack_require__(39);
var _logger = __webpack_require__(31);
var _misc = __webpack_require__(40);
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
$.openImage = _image.openImage;
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
 ((__unused_webpack_module, exports, __webpack_require__) => {
"use strict";
var _regeneratorRuntime2 = __webpack_require__(2);
var _interopRequireDefault = __webpack_require__(1);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
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
 ((module, __unused_webpack_exports, __webpack_require__) => {
var arrayWithHoles = __webpack_require__(13);
var iterableToArray = __webpack_require__(9);
var unsupportedIterableToArray = __webpack_require__(10);
var nonIterableRest = __webpack_require__(15);
function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableRest();
}
module.exports = _toArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
 }),
 ((__unused_webpack_module, exports, __webpack_require__) => {
"use strict";
var _interopRequireDefault = __webpack_require__(1);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
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
 ((__unused_webpack_module, exports, __webpack_require__) => {
"use strict";
var _interopRequireDefault = __webpack_require__(1);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
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
 ((__unused_webpack_module, exports, __webpack_require__) => {
"use strict";
var _interopRequireDefault = __webpack_require__(1);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.openImage = openImage;
var _regenerator = _interopRequireDefault(__webpack_require__(2));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(4));
var _link = __webpack_require__(39);
var _dom = __webpack_require__(37);
var _logger = __webpack_require__(31);
var _misc = __webpack_require__(40);
var _platform = __webpack_require__(29);
function openImage(_x, _x2) {
  return _openImage.apply(this, arguments);
}
function _openImage() {
  _openImage = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee(imgSrc, options) {
    var replace, referer, redirectImage;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = options || {};
            replace = !!options.replace; 
            referer = !!options.referer;
            if (!replace) {
              _context.next = 7;
              break;
            }
            _context.next = 6;
            return replaceBody(imgSrc);
          case 6:
            return _context.abrupt("return");
          case 7:
            _context.next = 9;
            return _platform.GMAPI.getValue('redirect_image');
          case 9:
            redirectImage = _context.sent;
            if (!redirectImage) {
              _context.next = 13;
              break;
            }
            _context.next = 13;
            return (0, _link.openLink)(imgSrc, {
              referer: referer
            });
          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _openImage.apply(this, arguments);
}
function enableScrolling() {
  var o = document.compatMode === 'CSS1Compat' ? document.documentElement : document.body;
  o.style.overflow = '';
}
function toggleShrinking() {
  this.classList.toggle('adsbypasser-shrinked');
}
function checkScaling() {
  var nw = this.naturalWidth;
  var nh = this.naturalHeight;
  var cw = document.documentElement.clientWidth;
  var ch = document.documentElement.clientHeight;
  if ((nw > cw || nh > ch) && !this.classList.contains('adsbypasser-resizable')) {
    this.classList.add('adsbypasser-resizable');
    this.classList.add('adsbypasser-shrinked');
    this.addEventListener('click', toggleShrinking);
  } else if (nw <= cw && nh <= ch && this.classList.contains('adsbypasser-resizable')) {
    this.removeEventListener('click', toggleShrinking);
    this.classList.remove('adsbypasser-shrinked');
    this.classList.remove('adsbypasser-resizable');
  }
}
function scaleImage(_x3) {
  return _scaleImage.apply(this, arguments);
}
function _scaleImage() {
  _scaleImage = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee2(i) {
    var siURL, h;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _platform.GMAPI.getResourceUrl('scaleImage');
          case 2:
            siURL = _context2.sent;
            appendStyleURL(siURL);
            if (i.naturalWidth && i.naturalHeight) {
              checkScaling.call(i);
            } else {
              i.addEventListener('load', checkScaling);
            }
            h = 0;
            window.addEventListener('resize', function () {
              window.clearTimeout(h);
              h = window.setTimeout(checkScaling.bind(i), 100);
            });
          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _scaleImage.apply(this, arguments);
}
function changeBackground() {
  return _changeBackground.apply(this, arguments);
}
function _changeBackground() {
  _changeBackground = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee3() {
    var bgImage;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _platform.GMAPI.getResourceUrl('bgImage');
          case 2:
            bgImage = _context3.sent;
            document.body.style.backgroundColor = '#222222';
            document.body.style.backgroundImage = "url('".concat(bgImage, "')");
          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _changeBackground.apply(this, arguments);
}
function alignCenter() {
  return _alignCenter.apply(this, arguments);
}
function _alignCenter() {
  _alignCenter = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee4() {
    var acURL;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _platform.GMAPI.getResourceUrl('alignCenter');
          case 2:
            acURL = _context4.sent;
            appendStyleURL(acURL);
          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _alignCenter.apply(this, arguments);
}
function injectStyle(d, i) {
  (0, _dom.remove)('style, link[rel=stylesheet]');
  d.id = 'adsbypasser-wrapper';
  i.id = 'adsbypasser-image';
}
function appendStyleURL(url) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  document.head.appendChild(link);
}
function replaceBody(_x4) {
  return _replaceBody.apply(this, arguments);
}
function _replaceBody() {
  _replaceBody = (0, _asyncToGenerator2["default"])( _regenerator["default"].mark(function _callee5(imgSrc) {
    var redirectImage, d, i, ac, si, cb;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _platform.GMAPI.getValue('redirect_image');
          case 2:
            redirectImage = _context5.sent;
            if (redirectImage) {
              _context5.next = 5;
              break;
            }
            return _context5.abrupt("return");
          case 5:
            if (imgSrc) {
              _context5.next = 8;
              break;
            }
            (0, _logger.warn)('false url');
            return _context5.abrupt("return");
          case 8:
            (0, _logger.info)("replacing body with `".concat(imgSrc, "` ..."));
            (0, _misc.removeAllTimer)();
            enableScrolling();
            document.body = document.createElement('body');
            d = document.createElement('div');
            document.body.appendChild(d);
            i = document.createElement('img');
            i.src = imgSrc;
            d.appendChild(i);
            _context5.next = 19;
            return _platform.GMAPI.getValue('align_center');
          case 19:
            ac = _context5.sent;
            _context5.next = 22;
            return _platform.GMAPI.getValue('scale_image');
          case 22:
            si = _context5.sent;
            if (ac || si) {
              injectStyle(d, i);
            }
            if (!ac) {
              _context5.next = 27;
              break;
            }
            _context5.next = 27;
            return alignCenter();
          case 27:
            _context5.next = 29;
            return _platform.GMAPI.getValue('change_background');
          case 29:
            cb = _context5.sent;
            if (!cb) {
              _context5.next = 33;
              break;
            }
            _context5.next = 33;
            return changeBackground();
          case 33:
            if (!si) {
              _context5.next = 36;
              break;
            }
            _context5.next = 36;
            return scaleImage(i);
          case 36:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _replaceBody.apply(this, arguments);
}
 }),
 ((__unused_webpack_module, exports, __webpack_require__) => {
"use strict";
var _interopRequireDefault = __webpack_require__(1);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
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
 ((__unused_webpack_module, exports, __webpack_require__) => {
"use strict";
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
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
var __webpack_exports__ = {};
(() => {
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
})();
 })()
;