import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs.jsx';
import {  Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Footer from './components/Footer.jsx';
import Description from './pages/Description.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';


function App() {
  return( 
    <>
    <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/aboutUs'  element={<AboutUs/>} />
        <Route path='/contactUs'  element={<ContactUs/>} />
        <Route path='/Description/'  element={<Description/>} />
      </Routes>
      <Footer/>
    </> 

  ) 
}

export default App;
