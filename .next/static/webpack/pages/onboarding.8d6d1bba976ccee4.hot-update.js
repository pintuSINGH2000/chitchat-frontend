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

/***/ "./src/components/common/ContextMenu.jsx":
/*!***********************************************!*\
  !*** ./src/components/common/ContextMenu.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction ContextMenu(param) {\n    let { options , cordinates , contextMenu , setContextMenu  } = param;\n    _s();\n    const contexMenuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleClick = (e1, callback)=>{};\n    console.log(\"psing\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-dropdown-background fixed py-2 z-{100} shadow-xl\",\n        style: {\n            top: cordinates.y,\n            left: cordinates.x\n        },\n        ref: contexMenuRef,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: options.map((param)=>/*#__PURE__*/ {\n                let { name , callback  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    onClick: ()=>handleClick(e, callback),\n                    className: \"px-5 py-2 cursor-pointer hover:bg-black\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, this)\n                }, name, false, {\n                    fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_s(ContextMenu, \"RqTOAzmy7qCorgmMqKeO0VyQTFY=\");\n_c = ContextMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextMenu);\nvar _c;\n$RefreshReg$(_c, \"ContextMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vQ29udGV4dE1lbnUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBc0M7QUFFdEMsU0FBU0UsWUFBWSxLQUFvRCxFQUFFO1FBQXRELEVBQUVDLFFBQU8sRUFBRUMsV0FBVSxFQUFFQyxZQUFXLEVBQUVDLGVBQWMsRUFBRSxHQUFwRDs7SUFDbkIsTUFBTUMsZ0JBQWdCTiw2Q0FBTUEsQ0FBQyxJQUFJO0lBQ2pDLE1BQU1PLGNBQWMsQ0FBQ0MsSUFBR0MsV0FBYSxDQUFDO0lBQ3RDQyxRQUFRQyxHQUFHLENBQUM7SUFDWixxQkFDRSw4REFBQ0M7UUFDQ0MsV0FBWTtRQUNaQyxPQUFTO1lBQUNDLEtBQUlaLFdBQVdhLENBQUM7WUFBQ0MsTUFBS2QsV0FBV2UsQ0FBQztRQUFBO1FBQzVDQyxLQUFLYjtrQkFFTCw0RUFBQ2M7c0JBQ0VsQixRQUFRbUIsR0FBRyxDQUFDLHVCQUNYO29CQURZLEVBQUVDLEtBQUksRUFBRWIsU0FBUSxFQUFFO3VCQUM5Qiw4REFBQ2M7b0JBQWNDLFNBQVMsSUFBTWpCLFlBQVlDLEdBQUdDO29CQUFXSSxXQUFVOzhCQUNoRSw0RUFBQ1k7d0JBQUtaLFdBQVU7a0NBQWNTOzs7Ozs7bUJBRHZCQTs7Ozs7WUFFTDs7Ozs7Ozs7Ozs7QUFLZDtHQW5CU3JCO0tBQUFBO0FBcUJULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9Db250ZXh0TWVudS5qc3g/NjMxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIENvbnRleHRNZW51KHsgb3B0aW9ucywgY29yZGluYXRlcywgY29udGV4dE1lbnUsIHNldENvbnRleHRNZW51IH0pIHtcbiAgY29uc3QgY29udGV4TWVudVJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSwgY2FsbGJhY2spID0+IHt9O1xuICBjb25zb2xlLmxvZyhcInBzaW5nXCIpO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGJnLWRyb3Bkb3duLWJhY2tncm91bmQgZml4ZWQgcHktMiB6LXsxMDB9IHNoYWRvdy14bGB9XG4gICAgICBzdHlsZSA9IHt7dG9wOmNvcmRpbmF0ZXMueSxsZWZ0OmNvcmRpbmF0ZXMueH19XG4gICAgICByZWY9e2NvbnRleE1lbnVSZWZ9XG4gICAgPlxuICAgICAgPHVsPlxuICAgICAgICB7b3B0aW9ucy5tYXAoKHsgbmFtZSwgY2FsbGJhY2sgfSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e25hbWV9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGUsIGNhbGxiYWNrKX0gY2xhc3NOYW1lPVwicHgtNSBweS0yIGN1cnNvci1wb2ludGVyIGhvdmVyOmJnLWJsYWNrXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e25hbWV9PC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dE1lbnU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJDb250ZXh0TWVudSIsIm9wdGlvbnMiLCJjb3JkaW5hdGVzIiwiY29udGV4dE1lbnUiLCJzZXRDb250ZXh0TWVudSIsImNvbnRleE1lbnVSZWYiLCJoYW5kbGVDbGljayIsImUiLCJjYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInRvcCIsInkiLCJsZWZ0IiwieCIsInJlZiIsInVsIiwibWFwIiwibmFtZSIsImxpIiwib25DbGljayIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/common/ContextMenu.jsx\n"));

/***/ })

});