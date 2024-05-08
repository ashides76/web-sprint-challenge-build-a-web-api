const Project = require('./projects-model')

function projectLogger(req, res, next) {
  const timestamp = new Date().toLocaleString()
  const method = req.method
  const url = req.orignalUrl
  console.log('Reqtest Info:', {method: method, url: url, timestamp: timestamp})
  next()
}

async function validateProjectId (req, res, next) {
    const { id } = req.params
    await Project.get(id)
      .then(project => {
        if (project) {
          req.project = project
          next()
        } else {
          next({
            status: 404,
            message: `No project with given id: ${id}.`
          })
        }
      })
      .catch(err => {
        next(err)
      })
  
  }
  
//   async function validateUser(req, res, next) {
//     const { name } = req.body
//     if (!name || !name.trim()) {
//       res.status(400).json({
//         message: "missing required name field"
//       })
//     } else {
//       req.name = name.trim()
//       next()
//     }
//   }
  

module.exports = {
    projectLogger,
    validateProjectId
}