// Style
import Styles from './style.module.css'
// PNG Files
import avatarPng from '../../../assets/images/avatar/avatar.png'
// Components
import Step from '../../../components/Sign/Step'
// Hooks
import { useNavigate } from 'react-router-dom'
// modules
import axios from 'axios'
// environment variables
const { VITE_BASE_URL, VITE_PASSWORD_SECRET } = import.meta.env
const AUTO_SIGN_IN_URL = `${VITE_BASE_URL}/auth/signIn/auto`

// 註冊步驟4: 已註冊過
function Step4({ onNext, id, username, phone, avatar }) {
  const navigate = useNavigate()

  // 處理表單提交事件
  const handleLogin = async () => {
    try {
      await axios.post(`${AUTO_SIGN_IN_URL}/${id}`, {}, { withCredentials: true })
      navigate('/')
    } catch (err) {
      console.error('Error:', err)
    }
  }

  const main = (
    <>
      <div className={Styles.avatarContainer}>
        <img className={Styles.avatar} src={avatar || avatarPng} />
      </div>
      <div className={Styles.username}>{username}</div>
      <div className={Styles.phone}>{phone}</div>
      <div className={Styles.text}>
        此手機號碼已被此帳號使用，若此帳號屬於您，請點選「是，前往登入」。
      </div>
      {/* 登入 */}
      <div className={Styles.submit} onClick={handleLogin}>
        是，前往登入
      </div>
      {/* 返回註冊 */}
      <div className={Styles.back} onClick={onNext}>
        否，返回註冊頁面
      </div>
    </>
  )

  return <Step pageName="登入" cardName="這是您的帳號嗎?" main={main} />
}

export default Step4
