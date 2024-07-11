// 引用註冊4步驟
import Sign from '../components/Sign'
import Step1 from './SignUpSteps/Step1'
import Step2 from './SignUpSteps/Step2'
import Step3 from './SignUpSteps/Step3'
import Step4 from './SignUpSteps/Step4'
// Hooks
import { useState } from 'react'

// 註冊
function SignUp() {
  const [step, setStep] = useState(0)
  const [id, setId] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [avatar, setAvatar] = useState('')

  const user = { username, phone, avatar }

  // 下一步(包含資料傳遞)
  const next = (user, isSignedUp = false) => {
    setId(user.id)
    setUsername(user.username)
    setPhone(user.phone)
    setAvatar(user.avatar)
    setStep((prevStep) => {
      switch (prevStep) {
        case 4:
          return 0
        case 1:
          return isSignedUp ? 4 : 2
        default:
          return prevStep + 1
      }
    })
  }

  // 上一步
  const previous = () => setStep((prevStep) => prevStep - 1)

  return (
    <div>
      {step === 0 && <Sign onNext={next} isSignIn={false} />}
      {step === 1 && <Step1 onNext={next} onPrevious={previous} phone={phone} />}
      {step === 2 && <Step2 onNext={next} phone={phone} />}
      {step === 3 && <Step3 id={id} phone={phone} />}
      {step === 4 && <Step4 onNext={next} id={id} phone={phone} username={username} avatar={avatar} />}
    </div>
  )
}

export default SignUp
