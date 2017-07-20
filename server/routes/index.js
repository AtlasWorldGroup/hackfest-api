const express = require('express'),
    router = express.Router();

module.exports = function (jwtCheck, adminCheck) {
    router.use('/subscriptions', require('./subscriptions'));
    return router;
}