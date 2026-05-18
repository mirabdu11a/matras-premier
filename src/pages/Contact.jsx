import React from 'react'
import Navbar from '../components/Navbar'
import ContactHeader from '../components/ContactHeader'
import HomeContact from '../components/HomeContact'
import Order from '../components/Order'
import ContactBody from '../components/ContactBody'

export default function Contact() {
  return (
    <>
      <ContactHeader/>
      <ContactBody/>
      <Order/>
    </>
  )
}
