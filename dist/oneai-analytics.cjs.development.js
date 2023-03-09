'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('react-app-polyfill/ie11');
require('core-js/features/array/find');
require('core-js/features/array/includes');
require('core-js/features/number/is-nan');
require('core-js/features/array/at');
require('resize-observer-polyfill');
var dateFns = require('date-fns');
var React = require('react');
var solid = require('@heroicons/react/20/solid');
var outline = require('@heroicons/react/24/outline');
var reactResizeDetector = require('react-resize-detector');
var ReactTooltip = require('react-tooltip');
var react = require('@headlessui/react');
var d3 = require('d3');
var chromaJs = require('chroma-js');
var Papa = require('papaparse');
var moment = require('moment');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactTooltip__default = /*#__PURE__*/_interopDefaultLegacy(ReactTooltip);
var Papa__default = /*#__PURE__*/_interopDefaultLegacy(Papa);
var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);

function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
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
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function calculateFontSize(height, width) {
  var area = height * width;
  var fontSize = 10 + 32 * area / (250000 - 15000);
  fontSize = Math.max(fontSize, 10);
  fontSize = Math.min(fontSize, 60);
  return fontSize;
}
function chunks(arr, size) {
  return Array.from(new Array(Math.ceil(arr.length / size)), function (_, i) {
    return arr.slice(i * size, i * size + size);
  });
}
function getSecondsDiff(startDate, endDate) {
  var diff = endDate.getTime() - startDate.getTime();
  return Math.abs(diff / 1000);
}
function sum(numbers) {
  return numbers.reduce(function (partialSum, a) {
    return partialSum + a;
  }, 0);
}
function uniqBy(arr, getKey) {
  var seen = new Set();
  return arr.filter(function (item) {
    var k = getKey(item);
    return seen.has(k) ? false : seen.add(k);
  });
}
function toLowerKeys(obj) {
  return Object.keys(obj).reduce(function (accumulator, key) {
    accumulator[key.toLowerCase()] = obj[key];
    return accumulator;
  }, {});
}
function percentageIncrease(previous, current) {
  var percent;
  if (current !== 0) {
    if (previous !== 0) {
      percent = (current - previous) / previous * 100;
    } else {
      percent = current * 100;
    }
  } else {
    percent = -previous * 100;
  }
  return Math.floor(percent);
}
var numberToFixed = function numberToFixed(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
};
var customNumberToFixed = function customNumberToFixed(num) {
  var str = Math.abs(num).toString();
  var _str$split = str.split('.'),
    integer = _str$split[0];
  if (integer.length < 3) {
    return numberToFixed(parseFloat(num.toFixed(2)));
  } else if (integer.length < 4) {
    return numberToFixed(parseFloat(num.toFixed(1)));
  } else {
    return parseFloat(num.toFixed(0));
  }
};
function getNumberDescription(numIn, decPlaces) {
  var num = customNumberToFixed(numIn);
  var prefix = num < 0 ? '-' : '';
  // 2 decimal places => 100, 3 => 1000, etc
  decPlaces = Math.pow(10, decPlaces);
  // Enumerate num abbreviations
  var abbrev = ['k', 'm', 'b', 't'];
  var strResult = num.toString();
  var result = Math.abs(num);
  // Go through the array backwards, so we do the largest first
  for (var i = abbrev.length - 1; i >= 0; i--) {
    // Convert array index to "1000", "1000000", etc
    var size = Math.pow(10, (i + 1) * 3);
    // If the num is bigger or equal do the abbreviation
    if (size <= result) {
      // Here, we multiply by decPlaces, round, and then divide by decPlaces.
      // This gives us nice rounding to a particular decimal place.
      result = Math.round(result * decPlaces / size) / decPlaces;
      // Handle special case where we round up to the next abbreviation
      if (result == 1000 && i < abbrev.length - 1) {
        result = 1;
        i++;
      }
      // Add the letter for the abbreviation
      strResult = result.toString() + abbrev[i];
      // We are done... stop
      break;
    }
  }
  return prefix + strResult;
}
var objectToLowerCase = function objectToLowerCase(obj) {
  var entries = Object.entries(obj);
  return Object.fromEntries(entries.map(function (_ref) {
    var key = _ref[0],
      value = _ref[1];
    return [key.toLowerCase(), value];
  }));
};
var extractShtrudelSuffix = function extractShtrudelSuffix(str) {
  var index = str.lastIndexOf('@');
  return index >= 0 ? str.substring(0, index) : str;
};

function topGroupPercentCalculation(metadataKeyValue, metadata, _, countersConfigurations, __) {
  var counter = getMetadataKeyValueConfiguration(metadataKeyValue, countersConfigurations);
  var groups = getCounterGroups(counter);
  if (!counter || groups.length === 0) return {
    counter: counter,
    result: 0
  };
  var sums = groups.map(function (group) {
    return calculateSumItemsInMetadata(group.members, [], metadata);
  });
  var max = Math.max.apply(Math, sums);
  var maxGroup = groups[sums.indexOf(max)];
  var groupsSum = sum(sums);
  return {
    result: groupsSum === 0 ? 0 : max / groupsSum * 100,
    counter: max > 0 ? maxGroup != null ? maxGroup : counter : counter,
    metadataKey: maxGroup.label,
    value: undefined
  };
}
function topGroupCalculation(metadataKeyValue, metadata, _, countersConfigurations, __) {
  var counter = getMetadataKeyValueConfiguration(metadataKeyValue, countersConfigurations);
  var groups = getCounterGroups(counter);
  if (groups.length === 0) return {
    counter: counter,
    result: 0
  };
  var sums = groups.map(function (group) {
    return calculateSumItemsInMetadata(group.members, [], metadata);
  });
  var max = Math.max.apply(Math, sums);
  var maxGroup = groups[sums.indexOf(max)];
  return {
    result: max,
    counter: max > 0 ? maxGroup != null ? maxGroup : counter : counter,
    metadataKey: maxGroup.label,
    value: undefined
  };
}
function topValuePercentCalculation(metadataKeyValue, metadata, _, countersConfigurations, __) {
  var _getItemCounterConfig;
  var counter = getMetadataKeyValueConfiguration(metadataKeyValue, countersConfigurations);
  if (!counter) return {
    counter: counter,
    result: 0
  };
  var max = getMaxItemValue(counter.members, counter.items, metadata);
  var sum = calculateSumItemsInMetadata(counter.members, counter.items, metadata);
  return {
    result: sum === 0 ? 0 : max.count / sum * 100,
    counter: (_getItemCounterConfig = getItemCounterConfiguration(max.metadata, max.value, countersConfigurations)) != null ? _getItemCounterConfig : counter,
    metadataKey: max.metadata,
    value: max.value
  };
}
function topValueCalculation(metadataKeyValue, metadata, _, countersConfigurations, __) {
  var _getItemCounterConfig2;
  var counter = getMetadataKeyValueConfiguration(metadataKeyValue, countersConfigurations);
  if (!counter) return {
    counter: counter,
    result: 0
  };
  var maxItem = getMaxItemValue(counter.members, counter.items, metadata);
  return {
    result: maxItem.count,
    counter: (_getItemCounterConfig2 = getItemCounterConfiguration(maxItem.metadata, maxItem.value, countersConfigurations)) != null ? _getItemCounterConfig2 : counter,
    metadataKey: maxItem.metadata,
    value: maxItem.value
  };
}
function totalSumCalculation(metadataKeyValue, metadata, _, countersConfigurations, __) {
  var counter = getMetadataKeyValueConfiguration(metadataKeyValue, countersConfigurations);
  if (!counter) return {
    counter: counter,
    result: 0
  };
  return {
    result: calculateSumItemsInMetadata(counter.members, counter.items, metadata),
    counter: counter
  };
}
function percentOfItemsCalculation(metadataKeyValue, metadata, _, countersConfigurations, __) {
  if (!metadataKeyValue) return {
    counter: null,
    result: 0
  };
  var itemCounter = getMetadataKeyValueConfiguration(metadataKeyValue, countersConfigurations);
  var keyCounter = getMetadataKeyValueConfiguration({
    key: metadataKeyValue.key
  }, countersConfigurations);
  if (!itemCounter || !keyCounter) return {
    counter: null,
    result: 0
  };
  var itemCount = calculateSumItemsInMetadata(itemCounter.members, itemCounter.items, metadata);
  var keyCount = calculateSumItemsInMetadata(keyCounter.members, keyCounter.items, metadata);
  return {
    result: keyCount === 0 ? 0 : itemCount / keyCount * 100,
    counter: itemCounter != null ? itemCounter : keyCounter,
    metadataKey: metadataKeyValue.key,
    value: metadataKeyValue.value
  };
}
function percentOfAllItemsCalculation(metadataKeyValue, metadata, _, countersConfigurations, totalItems) {
  if (!metadataKeyValue) return {
    counter: null,
    result: 0
  };
  var itemCounter = getMetadataKeyValueConfiguration(metadataKeyValue, countersConfigurations);
  var keyCounter = getMetadataKeyValueConfiguration({
    key: CUSTOM_METADATA_KEY
  }, countersConfigurations);
  if (!itemCounter || !keyCounter) return {
    counter: null,
    result: 0
  };
  var itemCount = calculateSumItemsInMetadata(itemCounter.members, itemCounter.items, metadata);
  var keyCount = calculateSumItemsInMetadata(keyCounter.members, keyCounter.items, metadata);
  var result;
  if (metadataKeyValue.key === CUSTOM_METADATA_KEY) {
    result = totalItems === 0 ? 0 : itemCount / totalItems * 100;
  } else {
    result = keyCount === 0 ? 0 : itemCount / keyCount * 100;
  }
  return {
    result: result,
    counter: itemCounter != null ? itemCounter : keyCounter,
    metadataKey: metadataKeyValue.key,
    value: metadataKeyValue.value
  };
}
function trendCalculation(metadataKeyValue, _, trends, countersConfigurations) {
  var _trendsCounts$at;
  if (!metadataKeyValue || trends.length < 2) return {
    counter: null,
    result: 0
  };
  var itemCounter = getMetadataKeyValueConfiguration(metadataKeyValue, countersConfigurations);
  var keyCounter = getMetadataKeyValueConfiguration({
    key: metadataKeyValue.key
  }, countersConfigurations);
  if (!itemCounter || !keyCounter) return {
    counter: null,
    result: 0
  };
  var trendsCounts = trends.map(function (trend) {
    return calculateSumItemsInMetadata(itemCounter.members, itemCounter.items, trend.metadata);
  });
  var latestTrend = (_trendsCounts$at = trendsCounts.at(0)) != null ? _trendsCounts$at : 0;
  var previousTrendsSum = sum(trendsCounts.slice(1, trendsCounts.length));
  var previousTrendsMean = previousTrendsSum > 0 ? previousTrendsSum / trendsCounts.length - 1 : 0;
  var trend = percentageIncrease(previousTrendsMean, latestTrend);
  return {
    result: trend,
    counter: itemCounter != null ? itemCounter : keyCounter,
    metadataKey: metadataKeyValue.key,
    value: metadataKeyValue.value
  };
}
function getMetadataKeyValueGroups(metadataKeyValue, countersConfigurations) {
  var counter = getMetadataKeyValueConfiguration(metadataKeyValue, countersConfigurations);
  return getCounterGroups(counter);
}
function getCounterGroups(counter) {
  var _counter$items$filter, _counter$items;
  if (!counter) return [];
  return (_counter$items$filter = (_counter$items = counter.items) == null ? void 0 : _counter$items.filter(function (group) {
    var _group$isGroup;
    return (_group$isGroup = group.isGroup) != null ? _group$isGroup : false;
  })) != null ? _counter$items$filter : [];
}
function hasMultipleMembers(metadataKeyValue, countersConfigurations) {
  var _counter$members;
  var counter = getMetadataKeyValueConfiguration(metadataKeyValue, countersConfigurations);
  if (!counter) return false;
  if (counter.isGroup) return true;
  var sum = 0;
  (_counter$members = counter.members) == null ? void 0 : _counter$members.forEach(function (member) {
    var _member$values$length, _member$values;
    return sum += (_member$values$length = (_member$values = member.values) == null ? void 0 : _member$values.length) != null ? _member$values$length : 2;
  });
  return sum > 1;
}
function getMetadataKeyValueConfiguration(metadataKeyValue, countersConfigurations) {
  var _keyConfig$items;
  if (!metadataKeyValue) return null;
  var keyConfig = objectToLowerCase(countersConfigurations)[metadataKeyValue.key.toLowerCase()];
  if (!keyConfig) return null;
  if (!metadataKeyValue.value) return keyConfig;
  var memberConfig = (_keyConfig$items = keyConfig.items) == null ? void 0 : _keyConfig$items.find(function (group) {
    var _group$label, _metadataKeyValue$val;
    return ((_group$label = group.label) == null ? void 0 : _group$label.toLowerCase()) === ((_metadataKeyValue$val = metadataKeyValue.value) == null ? void 0 : _metadataKeyValue$val.toLowerCase());
  });
  if (!memberConfig || !memberConfig.display) return keyConfig;
  return memberConfig;
}
function calculateSumItemsInMetadata(members, groups, metadata) {
  var items = getValuesAndCounts(members, groups, metadata);
  return sum(items.map(function (_ref) {
    var count = _ref.count;
    return count;
  }));
}
function getMaxItemValue(members, groups, metadata) {
  var items = getValuesAndCounts(members, groups, metadata);
  if (items.length === 0) return {
    count: 0
  };
  return items.reduce(function (prev, current) {
    return prev.count > current.count ? prev : current;
  });
}
function getValuesAndCounts(members, groups, metadata) {
  var _groups$flatMap;
  var lowerKeysMetadata = toLowerKeys(metadata);
  var membersData = filterRelevantValues(members, lowerKeysMetadata);
  if (membersData.length > 0) return membersData;
  return filterRelevantValues((_groups$flatMap = groups == null ? void 0 : groups.flatMap(function (group) {
    var _group$members;
    return (_group$members = group.members) != null ? _group$members : [];
  })) != null ? _groups$flatMap : [], lowerKeysMetadata);
}
function filterRelevantValues(members, metadata) {
  var _members$flatMap;
  return (_members$flatMap = members == null ? void 0 : members.flatMap(function (member) {
    var _member$metadataName;
    var values = metadata[(_member$metadataName = member.metadataName) != null ? _member$metadataName : ''];
    if (!values) return [];
    return (member.values === undefined ? values : values.filter(function (k) {
      var _member$values2;
      return (_member$values2 = member.values) == null ? void 0 : _member$values2.includes(k.value);
    })).map(function (_ref2) {
      var value = _ref2.value,
        count = _ref2.count;
      return {
        metadata: member.metadataName,
        value: value,
        count: count
      };
    });
  })) != null ? _members$flatMap : [];
}
function getItemCounterConfiguration(metadata, value, countersConfigurations) {
  var _counterConfig$items;
  if (!metadata || !value) return null;
  var counterConfig = countersConfigurations[metadata];
  var valueCounterConfig = (_counterConfig$items = counterConfig.items) == null ? void 0 : _counterConfig$items.find(function (group) {
    return group.label === value;
  });
  if (!valueCounterConfig || !valueCounterConfig.display) return null;
  return valueCounterConfig;
}

var totalSumCalculationName = 'Total SUM';
var topValueCalculationName = 'Top value total sum';
var topValuePercentCalculationName = 'Top value %';
var topGroupCalculationName = 'Top group total';
var topGroupPercentCalculationName = 'Top group %';
var percentOfItemsCalculationName = '% of items';
var percentOfAllCalculationName = '% of all items';
var trendCalculationName = 'trend';
var totalSumCalculationConfiguration = {
  name: totalSumCalculationName,
  hasGroups: false,
  hasMultipleMembers: false,
  type: 'number',
  calculate: totalSumCalculation
};
var topValueCalculationConfiguration = {
  name: topValueCalculationName,
  hasGroups: false,
  hasMultipleMembers: true,
  type: 'number',
  calculate: topValueCalculation
};
var topValuePercentCalculationConfiguration = {
  name: topValuePercentCalculationName,
  hasGroups: false,
  hasMultipleMembers: true,
  type: 'percentage',
  calculate: topValuePercentCalculation
};
var topGroupCalculationConfiguration = {
  name: topGroupCalculationName,
  hasGroups: true,
  hasMultipleMembers: false,
  type: 'number',
  calculate: topGroupCalculation
};
var topGroupPercentCalculationConfiguration = {
  name: topGroupPercentCalculationName,
  hasGroups: true,
  hasMultipleMembers: false,
  type: 'percentage',
  calculate: topGroupPercentCalculation
};
var percentOfItemsCalculationConfiguration = {
  name: percentOfItemsCalculationName,
  hasGroups: false,
  hasMultipleMembers: false,
  type: 'percentage',
  calculate: percentOfItemsCalculation
};
var percentOfAllItemsCalculationConfiguration = {
  name: percentOfAllCalculationName,
  hasGroups: false,
  hasMultipleMembers: false,
  type: 'percentage',
  calculate: percentOfAllItemsCalculation
};
var trendCalculationConfiguration = {
  name: trendCalculationName,
  hasGroups: false,
  hasMultipleMembers: false,
  type: 'trend',
  calculate: trendCalculation
};

var CUSTOM_METADATA_KEY = 'item count';
var countersStorageKey = 'oneAi-counters';
var labelsStorageKey = 'oneAi-labels';
var sizeAxisStorageKey = 'oneAi-sizeAxis';
var colorAxisStorageKey = 'oneAi-colorAxis';
var defaultCalculations = [totalSumCalculationConfiguration, topValueCalculationConfiguration, topValuePercentCalculationConfiguration, topGroupCalculationConfiguration, topGroupPercentCalculationConfiguration, percentOfItemsCalculationConfiguration, percentOfAllItemsCalculationConfiguration, trendCalculationConfiguration];
var PAGE_SIZE = 25;

var COLLECTION_TYPE = 'Collection';
function getNodeText(node) {
  return node.type === 'Cluster' ? node.data.cluster_phrase : node.type === 'Phrase' ? node.data.text : node.type === 'Meta' ? node.data.meta_value : node.data.original_text;
}
function getNodeId(node) {
  return (node.type === 'Cluster' ? node.data.cluster_id : node.type === 'Phrase' ? node.data.phrase_id : node.type === 'Meta' ? node.data.meta_key + '$$' + node.data.meta_value : node.data.id).toString();
}
function getNodeItemsCount(node) {
  return node.type === 'Cluster' ? node.data.items_count : node.type === 'Phrase' ? node.data.items_count : node.type === 'Meta' ? node.data.items_count : 1;
}
function getNodeDetails(node, collection) {
  var _node$type;
  var currentNodeType = (_node$type = node == null ? void 0 : node.type) != null ? _node$type : COLLECTION_TYPE;
  var currentNodeId = node ? getNodeId(node) : collection;
  return {
    id: currentNodeId,
    type: currentNodeType
  };
}
function getNodeTrends(node) {
  var _node$data$trends, _node$data$trends2, _node$data$trends3;
  if (!node) return [];
  return node.type === 'Cluster' ? (_node$data$trends = node.data.trends) != null ? _node$data$trends : [] : node.type === 'Phrase' ? (_node$data$trends2 = node.data.trends) != null ? _node$data$trends2 : [] : node.type === 'Meta' ? (_node$data$trends3 = node.data.trends) != null ? _node$data$trends3 : [] : [];
}
var getNodeOriginalAndTranslatedText = function getNodeOriginalAndTranslatedText(node) {
  if (!node) return {
    originalText: undefined,
    translatedText: undefined
  };
  if (['Cluster', 'Phrase', 'Item'].includes(node.type)) {
    var _cluster$item_transla;
    var cluster = node.data;
    return {
      originalText: cluster.item_original_text,
      translatedText: (_cluster$item_transla = cluster.item_translated_text) != null ? _cluster$item_transla : cluster.item_original_text
    };
  }
  if (node.type === 'Meta') {
    var item = node.data;
    return {
      originalText: item.meta_value,
      translatedText: item.meta_value
    };
  }
  return {
    originalText: undefined,
    translatedText: undefined
  };
};

function LabelDisplay(_ref) {
  var metadataKey = _ref.metadataKey,
    value = _ref.value,
    countersConfiguration = _ref.countersConfiguration,
    labelClicked = _ref.labelClicked,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? '' : _ref$tooltip,
    width = _ref.width,
    _ref$maxWidth = _ref.maxWidth,
    maxWidth = _ref$maxWidth === void 0 ? '10ch' : _ref$maxWidth,
    color = _ref.color;
  var config = getMetadataKeyValueConfiguration({
    key: metadataKey,
    value: value
  }, countersConfiguration);
  return React__default["default"].createElement("span", {
    "data-for": "global",
    "data-tip": tooltip !== '' ? tooltip + ': ' + value : value,
    className: "flex items-center cursor-pointer text-gray-500 hover:text-gray-300",
    style: {
      color: color
    },
    onClick: function onClick() {
      return labelClicked(metadataKey, value);
    }
  }, config && config.display && config.display.icon !== null && React__default["default"].createElement("span", {
    className: "w-[1em] h-[1em] " + (config.display.color === 'green' ? 'text-emerald-400' : config.display.color === 'red' ? 'text-red-400' : 'text-gray-500 dark:text-gray-300')
  }, config.display.icon), React__default["default"].createElement("span", {
    style: {
      width: width,
      maxWidth: maxWidth,
      marginLeft: metadataKey === 'topic' ? '-1px' : '1px'
    },
    className: "italic truncate pr-1"
  }, value));
}

function LabelsFiltersSelect(_ref) {
  var selectedLabels = _ref.selectedLabels,
    countersConfigurations = _ref.countersConfigurations,
    selectedMetadataKeyValueChange = _ref.selectedMetadataKeyValueChange;
  return React__default["default"].createElement(react.Listbox, null, React__default["default"].createElement("div", {
    className: "relative"
  }, React__default["default"].createElement(react.Listbox.Button, {
    className: "relative rounded-lg  py-2 pl-3 pr-10 text-left focus:outline-none sm:text-sm"
  }, React__default["default"].createElement("span", {
    className: "block truncate lowercase first-letter:uppercase text-black dark:text-white !text-xl",
    style: {
      width: '1em',
      height: '1em'
    }
  }, React__default["default"].createElement(outline.FunnelIcon, null)), React__default["default"].createElement("span", {
    className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
  }, React__default["default"].createElement(outline.ChevronUpDownIcon, {
    className: "h-5 w-5 text-gray-400",
    "aria-hidden": "true"
  }))), React__default["default"].createElement(react.Transition, {
    as: React.Fragment,
    leave: "transition ease-in duration-100",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, React__default["default"].createElement(react.Listbox.Options, {
    className: "fixed mt-1 z-10 max-h-60 scrollbar-thin scrollbar-thumb-[#747189] scrollbar-track-[#272533] overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full rounded-md bg-gray-600 dark:bg-[#272533] py-1 text-base shadow-lg ring-1 ring-gray-500 dark:ring-black ring-opacity-5 focus:outline-none sm:text-sm"
  }, uniqBy(Object.keys(countersConfigurations).sort(function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }), function (key) {
    return key;
  }).filter(function (meta) {
    var _countersConfiguratio, _countersConfiguratio2, _countersConfiguratio3;
    return ((_countersConfiguratio = (_countersConfiguratio2 = countersConfigurations[meta]) == null ? void 0 : (_countersConfiguratio3 = _countersConfiguratio2.items) == null ? void 0 : _countersConfiguratio3.length) != null ? _countersConfiguratio : 0) > 0;
  }).map(function (key, i) {
    return React__default["default"].createElement(CascadedOption$1, {
      countersConfigurations: countersConfigurations,
      optionName: key,
      index: i,
      selected: selectedLabels != null ? selectedLabels : [],
      labelClicked: selectedMetadataKeyValueChange,
      key: i
    });
  })))));
}
function CascadedOption$1(_ref2) {
  var _configData$items;
  var countersConfigurations = _ref2.countersConfigurations,
    optionName = _ref2.optionName,
    index = _ref2.index,
    selected = _ref2.selected,
    labelClicked = _ref2.labelClicked;
  var keySelected = selected.some(function (s) {
    return s.key === optionName;
  });
  var _useState = React.useState(keySelected),
    opened = _useState[0],
    setOpened = _useState[1];
  var configData = countersConfigurations[optionName];
  return React__default["default"].createElement(React.Fragment, {
    key: index
  }, React__default["default"].createElement("div", {
    className: "w-full flex"
  }, React__default["default"].createElement(MetadataTitle, {
    label: optionName,
    key: optionName
  }), configData.items && configData.items.length > 0 && React__default["default"].createElement("button", {
    type: "button",
    className: "ml-auto mr-3",
    onClick: function onClick() {
      return setOpened(function (opened) {
        return !opened;
      });
    }
  }, opened ? React__default["default"].createElement(outline.ChevronUpIcon, {
    className: "h-4 w-4 text-gray-300 "
  }) : React__default["default"].createElement(outline.ChevronDownIcon, {
    className: "h-4 w-4 text-gray-300 "
  }), React__default["default"].createElement("span", {
    className: "sr-only"
  }, "Open or Close metadata"))), opened && uniqBy((_configData$items = configData.items) != null ? _configData$items : [], function (group) {
    return group.label;
  }).map(function (group, i) {
    var _group$label;
    return React__default["default"].createElement(DropdownOption$3, {
      label: (_group$label = group.label) != null ? _group$label : '',
      value: {
        key: optionName,
        value: group.label
      },
      selected: selected.some(function (keyVal) {
        return keyVal.key === optionName && keyVal.value === group.label;
      }),
      labelClicked: labelClicked,
      pl: 2,
      key: optionName + group.label + i.toString()
    });
  }));
}
function MetadataTitle(_ref3) {
  var label = _ref3.label;
  return React__default["default"].createElement(react.Listbox.Option, {
    style: {
      paddingLeft: '1rem'
    },
    className: function className(_ref4) {
      var active = _ref4.active;
      return "relative cursor-default select-none py-2 pr-4 " + (active ? 'bg-gray-400 dark:bg-[#444154] text-white' : 'text-gray-300 dark:text-[#747189]');
    },
    value: label
  }, React__default["default"].createElement("span", {
    className: "w-full flex"
  }, React__default["default"].createElement("div", {
    className: "flex items-center"
  }, React__default["default"].createElement("label", {
    className: "text-sm ml-2 font-medium text-gray-900 dark:text-gray-300 block truncate lowercase first-letter:uppercase"
  }, label))));
}
function DropdownOption$3(_ref5) {
  var label = _ref5.label,
    value = _ref5.value,
    selected = _ref5.selected,
    labelClicked = _ref5.labelClicked,
    _ref5$pl = _ref5.pl,
    pl = _ref5$pl === void 0 ? 1 : _ref5$pl;
  return React__default["default"].createElement(react.Listbox.Option, {
    style: {
      paddingLeft: pl + 'rem'
    },
    className: function className(_ref6) {
      var active = _ref6.active;
      return "relative cursor-default select-none py-2 pr-4 " + (active ? 'bg-gray-400 dark:bg-[#444154] text-white' : 'text-gray-300 dark:text-[#747189]');
    },
    onClick: function onClick() {
      return labelClicked(value);
    },
    value: value
  }, React__default["default"].createElement("span", {
    className: "w-full flex"
  }, React__default["default"].createElement("div", {
    className: "flex items-center"
  }, React__default["default"].createElement("input", {
    checked: selected,
    type: "checkbox",
    className: "w-4 h-4 text-[#4D4DFE] bg-gray-100 border-gray-300 focus:ring-[#4D4DFE] dark:ring-offset-gray-800 focus:ring-2 dark:bg-[#322F46] dark:border-[#322F46]"
  }), React__default["default"].createElement("label", {
    className: "text-sm ml-2 font-medium text-gray-900 dark:text-gray-300 block truncate lowercase first-letter:uppercase " + (selected ? 'font-medium' : 'font-normal')
  }, label))));
}

