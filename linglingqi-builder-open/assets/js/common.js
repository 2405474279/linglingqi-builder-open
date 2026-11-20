(function(_reduxjs_toolkit, _wordpress_i18n) {

//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __name = (target, value) => __defProp(target, "name", {
		value,
		configurable: true
	});
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __esmMin = (fn, res, err) => () => {
		if (err) throw err[0];
		try {
			return fn && (res = fn(fn = 0)), res;
		} catch (e) {
			throw err = [e], e;
		}
	};
	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
	var __exportAll = (all, no_symbols) => {
		let target = {};
		for (var name in all) {
			__defProp(target, name, {
				get: all[name],
				enumerable: true
			});
		}
		if (!no_symbols) {
			__defProp(target, Symbol.toStringTag, { value: "Module" });
		}
		return target;
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
				key = keys[i];
				if (!__hasOwnProp.call(to, key) && key !== except) {
					__defProp(to, key, {
						get: ((k) => from[k]).bind(null, key),
						enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
					});
				}
			}
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));

//#endregion

//#region node_modules/@babel/runtime/helpers/esm/classCallCheck.js
	function _classCallCheck(a, n) {
		if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/typeof.js
	function _typeof(o) {
		"@babel/helpers - typeof";
		return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
			return typeof o;
		} : function(o) {
			return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
		}, _typeof(o);
	}
	var init_typeof = __esmMin((() => {}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/toPrimitive.js
	function toPrimitive(t, r) {
		if ("object" != _typeof(t) || !t) return t;
		var e = t[Symbol.toPrimitive];
		if (void 0 !== e) {
			var i = e.call(t, r || "default");
			if ("object" != _typeof(i)) return i;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return ("string" === r ? String : Number)(t);
	}
	var init_toPrimitive = __esmMin((() => {
		init_typeof();
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
	function toPropertyKey(t) {
		var i = toPrimitive(t, "string");
		return "symbol" == _typeof(i) ? i : i + "";
	}
	var init_toPropertyKey = __esmMin((() => {
		init_typeof();
		init_toPrimitive();
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/createClass.js
	init_toPropertyKey();
	function _defineProperties(e, r) {
		for (var t = 0; t < r.length; t++) {
			var o = r[t];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
		}
	}
	function _createClass(e, r, t) {
		return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
	function _assertThisInitialized(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e;
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
	init_typeof();
	function _possibleConstructorReturn(t, e) {
		if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return _assertThisInitialized(t);
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
	function _getPrototypeOf(t) {
		return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t);
		}, _getPrototypeOf(t);
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/superPropBase.js
	function _superPropBase(t, o) {
		for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
		return t;
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/get.js
	function _get() {
		return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
			var p = _superPropBase(e, t);
			if (p) {
				var n = Object.getOwnPropertyDescriptor(p, t);
				return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
			}
		}, _get.apply(null, arguments);
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
	function _setPrototypeOf(t, e) {
		return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
			return t.__proto__ = e, t;
		}, _setPrototypeOf(t, e);
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/inherits.js
	function _inherits(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
		t.prototype = Object.create(e && e.prototype, { constructor: {
			value: t,
			writable: !0,
			configurable: !0
		} }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);
	}

//#endregion
//#region core/common/assets/js/utils/helpers.js
	var Helpers = /*#__PURE__*/ function() {
		function Helpers() {
			_classCallCheck(this, Helpers);
		}
		return _createClass(Helpers, [
			{
				key: "consoleWarn",
				value: function consoleWarn() {
					var _elementorDevTools;
					(_elementorDevTools = elementorDevTools).consoleWarn.apply(_elementorDevTools, arguments);
					elementorDevTools.deprecation.deprecated("elementorCommon.helpers.consoleWarn()", "3.7.0", "elementorDevTools.consoleWarn()");
				}
			},
			{
				key: "consoleError",
				value: function consoleError(message) {
					console.error(message);
					elementorDevTools.deprecation.deprecated("elementorCommon.helpers.consoleError()", "3.7.0", "console.error()");
				}
			},
			{
				key: "cloneObject",
				value: function cloneObject(object) {
					return JSON.parse(JSON.stringify(object));
				}
			},
			{
				key: "upperCaseWords",
				value: function upperCaseWords(string) {
					return (string + "").replace(/^(.)|\s+(.)/g, function($1) {
						return $1.toUpperCase();
					});
				}
			},
			{
				key: "getUniqueId",
				value: function getUniqueId() {
					return Math.random().toString(16).substr(2, 7);
				}
			}
		]);
	}();

//#endregion
//#region core/common/assets/js/utils/storage.js
	function _callSuper$34(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$35() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$34, "_callSuper");
	function _isNativeReflectConstruct$35() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$35 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$35, "_isNativeReflectConstruct");
	var _default$11 = /*#__PURE__*/ function(_elementorModules$Mod) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$34(this, _default, arguments);
		}
		_inherits(_default, _elementorModules$Mod);
		return _createClass(_default, [
			{
				key: "get",
				value: function get(key, options) {
					options = options || {};
					var storage;
					try {
						storage = options.session ? sessionStorage : localStorage;
					} catch (e) {
						return key ? void 0 : {};
					}
					var elementorStorage = storage.getItem("elementor");
					if (elementorStorage) elementorStorage = JSON.parse(elementorStorage);
					else elementorStorage = {};
					if (!elementorStorage.__expiration) elementorStorage.__expiration = {};
					var expiration = elementorStorage.__expiration;
					var expirationToCheck = [];
					if (key) {
						if (expiration[key]) expirationToCheck = [key];
					} else expirationToCheck = Object.keys(expiration);
					var entryExpired = false;
					expirationToCheck.forEach(function(expirationKey) {
						if (new Date(expiration[expirationKey]) < /* @__PURE__ */ new Date()) {
							delete elementorStorage[expirationKey];
							delete expiration[expirationKey];
							entryExpired = true;
						}
					});
					if (entryExpired) this.save(elementorStorage, options.session);
					if (key) return elementorStorage[key];
					return elementorStorage;
				}
			},
			{
				key: "set",
				value: function set(key, value, options) {
					options = options || {};
					var elementorStorage = this.get(null, options);
					elementorStorage[key] = value;
					if (options.lifetimeInSeconds) {
						var date = /* @__PURE__ */ new Date();
						date.setTime(date.getTime() + options.lifetimeInSeconds * 1e3);
						elementorStorage.__expiration[key] = date.getTime();
					}
					this.save(elementorStorage, options.session);
				}
			},
			{
				key: "save",
				value: function save(object, session) {
					var storage;
					try {
						storage = session ? sessionStorage : localStorage;
					} catch (e) {
						return;
					}
					storage.setItem("elementor", JSON.stringify(object));
				}
			}
		]);
	}(elementorModules.Module);

//#endregion
//#region core/common/assets/js/utils/debug.js
	var require_debug = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var Debug = function Debug() {
			var self = this;
			var errorStack = [];
			var settings = {};
			var elements = {};
			var initSettings = function initSettings() {
				settings = {
					debounceDelay: 500,
					urlsToWatch: ["elementor/assets"]
				};
			};
			var initElements = function initElements() {
				elements.$window = jQuery(window);
			};
			var onError = function onError(event) {
				var _event$originalEvent;
				var error = (_event$originalEvent = event.originalEvent) === null || _event$originalEvent === void 0 ? void 0 : _event$originalEvent.error;
				if (!error) return;
				var isInWatchList = false;
				var urlsToWatch = settings.urlsToWatch;
				jQuery.each(urlsToWatch, function() {
					if (-1 !== error.stack.indexOf(this)) {
						isInWatchList = true;
						return false;
					}
				});
				if (!isInWatchList) return;
				self.addError({
					type: error.name,
					message: error.message,
					url: event.originalEvent.filename,
					line: event.originalEvent.lineno,
					column: event.originalEvent.colno
				});
			};
			var bindEvents = function bindEvents() {
				elements.$window.on("error", onError);
			};
			var init = function init() {
				initSettings();
				initElements();
				bindEvents();
				self.sendErrors = _.debounce(self.sendErrors, settings.debounceDelay);
			};
			this.addURLToWatch = function(url) {
				settings.urlsToWatch.push(url);
			};
			this.addCustomError = function(error, category, tag) {
				var errorInfo = {
					type: error.name,
					message: error.message,
					url: error.fileName || error.sourceURL,
					line: error.lineNumber || error.line,
					column: error.columnNumber || error.column,
					customFields: {
						category: category || "general",
						tag
					}
				};
				if (!errorInfo.url) {
					var stackInfo = error.stack.match(/\n {4}at (.*?(?=:(\d+):(\d+)))/);
					if (stackInfo) {
						errorInfo.url = stackInfo[1];
						errorInfo.line = stackInfo[2];
						errorInfo.column = stackInfo[3];
					}
				}
				this.addError(errorInfo);
			};
			this.addError = function(errorParams) {
				var defaultParams = {
					type: "Error",
					timestamp: Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3),
					message: null,
					url: null,
					line: null,
					column: null,
					customFields: {}
				};
				errorStack.push(jQuery.extend(true, defaultParams, errorParams));
				self.sendErrors();
			};
			this.sendErrors = function() {
				elements.$window.off("error", onError);
				jQuery.ajax({
					url: elementorCommon.config.ajax.url,
					method: "POST",
					data: {
						action: "elementor_js_log",
						_nonce: elementorCommon.ajax.getSettings("nonce"),
						data: errorStack
					},
					success: function success() {
						errorStack = [];
						elements.$window.on("error", onError);
					}
				});
			};
			init();
		};
		module.exports = Debug;
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
var import_debug = /* @__PURE__ */ __toESM(require_debug());
	function _arrayWithHoles(r) {
		if (Array.isArray(r)) return r;
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
	function _iterableToArrayLimit(r, l) {
		var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
		if (null != t) {
			var e;
			var n;
			var i;
			var u;
			var a = [];
			var f = !0;
			var o = !1;
			try {
				if (i = (t = t.call(r)).next, 0 === l) {
					if (Object(t) !== t) return;
					f = !1;
				} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
			} catch (r) {
				o = !0, n = r;
			} finally {
				try {
					if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
				} finally {
					if (o) throw n;
				}
			}
			return a;
		}
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
	function _arrayLikeToArray$1(r, a) {
		(null == a || a > r.length) && (a = r.length);
		for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
		return n;
	}
	__name(_arrayLikeToArray$1, "_arrayLikeToArray");

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
	function _unsupportedIterableToArray$1(r, a) {
		if (r) {
			if ("string" == typeof r) return _arrayLikeToArray$1(r, a);
			var t = {}.toString.call(r).slice(8, -1);
			return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
		}
	}
	__name(_unsupportedIterableToArray$1, "_unsupportedIterableToArray");

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
	function _nonIterableRest() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/slicedToArray.js
	function _slicedToArray(r, e) {
		return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray$1(r, e) || _nonIterableRest();
	}

//#endregion
//#region core/common/modules/ajax/assets/js/ajax.js
	function _callSuper$33(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$34() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$33, "_callSuper");
	function _isNativeReflectConstruct$34() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$34 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$34, "_isNativeReflectConstruct");
	var _default$10 = /*#__PURE__*/ function(_elementorModules$Mod) {
		function _default() {
			var _this;
			_classCallCheck(this, _default);
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			_this = _callSuper$33(this, _default, [].concat(args));
			_this.requests = {};
			_this.cache = {};
			_this.initRequestConstants();
			_this.debounceSendBatch = _.debounce(_this.sendBatch.bind(_this), 500);
			return _this;
		}
		_inherits(_default, _elementorModules$Mod);
		return _createClass(_default, [
			{
				key: "getDefaultSettings",
				value: function getDefaultSettings() {
					return {
						ajaxParams: {
							type: "POST",
							url: elementorCommon.config.ajax.url,
							data: {},
							dataType: "json"
						},
						actionPrefix: "elementor_"
					};
				}
			},
			{
				key: "initRequestConstants",
				value: function initRequestConstants() {
					this.requestConstants = { _nonce: this.getSettings("nonce") };
				}
			},
			{
				key: "addRequestConstant",
				value: function addRequestConstant(key, value) {
					this.requestConstants[key] = value;
				}
			},
			{
				key: "getCacheKey",
				value: function getCacheKey(request) {
					return JSON.stringify({
						unique_id: request.unique_id,
						data: request.data
					});
				}
			},
			{
				key: "loadObjects",
				value: function loadObjects(options) {
					var _this2 = this;
					var dataCollection = {};
					var deferredArray = [];
					if (options.before) options.before();
					options.ids.forEach(function(objectId) {
						deferredArray.push(_this2.load({
							action: options.action,
							unique_id: options.data.unique_id + objectId,
							data: jQuery.extend({ id: objectId }, options.data)
						}).done(function(data) {
							return dataCollection = jQuery.extend(dataCollection, data);
						}));
					});
					jQuery.when.apply(jQuery, deferredArray).done(function() {
						return options.success(dataCollection);
					});
				}
			},
			{
				key: "load",
				value: function load(request, immediately) {
					var _this3 = this;
					if (!request.unique_id) request.unique_id = request.action;
					if (request.before) request.before();
					var deferred;
					var cacheKey = this.getCacheKey(request);
					if (_.has(this.cache, cacheKey)) deferred = jQuery.Deferred().done(request.success).resolve(this.cache[cacheKey]);
					else {
						var _request$error;
						deferred = this.addRequest(request.action, {
							data: request.data,
							unique_id: request.unique_id,
							success: function success(data) {
								return _this3.cache[cacheKey] = data;
							},
							error: (_request$error = request.error) !== null && _request$error !== void 0 ? _request$error : function() {}
						}, immediately).done(request.success);
					}
					return deferred;
				}
			},
			{
				key: "cancelRequest",
				value: function cancelRequest(requestId) {
					var request = this.requests[requestId];
					if (!request) return null;
					if (request.options.deferred.jqXhr) return request.options.deferred.jqXhr.abort("Request canceled");
					if (request.options.deferred) return request.options.deferred.reject("Request canceled");
				}
			},
			{
				key: "addRequest",
				value: function addRequest(action, options, immediately) {
					options = options || {};
					if (!options.unique_id) options.unique_id = action;
					options.deferred = jQuery.Deferred().done(options.success).fail(options.error).always(options.complete);
					var request = {
						action,
						options
					};
					if (immediately) {
						var requests = {};
						requests[options.unique_id] = request;
						options.deferred.jqXhr = this.sendBatch(requests);
					} else {
						var pendingRequest = this.requests[options.unique_id];
						if (pendingRequest) {
							if (this.getCacheKey(pendingRequest.options) === this.getCacheKey(options)) {
								pendingRequest.options.deferred.done(function(data) {
									return options.deferred.resolve(data);
								}).fail(function(data) {
									return options.deferred.reject(data);
								});
								return options.deferred;
							}
							pendingRequest.options.deferred.reject("Request replaced");
						}
						this.requests[options.unique_id] = request;
						this.debounceSendBatch();
					}
					return options.deferred;
				}
			},
			{
				key: "sendBatch",
				value: function sendBatch(requests) {
					var actions = {};
					if (!requests) {
						requests = this.requests;
						this.requests = {};
					}
					Object.entries(requests).forEach(function(_ref) {
						var _ref2 = _slicedToArray(_ref, 2);
						var id = _ref2[0];
						var request = _ref2[1];
						return actions[id] = {
							action: request.action,
							data: request.options.data
						};
					});
					return this.send("ajax", {
						data: { actions: JSON.stringify(actions) },
						success: function success(data) {
							Object.entries(data.responses).forEach(function(_ref3) {
								var _ref4 = _slicedToArray(_ref3, 2);
								var id = _ref4[0];
								var response = _ref4[1];
								var options = requests[id].options;
								if (options) {
									if (response.success) options.deferred.resolve(response.data);
									else if (!response.success) options.deferred.reject(response.data);
								}
							});
						},
						error: function error(data) {
							return Object.values(requests).forEach(function(args) {
								if (args.options) args.options.deferred.reject(data);
							});
						}
					});
				}
			},
			{
				key: "prepareSend",
				value: function prepareSend(action, options) {
					var _this4 = this;
					var settings = this.getSettings();
					var ajaxParams = elementorCommon.helpers.cloneObject(settings.ajaxParams);
					options = options || {};
					action = settings.actionPrefix + action;
					jQuery.extend(ajaxParams, options);
					var requestConstants = elementorCommon.helpers.cloneObject(this.requestConstants);
					requestConstants.action = action;
					var isFormData = ajaxParams.data instanceof FormData;
					Object.entries(requestConstants).forEach(function(_ref5) {
						var _ref6 = _slicedToArray(_ref5, 2);
						var key = _ref6[0];
						var value = _ref6[1];
						if (isFormData) ajaxParams.data.append(key, value);
						else ajaxParams.data[key] = value;
					});
					var successCallback = ajaxParams.success;
					var errorCallback = ajaxParams.error;
					if (successCallback || errorCallback) {
						ajaxParams.success = function(response) {
							if (response.success && successCallback) successCallback(response.data);
							if (!response.success && errorCallback) errorCallback(response.data);
						};
						if (errorCallback) ajaxParams.error = function(data) {
							return errorCallback(data);
						};
						else ajaxParams.error = function(xmlHttpRequest) {
							if (xmlHttpRequest.readyState || "abort" !== xmlHttpRequest.statusText) _this4.trigger("request:unhandledError", xmlHttpRequest);
						};
					}
					return ajaxParams;
				}
			},
			{
				key: "send",
				value: function send(action, options) {
					return jQuery.ajax(this.prepareSend(action, options));
				}
			},
			{
				key: "addRequestCache",
				value: function addRequestCache(request, data) {
					var cacheKey = this.getCacheKey(request);
					this.cache[cacheKey] = data;
				}
			},
			{
				key: "invalidateCache",
				value: function invalidateCache(request) {
					var cacheKey = this.getCacheKey(request);
					delete this.cache[cacheKey];
				}
			}
		]);
	}(elementorModules.Module);

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/defineProperty.js
	function _defineProperty(e, r, t) {
		return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e;
	}
	var init_defineProperty = __esmMin((() => {
		init_toPropertyKey();
	}));

//#endregion
//#region assets/dev/js/modules/imports/instance-type.js
init_defineProperty();
	function _superPropGet$7(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	__name(_superPropGet$7, "_superPropGet");
	var InstanceType = /*#__PURE__*/ function() {
		function InstanceType() {
			var _this = this;
			_classCallCheck(this, InstanceType);
			var target = this instanceof InstanceType ? this.constructor : void 0;
			var prototypes = [];
			while (target.__proto__ && target.__proto__.name) {
				prototypes.push(target.__proto__);
				target = target.__proto__;
			}
			prototypes.reverse().forEach(function(proto) {
				return _this instanceof proto;
			});
		}
		return _createClass(InstanceType, null, [{
			key: Symbol.hasInstance,
			value: function value(target) {
				/**
				* This is function extending being called each time JS uses instanceOf, since babel use it each time it create new class
				* its give's opportunity to mange capabilities of instanceOf operator.
				* saving current class each time will give option later to handle instanceOf manually.
				*/
				var result = _superPropGet$7(InstanceType, Symbol.hasInstance, this, 2)([target]);
				if (target && !target.constructor.getInstanceType) return result;
				if (target) {
					if (!target.instanceTypes) target.instanceTypes = [];
					if (!result) {
						if (this.getInstanceType() === target.constructor.getInstanceType()) result = true;
					}
					if (result) {
						var name = this.getInstanceType === InstanceType.getInstanceType ? "BaseInstanceType" : this.getInstanceType();
						if (-1 === target.instanceTypes.indexOf(name)) target.instanceTypes.push(name);
					}
				}
				if (!result && target) result = target.instanceTypes && Array.isArray(target.instanceTypes) && -1 !== target.instanceTypes.indexOf(this.getInstanceType());
				return result;
			}
		}, {
			key: "getInstanceType",
			value: function getInstanceType() {
				elementorModules.ForceMethodImplementation();
			}
		}]);
	}();

//#endregion
//#region assets/dev/js/editor/utils/is-instanceof.js
	function _createForOfIteratorHelper(r, e) {
		var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
		if (!t) {
			if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
				t && (r = t);
				var _n = 0;
				var F = function F() {};
				return {
					s: F,
					n: function n() {
						return _n >= r.length ? { done: !0 } : {
							done: !1,
							value: r[_n++]
						};
					},
					e: function e(r) {
						throw r;
					},
					f: F
				};
			}
			throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
		}
		var o;
		var a = !0;
		var u = !1;
		return {
			s: function s() {
				t = t.call(r);
			},
			n: function n() {
				var r = t.next();
				return a = r.done, r;
			},
			e: function e(r) {
				u = !0, o = r;
			},
			f: function f() {
				try {
					a || null == t.return || t.return();
				} finally {
					if (u) throw o;
				}
			}
		};
	}
	function _unsupportedIterableToArray(r, a) {
		if (r) {
			if ("string" == typeof r) return _arrayLikeToArray(r, a);
			var t = {}.toString.call(r).slice(8, -1);
			return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
		}
	}
	function _arrayLikeToArray(r, a) {
		(null == a || a > r.length) && (a = r.length);
		for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
		return n;
	}
	/**
	* Some FileAPI objects such as FileList, DataTransferItem and DataTransferItemList has inconsistency with the retrieved
	* object (from events, etc.) and the actual JavaScript object so a regular instanceof doesn't work. This function can
	* check whether it's instanceof by using the objects constructor and prototype names.
	*
	* @param  object
	* @param  constructors
	* @return {boolean}
	*/
	var is_instanceof_default = /* @__PURE__ */ __name((function(object, constructors) {
		constructors = Array.isArray(constructors) ? constructors : [constructors];
		var _iterator = _createForOfIteratorHelper(constructors);
		var _step;
		try {
			for (_iterator.s(); !(_step = _iterator.n()).done;) {
				var constructor = _step.value;
				if (object.constructor.name === constructor.prototype[Symbol.toStringTag]) return true;
			}
		} catch (err) {
			_iterator.e(err);
		} finally {
			_iterator.f();
		}
		return false;
	}), "default");

//#endregion
//#region assets/dev/js/modules/imports/args-object.js
	init_typeof();
	function _callSuper$32(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$33() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$32, "_callSuper");
	function _isNativeReflectConstruct$33() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$33 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$33, "_isNativeReflectConstruct");
	var ArgsObject = /*#__PURE__*/ function(_InstanceType) {
		/**
		* Function constructor().
		*
		* Create ArgsObject.
		*
		* @param {{}} args
		*/
		function ArgsObject(args) {
			var _this;
			_classCallCheck(this, ArgsObject);
			_this = _callSuper$32(this, ArgsObject);
			_this.args = args;
			return _this;
		}
		/**
		* Function requireArgument().
		*
		* Validate property in args.
		*
		* @param {string} property
		* @param {{}}     args
		*
		* @throws {Error}
		*/
		_inherits(ArgsObject, _InstanceType);
		return _createClass(ArgsObject, [
			{
				key: "requireArgument",
				value: function requireArgument(property) {
					var args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.args;
					if (!Object.prototype.hasOwnProperty.call(args, property)) throw Error("".concat(property, " is required."));
				}
			},
			{
				key: "requireArgumentType",
				value: function requireArgumentType(property, type) {
					var args = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.args;
					this.requireArgument(property, args);
					if (_typeof(args[property]) !== type) throw Error("".concat(property, " invalid type: ").concat(type, "."));
				}
			},
			{
				key: "requireArgumentInstance",
				value: function requireArgumentInstance(property, instance) {
					var args = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.args;
					this.requireArgument(property, args);
					if (!(args[property] instanceof instance) && !is_instanceof_default(args[property], instance)) throw Error("".concat(property, " invalid instance."));
				}
			},
			{
				key: "requireArgumentConstructor",
				value: function requireArgumentConstructor(property, type) {
					var args = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.args;
					this.requireArgument(property, args);
					if (args[property].constructor.toString() !== type.prototype.constructor.toString()) throw Error("".concat(property, " invalid constructor type."));
				}
			}
		], [{
			key: "getInstanceType",
			value: function getInstanceType() {
				return "ArgsObject";
			}
		}]);
	}(InstanceType);

//#endregion
//#region modules/web-cli/assets/js/utils/console.js
	var Console = /*#__PURE__*/ function() {
		function Console() {
			_classCallCheck(this, Console);
		}
		return _createClass(Console, null, [{
			key: "error",
			value: function error(message) {
				if ($e.devTools) $e.devTools.log.error(message);
				if (!(message instanceof $e.modules.HookBreak)) console.error(message);
			}
		}, {
			key: "warn",
			value: function warn() {
				var _console;
				var style = "font-size: 12px; background-image: url(\"".concat(elementorWebCliConfig.urls.assets, "images/logo-icon.png\"); background-repeat: no-repeat; background-size: contain;");
				for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
				args.unshift("%c  %c", style, "");
				(_console = console).warn.apply(_console, args);
			}
		}]);
	}();

//#endregion
//#region modules/web-cli/assets/js/utils/deprecation.js
/**
	* @typedef {Object} Version
	* @property {number} major1 The first number
	* @property {number} major2 The second number
	* @property {number} minor  The third number
	* @property {string} build  The fourth number
	*/
	var softDeprecated = function softDeprecated(name, version, replacement) {
		if (elementorWebCliConfig.isDebug) deprecatedMessage("soft", name, version, replacement);
	};
	var hardDeprecated = function hardDeprecated(name, version, replacement) {
		deprecatedMessage("hard", name, version, replacement);
	};
	var deprecatedMessage = function deprecatedMessage(type, name, version, replacement) {
		var message = "`".concat(name, "` is ").concat(type, " deprecated since ").concat(version);
		if (replacement) message += " - Use `".concat(replacement, "` instead");
		Console.warn(message);
	};
	var Deprecation = /*#__PURE__*/ function() {
		function Deprecation() {
			_classCallCheck(this, Deprecation);
		}
		return _createClass(Deprecation, null, [
			{
				key: "deprecated",
				value: function deprecated(name, version, replacement) {
					if (this.isHardDeprecated(version)) hardDeprecated(name, version, replacement);
					else softDeprecated(name, version, replacement);
				}
			},
			{
				key: "parseVersion",
				value: function parseVersion(version) {
					var versionParts = version.split(".");
					if (versionParts.length < 3 || versionParts.length > 4) throw new RangeError("Invalid Semantic Version string provided");
					var _versionParts = _slicedToArray(versionParts, 4);
					var major1 = _versionParts[0];
					var major2 = _versionParts[1];
					var minor = _versionParts[2];
					var _versionParts$ = _versionParts[3];
					return {
						major1: parseInt(major1),
						major2: parseInt(major2),
						minor: parseInt(minor),
						build: _versionParts$ === void 0 ? "" : _versionParts$
					};
				}
			},
			{
				key: "getTotalMajor",
				value: function getTotalMajor(versionObj) {
					var total = parseInt("".concat(versionObj.major1).concat(versionObj.major2, "0"));
					total = Number((total / 10).toFixed(0));
					if (versionObj.major2 > 9) total = versionObj.major2 - 9;
					return total;
				}
			},
			{
				key: "compareVersion",
				value: function compareVersion(version1, version2) {
					var _this = this;
					return [this.parseVersion(version1), this.parseVersion(version2)].map(function(versionObj) {
						return _this.getTotalMajor(versionObj);
					}).reduce(function(acc, major) {
						return acc - major;
					});
				}
			},
			{
				key: "isSoftDeprecated",
				value: function isSoftDeprecated(version) {
					return this.compareVersion(version, elementorWebCliConfig.version) <= 4;
				}
			},
			{
				key: "isHardDeprecated",
				value: function isHardDeprecated(version) {
					var total = this.compareVersion(version, elementorWebCliConfig.version);
					return total < 0 || total >= 8;
				}
			}
		]);
	}();

//#endregion
//#region modules/web-cli/assets/js/modules/command-infra.js
	function _callSuper$31(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$32() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$31, "_callSuper");
	function _isNativeReflectConstruct$32() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$32 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$32, "_isNativeReflectConstruct");
	/**
	* @typedef {import('../modules/component-base')} ComponentBase
	*/
	var CommandInfra = /*#__PURE__*/ function(_ArgsObject) {
		/**
		* Function constructor().
		*
		* Create Commands Base.
		*
		* @param {{}} args
		*/
		function CommandInfra() {
			var _this;
			var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			_classCallCheck(this, CommandInfra);
			_this = _callSuper$31(this, CommandInfra, [args]);
			if (!_this.constructor.registerConfig) throw RangeError("Doing it wrong: Each command type should have `registerConfig`.");
			_this.command = _this.constructor.getCommand();
			_this.component = _this.constructor.getComponent();
			_this.initialize(args);
			args = _this.args;
			_this.validateArgs(args);
			return _this;
		}
		/**
		* Function initialize().
		*
		* Initialize command, called after construction.
		*
		* @param {{}} args
		*/
		_inherits(CommandInfra, _ArgsObject);
		return _createClass(CommandInfra, [
			{
				key: "currentCommand",
				get: function get() {
					Deprecation.deprecated("this.currentCommand", "3.7.0", "this.command");
					return this.command;
				}
			},
			{
				key: "initialize",
				value: function initialize() {
					arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
				}
			},
			{
				key: "validateArgs",
				value: function validateArgs() {
					arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
				}
			},
			{
				key: "apply",
				value: function apply() {
					arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
					elementorModules.ForceMethodImplementation();
				}
			},
			{
				key: "run",
				value: function run() {
					return this.apply(this.args);
				}
			},
			{
				key: "onBeforeRun",
				value: function onBeforeRun() {
					arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
				}
			},
			{
				key: "onAfterRun",
				value: function onAfterRun() {
					arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
					arguments.length > 1 && arguments[1];
				}
			},
			{
				key: "onBeforeApply",
				value: function onBeforeApply() {
					arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
				}
			},
			{
				key: "onAfterApply",
				value: function onAfterApply() {
					arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
					arguments.length > 1 && arguments[1];
				}
			},
			{
				key: "onCatchApply",
				value: function onCatchApply(e) {}
			}
		], [
			{
				key: "getInstanceType",
				value: function getInstanceType() {
					return "CommandInfra";
				}
			},
			{
				key: "getInfo",
				value: function getInfo() {
					return {};
				}
			},
			{
				key: "getCommand",
				value: function getCommand() {
					return this.registerConfig.command;
				}
			},
			{
				key: "getComponent",
				value: function getComponent() {
					return this.registerConfig.component;
				}
			},
			{
				key: "setRegisterConfig",
				value: function setRegisterConfig(config) {
					this.registerConfig = Object.freeze(config);
				}
			}
		]);
	}(ArgsObject);
	/**
	* @type {Object}
	*/
	_defineProperty(CommandInfra, "registerConfig", null);

//#endregion
//#region modules/web-cli/assets/js/modules/command-base.js
	function _callSuper$30(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$31() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$30, "_callSuper");
	function _isNativeReflectConstruct$31() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$31 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$31, "_isNativeReflectConstruct");
	/**
	* @name $e.modules.CommandBase
	*/
	var CommandBase = /*#__PURE__*/ function(_CommandInfra) {
		function CommandBase() {
			_classCallCheck(this, CommandBase);
			return _callSuper$30(this, CommandBase, arguments);
		}
		_inherits(CommandBase, _CommandInfra);
		return _createClass(CommandBase, [
			{
				key: "onBeforeRun",
				value: function onBeforeRun() {
					var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					$e.hooks.runUIBefore(this.command, args);
				}
			},
			{
				key: "onAfterRun",
				value: function onAfterRun() {
					var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					var result = arguments.length > 1 ? arguments[1] : void 0;
					$e.hooks.runUIAfter(this.command, args, result);
				}
			},
			{
				key: "onBeforeApply",
				value: function onBeforeApply() {
					var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					$e.hooks.runDataDependency(this.command, args);
				}
			},
			{
				key: "onAfterApply",
				value: function onAfterApply() {
					var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					var result = arguments.length > 1 ? arguments[1] : void 0;
					return $e.hooks.runDataAfter(this.command, args, result);
				}
			},
			{
				key: "onCatchApply",
				value: function onCatchApply(e) {
					this.runCatchHooks(e);
				}
			},
			{
				key: "runCatchHooks",
				value: function runCatchHooks(e) {
					$e.hooks.runDataCatch(this.command, this.args, e);
					$e.hooks.runUICatch(this.command, this.args, e);
				}
			},
			{
				key: "requireContainer",
				value: function requireContainer() {
					var _this = this;
					var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.args;
					Deprecation.deprecated("requireContainer()", "3.7.0", "Extend `$e.modules.editor.CommandContainerBase` or `$e.modules.editor.CommandContainerInternalBase`");
					if (!args.container && !args.containers) throw Error("container or containers are required.");
					if (args.container && args.containers) throw Error("container and containers cannot go together please select one of them.");
					(args.containers || [args.container]).forEach(function(container) {
						_this.requireArgumentInstance("container", elementorModules.editor.Container, { container });
					});
				}
			}
		], [{
			key: "getInstanceType",
			value: function getInstanceType() {
				return "CommandBase";
			}
		}]);
	}(CommandInfra);

//#endregion
//#region modules/web-cli/assets/js/modules/command-callback-base.js
	function _callSuper$29(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$30() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$29, "_callSuper");
	function _isNativeReflectConstruct$30() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$30 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$30, "_isNativeReflectConstruct");
	/**
	* To support pure callbacks in the API(commands.js), to ensure they have registered with the proper context.
	*/
	var CommandCallbackBase = /*#__PURE__*/ function(_CommandBase) {
		function CommandCallbackBase() {
			_classCallCheck(this, CommandCallbackBase);
			return _callSuper$29(this, CommandCallbackBase, arguments);
		}
		_inherits(CommandCallbackBase, _CommandBase);
		return _createClass(CommandCallbackBase, [{
			key: "apply",
			value: function apply() {
				var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				return this.constructor.getCallback()(args);
			}
		}], [{
			key: "getInstanceType",
			value: function getInstanceType() {
				return "CommandCallbackBase";
			}
		}, {
			key: "getCallback",
			value: function getCallback() {
				return this.registerConfig.callback;
			}
		}]);
	}(CommandBase);

//#endregion
//#region assets/dev/js/modules/imports/module.js
	var require_module = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		init_typeof();
		var Module = function Module() {
			var $ = jQuery;
			var instanceParams = arguments;
			var self = this;
			var events = {};
			var settings;
			var ensureClosureMethods = function ensureClosureMethods() {
				$.each(self, function(methodName) {
					var oldMethod = self[methodName];
					if ("function" !== typeof oldMethod) return;
					self[methodName] = function() {
						return oldMethod.apply(self, arguments);
					};
				});
			};
			var initSettings = function initSettings() {
				settings = self.getDefaultSettings();
				var instanceSettings = instanceParams[0];
				if (instanceSettings) $.extend(true, settings, instanceSettings);
			};
			var init = function init() {
				self.__construct.apply(self, instanceParams);
				ensureClosureMethods();
				initSettings();
				self.trigger("init");
			};
			this.getItems = function(items, itemKey) {
				if (itemKey) {
					var keyStack = itemKey.split(".");
					var currentKey = keyStack.splice(0, 1);
					if (!keyStack.length) return items[currentKey];
					if (!items[currentKey]) return;
					return this.getItems(items[currentKey], keyStack.join("."));
				}
				return items;
			};
			this.getSettings = function(setting) {
				return this.getItems(settings, setting);
			};
			this.setSettings = function(settingKey, value, settingsContainer) {
				if (!settingsContainer) settingsContainer = settings;
				if ("object" === _typeof(settingKey)) {
					$.extend(settingsContainer, settingKey);
					return self;
				}
				var keyStack = settingKey.split(".");
				var currentKey = keyStack.splice(0, 1);
				if (!keyStack.length) {
					settingsContainer[currentKey] = value;
					return self;
				}
				if (!settingsContainer[currentKey]) settingsContainer[currentKey] = {};
				return self.setSettings(keyStack.join("."), value, settingsContainer[currentKey]);
			};
			this.getErrorMessage = function(type, functionName) {
				var message;
				switch (type) {
					case "forceMethodImplementation":
						message = "The method '".concat(functionName, "' must to be implemented in the inheritor child.");
						break;
					default: message = "An error occurs";
				}
				return message;
			};
			this.forceMethodImplementation = function(functionName) {
				throw new Error(this.getErrorMessage("forceMethodImplementation", functionName));
			};
			this.on = function(eventName, callback) {
				if ("object" === _typeof(eventName)) {
					$.each(eventName, function(singleEventName) {
						self.on(singleEventName, this);
					});
					return self;
				}
				eventName.split(" ").forEach(function(singleEventName) {
					if (!events[singleEventName]) events[singleEventName] = [];
					events[singleEventName].push(callback);
				});
				return self;
			};
			this.off = function(eventName, callback) {
				if (!events[eventName]) return self;
				if (!callback) {
					delete events[eventName];
					return self;
				}
				var callbackIndex = events[eventName].indexOf(callback);
				if (-1 !== callbackIndex) {
					delete events[eventName][callbackIndex];
					events[eventName] = events[eventName].filter(function(val) {
						return val;
					});
				}
				return self;
			};
			this.trigger = function(eventName) {
				var methodName = "on" + eventName[0].toUpperCase() + eventName.slice(1);
				var params = Array.prototype.slice.call(arguments, 1);
				if (self[methodName]) self[methodName].apply(self, params);
				var callbacks = events[eventName];
				if (!callbacks) return self;
				$.each(callbacks, function(index, callback) {
					callback.apply(self, params);
				});
				return self;
			};
			init();
		};
		Module.prototype.__construct = function() {};
		Module.prototype.getDefaultSettings = function() {
			return {};
		};
		Module.prototype.getConstructorID = function() {
			return this.constructor.name;
		};
		Module.extend = function(properties) {
			var $ = jQuery;
			var parent = this;
			var child = function child() {
				return parent.apply(this, arguments);
			};
			$.extend(child, parent);
			child.prototype = Object.create($.extend({}, parent.prototype, properties));
			child.prototype.constructor = child;
			child.__super__ = parent.prototype;
			return child;
		};
		module.exports = Module;
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
var import_module = /* @__PURE__ */ __toESM(require_module());
	function _isNativeFunction(t) {
		try {
			return -1 !== Function.toString.call(t).indexOf("[native code]");
		} catch (n) {
			return "function" == typeof t;
		}
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
	function _isNativeReflectConstruct$29() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$29 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$29, "_isNativeReflectConstruct");

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/construct.js
	function _construct(t, e, r) {
		if (_isNativeReflectConstruct$29()) return Reflect.construct.apply(null, arguments);
		var o = [null];
		o.push.apply(o, e);
		var p = new (t.bind.apply(t, o))();
		return r && _setPrototypeOf(p, r.prototype), p;
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
	function _wrapNativeSuper(t) {
		var r = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
		return _wrapNativeSuper = function _wrapNativeSuper(t) {
			if (null === t || !_isNativeFunction(t)) return t;
			if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
			if (void 0 !== r) {
				if (r.has(t)) return r.get(t);
				r.set(t, Wrapper);
			}
			function Wrapper() {
				return _construct(t, arguments, _getPrototypeOf(this).constructor);
			}
			return Wrapper.prototype = Object.create(t.prototype, { constructor: {
				value: Wrapper,
				enumerable: !1,
				writable: !0,
				configurable: !0
			} }), _setPrototypeOf(Wrapper, t);
		}, _wrapNativeSuper(t);
	}

//#endregion
//#region modules/web-cli/assets/js/utils/force-method-implementation.js
	function _callSuper$28(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$28() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$28, "_callSuper");
	function _isNativeReflectConstruct$28() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$28 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$28, "_isNativeReflectConstruct");
	var ForceMethodImplementation = /*#__PURE__*/ function(_Error) {
		function ForceMethodImplementation() {
			var _this;
			var info = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			_classCallCheck(this, ForceMethodImplementation);
			_this = _callSuper$28(this, ForceMethodImplementation, ["".concat(info.isStatic ? "static " : "").concat(info.fullName, "() should be implemented, please provide '").concat(info.functionName || info.fullName, "' functionality.")]);
			Error.captureStackTrace(_this, ForceMethodImplementation);
			return _this;
		}
		_inherits(ForceMethodImplementation, _Error);
		return _createClass(ForceMethodImplementation);
	}(/*#__PURE__*/ _wrapNativeSuper(Error));
	var force_method_implementation_default = /* @__PURE__ */ __name((function() {
		var caller = Error().stack.split("\n")[2].trim();
		var callerName = caller.startsWith("at new") ? "constructor" : caller.split(" ")[1];
		var info = {};
		info.functionName = callerName;
		info.fullName = callerName;
		if (info.functionName.includes(".")) {
			var parts = info.functionName.split(".");
			info.className = parts[0];
			info.functionName = parts[1];
		} else info.isStatic = true;
		throw new ForceMethodImplementation(info);
	}), "default");

//#endregion
//#region modules/web-cli/assets/js/modules/component-base.js
	init_defineProperty();
	function ownKeys$3(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	__name(ownKeys$3, "ownKeys");
	function _objectSpread$3(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys$3(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	__name(_objectSpread$3, "_objectSpread");
	function _callSuper$27(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$27() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$27, "_callSuper");
	function _isNativeReflectConstruct$27() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$27 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$27, "_isNativeReflectConstruct");
	/**
	* @typedef {import('./command-infra')} CommandInfra
	* @typedef {import('./hook-base')} HookBase
	* @typedef {import('../core/states/ui-state-base')} UiStateBase
	*/
	var ComponentBase = /*#__PURE__*/ function(_Module) {
		function ComponentBase() {
			_classCallCheck(this, ComponentBase);
			return _callSuper$27(this, ComponentBase, arguments);
		}
		_inherits(ComponentBase, _Module);
		return _createClass(ComponentBase, [
			{
				key: "__construct",
				value: function __construct() {
					var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					if (args.manager) this.manager = args.manager;
					this.commands = this.defaultCommands();
					this.commandsInternal = this.defaultCommandsInternal();
					this.hooks = this.defaultHooks();
					this.routes = this.defaultRoutes();
					this.tabs = this.defaultTabs();
					this.shortcuts = this.defaultShortcuts();
					this.utils = this.defaultUtils();
					this.data = this.defaultData();
					this.uiStates = this.defaultUiStates();
					this.states = this.defaultStates();
					this.defaultRoute = "";
					this.currentTab = "";
				}
			},
			{
				key: "registerAPI",
				value: function registerAPI() {
					var _this = this;
					Object.entries(this.getTabs()).forEach(function(tab) {
						return _this.registerTabRoute(tab[0]);
					});
					Object.entries(this.getRoutes()).forEach(function(_ref) {
						var _ref2 = _slicedToArray(_ref, 2);
						var route = _ref2[0];
						var callback = _ref2[1];
						return _this.registerRoute(route, callback);
					});
					Object.entries(this.getCommands()).forEach(function(_ref3) {
						var _ref4 = _slicedToArray(_ref3, 2);
						var command = _ref4[0];
						var callback = _ref4[1];
						return _this.registerCommand(command, callback);
					});
					Object.entries(this.getCommandsInternal()).forEach(function(_ref5) {
						var _ref6 = _slicedToArray(_ref5, 2);
						var command = _ref6[0];
						var callback = _ref6[1];
						return _this.registerCommandInternal(command, callback);
					});
					Object.values(this.getHooks()).forEach(function(instance) {
						return _this.registerHook(instance);
					});
					Object.entries(this.getData()).forEach(function(_ref7) {
						var _ref8 = _slicedToArray(_ref7, 2);
						var command = _ref8[0];
						var callback = _ref8[1];
						return _this.registerData(command, callback);
					});
					Object.values(this.getUiStates()).forEach(function(instance) {
						return _this.registerUiState(instance);
					});
					Object.entries(this.getStates()).forEach(function(_ref9) {
						var _ref0 = _slicedToArray(_ref9, 2);
						var id = _ref0[0];
						var state = _ref0[1];
						return _this.registerState(id, state);
					});
				}
			},
			{
				key: "getNamespace",
				value: function getNamespace() {
					force_method_implementation_default();
				}
			},
			{
				key: "getRootContainer",
				value: function getRootContainer() {
					Deprecation.deprecated("getRootContainer()", "3.7.0", "getServiceName()");
					return this.getServiceName();
				}
			},
			{
				key: "getServiceName",
				value: function getServiceName() {
					return this.getNamespace().split("/")[0];
				}
			},
			{
				key: "store",
				get: function get() {
					return $e.store.get(this.getNamespace());
				}
			},
			{
				key: "defaultTabs",
				value: function defaultTabs() {
					return {};
				}
			},
			{
				key: "defaultRoutes",
				value: function defaultRoutes() {
					return {};
				}
			},
			{
				key: "defaultCommands",
				value: function defaultCommands() {
					return {};
				}
			},
			{
				key: "defaultCommandsInternal",
				value: function defaultCommandsInternal() {
					return {};
				}
			},
			{
				key: "defaultHooks",
				value: function defaultHooks() {
					return {};
				}
			},
			{
				key: "defaultUiStates",
				value: function defaultUiStates() {
					return {};
				}
			},
			{
				key: "defaultStates",
				value: function defaultStates() {
					return {};
				}
			},
			{
				key: "defaultShortcuts",
				value: function defaultShortcuts() {
					return {};
				}
			},
			{
				key: "defaultUtils",
				value: function defaultUtils() {
					return {};
				}
			},
			{
				key: "defaultData",
				value: function defaultData() {
					return {};
				}
			},
			{
				key: "getCommands",
				value: function getCommands() {
					return this.commands;
				}
			},
			{
				key: "getCommandsInternal",
				value: function getCommandsInternal() {
					return this.commandsInternal;
				}
			},
			{
				key: "getHooks",
				value: function getHooks() {
					return this.hooks;
				}
			},
			{
				key: "getUiStates",
				value: function getUiStates() {
					return this.uiStates;
				}
			},
			{
				key: "getStates",
				value: function getStates() {
					return this.states;
				}
			},
			{
				key: "getRoutes",
				value: function getRoutes() {
					return this.routes;
				}
			},
			{
				key: "getTabs",
				value: function getTabs() {
					return this.tabs;
				}
			},
			{
				key: "getShortcuts",
				value: function getShortcuts() {
					return this.shortcuts;
				}
			},
			{
				key: "getData",
				value: function getData() {
					return this.data;
				}
			},
			{
				key: "registerCommand",
				value: function registerCommand(command, context) {
					var commandsType = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "default";
					var commandsManager;
					switch (commandsType) {
						case "default":
							commandsManager = $e.commands;
							break;
						case "internal":
							commandsManager = $e.commandsInternal;
							break;
						case "data":
							commandsManager = $e.data;
							break;
						default: throw new Error("Invalid commands type: '".concat(command, "'"));
					}
					var fullCommand = this.getNamespace() + "/" + command;
					var instanceType = context.getInstanceType ? context.getInstanceType() : false;
					var registerConfig = {
						command: fullCommand,
						component: this
					};
					if (!instanceType) {
						if ($e.devTools) $e.devTools.log.warn("Attach command-callback-base, on command: '".concat(fullCommand, "', context is unknown type."));
						registerConfig.callback = context;
						context = /*#__PURE__*/ function(_CommandCallbackBase) {
							function context() {
								_classCallCheck(this, context);
								return _callSuper$27(this, context, arguments);
							}
							_inherits(context, _CommandCallbackBase);
							return _createClass(context);
						}(CommandCallbackBase);
					}
					context.setRegisterConfig(registerConfig);
					commandsManager.register(this, command, context);
				}
			},
			{
				key: "registerHook",
				value: function registerHook(instance) {
					return instance.register();
				}
			},
			{
				key: "registerCommandInternal",
				value: function registerCommandInternal(command, context) {
					this.registerCommand(command, context, "internal");
				}
			},
			{
				key: "registerUiState",
				value: function registerUiState(instance) {
					$e.uiStates.register(instance);
				}
			},
			{
				key: "registerState",
				value: function registerState(id, stateConfig) {
					id = this.getNamespace() + (id ? "/".concat(id) : "");
					var slice = (0, _reduxjs_toolkit.createSlice)(_objectSpread$3(_objectSpread$3({}, stateConfig), {}, { name: id }));
					$e.store.register(id, slice);
				}
			},
			{
				key: "registerRoute",
				value: function registerRoute(route, callback) {
					$e.routes.register(this, route, callback);
				}
			},
			{
				key: "registerData",
				value: function registerData(command, context) {
					this.registerCommand(command, context, "data");
				}
			},
			{
				key: "unregisterRoute",
				value: function unregisterRoute(route) {
					$e.routes.unregister(this, route);
				}
			},
			{
				key: "registerTabRoute",
				value: function registerTabRoute(tab) {
					var _this2 = this;
					this.registerRoute(tab, function(args) {
						return _this2.activateTab(tab, args);
					});
				}
			},
			{
				key: "dependency",
				value: function dependency() {
					return true;
				}
			},
			{
				key: "open",
				value: function open() {
					return true;
				}
			},
			{
				key: "close",
				value: function close() {
					if (!this.isOpen) return false;
					this.isOpen = false;
					this.inactivate();
					$e.routes.clearCurrent(this.getNamespace());
					$e.routes.clearHistory(this.getServiceName());
					return true;
				}
			},
			{
				key: "activate",
				value: function activate() {
					$e.components.activate(this.getNamespace());
				}
			},
			{
				key: "inactivate",
				value: function inactivate() {
					$e.components.inactivate(this.getNamespace());
				}
			},
			{
				key: "isActive",
				value: function isActive() {
					return $e.components.isActive(this.getNamespace());
				}
			},
			{
				key: "onRoute",
				value: function onRoute(route) {
					this.toggleRouteClass(route, true);
					this.toggleHistoryClass();
					this.activate();
					this.trigger("route/open", route);
				}
			},
			{
				key: "onCloseRoute",
				value: function onCloseRoute(route) {
					this.toggleRouteClass(route, false);
					this.inactivate();
					this.trigger("route/close", route);
				}
			},
			{
				key: "setDefaultRoute",
				value: function setDefaultRoute(route) {
					this.defaultRoute = this.getNamespace() + "/" + route;
				}
			},
			{
				key: "getDefaultRoute",
				value: function getDefaultRoute() {
					return this.defaultRoute;
				}
			},
			{
				key: "removeTab",
				value: function removeTab(tab) {
					delete this.tabs[tab];
					this.unregisterRoute(tab);
				}
			},
			{
				key: "hasTab",
				value: function hasTab(tab) {
					return !!this.tabs[tab];
				}
			},
			{
				key: "addTab",
				value: function addTab(tab, args, position) {
					var _this3 = this;
					this.tabs[tab] = args;
					if ("undefined" !== typeof position) {
						var newTabs = {};
						var ids = Object.keys(this.tabs);
						ids.pop();
						ids.splice(position, 0, tab);
						ids.forEach(function(id) {
							newTabs[id] = _this3.tabs[id];
						});
						this.tabs = newTabs;
					}
					this.registerTabRoute(tab);
				}
			},
			{
				key: "getTabsWrapperSelector",
				value: function getTabsWrapperSelector() {
					return "";
				}
			},
			{
				key: "getTabRoute",
				value: function getTabRoute(tab) {
					return this.getNamespace() + "/" + tab;
				}
			},
			{
				key: "renderTab",
				value: function renderTab(tab) {}
			},
			{
				key: "activateTab",
				value: function activateTab(tab, args) {
					var _this4 = this;
					this.renderTab(tab, args);
					jQuery(this.getTabsWrapperSelector() + " .elementor-component-tab").off("click").on("click", function(event) {
						$e.route(_this4.getTabRoute(event.currentTarget.dataset.tab), args);
					}).removeClass("elementor-active").filter("[data-tab=\"" + tab + "\"]").addClass("elementor-active");
				}
			},
			{
				key: "getActiveTabConfig",
				value: function getActiveTabConfig() {
					return this.tabs[this.currentTab] || {};
				}
			},
			{
				key: "getBodyClass",
				value: function getBodyClass(route) {
					return "e-route-" + route.replace(/\//g, "-");
				}
			},
			{
				key: "normalizeCommandName",
				value: function normalizeCommandName(commandName) {
					return commandName.replace(/[A-Z]/g, function(match, offset) {
						return (offset > 0 ? "-" : "") + match.toLowerCase();
					});
				}
			},
			{
				key: "importCommands",
				value: function importCommands(commandsFromImport) {
					var _this5 = this;
					var commands = {};
					Object.entries(commandsFromImport).forEach(function(_ref1) {
						var _ref10 = _slicedToArray(_ref1, 2);
						var className = _ref10[0];
						var Class = _ref10[1];
						var command = _this5.normalizeCommandName(className);
						commands[command] = Class;
					});
					return commands;
				}
			},
			{
				key: "importHooks",
				value: function importHooks(hooksFromImport) {
					var hooks = {};
					for (var key in hooksFromImport) {
						var hook = new hooksFromImport[key]();
						hooks[hook.getId()] = hook;
					}
					return hooks;
				}
			},
			{
				key: "importUiStates",
				value: function importUiStates(statesFromImport) {
					var _this6 = this;
					var uiStates = {};
					Object.values(statesFromImport).forEach(function(className) {
						var uiState = new className(_this6);
						uiStates[uiState.getId()] = uiState;
					});
					return uiStates;
				}
			},
			{
				key: "setUiState",
				value: function setUiState(state, value) {
					$e.uiStates.set("".concat(this.getNamespace(), "/").concat(state), value);
				}
			},
			{
				key: "toggleRouteClass",
				value: function toggleRouteClass(route, state) {
					document.body.classList.toggle(this.getBodyClass(route), state);
				}
			},
			{
				key: "toggleHistoryClass",
				value: function toggleHistoryClass() {
					document.body.classList.toggle("e-routes-has-history", !!$e.routes.getHistory(this.getServiceName()).length);
				}
			}
		]);
	}(import_module.default);

//#endregion
//#region modules/web-cli/assets/js/modules/commands/close.js
	function _callSuper$26(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$26() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$26, "_callSuper");
	function _isNativeReflectConstruct$26() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$26 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$26, "_isNativeReflectConstruct");
	var Close = /*#__PURE__*/ function(_CommandBase) {
		function Close() {
			_classCallCheck(this, Close);
			return _callSuper$26(this, Close, arguments);
		}
		_inherits(Close, _CommandBase);
		return _createClass(Close, [{
			key: "apply",
			value: function apply() {
				this.component.close();
			}
		}]);
	}(CommandBase);

//#endregion
//#region modules/web-cli/assets/js/modules/commands/open.js
	function _callSuper$25(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$25() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$25, "_callSuper");
	function _isNativeReflectConstruct$25() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$25 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$25, "_isNativeReflectConstruct");
	var Open = /*#__PURE__*/ function(_CommandBase) {
		function Open() {
			_classCallCheck(this, Open);
			return _callSuper$25(this, Open, arguments);
		}
		_inherits(Open, _CommandBase);
		return _createClass(Open, [{
			key: "apply",
			value: function apply() {
				$e.route(this.component.getNamespace());
			}
		}]);
	}(CommandBase);

//#endregion
//#region modules/web-cli/assets/js/modules/commands/toggle.js
	function _callSuper$24(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$24() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$24, "_callSuper");
	function _isNativeReflectConstruct$24() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$24 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$24, "_isNativeReflectConstruct");
	var Toggle = /*#__PURE__*/ function(_CommandBase) {
		function Toggle() {
			_classCallCheck(this, Toggle);
			return _callSuper$24(this, Toggle, arguments);
		}
		_inherits(Toggle, _CommandBase);
		return _createClass(Toggle, [{
			key: "apply",
			value: function apply() {
				if (this.component.isOpen) this.component.close();
				else $e.route(this.component.getNamespace());
			}
		}]);
	}(CommandBase);

//#endregion
//#region modules/web-cli/assets/js/modules/commands/index.js
	var commands_exports$1 = /* @__PURE__ */ __exportAll({
		Close: () => Close,
		Open: () => Open,
		Toggle: () => Toggle
	});

//#endregion
//#region modules/web-cli/assets/js/modules/component-modal-base.js
	function _callSuper$23(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$23() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$23, "_callSuper");
	function _isNativeReflectConstruct$23() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$23 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$23, "_isNativeReflectConstruct");
	function _superPropGet$6(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	__name(_superPropGet$6, "_superPropGet");
	var ComponentModalBase = /*#__PURE__*/ function(_ComponentBase) {
		function ComponentModalBase() {
			_classCallCheck(this, ComponentModalBase);
			return _callSuper$23(this, ComponentModalBase, arguments);
		}
		_inherits(ComponentModalBase, _ComponentBase);
		return _createClass(ComponentModalBase, [
			{
				key: "registerAPI",
				value: function registerAPI() {
					var _this = this;
					_superPropGet$6(ComponentModalBase, "registerAPI", this, 3)([]);
					$e.shortcuts.register("esc", {
						scopes: [this.getNamespace()],
						callback: function callback() {
							return _this.close();
						}
					});
				}
			},
			{
				key: "defaultCommands",
				value: function defaultCommands() {
					return this.importCommands(commands_exports$1);
				}
			},
			{
				key: "defaultRoutes",
				value: function defaultRoutes() {
					return { "": function _() {} };
				}
			},
			{
				key: "open",
				value: function open() {
					var _this2 = this;
					if (!this.layout) {
						var layout = this.getModalLayout();
						this.layout = new layout({ component: this });
						this.layout.getModal().on("hide", function() {
							return _this2.close();
						});
					}
					this.layout.showModal();
					return true;
				}
			},
			{
				key: "close",
				value: function close() {
					if (!_superPropGet$6(ComponentModalBase, "close", this, 3)([])) return false;
					elementor.hooks.applyFilters("component/modal/close", this.layout.getModal().hide.bind(this.layout.getModal()), this)();
					return true;
				}
			},
			{
				key: "getModalLayout",
				value: function getModalLayout() {
					force_method_implementation_default();
				}
			}
		]);
	}(ComponentBase);

//#endregion
//#region assets/dev/js/editor/utils/editor-one-events.js
	init_defineProperty();
	function ownKeys$2(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	__name(ownKeys$2, "ownKeys");
	function _objectSpread$2(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys$2(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	__name(_objectSpread$2, "_objectSpread");
	var EditorOneEventManager = /*#__PURE__*/ function() {
		function EditorOneEventManager() {
			_classCallCheck(this, EditorOneEventManager);
		}
		return _createClass(EditorOneEventManager, null, [
			{
				key: "getEventsManager",
				value: function getEventsManager() {
					var _elementorCommon;
					return (_elementorCommon = elementorCommon) === null || _elementorCommon === void 0 ? void 0 : _elementorCommon.eventsManager;
				}
			},
			{
				key: "getConfig",
				value: function getConfig() {
					var _this$getEventsManage;
					return (_this$getEventsManage = this.getEventsManager()) === null || _this$getEventsManage === void 0 ? void 0 : _this$getEventsManage.config;
				}
			},
			{
				key: "canSendEvents",
				value: function canSendEvents() {
					var _elementorCommon2;
					return ((_elementorCommon2 = elementorCommon) === null || _elementorCommon2 === void 0 || (_elementorCommon2 = _elementorCommon2.config) === null || _elementorCommon2 === void 0 || (_elementorCommon2 = _elementorCommon2.editor_events) === null || _elementorCommon2 === void 0 ? void 0 : _elementorCommon2.can_send_events) || false;
				}
			},
			{
				key: "isEventsManagerAvailable",
				value: function isEventsManagerAvailable() {
					var eventsManager = this.getEventsManager();
					return eventsManager && "function" === typeof eventsManager.dispatchEvent;
				}
			},
			{
				key: "dispatchEvent",
				value: function dispatchEvent(eventName, payload) {
					try {
						if (!this.isEventsManagerAvailable() || !this.canSendEvents()) return false;
						this.getEventsManager().dispatchEvent(eventName, payload);
						return true;
					} catch (error) {
						return false;
					}
				}
			},
			{
				key: "toLowerSnake",
				value: function toLowerSnake(value) {
					if (!value || "string" !== typeof value) return value;
					return value.replace(/\s+/g, "_").toLowerCase();
				}
			},
			{
				key: "decodeHtmlEntities",
				value: function decodeHtmlEntities(text) {
					if (!text || "string" !== typeof text) return text;
					return new DOMParser().parseFromString(text, "text/html").body.textContent || text;
				}
			},
			{
				key: "isInEditorContext",
				value: function isInEditorContext() {
					var _window$elementor;
					return "undefined" !== typeof window.elementor && !!((_window$elementor = window.elementor) !== null && _window$elementor !== void 0 && _window$elementor.documents);
				}
			},
			{
				key: "getFinderContext",
				value: function getFinderContext() {
					var _config$appTypes;
					var _config$appTypes2;
					var _config$locations;
					var _config$locations2;
					var config = this.getConfig();
					var isEditor = this.isInEditorContext();
					return {
						windowName: isEditor ? config === null || config === void 0 || (_config$appTypes = config.appTypes) === null || _config$appTypes === void 0 ? void 0 : _config$appTypes.editor : config === null || config === void 0 || (_config$appTypes2 = config.appTypes) === null || _config$appTypes2 === void 0 ? void 0 : _config$appTypes2.wpAdmin,
						targetLocation: this.toLowerSnake(isEditor ? config === null || config === void 0 || (_config$locations = config.locations) === null || _config$locations === void 0 ? void 0 : _config$locations.topBar : config === null || config === void 0 || (_config$locations2 = config.locations) === null || _config$locations2 === void 0 ? void 0 : _config$locations2.sidebar)
					};
				}
			},
			{
				key: "createBasePayload",
				value: function createBasePayload() {
					var _config$appTypes$edit;
					var _config$appTypes3;
					var overrides = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					var config = this.getConfig();
					return _objectSpread$2({ window_name: (_config$appTypes$edit = config === null || config === void 0 || (_config$appTypes3 = config.appTypes) === null || _config$appTypes3 === void 0 ? void 0 : _config$appTypes3.editor) !== null && _config$appTypes$edit !== void 0 ? _config$appTypes$edit : "editor" }, overrides);
				}
			},
			{
				key: "sendTopBarPublishDropdown",
				value: function sendTopBarPublishDropdown(targetName) {
					var _config$names;
					var _config$triggers;
					var _config$targetTypes;
					var _config$interactionRe;
					var _config$locations3;
					var _config$secondaryLoca;
					var _config$targetTypes2;
					var config = this.getConfig();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names = config.names) === null || _config$names === void 0 || (_config$names = _config$names.editorOne) === null || _config$names === void 0 ? void 0 : _config$names.topBarPublishDropdown, this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers = config.triggers) === null || _config$triggers === void 0 ? void 0 : _config$triggers.click),
						target_type: config === null || config === void 0 || (_config$targetTypes = config.targetTypes) === null || _config$targetTypes === void 0 ? void 0 : _config$targetTypes.dropdownItem,
						target_name: targetName,
						interaction_result: config === null || config === void 0 || (_config$interactionRe = config.interactionResults) === null || _config$interactionRe === void 0 ? void 0 : _config$interactionRe.actionSelected,
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations3 = config.locations) === null || _config$locations3 === void 0 ? void 0 : _config$locations3.topBar),
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca = config.secondaryLocations) === null || _config$secondaryLoca === void 0 ? void 0 : _config$secondaryLoca.publishDropdown),
						location_l2: config === null || config === void 0 || (_config$targetTypes2 = config.targetTypes) === null || _config$targetTypes2 === void 0 ? void 0 : _config$targetTypes2.dropdownItem,
						interaction_description: "User selected an action from the publish dropdown"
					}));
				}
			},
			{
				key: "sendTopBarPageList",
				value: function sendTopBarPageList(targetName) {
					var _config$names2;
					var _config$triggers2;
					var _config$targetTypes3;
					var _config$interactionRe2;
					var _config$interactionRe3;
					var _config$locations4;
					var _config$secondaryLoca2;
					var _config$targetTypes4;
					var isCreate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
					var config = this.getConfig();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names2 = config.names) === null || _config$names2 === void 0 || (_config$names2 = _config$names2.editorOne) === null || _config$names2 === void 0 ? void 0 : _config$names2.topBarPageList, this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers2 = config.triggers) === null || _config$triggers2 === void 0 ? void 0 : _config$triggers2.click),
						target_type: config === null || config === void 0 || (_config$targetTypes3 = config.targetTypes) === null || _config$targetTypes3 === void 0 ? void 0 : _config$targetTypes3.dropdownItem,
						target_name: targetName,
						interaction_result: isCreate ? config === null || config === void 0 || (_config$interactionRe2 = config.interactionResults) === null || _config$interactionRe2 === void 0 ? void 0 : _config$interactionRe2.create : config === null || config === void 0 || (_config$interactionRe3 = config.interactionResults) === null || _config$interactionRe3 === void 0 ? void 0 : _config$interactionRe3.navigate,
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations4 = config.locations) === null || _config$locations4 === void 0 ? void 0 : _config$locations4.topBar),
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca2 = config.secondaryLocations) === null || _config$secondaryLoca2 === void 0 ? void 0 : _config$secondaryLoca2.pageListDropdown),
						location_l2: config === null || config === void 0 || (_config$targetTypes4 = config.targetTypes) === null || _config$targetTypes4 === void 0 ? void 0 : _config$targetTypes4.dropdownItem,
						interaction_description: "User selected an action from the page list dropdown"
					}));
				}
			},
			{
				key: "sendSiteSettingsSession",
				value: function sendSiteSettingsSession(_ref) {
					var _config$names3;
					var _config$triggers3;
					var _config$interactionRe4;
					var _config$locations5;
					var _config$secondaryLoca3;
					var targetType = _ref.targetType;
					var _ref$visitedItems = _ref.visitedItems;
					var visitedItems = _ref$visitedItems === void 0 ? [] : _ref$visitedItems;
					var _ref$savedItems = _ref.savedItems;
					var savedItems = _ref$savedItems === void 0 ? [] : _ref$savedItems;
					var state = _ref.state;
					var config = this.getConfig();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names3 = config.names) === null || _config$names3 === void 0 || (_config$names3 = _config$names3.editorOne) === null || _config$names3 === void 0 ? void 0 : _config$names3.siteSettingsSession, this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers3 = config.triggers) === null || _config$triggers3 === void 0 ? void 0 : _config$triggers3.click),
						target_type: targetType,
						target_name: "site_settings",
						interaction_result: config === null || config === void 0 || (_config$interactionRe4 = config.interactionResults) === null || _config$interactionRe4 === void 0 ? void 0 : _config$interactionRe4.sessionEnd,
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations5 = config.locations) === null || _config$locations5 === void 0 ? void 0 : _config$locations5.leftPanel),
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca3 = config.secondaryLocations) === null || _config$secondaryLoca3 === void 0 ? void 0 : _config$secondaryLoca3.siteSettings),
						interaction_description: "Records areas visited as part of the site setting session",
						metadata: {
							visited_items: visitedItems,
							saved_items: savedItems
						},
						state
					}));
				}
			},
			{
				key: "sendELibraryNav",
				value: function sendELibraryNav(tabName) {
					var _config$names4;
					var _config$triggers4;
					var _config$targetTypes5;
					var _config$interactionRe5;
					var _config$locations6;
					var _config$secondaryLoca4;
					var config = this.getConfig();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names4 = config.names) === null || _config$names4 === void 0 || (_config$names4 = _config$names4.editorOne) === null || _config$names4 === void 0 ? void 0 : _config$names4.eLibraryNav, this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers4 = config.triggers) === null || _config$triggers4 === void 0 ? void 0 : _config$triggers4.tabSelect),
						target_type: config === null || config === void 0 || (_config$targetTypes5 = config.targetTypes) === null || _config$targetTypes5 === void 0 ? void 0 : _config$targetTypes5.tab,
						target_name: this.toLowerSnake(tabName),
						interaction_result: config === null || config === void 0 || (_config$interactionRe5 = config.interactionResults) === null || _config$interactionRe5 === void 0 ? void 0 : _config$interactionRe5.tabChanged,
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations6 = config.locations) === null || _config$locations6 === void 0 ? void 0 : _config$locations6.elementorLibrary),
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca4 = config.secondaryLocations) === null || _config$secondaryLoca4 === void 0 ? void 0 : _config$secondaryLoca4.libraryTabs),
						interaction_description: "User navigates within elementor library"
					}));
				}
			},
			{
				key: "sendELibraryInsert",
				value: function sendELibraryInsert(_ref2) {
					var _config$triggers5;
					var _config$targetTypes6;
					var _config$interactionRe6;
					var _config$locations7;
					var _config$secondaryLoca5;
					var _config$names5;
					var assetId = _ref2.assetId;
					var assetName = _ref2.assetName;
					var libraryType = _ref2.libraryType;
					var _ref2$proRequired = _ref2.proRequired;
					var proRequired = _ref2$proRequired === void 0 ? false : _ref2$proRequired;
					var config = this.getConfig();
					var payload = this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers5 = config.triggers) === null || _config$triggers5 === void 0 ? void 0 : _config$triggers5.insert),
						target_type: config === null || config === void 0 || (_config$targetTypes6 = config.targetTypes) === null || _config$targetTypes6 === void 0 ? void 0 : _config$targetTypes6.button,
						target_name: String(assetId),
						interaction_result: config === null || config === void 0 || (_config$interactionRe6 = config.interactionResults) === null || _config$interactionRe6 === void 0 ? void 0 : _config$interactionRe6.assetInserted,
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations7 = config.locations) === null || _config$locations7 === void 0 ? void 0 : _config$locations7.elementorLibrary),
						location_l1: this.toLowerSnake(libraryType),
						location_l2: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca5 = config.secondaryLocations) === null || _config$secondaryLoca5 === void 0 ? void 0 : _config$secondaryLoca5.assetCard),
						interaction_description: "User inserts block/pages from elementor library",
						metadata: {
							template_id: String(assetId),
							template_name: this.decodeHtmlEntities(assetName) || ""
						}
					});
					if (proRequired) payload.state = "pro_plan_required";
					return this.dispatchEvent(config === null || config === void 0 || (_config$names5 = config.names) === null || _config$names5 === void 0 || (_config$names5 = _config$names5.editorOne) === null || _config$names5 === void 0 ? void 0 : _config$names5.eLibraryInsert, payload);
				}
			},
			{
				key: "sendELibraryFavorite",
				value: function sendELibraryFavorite(_ref3) {
					var _config$triggers6;
					var _config$targetTypes7;
					var _config$interactionRe7;
					var _config$locations8;
					var _config$secondaryLoca6;
					var _config$names6;
					var assetId = _ref3.assetId;
					var assetName = _ref3.assetName;
					var libraryType = _ref3.libraryType;
					var isFavorite = _ref3.isFavorite;
					var _ref3$proRequired = _ref3.proRequired;
					var proRequired = _ref3$proRequired === void 0 ? false : _ref3$proRequired;
					var config = this.getConfig();
					var payload = this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers6 = config.triggers) === null || _config$triggers6 === void 0 ? void 0 : _config$triggers6.click),
						target_type: config === null || config === void 0 || (_config$targetTypes7 = config.targetTypes) === null || _config$targetTypes7 === void 0 ? void 0 : _config$targetTypes7.toggle,
						target_name: String(assetId),
						interaction_result: config === null || config === void 0 || (_config$interactionRe7 = config.interactionResults) === null || _config$interactionRe7 === void 0 ? void 0 : _config$interactionRe7.assetFavorite,
						target_value: Boolean(isFavorite),
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations8 = config.locations) === null || _config$locations8 === void 0 ? void 0 : _config$locations8.elementorLibrary),
						location_l1: this.toLowerSnake(libraryType),
						location_l2: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca6 = config.secondaryLocations) === null || _config$secondaryLoca6 === void 0 ? void 0 : _config$secondaryLoca6.assetCard),
						interaction_description: "User favorite block/pages from elementor library",
						metadata: {
							template_id: String(assetId),
							template_name: this.decodeHtmlEntities(assetName) || ""
						}
					});
					if (proRequired) payload.state = "pro_plan_required";
					return this.dispatchEvent(config === null || config === void 0 || (_config$names6 = config.names) === null || _config$names6 === void 0 || (_config$names6 = _config$names6.editorOne) === null || _config$names6 === void 0 ? void 0 : _config$names6.eLibraryFavorite, payload);
				}
			},
			{
				key: "sendELibraryGenerateAi",
				value: function sendELibraryGenerateAi(_ref4) {
					var _config$names7;
					var _config$triggers7;
					var _config$targetTypes8;
					var _config$interactionRe8;
					var _config$locations9;
					var _config$secondaryLoca7;
					var assetId = _ref4.assetId;
					var assetName = _ref4.assetName;
					var libraryType = _ref4.libraryType;
					var config = this.getConfig();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names7 = config.names) === null || _config$names7 === void 0 || (_config$names7 = _config$names7.editorOne) === null || _config$names7 === void 0 ? void 0 : _config$names7.eLibraryGenerateAi, this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers7 = config.triggers) === null || _config$triggers7 === void 0 ? void 0 : _config$triggers7.click),
						target_type: config === null || config === void 0 || (_config$targetTypes8 = config.targetTypes) === null || _config$targetTypes8 === void 0 ? void 0 : _config$targetTypes8.button,
						target_name: String(assetId),
						interaction_result: config === null || config === void 0 || (_config$interactionRe8 = config.interactionResults) === null || _config$interactionRe8 === void 0 ? void 0 : _config$interactionRe8.aiGenerate,
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations9 = config.locations) === null || _config$locations9 === void 0 ? void 0 : _config$locations9.elementorLibrary),
						location_l1: this.toLowerSnake(libraryType),
						location_l2: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca7 = config.secondaryLocations) === null || _config$secondaryLoca7 === void 0 ? void 0 : _config$secondaryLoca7.assetCard),
						interaction_description: "User generated block/page based on a library asset",
						metadata: {
							template_id: String(assetId),
							template_name: this.decodeHtmlEntities(assetName) || ""
						}
					}));
				}
			},
			{
				key: "sendFinderSearchInput",
				value: function sendFinderSearchInput(_ref5) {
					var _config$triggers8;
					var _config$targetTypes9;
					var _config$interactionRe9;
					var _config$interactionRe0;
					var _config$secondaryLoca8;
					var _config$names8;
					var resultsCount = _ref5.resultsCount;
					var _ref5$searchTerm = _ref5.searchTerm;
					var searchTerm = _ref5$searchTerm === void 0 ? null : _ref5$searchTerm;
					var config = this.getConfig();
					var hasResults = resultsCount > 0;
					var finderContext = this.getFinderContext();
					var payload = this.createBasePayload({
						window_name: finderContext.windowName,
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers8 = config.triggers) === null || _config$triggers8 === void 0 ? void 0 : _config$triggers8.typing),
						target_type: config === null || config === void 0 || (_config$targetTypes9 = config.targetTypes) === null || _config$targetTypes9 === void 0 ? void 0 : _config$targetTypes9.searchInput,
						target_name: "finder",
						interaction_result: hasResults ? config === null || config === void 0 || (_config$interactionRe9 = config.interactionResults) === null || _config$interactionRe9 === void 0 ? void 0 : _config$interactionRe9.resultsUpdated : config === null || config === void 0 || (_config$interactionRe0 = config.interactionResults) === null || _config$interactionRe0 === void 0 ? void 0 : _config$interactionRe0.noResults,
						target_location: finderContext.targetLocation,
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca8 = config.secondaryLocations) === null || _config$secondaryLoca8 === void 0 ? void 0 : _config$secondaryLoca8.finder),
						interaction_description: "Finder search input, follows debounce behavior",
						metadata: { results_count: resultsCount }
					});
					if (!hasResults && searchTerm) payload.metadata.search_term = searchTerm;
					return this.dispatchEvent(config === null || config === void 0 || (_config$names8 = config.names) === null || _config$names8 === void 0 || (_config$names8 = _config$names8.editorOne) === null || _config$names8 === void 0 ? void 0 : _config$names8.finderSearchInput, payload);
				}
			},
			{
				key: "sendFinderResultSelect",
				value: function sendFinderResultSelect(choice) {
					var _config$names9;
					var _config$triggers9;
					var _config$targetTypes0;
					var _config$interactionRe1;
					var _config$secondaryLoca9;
					var _config$secondaryLoca0;
					var config = this.getConfig();
					var finderContext = this.getFinderContext();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names9 = config.names) === null || _config$names9 === void 0 || (_config$names9 = _config$names9.editorOne) === null || _config$names9 === void 0 ? void 0 : _config$names9.finderResultSelect, this.createBasePayload({
						window_name: finderContext.windowName,
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers9 = config.triggers) === null || _config$triggers9 === void 0 ? void 0 : _config$triggers9.click),
						target_type: config === null || config === void 0 || (_config$targetTypes0 = config.targetTypes) === null || _config$targetTypes0 === void 0 ? void 0 : _config$targetTypes0.searchResult,
						target_name: choice,
						interaction_result: config === null || config === void 0 || (_config$interactionRe1 = config.interactionResults) === null || _config$interactionRe1 === void 0 ? void 0 : _config$interactionRe1.selected,
						target_location: finderContext.targetLocation,
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca9 = config.secondaryLocations) === null || _config$secondaryLoca9 === void 0 ? void 0 : _config$secondaryLoca9.finder),
						location_l2: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca0 = config.secondaryLocations) === null || _config$secondaryLoca0 === void 0 ? void 0 : _config$secondaryLoca0.finderResults),
						interaction_description: "Finder search results was selected"
					}));
				}
			},
			{
				key: "sendCanvasEmptyBoxAction",
				value: function sendCanvasEmptyBoxAction(_ref6) {
					var _config$triggers0;
					var _config$targetTypes1;
					var _config$interactionRe10;
					var _config$locations0;
					var _config$secondaryLoca1;
					var _config$names0;
					var targetName = _ref6.targetName;
					var _ref6$metadata = _ref6.metadata;
					var metadata = _ref6$metadata === void 0 ? {} : _ref6$metadata;
					var _ref6$containerCreate = _ref6.containerCreated;
					var containerCreated = _ref6$containerCreate === void 0 ? null : _ref6$containerCreate;
					var config = this.getConfig();
					var payload = this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers0 = config.triggers) === null || _config$triggers0 === void 0 ? void 0 : _config$triggers0.click),
						target_type: config === null || config === void 0 || (_config$targetTypes1 = config.targetTypes) === null || _config$targetTypes1 === void 0 ? void 0 : _config$targetTypes1.buttons,
						target_name: targetName,
						interaction_result: config === null || config === void 0 || (_config$interactionRe10 = config.interactionResults) === null || _config$interactionRe10 === void 0 ? void 0 : _config$interactionRe10.selected,
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations0 = config.locations) === null || _config$locations0 === void 0 ? void 0 : _config$locations0.canvas),
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca1 = config.secondaryLocations) === null || _config$secondaryLoca1 === void 0 ? void 0 : _config$secondaryLoca1.emptyBox),
						interaction_description: "Empty box on canvas actions"
					});
					if (Object.keys(metadata).length > 0) payload.metadata = metadata;
					if (containerCreated !== null) payload.state = containerCreated;
					return this.dispatchEvent(config === null || config === void 0 || (_config$names0 = config.names) === null || _config$names0 === void 0 || (_config$names0 = _config$names0.editorOne) === null || _config$names0 === void 0 ? void 0 : _config$names0.canvasEmptyBoxAction, payload);
				}
			},
			{
				key: "sendWidgetPanelSearch",
				value: function sendWidgetPanelSearch(_ref7) {
					var _config$triggers1;
					var _config$targetTypes10;
					var _config$interactionRe11;
					var _config$interactionRe12;
					var _config$locations1;
					var _config$locations10;
					var _config$secondaryLoca10;
					var _config$names1;
					var resultsCount = _ref7.resultsCount;
					var _ref7$userInput = _ref7.userInput;
					var userInput = _ref7$userInput === void 0 ? null : _ref7$userInput;
					var config = this.getConfig();
					var hasResults = resultsCount > 0;
					var payload = this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers1 = config.triggers) === null || _config$triggers1 === void 0 ? void 0 : _config$triggers1.typing),
						target_type: config === null || config === void 0 || (_config$targetTypes10 = config.targetTypes) === null || _config$targetTypes10 === void 0 ? void 0 : _config$targetTypes10.searchWidget,
						target_name: "search_widget",
						interaction_result: hasResults ? config === null || config === void 0 || (_config$interactionRe11 = config.interactionResults) === null || _config$interactionRe11 === void 0 ? void 0 : _config$interactionRe11.resultsUpdated : config === null || config === void 0 || (_config$interactionRe12 = config.interactionResults) === null || _config$interactionRe12 === void 0 ? void 0 : _config$interactionRe12.noResults,
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations1 = config.locations) === null || _config$locations1 === void 0 ? void 0 : _config$locations1.leftPanel),
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$locations10 = config.locations) === null || _config$locations10 === void 0 ? void 0 : _config$locations10.widgetPanel),
						location_l2: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca10 = config.secondaryLocations) === null || _config$secondaryLoca10 === void 0 ? void 0 : _config$secondaryLoca10.searchBar),
						interaction_description: "Widget search input, follows debounce behavior"
					});
					if (!hasResults && userInput) payload.metadata = { user_input: userInput };
					return this.dispatchEvent(config === null || config === void 0 || (_config$names1 = config.names) === null || _config$names1 === void 0 || (_config$names1 = _config$names1.editorOne) === null || _config$names1 === void 0 ? void 0 : _config$names1.widgetPanelSearch, payload);
				}
			},
			{
				key: "createWpDashPayload",
				value: function createWpDashPayload() {
					var _config$appTypes$wpDa;
					var _config$appTypes4;
					var _config$locations11;
					var overrides = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					var config = this.getConfig();
					return this.createBasePayload(_objectSpread$2({
						window_name: (_config$appTypes$wpDa = config === null || config === void 0 || (_config$appTypes4 = config.appTypes) === null || _config$appTypes4 === void 0 ? void 0 : _config$appTypes4.wpDash) !== null && _config$appTypes$wpDa !== void 0 ? _config$appTypes$wpDa : "wpdash",
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations11 = config.locations) === null || _config$locations11 === void 0 ? void 0 : _config$locations11.wpDashAdmin),
						location_l2: ""
					}, overrides));
				}
			},
			{
				key: "sendWpDashElementorMenuClick",
				value: function sendWpDashElementorMenuClick() {
					var _config$names10;
					var _config$triggers10;
					var _config$targetTypes11;
					var _config$interactionRe13;
					var _config$secondaryLoca11;
					var config = this.getConfig();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names10 = config.names) === null || _config$names10 === void 0 || (_config$names10 = _config$names10.editorOne) === null || _config$names10 === void 0 ? void 0 : _config$names10.wpDashElementorMenuClick, this.createWpDashPayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers10 = config.triggers) === null || _config$triggers10 === void 0 ? void 0 : _config$triggers10.click),
						target_type: config === null || config === void 0 || (_config$targetTypes11 = config.targetTypes) === null || _config$targetTypes11 === void 0 ? void 0 : _config$targetTypes11.wpDashAdminMenuItem,
						target_name: "elementor_menu_item",
						interaction_result: config === null || config === void 0 || (_config$interactionRe13 = config.interactionResults) === null || _config$interactionRe13 === void 0 ? void 0 : _config$interactionRe13.elementorSideMenuOpened,
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca11 = config.secondaryLocations) === null || _config$secondaryLoca11 === void 0 ? void 0 : _config$secondaryLoca11.wpDashElementorCoreMenu),
						interaction_description: "core_user_clicked_elementor_menu_item"
					}));
				}
			},
			{
				key: "sendWpDashEditorSubMenuHover",
				value: function sendWpDashEditorSubMenuHover() {
					var _config$names11;
					var _config$triggers11;
					var _config$targetTypes12;
					var _config$interactionRe14;
					var _config$secondaryLoca12;
					var config = this.getConfig();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names11 = config.names) === null || _config$names11 === void 0 || (_config$names11 = _config$names11.editorOne) === null || _config$names11 === void 0 ? void 0 : _config$names11.wpDashEditorSubMenuHover, this.createWpDashPayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers11 = config.triggers) === null || _config$triggers11 === void 0 ? void 0 : _config$triggers11.hover),
						target_type: config === null || config === void 0 || (_config$targetTypes12 = config.targetTypes) === null || _config$targetTypes12 === void 0 ? void 0 : _config$targetTypes12.wpDashEditorMenu,
						target_name: "wpdash_editor_sub_menu",
						interaction_result: config === null || config === void 0 || (_config$interactionRe14 = config.interactionResults) === null || _config$interactionRe14 === void 0 ? void 0 : _config$interactionRe14.editorSubMenuOpened,
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca12 = config.secondaryLocations) === null || _config$secondaryLoca12 === void 0 ? void 0 : _config$secondaryLoca12.wpDashElementorCoreSubMenu),
						interaction_description: "core_user_hovered_sub_menu"
					}));
				}
			},
			{
				key: "sendWpDashThemeBuilderClick",
				value: function sendWpDashThemeBuilderClick() {
					var _config$names12;
					var _config$triggers12;
					var _config$targetTypes13;
					var _config$interactionRe15;
					var _config$secondaryLoca13;
					var config = this.getConfig();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names12 = config.names) === null || _config$names12 === void 0 || (_config$names12 = _config$names12.editorOne) === null || _config$names12 === void 0 ? void 0 : _config$names12.wpDashThemeBuilderClick, this.createWpDashPayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers12 = config.triggers) === null || _config$triggers12 === void 0 ? void 0 : _config$triggers12.click),
						target_type: config === null || config === void 0 || (_config$targetTypes13 = config.targetTypes) === null || _config$targetTypes13 === void 0 ? void 0 : _config$targetTypes13.wpDashSubMenuItem,
						target_name: "theme_builder_menu_item",
						interaction_result: config === null || config === void 0 || (_config$interactionRe15 = config.interactionResults) === null || _config$interactionRe15 === void 0 ? void 0 : _config$interactionRe15.themeBuilderPromotionWindow,
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca13 = config.secondaryLocations) === null || _config$secondaryLoca13 === void 0 ? void 0 : _config$secondaryLoca13.wpDashThemeBuilder),
						interaction_description: "core_user_clicked_theme_builder_menu_item"
					}));
				}
			},
			{
				key: "sendSidebarMenuItemClicked",
				value: function sendSidebarMenuItemClicked(_ref8) {
					var eventId = _ref8.eventId;
					var groupEventId = _ref8.groupEventId;
					try {
						var _config$windowNames;
						var _config$triggers13;
						var _config$targetTypes14;
						var _config$interactionRe16;
						var _config$locations12;
						var _config$names13;
						var config = this.getConfig();
						var payload = this.createBasePayload({
							window_name: config === null || config === void 0 || (_config$windowNames = config.windowNames) === null || _config$windowNames === void 0 ? void 0 : _config$windowNames.sidebarMenu,
							interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers13 = config.triggers) === null || _config$triggers13 === void 0 ? void 0 : _config$triggers13.click),
							target_type: config === null || config === void 0 || (_config$targetTypes14 = config.targetTypes) === null || _config$targetTypes14 === void 0 ? void 0 : _config$targetTypes14.link,
							target_name: eventId,
							interaction_result: config === null || config === void 0 || (_config$interactionRe16 = config.interactionResults) === null || _config$interactionRe16 === void 0 ? void 0 : _config$interactionRe16.pageOpened,
							target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations12 = config.locations) === null || _config$locations12 === void 0 ? void 0 : _config$locations12.sidebar)
						});
						if (groupEventId) payload.location_l1 = groupEventId;
						return this.dispatchEvent(config === null || config === void 0 || (_config$names13 = config.names) === null || _config$names13 === void 0 || (_config$names13 = _config$names13.editorOne) === null || _config$names13 === void 0 ? void 0 : _config$names13.sidebarMenuItemClicked, payload);
					} catch (error) {
						return false;
					}
				}
			},
			{
				key: "sendSidebarMenuGroupToggled",
				value: function sendSidebarMenuGroupToggled(_ref9) {
					var eventId = _ref9.eventId;
					var isExpanded = _ref9.isExpanded;
					try {
						var _config$interactionRe17;
						var _config$interactionRe18;
						var _config$names14;
						var _config$windowNames2;
						var _config$triggers14;
						var _config$targetTypes15;
						var _config$locations13;
						var config = this.getConfig();
						var interactionResult = isExpanded ? config === null || config === void 0 || (_config$interactionRe17 = config.interactionResults) === null || _config$interactionRe17 === void 0 ? void 0 : _config$interactionRe17.expanded : config === null || config === void 0 || (_config$interactionRe18 = config.interactionResults) === null || _config$interactionRe18 === void 0 ? void 0 : _config$interactionRe18.collapsed;
						return this.dispatchEvent(config === null || config === void 0 || (_config$names14 = config.names) === null || _config$names14 === void 0 || (_config$names14 = _config$names14.editorOne) === null || _config$names14 === void 0 ? void 0 : _config$names14.sidebarMenuGroupToggled, this.createBasePayload({
							window_name: config === null || config === void 0 || (_config$windowNames2 = config.windowNames) === null || _config$windowNames2 === void 0 ? void 0 : _config$windowNames2.sidebarMenu,
							interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers14 = config.triggers) === null || _config$triggers14 === void 0 ? void 0 : _config$triggers14.click),
							target_type: config === null || config === void 0 || (_config$targetTypes15 = config.targetTypes) === null || _config$targetTypes15 === void 0 ? void 0 : _config$targetTypes15.toggle,
							target_name: eventId,
							interaction_result: interactionResult,
							target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations13 = config.locations) === null || _config$locations13 === void 0 ? void 0 : _config$locations13.sidebar)
						}));
					} catch (error) {
						return false;
					}
				}
			}
		]);
	}();
	var createDebouncedFinderSearch = function createDebouncedFinderSearch() {
		var delay = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 300;
		return _.debounce(function(resultsCount, searchTerm) {
			EditorOneEventManager.sendFinderSearchInput({
				resultsCount,
				searchTerm
			});
		}, delay);
	};

