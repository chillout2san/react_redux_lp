import { Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Work from '../src/pages/Work'
import {Footer} from './components/common/Footer'

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
