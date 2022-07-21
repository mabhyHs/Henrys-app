const sayHello = (req, res, next) => {
    return res.status(200).json({ msg: "Hello!" });
};

module.exports = { sayHello };
