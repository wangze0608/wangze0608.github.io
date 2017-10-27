'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NAV_INDEX$NAV_OFFSET;

var _mutationTypes = require('./mutation-types');

var _mUtils = require('../config/mUtils');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //人mutations-type中引入需要使用的常量


exports.default = (_NAV_INDEX$NAV_OFFSET = {}, _defineProperty(_NAV_INDEX$NAV_OFFSET, _mutationTypes.NAV_INDEX, function (state, index) {
  state.navIndex = index;
  (0, _mUtils.setStore)('nav_index', index);
}), _defineProperty(_NAV_INDEX$NAV_OFFSET, 'NAV_OFFSET', function NAV_OFFSET(state, offset) {
  state.navOffset = offset;
  (0, _mUtils.setStore)('nav_offset', offset);
}), _NAV_INDEX$NAV_OFFSET);
//# sourceMappingURL=mutations.js.map