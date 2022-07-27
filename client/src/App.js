import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ContactoForm from './Components/ContactForm/ContactoForm';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import AddBurger from './Components/AddBurger/AddBurger';
import AboutUs from './Components/AboutUs/AboutUs';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import NotFound from './Components/NotFound/NotFound';

import './App.css';
import UserLogin from './Components/UserLogin/UserLogin';
import UserRegister from './Components/UserRegister/UserRegister';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="*" exact element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<ContactoForm />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/addBurger" element={<AddBurger />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/detalle/:id" element={<ProductDetail />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/registeruser" element={<UserRegister />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
