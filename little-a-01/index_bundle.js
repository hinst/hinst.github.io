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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/guiApp/reactMain.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/guiApp/app.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/guiApp/app.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\r\n    background-color: #002b36;\r\n    color: #eee8d5;\r\n    max-width: 640px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./third/w3.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./third/w3.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* W3.CSS 4.13 June 2019 by Jan Egil and Borge Refsnes */\r\nhtml{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}\r\n/* Extract from normalize.css by Nicolas Gallagher and Jonathan Neal git.io/normalize */\r\nhtml{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}\r\narticle,aside,details,figcaption,figure,footer,header,main,menu,nav,section{display:block}summary{display:list-item}\r\naudio,canvas,progress,video{display:inline-block}progress{vertical-align:baseline}\r\naudio:not([controls]){display:none;height:0}[hidden],template{display:none}\r\na{background-color:transparent}a:active,a:hover{outline-width:0}\r\nabbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}\r\nb,strong{font-weight:bolder}dfn{font-style:italic}mark{background:#ff0;color:#000}\r\nsmall{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\r\nsub{bottom:-0.25em}sup{top:-0.5em}figure{margin:1em 40px}img{border-style:none}\r\ncode,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}hr{box-sizing:content-box;height:0;overflow:visible}\r\nbutton,input,select,textarea,optgroup{font:inherit;margin:0}optgroup{font-weight:bold}\r\nbutton,input{overflow:visible}button,select{text-transform:none}\r\nbutton,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}\r\nbutton::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}\r\nbutton:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}\r\nfieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}\r\nlegend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}\r\n[type=checkbox],[type=radio]{padding:0}\r\n[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}\r\n[type=search]{-webkit-appearance:textfield;outline-offset:-2px}\r\n[type=search]::-webkit-search-decoration{-webkit-appearance:none}\r\n::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\r\n/* End extract */\r\nhtml,body{font-family:Verdana,sans-serif;font-size:15px;line-height:1.5}html{overflow-x:hidden}\r\nh1{font-size:36px}h2{font-size:30px}h3{font-size:24px}h4{font-size:20px}h5{font-size:18px}h6{font-size:16px}.w3-serif{font-family:serif}\r\nh1,h2,h3,h4,h5,h6{font-family:\"Segoe UI\",Arial,sans-serif;font-weight:400;margin:10px 0}.w3-wide{letter-spacing:4px}\r\nhr{border:0;border-top:1px solid #eee;margin:20px 0}\r\n.w3-image{max-width:100%;height:auto}img{vertical-align:middle}a{color:inherit}\r\n.w3-table,.w3-table-all{border-collapse:collapse;border-spacing:0;width:100%;display:table}.w3-table-all{border:1px solid #ccc}\r\n.w3-bordered tr,.w3-table-all tr{border-bottom:1px solid #ddd}.w3-striped tbody tr:nth-child(even){background-color:#f1f1f1}\r\n.w3-table-all tr:nth-child(odd){background-color:#fff}.w3-table-all tr:nth-child(even){background-color:#f1f1f1}\r\n.w3-hoverable tbody tr:hover,.w3-ul.w3-hoverable li:hover{background-color:#ccc}.w3-centered tr th,.w3-centered tr td{text-align:center}\r\n.w3-table td,.w3-table th,.w3-table-all td,.w3-table-all th{padding:8px 8px;display:table-cell;text-align:left;vertical-align:top}\r\n.w3-table th:first-child,.w3-table td:first-child,.w3-table-all th:first-child,.w3-table-all td:first-child{padding-left:16px}\r\n.w3-btn,.w3-button{border:none;display:inline-block;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}\r\n.w3-btn:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}\r\n.w3-btn,.w3-button{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}   \r\n.w3-disabled,.w3-btn:disabled,.w3-button:disabled{cursor:not-allowed;opacity:0.3}.w3-disabled *,:disabled *{pointer-events:none}\r\n.w3-btn.w3-disabled:hover,.w3-btn:disabled:hover{box-shadow:none}\r\n.w3-badge,.w3-tag{background-color:#000;color:#fff;display:inline-block;padding-left:8px;padding-right:8px;text-align:center}.w3-badge{border-radius:50%}\r\n.w3-ul{list-style-type:none;padding:0;margin:0}.w3-ul li{padding:8px 16px;border-bottom:1px solid #ddd}.w3-ul li:last-child{border-bottom:none}\r\n.w3-tooltip,.w3-display-container{position:relative}.w3-tooltip .w3-text{display:none}.w3-tooltip:hover .w3-text{display:inline-block}\r\n.w3-ripple:active{opacity:0.5}.w3-ripple{transition:opacity 0s}\r\n.w3-input{padding:8px;display:block;border:none;border-bottom:1px solid #ccc;width:100%}\r\n.w3-select{padding:9px 0;width:100%;border:none;border-bottom:1px solid #ccc}\r\n.w3-dropdown-click,.w3-dropdown-hover{position:relative;display:inline-block;cursor:pointer}\r\n.w3-dropdown-hover:hover .w3-dropdown-content{display:block}\r\n.w3-dropdown-hover:first-child,.w3-dropdown-click:hover{background-color:#ccc;color:#000}\r\n.w3-dropdown-hover:hover > .w3-button:first-child,.w3-dropdown-click:hover > .w3-button:first-child{background-color:#ccc;color:#000}\r\n.w3-dropdown-content{cursor:auto;color:#000;background-color:#fff;display:none;position:absolute;min-width:160px;margin:0;padding:0;z-index:1}\r\n.w3-check,.w3-radio{width:24px;height:24px;position:relative;top:6px}\r\n.w3-sidebar{height:100%;width:200px;background-color:#fff;position:fixed!important;z-index:1;overflow:auto}\r\n.w3-bar-block .w3-dropdown-hover,.w3-bar-block .w3-dropdown-click{width:100%}\r\n.w3-bar-block .w3-dropdown-hover .w3-dropdown-content,.w3-bar-block .w3-dropdown-click .w3-dropdown-content{min-width:100%}\r\n.w3-bar-block .w3-dropdown-hover .w3-button,.w3-bar-block .w3-dropdown-click .w3-button{width:100%;text-align:left;padding:8px 16px}\r\n.w3-main,#main{transition:margin-left .4s}\r\n.w3-modal{z-index:3;display:none;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}\r\n.w3-modal-content{margin:auto;background-color:#fff;position:relative;padding:0;outline:0;width:600px}\r\n.w3-bar{width:100%;overflow:hidden}.w3-center .w3-bar{display:inline-block;width:auto}\r\n.w3-bar .w3-bar-item{padding:8px 16px;float:left;width:auto;border:none;display:block;outline:0}\r\n.w3-bar .w3-dropdown-hover,.w3-bar .w3-dropdown-click{position:static;float:left}\r\n.w3-bar .w3-button{white-space:normal}\r\n.w3-bar-block .w3-bar-item{width:100%;display:block;padding:8px 16px;text-align:left;border:none;white-space:normal;float:none;outline:0}\r\n.w3-bar-block.w3-center .w3-bar-item{text-align:center}.w3-block{display:block;width:100%}\r\n.w3-responsive{display:block;overflow-x:auto}\r\n.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,\r\n.w3-cell-row:before,.w3-cell-row:after,.w3-clear:after,.w3-clear:before,.w3-bar:before,.w3-bar:after{content:\"\";display:table;clear:both}\r\n.w3-col,.w3-half,.w3-third,.w3-twothird,.w3-threequarter,.w3-quarter{float:left;width:100%}\r\n.w3-col.s1{width:8.33333%}.w3-col.s2{width:16.66666%}.w3-col.s3{width:24.99999%}.w3-col.s4{width:33.33333%}\r\n.w3-col.s5{width:41.66666%}.w3-col.s6{width:49.99999%}.w3-col.s7{width:58.33333%}.w3-col.s8{width:66.66666%}\r\n.w3-col.s9{width:74.99999%}.w3-col.s10{width:83.33333%}.w3-col.s11{width:91.66666%}.w3-col.s12{width:99.99999%}\r\n@media (min-width:601px){.w3-col.m1{width:8.33333%}.w3-col.m2{width:16.66666%}.w3-col.m3,.w3-quarter{width:24.99999%}.w3-col.m4,.w3-third{width:33.33333%}\r\n.w3-col.m5{width:41.66666%}.w3-col.m6,.w3-half{width:49.99999%}.w3-col.m7{width:58.33333%}.w3-col.m8,.w3-twothird{width:66.66666%}\r\n.w3-col.m9,.w3-threequarter{width:74.99999%}.w3-col.m10{width:83.33333%}.w3-col.m11{width:91.66666%}.w3-col.m12{width:99.99999%}}\r\n@media (min-width:993px){.w3-col.l1{width:8.33333%}.w3-col.l2{width:16.66666%}.w3-col.l3{width:24.99999%}.w3-col.l4{width:33.33333%}\r\n.w3-col.l5{width:41.66666%}.w3-col.l6{width:49.99999%}.w3-col.l7{width:58.33333%}.w3-col.l8{width:66.66666%}\r\n.w3-col.l9{width:74.99999%}.w3-col.l10{width:83.33333%}.w3-col.l11{width:91.66666%}.w3-col.l12{width:99.99999%}}\r\n.w3-rest{overflow:hidden}.w3-stretch{margin-left:-16px;margin-right:-16px}\r\n.w3-content,.w3-auto{margin-left:auto;margin-right:auto}.w3-content{max-width:980px}.w3-auto{max-width:1140px}\r\n.w3-cell-row{display:table;width:100%}.w3-cell{display:table-cell}\r\n.w3-cell-top{vertical-align:top}.w3-cell-middle{vertical-align:middle}.w3-cell-bottom{vertical-align:bottom}\r\n.w3-hide{display:none!important}.w3-show-block,.w3-show{display:block!important}.w3-show-inline-block{display:inline-block!important}\r\n@media (max-width:1205px){.w3-auto{max-width:95%}}\r\n@media (max-width:600px){.w3-modal-content{margin:0 10px;width:auto!important}.w3-modal{padding-top:30px}\r\n.w3-dropdown-hover.w3-mobile .w3-dropdown-content,.w3-dropdown-click.w3-mobile .w3-dropdown-content{position:relative}\t\r\n.w3-hide-small{display:none!important}.w3-mobile{display:block;width:100%!important}.w3-bar-item.w3-mobile,.w3-dropdown-hover.w3-mobile,.w3-dropdown-click.w3-mobile{text-align:center}\r\n.w3-dropdown-hover.w3-mobile,.w3-dropdown-hover.w3-mobile .w3-btn,.w3-dropdown-hover.w3-mobile .w3-button,.w3-dropdown-click.w3-mobile,.w3-dropdown-click.w3-mobile .w3-btn,.w3-dropdown-click.w3-mobile .w3-button{width:100%}}\r\n@media (max-width:768px){.w3-modal-content{width:500px}.w3-modal{padding-top:50px}}\r\n@media (min-width:993px){.w3-modal-content{width:900px}.w3-hide-large{display:none!important}.w3-sidebar.w3-collapse{display:block!important}}\r\n@media (max-width:992px) and (min-width:601px){.w3-hide-medium{display:none!important}}\r\n@media (max-width:992px){.w3-sidebar.w3-collapse{display:none}.w3-main{margin-left:0!important;margin-right:0!important}.w3-auto{max-width:100%}}\r\n.w3-top,.w3-bottom{position:fixed;width:100%;z-index:1}.w3-top{top:0}.w3-bottom{bottom:0}\r\n.w3-overlay{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);z-index:2}\r\n.w3-display-topleft{position:absolute;left:0;top:0}.w3-display-topright{position:absolute;right:0;top:0}\r\n.w3-display-bottomleft{position:absolute;left:0;bottom:0}.w3-display-bottomright{position:absolute;right:0;bottom:0}\r\n.w3-display-middle{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}\r\n.w3-display-left{position:absolute;top:50%;left:0%;transform:translate(0%,-50%);-ms-transform:translate(-0%,-50%)}\r\n.w3-display-right{position:absolute;top:50%;right:0%;transform:translate(0%,-50%);-ms-transform:translate(0%,-50%)}\r\n.w3-display-topmiddle{position:absolute;left:50%;top:0;transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\r\n.w3-display-bottommiddle{position:absolute;left:50%;bottom:0;transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\r\n.w3-display-container:hover .w3-display-hover{display:block}.w3-display-container:hover span.w3-display-hover{display:inline-block}.w3-display-hover{display:none}\r\n.w3-display-position{position:absolute}\r\n.w3-circle{border-radius:50%}\r\n.w3-round-small{border-radius:2px}.w3-round,.w3-round-medium{border-radius:4px}.w3-round-large{border-radius:8px}.w3-round-xlarge{border-radius:16px}.w3-round-xxlarge{border-radius:32px}\r\n.w3-row-padding,.w3-row-padding>.w3-half,.w3-row-padding>.w3-third,.w3-row-padding>.w3-twothird,.w3-row-padding>.w3-threequarter,.w3-row-padding>.w3-quarter,.w3-row-padding>.w3-col{padding:0 8px}\r\n.w3-container,.w3-panel{padding:0.01em 16px}.w3-panel{margin-top:16px;margin-bottom:16px}\r\n.w3-code,.w3-codespan{font-family:Consolas,\"courier new\";font-size:16px}\r\n.w3-code{width:auto;background-color:#fff;padding:8px 12px;border-left:4px solid #4CAF50;word-wrap:break-word}\r\n.w3-codespan{color:crimson;background-color:#f1f1f1;padding-left:4px;padding-right:4px;font-size:110%}\r\n.w3-card,.w3-card-2{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}\r\n.w3-card-4,.w3-hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)}\r\n.w3-spin{animation:w3-spin 2s infinite linear}@keyframes w3-spin{0%{transform:rotate(0deg)}100%{transform:rotate(359deg)}}\r\n.w3-animate-fading{animation:fading 10s infinite}@keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}\r\n.w3-animate-opacity{animation:opac 0.8s}@keyframes opac{from{opacity:0} to{opacity:1}}\r\n.w3-animate-top{position:relative;animation:animatetop 0.4s}@keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}\r\n.w3-animate-left{position:relative;animation:animateleft 0.4s}@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}\r\n.w3-animate-right{position:relative;animation:animateright 0.4s}@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}\r\n.w3-animate-bottom{position:relative;animation:animatebottom 0.4s}@keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}\r\n.w3-animate-zoom {animation:animatezoom 0.6s}@keyframes animatezoom{from{transform:scale(0)} to{transform:scale(1)}}\r\n.w3-animate-input{transition:width 0.4s ease-in-out}.w3-animate-input:focus{width:100%!important}\r\n.w3-opacity,.w3-hover-opacity:hover{opacity:0.60}.w3-opacity-off,.w3-hover-opacity-off:hover{opacity:1}\r\n.w3-opacity-max{opacity:0.25}.w3-opacity-min{opacity:0.75}\r\n.w3-greyscale-max,.w3-grayscale-max,.w3-hover-greyscale:hover,.w3-hover-grayscale:hover{filter:grayscale(100%)}\r\n.w3-greyscale,.w3-grayscale{filter:grayscale(75%)}.w3-greyscale-min,.w3-grayscale-min{filter:grayscale(50%)}\r\n.w3-sepia{filter:sepia(75%)}.w3-sepia-max,.w3-hover-sepia:hover{filter:sepia(100%)}.w3-sepia-min{filter:sepia(50%)}\r\n.w3-tiny{font-size:10px!important}.w3-small{font-size:12px!important}.w3-medium{font-size:15px!important}.w3-large{font-size:18px!important}\r\n.w3-xlarge{font-size:24px!important}.w3-xxlarge{font-size:36px!important}.w3-xxxlarge{font-size:48px!important}.w3-jumbo{font-size:64px!important}\r\n.w3-left-align{text-align:left!important}.w3-right-align{text-align:right!important}.w3-justify{text-align:justify!important}.w3-center{text-align:center!important}\r\n.w3-border-0{border:0!important}.w3-border{border:1px solid #ccc!important}\r\n.w3-border-top{border-top:1px solid #ccc!important}.w3-border-bottom{border-bottom:1px solid #ccc!important}\r\n.w3-border-left{border-left:1px solid #ccc!important}.w3-border-right{border-right:1px solid #ccc!important}\r\n.w3-topbar{border-top:6px solid #ccc!important}.w3-bottombar{border-bottom:6px solid #ccc!important}\r\n.w3-leftbar{border-left:6px solid #ccc!important}.w3-rightbar{border-right:6px solid #ccc!important}\r\n.w3-section,.w3-code{margin-top:16px!important;margin-bottom:16px!important}\r\n.w3-margin{margin:16px!important}.w3-margin-top{margin-top:16px!important}.w3-margin-bottom{margin-bottom:16px!important}\r\n.w3-margin-left{margin-left:16px!important}.w3-margin-right{margin-right:16px!important}\r\n.w3-padding-small{padding:4px 8px!important}.w3-padding{padding:8px 16px!important}.w3-padding-large{padding:12px 24px!important}\r\n.w3-padding-16{padding-top:16px!important;padding-bottom:16px!important}.w3-padding-24{padding-top:24px!important;padding-bottom:24px!important}\r\n.w3-padding-32{padding-top:32px!important;padding-bottom:32px!important}.w3-padding-48{padding-top:48px!important;padding-bottom:48px!important}\r\n.w3-padding-64{padding-top:64px!important;padding-bottom:64px!important}\r\n.w3-left{float:left!important}.w3-right{float:right!important}\r\n.w3-button:hover{color:#000!important;background-color:#ccc!important}\r\n.w3-transparent,.w3-hover-none:hover{background-color:transparent!important}\r\n.w3-hover-none:hover{box-shadow:none!important}\r\n/* Colors */\r\n.w3-amber,.w3-hover-amber:hover{color:#000!important;background-color:#ffc107!important}\r\n.w3-aqua,.w3-hover-aqua:hover{color:#000!important;background-color:#00ffff!important}\r\n.w3-blue,.w3-hover-blue:hover{color:#fff!important;background-color:#2196F3!important}\r\n.w3-light-blue,.w3-hover-light-blue:hover{color:#000!important;background-color:#87CEEB!important}\r\n.w3-brown,.w3-hover-brown:hover{color:#fff!important;background-color:#795548!important}\r\n.w3-cyan,.w3-hover-cyan:hover{color:#000!important;background-color:#00bcd4!important}\r\n.w3-blue-grey,.w3-hover-blue-grey:hover,.w3-blue-gray,.w3-hover-blue-gray:hover{color:#fff!important;background-color:#607d8b!important}\r\n.w3-green,.w3-hover-green:hover{color:#fff!important;background-color:#4CAF50!important}\r\n.w3-light-green,.w3-hover-light-green:hover{color:#000!important;background-color:#8bc34a!important}\r\n.w3-indigo,.w3-hover-indigo:hover{color:#fff!important;background-color:#3f51b5!important}\r\n.w3-khaki,.w3-hover-khaki:hover{color:#000!important;background-color:#f0e68c!important}\r\n.w3-lime,.w3-hover-lime:hover{color:#000!important;background-color:#cddc39!important}\r\n.w3-orange,.w3-hover-orange:hover{color:#000!important;background-color:#ff9800!important}\r\n.w3-deep-orange,.w3-hover-deep-orange:hover{color:#fff!important;background-color:#ff5722!important}\r\n.w3-pink,.w3-hover-pink:hover{color:#fff!important;background-color:#e91e63!important}\r\n.w3-purple,.w3-hover-purple:hover{color:#fff!important;background-color:#9c27b0!important}\r\n.w3-deep-purple,.w3-hover-deep-purple:hover{color:#fff!important;background-color:#673ab7!important}\r\n.w3-red,.w3-hover-red:hover{color:#fff!important;background-color:#f44336!important}\r\n.w3-sand,.w3-hover-sand:hover{color:#000!important;background-color:#fdf5e6!important}\r\n.w3-teal,.w3-hover-teal:hover{color:#fff!important;background-color:#009688!important}\r\n.w3-yellow,.w3-hover-yellow:hover{color:#000!important;background-color:#ffeb3b!important}\r\n.w3-white,.w3-hover-white:hover{color:#000!important;background-color:#fff!important}\r\n.w3-black,.w3-hover-black:hover{color:#fff!important;background-color:#000!important}\r\n.w3-grey,.w3-hover-grey:hover,.w3-gray,.w3-hover-gray:hover{color:#000!important;background-color:#9e9e9e!important}\r\n.w3-light-grey,.w3-hover-light-grey:hover,.w3-light-gray,.w3-hover-light-gray:hover{color:#000!important;background-color:#f1f1f1!important}\r\n.w3-dark-grey,.w3-hover-dark-grey:hover,.w3-dark-gray,.w3-hover-dark-gray:hover{color:#fff!important;background-color:#616161!important}\r\n.w3-pale-red,.w3-hover-pale-red:hover{color:#000!important;background-color:#ffdddd!important}\r\n.w3-pale-green,.w3-hover-pale-green:hover{color:#000!important;background-color:#ddffdd!important}\r\n.w3-pale-yellow,.w3-hover-pale-yellow:hover{color:#000!important;background-color:#ffffcc!important}\r\n.w3-pale-blue,.w3-hover-pale-blue:hover{color:#000!important;background-color:#ddffff!important}\r\n.w3-text-amber,.w3-hover-text-amber:hover{color:#ffc107!important}\r\n.w3-text-aqua,.w3-hover-text-aqua:hover{color:#00ffff!important}\r\n.w3-text-blue,.w3-hover-text-blue:hover{color:#2196F3!important}\r\n.w3-text-light-blue,.w3-hover-text-light-blue:hover{color:#87CEEB!important}\r\n.w3-text-brown,.w3-hover-text-brown:hover{color:#795548!important}\r\n.w3-text-cyan,.w3-hover-text-cyan:hover{color:#00bcd4!important}\r\n.w3-text-blue-grey,.w3-hover-text-blue-grey:hover,.w3-text-blue-gray,.w3-hover-text-blue-gray:hover{color:#607d8b!important}\r\n.w3-text-green,.w3-hover-text-green:hover{color:#4CAF50!important}\r\n.w3-text-light-green,.w3-hover-text-light-green:hover{color:#8bc34a!important}\r\n.w3-text-indigo,.w3-hover-text-indigo:hover{color:#3f51b5!important}\r\n.w3-text-khaki,.w3-hover-text-khaki:hover{color:#b4aa50!important}\r\n.w3-text-lime,.w3-hover-text-lime:hover{color:#cddc39!important}\r\n.w3-text-orange,.w3-hover-text-orange:hover{color:#ff9800!important}\r\n.w3-text-deep-orange,.w3-hover-text-deep-orange:hover{color:#ff5722!important}\r\n.w3-text-pink,.w3-hover-text-pink:hover{color:#e91e63!important}\r\n.w3-text-purple,.w3-hover-text-purple:hover{color:#9c27b0!important}\r\n.w3-text-deep-purple,.w3-hover-text-deep-purple:hover{color:#673ab7!important}\r\n.w3-text-red,.w3-hover-text-red:hover{color:#f44336!important}\r\n.w3-text-sand,.w3-hover-text-sand:hover{color:#fdf5e6!important}\r\n.w3-text-teal,.w3-hover-text-teal:hover{color:#009688!important}\r\n.w3-text-yellow,.w3-hover-text-yellow:hover{color:#d2be0e!important}\r\n.w3-text-white,.w3-hover-text-white:hover{color:#fff!important}\r\n.w3-text-black,.w3-hover-text-black:hover{color:#000!important}\r\n.w3-text-grey,.w3-hover-text-grey:hover,.w3-text-gray,.w3-hover-text-gray:hover{color:#757575!important}\r\n.w3-text-light-grey,.w3-hover-text-light-grey:hover,.w3-text-light-gray,.w3-hover-text-light-gray:hover{color:#f1f1f1!important}\r\n.w3-text-dark-grey,.w3-hover-text-dark-grey:hover,.w3-text-dark-gray,.w3-hover-text-dark-gray:hover{color:#3a3a3a!important}\r\n.w3-border-amber,.w3-hover-border-amber:hover{border-color:#ffc107!important}\r\n.w3-border-aqua,.w3-hover-border-aqua:hover{border-color:#00ffff!important}\r\n.w3-border-blue,.w3-hover-border-blue:hover{border-color:#2196F3!important}\r\n.w3-border-light-blue,.w3-hover-border-light-blue:hover{border-color:#87CEEB!important}\r\n.w3-border-brown,.w3-hover-border-brown:hover{border-color:#795548!important}\r\n.w3-border-cyan,.w3-hover-border-cyan:hover{border-color:#00bcd4!important}\r\n.w3-border-blue-grey,.w3-hover-border-blue-grey:hover,.w3-border-blue-gray,.w3-hover-border-blue-gray:hover{border-color:#607d8b!important}\r\n.w3-border-green,.w3-hover-border-green:hover{border-color:#4CAF50!important}\r\n.w3-border-light-green,.w3-hover-border-light-green:hover{border-color:#8bc34a!important}\r\n.w3-border-indigo,.w3-hover-border-indigo:hover{border-color:#3f51b5!important}\r\n.w3-border-khaki,.w3-hover-border-khaki:hover{border-color:#f0e68c!important}\r\n.w3-border-lime,.w3-hover-border-lime:hover{border-color:#cddc39!important}\r\n.w3-border-orange,.w3-hover-border-orange:hover{border-color:#ff9800!important}\r\n.w3-border-deep-orange,.w3-hover-border-deep-orange:hover{border-color:#ff5722!important}\r\n.w3-border-pink,.w3-hover-border-pink:hover{border-color:#e91e63!important}\r\n.w3-border-purple,.w3-hover-border-purple:hover{border-color:#9c27b0!important}\r\n.w3-border-deep-purple,.w3-hover-border-deep-purple:hover{border-color:#673ab7!important}\r\n.w3-border-red,.w3-hover-border-red:hover{border-color:#f44336!important}\r\n.w3-border-sand,.w3-hover-border-sand:hover{border-color:#fdf5e6!important}\r\n.w3-border-teal,.w3-hover-border-teal:hover{border-color:#009688!important}\r\n.w3-border-yellow,.w3-hover-border-yellow:hover{border-color:#ffeb3b!important}\r\n.w3-border-white,.w3-hover-border-white:hover{border-color:#fff!important}\r\n.w3-border-black,.w3-hover-border-black:hover{border-color:#000!important}\r\n.w3-border-grey,.w3-hover-border-grey:hover,.w3-border-gray,.w3-hover-border-gray:hover{border-color:#9e9e9e!important}\r\n.w3-border-light-grey,.w3-hover-border-light-grey:hover,.w3-border-light-gray,.w3-hover-border-light-gray:hover{border-color:#f1f1f1!important}\r\n.w3-border-dark-grey,.w3-hover-border-dark-grey:hover,.w3-border-dark-gray,.w3-hover-border-dark-gray:hover{border-color:#616161!important}\r\n.w3-border-pale-red,.w3-hover-border-pale-red:hover{border-color:#ffe7e7!important}.w3-border-pale-green,.w3-hover-border-pale-green:hover{border-color:#e7ffe7!important}\r\n.w3-border-pale-yellow,.w3-hover-border-pale-yellow:hover{border-color:#ffffcc!important}.w3-border-pale-blue,.w3-hover-border-pale-blue:hover{border-color:#e7ffff!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/*! exports provided: render, hydrate, createElement, h, Fragment, createRef, isValidElement, Component, cloneElement, createContext, toChildArray, _unmount, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toChildArray", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_unmount", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return n; });
var n,l,u,i,t,o,f,r={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n)}function h(n,l,u){var i,t=arguments,o={};for(i in l)"key"!==i&&"ref"!==i&&(o[i]=l[i]);if(arguments.length>3)for(u=[u],i=3;i<arguments.length;i++)u.push(t[i]);if(null!=u&&(o.children=u),"function"==typeof n&&null!=n.defaultProps)for(i in n.defaultProps)void 0===o[i]&&(o[i]=n.defaultProps[i]);return v(n,o,l&&l.key,l&&l.ref)}function v(l,u,i,t){var o={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return n.vnode&&n.vnode(o),o}function p(){return{}}function y(n){return n.children}function d(n,l){this.props=n,this.context=l}function m(n,l){if(null==l)return n.__?m(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?m(n):null}function w(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return w(n)}}function g(l){(!l.__d&&(l.__d=!0)&&1===u.push(l)||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(k)}function k(){var n,l,i,t,o,f,r;for(u.sort(function(n,l){return l.__v.__b-n.__v.__b});n=u.pop();)n.__d&&(i=void 0,t=void 0,f=(o=(l=n).__v).__e,(r=l.__P)&&(i=[],t=T(r,o,s({},o),l.__n,void 0!==r.ownerSVGElement,null,i,null==f?m(o):f),$(i,o),t!=f&&w(o)))}function _(n,l,u,i,t,o,f,c,s){var h,v,p,y,d,w,g,k=u&&u.__k||e,_=k.length;if(c==r&&(c=null!=o?o[0]:_?m(u,0):null),h=0,l.__k=b(l.__k,function(u){if(null!=u){if(u.__=l,u.__b=l.__b+1,null===(p=k[h])||p&&u.key==p.key&&u.type===p.type)k[h]=void 0;else for(v=0;v<_;v++){if((p=k[v])&&u.key==p.key&&u.type===p.type){k[v]=void 0;break}p=null}if(y=T(n,u,p=p||r,i,t,o,f,c,s),(v=u.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,u),g.push(v,u.__c||y,u)),null!=y){if(null==w&&(w=y),null!=u.__d)y=u.__d,u.__d=null;else if(o==p||y!=c||null==y.parentNode){n:if(null==c||c.parentNode!==n)n.appendChild(y);else{for(d=c,v=0;(d=d.nextSibling)&&v<_;v+=2)if(d==y)break n;n.insertBefore(y,c)}"option"==l.type&&(n.value="")}c=y.nextSibling,"function"==typeof l.type&&(l.__d=y)}}return h++,u}),l.__e=w,null!=o&&"function"!=typeof l.type)for(h=o.length;h--;)null!=o[h]&&a(o[h]);for(h=_;h--;)null!=k[h]&&A(k[h],k[h]);if(g)for(h=0;h<g.length;h++)z(g[h],g[++h],g[++h])}function b(n,l,u){if(null==u&&(u=[]),null==n||"boolean"==typeof n)l&&u.push(l(null));else if(Array.isArray(n))for(var i=0;i<n.length;i++)b(n[i],l,u);else u.push(l?l("string"==typeof n||"number"==typeof n?v(null,n,null,null):null!=n.__e||null!=n.__c?v(n.type,n.props,n.key,null):n):n);return u}function x(n,l,u,i,t){var o;for(o in u)o in l||P(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"value"===o||"checked"===o||u[o]===l[o]||P(n,o,l[o],u[o],i)}function C(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===c.test(l)?u+"px":null==u?"":u}function P(n,l,u,i,t){var o,f,r,e,c;if(t?"className"===l&&(l="class"):"class"===l&&(l="className"),"key"===l||"children"===l);else if("style"===l)if(o=n.style,"string"==typeof u)o.cssText=u;else{if("string"==typeof i&&(o.cssText="",i=null),i)for(f in i)u&&f in u||C(o,f,"");if(u)for(r in u)i&&u[r]===i[r]||C(o,r,u[r])}else"o"===l[0]&&"n"===l[1]?(e=l!==(l=l.replace(/Capture$/,"")),c=l.toLowerCase(),l=(c in n?c:l).slice(2),u?(i||n.addEventListener(l,N,e),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,N,e)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u?n.removeAttribute(l):n.setAttribute(l,u))}function N(l){this.l[l.type](n.event?n.event(l):l)}function T(l,u,i,t,o,f,r,e,c){var a,h,v,p,m,w,g,k,x,C,P=u.type;if(void 0!==u.constructor)return null;(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(k=u.props,x=(a=P.contextType)&&t[a.__c],C=a?x?x.props.value:a.__:t,i.__c?g=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(k,C):(u.__c=h=new d(k,C),h.constructor=P,h.render=D),x&&x.sub(h),h.props=k,h.state||(h.state={}),h.context=C,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=s({},h.__s)),s(h.__s,P.getDerivedStateFromProps(k,h.__s))),p=h.props,m=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&k!==p&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(k,C),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(k,h.__s,C)){for(h.props=k,h.state=h.__s,h.__d=!1,h.__v=u,u.__e=i.__e,u.__k=i.__k,h.__h.length&&r.push(h),a=0;a<u.__k.length;a++)u.__k[a]&&(u.__k[a].__=u);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(k,h.__s,C),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(p,m,w)})}h.context=C,h.props=k,h.state=h.__s,(a=n.__r)&&a(u),h.__d=!1,h.__v=u,h.__P=l,a=h.render(h.props,h.state,h.context),u.__k=b(null!=a&&a.type==y&&null==a.key?a.props.children:a),null!=h.getChildContext&&(t=s(s({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(w=h.getSnapshotBeforeUpdate(p,m)),_(l,u,i,t,o,f,r,e,c),h.base=u.__e,h.__h.length&&r.push(h),g&&(h.__E=h.__=null),h.__e=null}else u.__e=j(i.__e,u,i,t,o,f,r,c);(a=n.diffed)&&a(u)}catch(l){n.__e(l,u,i)}return u.__e}function $(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function j(n,l,u,i,t,o,f,c){var s,a,h,v,p,y=u.props,d=l.props;if(t="svg"===l.type||t,null==n&&null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&(null===l.type?3===a.nodeType:a.localName===l.type)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type),o=null}if(null===l.type)null!=o&&(o[o.indexOf(n)]=null),y!==d&&(n.data=d);else if(l!==u){if(null!=o&&(o=e.slice.call(n.childNodes)),h=(y=u.props||r).dangerouslySetInnerHTML,v=d.dangerouslySetInnerHTML,!c){if(y===r)for(y={},p=0;p<n.attributes.length;p++)y[n.attributes[p].name]=n.attributes[p].value;(v||h)&&(v&&h&&v.__html==h.__html||(n.innerHTML=v&&v.__html||""))}x(n,d,y,t,c),l.__k=l.props.children,v||_(n,l,u,i,"foreignObject"!==l.type&&t,o,f,r,c),c||("value"in d&&void 0!==d.value&&d.value!==n.value&&(n.value=null==d.value?"":d.value),"checked"in d&&void 0!==d.checked&&d.checked!==n.checked&&(n.checked=d.checked))}return n}function z(l,u,i){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,i)}}function A(l,u,i){var t,o,f;if(n.unmount&&n.unmount(l),(t=l.ref)&&z(t,null,u),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=null,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(l){n.__e(l,u)}t.base=t.__P=null}if(t=l.__k)for(f=0;f<t.length;f++)t[f]&&A(t[f],u,i);null!=o&&a(o)}function D(n,l,u){return this.constructor(n,u)}function E(l,u,i){var t,f,c;n.__&&n.__(l,u),f=(t=i===o)?null:i&&i.__k||u.__k,l=h(y,null,[l]),c=[],T(u,(t?u:i||u).__k=l,f||r,r,void 0!==u.ownerSVGElement,i&&!t?[i]:f?null:e.slice.call(u.childNodes),c,i||r,t),$(c,l)}function H(n,l){E(n,l,o)}function I(n,l){return l=s(s({},n.props),l),arguments.length>2&&(l.children=e.slice.call(arguments,2)),v(n.type,l,l.key||n.key,l.ref||n.ref)}function L(n){var l={},u={__c:"__cC"+f++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var i,t=this;return this.getChildContext||(i=[],this.getChildContext=function(){return l[u.__c]=t,l},this.shouldComponentUpdate=function(l){n.value!==l.value&&i.some(function(n){n.context=l.value,g(n)})},this.sub=function(n){i.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){i.splice(i.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Consumer.contextType=u,u}n={__e:function(n,l){for(var u;l=l.__;)if((u=l.__c)&&!u.__)try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError)u.setState(u.constructor.getDerivedStateFromError(n));else{if(null==u.componentDidCatch)continue;u.componentDidCatch(n)}return g(u.__E=u)}catch(l){n=l}throw n}},l=function(n){return null!=n&&void 0===n.constructor},d.prototype.setState=function(n,l){var u;u=this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(u,this.props)),n&&s(u,n),null!=n&&this.__v&&(this.__e=!1,l&&this.__h.push(l),g(this))},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),g(this))},d.prototype.render=y,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=r,f=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = {};