//#endregion
//#region core/common/modules/finder/assets/js/modal/views/item.js
	function _callSuper$22(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$22() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$22, "_callSuper");
	function _isNativeReflectConstruct$22() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$22 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$22, "_isNativeReflectConstruct");
	var _default$9 = /*#__PURE__*/ function(_Marionette$ItemView) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$22(this, _default, arguments);
		}
		_inherits(_default, _Marionette$ItemView);
		return _createClass(_default, [
			{
				key: "className",
				value: function className() {
					return "elementor-finder__results__item";
				}
			},
			{
				key: "getTemplate",
				value: function getTemplate() {
					return "#tmpl-elementor-finder__results__item";
				}
			},
			{
				key: "events",
				value: function events() {
					this.$el[0].addEventListener("click", this.onClick.bind(this), true);
				}
			},
			{
				key: "trackResultSelect",
				value: function trackResultSelect() {
					var title = this.model.get("title");
					EditorOneEventManager.sendFinderResultSelect(title);
				}
			},
			{
				key: "onClick",
				value: function onClick(e) {
					var _this = this;
					var lockOptions = this.model.get("lock");
					if (!(lockOptions !== null && lockOptions !== void 0 && lockOptions.is_locked)) {
						this.trackResultSelect();
						var url = this.model.get("url") || "";
						if (url.includes("page=elementor-app") && window.$e) {
							e.preventDefault();
							e.stopImmediatePropagation();
							$e.run("finder/close");
							$e.run("app/open", { url });
						}
						return;
					}
					e.preventDefault();
					e.stopImmediatePropagation();
					elementorCommon.dialogsManager.createWidget("confirm", {
						id: "elementor-finder__lock-dialog",
						headerMessage: lockOptions.content.heading,
						message: lockOptions.content.description,
						position: {
							my: "center center",
							at: "center center"
						},
						strings: {
							confirm: lockOptions.button.text,
							cancel: (0, _wordpress_i18n.__)("Cancel", "elementor")
						},
						onConfirm: function onConfirm() {
							_this.trackResultSelect();
							var link = _this.replaceLockLinkPlaceholders(lockOptions.button.url);
							window.open(link, "_blank");
						}
					}).show();
				}
			},
			{
				key: "replaceLockLinkPlaceholders",
				value: function replaceLockLinkPlaceholders(link) {
					return link.replace(/%%utm_source%%/g, "finder").replace(/%%utm_medium%%/g, "wp-dash");
				}
			}
		]);
	}(Marionette.ItemView);

