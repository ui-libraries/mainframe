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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.update = update;\nfunction update() {\n\tvar currentTime = new Date();\n\n\tvar currentHours = currentTime.getHours();\n\tvar currentMinutes = currentTime.getMinutes();\n\n\t// Pad the minutes and seconds with leading zeros, if required\n\tcurrentMinutes = (currentMinutes < 10 ? \"0\" : \"\") + currentMinutes;\n\n\t// Choose either \"AM\" or \"PM\" as appropriate\n\tvar timeOfDay = currentHours < 12 ? \"AM\" : \"PM\";\n\n\t// Convert the hours component to 12-hour format if needed\n\tcurrentHours = currentHours > 12 ? currentHours - 12 : currentHours;\n\n\t// Convert an hours component of \"0\" to \"12\"\n\tcurrentHours = currentHours == 0 ? 12 : currentHours;\n\n\t// Compose the string for display\n\tvar currentTimeString = currentHours + \":\" + currentMinutes + \" \" + timeOfDay;\n\n\t// Update the time display\n\t$(\"#timeString\").html(currentTimeString);\n}\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _clock = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n\nvar Clock = _interopRequireWildcard(_clock);\n\n__webpack_require__(/*! ./listeners */ \"./src/listeners.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nif (window.module) module = window.module;\n\nClock.update();\nwindow.setInterval(function () {\n  Clock.update();\n}, 10000);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/listeners.js":
/*!**************************!*\
  !*** ./src/listeners.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n$('#logo').click(function (e) {\n\t$('#projectCards').hide('slow');\n\t$('#about-text-container').hide('slow');\n\t//$('#consultText').hide('slow')\n\t$('#pdh-text-container').hide('slow');\n\tif ($('#carousel').css('display') == 'none') {\n\t\t$('#abtBtn').css({\n\t\t\t\"background-color\": \"#27a8e0\",\n\t\t\t\"color\": \"white\"\n\t\t});\n\t\t$('#projBtn').css({\n\t\t\t\"background-color\": \"#27a8e0\",\n\t\t\t\"color\": \"white\"\n\t\t});\n\t\t$('#consultBtn').css({\n\t\t\t\"background-color\": \"#27a8e0\",\n\t\t\t\"color\": \"white\"\n\t\t});\n\t\t$('#pdhBtn').css({\n\t\t\t\"background-color\": \"#27a8e0\",\n\t\t\t\"color\": \"white\"\n\t\t});\n\t\t$('#carousel').show('slow');\n\t}\n});\n\n$('#abtBtn').click(function (e) {\n\t$('#carousel').hide('slow');\n\t$('#projectCards').hide('slow');\n\t//$('#consultText').hide('slow')\n\t$('#pdh-text-container').hide('slow');\n\tif ($('#about-text-container').css('display') == 'none') {\n\t\t$('#abtBtn').css({\n\t\t\t\"background-color\": \"white\",\n\t\t\t\"color\": \"#27a8e0\"\n\t\t});\n\t\t$('#projBtn').css({\n\t\t\t\"background-color\": \"#27a8e0\",\n\t\t\t\"color\": \"white\"\n\t\t});\n\t\t$('#consultBtn').css({\n\t\t\t\"background-color\": \"#27a8e0\",\n\t\t\t\"color\": \"white\"\n\t\t});\n\t\t$('#pdhBtn').css({\n\t\t\t\"background-color\": \"#27a8e0\",\n\t\t\t\"color\": \"white\"\n\t\t});\n\t\t$('#about-text-container').show('slow');\n\t}\n});\n\n$('#projBtn').click(function (e) {\n\t$('#carousel').hide('slow');\n\t$('#about-text-container').hide('slow');\n\t//$('#consultText').hide('slow')\n\t$('#pdh-text-container').hide('slow');\n\tif ($('#projectCards').css('display') == 'none') {\n\t\t$('#projBtn').css({\n\t\t\t\"background-color\": \"white\",\n\t\t\t\"color\": \"#27a8e0\"\n\t\t});\n\t\t$('#abtBtn').css({\n\t\t\t\"background-color\": \"#27a8e0\",\n\t\t\t\"color\": \"white\"\n\t\t});\n\t\t$('#consultBtn').css({\n\t\t\t\"background-color\": \"#27a8e0\",\n\t\t\t\"color\": \"white\"\n\t\t});\n\t\t$('#pdhBtn').css({\n\t\t\t\"background-color\": \"#27a8e0\",\n\t\t\t\"color\": \"white\"\n\t\t});\n\t\t$('#projectCards').show('slow');\n\t}\n});\n\n$('#pdhBtn').click(function (e) {\n\t$('#carousel').hide('slow');\n\t$('#about-text-container').hide('slow');\n\t$('#projectCards').hide('slow');\n\t//$('#consultText').hide('slow')\n\tif ($('#pdh-text-container').css('display') == 'none') {\n\t\t$('#pdhBtn').css({\n\t\t\t\"background-color\": \"white\",\n\t\t\t\"color\": \"#27a8e0\"\n\t\t});\n\t\t$('#abtBtn').css({\n\t\t\t\"background-color\": \"#27a8e0\",\n\t\t\t\"color\": \"white\"\n\t\t});\n\t\t$('#projBtn').css({\n\t\t\t\"background-color\": \"#27a8e0\",\n\t\t\t\"color\": \"white\"\n\t\t});\n\t\t$('#consultBtn').css({\n\t\t\t\"background-color\": \"#27a8e0\",\n\t\t\t\"color\": \"white\"\n\t\t});\n\t\t$('#pdh-text-container').show('slow');\n\t}\n});\n\n//# sourceURL=webpack:///./src/listeners.js?");

/***/ })

/******/ });