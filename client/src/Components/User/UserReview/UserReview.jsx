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

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(validate({ ...input, [e.target.name]: e.target.value }));
    console.log(input);
  }

  function validate(input) {
    let errors = {};
    if ((input.rating = 0)) {
      errors.rating = 'Debes ingresar una calificacion';
    }
    if (!input.description) {
      errors.description = 'Debes enviar un comentario';
    }
    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmited(true);
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
    setSubmited(false);
  }

  return (
    <Container className="userReview__mainContainer">
      <h2 className="userReview__mainTitle">
        Califica tu experiencia de compra
      </h2>
      <hr />
      <div className="userReview__reviewContainer mb-4">
        <div>{errors.rating && <p>{errors.rating}</p>}</div>
        <div className="userReview__starsContainer">
          <input
            className="userReview__starsContainer__input"
            id="radio1"
            type="radio"
            name="rating"
            value={5}
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
          <label className="userReview__starsContainer__star" htmlFor="radio5">
            ★
          </label>
        </div>
        <div>{errors.description && <p>{errors.description}</p>}</div>
        <div className="userReview__opinionContainer">
          <p>Deja tu sugerencia o comentario en el siguiente campo:</p>
          <textarea
            className="userReview__opinionContainer__textArea"
            placeholder="Escribe tu opinion"
            onChange={handleChange}
            value={input.description}
            name="description"
          ></textarea>
        </div>
        {/* {rating === 0 ? (
          <span>Por favor escoge una puntuacion</span>
        ) : (
          <div></div>
        )} */}
        <Button
          className="userReview__submitButton"
          disabled={
            Object.keys(errors).length > 0 || !input.description || isSubmited
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

// function enviarCalificacion(puntuacion, comentario, dispatch) {
//   dispatch(postReview({ puntuacion, comentario }));
// }
// function cambiarEstrellas(e, estrellas, setEstrellas) {
//   setEstrellas((estrellas = e.target.value));
// }
// function cambiarTexto(e, texto, setTexto) {
//   setTexto((texto = e.target.value));
// }
// function UserReview() {
//   const dispatch = useDispatch();
//   const [estrellas, setEstrellas] = useState(0);
//   const [texto, setTexto] = useState('');
//   const sesionInfo = useSelector((state) => state.loginState);
// const [errors, setErrors] = useState({});
// const [input, setInput] = useState({});
// const [isSubmited, setSubmited] = useState(false);

// function handleSubmit (e) {

//   e.preventDefault();
//   setSubmited(true);
//   dispatch(postReview(description, author, rating))
//   Swal.fire({
//               customClass: {
//                 confirmButton: 'confirmBtnSwal',
//               },
//               title: 'Opinion enviada',
//               text: 'Podras visualizarla en la seccion de opiniones',
//               imageUrl:
//                   'https://res.cloudinary.com/henrysburgers/image/upload/v1659301858/success-henrys_nlrgo0.png',
//               imageWidth: 150,
//               imageHeight: 150,
//               imageAlt: 'Logo henrys',
//             });
//   setInput("");
//         setSubmited(false);
// }

//   return (
//     <Container className="userReview__mainContainer">
//       <h2 className="userReview__mainTitle">
//         Califica tu experiencia de compra
//       </h2>
//       <hr />
//       <div className="userReview__reviewContainer mb-4">
//         <div className="userReview__starsContainer">
//           <input
//             className="userReview__starsContainer__input"
//             id="radio1"
//             type="radio"
//             name="estrellas"
//             value="5"
//             onChange={(e) => cambiarEstrellas(e, estrellas, setEstrellas)}
//           />
//           <label className="userReview__starsContainer__star" htmlFor="radio1">
//             ★
//           </label>
//           <input
//             className="userReview__starsContainer__input"
//             id="radio2"
//             type="radio"
//             name="estrellas"
//             value="4"
//             onChange={(e) => cambiarEstrellas(e, estrellas, setEstrellas)}
//           />
//           <label className="userReview__starsContainer__star" htmlFor="radio2">
//             ★
//           </label>
//           <input
//             className="userReview__starsContainer__input"
//             id="radio3"
//             type="radio"
//             name="estrellas"
//             value="3"
//             onChange={(e) => cambiarEstrellas(e, estrellas, setEstrellas)}
//           />
//           <label className="userReview__starsContainer__star" htmlFor="radio3">
//             ★
//           </label>
//           <input
//             className="userReview__starsContainer__input"
//             id="radio4"
//             type="radio"
//             name="estrellas"
//             value="2"
//             onChange={(e) => cambiarEstrellas(e, estrellas, setEstrellas)}
//           />
//           <label className="userReview__starsContainer__star" htmlFor="radio4">
//             ★
//           </label>
//           <input
//             className="userReview__starsContainer__input"
//             id="radio5"
//             type="radio"
//             name="estrellas"
//             value="1"
//             onChange={(e) => cambiarEstrellas(e, estrellas, setEstrellas)}
//           />
//           <label className="userReview__starsContainer__star" htmlFor="radio5">
//             ★
//           </label>
//         </div>
//         <div className="userReview__opinionContainer">
//           <p>Deja tu sugerencia o comentario en el siguiente campo:</p>
//           <textarea
//             className="userReview__opinionContainer__textArea"
//             placeholder="Escribe tu opinion"
//             onChange={(e) => cambiarTexto(e, texto, setTexto)}
//           ></textarea>
//         </div>
//         {estrellas === 0 ? (
//           <span>Por favor escoge una puntuacion</span>
//         ) : (
//           <div></div>
//         )}
//         <Button
//           className="userReview__submitButton"
//           disabled={estrellas === 0}
//           onClick={() => enviarCalificacion(estrellas, texto, dispatch)}
//         >
//           Enviar
//         </Button>
//       </div>
//     </Container>
//   );
// }