function modulesToDom(moduleId, list, options) {
  for (var i = 0; i < list.length; i++) {
    var part = {
      css: list[i][1],
      media: list[i][2],
      sourceMap: list[i][3]
    };

    if (stylesInDom[moduleId][i]) {
      stylesInDom[moduleId][i](part);
    } else {
      stylesInDom[moduleId].push(addStyle(part, options));
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (moduleId, list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  moduleId = options.base ? moduleId + options.base : moduleId;
  list = list || [];

  if (!stylesInDom[moduleId]) {
    stylesInDom[moduleId] = [];
  }

  modulesToDom(moduleId, list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    if (!stylesInDom[moduleId]) {
      stylesInDom[moduleId] = [];
    }

    modulesToDom(moduleId, newList, options);

    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {
      stylesInDom[moduleId][j]();
    }

    stylesInDom[moduleId].length = newList.length;

    if (stylesInDom[moduleId].length === 0) {
      delete stylesInDom[moduleId];
    }
  };
};

/***/ }),

/***/ "./src/commandReceiver.ts":
/*!********************************!*\
  !*** ./src/commandReceiver.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GenderType_1 = __webpack_require__(/*! ./story/GenderType */ "./src/story/GenderType.ts");
var BodyType_1 = __webpack_require__(/*! ./story/BodyType */ "./src/story/BodyType.ts");
var clothes_1 = __webpack_require__(/*! ./story/clothes */ "./src/story/clothes.ts");
function receiveCommand(command, scene) {
    switch (command) {
        case 'debug switch gender':
            scene.state.character.gender = (scene.state.character.gender == GenderType_1.GenderType.male)
                ? GenderType_1.GenderType.female
                : GenderType_1.GenderType.male;
            return true;
        case 'debug body thin':
            scene.state.character.bodyType = BodyType_1.BodyType.thin;
            return true;
        case 'debug body average':
            scene.state.character.bodyType = BodyType_1.BodyType.average;
            return true;
        case 'debug body chubby':
            scene.state.character.bodyType = BodyType_1.BodyType.chubby;
            return true;
        case 'debug body fat':
            scene.state.character.bodyType = BodyType_1.BodyType.fat;
            return true;
        case 'debug strength 1':
            scene.state.character.strength = 1;
            return true;
        case 'debug strength 2':
            scene.state.character.strength = 2;
            return true;
        case 'debug strength 3':
            scene.state.character.strength = 3;
            return true;
        case 'debug magic 1':
            scene.state.character.magic = 1;
            return true;
        case 'debug magic 2':
            scene.state.character.magic = 2;
            return true;
        case 'debug magic 3':
            scene.state.character.magic = 3;
            return true;
        case 'debug wear skirt':
            scene.state.character.clothingBottom = clothes_1.ClothingBottom.skirt;
            return true;
        case 'debug wear bottom S':
            scene.state.character.clothingBottomSize = clothes_1.ClothingSize.S;
            return true;
        case 'debug wear bottom XS':
            scene.state.character.clothingBottomSize = clothes_1.ClothingSize.XS;
            return true;
        case 'debug wear top M':
            scene.state.character.clothingTopSize = clothes_1.ClothingSize.M;
            return true;
        case 'debug wear top S':
            scene.state.character.clothingTopSize = clothes_1.ClothingSize.S;
            return true;
        default:
            return false;
    }
}
exports.receiveCommand = receiveCommand;


/***/ }),

/***/ "./src/guiApp/AppPanel.tsx":
/*!*********************************!*\
  !*** ./src/guiApp/AppPanel.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var GuiRunner_1 = __webpack_require__(/*! ../story-engine/src/gui-runner/GuiRunner */ "./src/story-engine/src/gui-runner/GuiRunner.tsx");
var LittleStoryInfo_1 = __webpack_require__(/*! ../story/LittleStoryInfo */ "./src/story/LittleStoryInfo.ts");
var commandReceiver_1 = __webpack_require__(/*! ../commandReceiver */ "./src/commandReceiver.ts");
var AppPanel = /** @class */ (function (_super) {
    __extends(AppPanel, _super);
    function AppPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppPanel.prototype.render = function () {
        return preact_1.h("div", { style: "padding: 8px" },
            preact_1.h("h1", null, "Little adventure"),
            preact_1.h(GuiRunner_1.GuiRunner, { storyInfo: new LittleStoryInfo_1.LittleStoryInfo, receiveCommend: commandReceiver_1.receiveCommand }));
    };
    return AppPanel;
}(preact_1.Component));
exports.AppPanel = AppPanel;


/***/ }),

/***/ "./src/guiApp/ReactApp.tsx":
/*!*********************************!*\
  !*** ./src/guiApp/ReactApp.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var AppPanel_1 = __webpack_require__(/*! ./AppPanel */ "./src/guiApp/AppPanel.tsx");
__webpack_require__(/*! ../../third/w3.css */ "./third/w3.css");
__webpack_require__(/*! ./app.css */ "./src/guiApp/app.css");
console.log('Now running...');
document.body.innerHTML += ('<div id="main"></div>');
preact_1.render(preact_1.h(AppPanel_1.AppPanel, null), document.querySelector('#main'));


/***/ }),

/***/ "./src/guiApp/app.css":
/*!****************************!*\
  !*** ./src/guiApp/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/guiApp/app.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/guiApp/reactMain.ts":
/*!*********************************!*\
  !*** ./src/guiApp/reactMain.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./ReactApp */ "./src/guiApp/ReactApp.tsx");


/***/ }),

/***/ "./src/story-engine/src/common/SceneNotFoundError.ts":
/*!***********************************************************!*\
  !*** ./src/story-engine/src/common/SceneNotFoundError.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SceneNotFoundError = /** @class */ (function (_super) {
    __extends(SceneNotFoundError, _super);
    function SceneNotFoundError(className) {
        var _this = _super.call(this, 'Scene not found: ' + className) || this;
        _this.name = SceneNotFoundError['name'];
        return _this;
    }
    return SceneNotFoundError;
}(Error));
exports.SceneNotFoundError = SceneNotFoundError;


/***/ }),

/***/ "./src/story-engine/src/common/StoryChoice.ts":
/*!****************************************************!*\
  !*** ./src/story-engine/src/common/StoryChoice.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var StoryElement_1 = __webpack_require__(/*! ./StoryElement */ "./src/story-engine/src/common/StoryElement.ts");
var StoryChoice = /** @class */ (function (_super) {
    __extends(StoryChoice, _super);
    function StoryChoice(text, id) {
        var _this = _super.call(this) || this;
        _this.text = text;
        _this.id = id;
        return _this;
    }
    return StoryChoice;
}(StoryElement_1.StoryElement));
exports.StoryChoice = StoryChoice;


/***/ }),

/***/ "./src/story-engine/src/common/StoryElement.ts":
/*!*****************************************************!*\
  !*** ./src/story-engine/src/common/StoryElement.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StoryElement = /** @class */ (function () {
    function StoryElement() {
    }
    return StoryElement;
}());
exports.StoryElement = StoryElement;


/***/ }),

/***/ "./src/story-engine/src/common/StoryInfo.ts":
/*!**************************************************!*\
  !*** ./src/story-engine/src/common/StoryInfo.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StoryInfo = /** @class */ (function () {
    function StoryInfo() {
    }
    return StoryInfo;
}());
exports.StoryInfo = StoryInfo;


/***/ }),

/***/ "./src/story-engine/src/common/StoryInput.ts":
/*!***************************************************!*\
  !*** ./src/story-engine/src/common/StoryInput.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var StoryElement_1 = __webpack_require__(/*! ./StoryElement */ "./src/story-engine/src/common/StoryElement.ts");
var StoryInput = /** @class */ (function (_super) {
    __extends(StoryInput, _super);
    function StoryInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StoryInput;
}(StoryElement_1.StoryElement));
exports.StoryInput = StoryInput;


/***/ }),

/***/ "./src/story-engine/src/common/StoryRunner.ts":
/*!****************************************************!*\
  !*** ./src/story-engine/src/common/StoryRunner.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SceneNotFoundError_1 = __webpack_require__(/*! ./SceneNotFoundError */ "./src/story-engine/src/common/SceneNotFoundError.ts");
var StoryRunner = /** @class */ (function () {
    function StoryRunner(storyInfo) {
        this.receiveCommand = function () {
            return false;
        };
        this.storyInfo = storyInfo;
    }
    StoryRunner.prototype.getRequiredSceneCtor = function (className) {
        var func = this.storyInfo.scenes[className];
        if (func == null) {
            throw new SceneNotFoundError_1.SceneNotFoundError(className);
        }
        return func;
    };
    StoryRunner.prototype.createSceneWithState = function (ctor, state) {
        var scene = new ctor;
        scene.state = state;
        scene.state.sceneClassName = ctor['name'];
        scene.sceneMap = this.storyInfo.scenes;
        return scene;
    };
    StoryRunner.prototype.createStatusScene = function (currentScene) {
        var returningSceneName = currentScene.state.sceneClassName;
        var statusSceneCtor = this.getRequiredSceneCtor(currentScene.state.statusSceneClassName);
        var statusScene = this.createSceneWithState(statusSceneCtor, currentScene.state);
        // Avoid being locked into status scene by calling createStatusScene when currentScene is already status scene
        if (!(currentScene instanceof statusSceneCtor))
            statusScene.state.returningSceneName = returningSceneName;
        return statusScene;
    };
    StoryRunner.prototype.createStartingScene = function () {
        var state = new this.storyInfo.stateConstructor;
        var ctor = this.getRequiredSceneCtor(state.sceneClassName);
        var resultScene = this.createSceneWithState(ctor, state);
        return resultScene;
    };
    return StoryRunner;
}());
exports.StoryRunner = StoryRunner;


/***/ }),

/***/ "./src/story-engine/src/common/StorySaveFiles.ts":
/*!*******************************************************!*\
  !*** ./src/story-engine/src/common/StorySaveFiles.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StorySaveFiles = {
    auto: 'autoSave.json',
    quick: 'quickSave.json',
};


/***/ }),

/***/ "./src/story-engine/src/common/StoryScene.ts":
/*!***************************************************!*\
  !*** ./src/story-engine/src/common/StoryScene.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StoryText_1 = __webpack_require__(/*! ./StoryText */ "./src/story-engine/src/common/StoryText.ts");
var SceneNotFoundError_1 = __webpack_require__(/*! ./SceneNotFoundError */ "./src/story-engine/src/common/SceneNotFoundError.ts");
var string_1 = __webpack_require__(/*! ./string */ "./src/story-engine/src/common/string.ts");
var StoryScene = /** @class */ (function () {
    function StoryScene() {
    }
    Object.defineProperty(StoryScene.prototype, "state", {
        get: function () {
            return this.getState();
        },
        set: function (value) {
            this.setState(value);
        },
        enumerable: true,
        configurable: true
    });
    ;
    StoryScene.prototype.getState = function () {
        return this._state;
    };
    StoryScene.prototype.setState = function (value) {
        this._state = value;
    };
    StoryScene.prototype.render = function () {
        return null;
    };
    StoryScene.prototype.receiveChoice = function (choice) {
    };
    StoryScene.prototype.text = function (text) {
        return new StoryText_1.StoryText(string_1.getLinearString(text));
    };
    StoryScene.prototype.getRequiredSceneCtor = function (className) {
        if (this.sceneMap == null)
            throw new Error('StoryScene.sceneMap is null');
        var ctor = this.sceneMap[className];
        if (ctor == null)
            throw new SceneNotFoundError_1.SceneNotFoundError(className);
        return ctor;
    };
    return StoryScene;
}());
exports.StoryScene = StoryScene;


/***/ }),

/***/ "./src/story-engine/src/common/StoryState.ts":
/*!***************************************************!*\
  !*** ./src/story-engine/src/common/StoryState.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StoryState = /** @class */ (function () {
    function StoryState() {
    }
    StoryState.prototype.load = function (state) {
        Object.assign(this, state);
    };
    return StoryState;
}());
exports.StoryState = StoryState;


/***/ }),

/***/ "./src/story-engine/src/common/StoryText.ts":
/*!**************************************************!*\
  !*** ./src/story-engine/src/common/StoryText.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var StoryElement_1 = __webpack_require__(/*! ./StoryElement */ "./src/story-engine/src/common/StoryElement.ts");
var StoryText = /** @class */ (function (_super) {
    __extends(StoryText, _super);
    function StoryText(text) {
        var _this = _super.call(this) || this;
        _this.text = text;
        return _this;
    }
    return StoryText;
}(StoryElement_1.StoryElement));
exports.StoryText = StoryText;


/***/ }),

/***/ "./src/story-engine/src/common/enum.ts":
/*!*********************************************!*\
  !*** ./src/story-engine/src/common/enum.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getEnumMemberName(enumType, key) {
    for (var fieldName in enumType) {
        if (enumType[fieldName] == key)
            return fieldName;
    }
    return null;
}
exports.getEnumMemberName = getEnumMemberName;
/** remember that "" == 0 is true */
function isValidEnumMember(enumType, enumValue) {
    for (var fieldName in enumType) {
        if (enumType[fieldName] === enumValue)
            return true;
    }
    return false;
}
exports.isValidEnumMember = isValidEnumMember;


/***/ }),

