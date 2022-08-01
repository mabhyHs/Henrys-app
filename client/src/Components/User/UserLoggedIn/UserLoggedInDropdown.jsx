import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { BoxArrowLeft, Heart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import imgUserDefault from '../../../Assets/Images/logo-henrys.png';
import { setImgError } from '../../methods';

import './UserLoggedInDropdown.css';

function UserLoggedInDropdown({ userData, logoutSession }) {
  return (
    <Dropdown>
      <Dropdown.Toggle className="nav__btn" id="dropdown-basic">
        <img
          src={userData.imgUri ? userData.imgUri : "error"}
          onError={(e) => setImgError(e, imgUserDefault)}
          alt="img not found"
          className="loggedIn__img__profile"
        ></img>
        {userData.firstName ? userData.firstName : 'Usuario'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.ItemText className="dropdown__link-btn">
          <Link to="/userprofiledashboard" className="navBar__registrate">
            Mi perfil
          </Link>
        </Dropdown.ItemText>
        {userData.role === 'admin' && (
          <Dropdown.ItemText className="dropdown__link-btn">
            <Link to="/adminhome" className="navBar__registrate">
              Panel Admin
            </Link>
          </Dropdown.ItemText>
        )}

        <Link to="/userfavorites" className="loggedIn__Link">
          <Heart className="loggedIn__icons" />
          Favoritos
        </Link>
        <Dropdown.Divider />
        <Link onClick={logoutSession} to={false} className="loggedIn__Link">
          <BoxArrowLeft className="loggedIn__icons" /> Salir
        </Link>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default UserLoggedInDropdown;
