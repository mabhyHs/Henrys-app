import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import MainHome from '../MainHome/MainHome';
import ProductsContainerHome from '../ProductsContainerHome/ProductsContainerHome';
import Locals from '../Locals/Locals';
import CuponContainerHome from '../CuponContainerHome/CuponContainerHome';
import { authGoogle } from '../../Redux/actions/actions';
import { useDispatch } from 'react-redux';

function Home() {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();
  useEffect(() => {
    if (isAuthenticated && user && !window.localStorage.getItem('user')) {
      console.log(user);
      console.log(user.picture);
      dispatch(
        authGoogle({
          firstName: user.family_name,
          email: user.email,
          lastName: user.given_name,
          imgUri: user.picture,
        })
      );
    }
  }, [dispatch, user, isAuthenticated]);

  return (
    <div>
      <MainHome />
      <CuponContainerHome />
      <ProductsContainerHome />
      <Locals />
    </div>
  );
}

export default Home;
