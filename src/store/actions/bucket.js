import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "../contants/types";
import { request } from '../../plugins/axios';

export default {
  asyncFetchBucketList({ commit }) {
    commit(FETCH_REQUEST);

    request.get("/qiniu/bucket")
      .then(data => {
        commit(FETCH_SUCCESS, { type: 'data', data });
      })
      .catch(err => {
        commit(FETCH_FAILURE, { error: err });
      });
  },
  asyncFetchFileList({ commit }, params) {
    const payload = { type: 'files', files: [] };
    commit(FETCH_REQUEST, payload);

    request.get("/qiniu/file", { params })
      .then(data => {
        payload.files = data;
        commit(FETCH_SUCCESS, payload)
      })
      .catch(err => {
        commit(FETCH_FAILURE, { error: err })
      })
  },
};
