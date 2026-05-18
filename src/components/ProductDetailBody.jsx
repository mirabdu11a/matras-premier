import React, { useState } from 'react'
import matrasImg from '../assets/images/product.jpg'
import matrasImg2 from '../assets/images/catalog/2.png'
import matrasImg3 from '../assets/images/catalog/3.png'
import matrasImg4 from '../assets/images/catalog/4.png'
import matrasImg5 from '../assets/images/catalog/5.png'
export default function ProductDetailBody() {

  const images = [
    matrasImg,
    matrasImg2,
    matrasImg3,
    matrasImg4,
    matrasImg5,
  ]

  const [activeImage, setActiveImage] = useState(images[0])

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

              <h5> Memory Foam topperlar </h5>

              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.00884 15.5892L7.83301 14.4108L12.2405 9.99999L7.83301 5.58916L9.01217 4.41083L13.4163 8.82166C13.7288 9.13421 13.9043 9.55805 13.9043 9.99999C13.9043 10.4419 13.7288 10.8658 13.4163 11.1783L9.00884 15.5892Z" fill="#ADADAD" />
              </svg>

              <p>Ortopedik matras Comfort Plus</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row product-body">

            <div className="col-md-7 product-img">

              <div className="main-image-block">
                <img className='main-img' src={activeImage} alt="" />
              </div>

              <div className="thumbnail-wrapper">
                {
                  images.map((img, index) => (
                    <div
                      key={index}
                      className={`thumb-item ${activeImage === img ? 'active' : ''}`}
                      onClick={() => setActiveImage(img)}
                    >
                      <img src={img} alt="" />
                    </div>
                  ))
                }
              </div>

            </div>

            <div className="col-md-5 form-block">
              <form action="">
                <h2>Ortopedik matras Comfort Plus</h2>

                <h3>
                  Umurtqani to‘g‘ri qo‘llab-quvvatlaydi va maksimal qulaylik beradi
                </h3>

                <div className="form-inputs">
                  <h5>Ushbu matras bo‘yicha so‘rov qoldiring</h5>

                  <input placeholder='Ismingiz' type="text" />
                  <input placeholder='Telefon raqamingiz' type="text" />

                  <button>Buyurtma berish</button>

                  <p>
                    Ma’lumotlaringiz xavfsiz saqlanadi va uchinchi shaxslarga berilmaydi
                  </p>
                </div>
              </form>
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
                <h3>  Asosiy xususiyatlar</h3>
                <p>Ushbu matras zamonaviy texnologiyalar asosida ishlab chiqarilgan bo‘lib, umurtqa pog‘onasini to‘g‘ri qo‘llab-quvvatlaydi va maksimal qulaylikni ta’minlaydi.
Ichki qatlamlari yuqori sifatli materiallardan iborat bo‘lib, bosimni teng taqsimlaydi va tananing tabiiy holatini saqlaydi. Matras uzoq muddat xizmat qilish uchun mo‘ljallangan va kundalik foydalanishda o‘z sifatini yo‘qotmaydi.

Nafas oluvchi tuzilma havo aylanishini ta’minlab, gigiyenik va qulay muhit yaratadi.</p>
              </div>
              <div className='middleInfo2'>
                  <h3>Hozir bog‘laning va batafsil ma’lumot oling</h3>
                  <p>Sizga mos o‘lcham va variantlar mavjud</p>
                  <a href="+998940644444">+998 (94) 064 44 44</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}