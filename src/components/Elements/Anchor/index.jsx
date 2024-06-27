import Styles from './style.module.css'

function Anchor({ style, href, content, onClick }) {
  return <a className={`${Styles.a} ${style}`} href={href} onClick={onClick}>{content}</a>
}

export default Anchor
