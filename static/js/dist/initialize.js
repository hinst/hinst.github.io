/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./pages/TypeScript/settings.ts":
/*!**************************************!*\
  !*** ./pages/TypeScript/settings.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.settingsStorage = exports.Theme = void 0;
var Theme;
(function (Theme) {
    Theme["LIGHT"] = "LIGHT";
    Theme["DARK"] = "DARK";
    Theme["SYSTEM"] = "SYSTEM";
})(Theme || (exports.Theme = Theme = {}));
class SettingsStorage {
    initialize() {
        this.applyTheme();
    }
    keyTheme = 'theme';
    get theme() {
        const theme = localStorage.getItem(this.keyTheme);
        if (theme)
            return theme;
        return Theme.SYSTEM;
    }
    set theme(value) {
        if (value === Theme.SYSTEM)
            localStorage.removeItem(this.keyTheme);
        else
            localStorage.setItem(this.keyTheme, value);
        this.applyTheme();
    }
    get resolvedTheme() {
        const theme = this.theme;
        if (theme === Theme.SYSTEM) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return Theme.DARK;
            }
            else {
                return Theme.LIGHT;
            }
        }
        return theme;
    }
    applyTheme() {
        const dataThemeAttributeKey = 'data-theme';
        if (this.resolvedTheme === Theme.DARK)
            document.documentElement.setAttribute(dataThemeAttributeKey, 'dark');
        else
            document.documentElement.removeAttribute(dataThemeAttributeKey);
    }
}
exports.settingsStorage = new SettingsStorage();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!****************************************!*\
  !*** ./pages/TypeScript/initialize.ts ***!
  \****************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const settings_1 = __webpack_require__(/*! ./settings */ "./pages/TypeScript/settings.ts");
settings_1.settingsStorage.initialize();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbGl6ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxLQUlYO0FBSkQsV0FBWSxLQUFLO0lBQ2hCLHdCQUFlO0lBQ2Ysc0JBQWE7SUFDYiwwQkFBaUI7QUFDbEIsQ0FBQyxFQUpXLEtBQUsscUJBQUwsS0FBSyxRQUloQjtBQUVELE1BQU0sZUFBZTtJQUNwQixVQUFVO1FBQ1QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFZ0IsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUVwQyxJQUFJLEtBQUs7UUFDUixNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxJQUFJLEtBQUs7WUFBRSxPQUFPLEtBQWMsQ0FBQztRQUNqQyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksS0FBSyxDQUFDLEtBQVk7UUFDckIsSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLE1BQU07WUFDekIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7O1lBRXZDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELElBQUksYUFBYTtRQUNoQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixJQUFJLE1BQU0sQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNwRixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDbkIsQ0FBQztpQkFBTSxDQUFDO2dCQUNQLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNwQixDQUFDO1FBQ0YsQ0FBQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVPLFVBQVU7UUFDakIsTUFBTSxxQkFBcUIsR0FBRyxZQUFZLENBQUM7UUFDM0MsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLEtBQUssQ0FBQyxJQUFJO1lBQ3BDLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLE1BQU0sQ0FBQyxDQUFDOztZQUVyRSxRQUFRLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Q0FDRDtBQUVZLHVCQUFlLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQzs7Ozs7OztVQ2hEckQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBLDJGQUE2QztBQUM3QywwQkFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2VuZC8uL3BhZ2VzL1R5cGVTY3JpcHQvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vYmFja2VuZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYWNrZW5kLy4vcGFnZXMvVHlwZVNjcmlwdC9pbml0aWFsaXplLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIFRoZW1lIHtcclxuXHRMSUdIVCA9ICdMSUdIVCcsXHJcblx0REFSSyA9ICdEQVJLJyxcclxuXHRTWVNURU0gPSAnU1lTVEVNJyxcclxufVxyXG5cclxuY2xhc3MgU2V0dGluZ3NTdG9yYWdlIHtcclxuXHRpbml0aWFsaXplKCkge1xyXG5cdFx0dGhpcy5hcHBseVRoZW1lKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlYWRvbmx5IGtleVRoZW1lID0gJ3RoZW1lJztcclxuXHJcblx0Z2V0IHRoZW1lKCk6IFRoZW1lIHtcclxuXHRcdGNvbnN0IHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXlUaGVtZSk7XHJcblx0XHRpZiAodGhlbWUpIHJldHVybiB0aGVtZSBhcyBUaGVtZTtcclxuXHRcdHJldHVybiBUaGVtZS5TWVNURU07XHJcblx0fVxyXG5cclxuXHRzZXQgdGhlbWUodmFsdWU6IFRoZW1lKSB7XHJcblx0XHRpZiAodmFsdWUgPT09IFRoZW1lLlNZU1RFTSlcclxuXHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5rZXlUaGVtZSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMua2V5VGhlbWUsIHZhbHVlKTtcclxuXHRcdHRoaXMuYXBwbHlUaGVtZSgpO1xyXG5cdH1cclxuXHJcblx0Z2V0IHJlc29sdmVkVGhlbWUoKTogVGhlbWUge1xyXG5cdFx0Y29uc3QgdGhlbWUgPSB0aGlzLnRoZW1lO1xyXG5cdFx0aWYgKHRoZW1lID09PSBUaGVtZS5TWVNURU0pIHtcclxuXHRcdFx0aWYgKHdpbmRvdy5tYXRjaE1lZGlhICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcykge1xyXG5cdFx0XHRcdHJldHVybiBUaGVtZS5EQVJLO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBUaGVtZS5MSUdIVDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoZW1lO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhcHBseVRoZW1lKCkge1xyXG5cdFx0Y29uc3QgZGF0YVRoZW1lQXR0cmlidXRlS2V5ID0gJ2RhdGEtdGhlbWUnO1xyXG5cdFx0aWYgKHRoaXMucmVzb2x2ZWRUaGVtZSA9PT0gVGhlbWUuREFSSylcclxuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShkYXRhVGhlbWVBdHRyaWJ1dGVLZXksICdkYXJrJyk7XHJcblx0XHRlbHNlXHJcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoZGF0YVRoZW1lQXR0cmlidXRlS2V5KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXR0aW5nc1N0b3JhZ2UgPSBuZXcgU2V0dGluZ3NTdG9yYWdlKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IHNldHRpbmdzU3RvcmFnZSB9IGZyb20gJy4vc2V0dGluZ3MnO1xyXG5zZXR0aW5nc1N0b3JhZ2UuaW5pdGlhbGl6ZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=