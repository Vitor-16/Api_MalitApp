//IMPORTS
const { Sequelize, DataTypes } = require('sequelize');
const DataMedModel = require('./DataMedModel');
const UsuariosModel = require('./UsuariosModel');
const UsuariosMedModel = require('./UsuariosMedModel');

//CONEXÃO COM BD
const connection = require('../config/connection');

const MedicamentosModel = connection.define('tbl_Medicamentos',
{
    id_Medicamentos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_Medicamentos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao_Medicamentos: {
        type: DataTypes.STRING,
        allowNull: true
    },
    quantidade_Medicamentos: { 
        type: DataTypes.FLOAT,
        allowNull: false
    },
    validade_Medicamentos: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    DataMed_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

MedicamentosModel.belongsTo(DataMedModel, {foreignKey: 'DataMed_id', allowNull: false});
 
module.exports = MedicamentosModel;