const orderRepositories = require("../repositories/order.repositories");
const mercadopagoRepository = require("../repositories/mercadopago.repositories");
const { transporter } = require("../config/emailTransporter");

async function create(req, res, next) {
  try {
    const order = await orderRepositories.create(req.body.user.id, req.body);
    console.log(req.body.purchaseId);
    const receipt = await mercadopagoRepository.getPaymentById(
      req.body.purchaseId
    );
    console.log(receipt);
    console.log(req.body.user.email);

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
            a:hover {
              text-decoration: underline !important;
            }
          </style>
        </head>
      
        <body
          marginheight="0"
          topmargin="0"
          marginwidth="0"
          style="margin: 0px; background-color: #f2f3f8"
          leftmargin="0"
        >
          <!-- 100% body table -->
          <table
            cellspacing="0"
            border="0"
            cellpadding="0"
            width="100%"
            bgcolor="#f2f3f8"
            style="
              @import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700);
              font-family: 'Open Sans', sans-serif;
            "
          >
            <tr>
              <td>
                <table
                  style="background-color: #f2f3f8; max-width: 670px; margin: 0 auto"
                  width="100%"
                  border="0"
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                >
                  <tr>
                    <td style="height: 80px">&nbsp;</td>
                  </tr>
                  <tr>
                    <td style="height: 20px">&nbsp;</td>
                  </tr>
                  <tr>
                    <td>
                      <table
                        width="95%"
                        border="0"
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        style="
                          max-width: 670px;
                          background: #fff;
                          border-radius: 3px;
                          text-align: center;
                          -webkit-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                          -moz-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                          box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                        "
                      >
                        <tr>
                          <td style="height: 40px">&nbsp;</td>
                        </tr>
                        <tr>
                          <td style="text-align: center">
                            <a
                              href="https://henrys-app.vercel.app/"
                              title="logo"
                              target="_blank"
                            >
                              <img
                                width="60"
                                src="https://i.postimg.cc/Y0T86N5w/logo-henrys300px.png"
                                title="logo"
                                alt="logo"
                              />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 0 35px">
                            <h1
                              style="
                                color: #1e1e2d;
                                font-weight: 500;
                                margin: 0;
                                font-size: 32px;
                                font-family: 'Rubik', sans-serif;
                              "
                            >
                              Gracias por su compra.
                            </h1>
                            <p
                              style="
                                font-size: 15px;
                                color: #455056;
                                margin: 8px 0 0;
                                line-height: 24px;
                              "
                            >
                            </p>
                            ${receipt.items.map((e) => <p>{}</p>)}
                            ${
                              installments &&
                              installments > 1 && (
                                <div>
                                  <div>
                                    Precio base: {transaction_amount || ""}
                                  </div>
                                  {installments} cuotas de $
                                  {transaction_details.installment_amount}
                                </div>
                              )
                            }
                  
                            <div>Precio final: ${
                              transaction_details.total_paid_amount || ""
                            }</div>
                            <div>
                              <h2>Detalle:</h2>
                              ${additional_info.items.map((i) => (
                                <div key={i.id}>
                                  <div>Producto: {i.title}</div>
                                  <div>Precio unitario: {i.unit_price}</div>
                                  <div>Cantidad: {i.quantity}</div>
                                </div>
                              ))}
                            </div>
      
                          </td>
                        </tr>
                        <tr>
                          <td style="height: 40px">&nbsp;</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="height: 20px">&nbsp;</td>
                  </tr>
                  <tr>
                    <td style="text-align: center">
                      <p
                        style="
                          font-size: 14px;
                          color: rgba(69, 80, 86, 0.7411764705882353);
                          line-height: 18px;
                          margin: 0 0 0;
                        "
                      >
                        &copy; <strong>Henry's Burger</strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="height: 80px">&nbsp;</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <!--/100% body table-->
        </body>
      </html>`,
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
