/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n!function (t, e) {\n  \"object\" == ( false ? 0 : _typeof(exports)) && \"undefined\" != \"object\" ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n}(this, function () {\n  \"use strict\";\n\n  var t = 1e3,\n    e = 6e4,\n    n = 36e5,\n    r = \"millisecond\",\n    i = \"second\",\n    s = \"minute\",\n    u = \"hour\",\n    a = \"day\",\n    o = \"week\",\n    c = \"month\",\n    f = \"quarter\",\n    h = \"year\",\n    d = \"date\",\n    l = \"Invalid Date\",\n    $ = /^(\\d{4})[-/]?(\\d{1,2})?[-/]?(\\d{0,2})[Tt\\s]*(\\d{1,2})?:?(\\d{1,2})?:?(\\d{1,2})?[.:]?(\\d+)?$/,\n    y = /\\[([^\\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,\n    M = {\n      name: \"en\",\n      weekdays: \"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday\".split(\"_\"),\n      months: \"January_February_March_April_May_June_July_August_September_October_November_December\".split(\"_\"),\n      ordinal: function ordinal(t) {\n        var e = [\"th\", \"st\", \"nd\", \"rd\"],\n          n = t % 100;\n        return \"[\" + t + (e[(n - 20) % 10] || e[n] || e[0]) + \"]\";\n      }\n    },\n    m = function m(t, e, n) {\n      var r = String(t);\n      return !r || r.length >= e ? t : \"\" + Array(e + 1 - r.length).join(n) + t;\n    },\n    v = {\n      s: m,\n      z: function z(t) {\n        var e = -t.utcOffset(),\n          n = Math.abs(e),\n          r = Math.floor(n / 60),\n          i = n % 60;\n        return (e <= 0 ? \"+\" : \"-\") + m(r, 2, \"0\") + \":\" + m(i, 2, \"0\");\n      },\n      m: function t(e, n) {\n        if (e.date() < n.date()) return -t(n, e);\n        var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),\n          i = e.clone().add(r, c),\n          s = n - i < 0,\n          u = e.clone().add(r + (s ? -1 : 1), c);\n        return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);\n      },\n      a: function a(t) {\n        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);\n      },\n      p: function p(t) {\n        return {\n          M: c,\n          y: h,\n          w: o,\n          d: a,\n          D: d,\n          h: u,\n          m: s,\n          s: i,\n          ms: r,\n          Q: f\n        }[t] || String(t || \"\").toLowerCase().replace(/s$/, \"\");\n      },\n      u: function u(t) {\n        return void 0 === t;\n      }\n    },\n    g = \"en\",\n    D = {};\n  D[g] = M;\n  var p = \"$isDayjsObject\",\n    S = function S(t) {\n      return t instanceof _ || !(!t || !t[p]);\n    },\n    w = function t(e, n, r) {\n      var i;\n      if (!e) return g;\n      if (\"string\" == typeof e) {\n        var s = e.toLowerCase();\n        D[s] && (i = s), n && (D[s] = n, i = s);\n        var u = e.split(\"-\");\n        if (!i && u.length > 1) return t(u[0]);\n      } else {\n        var a = e.name;\n        D[a] = e, i = a;\n      }\n      return !r && i && (g = i), i || !r && g;\n    },\n    O = function O(t, e) {\n      if (S(t)) return t.clone();\n      var n = \"object\" == _typeof(e) ? e : {};\n      return n.date = t, n.args = arguments, new _(n);\n    },\n    b = v;\n  b.l = w, b.i = S, b.w = function (t, e) {\n    return O(t, {\n      locale: e.$L,\n      utc: e.$u,\n      x: e.$x,\n      $offset: e.$offset\n    });\n  };\n  var _ = function () {\n      function M(t) {\n        this.$L = w(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[p] = !0;\n      }\n      var m = M.prototype;\n      return m.parse = function (t) {\n        this.$d = function (t) {\n          var e = t.date,\n            n = t.utc;\n          if (null === e) return new Date(NaN);\n          if (b.u(e)) return new Date();\n          if (e instanceof Date) return new Date(e);\n          if (\"string\" == typeof e && !/Z$/i.test(e)) {\n            var r = e.match($);\n            if (r) {\n              var i = r[2] - 1 || 0,\n                s = (r[7] || \"0\").substring(0, 3);\n              return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);\n            }\n          }\n          return new Date(e);\n        }(t), this.init();\n      }, m.init = function () {\n        var t = this.$d;\n        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();\n      }, m.$utils = function () {\n        return b;\n      }, m.isValid = function () {\n        return !(this.$d.toString() === l);\n      }, m.isSame = function (t, e) {\n        var n = O(t);\n        return this.startOf(e) <= n && n <= this.endOf(e);\n      }, m.isAfter = function (t, e) {\n        return O(t) < this.startOf(e);\n      }, m.isBefore = function (t, e) {\n        return this.endOf(e) < O(t);\n      }, m.$g = function (t, e, n) {\n        return b.u(t) ? this[e] : this.set(n, t);\n      }, m.unix = function () {\n        return Math.floor(this.valueOf() / 1e3);\n      }, m.valueOf = function () {\n        return this.$d.getTime();\n      }, m.startOf = function (t, e) {\n        var n = this,\n          r = !!b.u(e) || e,\n          f = b.p(t),\n          l = function l(t, e) {\n            var i = b.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);\n            return r ? i : i.endOf(a);\n          },\n          $ = function $(t, e) {\n            return b.w(n.toDate()[t].apply(n.toDate(\"s\"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n);\n          },\n          y = this.$W,\n          M = this.$M,\n          m = this.$D,\n          v = \"set\" + (this.$u ? \"UTC\" : \"\");\n        switch (f) {\n          case h:\n            return r ? l(1, 0) : l(31, 11);\n          case c:\n            return r ? l(1, M) : l(0, M + 1);\n          case o:\n            var g = this.$locale().weekStart || 0,\n              D = (y < g ? y + 7 : y) - g;\n            return l(r ? m - D : m + (6 - D), M);\n          case a:\n          case d:\n            return $(v + \"Hours\", 0);\n          case u:\n            return $(v + \"Minutes\", 1);\n          case s:\n            return $(v + \"Seconds\", 2);\n          case i:\n            return $(v + \"Milliseconds\", 3);\n          default:\n            return this.clone();\n        }\n      }, m.endOf = function (t) {\n        return this.startOf(t, !1);\n      }, m.$set = function (t, e) {\n        var n,\n          o = b.p(t),\n          f = \"set\" + (this.$u ? \"UTC\" : \"\"),\n          l = (n = {}, n[a] = f + \"Date\", n[d] = f + \"Date\", n[c] = f + \"Month\", n[h] = f + \"FullYear\", n[u] = f + \"Hours\", n[s] = f + \"Minutes\", n[i] = f + \"Seconds\", n[r] = f + \"Milliseconds\", n)[o],\n          $ = o === a ? this.$D + (e - this.$W) : e;\n        if (o === c || o === h) {\n          var y = this.clone().set(d, 1);\n          y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;\n        } else l && this.$d[l]($);\n        return this.init(), this;\n      }, m.set = function (t, e) {\n        return this.clone().$set(t, e);\n      }, m.get = function (t) {\n        return this[b.p(t)]();\n      }, m.add = function (r, f) {\n        var d,\n          l = this;\n        r = Number(r);\n        var $ = b.p(f),\n          y = function y(t) {\n            var e = O(l);\n            return b.w(e.date(e.date() + Math.round(t * r)), l);\n          };\n        if ($ === c) return this.set(c, this.$M + r);\n        if ($ === h) return this.set(h, this.$y + r);\n        if ($ === a) return y(1);\n        if ($ === o) return y(7);\n        var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1,\n          m = this.$d.getTime() + r * M;\n        return b.w(m, this);\n      }, m.subtract = function (t, e) {\n        return this.add(-1 * t, e);\n      }, m.format = function (t) {\n        var e = this,\n          n = this.$locale();\n        if (!this.isValid()) return n.invalidDate || l;\n        var r = t || \"YYYY-MM-DDTHH:mm:ssZ\",\n          i = b.z(this),\n          s = this.$H,\n          u = this.$m,\n          a = this.$M,\n          o = n.weekdays,\n          c = n.months,\n          f = n.meridiem,\n          h = function h(t, n, i, s) {\n            return t && (t[n] || t(e, r)) || i[n].slice(0, s);\n          },\n          d = function d(t) {\n            return b.s(s % 12 || 12, t, \"0\");\n          },\n          $ = f || function (t, e, n) {\n            var r = t < 12 ? \"AM\" : \"PM\";\n            return n ? r.toLowerCase() : r;\n          };\n        return r.replace(y, function (t, r) {\n          return r || function (t) {\n            switch (t) {\n              case \"YY\":\n                return String(e.$y).slice(-2);\n              case \"YYYY\":\n                return b.s(e.$y, 4, \"0\");\n              case \"M\":\n                return a + 1;\n              case \"MM\":\n                return b.s(a + 1, 2, \"0\");\n              case \"MMM\":\n                return h(n.monthsShort, a, c, 3);\n              case \"MMMM\":\n                return h(c, a);\n              case \"D\":\n                return e.$D;\n              case \"DD\":\n                return b.s(e.$D, 2, \"0\");\n              case \"d\":\n                return String(e.$W);\n              case \"dd\":\n                return h(n.weekdaysMin, e.$W, o, 2);\n              case \"ddd\":\n                return h(n.weekdaysShort, e.$W, o, 3);\n              case \"dddd\":\n                return o[e.$W];\n              case \"H\":\n                return String(s);\n              case \"HH\":\n                return b.s(s, 2, \"0\");\n              case \"h\":\n                return d(1);\n              case \"hh\":\n                return d(2);\n              case \"a\":\n                return $(s, u, !0);\n              case \"A\":\n                return $(s, u, !1);\n              case \"m\":\n                return String(u);\n              case \"mm\":\n                return b.s(u, 2, \"0\");\n              case \"s\":\n                return String(e.$s);\n              case \"ss\":\n                return b.s(e.$s, 2, \"0\");\n              case \"SSS\":\n                return b.s(e.$ms, 3, \"0\");\n              case \"Z\":\n                return i;\n            }\n            return null;\n          }(t) || i.replace(\":\", \"\");\n        });\n      }, m.utcOffset = function () {\n        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);\n      }, m.diff = function (r, d, l) {\n        var $,\n          y = this,\n          M = b.p(d),\n          m = O(r),\n          v = (m.utcOffset() - this.utcOffset()) * e,\n          g = this - m,\n          D = function D() {\n            return b.m(y, m);\n          };\n        switch (M) {\n          case h:\n            $ = D() / 12;\n            break;\n          case c:\n            $ = D();\n            break;\n          case f:\n            $ = D() / 3;\n            break;\n          case o:\n            $ = (g - v) / 6048e5;\n            break;\n          case a:\n            $ = (g - v) / 864e5;\n            break;\n          case u:\n            $ = g / n;\n            break;\n          case s:\n            $ = g / e;\n            break;\n          case i:\n            $ = g / t;\n            break;\n          default:\n            $ = g;\n        }\n        return l ? $ : b.a($);\n      }, m.daysInMonth = function () {\n        return this.endOf(c).$D;\n      }, m.$locale = function () {\n        return D[this.$L];\n      }, m.locale = function (t, e) {\n        if (!t) return this.$L;\n        var n = this.clone(),\n          r = w(t, e, !0);\n        return r && (n.$L = r), n;\n      }, m.clone = function () {\n        return b.w(this.$d, this);\n      }, m.toDate = function () {\n        return new Date(this.valueOf());\n      }, m.toJSON = function () {\n        return this.isValid() ? this.toISOString() : null;\n      }, m.toISOString = function () {\n        return this.$d.toISOString();\n      }, m.toString = function () {\n        return this.$d.toUTCString();\n      }, M;\n    }(),\n    k = _.prototype;\n  return O.prototype = k, [[\"$ms\", r], [\"$s\", i], [\"$m\", s], [\"$H\", u], [\"$W\", a], [\"$M\", c], [\"$y\", h], [\"$D\", d]].forEach(function (t) {\n    k[t[1]] = function (e) {\n      return this.$g(e, t[0], t[1]);\n    };\n  }), O.extend = function (t, e) {\n    return t.$i || (t(e, _, O), t.$i = !0), O;\n  }, O.locale = w, O.isDayjs = S, O.unix = function (t) {\n    return O(1e3 * t);\n  }, O.en = D[g], O.Ls = D, O.p = {}, O;\n});\n\n//# sourceURL=webpack://calcuadora_vida/./node_modules/dayjs/dayjs.min.js?");

