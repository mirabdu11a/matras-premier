import React from 'react'
import AboutHeader from '../components/AboutHeader'
import AboutBody from '../components/AboutBody'
import AboutBody2 from '../components/AboutBody2'
import Faq from '../components/Faq'
import Comments from '../components/Comments'

export default function About() {
  return (
    <>
      <AboutHeader/>
      <AboutBody/>
      <AboutBody2/>
      <Faq/>
      <Comments/>
    </>
  )
}
