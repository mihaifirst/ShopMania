const express = require("express");
const router = express.Router();

const UserController = require("./user.controller");

router.get("/", UserController.getUsers);

module.exports = router;
