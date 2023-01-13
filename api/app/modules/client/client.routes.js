const express = require("express");
const router = express.Router();

const ClientController = require("./client.controller");

router.get("/", ClientController.getClients);
router.get("/:id", ClientController.getClientById);
router.post("", ClientController.createClient);
router.patch("/:id", ClientController.updateClientById);
router.delete("/:id", ClientController.deleteClientById);

module.exports = router;
