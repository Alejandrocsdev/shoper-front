import { axiosPrivate } from '../api/axios'
import { useEffect } from 'react'
import useRefreshToken from './useRefreshToken'
import useAuth from './useAuth'

const useAxiosPrivate = () => {
  const refresh = useRefreshToken()
  const { auth } = useAuth()

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      async (config) => {
        // console.log(config.sent)
        const headers = config?.headers['Authorization']

        // 驗證憑證有效
        const isExpired = (accessToken) => {
          try {
            if (accessToken) {
              const { exp } = JSON.parse(atob(accessToken.split('.')[1]))
              return exp < Date.now() / 1000
            } else {
              return true
            }
          } catch (err) {
            console.log('憑證解碼失敗')
            return true
          }
        }

        if (!headers) {
          const newAccessToken = await refresh()
          config.headers['Authorization'] = `Bearer ${newAccessToken}`
        } else {
          const at = headers.split(' ')[1]
          if (isExpired(at)) {
            const newAccessToken = await refresh()
            config.headers['Authorization'] = `Bearer ${newAccessToken}`
          }
        }

        // console.log('Authorization: ', config?.headers['Authorization'])
        // if (!config.headers['Authorization']) {
        //   config.headers['Authorization'] = auth?.accessToken ? `Bearer ${auth?.accessToken}` : undefined
        // }
        return config
      },
      (error) => {
        console.log('eeeeeafsdfsvsdeerror', error)
        Promise.reject(error)
      }
    )

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        console.log('eeeeeeerror', error)
        const prevRequest = error?.config
        // console.log('prevRequest.sent: ', error?.config?.sent)
        // console.log('error.response.status: ', error?.response?.status)
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true
          console.log('Old Access Token: ', auth?.accessToken)
          const newAccessToken = await refresh()
          console.log('New Access Token Header: ', newAccessToken)
          // console.log('newAccessToken: ', newAccessToken)
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
          // console.log('axiosPrivate(prevRequest): ', prevRequest)
          return axiosPrivate(prevRequest)
        }

        // console.log('eeeeeeerror', error)

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
