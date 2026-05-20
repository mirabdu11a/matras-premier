import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function ProductCard({ product }) {
  const { i18n } = useTranslation()
  const lang = i18n.language === 'ru' ? 'ru' : 'uz'
  const name = product[`name_${lang}`] || product.name_uz
  const desc = product[`description_${lang}`] || product.description_uz
  const img = product.images?.[0]?.image
  return (
    <div className="col-md-3">
      <div className="product-card">
        <img src={img} alt={name} />
        <div className="card-body">
          <h4>{name}</h4>
          <p dangerouslySetInnerHTML={{ __html: desc }} />
          {product.price > 0 && (
            <div className="price">
              {Number(product.price).toLocaleString('ru-RU')} so&apos;m
              {product.old_price && (
                <span className="old"> {Number(product.old_price).toLocaleString('ru-RU')} so&apos;m</span>
              )}
            </div>
          )}
          <div className="d-flex">
            {product.in_stock && (
              <div className="nalichi">В наличии</div>
            )}
            <Link to={`/products/${product.id}`} className="batafsil-btn">Batafsil</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
