import Styles from './style.module.css'
// PNG Files
import masterCardPng from '../../assets/images/ecpay/masterCard.png'
import visaPng from '../../assets/images/ecpay/visa.png'
import jcbPng from '../../assets/images/ecpay/jcb.png'
import sevenElevenPng from '../../assets/images/ecpay/sevenEleven.png'
import familyMartPng from '../../assets/images/ecpay/familyMart.png'
import okMartPng from '../../assets/images/ecpay/okMart.png'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faInstagram, faLine } from '@fortawesome/free-brands-svg-icons'
// Components
import Anchor from '../Elements/Anchor'

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.platformInfo}>
        <div className={Styles.payment}>
          <div className={Styles.catName}>付款</div>
          <div className={Styles.images}>
            <img className={Styles.image} src={masterCardPng} />
            <img className={Styles.image} src={visaPng} />
            <img className={Styles.image} src={jcbPng} />
          </div>
        </div>
        <div className={Styles.logistic}>
          <div className={Styles.catName}>物流合作</div>
          <div className={Styles.images}>
            <img className={Styles.image} src={sevenElevenPng} />
            <img className={Styles.image} src={familyMartPng} />
            <img className={Styles.image} src={okMartPng} />
          </div>
        </div>
        <div className={Styles.socialMedia}>
          <div className={Styles.catName}>關注我們</div>
          <div className={Styles.images}>
            <Anchor
              style={Styles.link}
              content={<FontAwesomeIcon className={Styles.icon} icon={faSquareFacebook} />}
            />
            <Anchor
              style={Styles.link}
              content={<FontAwesomeIcon className={Styles.icon} icon={faInstagram} />}
            />
            <Anchor
              style={Styles.link}
              content={<FontAwesomeIcon className={Styles.icon} icon={faLine} />}
            />
          </div>
        </div>
      </div>
      <div className={Styles.companyInfo}>
        <div className={Styles.companyName}>瞎皮爾電商有限公司</div>
        <div className={Styles.unifiedNumber}>統一編號&#65306;00000000</div>
        <div className={Styles.copyright}>&copy; 2024 Shopper. 版權所有。</div>
      </div>
    </footer>
  )
}

export default Footer
