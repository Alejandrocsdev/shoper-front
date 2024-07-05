// Components
import Step from '../../components/Sign/Step'
import Success from '../../components/Sign/Step/Success'

function Step4({ phone, email }) {
  return (
    <Step
      pageName="重設"
      cardName="重設密碼成功"
      main={<Success phone={phone} email={email} />}
    />
  )
}

export default Step4
