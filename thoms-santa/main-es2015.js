(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"device\">\n  <div class=\"head\">\n    <div class=\"camera\">\n      <app-circle color=\"#26aafc\" size=\"70\"></app-circle>\n    </div>\n    <div class=\"status\">\n      <app-circle class=\"status__indicator\" color=\"#d60023\" size=\"15\" [on]=\"true\"></app-circle>\n      <app-circle class=\"status__indicator\" color=\"#fee96a\" size=\"15\" [on]=\"scanning\"></app-circle>\n      <app-circle class=\"status__indicator\" color=\"#42904f\" size=\"15\" [on]=\"barCodeFound\"></app-circle>\n    </div>\n  </div>\n  <div class=\"separator separator--dark\">\n    <div class=\"separator__left\"></div>\n    <div class=\"separator__right\"></div>\n    <div class=\"separator__corner\"></div>\n  </div>\n  <div class=\"separator\">\n    <div class=\"separator__left\"></div>\n    <div class=\"separator__right\"></div>\n    <div class=\"separator__corner\"></div>\n  </div>\n  <div class=\"screen-wrapper\">\n    <div class=\"screen\">\n      <div class=\"screen__top-indicators\">\n        <app-circle class=\"screen__indicator\" color=\"#d60023\" size=\"10\" [on]=\"true\"></app-circle>\n        <app-circle class=\"screen__indicator\" color=\"#d60023\" size=\"10\" [on]=\"true\"></app-circle>\n      </div>\n      <div class=\"screen__glass\">\n        <div class=\"screen__glass-text\" [innerHTML]=\"currentMessage\">\n\n        </div>\n      </div>\n      <div class=\"screen__bottom-indicators\">\n        <app-circle class=\"screen__indicator\" color=\"#d60023\" size=\"15\" [on]=\"blink\"></app-circle>\n        <div class=\"screen__speaker\" (click)=\"onSpeakerClick()\">\n          <div class=\"screen__speaker-line\"></div>\n          <div class=\"screen__speaker-line\"></div>\n          <div class=\"screen__speaker-line\"></div>\n          <div class=\"screen__speaker-line\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"controls\">\n    <div class=\"start\" (click)=\"onStartScan()\">\n      <div class=\"start__button\"></div>\n    </div>\n    <div class=\"camera-screen\" [ngClass]=\"{'camera-screen--on': scanning}\">\n      <div class=\"camera-screen__content\"></div>\n    </div>\n    <div class=\"dpad-wrapper\">\n      <div class=\"dpad dpad--dark\">\n        <div class=\"dpad__top\"></div>\n        <div class=\"dpad__center\"></div>\n        <div class=\"dpad__bottom\"></div>\n      </div>\n      <div class=\"dpad\">\n        <div class=\"dpad__top\"></div>\n        <div class=\"dpad__center\"></div>\n        <div class=\"dpad__bottom\"></div>\n      </div>\n    </div>\n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/circle/circle.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/circle/circle.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"circle\" *ngIf=\"color\" [ngStyle]=\"getStyle(color, size, borderColor, on)\" >\n    <div class=\"circle circle--dark\" [ngStyle]=\"getStyle(darkerColor, size*.85)\">\n        <div class=\"circle\" [ngStyle]=\"getStyle(color, size*.5)\">\n            <div class=\"circle circle--small\" [ngStyle]=\"getStyle(lighterColor, size*.15)\"></div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  background-color: #dc072d;\n  overflow: hidden;\n  font-size: 4vw;\n}\n* {\n  box-sizing: border-box;\n}\nvideo {\n  max-width: 100%;\n  max-height: 100%;\n  margin: 0 auto;\n}\n.camera-screen {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  padding-top: 28.125vw;\n  background: #51ae5e;\n  margin-left: auto;\n  border-radius: 5px;\n  border: 1px solid #2b4f2c;\n  margin: 0 10px;\n  position: relative;\n}\n.camera-screen__content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.camera-screen video {\n  display: none;\n}\n.camera-screen--on video {\n  display: block;\n}\n.device {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n}\n.head {\n  padding: 15px;\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n  z-index: 1;\n}\n.camera {\n  width: 86px;\n  height: 86px;\n  background-color: #dedede;\n  border-radius: 50%;\n  padding: 5px;\n  border: 3px solid #8a081c;\n}\n.status {\n  display: -webkit-box;\n  display: flex;\n  margin-left: 15px;\n}\n.status__indicator {\n  margin: 0 5px;\n}\n.separator {\n  position: absolute;\n  display: -webkit-box;\n  display: flex;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 120px;\n  overflow: hidden;\n}\n.separator--dark {\n  margin-top: 10px;\n}\n.separator--dark .separator__left {\n  background: #89061c;\n  width: 67%;\n}\n.separator--dark .separator__corner {\n  width: 33%;\n  background-color: #dc072d;\n  z-index: 1;\n}\n.separator__left {\n  width: 65%;\n  height: 120px;\n  border-right: 3px solid #43040d;\n  border-bottom: 3px solid #43040d;\n  border-radius: 10px;\n  -webkit-transform: skew(-30deg, 0);\n          transform: skew(-30deg, 0);\n  background: #dc072d;\n}\n.separator__right {\n  position: absolute;\n  right: 0;\n  width: 35%;\n  height: 53px;\n  position: absolute;\n  background-color: #dc072d;\n}\n.separator__corner {\n  align-self: center;\n  margin-left: -3px;\n  border-left: 3px solid #43040d;\n  border-top: 3px solid #43040d;\n  border-radius: 10px 0 0 0;\n  height: 30px;\n  -webkit-transform: skew(-30deg, 0);\n          transform: skew(-30deg, 0);\n  width: 35%;\n  background: #89061c;\n}\n.screen-wrapper {\n  position: relative;\n  margin: 45px 5px 0 0;\n  z-index: 1;\n}\n.screen-wrapper:before {\n  position: absolute;\n  content: \"\";\n  display: block;\n  background: #5f5f5f;\n  width: calc(100% - 28px);\n  height: calc(100% + 1px);\n  right: -5px;\n  bottom: -5px;\n  border-radius: 10px;\n  border: 1px solid #4f131b;\n  margin: 0 15px;\n  z-index: -1;\n}\n.screen {\n  background: #dedede;\n  margin: 0 15px;\n  padding: 15px 30px;\n  border: 1px solid #472b2f;\n  border-radius: 10px;\n}\n.screen__top-indicators {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-bottom: 15px;\n}\n.screen__top-indicators .screen__indicator {\n  margin: 0 15px;\n}\n.screen__glass {\n  background-color: #232222;\n  padding-top: 75%;\n  position: relative;\n  margin-bottom: 15px;\n  border-radius: 10px;\n}\n.screen__glass-text {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: scroll;\n  border-radius: 10px;\n  padding: 5px;\n  line-height: 1.4;\n  color: #dedede;\n  padding: 10px;\n}\n.screen__bottom-indicators {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.screen__speaker {\n  width: 30px;\n  margin-left: auto;\n}\n.screen__speaker-line {\n  background-color: #5c5c5c;\n  height: 1px;\n}\n.screen__speaker-line:not(:first-child) {\n  margin-top: 5px;\n}\n.controls {\n  padding: 30px 15px;\n  display: -webkit-box;\n  display: flex;\n  margin-top: auto;\n}\n.start {\n  position: relative;\n  z-index: 3;\n  width: 15vw;\n  height: 15vw;\n  flex-basis: 15vw;\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  flex-shrink: 0;\n}\n.start:before {\n  display: block;\n  content: \"\";\n  position: absolute;\n  right: -1vw;\n  bottom: -1vw;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background: #000407;\n  z-index: -1;\n}\n.start:active {\n  right: -1vw;\n  bottom: -1vw;\n}\n.start:active:before {\n  right: 0;\n  bottom: 0;\n}\n.start__button {\n  background: #00302a;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n.dpad-wrapper {\n  position: relative;\n}\n.dpad {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-basis: 30vw;\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  flex-shrink: 0;\n  position: relative;\n}\n.dpad__top {\n  background: #00302a;\n  width: 10vw;\n  height: 10vw;\n  border-radius: 5px 5px 0 0;\n}\n.dpad__center {\n  background: #00302a;\n  width: 30vw;\n  height: 10vw;\n  border-radius: 5px;\n}\n.dpad__bottom {\n  background: #00302a;\n  width: 10vw;\n  height: 10vw;\n  border-radius: 0 0 5px 5px;\n}\n.dpad:active {\n  right: -5px;\n  bottom: -5px;\n}\n.dpad--dark {\n  position: absolute;\n  right: -5px;\n  bottom: -5px;\n}\n.dpad--dark:active {\n  display: none;\n}\n.dpad--dark .dpad__top {\n  background: #00060a;\n}\n.dpad--dark .dpad__center {\n  background: #00060a;\n}\n.dpad--dark .dpad__bottom {\n  background: #00060a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJvci5rYWxvY3ppL0RvY3VtZW50cy9wcm9qZWN0cy90aG9tcy1zYW50YS9zcmMvc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9nYWJvci5rYWxvY3ppL0RvY3VtZW50cy9wcm9qZWN0cy90aG9tcy1zYW50YS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQU9BO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQVhVO0VBWVYsZ0JBQUE7RUFDQSxjQUFBO0FDTEo7QURRQTtFQUNJLHNCQUFBO0FDTEo7QURRQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNMSjtBRFFBO0VBQ0ksbUJBQUE7VUFBQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkEzQlk7RUE0QlosaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDTEo7QURNSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ0pSO0FETUk7RUFDSSxhQUFBO0FDSlI7QURNSTtFQUNJLGNBQUE7QUNKUjtBQ3pDQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFlBQUE7QUQ0Q0o7QUN6Q0E7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FENENKO0FDekNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkZoQlk7RUVpQlosa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUQ0Q0o7QUN6Q0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxpQkFBQTtBRDRDSjtBQzNDSTtFQUNJLGFBQUE7QUQ2Q1I7QUN6Q0E7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBRDRDSjtBQzNDSTtFQUNJLGdCQUFBO0FENkNSO0FDMUNRO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0FENENaO0FDMUNRO0VBQ0ksVUFBQTtFQUNBLHlCRmpERTtFRWtERixVQUFBO0FENENaO0FDekNJO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsbUJGNURNO0FDdUdkO0FDekNJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCRnBFTTtBQytHZDtBQ3pDSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBRDJDUjtBQ3ZDQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FEMENKO0FDekNJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FEMkNSO0FDdkNBO0VBQ0ksbUJGdkdZO0VFd0daLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUQwQ0o7QUN6Q0k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsbUJBQUE7QUQyQ1I7QUMxQ1E7RUFDSSxjQUFBO0FENENaO0FDekNJO0VBQ0kseUJGbEhRO0VFbUhSLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FEMkNSO0FDMUNRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNGcElJO0VFcUlKLGFBQUE7QUQ0Q1o7QUN6Q0k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FEMkNSO0FDekNJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FEMkNSO0FDMUNRO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FENENaO0FDM0NZO0VBQ0ksZUFBQTtBRDZDaEI7QUN2Q0E7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0FEMENKO0FDdkNBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtFQUNBLGNBQUE7QUQwQ0o7QUN6Q0k7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FEMkNSO0FDekNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUQyQ1I7QUMxQ1E7RUFDSSxRQUFBO0VBQ0EsU0FBQTtBRDRDWjtBQ3pDSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRDJDUjtBQ3RDQTtFQUNJLGtCQUFBO0FEeUNKO0FDdENBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7VUFBQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FEeUNKO0FDeENJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FEMENSO0FDeENJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FEMENSO0FDeENJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FEMENSO0FDeENJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUQwQ1I7QUN2Q0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEeUNSO0FDeENRO0VBQ0ksYUFBQTtBRDBDWjtBQ3RDUTtFQUNJLG1CQUFBO0FEd0NaO0FDdENRO0VBQ0ksbUJBQUE7QUR3Q1o7QUN0Q1E7RUFDSSxtQkFBQTtBRHdDWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbiRwb2tlbW9uLXJlZDogI2RjMDcyZDtcbiRwb2tlbW9uLXdoaXRlOiAjZGVkZWRlO1xuJHBva2Vtb24tZ3JlZW46ICM1MWFlNWU7XG4kcG9rZW1vbi1ibHVlOiAjMjZhYWZkO1xuJHBva2Vtb24tYmxhY2s6ICMyMzIyMjI7XG5cbmh0bWwsIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9rZW1vbi1yZWQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb250LXNpemU6IDR2dztcbn1cblxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxudmlkZW8ge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY2FtZXJhLXNjcmVlbntcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgcGFkZGluZy10b3A6IDI4LjEyNXZ3O1xuICAgIGJhY2tncm91bmQ6ICRwb2tlbW9uLWdyZWVuO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmI0ZjJjO1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmX19jb250ZW50IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgfVxuICAgIHZpZGVvIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgJi0tb24gdmlkZW8ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCwgYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMDcyZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1zaXplOiA0dnc7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG52aWRlbyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jYW1lcmEtc2NyZWVuIHtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nLXRvcDogMjguMTI1dnc7XG4gIGJhY2tncm91bmQ6ICM1MWFlNWU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyYjRmMmM7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2FtZXJhLXNjcmVlbl9fY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuLmNhbWVyYS1zY3JlZW4gdmlkZW8ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNhbWVyYS1zY3JlZW4tLW9uIHZpZGVvIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kZXZpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkIHtcbiAgcGFkZGluZzogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY2FtZXJhIHtcbiAgd2lkdGg6IDg2cHg7XG4gIGhlaWdodDogODZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICM4YTA4MWM7XG59XG5cbi5zdGF0dXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5zdGF0dXNfX2luZGljYXRvciB7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5cbi5zZXBhcmF0b3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2VwYXJhdG9yLS1kYXJrIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5zZXBhcmF0b3ItLWRhcmsgLnNlcGFyYXRvcl9fbGVmdCB7XG4gIGJhY2tncm91bmQ6ICM4OTA2MWM7XG4gIHdpZHRoOiA2NyU7XG59XG4uc2VwYXJhdG9yLS1kYXJrIC5zZXBhcmF0b3JfX2Nvcm5lciB7XG4gIHdpZHRoOiAzMyU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzA3MmQ7XG4gIHotaW5kZXg6IDE7XG59XG4uc2VwYXJhdG9yX19sZWZ0IHtcbiAgd2lkdGg6IDY1JTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgIzQzMDQwZDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM0MzA0MGQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRyYW5zZm9ybTogc2tldygtMzBkZWcsIDApO1xuICBiYWNrZ3JvdW5kOiAjZGMwNzJkO1xufVxuLnNlcGFyYXRvcl9fcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMzUlO1xuICBoZWlnaHQ6IDUzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMDcyZDtcbn1cbi5zZXBhcmF0b3JfX2Nvcm5lciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzQzMDQwZDtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICM0MzA0MGQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDA7XG4gIGhlaWdodDogMzBweDtcbiAgdHJhbnNmb3JtOiBza2V3KC0zMGRlZywgMCk7XG4gIHdpZHRoOiAzNSU7XG4gIGJhY2tncm91bmQ6ICM4OTA2MWM7XG59XG5cbi5zY3JlZW4td3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiA0NXB4IDVweCAwIDA7XG4gIHotaW5kZXg6IDE7XG59XG4uc2NyZWVuLXdyYXBwZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4cHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDFweCk7XG4gIHJpZ2h0OiAtNXB4O1xuICBib3R0b206IC01cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0ZjEzMWI7XG4gIG1hcmdpbjogMCAxNXB4O1xuICB6LWluZGV4OiAtMTtcbn1cblxuLnNjcmVlbiB7XG4gIGJhY2tncm91bmQ6ICNkZWRlZGU7XG4gIG1hcmdpbjogMCAxNXB4O1xuICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NzJiMmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc2NyZWVuX190b3AtaW5kaWNhdG9ycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLnNjcmVlbl9fdG9wLWluZGljYXRvcnMgLnNjcmVlbl9faW5kaWNhdG9yIHtcbiAgbWFyZ2luOiAwIDE1cHg7XG59XG4uc2NyZWVuX19nbGFzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzIyMjI7XG4gIHBhZGRpbmctdG9wOiA3NSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zY3JlZW5fX2dsYXNzLXRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogNXB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogI2RlZGVkZTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zY3JlZW5fX2JvdHRvbS1pbmRpY2F0b3JzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zY3JlZW5fX3NwZWFrZXIge1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4uc2NyZWVuX19zcGVha2VyLWxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM1YzVjO1xuICBoZWlnaHQ6IDFweDtcbn1cbi5zY3JlZW5fX3NwZWFrZXItbGluZTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmNvbnRyb2xzIHtcbiAgcGFkZGluZzogMzBweCAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuXG4uc3RhcnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDM7XG4gIHdpZHRoOiAxNXZ3O1xuICBoZWlnaHQ6IDE1dnc7XG4gIGZsZXgtYmFzaXM6IDE1dnc7XG4gIGZsZXgtZ3JvdzogMDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4uc3RhcnQ6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0xdnc7XG4gIGJvdHRvbTogLTF2dztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMDAwNDA3O1xuICB6LWluZGV4OiAtMTtcbn1cbi5zdGFydDphY3RpdmUge1xuICByaWdodDogLTF2dztcbiAgYm90dG9tOiAtMXZ3O1xufVxuLnN0YXJ0OmFjdGl2ZTpiZWZvcmUge1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuLnN0YXJ0X19idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMDAzMDJhO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5kcGFkLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kcGFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1iYXNpczogMzB2dztcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRwYWRfX3RvcCB7XG4gIGJhY2tncm91bmQ6ICMwMDMwMmE7XG4gIHdpZHRoOiAxMHZ3O1xuICBoZWlnaHQ6IDEwdnc7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xufVxuLmRwYWRfX2NlbnRlciB7XG4gIGJhY2tncm91bmQ6ICMwMDMwMmE7XG4gIHdpZHRoOiAzMHZ3O1xuICBoZWlnaHQ6IDEwdnc7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5kcGFkX19ib3R0b20ge1xuICBiYWNrZ3JvdW5kOiAjMDAzMDJhO1xuICB3aWR0aDogMTB2dztcbiAgaGVpZ2h0OiAxMHZ3O1xuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbn1cbi5kcGFkOmFjdGl2ZSB7XG4gIHJpZ2h0OiAtNXB4O1xuICBib3R0b206IC01cHg7XG59XG4uZHBhZC0tZGFyayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC01cHg7XG4gIGJvdHRvbTogLTVweDtcbn1cbi5kcGFkLS1kYXJrOmFjdGl2ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZHBhZC0tZGFyayAuZHBhZF9fdG9wIHtcbiAgYmFja2dyb3VuZDogIzAwMDYwYTtcbn1cbi5kcGFkLS1kYXJrIC5kcGFkX19jZW50ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDAwNjBhO1xufVxuLmRwYWQtLWRhcmsgLmRwYWRfX2JvdHRvbSB7XG4gIGJhY2tncm91bmQ6ICMwMDA2MGE7XG59IiwiQGltcG9ydCAnLi4vc3R5bGVzLnNjc3MnO1xuXG4uZGV2aWNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZCB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uY2FtZXJhIHtcbiAgICB3aWR0aDogODZweDtcbiAgICBoZWlnaHQ6IDg2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHBva2Vtb24td2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjOGEwODFjO1xufVxuXG4uc3RhdHVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICZfX2luZGljYXRvciB7XG4gICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgfVxufVxuXG4uc2VwYXJhdG9yIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgJi0tZGFyayB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICAgICYtLWRhcmsgJntcbiAgICAgICAgJl9fbGVmdCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODkwNjFjO1xuICAgICAgICAgICAgd2lkdGg6IDY3JTtcbiAgICAgICAgfVxuICAgICAgICAmX19jb3JuZXIge1xuICAgICAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwb2tlbW9uLXJlZDtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJl9fbGVmdCB7XG4gICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICM0MzA0MGQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNDMwNDBkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoLTMwZGVnLCAwKTtcbiAgICAgICAgYmFja2dyb3VuZDogJHBva2Vtb24tcmVkO1xuICAgIH1cbiAgICAmX19yaWdodCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiAzNSU7XG4gICAgICAgIGhlaWdodDogNTNweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9rZW1vbi1yZWQ7XG4gICAgfVxuICAgICZfX2Nvcm5lciB7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzQzMDQwZDtcbiAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICM0MzA0MGQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDA7XG4gICAgICAgIGhlaWdodDozMHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoLTMwZGVnLCAwKTtcbiAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgICAgYmFja2dyb3VuZDogIzg5MDYxYztcbiAgICB9XG59XG5cbi5zY3JlZW4td3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogNDVweCA1cHggMCAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgJjpiZWZvcmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4cHgpO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSArIDFweCk7XG4gICAgICAgIHJpZ2h0OiAtNXB4O1xuICAgICAgICBib3R0b206IC01cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0ZjEzMWI7XG4gICAgICAgIG1hcmdpbjogMCAxNXB4O1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG59XG5cbi5zY3JlZW4ge1xuICAgIGJhY2tncm91bmQ6ICRwb2tlbW9uLXdoaXRlO1xuICAgIG1hcmdpbjogMCAxNXB4O1xuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDcyYjJmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgJl9fdG9wLWluZGljYXRvcnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgLnNjcmVlbl9faW5kaWNhdG9yIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgICZfX2dsYXNzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBva2Vtb24tYmxhY2s7XG4gICAgICAgIHBhZGRpbmctdG9wOiA3NSU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgJi10ZXh0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgICAgIGNvbG9yOiAkcG9rZW1vbi13aGl0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJl9fYm90dG9tLWluZGljYXRvcnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAmX19zcGVha2VyIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAmLWxpbmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVjNWM1YztcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY29udHJvbHMge1xuICAgIHBhZGRpbmc6IDMwcHggMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG59XG5cbi5zdGFydCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgd2lkdGg6IDE1dnc7XG4gICAgaGVpZ2h0OiAxNXZ3O1xuICAgIGZsZXgtYmFzaXM6IDE1dnc7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICY6YmVmb3JlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAtMXZ3O1xuICAgICAgICBib3R0b206IC0xdnc7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDQwNztcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuICAgICY6YWN0aXZlIHtcbiAgICAgICAgcmlnaHQ6IC0xdnc7XG4gICAgICAgIGJvdHRvbTogLTF2dztcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJl9fYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMzAyYTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbn1cblxuXG4uZHBhZC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kcGFkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWJhc2lzOiAzMHZ3O1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJl9fdG9wIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMzAyYTtcbiAgICAgICAgd2lkdGg6IDEwdnc7XG4gICAgICAgIGhlaWdodDogMTB2dztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gICAgfVxuICAgICZfX2NlbnRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDMwMmE7XG4gICAgICAgIHdpZHRoOiAzMHZ3O1xuICAgICAgICBoZWlnaHQ6IDEwdnc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgJl9fYm90dG9tIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMzAyYTtcbiAgICAgICAgd2lkdGg6IDEwdnc7XG4gICAgICAgIGhlaWdodDogMTB2dztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG4gICAgfVxuICAgICY6YWN0aXZlIHtcbiAgICAgICAgcmlnaHQ6IC01cHg7XG4gICAgICAgIGJvdHRvbTogLTVweDtcbiAgICB9XG5cbiAgICAmLS1kYXJrIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogLTVweDtcbiAgICAgICAgYm90dG9tOiAtNXB4O1xuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuICAgICYtLWRhcmsgJntcbiAgICAgICAgJl9fdG9wIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA2MGE7XG4gICAgICAgIH1cbiAgICAgICAgJl9fY2VudGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA2MGE7XG4gICAgICAgIH1cbiAgICAgICAgJl9fYm90dG9tIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA2MGE7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var quagga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quagga */ "./node_modules/quagga/dist/quagga.min.js");
/* harmony import */ var quagga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(quagga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _content_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content/en */ "./src/content/en.ts");




let AppComponent = class AppComponent {
    constructor() {
        this.currentUtterance = new SpeechSynthesisUtterance();
        this.cameraOn = false;
        this.barCodeFound = false;
        this.content = _content_en__WEBPACK_IMPORTED_MODULE_3__["default"];
        this.blink = false;
        this.cameraInitalized = false;
        this.scanning = false;
        this.shouldSpeak = true;
        this.currentUtterance.lang = 'en-US';
        this.currentUtterance.voice = window.speechSynthesis.getVoices().find((voice) => {
            return voice.voiceURI === 'Google UK English Male';
        });
        this.currentMessage = _content_en__WEBPACK_IMPORTED_MODULE_3__["default"].welcomeMessage;
        this.currentUtterance.onend = () => {
            clearInterval(this.blinkingInterval);
            this.blink = false;
        };
        window.addEventListener('beforeunload', (e) => {
            quagga__WEBPACK_IMPORTED_MODULE_2___default.a.stop();
            window.speechSynthesis.cancel();
        });
    }
    set currentMessage(message) {
        this.currentMessageHolder = message;
        this.currentUtterance.text = this.strip(message);
    }
    get currentMessage() {
        return this.currentMessageHolder;
    }
    ngAfterViewInit() {
        quagga__WEBPACK_IMPORTED_MODULE_2___default.a.init({
            inputStream: {
                name: 'Live',
                type: 'LiveStream',
                target: document.querySelector('.camera-screen__content')
            },
            decoder: {
                readers: [
                    'ean_reader',
                    'ean_8_reader',
                ],
                multiple: true,
            },
            locator: {
                halfSample: true,
            }
        }, (err) => {
            if (err) {
                console.log(err);
                return;
            }
        });
        quagga__WEBPACK_IMPORTED_MODULE_2___default.a.onDetected((data) => {
            data.forEach(code => {
                const codeValue = code.codeResult.code;
                if (_content_en__WEBPACK_IMPORTED_MODULE_3__["default"].barcodes[codeValue]) {
                    this.scanning = false;
                    const message = `<h1>${_content_en__WEBPACK_IMPORTED_MODULE_3__["default"].barcodes[codeValue].name}</h1><p>${_content_en__WEBPACK_IMPORTED_MODULE_3__["default"].barcodes[codeValue].desc}<p>`;
                    if (this.currentMessage !== message) {
                        this.currentMessage = message;
                        this.startSpeach();
                    }
                    this.barCodeFound = true;
                }
            });
        });
        this.startSpeach();
    }
    ngOnDestroy() {
        window.speechSynthesis.cancel();
    }
    onSpeakerClick() {
        this.shouldSpeak = !this.shouldSpeak;
        if (this.shouldSpeak) {
            this.startSpeach();
        }
        else {
            window.speechSynthesis.cancel();
        }
    }
    onStartScan() {
        this.scanning = true;
        this.barCodeFound = false;
        quagga__WEBPACK_IMPORTED_MODULE_2___default.a.start();
    }
    startSpeach() {
        if (!this.shouldSpeak) {
            return;
        }
        window.speechSynthesis.cancel();
        this.blinkingInterval = setInterval(() => {
            this.blink = !this.blink;
        }, (Math.random() * 300) + 200);
        setTimeout(() => {
            window.speechSynthesis.speak(this.currentUtterance);
        }, 150);
    }
    strip(message) {
        const doc = new DOMParser().parseFromString(message, 'text/html');
        return doc.body.textContent || '';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _circle_circle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./circle/circle.component */ "./src/app/circle/circle.component.ts");





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _circle_circle_component__WEBPACK_IMPORTED_MODULE_4__["CircleComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/circle/circle.component.scss":
/*!**********************************************!*\
  !*** ./src/app/circle/circle.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".circle {\n  border-radius: 50%;\n  position: relative;\n}\n.circle .circle {\n  position: absolute;\n  top: 4%;\n  left: 4%;\n}\n.circle .circle--dark {\n  bottom: 2%;\n  right: 2%;\n  top: auto;\n  left: auto;\n}\n.circle .circle--small {\n  top: 18%;\n  left: 18%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJvci5rYWxvY3ppL0RvY3VtZW50cy9wcm9qZWN0cy90aG9tcy1zYW50YS9zcmMvYXBwL2NpcmNsZS9jaXJjbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NpcmNsZS9jaXJjbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURBSTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNFUjtBRERRO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0daO0FERFE7RUFDSSxRQUFBO0VBQ0EsU0FBQTtBQ0daIiwiZmlsZSI6InNyYy9hcHAvY2lyY2xlL2NpcmNsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaXJjbGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmNpcmNsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA0JTtcbiAgICAgICAgbGVmdDogNCU7XG4gICAgICAgICYtLWRhcmsge1xuICAgICAgICAgICAgYm90dG9tOiAyJTtcbiAgICAgICAgICAgIHJpZ2h0OiAyJTtcbiAgICAgICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgJi0tc21hbGwge1xuICAgICAgICAgICAgdG9wOiAxOCU7XG4gICAgICAgICAgICBsZWZ0OiAxOCU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmNpcmNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNpcmNsZSAuY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQlO1xuICBsZWZ0OiA0JTtcbn1cbi5jaXJjbGUgLmNpcmNsZS0tZGFyayB7XG4gIGJvdHRvbTogMiU7XG4gIHJpZ2h0OiAyJTtcbiAgdG9wOiBhdXRvO1xuICBsZWZ0OiBhdXRvO1xufVxuLmNpcmNsZSAuY2lyY2xlLS1zbWFsbCB7XG4gIHRvcDogMTglO1xuICBsZWZ0OiAxOCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/circle/circle.component.ts":
/*!********************************************!*\
  !*** ./src/app/circle/circle.component.ts ***!
  \********************************************/
/*! exports provided: CircleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleComponent", function() { return CircleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");



let CircleComponent = class CircleComponent {
    constructor(elRef) {
        this.elRef = elRef;
    }
    set on(value) {
        this.onHidden = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
    }
    get on() {
        return this.onHidden;
    }
    ngOnInit() {
        this.lighterColor = this.adjust(this.color, 20);
        this.darkerColor = this.adjust(this.color, -20);
        this.borderColor = this.adjust(this.color, -80);
    }
    getStyle(color, size, border, on) {
        const style = {
            'background-color': color,
            width: `${size}px`,
            height: `${size}px`,
        };
        if (border) {
            style.border = `1px solid ${border}`;
        }
        if (on) {
            style.fontSize = `${size}px`;
            style.boxShadow = `0px 0px .8em .03em ${this.lighterColor}`;
        }
        return style;
    }
    adjust(color, amount) {
        return '#' + color.replace(/^#/, '').replace(/../g, colorTemp => ('0' + Math.min(255, Math.max(0, parseInt(colorTemp, 16) + amount)).toString(16)).substr(-2));
    }
};
CircleComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CircleComponent.prototype, "color", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CircleComponent.prototype, "size", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CircleComponent.prototype, "on", null);
CircleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-circle',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./circle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/circle/circle.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./circle.component.scss */ "./src/app/circle/circle.component.scss")).default]
    })
], CircleComponent);



