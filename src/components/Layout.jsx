import React from 'react'
import { Route, Routes } from 'react-router'
import Index from '../pages/Index'
import AboutPage from '../pages/AboutUs/AboutPage'

export default function Layout() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Index />} />
               <Route path='/aboutus' element={<AboutPage/>} />
            </Routes>
        </>
    )
}
