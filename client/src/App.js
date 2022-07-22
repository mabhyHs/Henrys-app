import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ContactoForm from './Components/ContactForm/ContactoForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/contacto" element={<ContactoForm />} />
      </Routes>
    </div>
  );
}

export default App;
