import axios from 'axios';
import qs from 'query-string';
import { Loading, Notification } from './element';

// 参考文章 https://juejin.im/post/59a22e71518825242c422604

const BASEURL = 'http://118.24.155.105:4000/api/v1';

// function getRequestKey(config) {
//   return config.url + '|' + config.method;
// }

// function removeMultipleRequest(config) {
//   const key = getRequestKey(config);
//   if(typeof pendingQueque[key] === 'function') {
//     delete pendingQueque[key];
//   }
// }

// 基础信息配置
const Axios = axios.create({
  baseURL: BASEURL,
  timeout: 5000, // 5s超时，
  responseType: 'json', // 返回json格式
  // FIXME: 暂时不能加缓存，后续需要更改
  withCredentials: false, // 是否允许携带cookie等
  headers: {
    'content-Type': 'application/x-www-form-urlencode;charset=utf-8',
  },
  // 自定义字段
  _loading: true,
  _useForm: false,
});

let loading = null;

// 请求拦截器
Axios.interceptors.request.use(
  function reqSuccHandler(config){
    // FIXME: 有实时搜索的请求时候测试这块的重复请求取消
    // removeMultipleRequest(config);
    // config.cancelToken = new CancelToken((cancel) =>{
    //   const key = getRequestKey(config);
    //   pendingQueque[key] = cancel;
    // });
    // console.table(pendingQueque)

    if(config._loading) {
      loading = Loading.service({
        lock: true, // loading锁定页面滚动
      });
    }

    if(config._useForm) {
      config.headers['content-Type'] = 'application/x-www-form-urlencoded';
      config.data = qs.stringify(config.data);
    }
    return config
  },
  function reqErrHandler(err) {
    console.error('req_err', err);
    return Promise.reject(err)
  }
)

// 响应拦截器
Axios.interceptors.response.use(
  function resSuccHandler(res) {
    loading && loading.close();

    // TODO: 特定定义 比如我请求文件资源 下面的判断就不适用需要优化
    // TODO: response错误码的判断
    if (!!res.data) {
      // 常规请求
      if(res.data.code === 0) {
        return res.data.data;
      }

      // 请求服务器直接下载文件
      if(res.config.responseType === 'blob') {
        return res.data;
      }
    } else {
      const msg = res.data ? res.data.message : '';

      Notification.error({ title: '请求失败',  message: msg });

      return Promise.reject(msg);
    }
  },
  function resErrHander(err) {
    console.error('res_err', err);

    loading.close();
    
    // TODO: 这里可以用来做登录、特定状态的判断

    // 中途取消请求
    const isCanceled = axios.isCancel(err);
    const errMsg = isCanceled ? '当前请求被中断了' : err;

    // 返回错误信息
    Notification.error({ title: '请求错误', message: errMsg });
    
    return Promise.reject(err)
  }
)

// 导出用于vuex
export const request = Axios
export const CancelToken =  axios.CancelToken;

// 封装成Vue原型链的$http方法
export default {
  install: function(Vue, option) {
    Object.defineProperty(Vue.prototype, '$http', { value: Axios })
  },
}