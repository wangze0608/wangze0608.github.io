// 设置存储于localstorage中的方法,便于在vuex-store中存储状态值
export  const setStore = (name,content) => {
  if(!name) return;
  if(typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  // window.localStorage.setItem(name,content);
  window.sessionStorage.setItem(name,content);
};

//获取localstorage
export  const getStore = name => {
  if(!name) return;
  // return window.localStorage.getItem(name);
  return window.sessionStorage.getItem(name);
  
  // console.log()
};

//删除localstorage
export const  removeStore =  name =>{
  if(!name) return;
  // return window.localStorage.removeItem(name);
  return window.sessionStorage.removeItem(name);
}
