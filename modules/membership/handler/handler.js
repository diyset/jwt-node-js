'use strict';

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Hello Express');
});

router.post('/', function(req, res, next) {
  res.send('Hello Express');
});

module.exports = router;
