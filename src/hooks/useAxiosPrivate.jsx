import { axiosPrivate } from '../api/axios'
import { useEffect } from 'react'
import useRefreshToken from './useRefreshToken'
import useAuth from './useAuth'

const useAxiosPrivate = () => {
  const refresh = useRefreshToken()
  const { auth } = useAuth()

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        // console.log(config.sent)
        // console.log('Authorization: ', config?.headers['Authorization'])
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth?.accessToken}`
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        // console.log(error)
        const prevRequest = error?.config
        // console.log('prevRequest.sent: ', error?.config?.sent)
        // console.log('error.response.status: ', error?.response?.status)
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true
          const newAccessToken = await refresh()
          // console.log('newAccessToken: ', newAccessToken)
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
          // console.log('axiosPrivate(prevRequest): ', prevRequest)
          return axiosPrivate(prevRequest)
        }

        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true
          const newAccessToken = await refresh()
          // console.log('newAccessToken: ', newAccessToken)
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
          // console.log('axiosPrivate(prevRequest): ', prevRequest)
          return axiosPrivate(prevRequest)
        }

        return Promise.reject(error)
      }
    )

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept)
      axiosPrivate.interceptors.response.eject(responseIntercept)
    }
  }, [auth, refresh])

  return axiosPrivate
}

export default useAxiosPrivate
