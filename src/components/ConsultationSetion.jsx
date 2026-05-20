import { useTranslation } from 'react-i18next'
import LeadForm from './LeadForm'

export default function ConsultationSetion() {
  const { t } = useTranslation()

  return (
    <section className='ConsultationSetion'>
      <div className="overlay"></div>
      <div className="container">
        <div className="consultation-body">
          <p className='top-info'>{t('consultation.topInfo')}</p>
          <h2>{t('consultation.title')}</h2>
          <p className='middle-info'>{t('consultation.middleInfo')}</p>
          <div className='input-body'>
            <LeadForm source="consultation" />
          </div>
          <p className='bottom-info'>{t('consultation.bottomInfo')}</p>
        </div>
      </div>
    </section>
  )
}
