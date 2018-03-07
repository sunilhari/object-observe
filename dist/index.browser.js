var Observer =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar _observer = exports._observer = Symbol('@observerCallback');\nvar TYPE_READ = exports.TYPE_READ = 'read';\nvar TYPE_ADD = exports.TYPE_ADD = 'add';\nvar TYPE_UPDATE = exports.TYPE_UPDATE = 'update';\nvar TYPE_DELETE = exports.TYPE_DELETE = 'delete';\nvar TYPE_NO_ACTION = exports.TYPE_NO_ACTION = 'Unable to Perform the requested Operation';\n\n//# sourceURL=webpack://Observer/./constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Implementation of Object.observe using Proxy\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */\n\n\nvar _constants = __webpack_require__(/*! ../constants */ \"./constants.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar handler = {\n    set: function set(target, prop, value) {\n        var operation = void 0,\n            oldvalue = void 0;\n        if (prop in target) {\n            operation = _constants.TYPE_UPDATE;\n            oldvalue = target[prop];\n        } else {\n            operation = _constants.TYPE_ADD;\n        }\n        target[prop] = value;\n        target[_constants._observer][0]({ value: value, oldvalue: oldvalue, operation: operation });\n    },\n    deleteProperty: function deleteProperty(target, prop) {\n        var operation = void 0,\n            oldvalue = void 0;\n        if (prop in target) {\n            oldvalue = target[prop];\n            operation = _constants.TYPE_DELETE;\n            delete target[prop];\n        } else {\n            operation = _constants.TYPE_NO_ACTION;\n            oldvalue = '';\n            value = '';\n        }\n        target[_constants._observer][0]({ value: value, oldvalue: oldvalue, operation: operation });\n    }\n};\n\nvar Observer = function () {\n    function Observer() {\n        _classCallCheck(this, Observer);\n    }\n\n    _createClass(Observer, [{\n        key: 'observe',\n        value: function observe(target, callback) {\n            Reflect.defineProperty(target, _constants._observer, { enumerable: false, configurable: true, writable: false, value: [] });\n            target[_constants._observer].push(callback);\n            return new Proxy(target, handler);\n        }\n    }, {\n        key: 'unobserve',\n        value: function unobserve(target) {\n            delete target[_constants._observer];\n            return true;\n        }\n    }]);\n\n    return Observer;\n}();\n\nmodule.exports = new Observer();\n\n//# sourceURL=webpack://Observer/./src/index.js?");

/***/ })

/******/ });