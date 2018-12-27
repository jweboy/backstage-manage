import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "../contants/types";
import { request } from '../../plugins/axios';

// TODO: 这里需要优化到函数里
const payload = { 
  type: 'files', 
  files: { data: [] }, 
};

// TODO: request包装成一个公用的
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
    
    commit(FETCH_REQUEST, payload);

    return request.get("/qiniu/file", { params })
      .then(res => {
        payload.files.data = res.data;
        payload.files.total = res.total;
        commit(FETCH_SUCCESS, payload)
      })
      .catch(err => {
        commit(FETCH_FAILURE, { error: err })
      })
  },
  asyncDeleteFile({ commit }, params) {
    commit(FETCH_REQUEST)

    return request.delete('/qiniu/file', { params })
      .then(data => {
        commit(FETCH_SUCCESS, data)
      })
      .catch(err => {
        commit(FETCH_FAILURE, { error: err })
      })
  },
  asyncGetFielDetail({ commit }, params) {
    commit(FETCH_REQUEST)

    request.get('/qiniu/file/detail', { params })
      .then(data => {
        commit(FETCH_SUCCESS, data)
      })
      .catch(err => {
        commit(FETCH_FAILURE, { error: err })
      })
  },
  asyncUpdateFile({ commit }, data) {
    commit(FETCH_REQUEST)

    return request.put('/qiniu/file/edit', data, { _useForm: true })
      .then(data => {
        commit(FETCH_SUCCESS, data)
      })
      .catch(err => {
        commit(FETCH_FAILURE, { error: err })
      })
  }
};
