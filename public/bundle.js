var myApp =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Header */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_less__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__header_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_menu_less__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_menu_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__header_menu_less__);



let Header = ``;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shell; });
let shell = function () {
    let subbmit, toggleBurger, clickAnchor, resizeWin, hoverWorksIn, hoverWorksOut, scrollWin, initModule;
    subbmit = e => {
        let name = $('#contact-form input[name=name]').val(),
            email = $('#contact-form input[name=email]').val(),
            message = $('#contact-form textarea[name=msg]').val();
        if (name.trim() == 0 || email.indexOf('@', 0) == -1 || message.trim() == 0) {
            $('#contact-form label').show();
            return false;
        }
        let order_url = $('#contact-form').attr('action');
        $.post(order_url, {
            name: name,
            email: email,
            message: message,
            send: "1"
        }, function (data) {
            //выводим возврашаемый сервером код html вместо содержимого формы
            $('#contact-form').html(data);
            $('#contact-form').show();
            $('#contact-form_info').remove();
        }, "html");
        return false;
    };
    clickAnchor = e => {
        let root = $('#root'),
            elClick = e.currentTarget.hash,
            height = window.innerHeight,
            dest = $(elClick).offset().top,
            y = window.scrollY;
        if (root.hasClass('mobile') || root.hasClass('tablet')) $('.burger').trigger('click');
        dest = y < height ? dest + 90 : dest;
        $('body').animate({ scrollTop: dest - 90 }, 700); //1100 - скорость
        $('html').animate({ scrollTop: dest - 90 }, 1100);
        return false;
    };
    toggleBurger = () => {
        let menu = $('.header-list');
        menu.toggleClass('open');
        if (menu.hasClass('open')) {
            menu.show();
        } else menu.hide();
    };
    scrollWin = () => {
        let y = window.scrollY;
        if (y > window.innerHeight) {
            $('header').css({ position: 'fixed', top: 0, zIndex: '1500' });
        } else $('header').removeAttr('style');
    };
    resizeWin = () => {
        let ww = window.innerWidth;
        if (ww > 990 && ww < 1200) {
            $('#root').addClass('tablet').removeClass('mobile');
            console.log('add tablet');
            return;
        }
        if (ww < 990) {
            $('#root').addClass('mobile').removeClass('tablet');
            console.log('add mobile');
            return;
        } else $('#root').removeClass('mobile').removeClass('tablet');
        console.log('remove all');
    };
    hoverWorksIn = e => {
        console.log(e.currentTarget.id);
        $('#' + e.currentTarget.id + ' .tit').show().textillate('in');
    };
    hoverWorksOut = e => {
        $('#' + e.currentTarget.id + ' .tit').textillate('out');
    };
    initModule = () => {
        window.onscroll = () => scrollWin();
        $('.overlay-title span').textillate('start');
        $('.send').on('click', subbmit);
        $('.burger').on('click', toggleBurger);
        $('a').on('click', clickAnchor);
        $('.rs-hover').hover(hoverWorksIn, hoverWorksOut);
    };
    return {
        initModule,
        resizeWin
    };
}();

// $('.tit').textillate('in',{
//     loop: true,
//     in: {
//         effect: 'wobble',
//         delayScale: 1.5,
//         delay: 50,
//         sync: false,
//         shuffle: false
//     },
//     out: {
//         effect: 'fadeOutDown',
//         delayScale: 1.5,
//         delay: 50,
//         sync: false,
//         shuffle: true,
//     }
// });

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Works */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__works_less__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__works_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__works_less__);


let Works;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_less__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mobile_less__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mobile_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mobile_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tablet_less__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tablet_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__tablet_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__works_works__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__init_shell__ = __webpack_require__(1);







$().ready(() => {
    __WEBPACK_IMPORTED_MODULE_5__init_shell__["a" /* shell */].resizeWin();
    __WEBPACK_IMPORTED_MODULE_5__init_shell__["a" /* shell */].initModule();
    window.onresize = () => __WEBPACK_IMPORTED_MODULE_5__init_shell__["a" /* shell */].resizeWin();
    $('.preloader').delay(1200).fadeOut();
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);