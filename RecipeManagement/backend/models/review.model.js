const sequelize = require("../utils/db");
const Sequelize = require("sequelize");
const {DataTypes} = require("sequelize");

const Review = sequelize.define("Review", {
  name:{
    type:Sequelize.STRING,
    allowNull:false
  },
  email:{
    type:Sequelize.STRING,
    allowNull:false,
    unique:true
  },
  message:{
    type:Sequelize.STRING,
    allowNull:false
  }
})

module.exports = Review;