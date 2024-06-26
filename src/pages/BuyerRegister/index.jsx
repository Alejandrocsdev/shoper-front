import Styles from './style.module.css'
// PNG Files
import mainLogoPng from '../../assets/images/logo/cart_text_square_dark.png'
// Components
import Header from '../../components/Sign/Header'
import Form from '../../components/Sign/Form'
import ThirdParty from '../../components/Sign/ThirdParty'
import Footer from '../../components/Sign/Footer'

function BuyerRegister() {
  return (
    <>
      <div className={Styles.container}>
        <Header pageName="註冊" memberCenter="賣家中心" />
        <main className={Styles.main}>
          <div className={Styles.mainContainer}>
            <img className={Styles.mainLogo} src={mainLogoPng} />
            <div className={Styles.loginContainer}>
              <div className={Styles.loginHeader}>註冊</div>
              <div className={Styles.loginMain}>
                <Form isLogin={false} />
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
              <div className={Styles.policy}>
                點擊「下一步」或繼續註冊，即表示您已閱讀並同意瞎皮爾購物的
                <a>服務條款</a>與<a>隱私權政策</a>
              </div>
              <div className={Styles.loginFooter}>
                <span className={Styles.registerRedirectText}>已經有帳號了嗎&#65311;</span>
                <a className={Styles.registerRedirect} href="/buyer/login">
                  登入
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

export default BuyerRegister
