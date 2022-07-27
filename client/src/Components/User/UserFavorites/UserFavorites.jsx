import React from 'react';
import UserFavoritesCard from '../UserFavoritesCard/UserFavoritesCard';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import './UserFavorites.css';

function UserFavorites() {
  return (
    <div className="userFav__container">
      <h1 className="mt-5">Mis favoritos</h1>
      <UserFavoritesCard />
      <Button as={Link} to="/userprofiledashboard">
        Volver
      </Button>
    </div>
  );
}

export default UserFavorites;
