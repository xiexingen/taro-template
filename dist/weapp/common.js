(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var HTTP_STATUS = exports.HTTP_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
};
/**
 * 资源文件服务器地址
 */
var ASSETS_HOST = '';
// eslint-disable-next-line import/no-mutable-exports
var APIPREFIX = 'https://localhost:44375/';

exports.APIPREFIX = APIPREFIX;
exports.ASSETS_HOST = ASSETS_HOST;
var REACH_BOTTOM_EVENT = exports.REACH_BOTTOM_EVENT = 'reach_bottom_event';
var PULL_DOWN_REFRESH_EVENT = exports.PULL_DOWN_REFRESH_EVENT = 'pull_down_refresh_event';
var THROTTLE_DELAY = exports.THROTTLE_DELAY = 1500;

/***/ }),

/***/ "./src/globalData.ts":
/*!***************************!*\
  !*** ./src/globalData.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkLoginAndRedirect = exports.setUser = exports.cleanToken = exports.getUser = exports.globalData = undefined;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 全局数据
 */
// eslint-disable-next-line
var globalData = exports.globalData = {
  user: _taroWeapp2.default.getStorageSync('user')
};
var getUser = exports.getUser = function getUser() {
  if (!globalData.user) {
    globalData.user = _taroWeapp2.default.getStorageSync('user');
  }
  return globalData.user;
};
/**
 * 清空登录状态
 */
var cleanToken = exports.cleanToken = function cleanToken() {
  globalData.user = undefined;
  _taroWeapp2.default.removeStorageSync('user');
  _taroWeapp2.default.removeStorageSync('token');
};
var setUser = exports.setUser = function setUser(user) {
  globalData.user = user;
  _taroWeapp2.default.setStorageSync('user', user);
  // 设置token
  _taroWeapp2.default.setStorageSync('token', user.token);
};
/**
 * 检测是否已经登录
 * @param param0 参数
 */
var checkLoginAndRedirect = exports.checkLoginAndRedirect = function checkLoginAndRedirect(_ref) {
  var url = _ref.url,
      tab = _ref.tab;

  if (globalData.user) {
    return true;
  }
  if (url) {
    _taroWeapp2.default.navigateTo({
      url: url
    });
  }
  if (tab) {
    _taroWeapp2.default.switchTab({
      url: tab
    });
  }
  return false;
};
exports.default = globalData;

/***/ }),

/***/ "./src/hooks/index.ts":
/*!****************************!*\
  !*** ./src/hooks/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOnceTempData = exports.usePullDownRefreshEvent = exports.useReachBottomEvent = exports.useRequestWIthMore = exports.useRequest = undefined;

var _useRequest = __webpack_require__(/*! ./useRequest */ "./src/hooks/useRequest.ts");

var _useRequest2 = _interopRequireDefault(_useRequest);

var _useRequestWIthMore = __webpack_require__(/*! ./useRequestWIthMore */ "./src/hooks/useRequestWIthMore.ts");

var _useRequestWIthMore2 = _interopRequireDefault(_useRequestWIthMore);

var _useReachBottomEvent = __webpack_require__(/*! ./useReachBottomEvent */ "./src/hooks/useReachBottomEvent.ts");

var _useReachBottomEvent2 = _interopRequireDefault(_useReachBottomEvent);

var _usePullDownRefreshEvent = __webpack_require__(/*! ./usePullDownRefreshEvent */ "./src/hooks/usePullDownRefreshEvent.ts");

var _usePullDownRefreshEvent2 = _interopRequireDefault(_usePullDownRefreshEvent);

var _useOnceTempData = __webpack_require__(/*! ./useOnceTempData */ "./src/hooks/useOnceTempData.ts");

var _useOnceTempData2 = _interopRequireDefault(_useOnceTempData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.useRequest = _useRequest2.default;
exports.useRequestWIthMore = _useRequestWIthMore2.default;
exports.useReachBottomEvent = _useReachBottomEvent2.default;
exports.usePullDownRefreshEvent = _usePullDownRefreshEvent2.default;
exports.useOnceTempData = _useOnceTempData2.default;

/***/ }),

/***/ "./src/hooks/useOnceTempData.ts":
/*!**************************************!*\
  !*** ./src/hooks/useOnceTempData.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _globalData = __webpack_require__(/*! ../globalData */ "./src/globalData.ts");

