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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbGl6ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxLQUlYO0FBSkQsV0FBWSxLQUFLO0lBQ2hCLHdCQUFlO0lBQ2Ysc0JBQWE7SUFDYiwwQkFBaUI7QUFDbEIsQ0FBQyxFQUpXLEtBQUsscUJBQUwsS0FBSyxRQUloQjtBQUVELE1BQU0sZUFBZTtJQUNwQixVQUFVO1FBQ1QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFZ0IsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUVwQyxJQUFJLEtBQUs7UUFDUixNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxJQUFJLEtBQUs7WUFBRSxPQUFPLEtBQWMsQ0FBQztRQUNqQyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksS0FBSyxDQUFDLEtBQVk7UUFDckIsSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLE1BQU07WUFDekIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7O1lBRXZDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELElBQUksYUFBYTtRQUNoQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixJQUFJLE1BQU0sQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNwRixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDbkIsQ0FBQztpQkFBTSxDQUFDO2dCQUNQLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNwQixDQUFDO1FBQ0YsQ0FBQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVPLFVBQVU7UUFDakIsTUFBTSxxQkFBcUIsR0FBRyxZQUFZLENBQUM7UUFDM0MsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLEtBQUssQ0FBQyxJQUFJO1lBQ3BDLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLE1BQU0sQ0FBQyxDQUFDOztZQUVyRSxRQUFRLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Q0FDRDtBQUVZLHVCQUFlLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQzs7Ozs7OztVQ2hEckQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBLDJGQUE2QztBQUM3QywwQkFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2VuZC8uL3BhZ2VzL1R5cGVTY3JpcHQvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vYmFja2VuZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYWNrZW5kLy4vcGFnZXMvVHlwZVNjcmlwdC9pbml0aWFsaXplLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIFRoZW1lIHtcblx0TElHSFQgPSAnTElHSFQnLFxuXHREQVJLID0gJ0RBUksnLFxuXHRTWVNURU0gPSAnU1lTVEVNJyxcbn1cblxuY2xhc3MgU2V0dGluZ3NTdG9yYWdlIHtcblx0aW5pdGlhbGl6ZSgpIHtcblx0XHR0aGlzLmFwcGx5VGhlbWUoKTtcblx0fVxuXG5cdHByaXZhdGUgcmVhZG9ubHkga2V5VGhlbWUgPSAndGhlbWUnO1xuXG5cdGdldCB0aGVtZSgpOiBUaGVtZSB7XG5cdFx0Y29uc3QgdGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleVRoZW1lKTtcblx0XHRpZiAodGhlbWUpIHJldHVybiB0aGVtZSBhcyBUaGVtZTtcblx0XHRyZXR1cm4gVGhlbWUuU1lTVEVNO1xuXHR9XG5cblx0c2V0IHRoZW1lKHZhbHVlOiBUaGVtZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gVGhlbWUuU1lTVEVNKVxuXHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5rZXlUaGVtZSk7XG5cdFx0ZWxzZVxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5rZXlUaGVtZSwgdmFsdWUpO1xuXHRcdHRoaXMuYXBwbHlUaGVtZSgpO1xuXHR9XG5cblx0Z2V0IHJlc29sdmVkVGhlbWUoKTogVGhlbWUge1xuXHRcdGNvbnN0IHRoZW1lID0gdGhpcy50aGVtZTtcblx0XHRpZiAodGhlbWUgPT09IFRoZW1lLlNZU1RFTSkge1xuXHRcdFx0aWYgKHdpbmRvdy5tYXRjaE1lZGlhICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcykge1xuXHRcdFx0XHRyZXR1cm4gVGhlbWUuREFSSztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBUaGVtZS5MSUdIVDtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoZW1lO1xuXHR9XG5cblx0cHJpdmF0ZSBhcHBseVRoZW1lKCkge1xuXHRcdGNvbnN0IGRhdGFUaGVtZUF0dHJpYnV0ZUtleSA9ICdkYXRhLXRoZW1lJztcblx0XHRpZiAodGhpcy5yZXNvbHZlZFRoZW1lID09PSBUaGVtZS5EQVJLKVxuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShkYXRhVGhlbWVBdHRyaWJ1dGVLZXksICdkYXJrJyk7XG5cdFx0ZWxzZVxuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShkYXRhVGhlbWVBdHRyaWJ1dGVLZXkpO1xuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBzZXR0aW5nc1N0b3JhZ2UgPSBuZXcgU2V0dGluZ3NTdG9yYWdlKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IHNldHRpbmdzU3RvcmFnZSB9IGZyb20gJy4vc2V0dGluZ3MnO1xuc2V0dGluZ3NTdG9yYWdlLmluaXRpYWxpemUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==