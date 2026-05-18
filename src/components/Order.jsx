import React from 'react'

export default function Order() {
  return (
    <section className='Order'>
      <div className="container">
        <div className="order-body">
          <div className='info-body'>
            <h2>Sizga mos matrasni tanlashda yordam beramiz</h2>
          </div>
          <div className='input-body'>
            <div className='d-flex'>
              <input type="text" placeholder='Ismingiz' />
              <input type="text" placeholder='Telefon raqamingiz'/>
              <button>Ariza yuborish</button>
            </div>
            <p>Ma’lumotlaringiz xavfsiz saqlanadi va uchinchi shaxslarga berilmaydi</p>
          </div>
        </div>
      </div>
    </section>
  )
}
