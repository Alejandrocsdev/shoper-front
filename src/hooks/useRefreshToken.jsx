import axios from '../api/axios'
import useAuth from './useAuth'
import { useNavigate, useLocation } from 'react-router-dom'

const useRefreshToken = () => {
  const { setAuth } = useAuth()
    // 導向
    const navigate = useNavigate()
    const location = useLocation()

  const refresh = async () => {
    try {
      const response = await axios.get('/auth/refresh', {
        withCredentials: true
      })
      setAuth({ accessToken: response.data.result })
      return response.data.result
    } catch (err) {
      // 登出
      if (location.pathname !== '/') {
        navigate('/signIn')
      }
      console.log('刷新憑證失敗')
    }
  }
  return refresh
}

export default useRefreshToken
