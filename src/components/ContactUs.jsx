import React from 'react'
import Contactanner from '../pages/ContactUs/ContactBanner/Contactanner'
import Header from './Header'
import MessageForm from '../pages/ContactUs/ContactMessageForm/MessageForm'
import Map from '../pages/ContactUs/ContactMap/Map'
import AskedQuestionSection from '../pages/ContactUs/FrequentlyAskedQuestion/AskedQuestionSection'
import Footer from './Footer'
import "../pages/ContactUs/Responsive/style.css"
export default function ContactUs() {
  return (
    <>
    <Header />
      <Contactanner />

      <MessageForm />

      <Map />

      <AskedQuestionSection />


      <Footer />
    </>
  )
}
