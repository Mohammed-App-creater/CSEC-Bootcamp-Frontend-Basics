const allowedOrigen = require('./allowedOrigen');

const credentials = (req, res, next) => {
    const origen = req.headers.origin;
    if (allowedOrigen.includes(origen)) {
        res.setHeader('Access-Control-Allow-Origin', origen);
    }
    next();
}

module.exports = credentials;