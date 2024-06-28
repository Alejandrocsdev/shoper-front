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
            {/* <Anchor style={Styles.navText} href="/signIn" content="賣家中心" />
            <Anchor style={Styles.navText} href="/signUp" content="開始隨拍即賣囉!" /> */}
            {/* <span className={Styles.navText}>追蹤我們</span>
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
            /> */}
          </div>
          <div className={Styles.navRight}>
            <div className={Styles.logOutView}>
              <Anchor style={Styles.register} href="/signUp" content="註冊" />
              <Anchor style={Styles.login} href="/signIn" content="登入" />
            </div>
            {/* <div className={Styles.logInView}>
              <a className={Styles.profileLink} href="/user/purchase/">
                <img
                  className={Styles.avatar}
                  src="https://avatar.iran.liara.run/public/boy?username=Scott"
                />
                <div className={Styles.username}>newlean14</div>
              </a>
            </div> */}
          </div>
        </nav>
        <div className={Styles.headerSearch}>
          <a className={Styles.homeLink} href="/">
            <img className={Styles.headerLogo} src={headerLogoPng} />
          </a>
          <div className={Styles.searchContainer}>
            <input className={Styles.searchInput} type="text" placeholder="請輸入搜尋關鍵字" />
            <button className={Styles.searchButton} type="submit">
              <FontAwesomeIcon className={Styles.searchIcon} icon={faMagnifyingGlass} />
            </button>
          </div>
          <FontAwesomeIcon className={Styles.cartIcon} icon={faCartShopping} />
        </div>
      </header>
    </>
  )
}

export default Header
