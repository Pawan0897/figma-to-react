import React from 'react'
import Header from '../components/Header'
import SectionOne from '../components/index/SectionOne'
// import SectionTwo from '../components/index/SectionTwo'
import SectionThree from '../components/index/SectionThree'
import SectionFourth from '../components/index/SectionFourth'
import SectionFifth from '../components/index/SectionFifth'
import SectionSixth from '../components/index/SectionSixth'
import SectionSeventh from '../components/index/SectionSeventh'
import SectionEight from '../components/index/SectionEight'
import SectionNinth from '../components/index/SectionNinth'
import Footer from '../components/Footer'
import SectionSlider from '../components/index/SectionSlider'
import BlogSection from '../components/index/blogs/BlogSection'
import OurLocation from '../components/index/ourlocation/OurLocation'

export default function Index() {

    return (
        <>
            <Header />
            {/* ************* */}
            <SectionOne />
            {/* ************* */}
            {/* <SectionTwo /> */}
            {/* ************* */}
            <SectionThree />
            {/* ************* */}
            <SectionFourth />
            {/* ************* */}
            <SectionFifth />
            {/* ************* */}
            <SectionSixth />
            {/* ************* */}
            {/* <SectionSeventh /> */}
            {/* ******************** */}
            <SectionSlider />
            {/* *************** */}
            <BlogSection />
            {/* ************* */}
            <SectionEight />
            {/* (((((((((((()))))))))))) */}
            {/* <SectionNinth /> */}
            <OurLocation />
            {/* ******************** */}
            <Footer />
        </>
    )
}
