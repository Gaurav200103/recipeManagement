const express = require("express");
const { registerUser, loginUser } = require("../controllers/user.controller");
const { createReview, rateRecipe } = require("../controllers/review.controlles");
const { isLoginUser } = require("../middlewares/auth");
const router = express.Router();

router.post("/addReview/:id",isLoginUser, createReview);
router.post("/rate",isLoginUser, rateRecipe);

module.exports = router;