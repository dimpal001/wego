import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './WebPages/HomePage/HomePage'
import AboutPage from './WebPages/AboutUsPage/AboutPage'
import CareersPage from './WebPages/CareersPage/CareersPage'
import ContactUsPage from './WebPages/ContactUsPage/ContactUsPage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Error from './Components/Error'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about-us' element={<AboutPage />} />
          <Route path='/careers' element={<CareersPage />} />
          <Route path='/contact-us' element={<ContactUsPage />} />
          <Route path='/*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
