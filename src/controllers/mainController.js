let tareas = [
    { id: 1, title: "Titulo 1", completed: false},
    { id: 2, title: "Titulo 2", completed: false},
    { id: 3, title: "Titulo 3", completed: false},
    { id: 4, title: "Titulo 4", completed: false},
    { id: 5, title: "Titulo 5", completed: false},
    
];
//Aca irán las funciones para controlar el mainRoutes.js trayendo parte del código de ahí
const index = (req, res) => {
    res.render("index", { titulo: "Peluquería Canina a Domicilio en CABA Norte - Cortes y Baños Caninos", mensaje: "Exclusivo CABA Norte", ciudad: "CABA Norte", tituloabout: "Peluquería Canina a Domicilio en CABA Norte", zona: "De CABA Norte a San Isidro" });
};

const villaurquiza = (req, res) => {
    res.render("villaurquiza", { titulo: "Peluquería Canina a Domicilio en Villa Urquiza - Cortes y Baños Caninos", mensaje: "Exclusivo Villa Urquiza", ciudad: "Villa Urquiza", tituloabout: "Peluquería Canina a Domicilio en Villa Urquiza", zona: "Villa Urquiza"});
};

//Exporto para que se puedad usar (llamar dedsde mainRouter)
module.exports = {
    index,
    villaurquiza
};