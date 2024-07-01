// Style
import Styles from './style.module.css'
// PNG Files
import avatarPng from '../../../assets/images/avatar/avatar.png'
// Components
import Header from '../../../components/Sign/Header'
import SignUpSteps from '../../../components/Sign/SignUpSteps'
import Footer from '../../../components/Footer'
// Hooks
import { useNavigate } from 'react-router-dom'
// modules
import axios from 'axios'
// environment variables
const { VITE_BASE_URL } = import.meta.env
const SIGN_IN_URL = `${VITE_BASE_URL}/users/signIn`

// 註冊步驟3: 完成註冊並導向首頁
function Step4({ username, password, phone, avatar }) {
  const navigate = useNavigate()

  // 處理表單提交事件
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        SIGN_IN_URL,
        { loginKey: phone, password },
        { withCredentials: true }
      )
      if (response.data.statusType === 'Success') {
        navigate('/')
      }
    } catch (err) {
      console.error('Error:', err)
    }
  }

  return (
    <>
      <Header pageName="登入" />
      <main className={Styles.main}>
        <div className={Styles.mainContainer}>
          {/* 註冊步驟 */}
          <SignUpSteps step={3} />
          {/* 表單 */}
          <div className={Styles.card}>
            <div className={Styles.cardHeader}>
              <div className={Styles.cardName}>這是您的帳號嗎?</div>
            </div>
            <div className={Styles.cardMain}>
              <img className={Styles.avatar} src={avatar || avatarPng} />
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
              <div className={Styles.back} onClick={() => navigate('/signUp')}>
                否，返回註冊頁面
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Step4
