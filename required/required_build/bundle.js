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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/bundle-assets.json":
/*!**********************************!*\
  !*** ./build/bundle-assets.json ***!
  \**********************************/
/*! exports provided: bundle.css, bundle.js, vendors~bundle.js, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"bundle.css\\\":\\\"style.7d3feede11ebb19abf4d.css\\\",\\\"bundle.js\\\":\\\"bundle.7d3feede11ebb19abf4d.js\\\",\\\"vendors~bundle.js\\\":\\\"vendors~bundle.ad2ff3665431e8e941ea.js\\\"}\");\n\n//# sourceURL=webpack:///./build/bundle-assets.json?");

/***/ }),

/***/ "./src/components/authManager/Signin.js":
/*!**********************************************!*\
  !*** ./src/components/authManager/Signin.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reduxForm = __webpack_require__(/*! redux-form */ \"redux-form\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _AuthAction = __webpack_require__(/*! ../../event/action/AuthAction */ \"./src/event/action/AuthAction.js\");\n\nvar _Function_Common = __webpack_require__(/*! ../template/Function_Common */ \"./src/components/template/Function_Common.js\");\n\nvar _TextInput = __webpack_require__(/*! ../template/TextInput */ \"./src/components/template/TextInput.js\");\n\nvar _TextInput2 = _interopRequireDefault(_TextInput);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Signin = function (_Component) {\n    _inherits(Signin, _Component);\n\n    function Signin(props) {\n        _classCallCheck(this, Signin);\n\n        var _this = _possibleConstructorReturn(this, (Signin.__proto__ || Object.getPrototypeOf(Signin)).call(this, props));\n\n        _this.onSubmit = function (signinForm) {\n            _this.props.signinAction(signinForm, function () {\n                return _this.props.history.push('/');\n            });\n        };\n\n        return _this;\n    }\n\n    _createClass(Signin, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.handleInitialize();\n            var updatedFormObj = {\n                email: 'yoogesh2002@yahoo.com',\n                password: 'updatedPassword',\n                phone: '7137322412'\n            };\n            this.updateFormValue(updatedFormObj);\n        }\n    }, {\n        key: 'handleInitialize',\n        value: function handleInitialize() {\n            var signInForm = this.props.signInForm;\n\n            signInForm.email = 'syoogesh@gmail.com';\n            signInForm.password = 'initialPassword';\n            signInForm.phone = '8327628913';\n            this.props.initialize(this.initializeData(signInForm));\n        }\n    }, {\n        key: 'initializeData',\n        value: function initializeData(signInForm) {\n            if (!signInForm) return {};\n\n            var obj = {\n                email: signInForm.email,\n                password: signInForm.password\n            };\n            return obj;\n        }\n    }, {\n        key: 'updateFormValue',\n        value: function updateFormValue(formObj) {\n            var _this2 = this;\n\n            Object.keys(formObj).forEach(function (index) {\n                return _this2.updateFormField(index, formObj[index]);\n            });\n        }\n    }, {\n        key: 'updateFormField',\n        value: function updateFormField(formValueName) {\n            var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n\n            this.props.change(formValueName, value);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var handleSubmit = this.props.handleSubmit;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'card mb-5' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'card-header' },\n                    this.props.errorMessage ? _react2.default.createElement(\n                        'span',\n                        null,\n                        this.props.errorMessage.toUpperCase()\n                    ) : 'SIGN-IN'\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'card-body' },\n                    _react2.default.createElement(\n                        'form',\n                        { onSubmit: handleSubmit(this.onSubmit.bind(this)) },\n                        _react2.default.createElement(_reduxForm.Field, { type: 'email', name: 'email', placeholder: 'Enter email', autoComplete: 'none', component: _TextInput2.default }),\n                        _react2.default.createElement(_reduxForm.Field, { type: 'tel', name: 'phone', placeholder: 'Enter Phone', autoComplete: 'none', normalize: _Function_Common.OnlyNums, component: _TextInput2.default }),\n                        _react2.default.createElement(_reduxForm.Field, { type: 'password', name: 'password', placeholder: 'Enter password', autoComplete: 'none', component: _TextInput2.default }),\n                        _react2.default.createElement(_reduxForm.Field, { type: 'checkbox', name: 'rememberMe', placeholder: 'Remember Me', autoComplete: 'none', component: _TextInput2.default }),\n                        _react2.default.createElement('input', { type: 'submit', value: 'Signin', className: 'btn btn-block btn-success' })\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Signin;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n    var _state$form$signIn = state.form.signIn;\n    _state$form$signIn = _state$form$signIn === undefined ? {} : _state$form$signIn;\n    var _state$form$signIn$va = _state$form$signIn.values,\n        values = _state$form$signIn$va === undefined ? {} : _state$form$signIn$va,\n        _state$form$signIn$sy = _state$form$signIn.syncErrors,\n        syncErrors = _state$form$signIn$sy === undefined ? {} : _state$form$signIn$sy;\n    var errorMessage = state.twm_auth.errorMessage;\n\n    return {\n        signInForm: values,\n        errorMessage: errorMessage,\n        formErrors: syncErrors\n    };\n};\n\nexports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, { signinAction: _AuthAction.signinAction }), (0, _reduxForm.reduxForm)({ validate: _Function_Common.validateForm, form: 'signIn' }))((0, _reactRouterDom.withRouter)(Signin));\n\n//# sourceURL=webpack:///./src/components/authManager/Signin.js?");

/***/ }),

/***/ "./src/components/authManager/Signup.js":
/*!**********************************************!*\
  !*** ./src/components/authManager/Signup.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reduxForm = __webpack_require__(/*! redux-form */ \"redux-form\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _AuthAction = __webpack_require__(/*! ../../event/action/AuthAction */ \"./src/event/action/AuthAction.js\");\n\nvar _Function_Common = __webpack_require__(/*! ../template/Function_Common */ \"./src/components/template/Function_Common.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Signup = function (_Component) {\n    _inherits(Signup, _Component);\n\n    function Signup(props) {\n        _classCallCheck(this, Signup);\n\n        var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this, props));\n\n        _this.onSubmit = function (signupForm) {\n            _this.props.signupAction(signupForm, function () {\n                return _this.props.history.push('/');\n            });\n        };\n\n        return _this;\n    }\n\n    _createClass(Signup, [{\n        key: 'render',\n        value: function render() {\n            var handleSubmit = this.props.handleSubmit;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'card mb-5' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'card-header' },\n                    this.props.errorMessage ? _react2.default.createElement(\n                        'span',\n                        null,\n                        this.props.errorMessage.toUpperCase()\n                    ) : 'SIGN-UP'\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'card-body' },\n                    _react2.default.createElement(\n                        'form',\n                        { onSubmit: handleSubmit(this.onSubmit.bind(this)) },\n                        _react2.default.createElement(_reduxForm.Field, { type: 'email', name: 'email', placeholder: 'Enter email', autoComplete: 'none', component: _Function_Common.renderField }),\n                        _react2.default.createElement(_reduxForm.Field, { type: 'password', name: 'password', placeholder: 'Enter password', autoComplete: 'none', component: _Function_Common.renderField }),\n                        _react2.default.createElement('input', { type: 'submit', value: 'Signup', className: 'btn btn-block btn-success' })\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Signup;\n}(_react.Component);\n\nvar mapStateTOProps = function mapStateTOProps(state) {\n    return {\n        errorMessage: state.twm_auth.errorMessage\n    };\n};\n\nexports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapStateTOProps, { signupAction: _AuthAction.signupAction }), (0, _reduxForm.reduxForm)({ validate: _Function_Common.validateForm, form: 'SignUpForm' }))((0, _reactRouterDom.withRouter)(Signup));\n\n//# sourceURL=webpack:///./src/components/authManager/Signup.js?");

/***/ }),

/***/ "./src/components/contactManager/__fixtures__/allContactSchema.js":
/*!************************************************************************!*\
  !*** ./src/components/contactManager/__fixtures__/allContactSchema.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  \"definitions\": {},\n  \"$schema\": \"http://json-schema.org/draft-07/schema#\",\n  \"$id\": \"http://example.com/root.json\",\n  \"type\": \"object\",\n  \"title\": \"The Root Schema\"\n};\n\n//# sourceURL=webpack:///./src/components/contactManager/__fixtures__/allContactSchema.js?");

/***/ }),

/***/ "./src/components/contactManager/__fixtures__/allContactTestData.json":
/*!****************************************************************************!*\
  !*** ./src/components/contactManager/__fixtures__/allContactTestData.json ***!
  \****************************************************************************/
/*! exports provided: data, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"data\\\":[{\\\"id\\\":1,\\\"name\\\":\\\"Yoogesh Sharma\\\",\\\"email\\\":\\\"yoogesh2002@yahoo.com\\\",\\\"phone\\\":\\\"1-713-732-2412\\\"},{\\\"id\\\":2,\\\"name\\\":\\\"Ervin Howell\\\",\\\"email\\\":\\\"Shanna@melissa.tv\\\",\\\"phone\\\":\\\"010-692-6593 x09125\\\"},{\\\"id\\\":3,\\\"name\\\":\\\"Clementine Bauch\\\",\\\"email\\\":\\\"Nathan@yesenia.net\\\",\\\"phone\\\":\\\"1-463-123-4447\\\"},{\\\"id\\\":4,\\\"name\\\":\\\"Patricia Lebsack\\\",\\\"email\\\":\\\"Julianne.OConner@kory.org\\\",\\\"phone\\\":\\\"493-170-9623 x156\\\"},{\\\"id\\\":5,\\\"name\\\":\\\"Chelsey Dietrich\\\",\\\"email\\\":\\\"Lucio_Hettinger@annie.ca\\\",\\\"phone\\\":\\\"(254)954-1289\\\"},{\\\"id\\\":6,\\\"name\\\":\\\"Mrs. Dennis Schulist\\\",\\\"email\\\":\\\"Karley_Dach@jasper.info\\\",\\\"phone\\\":\\\"1-477-935-8478 x6430\\\"},{\\\"id\\\":7,\\\"name\\\":\\\"Kurtis Weissnat\\\",\\\"email\\\":\\\"Telly.Hoeger@billy.biz\\\",\\\"phone\\\":\\\"210.067.6132\\\"},{\\\"id\\\":8,\\\"name\\\":\\\"Nicholas Runolfsdottir V\\\",\\\"email\\\":\\\"Sherwood@rosamond.me\\\",\\\"phone\\\":\\\"586.493.6943 x140\\\"},{\\\"id\\\":9,\\\"name\\\":\\\"Glenna Reichert\\\",\\\"email\\\":\\\"Chaim_McDermott@dana.io\\\",\\\"phone\\\":\\\"(775)976-6794 x41206\\\"},{\\\"id\\\":10,\\\"name\\\":\\\"Clementina DuBuque\\\",\\\"email\\\":\\\"Rey.Padberg@karina.biz\\\",\\\"phone\\\":\\\"024-648-3804\\\"}]}\");\n\n//# sourceURL=webpack:///./src/components/contactManager/__fixtures__/allContactTestData.json?");

/***/ }),

