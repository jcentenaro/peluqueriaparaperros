const express = require("express");
const router = express.Router();
//llamo al controlador mainController
const controller = require("../controllers/mainController");
// aclaro a que controlador me estoy refiriendo
router.get("/", controller.index);
router.get("/villaurquiza", controller.villaurquiza);

module.exports = router;