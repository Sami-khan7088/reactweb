import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes, Navigate } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Service from './Service';
import Nav from './Nav';
import Footer from './Footer';
// import Error from './Error';
function A() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      {/* <Route path='*' element={<Error/>}/> */}
      <Route path="*" element={<Navigate to="/" replace />}/>
    </Routes>
    <Footer/>
    </>
  )
}
export default A;