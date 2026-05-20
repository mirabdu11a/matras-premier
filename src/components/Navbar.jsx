import { useTranslation } from 'react-i18next'
import logo from '../assets/logo.svg'
import languageIcon from '../assets/global-line.svg'
import tochka from '../assets/tochka.svg'
import { NavLink } from 'react-router-dom'
import { LANG_KEY } from '../locale'

function onLangChange(i18n, e) {
  const lang = e.target.value
  i18n.changeLanguage(lang)
  localStorage.setItem(LANG_KEY, lang)
}

export default function Navbar() {
  const { t, i18n } = useTranslation()

  return (
    <nav className='nav-bar'>
      <div className="container">
        <div className="nav-body">
          <div className='block1'>
            <img src={logo} alt="Matras Premier logo" />
            <ul>
              <li><NavLink to="/">{t('nav.home')}</NavLink></li>
              <li><NavLink to="/products">{t('nav.products')}</NavLink></li>
              <li><NavLink to="/about">{t('nav.about')}</NavLink></li>
              <li><NavLink to="/contact">{t('nav.contact')}</NavLink></li>
            </ul>
          </div>

          <div className='block2'>
            <div className='rectangle gap'>
              <img src={languageIcon} alt="icon" />
              <select name="language" id="language" value={i18n.language} onChange={(e) => onLangChange(i18n, e)}>
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
              </select>
            </div>

            <div>
              <a href="tel:+998940644444">+998 (94) 064 44 44</a>
              <div className='rectangle'>
                <img src={tochka} alt="icon" /><span> {t('nav.warranty')}</span>
              </div>
            </div>

            <button>{t('btn.order')}</button>
          </div>
        </div>
      </div>
    </nav>
  )
}
