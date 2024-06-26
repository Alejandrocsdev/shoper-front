import Styles from './style.module.css'
// PNG Files
import sellerBgPng from '../../assets/images/background/sellerBg.png'
// Components
import Header from '../../components/Sign/Header'
import Form from '../../components/Sign/Form'
import ThirdParty from '../../components/Sign/ThirdParty'
import Footer from '../../components/Sign/Footer'

function BuyerLogin() {
  return (
    <>
      <div className={Styles.container}>
        <Header pageName="賣家中心" memberCenter="買家中心" centerPath="/buyer/login" />
        <main className={Styles.main}>
          <div className={Styles.mainContainer}>
            <div>
              <div className={Styles.bgTextUp}>讓專業的來！</div>
              <div className={Styles.bgTextDown}>使用瞎皮爾賣家中心，讓你管理賣場超有效率！</div>
              <img className={Styles.mainLogo} src={sellerBgPng} />
            </div>
            <div className={Styles.loginContainer}>
              <div className={Styles.loginHeader}>登入</div>
              <div className={Styles.loginMain}>
                <Form isLogin={true} />
                <div className={Styles.otherLogin}>
                  <a className={Styles.forgotPassword}>忘記密碼</a>
                  <a className={Styles.smsLogin}>使用簡訊登入</a>
                </div>
                <div className={Styles.breakLine}>
                  <div className={Styles.lineContainer}>
                    <div className={Styles.line}></div>
                  </div>
                  <div className={Styles.or}>或</div>
                  <div className={Styles.lineContainer}>
                    <div className={Styles.line}></div>
                  </div>
                </div>
                <ThirdParty />
              </div>
              <div className={Styles.loginFooter}>
                <span className={Styles.registerRedirectText}>瞎皮爾新朋友&#65311;</span>
                <a className={Styles.registerRedirect} href="/seller/register">
                  註冊
                </a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default BuyerLogin
