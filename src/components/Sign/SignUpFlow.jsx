// 引用註冊4步驟
import SignUp from '../../pages/SignUp'
import Step1 from '../../pages/SignUp/Step1'
import Step2 from '../../pages/SignUp/Step2'
import Step3 from '../../pages/SignUp/Step3'
// Hooks
import { useState } from 'react'

// 註冊組件
function SignUpFlow() {
  const [step, setStep] = useState(0)
  const [phone, setPhone] = useState('')

  // 下一步(包含資料傳遞: phone)
  const nextStep = (phone) => {
    setPhone(phone)
    setStep((prevStep) => prevStep + 1)
  }

  // 上一步
  const previousStep = () => setStep((prevStep) => prevStep - 1)

  return (
    <div>
      {step === 0 && <SignUp onNext={nextStep} isLogin={false} />}
      {step === 1 && <Step1 onPrevious={previousStep} onNext={nextStep} phone={phone} />}
      {step === 2 && <Step2 onPrevious={previousStep} onNext={nextStep} phone={phone} />}
      {step === 3 && <Step3 />}
    </div>
  )
}

export default SignUpFlow