/***/ "./src/components/contactManager/insert/AddContact_ref.js":
/*!****************************************************************!*\
  !*** ./src/components/contactManager/insert/AddContact_ref.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Template_Common = __webpack_require__(/*! ../../template/Template_Common */ \"./src/components/template/Template_Common.js\");\n\nvar _ContactAction = __webpack_require__(/*! ../../../event/action/ContactAction */ \"./src/event/action/ContactAction.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _requireAuth = __webpack_require__(/*! ../../higherOrder/requireAuth */ \"./src/components/higherOrder/requireAuth.js\");\n\nvar _requireAuth2 = _interopRequireDefault(_requireAuth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* requied for redirection i.e. this.props.history.push('/'); */\n\n\n/*\n  This is for Uncontrolled component where the field are comming as props\n*/\nvar AddContact = function (_Component) {\n  _inherits(AddContact, _Component);\n\n  function AddContact(props) {\n    _classCallCheck(this, AddContact);\n\n    //we will set this state by a rest call which happens as soon as the component will mount\n    var _this = _possibleConstructorReturn(this, (AddContact.__proto__ || Object.getPrototypeOf(AddContact)).call(this, props));\n\n    _this.onsubmit = function (e) {\n      e.preventDefault();\n\n      var contact = {\n        name: _this.nameInput.current.value,\n        phone: _this.phoneInput.current.value,\n        email: _this.emailInput.current.value\n\n        //check for errors\n      };var valid = _this.validateContact(contact);\n\n      if (valid) {\n        _this.props.addContactAction(contact);\n\n        //Finally redirect to home page\n        _this.props.history.push('/');\n      }\n    };\n\n    _this.state = {\n      title: ''\n    };\n\n    _this.idInput = _react2.default.createRef();\n    _this.nameInput = _react2.default.createRef();\n    _this.phoneInput = _react2.default.createRef();\n    _this.emailInput = _react2.default.createRef();\n    return _this;\n  }\n\n  _createClass(AddContact, [{\n    key: 'render',\n    value: function render() {\n      var _props = /*this.state*/this.props,\n          id = _props.id,\n          name = _props.name,\n          email = _props.email,\n          phone = _props.phone,\n          errors = _props.errors;\n\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'card mb-5' },\n        _react2.default.createElement(\n          'div',\n          { className: 'card-header' },\n          'Add Contact'\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'card-body' },\n          _react2.default.createElement(\n            'form',\n            { onSubmit: this.onsubmit.bind(this) },\n            _react2.default.createElement(_Template_Common.TextInputGroup_ref, { name: 'name', placeholder: 'Enter Name', defaultValue: name, reference: this.nameInput }),\n            _react2.default.createElement(_Template_Common.TextInputGroup_ref, { name: 'phone', placeholder: 'Enter phone', defaultValue: phone, reference: this.phoneInput }),\n            _react2.default.createElement(_Template_Common.TextInputGroup_ref, { type: 'email', name: 'email', placeholder: 'Enter email', defaultValue: email, reference: this.emailInput }),\n            _react2.default.createElement('input', { type: 'submit', value: 'Add Contact', className: 'btn btn-block btn-success' })\n          )\n        )\n      );\n    }\n  }, {\n    key: 'validateContact',\n    value: function validateContact(contact) {\n      var name = contact.name,\n          phone = contact.phone,\n          email = contact.email;\n\n\n      if (name === '') {\n        this.setState({\n          errors: { name: 'Name is required' }\n        });\n        return false;\n      }\n      if (phone === '') {\n        this.setState({\n          errors: { phone: 'phone is required' }\n        });\n        return false;\n      }\n      if (email === '') {\n        this.setState({\n          errors: { email: 'email is required' }\n        });\n        return false;\n      }\n      return true;\n    }\n\n    //Using Fetch to get request from rest call for more Information Go to ...... https://jsonplaceholder.typicode.com/\n\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var url = 'https://jsonplaceholder.typicode.com/todos/1';\n      fetch(url).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        console.log(data);\n        _this2.setState({\n          title: data.title\n        });\n      });\n    }\n  }]);\n\n  return AddContact;\n}(_react.Component);\n\nAddContact.defaultProps = {\n  id: '999',\n  name: 'Krisha',\n  phone: '7137322412',\n  email: 'Krisha_45@gmail.com'\n};\nexports.default = (0, _reactRedux.connect)(null, { addContactAction: _ContactAction.addContactAction })((0, _reactRouterDom.withRouter)((0, _requireAuth2.default)(AddContact)));\n\n//# sourceURL=webpack:///./src/components/contactManager/insert/AddContact_ref.js?");

/***/ }),

/***/ "./src/components/contactManager/read_delete/Contact.js":
/*!**************************************************************!*\
  !*** ./src/components/contactManager/read_delete/Contact.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _ContactAction = __webpack_require__(/*! ../../../event/action/ContactAction */ \"./src/event/action/ContactAction.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Contact = function (_Component) {\n    _inherits(Contact, _Component);\n\n    function Contact(props) {\n        _classCallCheck(this, Contact);\n\n        var _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));\n\n        _this.deleteContact = function (id) {\n            _this.props.deleteContactAction(id);\n        };\n\n        return _this;\n    }\n\n    _createClass(Contact, [{\n        key: 'render',\n        value: function render() {\n            var _props$contact = this.props.contact,\n                id = _props$contact.id,\n                name = _props$contact.name,\n                phone = _props$contact.phone,\n                email = _props$contact.email;\n            var isUserLoggedIn = this.props.isUserLoggedIn;\n\n            return _react2.default.createElement(\n                'table',\n                { className: 'table table-sm table-hover table-striped' },\n                _react2.default.createElement(\n                    'tbody',\n                    null,\n                    _react2.default.createElement(\n                        'tr',\n                        null,\n                        _react2.default.createElement(\n                            'td',\n                            null,\n                            name\n                        ),\n                        _react2.default.createElement(\n                            'td',\n                            null,\n                            phone\n                        ),\n                        _react2.default.createElement(\n                            'td',\n                            null,\n                            email,\n                            isUserLoggedIn && _react2.default.createElement(\n                                'span',\n                                null,\n                                _react2.default.createElement('i', { className: 'fas fa-times',\n                                    style: { curser: 'pointer', float: 'right', color: 'red' },\n                                    onClick: this.deleteContact.bind(this, id) }),\n                                _react2.default.createElement(\n                                    _reactRouterDom.Link,\n                                    { to: '/contact/edit/' + id },\n                                    _react2.default.createElement('i', { className: 'fas fa-pencil-alt',\n                                        style: { curser: 'pointer', float: 'right', color: 'black', marginRight: '1rem' } })\n                                )\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Contact;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        isUserLoggedIn: state.twm_auth.isAuthenticated\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, { deleteContactAction: _ContactAction.deleteContactAction })(Contact);\n\n//# sourceURL=webpack:///./src/components/contactManager/read_delete/Contact.js?");

/***/ }),

/***/ "./src/components/contactManager/read_delete/TableData.js":
/*!****************************************************************!*\
  !*** ./src/components/contactManager/read_delete/TableData.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.loadData = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _Contact = __webpack_require__(/*! ./Contact */ \"./src/components/contactManager/read_delete/Contact.js\");\n\nvar _Contact2 = _interopRequireDefault(_Contact);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _ContactAction = __webpack_require__(/*! ../../../event/action/ContactAction */ \"./src/event/action/ContactAction.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TableData = function (_Component) {\n    _inherits(TableData, _Component);\n\n    function TableData(props) {\n        _classCallCheck(this, TableData);\n\n        return _possibleConstructorReturn(this, (TableData.__proto__ || Object.getPrototypeOf(TableData)).call(this, props));\n    }\n\n    _createClass(TableData, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.props.getAllContactAction();\n        }\n    }, {\n        key: 'renderContactLists',\n        value: function renderContactLists(contact) {\n            return _react2.default.createElement(_Contact2.default, { key: contact.id, contact: contact }); // renderContactLists = contact => <Contact key={contact.id} contact={contact} isUserLoggedIn={this.props.isUserLoggedIn} />;\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var contactsObject = this.props.contacts;\n            var contactsArray = _lodash2.default.map(contactsObject);\n\n            var contactList = contactsArray.map(this.renderContactLists);\n            //const contactList = contactsArray.map(contact => <Contact key={contact.id} contact={contact} />);  -- Or you can do like this\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                contactList\n            );\n        }\n    }]);\n\n    return TableData;\n}(_react.Component);\n\nTableData.propTypes = {\n    contacts: _propTypes2.default.object.isRequired,\n    getAllContactAction: _propTypes2.default.func.isRequired\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        contacts: state.twm_contact.contacts,\n        isUserLoggedIn: state.twm_auth.isAuthenticated\n    };\n};\n\nvar loadData = function loadData(store) {\n    return store.dispatch((0, _ContactAction.getAllContactAction)('server'));\n};\n\nexports.loadData = loadData;\nexports.default = (0, _reactRedux.connect)(mapStateToProps, { getAllContactAction: _ContactAction.getAllContactAction })(TableData);\n\n//# sourceURL=webpack:///./src/components/contactManager/read_delete/TableData.js?");

/***/ }),

