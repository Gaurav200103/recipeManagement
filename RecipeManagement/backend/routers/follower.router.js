const express = require("express");
const { isLoginUser } = require("../middlewares/auth");
const { followUser } = require("../controllers/follower.controller");
const router = express.Router();

router.post("/followUser/:id", isLoginUser, followUser);

module.exports = router;