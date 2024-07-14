import { useState, useEffect } from 'react'
import useAuth from './useAuth'
// import axios from '../api/axios'
import useAxiosPrivate from './useAxiosPrivate'

const useUserData = () => {
  const { auth } = useAuth()
  const [user, setUser] = useState(null)
  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {
    // 取得用戶資料
    const fetchData = async () => {
      try {
        const response = await axiosPrivate.get('/users/me', {
          headers: { Authorization: auth?.accessToken ? `Bearer ${auth?.accessToken}` : undefined }
        })
        console.log('here')
        console.log('next')
        // 存儲用戶資料
        setUser(response?.data?.result)
      } catch (err) {
        console.log(err)
        console.log('取得用戶資料失敗')
      }
    }

    fetchData()
  }, [axiosPrivate])
  // }, [auth, axiosPrivate])

  return user
}

export default useUserData
