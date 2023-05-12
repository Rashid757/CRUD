const express = require("express");
const router = express.Router();
const tutorialController = require("../controller/controller.js");

// Create a new tutorial
router.post("/", tutorialController.create);

// Retrieve all tutorials
router.get("/", tutorialController.findAll);

// Update a tutorial with ID
router.put("/:id", tutorialController.update);

// Delete a tutorial with ID
router.delete("/:id", tutorialController.delete);

module.exports = router;
