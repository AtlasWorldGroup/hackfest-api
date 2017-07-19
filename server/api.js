const express = require('express'),
  router = express.Router();

module.exports = function(app) {
  router.get('/api', (req, res) => {
    res.send('API works');
  });

  router.post('/api/authenticate', (req, res) => {
    res.send('API works');
  });

  return router;
};