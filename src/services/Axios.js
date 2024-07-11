import axios from 'axios'

const { VITE_NODE_ENV, VITE_DEV_BASE_URL, VITE_PROD_BASE_URL } = import.meta.env

const baseURL = VITE_NODE_ENV === 'production' ? VITE_PROD_BASE_URL : VITE_DEV_BASE_URL

const Axios = axios.create({ baseURL })

Axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

Axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response) {
      console.error('Response error:', error.response.data)
    } else if (error.request) {
      console.error('Request error:', error.request)
    } else {
      console.error('Error:', error.message)
    }
    return Promise.reject(error)
  }
)

export default Axios
