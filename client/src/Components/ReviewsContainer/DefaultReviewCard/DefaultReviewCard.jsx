import React from 'react';
import Card from 'react-bootstrap/Card';
import './DefaultReviewcard.css';

function DefaultReviewCard() {
  return (
    <div>
      <Card className="defaultreviews__mainCardAlternative">
        <div className="defaultreviews__mainCard__headerContainer">
          <Card.Header className="defaultreviews__mainCard__title">
            <h2>
              5 <span>★</span>{' '}
            </h2>
          </Card.Header>
        </div>
        <Card.Body className="defaultreviews__mainCard__body">
          <Card.Text>
            Excelente servicio y productos!!! La comida ríquisima y llegó muy
            rápido. Además, la página es muy sencilla y expeditiva en su uso.
            Vovlería a pedir Excelente servicio y productos!!! La comida
            ríquisima y llegó muy rápido. Además, la página es muy sencilla y
            expeditiva en su uso. Vovlería a pedir Excelente servicio y
            productos!!! La comida ríquisima y llegó muy rápido. Además, la
            página es muy sencilla y expeditiva en su uso. Vovlería a pedir
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            consectetur aperiam quae minus voluptatem illo labore adipisci quo.
            Vel eos hic ipsam cumque eligendi deserunt accusamus doloribus sit
            facilis odit.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer
          className="defaultreviews__mainCard__footer"
          style={{ borderRadius: '18px' }}
        >
          Washington Gutierrez
        </Card.Footer>
      </Card>
    </div>
  );
}

export default DefaultReviewCard;
