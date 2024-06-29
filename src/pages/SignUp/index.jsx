import Styles from './style.module.css'
// PNG Files
import mainLogoPng from '../../assets/images/logo/cart_text_square_dark.png'
// Components
import Header from '../../components/Sign/Header'
import SignCard from '../../components/Sign/SignCard'
import Footer from '../../components/Footer'

function SignUp({ onNext, isLogin }) {
  return (
    <>
      <Header pageName="註冊" />
      <main className={Styles.main}>
        <div className={Styles.mainContainer}>
          <img className={Styles.mainLogo} src={mainLogoPng} />
          <SignCard onNext={onNext} isLogin={isLogin} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default SignUp
