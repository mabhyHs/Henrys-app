import React, { useState, useRef } from 'react';
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
      <h3>
        Compartí tus consultas, comentarios o sugerencias a través del
        formulario y te responderemos a la brevedad
      </h3>

      <form ref={form} onSubmit={handleSubmit} action="#" id="contact_form">
        <div>
          <input
            type="text"
            placeholder="Nombre*"
            name="name"
            id="name_input"
            required
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Apellido*"
            name="name"
            id="surname_input"
            required
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="E-mail*"
            name="email"
            id="email_input"
            required
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Telefono*"
            name="telephone"
            id="telephone_input"
            required
          />
        </div>

        <div>
          <select
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
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Me comunico por..."
            id="message_input"
            cols="20"
            rows="3"
            required
          />
        </div>

        <div>
          <button type="submit" key="submit" value="submit" id="form_button">
            Enviar
          </button>
          {done && <h3>Gracias, en breve nos contactaremos!</h3>}
        </div>
      </form>
    </div>
  );
}

export default ContactoForm;
