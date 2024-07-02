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
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [avatar, setAvatar] = useState('')

  const user = { username, password, phone, avatar }

  // 下一步(包含資料傳遞: phone, password)
  const next = (user, isSignedUp = false) => {
    setUsername(user.username)
    setPassword(user.password)
    setPhone(user.phone)
    setPhone(user.phone)
    setAvatar(user.avatar)
    setStep((prevStep) => (prevStep === 1 && isSignedUp ? 4 : prevStep + 1))
  }

  // 上一步
  const previous = () => setStep((prevStep) => prevStep - 1)

  return (
    <div>
      {step === 0 && <Sign onNext={next} isLogin={false} />}
      {step === 1 && <Step1 onPrevious={previous} onNext={next} phone={phone} />}
      {step === 2 && <Step2 onNext={next} phone={phone} />}
      {step === 3 && <Step3 phone={phone} password={password} />}
      {step === 4 && <Step4 username={username} password={password} phone={phone} avatar={avatar}/>}
    </div>
  )
}

export default SignUp
