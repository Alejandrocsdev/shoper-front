import Styles from './style.module.css'
// PNG Files
import headerLogoPng from '../../assets/images/logo/banner_light.png'
import mainLogoPng from '../../assets/images/logo/cart_text_square_dark.png'
import masterCardPng from '../../assets/images/ecpay/masterCard.png'
import visaPng from '../../assets/images/ecpay/visa.png'
import jcbPng from '../../assets/images/ecpay/jcb.png'
import sevenElevenPng from '../../assets/images/ecpay/sevenEleven.png'
import familyMartPng from '../../assets/images/ecpay/familyMart.png'
import okMartPng from '../../assets/images/ecpay/okMart.png'
import facebookPng from '../../assets/images/thirdPartyLogin/facebook.png'
import googlePng from '../../assets/images/thirdPartyLogin/google.png'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faInstagram, faLine } from '@fortawesome/free-brands-svg-icons'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [loginKey, setLoginKey] = useState('')
  const [password, setPassword] = useState('')
  const [loginKeyTouched, setLoginKeyTouched] = useState(false)
  const [passwordTouched, setPasswordTouched] = useState(false)

  const togglePassword = () => setShowPassword(!showPassword)

  const handleLoginKeyChange = (e) => {
    const value = e.target.value
    setLoginKey(value)
    if (value === '' && loginKeyTouched) {
      setLoginKeyTouched(true)
    }
  }

  const handlePasswordChange = (e) => {
    const value = e.target.value
    setPassword(value)
    if (value === '' && passwordTouched) {
      setPasswordTouched(true)
    }
  }

  const handleBlur = (field) => {
    if (field === 'loginKey' && loginKey === '') {
      setLoginKeyTouched(true)
    }
    if (field === 'password' && password === '') {
      setPasswordTouched(true)
    }
  }

  return (
    <>
      <div className={Styles.container}>
        {/* Login Page Header */}
        <header className={Styles.header}>
          <div className={Styles.headerLeft}>
            <img className={Styles.headerLogo} src={headerLogoPng} />
            <div className={Styles.pageName}>登入</div>
          </div>
          <div className={Styles.headerRight}>
            <a className={Styles.sellerCenter}>賣家中心</a>
          </div>
        </header>

        {/* Login Page Main */}
        <main className={Styles.main}>
          <div className={Styles.mainContainer}>
            <img className={Styles.mainLogo} src={mainLogoPng} />
            <div className={Styles.loginContainer}>
              <div className={Styles.loginHeader}>登入</div>
              <div className={Styles.loginMain}>
                {/* Login Form */}
                <form action="" method="post">
                  <div className={Styles.loginKey}>
                    <input
                      className={`${Styles.loginKeyInput} ${loginKeyTouched && loginKey === '' ? Styles.inputWarning : ''}`}
                      type="text"
                      name="loginKey"
                      placeholder="電話號碼/使用者名稱/Email"
                      value={loginKey}
                      onChange={handleLoginKeyChange}
                      onBlur={() => handleBlur('loginKey')}
                    />
                  </div>
                  <div className={`${Styles.loginKeyWarning} ${Styles.textWarning}`}>{loginKeyTouched && password === '' ? '請填寫此欄位' : ''}</div>
                  <div className={Styles.password}>
                    <input
                      className={`${Styles.passwordInput} ${passwordTouched && password === '' ? Styles.inputWarning : ''}`}
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="密碼"
                      value={password}
                      onChange={handlePasswordChange}
                      onBlur={() => handleBlur('password')}
                    />
                    <div className={Styles.eyeContainer} onClick={togglePassword}>
                      <FontAwesomeIcon
                        className={Styles.eye}
                        icon={showPassword ? faEye : faEyeSlash}
                      />
                    </div>
                  </div>
                  <div className={`${Styles.passwordWarning} ${Styles.textWarning}`}>{passwordTouched && password === '' ? '請填寫此欄位' : ''}</div>
                  <button className={Styles.loginSubmit} type="submit">
                    登入
                  </button>
                </form>
                <div className={Styles.otherLogin}>
                  <a className={Styles.forgotPassword}>忘記密碼</a>
                  <a className={Styles.smsLogin}>使用簡訊登入</a>
                </div>
                <div className={Styles.breakLine}>
                  <div className={Styles.lineContainer}>
                    <div className={Styles.line}></div>
                  </div>
                  <div className={Styles.or}>或</div>
                  <div className={Styles.lineContainer}>
                    <div className={Styles.line}></div>
                  </div>
                </div>
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
              </div>
              <div className={Styles.loginFooter}>
                <span className={Styles.registerRedirectText}>瞎皮爾新朋友&#65311;</span>
                <a className={Styles.registerRedirect}>註冊</a>
              </div>
            </div>
          </div>
        </main>

        {/* Login Page Footer */}
        <footer className={Styles.footer}>
          <div className={Styles.platformInfo}>
            <div className={Styles.payment}>
              <div className={Styles.catName}>付款</div>
              <div className={Styles.images}>
                <img className={Styles.image} src={masterCardPng} />
                <img className={Styles.image} src={visaPng} />
                <img className={Styles.image} src={jcbPng} />
              </div>
            </div>
            <div className={Styles.logistic}>
              <div className={Styles.catName}>物流合作</div>
              <div className={Styles.images}>
                <img className={Styles.image} src={sevenElevenPng} />
                <img className={Styles.image} src={familyMartPng} />
                <img className={Styles.image} src={okMartPng} />
              </div>
            </div>
            <div className={Styles.socialMedia}>
              <div className={Styles.catName}>關注我們</div>
              <div className={Styles.images}>
                <a className={Styles.link}>
                  <FontAwesomeIcon className={Styles.icon} icon={faSquareFacebook} />
                </a>
                <a className={Styles.link}>
                  <FontAwesomeIcon className={Styles.icon} icon={faInstagram} />
                </a>
                <a className={Styles.link}>
                  <FontAwesomeIcon className={Styles.icon} icon={faLine} />
                </a>
              </div>
            </div>
          </div>
          <div className={Styles.companyInfo}>
            <div className={Styles.companyName}>瞎皮爾電商有限公司</div>
            <div className={Styles.unifiedNumber}>統一編號&#65306;00000000</div>
            <div className={Styles.copyright}>&copy; 2024 Shopper. 版權所有。</div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Login
