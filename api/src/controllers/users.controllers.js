const sayHello = (req, res, next) => {
    res.status(200).json({ msg: 'Hello!' });
};

module.exports = { sayHello };
