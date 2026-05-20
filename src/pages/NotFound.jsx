import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <section className="NotFound" style={{ padding: '80px 0', textAlign: 'center' }}>
      <div className="container">
        <h1>404</h1>
        <p>{t('notFound.message')}</p>
        <Link to="/">{t('notFound.backLink')}</Link>
      </div>
    </section>
  )
}
