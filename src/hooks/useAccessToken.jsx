import { useState, useEffect } from 'react'
import useAuth from './useAuth'
import axios from '../api/axios'

const useAccessToken = () => {
  const { auth } = useAuth()
  const [user, setUser] = useState(null)

  const accessToken = auth?.accessToken

  useEffect(() => {
    const fetchUserData = async () => {
      if (accessToken) {
        try {
          // 從憑證取得用戶ID
          const { id } = JSON.parse(atob(accessToken.split('.')[1]))

          // 取得用戶資料
          const response = await axios.get(`/users/${id}`, {
            withcredentials: true,
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
  }, [auth])

  return user
}

export default useAccessToken
