import Styles from './style.module.css'

function Anchor({ style, href, content }) {
  return <a className={`${Styles.a} ${style}`} href={href}>{content}</a>
}

export default Anchor
