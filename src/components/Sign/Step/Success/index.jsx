// Style
import Styles from './style.module.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
// Hooks
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'
// Api
// import { axiosPublic, axiosPrivate } from '../../../../api/axios'
import axios from '../../../../api/axios'
// URLs
const AUTO_SIGN_IN_URL = '/auth/signIn/auto'
const NOTIFY_RESET_URL = '/notify/reset/password'

// 成功頁面: 註冊 / 重設密碼
function Success({ id, phone, email, isSignUp = false }) {
  // 導向
  const navigate = useNavigate()
  // 身分憑證
  const { setAuth } = useAuth()

  const [count, setCount] = useState(10)

  const successIcon = <FontAwesomeIcon icon={faCircleCheck} />

  useEffect(() => {
    const countdown = setInterval(() => {
      setCount((prevCount) => prevCount - 1)
    }, 1000)

    if (count === 0) {
      clearInterval(countdown)
      handleSubmit()
    }

    return () => clearInterval(countdown)
  }, [count, navigate])

  // 處理表單提交事件
  const handleSubmit = async () => {
    if (isSignUp) {
      try {
        const response = await axios.post(`${AUTO_SIGN_IN_URL}/${id}`, null, { withCredentials: true })
        const accessToken = response.data.result
        setAuth({ accessToken })
        console.log('自動登入')
        navigate('/profile')
      } catch (err) {
        console.log('自動登入失敗')
      }
    } else {
      await axios.post(NOTIFY_RESET_URL, { email })
      navigate('/signIn')
    }
  }

  return (
    <>
      <div className={Styles.successIcon}>{successIcon}</div>
      <div className={Styles.cardText}>
        <div className={Styles.text}>
          您已成功使用{phone ? '電話號碼' : 'Email'}{' '}
          <span className={Styles.method}>{phone ? phone : email}</span>
          <div>{isSignUp ? '建立瞎皮爾購物帳號' : '重設密碼'}</div>
        </div>
        <div className={Styles.text}>
          您將在 <span className={Styles.count}>{count}</span> 秒內回到
          {isSignUp ? '瞎皮爾購物' : '登入頁面'}
        </div>
      </div>
      <div className={Styles.submit} onClick={handleSubmit}>
        {isSignUp ? '回到瞎皮爾購物' : '回到登入頁面'}
      </div>
    </>
  )
}

export default Success
