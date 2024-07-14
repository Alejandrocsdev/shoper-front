import axios from 'axios'
import useAuth from '../hooks/useAuth'

const { VITE_NODE_ENV, VITE_DEV_BASE_URL, VITE_PROD_BASE_URL } = import.meta.env
const baseURL = VITE_NODE_ENV === 'production' ? VITE_PROD_BASE_URL : VITE_DEV_BASE_URL

const axiosInstance = axios.create({
  baseURL
})

export const axiosPrivate = axios.create({
  baseURL,
  withCredentials: true
})

const errMsg = (err, type) => {
  console.log(type)
  console.log('錯誤名稱', err.name)
  console.log('錯誤訊息', err.message)
}

axiosInstance.interceptors.response.use(
  // 成功回應
  (response) => response,
  (err) => {
    // Axios錯誤
    if (axios.isAxiosError(err)) {
      // 回應錯誤
      if (err.response) errMsg(err, '回應錯誤:')
      // 請求錯誤
      else if (err.request) errMsg(err, '回應錯誤:')
      // 其他錯誤
      else errMsg(err, '其他錯誤:')
    }
    // 非Axios錯誤
    else errMsg(err, '非Axios錯誤:')

    return Promise.reject(err)
  }
)

export default axiosInstance
