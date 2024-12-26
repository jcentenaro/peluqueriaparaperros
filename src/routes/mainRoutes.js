const express = require("express");
const router = express.Router();
//llamo al controlador mainController
const controller = require("../controllers/mainController");
// aclaro a que controlador me estoy refiriendo
router.get("/", controller.index);
router.get("/villa_urquiza", controller.villa_urquiza);
router.get("/belgrano", controller.belgrano);
router.get("/belgrano_r", controller.belgrano_r);
router.get("/chacarita", controller.chacarita);
router.get("/coghlan", controller.coghlan);
router.get("/colegiales", controller.colegiales);
router.get("/nunez", controller.nunez);
router.get("/saavedra", controller.saavedra);
router.get("/san_isidro", controller.san_isidro);
router.get("/vicente_lopez", controller.vicente_lopez);
router.get("/villa_del_parque", controller.villa_del_parque);
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