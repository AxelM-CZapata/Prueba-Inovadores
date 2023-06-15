const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const User = sequelize.define('User', {

  email: {
    primaryKey: true,
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User;