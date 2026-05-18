import React from 'react'

export default function ConsultationSetion() {
  return (
    <section className='ConsultationSetion'>
      <div className="overlay"></div>
      <div className="container">
        <div className="consultation-body">
          <p className='top-info'>Premium komfort sizga yaqin</p>
          <h2>Bepul konsultatsiya uchun ariza qoldiring</h2>
          <p className='middle-info'>Mutaxassisimiz siz bilan bog‘lanib, ehtiyojingizga mos eng qulay variantni tavsiya qiladi</p>
          <div className='input-body'>
            <input type="text" name="" id="" placeholder='Telefon raqamingiz'/>
            <button>Bepul konsultatsiya olish</button>
          </div>
          <p className='bottom-info'>Ma’lumotlaringiz xavfsiz saqlanadi va uchinchi shaxslarga berilmaydi</p>
        </div>
      </div>
      
    </section>
  )
}
