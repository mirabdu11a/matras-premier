import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useFetch } from '../api/hooks'
import { ENDPOINTS } from '../api/endpoints'
import LeadForm from './LeadForm'

export default function ProductDetailBody() {
  const { id } = useParams()
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ru' ? 'ru' : 'uz'
  const { data: product, loading, error } = useFetch(ENDPOINTS.product(id))

  const [activeImage, setActiveImage] = useState(null)

  if (loading) {
    return (
      <section className='ProductDetailBody'>
        <div className="container"><p>{t('common.loading')}</p></div>
      </section>
    )
  }
  if (error || !product) {
    return (
      <section className='ProductDetailBody'>
        <div className="container"><p>{t('products.productNotFound')}</p></div>
      </section>
    )
  }

  const name = product[`name_${lang}`] || product.name_uz
  const desc = product[`description_${lang}`] || product.description_uz
  const images = product.images || []
  const currentImage = activeImage || images[0]?.image

  return (
    <>
      <section className='ProductDetailBody'>
        <div className="productbody-top">
          <div className="container">
            <div className="navigation">
              <h5> {t('breadcrumb.home')} </h5>

              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.00884 15.5892L7.83301 14.4108L12.2405 9.99999L7.83301 5.58916L9.01217 4.41083L13.4163 8.82166C13.7288 9.13421 13.9043 9.55805 13.9043 9.99999C13.9043 10.4419 13.7288 10.8658 13.4163 11.1783L9.00884 15.5892Z" fill="#ADADAD" />
              </svg>

              <h5> {t('breadcrumb.categories')} </h5>

              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.00884 15.5892L7.83301 14.4108L12.2405 9.99999L7.83301 5.58916L9.01217 4.41083L13.4163 8.82166C13.7288 9.13421 13.9043 9.55805 13.9043 9.99999C13.9043 10.4419 13.7288 10.8658 13.4163 11.1783L9.00884 15.5892Z" fill="#ADADAD" />
              </svg>

              <p>{name}</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row product-body">

            <div className="col-md-7 product-img">

              <div className="main-image-block">
                {currentImage && <img className='main-img' src={currentImage} alt={name} />}
              </div>

              <div className="thumbnail-wrapper">
                {images.map((img) => (
                  <div
                    key={img.id}
                    className={`thumb-item ${currentImage === img.image ? 'active' : ''}`}
                    onClick={() => setActiveImage(img.image)}
                  >
                    <img src={img.image} alt={name} />
                  </div>
                ))}
              </div>

            </div>

            <div className="col-md-5 form-block">
              <div className="detail-form">
                <h2>{name}</h2>

                <h3 dangerouslySetInnerHTML={{ __html: desc }} />
                {parseFloat(product.price) > 0 && (
                  <div className="product-price">
                    <span>
                      {parseFloat(product.price).toLocaleString('uz-UZ')} UZS
                    </span>
                  </div>
                )}

                {product.in_stock && (
                  <div className="nalichi mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M10 0C4.48583 0 0 4.48583 0 10C0 15.5142 4.48583 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48583 15.5142 0 10 0ZM9.92417 12.8492C9.60167 13.1717 9.1775 13.3325 8.75167 13.3325C8.32583 13.3325 7.8975 13.17 7.57167 12.845L5.25333 10.5983L6.41417 9.40083L8.74167 11.6567L13.5825 6.90583L14.7525 8.09333L9.92417 12.8492Z" fill="#00B58E"/>
</svg> {t('common.inStock')}</div>
                )}

                <div className="form-inputs">
                  <h5>{t('products.requestTitle')}</h5>
                  <LeadForm source="order" productId={product.id} />
                  <p>
                    {t('common.privacyNote')}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='product-description'>
        <div className="product-description__top">
          <div className="container">
            <h4>{t('products.productAbout')}</h4>
          </div>
        </div>
        <div className="product-description__middle">
          <div className="container">
            <div className='middle-block'>
              <div className='middleInfo1'>
                <h3>{t('products.mainFeatures')}</h3>
                <div className='desc' dangerouslySetInnerHTML={{ __html: desc }} />
                {parseFloat(product.price) > 0 && (
                  <div className="product-price">
                    <span>
                      {parseFloat(product.price).toLocaleString('uz-UZ')} UZS
                    </span>
                  </div>
                )}
              </div>
              <div className='middleInfo2'>
                <h3>{t('products.contactNow')}</h3>
                <p>{t('products.sizesAvailable')}</p>
                <a href="tel:+998940644444">+998 (94) 064 44 44</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
