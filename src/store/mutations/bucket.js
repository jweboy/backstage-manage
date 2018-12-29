import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "../contants/types";
import router from '../../router';

export default {
  [FETCH_REQUEST](state, action) {
    state.isFetching = true;
  },
  [FETCH_SUCCESS](state, action) {
    state.isFetching = false;
    if(action != null) {
      const { type } = action;
      state[type] =  action[type];
    }
    state.lastUpdated = new Date().getTime();
  },
  [FETCH_FAILURE](state, action) {
    state.isFetching = false;
  },
  setBucket(state, action) {
    state.name = action.bucket;
  }
};
