import { useTranslation } from 'react-i18next'
import Navbar from './Navbar'

export default function ProductsHeader() {
  const { t } = useTranslation()

  return (
    <header className='ProductsHeader'>
      <Navbar />
      <div className="container">
        <div className="header-body">
          <div className="navigation">
            <h5> {t('breadcrumb.home')} </h5>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9.00884 15.5892L7.83301 14.4108L12.2405 9.99999L7.83301 5.58916L9.01217 4.41083L13.4163 8.82166C13.7288 9.13421 13.9043 9.55805 13.9043 9.99999C13.9043 10.4419 13.7288 10.8658 13.4163 11.1783L9.00884 15.5892Z" fill="#ADADAD"/>
            </svg>
            <p>{t('products.breadcrumb')}</p>
          </div>
          <h2>{t('products.categoriesTitle')}</h2>
        </div>
      </div>
    </header>
  )
}
