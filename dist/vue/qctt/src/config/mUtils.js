'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 设置存储于localstorage中的方法,便于在vuex-store中存储状态值
var setStore = exports.setStore = function setStore(name, content) {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  // window.localStorage.setItem(name,content);
  window.sessionStorage.setItem(name, content);
};

//获取localstorage
var getStore = exports.getStore = function getStore(name) {
  if (!name) return;
  // return window.localStorage.getItem(name);
  return window.sessionStorage.getItem(name);

  // console.log()
};

//删除localstorage
var removeStore = exports.removeStore = function removeStore(name) {
  if (!name) return;
  // return window.localStorage.removeItem(name);
  return window.sessionStorage.removeItem(name);
};
//# sourceMappingURL=mUtils.js.map