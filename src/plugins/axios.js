import axios from 'axios';
import { Message } from './iview';

// 参考文章 https://juejin.im/post/59a22e71518825242c422604

const BASEURL = 'http://118.24.155.105:4000/v1';

// 基础信息配置
const Axios = axios.create({
  baseURL: BASEURL,
  timeout: 5000, // 5s超时，
  responseType: 'json', // 返回json格式
  // FIXME: 暂时不能加缓存，后续需要更改
  withCredentials: false, // 是否允许携带cookie等
  headers: {
    'Content-Type': 'application/x-www-form-urlencode;charset=utf-8',
  }
})

// 请求拦截器
Axios.interceptors.request.use(
  function reqSuccHandler(config){
    // console.log(config);
    return config
  },
  function reqErrHandler(err) {
    return Promise.reject(err.data.error.message)
  }
)

// 响应拦截器
Axios.interceptors.response.use(
  function resSuccHandler(res) {
    if (!!res.data && res.data.code === 0) {
      return res.data.data
    } else {
      const msg = res.data.error.message;
      const errMsg = msg.message ? msg.message : msg;
      Message.error({
        content: errMsg
      })
      return Promise.reject(msg);
    }
  },
  function resErrHander(err) {
    // TODO: 这里可以用来做登录、特定状态的判断

    // 返回错误信息
    const errInfo = err.data.error ? err.data.error.message : err.data;
    return Promise.reject(errInfo)
  }
)

// 导出用于vuex
export const request = Axios

// 封装成Vue原型链的$http方法
export default {
  install: function(Vue, option) {
    Object.defineProperty(Vue.prototype, '$http', { value: Axios })
  },
}