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
const hamburgerMenuButton = document.getElementById('hamburger-menu-button');
const hamburgerMenuButtonInner = document.getElementById('hamburger-menu-button-inner');
const hamburgerMenuPopup = document.getElementById('hamburger-menu-popup');
let hamburgerMenuVisible = false;
function updateHamburgerMenuVisibility() {
    if (null == hamburgerMenuButton || null == hamburgerMenuPopup) {
        console.error('Hamburger menu elements are missing found');
        return;
    }
    if (hamburgerMenuVisible) {
        hamburgerMenuPopup.style.transform = 'translate(0,0)';
        hamburgerMenuPopup.style.opacity = '1';
        hamburgerMenuPopup.classList.add('ms-box-shadow');
    }
    else {
        hamburgerMenuPopup.style.transform = 'translate(-100%, 0)';
        hamburgerMenuPopup.style.opacity = '0';
        hamburgerMenuPopup.classList.remove('ms-box-shadow');
    }
}
function main() {
    if (hamburgerMenuButton && hamburgerMenuPopup) {
        function toggle() {
            console.log('Hamburger menu button clicked');
            hamburgerMenuVisible = !hamburgerMenuVisible;
            updateHamburgerMenuVisibility();
        }
        hamburgerMenuButton.onclick = toggle;
        hamburgerMenuButtonInner.onclick = toggle;
        const links = hamburgerMenuPopup.getElementsByTagName('a');
        let lastLink = null;
        for (const link of links) {
            const href = link.getAttribute('href') || '';
            if (window.location.pathname.startsWith(href))
                lastLink = link;
        }
        if (lastLink) {
            lastLink.classList.remove('ms-outline');
            lastLink.classList.add('ms-primary');
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhY2tlbmQvLi9wYWdlcy9UeXBlU2NyaXB0L2dvYWxQb3N0LnRzIiwid2VicGFjazovL2JhY2tlbmQvLi9wYWdlcy9UeXBlU2NyaXB0L2xhbmd1YWdlU3dpdGNoZXIudHMiLCJ3ZWJwYWNrOi8vYmFja2VuZC8uL3BhZ2VzL1R5cGVTY3JpcHQvbWFpbi50cyIsIndlYnBhY2s6Ly9iYWNrZW5kLy4vcGFnZXMvVHlwZVNjcmlwdC9yaWRkbGUudHMiLCJ3ZWJwYWNrOi8vYmFja2VuZC8uL3BhZ2VzL1R5cGVTY3JpcHQvc2xlZXAudHMiLCJ3ZWJwYWNrOi8vYmFja2VuZC8uL3BhZ2VzL1R5cGVTY3JpcHQvdmlzaXRUcmFja2VyLnRzIiwid2VicGFjazovL2JhY2tlbmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmFja2VuZC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhY2tlbmQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhY2tlbmQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHJldHVybnMgVG9nZ2xlIGRpYWdvbmFsIHN0cmlwZSBiYWNrZ3JvdW5kIGZvciBnb2FsIHBvc3QgcGFuZWwgZGVwZW5kaW5nIG9uIGl0cyB3aWR0aFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFpbigpIHtcblx0Y29uc3Qgb3V0ZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvYWwtcG9zdC1vdXRlcicpIGFzIEhUTUxFbGVtZW50O1xuXHRpZiAoIW91dGVyRWxlbWVudClcblx0XHRyZXR1cm47XG5cdGNvbnN0IGlubmVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb2FsLXBvc3QtaW5uZXInKSBhcyBIVE1MRWxlbWVudDtcblx0aWYgKCFpbm5lckVsZW1lbnQpXG5cdFx0cmV0dXJuO1xuXHRjb25zdCBiYWNrZ3JvdW5kID0gb3V0ZXJFbGVtZW50LnN0eWxlLmJhY2tncm91bmQ7XG5cblx0ZnVuY3Rpb24gdXBkYXRlU2l6ZSgpIHtcblx0XHRjb25zdCBpc0JhY2tncm91bmROZWVkZWQgPSBvdXRlckVsZW1lbnQuY2xpZW50V2lkdGggLSBpbm5lckVsZW1lbnQuY2xpZW50V2lkdGggPj0gMTAwO1xuXHRcdG91dGVyRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gaXNCYWNrZ3JvdW5kTmVlZGVkID8gYmFja2dyb3VuZCA6ICdub25lJztcblx0fVxuXHR1cGRhdGVTaXplKCk7XG5cdG5ldyBSZXNpemVPYnNlcnZlcih1cGRhdGVTaXplKS5vYnNlcnZlKG91dGVyRWxlbWVudCk7XG59XG4iLCJjb25zdCBoYW1idXJnZXJNZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbWJ1cmdlci1tZW51LWJ1dHRvbicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuY29uc3QgaGFtYnVyZ2VyTWVudUJ1dHRvbklubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG5cdCdoYW1idXJnZXItbWVudS1idXR0b24taW5uZXInXG4pIGFzIEhUTUxEaXZFbGVtZW50O1xuY29uc3QgaGFtYnVyZ2VyTWVudVBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbWJ1cmdlci1tZW51LXBvcHVwJykgYXMgSFRNTERpdkVsZW1lbnQ7XG5sZXQgaGFtYnVyZ2VyTWVudVZpc2libGUgPSBmYWxzZTtcblxuZnVuY3Rpb24gdXBkYXRlSGFtYnVyZ2VyTWVudVZpc2liaWxpdHkoKSB7XG5cdGlmIChudWxsID09IGhhbWJ1cmdlck1lbnVCdXR0b24gfHwgbnVsbCA9PSBoYW1idXJnZXJNZW51UG9wdXApIHtcblx0XHRjb25zb2xlLmVycm9yKCdIYW1idXJnZXIgbWVudSBlbGVtZW50cyBhcmUgbWlzc2luZyBmb3VuZCcpO1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAoaGFtYnVyZ2VyTWVudVZpc2libGUpIHtcblx0XHRoYW1idXJnZXJNZW51UG9wdXAuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgwLDApJztcblx0XHRoYW1idXJnZXJNZW51UG9wdXAuc3R5bGUub3BhY2l0eSA9ICcxJztcblx0XHRoYW1idXJnZXJNZW51UG9wdXAuY2xhc3NMaXN0LmFkZCgnbXMtYm94LXNoYWRvdycpO1xuXHR9IGVsc2Uge1xuXHRcdGhhbWJ1cmdlck1lbnVQb3B1cC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKC0xMDAlLCAwKSc7XG5cdFx0aGFtYnVyZ2VyTWVudVBvcHVwLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG5cdFx0aGFtYnVyZ2VyTWVudVBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ21zLWJveC1zaGFkb3cnKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFpbigpIHtcblx0aWYgKGhhbWJ1cmdlck1lbnVCdXR0b24gJiYgaGFtYnVyZ2VyTWVudVBvcHVwKSB7XG5cdFx0ZnVuY3Rpb24gdG9nZ2xlKCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ0hhbWJ1cmdlciBtZW51IGJ1dHRvbiBjbGlja2VkJyk7XG5cdFx0XHRoYW1idXJnZXJNZW51VmlzaWJsZSA9ICFoYW1idXJnZXJNZW51VmlzaWJsZTtcblx0XHRcdHVwZGF0ZUhhbWJ1cmdlck1lbnVWaXNpYmlsaXR5KCk7XG5cdFx0fVxuXHRcdGhhbWJ1cmdlck1lbnVCdXR0b24ub25jbGljayA9IHRvZ2dsZTtcblx0XHRoYW1idXJnZXJNZW51QnV0dG9uSW5uZXIub25jbGljayA9IHRvZ2dsZTtcblxuXHRcdGNvbnN0IGxpbmtzID0gaGFtYnVyZ2VyTWVudVBvcHVwLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJyk7XG5cdFx0bGV0IGxhc3RMaW5rOiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRcdGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xuXHRcdFx0Y29uc3QgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgJyc7XG5cdFx0XHRpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoaHJlZikpIGxhc3RMaW5rID0gbGluaztcblx0XHR9XG5cdFx0aWYgKGxhc3RMaW5rKSB7XG5cdFx0XHRsYXN0TGluay5jbGFzc0xpc3QucmVtb3ZlKCdtcy1vdXRsaW5lJyk7XG5cdFx0XHRsYXN0TGluay5jbGFzc0xpc3QuYWRkKCdtcy1wcmltYXJ5Jyk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgKiBhcyBnb2FsUG9zdCBmcm9tICcuL2dvYWxQb3N0JztcbmdvYWxQb3N0Lm1haW4oKTtcblxuaW1wb3J0ICogYXMgbGFuZ3VhZ2VTd2l0Y2hlciBmcm9tICcuL2xhbmd1YWdlU3dpdGNoZXInO1xubGFuZ3VhZ2VTd2l0Y2hlci5tYWluKCk7XG5cbmltcG9ydCAqIGFzIHZpc2l0VHJhY2tlciBmcm9tICcuL3Zpc2l0VHJhY2tlcic7XG52aXNpdFRyYWNrZXIubWFpbigpO1xuIiwiaW1wb3J0IHsgc2xlZXAsIFNsZWVwZXIgfSBmcm9tICcuL3NsZWVwJztcblxuZXhwb3J0IGNsYXNzIFJpZGRsZUVudHJ5IHtcblx0c3RhdGljIHJlYWRvbmx5IFNMRUVQX0lOVEVSVkFMID0gNTAwXzAwMDtcblx0cHVibGljIGluZGV4ZXM6IG51bWJlcltdID0gW107XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHVibGljIHJlYWRvbmx5IGlkOiBudW1iZXIgPSAwLFxuXHRcdHB1YmxpYyByZWFkb25seSBjcmVhdGVkQXQ6IHN0cmluZyA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcblx0XHRwdWJsaWMgcmVhZG9ubHkgcHJvZHVjdDogbnVtYmVyID0gMCxcblx0XHRwdWJsaWMgcmVhZG9ubHkgcHJvZHVjdExpbWl0OiBudW1iZXIgPSAwLFxuXHRcdHB1YmxpYyByZWFkb25seSBzdGVwQ291bnQ6IG51bWJlciA9IDAsXG5cdCkge31cblxuXHRhc3luYyBzb2x2ZShwcmltZU51bWJlcnM6IG51bWJlcltdKTogUHJvbWlzZTxudW1iZXJbXT4ge1xuXHRcdHRoaXMuaW5kZXhlcyA9IG5ldyBBcnJheSh0aGlzLnN0ZXBDb3VudCkuZmlsbCgwKTtcblx0XHRjb25zdCBzbGVlcGVyID0gbmV3IFNsZWVwZXIoUmlkZGxlRW50cnkuU0xFRVBfSU5URVJWQUwpO1xuXHRcdGRvIHtcblx0XHRcdGxldCBwcm9kdWN0ID0gMTtcblx0XHRcdGZvciAoY29uc3QgaW5kZXggb2YgdGhpcy5pbmRleGVzKSB7XG5cdFx0XHRcdHByb2R1Y3QgKj0gcHJpbWVOdW1iZXJzW2luZGV4XSA/PyAwO1xuXHRcdFx0XHRwcm9kdWN0ICU9IHRoaXMucHJvZHVjdExpbWl0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHByb2R1Y3QgPT09IHRoaXMucHJvZHVjdClcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW5kZXhlcztcblx0XHRcdGlmIChzbGVlcGVyLm5leHQoKSlcblx0XHRcdFx0YXdhaXQgc2xlZXAoMCk7XG5cdFx0fSB3aGlsZSAobmV4dCh0aGlzLmluZGV4ZXMsIHByaW1lTnVtYmVycy5sZW5ndGgpKVxuXHRcdHJldHVybiB0aGlzLmluZGV4ZXMgPSBbXTtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRhc3luYyBzb2x2ZUZ1bGwocHJpbWVOdW1iZXJzOiBudW1iZXJbXSk6IFByb21pc2U8bnVtYmVyW11bXT4ge1xuXHRcdGNvbnN0IHJlc3VsdHM6IG51bWJlcltdW10gPSBbXTtcblx0XHRjb25zdCBpbmRleGVzOiBudW1iZXJbXSA9IG5ldyBBcnJheSh0aGlzLnN0ZXBDb3VudCkuZmlsbCgwKTtcblx0XHRjb25zdCBzbGVlcGVyID0gbmV3IFNsZWVwZXIoUmlkZGxlRW50cnkuU0xFRVBfSU5URVJWQUwpO1xuXHRcdGRvIHtcblx0XHRcdGxldCBwcm9kdWN0ID0gMTtcblx0XHRcdGZvciAoY29uc3QgaW5kZXggb2YgaW5kZXhlcykge1xuXHRcdFx0XHRwcm9kdWN0ICo9IHByaW1lTnVtYmVyc1tpbmRleF0gPz8gMDtcblx0XHRcdFx0cHJvZHVjdCAlPSB0aGlzLnByb2R1Y3RMaW1pdDtcblx0XHRcdH1cblx0XHRcdGlmIChwcm9kdWN0ID09PSB0aGlzLnByb2R1Y3QpIHtcblx0XHRcdFx0aWYgKCF0aGlzLmluZGV4ZXMubGVuZ3RoKVxuXHRcdFx0XHRcdHRoaXMuaW5kZXhlcyA9IFsuLi5pbmRleGVzXTtcblx0XHRcdFx0cmVzdWx0cy5wdXNoKFsuLi5pbmRleGVzXSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2xlZXBlci5uZXh0KCkpXG5cdFx0XHRcdGF3YWl0IHNsZWVwKDApO1xuXHRcdH0gd2hpbGUgKG5leHQoaW5kZXhlcywgcHJpbWVOdW1iZXJzLmxlbmd0aCkpXG5cdFx0cmV0dXJuIHJlc3VsdHM7XG5cdH1cbn1cblxuZnVuY3Rpb24gbmV4dChzZXF1ZW5jZTogbnVtYmVyW10sIGxpbWl0OiBudW1iZXIpIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzZXF1ZW5jZS5sZW5ndGg7ICsraSkge1xuXHRcdGNvbnN0IGl0ZW0gPSBzZXF1ZW5jZVtpXSA/PyAwO1xuXHRcdGlmIChpdGVtIDwgbGltaXQpIHtcblx0XHRcdHNlcXVlbmNlW2ldID0gaXRlbSArIDE7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0c2VxdWVuY2VbaV0gPSAwO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cbiIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiBzbGVlcChtaWxsaXNlY29uZHM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbWlsbGlzZWNvbmRzKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTbGVlcGVyIHtcblx0cHJpdmF0ZSBjb3VudCA9IDA7XG5cblx0Y29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGludGVydmFsQ291bnQ6IG51bWJlcikge1xuXHR9XG5cblx0bmV4dCgpOiBib29sZWFuIHtcblx0XHQrK3RoaXMuY291bnQ7XG5cdFx0aWYgKHRoaXMuY291bnQgPj0gdGhpcy5pbnRlcnZhbENvdW50KSB7XG5cdFx0XHR0aGlzLmNvdW50ID0gMDtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cbiIsImltcG9ydCB7IFJpZGRsZUVudHJ5IH0gZnJvbSAnLi9yaWRkbGUnO1xuXG5jb25zdCB3ZWJDb3VudGVyVXJsID0gJ2h0dHBzOi8vb3JhbmdlcGl6ZXJvMnctMS50YWlsZTA3NzgzLnRzLm5ldC93ZWItY291bnRlcic7XG4vLyBjb25zdCB3ZWJDb3VudGVyVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MS93ZWItY291bnRlcic7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFJpZGRsZSgpOiBQcm9taXNlPFJpZGRsZUVudHJ5PiB7XG5cdGNvbnN0IHVybCA9IHdlYkNvdW50ZXJVcmwgKyAnL3JpZGRsZS9nZW5lcmF0ZSc7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcblx0aWYgKCFyZXNwb25zZS5vaylcblx0XHR0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG5cdHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBSaWRkbGVFbnRyeSgpLCBhd2FpdCByZXNwb25zZS5qc29uKCkpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRQcmltZU51bWJlcnMoKTogUHJvbWlzZTxudW1iZXJbXT4ge1xuXHRjb25zdCB1cmwgPSB3ZWJDb3VudGVyVXJsICsgJy9yaWRkbGUvcHJpbWUtbnVtYmVycyc7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcblx0aWYgKCFyZXNwb25zZS5vaylcblx0XHR0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG5cdHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNvbHZlUmlkZGxlKCkge1xuXHRjb25zdCByaWRkbGUgPSBhd2FpdCBnZXRSaWRkbGUoKTtcblx0Y29uc3QgcHJpbWVOdW1iZXJzID0gYXdhaXQgZ2V0UHJpbWVOdW1iZXJzKCk7XG5cdGNvbnN0IGluZGV4ZXMgPSBhd2FpdCByaWRkbGUuc29sdmUocHJpbWVOdW1iZXJzKTtcblx0aWYgKCFpbmRleGVzLmxlbmd0aClcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBzb2x2ZSByaWRkbGUgJyArIHJpZGRsZS5pZCk7XG5cdHJldHVybiByaWRkbGVcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XG5cdGNvbnN0IHJpZGRsZSA9IGF3YWl0IHNvbHZlUmlkZGxlKCk7XG5cdGNvbnN0IHVybCA9IHdlYkNvdW50ZXJVcmwgKyAnL3BpbmcnICtcblx0XHQnP3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5ocmVmKSArXG5cdFx0JyZyaWRkbGVJZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHJpZGRsZS5pZCk7XG5cdGF3YWl0IGZldGNoKHVybCwge1xuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHJpZGRsZS5pbmRleGVzKSxcblx0fSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9wYWdlcy9UeXBlU2NyaXB0L21haW4udHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=