//#endregion
//#region core/common/modules/finder/assets/js/modal/model/item.js
	function _callSuper$21(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$21() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$21, "_callSuper");
	function _isNativeReflectConstruct$21() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$21 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$21, "_isNativeReflectConstruct");
	var _default$8 = /*#__PURE__*/ function(_Backbone$Model) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$21(this, _default, arguments);
		}
		_inherits(_default, _Backbone$Model);
		return _createClass(_default, [{
			key: "defaults",
			value: function defaults() {
				return {
					description: "",
					icon: "settings",
					url: "",
					keywords: [],
					actions: [],
					lock: null
				};
			}
		}]);
	}(Backbone.Model);

//#endregion
//#region core/common/modules/finder/assets/js/modal/views/category.js
	function _callSuper$20(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$20() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$20, "_callSuper");
	function _isNativeReflectConstruct$20() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$20 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$20, "_isNativeReflectConstruct");
	var _default$7 = /*#__PURE__*/ function(_Marionette$Composite) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$20(this, _default, arguments);
		}
		_inherits(_default, _Marionette$Composite);
		return _createClass(_default, [
			{
				key: "className",
				value: function className() {
					return "elementor-finder__results__category";
				}
			},
			{
				key: "getTemplate",
				value: function getTemplate() {
					return "#tmpl-elementor-finder__results__category";
				}
			},
			{
				key: "getChildView",
				value: function getChildView() {
					return _default$9;
				}
			},
			{
				key: "initialize",
				value: function initialize() {
					this.childViewContainer = ".elementor-finder__results__category__items";
					this.isVisible = true;
					var items = this.model.get("items");
					if (items) items = Object.values(items);
					this.collection = new Backbone.Collection(items, { model: _default$8 });
				}
			},
			{
				key: "filter",
				value: function filter(childModel) {
					var textFilter = this.getTextFilter();
					if (childModel.get("title").toLowerCase().indexOf(textFilter) >= 0) return true;
					return childModel.get("keywords").some(function(keyword) {
						return keyword.indexOf(textFilter) >= 0;
					});
				}
			},
			{
				key: "getTextFilter",
				value: function getTextFilter() {
					return elementorCommon.finder.channel.request("filter:text").trim().toLowerCase();
				}
			},
			{
				key: "toggleElement",
				value: function toggleElement() {
					var isCurrentlyVisible = !!this.children.length;
					if (isCurrentlyVisible !== this.isVisible) {
						this.isVisible = isCurrentlyVisible;
						this.$el.toggle(isCurrentlyVisible);
						this.triggerMethod("toggle:visibility");
					}
				}
			},
			{
				key: "onRender",
				value: function onRender() {
					this.listenTo(elementorCommon.finder.channel, "filter:change", this.onFilterChange.bind(this));
				}
			},
			{
				key: "onFilterChange",
				value: function onFilterChange() {
					this._renderChildren();
				}
			},
			{
				key: "onRenderCollection",
				value: function onRenderCollection() {
					this.toggleElement();
				}
			}
		]);
	}(Marionette.CompositeView);

