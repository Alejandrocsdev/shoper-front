import Styles from './style.module.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
// Hooks
import { useState, useCallback } from 'react'

const Form = ({ isLogin }) => {
  // Toogle Password
  const [showPassword, setShowPassword] = useState(false)
  const togglePassword = () => setShowPassword(!showPassword)

  // Input Warning: Value
  const [loginKey, setLoginKey] = useState('')
  const [password, setPassword] = useState('')
  // Input Warning: Touched
  const [inputTouched, setInputTouched] = useState({ loginKey: false, password: false })

  const handleChange = (e, type) => {
    const value = e.target.value
    type === 'loginKey' ? setLoginKey(value) : setPassword(value)
    if (value !== '') setInputTouched((prev) => ({ ...prev, [type]: true }))
  }

  const handleBlur = (type) => {
    if (type === 'loginKey' && loginKey !== '') {
      setInputTouched((prev) => ({ ...prev, loginKey: true }))
    } else if (type === 'password' && password !== '') {
      setInputTouched((prev) => ({ ...prev, password: true }))
    }
  }

  const showInputWarning = (type) => {
    return inputTouched[type] && (type === 'loginKey' ? loginKey === '' : password === '')
  }

  const showPhoneWarning = () => {
    return inputTouched.loginKey && (!loginKey.startsWith('09') || loginKey.length !== 10)
  }

  const isButtonDisabled = () => {
    if (isLogin) {
      return !(loginKey !== '' && password !== '')
    } else {
      return !(loginKey.startsWith('09') && loginKey.length === 10)
    }
  }

  const handleSubmit = (e) => {
    if (isButtonDisabled()) {
      e.preventDefault()
    }
  }

  return (
    <form action="" method="post" onSubmit={handleSubmit}>
      {/* Login Key Input */}
      <div className={Styles.loginKey}>
        <input
          className={`${Styles.loginKeyInput} ${
            isLogin
              ? showInputWarning('loginKey')
                ? Styles.inputWarning
                : ''
              : showPhoneWarning('loginKey')
              ? Styles.inputWarning
              : ''
          }`}
          type="text"
          name="loginKey"
          placeholder={isLogin ? '電話號碼/使用者名稱/Email' : '手機號碼'}
          value={loginKey}
          onChange={(e) => handleChange(e, 'loginKey')}
          onBlur={() => handleBlur('loginKey')}
          aria-label="Login Key"
        />
        {/* Toggle Phone Check */}
        {!isLogin && loginKey.startsWith('09') && loginKey.length === 10 && (
          <div className={Styles.checkContainer} aria-label="Toggle Phone Check">
            <FontAwesomeIcon className={Styles.check} icon={faCircleCheck} />
          </div>
        )}
      </div>
      {/* Warning Text */}
      {isLogin && (
        <div className={`${Styles.loginKeyWarning} ${Styles.textWarning}`}>
          {showInputWarning('loginKey') ? '請填寫此欄位' : ''}
        </div>
      )}
      {!isLogin && (
        <div className={`${Styles.loginKeyWarning} ${Styles.textWarning}`}>
          {showPhoneWarning() ? '請輸入有效行動電話號碼' : ''}
        </div>
      )}

      {/* Password Input */}
      {isLogin && (
        <>
          <div className={Styles.password}>
            <input
              className={`${Styles.passwordInput} ${
                showInputWarning('password') ? Styles.inputWarning : ''
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
            {showInputWarning('password') ? '請填寫此欄位' : ''}
          </div>
        </>
      )}

      {/* Submit */}
      <button
        className={`${Styles.loginSubmit} ${isButtonDisabled() ? Styles.notAllowed : ''}`}
        type="submit"
      >
        {isLogin ? '登入' : '下一步'}
      </button>
    </form>
  )
}

export default Form
