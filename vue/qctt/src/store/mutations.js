//人mutations-type中引入需要使用的常量
import {
  NAV_INDEX,
} from "./mutation-types";

import {setStore,getStore} from '../config/mUtils'


export default {
  /*导航index*/
  [NAV_INDEX](state,index){
    state.navIndex = index;
    setStore('nav_index',index);
  },
  
  NAV_OFFSET:function (state,offset) {
    state.navOffset = offset ;
    setStore('nav_offset',offset);
  }
}
