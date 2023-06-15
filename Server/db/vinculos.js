const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Vinculos = sequelize.define('Vinculo', {

  menuId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  descripcion: {
    type: DataTypes.STRING,
  },
  url: {
    type: DataTypes.STRING,
  },
  menuPadreId:{
    type: DataTypes.INTEGER
  },
  posicion: {
    type:DataTypes.INTEGER
  }
});

module.exports = Vinculos;