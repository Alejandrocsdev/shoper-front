// Style
import Styles from './style.module.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
// Components
import Header from '../../../components/Sign/Header'
import SignUpSteps from '../../../components/Sign/SignUpSteps'
import OTP from '../../../components/OTP'
import Footer from '../../../components/Footer'

// 註冊步驟1: 驗證手機OTP
function Step1({ onPrevious, onNext, phone }) {
  return (
    <>
      <Header pageName="註冊" />
      <main className={Styles.main}>
        <div className={Styles.mainContainer}>
          {/* 註冊步驟 */}
          <SignUpSteps step={1} />
          {/* 表單 */}
          <div className={Styles.card}>
            <div className={Styles.cardHeader}>
              {/* 返回上一頁 */}
              <a className={Styles.back} onClick={() => navigate('/signIn')}>
                <FontAwesomeIcon icon={faArrowLeftLong} />
              </a>
              <div className={Styles.cardName}>重新設定密碼</div>
            </div>
            <div className={Styles.cardMain}>
              <OTP onPrevious={onPrevious} onNext={onNext} phone={phone} />
            </div>{' '}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Step1
