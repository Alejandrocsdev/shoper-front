import Styles from './style.module.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
// Hooks
import { useState, useCallback } from 'react'

const LoginForm = () => {
  // Toogle Password
  const [showPassword, setShowPassword] = useState(false)
  const togglePassword = () => setShowPassword(!showPassword)

  // Input Warning: Value
  const [loginKey, setLoginKey] = useState('')
  const [password, setPassword] = useState('')
  // Input Warning: Touched
  const [loginKeyTouched, setLoginKeyTouched] = useState(false)
  const [passwordTouched, setPasswordTouched] = useState(false)

  const inputParams = useCallback(
    (type) => {
      return {
        value: type === 'loginKey' ? loginKey : password,
        setValue: type === 'loginKey' ? setLoginKey : setPassword,
        touched: type === 'loginKey' ? loginKeyTouched : passwordTouched,
        setTouched: type === 'loginKey' ? setLoginKeyTouched : setPasswordTouched
      }
    },
    [loginKey, password, loginKeyTouched, passwordTouched]
  )

  const handleChange = (e, type) => {
    const params = inputParams(type)
    const value = e.target.value
    const { setValue, touched, setTouched } = params
    setValue(value)
    if (value === '' && touched) setTouched(true)
  }

  const handleBlur = (type) => {
    const params = inputParams(type)
    const { value, setTouched } = params
    if (value === '') setTouched(true)
  }

  return (
    <form action="" method="post">
      {/* Login Key Input */}
      <div className={Styles.loginKey}>
        <input
          className={`${Styles.loginKeyInput} ${
            loginKeyTouched && loginKey === '' ? Styles.inputWarning : ''
          }`}
          type="text"
          name="loginKey"
          placeholder="電話號碼/使用者名稱/Email"
          value={loginKey}
          onChange={(e) => handleChange(e, 'loginKey')}
          onBlur={() => handleBlur('loginKey')}
          aria-label="Login Key"
        />
      </div>
      {/* Warning Text */}
      <div className={`${Styles.loginKeyWarning} ${Styles.textWarning}`}>
        {loginKeyTouched && loginKey === '' ? '請填寫此欄位' : ''}
      </div>
      {/* Password Input */}
      <div className={Styles.password}>
        <input
          className={`${Styles.passwordInput} ${
            passwordTouched && password === '' ? Styles.inputWarning : ''
          }`}
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="密碼"
          value={password}
          onChange={(e) => handleChange(e, 'password')}
          onBlur={() => handleBlur('password')}
          aria-label="Password"
        />
        {/* Toggle Password */}
        <div className={Styles.eyeContainer} onClick={togglePassword} aria-label="Toggle Password">
          <FontAwesomeIcon className={Styles.eye} icon={showPassword ? faEye : faEyeSlash} />
        </div>
      </div>
      {/* Warning Text */}
      <div className={`${Styles.passwordWarning} ${Styles.textWarning}`}>
        {passwordTouched && password === '' ? '請填寫此欄位' : ''}
      </div>
      {/* Submit */}
      <button className={Styles.loginSubmit} type="submit">
        登入
      </button>
    </form>
  )
}

export default LoginForm
