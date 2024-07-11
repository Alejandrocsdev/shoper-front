// Module Style
import Styles from './style.module.css'
// Hooks
import { Link } from 'react-router-dom'

// 不刷新導向連結
function Anchor({ style, off, to, onClick, content }) {
  return (
    <Link className={`${off ? '' : Styles.anchor} ${style}`} to={to} onClick={onClick}>
      {content}
    </Link>
  )
}

export default Anchor