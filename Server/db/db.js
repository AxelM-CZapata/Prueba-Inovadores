const Sequelize = require('sequelize');
const DB_USER='postgres'
const DB_PASSWORD='admin'
const DB_HOST='localhost:5432'
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/innovadores`, {
  logging: false,
  native: false, 
});

module.exports = sequelize;