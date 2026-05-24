import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { post } from '../api/client'
import { ENDPOINTS } from '../api/endpoints'

export default function LeadForm({ source = 'contact', productId = null, withMessage = false }) {
  const { t } = useTranslation()
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
    return <p className="lead-success">{t('form.successMessage')}</p>
  }

  return (
    <form className='input-body2' onSubmit={submit}>
      <div className="d-flex  gap-1">
        <label className="visually-hidden" htmlFor={`name-${source}`}>{t('form.nameLabel')}</label>
        <input id={`name-${source}`} name="name" type="text" placeholder={t('form.namePlaceholder')}
               value={form.name} onChange={change} required />
        <label className="visually-hidden" htmlFor={`phone-${source}`}>{t('form.phoneLabel')}</label>
        <input id={`phone-${source}`} name="phone" type="tel" placeholder={t('form.phonePlaceholder')}
               value={form.phone} onChange={change} required />
        {withMessage && (
          <textarea name="message" placeholder={t('form.messagePlaceholder')} value={form.message} onChange={change} />
        )}
        <button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? t('btn.submitting') : t('btn.submit')}
        </button>
      </div>
      {status === 'error' && <p className="lead-error">{t('form.errorMessage')}</p>}
    </form>
  )
}
