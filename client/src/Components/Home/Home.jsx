import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import MainHome from '../MainHome/MainHome';
import ProductsContainerHome from '../ProductsContainerHome/ProductsContainerHome';
import Locals from '../Locals/Locals';
import CuponContainerHome from '../CuponContainerHome/CuponContainerHome';
import { setLoginState } from '../../Redux/actions/actions';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function Home() {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading } = useAuth0();


  useEffect(() => {

    const fetchData = async (payload) => {
        try {
        const json = await axios.post(`/google`, payload);
        if (json.status === 200) {
        window.localStorage.setItem(
            'user',
            JSON.stringify({ ...json.data.user, token: json.data.data.token })
        );
        dispatch(setLoginState(true));
        }
    } catch (error) {
        console.log(error);
        window.alert('Error al iniciar sesión');
    }
    }

    if (!isLoading && isAuthenticated && user && !window.localStorage.getItem('user')) {
        fetchData({
                firstName: user.family_name,
                email: user.email,
                lastName: user.given_name,
                imgUri: user.picture,
        });
    }
  
  }, [dispatch, isAuthenticated, user, isLoading])

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