function SingleSelect$1(_ref) {
  var options = _ref.options,
    selectedLabel = _ref.selectedLabel,
    onSelect = _ref.onSelect;
  return React__default["default"].createElement(react.Listbox, null, React__default["default"].createElement("div", {
    className: "relative"
  }, React__default["default"].createElement(react.Listbox.Button, {
    className: "relative rounded-lg text-left focus:outline-none text-sm flex items-center"
  }, React__default["default"].createElement("span", {
    className: "text-[#111111] dark:text-gray-300 text-sm mr-1"
  }, selectedLabel), React__default["default"].createElement("span", null, React__default["default"].createElement(outline.ChevronDownIcon, {
    className: "h-4 w-4 text-gray-200",
    "aria-hidden": "true"
  }))), React__default["default"].createElement(react.Transition, {
    as: React.Fragment,
    leave: "transition ease-in duration-100",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, React__default["default"].createElement(react.Listbox.Options, {
    className: "fixed mt-1 z-10 p-1 max-h-60 scrollbar-thin scrollbar-thumb-[#747189] scrollbar-track-[#272533] overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full rounded-md bg-gray-600 dark:bg-[#272533] py-1 text-base shadow-lg ring-1 ring-gray-500 dark:ring-black ring-opacity-5 focus:outline-none sm:text-sm"
  }, options.map(function (key, i) {
    return React__default["default"].createElement(DropdownOption$2, {
      label: key,
      value: key,
      selected: selectedLabel === key,
      labelClicked: onSelect,
      key: i
    });
  })))));
}
function DropdownOption$2(_ref2) {
  var label = _ref2.label,
    value = _ref2.value,
    selected = _ref2.selected,
    labelClicked = _ref2.labelClicked;
  return React__default["default"].createElement(react.Listbox.Option, {
    className: function className(_ref3) {
      var active = _ref3.active;
      return "relative cursor-default select-none py-2 pr-4 " + (active ? 'bg-gray-400 dark:bg-[#444154] text-white' : 'text-gray-300 dark:text-[#747189]');
    },
    onClick: function onClick() {
      return labelClicked(value);
    },
    value: value
  }, React__default["default"].createElement("span", {
    className: "w-full flex"
  }, React__default["default"].createElement("div", {
    className: "flex items-center"
  }, React__default["default"].createElement("input", {
    checked: selected,
    onChange: function onChange() {},
    type: "radio",
    className: "w-4 h-4 text-[#4D4DFE] bg-gray-100 border-gray-300 focus:ring-[#4D4DFE] dark:ring-offset-gray-800 focus:ring-2 dark:bg-[#322F46] dark:border-[#322F46]"
  }), React__default["default"].createElement("label", {
    className: "text-sm ml-2 font-medium text-gray-900 dark:text-gray-300 block truncate lowercase first-letter:uppercase " + (selected ? 'font-medium' : 'font-normal')
  }, label))));
}

var numberFormatter = /*#__PURE__*/new Intl.NumberFormat('en-US');
function getMetadataKeyValueDisplay(metadataKeyValue) {
  if (!metadataKeyValue.value) return metadataKeyValue.key;
  return metadataKeyValue.key + "." + metadataKeyValue.value;
}
function getBackgroundColorLayers(colorAxis, metadata, trends, countersConfiguration, totalItems) {
  return groupCounters(colorAxis, countersConfiguration).map(function (countersGroup) {
    var groups = countersGroup.map(function (counter) {
      return counter.calculationConfiguration.calculate(counter.metadataKeyValue, metadata, trends, countersConfiguration, totalItems);
    });
    if (!groups.some(function (group) {
      return group.result && group.result > 0;
    })) return '';
    var backgroundString = '';
    var totalPercentage = 0;
    groups.forEach(function (group) {
      var _group$counter$displa, _group$counter, _group$counter$displa2;
      backgroundString = backgroundString + ("," + ((_group$counter$displa = (_group$counter = group.counter) == null ? void 0 : (_group$counter$displa2 = _group$counter.display) == null ? void 0 : _group$counter$displa2.color) != null ? _group$counter$displa : 'rgba(255,0,0,0)') + " " + totalPercentage + "% " + (totalPercentage + group.result) + "%");
      totalPercentage += group.result;
    });
    backgroundString = backgroundString + ",rgba(255,0,0,0) " + totalPercentage + "% " + (100 - totalPercentage) + "%";
    return "linear-gradient(90deg" + backgroundString + ")";
  }).filter(function (str) {
    return str !== '';
  });
}
function groupCounters(counters, countersConfiguration) {
  return counters.reduce(function (groups, counter) {
    var index = groups.findIndex(function (group) {
      return group.length > 0 && areCountersCanBeGrouped(counter, group.at(0), countersConfiguration);
    });
    if (index !== -1) {
      groups[index].push(counter);
    } else {
      groups.push([counter]);
    }
    return groups;
  }, []);
}
function areCountersCanBeGrouped(firstCounter, secondCounter, countersConfiguration) {
  if (!firstCounter.metadataKeyValue || !secondCounter || !secondCounter.metadataKeyValue) return false;
  if (firstCounter.calculationConfiguration.name !== secondCounter.calculationConfiguration.name) return false;
  return areKeyValuesSameLevel(firstCounter.metadataKeyValue, secondCounter.metadataKeyValue, countersConfiguration);
}
function areKeyValuesSameLevel(firstKeyValue, secondKeyValue, countersConfiguration) {
  if (firstKeyValue.key !== secondKeyValue.key) return false;
  var firstKeyValueHasGroups = getMetadataKeyValueGroups(firstKeyValue, countersConfiguration).length > 0;
  var secondKeyValueHasGroups = getMetadataKeyValueGroups(secondKeyValue, countersConfiguration).length > 0;
  if (firstKeyValueHasGroups !== secondKeyValueHasGroups) return false;
  var firstKeyValueHasMultipleMembers = hasMultipleMembers(firstKeyValue, countersConfiguration);
  var secondKeyValueHasMultipleMembers = hasMultipleMembers(secondKeyValue, countersConfiguration);
  if (firstKeyValueHasMultipleMembers !== secondKeyValueHasMultipleMembers) return false;
  return true;
}

function CounterDisplay(_ref) {
  var counter = _ref.counter,
    metadata = _ref.metadata,
    countersConfiguration = _ref.countersConfiguration,
    trends = _ref.trends,
    totalItems = _ref.totalItems,
    width = _ref.width,
    _ref$maxWidth = _ref.maxWidth,
    maxWidth = _ref$maxWidth === void 0 ? '6ch' : _ref$maxWidth;
  var metadataKeyValue = counter.metadataKeyValue;
  if (!metadataKeyValue) return React__default["default"].createElement(React__default["default"].Fragment, null);
  var displayResult = counter.calculationConfiguration.calculate(metadataKeyValue, metadata, trends, countersConfiguration, totalItems);
  if (!displayResult.counter) return React__default["default"].createElement(React__default["default"].Fragment, null);
  return React__default["default"].createElement("span", {
    "data-tip": getMetadataKeyValueDisplay(metadataKeyValue) + " - " + counter.calculationConfiguration.name + getMetadataValueTitle(displayResult.metadataKey, displayResult.value) + ' - ' + numberFormatter.format(customNumberToFixed(displayResult.result)),
    "data-for": "global",
    className: "flex items-center text-sm " + (counter.calculationConfiguration.type !== 'trend' && displayResult.result < 1 ? 'text-gray-500 dark:text-gray-300' : displayResult.counter.display ? displayResult.counter.display.color === 'green' ? 'text-emerald-400' : displayResult.counter.display.color === 'red' ? 'text-red-400' : 'text-gray-500 dark:text-gray-300' : 'text-gray-500 dark:text-gray-300')
  }, counter.calculationConfiguration.type === 'trend' && displayResult.result > 0 ? React__default["default"].createElement("span", {
    className: "text-emerald-400",
    style: {
      width: '1em',
      height: '1em'
    }
  }, React__default["default"].createElement(solid.ArrowUpIcon, null)) : counter.calculationConfiguration.type === 'trend' && displayResult.result < 0 ? React__default["default"].createElement("span", {
    className: "text-red-400",
    style: {
      width: '1em',
      height: '1em'
    }
  }, React__default["default"].createElement(solid.ArrowDownIcon, null)) : counter.calculationConfiguration.type === 'trend' && React__default["default"].createElement("span", {
    className: "text-gray-300",
    style: {
      width: '1em',
      height: '1em'
    }
  }, React__default["default"].createElement(solid.ArrowsUpDownIcon, null)), displayResult.counter.display && displayResult.counter.display.icon !== null && React__default["default"].createElement("span", {
    style: {
      width: '1em',
      height: '1em'
    }
  }, displayResult.counter.display.icon), React__default["default"].createElement("span", {
    className: "" + (counter.calculationConfiguration.type === 'trend' ? displayResult.result > 0 ? 'text-emerald-400' : displayResult.result < 0 ? 'text-red-400' : 'text-gray-500 dark:text-gray-300' : ''),
    style: {
      width: width,
      maxWidth: maxWidth
    }
  }, getNumberDescription(displayResult.result, 2), counter.calculationConfiguration.type === 'percentage' || counter.calculationConfiguration.type === 'trend' ? '%' : null));
}
function getMetadataValueTitle(metadata, value) {
  if (metadata) {
    if (value) return "(" + metadata + "." + value + ")";
    return "(" + metadata + ")";
  }
  if (value) {
    return "(" + value + ")";
  }
  return '';
}

function MaxLabelDisplay(_ref) {
  var _lowerKeysMetadata$me;
  var metadataKey = _ref.metadataKey,
    metadata = _ref.metadata,
    countersConfiguration = _ref.countersConfiguration,
    labelClicked = _ref.labelClicked,
    width = _ref.width,
    maxWidth = _ref.maxWidth;
  var lowerKeysMetadata = toLowerKeys(metadata);
  var meta = (_lowerKeysMetadata$me = lowerKeysMetadata[metadataKey.toLowerCase()]) == null ? void 0 : _lowerKeysMetadata$me.reduce(function (prev, current) {
    return prev.count > current.count ? prev : current;
  });
  if (!meta) return React__default["default"].createElement(React__default["default"].Fragment, null);
  return React__default["default"].createElement(LabelDisplay, {
    metadataKey: metadataKey,
    value: meta.value,
    countersConfiguration: countersConfiguration,
    labelClicked: labelClicked,
    width: width,
    maxWidth: maxWidth
  });
}

function CountersLabelsDisplay(_ref) {
  var counters = _ref.counters,
    labels = _ref.labels,
    metadata = _ref.metadata,
    countersConfiguration = _ref.countersConfiguration,
    trends = _ref.trends,
    labelClicked = _ref.labelClicked,
    counterWidth = _ref.counterWidth,
    counterMaxWidth = _ref.counterMaxWidth,
    labelWidth = _ref.labelWidth,
    labelMaxWidth = _ref.labelMaxWidth,
    totalItems = _ref.totalItems;
  return React__default["default"].createElement("span", {
    className: "truncate flex items-center"
  }, counters.filter(function (counter) {
    return counter.metadataKeyValue !== null;
  }).map(function (counter, i) {
    return React__default["default"].createElement("div", {
      key: i,
      className: "mr-2"
    }, React__default["default"].createElement(CounterDisplay, {
      counter: counter,
      countersConfiguration: countersConfiguration,
      metadata: metadata,
      trends: trends,
      width: counterWidth,
      maxWidth: counterMaxWidth,
      totalItems: totalItems
    }));
  }), labels.map(function (label, i) {
    return React__default["default"].createElement("div", {
      key: i,
      className: "mr-1"
    }, React__default["default"].createElement(MaxLabelDisplay, {
      countersConfiguration: countersConfiguration,
      metadataKey: label,
      labelClicked: labelClicked,
      metadata: metadata,
      width: labelWidth,
      maxWidth: labelMaxWidth
    }));
  }));
}

function DropdownOption$1(_ref) {
  var label = _ref.label,
    value = _ref.value,
    _ref$pl = _ref.pl,
    pl = _ref$pl === void 0 ? 1 : _ref$pl;
  return React__default["default"].createElement(react.Listbox.Option, {
    style: {
      paddingLeft: pl + 'rem'
    },
    className: function className(_ref2) {
      var active = _ref2.active;
      return "relative cursor-default select-none py-2 pr-4 " + (active ? 'bg-gray-400 dark:bg-[#444154] text-white' : 'text-gray-300 dark:text-[#747189]');
    },
    value: value
  }, function (_ref3) {
    var selected = _ref3.selected;
    return React__default["default"].createElement("span", {
      className: "w-full flex"
    }, React__default["default"].createElement("div", {
      className: "flex items-center"
    }, React__default["default"].createElement("input", {
      checked: selected,
      type: "radio",
      className: "w-4 h-4 text-[#4D4DFE] bg-gray-100 border-gray-300 focus:ring-[#4D4DFE] dark:ring-offset-gray-800 focus:ring-2 dark:bg-[#322F46] dark:border-[#322F46]"
    }), React__default["default"].createElement("label", {
      className: "text-sm ml-2 font-medium text-gray-900 dark:text-gray-300 block truncate lowercase first-letter:uppercase " + (selected ? 'font-medium' : 'font-normal')
    }, label)));
  });
}

function KeyValueSingleSelect(_ref) {
  var metadataKeyValue = _ref.metadataKeyValue,
    countersConfigurations = _ref.countersConfigurations,
    selectedMetadataKeyValueChange = _ref.selectedMetadataKeyValueChange,
    placeholder = _ref.placeholder;
  return React__default["default"].createElement(react.Listbox, {
    value: metadataKeyValue,
    onChange: selectedMetadataKeyValueChange,
    by: function by(a, b) {
      return (a == null ? void 0 : a.key) === (b == null ? void 0 : b.key) && (a == null ? void 0 : a.value) === (b == null ? void 0 : b.value);
    }
  }, React__default["default"].createElement("div", {
    className: "relative"
  }, React__default["default"].createElement(react.Listbox.Button, {
    className: "relative rounded-lg bg-gray-600 dark:bg-[#272535] py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
  }, React__default["default"].createElement("span", {
    className: "block truncate lowercase first-letter:uppercase text-white"
  }, metadataKeyValue ? getMetadataKeyValueDisplay(metadataKeyValue) : placeholder), React__default["default"].createElement("span", {
    className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
  }, React__default["default"].createElement(solid.ChevronUpDownIcon, {
    className: "h-5 w-5 text-gray-400",
    "aria-hidden": "true"
  }))), React__default["default"].createElement(react.Transition, {
    as: React.Fragment,
    leave: "transition ease-in duration-100",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, React__default["default"].createElement(react.Listbox.Options, {
    className: "fixed mt-1 z-10 max-h-60 scrollbar-thin scrollbar-thumb-[#747189] scrollbar-track-[#272533] overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full rounded-md bg-gray-600 dark:bg-[#272533] py-1 text-base shadow-lg ring-1 ring-gray-500 dark:ring-black ring-opacity-5 focus:outline-none sm:text-sm"
  }, uniqBy(Object.keys(countersConfigurations).sort(function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }), function (key) {
    return key;
  }).map(function (key, i) {
    var _metadataKeyValue$key;
    return React__default["default"].createElement(CascadedOption, {
      countersConfigurations: countersConfigurations,
      optionName: key,
      index: i,
      selected: ((_metadataKeyValue$key = metadataKeyValue == null ? void 0 : metadataKeyValue.key) != null ? _metadataKeyValue$key : '') === key && (metadataKeyValue == null ? void 0 : metadataKeyValue.value) !== undefined,
      key: i
    });
  })))));
}
function CascadedOption(_ref2) {
  var _configData$items;
  var countersConfigurations = _ref2.countersConfigurations,
    optionName = _ref2.optionName,
    index = _ref2.index,
    selected = _ref2.selected;
  var _useState = React.useState(selected),
    opened = _useState[0],
    setOpened = _useState[1];
  var configData = countersConfigurations[optionName];
  return React__default["default"].createElement(React.Fragment, {
    key: index
  }, React__default["default"].createElement("div", {
    className: "w-full flex"
  }, React__default["default"].createElement(DropdownOption$1, {
    label: optionName,
    value: {
      key: optionName
    },
    key: optionName
  }), configData.items && configData.items.length > 0 && React__default["default"].createElement("button", {
    type: "button",
    className: "ml-auto mr-3",
    onClick: function onClick() {
      return setOpened(function (opened) {
        return !opened;
      });
    }
  }, opened ? React__default["default"].createElement(solid.ChevronUpIcon, {
    className: "h-4 w-4 text-gray-300 "
  }) : React__default["default"].createElement(solid.ChevronDownIcon, {
    className: "h-4 w-4 text-gray-300 "
  }), React__default["default"].createElement("span", {
    className: "sr-only"
  }, "Open or Close metadata"))), opened && uniqBy((_configData$items = configData.items) != null ? _configData$items : [], function (group) {
    return group.label;
  }).map(function (group, i) {
    var _group$label;
    return React__default["default"].createElement(DropdownOption$1, {
      label: (_group$label = group.label) != null ? _group$label : '',
      value: {
        key: optionName,
        value: group.label
      },
      pl: 2,
      key: optionName + group.label + i.toString()
    });
  }));
}

function Counters(_ref) {
  var countersConfigurations = _ref.countersConfigurations,
    calculationsConfigurations = _ref.calculationsConfigurations,
    currentCounters = _ref.currentCounters,
    countersChanged = _ref.countersChanged,
    addCounterText = _ref.addCounterText,
    title = _ref.title;
  var addCounter = function addCounter(newMetadataKeyValue) {
    var allowedCalculations = getCalculationTypes(calculationsConfigurations, newMetadataKeyValue, countersConfigurations);
    countersChanged([].concat(currentCounters, [{
      metadataKeyValue: newMetadataKeyValue,
      calculationConfiguration: getDefaultCalculation(allowedCalculations)
    }]));
  };
  var deleteCounter = function deleteCounter(index) {
    currentCounters.splice(index, 1);
    countersChanged([].concat(currentCounters));
  };
  var updateCounter = function updateCounter(index, updatedCounter) {
    currentCounters[index] = updatedCounter;
    countersChanged([].concat(currentCounters));
  };
  return React__default["default"].createElement("div", {
    className: "w-full"
  }, React__default["default"].createElement("p", {
    className: "text-xl text-gray-500 dark:text-white mb-1"
  }, title), React__default["default"].createElement("div", {
    className: "flex w-full flex-wrap items-center"
  }, currentCounters.map(function (addedCounter, i) {
    return React__default["default"].createElement("div", {
      className: "ml-1 mb-1",
      key: i
    }, React__default["default"].createElement(Counter, {
      counterData: addedCounter,
      countersConfigurations: countersConfigurations,
      calculationsConfigurations: calculationsConfigurations,
      counterDeleted: function counterDeleted() {
        return deleteCounter(i);
      },
      counterChanged: function counterChanged(counter) {
        return updateCounter(i, counter);
      }
    }));
  }), React__default["default"].createElement("div", {
    className: "ml-1"
  }, React__default["default"].createElement(KeyValueSingleSelect, {
    metadataKeyValue: null,
    countersConfigurations: countersConfigurations,
    selectedMetadataKeyValueChange: addCounter,
    placeholder: addCounterText
  }))));
}
function Counter(_ref2) {
  var counterData = _ref2.counterData,
    countersConfigurations = _ref2.countersConfigurations,
    calculationsConfigurations = _ref2.calculationsConfigurations,
    counterDeleted = _ref2.counterDeleted,
    counterChanged = _ref2.counterChanged;
  var selectedMetadataKeyValueChangeHandler = function selectedMetadataKeyValueChangeHandler(newMetadataKeyValue) {
    var allowedCalculations = getCalculationTypes(calculationsConfigurations, newMetadataKeyValue, countersConfigurations);
    counterChanged({
      metadataKeyValue: newMetadataKeyValue,
      calculationConfiguration: allowedCalculations.some(function (calc) {
        return calc.name === counterData.calculationConfiguration.name;
      }) ? counterData.calculationConfiguration : getDefaultCalculation(allowedCalculations)
    });
  };
  var counterChangeHandler = function counterChangeHandler(newCounter) {
    counterChanged({
      metadataKeyValue: counterData.metadataKeyValue,
      calculationConfiguration: newCounter
    });
  };
  return React__default["default"].createElement("div", {
    className: "w-full"
  }, React__default["default"].createElement("div", {
    className: "flex bg-gray-600 dark:bg-[#272535] p-1 w-fit"
  }, React__default["default"].createElement(KeyValueSingleSelect, {
    metadataKeyValue: counterData.metadataKeyValue,
    countersConfigurations: countersConfigurations,
    selectedMetadataKeyValueChange: selectedMetadataKeyValueChangeHandler,
    placeholder: "Select"
  }), React__default["default"].createElement(react.Listbox, {
    value: counterData.calculationConfiguration,
    onChange: counterChangeHandler,
    by: "name"
  }, React__default["default"].createElement("div", {
    className: "relative ml-1"
  }, React__default["default"].createElement(react.Listbox.Button, {
    className: "relative rounded-lg bg-gray-600 dark:bg-[#272535] py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
  }, React__default["default"].createElement("span", {
    className: "block truncate lowercase first-letter:uppercase text-white"
  }, counterData.calculationConfiguration.name), React__default["default"].createElement("span", {
    className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
  }, React__default["default"].createElement(solid.ChevronUpDownIcon, {
    className: "h-5 w-5 text-gray-400",
    "aria-hidden": "true"
  }))), React__default["default"].createElement(react.Transition, {
    as: React.Fragment,
    leave: "transition ease-in duration-100",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, React__default["default"].createElement(react.Listbox.Options, {
    className: "fixed mt-1 z-10 max-h-60 scrollbar-thin scrollbar-thumb-[#747189] scrollbar-track-[#272533] overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full rounded-md bg-gray-600 dark:bg-[#272533] py-1 text-base shadow-lg ring-1 ring-gray-500 dark:ring-black ring-opacity-5 focus:outline-none sm:text-sm"
  }, getCalculationTypes(calculationsConfigurations, counterData.metadataKeyValue, countersConfigurations).sort(function (a, b) {
    var textA = a.name.toLowerCase();
    var textB = b.name.toLowerCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  }).map(function (counter) {
    return React__default["default"].createElement(DropdownOption$1, {
      label: counter.name,
      value: counter,
      key: counter.name
    });
  }))))), React__default["default"].createElement("button", {
    type: "button",
    className: "ml-1",
    onClick: counterDeleted
  }, React__default["default"].createElement(solid.XMarkIcon, {
    className: "h-4 w-4 text-gray-200 dark:text-gray-600 hover:scale-125 transition duration-100 ease-linear"
  }), React__default["default"].createElement("span", {
    className: "sr-only"
  }, "Delete counter"))));
}
function getCalculationTypes(calculationTypes, selectedMetadataKeyValue, countersConfiguration) {
  if (!selectedMetadataKeyValue) return calculationTypes.filter(function (calc) {
    return !calc.hasGroups && !calc.hasMultipleMembers;
  });
  var hasGroups = getMetadataKeyValueGroups(selectedMetadataKeyValue, countersConfiguration).length > 0;
  if (hasGroups) return calculationTypes;
  var keyValueHasMultipleMembers = hasMultipleMembers(selectedMetadataKeyValue, countersConfiguration);
  if (keyValueHasMultipleMembers) return calculationTypes.filter(function (calc) {
    return !calc.hasGroups;
  });
  return calculationTypes.filter(function (calc) {
    return !calc.hasGroups && !calc.hasMultipleMembers;
  });
}
function getDefaultCalculation(allowedCalculations) {
  var _ref3, _allowedCalculations$;
  return (_ref3 = (_allowedCalculations$ = allowedCalculations.find(function (calc) {
    return calc.name === topGroupPercentCalculationName;
  })) != null ? _allowedCalculations$ : allowedCalculations.find(function (calc) {
    return calc.name === topValuePercentCalculationName;
  })) != null ? _ref3 : allowedCalculations[0];
}

function Labels(_ref) {
  var currentLabels = _ref.currentLabels,
    labelsOptions = _ref.labelsOptions,
    labelsChanged = _ref.labelsChanged,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? 'Labels' : _ref$title;
  var _useState = React.useState(currentLabels),
    selectedLabels = _useState[0],
    setSelectedLabels = _useState[1];
  var handleChange = function handleChange(newLabels) {
    setSelectedLabels(newLabels);
    labelsChanged(newLabels);
  };
  return React__default["default"].createElement("div", {
    className: "w-full"
  }, React__default["default"].createElement("p", {
    className: "text-xl text-gray-500 dark:text-white mb-1"
  }, title), React__default["default"].createElement(react.Listbox, {
    value: selectedLabels,
    onChange: handleChange,
    multiple: true
  }, React__default["default"].createElement("div", {
    className: "relative"
  }, React__default["default"].createElement(react.Listbox.Button, {
    className: "relative rounded-lg bg-gray-600 dark:bg-[#272535] py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
  }, React__default["default"].createElement("span", {
    className: "block truncate lowercase first-letter:uppercase text-white"
  }, selectedLabels.length === 0 ? 'Select' : selectedLabels.length + " labels selected"), React__default["default"].createElement("span", {
    className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
  }, React__default["default"].createElement(solid.ChevronUpDownIcon, {
    className: "h-5 w-5 text-gray-400",
    "aria-hidden": "true"
  }))), React__default["default"].createElement(react.Transition, {
    as: React.Fragment,
    leave: "transition ease-in duration-100",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, React__default["default"].createElement(react.Listbox.Options, {
    className: "fixed mt-1 z-10 max-h-60 scrollbar-thin scrollbar-thumb-[#747189] scrollbar-track-[#272533] overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full rounded-md bg-gray-600 dark:bg-[#272533] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
  }, uniqBy(labelsOptions, function (key) {
    return key;
  }).map(function (key) {
    return React__default["default"].createElement(DropdownOption$1, {
      key: key,
      label: key,
      value: key
    });
  }))))));
}

function CustomizeTab(_ref) {
  var currentCounters = _ref.currentCounters,
    selectedLabels = _ref.selectedLabels,
    countersConfigurations = _ref.countersConfigurations,
    calculationsConfigurations = _ref.calculationsConfigurations,
    labelsOptions = _ref.labelsOptions,
    countersChanged = _ref.countersChanged,
    labelsChanged = _ref.labelsChanged,
    currentColorsAxis = _ref.currentColorsAxis,
    selectedSizeAxis = _ref.selectedSizeAxis,
    colorsAxisChanged = _ref.colorsAxisChanged,
    sizeAxisChanged = _ref.sizeAxisChanged;
  return React__default["default"].createElement("div", {
    className: "max-w-sm"
  }, React__default["default"].createElement(react.Popover, {
    className: "relative"
  }, function (_ref2) {
    var open = _ref2.open;
    return React__default["default"].createElement(React__default["default"].Fragment, null, React__default["default"].createElement(react.Popover.Button, {
      className: "\n                " + (open ? '' : 'text-opacity-90') + "\n                group inline-flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-500 dark:text-white hover:text-opacity-100 focus:outline-none "
    }, React__default["default"].createElement("span", null, "Customize"), React__default["default"].createElement(solid.ChevronDownIcon, {
      className: (open ? '' : 'text-opacity-70') + "\n                  ml-2 h-5 w-5 text-blue-700 transition duration-150 ease-in-out group-hover:text-opacity-80",
      "aria-hidden": "true"
    })), React__default["default"].createElement(react.Transition, {
      as: React.Fragment,
      enter: "transition ease-out duration-200",
      enterFrom: "opacity-0 translate-y-1",
      enterTo: "opacity-100 translate-y-0",
      leave: "transition ease-in duration-150",
      leaveFrom: "opacity-100 translate-y-0",
      leaveTo: "opacity-0 translate-y-1"
    }, React__default["default"].createElement(react.Popover.Panel, {
      tabIndex: 0,
      className: "absolute z-10 mt-3 w-screen max-w-sm transform lg:max-w-4xl"
    }, React__default["default"].createElement("div", {
      className: "overflow-hidden rounded-lg shadow-lg ring-1 ring-gray-500 dark:ring-black ring-opacity-5"
    }, React__default["default"].createElement("div", {
      className: "relative bg-white dark:bg-[#1D1C27] p-5 max-h-[85vh] text-gray-500 dark:text-white"
    }, React__default["default"].createElement("div", {
      className: "w-full"
    }, React__default["default"].createElement("p", {
      className: "text-xl mb-1"
    }, "Size Axis"), React__default["default"].createElement(KeyValueSingleSelect, {
      metadataKeyValue: selectedSizeAxis,
      placeholder: "Select",
      countersConfigurations: countersConfigurations,
      selectedMetadataKeyValueChange: sizeAxisChanged
    })), React__default["default"].createElement("div", {
      className: "w-full mt-2"
    }, React__default["default"].createElement(Counters, {
      countersConfigurations: countersConfigurations,
      calculationsConfigurations: calculationsConfigurations.filter(function (calc) {
        return calc.type === 'percentage';
      }),
      currentCounters: currentColorsAxis,
      countersChanged: colorsAxisChanged,
      addCounterText: "Add axis",
      title: "Color Axis"
    })), React__default["default"].createElement("div", {
      className: "w-full mt-2"
    }, React__default["default"].createElement(Counters, {
      countersConfigurations: countersConfigurations,
      calculationsConfigurations: calculationsConfigurations,
      currentCounters: currentCounters,
      countersChanged: countersChanged,
      addCounterText: "Add counter",
      title: "Counters"
    })), React__default["default"].createElement("div", {
      className: "w-full mt-2"
    }, React__default["default"].createElement(Labels, {
      currentLabels: selectedLabels,
      labelsOptions: labelsOptions.sort(),
      labelsChanged: labelsChanged
    })))))));
  }));
}

function Datepicker(_ref) {
  var selectedDate = _ref.selectedDate,
    dateChanged = _ref.dateChanged,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? 'Select Date' : _ref$placeholder;
  var DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var _useState = React.useState([]),
    dayCount = _useState[0],
    setDayCount = _useState[1];
  var _useState2 = React.useState([]),
    blankDays = _useState2[0],
    setBlankDays = _useState2[1];
  var _useState3 = React.useState(false),
    showDatepicker = _useState3[0],
    setShowDatepicker = _useState3[1];
  var _useState4 = React.useState(new Date()),
    datepickerHeaderDate = _useState4[0],
    setDatepickerHeaderDate = _useState4[1];
  var _useState5 = React.useState('date'),
    type = _useState5[0],
    setType = _useState5[1];
  var decrement = function decrement() {
    switch (type) {
      case 'date':
        setDatepickerHeaderDate(function (prev) {
          return dateFns.subMonths(prev, 1);
        });
        break;
      case 'month':
        setDatepickerHeaderDate(function (prev) {
          return dateFns.subYears(prev, 1);
        });
        break;
      case 'year':
        setDatepickerHeaderDate(function (prev) {
          return dateFns.subMonths(prev, 1);
        });
        break;
    }
  };
  var increment = function increment() {
    switch (type) {
      case 'date':
        setDatepickerHeaderDate(function (prev) {
          return dateFns.addMonths(prev, 1);
        });
        break;
      case 'month':
        setDatepickerHeaderDate(function (prev) {
          return dateFns.addYears(prev, 1);
        });
        break;
      case 'year':
        setDatepickerHeaderDate(function (prev) {
          return dateFns.subMonths(prev, 1);
        });
        break;
    }
  };
  var isToday = function isToday(date) {
    return selectedDate && dateFns.isEqual(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), date), selectedDate);
  };
  var setDateValue = function setDateValue(date) {
    return function () {
      dateChanged(new Date(datepickerHeaderDate.getFullYear(), datepickerHeaderDate.getMonth(), date));
      setShowDatepicker(false);
    };
  };
  var getDayCount = function getDayCount(date) {
    var daysInMonth = dateFns.getDaysInMonth(date);
    // find where to start calendar day of week
    var dayOfWeek = dateFns.getDay(new Date(date.getFullYear(), date.getMonth(), 1));
    var blankDaysArray = [];
    for (var i = 1; i <= dayOfWeek; i++) {
      blankDaysArray.push(i);
    }
    var daysArray = [];
    for (var _i = 1; _i <= daysInMonth; _i++) {
      daysArray.push(_i);
    }
    setBlankDays(blankDaysArray);
    setDayCount(daysArray);
  };
  var isSelectedMonth = function isSelectedMonth(month) {
    return selectedDate && dateFns.isEqual(new Date(selectedDate.getFullYear(), month, selectedDate.getDate()), selectedDate);
  };
  var setMonthValue = function setMonthValue(month) {
    return function () {
      setDatepickerHeaderDate(new Date(datepickerHeaderDate.getFullYear(), month, datepickerHeaderDate.getDate()));
      setType('date');
    };
  };
  var toggleDatepicker = function toggleDatepicker() {
    return setShowDatepicker(function (prev) {
      return !prev;
    });
  };
  var showMonthPicker = function showMonthPicker() {
    return setType('month');
  };
  var showYearPicker = function showYearPicker() {
    return setType('date');
  };
  React.useEffect(function () {
    getDayCount(datepickerHeaderDate);
  }, [datepickerHeaderDate]);
  return React__default["default"].createElement("div", {
    className: "mb-5 w-64"
  }, React__default["default"].createElement("label", {
    htmlFor: "datepicker",
    className: "font-bold mb-1 text-gray-500 dark:text-white block"
  }, placeholder), React__default["default"].createElement("div", {
    className: "relative"
  }, React__default["default"].createElement("input", {
    type: "hidden",
    name: "date"
  }), React__default["default"].createElement("input", {
    type: "text",
    readOnly: true,
    className: "cursor-pointer w-full pl-4 pr-10 py-3 leading-none rounded-lg shadow-sm focus:outline-none focus:shadow-outline bg-gray-300 dark:bg-[#2C293D] text-gray-600 dark:text-white font-medium",
    placeholder: "Select date",
    value: selectedDate ? dateFns.format(selectedDate, 'dd/MM/yyyy') : '',
    onClick: toggleDatepicker
  }), React__default["default"].createElement("div", {
    className: "cursor-pointer absolute top-0 right-0 px-3 py-2",
    onClick: toggleDatepicker
  }, React__default["default"].createElement("svg", {
    className: "h-6 w-6 text-gray-600 dark:text-gray-300",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, React__default["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
  }))), showDatepicker && React__default["default"].createElement("div", {
    className: "bg-gray-300 dark:bg-[#272535] mt-1 rounded-lg shadow p-4 fixed z-10 overflow-auto",
    style: {
      width: '16rem'
    }
  }, React__default["default"].createElement("div", {
    className: "flex justify-between items-center mb-2"
  }, React__default["default"].createElement("div", null, React__default["default"].createElement("button", {
    type: "button",
    className: "transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-400 hover:text-gray-900 dark:hover:bg-gray-200 dark:hover:text-gray-700 p-1 rounded-full",
    onClick: decrement
  }, React__default["default"].createElement("svg", {
    className: "h-6 w-6 text-gray-500 dark:text-gray-300 hover:text-gray-700 inline-flex",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, React__default["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 19l-7-7 7-7"
  })))), type === 'date' && React__default["default"].createElement("div", {
    onClick: showMonthPicker,
    className: "flex-grow p-1 text-lg font-bold text-gray-400 dark:text-gray-200 cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-200 hover:text-gray-700 rounded-lg"
  }, React__default["default"].createElement("p", {
    className: "text-center"
  }, dateFns.format(datepickerHeaderDate, 'MMMM'))), React__default["default"].createElement("div", {
    onClick: showYearPicker,
    className: "flex-grow p-1 text-lg font-bold text-gray-400 dark:text-gray-200 cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-200 hover:text-gray-700 rounded-lg"
  }, React__default["default"].createElement("p", {
    className: "text-center"
  }, dateFns.format(datepickerHeaderDate, 'yyyy'))), React__default["default"].createElement("div", null, React__default["default"].createElement("button", {
    type: "button",
    className: "transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-200 hover:text-gray-700 p-1 rounded-full",
    onClick: increment
  }, React__default["default"].createElement("svg", {
    className: "h-6 w-6 text-gray-500 dark:text-gray-300 hover:text-gray-700 inline-flex",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, React__default["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 5l7 7-7 7"
  }))))), type === 'date' && React__default["default"].createElement(React__default["default"].Fragment, null, React__default["default"].createElement("div", {
    className: "flex flex-wrap mb-3 -mx-1"
  }, DAYS.map(function (day, i) {
    return React__default["default"].createElement("div", {
      key: i,
      style: {
        width: '14.26%'
      },
      className: "px-1"
    }, React__default["default"].createElement("div", {
      className: "text-gray-400 font-medium text-center text-xs"
    }, day));
  })), React__default["default"].createElement("div", {
    className: "flex flex-wrap -mx-1"
  }, blankDays.map(function (_, i) {
    return React__default["default"].createElement("div", {
      key: i,
      style: {
        width: '14.26%'
      },
      className: "text-center border p-1 border-transparent text-sm"
    });
  }), dayCount.map(function (d, i) {
    return React__default["default"].createElement("div", {
      key: i,
      style: {
        width: '14.26%'
      },
      className: "px-1 mb-1"
    }, React__default["default"].createElement("div", {
      onClick: setDateValue(d),
      className: "cursor-pointer text-center text-sm rounded-full leading-loose transition ease-in-out duration-100 " + (isToday(d) ? 'bg-blue-500 text-gray-300 dark:text-white' : 'text-gray-400 dark:text-gray-200 hover:bg-blue-200')
    }, d));
  }))), type === 'month' && React__default["default"].createElement("div", {
    className: "flex flex-wrap -mx-1"
  }, Array(12).fill(null).map(function (_, i) {
    return React__default["default"].createElement("div", {
      key: i,
      onClick: setMonthValue(i),
      style: {
        width: '25%'
      }
    }, React__default["default"].createElement("div", {
      className: "cursor-pointer p-5 font-semibold text-center text-sm rounded-lg hover:bg-gray-200 hover:text-gray-700 " + (isSelectedMonth(i) ? 'bg-blue-500 text-gray-500 dark:text-white' : 'text-gray-600 dark:text-gray-200 hover:bg-blue-200')
    }, dateFns.format(new Date(datepickerHeaderDate.getFullYear(), i, datepickerHeaderDate.getDate()), 'MMM')));
  })), ' ')));
}

function DatesFilters(_ref) {
  var fromDate = _ref.fromDate,
    toDate = _ref.toDate,
    fromDateChanged = _ref.fromDateChanged,
    toDateChanged = _ref.toDateChanged,
    trendPeriods = _ref.trendPeriods,
    trendPeriodsChanged = _ref.trendPeriodsChanged;
  return React__default["default"].createElement(react.Popover, {
    className: "relative"
  }, function (_ref2) {
    var open = _ref2.open;
    return React__default["default"].createElement(React__default["default"].Fragment, null, React__default["default"].createElement(react.Popover.Button, {
      className: "\n                " + (open ? '' : 'text-opacity-90') + "\n                group inline-flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-500 dark:text-white hover:text-opacity-100 focus:outline-none "
    }, React__default["default"].createElement(solid.CalendarDaysIcon, {
      className: "h-7 w-7"
    }), React__default["default"].createElement(solid.ChevronDownIcon, {
      className: (open ? '' : 'text-opacity-70') + "\n                  ml-2 h-5 w-5 text-blue-700 transition duration-150 ease-in-out group-hover:text-opacity-80",
      "aria-hidden": "true"
    })), React__default["default"].createElement(react.Transition, {
      as: React.Fragment,
      enter: "transition ease-out duration-200",
      enterFrom: "opacity-0 translate-y-1",
      enterTo: "opacity-100 translate-y-0",
      leave: "transition ease-in duration-150",
      leaveFrom: "opacity-100 translate-y-0",
      leaveTo: "opacity-0 translate-y-1"
    }, React__default["default"].createElement(react.Popover.Panel, {
      tabIndex: 0,
      className: "absolute z-10 mt-3 transform max-w-md"
    }, React__default["default"].createElement("div", {
      className: "overflow-hidden rounded-lg shadow-lg ring-1 ring-gray-500 dark:ring-black ring-opacity-5"
    }, React__default["default"].createElement("div", {
      className: "relative bg-white dark:bg-[#272535] p-5"
    }, React__default["default"].createElement("div", {
      className: "w-full"
    }, React__default["default"].createElement("div", {
      className: "flex flex-wrap w-full mt-3 justify-between"
    }, React__default["default"].createElement("div", {
      className: "flex items-center"
    }, React__default["default"].createElement(Datepicker, {
      selectedDate: fromDate,
      dateChanged: fromDateChanged,
      placeholder: "From"
    }), React__default["default"].createElement("div", {
      className: "ml-1"
    }, React__default["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        return fromDateChanged(null);
      }
    }, React__default["default"].createElement(solid.XMarkIcon, {
      className: "h-4 w-4 text-gray-500 dark:text-gray-200 hover:scale-125 transition duration-100 ease-linear"
    }), React__default["default"].createElement("span", {
      className: "sr-only"
    }, "Clear dates filters")))), React__default["default"].createElement("div", {
      className: "flex items-center"
    }, React__default["default"].createElement(Datepicker, {
      selectedDate: toDate,
      dateChanged: toDateChanged,
      placeholder: "To"
    }), React__default["default"].createElement("div", {
      className: "ml-1"
    }, React__default["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        return toDateChanged(null);
      }
    }, React__default["default"].createElement(solid.XMarkIcon, {
      className: "h-4 w-4 text-gray-200 hover:scale-125 transition duration-100 ease-linear"
    }), React__default["default"].createElement("span", {
      className: "sr-only"
    }, "Clear dates filters")))), trendPeriods !== undefined && trendPeriodsChanged && React__default["default"].createElement("div", {
      className: "flex items-center"
    }, React__default["default"].createElement("div", null, React__default["default"].createElement("label", {
      htmlFor: "small-input",
      className: "block mb-2 text-sm font-medium text-gray-500 dark:text-gray-300"
    }, "Trend periods amount"), React__default["default"].createElement("input", {
      type: "number",
      id: "small-input",
      onChange: function onChange(e) {
        return trendPeriodsChanged(Number(e.target.value));
      },
      value: trendPeriods,
      className: "block p-2 w-1/2 rounded-lg border sm:text-xs bg-gray-300 dark:bg-gray-700 border-gray-300 dark:border-gray-600 placeholder-gray-700 dark:placeholder-gray-400 text-gray-500 dark:text-white focus:ring-blue-500 focus:border-blue-500"
    }))))))))));
  });
}

