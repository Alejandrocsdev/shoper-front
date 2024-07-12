import Styles from './style.module.css'
// PNG Files
import facebookPng from '../../../../assets/images/thirdParty/facebook.png'
import googlePng from '../../../../assets/images/thirdParty/google.png'
// Api
import { axiosPrivate } from '../../../../api/axios'
// URLs
const FB_SIGN_IN_URL = '/auth/signIn/facebook'

// 第三方 登入 / 註冊
const ThirdPartySign = () => {
  // 臉書登入函式
  const handleFacebookSignIn = async () => {
    try {
      const response = await axiosPrivate.post(FB_SIGN_IN_URL)
      const accessToken = response.data.result
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className={Styles.thirdParty}>
      <div className={Styles.facebookSign} onClick={handleFacebookSignIn}>
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

export default ThirdPartySign
