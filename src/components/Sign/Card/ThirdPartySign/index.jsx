import Styles from './style.module.css'
// PNG Files
import facebookPng from '../../../../assets/images/thirdParty/facebook.png'
import googlePng from '../../../../assets/images/thirdParty/google.png'
// module
import axios from 'axios'
// environment variables
const { VITE_BASE_URL } = import.meta.env
const FB_SIGN_IN_URL = `${VITE_BASE_URL}/auth/signIn/facebook`

const ThirdPartySign = () => {
  return (
    <div className={Styles.thirdParty}>
      <a className={Styles.facebookSign} href={FB_SIGN_IN_URL}>
        <img className={Styles.thirdPartyLogo} src={facebookPng} />
        <div className={Styles.thirdPartyText}>Facebook</div>
      </a>
      <div className={Styles.googleSign}>
        <img className={Styles.thirdPartyLogo} src={googlePng} />
        <div className={Styles.thirdPartyText}>Google</div>
      </div>
    </div>
  )
}

export default ThirdPartySign
