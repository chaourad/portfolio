import React from 'react'
import Header from './Header'
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Formations from "./Formations";
import Projets from "./Projets";
import Certification from "./Certification";
import Experiences from "./Experiences";

import { Footer } from './Footer';
import Accueil from './Accueil';
import Competences from './Competences';
function Navbar() {
  return (
    <div>
        <BrowserRouter>
    <div>
        <Header/>
    </div>
    <nav className='navbar navbar-expand-lg '>
    <ul className="navbar-nav mx-auto">
        <li className="nav-item"> <Link to="/" className="nav-link ">Accueil</Link></li>
        <li className="nav-item"> <Link to="/formations" className="nav-link ">Formations</Link></li> 
        <li className="nav-item"> <Link to="/compétences" className="nav-link ">Compétences</Link></li>             
        <li className="nav-item"> <Link to="/experiences" className="nav-link ">Expériences</Link></li>
        <li className="nav-item"> <Link to="/project" className="nav-link ">Projets</Link></li>
        <li className="nav-item"> <Link to="/certifications" className="nav-link ">Certifications</Link></li>

    </ul>
    </nav>
    <div>
        <Routes>
            <Route exact path="/" element={<Accueil/>}></Route>
            <Route path="/formations" element={<Formations />} />
            <Route path="/compétences" element={<Competences />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/project" element={<Projets />} />
            <Route path="/certifications" element={<Certification />} />
        </Routes>
    </div>

   

    </BrowserRouter>
    <Footer/>
    </div>
  )
}

export default Navbar