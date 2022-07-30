import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { BoxArrowLeft, Heart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import imgUserDefault from '../../../Assets/Images/carrousel/henrys.png';

import './UserLoggedInDropdown.css';

function UserLoggedInDropdown({ userData, logoutSession }) {
  return (
    <Dropdown>
      <Dropdown.Toggle className="nav__btn" id="dropdown-basic">
        <img
          src={userData.imgUri || imgUserDefault}
          alt="img not found"
          className="loggedIn__img__profile"
        ></img>
        {userData.firstName || 'Usuario'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.ItemText className="dropdown__link-btn">
          <Link to="/userprofiledashboard" className="navBar__registrate">
            Mi perfil
          </Link>
        </Dropdown.ItemText>
        <Link to="/userfavorites" className="loggedIn__Link">
          <Heart className="loggedIn__icons" />
          Favoritos
        </Link>
        <Dropdown.Divider />

        <Link to="" onClick={logoutSession} className="loggedIn__Link">
          <BoxArrowLeft className="loggedIn__icons" /> Salir
        </Link>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default UserLoggedInDropdown;
