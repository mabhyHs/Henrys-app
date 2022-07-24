import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardCuponHome.css';
import hambCupon from '../../Assets/Images/Hamburguesas/whopper-doble.png';
import friesCupon from '../../Assets/Images/Hamburguesas/PAPAS-KING-copia.png';

function CardCupponHome() {
  return (
    <section className="sectionCupponsHome">
      <Card className="cupponCardHome">
        <Card.Img variant="top" src={hambCupon} className="card__img__top" />
        <Card.Body className="cupponCardHome__cardBody">
          <Card.Title>
            <h2>CheckPoint Day</h2>
          </Card.Title>
          <Card.Text>
            <h2>20%off</h2>
          </Card.Text>
          <Button variant="primary" className="cupponCardHome__cupponButton">
            RTTAS87
          </Button>
        </Card.Body>
      </Card>

      <Card className="cupponCardHome">
        <Card.Img variant="top" src={friesCupon} className="card__img__top" />
        <Card.Body className="cupponCardHome__cardBody">
          <Card.Title>
            <h2>Dia de fritas</h2>
          </Card.Title>
          <Card.Text>
            <h2>15%off</h2>
          </Card.Text>
          <Button variant="primary" className="cupponCardHome__cupponButton">
            XLXR567
          </Button>
        </Card.Body>
      </Card>
    </section>
  );
}

export default CardCupponHome;
