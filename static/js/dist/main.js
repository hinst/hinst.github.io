/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./pages/TypeScript/goalPost.ts":
/*!**************************************!*\
  !*** ./pages/TypeScript/goalPost.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.goalPost = void 0;
function main() {
    const outerElement = document.querySelector('.goal-post-outer');
    if (!outerElement)
        return;
    const innerElement = document.querySelector('.goal-post-inner');
    if (!innerElement)
        return;
    const background = outerElement.style.background;
    function updateSize() {
        const isBackgroundNeeded = outerElement.clientWidth - innerElement.clientWidth >= 100;
        outerElement.style.background = isBackgroundNeeded ? background : 'none';
    }
    updateSize();
    new ResizeObserver(updateSize).observe(outerElement);
}
main();
exports.goalPost = 1;


/***/ }),

/***/ "./pages/TypeScript/main.ts":
/*!**********************************!*\
  !*** ./pages/TypeScript/main.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
const goalPost = __importStar(__webpack_require__(/*! ./goalPost */ "./pages/TypeScript/goalPost.ts"));
goalPost;
const headerLanguageButton = document.getElementById('header-language-button');
const headerLanguagePopup = document.getElementById('header-language-popup');
if (headerLanguageButton && headerLanguagePopup) {
    const displayStyle = 'flex';
    headerLanguageButton.onclick = () => {
        const isVisible = headerLanguagePopup.style.display === displayStyle;
        headerLanguagePopup.style.display = isVisible ? 'none' : displayStyle;
    };
    const links = headerLanguagePopup.getElementsByTagName('a');
    let lastLink = null;
    for (const link of links) {
        const href = link.getAttribute('href') || '';
        if (window.location.pathname.startsWith(href))
            lastLink = link;
    }
    if (lastLink)
        lastLink.classList.remove('ms-outline');
}


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./pages/TypeScript/main.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxJQUFJO0lBQ1osTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBZ0IsQ0FBQztJQUMvRSxJQUFJLENBQUMsWUFBWTtRQUNoQixPQUFPO0lBQ1IsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBZ0IsQ0FBQztJQUMvRSxJQUFJLENBQUMsWUFBWTtRQUNoQixPQUFPO0lBQ1IsTUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7SUFFakQsU0FBUyxVQUFVO1FBQ2xCLE1BQU0sa0JBQWtCLEdBQUcsWUFBWSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUMsV0FBVyxJQUFJLEdBQUcsQ0FBQztRQUN0RixZQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDMUUsQ0FBQztJQUNELFVBQVUsRUFBRSxDQUFDO0lBQ2IsSUFBSSxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3RELENBQUM7QUFDRCxJQUFJLEVBQUUsQ0FBQztBQUVNLGdCQUFRLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEIxQix1R0FBdUM7QUFDdkMsUUFBUSxDQUFDO0FBRVQsTUFBTSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFzQixDQUFDO0FBQ3BHLE1BQU0sbUJBQW1CLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBbUIsQ0FBQztBQUMvRixJQUFJLG9CQUFvQixJQUFJLG1CQUFtQixFQUFFLENBQUM7SUFDakQsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDO0lBQzVCLG9CQUFvQixDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7UUFDbkMsTUFBTSxTQUFTLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxZQUFZLENBQUM7UUFDckUsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO0lBQ3ZFLENBQUMsQ0FBQztJQUNGLE1BQU0sS0FBSyxHQUFHLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVELElBQUksUUFBUSxHQUE2QixJQUFJLENBQUM7SUFDOUMsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUMxQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM3QyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDNUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNsQixDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1gsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDMUMsQ0FBQzs7Ozs7OztVQ3BCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2VuZC8uL3BhZ2VzL1R5cGVTY3JpcHQvZ29hbFBvc3QudHMiLCJ3ZWJwYWNrOi8vYmFja2VuZC8uL3BhZ2VzL1R5cGVTY3JpcHQvbWFpbi50cyIsIndlYnBhY2s6Ly9iYWNrZW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhY2tlbmQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYWNrZW5kL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYWNrZW5kL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBtYWluKCkge1xyXG5cdGNvbnN0IG91dGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb2FsLXBvc3Qtb3V0ZXInKSBhcyBIVE1MRWxlbWVudDtcclxuXHRpZiAoIW91dGVyRWxlbWVudClcclxuXHRcdHJldHVybjtcclxuXHRjb25zdCBpbm5lckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ29hbC1wb3N0LWlubmVyJykgYXMgSFRNTEVsZW1lbnQ7XHJcblx0aWYgKCFpbm5lckVsZW1lbnQpXHJcblx0XHRyZXR1cm47XHJcblx0Y29uc3QgYmFja2dyb3VuZCA9IG91dGVyRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kO1xyXG5cclxuXHRmdW5jdGlvbiB1cGRhdGVTaXplKCkge1xyXG5cdFx0Y29uc3QgaXNCYWNrZ3JvdW5kTmVlZGVkID0gb3V0ZXJFbGVtZW50LmNsaWVudFdpZHRoIC0gaW5uZXJFbGVtZW50LmNsaWVudFdpZHRoID49IDEwMDtcclxuXHRcdG91dGVyRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gaXNCYWNrZ3JvdW5kTmVlZGVkID8gYmFja2dyb3VuZCA6ICdub25lJztcclxuXHR9XHJcblx0dXBkYXRlU2l6ZSgpO1xyXG5cdG5ldyBSZXNpemVPYnNlcnZlcih1cGRhdGVTaXplKS5vYnNlcnZlKG91dGVyRWxlbWVudCk7XHJcbn1cclxubWFpbigpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdvYWxQb3N0ID0gMTsiLCJpbXBvcnQgKiBhcyBnb2FsUG9zdCBmcm9tICcuL2dvYWxQb3N0JztcclxuZ29hbFBvc3Q7XHJcblxyXG5jb25zdCBoZWFkZXJMYW5ndWFnZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItbGFuZ3VhZ2UtYnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbmNvbnN0IGhlYWRlckxhbmd1YWdlUG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLWxhbmd1YWdlLXBvcHVwJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbmlmIChoZWFkZXJMYW5ndWFnZUJ1dHRvbiAmJiBoZWFkZXJMYW5ndWFnZVBvcHVwKSB7XHJcblx0Y29uc3QgZGlzcGxheVN0eWxlID0gJ2ZsZXgnO1xyXG5cdGhlYWRlckxhbmd1YWdlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcblx0XHRjb25zdCBpc1Zpc2libGUgPSBoZWFkZXJMYW5ndWFnZVBvcHVwLnN0eWxlLmRpc3BsYXkgPT09IGRpc3BsYXlTdHlsZTtcclxuXHRcdGhlYWRlckxhbmd1YWdlUG9wdXAuc3R5bGUuZGlzcGxheSA9IGlzVmlzaWJsZSA/ICdub25lJyA6IGRpc3BsYXlTdHlsZTtcclxuXHR9O1xyXG5cdGNvbnN0IGxpbmtzID0gaGVhZGVyTGFuZ3VhZ2VQb3B1cC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpO1xyXG5cdGxldCBsYXN0TGluazogSFRNTEFuY2hvckVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuXHRmb3IgKGNvbnN0IGxpbmsgb2YgbGlua3MpIHtcclxuXHRcdGNvbnN0IGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8ICcnO1xyXG5cdFx0aWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKGhyZWYpKVxyXG5cdFx0XHRsYXN0TGluayA9IGxpbms7XHJcblx0fVxyXG5cdGlmIChsYXN0TGluaylcclxuXHRcdGxhc3RMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ21zLW91dGxpbmUnKTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3BhZ2VzL1R5cGVTY3JpcHQvbWFpbi50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==