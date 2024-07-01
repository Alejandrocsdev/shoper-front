// Style
import Styles from './style.module.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
// Components
import Header from '../../../components/Sign/Header'
import Footer from '../../../components/Footer'
// Hooks
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// modules
import axios from 'axios'
// environment variables
const { VITE_BASE_URL } = import.meta.env
const SEND_OTP_URL = `${VITE_BASE_URL}/verif/send/otp`

function Step2({ onNext, phone, email }) {
  const navigate = useNavigate()

  const [loginKey, setLoginKey] = useState('')
  const [hasTyped, setHasTyped] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [isPhone, setIsPhone] = useState(false)
  const [isValid, setIsValid] = useState(false)

  const handleChange = (e) => {
    const value = e.target.value
    setLoginKey(value)
    setHasTyped(true)
    validateInput(value)
  }

  const validateInput = (value) => {
    const phoneRegex = /^09\d{8}$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (/^\d+$/.test(value)) {
      // If the input contains only numbers
      if (phoneRegex.test(value)) {
        setErrorMessage('')
        setIsPhone(true)
        setIsValid(true)
      } else {
        setErrorMessage('請輸入有效行動電話號碼')
        setIsPhone(false)
        setIsValid(false)
      }
    } else {
      // If the input contains non-numeric characters
      if (emailRegex.test(value)) {
        setErrorMessage('')
        setIsPhone(false)
        setIsValid(true)
      } else {
        setErrorMessage('無效的email')
        setIsPhone(false)
        setIsValid(false)
      }
    }
  }

  const handleBlur = () => {
    if (loginKey === '') {
      setHasTyped(false)
      setErrorMessage('')
      setIsValid(false)
    }
  }

  // 處理發送OTP事件
  const handleSubmit = async () => {
    try {
      const method = isPhone ? 'phone' : 'email'
      const response = await axios.post(SEND_OTP_URL, { [method]: loginKey })
      if (data.statusType === 'Success') {
        onNext({ [method]: loginKey })
      }
    } catch (err) {
      console.error(err.response?.data?.message)
    }
  }

  return (
    <>
      <Header pageName="重新設定密碼" />
      <main className={Styles.main}>
        <div className={Styles.mainContainer}>
          {/* 表單 */}
          <div className={Styles.card}>
            <div className={Styles.cardHeader}>
              {/* 返回上一頁 */}
              <a className={Styles.back} onClick={() => navigate('/signIn')}>
                <FontAwesomeIcon icon={faArrowLeftLong} />
              </a>
              <div className={Styles.cardName}>重新設定密碼</div>
            </div>
            <div className={Styles.cardMain}>
              {/* 電話/信箱輸入欄 */}
              <div className={Styles.loginKey}>
                <input
                  className={Styles.loginKeyInput}
                  type="text"
                  name={isPhone ? 'phone' : 'email'}
                  placeholder="Email / 手機號碼"
                  value={loginKey}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {/* 輸入錯誤 */}
              <div className={Styles.warning}>{errorMessage}</div>
              {/* 執行下一步 */}
              <div
                className={`${Styles.submit} ${isValid ? Styles.allowed : Styles.notAllowed}`}
                onClick={handleSubmit}
              >
                下一步
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Step2
