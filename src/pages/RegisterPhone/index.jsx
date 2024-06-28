// Style
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
import { useNavigate } from 'react-router-dom'
// modules
import axios from 'axios'
// environment variables
const { VITE_BASE_URL } = import.meta.env

function RegisterPhone({ onPrevious, onNext }) {
  // 導向特定頁面
  const navigate = useNavigate()

  // 用來保存所有 OTP 輸入框的參考
  const inputsRef = useRef([])

  // 倒數計時秒數
  const [count, setCount] = useState(5)
  // 是否正在倒數計時的狀態
  const [counting, setCounting] = useState(true)
  // 是否顯示倒數計時的狀態
  const [showCountDown, setShowCountDown] = useState(true)
  // 是否所有 OTP 輸入框都已填入值的狀態
  const [allFilled, setAllFilled] = useState(false)
  // OTP 驗證碼
  const [otp, setOtp] = useState('')
  // 錯誤訊息
  const [errorMessage, setErrorMessage] = useState('')
  // 是否有錯誤的狀態
  const [hasError, setHasError] = useState(false)

  // 當組件渲染後，將第一個 OTP 輸入框設置焦點
  useEffect(() => {
    const OTPinputs = inputsRef.current
    OTPinputs[0].focus()
  }, [])

  // 控制倒數計時
  useEffect(() => {
    let timer
    if (counting) {
      timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount === 1) {
            clearInterval(timer)
            setCounting(false)
            setShowCountDown(false)
          }
          return prevCount - 1
        })
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [counting])

  // 處理每個 OTP 輸入框值的變化
  const handleInputChange = (index, value) => {
    const OTPinputs = inputsRef.current
    OTPinputs[index].value = value

    // 如果該輸入框填入了值且不是最後一個輸入框，解鎖下一個輸入框並設置焦點
    if (index < OTPinputs.length - 1 && value.length === 1) {
      OTPinputs[index + 1].removeAttribute('disabled')
      OTPinputs[index + 1].focus()
    }

    updateOtpValue()
    checkAllFilled()
  }

  // 處理鍵盤事件，特別是退格鍵事件
  const handleKeyUp = (index, event) => {
    if (event.key === 'Backspace' && index > 0) {
      const OTPinputs = inputsRef.current
      OTPinputs[index].value = ''
      OTPinputs[index].setAttribute('disabled', true)
      OTPinputs[index - 1].focus()

      updateOtpValue()
      checkAllFilled()
    }
  }

  // 更新 OTP 驗證碼的值
  const updateOtpValue = () => {
    const otpValue = inputsRef.current.map((input) => input.value).join('')
    setOtp(otpValue)
  }

  // 檢查是否所有 OTP 輸入框都已填入值
  const checkAllFilled = () => {
    const filled = inputsRef.current.every((input) => input.value !== '')
    setAllFilled(filled)
  }

  // 處理重新發送驗證碼的點擊事件
  const handleResendClick = () => {
    handleResendOTP()
    setCount(5)
    setCounting(true)
    setShowCountDown(true)
  }

  // 處理表單提交事件
  const handleSubmit = async () => {
    if (allFilled) {
      try {
        const response = await axios.post(`${VITE_BASE_URL}/verification/verify/otp`, {
          phone: '0938473300',
          otp
        })
        console.log('Response:', response.data)
        setErrorMessage('')
        setHasError(false)
        if (response.data.statusType === 'Success') {
          // onNext()
          console.log('onNext')
        }
      } catch (error) {
        console.error('Error:', error)
        setErrorMessage(error.response?.data?.message || '驗證碼錯誤')
        setHasError(true)
      }
    }
  }

  // 處理重新傳送OTP事件
  const handleResendOTP = async () => {
    try {
      const response = await axios.post(`${VITE_BASE_URL}/verification/send/otp`, {
        phone: '0938473300'
      })
      console.log('Response:', response.data)
      setErrorMessage('')
      setHasError(false)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const countDownText = <div className={Styles.countDown}>{`${count}秒後重新傳送`}</div>
  const otherVerification = (
    <div>
      <div className={Styles.otherText}>沒有收到驗證碼嗎？</div>
      <div className={Styles.otherText}>
        <span onClick={handleResendClick}>重新傳送</span>或嘗試<span>其他方式</span>
      </div>
    </div>
  )

  return (
    <>
      <div className={Styles.container}>
        <Header pageName="註冊" />
        <main className={Styles.main}>
          <div className={Styles.mainContainer}>
            <div className={Styles.steps}>
              {/* 步驟1 */}
              <div className={Styles.step}>
                <div className={Styles.currentCircle}>1</div>
                <div className={Styles.currentCircleText}>驗證電話號碼</div>
              </div>
              <div className={Styles.arrow}>
                <FontAwesomeIcon icon={faArrowRightLong} />
              </div>
              {/* 步驟2 */}
              <div className={Styles.step}>
                <div className={Styles.circle}>2</div>
                <div className={Styles.circleText}>設定密碼</div>
              </div>
              <div className={Styles.arrow}>
                <FontAwesomeIcon icon={faArrowRightLong} />
              </div>
              {/* 步驟3 */}
              <div className={Styles.step}>
                <div className={Styles.circle}>
                  <FontAwesomeIcon className={Styles.checkIcon} icon={faCheck} />
                </div>
                <div className={Styles.circleText}>完成</div>
              </div>
            </div>
            {/* 驗證表單 */}
            <div className={Styles.verificationCard}>
              <div className={Styles.cardHeader}>
                {/* 返回上一頁 */}
                <a className={Styles.back} onClick={onPrevious}>
                  <FontAwesomeIcon icon={faArrowLeftLong} />
                </a>
                <div className={Styles.cardName}>輸入驗證碼</div>
              </div>
              <div className={Styles.cardMain}>
                {/* 錯誤訊息 */}
                {hasError && (
                  <div className={Styles.errorMessage}>
                    <div className={Styles.crossIcon}>
                      <FontAwesomeIcon icon={faCircleXmark} />
                    </div>
                    <div className={Styles.message}>{errorMessage}</div>
                  </div>
                )}
                <div className={Styles.cardText}>
                  <div className={Styles.text}>您的驗證碼已透過簡訊傳送至</div>
                  <div className={Styles.phone}>0938473300</div>
                </div>
                {/* OTP輸入框 */}
                <div className={Styles.otpContainer}>
                  <form className={Styles.otpForm}>
                    <div className={Styles.inputFields}>
                      {[...Array(6)].map((_, i) => (
                        <input
                          key={i}
                          className={Styles.otpInput}
                          type="number"
                          ref={(el) => (inputsRef.current[i] = el)}
                          disabled={i !== 0}
                          onChange={(e) => handleInputChange(i, e.target.value)}
                          onKeyUp={(e) => handleKeyUp(i, e)}
                        />
                      ))}
                    </div>
                  </form>
                </div>
                {/* OTP發送倒數 & 其他選項 */}
                <div className={Styles.otherVerification}>
                  <div>{showCountDown ? countDownText : otherVerification}</div>
                </div>
                {/* 執行下一步 */}
                <div
                  className={`${Styles.submit} ${allFilled ? Styles.allowed : Styles.notAllowed}`}
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
