import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Swal from 'sweetalert2';
import contactImg from '../../Assets/Images/Hamburguesas/Stacker-Triple.png';
import emailjs from '@emailjs/browser';

import './ContactForm.css';

function ContactoForm() {
  const form = useRef();
  // eslint-disable-next-line no-unused-vars
  const [done, setDone] = useState(false);
  const [error, setError] = useState({})
  const [input, setInput] = useState({})
  const navigate = useNavigate();

  function handleSubmit() {
    Swal.fire({
      icon: 'success',
      text: 'Mensaje enviado con éxito, en breve estaremos comunicándonos',
      showConfirmButton: false,
      timer: 2000,
    });
    navigate('/');
  }

  const sendEmail = (e) => {
    e.preventDefault();
    // eslint-disable-next-line import/no-named-as-default-member
    emailjs
      .sendForm(
        'service_xu5vfs3',
        'template_as17onx',
        form.current,
        '-zW9oJ2EERInnxlyT'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  function handleChange(e){
    setInput({...input, [e.target.name]: e.target.value})
    setError(validate({...input, [e.target.name]: e.target.value}))
  }
  function validate(input){
   let error = {}
   if(!input.user_surname){
    error.user_surname = 'este campo no debe quedar vacio'
   }
   if(!isNaN(input.user_surname) && input.user_surname.length > 0){
    error.user_surname = 'no es un apellido valido valido'
   }
   if(!input.user_name){
      error.user_name = 'este campo no debe quedar vacio'
   }
   if(!isNaN(input.user_name) && input.user_name.length > 0){
    error.user_name = 'no es un nombre valido'
   }
   // eslint-disable-next-line no-useless-escape
   if(!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(input.email))){
    error.email = 'este correo es invalido'
    
   }
   if(isNaN(input.telephone)){
      error.telephone = 'escribe un numero valido'
   }
   if(!input.message){
    error.message = 'por favor escribe el motivo de tu consulta'
   }

   return error
  }

  return (
    <div>
      <Container>
        <h2 className="pt-3">¡Nos encanta saber de vos!</h2>
        <Row className="contact__form__container">
          <Col lg={6} sm={12} className="p-5">
            <p className="contact__text__left">
              Compartí tus consultas, comentarios ó sugerencias a través del
              formulario y te responderemos a la brevedad
            </p>
            <form
              ref={form}
              onSubmit={(e) => {
                handleSubmit(e);
                sendEmail(e);
              }}
              action="#"
              id="contact_form"
            >
              <Row>
                <input
                  className="contactForm__input"
                  type="text"
                  placeholder="Nombre*"
                  name="user_name"
                  id="name_input"
                  required
                  onChange={(e) => handleChange(e)}
                />
                {error.user_name &&(
                  <p>{error.user_name}</p>
                )}
                <input
                  className="contactForm__input"
                  type="text"
                  placeholder="Apellido*"
                  name="user_surname"
                  id="surname_input"
                  required
                  onChange={(e) => handleChange(e)}
                />
                {error.user_surname &&(
                  <p>{error.user_surname}</p>
                )}
              </Row>
              <Row>
                <input
                  className="contactForm__input"
                  type="email"
                  placeholder="E-mail*"
                  name="email"
                  id="email_input"
                  required
                  onChange={(e) => handleChange(e)}
                />
                {error.email &&(
                  <p>{error.email}</p>
                )}
                <input
                  className="contactForm__input"
                  type="text"
                  placeholder="Telefono*"
                  name="telephone"
                  id="telephone_input"
                  required
                  onChange={(e) => handleChange(e)}
                />
                {error.telephone &&(
                  <p>{error.telephone}</p>
                )}
              </Row>
              <Row>
                <select
                  className="contactForm__input"
                  placeholder="Tipo de consulta"
                  name="subject"
                  id="subject_input"
                  required
                  onChange={(e) => handleChange(e)}
                >
                  <option value="default" hidden>
                    Tipo de consulta
                  </option>
                  <option value="1">Franquicias</option>
                  <option value="2">Consulta General</option>
                  <option value="3">Felicitaciones</option>
                  <option value="4">Reclamos</option>
                </select>
                  {!input.subject && (
                    <p>Por favor seleccione una opción</p>
                  )}
                <textarea
                  className="contactForm__input"
                  name="message"
                  placeholder="Me comunico por..."
                  id="message_input"
                  cols="20"
                  rows="3"
                  required
                  onChange={(e) => handleChange(e)}
                />
                {error.message &&(
                  <p>{error.message}</p>
                )}
              </Row>
              <Button
                type="submit"
                key="submit"
                value="submit"
                id="form_button"
                disabled={(Object.keys(error).length !== 0) || !input.subject}
              >
                Enviar
              </Button>
            </form>
          </Col>
          <Col sm={12} lg={5}>
            <img
              src={contactImg}
              alt="Imagen de una hamburguesa triple con bacon"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactoForm;