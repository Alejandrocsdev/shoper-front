import Styles from './style.module.css'
// PNG Files
import mainLogoPng from '../../assets/images/logo/cart_text_square_dark.png'
// Components
import Header from '../../components/Sign/Header'
import Form from '../../components/Sign/Form'
import ThirdParty from '../../components/Sign/ThirdParty'
import Footer from '../../components/Sign/Footer'

function Login() {
  return (
    <>
      <div className={Styles.container}>
        <Header />
        <main className={Styles.main}>
          <div className={Styles.mainContainer}>
            <img className={Styles.mainLogo} src={mainLogoPng} />
            <div className={Styles.loginContainer}>
              <div className={Styles.loginHeader}>登入</div>
              <div className={Styles.loginMain}>
                <Form />
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
                <a className={Styles.registerRedirect}>註冊</a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Login
