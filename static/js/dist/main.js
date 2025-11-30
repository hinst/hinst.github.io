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
//const webCounterUrl = 'https://orangepizero2w-1.taile07783.ts.net/web-counter';
const webCounterUrl = 'http://localhost:8081/web-counter';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRTtRQUNoQixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRTtRQUMvQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0tBQ3BDLENBQUMsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7VUN4Q0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhY2tlbmQvLi9wYWdlcy9UeXBlU2NyaXB0L2dvYWxQb3N0LnRzIiwid2VicGFjazovL2JhY2tlbmQvLi9wYWdlcy9UeXBlU2NyaXB0L2xhbmd1YWdlU3dpdGNoZXIudHMiLCJ3ZWJwYWNrOi8vYmFja2VuZC8uL3BhZ2VzL1R5cGVTY3JpcHQvbWFpbi50cyIsIndlYnBhY2s6Ly9iYWNrZW5kLy4vcGFnZXMvVHlwZVNjcmlwdC9yaWRkbGUudHMiLCJ3ZWJwYWNrOi8vYmFja2VuZC8uL3BhZ2VzL1R5cGVTY3JpcHQvc2xlZXAudHMiLCJ3ZWJwYWNrOi8vYmFja2VuZC8uL3BhZ2VzL1R5cGVTY3JpcHQvdmlzaXRUcmFja2VyLnRzIiwid2VicGFjazovL2JhY2tlbmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmFja2VuZC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhY2tlbmQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhY2tlbmQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAcmV0dXJucyBUb2dnbGUgZGlhZ29uYWwgc3RyaXBlIGJhY2tncm91bmQgZm9yIGdvYWwgcG9zdCBwYW5lbCBkZXBlbmRpbmcgb24gaXRzIHdpZHRoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWFpbigpIHtcclxuXHRjb25zdCBvdXRlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ29hbC1wb3N0LW91dGVyJykgYXMgSFRNTEVsZW1lbnQ7XHJcblx0aWYgKCFvdXRlckVsZW1lbnQpXHJcblx0XHRyZXR1cm47XHJcblx0Y29uc3QgaW5uZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvYWwtcG9zdC1pbm5lcicpIGFzIEhUTUxFbGVtZW50O1xyXG5cdGlmICghaW5uZXJFbGVtZW50KVxyXG5cdFx0cmV0dXJuO1xyXG5cdGNvbnN0IGJhY2tncm91bmQgPSBvdXRlckVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZDtcclxuXHJcblx0ZnVuY3Rpb24gdXBkYXRlU2l6ZSgpIHtcclxuXHRcdGNvbnN0IGlzQmFja2dyb3VuZE5lZWRlZCA9IG91dGVyRWxlbWVudC5jbGllbnRXaWR0aCAtIGlubmVyRWxlbWVudC5jbGllbnRXaWR0aCA+PSAxMDA7XHJcblx0XHRvdXRlckVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IGlzQmFja2dyb3VuZE5lZWRlZCA/IGJhY2tncm91bmQgOiAnbm9uZSc7XHJcblx0fVxyXG5cdHVwZGF0ZVNpemUoKTtcclxuXHRuZXcgUmVzaXplT2JzZXJ2ZXIodXBkYXRlU2l6ZSkub2JzZXJ2ZShvdXRlckVsZW1lbnQpO1xyXG59XHJcbiIsImNvbnN0IGhlYWRlckxhbmd1YWdlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1sYW5ndWFnZS1idXR0b24nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuY29uc3QgaGVhZGVyTGFuZ3VhZ2VQb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItbGFuZ3VhZ2UtcG9wdXAnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWluKCkge1xyXG5cdGlmIChoZWFkZXJMYW5ndWFnZUJ1dHRvbiAmJiBoZWFkZXJMYW5ndWFnZVBvcHVwKSB7XHJcblx0XHRjb25zdCBkaXNwbGF5U3R5bGUgPSAnZmxleCc7XHJcblx0XHRoZWFkZXJMYW5ndWFnZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBpc1Zpc2libGUgPSBoZWFkZXJMYW5ndWFnZVBvcHVwLnN0eWxlLmRpc3BsYXkgPT09IGRpc3BsYXlTdHlsZTtcclxuXHRcdFx0aGVhZGVyTGFuZ3VhZ2VQb3B1cC5zdHlsZS5kaXNwbGF5ID0gaXNWaXNpYmxlID8gJ25vbmUnIDogZGlzcGxheVN0eWxlO1xyXG5cdFx0fTtcclxuXHRcdGNvbnN0IGxpbmtzID0gaGVhZGVyTGFuZ3VhZ2VQb3B1cC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpO1xyXG5cdFx0bGV0IGxhc3RMaW5rOiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG5cdFx0Zm9yIChjb25zdCBsaW5rIG9mIGxpbmtzKSB7XHJcblx0XHRcdGNvbnN0IGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8ICcnO1xyXG5cdFx0XHRpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoaHJlZikpXHJcblx0XHRcdFx0bGFzdExpbmsgPSBsaW5rO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGxhc3RMaW5rKVxyXG5cdFx0XHRsYXN0TGluay5jbGFzc0xpc3QucmVtb3ZlKCdtcy1vdXRsaW5lJyk7XHJcblx0fVxyXG59IiwiaW1wb3J0ICogYXMgZ29hbFBvc3QgZnJvbSAnLi9nb2FsUG9zdCc7XHJcbmdvYWxQb3N0Lm1haW4oKTtcclxuXHJcbmltcG9ydCAqIGFzIGxhbmd1YWdlU3dpdGNoZXIgZnJvbSAnLi9sYW5ndWFnZVN3aXRjaGVyJztcclxubGFuZ3VhZ2VTd2l0Y2hlci5tYWluKCk7XHJcblxyXG5pbXBvcnQgKiBhcyB2aXNpdFRyYWNrZXIgZnJvbSAnLi92aXNpdFRyYWNrZXInO1xyXG52aXNpdFRyYWNrZXIubWFpbigpO1xyXG4iLCJpbXBvcnQgeyBzbGVlcCwgU2xlZXBlciB9IGZyb20gJy4vc2xlZXAnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJpZGRsZUVudHJ5IHtcclxuXHRzdGF0aWMgcmVhZG9ubHkgU0xFRVBfSU5URVJWQUwgPSA1MDBfMDAwO1xyXG5cdHB1YmxpYyBpbmRleGVzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHB1YmxpYyByZWFkb25seSBpZDogbnVtYmVyID0gMCxcclxuXHRcdHB1YmxpYyByZWFkb25seSBjcmVhdGVkQXQ6IHN0cmluZyA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuXHRcdHB1YmxpYyByZWFkb25seSBwcm9kdWN0OiBudW1iZXIgPSAwLFxyXG5cdFx0cHVibGljIHJlYWRvbmx5IHByb2R1Y3RMaW1pdDogbnVtYmVyID0gMCxcclxuXHRcdHB1YmxpYyByZWFkb25seSBzdGVwQ291bnQ6IG51bWJlciA9IDAsXHJcblx0KSB7fVxyXG5cclxuXHRhc3luYyBzb2x2ZShwcmltZU51bWJlcnM6IG51bWJlcltdKTogUHJvbWlzZTxudW1iZXJbXT4ge1xyXG5cdFx0dGhpcy5pbmRleGVzID0gbmV3IEFycmF5KHRoaXMuc3RlcENvdW50KS5maWxsKDApO1xyXG5cdFx0Y29uc3Qgc2xlZXBlciA9IG5ldyBTbGVlcGVyKFJpZGRsZUVudHJ5LlNMRUVQX0lOVEVSVkFMKTtcclxuXHRcdGRvIHtcclxuXHRcdFx0bGV0IHByb2R1Y3QgPSAxO1xyXG5cdFx0XHRmb3IgKGNvbnN0IGluZGV4IG9mIHRoaXMuaW5kZXhlcykge1xyXG5cdFx0XHRcdHByb2R1Y3QgKj0gcHJpbWVOdW1iZXJzW2luZGV4XSA/PyAwO1xyXG5cdFx0XHRcdHByb2R1Y3QgJT0gdGhpcy5wcm9kdWN0TGltaXQ7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHByb2R1Y3QgPT09IHRoaXMucHJvZHVjdClcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbmRleGVzO1xyXG5cdFx0XHRpZiAoc2xlZXBlci5uZXh0KCkpXHJcblx0XHRcdFx0YXdhaXQgc2xlZXAoMCk7XHJcblx0XHR9IHdoaWxlIChuZXh0KHRoaXMuaW5kZXhlcywgcHJpbWVOdW1iZXJzLmxlbmd0aCkpXHJcblx0XHRyZXR1cm4gdGhpcy5pbmRleGVzID0gW107XHJcblx0XHRyZXR1cm4gW107XHJcblx0fVxyXG5cclxuXHRhc3luYyBzb2x2ZUZ1bGwocHJpbWVOdW1iZXJzOiBudW1iZXJbXSk6IFByb21pc2U8bnVtYmVyW11bXT4ge1xyXG5cdFx0Y29uc3QgcmVzdWx0czogbnVtYmVyW11bXSA9IFtdO1xyXG5cdFx0Y29uc3QgaW5kZXhlczogbnVtYmVyW10gPSBuZXcgQXJyYXkodGhpcy5zdGVwQ291bnQpLmZpbGwoMCk7XHJcblx0XHRjb25zdCBzbGVlcGVyID0gbmV3IFNsZWVwZXIoUmlkZGxlRW50cnkuU0xFRVBfSU5URVJWQUwpO1xyXG5cdFx0ZG8ge1xyXG5cdFx0XHRsZXQgcHJvZHVjdCA9IDE7XHJcblx0XHRcdGZvciAoY29uc3QgaW5kZXggb2YgaW5kZXhlcykge1xyXG5cdFx0XHRcdHByb2R1Y3QgKj0gcHJpbWVOdW1iZXJzW2luZGV4XSA/PyAwO1xyXG5cdFx0XHRcdHByb2R1Y3QgJT0gdGhpcy5wcm9kdWN0TGltaXQ7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHByb2R1Y3QgPT09IHRoaXMucHJvZHVjdCkge1xyXG5cdFx0XHRcdGlmICghdGhpcy5pbmRleGVzLmxlbmd0aClcclxuXHRcdFx0XHRcdHRoaXMuaW5kZXhlcyA9IFsuLi5pbmRleGVzXTtcclxuXHRcdFx0XHRyZXN1bHRzLnB1c2goWy4uLmluZGV4ZXNdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoc2xlZXBlci5uZXh0KCkpXHJcblx0XHRcdFx0YXdhaXQgc2xlZXAoMCk7XHJcblx0XHR9IHdoaWxlIChuZXh0KGluZGV4ZXMsIHByaW1lTnVtYmVycy5sZW5ndGgpKVxyXG5cdFx0cmV0dXJuIHJlc3VsdHM7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBuZXh0KHNlcXVlbmNlOiBudW1iZXJbXSwgbGltaXQ6IG51bWJlcikge1xyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc2VxdWVuY2UubGVuZ3RoOyArK2kpIHtcclxuXHRcdGNvbnN0IGl0ZW0gPSBzZXF1ZW5jZVtpXSA/PyAwO1xyXG5cdFx0aWYgKGl0ZW0gPCBsaW1pdCkge1xyXG5cdFx0XHRzZXF1ZW5jZVtpXSA9IGl0ZW0gKyAxO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHNlcXVlbmNlW2ldID0gMDtcclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiBzbGVlcChtaWxsaXNlY29uZHM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtaWxsaXNlY29uZHMpKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNsZWVwZXIge1xyXG5cdHByaXZhdGUgY291bnQgPSAwO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgaW50ZXJ2YWxDb3VudDogbnVtYmVyKSB7XHJcblx0fVxyXG5cclxuXHRuZXh0KCk6IGJvb2xlYW4ge1xyXG5cdFx0Kyt0aGlzLmNvdW50O1xyXG5cdFx0aWYgKHRoaXMuY291bnQgPj0gdGhpcy5pbnRlcnZhbENvdW50KSB7XHJcblx0XHRcdHRoaXMuY291bnQgPSAwO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgUmlkZGxlRW50cnkgfSBmcm9tICcuL3JpZGRsZSc7XHJcblxyXG4vL2NvbnN0IHdlYkNvdW50ZXJVcmwgPSAnaHR0cHM6Ly9vcmFuZ2VwaXplcm8ydy0xLnRhaWxlMDc3ODMudHMubmV0L3dlYi1jb3VudGVyJztcclxuY29uc3Qgd2ViQ291bnRlclVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODEvd2ViLWNvdW50ZXInO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0UmlkZGxlKCk6IFByb21pc2U8UmlkZGxlRW50cnk+IHtcclxuXHRjb25zdCB1cmwgPSB3ZWJDb3VudGVyVXJsICsgJy9yaWRkbGUvZ2VuZXJhdGUnO1xyXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuXHRpZiAoIXJlc3BvbnNlLm9rKVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG5cdHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBSaWRkbGVFbnRyeSgpLCBhd2FpdCByZXNwb25zZS5qc29uKCkpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRQcmltZU51bWJlcnMoKTogUHJvbWlzZTxudW1iZXJbXT4ge1xyXG5cdGNvbnN0IHVybCA9IHdlYkNvdW50ZXJVcmwgKyAnL3JpZGRsZS9wcmltZS1udW1iZXJzJztcclxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcblx0aWYgKCFyZXNwb25zZS5vaylcclxuXHRcdHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuXHRyZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzb2x2ZVJpZGRsZSgpIHtcclxuXHRjb25zdCByaWRkbGUgPSBhd2FpdCBnZXRSaWRkbGUoKTtcclxuXHRjb25zdCBwcmltZU51bWJlcnMgPSBhd2FpdCBnZXRQcmltZU51bWJlcnMoKTtcclxuXHRjb25zdCBpbmRleGVzID0gYXdhaXQgcmlkZGxlLnNvbHZlKHByaW1lTnVtYmVycyk7XHJcblx0aWYgKCFpbmRleGVzLmxlbmd0aClcclxuXHRcdHRocm93IG5ldyBFcnJvcignQ2Fubm90IHNvbHZlIHJpZGRsZSAnICsgcmlkZGxlLmlkKTtcclxuXHRyZXR1cm4gcmlkZGxlXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYWluKCkge1xyXG5cdGNvbnN0IHJpZGRsZSA9IGF3YWl0IHNvbHZlUmlkZGxlKCk7XHJcblx0Y29uc3QgdXJsID0gd2ViQ291bnRlclVybCArICcvcGluZycgK1xyXG5cdFx0Jz91cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uaHJlZikgK1xyXG5cdFx0JyZyaWRkbGVJZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHJpZGRsZS5pZCk7XHJcblx0YXdhaXQgZmV0Y2godXJsLCB7XHJcblx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkocmlkZGxlLmluZGV4ZXMpLFxyXG5cdH0pO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3BhZ2VzL1R5cGVTY3JpcHQvbWFpbi50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==