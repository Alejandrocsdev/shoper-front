// Components
import Step from '../../components/Sign/Step'
import PasswordCard from '../../components/Sign/Step/PasswordCard'

// 註冊步驟2: 設定密碼
function Step2({ onNext, phone }) {
  return (
    <Step
      pageName="註冊"
      steps={true}
      step={2}
      cardName="設定您的密碼"
      main={<PasswordCard onNext={onNext} phone={phone} isSignUp={true} />}
    />
  )
}

export default Step2
