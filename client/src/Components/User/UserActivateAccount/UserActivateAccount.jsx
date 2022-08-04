import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import ActivateImg from '../../../Assets/Images/combos/combo2-dobles.png';
import { Link, useParams } from 'react-router-dom';
import { FcHighPriority, FcOk } from 'react-icons/fc';

import './UserActivateAccount.css';
import axios from 'axios';
import Swal from 'sweetalert2';

function UserActivateAccount() {
  const [mount, setMount] = useState(false);
  const [isSuccess, setSucess] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    if (!mount) {
      setMount(true);
    } else {
      const fetchData = async (id) => {
        try {
          await axios.put(`/activateAccount/${id}`);
          setSucess(true);
        } catch (error) {
            Swal.fire({
                customClass: {
                  confirmButton: 'confirmBtnSwal',
                },
                title: 'Opss...',
                text: typeof(error.response.data.error) !== "string" ? "Error al activar la cuenta!" : error.response.data.error,
                imageUrl:
                  'https://res.cloudinary.com/henrysburgers/image/upload/v1659301854/error-henrys_zoxhtl.png',
                imageWidth: 170,
                imageHeight: 170,
                imageAlt: 'Logo henrys',
              });
        }
      };
      fetchData(id);
    }
  }, [mount, id]);

  return (
    <>
      <Container>
        <div className="userActivate__container">
          <div>
            <h1>{isSuccess ? "¡Bienvenido!" : ""}</h1>
            <h2 className="userActivate__subtittle">
            {isSuccess ? <FcOk /> : <FcHighPriority /> }
              {isSuccess ? "Cuenta verificada con éxito" : " Error al activar la cuenta!"}
            </h2>
            <p>{isSuccess ? "Empezá a disfrutar de las más deliciosas hamburguesas" : ""}</p>
            
            <Button as={Link} to="/">
                {isSuccess ? "Iniciar la experiencia" : "Volver al menú"}
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
