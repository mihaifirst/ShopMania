const express = require("express");
const router = express.Router();

const ContractController = require("./contract.controller");

router.get("/", ContractController.getContracts);
router.get("/:id", ContractController.getContractById);
router.post("", ContractController.createContract);
router.patch("/:id", ContractController.updateContractById);
router.delete("/:id", ContractController.deleteContractById);

module.exports = router;