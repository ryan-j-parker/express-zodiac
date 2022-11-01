const { Router } = require('express');
const { horoscopes } = require('../horoscope-data');

module.exports = Router()
  .get('/:name', (req, res) => {
    const match = horoscopes.find((sign) => sign.name === req.params.name);
    return res.json(match);
  });

