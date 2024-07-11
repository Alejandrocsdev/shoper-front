// Styles
import Styles from './style.module.css'
// Components
import Anchor from '../../components/Elements/Anchor'

const NotFound = () => {
  return (
    <main className={Styles.main}>
      <section className={Styles.section}>
        <h1 className={Styles.title}>404</h1>
        <p className={Styles.text}>您訪問的頁面不存在</p>
        <Anchor style={Styles.redirect} href="/" content="返回首頁" />
      </section>
    </main>
  )
}

export default NotFound
