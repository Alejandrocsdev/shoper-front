import Styles from './style.module.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

function PasswordInput({ params }) {
  // 密碼參數
  const { showPwd, setShowPwd, password, setPassword, hasTyped, setHasTyped } = params

  // 切換密碼顯示
  const togglePassword = () => setShowPwd(!showPwd)

  // 儲存密碼值 / 紀錄是否輸入過
  const handleChange = (e) => {
    const value = e.target.value
    setPassword(value)
    if (!hasTyped.password && value !== '') setHasTyped((prev) => ({ ...prev, password: true }))
  }

  // 焦點處理
  const handleBlur = () => {
    if (password !== '') setHasTyped((prev) => ({ ...prev, password: true }))
  }

  // 顯示錯誤提示
  const showWarning = () => hasTyped.password && password === ''

  return (
    <>
      <div className={Styles.password}>
        <input
          className={`${Styles.passwordInput} ${showWarning() ? Styles.inputWarning : ''}`}
          type={showPwd ? 'text' : 'password'}
          name="password"
          placeholder="密碼"
          value={password}
          onChange={(e) => handleChange(e)}
          onBlur={() => handleBlur()}
          maxLength={16}
        />
        {/* 切換密碼顯示 */}
        <div className={Styles.eyeContainer} onClick={togglePassword}>
          <FontAwesomeIcon className={Styles.eye} icon={showPwd ? faEye : faEyeSlash} />
        </div>
      </div>
      {/* 輸入錯誤 */}
      <div className={Styles.warning}>{showWarning() ? '請填寫此欄位' : ''}</div>
    </>
  )
}

export default PasswordInput