//#endregion
//#region core/common/modules/finder/assets/js/modal/views/dynamic-category.js
	function _callSuper$19(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$19() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$19, "_callSuper");
	function _isNativeReflectConstruct$19() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$19 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$19, "_isNativeReflectConstruct");
	function _superPropGet$5(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	__name(_superPropGet$5, "_superPropGet");
	var _default$6 = /*#__PURE__*/ function(_Category) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$19(this, _default, arguments);
		}
		_inherits(_default, _Category);
		return _createClass(_default, [
			{
				key: "className",
				value: function className() {
					return _superPropGet$5(_default, "className", this, 3)([]) + " elementor-finder__results__category--dynamic";
				}
			},
			{
				key: "ui",
				value: function ui() {
					return { title: ".elementor-finder__results__category__title" };
				}
			},
			{
				key: "fetchData",
				value: function fetchData() {
					var _this = this;
					this.ui.loadingIcon.show();
					elementorCommon.ajax.addRequest("finder_get_category_items", {
						data: {
							category: this.model.get("name"),
							filter: this.getTextFilter()
						},
						success: function success(data) {
							if (_this.isDestroyed) return;
							_this.collection.set(data);
							_this.toggleElement();
							_this.ui.loadingIcon.hide();
						}
					});
				}
			},
			{
				key: "filter",
				value: function filter() {
					return true;
				}
			},
			{
				key: "onFilterChange",
				value: function onFilterChange() {
					this.fetchData();
				}
			},
			{
				key: "onRender",
				value: function onRender() {
					_superPropGet$5(_default, "onRender", this, 3)([]);
					this.ui.loadingIcon = jQuery("<i>", { class: "eicon-loading eicon-animation-spin" });
					this.ui.title.after(this.ui.loadingIcon);
					this.fetchData();
				}
			}
		]);
	}(_default$7);

