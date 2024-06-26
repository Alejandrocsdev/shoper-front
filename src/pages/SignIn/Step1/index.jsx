// Style
import Styles from './style.module.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
// Components
import Header from '../../../components/Sign/Header'
import SignUpSteps from '../../../components/Sign/SignUpSteps'
import Footer from '../../../components/Footer'

// Hooks
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// modules
import axios from 'axios'
// environment variables
const { VITE_BASE_URL } = import.meta.env
// 請求網址
const SEND_OTP_URL = `${VITE_BASE_URL}/verif/send/otp`
const VERIFY_OTP_URL = `${VITE_BASE_URL}/verif/verify/otp`
const SIGN_IN_URL = `${VITE_BASE_URL}/users/signIn`

// 註冊步驟1: 驗證手機OTP
function Step1({ onPrevious, phone }) {
  const navigate = useNavigate()

  // 用來保存所有 OTP 輸入框的參考
  const inputsRef = useRef([])

  // 倒數計時秒數
  const [count, setCount] = useState(60)
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

    // 保持只取值的最後一個字符
    const singleDigit = value.slice(-1)
    OTPinputs[index].value = singleDigit

    // 如果該輸入框填入了值且不是最後一個輸入框，解鎖下一個輸入框並設置焦點
    if (index < OTPinputs.length - 1 && value.length === 1) {
      OTPinputs[index + 1].removeAttribute('disabled')
      OTPinputs[index + 1].focus()
    }

    // 更新OTP值
    updateOtpValue()
    // 驗證OTP六位數是否填滿
    checkAllFilled()
  }

  // 處理鍵盤事件，特別是退格鍵事件
  const handleKeyUp = (index, event) => {
    if (event.key === 'Backspace' && index > 0) {
      const OTPinputs = inputsRef.current
      OTPinputs[index].value = ''
      OTPinputs[index].setAttribute('disabled', true)
      OTPinputs[index - 1].focus()

      // 更新OTP值
      updateOtpValue()
      // 驗證OTP六位數是否填滿
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
    const allFilled = !inputsRef.current.some((input) => input.value === '')
    setAllFilled(allFilled)
  }

  // 處理重新發送驗證碼的點擊事件
  const handleResendClick = () => {
    // 開始倒數60秒
    setCount(60)
    setCounting(true)
    setShowCountDown(true)
    // 發送OTP
    handleResendOTP()
  }

  // 處理表單提交事件
  const handleSubmit = async () => {
    if (allFilled) {
      try {
        const response = await axios.post(VERIFY_OTP_URL, { phone, otp })
        const data = response.data
        if (data.statusType === 'Success') {
          setErrorMessage('')
          setHasError(false)
          signIn()
        }
      } catch (err) {
        setErrorMessage(err.response?.data?.message)
        setHasError(true)
      }
    }
  }

  // 處理表單提交事件
  const signIn = async () => {
    try {
      const response = await axios.post(
        SIGN_IN_URL,
        { loginKey: phone, password: 'otp' },
        { withCredentials: true }
      )
      if (response.data.statusType === 'Success') {
        navigate('/')
      }
    } catch (err) {
      console.error('Error:', err)
    }
  }

  // 處理重新傳送OTP事件
  const handleResendOTP = async () => {
    try {
      const response = await axios.post(SEND_OTP_URL, { phone })
    } catch (err) {
      console.error(err.response?.data?.message)
    }
  }

  // 60秒倒數文字
  const countDownText = <div className={Styles.countDown}>{`${count}秒後重新傳送`}</div>
  // 重新傳送 & 其他方式
  const otherVerification = (
    <div>
      <div className={Styles.otherText}>沒有收到驗證碼嗎？</div>
      <div className={Styles.otherText}>
        <span onClick={handleResendClick}>重新傳送</span>
      </div>
    </div>
  )

  return (
    <>
      <Header pageName="登入" />
      <main className={Styles.main}>
        <div className={Styles.mainContainer}>
          {/* 表單 */}
          <div className={Styles.card}>
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
                <div className={Styles.phone}>{phone}</div>
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
    </>
  )
}

export default Step1
