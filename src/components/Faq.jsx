import { useState } from 'react'

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(1)

  const faqData = [
    {
      id: 1,
      question: 'Yetkazib berish qancha vaqt oladi?',
      answer:
        'Yetkazib berish hududga qarab 1–3 ish kuni davom etadi.',
    },
    {
      id: 2,
      question: 'Mahsulotlar qanday qadoqlanadi?',
      answer:
        'Har bir mahsulot transport uchun maxsus himoyalangan qadoqda yetkaziladi',
    },
    {
      id: 3,
      question: 'Boshqa shaharga yetkazib berish mumkinmi?',
      answer:
        'Ha, biz O‘zbekistonning barcha hududlariga yetkazib beramiz.',
    },
  ]

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className='Faq'>
      <div className='container'>
        <h2>Ko‘p beriladigan savollar</h2>

        <div className='faq-wrapper'>
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className={`faq-item ${
                activeIndex === index ? 'active' : ''
              }`}
            >
              <div
                className='faq-header'
                onClick={() => toggleAccordion(index)}
              >
                <div className='faq-left'>
                  <span className='faq-number'>{item.id}</span>
                  <h3>{item.question}</h3>
                </div>

                <button className='faq-btn'>
                  {activeIndex === index ? '×' : '+'}
                </button>
              </div>

              <div
                className={`faq-content ${
                  activeIndex === index ? 'show' : ''
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}