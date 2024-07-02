import Styles from './style.module.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
// Hooks
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// module
import axios from 'axios'
// environment variables
const { VITE_BASE_URL } = import.meta.env
const SEND_OTP_URL = `${VITE_BASE_URL}/verif/send/otp`
const SIGN_IN_URL = `${VITE_BASE_URL}/users/signIn`
// components
import LoginKeyInput from './LoginKeyInput'
import PasswordInput from './PasswordInput'

const Form = ({ onNext, isLogin, isSms }) => {
  // 導向工具
  const navigate = useNavigate()

  // 顯示密碼
  const [showPwd, setShowPwd] = useState(false)
  // 帳號 (手機/帳號/信箱)
  const [loginKey, setLoginKey] = useState('')
  // 密碼
  const [password, setPassword] = useState('')
  // 是否輸入過非空值
  const [hasTyped, setHasTyped] = useState({ loginKey: false, password: false })
  // 錯誤訊息
  const [errorMessage, setErrorMessage] = useState('')
  // 是否有錯誤的狀態
  const [hasError, setHasError] = useState(false)

  // 帳號/密碼 組件參數
  const loginKeyParams = { loginKey, setLoginKey, hasTyped, setHasTyped }
  const passwordParams = { showPwd, setShowPwd, password, setPassword, hasTyped, setHasTyped }

  // 驗證輸入手機
  const phoneCheck = loginKey.startsWith('09') && loginKey.length === 10
  loginKeyParams.phoneCheck = phoneCheck

  // 提交狀態
  const isSubmitDisabled = () => {
    if (isLogin && !isSms) {
      return loginKey === '' || password === ''
    } else {
      return !phoneCheck
    }
  }

  // 提交按鈕樣式
  const submitStyle = isSubmitDisabled() ? Styles.notAllowed : Styles.allowed

  // 提交函式
  const handleSubmit = async () => {
    // 註冊 // 簡訊登入
    if (!isSubmitDisabled() && (!isLogin || (isLogin && isSms))) {
      try {
        // 發送請求
        await axios.post(SEND_OTP_URL, { phone: loginKey })
        // 驗證OTP
        onNext({ phone: loginKey })
      } catch (err) {
        console.error('Error:', err)
      }
    }
    // 密碼登入
    else if (!isSubmitDisabled() && isLogin && !isSms) {
      try {
        await axios.post(SIGN_IN_URL, { loginKey, password }, { withCredentials: true })
        setErrorMessage('')
        setHasError(false)
        // 登入首頁
        navigate('/')
      } catch (err) {
        setErrorMessage(err.response?.data?.message)
        setHasError(true)
      }
    }
  }

  return (
    <div>
      {/* 錯誤訊息 */}
      {hasError && (
        <div className={Styles.errorMessage}>
          <div className={Styles.crossIcon}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </div>
          <div className={Styles.message}>{errorMessage}</div>
        </div>
      )}
      {/* 登入帳號 / 註冊手機 */}
      <LoginKeyInput isLogin={isLogin} isSms={isSms} params={loginKeyParams} />
      {/* 密碼 */}
      {isLogin && !isSms ? <PasswordInput params={passwordParams} /> : ''}
      {/* 提交 */}
      <button className={`${Styles.submit} ${submitStyle}`} onClick={handleSubmit}>
        {isLogin ? '登入' : '下一步'}
      </button>
    </div>
  )
}

export default Form
