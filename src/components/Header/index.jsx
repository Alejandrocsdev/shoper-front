import Styles from './style.module.css'
// PNG Files
import headerLogoPng from '../../assets/images/logo/banner_dark.png'
import headerRoundLogoPng from '../../assets/images/logo/cart_text_round_dark.png'
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
            <Anchor style={Styles.navText} href="/signIn" content="賣家中心" />
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
            <div className={Styles.signOutView}>
              <Anchor style={Styles.signUp} href="/signUp" content="註冊" />
              <Anchor style={Styles.signIn} href="/signIn" content="登入" />
            </div>
            {/* <div className={Styles.signInView}>
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
            <img className={`${Styles.headerLogo} ${Styles.largeLogo}`} src={headerLogoPng} />
            <img className={`${Styles.headerLogo} ${Styles.smallLogo}`} src={headerRoundLogoPng} />
          </a>
          <div className={Styles.searchContainer}>
            <input className={Styles.searchInput} type="text" placeholder="請輸入搜尋關鍵字" />
            <button className={Styles.searchButton} type="submit">
              <FontAwesomeIcon className={Styles.searchIcon} icon={faMagnifyingGlass} />
            </button>
          </div>
          <div className={Styles.cartContainer}>
            <FontAwesomeIcon className={Styles.cartIcon} icon={faCartShopping} />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
