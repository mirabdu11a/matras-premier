import { useTranslation } from 'react-i18next'
import LeadForm from './LeadForm'

export default function Order() {
  const { t } = useTranslation()

  return (
    <section className='Order'>
      <div className="container">
        <div className="order-body">
          <div className='info-body'>
            <h2>{t('order.title')}</h2>
          </div>
          <div className='input-body'>
            <LeadForm source="order" />
            <p>{t('common.privacyNote')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
