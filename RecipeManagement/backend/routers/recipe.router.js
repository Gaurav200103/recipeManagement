const express = require("express");
const { isLoginUser } = require("../middlewares/auth");
const { addRecipe, removeRecipe, updateRecipe, addFilter, getRecipes, getMyRecipes } = require("../controllers/recipe.controller");
const router = express.Router();

router.post("/addRecipe", isLoginUser, addRecipe);

router.delete("/deleteRecipe/:id", isLoginUser, removeRecipe);

router.patch("/updateRecipe", isLoginUser, updateRecipe);

router.get("/addFilter", isLoginUser, addFilter);

router.get("/recipes", getRecipes);

router.get("/myRecipes", isLoginUser, getMyRecipes);

module.exports = router;