// Style
import Styles from './style.module.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
// Components
import Header from '../../../components/Sign/Header'
import SignUpSteps from '../../../components/Sign/SignUpSteps'
import Footer from '../../../components/Footer'
// Hooks
import { useState } from 'react'

// 註冊步驟3: 完成註冊並導向首頁
function Step3({ phone }) {
  const cardIcon = <FontAwesomeIcon icon={faCircleCheck} />

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
              <div className={Styles.cardIcon}>{cardIcon}</div>
              <div className={Styles.cardText}>
                <div className={Styles.text}>
                  您已成功使用電話號碼 <span className={Styles.phone}>0938473300</span>
                  <div>建立瞎皮爾購物帳號</div>
                </div>
                <div className={Styles.text}>
                  您將在 <span className={Styles.count}>10</span> 秒內回到瞎皮爾購物
                </div>
              </div>
              {/* 執行下一步 */}
              <div
                className={Styles.submit}
                // onClick={handleSubmit}
              >
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
