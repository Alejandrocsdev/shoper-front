import Styles from './style.module.css'
// PNG Files
import avatarPng from '../../assets/images/avatar/avatar.png'
import headerLogoPng from '../../assets/images/logo/banner_dark.png'
import headerRoundLogoPng from '../../assets/images/logo/cart_text_round_dark.png'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faInstagram, faLine } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// Components
import Anchor from '../Elements/Anchor'
// Hooks
import useAuth from '../../hooks/useAuth'
import useAccessToken from '../../hooks/useAccessToken'

// Main Layout Footer
function Header() {
  // 用戶資料
  const user = useAccessToken()

  // 社群 LOGO 元素
  const facebook = <FontAwesomeIcon className={Styles.socialMedia} icon={faSquareFacebook} />
  const instagram = <FontAwesomeIcon className={Styles.socialMedia} icon={faInstagram} />
  const line = <FontAwesomeIcon className={Styles.socialMedia} icon={faLine} />
  // 會員頭像
  const avatar = <img className={Styles.avatar} src={user?.avatar || avatarPng} />
  const username = <div className={Styles.username}>{user?.username}</div>
  // 網站 LOGO 元素
  const largeLogo = (
    <img className={`${Styles.headerLogo} ${Styles.largeLogo}`} src={headerLogoPng} />
  )
  const smallLogo = (
    <img className={`${Styles.headerLogo} ${Styles.smallLogo}`} src={headerRoundLogoPng} />
  )

  return (
    <>
      <header className={Styles.header}>
        <nav className={Styles.nav}>
          {/* 左側 */}
          <div className={Styles.navLeft}>
            <Anchor style={Styles.navText} content="賣家中心" to="/" />
            <Anchor style={Styles.socialMedia} content={facebook} />
            <Anchor style={Styles.socialMedia} content={instagram} />
            <Anchor style={Styles.socialMedia} content={line} />
          </div>
          {/* 右側 */}
          <div className={Styles.navRight}>
            {/* 登出樣式 */}
            {!user && (
              <div className={Styles.signOutView}>
                <Anchor style={Styles.signUp} to="/signUp" content="註冊" />
                <Anchor style={Styles.signIn} to="/signIn" content="登入" />
              </div>
            )}
            {/* 登入樣式 */}
            {user && (
              <div className={Styles.signInView}>
                <Anchor
                  style={Styles.profileLink}
                  content={
                    <>
                      {avatar}
                      {username}
                    </>
                  }
                  to="/profile"
                />
              </div>
            )}
          </div>
        </nav>
        <div className={Styles.headerSearch}>
          {/* HOME鍵 */}
          <Anchor
            off={true}
            style={Styles.homeLink}
            content={
              <>
                {largeLogo}
                {smallLogo}
              </>
            }
            to="/"
          />
          {/* 搜尋欄 */}
          <div className={Styles.searchContainer}>
            <input className={Styles.searchInput} type="text" placeholder="請輸入搜尋關鍵字" />
            <button className={Styles.searchButton}>
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