//#endregion
//#region core/common/modules/finder/assets/js/modal/views/categories.js
	function _callSuper$18(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$18() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$18, "_callSuper");
	function _isNativeReflectConstruct$18() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$18 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$18, "_isNativeReflectConstruct");
	var _default$5 = /*#__PURE__*/ function(_Marionette$Composite) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$18(this, _default, arguments);
		}
		_inherits(_default, _Marionette$Composite);
		return _createClass(_default, [
			{
				key: "id",
				value: function id() {
					return "elementor-finder__results-container";
				}
			},
			{
				key: "ui",
				value: function ui() {
					this.selectors = {
						noResults: "#elementor-finder__no-results",
						categoryItem: ".elementor-finder__results__item"
					};
					return this.selectors;
				}
			},
			{
				key: "events",
				value: function events() {
					return { "mouseenter @ui.categoryItem": "onCategoryItemMouseEnter" };
				}
			},
			{
				key: "getTemplate",
				value: function getTemplate() {
					return "#tmpl-elementor-finder-results-container";
				}
			},
			{
				key: "getChildView",
				value: function getChildView(childModel) {
					return childModel.get("dynamic") ? _default$6 : _default$7;
				}
			},
			{
				key: "initialize",
				value: function initialize() {
					this.$activeItem = null;
					this.childViewContainer = "#elementor-finder__results";
					this.collection = new Backbone.Collection(Object.values(elementorCommon.finder.getSettings("data")));
				}
			},
			{
				key: "activateItem",
				value: function activateItem($item) {
					if (this.$activeItem) this.$activeItem.removeClass("elementor-active");
					$item.addClass("elementor-active");
					this.$activeItem = $item;
				}
			},
			{
				key: "activateNextItem",
				value: function activateNextItem(reverse) {
					var $allItems = jQuery(this.selectors.categoryItem);
					var nextItemIndex = 0;
					if (this.$activeItem) {
						nextItemIndex = $allItems.index(this.$activeItem) + (reverse ? -1 : 1);
						if (nextItemIndex >= $allItems.length) nextItemIndex = 0;
						else if (nextItemIndex < 0) nextItemIndex = $allItems.length - 1;
					}
					var $nextItem = $allItems.eq(nextItemIndex);
					this.activateItem($nextItem);
					$nextItem[0].scrollIntoView({ block: "nearest" });
				}
			},
			{
				key: "goToActiveItem",
				value: function goToActiveItem(event) {
					var $a = this.$activeItem.children("a");
					var isControlClicked = $e.shortcuts.isControlEvent(event);
					if (isControlClicked) $a.attr("target", "_blank");
					$a[0].click();
					if (isControlClicked) $a.removeAttr("target");
				}
			},
			{
				key: "onCategoryItemMouseEnter",
				value: function onCategoryItemMouseEnter(event) {
					this.activateItem(jQuery(event.currentTarget));
				}
			},
			{
				key: "onChildviewToggleVisibility",
				value: function onChildviewToggleVisibility() {
					var allCategoriesAreEmpty = this.children.every(function(child) {
						return !child.isVisible;
					});
					this.ui.noResults.toggle(allCategoriesAreEmpty);
				}
			}
		]);
	}(Marionette.CompositeView);

