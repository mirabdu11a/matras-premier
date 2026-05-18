import React from 'react'
import p1 from '../assets/images/about1.webp'
import p2 from '../assets/images/about2.webp'

export default function AboutBody2() {
  return (
    <section className='AboutBody2'>
      <div className="container">
        <div className="row mb">
          <div className="col-md-6">
            <img src={p2} alt="about image" />
          </div>
          <div className="col-md-6 info-block">
            <h3>Yetkazib berish va xizmat</h3>
            <p>Buyurtmangizni qisqa muddatda va ehtiyotkorlik bilan manzilingizga yetkazib beramiz. Har bir mahsulot transport jarayonida zarar ko‘rmasligi uchun maxsus qadoqlanadi.</p>
            <h3>Hududlarga yetkazib berish</h3>
            <p>Biz butun O‘zbekiston bo‘ylab yetkazib berish xizmatini taklif qilamiz. Ishonchli logistika hamkorlarimiz orqali buyurtmalar tez va xavfsiz yetkaziladi.</p>
            <h3>Olib ketish</h3>
            <p>Istasangiz mahsulotni o‘zingiz ham olib ketishingiz mumkin. Manzil va vaqt bo‘yicha oldindan kelishib olinadi.</p>

          </div>
        </div>

        <div className="row row2">
          <div className="col-md-6 info-block2">
            <h3>Muhim ma’lumot</h3>
            <div className='block-info'>
              <div className='d-flex'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="9" y="9" width="6" height="6" rx="3" fill="#FFC20A"/>
                </svg>
                <p>Buyurtma rasmiylashtirilgandan so‘ng, yetkazib berishdan oldin operatorimiz siz bilan bog‘lanib, barcha tafsilotlarni (manzil, vaqt va mahsulot xususiyatlari) aniqlashtiradi</p>

              </div>
              <div className='d-flex'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="9" y="9" width="6" height="6" rx="3" fill="#FFC20A"/>
                </svg>
                <p>Har bir mahsulot transport jarayonida shikastlanmasligi uchun maxsus himoyalangan va mustahkam qadoqlarda yetkaziladi</p>

              </div>
              <div className='d-flex'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="9" y="9" width="6" height="6" rx="3" fill="#FFC20A"/>
                </svg>
                <p>Yetkazib berish muddati sizning hududingiz, masofa va buyurtma hajmiga qarab farq qilishi mumkin</p>
              </div>
            </div>
            <button>Оставить заявку</button>
          </div>
          <div className="col-md-6">
            <img src={p1} alt="about image" />
          </div>
        </div>
      </div>
    </section>
  )
}
