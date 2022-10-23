const express = require("express");
const router = express.Router();
const passport = require("passport");
const { generateToken } = require("./token-generator");

const AuthController = require("./auth.controller");

require("./passport.middleware");
passport.authenticate("jwt");

router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);

module.exports = router;
