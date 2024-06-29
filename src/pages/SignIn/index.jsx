import Styles from './style.module.css'
// PNG Files
import mainLogoPng from '../../assets/images/logo/cart_text_square_dark.png'
// Components
import Header from '../../components/Sign/Header'
import SignCard from '../../components/Sign/SignCard'
import Footer from '../../components/Footer'

function SignUp() {
  return (
    <>
      <Header pageName="登入" />
      <main className={Styles.main}>
        <div className={Styles.mainContainer}>
          <img className={Styles.mainLogo} src={mainLogoPng} />
          <SignCard isLogin={true} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default SignUp
