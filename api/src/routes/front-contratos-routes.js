module.exports = (app) => {
  const router = require('express').Router()
  const controller = require('../controllers/front/contratos-controller.js')

  router.post('/', controller.create)

  app.use('/api/front/contratos', router)
}