function ItemActions(_ref) {
  var node = _ref.node,
    searchSimilarClusters = _ref.searchSimilarClusters,
    splitPhrase = _ref.splitPhrase,
    mergeClusters = _ref.mergeClusters,
    translationEnabled = _ref.translationEnabled;
  var controller = React.useRef(null);
  var _useState = React.useState(false),
    isOpen = _useState[0],
    setIsOpen = _useState[1];
  var _useState2 = React.useState(false),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = React.useState(null),
    action = _useState3[0],
    setAction = _useState3[1];
  var _useState4 = React.useState(null),
    similarClusters = _useState4[0],
    setSimilarClusters = _useState4[1];
  var _useState5 = React.useState(null),
    selectedClusters = _useState5[0],
    setSelectedClusters = _useState5[1];
  var _useState6 = React.useState(null),
    searchText = _useState6[0],
    setSearchText = _useState6[1];
  var _useState7 = React.useState(null),
    error = _useState7[0],
    setError = _useState7[1];
  var _useState8 = React.useState(false),
    mergeTo = _useState8[0],
    setMergeTo = _useState8[1];
  React.useEffect(function () {
    if (!node || !searchSimilarClusters) return;
    if (node.type === 'Cluster') {
      setAction('Merge');
      setSearchText('');
    } else if (node.type === 'Phrase') {
      setAction('Split');
    }
    setIsOpen(true);
  }, [node]);
  React.useEffect(function () {
    if (controller.current && !isOpen) controller.current.abort();
    if (!isOpen) {
      setError(null);
      setLoading(false);
      setAction(null);
      setSimilarClusters(null);
      setSelectedClusters(null);
      setSearchText(null);
      controller.current = new AbortController();
    }
  }, [isOpen]);
  React.useEffect(function () {
    if (searchText === null || !node || !searchSimilarClusters) return;
    var fetchData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(controller) {
        var res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setLoading(true);
              _context.next = 4;
              return searchSimilarClusters(searchText === '' ? node.text : searchText, controller);
            case 4:
              res = _context.sent;
              setSimilarClusters(res);
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);
            case 11:
              _context.prev = 11;
              setLoading(false);
              return _context.finish(11);
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 8, 11, 14]]);
      }));
      return function fetchData(_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    var currentController = new AbortController();
    fetchData(currentController)["catch"](function (e) {
      console.error(e);
    });
    return function () {
      currentController.abort();
    };
  }, [searchText, node, searchSimilarClusters]);
  function closeModal() {
    setIsOpen(false);
    setSelectedClusters(null);
    setMergeTo(false);
    setSearchText(null);
    setError(null);
    setLoading(false);
    setSimilarClusters(null);
    setAction(null);
  }
  function invokeAction() {
    return _invokeAction.apply(this, arguments);
  }
  function _invokeAction() {
    _invokeAction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var res, firstSelectedCluster, _res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!(!splitPhrase || !mergeClusters || !controller.current || !node)) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return", closeModal());
          case 2:
            setError(null);
            setLoading(true);
            if (!(action === 'Split')) {
              _context2.next = 11;
              break;
            }
            _context2.next = 7;
            return splitPhrase(node.id, controller.current);
          case 7:
            res = _context2.sent;
            if (res.message) {
              setError(res.message);
            } else {
              closeModal();
            }
            _context2.next = 23;
            break;
          case 11:
            firstSelectedCluster = selectedClusters == null ? void 0 : selectedClusters.at(0);
            if (!(selectedClusters && selectedClusters.length > 0 && firstSelectedCluster)) {
              _context2.next = 23;
              break;
            }
            if (!mergeTo) {
              _context2.next = 19;
              break;
            }
            _context2.next = 16;
            return mergeClusters([node.id], firstSelectedCluster, controller.current);
          case 16:
            _res = _context2.sent;
            _context2.next = 22;
            break;
          case 19:
            _context2.next = 21;
            return mergeClusters(selectedClusters, node.id, controller.current);
          case 21:
            _res = _context2.sent;
          case 22:
            if (_res && _res.message) {
              setError(_res.message);
            } else {
              closeModal();
            }
          case 23:
            setLoading(false);
          case 24:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _invokeAction.apply(this, arguments);
  }
  function clusterSelected(clusterId, selected) {
    if (selected) return setSelectedClusters(function (current) {
      var _current$filter;
      return (_current$filter = current == null ? void 0 : current.filter(function (c) {
        return c !== clusterId;
      })) != null ? _current$filter : [];
    });
    if (mergeTo) {
      return setSelectedClusters([clusterId]);
    }
    return setSelectedClusters(function (selected) {
      return [].concat(selected != null ? selected : [], [clusterId]);
    });
  }
  return React__default["default"].createElement(react.Transition, {
    appear: true,
    show: isOpen,
    as: React.Fragment
  }, React__default["default"].createElement(react.Dialog, {
    as: "div",
    className: "relative z-10",
    onClose: closeModal
  }, React__default["default"].createElement(react.Transition.Child, {
    as: React.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, React__default["default"].createElement("div", {
    className: "fixed inset-0 bg-opacity-25"
  })), React__default["default"].createElement("div", {
    className: "fixed inset-0 overflow-y-auto"
  }, React__default["default"].createElement("div", {
    className: "flex min-h-full items-center justify-center p-4 text-center"
  }, React__default["default"].createElement(react.Transition.Child, {
    as: React.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 scale-95",
    enterTo: "opacity-100 scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 scale-100",
    leaveTo: "opacity-0 scale-95"
  }, React__default["default"].createElement(react.Dialog.Panel, {
    className: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-[#272535] p-6 text-left align-middle shadow-xl transition-all"
  }, React__default["default"].createElement(react.Dialog.Title, {
    as: "h3",
    className: "text-center text-lg font-medium leading-6 text-gray-900 dark:text-white"
  }, action === 'Merge' ? React__default["default"].createElement("div", null, "Merging:") : React__default["default"].createElement("span", null, "Split to a new cluster:"), React__default["default"].createElement("span", {
    className: "group relative flex w-full"
  }, "\"", React__default["default"].createElement("span", {
    className: "truncate"
  }, node == null ? void 0 : node.text), "\"", React__default["default"].createElement("span", {
    className: "absolute hidden group-hover:flex -left-5 -translate-y-full px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700"
  }, node == null ? void 0 : node.text))), error && React__default["default"].createElement("p", {
    id: "filled_error_help",
    className: "mt-2 text-xs text-red-600 dark:text-red-400"
  }, React__default["default"].createElement("span", {
    className: "font-medium"
  }, "Oh, snapp!"), " ", error), searchText !== null ? React__default["default"].createElement("div", null, React__default["default"].createElement("input", {
    type: "text",
    value: searchText,
    onChange: function onChange(e) {
      return setSearchText(e.target.value);
    },
    id: "search",
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    placeholder: "Search for clusters",
    required: true
  })) : null, action === 'Merge' ? React__default["default"].createElement("div", {
    className: "flex w-full mt-1 items-center align-middle justify-center"
  }, React__default["default"].createElement("span", {
    className: "mr-1 " + (mergeTo ? 'text-gray-400 ' : 'text-white')
  }, "Merge From"), React__default["default"].createElement(react.Switch, {
    checked: mergeTo,
    onChange: function onChange() {
      return setMergeTo(function (state) {
        setSelectedClusters([]);
        return !state;
      });
    },
    className: (mergeTo ? 'bg-teal-900' : 'bg-teal-700') + "\n          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75"
  }, React__default["default"].createElement("span", {
    className: "sr-only"
  }, "Use setting"), React__default["default"].createElement("span", {
    "aria-hidden": "true",
    className: (mergeTo ? 'translate-x-9' : 'translate-x-0') + "\n            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
  })), React__default["default"].createElement("span", {
    className: "ml-1 " + (mergeTo ? 'text-white ' : 'text-gray-400')
  }, "Merge To")) : null, loading ? React__default["default"].createElement("div", {
    className: "grow w-full justify-center items-center flex mt-2"
  }, React__default["default"].createElement("div", {
    className: "text-center"
  }, React__default["default"].createElement("div", {
    role: "status"
  }, React__default["default"].createElement("svg", {
    className: "inline mr-2 w-8 h-8 text-gray-200 animate-spin fill-blue-600",
    viewBox: "0 0 100 101",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default["default"].createElement("path", {
    d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
    fill: "currentColor"
  }), React__default["default"].createElement("path", {
    d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
    fill: "currentFill"
  })), React__default["default"].createElement("span", {
    className: "sr-only"
  }, "Loading...")))) : similarClusters && React__default["default"].createElement("div", {
    className: "overflow-y-auto max-h-64 mt-2"
  }, React__default["default"].createElement(ClustersList, {
    clusters: similarClusters.filter(function (c) {
      return c.id.toString() !== (node == null ? void 0 : node.id);
    }),
    selected: selectedClusters,
    clusterSelected: clusterSelected,
    translationEnabled: translationEnabled
  })), React__default["default"].createElement("div", {
    className: "mt-4 flex justify-between"
  }, React__default["default"].createElement("button", {
    type: "button",
    className: "text-center w-1/3 rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2",
    onClick: invokeAction,
    disabled: loading || action === 'Merge' && !selectedClusters
  }, action), React__default["default"].createElement("button", {
    type: "button",
    className: "text-center w-1/3 rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
    onClick: closeModal
  }, "Cancel"))))))));
}
function ClustersList(_ref3) {
  var clusters = _ref3.clusters,
    selected = _ref3.selected,
    clusterSelected = _ref3.clusterSelected,
    translationEnabled = _ref3.translationEnabled;
  return React__default["default"].createElement("div", {
    className: "w-full pr-1 py-2"
  }, React__default["default"].createElement("div", {
    className: "mx-auto w-full max-w-md"
  }, React__default["default"].createElement(react.RadioGroup, null, React__default["default"].createElement(react.RadioGroup.Label, {
    className: "sr-only"
  }, "Select Destination Cluster"), React__default["default"].createElement("div", {
    className: "space-y-2"
  }, clusters.map(function (cluster) {
    var _selected$some;
    var checked = (_selected$some = selected == null ? void 0 : selected.some(function (c) {
      return c === cluster.id;
    })) != null ? _selected$some : false;
    return React__default["default"].createElement(react.RadioGroup.Option, {
      key: cluster.id,
      value: cluster,
      onClick: function onClick() {
        return clusterSelected(cluster.id, checked);
      },
      className: "\n                  " + (checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white') + "\n                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none"
    }, React__default["default"].createElement("div", {
      className: "flex w-full items-center justify-between"
    }, React__default["default"].createElement("div", {
      className: "flex items-center"
    }, React__default["default"].createElement("div", {
      className: "text-sm"
    }, React__default["default"].createElement(react.RadioGroup.Label, {
      as: "p",
      className: "font-medium  " + (checked ? 'text-white' : 'text-gray-900')
    }, translationEnabled && cluster.translation ? cluster.translation : cluster.text))), checked && React__default["default"].createElement("div", {
      className: "shrink-0 text-white"
    }, React__default["default"].createElement(CheckIcon, {
      className: "h-6 w-6"
    }))));
  })))));
}
function CheckIcon(props) {
  return React__default["default"].createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), React__default["default"].createElement("circle", {
    cx: 12,
    cy: 12,
    r: 12,
    fill: "#fff",
    opacity: "0.2"
  }), React__default["default"].createElement("path", {
    d: "M7 13l3 3 7-7",
    stroke: "#fff",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

var defaultCountersConfigurations = {
  signals: {
    display: {
      color: 'white',
      icon: /*#__PURE__*/React__default["default"].createElement("span", {
        className: "flex flex-col",
        style: {
          height: '1em'
        }
      }, /*#__PURE__*/React__default["default"].createElement(outline.HandThumbUpIcon, null), /*#__PURE__*/React__default["default"].createElement(outline.HandThumbDownIcon, null))
    },
    items: [{
      label: 'positive',
      display: {
        color: 'green',
        icon: /*#__PURE__*/React__default["default"].createElement(outline.FaceSmileIcon, null)
      },
      members: [{
        metadataName: 'emotion',
        values: ['happiness']
      }, {
        metadataName: 'sentiment',
        values: ['POS']
      }],
      isGroup: true
    }, {
      label: 'negative',
      display: {
        color: 'red',
        icon: /*#__PURE__*/React__default["default"].createElement(outline.FaceFrownIcon, null)
      },
      members: [{
        metadataName: 'emotion',
        values: ['anger', 'sadness']
      }, {
        metadataName: 'sentiment',
        values: ['NEG']
      }],
      isGroup: true
    }]
  },
  person: {
    display: {
      color: 'white',
      icon: /*#__PURE__*/React__default["default"].createElement(outline.UserIcon, null)
    }
  },
  topic: {
    display: {
      color: 'white',
      icon: /*#__PURE__*/React__default["default"].createElement(solid.HashtagIcon, null)
    }
  },
  keyword: {
    display: {
      color: 'white',
      icon: /*#__PURE__*/React__default["default"].createElement(outline.KeyIcon, null)
    }
  },
  geo: {
    display: {
      color: 'white',
      icon: /*#__PURE__*/React__default["default"].createElement(outline.GlobeAltIcon, null)
    }
  },
  org: {
    display: {
      color: 'white',
      icon: /*#__PURE__*/React__default["default"].createElement(outline.BuildingOffice2Icon, null)
    }
  },
  location: {
    display: {
      color: 'white',
      icon: /*#__PURE__*/React__default["default"].createElement(outline.MapPinIcon, null)
    }
  },
  groups: {
    display: {
      color: 'white',
      icon: /*#__PURE__*/React__default["default"].createElement(outline.UsersIcon, null)
    }
  },
  art: {
    display: {
      color: 'white',
      icon: /*#__PURE__*/React__default["default"].createElement(solid.FilmIcon, null)
    }
  },
  law: {
    display: {
      color: 'white',
      icon: /*#__PURE__*/React__default["default"].createElement(outline.ScaleIcon, null)
    }
  },
  event: {
    display: {
      color: 'white',
      icon: /*#__PURE__*/React__default["default"].createElement(outline.CalendarIcon, null)
    }
  },
  sentiment: {
    display: {
      color: 'white',
      icon: /*#__PURE__*/React__default["default"].createElement("span", {
        className: "flex flex-col",
        style: {
          height: '1em'
        }
      }, /*#__PURE__*/React__default["default"].createElement(outline.HandThumbUpIcon, null), /*#__PURE__*/React__default["default"].createElement(outline.HandThumbDownIcon, null))
    },
    items: [{
      label: 'POS',
      display: {
        color: 'green',
        icon: /*#__PURE__*/React__default["default"].createElement(outline.HandThumbUpIcon, null)
      }
    }, {
      label: 'NEG',
      display: {
        color: 'red',
        icon: /*#__PURE__*/React__default["default"].createElement(outline.HandThumbDownIcon, null)
      }
    }]
  },
  emotion: {
    display: {
      color: 'white',
      icon: /*#__PURE__*/React__default["default"].createElement(outline.HeartIcon, null)
    },
    items: [{
      label: 'positive',
      display: {
        color: 'green',
        icon: /*#__PURE__*/React__default["default"].createElement(outline.FaceSmileIcon, null)
      },
      members: [{
        values: ['happiness']
      }],
      isGroup: true
    }, {
      label: 'negative',
      display: {
        color: 'red',
        icon: /*#__PURE__*/React__default["default"].createElement(outline.FaceFrownIcon, null)
      },
      members: [{
        values: ['anger', 'sadness']
      }],
      isGroup: true
    }, {
      label: 'happiness',
      display: {
        color: 'green',
        icon: /*#__PURE__*/React__default["default"].createElement(outline.FaceSmileIcon, null)
      }
    }, {
      label: 'surprise',
      display: {
        color: 'green',
        icon: /*#__PURE__*/React__default["default"].createElement(outline.FaceSmileIcon, null)
      }
    }, {
      label: 'anger',
      display: {
        color: 'red',
        icon: /*#__PURE__*/React__default["default"].createElement(outline.FaceFrownIcon, null)
      }
    }, {
      label: 'sadness',
      display: {
        color: 'red',
        icon: /*#__PURE__*/React__default["default"].createElement(outline.FaceFrownIcon, null)
      }
    }]
  },
  score: {
    display: {
      color: 'white',
      icon: /*#__PURE__*/React__default["default"].createElement("span", {
        className: "flex flex-col",
        style: {
          height: '1em'
        }
      }, /*#__PURE__*/React__default["default"].createElement(outline.HandThumbUpIcon, null), /*#__PURE__*/React__default["default"].createElement(outline.HandThumbDownIcon, null))
    },
    items: [{
      label: '2',
      display: {
        color: 'green',
        icon: /*#__PURE__*/React__default["default"].createElement(outline.HandThumbUpIcon, null)
      }
    }, {
      label: '1',
      display: {
        color: 'green',
        icon: /*#__PURE__*/React__default["default"].createElement(outline.HandThumbUpIcon, null)
      }
    }, {
      label: '-1',
      display: {
        color: 'red',
        icon: /*#__PURE__*/React__default["default"].createElement(outline.HandThumbDownIcon, null)
      }
    }, {
      label: '-2',
      display: {
        color: 'red',
        icon: /*#__PURE__*/React__default["default"].createElement(outline.HandThumbDownIcon, null)
      }
    }, {
      label: 'positive',
      display: {
        color: 'green',
        icon: /*#__PURE__*/React__default["default"].createElement(outline.HandThumbUpIcon, null)
      },
      members: [{
        values: ['1', '2']
      }],
      isGroup: true
    }, {
      label: 'positive',
      display: {
        color: 'red',
        icon: /*#__PURE__*/React__default["default"].createElement(outline.HandThumbDownIcon, null)
      },
      members: [{
        values: ['-1', '-2']
      }],
      isGroup: true
    }]
  }
};

function ColorsAxis(_ref) {
  var width = _ref.width,
    colorsConfig = _ref.colorsConfig;
  return React__default["default"].createElement("div", {
    style: {
      width: width,
      opacity: 0.9
    },
    className: "h-full fixed flex flex-col"
  }, colorsConfig.map(function (colorConfig, i) {
    return React__default["default"].createElement("div", {
      key: i,
      className: "w-full",
      style: {
        background: colorConfig,
        height: '4px',
        marginTop: i === 0 ? 'auto' : '1px'
      }
    });
  }));
}

var BAR_PADDING = 0.1;
var BarChart = function BarChart(_ref) {
  var dataNodes = _ref.dataNodes,
    height = _ref.height,
    width = _ref.width,
    nodeClicked = _ref.nodeClicked,
    barColor = _ref.barColor,
    fontFamily = _ref.fontFamily,
    textColor = _ref.textColor,
    counters = _ref.counters,
    countersConfiguration = _ref.countersConfiguration,
    labels = _ref.labels,
    labelClicked = _ref.labelClicked,
    sizeAxis = _ref.sizeAxis,
    colorAxis = _ref.colorAxis,
    translate = _ref.translate,
    totalItems = _ref.totalItems,
    nodeActionsClicked = _ref.nodeActionsClicked;
  var _useState = React.useState(null),
    actionsVisible = _useState[0],
    setActionsVisible = _useState[1];
  var barsHeight = dataNodes.length * 40;
  var _useState2 = React.useState([]),
    groups = _useState2[0],
    setGroups = _useState2[1];
  React.useEffect(function () {
    // Y axis is for groups since the barplot is horizontal
    setGroups(dataNodes.sort(function (a, b) {
      return (sizeAxis == null ? void 0 : sizeAxis.key) === CUSTOM_METADATA_KEY ? b.amount - a.amount : totalSumCalculation(sizeAxis, b.metadata, b.trends, countersConfiguration).result - totalSumCalculation(sizeAxis, a.metadata, b.trends, countersConfiguration).result;
    }).map(function (d) {
      var _d$text;
      return (_d$text = d.text) != null ? _d$text : '';
    }));
  }, [dataNodes, sizeAxis]);
  var yScale = React.useMemo(function () {
    return d3.scaleBand().domain(groups).range([0, barsHeight]).padding(BAR_PADDING);
  }, [height, groups]);
  var max = React.useMemo(function () {
    var _extent$;
    return (_extent$ = d3.extent(dataNodes.map(function (d) {
      return (sizeAxis == null ? void 0 : sizeAxis.key) === CUSTOM_METADATA_KEY ? d.amount : totalSumCalculation(sizeAxis, d.metadata, d.trends, countersConfiguration).result;
    }))[1]) != null ? _extent$ : 20;
  }, [dataNodes, sizeAxis]);
  // X axis
  var xScale = React.useMemo(function () {
    return d3.scaleLinear().domain([0, max || 10]).range([0, width]);
  }, [width, max]);
  // Build the shapes
  var allShapes = dataNodes.map(function (d, i) {
    var _yScale, _d$text2;
    var x = 24;
    var y = (_yScale = yScale((_d$text2 = d.text) != null ? _d$text2 : '')) != null ? _yScale : 0;
    var result = (sizeAxis == null ? void 0 : sizeAxis.key) === CUSTOM_METADATA_KEY ? d.amount : totalSumCalculation(sizeAxis, d.metadata, d.trends, countersConfiguration).result;
    var xWidth = xScale(result === max ? result : Math.min(max - 1, result + max * 0.1)) - 24;
    var barWidth = xWidth > 0 ? xWidth : 0;
    var barHeight = 36;
    var opacity = 1;
    var fill = barColor;
    var fillOpacity = 1;
    var rx = 1;
    var colorsConfig = getBackgroundColorLayers(colorAxis, d.metadata, d.trends, countersConfiguration, totalItems);
    return React__default["default"].createElement("g", {
      key: i
    }, React__default["default"].createElement("rect", {
      x: x,
      y: y,
      width: barWidth,
      height: barHeight,
      opacity: opacity,
      fill: fill,
      fillOpacity: fillOpacity,
      rx: rx
    }), React__default["default"].createElement("foreignObject", {
      x: x,
      y: y,
      width: width,
      height: barHeight,
      opacity: opacity,
      fill: fill,
      fillOpacity: fillOpacity,
      rx: rx
    }, React__default["default"].createElement("div", {
      className: "h-full w-full",
      onMouseEnter: function onMouseEnter() {
        nodeActionsClicked(d);
        setActionsVisible(i);
      },
      onMouseLeave: function onMouseLeave() {
        setActionsVisible(null);
      }
    }, React__default["default"].createElement(ColorsAxis, {
      width: barWidth,
      colorsConfig: colorsConfig
    }), React__default["default"].createElement("div", {
      className: "flex h-full w-full items-center ml-1 relative text-gray-500",
      style: {
        fontFamily: fontFamily,
        fontWeight: 300,
        fontStyle: 'normal',
        color: textColor,
        fontSize: '14px'
      }
    }, React__default["default"].createElement("span", {
      className: "flex items-center max-w-[30%] truncate mr-2"
    }, counters.filter(function (counter) {
      return counter.metadataKeyValue !== null;
    }).map(function (counter, i) {
      return React__default["default"].createElement("div", {
        key: i,
        className: "ml-1"
      }, React__default["default"].createElement(CounterDisplay, {
        counter: counter,
        countersConfiguration: countersConfiguration,
        metadata: d.metadata,
        trends: d.trends,
        width: "6ch",
        totalItems: totalItems
      }));
    })), React__default["default"].createElement("span", {
      className: "truncate w-3/6 hover:text-gray-400 dark:hover:text-gray-300 hover:cursor-pointer",
      onClick: function onClick() {
        return nodeClicked(d);
      },
      dir: "auto"
    }, translate && d.item_translated_text !== undefined && d.item_translated_text !== null && d.item_translated_text !== '' ? d.item_translated_text : d.item_original_text), React__default["default"].createElement("span", {
      className: "truncate flex items-center w-2/6 ml-auto"
    }, labels.map(function (label, i) {
      return React__default["default"].createElement("div", {
        key: i
      }, React__default["default"].createElement(MaxLabelDisplay, {
        countersConfiguration: countersConfiguration,
        metadataKey: label,
        labelClicked: labelClicked,
        metadata: d.metadata,
        width: "15ch"
      }));
    })), React__default["default"].createElement("div", {
      "data-for": "global-actions",
      "data-tip": true,
      "data-event": "click",
      className: "self-end mr-1 hover:cursor-pointer hover:text-white " + (actionsVisible === i ? 'visible' : 'invisible')
    }, React__default["default"].createElement(outline.EllipsisHorizontalIcon, {
      className: "h-4 w-4"
    }))))));
  });
  return React__default["default"].createElement("svg", {
    width: width,
    height: barsHeight
  }, allShapes);
};

var ItemsListDisplay = function ItemsListDisplay(_ref) {
  var items = _ref.items,
    bgColor = _ref.bgColor,
    textColor = _ref.textColor,
    counters = _ref.counters,
    labels = _ref.labels,
    countersConfiguration = _ref.countersConfiguration,
    labelClicked = _ref.labelClicked,
    translate = _ref.translate,
    totalItems = _ref.totalItems;
  return React__default["default"].createElement("div", {
    className: "overflow-x-auto text-black bg-[#F7F7F7] dark:bg-[#272535] dark:text-white",
    style: {
      backgroundColor: bgColor,
      color: textColor
    }
  }, React__default["default"].createElement("table", {
    className: "table-auto w-full h-full text-left"
  }, React__default["default"].createElement("thead", {
    className: "border-b-2 border-b-slate-500"
  }, React__default["default"].createElement("tr", null, React__default["default"].createElement("th", {
    className: "p-1"
  }, "Items"), React__default["default"].createElement("th", {
    className: "p-1"
  }, "Time"), counters.filter(function (counter) {
    var _counter$metadataKeyV;
    return ((_counter$metadataKeyV = counter.metadataKeyValue) == null ? void 0 : _counter$metadataKeyV.key) !== CUSTOM_METADATA_KEY;
  }).map(function (counter, i) {
    return React__default["default"].createElement("th", {
      className: "p-1 lowercase first-letter:uppercase",
      key: i
    }, counter.metadataKeyValue ? getMetadataKeyValueDisplay(counter.metadataKeyValue) : '');
  }), labels.map(function (label, i) {
    return React__default["default"].createElement("th", {
      className: "p-1 lowercase first-letter:uppercase",
      key: i
    }, label);
  }))), React__default["default"].createElement("tbody", null, items.map(function (item, i) {
    var item_date = parseDate(item.create_date);
    return React__default["default"].createElement("tr", {
      key: i
    }, React__default["default"].createElement("td", {
      className: "max-w-[60ch] truncate p-1"
    }, translate && item.item_translated_text !== undefined && item.item_translated_text !== null && item.item_translated_text !== '' ? item.item_translated_text : item.original_text), React__default["default"].createElement("td", {
      className: "p-1",
      "data-for": "global",
      "data-tip": item_date,
      style: {
        width: '1em',
        height: '1em'
      }
    }, item_date.split(' ').at(0)), counters.filter(function (counter) {
      var _counter$metadataKeyV2;
      return ((_counter$metadataKeyV2 = counter.metadataKeyValue) == null ? void 0 : _counter$metadataKeyV2.key) !== CUSTOM_METADATA_KEY;
    }).map(function (counter, i) {
      return React__default["default"].createElement("td", {
        key: i,
        className: "p-1"
      }, React__default["default"].createElement(CounterDisplay, {
        counter: counter,
        countersConfiguration: countersConfiguration,
        metadata: item.metadata,
        trends: [],
        totalItems: totalItems
      }));
    }), labels.map(function (label, i) {
      return React__default["default"].createElement("td", {
        key: i
      }, React__default["default"].createElement(MaxLabelDisplay, {
        metadataKey: label,
        labelClicked: labelClicked,
        countersConfiguration: countersConfiguration,
        metadata: item.metadata
      }));
    }));
  }))));
};
function parseDate(date) {
  if (!date) return '';
  return dateFns.format(dateFns.parse(date, 'yyyy-MM-dd HH:mm:ss.SSSSSS', new Date()), 'dd/MM/yyyy HH:mm');
}

var BIG_COLOR_DEFAULT = '#322F46';
var SMALL_COLOR_DEFAULT = '#2C293D';
var Treemap = function Treemap(_ref) {
  var dataNodes = _ref.dataNodes,
    nodeClicked = _ref.nodeClicked,
    height = _ref.height,
    width = _ref.width,
    bigColor = _ref.bigColor,
    smallColor = _ref.smallColor,
    _ref$countFontSize = _ref.countFontSize,
    countFontSize = _ref$countFontSize === void 0 ? 14 : _ref$countFontSize,
    fontFamily = _ref.fontFamily,
    textColor = _ref.textColor,
    _ref$borderWidth = _ref.borderWidth,
    borderWidth = _ref$borderWidth === void 0 ? 0 : _ref$borderWidth,
    borderColor = _ref.borderColor,
    labels = _ref.labels,
    counters = _ref.counters,
    countersConfiguration = _ref.countersConfiguration,
    labelClicked = _ref.labelClicked,
    sizeAxis = _ref.sizeAxis,
    colorAxis = _ref.colorAxis,
    nodeActionsClicked = _ref.nodeActionsClicked,
    translate = _ref.translate,
    totalItems = _ref.totalItems;
  var mainNode = React.useMemo(function () {
    return {
      id: '',
      children: dataNodes.map(function (c) {
        return _extends({}, c, {
          amount: (sizeAxis == null ? void 0 : sizeAxis.key) === CUSTOM_METADATA_KEY ? c.amount : totalSumCalculation(sizeAxis, c.metadata, c.trends, countersConfiguration).result,
          children: []
        });
      }),
      amount: 0,
      metadata: {},
      trends: [],
      type: '',
      properties: {}
    };
  }, [dataNodes, sizeAxis]);
  var treeHierarchy = React.useMemo(function () {
    var elementsValues = mainNode.children.map(function (item) {
      return item.amount;
    });
    var maxElementValue = Math.max.apply(Math, elementsValues);
    var elementsSum = elementsValues.reduce(function (a, b) {
      return a + b;
    }, 0);
    var growFactor = maxElementValue > elementsSum * 0.9 ? 0.1 / (1 - maxElementValue / elementsSum) : 1;
    return d3.hierarchy(mainNode).sum(function (d) {
      return maxElementValue === d.amount ? d.amount : d.amount * growFactor;
    }).sort(function (n1, n2) {
      return n2.data.amount - n1.data.amount;
    });
  }, [mainNode]);
  var root = React.useMemo(function () {
    var treeGenerator = d3.treemap().size([width, height]).padding(0);
    return treeGenerator(treeHierarchy);
  }, [treeHierarchy, width, height]);
  var colors = React.useMemo(function () {
    var len = root.leaves().length;
    if (!bigColor || !smallColor || !(chromaJs.valid(bigColor) && chromaJs.valid(smallColor))) return chromaJs.scale([BIG_COLOR_DEFAULT, SMALL_COLOR_DEFAULT]).domain([0, len]);
    return chromaJs.scale([bigColor, smallColor]).domain([0, len]);
  }, [root, bigColor, smallColor]);
  var _useState = React.useState(null),
    actionsVisible = _useState[0],
    setActionsVisible = _useState[1];
  var allShapes = root.leaves().map(function (leaf, index) {
    var height = leaf.y1 - leaf.y0;
    var width = leaf.x1 - leaf.x0;
    var fontSize = calculateFontSize(height, width);
    var lineHeight = fontSize * 1.1 + 5;
    var paddingY = 10;
    var lines = Math.max(1, Math.floor((height - paddingY + 20) / lineHeight) - 3); // -2 is for the d.data.value and <br />, 20 is for the value absolute top padding
    var colorsConfig = getBackgroundColorLayers(colorAxis, leaf.data.metadata, leaf.data.trends, countersConfiguration, totalItems);
    return React__default["default"].createElement("g", {
      key: index
    }, React__default["default"].createElement("rect", {
      x: leaf.x0,
      y: leaf.y0,
      width: width,
      height: height,
      stroke: "transparent",
      fill: colors(index).hex()
    }), React__default["default"].createElement("foreignObject", {
      x: leaf.x0,
      y: leaf.y0,
      width: width,
      height: height
    }, React__default["default"].createElement("div", {
      className: "h-full w-full",
      onMouseEnter: function onMouseEnter() {
        nodeActionsClicked(leaf.data);
        setActionsVisible(index);
      },
      onMouseLeave: function onMouseLeave() {
        setActionsVisible(null);
      }
    }, React__default["default"].createElement(ColorsAxis, {
      width: width,
      colorsConfig: colorsConfig
    }), React__default["default"].createElement("div", {
      className: "flex flex-col h-full w-full p-1 relative border-slate-500 dark:border-[#272535] text-black dark:text-white",
      style: {
        fontFamily: fontFamily,
        fontWeight: 300,
        fontStyle: 'normal',
        color: textColor,
        borderRightWidth: borderWidth + "px",
        borderLeftWidth: borderWidth + "px",
        borderBottomWidth: borderWidth + "px",
        borderColor: borderColor
      }
    }, React__default["default"].createElement("div", {
      className: "flex",
      style: {
        fontSize: countFontSize + "px"
      }
    }, React__default["default"].createElement(CountersLabelsDisplay, {
      counters: counters,
      labels: labels,
      metadata: leaf.data.metadata,
      trends: leaf.data.trends,
      countersConfiguration: countersConfiguration,
      labelClicked: labelClicked,
      totalItems: totalItems
    })), React__default["default"].createElement("span", {
      className: "items-center flex justify-center h-full hover:cursor-pointer",
      onClick: function onClick() {
        return nodeClicked(leaf.data);
      },
      style: {
        fontSize: fontSize + "px"
      }
    }, React__default["default"].createElement("span", {
      "data-element": "rect-text",
      className: "overflow-hidden text-center",
      dir: "auto",
      style: {
        lineHeight: lineHeight + "px",
        wordBreak: 'break-word',
        WebkitLineClamp: lines,
        WebkitTouchCallout: 'none',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical'
      }
    }, translate && leaf.data.item_translated_text !== undefined && leaf.data.item_translated_text !== null && leaf.data.item_translated_text !== '' ? leaf.data.item_translated_text : leaf.data.item_original_text)), React__default["default"].createElement("div", {
      "data-for": "global-actions",
      "data-tip": true,
      "data-event": "click",
      className: "self-end hover:cursor-pointer hover:text-white " + (actionsVisible === index ? 'visible' : 'invisible')
    }, React__default["default"].createElement(outline.EllipsisHorizontalIcon, {
      className: "h-4 w-4"
    }))))));
  });
  return React__default["default"].createElement("svg", {
    width: width,
    height: height
  }, allShapes);
};

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * One Ai Analytics Component
 */
var OneAiAnalytics = function OneAiAnalytics(_ref) {
  var _currentHoveredNode$p2, _labelsFilters$length;
  var _ref$dataNodes = _ref.dataNodes,
    dataNodes = _ref$dataNodes === void 0 ? {
      totalItems: 0,
      nodes: []
    } : _ref$dataNodes,
    currentNode = _ref.currentNode,
    _ref$currentPage = _ref.currentPage,
    currentPage = _ref$currentPage === void 0 ? 0 : _ref$currentPage,
    _ref$totalPagesAmount = _ref.totalPagesAmount,
    totalPagesAmount = _ref$totalPagesAmount === void 0 ? 0 : _ref$totalPagesAmount,
    _ref$goBackClicked = _ref.goBackClicked,
    goBackClicked = _ref$goBackClicked === void 0 ? function () {} : _ref$goBackClicked,
    _ref$nodeClicked = _ref.nodeClicked,
    _nodeClicked = _ref$nodeClicked === void 0 ? function () {} : _ref$nodeClicked,
    _ref$nextPageClicked = _ref.nextPageClicked,
    nextPageClicked = _ref$nextPageClicked === void 0 ? function () {} : _ref$nextPageClicked,
    _ref$prevPageClicked = _ref.prevPageClicked,
    prevPageClicked = _ref$prevPageClicked === void 0 ? function () {} : _ref$prevPageClicked,
    _ref$itemsDisplay = _ref.itemsDisplay,
    itemsDisplay = _ref$itemsDisplay === void 0 ? ItemsListDisplay : _ref$itemsDisplay,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? true : _ref$darkMode,
    background = _ref.background,
    _ref$treemapBigColor = _ref.treemapBigColor,
    treemapBigColor = _ref$treemapBigColor === void 0 ? darkMode ? '#322F46' : '#F7F7F7' : _ref$treemapBigColor,
    _ref$treemapSmallColo = _ref.treemapSmallColor,
    treemapSmallColor = _ref$treemapSmallColo === void 0 ? darkMode ? '#2C293D' : '#F7F7F7' : _ref$treemapSmallColo,
    _ref$treemapCountFont = _ref.treemapCountFontSize,
    treemapCountFontSize = _ref$treemapCountFont === void 0 ? 14 : _ref$treemapCountFont,
    _ref$fontFamily = _ref.fontFamily,
    fontFamily = _ref$fontFamily === void 0 ? "'Poppins', sans-serif" : _ref$fontFamily,
    _ref$textColor = _ref.textColor,
    textColor = _ref$textColor === void 0 ? darkMode ? 'white' : '#111111' : _ref$textColor,
    _ref$treemapBorderWid = _ref.treemapBorderWidth,
    treemapBorderWidth = _ref$treemapBorderWid === void 0 ? 1 : _ref$treemapBorderWid,
    navbarColor = _ref.navbarColor,
    _ref$treemapBorderCol = _ref.treemapBorderColor,
    treemapBorderColor = _ref$treemapBorderCol === void 0 ? darkMode ? '#272535' : 'white' : _ref$treemapBorderCol,
    _ref$barColor = _ref.barColor,
    barColor = _ref$barColor === void 0 ? darkMode ? '#322F46' : '#F7F7F7' : _ref$barColor,
    loading = _ref.loading,
    _ref$error = _ref.error,
    error = _ref$error === void 0 ? null : _ref$error,
    _ref$nodesPath = _ref.nodesPath,
    nodesPath = _ref$nodesPath === void 0 ? [] : _ref$nodesPath,
    _ref$dateRangeChanged = _ref.dateRangeChanged,
    dateRangeChanged = _ref$dateRangeChanged === void 0 ? function () {} : _ref$dateRangeChanged,
    labelsFilters = _ref.labelsFilters,
    _ref$labelClicked = _ref.labelClicked,
    labelClicked = _ref$labelClicked === void 0 ? function () {} : _ref$labelClicked,
    _ref$labelFilterDelet = _ref.labelFilterDeleted,
    labelFilterDeleted = _ref$labelFilterDelet === void 0 ? function () {} : _ref$labelFilterDelet,
    trendPeriods = _ref.trendPeriods,
    trendPeriodsChanged = _ref.trendPeriodsChanged,
    splitPhrase = _ref.splitPhrase,
    mergeClusters = _ref.mergeClusters,
    searchSimilarClusters = _ref.searchSimilarClusters,
    _ref$translationEnabl = _ref.translationEnabled,
    translationEnabled = _ref$translationEnabl === void 0 ? true : _ref$translationEnabl,
    _ref$toggleHide = _ref.toggleHide,
    toggleHide = _ref$toggleHide === void 0 ? function () {} : _ref$toggleHide,
    _ref$propertiesFilter = _ref.propertiesFilters,
    propertiesFilters = _ref$propertiesFilter === void 0 ? {} : _ref$propertiesFilter,
    _ref$setPropertiesFil = _ref.setPropertiesFilters,
    setPropertiesFilters = _ref$setPropertiesFil === void 0 ? function () {} : _ref$setPropertiesFil,
    metaOptions = _ref.metaOptions,
    currentMetaOption = _ref.currentMetaOption,
    _ref$metaOptionsChang = _ref.metaOptionsChanged,
    metaOptionsChanged = _ref$metaOptionsChang === void 0 ? function () {} : _ref$metaOptionsChang,
    _ref$refresh = _ref.refresh,
    refresh = _ref$refresh === void 0 ? function () {} : _ref$refresh;
  var _useState = React.useState('Treemap'),
    display = _useState[0],
    setDisplay = _useState[1];
  var _useResizeDetector = reactResizeDetector.useResizeDetector(),
    width = _useResizeDetector.width,
    height = _useResizeDetector.height,
    ref = _useResizeDetector.ref;
  var _useState2 = React.useState({}),
    metaData = _useState2[0],
    setMetaData = _useState2[1];
  var _useState3 = React.useState([]),
    nodes = _useState3[0],
    setNodes = _useState3[1];
  var _useState4 = React.useState([]),
    labels = _useState4[0],
    setLabels = _useState4[1];
  var _useState5 = React.useState([]),
    counters = _useState5[0],
    setCounters = _useState5[1];
  var _useState6 = React.useState(null),
    sizeAxis = _useState6[0],
    setSizeAxis = _useState6[1];
  var _useState7 = React.useState([]),
    colorAxis = _useState7[0],
    setColorAxis = _useState7[1];
  var _useState8 = React.useState({}),
    countersConfigurations = _useState8[0],
    setCountersConfigurations = _useState8[1];
  var _useState9 = React.useState(null),
    currentNodeActions = _useState9[0],
    setCurrentNodeActions = _useState9[1];
  var _useState10 = React.useState(false),
    translate = _useState10[0],
    setTranslate = _useState10[1];
  var _useState11 = React.useState(null),
    fromDate = _useState11[0],
    setFromDate = _useState11[1];
  var _useState12 = React.useState(null),
    toDate = _useState12[0],
    setToDate = _useState12[1];
  var loadedNodes = React.useRef([]);
  var currentCollection = React.useRef(null);
  var _useState13 = React.useState(null),
    currentHoveredNode = _useState13[0],
    setCurrentHoveredNode = _useState13[1];
  React.useEffect(function () {
    var _localStorage$getItem;
    if (!nodesPath || nodesPath.length === 0 || currentCollection.current === nodesPath[0].text) return;
    currentCollection.current = nodesPath[0].text;
    setLabels(JSON.parse((_localStorage$getItem = localStorage.getItem(getCurrentStorageKey(labelsStorageKey, currentCollection.current))) != null ? _localStorage$getItem : '[]'));
    setCounters(getInitialCounterTypes(defaultCalculations, [{
      metadataKeyValue: {
        key: CUSTOM_METADATA_KEY
      },
      calculationName: percentOfAllCalculationName
    }, {
      metadataKeyValue: {
        key: CUSTOM_METADATA_KEY
      },
      calculationName: totalSumCalculationName
    }, {
      metadataKeyValue: {
        key: 'signals'
      },
      calculationName: topGroupCalculationName
    }], currentCollection.current, countersStorageKey));
    var storedSizeAxis = localStorage.getItem(getCurrentStorageKey(sizeAxisStorageKey, currentCollection.current));
    setSizeAxis(storedSizeAxis ? JSON.parse(storedSizeAxis) : {
      key: CUSTOM_METADATA_KEY
    });
    setColorAxis(getInitialCounterTypes(defaultCalculations, [{
      metadataKeyValue: {
        key: 'signals',
        value: 'positive'
      },
      calculationName: percentOfItemsCalculationName
    }, {
      metadataKeyValue: {
        key: 'signals',
        value: 'negative'
      },
      calculationName: percentOfItemsCalculationName
    }], currentCollection.current, colorAxisStorageKey));
  }, [nodesPath]);
  React.useEffect(function () {
    setMetaData(function (currentMetadata) {
      var _currentNode$data$met, _currentNode$type, _loadedNodes$current;
      var newMetadata = currentNode ? loadedNodes.current.some(function (loadedNode) {
        return loadedNode.type === currentNode.type && loadedNode.id === getNodeId(currentNode);
      }) ? currentMetadata : mergeMetadata(currentMetadata, (_currentNode$data$met = currentNode == null ? void 0 : currentNode.data.metadata) != null ? _currentNode$data$met : {}) : nodes.filter(function (node) {
        return !loadedNodes.current.some(function (loadedNode) {
          return loadedNode.id === node.id && loadedNode.type === node.type;
        });
      }).reduce(function (finalMetadata, currentNode) {
        return mergeMetadata(finalMetadata, currentNode.metadata);
      }, currentMetadata);
      loadedNodes.current.push({
        type: (_currentNode$type = currentNode == null ? void 0 : currentNode.type) != null ? _currentNode$type : COLLECTION_TYPE,
        id: currentNode ? getNodeId(currentNode) : COLLECTION_TYPE
      });
      if (!currentNode) (_loadedNodes$current = loadedNodes.current).push.apply(_loadedNodes$current, nodes.map(function (node) {
        return {
          type: node.type,
          id: node.id
        };
      }));
      return newMetadata;
    });
  }, [currentNode, nodes]);
  React.useEffect(function () {
    setNodes(dataNodes.nodes.map(function (d) {
      var _extends2;
      var itemsCount = getNodeItemsCount(d);
      var nodeText = getNodeText(d);
      var _getNodeOriginalAndTr = getNodeOriginalAndTranslatedText(d),
        originalText = _getNodeOriginalAndTr.originalText,
        translatedText = _getNodeOriginalAndTr.translatedText;
      return {
        id: getNodeId(d),
        amount: itemsCount,
        text: nodeText,
        item_original_text: originalText != null ? originalText : nodeText,
        item_translated_text: translatedText,
        metadata: _extends((_extends2 = {}, _extends2[CUSTOM_METADATA_KEY] = [{
          value: CUSTOM_METADATA_KEY,
          count: itemsCount
        }], _extends2), d.data.metadata),
        trends: getNodeTrends(d),
        type: d.type,
        properties: d.data.properties
      };
    }));
  }, [dataNodes]);
  React.useEffect(function () {
    var newCountersConfigurations = {};
    Object.keys(metaData).concat(Object.keys(defaultCountersConfigurations)).forEach(function (key) {
      var _defaultConfig$items$, _defaultConfig$items, _defaultConfig$label, _defaultConfig$member, _defaultConfig$isGrou, _defaultConfig$items$2, _defaultConfig$items2, _metaData$key$filter$, _metaData$key;
      var defaultConfig = defaultCountersConfigurations[key];
      var valuesConfigured = (_defaultConfig$items$ = defaultConfig == null ? void 0 : (_defaultConfig$items = defaultConfig.items) == null ? void 0 : _defaultConfig$items.map(function (group) {
        return group.label;
      })) != null ? _defaultConfig$items$ : [];
      var counterConfiguration = {
        label: ((_defaultConfig$label = defaultConfig == null ? void 0 : defaultConfig.label) != null ? _defaultConfig$label : key).toLowerCase(),
        display: defaultConfig == null ? void 0 : defaultConfig.display,
        members: (_defaultConfig$member = defaultConfig == null ? void 0 : defaultConfig.members) != null ? _defaultConfig$member : [{
          metadataName: key
        }],
        isGroup: (_defaultConfig$isGrou = defaultConfig == null ? void 0 : defaultConfig.isGroup) != null ? _defaultConfig$isGrou : false,
        items: key === CUSTOM_METADATA_KEY ? undefined : ((_defaultConfig$items$2 = defaultConfig == null ? void 0 : (_defaultConfig$items2 = defaultConfig.items) == null ? void 0 : _defaultConfig$items2.map(function (group) {
          var _group$members$map, _group$members, _group$label;
          return {
            label: group.label,
            display: group.display,
            isGroup: group.isGroup,
            members: (_group$members$map = (_group$members = group.members) == null ? void 0 : _group$members.map(function (member) {
              var _member$metadataName;
              return {
                metadataName: (_member$metadataName = member.metadataName) != null ? _member$metadataName : key,
                values: member.values
              };
            })) != null ? _group$members$map : [{
              metadataName: key,
              values: [(_group$label = group.label) != null ? _group$label : '']
            }]
          };
        })) != null ? _defaultConfig$items$2 : []).concat((_metaData$key$filter$ = (_metaData$key = metaData[key]) == null ? void 0 : _metaData$key.filter(function (meta) {
          return !valuesConfigured.includes(meta.value);
        }).map(function (meta) {
          return {
            label: meta.value,
            members: [{
              metadataName: key,
              values: [meta.value]
            }],
            display: undefined,
            isGroup: false
          };
        })) != null ? _metaData$key$filter$ : [])
      };
      newCountersConfigurations[key] = counterConfiguration;
    });
    setCountersConfigurations(newCountersConfigurations);
  }, [metaData]);
  React.useEffect(function () {
    var storedCounters = counters.map(function (counter) {
      return {
        metadataKeyValue: counter.metadataKeyValue,
        calculationName: counter.calculationConfiguration.name
      };
    });
    var storedColorAxis = colorAxis.map(function (counter) {
      return {
        metadataKeyValue: counter.metadataKeyValue,
        calculationName: counter.calculationConfiguration.name
      };
    });
    if (currentCollection.current) {
      localStorage.setItem(getCurrentStorageKey(countersStorageKey, currentCollection.current), JSON.stringify(storedCounters));
      localStorage.setItem(getCurrentStorageKey(labelsStorageKey, currentCollection.current), JSON.stringify(labels));
      localStorage.setItem(getCurrentStorageKey(colorAxisStorageKey, currentCollection.current), JSON.stringify(storedColorAxis));
      localStorage.setItem(getCurrentStorageKey(sizeAxisStorageKey, currentCollection.current), JSON.stringify(sizeAxis));
    }
  }, [counters, labels, sizeAxis, colorAxis]);
  React.useEffect(function () {
    dateRangeChanged(fromDate, toDate);
  }, [fromDate, toDate]);
  React.useEffect(function () {
    ReactTooltip__default["default"].hide();
    ReactTooltip__default["default"].rebuild();
  });
  return React__default["default"].createElement("div", {
    className: "oneai-analytics-namespace h-full w-full overflow-hidden " + (darkMode ? 'dark' : '')
  }, React__default["default"].createElement("div", {
    id: "headlessui-portal-root",
    className: "h-full w-full flex flex-col overflow-hidden bg-[#f3e5e5] dark:bg-[#161414] p-1 " + (darkMode ? 'dark' : ''),
    style: {
      background: background
    }
  }, React__default["default"].createElement(ReactTooltip__default["default"], {
    id: "global"
  }), React__default["default"].createElement(ReactTooltip__default["default"], {
    id: "global-actions",
    place: "top",
    effect: "solid",
    clickable: true,
    className: "!p-1"
  }, React__default["default"].createElement("div", {
    className: "flex flex-col w-full h-full items-baseline"
  }, React__default["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      ReactTooltip__default["default"].hide();
      setCurrentNodeActions(currentHoveredNode);
    },
    className: "text-gray-900 w-full bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-2 py-2 mr-1 mb-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
  }, (currentHoveredNode == null ? void 0 : currentHoveredNode.type) === 'Cluster' ? 'Merge' : 'Split'), React__default["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      var _currentHoveredNode$p;
      ReactTooltip__default["default"].hide();
      ReactTooltip__default["default"].rebuild();
      toggleHide(currentHoveredNode, (currentHoveredNode == null ? void 0 : (_currentHoveredNode$p = currentHoveredNode.properties) == null ? void 0 : _currentHoveredNode$p['hide']) === 'true' ? 'false' : 'true');
    },
    className: "text-gray-900 w-full bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-2 py-2 mr-1 mb-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
  }, (currentHoveredNode == null ? void 0 : (_currentHoveredNode$p2 = currentHoveredNode.properties) == null ? void 0 : _currentHoveredNode$p2['hide']) === 'true' ? 'Show' : 'Hide'))), React__default["default"].createElement(ItemActions, {
    node: currentNodeActions,
    splitPhrase: splitPhrase,
    mergeClusters: mergeClusters,
    searchSimilarClusters: searchSimilarClusters,
    translationEnabled: translate
  }), React__default["default"].createElement("div", {
    className: "w-full mb-1 rounded-md bg-white dark:bg-[#272535]",
    style: {
      height: '65px',
      background: navbarColor,
      fontFamily: fontFamily
    }
  }, React__default["default"].createElement("div", {
    className: "flex flex-row items-center py-5 ml-[24px] h-full"
  }, React__default["default"].createElement("div", {
    className: "flex flex-row w-5/12 justify-start items-center"
  }, React__default["default"].createElement("div", {
    className: "h-full flex"
  }, React__default["default"].createElement("svg", {
    className: getVisualizationLogoClasses(display === 'Treemap'),
    onClick: function onClick() {
      return setDisplay('Treemap');
    },
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default["default"].createElement("path", {
    d: "M3.5 5.89477C3.5 5.06635 4.17157 4.39478 5 4.39478H19C19.8284 4.39478 20.5 5.06635 20.5 5.89478V11.9211H3.5V5.89477Z"
  }), React__default["default"].createElement("path", {
    d: "M3.5 11.9736H13.8684V19.4999H5C4.17157 19.4999 3.5 18.8284 3.5 17.9999V11.9736Z"
  }), React__default["default"].createElement("path", {
    d: "M13.9211 11.9736H20.5001V17.9999C20.5001 18.8284 19.8285 19.4999 19.0001 19.4999H13.9211V11.9736Z"
  }), React__default["default"].createElement("path", {
    d: "M8.68433 4.36841V11.4737"
  })), React__default["default"].createElement("svg", {
    className: getVisualizationLogoClasses(display === 'BarChart'),
    onClick: function onClick() {
      return setDisplay('BarChart');
    },
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default["default"].createElement("path", {
    d: "M3.75 20.25V3.75"
  }), React__default["default"].createElement("path", {
    d: "M3.75 9.75H15.75C15.75 11.5074 15.75 12.4926 15.75 14.25H3.75"
  }), React__default["default"].createElement("path", {
    d: "M20.25 5.25H3.75V9.75H20.25V5.25Z"
  }), React__default["default"].createElement("path", {
    d: "M12.75 14.25V18.75H3.75"
  }))), React__default["default"].createElement("div", null, React__default["default"].createElement(CustomizeTab, {
    currentCounters: counters,
    selectedLabels: labels,
    countersConfigurations: countersConfigurations,
    labelsOptions: Object.keys(metaData).filter(function (key) {
      return key !== CUSTOM_METADATA_KEY;
    }),
    calculationsConfigurations: defaultCalculations,
    countersChanged: setCounters,
    labelsChanged: setLabels,
    selectedSizeAxis: sizeAxis,
    sizeAxisChanged: setSizeAxis,
    currentColorsAxis: colorAxis,
    colorsAxisChanged: setColorAxis
  })), React__default["default"].createElement("div", null, React__default["default"].createElement(DatesFilters, {
    fromDate: fromDate,
    fromDateChanged: setFromDate,
    toDate: toDate,
    toDateChanged: setToDate,
    trendPeriods: trendPeriods,
    trendPeriodsChanged: trendPeriodsChanged
  })), React__default["default"].createElement("div", null, React__default["default"].createElement(LabelsFiltersSelect, {
    selectedLabels: labelsFilters != null ? labelsFilters : [],
    countersConfigurations: countersConfigurations,
    selectedMetadataKeyValueChange: function selectedMetadataKeyValueChange(metadataKeyValue) {
      return labelClicked(metadataKeyValue.key, metadataKeyValue.value);
    }
  }))), React__default["default"].createElement("div", {
    className: "flex flex-row w-full justify-end items-center"
  }, React__default["default"].createElement(outline.ArrowPathIcon, {
    onClick: refresh,
    "data-for": "global",
    "data-tip": "Refresh data",
    className: "h-6 w-6 p-1 mr-1 hover:cursor-pointer focus:outline-none text-[#747189] dark:hover:text-white"
  }), propertiesFilters['hide'] === 'true' ? React__default["default"].createElement(outline.EyeIcon, {
    onClick: function onClick() {
      return setPropertiesFilters({
        hide: 'false'
      });
    },
    "data-for": "global",
    "data-tip": "Show hidden nodes",
    className: "h-6 w-6 p-1 mr-1 hover:cursor-pointer focus:outline-none text-[#747189] dark:hover:text-white"
  }) : React__default["default"].createElement(outline.EyeSlashIcon, {
    onClick: function onClick() {
      return setPropertiesFilters({
        hide: 'true'
      });
    },
    "data-for": "global",
    "data-tip": "Hide hidden nodes",
    className: "h-6 w-6 p-1 mr-1 hover:cursor-pointer focus:outline-none bg-[#EFEFEF] dark:text-white dark:bg-[#322F46]"
  }), translationEnabled ? React__default["default"].createElement(outline.LanguageIcon, {
    onClick: function onClick() {
      return setTranslate(function (translate) {
        return !translate;
      });
    },
    "data-for": "global",
    "data-tip": translate ? 'Disable translation' : 'Enable translation',
    className: "h-6 w-6 p-1 mr-1 hover:cursor-pointer focus:outline-none " + (translate ? 'bg-[#EFEFEF] dark:text-white dark:bg-[#322F46]' : 'text-[#747189] hover:cursor-pointer dark:hover:text-white')
  }) : null))), React__default["default"].createElement("div", {
    className: "w-full rounded-md grow flex flex-col overflow-hidden bg-white dark:bg-[#272535]",
    style: {
      background: navbarColor
    }
  }, React__default["default"].createElement("div", {
    className: "w-full",
    style: {
      height: '65px',
      fontFamily: fontFamily
    }
  }, React__default["default"].createElement("div", {
    className: "flex flex-row items-center ml-[24px] h-full"
  }, React__default["default"].createElement("div", {
    className: "flex flex-row justify-start mr-4 items-center w-full",
    style: {
      fontFamily: fontFamily,
      fontWeight: 300,
      fontStyle: 'normal',
      fontSize: '14px'
    }
  }, React__default["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return goBackClicked(1);
    },
    disabled: currentNode === null,
    className: "rounded-lg inline-flex " + (currentNode ? 'hover:bg-[#EFEFEF] dark:hover:bg-slate-700' : 'hover:cursor-default')
  }, currentNode ? React__default["default"].createElement("svg", {
    className: "h-[1em] w-[1em] self-center text-[#111111] dark:text-white",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    strokeWidth: "2",
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, ' ', React__default["default"].createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z"
  }), ' ', React__default["default"].createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), ' ', React__default["default"].createElement("line", {
    x1: "5",
    y1: "12",
    x2: "9",
    y2: "16"
  }), ' ', React__default["default"].createElement("line", {
    x1: "5",
    y1: "12",
    x2: "9",
    y2: "8"
  })) : React__default["default"].createElement(solid.HomeIcon, {
    className: "h-[0.9em] w-[1em] text-[#111111] dark:text-white"
  }), React__default["default"].createElement("span", {
    className: "sr-only"
  }, "Go back")), React__default["default"].createElement("div", {
    className: "ml-1 text-[#111111] dark:text-gray-300 truncate flex items-center"
  }, nodesPath.map(function (node, i) {
    return React__default["default"].createElement("div", {
      key: i,
      className: "flex"
    }, React__default["default"].createElement("div", {
      className: "max-w-[50ch] truncate"
    }, React__default["default"].createElement("span", {
      className: "cursor-pointer hover:text-gray-600 dark:hover:text-gray-50",
      onClick: function onClick() {
        return goBackClicked(nodesPath.length - 1 - i);
      },
      dir: "auto"
    }, translate && node.translated ? extractShtrudelSuffix(node.translated) : extractShtrudelSuffix(node.text))), nodesPath.length - 1 !== i && React__default["default"].createElement("span", {
      className: "ml-1 mr-1"
    }, "/"));
  }), metaOptions && nodesPath.length === 1 ? React__default["default"].createElement("span", {
    className: "ml-1 flex text-[#111111] dark:text-gray-300"
  }, React__default["default"].createElement("span", {
    className: "mr-1"
  }, "/ "), React__default["default"].createElement(SingleSelect$1, {
    options: metaOptions,
    selectedLabel: currentMetaOption != null ? currentMetaOption : 'text',
    onSelect: metaOptionsChanged
  })) : null, ((_labelsFilters$length = labelsFilters == null ? void 0 : labelsFilters.length) != null ? _labelsFilters$length : 0) > 0 && (labelsFilters == null ? void 0 : labelsFilters.filter(function (label) {
    return label.value;
  }).map(function (keyValue, i) {
    var _keyValue$value;
    return React__default["default"].createElement("span", {
      key: i,
      className: "flex items-center"
    }, React__default["default"].createElement("span", {
      className: "text-gray-500 ml-1"
    }, "/ "), React__default["default"].createElement(LabelDisplay, {
      metadataKey: keyValue.key,
      value: (_keyValue$value = keyValue.value) != null ? _keyValue$value : '',
      countersConfiguration: countersConfigurations,
      labelClicked: function labelClicked() {},
      maxWidth: "20ch",
      color: "#747189"
    }), React__default["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        return labelFilterDeleted(i);
      }
    }, React__default["default"].createElement(solid.XMarkIcon, {
      className: "h-4 w-4 text-gray-400 hover:scale-125 transition duration-100 ease-linear"
    }), React__default["default"].createElement("span", {
      className: "sr-only"
    }, "Delete label filter")));
  })), totalPagesAmount > 1 && currentPage > 0 && React__default["default"].createElement("span", {
    className: "ml-1 text-gray-500"
  }, "/ ", currentPage + 1))), React__default["default"].createElement("div", null, !loading && React__default["default"].createElement(CountersLabelsDisplay, {
    counters: counters,
    labels: labels,
    metadata: nodes.reduce(function (finalMetadata, currentNode) {
      return mergeMetadata(finalMetadata, currentNode.metadata, dataNodes.totalItems);
    }, {}),
    trends: nodes.reduce(function (finalMetadata, currentNode) {
      return mergeTrends(finalMetadata, currentNode.trends);
    }, []),
    countersConfiguration: countersConfigurations,
    labelClicked: labelClicked,
    totalItems: dataNodes.totalItems
  })))), React__default["default"].createElement("div", {
    className: "w-full h-full flex flex-col overflow-x-hidden"
  }, loading && React__default["default"].createElement("div", {
    className: "grow w-full justify-center items-center flex"
  }, React__default["default"].createElement("div", {
    className: "text-center"
  }, React__default["default"].createElement("div", {
    role: "status"
  }, React__default["default"].createElement("svg", {
    className: "inline mr-2 w-8 h-8 text-gray-200 animate-spin fill-blue-600",
    viewBox: "0 0 100 101",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default["default"].createElement("path", {
    d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
    fill: "currentColor"
  }), React__default["default"].createElement("path", {
    d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
    fill: "currentFill"
  })), React__default["default"].createElement("span", {
    className: "sr-only"
  }, "Loading...")))), React__default["default"].createElement("div", {
    className: "flex flex-row flex-grow " + (loading ? 'invisible pointer-events-none w-0 h-0' : 'w-full h-full')
  }, currentPage > 0 && React__default["default"].createElement("div", {
    className: "h-full flex items-center justify-center hover:cursor-pointer dark:bg-[#322F46]",
    onClick: prevPageClicked,
    style: {
      width: '3%',
      backgroundColor: treemapBigColor
    }
  }, React__default["default"].createElement("button", {
    type: "button",
    className: "text-slate-500 hover:text-slate-700 font-medium rounded-lg text-sm text-center inline-flex items-center"
  }, React__default["default"].createElement("svg", {
    "aria-hidden": "true",
    className: "w-5 h-5 rotate-180",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  })), React__default["default"].createElement("span", {
    className: "sr-only"
  }, "Prev"))), React__default["default"].createElement("div", {
    ref: ref,
    className: "h-full w-full overflow-y-auto no-scrollbar overflow-x-hidden"
  }, error !== null ? React__default["default"].createElement("p", {
    className: "h-full w-full text-center dark:text-white"
  }, error) : currentNode && currentNode.type === 'Phrase' ? itemsDisplay({
    items: dataNodes.nodes.map(function (dataNode) {
      return dataNode.data;
    }),
    bgColor: navbarColor,
    textColor: textColor,
    counters: counters,
    labels: labels,
    labelClicked: labelClicked,
    countersConfiguration: countersConfigurations,
    translate: translate,
    totalItems: dataNodes.totalItems
  }) : display === 'Treemap' ? React__default["default"].createElement(Treemap, {
    dataNodes: nodes,
    height: height != null ? height : 0,
    width: width != null ? width : 0,
    nodeClicked: function nodeClicked(node) {
      ReactTooltip__default["default"].hide();
      _nodeClicked({
        type: !currentNode ? 'Cluster' : currentNode.type === 'Cluster' ? 'Phrase' : 'Item',
        id: node.id
      });
    },
    labels: labels,
    counters: counters,
    bigColor: treemapBigColor,
    smallColor: treemapSmallColor,
    countFontSize: treemapCountFontSize,
    fontFamily: fontFamily,
    textColor: textColor,
    borderWidth: treemapBorderWidth,
    borderColor: treemapBorderColor,
    countersConfiguration: countersConfigurations,
    labelClicked: labelClicked,
    sizeAxis: sizeAxis,
    colorAxis: colorAxis,
    nodeActionsClicked: function nodeActionsClicked(node) {
      var _node$text;
      setCurrentHoveredNode({
        type: !currentNode ? 'Cluster' : currentNode.type === 'Cluster' ? 'Phrase' : 'Item',
        id: node.id,
        text: (_node$text = node.text) != null ? _node$text : '',
        properties: node.properties
      });
    },
    translate: translate,
    totalItems: dataNodes.totalItems
  }) : React__default["default"].createElement(BarChart, {
    dataNodes: nodes,
    height: height != null ? height : 0,
    width: width != null ? width : 0,
    nodeClicked: function nodeClicked(node) {
      ReactTooltip__default["default"].hide();
      _nodeClicked({
        type: !currentNode ? 'Cluster' : currentNode.type === 'Cluster' ? 'Phrase' : 'Item',
        id: node.id
      });
    },
    fontFamily: fontFamily,
    textColor: textColor,
    barColor: barColor,
    labels: labels,
    counters: counters,
    countersConfiguration: countersConfigurations,
    labelClicked: labelClicked,
    sizeAxis: sizeAxis,
    colorAxis: colorAxis,
    nodeActionsClicked: function nodeActionsClicked(node) {
      var _node$text2;
      setCurrentHoveredNode({
        type: !currentNode ? 'Cluster' : currentNode.type === 'Cluster' ? 'Phrase' : 'Item',
        id: node.id,
        text: (_node$text2 = node.text) != null ? _node$text2 : '',
        properties: node.properties
      });
    },
    translate: translate,
    totalItems: dataNodes.totalItems
  })), currentPage < totalPagesAmount - 1 && React__default["default"].createElement("div", {
    className: "h-full flex items-center justify-center hover:cursor-pointer",
    onClick: nextPageClicked,
    style: {
      width: '3%',
      backgroundColor: treemapSmallColor
    }
  }, React__default["default"].createElement("button", {
    type: "button",
    className: "text-slate-500 hover:text-slate-700 font-medium rounded-lg text-sm text-center inline-flex items-center"
  }, React__default["default"].createElement("svg", {
    "aria-hidden": "true",
    className: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  })), React__default["default"].createElement("span", {
    className: "sr-only"
  }, "Next"))))))));
};
function getVisualizationLogoClasses(active) {
  return "h-7 w-7 mr-1 p-1 rounded-md " + (active ? 'bg-[#EFEFEF] dark:text-white dark:bg-[#322F46]' : 'text-[#747189] hover:cursor-pointer dark:hover:text-white');
}
function mergeMetadata(metadata1, metadata2, totalItems) {
  var newMetadata = {};
  Array.from(new Set([].concat(Object.keys(metadata1), Object.keys(metadata2)))).forEach(function (key) {
    var _metadata1$key, _metadata2$key;
    if (totalItems === undefined || key !== CUSTOM_METADATA_KEY) newMetadata[key] = [].concat((_metadata1$key = metadata1[key]) != null ? _metadata1$key : [], (_metadata2$key = metadata2[key]) != null ? _metadata2$key : []);
  });
  if (totalItems === undefined) return newMetadata;
  newMetadata[CUSTOM_METADATA_KEY] = [{
    value: CUSTOM_METADATA_KEY,
    count: totalItems
  }];
  return newMetadata;
}
function mergeTrends(trends1, trends2) {
  if (!trends1 || !trends2) return [];
  var newTrends = [];
  var sourceTrends = trends1.length >= trends2.length ? trends1 : trends2;
  sourceTrends.forEach(function (_, i) {
    var _trends1$at$items_cou, _trends1$at, _trends2$at$items_cou, _trends2$at, _trends1$at$phrases_c, _trends1$at2, _trends2$at$phrases_c, _trends2$at2, _trends1$at$metadata, _trends1$at3, _trends2$at$metadata, _trends2$at3;
    newTrends.push({
      days: sourceTrends[i].days,
      period_start_date: sourceTrends[i].period_start_date,
      period_end_date: sourceTrends[i].period_end_date,
      items_count: ((_trends1$at$items_cou = (_trends1$at = trends1.at(i)) == null ? void 0 : _trends1$at.items_count) != null ? _trends1$at$items_cou : 0) + ((_trends2$at$items_cou = (_trends2$at = trends2.at(i)) == null ? void 0 : _trends2$at.items_count) != null ? _trends2$at$items_cou : 0),
      phrases_count: ((_trends1$at$phrases_c = (_trends1$at2 = trends1.at(i)) == null ? void 0 : _trends1$at2.phrases_count) != null ? _trends1$at$phrases_c : 0) + ((_trends2$at$phrases_c = (_trends2$at2 = trends2.at(i)) == null ? void 0 : _trends2$at2.phrases_count) != null ? _trends2$at$phrases_c : 0),
      metadata: mergeMetadata((_trends1$at$metadata = (_trends1$at3 = trends1.at(i)) == null ? void 0 : _trends1$at3.metadata) != null ? _trends1$at$metadata : {}, (_trends2$at$metadata = (_trends2$at3 = trends2.at(i)) == null ? void 0 : _trends2$at3.metadata) != null ? _trends2$at$metadata : {})
    });
  });
  return newTrends;
}
function getInitialCounterTypes(calculationConfiguration, defaultCounters, collection, storageKey) {
  var _localStorage$getItem2;
  var storedCounters = JSON.parse((_localStorage$getItem2 = localStorage.getItem(getCurrentStorageKey(storageKey, collection))) != null ? _localStorage$getItem2 : '[]');
  var counters = storedCounters.length > 0 ? storedCounters : defaultCounters;
  return counters.map(function (counter) {
    return {
      calculationConfiguration: calculationConfiguration.find(function (calc) {
        return calc.name === counter.calculationName;
      }),
      metadataKeyValue: counter.metadataKeyValue
    };
  }).filter(function (calc) {
    return calc.calculationConfiguration !== undefined;
  });
}
function getCurrentStorageKey(prefix, collection) {
  return prefix + "-" + collection;
}

