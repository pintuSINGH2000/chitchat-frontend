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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction CapturePhoto(param) {\n    let { setImage , hide  } = param;\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let stream;\n        const startCamera = async ()=>{\n            stream = await navigator.mediaDevices.getUserMedia({\n                video: true,\n                audio: false\n            });\n            videoRef.current.srcObject = stream;\n        };\n        startCamera();\n        return ()=>{\n            if (stream) {\n                stream.getTracks().forEach((track)=>{\n                    console.log(\"Track status before stop: \".concat(track.readyState)); // Log track status\n                    track.stop(); // Stop each track (video or audio)\n                    console.log(\"Track status after stop: \".concat(track.readyState)); // Check status after stop\n                });\n            }\n            if (videoRef.current) {\n                videoRef.current.srcObject = null; // Clear video source after stopping\n            }\n        };\n    }, []);\n    const capturePhoto = ()=>{\n        const canvas = document.createElement(\"canvas\");\n        canvas.getContext(\"2d\").drawImage(videoRef.current, 0, 0, 300, 150);\n        setImage(canvas.toDataURL(\"image/jpeg\"));\n        hide(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute h-4/6 w-2/6 top-1/4 left-1/3 bg-gray-900 gap-3 rounded-lg pt-2 flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-4 w-full items-center justify-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pt-2 pr-2 cursor-pointer flex items-end justify-end\",\n                    onClick: ()=>hide(false),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoClose, {\n                        className: \"h-10 w-10 cursor-pointer\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\CapturePhoto.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\CapturePhoto.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                        id: \"video\",\n                        width: \"400\",\n                        autoPlay: true,\n                        ref: videoRef\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\CapturePhoto.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\CapturePhoto.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"h-16 w-16 bg-white rounded-full cursor-pointer border-8 border-teal-light p-2 mb-10\",\n                    onClick: capturePhoto\n                }, void 0, false, {\n                    fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\CapturePhoto.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\CapturePhoto.jsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\CapturePhoto.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(CapturePhoto, \"PdMsmLAy5JKU3vCrhAlqGYQfKuA=\");\n_c = CapturePhoto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CapturePhoto);\nvar _c;\n$RefreshReg$(_c, \"CapturePhoto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vQ2FwdHVyZVBob3RvLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpRDtBQUNQO0FBRTFDLFNBQVNJLGFBQWEsS0FBa0IsRUFBRTtRQUFwQixFQUFFQyxTQUFRLEVBQUVDLEtBQUksRUFBRSxHQUFsQjs7SUFDcEIsTUFBTUMsV0FBV0wsNkNBQU1BLENBQUMsSUFBSTtJQUU1QkQsZ0RBQVNBLENBQUMsSUFBSTtRQUNaLElBQUlPO1FBQ0osTUFBTUMsY0FBYyxVQUFZO1lBQzlCRCxTQUFRLE1BQU1FLFVBQVVDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDO2dCQUNoREMsT0FBTSxJQUFJO2dCQUNWQyxPQUFNLEtBQUs7WUFDYjtZQUNBUCxTQUFTUSxPQUFPLENBQUNDLFNBQVMsR0FBR1I7UUFDL0I7UUFDQUM7UUFDQSxPQUFPLElBQUk7WUFDVCxJQUFJRCxRQUFRO2dCQUNWQSxPQUFPUyxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxDQUFDQyxRQUFVO29CQUNwQ0MsUUFBUUMsR0FBRyxDQUFDLDZCQUE4QyxPQUFqQkYsTUFBTUcsVUFBVSxJQUFLLG1CQUFtQjtvQkFDakZILE1BQU1JLElBQUksSUFBSSxtQ0FBbUM7b0JBQ2pESCxRQUFRQyxHQUFHLENBQUMsNEJBQTZDLE9BQWpCRixNQUFNRyxVQUFVLElBQU0sMEJBQTBCO2dCQUMxRjtZQUNGLENBQUM7WUFDRCxJQUFJZixTQUFTUSxPQUFPLEVBQUU7Z0JBQ3BCUixTQUFTUSxPQUFPLENBQUNDLFNBQVMsR0FBRyxJQUFJLEVBQUUsb0NBQW9DO1lBQ3pFLENBQUM7UUFDSDtJQUNGLEdBQUUsRUFBRTtJQUNKLE1BQU1RLGVBQWdCLElBQU07UUFDMUIsTUFBTUMsU0FBU0MsU0FBU0MsYUFBYSxDQUFDO1FBQ3RDRixPQUFPRyxVQUFVLENBQUMsTUFBTUMsU0FBUyxDQUFDdEIsU0FBU1EsT0FBTyxFQUFDLEdBQUUsR0FBRSxLQUFJO1FBQzNEVixTQUFTb0IsT0FBT0ssU0FBUyxDQUFDO1FBQzFCeEIsS0FBSyxLQUFLO0lBQ1o7SUFDQSxxQkFDRSw4REFBQ3lCO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFDQ0MsV0FBVTtvQkFDVkMsU0FBUyxJQUFNM0IsS0FBSyxLQUFLOzhCQUV6Qiw0RUFBQ0gsb0RBQU9BO3dCQUFDNkIsV0FBVTs7Ozs7Ozs7Ozs7OEJBRXJCLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ25CO3dCQUFNcUIsSUFBRzt3QkFBUUMsT0FBTTt3QkFBTUMsUUFBUTt3QkFBQ0MsS0FBSzlCOzs7Ozs7Ozs7Ozs4QkFFOUMsOERBQUMrQjtvQkFDQ04sV0FBVTtvQkFDVkMsU0FBU1Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25CO0dBbkRTcEI7S0FBQUE7QUFxRFQsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0NhcHR1cmVQaG90by5qc3g/ZDI4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElvQ2xvc2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW81XCI7XG5cbmZ1bmN0aW9uIENhcHR1cmVQaG90byh7IHNldEltYWdlLCBoaWRlIH0pIHtcbiAgY29uc3QgdmlkZW9SZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgbGV0IHN0cmVhbTtcbiAgICBjb25zdCBzdGFydENhbWVyYSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHN0cmVhbSA9YXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xuICAgICAgICB2aWRlbzp0cnVlLFxuICAgICAgICBhdWRpbzpmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgdmlkZW9SZWYuY3VycmVudC5zcmNPYmplY3QgPSBzdHJlYW07XG4gICAgfVxuICAgIHN0YXJ0Q2FtZXJhKCk7XG4gICAgcmV0dXJuICgpPT57XG4gICAgICBpZiAoc3RyZWFtKSB7XG4gICAgICAgIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKCh0cmFjaykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBUcmFjayBzdGF0dXMgYmVmb3JlIHN0b3A6ICR7dHJhY2sucmVhZHlTdGF0ZX1gKTsgLy8gTG9nIHRyYWNrIHN0YXR1c1xuICAgICAgICAgIHRyYWNrLnN0b3AoKTsgLy8gU3RvcCBlYWNoIHRyYWNrICh2aWRlbyBvciBhdWRpbylcbiAgICAgICAgICBjb25zb2xlLmxvZyhgVHJhY2sgc3RhdHVzIGFmdGVyIHN0b3A6ICR7dHJhY2sucmVhZHlTdGF0ZX1gKTsgIC8vIENoZWNrIHN0YXR1cyBhZnRlciBzdG9wXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHZpZGVvUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgdmlkZW9SZWYuY3VycmVudC5zcmNPYmplY3QgPSBudWxsOyAvLyBDbGVhciB2aWRlbyBzb3VyY2UgYWZ0ZXIgc3RvcHBpbmdcbiAgICAgIH1cbiAgICB9XG4gIH0sW10pO1xuICBjb25zdCBjYXB0dXJlUGhvdG8gID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY2FudmFzLmdldENvbnRleHQoXCIyZFwiKS5kcmF3SW1hZ2UodmlkZW9SZWYuY3VycmVudCwwLDAsMzAwLDE1MCk7IFxuICAgIHNldEltYWdlKGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9qcGVnXCIpKTtcbiAgICBoaWRlKGZhbHNlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGgtNC82IHctMi82IHRvcC0xLzQgbGVmdC0xLzMgYmctZ3JheS05MDAgZ2FwLTMgcm91bmRlZC1sZyBwdC0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTQgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwicHQtMiBwci0yIGN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtZW5kIGp1c3RpZnktZW5kXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoaWRlKGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJb0Nsb3NlIGNsYXNzTmFtZT1cImgtMTAgdy0xMCBjdXJzb3ItcG9pbnRlclwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8dmlkZW8gaWQ9XCJ2aWRlb1wiIHdpZHRoPVwiNDAwXCIgYXV0b1BsYXkgcmVmPXt2aWRlb1JlZn0+PC92aWRlbz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTE2IHctMTYgYmctd2hpdGUgcm91bmRlZC1mdWxsIGN1cnNvci1wb2ludGVyIGJvcmRlci04IGJvcmRlci10ZWFsLWxpZ2h0IHAtMiBtYi0xMFwiXG4gICAgICAgICAgb25DbGljaz17Y2FwdHVyZVBob3RvfVxuICAgICAgICA+PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FwdHVyZVBob3RvO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiSW9DbG9zZSIsIkNhcHR1cmVQaG90byIsInNldEltYWdlIiwiaGlkZSIsInZpZGVvUmVmIiwic3RyZWFtIiwic3RhcnRDYW1lcmEiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ2aWRlbyIsImF1ZGlvIiwiY3VycmVudCIsInNyY09iamVjdCIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsImNvbnNvbGUiLCJsb2ciLCJyZWFkeVN0YXRlIiwic3RvcCIsImNhcHR1cmVQaG90byIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJ0b0RhdGFVUkwiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaWQiLCJ3aWR0aCIsImF1dG9QbGF5IiwicmVmIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/common/CapturePhoto.jsx\n"));

/***/ })

});