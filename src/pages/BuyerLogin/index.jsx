import Styles from './style.module.css'
// PNG Files
import mainLogoPng from '../../assets/images/logo/cart_text_square_dark.png'
// Components
import Header from '../../components/Sign/Header'
import Form from '../../components/Sign/Form'
import ThirdParty from '../../components/Sign/ThirdParty'
import Footer from '../../components/Footer'
import Anchor from '../../components/Elements/Anchor'

function BuyerLogin() {
  return (
    <>
      <div className={Styles.container}>
        <Header pageName="登入" memberCenter="賣家中心" centerPath="/seller/login" />
        <main className={Styles.main}>
          <div className={Styles.mainContainer}>
            <img className={Styles.mainLogo} src={mainLogoPng} />
            <div className={Styles.loginContainer}>
              <div className={Styles.loginHeader}>登入</div>
              <div className={Styles.loginMain}>
                <Form isLogin={true} />
                <div className={Styles.otherLogin}>
                  <Anchor style={Styles.forgotPassword} content="忘記密碼" />
                  <Anchor style={Styles.smsLogin} content="使用簡訊登入" />
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
                <Anchor style={Styles.registerRedirect} href="/signUp" content="註冊" />
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
