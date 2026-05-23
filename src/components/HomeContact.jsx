import { useTranslation } from 'react-i18next'
import YandexMap from './YandexMap'
import watsap from '../assets/f-watsap.svg'
import tg from '../assets/f-tg.svg'
import call from '../assets/f-call.svg'

export default function HomeContact() {
  const { t } = useTranslation()

  return (
    <section className='HomeContact'>
      <div className='HomeContactBody'>
        <YandexMap/>
      </div>
      <div className='HomeContactBody'>
        <div className="contact-info">
          <h2>{t('contact.title')}</h2>
          <li className='phone'><a href="tel:+998940644444">+998 94 064 44 44</a></li>
          <li className='phone'><a href="tel:+998773774545">+998 77 377 45 45</a></li>
          <ul>
            <li><a href="#"><img src={watsap} alt="social" /></a></li>
            <li><a href="#"><img src={tg} alt="social" /></a></li>
            <li><a href="#"><img src={call} alt="social" /></a></li>
          </ul>

          <div className="filials">
            <h5>{t('contact.filial1')}</h5>
            <h5>{t('contact.filial2')}</h5>
            <p>{t('contact.workHours')}</p>
            <button>{t('btn.connect')}</button>
          </div>
        </div>
      </div>
    </section>
  )
}