/***/ "./src/story-engine/src/common/random.ts":
/*!***********************************************!*\
  !*** ./src/story-engine/src/common/random.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getRandomInteger(limit) {
    return Math.floor(Math.random() * limit);
}
exports.getRandomInteger = getRandomInteger;


/***/ }),

/***/ "./src/story-engine/src/common/string.ts":
/*!***********************************************!*\
  !*** ./src/story-engine/src/common/string.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function upperFirst(s) {
    if (s.length > 0) {
        var firstLetter = s.charAt(0).toUpperCase();
        s = firstLetter + s.slice(1);
    }
    return s;
}
exports.upperFirst = upperFirst;
function getLinearString(text) {
    var output = '';
    var haveWhitespace = true;
    for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
        var c = text_1[_i];
        if (c != '\r' && c != '\n') {
            if (c == ' ') {
                if (!haveWhitespace) {
                    output += c;
                    haveWhitespace = true;
                }
            }
            else {
                output += c;
                haveWhitespace = false;
            }
        }
    }
    return output;
}
exports.getLinearString = getLinearString;


/***/ }),

/***/ "./src/story-engine/src/gui-runner/Colors.ts":
/*!***************************************************!*\
  !*** ./src/story-engine/src/gui-runner/Colors.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Colors;
(function (Colors) {
    Colors["solarizedBase02"] = "#073642";
    Colors["solarizedBase01"] = "#586e75";
    Colors["solarizedBase00"] = "#657b83";
    Colors["solarizedBase1"] = "#93a1a1";
    Colors["solarizedBase2"] = "#eee8d5";
    Colors["solarizedBase3"] = "#fdf6e3";
    Colors["solarizedRed"] = "#dc322f";
})(Colors = exports.Colors || (exports.Colors = {}));


/***/ }),

/***/ "./src/story-engine/src/gui-runner/GuiCommon.ts":
/*!******************************************************!*\
  !*** ./src/story-engine/src/gui-runner/GuiCommon.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_LOCAL_STORAGE_KEY_PREFIX = 'LittleAdventureStoryEngine_';


/***/ }),

/***/ "./src/story-engine/src/gui-runner/GuiRunner.tsx":
/*!*******************************************************!*\
  !*** ./src/story-engine/src/gui-runner/GuiRunner.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var StorySaveFiles_1 = __webpack_require__(/*! ../common/StorySaveFiles */ "./src/story-engine/src/common/StorySaveFiles.ts");
var GuiCommon_1 = __webpack_require__(/*! ./GuiCommon */ "./src/story-engine/src/gui-runner/GuiCommon.ts");
var StoryRunner_1 = __webpack_require__(/*! ../common/StoryRunner */ "./src/story-engine/src/common/StoryRunner.ts");
var Colors_1 = __webpack_require__(/*! ./Colors */ "./src/story-engine/src/gui-runner/Colors.ts");
var GuiStoryPanel_1 = __webpack_require__(/*! ./GuiStoryPanel */ "./src/story-engine/src/gui-runner/GuiStoryPanel.tsx");
var UserReactionStoryElement_1 = __webpack_require__(/*! ./UserReactionStoryElement */ "./src/story-engine/src/gui-runner/UserReactionStoryElement.ts");
var GuiRunnerProps = /** @class */ (function () {
    function GuiRunnerProps() {
    }
    return GuiRunnerProps;
}());
exports.GuiRunnerProps = GuiRunnerProps;
var GuiRunnerState = /** @class */ (function () {
    function GuiRunnerState() {
        this.elements = [];
        this.inputText = '';
    }
    return GuiRunnerState;
}());
exports.GuiRunnerState = GuiRunnerState;
var GuiRunner = /** @class */ (function (_super) {
    __extends(GuiRunner, _super);
    function GuiRunner(props) {
        var _this = _super.call(this, props) || this;
        _this.panelCountLimit = 16;
        _this.runner = new StoryRunner_1.StoryRunner(props.storyInfo);
        _this.runner.receiveCommand = props.receiveCommend;
        _this.state = new GuiRunnerState();
        return _this;
    }
    GuiRunner.prototype.render = function () {
        var _this = this;
        return preact_1.h("div", null,
            preact_1.h("div", null, this.state.elements.map(function (elementSet) { return preact_1.h(GuiStoryPanel_1.GuiStoryPanel, { elements: elementSet }); })),
            preact_1.h("input", { type: "text", autoFocus: true, value: this.state.inputText, style: GuiRunner.inputStyle, onChange: function (event) { return _this.receiveInputChange(event); }, onKeyUp: function (event) { return _this.receiveInputKeyPress(event); }, placeholder: 'input here' }));
    };
    GuiRunner.prototype.componentWillMount = function () {
        this.start();
    };
    GuiRunner.prototype.loadState = function (fileName) {
        var text = localStorage.getItem(GuiCommon_1.APP_LOCAL_STORAGE_KEY_PREFIX + fileName);
        if (text != null) {
            var content = JSON.parse(text);
            var state = new this.runner.storyInfo.stateConstructor;
            state.load(content);
            return state;
        }
        else
            return null;
    };
    GuiRunner.prototype.saveState = function (fileName, state) {
        var content = JSON.stringify(state, null, 4);
        localStorage.setItem(GuiCommon_1.APP_LOCAL_STORAGE_KEY_PREFIX + fileName, content);
    };
    GuiRunner.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var state, ctor, scene;
            return __generator(this, function (_a) {
                state = this.loadState(StorySaveFiles_1.StorySaveFiles.auto);
                if (state == null) {
                    state = new this.runner.storyInfo.stateConstructor;
                    console.log('Starting a new game.');
                }
                ctor = this.runner.getRequiredSceneCtor(state.sceneClassName);
                scene = this.runner.createSceneWithState(ctor, state);
                this.startScene(scene);
                return [2 /*return*/];
            });
        });
    };
    GuiRunner.prototype.startScene = function (scene) {
        this.saveState(StorySaveFiles_1.StorySaveFiles.auto, scene.state);
        this.scene = scene;
        var elementSet = scene.render();
        this.addElementSet(elementSet);
        this.setState({ inputText: '' });
        setTimeout(function () { return window.scrollTo(0, document.body.scrollHeight); });
    };
    GuiRunner.prototype.addElementSet = function (elementSet) {
        var elements = this.state.elements;
        elements.push(elementSet);
        while (elements.length > this.panelCountLimit)
            elements.shift();
        this.setState({ elements: elements });
    };
    GuiRunner.prototype.receiveInputChange = function (event) {
        this.setState({ inputText: event.target.value });
    };
    GuiRunner.prototype.receiveInputKeyPress = function (event) {
        if (event.keyCode == 13)
            this.receiveEnterEvent();
    };
    GuiRunner.prototype.receiveEnterEvent = function () {
        var resultScene = this.scene;
        var scene = this.scene;
        var inputText = this.state.inputText;
        var userReactionElement = new UserReactionStoryElement_1.UserReactionStoryElement;
        switch (inputText) {
            case 'debug show scenes':
                userReactionElement.subText = 'Count of scenes: ' + Object.keys(this.runner.storyInfo.scenes).length;
                break;
            case 'help':
                userReactionElement.subText = 'Commands: save, load, status, reset. Empty text: continue.';
                break;
            case 'save':
                this.saveState(StorySaveFiles_1.StorySaveFiles.quick, scene.state);
                userReactionElement.subText = 'Saved successfully.';
                break;
            case 'load':
                var state = this.loadState(StorySaveFiles_1.StorySaveFiles.quick);
                if (state != null) {
                    var ctor = this.runner.getRequiredSceneCtor(state.sceneClassName);
                    resultScene = this.runner.createSceneWithState(ctor, state);
                }
                break;
            case 'status':
                resultScene = this.runner.createStatusScene(scene);
                break;
            case 'reset':
                resultScene = this.runner.createStartingScene();
                break;
            default:
                var isDebugCommand = this.runner.receiveCommand(inputText, scene);
                if (!isDebugCommand) {
                    this.scene.receiveChoice(inputText);
                    if (this.scene.nextSceneCtor != null) {
                        resultScene = this.runner.createSceneWithState(scene.nextSceneCtor, scene.state);
                    }
                }
                break;
        }
        if (inputText.trim().length > 0) {
            userReactionElement.text = this.state.inputText;
            this.addElementSet([userReactionElement]);
        }
        this.startScene(resultScene);
    };
    GuiRunner.inputStyle = {
        color: Colors_1.Colors.solarizedBase3,
        backgroundColor: Colors_1.Colors.solarizedBase02,
        width: '100%',
        border: '1px solid ' + Colors_1.Colors.solarizedBase3,
        marginTop: '8px',
        paddingLeft: '4px',
    };
    return GuiRunner;
}(preact_1.Component));
exports.GuiRunner = GuiRunner;


/***/ }),

/***/ "./src/story-engine/src/gui-runner/GuiStoryPanel.tsx":
/*!***********************************************************!*\
  !*** ./src/story-engine/src/gui-runner/GuiStoryPanel.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var StoryText_1 = __webpack_require__(/*! ../common/StoryText */ "./src/story-engine/src/common/StoryText.ts");
var Colors_1 = __webpack_require__(/*! ./Colors */ "./src/story-engine/src/gui-runner/Colors.ts");
var StoryChoice_1 = __webpack_require__(/*! ../common/StoryChoice */ "./src/story-engine/src/common/StoryChoice.ts");
var UserReactionStoryElement_1 = __webpack_require__(/*! ./UserReactionStoryElement */ "./src/story-engine/src/gui-runner/UserReactionStoryElement.ts");
var GuiStoryPanelProps = /** @class */ (function () {
    function GuiStoryPanelProps() {
    }
    return GuiStoryPanelProps;
}());
var GuiStoryPanel = /** @class */ (function (_super) {
    __extends(GuiStoryPanel, _super);
    function GuiStoryPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.panelStyle = {
            fontFamily: 'Consolas, monospace',
            border: '1px solid ' + Colors_1.Colors.solarizedBase01,
            backgroundColor: Colors_1.Colors.solarizedBase02,
            marginBottom: '4px',
            padding: '4px',
        };
        return _this;
    }
    GuiStoryPanel.prototype.render = function () {
        var _this = this;
        return preact_1.h("div", { style: this.panelStyle },
            this.props.elements.map(function (element) { return _this.renderElement(element); }),
            this.renderChoices());
    };
    GuiStoryPanel.prototype.renderElement = function (element) {
        if (element instanceof StoryText_1.StoryText) {
            var textElement = element;
            return preact_1.h("div", null, textElement.text);
        }
        if (element instanceof UserReactionStoryElement_1.UserReactionStoryElement) {
            var e = element;
            return preact_1.h("div", null,
                preact_1.h("span", null, ">"),
                "\u00A0",
                preact_1.h("span", { style: { color: Colors_1.Colors.solarizedRed } }, e.text),
                e.subText != null
                    ? preact_1.h("div", null, e.subText)
                    : null);
        }
    };
    GuiStoryPanel.prototype.renderChoices = function () {
        var _this = this;
        var choices = this.props.elements.filter(function (e) { return e instanceof StoryChoice_1.StoryChoice; }).map(function (e) { return e; });
        if (choices.length > 0) {
            return preact_1.h("ul", { style: "margin-top: 4px; margin-bottom: 4px" }, choices.map(function (choice) { return _this.renderChoice(choice); }));
        }
        else
            return null;
    };
    GuiStoryPanel.prototype.renderChoice = function (choice) {
        return preact_1.h("li", null,
            preact_1.h("span", { style: { color: Colors_1.Colors.solarizedRed } }, choice.id),
            ":\u00A0",
            choice.text);
    };
    return GuiStoryPanel;
}(preact_1.Component));
exports.GuiStoryPanel = GuiStoryPanel;


/***/ }),

/***/ "./src/story-engine/src/gui-runner/UserReactionStoryElement.ts":
/*!*********************************************************************!*\
  !*** ./src/story-engine/src/gui-runner/UserReactionStoryElement.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var StoryElement_1 = __webpack_require__(/*! ../common/StoryElement */ "./src/story-engine/src/common/StoryElement.ts");
var UserReactionStoryElement = /** @class */ (function (_super) {
    __extends(UserReactionStoryElement, _super);
    function UserReactionStoryElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UserReactionStoryElement;
}(StoryElement_1.StoryElement));
exports.UserReactionStoryElement = UserReactionStoryElement;


/***/ }),

/***/ "./src/story-engine/src/math.ts":
/*!**************************************!*\
  !*** ./src/story-engine/src/math.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function lockNumberBetween(a, x, b) {
    if (b < x)
        x = b;
    if (x < a)
        x = a;
    return x;
}
exports.lockNumberBetween = lockNumberBetween;


/***/ }),

/***/ "./src/story/BaseScene.ts":
/*!********************************!*\
  !*** ./src/story/BaseScene.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var StoryScene_1 = __webpack_require__(/*! ../story-engine/src/common/StoryScene */ "./src/story-engine/src/common/StoryScene.ts");
var GenderType_1 = __webpack_require__(/*! ./GenderType */ "./src/story/GenderType.ts");
var BaseScene = /** @class */ (function (_super) {
    __extends(BaseScene, _super);
    function BaseScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BaseScene.prototype, "state", {
        get: function () {
            return _super.prototype.getState.call(this);
        },
        set: function (value) {
            _super.prototype.setState.call(this, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseScene.prototype, "heShe", {
        get: function () {
            return GenderType_1.heShe(this.state.character.gender);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseScene.prototype, "hisHer", {
        get: function () {
            return GenderType_1.hisHer(this.state.character.gender);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseScene.prototype, "himselfHerself", {
        get: function () {
            return GenderType_1.himselfHerself(this.state.character.gender);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseScene.prototype, "himHer", {
        get: function () {
            return GenderType_1.himHer(this.state.character.gender);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseScene.prototype, "characterName", {
        get: function () {
            return this.state.character.name;
        },
        enumerable: true,
        configurable: true
    });
    return BaseScene;
}(StoryScene_1.StoryScene));
exports.BaseScene = BaseScene;


/***/ }),

/***/ "./src/story/BodyType.ts":
/*!*******************************!*\
  !*** ./src/story/BodyType.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BodyType;
(function (BodyType) {
    BodyType[BodyType["thin"] = 0] = "thin";
    BodyType[BodyType["average"] = 1] = "average";
    BodyType[BodyType["chubby"] = 2] = "chubby";
    BodyType[BodyType["fat"] = 3] = "fat";
})(BodyType = exports.BodyType || (exports.BodyType = {}));
function bodyTypeToString(bodyType) {
    switch (bodyType) {
        case BodyType.thin:
            return 'thin';
        case BodyType.average:
            return 'neither fat nor thin';
        case BodyType.chubby:
            return 'chubby';
        case BodyType.fat:
            return 'fat';
    }
}
exports.bodyTypeToString = bodyTypeToString;


/***/ }),

/***/ "./src/story/BodyTypeChoices.ts":
/*!**************************************!*\
  !*** ./src/story/BodyTypeChoices.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BodyType_1 = __webpack_require__(/*! ./BodyType */ "./src/story/BodyType.ts");
var StoryChoice_1 = __webpack_require__(/*! ../story-engine/src/common/StoryChoice */ "./src/story-engine/src/common/StoryChoice.ts");
exports.bodyTypeChoices = [];
for (var fieldName in BodyType_1.BodyType) {
    var fieldValue = BodyType_1.BodyType[fieldName];
    if (typeof fieldValue === 'number')
        exports.bodyTypeChoices.push(new StoryChoice_1.StoryChoice(fieldName, '' + fieldValue));
}


/***/ }),

/***/ "./src/story/Confirmation.ts":
/*!***********************************!*\
  !*** ./src/story/Confirmation.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Confirmation;
(function (Confirmation) {
    Confirmation["yes"] = "y";
    Confirmation["no"] = "n";
})(Confirmation = exports.Confirmation || (exports.Confirmation = {}));


/***/ }),

/***/ "./src/story/DefaultLittleState.ts":
/*!*****************************************!*\
  !*** ./src/story/DefaultLittleState.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LittleState_1 = __webpack_require__(/*! ./LittleState */ "./src/story/LittleState.ts");
var StartScene_1 = __webpack_require__(/*! ./scenes/StartScene */ "./src/story/scenes/StartScene.ts");
var StatusScene_1 = __webpack_require__(/*! ./scenes/StatusScene */ "./src/story/scenes/StatusScene.ts");
var LittleCharacter_1 = __webpack_require__(/*! ./LittleCharacter */ "./src/story/LittleCharacter.ts");
var DefaultLittleState = /** @class */ (function (_super) {
    __extends(DefaultLittleState, _super);
    function DefaultLittleState() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sceneClassName = StartScene_1.StartScene['name'];
        _this.statusSceneClassName = StatusScene_1.StatusScene['name'];
        _this.character = new LittleCharacter_1.LittleCharacter;
        _this.breakfast = {};
        _this.renown = 0;
        _this.caveEntranceFailureCount = 0;
        _this.caveSpider = {
            health: 2,
            rolled: false,
            introShown: false,
        };
        return _this;
    }
    return DefaultLittleState;
}(LittleState_1.LittleState));
exports.DefaultLittleState = DefaultLittleState;


/***/ }),

/***/ "./src/story/GenderType.ts":
/*!*********************************!*\
  !*** ./src/story/GenderType.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GenderType;
(function (GenderType) {
    GenderType["male"] = "m";
    GenderType["female"] = "f";
})(GenderType = exports.GenderType || (exports.GenderType = {}));
function heShe(genderType) {
    switch (genderType) {
        case GenderType.male: return 'he';
        case GenderType.female: return 'she';
    }
}
exports.heShe = heShe;
function hisHer(genderType) {
    switch (genderType) {
        case GenderType.male: return 'his';
        case GenderType.female: return 'her';
    }
}
exports.hisHer = hisHer;
function himselfHerself(genderType) {
    switch (genderType) {
        case GenderType.male: return 'himself';
        case GenderType.female: return 'herself';
    }
}
exports.himselfHerself = himselfHerself;
function himHer(genderType) {
    switch (genderType) {
        case GenderType.male: return 'him';
        case GenderType.female: return 'her';
    }
}
exports.himHer = himHer;


/***/ }),

/***/ "./src/story/LittleCharacter.ts":
/*!**************************************!*\
  !*** ./src/story/LittleCharacter.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var clothes_1 = __webpack_require__(/*! ./clothes */ "./src/story/clothes.ts");
var color_1 = __webpack_require__(/*! ./color */ "./src/story/color.ts");
var clothingSizes_1 = __webpack_require__(/*! ./clothingSizes */ "./src/story/clothingSizes.ts");
var LittleCharacter = /** @class */ (function () {
    function LittleCharacter() {
        this.energy = 0;
        this.fullness = 0;
    }
    LittleCharacter.prototype.getClothingDescriptions = function () {
        var descriptions = [];
        if (this.clothingTop != null) {
            var fitType = clothingSizes_1.getClothingSizeToBodyTypeRelation(this.clothingTopSize, this.bodyType);
            var description = this.name + ' wears ' + color_1.storyColorToText(this.clothingTopColor) + ' ' +
                clothes_1.clothingTopToText(this.clothingTop) + ', size ' + clothes_1.ClothingSize[this.clothingTopSize] + ' ' +
                clothingSizes_1.clothingFitTypeToText(fitType);
            descriptions.push(description);
        }
        if (this.clothingBottom != null) {
            var fitType = clothingSizes_1.getClothingSizeToBodyTypeRelation(this.clothingBottomSize, this.bodyType);
            var description = this.name + ' wears ' + color_1.storyColorToText(this.clothingBottomColor) + ' ' +
                clothes_1.clothingBottomToText(this.clothingBottom) + ', size ' + clothes_1.ClothingSize[this.clothingBottomSize] + ' ' +
                clothingSizes_1.clothingFitTypeToText(fitType);
            descriptions.push(description);
        }
        return descriptions;
    };
    LittleCharacter.prototype.getBottomClothingShortText = function () {
        return this.clothingBottom != null ? color_1.storyColorToText(this.clothingBottomColor) + ' ' + clothes_1.clothingBottomToText(this.clothingBottom) : null;
    };
    LittleCharacter.prototype.getTopClothingShortText = function () {
        return this.clothingTop != null ? color_1.storyColorToText(this.clothingTopColor) + ' ' + clothes_1.clothingTopToText(this.clothingTop) : null;
    };
    LittleCharacter.prototype.getBottomClothingFitType = function () {
        return this.clothingBottom != null ? clothingSizes_1.getClothingSizeToBodyTypeRelation(this.clothingBottomSize, this.bodyType) : null;
    };
    LittleCharacter.prototype.getTopClothingFitType = function () {
        return this.clothingTop != null ? clothingSizes_1.getClothingSizeToBodyTypeRelation(this.clothingTopSize, this.bodyType) : null;
    };
    LittleCharacter.prototype.getInferredBottomClothingShortText = function () {
        if (this.clothingBottom != null)
            return this.getBottomClothingShortText();
        else
            return this.getTopClothingShortText();
    };
    return LittleCharacter;
}());
exports.LittleCharacter = LittleCharacter;


/***/ }),

/***/ "./src/story/LittleState.ts":
/*!**********************************!*\
  !*** ./src/story/LittleState.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var StoryState_1 = __webpack_require__(/*! ../story-engine/src/common/StoryState */ "./src/story-engine/src/common/StoryState.ts");
var LittleCharacter_1 = __webpack_require__(/*! ./LittleCharacter */ "./src/story/LittleCharacter.ts");
var LittleState = /** @class */ (function (_super) {
    __extends(LittleState, _super);
    function LittleState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LittleState.prototype.load = function (state) {
        _super.prototype.load.call(this, state);
        if (state.character != null) {
            this.character = new LittleCharacter_1.LittleCharacter;
            Object.assign(this.character, state.character);
        }
    };
    return LittleState;
}(StoryState_1.StoryState));
exports.LittleState = LittleState;


/***/ }),

/***/ "./src/story/LittleStoryInfo.ts":
/*!**************************************!*\
  !*** ./src/story/LittleStoryInfo.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var StoryInfo_1 = __webpack_require__(/*! ../story-engine/src/common/StoryInfo */ "./src/story-engine/src/common/StoryInfo.ts");
var scenes_1 = __webpack_require__(/*! ./scenes/scenes */ "./src/story/scenes/scenes.ts");
__webpack_require__(/*! ./scenes/sceneCollection */ "./src/story/scenes/sceneCollection.ts");
var DefaultLittleState_1 = __webpack_require__(/*! ./DefaultLittleState */ "./src/story/DefaultLittleState.ts");
var LittleStoryInfo = /** @class */ (function (_super) {
    __extends(LittleStoryInfo, _super);
    function LittleStoryInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scenes = scenes_1.globalScenes;
        _this.stateConstructor = DefaultLittleState_1.DefaultLittleState;
        return _this;
    }
    return LittleStoryInfo;
}(StoryInfo_1.StoryInfo));
exports.LittleStoryInfo = LittleStoryInfo;


/***/ }),

/***/ "./src/story/YesNoChoices.ts":
/*!***********************************!*\
  !*** ./src/story/YesNoChoices.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StoryChoice_1 = __webpack_require__(/*! ../story-engine/src/common/StoryChoice */ "./src/story-engine/src/common/StoryChoice.ts");
var Confirmation_1 = __webpack_require__(/*! ./Confirmation */ "./src/story/Confirmation.ts");
exports.yesNoChoices = [new StoryChoice_1.StoryChoice('Yes', Confirmation_1.Confirmation.yes), new StoryChoice_1.StoryChoice('No', Confirmation_1.Confirmation.no)];


/***/ }),

/***/ "./src/story/chars.ts":
/*!****************************!*\
  !*** ./src/story/chars.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Chars;
(function (Chars) {
    Chars["checkMark"] = "\u2713";
    Chars["failMark"] = "\u2717";
    Chars["mark"] = "\u2022";
})(Chars = exports.Chars || (exports.Chars = {}));
function getSuccessFailureChar(success) {
    return success ? Chars.checkMark : Chars.failMark;
}
exports.getSuccessFailureChar = getSuccessFailureChar;


/***/ }),

/***/ "./src/story/clothes.ts":
/*!******************************!*\
  !*** ./src/story/clothes.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StoryChoice_1 = __webpack_require__(/*! ../story-engine/src/common/StoryChoice */ "./src/story-engine/src/common/StoryChoice.ts");
