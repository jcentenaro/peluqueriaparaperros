const express = require("express");
const path = require("path");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");

// configuración del motor de vistas
app.set("view engine", "ejs");
//y le digo en carpeta están las vistats
app.set("views", "./src/views");
// LE DIGO QUE UTILICE LAYOUTS Y EN DONDE
app.use(expressLayouts);
app.set("layout", "layouts/layout");
// le pido a la app que use la cocnstatnte que cargué arriba
app.use(methodOverride("_method"));
// habilito vista carpetat public
app.use(express.static(__dirname + "/public"));


app.use(express.urlencoded({extended: false}));

const mainRoutes = require("./src/routes/mainRoutes");
app.use(mainRoutes);

app.use("/admin/productos", require("./src/routes/admin/productosRoutes"));

// Manejo de error de página no existente. 
app.use((req, res, next) => {
    res.status(404).send("La página que está buscando no existe");
});

const PORT = 3000

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
