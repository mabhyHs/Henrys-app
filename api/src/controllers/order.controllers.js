const orderRepositories = require("../repositories/order.repositories");
const mercadopagoRepository = require("../repositories/mercadopago.repositories");
const { transporter } = require("../config/emailTransporter");

async function create(req, res, next) {
  try {
    const order = await orderRepositories.create(req.body.user.id, req.body);
    const receipt = await mercadopagoRepository.getPaymentById(
      req.body.purchaseId
    );

    await transporter.sendMail({
      from: '"Recibo de compra" <henrysBurger2022@gmail.com',
      to: req.body.user.email,
      subject: "Recibo de compra",
      html: `
      <html lang="en-US">
        <head>
          <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
          <title>Henry's Burger</title>
          <meta name="description" content="Henry's Burger" />
          <style type="text/css">
          /* -------------------------------------
          GLOBAL
          A very basic CSS reset
      ------------------------------------- */
      * {
          margin: 0;
          padding: 0;
          font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
          box-sizing: border-box;
          font-size: 14px;
      }
      
      img {
          max-width: 100%;
      }
      
      body {
          -webkit-font-smoothing: antialiased;
          -webkit-text-size-adjust: none;
          width: 100% !important;
          height: 100%;
          line-height: 1.6;
      }
      
      /* Let's make sure all tables have defaults */
      table td {
          vertical-align: top;
      }
      
      /* -------------------------------------
          BODY & CONTAINER
      ------------------------------------- */
      body {
          background-color: #f6f6f6;
      }
      
      .body-wrap {
          background-color: #f6f6f6;
          width: 100%;
      }
      
      .container {
          display: block !important;
          max-width: 600px !important;
          margin: 0 auto !important;
          /* makes it centered */
          clear: both !important;
      }
      
      .content {
          max-width: 600px;
          margin: 0 auto;
          display: block;
          padding: 20px;
      }
      
      /* -------------------------------------
          HEADER, FOOTER, MAIN
      ------------------------------------- */
      .main {
          background: #fff;
          border: 1px solid #e9e9e9;
          border-radius: 3px;
      }
      
      .content-wrap {
          padding: 20px;
      }
      
      .content-block {
          padding: 0 0 20px;
      }
      
      .header {
          width: 100%;
          margin-bottom: 20px;
      }
      
      .footer {
          width: 100%;
          clear: both;
          color: #999;
          padding: 20px;
      }
      .footer a {
          color: #999;
      }
      .footer p, .footer a, .footer unsubscribe, .footer td {
          font-size: 12px;
      }
      
      /* -------------------------------------
          TYPOGRAPHY
      ------------------------------------- */
      h1, h2, h3 {
          font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
          color: #000;
          margin: 40px 0 0;
          line-height: 1.2;
          font-weight: 400;
      }
      
      h1 {
          font-size: 32px;
          font-weight: 500;
      }
      
      h2 {
          font-size: 24px;
      }
      
      h3 {
          font-size: 18px;
      }
      
      h4 {
          font-size: 14px;
          font-weight: 600;
      }
      
      p, ul, ol {
          margin-bottom: 10px;
          font-weight: normal;
      }
      p li, ul li, ol li {
          margin-left: 5px;
          list-style-position: inside;
      }
      
      /* -------------------------------------
          LINKS & BUTTONS
      ------------------------------------- */
      a {
          color: #1ab394;
          text-decoration: underline;
      }
      
      .btn-primary {
          text-decoration: none;
          color: #FFF;
          background-color: #1ab394;
          border: solid #1ab394;
          border-width: 5px 10px;
          line-height: 2;
          font-weight: bold;
          text-align: center;
          cursor: pointer;
          display: inline-block;
          border-radius: 5px;
          text-transform: capitalize;
      }
      
      /* -------------------------------------
          OTHER STYLES THAT MIGHT BE USEFUL
      ------------------------------------- */
      .last {
          margin-bottom: 0;
      }
      
      .first {
          margin-top: 0;
      }
      
      .aligncenter {
          text-align: center;
      }
      
      .alignright {
          text-align: right;
      }
      
      .alignleft {
          text-align: left;
      }
      
      .clear {
          clear: both;
      }
      
      /* -------------------------------------
          ALERTS
          Change the class depending on warning email, good email or bad email
      ------------------------------------- */
      .alert {
          font-size: 16px;
          color: #fff;
          font-weight: 500;
          padding: 20px;
          text-align: center;
          border-radius: 3px 3px 0 0;
      }
      .alert a {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
      }
      .alert.alert-warning {
          background: #f8ac59;
      }
      .alert.alert-bad {
          background: #ed5565;
      }
      .alert.alert-good {
          background: #1ab394;
      }
      
      /* -------------------------------------
          INVOICE
          Styles for the billing table
      ------------------------------------- */
      .invoice {
          margin: 40px auto;
          text-align: left;
          width: 80%;
      }
      .invoice td {
          padding: 5px 0;
      }
      .invoice .invoice-items {
          width: 100%;
      }
      .invoice .invoice-items td {
          border-top: #eee 1px solid;
      }
      .invoice .invoice-items .total td {
          border-top: 2px solid #333;
          border-bottom: 2px solid #333;
          font-weight: 700;
      }
      
      /* -------------------------------------
          RESPONSIVE AND MOBILE FRIENDLY STYLES
      ------------------------------------- */
      @media only screen and (max-width: 640px) {
          h1, h2, h3, h4 {
              font-weight: 600 !important;
              margin: 20px 0 5px !important;
          }
      
          h1 {
              font-size: 22px !important;
          }
      
          h2 {
              font-size: 18px !important;
          }
      
          h3 {
              font-size: 16px !important;
          }
      
          .container {
              width: 100% !important;
          }
      
          .content, .content-wrap {
              padding: 10px !important;
          }
      
          .invoice {
              width: 100% !important;
          }
      }
          </style>
        </head>

        <body>
        <table class="body-wrap">
        <tbody><tr>
            <td></td>
            <td class="container" width="600">
                <div class="content">
                    <table class="main" width="100%" cellpadding="0" cellspacing="0">
                        <tbody><tr>
                            <td class="content-wrap aligncenter">
                                <table width="100%" cellpadding="0" cellspacing="0">
                                    <tbody><tr>
                                        <td class="content-block">
                                            <h2>Gracias por su compra</h2>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="content-block">
                                            <table class="invoice">
                                                <tbody><tr>
                                                    <td>${
                                                      req.body.user.lastName
                                                    }, ${req.body.user.name}<br>
                                                      <p>Invoice #${
                                                        req.body.purchaseId
                                                      }</p>
                                                      <p></br>${new Date()}</td></p>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table class="invoice-items" cellpadding="0" cellspacing="0">
                                                        ${receipt.additional_info.items.map(
                                                          (e) => ` <tbody><tr>
                                                          <td>${e.title} x${e.quantity}</td>
                                                          <td class="alignright">$ ${e.unit_price}</td>
                                                      </tr>`
                                                        )}
                                                            <tbody>
                                                            <tr class="total">
                                                                <td class="alignright" width="80%">Total</td>
                                                                <td class="alignright">$ ${
                                                                  receipt.transaction_amount
                                                                }</td>
                                                            </tr>
                                                        </tbody></table>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="content-block">
                                            <a href="${
                                              process.env.HOST
                                            }">View in browser</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="content-block">
                                            Company Inc. Gualeyguaychú 3895, C1419 CABA
                                        </td>
                                    </tr>
                                </tbody></table>
                            </td>
                        </tr>
                    </tbody></table>
                    <div class="footer">
                        <table width="100%">
                            <tbody><tr>
                                <td class="aligncenter content-block">Questions? Email <a href="mailto:">henrysburgers2022@gmail.com</a></td>
                            </tr>
                        </tbody></table>
                    </div></div>
            </td>
            <td></td>
        </tr>
    </tbody></table>
        </body>
      </html>
      `,
    });

    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
}

async function getAll(req, res, next) {
  try {
    const pag = parseInt(req.query.pag, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 20;
    const orders = await orderRepositories.getAll(pag, limit);
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
}

async function getByPurchaseId(req, res, next) {
  try {
    const { purchaseId } = req.params;
    const order = await orderRepositories.getByPurchaseId(purchaseId);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
}

async function changeStatus(req, res, next) {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const order = await orderRepositories.changeStatus(id, status);
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
}

async function getAllByUserId(req, res, next) {
  try {
    const userId = req.body.user.id;
    const orders = await orderRepositories.getAllByUserId(userId);
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  create,
  getAll,
  changeStatus,
  getAllByUserId,
  getByPurchaseId,
};