var _excluded$1 = ["domain", "apiKey", "collection", "refreshToken"];
var cache = /*#__PURE__*/new Map();
var nodeToPageCache = /*#__PURE__*/new Map();
// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * One AI Analytics api wrapper component
 */
var OneAIAnalyticsApiWrapper = function OneAIAnalyticsApiWrapper(_ref) {
  var _metaGroupClicked$val;
  var _ref$domain = _ref.domain,
    domain = _ref$domain === void 0 ? 'https://api.oneai.com' : _ref$domain,
    _ref$apiKey = _ref.apiKey,
    apiKey = _ref$apiKey === void 0 ? '' : _ref$apiKey,
    _ref$collection = _ref.collection,
    collection = _ref$collection === void 0 ? '' : _ref$collection,
    _ref$refreshToken = _ref.refreshToken,
    refreshToken = _ref$refreshToken === void 0 ? '' : _ref$refreshToken,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  var _useState = React.useState(true),
    loading = _useState[0],
    setLoading = _useState[1];
  var _useState2 = React.useState(null),
    error = _useState2[0],
    setError = _useState2[1];
  var _useState3 = React.useState({
      totalItems: 0,
      nodes: []
    }),
    currentNodes = _useState3[0],
    setCurrentNodes = _useState3[1];
  var _useState4 = React.useState([]),
    clickedNodes = _useState4[0],
    setClickedNodes = _useState4[1];
  var _useState5 = React.useState(0),
    currentPage = _useState5[0],
    setCurrentPage = _useState5[1];
  var _useState6 = React.useState(0),
    totalPages = _useState6[0],
    setTotalPages = _useState6[1];
  var _useState7 = React.useState([null, null]),
    dateRange = _useState7[0],
    setDateRange = _useState7[1];
  var _useState8 = React.useState([]),
    labelsFilters = _useState8[0],
    setLabelsFilters = _useState8[1];
  var _useState9 = React.useState(refreshToken),
    localRefreshToken = _useState9[0],
    setLocalRefreshToken = _useState9[1];
  var _useState10 = React.useState(0),
    trendPeriods = _useState10[0],
    setTrendPeriods = _useState10[1];
  var _useState11 = React.useState({
      hide: 'true'
    }),
    propertiesFilters = _useState11[0],
    _setPropertiesFilters = _useState11[1];
  var _useState12 = React.useState([]),
    metaOptions = _useState12[0],
    setMetaOptions = _useState12[1];
  var _useState13 = React.useState('text'),
    currentMetaGroup = _useState13[0],
    setCurrentMetaGroup = _useState13[1];
  var _useState14 = React.useState(null),
    metaGroupClicked = _useState14[0],
    setMetaGroupClicked = _useState14[1];
  var previousValues = React.useRef({
    domain: null,
    apiKey: null,
    collection: null,
    refreshToken: null,
    localRefreshToken: null,
    clickedNodes: null,
    currentPage: null,
    lastMetaGroup: 'text'
  });
  var fetchMetaClusters = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(controller) {
      var metaClusters, newNodes, mappedNodes;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetchMetaClustersApi(controller, domain, collection, apiKey, 0, dateRange[0], dateRange[1], labelsFilters, trendPeriods, propertiesFilters);
          case 2:
            metaClusters = _context.sent;
            newNodes = metaClusters.data.map(function (c) {
              return {
                type: 'Meta',
                data: c
              };
            });
            mappedNodes = newNodes.map(function (n) {
              return n.data.meta_key;
            });
            setMetaOptions(mappedNodes);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function fetchMetaClusters(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  React.useEffect(function () {
    if (previousValues.current.domain !== domain || previousValues.current.apiKey !== apiKey || previousValues.current.collection !== collection || previousValues.current.refreshToken !== refreshToken || previousValues.current.localRefreshToken !== localRefreshToken || previousValues.current.lastMetaGroup !== currentMetaGroup) {
      setCurrentNodes({
        totalItems: 0,
        nodes: []
      });
      setClickedNodes([]);
      setCurrentPage(0);
      cache.clear();
      previousValues.current = {
        domain: domain,
        apiKey: apiKey,
        collection: collection,
        refreshToken: refreshToken,
        localRefreshToken: localRefreshToken,
        clickedNodes: null,
        currentPage: null,
        lastMetaGroup: currentMetaGroup
      };
    }
  }, [domain, apiKey, collection, refreshToken, localRefreshToken, currentMetaGroup]);
  React.useEffect(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(controller) {
        var currentClicked, cached, metaClusters, newNodes, _totalPages, totalItems, slicedNodes, _cached, clusters, _newNodes, clusterId, _cached2, phrases, _newNodes2, phraseId, _cached3, items, _newNodes3;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              setLoading(true);
              currentClicked = clickedNodes.at(-1);
              if (!(currentMetaGroup !== 'text' && !currentClicked)) {
                _context2.next = 26;
                break;
              }
              cached = getNodesFromCache(COLLECTION_TYPE, collection + '_meta', currentPage);
              if (!cached) {
                _context2.next = 9;
                break;
              }
              setCurrentNodes({
                totalItems: cached.totalItems,
                nodes: cached.nodes
              });
              setTotalPages(cached.totalPages);
              _context2.next = 24;
              break;
            case 9:
              _context2.next = 11;
              return fetchMetaClustersApi(controller, domain, collection, apiKey, 0, dateRange[0], dateRange[1], labelsFilters, trendPeriods, propertiesFilters, currentMetaGroup);
            case 11:
              metaClusters = _context2.sent;
              if (!metaClusters.error) {
                _context2.next = 17;
                break;
              }
              if (!metaClusters.error.includes('AbortError')) {
                _context2.next = 15;
                break;
              }
              return _context2.abrupt("return");
            case 15:
              setError(metaClusters.error);
              return _context2.abrupt("return", setLoading(false));
            case 17:
              setError(null);
              newNodes = metaClusters.data.sort(function (m1, m2) {
                return m2.items_count - m1.items_count;
              }).map(function (c) {
                return {
                  type: 'Meta',
                  data: c
                };
              });
              _totalPages = Math.ceil(metaClusters.data.length / PAGE_SIZE);
              totalItems = metaClusters.data.reduce(function (prev, current) {
                return prev + current.items_count;
              }, 0);
              slicedNodes = newNodes.slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE);
              if (clickedNodes.at(-1) == currentClicked) {
                setCurrentNodes({
                  totalItems: totalItems,
                  nodes: slicedNodes
                });
                setTotalPages(_totalPages);
              }
              setNodesDataInCache('Collection', collection + '_meta', currentPage, slicedNodes, _totalPages, totalItems);
            case 24:
              _context2.next = 89;
              break;
            case 26:
              if (currentClicked) {
                _context2.next = 47;
                break;
              }
              _cached = getNodesFromCache(COLLECTION_TYPE, collection, currentPage);
              if (!_cached) {
                _context2.next = 33;
                break;
              }
              setTotalPages(_cached.totalPages);
              setCurrentNodes({
                totalItems: _cached.totalItems,
                nodes: _cached.nodes
              });
              _context2.next = 45;
              break;
            case 33:
              _context2.next = 35;
              return fetchClusters(controller, domain, collection, apiKey, currentPage, dateRange[0], dateRange[1], [].concat(labelsFilters, metaGroupClicked ? [metaGroupClicked] : []), trendPeriods, propertiesFilters);
            case 35:
              clusters = _context2.sent;
              if (!clusters.error) {
                _context2.next = 41;
                break;
              }
              if (!clusters.error.includes('AbortError')) {
                _context2.next = 39;
                break;
              }
              return _context2.abrupt("return");
            case 39:
              setError(clusters.error);
              return _context2.abrupt("return", setLoading(false));
            case 41:
              setError(null);
              _newNodes = clusters.data.map(function (c) {
                return {
                  type: 'Cluster',
                  data: c
                };
              });
              if (clickedNodes.at(-1) == currentClicked) {
                setCurrentNodes({
                  totalItems: clusters.totalItems,
                  nodes: _newNodes
                });
                setTotalPages(clusters.totalPages);
              }
              setNodesDataInCache('Collection', collection, currentPage, _newNodes, clusters.totalPages, clusters.totalItems);
            case 45:
              _context2.next = 89;
              break;
            case 47:
              if (!(currentClicked.type === 'Cluster')) {
                _context2.next = 69;
                break;
              }
              clusterId = currentClicked.data.cluster_id.toString();
              _cached2 = getNodesFromCache(currentClicked.type, clusterId, currentPage);
              if (!_cached2) {
                _context2.next = 55;
                break;
              }
              setTotalPages(_cached2.totalPages);
              setCurrentNodes({
                totalItems: _cached2.totalItems,
                nodes: _cached2.nodes
              });
              _context2.next = 67;
              break;
            case 55:
              _context2.next = 57;
              return fetchPhrases(controller, domain, collection, clusterId, apiKey, currentPage, dateRange[0], dateRange[1], [].concat(labelsFilters, metaGroupClicked ? [metaGroupClicked] : []), trendPeriods, propertiesFilters);
            case 57:
              phrases = _context2.sent;
              if (!phrases.error) {
                _context2.next = 63;
                break;
              }
              if (!phrases.error.includes('AbortError')) {
                _context2.next = 61;
                break;
              }
              return _context2.abrupt("return");
            case 61:
              setError(phrases.error);
              return _context2.abrupt("return", setLoading(false));
            case 63:
              setError(null);
              _newNodes2 = phrases.data.map(function (p) {
                return {
                  type: 'Phrase',
                  data: p
                };
              });
              if (clickedNodes.at(-1) == currentClicked) {
                setCurrentNodes({
                  totalItems: phrases.totalItems,
                  nodes: _newNodes2
                });
                setTotalPages(phrases.totalPages);
              }
              setNodesDataInCache(currentClicked.type, clusterId, currentPage, _newNodes2, phrases.totalPages, phrases.totalItems);
            case 67:
              _context2.next = 89;
              break;
            case 69:
              if (!(currentClicked.type === 'Phrase')) {
                _context2.next = 89;
                break;
              }
              phraseId = currentClicked.data.phrase_id.toString();
              _cached3 = getNodesFromCache(currentClicked.type, phraseId, currentPage);
              if (!_cached3) {
                _context2.next = 77;
                break;
              }
              setTotalPages(_cached3.totalPages);
              setCurrentNodes({
                totalItems: _cached3.totalItems,
                nodes: _cached3.nodes
              });
              _context2.next = 89;
              break;
            case 77:
              _context2.next = 79;
              return fetchItems(controller, domain, collection, phraseId, apiKey, currentPage, dateRange[0], dateRange[1], [].concat(labelsFilters, metaGroupClicked ? [metaGroupClicked] : []), trendPeriods, propertiesFilters);
            case 79:
              items = _context2.sent;
              if (!items.error) {
                _context2.next = 85;
                break;
              }
              if (!items.error.includes('AbortError')) {
                _context2.next = 83;
                break;
              }
              return _context2.abrupt("return");
            case 83:
              setError(items.error);
              return _context2.abrupt("return", setLoading(false));
            case 85:
              setError(null);
              _newNodes3 = items.data.map(function (i) {
                return {
                  type: 'Item',
                  data: i
                };
              });
              if (clickedNodes.at(-1) == currentClicked) {
                setCurrentNodes({
                  totalItems: items.totalItems,
                  nodes: _newNodes3
                });
                setTotalPages(items.totalPages);
              }
              setNodesDataInCache(currentClicked.type, phraseId, currentPage, _newNodes3, items.totalPages, items.totalItems);
            case 89:
              setLoading(false);
            case 90:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function fetchData(_x2) {
        return _ref3.apply(this, arguments);
      };
    }();
    var controller = new AbortController();
    if (previousValues.current.domain !== domain || previousValues.current.apiKey !== apiKey || previousValues.current.collection !== collection || previousValues.current.clickedNodes != clickedNodes || previousValues.current.currentPage !== currentPage || previousValues.current.lastMetaGroup !== currentMetaGroup) {
      fetchMetaClusters(controller)["catch"](function (e) {
        console.error(e);
      });
      fetchData(controller)["catch"](function (e) {
        console.error(e);
        setLoading(false);
      });
      previousValues.current = {
        domain: domain,
        apiKey: apiKey,
        collection: collection,
        clickedNodes: clickedNodes,
        currentPage: currentPage,
        refreshToken: refreshToken,
        localRefreshToken: localRefreshToken,
        lastMetaGroup: currentMetaGroup
      };
    }
    return function () {
      controller.abort();
    };
  }, [domain, collection, apiKey, clickedNodes, currentPage, currentMetaGroup]);
  var nodeClicked = function nodeClicked(node) {
    var currentNodeDetails = getNodeDetails(clickedNodes.at(-1), collection);
    if (currentMetaGroup !== 'text') {
      return setLocalRefreshToken(function (current) {
        var _node$id$split = node.id.split('$$'),
          key = _node$id$split[0],
          value = _node$id$split[1];
        setMetaGroupClicked({
          key: key,
          value: value
        });
        setCurrentMetaGroup('text');
        return current.length > 2 ? '1' : current + '1';
      });
    }
    setNodePageNumberInCache(currentNodeDetails.type, currentNodeDetails.id, currentPage);
    var clickedNode = null;
    if (node.type === 'Cluster') {
      var _currentNodes$nodes$f;
      clickedNode = (_currentNodes$nodes$f = currentNodes.nodes.find(function (n) {
        return n.data.cluster_id.toString() === node.id;
      })) != null ? _currentNodes$nodes$f : null;
    } else if (node.type === 'Phrase') {
      var _currentNodes$nodes$f2;
      clickedNode = (_currentNodes$nodes$f2 = currentNodes.nodes.find(function (n) {
        return n.data.phrase_id.toString() === node.id;
      })) != null ? _currentNodes$nodes$f2 : null;
    }
    if (clickedNode) {
      var nodeCachedPage = getNodePageNumberFromCache(clickedNode.type, getNodeId(clickedNode));
      setCurrentPage(nodeCachedPage);
      setClickedNodes(function (currentClickedCluster) {
        return [].concat(currentClickedCluster, [clickedNode]);
      });
    }
  };
  var goBack = function goBack(skip) {
    if (skip === void 0) {
      skip = 1;
    }
    if (skip === 0) {
      if (currentMetaGroup !== 'text') {
        setMetaGroupClicked(null);
        setCurrentMetaGroup('text');
      }
      return;
    }
    setClickedNodes(function (clickedClusters) {
      var originalClickedAmount = clickedClusters.length;
      for (var i = 0; i < skip; i++) {
        clickedClusters.pop();
      }
      var currentNodeDetails = getNodeDetails(clickedClusters.at(-1), collection);
      var nodeCachedPage = getNodePageNumberFromCache(currentNodeDetails.type, currentNodeDetails.id);
      setCurrentPage(nodeCachedPage);
      var extraBackNodes = originalClickedAmount - skip;
      if (extraBackNodes < 0) {
        setLocalRefreshToken(function (current) {
          if (extraBackNodes === -1) {
            var _metaGroupClicked$key;
            setCurrentMetaGroup((_metaGroupClicked$key = metaGroupClicked == null ? void 0 : metaGroupClicked.key) != null ? _metaGroupClicked$key : 'text');
            setMetaGroupClicked(null);
          } else {
            setMetaGroupClicked(null);
            setCurrentMetaGroup('text');
          }
          return current.length > 2 ? '1' : current + '1';
        });
      }
      return [].concat(clickedClusters);
    });
  };
  return currentNodes ? React__default["default"].createElement(OneAiAnalytics, _extends({
    dataNodes: currentNodes != null ? currentNodes : {
      totalItems: 0,
      nodes: []
    },
    currentNode: clickedNodes.at(-1),
    nodeClicked: nodeClicked,
    goBackClicked: goBack,
    currentPage: currentPage,
    totalPagesAmount: totalPages,
    nextPageClicked: function nextPageClicked() {
      return setCurrentPage(function (page) {
        return page + 1;
      });
    },
    prevPageClicked: function prevPageClicked() {
      return setCurrentPage(function (page) {
        return page - 1;
      });
    },
    loading: loading,
    error: error,
    nodesPath: [{
      text: collection
    }].concat(metaGroupClicked ? [{
      text: metaGroupClicked.key
    }, {
      text: (_metaGroupClicked$val = metaGroupClicked.value) != null ? _metaGroupClicked$val : ''
    }] : [], clickedNodes.map(function (node) {
      var _getNodeOriginalAndTr = getNodeOriginalAndTranslatedText(node),
        originalText = _getNodeOriginalAndTr.originalText,
        translatedText = _getNodeOriginalAndTr.translatedText;
      return {
        text: originalText != null ? originalText : getNodeText(node),
        translated: translatedText
      };
    })),
    dateRangeChanged: function dateRangeChanged(from, to) {
      return setLocalRefreshToken(function (current) {
        setDateRange([from, to]);
        return current + '1';
      });
    },
    labelsFilters: labelsFilters,
    labelClicked: function labelClicked(key, value) {
      if (!labelsFilters.some(function (keyValue) {
        var _keyValue$value;
        return keyValue.key.toLowerCase() === key.toLowerCase() && ((_keyValue$value = keyValue.value) == null ? void 0 : _keyValue$value.toLowerCase()) === value.toLowerCase();
      })) setLocalRefreshToken(function (current) {
        setLabelsFilters(function (labels) {
          return [].concat(labels, [{
            key: key,
            value: value
          }]);
        });
        return current.length > 2 ? '1' : current + '1';
      });
    },
    labelFilterDeleted: function labelFilterDeleted(i) {
      return setLocalRefreshToken(function (current) {
        setLabelsFilters(function (filters) {
          filters.splice(i, 1);
          return [].concat(filters);
        });
        return current.length > 2 ? '1' : current + '1';
      });
    },
    trendPeriods: trendPeriods,
    trendPeriodsChanged: function trendPeriodsChanged(newTrendPeriod) {
      return setLocalRefreshToken(function (current) {
        setTrendPeriods(newTrendPeriod);
        return current + '1';
      });
    },
    searchSimilarClusters: function searchSimilarClusters(text, controller) {
      return _searchSimilarClusters(controller, domain, collection, apiKey, text);
    },
    splitPhrase: function splitPhrase(phraseId, controller) {
      return _splitPhrase(controller, domain, collection, apiKey, phraseId, setLocalRefreshToken);
    },
    mergeClusters: function mergeClusters(source, destination, controller) {
      return _mergeClusters(controller, domain, collection, apiKey, source, destination, setLocalRefreshToken);
    },
    toggleHide: function toggleHide(node, hide) {
      return _toggleHide(domain, collection, apiKey, node, hide, clickedNodes.at(-1), setLocalRefreshToken);
    },
    propertiesFilters: propertiesFilters,
    setPropertiesFilters: function setPropertiesFilters(properties) {
      return setLocalRefreshToken(function (current) {
        _setPropertiesFilters(properties);
        return current.length > 2 ? '1' : current + '1';
      });
    },
    metaOptions: ['text'].concat(uniqBy(metaOptions, function (m) {
      return m.toLowerCase();
    })),
    currentMetaOption: currentMetaGroup,
    metaOptionsChanged: function metaOptionsChanged(metaOptions) {
      return setCurrentMetaGroup(metaOptions);
    },
    refresh: function refresh() {
      return setLocalRefreshToken(function (current) {
        return current.length > 2 ? '1' : current + '1';
      });
    }
  }, rest)) : null;
};
function fetchClusters(_x3, _x4, _x5, _x6, _x7, _x8, _x9, _x10, _x11, _x12) {
  return _fetchClusters.apply(this, arguments);
}
function _fetchClusters() {
  _fetchClusters = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(controller, domain, collection, apiKey, page, from, to, labelsFilters, trendPeriods, propertiesFilters) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return fetchApi(controller, domain + "/clustering/v1/collections/" + collection + "/clusters", apiKey, 'clusters', page, from, to, labelsFilters, trendPeriods, propertiesFilters);
        case 2:
          return _context3.abrupt("return", _context3.sent);
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _fetchClusters.apply(this, arguments);
}
function fetchPhrases(_x13, _x14, _x15, _x16, _x17, _x18, _x19, _x20, _x21, _x22, _x23) {
  return _fetchPhrases.apply(this, arguments);
}
function _fetchPhrases() {
  _fetchPhrases = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(controller, domain, collection, clusterId, apiKey, page, from, to, labelsFilters, trendPeriods, propertiesFilters) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return fetchApi(controller, domain + "/clustering/v1/collections/" + collection + "/clusters/" + clusterId + "/phrases", apiKey, 'phrases', page, from, to, labelsFilters, trendPeriods, propertiesFilters);
        case 2:
          return _context4.abrupt("return", _context4.sent);
        case 3:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _fetchPhrases.apply(this, arguments);
}
function fetchItems(_x24, _x25, _x26, _x27, _x28, _x29, _x30, _x31, _x32, _x33, _x34) {
  return _fetchItems.apply(this, arguments);
}
function _fetchItems() {
  _fetchItems = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(controller, domain, collection, phraseId, apiKey, page, from, to, labelsFilters, trendPeriods, propertiesFilters) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return fetchApi(controller, domain + "/clustering/v1/collections/" + collection + "/phrases/" + phraseId + "/items", apiKey, 'items', page, from, to, labelsFilters, trendPeriods, propertiesFilters);
        case 2:
          return _context5.abrupt("return", _context5.sent);
        case 3:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _fetchItems.apply(this, arguments);
}
function fetchMetaClustersApi(_x35, _x36, _x37, _x38, _x39, _x40, _x41, _x42, _x43, _x44, _x45) {
  return _fetchMetaClustersApi.apply(this, arguments);
}
function _fetchMetaClustersApi() {
  _fetchMetaClustersApi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(controller, domain, collection, apiKey, page, from, to, labelsFilters, trendPeriods, propertiesFilters, metaGroup) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return fetchApi(controller, domain + "/clustering/v1/collections/" + collection + "/metadata" + (metaGroup ? "/" + metaGroup : ''), apiKey, 'content', page, from, to, labelsFilters, trendPeriods, propertiesFilters, "&group-by-meta-value=true" + (metaGroup ? '&include-metadata=true' : ''), 1000);
        case 2:
          return _context6.abrupt("return", _context6.sent);
        case 3:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _fetchMetaClustersApi.apply(this, arguments);
}
function fetchApi(_x46, _x47, _x48, _x49, _x50, _x51, _x52, _x53, _x54, _x55, _x56, _x57) {
  return _fetchApi.apply(this, arguments);
}
function _fetchApi() {
  _fetchApi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(controller, url, apiKey, accessor, page, from, to, labelsFilters, trendPeriods, propertiesFilters, extraParams, limit) {
    var labelsFiltersString, propertiesFiltersString, res, json, error;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          labelsFiltersString = labelsFilters.map(function (metadataKeyValue) {
            return metadataKeyValue.key && metadataKeyValue.value ? metadataKeyValue.key + " eq '" + metadataKeyValue.value + "'" : '';
          }).filter(function (str) {
            return str !== '';
          });
          propertiesFiltersString = Object.keys(propertiesFilters).map(function (key) {
            var value = propertiesFilters[key];
            if (value) {
              return key + " neq '" + value + "'";
            }
            return '';
          });
          _context7.prev = 2;
          _context7.next = 5;
          return fetch(encodeURI(url + "?page=" + page + "&limit=" + (limit !== undefined ? limit : PAGE_SIZE) + "&translate=true" + (from ? "&from-date=" + dateFns.format(from, 'yyyy-MM-dd') : '') + (to ? "&to-date=" + dateFns.format(to, 'yyyy-MM-dd') : '') + (labelsFiltersString.length > 0 ? "&item-metadata=" + labelsFiltersString.join(' and ') : '') + (trendPeriods > 1 ? "&include-trends=true&trend-periods-limit=" + trendPeriods : '') + (propertiesFiltersString.length > 0 ? "&properties-query=" + propertiesFiltersString.join(' and ') : '') + (extraParams ? extraParams : '')), {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'api-key': apiKey
            },
            signal: controller.signal
          });
        case 5:
          res = _context7.sent;
          if (!(res.status !== 200 || !res.ok)) {
            _context7.next = 14;
            break;
          }
          _context7.t0 = [];
          _context7.t1 = 'Error fetching data, status: ' + res.status + ': ';
          _context7.next = 11;
          return res.text();
        case 11:
          _context7.t2 = _context7.sent;
          _context7.t3 = _context7.t1 + _context7.t2;
          return _context7.abrupt("return", {
            totalPages: 0,
            totalItems: 0,
            data: _context7.t0,
            error: _context7.t3
          });
        case 14:
          _context7.next = 16;
          return res.json();
        case 16:
          json = _context7.sent;
          return _context7.abrupt("return", {
            totalPages: json['total_pages'],
            totalItems: json['total_items'],
            data: json[accessor],
            error: null
          });
        case 20:
          _context7.prev = 20;
          _context7.t4 = _context7["catch"](2);
          error = String(_context7.t4);
          console.error('error occurred ->', error);
          return _context7.abrupt("return", {
            totalPages: 0,
            totalItems: 0,
            data: [],
            error: "Error fetching data, " + error
          });
        case 25:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[2, 20]]);
  }));
  return _fetchApi.apply(this, arguments);
}
function getNodesFromCache(parentType, parentId, page) {
  var cached = cache.get(assembleCacheId(parentType, parentId, page));
  if (cached && getSecondsDiff(cached.time, new Date()) < 90) {
    return cached;
  }
  return null;
}
function setNodesDataInCache(parentType, parentId, page, nodes, totalPages, totalItems) {
  cache.set(assembleCacheId(parentType, parentId, page), {
    nodes: nodes,
    totalPages: totalPages,
    time: new Date(),
    totalItems: totalItems
  });
}
function getNodePageNumberFromCache(nodeType, nodeId) {
  var cached = nodeToPageCache.get(assembleCacheId(nodeType, nodeId));
  if (cached) {
    return cached;
  }
  return 0;
}
function setNodePageNumberInCache(nodeType, nodeId, page) {
  nodeToPageCache.set(assembleCacheId(nodeType, nodeId), page);
}
function assembleCacheId(type, id, page) {
  if (page === void 0) {
    page = 0;
  }
  return type + "-" + id + "-" + page;
}
function _searchSimilarClusters(_x58, _x59, _x60, _x61, _x62) {
  return _searchSimilarClusters2.apply(this, arguments);
}
function _searchSimilarClusters2() {
  _searchSimilarClusters2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(controller, domain, collection, apiKey, text) {
    var res, clusters;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return fetch(domain + "/clustering/v1/collections/" + collection + "/clusters/find?text=" + text + "&translate=true", {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'api-key': apiKey
            },
            signal: controller.signal
          });
        case 3:
          res = _context8.sent;
          if (!(res.status !== 200 || !res.ok)) {
            _context8.next = 6;
            break;
          }
          return _context8.abrupt("return", []);
        case 6:
          _context8.next = 8;
          return res.json();
        case 8:
          clusters = _context8.sent;
          if (!(!clusters || clusters.length === 0)) {
            _context8.next = 11;
            break;
          }
          return _context8.abrupt("return", []);
        case 11:
          return _context8.abrupt("return", clusters.sort(function (c1, c2) {
            return c2.similarity - c1.similarity;
          }).map(function (c) {
            return {
              id: c.cluster_id,
              text: c.cluster_text,
              translation: c.item_translated_text
            };
          }));
        case 14:
          _context8.prev = 14;
          _context8.t0 = _context8["catch"](0);
          console.error('error occurred ->', _context8.t0);
          return _context8.abrupt("return", []);
        case 18:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 14]]);
  }));
  return _searchSimilarClusters2.apply(this, arguments);
}
function _splitPhrase(_x63, _x64, _x65, _x66, _x67, _x68) {
  return _splitPhrase2.apply(this, arguments);
}
function _splitPhrase2() {
  _splitPhrase2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(controller, domain, collection, apiKey, phraseId, setLocalRefreshToken) {
    var res, json;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return fetch(domain + "/clustering/v1/collections/" + collection + "/phrases/" + phraseId + "/split", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'api-key': apiKey
            },
            signal: controller.signal
          });
        case 3:
          res = _context9.sent;
          if (!(res.status !== 200 || !res.ok)) {
            _context9.next = 6;
            break;
          }
          return _context9.abrupt("return", {
            status: 'error',
            message: 'unknown'
          });
        case 6:
          _context9.next = 8;
          return res.json();
        case 8:
          json = _context9.sent;
          if (!json.message) {
            setLocalRefreshToken(function (current) {
              if (current.length > 5) {
                return '';
              }
              return current + '1';
            });
          }
          return _context9.abrupt("return", json);
        case 13:
          _context9.prev = 13;
          _context9.t0 = _context9["catch"](0);
          console.error('error occurred ->', _context9.t0);
          return _context9.abrupt("return", {
            status: 'error',
            message: String(_context9.t0)
          });
        case 17:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 13]]);
  }));
  return _splitPhrase2.apply(this, arguments);
}
function _mergeClusters(_x69, _x70, _x71, _x72, _x73, _x74, _x75) {
  return _mergeClusters2.apply(this, arguments);
}
function _mergeClusters2() {
  _mergeClusters2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(controller, domain, collection, apiKey, source, destination, setLocalRefreshToken) {
    var res, json;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return fetch(domain + "/clustering/v1/collections/" + collection + "/merge", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              'api-key': apiKey
            },
            body: JSON.stringify({
              source_clusters: source,
              destination_cluster: destination
            }),
            signal: controller.signal
          });
        case 3:
          res = _context10.sent;
          if (!(res.status !== 200 || !res.ok)) {
            _context10.next = 6;
            break;
          }
          return _context10.abrupt("return", {
            status: 'error',
            message: 'unknown'
          });
        case 6:
          _context10.next = 8;
          return res.json();
        case 8:
          json = _context10.sent;
          if (!json.message) {
            setLocalRefreshToken(function (current) {
              if (current.length > 5) {
                return '';
              }
              return current + '1';
            });
          }
          return _context10.abrupt("return", json);
        case 13:
          _context10.prev = 13;
          _context10.t0 = _context10["catch"](0);
          console.error('error occurred ->', _context10.t0);
          return _context10.abrupt("return", {
            status: 'error',
            message: String(_context10.t0)
          });
        case 17:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 13]]);
  }));
  return _mergeClusters2.apply(this, arguments);
}
function _toggleHide(_x76, _x77, _x78, _x79, _x80, _x81, _x82) {
  return _toggleHide2.apply(this, arguments);
}
function _toggleHide2() {
  _toggleHide2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(domain, collection, apiKey, node, hide, currentClickedNode, setLocalRefreshToken) {
    var clusterId, res;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          if (node) {
            _context11.next = 2;
            break;
          }
          return _context11.abrupt("return");
        case 2:
          _context11.prev = 2;
          clusterId = node.type === 'Cluster' ? node.id : getNodeId(currentClickedNode);
          _context11.next = 6;
          return fetch(domain + "/clustering/v1/collections/" + collection + "/clusters/" + clusterId + (node.type === 'Phrase' ? "/phrases/" + node.id : '') + "/settings", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              'api-key': apiKey
            },
            body: JSON.stringify({
              properties: {
                hide: hide
              }
            })
          });
        case 6:
          res = _context11.sent;
          if (!(res.status !== 200 || !res.ok)) {
            _context11.next = 9;
            break;
          }
          return _context11.abrupt("return");
        case 9:
          setLocalRefreshToken(function (current) {
            if (current.length > 5) {
              return '';
            }
            return current + '1';
          });
          _context11.next = 15;
          break;
        case 12:
          _context11.prev = 12;
          _context11.t0 = _context11["catch"](2);
          console.error('error occurred ->', _context11.t0);
        case 15:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[2, 12]]);
  }));
  return _toggleHide2.apply(this, arguments);
}

