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

/***/ "./src/components/common/Avatar.jsx":
/*!******************************************!*\
  !*** ./src/components/common/Avatar.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _ContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextMenu */ \"./src/components/common/ContextMenu.jsx\");\n/* harmony import */ var _PhotoPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhotoPicker */ \"./src/components/common/PhotoPicker.jsx\");\n/* harmony import */ var _PhotoLibrary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PhotoLibrary */ \"./src/components/common/PhotoLibrary.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Avatar(param) {\n    let { type , image , setImage  } = param;\n    _s();\n    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isContextMenuVisible, setIsContextMenuVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [contextMenuCordinates, setContextMenuCordinates] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [grabPhoto, setGrabPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [showPhotoLibrary, setShowPhotoLibrary] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const showContextMenu = (e)=>{\n        e.preventDefault();\n        setIsContextMenuVisible(true);\n        setContextMenuCordinates({\n            x: e.pageX,\n            y: e.pageY\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (grabPhoto) {\n            const data = document.getElementById(\"photo-picker\");\n            data.click();\n            document.body.onfocus = (e)=>{\n                setTimeout(()=>{\n                    setGrabPhoto(false);\n                }, 1000);\n            };\n        }\n    }, [\n        grabPhoto\n    ]);\n    const contextMenuOptions = [\n        {\n            name: \"Take Photo\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Choose From Library\",\n            callback: ()=>{\n                setShowPhotoLibrary(true);\n            }\n        },\n        {\n            name: \"Upload Photo\",\n            callback: ()=>{\n                setGrabPhoto(true);\n            }\n        },\n        {\n            name: \"Remove Photo\",\n            callback: ()=>{\n                setImage(\"/default_avatar.png\");\n            }\n        }\n    ];\n    const photoPickerChange = (e)=>{\n        const file = e.target.files[0];\n        const reader = new FileReader();\n        const data = document.createElement(\"img\");\n        reader.onload = function(event) {\n            data.src = event.target.result;\n            data.setAttribute(\"data-src\", event.target.result);\n        };\n        reader.readAsDataURL(file);\n        setTimeout(()=>{\n            setImage(data.src);\n        }, 100);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: [\n                    type === \"sm\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-10 w-10 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: image,\n                            alt: \"avatar\",\n                            className: \"rounded-full\",\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this),\n                    type === \"lg\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-14 w-14 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: image,\n                            alt: \"avatar\",\n                            className: \"rounded-full\",\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this),\n                    type === \"xl\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative cursor-pointer z-0\",\n                        onMouseEnter: ()=>setHover(true),\n                        onMouseLeave: ()=>setHover(false),\n                        onClick: (e)=>showContextMenu(e),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2 \".concat(hover ? \"visible\" : \"hidden\", \" z-10\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaCamera, {\n                                        className: \"text-2xl\",\n                                        id: \"context-opener\",\n                                        onClick: (e)=>showContextMenu(e)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        id: \"context-opener\",\n                                        onClick: (e)=>showContextMenu(e),\n                                        children: [\n                                            \"Change \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 83\n                                            }, this),\n                                            \" Profile \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 97\n                                            }, this),\n                                            \"Photo\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-60 w-60 flex items-center justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: image,\n                                    alt: \"avatar\",\n                                    className: \"rounded-full\",\n                                    fill: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            isContextMenuVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContextMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                options: contextMenuOptions,\n                cordinates: contextMenuCordinates,\n                contextMenu: isContextMenuVisible,\n                setContextMenu: setIsContextMenuVisible\n            }, void 0, false, {\n                fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 95,\n                columnNumber: 33\n            }, this),\n            grabPhoto && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PhotoPicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onChange: photoPickerChange\n            }, void 0, false, {\n                fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 98,\n                columnNumber: 22\n            }, this),\n            showPhotoLibrary && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PhotoLibrary__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                setImage: setImage,\n                hidePhotoLibrary: setShowPhotoLibrary\n            }, void 0, false, {\n                fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 101,\n                columnNumber: 28\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Avatar, \"t5dW/vULJZp4UnIsXhSAwEVjpmQ=\");\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTNDLFNBQVMsSUFBSTt3QkFDakM0QyxjQUFjLElBQU01QyxTQUFTLEtBQUs7d0JBQ2xDNkMsU0FBUyxDQUFDakMsSUFBSUQsZ0JBQWdCQzs7MENBRTlCLDhEQUFDMkI7Z0NBQ0NDLFdBQVcsOElBQXdLLE9BQTFCekMsUUFBTyxZQUFVLFFBQVEsRUFBQzs7a0RBRW5MLDhEQUFDUixvREFBUUE7d0NBQUNpRCxXQUFVO3dDQUFXTSxJQUFHO3dDQUFrQkQsU0FBUyxDQUFDakMsSUFBSUQsZ0JBQWdCQzs7Ozs7O2tEQUNsRiw4REFBQ21DO3dDQUFLRCxJQUFHO3dDQUFrQkQsU0FBUyxDQUFDakMsSUFBSUQsZ0JBQWdCQzs7NENBQUk7MERBQU8sOERBQUNvQzs7Ozs7NENBQUk7MERBQVMsOERBQUNBOzs7Ozs0Q0FBSTs7Ozs7Ozs7Ozs7OzswQ0FFekYsOERBQUNUO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDckQsbURBQUtBO29DQUFDZ0QsS0FBS3RDO29DQUFPNEMsS0FBSTtvQ0FBU0QsV0FBVTtvQ0FBZUUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNbkV6QyxzQ0FBd0IsOERBQUNULG9EQUFXQTtnQkFBQ3lELFNBQVMxQjtnQkFBb0IyQixZQUFZL0M7Z0JBQXVCZ0QsYUFBYWxEO2dCQUFzQm1ELGdCQUFnQmxEOzs7Ozs7WUFHeEpLLDJCQUFhLDhEQUFDZCxvREFBV0E7Z0JBQUM0RCxVQUFVM0I7Ozs7OztZQUdyQ2pCLGtDQUFvQiw4REFBQ2YscURBQVlBO2dCQUFDSSxVQUFVQTtnQkFBVXdELGtCQUFrQjVDOzs7Ozs7OztBQUcvRTtHQWhHU2Y7S0FBQUE7QUFrR1QsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0F2YXRhci5qc3g/MDE3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGYUNhbWVyYSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IENvbnRleHRNZW51IGZyb20gJy4vQ29udGV4dE1lbnUnO1xuaW1wb3J0IFBob3RvUGlja2VyIGZyb20gXCIuL1Bob3RvUGlja2VyXCI7XG5pbXBvcnQgUGhvdG9MaWJyYXJ5IGZyb20gXCIuL1Bob3RvTGlicmFyeVwiO1xuXG5mdW5jdGlvbiBBdmF0YXIoeyB0eXBlLCBpbWFnZSwgc2V0SW1hZ2UgfSkge1xuICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzQ29udGV4dE1lbnVWaXNpYmxlLHNldElzQ29udGV4dE1lbnVWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbnRleHRNZW51Q29yZGluYXRlcywgc2V0Q29udGV4dE1lbnVDb3JkaW5hdGVzXSA9IHVzZVN0YXRlKHtcbiAgICB4OjAsXG4gICAgeTowLFxuICB9KTtcbiAgY29uc3QgW2dyYWJQaG90byxzZXRHcmFiUGhvdG9dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd1Bob3RvTGlicmFyeSxzZXRTaG93UGhvdG9MaWJyYXJ5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc2hvd0NvbnRleHRNZW51ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0SXNDb250ZXh0TWVudVZpc2libGUodHJ1ZSk7XG4gICAgc2V0Q29udGV4dE1lbnVDb3JkaW5hdGVzKHt4OmUucGFnZVgseTplLnBhZ2VZfSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBpZihncmFiUGhvdG8pe1xuICAgICAgY29uc3QgZGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGhvdG8tcGlja2VyXCIpO1xuICAgICAgZGF0YS5jbGljaygpO1xuICAgICAgZG9jdW1lbnQuYm9keS5vbmZvY3VzID0gKGUpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgIHNldEdyYWJQaG90byhmYWxzZSk7XG4gICAgICAgIH0sMTAwMCk7XG4gICAgICB9O1xuICAgIH1cbiAgfSxbZ3JhYlBob3RvXSk7XG5cbiAgY29uc3QgY29udGV4dE1lbnVPcHRpb25zID0gW1xuICAgIHtuYW1lOlwiVGFrZSBQaG90b1wiLGNhbGxiYWNrOigpPT57fX0sXG4gICAge25hbWU6XCJDaG9vc2UgRnJvbSBMaWJyYXJ5XCIsY2FsbGJhY2s6KCk9PntcbiAgICAgIHNldFNob3dQaG90b0xpYnJhcnkodHJ1ZSk7XG4gICAgfX0sXG4gICAge25hbWU6XCJVcGxvYWQgUGhvdG9cIixjYWxsYmFjazooKT0+e1xuICAgICAgc2V0R3JhYlBob3RvKHRydWUpO1xuICAgIH19LFxuICAgIHtuYW1lOlwiUmVtb3ZlIFBob3RvXCIsY2FsbGJhY2s6KCk9PntcbiAgICAgIHNldEltYWdlKFwiL2RlZmF1bHRfYXZhdGFyLnBuZ1wiKTtcbiAgICB9fSxcbiAgXVxuXG4gIGNvbnN0IHBob3RvUGlja2VyQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICBjb25zdCBkYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCl7XG4gICAgICBkYXRhLnNyYyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICBkYXRhLnNldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIsZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgIH1cbiAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgIHNldEltYWdlKGRhdGEuc3JjKTtcbiAgICAgfSwxMDApO1xuXG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAge3R5cGUgPT09IFwic21cIiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTEwIHctMTAgXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PVwiYXZhdGFyXCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgZmlsbCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7dHlwZSA9PT0gXCJsZ1wiICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMTQgdy0xNCBcIj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9XCJhdmF0YXJcIiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIiBmaWxsIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHt0eXBlID09PSBcInhsXCIgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGN1cnNvci1wb2ludGVyIHotMFwiXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyKHRydWUpfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcihmYWxzZSl9XG4gICAgICAgICAgICBvbkNsaWNrPXsoZSk9PnNob3dDb250ZXh0TWVudShlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJnLXBob3RvcGlja2VyLW92ZXJsYXktYmFja2dyb3VuZCBoLTYwIHctNjAgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCB0ZXh0LWNlbnRlciBnYXAtMiAke2hvdmVyPyBcInZpc2libGVcIjpcImhpZGRlblwifSB6LTEwYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZhQ2FtZXJhIGNsYXNzTmFtZT1cInRleHQtMnhsXCIgaWQ9XCJjb250ZXh0LW9wZW5lclwiICBvbkNsaWNrPXsoZSk9PnNob3dDb250ZXh0TWVudShlKX0vPlxuICAgICAgICAgICAgICA8c3BhbiBpZD1cImNvbnRleHQtb3BlbmVyXCIgIG9uQ2xpY2s9eyhlKT0+c2hvd0NvbnRleHRNZW51KGUpfT5DaGFuZ2UgPGJyLz4gUHJvZmlsZSA8YnIvPlBob3RvPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNjAgdy02MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PVwiYXZhdGFyXCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgZmlsbCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtcbiAgICAgICAgaXNDb250ZXh0TWVudVZpc2libGUgJiYgPENvbnRleHRNZW51IG9wdGlvbnM9e2NvbnRleHRNZW51T3B0aW9uc30gY29yZGluYXRlcz17Y29udGV4dE1lbnVDb3JkaW5hdGVzfSBjb250ZXh0TWVudT17aXNDb250ZXh0TWVudVZpc2libGV9IHNldENvbnRleHRNZW51PXtzZXRJc0NvbnRleHRNZW51VmlzaWJsZX0vPlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBncmFiUGhvdG8gJiYgPFBob3RvUGlja2VyIG9uQ2hhbmdlPXtwaG90b1BpY2tlckNoYW5nZX0vPlxuICAgICAgfVxuXG4gICAgICB7c2hvd1Bob3RvTGlicmFyeSAmJiA8UGhvdG9MaWJyYXJ5IHNldEltYWdlPXtzZXRJbWFnZX0gaGlkZVBob3RvTGlicmFyeT17c2V0U2hvd1Bob3RvTGlicmFyeX0vPn1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZhQ2FtZXJhIiwiQ29udGV4dE1lbnUiLCJQaG90b1BpY2tlciIsIlBob3RvTGlicmFyeSIsIkF2YXRhciIsInR5cGUiLCJpbWFnZSIsInNldEltYWdlIiwiaG92ZXIiLCJzZXRIb3ZlciIsImlzQ29udGV4dE1lbnVWaXNpYmxlIiwic2V0SXNDb250ZXh0TWVudVZpc2libGUiLCJjb250ZXh0TWVudUNvcmRpbmF0ZXMiLCJzZXRDb250ZXh0TWVudUNvcmRpbmF0ZXMiLCJ4IiwieSIsImdyYWJQaG90byIsInNldEdyYWJQaG90byIsInNob3dQaG90b0xpYnJhcnkiLCJzZXRTaG93UGhvdG9MaWJyYXJ5Iiwic2hvd0NvbnRleHRNZW51IiwiZSIsInByZXZlbnREZWZhdWx0IiwicGFnZVgiLCJwYWdlWSIsImRhdGEiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xpY2siLCJib2R5Iiwib25mb2N1cyIsInNldFRpbWVvdXQiLCJjb250ZXh0TWVudU9wdGlvbnMiLCJuYW1lIiwiY2FsbGJhY2siLCJwaG90b1BpY2tlckNoYW5nZSIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJjcmVhdGVFbGVtZW50Iiwib25sb2FkIiwiZXZlbnQiLCJzcmMiLCJyZXN1bHQiLCJzZXRBdHRyaWJ1dGUiLCJyZWFkQXNEYXRhVVJMIiwiZGl2IiwiY2xhc3NOYW1lIiwiYWx0IiwiZmlsbCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIm9uQ2xpY2siLCJpZCIsInNwYW4iLCJiciIsIm9wdGlvbnMiLCJjb3JkaW5hdGVzIiwiY29udGV4dE1lbnUiLCJzZXRDb250ZXh0TWVudSIsIm9uQ2hhbmdlIiwiaGlkZVBob3RvTGlicmFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/common/Avatar.jsx\n"));

/***/ }),

/***/ "./src/components/common/PhotoLibrary.jsx":
/*!************************************************!*\
  !*** ./src/components/common/PhotoLibrary.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction PhotoLibrary() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"PhotoLibrary\"\n    }, void 0, false, {\n        fileName: \"D:\\\\Project\\\\ChitChat\\\\client\\\\src\\\\components\\\\common\\\\PhotoLibrary.jsx\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\n_c = PhotoLibrary;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotoLibrary);\nvar _c;\n$RefreshReg$(_c, \"PhotoLibrary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vUGhvdG9MaWJyYXJ5LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFMUIsU0FBU0MsZUFBZTtJQUN0QixxQkFBTyw4REFBQ0M7a0JBQUk7Ozs7OztBQUNkO0tBRlNEO0FBSVQsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL1Bob3RvTGlicmFyeS5qc3g/YmQ5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFBob3RvTGlicmFyeSgpIHtcbiAgcmV0dXJuIDxkaXY+UGhvdG9MaWJyYXJ5PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQaG90b0xpYnJhcnk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQaG90b0xpYnJhcnkiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/common/PhotoLibrary.jsx\n"));

/***/ })

});