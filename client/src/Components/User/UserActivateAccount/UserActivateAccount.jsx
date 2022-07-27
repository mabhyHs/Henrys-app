import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import ActivateImg from '../../../Assets/Images/combos/combo2-dobles.png';
import { Link } from 'react-router-dom';
import { FcOk } from 'react-icons/fc';

import './UserActivateAccount.css';

function UserActivateAccount() {
  return (
    <>
      <Container>
        <div className="userActivate__container">
          <div>
            <h1>¡Bienvenido!</h1>
            <h2 className="userActivate__subtittle">
              <FcOk />
              Cuenta verificada con éxito
            </h2>
            <p>Empezá a disfrutar de las más deliciosas hamburguesas</p>
            <Button as={Link} to="/">
              Iniciar la experiencia
            </Button>
          </div>
          <img
            src={ActivateImg}
            alt="foto de un combo de dos hamburguesas"
            className="img-fluid userActivate__img"
          />
        </div>
      </Container>
    </>
  );
}

export default UserActivateAccount;
