"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_apps */ \"./pages/_apps.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    var _this = this;\n    _s();\n    /*const [money, setMoney] = useState(0)\r\n\r\n  const Aumentar = () => {\r\n        setMoney(money + 1);\r\n    }\r\n   const Diminuir = () => {\r\n            setMoney(money - 1);\r\n    }\r\n\r\n    return(\r\n        <div>\r\n            <h1>Aumentar e Diminuir</h1>\r\n            <p>Dinheiro: ${money}</p>\r\n            <button\r\n            onClick={Aumentar}\r\n            >Aumentar</button>\r\n            <button\r\n            onClick={Diminuir}\r\n            >Diminuir</button>\r\n        </div>\r\n    )*/ /*const [value, updateValue] = useState(0);\r\n            const [multi, updateMulti] = useState(0);\r\n            const [value2, updateValue2] = useState(0);\r\n\r\n            useEffect( ()=>{\r\n                updateMulti(value * value2);\r\n            })\r\n            useEffect(()=>{\r\n                updateMulti(value2 * value);\r\n\r\n            })\r\n            const clear = () =>{\r\n                updateValue(\"\");\r\n                updateValue2(\"\");\r\n            }\r\n\r\n\r\n    return(\r\n        <div className={styles.container}>\r\n            <div className={styles.header}>\r\n                <h3>Multiplicador</h3>\r\n            </div>\r\n            <p className={styles.total}>Resposta: {multi}</p>\r\n            <input\r\n            className={styles.input}\r\n            type=\"number\"\r\n            value={value}\r\n            onChange={(e)=>{updateValue(e.target.value)}}\r\n            />\r\n            <br/>\r\n            <span className={styles.span}>X</span>\r\n            <input\r\n            className={styles.input}\r\n            type=\"number\"\r\n            value={value2}\r\n            onChange={(e)=>{updateValue2(e.target.value)}}\r\n            />\r\n            <br/>\r\n            <button\r\n            className={styles.button}\r\n            onClick={clear}\r\n            >Limpar</button>\r\n        </div>\r\n            )*/ var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), input = ref[0], setInput = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        tarefas: [\n            {\n                id: 1,\n                tarefa: \"lavar a rua!\"\n            },\n            {\n                id: 2,\n                tarefa: \"Pintar o dog!\"\n            }\n        ]\n    }), compras = ref1[0], setCompras = ref1[1];\n    var lista = compras.tarefas.map(function(item) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: item.tarefa\n        }, item.id, false, {\n            fileName: \"C:\\\\Users\\\\PC-GAMER\\\\Desktop\\\\exerc\\xedcios\\\\pages\\\\index.js\",\n            lineNumber: 88,\n            columnNumber: 21\n        }, _this);\n    });\n    var getValue = function() {\n        if (input.length > 0) {\n            compras.tarefas.push({\n                id: compras.tarefas.length + 1,\n                tarefa: input\n            });\n            console.log(compras);\n            setInput(\"\");\n        } else {\n            alert(\"Digite algo no campo!\");\n        }\n    };\n    var remove = function() {\n        compras.tarefas.splice(0, 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"lista\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC-GAMER\\\\Desktop\\\\exerc\\xedcios\\\\pages\\\\index.js\",\n                lineNumber: 113,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"Lista de Tarefas\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC-GAMER\\\\Desktop\\\\exerc\\xedcios\\\\pages\\\\index.js\",\n                lineNumber: 114,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Digite uma tarefa!\",\n                value: input,\n                onChange: function(e) {\n                    return setInput(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC-GAMER\\\\Desktop\\\\exerc\\xedcios\\\\pages\\\\index.js\",\n                lineNumber: 115,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getValue,\n                children: \"Add\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC-GAMER\\\\Desktop\\\\exerc\\xedcios\\\\pages\\\\index.js\",\n                lineNumber: 121,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: remove,\n                children: \"Deletar\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC-GAMER\\\\Desktop\\\\exerc\\xedcios\\\\pages\\\\index.js\",\n                lineNumber: 124,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: lista\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC-GAMER\\\\Desktop\\\\exerc\\xedcios\\\\pages\\\\index.js\",\n                lineNumber: 127,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PC-GAMER\\\\Desktop\\\\exerc\\xedcios\\\\pages\\\\index.js\",\n        lineNumber: 112,\n        columnNumber: 17\n    }, this);\n}\n_s(Home, \"FS2YDAvDtdEd/L9pGMAXxfm1dTU=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBMEI7QUFDaUI7QUFDaEI7QUFFM0IsU0FBU0ksSUFBSSxHQUFFOzs7SUFDWDs7UUFzRVFHLE9BQU8sRUFBQztZQUFDOztnQkFFTEUsTUFBTSxFQUFDO2FBQ1Y7Ozs7YUFHQTtTQUNBO0tBQ0osQ0FBQyxFQVRLQyxPQUFPLEdBQWdCUixJQVM1QixHQVRZLEVBQUVTLFVBQVU7SUFZMUIsSUFBTUMsS0FBSyxHQUFHRjtRQUNWLHFCQUFRO3NCQUFtQkksSUFBSSxDQUFDTDtXQUFmSyxJQUFJLENBQUNOLEVBQUU7Ozs7aUJBQW9CLENBQUU7SUFDbEQsQ0FBQyxDQUFDO0lBR0YsSUFBTVEsUUFBUSxHQUFHLFdBQUs7O1lBRWxCTixPQUFPLENBQUNILE9BQU8sQ0FBQ1c7Z0JBQU1WLEVBQUUsRUFBQ0UsT0FBTyxDQUFDSCxPQUFPLENBQUNVLE1BQU0sR0FBRzs7YUFDcEMsQ0FBQztZQUNmRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1YsT0FBTyxDQUFDOztRQUV4QixPQUFLO1lBQ0RXLEtBQUssQ0FBQztRQUNWLENBQUM7SUFFRCxDQUFDO0lBRUQsSUFBTUMsTUFBTTs7O0lBT1I7UUFDU0csU0FBUyxFQUFDLE9BQU87OzBCQUNsQixRQUFDRCxLQUFHOzs7O29CQUFPOzBCQUNYOzBCQUFJOzs7Ozs7MEJBQ0osUUFBQ25CO2dCQUNEc0IsSUFBSSxFQUFDO2dCQUNMQyxXQUFXO2dCQUNaQyxLQUFLLEVBQUV4QixLQUFLOzs7aUJBQzZCOzs7OztvQkFDdEM7O2dCQUVGNkI7Ozs7OztvQkFDYTswQkFDYixRQUFDRDs7Ozs7OztvQkFFZ0I7MEJBQ2pCLFFBQUNFLElBQUU7MEJBQ0Z2Qjs7Ozs7b0JBQ0k7Ozs7OztZQUNILENBQ1Q7QUFDYixDQUFDO0dBL0hRUixJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUFpSWIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgYXBwcyBmcm9tICcuL19hcHBzJztcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKXtcclxuICAgIC8qY29uc3QgW21vbmV5LCBzZXRNb25leV0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICBjb25zdCBBdW1lbnRhciA9ICgpID0+IHtcclxuICAgICAgICBzZXRNb25leShtb25leSArIDEpO1xyXG4gICAgfVxyXG4gICBjb25zdCBEaW1pbnVpciA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0TW9uZXkobW9uZXkgLSAxKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPkF1bWVudGFyIGUgRGltaW51aXI8L2gxPlxyXG4gICAgICAgICAgICA8cD5EaW5oZWlybzogJHttb25leX08L3A+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17QXVtZW50YXJ9XHJcbiAgICAgICAgICAgID5BdW1lbnRhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e0RpbWludWlyfVxyXG4gICAgICAgICAgICA+RGltaW51aXI8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICkqL1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvKmNvbnN0IFt2YWx1ZSwgdXBkYXRlVmFsdWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IFttdWx0aSwgdXBkYXRlTXVsdGldID0gdXNlU3RhdGUoMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IFt2YWx1ZTIsIHVwZGF0ZVZhbHVlMl0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICAgICAgICAgIHVzZUVmZmVjdCggKCk9PntcclxuICAgICAgICAgICAgICAgIHVwZGF0ZU11bHRpKHZhbHVlICogdmFsdWUyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVNdWx0aSh2YWx1ZTIgKiB2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCBjbGVhciA9ICgpID0+e1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlVmFsdWUoXCJcIik7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVWYWx1ZTIoXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGgzPk11bHRpcGxpY2Fkb3I8L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudG90YWx9PlJlc3Bvc3RhOiB7bXVsdGl9PC9wPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9Pnt1cGRhdGVWYWx1ZShlLnRhcmdldC52YWx1ZSl9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zcGFufT5YPC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWUyfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57dXBkYXRlVmFsdWUyKGUudGFyZ2V0LnZhbHVlKX19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtjbGVhcn1cclxuICAgICAgICAgICAgPkxpbXBhcjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKi9cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJycpXHJcbiAgICAgICAgY29uc3QgW2NvbXByYXMsIHNldENvbXByYXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgICAgICB0YXJlZmFzOlt7XHJcbiAgICAgICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICAgICAgdGFyZWZhOlwibGF2YXIgYSBydWEhXCJcclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICBpZDoyLFxyXG4gICAgICAgICAgICAgICAgdGFyZWZhOlwiUGludGFyIG8gZG9nIVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGxpc3RhID0gY29tcHJhcy50YXJlZmFzLm1hcCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPGxpIGtleT17aXRlbS5pZH0+e2l0ZW0udGFyZWZhfTwvbGk+KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGdldFZhbHVlID0gKCkgPT57XHJcbiAgICAgICAgICAgIGlmKGlucHV0Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBjb21wcmFzLnRhcmVmYXMucHVzaCh7aWQ6Y29tcHJhcy50YXJlZmFzLmxlbmd0aCArIDEsXHJcbiAgICAgICAgICAgIHRhcmVmYTogaW5wdXR9KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb21wcmFzKVxyXG4gICAgICAgICAgICBzZXRJbnB1dCgnJylcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYWxlcnQoJ0RpZ2l0ZSBhbGdvIG5vIGNhbXBvIScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb21wcmFzLnRhcmVmYXMuc3BsaWNlKDAsIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+TGlzdGEgZGUgVGFyZWZhczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJEaWdpdGUgdW1hIHRhcmVmYSFcIn1cclxuICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dH0gXHJcbiAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElucHV0KGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Z2V0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPkFkZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZW1vdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgPkRlbGV0YXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge2xpc3RhfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sIm5hbWVzIjpbInJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhcHBzIiwiSG9tZSIsImlucHV0Iiwic2V0SW5wdXQiLCJ0YXJlZmFzIiwiaWQiLCJ0YXJlZmEiLCJjb21wcmFzIiwic2V0Q29tcHJhcyIsImxpc3RhIiwibWFwIiwiaXRlbSIsImxpIiwiZ2V0VmFsdWUiLCJsZW5ndGgiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImFsZXJ0IiwicmVtb3ZlIiwic3BsaWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});