/***/ "./src/components/contactManager/setting/PersonalSetting.js":
/*!******************************************************************!*\
  !*** ./src/components/contactManager/setting/PersonalSetting.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _SettingsAction = __webpack_require__(/*! ../../../event/action/SettingsAction */ \"./src/event/action/SettingsAction.js\");\n\nvar _requireAuth = __webpack_require__(/*! ../../higherOrder/requireAuth */ \"./src/components/higherOrder/requireAuth.js\");\n\nvar _requireAuth2 = _interopRequireDefault(_requireAuth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Setting = function (_Component) {\n  _inherits(Setting, _Component);\n\n  function Setting(props) {\n    _classCallCheck(this, Setting);\n\n    var _this = _possibleConstructorReturn(this, (Setting.__proto__ || Object.getPrototypeOf(Setting)).call(this, props));\n\n    _this.disableBalanceOnAddChange = function () {\n      _this.props.setDisableBalanceOnAddAction();\n    };\n\n    _this.disableBalanceOnEditChange = function () {\n      _this.props.setDisableBalanceOnEditAction();\n    };\n\n    _this.allowRegistrationChange = function () {\n      _this.props.setAllowRegistrationAction();\n    };\n\n    _this.changeEnvironmentSetting = function () {\n      _this.props.setRunningEnvironmentAction();\n    };\n\n    return _this;\n  }\n\n  _createClass(Setting, [{\n    key: 'render',\n    value: function render() {\n      var _props$settings = this.props.settings,\n          disableBalanceOnAdd = _props$settings.disableBalanceOnAdd,\n          disableBalanceOnEdit = _props$settings.disableBalanceOnEdit,\n          allowRegistration = _props$settings.allowRegistration,\n          runningOnTestEnvironment = _props$settings.runningOnTestEnvironment;\n\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          { className: 'row' },\n          _react2.default.createElement(\n            'div',\n            { className: 'col-md-6' },\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: '/', className: 'btn btn-link' },\n              _react2.default.createElement('i', { className: 'fas fa-arrow-circle-left' }),\n              ' Back To Home'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'card' },\n          _react2.default.createElement(\n            'div',\n            { className: 'card-header' },\n            'Edit Settings'\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'card-body' },\n            _react2.default.createElement(\n              'form',\n              null,\n              _react2.default.createElement(\n                'div',\n                { className: 'form-group' },\n                _react2.default.createElement(\n                  'label',\n                  null,\n                  'Allow Registration'\n                ),\n                ' ',\n                _react2.default.createElement('input', {\n                  type: 'checkbox',\n                  name: 'allowRegistration',\n                  checked: !!allowRegistration,\n                  onChange: this.allowRegistrationChange.bind(this)\n                })\n              ),\n              _react2.default.createElement(\n                'div',\n                { className: 'form-group' },\n                _react2.default.createElement(\n                  'label',\n                  null,\n                  'Disable Balance On Add'\n                ),\n                ' ',\n                _react2.default.createElement('input', {\n                  type: 'checkbox',\n                  name: 'disableBalanceOnAdd',\n                  checked: !!disableBalanceOnAdd,\n                  onChange: this.disableBalanceOnAddChange.bind(this)\n                })\n              ),\n              _react2.default.createElement(\n                'div',\n                { className: 'form-group' },\n                _react2.default.createElement(\n                  'label',\n                  null,\n                  'Disable Balance On Edit'\n                ),\n                ' ',\n                _react2.default.createElement('input', {\n                  type: 'checkbox',\n                  name: 'disableBalanceOnEdit',\n                  checked: !!disableBalanceOnEdit,\n                  onChange: this.disableBalanceOnEditChange.bind(this)\n                })\n              ),\n              _react2.default.createElement(\n                'div',\n                { className: 'form-group' },\n                _react2.default.createElement(\n                  'label',\n                  null,\n                  'Enable Test Environment'\n                ),\n                ' ',\n                _react2.default.createElement('input', {\n                  type: 'checkbox',\n                  name: 'runningOnTestEnvironment',\n                  checked: !!runningOnTestEnvironment,\n                  onChange: this.changeEnvironmentSetting.bind(this)\n                })\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Setting;\n}(_react.Component);\n\nSetting.propTypes = {\n  settings: _propTypes2.default.object.isRequired,\n  setDisableBalanceOnAddAction: _propTypes2.default.func.isRequired,\n  setDisableBalanceOnEditAction: _propTypes2.default.func.isRequired,\n  setAllowRegistrationAction: _propTypes2.default.func.isRequired,\n  setRunningEnvironmentAction: _propTypes2.default.func.isRequired\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    settings: state.twm_setting\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, { setAllowRegistrationAction: _SettingsAction.setAllowRegistrationAction,\n  setDisableBalanceOnAddAction: _SettingsAction.setDisableBalanceOnAddAction,\n  setDisableBalanceOnEditAction: _SettingsAction.setDisableBalanceOnEditAction,\n  setRunningEnvironmentAction: _SettingsAction.setRunningEnvironmentAction\n})((0, _requireAuth2.default)(Setting));\n\n//# sourceURL=webpack:///./src/components/contactManager/setting/PersonalSetting.js?");

/***/ }),

/***/ "./src/components/contactManager/update/EditContact.js":
/*!*************************************************************!*\
  !*** ./src/components/contactManager/update/EditContact.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.loadData = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _ContactAction = __webpack_require__(/*! ../../../event/action/ContactAction */ \"./src/event/action/ContactAction.js\");\n\nvar _Template_Common = __webpack_require__(/*! ../../template/Template_Common */ \"./src/components/template/Template_Common.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* requied for redirection i.e. this.props.history.push('/'); */\n\n\nvar EditContact = function (_Component) {\n  _inherits(EditContact, _Component);\n\n  function EditContact(props) {\n    _classCallCheck(this, EditContact);\n\n    var _this = _possibleConstructorReturn(this, (EditContact.__proto__ || Object.getPrototypeOf(EditContact)).call(this, props));\n\n    _this.onchange = function (e) {\n      return _this.setState(_defineProperty({}, e.target.name, e.target.value));\n    };\n\n    _this.onsubmit = function (e) {\n      e.preventDefault();\n\n      //check for errors\n      var valid = _this.validateContact();\n\n      if (valid) {\n        _this.props.editContactAction(_this.state);\n\n        //remove value after submitting\n        _this.setState({ id: '', name: '', phone: '', email: '', errors: {} });\n\n        //Finally redirect to home page\n        _this.props.history.push('/');\n      }\n    };\n\n    _this.state = { id: '',\n      name: '',\n      phone: '',\n      email: '',\n      errors: {}\n    };\n    return _this;\n  }\n\n  _createClass(EditContact, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var id = this.props.match.params.id;\n      var getContactAction = this.props.getContactAction;\n\n      getContactAction(id);\n    }\n  }, {\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(nextProps, nextState) {\n      var _nextProps$currentCon = nextProps.currentContact,\n          id = _nextProps$currentCon.id,\n          name = _nextProps$currentCon.name,\n          phone = _nextProps$currentCon.phone,\n          email = _nextProps$currentCon.email;\n\n      this.setState({\n        id: id,\n        name: name,\n        phone: phone,\n        email: email\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _state = this.state,\n          name = _state.name,\n          phone = _state.phone,\n          email = _state.email,\n          errors = _state.errors;\n\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'card mb-5' },\n        _react2.default.createElement(\n          'div',\n          { className: 'card-header' },\n          'Edit Id: [',\n          this.props.match.params.id,\n          ']'\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'card-body' },\n          _react2.default.createElement(\n            'form',\n            { onSubmit: this.onsubmit.bind(this) },\n            _react2.default.createElement(_Template_Common.TextInputGroup, { name: 'name', placeholder: 'Enter name', value: name, onChange: this.onchange.bind(this), error: errors.name }),\n            _react2.default.createElement(_Template_Common.TextInputGroup, { name: 'phone', placeholder: 'Enter phone', value: phone, onChange: this.onchange.bind(this), error: errors.phone }),\n            _react2.default.createElement(_Template_Common.TextInputGroup, { type: 'email', name: 'email', placeholder: 'Enter email', value: email, onChange: this.onchange.bind(this), error: errors.email }),\n            _react2.default.createElement('input', { type: 'submit', value: 'Update Contact', className: 'btn btn-block btn-success' })\n          )\n        )\n      );\n    }\n  }, {\n    key: 'validateContact',\n    value: function validateContact() {\n      var _state2 = this.state,\n          name = _state2.name,\n          phone = _state2.phone,\n          email = _state2.email;\n\n\n      if (name === '') {\n        this.setState({\n          errors: { name: 'Name is required' }\n        });\n        return false;\n      }\n      if (phone === '') {\n        this.setState({\n          errors: { phone: 'phone is required' }\n        });\n        return false;\n      }\n      if (email === '') {\n        this.setState({\n          errors: { email: 'email is required' }\n        });\n        return false;\n      }\n      return true;\n    }\n  }]);\n\n  return EditContact;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    currentContact: state.twm_contact.currentContact\n  };\n};\n\nvar loadData = function loadData(store) {\n  return store.dispatch((0, _ContactAction.getContactAction)('1'));\n}; //No need for return if one line(explicitely it will return)\nexports.loadData = loadData;\nexports.default = (0, _reactRedux.connect)(mapStateToProps, { editContactAction: _ContactAction.editContactAction,\n  getContactAction: _ContactAction.getContactAction\n})((0, _reactRouterDom.withRouter)(EditContact));\n\n//# sourceURL=webpack:///./src/components/contactManager/update/EditContact.js?");

/***/ }),

/***/ "./src/components/higherOrder/requireAuth.js":
/*!***************************************************!*\
  !*** ./src/components/higherOrder/requireAuth.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nexports.default = function (ChildComponent) {\n    var RequireAuth = function (_Component) {\n        _inherits(RequireAuth, _Component);\n\n        function RequireAuth() {\n            _classCallCheck(this, RequireAuth);\n\n            return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));\n        }\n\n        _createClass(RequireAuth, [{\n            key: 'componentDidMount',\n            value: function componentDidMount() {\n                if (!this.props.isAuthenticated) {\n                    this.props.history.push('/');\n                }\n            }\n        }, {\n            key: 'componentDidUpdate',\n            value: function componentDidUpdate() {\n                if (!this.props.isAuthenticated) {\n                    this.props.history.push('/');\n                }\n            }\n        }, {\n            key: 'render',\n            value: function render() {\n                switch (this.props.isAuthenticated) {\n                    case false:\n                        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });\n                    case null:\n                        return _react2.default.createElement(\n                            'div',\n                            null,\n                            'Loading...'\n                        );\n                    default:\n                        return _react2.default.createElement(ChildComponent, this.props);\n                }\n            }\n        }]);\n\n        return RequireAuth;\n    }(_react.Component);\n\n    var mapStateToProps = function mapStateToProps(state) {\n        return {\n            isAuthenticated: state.twm_auth.isAuthenticated\n        };\n    };\n\n    return (0, _reactRedux.connect)(mapStateToProps)((0, _reactRouterDom.withRouter)(RequireAuth));\n};\n\n//# sourceURL=webpack:///./src/components/higherOrder/requireAuth.js?");

/***/ }),

/***/ "./src/components/template/Function_Common.js":
/*!****************************************************!*\
  !*** ./src/components/template/Function_Common.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.modifyLocalStorageSetting = exports.OnlyNums = exports.validateForm = exports.renderField = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//This method is used for Redux-form to insert input field. It is used at Signup form currently\nvar renderField = exports.renderField = function renderField(props) {\n  var error = props.meta.error;\n  var isFieldTouched = props.meta.touched;\n  var submitFailed = props.meta.submitFailed;\n\n  return _react2.default.createElement(\n    'div',\n    { className: 'form-group' },\n    _react2.default.createElement('input', _extends({ type: props.type,\n      name: props.name,\n      placeholder: props.placeholder,\n      normalize: props.normalize,\n      className: (props.type !== 'checkbox' ? 'form-control form-control-lg' : '') + ' ' + (isFieldTouched && error && submitFailed ? 'is-invalid' : ''),\n      autoComplete: props.placeholder\n    }, props.input)),\n    ' ',\n    props.type === 'checkbox' ? 'RememberMe' : '',\n    isFieldTouched && error && submitFailed && _react2.default.createElement(\n      'div',\n      { className: 'invalid-feedback' },\n      error\n    )\n  );\n};\n\n//This is actual validation for signInForm and signUpForm\nvar validateForm = exports.validateForm = function validateForm(inputform) {\n  var errors = {};\n  var email = inputform.email,\n      password = inputform.password,\n      phone = inputform.phone;\n\n  var requiredFields = ['email', 'password', 'phone'];\n\n  /* Check required fields */\n  requiredFields.forEach(function (index) {\n    if (!inputform[index]) {\n      errors[index] = 'This is a required field';\n    }\n  });\n\n  /* Email-address Validation */\n  if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i.test(email)) {\n    errors.email = 'Please enter a valid email address containing an \"@\" and \".\" symbol.';\n  }\n\n  return errors;\n};\n\nvar OnlyNums = exports.OnlyNums = function OnlyNums(str) {\n  return str.replace(/[^\\d]/g, '');\n};\n\n//This method is used to modify the localStorage Setting\nvar modifyLocalStorageSetting = exports.modifyLocalStorageSetting = function modifyLocalStorageSetting(param, value, toggleable) {\n  var settings = JSON.parse(localStorage.getItem('settings'));\n\n  if (toggleable) {\n    settings[param] = !settings[param];\n  } else {\n    settings[param] = value;\n  }\n  localStorage.setItem('settings', JSON.stringify(settings));\n  return settings;\n};\n\n//# sourceURL=webpack:///./src/components/template/Function_Common.js?");