var ClothingSize;
(function (ClothingSize) {
    ClothingSize[ClothingSize["XS"] = -1] = "XS";
    ClothingSize[ClothingSize["S"] = 0] = "S";
    ClothingSize[ClothingSize["M"] = 1] = "M";
    ClothingSize[ClothingSize["L"] = 2] = "L";
    ClothingSize[ClothingSize["XL"] = 3] = "XL";
    ClothingSize[ClothingSize["XXL"] = 4] = "XXL";
})(ClothingSize = exports.ClothingSize || (exports.ClothingSize = {}));
var ClothingBottom;
(function (ClothingBottom) {
    ClothingBottom[ClothingBottom["shorts"] = 0] = "shorts";
    ClothingBottom[ClothingBottom["pants"] = 1] = "pants";
    ClothingBottom[ClothingBottom["skirt"] = 2] = "skirt";
})(ClothingBottom = exports.ClothingBottom || (exports.ClothingBottom = {}));
function clothingBottomToText(clothing) {
    switch (clothing) {
        case ClothingBottom.shorts: return 'shorts';
        case ClothingBottom.pants: return 'pants';
        case ClothingBottom.skirt: return 'skirt';
        default: return null;
    }
}
exports.clothingBottomToText = clothingBottomToText;
function clothingBottomIsPlural(clothing) {
    switch (clothing) {
        case ClothingBottom.shorts: return true;
        case ClothingBottom.pants: return true;
        case ClothingBottom.skirt: return false;
        default: return null;
    }
}
exports.clothingBottomIsPlural = clothingBottomIsPlural;
function createClothingBottomChoice(clothing) {
    return new StoryChoice_1.StoryChoice(clothingBottomToText(clothing), '' + clothing);
}
exports.createClothingBottomChoice = createClothingBottomChoice;
var ClothingTop;
(function (ClothingTop) {
    ClothingTop[ClothingTop["dress"] = 0] = "dress";
    ClothingTop[ClothingTop["shirt"] = 1] = "shirt";
    ClothingTop[ClothingTop["tShirt"] = 2] = "tShirt";
})(ClothingTop = exports.ClothingTop || (exports.ClothingTop = {}));
function clothingTopToText(clothing) {
    switch (clothing) {
        case ClothingTop.dress: return 'dress';
        case ClothingTop.shirt: return 'shirt';
        case ClothingTop.tShirt: return 'short-sleeved shirt';
        default: return null;
    }
}
exports.clothingTopToText = clothingTopToText;
function createClothingTopChoice(clothing) {
    return new StoryChoice_1.StoryChoice(clothingTopToText(clothing), '' + clothing);
}
exports.createClothingTopChoice = createClothingTopChoice;
var ClothingType;
(function (ClothingType) {
    ClothingType[ClothingType["top"] = 0] = "top";
    ClothingType[ClothingType["bottom"] = 1] = "bottom";
})(ClothingType = exports.ClothingType || (exports.ClothingType = {}));


/***/ }),

/***/ "./src/story/clothingSizes.ts":
/*!************************************!*\
  !*** ./src/story/clothingSizes.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var clothes_1 = __webpack_require__(/*! ./clothes */ "./src/story/clothes.ts");
var enum_1 = __webpack_require__(/*! ../story-engine/src/common/enum */ "./src/story-engine/src/common/enum.ts");
var StoryChoice_1 = __webpack_require__(/*! ../story-engine/src/common/StoryChoice */ "./src/story-engine/src/common/StoryChoice.ts");
function getAvailableClothingSizes(bodyType) {
    var result = [];
    for (var i = bodyType - 1; i <= bodyType + 1; i++) {
        if (enum_1.isValidEnumMember(clothes_1.ClothingSize, i))
            result.push(i);
    }
    return result;
}
function getAvailableClothingSizeChoices(bodyType) {
    var sizes = getAvailableClothingSizes(bodyType);
    return sizes.map(function (size) {
        var fitType = getClothingSizeToBodyTypeRelation(size, bodyType);
        var fitTypeText = clothingFitTypeToText(fitType);
        return new StoryChoice_1.StoryChoice('size ' + clothes_1.ClothingSize[size] + ', ' + fitTypeText, '' + size);
    });
}
exports.getAvailableClothingSizeChoices = getAvailableClothingSizeChoices;
var ClothingFitType;
(function (ClothingFitType) {
    ClothingFitType[ClothingFitType["burst"] = 0] = "burst";
    ClothingFitType[ClothingFitType["tight"] = 1] = "tight";
    ClothingFitType[ClothingFitType["perfect"] = 2] = "perfect";
    ClothingFitType[ClothingFitType["loose"] = 3] = "loose";
    ClothingFitType[ClothingFitType["fallThrough"] = 4] = "fallThrough";
})(ClothingFitType = exports.ClothingFitType || (exports.ClothingFitType = {}));
function getClothingSizeToBodyTypeRelation(clothingSize, bodyType) {
    var result = null;
    if (bodyType < clothingSize - 1)
        result = ClothingFitType.fallThrough;
    else if (bodyType < clothingSize)
        result = ClothingFitType.loose;
    else if (bodyType == clothingSize)
        result = ClothingFitType.perfect;
    else if (clothingSize < bodyType - 1)
        result = ClothingFitType.burst;
    else if (clothingSize < bodyType)
        result = ClothingFitType.tight;
    return result;
}
exports.getClothingSizeToBodyTypeRelation = getClothingSizeToBodyTypeRelation;
function clothingFitTypeToText(clothingFitType) {
    switch (clothingFitType) {
        case ClothingFitType.burst: return 'too tight';
        case ClothingFitType.tight: return 'tight fit';
        case ClothingFitType.perfect: return 'regular fit';
        case ClothingFitType.loose: return 'loose fit';
        case ClothingFitType.fallThrough: return 'too loose';
        default: return null;
    }
}
exports.clothingFitTypeToText = clothingFitTypeToText;


/***/ }),

/***/ "./src/story/color.ts":
/*!****************************!*\
  !*** ./src/story/color.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StoryChoice_1 = __webpack_require__(/*! ../story-engine/src/common/StoryChoice */ "./src/story-engine/src/common/StoryChoice.ts");
var StoryColor;
(function (StoryColor) {
    StoryColor[StoryColor["white"] = 0] = "white";
    StoryColor[StoryColor["black"] = 1] = "black";
    StoryColor[StoryColor["red"] = 2] = "red";
    StoryColor[StoryColor["orange"] = 3] = "orange";
    StoryColor[StoryColor["yellow"] = 4] = "yellow";
    StoryColor[StoryColor["green"] = 5] = "green";
    StoryColor[StoryColor["cyan"] = 6] = "cyan";
    StoryColor[StoryColor["blue"] = 7] = "blue";
    StoryColor[StoryColor["purple"] = 8] = "purple";
})(StoryColor = exports.StoryColor || (exports.StoryColor = {}));
function getColorChoices() {
    var choices = [];
    for (var color in StoryColor) {
        var value = StoryColor[color];
        if (typeof value == 'number') {
            choices.push(new StoryChoice_1.StoryChoice(color, value));
        }
    }
    return choices;
}
exports.getColorChoices = getColorChoices;
function storyColorToText(color) {
    return StoryColor[color];
}
exports.storyColorToText = storyColorToText;


/***/ }),

/***/ "./src/story/food.ts":
/*!***************************!*\
  !*** ./src/story/food.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FullnessLevel;
(function (FullnessLevel) {
    FullnessLevel[FullnessLevel["empty"] = 0] = "empty";
    FullnessLevel[FullnessLevel["sated"] = 1] = "sated";
    FullnessLevel[FullnessLevel["full"] = 2] = "full";
    FullnessLevel[FullnessLevel["stuffed"] = 3] = "stuffed";
    FullnessLevel[FullnessLevel["veryBloated"] = 4] = "veryBloated";
})(FullnessLevel = exports.FullnessLevel || (exports.FullnessLevel = {}));
function fullnessToText(fullness) {
    if (fullness < 1)
        return 'empty';
    else if (fullness < 2)
        return 'sated';
    else if (fullness < 3)
        return 'full';
    else if (fullness < 4)
        return 'stuffed';
    else
        return 'very bloated';
}
exports.fullnessToText = fullnessToText;


/***/ }),

/***/ "./src/story/magic.ts":
/*!****************************!*\
  !*** ./src/story/magic.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function magicPowerToText(level) {
    switch (level) {
        case 0: return 'weak';
        case 1: return 'mediocre';
        case 2: return 'average';
        case 3: return 'powerful';
        default: return 'unknown';
    }
}
exports.magicPowerToText = magicPowerToText;


/***/ }),

/***/ "./src/story/scenes/ArtifactEntranceScenes.ts":
/*!****************************************************!*\
  !*** ./src/story/scenes/ArtifactEntranceScenes.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseScene_1 = __webpack_require__(/*! ../BaseScene */ "./src/story/BaseScene.ts");
var CommonScenes_1 = __webpack_require__(/*! ./CommonScenes */ "./src/story/scenes/CommonScenes.ts");
var StoryChoice_1 = __webpack_require__(/*! ../../story-engine/src/common/StoryChoice */ "./src/story-engine/src/common/StoryChoice.ts");
var string_1 = __webpack_require__(/*! ../../story-engine/src/common/string */ "./src/story-engine/src/common/string.ts");
var chars_1 = __webpack_require__(/*! ../chars */ "./src/story/chars.ts");
var strength_1 = __webpack_require__(/*! ../strength */ "./src/story/strength.ts");
var magic_1 = __webpack_require__(/*! ../magic */ "./src/story/magic.ts");
var BodyType_1 = __webpack_require__(/*! ../BodyType */ "./src/story/BodyType.ts");
var TravelToMeetingScene = /** @class */ (function (_super) {
    __extends(TravelToMeetingScene, _super);
    function TravelToMeetingScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelToMeetingScene.prototype.render = function () {
        return [this.text(this.state.character.name + " travels to the castle to meet councillor Warlove."),
            this.text("Warlove: Good day " + this.state.character.name + ".\n                We recently discovered the location of a powerful artifact: the Prism of Life.\n                You have to retrieve this artifact as soon as possible, before someone else snatches the prism.\n                The mission is to be carried out in secrecy: the fewer people know about the Prism, the better.\n                As you know we suspect that our neighbors Sunflower Elves plan an attack on our lands.\n                Therefore we need all the advantage we can get. The Prism of Life shall prove to be useful.")];
    };
    TravelToMeetingScene.prototype.receiveChoice = function () {
        this.nextSceneCtor = TravelToCaveScene;
        this.state.character.fullness = 0;
    };
    return TravelToMeetingScene;
}(BaseScene_1.BaseScene));
exports.TravelToMeetingScene = TravelToMeetingScene;
CommonScenes_1.commonScenes.TravelToMeetingScene = TravelToMeetingScene;
var TravelToCaveScene = /** @class */ (function (_super) {
    __extends(TravelToCaveScene, _super);
    function TravelToCaveScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelToCaveScene.prototype.render = function () {
        var _this = this;
        var texts = [
            "Warlove: our scouts found this old map. A temple is marked on it, but there are no known settlements nearby.",
            "Councillor Warlove gives " + this.state.character.name + " a map pointing to the location where the magical artifact is supposed to be\n                and sends " + this.himHer + " on " + this.hisHer + " way.",
            "After 3 days of travel " + this.state.character.name + " reaches Brightwall, a small town where " + this.heShe + " stops for the night in a tavern.",
            "Zzz... Fast-forward to the morning. Now might be a good time to save the game if you haven't done that recently.\n            In terminal version type \"help\" to review list of commands.",
            this.state.character.name + " starts the day with 3 energy.",
            "After two more hours of travel " + this.state.character.name + " reaches " + this.hisHer + " destination.\n                The entrance to the cave is hidden behind a waterfall. A thick green grove surrounds it."
        ];
        return texts.map(function (t) { return _this.text(t); });
    };
    TravelToCaveScene.prototype.receiveChoice = function () {
        this.state.character.energy = 3;
        this.nextSceneCtor = PreCaveEntranceScene;
    };
    return TravelToCaveScene;
}(BaseScene_1.BaseScene));
exports.TravelToCaveScene = TravelToCaveScene;
var PreCaveEntranceScene = /** @class */ (function (_super) {
    __extends(PreCaveEntranceScene, _super);
    function PreCaveEntranceScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PreCaveEntranceScene.prototype.render = function () {
        return [
            this.text("The way inside is blocked by a wall made of large stone blocks. It seals the cave entrance.\n                The stone blocks are covered with moss. In the middle there is a door made of stone."),
            this.text("Now it is time to solve the first puzzle."),
            this.text("[x] " + this.state.character.name + " can try to open the door using " + this.hisHer + " physical strength.\n                First " + this.heShe + " needs to force it open just slightly to open a gap, so that " + this.heShe + " can grasp its side with " + this.hisHer + " hands.\n                For this purpose " + this.heShe + " can use " + this.hisHer + " dagger made of tempered steel.\n                Then hopefully " + this.heShe + " can make the gap wide enough to get " + this.himselfHerself + " inside.\n                " + this.state.character.name + "'s dagger is not great as a lever because it is short, so " + this.heShe + " would have to pull it pretty hard."),
            this.text("[x] The second approach is a bit like the first but " + this.state.character.name + " can use magic to enhance " + this.hisHer + " strength.\n                It works best if " + this.heShe + " has a little of both magical and physical strength\n                but the downside is that the effort might leave " + this.state.character.name + " tired\n                because " + this.heShe + " would have to exert " + this.himselfHerself + " both physically and spiritually."),
            this.text("[x] The third approach is to pull the door open with a magic spell.\n                The spell itself is not complicated for a wizard like " + this.state.character.name + ".\n                But the sheer weight of the pulled object makes the task harder."),
            this.text("[x] Finally, about three steps away there is a narrow cleft in the cliff's wall. The path continues inside turning left and right.\n                It is not possible to see where it leads, but it goes in the general direction of the cave, so hopefully it leads inside.\n                The tunnel's walls are wet with moisture, probably because of the proximity to the waterfall.\n                Trying to traverse this path seems to be a good choice for someone who is thin (but even if you aren't, nothing stops you from trying)."),
            new StoryChoice_1.StoryChoice('use strength to open the door', '1'),
            new StoryChoice_1.StoryChoice('use enhanced strength', '2'),
            new StoryChoice_1.StoryChoice('use magic', '3'),
            new StoryChoice_1.StoryChoice('go through the narrow tunnel', '4'),
        ];
    };
    PreCaveEntranceScene.prototype.receiveChoice = function (choice) {
        switch (choice) {
            case '1':
                this.nextSceneCtor = CaveEntranceStrengthScene;
                break;
            case '2':
                this.nextSceneCtor = CaveEntranceEnhancedStrengthScene;
                break;
            case '3':
                this.nextSceneCtor = CaveEntranceMagicScene;
                break;
            case '4':
                this.nextSceneCtor = CaveEntranceTunnelScene;
                break;
        }
    };
    return PreCaveEntranceScene;
}(BaseScene_1.BaseScene));
exports.PreCaveEntranceScene = PreCaveEntranceScene;
var CaveEntranceStrengthBaseScene = /** @class */ (function (_super) {
    __extends(CaveEntranceStrengthBaseScene, _super);
    function CaveEntranceStrengthBaseScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CaveEntranceStrengthBaseScene.prototype, "mainText", {
        get: function () {
            return string_1.upperFirst(this.heShe) + " sticks " + this.hisHer + " dagger\n            into the gap between the wall and the door\n            and pulls with all " + this.hisHer + " might.";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaveEntranceStrengthBaseScene.prototype, "successText", {
        get: function () {
            return "Slowly, inch by inch, the door opens. Success! After opening a gap\n            " + this.state.character.name + " widens it the rest of the way and enters the cave.";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaveEntranceStrengthBaseScene.prototype, "failureText", {
        get: function () {
            return "For several minutes " + this.state.character.name + " pushes and pulls while making grunting noises. But the door will not budge.";
        },
        enumerable: true,
        configurable: true
    });
    return CaveEntranceStrengthBaseScene;
}(BaseScene_1.BaseScene));
var CaveEntranceStrengthScene = /** @class */ (function (_super) {
    __extends(CaveEntranceStrengthScene, _super);
    function CaveEntranceStrengthScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CaveEntranceStrengthScene.prototype.render = function () {
        var _this = this;
        this.energy = this.state.character.energy;
        var texts = [];
        texts.push(this.state.character.name + " decided to take brute-force approach with the door. " + this.mainText);
        texts.push(chars_1.Chars.mark + " energy -1");
        this.energy -= 1;
        this.succeeded = 3 <= this.state.character.strength;
        texts.push(chars_1.getSuccessFailureChar(this.succeeded) + " need strength: " + strength_1.strengthToText(3));
        if (this.succeeded)
            texts.push(this.successText);
        else
            texts.push(this.failureText);
        return texts.map(function (t) { return _this.text(t); });
    };
    CaveEntranceStrengthScene.prototype.receiveChoice = function () {
        this.state.character.energy = this.energy;
        if (this.succeeded) {
            this.nextSceneCtor = CaveTraverseScene;
        }
        else {
            this.nextSceneCtor = PreCaveEntranceScene;
        }
    };
    return CaveEntranceStrengthScene;
}(CaveEntranceStrengthBaseScene));
exports.CaveEntranceStrengthScene = CaveEntranceStrengthScene;
var CaveEntranceEnhancedStrengthScene = /** @class */ (function (_super) {
    __extends(CaveEntranceEnhancedStrengthScene, _super);
    function CaveEntranceEnhancedStrengthScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CaveEntranceEnhancedStrengthScene.prototype.render = function () {
        var _this = this;
        this.energy = this.state.character.energy;
        var texts = [];
        texts.push(this.state.character.name + " casts a spell to temporarily enhance " + this.hisHer + " strength. " + this.mainText);
        texts.push(chars_1.Chars.mark + " energy -2");
        this.energy -= 2;
        // Note: with current character creation logic, this always succeeds
        this.succeeded = 3 <= this.state.character.strength + this.state.character.magic;
        texts.push(chars_1.getSuccessFailureChar(this.succeeded) + " need strength + magic: 3");
        if (this.succeeded)
            texts.push(this.successText);
        else
            texts.push(this.failureText);
        return texts.map(function (t) { return _this.text(t); });
    };
    CaveEntranceEnhancedStrengthScene.prototype.receiveChoice = function () {
        this.state.character.energy = this.energy;
        if (this.succeeded) {
            this.nextSceneCtor = CaveTraverseScene;
        }
        else {
            this.nextSceneCtor = PreCaveEntranceScene;
        }
    };
    return CaveEntranceEnhancedStrengthScene;
}(CaveEntranceStrengthBaseScene));
exports.CaveEntranceEnhancedStrengthScene = CaveEntranceEnhancedStrengthScene;
var CaveEntranceMagicScene = /** @class */ (function (_super) {
    __extends(CaveEntranceMagicScene, _super);
    function CaveEntranceMagicScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CaveEntranceMagicScene.prototype.render = function () {
        var _this = this;
        this.energy = this.state.character.energy;
        this.succeeded = 3 <= this.state.character.magic;
        var texts = [];
        texts.push(this.state.character.name + " casts a spell to pull the stone door open.");
        texts.push(chars_1.Chars.mark + " energy -1");
        this.energy -= 1;
        texts.push(chars_1.getSuccessFailureChar(this.succeeded) + " need magic: " + magic_1.magicPowerToText(3));
        if (this.succeeded)
            texts.push("Slowly but surely, the door opens. Success!");
        else
            texts.push("But the spell is not strong enough. The door remains sealed. " + this.state.character.name + " is out of breath from the effort.");
        return texts.map(function (t) { return _this.text(t); });
    };
    CaveEntranceMagicScene.prototype.receiveChoice = function () {
        this.state.character.energy = this.energy;
        if (this.succeeded) {
            this.nextSceneCtor = CaveTraverseScene;
        }
        else {
            this.nextSceneCtor = PreCaveEntranceScene;
        }
    };
    return CaveEntranceMagicScene;
}(BaseScene_1.BaseScene));
exports.CaveEntranceMagicScene = CaveEntranceMagicScene;
var StuckChoice;
(function (StuckChoice) {
    StuckChoice["back"] = "b";
    StuckChoice["forward"] = "f";
})(StuckChoice || (StuckChoice = {}));
var CaveEntranceTunnelBaseScene = /** @class */ (function (_super) {
    __extends(CaveEntranceTunnelBaseScene, _super);
    function CaveEntranceTunnelBaseScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CaveEntranceTunnelBaseScene.prototype, "entranceReachedText", {
        get: function () {
            return "After taking several turns left and right " + this.heShe + " emerges into a dark cave.\n            " + string_1.upperFirst(this.heShe) + " conjures some light and sure enough sees the stone door on the right,\n            this time from the inside.";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaveEntranceTunnelBaseScene.prototype, "goStuckText", {
        get: function () {
            return "It goes well at first.\n            But then " + this.heShe + " reaches a tight spot... When " + this.heShe + " tries to go through,\n            it turns out that the gap is not wide enough for " + this.himHer + ". With " + this.hisHer + "\n            body pressed against the stone walls on both sides, should " + this.state.character.name + " attempt to pull " + this.himselfHerself + " through forcefully?\n            " + string_1.upperFirst(this.heShe) + " is not stuck yet, but " + this.heShe + " might get stuck fast if " + this.heShe + " tries that.";
        },
        enumerable: true,
        configurable: true
    });
    return CaveEntranceTunnelBaseScene;
}(BaseScene_1.BaseScene));
var CaveEntranceTunnelScene = /** @class */ (function (_super) {
    __extends(CaveEntranceTunnelScene, _super);
    function CaveEntranceTunnelScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CaveEntranceTunnelScene.prototype, "stuckChoices", {
        get: function () {
            return [new StoryChoice_1.StoryChoice('go back', StuckChoice.back), new StoryChoice_1.StoryChoice('go forward', StuckChoice.forward)];
        },
        enumerable: true,
        configurable: true
    });
    CaveEntranceTunnelScene.prototype.render = function () {
        var _this = this;
        var texts = [];
        var choices = [];
        this.succeeded = false;
        texts.push(this.state.character.name + " decides to go through the narrow cleft.");
        if (this.state.character.bodyType == BodyType_1.BodyType.thin) {
            texts.push("(" + chars_1.Chars.checkMark + " thin) " + string_1.upperFirst(this.heShe) + " goes through the whole path easily, even past the tightest spot.\n                " + this.entranceReachedText);
            this.succeeded = true;
        }
        if (this.state.character.bodyType == BodyType_1.BodyType.average) {
            texts.push("(" + chars_1.Chars.checkMark + " body type: average). When " + this.heShe + " reaches the tightest spot\n                it almost seems that there might be not enough space but " + this.heShe + " manages to pass it fairly easily,\n                barely avoiding touching the walls. " + this.entranceReachedText);
            this.succeeded = true;
        }
        if (this.state.character.bodyType == BodyType_1.BodyType.chubby) {
            texts.push("(" + chars_1.Chars.mark + " body type: chubby). " + this.goStuckText);
            choices.push.apply(choices, this.stuckChoices);
        }
        if (this.state.character.bodyType == BodyType_1.BodyType.fat) {
            texts.push("(" + chars_1.Chars.mark + " body type: fat). " + this.goStuckText);
            choices.push.apply(choices, this.stuckChoices);
        }
        return __spreadArrays(texts.map(function (t) { return _this.text(t); }), choices);
    };
    CaveEntranceTunnelScene.prototype.receiveChoice = function (choice) {
        if (this.succeeded) {
            this.nextSceneCtor = CaveTraverseScene;
        }
        else {
            switch (choice) {
                case StuckChoice.forward:
                    this.nextSceneCtor = CaveEntranceStuckScene;
                    break;
                case StuckChoice.back:
                    this.nextSceneCtor = CaveEntranceTunnelGoBackScene;
                    break;
            }
        }
    };
    return CaveEntranceTunnelScene;
}(CaveEntranceTunnelBaseScene));
exports.CaveEntranceTunnelScene = CaveEntranceTunnelScene;
var CaveEntranceTunnelGoBackScene = /** @class */ (function (_super) {
    __extends(CaveEntranceTunnelGoBackScene, _super);
    function CaveEntranceTunnelGoBackScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CaveEntranceTunnelGoBackScene.prototype.render = function () {
        return [this.text(this.state.character.name + " decided to turn back. " + string_1.upperFirst(this.heShe) + " reached the main entrance without incident.")];
    };
    CaveEntranceTunnelGoBackScene.prototype.receiveChoice = function () {
        this.nextSceneCtor = PreCaveEntranceScene;
    };
    return CaveEntranceTunnelGoBackScene;
}(BaseScene_1.BaseScene));
exports.CaveEntranceTunnelGoBackScene = CaveEntranceTunnelGoBackScene;
var CaveEntranceStuckScene = /** @class */ (function (_super) {
    __extends(CaveEntranceStuckScene, _super);
    function CaveEntranceStuckScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CaveEntranceStuckScene.prototype.render = function () {
        this.energy = this.state.character.energy;
        this.succeeded = false;
        var elements = [];
        elements.push(this.text(this.state.character.name + " tries to squeeze through the tight spot."));
        if (this.state.character.bodyType == BodyType_1.BodyType.chubby) {
            elements.push(this.text(chars_1.Chars.checkMark + " body type: chubby. With some effort,\n                    " + this.state.character.name + " managed to squeeze through successfully;\n                    even though at one point " + this.heShe + " almost got stuck for good.\n                    " + this.hisHer + " " + this.state.character.getTopClothingShortText() + " is now somewhat dirty and slightly torn."), this.text(chars_1.Chars.mark + " energy -1"));
            this.energy -= 1;
            this.succeeded = true;
        }
        else if (this.state.character.bodyType == BodyType_1.BodyType.fat) {
            elements.push(this.text(chars_1.Chars.failMark + " body type: fat.\n                    " + this.state.character.name + " tries to squeeze through the tight spot but ends up getting stuck fast.\n                    Now " + this.heShe + " can't move neither forward nor backward! It was a bad idea."), this.text("While " + this.state.character.name + " contemplates solemnly what to do next,\n                    " + this.heShe + " hears a rattling sound. Soon a giant spider emerges from around the corner\n                    and attacks " + this.himHer + " sensing easy prey!\n                    " + this.state.character.name + " cannot fight back efficiently because " + this.heShe + " is stuck."));
        }
        return elements;
    };
    CaveEntranceStuckScene.prototype.receiveChoice = function () {
        if (this.succeeded)
            this.nextSceneCtor = CaveTraverseScene;
        else
            this.nextSceneCtor = CommonScenes_1.commonScenes.GameOverScene;
        if (this.nextSceneCtor != null)
            this.state.character.energy = this.energy;
    };
    return CaveEntranceStuckScene;
}(BaseScene_1.BaseScene));
exports.CaveEntranceStuckScene = CaveEntranceStuckScene;
var CaveTraverseScene = /** @class */ (function (_super) {
    __extends(CaveTraverseScene, _super);
    function CaveTraverseScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CaveTraverseScene.prototype.render = function () {
        this.renown = this.state.renown;
        this.energy = this.state.character.energy;
        var elements = [];
        elements.push(this.text(this.state.character.name + " traverses the cave carefully\n            while holding a small magical light in " + this.hisHer + " hand and trying to spot possible traps."));
        elements.push(this.text("You may gain score depending on how much energy you spent solving cave-entrance puzzle"), this.text(chars_1.Chars.mark + " energy: " + this.energy));
        if (this.state.character.energy > 0) {
            elements.push(this.text(chars_1.Chars.checkMark + " score +" + this.energy));
            this.renown += this.state.character.energy;
        }
        else {
            elements.push(this.text(chars_1.Chars.mark + " score: no bonus"));
        }
        if (this.energy <= 1)
            elements.push(this.text(this.state.character.name + " stops to catch " + this.hisHer + " breath."));
        else
            elements.push(this.text(this.state.character.name + " is still full of energy."));
        if (this.state.character.energy <= 3)
            elements.push(this.text(chars_1.Chars.mark + " energy restored -> 3"));
        return elements;
    };
    CaveTraverseScene.prototype.receiveChoice = function () {
        this.nextSceneCtor = CommonScenes_1.commonScenes.CaveSpiderScene;
        this.state.character.energy = 3;
        this.state.renown = this.renown;
    };
    return CaveTraverseScene;
}(BaseScene_1.BaseScene));
exports.CaveTraverseScene = CaveTraverseScene;


/***/ }),

/***/ "./src/story/scenes/ArtifactRetrievalScenes.ts":
/*!*****************************************************!*\
  !*** ./src/story/scenes/ArtifactRetrievalScenes.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseScene_1 = __webpack_require__(/*! ../BaseScene */ "./src/story/BaseScene.ts");
