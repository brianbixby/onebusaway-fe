"use strict";
(self["webpackChunkonebusaway_fe"] = self["webpackChunkonebusaway_fe"] || []).push([["src_components_profile-container_index_js"],{

/***/ "./src/components/profile-container/index.js":
/*!***************************************************!*\
  !*** ./src/components/profile-container/index.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _userProfile_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userProfile-form */ "./src/components/userProfile-form/index.js");
/* harmony import */ var _actions_userAuth_actions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/userAuth-actions.js */ "./src/actions/userAuth-actions.js");
/* harmony import */ var _actions_userProfile_actions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/userProfile-actions.js */ "./src/actions/userProfile-actions.js");
/* harmony import */ var _lib_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../lib/util.js */ "./src/lib/util.js");
/* module decorator */ module = __webpack_require__.hmd(module);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};









var ProfileContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(ProfileContainer, _React$Component);

  var _super = _createSuper(ProfileContainer);

  function ProfileContainer(props) {
    var _this;

    _classCallCheck(this, ProfileContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleProfileUpdate", function (profile) {
      return _this.props.userProfileUpdate(profile).catch(_lib_util_js__WEBPACK_IMPORTED_MODULE_5__.logError);
    });

    return _this;
  }

  _createClass(ProfileContainer, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      (0,_lib_util_js__WEBPACK_IMPORTED_MODULE_5__.userValidation)(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      var profileAction = 'update'; // let placeholderImage = require('./../helpers/assets/profilePlaceholder.jpeg');
      // let profileImage = this.props.userProfile && this.props.userProfile.image ? this.props.userProfile.image : placeholderImage;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "profile-container page-outer-div"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "grid-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "col-md-8"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "createOuter"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "page-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_userProfile_form__WEBPACK_IMPORTED_MODULE_2__["default"], {
        userProfile: this.props.userProfile,
        onComplete: this.handleProfileUpdate,
        profileAction: profileAction
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "col-md-4 hideMedium"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "mainContainer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "mainContainer-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "mainContainerHeader"
      }, this.props.userProfile.username))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "mainContainerSection"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "mainContainerSectionWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "inner-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "userProfileData"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Member Since: ", (0,_lib_util_js__WEBPACK_IMPORTED_MODULE_5__.formatDate)(this.props.userProfile.createdOn)))))))))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ProfileContainer;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

var mapStateToProps = function mapStateToProps(state) {
  return {
    userAuth: state.userAuth,
    userProfile: state.userProfile
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    tokenSignIn: function tokenSignIn(token) {
      return dispatch((0,_actions_userAuth_actions_js__WEBPACK_IMPORTED_MODULE_3__.tokenSignInRequest)(token));
    },
    userProfileFetch: function userProfileFetch() {
      return dispatch((0,_actions_userProfile_actions_js__WEBPACK_IMPORTED_MODULE_4__.userProfileFetchRequest)());
    },
    userProfileUpdate: function userProfileUpdate(profile) {
      return dispatch((0,_actions_userProfile_actions_js__WEBPACK_IMPORTED_MODULE_4__.userProfileUpdateRequest)(profile));
    }
  };
};

var _default = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(ProfileContainer));

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ProfileContainer, "ProfileContainer", "/Users/brianbixby/Desktop/one-bus-away/onebusaway-fe/src/components/profile-container/index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/brianbixby/Desktop/one-bus-away/onebusaway-fe/src/components/profile-container/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/Users/brianbixby/Desktop/one-bus-away/onebusaway-fe/src/components/profile-container/index.js");
  reactHotLoader.register(_default, "default", "/Users/brianbixby/Desktop/one-bus-away/onebusaway-fe/src/components/profile-container/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ })

}]);
//# sourceMappingURL=src_components_profile-container_index_js.js.map