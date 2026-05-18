import React from 'react'
import watsap from '../assets/f-watsap.svg'
import tg from '../assets/f-tg.svg'
import call from '../assets/f-call.svg'

export default function ContactBody() {
  return (
    <section className='ContactBody'>
      <div className="formBlock">
        <form action="">
          <h2>Bizga yozing</h2>
          <h3>Formani to‘ldiring — mutaxassisimiz siz bilan tez orada bog‘lanib, barcha savollaringizga javob beradi.</h3>
          <div className='inputs-block'>
            <input type="text" placeholder='Ismingiz' />
            <input type="text" placeholder='Telefon raqamingiz'/>
          </div>
          <textarea name="" placeholder='Savolingiz yoki izoh' id=""></textarea>
          <button>Yuborish</button>
          <p >Shaxsiy ma’lumotlarimni qayta ishlash shartlariga roziman</p>
        </form>

      </div>
      <div className='HomeContactBody'>
        <div className="contact-info">
          <h2>Kontakt ma’lumotlari</h2>
          <li className='phone'><a href="tel:+998940644444">+998 94 064 44 44</a></li>
          <li className='phone'><a href="tel:+998773774545">+998 77 377 45 45</a></li>
          <ul>
            <li><a href="#"><img src={watsap} alt="social" /></a></li>
            <li><a href="#"><img src={tg} alt="social" /></a></li>
            <li><a href="#"><img src={call} alt="social" /></a></li>
          </ul>

          <div className="filials">
            <h5>Olim polvon filiya</h5>
            <h5>Maxtumquli filal</h5>
            <p>Du–Ju: 09:00 – 19:00, Sh–Ya: 10:00 – 18:00</p>
            <button>Bog‘lanish</button>
          </div>
        </div>
    </div>
    </section>
  )
}
