import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "../contants/types";

export default {
  [FETCH_REQUEST](state, action) {
    state[action.request].isFetching = true;
  },
  [FETCH_SUCCESS](state, action) {
    state[action.request].isFetching = false;
    state[action.request].data = action.data;
    state[action.request].lastUpdated = new Date().getTime();
  },
  [FETCH_FAILURE](state, action) {
    state[action.request].isFetching = false;
    state[action.request].error = action.error;
  }
};
