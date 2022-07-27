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
import UserLogin from './Components/UserLogin/UserLogin';
import UserRegister from './Components/UserRegister/UserRegister';
import UserFavorites from './Components/UserFavorites/UserFavorites';
import UserPersonalInfo from './Components/UserPersonalInfo/UserPersonalInfo';
import UserProfileDashboard from './Components/UserProfileDashboard/UserProfile';

import './App.css';

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
        <Route path="/detalle" element={<ProductDetail />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/registeruser" element={<UserRegister />} />
        <Route path="/userfavorites" element={<UserFavorites />} />
        <Route path="/userpersonalinfo" element={<UserPersonalInfo />} />
        <Route
          path="/userprofiledashboard"
          element={<UserProfileDashboard />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
