import LeadForm from './LeadForm'

export default function ConsultationSetion() {
  return (
    <section className='ConsultationSetion'>
      <div className="overlay"></div>
      <div className="container">
        <div className="consultation-body">
          <p className='top-info'>Premium komfort sizga yaqin</p>
          <h2>Bepul konsultatsiya uchun ariza qoldiring</h2>
          <p className='middle-info'>Mutaxassisimiz siz bilan bog&apos;lanib, ehtiyojingizga mos eng qulay variantni tavsiya qiladi</p>
          <div className='input-body'>
            <LeadForm source="consultation" />
          </div>
          <p className='bottom-info'>Ma&apos;lumotlaringiz xavfsiz saqlanadi va uchinchi shaxslarga berilmaydi</p>
        </div>
      </div>
    </section>
  )
}
