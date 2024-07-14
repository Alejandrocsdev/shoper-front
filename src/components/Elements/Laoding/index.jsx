// Module Style
import Styles from './style.module.css'

const Loading = () => {
  return (
    <div className={Styles.loadingContainer}>
      <div className={Styles.spinner}></div>
    </div>
  )
}

export default Loading
