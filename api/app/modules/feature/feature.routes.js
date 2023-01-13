const express = require("express");
const router = express.Router();

const FeatureController = require("./feature.controller");

router.get("/", FeatureController.getFeatures);
router.get("/:id", FeatureController.getFeaturesById);
router.post("", FeatureController.createFeature);
router.patch("/:id", FeatureController.updateFeatureById);
router.delete("/:id", FeatureController.deleteFeatureById);

module.exports = router;
