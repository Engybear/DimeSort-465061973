import Home from './pages/Home'
import CS100 from './pages/CS-100'
import CS200 from './pages/CS-200'
import Contact from './pages/Contact'
import Questionnaire from './pages/Questionnaire'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'

import './css/App.css'

function App() {

  return (
    <>
      <NavBar />

      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ds100" element={<CS100 />} />
          <Route path="/ds200" element={<CS200 />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      <Footer />
    </>
  );
}

export default App
