import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserFavoritesCard from '../UserFavoritesCard/UserFavoritesCard';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import './UserFavorites.css';
import { addLocalAState } from '../../../Redux/actions/actions';

function UserFavorites() {
  const dispatch = useDispatch();
  const favoritos = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(addLocalAState(JSON.parse(localStorage.getItem('favoritos'))));
  }, [dispatch]);

  return (
    <div className="userFav__container">
      <h1 className="mt-5">Mis favoritos</h1>
      {favoritos?.map((item) => (
        <UserFavoritesCard
          id={item.id}
          imgUri={item.imgUri}
          name={item.name}
          ingredient={item.ingredient}
          key={item.id}
        />
      ))}
      <Button as={Link} to="/userprofiledashboard">
        Volver
      </Button>
    </div>
  );
}

export default UserFavorites;
