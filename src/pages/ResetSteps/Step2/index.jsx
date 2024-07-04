// Style
import Styles from './style.module.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons'
// Components
import OtpCard from '../../../components/Sign/Step/OtpCard'
import Step from '../../../components/Sign/Step'
// Hooks
import { useNavigate } from 'react-router-dom'

function Step2({ onPrevious, onNext, phone, email }) {
  const navigate = useNavigate()

  const isPhone = phone ? true : false

  const emailIcon = <FontAwesomeIcon className={Styles.emailIcon} icon={faEnvelopeCircleCheck} />

  const emailSent = (
    <>
      <div className={Styles.iconContainer}>{emailIcon}</div>
      <div className={Styles.text}>
        驗證信已發送至<span className={Styles.email}>{email}</span>
      </div>
      <div className={Styles.text}>請驗證</div>
      {/* 執行下一步 */}
      <div className={Styles.submit} onClick={() => navigate('/')}>
        下一步
      </div>
    </>
  )

  return (
    <Step
      pageName="重置"
      back={true}
      backPath={onPrevious}
      cardName="重新設定密碼"
      main={
        isPhone ? (
          <OtpCard onPrevious={onPrevious} onNext={onNext} phone={phone} />
        ) : (
          emailSent
        )
      }
    />
  )
}

export default Step2
