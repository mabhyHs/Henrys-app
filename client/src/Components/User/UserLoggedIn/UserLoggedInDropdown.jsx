import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { PersonCircle, BoxArrowLeft, Heart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

import './UserLoggedInDropdown.css';

function UserLoggedInDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle className="nav__btn" id="dropdown-basic">
        <PersonCircle className="m-1" />
        User Name
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

        <Link to="/logout" className="loggedIn__Link">
          <BoxArrowLeft className="loggedIn__icons" /> Salir
        </Link>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default UserLoggedInDropdown;
