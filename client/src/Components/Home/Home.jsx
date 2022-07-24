import React from 'react';
import MainHome from '../MainHome/MainHome';
import ProductsContainerHome from '../ProductsContainerHome/ProductsContainerHome';
import Locals from '../Locals/Locals';
import CuponContainerHome from '../CuponContainerHome/CuponContainerHome';

function Home() {
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
