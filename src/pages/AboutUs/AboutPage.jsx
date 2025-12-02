import React from 'react'
import Header from '../../components/Header'
import AboutUsBanner from './banner/AboutUsBanner'
import Section from './AboutUsDetail/Section'
import Services from './Services/Services'
import HiringSection from './expertHire/HiringSection'
import ExpertSection from './certifiedExperts/ExpertSection'
import FuterWithUsSection from './futureWithUs/FuterWithUsSection'
import MakeItHappenTitle from './MakeItHappen/MakeItHappenTitle'

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
 </>
  )
}