var StoryChoice_1 = __webpack_require__(/*! ../../story-engine/src/common/StoryChoice */ "./src/story-engine/src/common/StoryChoice.ts");
var string_1 = __webpack_require__(/*! ../../story-engine/src/common/string */ "./src/story-engine/src/common/string.ts");
var CommonScenes_1 = __webpack_require__(/*! ./CommonScenes */ "./src/story/scenes/CommonScenes.ts");
var chars_1 = __webpack_require__(/*! ../chars */ "./src/story/chars.ts");
var BodyType_1 = __webpack_require__(/*! ../BodyType */ "./src/story/BodyType.ts");
var math_1 = __webpack_require__(/*! ../../story-engine/src/math */ "./src/story-engine/src/math.ts");
var magic_1 = __webpack_require__(/*! ../magic */ "./src/story/magic.ts");
var food_1 = __webpack_require__(/*! ../food */ "./src/story/food.ts");
var documentation = "\n    Jump:\n        Succeeds when (bodyType + 1 < strength).\n        thin (0 + 1) < (1) mediocre_strength = fail;\n        chubby (2 + 1) < (2) average strength = fail;\n        thin (0 + 1) < (2) average_strength = success;\n        average (1 + 1) < (3) strong_strength = success;\n    Fly:\n        Energy required to fly equals body type enum number.\n";
var ArtifactRetrievalBaseScene = /** @class */ (function (_super) {
    __extends(ArtifactRetrievalBaseScene, _super);
    function ArtifactRetrievalBaseScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ArtifactRetrievalBaseScene.prototype, "drownedText", {
        get: function () {
            return "We will never know exactly why but\n            " + this.characterName + "'s head never rises above the water level again.\n            It seems that the green liquid had some dangerous effect after all.";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArtifactRetrievalBaseScene.prototype, "flightCost", {
        get: function () {
            return math_1.lockNumberBetween(1, this.state.character.bodyType, 3);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArtifactRetrievalBaseScene.prototype, "drunkText", {
        get: function () {
            return "Having consumed too much magical liquid, " + this.characterName + " feels dizzy.\n            " + string_1.upperFirst(this.hisHer) + " hand slips and " + this.heShe + " falls into the pool head-first.";
        },
        enumerable: true,
        configurable: true
    });
    return ArtifactRetrievalBaseScene;
}(BaseScene_1.BaseScene));
var ArtifactRetrievalEntranceScene = /** @class */ (function (_super) {
    __extends(ArtifactRetrievalEntranceScene, _super);
    function ArtifactRetrievalEntranceScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArtifactRetrievalEntranceScene.prototype.render = function () {
        var elements = [
            this.text("The tunnel leads " + this.characterName + " into a large circular chamber.\n                At the center of the chamber there is a basin filled with green non-transparent liquid.\n                The water is glowing softly.\n                At the center of the pool a plinth made of stone rises slightly out of the water.\n                On top of the plinth a small prism is placed.\n                " + this.characterName + " comes closer and stops at the edge of the pool.\n                The prism seems to be made of green glass."),
            this.text(this.characterName + ": Finally found it. Now how do I get across?"),
            this.text("The plinth is slightly more than 1 meter away from the edge of the pool"),
        ];
        if (this.state.character.energy < 3)
            this.text(this.characterName + " stops to take a breath (energy restored -> 3).");
        return elements;
    };
    ArtifactRetrievalEntranceScene.prototype.receiveChoice = function () {
        this.nextSceneCtor = ArtifactRetrievalGapChoiceScene;
        this.state.character.energy = 3;
    };
    return ArtifactRetrievalEntranceScene;
}(BaseScene_1.BaseScene));
exports.ArtifactRetrievalEntranceScene = ArtifactRetrievalEntranceScene;
CommonScenes_1.commonScenes.ArtifactRetrievalEntranceScene = ArtifactRetrievalEntranceScene;
var ArtifactRetrievalGapChoiceScene = /** @class */ (function (_super) {
    __extends(ArtifactRetrievalGapChoiceScene, _super);
    function ArtifactRetrievalGapChoiceScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArtifactRetrievalGapChoiceScene.prototype.render = function () {
        var textStart = this.state.artifactIsPicked
            ? "How should " + this.characterName + " cross the gap on " + this.hisHer + " way back?\n                " + string_1.upperFirst(this.heShe) + " has to cross the pool of water again to get from the stone island to the mainland."
            : "How should " + this.characterName + " cross the gap?";
        return [
            this.text(textStart + " The glowing water might be not safe.\n                " + string_1.upperFirst(this.heShe) + " cannot tell how deep the pool is, because the water is not transparent."),
            this.text("[x] " + this.characterName + " can try to jump across the water but it is probably going to be difficult"),
            this.text("[x] " + this.characterName + " can fly above the water using a magic spell"),
            this.text("[x] " + this.characterName + " can swim carefully while trying to keep " + this.hisHer + " head above the water all the time\n                and not letting the water get accidentally get into " + this.hisHer + " mouth"),
            this.text("[x] " + this.characterName + " can try to drink the water, though it is highly unlikely that " + this.heShe + " can drain the pool this way"),
            new StoryChoice_1.StoryChoice("jump", '1'),
            new StoryChoice_1.StoryChoice("fly", '2'),
            new StoryChoice_1.StoryChoice("swim", '3'),
            new StoryChoice_1.StoryChoice("drink", '4'),
        ];
    };
    ArtifactRetrievalGapChoiceScene.prototype.receiveChoice = function (choice) {
        switch (choice) {
            case '1':
                this.nextSceneCtor = ArtifactRetrievalJumpScene;
                break;
            case '2':
                this.nextSceneCtor = ArtifactRetrievalConsiderFlyScene;
                break;
            case '3':
                this.nextSceneCtor = ArtifactRetrievalSwimScene;
                break;
            case '4':
                this.nextSceneCtor = ArtifactRetrievalDrinkScene;
                break;
        }
    };
    return ArtifactRetrievalGapChoiceScene;
}(BaseScene_1.BaseScene));
exports.ArtifactRetrievalGapChoiceScene = ArtifactRetrievalGapChoiceScene;
var ArtifactRetrievalJumpScene = /** @class */ (function (_super) {
    __extends(ArtifactRetrievalJumpScene, _super);
    function ArtifactRetrievalJumpScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArtifactRetrievalJumpScene.prototype.render = function () {
        return this.isTooFull ? this.renderTooFullPath() : this.renderNormalPath();
    };
    ArtifactRetrievalJumpScene.prototype.renderTooFullPath = function () {
        return [
            this.text(this.characterName + " considers jumping, however " + this.heShe + " can't do it\n                because " + this.heShe + " feels " + food_1.fullnessToText(this.state.character.fullness) + "."),
            this.text(this.characterName + ": Oof! Why did I have to drink this stupid stuff? No way I'm jumping now...")
        ];
    };
    ArtifactRetrievalJumpScene.prototype.renderNormalPath = function () {
        this.localEnergy = this.state.character.energy;
        this.success = this.state.character.bodyType + 1 < this.state.character.strength;
        var partialSuccess = this.state.character.bodyType < this.state.character.strength;
        var successText = "(" + chars_1.Chars.checkMark + " str & wgt) Success. " + this.characterName + " lands on the plinth gracefully";
        var partialSuccessText = "(" + chars_1.Chars.mark + " str & wgt, partial)\n            " + this.characterName + " lands very close to the plinth but not close enough.\n            " + string_1.upperFirst(this.heShe) + " hits the plinth at an awkward angle and slips into the green liquid.\n            " + this.drownedText;
        var failureText = "(" + chars_1.Chars.failMark + " str & wgt)\n            " + this.characterName + " could not jump far enough to cross the gap (not even close) and\n            fell into the green water in between the plinth and the edge from which " + this.heShe + " jumped from.\n            " + this.drownedText;
        this.localEnergy -= 1;
        var elements = [
            this.text(this.characterName + " decides to jump across the water onto the plinth.")
        ];
        elements.push(this.text(chars_1.Chars.mark + " energy -1"));
        if (this.success)
            elements.push(this.text(chars_1.Chars.mark + " score +1"));
        var actionDescriptionText = this.success
            ? this.text(successText)
            : partialSuccess
                ? this.text(partialSuccessText)
                : this.text(failureText);
        elements.push(actionDescriptionText);
        return elements;
    };
    Object.defineProperty(ArtifactRetrievalJumpScene.prototype, "successText", {
        get: function () {
            return "(" + chars_1.Chars.checkMark + " str & wgt) Success. " + this.characterName + " lands on the plinth gracefully";
        },
        enumerable: true,
        configurable: true
    });
    ArtifactRetrievalJumpScene.prototype.receiveChoice = function () {
        if (this.isTooFull) {
            this.nextSceneCtor = ArtifactRetrievalGapChoiceScene;
        }
        else {
            if (this.success) {
                if (this.state.artifactIsPicked)
                    this.nextSceneCtor = ArtifactRetrievalExitScene;
                else
                    this.nextSceneCtor = ArtifactRetrievalGrabScene;
            }
            else
                this.nextSceneCtor = CommonScenes_1.commonScenes.GameOverScene;
            if (this.nextSceneCtor != null) {
                this.state.character.energy = this.localEnergy;
                if (this.success)
                    this.state.renown += 1;
            }
        }
    };
    Object.defineProperty(ArtifactRetrievalJumpScene.prototype, "isTooFull", {
        get: function () {
            return this.state.character.fullness >= food_1.FullnessLevel.veryBloated;
        },
        enumerable: true,
        configurable: true
    });
    return ArtifactRetrievalJumpScene;
}(ArtifactRetrievalBaseScene));
exports.ArtifactRetrievalJumpScene = ArtifactRetrievalJumpScene;
var ArtifactRetrievalConsiderFlyScene = /** @class */ (function (_super) {
    __extends(ArtifactRetrievalConsiderFlyScene, _super);
    function ArtifactRetrievalConsiderFlyScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArtifactRetrievalConsiderFlyScene.prototype.render = function () {
        this.canFly = this.state.character.magic > 1;
        var elements = [
            this.text(this.characterName + " considers using spell of flight. The amount of energy\n                required for the spell depends on " + this.hisHer + " body weight.")
        ];
        if (this.canFly) {
            switch (this.flightCost) {
                case 1:
                    elements.push(this.text('The spell requires only a little energy: 1.'));
                    break;
                case 2:
                    elements.push(this.text("The spell requires an average amount of energy: 2"));
                    break;
                case 3:
                    elements.push(this.text("The spell requires a large amount of energy: 3"));
                    break;
            }
            elements.push(this.text(this.characterName + " currently has " + this.state.character.energy + " energy."), new StoryChoice_1.StoryChoice('fly', '1'), new StoryChoice_1.StoryChoice('reconsider', '2'));
        }
        else {
            elements.push(this.text(this.characterName + "'s magic mastery level is\n                " + magic_1.magicPowerToText(this.state.character.magic) + ", which is not enough to fly."), new StoryChoice_1.StoryChoice('reconsider', '2'));
        }
        return elements;
    };
    ArtifactRetrievalConsiderFlyScene.prototype.receiveChoice = function (choiceId) {
        switch (choiceId) {
            case '1':
                if (this.canFly)
                    this.nextSceneCtor = ArtifactRetrievalFlyScene;
                break;
            case '2':
                this.nextSceneCtor = ArtifactRetrievalGapChoiceScene;
                break;
        }
    };
    return ArtifactRetrievalConsiderFlyScene;
}(ArtifactRetrievalBaseScene));
exports.ArtifactRetrievalConsiderFlyScene = ArtifactRetrievalConsiderFlyScene;
var FlyOutcome;
(function (FlyOutcome) {
    FlyOutcome[FlyOutcome["none"] = 0] = "none";
    FlyOutcome[FlyOutcome["success"] = 1] = "success";
    FlyOutcome[FlyOutcome["drowned"] = 2] = "drowned";
})(FlyOutcome || (FlyOutcome = {}));
var ArtifactRetrievalFlyScene = /** @class */ (function (_super) {
    __extends(ArtifactRetrievalFlyScene, _super);
    function ArtifactRetrievalFlyScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArtifactRetrievalFlyScene.prototype.render = function () {
        var _this = this;
        var elements = [];
        this.remainingEnergy = this.state.character.energy - this.flightCost;
        var reportOutcome = function (outcome, text) {
            elements.push(_this.text(text));
            _this.outcome = outcome;
        };
        if (this.state.character.energy <= 0)
            reportOutcome(FlyOutcome.none, this.characterName + " attempts to take off but " + this.heShe + " is too tired (no energy).");
        else if (this.remainingEnergy >= 0)
            reportOutcome(FlyOutcome.success, this.characterName + " flew over the green water easily and landed onto the stone floor.");
        else if (this.remainingEnergy >= -1)
            reportOutcome(FlyOutcome.success, this.characterName + " flies over the green water but, having made half of the way,\n                " + this.heShe + " feels drained and has to give it " + this.hisHer + " all to avoid plummeting down.\n                " + this.characterName + " lands onto the stone floor exhausted and stops to catch " + this.hisHer + " breath.");
        else if (this.remainingEnergy < -1)
            reportOutcome(FlyOutcome.drowned, this.characterName + " flies over the green water but, having made half of the way,\n                " + this.heShe + " feels drained and tries to give it " + this.hisHer + " all to avoid plummeting down.\n                Unfortunately, it's not enough and " + this.heShe + " falls into the glowing green water. " + this.drownedText);
        if (this.outcome != FlyOutcome.none)
            elements.push(this.text(chars_1.Chars.mark + " energy -" + this.flightCost));
        if (this.outcome == FlyOutcome.success)
            elements.push(this.text(chars_1.Chars.mark + " score +1"));
        return elements;
    };
    ArtifactRetrievalFlyScene.prototype.receiveChoice = function () {
        switch (this.outcome) {
            case FlyOutcome.none:
                this.nextSceneCtor = ArtifactRetrievalGapChoiceScene;
                break;
            case FlyOutcome.success:
                if (this.state.artifactIsPicked)
                    this.nextSceneCtor = ArtifactRetrievalExitScene;
                else
                    this.nextSceneCtor = ArtifactRetrievalGrabScene;
                this.state.character.energy = this.remainingEnergy;
                this.state.renown += 1;
                break;
            case FlyOutcome.drowned:
                this.nextSceneCtor = CommonScenes_1.commonScenes.GameOverScene;
                this.state.character.energy = this.remainingEnergy;
                break;
            default:
                console.warn('Unexpected outcome: ' + this.outcome);
        }
    };
    return ArtifactRetrievalFlyScene;
}(ArtifactRetrievalBaseScene));
exports.ArtifactRetrievalFlyScene = ArtifactRetrievalFlyScene;
var ArtifactRetrievalGrabScene = /** @class */ (function (_super) {
    __extends(ArtifactRetrievalGrabScene, _super);
    function ArtifactRetrievalGrabScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArtifactRetrievalGrabScene.prototype.render = function () {
        var elements = [
            this.text("Having reached " + this.hisHer + " destination,\n                " + this.characterName + " grabs the prism. It shimmers slightly in the dim light."),
            new StoryChoice_1.StoryChoice('cheerful', '1'),
            new StoryChoice_1.StoryChoice('annoyed', '2')
        ];
        return elements;
    };
    ArtifactRetrievalGrabScene.prototype.receiveChoice = function (choiceId) {
        var choice = parseInt(choiceId);
        var choiceIsValid = !isNaN(choice);
        if (choiceIsValid) {
            this.state.artifactGrabReaction = choice;
            this.nextSceneCtor = ArtifactRetrievalGrabReactScene;
        }
        if (this.nextSceneCtor != null)
            this.state.artifactIsPicked = true;
    };
    return ArtifactRetrievalGrabScene;
}(ArtifactRetrievalBaseScene));
exports.ArtifactRetrievalGrabScene = ArtifactRetrievalGrabScene;
var ArtifactRetrievalGrabReactScene = /** @class */ (function (_super) {
    __extends(ArtifactRetrievalGrabReactScene, _super);
    function ArtifactRetrievalGrabReactScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArtifactRetrievalGrabReactScene.prototype.render = function () {
        var thoughts;
        switch (this.state.artifactGrabReaction) {
            case 1:
                thoughts = "Ooh, so this must be the Prims of Life? Fascinating.\n                    And I did a good job finding it.\n                    I mean, there's nobody around to praise me, so I might as well do that myself.\n                    Now let's head back.";
                break;
            case 2:
                thoughts = "So this must be the so-called Prism of Life? Whatever.\n                    I can't believe what I had to go through to get it.\n                    A giant spider? Stupid glowing water?\n                    At least now I can finally head back.";
                break;
        }
        var elements = [this.text(this.characterName + ': ' + thoughts)];
        return elements;
    };
    ArtifactRetrievalGrabReactScene.prototype.receiveChoice = function () {
        this.nextSceneCtor = ArtifactRetrievalGapChoiceScene;
    };
    return ArtifactRetrievalGrabReactScene;
}(ArtifactRetrievalBaseScene));
exports.ArtifactRetrievalGrabReactScene = ArtifactRetrievalGrabReactScene;
var ArtifactRetrievalSwimScene = /** @class */ (function (_super) {
    __extends(ArtifactRetrievalSwimScene, _super);
    function ArtifactRetrievalSwimScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArtifactRetrievalSwimScene.prototype.render = function () {
        var thick = this.state.character.bodyType == BodyType_1.BodyType.fat ? 'thick ' : '';
        return [
            this.text(this.characterName + " decides to swim across.\n                Carefully " + this.heShe + " sits on the edge and lowers " + this.hisHer + " first " + thick + "leg into the green water, then the other.\n                Afterwards " + this.heShe + " proceeds to lower " + this.hisHer + " whole body up to " + this.hisHer + " neck and swim."),
            this.text(this.characterName + " managed to reach the opposite edge safely without swallowing any liquid.\n                However " + this.hisHer + " " + this.state.character.getTopClothingShortText() + " is now soaked wet" + this.clothingAsWell),
            this.text(chars_1.Chars.mark + " no score gain")
        ];
    };
    Object.defineProperty(ArtifactRetrievalSwimScene.prototype, "clothingAsWell", {
        get: function () {
            var bottomClothingText = this.state.character.getBottomClothingShortText();
            return bottomClothingText != null ? " as well as " + this.hisHer + " " + bottomClothingText : '';
        },
        enumerable: true,
        configurable: true
    });
    ArtifactRetrievalSwimScene.prototype.receiveChoice = function () {
        if (this.state.artifactIsPicked)
            this.nextSceneCtor = ArtifactRetrievalExitScene;
        else
            this.nextSceneCtor = ArtifactRetrievalGrabScene;
    };
    return ArtifactRetrievalSwimScene;
}(ArtifactRetrievalBaseScene));
exports.ArtifactRetrievalSwimScene = ArtifactRetrievalSwimScene;
var ArtifactRetrievalDrinkScene = /** @class */ (function (_super) {
    __extends(ArtifactRetrievalDrinkScene, _super);
    function ArtifactRetrievalDrinkScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArtifactRetrievalDrinkScene.prototype.render = function () {
        this.localFullness = this.state.character.fullness + 1;
        var elements = [
            this.text("For better or worse, " + this.characterName + " decides to drink the liquid from the pool.\n                " + string_1.upperFirst(this.heShe) + " gets on " + this.hisHer + " knees and lowers\n                " + this.hisHer + " head awkwardly to the ground level.\n                Then " + this.heShe + " starts to drink. The liquid tastes funny but not bad.\n                " + this.characterName + " gulps down about 1 glass worth of liquid in volume."),
            this.text(chars_1.Chars.mark + ' ' + this.characterName + ' now feels ' + food_1.fullnessToText(this.localFullness)),
        ];
        if (this.localFullness <= food_1.FullnessLevel.veryBloated) {
            elements.push(new StoryChoice_1.StoryChoice('continue drinking', '1'));
            elements.push(new StoryChoice_1.StoryChoice('think better of it', '2'));
        }
        else {
            elements.push(this.text(this.drunkText), this.text(this.drownedText));
            this.tooFull = true;
        }
        return elements;
    };
    ArtifactRetrievalDrinkScene.prototype.receiveChoice = function (choiceId) {
        if (this.tooFull)
            this.nextSceneCtor = CommonScenes_1.commonScenes.GameOverScene;
        else if (choiceId == '1') // continue
            this.nextSceneCtor = ArtifactRetrievalContinuedDrinkScene;
        else if (choiceId == '2') { // cancel
            if (this.localFullness < 2)
                this.nextSceneCtor = ArtifactRetrievalDrinkCancelScene;
            else
                this.nextSceneCtor = ArtifactRetrievalDrinkCancelAttemptScene;
        }
        if (this.nextSceneCtor != null)
            this.state.character.fullness = this.localFullness;
    };
    return ArtifactRetrievalDrinkScene;
}(ArtifactRetrievalBaseScene));
exports.ArtifactRetrievalDrinkScene = ArtifactRetrievalDrinkScene;
var ArtifactRetrievalDrinkCancelScene = /** @class */ (function (_super) {
    __extends(ArtifactRetrievalDrinkCancelScene, _super);
    function ArtifactRetrievalDrinkCancelScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArtifactRetrievalDrinkCancelScene.prototype.render = function () {
        var elements = [
            this.text(this.characterName + " stands up and brushes the dust off " + this.hisHer + "\n                " + this.state.character.getInferredBottomClothingShortText() + ".")
        ];
        if (this.state.character.fullness >= food_1.FullnessLevel.stuffed)
            elements.push(this.text(string_1.upperFirst(this.heShe) + " feels liquid sloshing in " + this.hisHer + " stomach."));
        return elements;
    };
    ArtifactRetrievalDrinkCancelScene.prototype.receiveChoice = function () {
        this.nextSceneCtor = ArtifactRetrievalGapChoiceScene;
    };
    return ArtifactRetrievalDrinkCancelScene;
}(ArtifactRetrievalBaseScene));
exports.ArtifactRetrievalDrinkCancelScene = ArtifactRetrievalDrinkCancelScene;
var ArtifactRetrievalDrinkCancelAttemptScene = /** @class */ (function (_super) {
    __extends(ArtifactRetrievalDrinkCancelAttemptScene, _super);
    function ArtifactRetrievalDrinkCancelAttemptScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArtifactRetrievalDrinkCancelAttemptScene.prototype.render = function () {
        var elements = [];
        this.localFullness = this.state.character.fullness;
        if (this.localFullness < food_1.FullnessLevel.veryBloated) {
            elements.push(this.text(this.characterName + " tries to stop drinking the liquid,\n                however the liquid's taste is too addictive.\n                " + string_1.upperFirst(this.heShe) + " continues drinking the magical liquid greedily."));
            this.localFullness += 1;
        }
        else {
            elements.push(this.text("The liquid's taste is very addictive,\n                however " + this.characterName + " manages to stop drinking it at last."));
            this.stopped = true;
        }
        elements.push(this.text(chars_1.Chars.mark + ' ' + this.characterName + ' now feels ' + food_1.fullnessToText(this.localFullness)));
        if (!this.stopped) {
            elements.push(new StoryChoice_1.StoryChoice('continue drinking', '1'));
            elements.push(new StoryChoice_1.StoryChoice('stop drinking', '2'));
        }
        return elements;
    };
    ArtifactRetrievalDrinkCancelAttemptScene.prototype.receiveChoice = function (choiceId) {
        if (this.stopped)
            this.nextSceneCtor = ArtifactRetrievalDrinkCancelScene;
        else if (choiceId == '1')
            this.nextSceneCtor = ArtifactRetrievalContinuedDrinkScene;
        else if (choiceId == '2')
            this.nextSceneCtor = ArtifactRetrievalDrinkCancelAttemptScene;
        if (this.nextSceneCtor != null)
            this.state.character.fullness = this.localFullness;
    };
    return ArtifactRetrievalDrinkCancelAttemptScene;
}(ArtifactRetrievalBaseScene));
exports.ArtifactRetrievalDrinkCancelAttemptScene = ArtifactRetrievalDrinkCancelAttemptScene;
var ArtifactRetrievalContinuedDrinkScene = /** @class */ (function (_super) {
    __extends(ArtifactRetrievalContinuedDrinkScene, _super);
    function ArtifactRetrievalContinuedDrinkScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArtifactRetrievalContinuedDrinkScene.prototype.render = function () {
        this.localFullness = this.state.character.fullness + 1;
        var elements = [this.text(this.characterName + " drinks liquid from the pool. Its taste is somewhat addictive"),
            this.text(chars_1.Chars.mark + ' ' + this.characterName + ' now feels ' + food_1.fullnessToText(this.localFullness)),
        ];
        if (this.localFullness <= food_1.FullnessLevel.veryBloated) {
            elements.push(new StoryChoice_1.StoryChoice('continue drinking', '1'));
            elements.push(new StoryChoice_1.StoryChoice('stop drinking', '2'));
        }
        else {
            elements.push(this.text(this.drunkText), this.text(this.drownedText));
            this.tooFull = true;
        }
        return elements;
    };
    ArtifactRetrievalContinuedDrinkScene.prototype.receiveChoice = function (choiceId) {
        if (this.tooFull)
            this.nextSceneCtor = CommonScenes_1.commonScenes.GameOverScene;
        else if (choiceId == '1')
            this.nextSceneCtor = ArtifactRetrievalContinuedDrinkScene;
        else if (choiceId == '2')
            this.nextSceneCtor = ArtifactRetrievalDrinkCancelAttemptScene;
        if (this.nextSceneCtor != null)
            this.state.character.fullness = this.localFullness;
    };
    return ArtifactRetrievalContinuedDrinkScene;
}(ArtifactRetrievalBaseScene));
exports.ArtifactRetrievalContinuedDrinkScene = ArtifactRetrievalContinuedDrinkScene;
var ArtifactRetrievalExitScene = /** @class */ (function (_super) {
    __extends(ArtifactRetrievalExitScene, _super);
    function ArtifactRetrievalExitScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArtifactRetrievalExitScene.prototype.render = function () {
        var elements = [
            this.text("On " + this.hisHer + " way back " + this.characterName + " doesn't encounter any more dangers or difficulties.\n                " + string_1.upperFirst(this.heShe) + " returns to the cave entrance with the Prism of Life in hand."),
            this.text(chars_1.Chars.mark + " This is the end of the prototype game content."),
            this.text(chars_1.Chars.mark + " Your score: " + this.state.renown)
        ];
        return elements;
    };
    return ArtifactRetrievalExitScene;
}(ArtifactRetrievalBaseScene));
exports.ArtifactRetrievalExitScene = ArtifactRetrievalExitScene;


/***/ }),

/***/ "./src/story/scenes/ArtifactSpiderScenes.ts":
/*!**************************************************!*\
  !*** ./src/story/scenes/ArtifactSpiderScenes.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseScene_1 = __webpack_require__(/*! ../BaseScene */ "./src/story/BaseScene.ts");
