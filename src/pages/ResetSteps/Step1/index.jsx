// Style
import Styles from './style.module.css'
// Components
import Step from '../../../components/Sign/Step'
// Hooks
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// Api
import { axiosPublic } from '../../../api/axios'
// URLs
const SEND_OTP_URL = '/verify/send/otp'
const SEND_LINK_URL = '/verify/send/link'

// 重設密碼(1): 發送驗證碼 / 發送驗證信
function Step1({ onNext }) {
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
    if (isValid) {
      try {
        const method = isPhone ? 'phone' : 'email'
        const url = method === 'phone' ? SEND_OTP_URL : SEND_LINK_URL
        axiosPublic.post(url, { [method]: loginKey })
        if (method === 'phone') {
          onNext({ phone: loginKey })
        } else {
          onNext({ email: loginKey })
        }
      } catch (err) {
        console.error(err.response?.data?.message)
      }
    }
  }

  const main = (
    <>
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
    </>
  )

  return (
    <Step
      pageName="重設"
      back={true}
      backPath={() => navigate('/signIn')}
      cardName="重新設定密碼"
      main={main}
    />
  )
}

export default Step1
