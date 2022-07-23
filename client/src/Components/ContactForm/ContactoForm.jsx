import React, { useState, useRef } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

import './ContactForm.css';

function ContactoForm() {
  const form = useRef();
  // eslint-disable-next-line no-unused-vars
  const [done, setDone] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h2 className="pt-3">¡Nos encanta saber de vos!</h2>
      <Row className="contact__form__container">
        <Col lg={6} sm={12}>
          <p>
            Compartí tus consultas, comentarios ó sugerencias a través del
            formulario y te responderemos a la brevedad
          </p>
          <form
            ref={form}
            onSubmit={handleSubmit}
            action="#"
            id="contact_form"
            className="m-5"
          >
            <Row>
              <input
                className="contactForm__input"
                type="text"
                placeholder="Nombre*"
                name="name"
                id="name_input"
                required
              />

              <input
                className="contactForm__input"
                type="text"
                placeholder="Apellido*"
                name="name"
                id="surname_input"
                required
              />
            </Row>
            <Row>
              <input
                className="contactForm__input"
                type="email"
                placeholder="E-mail*"
                name="email"
                id="email_input"
                required
              />

              <input
                className="contactForm__input"
                type="text"
                placeholder="Telefono*"
                name="telephone"
                id="telephone_input"
                required
              />
            </Row>
            <Row>
              <select
                className="contactForm__input"
                placeholder="Tipo de consulta"
                name="subject"
                id="subject_input"
                required
              >
                <option value="default" hidden>
                  Tipo de consulta
                </option>
                <option value="1">Franquicias</option>
                <option value="2">Consulta General</option>
                <option value="3">Felicitaciones</option>
                <option value="4">Reclamos</option>
              </select>

              <textarea
                className="contactForm__input"
                name="message"
                placeholder="Me comunico por..."
                id="message_input"
                cols="20"
                rows="3"
                required
              />
            </Row>
            <Button type="submit" key="submit" value="submit" id="form_button">
              Enviar
            </Button>
            {done &&
              Swal.fire({
                text: 'Gracias por comunicarte, en breve nos contactaremos!',
                imageUrl: '../../Assets/Images/logo-henrys300px.png',
                imageWidth: 300,
                imageHeight: 100,
                imageAlt: 'logo henrys',
              })}
          </form>
        </Col>
        <Col sm={12} lg={5}>
          <div className="contactForm__img" />
        </Col>
      </Row>
    </div>
  );
}

export default ContactoForm;
