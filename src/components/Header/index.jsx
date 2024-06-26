import Styles from './style.module.css'
// PNG Files
import headerLogoPng from '../../assets/images/logo/banner_dark.png'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faInstagram, faLine } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// Components
import Anchor from '../Elements/Anchor'

function Header() {
  return (
    <>
      <header className={Styles.header}>
        <nav className={Styles.nav}>
          <div className={Styles.navLeft}>
            <Anchor style={Styles.navText} href="/seller/login" content="賣家中心" />
            <Anchor style={Styles.navText} href="/seller/register" content="開始隨拍即賣囉!" />
            <span className={Styles.navText}>追蹤我們</span>
            <Anchor
              style={Styles.socialMedia}
              content={<FontAwesomeIcon className={Styles.icon} icon={faSquareFacebook} />}
            />
            <Anchor
              style={Styles.socialMedia}
              content={<FontAwesomeIcon className={Styles.icon} icon={faInstagram} />}
            />
            <Anchor
              style={Styles.socialMedia}
              content={<FontAwesomeIcon className={Styles.icon} icon={faLine} />}
            />
          </div>
          <div className={Styles.navRight}>
            <Anchor style={Styles.register} href="/buyer/register" content="註冊" />
            <Anchor style={Styles.login} href="/buyer/login" content="登入" />
          </div>
        </nav>
        <div className={Styles.headerSearch}>
          <img className={Styles.headerLogo} src={headerLogoPng}/>
          <div className={Styles.searchContainer}>
            <input type="text" />
            <button type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
          </div>
          <FontAwesomeIcon className={Styles.cart} icon={faCartShopping} />
        </div>
      </header>
    </>
  )
}

export default Header
