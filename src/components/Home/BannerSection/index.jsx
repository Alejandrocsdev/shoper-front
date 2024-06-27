import Styles from './style.module.css'

function BannerSection() {
  return (
    <section className={Styles.container}>
      <div className={Styles.banners}>
        <div className={Styles.mainBanner}></div>
        <div className={Styles.sideBanners}>
          <div className={Styles.sideBanner}></div>
          <div className={Styles.sideBanner}></div>
        </div>
      </div>
      <div className={Styles.hotLinks}>
      <div className={Styles.link}>
        
      </div>
      </div>
    </section>
  )
}

export default BannerSection
