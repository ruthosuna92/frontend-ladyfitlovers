import {
  require_react_is
} from "./chunk-4KLNKA2P.js";
import {
  require_react
} from "./chunk-ZAUFE7H7.js";
import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/react-avatar-editor/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-avatar-editor/dist/index.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require_prop_types(), require_react()) : "function" == typeof define && define.amd ? define(["prop-types", "react"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).AvatarEditor = t(e.PropTypes, e.React);
    }(exports, function(e, t) {
      "use strict";
      function o(e2) {
        return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
      }
      var n = o(e), i = o(t);
      function r(e2, t2) {
        for (var o2 = 0; o2 < t2.length; o2++) {
          var n2 = t2[o2];
          n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e2, n2.key, n2);
        }
      }
      function s(e2, t2, o2) {
        return t2 in e2 ? Object.defineProperty(e2, t2, { value: o2, enumerable: true, configurable: true, writable: true }) : e2[t2] = o2, e2;
      }
      function u() {
        return (u = Object.assign || function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var o2 = arguments[t2];
            for (var n2 in o2)
              Object.prototype.hasOwnProperty.call(o2, n2) && (e2[n2] = o2[n2]);
          }
          return e2;
        }).apply(this, arguments);
      }
      function a(t2, e2) {
        var o2, n2 = Object.keys(t2);
        return Object.getOwnPropertySymbols && (o2 = Object.getOwnPropertySymbols(t2), e2 && (o2 = o2.filter(function(e3) {
          return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
        })), n2.push.apply(n2, o2)), n2;
      }
      function y(t2) {
        for (var e2 = 1; e2 < arguments.length; e2++) {
          var o2 = null != arguments[e2] ? arguments[e2] : {};
          e2 % 2 ? a(Object(o2), true).forEach(function(e3) {
            s(t2, e3, o2[e3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(o2)) : a(Object(o2)).forEach(function(e3) {
            Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(o2, e3));
          });
        }
        return t2;
      }
      function h(e2) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e3) {
          return e3.__proto__ || Object.getPrototypeOf(e3);
        })(e2);
      }
      function c(e2, t2) {
        return (c = Object.setPrototypeOf || function(e3, t3) {
          return e3.__proto__ = t3, e3;
        })(e2, t2);
      }
      function l(e2, t2) {
        if (null == e2)
          return {};
        var o2, n2 = function(e3, t3) {
          if (null == e3)
            return {};
          for (var o3, n3 = {}, a3 = Object.keys(e3), r3 = 0; r3 < a3.length; r3++)
            o3 = a3[r3], 0 <= t3.indexOf(o3) || (n3[o3] = e3[o3]);
          return n3;
        }(e2, t2);
        if (Object.getOwnPropertySymbols)
          for (var a2 = Object.getOwnPropertySymbols(e2), r2 = 0; r2 < a2.length; r2++)
            o2 = a2[r2], 0 <= t2.indexOf(o2) || Object.prototype.propertyIsEnumerable.call(e2, o2) && (n2[o2] = e2[o2]);
        return n2;
      }
      function d(e2) {
        if (void 0 === e2)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e2;
      }
      function p(r2) {
        var i2 = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if ("function" == typeof Proxy)
            return true;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
            })), true;
          } catch (e2) {
            return false;
          }
        }();
        return function() {
          var e2, t2, o2, n2, a2 = h(r2);
          return t2 = i2 ? (e2 = h(this).constructor, Reflect.construct(a2, arguments, e2)) : a2.apply(this, arguments), o2 = this, !(n2 = t2) || "object" != typeof n2 && "function" != typeof n2 ? d(o2) : n2;
        };
      }
      function m(e2, t2) {
        return function(e3) {
          if (Array.isArray(e3))
            return e3;
        }(e2) || function(e3, t3) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e3)))
            return;
          var o2 = [], n2 = true, a2 = false, r2 = void 0;
          try {
            for (var i2, s2 = e3[Symbol.iterator](); !(n2 = (i2 = s2.next()).done) && (o2.push(i2.value), !t3 || o2.length !== t3); n2 = true)
              ;
          } catch (e4) {
            a2 = true, r2 = e4;
          } finally {
            try {
              n2 || null == s2.return || s2.return();
            } finally {
              if (a2)
                throw r2;
            }
          }
          return o2;
        }(e2, t2) || g(e2, t2) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function g(e2, t2) {
        if (e2) {
          if ("string" == typeof e2)
            return f(e2, t2);
          var o2 = Object.prototype.toString.call(e2).slice(8, -1);
          return "Object" === o2 && e2.constructor && (o2 = e2.constructor.name), "Map" === o2 || "Set" === o2 ? Array.from(e2) : "Arguments" === o2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o2) ? f(e2, t2) : void 0;
        }
      }
      function f(e2, t2) {
        (null == t2 || t2 > e2.length) && (t2 = e2.length);
        for (var o2 = 0, n2 = new Array(t2); o2 < t2; o2++)
          n2[o2] = e2[o2];
        return n2;
      }
      function v(a2, r2) {
        return new Promise(function(e2, t2) {
          var o2, n2 = new Image();
          n2.onload = function() {
            return e2(n2);
          }, n2.onerror = t2, false == (null !== (o2 = a2) && !!o2.match(/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i)) && r2 && (n2.crossOrigin = r2), n2.src = a2;
        });
      }
      var b, w = !("undefined" == typeof window || "undefined" == typeof navigator || !("ontouchstart" in window || 0 < navigator.msMaxTouchPoints)), M = "undefined" != typeof File, O = { touch: { react: { down: "onTouchStart", mouseDown: "onMouseDown", drag: "onTouchMove", move: "onTouchMove", mouseMove: "onMouseMove", up: "onTouchEnd", mouseUp: "onMouseUp" }, native: { down: "touchstart", mouseDown: "mousedown", drag: "touchmove", move: "touchmove", mouseMove: "mousemove", up: "touchend", mouseUp: "mouseup" } }, desktop: { react: { down: "onMouseDown", drag: "onDragOver", move: "onMouseMove", up: "onMouseUp" }, native: { down: "mousedown", drag: "dragStart", move: "mousemove", up: "mouseup" } } }, I = w ? O.touch : O.desktop, P = "undefined" != typeof window && window.devicePixelRatio ? window.devicePixelRatio : 1, C = { x: 0.5, y: 0.5 }, x = function() {
        !function(e3, t3) {
          if ("function" != typeof t3 && null !== t3)
            throw new TypeError("Super expression must either be null or a function");
          e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, writable: true, configurable: true } }), t3 && c(e3, t3);
        }(a2, i["default"].Component);
        var e2, t2, o2, n2 = p(a2);
        function a2(e3) {
          var v2;
          return function(e4, t3) {
            if (!(e4 instanceof t3))
              throw new TypeError("Cannot call a class as a function");
          }(this, a2), s(d(v2 = n2.call(this, e3)), "state", { drag: false, my: null, mx: null, image: C }), s(d(v2), "handleImageReady", function(e4) {
            var t3 = v2.getInitialSize(e4.width, e4.height);
            t3.resource = e4, t3.x = 0.5, t3.y = 0.5, t3.backgroundColor = v2.props.backgroundColor, v2.setState({ drag: false, image: t3 }, v2.props.onImageReady), v2.props.onLoadSuccess(t3);
          }), s(d(v2), "clearImage", function() {
            v2.canvas.getContext("2d").clearRect(0, 0, v2.canvas.width, v2.canvas.height), v2.setState({ image: C });
          }), s(d(v2), "handleMouseDown", function(e4) {
            (e4 = e4 || window.event).preventDefault(), v2.setState({ drag: true, mx: null, my: null });
          }), s(d(v2), "handleMouseUp", function() {
            v2.state.drag && (v2.setState({ drag: false }), v2.props.onMouseUp());
          }), s(d(v2), "handleMouseMove", function(e4) {
            var t3, o3, n3, a3, r2, i2, s2, u2, h2, c2, l2, d2, p2, g2, f2, m2;
            e4 = e4 || window.event, false !== v2.state.drag && (e4.preventDefault(), n3 = { mx: t3 = e4.targetTouches ? e4.targetTouches[0].pageX : e4.clientX, my: o3 = e4.targetTouches ? e4.targetTouches[0].pageY : e4.clientY }, m2 = v2.props.rotate, m2 = (m2 %= 360) < 0 ? m2 + 360 : m2, v2.state.mx && v2.state.my && (a3 = v2.state.mx - t3, r2 = v2.state.my - o3, i2 = v2.state.image.width * v2.props.scale, s2 = v2.state.image.height * v2.props.scale, h2 = (u2 = v2.getCroppingRect()).x, c2 = u2.y, h2 *= i2, c2 *= s2, l2 = function(e5) {
              return e5 * (Math.PI / 180);
            }, d2 = Math.cos(l2(m2)), g2 = c2 + -a3 * (p2 = Math.sin(l2(m2))) + r2 * d2, f2 = { x: (h2 + a3 * d2 + r2 * p2) / i2 + 1 / v2.props.scale * v2.getXScale() / 2, y: g2 / s2 + 1 / v2.props.scale * v2.getYScale() / 2 }, v2.props.onPositionChange(f2), n3.image = y(y({}, v2.state.image), f2)), v2.setState(n3), v2.props.onMouseMove(e4));
          }), s(d(v2), "setCanvas", function(e4) {
            v2.canvas = e4;
          }), v2.canvas = null, v2;
        }
        return e2 = a2, (t2 = [{ key: "componentDidMount", value: function() {
          this.props.disableHiDPIScaling && (P = 1);
          var e3, t3, o3 = this.canvas.getContext("2d");
          this.props.image && this.loadImage(this.props.image), this.paint(o3), document && (e3 = !!function() {
            var t4 = false;
            try {
              var e4 = Object.defineProperty({}, "passive", { get: function() {
                t4 = true;
              } });
              window.addEventListener("test", e4, e4), window.removeEventListener("test", e4, e4);
            } catch (e5) {
              t4 = false;
            }
            return t4;
          }() && { passive: false }, t3 = I.native, document.addEventListener(t3.move, this.handleMouseMove, e3), document.addEventListener(t3.up, this.handleMouseUp, e3), w && (document.addEventListener(t3.mouseMove, this.handleMouseMove, e3), document.addEventListener(t3.mouseUp, this.handleMouseUp, e3)));
        } }, { key: "componentDidUpdate", value: function(e3, t3) {
          this.props.image && this.props.image !== e3.image || this.props.width !== e3.width || this.props.height !== e3.height || this.props.backgroundColor !== e3.backgroundColor ? this.loadImage(this.props.image) : this.props.image || t3.image === C || this.clearImage();
          var o3 = this.canvas.getContext("2d");
          o3.clearRect(0, 0, this.canvas.width, this.canvas.height), this.paint(o3), this.paintImage(o3, this.state.image, this.props.border), e3.image === this.props.image && e3.width === this.props.width && e3.height === this.props.height && e3.position === this.props.position && e3.scale === this.props.scale && e3.rotate === this.props.rotate && t3.my === this.state.my && t3.mx === this.state.mx && t3.image.x === this.state.image.x && t3.image.y === this.state.image.y && t3.backgroundColor === this.state.backgroundColor || this.props.onImageChange();
        } }, { key: "componentWillUnmount", value: function() {
          var e3;
          document && (e3 = I.native, document.removeEventListener(e3.move, this.handleMouseMove, false), document.removeEventListener(e3.up, this.handleMouseUp, false), w && (document.removeEventListener(e3.mouseMove, this.handleMouseMove, false), document.removeEventListener(e3.mouseUp, this.handleMouseUp, false)));
        } }, { key: "isVertical", value: function() {
          return !this.props.disableCanvasRotation && this.props.rotate % 180 != 0;
        } }, { key: "getBorders", value: function(e3) {
          var t3 = 0 < arguments.length && void 0 !== e3 ? e3 : this.props.border;
          return Array.isArray(t3) ? t3 : [t3, t3];
        } }, { key: "getDimensions", value: function() {
          var e3 = this.props, t3 = e3.width, o3 = e3.height, n3 = e3.rotate, a3 = e3.border, r2 = {}, i2 = m(this.getBorders(a3), 2), s2 = i2[0], u2 = i2[1], h2 = t3, c2 = o3;
          return this.isVertical() ? (r2.width = c2, r2.height = h2) : (r2.width = h2, r2.height = c2), r2.width += 2 * s2, r2.height += 2 * u2, { canvas: r2, rotate: n3, width: t3, height: o3, border: a3 };
        } }, { key: "getImage", value: function() {
          var e3 = this.getCroppingRect(), t3 = this.state.image;
          e3.x *= t3.resource.width, e3.y *= t3.resource.height, e3.width *= t3.resource.width, e3.height *= t3.resource.height;
          var o3 = document.createElement("canvas");
          this.isVertical() ? (o3.width = e3.height, o3.height = e3.width) : (o3.width = e3.width, o3.height = e3.height);
          var n3 = o3.getContext("2d");
          return n3.translate(o3.width / 2, o3.height / 2), n3.rotate(this.props.rotate * Math.PI / 180), n3.translate(-o3.width / 2, -o3.height / 2), this.isVertical() && n3.translate((o3.width - o3.height) / 2, (o3.height - o3.width) / 2), t3.backgroundColor && (n3.fillStyle = t3.backgroundColor, n3.fillRect(-e3.x, -e3.y, t3.resource.width, t3.resource.height)), n3.drawImage(t3.resource, -e3.x, -e3.y), o3;
        } }, { key: "getImageScaledToCanvas", value: function() {
          var e3 = this.getDimensions(), t3 = e3.width, o3 = e3.height, n3 = document.createElement("canvas");
          return this.isVertical() ? (n3.width = o3, n3.height = t3) : (n3.width = t3, n3.height = o3), this.paintImage(n3.getContext("2d"), this.state.image, 0, 1), n3;
        } }, { key: "getXScale", value: function() {
          var e3 = this.props.width / this.props.height, t3 = this.state.image.width / this.state.image.height;
          return Math.min(1, e3 / t3);
        } }, { key: "getYScale", value: function() {
          var e3 = this.props.height / this.props.width, t3 = this.state.image.height / this.state.image.width;
          return Math.min(1, e3 / t3);
        } }, { key: "getCroppingRect", value: function() {
          var e3 = this.props.position || { x: this.state.image.x, y: this.state.image.y }, t3 = 1 / this.props.scale * this.getXScale(), o3 = 1 / this.props.scale * this.getYScale(), n3 = { x: e3.x - t3 / 2, y: e3.y - o3 / 2, width: t3, height: o3 }, a3 = 0, r2 = 1 - n3.width, i2 = 0, s2 = 1 - n3.height;
          return (this.props.disableBoundaryChecks || 1 < t3 || 1 < o3) && (a3 = -n3.width, i2 = -n3.height, s2 = r2 = 1), y(y({}, n3), {}, { x: Math.max(a3, Math.min(n3.x, r2)), y: Math.max(i2, Math.min(n3.y, s2)) });
        } }, { key: "loadImage", value: function(e3) {
          var t3;
          M && e3 instanceof File ? this.loadingImage = (t3 = e3, new Promise(function(o3, n3) {
            var e4 = new FileReader();
            e4.onload = function(e5) {
              try {
                var t4 = v(e5.target.result);
                o3(t4);
              } catch (e6) {
                n3(e6);
              }
            }, e4.readAsDataURL(t3);
          }).then(this.handleImageReady).catch(this.props.onLoadFailure)) : "string" == typeof e3 && (this.loadingImage = v(e3, this.props.crossOrigin).then(this.handleImageReady).catch(this.props.onLoadFailure));
        } }, { key: "getInitialSize", value: function(e3, t3) {
          var o3, n3, a3 = this.getDimensions();
          return t3 / e3 < a3.height / a3.width ? n3 = e3 * ((o3 = this.getDimensions().height) / t3) : o3 = t3 * ((n3 = this.getDimensions().width) / e3), { height: o3, width: n3 };
        } }, { key: "paintImage", value: function(e3, t3, o3, n3) {
          var a3, r2 = 3 < arguments.length && void 0 !== n3 ? n3 : P;
          t3.resource && (a3 = this.calculatePosition(t3, o3), e3.save(), e3.translate(e3.canvas.width / 2, e3.canvas.height / 2), e3.rotate(this.props.rotate * Math.PI / 180), e3.translate(-e3.canvas.width / 2, -e3.canvas.height / 2), this.isVertical() && e3.translate((e3.canvas.width - e3.canvas.height) / 2, (e3.canvas.height - e3.canvas.width) / 2), e3.scale(r2, r2), e3.globalCompositeOperation = "destination-over", e3.drawImage(t3.resource, a3.x, a3.y, a3.width, a3.height), t3.backgroundColor && (e3.fillStyle = t3.backgroundColor, e3.fillRect(a3.x, a3.y, a3.width, a3.height)), e3.restore());
        } }, { key: "calculatePosition", value: function(e3, t3) {
          e3 = e3 || this.state.image;
          var o3 = m(this.getBorders(t3), 2), n3 = o3[0], a3 = o3[1], r2 = this.getCroppingRect(), i2 = e3.width * this.props.scale, s2 = e3.height * this.props.scale, u2 = -r2.x * i2, h2 = -r2.y * s2;
          return this.isVertical() ? (u2 += a3, h2 += n3) : (u2 += n3, h2 += a3), { x: u2, y: h2, height: s2, width: i2 };
        } }, { key: "paint", value: function(e3) {
          e3.save(), e3.scale(P, P), e3.translate(0, 0), e3.fillStyle = "rgba(" + this.props.color.slice(0, 4).join(",") + ")";
          var t3, o3, n3, a3, r2, i2, s2, u2, h2 = this.props.borderRadius, c2 = this.getDimensions(), l2 = m(this.getBorders(c2.border), 2), d2 = l2[0], p2 = l2[1], g2 = c2.canvas.height, f2 = c2.canvas.width, h2 = Math.max(h2, 0);
          h2 = Math.min(h2, f2 / 2 - d2, g2 / 2 - p2), e3.beginPath(), t3 = e3, a3 = f2 - 2 * (o3 = d2), r2 = g2 - 2 * (n3 = p2), 0 === (i2 = h2) ? t3.rect(o3, n3, a3, r2) : (s2 = a3 - i2, u2 = r2 - i2, t3.translate(o3, n3), t3.arc(i2, i2, i2, Math.PI, 1.5 * Math.PI), t3.lineTo(s2, 0), t3.arc(s2, i2, i2, 1.5 * Math.PI, 2 * Math.PI), t3.lineTo(a3, u2), t3.arc(s2, u2, i2, 2 * Math.PI, 0.5 * Math.PI), t3.lineTo(i2, r2), t3.arc(i2, u2, i2, 0.5 * Math.PI, Math.PI), t3.translate(-o3, -n3)), e3.rect(f2, 0, -f2, g2), e3.fill("evenodd"), e3.restore();
        } }, { key: "render", value: function() {
          var e3 = this.props, t3 = (e3.scale, e3.rotate, e3.image, e3.border, e3.borderRadius, e3.width, e3.height, e3.position, e3.color, e3.backgroundColor, e3.style), o3 = (e3.crossOrigin, e3.onLoadFailure, e3.onLoadSuccess, e3.onImageReady, e3.onImageChange, e3.onMouseUp, e3.onMouseMove, e3.onPositionChange, e3.disableBoundaryChecks, e3.disableHiDPIScaling, e3.disableCanvasRotation, l(e3, ["scale", "rotate", "image", "border", "borderRadius", "width", "height", "position", "color", "backgroundColor", "style", "crossOrigin", "onLoadFailure", "onLoadSuccess", "onImageReady", "onImageChange", "onMouseUp", "onMouseMove", "onPositionChange", "disableBoundaryChecks", "disableHiDPIScaling", "disableCanvasRotation"])), n3 = this.getDimensions(), a3 = { width: n3.canvas.width, height: n3.canvas.height, cursor: this.state.drag ? "grabbing" : "grab", touchAction: "none" }, r2 = { width: n3.canvas.width * P, height: n3.canvas.height * P, style: y(y({}, a3), t3) };
          return r2[I.react.down] = this.handleMouseDown, w && (r2[I.react.mouseDown] = this.handleMouseDown), i.default.createElement("canvas", u({ ref: this.setCanvas }, r2, o3));
        } }]) && r(e2.prototype, t2), o2 && r(e2, o2), a2;
      }();
      return s(x, "propTypes", { scale: n.default.number, rotate: n.default.number, image: n.default.oneOfType([n.default.string].concat(function(e2) {
        if (Array.isArray(e2))
          return f(e2);
      }(b = M ? [n.default.instanceOf(File)] : []) || function(e2) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e2))
          return Array.from(e2);
      }(b) || g(b) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }())), border: n.default.oneOfType([n.default.number, n.default.arrayOf(n.default.number)]), borderRadius: n.default.number, width: n.default.number, height: n.default.number, position: n.default.shape({ x: n.default.number, y: n.default.number }), color: n.default.arrayOf(n.default.number), backgroundColor: n.default.string, crossOrigin: n.default.oneOf(["", "anonymous", "use-credentials"]), onLoadFailure: n.default.func, onLoadSuccess: n.default.func, onImageReady: n.default.func, onImageChange: n.default.func, onMouseUp: n.default.func, onMouseMove: n.default.func, onPositionChange: n.default.func, disableBoundaryChecks: n.default.bool, disableHiDPIScaling: n.default.bool, disableCanvasRotation: n.default.bool }), s(x, "defaultProps", { scale: 1, rotate: 0, border: 25, borderRadius: 0, width: 200, height: 200, color: [0, 0, 0, 0.5], onLoadFailure: function() {
      }, onLoadSuccess: function() {
      }, onImageReady: function() {
      }, onImageChange: function() {
      }, onMouseUp: function() {
      }, onMouseMove: function() {
      }, onPositionChange: function() {
      }, disableBoundaryChecks: false, disableHiDPIScaling: false, disableCanvasRotation: true }), x;
    });
  }
});
export default require_dist();
/*! Bundled license information:

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=react-avatar-editor.js.map
