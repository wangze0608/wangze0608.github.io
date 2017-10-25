'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _router = require('./router/router');

var _router2 = _interopRequireDefault(_router);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.prototype.$ajax = _axios2.default; // The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

_vue2.default.config.productionTip = false;

_vue2.default.use(_vueRouter2.default);
var router = new _vueRouter2.default({
  routes: _router2.default,
  mode: 'history'
});

/* eslint-disable no-new */
new _vue2.default({
  router: router,
  axios: _axios2.default
}).$mount('#app');
//# sourceMappingURL=main.js.map