/***/ }),

/***/ "./src/components/template/Header.js":
/*!*******************************************!*\
  !*** ./src/components/template/Header.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _AuthAction = __webpack_require__(/*! ../../event/action/AuthAction */ \"./src/event/action/AuthAction.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = function (_Component) {\n  _inherits(Header, _Component);\n\n  function Header(props) {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));\n  }\n\n  _createClass(Header, [{\n    key: 'renderLinks',\n    value: function renderLinks() {\n      var _props = this.props,\n          dynamicId = _props.dynamicId,\n          isUserLoggedIn = _props.isUserLoggedIn;\n      var _props$settings = this.props.settings,\n          disableBalanceOnAdd = _props$settings.disableBalanceOnAdd,\n          disableBalanceOnEdit = _props$settings.disableBalanceOnEdit,\n          allowRegistration = _props$settings.allowRegistration;\n\n\n      if (!isUserLoggedIn) {\n        return _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'ul',\n            { className: 'navbar-nav mr-auto' },\n            _react2.default.createElement(\n              'li',\n              { className: 'nav-item' },\n              _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: '/signin', className: 'nav-link' },\n                _react2.default.createElement('i', { className: 'fas fa-sign-in-alt' }),\n                ' Sign-In'\n              )\n            ),\n            _react2.default.createElement(\n              'li',\n              { className: 'nav-item' },\n              _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: '/signup', className: 'nav-link' },\n                _react2.default.createElement('i', { className: 'fas fa-plus' }),\n                ' Sign-Up'\n              )\n            )\n          )\n        );\n      } else {\n        return _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'ul',\n            { className: 'navbar-nav mr-auto' },\n            _react2.default.createElement(\n              'li',\n              { className: 'nav-item' },\n              _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: '/contact/add', className: 'nav-link' },\n                _react2.default.createElement('i', { className: 'fas fa-plus' }),\n                ' Add'\n              )\n            ),\n            disableBalanceOnAdd && disableBalanceOnEdit && allowRegistration && _react2.default.createElement(\n              'li',\n              { className: 'nav-item' },\n              _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: '/about/' + dynamicId, className: 'nav-link' },\n                _react2.default.createElement('i', { className: 'fas fa-question' }),\n                ' About'\n              )\n            ),\n            _react2.default.createElement(\n              'li',\n              { className: 'nav-item' },\n              _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: '/contact/setting', className: 'nav-link' },\n                _react2.default.createElement('i', { className: 'fas fa-question' }),\n                ' Setting'\n              )\n            ),\n            _react2.default.createElement(\n              'a',\n              { href: '#', className: 'nav-link', onClick: this.props.signoutAction.bind(this) },\n              _react2.default.createElement('i', { className: 'fas  fa-sign-out-alt' }),\n              ' Sign-Out'\n            )\n          )\n        );\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var branding = this.props.branding;\n      var routes = this.props.route.routes;\n\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'nav',\n          { className: 'navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0' },\n          _react2.default.createElement(\n            'div',\n            { className: 'container' },\n            _react2.default.createElement(\n              'a',\n              { href: '/', className: 'navbar-brand' },\n              ' ',\n              _react2.default.createElement('i', { className: 'fas fa-home' }),\n              ' ',\n              branding\n            ),\n            this.renderLinks()\n          )\n        ),\n        (0, _reactRouterConfig.renderRoutes)(routes)\n      );\n    }\n  }]);\n\n  return Header;\n}(_react.Component);\n\nHeader.defaultProps = {\n  branding: 'Home'\n};\n\nHeader.propTypes = {\n  branding: _propTypes2.default.string.isRequired\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    dynamicId: state.twm_contact.dynamicId,\n    isUserLoggedIn: state.twm_auth.isAuthenticated,\n    settings: state.twm_setting\n  };\n};\n\nexports.default = {\n  component: (0, _reactRedux.connect)(mapStateToProps, { signoutAction: _AuthAction.signoutAction })(Header)\n};\n\n//# sourceURL=webpack:///./src/components/template/Header.js?");

/***/ }),

/***/ "./src/components/template/Template_Common.js":
/*!****************************************************!*\
  !*** ./src/components/template/Template_Common.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.TableHeader = exports.MetaTag = exports.TextInputGroup_ref = exports.TextInputGroup = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _classnames = __webpack_require__(/*! classnames */ \"classnames\");\n\nvar _classnames2 = _interopRequireDefault(_classnames);\n\nvar _base = __webpack_require__(/*! ../../css/base.css */ \"./src/css/base.css\");\n\nvar _base2 = _interopRequireDefault(_base);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//we are using de-structuring provided by es6 here. so instead of props.label, we are {doing} label so we can use label directly later\nvar TextInputGroup = function TextInputGroup(_ref) {\n    var _React$createElement;\n\n    var type = _ref.type,\n        name = _ref.name,\n        placeholder = _ref.placeholder,\n        value = _ref.value,\n        onChange = _ref.onChange,\n        error = _ref.error;\n\n    return _react2.default.createElement(\n        'div',\n        { className: 'form-group' },\n        _react2.default.createElement('input', (_React$createElement = { type: type,\n            name: name,\n            className: 'is-invalid form-control form-control-lg'\n        }, _defineProperty(_React$createElement, 'className', (0, _classnames2.default)('form-control form-control-lg', { 'is-invalid': error })), _defineProperty(_React$createElement, 'placeholder', placeholder), _defineProperty(_React$createElement, 'value', value), _defineProperty(_React$createElement, 'onChange', onChange), _React$createElement)),\n        error && _react2.default.createElement(\n            'div',\n            { className: 'invalid-feedback' },\n            error\n        )\n    );\n};\n\nvar TextInputGroup_ref = function TextInputGroup_ref(props) {\n    var type = props.type,\n        name = props.name,\n        placeholder = props.placeholder,\n        defaultValue = props.defaultValue,\n        reference = props.reference,\n        error = props.error;\n\n    return _react2.default.createElement(\n        'div',\n        { className: 'form-group' },\n        _react2.default.createElement('input', { type: type,\n            name: name,\n            className: (0, _classnames2.default)('form-control form-control-lg', { 'is-invalid': error }),\n            placeholder: placeholder\n            //value={lastName}          -- instead of value, we use defaultValue\n            //onChange={this.onchange}  -- instead of onChange, we use ref\n            , defaultValue: defaultValue,\n            ref: reference })\n    );\n};\n\nvar MetaTag = function MetaTag(props) {\n    return _react2.default.createElement(\n        _reactHelmet.Helmet,\n        null,\n        _react2.default.createElement(\n            'title',\n            null,\n            props.title\n        ),\n        _react2.default.createElement('meta', { property: 'og:title', content: props.content })\n    );\n};\n\nvar TableHeader = function TableHeader() {\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            'table',\n            { className: 'table table-sm table-hover table-striped' },\n            _react2.default.createElement(\n                'thead',\n                null,\n                _react2.default.createElement(\n                    'tr',\n                    { className: _base2.default.yms },\n                    _react2.default.createElement(\n                        'th',\n                        null,\n                        'Name'\n                    ),\n                    _react2.default.createElement(\n                        'th',\n                        null,\n                        'Phone'\n                    ),\n                    _react2.default.createElement(\n                        'th',\n                        null,\n                        'Email'\n                    )\n                )\n            )\n        )\n    );\n};\n\n/*--------------------------------------------------------*/\nTextInputGroup.propTypes = {\n    type: _propTypes2.default.string.isRequired,\n    name: _propTypes2.default.string.isRequired,\n    placeholder: _propTypes2.default.string.isRequired,\n    value: _propTypes2.default.string.isRequired,\n    onChange: _propTypes2.default.func.isRequired,\n    error: _propTypes2.default.string\n};\n\nTextInputGroup.defaultProps = {\n    type: 'text'\n};\n\nTextInputGroup_ref.propTypes = {\n    type: _propTypes2.default.string.isRequired,\n    name: _propTypes2.default.string.isRequired,\n    placeholder: _propTypes2.default.string.isRequired,\n    defaultValue: _propTypes2.default.string.isRequired,\n    reference: _propTypes2.default.object.isRequired\n};\n\nTextInputGroup_ref.defaultProps = {\n    type: 'text'\n};\n/*--------------------------------------------------------*/\n\nexports.TextInputGroup = TextInputGroup;\nexports.TextInputGroup_ref = TextInputGroup_ref;\nexports.MetaTag = MetaTag;\nexports.TableHeader = TableHeader;\n\n//# sourceURL=webpack:///./src/components/template/Template_Common.js?");

/***/ }),

/***/ "./src/components/template/TextInput.js":
/*!**********************************************!*\
  !*** ./src/components/template/TextInput.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _sharedComponents = __webpack_require__(/*! ../../sharedComponents */ \"./src/sharedComponents/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TextInput = function (_Component) {\n  _inherits(TextInput, _Component);\n\n  function TextInput(props) {\n    _classCallCheck(this, TextInput);\n\n    return _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call(this, props));\n  }\n\n  _createClass(TextInput, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          input = _props.input,\n          type = _props.type,\n          _props$meta = _props.meta,\n          isFieldTouched = _props$meta.touched,\n          error = _props$meta.error,\n          submitFailed = _props$meta.submitFailed;\n\n      var hasError = isFieldTouched && error && submitFailed;\n      var isCheckBoxField = type === 'checkbox';\n      var className = (isCheckBoxField ? 'checkBoxContainer' : 'form-control form-control-lg') + ' ' + (hasError ? 'is-invalid' : '');\n      var invalidFeedBackClassName = hasError ? 'invalid-feedback' : '';\n\n      var attrs = _extends({}, this.props, {\n        hasError: hasError,\n        isCheckBoxField: isCheckBoxField,\n        value: input.value,\n        className: className,\n        invalidFeedBackClassName: invalidFeedBackClassName\n      });\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'form-group' },\n        _react2.default.createElement(_sharedComponents.InputField, attrs)\n      );\n    }\n  }]);\n\n  return TextInput;\n}(_react.Component);\n\nexports.default = TextInput;\n\n//# sourceURL=webpack:///./src/components/template/TextInput.js?");

/***/ }),

/***/ "./src/css/base.css":
/*!**************************!*\
  !*** ./src/css/base.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"yms\":\"yms__8dpfFrbt\"};\n\n//# sourceURL=webpack:///./src/css/base.css?");

/***/ }),

