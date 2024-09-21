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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction CapturePhoto(param) {\n    let { setImage , hide  } = param;\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let stream;\n        const startCamera = async ()=>{\n            stream = await navigator.mediaDevices.getUserMedia({\n                video: true,\n                audio: false\n            });\n            if (videoRef.current) {\n                videoRef.current.srcObject = stream;\n            }\n        };\n        startCamera();\n        return ()=>{\n            if (stream) {\n                stream.getTracks().forEach((track)=>track.stop());\n            }\n            if (videoRef.current) {\n                videoRef.current.srcObject = null;\n                videoRef.current.load(); // Reset the video element\n            }\n        };\n    }, []);\n    const capturePhoto = ()=>{\n        const canvas = document.createElement(\"canvas\");\n        canvas.getContext(\"2d\").drawImage(videoRef.current, 0, 0, 300, 150);\n        setImage(canvas.toDataURL(\"image/jpeg\"));\n        hide(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute h-4/6 w-2/6 top-1/4 left-1/3 bg-gray-900 gap-3 rounded-lg pt-2 flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-4 w-full items-center justify-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pt-2 pr-2 cursor-pointer flex items-end justify-end\",\n                    onClick: ()=>hide(false),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoClose, {\n                        className: \"h-10 w-10 cursor-pointer\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\CapturePhoto.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\CapturePhoto.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                        id: \"video\",\n                        width: \"400\",\n                        autoPlay: true,\n                        ref: videoRef\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\CapturePhoto.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\CapturePhoto.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"h-16 w-16 bg-white rounded-full cursor-pointer border-8 border-teal-light p-2 mb-10\",\n                    onClick: capturePhoto\n                }, void 0, false, {\n                    fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\CapturePhoto.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\CapturePhoto.jsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\CapturePhoto.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(CapturePhoto, \"PdMsmLAy5JKU3vCrhAlqGYQfKuA=\");\n_c = CapturePhoto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CapturePhoto);\nvar _c;\n$RefreshReg$(_c, \"CapturePhoto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vQ2FwdHVyZVBob3RvLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpRDtBQUNQO0FBRTFDLFNBQVNJLGFBQWEsS0FBa0IsRUFBRTtRQUFwQixFQUFFQyxTQUFRLEVBQUVDLEtBQUksRUFBRSxHQUFsQjs7SUFDcEIsTUFBTUMsV0FBV0wsNkNBQU1BLENBQUMsSUFBSTtJQUU1QkQsZ0RBQVNBLENBQUMsSUFBSTtRQUNaLElBQUlPO1FBQ0osTUFBTUMsY0FBYyxVQUFZO1lBQzlCRCxTQUFRLE1BQU1FLFVBQVVDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDO2dCQUNoREMsT0FBTSxJQUFJO2dCQUNWQyxPQUFNLEtBQUs7WUFDYjtZQUNBLElBQUlQLFNBQVNRLE9BQU8sRUFBRTtnQkFDcEJSLFNBQVNRLE9BQU8sQ0FBQ0MsU0FBUyxHQUFHUjtZQUMvQixDQUFDO1FBQ0g7UUFDQUM7UUFDQSxPQUFPLElBQUk7WUFDVCxJQUFJRCxRQUFRO2dCQUNWQSxPQUFPUyxTQUFTLEdBQUdDLE9BQU8sQ0FBRUMsQ0FBQUEsUUFBU0EsTUFBTUMsSUFBSTtZQUNqRCxDQUFDO1lBQ0QsSUFBSWIsU0FBU1EsT0FBTyxFQUFFO2dCQUNwQlIsU0FBU1EsT0FBTyxDQUFDQyxTQUFTLEdBQUcsSUFBSTtnQkFDakNULFNBQVNRLE9BQU8sQ0FBQ00sSUFBSSxJQUFJLDBCQUEwQjtZQUNyRCxDQUFDO1FBQ0g7SUFDRixHQUFFLEVBQUU7SUFDSixNQUFNQyxlQUFnQixJQUFNO1FBQzFCLE1BQU1DLFNBQVNDLFNBQVNDLGFBQWEsQ0FBQztRQUN0Q0YsT0FBT0csVUFBVSxDQUFDLE1BQU1DLFNBQVMsQ0FBQ3BCLFNBQVNRLE9BQU8sRUFBQyxHQUFFLEdBQUUsS0FBSTtRQUMzRFYsU0FBU2tCLE9BQU9LLFNBQVMsQ0FBQztRQUMxQnRCLEtBQUssS0FBSztJQUNaO0lBQ0EscUJBQ0UsOERBQUN1QjtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQ0NDLFdBQVU7b0JBQ1ZDLFNBQVMsSUFBTXpCLEtBQUssS0FBSzs4QkFFekIsNEVBQUNILG9EQUFPQTt3QkFBQzJCLFdBQVU7Ozs7Ozs7Ozs7OzhCQUVyQiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNqQjt3QkFBTW1CLElBQUc7d0JBQVFDLE9BQU07d0JBQU1DLFFBQVE7d0JBQUNDLEtBQUs1Qjs7Ozs7Ozs7Ozs7OEJBRTlDLDhEQUFDNkI7b0JBQ0NOLFdBQVU7b0JBQ1ZDLFNBQVNUOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtuQjtHQWxEU2xCO0tBQUFBO0FBb0RULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9DYXB0dXJlUGhvdG8uanN4P2QyODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJb0Nsb3NlIH0gZnJvbSBcInJlYWN0LWljb25zL2lvNVwiO1xuXG5mdW5jdGlvbiBDYXB0dXJlUGhvdG8oeyBzZXRJbWFnZSwgaGlkZSB9KSB7XG4gIGNvbnN0IHZpZGVvUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGxldCBzdHJlYW07XG4gICAgY29uc3Qgc3RhcnRDYW1lcmEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBzdHJlYW0gPWF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcbiAgICAgICAgdmlkZW86dHJ1ZSxcbiAgICAgICAgYXVkaW86ZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIGlmICh2aWRlb1JlZi5jdXJyZW50KSB7XG4gICAgICAgIHZpZGVvUmVmLmN1cnJlbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgfVxuICAgIH1cbiAgICBzdGFydENhbWVyYSgpO1xuICAgIHJldHVybiAoKT0+e1xuICAgICAgaWYgKHN0cmVhbSkge1xuICAgICAgICBzdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaCggdHJhY2sgPT4gdHJhY2suc3RvcCgpKVxuICAgICAgfVxuICAgICAgaWYgKHZpZGVvUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgdmlkZW9SZWYuY3VycmVudC5zcmNPYmplY3QgPSBudWxsOyBcbiAgICAgICAgdmlkZW9SZWYuY3VycmVudC5sb2FkKCk7IC8vIFJlc2V0IHRoZSB2aWRlbyBlbGVtZW50XG4gICAgICB9XG4gICAgfVxuICB9LFtdKTtcbiAgY29uc3QgY2FwdHVyZVBob3RvICA9ICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikuZHJhd0ltYWdlKHZpZGVvUmVmLmN1cnJlbnQsMCwwLDMwMCwxNTApOyBcbiAgICBzZXRJbWFnZShjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvanBlZ1wiKSk7XG4gICAgaGlkZShmYWxzZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBoLTQvNiB3LTIvNiB0b3AtMS80IGxlZnQtMS8zIGJnLWdyYXktOTAwIGdhcC0zIHJvdW5kZWQtbGcgcHQtMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInB0LTIgcHItMiBjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWVuZCBqdXN0aWZ5LWVuZFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGlkZShmYWxzZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8SW9DbG9zZSBjbGFzc05hbWU9XCJoLTEwIHctMTAgY3Vyc29yLXBvaW50ZXJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPHZpZGVvIGlkPVwidmlkZW9cIiB3aWR0aD1cIjQwMFwiIGF1dG9QbGF5IHJlZj17dmlkZW9SZWZ9PjwvdmlkZW8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC0xNiB3LTE2IGJnLXdoaXRlIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciBib3JkZXItOCBib3JkZXItdGVhbC1saWdodCBwLTIgbWItMTBcIlxuICAgICAgICAgIG9uQ2xpY2s9e2NhcHR1cmVQaG90b31cbiAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcHR1cmVQaG90bztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIklvQ2xvc2UiLCJDYXB0dXJlUGhvdG8iLCJzZXRJbWFnZSIsImhpZGUiLCJ2aWRlb1JlZiIsInN0cmVhbSIsInN0YXJ0Q2FtZXJhIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwidmlkZW8iLCJhdWRpbyIsImN1cnJlbnQiLCJzcmNPYmplY3QiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJzdG9wIiwibG9hZCIsImNhcHR1cmVQaG90byIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJ0b0RhdGFVUkwiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaWQiLCJ3aWR0aCIsImF1dG9QbGF5IiwicmVmIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/common/CapturePhoto.jsx\n"));

/***/ })

});