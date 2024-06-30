// Style
import Styles from './style.module.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark, faCircleCheck } from '@fortawesome/free-regular-svg-icons'
// Components
import Header from '../../../components/Sign/Header'
import SignUpSteps from '../../../components/Sign/SignUpSteps'
import Footer from '../../../components/Footer'
// Hooks
import { useState } from 'react'
// modules
import axios from 'axios'
// environment variables
const { VITE_BASE_URL } = import.meta.env
const CREATE_USER_URL = `${VITE_BASE_URL}/users/signUp`

// 註冊步驟2: 設定密碼
function Step2({ onPrevious, onNext, phone }) {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [hasTyped, setHasTyped] = useState(false)
  // 密碼限制
  const [isLowerCaseValid, setIsLowerCaseValid] = useState(false)
  const [isUpperCaseValid, setIsUpperCaseValid] = useState(false)
  const [isLengthValid, setIsLengthValid] = useState(false)

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
    setIsLowerCaseValid(/[a-z]/.test(value))
    setIsUpperCaseValid(/[A-Z]/.test(value))
    setIsLengthValid(value.length >= 8 && value.length <= 16)
  }

  // 正確/錯誤 圖示
  const crossIcon = <FontAwesomeIcon className={Styles.icon} icon={faCircleXmark} />
  const checkIcon = <FontAwesomeIcon className={Styles.icon} icon={faCircleCheck} />

  // 密碼有效
  const isPwdValid = isLowerCaseValid && isUpperCaseValid && isLengthValid

  // 條件樣式(綠/紅)
  const getCriteriaClass = (isValid) => {
    if (!hasTyped) return ''
    return isValid ? Styles.valid : Styles.invalid
  }

  // 處理表單提交事件
  const handleSubmit = async () => {
    if (isPwdValid) {
      try {
        const response = await axios.post(CREATE_USER_URL, { password, phone })
        if (response.data.statusType === 'Success') {
          onNext(phone, password)
        }
      } catch (err) {
        console.error('Error:', err)
      }
    }
  }

  return (
    <>
      <Header pageName="註冊" />
      <main className={Styles.main}>
        <div className={Styles.mainContainer}>
          {/* 註冊步驟 */}
          <SignUpSteps step={2} />
          {/* 表單 */}
          <div className={Styles.card}>
            <div className={Styles.cardHeader}>
              {/* 返回上一頁 */}
              <a className={Styles.back} onClick={onPrevious}>
                <FontAwesomeIcon icon={faArrowLeftLong} />
              </a>
              <div className={Styles.cardName}>設定您的密碼</div>
            </div>
            <div className={Styles.cardMain}>
              <div className={Styles.cardText}>
                <div className={Styles.text}>最後一步! 請設定您的密碼已完成登入</div>
              </div>
              {/* 密碼輸入欄 */}
              <div className={Styles.passwordContainer}>
                <div className={Styles.password}>
                  <input
                    className={`${Styles.passwordInput} ${
                      hasTyped && !isPwdValid ? Styles.warning : ''
                    }`}
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
                    <FontAwesomeIcon
                      className={Styles.eye}
                      icon={showPassword ? faEye : faEyeSlash}
                    />
                  </div>
                </div>
                {/* 密碼條件 */}
                <div className={Styles.criteria}>
                  {/* 小寫 */}
                  <div className={`${Styles.criteriaText} ${getCriteriaClass(isLowerCaseValid)}`}>
                    <span>{isLowerCaseValid ? checkIcon : crossIcon}</span>
                    <span>至少一個小寫字母</span>
                  </div>
                  {/* 大寫 */}
                  <div className={`${Styles.criteriaText} ${getCriteriaClass(isUpperCaseValid)}`}>
                    <span>{isUpperCaseValid ? checkIcon : crossIcon}</span>
                    <span>至少一個大寫字母</span>
                  </div>
                  {/* 字數 */}
                  <div className={`${Styles.criteriaText} ${getCriteriaClass(isLengthValid)}`}>
                    <span>{isLengthValid ? checkIcon : crossIcon}</span>
                    <span>8-16個字母</span>
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
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Step2
