import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserFavoritesCard from '../UserFavoritesCard/UserFavoritesCard';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { getFavorites } from '../../../Redux/actions/actions';

import './UserFavorites.css';
import Loading from '../../Loading/Loading';

function UserFavorites() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const favoritosId = useSelector((state) => state.favorites);

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem('user'));
    if (user) {
      setLoading(true);
      dispatch(getFavorites(user.id, setLoading));
    }
  }, [dispatch]);

  return (
    <div className="userFav__container mb-5">
      <h1 className="mt-5">Mis favoritos</h1>
      {loading ? (
        <Loading />
      ) : (
        favoritosId?.map((id) => (
          <UserFavoritesCard id={id} key={id} favoritosId={favoritosId} />
        ))
      )}
      <Button as={Link} to="/userprofiledashboard">
        Volver
      </Button>
    </div>
  );
}

export default UserFavorites;
