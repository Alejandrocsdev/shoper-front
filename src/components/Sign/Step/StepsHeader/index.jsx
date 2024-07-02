// Style
import Styles from './style.module.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

function StepsHeader({ step }) {
  const stepState = (currentStep) => {
    return currentStep <= step ? true : false
  }
  return (
    <div className={Styles.steps}>
      {/* 步驟1 */}
      <div className={Styles.step}>
        <div className={`${Styles.circle} ${stepState(1) ? Styles.bgOn : ''}`}>1</div>
        <div className={`${Styles.circleText} ${stepState(1) ? Styles.colorOn : ''}`}>驗證電話號碼</div>
      </div>
      <div className={`${Styles.arrow} ${stepState(2) ? Styles.colorOn : ''}`}>
        <FontAwesomeIcon icon={faArrowRightLong} />
      </div>
      {/* 步驟2 */}
      <div className={Styles.step}>
        <div className={`${Styles.circle} ${stepState(2) ? Styles.bgOn : ''}`}>2</div>
        <div className={`${Styles.circleText} ${stepState(2) ? Styles.colorOn : ''}`}>設定密碼</div>
      </div>
      <div className={`${Styles.arrow} ${stepState(3) ? Styles.colorOn : ''}`}>
        <FontAwesomeIcon icon={faArrowRightLong} />
      </div>
      {/* 步驟3 */}
      <div className={Styles.step}>
        <div className={`${Styles.circle} ${stepState(3) ? Styles.bgOn : ''}`}>
          <FontAwesomeIcon className={Styles.checkIcon} icon={faCheck} />
        </div>
        <div className={`${Styles.circleText} ${stepState(3) ? Styles.colorOn : ''}`}>完成</div>
      </div>
    </div>
  )
}

export default StepsHeader
