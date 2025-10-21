import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dtipage01 from './pages/Dtipage01.jsx'
import Dtipage02 from './pages/Dtipage02.jsx'
import Notfound from './pages/Notfound.jsx'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dtipage01 />} />
          <Route path='/page02' element={<Dtipage02 />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}