var StoryChoice_1 = __webpack_require__(/*! ../../story-engine/src/common/StoryChoice */ "./src/story-engine/src/common/StoryChoice.ts");
var CommonScenes_1 = __webpack_require__(/*! ./CommonScenes */ "./src/story/scenes/CommonScenes.ts");
var chars_1 = __webpack_require__(/*! ../chars */ "./src/story/chars.ts");
var strength_1 = __webpack_require__(/*! ../strength */ "./src/story/strength.ts");
var string_1 = __webpack_require__(/*! ../../story-engine/src/common/string */ "./src/story-engine/src/common/string.ts");
var magic_1 = __webpack_require__(/*! ../magic */ "./src/story/magic.ts");
var BodyType_1 = __webpack_require__(/*! ../BodyType */ "./src/story/BodyType.ts");
var CaveSpiderChoice;
(function (CaveSpiderChoice) {
    CaveSpiderChoice[CaveSpiderChoice["blast"] = 1] = "blast";
    CaveSpiderChoice[CaveSpiderChoice["punch"] = 2] = "punch";
    CaveSpiderChoice[CaveSpiderChoice["roll"] = 3] = "roll";
    CaveSpiderChoice[CaveSpiderChoice["playDead"] = 4] = "playDead";
})(CaveSpiderChoice || (CaveSpiderChoice = {}));
var CaveSpiderScene = /** @class */ (function (_super) {
    __extends(CaveSpiderScene, _super);
    function CaveSpiderScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CaveSpiderScene.prototype.render = function () {
        var elements = [];
        if (!this.state.caveSpider.introShown)
            elements.push(this.text("About 5 minutes have passed since " + this.state.character.name + " entered the cave.\n                    The journey have been uneventful so far.\n                    However " + this.heShe + " now hears a clicking sound somewhere nearby."), this.text("A giant spider jumps onto " + this.himHer + " from the dark corner.\n                    " + this.state.character.name + " falls to the ground."), this.text("Decide what to do to get out of this sticky situation."));
        else
            elements.push(this.text("How to fight the giant spider?"));
        elements.push(this.text(chars_1.Chars.mark + " energy left: " + this.state.character.energy), new StoryChoice_1.StoryChoice("blast the spider with magic", '' + CaveSpiderChoice.blast), new StoryChoice_1.StoryChoice("punch the spider", '' + CaveSpiderChoice.punch), this.state.caveSpider.rolled
            ? null
            : new StoryChoice_1.StoryChoice("roll on top of the spider", '' + CaveSpiderChoice.roll), new StoryChoice_1.StoryChoice("play dead", '' + CaveSpiderChoice.playDead));
        return elements.filter(function (e) { return e != null; });
    };
    CaveSpiderScene.prototype.receiveChoice = function (choiceString) {
        var choice = parseInt(choiceString);
        switch (choice) {
            case CaveSpiderChoice.blast:
                this.nextSceneCtor = CaveSpiderBlastScene;
                break;
            case CaveSpiderChoice.punch:
                this.nextSceneCtor = CaveSpiderPunchScene;
                break;
            case CaveSpiderChoice.roll:
                if (!this.state.caveSpider.rolled)
                    this.nextSceneCtor = CaveSpiderRollScene;
                break;
            case CaveSpiderChoice.playDead:
                this.nextSceneCtor = CaveSpiderPlayDeadScene;
                break;
        }
        if (this.nextSceneCtor != null)
            this.state.caveSpider.introShown = true;
    };
    return CaveSpiderScene;
}(BaseScene_1.BaseScene));
exports.CaveSpiderScene = CaveSpiderScene;
CommonScenes_1.commonScenes.CaveSpiderScene = CaveSpiderScene;
var CaveSpiderFightBaseScene = /** @class */ (function (_super) {
    __extends(CaveSpiderFightBaseScene, _super);
    function CaveSpiderFightBaseScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CaveSpiderFightBaseScene.prototype, "resumeAttackText", {
        get: function () {
            return "For a moment it looks disoriented,\n            but then it turns its multiple eyes back to " + this.state.character.name + " and hisses in " + this.hisHer + " face.";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaveSpiderFightBaseScene.prototype, "aggressiveAttackText", {
        get: function () {
            return "The monster spits some cobweb into " + this.characterName + "'s face.\n            " + string_1.upperFirst(this.heShe) + " frantically tries to get it off " + this.himHer + ".";
        },
        enumerable: true,
        configurable: true
    });
    CaveSpiderFightBaseScene.prototype.readLocals = function () {
        this.localEnergy = this.state.character.energy;
        this.localSpiderHealth = this.state.caveSpider.health;
    };
    CaveSpiderFightBaseScene.prototype.flushLocals = function () {
        this.state.character.energy = this.localEnergy;
        this.state.caveSpider.health = this.localSpiderHealth;
    };
    CaveSpiderFightBaseScene.prototype.receiveChoice = function (choice) {
        if (this.localSpiderHealth <= 0)
            this.nextSceneCtor = CaveSpiderDefeatedScene;
        else if (this.localEnergy <= 0)
            this.nextSceneCtor = CommonScenes_1.commonScenes.GameOverScene;
        else
            this.nextSceneCtor = CaveSpiderScene;
        if (this.nextSceneCtor != null)
            this.flushLocals();
    };
    return CaveSpiderFightBaseScene;
}(BaseScene_1.BaseScene));
exports.CaveSpiderFightBaseScene = CaveSpiderFightBaseScene;
var CaveSpiderBlastScene = /** @class */ (function (_super) {
    __extends(CaveSpiderBlastScene, _super);
    function CaveSpiderBlastScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CaveSpiderBlastScene.prototype.render = function () {
        this.readLocals();
        var elements = [];
        var magicText = magic_1.magicPowerToText(this.state.character.magic);
        var secondarilySucceeded = this.state.character.magic >= 2 && this.state.caveSpider.health <= 1;
        if (this.state.character.magic >= 3 || secondarilySucceeded) {
            elements.push(this.text(chars_1.Chars.checkMark + " magic " + magicText), this.text(this.characterName + " blasts the giant insect's head, and it almost evaporates! The spider drops dead."), this.text(chars_1.Chars.mark + " energy -1"));
            this.localEnergy -= 1;
            this.localSpiderHealth -= 2;
        }
        else if (this.state.character.magic >= 2) {
            elements.push(this.text(chars_1.Chars.mark + " magic " + magicText), this.text(this.characterName + " blasts the giant insect's head. " + this.resumeAttackText), this.text(chars_1.Chars.mark + " energy -1, spider health -1"));
            this.localEnergy -= 1;
            this.localSpiderHealth -= 1;
        }
        else {
            elements.push(this.text(chars_1.Chars.failMark + " magic: " + magicText), this.text(this.characterName + " blasts the giant insect's head as hard as " + this.heShe + " can,\n                    but it's not enough to hurt it."));
            this.localEnergy -= 1;
        }
        return elements;
    };
    return CaveSpiderBlastScene;
}(CaveSpiderFightBaseScene));
exports.CaveSpiderBlastScene = CaveSpiderBlastScene;
var CaveSpiderPunchScene = /** @class */ (function (_super) {
    __extends(CaveSpiderPunchScene, _super);
    function CaveSpiderPunchScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CaveSpiderPunchScene.prototype.render = function () {
        this.readLocals();
        var strengthText = strength_1.strengthToText(this.state.character.strength);
        var elements = [];
        var secondarilySucceeded = this.state.character.strength >= 2 && this.state.caveSpider.health <= 1;
        if (this.state.character.strength >= 3 || secondarilySucceeded) {
            elements.push(this.text(chars_1.Chars.checkMark + " strength: " + strengthText), this.text(this.state.character.name + " punched the giant insect in the head and knocked it out!\n                    To finish it off for good, " + this.heShe + " uses " + this.hisHer + " dagger."), this.text(chars_1.Chars.mark + " energy -1"));
            this.localEnergy -= 1;
            this.localSpiderHealth -= 2;
        }
        else if (this.state.character.strength >= 2) {
            elements.push(this.text(chars_1.Chars.mark + " strength " + strengthText), this.text(this.state.character.name + " punched the giant insect in the head. " + this.resumeAttackText), this.text(chars_1.Chars.mark + " energy -1, spider health -1"));
            this.localEnergy -= 1;
            this.localSpiderHealth -= 1;
        }
        else {
            elements.push(this.text(chars_1.Chars.failMark + " strength " + strengthText), this.text(this.characterName + " punched the giant insect in the head as hard as " + this.heShe + " could,\n                    but it was not enough to hurt it. " + this.aggressiveAttackText), this.text(chars_1.Chars.mark + " energy -1"));
            this.localEnergy -= 1;
        }
        return elements;
    };
    return CaveSpiderPunchScene;
}(CaveSpiderFightBaseScene));
exports.CaveSpiderPunchScene = CaveSpiderPunchScene;
var CaveSpiderRollScene = /** @class */ (function (_super) {
    __extends(CaveSpiderRollScene, _super);
    function CaveSpiderRollScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CaveSpiderRollScene.prototype.render = function () {
        this.readLocals();
        var elements = [];
        elements.push(this.text(this.characterName + " twists " + this.hisHer + " body and rolls on top of the spider!"));
        if (this.state.character.bodyType >= BodyType_1.BodyType.fat) {
            elements.push(this.text(chars_1.Chars.checkMark + " fat"), this.text("Although the spider is huge compared to normal spiders,\n                    it doesn't look that big near " + this.characterName + ".\n                    It starts panicking being pinned under " + this.hisHer + " weight.\n                    " + this.characterName + " has enough time to grab " + this.hisHer + " dagger and finish off the creature."), this.text(chars_1.Chars.mark + " energy -1"));
            this.localEnergy -= 1;
            this.localSpiderHealth -= 2;
        }
        else if (this.state.character.bodyType >= BodyType_1.BodyType.chubby) {
            this.localEnergy -= 1;
            this.localSpiderHealth -= 1;
            var spiderDied = this.localSpiderHealth <= 0;
            elements.push(this.text(chars_1.Chars.mark + " chubby"), this.text("Although the spider is huge compared to normal spiders,\n                    it doesn't look that big near " + this.characterName + ".\n                    It gets pinned under " + this.hisHer + " weight. " +
                (spiderDied
                    ? this.characterName + " has enough time to grab " + this.hisHer + " dagger and finish off the creature."
                    : "But seems like the creature still has some energy to fight back left in it. " + this.resumeAttackText)), this.text(chars_1.Chars.mark + " energy -1, spider health -1"));
        }
        else {
            elements.push(this.text(chars_1.Chars.failMark + " body weight"), this.text("However, it doesn't feel any inconvenience. " + this.aggressiveAttackText), this.text(chars_1.Chars.mark + " energy -1"));
            this.localEnergy -= 1;
        }
        return elements;
    };
    CaveSpiderRollScene.prototype.receiveChoice = function (choice) {
        _super.prototype.receiveChoice.call(this, choice);
        if (this.nextSceneCtor != null)
            this.state.caveSpider.rolled = true;
    };
    return CaveSpiderRollScene;
}(CaveSpiderFightBaseScene));
exports.CaveSpiderRollScene = CaveSpiderRollScene;
var CaveSpiderPlayDeadScene = /** @class */ (function (_super) {
    __extends(CaveSpiderPlayDeadScene, _super);
    function CaveSpiderPlayDeadScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CaveSpiderPlayDeadScene.prototype.render = function () {
        this.readLocals();
        var elements = [];
        this.localEnergy -= 1;
        return [
            this.text(this.characterName + " tries to play dead.\n                The giant spider looks at " + this.himHer + " for a short while\n                and starts to cover " + this.hisHer + " body with thick cobweb.\n                Looks like playing dead is not a good decision in this situation.\n                " + this.characterName + " tears cobwebs off " + this.hisHer + " body and face.\n                The spider makes an angry rattling sound."),
            this.text(chars_1.Chars.mark + " energy -1")
        ];
    };
    return CaveSpiderPlayDeadScene;
}(CaveSpiderFightBaseScene));
exports.CaveSpiderPlayDeadScene = CaveSpiderPlayDeadScene;
var CaveSpiderDefeatedScene = /** @class */ (function (_super) {
    __extends(CaveSpiderDefeatedScene, _super);
    function CaveSpiderDefeatedScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CaveSpiderDefeatedScene.prototype.render = function () {
        this.localRenown = this.state.renown;
        var elements = [];
        elements.push(this.text("Having dealt with the spider, " + this.characterName + " brushes some dust off\n                " + this.hisHer + " " + this.state.character.getTopClothingShortText() + "\n                and continues moving down the path, eyeing dark corners warily."));
        var energy = this.state.character.energy > 0 ? this.state.character.energy : 0;
        elements.push(this.text("After the encounter " + this.heShe + " has " + energy + " energy left.\n            You gain score equal to the remaining energy: score +" + energy));
        this.localRenown += energy;
        return elements;
    };
    CaveSpiderDefeatedScene.prototype.receiveChoice = function (choice) {
        this.state.renown = this.localRenown;
        this.nextSceneCtor = CommonScenes_1.commonScenes.ArtifactRetrievalEntranceScene;
    };
    return CaveSpiderDefeatedScene;
}(BaseScene_1.BaseScene));
exports.CaveSpiderDefeatedScene = CaveSpiderDefeatedScene;


/***/ }),

/***/ "./src/story/scenes/BreakfastScenes.ts":
/*!*********************************************!*\
  !*** ./src/story/scenes/BreakfastScenes.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseScene_1 = __webpack_require__(/*! ../BaseScene */ "./src/story/BaseScene.ts");
