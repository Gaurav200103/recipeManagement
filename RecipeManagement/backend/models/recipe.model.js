const sequelize = require("../utils/db");
const Sequelize = require("sequelize");
const {DataTypes} = require('sequelize');

const Recipe = sequelize.define("Recipe", {
  name:{
    type:Sequelize.STRING,
    allowNull:false,
    unique:true
  },
  preparetionTime:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  cookingTime:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  ingredients:{
    type:Sequelize.STRING,
    allowNull:false
  },
  category:{
    type:Sequelize.STRING,
    allowNull:false
  },
  rating:{
    type:DataTypes.INTEGER,
    allowNull:false,
    default:0
  },
  totalRate:{
    type:DataTypes.INTEGER,
    allowNull:false,
    default:0
  },
  img:{
    type:Sequelize.STRING,
    allowNull:false
  },
  method:{
    type:Sequelize.STRING,
    allowNull:false
  },
  difficulty:{
    type:Sequelize.ENUM("easy","meddium","hard"),
    allowNull:false,
  }
})

module.exports = Recipe;