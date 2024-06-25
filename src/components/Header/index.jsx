import Styles from './style.module.css'

function Header() {
  return (
    <>
      <header className={Styles.header}>
        <nav className={Styles.nav}>
          <div className={Styles.navLeft}>Nav Left</div>
          <div className={Styles.navRight}>Nav Right</div>
        </nav>
      </header>
    </>
  )
}

export default Header
