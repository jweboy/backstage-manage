import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "../contants/types";

export default {
  [FETCH_REQUEST](state, action) {
    state.isFetching = true;
  },
  [FETCH_SUCCESS](state, action) {
    state.isFetching = false;
    state.data = action.data;
    state.lastUpdated = new Date().getTime();
  },
  [FETCH_FAILURE](state, action) {
    state.isFetching = false;
    state.error = action.error;
  }
};
