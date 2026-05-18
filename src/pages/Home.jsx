import React from 'react'
import Header from '../components/Header'
import CatalogSection from '../components/CatalogSection'
import PopularProducts from '../components/PopularProducts'
import ServiceInfo from '../components/ServiceInfo'
import ConsultationSetion from '../components/ConsultationSetion'
import HomeContact from '../components/HomeContact'
import Order from '../components/Order'

export default function Home() {
  return (
    <>
      <Header />
      <CatalogSection/>
      <PopularProducts/>
      <ServiceInfo/>
      <ConsultationSetion/>
      <HomeContact/>
      <Order/>
    </>
  )
}