/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { agregarCalificacion } from '../../../Redux/actions/actions';
import { useDispatch } from 'react-redux';

import './UserReview.css';

function enviarCalificacion(puntuacion, comentario, dispatch) {
  dispatch(agregarCalificacion({ puntuacion, comentario }));
}
function cambiarEstrellas(e, estrellas, setEstrellas) {
  setEstrellas((estrellas = e.target.value));
}
function cambiarTexto(e, texto, setTexto) {
  setTexto((texto = e.target.value));
}
function UserReview() {
  const dispatch = useDispatch();
  const [estrellas, setEstrellas] = useState(0);
  const [texto, setTexto] = useState('');
  return (
    <div className="userReview__mainContainer">
      <h2 className="userReview__mainTitle">
        Califica tu experiencia de compra
      </h2>
      <br></br>
      <div className="userReview__starsContainer">
        <input
          className="userReview__starsContainer__input"
          id="radio1"
          type="radio"
          name="estrellas"
          value="5"
          onChange={(e) => cambiarEstrellas(e, estrellas, setEstrellas)}
        />
        <label className="userReview__starsContainer__star" htmlFor="radio1">
          ★
        </label>
        <input
          className="userReview__starsContainer__input"
          id="radio2"
          type="radio"
          name="estrellas"
          value="4"
          onChange={(e) => cambiarEstrellas(e, estrellas, setEstrellas)}
        />
        <label className="userReview__starsContainer__star" htmlFor="radio2">
          ★
        </label>
        <input
          className="userReview__starsContainer__input"
          id="radio3"
          type="radio"
          name="estrellas"
          value="3"
          onChange={(e) => cambiarEstrellas(e, estrellas, setEstrellas)}
        />
        <label className="userReview__starsContainer__star" htmlFor="radio3">
          ★
        </label>
        <input
          className="userReview__starsContainer__input"
          id="radio4"
          type="radio"
          name="estrellas"
          value="2"
          onChange={(e) => cambiarEstrellas(e, estrellas, setEstrellas)}
        />
        <label className="userReview__starsContainer__star" htmlFor="radio4">
          ★
        </label>
        <input
          className="userReview__starsContainer__input"
          id="radio5"
          type="radio"
          name="estrellas"
          value="1"
          onChange={(e) => cambiarEstrellas(e, estrellas, setEstrellas)}
        />
        <label className="userReview__starsContainer__star" htmlFor="radio5">
          ★
        </label>
      </div>
      <div className="userReview__opinionContainer">
        <h4 className="userReview__opinionContainer__title">
          Deja tu sugerencia o comentario en el siguiente campo
        </h4>
        <textarea
          className="userReview__opinionContainer__textArea"
          placeholder="Escribe tu opinion"
          rows={5}
          cols={60}
          onChange={(e) => cambiarTexto(e, texto, setTexto)}
        ></textarea>
      </div>

      {estrellas === 0 ? (
        <span>Por favor escoge una puntuacion</span>
      ) : (
        <div></div>
      )}
      <button
        className="userReview__submitButton"
        disabled={estrellas === 0}
        onClick={() => enviarCalificacion(estrellas, texto, dispatch)}
      >
        Enviar
      </button>
    </div>
  );
}

export default UserReview;
