import { useState, useEffect } from 'react'
import useAuth from './useAuth'
// import axios from '../api/axios'
import useAxiosPrivate from './useAxiosPrivate'

const useUserData = () => {
  const { auth } = useAuth()
  const [user, setUser] = useState(null)
  const axiosPrivate = useAxiosPrivate()

  // const accessToken = auth?.accessToken

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log(auth)
        //
        const response = await axiosPrivate.get('/users/me', {
          headers: { Authorization: `Bearer ${auth?.accessToken}` }
        })
        // const response = await axios.get('/users/me', {
        //   withcredentials: true,
        //   headers: {
        //     Authorization: `Bearer ${accessToken}`
        //   }
        // })

        // 存儲用戶資料
        setUser(response.data.result)
      } catch (err) {
        console.log('取得用戶資料失敗')
      }
    }

      // 等待 fetchData() 完成


    // if (accessToken) fetchData()
    fetchData()
    // }, [auth])
  }, [auth, axiosPrivate])

  return user
}

export default useUserData
