import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserFavoritesCard from '../UserFavoritesCard/UserFavoritesCard';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { addLocalAState, getFavorites } from '../../../Redux/actions/actions';

import './UserFavorites.css';
import axios from 'axios';

function UserFavorites() {
  const dispatch = useDispatch();
  const favoritosId = useSelector((state) => state.favorites);

  useEffect(() => {
    if (JSON.parse(window.localStorage.getItem('user'))) {
      dispatch(
        getFavorites(JSON.parse(window.localStorage.getItem('user')).id)
      );
    }
  }, [dispatch]);

  return (
    <div className="userFav__container mb-5">
      <h1 className="mt-5">Mis favoritos</h1>
      {favoritosId?.map((id) => (
        <UserFavoritesCard id={id} key={id} favoritosId={favoritosId} />
      ))}
      <Button as={Link} to="/userprofiledashboard">
        Volver
      </Button>
    </div>
  );
}

export default UserFavorites;