//#endregion
//#region core/common/modules/finder/assets/js/modal/views/content.js
	function _callSuper$17(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$17() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$17, "_callSuper");
	function _isNativeReflectConstruct$17() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$17 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$17, "_isNativeReflectConstruct");
	var FINDER_SEARCH_DEBOUNCE_MS = 300;
	var _default$4 = /*#__PURE__*/ function(_Marionette$LayoutVie) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$17(this, _default, arguments);
		}
		_inherits(_default, _Marionette$LayoutVie);
		return _createClass(_default, [
			{
				key: "id",
				value: function id() {
					return "elementor-finder";
				}
			},
			{
				key: "getTemplate",
				value: function getTemplate() {
					return "#tmpl-elementor-finder";
				}
			},
			{
				key: "ui",
				value: function ui() {
					return { searchInput: "#elementor-finder__search__input" };
				}
			},
			{
				key: "events",
				value: function events() {
					return { "input @ui.searchInput": "onSearchInputInput" };
				}
			},
			{
				key: "regions",
				value: function regions() {
					return { content: "#elementor-finder__content" };
				}
			},
			{
				key: "initialize",
				value: function initialize() {
					this.debouncedTrackSearch = createDebouncedFinderSearch(FINDER_SEARCH_DEBOUNCE_MS);
				}
			},
			{
				key: "showCategoriesView",
				value: function showCategoriesView() {
					this.content.show(new _default$5());
				}
			},
			{
				key: "getResultsCount",
				value: function getResultsCount() {
					if (!this.content.currentView) return 0;
					return this.content.currentView.$el.find(".elementor-finder__results__item:visible").length;
				}
			},
			{
				key: "onSearchInputInput",
				value: function onSearchInputInput() {
					var _this = this;
					var value = this.ui.searchInput.val();
					if (value) {
						elementorCommon.finder.channel.reply("filter:text", value).trigger("filter:change");
						if (!(this.content.currentView instanceof _default$5)) this.showCategoriesView();
						setTimeout(function() {
							var resultsCount = _this.getResultsCount();
							_this.debouncedTrackSearch(resultsCount, value);
						}, 50);
					}
					this.content.currentView.$el.toggle(!!value);
				}
			},
			{
				key: "onDestroy",
				value: function onDestroy() {
					var _this$debouncedTrackS;
					if ((_this$debouncedTrackS = this.debouncedTrackSearch) !== null && _this$debouncedTrackS !== void 0 && _this$debouncedTrackS.cancel) this.debouncedTrackSearch.cancel();
				}
			}
		]);
	}(Marionette.LayoutView);

//#endregion
//#region core/common/modules/finder/assets/js/modal/views/layout.js
	function _callSuper$16(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$16() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$16, "_callSuper");
	function _isNativeReflectConstruct$16() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$16 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$16, "_isNativeReflectConstruct");
	function _superPropGet$4(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	__name(_superPropGet$4, "_superPropGet");
	var _default$3 = /*#__PURE__*/ function(_elementorModules$com) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$16(this, _default, arguments);
		}
		_inherits(_default, _elementorModules$com);
		return _createClass(_default, [
			{
				key: "getModalOptions",
				value: function getModalOptions() {
					return {
						id: "elementor-finder__modal",
						draggable: true,
						effects: {
							show: "show",
							hide: "hide"
						},
						position: { enable: false }
					};
				}
			},
			{
				key: "getLogoOptions",
				value: function getLogoOptions() {
					return { title: (0, _wordpress_i18n.__)("Finder", "elementor") };
				}
			},
			{
				key: "initialize",
				value: function initialize() {
					for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
					_superPropGet$4(_default, "initialize", this, 3)(args);
					this.showLogo();
					this.showContentView();
				}
			},
			{
				key: "showContentView",
				value: function showContentView() {
					this.modalContent.show(new _default$4());
				}
			},
			{
				key: "showModal",
				value: function showModal() {
					for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
					_superPropGet$4(_default, "showModal", this, 3)(args);
					this.modalContent.currentView.ui.searchInput.focus();
				}
			}
		]);
	}(elementorModules.common.views.modal.Layout);

//#endregion
//#region core/common/modules/finder/assets/js/commands/navigate-down.js
	function _callSuper$15(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$15() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$15, "_callSuper");
	function _isNativeReflectConstruct$15() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$15 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$15, "_isNativeReflectConstruct");
	var NavigateDown = /*#__PURE__*/ function(_CommandBase) {
		function NavigateDown() {
			_classCallCheck(this, NavigateDown);
			return _callSuper$15(this, NavigateDown, arguments);
		}
		_inherits(NavigateDown, _CommandBase);
		return _createClass(NavigateDown, [{
			key: "apply",
			value: function apply() {
				this.component.getItemsView().activateNextItem();
			}
		}]);
	}(CommandBase);

//#endregion
//#region core/common/modules/finder/assets/js/commands/navigate-select.js
	function _callSuper$14(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$14() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$14, "_callSuper");
	function _isNativeReflectConstruct$14() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$14 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$14, "_isNativeReflectConstruct");
	var NavigateSelect = /*#__PURE__*/ function(_CommandBase) {
		function NavigateSelect() {
			_classCallCheck(this, NavigateSelect);
			return _callSuper$14(this, NavigateSelect, arguments);
		}
		_inherits(NavigateSelect, _CommandBase);
		return _createClass(NavigateSelect, [{
			key: "apply",
			value: function apply(args) {
				this.component.getItemsView().goToActiveItem(args);
			}
		}]);
	}(CommandBase);

//#endregion
//#region core/common/modules/finder/assets/js/commands/navigate-up.js
	function _callSuper$13(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$13() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$13, "_callSuper");
	function _isNativeReflectConstruct$13() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$13 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$13, "_isNativeReflectConstruct");
	var NavigateUp = /*#__PURE__*/ function(_CommandBase) {
		function NavigateUp() {
			_classCallCheck(this, NavigateUp);
			return _callSuper$13(this, NavigateUp, arguments);
		}
		_inherits(NavigateUp, _CommandBase);
		return _createClass(NavigateUp, [{
			key: "apply",
			value: function apply() {
				this.component.getItemsView().activateNextItem(true);
			}
		}]);
	}(CommandBase);

//#endregion
//#region core/common/modules/finder/assets/js/commands/index.js
	var commands_exports = /* @__PURE__ */ __exportAll({
		NavigateDown: () => NavigateDown,
		NavigateSelect: () => NavigateSelect,
		NavigateUp: () => NavigateUp
	});

//#endregion
//#region core/common/modules/finder/assets/js/component.js
	init_defineProperty();
	function ownKeys$1(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	__name(ownKeys$1, "ownKeys");
	function _objectSpread$1(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys$1(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	__name(_objectSpread$1, "_objectSpread");
	function _callSuper$12(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$12() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$12, "_callSuper");
	function _isNativeReflectConstruct$12() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$12 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$12, "_isNativeReflectConstruct");
	function _superPropGet$3(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	__name(_superPropGet$3, "_superPropGet");
	var Component$2 = /*#__PURE__*/ function(_ComponentModalBase) {
		function Component() {
			_classCallCheck(this, Component);
			return _callSuper$12(this, Component, arguments);
		}
		_inherits(Component, _ComponentModalBase);
		return _createClass(Component, [
			{
				key: "getNamespace",
				value: function getNamespace() {
					return "finder";
				}
			},
			{
				key: "defaultShortcuts",
				value: function defaultShortcuts() {
					var _this = this;
					return {
						"": { keys: "ctrl+e" },
						"navigate-down": {
							keys: "down",
							scopes: [this.getNamespace()],
							dependency: function dependency() {
								return _this.getItemsView();
							}
						},
						"navigate-up": {
							keys: "up",
							scopes: [this.getNamespace()],
							dependency: function dependency() {
								return _this.getItemsView();
							}
						},
						"navigate-select": {
							keys: "enter",
							scopes: [this.getNamespace()],
							dependency: function dependency() {
								return _this.getItemsView().$activeItem;
							}
						}
					};
				}
			},
			{
				key: "defaultCommands",
				value: function defaultCommands() {
					return _objectSpread$1(_objectSpread$1({
						"navigate/down": function navigate_down() {
							elementorDevTools.deprecation.deprecated("$e.run( 'finder/navigate/down' )", "3.0.0", "$e.run( 'finder/navigate-down' )");
							$e.run("finder/navigate-down");
						},
						"navigate/up": function navigate_up() {
							elementorDevTools.deprecation.deprecated("$e.run( 'finder/navigate/up' )", "3.0.0", "$e.run( 'finder/navigate-up' )");
							$e.run("finder/navigate-up");
						},
						"navigate/select": function navigate_select(event) {
							elementorDevTools.deprecation.deprecated("$e.run( 'finder/navigate/select', event )", "3.0.0", "$e.run( 'finder/navigate-select', event )");
							$e.run("finder/navigate-select", event);
						}
					}, _superPropGet$3(Component, "defaultCommands", this, 3)([])), this.importCommands(commands_exports));
				}
			},
			{
				key: "getModalLayout",
				value: function getModalLayout() {
					return _default$3;
				}
			},
			{
				key: "getItemsView",
				value: function getItemsView() {
					return this.layout.modalContent.currentView.content.currentView;
				}
			}
		]);
	}(ComponentModalBase);

//#endregion
//#region core/common/modules/finder/assets/js/finder.js
	function _callSuper$11(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$11() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$11, "_callSuper");
	function _isNativeReflectConstruct$11() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$11 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$11, "_isNativeReflectConstruct");
	var _default$2 = /*#__PURE__*/ function(_elementorModules$Mod) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$11(this, _default, arguments);
		}
		_inherits(_default, _elementorModules$Mod);
		return _createClass(_default, [{
			key: "onInit",
			value: function onInit() {
				if (window.top !== window) return;
				this.channel = Backbone.Radio.channel("ELEMENTOR:finder");
				$e.components.register(new Component$2({ manager: this }));
			}
		}]);
	}(elementorModules.Module);

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
	function asyncGeneratorStep(n, t, e, r, o, a, c) {
		try {
			var i = n[a](c);
			var u = i.value;
		} catch (n) {
			e(n);
			return;
		}
		i.done ? t(u) : Promise.resolve(u).then(r, o);
	}
	function _asyncToGenerator(n) {
		return function() {
			var t = this;
			var e = arguments;
			return new Promise(function(r, o) {
				var a = n.apply(t, e);
				function _next(n) {
					asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
				}
				function _throw(n) {
					asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
				}
				_next(void 0);
			});
		};
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/OverloadYield.js
	var require_OverloadYield = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		function _OverloadYield(e, d) {
			this.v = e, this.k = d;
		}
		module.exports = _OverloadYield, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/regeneratorDefine.js
	var require_regeneratorDefine = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		function _regeneratorDefine(e, r, n, t) {
			var i = Object.defineProperty;
			try {
				i({}, "", {});
			} catch (e) {
				i = 0;
			}
			module.exports = _regeneratorDefine = function regeneratorDefine(e, r, n, t) {
				function o(r, n) {
					_regeneratorDefine(e, r, function(e) {
						return this._invoke(r, n, e);
					});
				}
				r ? i ? i(e, r, {
					value: n,
					enumerable: !t,
					configurable: !t,
					writable: !t
				}) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
			}, module.exports.__esModule = true, module.exports["default"] = module.exports, _regeneratorDefine(e, r, n, t);
		}
		module.exports = _regeneratorDefine, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/regenerator.js
	var require_regenerator$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var regeneratorDefine = require_regeneratorDefine();
		function _regenerator() {
			/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
			var e;
			var t;
			var r = "function" == typeof Symbol ? Symbol : {};
			var n = r.iterator || "@@iterator";
			var o = r.toStringTag || "@@toStringTag";
			function i(r, n, o, i) {
				var c = n && n.prototype instanceof Generator ? n : Generator;
				var u = Object.create(c.prototype);
				return regeneratorDefine(u, "_invoke", function(r, n, o) {
					var i;
					var c;
					var u;
					var f = 0;
					var p = o || [];
					var y = !1;
					var G = {
						p: 0,
						n: 0,
						v: e,
						a: d,
						f: d.bind(e, 4),
						d: function d(t, r) {
							return i = t, c = 0, u = e, G.n = r, a;
						}
					};
					function d(r, n) {
						for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
							var o;
							var i = p[t];
							var d = G.p;
							var l = i[2];
							r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
						}
						if (o || r > 1) return a;
						throw y = !0, n;
					}
					return function(o, p, l) {
						if (f > 1) throw TypeError("Generator is already running");
						for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
							i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
							try {
								if (f = 2, i) {
									if (c || (o = "next"), t = i[o]) {
										if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
										if (!t.done) return t;
										u = t.value, c < 2 && (c = 0);
									} else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
									i = e;
								} else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
							} catch (t) {
								i = e, c = 1, u = t;
							} finally {
								f = 1;
							}
						}
						return {
							value: t,
							done: y
						};
					};
				}(r, o, i), !0), u;
			}
			var a = {};
			function Generator() {}
			function GeneratorFunction() {}
			function GeneratorFunctionPrototype() {}
			t = Object.getPrototypeOf;
			var c = [][n] ? t(t([][n]())) : (regeneratorDefine(t = {}, n, function() {
				return this;
			}), t);
			var u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
			function f(e) {
				return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
			}
			return GeneratorFunction.prototype = GeneratorFunctionPrototype, regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), regeneratorDefine(u), regeneratorDefine(u, o, "Generator"), regeneratorDefine(u, n, function() {
				return this;
			}), regeneratorDefine(u, "toString", function() {
				return "[object Generator]";
			}), (module.exports = _regenerator = function _regenerator() {
				return {
					w: i,
					m: f
				};
			}, module.exports.__esModule = true, module.exports["default"] = module.exports)();
		}
		module.exports = _regenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js
	var require_regeneratorAsyncIterator = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var OverloadYield = require_OverloadYield();
		var regeneratorDefine = require_regeneratorDefine();
		function AsyncIterator(t, e) {
			function n(r, o, i, f) {
				try {
					var c = t[r](o);
					var u = c.value;
					return u instanceof OverloadYield ? e.resolve(u.v).then(function(t) {
						n("next", t, i, f);
					}, function(t) {
						n("throw", t, i, f);
					}) : e.resolve(u).then(function(t) {
						c.value = t, i(c);
					}, function(t) {
						return n("throw", t, i, f);
					});
				} catch (t) {
					f(t);
				}
			}
			var r;
			this.next || (regeneratorDefine(AsyncIterator.prototype), regeneratorDefine(AsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function() {
				return this;
			})), regeneratorDefine(this, "_invoke", function(t, o, i) {
				function f() {
					return new e(function(e, r) {
						n(t, i, e, r);
					});
				}
				return r = r ? r.then(f, f) : f();
			}, !0);
		}
		module.exports = AsyncIterator, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js
	var require_regeneratorAsyncGen = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var regenerator = require_regenerator$1();
		var regeneratorAsyncIterator = require_regeneratorAsyncIterator();
		function _regeneratorAsyncGen(r, e, t, o, n) {
			return new regeneratorAsyncIterator(regenerator().w(r, e, t, o), n || Promise);
		}
		module.exports = _regeneratorAsyncGen, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/regeneratorAsync.js
	var require_regeneratorAsync = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var regeneratorAsyncGen = require_regeneratorAsyncGen();
		function _regeneratorAsync(n, e, r, t, o) {
			var a = regeneratorAsyncGen(n, e, r, t, o);
			return a.next().then(function(n) {
				return n.done ? n.value : a.next();
			});
		}
		module.exports = _regeneratorAsync, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/regeneratorKeys.js
	var require_regeneratorKeys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		function _regeneratorKeys(e) {
			var n = Object(e);
			var r = [];
			for (var t in n) r.unshift(t);
			return function e() {
				for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e;
				return e.done = !0, e;
			};
		}
		module.exports = _regeneratorKeys, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/typeof.js
	var require_typeof = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		function _typeof(o) {
			"@babel/helpers - typeof";
			return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
				return typeof o;
			} : function(o) {
				return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
			}, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
		}
		module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/regeneratorValues.js
	var require_regeneratorValues = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var _typeof = require_typeof()["default"];
		function _regeneratorValues(e) {
			if (null != e) {
				var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"];
				var r = 0;
				if (t) return t.call(e);
				if ("function" == typeof e.next) return e;
				if (!isNaN(e.length)) return { next: function next() {
					return e && r >= e.length && (e = void 0), {
						value: e && e[r++],
						done: !e
					};
				} };
			}
			throw new TypeError(_typeof(e) + " is not iterable");
		}
		module.exports = _regeneratorValues, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/regeneratorRuntime.js
	var require_regeneratorRuntime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var OverloadYield = require_OverloadYield();
		var regenerator = require_regenerator$1();
		var regeneratorAsync = require_regeneratorAsync();
		var regeneratorAsyncGen = require_regeneratorAsyncGen();
		var regeneratorAsyncIterator = require_regeneratorAsyncIterator();
		var regeneratorKeys = require_regeneratorKeys();
		var regeneratorValues = require_regeneratorValues();
		function _regeneratorRuntime() {
			"use strict";
			var r = regenerator();
			var e = r.m(_regeneratorRuntime);
			var t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor;
			function n(r) {
				var e = "function" == typeof r && r.constructor;
				return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name));
			}
			var o = {
				"throw": 1,
				"return": 2,
				"break": 3,
				"continue": 3
			};
			function a(r) {
				var e;
				var t;
				return function(n) {
					e || (e = {
						stop: function stop() {
							return t(n.a, 2);
						},
						"catch": function _catch() {
							return n.v;
						},
						abrupt: function abrupt(r, e) {
							return t(n.a, o[r], e);
						},
						delegateYield: function delegateYield(r, o, a) {
							return e.resultName = o, t(n.d, regeneratorValues(r), a);
						},
						finish: function finish(r) {
							return t(n.f, r);
						}
					}, t = function t(r, _t, o) {
						n.p = e.prev, n.n = e.next;
						try {
							return r(_t, o);
						} finally {
							e.next = n.n;
						}
					}), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n;
					try {
						return r.call(this, e);
					} finally {
						n.p = e.prev, n.n = e.next;
					}
				};
			}
			return (module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
				return {
					wrap: function wrap(e, t, n, o) {
						return r.w(a(e), t, n, o && o.reverse());
					},
					isGeneratorFunction: n,
					mark: r.m,
					awrap: function awrap(r, e) {
						return new OverloadYield(r, e);
					},
					AsyncIterator: regeneratorAsyncIterator,
					async: function async(r, e, t, o, u) {
						return (n(e) ? regeneratorAsyncGen : regeneratorAsync)(a(r), e, t, o, u);
					},
					keys: regeneratorKeys,
					values: regeneratorValues
				};
			}, module.exports.__esModule = true, module.exports["default"] = module.exports)();
		}
		module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}));

//#endregion
//#region node_modules/@babel/runtime/regenerator/index.js
	var require_regenerator = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var runtime = require_regeneratorRuntime()();
		module.exports = runtime;
		try {
			regeneratorRuntime = runtime;
		} catch (accidentalStrictMode) {
			if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
			else Function("r", "regeneratorRuntime = r")(runtime);
		}
	}));

//#endregion
//#region modules/web-cli/assets/js/core/data/errors/base-error.js
var import_regenerator = /* @__PURE__ */ __toESM(require_regenerator());
	init_defineProperty();
	function ownKeys(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	function _callSuper$9(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$9() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$9, "_callSuper");
	function _isNativeReflectConstruct$9() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$9 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$9, "_isNativeReflectConstruct");
	var BaseError = /*#__PURE__*/ function(_Error) {
		/**
		* Error constructor.
		*
		* @param {string} message
		* @param {string} code
		* @param {*}      data
		*/
		function BaseError() {
			var _this;
			var message = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
			var code = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
			var data = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
			_classCallCheck(this, BaseError);
			_this = _callSuper$9(this, BaseError, [message]);
			/**
			* The server error code.
			*
			* @type {string}
			*/
			_defineProperty(_this, "code", "");
			/**
			* Additional data about the current error.
			*
			* @type {*[]}
			*/
			_defineProperty(_this, "data", []);
			_this.code = code;
			_this.data = data;
			return _this;
		}
		/**
		* Notify a message when the error occurs.
		*/
		_inherits(BaseError, _Error);
		return _createClass(BaseError, [{
			key: "notify",
			value: function notify() {
				Console.error(_objectSpread({ message: this.message }, this));
			}
		}], [{
			key: "create",
			value: function create(message) {
				var code = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
				var data = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
				return new this(message, code, data);
			}
		}, {
			key: "getHTTPErrorCode",
			value: function getHTTPErrorCode() {
				force_method_implementation_default();
			}
		}]);
	}(/*#__PURE__*/ _wrapNativeSuper(Error));

//#endregion
//#region modules/web-cli/assets/js/core/data/errors/default-error.js
	function _callSuper$8(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$8() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$8, "_callSuper");
	function _isNativeReflectConstruct$8() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$8 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$8, "_isNativeReflectConstruct");
	var DefaultError = /*#__PURE__*/ function(_BaseError) {
		function DefaultError() {
			_classCallCheck(this, DefaultError);
			return _callSuper$8(this, DefaultError, arguments);
		}
		_inherits(DefaultError, _BaseError);
		return _createClass(DefaultError, null, [{
			key: "getHTTPErrorCode",
			value: function getHTTPErrorCode() {
				return 501;
			}
		}]);
	}(BaseError);

