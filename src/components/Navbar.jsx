import React from 'react'
import logo from '../assets/logo.svg'
import languageIcon from '../assets/global-line.svg'
import tochka from '../assets/tochka.svg'
import arrow from '../assets/button-arrow.svg'
import download from '../assets/download.svg'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='Navbar'>
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
  )
}
