'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('contratos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      rgan_contractaci: {
        type: Sequelize.STRING
      },
      data_darrer_anunci_plataforma: {
        type: Sequelize.DATE
      },
      expedient: {
        type: Sequelize.STRING
      },
      t_tol: {
        type: Sequelize.TEXT
      },
      tipus_contracte: {
        type: Sequelize.STRING
      },
      procediment_contractaci: {
        type: Sequelize.STRING
      },
      pressupost_expedien: {
        type: Sequelize.DECIMAL(15, 2)
      },
      pressupost_expedient_sense: {
        type: Sequelize.DECIMAL(15, 2)
      },
      modificacions_import: {
        type: Sequelize.STRING
      },
      modificacions_termini: {
        type: Sequelize.STRING
      },
      pr_rroga_d_un_altre_expedient: {
        type: Sequelize.STRING
      },
      resultat_adjudicaci: {
        type: Sequelize.STRING
      },
      data_acord_adjudicaci: {
        type: Sequelize.DATE
      },
      data_formalitzaci: {
        type: Sequelize.DATE
      },
      cif_adjudicatari: {
        type: Sequelize.STRING
      },
      nom_adjudicatari: {
        type: Sequelize.STRING
      },
      import_adjudicaci: {
        type: Sequelize.DECIMAL(15, 2)
      },
      import_adjudicaci_sense_iva: {
        type: Sequelize.DECIMAL(15, 2)
      },
      ofertes_rebudes: {
        type: Sequelize.INTEGER
      },
      tipus_tramitaci: {
        type: Sequelize.STRING
      },
      financiaci_ue: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('contratos')
  }
}
