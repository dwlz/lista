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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_apps */ \"./pages/_apps.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    var _this = this;\n    var getValue = function getValue() {\n        var _this = this;\n        compras.tarefas.push({\n            id: compras.tarefas.length + 1,\n            tarefa: input\n        });\n        var newList = compras.tarefas.map(function(item) {\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: item.tarefa\n            }, item.id, false, {\n                fileName: \"C:\\\\Users\\\\PC-GAMER\\\\Desktop\\\\exerc\\xedcios\\\\pages\\\\index.js\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, _this);\n        });\n        console.log(compras);\n        return newList;\n    };\n    _s();\n    /*const [money, setMoney] = useState(0)\r\n\r\n  const Aumentar = () => {\r\n        setMoney(money + 1);\r\n    }\r\n   const Diminuir = () => {\r\n            setMoney(money - 1);\r\n    }\r\n\r\n    return(\r\n        <div>\r\n            <h1>Aumentar e Diminuir</h1>\r\n            <p>Dinheiro: ${money}</p>\r\n            <button\r\n            onClick={Aumentar}\r\n            >Aumentar</button>\r\n            <button\r\n            onClick={Diminuir}\r\n            >Diminuir</button>\r\n        </div>\r\n    )*/ /*const [value, updateValue] = useState(0);\r\n            const [multi, updateMulti] = useState(0);\r\n            const [value2, updateValue2] = useState(0);\r\n\r\n            useEffect( ()=>{\r\n                updateMulti(value * value2);\r\n            })\r\n            useEffect(()=>{\r\n                updateMulti(value2 * value);\r\n\r\n            })\r\n            const clear = () =>{\r\n                updateValue(\"\");\r\n                updateValue2(\"\");\r\n            }\r\n\r\n\r\n    return(\r\n        <div className={styles.container}>\r\n            <div className={styles.header}>\r\n                <h3>Multiplicador</h3>\r\n            </div>\r\n            <p className={styles.total}>Resposta: {multi}</p>\r\n            <input\r\n            className={styles.input}\r\n            type=\"number\"\r\n            value={value}\r\n            onChange={(e)=>{updateValue(e.target.value)}}\r\n            />\r\n            <br/>\r\n            <span className={styles.span}>X</span>\r\n            <input\r\n            className={styles.input}\r\n            type=\"number\"\r\n            value={value2}\r\n            onChange={(e)=>{updateValue2(e.target.value)}}\r\n            />\r\n            <br/>\r\n            <button\r\n            className={styles.button}\r\n            onClick={clear}\r\n            >Limpar</button>\r\n        </div>\r\n            )*/ var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), input = ref[0], setInput = ref[1];\n    var compras = {\n        tarefas: [\n            {\n                id: 1,\n                tarefa: \"lavar a rua!\"\n            },\n            {\n                id: 2,\n                tarefa: \"Pintar o dog!\"\n            }\n        ]\n    };\n    var lista = compras.tarefas.map(function(item) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: item.tarefa\n        }, item.id, false, {\n            fileName: \"C:\\\\Users\\\\PC-GAMER\\\\Desktop\\\\exerc\\xedcios\\\\pages\\\\index.js\",\n            lineNumber: 87,\n            columnNumber: 20\n        }, _this);\n    });\n    var newList = compras.tarefas.map();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"Lista\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC-GAMER\\\\Desktop\\\\exerc\\xedcios\\\\pages\\\\index.js\",\n                lineNumber: 104,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Digite uma tarefa!\",\n                value: input,\n                onChange: function(e) {\n                    return setInput(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC-GAMER\\\\Desktop\\\\exerc\\xedcios\\\\pages\\\\index.js\",\n                lineNumber: 105,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getValue,\n                children: \"Add\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC-GAMER\\\\Desktop\\\\exerc\\xedcios\\\\pages\\\\index.js\",\n                lineNumber: 111,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    lista,\n                    newList\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PC-GAMER\\\\Desktop\\\\exerc\\xedcios\\\\pages\\\\index.js\",\n                lineNumber: 114,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PC-GAMER\\\\Desktop\\\\exerc\\xedcios\\\\pages\\\\index.js\",\n        lineNumber: 103,\n        columnNumber: 17\n    }, this);\n}\n_s(Home, \"v2x6wirwKCy++9DuW8s383qRkbI=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBMEI7QUFDaUI7QUFDaEI7QUFFM0IsU0FBU0ksSUFBSSxHQUFFOztRQXNGRUMsUUFBUSxHQUFqQixTQUFTQSxRQUFRLEdBQUU7O1FBQ2ZDLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUM7WUFBQ0MsRUFBRSxFQUFDSCxPQUFPLENBQUNDLE9BQU8sQ0FBQ0csTUFBTSxHQUFHLENBQUM7WUFDbkRDLE1BQU0sRUFBRUMsS0FBSztTQUFDLENBQUM7UUFDaEIsSUFBTUMsT0FBTyxHQUFHUCxPQUFPLENBQUNDLE9BQU8sQ0FBQ08sR0FBRyxDQUFFQyxTQUFBQSxJQUFJLEVBQUk7MEJBQzVDLDhEQUFDQyxJQUFFOzBCQUFnQkQsSUFBSSxDQUFDSixNQUFNO2VBQXJCSSxJQUFJLENBQUNOLEVBQUU7Ozs7cUJBQW9CLENBQUM7UUFDckMsQ0FBQyxDQUFDO1FBQ0ZRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWixPQUFPLENBQUM7UUFDcEIsT0FBT08sT0FBTztJQUNsQixDQUFDOztJQTdGTDs7UUF1RVFOLE9BQU8sRUFBQztZQUFDOztnQkFFTEksTUFBTSxFQUFDO2FBQ1Y7Ozs7YUFHQTtTQUNBO0tBQ0o7SUFDRCxJQUFNUyxLQUFLLEdBQUdkO1FBQ1YscUJBQU87c0JBQW1CUyxJQUFJLENBQUNKO1dBQWZJLElBQUksQ0FBQ04sRUFBRTs7OztpQkFBb0IsQ0FBQztJQUNoRCxDQUFDLENBQUM7SUFZRixJQUFNSSxPQUFPLEdBQUdQLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDTyxHQUFHLEVBQUc7OzswQkFJMUIsUUFBQ1EsSUFBRTs7Ozs7O29CQUFXOzBCQUNkO2dCQUNBQyxJQUFJLEVBQUMsTUFBTTs7Ozs7aUJBRzZCOzs7Ozs7MEJBRXhDLFFBQUNNO2dCQUNEQyxPQUFPLEVBQUV6QjswQkFDUjs7Ozs7OzBCQUNELFFBQUMwQjs7b0JBQ0FYLEtBQUs7b0JBQ0xQLE9BQU87Ozs7OztvQkFDSDs7Ozs7O1lBQ0gsQ0FDVDtBQUNiLENBQUM7R0FuSFFULElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQXFIYixlQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGFwcHMgZnJvbSAnLi9fYXBwcyc7XHJcblxyXG5mdW5jdGlvbiBIb21lKCl7XHJcbiAgICAvKmNvbnN0IFttb25leSwgc2V0TW9uZXldID0gdXNlU3RhdGUoMClcclxuXHJcbiAgY29uc3QgQXVtZW50YXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0TW9uZXkobW9uZXkgKyAxKTtcclxuICAgIH1cclxuICAgY29uc3QgRGltaW51aXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldE1vbmV5KG1vbmV5IC0gMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5BdW1lbnRhciBlIERpbWludWlyPC9oMT5cclxuICAgICAgICAgICAgPHA+RGluaGVpcm86ICR7bW9uZXl9PC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e0F1bWVudGFyfVxyXG4gICAgICAgICAgICA+QXVtZW50YXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtEaW1pbnVpcn1cclxuICAgICAgICAgICAgPkRpbWludWlyPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApKi9cclxuICAgICAgICBcclxuICAgICAgICAgICAgLypjb25zdCBbdmFsdWUsIHVwZGF0ZVZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgICAgICAgICBjb25zdCBbbXVsdGksIHVwZGF0ZU11bHRpXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgICAgICAgICBjb25zdCBbdmFsdWUyLCB1cGRhdGVWYWx1ZTJdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgICAgICAgICB1c2VFZmZlY3QoICgpPT57XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVNdWx0aSh2YWx1ZSAqIHZhbHVlMik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlTXVsdGkodmFsdWUyICogdmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc3QgY2xlYXIgPSAoKSA9PntcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlVmFsdWUyKFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxoMz5NdWx0aXBsaWNhZG9yPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRvdGFsfT5SZXNwb3N0YToge211bHRpfTwvcD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57dXBkYXRlVmFsdWUoZS50YXJnZXQudmFsdWUpfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3Bhbn0+WDwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlMn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e3VwZGF0ZVZhbHVlMihlLnRhcmdldC52YWx1ZSl9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cclxuICAgICAgICAgICAgb25DbGljaz17Y2xlYXJ9XHJcbiAgICAgICAgICAgID5MaW1wYXI8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSovXHJcblxyXG5cclxuICAgICAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgICAgICBjb25zdCBjb21wcmFzID0ge1xyXG4gICAgICAgICAgICB0YXJlZmFzOlt7XHJcbiAgICAgICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICAgICAgdGFyZWZhOlwibGF2YXIgYSBydWEhXCJcclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICBpZDoyLFxyXG4gICAgICAgICAgICAgICAgdGFyZWZhOlwiUGludGFyIG8gZG9nIVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsaXN0YSA9IGNvbXByYXMudGFyZWZhcy5tYXAoIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aXRlbS5pZH0+e2l0ZW0udGFyZWZhfTwvbGk+O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0VmFsdWUoKXtcclxuICAgICAgICAgICAgY29tcHJhcy50YXJlZmFzLnB1c2goe2lkOmNvbXByYXMudGFyZWZhcy5sZW5ndGggKyAxLFxyXG4gICAgICAgICAgICB0YXJlZmE6IGlucHV0fSlcclxuICAgICAgICAgICBjb25zdCBuZXdMaXN0ID0gY29tcHJhcy50YXJlZmFzLm1hcCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9PntpdGVtLnRhcmVmYX08L2xpPjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY29tcHJhcylcclxuICAgICAgICAgICAgcmV0dXJuIG5ld0xpc3RcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IGNvbXByYXMudGFyZWZhcy5tYXAoIClcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0Pkxpc3RhPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIkRpZ2l0ZSB1bWEgdGFyZWZhIVwifVxyXG4gICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0fSBcclxuICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtnZXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICA+QWRkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0YX1cclxuICAgICAgICAgICAgICAgICAgICB7bmV3TGlzdH1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJuYW1lcyI6WyJyZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBwcyIsIkhvbWUiLCJnZXRWYWx1ZSIsImNvbXByYXMiLCJ0YXJlZmFzIiwicHVzaCIsImlkIiwibGVuZ3RoIiwidGFyZWZhIiwiaW5wdXQiLCJuZXdMaXN0IiwibWFwIiwiaXRlbSIsImxpIiwiY29uc29sZSIsImxvZyIsInNldElucHV0IiwibGlzdGEiLCJkaXYiLCJoNCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});