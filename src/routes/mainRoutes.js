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
// router.get("/tyc", controller.tyc);
router.get('/terminos_y_condiciones', (req, res) => {
    res.render('terminos_y_condiciones', {
        layout: 'layouts/layouttyc.ejs', // Especificas el layout alternativo
        titulo: 'Términos y Condiciones', // Pasas un título para la página
        ciudad: "CABA Norte",
        zona: "De CABA Norte a San Isidro"
    });
});
router.get('/localidades', (req, res) => {
    res.render('localidades', {
        layout: 'layouts/layouttyc.ejs', // Especificas el layout alternativo
        titulo: 'Términos y Condiciones', // Pasas un título para la página
        ciudad: "CABA Norte y Zona Norte",
        zona: "De CABA Norte a San Isidro"
    });
});

module.exports = router;