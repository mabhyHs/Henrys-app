import React from 'react';
import './Locals.css';

function Locals() {
  return (
    <section className="localesContainer">
      <div className="localesContainer__text">
        <div>
          <h2>Locales</h2>
          <p>Todos nuestros locales son únicos. ¡Conocelos!</p>
        </div>

        <div>
          <h2>Devoto</h2>
          <p>Gualeyguaychú 3895, C1419 CABA</p>
        </div>

        <div>
          <h2>Chascomús</h2>
          <p>Ruta 2km. 116,300, Chascomús, Provincia de Buenos Aires</p>
        </div>
      </div>

      <div>
        <iframe
          className="localesContainer__map"
          title="map"
          src="https://maps.google.com/maps?width=600&amp;height=200&amp;hl=es&amp;q=gualeyguaychu%203895+(Local)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          frameBorder="0"
        />
      </div>
    </section>
  );
}

export default Locals;
