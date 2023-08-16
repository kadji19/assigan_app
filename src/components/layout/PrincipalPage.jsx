import React from 'react'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Header from './Header'
import Accueil from '../pages/Accueil/Accueil';
import Footer from './Footer';
import Guide from '../pages/Guide/Guide';
import Contact from '../pages/Contact/Contact';

function PrincipalPage() {
  return (
    <div>
        <Header />
        <Routes>
            <Route path="/" element={ <Accueil/> } />
            <Route path="/guide" element={ <Guide/> } />
            <Route path="/contact" element={ <Contact/> } />
        </Routes>
        <Footer />

        
    </div>
  )
}

export default PrincipalPage