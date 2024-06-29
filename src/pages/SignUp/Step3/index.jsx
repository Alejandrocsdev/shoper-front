// Style
import Styles from './style.module.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
// Components
import Header from '../../../components/Sign/Header'
import Footer from '../../../components/Footer'
// Hooks
import { useState } from 'react'

// 註冊步驟3: 完成註冊並導向首頁
function Step3() {
  const cardIcon = <FontAwesomeIcon icon={faCircleCheck} />

  return (
    <>
      <div className={Styles.container}>
        <Header pageName="註冊" />
        <main className={Styles.main}>
          <div className={Styles.mainContainer}>
            <div className={Styles.steps}>
              {/* 步驟1 */}
              <div className={Styles.step}>
                <div className={Styles.currentCircle}>1</div>
                <div className={Styles.currentCircleText}>驗證電話號碼</div>
              </div>
              <div className={Styles.currentArrow}>
                <FontAwesomeIcon icon={faArrowRightLong} />
              </div>
              {/* 步驟2 */}
              <div className={Styles.step}>
                <div className={Styles.currentCircle}>2</div>
                <div className={Styles.currentCircleText}>設定密碼</div>
              </div>
              <div className={Styles.currentArrow}>
                <FontAwesomeIcon icon={faArrowRightLong} />
              </div>
              {/* 步驟3 */}
              <div className={Styles.step}>
                <div className={Styles.currentCircle}>
                  <FontAwesomeIcon className={Styles.checkIcon} icon={faCheck} />
                </div>
                <div className={Styles.currentCircleText}>完成</div>
              </div>
            </div>
            {/* 驗證表單 */}
            <div className={Styles.verificationCard}>
              <div className={Styles.cardHeader}>
                <div className={Styles.cardName}>註冊成功!</div>
              </div>
              <div className={Styles.cardMain}>
                <div className={Styles.cardIcon}>{cardIcon}</div>
                <div className={Styles.cardText}>
                  <div className={Styles.text}>
                    您已成功使用電話號碼 <span className={Styles.phone}>0938473300</span>{' '}
                    建立瞎皮爾購物帳號
                  </div>
                  <div className={Styles.text}>
                    您將在<span>10</span>秒內回到瞎皮爾購物
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
      </div>
    </>
  )
}

export default Step3
