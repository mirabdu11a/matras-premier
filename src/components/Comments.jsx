import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import stars from '../assets/stars.svg';
import personImg from '../assets/peson.svg';

export default function Comments() {
  const { t } = useTranslation()
  const commentsData = t('comments.items', { returnObjects: true })

  return (
    <section className='Comments'>
      <div className="container">
        <h2>{t('comments.title')}</h2>

        <div className="slider-wrapper">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {Array.isArray(commentsData) && commentsData.map((item) => (
              <SwiperSlide className='block' key={item.id}>
                <div className="person-card">
                  <div className='person-info'>
                    <img src={personImg} alt="person icon" />
                    <div>
                      <p>{item.name}</p>
                      <img src={stars} alt="stars" />
                    </div>
                  </div>
                  <p className='comment'>{item.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="slider-controls">
            <button className="swiper-button-prev-custom">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="swiper-button-next-custom">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
