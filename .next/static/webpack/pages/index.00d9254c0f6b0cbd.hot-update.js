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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_apps */ \"./pages/_apps.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    var _this = this;\n    var getValue = function getValue() {\n        var _this = this;\n        var newList = compras.tarefas.push({\n            id: compras.tarefas.length + 1,\n            tarefa: input\n        });\n        compras.tarefas.map(function(item) {\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: item.tarefa\n            }, item.id, false, {\n                fileName: \"C:\\\\Users\\\\PC-GAMER\\\\Desktop\\\\exerc\\xedcios\\\\pages\\\\index.js\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, _this);\n        });\n        return newList;\n    };\n    _s();\n    /*const [money, setMoney] = useState(0)\r\n\r\n  const Aumentar = () => {\r\n        setMoney(money + 1);\r\n    }\r\n   const Diminuir = () => {\r\n            setMoney(money - 1);\r\n    }\r\n\r\n    return(\r\n        <div>\r\n            <h1>Aumentar e Diminuir</h1>\r\n            <p>Dinheiro: ${money}</p>\r\n            <button\r\n            onClick={Aumentar}\r\n            >Aumentar</button>\r\n            <button\r\n            onClick={Diminuir}\r\n            >Diminuir</button>\r\n        </div>\r\n    )*/ /*const [value, updateValue] = useState(0);\r\n            const [multi, updateMulti] = useState(0);\r\n            const [value2, updateValue2] = useState(0);\r\n\r\n            useEffect( ()=>{\r\n                updateMulti(value * value2);\r\n            })\r\n            useEffect(()=>{\r\n                updateMulti(value2 * value);\r\n\r\n            })\r\n            const clear = () =>{\r\n                updateValue(\"\");\r\n                updateValue2(\"\");\r\n            }\r\n\r\n\r\n    return(\r\n        <div className={styles.container}>\r\n            <div className={styles.header}>\r\n                <h3>Multiplicador</h3>\r\n            </div>\r\n            <p className={styles.total}>Resposta: {multi}</p>\r\n            <input\r\n            className={styles.input}\r\n            type=\"number\"\r\n            value={value}\r\n            onChange={(e)=>{updateValue(e.target.value)}}\r\n            />\r\n            <br/>\r\n            <span className={styles.span}>X</span>\r\n            <input\r\n            className={styles.input}\r\n            type=\"number\"\r\n            value={value2}\r\n            onChange={(e)=>{updateValue2(e.target.value)}}\r\n            />\r\n            <br/>\r\n            <button\r\n            className={styles.button}\r\n            onClick={clear}\r\n            >Limpar</button>\r\n        </div>\r\n            )*/ var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), input = ref[0], setInput = ref[1];\n    var compras = {\n        tarefas: [\n            {\n                id: 1,\n                tarefa: \"lavar a rua!\"\n            },\n            {\n                id: 2,\n                tarefa: \"Pintar o dog!\"\n            }\n        ]\n    };\n    var lista = compras.tarefas.map(function(item) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: item.tarefa\n        }, item.id, false, {\n            fileName: \"C:\\\\Users\\\\PC-GAMER\\\\Desktop\\\\exerc\\xedcios\\\\pages\\\\index.js\",\n            lineNumber: 87,\n            columnNumber: 20\n        }, _this);\n    });\n    var newList = compras.tarefas.map(function(item) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: item.tarefa\n        }, item.id, false, {\n            fileName: \"C:\\\\Users\\\\PC-GAMER\\\\Desktop\\\\exerc\\xedcios\\\\pages\\\\index.js\",\n            lineNumber: 101,\n            columnNumber: 19\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"Lista\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC-GAMER\\\\Desktop\\\\exerc\\xedcios\\\\pages\\\\index.js\",\n                lineNumber: 106,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Digite uma tarefa!\",\n                value: input,\n                onChange: function(e) {\n                    return setInput(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC-GAMER\\\\Desktop\\\\exerc\\xedcios\\\\pages\\\\index.js\",\n                lineNumber: 107,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getValue,\n                children: \"Add\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC-GAMER\\\\Desktop\\\\exerc\\xedcios\\\\pages\\\\index.js\",\n                lineNumber: 113,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    lista,\n                    newList\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PC-GAMER\\\\Desktop\\\\exerc\\xedcios\\\\pages\\\\index.js\",\n                lineNumber: 116,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PC-GAMER\\\\Desktop\\\\exerc\\xedcios\\\\pages\\\\index.js\",\n        lineNumber: 105,\n        columnNumber: 17\n    }, this);\n}\n_s(Home, \"v2x6wirwKCy++9DuW8s383qRkbI=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBMEI7QUFDaUI7QUFDaEI7QUFFM0IsU0FBU0ksSUFBSSxHQUFFOztRQXNGRUMsUUFBUSxHQUFqQixTQUFTQSxRQUFRLEdBQUU7O1FBQ2hCLElBQU1DLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxPQUFPLENBQUNDLElBQUksQ0FBQztZQUFDQyxFQUFFLEVBQUNILE9BQU8sQ0FBQ0MsT0FBTyxDQUFDRyxNQUFNLEdBQUcsQ0FBQztZQUNsRUMsTUFBTSxFQUFFQyxLQUFLO1NBQUMsQ0FBQztRQUNmTixPQUFPLENBQUNDLE9BQU8sQ0FBQ00sR0FBRyxDQUFFQyxTQUFBQSxJQUFJLEVBQUk7MEJBQzdCLDhEQUFDQyxJQUFFOzBCQUFnQkQsSUFBSSxDQUFDSCxNQUFNO2VBQXJCRyxJQUFJLENBQUNMLEVBQUU7Ozs7cUJBQW9CLENBQUM7UUFDckMsQ0FBQyxDQUFDO1FBRUYsT0FBT0osT0FBTztJQUNsQixDQUFDOztJQTdGTDs7UUF1RVFFLE9BQU8sRUFBQztZQUFDOztnQkFFTEksTUFBTSxFQUFDO2FBQ1Y7Ozs7YUFHQTtTQUNBO0tBQ0o7SUFDRCxJQUFNTSxLQUFLLEdBQUdYO1FBQ1YscUJBQU87c0JBQW1CUSxJQUFJLENBQUNIO1dBQWZHLElBQUksQ0FBQ0wsRUFBRTs7OztpQkFBb0IsQ0FBQztJQUNoRCxDQUFDLENBQUM7SUFZRixJQUFNSixPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDTSxHQUFHLENBQUVDLFNBQUFBLElBQUksRUFBSTs7c0JBQ2hCQSxJQUFJLENBQUNIO1dBQWZHLElBQUksQ0FBQ0wsRUFBRTs7Ozs7SUFDdEIsQ0FBQyxDQUFDO0lBRUYscUJBQ0ksUUFBQ1M7OzBCQUNHLFFBQUNDOzs7Ozs7b0JBQWE7MEJBQ2QsUUFBQ1A7Z0JBQ0RRO2dCQUNBQyxXQUFXLEVBQUUsb0JBQW9CO2dCQUNsQ0M7Z0JBQ0FDLFFBQVEsRUFBRSxTQUFDQyxDQUFDOztpQkFBNkI7Ozs7OzswQkFFeEMsUUFBQ0U7Z0JBQ0RDLE9BQU8sRUFBRXZCOzBCQUNSOzs7OztvQkFBWTswQkFDYjs7O29CQUVDQyxNQUFBQSwrQ0FBTzs7Ozs7Ozs7Ozs7OztBQUk1QixDQUFDO0dBckhRRixJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUF1SGIsZUFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBhcHBzIGZyb20gJy4vX2FwcHMnO1xyXG5cclxuZnVuY3Rpb24gSG9tZSgpe1xyXG4gICAgLypjb25zdCBbbW9uZXksIHNldE1vbmV5XSA9IHVzZVN0YXRlKDApXHJcblxyXG4gIGNvbnN0IEF1bWVudGFyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE1vbmV5KG1vbmV5ICsgMSk7XHJcbiAgICB9XHJcbiAgIGNvbnN0IERpbWludWlyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRNb25leShtb25leSAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+QXVtZW50YXIgZSBEaW1pbnVpcjwvaDE+XHJcbiAgICAgICAgICAgIDxwPkRpbmhlaXJvOiAke21vbmV5fTwvcD5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtBdW1lbnRhcn1cclxuICAgICAgICAgICAgPkF1bWVudGFyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17RGltaW51aXJ9XHJcbiAgICAgICAgICAgID5EaW1pbnVpcjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKSovXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8qY29uc3QgW3ZhbHVlLCB1cGRhdGVWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgICAgICAgICAgY29uc3QgW211bHRpLCB1cGRhdGVNdWx0aV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgICAgICAgICAgY29uc3QgW3ZhbHVlMiwgdXBkYXRlVmFsdWUyXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgICAgICAgICAgdXNlRWZmZWN0KCAoKT0+e1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlTXVsdGkodmFsdWUgKiB2YWx1ZTIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAgICAgICAgIHVwZGF0ZU11bHRpKHZhbHVlMiAqIHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IGNsZWFyID0gKCkgPT57XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVWYWx1ZShcIlwiKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlMihcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8aDM+TXVsdGlwbGljYWRvcjwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50b3RhbH0+UmVzcG9zdGE6IHttdWx0aX08L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e3VwZGF0ZVZhbHVlKGUudGFyZ2V0LnZhbHVlKX19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNwYW59Plg8L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZTJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9Pnt1cGRhdGVWYWx1ZTIoZS50YXJnZXQudmFsdWUpfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NsZWFyfVxyXG4gICAgICAgICAgICA+TGltcGFyPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkqL1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICAgICAgY29uc3QgY29tcHJhcyA9IHtcclxuICAgICAgICAgICAgdGFyZWZhczpbe1xyXG4gICAgICAgICAgICAgICAgaWQ6MSxcclxuICAgICAgICAgICAgICAgIHRhcmVmYTpcImxhdmFyIGEgcnVhIVwiXHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgaWQ6MixcclxuICAgICAgICAgICAgICAgIHRhcmVmYTpcIlBpbnRhciBvIGRvZyFcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGlzdGEgPSBjb21wcmFzLnRhcmVmYXMubWFwKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l0ZW0uaWR9PntpdGVtLnRhcmVmYX08L2xpPjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGdldFZhbHVlKCl7XHJcbiAgICAgICAgICAgY29uc3QgbmV3TGlzdCA9IGNvbXByYXMudGFyZWZhcy5wdXNoKHtpZDpjb21wcmFzLnRhcmVmYXMubGVuZ3RoICsgMSxcclxuICAgICAgICAgICAgdGFyZWZhOiBpbnB1dH0pXHJcbiAgICAgICAgICAgIGNvbXByYXMudGFyZWZhcy5tYXAoIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfT57aXRlbS50YXJlZmF9PC9saT47XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gbmV3TGlzdFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuZXdMaXN0ID0gY29tcHJhcy50YXJlZmFzLm1hcCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l0ZW0uaWR9PntpdGVtLnRhcmVmYX08L2xpPjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0Pkxpc3RhPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIkRpZ2l0ZSB1bWEgdGFyZWZhIVwifVxyXG4gICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0fSBcclxuICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtnZXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICA+QWRkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0YX1cclxuICAgICAgICAgICAgICAgICAgICB7bmV3TGlzdH1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJuYW1lcyI6WyJyZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBwcyIsIkhvbWUiLCJnZXRWYWx1ZSIsIm5ld0xpc3QiLCJjb21wcmFzIiwidGFyZWZhcyIsInB1c2giLCJpZCIsImxlbmd0aCIsInRhcmVmYSIsImlucHV0IiwibWFwIiwiaXRlbSIsImxpIiwic2V0SW5wdXQiLCJsaXN0YSIsImRpdiIsImg0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});