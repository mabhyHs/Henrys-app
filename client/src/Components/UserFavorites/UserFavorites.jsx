import React from 'react';
import UserFavoritesCard from '../UserFavoritesCard/UserFavoritesCard';

import './UserFavorites.css';

function UserFavorites() {
  return (
    <div className="userFav__container">
      <h1 className="mt-5">Mis favoritos</h1>
      <UserFavoritesCard />
    </div>
  );
}

export default UserFavorites;
