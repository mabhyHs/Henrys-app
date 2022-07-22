import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ContactoForm from './Components/ContactForm/ContactoForm';
import Footer from './Components/Footer/Footer';

import './App.css';
import MainHome from './Components/MainHome/MainHome';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainHome />
      <Routes>
        <Route path="/contacto" element={<ContactoForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
