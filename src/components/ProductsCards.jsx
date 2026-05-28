import { useTranslation } from 'react-i18next'
import { useFetch } from '../api/hooks'
import { ENDPOINTS } from '../api/endpoints'
import ProductCard from './ProductCard'

export default function ProductsCards({ categoryId }) {
  const { t } = useTranslation()

  const productsUrl = categoryId
    ? `${ENDPOINTS.products}?category=${categoryId}`
    : ENDPOINTS.products
  const { data: products, loading, error } = useFetch(productsUrl)

  return (
    <section className='ProductsCards'>
      <div className="container">
        <div className="row cards">
          {loading && <p>{t('common.loading')}</p>}
          {error && <p>{t('common.error')}</p>}
          {!loading && !error && products?.length === 0 && <p>{t('common.emptyProducts')}</p>}
          {!loading && !error && products?.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  )
}
