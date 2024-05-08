const express = require('express')
const {validateActionId, validateAction} = require('./actions-middlware')

const Action = require('./actions-model')

const router = express.Router()

router.get('/', async (req, res, next) => {
  await Action.get()
    .then(action => {
      res.json(action)
    })
    .catch(next)
})

router.get('/:id', validateActionId, async (req, res) => {

})

router.post('/', validateActionId, async(req, res) => {

})

router.put('/:id', validateActionId, async (req, res) => {

})

router.delete('./id', validateActionId, async (req, res) => {

})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
      customMessage: 'Something bad happend inside the actions router',
      message: err.message,
    });
  });

module.exports = router