/***/ "./src/event/Store_Server.js":
/*!***********************************!*\
  !*** ./src/event/Store_Server.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/event/reducer/index.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nvar _log = __webpack_require__(/*! ../event/middlewire/log */ \"./src/event/middlewire/log.js\");\n\nvar _log2 = _interopRequireDefault(_log);\n\nvar _stateValidator = __webpack_require__(/*! ../event/middlewire/stateValidator */ \"./src/event/middlewire/stateValidator.js\");\n\nvar _stateValidator2 = _interopRequireDefault(_stateValidator);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req) {\n\n    // Initial State Setting\n    var initialState = {};\n\n    //MiddleWare Setting\n    var axiosInstance = _axios2.default.create({\n        baseURL: 'https://jsonplaceholder.typicode.com',\n        headers: { cookie: req.get('cookie') || '' }\n    });\n    var middleware = [_reduxThunk2.default.withExtraArgument(axiosInstance), _log2.default, _stateValidator2.default];\n\n    //Store Creation\n    var store = (0, _redux.createStore)(_reducer2.default, initialState, _redux.applyMiddleware.apply(undefined, middleware));\n\n    return store;\n};\n\n//# sourceURL=webpack:///./src/event/Store_Server.js?");

/***/ }),

/***/ "./src/event/Types.js":
/*!****************************!*\
  !*** ./src/event/Types.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n//contact Reducer\nvar GET_CONTACTS = exports.GET_CONTACTS = 'get_All_Contacts';\nvar ADD_CONTACT = exports.ADD_CONTACT = 'add_Contacts';\nvar EDIT_CONTACT = exports.EDIT_CONTACT = 'edit_Contacts';\nvar DELETE_CONTACT = exports.DELETE_CONTACT = 'delete_Contacts';\nvar GET_CONTACT = exports.GET_CONTACT = 'get_Single_Contact';\n\n//Setting Reducer\nvar DISABLE_BALANCE_ON_ADD = exports.DISABLE_BALANCE_ON_ADD = 'DISABLE_BALANCE_ON_ADD';\nvar DISABLE_BALANCE_ON_EDIT = exports.DISABLE_BALANCE_ON_EDIT = 'DISABLE_BALANCE_ON_EDIT';\nvar ALLOW_REGISTRATION = exports.ALLOW_REGISTRATION = 'ALLOW_REGISTRATION';\nvar CHANGE_RUNTIME_ENVIRONMENT = exports.CHANGE_RUNTIME_ENVIRONMENT = 'CHANGE_RUNTIME_ENVIRONMENT';\n\n//Auth Reducer (Using Latest Approach)\n\n//# sourceURL=webpack:///./src/event/Types.js?");

/***/ }),

/***/ "./src/event/action/AuthAction.js":
/*!****************************************!*\
  !*** ./src/event/action/AuthAction.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.signoutAction = exports.signupAction = exports.signinAction = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _Function_Common = __webpack_require__(/*! ../../components/template/Function_Common */ \"./src/components/template/Function_Common.js\");\n\nvar _types = __webpack_require__(/*! ../types */ \"./src/event/types.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n//This is as exact as signupAction, which tells you what's going under the hood and why it is different then signoutAction\nvar signinAction = exports.signinAction = function signinAction(signinForm, callback) {\n    return function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n\n                            console.log(\"Current State :\", getState());\n                            try {\n                                //const response = await axios.post(`${process.env.AUTH_API_URL}/signin`, signinForm);\n                                dispatch({\n                                    type: 'auth_user',\n                                    payload: 'TestTokenByYoogesh', //response.data.token\n                                    isAuthenticated: true\n                                });\n                                setAuthTokenToLocalStorage('TestTokenByYoogesh'); //response.data.token\n                                callback();\n                            } catch (error) {\n                                dispatch({\n                                    type: 'auth_error',\n                                    payload: 'Invalid login credentials'\n                                });\n                            }\n\n                        case 2:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined);\n        }));\n\n        return function (_x, _x2, _x3) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n};\n\nvar signupAction = exports.signupAction = function signupAction(signupForm, callback) {\n\n    return function () {\n        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {\n            return regeneratorRuntime.wrap(function _callee2$(_context2) {\n                while (1) {\n                    switch (_context2.prev = _context2.next) {\n                        case 0:\n\n                            try {\n                                //const response = await axios.post(`${process.env.AUTH_API_URL}/signup`, signupForm);\n                                dispatch({\n                                    type: 'auth_user',\n                                    payload: 'TestTokenByYoogesh', //response.data.token\n                                    isAuthenticated: true\n                                });\n                                setAuthTokenToLocalStorage('TestTokenByYoogesh'); //response.data.token \n                                callback();\n                            } catch (error) {\n                                dispatch({\n                                    type: 'auth_error',\n                                    payload: 'Signup failed!! Reason: ' + error\n                                });\n                            }\n\n                        case 1:\n                        case 'end':\n                            return _context2.stop();\n                    }\n                }\n            }, _callee2, this);\n        }));\n\n        return function (_x4, _x5, _x6) {\n            return _ref2.apply(this, arguments);\n        };\n    }();\n};\n\n//You cannot dispatch more then one action from here since you are returning Object here (Unlike function above. Make sure Thunk gives you an option to return function which is not possible in promise) \nvar signoutAction = exports.signoutAction = function signoutAction() {\n    setAuthTokenToLocalStorage(null);\n    return {\n        type: 'auth_user',\n        payload: null,\n        isAuthenticated: false\n    };\n};\n\nvar setAuthTokenToLocalStorage = function setAuthTokenToLocalStorage(tokenValue) {\n    return (0, _Function_Common.modifyLocalStorageSetting)('jwtToken', tokenValue, false);\n};\n\n//# sourceURL=webpack:///./src/event/action/AuthAction.js?");

/***/ }),

/***/ "./src/event/action/ContactAction.js":
/*!*******************************************!*\
  !*** ./src/event/action/ContactAction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.deleteContactAction = exports.editContactAction = exports.addContactAction = exports.getContactAction = exports.getAllContactAction = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _uuid = __webpack_require__(/*! uuid */ \"uuid\");\n\nvar _uuid2 = _interopRequireDefault(_uuid);\n\nvar _Types = __webpack_require__(/*! ../Types */ \"./src/event/Types.js\");\n\nvar _allContactTestData = __webpack_require__(/*! ../../components/contactManager/__fixtures__/allContactTestData.json */ \"./src/components/contactManager/__fixtures__/allContactTestData.json\");\n\nvar _allContactTestData2 = _interopRequireDefault(_allContactTestData);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\nvar getAllContactAction = exports.getAllContactAction = function getAllContactAction(source) {\n    return function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n            var url, res;\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            _context.prev = 0;\n                            url = '/users';\n                            res = void 0;\n\n                            //if Running on Test Environment\n\n                            if (!(source !== 'server' && JSON.parse(localStorage.getItem('settings')).runningOnTestEnvironment === true)) {\n                                _context.next = 7;\n                                break;\n                            }\n\n                            res = _allContactTestData2.default;\n                            _context.next = 10;\n                            break;\n\n                        case 7:\n                            _context.next = 9;\n                            return api.get(url).catch(function (error) {\n                                if (error && error.response) {\n                                    console.log(\"Fetching contact failed...!!\" + error);\n                                }\n                                return error;\n                            });\n\n                        case 9:\n                            res = _context.sent;\n\n                        case 10:\n\n                            //finally dispatch the response\n                            dispatch({\n                                type: _Types.GET_CONTACTS,\n                                payload: res.data,\n                                dynamicId: res.data[0].id\n                            });\n                            _context.next = 16;\n                            break;\n\n                        case 13:\n                            _context.prev = 13;\n                            _context.t0 = _context['catch'](0);\n\n                            console.log(\"SomeThing went wrong while calling getAllContact() method...!! Check whether you are in test environment..!!\" + _context.t0);\n\n                        case 16:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined, [[0, 13]]);\n        }));\n\n        return function (_x, _x2, _x3) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n};\n\nvar getContactAction = exports.getContactAction = function getContactAction(id) {\n    return function () {\n        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {\n            var url, res;\n            return regeneratorRuntime.wrap(function _callee2$(_context2) {\n                while (1) {\n                    switch (_context2.prev = _context2.next) {\n                        case 0:\n                            _context2.prev = 0;\n                            url = '/users/' + id;\n                            _context2.next = 4;\n                            return api.get(url);\n\n                        case 4:\n                            res = _context2.sent;\n\n\n                            dispatch({\n                                type: _Types.GET_CONTACT,\n                                payload: res.data\n                            });\n                            _context2.next = 11;\n                            break;\n\n                        case 8:\n                            _context2.prev = 8;\n                            _context2.t0 = _context2['catch'](0);\n\n                            console.log(\"Fetching a particular contact failed...!!\");\n\n                        case 11:\n                        case 'end':\n                            return _context2.stop();\n                    }\n                }\n            }, _callee2, undefined, [[0, 8]]);\n        }));\n\n        return function (_x4, _x5, _x6) {\n            return _ref2.apply(this, arguments);\n        };\n    }();\n};\n\nvar addContactAction = exports.addContactAction = function addContactAction(contact) {\n    return function () {\n        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch) {\n            var name, phone, email, newContact, url, res;\n            return regeneratorRuntime.wrap(function _callee3$(_context3) {\n                while (1) {\n                    switch (_context3.prev = _context3.next) {\n                        case 0:\n                            _context3.prev = 0;\n                            name = contact.name, phone = contact.phone, email = contact.email;\n                            newContact = {\n                                id: (0, _uuid2.default)(), //Generating random uuid\n                                name: name, //name : name\n                                phone: phone, // phone : phone\n                                email: email // email : email\n                            };\n                            url = 'https://jsonplaceholder.typicode.com/users';\n                            _context3.next = 6;\n                            return _axios2.default.post(url, newContact);\n\n                        case 6:\n                            res = _context3.sent;\n\n\n                            dispatch({\n                                type: _Types.ADD_CONTACT,\n                                payload: res.data\n                            });\n\n                            _context3.next = 13;\n                            break;\n\n                        case 10:\n                            _context3.prev = 10;\n                            _context3.t0 = _context3['catch'](0);\n\n                            console.log(\"Adding a contact failed...!!\");\n\n                        case 13:\n                        case 'end':\n                            return _context3.stop();\n                    }\n                }\n            }, _callee3, undefined, [[0, 10]]);\n        }));\n\n        return function (_x7) {\n            return _ref3.apply(this, arguments);\n        };\n    }();\n};\n\nvar editContactAction = exports.editContactAction = function editContactAction(contact) {\n    return function () {\n        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch) {\n            var id, name, phone, email, editedContact, url, res;\n            return regeneratorRuntime.wrap(function _callee4$(_context4) {\n                while (1) {\n                    switch (_context4.prev = _context4.next) {\n                        case 0:\n                            _context4.prev = 0;\n                            id = contact.id, name = contact.name, phone = contact.phone, email = contact.email;\n                            editedContact = {\n                                id: id, //id : id\n                                name: name, //name : name\n                                phone: phone, // phone : phone\n                                email: email // email : email\n                            };\n                            url = 'https://jsonplaceholder.typicode.com/users/' + id;\n                            _context4.next = 6;\n                            return _axios2.default.put(url, editedContact);\n\n                        case 6:\n                            res = _context4.sent;\n\n\n                            dispatch({\n                                type: _Types.EDIT_CONTACT,\n                                payload: res.data\n                            });\n\n                            _context4.next = 13;\n                            break;\n\n                        case 10:\n                            _context4.prev = 10;\n                            _context4.t0 = _context4['catch'](0);\n\n                            console.log(\"Editing a contact failed...!!\");\n\n                        case 13:\n                        case 'end':\n                            return _context4.stop();\n                    }\n                }\n            }, _callee4, undefined, [[0, 10]]);\n        }));\n\n        return function (_x8) {\n            return _ref4.apply(this, arguments);\n        };\n    }();\n};\n\nvar deleteContactAction = exports.deleteContactAction = function deleteContactAction(id) {\n    return function () {\n        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch) {\n            var url;\n            return regeneratorRuntime.wrap(function _callee5$(_context5) {\n                while (1) {\n                    switch (_context5.prev = _context5.next) {\n                        case 0:\n                            url = 'https://jsonplaceholder.typicode.com/users/' + id;\n                            _context5.prev = 1;\n                            _context5.next = 4;\n                            return _axios2.default.delete(url);\n\n                        case 4:\n                            dispatch({\n                                type: _Types.DELETE_CONTACT,\n                                payload: id\n                            });\n                            _context5.next = 11;\n                            break;\n\n                        case 7:\n                            _context5.prev = 7;\n                            _context5.t0 = _context5['catch'](1);\n\n                            //Since the database is not deleting our added contacts, we are forcefully deleting evenif we get denied response from ajax call\n                            console.log(\"deletion failed...!!However still deleting from store...\");\n                            dispatch({\n                                type: _Types.DELETE_CONTACT,\n                                payload: id\n                            });\n\n                        case 11:\n                        case 'end':\n                            return _context5.stop();\n                    }\n                }\n            }, _callee5, undefined, [[1, 7]]);\n        }));\n\n        return function (_x9) {\n            return _ref5.apply(this, arguments);\n        };\n    }();\n};\n\n//# sourceURL=webpack:///./src/event/action/ContactAction.js?");

