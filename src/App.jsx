import './App.scss'
import CatalogSection from './components/CatalogSection'

import Header from './components/Header'

import { Route, Routes } from 'react-router-dom'

import About from './pages/About'

import Home from './pages/Home'

import Products from './pages/Products'

import Contact from './pages/Contact'

import Footer from './components/Footer'

import ScrollToTop from './components/ScrollToTop'

import ProductsList from './pages/ProductsList'

import ProductsDetail from './pages/ProductsDetail'
// ... boshqa importlar
import i18n from "i18next"; // i18next importini bitta qildik
import { initReactI18next } from "react-i18next";

import translationRu from './locale/ru'
import translationUz from './locale/uz'
import { LANGUANGE } from './locale'

// Avval tanlangan til bo'lsa o'shani oladi, bo'lmasa standart tilni oladi
const savedLanguage = localStorage.getItem('language') || LANGUANGE;

i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: translationUz },
    ru: { translation: translationRu },
  },
  lng: savedLanguage, 
  fallbackLng: 'uz',
});

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