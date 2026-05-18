import React from 'react'
import arrow from '../assets/arrow.svg'


export default function CatalogSection() {
  return (
    <section className='CatalogSection'>
      <div className="container">
        <h2 className='section-title'>Mahsulotlar katalogi</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card1">
              <div className='card-info'>
                <h3>Paralon (PU) topperlar</h3>
                <p>5, 7 va 10 sm qalinlikda</p>
              </div>
              <a href="#">
                <div className='arrow'>
                  <img src={arrow} alt="arrow" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
