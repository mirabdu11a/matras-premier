import React from 'react'
import logo from '../assets/logo.svg'
import languageIcon from '../assets/global-line.svg'
import tochka from '../assets/tochka.svg'
import arrow from '../assets/button-arrow.svg'
import download from '../assets/download.svg'
import { NavLink } from 'react-router-dom'

export default function ContactHeader() {
  return (
    <header className='ContactHeader'>
      <nav className='nav-bar'>
        <div className="container">
          <div className="nav-body">
            <div className='block1'>
              <img src={logo} alt="Matras Premier logo" />
              <ul>
                <li><NavLink to="/">Bosh safiha</NavLink></li>
                <li><NavLink to="/products">Mahsulotlar</NavLink></li>
                <li><NavLink to="/about">Biz haqimizda</NavLink></li>
                <li><NavLink to="/contact">Kontaktlar</NavLink></li>
              </ul>
            </div>

            <div className='block2'>
              <div className='rectangle gap'>
                <img src={languageIcon} alt="icon" />
                <select name="" id="">
                  <option value="">UZ</option>
                  <option value="">RU</option>
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

        <div className="container">
          <div className="header-body">
            <div className="navigation">
              <h5> Bosh sahifa </h5> 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.00884 15.5892L7.83301 14.4108L12.2405 9.99999L7.83301 5.58916L9.01217 4.41083L13.4163 8.82166C13.7288 9.13421 13.9043 9.55805 13.9043 9.99999C13.9043 10.4419 13.7288 10.8658 13.4163 11.1783L9.00884 15.5892Z" fill="#ADADAD"/>
              </svg>
              <p>Kontaktlar</p>
            </div>
            <h2>Biz bilan bog‘laning</h2>
        </div>
      </div>
    </header>
  )
}
