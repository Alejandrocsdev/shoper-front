// 引用註冊4步驟
import Sign from '../../pages/Sign'
import Step1 from '../../pages/SignUp/Step1'
import Step2 from '../../pages/SignUp/Step2'
import Step3 from '../../pages/SignUp/Step3'
import Step4 from '../../pages/SignUp/Step4'
// Hooks
import { useState } from 'react'

// 註冊組件
function SignUp() {
  const [step, setStep] = useState(0)
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  // 下一步(包含資料傳遞: phone, password)
  const nextStep = (phone, password, isSignedUp = false) => {
    setPhone(phone)
    setPassword(password)
    setStep((prevStep) => (prevStep === 1 && isSignedUp ? 4 : prevStep + 1))
  }

  // 上一步
  const previousStep = () => setStep((prevStep) => prevStep - 1)

  return (
    <div>
      {step === 0 && <Sign onNext={nextStep} isLogin={false} />}
      {step === 1 && <Step1 onPrevious={previousStep} onNext={nextStep} phone={phone} />}
      {step === 2 && <Step2 onNext={nextStep} phone={phone} />}
      {step === 3 && <Step3 phone={phone} password={password} />}
      {step === 4 && <Step4 />}
    </div>
  )
}

export default SignUp
