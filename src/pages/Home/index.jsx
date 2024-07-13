// Module Style
import Styles from './style.module.css'
import useAuth from '../../hooks/useAuth'

function Home() {
  const { auth } = useAuth()
  console.log(auth?.accessToken)
  return (
    <>
      <main className={Styles.main}>{auth?.accessToken}</main>
    </>
  )
}

export default Home
