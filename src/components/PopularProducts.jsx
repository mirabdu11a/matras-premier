import { useFetch } from '../api/hooks'
import { ENDPOINTS } from '../api/endpoints'
import ProductCard from './ProductCard'

export default function PopularProducts() {
  const { data: products, loading, error } = useFetch(ENDPOINTS.products)
  return (
    <section className='PopularProducts'>
      <div className="container">
        <h2 className="section-title">Ommabop mahsulotlar</h2>
        <div className="row">
          {loading && <p>Yuklanmoqda...</p>}
          {error && <p>Xatolik yuz berdi. Qayta urinib ko&apos;ring.</p>}
          {!loading && !error && products?.length === 0 && <p>Mahsulotlar topilmadi.</p>}
          {!loading && !error && products?.slice(0, 8).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  )
}
