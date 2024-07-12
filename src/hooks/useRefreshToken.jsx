import { useEffect } from 'react'
import { axiosPrivate } from '../api/axios'
import useAuth from './useAuth'

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth()

  const refresh = async () => {
    try {
      console.log('old', auth?.accessToken)
      const response = await axiosPrivate.get('/auth/refresh')
      setAuth({ accessToken: response.data.result })
      console.log('new', response.data.result)
      return response.data.result
    } catch (error) {
      console.error('Error refreshing token:', error)
      throw error
    }
  }

  return refresh
}

export default useRefreshToken
