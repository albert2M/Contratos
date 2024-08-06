const sequelizeDb = require('../../models')
const Table = sequelizeDb.Table

exports.findAll = (req, res) => {
  Table.findAndCountAll({
    attributes: [],
    order: [['createdAt', 'DESC']]
  })
    .then(result => {
      res.status(200).send(result)
    }).catch(err => {
      res.status(500).send({
        message: err.errors || 'Algún error ha surgido al recuperar los datos.'
      })
    })
}