//#endregion
//#region modules/web-cli/assets/js/core/data/errors/error-404.js
	function _callSuper$7(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$7() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$7, "_callSuper");
	function _isNativeReflectConstruct$7() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$7 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$7, "_isNativeReflectConstruct");
	var Error404 = /*#__PURE__*/ function(_BaseError) {
		function Error404() {
			_classCallCheck(this, Error404);
			return _callSuper$7(this, Error404, arguments);
		}
		_inherits(Error404, _BaseError);
		return _createClass(Error404, [{
			key: "notify",
			value: function notify() {
				Console.warn(this.message);
			}
		}], [{
			key: "getHTTPErrorCode",
			value: function getHTTPErrorCode() {
				return 404;
			}
		}]);
	}(BaseError);

//#endregion
//#region modules/web-cli/assets/js/core/data/errors/index.js
	var errors_exports = /* @__PURE__ */ __exportAll({
		DefaultError: () => DefaultError,
		Error404: () => Error404
	});

//#endregion
//#region modules/web-cli/assets/js/modules/command-data.js
	init_defineProperty();
	function _callSuper$6(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$6() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$6, "_callSuper");
	function _isNativeReflectConstruct$6() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$6 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$6, "_isNativeReflectConstruct");
	/**
	* @name $e.modules.CommandData
	*/
	/**
	* @typedef {('create'|'delete'|'get'|'update'|'options')} DataTypes
	*/
	/**
	* @typedef {{}} RequestData
	*/
	/**
	* @typedef {import('../core/data/errors/base-error')} BaseError
	*/
	var CommandData = /*#__PURE__*/ function(_CommandBase) {
		function CommandData(args) {
			var _this$args$options;
			var _this;
			var commandsAPI = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $e.data;
			_classCallCheck(this, CommandData);
			_this = _callSuper$6(this, CommandData, [args, commandsAPI]);
			/**
			* Data returned from remote.
			*
			* @type {*}
			*/
			_defineProperty(_this, "data", void 0);
			/**
			* Fetch type.
			*
			* @type {DataTypes}
			*/
			_defineProperty(_this, "type", void 0);
			if ((_this$args$options = _this.args.options) !== null && _this$args$options !== void 0 && _this$args$options.type) _this.type = _this.args.options.type;
			return _this;
		}
		/**
		* Function getEndpointFormat().
		*
		* @return {null|string} endpoint format
		*/
		_inherits(CommandData, _CommandBase);
		return _createClass(CommandData, [
			{
				key: "getApplyMethods",
				value: function getApplyMethods() {
					var type = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.type;
					var before;
					var after;
					switch (type) {
						case "create":
							before = this.applyBeforeCreate;
							after = this.applyAfterCreate;
							break;
						case "delete":
							before = this.applyBeforeDelete;
							after = this.applyAfterDelete;
							break;
						case "get":
							before = this.applyBeforeGet;
							after = this.applyAfterGet;
							break;
						case "update":
							before = this.applyBeforeUpdate;
							after = this.applyAfterUpdate;
							break;
						case "options":
							before = this.applyBeforeOptions;
							after = this.applyAfterOptions;
							break;
						default: return false;
					}
					return {
						before: before.bind(this),
						after: after.bind(this)
					};
				}
			},
			{
				key: "getRequestData",
				value: function getRequestData() {
					return {
						type: this.type,
						args: this.args,
						timestamp: (/* @__PURE__ */ new Date()).getTime(),
						component: this.component,
						command: this.command,
						endpoint: $e.data.commandToEndpoint(this.command, JSON.parse(JSON.stringify(this.args)), this.constructor.getEndpointFormat())
					};
				}
			},
			{
				key: "apply",
				value: function apply() {
					var _this2 = this;
					var applyMethods = this.getApplyMethods();
					this.args = applyMethods.before(this.args);
					var requestData = this.getRequestData();
					return $e.data.fetch(requestData).then(function(data) {
						_this2.data = data;
						_this2.data = applyMethods.after(data, _this2.args);
						_this2.data = { data: _this2.data };
						_this2.data = Object.assign({ __requestData__: requestData }, _this2.data);
						return _this2.data;
					});
				}
			},
			{
				key: "applyBeforeCreate",
				value: function applyBeforeCreate() {
					return arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				}
			},
			{
				key: "applyAfterCreate",
				value: function applyAfterCreate(data) {
					arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
					return data;
				}
			},
			{
				key: "applyBeforeDelete",
				value: function applyBeforeDelete() {
					return arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				}
			},
			{
				key: "applyAfterDelete",
				value: function applyAfterDelete(data) {
					arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
					return data;
				}
			},
			{
				key: "applyBeforeGet",
				value: function applyBeforeGet() {
					return arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				}
			},
			{
				key: "applyAfterGet",
				value: function applyAfterGet(data) {
					arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
					return data;
				}
			},
			{
				key: "applyBeforeUpdate",
				value: function applyBeforeUpdate() {
					return arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				}
			},
			{
				key: "applyAfterUpdate",
				value: function applyAfterUpdate(data) {
					arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
					return data;
				}
			},
			{
				key: "applyBeforeOptions",
				value: function applyBeforeOptions() {
					return arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				}
			},
			{
				key: "applyAfterOptions",
				value: function applyAfterOptions(data) {
					arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
					return data;
				}
			},
			{
				key: "applyAfterCatch",
				value: function applyAfterCatch(e) {
					e.notify();
				}
			},
			{
				key: "onCatchApply",
				value: function onCatchApply(e) {
					var _e;
					var httpErrorCode = ((_e = e) === null || _e === void 0 || (_e = _e.data) === null || _e === void 0 ? void 0 : _e.status) || 501;
					var dataError = Object.values(errors_exports).find(function(error) {
						return error.getHTTPErrorCode() === httpErrorCode;
					});
					if (!dataError) dataError = DefaultError;
					e = dataError.create(e.message, e.code, e.data || []);
					this.runCatchHooks(e);
					this.applyAfterCatch(e);
				}
			}
		], [{
			key: "getInstanceType",
			value: function getInstanceType() {
				return "CommandData";
			}
		}, {
			key: "getEndpointFormat",
			value: function getEndpointFormat() {
				return null;
			}
		}]);
	}(CommandBase);

//#endregion
//#region assets/dev/js/editor/utils/files-upload-handler.js
	var FilesUploadHandler = /*#__PURE__*/ function() {
		function FilesUploadHandler() {
			_classCallCheck(this, FilesUploadHandler);
		}
		return _createClass(FilesUploadHandler, null, [
			{
				key: "isUploadEnabled",
				value: function isUploadEnabled(mediaType) {
					if (!["svg", "application/json"].includes(mediaType)) return true;
					return elementorCommon.config.filesUpload.unfilteredFiles;
				}
			},
			{
				key: "setUploadTypeCaller",
				value: function setUploadTypeCaller(frame) {
					frame.uploader.uploader.param("uploadTypeCaller", "elementor-wp-media-upload");
				}
			},
			{
				key: "getUnfilteredFilesNonAdminDialog",
				value: function getUnfilteredFilesNonAdminDialog() {
					return elementorCommon.dialogsManager.createWidget("alert", {
						id: "e-unfiltered-files-disabled-dialog",
						headerMessage: (0, _wordpress_i18n.__)("Sorry, you can't upload that file yet", "elementor"),
						message: (0, _wordpress_i18n.__)("This is because JSON files may pose a security risk.", "elementor") + "<br><br>" + (0, _wordpress_i18n.__)("To upload them anyway, ask the site administrator to enable unfiltered file uploads.", "elementor"),
						strings: { confirm: (0, _wordpress_i18n.__)("Got it", "elementor") }
					});
				}
			},
			{
				key: "getUnfilteredFilesNotEnabledDialog",
				value: function getUnfilteredFilesNotEnabledDialog(callback) {
					var elementorInstance = window.elementorAdmin || window.elementor;
					if (!elementorInstance.config.user.is_administrator) return this.getUnfilteredFilesNonAdminDialog();
					return elementorInstance.helpers.getSimpleDialog("e-enable-unfiltered-files-dialog", (0, _wordpress_i18n.__)("Enable Unfiltered File Uploads", "elementor"), (0, _wordpress_i18n.__)("Before you enable unfiltered files upload, note that such files include a security risk. Elementor does run a process to remove possible malicious code, but there is still risk involved when using such files.", "elementor"), (0, _wordpress_i18n.__)("Enable", "elementor"), function onConfirm() {
						elementorCommon.ajax.addRequest("enable_unfiltered_files_upload", {}, true);
						elementorCommon.config.filesUpload.unfilteredFiles = true;
						callback();
					});
				}
			},
			{
				key: "getUnfilteredFilesNotEnabledImportTemplateDialog",
				value: function getUnfilteredFilesNotEnabledImportTemplateDialog(callback) {
					if (!(window.elementorAdmin || window.elementor).config.user.is_administrator) return this.getUnfilteredFilesNonAdminDialog();
					return elementorCommon.dialogsManager.createWidget("confirm", {
						id: "e-enable-unfiltered-files-dialog-import-template",
						headerMessage: (0, _wordpress_i18n.__)("Enable Unfiltered File Uploads", "elementor"),
						message: (0, _wordpress_i18n.__)("Before you enable unfiltered files upload, note that such files include a security risk. Elementor does run a process to remove possible malicious code, but there is still risk involved when using such files.", "elementor") + "<br /><br />" + (0, _wordpress_i18n.__)("If you do not enable uploading unfiltered files, any SVG or JSON (including lottie) files used in the uploaded template will not be imported.", "elementor"),
						position: {
							my: "center center",
							at: "center center"
						},
						strings: {
							confirm: (0, _wordpress_i18n.__)("Enable and Import", "elementor"),
							cancel: (0, _wordpress_i18n.__)("Import Without Enabling", "elementor")
						},
						onConfirm: function onConfirm() {
							elementorCommon.ajax.addRequest("enable_unfiltered_files_upload", { success: function success() {
								elementorCommon.config.filesUpload.unfilteredFiles = true;
								callback();
							} }, true);
						},
						onCancel: function onCancel() {
							return callback();
						}
					});
				}
			}
		]);
	}();

//#endregion
//#region core/common/assets/js/components/wordpress/commands-data/media.js
	function _callSuper$5(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$5() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$5, "_callSuper");
	function _isNativeReflectConstruct$5() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$5 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$5, "_isNativeReflectConstruct");
	function _superPropGet$1(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	__name(_superPropGet$1, "_superPropGet");
	var Media = /*#__PURE__*/ function(_CommandData) {
		function Media() {
			_classCallCheck(this, Media);
			return _callSuper$5(this, Media, arguments);
		}
		_inherits(Media, _CommandData);
		return _createClass(Media, [
			{
				key: "validateArgs",
				value: function validateArgs() {
					this.requireArgumentInstance("file", File);
				}
			},
			{
				key: "getRequestData",
				value: function getRequestData() {
					var requestData = _superPropGet$1(Media, "getRequestData", this, 3)([]);
					requestData.namespace = "wp";
					requestData.version = "2";
					return requestData;
				}
			},
			{
				key: "applyBeforeCreate",
				value: function applyBeforeCreate(args) {
					var _args$options;
					args.headers = {
						"Content-Disposition": "attachment; filename=".concat(this.file.name),
						"Content-Type": this.file.type
					};
					args.query = { uploadTypeCaller: "elementor-wp-media-upload" };
					args.data = this.file;
					if ((_args$options = args.options) !== null && _args$options !== void 0 && _args$options.progress) this.toast = elementor.notifications.showToast({
						message: (0, _wordpress_i18n.__)("Uploading..."),
						sticky: true
					});
					return args;
				}
			},
			{
				key: "applyAfterCreate",
				value: function applyAfterCreate(data, args) {
					var _args$options2;
					if ((_args$options2 = args.options) !== null && _args$options2 !== void 0 && _args$options2.progress) this.toast.hide();
					return data;
				}
			},
			{
				key: "run",
				value: function() {
					var _run = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee() {
						return import_regenerator.default.wrap(function(_context) {
							while (1) switch (_context.prev = _context.next) {
								case 0:
									this.file = this.args.file;
									if (!(this.file.size > parseInt(window._wpPluploadSettings.defaults.filters.max_file_size, 10))) {
										_context.next = 1;
										break;
									}
									throw new Error((0, _wordpress_i18n.__)("The file exceeds the maximum upload size for this site.", "elementor"));
								case 1:
									if (!(!window._wpPluploadSettings.defaults.filters.mime_types[0].extensions.split(",").includes(this.file.name.split(".").pop()) && !elementor.config.filesUpload.unfilteredFiles)) {
										_context.next = 2;
										break;
									}
									FilesUploadHandler.getUnfilteredFilesNotEnabledDialog(function() {}).show();
									return _context.abrupt("return");
								case 2:
									_context.next = 3;
									return _superPropGet$1(Media, "run", this, 3)([]);
								case 3: return _context.abrupt("return", _context.sent);
								case 4:
								case "end": return _context.stop();
							}
						}, _callee, this);
					}));
					function run() {
						return _run.apply(this, arguments);
					}
					return run;
				}()
			}
		], [{
			key: "getEndpointFormat",
			value: function getEndpointFormat() {
				return "media";
			}
		}]);
	}(CommandData);

//#endregion
//#region core/common/assets/js/components/wordpress/commands-data/index.js
	var commands_data_exports$1 = /* @__PURE__ */ __exportAll({ Media: () => Media });

//#endregion
//#region core/common/assets/js/components/wordpress/component.js
	function _callSuper$4(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$4() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$4, "_callSuper");
	function _isNativeReflectConstruct$4() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$4 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$4, "_isNativeReflectConstruct");
	var Component$1 = /*#__PURE__*/ function(_ComponentBase) {
		function Component() {
			_classCallCheck(this, Component);
			return _callSuper$4(this, Component, arguments);
		}
		_inherits(Component, _ComponentBase);
		return _createClass(Component, [{
			key: "getNamespace",
			value: function getNamespace() {
				return "wp";
			}
		}, {
			key: "defaultData",
			value: function defaultData() {
				return this.importCommands(commands_data_exports$1);
			}
		}]);
	}(ComponentBase);

//#endregion
//#region core/common/modules/event-tracker/assets/js/data/commands-data/index.js
	var commands_data_exports = /* @__PURE__ */ __exportAll({ Index: () => Index });
	function _callSuper$3(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$3() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$3, "_callSuper");
	function _isNativeReflectConstruct$3() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$3 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$3, "_isNativeReflectConstruct");
	var Index = /*#__PURE__*/ function(_CommandData) {
		function Index() {
			_classCallCheck(this, Index);
			return _callSuper$3(this, Index, arguments);
		}
		_inherits(Index, _CommandData);
		return _createClass(Index, null, [{
			key: "getEndpointFormat",
			value: function getEndpointFormat() {
				return "send-event";
			}
		}]);
	}(CommandData);

//#endregion
//#region core/common/modules/event-tracker/assets/js/data/component.js
	function _callSuper$2(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$2() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$2, "_callSuper");
	function _isNativeReflectConstruct$2() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$2 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$2, "_isNativeReflectConstruct");
	var Component = /*#__PURE__*/ function(_ComponentBase) {
		function Component() {
			_classCallCheck(this, Component);
			return _callSuper$2(this, Component, arguments);
		}
		_inherits(Component, _ComponentBase);
		return _createClass(Component, [{
			key: "getNamespace",
			value: function getNamespace() {
				return "event-tracker";
			}
		}, {
			key: "defaultData",
			value: function defaultData() {
				return this.importCommands(commands_data_exports);
			}
		}]);
	}(ComponentBase);

//#endregion
//#region assets/dev/js/utils/time.js
/**
	* Returns the timestamp in ISO8601 format with the UTC timezone offset.
	*
	* @since 3.6.0
	*
	* @param {Date} date
	* @return {Date} timestamp
	*/
	function getUserTimestamp() {
		var date = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Date();
		var timezoneOffset = date.getTimezoneOffset();
		var UTCTimestamp = (/* @__PURE__ */ new Date(date.getTime() - timezoneOffset * 6e4)).toISOString();
		UTCTimestamp = UTCTimestamp.slice(0, -1);
		var decimalTimezoneOffset = timezoneOffset / 60;
		var sign = 0 <= decimalTimezoneOffset ? "+" : "-";
		var hours = Math.abs(Math.floor(decimalTimezoneOffset));
		var minutes = Math.abs(decimalTimezoneOffset % 1) * 60;
		var addZeroToHour = 10 > hours ? "0" : "";
		var addZeroToMinutes = 10 > minutes ? "0" : "";
		var formattedTimezoneOffset = sign + addZeroToHour + hours + ":" + addZeroToMinutes + minutes;
		return UTCTimestamp + formattedTimezoneOffset;
	}

//#endregion
//#region core/common/modules/event-tracker/assets/js/events.js
	var Events = /*#__PURE__*/ function() {
		function Events() {
			_classCallCheck(this, Events);
		}
		return _createClass(Events, [{
			key: "dispatchEvent",
			value: function dispatchEvent(eventData) {
				if (!eventData) return;
				eventData.ts = getUserTimestamp();
				$e.data.create("event-tracker/index", { event_data: eventData });
			}
		}]);
	}();

