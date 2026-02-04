/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./pages/TypeScript/goalPost.ts":
/*!**************************************!*\
  !*** ./pages/TypeScript/goalPost.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.main = main;
/**
 * @returns Toggle diagonal stripe background for goal post panel depending on its width
 */
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


/***/ }),

/***/ "./pages/TypeScript/languageSwitcher.ts":
/*!**********************************************!*\
  !*** ./pages/TypeScript/languageSwitcher.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.main = main;
const headerLanguageButton = document.getElementById('header-language-button');
const headerLanguagePopup = document.getElementById('header-language-popup');
function main() {
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
}


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
goalPost.main();
const languageSwitcher = __importStar(__webpack_require__(/*! ./languageSwitcher */ "./pages/TypeScript/languageSwitcher.ts"));
languageSwitcher.main();
const visitTracker = __importStar(__webpack_require__(/*! ./visitTracker */ "./pages/TypeScript/visitTracker.ts"));
visitTracker.main();


/***/ }),

/***/ "./pages/TypeScript/riddle.ts":
/*!************************************!*\
  !*** ./pages/TypeScript/riddle.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RiddleEntry = void 0;
const sleep_1 = __webpack_require__(/*! ./sleep */ "./pages/TypeScript/sleep.ts");
class RiddleEntry {
    id;
    createdAt;
    product;
    productLimit;
    stepCount;
    static SLEEP_INTERVAL = 500_000;
    indexes = [];
    constructor(id = 0, createdAt = new Date().toISOString(), product = 0, productLimit = 0, stepCount = 0) {
        this.id = id;
        this.createdAt = createdAt;
        this.product = product;
        this.productLimit = productLimit;
        this.stepCount = stepCount;
    }
    async solve(primeNumbers) {
        this.indexes = new Array(this.stepCount).fill(0);
        const sleeper = new sleep_1.Sleeper(RiddleEntry.SLEEP_INTERVAL);
        do {
            let product = 1;
            for (const index of this.indexes) {
                product *= primeNumbers[index] ?? 0;
                product %= this.productLimit;
            }
            if (product === this.product)
                return this.indexes;
            if (sleeper.next())
                await (0, sleep_1.sleep)(0);
        } while (next(this.indexes, primeNumbers.length));
        return this.indexes = [];
        // removed by dead control flow

    }
    async solveFull(primeNumbers) {
        const results = [];
        const indexes = new Array(this.stepCount).fill(0);
        const sleeper = new sleep_1.Sleeper(RiddleEntry.SLEEP_INTERVAL);
        do {
            let product = 1;
            for (const index of indexes) {
                product *= primeNumbers[index] ?? 0;
                product %= this.productLimit;
            }
            if (product === this.product) {
                if (!this.indexes.length)
                    this.indexes = [...indexes];
                results.push([...indexes]);
            }
            if (sleeper.next())
                await (0, sleep_1.sleep)(0);
        } while (next(indexes, primeNumbers.length));
        return results;
    }
}
exports.RiddleEntry = RiddleEntry;
function next(sequence, limit) {
    for (let i = 0; i < sequence.length; ++i) {
        const item = sequence[i] ?? 0;
        if (item < limit) {
            sequence[i] = item + 1;
            return true;
        }
        sequence[i] = 0;
    }
    return false;
}


/***/ }),

/***/ "./pages/TypeScript/sleep.ts":
/*!***********************************!*\
  !*** ./pages/TypeScript/sleep.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sleeper = void 0;
exports.sleep = sleep;
async function sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
class Sleeper {
    intervalCount;
    count = 0;
    constructor(intervalCount) {
        this.intervalCount = intervalCount;
    }
    next() {
        ++this.count;
        if (this.count >= this.intervalCount) {
            this.count = 0;
            return true;
        }
        return false;
    }
}
exports.Sleeper = Sleeper;


/***/ }),

