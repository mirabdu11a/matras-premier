import LeadForm from './LeadForm'

export default function Order() {
  return (
    <section className='Order'>
      <div className="container">
        <div className="order-body">
          <div className='info-body'>
            <h2>Sizga mos matrasni tanlashda yordam beramiz</h2>
          </div>
          <div className='input-body'>
            <LeadForm source="order" />
            <p>Ma&apos;lumotlaringiz xavfsiz saqlanadi va uchinchi shaxslarga berilmaydi</p>
          </div>
        </div>
      </div>
    </section>
  )
}
