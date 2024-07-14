import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import useRefreshToken from '../hooks/useRefreshToken'
// Components
import Loading from '../components/Elements/Laoding'

const PrivateRoute = () => {
  const { auth } = useAuth()
  const location = useLocation()
  const refresh = useRefreshToken()
  const [isAuth, setIsAuth] = useState(null)

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

  useEffect(() => {
    const verifyToken = async () => {
      try {
        if (!auth?.accessToken || isExpired(auth?.accessToken)) {
          await refresh()
        }
        setIsAuth(true)
      } catch (err) {
        console.log('憑證刷新失敗')
        setIsAuth(false)
      }
    }

    verifyToken()
  }, [auth, refresh])

  // 等待 verifyToken() 完成
  if (isAuth === null) {
    return <Loading />
  }

  return isAuth ? <Outlet /> : <Navigate to="/signIn" state={{ from: location }} replace />
}

export default PrivateRoute
