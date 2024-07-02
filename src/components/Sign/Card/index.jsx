import Styles from './style.module.css'
// PNG Files
import mainLogoPng from '../../../assets/images/logo/cart_text_square_dark.png'
// Hooks
import { useNavigate } from 'react-router-dom'
// Components
import Form from './Form'
import ThirdPartySign from './ThirdPartySign'
import Anchor from '../../Elements/Anchor'

function Card({ onPrevious, onNext, isLogin, isSms }) {
  const navigate = useNavigate()

  return (
    <div className={Styles.signContainer}>
      {/* 表單標題 */}
      <div className={Styles.signHeader}>{isLogin ? '登入' : '註冊'}</div>
      {/* 表單主體 */}
      <Form onNext={onNext} isLogin={isLogin} isSms={isSms} />
      {/* 忘記密碼 */}
      {isLogin && (
        <div className={Styles.otherLogin}>
          <div className={Styles.otherLoginLeft}>
            {isLogin && !isSms && (
              <Anchor
                style={Styles.forgotPassword}
                content="忘記密碼"
                onClick={() => navigate('/reset')}
              />
            )}
          </div>
          <div className={Styles.otherLoginRight}>
            {isLogin && !isSms && (
              <Anchor style={Styles.smsLogin} content="使用簡訊登入" onClick={onNext} />
            )}
            {isLogin && isSms && (
              <Anchor style={Styles.smsLogin} content="使用密碼登入" onClick={onPrevious} />
            )}
          </div>
        </div>
      )}
      {/* 分隔線 */}
      <div className={`${Styles.breakLine} ${isLogin ? Styles.loginBreakLine : ''}`}>
        <div className={Styles.lineContainer}>
          <div className={Styles.line}></div>
        </div>
        <div className={Styles.or}>或</div>
        <div className={Styles.lineContainer}>
          <div className={Styles.line}></div>
        </div>
      </div>
      {/* 第三分登入/註冊 */}
      <ThirdPartySign />
      {/* 服務條款 */}
      {!isLogin && (
        <div className={Styles.policy}>
          點擊「下一步」或繼續註冊，即表示您已閱讀並同意瞎皮爾購物的
          <Anchor content="服務條款" />與<Anchor content="隱私權政策" />
        </div>
      )}
      {/* 表單結尾文字 */}
      <div className={Styles.loginFooter}>
        <span className={Styles.redirectText}>已經有帳號了嗎&#65311;</span>
        <Anchor
          style={Styles.redirect}
          href={isLogin ? '/signUp' : 'signIn'}
          content={isLogin ? '註冊' : '登入'}
        />
      </div>
    </div>
  )
}

export default Card
