import Styles from './style.module.css'
// Hooks
import { useState } from 'react'
// module
import axios from 'axios'
// environment variables
const { VITE_BASE_URL } = import.meta.env
const SEND_OTP_URL = `${VITE_BASE_URL}/verification/send/otp`
// components
import LoginKey from './LoginKey'
import Password from './Password'

const Form = ({ isLogin, onNext }) => {
  // 顯示密碼
  const [showPwd, setShowPwd] = useState(false)
  // 帳號 (手機/帳號/信箱)
  const [loginKey, setLoginKey] = useState('')
  // 密碼
  const [password, setPassword] = useState('')
  // 是否輸入過非空值
  const [hasTyped, setHasTyped] = useState({ loginKey: false, password: false })

  // 帳號/密碼 組件參數
  const loginKeyParams = { loginKey, setLoginKey, hasTyped, setHasTyped }
  const passwordParams = { showPwd, setShowPwd, password, setPassword, hasTyped, setHasTyped }

  // 驗證輸入手機
  const phoneCheck = loginKey.startsWith('09') && loginKey.length === 10
  loginKeyParams.phoneCheck = phoneCheck

  // 提交狀態
  const isSubmitDisabled = () => {
    if (isLogin) {
      return loginKey === '' || password === ''
    } else {
      return !phoneCheck
    }
  }

  // 提交按鈕樣式
  const submitStyle = isSubmitDisabled() ? Styles.notAllowed : Styles.allowed

  // 提交函式
  const handleSubmit = async () => {
    // 註冊
    if (!isSubmitDisabled() && !isLogin) {
      try {
        // 發送請求
        const response = await axios.post(
          SEND_OTP_URL,
          isLogin ? { loginKey } : { phone: loginKey }
        )
        console.log('xx', loginKey)
        // 導向註冊步驟1
        onNext(loginKey)
      } catch (err) {
        console.error('Error:', err)
      }
    }
    // 登入
    else if (!isSubmitDisabled() && isLogin) {
      console.log('登入')
    }
  }

  return (
    <div>
      {/* 登入帳號 / 註冊手機 */}
      <LoginKey isLogin={isLogin} params={loginKeyParams} />
      {/* 密碼 */}
      {isLogin ? <Password params={passwordParams} /> : ''}
      {/* 提交 */}
      <button className={`${Styles.submit} ${submitStyle}`} onClick={handleSubmit}>
        {isLogin ? '登入' : '下一步'}
      </button>
    </div>
  )
}

export default Form
