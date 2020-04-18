(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/sorter/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/sorter/index.tsx?taro&type=script&parse=PAGE&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/sorter/index.tsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************************************************************************************************/
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

var _globalData = __webpack_require__(/*! ../../globalData */ "./src/globalData.ts");

var _globalData2 = _interopRequireDefault(_globalData);

var _index2 = __webpack_require__(/*! ./index.scss */ "./src/pages/sorter/index.scss");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AnonymousSFC.__proto__ || Object.getPrototypeOf(AnonymousSFC)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "model", "loopArray81", "$compid__680", "$compid__681", "$compid__682", "$compid__683", "styles"], _this.customComponents = ["BasicPage", "AtButton", "AtIcon", "AtAvatar"], _temp), _possibleConstructorReturn(_this, _ret);
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__680"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__680 = _genCompid2[0],
          $compid__680 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__681"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__681 = _genCompid4[0],
          $compid__681 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__682"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__682 = _genCompid6[0],
          $compid__682 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__683"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__683 = _genCompid8[0],
          $compid__683 = _genCompid8[1];

      var _useRouter = (0, _taroWeapp.useRouter)(),
          id = _useRouter.params.id;

      var _globalData$user = _globalData2.default.user,
          user = _globalData$user === undefined ? {} : _globalData$user;

      var _useRequest = (0, _index.useRequest)(id, _sort.getDetail),
          loadding = _useRequest.loadding,
          model = _useRequest.data;

      var _useState = (0, _taroWeapp.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          submitting = _useState2[0],
          setSubmitting = _useState2[1];

      var handleTack = function handleTack() {
        if ((0, _globalData.checkLoginAndRedirect)({
          url: '/pages/login/index?redirect=/pages/sorter/setting'
        })) {
          setSubmitting(true);
          (0, _sort.takeNumber)(id).then(function (result) {
            setSubmitting(false);
            var preUsers = model.users.filter(function (m) {
              return m.orderNo < result.orderNo;
            });
            var postUsers = model.users.filter(function (m) {
              return m.orderNo > result.orderNo;
            });
            var newItem = _extends({}, result, { avatarUrl: user['avatarUrl'], nickName: user.nickName });
            model.users = [].concat(_toConsumableArray(preUsers), [newItem], _toConsumableArray(postUsers));
          }).catch(function () {
            _taroWeapp2.default.showToast({
              title: '出错啦，请重试!!!'
            });
            setSubmitting(true);
          });
        }
      };
      var anonymousState__temp = model.total <= model.users.length;
      this.anonymousFunc0 = handleTack;
      var loopArray81 = model.users.map(function (item, _anonIdx) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "bcjzzzzzzz" + _anonIdx, true),
            _genCompid10 = _slicedToArray(_genCompid9, 2),
            $prevCompid__679 = _genCompid10[0],
            $compid__679 = _genCompid10[1];

        _taroWeapp.propsManager.set({
          "size": "small",
          "className": _index3.default.avatar,
          "circle": true,
          "image": item.$original.avatarUrl
        }, $compid__679, $prevCompid__679);
        return {
          $compid__679: $compid__679,
          $original: item.$original
        };
      });
      _taroWeapp.propsManager.set({
        "className": _index3.default.body,
        "loading": loadding || submitting
      }, $compid__680, $prevCompid__680);
      !model.currentUser && _taroWeapp.propsManager.set({
        "disabled": anonymousState__temp,
        "circle": true,
        "onClick": this.anonymousFunc0,
        "type": "primary"
      }, $compid__681, $prevCompid__681);
      _taroWeapp.propsManager.set({
        "color": "#e7ebed",
        "value": "chevron-up"
      }, $compid__682, $prevCompid__682);
      _taroWeapp.propsManager.set({
        "color": "#e7ebed",
        "value": "chevron-down"
      }, $compid__683, $prevCompid__683);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        model: model,
        loopArray81: loopArray81,
        $compid__680: $compid__680,
        $compid__681: $compid__681,
        $compid__682: $compid__682,
        $compid__683: $compid__683,
        styles: _index3.default
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return AnonymousSFC;
}(_taroWeapp2.default.Component), _class.$$events = [], _class.$$componentPath = "pages/sorter/index", _temp2);
exports.default = AnonymousSFC;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AnonymousSFC, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\Other\\WB\\lottery\\client\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/sorter/index.tsx?taro&type=template&parse=PAGE&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=E:/Other/WB/lottery/client/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/sorter/index.tsx?taro&type=template&parse=PAGE& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/sorter/index.wxml";

/***/ }),

/***/ "./src/pages/sorter/index.scss":
/*!*************************************!*\
  !*** ./src/pages/sorter/index.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"body":"index__body___1Y4ad","header":"index__header___2d_HI","header-title":"index__header-title___E0TKZ","header-tag":"index__header-tag___3SkoR","number":"index__number___t3SOU","remain":"index__remain___3t6ij","order":"index__order___Takdq","my":"index__my___16v7N","orderNo":"index__orderNo___GAnkG","users":"index__users___11hv6","user-item":"index__user-item___1267y","item-order":"index__item-order___3a8Qj","avatar":"index__avatar___1p7QU","nickName":"index__nickName___nrb8z"};

/***/ }),

/***/ "./src/pages/sorter/index.tsx":
/*!************************************!*\
  !*** ./src/pages/sorter/index.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/sorter/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/sorter/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/sorter/index.tsx?taro&type=script&parse=PAGE&":
/*!*****************************************************************!*\
  !*** ./src/pages/sorter/index.tsx?taro&type=script&parse=PAGE& ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/sorter/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/sorter/index.tsx?taro&type=template&parse=PAGE&":
/*!*******************************************************************!*\
  !*** ./src/pages/sorter/index.tsx?taro&type=template&parse=PAGE& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_E_Other_WB_lottery_client_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=E:/Other/WB/lottery/client/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\Other\\WB\\lottery\\client\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/sorter/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_E_Other_WB_lottery_client_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_E_Other_WB_lottery_client_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_E_Other_WB_lottery_client_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_E_Other_WB_lottery_client_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/sorter/index.tsx","runtime","vendors","common"]]]);