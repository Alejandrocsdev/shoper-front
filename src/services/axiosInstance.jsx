import axios from 'axios'

const { VITE_NODE_ENV, VITE_DEV_BASE_URL, VITE_PROD_BASE_URL } = import.meta.env
const baseURL = VITE_NODE_ENV === 'production' ? VITE_PROD_BASE_URL : VITE_DEV_BASE_URL

const axiosInstance = axios.create({ baseURL })

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = store.getState().auth.token
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )

export default axiosInstance
