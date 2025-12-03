import React from 'react'
import { Route, Routes } from 'react-router'
import Index from '../components/Index'
import AboutPage from '../components/AboutPage'
import Banner_Section from '../pages/News&Insight/Banner/Banner_Section'
import Services from './Services'

export default function Layout() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Index />} />
               <Route path='/aboutus' element={<AboutPage/>} />
               <Route path='/blog'  element={<Banner_Section />}/>
               <Route path='/services' element={<Services />} />
            </Routes>
        </>
    )
}
