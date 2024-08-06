import axios from 'axios'
import * as bootstrap from "bootstrap";
import { useUserStore } from "@/store/user.js";

console.log(import.meta.env.VITE_BASE_URL)
// 创建axios实例
const service = axios.create({
  baseURL:import.meta.env.VITE_BASE_URL,
  timeout: 50000, // 请求超时时间：50s
  headers: { 'Content-Type': 'application/json;charset=utf-8' }
})
let errorState=false//过期弹窗拦截
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    const { code, message } = res
    // token过期
    if (code == 401&&!errorState) {
      errorState=true
      handleError()
    } else if (code == 500) {
     
      window.$alert?.show({
        message:error?.message || '系统出错',
        type:'warning'
      })
    }
    // 方便接口处理错误逻辑返回res
    return Promise.resolve(res)
  },
  (error) => {
    console.log('请求异常：', error)
    // 未认证
    if (error.response.status === 401&&!errorState) {
     
      handleError()
    } else {
      window.$alert?.show({
        message:error?.message || '系统出错',
        type:'warning'
      })
    }
    return Promise.reject(error?.response?.data||{})
  }
)

// 统一处理请求响应未登录异常
function handleError() {
  
  const { isLogin, clearData } = store.user.useUserStore()
  if (isLogin) {
    var myModal = new bootstrap.Modal(document.getElementById("loginModal"), {
      keyboard: false,
    });
    myModal.show();
  }
}

// 导出实例
export default service
