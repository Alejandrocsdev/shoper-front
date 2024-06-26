import Styles from './style.module.css'
// PNG Files
import facebookPng from '../../../assets/images/thirdParty/facebook.png'
import googlePng from '../../../assets/images/thirdParty/google.png'

const ThirdParty = () => {
  return (
    <div className={Styles.thirdParty}>
      <div className={Styles.facebookSign}>
        <img className={Styles.thirdPartyLogo} src={facebookPng} />
        <div className={Styles.thirdPartyText}>Facebook</div>
      </div>
      <div className={Styles.googleSign}>
        <img className={Styles.thirdPartyLogo} src={googlePng} />
        <div className={Styles.thirdPartyText}>Google</div>
      </div>
    </div>
  )
}

export default ThirdParty
