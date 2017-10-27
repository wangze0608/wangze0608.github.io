import Vue from  'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex);

const state = {
  navIndex:1,  /*导航项下标*/
  navOffset:0 /*导航偏移量*/
};

export  default new Vuex.Store({
  state,
  mutations
})

