import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="NotFound" style={{ padding: '80px 0', textAlign: 'center' }}>
      <div className="container">
        <h1>404</h1>
        <p>Sahifa topilmadi</p>
        <Link to="/">Bosh sahifaga qaytish</Link>
      </div>
    </section>
  )
}
