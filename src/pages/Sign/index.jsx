import Styles from './style.module.css'
// PNG Files
import mainLogoPng from '../../assets/images/logo/cart_text_square_dark.png'
// Components
import Header from '../../components/Sign/Header'
import SignCard from '../../components/Sign/SignCard'
import Footer from '../../components/Footer'

function Sign({ onPrevious, onNext, isLogin, isSms }) {
  return (
    <>
      <Header pageName={isLogin ? '登入' : '註冊'} />
      <main className={Styles.main}>
        <div className={Styles.mainContainer}>
          <img className={Styles.mainLogo} src={mainLogoPng} />
          <SignCard onPrevious={onPrevious} onNext={onNext} isLogin={isLogin} isSms={isSms} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Sign
