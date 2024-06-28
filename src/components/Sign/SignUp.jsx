// 引用註冊4步驟
import Step1 from '../../pages/Register/Step1'
import Step2 from '../../pages/Register/Step2'
// Hooks
import { useState } from 'react'

// 註冊組件
const SignUp = () => {
  const [step, setStep] = useState(1)
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
      {step === 1 && <Step1 onNext={nextStep} />}
      {step === 2 && <Step2 onPrevious={previousStep} onNext={nextStep} phone={phone} />}
    </div>
  )
}

export default SignUp
