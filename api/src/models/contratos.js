module.exports = function (sequelize, DataTypes) { // module.exports exporta; y se importa con "require"
  const Contratos = sequelize.define('Contratos',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      rgan_contractaci: {
        type: DataTypes.STRING
      },
      data_darrer_anunci_plataforma: {
        type: DataTypes.DATE
      },
      expedient: {
        type: DataTypes.STRING
      },
      t_tol: {
        type: DataTypes.TEXT
      },
      tipus_contracte: {
        type: DataTypes.STRING
      },
      procediment_contractaci: {
        type: DataTypes.STRING
      },
      pressupost_expedien: {
        type: DataTypes.DECIMAL(15, 2)
      },
      pressupost_expedient_sense: {
        type: DataTypes.DECIMAL(15, 2)
      },
      modificacions_import: {
        type: DataTypes.STRING
      },
      modificacions_termini: {
        type: DataTypes.STRING
      },
      pr_rroga_d_un_altre_expedient: {
        type: DataTypes.STRING
      },
      resultat_adjudicaci: {
        type: DataTypes.STRING
      },
      data_acord_adjudicaci: {
        type: DataTypes.DATE
      },
      data_formalitzaci: {
        type: DataTypes.DATE
      },
      cif_adjudicatari: {
        type: DataTypes.STRING
      },
      nom_adjudicatari: {
        type: DataTypes.STRING
      },
      import_adjudicaci: {
        type: DataTypes.DECIMAL(15, 2)
      },
      import_adjudicaci_sense_iva: {
        type: DataTypes.DECIMAL(15, 2)
      },
      ofertes_rebudes: {
        type: DataTypes.INTEGER
      },
      tipus_tramitaci: {
        type: DataTypes.STRING
      },
      financiaci_ue: {
        type: DataTypes.STRING
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      },
      deletedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize,
      tableName: 'contratos',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        }
      ]
    }
  )

  Contratos.associate = function (models) {

  }

  return Contratos
}
