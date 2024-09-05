const Sequelize = require("sequelize");
const sequelize = require("../utils/db");
const {DataTypes} = require('sequelize');

const Follower = sequelize.define("Follower", {
  followeeId:{
    type:DataTypes.INTEGER,
    allowNull:false
  }
});

module.exports = Follower;