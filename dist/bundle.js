/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/upload-image.vue":
/*!*************************************!*\
  !*** ./components/upload-image.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _upload_image_vue_vue_type_template_id_761e17f7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-image.vue?vue&type=template&id=761e17f7 */ \"./components/upload-image.vue?vue&type=template&id=761e17f7\");\n/* harmony import */ var _upload_image_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-image.vue?vue&type=script&lang=js */ \"./components/upload-image.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _upload_image_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _upload_image_vue_vue_type_template_id_761e17f7__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _upload_image_vue_vue_type_template_id_761e17f7__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components\\\\upload-image.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/upload-image.vue?");

/***/ }),

/***/ "./components/upload-image.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./components/upload-image.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_upload_image_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./upload-image.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/upload-image.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_image_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./components/upload-image.vue?");

/***/ }),

/***/ "./components/upload-image.vue?vue&type=template&id=761e17f7":
/*!*******************************************************************!*\
  !*** ./components/upload-image.vue?vue&type=template&id=761e17f7 ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_image_vue_vue_type_template_id_761e17f7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./upload-image.vue?vue&type=template&id=761e17f7 */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/upload-image.vue?vue&type=template&id=761e17f7\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_image_vue_vue_type_template_id_761e17f7__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_image_vue_vue_type_template_id_761e17f7__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./components/upload-image.vue?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_upload_image_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/upload-image.vue */ \"./components/upload-image.vue\");\n\r\n\r\nvar app = new Vue({\r\n\tel: '#app',\r\n\tcomponents: {\r\n\t\tUploadImage: _components_upload_image_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n\t},\r\n\tdata () {\r\n\t\treturn {\r\n\t\t\turlImage: './images/rabiloo.png',\r\n\t\t}\r\n\t}\r\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/upload-image.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./components/upload-image.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\tprops: {\n\t\timage: {\n\t\t\ttype: String,\n\t\t},\n\t},\n\tdata () {\n\t\treturn {\n\t\t\tname: '',\n\t\t\tdeparture: '',\n\t\t\tlistDeparture: [\n\t\t\t\t'Bưng bê rót nước',\n\t\t\t\t'Tưới cây',\n\t\t\t\t'Design',\n\t\t\t\t'Marketing',\n\t\t\t\t'Web developer',\n\t\t\t\t'R&D',\n\t\t\t\t'CEO',\n\t\t\t\t'CTO',\n\t\t\t\t'UFO',\n\t\t\t],\n\t\t\timageUrl: '',\n\t\t\tdownloadUrl: '',\n\t\t\tdownloadName: '',\n\t\t\tcanvas: '',\n\t\t\tuserImageLoader: '',\n\t\t\tbgImageLoader: '',\n\t\t}\n\t},\n\tmethods: {\n\t\tasync exportCanvas() {\n\t\t\tthis.canvas = this.$refs.canvas;\n\n\t\t\tawait this.setUserImage(this.imageUrl);\n\t\t\tawait this.setBackGroundImage(this.image, this.name, this.departure);\n\t\t\tawait this.setName();\n\t\t\tawait this.setDeparture();\n\t\t\t\n\t\t\tthis.downloadUrl = this.canvas.toDataURL(\"image/png\").replace(\"image/png\", \"image/octet-stream\");\n\t\t},\n\t\tloadUserImage(e) {\n\t\t\tconst file = e.target.files[0];\n\t\t\tconst imageUrl = URL.createObjectURL(file);\n\t\t\tthis.imageUrl = imageUrl;\n\t\t},\n\t\tasync setUserImage(img) {\n\t\t\tconst ctx = this.canvas.getContext(\"2d\");\n\t\t\t\n\t\t\tthis.userImageLoader = new Image();\n\t\t\tthis.userImageLoader.src = img;\n\t\t\t\n\t\t\tconst p = new Promise((resolve, reject) => {\n\t\t\t\tthis.userImageLoader.onload = () => {\n\t\t\t\t\tconst x = $(\"#drag-image\").position();\n\t\t\t\t\tconst y = $(\"#drag-image\");\n\t\t\t\t\tctx.drawImage(this.userImageLoader, x.left, x.top, y.width(), y.height());\n\t\t\t\t\tresolve(true);\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\tthis.userImageLoader.onerror = () => {\n\t\t\t\t\treject();\n\t\t\t\t}\n\t\t\t});\n\t\t\t\n\t\t\treturn p;\n\t\t},\n\t\tasync setBackGroundImage(img, name, dp) {\n\t\t\tconst ctx = this.canvas.getContext(\"2d\");\n\t\t\t\n\t\t\tconst backgroundImage = new Image();\n\t\t\tbackgroundImage.src = img;\n\t\t\t\n\t\t\tconst p = new Promise((resolve, reject) => {\n\t\t\t\tbackgroundImage.onload = () => {\n\t\t\t\t\tctx.drawImage(backgroundImage, 0, 0);\n\t\t\t\t\tresolve(true);\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\tbackgroundImage.onerror = () => {\n\t\t\t\t\treject();\n\t\t\t\t}\n\t\t\t});\n\t\t\t\n\t\t\treturn p;\n\t\t},\n\t\tsetName() {\n\t\t\tlet name = this.name || 'image';\n\t\t\tname = name.replace(/\\s/gm, \"\");\n\t\t\tname = name.replace(/\\\\|\\/|\\:|\\*|\\?|\\\"|\\<|\\>|\\||\\./gm, \"\");\n\t\t\tthis.downloadName = name + '.png';\n\n\t\t\tconst ctx = this.canvas.getContext(\"2d\");\n\t\t\t\n\t\t\tctx.font = \"36pt Calibri\";\n\t\t\tctx.fillText(this.name, 260, 692);\n\t\t},\n\t\tsetDeparture() {\n\t\t\tconst ctx = this.canvas.getContext(\"2d\");\n\t\t\t\n\t\t\tctx.font = \"36pt Calibri\";\n\t\t\tctx.fillText(this.departure, 260, 740);\n\t\t}\n\t},\n});\n\n\n//# sourceURL=webpack:///./components/upload-image.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/upload-image.vue?vue&type=template&id=761e17f7":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/upload-image.vue?vue&type=template&id=761e17f7 ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticStyle: { \"text-align\": \"center\", width: \"100%\" } }, [\n    _c(\"div\", { staticClass: \"contain-image ib\" }, [\n      _c(\"input\", {\n        directives: [\n          {\n            name: \"model\",\n            rawName: \"v-model\",\n            value: _vm.name,\n            expression: \"name\"\n          }\n        ],\n        attrs: { type: \"text\" },\n        domProps: { value: _vm.name },\n        on: {\n          input: function($event) {\n            if ($event.target.composing) {\n              return\n            }\n            _vm.name = $event.target.value\n          }\n        }\n      }),\n      _vm._v(\" \"),\n      _c(\n        \"select\",\n        {\n          directives: [\n            {\n              name: \"model\",\n              rawName: \"v-model\",\n              value: _vm.departure,\n              expression: \"departure\"\n            }\n          ],\n          on: {\n            change: function($event) {\n              var $$selectedVal = Array.prototype.filter\n                .call($event.target.options, function(o) {\n                  return o.selected\n                })\n                .map(function(o) {\n                  var val = \"_value\" in o ? o._value : o.value\n                  return val\n                })\n              _vm.departure = $event.target.multiple\n                ? $$selectedVal\n                : $$selectedVal[0]\n            }\n          }\n        },\n        _vm._l(_vm.listDeparture, function(dp) {\n          return _c(\"option\", { domProps: { value: dp } }, [\n            _vm._v(\" \" + _vm._s(dp) + \" \")\n          ])\n        })\n      ),\n      _vm._v(\" \"),\n      _c(\"div\", { attrs: { id: \"image-container\" } }, [\n        (_vm.imageUrl.length > 0\n        ? true\n        : false)\n          ? _c(\"div\", { staticClass: \"previewImage\" }, [\n              _c(\"img\", { attrs: { id: \"drag-image\", src: _vm.imageUrl } })\n            ])\n          : _vm._e()\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", [\n        _c(\"input\", {\n          attrs: { type: \"file\", accept: \"image/*\" },\n          on: { change: _vm.loadUserImage }\n        }),\n        _vm._v(\" \"),\n        _c(\n          \"button\",\n          { staticClass: \"getLink\", on: { click: _vm.exportCanvas } },\n          [_vm._v(\"Get image\")]\n        ),\n        _vm._v(\" \"),\n        (_vm.downloadUrl.length > 0\n        ? true\n        : false)\n          ? _c(\"div\", [\n              _c(\n                \"a\",\n                {\n                  attrs: {\n                    id: \"save\",\n                    href: _vm.downloadUrl,\n                    target: \"_blank\",\n                    download: _vm.downloadName\n                  }\n                },\n                [_vm._v(\"Download\")]\n              )\n            ])\n          : _vm._e(),\n        _vm._v(\" \"),\n        _c(\n          \"button\",\n          {\n            staticClass: \"zoomin\",\n            attrs: {\n              type: \"button\",\n              onmousedown: \"zoomIn()\",\n              onmouseup: \"clearZoom()\"\n            }\n          },\n          [_vm._v(\"+\")]\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"button\",\n          {\n            staticClass: \"zoomout\",\n            attrs: {\n              type: \"button\",\n              onmousedown: \"zoomOut()\",\n              onmouseup: \"clearZoom()\"\n            }\n          },\n          [_vm._v(\"-\")]\n        )\n      ])\n    ]),\n    _vm._v(\" \"),\n    _c(\"canvas\", {\n      ref: \"canvas\",\n      staticStyle: { display: \"none\" },\n      attrs: { id: \"canvas\", width: \"614\", height: \"949\" }\n    })\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n/* hot reload */\nif (false) { var api; }\n\n//# sourceURL=webpack:///./components/upload-image.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ })

/******/ });