var _globalData2 = _interopRequireDefault(_globalData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var USE_ONCE_TEMP_DATA = '__userOnceTemplateData';
/**
 * 缓存数据源，使用一次即被清除
 */
function useOnceTempData(defaultValue) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : USE_ONCE_TEMP_DATA;

  var storeKe = key === USE_ONCE_TEMP_DATA ? key : USE_ONCE_TEMP_DATA + "_" + key;
  var storeData = _taroWeapp2.default.getStorageSync(storeKe);
  if (storeData) {
    _taroWeapp2.default.removeStorageSync(storeKe);
  }
  var checkLoginAndRedirect = function checkLoginAndRedirect(_ref) {
    var data = _ref.data,
        url = _ref.url,
        tab = _ref.tab;

    if (_globalData2.default.user) {
      return true;
    }
    data && _taroWeapp2.default.setStorageSync(storeKe, data);
    if (url) {
      _taroWeapp2.default.navigateTo({
        url: url
      });
    }
    if (tab) {
      _taroWeapp2.default.switchTab({
        url: tab
      });
    }
    return false;
  };
  storeData = storeData || defaultValue;
  return [storeData, checkLoginAndRedirect];
}
exports.default = useOnceTempData;

/***/ }),

/***/ "./src/hooks/usePullDownRefreshEvent.ts":
/*!**********************************************!*\
  !*** ./src/hooks/usePullDownRefreshEvent.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _eventBus = __webpack_require__(/*! ../utils/eventBus */ "./src/utils/eventBus.ts");

var _eventBus2 = _interopRequireDefault(_eventBus);

var _constants = __webpack_require__(/*! ../constants */ "./src/constants.ts");

var _index = __webpack_require__(/*! ../utils/index */ "./src/utils/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function usePullDownRefreshEvent() {
  var pageRef = (0, _taroWeapp.useRef)((0, _index.getUniqueId)());
  (0, _taroWeapp.usePullDownRefresh)(function () {
    _eventBus2.default.trigger(_constants.PULL_DOWN_REFRESH_EVENT, pageRef.current);
  });
  return null;
}
exports.default = usePullDownRefreshEvent;

/***/ }),

/***/ "./src/hooks/useReachBottomEvent.ts":
/*!******************************************!*\
  !*** ./src/hooks/useReachBottomEvent.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _eventBus = __webpack_require__(/*! ../utils/eventBus */ "./src/utils/eventBus.ts");

var _eventBus2 = _interopRequireDefault(_eventBus);

var _constants = __webpack_require__(/*! ../constants */ "./src/constants.ts");

var _index = __webpack_require__(/*! ../utils/index */ "./src/utils/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useReachBottomEvent() {
  var pageRef = (0, _taroWeapp.useRef)((0, _index.getUniqueId)());
  var timerRef = (0, _taroWeapp.useRef)(0);
  (0, _taroWeapp.useReachBottom)(function () {
    var prev = timerRef.current;
    var curr = +Date.now();
    if (!prev || curr - prev > _constants.THROTTLE_DELAY) {
      _eventBus2.default.trigger(_constants.REACH_BOTTOM_EVENT, pageRef.current);
      timerRef.current = curr;
    } else {
      console.log('wait...');
    }
  });
  return null;
}
exports.default = useReachBottomEvent;

/***/ }),

/***/ "./src/hooks/useRequest.ts":
/*!*********************************!*\
  !*** ./src/hooks/useRequest.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _eventBus = __webpack_require__(/*! ../utils/eventBus */ "./src/utils/eventBus.ts");

var _eventBus2 = _interopRequireDefault(_eventBus);

