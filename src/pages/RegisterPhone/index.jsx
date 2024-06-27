import Styles from './style.module.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faArrowRightLong, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
// Components
import Header from '../../components/Sign/Header'
import Footer from '../../components/Footer'
import Anchor from '../../components/Elements/Anchor'
// Hooks
import { useEffect, useRef } from 'react'

function RegisterPhone() {
  const inputsRef = useRef([])
  useEffect(() => {
    const OTPinputs = inputsRef.current
    OTPinputs[0].focus()

    OTPinputs.forEach((input, index) => {
      input.addEventListener('input', (e) => {
        const currentInput = e.target
        const nextInput = OTPinputs[index + 1]

        if (currentInput.value.length > 1 && currentInput.value.length === 2) {
          currentInput.value = ''
        }

        if (nextInput && nextInput.hasAttribute('disabled') && currentInput.value !== '') {
          nextInput.removeAttribute('disabled')
          nextInput.focus()
        }
      })

      input.addEventListener('keyup', (e) => {
        if (e.key === 'Backspace') {
          if (index > 0) {
            e.target.value = ''
            e.target.setAttribute('disabled', true)
            OTPinputs[index - 1].focus()
          }
        }
      })
    })

    return () => {
      OTPinputs.forEach((input, index) => {
        input.removeEventListener('input', () => {})
        input.removeEventListener('keyup', () => {})
      })
    }
  }, [])

  return (
    <>
      <div className={Styles.container}>
        <Header pageName="註冊" />
        <main className={Styles.main}>
          <div className={Styles.mainContainer}>
            <div className={Styles.steps}>
              <div className={Styles.step}>
                <div className={Styles.currentCircle}>1</div>
                <div className={Styles.currentCircleText}>驗證電話號碼</div>
              </div>
              <div className={Styles.arrow}>
                <FontAwesomeIcon icon={faArrowRightLong} />
              </div>
              <div className={Styles.step}>
                <div className={Styles.circle}>2</div>
                <div className={Styles.circleText}>設定密碼</div>
              </div>
              <div className={Styles.arrow}>
                <FontAwesomeIcon icon={faArrowRightLong} />
              </div>
              <div className={Styles.step}>
                <div className={Styles.circle}>
                  <FontAwesomeIcon className={Styles.checkIcon} icon={faCheck} />
                </div>
                <div className={Styles.circleText}>完成</div>
              </div>
            </div>
            <div className={Styles.verificationCard}>
              <div className={Styles.cardHeader}>
                <a className={Styles.back} href="/buyer/register">
                  <FontAwesomeIcon icon={faArrowLeftLong} />
                </a>
                <div className={Styles.cardName}>輸入驗證碼</div>
              </div>
              <div className={Styles.cardMain}>
                {/* <div className={Styles.errorMessage}>
                  <div className={Styles.crossIcon}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                  </div>
                  <div className={Styles.message}>
                    您輸入的驗證碼已經過期。請再次嘗試請求新的驗證碼。
                  </div>
                </div> */}
                <div className={Styles.cardText}>
                  <div className={Styles.text}>您的驗證碼已透過簡訊傳送至</div>
                  <div className={Styles.phone}>0938473300</div>
                </div>
                <div className={Styles.otpContainer}>
                  <form className={Styles.otpForm} action="#">
                    <div className={Styles.inputFields}>
                      {[...Array(6)].map((_, i) => (
                        <input
                          key={i}
                          className={Styles.otpInput}
                          type="number"
                          ref={(el) => (inputsRef.current[i] = el)}
                          disabled={i !== 0}
                        />
                      ))}
                    </div>
                  </form>
                </div>
                <div className={Styles.otherVerification}>
                  <div className={Styles.otherText}>沒有收到驗證碼嗎？</div>
                  <div className={Styles.otherText}>
                    <Anchor content="重新傳送" />
                    或嘗試
                    <Anchor content="其他方式" />
                  </div>
                </div>
                <div className={Styles.cardSubmit}>下一步</div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default RegisterPhone
