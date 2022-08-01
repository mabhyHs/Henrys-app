async function check(req, res, next) {
  try {
    console.log("mercado pago rey");
    res.send("todo joya");
  } catch (error) {
    next(error);
  }
}

module.exports = { check };
