(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!****************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/main.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 10));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 135));\n\nvar _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 138));\n\nvar _uviewUi = _interopRequireDefault(__webpack_require__(/*! uview-ui */ 146));\n\n\nvar _mescrollBody = _interopRequireDefault(__webpack_require__(/*! @/components/mescroll-uni/mescroll-body.vue */ 172));\nvar _mescrollUni = _interopRequireDefault(__webpack_require__(/*! @/components/mescroll-uni/mescroll-uni.vue */ 189));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}_vue.default.use(_uviewUi.default);\n_vue.default.component('mescroll-body', _mescrollBody.default);\n_vue.default.component('mescroll-uni', _mescrollUni.default);\n_vue.default.use(__webpack_require__(/*! vue-moment */ 194));\n\n_vue.default.config.productionTip = false;\n\n_vue.default.prototype.$store = _store.default;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({\n  store: _store.default },\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJ1c2UiLCJ1VmlldyIsImNvbXBvbmVudCIsIk1lc2Nyb2xsQm9keSIsIk1lc2Nyb2xsVW5pIiwicmVxdWlyZSIsImNvbmZpZyIsInByb2R1Y3Rpb25UaXAiLCJwcm90b3R5cGUiLCIkc3RvcmUiLCJzdG9yZSIsIkFwcCIsIm1wVHlwZSIsImFwcCIsIiRtb3VudCJdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQW1CO0FBQ25COztBQUVBOztBQUVBOzs7QUFHQTtBQUNBLHNILHduQ0FIQUEsYUFBSUMsR0FBSixDQUFRQyxnQkFBUjtBQUlBRixhQUFJRyxTQUFKLENBQWMsZUFBZCxFQUErQkMscUJBQS9CO0FBQ0FKLGFBQUlHLFNBQUosQ0FBYyxjQUFkLEVBQThCRSxvQkFBOUI7QUFDQUwsYUFBSUMsR0FBSixDQUFRSyxtQkFBTyxDQUFDLHFCQUFELENBQWY7O0FBRUFOLGFBQUlPLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQVIsYUFBSVMsU0FBSixDQUFjQyxNQUFkLEdBQXVCQyxjQUF2Qjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlkLFlBQUo7QUFDWFcsT0FBSyxFQUFMQSxjQURXO0FBRVJDLFlBRlEsRUFBWjs7QUFJQUUsR0FBRyxDQUFDQyxNQUFKIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7aW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcblxyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcclxuXHJcbmltcG9ydCB1VmlldyBmcm9tIFwidXZpZXctdWlcIjtcclxuVnVlLnVzZSh1Vmlldyk7XHJcblxyXG5pbXBvcnQgTWVzY3JvbGxCb2R5IGZyb20gXCJAL2NvbXBvbmVudHMvbWVzY3JvbGwtdW5pL21lc2Nyb2xsLWJvZHkudnVlXCJcclxuaW1wb3J0IE1lc2Nyb2xsVW5pIGZyb20gXCJAL2NvbXBvbmVudHMvbWVzY3JvbGwtdW5pL21lc2Nyb2xsLXVuaS52dWVcIlxyXG5WdWUuY29tcG9uZW50KCdtZXNjcm9sbC1ib2R5JywgTWVzY3JvbGxCb2R5KVxyXG5WdWUuY29tcG9uZW50KCdtZXNjcm9sbC11bmknLCBNZXNjcm9sbFVuaSlcclxuVnVlLnVzZShyZXF1aXJlKCd2dWUtbW9tZW50JykpO1xyXG5cclxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcclxuXHJcblZ1ZS5wcm90b3R5cGUuJHN0b3JlID0gc3RvcmVcclxuXHJcbkFwcC5tcFR5cGUgPSAnYXBwJ1xyXG5cclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XHJcblx0c3RvcmUsXHJcblx0Li4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*******************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/pages.json ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/@dcloudio/webpack-uni-pages-loader/lib/index.js):\nError: uni-app-compiler: Unexpected end of JSON input\n    at parseJson (C:\\MY\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@dcloudio\\uni-cli-shared\\lib\\json.js:20:13)\n    at parseManifestJson (C:\\MY\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@dcloudio\\uni-cli-shared\\lib\\manifest.js:32:10)\n    at Object.module.exports (C:\\MY\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@dcloudio\\webpack-uni-pages-loader\\lib\\index-new.js:53:24)\n    at Object.module.exports (C:\\MY\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@dcloudio\\webpack-uni-pages-loader\\lib\\index.js:49:35)");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 9 */,
/* 10 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 11 */,
/* 12 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 13 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, createNamespacedHelpers, install, mapActions, mapGetters, mapMutations, mapState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/*!
 * vuex v3.4.0
 * (c) 2020 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key)
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};

/* harmony default export */ __webpack_exports__["default"] = (index);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 8)))

/***/ }),
/* 14 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 54);

/***/ }),
/* 54 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 55);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 55 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */
/*!****************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/App.vue ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 136);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDZ0s7QUFDaEssZ0JBQWdCLDZLQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjEzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50c1xudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///135\n");

/***/ }),
/* 136 */
/*!*****************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 137);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1oQixDQUFnQix5akJBQUcsRUFBQyIsImZpbGUiOiIxMzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///136\n");

/***/ }),
/* 137 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/MY/Finance/nice-trade/trading-cat/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\nvar _vuex = __webpack_require__(/*! vuex */ 13);function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =\n\n\n\n\n{\n  onLaunch: function onLaunch() {\n    var uniIdToken = uni.getStorageSync('uniIdToken');\n    if (uniIdToken) {\n      this.login(uni.getStorageSync('username'));\n    }\n    __f__(\"log\", 'App Launch', \" at App.vue:13\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:16\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:19\");\n  },\n  methods: _objectSpread({},\n  (0, _vuex.mapMutations)(['login'])) };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsInVuaUlkVG9rZW4iLCJ1bmkiLCJnZXRTdG9yYWdlU3luYyIsImxvZ2luIiwib25TaG93Iiwib25IaWRlIiwibWV0aG9kcyJdLCJtYXBwaW5ncyI6IjtBQUNBLGdEOzs7OztBQUtlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixRQUFJQyxVQUFVLEdBQUdDLEdBQUcsQ0FBQ0MsY0FBSixDQUFtQixZQUFuQixDQUFqQjtBQUNBLFFBQUlGLFVBQUosRUFBZ0I7QUFDZixXQUFLRyxLQUFMLENBQVdGLEdBQUcsQ0FBQ0MsY0FBSixDQUFtQixVQUFuQixDQUFYO0FBQ0E7QUFDRCxpQkFBWSxZQUFaO0FBQ0EsR0FQYTtBQVFkRSxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBVmE7QUFXZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQWJhO0FBY2RDLFNBQU87QUFDSCwwQkFBYSxDQUFDLE9BQUQsQ0FBYixDQURHLENBZE8sRSIsImZpbGUiOiIxMzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7XG5cdG1hcFN0YXRlLFxuXHRtYXBNdXRhdGlvbnNcbn0gZnJvbSAndnVleCdcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRvbkxhdW5jaDogZnVuY3Rpb24oKSB7XG5cdFx0bGV0IHVuaUlkVG9rZW4gPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VuaUlkVG9rZW4nKVxuXHRcdGlmICh1bmlJZFRva2VuKSB7XG5cdFx0XHR0aGlzLmxvZ2luKHVuaS5nZXRTdG9yYWdlU3luYygndXNlcm5hbWUnKSlcblx0XHR9XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBMYXVuY2gnKTtcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKTtcblx0fSxcblx0b25IaWRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdC4uLm1hcE11dGF0aW9ucyhbJ2xvZ2luJ10pLFxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///137\n");

/***/ }),
/* 138 */
/*!***********************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/store/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 10));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 13));\n\nvar _trading = _interopRequireDefault(__webpack_require__(/*! ./modules/trading */ 139));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //import Websocket from './modules/websocket'\n\n_vue.default.use(_vuex.default);\n\nvar store = new _vuex.default.Store({\n  modules: {\n    //Websocket,\n    Trading: _trading.default },\n\n  state: {\n    /**\r\n            * 是否需要强制登录\r\n            */\n    forcedLogin: false,\n    hasLogin: false,\n    userName: \"\" },\n\n  mutations: {\n    login: function login(state, userName) {\n      state.userName = userName || '新用户';\n      state.hasLogin = true;\n    },\n    logout: function logout(state) {\n      state.userName = \"\";\n      state.hasLogin = false;\n    } } });var _default =\n\n\n\nstore;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsInN0b3JlIiwiU3RvcmUiLCJtb2R1bGVzIiwiVHJhZGluZyIsInN0YXRlIiwiZm9yY2VkTG9naW4iLCJoYXNMb2dpbiIsInVzZXJOYW1lIiwibXV0YXRpb25zIiwibG9naW4iLCJsb2dvdXQiXSwibWFwcGluZ3MiOiJ1RkFBQTtBQUNBOztBQUVBLHlGLDhGQURBOztBQUdBQSxhQUFJQyxHQUFKLENBQVFDLGFBQVI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLElBQUlELGNBQUtFLEtBQVQsQ0FBZTtBQUM1QkMsU0FBTyxFQUFFO0FBQ1I7QUFDQUMsV0FBTyxFQUFQQSxnQkFGUSxFQURtQjs7QUFLNUJDLE9BQUssRUFBRTtBQUNOOzs7QUFHQUMsZUFBVyxFQUFFLEtBSlA7QUFLTkMsWUFBUSxFQUFFLEtBTEo7QUFNTkMsWUFBUSxFQUFFLEVBTkosRUFMcUI7O0FBYTVCQyxXQUFTLEVBQUU7QUFDVkMsU0FEVSxpQkFDSkwsS0FESSxFQUNHRyxRQURILEVBQ2E7QUFDdEJILFdBQUssQ0FBQ0csUUFBTixHQUFpQkEsUUFBUSxJQUFJLEtBQTdCO0FBQ0FILFdBQUssQ0FBQ0UsUUFBTixHQUFpQixJQUFqQjtBQUNBLEtBSlM7QUFLVkksVUFMVSxrQkFLSE4sS0FMRyxFQUtJO0FBQ2JBLFdBQUssQ0FBQ0csUUFBTixHQUFpQixFQUFqQjtBQUNBSCxXQUFLLENBQUNFLFFBQU4sR0FBaUIsS0FBakI7QUFDQSxLQVJTLEVBYmlCLEVBQWYsQ0FBZCxDOzs7O0FBeUJlTixLIiwiZmlsZSI6IjEzOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4J1xyXG4vL2ltcG9ydCBXZWJzb2NrZXQgZnJvbSAnLi9tb2R1bGVzL3dlYnNvY2tldCdcclxuaW1wb3J0IFRyYWRpbmcgZnJvbSAnLi9tb2R1bGVzL3RyYWRpbmcnO1xyXG5cclxuVnVlLnVzZShWdWV4KVxyXG5cclxuY29uc3Qgc3RvcmUgPSBuZXcgVnVleC5TdG9yZSh7XHJcblx0bW9kdWxlczoge1xyXG5cdFx0Ly9XZWJzb2NrZXQsXHJcblx0XHRUcmFkaW5nXHJcblx0fSxcclxuXHRzdGF0ZToge1xyXG5cdFx0LyoqXHJcblx0XHQgKiDmmK/lkKbpnIDopoHlvLrliLbnmbvlvZVcclxuXHRcdCAqL1xyXG5cdFx0Zm9yY2VkTG9naW46IGZhbHNlLFxyXG5cdFx0aGFzTG9naW46IGZhbHNlLFxyXG5cdFx0dXNlck5hbWU6IFwiXCJcclxuXHR9LFxyXG5cdG11dGF0aW9uczoge1xyXG5cdFx0bG9naW4oc3RhdGUsIHVzZXJOYW1lKSB7XHJcblx0XHRcdHN0YXRlLnVzZXJOYW1lID0gdXNlck5hbWUgfHwgJ+aWsOeUqOaItyc7XHJcblx0XHRcdHN0YXRlLmhhc0xvZ2luID0gdHJ1ZTtcclxuXHRcdH0sXHJcblx0XHRsb2dvdXQoc3RhdGUpIHtcclxuXHRcdFx0c3RhdGUudXNlck5hbWUgPSBcIlwiO1xyXG5cdFx0XHRzdGF0ZS5oYXNMb2dpbiA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///138\n");

/***/ }),
/* 139 */
/*!***************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/store/modules/trading/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _actions = _interopRequireDefault(__webpack_require__(/*! ./actions */ 140));\nvar _mutations = _interopRequireDefault(__webpack_require__(/*! ./mutations */ 145));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n// initial state\nvar state = {};var _default =\n\n\n{\n  namespaced: true,\n  state: state,\n  actions: _actions.default,\n  mutations: _mutations.default };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvbW9kdWxlcy90cmFkaW5nL2luZGV4LmpzIl0sIm5hbWVzIjpbInN0YXRlIiwibmFtZXNwYWNlZCIsImFjdGlvbnMiLCJtdXRhdGlvbnMiXSwibWFwcGluZ3MiOiJ1RkFBQTtBQUNBLHFGOztBQUVBO0FBQ0EsSUFBTUEsS0FBSyxHQUFHLEVBQWQsQzs7O0FBR2U7QUFDYkMsWUFBVSxFQUFFLElBREM7QUFFYkQsT0FBSyxFQUFMQSxLQUZhO0FBR2JFLFNBQU8sRUFBUEEsZ0JBSGE7QUFJYkMsV0FBUyxFQUFUQSxrQkFKYSxFIiwiZmlsZSI6IjEzOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgbXV0YXRpb25zIGZyb20gJy4vbXV0YXRpb25zJztcblxuLy8gaW5pdGlhbCBzdGF0ZVxuY29uc3Qgc3RhdGUgPSB7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWVzcGFjZWQ6IHRydWUsXG4gIHN0YXRlLFxuICBhY3Rpb25zLFxuICBtdXRhdGlvbnMsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///139\n");

/***/ }),
/* 140 */
/*!*****************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/store/modules/trading/actions.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 53));var _stock = __webpack_require__(/*! @/api/stock.js */ 141);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var _default =\n\n{\n  searchStock: function searchStock(_ref, keyword) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var commit, res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:commit = _ref.commit;_context.next = 3;return (\n                (0, _stock.search)(keyword));case 3:res = _context.sent;\n              __f__(\"log\", res, \" at store/modules/trading/actions.js:6\");case 5:case \"end\":return _context.stop();}}}, _callee);}))();\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvbW9kdWxlcy90cmFkaW5nL2FjdGlvbnMuanMiXSwibmFtZXMiOlsic2VhcmNoU3RvY2siLCJrZXl3b3JkIiwiY29tbWl0IiwicmVzIl0sIm1hcHBpbmdzIjoid1BBQUEsNEQ7O0FBRWU7QUFDUkEsYUFEUSw2QkFDYUMsT0FEYixFQUNxQiw4TkFBaEJDLE1BQWdCLFFBQWhCQSxNQUFnQjtBQUNoQixtQ0FBT0QsT0FBUCxDQURnQixTQUM1QkUsR0FENEI7QUFFbEMsMkJBQVlBLEdBQVosNENBRmtDO0FBR2xDLEdBSmEsRSIsImZpbGUiOiIxNDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZWFyY2ggfSBmcm9tICdAL2FwaS9zdG9jay5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRhc3luYyBzZWFyY2hTdG9jayh7Y29tbWl0fSxrZXl3b3JkKXtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlYXJjaChrZXl3b3JkKTtcclxuXHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0fVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///140\n");

/***/ }),
/* 141 */
/*!*********************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/api/stock.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.search = search;var _request = _interopRequireDefault(__webpack_require__(/*! @/utils/request */ 142));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n\nfunction search(keyword) {\n  return (0, _request.default)({\n    url: 'suggest/type=&key=' + keyword + '&name=suggestdata',\n    isThrdAPI: true,\n    method: 'GET' });\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXBpL3N0b2NrLmpzIl0sIm5hbWVzIjpbInNlYXJjaCIsImtleXdvcmQiLCJ1cmwiLCJpc1RocmRBUEkiLCJtZXRob2QiXSwibWFwcGluZ3MiOiJzRkFBQSx1Rjs7O0FBR08sU0FBU0EsTUFBVCxDQUFnQkMsT0FBaEIsRUFBeUI7QUFDOUIsU0FBTyxzQkFBUTtBQUNiQyxPQUFHLEVBQUUsdUJBQXFCRCxPQUFyQixHQUE2QixtQkFEckI7QUFFaEJFLGFBQVMsRUFBQyxJQUZNO0FBR2JDLFVBQU0sRUFBRSxLQUhLLEVBQVIsQ0FBUDs7QUFLRCIsImZpbGUiOiIxNDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tICdAL3V0aWxzL3JlcXVlc3QnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaChrZXl3b3JkKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnc3VnZ2VzdC90eXBlPSZrZXk9JytrZXl3b3JkKycmbmFtZT1zdWdnZXN0ZGF0YScsXHJcblx0aXNUaHJkQVBJOnRydWUsXHJcbiAgICBtZXRob2Q6ICdHRVQnXHJcbiAgfSlcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///141\n");

/***/ }),
/* 142 */
/*!*************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/utils/request.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = $http;var _config2 = _interopRequireDefault(__webpack_require__(/*! ./config */ 143));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // 导入私有配置\nfunction $http(options) {\n  // 进行url字符串拼接，_config.url是再config中配置要请求的域名或者id+端口号这样方便管理，\n  // options.url是index中请求配置的，完美拼接\n  if (options.isThrdAPI) {\n    options.url = _config2.default.thrdURL + options.url;\n  } else {\n    options.url = _config2.default.url + options.url;\n  }\n\n  return new Promise(function (resolve, reject) {\n    if (options.data && options.data.authCode) {\n      _config2.default.header['Fex-auth'] = options.data.authCode;\n    }\n    // 拦截请求\n    var token = uni.getStorageSync('token');\n    if (token) {\n      _config2.default.header.Authorization = token;\n    }\n    _config2.default.complete = function (response) {\n      // 登录失效这边后台是返回403看情况\n      if (response.data.code === 403) {\n        //返回登录界面\n        uni.navigateTo({\n          url: '/pages/login/login' });\n\n        uni.showToast({\n          icon: 'none',\n          title: '登录已失效' });\n\n      } else if (response.data.code === 200) {\n        resolve(response.data);\n      } else {\n        uni.showToast({\n          icon: 'none',\n          title: response.data.msg });\n\n        reject(response.data);\n      }\n    };\n    _config2.default.fail = function (response) {\n      uni.showToast({\n        icon: 'none',\n        title: '系统异常,请稍后再试' });\n\n    };\n    // 开始请求\n    uni.request(Object.assign({}, _config2.default, options));\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyIkaHR0cCIsIm9wdGlvbnMiLCJpc1RocmRBUEkiLCJ1cmwiLCJfY29uZmlnIiwidGhyZFVSTCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZGF0YSIsImF1dGhDb2RlIiwiaGVhZGVyIiwidG9rZW4iLCJ1bmkiLCJnZXRTdG9yYWdlU3luYyIsIkF1dGhvcml6YXRpb24iLCJjb21wbGV0ZSIsInJlc3BvbnNlIiwiY29kZSIsIm5hdmlnYXRlVG8iLCJzaG93VG9hc3QiLCJpY29uIiwidGl0bGUiLCJtc2ciLCJmYWlsIiwicmVxdWVzdCIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6InNGQUFBLGdGLDhGQUFnQztBQUNqQixTQUFTQSxLQUFULENBQWVDLE9BQWYsRUFBd0I7QUFDbkM7QUFDQTtBQUNILE1BQUdBLE9BQU8sQ0FBQ0MsU0FBWCxFQUFxQjtBQUNwQkQsV0FBTyxDQUFDRSxHQUFSLEdBQWNDLGlCQUFRQyxPQUFSLEdBQWtCSixPQUFPLENBQUNFLEdBQXhDO0FBQ0EsR0FGRCxNQUVLO0FBQ0pGLFdBQU8sQ0FBQ0UsR0FBUixHQUFjQyxpQkFBUUQsR0FBUixHQUFjRixPQUFPLENBQUNFLEdBQXBDO0FBQ0E7O0FBRUEsU0FBTyxJQUFJRyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3pDLFFBQUdQLE9BQU8sQ0FBQ1EsSUFBUixJQUFnQlIsT0FBTyxDQUFDUSxJQUFSLENBQWFDLFFBQWhDLEVBQXlDO0FBQ3hDTix1QkFBUU8sTUFBUixDQUFlLFVBQWYsSUFBNkJWLE9BQU8sQ0FBQ1EsSUFBUixDQUFhQyxRQUExQztBQUNBO0FBQ0U7QUFDSCxRQUFJRSxLQUFLLEdBQUdDLEdBQUcsQ0FBQ0MsY0FBSixDQUFtQixPQUFuQixDQUFaO0FBQ0EsUUFBR0YsS0FBSCxFQUFTO0FBQ1JSLHVCQUFRTyxNQUFSLENBQWVJLGFBQWYsR0FBK0JILEtBQS9CO0FBQ0E7QUFDRVIscUJBQVFZLFFBQVIsR0FBbUIsVUFBQ0MsUUFBRCxFQUFjO0FBQzlCO0FBQ0gsVUFBR0EsUUFBUSxDQUFDUixJQUFULENBQWNTLElBQWQsS0FBdUIsR0FBMUIsRUFBOEI7QUFDOUI7QUFDSUwsV0FBRyxDQUFDTSxVQUFKLENBQWU7QUFDakJoQixhQUFHLEVBQUMsb0JBRGEsRUFBZjs7QUFHSFUsV0FBRyxDQUFDTyxTQUFKLENBQWM7QUFDVEMsY0FBSSxFQUFFLE1BREc7QUFFVEMsZUFBSyxFQUFFLE9BRkUsRUFBZDs7QUFJQSxPQVRELE1BU08sSUFBR0wsUUFBUSxDQUFDUixJQUFULENBQWNTLElBQWQsS0FBdUIsR0FBMUIsRUFBOEI7QUFDbkNYLGVBQU8sQ0FBQ1UsUUFBUSxDQUFDUixJQUFWLENBQVA7QUFDRCxPQUZNLE1BRUE7QUFDUEksV0FBRyxDQUFDTyxTQUFKLENBQWM7QUFDVEMsY0FBSSxFQUFFLE1BREc7QUFFVEMsZUFBSyxFQUFFTCxRQUFRLENBQUNSLElBQVQsQ0FBY2MsR0FGWixFQUFkOztBQUlBZixjQUFNLENBQUNTLFFBQVEsQ0FBQ1IsSUFBVixDQUFOO0FBQ0M7QUFDQSxLQXBCRDtBQXFCSEwscUJBQVFvQixJQUFSLEdBQWUsVUFBQ1AsUUFBRCxFQUFjO0FBQzVCSixTQUFHLENBQUNPLFNBQUosQ0FBYztBQUNUQyxZQUFJLEVBQUUsTUFERztBQUVUQyxhQUFLLEVBQUUsWUFGRSxFQUFkOztBQUlBLEtBTEQ7QUFNRztBQUNBVCxPQUFHLENBQUNZLE9BQUosQ0FBWUMsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFpQnZCLGdCQUFqQixFQUEwQkgsT0FBMUIsQ0FBWjtBQUNELEdBdENNLENBQVA7QUF1Q0QiLCJmaWxlIjoiMTQyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9jb25maWcgZnJvbSAnLi9jb25maWcnOyAvLyDlr7zlhaXnp4HmnInphY3nva5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gJGh0dHAob3B0aW9ucykge1xyXG4gICAgLy8g6L+b6KGMdXJs5a2X56ym5Liy5ou85o6l77yMX2NvbmZpZy51cmzmmK/lho1jb25maWfkuK3phY3nva7opoHor7fmsYLnmoTln5/lkI3miJbogIVpZCvnq6/lj6Plj7fov5nmoLfmlrnkvr/nrqHnkIbvvIxcclxuICAgIC8vIG9wdGlvbnMudXJs5pivaW5kZXjkuK3or7fmsYLphY3nva7nmoTvvIzlroznvo7mi7zmjqVcclxuXHRpZihvcHRpb25zLmlzVGhyZEFQSSl7XHJcblx0XHRvcHRpb25zLnVybCA9IF9jb25maWcudGhyZFVSTCArIG9wdGlvbnMudXJsO1xyXG5cdH1lbHNle1xyXG5cdFx0b3B0aW9ucy51cmwgPSBfY29uZmlnLnVybCArIG9wdGlvbnMudXJsO1xyXG5cdH1cclxuICBcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdGlmKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGEuYXV0aENvZGUpe1xyXG5cdFx0X2NvbmZpZy5oZWFkZXJbJ0ZleC1hdXRoJ10gPSBvcHRpb25zLmRhdGEuYXV0aENvZGVcclxuXHR9XHJcbiAgICAvLyDmi6bmiKror7fmsYJcclxuXHRsZXQgdG9rZW4gPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJylcclxuXHRpZih0b2tlbil7XHJcblx0XHRfY29uZmlnLmhlYWRlci5BdXRob3JpemF0aW9uID0gdG9rZW47XHJcblx0fVxyXG4gICAgX2NvbmZpZy5jb21wbGV0ZSA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgLy8g55m75b2V5aSx5pWI6L+Z6L655ZCO5Y+w5piv6L+U5ZueNDAz55yL5oOF5Ya1XHJcblx0ICAgaWYocmVzcG9uc2UuZGF0YS5jb2RlID09PSA0MDMpe1xyXG5cdCAgIC8v6L+U5Zue55m75b2V55WM6Z2iXHJcblx0ICAgICAgIHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdCAgIFx0dXJsOicvcGFnZXMvbG9naW4vbG9naW4nXHJcblx0XHQgICB9KTtcclxuXHRcdCAgIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0ICAgICAgICBpY29uOiAnbm9uZScsXHJcblx0XHQgICAgICAgIHRpdGxlOiAn55m75b2V5bey5aSx5pWIJ1xyXG5cdFx0ICAgIH0pO1xyXG5cdCAgIH0gZWxzZSBpZihyZXNwb25zZS5kYXRhLmNvZGUgPT09IDIwMCl7XHJcblx0XHQgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuXHQgICB9IGVsc2Uge1xyXG5cdFx0ICB1bmkuc2hvd1RvYXN0KHtcclxuXHRcdCAgICAgICBpY29uOiAnbm9uZScsXHJcblx0XHQgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubXNnXHJcblx0XHQgICB9KTtcclxuXHRcdCAgcmVqZWN0KHJlc3BvbnNlLmRhdGEpO1xyXG5cdCAgIH1cclxuICAgIH1cclxuXHRfY29uZmlnLmZhaWwgPSAocmVzcG9uc2UpID0+IHtcclxuXHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0ICAgICBpY29uOiAnbm9uZScsXHJcblx0XHQgICAgIHRpdGxlOiAn57O757uf5byC5bi4LOivt+eojeWQjuWGjeivlSdcclxuXHRcdCB9KTtcclxuXHR9XHJcbiAgICAvLyDlvIDlp4vor7fmsYJcclxuICAgIHVuaS5yZXF1ZXN0KE9iamVjdC5hc3NpZ24oe30sX2NvbmZpZywgb3B0aW9ucykpO1xyXG4gIH0pXHJcbn1cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///142\n");

/***/ }),
/* 143 */
/*!************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/utils/config.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _global = _interopRequireDefault(__webpack_require__(/*! ./global.js */ 144));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n//  http 请求配置项\nvar _default = {\n  //  填自己的开发者服务器接口地址 \n  //url: \"http://47.107.100.112\",\n  url: _global.default.REQUEST_URL,\n\n  thrdURL: _global.default.SEARCH_URL,\n  //  请求的参数   \n  data: {},\n  //  设置请求的 header，header 中不能设置 Referer。\n  header: {},\n  //  （需大写）有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  \n  method: \"POST\",\n  //  json    如果设为json，会尝试对返回的数据做一次 JSON.parse    \n  dataType: \"json\",\n  //  text    设置响应的数据类型。合法值：text、arraybuffer  1.7.0\n  responseType: \"text\",\n  //  收到开发者服务成功返回的回调函数    \n  success: function success() {},\n  //  接口调用失败的回调函数 \n  fail: function fail() {},\n  //  接口调用结束的回调函数（调用成功、失败都会执行）\n  complete: function complete() {} };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvY29uZmlnLmpzIl0sIm5hbWVzIjpbInVybCIsIkciLCJSRVFVRVNUX1VSTCIsInRocmRVUkwiLCJTRUFSQ0hfVVJMIiwiZGF0YSIsImhlYWRlciIsIm1ldGhvZCIsImRhdGFUeXBlIiwicmVzcG9uc2VUeXBlIiwic3VjY2VzcyIsImZhaWwiLCJjb21wbGV0ZSJdLCJtYXBwaW5ncyI6InVGQUFBLGtGO0FBQ0E7ZUFDZTtBQUNYO0FBQ0E7QUFDSEEsS0FBRyxFQUFFQyxnQkFBRUMsV0FITzs7QUFLZEMsU0FBTyxFQUFDRixnQkFBRUcsVUFMSTtBQU1YO0FBQ0FDLE1BQUksRUFBRSxFQVBLO0FBUVg7QUFDQUMsUUFBTSxFQUFFLEVBVEc7QUFVWDtBQUNBQyxRQUFNLEVBQUUsTUFYRztBQVlYO0FBQ0FDLFVBQVEsRUFBRSxNQWJDO0FBY1g7QUFDQUMsY0FBWSxFQUFFLE1BZkg7QUFnQlg7QUFDQUMsU0FqQlcscUJBaUJELENBQUUsQ0FqQkQ7QUFrQlg7QUFDQUMsTUFuQlcsa0JBbUJKLENBQUUsQ0FuQkU7QUFvQlg7QUFDQUMsVUFyQlcsc0JBcUJBLENBQUUsQ0FyQkYsRSIsImZpbGUiOiIxNDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRyBmcm9tICcuL2dsb2JhbC5qcydcclxuLy8gIGh0dHAg6K+35rGC6YWN572u6aG5XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8vICDloavoh6rlt7HnmoTlvIDlj5HogIXmnI3liqHlmajmjqXlj6PlnLDlnYAgXHJcbiAgICAvL3VybDogXCJodHRwOi8vNDcuMTA3LjEwMC4xMTJcIixcclxuXHR1cmw6IEcuUkVRVUVTVF9VUkwsXHJcblx0XHJcblx0dGhyZFVSTDpHLlNFQVJDSF9VUkwsXHJcbiAgICAvLyAg6K+35rGC55qE5Y+C5pWwICAgXHJcbiAgICBkYXRhOiB7fSxcclxuICAgIC8vICDorr7nva7or7fmsYLnmoQgaGVhZGVy77yMaGVhZGVyIOS4reS4jeiDveiuvue9riBSZWZlcmVy44CCXHJcbiAgICBoZWFkZXI6IHt9LFxyXG4gICAgLy8gIO+8iOmcgOWkp+WGme+8ieacieaViOWAvO+8mk9QVElPTlMsIEdFVCwgSEVBRCwgUE9TVCwgUFVULCBERUxFVEUsIFRSQUNFLCBDT05ORUNUICBcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAvLyAganNvbiAgICDlpoLmnpzorr7kuLpqc29u77yM5Lya5bCd6K+V5a+56L+U5Zue55qE5pWw5o2u5YGa5LiA5qyhIEpTT04ucGFyc2UgICAgXHJcbiAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAvLyAgdGV4dCAgICDorr7nva7lk43lupTnmoTmlbDmja7nsbvlnovjgILlkIjms5XlgLzvvJp0ZXh044CBYXJyYXlidWZmZXIgIDEuNy4wXHJcbiAgICByZXNwb25zZVR5cGU6IFwidGV4dFwiLFxyXG4gICAgLy8gIOaUtuWIsOW8gOWPkeiAheacjeWKoeaIkOWKn+i/lOWbnueahOWbnuiwg+WHveaVsCAgICBcclxuICAgIHN1Y2Nlc3MoKSB7fSxcclxuICAgIC8vICDmjqXlj6PosIPnlKjlpLHotKXnmoTlm57osIPlh73mlbAgXHJcbiAgICBmYWlsKCkge30sXHJcbiAgICAvLyAg5o6l5Y+j6LCD55So57uT5p2f55qE5Zue6LCD5Ye95pWw77yI6LCD55So5oiQ5Yqf44CB5aSx6LSl6YO95Lya5omn6KGM77yJXHJcbiAgICBjb21wbGV0ZSgpIHt9LFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///143\n");

/***/ }),
/* 144 */
/*!************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/utils/global.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default = {\n  CAPTCHA_TYPE: {\n    COMMON: 'common' },\n\n  //REQUEST_URL: 'http://192.168.1.6:8083'\n  REQUEST_URL: 'http://localhost:8080' };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvZ2xvYmFsLmpzIl0sIm5hbWVzIjpbIkNBUFRDSEFfVFlQRSIsIkNPTU1PTiIsIlJFUVVFU1RfVVJMIl0sIm1hcHBpbmdzIjoic0dBQWU7QUFDZEEsY0FBWSxFQUFHO0FBQ2RDLFVBQU0sRUFBRSxRQURNLEVBREQ7O0FBSWQ7QUFDQUMsYUFBVyxFQUFFLHVCQUxDLEUiLCJmaWxlIjoiMTQ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG5cdENBUFRDSEFfVFlQRSA6IHtcclxuXHRcdENPTU1PTjogJ2NvbW1vbidcclxuXHR9LFxyXG5cdC8vUkVRVUVTVF9VUkw6ICdodHRwOi8vMTkyLjE2OC4xLjY6ODA4MydcclxuXHRSRVFVRVNUX1VSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCcsXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///144\n");

/***/ }),
/* 145 */
/*!*******************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/store/modules/trading/mutations.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default = {};exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvbW9kdWxlcy90cmFkaW5nL211dGF0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoic0dBQWUsRSIsImZpbGUiOiIxNDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///145\n");

/***/ }),
/* 146 */
/*!***************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/uview-ui/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 147));



var _request = _interopRequireDefault(__webpack_require__(/*! ./libs/request */ 148));




















var _queryParams = _interopRequireDefault(__webpack_require__(/*! ./libs/function/queryParams.js */ 152));

var _route = _interopRequireDefault(__webpack_require__(/*! ./libs/function/route.js */ 153));

var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFormat.js */ 154));

var _timeFrom = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFrom.js */ 155));

var _colorGradient = _interopRequireDefault(__webpack_require__(/*! ./libs/function/colorGradient.js */ 156));

var _guid = _interopRequireDefault(__webpack_require__(/*! ./libs/function/guid.js */ 157));

var _color = _interopRequireDefault(__webpack_require__(/*! ./libs/function/color.js */ 158));

var _type2icon = _interopRequireDefault(__webpack_require__(/*! ./libs/function/type2icon.js */ 159));

var _randomArray = _interopRequireDefault(__webpack_require__(/*! ./libs/function/randomArray.js */ 160));

var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepClone.js */ 150));

var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepMerge.js */ 149));

var _addUnit = _interopRequireDefault(__webpack_require__(/*! ./libs/function/addUnit.js */ 161));


var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 151));

var _random = _interopRequireDefault(__webpack_require__(/*! ./libs/function/random.js */ 162));

var _trim = _interopRequireDefault(__webpack_require__(/*! ./libs/function/trim.js */ 163));

var _toast = _interopRequireDefault(__webpack_require__(/*! ./libs/function/toast.js */ 164));

var _getParent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/getParent.js */ 165));

var _$parent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/$parent.js */ 166));



var _sys = __webpack_require__(/*! ./libs/function/sys.js */ 167);

var _debounce = _interopRequireDefault(__webpack_require__(/*! ./libs/function/debounce.js */ 168));

var _throttle = _interopRequireDefault(__webpack_require__(/*! ./libs/function/throttle.js */ 169));



var _config = _interopRequireDefault(__webpack_require__(/*! ./libs/config/config.js */ 170));

var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 171));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // 引入全局mixin
// 引入关于是否mixin集成小程序分享的配置
// import wxshare from './libs/mixin/mpShare.js'
// 全局挂载引入http相关请求拦截插件
function wranning(str) {// 开发环境进行信息输出,主要是一些报错信息
  // 这个环境的来由是在程序编写时候,点击hx编辑器运行调试代码的时候,详见:
  // 	https://uniapp.dcloud.io/frame?id=%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e5%92%8c%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83
  if (true) {__f__("warn", str, " at node_modules/uview-ui/index.js:13");}} // 尝试判断在根目录的/store中是否有$u.mixin.js，此文件uView默认为需要挂在到全局的vuex的state变量
// HX2.6.11版本,放到try中,控制台依然会警告,暂时不用此方式，
// let vuexStore = {};
// try {
// 	vuexStore = require("@/store/$u.mixin.js");
// } catch (e) {
// 	//TODO handle the exception
// }
// post类型对象参数转为get类型url参数
var $u = { queryParams: _queryParams.default, route: _route.default, timeFormat: _timeFormat.default, date: _timeFormat.default, // 另名date
  timeFrom: _timeFrom.default, colorGradient: _colorGradient.default.colorGradient, colorToRgba: _colorGradient.default.colorToRgba, guid: _guid.default, color: _color.default, sys: _sys.sys, os: _sys.os, type2icon: _type2icon.default, randomArray: _randomArray.default, wranning: wranning, get: _request.default.get,
  post: _request.default.post,
  put: _request.default.put,
  'delete': _request.default.delete,
  hexToRgb: _colorGradient.default.hexToRgb,
  rgbToHex: _colorGradient.default.rgbToHex,
  test: _test.default,
  random: _random.default,
  deepClone: _deepClone.default,
  deepMerge: _deepMerge.default,
  getParent: _getParent.default,
  $parent: _$parent.default,
  addUnit: _addUnit.default,
  trim: _trim.default,
  type: ['primary', 'success', 'error', 'warning', 'info'],
  http: _request.default,
  toast: _toast.default,
  config: _config.default, // uView配置信息相关，比如版本号
  zIndex: _zIndex.default,
  debounce: _debounce.default,
  throttle: _throttle.default };


// $u挂载到uni对象上
uni.$u = $u;

var install = function install(Vue) {
  Vue.mixin(_mixin.default);
  if (Vue.prototype.openShare) {
    Vue.mixin(mpShare);
  }
  // Vue.mixin(vuexStore);
  // 时间格式化，同时两个名称，date和timeFormat
  Vue.filter('timeFormat', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  Vue.filter('date', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  // 将多久以前的方法，注入到全局过滤器
  Vue.filter('timeFrom', function (timestamp, format) {
    return (0, _timeFrom.default)(timestamp, format);
  });
  Vue.prototype.$u = $u;
};var _default =

{
  install: install };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)["default"]))

/***/ }),
/* 147 */
/*!**************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/uview-ui/libs/mixin/mixin.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // getRect挂载到$u上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
    this.$u.getRect = this.$uGetRect;
  },
  methods: {
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    $uGetRect: function $uGetRect(selector, all) {var _this = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().
        in(_this)[all ? 'selectAll' : 'select'](selector).
        boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).
        exec();
      });
    },
    getParentData: function getParentData() {var _this2 = this;var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // 避免在created中去定义parent变量
      if (!this.parent) this.parent = false;
      // 这里的本质原理是，通过获取父组件实例(也即u-radio-group的this)
      // 将父组件this中对应的参数，赋值给本组件(u-radio的this)的parentData对象中对应的属性
      // 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
      this.parent = this.$u.$parent.call(this, parentName);
      if (this.parent) {
        // 历遍parentData中的属性，将parent中的同名属性赋值给parentData
        Object.keys(this.parentData).map(function (key) {
          _this2.parentData[key] = _this2.parent[key];
        });
      }
    },
    // 阻止事件冒泡
    preventEvent: function preventEvent(e) {
      e && e.stopPropagation && e.stopPropagation();
    } },

  onReachBottom: function onReachBottom() {
    uni.$emit('uOnReachBottom');
  } };

/***/ }),
/* 148 */
/*!****************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/uview-ui/libs/request/index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ../function/deepMerge */ 149));
var _test = _interopRequireDefault(__webpack_require__(/*! ../function/test */ 151));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var
Request = /*#__PURE__*/function () {_createClass(Request, [{ key: "setConfig",
    // 设置全局默认配置
    value: function setConfig(customConfig) {
      // 深度合并对象，否则会造成对象深层属性丢失
      this.config = (0, _deepMerge.default)(this.config, customConfig);
    }

    // 主要请求部分
  }, { key: "request", value: function request() {var _this = this;var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // 检查请求拦截
      if (this.interceptor.request && typeof this.interceptor.request === 'function') {
        var tmpConfig = {};
        var interceptorRequest = this.interceptor.request(options);
        if (interceptorRequest === false) {
          // 返回一个处于pending状态中的Promise，来取消原promise，避免进入then()回调
          return new Promise(function () {});
        }
        this.options = interceptorRequest;
      }
      options.dataType = options.dataType || this.config.dataType;
      options.responseType = options.responseType || this.config.responseType;
      options.url = options.url || '';
      options.params = options.params || {};
      options.header = Object.assign(this.config.header, options.header);
      options.method = options.method || this.config.method;

      return new Promise(function (resolve, reject) {
        options.complete = function (response) {
          // 请求返回后，隐藏loading(如果请求返回快的话，可能会没有loading)
          uni.hideLoading();
          // 清除定时器，如果请求回来了，就无需loading
          clearTimeout(_this.config.timer);
          _this.config.timer = null;
          // 判断用户对拦截返回数据的要求，如果originalData为true，返回所有的数据(response)到拦截器，否则只返回response.data
          if (_this.config.originalData) {
            // 判断是否存在拦截器
            if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
              var resInterceptors = _this.interceptor.response(response);
              // 如果拦截器不返回false，就将拦截器返回的内容给this.$u.post的then回调
              if (resInterceptors !== false) {
                resolve(resInterceptors);
              } else {
                // 如果拦截器返回false，意味着拦截器定义者认为返回有问题，直接接入catch回调
                reject(response);
              }
            } else {
              // 如果要求返回原始数据，就算没有拦截器，也返回最原始的数据
              resolve(response);
            }
          } else {
            if (response.statusCode == 200) {
              if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
                var _resInterceptors = _this.interceptor.response(response.data);
                if (_resInterceptors !== false) {
                  resolve(_resInterceptors);
                } else {
                  reject(response.data);
                }
              } else {
                // 如果不是返回原始数据(originalData=false)，且没有拦截器的情况下，返回纯数据给then回调
                resolve(response.data);
              }
            } else {
              // 不返回原始数据的情况下，服务器状态码不为200，modal弹框提示
              // if(response.errMsg) {
              // 	uni.showModal({
              // 		title: response.errMsg
              // 	});
              // }
              reject(response);
            }
          }
        };

        // 判断用户传递的URL是否/开头,如果不是,加上/，这里使用了uView的test.js验证库的url()方法
        options.url = _test.default.url(options.url) ? options.url : _this.config.baseUrl + (options.url.indexOf('/') == 0 ?
        options.url : '/' + options.url);

        // 是否显示loading
        // 加一个是否已有timer定时器的判断，否则有两个同时请求的时候，后者会清除前者的定时器id
        // 而没有清除前者的定时器，导致前者超时，一直显示loading
        if (_this.config.showLoading && !_this.config.timer) {
          _this.config.timer = setTimeout(function () {
            uni.showLoading({
              title: _this.config.loadingText,
              mask: _this.config.loadingMask });

            _this.config.timer = null;
          }, _this.config.loadingTime);
        }
        uni.request(options);
      });
      // .catch(res => {
      // 	// 如果返回reject()，不让其进入this.$u.post().then().catch()后面的catct()
      // 	// 因为很多人都会忘了写后面的catch()，导致报错捕获不到catch
      // 	return new Promise(()=>{});
      // })
    } }]);

  function Request() {var _this2 = this;_classCallCheck(this, Request);
    this.config = {
      baseUrl: '', // 请求的根域名
      // 默认的请求头
      header: {},
      method: 'POST',
      // 设置为json，返回后uni.request会对数据进行一次JSON.parse
      dataType: 'json',
      // 此参数无需处理，因为5+和支付宝小程序不支持，默认为text即可
      responseType: 'text',
      showLoading: true, // 是否显示请求中的loading
      loadingText: '请求中...',
      loadingTime: 800, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
      timer: null, // 定时器
      originalData: false, // 是否在拦截器中返回服务端的原始数据，见文档说明
      loadingMask: true // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
    };

    // 拦截器
    this.interceptor = {
      // 请求前的拦截
      request: null,
      // 请求后的拦截
      response: null };


    // get请求
    this.get = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        method: 'GET',
        url: url,
        header: header,
        data: data });

    };

    // post请求
    this.post = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'POST',
        header: header,
        data: data });

    };

    // put请求，不支持支付宝小程序(HX2.6.15)
    this.put = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'PUT',
        header: header,
        data: data });

    };

    // delete请求，不支持支付宝和头条小程序(HX2.6.15)
    this.delete = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'DELETE',
        header: header,
        data: data });

    };
  }return Request;}();var _default =

new Request();exports.default = _default;

/***/ }),
/* 149 */
/*!*********************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/uview-ui/libs/function/deepMerge.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./deepClone */ 150));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// JS对象深度合并
function deepMerge() {var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  target = (0, _deepClone.default)(target);
  if (typeof target !== 'object' || typeof source !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop];
      } else {
        if (typeof source[prop] !== 'object') {
          target[prop] = source[prop];
        } else {
          if (target[prop].concat && source[prop].concat) {
            target[prop] = target[prop].concat(source[prop]);
          } else {
            target[prop] = deepMerge(target[prop], source[prop]);
          }
        }
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}var _default =

deepMerge;exports.default = _default;

/***/ }),
/* 150 */
/*!*********************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/uview-ui/libs/function/deepClone.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

// 深度克隆
function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if (typeof obj !== "object" && typeof obj !== 'function') {
    //原始类型直接返回
    return obj;
  }
  var o = isArray(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}var _default =

deepClone;exports.default = _default;

/***/ }),
/* 151 */
/*!****************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/uview-ui/libs/function/test.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 验证电子邮箱格式
                                                                                                      */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
   * 验证手机格式
   */
function mobile(value) {
  return /^1[23456789]\d{9}$/.test(value);
}

/**
   * 验证URL格式
   */
function url(value) {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value);
}

/**
   * 验证日期格式
   */
function date(value) {
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
   * 验证ISO类型的日期格式
   */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
   * 验证十进制数字
   */
function number(value) {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
}

/**
   * 验证整数
   */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
   * 验证身份证号码
   */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
  value);
}

/**
   * 是否车牌号
   */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  } else if (value.length === 8) {
    return xreg.test(value);
  } else {
    return false;
  }
}

/**
   * 金额,只允许2位小数
   */
function amount(value) {
  //金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
   * 中文
   */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
   * 只能输入字母
   */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
   * 只能是字母或者数字
   */
function enOrNum(value) {
  //英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
   * 验证是否包含某个值
   */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
   * 验证一个值范围[min, max]
   */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
   * 验证一个长度范围[min, max]
   */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
   * 是否固定电话
   */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
   * 判断是否为空
   */
function empty(value) {
  switch (typeof value) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (0 === value || isNaN(value)) return true;
      break;
    case 'object':
      if (null === value || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;}

  return false;
}

/**
   * 是否json字符串
   */
function jsonString(value) {
  if (typeof value == 'string') {
    try {
      var obj = JSON.parse(value);
      if (typeof obj == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}


/**
   * 是否数组
   */
function array(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}

/**
   * 是否对象
   */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
   * 是否短信验证码
   */
function code(value) {var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return new RegExp("^\\d{".concat(len, "}$")).test(value);
}var _default =


{
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  dateISO: dateISO,
  number: number,
  digits: digits,
  idCard: idCard,
  carNo: carNo,
  amount: amount,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  contains: contains,
  range: range,
  rangeLength: rangeLength,
  empty: empty,
  isEmpty: empty,
  jsonString: jsonString,
  landline: landline,
  object: object,
  array: array,
  code: code };exports.default = _default;

/***/ }),
/* 152 */
/*!***********************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/uview-ui/libs/function/queryParams.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 对象转url参数
                                                                                                      * @param {*} data,对象
                                                                                                      * @param {*} isPrefix,是否自动加上"?"
                                                                                                      */
function queryParams() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brackets';
  var prefix = isPrefix ? '?' : '';
  var _result = [];
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';var _loop = function _loop(
  key) {
    var value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      return "continue";
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (var i = 0; i < value.length; i++) {
            _result.push(key + '[' + i + ']=' + value[i]);
          }
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(function (_value) {
            _result.push(key + '=' + _value);
          });
          break;
        case 'comma':
          // 结果: ids=1,2,3
          var commaStr = "";
          value.forEach(function (_value) {
            commaStr += (commaStr ? "," : "") + _value;
          });
          _result.push(key + '=' + commaStr);
          break;
        default:
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });}

    } else {
      _result.push(key + '=' + value);
    }};for (var key in data) {var _ret = _loop(key);if (_ret === "continue") continue;
  }
  return _result.length ? prefix + _result.join('&') : '';
}var _default =

queryParams;exports.default = _default;

/***/ }),
/* 153 */
/*!*****************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/uview-ui/libs/function/route.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 53));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * 路由跳转方法，该方法相对于直接使用uni.xxx的好处是使用更加简单快捷
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * 并且带有路由拦截功能
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   */var

Router = /*#__PURE__*/function () {
  function Router() {_classCallCheck(this, Router);
    // 原始属性定义
    this.config = {
      type: 'navigateTo',
      url: '',
      delta: 1, // navigateBack页面后退时,回退的层数
      params: {}, // 传递的参数
      animationType: 'pop-in', // 窗口动画,只在APP有效
      animationDuration: 300, // 窗口动画持续时间,单位毫秒,只在APP有效
      intercept: false // 是否需要拦截
    };
    // 因为route方法是需要对外赋值给另外的对象使用，同时route内部有使用this，会导致route失去上下文
    // 这里在构造函数中进行this绑定
    this.route = this.route.bind(this);
  }

  // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
  _createClass(Router, [{ key: "addRootPath", value: function addRootPath(url) {
      return url[0] === '/' ? url : "/".concat(url);
    }

    // 整合路由参数
  }, { key: "mixinParam", value: function mixinParam(url, params) {
      url = url && this.addRootPath(url);

      // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
      // 如果有url中有get参数，转换后无需带上"?"
      var query = '';
      if (/.*\/.*\?.*=.*/.test(url)) {
        // object对象转为get类型的参数
        query = uni.$u.queryParams(params, false);
        // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
        return url += "&" + query;
      } else {
        // 直接拼接参数，因为此处url中没有后面的query参数，也就没有"?/&"之类的符号
        query = uni.$u.queryParams(params);
        return url += query;
      }
    }

    // 对外的方法名称
  }, { key: "route", value: function () {var _route = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var options,params,mergeConfig,isNext,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                // 合并用户的配置和内部的默认配置
                mergeConfig = {};

                if (typeof options === 'string') {
                  // 如果options为字符串，则为route(url, params)的形式
                  mergeConfig.url = this.mixinParam(options, params);
                  mergeConfig.type = 'navigateTo';
                } else {
                  mergeConfig = uni.$u.deepClone(options, this.config);
                  // 否则正常使用mergeConfig中的url和params进行拼接
                  mergeConfig.url = this.mixinParam(options.url, options.params);
                }

                if (params.intercept) {
                  this.config.intercept = params.intercept;
                }
                // params参数也带给拦截器
                mergeConfig.params = params;
                // 合并内外部参数
                mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
                // 判断用户是否定义了拦截器
                if (!(typeof uni.$u.routeIntercept === 'function')) {_context.next = 14;break;}_context.next = 10;return (

                  new Promise(function (resolve, reject) {
                    uni.$u.routeIntercept(mergeConfig, resolve);
                  }));case 10:isNext = _context.sent;
                // 如果isNext为true，则执行路由跳转
                isNext && this.openPage(mergeConfig);_context.next = 15;break;case 14:

                this.openPage(mergeConfig);case 15:case "end":return _context.stop();}}}, _callee, this);}));function route() {return _route.apply(this, arguments);}return route;}()



    // 执行路由跳转
  }, { key: "openPage", value: function openPage(config) {
      // 解构参数
      var
      url =




      config.url,type = config.type,delta = config.delta,animationType = config.animationType,animationDuration = config.animationDuration;
      if (config.type == 'navigateTo' || config.type == 'to') {
        uni.navigateTo({
          url: url,
          animationType: animationType,
          animationDuration: animationDuration });

      }
      if (config.type == 'redirectTo' || config.type == 'redirect') {
        uni.redirectTo({
          url: url });

      }
      if (config.type == 'switchTab' || config.type == 'tab') {
        uni.switchTab({
          url: url });

      }
      if (config.type == 'reLaunch' || config.type == 'launch') {
        uni.reLaunch({
          url: url });

      }
      if (config.type == 'navigateBack' || config.type == 'back') {
        uni.navigateBack({
          delta: delta });

      }
    } }]);return Router;}();var _default =


new Router().route;exports.default = _default;

/***/ }),
/* 154 */
/*!**********************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/uview-ui/libs/function/timeFormat.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
  // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
  String.prototype.padStart = function (maxLength) {var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== "[object String]") throw new TypeError(
    'fillString must be String');
    var str = this;
    // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
    if (str.length >= maxLength) return String(str);

    var fillLength = maxLength - str.length,
    times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

// 其他更多是格式化有如下:
// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
function timeFormat() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var date = new Date(Number(dateTime));
  var ret;
  var opt = {
    "y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "h+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "s+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (var k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
    };
  };
  return fmt;
}var _default =

timeFormat;exports.default = _default;

/***/ }),
/* 155 */
/*!********************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/uview-ui/libs/function/timeFrom.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ../../libs/function/timeFormat.js */ 154));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                                                                                                                          * 时间戳转为多久之前
                                                                                                                                                                                                                                                                                          * @param String timestamp 时间戳
                                                                                                                                                                                                                                                                                          * @param String | Boolean format 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
                                                                                                                                                                                                                                                                                          * 如果为布尔值false，无论什么时间，都返回多久以前的格式
                                                                                                                                                                                                                                                                                          */
function timeFrom() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var timestamp = +new Date(Number(dateTime));

  var timer = (Number(new Date()) - timestamp) / 1000;
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '刚刚';
      break;
    case timer >= 300 && timer < 3600:
      tips = parseInt(timer / 60) + '分钟前';
      break;
    case timer >= 3600 && timer < 86400:
      tips = parseInt(timer / 3600) + '小时前';
      break;
    case timer >= 86400 && timer < 2592000:
      tips = parseInt(timer / 86400) + '天前';
      break;
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = parseInt(timer / (86400 * 30)) + '个月前';
        } else {
          tips = parseInt(timer / (86400 * 365)) + '年前';
        }
      } else {
        tips = (0, _timeFormat.default)(timestamp, format);
      }}

  return tips;
}var _default =

timeFrom;exports.default = _default;

/***/ }),
/* 156 */
/*!*************************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/uview-ui/libs/function/colorGradient.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 求两个颜色之间的渐变值
                                                                                                      * @param {string} startColor 开始的颜色
                                                                                                      * @param {string} endColor 结束的颜色
                                                                                                      * @param {number} step 颜色等分的份额
                                                                                                      * */
function colorGradient() {var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(255, 255, 255)';var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startRGB = hexToRgb(startColor, false); //转换为rgb数组模式
  var startR = startRGB[0];
  var startG = startRGB[1];
  var startB = startRGB[2];

  var endRGB = hexToRgb(endColor, false);
  var endR = endRGB[0];
  var endG = endRGB[1];
  var endB = endRGB[2];

  var sR = (endR - startR) / step; //总差值
  var sG = (endG - startG) / step;
  var sB = (endB - startB) / step;
  var colorArr = [];
  for (var i = 0; i < step; i++) {
    //计算每一步的hex值 
    var hex = rgbToHex('rgb(' + Math.round(sR * i + startR) + ',' + Math.round(sG * i + startG) + ',' + Math.round(sB *
    i + startB) + ')');
    colorArr.push(hex);
  }
  return colorArr;
}

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor) {var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = sColor.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(_i, _i + 2)));
    }
    if (!str) {
      return sColorChange;
    } else {
      return "rgb(".concat(sColorChange[0], ",").concat(sColorChange[1], ",").concat(sColorChange[2], ")");
    }
  } else if (/^(rgb|RGB)/.test(sColor)) {
    var arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    return arr.map(function (val) {return Number(val);});
  } else {
    return sColor;
  }
};

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
  var _this = rgb;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    var strHex = "#";
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? 0 + '' + hex : hex; // 保证每个rgb的值为2位
      if (hex === "0") {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  } else if (reg.test(_this)) {
    var aNum = _this.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return _this;
    } else if (aNum.length === 3) {
      var numHex = "#";
      for (var _i2 = 0; _i2 < aNum.length; _i2 += 1) {
        numHex += aNum[_i2] + aNum[_i2];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}


/**
  * JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
  * sHex为传入的十六进制的色值
  * alpha为rgba的透明度
  */
function colorToRgba(color) {var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;
  color = rgbToHex(color);
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  /* 16进制颜色转为RGB格式 */
  var sColor = color.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i3 = 1; _i3 < 7; _i3 += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(_i3, _i3 + 2)));
    }
    // return sColorChange.join(',')
    return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')';
  } else
  {
    return sColor;
  }
}var _default =

{
  colorGradient: colorGradient,
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex,
  colorToRgba: colorToRgba };exports.default = _default;

/***/ }),
/* 157 */
/*!****************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/uview-ui/libs/function/guid.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
                                                                                                      * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier) 
                                                                                                      * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
                                                                                                      * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
                                                                                                      * v-for的时候,推荐使用后端返回的id而不是循环的index
                                                                                                      * @param {Number} len uuid的长度
                                                                                                      * @param {Boolean} firstU 将返回的首字母置为"u"
                                                                                                      * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
                                                                                                      */
function guid() {var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;

  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {uuid[i] = chars[0 | Math.random() * radix];}
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return 'u' + uuid.join('');
  } else {
    return uuid.join('');
  }
}var _default =

guid;exports.default = _default;

/***/ }),
/* 158 */
/*!*****************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/uview-ui/libs/function/color.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 为了让用户能够自定义主题，会逐步弃用此文件，各颜色通过css提供
// 为了给某些特殊场景使用和向后兼容，无需删除此文件(2020-06-20)
var color = {
  primary: "#2979ff",
  primaryDark: "#2b85e4",
  primaryDisabled: "#a0cfff",
  primaryLight: "#ecf5ff",
  bgColor: "#f3f4f6",

  info: "#909399",
  infoDark: "#82848a",
  infoDisabled: "#c8c9cc",
  infoLight: "#f4f4f5",

  warning: "#ff9900",
  warningDark: "#f29100",
  warningDisabled: "#fcbd71",
  warningLight: "#fdf6ec",

  error: "#fa3534",
  errorDark: "#dd6161",
  errorDisabled: "#fab6b6",
  errorLight: "#fef0f0",

  success: "#19be6b",
  successDark: "#18b566",
  successDisabled: "#71d5a1",
  successLight: "#dbf1e1",

  mainColor: "#303133",
  contentColor: "#606266",
  tipsColor: "#909399",
  lightColor: "#c0c4cc",
  borderColor: "#e4e7ed" };var _default =


color;exports.default = _default;

/***/ }),
/* 159 */
/*!*********************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/uview-ui/libs/function/type2icon.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 根据主题type值,获取对应的图标
                                                                                                      * @param String type 主题名称,primary|info|error|warning|success
                                                                                                      * @param String fill 是否使用fill填充实体的图标  
                                                                                                      */
function type2icon() {var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // 如果非预置值,默认为success
  if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
  var iconName = '';
  // 目前(2019-12-12),info和primary使用同一个图标
  switch (type) {
    case 'primary':
      iconName = 'info-circle';
      break;
    case 'info':
      iconName = 'info-circle';
      break;
    case 'error':
      iconName = 'close-circle';
      break;
    case 'warning':
      iconName = 'error-circle';
      break;
    case 'success':
      iconName = 'checkmark-circle';
      break;
    default:
      iconName = 'checkmark-circle';}

  // 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
  if (fill) iconName += '-fill';
  return iconName;
}var _default =

type2icon;exports.default = _default;

/***/ }),
/* 160 */
/*!***********************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/uview-ui/libs/function/randomArray.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 打乱数组
function randomArray() {var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(function () {return Math.random() - 0.5;});
}var _default =

randomArray;exports.default = _default;

/***/ }),
/* 161 */
/*!*******************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/uview-ui/libs/function/addUnit.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = addUnit;var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 151));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// 添加单位，如果有rpx，%，px等单位结尾或者值为auto，直接返回，否则加上rpx单位结尾
function addUnit() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rpx';
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/***/ }),
/* 162 */
/*!******************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/uview-ui/libs/function/random.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}var _default =

random;exports.default = _default;

/***/ }),
/* 163 */
/*!****************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/uview-ui/libs/function/trim.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function trim(str) {var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, "");
  } else if (pos == "left") {
    return str.replace(/^\s*/, '');
  } else if (pos == 'right') {
    return str.replace(/(\s*$)/g, "");
  } else if (pos == 'all') {
    return str.replace(/\s+/g, "");
  } else {
    return str;
  }
}var _default =

trim;exports.default = _default;

/***/ }),
/* 164 */
/*!*****************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/uview-ui/libs/function/toast.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function toast(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  uni.showToast({
    title: title,
    icon: 'none',
    duration: duration });

}var _default =

toast;exports.default = _default;

/***/ }),
/* 165 */
/*!*********************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/uview-ui/libs/function/getParent.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = getParent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
function getParent(name, keys) {
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {var _ret = function () {
        var data = {};
        // 判断keys是否数组，如果传过来的是一个数组，那么直接使用数组元素值当做键值去父组件寻找
        if (Array.isArray(keys)) {
          keys.map(function (val) {
            data[val] = parent[val] ? parent[val] : '';
          });
        } else {
          // 历遍传过来的对象参数
          for (var i in keys) {
            // 如果子组件有此值则用，无此值则用父组件的值
            // 判断是否空数组，如果是，则用父组件的值，否则用子组件的值
            if (Array.isArray(keys[i])) {
              if (keys[i].length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else if (keys[i].constructor === Object) {
              // 判断是否对象，如果是对象，且有属性，那么使用子组件的值，否则使用父组件的值
              if (Object.keys(keys[i]).length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else {
              // 只要子组件有传值，即使是false值，也是“传值”了，也需要覆盖父组件的同名参数
              data[i] = keys[i] || keys[i] === false ? keys[i] : parent[i];
            }
          }
        }
        return { v: data };}();if (typeof _ret === "object") return _ret.v;
    }
  }

  return {};
}

/***/ }),
/* 166 */
/*!*******************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/uview-ui/libs/function/$parent.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = $parent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
// 这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
// 值(默认为undefined)，就是查找最顶层的$parent
function $parent() {var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options && parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/***/ }),
/* 167 */
/*!***************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/uview-ui/libs/function/sys.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.os = os;exports.sys = sys;function os() {
  return uni.getSystemInfoSync().platform;
};

function sys() {
  return uni.getSystemInfoSync();
}

/***/ }),
/* 168 */
/*!********************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/uview-ui/libs/function/debounce.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timeout = null;

/**
                                                                                                                         * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
                                                                                                                         * 
                                                                                                                         * @param {Function} func 要执行的回调函数 
                                                                                                                         * @param {Number} wait 延时的时间
                                                                                                                         * @param {Boolean} immediate 是否立即执行 
                                                                                                                         * @return null
                                                                                                                         */
function debounce(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}var _default =

debounce;exports.default = _default;

/***/ }),
/* 169 */
/*!********************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/uview-ui/libs/function/throttle.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timer, flag;
/**
                                                                                                                      * 节流原理：在一定时间内，只能触发一次
                                                                                                                      * 
                                                                                                                      * @param {Function} func 要执行的回调函数 
                                                                                                                      * @param {Number} wait 延时的时间
                                                                                                                      * @param {Boolean} immediate 是否立即执行
                                                                                                                      * @return null
                                                                                                                      */
function throttle(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func();
      timer = setTimeout(function () {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true;
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      timer = setTimeout(function () {
        flag = false;
        typeof func === 'function' && func();
      }, wait);
    }

  }
};var _default =
throttle;exports.default = _default;

/***/ }),
/* 170 */
/*!****************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/uview-ui/libs/config/config.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 此版本发布于2020-11-19
var version = '1.8.2';var _default =

{
  v: version,
  version: version,
  // 主题名称
  type: [
  'primary',
  'success',
  'info',
  'error',
  'warning'] };exports.default = _default;

/***/ }),
/* 171 */
/*!****************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/uview-ui/libs/config/zIndex.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */var _default =

{
  toast: 10090,
  noNetwork: 10080,
  // popup包含popup，actionsheet，keyboard，picker的值
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965 };exports.default = _default;

/***/ }),
/* 172 */
/*!**************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/components/mescroll-uni/mescroll-body.vue ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mescroll_body_vue_vue_type_template_id_5eb4c084___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mescroll-body.vue?vue&type=template&id=5eb4c084& */ 173);\n/* harmony import */ var _mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mescroll-body.vue?vue&type=script&lang=js& */ 175);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _mescroll_body_vue_vue_type_template_id_5eb4c084___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _mescroll_body_vue_vue_type_template_id_5eb4c084___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _mescroll_body_vue_vue_type_template_id_5eb4c084___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/mescroll-uni/mescroll-body.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEg7QUFDMUg7QUFDaUU7QUFDTDs7O0FBRzVEO0FBQ3NLO0FBQ3RLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLG1GQUFNO0FBQ1IsRUFBRSx3RkFBTTtBQUNSLEVBQUUsaUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTcyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9tZXNjcm9sbC1ib2R5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZWI0YzA4NCZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21lc2Nyb2xsLWJvZHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9tZXNjcm9sbC1ib2R5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL21lc2Nyb2xsLXVuaS9tZXNjcm9sbC1ib2R5LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///172\n");

/***/ }),
/* 173 */
/*!*********************************************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/components/mescroll-uni/mescroll-body.vue?vue&type=template&id=5eb4c084& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_template_id_5eb4c084___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mescroll-body.vue?vue&type=template&id=5eb4c084& */ 174);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_template_id_5eb4c084___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_template_id_5eb4c084___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_template_id_5eb4c084___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_template_id_5eb4c084___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 174 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/MY/Finance/nice-trade/trading-cat/components/mescroll-uni/mescroll-body.vue?vue&type=template&id=5eb4c084& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: _vm._$s(0, "sc", "mescroll-body"),
      style: _vm._$s(0, "s", {
        minHeight: _vm.minHeight,
        "padding-top": _vm.padTop,
        "padding-bottom": _vm.padBottom,
        "padding-bottom": _vm.padBottomConstant,
        "padding-bottom": _vm.padBottomEnv
      }),
      attrs: { _i: 0 },
      on: {
        touchstart: _vm.touchstartEvent,
        touchmove: _vm.touchmoveEvent,
        touchend: _vm.touchendEvent,
        touchcancel: _vm.touchendEvent
      }
    },
    [
      _c(
        "view",
        {
          staticClass: _vm._$s(1, "sc", "mescroll-body-content"),
          style: _vm._$s(1, "s", {
            transform: _vm.translateY,
            transition: _vm.transition
          }),
          attrs: { _i: 1 }
        },
        [
          _vm._$s(2, "i", _vm.mescroll.optDown.use)
            ? _c(
                "view",
                {
                  staticClass: _vm._$s(2, "sc", "mescroll-downwarp"),
                  style: _vm._$s(2, "s", {
                    "background-color": _vm.mescroll.optDown.bgColor,
                    color: _vm.mescroll.optDown.textColor
                  }),
                  attrs: { _i: 2 }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(3, "sc", "downwarp-content"),
                      attrs: { _i: 3 }
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(4, "sc", "downwarp-progress"),
                        class: _vm._$s(4, "c", {
                          "mescroll-rotate": _vm.isDownLoading
                        }),
                        style: _vm._$s(4, "s", {
                          "border-color": _vm.mescroll.optDown.textColor,
                          transform: _vm.downRotate
                        }),
                        attrs: { _i: 4 }
                      }),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(5, "sc", "downwarp-tip"),
                          attrs: { _i: 5 }
                        },
                        [_vm._v(_vm._$s(5, "t0-0", _vm._s(_vm.downText)))]
                      )
                    ]
                  )
                ]
              )
            : _vm._e(),
          _vm._t("default", null, { _i: 6 }),
          _vm._$s(7, "i", _vm.isShowEmpty)
            ? _c("mescroll-empty", {
                attrs: { option: _vm.mescroll.optUp.empty, _i: 7 },
                on: { emptyclick: _vm.emptyClick }
              })
            : _vm._e(),
          _vm._$s(8, "i", _vm.mescroll.optUp.use && !_vm.isDownLoading)
            ? _c(
                "view",
                {
                  staticClass: _vm._$s(8, "sc", "mescroll-upwarp"),
                  style: _vm._$s(8, "s", {
                    "background-color": _vm.mescroll.optUp.bgColor,
                    color: _vm.mescroll.optUp.textColor
                  }),
                  attrs: { _i: 8 }
                },
                [
                  _c(
                    "view",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm._$s(9, "v-show", _vm.upLoadType === 1),
                          expression: "_$s(9,'v-show',upLoadType===1)"
                        }
                      ],
                      attrs: { _i: 9 }
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(
                          10,
                          "sc",
                          "upwarp-progress mescroll-rotate"
                        ),
                        style: _vm._$s(10, "s", {
                          "border-color": _vm.mescroll.optUp.textColor
                        }),
                        attrs: { _i: 10 }
                      }),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(11, "sc", "upwarp-tip"),
                          attrs: { _i: 11 }
                        },
                        [
                          _vm._v(
                            _vm._$s(
                              11,
                              "t0-0",
                              _vm._s(_vm.mescroll.optUp.textLoading)
                            )
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._$s(12, "i", _vm.upLoadType === 2)
                    ? _c(
                        "view",
                        {
                          staticClass: _vm._$s(12, "sc", "upwarp-nodata"),
                          attrs: { _i: 12 }
                        },
                        [
                          _vm._v(
                            _vm._$s(
                              12,
                              "t0-0",
                              _vm._s(_vm.mescroll.optUp.textNoMore)
                            )
                          )
                        ]
                      )
                    : _vm._e()
                ]
              )
            : _vm._e()
        ],
        2
      ),
      _c("mescroll-top", {
        attrs: { option: _vm.mescroll.optUp.toTop, _i: 13 },
        on: { click: _vm.toTopClick },
        model: {
          value: _vm._$s(13, "v-model", _vm.isShowToTop),
          callback: function($$v) {
            _vm.isShowToTop = $$v
          },
          expression: "isShowToTop"
        }
      })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 175 */
/*!***************************************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/components/mescroll-uni/mescroll-body.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mescroll-body.vue?vue&type=script&lang=js& */ 176);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFqQixDQUFnQixta0JBQUcsRUFBQyIsImZpbGUiOiIxNzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZXNjcm9sbC1ib2R5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVzY3JvbGwtYm9keS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///175\n");

/***/ }),
/* 176 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/MY/Finance/nice-trade/trading-cat/components/mescroll-uni/mescroll-body.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _mescrollUni = _interopRequireDefault(__webpack_require__(/*! ./mescroll-uni.js */ 177));\n\nvar _mescrollUniOption = _interopRequireDefault(__webpack_require__(/*! ./mescroll-uni-option.js */ 178));\n\nvar _mescrollEmpty = _interopRequireDefault(__webpack_require__(/*! ./components/mescroll-empty.vue */ 179));\n\nvar _mescrollTop = _interopRequireDefault(__webpack_require__(/*! ./components/mescroll-top.vue */ 184));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// 引入mescroll-uni.js,处理核心逻辑\n// 引入全局配置\n// 引入空布局组件\n// 引入回到顶部组件\nvar _default = { components: { MescrollEmpty: _mescrollEmpty.default, MescrollTop: _mescrollTop.default }, data: function data() {return { mescroll: { optDown: {}, optUp: {} }, // mescroll实例\n      downHight: 0, //下拉刷新: 容器高度\n      downRate: 0, // 下拉比率(inOffset: rate<1; outOffset: rate>=1)\n      downLoadType: 4, // 下拉刷新状态 （inOffset：1， outOffset：2， showLoading：3， endDownScroll：4）\n      upLoadType: 0, // 上拉加载状态：0（loading前），1（loading中），2（没有更多了）\n      isShowEmpty: false, // 是否显示空布局\n      isShowToTop: false, // 是否显示回到顶部按钮\n      windowHeight: 0, // 可使用窗口的高度\n      statusBarHeight: 0, // 状态栏高度\n      isSafearea: false // 支持安全区\n    };}, props: { down: Object, // 下拉刷新的参数配置\n    up: Object, // 上拉加载的参数配置\n    top: [String, Number], // 下拉布局往下的偏移量 (支持20, \"20rpx\", \"20px\", \"20%\"格式的值, 其中纯数字则默认单位rpx, 百分比则相对于windowHeight)\n    topbar: Boolean, // top的偏移量是否加上状态栏高度, 默认false (使用场景:取消原生导航栏时,配置此项可自动加上状态栏高度的偏移量)\n    bottom: [String, Number], // 上拉布局往上的偏移量 (支持20, \"20rpx\", \"20px\", \"20%\"格式的值, 其中纯数字则默认单位rpx, 百分比则相对于windowHeight)\n    safearea: Boolean, // bottom的偏移量是否加上底部安全区的距离, 默认false (需要适配iPhoneX时使用)\n    height: [String, Number] // 指定mescroll最小高度,默认windowHeight,使列表不满屏仍可下拉\n  }, computed: { // mescroll最小高度,默认windowHeight,使列表不满屏仍可下拉\n    minHeight: function minHeight() {return this.toPx(this.height || '100%') + 'px';}, // 下拉布局往下偏移的距离 (px)\n    numTop: function numTop() {return this.toPx(this.top) + (this.topbar ? this.statusBarHeight : 0);}, padTop: function padTop() {return this.numTop + 'px';}, // 上拉布局往上偏移 (px)\n    numBottom: function numBottom() {return this.toPx(this.bottom);}, padBottom: function padBottom() {return this.numBottom + 'px';}, padBottomConstant: function padBottomConstant() {return this.isSafearea ? 'calc(' + this.padBottom + ' + constant(safe-area-inset-bottom))' : this.padBottom;}, padBottomEnv: function padBottomEnv() {return this.isSafearea ? 'calc(' + this.padBottom + ' + env(safe-area-inset-bottom))' : this.padBottom;}, // 是否为重置下拉的状态\n    isDownReset: function isDownReset() {return this.downLoadType === 3 || this.downLoadType === 4;}, // 过渡\n    transition: function transition() {return this.isDownReset ? 'transform 300ms' : this.downTransition;},\n    translateY: function translateY() {\n      return this.downHight > 0 ? 'translateY(' + this.downHight + 'px)' : ''; // transform会使fixed失效,需注意把fixed元素写在mescroll之外\n    },\n    // 是否在加载中\n    isDownLoading: function isDownLoading() {\n      return this.downLoadType === 3;\n    },\n    // 旋转的角度\n    downRotate: function downRotate() {\n      return 'rotate(' + 360 * this.downRate + 'deg)';\n    },\n    // 文本提示\n    downText: function downText() {\n      switch (this.downLoadType) {\n        case 1:return this.mescroll.optDown.textInOffset;\n        case 2:return this.mescroll.optDown.textOutOffset;\n        case 3:return this.mescroll.optDown.textLoading;\n        case 4:return this.mescroll.optDown.textLoading;\n        default:return this.mescroll.optDown.textInOffset;}\n\n    } },\n\n  methods: {\n    //number,rpx,upx,px,% --> px的数值\n    toPx: function toPx(num) {\n      if (typeof num === 'string') {\n        if (num.indexOf('px') !== -1) {\n          if (num.indexOf('rpx') !== -1) {\n            // \"10rpx\"\n            num = num.replace('rpx', '');\n          } else if (num.indexOf('upx') !== -1) {\n            // \"10upx\"\n            num = num.replace('upx', '');\n          } else {\n            // \"10px\"\n            return Number(num.replace('px', ''));\n          }\n        } else if (num.indexOf('%') !== -1) {\n          // 传百分比,则相对于windowHeight,传\"10%\"则等于windowHeight的10%\n          var rate = Number(num.replace('%', '')) / 100;\n          return this.windowHeight * rate;\n        }\n      }\n      return num ? uni.upx2px(Number(num)) : 0;\n    },\n    //注册列表touchstart事件,用于下拉刷新\n    touchstartEvent: function touchstartEvent(e) {\n      this.mescroll.touchstartEvent(e);\n    },\n    //注册列表touchmove事件,用于下拉刷新\n    touchmoveEvent: function touchmoveEvent(e) {\n      this.mescroll.touchmoveEvent(e);\n    },\n    //注册列表touchend事件,用于下拉刷新\n    touchendEvent: function touchendEvent(e) {\n      this.mescroll.touchendEvent(e);\n    },\n    // 点击空布局的按钮回调\n    emptyClick: function emptyClick() {\n      this.$emit('emptyclick', this.mescroll);\n    },\n    // 点击回到顶部的按钮回调\n    toTopClick: function toTopClick() {\n      this.mescroll.scrollTo(0, this.mescroll.optUp.toTop.duration); // 执行回到顶部\n      this.$emit('topclick', this.mescroll); // 派发点击回到顶部按钮的回调\n    } },\n\n  // 使用created初始化mescroll对象; 如果用mounted部分css样式编译到H5会失效\n  created: function created() {\n    var vm = this;\n\n    var diyOption = {\n      // 下拉刷新的配置\n      down: {\n        inOffset: function inOffset(mescroll) {\n          vm.downLoadType = 1; // 下拉的距离进入offset范围内那一刻的回调 (自定义mescroll组件时,此行不可删)\n        },\n        outOffset: function outOffset(mescroll) {\n          vm.downLoadType = 2; // 下拉的距离大于offset那一刻的回调 (自定义mescroll组件时,此行不可删)\n        },\n        onMoving: function onMoving(mescroll, rate, downHight) {\n          // 下拉过程中的回调,滑动过程一直在执行;\n          vm.downHight = downHight; // 设置下拉区域的高度 (自定义mescroll组件时,此行不可删)\n          vm.downRate = rate; //下拉比率 (inOffset: rate<1; outOffset: rate>=1)\n        },\n        showLoading: function showLoading(mescroll, downHight) {\n          vm.downLoadType = 3; // 显示下拉刷新进度的回调 (自定义mescroll组件时,此行不可删)\n          vm.downHight = downHight; // 设置下拉区域的高度 (自定义mescroll组件时,此行不可删)\n        },\n        endDownScroll: function endDownScroll(mescroll) {\n          vm.downLoadType = 4; // 结束下拉 (自定义mescroll组件时,此行不可删)\n          vm.downHight = 0; // 设置下拉区域的高度 (自定义mescroll组件时,此行不可删)\n        },\n        // 派发下拉刷新的回调\n        callback: function callback(mescroll) {\n          vm.$emit('down', mescroll);\n        } },\n\n      // 上拉加载的配置\n      up: {\n        // 显示加载中的回调\n        showLoading: function showLoading() {\n          vm.upLoadType = 1;\n        },\n        // 显示无更多数据的回调\n        showNoMore: function showNoMore() {\n          vm.upLoadType = 2;\n        },\n        // 隐藏上拉加载的回调\n        hideUpScroll: function hideUpScroll() {\n          vm.upLoadType = 0;\n        },\n        // 空布局\n        empty: {\n          onShow: function onShow(isShow) {\n            // 显示隐藏的回调\n            vm.isShowEmpty = isShow;\n          } },\n\n        // 回到顶部\n        toTop: {\n          onShow: function onShow(isShow) {\n            // 显示隐藏的回调\n            vm.isShowToTop = isShow;\n          } },\n\n        // 派发上拉加载的回调\n        callback: function callback(mescroll) {\n          vm.$emit('up', mescroll);\n        } } };\n\n\n\n    _mescrollUni.default.extend(diyOption, _mescrollUniOption.default); // 混入全局的配置\n    var myOption = JSON.parse(\n    JSON.stringify({\n      down: vm.down,\n      up: vm.up }));\n\n    // 深拷贝,避免对props的影响\n    _mescrollUni.default.extend(myOption, diyOption); // 混入具体界面的配置\n\n    // 初始化MeScroll对象\n    vm.mescroll = new _mescrollUni.default(myOption, true); // 传入true,标记body为滚动区域\n    // init回调mescroll对象\n    vm.$emit('init', vm.mescroll);\n\n    // 设置高度\n    var sys = uni.getSystemInfoSync();\n    if (sys.windowHeight) vm.windowHeight = sys.windowHeight;\n    if (sys.statusBarHeight) vm.statusBarHeight = sys.statusBarHeight;\n    // 使down的bottomOffset生效\n    vm.mescroll.setBodyHeight(sys.windowHeight);\n    // mescroll-body在Android小程序下拉会卡顿,无法像mescroll-uni那样通过设置\"disableScroll\":true解决,只能用动画过渡缓解\n\n\n\n\n    // 因为使用的是page的scroll,这里需自定义scrollTo\n    vm.mescroll.resetScrollTo(function (y, t) {\n      uni.pageScrollTo({\n        scrollTop: y,\n        duration: t });\n\n    });\n\n    // 具体的界面如果不配置up.toTop.safearea,则取本vue的safearea值\n    if (sys.platform == \"ios\") {\n      vm.isSafearea = vm.safearea;\n      if (vm.up && vm.up.toTop && vm.up.toTop.safearea != null) {} else {\n        vm.mescroll.optUp.toTop.safearea = vm.safearea;\n      }\n    } else {\n      vm.isSafearea = false;\n      vm.mescroll.optUp.toTop.safearea = false;\n    }\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9tZXNjcm9sbC11bmkvbWVzY3JvbGwtYm9keS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ0E7O0FBRUE7O0FBRUE7O0FBRUEseUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVBBO0FBRUE7QUFFQTtBQUVBO2VBR0EsRUFDQSxjQUNBLHFDQURBLEVBRUEsaUNBRkEsRUFEQSxFQUtBLElBTEEsa0JBS0EsQ0FDQSxTQUNBLG9DQURBLEVBQ0E7QUFDQSxrQkFGQSxFQUVBO0FBQ0EsaUJBSEEsRUFHQTtBQUNBLHFCQUpBLEVBSUE7QUFDQSxtQkFMQSxFQUtBO0FBQ0Esd0JBTkEsRUFNQTtBQUNBLHdCQVBBLEVBT0E7QUFDQSxxQkFSQSxFQVFBO0FBQ0Esd0JBVEEsRUFTQTtBQUNBLHVCQVZBLENBVUE7QUFWQSxNQVlBLENBbEJBLEVBbUJBLFNBQ0EsWUFEQSxFQUNBO0FBQ0EsY0FGQSxFQUVBO0FBQ0EseUJBSEEsRUFHQTtBQUNBLG1CQUpBLEVBSUE7QUFDQSw0QkFMQSxFQUtBO0FBQ0EscUJBTkEsRUFNQTtBQUNBLDRCQVBBLENBT0E7QUFQQSxHQW5CQSxFQTRCQSxZQUNBO0FBQ0EsYUFGQSx1QkFFQSxDQUNBLCtDQUNBLENBSkEsRUFLQTtBQUNBLFVBTkEsb0JBTUEsQ0FDQSxzRUFDQSxDQVJBLEVBU0EsTUFUQSxvQkFTQSxDQUNBLDBCQUNBLENBWEEsRUFZQTtBQUNBLGFBYkEsdUJBYUEsQ0FDQSw4QkFDQSxDQWZBLEVBZ0JBLFNBaEJBLHVCQWdCQSxDQUNBLDZCQUNBLENBbEJBLEVBbUJBLGlCQW5CQSwrQkFtQkEsQ0FDQSw0R0FDQSxDQXJCQSxFQXNCQSxZQXRCQSwwQkFzQkEsQ0FDQSx1R0FDQSxDQXhCQSxFQXlCQTtBQUNBLGVBMUJBLHlCQTBCQSxDQUNBLDBEQUNBLENBNUJBLEVBNkJBO0FBQ0EsY0E5QkEsd0JBOEJBLENBQ0Esa0VBQ0EsQ0FoQ0E7QUFpQ0EsY0FqQ0Esd0JBaUNBO0FBQ0EsOEVBREEsQ0FDQTtBQUNBLEtBbkNBO0FBb0NBO0FBQ0EsaUJBckNBLDJCQXFDQTtBQUNBO0FBQ0EsS0F2Q0E7QUF3Q0E7QUFDQSxjQXpDQSx3QkF5Q0E7QUFDQTtBQUNBLEtBM0NBO0FBNENBO0FBQ0EsWUE3Q0Esc0JBNkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUxBOztBQU9BLEtBckRBLEVBNUJBOztBQW1GQTtBQUNBO0FBQ0EsUUFGQSxnQkFFQSxHQUZBLEVBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBLFdBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBWEEsTUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBdEJBO0FBdUJBO0FBQ0EsbUJBeEJBLDJCQXdCQSxDQXhCQSxFQXdCQTtBQUNBO0FBQ0EsS0ExQkE7QUEyQkE7QUFDQSxrQkE1QkEsMEJBNEJBLENBNUJBLEVBNEJBO0FBQ0E7QUFDQSxLQTlCQTtBQStCQTtBQUNBLGlCQWhDQSx5QkFnQ0EsQ0FoQ0EsRUFnQ0E7QUFDQTtBQUNBLEtBbENBO0FBbUNBO0FBQ0EsY0FwQ0Esd0JBb0NBO0FBQ0E7QUFDQSxLQXRDQTtBQXVDQTtBQUNBLGNBeENBLHdCQXdDQTtBQUNBLG9FQURBLENBQ0E7QUFDQSw0Q0FGQSxDQUVBO0FBQ0EsS0EzQ0EsRUFuRkE7O0FBZ0lBO0FBQ0EsU0FqSUEscUJBaUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBREEsb0JBQ0EsUUFEQSxFQUNBO0FBQ0EsOEJBREEsQ0FDQTtBQUNBLFNBSEE7QUFJQSxpQkFKQSxxQkFJQSxRQUpBLEVBSUE7QUFDQSw4QkFEQSxDQUNBO0FBQ0EsU0FOQTtBQU9BLGdCQVBBLG9CQU9BLFFBUEEsRUFPQSxJQVBBLEVBT0EsU0FQQSxFQU9BO0FBQ0E7QUFDQSxtQ0FGQSxDQUVBO0FBQ0EsNkJBSEEsQ0FHQTtBQUNBLFNBWEE7QUFZQSxtQkFaQSx1QkFZQSxRQVpBLEVBWUEsU0FaQSxFQVlBO0FBQ0EsOEJBREEsQ0FDQTtBQUNBLG1DQUZBLENBRUE7QUFDQSxTQWZBO0FBZ0JBLHFCQWhCQSx5QkFnQkEsUUFoQkEsRUFnQkE7QUFDQSw4QkFEQSxDQUNBO0FBQ0EsMkJBRkEsQ0FFQTtBQUNBLFNBbkJBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBLFNBdkJBLEVBRkE7O0FBMkJBO0FBQ0E7QUFDQTtBQUNBLG1CQUZBLHlCQUVBO0FBQ0E7QUFDQSxTQUpBO0FBS0E7QUFDQSxrQkFOQSx3QkFNQTtBQUNBO0FBQ0EsU0FSQTtBQVNBO0FBQ0Esb0JBVkEsMEJBVUE7QUFDQTtBQUNBLFNBWkE7QUFhQTtBQUNBO0FBQ0EsZ0JBREEsa0JBQ0EsTUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBLFdBSkEsRUFkQTs7QUFvQkE7QUFDQTtBQUNBLGdCQURBLGtCQUNBLE1BREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUpBLEVBckJBOztBQTJCQTtBQUNBO0FBQ0E7QUFDQSxTQTlCQSxFQTVCQTs7OztBQThEQSx1RUFqRUEsQ0FpRUE7QUFDQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxlQUZBLEdBREE7O0FBS0E7QUFDQSxxREF4RUEsQ0F3RUE7O0FBRUE7QUFDQSwyREEzRUEsQ0EyRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBLG9CQURBO0FBRUEsbUJBRkE7O0FBSUEsS0FMQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUxBLE1BS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQTdPQSxFIiwiZmlsZSI6IjE3Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cIm1lc2Nyb2xsLWJvZHlcIiA6c3R5bGU9XCJ7J21pbkhlaWdodCc6bWluSGVpZ2h0LCAncGFkZGluZy10b3AnOiBwYWRUb3AsICdwYWRkaW5nLWJvdHRvbSc6IHBhZEJvdHRvbSwgJ3BhZGRpbmctYm90dG9tJzogcGFkQm90dG9tQ29uc3RhbnQsICdwYWRkaW5nLWJvdHRvbSc6IHBhZEJvdHRvbUVudiB9XCIgQHRvdWNoc3RhcnQ9XCJ0b3VjaHN0YXJ0RXZlbnRcIiBAdG91Y2htb3ZlPVwidG91Y2htb3ZlRXZlbnRcIiBAdG91Y2hlbmQ9XCJ0b3VjaGVuZEV2ZW50XCIgQHRvdWNoY2FuY2VsPVwidG91Y2hlbmRFdmVudFwiID5cclxuXHRcdDx2aWV3IGNsYXNzPVwibWVzY3JvbGwtYm9keS1jb250ZW50XCIgOnN0eWxlPVwieyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVksIHRyYW5zaXRpb246IHRyYW5zaXRpb24gfVwiPlxyXG5cdFx0XHQ8IS0tIOS4i+aLieWKoOi9veWMuuWfnyAo5pSv5LuY5a6d5bCP56iL5bqP5a2Q57uE5Lu25Lyg5Y+C57uZ5a2Q5a2Q57uE5Lu25LuN5oql5Y2V6aG55pWw5o2u5rWB55qE5byC5bi4LOaaguaXtuS4jemAmui/h21lc2Nyb2xsLWRvd27nu4Tku7blrp7njrApLS0+XHJcblx0XHRcdDwhLS0gPG1lc2Nyb2xsLWRvd24gOm9wdGlvbj1cIm1lc2Nyb2xsLm9wdERvd25cIiA6dHlwZT1cImRvd25Mb2FkVHlwZVwiIDpyYXRlPVwiZG93blJhdGVcIj48L21lc2Nyb2xsLWRvd24+IC0tPlxyXG5cdFx0XHQ8dmlldyB2LWlmPVwibWVzY3JvbGwub3B0RG93bi51c2VcIiBjbGFzcz1cIm1lc2Nyb2xsLWRvd253YXJwXCIgOnN0eWxlPVwieydiYWNrZ3JvdW5kLWNvbG9yJzptZXNjcm9sbC5vcHREb3duLmJnQ29sb3IsJ2NvbG9yJzptZXNjcm9sbC5vcHREb3duLnRleHRDb2xvcn1cIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImRvd253YXJwLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZG93bndhcnAtcHJvZ3Jlc3NcIiA6Y2xhc3M9XCJ7J21lc2Nyb2xsLXJvdGF0ZSc6IGlzRG93bkxvYWRpbmd9XCIgOnN0eWxlPVwieydib3JkZXItY29sb3InOm1lc2Nyb2xsLm9wdERvd24udGV4dENvbG9yLCAndHJhbnNmb3JtJzogZG93blJvdGF0ZX1cIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRvd253YXJwLXRpcFwiPnt7ZG93blRleHR9fTwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcclxuXHRcdFx0PCEtLSDliJfooajlhoXlrrkgLS0+XHJcblx0XHRcdDxzbG90Pjwvc2xvdD5cclxuXHJcblx0XHRcdDwhLS0g56m65biD5bGAIC0tPlxyXG5cdFx0XHQ8bWVzY3JvbGwtZW1wdHkgdi1pZj1cImlzU2hvd0VtcHR5XCIgOm9wdGlvbj1cIm1lc2Nyb2xsLm9wdFVwLmVtcHR5XCIgQGVtcHR5Y2xpY2s9XCJlbXB0eUNsaWNrXCI+PC9tZXNjcm9sbC1lbXB0eT5cclxuXHJcblx0XHRcdDwhLS0g5LiK5ouJ5Yqg6L295Yy65Z+fICjkuIvmi4nliLfmlrDml7bkuI3mmL7npLosIOaUr+S7mOWuneWwj+eoi+W6j+WtkOe7hOS7tuS8oOWPgue7meWtkOWtkOe7hOS7tuS7jeaKpeWNlemhueaVsOaNrua1geeahOW8guW4uCzmmoLml7bkuI3pgJrov4dtZXNjcm9sbC11cOe7hOS7tuWunueOsCktLT5cclxuXHRcdFx0PCEtLSA8bWVzY3JvbGwtdXAgdi1pZj1cIm1lc2Nyb2xsLm9wdFVwLnVzZSAmJiAhaXNEb3duTG9hZGluZ1wiIDpvcHRpb249XCJtZXNjcm9sbC5vcHRVcFwiIDp0eXBlPVwidXBMb2FkVHlwZVwiPjwvbWVzY3JvbGwtdXA+IC0tPlxyXG5cdFx0XHQ8dmlldyB2LWlmPVwibWVzY3JvbGwub3B0VXAudXNlICYmICFpc0Rvd25Mb2FkaW5nXCIgY2xhc3M9XCJtZXNjcm9sbC11cHdhcnBcIiA6c3R5bGU9XCJ7J2JhY2tncm91bmQtY29sb3InOm1lc2Nyb2xsLm9wdFVwLmJnQ29sb3IsJ2NvbG9yJzptZXNjcm9sbC5vcHRVcC50ZXh0Q29sb3J9XCI+XHJcblx0XHRcdFx0PCEtLSDliqDovb3kuK0gKOatpOWkhOS4jeiDveeUqHYtaWYs5ZCm5YiZYW5kcm9pZOWwj+eoi+W6j+W/q+mAn+S4iuaLieWPr+iDveS8muS4jeaWreinpuWPkeS4iuaLieWbnuiwgykgLS0+XHJcblx0XHRcdFx0PHZpZXcgdi1zaG93PVwidXBMb2FkVHlwZT09PTFcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXB3YXJwLXByb2dyZXNzIG1lc2Nyb2xsLXJvdGF0ZVwiIDpzdHlsZT1cInsnYm9yZGVyLWNvbG9yJzptZXNjcm9sbC5vcHRVcC50ZXh0Q29sb3J9XCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1cHdhcnAtdGlwXCI+e3sgbWVzY3JvbGwub3B0VXAudGV4dExvYWRpbmcgfX08L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0g5peg5pWw5o2uIC0tPlxyXG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJ1cExvYWRUeXBlPT09MlwiIGNsYXNzPVwidXB3YXJwLW5vZGF0YVwiPnt7IG1lc2Nyb2xsLm9wdFVwLnRleHROb01vcmUgfX08L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHJcblx0XHQ8IS0tIOWbnuWIsOmhtumDqOaMiemSriAoZml4ZWTlhYPntKDpnIDlhpnlnKh0cmFuc2Zvcm3lpJbpnaIs6Ziy5q2i6ZmN57qn5Li6YWJzb2x1dGUpLS0+XHJcblx0XHQ8bWVzY3JvbGwtdG9wIHYtbW9kZWw9XCJpc1Nob3dUb1RvcFwiIDpvcHRpb249XCJtZXNjcm9sbC5vcHRVcC50b1RvcFwiIEBjbGljaz1cInRvVG9wQ2xpY2tcIj48L21lc2Nyb2xsLXRvcD5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdC8vIOW8leWFpW1lc2Nyb2xsLXVuaS5qcyzlpITnkIbmoLjlv4PpgLvovpFcclxuXHRpbXBvcnQgTWVTY3JvbGwgZnJvbSAnLi9tZXNjcm9sbC11bmkuanMnO1xyXG5cdC8vIOW8leWFpeWFqOWxgOmFjee9rlxyXG5cdGltcG9ydCBHbG9iYWxPcHRpb24gZnJvbSAnLi9tZXNjcm9sbC11bmktb3B0aW9uLmpzJztcclxuXHQvLyDlvJXlhaXnqbrluIPlsYDnu4Tku7ZcclxuXHRpbXBvcnQgTWVzY3JvbGxFbXB0eSBmcm9tICcuL2NvbXBvbmVudHMvbWVzY3JvbGwtZW1wdHkudnVlJztcclxuXHQvLyDlvJXlhaXlm57liLDpobbpg6jnu4Tku7ZcclxuXHRpbXBvcnQgTWVzY3JvbGxUb3AgZnJvbSAnLi9jb21wb25lbnRzL21lc2Nyb2xsLXRvcC52dWUnO1xyXG5cdFxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0TWVzY3JvbGxFbXB0eSxcclxuXHRcdFx0TWVzY3JvbGxUb3BcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdG1lc2Nyb2xsOiB7b3B0RG93bjp7fSxvcHRVcDp7fX0sIC8vIG1lc2Nyb2xs5a6e5L6LXHJcblx0XHRcdFx0ZG93bkhpZ2h0OiAwLCAvL+S4i+aLieWIt+aWsDog5a655Zmo6auY5bqmXHJcblx0XHRcdFx0ZG93blJhdGU6IDAsIC8vIOS4i+aLieavlOeOhyhpbk9mZnNldDogcmF0ZTwxOyBvdXRPZmZzZXQ6IHJhdGU+PTEpXHJcblx0XHRcdFx0ZG93bkxvYWRUeXBlOiA0LCAvLyDkuIvmi4nliLfmlrDnirbmgIEg77yIaW5PZmZzZXTvvJox77yMIG91dE9mZnNldO+8mjLvvIwgc2hvd0xvYWRpbmfvvJoz77yMIGVuZERvd25TY3JvbGzvvJo077yJXHJcblx0XHRcdFx0dXBMb2FkVHlwZTogMCwgLy8g5LiK5ouJ5Yqg6L2954q25oCB77yaMO+8iGxvYWRpbmfliY3vvInvvIwx77yIbG9hZGluZ+S4re+8ie+8jDLvvIjmsqHmnInmm7TlpJrkuobvvIlcclxuXHRcdFx0XHRpc1Nob3dFbXB0eTogZmFsc2UsIC8vIOaYr+WQpuaYvuekuuepuuW4g+WxgFxyXG5cdFx0XHRcdGlzU2hvd1RvVG9wOiBmYWxzZSwgLy8g5piv5ZCm5pi+56S65Zue5Yiw6aG26YOo5oyJ6ZKuXHJcblx0XHRcdFx0d2luZG93SGVpZ2h0OiAwLCAvLyDlj6/kvb/nlKjnqpflj6PnmoTpq5jluqZcclxuXHRcdFx0XHRzdGF0dXNCYXJIZWlnaHQ6IDAsIC8vIOeKtuaAgeagj+mrmOW6plxyXG5cdFx0XHRcdGlzU2FmZWFyZWE6IGZhbHNlIC8vIOaUr+aMgeWuieWFqOWMulxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGRvd246IE9iamVjdCwgLy8g5LiL5ouJ5Yi35paw55qE5Y+C5pWw6YWN572uXHJcblx0XHRcdHVwOiBPYmplY3QsIC8vIOS4iuaLieWKoOi9veeahOWPguaVsOmFjee9rlxyXG5cdFx0XHR0b3A6IFtTdHJpbmcsIE51bWJlcl0sIC8vIOS4i+aLieW4g+WxgOW+gOS4i+eahOWBj+enu+mHjyAo5pSv5oyBMjAsIFwiMjBycHhcIiwgXCIyMHB4XCIsIFwiMjAlXCLmoLzlvI/nmoTlgLwsIOWFtuS4ree6r+aVsOWtl+WImem7mOiupOWNleS9jXJweCwg55m+5YiG5q+U5YiZ55u45a+55LqOd2luZG93SGVpZ2h0KVxyXG5cdFx0XHR0b3BiYXI6IEJvb2xlYW4sIC8vIHRvcOeahOWBj+enu+mHj+aYr+WQpuWKoOS4iueKtuaAgeagj+mrmOW6piwg6buY6K6kZmFsc2UgKOS9v+eUqOWcuuaZrzrlj5bmtojljp/nlJ/lr7zoiKrmoI/ml7Ys6YWN572u5q2k6aG55Y+v6Ieq5Yqo5Yqg5LiK54q25oCB5qCP6auY5bqm55qE5YGP56e76YePKVxyXG5cdFx0XHRib3R0b206IFtTdHJpbmcsIE51bWJlcl0sIC8vIOS4iuaLieW4g+WxgOW+gOS4iueahOWBj+enu+mHjyAo5pSv5oyBMjAsIFwiMjBycHhcIiwgXCIyMHB4XCIsIFwiMjAlXCLmoLzlvI/nmoTlgLwsIOWFtuS4ree6r+aVsOWtl+WImem7mOiupOWNleS9jXJweCwg55m+5YiG5q+U5YiZ55u45a+55LqOd2luZG93SGVpZ2h0KVxyXG5cdFx0XHRzYWZlYXJlYTogQm9vbGVhbiwgLy8gYm90dG9t55qE5YGP56e76YeP5piv5ZCm5Yqg5LiK5bqV6YOo5a6J5YWo5Yy655qE6Led56a7LCDpu5jorqRmYWxzZSAo6ZyA6KaB6YCC6YWNaVBob25lWOaXtuS9v+eUqClcclxuXHRcdFx0aGVpZ2h0OiBbU3RyaW5nLCBOdW1iZXJdIC8vIOaMh+Wumm1lc2Nyb2xs5pyA5bCP6auY5bqmLOm7mOiupHdpbmRvd0hlaWdodCzkvb/liJfooajkuI3mu6HlsY/ku43lj6/kuIvmi4lcclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHQvLyBtZXNjcm9sbOacgOWwj+mrmOW6pizpu5jorqR3aW5kb3dIZWlnaHQs5L2/5YiX6KGo5LiN5ruh5bGP5LuN5Y+v5LiL5ouJXHJcblx0XHRcdG1pbkhlaWdodCgpe1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnRvUHgodGhpcy5oZWlnaHQgfHwgJzEwMCUnKSArICdweCdcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5LiL5ouJ5biD5bGA5b6A5LiL5YGP56e755qE6Led56a7IChweClcclxuXHRcdFx0bnVtVG9wKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnRvUHgodGhpcy50b3ApICsgKHRoaXMudG9wYmFyID8gdGhpcy5zdGF0dXNCYXJIZWlnaHQgOiAwKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0cGFkVG9wKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLm51bVRvcCArICdweCc7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOS4iuaLieW4g+WxgOW+gOS4iuWBj+enuyAocHgpXHJcblx0XHRcdG51bUJvdHRvbSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy50b1B4KHRoaXMuYm90dG9tKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0cGFkQm90dG9tKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLm51bUJvdHRvbSArICdweCc7XHJcblx0XHRcdH0sXHJcblx0XHRcdHBhZEJvdHRvbUNvbnN0YW50KCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmlzU2FmZWFyZWEgPyAnY2FsYygnICsgdGhpcy5wYWRCb3R0b20gKyAnICsgY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpJyA6IHRoaXMucGFkQm90dG9tO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRwYWRCb3R0b21FbnYoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaXNTYWZlYXJlYSA/ICdjYWxjKCcgKyB0aGlzLnBhZEJvdHRvbSArICcgKyBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpJyA6IHRoaXMucGFkQm90dG9tO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmK/lkKbkuLrph43nva7kuIvmi4nnmoTnirbmgIFcclxuXHRcdFx0aXNEb3duUmVzZXQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZG93bkxvYWRUeXBlID09PSAzIHx8IHRoaXMuZG93bkxvYWRUeXBlID09PSA0O1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDov4fmuKFcclxuXHRcdFx0dHJhbnNpdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pc0Rvd25SZXNldCA/ICd0cmFuc2Zvcm0gMzAwbXMnIDogdGhpcy5kb3duVHJhbnNpdGlvbjtcclxuXHRcdFx0fSxcclxuXHRcdFx0dHJhbnNsYXRlWSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5kb3duSGlnaHQgPiAwID8gJ3RyYW5zbGF0ZVkoJyArIHRoaXMuZG93bkhpZ2h0ICsgJ3B4KScgOiAnJzsgLy8gdHJhbnNmb3Jt5Lya5L2/Zml4ZWTlpLHmlYgs6ZyA5rOo5oSP5oqKZml4ZWTlhYPntKDlhpnlnKhtZXNjcm9sbOS5i+WkllxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmK/lkKblnKjliqDovb3kuK1cclxuXHRcdFx0aXNEb3duTG9hZGluZygpe1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmRvd25Mb2FkVHlwZSA9PT0gM1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDml4vovaznmoTop5LluqZcclxuXHRcdFx0ZG93blJvdGF0ZSgpe1xyXG5cdFx0XHRcdHJldHVybiAncm90YXRlKCcgKyAzNjAgKiB0aGlzLmRvd25SYXRlICsgJ2RlZyknXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaWh+acrOaPkOekulxyXG5cdFx0XHRkb3duVGV4dCgpe1xyXG5cdFx0XHRcdHN3aXRjaCAodGhpcy5kb3duTG9hZFR5cGUpe1xyXG5cdFx0XHRcdFx0Y2FzZSAxOiByZXR1cm4gdGhpcy5tZXNjcm9sbC5vcHREb3duLnRleHRJbk9mZnNldDtcclxuXHRcdFx0XHRcdGNhc2UgMjogcmV0dXJuIHRoaXMubWVzY3JvbGwub3B0RG93bi50ZXh0T3V0T2Zmc2V0O1xyXG5cdFx0XHRcdFx0Y2FzZSAzOiByZXR1cm4gdGhpcy5tZXNjcm9sbC5vcHREb3duLnRleHRMb2FkaW5nO1xyXG5cdFx0XHRcdFx0Y2FzZSA0OiByZXR1cm4gdGhpcy5tZXNjcm9sbC5vcHREb3duLnRleHRMb2FkaW5nO1xyXG5cdFx0XHRcdFx0ZGVmYXVsdDogcmV0dXJuIHRoaXMubWVzY3JvbGwub3B0RG93bi50ZXh0SW5PZmZzZXQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQvL251bWJlcixycHgsdXB4LHB4LCUgLS0+IHB455qE5pWw5YC8XHJcblx0XHRcdHRvUHgobnVtKSB7XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBudW0gPT09ICdzdHJpbmcnKSB7XHJcblx0XHRcdFx0XHRpZiAobnVtLmluZGV4T2YoJ3B4JykgIT09IC0xKSB7XHJcblx0XHRcdFx0XHRcdGlmIChudW0uaW5kZXhPZigncnB4JykgIT09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gXCIxMHJweFwiXHJcblx0XHRcdFx0XHRcdFx0bnVtID0gbnVtLnJlcGxhY2UoJ3JweCcsICcnKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudW0uaW5kZXhPZigndXB4JykgIT09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gXCIxMHVweFwiXHJcblx0XHRcdFx0XHRcdFx0bnVtID0gbnVtLnJlcGxhY2UoJ3VweCcsICcnKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBcIjEwcHhcIlxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBOdW1iZXIobnVtLnJlcGxhY2UoJ3B4JywgJycpKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChudW0uaW5kZXhPZignJScpICE9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHQvLyDkvKDnmb7liIbmr5Qs5YiZ55u45a+55LqOd2luZG93SGVpZ2h0LOS8oFwiMTAlXCLliJnnrYnkuo53aW5kb3dIZWlnaHTnmoQxMCVcclxuXHRcdFx0XHRcdFx0bGV0IHJhdGUgPSBOdW1iZXIobnVtLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy53aW5kb3dIZWlnaHQgKiByYXRlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gbnVtID8gdW5pLnVweDJweChOdW1iZXIobnVtKSkgOiAwO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+azqOWGjOWIl+ihqHRvdWNoc3RhcnTkuovku7Ys55So5LqO5LiL5ouJ5Yi35pawXHJcblx0XHRcdHRvdWNoc3RhcnRFdmVudChlKSB7XHJcblx0XHRcdFx0dGhpcy5tZXNjcm9sbC50b3VjaHN0YXJ0RXZlbnQoZSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5rOo5YaM5YiX6KGodG91Y2htb3Zl5LqL5Lu2LOeUqOS6juS4i+aLieWIt+aWsFxyXG5cdFx0XHR0b3VjaG1vdmVFdmVudChlKSB7XHJcblx0XHRcdFx0dGhpcy5tZXNjcm9sbC50b3VjaG1vdmVFdmVudChlKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/ms6jlhozliJfooah0b3VjaGVuZOS6i+S7tiznlKjkuo7kuIvmi4nliLfmlrBcclxuXHRcdFx0dG91Y2hlbmRFdmVudChlKSB7XHJcblx0XHRcdFx0dGhpcy5tZXNjcm9sbC50b3VjaGVuZEV2ZW50KGUpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDngrnlh7vnqbrluIPlsYDnmoTmjInpkq7lm57osINcclxuXHRcdFx0ZW1wdHlDbGljaygpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdlbXB0eWNsaWNrJywgdGhpcy5tZXNjcm9sbCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOeCueWHu+WbnuWIsOmhtumDqOeahOaMiemSruWbnuiwg1xyXG5cdFx0XHR0b1RvcENsaWNrKCkge1xyXG5cdFx0XHRcdHRoaXMubWVzY3JvbGwuc2Nyb2xsVG8oMCwgdGhpcy5tZXNjcm9sbC5vcHRVcC50b1RvcC5kdXJhdGlvbik7IC8vIOaJp+ihjOWbnuWIsOmhtumDqFxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ3RvcGNsaWNrJywgdGhpcy5tZXNjcm9sbCk7IC8vIOa0vuWPkeeCueWHu+WbnuWIsOmhtumDqOaMiemSrueahOWbnuiwg1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Ly8g5L2/55SoY3JlYXRlZOWIneWni+WMlm1lc2Nyb2xs5a+56LGhOyDlpoLmnpznlKhtb3VudGVk6YOo5YiGY3Nz5qC35byP57yW6K+R5YiwSDXkvJrlpLHmlYhcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdGxldCB2bSA9IHRoaXM7XHJcblxyXG5cdFx0XHRsZXQgZGl5T3B0aW9uID0ge1xyXG5cdFx0XHRcdC8vIOS4i+aLieWIt+aWsOeahOmFjee9rlxyXG5cdFx0XHRcdGRvd246IHtcclxuXHRcdFx0XHRcdGluT2Zmc2V0KG1lc2Nyb2xsKSB7XHJcblx0XHRcdFx0XHRcdHZtLmRvd25Mb2FkVHlwZSA9IDE7IC8vIOS4i+aLieeahOi3neemu+i/m+WFpW9mZnNldOiMg+WbtOWGhemCo+S4gOWIu+eahOWbnuiwgyAo6Ieq5a6a5LmJbWVzY3JvbGznu4Tku7bml7Ys5q2k6KGM5LiN5Y+v5YigKVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdG91dE9mZnNldChtZXNjcm9sbCkge1xyXG5cdFx0XHRcdFx0XHR2bS5kb3duTG9hZFR5cGUgPSAyOyAvLyDkuIvmi4nnmoTot53nprvlpKfkuo5vZmZzZXTpgqPkuIDliLvnmoTlm57osIMgKOiHquWumuS5iW1lc2Nyb2xs57uE5Lu25pe2LOatpOihjOS4jeWPr+WIoClcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRvbk1vdmluZyhtZXNjcm9sbCwgcmF0ZSwgZG93bkhpZ2h0KSB7XHJcblx0XHRcdFx0XHRcdC8vIOS4i+aLiei/h+eoi+S4reeahOWbnuiwgyzmu5Hliqjov4fnqIvkuIDnm7TlnKjmiafooYw7XHJcblx0XHRcdFx0XHRcdHZtLmRvd25IaWdodCA9IGRvd25IaWdodDsgLy8g6K6+572u5LiL5ouJ5Yy65Z+f55qE6auY5bqmICjoh6rlrprkuYltZXNjcm9sbOe7hOS7tuaXtizmraTooYzkuI3lj6/liKApXHJcblx0XHRcdFx0XHRcdHZtLmRvd25SYXRlID0gcmF0ZTsgLy/kuIvmi4nmr5TnjocgKGluT2Zmc2V0OiByYXRlPDE7IG91dE9mZnNldDogcmF0ZT49MSlcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRzaG93TG9hZGluZyhtZXNjcm9sbCwgZG93bkhpZ2h0KSB7XHJcblx0XHRcdFx0XHRcdHZtLmRvd25Mb2FkVHlwZSA9IDM7IC8vIOaYvuekuuS4i+aLieWIt+aWsOi/m+W6pueahOWbnuiwgyAo6Ieq5a6a5LmJbWVzY3JvbGznu4Tku7bml7Ys5q2k6KGM5LiN5Y+v5YigKVxyXG5cdFx0XHRcdFx0XHR2bS5kb3duSGlnaHQgPSBkb3duSGlnaHQ7IC8vIOiuvue9ruS4i+aLieWMuuWfn+eahOmrmOW6piAo6Ieq5a6a5LmJbWVzY3JvbGznu4Tku7bml7Ys5q2k6KGM5LiN5Y+v5YigKVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGVuZERvd25TY3JvbGwobWVzY3JvbGwpIHtcclxuXHRcdFx0XHRcdFx0dm0uZG93bkxvYWRUeXBlID0gNDsgLy8g57uT5p2f5LiL5ouJICjoh6rlrprkuYltZXNjcm9sbOe7hOS7tuaXtizmraTooYzkuI3lj6/liKApXHJcblx0XHRcdFx0XHRcdHZtLmRvd25IaWdodCA9IDA7IC8vIOiuvue9ruS4i+aLieWMuuWfn+eahOmrmOW6piAo6Ieq5a6a5LmJbWVzY3JvbGznu4Tku7bml7Ys5q2k6KGM5LiN5Y+v5YigKVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdC8vIOa0vuWPkeS4i+aLieWIt+aWsOeahOWbnuiwg1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2s6IGZ1bmN0aW9uKG1lc2Nyb2xsKSB7XHJcblx0XHRcdFx0XHRcdHZtLiRlbWl0KCdkb3duJywgbWVzY3JvbGwpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8g5LiK5ouJ5Yqg6L2955qE6YWN572uXHJcblx0XHRcdFx0dXA6IHtcclxuXHRcdFx0XHRcdC8vIOaYvuekuuWKoOi9veS4reeahOWbnuiwg1xyXG5cdFx0XHRcdFx0c2hvd0xvYWRpbmcoKSB7XHJcblx0XHRcdFx0XHRcdHZtLnVwTG9hZFR5cGUgPSAxO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdC8vIOaYvuekuuaXoOabtOWkmuaVsOaNrueahOWbnuiwg1xyXG5cdFx0XHRcdFx0c2hvd05vTW9yZSgpIHtcclxuXHRcdFx0XHRcdFx0dm0udXBMb2FkVHlwZSA9IDI7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Ly8g6ZqQ6JeP5LiK5ouJ5Yqg6L2955qE5Zue6LCDXHJcblx0XHRcdFx0XHRoaWRlVXBTY3JvbGwoKSB7XHJcblx0XHRcdFx0XHRcdHZtLnVwTG9hZFR5cGUgPSAwO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdC8vIOepuuW4g+WxgFxyXG5cdFx0XHRcdFx0ZW1wdHk6IHtcclxuXHRcdFx0XHRcdFx0b25TaG93KGlzU2hvdykge1xyXG5cdFx0XHRcdFx0XHRcdC8vIOaYvuekuumakOiXj+eahOWbnuiwg1xyXG5cdFx0XHRcdFx0XHRcdHZtLmlzU2hvd0VtcHR5ID0gaXNTaG93O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Ly8g5Zue5Yiw6aG26YOoXHJcblx0XHRcdFx0XHR0b1RvcDoge1xyXG5cdFx0XHRcdFx0XHRvblNob3coaXNTaG93KSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8g5pi+56S66ZqQ6JeP55qE5Zue6LCDXHJcblx0XHRcdFx0XHRcdFx0dm0uaXNTaG93VG9Ub3AgPSBpc1Nob3c7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQvLyDmtL7lj5HkuIrmi4nliqDovb3nmoTlm57osINcclxuXHRcdFx0XHRcdGNhbGxiYWNrOiBmdW5jdGlvbihtZXNjcm9sbCkge1xyXG5cdFx0XHRcdFx0XHR2bS4kZW1pdCgndXAnLCBtZXNjcm9sbCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0TWVTY3JvbGwuZXh0ZW5kKGRpeU9wdGlvbiwgR2xvYmFsT3B0aW9uKTsgLy8g5re35YWl5YWo5bGA55qE6YWN572uXHJcblx0XHRcdGxldCBteU9wdGlvbiA9IEpTT04ucGFyc2UoXHJcblx0XHRcdFx0SlNPTi5zdHJpbmdpZnkoe1xyXG5cdFx0XHRcdFx0ZG93bjogdm0uZG93bixcclxuXHRcdFx0XHRcdHVwOiB2bS51cFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCk7IC8vIOa3seaLt+i0nSzpgb/lhY3lr7lwcm9wc+eahOW9seWTjVxyXG5cdFx0XHRNZVNjcm9sbC5leHRlbmQobXlPcHRpb24sIGRpeU9wdGlvbik7IC8vIOa3t+WFpeWFt+S9k+eVjOmdoueahOmFjee9rlxyXG5cclxuXHRcdFx0Ly8g5Yid5aeL5YyWTWVTY3JvbGzlr7nosaFcclxuXHRcdFx0dm0ubWVzY3JvbGwgPSBuZXcgTWVTY3JvbGwobXlPcHRpb24sIHRydWUpOyAvLyDkvKDlhaV0cnVlLOagh+iusGJvZHnkuLrmu5rliqjljLrln59cclxuXHRcdFx0Ly8gaW5pdOWbnuiwg21lc2Nyb2xs5a+56LGhXHJcblx0XHRcdHZtLiRlbWl0KCdpbml0Jywgdm0ubWVzY3JvbGwpO1xyXG5cclxuXHRcdFx0Ly8g6K6+572u6auY5bqmXHJcblx0XHRcdGNvbnN0IHN5cyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cdFx0XHRpZiAoc3lzLndpbmRvd0hlaWdodCkgdm0ud2luZG93SGVpZ2h0ID0gc3lzLndpbmRvd0hlaWdodDtcclxuXHRcdFx0aWYgKHN5cy5zdGF0dXNCYXJIZWlnaHQpIHZtLnN0YXR1c0JhckhlaWdodCA9IHN5cy5zdGF0dXNCYXJIZWlnaHQ7XHJcblx0XHRcdC8vIOS9v2Rvd27nmoRib3R0b21PZmZzZXTnlJ/mlYhcclxuXHRcdFx0dm0ubWVzY3JvbGwuc2V0Qm9keUhlaWdodChzeXMud2luZG93SGVpZ2h0KTtcclxuXHRcdFx0Ly8gbWVzY3JvbGwtYm9keeWcqEFuZHJvaWTlsI/nqIvluo/kuIvmi4nkvJrljaHpob8s5peg5rOV5YOPbWVzY3JvbGwtdW5p6YKj5qC36YCa6L+H6K6+572uXCJkaXNhYmxlU2Nyb2xsXCI6dHJ1Zeino+WGsyzlj6rog73nlKjliqjnlLvov4fmuKHnvJPop6NcclxuXHRcdFx0Ly8gI2lmZGVmIE1QXHJcblx0XHRcdGlmKHN5cy5wbGF0Zm9ybSA9PSBcImFuZHJvaWRcIikgdm0uZG93blRyYW5zaXRpb24gPSAndHJhbnNmb3JtIDIwMG1zJ1xyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHJcblx0XHRcdC8vIOWboOS4uuS9v+eUqOeahOaYr3BhZ2XnmoRzY3JvbGws6L+Z6YeM6ZyA6Ieq5a6a5LmJc2Nyb2xsVG9cclxuXHRcdFx0dm0ubWVzY3JvbGwucmVzZXRTY3JvbGxUbygoeSwgdCkgPT4ge1xyXG5cdFx0XHRcdHVuaS5wYWdlU2Nyb2xsVG8oe1xyXG5cdFx0XHRcdFx0c2Nyb2xsVG9wOiB5LFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246IHRcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIOWFt+S9k+eahOeVjOmdouWmguaenOS4jemFjee9rnVwLnRvVG9wLnNhZmVhcmVhLOWImeWPluacrHZ1ZeeahHNhZmVhcmVh5YC8XHJcblx0XHRcdGlmKHN5cy5wbGF0Zm9ybSA9PSBcImlvc1wiKXtcclxuXHRcdFx0XHR2bS5pc1NhZmVhcmVhID0gdm0uc2FmZWFyZWE7XHJcblx0XHRcdFx0aWYgKHZtLnVwICYmIHZtLnVwLnRvVG9wICYmIHZtLnVwLnRvVG9wLnNhZmVhcmVhICE9IG51bGwpIHt9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dm0ubWVzY3JvbGwub3B0VXAudG9Ub3Auc2FmZWFyZWEgPSB2bS5zYWZlYXJlYTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHZtLmlzU2FmZWFyZWEgPSBmYWxzZVxyXG5cdFx0XHRcdHZtLm1lc2Nyb2xsLm9wdFVwLnRvVG9wLnNhZmVhcmVhID0gZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdEBpbXBvcnQgXCIuL21lc2Nyb2xsLWJvZHkuY3NzXCI7XHJcblx0QGltcG9ydCBcIi4vY29tcG9uZW50cy9tZXNjcm9sbC1kb3duLmNzc1wiO1xyXG5cdEBpbXBvcnQgJy4vY29tcG9uZW50cy9tZXNjcm9sbC11cC5jc3MnO1xyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///176\n");

/***/ }),
/* 177 */
/*!************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/components/mescroll-uni/mescroll-uni.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = MeScroll; /* mescroll\r\n                                                                                                        * version 1.2.5\r\n                                                                                                        * 2020-03-15 wenju\r\n                                                                                                        * http://www.mescroll.com\r\n                                                                                                        */\n\nfunction MeScroll(options, isScrollBody) {\n  var me = this;\n  me.version = '1.2.5'; // mescroll版本号\n  me.options = options || {}; // 配置\n  me.isScrollBody = isScrollBody || false; // 滚动区域是否为原生页面滚动; 默认为scroll-view\n\n  me.isDownScrolling = false; // 是否在执行下拉刷新的回调\n  me.isUpScrolling = false; // 是否在执行上拉加载的回调\n  var hasDownCallback = me.options.down && me.options.down.callback; // 是否配置了down的callback\n\n  // 初始化下拉刷新\n  me.initDownScroll();\n  // 初始化上拉加载,则初始化\n  me.initUpScroll();\n\n  // 自动加载\n  setTimeout(function () {// 待主线程执行完毕再执行,避免new MeScroll未初始化,在回调获取不到mescroll的实例\n    // 自动触发下拉刷新 (只有配置了down的callback才自动触发下拉刷新)\n    if (me.optDown.use && me.optDown.auto && hasDownCallback) {\n      if (me.optDown.autoShowLoading) {\n        me.triggerDownScroll(); // 显示下拉进度,执行下拉回调\n      } else {\n        me.optDown.callback && me.optDown.callback(me); // 不显示下拉进度,直接执行下拉回调\n      }\n    }\n    // 自动触发上拉加载\n    setTimeout(function () {// 延时确保先执行down的callback,再执行up的callback,因为部分小程序emit是异步,会导致isUpAutoLoad判断有误\n      me.optUp.use && me.optUp.auto && !me.isUpAutoLoad && me.triggerUpScroll();\n    }, 100);\n  }, 30); // 需让me.optDown.inited和me.optUp.inited先执行\n}\n\n/* 配置参数:下拉刷新 */\nMeScroll.prototype.extendDownScroll = function (optDown) {\n  // 下拉刷新的配置\n  MeScroll.extend(optDown, {\n    use: true, // 是否启用下拉刷新; 默认true\n    auto: true, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true\n    native: false, // 是否使用系统自带的下拉刷新; 默认false; 仅mescroll-body生效 (值为true时,还需在pages配置enablePullDownRefresh:true;详请参考mescroll-native的案例)\n    autoShowLoading: false, // 如果设置auto=true(在初始化完毕之后自动执行下拉刷新的回调),那么是否显示下拉刷新的进度; 默认false\n    isLock: false, // 是否锁定下拉刷新,默认false;\n    offset: 80, // 在列表顶部,下拉大于80px,松手即可触发下拉刷新的回调\n    startTop: 100, // scroll-view滚动到顶部时,此时的scroll-top不一定为0, 此值用于控制最大的误差\n    fps: 80, // 下拉节流 (值越大每秒刷新频率越高)\n    inOffsetRate: 1, // 在列表顶部,下拉的距离小于offset时,改变下拉区域高度比例;值小于1且越接近0,高度变化越小,表现为越往下越难拉\n    outOffsetRate: 0.2, // 在列表顶部,下拉的距离大于offset时,改变下拉区域高度比例;值小于1且越接近0,高度变化越小,表现为越往下越难拉\n    bottomOffset: 20, // 当手指touchmove位置在距离body底部20px范围内的时候结束上拉刷新,避免Webview嵌套导致touchend事件不执行\n    minAngle: 45, // 向下滑动最少偏移的角度,取值区间  [0,90];默认45度,即向下滑动的角度大于45度则触发下拉;而小于45度,将不触发下拉,避免与左右滑动的轮播等组件冲突;\n    textInOffset: '下拉刷新', // 下拉的距离在offset范围内的提示文本\n    textOutOffset: '释放更新', // 下拉的距离大于offset范围的提示文本\n    textLoading: '加载中 ...', // 加载中的提示文本\n    bgColor: \"transparent\", // 背景颜色 (建议在pages.json中再设置一下backgroundColorTop)\n    textColor: \"gray\", // 文本颜色 (当bgColor配置了颜色,而textColor未配置时,则textColor会默认为白色)\n    inited: null, // 下拉刷新初始化完毕的回调\n    inOffset: null, // 下拉的距离进入offset范围内那一刻的回调\n    outOffset: null, // 下拉的距离大于offset那一刻的回调\n    onMoving: null, // 下拉过程中的回调,滑动过程一直在执行; rate下拉区域当前高度与指定距离的比值(inOffset: rate<1; outOffset: rate>=1); downHight当前下拉区域的高度\n    beforeLoading: null, // 准备触发下拉刷新的回调: 如果return true,将不触发showLoading和callback回调; 常用来完全自定义下拉刷新, 参考案例【淘宝 v6.8.0】\n    showLoading: null, // 显示下拉刷新进度的回调\n    afterLoading: null, // 准备结束下拉的回调. 返回结束下拉的延时执行时间,默认0ms; 常用于结束下拉之前再显示另外一小段动画,才去隐藏下拉刷新的场景, 参考案例【dotJump】\n    endDownScroll: null, // 结束下拉刷新的回调\n    callback: function callback(mescroll) {\n      // 下拉刷新的回调;默认重置上拉加载列表为第一页\n      mescroll.resetUpScroll();\n    } });\n\n};\n\n/* 配置参数:上拉加载 */\nMeScroll.prototype.extendUpScroll = function (optUp) {\n  // 上拉加载的配置\n  MeScroll.extend(optUp, {\n    use: true, // 是否启用上拉加载; 默认true\n    auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true\n    isLock: false, // 是否锁定上拉加载,默认false;\n    isBoth: true, // 上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新;默认true,两者可同时触发;\n    isBounce: false, // 默认禁止橡皮筋的回弹效果, 必读事项: http://www.mescroll.com/qa.html?v=190725#q25\n    callback: null, // 上拉加载的回调;function(page,mescroll){ }\n    page: {\n      num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始\n      size: 10, // 每页数据的数量\n      time: null // 加载第一页数据服务器返回的时间; 防止用户翻页时,后台新增了数据从而导致下一页数据重复;\n    },\n    noMoreSize: 5, // 如果列表已无数据,可设置列表的总数量要大于等于5条才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看\n    offset: 80, // 距底部多远时,触发upCallback\n    textLoading: '加载中 ...', // 加载中的提示文本\n    textNoMore: '-- END --', // 没有更多数据的提示文本\n    bgColor: \"transparent\", // 背景颜色 (建议在pages.json中再设置一下backgroundColorBottom)\n    textColor: \"gray\", // 文本颜色 (当bgColor配置了颜色,而textColor未配置时,则textColor会默认为白色)\n    inited: null, // 初始化完毕的回调\n    showLoading: null, // 显示加载中的回调\n    showNoMore: null, // 显示无更多数据的回调\n    hideUpScroll: null, // 隐藏上拉加载的回调\n    errDistance: 60, // endErr的时候需往上滑动一段距离,使其往下滑动时再次触发onReachBottom,仅mescroll-body生效\n    toTop: {\n      // 回到顶部按钮,需配置src才显示\n      src: null, // 图片路径,默认null (绝对路径或网络图)\n      offset: 1000, // 列表滚动多少距离才显示回到顶部按钮,默认1000\n      duration: 300, // 回到顶部的动画时长,默认300ms (当值为0或300则使用系统自带回到顶部,更流畅; 其他值则通过step模拟,部分机型可能不够流畅,所以非特殊情况不建议修改此项)\n      btnClick: null, // 点击按钮的回调\n      onShow: null, // 是否显示的回调\n      zIndex: 9990, // fixed定位z-index值\n      left: null, // 到左边的距离, 默认null. 此项有值时,right不生效. (支持20, \"20rpx\", \"20px\", \"20%\"格式的值, 其中纯数字则默认单位rpx)\n      right: 20, // 到右边的距离, 默认20 (支持20, \"20rpx\", \"20px\", \"20%\"格式的值, 其中纯数字则默认单位rpx)\n      bottom: 120, // 到底部的距离, 默认120 (支持20, \"20rpx\", \"20px\", \"20%\"格式的值, 其中纯数字则默认单位rpx)\n      safearea: false, // bottom的偏移量是否加上底部安全区的距离, 默认false, 需要适配iPhoneX时使用 (具体的界面如果不配置此项,则取本vue的safearea值)\n      width: 72, // 回到顶部图标的宽度, 默认72 (支持20, \"20rpx\", \"20px\", \"20%\"格式的值, 其中纯数字则默认单位rpx)\n      radius: \"50%\" // 圆角, 默认\"50%\" (支持20, \"20rpx\", \"20px\", \"20%\"格式的值, 其中纯数字则默认单位rpx)\n    },\n    empty: {\n      use: true, // 是否显示空布局\n      icon: null, // 图标路径\n      tip: '~ 暂无相关数据 ~', // 提示\n      btnText: '', // 按钮\n      btnClick: null, // 点击按钮的回调\n      onShow: null, // 是否显示的回调\n      fixed: false, // 是否使用fixed定位,默认false; 配置fixed为true,以下的top和zIndex才生效 (transform会使fixed失效,最终会降级为absolute)\n      top: \"100rpx\", // fixed定位的top值 (完整的单位值,如 \"10%\"; \"100rpx\")\n      zIndex: 99 // fixed定位z-index值\n    },\n    onScroll: false // 是否监听滚动事件\n  });\n};\n\n/* 配置参数 */\nMeScroll.extend = function (userOption, defaultOption) {\n  if (!userOption) return defaultOption;\n  for (var key in defaultOption) {\n    if (userOption[key] == null) {\n      var def = defaultOption[key];\n      if (def != null && typeof def === 'object') {\n        userOption[key] = MeScroll.extend({}, def); // 深度匹配\n      } else {\n        userOption[key] = def;\n      }\n    } else if (typeof userOption[key] === 'object') {\n      MeScroll.extend(userOption[key], defaultOption[key]); // 深度匹配\n    }\n  }\n  return userOption;\n};\n\n/* 简单判断是否配置了颜色 (非透明,非白色) */\nMeScroll.prototype.hasColor = function (color) {\n  if (!color) return false;\n  var c = color.toLowerCase();\n  return c != \"#fff\" && c != \"#ffffff\" && c != \"transparent\" && c != \"white\";\n};\n\n/* -------初始化下拉刷新------- */\nMeScroll.prototype.initDownScroll = function () {\n  var me = this;\n  // 配置参数\n  me.optDown = me.options.down || {};\n  if (!me.optDown.textColor && me.hasColor(me.optDown.bgColor)) me.optDown.textColor = \"#fff\"; // 当bgColor有值且textColor未设置,则textColor默认白色\n  me.extendDownScroll(me.optDown);\n\n  // 如果是mescroll-body且配置了native,则禁止自定义的下拉刷新\n  if (me.isScrollBody && me.optDown.native) {\n    me.optDown.use = false;\n  } else {\n    me.optDown.native = false; // 仅mescroll-body支持,mescroll-uni不支持\n  }\n\n  me.downHight = 0; // 下拉区域的高度\n\n  // 在页面中加入下拉布局\n  if (me.optDown.use && me.optDown.inited) {\n    // 初始化完毕的回调\n    setTimeout(function () {// 待主线程执行完毕再执行,避免new MeScroll未初始化,在回调获取不到mescroll的实例\n      me.optDown.inited(me);\n    }, 0);\n  }\n};\n\n/* 列表touchstart事件 */\nMeScroll.prototype.touchstartEvent = function (e) {\n  if (!this.optDown.use) return;\n\n  this.startPoint = this.getPoint(e); // 记录起点\n  this.startTop = this.getScrollTop(); // 记录此时的滚动条位置\n  this.lastPoint = this.startPoint; // 重置上次move的点\n  this.maxTouchmoveY = this.getBodyHeight() - this.optDown.bottomOffset; // 手指触摸的最大范围(写在touchstart避免body获取高度为0的情况)\n  this.inTouchend = false; // 标记不是touchend\n};\n\n/* 列表touchmove事件 */\nMeScroll.prototype.touchmoveEvent = function (e) {\n\n\n\n\n  if (!this.optDown.use) return;\n  if (!this.startPoint) return;\n  var me = this;\n\n  // 节流\n  var t = new Date().getTime();\n  if (me.moveTime && t - me.moveTime < me.moveTimeDiff) {// 小于节流时间,则不处理\n    return;\n  } else {\n    me.moveTime = t;\n    if (!me.moveTimeDiff) me.moveTimeDiff = 1000 / me.optDown.fps;\n  }\n\n  var scrollTop = me.getScrollTop(); // 当前滚动条的距离\n  var curPoint = me.getPoint(e); // 当前点\n\n  var moveY = curPoint.y - me.startPoint.y; // 和起点比,移动的距离,大于0向下拉,小于0向上拉\n\n  // 向下拉 && 在顶部\n  // mescroll-body,直接判定在顶部即可\n  // scroll-view在滚动时不会触发touchmove,当触顶/底/左/右时,才会触发touchmove\n  // scroll-view滚动到顶部时,scrollTop不一定为0; 在iOS的APP中scrollTop可能为负数,不一定和startTop相等\n  if (moveY > 0 && (\n  me.isScrollBody && scrollTop <= 0 ||\n\n  !me.isScrollBody && (scrollTop <= 0 || scrollTop <= me.optDown.startTop && scrollTop === me.startTop)))\n  {\n    // 可下拉的条件\n    if (!me.inTouchend && !me.isDownScrolling && !me.optDown.isLock && (!me.isUpScrolling || me.isUpScrolling &&\n    me.optUp.isBoth)) {\n\n      // 下拉的角度是否在配置的范围内\n      var angle = me.getAngle(me.lastPoint, curPoint); // 两点之间的角度,区间 [0,90]\n      if (angle < me.optDown.minAngle) return; // 如果小于配置的角度,则不往下执行下拉刷新\n\n      // 如果手指的位置超过配置的距离,则提前结束下拉,避免Webview嵌套导致touchend无法触发\n      if (me.maxTouchmoveY > 0 && curPoint.y >= me.maxTouchmoveY) {\n        me.inTouchend = true; // 标记执行touchend\n        me.touchendEvent(); // 提前触发touchend\n        return;\n      }\n\n\n\n\n      me.preventDefault(e); // 阻止默认事件\n\n      var diff = curPoint.y - me.lastPoint.y; // 和上次比,移动的距离 (大于0向下,小于0向上)\n\n      // 下拉距离  < 指定距离\n      if (me.downHight < me.optDown.offset) {\n        if (me.movetype !== 1) {\n          me.movetype = 1; // 加入标记,保证只执行一次\n          me.optDown.inOffset && me.optDown.inOffset(me); // 进入指定距离范围内那一刻的回调,只执行一次\n          me.isMoveDown = true; // 标记下拉区域高度改变,在touchend重置回来\n        }\n        me.downHight += diff * me.optDown.inOffsetRate; // 越往下,高度变化越小\n\n        // 指定距离  <= 下拉距离\n      } else {\n        if (me.movetype !== 2) {\n          me.movetype = 2; // 加入标记,保证只执行一次\n          me.optDown.outOffset && me.optDown.outOffset(me); // 下拉超过指定距离那一刻的回调,只执行一次\n          me.isMoveDown = true; // 标记下拉区域高度改变,在touchend重置回来\n        }\n        if (diff > 0) {// 向下拉\n          me.downHight += Math.round(diff * me.optDown.outOffsetRate); // 越往下,高度变化越小\n        } else {// 向上收\n          me.downHight += diff; // 向上收回高度,则向上滑多少收多少高度\n        }\n      }\n\n      var rate = me.downHight / me.optDown.offset; // 下拉区域当前高度与指定距离的比值\n      me.optDown.onMoving && me.optDown.onMoving(me, rate, me.downHight); // 下拉过程中的回调,一直在执行\n    }\n  }\n\n  me.lastPoint = curPoint; // 记录本次移动的点\n};\n\n/* 列表touchend事件 */\nMeScroll.prototype.touchendEvent = function (e) {\n  if (!this.optDown.use) return;\n  // 如果下拉区域高度已改变,则需重置回来\n  if (this.isMoveDown) {\n    if (this.downHight >= this.optDown.offset) {\n      // 符合触发刷新的条件\n      this.triggerDownScroll();\n    } else {\n      // 不符合的话 则重置\n      this.downHight = 0;\n      this.optDown.endDownScroll && this.optDown.endDownScroll(this);\n    }\n    this.movetype = 0;\n    this.isMoveDown = false;\n  } else if (!this.isScrollBody && this.getScrollTop() === this.startTop) {// scroll-view到顶/左/右/底的滑动事件\n    var isScrollUp = this.getPoint(e).y - this.startPoint.y < 0; // 和起点比,移动的距离,大于0向下拉,小于0向上拉\n    // 上滑\n    if (isScrollUp) {\n      // 需检查滑动的角度\n      var angle = this.getAngle(this.getPoint(e), this.startPoint); // 两点之间的角度,区间 [0,90]\n      if (angle > 80) {\n        // 检查并触发上拉\n        this.triggerUpScroll(true);\n      }\n    }\n  }\n};\n\n/* 根据点击滑动事件获取第一个手指的坐标 */\nMeScroll.prototype.getPoint = function (e) {\n  if (!e) {\n    return {\n      x: 0,\n      y: 0 };\n\n  }\n  if (e.touches && e.touches[0]) {\n    return {\n      x: e.touches[0].pageX,\n      y: e.touches[0].pageY };\n\n  } else if (e.changedTouches && e.changedTouches[0]) {\n    return {\n      x: e.changedTouches[0].pageX,\n      y: e.changedTouches[0].pageY };\n\n  } else {\n    return {\n      x: e.clientX,\n      y: e.clientY };\n\n  }\n};\n\n/* 计算两点之间的角度: 区间 [0,90]*/\nMeScroll.prototype.getAngle = function (p1, p2) {\n  var x = Math.abs(p1.x - p2.x);\n  var y = Math.abs(p1.y - p2.y);\n  var z = Math.sqrt(x * x + y * y);\n  var angle = 0;\n  if (z !== 0) {\n    angle = Math.asin(y / z) / Math.PI * 180;\n  }\n  return angle;\n};\n\n/* 触发下拉刷新 */\nMeScroll.prototype.triggerDownScroll = function () {\n  if (this.optDown.beforeLoading && this.optDown.beforeLoading(this)) {\n    //return true则处于完全自定义状态\n  } else {\n    this.showDownScroll(); // 下拉刷新中...\n    this.optDown.callback && this.optDown.callback(this); // 执行回调,联网加载数据\n  }\n};\n\n/* 显示下拉进度布局 */\nMeScroll.prototype.showDownScroll = function () {\n  this.isDownScrolling = true; // 标记下拉中\n  if (this.optDown.native) {\n    uni.startPullDownRefresh(); // 系统自带的下拉刷新\n    this.optDown.showLoading && this.optDown.showLoading(this, 0); // 仍触发showLoading,因为上拉加载用到\n  } else {\n    this.downHight = this.optDown.offset; // 更新下拉区域高度\n    this.optDown.showLoading && this.optDown.showLoading(this, this.downHight); // 下拉刷新中...\n  }\n};\n\n/* 显示系统自带的下拉刷新时需要处理的业务 */\nMeScroll.prototype.onPullDownRefresh = function () {\n  this.isDownScrolling = true; // 标记下拉中\n  this.optDown.showLoading && this.optDown.showLoading(this, 0); // 仍触发showLoading,因为上拉加载用到\n  this.optDown.callback && this.optDown.callback(this); // 执行回调,联网加载数据\n};\n\n/* 结束下拉刷新 */\nMeScroll.prototype.endDownScroll = function () {\n  if (this.optDown.native) {// 结束原生下拉刷新\n    this.isDownScrolling = false;\n    this.optDown.endDownScroll && this.optDown.endDownScroll(this);\n    uni.stopPullDownRefresh();\n    return;\n  }\n  var me = this;\n  // 结束下拉刷新的方法\n  var endScroll = function endScroll() {\n    me.downHight = 0;\n    me.isDownScrolling = false;\n    me.optDown.endDownScroll && me.optDown.endDownScroll(me);\n    !me.isScrollBody && me.setScrollHeight(0); // scroll-view重置滚动区域,使数据不满屏时仍可检查触发翻页\n  };\n  // 结束下拉刷新时的回调\n  var delay = 0;\n  if (me.optDown.afterLoading) delay = me.optDown.afterLoading(me); // 结束下拉刷新的延时,单位ms\n  if (typeof delay === 'number' && delay > 0) {\n    setTimeout(endScroll, delay);\n  } else {\n    endScroll();\n  }\n};\n\n/* 锁定下拉刷新:isLock=ture,null锁定;isLock=false解锁 */\nMeScroll.prototype.lockDownScroll = function (isLock) {\n  if (isLock == null) isLock = true;\n  this.optDown.isLock = isLock;\n};\n\n/* 锁定上拉加载:isLock=ture,null锁定;isLock=false解锁 */\nMeScroll.prototype.lockUpScroll = function (isLock) {\n  if (isLock == null) isLock = true;\n  this.optUp.isLock = isLock;\n};\n\n/* -------初始化上拉加载------- */\nMeScroll.prototype.initUpScroll = function () {\n  var me = this;\n  // 配置参数\n  me.optUp = me.options.up || { use: false };\n  if (!me.optUp.textColor && me.hasColor(me.optUp.bgColor)) me.optUp.textColor = \"#fff\"; // 当bgColor有值且textColor未设置,则textColor默认白色\n  me.extendUpScroll(me.optUp);\n\n  if (!me.optUp.isBounce) me.setBounce(false); // 不允许bounce时,需禁止window的touchmove事件\n\n  if (me.optUp.use === false) return; // 配置不使用上拉加载时,则不初始化上拉布局\n  me.optUp.hasNext = true; // 如果使用上拉,则默认有下一页\n  me.startNum = me.optUp.page.num + 1; // 记录page开始的页码\n\n  // 初始化完毕的回调\n  if (me.optUp.inited) {\n    setTimeout(function () {// 待主线程执行完毕再执行,避免new MeScroll未初始化,在回调获取不到mescroll的实例\n      me.optUp.inited(me);\n    }, 0);\n  }\n};\n\n/*滚动到底部的事件 (仅mescroll-body生效)*/\nMeScroll.prototype.onReachBottom = function () {\n  if (this.isScrollBody && !this.isUpScrolling) {// 只能支持下拉刷新的时候同时可以触发上拉加载,否则滚动到底部就需要上滑一点才能触发onReachBottom\n    if (!this.optUp.isLock && this.optUp.hasNext) {\n      this.triggerUpScroll();\n    }\n  }\n};\n\n/*列表滚动事件 (仅mescroll-body生效)*/\nMeScroll.prototype.onPageScroll = function (e) {\n  if (!this.isScrollBody) return;\n\n  // 更新滚动条的位置 (主要用于判断下拉刷新时,滚动条是否在顶部)\n  this.setScrollTop(e.scrollTop);\n\n  // 顶部按钮的显示隐藏\n  if (e.scrollTop >= this.optUp.toTop.offset) {\n    this.showTopBtn();\n  } else {\n    this.hideTopBtn();\n  }\n};\n\n/*列表滚动事件*/\nMeScroll.prototype.scroll = function (e, onScroll) {\n  // 更新滚动条的位置\n  this.setScrollTop(e.scrollTop);\n  // 更新滚动内容高度\n  this.setScrollHeight(e.scrollHeight);\n\n  // 向上滑还是向下滑动\n  if (this.preScrollY == null) this.preScrollY = 0;\n  this.isScrollUp = e.scrollTop - this.preScrollY > 0;\n  this.preScrollY = e.scrollTop;\n\n  // 上滑 && 检查并触发上拉\n  this.isScrollUp && this.triggerUpScroll(true);\n\n  // 顶部按钮的显示隐藏\n  if (e.scrollTop >= this.optUp.toTop.offset) {\n    this.showTopBtn();\n  } else {\n    this.hideTopBtn();\n  }\n\n  // 滑动监听\n  this.optUp.onScroll && onScroll && onScroll();\n};\n\n/* 触发上拉加载 */\nMeScroll.prototype.triggerUpScroll = function (isCheck) {\n  if (!this.isUpScrolling && this.optUp.use && this.optUp.callback) {\n    // 是否校验在底部; 默认不校验\n    if (isCheck === true) {\n      var canUp = false;\n      // 还有下一页 && 没有锁定 && 不在下拉中\n      if (this.optUp.hasNext && !this.optUp.isLock && !this.isDownScrolling) {\n        if (this.getScrollBottom() <= this.optUp.offset) {// 到底部\n          canUp = true; // 标记可上拉\n        }\n      }\n      if (canUp === false) return;\n    }\n    this.showUpScroll(); // 上拉加载中...\n    this.optUp.page.num++; // 预先加一页,如果失败则减回\n    this.isUpAutoLoad = true; // 标记上拉已经自动执行过,避免初始化时多次触发上拉回调\n    this.num = this.optUp.page.num; // 把最新的页数赋值在mescroll上,避免对page的影响\n    this.size = this.optUp.page.size; // 把最新的页码赋值在mescroll上,避免对page的影响\n    this.time = this.optUp.page.time; // 把最新的页码赋值在mescroll上,避免对page的影响\n    this.optUp.callback(this); // 执行回调,联网加载数据\n  }\n};\n\n/* 显示上拉加载中 */\nMeScroll.prototype.showUpScroll = function () {\n  this.isUpScrolling = true; // 标记上拉加载中\n  this.optUp.showLoading && this.optUp.showLoading(this); // 回调\n};\n\n/* 显示上拉无更多数据 */\nMeScroll.prototype.showNoMore = function () {\n  this.optUp.hasNext = false; // 标记无更多数据\n  this.optUp.showNoMore && this.optUp.showNoMore(this); // 回调\n};\n\n/* 隐藏上拉区域**/\nMeScroll.prototype.hideUpScroll = function () {\n  this.optUp.hideUpScroll && this.optUp.hideUpScroll(this); // 回调\n};\n\n/* 结束上拉加载 */\nMeScroll.prototype.endUpScroll = function (isShowNoMore) {\n  if (isShowNoMore != null) {// isShowNoMore=null,不处理下拉状态,下拉刷新的时候调用\n    if (isShowNoMore) {\n      this.showNoMore(); // isShowNoMore=true,显示无更多数据\n    } else {\n      this.hideUpScroll(); // isShowNoMore=false,隐藏上拉加载\n    }\n  }\n  this.isUpScrolling = false; // 标记结束上拉加载\n};\n\n/* 重置上拉加载列表为第一页\r\n    *isShowLoading 是否显示进度布局;\r\n    * 1.默认null,不传参,则显示上拉加载的进度布局\r\n    * 2.传参true, 则显示下拉刷新的进度布局\r\n    * 3.传参false,则不显示上拉和下拉的进度 (常用于静默更新列表数据)\r\n    */\nMeScroll.prototype.resetUpScroll = function (isShowLoading) {\n  if (this.optUp && this.optUp.use) {\n    var page = this.optUp.page;\n    this.prePageNum = page.num; // 缓存重置前的页码,加载失败可退回\n    this.prePageTime = page.time; // 缓存重置前的时间,加载失败可退回\n    page.num = this.startNum; // 重置为第一页\n    page.time = null; // 重置时间为空\n    if (!this.isDownScrolling && isShowLoading !== false) {// 如果不是下拉刷新触发的resetUpScroll并且不配置列表静默更新,则显示进度;\n      if (isShowLoading == null) {\n        this.removeEmpty(); // 移除空布局\n        this.showUpScroll(); // 不传参,默认显示上拉加载的进度布局\n      } else {\n        this.showDownScroll(); // 传true,显示下拉刷新的进度布局,不清空列表\n      }\n    }\n    this.isUpAutoLoad = true; // 标记上拉已经自动执行过,避免初始化时多次触发上拉回调\n    this.num = page.num; // 把最新的页数赋值在mescroll上,避免对page的影响\n    this.size = page.size; // 把最新的页码赋值在mescroll上,避免对page的影响\n    this.time = page.time; // 把最新的页码赋值在mescroll上,避免对page的影响\n    this.optUp.callback && this.optUp.callback(this); // 执行上拉回调\n  }\n};\n\n/* 设置page.num的值 */\nMeScroll.prototype.setPageNum = function (num) {\n  this.optUp.page.num = num - 1;\n};\n\n/* 设置page.size的值 */\nMeScroll.prototype.setPageSize = function (size) {\n  this.optUp.page.size = size;\n};\n\n/* 联网回调成功,结束下拉刷新和上拉加载\r\n    * dataSize: 当前页的数据量(必传)\r\n    * totalPage: 总页数(必传)\r\n    * systime: 服务器时间 (可空)\r\n    */\nMeScroll.prototype.endByPage = function (dataSize, totalPage, systime) {\n  var hasNext;\n  if (this.optUp.use && totalPage != null) hasNext = this.optUp.page.num < totalPage; // 是否还有下一页\n  this.endSuccess(dataSize, hasNext, systime);\n};\n\n/* 联网回调成功,结束下拉刷新和上拉加载\r\n    * dataSize: 当前页的数据量(必传)\r\n    * totalSize: 列表所有数据总数量(必传)\r\n    * systime: 服务器时间 (可空)\r\n    */\nMeScroll.prototype.endBySize = function (dataSize, totalSize, systime) {\n  var hasNext;\n  if (this.optUp.use && totalSize != null) {\n    var loadSize = (this.optUp.page.num - 1) * this.optUp.page.size + dataSize; // 已加载的数据总数\n    hasNext = loadSize < totalSize; // 是否还有下一页\n  }\n  this.endSuccess(dataSize, hasNext, systime);\n};\n\n/* 联网回调成功,结束下拉刷新和上拉加载\r\n    * dataSize: 当前页的数据个数(不是所有页的数据总和),用于上拉加载判断是否还有下一页.如果不传,则会判断还有下一页\r\n    * hasNext: 是否还有下一页,布尔类型;用来解决这个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据dataSize判断,则需翻到第三页才会知道无更多数据,如果传了hasNext,则翻到第二页即可显示无更多数据.\r\n    * systime: 服务器时间(可空);用来解决这个小问题:当准备翻下一页时,数据库新增了几条记录,此时翻下一页,前面的几条数据会和上一页的重复;这里传入了systime,那么upCallback的page.time就会有值,把page.time传给服务器,让后台过滤新加入的那几条记录\r\n    */\nMeScroll.prototype.endSuccess = function (dataSize, hasNext, systime) {\n  var me = this;\n  // 结束下拉刷新\n  if (me.isDownScrolling) me.endDownScroll();\n\n  // 结束上拉加载\n  if (me.optUp.use) {\n    var isShowNoMore; // 是否已无更多数据\n    if (dataSize != null) {\n      var pageNum = me.optUp.page.num; // 当前页码\n      var pageSize = me.optUp.page.size; // 每页长度\n      // 如果是第一页\n      if (pageNum === 1) {\n        if (systime) me.optUp.page.time = systime; // 设置加载列表数据第一页的时间\n      }\n      if (dataSize < pageSize || hasNext === false) {\n        // 返回的数据不满一页时,则说明已无更多数据\n        me.optUp.hasNext = false;\n        if (dataSize === 0 && pageNum === 1) {\n          // 如果第一页无任何数据且配置了空布局\n          isShowNoMore = false;\n          me.showEmpty();\n        } else {\n          // 总列表数少于配置的数量,则不显示无更多数据\n          var allDataSize = (pageNum - 1) * pageSize + dataSize;\n          if (allDataSize < me.optUp.noMoreSize) {\n            isShowNoMore = false;\n          } else {\n            isShowNoMore = true;\n          }\n          me.removeEmpty(); // 移除空布局\n        }\n      } else {\n        // 还有下一页\n        isShowNoMore = false;\n        me.optUp.hasNext = true;\n        me.removeEmpty(); // 移除空布局\n      }\n    }\n\n    // 隐藏上拉\n    me.endUpScroll(isShowNoMore);\n  }\n};\n\n/* 回调失败,结束下拉刷新和上拉加载 */\nMeScroll.prototype.endErr = function (errDistance) {\n  // 结束下拉,回调失败重置回原来的页码和时间\n  if (this.isDownScrolling) {\n    var page = this.optUp.page;\n    if (page && this.prePageNum) {\n      page.num = this.prePageNum;\n      page.time = this.prePageTime;\n    }\n    this.endDownScroll();\n  }\n  // 结束上拉,回调失败重置回原来的页码\n  if (this.isUpScrolling) {\n    this.optUp.page.num--;\n    this.endUpScroll(false);\n    // 如果是mescroll-body,则需往回滚一定距离\n    if (this.isScrollBody && errDistance !== 0) {// 不处理0\n      if (!errDistance) errDistance = this.optUp.errDistance; // 不传,则取默认\n      this.scrollTo(this.getScrollTop() - errDistance, 0); // 往上回滚的距离\n    }\n  }\n};\n\n/* 显示空布局 */\nMeScroll.prototype.showEmpty = function () {\n  this.optUp.empty.use && this.optUp.empty.onShow && this.optUp.empty.onShow(true);\n};\n\n/* 移除空布局 */\nMeScroll.prototype.removeEmpty = function () {\n  this.optUp.empty.use && this.optUp.empty.onShow && this.optUp.empty.onShow(false);\n};\n\n/* 显示回到顶部的按钮 */\nMeScroll.prototype.showTopBtn = function () {\n  if (!this.topBtnShow) {\n    this.topBtnShow = true;\n    this.optUp.toTop.onShow && this.optUp.toTop.onShow(true);\n  }\n};\n\n/* 隐藏回到顶部的按钮 */\nMeScroll.prototype.hideTopBtn = function () {\n  if (this.topBtnShow) {\n    this.topBtnShow = false;\n    this.optUp.toTop.onShow && this.optUp.toTop.onShow(false);\n  }\n};\n\n/* 获取滚动条的位置 */\nMeScroll.prototype.getScrollTop = function () {\n  return this.scrollTop || 0;\n};\n\n/* 记录滚动条的位置 */\nMeScroll.prototype.setScrollTop = function (y) {\n  this.scrollTop = y;\n};\n\n/* 滚动到指定位置 */\nMeScroll.prototype.scrollTo = function (y, t) {\n  this.myScrollTo && this.myScrollTo(y, t); // scrollview需自定义回到顶部方法\n};\n\n/* 自定义scrollTo */\nMeScroll.prototype.resetScrollTo = function (myScrollTo) {\n  this.myScrollTo = myScrollTo;\n};\n\n/* 滚动条到底部的距离 */\nMeScroll.prototype.getScrollBottom = function () {\n  return this.getScrollHeight() - this.getClientHeight() - this.getScrollTop();\n};\n\n/* 计步器\r\n    star: 开始值\r\n    end: 结束值\r\n    callback(step,timer): 回调step值,计步器timer,可自行通过window.clearInterval(timer)结束计步器;\r\n    t: 计步时长,传0则直接回调end值;不传则默认300ms\r\n    rate: 周期;不传则默认30ms计步一次\r\n    * */\nMeScroll.prototype.getStep = function (star, end, callback, t, rate) {\n  var diff = end - star; // 差值\n  if (t === 0 || diff === 0) {\n    callback && callback(end);\n    return;\n  }\n  t = t || 300; // 时长 300ms\n  rate = rate || 30; // 周期 30ms\n  var count = t / rate; // 次数\n  var step = diff / count; // 步长\n  var i = 0; // 计数\n  var timer = setInterval(function () {\n    if (i < count - 1) {\n      star += step;\n      callback && callback(star, timer);\n      i++;\n    } else {\n      callback && callback(end, timer); // 最后一次直接设置end,避免计算误差\n      clearInterval(timer);\n    }\n  }, rate);\n};\n\n/* 滚动容器的高度 */\nMeScroll.prototype.getClientHeight = function (isReal) {\n  var h = this.clientHeight || 0;\n  if (h === 0 && isReal !== true) {// 未获取到容器的高度,可临时取body的高度 (可能会有误差)\n    h = this.getBodyHeight();\n  }\n  return h;\n};\nMeScroll.prototype.setClientHeight = function (h) {\n  this.clientHeight = h;\n};\n\n/* 滚动内容的高度 */\nMeScroll.prototype.getScrollHeight = function () {\n  return this.scrollHeight || 0;\n};\nMeScroll.prototype.setScrollHeight = function (h) {\n  this.scrollHeight = h;\n};\n\n/* body的高度 */\nMeScroll.prototype.getBodyHeight = function () {\n  return this.bodyHeight || 0;\n};\nMeScroll.prototype.setBodyHeight = function (h) {\n  this.bodyHeight = h;\n};\n\n/* 阻止浏览器默认滚动事件 */\nMeScroll.prototype.preventDefault = function (e) {\n  // 小程序不支持e.preventDefault\n  // app的bounce只能通过配置pages.json的style.app-plus.bounce为\"none\"来禁止\n  // cancelable:是否可以被禁用; defaultPrevented:是否已经被禁用\n  if (e && e.cancelable && !e.defaultPrevented) e.preventDefault();\n};\n\n/* 是否允许下拉回弹(橡皮筋效果); true或null为允许; false禁止bounce */\nMeScroll.prototype.setBounce = function (isBounce) {\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9tZXNjcm9sbC11bmkvbWVzY3JvbGwtdW5pLmpzIl0sIm5hbWVzIjpbIk1lU2Nyb2xsIiwib3B0aW9ucyIsImlzU2Nyb2xsQm9keSIsIm1lIiwidmVyc2lvbiIsImlzRG93blNjcm9sbGluZyIsImlzVXBTY3JvbGxpbmciLCJoYXNEb3duQ2FsbGJhY2siLCJkb3duIiwiY2FsbGJhY2siLCJpbml0RG93blNjcm9sbCIsImluaXRVcFNjcm9sbCIsInNldFRpbWVvdXQiLCJvcHREb3duIiwidXNlIiwiYXV0byIsImF1dG9TaG93TG9hZGluZyIsInRyaWdnZXJEb3duU2Nyb2xsIiwib3B0VXAiLCJpc1VwQXV0b0xvYWQiLCJ0cmlnZ2VyVXBTY3JvbGwiLCJwcm90b3R5cGUiLCJleHRlbmREb3duU2Nyb2xsIiwiZXh0ZW5kIiwibmF0aXZlIiwiaXNMb2NrIiwib2Zmc2V0Iiwic3RhcnRUb3AiLCJmcHMiLCJpbk9mZnNldFJhdGUiLCJvdXRPZmZzZXRSYXRlIiwiYm90dG9tT2Zmc2V0IiwibWluQW5nbGUiLCJ0ZXh0SW5PZmZzZXQiLCJ0ZXh0T3V0T2Zmc2V0IiwidGV4dExvYWRpbmciLCJiZ0NvbG9yIiwidGV4dENvbG9yIiwiaW5pdGVkIiwiaW5PZmZzZXQiLCJvdXRPZmZzZXQiLCJvbk1vdmluZyIsImJlZm9yZUxvYWRpbmciLCJzaG93TG9hZGluZyIsImFmdGVyTG9hZGluZyIsImVuZERvd25TY3JvbGwiLCJtZXNjcm9sbCIsInJlc2V0VXBTY3JvbGwiLCJleHRlbmRVcFNjcm9sbCIsImlzQm90aCIsImlzQm91bmNlIiwicGFnZSIsIm51bSIsInNpemUiLCJ0aW1lIiwibm9Nb3JlU2l6ZSIsInRleHROb01vcmUiLCJzaG93Tm9Nb3JlIiwiaGlkZVVwU2Nyb2xsIiwiZXJyRGlzdGFuY2UiLCJ0b1RvcCIsInNyYyIsImR1cmF0aW9uIiwiYnRuQ2xpY2siLCJvblNob3ciLCJ6SW5kZXgiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJzYWZlYXJlYSIsIndpZHRoIiwicmFkaXVzIiwiZW1wdHkiLCJpY29uIiwidGlwIiwiYnRuVGV4dCIsImZpeGVkIiwidG9wIiwib25TY3JvbGwiLCJ1c2VyT3B0aW9uIiwiZGVmYXVsdE9wdGlvbiIsImtleSIsImRlZiIsImhhc0NvbG9yIiwiY29sb3IiLCJjIiwidG9Mb3dlckNhc2UiLCJkb3duSGlnaHQiLCJ0b3VjaHN0YXJ0RXZlbnQiLCJlIiwic3RhcnRQb2ludCIsImdldFBvaW50IiwiZ2V0U2Nyb2xsVG9wIiwibGFzdFBvaW50IiwibWF4VG91Y2htb3ZlWSIsImdldEJvZHlIZWlnaHQiLCJpblRvdWNoZW5kIiwidG91Y2htb3ZlRXZlbnQiLCJ0IiwiRGF0ZSIsImdldFRpbWUiLCJtb3ZlVGltZSIsIm1vdmVUaW1lRGlmZiIsInNjcm9sbFRvcCIsImN1clBvaW50IiwibW92ZVkiLCJ5IiwiYW5nbGUiLCJnZXRBbmdsZSIsInRvdWNoZW5kRXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRpZmYiLCJtb3ZldHlwZSIsImlzTW92ZURvd24iLCJNYXRoIiwicm91bmQiLCJyYXRlIiwiaXNTY3JvbGxVcCIsIngiLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsImNoYW5nZWRUb3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJwMSIsInAyIiwiYWJzIiwieiIsInNxcnQiLCJhc2luIiwiUEkiLCJzaG93RG93blNjcm9sbCIsInVuaSIsInN0YXJ0UHVsbERvd25SZWZyZXNoIiwib25QdWxsRG93blJlZnJlc2giLCJzdG9wUHVsbERvd25SZWZyZXNoIiwiZW5kU2Nyb2xsIiwic2V0U2Nyb2xsSGVpZ2h0IiwiZGVsYXkiLCJsb2NrRG93blNjcm9sbCIsImxvY2tVcFNjcm9sbCIsInVwIiwic2V0Qm91bmNlIiwiaGFzTmV4dCIsInN0YXJ0TnVtIiwib25SZWFjaEJvdHRvbSIsIm9uUGFnZVNjcm9sbCIsInNldFNjcm9sbFRvcCIsInNob3dUb3BCdG4iLCJoaWRlVG9wQnRuIiwic2Nyb2xsIiwic2Nyb2xsSGVpZ2h0IiwicHJlU2Nyb2xsWSIsImlzQ2hlY2siLCJjYW5VcCIsImdldFNjcm9sbEJvdHRvbSIsInNob3dVcFNjcm9sbCIsImVuZFVwU2Nyb2xsIiwiaXNTaG93Tm9Nb3JlIiwiaXNTaG93TG9hZGluZyIsInByZVBhZ2VOdW0iLCJwcmVQYWdlVGltZSIsInJlbW92ZUVtcHR5Iiwic2V0UGFnZU51bSIsInNldFBhZ2VTaXplIiwiZW5kQnlQYWdlIiwiZGF0YVNpemUiLCJ0b3RhbFBhZ2UiLCJzeXN0aW1lIiwiZW5kU3VjY2VzcyIsImVuZEJ5U2l6ZSIsInRvdGFsU2l6ZSIsImxvYWRTaXplIiwicGFnZU51bSIsInBhZ2VTaXplIiwic2hvd0VtcHR5IiwiYWxsRGF0YVNpemUiLCJlbmRFcnIiLCJzY3JvbGxUbyIsInRvcEJ0blNob3ciLCJteVNjcm9sbFRvIiwicmVzZXRTY3JvbGxUbyIsImdldFNjcm9sbEhlaWdodCIsImdldENsaWVudEhlaWdodCIsImdldFN0ZXAiLCJzdGFyIiwiZW5kIiwiY291bnQiLCJzdGVwIiwiaSIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiaXNSZWFsIiwiaCIsImNsaWVudEhlaWdodCIsInNldENsaWVudEhlaWdodCIsImJvZHlIZWlnaHQiLCJzZXRCb2R5SGVpZ2h0IiwiY2FuY2VsYWJsZSIsImRlZmF1bHRQcmV2ZW50ZWQiXSwibWFwcGluZ3MiOiIwRkFBQTs7Ozs7O0FBTWUsU0FBU0EsUUFBVCxDQUFrQkMsT0FBbEIsRUFBMkJDLFlBQTNCLEVBQXlDO0FBQ3ZELE1BQUlDLEVBQUUsR0FBRyxJQUFUO0FBQ0FBLElBQUUsQ0FBQ0MsT0FBSCxHQUFhLE9BQWIsQ0FGdUQsQ0FFakM7QUFDdEJELElBQUUsQ0FBQ0YsT0FBSCxHQUFhQSxPQUFPLElBQUksRUFBeEIsQ0FIdUQsQ0FHM0I7QUFDNUJFLElBQUUsQ0FBQ0QsWUFBSCxHQUFrQkEsWUFBWSxJQUFJLEtBQWxDLENBSnVELENBSWQ7O0FBRXpDQyxJQUFFLENBQUNFLGVBQUgsR0FBcUIs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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUVqRCxDQXJFRCIsImZpbGUiOiIxNzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBtZXNjcm9sbFxyXG4gKiB2ZXJzaW9uIDEuMi41XHJcbiAqIDIwMjAtMDMtMTUgd2VuanVcclxuICogaHR0cDovL3d3dy5tZXNjcm9sbC5jb21cclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZVNjcm9sbChvcHRpb25zLCBpc1Njcm9sbEJvZHkpIHtcclxuXHRsZXQgbWUgPSB0aGlzO1xyXG5cdG1lLnZlcnNpb24gPSAnMS4yLjUnOyAvLyBtZXNjcm9sbOeJiOacrOWPt1xyXG5cdG1lLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyDphY3nva5cclxuXHRtZS5pc1Njcm9sbEJvZHkgPSBpc1Njcm9sbEJvZHkgfHwgZmFsc2U7IC8vIOa7muWKqOWMuuWfn+aYr+WQpuS4uuWOn+eUn+mhtemdoua7muWKqDsg6buY6K6k5Li6c2Nyb2xsLXZpZXdcclxuXHJcblx0bWUuaXNEb3duU2Nyb2xsaW5nID0gZmFsc2U7IC8vIOaYr+WQpuWcqOaJp+ihjOS4i+aLieWIt+aWsOeahOWbnuiwg1xyXG5cdG1lLmlzVXBTY3JvbGxpbmcgPSBmYWxzZTsgLy8g5piv5ZCm5Zyo5omn6KGM5LiK5ouJ5Yqg6L2955qE5Zue6LCDXHJcblx0bGV0IGhhc0Rvd25DYWxsYmFjayA9IG1lLm9wdGlvbnMuZG93biAmJiBtZS5vcHRpb25zLmRvd24uY2FsbGJhY2s7IC8vIOaYr+WQpumFjee9ruS6hmRvd27nmoRjYWxsYmFja1xyXG5cclxuXHQvLyDliJ3lp4vljJbkuIvmi4nliLfmlrBcclxuXHRtZS5pbml0RG93blNjcm9sbCgpO1xyXG5cdC8vIOWIneWni+WMluS4iuaLieWKoOi9vSzliJnliJ3lp4vljJZcclxuXHRtZS5pbml0VXBTY3JvbGwoKTtcclxuXHJcblx0Ly8g6Ieq5Yqo5Yqg6L29XHJcblx0c2V0VGltZW91dChmdW5jdGlvbigpIHsgLy8g5b6F5Li757q/56iL5omn6KGM5a6M5q+V5YaN5omn6KGMLOmBv+WFjW5ldyBNZVNjcm9sbOacquWIneWni+WMlizlnKjlm57osIPojrflj5bkuI3liLBtZXNjcm9sbOeahOWunuS+i1xyXG5cdFx0Ly8g6Ieq5Yqo6Kem5Y+R5LiL5ouJ5Yi35pawICjlj6rmnInphY3nva7kuoZkb3du55qEY2FsbGJhY2vmiY3oh6rliqjop6blj5HkuIvmi4nliLfmlrApXHJcblx0XHRpZiAobWUub3B0RG93bi51c2UgJiYgbWUub3B0RG93bi5hdXRvICYmIGhhc0Rvd25DYWxsYmFjaykge1xyXG5cdFx0XHRpZiAobWUub3B0RG93bi5hdXRvU2hvd0xvYWRpbmcpIHtcclxuXHRcdFx0XHRtZS50cmlnZ2VyRG93blNjcm9sbCgpOyAvLyDmmL7npLrkuIvmi4nov5vluqYs5omn6KGM5LiL5ouJ5Zue6LCDXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bWUub3B0RG93bi5jYWxsYmFjayAmJiBtZS5vcHREb3duLmNhbGxiYWNrKG1lKTsgLy8g5LiN5pi+56S65LiL5ouJ6L+b5bqmLOebtOaOpeaJp+ihjOS4i+aLieWbnuiwg1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQvLyDoh6rliqjop6blj5HkuIrmi4nliqDovb1cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgLy8g5bu25pe256Gu5L+d5YWI5omn6KGMZG93bueahGNhbGxiYWNrLOWGjeaJp+ihjHVw55qEY2FsbGJhY2ss5Zug5Li66YOo5YiG5bCP56iL5bqPZW1pdOaYr+W8guatpSzkvJrlr7zoh7Rpc1VwQXV0b0xvYWTliKTmlq3mnInor69cclxuXHRcdFx0bWUub3B0VXAudXNlICYmIG1lLm9wdFVwLmF1dG8gJiYgIW1lLmlzVXBBdXRvTG9hZCAmJiBtZS50cmlnZ2VyVXBTY3JvbGwoKTtcclxuXHRcdH0sMTAwKVxyXG5cdH0sIDMwKTsgLy8g6ZyA6K6pbWUub3B0RG93bi5pbml0ZWTlkoxtZS5vcHRVcC5pbml0ZWTlhYjmiafooYxcclxufVxyXG5cclxuLyog6YWN572u5Y+C5pWwOuS4i+aLieWIt+aWsCAqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUuZXh0ZW5kRG93blNjcm9sbCA9IGZ1bmN0aW9uKG9wdERvd24pIHtcclxuXHQvLyDkuIvmi4nliLfmlrDnmoTphY3nva5cclxuXHRNZVNjcm9sbC5leHRlbmQob3B0RG93biwge1xyXG5cdFx0dXNlOiB0cnVlLCAvLyDmmK/lkKblkK/nlKjkuIvmi4nliLfmlrA7IOm7mOiupHRydWVcclxuXHRcdGF1dG86IHRydWUsIC8vIOaYr+WQpuWcqOWIneWni+WMluWujOavleS5i+WQjuiHquWKqOaJp+ihjOS4i+aLieWIt+aWsOeahOWbnuiwgzsg6buY6K6kdHJ1ZVxyXG5cdFx0bmF0aXZlOiBmYWxzZSwgLy8g5piv5ZCm5L2/55So57O757uf6Ieq5bim55qE5LiL5ouJ5Yi35pawOyDpu5jorqRmYWxzZTsg5LuFbWVzY3JvbGwtYm9keeeUn+aViCAo5YC85Li6dHJ1ZeaXtizov5jpnIDlnKhwYWdlc+mFjee9rmVuYWJsZVB1bGxEb3duUmVmcmVzaDp0cnVlO+ivpuivt+WPguiAg21lc2Nyb2xsLW5hdGl2ZeeahOahiOS+iylcclxuXHRcdGF1dG9TaG93TG9hZGluZzogZmFsc2UsIC8vIOWmguaenOiuvue9rmF1dG89dHJ1ZSjlnKjliJ3lp4vljJblrozmr5XkuYvlkI7oh6rliqjmiafooYzkuIvmi4nliLfmlrDnmoTlm57osIMpLOmCo+S5iOaYr+WQpuaYvuekuuS4i+aLieWIt+aWsOeahOi/m+W6pjsg6buY6K6kZmFsc2VcclxuXHRcdGlzTG9jazogZmFsc2UsIC8vIOaYr+WQpumUgeWumuS4i+aLieWIt+aWsCzpu5jorqRmYWxzZTtcclxuXHRcdG9mZnNldDogODAsIC8vIOWcqOWIl+ihqOmhtumDqCzkuIvmi4nlpKfkuo44MHB4LOadvuaJi+WNs+WPr+inpuWPkeS4i+aLieWIt+aWsOeahOWbnuiwg1xyXG5cdFx0c3RhcnRUb3A6IDEwMCwgLy8gc2Nyb2xsLXZpZXfmu5rliqjliLDpobbpg6jml7Ys5q2k5pe255qEc2Nyb2xsLXRvcOS4jeS4gOWumuS4ujAsIOatpOWAvOeUqOS6juaOp+WItuacgOWkp+eahOivr+W3rlxyXG5cdFx0ZnBzOiA4MCwgLy8g5LiL5ouJ6IqC5rWBICjlgLzotorlpKfmr4/np5LliLfmlrDpopHnjofotorpq5gpXHJcblx0XHRpbk9mZnNldFJhdGU6IDEsIC8vIOWcqOWIl+ihqOmhtumDqCzkuIvmi4nnmoTot53nprvlsI/kuo5vZmZzZXTml7Ys5pS55Y+Y5LiL5ouJ5Yy65Z+f6auY5bqm5q+U5L6LO+WAvOWwj+S6jjHkuJTotormjqXov5EwLOmrmOW6puWPmOWMlui2iuWwjyzooajnjrDkuLrotorlvoDkuIvotorpmr7mi4lcclxuXHRcdG91dE9mZnNldFJhdGU6IDAuMiwgLy8g5Zyo5YiX6KGo6aG26YOoLOS4i+aLieeahOi3neemu+Wkp+S6jm9mZnNldOaXtizmlLnlj5jkuIvmi4nljLrln5/pq5jluqbmr5Tkvos75YC85bCP5LqOMeS4lOi2iuaOpei/kTAs6auY5bqm5Y+Y5YyW6LaK5bCPLOihqOeOsOS4uui2iuW+gOS4i+i2iumavuaLiVxyXG5cdFx0Ym90dG9tT2Zmc2V0OiAyMCwgLy8g5b2T5omL5oyHdG91Y2htb3Zl5L2N572u5Zyo6Led56a7Ym9keeW6lemDqDIwcHjojIPlm7TlhoXnmoTml7blgJnnu5PmnZ/kuIrmi4nliLfmlrAs6YG/5YWNV2Vidmlld+W1jOWll+WvvOiHtHRvdWNoZW5k5LqL5Lu25LiN5omn6KGMXHJcblx0XHRtaW5BbmdsZTogNDUsIC8vIOWQkeS4i+a7keWKqOacgOWwkeWBj+enu+eahOinkuW6pizlj5blgLzljLrpl7QgIFswLDkwXTvpu5jorqQ0NeW6pizljbPlkJHkuIvmu5HliqjnmoTop5LluqblpKfkuo40NeW6puWImeinpuWPkeS4i+aLiTvogIzlsI/kuo40NeW6pizlsIbkuI3op6blj5HkuIvmi4ks6YG/5YWN5LiO5bem5Y+z5ruR5Yqo55qE6L2u5pKt562J57uE5Lu25Yay56qBO1xyXG5cdFx0dGV4dEluT2Zmc2V0OiAn5LiL5ouJ5Yi35pawJywgLy8g5LiL5ouJ55qE6Led56a75Zyob2Zmc2V06IyD5Zu05YaF55qE5o+Q56S65paH5pysXHJcblx0XHR0ZXh0T3V0T2Zmc2V0OiAn6YeK5pS+5pu05pawJywgLy8g5LiL5ouJ55qE6Led56a75aSn5LqOb2Zmc2V06IyD5Zu055qE5o+Q56S65paH5pysXHJcblx0XHR0ZXh0TG9hZGluZzogJ+WKoOi9veS4rSAuLi4nLCAvLyDliqDovb3kuK3nmoTmj5DnpLrmlofmnKxcclxuXHRcdGJnQ29sb3I6IFwidHJhbnNwYXJlbnRcIiwgLy8g6IOM5pmv6aKc6ImyICjlu7rorq7lnKhwYWdlcy5qc29u5Lit5YaN6K6+572u5LiA5LiLYmFja2dyb3VuZENvbG9yVG9wKVxyXG5cdFx0dGV4dENvbG9yOiBcImdyYXlcIiwgLy8g5paH5pys6aKc6ImyICjlvZNiZ0NvbG9y6YWN572u5LqG6aKc6ImyLOiAjHRleHRDb2xvcuacqumFjee9ruaXtizliJl0ZXh0Q29sb3LkvJrpu5jorqTkuLrnmb3oibIpXHJcblx0XHRpbml0ZWQ6IG51bGwsIC8vIOS4i+aLieWIt+aWsOWIneWni+WMluWujOavleeahOWbnuiwg1xyXG5cdFx0aW5PZmZzZXQ6IG51bGwsIC8vIOS4i+aLieeahOi3neemu+i/m+WFpW9mZnNldOiMg+WbtOWGhemCo+S4gOWIu+eahOWbnuiwg1xyXG5cdFx0b3V0T2Zmc2V0OiBudWxsLCAvLyDkuIvmi4nnmoTot53nprvlpKfkuo5vZmZzZXTpgqPkuIDliLvnmoTlm57osINcclxuXHRcdG9uTW92aW5nOiBudWxsLCAvLyDkuIvmi4nov4fnqIvkuK3nmoTlm57osIMs5ruR5Yqo6L+H56iL5LiA55u05Zyo5omn6KGMOyByYXRl5LiL5ouJ5Yy65Z+f5b2T5YmN6auY5bqm5LiO5oyH5a6a6Led56a755qE5q+U5YC8KGluT2Zmc2V0OiByYXRlPDE7IG91dE9mZnNldDogcmF0ZT49MSk7IGRvd25IaWdodOW9k+WJjeS4i+aLieWMuuWfn+eahOmrmOW6plxyXG5cdFx0YmVmb3JlTG9hZGluZzogbnVsbCwgLy8g5YeG5aSH6Kem5Y+R5LiL5ouJ5Yi35paw55qE5Zue6LCDOiDlpoLmnpxyZXR1cm4gdHJ1ZSzlsIbkuI3op6blj5FzaG93TG9hZGluZ+WSjGNhbGxiYWNr5Zue6LCDOyDluLjnlKjmnaXlrozlhajoh6rlrprkuYnkuIvmi4nliLfmlrAsIOWPguiAg+ahiOS+i+OAkOa3mOWunSB2Ni44LjDjgJFcclxuXHRcdHNob3dMb2FkaW5nOiBudWxsLCAvLyDmmL7npLrkuIvmi4nliLfmlrDov5vluqbnmoTlm57osINcclxuXHRcdGFmdGVyTG9hZGluZzogbnVsbCwgLy8g5YeG5aSH57uT5p2f5LiL5ouJ55qE5Zue6LCDLiDov5Tlm57nu5PmnZ/kuIvmi4nnmoTlu7bml7bmiafooYzml7bpl7Qs6buY6K6kMG1zOyDluLjnlKjkuo7nu5PmnZ/kuIvmi4nkuYvliY3lho3mmL7npLrlj6blpJbkuIDlsI/mrrXliqjnlLss5omN5Y676ZqQ6JeP5LiL5ouJ5Yi35paw55qE5Zy65pmvLCDlj4LogIPmoYjkvovjgJBkb3RKdW1w44CRXHJcblx0XHRlbmREb3duU2Nyb2xsOiBudWxsLCAvLyDnu5PmnZ/kuIvmi4nliLfmlrDnmoTlm57osINcclxuXHRcdGNhbGxiYWNrOiBmdW5jdGlvbihtZXNjcm9sbCkge1xyXG5cdFx0XHQvLyDkuIvmi4nliLfmlrDnmoTlm57osIM76buY6K6k6YeN572u5LiK5ouJ5Yqg6L295YiX6KGo5Li656ys5LiA6aG1XHJcblx0XHRcdG1lc2Nyb2xsLnJlc2V0VXBTY3JvbGwoKTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG4vKiDphY3nva7lj4LmlbA65LiK5ouJ5Yqg6L29ICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5leHRlbmRVcFNjcm9sbCA9IGZ1bmN0aW9uKG9wdFVwKSB7XHJcblx0Ly8g5LiK5ouJ5Yqg6L2955qE6YWN572uXHJcblx0TWVTY3JvbGwuZXh0ZW5kKG9wdFVwLCB7XHJcblx0XHR1c2U6IHRydWUsIC8vIOaYr+WQpuWQr+eUqOS4iuaLieWKoOi9vTsg6buY6K6kdHJ1ZVxyXG5cdFx0YXV0bzogdHJ1ZSwgLy8g5piv5ZCm5Zyo5Yid5aeL5YyW5a6M5q+V5LmL5ZCO6Ieq5Yqo5omn6KGM5LiK5ouJ5Yqg6L2955qE5Zue6LCDOyDpu5jorqR0cnVlXHJcblx0XHRpc0xvY2s6IGZhbHNlLCAvLyDmmK/lkKbplIHlrprkuIrmi4nliqDovb0s6buY6K6kZmFsc2U7XHJcblx0XHRpc0JvdGg6IHRydWUsIC8vIOS4iuaLieWKoOi9veaXtizlpoLmnpzmu5HliqjliLDliJfooajpobbpg6jmmK/lkKblj6/ku6XlkIzml7bop6blj5HkuIvmi4nliLfmlrA76buY6K6kdHJ1ZSzkuKTogIXlj6/lkIzml7bop6blj5E7XHJcblx0XHRpc0JvdW5jZTogZmFsc2UsIC8vIOm7mOiupOemgeatouapoeearueti+eahOWbnuW8ueaViOaenCwg5b+F6K+75LqL6aG5OiBodHRwOi8vd3d3Lm1lc2Nyb2xsLmNvbS9xYS5odG1sP3Y9MTkwNzI1I3EyNVxyXG5cdFx0Y2FsbGJhY2s6IG51bGwsIC8vIOS4iuaLieWKoOi9veeahOWbnuiwgztmdW5jdGlvbihwYWdlLG1lc2Nyb2xsKXsgfVxyXG5cdFx0cGFnZToge1xyXG5cdFx0XHRudW06IDAsIC8vIOW9k+WJjemhteeggSzpu5jorqQwLOWbnuiwg+S5i+WJjeS8muWKoDEs5Y2zY2FsbGJhY2socGFnZSnkvJrku44x5byA5aeLXHJcblx0XHRcdHNpemU6IDEwLCAvLyDmr4/pobXmlbDmja7nmoTmlbDph49cclxuXHRcdFx0dGltZTogbnVsbCAvLyDliqDovb3nrKzkuIDpobXmlbDmja7mnI3liqHlmajov5Tlm57nmoTml7bpl7Q7IOmYsuatoueUqOaIt+e/u+mhteaXtizlkI7lj7DmlrDlop7kuobmlbDmja7ku47ogIzlr7zoh7TkuIvkuIDpobXmlbDmja7ph43lpI07XHJcblx0XHR9LFxyXG5cdFx0bm9Nb3JlU2l6ZTogNSwgLy8g5aaC5p6c5YiX6KGo5bey5peg5pWw5o2uLOWPr+iuvue9ruWIl+ihqOeahOaAu+aVsOmHj+imgeWkp+S6juetieS6jjXmnaHmiY3mmL7npLrml6Dmm7TlpJrmlbDmja476YG/5YWN5YiX6KGo5pWw5o2u6L+H5bCRKOavlOWmguWPquacieS4gOadoeaVsOaNriks5pi+56S65peg5pu05aSa5pWw5o2u5Lya5LiN5aW955yLXHJcblx0XHRvZmZzZXQ6IDgwLCAvLyDot53lupXpg6jlpJrov5zml7Ys6Kem5Y+RdXBDYWxsYmFja1xyXG5cdFx0dGV4dExvYWRpbmc6ICfliqDovb3kuK0gLi4uJywgLy8g5Yqg6L295Lit55qE5o+Q56S65paH5pysXHJcblx0XHR0ZXh0Tm9Nb3JlOiAnLS0gRU5EIC0tJywgLy8g5rKh5pyJ5pu05aSa5pWw5o2u55qE5o+Q56S65paH5pysXHJcblx0XHRiZ0NvbG9yOiBcInRyYW5zcGFyZW50XCIsIC8vIOiDjOaZr+minOiJsiAo5bu66K6u5ZyocGFnZXMuanNvbuS4reWGjeiuvue9ruS4gOS4i2JhY2tncm91bmRDb2xvckJvdHRvbSlcclxuXHRcdHRleHRDb2xvcjogXCJncmF5XCIsIC8vIOaWh+acrOminOiJsiAo5b2TYmdDb2xvcumFjee9ruS6huminOiJsizogIx0ZXh0Q29sb3LmnKrphY3nva7ml7Ys5YiZdGV4dENvbG9y5Lya6buY6K6k5Li655m96ImyKVxyXG5cdFx0aW5pdGVkOiBudWxsLCAvLyDliJ3lp4vljJblrozmr5XnmoTlm57osINcclxuXHRcdHNob3dMb2FkaW5nOiBudWxsLCAvLyDmmL7npLrliqDovb3kuK3nmoTlm57osINcclxuXHRcdHNob3dOb01vcmU6IG51bGwsIC8vIOaYvuekuuaXoOabtOWkmuaVsOaNrueahOWbnuiwg1xyXG5cdFx0aGlkZVVwU2Nyb2xsOiBudWxsLCAvLyDpmpDol4/kuIrmi4nliqDovb3nmoTlm57osINcclxuXHRcdGVyckRpc3RhbmNlOiA2MCwgLy8gZW5kRXJy55qE5pe25YCZ6ZyA5b6A5LiK5ruR5Yqo5LiA5q616Led56a7LOS9v+WFtuW+gOS4i+a7keWKqOaXtuWGjeasoeinpuWPkW9uUmVhY2hCb3R0b20s5LuFbWVzY3JvbGwtYm9keeeUn+aViFxyXG5cdFx0dG9Ub3A6IHtcclxuXHRcdFx0Ly8g5Zue5Yiw6aG26YOo5oyJ6ZKuLOmcgOmFjee9rnNyY+aJjeaYvuekulxyXG5cdFx0XHRzcmM6IG51bGwsIC8vIOWbvueJh+i3r+W+hCzpu5jorqRudWxsICjnu53lr7not6/lvoTmiJbnvZHnu5zlm74pXHJcblx0XHRcdG9mZnNldDogMTAwMCwgLy8g5YiX6KGo5rua5Yqo5aSa5bCR6Led56a75omN5pi+56S65Zue5Yiw6aG26YOo5oyJ6ZKuLOm7mOiupDEwMDBcclxuXHRcdFx0ZHVyYXRpb246IDMwMCwgLy8g5Zue5Yiw6aG26YOo55qE5Yqo55S75pe26ZW/LOm7mOiupDMwMG1zICjlvZPlgLzkuLow5oiWMzAw5YiZ5L2/55So57O757uf6Ieq5bim5Zue5Yiw6aG26YOoLOabtOa1geeVhTsg5YW25LuW5YC85YiZ6YCa6L+Hc3RlcOaooeaLnyzpg6jliIbmnLrlnovlj6/og73kuI3lpJ/mtYHnlYUs5omA5Lul6Z2e54m55q6K5oOF5Ya15LiN5bu66K6u5L+u5pS55q2k6aG5KVxyXG5cdFx0XHRidG5DbGljazogbnVsbCwgLy8g54K55Ye75oyJ6ZKu55qE5Zue6LCDXHJcblx0XHRcdG9uU2hvdzogbnVsbCwgLy8g5piv5ZCm5pi+56S655qE5Zue6LCDXHJcblx0XHRcdHpJbmRleDogOTk5MCwgLy8gZml4ZWTlrprkvY16LWluZGV45YC8XHJcblx0XHRcdGxlZnQ6IG51bGwsIC8vIOWIsOW3pui+ueeahOi3neemuywg6buY6K6kbnVsbC4g5q2k6aG55pyJ5YC85pe2LHJpZ2h05LiN55Sf5pWILiAo5pSv5oyBMjAsIFwiMjBycHhcIiwgXCIyMHB4XCIsIFwiMjAlXCLmoLzlvI/nmoTlgLwsIOWFtuS4ree6r+aVsOWtl+WImem7mOiupOWNleS9jXJweClcclxuXHRcdFx0cmlnaHQ6IDIwLCAvLyDliLDlj7PovrnnmoTot53nprssIOm7mOiupDIwICjmlK/mjIEyMCwgXCIyMHJweFwiLCBcIjIwcHhcIiwgXCIyMCVcIuagvOW8j+eahOWAvCwg5YW25Lit57qv5pWw5a2X5YiZ6buY6K6k5Y2V5L2NcnB4KVxyXG5cdFx0XHRib3R0b206IDEyMCwgLy8g5Yiw5bqV6YOo55qE6Led56a7LCDpu5jorqQxMjAgKOaUr+aMgTIwLCBcIjIwcnB4XCIsIFwiMjBweFwiLCBcIjIwJVwi5qC85byP55qE5YC8LCDlhbbkuK3nuq/mlbDlrZfliJnpu5jorqTljZXkvY1ycHgpXHJcblx0XHRcdHNhZmVhcmVhOiBmYWxzZSwgLy8gYm90dG9t55qE5YGP56e76YeP5piv5ZCm5Yqg5LiK5bqV6YOo5a6J5YWo5Yy655qE6Led56a7LCDpu5jorqRmYWxzZSwg6ZyA6KaB6YCC6YWNaVBob25lWOaXtuS9v+eUqCAo5YW35L2T55qE55WM6Z2i5aaC5p6c5LiN6YWN572u5q2k6aG5LOWImeWPluacrHZ1ZeeahHNhZmVhcmVh5YC8KVxyXG5cdFx0XHR3aWR0aDogNzIsIC8vIOWbnuWIsOmhtumDqOWbvuagh+eahOWuveW6piwg6buY6K6kNzIgKOaUr+aMgTIwLCBcIjIwcnB4XCIsIFwiMjBweFwiLCBcIjIwJVwi5qC85byP55qE5YC8LCDlhbbkuK3nuq/mlbDlrZfliJnpu5jorqTljZXkvY1ycHgpXHJcblx0XHRcdHJhZGl1czogXCI1MCVcIiAvLyDlnIbop5IsIOm7mOiupFwiNTAlXCIgKOaUr+aMgTIwLCBcIjIwcnB4XCIsIFwiMjBweFwiLCBcIjIwJVwi5qC85byP55qE5YC8LCDlhbbkuK3nuq/mlbDlrZfliJnpu5jorqTljZXkvY1ycHgpXHJcblx0XHR9LFxyXG5cdFx0ZW1wdHk6IHtcclxuXHRcdFx0dXNlOiB0cnVlLCAvLyDmmK/lkKbmmL7npLrnqbrluIPlsYBcclxuXHRcdFx0aWNvbjogbnVsbCwgLy8g5Zu+5qCH6Lev5b6EXHJcblx0XHRcdHRpcDogJ34g5pqC5peg55u45YWz5pWw5o2uIH4nLCAvLyDmj5DnpLpcclxuXHRcdFx0YnRuVGV4dDogJycsIC8vIOaMiemSrlxyXG5cdFx0XHRidG5DbGljazogbnVsbCwgLy8g54K55Ye75oyJ6ZKu55qE5Zue6LCDXHJcblx0XHRcdG9uU2hvdzogbnVsbCwgLy8g5piv5ZCm5pi+56S655qE5Zue6LCDXHJcblx0XHRcdGZpeGVkOiBmYWxzZSwgLy8g5piv5ZCm5L2/55SoZml4ZWTlrprkvY0s6buY6K6kZmFsc2U7IOmFjee9rmZpeGVk5Li6dHJ1ZSzku6XkuIvnmoR0b3Dlkox6SW5kZXjmiY3nlJ/mlYggKHRyYW5zZm9ybeS8muS9v2ZpeGVk5aSx5pWILOacgOe7iOS8mumZjee6p+S4umFic29sdXRlKVxyXG5cdFx0XHR0b3A6IFwiMTAwcnB4XCIsIC8vIGZpeGVk5a6a5L2N55qEdG9w5YC8ICjlrozmlbTnmoTljZXkvY3lgLws5aaCIFwiMTAlXCI7IFwiMTAwcnB4XCIpXHJcblx0XHRcdHpJbmRleDogOTkgLy8gZml4ZWTlrprkvY16LWluZGV45YC8XHJcblx0XHR9LFxyXG5cdFx0b25TY3JvbGw6IGZhbHNlIC8vIOaYr+WQpuebkeWQrOa7muWKqOS6i+S7tlxyXG5cdH0pXHJcbn1cclxuXHJcbi8qIOmFjee9ruWPguaVsCAqL1xyXG5NZVNjcm9sbC5leHRlbmQgPSBmdW5jdGlvbih1c2VyT3B0aW9uLCBkZWZhdWx0T3B0aW9uKSB7XHJcblx0aWYgKCF1c2VyT3B0aW9uKSByZXR1cm4gZGVmYXVsdE9wdGlvbjtcclxuXHRmb3IgKGxldCBrZXkgaW4gZGVmYXVsdE9wdGlvbikge1xyXG5cdFx0aWYgKHVzZXJPcHRpb25ba2V5XSA9PSBudWxsKSB7XHJcblx0XHRcdGxldCBkZWYgPSBkZWZhdWx0T3B0aW9uW2tleV07XHJcblx0XHRcdGlmIChkZWYgIT0gbnVsbCAmJiB0eXBlb2YgZGVmID09PSAnb2JqZWN0Jykge1xyXG5cdFx0XHRcdHVzZXJPcHRpb25ba2V5XSA9IE1lU2Nyb2xsLmV4dGVuZCh7fSwgZGVmKTsgLy8g5rex5bqm5Yy56YWNXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dXNlck9wdGlvbltrZXldID0gZGVmO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB1c2VyT3B0aW9uW2tleV0gPT09ICdvYmplY3QnKSB7XHJcblx0XHRcdE1lU2Nyb2xsLmV4dGVuZCh1c2VyT3B0aW9uW2tleV0sIGRlZmF1bHRPcHRpb25ba2V5XSk7IC8vIOa3seW6puWMuemFjVxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gdXNlck9wdGlvbjtcclxufVxyXG5cclxuLyog566A5Y2V5Yik5pat5piv5ZCm6YWN572u5LqG6aKc6ImyICjpnZ7pgI/mmI4s6Z2e55m96ImyKSAqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUuaGFzQ29sb3IgPSBmdW5jdGlvbihjb2xvcikge1xyXG5cdGlmKCFjb2xvcikgcmV0dXJuIGZhbHNlO1xyXG5cdGxldCBjID0gY29sb3IudG9Mb3dlckNhc2UoKTtcclxuXHRyZXR1cm4gYyAhPSBcIiNmZmZcIiAmJiBjICE9IFwiI2ZmZmZmZlwiICYmIGMgIT0gXCJ0cmFuc3BhcmVudFwiICYmIGMgIT0gXCJ3aGl0ZVwiXHJcbn1cclxuXHJcbi8qIC0tLS0tLS3liJ3lp4vljJbkuIvmi4nliLfmlrAtLS0tLS0tICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5pbml0RG93blNjcm9sbCA9IGZ1bmN0aW9uKCkge1xyXG5cdGxldCBtZSA9IHRoaXM7XHJcblx0Ly8g6YWN572u5Y+C5pWwXHJcblx0bWUub3B0RG93biA9IG1lLm9wdGlvbnMuZG93biB8fCB7fTtcclxuXHRpZighbWUub3B0RG93bi50ZXh0Q29sb3IgJiYgbWUuaGFzQ29sb3IobWUub3B0RG93bi5iZ0NvbG9yKSkgbWUub3B0RG93bi50ZXh0Q29sb3IgPSBcIiNmZmZcIjsgLy8g5b2TYmdDb2xvcuacieWAvOS4lHRleHRDb2xvcuacquiuvue9rizliJl0ZXh0Q29sb3Lpu5jorqTnmb3oibJcclxuXHRtZS5leHRlbmREb3duU2Nyb2xsKG1lLm9wdERvd24pO1xyXG5cdFxyXG5cdC8vIOWmguaenOaYr21lc2Nyb2xsLWJvZHnkuJTphY3nva7kuoZuYXRpdmUs5YiZ56aB5q2i6Ieq5a6a5LmJ55qE5LiL5ouJ5Yi35pawXHJcblx0aWYobWUuaXNTY3JvbGxCb2R5ICYmIG1lLm9wdERvd24ubmF0aXZlKXtcclxuXHRcdG1lLm9wdERvd24udXNlID0gZmFsc2VcclxuXHR9ZWxzZXtcclxuXHRcdG1lLm9wdERvd24ubmF0aXZlID0gZmFsc2UgLy8g5LuFbWVzY3JvbGwtYm9keeaUr+aMgSxtZXNjcm9sbC11bmnkuI3mlK/mjIFcclxuXHR9XHJcblx0XHJcblx0bWUuZG93bkhpZ2h0ID0gMDsgLy8g5LiL5ouJ5Yy65Z+f55qE6auY5bqmXHJcblxyXG5cdC8vIOWcqOmhtemdouS4reWKoOWFpeS4i+aLieW4g+WxgFxyXG5cdGlmIChtZS5vcHREb3duLnVzZSAmJiBtZS5vcHREb3duLmluaXRlZCkge1xyXG5cdFx0Ly8g5Yid5aeL5YyW5a6M5q+V55qE5Zue6LCDXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyAvLyDlvoXkuLvnur/nqIvmiafooYzlrozmr5Xlho3miafooYws6YG/5YWNbmV3IE1lU2Nyb2xs5pyq5Yid5aeL5YyWLOWcqOWbnuiwg+iOt+WPluS4jeWIsG1lc2Nyb2xs55qE5a6e5L6LXHJcblx0XHRcdG1lLm9wdERvd24uaW5pdGVkKG1lKTtcclxuXHRcdH0sIDApXHJcblx0fVxyXG59XHJcblxyXG4vKiDliJfooah0b3VjaHN0YXJ05LqL5Lu2ICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS50b3VjaHN0YXJ0RXZlbnQgPSBmdW5jdGlvbihlKSB7XHJcblx0aWYgKCF0aGlzLm9wdERvd24udXNlKSByZXR1cm47XHJcblxyXG5cdHRoaXMuc3RhcnRQb2ludCA9IHRoaXMuZ2V0UG9pbnQoZSk7IC8vIOiusOW9lei1t+eCuVxyXG5cdHRoaXMuc3RhcnRUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpOyAvLyDorrDlvZXmraTml7bnmoTmu5rliqjmnaHkvY3nva5cclxuXHR0aGlzLmxhc3RQb2ludCA9IHRoaXMuc3RhcnRQb2ludDsgLy8g6YeN572u5LiK5qyhbW92ZeeahOeCuVxyXG5cdHRoaXMubWF4VG91Y2htb3ZlWSA9IHRoaXMuZ2V0Qm9keUhlaWdodCgpIC0gdGhpcy5vcHREb3duLmJvdHRvbU9mZnNldDsgLy8g5omL5oyH6Kem5pG455qE5pyA5aSn6IyD5Zu0KOWGmeWcqHRvdWNoc3RhcnTpgb/lhY1ib2R56I635Y+W6auY5bqm5Li6MOeahOaDheWGtSlcclxuXHR0aGlzLmluVG91Y2hlbmQgPSBmYWxzZTsgLy8g5qCH6K6w5LiN5pivdG91Y2hlbmRcclxufVxyXG5cclxuLyog5YiX6KGodG91Y2htb3Zl5LqL5Lu2ICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS50b3VjaG1vdmVFdmVudCA9IGZ1bmN0aW9uKGUpIHtcclxuXHJcblxyXG5cclxuXHRcclxuXHRpZiAoIXRoaXMub3B0RG93bi51c2UpIHJldHVybjtcclxuXHRpZiAoIXRoaXMuc3RhcnRQb2ludCkgcmV0dXJuO1xyXG5cdGxldCBtZSA9IHRoaXM7XHJcblxyXG5cdC8vIOiKgua1gVxyXG5cdGxldCB0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblx0aWYgKG1lLm1vdmVUaW1lICYmIHQgLSBtZS5tb3ZlVGltZSA8IG1lLm1vdmVUaW1lRGlmZikgeyAvLyDlsI/kuo7oioLmtYHml7bpl7Qs5YiZ5LiN5aSE55CGXHJcblx0XHRyZXR1cm47XHJcblx0fSBlbHNlIHtcclxuXHRcdG1lLm1vdmVUaW1lID0gdFxyXG5cdFx0aWYoIW1lLm1vdmVUaW1lRGlmZikgbWUubW92ZVRpbWVEaWZmID0gMTAwMCAvIG1lLm9wdERvd24uZnBzXHJcblx0fVxyXG5cclxuXHRsZXQgc2Nyb2xsVG9wID0gbWUuZ2V0U2Nyb2xsVG9wKCk7IC8vIOW9k+WJjea7muWKqOadoeeahOi3neemu1xyXG5cdGxldCBjdXJQb2ludCA9IG1lLmdldFBvaW50KGUpOyAvLyDlvZPliY3ngrlcclxuXHJcblx0bGV0IG1vdmVZID0gY3VyUG9pbnQueSAtIG1lLnN0YXJ0UG9pbnQueTsgLy8g5ZKM6LW354K55q+ULOenu+WKqOeahOi3neemuyzlpKfkuo4w5ZCR5LiL5ouJLOWwj+S6jjDlkJHkuIrmi4lcclxuXHJcblx0Ly8g5ZCR5LiL5ouJICYmIOWcqOmhtumDqFxyXG5cdC8vIG1lc2Nyb2xsLWJvZHks55u05o6l5Yik5a6a5Zyo6aG26YOo5Y2z5Y+vXHJcblx0Ly8gc2Nyb2xsLXZpZXflnKjmu5rliqjml7bkuI3kvJrop6blj5F0b3VjaG1vdmUs5b2T6Kem6aG2L+W6lS/lt6Yv5Y+z5pe2LOaJjeS8muinpuWPkXRvdWNobW92ZVxyXG5cdC8vIHNjcm9sbC12aWV35rua5Yqo5Yiw6aG26YOo5pe2LHNjcm9sbFRvcOS4jeS4gOWumuS4ujA7IOWcqGlPU+eahEFQUOS4rXNjcm9sbFRvcOWPr+iDveS4uui0n+aVsCzkuI3kuIDlrprlkoxzdGFydFRvcOebuOetiVxyXG5cdGlmIChtb3ZlWSA+IDAgJiYgKFxyXG5cdFx0XHQobWUuaXNTY3JvbGxCb2R5ICYmIHNjcm9sbFRvcCA8PSAwKVxyXG5cdFx0XHR8fFxyXG5cdFx0XHQoIW1lLmlzU2Nyb2xsQm9keSAmJiAoc2Nyb2xsVG9wIDw9IDAgfHwgKHNjcm9sbFRvcCA8PSBtZS5vcHREb3duLnN0YXJ0VG9wICYmIHNjcm9sbFRvcCA9PT0gbWUuc3RhcnRUb3ApKSApXHJcblx0XHQpKSB7XHJcblx0XHQvLyDlj6/kuIvmi4nnmoTmnaHku7ZcclxuXHRcdGlmICghbWUuaW5Ub3VjaGVuZCAmJiAhbWUuaXNEb3duU2Nyb2xsaW5nICYmICFtZS5vcHREb3duLmlzTG9jayAmJiAoIW1lLmlzVXBTY3JvbGxpbmcgfHwgKG1lLmlzVXBTY3JvbGxpbmcgJiZcclxuXHRcdFx0XHRtZS5vcHRVcC5pc0JvdGgpKSkge1xyXG5cclxuXHRcdFx0Ly8g5LiL5ouJ55qE6KeS5bqm5piv5ZCm5Zyo6YWN572u55qE6IyD5Zu05YaFXHJcblx0XHRcdGxldCBhbmdsZSA9IG1lLmdldEFuZ2xlKG1lLmxhc3RQb2ludCwgY3VyUG9pbnQpOyAvLyDkuKTngrnkuYvpl7TnmoTop5LluqYs5Yy66Ze0IFswLDkwXVxyXG5cdFx0XHRpZiAoYW5nbGUgPCBtZS5vcHREb3duLm1pbkFuZ2xlKSByZXR1cm47IC8vIOWmguaenOWwj+S6jumFjee9rueahOinkuW6pizliJnkuI3lvoDkuIvmiafooYzkuIvmi4nliLfmlrBcclxuXHJcblx0XHRcdC8vIOWmguaenOaJi+aMh+eahOS9jee9rui2hei/h+mFjee9rueahOi3neemuyzliJnmj5DliY3nu5PmnZ/kuIvmi4ks6YG/5YWNV2Vidmlld+W1jOWll+WvvOiHtHRvdWNoZW5k5peg5rOV6Kem5Y+RXHJcblx0XHRcdGlmIChtZS5tYXhUb3VjaG1vdmVZID4gMCAmJiBjdXJQb2ludC55ID49IG1lLm1heFRvdWNobW92ZVkpIHtcclxuXHRcdFx0XHRtZS5pblRvdWNoZW5kID0gdHJ1ZTsgLy8g5qCH6K6w5omn6KGMdG91Y2hlbmRcclxuXHRcdFx0XHRtZS50b3VjaGVuZEV2ZW50KCk7IC8vIOaPkOWJjeinpuWPkXRvdWNoZW5kXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cclxuXHJcblxyXG5cdFx0XHRtZS5wcmV2ZW50RGVmYXVsdChlKTsgLy8g6Zi75q2i6buY6K6k5LqL5Lu2XHJcblxyXG5cdFx0XHRsZXQgZGlmZiA9IGN1clBvaW50LnkgLSBtZS5sYXN0UG9pbnQueTsgLy8g5ZKM5LiK5qyh5q+ULOenu+WKqOeahOi3neemuyAo5aSn5LqOMOWQkeS4iyzlsI/kuo4w5ZCR5LiKKVxyXG5cclxuXHRcdFx0Ly8g5LiL5ouJ6Led56a7ICA8IOaMh+Wumui3neemu1xyXG5cdFx0XHRpZiAobWUuZG93bkhpZ2h0IDwgbWUub3B0RG93bi5vZmZzZXQpIHtcclxuXHRcdFx0XHRpZiAobWUubW92ZXR5cGUgIT09IDEpIHtcclxuXHRcdFx0XHRcdG1lLm1vdmV0eXBlID0gMTsgLy8g5Yqg5YWl5qCH6K6wLOS/neivgeWPquaJp+ihjOS4gOasoVxyXG5cdFx0XHRcdFx0bWUub3B0RG93bi5pbk9mZnNldCAmJiBtZS5vcHREb3duLmluT2Zmc2V0KG1lKTsgLy8g6L+b5YWl5oyH5a6a6Led56a76IyD5Zu05YaF6YKj5LiA5Yi755qE5Zue6LCDLOWPquaJp+ihjOS4gOasoVxyXG5cdFx0XHRcdFx0bWUuaXNNb3ZlRG93biA9IHRydWU7IC8vIOagh+iusOS4i+aLieWMuuWfn+mrmOW6puaUueWPmCzlnKh0b3VjaGVuZOmHjee9ruWbnuadpVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRtZS5kb3duSGlnaHQgKz0gZGlmZiAqIG1lLm9wdERvd24uaW5PZmZzZXRSYXRlOyAvLyDotorlvoDkuIss6auY5bqm5Y+Y5YyW6LaK5bCPXHJcblxyXG5cdFx0XHRcdC8vIOaMh+Wumui3neemuyAgPD0g5LiL5ouJ6Led56a7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKG1lLm1vdmV0eXBlICE9PSAyKSB7XHJcblx0XHRcdFx0XHRtZS5tb3ZldHlwZSA9IDI7IC8vIOWKoOWFpeagh+iusCzkv53or4Hlj6rmiafooYzkuIDmrKFcclxuXHRcdFx0XHRcdG1lLm9wdERvd24ub3V0T2Zmc2V0ICYmIG1lLm9wdERvd24ub3V0T2Zmc2V0KG1lKTsgLy8g5LiL5ouJ6LaF6L+H5oyH5a6a6Led56a76YKj5LiA5Yi755qE5Zue6LCDLOWPquaJp+ihjOS4gOasoVxyXG5cdFx0XHRcdFx0bWUuaXNNb3ZlRG93biA9IHRydWU7IC8vIOagh+iusOS4i+aLieWMuuWfn+mrmOW6puaUueWPmCzlnKh0b3VjaGVuZOmHjee9ruWbnuadpVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZGlmZiA+IDApIHsgLy8g5ZCR5LiL5ouJXHJcblx0XHRcdFx0XHRtZS5kb3duSGlnaHQgKz0gTWF0aC5yb3VuZChkaWZmICogbWUub3B0RG93bi5vdXRPZmZzZXRSYXRlKTsgLy8g6LaK5b6A5LiLLOmrmOW6puWPmOWMlui2iuWwj1xyXG5cdFx0XHRcdH0gZWxzZSB7IC8vIOWQkeS4iuaUtlxyXG5cdFx0XHRcdFx0bWUuZG93bkhpZ2h0ICs9IGRpZmY7IC8vIOWQkeS4iuaUtuWbnumrmOW6pizliJnlkJHkuIrmu5HlpJrlsJHmlLblpJrlsJHpq5jluqZcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxldCByYXRlID0gbWUuZG93bkhpZ2h0IC8gbWUub3B0RG93bi5vZmZzZXQ7IC8vIOS4i+aLieWMuuWfn+W9k+WJjemrmOW6puS4juaMh+Wumui3neemu+eahOavlOWAvFxyXG5cdFx0XHRtZS5vcHREb3duLm9uTW92aW5nICYmIG1lLm9wdERvd24ub25Nb3ZpbmcobWUsIHJhdGUsIG1lLmRvd25IaWdodCk7IC8vIOS4i+aLiei/h+eoi+S4reeahOWbnuiwgyzkuIDnm7TlnKjmiafooYxcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG1lLmxhc3RQb2ludCA9IGN1clBvaW50OyAvLyDorrDlvZXmnKzmrKHnp7vliqjnmoTngrlcclxufVxyXG5cclxuLyog5YiX6KGodG91Y2hlbmTkuovku7YgKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLnRvdWNoZW5kRXZlbnQgPSBmdW5jdGlvbihlKSB7XHJcblx0aWYgKCF0aGlzLm9wdERvd24udXNlKSByZXR1cm47XHJcblx0Ly8g5aaC5p6c5LiL5ouJ5Yy65Z+f6auY5bqm5bey5pS55Y+YLOWImemcgOmHjee9ruWbnuadpVxyXG5cdGlmICh0aGlzLmlzTW92ZURvd24pIHtcclxuXHRcdGlmICh0aGlzLmRvd25IaWdodCA+PSB0aGlzLm9wdERvd24ub2Zmc2V0KSB7XHJcblx0XHRcdC8vIOespuWQiOinpuWPkeWIt+aWsOeahOadoeS7tlxyXG5cdFx0XHR0aGlzLnRyaWdnZXJEb3duU2Nyb2xsKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyDkuI3nrKblkIjnmoTor50g5YiZ6YeN572uXHJcblx0XHRcdHRoaXMuZG93bkhpZ2h0ID0gMDtcclxuXHRcdFx0dGhpcy5vcHREb3duLmVuZERvd25TY3JvbGwgJiYgdGhpcy5vcHREb3duLmVuZERvd25TY3JvbGwodGhpcyk7XHJcblx0XHR9XHJcblx0XHR0aGlzLm1vdmV0eXBlID0gMDtcclxuXHRcdHRoaXMuaXNNb3ZlRG93biA9IGZhbHNlO1xyXG5cdH0gZWxzZSBpZiAoIXRoaXMuaXNTY3JvbGxCb2R5ICYmIHRoaXMuZ2V0U2Nyb2xsVG9wKCkgPT09IHRoaXMuc3RhcnRUb3ApIHsgLy8gc2Nyb2xsLXZpZXfliLDpobYv5bemL+WPsy/lupXnmoTmu5Hliqjkuovku7ZcclxuXHRcdGxldCBpc1Njcm9sbFVwID0gdGhpcy5nZXRQb2ludChlKS55IC0gdGhpcy5zdGFydFBvaW50LnkgPCAwOyAvLyDlkozotbfngrnmr5Qs56e75Yqo55qE6Led56a7LOWkp+S6jjDlkJHkuIvmi4ks5bCP5LqOMOWQkeS4iuaLiVxyXG5cdFx0Ly8g5LiK5ruRXHJcblx0XHRpZiAoaXNTY3JvbGxVcCkge1xyXG5cdFx0XHQvLyDpnIDmo4Dmn6Xmu5HliqjnmoTop5LluqZcclxuXHRcdFx0bGV0IGFuZ2xlID0gdGhpcy5nZXRBbmdsZSh0aGlzLmdldFBvaW50KGUpLCB0aGlzLnN0YXJ0UG9pbnQpOyAvLyDkuKTngrnkuYvpl7TnmoTop5LluqYs5Yy66Ze0IFswLDkwXVxyXG5cdFx0XHRpZiAoYW5nbGUgPiA4MCkge1xyXG5cdFx0XHRcdC8vIOajgOafpeW5tuinpuWPkeS4iuaLiVxyXG5cdFx0XHRcdHRoaXMudHJpZ2dlclVwU2Nyb2xsKHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vKiDmoLnmja7ngrnlh7vmu5Hliqjkuovku7bojrflj5bnrKzkuIDkuKrmiYvmjIfnmoTlnZDmoIcgKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLmdldFBvaW50ID0gZnVuY3Rpb24oZSkge1xyXG5cdGlmICghZSkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0eDogMCxcclxuXHRcdFx0eTogMFxyXG5cdFx0fVxyXG5cdH1cclxuXHRpZiAoZS50b3VjaGVzICYmIGUudG91Y2hlc1swXSkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0eDogZS50b3VjaGVzWzBdLnBhZ2VYLFxyXG5cdFx0XHR5OiBlLnRvdWNoZXNbMF0ucGFnZVlcclxuXHRcdH1cclxuXHR9IGVsc2UgaWYgKGUuY2hhbmdlZFRvdWNoZXMgJiYgZS5jaGFuZ2VkVG91Y2hlc1swXSkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0eDogZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCxcclxuXHRcdFx0eTogZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWVxyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR4OiBlLmNsaWVudFgsXHJcblx0XHRcdHk6IGUuY2xpZW50WVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLyog6K6h566X5Lik54K55LmL6Ze055qE6KeS5bqmOiDljLrpl7QgWzAsOTBdKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLmdldEFuZ2xlID0gZnVuY3Rpb24ocDEsIHAyKSB7XHJcblx0bGV0IHggPSBNYXRoLmFicyhwMS54IC0gcDIueCk7XHJcblx0bGV0IHkgPSBNYXRoLmFicyhwMS55IC0gcDIueSk7XHJcblx0bGV0IHogPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XHJcblx0bGV0IGFuZ2xlID0gMDtcclxuXHRpZiAoeiAhPT0gMCkge1xyXG5cdFx0YW5nbGUgPSBNYXRoLmFzaW4oeSAvIHopIC8gTWF0aC5QSSAqIDE4MDtcclxuXHR9XHJcblx0cmV0dXJuIGFuZ2xlXHJcbn1cclxuXHJcbi8qIOinpuWPkeS4i+aLieWIt+aWsCAqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUudHJpZ2dlckRvd25TY3JvbGwgPSBmdW5jdGlvbigpIHtcclxuXHRpZiAodGhpcy5vcHREb3duLmJlZm9yZUxvYWRpbmcgJiYgdGhpcy5vcHREb3duLmJlZm9yZUxvYWRpbmcodGhpcykpIHtcclxuXHRcdC8vcmV0dXJuIHRydWXliJnlpITkuo7lrozlhajoh6rlrprkuYnnirbmgIFcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhpcy5zaG93RG93blNjcm9sbCgpOyAvLyDkuIvmi4nliLfmlrDkuK0uLi5cclxuXHRcdHRoaXMub3B0RG93bi5jYWxsYmFjayAmJiB0aGlzLm9wdERvd24uY2FsbGJhY2sodGhpcyk7IC8vIOaJp+ihjOWbnuiwgyzogZTnvZHliqDovb3mlbDmja5cclxuXHR9XHJcbn1cclxuXHJcbi8qIOaYvuekuuS4i+aLiei/m+W6puW4g+WxgCAqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUuc2hvd0Rvd25TY3JvbGwgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmlzRG93blNjcm9sbGluZyA9IHRydWU7IC8vIOagh+iusOS4i+aLieS4rVxyXG5cdGlmICh0aGlzLm9wdERvd24ubmF0aXZlKSB7XHJcblx0XHR1bmkuc3RhcnRQdWxsRG93blJlZnJlc2goKTsgLy8g57O757uf6Ieq5bim55qE5LiL5ouJ5Yi35pawXHJcblx0XHR0aGlzLm9wdERvd24uc2hvd0xvYWRpbmcgJiYgdGhpcy5vcHREb3duLnNob3dMb2FkaW5nKHRoaXMsIDApOyAvLyDku43op6blj5FzaG93TG9hZGluZyzlm6DkuLrkuIrmi4nliqDovb3nlKjliLBcclxuXHR9IGVsc2V7XHJcblx0XHR0aGlzLmRvd25IaWdodCA9IHRoaXMub3B0RG93bi5vZmZzZXQ7IC8vIOabtOaWsOS4i+aLieWMuuWfn+mrmOW6plxyXG5cdFx0dGhpcy5vcHREb3duLnNob3dMb2FkaW5nICYmIHRoaXMub3B0RG93bi5zaG93TG9hZGluZyh0aGlzLCB0aGlzLmRvd25IaWdodCk7IC8vIOS4i+aLieWIt+aWsOS4rS4uLlxyXG5cdH1cclxufVxyXG5cclxuLyog5pi+56S657O757uf6Ieq5bim55qE5LiL5ouJ5Yi35paw5pe26ZyA6KaB5aSE55CG55qE5Lia5YqhICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5vblB1bGxEb3duUmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuaXNEb3duU2Nyb2xsaW5nID0gdHJ1ZTsgLy8g5qCH6K6w5LiL5ouJ5LitXHJcblx0dGhpcy5vcHREb3duLnNob3dMb2FkaW5nICYmIHRoaXMub3B0RG93bi5zaG93TG9hZGluZyh0aGlzLCAwKTsgLy8g5LuN6Kem5Y+Rc2hvd0xvYWRpbmcs5Zug5Li65LiK5ouJ5Yqg6L2955So5YiwXHJcblx0dGhpcy5vcHREb3duLmNhbGxiYWNrICYmIHRoaXMub3B0RG93bi5jYWxsYmFjayh0aGlzKTsgLy8g5omn6KGM5Zue6LCDLOiBlOe9keWKoOi9veaVsOaNrlxyXG59XHJcblxyXG4vKiDnu5PmnZ/kuIvmi4nliLfmlrAgKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLmVuZERvd25TY3JvbGwgPSBmdW5jdGlvbigpIHtcclxuXHRpZiAodGhpcy5vcHREb3duLm5hdGl2ZSkgeyAvLyDnu5PmnZ/ljp/nlJ/kuIvmi4nliLfmlrBcclxuXHRcdHRoaXMuaXNEb3duU2Nyb2xsaW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLm9wdERvd24uZW5kRG93blNjcm9sbCAmJiB0aGlzLm9wdERvd24uZW5kRG93blNjcm9sbCh0aGlzKTtcclxuXHRcdHVuaS5zdG9wUHVsbERvd25SZWZyZXNoKCk7XHJcblx0XHRyZXR1cm5cclxuXHR9XHJcblx0bGV0IG1lID0gdGhpcztcclxuXHQvLyDnu5PmnZ/kuIvmi4nliLfmlrDnmoTmlrnms5VcclxuXHRsZXQgZW5kU2Nyb2xsID0gZnVuY3Rpb24oKSB7XHJcblx0XHRtZS5kb3duSGlnaHQgPSAwO1xyXG5cdFx0bWUuaXNEb3duU2Nyb2xsaW5nID0gZmFsc2U7XHJcblx0XHRtZS5vcHREb3duLmVuZERvd25TY3JvbGwgJiYgbWUub3B0RG93bi5lbmREb3duU2Nyb2xsKG1lKTtcclxuXHRcdCFtZS5pc1Njcm9sbEJvZHkgJiYgbWUuc2V0U2Nyb2xsSGVpZ2h0KDApIC8vIHNjcm9sbC12aWV36YeN572u5rua5Yqo5Yy65Z+fLOS9v+aVsOaNruS4jea7oeWxj+aXtuS7jeWPr+ajgOafpeinpuWPkee/u+mhtVxyXG5cdH1cclxuXHQvLyDnu5PmnZ/kuIvmi4nliLfmlrDml7bnmoTlm57osINcclxuXHRsZXQgZGVsYXkgPSAwO1xyXG5cdGlmIChtZS5vcHREb3duLmFmdGVyTG9hZGluZykgZGVsYXkgPSBtZS5vcHREb3duLmFmdGVyTG9hZGluZyhtZSk7IC8vIOe7k+adn+S4i+aLieWIt+aWsOeahOW7tuaXtizljZXkvY1tc1xyXG5cdGlmICh0eXBlb2YgZGVsYXkgPT09ICdudW1iZXInICYmIGRlbGF5ID4gMCkge1xyXG5cdFx0c2V0VGltZW91dChlbmRTY3JvbGwsIGRlbGF5KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZW5kU2Nyb2xsKCk7XHJcblx0fVxyXG59XHJcblxyXG4vKiDplIHlrprkuIvmi4nliLfmlrA6aXNMb2NrPXR1cmUsbnVsbOmUgeWumjtpc0xvY2s9ZmFsc2Xop6PplIEgKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLmxvY2tEb3duU2Nyb2xsID0gZnVuY3Rpb24oaXNMb2NrKSB7XHJcblx0aWYgKGlzTG9jayA9PSBudWxsKSBpc0xvY2sgPSB0cnVlO1xyXG5cdHRoaXMub3B0RG93bi5pc0xvY2sgPSBpc0xvY2s7XHJcbn1cclxuXHJcbi8qIOmUgeWumuS4iuaLieWKoOi9vTppc0xvY2s9dHVyZSxudWxs6ZSB5a6aO2lzTG9jaz1mYWxzZeino+mUgSAqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUubG9ja1VwU2Nyb2xsID0gZnVuY3Rpb24oaXNMb2NrKSB7XHJcblx0aWYgKGlzTG9jayA9PSBudWxsKSBpc0xvY2sgPSB0cnVlO1xyXG5cdHRoaXMub3B0VXAuaXNMb2NrID0gaXNMb2NrO1xyXG59XHJcblxyXG4vKiAtLS0tLS0t5Yid5aeL5YyW5LiK5ouJ5Yqg6L29LS0tLS0tLSAqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUuaW5pdFVwU2Nyb2xsID0gZnVuY3Rpb24oKSB7XHJcblx0bGV0IG1lID0gdGhpcztcclxuXHQvLyDphY3nva7lj4LmlbBcclxuXHRtZS5vcHRVcCA9IG1lLm9wdGlvbnMudXAgfHwge3VzZTogZmFsc2V9XHJcblx0aWYoIW1lLm9wdFVwLnRleHRDb2xvciAmJiBtZS5oYXNDb2xvcihtZS5vcHRVcC5iZ0NvbG9yKSkgbWUub3B0VXAudGV4dENvbG9yID0gXCIjZmZmXCI7IC8vIOW9k2JnQ29sb3LmnInlgLzkuJR0ZXh0Q29sb3LmnKrorr7nva4s5YiZdGV4dENvbG9y6buY6K6k55m96ImyXHJcblx0bWUuZXh0ZW5kVXBTY3JvbGwobWUub3B0VXApO1xyXG5cclxuXHRpZiAoIW1lLm9wdFVwLmlzQm91bmNlKSBtZS5zZXRCb3VuY2UoZmFsc2UpOyAvLyDkuI3lhYHorrhib3VuY2Xml7Ys6ZyA56aB5q2id2luZG9355qEdG91Y2htb3Zl5LqL5Lu2XHJcblxyXG5cdGlmIChtZS5vcHRVcC51c2UgPT09IGZhbHNlKSByZXR1cm47IC8vIOmFjee9ruS4jeS9v+eUqOS4iuaLieWKoOi9veaXtizliJnkuI3liJ3lp4vljJbkuIrmi4nluIPlsYBcclxuXHRtZS5vcHRVcC5oYXNOZXh0ID0gdHJ1ZTsgLy8g5aaC5p6c5L2/55So5LiK5ouJLOWImem7mOiupOacieS4i+S4gOmhtVxyXG5cdG1lLnN0YXJ0TnVtID0gbWUub3B0VXAucGFnZS5udW0gKyAxOyAvLyDorrDlvZVwYWdl5byA5aeL55qE6aG156CBXHJcblxyXG5cdC8vIOWIneWni+WMluWujOavleeahOWbnuiwg1xyXG5cdGlmIChtZS5vcHRVcC5pbml0ZWQpIHtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IC8vIOW+heS4u+e6v+eoi+aJp+ihjOWujOavleWGjeaJp+ihjCzpgb/lhY1uZXcgTWVTY3JvbGzmnKrliJ3lp4vljJYs5Zyo5Zue6LCD6I635Y+W5LiN5YiwbWVzY3JvbGznmoTlrp7kvotcclxuXHRcdFx0bWUub3B0VXAuaW5pdGVkKG1lKTtcclxuXHRcdH0sIDApXHJcblx0fVxyXG59XHJcblxyXG4vKua7muWKqOWIsOW6lemDqOeahOS6i+S7tiAo5LuFbWVzY3JvbGwtYm9keeeUn+aViCkqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUub25SZWFjaEJvdHRvbSA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmICh0aGlzLmlzU2Nyb2xsQm9keSAmJiAhdGhpcy5pc1VwU2Nyb2xsaW5nKSB7IC8vIOWPquiDveaUr+aMgeS4i+aLieWIt+aWsOeahOaXtuWAmeWQjOaXtuWPr+S7peinpuWPkeS4iuaLieWKoOi9vSzlkKbliJnmu5rliqjliLDlupXpg6jlsLHpnIDopoHkuIrmu5HkuIDngrnmiY3og73op6blj5FvblJlYWNoQm90dG9tXHJcblx0XHRpZiAoIXRoaXMub3B0VXAuaXNMb2NrICYmIHRoaXMub3B0VXAuaGFzTmV4dCkge1xyXG5cdFx0XHR0aGlzLnRyaWdnZXJVcFNjcm9sbCgpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLyrliJfooajmu5rliqjkuovku7YgKOS7hW1lc2Nyb2xsLWJvZHnnlJ/mlYgpKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLm9uUGFnZVNjcm9sbCA9IGZ1bmN0aW9uKGUpIHtcclxuXHRpZiAoIXRoaXMuaXNTY3JvbGxCb2R5KSByZXR1cm47XHJcblx0XHJcblx0Ly8g5pu05paw5rua5Yqo5p2h55qE5L2N572uICjkuLvopoHnlKjkuo7liKTmlq3kuIvmi4nliLfmlrDml7Ys5rua5Yqo5p2h5piv5ZCm5Zyo6aG26YOoKVxyXG5cdHRoaXMuc2V0U2Nyb2xsVG9wKGUuc2Nyb2xsVG9wKTtcclxuXHJcblx0Ly8g6aG26YOo5oyJ6ZKu55qE5pi+56S66ZqQ6JePXHJcblx0aWYgKGUuc2Nyb2xsVG9wID49IHRoaXMub3B0VXAudG9Ub3Aub2Zmc2V0KSB7XHJcblx0XHR0aGlzLnNob3dUb3BCdG4oKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhpcy5oaWRlVG9wQnRuKCk7XHJcblx0fVxyXG59XHJcblxyXG4vKuWIl+ihqOa7muWKqOS6i+S7tiovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5zY3JvbGwgPSBmdW5jdGlvbihlLCBvblNjcm9sbCkge1xyXG5cdC8vIOabtOaWsOa7muWKqOadoeeahOS9jee9rlxyXG5cdHRoaXMuc2V0U2Nyb2xsVG9wKGUuc2Nyb2xsVG9wKTtcclxuXHQvLyDmm7TmlrDmu5rliqjlhoXlrrnpq5jluqZcclxuXHR0aGlzLnNldFNjcm9sbEhlaWdodChlLnNjcm9sbEhlaWdodCk7XHJcblxyXG5cdC8vIOWQkeS4iua7kei/mOaYr+WQkeS4i+a7keWKqFxyXG5cdGlmICh0aGlzLnByZVNjcm9sbFkgPT0gbnVsbCkgdGhpcy5wcmVTY3JvbGxZID0gMDtcclxuXHR0aGlzLmlzU2Nyb2xsVXAgPSBlLnNjcm9sbFRvcCAtIHRoaXMucHJlU2Nyb2xsWSA+IDA7XHJcblx0dGhpcy5wcmVTY3JvbGxZID0gZS5zY3JvbGxUb3A7XHJcblxyXG5cdC8vIOS4iua7kSAmJiDmo4Dmn6Xlubbop6blj5HkuIrmi4lcclxuXHR0aGlzLmlzU2Nyb2xsVXAgJiYgdGhpcy50cmlnZ2VyVXBTY3JvbGwodHJ1ZSk7XHJcblxyXG5cdC8vIOmhtumDqOaMiemSrueahOaYvuekuumakOiXj1xyXG5cdGlmIChlLnNjcm9sbFRvcCA+PSB0aGlzLm9wdFVwLnRvVG9wLm9mZnNldCkge1xyXG5cdFx0dGhpcy5zaG93VG9wQnRuKCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRoaXMuaGlkZVRvcEJ0bigpO1xyXG5cdH1cclxuXHJcblx0Ly8g5ruR5Yqo55uR5ZCsXHJcblx0dGhpcy5vcHRVcC5vblNjcm9sbCAmJiBvblNjcm9sbCAmJiBvblNjcm9sbCgpXHJcbn1cclxuXHJcbi8qIOinpuWPkeS4iuaLieWKoOi9vSAqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUudHJpZ2dlclVwU2Nyb2xsID0gZnVuY3Rpb24oaXNDaGVjaykge1xyXG5cdGlmICghdGhpcy5pc1VwU2Nyb2xsaW5nICYmIHRoaXMub3B0VXAudXNlICYmIHRoaXMub3B0VXAuY2FsbGJhY2spIHtcclxuXHRcdC8vIOaYr+WQpuagoemqjOWcqOW6lemDqDsg6buY6K6k5LiN5qCh6aqMXHJcblx0XHRpZiAoaXNDaGVjayA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRsZXQgY2FuVXAgPSBmYWxzZTtcclxuXHRcdFx0Ly8g6L+Y5pyJ5LiL5LiA6aG1ICYmIOayoeaciemUgeWumiAmJiDkuI3lnKjkuIvmi4nkuK1cclxuXHRcdFx0aWYgKHRoaXMub3B0VXAuaGFzTmV4dCAmJiAhdGhpcy5vcHRVcC5pc0xvY2sgJiYgIXRoaXMuaXNEb3duU2Nyb2xsaW5nKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuZ2V0U2Nyb2xsQm90dG9tKCkgPD0gdGhpcy5vcHRVcC5vZmZzZXQpIHsgLy8g5Yiw5bqV6YOoXHJcblx0XHRcdFx0XHRjYW5VcCA9IHRydWU7IC8vIOagh+iusOWPr+S4iuaLiVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoY2FuVXAgPT09IGZhbHNlKSByZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLnNob3dVcFNjcm9sbCgpOyAvLyDkuIrmi4nliqDovb3kuK0uLi5cclxuXHRcdHRoaXMub3B0VXAucGFnZS5udW0rKzsgLy8g6aKE5YWI5Yqg5LiA6aG1LOWmguaenOWksei0peWImeWHj+WbnlxyXG5cdFx0dGhpcy5pc1VwQXV0b0xvYWQgPSB0cnVlOyAvLyDmoIforrDkuIrmi4nlt7Lnu4/oh6rliqjmiafooYzov4cs6YG/5YWN5Yid5aeL5YyW5pe25aSa5qyh6Kem5Y+R5LiK5ouJ5Zue6LCDXHJcblx0XHR0aGlzLm51bSA9IHRoaXMub3B0VXAucGFnZS5udW07IC8vIOaKiuacgOaWsOeahOmhteaVsOi1i+WAvOWcqG1lc2Nyb2xs5LiKLOmBv+WFjeWvuXBhZ2XnmoTlvbHlk41cclxuXHRcdHRoaXMuc2l6ZSA9IHRoaXMub3B0VXAucGFnZS5zaXplOyAvLyDmiormnIDmlrDnmoTpobXnoIHotYvlgLzlnKhtZXNjcm9sbOS4iizpgb/lhY3lr7lwYWdl55qE5b2x5ZONXHJcblx0XHR0aGlzLnRpbWUgPSB0aGlzLm9wdFVwLnBhZ2UudGltZTsgLy8g5oqK5pyA5paw55qE6aG156CB6LWL5YC85ZyobWVzY3JvbGzkuIos6YG/5YWN5a+5cGFnZeeahOW9seWTjVxyXG5cdFx0dGhpcy5vcHRVcC5jYWxsYmFjayh0aGlzKTsgLy8g5omn6KGM5Zue6LCDLOiBlOe9keWKoOi9veaVsOaNrlxyXG5cdH1cclxufVxyXG5cclxuLyog5pi+56S65LiK5ouJ5Yqg6L295LitICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5zaG93VXBTY3JvbGwgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmlzVXBTY3JvbGxpbmcgPSB0cnVlOyAvLyDmoIforrDkuIrmi4nliqDovb3kuK1cclxuXHR0aGlzLm9wdFVwLnNob3dMb2FkaW5nICYmIHRoaXMub3B0VXAuc2hvd0xvYWRpbmcodGhpcyk7IC8vIOWbnuiwg1xyXG59XHJcblxyXG4vKiDmmL7npLrkuIrmi4nml6Dmm7TlpJrmlbDmja4gKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLnNob3dOb01vcmUgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLm9wdFVwLmhhc05leHQgPSBmYWxzZTsgLy8g5qCH6K6w5peg5pu05aSa5pWw5o2uXHJcblx0dGhpcy5vcHRVcC5zaG93Tm9Nb3JlICYmIHRoaXMub3B0VXAuc2hvd05vTW9yZSh0aGlzKTsgLy8g5Zue6LCDXHJcbn1cclxuXHJcbi8qIOmakOiXj+S4iuaLieWMuuWfnyoqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUuaGlkZVVwU2Nyb2xsID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5vcHRVcC5oaWRlVXBTY3JvbGwgJiYgdGhpcy5vcHRVcC5oaWRlVXBTY3JvbGwodGhpcyk7IC8vIOWbnuiwg1xyXG59XHJcblxyXG4vKiDnu5PmnZ/kuIrmi4nliqDovb0gKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLmVuZFVwU2Nyb2xsID0gZnVuY3Rpb24oaXNTaG93Tm9Nb3JlKSB7XHJcblx0aWYgKGlzU2hvd05vTW9yZSAhPSBudWxsKSB7IC8vIGlzU2hvd05vTW9yZT1udWxsLOS4jeWkhOeQhuS4i+aLieeKtuaAgSzkuIvmi4nliLfmlrDnmoTml7blgJnosIPnlKhcclxuXHRcdGlmIChpc1Nob3dOb01vcmUpIHtcclxuXHRcdFx0dGhpcy5zaG93Tm9Nb3JlKCk7IC8vIGlzU2hvd05vTW9yZT10cnVlLOaYvuekuuaXoOabtOWkmuaVsOaNrlxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5oaWRlVXBTY3JvbGwoKTsgLy8gaXNTaG93Tm9Nb3JlPWZhbHNlLOmakOiXj+S4iuaLieWKoOi9vVxyXG5cdFx0fVxyXG5cdH1cclxuXHR0aGlzLmlzVXBTY3JvbGxpbmcgPSBmYWxzZTsgLy8g5qCH6K6w57uT5p2f5LiK5ouJ5Yqg6L29XHJcbn1cclxuXHJcbi8qIOmHjee9ruS4iuaLieWKoOi9veWIl+ihqOS4uuesrOS4gOmhtVxyXG4gKmlzU2hvd0xvYWRpbmcg5piv5ZCm5pi+56S66L+b5bqm5biD5bGAO1xyXG4gKiAxLum7mOiupG51bGws5LiN5Lyg5Y+CLOWImeaYvuekuuS4iuaLieWKoOi9veeahOi/m+W6puW4g+WxgFxyXG4gKiAyLuS8oOWPgnRydWUsIOWImeaYvuekuuS4i+aLieWIt+aWsOeahOi/m+W6puW4g+WxgFxyXG4gKiAzLuS8oOWPgmZhbHNlLOWImeS4jeaYvuekuuS4iuaLieWSjOS4i+aLieeahOi/m+W6piAo5bi455So5LqO6Z2Z6buY5pu05paw5YiX6KGo5pWw5o2uKVxyXG4gKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLnJlc2V0VXBTY3JvbGwgPSBmdW5jdGlvbihpc1Nob3dMb2FkaW5nKSB7XHJcblx0aWYgKHRoaXMub3B0VXAgJiYgdGhpcy5vcHRVcC51c2UpIHtcclxuXHRcdGxldCBwYWdlID0gdGhpcy5vcHRVcC5wYWdlO1xyXG5cdFx0dGhpcy5wcmVQYWdlTnVtID0gcGFnZS5udW07IC8vIOe8k+WtmOmHjee9ruWJjeeahOmhteeggSzliqDovb3lpLHotKXlj6/pgIDlm55cclxuXHRcdHRoaXMucHJlUGFnZVRpbWUgPSBwYWdlLnRpbWU7IC8vIOe8k+WtmOmHjee9ruWJjeeahOaXtumXtCzliqDovb3lpLHotKXlj6/pgIDlm55cclxuXHRcdHBhZ2UubnVtID0gdGhpcy5zdGFydE51bTsgLy8g6YeN572u5Li656ys5LiA6aG1XHJcblx0XHRwYWdlLnRpbWUgPSBudWxsOyAvLyDph43nva7ml7bpl7TkuLrnqbpcclxuXHRcdGlmICghdGhpcy5pc0Rvd25TY3JvbGxpbmcgJiYgaXNTaG93TG9hZGluZyAhPT0gZmFsc2UpIHsgLy8g5aaC5p6c5LiN5piv5LiL5ouJ5Yi35paw6Kem5Y+R55qEcmVzZXRVcFNjcm9sbOW5tuS4lOS4jemFjee9ruWIl+ihqOmdmem7mOabtOaWsCzliJnmmL7npLrov5vluqY7XHJcblx0XHRcdGlmIChpc1Nob3dMb2FkaW5nID09IG51bGwpIHtcclxuXHRcdFx0XHR0aGlzLnJlbW92ZUVtcHR5KCk7IC8vIOenu+mZpOepuuW4g+WxgFxyXG5cdFx0XHRcdHRoaXMuc2hvd1VwU2Nyb2xsKCk7IC8vIOS4jeS8oOWPgizpu5jorqTmmL7npLrkuIrmi4nliqDovb3nmoTov5vluqbluIPlsYBcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnNob3dEb3duU2Nyb2xsKCk7IC8vIOS8oHRydWUs5pi+56S65LiL5ouJ5Yi35paw55qE6L+b5bqm5biD5bGALOS4jea4heepuuWIl+ihqFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR0aGlzLmlzVXBBdXRvTG9hZCA9IHRydWU7IC8vIOagh+iusOS4iuaLieW3sue7j+iHquWKqOaJp+ihjOi/hyzpgb/lhY3liJ3lp4vljJbml7blpJrmrKHop6blj5HkuIrmi4nlm57osINcclxuXHRcdHRoaXMubnVtID0gcGFnZS5udW07IC8vIOaKiuacgOaWsOeahOmhteaVsOi1i+WAvOWcqG1lc2Nyb2xs5LiKLOmBv+WFjeWvuXBhZ2XnmoTlvbHlk41cclxuXHRcdHRoaXMuc2l6ZSA9IHBhZ2Uuc2l6ZTsgLy8g5oqK5pyA5paw55qE6aG156CB6LWL5YC85ZyobWVzY3JvbGzkuIos6YG/5YWN5a+5cGFnZeeahOW9seWTjVxyXG5cdFx0dGhpcy50aW1lID0gcGFnZS50aW1lOyAvLyDmiormnIDmlrDnmoTpobXnoIHotYvlgLzlnKhtZXNjcm9sbOS4iizpgb/lhY3lr7lwYWdl55qE5b2x5ZONXHJcblx0XHR0aGlzLm9wdFVwLmNhbGxiYWNrICYmIHRoaXMub3B0VXAuY2FsbGJhY2sodGhpcyk7IC8vIOaJp+ihjOS4iuaLieWbnuiwg1xyXG5cdH1cclxufVxyXG5cclxuLyog6K6+572ucGFnZS5udW3nmoTlgLwgKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLnNldFBhZ2VOdW0gPSBmdW5jdGlvbihudW0pIHtcclxuXHR0aGlzLm9wdFVwLnBhZ2UubnVtID0gbnVtIC0gMTtcclxufVxyXG5cclxuLyog6K6+572ucGFnZS5zaXpl55qE5YC8ICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5zZXRQYWdlU2l6ZSA9IGZ1bmN0aW9uKHNpemUpIHtcclxuXHR0aGlzLm9wdFVwLnBhZ2Uuc2l6ZSA9IHNpemU7XHJcbn1cclxuXHJcbi8qIOiBlOe9keWbnuiwg+aIkOWKnyznu5PmnZ/kuIvmi4nliLfmlrDlkozkuIrmi4nliqDovb1cclxuICogZGF0YVNpemU6IOW9k+WJjemhteeahOaVsOaNrumHjyjlv4XkvKApXHJcbiAqIHRvdGFsUGFnZTog5oC76aG15pWwKOW/heS8oClcclxuICogc3lzdGltZTog5pyN5Yqh5Zmo5pe26Ze0ICjlj6/nqbopXHJcbiAqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUuZW5kQnlQYWdlID0gZnVuY3Rpb24oZGF0YVNpemUsIHRvdGFsUGFnZSwgc3lzdGltZSkge1xyXG5cdGxldCBoYXNOZXh0O1xyXG5cdGlmICh0aGlzLm9wdFVwLnVzZSAmJiB0b3RhbFBhZ2UgIT0gbnVsbCkgaGFzTmV4dCA9IHRoaXMub3B0VXAucGFnZS5udW0gPCB0b3RhbFBhZ2U7IC8vIOaYr+WQpui/mOacieS4i+S4gOmhtVxyXG5cdHRoaXMuZW5kU3VjY2VzcyhkYXRhU2l6ZSwgaGFzTmV4dCwgc3lzdGltZSk7XHJcbn1cclxuXHJcbi8qIOiBlOe9keWbnuiwg+aIkOWKnyznu5PmnZ/kuIvmi4nliLfmlrDlkozkuIrmi4nliqDovb1cclxuICogZGF0YVNpemU6IOW9k+WJjemhteeahOaVsOaNrumHjyjlv4XkvKApXHJcbiAqIHRvdGFsU2l6ZTog5YiX6KGo5omA5pyJ5pWw5o2u5oC75pWw6YePKOW/heS8oClcclxuICogc3lzdGltZTog5pyN5Yqh5Zmo5pe26Ze0ICjlj6/nqbopXHJcbiAqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUuZW5kQnlTaXplID0gZnVuY3Rpb24oZGF0YVNpemUsIHRvdGFsU2l6ZSwgc3lzdGltZSkge1xyXG5cdGxldCBoYXNOZXh0O1xyXG5cdGlmICh0aGlzLm9wdFVwLnVzZSAmJiB0b3RhbFNpemUgIT0gbnVsbCkge1xyXG5cdFx0bGV0IGxvYWRTaXplID0gKHRoaXMub3B0VXAucGFnZS5udW0gLSAxKSAqIHRoaXMub3B0VXAucGFnZS5zaXplICsgZGF0YVNpemU7IC8vIOW3suWKoOi9veeahOaVsOaNruaAu+aVsFxyXG5cdFx0aGFzTmV4dCA9IGxvYWRTaXplIDwgdG90YWxTaXplOyAvLyDmmK/lkKbov5jmnInkuIvkuIDpobVcclxuXHR9XHJcblx0dGhpcy5lbmRTdWNjZXNzKGRhdGFTaXplLCBoYXNOZXh0LCBzeXN0aW1lKTtcclxufVxyXG5cclxuLyog6IGU572R5Zue6LCD5oiQ5YqfLOe7k+adn+S4i+aLieWIt+aWsOWSjOS4iuaLieWKoOi9vVxyXG4gKiBkYXRhU2l6ZTog5b2T5YmN6aG155qE5pWw5o2u5Liq5pWwKOS4jeaYr+aJgOaciemhteeahOaVsOaNruaAu+WSjCks55So5LqO5LiK5ouJ5Yqg6L295Yik5pat5piv5ZCm6L+Y5pyJ5LiL5LiA6aG1LuWmguaenOS4jeS8oCzliJnkvJrliKTmlq3ov5jmnInkuIvkuIDpobVcclxuICogaGFzTmV4dDog5piv5ZCm6L+Y5pyJ5LiL5LiA6aG1LOW4g+WwlOexu+WeizvnlKjmnaXop6PlhrPov5nkuKrlsI/pl67popg65q+U5aaC5YiX6KGo5YWx5pyJMjDmnaHmlbDmja4s5q+P6aG15Yqg6L29MTDmnaEs5YWxMumhtS7lpoLmnpzlj6rmoLnmja5kYXRhU2l6ZeWIpOaWrSzliJnpnIDnv7vliLDnrKzkuInpobXmiY3kvJrnn6XpgZPml6Dmm7TlpJrmlbDmja4s5aaC5p6c5Lyg5LqGaGFzTmV4dCzliJnnv7vliLDnrKzkuozpobXljbPlj6/mmL7npLrml6Dmm7TlpJrmlbDmja4uXHJcbiAqIHN5c3RpbWU6IOacjeWKoeWZqOaXtumXtCjlj6/nqbopO+eUqOadpeino+WGs+i/meS4quWwj+mXrumimDrlvZPlh4blpIfnv7vkuIvkuIDpobXml7Ys5pWw5o2u5bqT5paw5aKe5LqG5Yeg5p2h6K6w5b2VLOatpOaXtue/u+S4i+S4gOmhtSzliY3pnaLnmoTlh6DmnaHmlbDmja7kvJrlkozkuIrkuIDpobXnmoTph43lpI076L+Z6YeM5Lyg5YWl5LqGc3lzdGltZSzpgqPkuYh1cENhbGxiYWNr55qEcGFnZS50aW1l5bCx5Lya5pyJ5YC8LOaKinBhZ2UudGltZeS8oOe7meacjeWKoeWZqCzorqnlkI7lj7Dov4fmu6TmlrDliqDlhaXnmoTpgqPlh6DmnaHorrDlvZVcclxuICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5lbmRTdWNjZXNzID0gZnVuY3Rpb24oZGF0YVNpemUsIGhhc05leHQsIHN5c3RpbWUpIHtcclxuXHRsZXQgbWUgPSB0aGlzO1xyXG5cdC8vIOe7k+adn+S4i+aLieWIt+aWsFxyXG5cdGlmIChtZS5pc0Rvd25TY3JvbGxpbmcpIG1lLmVuZERvd25TY3JvbGwoKTtcclxuXHJcblx0Ly8g57uT5p2f5LiK5ouJ5Yqg6L29XHJcblx0aWYgKG1lLm9wdFVwLnVzZSkge1xyXG5cdFx0bGV0IGlzU2hvd05vTW9yZTsgLy8g5piv5ZCm5bey5peg5pu05aSa5pWw5o2uXHJcblx0XHRpZiAoZGF0YVNpemUgIT0gbnVsbCkge1xyXG5cdFx0XHRsZXQgcGFnZU51bSA9IG1lLm9wdFVwLnBhZ2UubnVtOyAvLyDlvZPliY3pobXnoIFcclxuXHRcdFx0bGV0IHBhZ2VTaXplID0gbWUub3B0VXAucGFnZS5zaXplOyAvLyDmr4/pobXplb/luqZcclxuXHRcdFx0Ly8g5aaC5p6c5piv56ys5LiA6aG1XHJcblx0XHRcdGlmIChwYWdlTnVtID09PSAxKSB7XHJcblx0XHRcdFx0aWYgKHN5c3RpbWUpIG1lLm9wdFVwLnBhZ2UudGltZSA9IHN5c3RpbWU7IC8vIOiuvue9ruWKoOi9veWIl+ihqOaVsOaNruesrOS4gOmhteeahOaXtumXtFxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkYXRhU2l6ZSA8IHBhZ2VTaXplIHx8IGhhc05leHQgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0Ly8g6L+U5Zue55qE5pWw5o2u5LiN5ruh5LiA6aG15pe2LOWImeivtOaYjuW3suaXoOabtOWkmuaVsOaNrlxyXG5cdFx0XHRcdG1lLm9wdFVwLmhhc05leHQgPSBmYWxzZTtcclxuXHRcdFx0XHRpZiAoZGF0YVNpemUgPT09IDAgJiYgcGFnZU51bSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0Ly8g5aaC5p6c56ys5LiA6aG15peg5Lu75L2V5pWw5o2u5LiU6YWN572u5LqG56m65biD5bGAXHJcblx0XHRcdFx0XHRpc1Nob3dOb01vcmUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdG1lLnNob3dFbXB0eSgpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyDmgLvliJfooajmlbDlsJHkuo7phY3nva7nmoTmlbDph48s5YiZ5LiN5pi+56S65peg5pu05aSa5pWw5o2uXHJcblx0XHRcdFx0XHRsZXQgYWxsRGF0YVNpemUgPSAocGFnZU51bSAtIDEpICogcGFnZVNpemUgKyBkYXRhU2l6ZTtcclxuXHRcdFx0XHRcdGlmIChhbGxEYXRhU2l6ZSA8IG1lLm9wdFVwLm5vTW9yZVNpemUpIHtcclxuXHRcdFx0XHRcdFx0aXNTaG93Tm9Nb3JlID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRpc1Nob3dOb01vcmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bWUucmVtb3ZlRW1wdHkoKTsgLy8g56e76Zmk56m65biD5bGAXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIOi/mOacieS4i+S4gOmhtVxyXG5cdFx0XHRcdGlzU2hvd05vTW9yZSA9IGZhbHNlO1xyXG5cdFx0XHRcdG1lLm9wdFVwLmhhc05leHQgPSB0cnVlO1xyXG5cdFx0XHRcdG1lLnJlbW92ZUVtcHR5KCk7IC8vIOenu+mZpOepuuW4g+WxgFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8g6ZqQ6JeP5LiK5ouJXHJcblx0XHRtZS5lbmRVcFNjcm9sbChpc1Nob3dOb01vcmUpO1xyXG5cdH1cclxufVxyXG5cclxuLyog5Zue6LCD5aSx6LSlLOe7k+adn+S4i+aLieWIt+aWsOWSjOS4iuaLieWKoOi9vSAqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUuZW5kRXJyID0gZnVuY3Rpb24oZXJyRGlzdGFuY2UpIHtcclxuXHQvLyDnu5PmnZ/kuIvmi4ks5Zue6LCD5aSx6LSl6YeN572u5Zue5Y6f5p2l55qE6aG156CB5ZKM5pe26Ze0XHJcblx0aWYgKHRoaXMuaXNEb3duU2Nyb2xsaW5nKSB7XHJcblx0XHRsZXQgcGFnZSA9IHRoaXMub3B0VXAucGFnZTtcclxuXHRcdGlmIChwYWdlICYmIHRoaXMucHJlUGFnZU51bSkge1xyXG5cdFx0XHRwYWdlLm51bSA9IHRoaXMucHJlUGFnZU51bTtcclxuXHRcdFx0cGFnZS50aW1lID0gdGhpcy5wcmVQYWdlVGltZTtcclxuXHRcdH1cclxuXHRcdHRoaXMuZW5kRG93blNjcm9sbCgpO1xyXG5cdH1cclxuXHQvLyDnu5PmnZ/kuIrmi4ks5Zue6LCD5aSx6LSl6YeN572u5Zue5Y6f5p2l55qE6aG156CBXHJcblx0aWYgKHRoaXMuaXNVcFNjcm9sbGluZykge1xyXG5cdFx0dGhpcy5vcHRVcC5wYWdlLm51bS0tO1xyXG5cdFx0dGhpcy5lbmRVcFNjcm9sbChmYWxzZSk7XHJcblx0XHQvLyDlpoLmnpzmmK9tZXNjcm9sbC1ib2R5LOWImemcgOW+gOWbnua7muS4gOWumui3neemu1xyXG5cdFx0aWYodGhpcy5pc1Njcm9sbEJvZHkgJiYgZXJyRGlzdGFuY2UgIT09IDApeyAvLyDkuI3lpITnkIYwXHJcblx0XHRcdGlmKCFlcnJEaXN0YW5jZSkgZXJyRGlzdGFuY2UgPSB0aGlzLm9wdFVwLmVyckRpc3RhbmNlOyAvLyDkuI3kvKAs5YiZ5Y+W6buY6K6kXHJcblx0XHRcdHRoaXMuc2Nyb2xsVG8odGhpcy5nZXRTY3JvbGxUb3AoKSAtIGVyckRpc3RhbmNlLCAwKSAvLyDlvoDkuIrlm57mu5rnmoTot53nprtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8qIOaYvuekuuepuuW4g+WxgCAqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUuc2hvd0VtcHR5ID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5vcHRVcC5lbXB0eS51c2UgJiYgdGhpcy5vcHRVcC5lbXB0eS5vblNob3cgJiYgdGhpcy5vcHRVcC5lbXB0eS5vblNob3codHJ1ZSlcclxufVxyXG5cclxuLyog56e76Zmk56m65biD5bGAICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5yZW1vdmVFbXB0eSA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMub3B0VXAuZW1wdHkudXNlICYmIHRoaXMub3B0VXAuZW1wdHkub25TaG93ICYmIHRoaXMub3B0VXAuZW1wdHkub25TaG93KGZhbHNlKVxyXG59XHJcblxyXG4vKiDmmL7npLrlm57liLDpobbpg6jnmoTmjInpkq4gKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLnNob3dUb3BCdG4gPSBmdW5jdGlvbigpIHtcclxuXHRpZiAoIXRoaXMudG9wQnRuU2hvdykge1xyXG5cdFx0dGhpcy50b3BCdG5TaG93ID0gdHJ1ZTtcclxuXHRcdHRoaXMub3B0VXAudG9Ub3Aub25TaG93ICYmIHRoaXMub3B0VXAudG9Ub3Aub25TaG93KHRydWUpO1xyXG5cdH1cclxufVxyXG5cclxuLyog6ZqQ6JeP5Zue5Yiw6aG26YOo55qE5oyJ6ZKuICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5oaWRlVG9wQnRuID0gZnVuY3Rpb24oKSB7XHJcblx0aWYgKHRoaXMudG9wQnRuU2hvdykge1xyXG5cdFx0dGhpcy50b3BCdG5TaG93ID0gZmFsc2U7XHJcblx0XHR0aGlzLm9wdFVwLnRvVG9wLm9uU2hvdyAmJiB0aGlzLm9wdFVwLnRvVG9wLm9uU2hvdyhmYWxzZSk7XHJcblx0fVxyXG59XHJcblxyXG4vKiDojrflj5bmu5rliqjmnaHnmoTkvY3nva4gKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLmdldFNjcm9sbFRvcCA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzLnNjcm9sbFRvcCB8fCAwXHJcbn1cclxuXHJcbi8qIOiusOW9lea7muWKqOadoeeahOS9jee9riAqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUuc2V0U2Nyb2xsVG9wID0gZnVuY3Rpb24oeSkge1xyXG5cdHRoaXMuc2Nyb2xsVG9wID0geTtcclxufVxyXG5cclxuLyog5rua5Yqo5Yiw5oyH5a6a5L2N572uICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5zY3JvbGxUbyA9IGZ1bmN0aW9uKHksIHQpIHtcclxuXHR0aGlzLm15U2Nyb2xsVG8gJiYgdGhpcy5teVNjcm9sbFRvKHksIHQpIC8vIHNjcm9sbHZpZXfpnIDoh6rlrprkuYnlm57liLDpobbpg6jmlrnms5VcclxufVxyXG5cclxuLyog6Ieq5a6a5LmJc2Nyb2xsVG8gKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLnJlc2V0U2Nyb2xsVG8gPSBmdW5jdGlvbihteVNjcm9sbFRvKSB7XHJcblx0dGhpcy5teVNjcm9sbFRvID0gbXlTY3JvbGxUb1xyXG59XHJcblxyXG4vKiDmu5rliqjmnaHliLDlupXpg6jnmoTot53nprsgKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLmdldFNjcm9sbEJvdHRvbSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzLmdldFNjcm9sbEhlaWdodCgpIC0gdGhpcy5nZXRDbGllbnRIZWlnaHQoKSAtIHRoaXMuZ2V0U2Nyb2xsVG9wKClcclxufVxyXG5cclxuLyog6K6h5q2l5ZmoXHJcbiBzdGFyOiDlvIDlp4vlgLxcclxuIGVuZDog57uT5p2f5YC8XHJcbiBjYWxsYmFjayhzdGVwLHRpbWVyKTog5Zue6LCDc3RlcOWAvCzorqHmraXlmah0aW1lcizlj6/oh6rooYzpgJrov4d3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aW1lcinnu5PmnZ/orqHmraXlmag7XHJcbiB0OiDorqHmraXml7bplb8s5LygMOWImeebtOaOpeWbnuiwg2VuZOWAvDvkuI3kvKDliJnpu5jorqQzMDBtc1xyXG4gcmF0ZTog5ZGo5pyfO+S4jeS8oOWImem7mOiupDMwbXPorqHmraXkuIDmrKFcclxuICogKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLmdldFN0ZXAgPSBmdW5jdGlvbihzdGFyLCBlbmQsIGNhbGxiYWNrLCB0LCByYXRlKSB7XHJcblx0bGV0IGRpZmYgPSBlbmQgLSBzdGFyOyAvLyDlt67lgLxcclxuXHRpZiAodCA9PT0gMCB8fCBkaWZmID09PSAwKSB7XHJcblx0XHRjYWxsYmFjayAmJiBjYWxsYmFjayhlbmQpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHR0ID0gdCB8fCAzMDA7IC8vIOaXtumVvyAzMDBtc1xyXG5cdHJhdGUgPSByYXRlIHx8IDMwOyAvLyDlkajmnJ8gMzBtc1xyXG5cdGxldCBjb3VudCA9IHQgLyByYXRlOyAvLyDmrKHmlbBcclxuXHRsZXQgc3RlcCA9IGRpZmYgLyBjb3VudDsgLy8g5q2l6ZW/XHJcblx0bGV0IGkgPSAwOyAvLyDorqHmlbBcclxuXHRsZXQgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuXHRcdGlmIChpIDwgY291bnQgLSAxKSB7XHJcblx0XHRcdHN0YXIgKz0gc3RlcDtcclxuXHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soc3RhciwgdGltZXIpO1xyXG5cdFx0XHRpKys7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjayhlbmQsIHRpbWVyKTsgLy8g5pyA5ZCO5LiA5qyh55u05o6l6K6+572uZW5kLOmBv+WFjeiuoeeul+ivr+W3rlxyXG5cdFx0XHRjbGVhckludGVydmFsKHRpbWVyKTtcclxuXHRcdH1cclxuXHR9LCByYXRlKTtcclxufVxyXG5cclxuLyog5rua5Yqo5a655Zmo55qE6auY5bqmICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5nZXRDbGllbnRIZWlnaHQgPSBmdW5jdGlvbihpc1JlYWwpIHtcclxuXHRsZXQgaCA9IHRoaXMuY2xpZW50SGVpZ2h0IHx8IDBcclxuXHRpZiAoaCA9PT0gMCAmJiBpc1JlYWwgIT09IHRydWUpIHsgLy8g5pyq6I635Y+W5Yiw5a655Zmo55qE6auY5bqmLOWPr+S4tOaXtuWPlmJvZHnnmoTpq5jluqYgKOWPr+iDveS8muacieivr+W3rilcclxuXHRcdGggPSB0aGlzLmdldEJvZHlIZWlnaHQoKVxyXG5cdH1cclxuXHRyZXR1cm4gaFxyXG59XHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5zZXRDbGllbnRIZWlnaHQgPSBmdW5jdGlvbihoKSB7XHJcblx0dGhpcy5jbGllbnRIZWlnaHQgPSBoO1xyXG59XHJcblxyXG4vKiDmu5rliqjlhoXlrrnnmoTpq5jluqYgKi9cclxuTWVTY3JvbGwucHJvdG90eXBlLmdldFNjcm9sbEhlaWdodCA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzLnNjcm9sbEhlaWdodCB8fCAwO1xyXG59XHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5zZXRTY3JvbGxIZWlnaHQgPSBmdW5jdGlvbihoKSB7XHJcblx0dGhpcy5zY3JvbGxIZWlnaHQgPSBoO1xyXG59XHJcblxyXG4vKiBib2R555qE6auY5bqmICovXHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5nZXRCb2R5SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXMuYm9keUhlaWdodCB8fCAwO1xyXG59XHJcbk1lU2Nyb2xsLnByb3RvdHlwZS5zZXRCb2R5SGVpZ2h0ID0gZnVuY3Rpb24oaCkge1xyXG5cdHRoaXMuYm9keUhlaWdodCA9IGg7XHJcbn1cclxuXHJcbi8qIOmYu+atoua1j+iniOWZqOm7mOiupOa7muWKqOS6i+S7tiAqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbihlKSB7XHJcblx0Ly8g5bCP56iL5bqP5LiN5pSv5oyBZS5wcmV2ZW50RGVmYXVsdFxyXG5cdC8vIGFwcOeahGJvdW5jZeWPquiDvemAmui/h+mFjee9rnBhZ2VzLmpzb27nmoRzdHlsZS5hcHAtcGx1cy5ib3VuY2XkuLpcIm5vbmVcIuadpeemgeatolxyXG5cdC8vIGNhbmNlbGFibGU65piv5ZCm5Y+v5Lul6KKr56aB55SoOyBkZWZhdWx0UHJldmVudGVkOuaYr+WQpuW3sue7j+iiq+emgeeUqFxyXG5cdGlmIChlICYmIGUuY2FuY2VsYWJsZSAmJiAhZS5kZWZhdWx0UHJldmVudGVkKSBlLnByZXZlbnREZWZhdWx0KClcclxufVxyXG5cclxuLyog5piv5ZCm5YWB6K645LiL5ouJ5Zue5by5KOapoeearueti+aViOaenCk7IHRydWXmiJZudWxs5Li65YWB6K64OyBmYWxzZeemgeatomJvdW5jZSAqL1xyXG5NZVNjcm9sbC5wcm90b3R5cGUuc2V0Qm91bmNlID0gZnVuY3Rpb24oaXNCb3VuY2UpIHtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///177\n");

/***/ }),
/* 178 */
/*!*******************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/components/mescroll-uni/mescroll-uni-option.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; // 全局配置\n// mescroll-body 和 mescroll-uni 通用\nvar GlobalOption = {\n  down: {\n    // 其他down的配置参数也可以写,这里只展示了常用的配置:\n    textInOffset: '下拉刷新', // 下拉的距离在offset范围内的提示文本\n    textOutOffset: '释放更新', // 下拉的距离大于offset范围的提示文本\n    textLoading: '加载中 ...', // 加载中的提示文本\n    offset: 80, // 在列表顶部,下拉大于80px,松手即可触发下拉刷新的回调\n    native: false // 是否使用系统自带的下拉刷新; 默认false; 仅在mescroll-body生效 (值为true时,还需在pages配置enablePullDownRefresh:true;详请参考mescroll-native的案例)\n  },\n  up: {\n    // 其他up的配置参数也可以写,这里只展示了常用的配置:\n    textLoading: '加载中 ...', // 加载中的提示文本\n    textNoMore: '---- 我是有底线的 ----', // 没有更多数据的提示文本\n    offset: 80, // 距底部多远时,触发upCallback\n    isBounce: false, // 默认禁止橡皮筋的回弹效果, 必读事项: http://www.mescroll.com/qa.html?v=190725#q25\n    toTop: {\n      // 回到顶部按钮,需配置src才显示\n      src: \"http://www.mescroll.com/img/mescroll-totop.png?v=1\", // 图片路径 (建议放入static目录, 如 /static/img/mescroll-totop.png )\n      offset: 1000, // 列表滚动多少距离才显示回到顶部按钮,默认1000px\n      right: 20, // 到右边的距离, 默认20 (支持\"20rpx\", \"20px\", \"20%\"格式的值, 纯数字则默认单位rpx)\n      bottom: 120, // 到底部的距离, 默认120 (支持\"20rpx\", \"20px\", \"20%\"格式的值, 纯数字则默认单位rpx)\n      width: 72 // 回到顶部图标的宽度, 默认72 (支持\"20rpx\", \"20px\", \"20%\"格式的值, 纯数字则默认单位rpx)\n    },\n    empty: {\n      use: true, // 是否显示空布局\n      icon: \"http://www.mescroll.com/img/mescroll-empty.png?v=1\", // 图标路径 (建议放入static目录, 如 /static/img/mescroll-empty.png )\n      tip: '~ 暂无相关数据 ~' // 提示\n    } } };var _default =\n\n\n\nGlobalOption;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9tZXNjcm9sbC11bmkvbWVzY3JvbGwtdW5pLW9wdGlvbi5qcyJdLCJuYW1lcyI6WyJHbG9iYWxPcHRpb24iLCJkb3duIiwidGV4dEluT2Zmc2V0IiwidGV4dE91dE9mZnNldCIsInRleHRMb2FkaW5nIiwib2Zmc2V0IiwibmF0aXZlIiwidXAiLCJ0ZXh0Tm9Nb3JlIiwiaXNCb3VuY2UiLCJ0b1RvcCIsInNyYyIsInJpZ2h0IiwiYm90dG9tIiwid2lkdGgiLCJlbXB0eSIsInVzZSIsImljb24iLCJ0aXAiXSwibWFwcGluZ3MiOiJ3RkFBQTtBQUNBO0FBQ0EsSUFBTUEsWUFBWSxHQUFHO0FBQ3BCQyxNQUFJLEVBQUU7QUFDTDtBQUNBQyxnQkFBWSxFQUFFLE1BRlQsRUFFaUI7QUFDdEJDLGlCQUFhLEVBQUUsTUFIVixFQUdrQjtBQUN2QkMsZUFBVyxFQUFFLFNBSlIsRUFJbUI7QUFDeEJDLFVBQU0sRUFBRSxFQUxILEVBS087QUFDWkMsVUFBTSxFQUFFLEtBTkgsQ0FNUztBQU5ULEdBRGM7QUFTcEJDLElBQUUsRUFBRTtBQUNIO0FBQ0FILGVBQVcsRUFBRSxTQUZWLEVBRXFCO0FBQ3hCSSxjQUFVLEVBQUUsa0JBSFQsRUFHNkI7QUFDaENILFVBQU0sRUFBRSxFQUpMLEVBSVM7QUFDWkksWUFBUSxFQUFFLEtBTFAsRUFLYztBQUNqQkMsU0FBSyxFQUFFO0FBQ047QUFDQUMsU0FBRyxFQUFFLG9EQUZDLEVBRXFEO0FBQzNETixZQUFNLEVBQUUsSUFIRixFQUdRO0FBQ2RPLFdBQUssRUFBRSxFQUpELEVBSUs7QUFDWEMsWUFBTSxFQUFFLEdBTEYsRUFLTztBQUNiQyxXQUFLLEVBQUUsRUFORCxDQU1JO0FBTkosS0FOSjtBQWNIQyxTQUFLLEVBQUU7QUFDTkMsU0FBRyxFQUFFLElBREMsRUFDSztBQUNYQyxVQUFJLEVBQUUsb0RBRkEsRUFFc0Q7QUFDNURDLFNBQUcsRUFBRSxZQUhDLENBR1k7QUFIWixLQWRKLEVBVGdCLEVBQXJCLEM7Ozs7QUErQmVsQixZIiwiZmlsZSI6IjE3OC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOWFqOWxgOmFjee9rlxyXG4vLyBtZXNjcm9sbC1ib2R5IOWSjCBtZXNjcm9sbC11bmkg6YCa55SoXHJcbmNvbnN0IEdsb2JhbE9wdGlvbiA9IHtcclxuXHRkb3duOiB7XHJcblx0XHQvLyDlhbbku5Zkb3du55qE6YWN572u5Y+C5pWw5Lmf5Y+v5Lul5YaZLOi/memHjOWPquWxleekuuS6huW4uOeUqOeahOmFjee9rjpcclxuXHRcdHRleHRJbk9mZnNldDogJ+S4i+aLieWIt+aWsCcsIC8vIOS4i+aLieeahOi3neemu+WcqG9mZnNldOiMg+WbtOWGheeahOaPkOekuuaWh+acrFxyXG5cdFx0dGV4dE91dE9mZnNldDogJ+mHiuaUvuabtOaWsCcsIC8vIOS4i+aLieeahOi3neemu+Wkp+S6jm9mZnNldOiMg+WbtOeahOaPkOekuuaWh+acrFxyXG5cdFx0dGV4dExvYWRpbmc6ICfliqDovb3kuK0gLi4uJywgLy8g5Yqg6L295Lit55qE5o+Q56S65paH5pysXHJcblx0XHRvZmZzZXQ6IDgwLCAvLyDlnKjliJfooajpobbpg6gs5LiL5ouJ5aSn5LqOODBweCzmnb7miYvljbPlj6/op6blj5HkuIvmi4nliLfmlrDnmoTlm57osINcclxuXHRcdG5hdGl2ZTogZmFsc2UgLy8g5piv5ZCm5L2/55So57O757uf6Ieq5bim55qE5LiL5ouJ5Yi35pawOyDpu5jorqRmYWxzZTsg5LuF5ZyobWVzY3JvbGwtYm9keeeUn+aViCAo5YC85Li6dHJ1ZeaXtizov5jpnIDlnKhwYWdlc+mFjee9rmVuYWJsZVB1bGxEb3duUmVmcmVzaDp0cnVlO+ivpuivt+WPguiAg21lc2Nyb2xsLW5hdGl2ZeeahOahiOS+iylcclxuXHR9LFxyXG5cdHVwOiB7XHJcblx0XHQvLyDlhbbku5Z1cOeahOmFjee9ruWPguaVsOS5n+WPr+S7peWGmSzov5nph4zlj6rlsZXnpLrkuobluLjnlKjnmoTphY3nva46XHJcblx0XHR0ZXh0TG9hZGluZzogJ+WKoOi9veS4rSAuLi4nLCAvLyDliqDovb3kuK3nmoTmj5DnpLrmlofmnKxcclxuXHRcdHRleHROb01vcmU6ICctLS0tIOaIkeaYr+acieW6lee6v+eahCAtLS0tJywgLy8g5rKh5pyJ5pu05aSa5pWw5o2u55qE5o+Q56S65paH5pysXHJcblx0XHRvZmZzZXQ6IDgwLCAvLyDot53lupXpg6jlpJrov5zml7Ys6Kem5Y+RdXBDYWxsYmFja1xyXG5cdFx0aXNCb3VuY2U6IGZhbHNlLCAvLyDpu5jorqTnpoHmraLmqaHnmq7nrYvnmoTlm57lvLnmlYjmnpwsIOW/heivu+S6i+mhuTogaHR0cDovL3d3dy5tZXNjcm9sbC5jb20vcWEuaHRtbD92PTE5MDcyNSNxMjVcclxuXHRcdHRvVG9wOiB7XHJcblx0XHRcdC8vIOWbnuWIsOmhtumDqOaMiemSrizpnIDphY3nva5zcmPmiY3mmL7npLpcclxuXHRcdFx0c3JjOiBcImh0dHA6Ly93d3cubWVzY3JvbGwuY29tL2ltZy9tZXNjcm9sbC10b3RvcC5wbmc/dj0xXCIsIC8vIOWbvueJh+i3r+W+hCAo5bu66K6u5pS+5YWlc3RhdGlj55uu5b2VLCDlpoIgL3N0YXRpYy9pbWcvbWVzY3JvbGwtdG90b3AucG5nIClcclxuXHRcdFx0b2Zmc2V0OiAxMDAwLCAvLyDliJfooajmu5rliqjlpJrlsJHot53nprvmiY3mmL7npLrlm57liLDpobbpg6jmjInpkq4s6buY6K6kMTAwMHB4XHJcblx0XHRcdHJpZ2h0OiAyMCwgLy8g5Yiw5Y+z6L6555qE6Led56a7LCDpu5jorqQyMCAo5pSv5oyBXCIyMHJweFwiLCBcIjIwcHhcIiwgXCIyMCVcIuagvOW8j+eahOWAvCwg57qv5pWw5a2X5YiZ6buY6K6k5Y2V5L2NcnB4KVxyXG5cdFx0XHRib3R0b206IDEyMCwgLy8g5Yiw5bqV6YOo55qE6Led56a7LCDpu5jorqQxMjAgKOaUr+aMgVwiMjBycHhcIiwgXCIyMHB4XCIsIFwiMjAlXCLmoLzlvI/nmoTlgLwsIOe6r+aVsOWtl+WImem7mOiupOWNleS9jXJweClcclxuXHRcdFx0d2lkdGg6IDcyIC8vIOWbnuWIsOmhtumDqOWbvuagh+eahOWuveW6piwg6buY6K6kNzIgKOaUr+aMgVwiMjBycHhcIiwgXCIyMHB4XCIsIFwiMjAlXCLmoLzlvI/nmoTlgLwsIOe6r+aVsOWtl+WImem7mOiupOWNleS9jXJweClcclxuXHRcdH0sXHJcblx0XHRlbXB0eToge1xyXG5cdFx0XHR1c2U6IHRydWUsIC8vIOaYr+WQpuaYvuekuuepuuW4g+WxgFxyXG5cdFx0XHRpY29uOiBcImh0dHA6Ly93d3cubWVzY3JvbGwuY29tL2ltZy9tZXNjcm9sbC1lbXB0eS5wbmc/dj0xXCIsIC8vIOWbvuagh+i3r+W+hCAo5bu66K6u5pS+5YWlc3RhdGlj55uu5b2VLCDlpoIgL3N0YXRpYy9pbWcvbWVzY3JvbGwtZW1wdHkucG5nIClcclxuXHRcdFx0dGlwOiAnfiDmmoLml6Dnm7jlhbPmlbDmja4gficgLy8g5o+Q56S6XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxPcHRpb25cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///178\n");

/***/ }),
/* 179 */
/*!**************************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/components/mescroll-uni/components/mescroll-empty.vue ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mescroll_empty_vue_vue_type_template_id_0d51d09c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mescroll-empty.vue?vue&type=template&id=0d51d09c& */ 180);\n/* harmony import */ var _mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mescroll-empty.vue?vue&type=script&lang=js& */ 182);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _mescroll_empty_vue_vue_type_template_id_0d51d09c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _mescroll_empty_vue_vue_type_template_id_0d51d09c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _mescroll_empty_vue_vue_type_template_id_0d51d09c___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/mescroll-uni/components/mescroll-empty.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkg7QUFDM0g7QUFDa0U7QUFDTDs7O0FBRzdEO0FBQ3lLO0FBQ3pLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSx5RkFBTTtBQUNSLEVBQUUsa0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTc5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9tZXNjcm9sbC1lbXB0eS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGQ1MWQwOWMmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tZXNjcm9sbC1lbXB0eS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL21lc2Nyb2xsLWVtcHR5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL21lc2Nyb2xsLXVuaS9jb21wb25lbnRzL21lc2Nyb2xsLWVtcHR5LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///179\n");

/***/ }),
/* 180 */
/*!*********************************************************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/components/mescroll-uni/components/mescroll-empty.vue?vue&type=template&id=0d51d09c& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_template_id_0d51d09c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mescroll-empty.vue?vue&type=template&id=0d51d09c& */ 181);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_template_id_0d51d09c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_template_id_0d51d09c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_template_id_0d51d09c___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_template_id_0d51d09c___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 181 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/MY/Finance/nice-trade/trading-cat/components/mescroll-uni/components/mescroll-empty.vue?vue&type=template&id=0d51d09c& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: _vm._$s(0, "sc", "mescroll-empty"),
      class: _vm._$s(0, "c", { "empty-fixed": _vm.option.fixed }),
      style: _vm._$s(0, "s", {
        "z-index": _vm.option.zIndex,
        top: _vm.option.top
      }),
      attrs: { _i: 0 }
    },
    [
      _vm._$s(1, "i", _vm.icon)
        ? _c("image", {
            staticClass: _vm._$s(1, "sc", "empty-icon"),
            attrs: { src: _vm._$s(1, "a-src", _vm.icon), _i: 1 }
          })
        : _vm._e(),
      _vm._$s(2, "i", _vm.tip)
        ? _c(
            "view",
            { staticClass: _vm._$s(2, "sc", "empty-tip"), attrs: { _i: 2 } },
            [_vm._v(_vm._$s(2, "t0-0", _vm._s(_vm.tip)))]
          )
        : _vm._e(),
      _vm._$s(3, "i", _vm.option.btnText)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(3, "sc", "empty-btn"),
              attrs: { _i: 3 },
              on: { click: _vm.emptyClick }
            },
            [_vm._v(_vm._$s(3, "t0-0", _vm._s(_vm.option.btnText)))]
          )
        : _vm._e()
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 182 */
/*!***************************************************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/components/mescroll-uni/components/mescroll-empty.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mescroll-empty.vue?vue&type=script&lang=js& */ 183);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtrQixDQUFnQixva0JBQUcsRUFBQyIsImZpbGUiOiIxODIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZXNjcm9sbC1lbXB0eS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lc2Nyb2xsLWVtcHR5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///182\n");

/***/ }),
/* 183 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/MY/Finance/nice-trade/trading-cat/components/mescroll-uni/components/mescroll-empty.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _mescrollUniOption = _interopRequireDefault(__webpack_require__(/*! ./../mescroll-uni-option.js */ 178));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// 引入全局配置\nvar _default2 = { props: { // empty的配置项: 默认为GlobalOption.up.empty\n    option: { type: Object, default: function _default() {return {};} } }, // 使用computed获取配置,用于支持option的动态配置\n  computed: { // 图标\n    icon: function icon() {return this.option.icon == null ? _mescrollUniOption.default.up.empty.icon : this.option.icon; // 此处不使用短路求值, 用于支持传空串不显示图标\n    }, // 文本提示\n    tip: function tip() {return this.option.tip == null ? _mescrollUniOption.default.up.empty.tip : this.option.tip; // 此处不使用短路求值, 用于支持传空串不显示文本提示\n    } }, methods: {\n    // 点击按钮\n    emptyClick: function emptyClick() {\n      this.$emit('emptyclick');\n    } } };exports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9tZXNjcm9sbC11bmkvY29tcG9uZW50cy9tZXNjcm9sbC1lbXB0eS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsNkc7Ozs7Ozs7Ozs7Ozs7OztBQURBO2dCQUVBLEVBQ0EsU0FDQTtBQUNBLGNBQ0EsWUFEQSxFQUVBLE9BRkEsc0JBRUEsQ0FDQSxVQUNBLENBSkEsRUFGQSxFQURBLEVBVUE7QUFDQSxjQUNBO0FBQ0EsUUFGQSxrQkFFQSxDQUNBLDhGQURBLENBQ0E7QUFDQSxLQUpBLEVBS0E7QUFDQSxPQU5BLGlCQU1BLENBQ0EsMkZBREEsQ0FDQTtBQUNBLEtBUkEsRUFYQSxFQXFCQTtBQUNBO0FBQ0EsY0FGQSx3QkFFQTtBQUNBO0FBQ0EsS0FKQSxFQXJCQSxFIiwiZmlsZSI6IjE4My5qcyIsInNvdXJjZXNDb250ZW50IjpbIjwhLS3nqbrluIPlsYBcclxuXHJcbuWPr+S9nOS4uueLrOeri+eahOe7hOS7tiwg5LiN5L2/55SobWVzY3JvbGznmoTpobXpnaLkuZ/og73ljZXni6zlvJXlhaUsIOS7peS+v0FQUOWFqOWxgOe7n+S4gOeuoeeQhjpcclxuaW1wb3J0IE1lc2Nyb2xsRW1wdHkgZnJvbSAnQC9jb21wb25lbnRzL21lc2Nyb2xsLXVuaS9jb21wb25lbnRzL21lc2Nyb2xsLWVtcHR5LnZ1ZSc7XHJcbjxtZXNjcm9sbC1lbXB0eSB2LWlmPVwiaXNTaG93RW1wdHlcIiA6b3B0aW9uPVwib3B0RW1wdHlcIiBAZW1wdHljbGljaz1cImVtcHR5Q2xpY2tcIj48L21lc2Nyb2xsLWVtcHR5PlxyXG5cclxuLS0+XHJcbjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cIm1lc2Nyb2xsLWVtcHR5XCIgOmNsYXNzPVwieyAnZW1wdHktZml4ZWQnOiBvcHRpb24uZml4ZWQgfVwiIDpzdHlsZT1cInsgJ3otaW5kZXgnOiBvcHRpb24uekluZGV4LCB0b3A6IG9wdGlvbi50b3AgfVwiPlxyXG5cdFx0PGltYWdlIHYtaWY9XCJpY29uXCIgY2xhc3M9XCJlbXB0eS1pY29uXCIgOnNyYz1cImljb25cIiBtb2RlPVwid2lkdGhGaXhcIiAvPlxyXG5cdFx0PHZpZXcgdi1pZj1cInRpcFwiIGNsYXNzPVwiZW1wdHktdGlwXCI+e3sgdGlwIH19PC92aWV3PlxyXG5cdFx0PHZpZXcgdi1pZj1cIm9wdGlvbi5idG5UZXh0XCIgY2xhc3M9XCJlbXB0eS1idG5cIiBAY2xpY2s9XCJlbXB0eUNsaWNrXCI+e3sgb3B0aW9uLmJ0blRleHQgfX08L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLy8g5byV5YWl5YWo5bGA6YWN572uXHJcbmltcG9ydCBHbG9iYWxPcHRpb24gZnJvbSAnLi8uLi9tZXNjcm9sbC11bmktb3B0aW9uLmpzJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHByb3BzOiB7XHJcblx0XHQvLyBlbXB0eeeahOmFjee9rumhuTog6buY6K6k5Li6R2xvYmFsT3B0aW9uLnVwLmVtcHR5XHJcblx0XHRvcHRpb246IHtcclxuXHRcdFx0dHlwZTogT2JqZWN0LFxyXG5cdFx0XHRkZWZhdWx0KCkge1xyXG5cdFx0XHRcdHJldHVybiB7fTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0Ly8g5L2/55SoY29tcHV0ZWTojrflj5bphY3nva4s55So5LqO5pSv5oyBb3B0aW9u55qE5Yqo5oCB6YWN572uXHJcblx0Y29tcHV0ZWQ6IHtcclxuXHRcdC8vIOWbvuagh1xyXG5cdFx0aWNvbigpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uLmljb24gPT0gbnVsbCA/IEdsb2JhbE9wdGlvbi51cC5lbXB0eS5pY29uIDogdGhpcy5vcHRpb24uaWNvbjsgLy8g5q2k5aSE5LiN5L2/55So55+t6Lev5rGC5YC8LCDnlKjkuo7mlK/mjIHkvKDnqbrkuLLkuI3mmL7npLrlm77moIdcclxuXHRcdH0sXHJcblx0XHQvLyDmlofmnKzmj5DnpLpcclxuXHRcdHRpcCgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uLnRpcCA9PSBudWxsID8gR2xvYmFsT3B0aW9uLnVwLmVtcHR5LnRpcCA6IHRoaXMub3B0aW9uLnRpcDsgLy8g5q2k5aSE5LiN5L2/55So55+t6Lev5rGC5YC8LCDnlKjkuo7mlK/mjIHkvKDnqbrkuLLkuI3mmL7npLrmlofmnKzmj5DnpLpcclxuXHRcdH1cclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdC8vIOeCueWHu+aMiemSrlxyXG5cdFx0ZW1wdHlDbGljaygpIHtcclxuXHRcdFx0dGhpcy4kZW1pdCgnZW1wdHljbGljaycpO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi8qIOaXoOS7u+S9leaVsOaNrueahOepuuW4g+WxgCAqL1xyXG4ubWVzY3JvbGwtZW1wdHkge1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZzogMTAwcnB4IDUwcnB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1lc2Nyb2xsLWVtcHR5LmVtcHR5LWZpeGVkIHtcclxuXHR6LWluZGV4OiA5OTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7IC8qdHJhbnNmb3Jt5Lya5L2/Zml4ZWTlpLHmlYgs5pyA57uI5Lya6ZmN57qn5Li6YWJzb2x1dGUgKi9cclxuXHR0b3A6IDEwMHJweDtcclxuXHRsZWZ0OiAwO1xyXG59XHJcblxyXG4ubWVzY3JvbGwtZW1wdHkgLmVtcHR5LWljb24ge1xyXG5cdHdpZHRoOiAyODBycHg7XHJcblx0aGVpZ2h0OiAyODBycHg7XHJcbn1cclxuXHJcbi5tZXNjcm9sbC1lbXB0eSAuZW1wdHktdGlwIHtcclxuXHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHRmb250LXNpemU6IDI0cnB4O1xyXG5cdGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4ubWVzY3JvbGwtZW1wdHkgLmVtcHR5LWJ0biB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1hcmdpbi10b3A6IDQwcnB4O1xyXG5cdG1pbi13aWR0aDogMjAwcnB4O1xyXG5cdHBhZGRpbmc6IDE4cnB4O1xyXG5cdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0Ym9yZGVyOiAxcnB4IHNvbGlkICNlMDRiMjg7XHJcblx0Ym9yZGVyLXJhZGl1czogNjBycHg7XHJcblx0Y29sb3I6ICNlMDRiMjg7XHJcbn1cclxuXHJcbi5tZXNjcm9sbC1lbXB0eSAuZW1wdHktYnRuOmFjdGl2ZSB7XHJcblx0b3BhY2l0eTogMC43NTtcclxufVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///183\n");

/***/ }),
/* 184 */
/*!************************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/components/mescroll-uni/components/mescroll-top.vue ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mescroll_top_vue_vue_type_template_id_f59b820c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mescroll-top.vue?vue&type=template&id=f59b820c& */ 185);\n/* harmony import */ var _mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mescroll-top.vue?vue&type=script&lang=js& */ 187);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _mescroll_top_vue_vue_type_template_id_f59b820c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _mescroll_top_vue_vue_type_template_id_f59b820c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _mescroll_top_vue_vue_type_template_id_f59b820c___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/mescroll-uni/components/mescroll-top.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUg7QUFDekg7QUFDZ0U7QUFDTDs7O0FBRzNEO0FBQ3lLO0FBQ3pLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLGtGQUFNO0FBQ1IsRUFBRSx1RkFBTTtBQUNSLEVBQUUsZ0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTg0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9tZXNjcm9sbC10b3AudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY1OWI4MjBjJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbWVzY3JvbGwtdG9wLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbWVzY3JvbGwtdG9wLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL21lc2Nyb2xsLXVuaS9jb21wb25lbnRzL21lc2Nyb2xsLXRvcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///184\n");

/***/ }),
/* 185 */
/*!*******************************************************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/components/mescroll-uni/components/mescroll-top.vue?vue&type=template&id=f59b820c& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_template_id_f59b820c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mescroll-top.vue?vue&type=template&id=f59b820c& */ 186);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_template_id_f59b820c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_template_id_f59b820c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_template_id_f59b820c___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_template_id_f59b820c___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 186 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/MY/Finance/nice-trade/trading-cat/components/mescroll-uni/components/mescroll-top.vue?vue&type=template&id=f59b820c& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._$s(0, "i", _vm.mOption.src)
    ? _c("image", {
        staticClass: _vm._$s(0, "sc", "mescroll-totop"),
        class: _vm._$s(0, "c", [
          _vm.value ? "mescroll-totop-in" : "mescroll-totop-out",
          { "mescroll-safe-bottom": _vm.mOption.safearea }
        ]),
        style: _vm._$s(0, "s", {
          "z-index": _vm.mOption.zIndex,
          left: _vm.left,
          right: _vm.right,
          bottom: _vm.addUnit(_vm.mOption.bottom),
          width: _vm.addUnit(_vm.mOption.width),
          "border-radius": _vm.addUnit(_vm.mOption.radius)
        }),
        attrs: { src: _vm._$s(0, "a-src", _vm.mOption.src), _i: 0 },
        on: { click: _vm.toTopClick }
      })
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 187 */
/*!*************************************************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/components/mescroll-uni/components/mescroll-top.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mescroll-top.vue?vue&type=script&lang=js& */ 188);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdrQixDQUFnQixra0JBQUcsRUFBQyIsImZpbGUiOiIxODcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZXNjcm9sbC10b3AudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZXNjcm9sbC10b3AudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///187\n");

/***/ }),
/* 188 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/MY/Finance/nice-trade/trading-cat/components/mescroll-uni/components/mescroll-top.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: {\n    // up.toTop的配置项\n    option: Object,\n    // 是否显示\n    value: false },\n\n  computed: {\n    // 支付宝小程序需写成计算属性,prop定义default仍报错\n    mOption: function mOption() {\n      return this.option || {};\n    },\n    // 优先显示左边\n    left: function left() {\n      return this.mOption.left ? this.addUnit(this.mOption.left) : 'auto';\n    },\n    // 右边距离 (优先显示左边)\n    right: function right() {\n      return this.mOption.left ? 'auto' : this.addUnit(this.mOption.right);\n    } },\n\n  methods: {\n    addUnit: function addUnit(num) {\n      if (!num) return 0;\n      if (typeof num === 'number') return num + 'rpx';\n      return num;\n    },\n    toTopClick: function toTopClick() {\n      this.$emit('input', false); // 使v-model生效\n      this.$emit('click'); // 派发点击事件\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9tZXNjcm9sbC11bmkvY29tcG9uZW50cy9tZXNjcm9sbC10b3AudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTtBQUNBO0FBQ0Esa0JBRkE7QUFHQTtBQUNBLGdCQUpBLEVBREE7O0FBT0E7QUFDQTtBQUNBLFdBRkEscUJBRUE7QUFDQTtBQUNBLEtBSkE7QUFLQTtBQUNBLFFBTkEsa0JBTUE7QUFDQTtBQUNBLEtBUkE7QUFTQTtBQUNBLFNBVkEsbUJBVUE7QUFDQTtBQUNBLEtBWkEsRUFQQTs7QUFxQkE7QUFDQSxXQURBLG1CQUNBLEdBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTEE7QUFNQSxjQU5BLHdCQU1BO0FBQ0EsaUNBREEsQ0FDQTtBQUNBLDBCQUZBLENBRUE7QUFDQSxLQVRBLEVBckJBLEUiLCJmaWxlIjoiMTg4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPCEtLSDlm57liLDpobbpg6jnmoTmjInpkq4gLS0+XHJcbjx0ZW1wbGF0ZT5cclxuXHQ8aW1hZ2VcclxuXHRcdHYtaWY9XCJtT3B0aW9uLnNyY1wiXHJcblx0XHRjbGFzcz1cIm1lc2Nyb2xsLXRvdG9wXCJcclxuXHRcdDpjbGFzcz1cIlt2YWx1ZSA/ICdtZXNjcm9sbC10b3RvcC1pbicgOiAnbWVzY3JvbGwtdG90b3Atb3V0JywgeydtZXNjcm9sbC1zYWZlLWJvdHRvbSc6IG1PcHRpb24uc2FmZWFyZWF9XVwiXHJcblx0XHQ6c3R5bGU9XCJ7J3otaW5kZXgnOm1PcHRpb24uekluZGV4LCAnbGVmdCc6IGxlZnQsICdyaWdodCc6IHJpZ2h0LCAnYm90dG9tJzphZGRVbml0KG1PcHRpb24uYm90dG9tKSwgJ3dpZHRoJzphZGRVbml0KG1PcHRpb24ud2lkdGgpLCAnYm9yZGVyLXJhZGl1cyc6YWRkVW5pdChtT3B0aW9uLnJhZGl1cyl9XCJcclxuXHRcdDpzcmM9XCJtT3B0aW9uLnNyY1wiXHJcblx0XHRtb2RlPVwid2lkdGhGaXhcIlxyXG5cdFx0QGNsaWNrPVwidG9Ub3BDbGlja1wiXHJcblx0Lz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRwcm9wczoge1xyXG5cdFx0Ly8gdXAudG9Ub3DnmoTphY3nva7poblcclxuXHRcdG9wdGlvbjogT2JqZWN0LFxyXG5cdFx0Ly8g5piv5ZCm5pi+56S6XHJcblx0XHR2YWx1ZTogZmFsc2VcclxuXHR9LFxyXG5cdGNvbXB1dGVkOiB7XHJcblx0XHQvLyDmlK/ku5jlrp3lsI/nqIvluo/pnIDlhpnmiJDorqHnrpflsZ7mgKcscHJvcOWumuS5iWRlZmF1bHTku43miqXplJlcclxuXHRcdG1PcHRpb24oKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uIHx8IHt9XHJcblx0XHR9LFxyXG5cdFx0Ly8g5LyY5YWI5pi+56S65bem6L65XHJcblx0XHRsZWZ0KCl7XHJcblx0XHRcdHJldHVybiB0aGlzLm1PcHRpb24ubGVmdCA/IHRoaXMuYWRkVW5pdCh0aGlzLm1PcHRpb24ubGVmdCkgOiAnYXV0byc7XHJcblx0XHR9LFxyXG5cdFx0Ly8g5Y+z6L656Led56a7ICjkvJjlhYjmmL7npLrlt6bovrkpXHJcblx0XHRyaWdodCgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMubU9wdGlvbi5sZWZ0ID8gJ2F1dG8nIDogdGhpcy5hZGRVbml0KHRoaXMubU9wdGlvbi5yaWdodCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRhZGRVbml0KG51bSl7XHJcblx0XHRcdGlmKCFudW0pIHJldHVybiAwO1xyXG5cdFx0XHRpZih0eXBlb2YgbnVtID09PSAnbnVtYmVyJykgcmV0dXJuIG51bSArICdycHgnO1xyXG5cdFx0XHRyZXR1cm4gbnVtXHJcblx0XHR9LFxyXG5cdFx0dG9Ub3BDbGljaygpIHtcclxuXHRcdFx0dGhpcy4kZW1pdCgnaW5wdXQnLCBmYWxzZSk7IC8vIOS9v3YtbW9kZWznlJ/mlYhcclxuXHRcdFx0dGhpcy4kZW1pdCgnY2xpY2snKTsgLy8g5rS+5Y+R54K55Ye75LqL5Lu2XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuLyog5Zue5Yiw6aG26YOo55qE5oyJ6ZKuICovXHJcbi5tZXNjcm9sbC10b3RvcCB7XHJcblx0ei1pbmRleDogOTk5MDtcclxuXHRwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDsgLyog5Yqg5LiKaW1wb3J0YW506YG/5YWN57yW6K+R5YiwSDUs5Zyo5aSabWVzY3JvbGzkuK3lrprkvY3lpLHmlYggKi9cclxuXHRyaWdodDogMjBycHg7XHJcblx0Ym90dG9tOiAxMjBycHg7XHJcblx0d2lkdGg6IDcycnB4O1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0b3BhY2l0eTogMDtcclxuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7IC8qIOi/h+a4oSAqL1xyXG5cdG1hcmdpbi1ib3R0b206IHZhcigtLXdpbmRvdy1ib3R0b20pOyAvKiBjc3Plj5jph48gKi9cclxufVxyXG5cclxuIC8qIOmAgumFjSBpUGhvbmVYICovXHJcbi5tZXNjcm9sbC1zYWZlLWJvdHRvbXtcclxuXHRtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXdpbmRvdy1ib3R0b20pICsgY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpOyAvKiB3aW5kb3ctYm90dG9tICsg6YCC6YWNIGlQaG9uZVggKi9cclxuXHRtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXdpbmRvdy1ib3R0b20pICsgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKTtcclxufVxyXG5cclxuLyog5pi+56S6IC0tIOa3oeWFpSAqL1xyXG4ubWVzY3JvbGwtdG90b3AtaW4ge1xyXG5cdG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIOmakOiXjyAtLSDmt6Hlh7rkuJTkuI3mjqXmlLbkuovku7YqL1xyXG4ubWVzY3JvbGwtdG90b3Atb3V0IHtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///188\n");

/***/ }),
/* 189 */
/*!*************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/components/mescroll-uni/mescroll-uni.vue ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mescroll-uni.vue?vue&type=template&id=8f18eaf8& */ 190);\n/* harmony import */ var _mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mescroll-uni.vue?vue&type=script&lang=js& */ 192);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/mescroll-uni/mescroll-uni.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUg7QUFDekg7QUFDZ0U7QUFDTDs7O0FBRzNEO0FBQ3NLO0FBQ3RLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLGtGQUFNO0FBQ1IsRUFBRSx1RkFBTTtBQUNSLEVBQUUsZ0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTg5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9tZXNjcm9sbC11bmkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPThmMThlYWY4JlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbWVzY3JvbGwtdW5pLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbWVzY3JvbGwtdW5pLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL21lc2Nyb2xsLXVuaS9tZXNjcm9sbC11bmkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///189\n");

/***/ }),
/* 190 */
/*!********************************************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/components/mescroll-uni/mescroll-uni.vue?vue&type=template&id=8f18eaf8& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mescroll-uni.vue?vue&type=template&id=8f18eaf8& */ 191);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 191 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/MY/Finance/nice-trade/trading-cat/components/mescroll-uni/mescroll-uni.vue?vue&type=template&id=8f18eaf8& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "mescroll-uni-warp"), attrs: { _i: 0 } },
    [
      _c(
        "scroll-view",
        {
          staticClass: _vm._$s(1, "sc", "mescroll-uni"),
          class: _vm._$s(1, "c", { "mescroll-uni-fixed": _vm.isFixed }),
          style: _vm._$s(1, "s", {
            height: _vm.scrollHeight,
            "padding-top": _vm.padTop,
            "padding-bottom": _vm.padBottom,
            "padding-bottom": _vm.padBottomConstant,
            "padding-bottom": _vm.padBottomEnv,
            top: _vm.fixedTop,
            bottom: _vm.fixedBottom,
            bottom: _vm.fixedBottomConstant,
            bottom: _vm.fixedBottomEnv
          }),
          attrs: {
            id: _vm._$s(1, "a-id", _vm.viewId),
            "scroll-top": _vm._$s(1, "a-scroll-top", _vm.scrollTop),
            "scroll-into-view": _vm._$s(
              1,
              "a-scroll-into-view",
              _vm.scrollToViewId
            ),
            "scroll-with-animation": _vm._$s(
              1,
              "a-scroll-with-animation",
              _vm.scrollAnim
            ),
            "scroll-y": _vm._$s(1, "a-scroll-y", _vm.isDownReset),
            _i: 1
          },
          on: {
            scroll: _vm.scroll,
            touchstart: _vm.touchstartEvent,
            touchmove: _vm.touchmoveEvent,
            touchend: _vm.touchendEvent,
            touchcancel: _vm.touchendEvent
          }
        },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(2, "sc", "mescroll-uni-content"),
              style: _vm._$s(2, "s", {
                transform: _vm.translateY,
                transition: _vm.transition
              }),
              attrs: { _i: 2 }
            },
            [
              _vm._$s(3, "i", _vm.mescroll.optDown.use)
                ? _c(
                    "view",
                    {
                      staticClass: _vm._$s(3, "sc", "mescroll-downwarp"),
                      style: _vm._$s(3, "s", {
                        "background-color": _vm.mescroll.optDown.bgColor,
                        color: _vm.mescroll.optDown.textColor
                      }),
                      attrs: { _i: 3 }
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(4, "sc", "downwarp-content"),
                          attrs: { _i: 4 }
                        },
                        [
                          _c("view", {
                            staticClass: _vm._$s(5, "sc", "downwarp-progress"),
                            class: _vm._$s(5, "c", {
                              "mescroll-rotate": _vm.isDownLoading
                            }),
                            style: _vm._$s(5, "s", {
                              "border-color": _vm.mescroll.optDown.textColor,
                              transform: _vm.downRotate
                            }),
                            attrs: { _i: 5 }
                          }),
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(6, "sc", "downwarp-tip"),
                              attrs: { _i: 6 }
                            },
                            [_vm._v(_vm._$s(6, "t0-0", _vm._s(_vm.downText)))]
                          )
                        ]
                      )
                    ]
                  )
                : _vm._e(),
              _vm._t("default", null, { _i: 7 }),
              _vm._$s(8, "i", _vm.isShowEmpty)
                ? _c("mescroll-empty", {
                    attrs: { option: _vm.mescroll.optUp.empty, _i: 8 },
                    on: { emptyclick: _vm.emptyClick }
                  })
                : _vm._e(),
              _vm._$s(9, "i", _vm.mescroll.optUp.use && !_vm.isDownLoading)
                ? _c(
                    "view",
                    {
                      staticClass: _vm._$s(9, "sc", "mescroll-upwarp"),
                      style: _vm._$s(9, "s", {
                        "background-color": _vm.mescroll.optUp.bgColor,
                        color: _vm.mescroll.optUp.textColor
                      }),
                      attrs: { _i: 9 }
                    },
                    [
                      _c(
                        "view",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm._$s(
                                10,
                                "v-show",
                                _vm.upLoadType === 1
                              ),
                              expression: "_$s(10,'v-show',upLoadType===1)"
                            }
                          ],
                          attrs: { _i: 10 }
                        },
                        [
                          _c("view", {
                            staticClass: _vm._$s(
                              11,
                              "sc",
                              "upwarp-progress mescroll-rotate"
                            ),
                            style: _vm._$s(11, "s", {
                              "border-color": _vm.mescroll.optUp.textColor
                            }),
                            attrs: { _i: 11 }
                          }),
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(12, "sc", "upwarp-tip"),
                              attrs: { _i: 12 }
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  12,
                                  "t0-0",
                                  _vm._s(_vm.mescroll.optUp.textLoading)
                                )
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._$s(13, "i", _vm.upLoadType === 2)
                        ? _c(
                            "view",
                            {
                              staticClass: _vm._$s(13, "sc", "upwarp-nodata"),
                              attrs: { _i: 13 }
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  13,
                                  "t0-0",
                                  _vm._s(_vm.mescroll.optUp.textNoMore)
                                )
                              )
                            ]
                          )
                        : _vm._e()
                    ]
                  )
                : _vm._e()
            ],
            2
          )
        ]
      ),
      _c("mescroll-top", {
        attrs: { option: _vm.mescroll.optUp.toTop, _i: 14 },
        on: { click: _vm.toTopClick },
        model: {
          value: _vm._$s(14, "v-model", _vm.isShowToTop),
          callback: function($$v) {
            _vm.isShowToTop = $$v
          },
          expression: "isShowToTop"
        }
      })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 192 */
/*!**************************************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/components/mescroll-uni/mescroll-uni.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mescroll-uni.vue?vue&type=script&lang=js& */ 193);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9qQixDQUFnQixra0JBQUcsRUFBQyIsImZpbGUiOiIxOTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZXNjcm9sbC11bmkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZXNjcm9sbC11bmkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///192\n");

/***/ }),
/* 193 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/MY/Finance/nice-trade/trading-cat/components/mescroll-uni/mescroll-uni.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _mescrollUni = _interopRequireDefault(__webpack_require__(/*! ./mescroll-uni.js */ 177));\n\nvar _mescrollUniOption = _interopRequireDefault(__webpack_require__(/*! ./mescroll-uni-option.js */ 178));\n\nvar _mescrollEmpty = _interopRequireDefault(__webpack_require__(/*! ./components/mescroll-empty.vue */ 179));\n\nvar _mescrollTop = _interopRequireDefault(__webpack_require__(/*! ./components/mescroll-top.vue */ 184));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// 引入mescroll-uni.js,处理核心逻辑\n// 引入全局配置\n// 引入空布局组件\n// 引入回到顶部组件\nvar _default2 = { components: { MescrollEmpty: _mescrollEmpty.default, MescrollTop: _mescrollTop.default }, data: function data() {return { mescroll: { optDown: {}, optUp: {} }, // mescroll实例\n      viewId: 'id_' + Math.random().toString(36).substr(2), // 随机生成mescroll的id(不能数字开头,否则找不到元素)\n      downHight: 0, //下拉刷新: 容器高度\n      downRate: 0, // 下拉比率(inOffset: rate<1; outOffset: rate>=1)\n      downLoadType: 4, // 下拉刷新状态 （inOffset：1， outOffset：2， showLoading：3， endDownScroll：4）\n      upLoadType: 0, // 上拉加载状态：0（loading前），1（loading中），2（没有更多了）\n      isShowEmpty: false, // 是否显示空布局\n      isShowToTop: false, // 是否显示回到顶部按钮\n      scrollTop: 0, // 滚动条的位置\n      scrollAnim: false, // 是否开启滚动动画\n      windowTop: 0, // 可使用窗口的顶部位置\n      windowBottom: 0, // 可使用窗口的底部位置\n      windowHeight: 0, // 可使用窗口的高度\n      statusBarHeight: 0, // 状态栏高度\n      isSafearea: false, // 支持安全区\n      scrollToViewId: '' // 滚动到指定view的id\n    };}, props: { down: Object, // 下拉刷新的参数配置\n    up: Object, // 上拉加载的参数配置\n    top: [String, Number], // 下拉布局往下的偏移量 (支持20, \"20rpx\", \"20px\", \"20%\"格式的值, 其中纯数字则默认单位rpx, 百分比则相对于windowHeight)\n    topbar: Boolean, // top的偏移量是否加上状态栏高度, 默认false (使用场景:取消原生导航栏时,配置此项可自动加上状态栏高度的偏移量)\n    bottom: [String, Number], // 上拉布局往上的偏移量 (支持20, \"20rpx\", \"20px\", \"20%\"格式的值, 其中纯数字则默认单位rpx, 百分比则相对于windowHeight)\n    safearea: Boolean, // bottom的偏移量是否加上底部安全区的距离, 默认false (需要适配iPhoneX时使用)\n    fixed: { // 是否通过fixed固定mescroll的高度, 默认true\n      type: Boolean, default: function _default() {return true;} }, height: [String, Number] // 指定mescroll的高度, 此项有值,则不使用fixed. (支持20, \"20rpx\", \"20px\", \"20%\"格式的值, 其中纯数字则默认单位rpx, 百分比则相对于windowHeight)\n  }, computed: { // 是否使用fixed定位 (当height有值,则不使用)\n    isFixed: function isFixed() {return !this.height && this.fixed;}, // mescroll的高度\n    scrollHeight: function scrollHeight() {if (this.isFixed) {return \"auto\";} else if (this.height) {return this.toPx(this.height) + 'px';} else {return \"100%\";}}, // 下拉布局往下偏移的距离 (px)\n    numTop: function numTop() {return this.toPx(this.top) + (this.topbar ? this.statusBarHeight : 0);}, fixedTop: function fixedTop() {return this.isFixed ? this.numTop + this.windowTop + 'px' : 0;}, padTop: function padTop() {return !this.isFixed ? this.numTop + 'px' : 0;}, // 上拉布局往上偏移 (px)\n    numBottom: function numBottom() {return this.toPx(this.bottom);},\n    fixedBottom: function fixedBottom() {\n      return this.isFixed ? this.numBottom + this.windowBottom + 'px' : 0;\n    },\n    fixedBottomConstant: function fixedBottomConstant() {\n      return this.isSafearea ? \"calc(\" + this.fixedBottom + \" + constant(safe-area-inset-bottom))\" : this.fixedBottom;\n    },\n    fixedBottomEnv: function fixedBottomEnv() {\n      return this.isSafearea ? \"calc(\" + this.fixedBottom + \" + env(safe-area-inset-bottom))\" : this.fixedBottom;\n    },\n    padBottom: function padBottom() {\n      return !this.isFixed ? this.numBottom + 'px' : 0;\n    },\n    padBottomConstant: function padBottomConstant() {\n      return this.isSafearea ? \"calc(\" + this.padBottom + \" + constant(safe-area-inset-bottom))\" : this.padBottom;\n    },\n    padBottomEnv: function padBottomEnv() {\n      return this.isSafearea ? \"calc(\" + this.padBottom + \" + env(safe-area-inset-bottom))\" : this.padBottom;\n    },\n    // 是否为重置下拉的状态\n    isDownReset: function isDownReset() {\n      return this.downLoadType === 3 || this.downLoadType === 4;\n    },\n    // 过渡\n    transition: function transition() {\n      return this.isDownReset ? 'transform 300ms' : '';\n    },\n    translateY: function translateY() {\n      return this.downHight > 0 ? 'translateY(' + this.downHight + 'px)' : ''; // transform会使fixed失效,需注意把fixed元素写在mescroll之外\n    },\n    // 是否在加载中\n    isDownLoading: function isDownLoading() {\n      return this.downLoadType === 3;\n    },\n    // 旋转的角度\n    downRotate: function downRotate() {\n      return 'rotate(' + 360 * this.downRate + 'deg)';\n    },\n    // 文本提示\n    downText: function downText() {\n      switch (this.downLoadType) {\n        case 1:return this.mescroll.optDown.textInOffset;\n        case 2:return this.mescroll.optDown.textOutOffset;\n        case 3:return this.mescroll.optDown.textLoading;\n        case 4:return this.mescroll.optDown.textLoading;\n        default:return this.mescroll.optDown.textInOffset;}\n\n    } },\n\n  methods: {\n    //number,rpx,upx,px,% --> px的数值\n    toPx: function toPx(num) {\n      if (typeof num === \"string\") {\n        if (num.indexOf('px') !== -1) {\n          if (num.indexOf('rpx') !== -1) {// \"10rpx\"\n            num = num.replace('rpx', '');\n          } else if (num.indexOf('upx') !== -1) {// \"10upx\"\n            num = num.replace('upx', '');\n          } else {// \"10px\"\n            return Number(num.replace('px', ''));\n          }\n        } else if (num.indexOf('%') !== -1) {\n          // 传百分比,则相对于windowHeight,传\"10%\"则等于windowHeight的10%\n          var rate = Number(num.replace(\"%\", \"\")) / 100;\n          return this.windowHeight * rate;\n        }\n      }\n      return num ? uni.upx2px(Number(num)) : 0;\n    },\n    //注册列表滚动事件,用于下拉刷新和上拉加载\n    scroll: function scroll(e) {var _this = this;\n      this.mescroll.scroll(e.detail, function () {\n        _this.$emit('scroll', _this.mescroll); // 此时可直接通过 this.mescroll.scrollTop获取滚动条位置; this.mescroll.isScrollUp获取是否向上滑动\n      });\n    },\n    //注册列表touchstart事件,用于下拉刷新\n    touchstartEvent: function touchstartEvent(e) {\n      this.mescroll.touchstartEvent(e);\n    },\n    //注册列表touchmove事件,用于下拉刷新\n    touchmoveEvent: function touchmoveEvent(e) {\n      this.mescroll.touchmoveEvent(e);\n    },\n    //注册列表touchend事件,用于下拉刷新\n    touchendEvent: function touchendEvent(e) {\n      this.mescroll.touchendEvent(e);\n    },\n    // 点击空布局的按钮回调\n    emptyClick: function emptyClick() {\n      this.$emit('emptyclick', this.mescroll);\n    },\n    // 点击回到顶部的按钮回调\n    toTopClick: function toTopClick() {\n      this.mescroll.scrollTo(0, this.mescroll.optUp.toTop.duration); // 执行回到顶部\n      this.$emit('topclick', this.mescroll); // 派发点击回到顶部按钮的回调\n    },\n    // 更新滚动区域的高度 (使内容不满屏和到底,都可继续翻页)\n    setClientHeight: function setClientHeight() {var _this2 = this;\n      if (this.mescroll.getClientHeight(true) === 0 && !this.isExec) {\n        this.isExec = true; // 避免多次获取\n        this.$nextTick(function () {// 确保dom已渲染\n          var view = uni.createSelectorQuery().in(_this2).select('#' + _this2.viewId);\n          view.boundingClientRect(function (data) {\n            _this2.isExec = false;\n            if (data) {\n              _this2.mescroll.setClientHeight(data.height);\n            } else if (_this2.clientNum != 3) {// 极少部分情况,可能dom还未渲染完毕,递归获取,最多重试3次\n              _this2.clientNum = _this2.clientNum == null ? 1 : _this2.clientNum + 1;\n              setTimeout(function () {\n                _this2.setClientHeight();\n              }, _this2.clientNum * 100);\n            }\n          }).exec();\n        });\n      }\n    } },\n\n  // 使用created初始化mescroll对象; 如果用mounted部分css样式编译到H5会失效\n  created: function created() {\n    var vm = this;\n\n    var diyOption = {\n      // 下拉刷新的配置\n      down: {\n        inOffset: function inOffset(mescroll) {\n          vm.downLoadType = 1; // 下拉的距离进入offset范围内那一刻的回调 (自定义mescroll组件时,此行不可删)\n        },\n        outOffset: function outOffset(mescroll) {\n          vm.downLoadType = 2; // 下拉的距离大于offset那一刻的回调 (自定义mescroll组件时,此行不可删)\n        },\n        onMoving: function onMoving(mescroll, rate, downHight) {\n          // 下拉过程中的回调,滑动过程一直在执行;\n          vm.downHight = downHight; // 设置下拉区域的高度 (自定义mescroll组件时,此行不可删)\n          vm.downRate = rate; //下拉比率 (inOffset: rate<1; outOffset: rate>=1)\n        },\n        showLoading: function showLoading(mescroll, downHight) {\n          vm.downLoadType = 3; // 显示下拉刷新进度的回调 (自定义mescroll组件时,此行不可删)\n          vm.downHight = downHight; // 设置下拉区域的高度 (自定义mescroll组件时,此行不可删)\n        },\n        endDownScroll: function endDownScroll(mescroll) {\n          vm.downLoadType = 4; // 结束下拉 (自定义mescroll组件时,此行不可删)\n          vm.downHight = 0; // 设置下拉区域的高度 (自定义mescroll组件时,此行不可删)\n        },\n        // 派发下拉刷新的回调\n        callback: function callback(mescroll) {\n          vm.$emit('down', mescroll);\n        } },\n\n      // 上拉加载的配置\n      up: {\n        // 显示加载中的回调\n        showLoading: function showLoading() {\n          vm.upLoadType = 1;\n        },\n        // 显示无更多数据的回调\n        showNoMore: function showNoMore() {\n          vm.upLoadType = 2;\n        },\n        // 隐藏上拉加载的回调\n        hideUpScroll: function hideUpScroll() {\n          vm.upLoadType = 0;\n        },\n        // 空布局\n        empty: {\n          onShow: function onShow(isShow) {// 显示隐藏的回调\n            vm.isShowEmpty = isShow;\n          } },\n\n        // 回到顶部\n        toTop: {\n          onShow: function onShow(isShow) {// 显示隐藏的回调\n            vm.isShowToTop = isShow;\n          } },\n\n        // 派发上拉加载的回调\n        callback: function callback(mescroll) {\n          vm.$emit('up', mescroll);\n          // 更新容器的高度 (多mescroll的情况)\n          vm.setClientHeight();\n        } } };\n\n\n\n    _mescrollUni.default.extend(diyOption, _mescrollUniOption.default); // 混入全局的配置\n    var myOption = JSON.parse(JSON.stringify({\n      'down': vm.down,\n      'up': vm.up }));\n    // 深拷贝,避免对props的影响\n    _mescrollUni.default.extend(myOption, diyOption); // 混入具体界面的配置\n\n    // 初始化MeScroll对象\n    vm.mescroll = new _mescrollUni.default(myOption);\n    vm.mescroll.viewId = vm.viewId; // 附带id\n    // init回调mescroll对象\n    vm.$emit('init', vm.mescroll);\n\n    // 设置高度\n    var sys = uni.getSystemInfoSync();\n    if (sys.windowTop) vm.windowTop = sys.windowTop;\n    if (sys.windowBottom) vm.windowBottom = sys.windowBottom;\n    if (sys.windowHeight) vm.windowHeight = sys.windowHeight;\n    if (sys.statusBarHeight) vm.statusBarHeight = sys.statusBarHeight;\n    // 使down的bottomOffset生效\n    vm.mescroll.setBodyHeight(sys.windowHeight);\n\n    // 因为使用的是scrollview,这里需自定义scrollTo\n    vm.mescroll.resetScrollTo(function (y, t) {\n      vm.scrollAnim = t !== 0; // t为0,则不使用动画过渡\n      if (typeof y === 'string') {// 第一个参数如果为字符串,则使用scroll-into-view\n        vm.scrollToViewId = y;\n        return;\n      }\n      var curY = vm.mescroll.getScrollTop();\n      if (t === 0 || t === 300) {// 当t使用默认配置的300时,则使用系统自带的动画过渡\n        vm.scrollTop = curY;\n        vm.$nextTick(function () {\n          vm.scrollTop = y;\n        });\n      } else {\n        vm.mescroll.getStep(curY, y, function (step) {// 此写法可支持配置t\n          vm.scrollTop = step;\n        }, t);\n      }\n    });\n\n    // 具体的界面如果不配置up.toTop.safearea,则取本vue的safearea值\n    if (sys.platform == \"ios\") {\n      vm.isSafearea = vm.safearea;\n      if (vm.up && vm.up.toTop && vm.up.toTop.safearea != null) {} else {\n        vm.mescroll.optUp.toTop.safearea = vm.safearea;\n      }\n    } else {\n      vm.isSafearea = false;\n      vm.mescroll.optUp.toTop.safearea = false;\n    }\n  },\n  mounted: function mounted() {\n    // 设置容器的高度\n    this.setClientHeight();\n  } };exports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9tZXNjcm9sbC11bmkvbWVzY3JvbGwtdW5pLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0NBOztBQUVBOztBQUVBOztBQUVBLHlHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVBBO0FBRUE7QUFFQTtBQUVBO2dCQUdBLEVBQ0EsY0FDQSxxQ0FEQSxFQUVBLGlDQUZBLEVBREEsRUFLQSxJQUxBLGtCQUtBLENBQ0EsU0FDQSxvQ0FEQSxFQUNBO0FBQ0EsMERBRkEsRUFFQTtBQUNBLGtCQUhBLEVBR0E7QUFDQSxpQkFKQSxFQUlBO0FBQ0EscUJBTEEsRUFLQTtBQUNBLG1CQU5BLEVBTUE7QUFDQSx3QkFQQSxFQU9BO0FBQ0Esd0JBUkEsRUFRQTtBQUNBLGtCQVRBLEVBU0E7QUFDQSx1QkFWQSxFQVVBO0FBQ0Esa0JBWEEsRUFXQTtBQUNBLHFCQVpBLEVBWUE7QUFDQSxxQkFiQSxFQWFBO0FBQ0Esd0JBZEEsRUFjQTtBQUNBLHVCQWZBLEVBZUE7QUFDQSx3QkFoQkEsQ0FnQkE7QUFoQkEsTUFrQkEsQ0F4QkEsRUF5QkEsU0FDQSxZQURBLEVBQ0E7QUFDQSxjQUZBLEVBRUE7QUFDQSx5QkFIQSxFQUdBO0FBQ0EsbUJBSkEsRUFJQTtBQUNBLDRCQUxBLEVBS0E7QUFDQSxxQkFOQSxFQU1BO0FBQ0E7QUFDQSxtQkFEQSxFQUVBLE9BRkEsc0JBRUEsQ0FDQSxZQUNBLENBSkEsRUFQQSxFQWFBLHdCQWJBLENBYUE7QUFiQSxHQXpCQSxFQXdDQSxZQUNBO0FBQ0EsV0FGQSxxQkFFQSxDQUNBLGtDQUNBLENBSkEsRUFLQTtBQUNBLGdCQU5BLDBCQU1BLENBQ0EsbUJBQ0EsY0FDQSxDQUZBLE1BRUEsa0JBQ0EscUNBQ0EsQ0FGQSxNQUVBLENBQ0EsY0FDQSxDQUNBLENBZEEsRUFlQTtBQUNBLFVBaEJBLG9CQWdCQSxDQUNB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Q0Esa0JBTkEsd0JBTUE7QUFDQTtBQUNBLFNBUkE7QUFTQTtBQUNBLG9CQVZBLDBCQVVBO0FBQ0E7QUFDQSxTQVpBO0FBYUE7QUFDQTtBQUNBLGdCQURBLGtCQUNBLE1BREEsRUFDQTtBQUNBO0FBQ0EsV0FIQSxFQWRBOztBQW1CQTtBQUNBO0FBQ0EsZ0JBREEsa0JBQ0EsTUFEQSxFQUNBO0FBQ0E7QUFDQSxXQUhBLEVBcEJBOztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0E5QkEsRUE1QkE7Ozs7QUE4REEsdUVBakVBLENBaUVBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLGlCQUZBO0FBR0E7QUFDQSxxREF0RUEsQ0FzRUE7O0FBRUE7QUFDQTtBQUNBLG1DQTFFQSxDQTBFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkE7QUFHQSxPQUxBLE1BS0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxFQUVBLENBRkE7QUFHQTtBQUNBLEtBakJBOztBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUxBLE1BS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQS9TQTtBQWdUQSxTQWhUQSxxQkFnVEE7QUFDQTtBQUNBO0FBQ0EsR0FuVEEsRSIsImZpbGUiOiIxOTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJtZXNjcm9sbC11bmktd2FycFwiPlxyXG5cdFx0PHNjcm9sbC12aWV3IDppZD1cInZpZXdJZFwiIGNsYXNzPVwibWVzY3JvbGwtdW5pXCIgOmNsYXNzPVwieydtZXNjcm9sbC11bmktZml4ZWQnOmlzRml4ZWR9XCIgOnN0eWxlPVwieydoZWlnaHQnOnNjcm9sbEhlaWdodCwncGFkZGluZy10b3AnOnBhZFRvcCwncGFkZGluZy1ib3R0b20nOnBhZEJvdHRvbSwncGFkZGluZy1ib3R0b20nOnBhZEJvdHRvbUNvbnN0YW50LCdwYWRkaW5nLWJvdHRvbSc6cGFkQm90dG9tRW52LCd0b3AnOmZpeGVkVG9wLCdib3R0b20nOmZpeGVkQm90dG9tLCdib3R0b20nOmZpeGVkQm90dG9tQ29uc3RhbnQsJ2JvdHRvbSc6Zml4ZWRCb3R0b21FbnZ9XCIgOnNjcm9sbC10b3A9XCJzY3JvbGxUb3BcIiA6c2Nyb2xsLWludG8tdmlldz1cInNjcm9sbFRvVmlld0lkXCIgOnNjcm9sbC13aXRoLWFuaW1hdGlvbj1cInNjcm9sbEFuaW1cIiBAc2Nyb2xsPVwic2Nyb2xsXCIgQHRvdWNoc3RhcnQ9XCJ0b3VjaHN0YXJ0RXZlbnRcIiBAdG91Y2htb3ZlPVwidG91Y2htb3ZlRXZlbnRcIiBAdG91Y2hlbmQ9XCJ0b3VjaGVuZEV2ZW50XCIgQHRvdWNoY2FuY2VsPVwidG91Y2hlbmRFdmVudFwiIDpzY3JvbGwteT0naXNEb3duUmVzZXQnIDplbmFibGUtYmFjay10by10b3A9XCJ0cnVlXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibWVzY3JvbGwtdW5pLWNvbnRlbnRcIiA6c3R5bGU9XCJ7J3RyYW5zZm9ybSc6IHRyYW5zbGF0ZVksICd0cmFuc2l0aW9uJzogdHJhbnNpdGlvbn1cIj5cclxuXHRcdFx0XHQ8IS0tIOS4i+aLieWKoOi9veWMuuWfnyAo5pSv5LuY5a6d5bCP56iL5bqP5a2Q57uE5Lu25Lyg5Y+C57uZ5a2Q5a2Q57uE5Lu25LuN5oql5Y2V6aG55pWw5o2u5rWB55qE5byC5bi4LOaaguaXtuS4jemAmui/h21lc2Nyb2xsLWRvd27nu4Tku7blrp7njrApLS0+XHJcblx0XHRcdFx0PCEtLSA8bWVzY3JvbGwtZG93biA6b3B0aW9uPVwibWVzY3JvbGwub3B0RG93blwiIDp0eXBlPVwiZG93bkxvYWRUeXBlXCIgOnJhdGU9XCJkb3duUmF0ZVwiPjwvbWVzY3JvbGwtZG93bj4gLS0+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cIm1lc2Nyb2xsLm9wdERvd24udXNlXCIgY2xhc3M9XCJtZXNjcm9sbC1kb3dud2FycFwiIDpzdHlsZT1cInsnYmFja2dyb3VuZC1jb2xvcic6bWVzY3JvbGwub3B0RG93bi5iZ0NvbG9yLCdjb2xvcic6bWVzY3JvbGwub3B0RG93bi50ZXh0Q29sb3J9XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRvd253YXJwLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkb3dud2FycC1wcm9ncmVzc1wiIDpjbGFzcz1cInsnbWVzY3JvbGwtcm90YXRlJzogaXNEb3duTG9hZGluZ31cIiA6c3R5bGU9XCJ7J2JvcmRlci1jb2xvcic6bWVzY3JvbGwub3B0RG93bi50ZXh0Q29sb3IsICd0cmFuc2Zvcm0nOiBkb3duUm90YXRlfVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkb3dud2FycC10aXBcIj57e2Rvd25UZXh0fX08L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHQ8IS0tIOWIl+ihqOWGheWuuSAtLT5cclxuXHRcdFx0XHQ8c2xvdD48L3Nsb3Q+XHJcblxyXG5cdFx0XHRcdDwhLS0g56m65biD5bGAIC0tPlxyXG5cdFx0XHRcdDxtZXNjcm9sbC1lbXB0eSB2LWlmPVwiaXNTaG93RW1wdHlcIiA6b3B0aW9uPVwibWVzY3JvbGwub3B0VXAuZW1wdHlcIiBAZW1wdHljbGljaz1cImVtcHR5Q2xpY2tcIj48L21lc2Nyb2xsLWVtcHR5PlxyXG5cclxuXHRcdFx0XHQ8IS0tIOS4iuaLieWKoOi9veWMuuWfnyAo5LiL5ouJ5Yi35paw5pe25LiN5pi+56S6LCDmlK/ku5jlrp3lsI/nqIvluo/lrZDnu4Tku7bkvKDlj4Lnu5nlrZDlrZDnu4Tku7bku43miqXljZXpobnmlbDmja7mtYHnmoTlvILluLgs5pqC5pe25LiN6YCa6L+HbWVzY3JvbGwtdXDnu4Tku7blrp7njrApLS0+XHJcblx0XHRcdFx0PCEtLSA8bWVzY3JvbGwtdXAgdi1pZj1cIm1lc2Nyb2xsLm9wdFVwLnVzZSAmJiAhaXNEb3duTG9hZGluZ1wiIDpvcHRpb249XCJtZXNjcm9sbC5vcHRVcFwiIDp0eXBlPVwidXBMb2FkVHlwZVwiPjwvbWVzY3JvbGwtdXA+IC0tPlxyXG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJtZXNjcm9sbC5vcHRVcC51c2UgJiYgIWlzRG93bkxvYWRpbmdcIiBjbGFzcz1cIm1lc2Nyb2xsLXVwd2FycFwiIDpzdHlsZT1cInsnYmFja2dyb3VuZC1jb2xvcic6bWVzY3JvbGwub3B0VXAuYmdDb2xvciwnY29sb3InOm1lc2Nyb2xsLm9wdFVwLnRleHRDb2xvcn1cIj5cclxuXHRcdFx0XHRcdDwhLS0g5Yqg6L295LitICjmraTlpITkuI3og73nlKh2LWlmLOWQpuWImWFuZHJvaWTlsI/nqIvluo/lv6vpgJ/kuIrmi4nlj6/og73kvJrkuI3mlq3op6blj5HkuIrmi4nlm57osIMpIC0tPlxyXG5cdFx0XHRcdFx0PHZpZXcgdi1zaG93PVwidXBMb2FkVHlwZT09PTFcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1cHdhcnAtcHJvZ3Jlc3MgbWVzY3JvbGwtcm90YXRlXCIgOnN0eWxlPVwieydib3JkZXItY29sb3InOm1lc2Nyb2xsLm9wdFVwLnRleHRDb2xvcn1cIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXB3YXJwLXRpcFwiPnt7IG1lc2Nyb2xsLm9wdFVwLnRleHRMb2FkaW5nIH19PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PCEtLSDml6DmlbDmja4gLS0+XHJcblx0XHRcdFx0XHQ8dmlldyB2LWlmPVwidXBMb2FkVHlwZT09PTJcIiBjbGFzcz1cInVwd2FycC1ub2RhdGFcIj57eyBtZXNjcm9sbC5vcHRVcC50ZXh0Tm9Nb3JlIH19PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC9zY3JvbGwtdmlldz5cclxuXHJcblx0XHQ8IS0tIOWbnuWIsOmhtumDqOaMiemSriAoZml4ZWTlhYPntKAs6ZyA5YaZ5Zyoc2Nyb2xsLXZpZXflpJbpnaIs6Ziy5q2i5rua5Yqo55qE5pe25YCZ5oqW5YqoKS0tPlxyXG5cdFx0PG1lc2Nyb2xsLXRvcCB2LW1vZGVsPVwiaXNTaG93VG9Ub3BcIiA6b3B0aW9uPVwibWVzY3JvbGwub3B0VXAudG9Ub3BcIiBAY2xpY2s9XCJ0b1RvcENsaWNrXCI+PC9tZXNjcm9sbC10b3A+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHQvLyDlvJXlhaVtZXNjcm9sbC11bmkuanMs5aSE55CG5qC45b+D6YC76L6RXHJcblx0aW1wb3J0IE1lU2Nyb2xsIGZyb20gJy4vbWVzY3JvbGwtdW5pLmpzJztcclxuXHQvLyDlvJXlhaXlhajlsYDphY3nva5cclxuXHRpbXBvcnQgR2xvYmFsT3B0aW9uIGZyb20gJy4vbWVzY3JvbGwtdW5pLW9wdGlvbi5qcyc7XHJcblx0Ly8g5byV5YWl56m65biD5bGA57uE5Lu2XHJcblx0aW1wb3J0IE1lc2Nyb2xsRW1wdHkgZnJvbSAnLi9jb21wb25lbnRzL21lc2Nyb2xsLWVtcHR5LnZ1ZSc7XHJcblx0Ly8g5byV5YWl5Zue5Yiw6aG26YOo57uE5Lu2XHJcblx0aW1wb3J0IE1lc2Nyb2xsVG9wIGZyb20gJy4vY29tcG9uZW50cy9tZXNjcm9sbC10b3AudnVlJztcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRNZXNjcm9sbEVtcHR5LFxyXG5cdFx0XHRNZXNjcm9sbFRvcFxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bWVzY3JvbGw6IHtvcHREb3duOnt9LG9wdFVwOnt9fSwgLy8gbWVzY3JvbGzlrp7kvotcclxuXHRcdFx0XHR2aWV3SWQ6ICdpZF8nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIpLCAvLyDpmo/mnLrnlJ/miJBtZXNjcm9sbOeahGlkKOS4jeiDveaVsOWtl+W8gOWktCzlkKbliJnmib7kuI3liLDlhYPntKApXHJcblx0XHRcdFx0ZG93bkhpZ2h0OiAwLCAvL+S4i+aLieWIt+aWsDog5a655Zmo6auY5bqmXHJcblx0XHRcdFx0ZG93blJhdGU6IDAsIC8vIOS4i+aLieavlOeOhyhpbk9mZnNldDogcmF0ZTwxOyBvdXRPZmZzZXQ6IHJhdGU+PTEpXHJcblx0XHRcdFx0ZG93bkxvYWRUeXBlOiA0LCAvLyDkuIvmi4nliLfmlrDnirbmgIEg77yIaW5PZmZzZXTvvJox77yMIG91dE9mZnNldO+8mjLvvIwgc2hvd0xvYWRpbmfvvJoz77yMIGVuZERvd25TY3JvbGzvvJo077yJXHJcblx0XHRcdFx0dXBMb2FkVHlwZTogMCwgLy8g5LiK5ouJ5Yqg6L2954q25oCB77yaMO+8iGxvYWRpbmfliY3vvInvvIwx77yIbG9hZGluZ+S4re+8ie+8jDLvvIjmsqHmnInmm7TlpJrkuobvvIlcclxuXHRcdFx0XHRpc1Nob3dFbXB0eTogZmFsc2UsIC8vIOaYr+WQpuaYvuekuuepuuW4g+WxgFxyXG5cdFx0XHRcdGlzU2hvd1RvVG9wOiBmYWxzZSwgLy8g5piv5ZCm5pi+56S65Zue5Yiw6aG26YOo5oyJ6ZKuXHJcblx0XHRcdFx0c2Nyb2xsVG9wOiAwLCAvLyDmu5rliqjmnaHnmoTkvY3nva5cclxuXHRcdFx0XHRzY3JvbGxBbmltOiBmYWxzZSwgLy8g5piv5ZCm5byA5ZCv5rua5Yqo5Yqo55S7XHJcblx0XHRcdFx0d2luZG93VG9wOiAwLCAvLyDlj6/kvb/nlKjnqpflj6PnmoTpobbpg6jkvY3nva5cclxuXHRcdFx0XHR3aW5kb3dCb3R0b206IDAsIC8vIOWPr+S9v+eUqOeql+WPo+eahOW6lemDqOS9jee9rlxyXG5cdFx0XHRcdHdpbmRvd0hlaWdodDogMCwgLy8g5Y+v5L2/55So56qX5Y+j55qE6auY5bqmXHJcblx0XHRcdFx0c3RhdHVzQmFySGVpZ2h0OiAwLCAvLyDnirbmgIHmoI/pq5jluqZcclxuXHRcdFx0XHRpc1NhZmVhcmVhOiBmYWxzZSwgLy8g5pSv5oyB5a6J5YWo5Yy6XHJcblx0XHRcdFx0c2Nyb2xsVG9WaWV3SWQ6ICcnIC8vIOa7muWKqOWIsOaMh+WumnZpZXfnmoRpZFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0ZG93bjogT2JqZWN0LCAvLyDkuIvmi4nliLfmlrDnmoTlj4LmlbDphY3nva5cclxuXHRcdFx0dXA6IE9iamVjdCwgLy8g5LiK5ouJ5Yqg6L2955qE5Y+C5pWw6YWN572uXHJcblx0XHRcdHRvcDogW1N0cmluZywgTnVtYmVyXSwgLy8g5LiL5ouJ5biD5bGA5b6A5LiL55qE5YGP56e76YePICjmlK/mjIEyMCwgXCIyMHJweFwiLCBcIjIwcHhcIiwgXCIyMCVcIuagvOW8j+eahOWAvCwg5YW25Lit57qv5pWw5a2X5YiZ6buY6K6k5Y2V5L2NcnB4LCDnmb7liIbmr5TliJnnm7jlr7nkuo53aW5kb3dIZWlnaHQpXHJcblx0XHRcdHRvcGJhcjogQm9vbGVhbiwgLy8gdG9w55qE5YGP56e76YeP5piv5ZCm5Yqg5LiK54q25oCB5qCP6auY5bqmLCDpu5jorqRmYWxzZSAo5L2/55So5Zy65pmvOuWPlua2iOWOn+eUn+WvvOiIquagj+aXtizphY3nva7mraTpobnlj6/oh6rliqjliqDkuIrnirbmgIHmoI/pq5jluqbnmoTlgY/np7vph48pXHJcblx0XHRcdGJvdHRvbTogW1N0cmluZywgTnVtYmVyXSwgLy8g5LiK5ouJ5biD5bGA5b6A5LiK55qE5YGP56e76YePICjmlK/mjIEyMCwgXCIyMHJweFwiLCBcIjIwcHhcIiwgXCIyMCVcIuagvOW8j+eahOWAvCwg5YW25Lit57qv5pWw5a2X5YiZ6buY6K6k5Y2V5L2NcnB4LCDnmb7liIbmr5TliJnnm7jlr7nkuo53aW5kb3dIZWlnaHQpXHJcblx0XHRcdHNhZmVhcmVhOiBCb29sZWFuLCAvLyBib3R0b23nmoTlgY/np7vph4/mmK/lkKbliqDkuIrlupXpg6jlronlhajljLrnmoTot53nprssIOm7mOiupGZhbHNlICjpnIDopoHpgILphY1pUGhvbmVY5pe25L2/55SoKVxyXG5cdFx0XHRmaXhlZDogeyAvLyDmmK/lkKbpgJrov4dmaXhlZOWbuuWumm1lc2Nyb2xs55qE6auY5bqmLCDpu5jorqR0cnVlXHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0ICgpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0cnVlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRoZWlnaHQ6IFtTdHJpbmcsIE51bWJlcl0gLy8g5oyH5a6abWVzY3JvbGznmoTpq5jluqYsIOatpOmhueacieWAvCzliJnkuI3kvb/nlKhmaXhlZC4gKOaUr+aMgTIwLCBcIjIwcnB4XCIsIFwiMjBweFwiLCBcIjIwJVwi5qC85byP55qE5YC8LCDlhbbkuK3nuq/mlbDlrZfliJnpu5jorqTljZXkvY1ycHgsIOeZvuWIhuavlOWImeebuOWvueS6jndpbmRvd0hlaWdodClcclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHQvLyDmmK/lkKbkvb/nlKhmaXhlZOWumuS9jSAo5b2TaGVpZ2h05pyJ5YC8LOWImeS4jeS9v+eUqClcclxuXHRcdFx0aXNGaXhlZCgpe1xyXG5cdFx0XHRcdHJldHVybiAhdGhpcy5oZWlnaHQgJiYgdGhpcy5maXhlZFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBtZXNjcm9sbOeahOmrmOW6plxyXG5cdFx0XHRzY3JvbGxIZWlnaHQoKXtcclxuXHRcdFx0XHRpZiAodGhpcy5pc0ZpeGVkKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gXCJhdXRvXCJcclxuXHRcdFx0XHR9IGVsc2UgaWYodGhpcy5oZWlnaHQpe1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMudG9QeCh0aGlzLmhlaWdodCkgKyAncHgnXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRyZXR1cm4gXCIxMDAlXCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOS4i+aLieW4g+WxgOW+gOS4i+WBj+enu+eahOi3neemuyAocHgpXHJcblx0XHRcdG51bVRvcCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy50b1B4KHRoaXMudG9wKSArICh0aGlzLnRvcGJhciA/IHRoaXMuc3RhdHVzQmFySGVpZ2h0IDogMClcclxuXHRcdFx0fSxcclxuXHRcdFx0Zml4ZWRUb3AoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaXNGaXhlZCA/ICh0aGlzLm51bVRvcCArIHRoaXMud2luZG93VG9wKSArICdweCcgOiAwXHJcblx0XHRcdH0sXHJcblx0XHRcdHBhZFRvcCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gIXRoaXMuaXNGaXhlZCA/IHRoaXMubnVtVG9wICsgJ3B4JyA6IDBcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5LiK5ouJ5biD5bGA5b6A5LiK5YGP56e7IChweClcclxuXHRcdFx0bnVtQm90dG9tKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnRvUHgodGhpcy5ib3R0b20pXHJcblx0XHRcdH0sXHJcblx0XHRcdGZpeGVkQm90dG9tKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmlzRml4ZWQgPyAodGhpcy5udW1Cb3R0b20gKyB0aGlzLndpbmRvd0JvdHRvbSkgKyAncHgnIDogMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmaXhlZEJvdHRvbUNvbnN0YW50KCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaXNTYWZlYXJlYSA/IFwiY2FsYyhcIit0aGlzLmZpeGVkQm90dG9tK1wiICsgY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpXCIgOiB0aGlzLmZpeGVkQm90dG9tXHJcblx0XHRcdH0sXHJcblx0XHRcdGZpeGVkQm90dG9tRW52KCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaXNTYWZlYXJlYSA/IFwiY2FsYyhcIit0aGlzLmZpeGVkQm90dG9tK1wiICsgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKVwiIDogdGhpcy5maXhlZEJvdHRvbVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwYWRCb3R0b20oKSB7XHJcblx0XHRcdFx0cmV0dXJuICF0aGlzLmlzRml4ZWQgPyB0aGlzLm51bUJvdHRvbSArICdweCcgOiAwXHJcblx0XHRcdH0sXHJcblx0XHRcdHBhZEJvdHRvbUNvbnN0YW50KCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaXNTYWZlYXJlYSA/IFwiY2FsYyhcIit0aGlzLnBhZEJvdHRvbStcIiArIGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKVwiIDogdGhpcy5wYWRCb3R0b21cclxuXHRcdFx0fSxcclxuXHRcdFx0cGFkQm90dG9tRW52KCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaXNTYWZlYXJlYSA/IFwiY2FsYyhcIit0aGlzLnBhZEJvdHRvbStcIiArIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSlcIiA6IHRoaXMucGFkQm90dG9tXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaYr+WQpuS4uumHjee9ruS4i+aLieeahOeKtuaAgVxyXG5cdFx0XHRpc0Rvd25SZXNldCgpe1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmRvd25Mb2FkVHlwZT09PTMgfHwgdGhpcy5kb3duTG9hZFR5cGU9PT00XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOi/h+a4oVxyXG5cdFx0XHR0cmFuc2l0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmlzRG93blJlc2V0ID8gJ3RyYW5zZm9ybSAzMDBtcycgOiAnJztcclxuXHRcdFx0fSxcclxuXHRcdFx0dHJhbnNsYXRlWSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5kb3duSGlnaHQgPiAwID8gJ3RyYW5zbGF0ZVkoJyArIHRoaXMuZG93bkhpZ2h0ICsgJ3B4KScgOiAnJzsgLy8gdHJhbnNmb3Jt5Lya5L2/Zml4ZWTlpLHmlYgs6ZyA5rOo5oSP5oqKZml4ZWTlhYPntKDlhpnlnKhtZXNjcm9sbOS5i+WkllxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmK/lkKblnKjliqDovb3kuK1cclxuXHRcdFx0aXNEb3duTG9hZGluZygpe1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmRvd25Mb2FkVHlwZSA9PT0gM1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDml4vovaznmoTop5LluqZcclxuXHRcdFx0ZG93blJvdGF0ZSgpe1xyXG5cdFx0XHRcdHJldHVybiAncm90YXRlKCcgKyAzNjAgKiB0aGlzLmRvd25SYXRlICsgJ2RlZyknXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaWh+acrOaPkOekulxyXG5cdFx0XHRkb3duVGV4dCgpe1xyXG5cdFx0XHRcdHN3aXRjaCAodGhpcy5kb3duTG9hZFR5cGUpe1xyXG5cdFx0XHRcdFx0Y2FzZSAxOiByZXR1cm4gdGhpcy5tZXNjcm9sbC5vcHREb3duLnRleHRJbk9mZnNldDtcclxuXHRcdFx0XHRcdGNhc2UgMjogcmV0dXJuIHRoaXMubWVzY3JvbGwub3B0RG93bi50ZXh0T3V0T2Zmc2V0O1xyXG5cdFx0XHRcdFx0Y2FzZSAzOiByZXR1cm4gdGhpcy5tZXNjcm9sbC5vcHREb3duLnRleHRMb2FkaW5nO1xyXG5cdFx0XHRcdFx0Y2FzZSA0OiByZXR1cm4gdGhpcy5tZXNjcm9sbC5vcHREb3duLnRleHRMb2FkaW5nO1xyXG5cdFx0XHRcdFx0ZGVmYXVsdDogcmV0dXJuIHRoaXMubWVzY3JvbGwub3B0RG93bi50ZXh0SW5PZmZzZXQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQvL251bWJlcixycHgsdXB4LHB4LCUgLS0+IHB455qE5pWw5YC8XHJcblx0XHRcdHRvUHgobnVtKXtcclxuXHRcdFx0XHRpZih0eXBlb2YgbnVtID09PSBcInN0cmluZ1wiKXtcclxuXHRcdFx0XHRcdGlmIChudW0uaW5kZXhPZigncHgnKSAhPT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0aWYobnVtLmluZGV4T2YoJ3JweCcpICE9PSAtMSkgeyAvLyBcIjEwcnB4XCJcclxuXHRcdFx0XHRcdFx0XHRudW0gPSBudW0ucmVwbGFjZSgncnB4JywgJycpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYobnVtLmluZGV4T2YoJ3VweCcpICE9PSAtMSkgeyAvLyBcIjEwdXB4XCJcclxuXHRcdFx0XHRcdFx0XHRudW0gPSBudW0ucmVwbGFjZSgndXB4JywgJycpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgeyAvLyBcIjEwcHhcIlxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBOdW1iZXIobnVtLnJlcGxhY2UoJ3B4JywgJycpKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9ZWxzZSBpZiAobnVtLmluZGV4T2YoJyUnKSAhPT0gLTEpe1xyXG5cdFx0XHRcdFx0XHQvLyDkvKDnmb7liIbmr5Qs5YiZ55u45a+55LqOd2luZG93SGVpZ2h0LOS8oFwiMTAlXCLliJnnrYnkuo53aW5kb3dIZWlnaHTnmoQxMCVcclxuXHRcdFx0XHRcdFx0bGV0IHJhdGUgPSBOdW1iZXIobnVtLnJlcGxhY2UoXCIlXCIsXCJcIikpIC8gMTAwXHJcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLndpbmRvd0hlaWdodCAqIHJhdGVcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIG51bSA/IHVuaS51cHgycHgoTnVtYmVyKG51bSkpIDogMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+azqOWGjOWIl+ihqOa7muWKqOS6i+S7tiznlKjkuo7kuIvmi4nliLfmlrDlkozkuIrmi4nliqDovb1cclxuXHRcdFx0c2Nyb2xsKGUpIHtcclxuXHRcdFx0XHR0aGlzLm1lc2Nyb2xsLnNjcm9sbChlLmRldGFpbCwgKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnc2Nyb2xsJywgdGhpcy5tZXNjcm9sbCkgLy8g5q2k5pe25Y+v55u05o6l6YCa6L+HIHRoaXMubWVzY3JvbGwuc2Nyb2xsVG9w6I635Y+W5rua5Yqo5p2h5L2N572uOyB0aGlzLm1lc2Nyb2xsLmlzU2Nyb2xsVXDojrflj5bmmK/lkKblkJHkuIrmu5HliqhcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+azqOWGjOWIl+ihqHRvdWNoc3RhcnTkuovku7Ys55So5LqO5LiL5ouJ5Yi35pawXHJcblx0XHRcdHRvdWNoc3RhcnRFdmVudChlKSB7XHJcblx0XHRcdFx0dGhpcy5tZXNjcm9sbC50b3VjaHN0YXJ0RXZlbnQoZSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5rOo5YaM5YiX6KGodG91Y2htb3Zl5LqL5Lu2LOeUqOS6juS4i+aLieWIt+aWsFxyXG5cdFx0XHR0b3VjaG1vdmVFdmVudChlKSB7XHJcblx0XHRcdFx0dGhpcy5tZXNjcm9sbC50b3VjaG1vdmVFdmVudChlKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/ms6jlhozliJfooah0b3VjaGVuZOS6i+S7tiznlKjkuo7kuIvmi4nliLfmlrBcclxuXHRcdFx0dG91Y2hlbmRFdmVudChlKSB7XHJcblx0XHRcdFx0dGhpcy5tZXNjcm9sbC50b3VjaGVuZEV2ZW50KGUpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDngrnlh7vnqbrluIPlsYDnmoTmjInpkq7lm57osINcclxuXHRcdFx0ZW1wdHlDbGljaygpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdlbXB0eWNsaWNrJywgdGhpcy5tZXNjcm9sbClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g54K55Ye75Zue5Yiw6aG26YOo55qE5oyJ6ZKu5Zue6LCDXHJcblx0XHRcdHRvVG9wQ2xpY2soKSB7XHJcblx0XHRcdFx0dGhpcy5tZXNjcm9sbC5zY3JvbGxUbygwLCB0aGlzLm1lc2Nyb2xsLm9wdFVwLnRvVG9wLmR1cmF0aW9uKTsgLy8g5omn6KGM5Zue5Yiw6aG26YOoXHJcblx0XHRcdFx0dGhpcy4kZW1pdCgndG9wY2xpY2snLCB0aGlzLm1lc2Nyb2xsKTsgLy8g5rS+5Y+R54K55Ye75Zue5Yiw6aG26YOo5oyJ6ZKu55qE5Zue6LCDXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOabtOaWsOa7muWKqOWMuuWfn+eahOmrmOW6piAo5L2/5YaF5a655LiN5ruh5bGP5ZKM5Yiw5bqVLOmDveWPr+e7p+e7ree/u+mhtSlcclxuXHRcdFx0c2V0Q2xpZW50SGVpZ2h0KCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLm1lc2Nyb2xsLmdldENsaWVudEhlaWdodCh0cnVlKSA9PT0gMCAmJiAhdGhpcy5pc0V4ZWMpIHtcclxuXHRcdFx0XHRcdHRoaXMuaXNFeGVjID0gdHJ1ZTsgLy8g6YG/5YWN5aSa5qyh6I635Y+WXHJcblx0XHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7IC8vIOehruS/nWRvbeW3sua4suafk1xyXG5cdFx0XHRcdFx0XHRsZXQgdmlldyA9IHVuaS5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuaW4odGhpcykuc2VsZWN0KCcjJyArIHRoaXMudmlld0lkKTtcclxuXHRcdFx0XHRcdFx0dmlldy5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5pc0V4ZWMgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoZGF0YSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5tZXNjcm9sbC5zZXRDbGllbnRIZWlnaHQoZGF0YS5oZWlnaHQpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5jbGllbnROdW0gIT0gMykgeyAvLyDmnoHlsJHpg6jliIbmg4XlhrUs5Y+v6IO9ZG9t6L+Y5pyq5riy5p+T5a6M5q+VLOmAkuW9kuiOt+WPlizmnIDlpJrph43or5Uz5qyhXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmNsaWVudE51bSA9IHRoaXMuY2xpZW50TnVtID09IG51bGwgPyAxIDogdGhpcy5jbGllbnROdW0gKyAxO1xyXG5cdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0Q2xpZW50SGVpZ2h0KClcclxuXHRcdFx0XHRcdFx0XHRcdH0sIHRoaXMuY2xpZW50TnVtICogMTAwKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSkuZXhlYygpO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHQvLyDkvb/nlKhjcmVhdGVk5Yid5aeL5YyWbWVzY3JvbGzlr7nosaE7IOWmguaenOeUqG1vdW50ZWTpg6jliIZjc3PmoLflvI/nvJbor5HliLBINeS8muWkseaViFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0bGV0IHZtID0gdGhpcztcclxuXHJcblx0XHRcdGxldCBkaXlPcHRpb24gPSB7XHJcblx0XHRcdFx0Ly8g5LiL5ouJ5Yi35paw55qE6YWN572uXHJcblx0XHRcdFx0ZG93bjoge1xyXG5cdFx0XHRcdFx0aW5PZmZzZXQobWVzY3JvbGwpIHtcclxuXHRcdFx0XHRcdFx0dm0uZG93bkxvYWRUeXBlID0gMTsgLy8g5LiL5ouJ55qE6Led56a76L+b5YWlb2Zmc2V06IyD5Zu05YaF6YKj5LiA5Yi755qE5Zue6LCDICjoh6rlrprkuYltZXNjcm9sbOe7hOS7tuaXtizmraTooYzkuI3lj6/liKApXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0b3V0T2Zmc2V0KG1lc2Nyb2xsKSB7XHJcblx0XHRcdFx0XHRcdHZtLmRvd25Mb2FkVHlwZSA9IDI7IC8vIOS4i+aLieeahOi3neemu+Wkp+S6jm9mZnNldOmCo+S4gOWIu+eahOWbnuiwgyAo6Ieq5a6a5LmJbWVzY3JvbGznu4Tku7bml7Ys5q2k6KGM5LiN5Y+v5YigKVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdG9uTW92aW5nKG1lc2Nyb2xsLCByYXRlLCBkb3duSGlnaHQpIHtcclxuXHRcdFx0XHRcdFx0Ly8g5LiL5ouJ6L+H56iL5Lit55qE5Zue6LCDLOa7keWKqOi/h+eoi+S4gOebtOWcqOaJp+ihjDtcclxuXHRcdFx0XHRcdFx0dm0uZG93bkhpZ2h0ID0gZG93bkhpZ2h0OyAvLyDorr7nva7kuIvmi4nljLrln5/nmoTpq5jluqYgKOiHquWumuS5iW1lc2Nyb2xs57uE5Lu25pe2LOatpOihjOS4jeWPr+WIoClcclxuXHRcdFx0XHRcdFx0dm0uZG93blJhdGUgPSByYXRlOyAvL+S4i+aLieavlOeOhyAoaW5PZmZzZXQ6IHJhdGU8MTsgb3V0T2Zmc2V0OiByYXRlPj0xKVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHNob3dMb2FkaW5nKG1lc2Nyb2xsLCBkb3duSGlnaHQpIHtcclxuXHRcdFx0XHRcdFx0dm0uZG93bkxvYWRUeXBlID0gMzsgLy8g5pi+56S65LiL5ouJ5Yi35paw6L+b5bqm55qE5Zue6LCDICjoh6rlrprkuYltZXNjcm9sbOe7hOS7tuaXtizmraTooYzkuI3lj6/liKApXHJcblx0XHRcdFx0XHRcdHZtLmRvd25IaWdodCA9IGRvd25IaWdodDsgLy8g6K6+572u5LiL5ouJ5Yy65Z+f55qE6auY5bqmICjoh6rlrprkuYltZXNjcm9sbOe7hOS7tuaXtizmraTooYzkuI3lj6/liKApXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZW5kRG93blNjcm9sbChtZXNjcm9sbCkge1xyXG5cdFx0XHRcdFx0XHR2bS5kb3duTG9hZFR5cGUgPSA0OyAvLyDnu5PmnZ/kuIvmi4kgKOiHquWumuS5iW1lc2Nyb2xs57uE5Lu25pe2LOatpOihjOS4jeWPr+WIoClcclxuXHRcdFx0XHRcdFx0dm0uZG93bkhpZ2h0ID0gMDsgLy8g6K6+572u5LiL5ouJ5Yy65Z+f55qE6auY5bqmICjoh6rlrprkuYltZXNjcm9sbOe7hOS7tuaXtizmraTooYzkuI3lj6/liKApXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Ly8g5rS+5Y+R5LiL5ouJ5Yi35paw55qE5Zue6LCDXHJcblx0XHRcdFx0XHRjYWxsYmFjazogZnVuY3Rpb24obWVzY3JvbGwpIHtcclxuXHRcdFx0XHRcdFx0dm0uJGVtaXQoJ2Rvd24nLCBtZXNjcm9sbClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIOS4iuaLieWKoOi9veeahOmFjee9rlxyXG5cdFx0XHRcdHVwOiB7XHJcblx0XHRcdFx0XHQvLyDmmL7npLrliqDovb3kuK3nmoTlm57osINcclxuXHRcdFx0XHRcdHNob3dMb2FkaW5nKCkge1xyXG5cdFx0XHRcdFx0XHR2bS51cExvYWRUeXBlID0gMTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQvLyDmmL7npLrml6Dmm7TlpJrmlbDmja7nmoTlm57osINcclxuXHRcdFx0XHRcdHNob3dOb01vcmUoKSB7XHJcblx0XHRcdFx0XHRcdHZtLnVwTG9hZFR5cGUgPSAyO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdC8vIOmakOiXj+S4iuaLieWKoOi9veeahOWbnuiwg1xyXG5cdFx0XHRcdFx0aGlkZVVwU2Nyb2xsKCkge1xyXG5cdFx0XHRcdFx0XHR2bS51cExvYWRUeXBlID0gMDtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQvLyDnqbrluIPlsYBcclxuXHRcdFx0XHRcdGVtcHR5OiB7XHJcblx0XHRcdFx0XHRcdG9uU2hvdyhpc1Nob3cpIHsgLy8g5pi+56S66ZqQ6JeP55qE5Zue6LCDXHJcblx0XHRcdFx0XHRcdFx0dm0uaXNTaG93RW1wdHkgPSBpc1Nob3c7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQvLyDlm57liLDpobbpg6hcclxuXHRcdFx0XHRcdHRvVG9wOiB7XHJcblx0XHRcdFx0XHRcdG9uU2hvdyhpc1Nob3cpIHsgLy8g5pi+56S66ZqQ6JeP55qE5Zue6LCDXHJcblx0XHRcdFx0XHRcdFx0dm0uaXNTaG93VG9Ub3AgPSBpc1Nob3c7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQvLyDmtL7lj5HkuIrmi4nliqDovb3nmoTlm57osINcclxuXHRcdFx0XHRcdGNhbGxiYWNrOiBmdW5jdGlvbihtZXNjcm9sbCkge1xyXG5cdFx0XHRcdFx0XHR2bS4kZW1pdCgndXAnLCBtZXNjcm9sbCk7XHJcblx0XHRcdFx0XHRcdC8vIOabtOaWsOWuueWZqOeahOmrmOW6piAo5aSabWVzY3JvbGznmoTmg4XlhrUpXHJcblx0XHRcdFx0XHRcdHZtLnNldENsaWVudEhlaWdodCgpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRNZVNjcm9sbC5leHRlbmQoZGl5T3B0aW9uLCBHbG9iYWxPcHRpb24pOyAvLyDmt7flhaXlhajlsYDnmoTphY3nva5cclxuXHRcdFx0bGV0IG15T3B0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh7XHJcblx0XHRcdFx0J2Rvd24nOiB2bS5kb3duLFxyXG5cdFx0XHRcdCd1cCc6IHZtLnVwXHJcblx0XHRcdH0pKSAvLyDmt7Hmi7fotJ0s6YG/5YWN5a+5cHJvcHPnmoTlvbHlk41cclxuXHRcdFx0TWVTY3JvbGwuZXh0ZW5kKG15T3B0aW9uLCBkaXlPcHRpb24pOyAvLyDmt7flhaXlhbfkvZPnlYzpnaLnmoTphY3nva5cclxuXHJcblx0XHRcdC8vIOWIneWni+WMlk1lU2Nyb2xs5a+56LGhXHJcblx0XHRcdHZtLm1lc2Nyb2xsID0gbmV3IE1lU2Nyb2xsKG15T3B0aW9uKTtcclxuXHRcdFx0dm0ubWVzY3JvbGwudmlld0lkID0gdm0udmlld0lkOyAvLyDpmYTluKZpZFxyXG5cdFx0XHQvLyBpbml05Zue6LCDbWVzY3JvbGzlr7nosaFcclxuXHRcdFx0dm0uJGVtaXQoJ2luaXQnLCB2bS5tZXNjcm9sbCk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyDorr7nva7pq5jluqZcclxuXHRcdFx0Y29uc3Qgc3lzID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblx0XHRcdGlmKHN5cy53aW5kb3dUb3ApIHZtLndpbmRvd1RvcCA9IHN5cy53aW5kb3dUb3A7XHJcblx0XHRcdGlmKHN5cy53aW5kb3dCb3R0b20pIHZtLndpbmRvd0JvdHRvbSA9IHN5cy53aW5kb3dCb3R0b207XHJcblx0XHRcdGlmKHN5cy53aW5kb3dIZWlnaHQpIHZtLndpbmRvd0hlaWdodCA9IHN5cy53aW5kb3dIZWlnaHQ7XHJcblx0XHRcdGlmKHN5cy5zdGF0dXNCYXJIZWlnaHQpIHZtLnN0YXR1c0JhckhlaWdodCA9IHN5cy5zdGF0dXNCYXJIZWlnaHQ7XHJcblx0XHRcdC8vIOS9v2Rvd27nmoRib3R0b21PZmZzZXTnlJ/mlYhcclxuXHRcdFx0dm0ubWVzY3JvbGwuc2V0Qm9keUhlaWdodChzeXMud2luZG93SGVpZ2h0KTtcclxuXHJcblx0XHRcdC8vIOWboOS4uuS9v+eUqOeahOaYr3Njcm9sbHZpZXcs6L+Z6YeM6ZyA6Ieq5a6a5LmJc2Nyb2xsVG9cclxuXHRcdFx0dm0ubWVzY3JvbGwucmVzZXRTY3JvbGxUbygoeSwgdCkgPT4ge1xyXG5cdFx0XHRcdHZtLnNjcm9sbEFuaW0gPSAodCAhPT0gMCk7IC8vIHTkuLowLOWImeS4jeS9v+eUqOWKqOeUu+i/h+a4oVxyXG5cdFx0XHRcdGlmKHR5cGVvZiB5ID09PSAnc3RyaW5nJyl7IC8vIOesrOS4gOS4quWPguaVsOWmguaenOS4uuWtl+espuS4sizliJnkvb/nlKhzY3JvbGwtaW50by12aWV3XHJcblx0XHRcdFx0XHR2bS5zY3JvbGxUb1ZpZXdJZCA9IHk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBjdXJZID0gdm0ubWVzY3JvbGwuZ2V0U2Nyb2xsVG9wKClcclxuXHRcdFx0XHRpZiAodCA9PT0gMCB8fCB0ID09PSAzMDApIHsgLy8g5b2TdOS9v+eUqOm7mOiupOmFjee9rueahDMwMOaXtizliJnkvb/nlKjns7vnu5/oh6rluKbnmoTliqjnlLvov4fmuKFcclxuXHRcdFx0XHRcdHZtLnNjcm9sbFRvcCA9IGN1clk7XHJcblx0XHRcdFx0XHR2bS4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdHZtLnNjcm9sbFRvcCA9IHlcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHZtLm1lc2Nyb2xsLmdldFN0ZXAoY3VyWSwgeSwgc3RlcCA9PiB7IC8vIOatpOWGmeazleWPr+aUr+aMgemFjee9rnRcclxuXHRcdFx0XHRcdFx0dm0uc2Nyb2xsVG9wID0gc3RlcFxyXG5cdFx0XHRcdFx0fSwgdClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdFxyXG5cdFx0XHQvLyDlhbfkvZPnmoTnlYzpnaLlpoLmnpzkuI3phY3nva51cC50b1RvcC5zYWZlYXJlYSzliJnlj5bmnKx2dWXnmoRzYWZlYXJlYeWAvFxyXG5cdFx0XHRpZihzeXMucGxhdGZvcm0gPT0gXCJpb3NcIil7XHJcblx0XHRcdFx0dm0uaXNTYWZlYXJlYSA9IHZtLnNhZmVhcmVhO1xyXG5cdFx0XHRcdGlmICh2bS51cCAmJiB2bS51cC50b1RvcCAmJiB2bS51cC50b1RvcC5zYWZlYXJlYSAhPSBudWxsKSB7fSBlbHNlIHtcclxuXHRcdFx0XHRcdHZtLm1lc2Nyb2xsLm9wdFVwLnRvVG9wLnNhZmVhcmVhID0gdm0uc2FmZWFyZWE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR2bS5pc1NhZmVhcmVhID0gZmFsc2VcclxuXHRcdFx0XHR2bS5tZXNjcm9sbC5vcHRVcC50b1RvcC5zYWZlYXJlYSA9IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHQvLyDorr7nva7lrrnlmajnmoTpq5jluqZcclxuXHRcdFx0dGhpcy5zZXRDbGllbnRIZWlnaHQoKVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0QGltcG9ydCBcIi4vbWVzY3JvbGwtdW5pLmNzc1wiO1xyXG5cdEBpbXBvcnQgXCIuL2NvbXBvbmVudHMvbWVzY3JvbGwtZG93bi5jc3NcIjtcclxuXHRAaW1wb3J0ICcuL2NvbXBvbmVudHMvbWVzY3JvbGwtdXAuY3NzJztcclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///193\n");

/***/ }),
/* 194 */
/*!***************************************************************************************!*\
  !*** C:/MY/Finance/nice-trade/trading-cat/node_modules/vue-moment/dist/vue-moment.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, __f__) {(function (global, factory) {
   true ? factory(exports) :
  undefined;
})(this, function (exports) {'use strict';

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function commonjsRequire() {
    throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
  }



  function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var moment = createCommonjsModule(function (module, exports) {
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};

    //! moment.js

    (function (global, factory) {
      _typeof(exports) === 'object' && 'object' !== 'undefined' ? module.exports = factory() :  false ? undefined : global.moment = factory();
    })(commonjsGlobal, function () {
      var hookCallback;

      function hooks() {
        return hookCallback.apply(null, arguments);
      }

      // This is done to register the method called with moment()
      // without creating circular dependencies.
      function setHookCallback(callback) {
        hookCallback = callback;
      }

      function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
      }

      function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
      }

      function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
          return Object.getOwnPropertyNames(obj).length === 0;
        } else {
          var k;
          for (k in obj) {
            if (obj.hasOwnProperty(k)) {
              return false;
            }
          }
          return true;
        }
      }

      function isUndefined(input) {
        return input === void 0;
      }

      function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
      }

      function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
      }

      function map(arr, fn) {
        var res = [],
        i;
        for (i = 0; i < arr.length; ++i) {
          res.push(fn(arr[i], i));
        }
        return res;
      }

      function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
      }

      function extend(a, b) {
        for (var i in b) {
          if (hasOwnProp(b, i)) {
            a[i] = b[i];
          }
        }

        if (hasOwnProp(b, 'toString')) {
          a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
          a.valueOf = b.valueOf;
        }

        return a;
      }

      function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
      }

      function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
          empty: false,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: false,
          invalidMonth: null,
          invalidFormat: false,
          userInvalidated: false,
          iso: false,
          parsedDateParts: [],
          meridiem: null,
          rfc2822: false,
          weekdayMismatch: false };

      }

      function getParsingFlags(m) {
        if (m._pf == null) {
          m._pf = defaultParsingFlags();
        }
        return m._pf;
      }

      var some;
      if (Array.prototype.some) {
        some = Array.prototype.some;
      } else {
        some = function some(fun) {
          var t = Object(this);
          var len = t.length >>> 0;

          for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
              return true;
            }
          }

          return false;
        };
      }

      function isValid(m) {
        if (m._isValid == null) {
          var flags = getParsingFlags(m);
          var parsedParts = some.call(flags.parsedDateParts, function (i) {
            return i != null;
          });
          var isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);

          if (m._strict) {
            isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
          }

          if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
          } else {
            return isNowValid;
          }
        }
        return m._isValid;
      }

      function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) {
          extend(getParsingFlags(m), flags);
        } else {
          getParsingFlags(m).userInvalidated = true;
        }

        return m;
      }

      // Plugins that add properties should also add the key here (null value),
      // so we can properly clone ourselves.
      var momentProperties = hooks.momentProperties = [];

      function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
          to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
          to._i = from._i;
        }
        if (!isUndefined(from._f)) {
          to._f = from._f;
        }
        if (!isUndefined(from._l)) {
          to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
          to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
          to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
          to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
          to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
          to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
          to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
          for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
              to[prop] = val;
            }
          }
        }

        return to;
      }

      var updateInProgress = false;

      // Moment prototype object
      function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
          this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
          updateInProgress = true;
          hooks.updateOffset(this);
          updateInProgress = false;
        }
      }

      function isMoment(obj) {
        return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
      }

      function absFloor(number) {
        if (number < 0) {
          // -0 -> 0
          return Math.ceil(number) || 0;
        } else {
          return Math.floor(number);
        }
      }

      function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
        value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
          value = absFloor(coercedNumber);
        }

        return value;
      }

      // compare two arrays, return the number of differences
      function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
        for (i = 0; i < len; i++) {
          if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
            diffs++;
          }
        }
        return diffs + lengthDiff;
      }

      function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
          __f__("warn", 'Deprecation warning: ' + msg, " at node_modules/vue-moment/dist/vue-moment.js:296");
        }
      }

      function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
          if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
          }
          if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
              arg = '';
              if (_typeof(arguments[i]) === 'object') {
                arg += '\n[' + i + '] ';
                for (var key in arguments[0]) {
                  arg += key + ': ' + arguments[0][key] + ', ';
                }
                arg = arg.slice(0, -2); // Remove trailing comma and space
              } else {
                arg = arguments[i];
              }
              args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
            firstTime = false;
          }
          return fn.apply(this, arguments);
        }, fn);
      }

      var deprecations = {};

      function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
          warn(msg);
          deprecations[name] = true;
        }
      }

      hooks.suppressDeprecationWarnings = false;
      hooks.deprecationHandler = null;

      function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
      }

      function set(config) {
        var prop, i;
        for (i in config) {
          prop = config[i];
          if (isFunction(prop)) {
            this[i] = prop;
          } else {
            this['_' + i] = prop;
          }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
      }

      function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig),
        prop;
        for (prop in childConfig) {
          if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
              res[prop] = {};
              extend(res[prop], parentConfig[prop]);
              extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
              res[prop] = childConfig[prop];
            } else {
              delete res[prop];
            }
          }
        }
        for (prop in parentConfig) {
          if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
          }
        }
        return res;
      }

      function Locale(config) {
        if (config != null) {
          this.set(config);
        }
      }

      var keys;

      if (Object.keys) {
        keys = Object.keys;
      } else {
        keys = function keys(obj) {
          var i,
          res = [];
          for (i in obj) {
            if (hasOwnProp(obj, i)) {
              res.push(i);
            }
          }
          return res;
        };
      }

      var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L' };


      function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
      }

      var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A' };


      function longDateFormat(key) {
        var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
          return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
          return val.slice(1);
        });

        return this._longDateFormat[key];
      }

      var defaultInvalidDate = 'Invalid date';

      function invalidDate() {
        return this._invalidDate;
      }

      var defaultOrdinal = '%d';
      var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

      function ordinal(number) {
        return this._ordinal.replace('%d', number);
      }

      var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years' };


      function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
      }

      function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
      }

      var aliases = {};

      function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
      }

      function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
      }

      function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
        normalizedProp,
        prop;

        for (prop in inputObject) {
          if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
              normalizedInput[normalizedProp] = inputObject[prop];
            }
          }
        }

        return normalizedInput;
      }

      var priorities = {};

      function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
      }

      function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
          units.push({ unit: u, priority: priorities[u] });
        }
        units.sort(function (a, b) {
          return a.priority - b.priority;
        });
        return units;
      }

      function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
        return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
      }

      var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

      var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

      var formatFunctions = {};

      var formatTokenFunctions = {};

      // token:    'M'
      // padded:   ['MM', 2]
      // ordinal:  'Mo'
      // callback: function () { this.month() + 1 }
      function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
          func = function func() {
            return this[callback]();
          };
        }
        if (token) {
          formatTokenFunctions[token] = func;
        }
        if (padded) {
          formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
          };
        }
        if (ordinal) {
          formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
          };
        }
      }

      function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
          return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
      }

      function makeFormatFunction(format) {
        var array = format.match(formattingTokens),
        i,
        length;

        for (i = 0, length = array.length; i < length; i++) {
          if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
          } else {
            array[i] = removeFormattingTokens(array[i]);
          }
        }

        return function (mom) {
          var output = '',
          i;
          for (i = 0; i < length; i++) {
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
          }
          return output;
        };
      }

      // format date using native date object
      function formatMoment(m, format) {
        if (!m.isValid()) {
          return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
      }

      function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
          return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
          format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
          localFormattingTokens.lastIndex = 0;
          i -= 1;
        }

        return format;
      }

      var match1 = /\d/; //       0 - 9
      var match2 = /\d\d/; //      00 - 99
      var match3 = /\d{3}/; //     000 - 999
      var match4 = /\d{4}/; //    0000 - 9999
      var match6 = /[+-]?\d{6}/; // -999999 - 999999
      var match1to2 = /\d\d?/; //       0 - 99
      var match3to4 = /\d\d\d\d?/; //     999 - 9999
      var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999
      var match1to3 = /\d{1,3}/; //       0 - 999
      var match1to4 = /\d{1,4}/; //       0 - 9999
      var match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999

      var matchUnsigned = /\d+/; //       0 - inf
      var matchSigned = /[+-]?\d+/; //    -inf - inf

      var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
      var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

      var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

      // any word (or two) characters or numbers including two/three word month in arabic.
      // includes scottish gaelic two word and hyphenated months
      var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

      var regexes = {};

      function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
          return isStrict && strictRegex ? strictRegex : regex;
        };
      }

      function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
          return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
      }

      // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
      function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
          return p1 || p2 || p3 || p4;
        }));
      }

      function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      }

      var tokens = {};

      function addParseToken(token, callback) {
        var i,
        func = callback;
        if (typeof token === 'string') {
          token = [token];
        }
        if (isNumber(callback)) {
          func = function func(input, array) {
            array[callback] = toInt(input);
          };
        }
        for (i = 0; i < token.length; i++) {
          tokens[token[i]] = func;
        }
      }

      function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
          config._w = config._w || {};
          callback(input, config._w, config, token);
        });
      }

      function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
          tokens[token](input, config._a, config, token);
        }
      }

      var YEAR = 0;
      var MONTH = 1;
      var DATE = 2;
      var HOUR = 3;
      var MINUTE = 4;
      var SECOND = 5;
      var MILLISECOND = 6;
      var WEEK = 7;
      var WEEKDAY = 8;

      // FORMATTING

      addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
      });

      addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
      });

      addFormatToken(0, ['YYYY', 4], 0, 'year');
      addFormatToken(0, ['YYYYY', 5], 0, 'year');
      addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

      // ALIASES

      addUnitAlias('year', 'y');

      // PRIORITIES

      addUnitPriority('year', 1);

      // PARSING

      addRegexToken('Y', matchSigned);
      addRegexToken('YY', match1to2, match2);
      addRegexToken('YYYY', match1to4, match4);
      addRegexToken('YYYYY', match1to6, match6);
      addRegexToken('YYYYYY', match1to6, match6);

      addParseToken(['YYYYY', 'YYYYYY'], YEAR);
      addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
      });
      addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
      });
      addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
      });

      // HELPERS

      function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
      }

      function isLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
      }

      // HOOKS

      hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
      };

      // MOMENTS

      var getSetYear = makeGetSet('FullYear', true);

      function getIsLeapYear() {
        return isLeapYear(this.year());
      }

      function makeGetSet(unit, keepTime) {
        return function (value) {
          if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
          } else {
            return get(this, unit);
          }
        };
      }

      function get(mom, unit) {
        return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
      }

      function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
          if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
          } else {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
          }
        }
      }

      // MOMENTS

      function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
          return this[units]();
        }
        return this;
      }

      function stringSet(units, value) {
        if ((typeof units === 'undefined' ? 'undefined' : _typeof(units)) === 'object') {
          units = normalizeObjectUnits(units);
          var prioritized = getPrioritizedUnits(units);
          for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
          }
        } else {
          units = normalizeUnits(units);
          if (isFunction(this[units])) {
            return this[units](value);
          }
        }
        return this;
      }

      function mod(n, x) {
        return (n % x + x) % x;
      }

      var indexOf;

      if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
      } else {
        indexOf = function indexOf(o) {
          // I know
          var i;
          for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
              return i;
            }
          }
          return -1;
        };
      }

      function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
          return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
      }

      // FORMATTING

      addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
      });

      addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
      });

      addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
      });

      // ALIASES

      addUnitAlias('month', 'M');

      // PRIORITY

      addUnitPriority('month', 8);

      // PARSING

      addRegexToken('M', match1to2);
      addRegexToken('MM', match1to2, match2);
      addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
      });
      addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
      });

      addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
      });

      addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
          array[MONTH] = month;
        } else {
          getParsingFlags(config).invalidMonth = input;
        }
      });

      // LOCALES

      var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
      var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
      function localeMonths(m, format) {
        if (!m) {
          return isArray(this._months) ? this._months : this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
      }

      var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
      function localeMonthsShort(m, format) {
        if (!m) {
          return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
      }

      function handleStrictParse(monthName, format, strict) {
        var i,
        ii,
        mom,
        llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
          // this is not used
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];
          for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
          }
        }

        if (strict) {
          if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
          }
        } else {
          if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
          }
        }
      }

      function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
          return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, i]);
          if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
          }
          if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
          }
          // test the regex
          if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
          } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
          } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
          }
        }
      }

      // MOMENTS

      function setMonth(mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
          // No op
          return mom;
        }

        if (typeof value === 'string') {
          if (/^\d+$/.test(value)) {
            value = toInt(value);
          } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber(value)) {
              return mom;
            }
          }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
      }

      function getSetMonth(value) {
        if (value != null) {
          setMonth(this, value);
          hooks.updateOffset(this, true);
          return this;
        } else {
          return get(this, 'Month');
        }
      }

      function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
      }

      var defaultMonthsShortRegex = matchWord;
      function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
          }
          if (isStrict) {
            return this._monthsShortStrictRegex;
          } else {
            return this._monthsShortRegex;
          }
        } else {
          if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
          }
          return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
        }
      }

      var defaultMonthsRegex = matchWord;
      function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
          }
          if (isStrict) {
            return this._monthsStrictRegex;
          } else {
            return this._monthsRegex;
          }
        } else {
          if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
          }
          return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
        }
      }

      function computeMonthsParse() {
        function cmpLenRev(a, b) {
          return b.length - a.length;
        }

        var shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom;
        for (i = 0; i < 12; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, i]);
          shortPieces.push(this.monthsShort(mom, ''));
          longPieces.push(this.months(mom, ''));
          mixedPieces.push(this.months(mom, ''));
          mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
          shortPieces[i] = regexEscape(shortPieces[i]);
          longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
          mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
      }

      function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
          // preserve leap years using a full 400 year cycle, then reset
          date = new Date(y + 400, m, d, h, M, s, ms);
          if (isFinite(date.getFullYear())) {
            date.setFullYear(y);
          }
        } else {
          date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
      }

      function createUTCDate(y) {
        var date;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
          var args = Array.prototype.slice.call(arguments);
          // preserve leap years using a full 400 year cycle, then reset
          args[0] = y + 400;
          date = new Date(Date.UTC.apply(null, args));
          if (isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
          }
        } else {
          date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
      }

      // start-of-first-week - start-of-year
      function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,

        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
      }

      // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
      function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear,
        resDayOfYear;

        if (dayOfYear <= 0) {
          resYear = year - 1;
          resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
          resYear = year + 1;
          resDayOfYear = dayOfYear - daysInYear(year);
        } else {
          resYear = year;
          resDayOfYear = dayOfYear;
        }

        return {
          year: resYear,
          dayOfYear: resDayOfYear };

      }

      function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek,
        resYear;

        if (week < 1) {
          resYear = mom.year() - 1;
          resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
          resWeek = week - weeksInYear(mom.year(), dow, doy);
          resYear = mom.year() + 1;
        } else {
          resYear = mom.year();
          resWeek = week;
        }

        return {
          week: resWeek,
          year: resYear };

      }

      function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
      }

      // FORMATTING

      addFormatToken('w', ['ww', 2], 'wo', 'week');
      addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

      // ALIASES

      addUnitAlias('week', 'w');
      addUnitAlias('isoWeek', 'W');

      // PRIORITIES

      addUnitPriority('week', 5);
      addUnitPriority('isoWeek', 5);

      // PARSING

      addRegexToken('w', match1to2);
      addRegexToken('ww', match1to2, match2);
      addRegexToken('W', match1to2);
      addRegexToken('WW', match1to2, match2);

      addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
      });

      // HELPERS

      // LOCALES

      function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
      }

      var defaultLocaleWeek = {
        dow: 0, // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 6th is the first week of the year.
      };

      function localeFirstDayOfWeek() {
        return this._week.dow;
      }

      function localeFirstDayOfYear() {
        return this._week.doy;
      }

      // MOMENTS

      function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
      }

      function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
      }

      // FORMATTING

      addFormatToken('d', 0, 'do', 'day');

      addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
      });

      addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
      });

      addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
      });

      addFormatToken('e', 0, 0, 'weekday');
      addFormatToken('E', 0, 0, 'isoWeekday');

      // ALIASES

      addUnitAlias('day', 'd');
      addUnitAlias('weekday', 'e');
      addUnitAlias('isoWeekday', 'E');

      // PRIORITY
      addUnitPriority('day', 11);
      addUnitPriority('weekday', 11);
      addUnitPriority('isoWeekday', 11);

      // PARSING

      addRegexToken('d', match1to2);
      addRegexToken('e', match1to2);
      addRegexToken('E', match1to2);
      addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
      });
      addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
      });
      addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
      });

      addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
          week.d = weekday;
        } else {
          getParsingFlags(config).invalidWeekday = input;
        }
      });

      addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
      });

      // HELPERS

      function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
          return input;
        }

        if (!isNaN(input)) {
          return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
          return input;
        }

        return null;
      }

      function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
          return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
      }

      // LOCALES
      function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
      }

      var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
      function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? 'format' : 'standalone'];
        return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
      }

      var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
      function localeWeekdaysShort(m) {
        return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
      }

      var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
      function localeWeekdaysMin(m) {
        return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
      }

      function handleStrictParse$1(weekdayName, format, strict) {
        var i,
        ii,
        mom,
        llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._minWeekdaysParse = [];

          for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
          }
        }

        if (strict) {
          if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          }
        } else {
          if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          }
        }
      }

      function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
          return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._minWeekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
          // make the regex if we don't have it already

          mom = createUTC([2000, 1]).day(i);
          if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
          }
          if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
          }
          // test the regex
          if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
          }
        }
      }

      // MOMENTS

      function getSetDayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
          input = parseWeekday(input, this.localeData());
          return this.add(input - day, 'd');
        } else {
          return day;
        }
      }

      function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
      }

      function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
          var weekday = parseIsoWeekday(input, this.localeData());
          return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
          return this.day() || 7;
        }
      }

      var defaultWeekdaysRegex = matchWord;
      function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
          }
          if (isStrict) {
            return this._weekdaysStrictRegex;
          } else {
            return this._weekdaysRegex;
          }
        } else {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
          }
          return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
        }
      }

      var defaultWeekdaysShortRegex = matchWord;
      function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
          }
          if (isStrict) {
            return this._weekdaysShortStrictRegex;
          } else {
            return this._weekdaysShortRegex;
          }
        } else {
          if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
          }
          return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
      }

      var defaultWeekdaysMinRegex = matchWord;
      function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
          }
          if (isStrict) {
            return this._weekdaysMinStrictRegex;
          } else {
            return this._weekdaysMinRegex;
          }
        } else {
          if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
          }
          return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
      }

      function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
          return b.length - a.length;
        }

        var minPieces = [],
        shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom,
        minp,
        shortp,
        longp;
        for (i = 0; i < 7; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, 1]).day(i);
          minp = this.weekdaysMin(mom, '');
          shortp = this.weekdaysShort(mom, '');
          longp = this.weekdays(mom, '');
          minPieces.push(minp);
          shortPieces.push(shortp);
          longPieces.push(longp);
          mixedPieces.push(minp);
          mixedPieces.push(shortp);
          mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
          shortPieces[i] = regexEscape(shortPieces[i]);
          longPieces[i] = regexEscape(longPieces[i]);
          mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
      }

      // FORMATTING

      function hFormat() {
        return this.hours() % 12 || 12;
      }

      function kFormat() {
        return this.hours() || 24;
      }

      addFormatToken('H', ['HH', 2], 0, 'hour');
      addFormatToken('h', ['hh', 2], 0, hFormat);
      addFormatToken('k', ['kk', 2], 0, kFormat);

      addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
      });

      addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
      });

      addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
      });

      addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
      });

      function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
          return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
      }

      meridiem('a', true);
      meridiem('A', false);

      // ALIASES

      addUnitAlias('hour', 'h');

      // PRIORITY
      addUnitPriority('hour', 13);

      // PARSING

      function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
      }

      addRegexToken('a', matchMeridiem);
      addRegexToken('A', matchMeridiem);
      addRegexToken('H', match1to2);
      addRegexToken('h', match1to2);
      addRegexToken('k', match1to2);
      addRegexToken('HH', match1to2, match2);
      addRegexToken('hh', match1to2, match2);
      addRegexToken('kk', match1to2, match2);

      addRegexToken('hmm', match3to4);
      addRegexToken('hmmss', match5to6);
      addRegexToken('Hmm', match3to4);
      addRegexToken('Hmmss', match5to6);

      addParseToken(['H', 'HH'], HOUR);
      addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
      });
      addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
      });
      addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
      });
      addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
      });
      addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
      });
      addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
      });
      addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
      });

      // LOCALES

      function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + '').toLowerCase().charAt(0) === 'p';
      }

      var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
      function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
          return isLower ? 'pm' : 'PM';
        } else {
          return isLower ? 'am' : 'AM';
        }
      }

      // MOMENTS

      // Setting the hour should keep the time, because the user explicitly
      // specified which hour they want. So trying to maintain the same hour (in
      // a new timezone) makes sense. Adding/subtracting hours does not follow
      // this rule.
      var getSetHour = makeGetSet('Hours', true);

      var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse };


      // internal storage for locale config files
      var locales = {};
      var localeFamilies = {};
      var globalLocale;

      function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
      }

      // pick the locale from the array
      // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
      // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
      function chooseLocale(names) {
        var i = 0,
        j,
        next,
        locale,
        split;

        while (i < names.length) {
          split = normalizeLocale(names[i]).split('-');
          j = split.length;
          next = normalizeLocale(names[i + 1]);
          next = next ? next.split('-') : null;
          while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
              return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
              //the next array item is better than a shallower substring of this one
              break;
            }
            j--;
          }
          i++;
        }
        return globalLocale;
      }

      function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && 'object' !== 'undefined' && module && module.exports) {
          try {
            oldLocale = globalLocale._abbr;
            var aliasedRequire = commonjsRequire;
            aliasedRequire('./locale/' + name);
            getSetGlobalLocale(oldLocale);
          } catch (e) {}
        }
        return locales[name];
      }

      // This function will load locale and then set the global locale.  If
      // no arguments are passed in, it will simply return the current global
      // locale key.
      function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
          if (isUndefined(values)) {
            data = getLocale(key);
          } else {
            data = defineLocale(key, values);
          }

          if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
          } else {
            if (typeof console !== 'undefined' && console.warn) {
              //warn user if arguments are passed but the locale could not be set
              __f__("warn", 'Locale ' + key + ' not found. Did you forget to load it?', " at node_modules/vue-moment/dist/vue-moment.js:1882");
            }
          }
        }

        return globalLocale._abbr;
      }

      function defineLocale(name, config) {
        if (config !== null) {
          var locale,
          parentConfig = baseConfig;
          config.abbr = name;
          if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale ' + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
          } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
              parentConfig = locales[config.parentLocale]._config;
            } else {
              locale = loadLocale(config.parentLocale);
              if (locale != null) {
                parentConfig = locale._config;
              } else {
                if (!localeFamilies[config.parentLocale]) {
                  localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                  name: name,
                  config: config });

                return null;
              }
            }
          }
          locales[name] = new Locale(mergeConfigs(parentConfig, config));

          if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
              defineLocale(x.name, x.config);
            });
          }

          // backwards compat for now: also set the locale
          // make sure we set the locale AFTER all child locales have been
          // created, so we won't end up with the child locale set.
          getSetGlobalLocale(name);

          return locales[name];
        } else {
          // useful for testing
          delete locales[name];
          return null;
        }
      }

      function updateLocale(name, config) {
        if (config != null) {
          var locale,
          tmpLocale,
          parentConfig = baseConfig;
          // MERGE
          tmpLocale = loadLocale(name);
          if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
          }
          config = mergeConfigs(parentConfig, config);
          locale = new Locale(config);
          locale.parentLocale = locales[name];
          locales[name] = locale;

          // backwards compat for now: also set the locale
          getSetGlobalLocale(name);
        } else {
          // pass null for config to unupdate, useful for tests
          if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
              locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
              delete locales[name];
            }
          }
        }
        return locales[name];
      }

      // returns locale data
      function getLocale(key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
          key = key._locale._abbr;
        }

        if (!key) {
          return globalLocale;
        }

        if (!isArray(key)) {
          //short-circuit everything else
          locale = loadLocale(key);
          if (locale) {
            return locale;
          }
          key = [key];
        }

        return chooseLocale(key);
      }

      function listLocales() {
        return keys(locales);
      }

      function checkOverflow(m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
          overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;

          if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
          }
          if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
          }
          if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
          }

          getParsingFlags(m).overflow = overflow;
        }

        return m;
      }

      // Pick the first defined of two or three arguments.
      function defaults(a, b, c) {
        if (a != null) {
          return a;
        }
        if (b != null) {
          return b;
        }
        return c;
      }

      function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
          return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
      }

      // convert an array to a date.
      // the array should mirror the parameters below
      // note: all values past the year are optional and will default to the lowest possible value.
      // [year, month, day , hour, minute, second, millisecond]
      function configFromArray(config) {
        var i,
        date,
        input = [],
        currentDate,
        expectedWeekday,
        yearToUse;

        if (config._d) {
          return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
          dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
          yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

          if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
          }

          date = createUTCDate(yearToUse, 0, config._dayOfYear);
          config._a[MONTH] = date.getUTCMonth();
          config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
          config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
          config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
          config._nextDay = true;
          config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
          config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
          getParsingFlags(config).weekdayMismatch = true;
        }
      }

      function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
          dow = 1;
          doy = 4;

          // TODO: We need to take the current isoWeekYear, but that depends on
          // how we interpret now (local, utc, fixed offset). So create
          // a now version of current config (take local/utc/offset flags, and
          // create now).
          weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
          week = defaults(w.W, 1);
          weekday = defaults(w.E, 1);
          if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
          }
        } else {
          dow = config._locale._week.dow;
          doy = config._locale._week.doy;

          var curWeek = weekOfYear(createLocal(), dow, doy);

          weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

          // Default to current week.
          week = defaults(w.w, curWeek.week);

          if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
              weekdayOverflow = true;
            }
          } else if (w.e != null) {
            // local weekday -- counting starts from beginning of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
              weekdayOverflow = true;
            }
          } else {
            // default to beginning of week
            weekday = dow;
          }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
          getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
          getParsingFlags(config)._overflowWeekday = true;
        } else {
          temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
          config._a[YEAR] = temp.year;
          config._dayOfYear = temp.dayOfYear;
        }
      }

      // iso 8601 regex
      // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
      var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
      var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

      var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

      var isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/],
      // YYYYMM is NOT allowed by the standard
      ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/]];

      // iso time formats and regexes
      var isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]];

      var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

      // date from iso format
      function configFromISO(config) {
        var i,
        l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime,
        dateFormat,
        timeFormat,
        tzFormat;

        if (match) {
          getParsingFlags(config).iso = true;

          for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
              dateFormat = isoDates[i][0];
              allowTime = isoDates[i][2] !== false;
              break;
            }
          }
          if (dateFormat == null) {
            config._isValid = false;
            return;
          }
          if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
              if (isoTimes[i][1].exec(match[3])) {
                // match[2] should be 'T' or space
                timeFormat = (match[2] || ' ') + isoTimes[i][0];
                break;
              }
            }
            if (timeFormat == null) {
              config._isValid = false;
              return;
            }
          }
          if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
          }
          if (match[4]) {
            if (tzRegex.exec(match[4])) {
              tzFormat = 'Z';
            } else {
              config._isValid = false;
              return;
            }
          }
          config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
          configFromStringAndFormat(config);
        } else {
          config._isValid = false;
        }
      }

      // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
      var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

      function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];

        if (secondStr) {
          result.push(parseInt(secondStr, 10));
        }

        return result;
      }

      function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
          return 2000 + year;
        } else if (year <= 999) {
          return 1900 + year;
        }
        return year;
      }

      function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
      }

      function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
          // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
          var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
          weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
          if (weekdayProvided !== weekdayActual) {
            getParsingFlags(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
          }
        }
        return true;
      }

      var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60 };


      function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
          return obsOffsets[obsOffset];
        } else if (militaryOffset) {
          // the only allowed military tz is Z
          return 0;
        } else {
          var hm = parseInt(numOffset, 10);
          var m = hm % 100,
          h = (hm - m) / 100;
          return h * 60 + m;
        }
      }

      // date and time from ref 2822 format
      function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
          var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
          if (!checkWeekday(match[1], parsedArray, config)) {
            return;
          }

          config._a = parsedArray;
          config._tzm = calculateOffset(match[8], match[9], match[10]);

          config._d = createUTCDate.apply(null, config._a);
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

          getParsingFlags(config).rfc2822 = true;
        } else {
          config._isValid = false;
        }
      }

      // date from iso format or fallback
      function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
          config._d = new Date(+matched[1]);
          return;
        }

        configFromISO(config);
        if (config._isValid === false) {
          delete config._isValid;
        } else {
          return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
          delete config._isValid;
        } else {
          return;
        }

        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
      }

      hooks.createFromInputFallback = deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' + 'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' + 'discouraged and will be removed in an upcoming major release. Please refer to ' + 'http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
      });

      // constant that refers to the ISO standard
      hooks.ISO_8601 = function () {};

      // constant that refers to the RFC 2822 form
      hooks.RFC_2822 = function () {};

      // date from string and format string
      function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
          configFromISO(config);
          return;
        }
        if (config._f === hooks.RFC_2822) {
          configFromRFC2822(config);
          return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
        i,
        parsedInput,
        tokens,
        token,
        skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
          token = tokens[i];
          parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
          // console.log('token', token, 'parsedInput', parsedInput,
          //         'regex', getParseRegexForToken(token, config));
          if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
              getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
          }
          // don't parse if it's not a known token
          if (formatTokenFunctions[token]) {
            if (parsedInput) {
              getParsingFlags(config).empty = false;
            } else {
              getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
          } else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
          }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
          getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
          getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
      }

      function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
          // nothing to do
          return hour;
        }
        if (locale.meridiemHour != null) {
          return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
          // Fallback
          isPm = locale.isPM(meridiem);
          if (isPm && hour < 12) {
            hour += 12;
          }
          if (!isPm && hour === 12) {
            hour = 0;
          }
          return hour;
        } else {
          // this is not supposed to happen
          return hour;
        }
      }

      // date from string and array of format strings
      function configFromStringAndArray(config) {
        var tempConfig, bestMoment, scoreToBeat, i, currentScore;

        if (config._f.length === 0) {
          getParsingFlags(config).invalidFormat = true;
          config._d = new Date(NaN);
          return;
        }

        for (i = 0; i < config._f.length; i++) {
          currentScore = 0;
          tempConfig = copyConfig({}, config);
          if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
          }
          tempConfig._f = config._f[i];
          configFromStringAndFormat(tempConfig);

          if (!isValid(tempConfig)) {
            continue;
          }

          // if there is any input that was not parsed add a penalty for that format
          currentScore += getParsingFlags(tempConfig).charsLeftOver;

          //or tokens
          currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

          getParsingFlags(tempConfig).score = currentScore;

          if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
          }
        }

        extend(config, bestMoment || tempConfig);
      }

      function configFromObject(config) {
        if (config._d) {
          return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
          return obj && parseInt(obj, 10);
        });

        configFromArray(config);
      }

      function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
          // Adding is smart enough around DST
          res.add(1, 'd');
          res._nextDay = undefined;
        }

        return res;
      }

      function prepareConfig(config) {
        var input = config._i,
        format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || format === undefined && input === '') {
          return createInvalid({ nullInput: true });
        }

        if (typeof input === 'string') {
          config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
          return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
          config._d = input;
        } else if (isArray(format)) {
          configFromStringAndArray(config);
        } else if (format) {
          configFromStringAndFormat(config);
        } else {
          configFromInput(config);
        }

        if (!isValid(config)) {
          config._d = null;
        }

        return config;
      }

      function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
          config._d = new Date(hooks.now());
        } else if (isDate(input)) {
          config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
          configFromString(config);
        } else if (isArray(input)) {
          config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
          });
          configFromArray(config);
        } else if (isObject(input)) {
          configFromObject(config);
        } else if (isNumber(input)) {
          // from milliseconds
          config._d = new Date(input);
        } else {
          hooks.createFromInputFallback(config);
        }
      }

      function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
          strict = locale;
          locale = undefined;
        }

        if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
          input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
      }

      function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
      }

      var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
          return other < this ? this : other;
        } else {
          return createInvalid();
        }
      });

      var prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
          return other > this ? this : other;
        } else {
          return createInvalid();
        }
      });

      // Pick a moment m from moments so that m[fn](other) is true for all
      // other. This relies on the function fn to be transitive.
      //
      // moments should either be an array of moment objects or an array, whose
      // first element is an array of moment objects.
      function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
          moments = moments[0];
        }
        if (!moments.length) {
          return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
          if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
          }
        }
        return res;
      }

      // TODO: Use [].sort instead?
      function min() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
      }

      function max() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
      }

      var now = function now() {
        return Date.now ? Date.now() : +new Date();
      };

      var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

      function isDurationValid(m) {
        for (var key in m) {
          if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
          }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
          if (m[ordering[i]]) {
            if (unitHasDecimal) {
              return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
              unitHasDecimal = true;
            }
          }
        }

        return true;
      }

      function isValid$1() {
        return this._isValid;
      }

      function createInvalid$1() {
        return createDuration(NaN);
      }

      function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds = +milliseconds + seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days + weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months + quarters * 3 + years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
      }

      function isDuration(obj) {
        return obj instanceof Duration;
      }

      function absRound(number) {
        if (number < 0) {
          return Math.round(-1 * number) * -1;
        } else {
          return Math.round(number);
        }
      }

      // FORMATTING

      function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
          var offset = this.utcOffset();
          var sign = '+';
          if (offset < 0) {
            offset = -offset;
            sign = '-';
          }
          return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
        });
      }

      offset('Z', ':');
      offset('ZZ', '');

      // PARSING

      addRegexToken('Z', matchShortOffset);
      addRegexToken('ZZ', matchShortOffset);
      addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
      });

      // HELPERS

      // timezone chunker
      // '+10:00' > ['10',  '00']
      // '-1530'  > ['-15', '30']
      var chunkOffset = /([\+\-]|\d\d)/gi;

      function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
          return null;
        }

        var chunk = matches[matches.length - 1] || [];
        var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
      }

      // Return a moment from input, that is local/utc/zone equivalent to model.
      function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
          res = model.clone();
          diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
          // Use low-level api, because this fn is low-level api.
          res._d.setTime(res._d.valueOf() + diff);
          hooks.updateOffset(res, false);
          return res;
        } else {
          return createLocal(input).local();
        }
      }

      function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
      }

      // HOOKS

      // This function will be called whenever a moment is mutated.
      // It is intended to keep the offset in sync with the timezone.
      hooks.updateOffset = function () {};

      // MOMENTS

      // keepLocalTime = true means only change the timezone, without
      // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
      // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
      // +0200, so we adjust the time as needed, to be valid.
      //
      // Keeping the time actually adds/subtracts (one hour)
      // from the actual represented time. That is why we call updateOffset
      // a second time. In case it wants us to change the offset again
      // _changeInProgress == true case, then we have to adjust, because
      // there is no such time in the given timezone.
      function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
        localAdjust;
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        if (input != null) {
          if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
              return this;
            }
          } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
          }
          if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
          }
          this._offset = input;
          this._isUTC = true;
          if (localAdjust != null) {
            this.add(localAdjust, 'm');
          }
          if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
              addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
              this._changeInProgress = true;
              hooks.updateOffset(this, true);
              this._changeInProgress = null;
            }
          }
          return this;
        } else {
          return this._isUTC ? offset : getDateOffset(this);
        }
      }

      function getSetZone(input, keepLocalTime) {
        if (input != null) {
          if (typeof input !== 'string') {
            input = -input;
          }

          this.utcOffset(input, keepLocalTime);

          return this;
        } else {
          return -this.utcOffset();
        }
      }

      function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
      }

      function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
          this.utcOffset(0, keepLocalTime);
          this._isUTC = false;

          if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
          }
        }
        return this;
      }

      function setOffsetToParsedOffset() {
        if (this._tzm != null) {
          this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
          var tZone = offsetFromString(matchOffset, this._i);
          if (tZone != null) {
            this.utcOffset(tZone);
          } else {
            this.utcOffset(0, true);
          }
        }
        return this;
      }

      function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
          return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
      }

      function isDaylightSavingTime() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
      }

      function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
          return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
          var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
          this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
          this._isDSTShifted = false;
        }

        return this._isDSTShifted;
      }

      function isLocal() {
        return this.isValid() ? !this._isUTC : false;
      }

      function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
      }

      function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
      }

      // ASP.NET json date format regex
      var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

      // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
      // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
      // and further modified to allow for strings containing both week and day
      var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

      function createDuration(input, key) {
        var duration = input,

        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

        if (isDuration(input)) {
          duration = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months };

        } else if (isNumber(input)) {
          duration = {};
          if (key) {
            duration[key] = input;
          } else {
            duration.milliseconds = input;
          }
        } else if (!!(match = aspNetRegex.exec(input))) {
          sign = match[1] === '-' ? -1 : 1;
          duration = {
            y: 0,
            d: toInt(match[DATE]) * sign,
            h: toInt(match[HOUR]) * sign,
            m: toInt(match[MINUTE]) * sign,
            s: toInt(match[SECOND]) * sign,
            ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
          };
        } else if (!!(match = isoRegex.exec(input))) {
          sign = match[1] === '-' ? -1 : 1;
          duration = {
            y: parseIso(match[2], sign),
            M: parseIso(match[3], sign),
            w: parseIso(match[4], sign),
            d: parseIso(match[5], sign),
            h: parseIso(match[6], sign),
            m: parseIso(match[7], sign),
            s: parseIso(match[8], sign) };

        } else if (duration == null) {
          // checks for null or undefined
          duration = {};
        } else if ((typeof duration === 'undefined' ? 'undefined' : _typeof(duration)) === 'object' && ('from' in duration || 'to' in duration)) {
          diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

          duration = {};
          duration.ms = diffRes.milliseconds;
          duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
          ret._locale = input._locale;
        }

        return ret;
      }

      createDuration.fn = Duration.prototype;
      createDuration.invalid = createInvalid$1;

      function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
      }

      function positiveMomentsDifference(base, other) {
        var res = {};

        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
          --res.months;
        }

        res.milliseconds = +other - +base.clone().add(res.months, 'M');

        return res;
      }

      function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
          return { milliseconds: 0, months: 0 };
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
          res = positiveMomentsDifference(base, other);
        } else {
          res = positiveMomentsDifference(other, base);
          res.milliseconds = -res.milliseconds;
          res.months = -res.months;
        }

        return res;
      }

      // TODO: remove 'name' arg after deprecation is removed
      function createAdder(direction, name) {
        return function (val, period) {
          var dur, tmp;
          //invert the arguments, but complain about it
          if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val;val = period;period = tmp;
          }

          val = typeof val === 'string' ? +val : val;
          dur = createDuration(val, period);
          addSubtract(this, dur, direction);
          return this;
        };
      }

      function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

        if (!mom.isValid()) {
          // No op
          return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
          setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
          set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
          mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
          hooks.updateOffset(mom, days || months);
        }
      }

      var add = createAdder(1, 'add');
      var subtract = createAdder(-1, 'subtract');

      function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
      }

      function calendar$1(time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
      }

      function clone() {
        return new Moment(this);
      }

      function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
          return this.valueOf() > localInput.valueOf();
        } else {
          return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
      }

      function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
          return this.valueOf() < localInput.valueOf();
        } else {
          return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
      }

      function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
        localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
          return false;
        }
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
      }

      function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
          return this.valueOf() === localInput.valueOf();
        } else {
          inputMs = localInput.valueOf();
          return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
      }

      function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
      }

      function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
      }

      function diff(input, units, asFloat) {
        var that, zoneDelta, output;

        if (!this.isValid()) {
          return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
          return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
          case 'year':
            output = monthDiff(this, that) / 12;break;
          case 'month':
            output = monthDiff(this, that);break;
          case 'quarter':
            output = monthDiff(this, that) / 3;break;
          case 'second':
            output = (this - that) / 1e3;break; // 1000
          case 'minute':
            output = (this - that) / 6e4;break; // 1000 * 60
          case 'hour':
            output = (this - that) / 36e5;break; // 1000 * 60 * 60
          case 'day':
            output = (this - that - zoneDelta) / 864e5;break; // 1000 * 60 * 60 * 24, negate dst
          case 'week':
            output = (this - that - zoneDelta) / 6048e5;break; // 1000 * 60 * 60 * 24 * 7, negate dst
          default:
            output = this - that;}


        return asFloat ? output : absFloor(output);
      }

      function monthDiff(a, b) {
        // difference in months
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),

        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2,
        adjust;

        if (b - anchor < 0) {
          anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
          // linear across the month
          adjust = (b - anchor) / (anchor - anchor2);
        } else {
          anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
          // linear across the month
          adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
      }

      hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
      hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

      function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
      }

      function toISOString(keepOffset) {
        if (!this.isValid()) {
          return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
          return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
          // native implementation is ~50x faster, use it when we can
          if (utc) {
            return this.toDate().toISOString();
          } else {
            return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
          }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
      }

      /**
         * Return a human readable representation of a moment that can
         * also be evaluated to get a new moment which is the same
         *
         * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
         */
      function inspect() {
        if (!this.isValid()) {
          return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
          func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
          zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
      }

      function format(inputString) {
        if (!inputString) {
          inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
      }

      function from(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
          return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
          return this.localeData().invalidDate();
        }
      }

      function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
      }

      function to(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
          return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
          return this.localeData().invalidDate();
        }
      }

      function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
      }

      // If passed a locale key, it will set the locale for this
      // instance.  Otherwise, it will return the locale configuration
      // variables for this instance.
      function locale(key) {
        var newLocaleData;

        if (key === undefined) {
          return this._locale._abbr;
        } else {
          newLocaleData = getLocale(key);
          if (newLocaleData != null) {
            this._locale = newLocaleData;
          }
          return this;
        }
      }

      var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
        if (key === undefined) {
          return this.localeData();
        } else {
          return this.locale(key);
        }
      });

      function localeData() {
        return this._locale;
      }

      var MS_PER_SECOND = 1000;
      var MS_PER_MINUTE = 60 * MS_PER_SECOND;
      var MS_PER_HOUR = 60 * MS_PER_MINUTE;
      var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

      // actual modulo - handles negative numbers (for dates before 1970):
      function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
      }

      function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
          // preserve leap years using a full 400 year cycle, then reset
          return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
          return new Date(y, m, d).valueOf();
        }
      }

      function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
          // preserve leap years using a full 400 year cycle, then reset
          return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
          return Date.UTC(y, m, d);
        }
      }

      function startOf(units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
          return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
          case 'year':
            time = startOfDate(this.year(), 0, 1);
            break;
          case 'quarter':
            time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
            break;
          case 'month':
            time = startOfDate(this.year(), this.month(), 1);
            break;
          case 'week':
            time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
            break;
          case 'isoWeek':
            time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
            break;
          case 'day':
          case 'date':
            time = startOfDate(this.year(), this.month(), this.date());
            break;
          case 'hour':
            time = this._d.valueOf();
            time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
            break;
          case 'minute':
            time = this._d.valueOf();
            time -= mod$1(time, MS_PER_MINUTE);
            break;
          case 'second':
            time = this._d.valueOf();
            time -= mod$1(time, MS_PER_SECOND);
            break;}


        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
      }

      function endOf(units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
          return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
          case 'year':
            time = startOfDate(this.year() + 1, 0, 1) - 1;
            break;
          case 'quarter':
            time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
            break;
          case 'month':
            time = startOfDate(this.year(), this.month() + 1, 1) - 1;
            break;
          case 'week':
            time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
            break;
          case 'isoWeek':
            time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
            break;
          case 'day':
          case 'date':
            time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
            break;
          case 'hour':
            time = this._d.valueOf();
            time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
            break;
          case 'minute':
            time = this._d.valueOf();
            time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
            break;
          case 'second':
            time = this._d.valueOf();
            time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
            break;}


        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
      }

      function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
      }

      function unix() {
        return Math.floor(this.valueOf() / 1000);
      }

      function toDate() {
        return new Date(this.valueOf());
      }

      function toArray() {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
      }

      function toObject() {
        var m = this;
        return {
          years: m.year(),
          months: m.month(),
          date: m.date(),
          hours: m.hours(),
          minutes: m.minutes(),
          seconds: m.seconds(),
          milliseconds: m.milliseconds() };

      }

      function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
      }

      function isValid$2() {
        return isValid(this);
      }

      function parsingFlags() {
        return extend({}, getParsingFlags(this));
      }

      function invalidAt() {
        return getParsingFlags(this).overflow;
      }

      function creationData() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict };

      }

      // FORMATTING

      addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
      });

      addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
      });

      function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
      }

      addWeekYearFormatToken('gggg', 'weekYear');
      addWeekYearFormatToken('ggggg', 'weekYear');
      addWeekYearFormatToken('GGGG', 'isoWeekYear');
      addWeekYearFormatToken('GGGGG', 'isoWeekYear');

      // ALIASES

      addUnitAlias('weekYear', 'gg');
      addUnitAlias('isoWeekYear', 'GG');

      // PRIORITY

      addUnitPriority('weekYear', 1);
      addUnitPriority('isoWeekYear', 1);

      // PARSING

      addRegexToken('G', matchSigned);
      addRegexToken('g', matchSigned);
      addRegexToken('GG', match1to2, match2);
      addRegexToken('gg', match1to2, match2);
      addRegexToken('GGGG', match1to4, match4);
      addRegexToken('gggg', match1to4, match4);
      addRegexToken('GGGGG', match1to6, match6);
      addRegexToken('ggggg', match1to6, match6);

      addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
      });

      addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
      });

      // MOMENTS

      function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
      }

      function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
      }

      function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
      }

      function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
      }

      function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
          return weekOfYear(this, dow, doy).year;
        } else {
          weeksTarget = weeksInYear(input, dow, doy);
          if (week > weeksTarget) {
            week = weeksTarget;
          }
          return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
      }

      function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
      }

      // FORMATTING

      addFormatToken('Q', 0, 'Qo', 'quarter');

      // ALIASES

      addUnitAlias('quarter', 'Q');

      // PRIORITY

      addUnitPriority('quarter', 7);

      // PARSING

      addRegexToken('Q', match1);
      addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
      });

      // MOMENTS

      function getSetQuarter(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
      }

      // FORMATTING

      addFormatToken('D', ['DD', 2], 'Do', 'date');

      // ALIASES

      addUnitAlias('date', 'D');

      // PRIORITY
      addUnitPriority('date', 9);

      // PARSING

      addRegexToken('D', match1to2);
      addRegexToken('DD', match1to2, match2);
      addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
      });

      addParseToken(['D', 'DD'], DATE);
      addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
      });

      // MOMENTS

      var getSetDayOfMonth = makeGetSet('Date', true);

      // FORMATTING

      addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

      // ALIASES

      addUnitAlias('dayOfYear', 'DDD');

      // PRIORITY
      addUnitPriority('dayOfYear', 4);

      // PARSING

      addRegexToken('DDD', match1to3);
      addRegexToken('DDDD', match3);
      addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
      });

      // HELPERS

      // MOMENTS

      function getSetDayOfYear(input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
      }

      // FORMATTING

      addFormatToken('m', ['mm', 2], 0, 'minute');

      // ALIASES

      addUnitAlias('minute', 'm');

      // PRIORITY

      addUnitPriority('minute', 14);

      // PARSING

      addRegexToken('m', match1to2);
      addRegexToken('mm', match1to2, match2);
      addParseToken(['m', 'mm'], MINUTE);

      // MOMENTS

      var getSetMinute = makeGetSet('Minutes', false);

      // FORMATTING

      addFormatToken('s', ['ss', 2], 0, 'second');

      // ALIASES

      addUnitAlias('second', 's');

      // PRIORITY

      addUnitPriority('second', 15);

      // PARSING

      addRegexToken('s', match1to2);
      addRegexToken('ss', match1to2, match2);
      addParseToken(['s', 'ss'], SECOND);

      // MOMENTS

      var getSetSecond = makeGetSet('Seconds', false);

      // FORMATTING

      addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
      });

      addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
      });

      addFormatToken(0, ['SSS', 3], 0, 'millisecond');
      addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
      });
      addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
      });
      addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
      });
      addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
      });
      addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
      });
      addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
      });

      // ALIASES

      addUnitAlias('millisecond', 'ms');

      // PRIORITY

      addUnitPriority('millisecond', 16);

      // PARSING

      addRegexToken('S', match1to3, match1);
      addRegexToken('SS', match1to3, match2);
      addRegexToken('SSS', match1to3, match3);

      var token;
      for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
      }

      function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
      }

      for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
      }
      // MOMENTS

      var getSetMillisecond = makeGetSet('Milliseconds', false);

      // FORMATTING

      addFormatToken('z', 0, 0, 'zoneAbbr');
      addFormatToken('zz', 0, 0, 'zoneName');

      // MOMENTS

      function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
      }

      function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
      }

      var proto = Moment.prototype;

      proto.add = add;
      proto.calendar = calendar$1;
      proto.clone = clone;
      proto.diff = diff;
      proto.endOf = endOf;
      proto.format = format;
      proto.from = from;
      proto.fromNow = fromNow;
      proto.to = to;
      proto.toNow = toNow;
      proto.get = stringGet;
      proto.invalidAt = invalidAt;
      proto.isAfter = isAfter;
      proto.isBefore = isBefore;
      proto.isBetween = isBetween;
      proto.isSame = isSame;
      proto.isSameOrAfter = isSameOrAfter;
      proto.isSameOrBefore = isSameOrBefore;
      proto.isValid = isValid$2;
      proto.lang = lang;
      proto.locale = locale;
      proto.localeData = localeData;
      proto.max = prototypeMax;
      proto.min = prototypeMin;
      proto.parsingFlags = parsingFlags;
      proto.set = stringSet;
      proto.startOf = startOf;
      proto.subtract = subtract;
      proto.toArray = toArray;
      proto.toObject = toObject;
      proto.toDate = toDate;
      proto.toISOString = toISOString;
      proto.inspect = inspect;
      proto.toJSON = toJSON;
      proto.toString = toString;
      proto.unix = unix;
      proto.valueOf = valueOf;
      proto.creationData = creationData;
      proto.year = getSetYear;
      proto.isLeapYear = getIsLeapYear;
      proto.weekYear = getSetWeekYear;
      proto.isoWeekYear = getSetISOWeekYear;
      proto.quarter = proto.quarters = getSetQuarter;
      proto.month = getSetMonth;
      proto.daysInMonth = getDaysInMonth;
      proto.week = proto.weeks = getSetWeek;
      proto.isoWeek = proto.isoWeeks = getSetISOWeek;
      proto.weeksInYear = getWeeksInYear;
      proto.isoWeeksInYear = getISOWeeksInYear;
      proto.date = getSetDayOfMonth;
      proto.day = proto.days = getSetDayOfWeek;
      proto.weekday = getSetLocaleDayOfWeek;
      proto.isoWeekday = getSetISODayOfWeek;
      proto.dayOfYear = getSetDayOfYear;
      proto.hour = proto.hours = getSetHour;
      proto.minute = proto.minutes = getSetMinute;
      proto.second = proto.seconds = getSetSecond;
      proto.millisecond = proto.milliseconds = getSetMillisecond;
      proto.utcOffset = getSetOffset;
      proto.utc = setOffsetToUTC;
      proto.local = setOffsetToLocal;
      proto.parseZone = setOffsetToParsedOffset;
      proto.hasAlignedHourOffset = hasAlignedHourOffset;
      proto.isDST = isDaylightSavingTime;
      proto.isLocal = isLocal;
      proto.isUtcOffset = isUtcOffset;
      proto.isUtc = isUtc;
      proto.isUTC = isUtc;
      proto.zoneAbbr = getZoneAbbr;
      proto.zoneName = getZoneName;
      proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
      proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
      proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
      proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
      proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

      function createUnix(input) {
        return createLocal(input * 1000);
      }

      function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
      }

      function preParsePostFormat(string) {
        return string;
      }

      var proto$1 = Locale.prototype;

      proto$1.calendar = calendar;
      proto$1.longDateFormat = longDateFormat;
      proto$1.invalidDate = invalidDate;
      proto$1.ordinal = ordinal;
      proto$1.preparse = preParsePostFormat;
      proto$1.postformat = preParsePostFormat;
      proto$1.relativeTime = relativeTime;
      proto$1.pastFuture = pastFuture;
      proto$1.set = set;

      proto$1.months = localeMonths;
      proto$1.monthsShort = localeMonthsShort;
      proto$1.monthsParse = localeMonthsParse;
      proto$1.monthsRegex = monthsRegex;
      proto$1.monthsShortRegex = monthsShortRegex;
      proto$1.week = localeWeek;
      proto$1.firstDayOfYear = localeFirstDayOfYear;
      proto$1.firstDayOfWeek = localeFirstDayOfWeek;

      proto$1.weekdays = localeWeekdays;
      proto$1.weekdaysMin = localeWeekdaysMin;
      proto$1.weekdaysShort = localeWeekdaysShort;
      proto$1.weekdaysParse = localeWeekdaysParse;

      proto$1.weekdaysRegex = weekdaysRegex;
      proto$1.weekdaysShortRegex = weekdaysShortRegex;
      proto$1.weekdaysMinRegex = weekdaysMinRegex;

      proto$1.isPM = localeIsPM;
      proto$1.meridiem = localeMeridiem;

      function get$1(format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
      }

      function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
          index = format;
          format = undefined;
        }

        format = format || '';

        if (index != null) {
          return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
          out[i] = get$1(format, i, field, 'month');
        }
        return out;
      }

      // ()
      // (5)
      // (fmt, 5)
      // (fmt)
      // (true)
      // (true, 5)
      // (true, fmt, 5)
      // (true, fmt)
      function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
          if (isNumber(format)) {
            index = format;
            format = undefined;
          }

          format = format || '';
        } else {
          format = localeSorted;
          index = format;
          localeSorted = false;

          if (isNumber(format)) {
            index = format;
            format = undefined;
          }

          format = format || '';
        }

        var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
          return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
          out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
      }

      function listMonths(format, index) {
        return listMonthsImpl(format, index, 'months');
      }

      function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
      }

      function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
      }

      function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
      }

      function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
      }

      getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function ordinal(number) {
          var b = number % 10,
          output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
          return number + output;
        } });


      // Side effect imports

      hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
      hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

      var mathAbs = Math.abs;

      function abs() {
        var data = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);

        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);

        return this;
      }

      function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;

        return duration._bubble();
      }

      // supports only 2.0-style add(1, 's') or add(duration)
      function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
      }

      // supports only 2.0-style subtract(1, 's') or subtract(duration)
      function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
      }

      function absCeil(number) {
        if (number < 0) {
          return Math.floor(number);
        } else {
          return Math.ceil(number);
        }
      }

      function bubble() {
        var milliseconds = this._milliseconds;
        var days = this._days;
        var months = this._months;
        var data = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
          milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
          days = 0;
          months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;

        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;

        hours = absFloor(minutes / 60);
        data.hours = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days = days;
        data.months = months;
        data.years = years;

        return this;
      }

      function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
      }

      function monthsToDays(months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
      }

      function as(units) {
        if (!this.isValid()) {
          return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
          days = this._days + milliseconds / 864e5;
          months = this._months + daysToMonths(days);
          switch (units) {
            case 'month':
              return months;
            case 'quarter':
              return months / 3;
            case 'year':
              return months / 12;}

        } else {
          // handle milliseconds separately because of floating point math errors (issue #1867)
          days = this._days + Math.round(monthsToDays(this._months));
          switch (units) {
            case 'week':
              return days / 7 + milliseconds / 6048e5;
            case 'day':
              return days + milliseconds / 864e5;
            case 'hour':
              return days * 24 + milliseconds / 36e5;
            case 'minute':
              return days * 1440 + milliseconds / 6e4;
            case 'second':
              return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond':
              return Math.floor(days * 864e5) + milliseconds;
            default:
              throw new Error('Unknown unit ' + units);}

        }
      }

      // TODO: Use this.as('ms')?
      function valueOf$1() {
        if (!this.isValid()) {
          return NaN;
        }
        return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
      }

      function makeAs(alias) {
        return function () {
          return this.as(alias);
        };
      }

      var asMilliseconds = makeAs('ms');
      var asSeconds = makeAs('s');
      var asMinutes = makeAs('m');
      var asHours = makeAs('h');
      var asDays = makeAs('d');
      var asWeeks = makeAs('w');
      var asMonths = makeAs('M');
      var asQuarters = makeAs('Q');
      var asYears = makeAs('y');

      function clone$1() {
        return createDuration(this);
      }

      function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
      }

      function makeGetter(name) {
        return function () {
          return this.isValid() ? this._data[name] : NaN;
        };
      }

      var milliseconds = makeGetter('milliseconds');
      var seconds = makeGetter('seconds');
      var minutes = makeGetter('minutes');
      var hours = makeGetter('hours');
      var days = makeGetter('days');
      var months = makeGetter('months');
      var years = makeGetter('years');

      function weeks() {
        return absFloor(this.days() / 7);
      }

      var round = Math.round;
      var thresholds = {
        ss: 44, // a few seconds to seconds
        s: 45, // seconds to minute
        m: 45, // minutes to hour
        h: 22, // hours to day
        d: 26, // days to month
        M: 11 // months to year
      };

      // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
      function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
      }

      function relativeTime$1(posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds = round(duration.as('s'));
        var minutes = round(duration.as('m'));
        var hours = round(duration.as('h'));
        var days = round(duration.as('d'));
        var months = round(duration.as('M'));
        var years = round(duration.as('y'));

        var a = seconds <= thresholds.ss && ['s', seconds] || seconds < thresholds.s && ['ss', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days] || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
      }

      // This function allows you to set the rounding function for relative time strings
      function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
          return round;
        }
        if (typeof roundingFunction === 'function') {
          round = roundingFunction;
          return true;
        }
        return false;
      }

      // This function allows you to set a threshold for relative time strings
      function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
          return false;
        }
        if (limit === undefined) {
          return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
          thresholds.ss = limit - 1;
        }
        return true;
      }

      function humanize(withSuffix) {
        if (!this.isValid()) {
          return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
          output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
      }

      var abs$1 = Math.abs;

      function sign(x) {
        return (x > 0) - (x < 0) || +x;
      }

      function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
          return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days = abs$1(this._days);
        var months = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
          // this is the same as C#'s (Noda) and python (isodate)...
          // but not other JS (goog.date)
          return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return totalSign + 'P' + (Y ? ymSign + Y + 'Y' : '') + (M ? ymSign + M + 'M' : '') + (D ? daysSign + D + 'D' : '') + (h || m || s ? 'T' : '') + (h ? hmsSign + h + 'H' : '') + (m ? hmsSign + m + 'M' : '') + (s ? hmsSign + s + 'S' : '');
      }

      var proto$2 = Duration.prototype;

      proto$2.isValid = isValid$1;
      proto$2.abs = abs;
      proto$2.add = add$1;
      proto$2.subtract = subtract$1;
      proto$2.as = as;
      proto$2.asMilliseconds = asMilliseconds;
      proto$2.asSeconds = asSeconds;
      proto$2.asMinutes = asMinutes;
      proto$2.asHours = asHours;
      proto$2.asDays = asDays;
      proto$2.asWeeks = asWeeks;
      proto$2.asMonths = asMonths;
      proto$2.asQuarters = asQuarters;
      proto$2.asYears = asYears;
      proto$2.valueOf = valueOf$1;
      proto$2._bubble = bubble;
      proto$2.clone = clone$1;
      proto$2.get = get$2;
      proto$2.milliseconds = milliseconds;
      proto$2.seconds = seconds;
      proto$2.minutes = minutes;
      proto$2.hours = hours;
      proto$2.days = days;
      proto$2.weeks = weeks;
      proto$2.months = months;
      proto$2.years = years;
      proto$2.humanize = humanize;
      proto$2.toISOString = toISOString$1;
      proto$2.toString = toISOString$1;
      proto$2.toJSON = toISOString$1;
      proto$2.locale = locale;
      proto$2.localeData = localeData;

      proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
      proto$2.lang = lang;

      // Side effect imports

      // FORMATTING

      addFormatToken('X', 0, 0, 'unix');
      addFormatToken('x', 0, 0, 'valueOf');

      // PARSING

      addRegexToken('x', matchSigned);
      addRegexToken('X', matchTimestamp);
      addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
      });
      addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
      });

      // Side effect imports


      hooks.version = '2.24.0';

      setHookCallback(createLocal);

      hooks.fn = proto;
      hooks.min = min;
      hooks.max = max;
      hooks.now = now;
      hooks.utc = createUTC;
      hooks.unix = createUnix;
      hooks.months = listMonths;
      hooks.isDate = isDate;
      hooks.locale = getSetGlobalLocale;
      hooks.invalid = createInvalid;
      hooks.duration = createDuration;
      hooks.isMoment = isMoment;
      hooks.weekdays = listWeekdays;
      hooks.parseZone = createInZone;
      hooks.localeData = getLocale;
      hooks.isDuration = isDuration;
      hooks.monthsShort = listMonthsShort;
      hooks.weekdaysMin = listWeekdaysMin;
      hooks.defineLocale = defineLocale;
      hooks.updateLocale = updateLocale;
      hooks.locales = listLocales;
      hooks.weekdaysShort = listWeekdaysShort;
      hooks.normalizeUnits = normalizeUnits;
      hooks.relativeTimeRounding = getSetRelativeTimeRounding;
      hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
      hooks.calendarFormat = getCalendarFormat;
      hooks.prototype = proto;

      // currently HTML5 input type only supports 24-hour formats
      hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD', // <input type="date" />
        TIME: 'HH:mm', // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW', // <input type="week" />
        MONTH: 'YYYY-MM' // <input type="month" />
      };

      return hooks;
    });
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }return arr2;
    } else {
      return Array.from(arr);
    }
  }

  var vueMoment = {
    install: function install(Vue, options) {
      var moment$$1 = options && options.moment ? options.moment : moment;

      Object.defineProperties(Vue.prototype, {
        $moment: {
          get: function get() {
            return moment$$1;
          } } });



      Vue.moment = moment$$1;

      Vue.filter('moment', function () {
        var arguments$1 = arguments;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments$1[_key];
        }

        args = Array.prototype.slice.call(args);
        var input = args.shift();
        var date = void 0;

        if (Array.isArray(input) && typeof input[0] === 'string') {
          // If input is array, assume we're being passed a format pattern to parse against.
          // Format pattern will accept an array of potential formats to parse against.
          // Date string should be at [0], format pattern(s) should be at [1]
          date = moment$$1(input[0], input[1], true);
        } else if (typeof input === 'number') {
          if (input.toString().length < 12) {
            // If input is an integer with fewer than 12 digits, assume Unix seconds...
            date = moment$$1.unix(input);
          } else {
            // ..otherwise, assume milliseconds.
            date = moment$$1(input);
          }
        } else {
          // Otherwise, throw the input at moment and see what happens...
          date = moment$$1(input);
        }

        if (!input || !date.isValid()) {
          // Log a warning if moment couldn't reconcile the input. Better than throwing an error?
          __f__("warn", 'Could not build a valid `moment` object from input.', " at node_modules/vue-moment/dist/vue-moment.js:4577");
          return input;
        }

        function parse() {
          var arguments$1 = arguments;

          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments$1[_key2];
          }

          args = Array.prototype.slice.call(args);
          var method = args.shift();

          switch (method) {
            case 'add':
              {
                /*
                * Mutates the original moment by adding time.
                * http://momentjs.com/docs/#/manipulating/add/
                */

                var addends = args.shift().split(',').map(Function.prototype.call, String.prototype.trim);
                var obj = {};

                for (var n = 0; n < addends.length; n++) {
                  var addend = addends[n].split(' ');
                  obj[addend[1]] = addend[0];
                }
                date.add(obj);
                break;
              }

            case 'subtract':
              {
                /*
                * Mutates the original moment by subtracting time.
                * http://momentjs.com/docs/#/manipulating/subtract/
                */

                var subtrahends = args.shift().split(',').map(Function.prototype.call, String.prototype.trim);
                var _obj = {};

                for (var _n = 0; _n < subtrahends.length; _n++) {
                  var subtrahend = subtrahends[_n].split(' ');
                  _obj[subtrahend[1]] = subtrahend[0];
                }
                date.subtract(_obj);
                break;
              }

            case 'from':
              {
                /*
                * Display a moment in relative time, either from now or from a specified date.
                * http://momentjs.com/docs/#/displaying/fromnow/
                */

                var from = 'now';
                var removeSuffix = false;

                if (args[0] === 'now') {args.shift();}
                // If valid, assume it is a date we want the output computed against.
                if (moment$$1(args[0]).isValid()) {from = moment$$1(args.shift());}

                if (args[0] === true) {
                  args.shift();
                  removeSuffix = true;
                }

                if (from !== 'now') {
                  date = date.from(from, removeSuffix);
                } else {
                  date = date.fromNow(removeSuffix);
                }
                break;
              }

            case 'diff':
              {
                /*
                * Mutates the original moment by doing a difference with another date.
                * http://momentjs.com/docs/#/displaying/difference/
                */

                var referenceTime = moment$$1();
                var units = '';
                var _float = false;

                if (moment$$1(args[0]).isValid()) {
                  // If valid, assume it is a date we want the output computed against.
                  referenceTime = moment$$1(args.shift());
                } else if (args[0] === null || args[0] === 'now') {
                  // If null or 'now', remove argument and proceed with default referenceTime.
                  args.shift();
                }

                if (args[0]) {units = args.shift();}

                if (args[0] === true) {_float = args.shift();}

                date = date.diff(referenceTime, units, _float);
                break;
              }

            case 'calendar':
              {
                /*
                * Formats a date with different strings depending on how close
                * to a certain date (today by default) the date is.
                * http://momentjs.com/docs/#/displaying/calendar-time/
                */

                var _referenceTime = moment$$1();
                var formats = {};

                if (moment$$1(args[0]).isValid()) {
                  // If valid, assume it is a date we want the output computed against.
                  _referenceTime = moment$$1(args.shift());
                } else if (args[0] === null || args[0] === 'now') {
                  // If null or 'now', remove argument and proceed with default referenceTime.
                  args.shift();
                }

                if (_typeof(args[0]) === 'object') {formats = args.shift();}

                date = date.calendar(_referenceTime, formats);
                break;
              }

            case 'utc':
              {
                /*
                * Mutates the original moment by converting to UTC
                * https://momentjs.com/docs/#/manipulating/utc/
                */
                date.utc();
                break;
              }

            case 'timezone':
              {
                /*
                * Mutates the original moment by converting to a new timezone.
                * https://momentjs.com/timezone/docs/#/using-timezones/converting-to-zone/
                */
                date.tz(args.shift());
                break;
              }

            default:
              {
                /*
                * Formats a date by taking a string of tokens and replacing
                * them with their corresponding values.
                * http://momentjs.com/docs/#/displaying/format/
                */

                var format = method;
                date = date.format(format);
              }}


          if (args.length) {parse.apply(parse, args);}
        }

        parse.apply(parse, args);

        return date;
      });

      Vue.filter('duration', function () {
        var arguments$1 = arguments;

        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments$1[_key3];
        }

        /*
          * Basic pass-through filter for leveraging moment.js's ability
          * to manipulate and display durations.
          * https://momentjs.com/docs/#/durations/
          */
        args = Array.prototype.slice.call(args);
        var input = args.shift();
        var method = args.shift();

        function createDuration(time) {
          if (!Array.isArray(time)) {time = [time];}
          var result = moment$$1.duration.apply(moment$$1, _toConsumableArray(time));
          if (!result.isValid()) {__f__("warn", 'Could not build a valid `duration` object from input.', " at node_modules/vue-moment/dist/vue-moment.js:4767");}
          return result;
        }
        var duration = createDuration(input);

        if (method === 'add' || method === 'subtract') {
          // Generates a duration object and either adds or subtracts it
          // from our original duration.
          var durationChange = createDuration(args);
          duration[method](durationChange);
        } else if (duration && duration[method]) {
          var _duration;

          // This gives a full proxy to moment.duration functions.
          duration = (_duration = duration)[method].apply(_duration, _toConsumableArray(args));
        }

        return duration;
      });
    } };


  var vueMoment_1 = vueMoment.install;

  exports['default'] = vueMoment;
  exports.install = vueMoment_1;

  Object.defineProperty(exports, '__esModule', { value: true });

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/global.js */ 8), __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)["default"]))

/***/ })
],[[0,"app-config"]]]);