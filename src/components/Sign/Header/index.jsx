import Styles from './style.module.css'
// PNG Files
import headerLogoPng from '../../../assets/images/logo/banner_light.png'
// Components
import Anchor from '../../Elements/Anchor'

const Header = ({ pageName, memberCenter, centerPath }) => {
  return (
    <header className={Styles.header}>
      <div className={Styles.headerLeft}>
        <a href="/">
          <img className={Styles.headerLogo} src={headerLogoPng} />
        </a>
        <div className={Styles.pageName}>{pageName}</div>
      </div>
      <div className={Styles.headerRight}>
        <Anchor style={Styles.memberCenter} href={centerPath} content={memberCenter} />
      </div>
    </header>
  )
}

export default Header