/***/ }),

/***/ "./src/create_table.js":
/*!*****************************!*\
  !*** ./src/create_table.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createLi: () => (/* binding */ createLi),\n/* harmony export */   showAge: () => (/* binding */ showAge),\n/* harmony export */   showHours: () => (/* binding */ showHours),\n/* harmony export */   showMinutes: () => (/* binding */ showMinutes)\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n\nvar now = dayjs__WEBPACK_IMPORTED_MODULE_0___default()();\nfunction createLi(listId, labelText, liText) {\n  var label = document.createElement(\"label\");\n  var li = document.createElement(\"li\");\n  var ul = document.getElementById(listId);\n  label.innerText = labelText;\n  li.innerText = liText;\n  ul.append(label, li);\n}\nfunction showAge(day, month, years) {\n  var date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(\"\".concat(years, \"/\").concat(month, \"/\").concat(day));\n  var diffYear = now.diff(date, 'year');\n  if (now.month() >= date.month()) {\n    var diffMonth = now.diff(\"\".concat(now.year(), \"/\").concat(date.month() + 1, \"/\").concat(date.day()), 'month');\n    var diffDay = now.diff(\"\".concat(now.year(), \"/\").concat(now.month(), \"/\").concat(date.day()), 'day');\n    var _age = \"\".concat(diffYear, \" anos, \").concat(diffMonth, \" meses, \").concat(diffDay, \" dias.\");\n    return _age;\n  }\n  return age;\n\n  // const diffMonth = dayjs(date).diff(`${now.year}/${month}/${day}`, 'month')\n  // const diffDay = dayjs(date).diff(`${now.year}/${month}/${day}`, 'day')\n  // const age = `${diffYear} anos, ${diffMonth} meses, ${diffDay} dias.`\n  // return age\n}\nfunction showHours(day, month, year) {\n  var date = \"\".concat(year, \"/\").concat(month, \"/\").concat(day);\n  var diff = now.diff(date, 'hours');\n  var hours = \"\".concat(diff, \" horas.\");\n  return hours;\n}\nfunction showMinutes(day, month, year) {\n  var date = \"\".concat(year, \"/\").concat(month, \"/\").concat(day);\n  var diff = now.diff(date, 'minute');\n  var minutes = \"\".concat(diff, \" minutos.\");\n  return minutes;\n}\n\n//# sourceURL=webpack://calcuadora_vida/./src/create_table.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_table_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_table.js */ \"./src/create_table.js\");\n\nvar buttonCalculate = document.getElementById(\"calculate\");\nbuttonCalculate.addEventListener(\"click\", function (ev) {\n  ev.preventDefault();\n  var ul = document.getElementById(\"list\");\n  var day = document.getElementById(\"day\").value;\n  var month = document.getElementById(\"month\").value;\n  var year = document.getElementById(\"year\").value;\n  if (year) {\n    // SHow birthday\n    var birthday = \"\".concat(day, \"/\").concat(month, \"/\").concat(year);\n    (0,_create_table_js__WEBPACK_IMPORTED_MODULE_0__.createLi)(\"list\", \"Nascimento:\", birthday);\n    //Show age\n    var age = (0,_create_table_js__WEBPACK_IMPORTED_MODULE_0__.showAge)(day, month, year);\n    (0,_create_table_js__WEBPACK_IMPORTED_MODULE_0__.createLi)(\"list\", \"Sua idade:\", age);\n    var hours = (0,_create_table_js__WEBPACK_IMPORTED_MODULE_0__.showHours)(day, month, year);\n    (0,_create_table_js__WEBPACK_IMPORTED_MODULE_0__.createLi)(\"list\", \"Horas vividas:\", hours);\n    var minutes = (0,_create_table_js__WEBPACK_IMPORTED_MODULE_0__.showMinutes)(day, month, year);\n    (0,_create_table_js__WEBPACK_IMPORTED_MODULE_0__.createLi)(\"list\", \"Minutos vividos:\", minutes);\n    var separator = document.createElement('p');\n    separator.innerText = \"--------------------------------------------------------\";\n    ul.appendChild(separator);\n    alert(\"Calculado!\");\n  } else {\n    alert(\"Dados faltando.\");\n  }\n});\n\n//# sourceURL=webpack://calcuadora_vida/./src/index.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/create_table.js");
/******/ 	
/******/ })()
;