import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useFetch } from '../api/hooks'
import { ENDPOINTS } from '../api/endpoints'
import LeadForm from './LeadForm'

export default function ProductDetailBody() {
  const { id } = useParams()
  const { i18n } = useTranslation()
  const lang = i18n.language === 'ru' ? 'ru' : 'uz'
  const { data: product, loading, error } = useFetch(ENDPOINTS.product(id))

  const [activeImage, setActiveImage] = useState(null)

  if (loading) {
    return (
      <section className='ProductDetailBody'>
        <div className="container"><p>Yuklanmoqda...</p></div>
      </section>
    )
  }
  if (error || !product) {
    return (
      <section className='ProductDetailBody'>
        <div className="container"><p>Mahsulot topilmadi.</p></div>
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
              <h5> Bosh sahifa </h5>

              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.00884 15.5892L7.83301 14.4108L12.2405 9.99999L7.83301 5.58916L9.01217 4.41083L13.4163 8.82166C13.7288 9.13421 13.9043 9.55805 13.9043 9.99999C13.9043 10.4419 13.7288 10.8658 13.4163 11.1783L9.00884 15.5892Z" fill="#ADADAD" />
              </svg>

              <h5> Kategoriyalar </h5>

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
              <div>
                <h2>{name}</h2>

                <h3 dangerouslySetInnerHTML={{ __html: desc }} />

                {product.price > 0 && (
                  <div className="price">
                    {Number(product.price).toLocaleString('ru-RU')} so&apos;m
                    {product.old_price && (
                      <span className="old"> {Number(product.old_price).toLocaleString('ru-RU')} so&apos;m</span>
                    )}
                  </div>
                )}

                {product.in_stock && (
                  <div className="nalichi">В наличии</div>
                )}

                <div className="form-inputs">
                  <h5>Ushbu matras bo&apos;yicha so&apos;rov qoldiring</h5>
                  <LeadForm source="order" productId={product.id} />
                  <p>
                    Ma&apos;lumotlaringiz xavfsiz saqlanadi va uchinchi shaxslarga berilmaydi
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
            <h4>Mahsulot haqida</h4>
          </div>
        </div>
        <div className="product-description__middle">
          <div className="container">
            <div className='middle-block'>
              <div className='middleInfo1'>
                <h3>Asosiy xususiyatlar</h3>
                <div dangerouslySetInnerHTML={{ __html: desc }} />
              </div>
              <div className='middleInfo2'>
                <h3>Hozir bog&apos;laning va batafsil ma&apos;lumot oling</h3>
                <p>Sizga mos o&apos;lcham va variantlar mavjud</p>
                <a href="tel:+998940644444">+998 (94) 064 44 44</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
