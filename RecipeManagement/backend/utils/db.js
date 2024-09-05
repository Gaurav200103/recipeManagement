const Sequelize = require("sequelize");

const sequelize =new Sequelize("recipeManagement", "root", "password", {
  host:"localhost",
  dialect:"mysql"
});

module.exports = sequelize;

