const Project = require('./projects-model')

function projectLogger(req, res, next) {
  const timestamp = new Date().toLocaleString()
  const method = req.method
  const url = req.orignalUrl
  console.log('Reqtest Info:', {method: method, url: url, timestamp: timestamp})
  next()
}

// async function validateProjectId (req, res, next) {
//     const { id } = req.params
//     await Users.getById(id)
//       .then(user => {
//         if (user) {
//           req.user = user
//           next()
//         } else {
//           next({
//             status: 404,
//             message: "user not found"
//           })
//         }
//       })
//       .catch(err => {
//         next(err)
//       })
  
//   }
  
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
    projectLogger
}