var CommonScenes_1 = __webpack_require__(/*! ./CommonScenes */ "./src/story/scenes/CommonScenes.ts");
var StoryChoice_1 = __webpack_require__(/*! ../../story-engine/src/common/StoryChoice */ "./src/story-engine/src/common/StoryChoice.ts");
var chars_1 = __webpack_require__(/*! ../chars */ "./src/story/chars.ts");
var string_1 = __webpack_require__(/*! ../../story-engine/src/common/string */ "./src/story-engine/src/common/string.ts");
var food_1 = __webpack_require__(/*! ../food */ "./src/story/food.ts");
var YesNoChoices_1 = __webpack_require__(/*! ../YesNoChoices */ "./src/story/YesNoChoices.ts");
var Confirmation_1 = __webpack_require__(/*! ../Confirmation */ "./src/story/Confirmation.ts");
var clothingSizes_1 = __webpack_require__(/*! ../clothingSizes */ "./src/story/clothingSizes.ts");
var storyText_1 = __webpack_require__(/*! ../storyText */ "./src/story/storyText.ts");
var clothes_1 = __webpack_require__(/*! ../clothes */ "./src/story/clothes.ts");
var GenderType_1 = __webpack_require__(/*! ../GenderType */ "./src/story/GenderType.ts");
var BodyType_1 = __webpack_require__(/*! ../BodyType */ "./src/story/BodyType.ts");
var BreakfastStartScene = /** @class */ (function (_super) {
    __extends(BreakfastStartScene, _super);
    function BreakfastStartScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreakfastStartScene.prototype.render = function () {
        return [this.text('Time for breakfast'),
            new StoryChoice_1.StoryChoice('rice', 'r'),
            new StoryChoice_1.StoryChoice('potatoes', 'p'),
            new StoryChoice_1.StoryChoice('noodles', 'n'),
            new StoryChoice_1.StoryChoice('skip main course and eat some muffins', 'm'),
            new StoryChoice_1.StoryChoice('skip breakfast entirely and go directly to the meeting', 'skip'),
        ];
    };
    BreakfastStartScene.prototype.receiveChoice = function (choice) {
        if (['r', 'p', 'n'].includes(choice))
            this.nextSceneCtor = BreakfastFirstCourseSizeScene;
        if (choice == 'm')
            this.nextSceneCtor = BreakfastDirectMuffinScene;
        if (choice == 'skip')
            this.nextSceneCtor = BreakfastSkippedScene;
        if (this.nextSceneCtor != null) {
            this.state.breakfast.initialChoice = choice;
            this.state.breakfast.muffinCount = 4;
            this.state.breakfast.muffinSubCounter = 0;
        }
    };
    return BreakfastStartScene;
}(BaseScene_1.BaseScene));
exports.BreakfastStartScene = BreakfastStartScene;
CommonScenes_1.commonScenes.BreakfastStartScene = BreakfastStartScene;
var BreakfastFirstCourseSizeScene = /** @class */ (function (_super) {
    __extends(BreakfastFirstCourseSizeScene, _super);
    function BreakfastFirstCourseSizeScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreakfastFirstCourseSizeScene.prototype.render = function () {
        return [
            this.text(this.state.character.name + ': it wouldn\'t do to go to the meeting without having a proper meal first, right?'),
            new StoryChoice_1.StoryChoice('make a small portion', 's'),
            new StoryChoice_1.StoryChoice('make a large portion', 'l'),
        ];
    };
    BreakfastFirstCourseSizeScene.prototype.receiveChoice = function (choice) {
        if (['s', 'l'].includes(choice)) {
            this.state.breakfast.portionSizeChoice = choice;
            this.nextSceneCtor = BreakfastFirstCourseScene;
        }
    };
    return BreakfastFirstCourseSizeScene;
}(BaseScene_1.BaseScene));
exports.BreakfastFirstCourseSizeScene = BreakfastFirstCourseSizeScene;
function foodToText(key) {
    switch (key) {
        case 'r': return 'rice';
        case 'p': return 'potatoes';
        case 'n': return 'noodles';
    }
}
function portionSizeToText(key) {
    switch (key) {
        case 's': return 'small';
        case 'l': return 'large';
    }
}
function foodIsPlural(key) {
    switch (key) {
        case 'r': return false;
        case 'p': return true;
        case 'n': return true;
    }
}
var BreakfastFirstCourseScene = /** @class */ (function (_super) {
    __extends(BreakfastFirstCourseScene, _super);
    function BreakfastFirstCourseScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreakfastFirstCourseScene.prototype.render = function () {
        this.fullness = this.state.character.fullness;
        var foodText = foodToText(this.state.breakfast.initialChoice);
        var foodPlural = foodIsPlural(this.state.breakfast.initialChoice);
        var elements = [];
        var cookingText = this.state.character.name + ' decides to make a ' +
            portionSizeToText(this.state.breakfast.portionSizeChoice) + ' portion of ' +
            foodText;
        elements.push(this.text(cookingText));
        var eatingText = 'When the meal is ready, ' + this.heShe + ' proceeds to eat the ' + foodToText(this.state.breakfast.initialChoice) + '. ';
        if (this.state.breakfast.portionSizeChoice == 's') {
            eatingText += 'Soon';
            this.fullness += 1;
        }
        else {
            eatingText += 'After a while';
            this.fullness += 2;
        }
        eatingText += " all " + foodText + " disappear" + (foodPlural ? '' : 's') + " into " + this.hisHer + " mouth.\n            " + string_1.upperFirst(this.heShe) + " feels " + food_1.fullnessToText(this.fullness) + ".";
        elements.push(this.text(eatingText));
        return elements;
    };
    BreakfastFirstCourseScene.prototype.receiveChoice = function () {
        this.nextSceneCtor = BreakfastPreConsiderMuffinsScene;
        this.state.character.fullness = this.fullness;
    };
    return BreakfastFirstCourseScene;
}(BaseScene_1.BaseScene));
exports.BreakfastFirstCourseScene = BreakfastFirstCourseScene;
var BreakfastDirectMuffinScene = /** @class */ (function (_super) {
    __extends(BreakfastDirectMuffinScene, _super);
    function BreakfastDirectMuffinScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreakfastDirectMuffinScene.prototype.render = function () {
        var text = this.state.character.name + ': Rice, potatoes... Boring stuff. I want some muffins.';
        return [this.text(text)];
    };
    BreakfastDirectMuffinScene.prototype.receiveChoice = function () {
        this.nextSceneCtor = BreakfastConsiderMuffinScene;
    };
    return BreakfastDirectMuffinScene;
}(BaseScene_1.BaseScene));
exports.BreakfastDirectMuffinScene = BreakfastDirectMuffinScene;
var BreakfastPreConsiderMuffinsScene = /** @class */ (function (_super) {
    __extends(BreakfastPreConsiderMuffinsScene, _super);
    function BreakfastPreConsiderMuffinsScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreakfastPreConsiderMuffinsScene.prototype.render = function () {
        return [this.text("In cupboard there are some muffins"),
            new StoryChoice_1.StoryChoice('Open the cupboard', 'o'),
            new StoryChoice_1.StoryChoice('To h*ll with them', 'n')];
    };
    BreakfastPreConsiderMuffinsScene.prototype.receiveChoice = function (choice) {
        switch (choice) {
            case 'o':
                this.nextSceneCtor = BreakfastConsiderMuffinScene;
                break;
            case 'n':
                this.nextSceneCtor = BreakfastEatingFinishedScene;
                break;
        }
    };
    return BreakfastPreConsiderMuffinsScene;
}(BaseScene_1.BaseScene));
exports.BreakfastPreConsiderMuffinsScene = BreakfastPreConsiderMuffinsScene;
var BreakfastConsiderMuffinScene = /** @class */ (function (_super) {
    __extends(BreakfastConsiderMuffinScene, _super);
    function BreakfastConsiderMuffinScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreakfastConsiderMuffinScene.prototype.render = function () {
        var muffinsArePlural = Math.abs(this.state.breakfast.muffinCount) != 1;
        var muffinsWord = muffinsArePlural ? 'muffins' : 'muffin';
        var unbuttonChoice = null;
        var text = "In the cupboard there " + storyText_1.isAre(muffinsArePlural) + " " + this.state.breakfast.muffinCount + " " + muffinsWord + " left. "
            + 'Should ' + this.state.character.name + ' eat one? ' + string_1.upperFirst(this.heShe) + ' feels ' + food_1.fullnessToText(this.state.character.fullness) + '.';
        if (this.state.character.fullness > food_1.FullnessLevel.full && this.state.character.getBottomClothingFitType() == clothingSizes_1.ClothingFitType.tight) {
            var clothingBottom = this.state.character.getBottomClothingShortText();
            var isAreText = storyText_1.isAre(clothes_1.clothingBottomIsPlural(this.state.character.clothingBottom));
            text += " " + string_1.upperFirst(this.hisHer) + " " + clothingBottom + " " + isAreText + " "
                + ("uncomfortably tight around " + this.hisHer + " stomach.");
            unbuttonChoice = new StoryChoice_1.StoryChoice("Undo the " + clothes_1.clothingBottomToText(this.state.character.clothingBottom), 'u');
        }
        return __spreadArrays([this.text(text)], YesNoChoices_1.yesNoChoices, [unbuttonChoice]);
    };
    BreakfastConsiderMuffinScene.prototype.receiveChoice = function (choice) {
        switch (choice) {
            case Confirmation_1.Confirmation.yes:
                this.nextSceneCtor = BreakfastEatMuffinScene;
                break;
            case Confirmation_1.Confirmation.no:
                this.nextSceneCtor = BreakfastEatingFinishedScene;
                break;
            case 'u':
                this.nextSceneCtor = BreakfastTryUndoScene;
                break;
        }
    };
    return BreakfastConsiderMuffinScene;
}(BaseScene_1.BaseScene));
exports.BreakfastConsiderMuffinScene = BreakfastConsiderMuffinScene;
var BreakfastTryUndoScene = /** @class */ (function (_super) {
    __extends(BreakfastTryUndoScene, _super);
    function BreakfastTryUndoScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreakfastTryUndoScene.prototype.render = function () {
        var isPlural = clothes_1.clothingBottomIsPlural(this.state.character.clothingBottom);
        var itThem = isPlural ? 'them' : 'it';
        return [this.text(this.state.character.name + ": It is not a good idea to go to the meeting with my " + clothes_1.clothingBottomToText(this.state.character.clothingBottom) + " undone, " +
                ("so I cannot undo " + itThem + " now only to find out later that I cannot button " + itThem + " again later."))];
    };
    BreakfastTryUndoScene.prototype.receiveChoice = function () {
        this.nextSceneCtor = BreakfastConsiderMuffinScene;
    };
    return BreakfastTryUndoScene;
}(BaseScene_1.BaseScene));
exports.BreakfastTryUndoScene = BreakfastTryUndoScene;
var BreakfastEatMuffinScene = /** @class */ (function (_super) {
    __extends(BreakfastEatMuffinScene, _super);
    function BreakfastEatMuffinScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreakfastEatMuffinScene.prototype.render = function () {
        var text = this.state.character.name + " decides to eat a muffin. ";
        if (this.state.breakfast.muffinCount > 0) {
            if (this.state.character.fullness >= food_1.FullnessLevel.stuffed)
                text += string_1.upperFirst(this.heShe) + " eats the muffin slowly and laboriously.";
            else if (this.state.character.fullness >= food_1.FullnessLevel.full)
                text += string_1.upperFirst(this.heShe) + " eats the muffin slowly.";
            else
                text += string_1.upperFirst(this.heShe) + " eats the muffin quickly. Nom!";
        }
        else {
            text += "But there are no muffins left in the cupboard. " + string_1.upperFirst(this.heShe) + " "
                + "makes a dissatisfied sound.";
        }
        return [this.text(text)];
    };
    BreakfastEatMuffinScene.prototype.receiveChoice = function () {
        var state = this.state;
        if (state.breakfast.muffinCount > 0) {
            this.nextSceneCtor = BreakfastConsiderMuffinScene;
            state.breakfast.muffinSubCounter += 1;
            if (state.breakfast.muffinSubCounter >= 2) {
                state.breakfast.muffinSubCounter = 0;
                state.character.fullness += 1;
            }
            state.breakfast.muffinCount -= 1;
        }
        else {
            this.nextSceneCtor = BreakfastConsiderMuffinScene;
        }
    };
    return BreakfastEatMuffinScene;
}(BaseScene_1.BaseScene));
exports.BreakfastEatMuffinScene = BreakfastEatMuffinScene;
var BreakfastSkippedScene = /** @class */ (function (_super) {
    __extends(BreakfastSkippedScene, _super);
    function BreakfastSkippedScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreakfastSkippedScene.prototype.render = function () {
        return [this.text(this.state.character.name + ": For some reason I don't feel like eating right now.")];
    };
    BreakfastSkippedScene.prototype.receiveChoice = function () {
        this.nextSceneCtor = BreakfastEatingFinishedScene;
    };
    return BreakfastSkippedScene;
}(BaseScene_1.BaseScene));
exports.BreakfastSkippedScene = BreakfastSkippedScene;
var BreakfastEatingFinishedScene = /** @class */ (function (_super) {
    __extends(BreakfastEatingFinishedScene, _super);
    function BreakfastEatingFinishedScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreakfastEatingFinishedScene.prototype.render = function () {
        var _this = this;
        var goesDownstairs = "goes downstairs to get " + this.hisHer + " horse ready for the ride";
        var characterGoesDownstairs = this.state.character.name + " " + goesDownstairs;
        var texts = [];
        if (this.state.character.fullness <= food_1.FullnessLevel.empty) {
            texts.push("For better or worse, " + this.state.character.name + " decides to skip breakfast. " + string_1.upperFirst(this.heShe) + " " + goesDownstairs + ".");
        }
        else if (this.state.character.fullness <= food_1.FullnessLevel.sated) {
            texts.push("After eating a light breakfast, " + characterGoesDownstairs + ".");
        }
        else if (this.state.character.fullness <= food_1.FullnessLevel.full) {
            texts.push("After having some breakfast, " + characterGoesDownstairs + ".");
        }
        else if (this.state.character.fullness <= food_1.FullnessLevel.stuffed) {
            texts.push("After eating a generous amount of food, " + characterGoesDownstairs + ".");
            texts.push.apply(texts, this.getStuffedFlavorText());
        }
        else {
            texts.push("After stuffing " + this.himselfHerself + " with as much food as possible, " + this.state.character.name + " feels sick.");
            this.sick = true;
        }
        return texts.map(function (t) { return _this.text(t); });
    };
    BreakfastEatingFinishedScene.prototype.getStuffedFlavorText = function () {
        var topFitType = this.state.character.getTopClothingFitType();
        var texts = [];
        if (topFitType <= clothingSizes_1.ClothingFitType.tight && this.state.character.bodyType <= BodyType_1.BodyType.chubby) {
            texts.push(this.state.character.name + "'s " + this.state.character.getTopClothingShortText() + "\n                is stretched tight around " + this.hisHer + " stuffed belly.");
            var speech = this.state.character.name + ": I hope I deflate soon";
            if (this.state.character.gender == GenderType_1.GenderType.female)
                speech += " so that I don't look pregnant.";
            else
                speech += "...";
            texts.push(speech);
        }
        return texts;
    };
    BreakfastEatingFinishedScene.prototype.receiveChoice = function (choice) {
        if (this.sick) {
            this.nextSceneCtor = BreakfastSicknessScene;
        }
        else {
            this.nextSceneCtor = CommonScenes_1.commonScenes.TravelToMeetingScene;
        }
    };
    return BreakfastEatingFinishedScene;
}(BaseScene_1.BaseScene));
exports.BreakfastEatingFinishedScene = BreakfastEatingFinishedScene;
var BreakfastSicknessScene = /** @class */ (function (_super) {
    __extends(BreakfastSicknessScene, _super);
    function BreakfastSicknessScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreakfastSicknessScene.prototype.render = function () {
        return [this.text(this.state.character.name + ": Oof. Maybe eating all those muffins wasn't such a good idea."),
            new StoryChoice_1.StoryChoice('Try to keep it down', '1'),
            new StoryChoice_1.StoryChoice('Give up', '2')];
    };
    BreakfastSicknessScene.prototype.receiveChoice = function (choice) {
        switch (choice) {
            case '1':
                this.nextSceneCtor = BreakfastKeepDownScene;
                break;
            case '2':
                this.nextSceneCtor = BreakfastThrowUpScene;
                break;
        }
    };
    return BreakfastSicknessScene;
}(BaseScene_1.BaseScene));
exports.BreakfastSicknessScene = BreakfastSicknessScene;
var enoughFoolingAroundText = "That's enough fooling around. I already spent too much time on eating. Time to go downstairs and get my horse ready for the ride.";
var BreakfastKeepDownScene = /** @class */ (function (_super) {
    __extends(BreakfastKeepDownScene, _super);
    function BreakfastKeepDownScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreakfastKeepDownScene.prototype.render = function () {
        var _this = this;
        var texts = [this.state.character.name + " presses hand to " + this.hisHer + " mouth and tries " + this.hisHer + " best to keep the food down."];
        this.successful = this.state.character.getBottomClothingFitType() != clothingSizes_1.ClothingFitType.tight;
        if (this.successful) {
            texts.push(chars_1.Chars.checkMark + " success! " + this.state.character.name + " managed to keep down the food. " + string_1.upperFirst(this.heShe) + " pats " + this.hisHer + " stomach lightly.");
            texts.push(this.state.character.name + ": Ahem... " + enoughFoolingAroundText);
        }
        else {
            var clothingBottomText = clothes_1.clothingBottomToText(this.state.character.clothingBottom);
            texts.push(chars_1.Chars.failMark + " but the constricting clothing doesn't help. " +
                (string_1.upperFirst(this.hisHer) + " stomach is too stressed because " + this.hisHer + " " + clothingBottomText + " is compressing it."));
        }
        return texts.map(function (t) { return _this.text(t); });
    };
    BreakfastKeepDownScene.prototype.receiveChoice = function () {
        if (this.successful)
            this.nextSceneCtor = CommonScenes_1.commonScenes.TravelToMeetingScene;
        else
            this.nextSceneCtor = BreakfastThrowUpScene;
    };
    return BreakfastKeepDownScene;
}(BaseScene_1.BaseScene));
exports.BreakfastKeepDownScene = BreakfastKeepDownScene;
var BreakfastThrowUpScene = /** @class */ (function (_super) {
    __extends(BreakfastThrowUpScene, _super);
    function BreakfastThrowUpScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreakfastThrowUpScene.prototype.render = function () {
        var _this = this;
        this.fullness = this.state.character.fullness;
        this.fullness -= 2;
        var texts = [
            this.state.character.name + " throws up into a clay pot.",
            this.state.character.name + ": Oops... What a great start of the day. Why did I even have to eat so much? Must be the all stress getting the best of me.",
            string_1.upperFirst(this.heShe) + " looks over " + this.hisHer + " " + this.state.character.getTopClothingShortText() + " to make sure it was not stained.",
            this.state.character.name + " no longer feels " + food_1.fullnessToText(this.state.character.fullness) + ". " +
                (string_1.upperFirst(this.heShe) + " now feels " + food_1.fullnessToText(this.fullness) + "."),
            chars_1.Chars.checkMark + " score -1",
            this.state.character.name + ": " + enoughFoolingAroundText
        ];
        return texts.map(function (t) { return _this.text(t); });
    };
    BreakfastThrowUpScene.prototype.receiveChoice = function () {
        this.nextSceneCtor = CommonScenes_1.commonScenes.TravelToMeetingScene;
        this.state.renown -= 1;
        this.state.character.fullness = this.fullness;
    };
    return BreakfastThrowUpScene;
}(BaseScene_1.BaseScene));
exports.BreakfastThrowUpScene = BreakfastThrowUpScene;


/***/ }),

/***/ "./src/story/scenes/CommonScenes.ts":
/*!******************************************!*\
  !*** ./src/story/scenes/CommonScenes.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CommonScenes = /** @class */ (function () {
    function CommonScenes() {
    }
    return CommonScenes;
}());
exports.CommonScenes = CommonScenes;
exports.commonScenes = new CommonScenes();


/***/ }),

/***/ "./src/story/scenes/DressupScenes.ts":
/*!*******************************************!*\
  !*** ./src/story/scenes/DressupScenes.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseScene_1 = __webpack_require__(/*! ../BaseScene */ "./src/story/BaseScene.ts");
var clothes_1 = __webpack_require__(/*! ../clothes */ "./src/story/clothes.ts");
var CommonScenes_1 = __webpack_require__(/*! ./CommonScenes */ "./src/story/scenes/CommonScenes.ts");
var enum_1 = __webpack_require__(/*! ../../story-engine/src/common/enum */ "./src/story-engine/src/common/enum.ts");
var clothingSizes_1 = __webpack_require__(/*! ../clothingSizes */ "./src/story/clothingSizes.ts");
var color_1 = __webpack_require__(/*! ../color */ "./src/story/color.ts");
var StoryChoice_1 = __webpack_require__(/*! ../../story-engine/src/common/StoryChoice */ "./src/story-engine/src/common/StoryChoice.ts");
var YesNoChoices_1 = __webpack_require__(/*! ../YesNoChoices */ "./src/story/YesNoChoices.ts");
var Confirmation_1 = __webpack_require__(/*! ../Confirmation */ "./src/story/Confirmation.ts");
var random_1 = __webpack_require__(/*! ../../story-engine/src/common/random */ "./src/story-engine/src/common/random.ts");
var string_1 = __webpack_require__(/*! ../../story-engine/src/common/string */ "./src/story-engine/src/common/string.ts");
var ChooseBottomClothingScene = /** @class */ (function (_super) {
    __extends(ChooseBottomClothingScene, _super);
    function ChooseBottomClothingScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChooseBottomClothingScene.prototype.render = function () {
        return [
            this.text('Choose bottom clothing:'),
            clothes_1.createClothingBottomChoice(clothes_1.ClothingBottom.shorts),
            clothes_1.createClothingBottomChoice(clothes_1.ClothingBottom.pants),
            clothes_1.createClothingBottomChoice(clothes_1.ClothingBottom.skirt),
            new StoryChoice_1.StoryChoice('dress (whole body)', 'd'),
        ];
    };
    ChooseBottomClothingScene.prototype.receiveChoice = function (choice) {
        var clothingIndex = parseInt(choice);
        if (choice == 'd') {
            this.state.character.clothingBottom = null;
            this.state.character.clothingTop = clothes_1.ClothingTop.dress;
            this.nextSceneCtor = ChooseTopClothingSizeScene;
        }
        else if (enum_1.isValidEnumMember(clothes_1.ClothingBottom, clothingIndex)) {
            this.state.character.clothingBottom = clothingIndex;
            this.state.focusedClothingType = clothes_1.ClothingType.bottom;
            this.nextSceneCtor = ChooseBottomClothingSizeScene;
        }
    };
    return ChooseBottomClothingScene;
}(BaseScene_1.BaseScene));
exports.ChooseBottomClothingScene = ChooseBottomClothingScene;
CommonScenes_1.commonScenes.ChooseClothesBottomScene = ChooseBottomClothingScene;
var ChooseBottomClothingSizeScene = /** @class */ (function (_super) {
    __extends(ChooseBottomClothingSizeScene, _super);
    function ChooseBottomClothingSizeScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChooseBottomClothingSizeScene.prototype.render = function () {
        var clothing = clothes_1.clothingBottomToText(this.state.character.clothingBottom);
        return __spreadArrays([
            this.text('The size of ' + clothing + ' happens to be')
        ], clothingSizes_1.getAvailableClothingSizeChoices(this.state.character.bodyType));
    };
    ChooseBottomClothingSizeScene.prototype.receiveChoice = function (choice) {
        var size = parseInt(choice);
        if (enum_1.isValidEnumMember(clothes_1.ClothingSize, size)) {
            this.state.character.clothingBottomSize = size;
            this.nextSceneCtor = ChooseBottomClothingColorScene;
        }
    };
    return ChooseBottomClothingSizeScene;
}(BaseScene_1.BaseScene));
exports.ChooseBottomClothingSizeScene = ChooseBottomClothingSizeScene;
var ChooseBottomClothingColorScene = /** @class */ (function (_super) {
    __extends(ChooseBottomClothingColorScene, _super);
    function ChooseBottomClothingColorScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChooseBottomClothingColorScene.prototype.render = function () {
        var clothing = clothes_1.clothingBottomToText(this.state.character.clothingBottom);
        return __spreadArrays([
            this.text('The color of ' + clothing + ' happens to be')
        ], color_1.getColorChoices());
    };
    ChooseBottomClothingColorScene.prototype.receiveChoice = function (choice) {
        var color = parseInt(choice);
        if (enum_1.isValidEnumMember(color_1.StoryColor, color)) {
            this.state.character.clothingBottomColor = color;
            this.nextSceneCtor = ChooseTopClothingScene;
        }
    };
    return ChooseBottomClothingColorScene;
}(BaseScene_1.BaseScene));
exports.ChooseBottomClothingColorScene = ChooseBottomClothingColorScene;
var ChooseTopClothingScene = /** @class */ (function (_super) {
    __extends(ChooseTopClothingScene, _super);
    function ChooseTopClothingScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clothes = [clothes_1.ClothingTop.shirt, clothes_1.ClothingTop.tShirt];
        return _this;
    }
    ChooseTopClothingScene.prototype.render = function () {
        return __spreadArrays([
            this.text('Choose top clothing:')
        ], this.clothes.map(function (clothing) { return clothes_1.createClothingTopChoice(clothing); }));
    };
    ChooseTopClothingScene.prototype.receiveChoice = function (choice) {
        var clothing = parseInt(choice);
        if (this.clothes.includes(clothing)) {
            this.state.character.clothingTop = clothing;
            this.nextSceneCtor = ChooseTopClothingSizeScene;
        }
    };
    return ChooseTopClothingScene;
}(BaseScene_1.BaseScene));
exports.ChooseTopClothingScene = ChooseTopClothingScene;
var ChooseTopClothingSizeScene = /** @class */ (function (_super) {
    __extends(ChooseTopClothingSizeScene, _super);
    function ChooseTopClothingSizeScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChooseTopClothingSizeScene.prototype.render = function () {
        var clothing = clothes_1.clothingTopToText(this.state.character.clothingTop);
        return __spreadArrays([
            this.text('The size of ' + clothing + ' happens to be')
        ], clothingSizes_1.getAvailableClothingSizeChoices(this.state.character.bodyType));
    };
    ChooseTopClothingSizeScene.prototype.receiveChoice = function (choice) {
        var sizeIndex = parseInt(choice);
        if (enum_1.isValidEnumMember(clothes_1.ClothingSize, sizeIndex)) {
            this.state.character.clothingTopSize = sizeIndex;
            this.nextSceneCtor = ChooseTopClothingColorScene;
        }
    };
    return ChooseTopClothingSizeScene;
}(BaseScene_1.BaseScene));
exports.ChooseTopClothingSizeScene = ChooseTopClothingSizeScene;
var ChooseTopClothingColorScene = /** @class */ (function (_super) {
    __extends(ChooseTopClothingColorScene, _super);
    function ChooseTopClothingColorScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChooseTopClothingColorScene.prototype.render = function () {
        var clothing = clothes_1.clothingTopToText(this.state.character.clothingTop);
        return __spreadArrays([
            this.text('The color of ' + clothing + ' happens to be')
        ], color_1.getColorChoices());
    };
    ChooseTopClothingColorScene.prototype.receiveChoice = function (choice) {
        var colorIndex = parseInt(choice);
        if (enum_1.isValidEnumMember(color_1.StoryColor, colorIndex)) {
            this.state.character.clothingTopColor = colorIndex;
            this.nextSceneCtor = ClothingChoiceConfirmationScene;
        }
    };
    return ChooseTopClothingColorScene;
}(BaseScene_1.BaseScene));
exports.ChooseTopClothingColorScene = ChooseTopClothingColorScene;
var ClothingChoiceConfirmationScene = /** @class */ (function (_super) {
    __extends(ClothingChoiceConfirmationScene, _super);
    function ClothingChoiceConfirmationScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClothingChoiceConfirmationScene.prototype.render = function () {
        var _this = this;
        var descriptions = this.state.character.getClothingDescriptions();
        return __spreadArrays([
            this.text('Confirm choice of clothing:')
        ], descriptions.map(function (description) { return _this.text(description); }), YesNoChoices_1.yesNoChoices);
    };
    ClothingChoiceConfirmationScene.prototype.receiveChoice = function (choice) {
        switch (choice) {
            case Confirmation_1.Confirmation.no:
                this.nextSceneCtor = ClothingRedoScene;
                break;
            case Confirmation_1.Confirmation.yes:
                this.nextSceneCtor = ClothingPutOnScene;
                break;
        }
    };
    return ClothingChoiceConfirmationScene;
}(BaseScene_1.BaseScene));
exports.ClothingChoiceConfirmationScene = ClothingChoiceConfirmationScene;
var ClothingRedoScene = /** @class */ (function (_super) {
    __extends(ClothingRedoScene, _super);
    function ClothingRedoScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClothingRedoScene.prototype.render = function () {
        var complaintTarget = "these clothes";
        var thoughtFlavor = random_1.getRandomInteger(2);
        if (thoughtFlavor == 0 && this.state.character.clothingTop != null)
            complaintTarget = 'this ' + this.state.character.getTopClothingShortText();
        if (thoughtFlavor == 1 && this.state.character.clothingBottom != null)
            complaintTarget = 'this ' + this.state.character.getBottomClothingShortText();
        return [
            this.text(this.state.character.name + ": What's with " + complaintTarget + "? I want to wear something different.")
        ];
    };
    ClothingRedoScene.prototype.receiveChoice = function () {
        this.state.character.clothingBottom = null;
        this.state.character.clothingTop = null;
        this.nextSceneCtor = ChooseBottomClothingScene;
    };
    return ClothingRedoScene;
}(BaseScene_1.BaseScene));
exports.ClothingRedoScene = ClothingRedoScene;
var ClothingPutOnScene = /** @class */ (function (_super) {
    __extends(ClothingPutOnScene, _super);
    function ClothingPutOnScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClothingPutOnScene.prototype.render = function () {
        var _this = this;
        var texts = [];
        var text = this.state.character.name + " puts on " + this.state.character.getTopClothingShortText();
        if (this.state.character.clothingBottom != null)
            text += ' and ' + this.state.character.getBottomClothingShortText();
        text += '.';
        texts.push(text);
        var bottomFitType = this.state.character.getBottomClothingFitType();
        switch (bottomFitType) {
            case clothingSizes_1.ClothingFitType.loose:
                var isWord = clothes_1.clothingBottomIsPlural(this.state.character.clothingBottom) ? 'are' : 'is';
                texts.push('Because ' + clothes_1.clothingBottomToText(this.state.character.clothingBottom) +
                    (" " + isWord + " loose on " + this.himHer + ", " + this.heShe + " wears a belt."));
                break;
            case clothingSizes_1.ClothingFitType.perfect:
                var fitsWord = clothes_1.clothingBottomIsPlural(this.state.character.clothingBottom) ? 'fit' : 'fits';
                texts.push('The ' + clothes_1.clothingBottomToText(this.state.character.clothingBottom) +
                    (" " + fitsWord + " " + this.himHer + " nicely."));
                break;
            case clothingSizes_1.ClothingFitType.tight:
                var text_1 = this.state.character.name + ' struggles a little while buttoning the ' +
                    clothes_1.clothingBottomToText(this.state.character.clothingBottom) + '.';
                if (this.state.character.clothingBottom == clothes_1.ClothingBottom.skirt)
                    text_1 = "The skirt pinches " + this.hisHer + " waist\n                        but its hem is still fairly wide to let the wearer ride a horse easily.";
                texts.push(text_1);
                break;
        }
        var topFitType = this.state.character.getTopClothingFitType();
        if (this.state.character.clothingTop == clothes_1.ClothingTop.dress) {
            if (topFitType == clothingSizes_1.ClothingFitType.tight) {
                var text_2 = string_1.upperFirst(this.heShe) + " struggles a little with " + this.hisHer + " dress\n                    because of how tight it is.";
                texts.push(text_2);
            }
            else {
                var text_3 = "The dress fits " + this.himHer + " nicely.";
                texts.push(text_3);
            }
        }
        return __spreadArrays(texts.map(function (t) { return _this.text(t); }));
    };
    ClothingPutOnScene.prototype.receiveChoice = function () {
        this.nextSceneCtor = CommonScenes_1.commonScenes.BreakfastStartScene;
    };
    return ClothingPutOnScene;
}(BaseScene_1.BaseScene));
exports.ClothingPutOnScene = ClothingPutOnScene;


