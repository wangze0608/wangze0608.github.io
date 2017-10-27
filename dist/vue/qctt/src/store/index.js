'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _mutations = require('./mutations');

var _mutations2 = _interopRequireDefault(_mutations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

var state = {
  navIndex: 1, /*导航项下标*/
  navOffset: 0 /*导航偏移量*/
};

exports.default = new _vuex2.default.Store({
  state: state,
  mutations: _mutations2.default
});
//# sourceMappingURL=index.js.map