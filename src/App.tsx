import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Work from '../src/pages/Work'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
    </Routes>
  )
}

export default App
