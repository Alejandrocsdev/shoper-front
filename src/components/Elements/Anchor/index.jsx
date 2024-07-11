// Styles
import Styles from './style.module.css'
// Hooks
import { Link } from 'react-router-dom'

function Anchor({ style, off, href, onClick, content }) {
  return (
    <Link className={`${off ? '' : Styles.anchor} ${style}`} to={href} onClick={onClick}>
      {content}
    </Link>
  )
}

export default Anchor
