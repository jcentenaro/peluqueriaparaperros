const express = require("express");
const router = express.Router();
//llamo al controlador mainController
const controller = require("../controllers/mainController");

const nodemailer = require("nodemailer");
require("dotenv").config(); // Cargar las variables de entorno

// Ruta para procesar el formulario de contacto
router.post("/enviar", async (req, res) => {
    // Obtener los datos del formulario
    const { Name, LastName, Email, phone, Message } = req.body;

    // Configurar el transporte de Nodemailer
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // Cambia esto si usas otro proveedor de correo
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER, // Email del remitente (variable de entorno)
            pass: process.env.EMAIL_PASS, // Contraseña del remitente (variable de entorno)
        },
    });

    // Configurar los detalles del correo
    const mailOptions = {
        from: `"${Name} ${LastName}" <${Email}>`, // Quién envía
        to: "sjgiusti@gmail.com", // Destinatario real sjgiusti@gmail.com
        bcc: "smokiepeluqueria@gmail.com", // Copia oculta
        subject: "Mensaje Site Peluquería para Perros", // Asunto
        text: `Nombre: ${Name} ${LastName}\nEmail: ${Email}\nTeléfono: ${phone}\nMensaje:\n${Message}`,
        html: `
            <p><strong>Nombre:</strong> ${Name} ${LastName}</p>
            <p><strong>Email:</strong> ${Email}</p>
            <p><strong>Teléfono:</strong> ${phone}</p>
            <p><strong>Mensaje:</strong> ${Message}</p>
            
        `,
        replyTo: Email, // Responder a quien completó el campo Email del formulario
    };

    try {
        // Enviar el correo
        await transporter.sendMail(mailOptions);
        
        // Renderizar la vista de éxito
        res.status(200).render("success", {
            titulo: "Peluquería Canina a Domicilio en Mensaje Enviado- Cortes y Baños Caninos",
            title: "Mensaje Enviado",
            mensaje: "mensaje deMansaje Enviado",
            message: "Mensaje Enviado",
            ciudad: "Ciudad de Mensaje Enviado", 
            tituloabout: "Peluquería Canina a Domicilio en Mensaje Enviado", 
            zona: "Zona de Mensaje Enviado", 
            urlgooglemaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9288.494002341027!2d-58.49484950528578!3d-34.60470395826524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9df44319d89%3A0x72e02046997c8cef!2sVilla%20del%20Parque%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1732211318217!5m2!1ses!2sar"
        });
    } catch (error) {
        console.error("Error al enviar el correo:", error);
        
        // Renderizar una vista de error
        res.status(500).render("error", {
            title: "Error al enviar",
            message: "Hubo un problema al enviar tu mensaje. Intenta nuevamente más tarde.",
            titulo: "Titulo",
            
        });
    }
});

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
router.get("/agronomia", controller.agronomia);
router.get("/florida", controller.florida);
router.get("/martinez", controller.martinez);
router.get("/la_lucila", controller.la_lucila);
router.get("/olivos", controller.olivos);
router.get("/success", controller.success);
router.get("/parque_chas", controller.parque_chas);
router.get("/parque_patricios", controller.parque_patricios);
router.get("/barrio_chino", controller.barrio_chino);
router.get("/villa_devoto", controller.villa_devoto);

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
        titulo: 'Otras Localidades', // Pasas un título para la página
        ciudad: "CABA Norte y Zona Norte",
        zona: "De CABA Norte a San Isidro"
    });
});

module.exports = router;