var _excluded = ["exampleNodes", "collection"];
// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * One AI Analytics static data wrapper component
 */
var OneAIAnalyticsStaticDataWrapper = function OneAIAnalyticsStaticDataWrapper(_ref) {
  var _currentPages$at$map, _currentPages$at2;
  var exampleNodes = _ref.exampleNodes,
    _ref$collection = _ref.collection,
    collection = _ref$collection === void 0 ? '' : _ref$collection,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  var _useState = React.useState(exampleNodes),
    currentNodes = _useState[0],
    setCurrentNodes = _useState[1];
  var _useState2 = React.useState([]),
    clickedNodes = _useState2[0],
    setClickedNodes = _useState2[1];
  var _useState3 = React.useState(0),
    currentPage = _useState3[0],
    setCurrentPage = _useState3[1];
  var currentPages = React.useMemo(function () {
    return chunks(currentNodes, PAGE_SIZE);
  }, [currentNodes]);
  React.useEffect(function () {
    setClickedNodes([]);
    setCurrentPage(0);
    setCurrentNodes(exampleNodes);
  }, [exampleNodes]);
  var nodeClicked = function nodeClicked(node) {
    setCurrentNodes(function (currentClusters) {
      var _currentPages$at, _ref2, _clickedNode$children, _clickedNode$items;
      var clickedNode = (_currentPages$at = currentPages.at(currentPage)) == null ? void 0 : _currentPages$at.at(Number(node.id));
      if (clickedNode) {
        setClickedNodes(function (currentClickedCluster) {
          return [].concat(currentClickedCluster, [clickedNode]);
        });
        setCurrentPage(0);
      }
      return (_ref2 = (_clickedNode$children = clickedNode == null ? void 0 : clickedNode.children) != null ? _clickedNode$children : clickedNode == null ? void 0 : (_clickedNode$items = clickedNode.items) == null ? void 0 : _clickedNode$items.map(function (item) {
        return {
          id: item,
          items_count: 1,
          text: item,
          type: 'Item'
        };
      })) != null ? _ref2 : currentClusters;
    });
  };
  var goBack = function goBack(skip) {
    if (skip === void 0) {
      skip = 0;
    }
    setClickedNodes(function (clickedClusters) {
      var _clickedClusters$at$c, _clickedClusters$at;
      for (var i = 0; i < skip; i++) {
        clickedClusters.pop();
      }
      setCurrentPage(0);
      setCurrentNodes((_clickedClusters$at$c = (_clickedClusters$at = clickedClusters.at(-1)) == null ? void 0 : _clickedClusters$at.children) != null ? _clickedClusters$at$c : exampleNodes);
      return [].concat(clickedClusters);
    });
  };
  var currentClickedNode = React.useMemo(function () {
    var currentClicked = clickedNodes.at(-1);
    if (currentClicked) {
      return {
        type: currentClicked.type,
        data: getNodeData(currentClicked, 0)
      };
    }
    return;
  }, [clickedNodes]);
  return React__default["default"].createElement(OneAiAnalytics, _extends({
    dataNodes: {
      totalItems: exampleNodes.reduce(function (acc, node) {
        return acc + node.items_count;
      }, 0),
      nodes: (_currentPages$at$map = (_currentPages$at2 = currentPages.at(currentPage)) == null ? void 0 : _currentPages$at2.map(function (node, index) {
        return {
          type: node.type,
          data: getNodeData(node, index)
        };
      })) != null ? _currentPages$at$map : []
    },
    currentNode: currentClickedNode,
    nodeClicked: nodeClicked,
    goBackClicked: goBack,
    currentPage: currentPage,
    totalPagesAmount: currentPages.length,
    nextPageClicked: function nextPageClicked() {
      return setCurrentPage(function (page) {
        return page + 1;
      });
    },
    prevPageClicked: function prevPageClicked() {
      return setCurrentPage(function (page) {
        return page - 1;
      });
    },
    nodesPath: [{
      text: collection
    }].concat(clickedNodes.map(function (node) {
      return {
        text: node.text
      };
    }))
  }, rest));
};
function getNodeData(node, index) {
  if (node.type === 'Cluster') {
    var _node$children$length, _node$children;
    return {
      cluster_id: index,
      cluster_phrase: node.text,
      collection: '',
      items_count: node.items_count,
      phrases_count: (_node$children$length = (_node$children = node.children) == null ? void 0 : _node$children.length) != null ? _node$children$length : 0,
      metadata: {}
    };
  }
  if (node.type === 'Phrase') {
    return {
      phrase_id: index,
      metadata: {},
      items_count: node.items_count,
      text: node.text
    };
  }
  if (node.type === 'Item') {
    return {
      id: index,
      original_text: node.text,
      metadata: {}
    };
  }
  return;
}

