import Styles from './style.module.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
// Hooks
import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
// module
import axios from 'axios'
// env
const { VITE_BASE_URL } = import.meta.env

const Form = ({ isLogin, onNext }) => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [loginKey, setLoginKey] = useState('')
  const [password, setPassword] = useState('')
  const [inputTouched, setInputTouched] = useState({ loginKey: false, password: false })

  const togglePassword = () => setShowPassword(!showPassword)

  const handleChange = (e, inputType) => {
    const value = e.target.value
    inputType === 'loginKey' ? setLoginKey(value) : setPassword(value)
    if (value !== '') setInputTouched((prev) => ({ ...prev, [inputType]: true }))
  }

  const handleBlur = (inputType) => {
    if (inputType === 'loginKey' && loginKey !== '') {
      setInputTouched((prev) => ({ ...prev, loginKey: true }))
    } else if (inputType === 'password' && password !== '') {
      setInputTouched((prev) => ({ ...prev, password: true }))
    }
  }

  const phoneCheck = loginKey.startsWith('09') && loginKey.length === 10

  const shouldShowWarning = (isLogin, inputType) => {
    if (isLogin) {
      return (
        inputTouched[inputType] && (inputType === 'loginKey' ? loginKey === '' : password === '')
      )
    } else {
      return inputTouched.loginKey && !phoneCheck
    }
  }

  const isSubmitDisabled = () => {
    if (isLogin) {
      return loginKey === '' || password === ''
    } else {
      return !phoneCheck
    }
  }

  const handleSubmit = async () => {
    if (!isSubmitDisabled() && !isLogin) {
      try {
        const response = await axios.post(
          `${VITE_BASE_URL}/verification/send/otp`,
          isLogin ? { loginKey } : { phone: loginKey }
        )
        console.log(VITE_BASE_URL)
        console.log('Response:', response.data)
        onNext()
      } catch (error) {
        console.error('Error:', error)
      }
    } else if (!isSubmitDisabled() && isLogin) {
      console.log('Login')
    }
  }

  return (
    <div>
      {/* Login Key Input */}
      <div className={Styles.loginKey}>
        <input
          className={`${Styles.loginKeyInput} ${
            shouldShowWarning(isLogin, 'loginKey') ? Styles.inputWarning : ''
          }`}
          type="text"
          name={isLogin ? 'loginKey' : 'phone'}
          placeholder={isLogin ? '電話號碼/使用者名稱/Email' : '手機號碼'}
          value={loginKey}
          onChange={(e) => handleChange(e, 'loginKey')}
          onBlur={() => handleBlur('loginKey')}
          aria-label="Login Key"
        />
        {/* Toggle Phone Check */}
        {!isLogin && phoneCheck && (
          <div className={Styles.checkContainer} aria-label="Toggle Phone Check">
            <FontAwesomeIcon className={Styles.check} icon={faCircleCheck} />
          </div>
        )}
      </div>
      {/* Warning Text */}
      <div className={`${Styles.loginKeyWarning} ${Styles.textWarning}`}>
        {shouldShowWarning(isLogin, 'loginKey')
          ? isLogin
            ? '請填寫此欄位'
            : '請輸入有效行動電話號碼'
          : ''}
      </div>

      {/* Password Input */}
      {isLogin && (
        <>
          <div className={Styles.password}>
            <input
              className={`${Styles.passwordInput} ${
                shouldShowWarning(isLogin, 'password') ? Styles.inputWarning : ''
              }`}
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="密碼"
              value={password}
              onChange={(e) => handleChange(e, 'password')}
              onBlur={() => handleBlur('password')}
              maxLength={16}
              aria-label="Password"
            />
            {/* Toggle Password */}
            <div
              className={Styles.eyeContainer}
              onClick={togglePassword}
              aria-label="Toggle Password"
            >
              <FontAwesomeIcon className={Styles.eye} icon={showPassword ? faEye : faEyeSlash} />
            </div>
          </div>
          {/* Warning Text */}
          <div className={`${Styles.passwordWarning} ${Styles.textWarning}`}>
            {shouldShowWarning(isLogin, 'password') ? '請填寫此欄位' : ''}
          </div>
        </>
      )}

      {/* Submit */}
      <button
        className={`${Styles.submit} ${isSubmitDisabled() ? Styles.notAllowed : Styles.allowed}`}
        onClick={handleSubmit}
      >
        {isLogin ? '登入' : '下一步'}
      </button>
    </div>
  )
}

export default Form
