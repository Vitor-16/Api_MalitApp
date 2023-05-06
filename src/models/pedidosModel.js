const { Sequelize, DataTypes } = require('sequelize');

const connection = require('../config/Connection');

const pedidosModel = connection.define('Pedidos',
{
    id_pedido:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false
    },
    valor_pedido:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    formaPagamento:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = pedidosModel;