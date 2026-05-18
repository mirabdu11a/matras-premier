import React from 'react'
import logo from '../assets/logo.svg'
import languageIcon from '../assets/global-line.svg'
import tochka from '../assets/tochka.svg'
import arrow from '../assets/button-arrow.svg'
import download from '../assets/download.svg'
import { NavLink } from 'react-router-dom'

import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLocale = (e) => {
    const selectedLanguage = e.target.value;
    
    i18n.changeLanguage(selectedLanguage);
    
    localStorage.setItem('language', selectedLanguage);
  }

  return (
    <header className='Header'> 
      <div className="overlay"></div>
      <nav className='nav-bar'>
        <div className="container">
          <div className="nav-body">
            <div className='block1'>
              <img src={logo} alt="Matras Premier logo" />
              <ul>
                <li><NavLink to="/">{t('home')}</NavLink></li>
                {/* Bu joylarni ham t('kalit') ko'rinishida yozib chiqishingiz kerak */}
                <li><NavLink to="/products">Mahsulotlar</NavLink></li>
                <li><NavLink to="/about">Biz haqimizda</NavLink></li>
                <li><NavLink to="/contact">Kontaktlar</NavLink></li>
              </ul>
            </div>

            <div className='block2'>
              <div className='rectangle gap'>
                <img src={languageIcon} alt="icon" />
                {/* value qismiga i18n.language qo'ysangiz joriy tilni o'zi tanlab turadi */}
                <select name="language" id="language" value={i18n.language} onChange={changeLocale}>
                  <option value="uz">UZ</option>
                  <option value="ru">RU</option>
                </select>
              </div>

              <div>
                <a href="tel:+998940644444">+998 (94) 064 44 44</a>
                <div className='rectangle'>
                  <img src={tochka} alt="icon" /><span> 5 yil garantiya</span>
                </div>
              </div>

              <button>Buyurtma berish</button>
            </div>
          </div>
        </div>
      </nav>
      <div className="header-info">

        <div className="container">

          <div className="row">

            <div className="col-md-6 header-info__block">

              <h2 className='header-title'>Sog‘lom uyqu — to‘g‘ri tanlangan matrasdan boshlanadi</h2>

              <p>Tanangizga moslashadigan texnologiyalar va yuqori sifatli materiallar bilan haqiqiy komfortni his qiling</p>

              <div className="header-buttons">

                <button className='first-button'>Kolleksiyani ko‘rish <img src={arrow} alt="arrow" /></button>

                <button className='second-button'>Katalogni yuklash <img src={download} alt="download" /></button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </header>
  )
}
export default Header;