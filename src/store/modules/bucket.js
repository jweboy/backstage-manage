import actions from "../actions/bucket";
import getters from "../getters/bucket";
import mutations from "../mutations/bucket";

export const bucket = {
  state: {
    isFetching: false,
    data: [],
    name: 'new-test', // TODO: 需要从路由获取
    files: {
      data: [],
      total: 0,
    },
  },
  actions,
  getters,
  mutations
};
