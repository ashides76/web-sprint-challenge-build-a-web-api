const express = require('express')
const { validateProjectId, validateProject } = require('./projects-middleware')

const Project = require('./projects-model')

const router = express.Router()

router.get('/', async (req, res, next) => {
  await Project.get()
      .then(project => {
          res.status(200).json(project)
      })
      .catch(next)
})

router.get('/:id', validateProjectId, async(req, res, next) => {
  const { id } = req.params
  await Project.get(id)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(next)
})

router.post('/', validateProject, async (req, res, next) => {
  await Project.insert({name: req.name, description: req.description})
    .then(newProj => {
      res.status(201).json(newProj)
    })
    .catch(next)
})

router.put('/:id', validateProjectId, async(req, res) => {

})

router.delete('/:id', validateProjectId, async(req, res) => {

})

router.get('/:id/actions', validateProjectId, async(req, res) => {
    
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
      customMessage: 'Something bad happend inside the projects router',
      message: err.message,
    });
  });

module.exports = router