import axios from '../api/axios'
import useAuth from './useAuth'

const useRefreshToken = () => {
  const { setAuth } = useAuth()

  const refresh = async () => {
    try {
      const response = await axios.get('/auth/refresh', {
        withCredentials: true
      })
      setAuth({ accessToken: response.data.result })
      return response.data.result
    } catch (err) {
      console.log('刷新憑證失敗')
    }
  }
  return refresh
}

export default useRefreshToken
