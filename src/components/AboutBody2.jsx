import { useTranslation } from 'react-i18next'
import p1 from '../assets/images/about1.webp'
import p2 from '../assets/images/about2.webp'

export default function AboutBody2() {
  const { t } = useTranslation()

  return (
    <section className='AboutBody2'>
      <div className="container">
        <div className="row mb">
          <div className="col-md-6">
            <img src={p2} alt="about image" />
          </div>
          <div className="col-md-6 info-block">
            <h3>{t('about.deliveryTitle')}</h3>
            <p>{t('about.deliveryDesc')}</p>
            <h3>{t('about.regionsTitle')}</h3>
            <p>{t('about.regionsDesc')}</p>
            <h3>{t('about.pickupTitle')}</h3>
            <p>{t('about.pickupDesc')}</p>
          </div>
        </div>

        <div className="row row2">
          <div className="col-md-6 info-block2">
            <h3>{t('about.importantTitle')}</h3>
            <div className='block-info'>
              <div className='d-flex'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="9" y="9" width="6" height="6" rx="3" fill="#FFC20A"/>
                </svg>
                <p>{t('about.importantItem1')}</p>
              </div>
              <div className='d-flex'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="9" y="9" width="6" height="6" rx="3" fill="#FFC20A"/>
                </svg>
                <p>{t('about.importantItem2')}</p>
              </div>
              <div className='d-flex'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="9" y="9" width="6" height="6" rx="3" fill="#FFC20A"/>
                </svg>
                <p>{t('about.importantItem3')}</p>
              </div>
            </div>
            <button>{t('btn.leaveRequest')}</button>
          </div>
          <div className="col-md-6">
            <img src={p1} alt="about image" />
          </div>
        </div>
      </div>
    </section>
  )
}
