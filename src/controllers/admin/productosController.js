//Aca irán las funciones para controlar el mainRoutes.js trayendo parte del código de ahí
const index = (req, res) => {
    res.send("Listado de Productos/ Servicios");
};

const store = (req, res) => {
    console.log(req.body);
    // console.log(req.headers);
    res.send("Crear Producto");
};

const update = (req, res) => {
    console.log(req.params, req.body);
    res.send("Producto Editado");
};

const destroy = (req, res) => {
    console.log(req.params);
    res.send("Producto Borrado");
};

//Exporto para que se pueda usar (llamar dedsde mainRouter)
module.exports = {
    index,
    store,
    update,
    destroy
};