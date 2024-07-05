// Components
import Step from '../../components/Sign/Step'
import Success from '../../components/Sign/Step/Success'

// 註冊步驟3: 完成註冊並導向首頁
function Step3({ id, phone }) {
  return (
    <Step
      pageName="註冊"
      steps={true}
      step={3}
      cardName="註冊成功!"
      main={<Success id={id} phone={phone} isSignUp={true} />}
    />
  )
}

export default Step3