/***/ }),

/***/ "./src/event/action/SettingsAction.js":
/*!********************************************!*\
  !*** ./src/event/action/SettingsAction.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.setRunningEnvironmentAction = exports.setAllowRegistrationAction = exports.setDisableBalanceOnEditAction = exports.setDisableBalanceOnAddAction = undefined;\n\nvar _Types = __webpack_require__(/*! ../Types */ \"./src/event/Types.js\");\n\nvar _Function_Common = __webpack_require__(/*! ../../components/template/Function_Common */ \"./src/components/template/Function_Common.js\");\n\nvar setDisableBalanceOnAddAction = exports.setDisableBalanceOnAddAction = function setDisableBalanceOnAddAction() {\n  var settings = (0, _Function_Common.modifyLocalStorageSetting)('disableBalanceOnAdd', null, true);\n  return {\n    type: _Types.DISABLE_BALANCE_ON_ADD,\n    payload: settings.disableBalanceOnAdd\n  };\n};\n\nvar setDisableBalanceOnEditAction = exports.setDisableBalanceOnEditAction = function setDisableBalanceOnEditAction() {\n  var settings = (0, _Function_Common.modifyLocalStorageSetting)('disableBalanceOnEdit', null, true);\n  return {\n    type: _Types.DISABLE_BALANCE_ON_EDIT,\n    payload: settings.disableBalanceOnEdit\n  };\n};\n\nvar setAllowRegistrationAction = exports.setAllowRegistrationAction = function setAllowRegistrationAction() {\n  var settings = (0, _Function_Common.modifyLocalStorageSetting)('allowRegistration', null, true);\n  return {\n    type: _Types.ALLOW_REGISTRATION,\n    //payload: settings.allowRegistration       -- Let's try another way\n    ymsRegistrationValue: settings.allowRegistration\n  };\n};\n\nvar setRunningEnvironmentAction = exports.setRunningEnvironmentAction = function setRunningEnvironmentAction() {\n  var settings = (0, _Function_Common.modifyLocalStorageSetting)('runningOnTestEnvironment', null, true);\n  return {\n    type: _Types.CHANGE_RUNTIME_ENVIRONMENT,\n    payload: settings.runningOnTestEnvironment\n  };\n};\n\n//# sourceURL=webpack:///./src/event/action/SettingsAction.js?");

/***/ }),

/***/ "./src/event/middlewire/log.js":
/*!*************************************!*\
  !*** ./src/event/middlewire/log.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.default = function (_ref) {\n    var dispatch = _ref.dispatch;\n    return function (next) {\n        return function (action) {\n\n            if (!action.payload) {\n                return next(action);\n            } else if (!action.log) {\n                var requestMadeON = new Date();\n                // console.log(`${action.type.toUpperCase()} Action was called on ${requestMadeON}`);\n                var newAction = _extends({}, action, { LOG_TIME: requestMadeON });\n                return next(newAction);\n            }\n        };\n    };\n};\n\n/*\nexport default function({dispatch}) {\n    return function(next) {\n        return function(action) {\n\n        }\n    }\n};\n*/\n\n//# sourceURL=webpack:///./src/event/middlewire/log.js?");

/***/ }),

/***/ "./src/event/middlewire/stateValidator.js":
/*!************************************************!*\
  !*** ./src/event/middlewire/stateValidator.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _tv = __webpack_require__(/*! tv4 */ \"tv4\");\n\nvar _tv2 = _interopRequireDefault(_tv);\n\nvar _allContactSchema = __webpack_require__(/*! ../../components/contactManager/__fixtures__/allContactSchema */ \"./src/components/contactManager/__fixtures__/allContactSchema.js\");\n\nvar _allContactSchema2 = _interopRequireDefault(_allContactSchema);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (_ref) {\n    var dispatch = _ref.dispatch,\n        getState = _ref.getState;\n    return function (next) {\n        return function (action) {\n\n            //we want to run the validation after it goes to reducer. so we just call next(action)\n            next(action);\n\n            if (action.type === 'get_All_Contacts' && !_tv2.default.validate(getState(), _allContactSchema2.default)) {\n                console.warn(\"Invalid state schema detected\");\n            }\n        };\n    };\n};\n\n//# sourceURL=webpack:///./src/event/middlewire/stateValidator.js?");

/***/ }),

/***/ "./src/event/reducer/AuthReducer.js":
/*!******************************************!*\
  !*** ./src/event/reducer/AuthReducer.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n    var action = arguments[1];\n\n\n    switch (action.type) {\n\n        case 'auth_user':\n            return _extends({}, state, { authenticationToken: action.payload, isAuthenticated: action.isAuthenticated, errorMessage: null });\n\n        case 'auth_error':\n            return _extends({}, state, { errorMessage: action.payload });\n\n        default:\n            return state;\n    }\n};\n\nvar _Types = __webpack_require__(/*! ../../event/Types */ \"./src/event/Types.js\");\n\nvar initialState = {\n    authenticationToken: null,\n    isAuthenticated: false,\n    errorMessage: null\n};\n\n//# sourceURL=webpack:///./src/event/reducer/AuthReducer.js?");

/***/ }),

/***/ "./src/event/reducer/ContactReducer.js":
/*!*********************************************!*\
  !*** ./src/event/reducer/ContactReducer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n    var action = arguments[1];\n\n\n    switch (action.type) {\n        case _Types.GET_CONTACTS:\n            return _extends({}, state, {\n                contacts: _lodash2.default.mapKeys(action.payload, 'id'), //contacts: action.payload, \n                dynamicId: action.dynamicId,\n                updatedAt: action.LOG_TIME // This value is comming from our own middleare log.js\n            });\n\n        case _Types.GET_CONTACT:\n            return _extends({}, state, {\n                currentContact: action.payload\n            });\n\n        case _Types.ADD_CONTACT:\n            return _extends({}, state, {\n                contacts: _extends({}, state.contacts, _defineProperty({}, action.payload.id, action.payload)) //contacts: [action.payload, ...state.contacts] \n            });\n\n        case _Types.DELETE_CONTACT:\n            return _extends({}, state, {\n                contacts: _lodash2.default.omit(state.contacts, action.payload) // contacts: state.contacts.filter(contact => contact.id !== action.payload)  \n            });\n\n        case _Types.EDIT_CONTACT:\n            return _extends({}, state, {\n                // contacts: state.contacts.map(contact => contact.id == action.payload.id ? (contact = action.payload) : contact) \n                contacts: _extends({}, state.contacts, _defineProperty({}, action.payload.id, action.payload))\n            });\n\n        default:\n            return state;\n    }\n};\n\nvar _Types = __webpack_require__(/*! ../../event/Types */ \"./src/event/Types.js\");\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar initialState = {\n    contacts: {}, // contacts: [], \n    currentContact: {},\n    dynamicId: {}\n};\n\n//# sourceURL=webpack:///./src/event/reducer/ContactReducer.js?");

/***/ }),

/***/ "./src/event/reducer/SettingsReducer.js":
/*!**********************************************!*\
  !*** ./src/event/reducer/SettingsReducer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments[1];\n\n\n  switch (action.type) {\n\n    case _Types.DISABLE_BALANCE_ON_ADD:\n      return _extends({}, state, {\n        disableBalanceOnAdd: action.payload\n      });\n\n    case _Types.DISABLE_BALANCE_ON_EDIT:\n      return _extends({}, state, {\n        disableBalanceOnEdit: action.payload\n      });\n\n    case _Types.ALLOW_REGISTRATION:\n      return _extends({}, state, {\n        allowRegistration: action.ymsRegistrationValue\n      });\n\n    case _Types.CHANGE_RUNTIME_ENVIRONMENT:\n      return _extends({}, state, {\n        runningOnTestEnvironment: action.payload\n      });\n\n    default:\n      return state;\n\n  }\n};\n\nvar _Types = __webpack_require__(/*! ../Types */ \"./src/event/Types.js\");\n\nvar initialState = {};\n\n//# sourceURL=webpack:///./src/event/reducer/SettingsReducer.js?");

/***/ }),

/***/ "./src/event/reducer/index.js":
/*!************************************!*\
  !*** ./src/event/reducer/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _ContactReducer = __webpack_require__(/*! ./ContactReducer */ \"./src/event/reducer/ContactReducer.js\");\n\nvar _ContactReducer2 = _interopRequireDefault(_ContactReducer);\n\nvar _SettingsReducer = __webpack_require__(/*! ./SettingsReducer */ \"./src/event/reducer/SettingsReducer.js\");\n\nvar _SettingsReducer2 = _interopRequireDefault(_SettingsReducer);\n\nvar _AuthReducer = __webpack_require__(/*! ./AuthReducer */ \"./src/event/reducer/AuthReducer.js\");\n\nvar _AuthReducer2 = _interopRequireDefault(_AuthReducer);\n\nvar _reduxForm = __webpack_require__(/*! redux-form */ \"redux-form\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n    twm_contact: _ContactReducer2.default,\n    twm_setting: _SettingsReducer2.default,\n    twm_auth: _AuthReducer2.default,\n    form: _reduxForm.reducer\n});\n\n//# sourceURL=webpack:///./src/event/reducer/index.js?");

/***/ }),

