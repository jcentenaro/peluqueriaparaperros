const express = require("express");
const app = express();
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");

// habilito vista carpetat public
app.use(express.static(path.join(__dirname, "/public")));
// configuración del motor de vistas
app.set("view engine", "ejs");
//y le digo en carpeta están las vistats
app.set("views", path.join(__dirname, "/src/views"));
// LE DIGO QUE UTILICE LAYOUTS Y EN DONDE
app.use(expressLayouts);
app.set("layout", "layouts/layout");
// le pido a la app que use la cocnstatnte que cargué arriba
app.use(methodOverride("_method"));

app.use(express.urlencoded({extended: false}));

const mainRoutes = require("./src/routes/mainRoutes");
app.use(mainRoutes);

app.use("/admin/productos", require("./src/routes/admin/productosRoutes"));

// Manejo de error de página no existente. 
app.use((req, res, next) => {
    // res.status(404).send("La página que está buscando no existe");
    res.status(404).render("404", { 
        layout: "layouts/layouttyc", 
        tituloabout: "Error 404", 
        titulo: "Error 404", 
        mensaje: "Error 404", 
        ciudad: "CABA", 
        urlgooglemaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11050.323449890857!2d-58.495297914629!3d-34.57176037514173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb65c360890c1%3A0x8bd20bac2f970066!2sVilla%20Urquiza%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1732204935893!5m2!1ses!2sar",
        zona: "Error 404" });
});

const PORT = 3000

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));