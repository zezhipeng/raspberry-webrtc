require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' }
};

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("fs");

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("koa-static");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("raspivid");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_mac_Projects_raspberry_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_mac_Projects_raspberry_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_mac_Projects_raspberry_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_raspivid__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_raspivid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_raspivid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fs__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_path__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_koa_static__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_koa_static___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_koa_static__);


var start = function () {
  var _ref = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_mac_Projects_raspberry_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4() {
    var _this = this;

    var config, nuxt;
    return __WEBPACK_IMPORTED_MODULE_0__Users_mac_Projects_raspberry_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            config = __webpack_require__(1);

            config.dev = !(app.env === 'production');
            _context4.next = 4;
            return new __WEBPACK_IMPORTED_MODULE_2_nuxt___default.a(config);

          case 4:
            nuxt = _context4.sent;

            if (!config.dev) {
              _context4.next = 15;
              break;
            }

            _context4.prev = 6;
            _context4.next = 9;
            return nuxt.build();

          case 9:
            _context4.next = 15;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4['catch'](6);

            console.error(_context4.t0); // eslint-disable-line no-console
            process.exit(1);

          case 15:

            app.use(__WEBPACK_IMPORTED_MODULE_7_koa_static___default()(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_path__["resolve"])(__dirname, '../public')));

            router.get('/stream', function () {
              var _ref2 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_mac_Projects_raspberry_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
                var url, file, video;
                return __WEBPACK_IMPORTED_MODULE_0__Users_mac_Projects_raspberry_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!(config.dev === 'production')) {
                          _context.next = 6;
                          break;
                        }

                        url = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_path__["resolve"])(__dirname, '../public/video.mp4');
                        file = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_fs__["createWriteStream"])(url);
                        video = __WEBPACK_IMPORTED_MODULE_4_raspivid___default()();


                        video.pipe(file);

                        return _context.abrupt('return', ctx.body = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_fs__["createReadStream"])(url));

                      case 6:

                        ctx.body = 'dev';

                      case 7:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }());

            router.get('/test', function () {
              var _ref3 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_mac_Projects_raspberry_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx) {
                return __WEBPACK_IMPORTED_MODULE_0__Users_mac_Projects_raspberry_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        ctx.body = 'test';

                      case 1:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                }, _callee2, _this);
              }));

              return function (_x2) {
                return _ref3.apply(this, arguments);
              };
            }());

            app.use(router.routes()).use(router.middleware());

            app.use(function () {
              var _ref4 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_mac_Projects_raspberry_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0__Users_mac_Projects_raspberry_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        ctx.status = 200;
                        _context3.next = 3;
                        return nuxt.render(ctx.req, ctx.res);

                      case 3:
                      case 'end':
                        return _context3.stop();
                    }
                  }
                }, _callee3, _this);
              }));

              return function (_x3, _x4) {
                return _ref4.apply(this, arguments);
              };
            }());

            app.listen(port, host);
            console.log('Server listening on ' + host + ':' + port);

          case 22:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[6, 11]]);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







// import shelljs from 'shelljs'


var app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
var router = new __WEBPACK_IMPORTED_MODULE_3_koa_router___default.a();
var host = app.env === 'production' ? '192.168.1.111' : '127.0.0.1';

var port = process.env.PORT || 3000;

start();
/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ }
/******/ ]);
//# sourceMappingURL=main.map