(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/sorter/setting"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/sorter/setting.tsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/sorter/setting.tsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../hooks/index */ "./src/hooks/index.ts");

var _sort = __webpack_require__(/*! ./services/sort */ "./src/pages/sorter/services/sort.ts");

var _setting = __webpack_require__(/*! ./setting.scss */ "./src/pages/sorter/setting.scss");

var _setting2 = _interopRequireDefault(_setting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnonymousSFC = (_temp2 = _class = function (_Taro$Component) {
  _inherits(AnonymousSFC, _Taro$Component);

  function AnonymousSFC() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AnonymousSFC);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AnonymousSFC.__proto__ || Object.getPrototypeOf(AnonymousSFC)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__74", "$compid__75", "$compid__76", "$compid__77", "styles"], _this.customComponents = ["BasicPage", "AtForm", "AtInput", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AnonymousSFC, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AnonymousSFC.prototype.__proto__ || Object.getPrototypeOf(AnonymousSFC.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__74"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__74 = _genCompid2[0],
          $compid__74 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__75"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__75 = _genCompid4[0],
          $compid__75 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__76"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__76 = _genCompid6[0],
          $compid__76 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__77"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__77 = _genCompid8[0],
          $compid__77 = _genCompid8[1];

      var _useOnceTempData = (0, _index.useOnceTempData)({
        title: '',
        total: ''
      }),
          _useOnceTempData2 = _slicedToArray(_useOnceTempData, 2),
          cacheModel = _useOnceTempData2[0],
          setCacheModel = _useOnceTempData2[1];

      var _useState = (0, _taroWeapp.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          loading = _useState2[0],
          setLoading = _useState2[1];

      var _useState3 = (0, _taroWeapp.useState)(cacheModel),
          _useState4 = _slicedToArray(_useState3, 2),
          model = _useState4[0],
          setModel = _useState4[1];

      (0, _taroWeapp.useEffect)(function () {
        _taroWeapp2.default.setNavigationBarTitle({
          title: '排顺序'
        });
      }, []);
      var handleChange = function handleChange(name, value) {
        setModel(_extends({}, model, _defineProperty({}, name, value)));
      };
      var handleSubmit = function handleSubmit() {
        if (!model.title) {
          return tipValidation('请输入排序主题!');
        }
        if (!model.total) {
          return tipValidation('请输入总人数!');
        }
        if (setCacheModel({
          data: model,
          url: '/pages/login/index?redirect=/pages/sorter/setting'
        })) {
          setLoading(true);
          (0, _sort.apply)(_extends({}, model, {
            total: Number(model.total)
          })).then(function (id) {
            _taroWeapp2.default.navigateTo({
              url: "/pages/sorter/index?id=" + id
            });
          });
        }
      };
      var tipValidation = function tipValidation(title) {
        _taroWeapp2.default.showToast({
          title: title,
          icon: 'none'
        });
        return false;
      };
      this.anonymousFunc0 = handleChange.bind(null, 'title');
      this.anonymousFunc1 = handleChange.bind(null, 'total');
      this.anonymousFunc2 = handleSubmit;
      _taroWeapp.propsManager.set({
        "loading": loading
      }, $compid__74, $prevCompid__74);
      _taroWeapp.propsManager.set({
        "name": "title",
        "autoFocus": true,
        "title": "\u6392\u5E8F\u4E3B\u9898",
        "type": "text",
        "maxLength": 18,
        "clear": true,
        "placeholder": "\u5982:\u5218\u5FB7\u534E\u6F14\u5531\u4F1A\u5EA7\u4F4D\u53F7\u62BD\u53D6",
        "value": model.title,
        "onChange": this.anonymousFunc0
      }, $compid__75, $prevCompid__75);
      _taroWeapp.propsManager.set({
        "name": "total",
        "title": "\u603B\u4EBA\u6570",
        "type": "number",
        "placeholder": "\u5982 100",
        "value": model.total,
        "onChange": this.anonymousFunc1
      }, $compid__76, $prevCompid__76);
      _taroWeapp.propsManager.set({
        "className": _setting2.default.submit,
        "type": "primary",
        "onClick": this.anonymousFunc2
      }, $compid__77, $prevCompid__77);
      Object.assign(this.__state, {
        $compid__74: $compid__74,
        $compid__75: $compid__75,
        $compid__76: $compid__76,
        $compid__77: $compid__77,
        styles: _setting2.default
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }]);

  return AnonymousSFC;
}(_taroWeapp2.default.Component), _class.$$events = [], _class.$$componentPath = "pages/sorter/setting", _temp2);
exports.default = AnonymousSFC;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AnonymousSFC, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\Other\\WB\\lottery\\client\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/sorter/setting.tsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=E:/Other/WB/lottery/client/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/sorter/setting.tsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/sorter/setting.wxml";

/***/ }),

/***/ "./src/pages/sorter/setting.scss":
/*!***************************************!*\
  !*** ./src/pages/sorter/setting.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"title":"setting__title___1SHs0","flag":"setting__flag___3VS_1","submit":"setting__submit___1Bzou"};

/***/ }),

/***/ "./src/pages/sorter/setting.tsx":
/*!**************************************!*\
  !*** ./src/pages/sorter/setting.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setting_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.tsx?taro&type=template&parse=PAGE& */ "./src/pages/sorter/setting.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _setting_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.tsx?taro&type=script&parse=PAGE& */ "./src/pages/sorter/setting.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _setting_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _setting_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/sorter/setting.tsx?taro&type=script&parse=PAGE&":
/*!*******************************************************************!*\
  !*** ./src/pages/sorter/setting.tsx?taro&type=script&parse=PAGE& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_setting_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./setting.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/sorter/setting.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_setting_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_setting_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_setting_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_setting_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_setting_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/sorter/setting.tsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************!*\
  !*** ./src/pages/sorter/setting.tsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_E_Other_WB_lottery_client_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_setting_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=E:/Other/WB/lottery/client/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./setting.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\Other\\WB\\lottery\\client\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/sorter/setting.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_E_Other_WB_lottery_client_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_setting_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_E_Other_WB_lottery_client_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_setting_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_E_Other_WB_lottery_client_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_setting_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_E_Other_WB_lottery_client_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_setting_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/sorter/setting.tsx","runtime","vendors","common"]]]);