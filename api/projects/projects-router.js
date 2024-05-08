const express = require('express')

const Project = require('./projects-model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    await Project.get()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(next)
})

router.get('/:id', async(req, res) => {

})

router.post('/', async (req, res) => {

})

router.put('/:id', async(req, res) => {

})

router.delete('/:id', async(req, res) => {

})

router.get('/:id/actions', async(req, res) => {
    
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
      customMessage: 'Something bad happend inside the projects router',
      message: err.message,
    });
  });

module.exports = router