import actions from '../actions/bucket';
import gutters from '../gutters/bucket';
import mutations from '../mutations/bucket';

export const bucket = {
  state: {
    isFetching: false,
    data: [],
  },
  actions,
  gutters,
  mutations,
};

