// Style
import Styles from './style.module.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faArrowRightLong, faArrowLeftLong, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark, faCircleCheck } from '@fortawesome/free-regular-svg-icons'
// Components
import Header from '../../../components/Sign/Header'
import Footer from '../../../components/Footer'
// Hooks
import { useEffect, useRef, useState } from 'react'
// modules
import axios from 'axios'
// environment variables
const { VITE_BASE_URL } = import.meta.env

// 註冊步驟2: 驗證手機OTP
function Step3({ onPrevious, onNext }) {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [inputTouched, setInputTouched] = useState({ password: false })
  const [isLowerCaseValid, setIsLowerCaseValid] = useState(false)
  const [isUpperCaseValid, setIsUpperCaseValid] = useState(false)
  const [isLengthValid, setIsLengthValid] = useState(false)
  const [isCharactersValid, setIsCharactersValid] = useState(false)

  const togglePassword = () => setShowPassword(!showPassword)

  const handleChange = (e) => {
    const value = e.target.value
    setPassword(value)
    if (value !== '') setInputTouched((prev) => ({ ...prev, ['password']: true }))
      validatePassword(value)
  }

  const handleBlur = () => {
    if (password !== '') {
      setInputTouched((prev) => ({ ...prev, password: true }))
    }
  }

  const validatePassword = (value) => {
    setIsLowerCaseValid(/[a-z]/.test(value))
    setIsUpperCaseValid(/[A-Z]/.test(value))
    setIsLengthValid(value.length >= 8 && value.length <= 16)
    setIsCharactersValid(/^[a-zA-Z0-9!@#$%^&*()-_+=~`[\]{}|:;"'<>,.?/]+$/.test(value))
  }

  const crossIcon = <FontAwesomeIcon icon={faCircleXmark} />
  const checkIcon = <FontAwesomeIcon icon={faCircleCheck} />

  return (
    <>
      <div className={Styles.container}>
        <Header pageName="註冊" />
        <main className={Styles.main}>
          <div className={Styles.mainContainer}>
            <div className={Styles.steps}>
              {/* 步驟1 */}
              <div className={Styles.step}>
                <div className={Styles.currentCircle}>1</div>
                <div className={Styles.currentCircleText}>驗證電話號碼</div>
              </div>
              <div className={Styles.currentArrow}>
                <FontAwesomeIcon icon={faArrowRightLong} />
              </div>
              {/* 步驟2 */}
              <div className={Styles.step}>
                <div className={Styles.currentCircle}>2</div>
                <div className={Styles.currentCircleText}>設定密碼</div>
              </div>
              <div className={Styles.arrow}>
                <FontAwesomeIcon icon={faArrowRightLong} />
              </div>
              {/* 步驟3 */}
              <div className={Styles.step}>
                <div className={Styles.circle}>
                  <FontAwesomeIcon className={Styles.checkIcon} icon={faCheck} />
                </div>
                <div className={Styles.circleText}>完成</div>
              </div>
            </div>
            {/* 驗證表單 */}
            <div className={Styles.verificationCard}>
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
                      className={Styles.passwordInput}
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="密碼"
                      value={password}
                      onChange={(e) => handleChange(e)}
                      onBlur={() => handleBlur()}
                      maxLength={16}
                      aria-label="Password"
                    />
                    {/* Toggle Password */}
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
                  <div className={Styles.criteria}>
                    <div className={`${Styles.criteriaText} ${isLowerCaseValid ? Styles.valid : Styles.invalid}`}>
                      <span>{isLowerCaseValid ? checkIcon : crossIcon}</span><span>至少一個小寫字母</span>
                    </div>
                    <div className={`${Styles.criteriaText} ${isUpperCaseValid ? Styles.valid : Styles.invalid}`}>
                    <span>{isUpperCaseValid ? checkIcon : crossIcon}</span><span>至少一個大寫字母</span>
                    </div>
                    <div className={`${Styles.criteriaText} ${isLengthValid ? Styles.valid : Styles.invalid}`}>
                    <span>{isLengthValid ? checkIcon : crossIcon}</span><span>8-16個字母</span>
                    </div>
                    <div className={`${Styles.criteriaText} ${isCharactersValid ? Styles.valid : Styles.invalid}`}>
                    <span>{isCharactersValid ? checkIcon : crossIcon}</span><span>僅能使用英文、數字或常用的標點符號。</span>
                    </div>
                  </div>
                </div>
                {/* 執行下一步 */}
                <div
                  className={Styles.submit}
                  // onClick={handleSubmit}
                >
                  註冊
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Step3
