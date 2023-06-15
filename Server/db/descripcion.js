const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Descripcion = sequelize.define('Descripcion', {

  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  descripcion: {
    type: DataTypes.STRING,
  }
});

module.exports = Descripcion;