/***/ "./pages/TypeScript/visitTracker.ts":
/*!******************************************!*\
  !*** ./pages/TypeScript/visitTracker.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.main = main;
const riddle_1 = __webpack_require__(/*! ./riddle */ "./pages/TypeScript/riddle.ts");
const webCounterUrl = 'https://orangepizero2w-1.taile07783.ts.net/web-counter';
// const webCounterUrl = 'http://localhost:8081/web-counter';
async function getRiddle() {
    const url = webCounterUrl + '/riddle/generate';
    const response = await fetch(url);
    if (!response.ok)
        throw new Error(response.statusText);
    return Object.assign(new riddle_1.RiddleEntry(), await response.json());
}
async function getPrimeNumbers() {
    const url = webCounterUrl + '/riddle/prime-numbers';
    const response = await fetch(url);
    if (!response.ok)
        throw new Error(response.statusText);
    return await response.json();
}
async function solveRiddle() {
    const riddle = await getRiddle();
    const primeNumbers = await getPrimeNumbers();
    const indexes = await riddle.solve(primeNumbers);
    if (!indexes.length)
        throw new Error('Cannot solve riddle ' + riddle.id);
    return riddle;
}
async function main() {
    const riddle = await solveRiddle();
    const url = webCounterUrl + '/ping' +
        '?url=' + encodeURIComponent(window.location.href) +
        '&riddleId=' + encodeURIComponent(riddle.id);
    await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(riddle.indexes),
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRTtRQUNoQixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRTtRQUMvQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0tBQ3BDLENBQUMsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7VUN4Q0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhY2tlbmQvLi9wYWdlcy9UeXBlU2NyaXB0L2dvYWxQb3N0LnRzIiwid2VicGFjazovL2JhY2tlbmQvLi9wYWdlcy9UeXBlU2NyaXB0L2xhbmd1YWdlU3dpdGNoZXIudHMiLCJ3ZWJwYWNrOi8vYmFja2VuZC8uL3BhZ2VzL1R5cGVTY3JpcHQvbWFpbi50cyIsIndlYnBhY2s6Ly9iYWNrZW5kLy4vcGFnZXMvVHlwZVNjcmlwdC9yaWRkbGUudHMiLCJ3ZWJwYWNrOi8vYmFja2VuZC8uL3BhZ2VzL1R5cGVTY3JpcHQvc2xlZXAudHMiLCJ3ZWJwYWNrOi8vYmFja2VuZC8uL3BhZ2VzL1R5cGVTY3JpcHQvdmlzaXRUcmFja2VyLnRzIiwid2VicGFjazovL2JhY2tlbmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmFja2VuZC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhY2tlbmQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhY2tlbmQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHJldHVybnMgVG9nZ2xlIGRpYWdvbmFsIHN0cmlwZSBiYWNrZ3JvdW5kIGZvciBnb2FsIHBvc3QgcGFuZWwgZGVwZW5kaW5nIG9uIGl0cyB3aWR0aFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFpbigpIHtcblx0Y29uc3Qgb3V0ZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvYWwtcG9zdC1vdXRlcicpIGFzIEhUTUxFbGVtZW50O1xuXHRpZiAoIW91dGVyRWxlbWVudClcblx0XHRyZXR1cm47XG5cdGNvbnN0IGlubmVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb2FsLXBvc3QtaW5uZXInKSBhcyBIVE1MRWxlbWVudDtcblx0aWYgKCFpbm5lckVsZW1lbnQpXG5cdFx0cmV0dXJuO1xuXHRjb25zdCBiYWNrZ3JvdW5kID0gb3V0ZXJFbGVtZW50LnN0eWxlLmJhY2tncm91bmQ7XG5cblx0ZnVuY3Rpb24gdXBkYXRlU2l6ZSgpIHtcblx0XHRjb25zdCBpc0JhY2tncm91bmROZWVkZWQgPSBvdXRlckVsZW1lbnQuY2xpZW50V2lkdGggLSBpbm5lckVsZW1lbnQuY2xpZW50V2lkdGggPj0gMTAwO1xuXHRcdG91dGVyRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gaXNCYWNrZ3JvdW5kTmVlZGVkID8gYmFja2dyb3VuZCA6ICdub25lJztcblx0fVxuXHR1cGRhdGVTaXplKCk7XG5cdG5ldyBSZXNpemVPYnNlcnZlcih1cGRhdGVTaXplKS5vYnNlcnZlKG91dGVyRWxlbWVudCk7XG59XG4iLCJjb25zdCBoZWFkZXJMYW5ndWFnZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItbGFuZ3VhZ2UtYnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5jb25zdCBoZWFkZXJMYW5ndWFnZVBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1sYW5ndWFnZS1wb3B1cCcpIGFzIEhUTUxEaXZFbGVtZW50O1xuXG5leHBvcnQgZnVuY3Rpb24gbWFpbigpIHtcblx0aWYgKGhlYWRlckxhbmd1YWdlQnV0dG9uICYmIGhlYWRlckxhbmd1YWdlUG9wdXApIHtcblx0XHRjb25zdCBkaXNwbGF5U3R5bGUgPSAnZmxleCc7XG5cdFx0aGVhZGVyTGFuZ3VhZ2VCdXR0b24ub25jbGljayA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGlzVmlzaWJsZSA9IGhlYWRlckxhbmd1YWdlUG9wdXAuc3R5bGUuZGlzcGxheSA9PT0gZGlzcGxheVN0eWxlO1xuXHRcdFx0aGVhZGVyTGFuZ3VhZ2VQb3B1cC5zdHlsZS5kaXNwbGF5ID0gaXNWaXNpYmxlID8gJ25vbmUnIDogZGlzcGxheVN0eWxlO1xuXHRcdH07XG5cdFx0Y29uc3QgbGlua3MgPSBoZWFkZXJMYW5ndWFnZVBvcHVwLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJyk7XG5cdFx0bGV0IGxhc3RMaW5rOiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRcdGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xuXHRcdFx0Y29uc3QgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgJyc7XG5cdFx0XHRpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoaHJlZikpXG5cdFx0XHRcdGxhc3RMaW5rID0gbGluaztcblx0XHR9XG5cdFx0aWYgKGxhc3RMaW5rKVxuXHRcdFx0bGFzdExpbmsuY2xhc3NMaXN0LnJlbW92ZSgnbXMtb3V0bGluZScpO1xuXHR9XG59IiwiaW1wb3J0ICogYXMgZ29hbFBvc3QgZnJvbSAnLi9nb2FsUG9zdCc7XG5nb2FsUG9zdC5tYWluKCk7XG5cbmltcG9ydCAqIGFzIGxhbmd1YWdlU3dpdGNoZXIgZnJvbSAnLi9sYW5ndWFnZVN3aXRjaGVyJztcbmxhbmd1YWdlU3dpdGNoZXIubWFpbigpO1xuXG5pbXBvcnQgKiBhcyB2aXNpdFRyYWNrZXIgZnJvbSAnLi92aXNpdFRyYWNrZXInO1xudmlzaXRUcmFja2VyLm1haW4oKTtcbiIsImltcG9ydCB7IHNsZWVwLCBTbGVlcGVyIH0gZnJvbSAnLi9zbGVlcCc7XG5cbmV4cG9ydCBjbGFzcyBSaWRkbGVFbnRyeSB7XG5cdHN0YXRpYyByZWFkb25seSBTTEVFUF9JTlRFUlZBTCA9IDUwMF8wMDA7XG5cdHB1YmxpYyBpbmRleGVzOiBudW1iZXJbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyByZWFkb25seSBpZDogbnVtYmVyID0gMCxcblx0XHRwdWJsaWMgcmVhZG9ubHkgY3JlYXRlZEF0OiBzdHJpbmcgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG5cdFx0cHVibGljIHJlYWRvbmx5IHByb2R1Y3Q6IG51bWJlciA9IDAsXG5cdFx0cHVibGljIHJlYWRvbmx5IHByb2R1Y3RMaW1pdDogbnVtYmVyID0gMCxcblx0XHRwdWJsaWMgcmVhZG9ubHkgc3RlcENvdW50OiBudW1iZXIgPSAwLFxuXHQpIHt9XG5cblx0YXN5bmMgc29sdmUocHJpbWVOdW1iZXJzOiBudW1iZXJbXSk6IFByb21pc2U8bnVtYmVyW10+IHtcblx0XHR0aGlzLmluZGV4ZXMgPSBuZXcgQXJyYXkodGhpcy5zdGVwQ291bnQpLmZpbGwoMCk7XG5cdFx0Y29uc3Qgc2xlZXBlciA9IG5ldyBTbGVlcGVyKFJpZGRsZUVudHJ5LlNMRUVQX0lOVEVSVkFMKTtcblx0XHRkbyB7XG5cdFx0XHRsZXQgcHJvZHVjdCA9IDE7XG5cdFx0XHRmb3IgKGNvbnN0IGluZGV4IG9mIHRoaXMuaW5kZXhlcykge1xuXHRcdFx0XHRwcm9kdWN0ICo9IHByaW1lTnVtYmVyc1tpbmRleF0gPz8gMDtcblx0XHRcdFx0cHJvZHVjdCAlPSB0aGlzLnByb2R1Y3RMaW1pdDtcblx0XHRcdH1cblx0XHRcdGlmIChwcm9kdWN0ID09PSB0aGlzLnByb2R1Y3QpXG5cdFx0XHRcdHJldHVybiB0aGlzLmluZGV4ZXM7XG5cdFx0XHRpZiAoc2xlZXBlci5uZXh0KCkpXG5cdFx0XHRcdGF3YWl0IHNsZWVwKDApO1xuXHRcdH0gd2hpbGUgKG5leHQodGhpcy5pbmRleGVzLCBwcmltZU51bWJlcnMubGVuZ3RoKSlcblx0XHRyZXR1cm4gdGhpcy5pbmRleGVzID0gW107XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0YXN5bmMgc29sdmVGdWxsKHByaW1lTnVtYmVyczogbnVtYmVyW10pOiBQcm9taXNlPG51bWJlcltdW10+IHtcblx0XHRjb25zdCByZXN1bHRzOiBudW1iZXJbXVtdID0gW107XG5cdFx0Y29uc3QgaW5kZXhlczogbnVtYmVyW10gPSBuZXcgQXJyYXkodGhpcy5zdGVwQ291bnQpLmZpbGwoMCk7XG5cdFx0Y29uc3Qgc2xlZXBlciA9IG5ldyBTbGVlcGVyKFJpZGRsZUVudHJ5LlNMRUVQX0lOVEVSVkFMKTtcblx0XHRkbyB7XG5cdFx0XHRsZXQgcHJvZHVjdCA9IDE7XG5cdFx0XHRmb3IgKGNvbnN0IGluZGV4IG9mIGluZGV4ZXMpIHtcblx0XHRcdFx0cHJvZHVjdCAqPSBwcmltZU51bWJlcnNbaW5kZXhdID8/IDA7XG5cdFx0XHRcdHByb2R1Y3QgJT0gdGhpcy5wcm9kdWN0TGltaXQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAocHJvZHVjdCA9PT0gdGhpcy5wcm9kdWN0KSB7XG5cdFx0XHRcdGlmICghdGhpcy5pbmRleGVzLmxlbmd0aClcblx0XHRcdFx0XHR0aGlzLmluZGV4ZXMgPSBbLi4uaW5kZXhlc107XG5cdFx0XHRcdHJlc3VsdHMucHVzaChbLi4uaW5kZXhlc10pO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNsZWVwZXIubmV4dCgpKVxuXHRcdFx0XHRhd2FpdCBzbGVlcCgwKTtcblx0XHR9IHdoaWxlIChuZXh0KGluZGV4ZXMsIHByaW1lTnVtYmVycy5sZW5ndGgpKVxuXHRcdHJldHVybiByZXN1bHRzO1xuXHR9XG59XG5cbmZ1bmN0aW9uIG5leHQoc2VxdWVuY2U6IG51bWJlcltdLCBsaW1pdDogbnVtYmVyKSB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc2VxdWVuY2UubGVuZ3RoOyArK2kpIHtcblx0XHRjb25zdCBpdGVtID0gc2VxdWVuY2VbaV0gPz8gMDtcblx0XHRpZiAoaXRlbSA8IGxpbWl0KSB7XG5cdFx0XHRzZXF1ZW5jZVtpXSA9IGl0ZW0gKyAxO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHNlcXVlbmNlW2ldID0gMDtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG4iLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gc2xlZXAobWlsbGlzZWNvbmRzOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1pbGxpc2Vjb25kcykpO1xufVxuXG5leHBvcnQgY2xhc3MgU2xlZXBlciB7XG5cdHByaXZhdGUgY291bnQgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBpbnRlcnZhbENvdW50OiBudW1iZXIpIHtcblx0fVxuXG5cdG5leHQoKTogYm9vbGVhbiB7XG5cdFx0Kyt0aGlzLmNvdW50O1xuXHRcdGlmICh0aGlzLmNvdW50ID49IHRoaXMuaW50ZXJ2YWxDb3VudCkge1xuXHRcdFx0dGhpcy5jb3VudCA9IDA7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBSaWRkbGVFbnRyeSB9IGZyb20gJy4vcmlkZGxlJztcblxuY29uc3Qgd2ViQ291bnRlclVybCA9ICdodHRwczovL29yYW5nZXBpemVybzJ3LTEudGFpbGUwNzc4My50cy5uZXQvd2ViLWNvdW50ZXInO1xuLy8gY29uc3Qgd2ViQ291bnRlclVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODEvd2ViLWNvdW50ZXInO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRSaWRkbGUoKTogUHJvbWlzZTxSaWRkbGVFbnRyeT4ge1xuXHRjb25zdCB1cmwgPSB3ZWJDb3VudGVyVXJsICsgJy9yaWRkbGUvZ2VuZXJhdGUnO1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG5cdGlmICghcmVzcG9uc2Uub2spXG5cdFx0dGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXHRyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgUmlkZGxlRW50cnkoKSwgYXdhaXQgcmVzcG9uc2UuanNvbigpKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0UHJpbWVOdW1iZXJzKCk6IFByb21pc2U8bnVtYmVyW10+IHtcblx0Y29uc3QgdXJsID0gd2ViQ291bnRlclVybCArICcvcmlkZGxlL3ByaW1lLW51bWJlcnMnO1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG5cdGlmICghcmVzcG9uc2Uub2spXG5cdFx0dGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXHRyZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzb2x2ZVJpZGRsZSgpIHtcblx0Y29uc3QgcmlkZGxlID0gYXdhaXQgZ2V0UmlkZGxlKCk7XG5cdGNvbnN0IHByaW1lTnVtYmVycyA9IGF3YWl0IGdldFByaW1lTnVtYmVycygpO1xuXHRjb25zdCBpbmRleGVzID0gYXdhaXQgcmlkZGxlLnNvbHZlKHByaW1lTnVtYmVycyk7XG5cdGlmICghaW5kZXhlcy5sZW5ndGgpXG5cdFx0dGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgc29sdmUgcmlkZGxlICcgKyByaWRkbGUuaWQpO1xuXHRyZXR1cm4gcmlkZGxlXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYWluKCkge1xuXHRjb25zdCByaWRkbGUgPSBhd2FpdCBzb2x2ZVJpZGRsZSgpO1xuXHRjb25zdCB1cmwgPSB3ZWJDb3VudGVyVXJsICsgJy9waW5nJyArXG5cdFx0Jz91cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uaHJlZikgK1xuXHRcdCcmcmlkZGxlSWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChyaWRkbGUuaWQpO1xuXHRhd2FpdCBmZXRjaCh1cmwsIHtcblx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShyaWRkbGUuaW5kZXhlcyksXG5cdH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vcGFnZXMvVHlwZVNjcmlwdC9tYWluLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9