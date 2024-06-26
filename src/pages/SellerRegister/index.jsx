import Styles from './style.module.css'
// PNG Files
import sellerBgPng from '../../assets/images/background/sellerBg.png'
// Components
import Header from '../../components/Sign/Header'
import Form from '../../components/Sign/Form'
import ThirdParty from '../../components/Sign/ThirdParty'
import Footer from '../../components/Footer'
import Anchor from '../../components/Elements/Anchor'

function BuyerRegister() {
  return (
    <>
      <div className={Styles.container}>
        <Header pageName="註冊" memberCenter="買家中心" centerPath="/buyer/register" />
        <main className={Styles.main}>
          <div className={Styles.mainContainer}>
            <div>
              <div className={Styles.bgTextUp}>瞎皮爾購物</div>
              <div className={Styles.bgTextDown}>輕鬆拓展商業版圖</div>
              <img className={Styles.mainLogo} src={sellerBgPng} />
            </div>
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
                <Anchor content="服務條款" />與<Anchor content="隱私權政策" />
              </div>
              <div className={Styles.loginFooter}>
                <span className={Styles.registerRedirectText}>已經有帳號了嗎&#65311;</span>
                <Anchor style={Styles.registerRedirect} href="/seller/login" content="登入" />
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
