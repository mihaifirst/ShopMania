const express = require("express");
const router = express.Router();
const passport = require("passport");

const AuthController = require("./auth.controller");

require("./passport.middleware");
passport.authenticate("jwt");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

module.exports = router;