/***/ "./src/event/types.js":
/*!****************************!*\
  !*** ./src/event/types.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n//contact Reducer\nvar GET_CONTACTS = exports.GET_CONTACTS = 'get_All_Contacts';\nvar ADD_CONTACT = exports.ADD_CONTACT = 'add_Contacts';\nvar EDIT_CONTACT = exports.EDIT_CONTACT = 'edit_Contacts';\nvar DELETE_CONTACT = exports.DELETE_CONTACT = 'delete_Contacts';\nvar GET_CONTACT = exports.GET_CONTACT = 'get_Single_Contact';\n\n//Setting Reducer\nvar DISABLE_BALANCE_ON_ADD = exports.DISABLE_BALANCE_ON_ADD = 'DISABLE_BALANCE_ON_ADD';\nvar DISABLE_BALANCE_ON_EDIT = exports.DISABLE_BALANCE_ON_EDIT = 'DISABLE_BALANCE_ON_EDIT';\nvar ALLOW_REGISTRATION = exports.ALLOW_REGISTRATION = 'ALLOW_REGISTRATION';\nvar CHANGE_RUNTIME_ENVIRONMENT = exports.CHANGE_RUNTIME_ENVIRONMENT = 'CHANGE_RUNTIME_ENVIRONMENT';\n\n//Auth Reducer (Using Latest Approach)\n\n//# sourceURL=webpack:///./src/event/types.js?");

/***/ }),

/***/ "./src/init/Entry_Server.js":
/*!**********************************!*\
  !*** ./src/init/Entry_Server.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _Index = __webpack_require__(/*! ./Index */ \"./src/init/Index.js\");\n\nvar _Index2 = _interopRequireDefault(_Index);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Store_Server = __webpack_require__(/*! ../event/Store_Server */ \"./src/event/Store_Server.js\");\n\nvar _Store_Server2 = _interopRequireDefault(_Store_Server);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _Route = __webpack_require__(/*! ./Route */ \"./src/init/Route.js\");\n\nvar _Route2 = _interopRequireDefault(_Route);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar server = (0, _express2.default)();\n\nserver.use('/api', (0, _expressHttpProxy2.default)('https://jsonplaceholder.typicode.com'));\n/* treate a 'public' directory to be available into a outside world which can be consumed by browser\n   Because of this, the bundle.js will be consumed from 'public' folder not from 'build' folder\n*/\nserver.use(_express2.default.static('public'));\n\nserver.get('*', function (req, res) {\n\n    var store = (0, _Store_Server2.default)(req);\n\n    var promishes = (0, _reactRouterConfig.matchRoutes)(_Route2.default, req.path).map(function (_ref) {\n        var route = _ref.route;\n        return route.loadData ? route.loadData(store) : null;\n    }).map(function (promise) {\n        if (promise) {\n            return new Promise(function (resolve, reject) {\n                promise.then(resolve).catch(resolve);\n            });\n        }\n    });\n\n    Promise.all(promishes).then(function () {\n\n        var context = {};\n        var htmlContent = (0, _server.renderToString)(_react2.default.createElement(\n            _reactRedux.Provider,\n            { store: store },\n            _react2.default.createElement(\n                _reactRouterDom.StaticRouter,\n                { location: req.path, context: context },\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    (0, _reactRouterConfig.renderRoutes)(_Route2.default)\n                )\n            )\n        ));\n        var content = (0, _Index2.default)(htmlContent, store, req);\n\n        if (context.url) {\n            return res.redirect(301, context.url);\n        }\n\n        if (context.notFound) {\n            res.status(404);\n        }\n\n        if (res.statusCode !== 200) {\n            res.set('Surrogate-Control', 'no-cache, no-store, must-revalidate');\n        }\n\n        res.send(content);\n    });\n});\n\nserver.listen('' + \"3000\", function () {\n    console.log('Server [' + \"Local\" + '] is Listening on port ' + \"3000\");\n});\n\n//# sourceURL=webpack:///./src/init/Entry_Server.js?");

/***/ }),

/***/ "./src/init/Index.js":
/*!***************************!*\
  !*** ./src/init/Index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _bundleAssets = __webpack_require__(/*! bundleAssets */ \"./build/bundle-assets.json\");\n\nvar _bundleAssets2 = _interopRequireDefault(_bundleAssets);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//Just to maintain, this is just a function not a functional component\nexports.default = function (htmlConent, store, req) {\n\n  var helmet = _reactHelmet.Helmet.renderStatic();\n\n  return '<!DOCTYPE html>\\n        <html>\\n        <head>\\n            ' + helmet.title.toString() + '\\n            ' + helmet.meta.toString() + '\\n\\n            <!-- Custom Css -->\\n            ' + cssOutput() + '\\n            \\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0\">\\n            <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.1.1/css/all.css\" integrity=\"sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ\" crossorigin=\"anonymous\">\\n            \\n            <!-- BootStrap -->\\n            <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\\n            <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\\n            <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script>\\n            <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>\\n            \\n\\n        </head>\\n        <body>\\n            <div id=\"root\" class=\"container\">' + htmlConent + '</div>\\n            <script>\\n                    window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\\n            </script>\\n\\n            ' + scriptOutput() + '\\n\\n            <!-- Analytics tag. Type below url to DISABLE this tag:  http://localhost:3000?disableDtm=true -->\\n            ' + addAnalyticsLink(req) + '   \\n\\n            <!-- NewRelic -->\\n            ' + newRelicjs() + '\\n\\n            ' + forter('HomePage') + '\\n        </body>\\n        </html>';\n};\n\nvar scriptOutput = function scriptOutput() {\n  var mappedNames = {\n    'vendors~bundle.js': 1,\n    'bundle.js': 2\n  };\n  var allowedNames = ['bundle.js', 'vendors~bundle.js'];\n  return Object.entries(_bundleAssets2.default).filter(function (obj) {\n    return allowedNames.includes(obj[0]);\n  }).sort(function (first, second) {\n    if (mappedNames[first[0]] < mappedNames[second[0]]) return -1;else if (mappedNames[first[0]] === mappedNames[second[0]]) return 0;\n    return 1;\n  }).reduce(function (accumulatorString, currentItem) {\n    accumulatorString += '<script src=\\'/' + currentItem[1] + '\\'></script>';\n    return accumulatorString;\n  }, '');\n};\n\nvar cssOutput = function cssOutput() {\n  try {\n    var cssFileName = Object.entries(_bundleAssets2.default).filter(function (obj) {\n      return obj[0] === 'bundle.css';\n    })[0][1];\n    return '<link rel=\"stylesheet\" type=\"text/css\" href=\\'/' + cssFileName + '\\' />';\n  } catch (err) {\n    return '';\n  }\n};\n\nvar addAnalyticsLink = function addAnalyticsLink(req) {\n  if (req.query.disableDtm !== 'true') {\n    return '<script src=\"//assets.adobedtm.com/yoogesh/satelliteLib-123-staging\\'.js\"></script>';\n  }\n  return '';\n};\n\nvar newRelicjs = function newRelicjs() {\n  return '<script type=\"text/javascript\">\\n                !function(a,b){\"object\"==typeof module&&\"object\"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error(\"jQuery requires a window with a document\");\\n                return b(a)}:b(a)}(\"undefined\"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m=\"2.2.4\",\\n                n=function(a,b){return new n.fn.init(a,b)},o=/^[s\\uFEFF\\xA0]+|[s\\uFEFF\\xA0]+$/g,p=/^-ms-/,q=/-([da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,\\n                selector:\"\",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);\\n                return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function()\\n                {return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?\\n                [this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,\\n                j=!1;for(\"boolean\"==typeof g&&(j=g,g=arguments[h]||{},h++),\"object\"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&\\n                (n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:\"jQuery\"+(m+Math.random()).\\n                replace(/D/g,\"\"),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return\"function\"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&\\n                a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if(\"object\"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;\\n                if(a.constructor&&!k.call(a,\"constructor\")&&!k.call(a.constructor.prototype||{},\"isPrototypeOf\"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)     \\n            </script> \\n      ';\n};\n\nvar forter = function forter(currentPate) {\n  return '\\n    <script>\\n          //This script needs to be executed everywhere in the site\\n          //This is a forter script, which collects mouse movements, mouse clicks, page views etc.\\n            (function() {\\n                console.log(\\'Page you are currently viewing is ' + currentPate + '\\');\\n            })();\\n    </script>\\n    ';\n};\n\n//# sourceURL=webpack:///./src/init/Index.js?");

/***/ }),

/***/ "./src/init/Route.js":
/*!***************************!*\
  !*** ./src/init/Route.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _SigninPage = __webpack_require__(/*! ../pages/SigninPage */ \"./src/pages/SigninPage.js\");\n\nvar _SigninPage2 = _interopRequireDefault(_SigninPage);\n\nvar _EditPage = __webpack_require__(/*! ../pages/EditPage */ \"./src/pages/EditPage.js\");\n\nvar _EditPage2 = _interopRequireDefault(_EditPage);\n\nvar _AddPage = __webpack_require__(/*! ../pages/AddPage */ \"./src/pages/AddPage.js\");\n\nvar _AddPage2 = _interopRequireDefault(_AddPage);\n\nvar _AboutPage = __webpack_require__(/*! ../pages/AboutPage */ \"./src/pages/AboutPage.js\");\n\nvar _AboutPage2 = _interopRequireDefault(_AboutPage);\n\nvar _HomePage = __webpack_require__(/*! ../pages/HomePage */ \"./src/pages/HomePage.js\");\n\nvar _HomePage2 = _interopRequireDefault(_HomePage);\n\nvar _SignupPage = __webpack_require__(/*! ../pages/SignupPage */ \"./src/pages/SignupPage.js\");\n\nvar _SignupPage2 = _interopRequireDefault(_SignupPage);\n\nvar _NotFoundPage = __webpack_require__(/*! ../pages/NotFoundPage */ \"./src/pages/NotFoundPage.js\");\n\nvar _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);\n\nvar _MySettingPage = __webpack_require__(/*! ../pages/MySettingPage */ \"./src/pages/MySettingPage.js\");\n\nvar _MySettingPage2 = _interopRequireDefault(_MySettingPage);\n\nvar _Header = __webpack_require__(/*! ../components/template/Header */ \"./src/components/template/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [_extends({}, _Header2.default, {\n\n    routes: [_extends({}, _HomePage2.default, {\n        path: '/',\n        exact: true\n    }), _extends({}, _SigninPage2.default, {\n        path: '/signin'\n    }), _extends({}, _SignupPage2.default, {\n        path: '/signup'\n    }), _extends({}, _AddPage2.default, {\n        path: '/contact/add'\n    }), _extends({}, _EditPage2.default, {\n        path: '/contact/edit/:id'\n    }), _extends({}, _AboutPage2.default, {\n        path: '/about/:id'\n    }), _extends({}, _MySettingPage2.default, {\n        path: '/contact/setting'\n    }), _extends({}, _NotFoundPage2.default)]\n})];\n\n//# sourceURL=webpack:///./src/init/Route.js?");

/***/ }),

/***/ "./src/pages/AboutPage.js":
/*!********************************!*\
  !*** ./src/pages/AboutPage.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Template_Common = __webpack_require__(/*! ../components/template/Template_Common */ \"./src/components/template/Template_Common.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar AboutPage = function AboutPage(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_Template_Common.MetaTag, { title: 'ABOUT', content: 'about' }),\n    _react2.default.createElement(\n      'h1',\n      { className: 'display-4' },\n      props.match.params.id\n    ),\n    _react2.default.createElement(\n      'p',\n      { className: 'lead' },\n      'Simple App to manage Contacts'\n    ),\n    _react2.default.createElement(\n      'p',\n      { className: 'text-secondary' },\n      'Version 1.0.0'\n    )\n  );\n};\n\nexports.default = {\n  component: AboutPage\n};\n\n//# sourceURL=webpack:///./src/pages/AboutPage.js?");

