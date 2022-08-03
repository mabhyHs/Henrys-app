import { React, useEffect } from 'react';
import { useSelector } from 'react-redux';

function MercadoPago() {
  const mercadopago = useSelector((state) => state.mercaDopago);

  useEffect(() => {
    if (mercadopago.id) {
      montarButtonMP(mercadopago.id);
    }
  }, [mercadopago]);

  const montarButtonMP = (id) => {
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

  return (
    <div>
      <h1>Tu pedido esta casi listo!!!</h1>
      <h2>Pulsa el siguiente boton para continuar</h2>
      <form id="MP" method="GET" />
    </div>
  );
}

export default MercadoPago;
