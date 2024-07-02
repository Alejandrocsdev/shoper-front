// Style
import Styles from './style.module.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark, faCircleCheck } from '@fortawesome/free-regular-svg-icons'
// Hooks
import { useState } from 'react'
// modules
import axios from 'axios'
// environment variables
const { VITE_BASE_URL } = import.meta.env
const SIGN_UP_URL = `${VITE_BASE_URL}/users/signUp`
const RESET_PASSWORD_URL = `${VITE_BASE_URL}/users`

// 註冊步驟2: 設定密碼
function Password({ onNext, phone, email, isSignUp }) {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [hasTyped, setHasTyped] = useState(false)
  // 密碼限制
  const [isLowerCase, setIsLowerCase] = useState(false)
  const [isUpperCase, setIsUpperCase] = useState(false)
  const [isLength, setIsLength] = useState(false)
  const [isNumber, setIsNumber] = useState(false)

  // 切換密碼顯示
  const togglePassword = () => setShowPassword(!showPassword)

  // 儲存密碼值 / 紀錄是否輸入過
  const handleChange = (e) => {
    const value = e.target.value
    setPassword(value)
    if (!hasTyped && value !== '') setHasTyped(true)
    validatePassword(value)
  }

  // 焦點處理
  const handleBlur = () => {
    if (password !== '') setHasTyped(true)
  }

  // 驗證密碼條件
  const validatePassword = (value) => {
    setIsLowerCase(/[a-z]/.test(value))
    setIsUpperCase(/[A-Z]/.test(value))
    setIsLength(value.length >= 8 && value.length <= 16)
    setIsNumber(/\d/.test(value))
  }

  // 正確/錯誤 圖示
  const crossIcon = <FontAwesomeIcon className={Styles.icon} icon={faCircleXmark} />
  const checkIcon = <FontAwesomeIcon className={Styles.icon} icon={faCircleCheck} />

  // 密碼有效
  const isPwdValid = isLowerCase && isUpperCase && isLength && isNumber

  // 條件樣式(綠/紅)
  const getCriteriaClass = (isValid) => {
    if (!hasTyped) return ''
    return isValid ? Styles.valid : Styles.invalid
  }

  // 處理表單提交事件
  const handleSubmit = async () => {
    if (isPwdValid) {
      try {
        // 註冊
        const url = isSignUp ? SIGN_UP_URL : RESET_PASSWORD_URL
        const payload = email ? { password, email } : { password, phone }
        const response = await axios.post(url, payload)
        if (response.data.statusType === 'Success') {
          onNext({ password, phone })
        }
      } catch (err) {
        console.error('Error:', err)
      }
    }
  }

  return (
    <>
      <div className={Styles.cardText}>
        <div className={Styles.text}>最後一步! 請設定您的密碼已完成登入</div>
      </div>
      {/* 密碼輸入欄 */}
      <div className={Styles.passwordContainer}>
        <div className={Styles.password}>
          <input
            className={`${Styles.passwordInput} ${hasTyped && !isPwdValid ? Styles.warning : ''}`}
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="密碼"
            value={password}
            onChange={(e) => handleChange(e)}
            onBlur={() => handleBlur()}
            maxLength={16}
            aria-label="Password"
          />
          {/* 顯示密碼 */}
          <div
            className={Styles.eyeContainer}
            onClick={togglePassword}
            aria-label="Toggle Password"
          >
            <FontAwesomeIcon className={Styles.eye} icon={showPassword ? faEye : faEyeSlash} />
          </div>
        </div>
        {/* 密碼條件 */}
        <div className={Styles.criteria}>
          {/* 小寫 */}
          <div className={`${Styles.criteriaText} ${getCriteriaClass(isLowerCase)}`}>
            <span>{isLowerCase ? checkIcon : crossIcon}</span>
            <span>包含至少一個小寫字母</span>
          </div>
          {/* 大寫 */}
          <div className={`${Styles.criteriaText} ${getCriteriaClass(isUpperCase)}`}>
            <span>{isUpperCase ? checkIcon : crossIcon}</span>
            <span>包含至少一個大寫字母</span>
          </div>
          {/* 數字 */}
          <div className={`${Styles.criteriaText} ${getCriteriaClass(isNumber)}`}>
            <span>{isNumber ? checkIcon : crossIcon}</span>
            <span>包含至少一個數字</span>
          </div>
          {/* 字數 */}
          <div className={`${Styles.criteriaText} ${getCriteriaClass(isLength)}`}>
            <span>{isLength ? checkIcon : crossIcon}</span>
            <span>密碼長度8-16個字元</span>
          </div>
        </div>
      </div>
      {/* 執行下一步 */}
      <div
        className={`${Styles.submit} ${isPwdValid ? Styles.allowed : Styles.notAllowed}`}
        onClick={handleSubmit}
      >
        註冊
      </div>
    </>
  )
}

export default Password
