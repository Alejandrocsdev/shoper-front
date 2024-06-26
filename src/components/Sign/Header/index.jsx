import Styles from './style.module.css'
// PNG Files
import headerLogoPng from '../../../assets/images/logo/banner_light.png'

const Header = ({ pageName, memberCenter }) => {
  return (
    <header className={Styles.header}>
      <div className={Styles.headerLeft}>
        <img className={Styles.headerLogo} src={headerLogoPng} />
        <div className={Styles.pageName}>{pageName}</div>
      </div>
      <div className={Styles.headerRight}>
        <a className={Styles.memberCenter}>{memberCenter}</a>
      </div>
    </header>
  )
}

export default Header
