import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import watsap from '../assets/f-watsap.svg'
import tg from '../assets/f-tg.svg'
import call from '../assets/f-call.svg'
import { CHAT_ID, TOKEN } from "../constants"

export default function ContactBody() {
  const { t } = useTranslation()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const sendMessage = async (e) => {
    e.preventDefault()

    if (!name || !phone || !message) {
      alert(t('alert.important'))
      return
    }

    const text = `
📩 Yangi murojaat!

👤 Ism: ${name}
📞 Telefon: ${phone}
💬 Xabar: ${message}
`

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text,
          }),
        }
      )

      const data = await response.json()

      if (data.ok) {
        alert(t('alert.succes'))

        setName('')
        setPhone('')
        setMessage('')
      } else {
        alert(t('alert.sucfailces'))
      }
    } catch (error) {
      console.log(error)
      alert(t('alert.error'))
    }
  }

  return (
    <section className='ContactBody'>
      <div className="formBlock">
        <div>
          <form onSubmit={sendMessage}>
            <h2>{t('contact.writeUs')}</h2>
            <h3>{t('contact.formSubtitle')}</h3>

            <div className="inputs-block">
              <input
                placeholder={t('form.namePlaceholder')}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                placeholder={t('form.phonePlaceholder')}
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <textarea
              placeholder={t('form.messagePlaceholder')}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit">{t('btn.submit')}</button>

            <p>{t('common.privacyConsent')}</p>
          </form>
        </div>
      </div>

      <div className="formBlock2">
        <div className='container'>
          <form onSubmit={sendMessage}>
            <h2>{t('contact.writeUs')}</h2>
            <h3>{t('contact.formSubtitle')}</h3>

            <div className="inputs-block">
              <input
                className='input1'
                placeholder={t('form.namePlaceholder')}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                placeholder={t('form.phonePlaceholder')}
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <textarea
              placeholder={t('form.messagePlaceholder')}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit">{t('btn.submit')}</button>

            <p>{t('common.privacyConsent')}</p>
          </form>
        </div>
      </div>

      <div className='HomeContactBody'>
        <div className="contact-info">
          <h2>{t('contact.title')}</h2>

          <div className="filials">
            <h5>{t('contact.filial1')}</h5>
            <li className='phone'>
              <a href="tel:+998773774545">
                +998 77 377 45 45
              </a>
            </li>
            <p><b>{t('contact.workTime')}</b> {t('contact.workHours')}</p>

            <h5>{t('contact.filial2')}</h5>
            <li className='phone'>
              
              <a href="tel:+998940644444">
                +998 94 064 44 44
              </a>
            </li>
            <p><b>{t('contact.workTime')}</b> {t('contact.workHours2')}</p>
          </div>

          <ul>
            <li>
              <a href="https://www.instagram.com/matras_premier/" target='_blank'>
                <img src={watsap} alt="social" />
              </a>
            </li>

            <li>
              <a href="https://t.me/matras_premier" target='_blank'>
                <img src={tg} alt="social" />
              </a>
            </li>

            
          </ul>
        </div>
      </div>
    </section>
  )
}