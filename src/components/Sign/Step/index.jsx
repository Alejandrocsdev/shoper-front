// Style
import Styles from './style.module.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
// Components
import Header from '../../../components/Sign/Header'
import StepsView from '../../../components/Sign/Step/StepsView'
import Footer from '../../../components/Footer'

// 步驟樣板
function Step({ pageName, steps = false, step, back = false, backPath, cardName, main }) {
  return (
    <>
      <Header pageName={pageName} />
      <main className={Styles.main}>
        <div className={Styles.mainContainer}>
          {steps && <StepsView step={step} />}
          <div className={Styles.card}>
            <div className={Styles.cardHeader}>
              {back && (
                <a className={Styles.back} onClick={backPath}>
                  <FontAwesomeIcon icon={faArrowLeftLong} />
                </a>
              )}
              <div className={Styles.cardName}>{cardName}</div>
            </div>
            <div className={Styles.cardMain}>{main}</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Step
