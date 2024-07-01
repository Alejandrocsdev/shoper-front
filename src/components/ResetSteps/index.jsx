// 找回密碼
import Step1 from '../../pages/Reset/Step1'
// Hooks
import { useState } from 'react'

// 註冊組件
function Reset() {
  const [step, setStep] = useState(0)
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  // 下一步(包含資料傳遞: phone)
  const nextStep = (phone, email) => {
    setPhone(phone)
    setEmail(email)
    setStep((prevStep) => prevStep + 1)
  }

  // 上一步
  const previousStep = () => setStep((prevStep) => prevStep - 1)

  return (
    <div>
      {step === 0 && <Step1 onNext={nextStep} phone={phone} email={email} />}
    </div>
  )
}

export default Reset
