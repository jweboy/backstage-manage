import { FETCH_REQUEST, FETCH_SUCCESS } from "../contants/types";
import { request, CancelToken } from '../../plugins/axios';

// TODO: 这里需要优化到函数里
const payload = { 
  type: 'files', 
  files: { data: [] }, 
};

let cancelRequest = null;

// TODO: request包装成一个公用的
export default {
  asyncFetchBucketList({ commit }) {
    commit(FETCH_REQUEST);

    return request.get("/qiniu/bucket").then(data => commit(FETCH_SUCCESS, { type: 'data', data }));
  },
  asyncFetchFileList({ commit }, params) {
    commit(FETCH_REQUEST, payload);

    return request.get("/qiniu/file", { params })
      .then(res => {
        payload.files.data = res.data;
        payload.files.total = res.total;
        commit(FETCH_SUCCESS, payload);
      });
  },
  asyncDeleteFile({ commit }, params) {
    // TODO: 提取一个公共函数处理URL
    return request.delete(`/qiniu/file?id=${params.id}`, { 
      _loading: false,
      cancelToken: new CancelToken(cancel => {
        cancelRequest = cancel;
      })
     })
      .catch(err => Promise.reject(err));
  },
  syncCancelRequest() {
    return cancelRequest('请求被中断');
  },
  asyncGetFielDetail({ commit }, params) {
    commit(FETCH_REQUEST);

    return request.get('/qiniu/file/detail', { params })
      .then(data => commit(FETCH_SUCCESS, data));
  },
  asyncUpdateFile({ commit }, data) {
    return request.put('/qiniu/file/edit', data, { 
      _useForm: true, 
      _loading: false,
    })
  },
  asyncDownloadFile(_, params) {
    return request.get(`http://pkhleymnc.bkt.clouddn.com/${params.name}`, {
      responseType: 'blob',
      _loading: false,
    });
  },
};
