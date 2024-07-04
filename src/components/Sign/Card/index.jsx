import Styles from './style.module.css'
// PNG Files
import mainLogoPng from '../../../assets/images/logo/cart_text_square_dark.png'
// Hooks
import { useNavigate } from 'react-router-dom'
// Components
import Form from './Form'
import ThirdPartySign from './ThirdPartySign'
import Anchor from '../../Elements/Anchor'

function Card({ onPrevious, onNext, isSignIn, isSmsSignIn }) {
  // 密碼登入
  const isPwdSignIn = isSignIn && !isSmsSignIn

  return (
    <div className={Styles.card}>
      <div className={Styles.cardHeader}>{isSignIn ? '登入' : '註冊'}</div>
      {/* 表單 */}
      <Form onNext={onNext} isSignIn={isSignIn} isSmsSignIn={isSmsSignIn} />
      {/* 忘記密碼 || 其他登入 */}
      {isSignIn && (
        <div className={Styles.otherSign}>
          <div>
            {isPwdSignIn && <Anchor style={Styles.forgotPwd} content="忘記密碼" href="/reset" />}
          </div>
          <div>
            {isPwdSignIn && (
              <Anchor style={Styles.smsSignIn} content="使用簡訊登入" onClick={onNext} />
            )}
            {isSmsSignIn && (
              <Anchor style={Styles.smsSignIn} content="使用密碼登入" onClick={onPrevious} />
            )}
          </div>
        </div>
      )}
      {/* 分隔線 */}
      <div className={`${Styles.breakLine} ${isSignIn ? Styles.signInLine : ''}`}>
        <div className={Styles.lineContainer}>
          <div className={Styles.line}></div>
        </div>
        <div className={Styles.or}>或</div>
        <div className={Styles.lineContainer}>
          <div className={Styles.line}></div>
        </div>
      </div>
      {/* 第三方登入/註冊 */}
      <ThirdPartySign />
      {/* 服務條款 */}
      {!isSignIn && (
        <div className={Styles.policy}>
          點擊「下一步」或繼續註冊，即表示您已閱讀並同意瞎皮爾購物的
          <Anchor content="服務條款" />與<Anchor content="隱私權政策" />
        </div>
      )}
      {/* 結尾文字 */}
      <div className={Styles.cardFooter}>
        <span className={Styles.redirectText}>已經有帳號了嗎&#65311;</span>
        <Anchor
          style={Styles.redirect}
          href={isSignIn ? '/signUp' : 'signIn'}
          content={isSignIn ? '註冊' : '登入'}
        />
      </div>
    </div>
  )
}

export default Card
