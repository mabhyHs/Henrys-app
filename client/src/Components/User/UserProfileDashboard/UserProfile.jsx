import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserProfile.css';
import { ArrowRightCircleFill, EmojiSunglasses } from 'react-bootstrap-icons';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function UserProfileDashboard(userName) {
  const [userImage, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'henryspf');
    setLoading(true);

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/henrysburgers/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );

    const file = await res.json();
    console.log(file.secure_url);
    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <section>
      <div className="mainTitle__profile">
        <h1>Mi perfil</h1>
      </div>

      <Card className="profile__mainCard">
        <div className="profile__mainCard__headerContainer">
          <Card.Header className="profile__mainCard__title">
            {userImage ? (
              <img
                src={userImage}
                alt="foto de perfil"
                className="profile__mainCard__userPicture"
              />
            ) : (
              <EmojiSunglasses className="profile__mainCard__userPicture" />
            )}
            <h2>Usuario</h2>
          </Card.Header>
        </div>
        <Card.Body className="profile__mainCard__body">
          {loading ? (
            <p className="profile__loader">Cargando...</p>
          ) : (
            <Form className="profile__form">
              <Form.Group className="mb-3">
                <Form.Label className="profile__form__label">
                  Personalizá tu imagen
                </Form.Label>
                <Form.Control
                  type="file"
                  name="file"
                  size="sm"
                  className="profile__form__input"
                  onChange={uploadImage}
                ></Form.Control>
              </Form.Group>
            </Form>
          )}
        </Card.Body>
      </Card>

      <div className="profile__cardsInfo__container">
        <Card className="profile__infoCard">
          <div className="profile__infoCard__headerContainer">
            <Card.Header className="profile__infoCard__title" as="h2">
              Mis Favoritos
            </Card.Header>
          </div>
          <Card.Body className="profile__infoCard__body">
            <Card.Text>
              Guardá tus productos favoritos para tenerlos siempre cerca.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="profile__infoCard__footer">
            <Link to="/userfavorites">
              <ArrowRightCircleFill className="profile__infoCard__arrow" />
            </Link>
          </Card.Footer>
        </Card>

        <Card className="profile__infoCard">
          <div className="profile__infoCard__headerContainer">
            <Card.Header className="profile__infoCard__title" as="h2">
              Mis Datos
            </Card.Header>
          </div>
          <Card.Body className="profile__infoCard__body">
            <Card.Text>
              Mantené tus datos siempre actualizados para una mejor experiencia.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="profile__infoCard__footer">
            <Link to="/userpersonalinfo">
              <ArrowRightCircleFill className="profile__infoCard__arrow" />
            </Link>
          </Card.Footer>
        </Card>

        <Card className="profile__infoCard">
          <div className="profile__infoCard__headerContainer">
            <Card.Header className="profile__infoCard__title" as="h2">
              Ayuda
            </Card.Header>
          </div>
          <Card.Body className="profile__infoCard__body">
            <Card.Text>Contactanos ante cualquier duda</Card.Text>
          </Card.Body>
          <Card.Footer className="profile__infoCard__footer">
            <Link to="/contacto">
              <ArrowRightCircleFill className="profile__infoCard__arrow" />
            </Link>
          </Card.Footer>
        </Card>
      </div>
    </section>
  );
}

export default UserProfileDashboard;
