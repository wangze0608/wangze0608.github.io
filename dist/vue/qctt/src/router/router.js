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
var newcar = function newcar(r) {
  return require.ensure([], function () {
    return r(require('../page/newcar/newcar'));
  }, 'newcar');
};
var industry = function industry(r) {
  return require.ensure([], function () {
    return r(require('../page/industry/industry'));
  }, 'industry');
};
var guid = function guid(r) {
  return require.ensure([], function () {
    return r(require('../page/guid/guid'));
  }, 'guid');
};
var mp = function mp(r) {
  return require.ensure([], function () {
    return r(require('../page/mp/index'));
  }, 'mp');
};
var usecar = function usecar(r) {
  return require.ensure([], function () {
    return r(require('../page/usecar/index'));
  }, 'usecar');
};
var area = function area(r) {
  return require.ensure([], function () {
    return r(require('../page/area/index'));
  }, 'area');
};

// export default [{
//   path:'/wangze/vuebuild/',
//   component:App,
//   children: [
//     {
//       path: '',
//       redirect: '/wangze/vuebuild/index'
//     },
//     /*首页*/
//     {
//       path: '/wangze/vuebuild/index',
//       component: index
//     },
//     /*视频列表*/
//     {
//       path:'/wangze/vuebuild/video',
//       component: video
//     }
//   ]
// }]


exports.default = [{
  path: '/wangze/vuebuild/',
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
  },
  /*新车*/
  {
    path: '/newcar',
    component: newcar
  },
  /*行业*/
  {
    path: '/industry',
    component: industry
  },
  /*导购*/
  {
    path: '/guid',
    component: guid
  },
  /*头条客*/
  {
    path: '/mp',
    component: mp
  },
  /*用车*/
  {
    path: '/usecar',
    component: usecar
  },
  /*地区*/
  {
    path: '/area',
    component: area
  }]
}];
//# sourceMappingURL=router.js.map