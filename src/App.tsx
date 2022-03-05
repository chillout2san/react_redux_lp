import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Work from '../src/pages/Work'
import styled from 'styled-components'

const Footer = styled.footer`
  margin: 0 auto;
  width: 1200px;
  height: 64px;
  background: #515151;
`

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
