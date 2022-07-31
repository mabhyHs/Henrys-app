/* eslint-disable no-useless-computed-key */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import './SendNewsletter.css';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function SendNewsletter() {

    const [input, setInput] = useState({
        title: 'Tenemos novedades para vos!',
        description: '',
        btnTxt: 'VER MÁS'
    })

    function handleOnChange(e){
        setInput({...input, [e.target.name]: e.target.value});
    }

    async function onSubmit(e){
        e.preventDefault();

        try {            
            /* await axios.post("/newsletter/send", {...input}, {
                headers: {
                  "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSGVucnkiLCJpZCI6IjQ1YjcxZjQ3LWRhMzctNDUwZC05N2RkLTEyNDU4MmIxMTUxOCIsImlhdCI6MTY1OTMwMDg2OX0.oS91ftLNCVTbUh9yYB_1Kk9C0gScAEh4NT03aWoHO1M"
                }
              }); */

              axios({
                method: 'post',
                url: '....',
                params: {'HTTP_CONTENT_LANGUAGE': self.language},
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSGVucnkiLCJpZCI6IjQ1YjcxZjQ3LWRhMzctNDUwZC05N2RkLTEyNDU4MmIxMTUxOCIsImlhdCI6MTY1OTMwMDg2OX0.oS91ftLNCVTbUh9yYB_1Kk9C0gScAEh4NT03aWoHO1M"
              })

            Swal.fire({
                customClass: {
                  confirmButton: 'confirmBtnSwal',
                },
                title: 'Opss...',
                text: 'Email o contraseña inválida!',
                imageUrl:
                  'https://res.cloudinary.com/henrysburgers/image/upload/v1659288361/logo-henrys-20x20_ftnamq.png',
                imageWidth: 150,
                imageHeight: 150,
                imageAlt: 'Logo henrys',
              });
        } catch (error) {
            Swal.fire({
                customClass: {
                  confirmButton: 'confirmBtnSwal',
                },
                title: error,
                text: 'No se pudo enviar el newsletter!',
                imageUrl:
                  'https://res.cloudinary.com/henrysburgers/image/upload/v1659288361/logo-henrys-20x20_ftnamq.png',
                imageWidth: 150,
                imageHeight: 150,
                imageAlt: 'Logo henrys',
              });
        }

    }

  return (
    <div className="sendNewsletter__container mt-3">
      <h2 className="mb-3">Compartí las novedades</h2>
      <Container className="sendNewsletter__form">
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Título*</Form.Label>
            <Form.Control name="title" onChange={handleOnChange} value={input.title} type="text" placeholder="Ingrese el título" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción*</Form.Label>
            <Form.Control name="description" onChange={handleOnChange} value={input.description} type="text" placeholder="Ingrese la descripción" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Texto del Botón*</Form.Label>
            <Form.Control name="btnTxt" onChange={handleOnChange} value={input.btnTxt} type="text" placeholder="Texto del botón" />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={!input.title.length || !input.description.length || !input.btnTxt.length}>
            Enviar
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default SendNewsletter;
