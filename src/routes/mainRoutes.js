const express = require("express");
const router = express.Router();
//llamo al controlador mainController
const controller = require("../controllers/mainController");
// aclaro a que controlador me estoy refiriendo
router.get("/", controller.index);
router.get("/villaurquiza", controller.villaurquiza);
router.get("/belgrano", controller.belgrano);
router.get("/belgranor", controller.belgranor);
router.get("/chacarita", controller.chacarita);
router.get("/coghlan", controller.coghlan);
router.get("/colegiales", controller.colegiales);
router.get("/nunez", controller.nunez);
router.get("/saavedra", controller.saavedra);
router.get("/sanisidro", controller.sanisidro);
router.get("/vicentelopez", controller.vicentelopez);
router.get("/villadelparque", controller.villadelparque);
router.get("/tyc", controller.tyc);


module.exports = router;