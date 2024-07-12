import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const PrivateRoute = () => {
  const { auth } = useAuth()
  const location = useLocation()

  const isTokenExpired = (accessToken) => {
    if (!accessToken) return true

    try {
      const { exp } = JSON.parse(atob(accessToken.split('.')[1]))
      return exp < Date.now() / 1000
    } catch (error) {
      console.error('憑證解碼失敗', error)
      return true
    }
  }

  const isAuthenticated = !!auth.accessToken && !isTokenExpired(auth.accessToken)

  return isAuthenticated ? <Outlet /> : <Navigate to="/signIn" state={{ from: location }} replace />
}

export default PrivateRoute
