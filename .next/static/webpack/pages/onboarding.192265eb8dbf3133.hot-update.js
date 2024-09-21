"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/onboarding",{

/***/ "./src/components/common/CapturePhoto.jsx":
/*!************************************************!*\
  !*** ./src/components/common/CapturePhoto.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction CapturePhoto(param) {\n    let { setImage , hide  } = param;\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let stream;\n        const startCamera = async ()=>{\n            stream = await navigator.mediaDevices.getUserMedia({\n                video: true,\n                audio: false\n            });\n            videoRef.current.srcObject = stream;\n        };\n        startCamera();\n        return ()=>{\n            if (stream) {\n                stream.getTracks().forEach((track)=>{\n                    console.log(\"Track status: \".concat(track.readyState)); // Log track status before stopping\n                    track.stop();\n                });\n            }\n            if (videoRef.current) {\n                videoRef.current.srcObject = null; // Clear video source after stopping\n            }\n        };\n    }, []);\n    const capturePhoto = ()=>{\n        const canvas = document.createElement(\"canvas\");\n        canvas.getContext(\"2d\").drawImage(videoRef.current, 0, 0, 300, 150);\n        setImage(canvas.toDataURL(\"image/jpeg\"));\n        hide(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute h-4/6 w-2/6 top-1/4 left-1/3 bg-gray-900 gap-3 rounded-lg pt-2 flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-4 w-full items-center justify-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pt-2 pr-2 cursor-pointer flex items-end justify-end\",\n                    onClick: ()=>hide(false),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoClose, {\n                        className: \"h-10 w-10 cursor-pointer\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\CapturePhoto.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\CapturePhoto.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                        id: \"video\",\n                        width: \"400\",\n                        autoPlay: true,\n                        ref: videoRef\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\CapturePhoto.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\CapturePhoto.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"h-16 w-16 bg-white rounded-full cursor-pointer border-8 border-teal-light p-2 mb-10\",\n                    onClick: capturePhoto\n                }, void 0, false, {\n                    fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\CapturePhoto.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\CapturePhoto.jsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\CapturePhoto.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(CapturePhoto, \"PdMsmLAy5JKU3vCrhAlqGYQfKuA=\");\n_c = CapturePhoto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CapturePhoto);\nvar _c;\n$RefreshReg$(_c, \"CapturePhoto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vQ2FwdHVyZVBob3RvLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpRDtBQUNQO0FBRTFDLFNBQVNJLGFBQWEsS0FBa0IsRUFBRTtRQUFwQixFQUFFQyxTQUFRLEVBQUVDLEtBQUksRUFBRSxHQUFsQjs7SUFDcEIsTUFBTUMsV0FBV0wsNkNBQU1BLENBQUMsSUFBSTtJQUU1QkQsZ0RBQVNBLENBQUMsSUFBSTtRQUNaLElBQUlPO1FBQ0osTUFBTUMsY0FBYyxVQUFZO1lBQzlCRCxTQUFRLE1BQU1FLFVBQVVDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDO2dCQUNoREMsT0FBTSxJQUFJO2dCQUNWQyxPQUFNLEtBQUs7WUFDYjtZQUNBUCxTQUFTUSxPQUFPLENBQUNDLFNBQVMsR0FBR1I7UUFDL0I7UUFDQUM7UUFDQSxPQUFPLElBQUk7WUFDVCxJQUFJRCxRQUFRO2dCQUNWQSxPQUFPUyxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxDQUFDQyxRQUFVO29CQUNwQ0MsUUFBUUMsR0FBRyxDQUFDLGlCQUFrQyxPQUFqQkYsTUFBTUcsVUFBVSxJQUFLLG1DQUFtQztvQkFDckZILE1BQU1JLElBQUk7Z0JBQ1o7WUFDRixDQUFDO1lBQ0QsSUFBSWhCLFNBQVNRLE9BQU8sRUFBRTtnQkFDcEJSLFNBQVNRLE9BQU8sQ0FBQ0MsU0FBUyxHQUFHLElBQUksRUFBRSxvQ0FBb0M7WUFDekUsQ0FBQztRQUNIO0lBQ0YsR0FBRSxFQUFFO0lBQ0osTUFBTVEsZUFBZ0IsSUFBTTtRQUMxQixNQUFNQyxTQUFTQyxTQUFTQyxhQUFhLENBQUM7UUFDdENGLE9BQU9HLFVBQVUsQ0FBQyxNQUFNQyxTQUFTLENBQUN0QixTQUFTUSxPQUFPLEVBQUMsR0FBRSxHQUFFLEtBQUk7UUFDM0RWLFNBQVNvQixPQUFPSyxTQUFTLENBQUM7UUFDMUJ4QixLQUFLLEtBQUs7SUFDWjtJQUNBLHFCQUNFLDhEQUFDeUI7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUNDQyxXQUFVO29CQUNWQyxTQUFTLElBQU0zQixLQUFLLEtBQUs7OEJBRXpCLDRFQUFDSCxvREFBT0E7d0JBQUM2QixXQUFVOzs7Ozs7Ozs7Ozs4QkFFckIsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDbkI7d0JBQU1xQixJQUFHO3dCQUFRQyxPQUFNO3dCQUFNQyxRQUFRO3dCQUFDQyxLQUFLOUI7Ozs7Ozs7Ozs7OzhCQUU5Qyw4REFBQytCO29CQUNDTixXQUFVO29CQUNWQyxTQUFTVDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkI7R0FsRFNwQjtLQUFBQTtBQW9EVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vQ2FwdHVyZVBob3RvLmpzeD9kMjg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW9DbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcblxuZnVuY3Rpb24gQ2FwdHVyZVBob3RvKHsgc2V0SW1hZ2UsIGhpZGUgfSkge1xuICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBsZXQgc3RyZWFtO1xuICAgIGNvbnN0IHN0YXJ0Q2FtZXJhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgc3RyZWFtID1hd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XG4gICAgICAgIHZpZGVvOnRydWUsXG4gICAgICAgIGF1ZGlvOmZhbHNlLFxuICAgICAgfSk7XG4gICAgICB2aWRlb1JlZi5jdXJyZW50LnNyY09iamVjdCA9IHN0cmVhbTtcbiAgICB9XG4gICAgc3RhcnRDYW1lcmEoKTtcbiAgICByZXR1cm4gKCk9PntcbiAgICAgIGlmIChzdHJlYW0pIHtcbiAgICAgICAgc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goKHRyYWNrKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coYFRyYWNrIHN0YXR1czogJHt0cmFjay5yZWFkeVN0YXRlfWApOyAvLyBMb2cgdHJhY2sgc3RhdHVzIGJlZm9yZSBzdG9wcGluZ1xuICAgICAgICAgIHRyYWNrLnN0b3AoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodmlkZW9SZWYuY3VycmVudCkge1xuICAgICAgICB2aWRlb1JlZi5jdXJyZW50LnNyY09iamVjdCA9IG51bGw7IC8vIENsZWFyIHZpZGVvIHNvdXJjZSBhZnRlciBzdG9wcGluZ1xuICAgICAgfVxuICAgIH1cbiAgfSxbXSk7XG4gIGNvbnN0IGNhcHR1cmVQaG90byAgPSAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLmRyYXdJbWFnZSh2aWRlb1JlZi5jdXJyZW50LDAsMCwzMDAsMTUwKTsgXG4gICAgc2V0SW1hZ2UoY2FudmFzLnRvRGF0YVVSTChcImltYWdlL2pwZWdcIikpO1xuICAgIGhpZGUoZmFsc2UpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaC00LzYgdy0yLzYgdG9wLTEvNCBsZWZ0LTEvMyBiZy1ncmF5LTkwMCBnYXAtMyByb3VuZGVkLWxnIHB0LTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJwdC0yIHByLTIgY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1lbmQganVzdGlmeS1lbmRcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhpZGUoZmFsc2UpfVxuICAgICAgICA+XG4gICAgICAgICAgPElvQ2xvc2UgY2xhc3NOYW1lPVwiaC0xMCB3LTEwIGN1cnNvci1wb2ludGVyXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDx2aWRlbyBpZD1cInZpZGVvXCIgd2lkdGg9XCI0MDBcIiBhdXRvUGxheSByZWY9e3ZpZGVvUmVmfT48L3ZpZGVvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTYgdy0xNiBiZy13aGl0ZSByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXIgYm9yZGVyLTggYm9yZGVyLXRlYWwtbGlnaHQgcC0yIG1iLTEwXCJcbiAgICAgICAgICBvbkNsaWNrPXtjYXB0dXJlUGhvdG99XG4gICAgICAgID48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXB0dXJlUGhvdG87XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJJb0Nsb3NlIiwiQ2FwdHVyZVBob3RvIiwic2V0SW1hZ2UiLCJoaWRlIiwidmlkZW9SZWYiLCJzdHJlYW0iLCJzdGFydENhbWVyYSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInZpZGVvIiwiYXVkaW8iLCJjdXJyZW50Iiwic3JjT2JqZWN0IiwiZ2V0VHJhY2tzIiwiZm9yRWFjaCIsInRyYWNrIiwiY29uc29sZSIsImxvZyIsInJlYWR5U3RhdGUiLCJzdG9wIiwiY2FwdHVyZVBob3RvIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsInRvRGF0YVVSTCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJpZCIsIndpZHRoIiwiYXV0b1BsYXkiLCJyZWYiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/common/CapturePhoto.jsx\n"));

/***/ })

});