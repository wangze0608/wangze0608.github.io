'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = require('../App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var index = function index(r) {
  return require.ensure([], function () {
    return r(require('../page/index/index'));
  }, 'index');
};
var video = function video(r) {
  return require.ensure([], function () {
    return r(require('../page/video/index'));
  }, 'video');
};

exports.default = [{
  path: 'https://wangze0608.github.io/vue/qctt/',
  component: _App2.default,
  children: [{
    path: '',
    redirect: '/index'
  },
  /*首页*/
  {
    path: '/index',
    component: index
  },
  /*视频列表*/
  {
    path: '/video',
    component: video
  }]
}];
//# sourceMappingURL=router.js.map