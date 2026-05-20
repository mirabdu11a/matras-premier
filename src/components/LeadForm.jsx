import { useState } from 'react'
import { post } from '../api/client'
import { ENDPOINTS } from '../api/endpoints'

export default function LeadForm({ source = 'contact', productId = null, withMessage = false }) {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || form.phone.trim().length < 7) {
      setStatus('error'); return
    }
    setStatus('sending')
    try {
      await post(ENDPOINTS.lead, {
        name: form.name, phone: form.phone,
        message: withMessage ? form.message : '',
        source, product: productId,
      })
      setStatus('success')
      setForm({ name: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return <p className="lead-success">Rahmat! Tez orada siz bilan bog&apos;lanamiz.</p>
  }

  return (
    <form onSubmit={submit}>
      <div className="d-flex">
        <label className="visually-hidden" htmlFor={`name-${source}`}>Ism</label>
        <input id={`name-${source}`} name="name" type="text" placeholder="Ismingiz"
               value={form.name} onChange={change} required />
        <label className="visually-hidden" htmlFor={`phone-${source}`}>Telefon</label>
        <input id={`phone-${source}`} name="phone" type="tel" placeholder="Telefon raqamingiz"
               value={form.phone} onChange={change} required />
        {withMessage && (
          <textarea name="message" placeholder="Xabar" value={form.message} onChange={change} />
        )}
        <button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Yuborilmoqda...' : 'Ariza yuborish'}
        </button>
      </div>
      {status === 'error' && <p className="lead-error">Ism va to&apos;g&apos;ri telefon kiriting.</p>}
    </form>
  )
}
