module.exports = (app) => {
  const router = require('express').Router()
  const controller = require('../controllers/front/table-controller.js')

  router.get('/', controller.findAll)
  router.post('/', controller.create)

  app.use('/api/front/table', router)
}
