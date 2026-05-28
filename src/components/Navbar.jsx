import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

import logo from '../assets/logo.svg'
import languageIcon from '../assets/global-line.svg'
import tochka from '../assets/tochka.svg'

import { LANG_KEY } from '../locale'

function onLangChange(i18n, e) {
  const lang = e.target.value
  i18n.changeLanguage(lang)
  localStorage.setItem(LANG_KEY, lang)
}

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [menuOpen])

  return (
    <nav className='nav-bar'>
      <div className="container">
        <div className="nav-body">

          {/* LEFT */}
          <div className='block1'>
            <img className='nav-logo' src={logo} alt="Matras Premier logo" />

            <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>
              <li>
                <NavLink to="/" onClick={() => setMenuOpen(false)}>
                  {t('nav.home')}
                </NavLink>
              </li>

              <li>
                <NavLink to="/products" onClick={() => setMenuOpen(false)}>
                  {t('nav.products')}
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                  {t('nav.about')}
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                  {t('nav.contact')}
                </NavLink>
              </li>

              {/* MOBILE CONTACT */}
              <div className='mobile-contact'>
                <a href="tel:+998940644444">
                  +998 (94) 064 44 44
                </a>

                <div className='rectangle'>
                  <img src={tochka} alt="icon" />
                  <span>{t('nav.warranty')}</span>
                </div>
                <a  href="https://t.me/matras_premier_admin" target="_blank">

                <button>{t('btn.tg')}</button>
                </a>
              </div>
            </ul>
          </div>

          {/* RIGHT */}
          <div className='block2'>

            <div className='rectangle gap language-box'>
              <img src={languageIcon} alt="icon" />

              <select
                name="language"
                id="language"
                value={i18n.language}
                onChange={(e) => onLangChange(i18n, e)}
              >
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
              </select>
            </div>

            <div className='desktop-contact'>
              <a href="tel:+998940644444">
                +998 (94) 064 44 44
              </a>

              <div className='rectangle'>
                <img src={tochka} alt="icon" />
                <span>{t('nav.warranty')}</span>
              </div>
            </div>

            <a  href="https://t.me/matras_premier_admin" target="_blank">
              <button className='desktop-btn'>
                {t('btn.tg')}
              </button>
            </a>

            {/* BURGER */}
            <div
              className={menuOpen ? 'burger' : 'burger'}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? '✕' : '☰'}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}