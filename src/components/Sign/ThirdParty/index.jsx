import Styles from './style.module.css'
// PNG Files
import facebookPng from '../../../assets/images/thirdPartyLogin/facebook.png'
import googlePng from '../../../assets/images/thirdPartyLogin/google.png'

const ThirdParty = () => {
  return (
    <div className={Styles.thirdPartyLogin}>
      <div className={Styles.facebookLogin}>
        <img className={Styles.thirdPartyLogo} src={facebookPng} />
        <div className={Styles.thirdPartyText}>Facebook</div>
      </div>
      <div className={Styles.googleLogin}>
        <img className={Styles.thirdPartyLogo} src={googlePng} />
        <div className={Styles.thirdPartyText}>Google</div>
      </div>
    </div>
  )
}

export default ThirdParty
