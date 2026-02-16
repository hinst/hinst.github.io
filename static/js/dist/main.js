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

/***/ "./pages/TypeScript/homeMenu.ts":
/*!**************************************!*\
  !*** ./pages/TypeScript/homeMenu.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.main = main;
const hamburgerMenuButton = document.getElementById('hamburger-menu-button');
const hamburgerMenuButtonInner = document.getElementById('hamburger-menu-button-inner');
const hamburgerMenuPopup = document.getElementById('hamburger-menu-popup');
let hamburgerMenuVisible = false;
function clickOutsideHamburgerMenu(e) {
    if (!e.target)
        return;
    const inside = hamburgerMenuPopup.contains(e.target);
    if (!inside) {
        hamburgerMenuVisible = false;
        updateHamburgerMenuVisibility();
    }
}
function updateHamburgerMenuVisibility() {
    if (null == hamburgerMenuButton || null == hamburgerMenuPopup) {
        console.error('Hamburger menu elements are missing found');
        return;
    }
    if (hamburgerMenuVisible) {
        hamburgerMenuPopup.style.transform = 'translate(0,0)';
        hamburgerMenuPopup.style.opacity = '1';
        hamburgerMenuPopup.classList.add('ms-box-shadow');
        setTimeout(() => document.addEventListener('click', clickOutsideHamburgerMenu, false));
    }
    else {
        hamburgerMenuPopup.style.transform = 'translate(-100%, 0)';
        hamburgerMenuPopup.style.opacity = '0';
        hamburgerMenuPopup.classList.remove('ms-box-shadow');
        document.removeEventListener('click', clickOutsideHamburgerMenu, false);
    }
}
function initializeHamburgerMenu() {
    function toggle() {
        console.log('Hamburger menu button clicked');
        hamburgerMenuVisible = !hamburgerMenuVisible;
        updateHamburgerMenuVisibility();
    }
    hamburgerMenuButton.onclick = toggle;
    hamburgerMenuButtonInner.onclick = toggle;
}
function highlightCurrentLanguage() {
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
function main() {
    if (hamburgerMenuButton && hamburgerMenuPopup) {
        initializeHamburgerMenu();
        highlightCurrentLanguage();
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
const languageSwitcher = __importStar(__webpack_require__(/*! ./homeMenu */ "./pages/TypeScript/homeMenu.ts"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZCxDQUFDO0FBRU0sS0FBSyxVQUFVLElBQUk7SUFDekIsTUFBTSxNQUFNLEdBQUcsTUFBTSxXQUFXLEVBQUUsQ0FBQztJQUNuQyxNQUFNLEdBQUcsR0FBRyxhQUFhLEdBQUcsT0FBTztRQUNsQyxPQUFPLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDbEQsWUFBWSxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QyxNQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDaEIsTUFBTSxFQUFFLE1BQU07UUFDZCxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUU7UUFDL0MsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztLQUNwQyxDQUFDLENBQUM7QUFDSixDQUFDOzs7Ozs7O1VDeENEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWNrZW5kLy4vcGFnZXMvVHlwZVNjcmlwdC9nb2FsUG9zdC50cyIsIndlYnBhY2s6Ly9iYWNrZW5kLy4vcGFnZXMvVHlwZVNjcmlwdC9ob21lTWVudS50cyIsIndlYnBhY2s6Ly9iYWNrZW5kLy4vcGFnZXMvVHlwZVNjcmlwdC9tYWluLnRzIiwid2VicGFjazovL2JhY2tlbmQvLi9wYWdlcy9UeXBlU2NyaXB0L3JpZGRsZS50cyIsIndlYnBhY2s6Ly9iYWNrZW5kLy4vcGFnZXMvVHlwZVNjcmlwdC9zbGVlcC50cyIsIndlYnBhY2s6Ly9iYWNrZW5kLy4vcGFnZXMvVHlwZVNjcmlwdC92aXNpdFRyYWNrZXIudHMiLCJ3ZWJwYWNrOi8vYmFja2VuZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYWNrZW5kL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmFja2VuZC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmFja2VuZC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAcmV0dXJucyBUb2dnbGUgZGlhZ29uYWwgc3RyaXBlIGJhY2tncm91bmQgZm9yIGdvYWwgcG9zdCBwYW5lbCBkZXBlbmRpbmcgb24gaXRzIHdpZHRoXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWluKCkge1xuXHRjb25zdCBvdXRlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ29hbC1wb3N0LW91dGVyJykgYXMgSFRNTEVsZW1lbnQ7XG5cdGlmICghb3V0ZXJFbGVtZW50KVxuXHRcdHJldHVybjtcblx0Y29uc3QgaW5uZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvYWwtcG9zdC1pbm5lcicpIGFzIEhUTUxFbGVtZW50O1xuXHRpZiAoIWlubmVyRWxlbWVudClcblx0XHRyZXR1cm47XG5cdGNvbnN0IGJhY2tncm91bmQgPSBvdXRlckVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZDtcblxuXHRmdW5jdGlvbiB1cGRhdGVTaXplKCkge1xuXHRcdGNvbnN0IGlzQmFja2dyb3VuZE5lZWRlZCA9IG91dGVyRWxlbWVudC5jbGllbnRXaWR0aCAtIGlubmVyRWxlbWVudC5jbGllbnRXaWR0aCA+PSAxMDA7XG5cdFx0b3V0ZXJFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBpc0JhY2tncm91bmROZWVkZWQgPyBiYWNrZ3JvdW5kIDogJ25vbmUnO1xuXHR9XG5cdHVwZGF0ZVNpemUoKTtcblx0bmV3IFJlc2l6ZU9ic2VydmVyKHVwZGF0ZVNpemUpLm9ic2VydmUob3V0ZXJFbGVtZW50KTtcbn1cbiIsImNvbnN0IGhhbWJ1cmdlck1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFtYnVyZ2VyLW1lbnUtYnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5jb25zdCBoYW1idXJnZXJNZW51QnV0dG9uSW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcblx0J2hhbWJ1cmdlci1tZW51LWJ1dHRvbi1pbm5lcidcbikgYXMgSFRNTERpdkVsZW1lbnQ7XG5jb25zdCBoYW1idXJnZXJNZW51UG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFtYnVyZ2VyLW1lbnUtcG9wdXAnKSBhcyBIVE1MRGl2RWxlbWVudDtcblxubGV0IGhhbWJ1cmdlck1lbnVWaXNpYmxlID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGNsaWNrT3V0c2lkZUhhbWJ1cmdlck1lbnUoZTogUG9pbnRlckV2ZW50KSB7XG5cdGlmICghZS50YXJnZXQpIHJldHVybjtcblx0Y29uc3QgaW5zaWRlID0gaGFtYnVyZ2VyTWVudVBvcHVwLmNvbnRhaW5zKGUudGFyZ2V0IGFzIE5vZGUpO1xuXHRpZiAoIWluc2lkZSkge1xuXHRcdGhhbWJ1cmdlck1lbnVWaXNpYmxlID0gZmFsc2U7XG5cdFx0dXBkYXRlSGFtYnVyZ2VyTWVudVZpc2liaWxpdHkoKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVIYW1idXJnZXJNZW51VmlzaWJpbGl0eSgpIHtcblx0aWYgKG51bGwgPT0gaGFtYnVyZ2VyTWVudUJ1dHRvbiB8fCBudWxsID09IGhhbWJ1cmdlck1lbnVQb3B1cCkge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ0hhbWJ1cmdlciBtZW51IGVsZW1lbnRzIGFyZSBtaXNzaW5nIGZvdW5kJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChoYW1idXJnZXJNZW51VmlzaWJsZSkge1xuXHRcdGhhbWJ1cmdlck1lbnVQb3B1cC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKDAsMCknO1xuXHRcdGhhbWJ1cmdlck1lbnVQb3B1cC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuXHRcdGhhbWJ1cmdlck1lbnVQb3B1cC5jbGFzc0xpc3QuYWRkKCdtcy1ib3gtc2hhZG93Jyk7XG5cdFx0c2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrT3V0c2lkZUhhbWJ1cmdlck1lbnUsIGZhbHNlKSk7XG5cdH0gZWxzZSB7XG5cdFx0aGFtYnVyZ2VyTWVudVBvcHVwLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoLTEwMCUsIDApJztcblx0XHRoYW1idXJnZXJNZW51UG9wdXAuc3R5bGUub3BhY2l0eSA9ICcwJztcblx0XHRoYW1idXJnZXJNZW51UG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnbXMtYm94LXNoYWRvdycpO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tPdXRzaWRlSGFtYnVyZ2VyTWVudSwgZmFsc2UpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVIYW1idXJnZXJNZW51KCkge1xuXHRmdW5jdGlvbiB0b2dnbGUoKSB7XG5cdFx0Y29uc29sZS5sb2coJ0hhbWJ1cmdlciBtZW51IGJ1dHRvbiBjbGlja2VkJyk7XG5cdFx0aGFtYnVyZ2VyTWVudVZpc2libGUgPSAhaGFtYnVyZ2VyTWVudVZpc2libGU7XG5cdFx0dXBkYXRlSGFtYnVyZ2VyTWVudVZpc2liaWxpdHkoKTtcblx0fVxuXHRoYW1idXJnZXJNZW51QnV0dG9uLm9uY2xpY2sgPSB0b2dnbGU7XG5cdGhhbWJ1cmdlck1lbnVCdXR0b25Jbm5lci5vbmNsaWNrID0gdG9nZ2xlO1xufVxuXG5mdW5jdGlvbiBoaWdobGlnaHRDdXJyZW50TGFuZ3VhZ2UoKSB7XG5cdGNvbnN0IGxpbmtzID0gaGFtYnVyZ2VyTWVudVBvcHVwLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJyk7XG5cdGxldCBsYXN0TGluazogSFRNTEFuY2hvckVsZW1lbnQgfCBudWxsID0gbnVsbDtcblx0Zm9yIChjb25zdCBsaW5rIG9mIGxpbmtzKSB7XG5cdFx0Y29uc3QgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgJyc7XG5cdFx0aWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKGhyZWYpKSBsYXN0TGluayA9IGxpbms7XG5cdH1cblx0aWYgKGxhc3RMaW5rKSB7XG5cdFx0bGFzdExpbmsuY2xhc3NMaXN0LnJlbW92ZSgnbXMtb3V0bGluZScpO1xuXHRcdGxhc3RMaW5rLmNsYXNzTGlzdC5hZGQoJ21zLXByaW1hcnknKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFpbigpIHtcblx0aWYgKGhhbWJ1cmdlck1lbnVCdXR0b24gJiYgaGFtYnVyZ2VyTWVudVBvcHVwKSB7XG5cdFx0aW5pdGlhbGl6ZUhhbWJ1cmdlck1lbnUoKTtcblx0XHRoaWdobGlnaHRDdXJyZW50TGFuZ3VhZ2UoKTtcblx0fVxufVxuIiwiaW1wb3J0ICogYXMgZ29hbFBvc3QgZnJvbSAnLi9nb2FsUG9zdCc7XG5nb2FsUG9zdC5tYWluKCk7XG5cbmltcG9ydCAqIGFzIGxhbmd1YWdlU3dpdGNoZXIgZnJvbSAnLi9ob21lTWVudSc7XG5sYW5ndWFnZVN3aXRjaGVyLm1haW4oKTtcblxuaW1wb3J0ICogYXMgdmlzaXRUcmFja2VyIGZyb20gJy4vdmlzaXRUcmFja2VyJztcbnZpc2l0VHJhY2tlci5tYWluKCk7XG4iLCJpbXBvcnQgeyBzbGVlcCwgU2xlZXBlciB9IGZyb20gJy4vc2xlZXAnO1xuXG5leHBvcnQgY2xhc3MgUmlkZGxlRW50cnkge1xuXHRzdGF0aWMgcmVhZG9ubHkgU0xFRVBfSU5URVJWQUwgPSA1MDBfMDAwO1xuXHRwdWJsaWMgaW5kZXhlczogbnVtYmVyW10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgcmVhZG9ubHkgaWQ6IG51bWJlciA9IDAsXG5cdFx0cHVibGljIHJlYWRvbmx5IGNyZWF0ZWRBdDogc3RyaW5nID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuXHRcdHB1YmxpYyByZWFkb25seSBwcm9kdWN0OiBudW1iZXIgPSAwLFxuXHRcdHB1YmxpYyByZWFkb25seSBwcm9kdWN0TGltaXQ6IG51bWJlciA9IDAsXG5cdFx0cHVibGljIHJlYWRvbmx5IHN0ZXBDb3VudDogbnVtYmVyID0gMCxcblx0KSB7fVxuXG5cdGFzeW5jIHNvbHZlKHByaW1lTnVtYmVyczogbnVtYmVyW10pOiBQcm9taXNlPG51bWJlcltdPiB7XG5cdFx0dGhpcy5pbmRleGVzID0gbmV3IEFycmF5KHRoaXMuc3RlcENvdW50KS5maWxsKDApO1xuXHRcdGNvbnN0IHNsZWVwZXIgPSBuZXcgU2xlZXBlcihSaWRkbGVFbnRyeS5TTEVFUF9JTlRFUlZBTCk7XG5cdFx0ZG8ge1xuXHRcdFx0bGV0IHByb2R1Y3QgPSAxO1xuXHRcdFx0Zm9yIChjb25zdCBpbmRleCBvZiB0aGlzLmluZGV4ZXMpIHtcblx0XHRcdFx0cHJvZHVjdCAqPSBwcmltZU51bWJlcnNbaW5kZXhdID8/IDA7XG5cdFx0XHRcdHByb2R1Y3QgJT0gdGhpcy5wcm9kdWN0TGltaXQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAocHJvZHVjdCA9PT0gdGhpcy5wcm9kdWN0KVxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbmRleGVzO1xuXHRcdFx0aWYgKHNsZWVwZXIubmV4dCgpKVxuXHRcdFx0XHRhd2FpdCBzbGVlcCgwKTtcblx0XHR9IHdoaWxlIChuZXh0KHRoaXMuaW5kZXhlcywgcHJpbWVOdW1iZXJzLmxlbmd0aCkpXG5cdFx0cmV0dXJuIHRoaXMuaW5kZXhlcyA9IFtdO1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGFzeW5jIHNvbHZlRnVsbChwcmltZU51bWJlcnM6IG51bWJlcltdKTogUHJvbWlzZTxudW1iZXJbXVtdPiB7XG5cdFx0Y29uc3QgcmVzdWx0czogbnVtYmVyW11bXSA9IFtdO1xuXHRcdGNvbnN0IGluZGV4ZXM6IG51bWJlcltdID0gbmV3IEFycmF5KHRoaXMuc3RlcENvdW50KS5maWxsKDApO1xuXHRcdGNvbnN0IHNsZWVwZXIgPSBuZXcgU2xlZXBlcihSaWRkbGVFbnRyeS5TTEVFUF9JTlRFUlZBTCk7XG5cdFx0ZG8ge1xuXHRcdFx0bGV0IHByb2R1Y3QgPSAxO1xuXHRcdFx0Zm9yIChjb25zdCBpbmRleCBvZiBpbmRleGVzKSB7XG5cdFx0XHRcdHByb2R1Y3QgKj0gcHJpbWVOdW1iZXJzW2luZGV4XSA/PyAwO1xuXHRcdFx0XHRwcm9kdWN0ICU9IHRoaXMucHJvZHVjdExpbWl0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHByb2R1Y3QgPT09IHRoaXMucHJvZHVjdCkge1xuXHRcdFx0XHRpZiAoIXRoaXMuaW5kZXhlcy5sZW5ndGgpXG5cdFx0XHRcdFx0dGhpcy5pbmRleGVzID0gWy4uLmluZGV4ZXNdO1xuXHRcdFx0XHRyZXN1bHRzLnB1c2goWy4uLmluZGV4ZXNdKTtcblx0XHRcdH1cblx0XHRcdGlmIChzbGVlcGVyLm5leHQoKSlcblx0XHRcdFx0YXdhaXQgc2xlZXAoMCk7XG5cdFx0fSB3aGlsZSAobmV4dChpbmRleGVzLCBwcmltZU51bWJlcnMubGVuZ3RoKSlcblx0XHRyZXR1cm4gcmVzdWx0cztcblx0fVxufVxuXG5mdW5jdGlvbiBuZXh0KHNlcXVlbmNlOiBudW1iZXJbXSwgbGltaXQ6IG51bWJlcikge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHNlcXVlbmNlLmxlbmd0aDsgKytpKSB7XG5cdFx0Y29uc3QgaXRlbSA9IHNlcXVlbmNlW2ldID8/IDA7XG5cdFx0aWYgKGl0ZW0gPCBsaW1pdCkge1xuXHRcdFx0c2VxdWVuY2VbaV0gPSBpdGVtICsgMTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRzZXF1ZW5jZVtpXSA9IDA7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufVxuIiwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNsZWVwKG1pbGxpc2Vjb25kczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtaWxsaXNlY29uZHMpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFNsZWVwZXIge1xuXHRwcml2YXRlIGNvdW50ID0gMDtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgaW50ZXJ2YWxDb3VudDogbnVtYmVyKSB7XG5cdH1cblxuXHRuZXh0KCk6IGJvb2xlYW4ge1xuXHRcdCsrdGhpcy5jb3VudDtcblx0XHRpZiAodGhpcy5jb3VudCA+PSB0aGlzLmludGVydmFsQ291bnQpIHtcblx0XHRcdHRoaXMuY291bnQgPSAwO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuIiwiaW1wb3J0IHsgUmlkZGxlRW50cnkgfSBmcm9tICcuL3JpZGRsZSc7XG5cbmNvbnN0IHdlYkNvdW50ZXJVcmwgPSAnaHR0cHM6Ly9vcmFuZ2VwaXplcm8ydy0xLnRhaWxlMDc3ODMudHMubmV0L3dlYi1jb3VudGVyJztcbi8vIGNvbnN0IHdlYkNvdW50ZXJVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgxL3dlYi1jb3VudGVyJztcblxuYXN5bmMgZnVuY3Rpb24gZ2V0UmlkZGxlKCk6IFByb21pc2U8UmlkZGxlRW50cnk+IHtcblx0Y29uc3QgdXJsID0gd2ViQ291bnRlclVybCArICcvcmlkZGxlL2dlbmVyYXRlJztcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXHRpZiAoIXJlc3BvbnNlLm9rKVxuXHRcdHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcblx0cmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IFJpZGRsZUVudHJ5KCksIGF3YWl0IHJlc3BvbnNlLmpzb24oKSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFByaW1lTnVtYmVycygpOiBQcm9taXNlPG51bWJlcltdPiB7XG5cdGNvbnN0IHVybCA9IHdlYkNvdW50ZXJVcmwgKyAnL3JpZGRsZS9wcmltZS1udW1iZXJzJztcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXHRpZiAoIXJlc3BvbnNlLm9rKVxuXHRcdHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcblx0cmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc29sdmVSaWRkbGUoKSB7XG5cdGNvbnN0IHJpZGRsZSA9IGF3YWl0IGdldFJpZGRsZSgpO1xuXHRjb25zdCBwcmltZU51bWJlcnMgPSBhd2FpdCBnZXRQcmltZU51bWJlcnMoKTtcblx0Y29uc3QgaW5kZXhlcyA9IGF3YWl0IHJpZGRsZS5zb2x2ZShwcmltZU51bWJlcnMpO1xuXHRpZiAoIWluZGV4ZXMubGVuZ3RoKVxuXHRcdHRocm93IG5ldyBFcnJvcignQ2Fubm90IHNvbHZlIHJpZGRsZSAnICsgcmlkZGxlLmlkKTtcblx0cmV0dXJuIHJpZGRsZVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcblx0Y29uc3QgcmlkZGxlID0gYXdhaXQgc29sdmVSaWRkbGUoKTtcblx0Y29uc3QgdXJsID0gd2ViQ291bnRlclVybCArICcvcGluZycgK1xuXHRcdCc/dXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLmhyZWYpICtcblx0XHQnJnJpZGRsZUlkPScgKyBlbmNvZGVVUklDb21wb25lbnQocmlkZGxlLmlkKTtcblx0YXdhaXQgZmV0Y2godXJsLCB7XG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0aGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkocmlkZGxlLmluZGV4ZXMpLFxuXHR9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3BhZ2VzL1R5cGVTY3JpcHQvbWFpbi50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==