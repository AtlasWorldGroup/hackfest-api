const express = require('express'),
    router = express.Router();

module.exports = function () {
    router.use('/subscriptions', require('./subscriptions'));
    return router;
}