import { useTranslation } from 'react-i18next'
import arrow from '../assets/button-arrow.svg'
import download from '../assets/download.svg'
import Navbar from './Navbar'

const Header = () => {
  const { t } = useTranslation()

  return (
    <header className='Header'>
      <div className="overlay"></div>
      <Navbar />
      <div className="header-info">
        <div className="container">
          <div className="row">
            <div className="col-md-6 header-info__block">
              <h2 className='header-title'>{t('header.title')}</h2>
              <p>{t('header.subtitle')}</p>
              <div className="header-buttons">
                <button className='first-button'>{t('header.ctaPrimary')} <img src={arrow} alt="arrow" /></button>
                <button className='second-button'>{t('btn.downloadCatalog')} <img src={download} alt="download" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
