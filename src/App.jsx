import './App.scss'
import './i18n'

import { Route, Routes } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ProductsList from './pages/ProductsList'
import ProductsDetail from './pages/ProductsDetail'

function App() {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route index element={<Home  />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products  />} />
        <Route path='/contact' element={<Contact  />} />
        <Route path='/products-list' element={<ProductsList  />} />
        <Route path='/products-detail' element={<ProductsDetail  />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
