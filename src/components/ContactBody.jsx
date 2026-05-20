import watsap from '../assets/f-watsap.svg'
import tg from '../assets/f-tg.svg'
import call from '../assets/f-call.svg'
import LeadForm from './LeadForm'

export default function ContactBody() {
  return (
    <section className='ContactBody'>
      <div className="formBlock">
        <div>
          <h2>Bizga yozing</h2>
          <h3>Formani to&apos;ldiring — mutaxassisimiz siz bilan tez orada bog&apos;lanib, barcha savollaringizga javob beradi.</h3>
          <LeadForm source="contact" withMessage />
          <p>Shaxsiy ma&apos;lumotlarimni qayta ishlash shartlariga roziman</p>
        </div>
      </div>
      <div className='HomeContactBody'>
        <div className="contact-info">
          <h2>Kontakt ma&apos;lumotlari</h2>
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
            <button>Bog&apos;lanish</button>
          </div>
        </div>
      </div>
    </section>
  )
}
