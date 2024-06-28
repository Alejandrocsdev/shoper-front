import React, { useState } from 'react'
import BuyerRegister from '../../pages/BuyerRegister'
import RegisterPhone from '../../pages/RegisterPhone'

const Register = () => {
  const [step, setStep] = useState(1)

  const nextStep = () => setStep((prevStep) => prevStep + 1)
  const previousStep = () => setStep((prevStep) => prevStep - 1)

  return (
    <div>
      {step === 1 && <BuyerRegister onNext={nextStep} />}
      {step === 2 && <RegisterPhone onPrevious={previousStep} onNext={nextStep} />}
    </div>
  )
}

export default Register
