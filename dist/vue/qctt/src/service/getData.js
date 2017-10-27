'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNavOffset = exports.getNavIndex = undefined;

var _mUtils = require('../config/mUtils');

var getNavIndex = exports.getNavIndex = function getNavIndex(nav_index) {
  return (0, _mUtils.getStore)(nav_index);
};
var getNavOffset = exports.getNavOffset = function getNavOffset(offset) {
  return (0, _mUtils.getStore)(offset);
};
//# sourceMappingURL=getData.js.map