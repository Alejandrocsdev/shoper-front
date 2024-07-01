// Style
import Styles from './style.module.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
// Components
import Header from '../../../components/Sign/Header'
import SignUpSteps from '../../../components/Sign/SignUpSteps'
import Footer from '../../../components/Footer'
// Hooks
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// modules
import axios from 'axios'
// environment variables
const { VITE_BASE_URL } = import.meta.env
const SIGN_IN_URL = `${VITE_BASE_URL}/users/signIn`

// 註冊步驟3: 完成註冊並導向首頁
function Step3({ phone, password }) {
  const [count, setCount] = useState(10)
  const navigate = useNavigate()

  const successIcon = <FontAwesomeIcon icon={faCircleCheck} />

  useEffect(() => {
    const countdown = setInterval(() => {
      setCount((prevCount) => prevCount - 1)
    }, 1000)

    if (count === 0) {
      clearInterval(countdown)
      handleSubmit()
    }

    return () => clearInterval(countdown)
  }, [count, navigate])

  // 處理表單提交事件
  const handleSubmit = async () => {
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
      <Header pageName="註冊" />
      <main className={Styles.main}>
        <div className={Styles.mainContainer}>
          {/* 註冊步驟 */}
          <SignUpSteps step={3} />
          {/* 表單 */}
          <div className={Styles.card}>
            <div className={Styles.cardHeader}>
              <div className={Styles.cardName}>註冊成功!</div>
            </div>
            <div className={Styles.cardMain}>
              <div className={Styles.successIcon}>{successIcon}</div>
              <div className={Styles.cardText}>
                <div className={Styles.text}>
                  您已成功使用電話號碼 <span className={Styles.phone}>{phone}</span>
                  <div>建立瞎皮爾購物帳號</div>
                </div>
                <div className={Styles.text}>
                  您將在 <span className={Styles.count}>{count}</span> 秒內回到瞎皮爾購物
                </div>
              </div>
              {/* 執行下一步 */}
              <div className={Styles.submit} onClick={handleSubmit}>
                回到瞎皮爾購物
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Step3
