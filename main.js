(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\CodeCraft\wbteet\profiles\myprofile\src\main.ts */"zUnb");


/***/ }),

/***/ "7vJP":
/*!************************************************!*\
  !*** ./src/app/components/home/home.module.ts ***!
  \************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "BuFo");



class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], exports: [_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]],
                exports: [_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 110, vars: 0, consts: [[1, "hero-section"], [1, "container"], [1, "row", "nav-row"], [1, "col"], [1, "nav"], [1, "row"], [1, "col-5"], ["data-name", "Layer 1", "width", "981", "height", "594", "viewBox", "0 0 981 594"], ["d", "M1001.14737,684.2992a31.51719,31.51719,0,0,0,30.43451-5.36117c10.65985-8.94708,14.002-23.68733,16.72141-37.336l8.04348-40.37019-16.83986,11.5953c-12.11023,8.33865-24.49328,16.94444-32.87835,29.02256s-12.04518,28.56584-5.308,41.63494", "transform", "translate(-109.5 -153)", "fill", "#e6e6e6"], ["d", "M1002.58684,733.17572c-1.70442-12.415-3.457-24.98956-2.26145-37.53769,1.06178-11.14408,4.46167-22.02872,11.38341-30.95338a51.49127,51.49127,0,0,1,13.2109-11.97129c1.32109-.83387,2.537,1.25978,1.22166,2.09a48.95181,48.95181,0,0,0-19.363,23.36287c-4.2156,10.72234-4.89256,22.41059-4.16611,33.80081.43931,6.88808,1.37037,13.731,2.30861,20.5652a1.254,1.254,0,0,1-.84528,1.48874,1.21762,1.21762,0,0,1-1.48874-.84528Z", "transform", "translate(-109.5 -153)", "fill", "#f2f2f2"], ["d", "M1019.00349,711.207a23.20062,23.20062,0,0,0,20.2149,10.43337c10.23314-.48578,18.7643-7.62786,26.444-14.40841l22.7149-20.05553-15.0335-.71945c-10.8112-.51739-21.90132-1-32.19861,2.334s-19.794,11.35766-21.67693,22.01619", "transform", "translate(-109.5 -153)", "fill", "#e6e6e6"], ["d", "M997.77,740.31255c8.20362-14.51579,17.71911-30.64844,34.72169-35.80468a38.74557,38.74557,0,0,1,14.60449-1.50794c1.55056.13369,1.16337,2.52384-.38438,2.39039a35.99579,35.99579,0,0,0-23.30647,6.166c-6.57154,4.47307-11.6882,10.69183-16.0189,17.28653-2.65269,4.03945-5.02879,8.25028-7.40535,12.45545-.7595,1.34388-2.97945.37379-2.21108-.98579Z", "transform", "translate(-109.5 -153)", "fill", "#f2f2f2"], ["cx", "107.58734", "cy", "589.83825", "rx", "10.90314", "ry", "4.08868", "fill", "#2f2e41"], ["cx", "133.75482", "cy", "589.29311", "rx", "10.90314", "ry", "4.08868", "fill", "#2f2e41"], ["cx", "274.61697", "cy", "671.80227", "rx", "21.53369", "ry", "6.76007", "transform", "translate(-408.31897 73.93825) rotate(-29.96257)", "fill", "#2f2e41"], ["cx", "116.30981", "cy", "532.32427", "r", "43.06734", "fill", "#2f2e41"], ["x", "96.6842", "y", "566.12395", "width", "13.08374", "height", "23.44171", "fill", "#2f2e41"], ["x", "122.85168", "y", "566.12395", "width", "13.08374", "height", "23.44171", "fill", "#2f2e41"], ["cx", "126.40014", "cy", "521.42116", "r", "14.71922", "fill", "#fff"], ["cx", "242.90014", "cy", "672.42116", "rx", "4.88593", "ry", "4.92055", "transform", "translate(-513.9661 215.99466) rotate(-45.02573)", "fill", "#3f3d56"], ["cx", "186.30166", "cy", "697.34088", "rx", "21.53368", "ry", "6.76007", "transform", "translate(-644.99576 545.38919) rotate(-75.12541)", "fill", "#2f2e41"], ["d", "M235.56684,698.1361c7.90666,0,15.32008-5.03284,15.32008-.81775s-7.41338,16.08209-15.32008,16.08209-15.03213-8.32342-15.03213-12.53857S227.66018,698.1361,235.56684,698.1361Z", "transform", "translate(-109.5 -153)", "fill", "#fff"], ["cx", "676.18933", "cy", "441.78313", "rx", "10.90314", "ry", "4.08868", "fill", "#2f2e41"], ["cx", "650.02185", "cy", "441.23799", "rx", "10.90314", "ry", "4.08868", "fill", "#2f2e41"], ["cx", "728.15969", "cy", "523.74715", "rx", "6.76007", "ry", "21.53369", "transform", "translate(-198.75746 740.0124) rotate(-60.03743)", "fill", "#2f2e41"], ["cx", "667.46686", "cy", "384.26915", "r", "43.06734", "fill", "#2f2e41"], ["x", "674.00873", "y", "418.06884", "width", "13.08374", "height", "23.44171", "fill", "#2f2e41"], ["x", "647.84124", "y", "418.06884", "width", "13.08374", "height", "23.44171", "fill", "#2f2e41"], ["cx", "657.37652", "cy", "373.36605", "r", "14.71922", "fill", "#fff"], ["cx", "759.87652", "cy", "524.36605", "rx", "4.92055", "ry", "4.88593", "transform", "translate(-257.79481 537.48923) rotate(-44.97427)", "fill", "#3f3d56"], ["d", "M781.59814,508.47377c-17.18994-3.83831-28.58233-9.58218-25.10486-25.156s20.23175-25.08725,37.4217-21.24887,28.30609,19.575,24.82861,35.14883S798.78808,512.31209,781.59814,508.47377Z", "transform", "translate(-109.5 -153)", "fill", "#6c63ff"], ["cx", "816.47501", "cy", "549.28576", "rx", "6.76007", "ry", "21.53368", "transform", "translate(-223.14392 74.99918) rotate(-14.87459)", "fill", "#2f2e41"], ["d", "M767.20983,550.081c-7.90666,0-15.32008-5.03284-15.32008-.81775s7.41338,16.08209,15.32008,16.08209S782.242,557.0219,782.242,552.80675,775.11649,550.081,767.20983,550.081Z", "transform", "translate(-109.5 -153)", "fill", "#fff"], ["d", "M325.38583,612a102,102,0,1,1,102-102A102.11537,102.11537,0,0,1,325.38583,612Zm0-184a82,82,0,1,0,82,82A82.09293,82.09293,0,0,0,325.38583,428Z", "transform", "translate(-109.5 -153)", "fill", "#3f3d56"], ["d", "M557.38583,747c-28.29908,0-54.47852-18.36768-73.71631-51.72021-18.239-31.6211-28.28369-73.44922-28.28369-117.77979s10.04467-86.15869,28.28369-117.77979C502.90731,426.36768,529.08675,408,557.38583,408s54.47851,18.36768,73.71631,51.72021c18.239,31.6211,28.28369,73.44922,28.28369,117.77979s-10.04468,86.15869-28.28369,117.77979C611.86434,728.63232,585.6849,747,557.38583,747Zm0-319c-20.84937,0-40.87622,14.814-56.3916,41.71289-16.51392,28.62988-25.6084,66.90967-25.6084,107.78711s9.09448,79.15723,25.6084,107.78711C516.50961,712.186,536.53646,727,557.38583,727s40.87622-14.814,56.3916-41.71289c16.51391-28.62988,25.6084-66.90967,25.6084-107.78711s-9.09449-79.15723-25.6084-107.78711C598.26205,442.814,578.23519,428,557.38583,428Z", "transform", "translate(-109.5 -153)", "fill", "#3f3d56"], ["d", "M417.38583,746.54346h-184a10.00019,10.00019,0,0,1-7.2118-16.92774L372.39388,577.397a10.00017,10.00017,0,1,1,14.42359,13.85547L256.858,726.54346H417.38583a10,10,0,1,1,0,20Z", "transform", "translate(-109.5 -153)", "fill", "#3f3d56"], ["d", "M778.38583,612a102,102,0,1,1,102-102A102.11546,102.11546,0,0,1,778.38583,612Zm0-184a82,82,0,1,0,82,82A82.093,82.093,0,0,0,778.38583,428Z", "transform", "translate(-109.5 -153)", "fill", "#3f3d56"], ["d", "M870.38583,746.54346h-184a10,10,0,0,1-7.21167-16.92774L825.39388,577.397a10.00008,10.00008,0,1,1,14.42334,13.85547L709.858,726.54346H870.38583a10,10,0,0,1,0,20Z", "transform", "translate(-109.5 -153)", "fill", "#3f3d56"], ["d", "M1000.38583,747a9.99987,9.99987,0,0,1-10-10V442.14209l-75.82276,75.82275A10.00014,10.00014,0,0,1,900.421,503.82227l92.8938-92.89356A10.00012,10.00012,0,0,1,1010.38583,418V737A10,10,0,0,1,1000.38583,747Z", "transform", "translate(-109.5 -153)", "fill", "#3f3d56"], ["d", "M247.3481,648.99359l-7.27507-8.697-5.773-6.91084-8.37514-10.01546-5.78411-6.9089-7.857-9.40784a1.13511,1.13511,0,0,0-1.93227.33746l-3.058,8.373-2.37218,6.46808-3.432,9.37674-2.35912,6.47721-3.432,9.37673-2.36114,6.46616-1.75864,4.80452a1.04929,1.04929,0,0,0-.05851.58241,1.18057,1.18057,0,0,0,.24134.53005,1.12414,1.12414,0,0,0,1.06312.38652l53.85956-9.40634a1.0638,1.0638,0,0,0,.79252-.57327.84389.84389,0,0,0,.07662-.15071,1.18047,1.18047,0,0,0,.04739-.58047A1.04917,1.04917,0,0,0,247.3481,648.99359Z", "transform", "translate(-109.5 -153)", "fill", "#6c63ff"], ["points", "116.425 470.37 95.422 469.232 97.793 462.764 110.641 463.461 116.425 470.37", "fill", "#3f3d56"], ["points", "130.573 487.296 89.63 485.086 91.99 478.609 124.8 480.385 130.573 487.296", "fill", "#3f3d56"], ["d", "M247.47652,650.25291a1.06379,1.06379,0,0,1-.79252.57327l-26.18575,4.57323L193.33712,653.929l2.36114-6.46616Z", "transform", "translate(-109.5 -153)", "fill", "#3f3d56"], ["cx", "100.94486", "cy", "449.22503", "r", "9.01852", "fill", "#6c63ff"], ["d", "M1025.79142,422.329l-4.1215-10.563-3.26754-8.3911-4.74364-12.16349-3.27867-8.39281-4.44634-11.42234a1.13512,1.13512,0,0,0-1.939-.2964l-5.56865,6.96053-4.31112,5.37379-6.24321,7.79256-4.30165,5.3866-6.24321,7.79256-4.3,5.37548-3.19907,3.99276a1.04923,1.04923,0,0,0-.2412.53334,1.18045,1.18045,0,0,0,.05969.57933,1.12412,1.12412,0,0,0,.88434.70539l54.04694,8.26186a1.06376,1.06376,0,0,0,.934-.29058.84428.84428,0,0,0,.12069-.1184,1.18053,1.18053,0,0,0,.23-.53505A1.04926,1.04926,0,0,0,1025.79142,422.329Z", "transform", "translate(-109.5 -153)", "fill", "#6c63ff"], ["points", "904.159 238.211 884.615 230.434 888.926 225.06 900.88 229.818 904.159 238.211", "fill", "#3f3d56"], ["points", "912.17 258.766 874.07 243.613 878.372 238.227 908.902 250.374 912.17 258.766", "fill", "#3f3d56"], ["d", "M1025.51151,423.5635a1.06376,1.06376,0,0,1-.934.29058l-26.27685-4.01679-25.27384-10.05595,4.3-5.37548Z", "transform", "translate(-109.5 -153)", "fill", "#3f3d56"], ["cx", "896.23077", "cy", "213.23338", "r", "9.01852", "fill", "#6c63ff"], ["d", "M716.7914,353H701.807a4.49992,4.49992,0,0,1-4.38868-5.49414l2.77515-12.24658c-35.60815-5.78907-62.39429-44.686-62.39429-90.75928,0-50.45312,32.07471-91.5,71.5-91.5s71.5,41.04688,71.5,91.5c0,46.07324-26.78613,84.97021-62.39428,90.75928l2.77514,12.24658A4.4999,4.4999,0,0,1,716.7914,353Z", "transform", "translate(-109.5 -153)", "fill", "#ff6584"], ["d", "M722.79921,339h-24a3.5,3.5,0,0,1,0-7h24a3.5,3.5,0,1,1,0,7Z", "transform", "translate(-109.5 -153)", "fill", "#3f3d56"], ["d", "M697.783,334.6369a24.77557,24.77557,0,0,0-21.34933,4.586,24.3315,24.3315,0,0,0-8.86482,19.91534C668.30092,375.47692,684.75,384.2587,696.216,393.046c13.54959,10.3841,26.26853,22.365,35.44966,36.87079,9.092,14.365,14.79416,31.38738,13.47308,48.5318-1.1426,14.82826-7.86257,29.52924-19.38681,39.1257a45.88584,45.88584,0,0,1-4.56629,3.32542c-1.6189,1.04059-.11634,3.63846,1.51416,2.59041,12.62689-8.11628,20.97964-21.64621,24.14329-36.18244,3.51973-16.17231.3839-33.008-6.53383-47.85409-7.18642-15.42265-18.49057-28.53448-31.1926-39.69774-6.30057-5.53729-12.99285-10.56334-19.77086-15.4943-5.96-4.33584-12.20723-9.00494-15.91131-15.53334a21.63787,21.63787,0,0,1-.22667-21.0633,21.21314,21.21314,0,0,1,18.361-10.79685,20.877,20.877,0,0,1,5.41671.66169c1.87142.47828,2.66976-2.41435.79752-2.89283Z", "transform", "translate(-109.5 -153)", "fill", "#3f3d56"], ["d", "M663.79921,270a6.5077,6.5077,0,0,1-6.49951-6.417,74.25555,74.25555,0,0,1,0-48.166,6.5,6.5,0,0,1,12.99951.083l-.03051.17236c-5.68311,15.48877-5.68238,31.52442.00219,47.66162l.02832.166A6.50737,6.50737,0,0,1,663.79921,270Z", "transform", "translate(-109.5 -153)", "fill", "#fff"], ["d", "M1089.5,747h-979a1,1,0,0,1,0-2h979a1,1,0,0,1,0,2Z", "transform", "translate(-109.5 -153)", "fill", "#3f3d56"], ["x", "311.88583", "y", "195", "width", "6", "height", "19", "fill", "#f2f2f2", 2, "isolation", "isolate"], ["x", "408.88583", "y", "141", "width", "6", "height", "19", "fill", "#f2f2f2", 2, "isolation", "isolate"], ["x", "500.38585", "y", "351.99995", "width", "6", "height", "19", "transform", "translate(-225.0968 239.15962) rotate(-38.5192)", "fill", "#f2f2f2", 2, "isolation", "isolate"], ["x", "459.88583", "y", "416.49998", "width", "19", "height", "6", "transform", "translate(-238.10473 463.25003) rotate(-60)", "fill", "#f2f2f2", 2, "isolation", "isolate"], ["x", "432.88584", "y", "231.5", "width", "18.99998", "height", "6", "transform", "translate(-91.39004 347.36736) rotate(-60)", "fill", "#f2f2f2", 2, "isolation", "isolate"], ["x", "719.88583", "y", "157", "width", "6", "height", "19", "fill", "#f2f2f2", 2, "isolation", "isolate"], ["x", "816.88583", "y", "103", "width", "6", "height", "19", "fill", "#f2f2f2", 2, "isolation", "isolate"], ["x", "908.38585", "y", "313.99995", "width", "6", "height", "19", "transform", "translate(-112.65028 484.98375) rotate(-38.5192)", "fill", "#f2f2f2", 2, "isolation", "isolate"], ["x", "867.88583", "y", "378.49998", "width", "19", "height", "6", "transform", "translate(-1.19577 797.5884) rotate(-60)", "fill", "#f2f2f2", 2, "isolation", "isolate"], ["x", "840.88584", "y", "193.5", "width", "18.99998", "height", "6", "transform", "translate(145.51892 681.70573) rotate(-60)", "fill", "#f2f2f2", 2, "isolation", "isolate"], ["d", "M553.62428,667.2992a31.51717,31.51717,0,0,1-30.4345-5.36117c-10.65986-8.94708-14.002-23.68733-16.72142-37.336l-8.04348-40.37019,16.83986,11.5953c12.11023,8.33865,24.49328,16.94444,32.87836,29.02256s12.04518,28.56584,5.308,41.63494", "transform", "translate(-109.5 -153)", "fill", "#6c63ff"], ["d", "M552.18482,716.17572c1.70442-12.415,3.457-24.98956,2.26145-37.53769-1.06179-11.14408-4.46168-22.02872-11.38342-30.95338A51.4914,51.4914,0,0,0,529.852,635.71336c-1.3211-.83387-2.537,1.25978-1.22167,2.09a48.95188,48.95188,0,0,1,19.363,23.36287c4.21559,10.72234,4.89255,22.41059,4.1661,33.80081-.43931,6.88808-1.37037,13.731-2.30861,20.5652a1.254,1.254,0,0,0,.84528,1.48874,1.21763,1.21763,0,0,0,1.48875-.84528Z", "transform", "translate(-109.5 -153)", "fill", "#f2f2f2"], ["d", "M535.76816,694.207a23.20062,23.20062,0,0,1-20.2149,10.43337c-10.23314-.48578-18.7643-7.62786-26.444-14.40841l-22.7149-20.05553,15.0335-.71945c10.8112-.51739,21.90132-1,32.19862,2.334s19.794,11.35766,21.67692,22.01619", "transform", "translate(-109.5 -153)", "fill", "#6c63ff"], ["d", "M557.00162,723.31255c-8.20362-14.51579-17.7191-30.64844-34.72168-35.80468a38.74561,38.74561,0,0,0-14.60449-1.50794c-1.55057.13369-1.16338,2.52384.38437,2.39039a35.99576,35.99576,0,0,1,23.30647,6.166c6.57155,4.47307,11.68821,10.69183,16.01891,17.28653,2.65268,4.03945,5.02878,8.25028,7.40534,12.45545.7595,1.34388,2.97945.37379,2.21108-.98579Z", "transform", "translate(-109.5 -153)", "fill", "#f2f2f2"], ["d", "M325.62428,532.2992a31.51717,31.51717,0,0,1-30.4345-5.36117c-10.65986-8.94708-14.002-23.68733-16.72142-37.336l-8.04348-40.37019,16.83986,11.5953c12.11023,8.33865,24.49328,16.94444,32.87836,29.02256s12.04518,28.56584,5.308,41.63494", "transform", "translate(-109.5 -153)", "fill", "#e6e6e6"], ["d", "M324.18482,581.17572c1.70442-12.415,3.457-24.98956,2.26145-37.53769-1.06179-11.14408-4.46168-22.02872-11.38342-30.95338A51.4914,51.4914,0,0,0,301.852,500.71336c-1.3211-.83387-2.537,1.25978-1.22167,2.09a48.95188,48.95188,0,0,1,19.363,23.36287c4.21559,10.72234,4.89255,22.41059,4.1661,33.80081-.43931,6.88808-1.37037,13.731-2.30861,20.5652a1.254,1.254,0,0,0,.84528,1.48874,1.21763,1.21763,0,0,0,1.48875-.84528Z", "transform", "translate(-109.5 -153)", "fill", "#f2f2f2"], ["d", "M307.76816,559.207a23.20062,23.20062,0,0,1-20.2149,10.43337c-10.23314-.48578-18.7643-7.62786-26.444-14.40841l-22.7149-20.05553,15.0335-.71945c10.8112-.51739,21.90132-1,32.19862,2.334s19.794,11.35766,21.67692,22.01619", "transform", "translate(-109.5 -153)", "fill", "#e6e6e6"], ["d", "M329.00162,588.31255c-8.20362-14.51579-17.7191-30.64844-34.72168-35.80468a38.74561,38.74561,0,0,0-14.60449-1.50794c-1.55057.13369-1.16338,2.52384.38437,2.39039a35.99576,35.99576,0,0,1,23.30647,6.166c6.57155,4.47307,11.68821,10.69183,16.01891,17.28653,2.65268,4.03945,5.02878,8.25028,7.40534,12.45545.7595,1.34388,2.97945.37379,2.21108-.98579Z", "transform", "translate(-109.5 -153)", "fill", "#f2f2f2"], [1, "col-7"], ["data-name", "Layer 1", "width", "926.62165", "height", "600.08495", "viewBox", "0 0 926.62165 600.08495"], ["cx", "150.53395", "cy", "254.87249", "r", "24.56103", "fill", "#ffb8b8"], ["points", "67.543 549.197 73.762 559.763 117.474 540.803 108.295 525.21 67.543 549.197", "fill", "#ffb8b8"], ["d", "M206.09566,694.4297,218.343,715.23658l.0005.00084A15.38605,15.38605,0,0,1,212.888,736.302l-.43091.25362L192.4047,702.48857Z", "transform", "translate(-136.68918 -149.95753)", "fill", "#2f2e41"], ["points", "139.6 587.26 151.86 587.259 157.692 539.971 139.598 539.972 139.6 587.26", "fill", "#ffb8b8"], ["d", "M273.16223,733.21466l24.14379-.001h.001a15.38605,15.38605,0,0,1,15.38648,15.38623v.5l-39.53052.00146Z", "transform", "translate(-136.68918 -149.95753)", "fill", "#2f2e41"], ["d", "M227.00063,708.56723a4.49318,4.49318,0,0,1-3.624-1.833l-11.82373-16.05859a4.49961,4.49961,0,0,1,1.12451-6.41016l52.614-35.1416-31.74659-83.47461L301.434,571.2518l2.28662,71.7334A36.04579,36.04579,0,0,1,285.67544,675.409l-56.42652,32.55371A4.486,4.486,0,0,1,227.00063,708.56723Z", "transform", "translate(-136.68918 -149.95753)", "fill", "#2f2e41"], ["d", "M276.65933,727.617a4.49986,4.49986,0,0,1-4.48877-4.33984l-2.488-69.88184,30.80835-1.623-2.45313,70.38379a4.48729,4.48729,0,0,1-4.1997,4.333l-16.87281,1.11817C276.86294,727.6141,276.76089,727.617,276.65933,727.617Z", "transform", "translate(-136.68918 -149.95753)", "fill", "#2f2e41"], ["d", "M309.29092,585.12875c-7.83838,0-35.21656-8.8164-44.72119-11.959-1.42188,1.13769-9.23316,6.97851-18.35108,5.91113-5.626-.66016-10.57886-3.84473-14.72095-9.46582-9.147-12.41406,2.15064-65.65137,13.239-108.126a34.26782,34.26782,0,0,1,40.52856-24.87988h0a34.57137,34.57137,0,0,1,26.08765,25.37793c2.08765,8.49805.29175,18.49414-1.01953,25.79395-.61646,3.43164-1.10352,6.14257-.937,7.47461.64355,5.14843,4.21875,85.8916,1.91992,89.33984C311.07143,584.96274,310.36343,585.12875,309.29092,585.12875Z", "transform", "translate(-136.68918 -149.95753)", "fill", "#6c63ff"], ["d", "M280.616,585.27177a10.74269,10.74269,0,0,0,.9416-16.44569l.48534-97.84356-23.04478,3.8374,6.76925,94.97037A10.80091,10.80091,0,0,0,280.616,585.27177Z", "transform", "translate(-136.68918 -149.95753)", "fill", "#ffb8b8"], ["d", "M285.946,533.81821H261.12417a4.51352,4.51352,0,0,1-4.5-4.459l-.60938-67.292a17.603,17.603,0,1,1,35.20411.043L290.4457,529.37A4.51547,4.51547,0,0,1,285.946,533.81821Z", "transform", "translate(-136.68918 -149.95753)", "fill", "#6c63ff"], ["d", "M280.96926,429.28873c-11.24529.02059-21.85416-8.868-23.80286-19.94323a28.67148,28.67148,0,0,1,.91927-13.01372A34.95394,34.95394,0,0,1,306.021,374.379c3.00831,1.36131,5.97145,3.31645,7.3489,6.31741s.51535,7.19528-2.49791,8.54561c-1.96916.88242-4.44023.4491-6.18719,1.71573-2.50928,1.81937-1.86334,5.69129-.74286,8.58112s2.38776,6.38691.50947,8.85239c-1.75023,2.29739-5.24872,2.22609-8.00436,1.36137s-5.47557-2.31277-8.34864-2.01822c-4.1904.42961-7.20172,4.59773-7.7591,8.77306s.75474,8.34892,2.05018,12.35714Z", "transform", "translate(-136.68918 -149.95753)", "fill", "#2f2e41"], ["d", "M395.68918,750.04247h-258a1,1,0,1,1,0-2h258a1,1,0,0,1,0,2Z", "transform", "translate(-136.68918 -149.95753)", "fill", "#ccc"], ["d", "M1046.81082,584.50538H405.97232a16.51868,16.51868,0,0,1-16.5-16.5V172.85157a12.10185,12.10185,0,0,1,12.08789-12.08838h649.4535a12.31111,12.31111,0,0,1,12.29711,12.29736V568.00538A16.51867,16.51867,0,0,1,1046.81082,584.50538Z", "transform", "translate(-136.68918 -149.95753)", "fill", "#f2f2f2"], ["d", "M1026.091,563.67306H428.84627c-8.755,0-15.87757-6.66993-15.87757-14.86817v-344.105c0-6.08008,5.278-11.02685,11.76563-11.02685H1030.008c6.59521,0,11.96069,5.02832,11.96069,11.20849V548.80489C1041.9687,557.00313,1034.8459,563.67306,1026.091,563.67306Z", "transform", "translate(-136.68918 -149.95753)", "fill", "#fff"], ["d", "M1063.08109,174.90772H389.24076v-8.40039a16.57376,16.57376,0,0,1,16.56-16.5498H1046.521a16.57368,16.57368,0,0,1,16.56006,16.5498Z", "transform", "translate(-136.68918 -149.95753)", "fill", "#3f3d56"], ["cx", "282.64694", "cy", "12.5", "r", "4.28342", "fill", "#fff"], ["cx", "298.90575", "cy", "12.5", "r", "4.28342", "fill", "#fff"], ["cx", "315.16455", "cy", "12.5", "r", "4.28342", "fill", "#fff"], ["d", "M713.29967,268.912H596.49153a6.56614,6.56614,0,0,1,0-13.13228H713.29967a6.56614,6.56614,0,1,1,0,13.13228Z", "transform", "translate(-136.68918 -149.95753)", "fill", "#ccc"], ["d", "M858.44587,268.912H741.63774a6.56614,6.56614,0,0,1,0-13.13228H858.44587a6.56614,6.56614,0,1,1,0,13.13228Z", "transform", "translate(-136.68918 -149.95753)", "fill", "#ccc"], ["d", "M858.44587,293.79419H655.24119a6.56613,6.56613,0,1,1,0-13.13227H858.44587a6.56613,6.56613,0,1,1,0,13.13227Z", "transform", "translate(-136.68918 -149.95753)", "fill", "#ccc"], ["d", "M713.29967,243.68419H596.49153a6.56614,6.56614,0,0,1,0-13.13227H713.29967a6.56614,6.56614,0,1,1,0,13.13227Z", "transform", "translate(-136.68918 -149.95753)", "fill", "#ccc"], ["d", "M777.5787,244.02978H744.40243a6.56614,6.56614,0,0,1,0-13.13228H777.5787a6.56614,6.56614,0,1,1,0,13.13228Z", "transform", "translate(-136.68918 -149.95753)", "fill", "#ccc"], ["d", "M629.66781,293.79419H596.49153a6.56614,6.56614,0,0,1,0-13.13227h33.17628a6.56614,6.56614,0,1,1,0,13.13227Z", "transform", "translate(-136.68918 -149.95753)", "fill", "#ccc"], ["d", "M713.29967,501.912H596.49153a6.56614,6.56614,0,0,1,0-13.13228H713.29967a6.56614,6.56614,0,1,1,0,13.13228Z", "transform", "translate(-136.68918 -149.95753)", "fill", "#ccc"], ["d", "M858.44587,501.912H741.63774a6.56614,6.56614,0,0,1,0-13.13228H858.44587a6.56614,6.56614,0,1,1,0,13.13228Z", "transform", "translate(-136.68918 -149.95753)", "fill", "#ccc"], ["d", "M858.44587,526.79419H655.24119a6.56613,6.56613,0,1,1,0-13.13227H858.44587a6.56614,6.56614,0,1,1,0,13.13227Z", "transform", "translate(-136.68918 -149.95753)", "fill", "#ccc"], ["d", "M713.29967,476.68419H596.49153a6.56613,6.56613,0,0,1,0-13.13227H713.29967a6.56613,6.56613,0,1,1,0,13.13227Z", "transform", "translate(-136.68918 -149.95753)", "fill", "#ccc"], ["d", "M777.5787,477.02978H744.40243a6.56614,6.56614,0,0,1,0-13.13228H777.5787a6.56614,6.56614,0,0,1,0,13.13228Z", "transform", "translate(-136.68918 -149.95753)", "fill", "#ccc"], ["d", "M629.66781,526.79419H596.49153a6.56613,6.56613,0,0,1,0-13.13227h33.17628a6.56614,6.56614,0,1,1,0,13.13227Z", "transform", "translate(-136.68918 -149.95753)", "fill", "#ccc"], ["d", "M682.793,431.41924a9.39692,9.39692,0,0,1-6.62352-2.7101l-43.90868-43.35929a9.1516,9.1516,0,0,1,0-13.02336l43.73124-43.18435a9.70171,9.70171,0,0,1,13.64354.043h0a9.689,9.689,0,0,1,.00019,13.68669l-32.49607,32.49664a5.41338,5.41338,0,0,0,0,7.64652l32.31978,32.32016a9.418,9.418,0,0,1-6.66648,16.08412Z", "transform", "translate(-136.68918 -149.95753)", "fill", "#6c63ff"], ["d", "M752.75859,431.41924a9.418,9.418,0,0,1-6.66648-16.08412L778.41189,383.015a5.41338,5.41338,0,0,0,0-7.64652L745.91582,342.8718a9.67776,9.67776,0,0,1,.00019-13.68669h0a9.70169,9.70169,0,0,1,13.64353-.043l43.73124,43.18435a9.15157,9.15157,0,0,1,0,13.02336l-43.90867,43.35929A9.39891,9.39891,0,0,1,752.75859,431.41924Z", "transform", "translate(-136.68918 -149.95753)", "fill", "#6c63ff"], [2, "color", "blue"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ellipse", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ellipse", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ellipse", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "circle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "rect", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "rect", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "circle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "ellipse", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "ellipse", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "ellipse", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "ellipse", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "ellipse", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "circle", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "rect", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "rect", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "circle", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "ellipse", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "ellipse", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "polygon", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "polygon", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "circle", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "polygon", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "polygon", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "circle", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "rect", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "rect", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "rect", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "rect", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "rect", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "rect", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "rect", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "rect", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "rect", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "rect", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "svg", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "circle", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "polygon", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "polygon", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "circle", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "circle", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "circle", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "path", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "path", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "path", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "path", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " WELCOME TO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "MY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "PROFILE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".hero-section[_ngcontent-%COMP%] {\n  height: 100vh;\n  background: #004b9c;\n}\n.hero-section[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background-image: url('hero-1-bg.jpg');\n  height: 100vh;\n  width: 100vw;\n  display: block;\n  position: absolute;\n  opacity: 0.17;\n}\n.hero-section[_ngcontent-%COMP%]   .nav-row[_ngcontent-%COMP%] {\n  height: 30vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtFQUNBLHNDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBRVI7QUFBSTtFQUNJLFlBQUE7QUFFUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlcm8tc2VjdGlvbiB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogIzAwNGI5YztcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vLi4vLi4vLi4vYXNzZXRzL2ltZy9oZXJvLTEtYmcuanBnJyk7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG9wYWNpdHk6IC4xNztcclxuICAgIH1cclxuICAgIC5uYXYtcm93IHtcclxuICAgICAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'myprofile';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.module */ "7vJP");



class ComponentsModule {
}
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[_home_home_module__WEBPACK_IMPORTED_MODULE_1__["HomeModule"]], _home_home_module__WEBPACK_IMPORTED_MODULE_1__["HomeModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { imports: [_home_home_module__WEBPACK_IMPORTED_MODULE_1__["HomeModule"]], exports: [_home_home_module__WEBPACK_IMPORTED_MODULE_1__["HomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_home_home_module__WEBPACK_IMPORTED_MODULE_1__["HomeModule"]],
                exports: [_home_home_module__WEBPACK_IMPORTED_MODULE_1__["HomeModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");





const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map