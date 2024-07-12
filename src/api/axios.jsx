import axios from 'axios'
import useAuth from '../hooks/useAuth'

const { VITE_NODE_ENV, VITE_DEV_BASE_URL, VITE_PROD_BASE_URL } = import.meta.env
const baseURL = VITE_NODE_ENV === 'production' ? VITE_PROD_BASE_URL : VITE_DEV_BASE_URL

const axiosPublic = axios.create({
  baseURL
})

const axiosPrivate = axios.create({
  baseURL,
  withCredentials: true
})

// const isTokenExpired = (token) => {
//   if (!token) return true

//   const decodedToken = JSON.parse(atob(token.split('.')[1]))
//   const currentTime = Date.now() / 1000

//   return decodedToken.exp < currentTime
// }

export { axiosPublic, axiosPrivate }
