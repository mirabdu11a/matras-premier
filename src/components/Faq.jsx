import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Faq() {
  const { t } = useTranslation()
  const [activeIndex, setActiveIndex] = useState(1)

  const faqData = t('faq.items', { returnObjects: true })

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className='Faq'>
      <div className='container'>
        <h2>{t('faq.title')}</h2>

        <div className='faq-wrapper'>
          {Array.isArray(faqData) && faqData.map((item, index) => (
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
