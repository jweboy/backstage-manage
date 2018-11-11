import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
  // 插件
  plugins: [],
  // 模块化
  modules,
});