var _constants = __webpack_require__(/*! ../constants */ "./src/constants.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useRequest(params, request) {
  var _useState = (0, _taroWeapp.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      currData = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0, _taroWeapp.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      count = _useState4[0],
      setCount = _useState4[1];

  var _useState5 = (0, _taroWeapp.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loadding = _useState6[0],
      setLoadding = _useState6[1];

  var pagePullDownRef = (0, _taroWeapp.useRef)('');
  (0, _taroWeapp.useEffect)(function () {
    setLoadding(true);
    request(params).then(function (data) {
      setLoadding(false);
      if (data) {
        setData(data);
      }
    });
  }, [count, params, request]);
  (0, _taroWeapp.usePullDownRefresh)(function () {
    refresh();
  });
  var refresh = (0, _taroWeapp.useCallback)(function () {
    setCount(count + 1);
  }, [count]);
  (0, _taroWeapp.useEffect)(function () {
    _eventBus2.default.on(_constants.PULL_DOWN_REFRESH_EVENT, function (page) {
      if (!pagePullDownRef.current) {
        pagePullDownRef.current = page;
      } else if (pagePullDownRef.current !== page) {
        return;
      }
      refresh();
    });
    return function () {
      _eventBus2.default.off(_constants.PULL_DOWN_REFRESH_EVENT);
    };
  }, [refresh]);
  return { data: currData, loadding: loadding, refresh: refresh };
}
exports.default = useRequest;

/***/ }),

/***/ "./src/hooks/useRequestWIthMore.ts":
/*!*****************************************!*\
  !*** ./src/hooks/useRequestWIthMore.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /* eslint-disable react-hooks/rules-of-hooks */


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _constants = __webpack_require__(/*! ../constants */ "./src/constants.ts");

var _eventBus = __webpack_require__(/*! ../utils/eventBus */ "./src/utils/eventBus.ts");

var _eventBus2 = _interopRequireDefault(_eventBus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function useRequestWIthMore(data, request) {
  if (!data) {
    // bug?
    console.warn('useRequestWIthMore: no data');
    return [];
  }

  var _useState = (0, _taroWeapp.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      currData = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0, _taroWeapp.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      hasMore = _useState4[0],
      setHasMore = _useState4[1];

  var _useState5 = (0, _taroWeapp.useState)({ page: 1, per_page: 10 }),
      _useState6 = _slicedToArray(_useState5, 2),
      params = _useState6[0],
      setParams = _useState6[1];
  // 存储唯一 id 用于匹配消息


  var pageReachBottomRef = (0, _taroWeapp.useRef)('');
  var pagePullDownRef = (0, _taroWeapp.useRef)('');
  var loadingRef = (0, _taroWeapp.useRef)(false);
  (0, _taroWeapp.useEffect)(function () {
    if (hasMore) {
      loadingRef.current = true;
      request(data, params).then(function (result) {
        if (result) {
          if (currData) {
            setData([].concat(_toConsumableArray(currData), _toConsumableArray(result)));
          } else {
            setData(result);
          }
          if (result.length < params.per_page) {
            setHasMore(false);
          }
        }
      }).finally(function () {
        loadingRef.current = false;
        Taro.stopPullDownRefresh();
        Taro.hideLoading();
      });
    }
  }, [currData, data, hasMore, params, request]);
  (0, _taroWeapp.usePullDownRefresh)(function () {
    refresh();
  });
  (0, _taroWeapp.useEffect)(function () {
    _eventBus2.default.on(_constants.REACH_BOTTOM_EVENT, function (page) {
      if (loadingRef.current) {
        return;
      }
      if (!pageReachBottomRef.current) {
        pageReachBottomRef.current = page;
      } else if (pageReachBottomRef.current !== page) {
        return;
      }
      getMoreData();
    });
    return function () {
      _eventBus2.default.off(_constants.REACH_BOTTOM_EVENT);
    };
  }, []);
  var refresh = (0, _taroWeapp.useCallback)(function () {
    setData(null);
    setHasMore(true);
    setParams(_extends({}, params, { page: 1 }));
  }, [params]);
  (0, _taroWeapp.useEffect)(function () {
    _eventBus2.default.on(_constants.PULL_DOWN_REFRESH_EVENT, function (page) {
      if (!pagePullDownRef.current) {
        pagePullDownRef.current = page;
      } else if (pagePullDownRef.current !== page) {
        return;
      }
      refresh();
    });
    return function () {
      _eventBus2.default.off(_constants.PULL_DOWN_REFRESH_EVENT);
    };
  }, [refresh]);
  (0, _taroWeapp.useReachBottom)(function () {
    if (loadingRef.current) {
      return;
    }
    getMoreData();
  });
  var getMoreData = function getMoreData() {
    setParams(function (paraData) {
      return _extends({}, paraData, { page: paraData.page + 1 });
    });
  };
  return [currData, hasMore, refresh, getMoreData];
}
exports.default = useRequestWIthMore;

/***/ }),

