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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/page.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/page.js":
/*!**************************************!*\
  !*** ./app/javascript/packs/page.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../src/index */ "./app/javascript/src/index.js");

/***/ }),

/***/ "./app/javascript/src/_day-night.js":
/*!******************************************!*\
  !*** ./app/javascript/src/_day-night.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var themeToggler = document.querySelector('.themeToggler');
var lightDarkThemeBol = window.matchMedia('prefers-color-scheme: dark')['matches'];
var style = document.documentElement.style;

function lighDarkModeSwitcher(modeChoice) {
  if (modeChoice == true) {
    style.setProperty('--seen-primary', 'black');
    style.setProperty('--seen-secondary', 'blue');
    style.setProperty('--h2-color', 'black');
    style.setProperty('--bold-color', 'black');
    style.setProperty('--seen-hover', 'blue');
    style.setProperty('--space-primary', 'white');
    style.setProperty('--space-secondary', 'white');
    lightDarkThemeBol = false;
  }

  if (modeChoice == false) {
    style.setProperty('--seen-primary', '#009688');
    style.setProperty('--seen-secondary', 'blue');
    style.setProperty('--h2-color', '#d77236');
    style.setProperty('--bold-color', 'white');
    style.setProperty('--seen-hover', 'blue');
    style.setProperty('--space-primary', '#1d1f21');
    style.setProperty('--space-secondary', '#1d1f21');
    lightDarkThemeBol = true;
  }
}

themeToggler.addEventListener('click', function () {
  lighDarkModeSwitcher(lightDarkThemeBol);
}); // old dayNightSwitcer code
// const dayModeEle = document.getElementById('dayMode');
// const nightModeEle = document.getElementById('nightMode');
//
// function dayNightModeSwitcher(modeChoice) {
//   const style = document.documentElement.style;
//
//   if (modeChoice == 'day') {
//     style.setProperty('--seen-primary', 'black');
//     style.setProperty('--seen-secondary', 'blue');
//     style.setProperty('--h2-color','black');
//     style.setProperty('--bold-color', 'black');
//     style.setProperty('--seen-hover', 'blue');
//     style.setProperty('--space-primary', 'white');
//     style.setProperty('--space-secondary', 'white');
//   }
//
//   if (modeChoice == 'night') {
//     style.setProperty('--seen-primary', '#009688');
//     style.setProperty('--seen-secondary', 'blue');
//     style.setProperty('--h2-color','#d77236');
//     style.setProperty('--bold-color', 'white');
//     style.setProperty('--seen-hover', 'blue');
//     style.setProperty('--space-primary', '#1d1f21');
//     style.setProperty('--space-secondary', '#1d1f21');
//   }
// }
//
// if (window.matchMedia('prefers-color-scheme: dark').matches) {
//   dayNightModeSwitcher('night');
// }
//
// dayModeEle.addEventListener('click', () => {
//   dayNightModeSwitcher('day');
// });
//
// nightModeEle.addEventListener('click', () => {
//   dayNightModeSwitcher('night');
// });

/***/ }),

/***/ "./app/javascript/src/_navbar.js":
/*!***************************************!*\
  !*** ./app/javascript/src/_navbar.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var navToggleButton = document.getElementById('navToggler');

function toggleMenu(e, menu) {
  if (menu.style.display == '') {
    e.target.classList.add('nav_rotate_open');
    e.target.classList.remove('nav_rotate_close');
    menu.style.display = 'flex';
  } else {
    e.target.classList.add('nav_rotate_close');
    e.target.classList.remove('nav_rotate_open');
    menu.style.display = '';
  }
}

;
var navMenu = document.getElementById('navMenu');
navToggleButton.addEventListener('click', function (e) {
  toggleMenu(e, navMenu);
});

/***/ }),

/***/ "./app/javascript/src/index.js":
/*!*************************************!*\
  !*** ./app/javascript/src/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_navbar */ "./app/javascript/src/_navbar.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_navbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _day_night__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_day-night */ "./app/javascript/src/_day-night.js");
/* harmony import */ var _day_night__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_day_night__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

/******/ });
//# sourceMappingURL=page-62e67030699d033fb4f6.js.map