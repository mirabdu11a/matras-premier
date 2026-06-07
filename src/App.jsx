import './App.scss'
import './i18n'

import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'

import About from './pages/About'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ProductsList from './pages/ProductsList'
import ProductsDetail from './pages/ProductsDetail'
import NotFound from './pages/NotFound'

function App() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true)
      } else {
        setShowScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products-list' element={<ProductsList />} />
        <Route path='/products-list/:categoryId' element={<ProductsList />} />
        <Route path='/products-detail' element={<ProductsDetail />} />
        <Route path='/products/:id' element={<ProductsDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />

      <a href="tel:+998901234567" className="mobile-call-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M6.62 10.79a15.466 15.466 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      </a>

      {/* Scroll Top Button */}
      <button
        onClick={scrollToTop}
        className={`scroll-top-btn ${showScroll ? 'show' : ''}`}
      >
        <svg
          width='42'
          height='42'
          viewBox='0 0 42 42'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='42' height='42' rx='10' fill='#FFC20A' />

          <g clipPath='url(#clip0_105_4459)'>
            <path
              d='M22.753 11.7446L26.0113 14.9696C26.0894 15.047 26.1514 15.1392 26.1937 15.2408C26.236 15.3423 26.2578 15.4512 26.2578 15.5612C26.2578 15.6712 26.236 15.7802 26.1937 15.8817C26.1514 15.9833 26.0894 16.0754 26.0113 16.1529C25.8552 16.3081 25.644 16.3952 25.4238 16.3952C25.2037 16.3952 24.9924 16.3081 24.8363 16.1529L21.8446 13.1862L21.8446 30.1779C21.8446 30.3989 21.7568 30.6109 21.6006 30.7672C21.4443 30.9234 21.2323 31.0112 21.0113 31.0112C20.7903 31.0112 20.5783 30.9234 20.4221 30.7672C20.2658 30.6109 20.178 30.3989 20.178 30.1779L20.178 13.1362L17.1696 16.1529C17.0922 16.231 17 16.293 16.8985 16.3353C16.7969 16.3776 16.688 16.3994 16.578 16.3994C16.468 16.3994 16.359 16.3776 16.2575 16.3353C16.156 16.293 16.0638 16.231 15.9863 16.1529C15.9082 16.0754 15.8462 15.9833 15.8039 15.8817C15.7616 15.7802 15.7398 15.6712 15.7398 15.5612C15.7398 15.4512 15.7616 15.3423 15.8039 15.2408C15.8462 15.1392 15.9082 15.047 15.9863 14.9696L19.2196 11.7446C19.6884 11.2764 20.3238 11.0134 20.9863 11.0134C21.6488 11.0134 22.2842 11.2764 22.753 11.7446Z'
              fill='#323232'
            />
          </g>

          <defs>
            <clipPath id='clip0_105_4459'>
              <rect
                width='20'
                height='20'
                fill='white'
                transform='translate(11 11)'
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </>
  )
}

export default App