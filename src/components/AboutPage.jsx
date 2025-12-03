import React from 'react'
import Header from './Header'
import AboutUsBanner from '../pages/AboutUs/banner/AboutUsBanner'
import Section from '../pages/AboutUs/AboutUsDetail/Section'
import Services from '../pages/AboutUs/Services/Services'
import HiringSection from '../pages/AboutUs/expertHire/HiringSection'
import ExpertSection from '../pages/AboutUs/certifiedExperts/ExpertSection'
import FuterWithUsSection from '../pages/AboutUs/futureWithUs/FuterWithUsSection'
import MakeItHappenTitle from '../pages/AboutUs/MakeItHappen/MakeItHappenTitle'
import Progress_Number_section from '../pages/AboutUs/ProgressNumber/Progress_Number_section'
import Awords_section from '../pages/AboutUs/Awords/Awords_section'
import Footer from './Footer'


export default function AboutPage() {
  return (
    <>
    <Header />
    <AboutUsBanner />
      <Section />
      <Services />
      <HiringSection />
      <ExpertSection />
      <FuterWithUsSection />
      <MakeItHappenTitle />
      <Progress_Number_section />
      <Awords_section />
      <Footer />
 </>
  )
}
