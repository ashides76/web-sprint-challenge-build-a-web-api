const express = require('express')

const Project = require('./projects-model')

const router = express.Router()

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
      customMessage: 'Something bad happend inside the hubs router',
      message: err.message,
    });
  });

module.exports = router