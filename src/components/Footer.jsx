import { useTranslation } from 'react-i18next'
import logo from '../assets/footerLogo.svg'
import { NavLink } from 'react-router-dom'
import watsap from '../assets/f-watsap.svg'
import tg from '../assets/f-tg.svg'
import call from '../assets/f-call.svg'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className='Footer'>
      <svg className='circle1' xmlns="http://www.w3.org/2000/svg" width="124" height="100" viewBox="0 0 124 100" fill="none">
        <path opacity="0.2" d="M-21.1071 -102.038C-43.2782 -92.8747 -61.6428 -76.3951 -73.1449 -55.3421C-84.6469 -34.289 -88.5928 -9.93195 -84.3258 13.6757C-80.0588 37.2834 -67.8363 58.7181 -49.6922 74.4127C-31.5481 90.1074 -8.57666 99.1156 15.3994 99.9382C39.3755 100.761 62.9104 93.3484 82.0875 78.9343C101.265 64.5201 114.928 43.9737 120.803 20.7139C126.678 -2.54576 124.411 -27.1159 114.379 -48.9079C104.347 -70.6999 87.1548 -88.3994 65.6639 -99.061L56.3311 -80.2488C73.5238 -71.7195 87.2774 -57.5599 95.303 -40.1263C103.329 -22.6928 105.142 -3.0366 100.442 15.5712C95.7421 34.1789 84.8118 50.6161 69.47 62.1474C54.1283 73.6787 35.3004 79.6087 16.1196 78.9506C-3.06133 78.2925 -21.4385 71.0859 -35.9537 58.5302C-50.469 45.9745 -60.247 28.8267 -63.6606 9.94059C-67.0742 -8.94556 -63.9176 -28.4312 -54.7159 -45.2736C-45.5142 -62.1161 -30.8225 -75.2997 -13.0856 -82.6306L-21.1071 -102.038Z" fill="white"/>
      </svg>
      <svg className='circle2' xmlns="http://www.w3.org/2000/svg" width="423" height="442" viewBox="0 0 423 442" fill="none">
        <path d="M454.448 439.765L573 499.464C544.106 536.899 507.35 566.847 462.734 589.308C418.543 611.769 370.527 623 318.687 623C260.049 623 206.509 609.011 158.069 581.033C110.053 553.055 71.5984 515.62 42.7041 468.728C14.2347 421.441 0 369.229 0 312.091C0 268.745 8.28587 228.355 24.8576 190.919C41.4294 153.09 64.1624 119.99 93.0567 91.6176C122.376 62.8517 156.369 40.3906 195.037 24.2343C233.704 8.07811 274.921 0 318.687 0C370.527 0 418.543 11.2305 462.734 33.6916C507.35 56.1527 544.106 86.2979 573 124.127L454.448 183.826C436.602 164.124 415.781 149.15 391.986 138.904C368.19 128.265 343.757 122.945 318.687 122.945C283.844 122.945 252.188 131.811 223.719 149.544C195.674 166.882 173.366 189.934 156.794 218.7C140.647 247.072 132.574 278.202 132.574 312.091C132.574 345.586 140.86 376.716 157.432 405.482C174.003 433.854 196.311 456.709 224.356 474.047C252.825 491.386 284.269 500.055 318.687 500.055C345.032 500.055 370.102 494.538 393.898 483.505C417.693 472.471 437.876 457.891 454.448 439.765Z" fill="white" fillOpacity="0.2"/>
      </svg>
      <div className="container">
        <div className="footer-body">
          <div>
            <img src={logo} alt="brand logo" />
          </div>

          <div className='b2'>
            <div className='d-flex'>
              <ul className='footer-links'>
                <h4>{t('footer.menu')}</h4>
                <li><NavLink to="/">{t('footer.homeLink')}</NavLink></li>
                <li><NavLink to="/products">{t('nav.products')}</NavLink></li>
                <li><NavLink to="/about">{t('nav.about')}</NavLink></li>
                <li><NavLink to="/contact">{t('nav.contact')}</NavLink></li>
              </ul>

              <ul className='footer-links'>
                <h4>{t('footer.productsTitle')}</h4>
                <li><NavLink to="/products">{t('footer.item1')}</NavLink></li>
                <li><NavLink to="/products">{t('footer.item2')}</NavLink></li>
                <li><NavLink to="/products">{t('footer.item3')}</NavLink></li>
                <li><NavLink to="/products">{t('footer.item4')}</NavLink></li>
                <li><NavLink to="/products">{t('footer.item5')}</NavLink></li>
                <li><NavLink to="/products">{t('footer.item6')}</NavLink></li>
                <li><NavLink to="/products">{t('footer.item7')}</NavLink></li>
              </ul>
            </div>

            <div className='b2__b2'>
              <a className='f-number' href="tel:+998773774545">+998 77 377 45 45</a>

              <ul className='footer-socials'>
                <li><a href="#"><img src={watsap} alt="social-links" /></a></li>
                <li><a href="#"><img src={tg} alt="social-links" /></a></li>
                <li><a href="#"><img src={call} alt="social-links" /></a></li>
              </ul>

              <div className='footer-location'>
                <h4>{t('footer.filial')}</h4>
                <p>{t('footer.workHours')}</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className='b1'>{t('common.copyright', { year: new Date().getFullYear() })}</div>
            <div className='b2'>{t('common.devCredit')} <a target='_blank' href="https://www.web-marketing.uz/"> WEB MARKETING</a></div>
          </div>
        </div>

      </div>
    </footer>
  )
}
