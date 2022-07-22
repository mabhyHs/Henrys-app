import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ContactoForm from './Components/ContactForm/ContactoForm';
import AddBurger from './Components/AddBurger/AddBurger';
import './App.css';
import MainHome from './Components/MainHome/MainHome';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<MainHome/>}/>
        <Route path="/contacto" element={<ContactoForm />} />
        <Route path='/addBurger' element={<AddBurger/>}/>
      </Routes>
    </div>
  );
}

export default App;
