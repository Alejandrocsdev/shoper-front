import Styles from './style.module.css'
// Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Home() {
  return (
    <>
      <Header />
      <main className={Styles.main}></main>
      <Footer />
    </>
  )
}

export default Home
