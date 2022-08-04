import React from 'react';
import Card from 'react-bootstrap/Card';
import './ReviewCard.css';

function ReviewCard({ author, description, rating }) {
  return (
    <div>
      <Card className="reviews__mainCard">
        <div className="reviews__mainCard__headerContainer">
          <Card.Header className="reviews__mainCard__title">
            <h2>{rating} ★</h2>
          </Card.Header>
        </div>
        <Card.Body className="reviews__mainCard__body">
          <blockquote className="blockquote mb-0">
            <p>{description}</p>
          </blockquote>
          <footer className="blockquote-footer">{author}</footer>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ReviewCard;
