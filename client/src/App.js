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
import MercadoPago from './Components/ShoppingCart/mercadoPago/MercadoPago';
import AddProductHome from './Components/Admin/AddProduct/ProductHome/AddProductHome';
import ReviewsContainer from './Components/ReviewsContainer/ReviewsContainer';
import AdminUsers from './Components/Admin/AdminUsers/AdminUsers';
import CreateOrEditBurger from './Components/Admin/AddProduct/AddProductViews/CreateOrEditBurger/CreateOrEditBurger';
import CreateOrEditBurgerBase from './Components/Admin/AddProduct/AddProductViews/CreateOrEditBurgerBase/CreateOrEditBurgerBase';
import CreateOrEditBeverage from './Components/Admin/AddProduct/AddProductViews/CreateOrEditBeverage/CreateOrEditBeverage';
import CreateOrEditCombo from './Components/Admin/AddProduct/AddProductViews/CreateOrEditCombo/CreateOrEditCombo';
import CreateOrEditFries from './Components/Admin/AddProduct/AddProductViews/CreateOrEditFries/CreateOrEditFries';
import EditProducts from './Components/Admin/AddProduct/EditProducts/EditProducts';

function App() {
  const isSession = isLogged();
  const isSessionAdmin = isLoggedAdmin();

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
        <Route path="/quedicendenosotros" element={<ReviewsContainer />} />

        {/* USER ROUTES */}
        <Route
          path="/userlogin"
          element={isSession ? <Navigate to="/" /> : <UserLogin />}
        />
        <Route
          path="/registeruser"
          element={isSession ? <Navigate to="/" /> : <UserRegister />}
        />
        <Route
          path="/userfavorites"
          element={isSession ? <UserFavorites /> : <Navigate to="/" />}
        />
        <Route
          path="/userpersonalinfo"
          element={isSession ? <UserPersonalInfo /> : <Navigate to="/" />}
        />
        <Route
          path="/userprofiledashboard"
          element={isSession ? <UserProfileDashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/calificanos"
          element={isSession ? <UserReview /> : <Navigate to="/" />}
        />
        <Route
          path="/activateAcount/:id"
          element={isSession ? <Navigate to="/" /> : <UserActivateAccount />}
        />
        <Route path="/cart" element={<ShoppingCart />} />

        <Route
          path="/mercadoPago"
          element={isSession ? <MercadoPago /> : <Navigate to="/" />}
        />

        {/* ADMIN ROUTES */}
        <Route
          path="/adminhome"
          element={isSessionAdmin ? <AdminDashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/adminnewsletter"
          element={isSessionAdmin ? <SendNewsletter /> : <Navigate to="/" />}
        />

        <Route
          path="/adminproducts"
          element={isSessionAdmin ? <AddProductHome /> : <Navigate to="/" />}
        />
        <Route
          path="/adminusers"
          element={isSessionAdmin ? <AdminUsers /> : <Navigate to="/" />}
        />

        <Route
          path="/admineditburgerbase"
          element={
            isSessionAdmin ? <CreateOrEditBurgerBase /> : <Navigate to="/" />
          }
        />

        <Route
          path="/admineditburger"
          element={
            isSessionAdmin ? <CreateOrEditBurger /> : <Navigate to="/" />
          }
        />

        <Route
          path="/admineditbeverage"
          element={
            isSessionAdmin ? <CreateOrEditBeverage /> : <Navigate to="/" />
          }
        />
        <Route
          path="/admineditcombo"
          element={isSessionAdmin ? <CreateOrEditCombo /> : <Navigate to="/" />}
        />
        <Route
          path="/admineditfries"
          element={isSessionAdmin ? <CreateOrEditFries /> : <Navigate to="/" />}
        />
        <Route
          path="/admineditproducts/:id"
          element={isSessionAdmin ? <EditProducts /> : <Navigate to="/" />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