var IGNORE_ID = 'False';
var CUSTOM_VALUE_ID = 'CUSTOM_VALUE';
var COLUMN_TYPES_OPTIONS = [{
  id: IGNORE_ID,
  label: 'ignore'
}, {
  id: 'input',
  label: 'text'
}, {
  id: 'input_translated',
  label: 'translation'
}, {
  id: 'timestamp',
  label: 'date & time',
  validation: function validation(value) {
    return moment__default["default"](value, moment__default["default"].ISO_8601, true).isValid();
  }
}, {
  id: CUSTOM_VALUE_ID,
  label: 'custom value'
}];

function SingleSelect(_ref) {
  var _selected$label;
  var options = _ref.options,
    selectedLabelId = _ref.selectedLabelId,
    onSelect = _ref.onSelect;
  var selected = options.find(function (o) {
    return o.id === (selectedLabelId != null ? selectedLabelId : IGNORE_ID);
  });
  return React__default["default"].createElement(react.Listbox, null, React__default["default"].createElement("div", {
    className: "relative bg-[#36334B] rounded-lg min-w-[100px]"
  }, React__default["default"].createElement(react.Listbox.Button, {
    className: "relative text-left focus:outline-none text-sm flex items-center px-2 py-2 justify-between w-full"
  }, React__default["default"].createElement("span", {
    className: "text-[#111111] dark:text-gray-300 text-sm mr-1"
  }, (_selected$label = selected == null ? void 0 : selected.label) != null ? _selected$label : 'Unknown'), React__default["default"].createElement("span", null, React__default["default"].createElement(outline.ChevronDownIcon, {
    className: "h-4 w-4 text-gray-200",
    "aria-hidden": "true"
  }))), React__default["default"].createElement(react.Transition, {
    as: React.Fragment,
    leave: "transition ease-in duration-100",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, React__default["default"].createElement(react.Listbox.Options, {
    className: "absolute mt-1 z-10 p-1 max-h-60 scrollbar-thin scrollbar-thumb-[#747189] scrollbar-track-[#272533] overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full rounded-md bg-gray-600 dark:bg-[#272533] py-1 text-base shadow-lg ring-1 ring-gray-500 dark:ring-black ring-opacity-5 focus:outline-none sm:text-sm"
  }, options.map(function (key, i) {
    return React__default["default"].createElement(DropdownOption, {
      label: key.label,
      value: key.id,
      selected: (selected == null ? void 0 : selected.id) === key.id,
      labelClicked: onSelect,
      key: i
    });
  })))));
}
function DropdownOption(_ref2) {
  var label = _ref2.label,
    value = _ref2.value,
    selected = _ref2.selected,
    labelClicked = _ref2.labelClicked;
  return React__default["default"].createElement(react.Listbox.Option, {
    className: function className(_ref3) {
      var active = _ref3.active;
      return "relative cursor-default select-none py-2 pr-4 " + (active ? 'bg-gray-400 dark:bg-[#444154] text-white' : 'text-gray-300 dark:text-[#747189]');
    },
    onClick: function onClick() {
      return labelClicked(value);
    },
    value: value
  }, React__default["default"].createElement("span", {
    className: "w-full flex"
  }, React__default["default"].createElement("div", {
    className: "flex items-center"
  }, React__default["default"].createElement("input", {
    checked: selected,
    onChange: function onChange() {},
    type: "radio",
    className: "w-4 h-4 text-[#4D4DFE] bg-gray-100 border-gray-300 focus:ring-[#4D4DFE] dark:ring-offset-gray-800 focus:ring-2 dark:bg-[#322F46] dark:border-[#322F46]"
  }), React__default["default"].createElement("label", {
    className: "text-sm ml-2 font-medium text-gray-900 dark:text-gray-300 block truncate lowercase first-letter:uppercase " + (selected ? 'font-medium' : 'font-normal')
  }, label))));
}

var allowedExtensions = ['csv'];
var OneAiUpload = function OneAiUpload(_ref) {
  var _ref$domain = _ref.domain,
    domain = _ref$domain === void 0 ? 'https://api.oneai.com' : _ref$domain,
    _ref$apiKey = _ref.apiKey,
    apiKey = _ref$apiKey === void 0 ? '' : _ref$apiKey,
    _ref$collection = _ref.collection,
    collection = _ref$collection === void 0 ? '' : _ref$collection,
    _ref$darkMode = _ref.darkMode,
    darkMode = _ref$darkMode === void 0 ? true : _ref$darkMode,
    _ref$steps = _ref.steps,
    steps = _ref$steps === void 0 ? '' : _ref$steps,
    input_skill = _ref.input_skill,
    _ref$resetAfterUpload = _ref.resetAfterUpload,
    resetAfterUpload = _ref$resetAfterUpload === void 0 ? true : _ref$resetAfterUpload,
    _ref$expected_languag = _ref.expected_languages,
    expected_languages = _ref$expected_languag === void 0 ? '' : _ref$expected_languag,
    _ref$override_languag = _ref.override_language_detection,
    override_language_detection = _ref$override_languag === void 0 ? false : _ref$override_languag,
    _ref$createCollection = _ref.createCollection,
    createCollection = _ref$createCollection === void 0 ? false : _ref$createCollection,
    _ref$collectionDomain = _ref.collectionDomain,
    collectionDomain = _ref$collectionDomain === void 0 ? 'survey' : _ref$collectionDomain,
    _ref$isPublic = _ref.isPublic,
    isPublic = _ref$isPublic === void 0 ? false : _ref$isPublic;
  var _useState = React.useState([]),
    data = _useState[0],
    setData = _useState[1];
  var _useState2 = React.useState(null),
    error = _useState2[0],
    setError = _useState2[1];
  var _useState3 = React.useState(null),
    file = _useState3[0],
    setFile = _useState3[1];
  var _useState4 = React.useState([]),
    columnsConfigurations = _useState4[0],
    setColumnsConfigurations = _useState4[1];
  var _useState5 = React.useState(false),
    loading = _useState5[0],
    setLoading = _useState5[1];
  var _useState6 = React.useState(false),
    uploaded = _useState6[0],
    setUploaded = _useState6[1];
  var _useState7 = React.useState(true),
    csvHasHeaders = _useState7[0],
    setCsvHasHeaders = _useState7[1];
  var _useState8 = React.useState(0),
    numberOfRowsToSkip = _useState8[0],
    setNumberOfRowsToSkip = _useState8[1];
  var _useState9 = React.useState(100),
    numberOfRowsToDisplay = _useState9[0],
    setNumberOfRowsToDisplay = _useState9[1];
  var _useState10 = React.useState(null),
    maxRows = _useState10[0],
    setMaxRows = _useState10[1];
  var _useState11 = React.useState(null),
    taskId = _useState11[0],
    setTaskId = _useState11[1];
  var _useState12 = React.useState(null),
    uploadStatus = _useState12[0],
    setUploadStatus = _useState12[1];
  var currentParser = React.useRef(null);
  React.useEffect(function () {
    if (!taskId || !uploaded) return;
    var interval = setInterval( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var res, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(encodeURI(domain + "/clustering/v1/collections/status/" + taskId), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey != null ? apiKey : ''
              }
            });
          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();
          case 5:
            data = _context.sent;
            console.log('data status', data);
            if (data.status === 'success') {
              setUploaded(true);
              setUploadStatus('completed');
              if (resetAfterUpload) {
                handleReset();
              }
              clearInterval(interval);
            } else if (data.status === 'failed') {
              setUploadStatus('failed');
              clearInterval(interval);
            } else {
              setUploadStatus('in progress');
            }
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })), 1000);
    return function () {
      return clearInterval(interval);
    };
  }, [taskId, uploaded]);
  var handleFileChange = function handleFileChange(e) {
    var _e$target$files;
    setError(null);
    setUploaded(false);
    try {
      var _currentParser$curren;
      (_currentParser$curren = currentParser.current) == null ? void 0 : _currentParser$curren.abort();
    } catch (e) {
      console.log(e);
    }
    var inputFile = (_e$target$files = e.target.files) == null ? void 0 : _e$target$files.item(0);
    if (!inputFile) return;
    // Check if user has entered the file
    // Check the file extensions, if it not
    // included in the allowed extensions
    // we show the error
    var fileExtension = inputFile.type.split('/')[1];
    if (!allowedExtensions.includes(fileExtension)) {
      setError('Please input a csv file');
      return;
    }
    // If input type is correct set the state
    setFile(inputFile);
    handleParse(inputFile);
  };
  var handleParse = function handleParse(file) {
    // If user clicks the parse button without
    // a file we show a error
    if (!file) return setError('Enter a valid file');
    Papa__default["default"].parse(file, {
      worker: true,
      encoding: 'utf-8',
      chunkSize: 512,
      step: function step(_ref3, parser) {
        var data = _ref3.data,
          errors = _ref3.errors;
        if (errors.length > 0) {
          console.log('errors', errors[0]);
        }
        currentParser.current = parser;
        setData(function (prev) {
          if (prev.length === 0) {
            setColumnsConfigurations(data.map(function () {
              return {
                id: IGNORE_ID
              };
            }));
          }
          return [].concat(prev, [data]);
        });
      },
      complete: function complete(results, file) {
        console.log('parsing complete read', results, file);
      }
    });
  };
  var handleReset = function handleReset() {
    setData([]);
    setFile(null);
    setColumnsConfigurations([]);
    setCsvHasHeaders(true);
    setNumberOfRowsToSkip(0);
    setMaxRows(null);
  };
  var handleUpload = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var res, _error, fetchFormData, appendSteps, expectedLanguages, pipelineJson, uploadRes, _error2, statusData;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            console.log('uploading');
            if (file) {
              _context2.next = 3;
              break;
            }
            return _context2.abrupt("return");
          case 3:
            setLoading(true);
            if (!createCollection) {
              _context2.next = 26;
              break;
            }
            _context2.prev = 5;
            _context2.next = 8;
            return fetch(encodeURI(domain + "/clustering/v1/collections/" + collection + "/create"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey != null ? apiKey : ''
              },
              body: JSON.stringify({
                access: _extends({}, isPublic && {
                  all: {
                    query: true,
                    list_clusters: true,
                    list_items: true,
                    add_items: false,
                    edit_clusters: false,
                    discoverable: true
                  }
                }),
                domain: collectionDomain
              })
            });
          case 8:
            res = _context2.sent;
            if (res.ok) {
              _context2.next = 17;
              break;
            }
            _context2.next = 12;
            return res.json();
          case 12:
            _error = _context2.sent;
            console.error('error', _error);
            setLoading(false);
            setError("Couldn't create collection");
            return _context2.abrupt("return");
          case 17:
            _context2.next = 25;
            break;
          case 19:
            _context2.prev = 19;
            _context2.t0 = _context2["catch"](5);
            console.error(_context2.t0);
            setLoading(false);
            setError("Couldn't create collection");
            return _context2.abrupt("return");
          case 25:
            console.log('collection created');
          case 26:
            fetchFormData = new FormData();
            fetchFormData.append('file', file);
            appendSteps = steps.length > 0 ? steps.replaceAll('[', '').replaceAll(']', '').replaceAll(' ', '').split(',') : [];
            expectedLanguages = expected_languages.length > 0 ? expected_languages.replaceAll('[', '').replaceAll(']', '').replaceAll(' ', '').split(',') : [];
            _context2.prev = 30;
            pipelineJson = {
              content_type: 'text/csv',
              multilingual: _extends({
                enabled: true
              }, expectedLanguages.length > 0 && {
                expected_languages: expectedLanguages
              }, override_language_detection && {
                override_language_detection: override_language_detection
              }),
              steps: [].concat(appendSteps.length > 0 ? appendSteps.map(function (step) {
                return {
                  skill: step
                };
              }) : [], [{
                skill: 'clustering',
                params: _extends({
                  collection: collection
                }, input_skill && {
                  input_skill: input_skill
                })
              }]),
              csv_params: {
                columns: columnsConfigurations.map(function (cc) {
                  return cc.id === IGNORE_ID ? false : cc.id === CUSTOM_VALUE_ID ? cc.customText : cc.id;
                }),
                skip_rows: (csvHasHeaders ? 1 : 0) + numberOfRowsToSkip,
                max_rows: maxRows !== null ? maxRows : data.length
              }
            };
            console.log('pipelineJson', pipelineJson);
            _context2.next = 35;
            return fetch(encodeURI(domain + "/api/v0/pipeline/async/file?pipeline=" + JSON.stringify(pipelineJson)), {
              method: 'POST',
              headers: {
                'Content-Type': 'text/csv',
                'api-key': apiKey != null ? apiKey : '',
                'Content-Disposition': "attachment; filename=" + encodeURI(file.name)
              },
              body: file
            });
          case 35:
            uploadRes = _context2.sent;
            if (uploadRes.ok) {
              _context2.next = 44;
              break;
            }
            _context2.next = 39;
            return uploadRes.json();
          case 39:
            _error2 = _context2.sent;
            console.error('error', _error2);
            setLoading(false);
            setError("Couldn't upload file");
            return _context2.abrupt("return");
          case 44:
            _context2.next = 46;
            return uploadRes.json();
          case 46:
            statusData = _context2.sent;
            console.log('file uploaded', statusData);
            setUploadStatus(statusData['status']);
            setTaskId(statusData['task_id']);
            _context2.next = 58;
            break;
          case 52:
            _context2.prev = 52;
            _context2.t1 = _context2["catch"](30);
            console.error(_context2.t1);
            setLoading(false);
            setError("Couldn't upload file");
            return _context2.abrupt("return");
          case 58:
            setError(null);
            if (resetAfterUpload) {
              handleReset();
            }
            setUploaded(true);
            setLoading(false);
          case 62:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[5, 19], [30, 52]]);
    }));
    return function handleUpload() {
      return _ref4.apply(this, arguments);
    };
  }();
  React.useEffect(function () {
    ReactTooltip__default["default"].hide();
    ReactTooltip__default["default"].rebuild();
  });
  var uploadDisabled = columnsConfigurations.filter(function (c) {
    return c.id === 'input';
  }).length !== 1;
  return React__default["default"].createElement("div", {
    className: "oneai-analytics-namespace h-full w-full p-2 " + (darkMode ? 'dark' : '')
  }, React__default["default"].createElement(ReactTooltip__default["default"], {
    id: "global"
  }), React__default["default"].createElement("div", {
    className: "h-full w-full overflow-hidden bg-[#272535] flex flex-col items-center text-white"
  }, error ? React__default["default"].createElement("div", {
    className: "w-full p-2 relative h-2/6"
  }, React__default["default"].createElement("div", {
    className: "absolute top-0 right-0 p-2"
  }, React__default["default"].createElement("svg", {
    onClick: function onClick() {
      return setError(null);
    },
    className: "w-6 h-6 text-white cursor-pointer",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, React__default["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M6 18L18 6M6 6l12 12"
  }))), React__default["default"].createElement("div", {
    className: "w-full h-full flex flex-col items-center justify-center"
  }, React__default["default"].createElement("svg", {
    className: "w-20 h-20 text-red-500",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, React__default["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M6 18L18 6M6 6l12 12"
  })), React__default["default"].createElement("div", {
    className: "text-2xl font-bold mt-2"
  }, error))) : React__default["default"].createElement(React__default["default"].Fragment, null), uploaded ? React__default["default"].createElement("div", {
    className: "w-full p-2 relative h-2/6"
  }, React__default["default"].createElement("div", {
    className: "absolute top-0 right-0 p-2"
  }, React__default["default"].createElement("svg", {
    onClick: function onClick() {
      return setUploaded(false);
    },
    className: "w-6 h-6 text-white cursor-pointer",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, React__default["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M6 18L18 6M6 6l12 12"
  }))), React__default["default"].createElement("div", {
    className: "w-full h-full flex flex-col items-center justify-center"
  }, React__default["default"].createElement("svg", {
    className: "w-20 h-20 text-green-500",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, React__default["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 13l4 4L19 7"
  })), React__default["default"].createElement("h1", {
    className: "text-2xl font-bold mt-4"
  }, "Upload Complete"), React__default["default"].createElement("p", {
    className: "text-lg mt-2"
  }, data.length > 0 ? (maxRows != null ? maxRows : data.length) + ' items' : 'Data', ' ', "has been uploaded to ' ", collection, " '"), React__default["default"].createElement("p", null, "Upload status: ", uploadStatus))) : null, data.length > 0 ? React__default["default"].createElement("div", {
    className: "w-full p-2 " + (uploaded || error ? 'h-4/6' : 'h-full')
  }, loading ? React__default["default"].createElement("div", {
    className: "absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"
  }, React__default["default"].createElement("div", {
    className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center"
  }, React__default["default"].createElement("svg", {
    className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, React__default["default"].createElement("circle", {
    className: "opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    strokeWidth: "4"
  }), React__default["default"].createElement("path", {
    className: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8v1a7 7 0 00-7 7h1z"
  })), React__default["default"].createElement("span", {
    className: "text-white"
  }, "Loading..."))) : null, React__default["default"].createElement("div", {
    className: 'h-full w-full flex flex-col relative ' + (loading ? 'pointer-events-none' : '')
  }, React__default["default"].createElement("div", {
    className: "h-auto w-full flex justify-between"
  }, React__default["default"].createElement("span", {
    className: "text-gray-200 pl-2"
  }, "Select columns for upload to", ' ', React__default["default"].createElement("span", {
    className: "text-white"
  }, "' ", collection, " '")), React__default["default"].createElement("div", {
    className: "flex items-center"
  }, React__default["default"].createElement("span", {
    className: "text-gray-200 pr-2"
  }, "Preview rows"), React__default["default"].createElement("input", {
    className: "w-16 h-8 text-center text-gray-700 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent",
    type: "number",
    value: numberOfRowsToDisplay,
    onChange: function onChange(e) {
      return setNumberOfRowsToDisplay(Number(e.target.value));
    }
  }))), React__default["default"].createElement("div", {
    className: "relative overflow-auto max-h-full block shadow-md sm:rounded-lg grow w-full scrollbar-upload"
  }, React__default["default"].createElement("table", {
    className: "w-full text-sm text-left text-gray-500 dark:text-gray-400"
  }, React__default["default"].createElement("thead", {
    className: "text-xs text-gray-700 uppercase dark:text-gray-400 sticky top-0 bg-[#2B293B]"
  }, React__default["default"].createElement("tr", null, data[0].map(function (header, i) {
    var _columnsConfiguration;
    return React__default["default"].createElement("th", {
      key: header + " - " + i,
      scope: "col",
      className: "px-2 py-3 w-max"
    }, React__default["default"].createElement("div", {
      className: "w-full flex flex-col items-start"
    }, React__default["default"].createElement("div", {
      className: "w-max"
    }, React__default["default"].createElement(SingleSelect, {
      options: COLUMN_TYPES_OPTIONS,
      selectedLabelId: (_columnsConfiguration = columnsConfigurations[i].id) != null ? _columnsConfiguration : null,
      onSelect: function onSelect(selectedLabelId) {
        setColumnsConfigurations(function (prev) {
          var newColumnsConfigurations = [].concat(prev);
          newColumnsConfigurations[i] = _extends({
            id: selectedLabelId
          }, selectedLabelId === CUSTOM_VALUE_ID && {
            customText: csvHasHeaders ? header : "Column " + (i + 1)
          });
          return newColumnsConfigurations;
        });
      }
    }), React__default["default"].createElement("div", {
      className: "w-max h-6"
    }, columnsConfigurations[i].id === CUSTOM_VALUE_ID ? React__default["default"].createElement("input", {
      type: "text",
      className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
      placeholder: columnsConfigurations[i].customText,
      onChange: function onChange(e) {
        return columnsConfigurations[i].customText = e.target.value.length > 0 ? e.target.value : csvHasHeaders ? header : "Column " + (i + 1);
      }
    }) : null)), React__default["default"].createElement("span", {
      className: "w-max pl-1"
    }, csvHasHeaders && header ? header : "Column " + (i + 1))));
  }))), React__default["default"].createElement("tbody", {
    className: "h-96 overflow-y-auto"
  }, data.slice(csvHasHeaders ? 1 : 0, numberOfRowsToDisplay).map(function (row, i) {
    return React__default["default"].createElement("tr", {
      key: i,
      className: "border-b border-gray-200 dark:border-gray-700"
    }, row.map(function (cell, i) {
      return React__default["default"].createElement("td", {
        key: i,
        className: "px-2 py-3 max-w-[200px] truncate"
      }, cell);
    }));
  })))), React__default["default"].createElement("div", {
    className: "absolute bottom-4 w-full"
  }, React__default["default"].createElement("div", {
    className: "flex justify-between mb-2 p-4 backdrop-blur-[2px]"
  }, React__default["default"].createElement("div", {
    className: "flex"
  }, React__default["default"].createElement("div", {
    className: "flex items-center mr-4"
  }, React__default["default"].createElement("label", {
    htmlFor: "checkbox",
    className: "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  }, "CSV has headers"), React__default["default"].createElement("input", {
    checked: csvHasHeaders,
    onChange: function onChange(e) {
      return setCsvHasHeaders(e.target.checked);
    },
    id: "checkbox",
    type: "checkbox",
    className: "w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
  })), React__default["default"].createElement("div", {
    className: "flex items-center"
  }, React__default["default"].createElement("label", {
    htmlFor: "checkbox",
    "data-for": "global",
    "data-tip": "Limit number of rows to upload",
    className: "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  }, "Upload rows"), React__default["default"].createElement("input", {
    value: maxRows != null ? maxRows : data.length,
    onChange: function onChange(e) {
      return setMaxRows(Number(e.target.value));
    },
    type: "number",
    className: "w-16 h-8 text-center text-gray-700 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
  })), React__default["default"].createElement("div", {
    className: "flex items-center"
  }, React__default["default"].createElement("label", {
    htmlFor: "checkbox",
    className: "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  }, "Skip rows"), React__default["default"].createElement("input", {
    value: numberOfRowsToSkip,
    onChange: function onChange(e) {
      return setNumberOfRowsToSkip(Number(e.target.value));
    },
    type: "number",
    className: "w-16 h-8 text-center text-gray-700 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
  }))), React__default["default"].createElement("div", {
    className: "flex"
  }, React__default["default"].createElement("button", {
    type: "button",
    onClick: handleReset,
    className: "text-gray-400 font-medium px-5 text-center hover:text-gray-300 mr-12"
  }, "Cancel"), React__default["default"].createElement("span", {
    "data-for": "global",
    "data-tip": uploadDisabled ? 'You must select one column for text' : 'Upload items'
  }, React__default["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return handleUpload();
    },
    disabled: uploadDisabled,
    className: "font-medium rounded-sm text-sm px-5 py-2.5 text-center " + (uploadDisabled ? 'bg-gray-500 text-gray-200' : 'text-white bg-indigo-500 hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800')
  }, "Upload ", maxRows != null ? maxRows : data.length, " items"))))))) : React__default["default"].createElement(React__default["default"].Fragment, null, React__default["default"].createElement("span", {
    className: "" + (uploaded ? 'mt-4' : 'mt-36')
  }, "Your collection is empty, add items to populate it"), React__default["default"].createElement("div", {
    className: "mt-4 w-96"
  }, React__default["default"].createElement("div", {
    className: "flex items-center justify-center w-full"
  }, React__default["default"].createElement("label", {
    htmlFor: "dropzone-file",
    className: "flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
  }, React__default["default"].createElement("div", {
    className: "flex flex-col items-center justify-center pt-5 pb-6"
  }, React__default["default"].createElement("svg", {
    "aria-hidden": "true",
    className: "w-10 h-10 mb-3 text-gray-400",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
  })), React__default["default"].createElement("p", {
    className: "mb-2 text-sm text-gray-500 dark:text-gray-400"
  }, React__default["default"].createElement("span", {
    className: "font-semibold"
  }, "Click to upload CSV"), ' ', "or drag and drop"), React__default["default"].createElement("ul", {
    className: "w-full flex-wrap list-disc"
  }, React__default["default"].createElement("li", {
    className: "text-xs text-gray-500 dark:text-gray-400 mt-2"
  }, "Up to 255 characters per cell"), React__default["default"].createElement("li", {
    className: "text-xs text-gray-500 dark:text-gray-400 mt-2"
  }, "Up to 1GB"), React__default["default"].createElement("li", {
    className: "text-xs text-gray-500 dark:text-gray-400 mt-2"
  }, "Up to 250 columns"))), React__default["default"].createElement("input", {
    onChange: handleFileChange,
    id: "dropzone-file",
    type: "file",
    className: "hidden"
  })))))));
};

exports.OneAIAnalyticsApiWrapper = OneAIAnalyticsApiWrapper;
exports.OneAIAnalyticsStaticDataWrapper = OneAIAnalyticsStaticDataWrapper;
exports.OneAiAnalytics = OneAiAnalytics;
exports.OneAiUpload = OneAiUpload;
//# sourceMappingURL=oneai-analytics.cjs.development.js.map