//#endregion
//#region core/common/modules/events-manager/assets/js/events-config.js
	var eventsConfig = {
		appTypes: {
			editor: "editor",
			wpAdmin: "wpadmin",
			wpDash: "wpdash"
		},
		windowNames: { sidebarMenu: "sidebar_menu" },
		targetTypes: {
			dropdownItem: "dropdown_item",
			button: "button",
			tab: "tab",
			toggle: "toggle",
			searchInput: "search_input",
			searchResult: "search_result",
			buttons: "buttons",
			searchWidget: "search_widget",
			wpDashAdminMenuItem: "wpdash_admin_menu_item",
			wpDashEditorMenu: "wpdash_editor_menu",
			wpDashSubMenuItem: "wpdash_sub_menu_item",
			link: "link"
		},
		interactionResults: {
			actionSelected: "action_selected",
			navigate: "navigate",
			create: "create",
			sessionEnd: "session_end",
			tabChanged: "tab_changed",
			assetInserted: "asset_inserted",
			assetFavorite: "asset_favorite",
			aiGenerate: "ai_generate",
			resultsUpdated: "results_updated",
			noResults: "no_results",
			selected: "selected",
			promotionViewed: "promotion_viewed",
			upgradeNow: "upgrade_now",
			elementorSideMenuOpened: "elementor_side_menu_opened",
			editorSubMenuOpened: "wpdash_editor_sub_menu_opened",
			themeBuilderPromotionWindow: "theme_builder_promotion_window",
			pageOpened: "page_opened",
			expanded: "expanded",
			collapsed: "collapsed"
		},
		targetNames: {
			publishDropdown: {
				saveDraft: "save_draft",
				saveAsTemplate: "save_as_template",
				viewPage: "view_page",
				copyAndShare: "copy_and_share"
			},
			pageList: { addNewPage: "add_new_page" }
		},
		triggers: {
			click: "Click",
			rightClick: "Right Click",
			doubleClick: "Double Click",
			accordionClick: "Accordion Click",
			toggleClick: "Toggle Click",
			dropdownClick: "Click Dropdown",
			editorLoaded: "Editor Loaded",
			visible: "Visible",
			pageLoaded: "Page Loaded",
			typing: "Typing",
			tabSelect: "Tab Select",
			insert: "Insert",
			hover: "Hover"
		},
		locations: {
			widgetPanel: "Widget Panel",
			topBar: "Top Bar",
			sidebar: "Sidebar",
			elementorEditor: "Elementor Editor",
			templatesLibrary: { library: "Templates Library" },
			app: {
				import: "Import Kit",
				export: "Export Kit",
				kitLibrary: "Kit Library",
				cloudKitLibrary: "Cloud Kit Library"
			},
			variables: "Variables Panel",
			variablesManager: "Variables Manager",
			admin: "WP admin",
			wpDashAdmin: "wpdash_admin",
			structurePanel: "Structure Panel",
			canvas: "Canvas",
			leftPanel: "Left Panel",
			elementorLibrary: "Elementor Library",
			components: { instanceEditingPanel: "Instance Editing Panel" }
		},
		secondaryLocations: {
			layout: "Layout Section",
			basic: "Basic Section",
			"pro-elements": "Pro Section",
			general: "General Section",
			"theme-elements": "Site Section",
			"theme-elements-single": "Single Section",
			"woocommerce-elements": "WooCommerce Section",
			wordpress: "WordPress Section",
			categories: "Widgets Tab",
			global: "Globals Tab",
			"whats-new": "What's New",
			"document-settings": "Document Settings icon",
			"preview-page": "Preview Page",
			"publish-button": "Publish Button",
			"widget-panel": "Widget Panel Icon",
			finder: "Finder",
			help: "Help",
			elementorLogoDropdown: "top_bar_elementor_logo_dropdown",
			elementorLogo: "Elementor Logo",
			eLogoMenu: "E-logo Menu",
			notes: "Notes",
			siteSettings: "Site Settings",
			structure: "Structure",
			documentNameDropdown: "Document Name dropdown",
			responsiveControls: "Responsive controls",
			launchpad: "launchpad",
			checklistHeader: "Checklist Header",
			checklistSteps: "Checklist Steps",
			userPreferences: "User Preferences",
			contextMenu: "Context Menu",
			templateLibrary: {
				saveModal: "Save to Modal",
				moveModal: "Move to Modal",
				bulkMoveModal: "Bulk Move to Modal",
				copyModal: "Copy to Modal",
				bulkCopyModal: "Bulk Copy to Modal",
				saveModalSelectFolder: "Save to Modal - select folder",
				saveModalSelectConnect: "Save to Modal - connect",
				saveModalSelectUpgrade: "Save to Modal - upgrade",
				importModal: "Import Modal",
				newFolderModal: "New Folder Modal",
				deleteDialog: "Delete Dialog",
				deleteFolderDialog: "Delete Folder Dialog",
				renameDialog: "Rename Dialog",
				createFolderDialog: "Create Folder Dialog",
				applySettingsDialog: "Apply Settings Dialog",
				cloudTab: "Cloud Tab",
				siteTab: "Site Tab",
				cloudTabFolder: "Cloud Tab - Folder",
				cloudTabConnect: "Cloud Tab - Connect",
				cloudTabUpgrade: "Cloud Tab - Upgrade",
				morePopup: "Context Menu",
				quotaBar: "Quota Bar"
			},
			kitLibrary: {
				cloudKitLibrary: "kits_cloud_library",
				cloudKitLibraryConnect: "kits_cloud_library_connect",
				cloudKitLibraryUpgrade: "kits_cloud_library_upgrade",
				kitExportCustomization: "kit_export_customization",
				kitExport: "kit_export",
				kitExportCustomizationEdit: "kit_export_customization_edit",
				kitExportSummary: "kit_export_summary",
				kitImportUploadBox: "kit_import_upload_box",
				kitImportCustomization: "kit_import_customization",
				kitImportSummary: "kit_import_summary"
			},
			variablesPopover: "Variables Popover",
			admin: {
				pluginToolsTab: "plugin_tools_tab",
				pluginWebsiteTemplatesTab: "plugin_website_templates_tab"
			},
			componentsTab: "Components Tab",
			canvasElement: "Canvas Element",
			publishDropdown: "Publish Dropdown",
			pageListDropdown: "Page List Dropdown",
			emptyBox: "Empty Box",
			searchBar: "Search Bar",
			finderResults: "Finder Results",
			libraryTabs: "Library Tabs",
			assetCard: "Asset Card",
			wpDashElementorCoreMenu: "elementor_editor_core_menu",
			wpDashElementorCoreSubMenu: "elementor_editor_core_sub_menu",
			wpDashThemeBuilder: "wpdash_core_sub_menu_theme_builder"
		},
		elements: {
			accordionSection: "Accordion section",
			buttonIcon: "Button Icon",
			mainCta: "Main CTA",
			button: "Button",
			link: "Link",
			dropdown: "Dropdown",
			toggle: "Toggle",
			launchpadChecklist: "Checklist popup"
		},
		names: {
			v1: {
				layout: "v1_widgets_tab_layout_section",
				basic: "v1_widgets_tab_basic_section",
				"pro-elements": "v1_widgets_tab_pro_section",
				general: "v1_widgets_tab_general_section",
				"theme-elements": "v1_widgets_tab_site_section",
				"theme-elements-single": "v1_widgets_tab_single_section",
				"woocommerce-elements": "v1_widgets_tab_woocommerce_section",
				wordpress: "v1_widgets_tab_wordpress_section",
				categories: "v1_widgets_tab",
				global: "v1_globals_tab"
			},
			topBar: {
				whatsNew: "top_bar_whats_new",
				documentSettings: "top_bar_document_settings_icon",
				previewPage: "top_bar_preview_page",
				publishButton: "top_bar_publish_button",
				widgetPanel: "top_bar_widget_panel_icon",
				finder: "top_bar_finder",
				help: "top_bar_help",
				history: "top_bar_elementor_logo_dropdown_history",
				userPreferences: "top_bar_elementor_logo_dropdown_user_preferences",
				keyboardShortcuts: "top_bar_elementor_logo_dropdown_keyboard_shortcuts",
				exitToWordpress: "top_bar_elementor_logo_dropdown_exit_to_wordpress",
				themeBuilder: "top_bar_elementor_logo_dropdown_theme_builder",
				notes: "top_bar_notes",
				siteSettings: "top_bar_site_setting",
				structure: "top_bar_structure",
				documentNameDropdown: "top_bar_document_name_dropdown",
				responsiveControls: "top_bar_responsive_controls",
				launchpadOn: "top_bar_checklist_icon_show",
				launchpadOff: "top_bar_checklist_icon_hide",
				elementorLogoDropdown: "open_e_menu",
				connectAccount: "connect_account",
				accountConnected: "account_connected"
			},
			elementorEditor: {
				editorLoaded: "editor_loaded",
				checklist: {
					checklistHeaderClose: "checklist_header_close_icon",
					checklistFirstPopup: "checklist popup triggered"
				},
				userPreferences: {
					checklistShow: "checklist_userpreferences_toggle_show",
					checklistHide: "checklist_userpreferences_toggle_hide"
				}
			},
			variables: {
				open: "open_variables_popover",
				add: "add_new_variable",
				connect: "connect_variable",
				save: "save_new_variable",
				update: "update_variable",
				openManager: "open_variables_manager",
				saveChanges: "save_variables_changes",
				delete: "delete_variable",
				variableSyncToV3: "variable_sync_to_v3"
			},
			design_system: {
				importOpened: "design_system_import_opened",
				fileSelected: "design_system_file_selected",
				validationFailed: "design_system_validation_failed",
				conflictChoice: "design_system_conflict_choice",
				confirmed: "design_system_import_confirmed",
				imported: "design_system_imported",
				importFailed: "design_system_import_failed",
				export: "design_system_export",
				opened: "design_system_opened"
			},
			components: {
				createClicked: "component_create_clicked",
				createCancelled: "component_creation_cancelled",
				created: "component_created",
				instanceAdded: "component_instance_added",
				edited: "component_edited",
				propertiesPanelOpened: "component_properties_panel_opened",
				propertiesGroupCreated: "component_properties_group_created",
				propertyExposed: "component_property_exposed",
				propertyRemoved: "component_property_removed",
				detached: "component_detached"
			},
			global_classes: {
				classApplied: "class_applied",
				classRemoved: "class_removed",
				classManagerFilterCleared: "class_manager_filter_cleared",
				classDeleted: "class_deleted",
				classPublishConflict: "class_publish_conflict",
				classRenamed: "class_renamed",
				classCreated: "class_created",
				classManagerSearched: "class_manager_searched",
				classManagerFiltersOpened: "class_manager_filters_opened",
				classManagerOpened: "class_manager_opened",
				classManagerReorder: "class_manager_reorder",
				classManagerFilterUsed: "class_manager_filter_used",
				classUsageLocate: "class_usage_locate",
				classUsageHovered: "class_usage_hovered",
				classStyled: "class_styled",
				classStateClicked: "class_state_clicked",
				classUsageClicked: "class_usage_clicked",
				classDuplicate: "class_duplicate",
				classSyncToV3PopupShown: "class_sync_to_v3_popup_shown",
				classSyncToV3: "class_sync_to_v3",
				classSyncToV3PopupClick: "class_sync_to_v3_popup_click"
			},
			editorOne: {
				topBarPublishDropdown: "top_bar_publish_dropdown",
				topBarPageList: "top_bar_page_list",
				siteSettingsSession: "site_settings_session",
				eLibraryNav: "e_library_nav",
				eLibraryInsert: "e_library_insert",
				eLibraryFavorite: "e_library_favorite",
				eLibraryGenerateAi: "e_library_generate_ai",
				finderSearchInput: "finder_search_input",
				finderResultSelect: "finder_result_select",
				canvasEmptyBoxAction: "canvas_empty_box_action",
				widgetPanelSearch: "widget_panel_search",
				wpDashElementorMenuClick: "wpdash_elementor_menu_click",
				wpDashEditorSubMenuHover: "wpdash_editor_sub_menu_hover",
				wpDashThemeBuilderClick: "wpdash_theme_builder_click",
				sidebarMenuItemClicked: "sidebar_menu_item_clicked",
				sidebarMenuGroupToggled: "sidebar_menu_group_toggled"
			},
			interactions: { created: "interactions_created" },
			promotions: {
				viewPromotion: "view_promotion",
				upgradePromotionClick: "upgrade_promotion_click"
			}
		}
	};

//#endregion
//#region core/common/modules/events-manager/assets/js/module.js
/**
	* Events Manager - telemetry removed.
	*
	* This self-maintained build ships no analytics SDK and performs no event
	* reporting: `mixpanel-browser` is no longer imported, so the bundler drops the
	* whole SDK from common.js (483 KB -> 112 KB).
	*
	* The original public surface is preserved so that `@elementor/events` and every
	* downstream tracking helper keep compiling and simply become no-ops.
	*
	* `eventsConfig` MUST stay. It is a pure data object (event-name maps, no
	* network calls), and unrelated editor code reads it directly without optional
	* chaining - e.g. `Component.activateTab()` does
	*   elementorCommon.eventsManager.config.names.v1[tab]
	* and `editorPreferences` does
	*   elementorCommon.eventsManager.config.names.elementorEditor.userPreferences[name]
	* Dropping `config` makes those throw
	*   TypeError: Cannot read properties of undefined (reading 'names')
	* during the initial panel route, which is why it is retained here.
	*/
	init_defineProperty();
	function _callSuper$1(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$1() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$1, "_callSuper");
	function _isNativeReflectConstruct$1() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$1 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$1, "_isNativeReflectConstruct");
	var _default = /*#__PURE__*/ function(_elementorModules$Mod) {
		function _default() {
			var _this;
			_classCallCheck(this, _default);
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			_this = _callSuper$1(this, _default, [].concat(args));
			_defineProperty(_this, "trackingEnabled", false);
			_defineProperty(_this, "availableExperiments", []);
			_defineProperty(_this, "config", eventsConfig);
			return _this;
		}
		_inherits(_default, _elementorModules$Mod);
		return _createClass(_default, [
			{
				key: "onInit",
				value: function onInit() {}
			},
			{
				key: "initializeMixpanel",
				value: function initializeMixpanel(onLoaded) {
					onLoaded === null || onLoaded === void 0 || onLoaded();
				}
			},
			{
				key: "enableTracking",
				value: function enableTracking() {}
			},
			{
				key: "dispatchEvent",
				value: function dispatchEvent() {}
			},
			{
				key: "featureFlagIsActive",
				value: function() {
					var _featureFlagIsActive = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee() {
						return import_regenerator.default.wrap(function(_context) {
							while (1) switch (_context.prev = _context.next) {
								case 0: return _context.abrupt("return", false);
								case 1:
								case "end": return _context.stop();
							}
						}, _callee);
					}));
					function featureFlagIsActive() {
						return _featureFlagIsActive.apply(this, arguments);
					}
					return featureFlagIsActive;
				}()
			},
			{
				key: "getExperimentVariant",
				value: function() {
					var _getExperimentVariant = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee2(experimentName) {
						var defaultValue;
						var _args2 = arguments;
						return import_regenerator.default.wrap(function(_context2) {
							while (1) switch (_context2.prev = _context2.next) {
								case 0:
									defaultValue = _args2.length > 1 && _args2[1] !== void 0 ? _args2[1] : "control";
									return _context2.abrupt("return", defaultValue);
								case 1:
								case "end": return _context2.stop();
							}
						}, _callee2);
					}));
					function getExperimentVariant(_x) {
						return _getExperimentVariant.apply(this, arguments);
					}
					return getExperimentVariant;
				}()
			},
			{
				key: "startExperiment",
				value: function startExperiment() {}
			},
			{
				key: "isMixpanelReady",
				value: function isMixpanelReady() {
					return false;
				}
			},
			{
				key: "canSendEvents",
				value: function canSendEvents() {
					return false;
				}
			},
			{
				key: "getMixpanelInstance",
				value: function getMixpanelInstance() {}
			}
		]);
	}(elementorModules.Module);

//#endregion
//#region assets/dev/js/utils/notifications.js
	var require_notifications = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		init_defineProperty();
		function ownKeys(e, r) {
			var t = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var o = Object.getOwnPropertySymbols(e);
				r && (o = o.filter(function(r) {
					return Object.getOwnPropertyDescriptor(e, r).enumerable;
				})), t.push.apply(t, o);
			}
			return t;
		}
		function _objectSpread(e) {
			for (var r = 1; r < arguments.length; r++) {
				var t = null != arguments[r] ? arguments[r] : {};
				r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
					_defineProperty(e, r, t[r]);
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
					Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
				});
			}
			return e;
		}
		module.exports = elementorModules.Module.extend({
			initToast: function initToast() {
				var toast = elementorCommon.dialogsManager.createWidget("buttons", {
					id: "elementor-toast",
					position: {
						my: "center bottom",
						at: "center bottom-10",
						of: "#elementor-panel-inner",
						autoRefresh: true
					},
					hide: {
						onClick: true,
						auto: true,
						autoDelay: 1e4
					},
					effects: {
						show: function show() {
							var $widget = toast.getElements("widget");
							$widget.show();
							toast.refreshPosition();
							var top = parseInt($widget.css("top"), 10);
							$widget.hide().css("top", top + 100);
							$widget.animate({
								opacity: "show",
								height: "show",
								paddingBottom: "show",
								paddingTop: "show",
								top
							}, {
								easing: "linear",
								duration: 300
							});
						},
						hide: function hide() {
							var $widget = toast.getElements("widget");
							var top = parseInt($widget.css("top"), 10);
							$widget.animate({
								opacity: "hide",
								height: "hide",
								paddingBottom: "hide",
								paddingTop: "hide",
								top: top + 100
							}, {
								easing: "linear",
								duration: 300
							});
						}
					},
					button: { tag: "button" }
				});
				toast.getElements("widget").attr({
					role: "status",
					"aria-live": "polite",
					"aria-atomic": "true"
				});
				this.getToast = function() {
					return toast;
				};
			},
			showToast: function showToast(options) {
				var toast = this.getToast();
				toast.setMessage(options.message);
				toast.getElements("buttonsWrapper").empty();
				toast.focusedButton = null;
				toast.buttons = [];
				var isPositionValid = this.isPositionValid(options === null || options === void 0 ? void 0 : options.position);
				if (!isPositionValid) this.positionToWindow();
				if (options !== null && options !== void 0 && options.position && isPositionValid) toast.setSettings("position", options.position);
				if (options.buttons) options.buttons.forEach(function(button) {
					toast.addButton(button);
				});
				if (options.classes) toast.getElements("widget").addClass(options.classes);
				if (options.sticky) toast.setSettings({ hide: {
					auto: false,
					onClick: false
				} });
				return toast.show();
			},
			isPositionValid: function isPositionValid(position) {
				var _position$of;
				var positionToCheck = (_position$of = position === null || position === void 0 ? void 0 : position.of) !== null && _position$of !== void 0 ? _position$of : this.getToast().getSettings("position").of;
				if (!positionToCheck) return false;
				return !!document.querySelector(positionToCheck);
			},
			positionToWindow: function positionToWindow() {
				var toast = this.getToast();
				var position = _objectSpread(_objectSpread({}, toast.getSettings("position")), {}, {
					my: "right top",
					at: "right-10 top+42",
					of: ""
				});
				toast.setSettings("position", position);
				toast.getElements("widget").addClass("dialog-position-window");
			},
			onInit: function onInit() {
				this.initToast();
			}
		});
	}));

//#endregion
//#region core/common/assets/js/common.js
	var import_notifications = /* @__PURE__ */ __toESM(require_notifications());
	function _callSuper(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	function _isNativeReflectConstruct() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	function _superPropGet(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	var ElementorCommonApp = /*#__PURE__*/ function(_elementorModules$Vie) {
		function ElementorCommonApp() {
			_classCallCheck(this, ElementorCommonApp);
			return _callSuper(this, ElementorCommonApp, arguments);
		}
		_inherits(ElementorCommonApp, _elementorModules$Vie);
		return _createClass(ElementorCommonApp, [
			{
				key: "setMarionetteTemplateCompiler",
				value: function setMarionetteTemplateCompiler() {
					Marionette.TemplateCache.prototype.loadTemplate = function(templateId) {
						var $template = "#" === templateId.charAt(0) ? Backbone.$("script" + templateId) : Backbone.$(templateId);
						if (!$template.length) throw new Marionette.Error({
							name: "NoTemplateError",
							message: "Could not find template: \"" + templateId + "\""
						});
						return $template.html();
					};
					Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate, options) {
						options = {
							evaluate: /<#([\s\S]+?)#>/g,
							interpolate: /{{{([\s\S]+?)}}}/g,
							escape: /{{([^}]+?)}}(?!})/g
						};
						return _.template(rawTemplate, options);
					};
				}
			},
			{
				key: "getDefaultElements",
				value: function getDefaultElements() {
					return {
						$window: jQuery(window),
						$document: jQuery(document),
						$body: jQuery(document.body)
					};
				}
			},
			{
				key: "initComponents",
				value: function initComponents() {
					this.events = new Events();
					this.eventsManager = new _default();
					this.debug = new import_debug.default();
					this.helpers = new Helpers();
					this.storage = new _default$11();
					this.dialogsManager = new DialogsManager.Instance();
					this.notifications = new import_notifications.default();
					this.api = window.$e;
					$e.components.register(new Component());
					elementorCommon.elements.$window.on("elementor:init-components", function() {
						$e.components.register(new Component$1());
					});
					this.initModules();
				}
			},
			{
				key: "initModules",
				value: function initModules() {
					var _this = this;
					var activeModules = this.config.activeModules;
					var modules = {
						ajax: _default$10,
						finder: _default$2
					};
					activeModules.forEach(function(name) {
						if (modules[name]) _this[name] = new modules[name](_this.config[name]);
					});
				}
			},
			{
				key: "compileArrayTemplateArgs",
				value: function compileArrayTemplateArgs(template, templateArgs) {
					return template.replace(/%(?:(\d+)\$)?s/g, function(match, number) {
						if (!number) number = 1;
						number--;
						return void 0 !== templateArgs[number] ? templateArgs[number] : match;
					});
				}
			},
			{
				key: "compileObjectTemplateArgs",
				value: function compileObjectTemplateArgs(template, templateArgs) {
					return template.replace(/{{(?:([ \w]+))}}/g, function(match, name) {
						return templateArgs[name] ? templateArgs[name] : match;
					});
				}
			},
			{
				key: "compileTemplate",
				value: function compileTemplate(template, templateArgs) {
					return jQuery.isPlainObject(templateArgs) ? this.compileObjectTemplateArgs(template, templateArgs) : this.compileArrayTemplateArgs(template, templateArgs);
				}
			},
			{
				key: "translate",
				value: function translate(stringKey, context, templateArgs, i18nStack) {
					if (context) i18nStack = this.config[context].i18n;
					if (!i18nStack) i18nStack = this.config.i18n;
					var string = i18nStack[stringKey];
					if (void 0 === string) string = stringKey;
					if (templateArgs) string = this.compileTemplate(string, templateArgs);
					return string;
				}
			},
			{
				key: "onInit",
				value: function onInit() {
					_superPropGet(ElementorCommonApp, "onInit", this, 3)([]);
					this.config = elementorCommonConfig;
					this.setMarionetteTemplateCompiler();
				}
			}
		]);
	}(elementorModules.ViewModule);
	window.elementorCommon = new ElementorCommonApp();
	elementorCommon.initComponents();

//#endregion
})(elementorVendors.reduxToolkit, wp.i18n);
//# sourceMappingURL=common.js.map