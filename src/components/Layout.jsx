import React from 'react'
import { Route, Routes } from 'react-router'
import Index from '../pages/Index'

export default function Layout() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Index />} />
                {/* <Route path='' element={ } />
                <Route path='' element={ } />
                <Route path='' element={ } />
                <Route path='' element={ } /> */}
            </Routes>
        </>
    )
}
