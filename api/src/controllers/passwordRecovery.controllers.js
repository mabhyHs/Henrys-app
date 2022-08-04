const { transporter } = require("../config/emailTransporter");
const userRepository = require("../repositories/user.repositories");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function recovery(req, res, next) {
  try {
    const { email } = req.body;

    if(!email){
        return res.status(404).json({ error: "El correo no puede estar vacio!" });
    }

    const find = await userRepository.getByEmail(email);

    if(!find){
        return res.status(404).json({ error: "Correo no encontrado!" });
    }

    const newPassword = jwt.sign(
      {
        email: email,
      },
      process.env.TOKEN_SECRET
    );
   
    const newHashPassword = await bcrypt.hash(newPassword, 10);

    await userRepository.updatePassword(email, newHashPassword);

    await transporter.sendMail({
      from: '"Confirm account" <henrysBurger2022@gmail.com',
      to: email,
      subject: "Recover password",
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
                            ${newPassword}
                          </h1>
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

    return res.status(200).json({ message: "Contraseña de recuperación enviada al correo!" });
  } catch (error) {
    next(error);
  }
}

module.exports = { recovery };

{
  /* <body
<h1>nueva contraseña:<h1>
<h2>${newPassword}<h2>
<!-- contraseña -->
</body> */
}
