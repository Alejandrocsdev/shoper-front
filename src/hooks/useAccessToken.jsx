import { useState, useEffect } from 'react'
import useAuth from './useAuth'
// import { axiosPrivate } from '../api/axios'
import axios from '../api/axios'

const useAccessToken = () => {
  const { auth } = useAuth()
  const accessToken = auth.accessToken
  const [user, setUser] = useState(null)
  const [expired, setExpired] = useState(false)

  useEffect(() => {
    const fetchUserData = async () => {
      if (accessToken) {
        try {
          const { id, exp } = JSON.parse(atob(accessToken.split('.')[1]))
          const isExpired = exp < Date.now() / 1000

          setExpired(isExpired)
          if (isExpired) {
            setUser(null)
            console.log('isExpired: ', isExpired)
            console.log('憑證過期')
            return
          }
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
      } else {
        setUser(null)
      }
    }
    fetchUserData()
  }, [accessToken])

  return expired ? null : user
}

export default useAccessToken
