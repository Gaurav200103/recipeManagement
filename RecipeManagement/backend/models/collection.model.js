const sequelize = require("../utils/db");
const Sequelize = require("sequelize");
const {DataTypes} = require("sequelize");

const Collection = sequelize.define("Collection", {
  name:{
    type:Sequelize.STRING,
    allowNull:false
  },
  recipeId:{
    type:DataTypes.INTEGER,
    allowNull: false
  }
})

module.exports = Collection;