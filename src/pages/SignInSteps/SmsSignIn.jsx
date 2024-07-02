// Components
import Step from '../../components/Sign/Step'
import OtpCard from '../../components/Sign/Step/OtpCard'

// 簡訊登入: 驗證手機OTP
function SmsSignIn({ onNext, onPrevious, phone }) {
  return (
    <Step
      pageName="登入"
      back={true}
      backPath={onPrevious}
      cardName="輸入驗證碼"
      main={<OtpCard onPrevious={onPrevious} onNext={onNext} phone={phone} isSignUp={false} />}
    />
  )
}

export default SmsSignIn
