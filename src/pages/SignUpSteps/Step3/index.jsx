// Style
import Styles from './style.module.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
// Components
import Step from '../../../components/Sign/Step'
// Hooks
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// modules
import axios from 'axios'
// environment variables
const { VITE_BASE_URL, VITE_PASSWORD_SECRET } = import.meta.env
const SIGN_IN_URL = `${VITE_BASE_URL}/users/signIn`

// 註冊步驟3: 完成註冊並導向首頁
function Step3({ phone }) {
  const navigate = useNavigate()

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
    try {
      const response = await axios.post(
        SIGN_IN_URL,
        { loginKey: phone, password: VITE_PASSWORD_SECRET },
        { withCredentials: true }
      )
      if (response.data.statusType === 'Success') {
        navigate('/')
      }
    } catch (err) {
      console.error('Error:', err)
    }
  }

  const main = (
    <>
      <div className={Styles.successIcon}>{successIcon}</div>
      <div className={Styles.cardText}>
        <div className={Styles.text}>
          您已成功使用電話號碼 <span className={Styles.phone}>{phone}</span>
          <div>建立瞎皮爾購物帳號</div>
        </div>
        <div className={Styles.text}>
          您將在 <span className={Styles.count}>{count}</span> 秒內回到瞎皮爾購物
        </div>
      </div>
      <div className={Styles.submit} onClick={handleSubmit}>
        回到瞎皮爾購物
      </div>
    </>
  )

  return (
    <Step pageName="註冊" steps={true} step={3} cardName="註冊成功!" main={main} />
  )
}

export default Step3