/***/ }),

/***/ "./src/pages/AddPage.js":
/*!******************************!*\
  !*** ./src/pages/AddPage.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Template_Common = __webpack_require__(/*! ../components/template/Template_Common */ \"./src/components/template/Template_Common.js\");\n\nvar _AddContact_ref = __webpack_require__(/*! ../components/contactManager/insert/AddContact_ref */ \"./src/components/contactManager/insert/AddContact_ref.js\");\n\nvar _AddContact_ref2 = _interopRequireDefault(_AddContact_ref);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar AddPage = function AddPage() {\n  return _react2.default.createElement(\n    _react2.default.Fragment,\n    null,\n    _react2.default.createElement(_Template_Common.MetaTag, { title: 'ADD', content: 'add' }),\n    _react2.default.createElement(_AddContact_ref2.default, null)\n  );\n};\n//import AddContact from '../components/contactManager/insert/AddContact';\nexports.default = {\n  component: AddPage\n};\n\n//# sourceURL=webpack:///./src/pages/AddPage.js?");

/***/ }),

/***/ "./src/pages/EditPage.js":
/*!*******************************!*\
  !*** ./src/pages/EditPage.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Template_Common = __webpack_require__(/*! ../components/template/Template_Common */ \"./src/components/template/Template_Common.js\");\n\nvar _EditContact = __webpack_require__(/*! ../components/contactManager/update/EditContact */ \"./src/components/contactManager/update/EditContact.js\");\n\nvar _EditContact2 = _interopRequireDefault(_EditContact);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar EditPage = function EditPage() {\n  return _react2.default.createElement(\n    _react2.default.Fragment,\n    null,\n    _react2.default.createElement(_Template_Common.MetaTag, { title: 'EDIT', content: 'edit' }),\n    _react2.default.createElement(_EditContact2.default, null)\n  );\n};\n\nexports.default = {\n  loadData: function loadData(store) {\n    return (0, _EditContact.loadData)(store);\n  },\n  component: EditPage\n};\n\n//# sourceURL=webpack:///./src/pages/EditPage.js?");

/***/ }),

/***/ "./src/pages/HomePage.js":
/*!*******************************!*\
  !*** ./src/pages/HomePage.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _TableData = __webpack_require__(/*! ../components/contactManager/read_delete/TableData */ \"./src/components/contactManager/read_delete/TableData.js\");\n\nvar _TableData2 = _interopRequireDefault(_TableData);\n\nvar _Template_Common = __webpack_require__(/*! ../components/template/Template_Common */ \"./src/components/template/Template_Common.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar HomePage = function HomePage() {\n  var totaluser = '10';\n  return _react2.default.createElement(\n    _react2.default.Fragment,\n    null,\n    _react2.default.createElement(_Template_Common.MetaTag, { title: totaluser + ' USERS', content: 'TWM USERS' }),\n    _react2.default.createElement(_Template_Common.TableHeader, null),\n    _react2.default.createElement(_TableData2.default, null)\n  );\n};\n\nvar loadData = function loadData(store) {\n  return (0, _TableData.loadData)(store);\n};\n\nexports.default = {\n  loadData: loadData, //loadData:loadData \n  component: HomePage\n};\n\n//# sourceURL=webpack:///./src/pages/HomePage.js?");

/***/ }),

/***/ "./src/pages/MySettingPage.js":
/*!************************************!*\
  !*** ./src/pages/MySettingPage.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Template_Common = __webpack_require__(/*! ../components/template/Template_Common */ \"./src/components/template/Template_Common.js\");\n\nvar _PersonalSetting = __webpack_require__(/*! ../components/contactManager/setting/PersonalSetting */ \"./src/components/contactManager/setting/PersonalSetting.js\");\n\nvar _PersonalSetting2 = _interopRequireDefault(_PersonalSetting);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar MySettingPage = function MySettingPage() {\n  return _react2.default.createElement(\n    _react2.default.Fragment,\n    null,\n    _react2.default.createElement(_Template_Common.MetaTag, { title: 'SETTING', content: 'Setting' }),\n    _react2.default.createElement(_PersonalSetting2.default, null)\n  );\n};\n\nexports.default = {\n  component: MySettingPage\n};\n\n//# sourceURL=webpack:///./src/pages/MySettingPage.js?");

/***/ }),

/***/ "./src/pages/NotFoundPage.js":
/*!***********************************!*\
  !*** ./src/pages/NotFoundPage.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Template_Common = __webpack_require__(/*! ../components/template/Template_Common */ \"./src/components/template/Template_Common.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar NotFoundPage = function NotFoundPage(_ref) {\n  var _ref$staticContext = _ref.staticContext,\n      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;\n\n\n  staticContext.notFound = true;\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_Template_Common.MetaTag, { title: 'NOT FOUND', content: '404' }),\n    _react2.default.createElement(\n      'h1',\n      { className: 'display-4' },\n      _react2.default.createElement(\n        'span',\n        { className: 'text-danger' },\n        '404 Page Not Found'\n      )\n    ),\n    _react2.default.createElement(\n      'p',\n      { className: 'lead' },\n      'Sorry the page you requsted does not exist'\n    )\n  );\n};\n\nexports.default = {\n  component: NotFoundPage\n};\n\n//# sourceURL=webpack:///./src/pages/NotFoundPage.js?");

/***/ }),

/***/ "./src/pages/SigninPage.js":
/*!*********************************!*\
  !*** ./src/pages/SigninPage.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Signin = __webpack_require__(/*! ../components/authManager/Signin */ \"./src/components/authManager/Signin.js\");\n\nvar _Signin2 = _interopRequireDefault(_Signin);\n\nvar _Template_Common = __webpack_require__(/*! ../components/template/Template_Common */ \"./src/components/template/Template_Common.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SigninPage = function SigninPage() {\n\n  return _react2.default.createElement(\n    _react2.default.Fragment,\n    null,\n    _react2.default.createElement(_Template_Common.MetaTag, { title: 'SIGN-IN', content: 'sign-in' }),\n    _react2.default.createElement(_Signin2.default, null)\n  );\n};\n\nexports.default = {\n  component: SigninPage\n};\n\n//# sourceURL=webpack:///./src/pages/SigninPage.js?");

/***/ }),

/***/ "./src/pages/SignupPage.js":
/*!*********************************!*\
  !*** ./src/pages/SignupPage.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Signup = __webpack_require__(/*! ../components/authManager/Signup */ \"./src/components/authManager/Signup.js\");\n\nvar _Signup2 = _interopRequireDefault(_Signup);\n\nvar _Template_Common = __webpack_require__(/*! ../components/template/Template_Common */ \"./src/components/template/Template_Common.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SignupPage = function SignupPage() {\n\n  return _react2.default.createElement(\n    _react2.default.Fragment,\n    null,\n    _react2.default.createElement(_Template_Common.MetaTag, { title: 'SIGNUP', content: 'signup' }),\n    _react2.default.createElement(_Signup2.default, null)\n  );\n};\n\nexports.default = {\n  component: SignupPage\n};\n\n//# sourceURL=webpack:///./src/pages/SignupPage.js?");

/***/ }),

/***/ "./src/sharedComponents/InputField/index.js":
/*!**************************************************!*\
  !*** ./src/sharedComponents/InputField/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactJss = __webpack_require__(/*! react-jss */ \"react-jss\");\n\nvar _reactJss2 = _interopRequireDefault(_reactJss);\n\nvar _styles = __webpack_require__(/*! ./styles.js */ \"./src/sharedComponents/InputField/styles.js\");\n\nvar _styles2 = _interopRequireDefault(_styles);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar InputField = function (_Component) {\n  _inherits(InputField, _Component);\n\n  function InputField(props) {\n    _classCallCheck(this, InputField);\n\n    return _possibleConstructorReturn(this, (InputField.__proto__ || Object.getPrototypeOf(InputField)).call(this, props));\n  }\n\n  _createClass(InputField, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          input = _props.input,\n          type = _props.type,\n          name = _props.name,\n          placeholder = _props.placeholder,\n          normalize = _props.normalize,\n          error = _props.meta.error;\n      var _props2 = this.props,\n          hasError = _props2.hasError,\n          isCheckBoxField = _props2.isCheckBoxField,\n          classNameProvidedByUser = _props2.className,\n          classes = _props2.classes,\n          invalidFeedBackClassName = _props2.invalidFeedBackClassName;\n\n      var classNameAddedBySystem = classes.checkBoxContainer;\n\n      return _react2.default.createElement(\n        _react2.default.Fragment,\n        null,\n        _react2.default.createElement('input', _extends({ type: type,\n          name: name,\n          placeholder: placeholder,\n          className: classNameProvidedByUser,\n          normalize: normalize,\n          autoComplete: placeholder\n        }, input)),\n        ' ',\n        isCheckBoxField && _react2.default.createElement(\n          'span',\n          { className: classNameAddedBySystem },\n          'RememberMe'\n        ),\n        hasError && _react2.default.createElement(\n          'div',\n          { className: invalidFeedBackClassName },\n          error\n        )\n      );\n    }\n  }]);\n\n  return InputField;\n}(_react.Component);\n\nexports.default = (0, _reactJss2.default)(_styles2.default)(InputField);\n\n//# sourceURL=webpack:///./src/sharedComponents/InputField/index.js?");

/***/ }),

/***/ "./src/sharedComponents/InputField/styles.js":
/*!***************************************************!*\
  !*** ./src/sharedComponents/InputField/styles.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n\n  /*\n     This is a react kind of css. so the key may not match with actual CSS. \n     For example: \n                  backgroundColor: 'white', \n                    instead of \n                      background-color: white;\n  */\n  checkBoxContainer: {\n    color: 'green'\n  }\n\n};\n\n//# sourceURL=webpack:///./src/sharedComponents/InputField/styles.js?");

/***/ }),

/***/ "./src/sharedComponents/index.js":
/*!***************************************!*\
  !*** ./src/sharedComponents/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _InputField = __webpack_require__(/*! ./InputField */ \"./src/sharedComponents/InputField/index.js\");\n\nvar _InputField2 = _interopRequireDefault(_InputField);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = {\n  InputField: _InputField2.default\n};\n\n//# sourceURL=webpack:///./src/sharedComponents/index.js?");

/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi babel-polyfill ./src/init/Entry_Server.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! ./src/init/Entry_Server.js */\"./src/init/Entry_Server.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./src/init/Entry_Server.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-jss":
/*!****************************!*\
  !*** external "react-jss" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss\");\n\n//# sourceURL=webpack:///external_%22react-jss%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-form\");\n\n//# sourceURL=webpack:///external_%22redux-form%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ }),

/***/ "tv4":
/*!**********************!*\
  !*** external "tv4" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"tv4\");\n\n//# sourceURL=webpack:///external_%22tv4%22?");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");\n\n//# sourceURL=webpack:///external_%22uuid%22?");

/***/ })

/******/ });