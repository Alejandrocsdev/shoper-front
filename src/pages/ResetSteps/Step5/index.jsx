// Style
import Styles from './style.module.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
// Components
import Step from '../../../components/Sign/Step'
// Hooks
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// modules
import axios from 'axios'
// environment variables
const { VITE_BASE_URL } = import.meta.env
const AUTO_SIGN_IN_URL = `${VITE_BASE_URL}/users/signIn/auto`

// 註冊步驟3: 完成註冊並導向首頁
function Step5({ message }) {
  const navigate = useNavigate()

  const [count, setCount] = useState(10)

  const failureIcon = <FontAwesomeIcon icon={faCircleXmark} />

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
  const handleSubmit = () => navigate('/signIn')

  const main = (
    <>
      <div className={Styles.failureIcon}>{failureIcon}</div>
      <div className={Styles.cardText}>
        <div className={Styles.errMsg}>{message}</div>
        <div className={Styles.text}>
          您將在 <span className={Styles.count}>{count}</span> 秒內回到登入頁面
        </div>
      </div>
      <div className={Styles.submit} onClick={handleSubmit}>
        回到登入頁面
      </div>
    </>
  )

  return <Step pageName="重設" cardName="重設密碼失敗" main={main} />
}

export default Step5
