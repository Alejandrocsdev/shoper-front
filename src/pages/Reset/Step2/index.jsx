// Style
import Styles from './style.module.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons'
// Components
import Header from '../../../components/Sign/Header'
import OTP from '../../../components/OTP'
import Footer from '../../../components/Footer'
// Hooks
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// modules
import axios from 'axios'
// environment variables
const { VITE_BASE_URL } = import.meta.env
const SEND_OTP_URL = `${VITE_BASE_URL}/verif/send/otp`

function Step2({ onPrevious, onNext, phone, email }) {
  const navigate = useNavigate()

  const isPhone = phone ? true : false

  const envelopIcon = (
    <FontAwesomeIcon className={Styles.envelopIcon} icon={faEnvelopeCircleCheck} />
  )

  const emailSent = (
    <>
      <div className={Styles.iconContainer}>{envelopIcon}</div>
      <div className={Styles.text}>
        驗證信已發送至<span className={Styles.email}>newlean14@gmail.com</span>
      </div>
      <div className={Styles.text}>請驗證</div>
      {/* 執行下一步 */}
      <div className={Styles.submit} onClick={() => navigate('/')}>
        下一步
      </div>
    </>
  )

  return (
    <>
      <Header pageName="重新設定密碼" />
      <main className={Styles.main}>
        <div className={Styles.mainContainer}>
          {/* 表單 */}
          <div className={Styles.card}>
            <div className={Styles.cardHeader}>
              {/* 返回上一頁 */}
              <a className={Styles.back} onClick={onPrevious}>
                <FontAwesomeIcon icon={faArrowLeftLong} />
              </a>
              <div className={Styles.cardName}>重新設定密碼</div>
            </div>
            <div className={Styles.cardMain}>
              {isPhone ? <OTP onPrevious={onPrevious} onNext={onNext} phone={phone} /> : emailSent}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Step2
