// 引用註冊4步驟
import Sign from '../components/Sign'
import SmsSignIn from './SignInSteps/SmsSignIn.jsx'
// Hooks
import { useState } from 'react'

// 註冊組件
function SignIn() {
  const [step, setStep] = useState(0)
  const [phone, setPhone] = useState('')

  // 下一步(包含資料傳遞: phone)
  const next = (method) => {
    setPhone(method.phone)
    setStep((prevStep) => prevStep + 1)
  }

  const method = { phone }

  // 上一步
  const previous = () => setStep((prevStep) => prevStep - 1)

  return (
    <div>
      {step === 0 && <Sign isLogin={true} isSms={false} onNext={next} />}
      {step === 1 && <Sign isLogin={true} isSms={true}  onNext={next} onPrevious={previous} />}
      {step === 2 && <SmsSignIn onPrevious={previous} phone={phone} />}
    </div>
  )
}

export default SignIn
