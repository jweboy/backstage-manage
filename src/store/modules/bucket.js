import actions from "../actions/bucket";
import getters from "../getters/bucket";
import mutations from "../mutations/bucket";

export const bucket = {
  state: {
    isFetching: false,
    data: [],
    name: '',
    files: [],
  },
  actions,
  getters,
  mutations
};
