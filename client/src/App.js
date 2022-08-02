import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ContactoForm from './Components/ContactForm/ContactoForm';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import AddBurger from './Components/AddBurger/AddBurger';
import AboutUs from './Components/AboutUs/AboutUs';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import NotFound from './Components/NotFound/NotFound';

import UserLogin from './Components/User/UserLogin/UserLogin';
import UserRegister from './Components/User/UserRegister/UserRegister';
import UserFavorites from './Components/User/UserFavorites/UserFavorites';
import UserPersonalInfo from './Components/User/UserPersonalInfo/UserPersonalInfo';
import UserProfileDashboard from './Components/User/UserProfileDashboard/UserProfile';
import UserActivateAccount from './Components/User/UserActivateAccount/UserActivateAccount';
import UserReview from './Components/User/UserReview/UserReview';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';

import AdminDashboard from './Components/Admin/Dashboard/AdminDashboard';
import SendNewsletter from './Components/Admin/SendNewsletter/SendNewsletter';

import './App.css';
import { isLogged, isLoggedAdmin } from './Components/methods';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>

        {/* APP ROUTES */}
        <Route path="*" exact element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<ContactoForm />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/addBurger" element={<AddBurger />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/detalle/:id" element={<ProductDetail />} />

        {/* USER ROUTES */}
        <Route path="/userlogin" element={isLogged() ? <Navigate to="/" /> : <UserLogin />} />
        <Route path="/registeruser" element={isLogged() ? <UserRegister /> : <Navigate to="/" />} />
        <Route path="/userfavorites" element={isLogged() ? <UserFavorites /> : <Navigate to="/" />} />
        <Route path="/userpersonalinfo" element={isLogged() ? <UserPersonalInfo /> : <Navigate to="/" />} />
        <Route path="/userprofiledashboard" element={isLogged() ? <UserProfileDashboard /> : <Navigate to="/" />} />
        <Route path="/calificanos" element={isLogged() ? <UserReview /> : <Navigate to="/" />} />
        <Route path="/activateAcount/:id" element={isLogged() ? <Navigate to="/" /> : <UserActivateAccount />} />
        <Route path="/cart" element={<ShoppingCart />} />

        {/* ADMIN ROUTES */}
        <Route path="/adminhome" element={isLoggedAdmin() ? <AdminDashboard /> : <Navigate to="/" />} />
        <Route path="/newsletter" element={isLoggedAdmin() ? <SendNewsletter /> : <Navigate to="/" />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
