import Styles from './style.module.css'
// PNG Files
import headerLogoPng from '../../../assets/images/logo/banner_light.png'
// Components
import Anchor from '../../Elements/Anchor'

const Header = ({ pageName }) => {
  return (
    <header className={Styles.header}>
      <Anchor off={true} content={<img className={Styles.headerLogo} src={headerLogoPng} />} to='/'/>
      <div className={Styles.pageName}>{pageName}</div>
    </header>
  )
}

export default Header
