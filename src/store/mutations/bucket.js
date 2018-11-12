import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "../contants/types";
import router from '../../router';
import VueRouter from "vue-router";

export default {
  [FETCH_REQUEST](state, action) {
    state.isFetching = true;
  },
  [FETCH_SUCCESS](state, action) {
    const { type } = action;
    state.isFetching = false;
    state[type] = action[type];
    state.lastUpdated = new Date().getTime();
  },
  [FETCH_FAILURE](state, action) {
    state.isFetching = false;
    state.error = action.error;
  },
  onClick(state, action) {
    const { name } = action;
    state.name = name;
    router.push(`/file/${name}`)
  },
  goBack() {
    router.go(-1);
  }
};
