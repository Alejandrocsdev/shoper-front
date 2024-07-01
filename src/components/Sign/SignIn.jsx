// 引用註冊4步驟
import Sign from '../../pages/Sign'
// Hooks
import { useState } from 'react'

// 註冊組件
function SignIn() {
  const [step, setStep] = useState(0)
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  // 下一步(包含資料傳遞: phone, password)
  const nextStep = (phone, password) => {
    setPhone(phone)
    setPassword(password)
    setStep((prevStep) => prevStep + 1)
  }

  // 上一步
  const previousStep = () => setStep((prevStep) => prevStep - 1)

  return (
    <div>
      {step === 0 && <Sign onNext={nextStep} isLogin={true} isSms={false} />}
      {step === 1 && <Sign onPrevious={previousStep} onNext={nextStep} isLogin={true} isSms={true} />}
    </div>
  )
}

export default SignIn