/***/ }),

/***/ "./src/content/en.ts":
/*!***************************!*\
  !*** ./src/content/en.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/* harmony default export */ __webpack_exports__["default"] = ({
    welcomeMessage: `<h1>Dear Thom,</h1>
        <p>
        The box traveled across the land and I hope it reached you in good condition.
        To start this test, you need to press the circle button.
        It will start scanning for barcodes with your camera.
        You can disable speech to text by pressing the speaker(4 vertical lines under the screen).
        The goal is to catch all of the sweets, but be careful if you eat all of them in one go,
        you will be like no one ever was before and all the training time will be spent on you.
        </p>
        <p>Happy Holidays!</p>`,
    barcodes: {
        7613034986139: {
            name: 'Balaton Bumm Caramel Coated Filled Wafer Bar Dipped in White Mass with Wheat Flake',
            desc: `Balaton is one of the biggest chocolate bar brand in Hungary.
                    The production was started in the 50's, in Diósgyőr.
                    This particular peace is one of their newer one, and is quite good in my opinion.`
        },
        7622210048066: {
            name: 'Győri Negro Honey Filled Drops',
            desc: `For details regarding the name please check the classic version.
                    This is a twist on the classic negro candy, in my opinion the best version.`
        },
        7622210048042: {
            name: 'Győri Negro Classic Filled Drops',
            desc: `I promise you it's not racist. The name refers to its inventor, Pietro Negro.
                    This is the classic version, it was created in the 1920's. The slogen of the candy is:
                    "the chimney sweep of the throat". And i remember when i was a child and my troat hurt this
                    was the first type of "medication".`
        },
        7622210048127: {
            name: 'Győri Negro Extra Strong Hard Candy',
            desc: 'This version of Negro is a bit to extreme for my taste. But is a good challenge.'
        },
        5998711349820: {
            name: 'Győri Édes Friable, Sweet Biscuit',
            desc: 'This one is my favorite biscuit by far, i hope you will like it.'
        },
        5998143105209: {
            name: 'Szerencsi Macskanyelv Quality Milk and Dark Chocolate',
            desc: `Macskanyelv means cat's tongue, i hope it won't trigger your allergy.
            The name is comming from the shape, it has nothing to do with cats. `
        },
        5998710151806: {
            name: 'Bonbonetti Dunakavics Roasted Peanut Dragées',
            desc: `I think this is the my favorite from the stuff you got in this box. It's perfect, small, sweet, colorful.
                    Dunakavics means it's a stone from the Danube.`
        },
        7613032201074: {
            name: 'Balaton Wafer Filled with Cocoa Cream, Coated in Cocoa Milk Dollop',
            desc: `This one is the classic Balaton. It got it's name from the lake Balaton, but it has nothing to do with it.
            It was a trend to name sweets from Geographic locations, it's the same with Duankavics.`
        },
        7622210078988: {
            name: 'Győri Pilóta Cocoa Filled Biscuit',
            desc: `I would say that this is the hungarian oreo, there is science behind splitting the two half
            while the creme will stay together, but taste wise it has nothing to do with it.`
        },
        7613036262347: {
            name: 'Balaton Újhullám Coconut Cream Filled Wafer Dipped in White Chocolate',
            desc: 'This is a newer type of the Balaton bars. I really like Coconut in chocolate i hope you do too.'
        },
        7622210079091: {
            name: 'Győri Pilóta Vanilla Rings with Cocoa Milk Coating',
            desc: `I think this is the most well known sweet you can get for a foreigner after Túró Rudi
                    (It has cottage cheese and i think it would have spoiled. So you need to travel for it).
                    It's good i prefer drinking some milk with it, but never heard anyone else doing it.`
        },
        59939665: {
            name: '"Kojak" lollipop',
            desc: `This is quite weird lollipop got it's name from an american action series from the 70s.
                    I don't think it had any license to use the name, but it wasn't as important in the communist era.
                    They make the lollipop to this day with the original recipe and is really different.`
        },
        5997250315167: {
            name: 'Szamos Aranykocka Almond Marzipan with Chocolate-, Hazelnut-, Orange-, Coffeecream',
            desc: `Marzipan isn't a hungarian thing, but Szamos is quite famous for making it.
                    Matyas Szamos started the company in the 1930's. It is still a family business.`
        }
    }
});


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gabor.kaloczi/Documents/projects/thoms-santa/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);