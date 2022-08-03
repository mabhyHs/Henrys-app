import { React, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function MercadoPago() {
  const id = JSON.parse(window.localStorage.getItem("compra"))?.id;

  useEffect(() => {
      montarButtonMP(id);
  }, [id]);

  const montarButtonMP = (id) => {
    if(!id){
        return;
    }
    const formChilds = document.getElementById('MP').childNodes;
    if (id && formChilds.length === 0) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src =
        'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
      script.setAttribute('data-preference-id', id);
      const form = document.getElementById('MP');
      form.appendChild(script);
    }
  };

  if(!id){
    return <Navigate to="/" ></Navigate>
  }

  return (
    <div>
      <h1>Tu pedido esta casi listo!!!</h1>
      <h2>Pulsa el siguiente boton para continuar</h2>
      <form id="MP" method="GET" />
    </div>
  );
}

export default MercadoPago;
