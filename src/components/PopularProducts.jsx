import { useTranslation } from 'react-i18next'
import { useFetch } from '../api/hooks'
import { ENDPOINTS } from '../api/endpoints'
import ProductCard from './ProductCard'

export default function PopularProducts() {
  const { t } = useTranslation()
  const { data: products, loading, error } = useFetch(ENDPOINTS.products)
  return (
    <section className='PopularProducts'>
      <div className="container">
        <h2 className="section-title">{t('popular.title')}</h2>
        <div className="row">
          {loading && <p>{t('common.loading')}</p>}
          {error && <p>{t('common.error')}</p>}
          {!loading && !error && products?.length === 0 && <p>{t('common.emptyProducts')}</p>}
          {!loading && !error && products?.slice(0, 8).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  )
}
