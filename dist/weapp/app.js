require("./runtime");
require("./common");
require("./vendors");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/app.tsx?taro&type=script&parse=ENTRY&":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/app.tsx?taro&type=script&parse=ENTRY& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _globalData = __webpack_require__(/*! ./globalData */ "./src/globalData.ts");

var _globalData2 = _interopRequireDefault(_globalData);

var _user = __webpack_require__(/*! ./services/user */ "./src/services/user.ts");

var _index = __webpack_require__(/*! ./components/withShare/index */ "./src/components/withShare/index.tsx");

__webpack_require__(/*! ./app.global.scss */ "./src/app.global.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// h5开发环境开启调试模式

var _App = function (_Taro$PureComponent) {
  _inherits(_App, _Taro$PureComponent);

  function _App() {
    _classCallCheck(this, _App);

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    var _this = _possibleConstructorReturn(this, (_App.__proto__ || Object.getPrototypeOf(_App)).apply(this, arguments));

    _this.config = {
      pages: ['pages/user/index', 'pages/home/index', 'pages/login/index', 'pages/sorter/setting', 'pages/sorter/index'],
      // subPackages: [
      //   {
      //     root: 'pagesAccount',
      //     name: 'pagesAccount',
      //     pages: ['pages/login/index'],
      //     // independent: true
      //   },
      // ],
      // preloadRule:{
      //   'pages/index':{
      //     network: 'all',
      //     packages: ['pagesAccount']
      //   }
      // },
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: '工具箱',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        list: [{
          pagePath: 'pages/home/index',
          text: '玩法',
          iconPath: 'assets/images/tabs/record.png',
          selectedIconPath: 'assets/images/tabs/record-active.png'
        }, {
          pagePath: 'pages/user/index',
          text: '我的',
          iconPath: 'assets/images/tabs/about.png',
          selectedIconPath: 'assets/images/tabs/about-active.png'
        }],
        color: '#a9b7b7',
        selectedColor: '#FFC701',
        borderStyle: 'black',
        backgroundColor: '#ffffff'
      }
    };

    _this.update = function () {
      {
        var updateManager = _taroWeapp2.default.getUpdateManager();
        _taroWeapp2.default.getUpdateManager().onUpdateReady(function () {
          _taroWeapp2.default.showModal({
            title: '更新提示',
            content: '新版本已经准备好，是否重启应用？',
            success: function success(res) {
              if (res.confirm) {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                updateManager.applyUpdate();
              }
            }
          });
        });
      }
    };

    return _this;
  }

  _createClass(_App, [{
    key: "onShareAppMessage",
    value: function onShareAppMessage() {
      return _extends({}, _index.DEFAULT_SHAREPROPS);
    }
    /**
     *
     *  1.小程序打开的参数 globalData.extraData.xx
     *  2.从二维码进入的参数 globalData.extraData.xx
     *  3.获取小程序的设备信息 globalData.systemInfo
     */

  }, {
    key: "componentDidMount",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var referrerInfo, sys, _ref2, code, errMsg;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // 获取参数
                referrerInfo = this.$router.params.referrerInfo;

                !_globalData2.default.extraData && (_globalData2.default.extraData = {});
                if (referrerInfo && referrerInfo['extraData']) {
                  _globalData2.default.extraData = referrerInfo['extraData'];
                }
                // 获取设备信息
                _context.next = 5;
                return _taroWeapp2.default.getSystemInfoSync();

              case 5:
                sys = _context.sent;

                sys && (_globalData2.default.systemInfo = sys);

                if (_globalData2.default.user) {
                  _context.next = 15;
                  break;
                }

                _context.next = 10;
                return _taroWeapp2.default.login();

              case 10:
                _ref2 = _context.sent;
                code = _ref2.code;
                errMsg = _ref2.errMsg;

                if (errMsg !== 'login:ok') {
                  _taroWeapp2.default.showToast({
                    title: errMsg,
                    icon: 'none'
                  });
                }
                (0, _user.getUser)(code).then(function (result) {
                  result && (0, _globalData.setUser)(result);
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "_createData",
    value: function _createData() {}
  }]);

  return _App;
}(_taroWeapp2.default.PureComponent);

exports.default = _App;

App(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createApp(_App));
_taroWeapp2.default.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

/***/ }),

/***/ "./src/app.global.scss":
/*!*****************************!*\
  !*** ./src/app.global.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.tsx?taro&type=script&parse=ENTRY& */ "./src/app.tsx?taro&type=script&parse=ENTRY&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/app.tsx?taro&type=script&parse=ENTRY&":
/*!***************************************************!*\
  !*** ./src/app.tsx?taro&type=script&parse=ENTRY& ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./app.tsx?taro&type=script&parse=ENTRY& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/app.tsx?taro&type=script&parse=ENTRY&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/components/withShare/index.tsx":
/*!********************************************!*\
  !*** ./src/components/withShare/index.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_SHAREPROPS = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _logo = __webpack_require__(/*! @/assets/images/logo.png */ "./src/assets/images/logo.png");

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { connect } from '@tarojs/redux';


var DEFAULT_SHAREPROPS = exports.DEFAULT_SHAREPROPS = {
  title: '工具箱',
  imgUrl: _logo2.default,
  path: 'pages/home/index'
};
var Index = function Index() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_SHAREPROPS;
  return function (WrapComponent) {
    var WithShare = function (_WrapComponent) {
      _inherits(WithShare, _WrapComponent);

      function WithShare() {
        _classCallCheck(this, WithShare);

        return _possibleConstructorReturn(this, (WithShare.__proto__ || Object.getPrototypeOf(WithShare)).apply(this, arguments));
      }

      _createClass(WithShare, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          _taroWeapp2.default.showShareMenu({
            withShareTicket: true
          });
        }
        // 点击分享的那一刻会进行调用

      }, {
        key: 'onShareAppMessage',
        value: function onShareAppMessage() {
          // const { userInfo } = this.props;
          var _opts$title = opts.title,
              title = _opts$title === undefined ? DEFAULT_SHAREPROPS.title : _opts$title,
              _opts$imgUrl = opts.imgUrl,
              imgUrl = _opts$imgUrl === undefined ? DEFAULT_SHAREPROPS.imgUrl : _opts$imgUrl,
              _opts$path = opts.path,
              path = _opts$path === undefined ? DEFAULT_SHAREPROPS.path : _opts$path;
          // 从继承的组件获取配置

          if (this.$setSharePath && typeof this.$setSharePath === 'function') {
            path = this.$setSharePath();
          }
          // 从继承的组件获取配置
          if (this.$setShareTitle && typeof this.$setShareTitle === 'function') {
            title = this.$setShareTitle();
          }
          // 从继承的组件获取配置
          if (this.$setShareImageUrl && typeof this.$setShareImageUrl === 'function') {
            imgUrl = this.$setShareImageUrl();
          }
          // 每条分享都补充用户的分享id
          // 如果path不带参数，分享出去后解析的params里面会带一个{''： ''}
          // const sharePath = `${path}&shareFromUser=${userInfo.shareId}`;
          return {
            title: title,
            path: path,
            imageUrl: imgUrl
          };
        }
      }, {
        key: 'render',
        value: function render() {
          return React.createElement(WrapComponent, null);
        }
      }]);

      return WithShare;
    }(WrapComponent);

    return WithShare;
  };
};
exports.default = Index;

/***/ })

},[["./src/app.tsx","runtime","vendors","common"]]]);;