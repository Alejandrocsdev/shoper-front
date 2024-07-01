// 引用註冊4步驟
import Sign from '../../pages/Sign'
import Step1 from '../../pages/SignIn/Step1'
// Hooks
import { useState } from 'react'

// 註冊組件
function SignIn() {
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
      {step === 0 && <Sign onNext={nextStep} isLogin={true} isSms={false} />}
      {step === 1 && <Sign onPrevious={previousStep} onNext={nextStep} isLogin={true} isSms={true} />}
      {step === 2 && <Step1 onPrevious={previousStep} phone={phone} />}
    </div>
  )
}

export default SignIn
