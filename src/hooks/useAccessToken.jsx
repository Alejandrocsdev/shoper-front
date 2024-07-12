import { useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'
import useAuth from './useAuth'
import { axiosPrivate } from '../api/axios'

const useAccessToken = () => {
  const { auth } = useAuth()
  const accessToken = auth.accessToken
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUserData = async () => {
      if (accessToken) {
        try {
          const { id } = jwtDecode(accessToken)
          const response = await axiosPrivate.get(`/users/${id}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          })
          setUser(response.data.result)
        } catch (err) {
          console.error('取得用戶資料失敗', err)
        }
      }
    }
    fetchUserData()
  }, [accessToken])

  return user
}

export default useAccessToken
