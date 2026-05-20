import { useTranslation } from 'react-i18next'
import arrow from '../assets/arrow.svg'
import { useFetch } from '../api/hooks'
import { ENDPOINTS } from '../api/endpoints'

export default function CatalogSection() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ru' ? 'ru' : 'uz'
  const { data: categories, loading, error } = useFetch(ENDPOINTS.categories)

  return (
    <section className='CatalogSection'>
      <div className="container">
        <h2 className='section-title'>{t('catalog.title')}</h2>
        <div className="row">
          {loading && <p>{t('common.loading')}</p>}
          {error && <p>{t('common.error')}</p>}
          {!loading && !error && categories?.length === 0 && <p>{t('common.emptyCategories')}</p>}
          {!loading && !error && categories?.map((category) => (
            <div key={category.id} className="col-md-4">
              <div className="card1" style={category.image ? { backgroundImage: `url(${category.image})` } : {}}>
                <div className='card-info'>
                  <h3>{category[`name_${lang}`] || category.name_uz}</h3>
                </div>
                <a href="#">
                  <div className='arrow'>
                    <img src={arrow} alt="arrow" />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
