const express = require("express");
const app = express();
const sequelize = require("./utils/db");
const cors = require("cors");
app.use(cors());

const User = require("./models/user.model");
const Review = require("./models/review.model");
const Recipe = require("./models/recipe.model");
const Follower = require("./models/follower.model");
const Collection = require("./models/collection.model");

const userRouter = require("./routers/user.router");
const reviewRouter = require("./routers/review.router");
const recipeRouter = require("./routers/recipe.router");
const followerRouter = require("./routers/follower.router");
const collectionRouter = require("./routers/collection.router");

app.use(express.json());

app.use(userRouter);
app.use(reviewRouter);
app.use(recipeRouter);
app.use(followerRouter);
app.use(collectionRouter);

User.hasMany(Recipe);
Recipe.belongsTo(User);
User.hasMany(Follower);
Follower.belongsTo(User);
User.hasMany(Collection);
Collection.belongsTo(User);
Recipe.hasMany(Review);
Review.belongsTo(Recipe);

sequelize.sync().then(()=>{
  app.listen(3000);
  console.log("database connected successfully");
})