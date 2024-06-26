import Styles from './style.module.css'
// PNG Files
import headerLogoPng from '../../../assets/images/logo/banner_light.png'

const LoginHeader = () => {
  return (
    <header className={Styles.header}>
      <div className={Styles.headerLeft}>
        <img className={Styles.headerLogo} src={headerLogoPng} />
        <div className={Styles.pageName}>登入</div>
      </div>
      <div className={Styles.headerRight}>
        <a className={Styles.sellerCenter}>賣家中心</a>
      </div>
    </header>
  )
}

export default LoginHeader
