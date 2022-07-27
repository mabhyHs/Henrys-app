import React from 'react';
// import { Link } from "react-router-dom";
import './UserProfile.css';
import { ArrowRightCircleFill, EmojiSunglasses } from 'react-bootstrap-icons';
import Card from 'react-bootstrap/Card';

function UserProfileDashboard(userName, userPicture) {
  const hasUserPicture = false;

  return (
    <section>
      <div className="mainTitle__profile">
        <h1>Mi perfil</h1>
      </div>

      <Card className="profile__mainCard">
        <div className="profile__mainCard__headerContainer">
          <Card.Header className="profile__mainCard__title">
            {hasUserPicture ? (
              <img
                src={userPicture}
                alt="foto de perfil"
                className="profile__mainCard__userPicture"
              />
            ) : (
              <EmojiSunglasses className="profile__mainCard__userPicture" />
            )}
            <h2>Usuario</h2>
          </Card.Header>
        </div>
        <Card.Body className="profile__mainCard__body"></Card.Body>
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
            <Card.Link to="/">
              <ArrowRightCircleFill className="profile__infoCard__arrow" />
            </Card.Link>
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
            <Card.Link to="/">
              <ArrowRightCircleFill className="profile__infoCard__arrow" />
            </Card.Link>
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
            <Card.Link to="/">
              <ArrowRightCircleFill className="profile__infoCard__arrow" />
            </Card.Link>
          </Card.Footer>
        </Card>
      </div>
    </section>
  );
}

export default UserProfileDashboard;
