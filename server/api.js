const express = require('express'),
    router = express.Router();

module.exports = function (app) {
    router.get('/api', (req, res) => {
        res.send('API works');
    });

    router.use('/api', require('./routes'));

    return router;
};