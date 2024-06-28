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
import { useEffect, useRef, useState } from 'react'
// module
import axios from 'axios'
// env
const { VITE_BASE_URL } = import.meta.env

function RegisterPhone() {
  const inputsRef = useRef([])
  const [count, setCount] = useState(60)
  const [counting, setCounting] = useState(true)
  const [showCountDown, setShowCountDown] = useState(true) // State to control showing countdown or other text
  const [allFilled, setAllFilled] = useState(false)
  const [otp, setOtp] = useState('') // State to hold the combined OTP
  const [errorMessage, setErrorMessage] = useState('') // State for dynamic error message
  const [hasError, setHasError] = useState(false) // State to control error section visibility

  // Effect to start the countdown when `counting` state changes
  useEffect(() => {
    let timer
    if (counting) {
      timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount === 1) {
            clearInterval(timer)
            setCounting(false)
            setShowCountDown(false) // Hide countdown when it reaches zero
          }
          return prevCount - 1
        })
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [counting])

  // Function to handle resend click
  const handleResendClick = () => {
    setCount(60)
    setCounting(true)
    setShowCountDown(true) // Show countdown again on resend click
  }

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
        checkAllFilled()
        updateOtpValue()
      })

      input.addEventListener('keyup', (e) => {
        if (e.key === 'Backspace') {
          if (index > 0) {
            e.target.value = ''
            e.target.setAttribute('disabled', true)
            OTPinputs[index - 1].focus()
          }
          checkAllFilled()
          updateOtpValue()
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

  // Function to update the OTP value state based on current inputs
  const updateOtpValue = () => {
    const otpValue = inputsRef.current.map((input) => input.value).join('')
    setOtp(otpValue)
  }

  const checkAllFilled = () => {
    const state = inputsRef.current.every((input) => input.value !== '')
    console.log(state)
    setAllFilled(state)
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${VITE_BASE_URL}/verification/verify/otp`, {
        phone: '0938473300',
        otp
      })
      console.log('Response:', response.data)
      // Clear any previous error
      setErrorMessage('')
      setHasError(false)
    } catch (error) {
      console.error('Error:', error)
      // Set error message state
      setErrorMessage(error.response?.data?.message || '驗證碼錯誤') // Default message or use error message from API
      setHasError(true)
    }
  }

  // Function to determine if the submit button should be disabled
  // const isSubmitDisabled = () => {
  //   return !allFilled // Disable if inputs are not all filled or countdown is active
  // }

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
              {hasError && (
                  <div className={Styles.errorMessage}>
                    <div className={Styles.crossIcon}>
                      <FontAwesomeIcon icon={faCircleXmark} />
                    </div>
                    <div className={Styles.message}>
                      {errorMessage}
                    </div>
                  </div>
                )}
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
                          ref={(e) => (inputsRef.current[i] = e)}
                          disabled={i !== 0}
                        />
                      ))}
                    </div>
                  </form>
                </div>
                <div className={Styles.otherVerification}>
                  {showCountDown ? (
                    <div className={Styles.countDown}>{`${count}秒後重新傳送`}</div>
                  ) : (
                    <>
                      <div className={Styles.otherText}>沒有收到驗證碼嗎？</div>
                      <div className={Styles.otherText}>
                        <Anchor content="重新傳送" onClick={handleResendClick} />
                        或嘗試
                        <Anchor content="其他方式" />
                      </div>
                    </>
                  )}
                </div>
                <div
                  className={`${Styles.cardSubmit} ${
                    allFilled ? Styles.allowed : Styles.notAllowed
                  }`}
                  onClick={handleSubmit}
                >
                  下一步
                </div>
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
