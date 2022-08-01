import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardCuponHome.css';
import hambCupon from '../../Assets/Images/Hamburguesas/whopper-doble.png';
import friesCupon from '../../Assets/Images/Hamburguesas/PAPAS-KING-copia.png';

function CardCupponHome() {
  return (
    <section className="sectionCupponsHome">
      <div className="cardCuponHome__cupon">
        <div className="cardCuponHome__containerImg">
          <img
            className="cardCuponHome__img img-fluid"
            src={hambCupon}
            alt="cupon de hamburguesa"
          />
        </div>
        <div className="cardCuponHome__text">
          <h2>CheckPoint Day</h2>
          <p>20%off</p>
          <Button
            onClick={() => {
              navigator.clipboard.writeText('RTTAS87');
              alert('Código copiado al portapapeles con éxito');
            }}
            variant="primary"
            className="cupponCardHome__cupponButton"
          >
            RTTAS87
          </Button>
        </div>
      </div>

      <div className="cardCuponHome__cupon">
        <div className="cardCuponHome__containerImg">
          <img
            src={friesCupon}
            alt="cupon de hamburguesa"
            className="cardCuponHome__img img-fluid"
          />
        </div>
        <div className="cardCuponHome__text">
          <h2>Fries Day</h2>
          <p>15%off</p>
          <Button
            onClick={() => {
              navigator.clipboard.writeText('XLXR567');
              alert('Código copiado al portapapeles con éxito');
            }}
            variant="primary"
            className="cupponCardHome__cupponButton"
          >
            XLXR567
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CardCupponHome;
