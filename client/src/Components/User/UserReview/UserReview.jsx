/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postReview } from '../../../Redux/actions/actions';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import './UserReview.css';

function UserReview() {
  const dispatch = useDispatch();
  const sesionInfo = useSelector((state) => state.loginState);
  const [errors, setErrors] = useState({});
  const [isSubmited, setSubmited] = useState(false);

  const [input, setInput] = useState({
    rating: 0,
    description: '',
    author: sesionInfo.firstName + ' ' + sesionInfo.lastName,
    user_id: sesionInfo.id,
  });

  const handleChange = (e) => {
    let inputUpdated = {
      ...input,
      [e.target.name]: e.target.value,
    };
    setInput(inputUpdated);
    setErrors(validate({ ...input, [e.target.name]: e.target.value }));
  };

  function validate(input) {
    let errors = {};
    if (input.rating === 0) {
      errors.rating = 'Debes ingresar una calificacion';
    }
    if (!input.description) {
      errors.description = 'Debes enviar un comentario';
    } else if (!/^[\s\S]{5,500}$/i.test(input.description)) {
      errors.description = 'Tu comentario debe tener entre 5 y 500 caracteres';
    }
    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(postReview(input));
    Swal.fire({
      customClass: {
        confirmButton: 'confirmBtnSwal',
      },
      title: 'Opinion enviada',
      text: 'Podras visualizarla en la seccion de opiniones',
      imageUrl:
        'https://res.cloudinary.com/henrysburgers/image/upload/v1659301858/success-henrys_nlrgo0.png',
      imageWidth: 150,
      imageHeight: 150,
      imageAlt: 'Logo henrys',
    });
    setInput({ rating: 0, description: '' });
    setSubmited(true);
  }

  return (
    <Container className="userReview__mainContainer">
      <h2 className="userReview__mainTitle">
        Califica tu experiencia de compra
      </h2>
      <hr />
      <div className="userReview__reviewContainer mb-4">
        <div>
          {errors.rating && (
            <p className="userReview__error">{errors.rating}</p>
          )}
        </div>
        <div className="userReview__starsContainer">
          <input
            className="userReview__starsContainer__input"
            id="radio1"
            type="radio"
            name="rating"
            value={5}
            onChange={(e) => handleChange(e)}
          />
          <label className="userReview__starsContainer__star" htmlFor="radio1">
            ★
          </label>
          <input
            className="userReview__starsContainer__input"
            id="radio2"
            type="radio"
            name="rating"
            value={4}
            onChange={(e) => handleChange(e)}
          />
          <label className="userReview__starsContainer__star" htmlFor="radio2">
            ★
          </label>
          <input
            className="userReview__starsContainer__input"
            id="radio3"
            type="radio"
            name="rating"
            value={3}
            onChange={(e) => handleChange(e)}
          />
          <label className="userReview__starsContainer__star" htmlFor="radio3">
            ★
          </label>
          <input
            className="userReview__starsContainer__input"
            id="radio4"
            type="radio"
            name="rating"
            value={2}
            onChange={(e) => handleChange(e)}
          />
          <label className="userReview__starsContainer__star" htmlFor="radio4">
            ★
          </label>
          <input
            className="userReview__starsContainer__input"
            id="radio5"
            type="radio"
            name="rating"
            value={1}
            onChange={(e) => handleChange(e)}
          />
          <label className="userReview__starsContainer__star" htmlFor="radio5">
            ★
          </label>
        </div>

        <div className="userReview__opinionContainer">
          <p>Deja tu sugerencia o comentario en el siguiente campo:</p>
          <div>
            {errors.description && (
              <p className="userReview__error">{errors.description}</p>
            )}
          </div>
          <textarea
            className="userReview__opinionContainer__textArea"
            placeholder="Escribe tu opinion"
            onChange={(e) => handleChange(e)}
            value={input.description}
            name="description"
          ></textarea>
        </div>
        <Button
          className="userReview__submitButton"
          disabled={
            Object.keys(errors).length > 0 ||
            !input.description ||
            isSubmited ||
            input.rating === 0
          }
          onClick={(e) => handleSubmit(e)}
        >
          Enviar
        </Button>
      </div>
    </Container>
  );
}

export default UserReview;
