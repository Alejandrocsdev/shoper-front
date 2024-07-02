// 找回密碼
import Step1 from '../../pages/Reset/Step1'
import Step2 from '../../pages/Reset/Step2'
import Step3 from '../../pages/Reset/Step3'
// Hooks
import { useState } from 'react'

// 註冊組件
function Reset() {
  const [step, setStep] = useState(0)
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const method = { phone, email }

  // 下一步(包含資料傳遞: phone)
  const next = (method) => {
    setPhone(method.phone)
    setEmail(method.email)
    setStep((prevStep) => prevStep + 1)
  }

  // 上一步
  const previous = () => setStep((prevStep) => prevStep - 1)

  return (
    <div>
      {step === 0 && <Step1 onNext={next} />}
      {step === 1 && <Step2 onPrevious={previous} onNext={next} phone={phone} email={email} />}
      {step === 2 && <Step3 onNext={next} phone={phone} email={email} />}
    </div>
  )
}

export default Reset
