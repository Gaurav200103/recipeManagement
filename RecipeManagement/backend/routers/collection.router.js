const express = require("express");
const { isLoginUser } = require("../middlewares/auth");
const { createCollection, removeFromCollection, removeCollection } = require("../controllers/collection.controllers");
const router = express.Router();

router.post("/createCollection", isLoginUser, createCollection);

router.delete("/removeFromCollection/:id", isLoginUser, removeFromCollection);

router.delete("/removeCollection/:name", isLoginUser, removeCollection);

module.exports = router;