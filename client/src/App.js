import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ContactoForm from './Components/ContactForm/ContactoForm';
import AboutUs from './Components/AboutUs/AboutUs';

import './App.css';
import MainHome from './Components/MainHome/MainHome';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainHome />
      <Routes>
        <Route path="/contacto" element={<ContactoForm />} />
        <Route path="/nosotros" elemente={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