/***/ }),

/***/ "./src/story/scenes/GameOverScene.ts":
/*!*******************************************!*\
  !*** ./src/story/scenes/GameOverScene.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseScene_1 = __webpack_require__(/*! ../BaseScene */ "./src/story/BaseScene.ts");
var CommonScenes_1 = __webpack_require__(/*! ./CommonScenes */ "./src/story/scenes/CommonScenes.ts");
var GameOverScene = /** @class */ (function (_super) {
    __extends(GameOverScene, _super);
    function GameOverScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameOverScene.prototype.render = function () {
        return [this.text("GAME OVER"),
            this.text("Hint for terminal version: type \"load\" to load the saved game. Type \"help\" to get the list of commands.")];
    };
    return GameOverScene;
}(BaseScene_1.BaseScene));
exports.GameOverScene = GameOverScene;
CommonScenes_1.commonScenes.GameOverScene = GameOverScene;


/***/ }),

/***/ "./src/story/scenes/IntroScenes.ts":
/*!*****************************************!*\
  !*** ./src/story/scenes/IntroScenes.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseScene_1 = __webpack_require__(/*! ../BaseScene */ "./src/story/BaseScene.ts");
var StoryInput_1 = __webpack_require__(/*! ../../story-engine/src/common/StoryInput */ "./src/story-engine/src/common/StoryInput.ts");
var YesNoChoices_1 = __webpack_require__(/*! ../YesNoChoices */ "./src/story/YesNoChoices.ts");
var StoryChoice_1 = __webpack_require__(/*! ../../story-engine/src/common/StoryChoice */ "./src/story-engine/src/common/StoryChoice.ts");
var GenderType_1 = __webpack_require__(/*! ../GenderType */ "./src/story/GenderType.ts");
var Confirmation_1 = __webpack_require__(/*! ../Confirmation */ "./src/story/Confirmation.ts");
var enum_1 = __webpack_require__(/*! ../../story-engine/src/common/enum */ "./src/story-engine/src/common/enum.ts");
var BodyTypeChoices_1 = __webpack_require__(/*! ../BodyTypeChoices */ "./src/story/BodyTypeChoices.ts");
var BodyType_1 = __webpack_require__(/*! ../BodyType */ "./src/story/BodyType.ts");
var CommonScenes_1 = __webpack_require__(/*! ./CommonScenes */ "./src/story/scenes/CommonScenes.ts");
var chars_1 = __webpack_require__(/*! ../chars */ "./src/story/chars.ts");
var string_1 = __webpack_require__(/*! ../../story-engine/src/common/string */ "./src/story-engine/src/common/string.ts");
var CharacterGenderScene = /** @class */ (function (_super) {
    __extends(CharacterGenderScene, _super);
    function CharacterGenderScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CharacterGenderScene.prototype.render = function () {
        return [
            this.text('Choose character gender'),
            new StoryChoice_1.StoryChoice('Male', GenderType_1.GenderType.male),
            new StoryChoice_1.StoryChoice('Female', GenderType_1.GenderType.female)
        ];
    };
    CharacterGenderScene.prototype.receiveChoice = function (choice) {
        if (enum_1.isValidEnumMember(GenderType_1.GenderType, choice)) {
            this.state.character.gender = choice;
            this.nextSceneCtor = CharacterGenderConfirmationScene;
        }
    };
    return CharacterGenderScene;
}(BaseScene_1.BaseScene));
exports.CharacterGenderScene = CharacterGenderScene;
CommonScenes_1.commonScenes.CharacterGenderScene = CharacterGenderScene;
var CharacterGenderConfirmationScene = /** @class */ (function (_super) {
    __extends(CharacterGenderConfirmationScene, _super);
    function CharacterGenderConfirmationScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CharacterGenderConfirmationScene.prototype.render = function () {
        return [
            this.text('Character gender will be: ' + enum_1.getEnumMemberName(GenderType_1.GenderType, this.state.character.gender)),
            new StoryChoice_1.StoryChoice('Yes', Confirmation_1.Confirmation.yes),
            new StoryChoice_1.StoryChoice('Hold on, I changed my mind...', Confirmation_1.Confirmation.no),
        ];
    };
    CharacterGenderConfirmationScene.prototype.receiveChoice = function (choice) {
        if (choice == Confirmation_1.Confirmation.yes)
            this.nextSceneCtor = CharacterNameScene;
        else if (choice == Confirmation_1.Confirmation.no)
            this.nextSceneCtor = CharacterGenderScene;
    };
    return CharacterGenderConfirmationScene;
}(BaseScene_1.BaseScene));
exports.CharacterGenderConfirmationScene = CharacterGenderConfirmationScene;
var CharacterNameScene = /** @class */ (function (_super) {
    __extends(CharacterNameScene, _super);
    function CharacterNameScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CharacterNameScene.prototype, "defaultName", {
        get: function () {
            return this.state.character.gender == GenderType_1.GenderType.female ? 'Ayane' : 'Jake';
        },
        enumerable: true,
        configurable: true
    });
    CharacterNameScene.prototype.render = function () {
        return [
            this.text('Type in your character\'s name.'),
            this.text('Leave empty to get default character name: ' + this.defaultName),
            new StoryInput_1.StoryInput()
        ];
    };
    CharacterNameScene.prototype.receiveChoice = function (choice) {
        if (choice == '' || choice == null)
            choice = this.defaultName;
        this.state.character.name = choice;
        this.nextSceneCtor = CharacterNameConfirmationScene;
    };
    return CharacterNameScene;
}(BaseScene_1.BaseScene));
exports.CharacterNameScene = CharacterNameScene;
var CharacterNameConfirmationScene = /** @class */ (function (_super) {
    __extends(CharacterNameConfirmationScene, _super);
    function CharacterNameConfirmationScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CharacterNameConfirmationScene.prototype.render = function () {
        return __spreadArrays([
            this.text('Your character\'s name is "' + this.state.character.name + '". Is that correct?')
        ], YesNoChoices_1.yesNoChoices);
    };
    CharacterNameConfirmationScene.prototype.receiveChoice = function (choice) {
        if (choice == Confirmation_1.Confirmation.yes) {
            this.nextSceneCtor = CharacterBodyTypeScene;
        }
        else {
            this.nextSceneCtor = CharacterNameScene;
        }
    };
    return CharacterNameConfirmationScene;
}(BaseScene_1.BaseScene));
exports.CharacterNameConfirmationScene = CharacterNameConfirmationScene;
var CharacterBodyTypeScene = /** @class */ (function (_super) {
    __extends(CharacterBodyTypeScene, _super);
    function CharacterBodyTypeScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CharacterBodyTypeScene.prototype.render = function () {
        return __spreadArrays([
            this.text('Choose body type for ' + this.state.character.name)
        ], BodyTypeChoices_1.bodyTypeChoices);
    };
    CharacterBodyTypeScene.prototype.receiveChoice = function (choice) {
        var bodyTypeIndex = parseInt(choice);
        if (enum_1.isValidEnumMember(BodyType_1.BodyType, bodyTypeIndex)) {
            this.state.character.bodyType = bodyTypeIndex;
            this.nextSceneCtor = CharacterBodyTypeConfirmationScene;
        }
    };
    return CharacterBodyTypeScene;
}(BaseScene_1.BaseScene));
exports.CharacterBodyTypeScene = CharacterBodyTypeScene;
var CharacterBodyTypeConfirmationScene = /** @class */ (function (_super) {
    __extends(CharacterBodyTypeConfirmationScene, _super);
    function CharacterBodyTypeConfirmationScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CharacterBodyTypeConfirmationScene.prototype.render = function () {
        var text = this.state.character.name + ' happens to be ' +
            enum_1.getEnumMemberName(BodyType_1.BodyType, this.state.character.bodyType);
        if (this.state.character.bodyType == BodyType_1.BodyType.average)
            text += ' (neither thin nor fat)';
        text += '.';
        return __spreadArrays([
            this.text(text),
            this.text('Is that right?')
        ], YesNoChoices_1.yesNoChoices);
    };
    CharacterBodyTypeConfirmationScene.prototype.receiveChoice = function (choice) {
        if (choice == Confirmation_1.Confirmation.yes)
            this.nextSceneCtor = CharacterAbilityChoiceScene;
        else
            this.nextSceneCtor = CharacterBodyTypeScene;
    };
    return CharacterBodyTypeConfirmationScene;
}(BaseScene_1.BaseScene));
exports.CharacterBodyTypeConfirmationScene = CharacterBodyTypeConfirmationScene;
var CharacterAbilityChoiceScene = /** @class */ (function (_super) {
    __extends(CharacterAbilityChoiceScene, _super);
    function CharacterAbilityChoiceScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CharacterAbilityChoiceScene.prototype.render = function () {
        return [this.text('Choose abilities'),
            new StoryChoice_1.StoryChoice('Universalist: strength 2, magic 2', '1'),
            new StoryChoice_1.StoryChoice('Mage: strength 1, magic 3', '2'),
            new StoryChoice_1.StoryChoice('Strong: strength 3, magic 1. Need body type: not thin', '3')
        ];
    };
    CharacterAbilityChoiceScene.prototype.receiveChoice = function (choice) {
        this.state.character.strength = null;
        switch (choice) {
            case '1':
                this.state.character.strength = 2;
                this.state.character.magic = 2;
                break;
            case '2':
                this.state.character.strength = 1;
                this.state.character.magic = 3;
                break;
            case '3':
                if (this.state.character.bodyType != BodyType_1.BodyType.thin) {
                    this.state.character.strength = 3;
                    this.state.character.magic = 1;
                }
                break;
        }
        if (this.state.character.strength != null)
            this.nextSceneCtor = CharacterAbilityConfirmationScene;
    };
    return CharacterAbilityChoiceScene;
}(BaseScene_1.BaseScene));
exports.CharacterAbilityChoiceScene = CharacterAbilityChoiceScene;
var CharacterAbilityConfirmationScene = /** @class */ (function (_super) {
    __extends(CharacterAbilityConfirmationScene, _super);
    function CharacterAbilityConfirmationScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CharacterAbilityConfirmationScene.prototype.render = function () {
        var text = '';
        switch (this.state.character.strength) {
            case 1:
                text = "is not accustomed to physical labor; however " + this.hisHer + " magical power is impressive. " +
                    (string_1.upperFirst(this.heShe) + " can blast a wooden cart to pieces with a wave of " + this.hisHer + " hand.");
                break;
            case 2:
                text = "is good with both sword and magic, however lack of specialization means that " + this.heShe + " " +
                    "can neither blast a whole castle into pieces with magic nor lift a carriage off the ground with bare hands.";
                break;
            case 3:
                text = "is strong as an ox and can slice small trees and people with an axe. " +
                    ("However " + this.hisHer + " magical prowess leaves something to be desired.");
                break;
        }
        text = this.state.character.name + ' ' + text;
        return __spreadArrays([this.text(text)], YesNoChoices_1.yesNoChoices);
    };
    CharacterAbilityConfirmationScene.prototype.receiveChoice = function (choice) {
        switch (choice) {
            case Confirmation_1.Confirmation.no:
                this.nextSceneCtor = CharacterAbilityChoiceScene;
                break;
            case Confirmation_1.Confirmation.yes:
                this.nextSceneCtor = CharacterCreationCompleteScene;
                break;
        }
    };
    return CharacterAbilityConfirmationScene;
}(BaseScene_1.BaseScene));
exports.CharacterAbilityConfirmationScene = CharacterAbilityConfirmationScene;
var CharacterCreationCompleteScene = /** @class */ (function (_super) {
    __extends(CharacterCreationCompleteScene, _super);
    function CharacterCreationCompleteScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CharacterCreationCompleteScene.prototype.render = function () {
        var elements = [
            this.text('Basic character creation process is now complete.'),
            this.text("Hint for terminal-console version: type \"status\" to review character.\n                Type \"reset\" to start from the very beginning.\n                Type \"help\" to review list of commands.\n                Type \"save\" or \"load\" at any moment to save or load the game.")
        ];
        return elements;
    };
    CharacterCreationCompleteScene.prototype.receiveChoice = function () {
        this.nextSceneCtor = WakeUpScene;
    };
    return CharacterCreationCompleteScene;
}(BaseScene_1.BaseScene));
exports.CharacterCreationCompleteScene = CharacterCreationCompleteScene;
var MirrorReaction;
(function (MirrorReaction) {
    MirrorReaction[MirrorReaction["approve"] = 0] = "approve";
    MirrorReaction[MirrorReaction["neutral"] = 1] = "neutral";
    MirrorReaction[MirrorReaction["hate"] = 2] = "hate";
})(MirrorReaction || (MirrorReaction = {}));
var WakeUpScene = /** @class */ (function (_super) {
    __extends(WakeUpScene, _super);
    function WakeUpScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WakeUpScene.prototype.render = function () {
        var elements = [this.text(this.state.character.name + " wakes up in " + this.hisHer + " room at the top floor of " + this.hisHer + " wizard tower. " +
                "The tower is tall and white. It's a new day. Yay! But it's Monday. Argh!")];
        if (this.state.character.bodyType >= BodyType_1.BodyType.fat)
            elements.push(this.text(chars_1.Chars.checkMark + " The wooden bed groans a little under " + this.characterName + "'s weight."));
        elements.push(this.text(this.state.character.name + " walks up to a mirror and looks at " + this.himselfHerself + "."));
        elements.push(new StoryChoice_1.StoryChoice('approve', '' + MirrorReaction.approve), new StoryChoice_1.StoryChoice('neutral', '' + MirrorReaction.neutral), new StoryChoice_1.StoryChoice('complain', '' + MirrorReaction.hate));
        return elements;
    };
    WakeUpScene.prototype.receiveChoice = function (choice) {
        var reaction = parseInt(choice);
        if (enum_1.isValidEnumMember(MirrorReaction, reaction)) {
            this.state.wakeUpSceneChoice = reaction;
            this.nextSceneCtor = WakeUpSceneReaction;
        }
    };
    return WakeUpScene;
}(BaseScene_1.BaseScene));
exports.WakeUpScene = WakeUpScene;
var WakeUpSceneReaction = /** @class */ (function (_super) {
    __extends(WakeUpSceneReaction, _super);
    function WakeUpSceneReaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WakeUpSceneReaction.prototype.render = function () {
        var elements = [];
        switch (this.state.wakeUpSceneChoice) {
            case MirrorReaction.approve:
                elements.push(this.text(this.state.character.name + ": Looking good! Another beautiful day in a fantasy land."));
                break;
            case MirrorReaction.neutral:
                elements.push(this.text(this.state.character.name + " stares a little longer at " + this.hisHer + " reflection but says nothing."));
                break;
            case MirrorReaction.hate:
                elements.push.apply(elements, this.complain());
                break;
        }
        elements.push(this.text('Morning sun shines through the curtain.'));
        return elements;
    };
    WakeUpSceneReaction.prototype.complain = function () {
        var text = "I want to go back to sleep!";
        if (BodyType_1.BodyType.chubby == this.state.character.bodyType)
            text = '(' + chars_1.Chars.checkMark + ' chubby) I wish I was thinner!';
        else if (BodyType_1.BodyType.fat == this.state.character.bodyType)
            text = '(' + chars_1.Chars.checkMark + ' fat) I definitely need to loose some weight.';
        else if (this.state.character.bodyType == BodyType_1.BodyType.thin && this.state.character.gender == GenderType_1.GenderType.female)
            text = '(' + chars_1.Chars.checkMark + ' thin & female) I wish I had bigger chest!';
        else if (this.state.character.strength == 1)
            text = '(' + chars_1.Chars.checkMark + ' low str) I wish I was stronger. I need to work out more.';
        return [
            this.text(this.state.character.name + ': Ugh... ' + text)
        ];
    };
    WakeUpSceneReaction.prototype.receiveChoice = function () {
        this.nextSceneCtor = AssignmentInfoScene;
    };
    return WakeUpSceneReaction;
}(BaseScene_1.BaseScene));
exports.WakeUpSceneReaction = WakeUpSceneReaction;
var AssignmentInfoScene = /** @class */ (function (_super) {
    __extends(AssignmentInfoScene, _super);
    function AssignmentInfoScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AssignmentInfoScene.prototype.render = function () {
        return [this.text("Today " + this.state.character.name + " is supposed to meet councillor Warlove to get an assignment."),
            this.text("But first " + this.heShe + " needs to get dressed. " + this.state.character.name + " opens " + this.hisHer + " wardrobe closet.")];
    };
    AssignmentInfoScene.prototype.receiveChoice = function () {
        this.nextSceneCtor = CommonScenes_1.commonScenes.ChooseClothesBottomScene;
    };
    return AssignmentInfoScene;
}(BaseScene_1.BaseScene));
exports.AssignmentInfoScene = AssignmentInfoScene;


/***/ }),

/***/ "./src/story/scenes/StartScene.ts":
/*!****************************************!*\
  !*** ./src/story/scenes/StartScene.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseScene_1 = __webpack_require__(/*! ../BaseScene */ "./src/story/BaseScene.ts");
var CommonScenes_1 = __webpack_require__(/*! ./CommonScenes */ "./src/story/scenes/CommonScenes.ts");
var StartScene = /** @class */ (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StartScene.prototype.render = function () {
        return [this.text('In a faraway land...'),
            this.text('...a war is brewing >:3'),
            this.text('You are a royal wizard. Help defending your country from invaders or fail trying.'),
            this.text('But first, customize your character.'),
            this.text("Hint: in terminal version of the game press Enter to continue.\n                In web-console version focus input field and press Enter to continue."),
        ];
    };
    StartScene.prototype.receiveChoice = function () {
        this.nextSceneCtor = CommonScenes_1.commonScenes.CharacterGenderScene;
    };
    return StartScene;
}(BaseScene_1.BaseScene));
exports.StartScene = StartScene;


/***/ }),

/***/ "./src/story/scenes/StatusScene.ts":
/*!*****************************************!*\
  !*** ./src/story/scenes/StatusScene.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseScene_1 = __webpack_require__(/*! ../BaseScene */ "./src/story/BaseScene.ts");
var strength_1 = __webpack_require__(/*! ../strength */ "./src/story/strength.ts");
var BodyType_1 = __webpack_require__(/*! ../BodyType */ "./src/story/BodyType.ts");
var magic_1 = __webpack_require__(/*! ../magic */ "./src/story/magic.ts");
var StatusScene = /** @class */ (function (_super) {
    __extends(StatusScene, _super);
    function StatusScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatusScene.prototype.render = function () {
        var _this = this;
        var elements = [this.text('STATUS')];
        var state = this.state;
        if (state.character.name != null)
            elements.push(this.text('Name: ' + state.character.name));
        if (state.character.gender != null)
            elements.push(this.text('gender: ' + state.character.gender));
        if (state.character.bodyType != null)
            elements.push(this.text('body: ' + BodyType_1.BodyType[state.character.bodyType]));
        if (state.character.strength != null)
            elements.push(this.text('strength: ' + strength_1.strengthToText(state.character.strength)));
        if (state.character.magic != null)
            elements.push(this.text('magic: ' + magic_1.magicPowerToText(state.character.magic)));
        elements.push(this.text('energy: ' + state.character.energy));
        elements.push(this.text('score: ' + state.renown));
        elements.push.apply(elements, state.character.getClothingDescriptions().map(function (desc) { return _this.text(desc); }));
        return elements;
    };
    StatusScene.prototype.receiveChoice = function () {
        this.nextSceneCtor = this.getRequiredSceneCtor(this.state.returningSceneName);
    };
    return StatusScene;
}(BaseScene_1.BaseScene));
exports.StatusScene = StatusScene;


/***/ }),

/***/ "./src/story/scenes/sceneCollection.ts":
/*!*********************************************!*\
  !*** ./src/story/scenes/sceneCollection.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StartScene = __webpack_require__(/*! ./StartScene */ "./src/story/scenes/StartScene.ts");
var IntroScenes = __webpack_require__(/*! ./IntroScenes */ "./src/story/scenes/IntroScenes.ts");
var StatusScene = __webpack_require__(/*! ./StatusScene */ "./src/story/scenes/StatusScene.ts");
var DressupScenes = __webpack_require__(/*! ./DressupScenes */ "./src/story/scenes/DressupScenes.ts");
var BreakfastScenes = __webpack_require__(/*! ./BreakfastScenes */ "./src/story/scenes/BreakfastScenes.ts");
var ArtifactEntranceScenes = __webpack_require__(/*! ./ArtifactEntranceScenes */ "./src/story/scenes/ArtifactEntranceScenes.ts");
var ArtifactSpiderScenes = __webpack_require__(/*! ./ArtifactSpiderScenes */ "./src/story/scenes/ArtifactSpiderScenes.ts");
var GameOverScene = __webpack_require__(/*! ./GameOverScene */ "./src/story/scenes/GameOverScene.ts");
var ArtifactRetrievalScenes = __webpack_require__(/*! ./ArtifactRetrievalScenes */ "./src/story/scenes/ArtifactRetrievalScenes.ts");
var scenes_1 = __webpack_require__(/*! ./scenes */ "./src/story/scenes/scenes.ts");
var sceneGroups = [StartScene, IntroScenes, StatusScene, DressupScenes, BreakfastScenes,
    ArtifactEntranceScenes, ArtifactSpiderScenes, GameOverScene, ArtifactRetrievalScenes];
for (var _i = 0, sceneGroups_1 = sceneGroups; _i < sceneGroups_1.length; _i++) {
    var group = sceneGroups_1[_i];
    for (var sceneName in group) {
        var sceneClass = group[sceneName];
        scenes_1.globalScenes[sceneName] = sceneClass;
    }
}


/***/ }),

/***/ "./src/story/scenes/scenes.ts":
/*!************************************!*\
  !*** ./src/story/scenes/scenes.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.globalScenes = {};


/***/ }),

/***/ "./src/story/storyText.ts":
/*!********************************!*\
  !*** ./src/story/storyText.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isAre(plural) {
    switch (plural) {
        case true: return 'are';
        case false: return 'is';
    }
}
exports.isAre = isAre;


/***/ }),

/***/ "./src/story/strength.ts":
/*!*******************************!*\
  !*** ./src/story/strength.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function strengthToText(strength) {
    switch (strength) {
        case 0: return 'weak';
        case 1: return 'mediocre';
        case 2: return 'average';
        case 3: return 'strong';
        default: return 'unknown';
    }
}
exports.strengthToText = strengthToText;


/***/ }),

/***/ "./third/w3.css":
/*!**********************!*\
  !*** ./third/w3.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./w3.css */ "./node_modules/css-loader/dist/cjs.js!./third/w3.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=index_bundle.js.map