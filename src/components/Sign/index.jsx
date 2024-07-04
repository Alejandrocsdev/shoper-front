import Styles from './style.module.css'
// PNG Files
import mainLogoPng from '../../assets/images/logo/cart_text_square_dark.png'
// Components
import Header from './Header'
import Card from './Card'
import Footer from '../Footer'

function Sign({ onPrevious, onNext, isSignIn, isSmsSignIn }) {
  return (
    <>
      <Header pageName={isSignIn ? '登入' : '註冊'} />
      <main className={Styles.main}>
        <div className={Styles.mainContainer}>
          <img className={Styles.mainLogo} src={mainLogoPng} />
          <Card onPrevious={onPrevious} onNext={onNext} isSignIn={isSignIn} isSmsSignIn={isSmsSignIn} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Sign