/***/ "./src/pages/sorter/services/sort.ts":
/*!*******************************************!*\
  !*** ./src/pages/sorter/services/sort.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDetail = exports.takeNumber = exports.apply = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

/**
 * 发起一个排序主题
 * @param data {title:'',total:''}
 */
var apply = exports.apply = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(data) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _request.post)({
              url: _constants.APIPREFIX + "api/sorter",
              data: data
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function apply(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * 点击抽取号码
 * @param id 主键id
 */


var takeNumber = exports.takeNumber = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(id) {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", (0, _request.put)({
              url: _constants.APIPREFIX + "api/sorter/" + id
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function takeNumber(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * 查询该主题的信息以及人员列表信息
 * @param data {title:'',total:''}
 */


var getDetail = exports.getDetail = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(id) {
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", (0, _request.get)({
              url: _constants.APIPREFIX + "api/sorter/" + id
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getDetail(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var _request = __webpack_require__(/*! ../../../utils/request */ "./src/utils/request.ts");

var _constants = __webpack_require__(/*! ../../../constants */ "./src/constants.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/services/user.ts":
/*!******************************!*\
  !*** ./src/services/user.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUser = exports.login = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var login = exports.login = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(data) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _request.post)({
              url: _constants.APIPREFIX + "api/auth",
              data: data
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function login(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getUser = exports.getUser = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(code) {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", (0, _request.get)(_constants.APIPREFIX + "api/auth/" + code));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getUser(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var _request = __webpack_require__(/*! ../utils/request */ "./src/utils/request.ts");

var _constants = __webpack_require__(/*! ../constants */ "./src/constants.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/utils/eventBus.ts":
/*!*******************************!*\
  !*** ./src/utils/eventBus.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var events = new _taroWeapp.Events();
exports.default = events;

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUniqueId = exports.bytesToSize = exports.formatCurrency = exports.getCurrentPageUrl = exports.isWechat = exports.isH5 = undefined;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isH5 = exports.isH5 = _taroWeapp2.default.getEnv() === _taroWeapp2.default.ENV_TYPE.WEB;
var isWechat = exports.isWechat = _taroWeapp2.default.getEnv() === _taroWeapp2.default.ENV_TYPE.WEAPP;
// 获取当前页url
var getCurrentPageUrl = exports.getCurrentPageUrl = function getCurrentPageUrl() {
  var pages = _taroWeapp2.default.getCurrentPages();
  var currentPage = pages[pages.length - 1];
  var url = currentPage.route;
  return url;
};
/**
 * 金额千分位格式化
 * @param str 要格式化的金额
 */
var formatCurrency = exports.formatCurrency = function formatCurrency(str) {
  if (typeof str === 'undefined' || str === null) {
    return '';
  }
  return ('' + str).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
var bytesToSize = exports.bytesToSize = function bytesToSize(bytes) {
  bytes = +bytes;
  var sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 B';
  var i = parseInt('' + Math.floor(Math.log(bytes) / Math.log(1024)));
  return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + ' ' + sizes[i];
};
var getUniqueId = exports.getUniqueId = function getUniqueId() {
  return Math.random().toString(36).substr(2);
};
// export const base64Encode=(str)=>{
//   var c1, c2, c3;
//   var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
//   var i = 0, len = str.length, strin = '';
//   while (i < len) {
//       c1 = str.charCodeAt(i++) & 0xff;
//       if (i == len) {
//           strin += base64EncodeChars.charAt(c1 >> 2);
//           strin += base64EncodeChars.charAt((c1 & 0x3) << 4);
//           strin += "==";
//           break;
//       }
//       c2 = str.charCodeAt(i++);
//       if (i == len) {
//           strin += base64EncodeChars.charAt(c1 >> 2);
//           strin += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
//           strin += base64EncodeChars.charAt((c2 & 0xF) << 2);
//           strin += "=";
//           break;
//       }
//       c3 = str.charCodeAt(i++);
//       strin += base64EncodeChars.charAt(c1 >> 2);
//       strin += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
//       strin += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
//       strin += base64EncodeChars.charAt(c3 & 0x3F)
//   }
//   return strin
// }
// function base64_decode (input) { // 解码，配合decodeURIComponent使用
//   var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
//   var output = "";
//   var chr1, chr2, chr3;
//   var enc1, enc2, enc3, enc4;
//   var i = 0;
//   input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
//   while (i < input.length) {
//       enc1 = base64EncodeChars.indexOf(input.charAt(i++));
//       enc2 = base64EncodeChars.indexOf(input.charAt(i++));
//       enc3 = base64EncodeChars.indexOf(input.charAt(i++));
//       enc4 = base64EncodeChars.indexOf(input.charAt(i++));
//       chr1 = (enc1 << 2) | (enc2 >> 4);
//       chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
//       chr3 = ((enc3 & 3) << 6) | enc4;
//       output = output + String.fromCharCode(chr1);
//       if (enc3 != 64) {
//           output = output + String.fromCharCode(chr2);
//       }
//       if (enc4 != 64) {
//           output = output + String.fromCharCode(chr3);
//       }
//   }
//   return utf8_decode(output);
// }
// function utf8_decode (utftext) { // utf-8解码
//   var string = '';
//   let i = 0;
//   let c = 0;
//   let c1 = 0;
//   let c2 = 0;
//   while (i < utftext.length) {
//       c = utftext.charCodeAt(i);
//       if (c < 128) {
//           string += String.fromCharCode(c);
//           i++;
//       } else if ((c > 191) && (c < 224)) {
//           c1 = utftext.charCodeAt(i + 1);
//           string += String.fromCharCode(((c & 31) << 6) | (c1 & 63));
//           i += 2;
//       } else {
//           c1 = utftext.charCodeAt(i + 1);
//           c2 = utftext.charCodeAt(i + 2);
//           string += String.fromCharCode(((c & 15) << 12) | ((c1 & 63) << 6) | (c2 & 63));
//           i += 3;
//       }
//   }
//   return string;
// }

/***/ }),

/***/ "./src/utils/interceptors.ts":
/*!***********************************!*\
  !*** ./src/utils/interceptors.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _constants = __webpack_require__(/*! ../constants */ "./src/constants.ts");

var _navigate = __webpack_require__(/*! ./navigate */ "./src/utils/navigate.ts");

var _globalData = __webpack_require__(/*! ../globalData */ "./src/globalData.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showError(message) {
  var show = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  show && _taroWeapp2.default.showToast({
    title: message || '请求异常',
    icon: 'none'
  });
  return Promise.reject(message);
}
var customInterceptor = function customInterceptor(chain) {
  var requestParams = chain.requestParams;
  var showToast = requestParams.showToast;

  return chain.proceed(requestParams).catch(function (res) {
    // 这个catch需要放到前面才能捕获request本身的错误，因为showError返回的也是Promise.reject
    return showError(res.errMsg, showToast);
  }).then(function (res) {
    // 只要请求成功，不管返回什么状态码，都走这个回调
    if (res.statusCode === _constants.HTTP_STATUS.NOT_FOUND) {
      return showError('请求资源不存在', showToast);
    } else if (res.statusCode === _constants.HTTP_STATUS.BAD_GATEWAY) {
      return showError('服务端出现了问题', showToast);
    } else if (res.statusCode === _constants.HTTP_STATUS.FORBIDDEN) {
      var path = (0, _navigate.getCurrentPageUrl)();
      if (path !== 'pages/login/index') {
        _taroWeapp2.default.navigateTo({
          url: '/pages/login/index'
        });
      } // TODO 根据自身业务修改
      return showError('没有权限访问', showToast);
    } else if (res.statusCode === _constants.HTTP_STATUS.AUTHENTICATE) {
      // 没有权限 自动登录一次
      (0, _globalData.cleanToken)();
    } else if (res.statusCode >= 400) {
      var errorMsg = res.data && res.data.message;
      return showError(errorMsg, showToast);
    } else {
      return res.data;
    }
  });
};
var interceptors = [customInterceptor, _taroWeapp2.default.interceptors.logInterceptor];
exports.default = interceptors;

/***/ }),

/***/ "./src/utils/navigate.ts":
/*!*******************************!*\
  !*** ./src/utils/navigate.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentPageUrl = exports.navigateToWithFail = exports.pop = exports.hasHistory = exports.getPages = exports.push = exports.clear = undefined;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// import { stringify } from 'querystring';
var HISTORY_STORE_KEY = '_HISTORY_STORE_KEY';
var clear = exports.clear = function clear() {
  _taroWeapp2.default.removeStorageSync(HISTORY_STORE_KEY);
};
var push = exports.push = function push(url) {
  var historys = _taroWeapp2.default.getStorageSync(HISTORY_STORE_KEY) || [];
  var limitHistorys = historys.slice(historys.length - 9, historys.length);
  var newHistorys = [].concat(_toConsumableArray(limitHistorys), [url]);
  _taroWeapp2.default.setStorageSync(HISTORY_STORE_KEY, newHistorys);
};
/**
 * 获取当前队列中的所有页面
 */
var getPages = exports.getPages = function getPages() {
  var historys = _taroWeapp2.default.getStorageSync(HISTORY_STORE_KEY) || [];
  return historys;
};
/**
 * 是否含有历史记录
 */
var hasHistory = exports.hasHistory = function hasHistory() {
  var items = _taroWeapp2.default.getStorageSync(HISTORY_STORE_KEY) || [];
  return items.length > 0;
};
/**
 * 获取最后一条url,并从列表中移除
 */
var pop = exports.pop = function pop() {
  var historys = _taroWeapp2.default.getStorageSync(HISTORY_STORE_KEY) || [];
  var url = historys.pop();
  _taroWeapp2.default.setStorageSync(HISTORY_STORE_KEY, historys);
  return url || '';
};
/**
 * 跳转到指定页面，并处理出错的情况
 * @param option 参数
 * @param option.url {string} 跳转的url页面
 */
var navigateToWithFail = exports.navigateToWithFail = function navigateToWithFail(option, isBack) {
  var prePages = _taroWeapp2.default.getCurrentPages();
  var lastPage = prePages[prePages.length - 1];
  if (lastPage.route === option.url) {
    return;
  }
  if (!isBack) {
    var queryString = '';
    Object.keys(lastPage.options).forEach(function (key) {
      if (key !== '__key_') {
        queryString += (queryString ? '&' + key : 'key') + '=' + lastPage.options[key];
      }
    });
    push('/' + lastPage.route + (queryString ? '?' + queryString : ''));
  }
  _taroWeapp2.default.navigateTo({
    url: option.url,
    fail: function fail() {
      _taroWeapp2.default.reLaunch({
        url: option.url
      });
    }
  });
};
/* 获取当前页url */
var getCurrentPageUrl = exports.getCurrentPageUrl = function getCurrentPageUrl() {
  var pages = getPages();
  var currentPage = pages[pages.length - 1];
  return currentPage;
};

/***/ }),

/***/ "./src/utils/request.ts":
/*!******************************!*\
  !*** ./src/utils/request.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.del = exports.put = exports.post = exports.get = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _interceptors = __webpack_require__(/*! ./interceptors */ "./src/utils/interceptors.ts");

var _interceptors2 = _interopRequireDefault(_interceptors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_interceptors2.default.forEach(function (i) {
  return _taroWeapp2.default.addInterceptor(i);
});
function request(opt) {
  var token = _taroWeapp2.default.getStorageSync('token');
  var tokenHeader = {};
  if (token) {
    tokenHeader['Authorization'] = 'Bearer ' + token;
  }
  var option = _extends({}, opt, {
    header: _extends({}, tokenHeader, opt.header)
  });
  return _taroWeapp2.default.request(option);
}
function get(opt) {
  var option = void 0;
  if (typeof opt === 'string') {
    option = {
      url: opt
    };
  } else {
    option = opt;
  }
  return request(_extends({}, option, {
    method: 'GET'
  }));
}
function post(opt) {
  return request(_extends({}, opt, {
    method: 'POST'
  }));
}
function put(opt) {
  return request(_extends({
    method: 'PUT'
  }, opt));
}
function del(opt) {
  return request(_extends({
    method: 'DELETE'
  }, opt));
}
exports.default = request;
exports.get = get;
exports.post = post;
exports.put = put;
exports.del = del;

/***/ })

}]);