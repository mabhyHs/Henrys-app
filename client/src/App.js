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

import UserLogin from './Components/User/UserLogin/UserLogin';
import UserRegister from './Components/User/UserRegister/UserRegister';
import UserFavorites from './Components/User/UserFavorites/UserFavorites';
import UserPersonalInfo from './Components/User/UserPersonalInfo/UserPersonalInfo';
import UserProfileDashboard from './Components/User/UserProfileDashboard/UserProfile';
import UserActivateAccount from './Components/User/UserActivateAccount/UserActivateAccount';
import UserReview from './Components/User/UserReview/UserReview';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';

import AdminDashboard from './Components/Admin/Dashboard/AdminDashboard';

import './App.css';

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
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/registeruser" element={<UserRegister />} />
        <Route path="/userfavorites" element={<UserFavorites />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/userpersonalinfo" element={<UserPersonalInfo />} />
        <Route
          path="/userprofiledashboard"
          element={<UserProfileDashboard />}
        />
        <Route path="/useractivateaccount" element={<UserActivateAccount />} />
        <Route path="/calificanos" element={<UserReview />} />
        {/* ADMIN ROUTES */}
        <Route path="/adminhome" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
