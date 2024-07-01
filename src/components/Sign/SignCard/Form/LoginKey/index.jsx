import Styles from './style.module.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

function LoginKey({ isLogin, isSms, params }) {
  // 帳號參數
  const { loginKey, setLoginKey, hasTyped, setHasTyped, phoneCheck } = params

  // 儲存帳號值 / 紀錄是否輸入過
  const handleChange = (e) => {
    const value = e.target.value
    setLoginKey(value)
    if (value !== '') setHasTyped((prev) => ({ ...prev, loginKey: true }))
  }

  // 焦點處理
  const handleBlur = () => {
    if (loginKey !== '') setHasTyped((prev) => ({ ...prev, loginKey: true }))
  }

  // 顯示錯誤提示
  const showWarning = (isLogin) => {
    if (isLogin) {
      return hasTyped.loginKey && loginKey === ''
    } else {
      return hasTyped.loginKey && !phoneCheck
    }
  }

  return (
    <>
      <div className={Styles.loginKey}>
        <input
          className={`${Styles.loginKeyInput} ${showWarning(isLogin) ? Styles.inputWarning : ''}`}
          type="text"
          name={isLogin && !isSms ? 'loginKey' : 'phone'}
          placeholder={isLogin && !isSms ? '電話號碼/使用者名稱/Email' : '手機號碼'}
          value={loginKey}
          onChange={(e) => handleChange(e)}
          onBlur={() => handleBlur()}
        />
        {/* 電話輸入正確 */}
        {!isLogin && phoneCheck && (
          <div className={Styles.checkContainer}>
            <FontAwesomeIcon className={Styles.check} icon={faCircleCheck} />
          </div>
        )}
      </div>
      {/* 輸入錯誤 */}
      <div className={Styles.warning}>
        {showWarning(isLogin) ? (isLogin ? '請填寫此欄位' : '請輸入有效行動電話號碼') : ''}
      </div>
    </>
  )
}

export default LoginKey
