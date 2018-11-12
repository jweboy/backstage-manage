import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "../contants/types";
import axios from "axios";

export default {
  asyncFetchBucketList({ commit }) {
    commit(FETCH_REQUEST);
    axios
      .get("http://118.24.155.105:4000/v1/qiniu/bucket")
      .then(({ data }) => {
        commit(FETCH_SUCCESS, {
          type: 'data',
          data: data.data
        });
      })
      .catch(err => {
        commit(FETCH_FAILURE, {
          error: err
        });
      });
  },
  asyncFetchFileList({ commit }, params) {
    const payload = { type: 'files', files: [] };
    commit(FETCH_REQUEST, payload);
    axios.get("http://118.24.155.105:4000/v1/qiniu/file", { params })
      .then(({ data }) => {
        payload.files = data.data;
        commit(FETCH_SUCCESS, payload)
      })
      .catch(err => {
        commit(FETCH_FAILURE, {
          error: err
        })
      })
  },
};
