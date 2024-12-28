let tareas = [
    { id: 1, title: "Titulo 1", completed: false},
    { id: 2, title: "Titulo 2", completed: false},
    { id: 3, title: "Titulo 3", completed: false},
    { id: 4, title: "Titulo 4", completed: false},
    { id: 5, title: "Titulo 5", completed: false},
    
];
//Aca irán las funciones para controlar el mainRoutes.js trayendo parte del código de ahí
const index = (req, res) => {
    res.render("index", { 
        titulo: "Peluquería Canina a Domicilio - Baño y Corte para Perros", 
        ciudad: "CABA Norte y Zona Norte",
        canonical: "https://peluqueriaparaperros.com.ar",
        urlgooglemaps: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62524.910098985034!2d-58.46570898747677!3d-34.55201599726253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1731982379055!5m2!1ses-419!2sar" });
};

const villa_urquiza = (req, res) => {
    res.render("villa_urquiza", { 
        titulo: "Servicios de Peluquería Canina a Domicilio en Villa Urquiza", 
        ciudad: "Villa Urquiza",
        canonical: "https://peluqueriaparaperros.com.ar/villa_urquiza",
        urlgooglemaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11050.323449890857!2d-58.495297914629!3d-34.57176037514173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb65c360890c1%3A0x8bd20bac2f970066!2sVilla%20Urquiza%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1732204935893!5m2!1ses!2sar"});
};
const agronomia = (req, res) => {
    res.render("agronomia", { 
        titulo: "Servicios de Peluquería Canina a Domicilio en Agronomía", 
        ciudad: "Agronomía",
        canonical: "https://peluqueriaparaperros.com.ar/agronomia",
        urlgooglemaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11050.323449890857!2d-58.495297914629!3d-34.57176037514173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb65c360890c1%3A0x8bd20bac2f970066!2sVilla%20Urquiza%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1732204935893!5m2!1ses!2sar"});
};
const belgrano = (req, res) => {
    res.render("belgrano", { 
        titulo: "Peluquería Para Perros En Belgrano - Baño y Corte para Perros", 
        ciudad: "Belgrano",
        canonical: "https://peluqueriaparaperros.com.ar/belgrano",
        urlgooglemaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18587.816276470472!2d-58.461128793882715!3d-34.556271187905445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d28526611d%3A0xbcb585a9ddc70069!2sBelgrano%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1732204467173!5m2!1ses!2sar"});
};
const belgrano_r = (req, res) => {
    res.render("belgrano_r", { 
        titulo: "Baño y Corte de Pelo para Perros a Domicilio en Belgrano R", 
        ciudad: "Belgrano R",
        canonical: "https://peluqueriaparaperros.com.ar/belgrano_r",
        urlgooglemaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7813.979742963123!2d-58.4696035398046!3d-34.56940771126956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6790e1d3c6d%3A0xc88a62c58387a92c!2sBelgrano%20R%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1732210798988!5m2!1ses!2sar"});
};
const chacarita = (req, res) => {
    res.render("chacarita", {
        titulo: "Peluquería Canina a Domicilio - Limpieza, Cuidado y Estilo para Tu Mascota", 
        ciudad: "Chacarita",
        canonical: "https://peluqueriaparaperros.com.ar/chacarita",
        urlgooglemaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9290.255595000182!2d-58.45799948319727!3d-34.58895194673338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5fab4d7e7c7%3A0xc0677dc30b75b92b!2sChacarita%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1732211094370!5m2!1ses!2sar"});
};
const coghlan = (req, res) => {
    res.render("coghlan", { 
        titulo: "Servicios de Aseo Canino a Domicilio - Belleza y Cuidado para Perros", 
        ciudad: "Coghlan",
        canonical: "https://peluqueriaparaperros.com.ar/coghlan",
        urlgooglemaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6571.476479958345!2d-58.480217652712305!3d-34.56018240633314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb688a5472f13%3A0xe135def37ccd430d!2sCoghlan%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1732204569823!5m2!1ses!2sar"});
};
const colegiales = (req, res) => {
    res.render("colegiales", { 
        titulo: "Peluquería Canina Profesional a Domicilio - Baño, Corte y Estilizado", 
        ciudad: "Colegiales",
        canonical: "https://peluqueriaparaperros.com.ar/colegiales",
        urlgooglemaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9291.920644436825!2d-58.45686880475551!3d-34.57405744098747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5dd407c17db%3A0xf700e263552c9fa5!2sColegiales%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1732204865029!5m2!1ses!2sar"});
};
const nunez = (req, res) => {
    res.render("nunez", { 
        titulo: "Cuidado y Belleza para Perros - Peluquería Canina Profesional a Domicilio", 
        ciudad: "Nuñez",
        canonical: "https://peluqueriaparaperros.com.ar/nunez",
        urlgooglemaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13144.9581433122!2d-58.4710511430288!3d-34.547490044517424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb420f6902f33%3A0x319825d17bcaba0d!2sN%C3%BA%C3%B1ez%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1732204721525!5m2!1ses!2sar"});
};
const saavedra = (req, res) => {
    res.render("saavedra", { 
        titulo: "Servicios de Baño y Peluquería Canina en Saavedra", 
        ciudad: "Saavedra",
        canonical: "https://peluqueriaparaperros.com.ar/saavedra",
        urlgooglemaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9294.392555011877!2d-58.4878361832402!3d-34.55193488531408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6ecec1f5741%3A0x42502844d305770b!2sSaavedra%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1732204684356!5m2!1ses!2sar"});
};
const san_isidro = (req, res) => {
    res.render("san_isidro", { 
        titulo: "Peluqueria Canina A Domicilio en San Isidro - Agenda Hoy", 
        ciudad: "San Isidro",
        canonical: "https://peluqueriaparaperros.com.ar/san_isidro",
        urlgooglemaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22126.55276409319!2d-58.538454504312654!3d-34.47418192827967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb03cd891437f%3A0xab3b49e671350275!2sSan%20Isidro%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1732211577988!5m2!1ses!2sar"});
};
const vicente_lopez = (req, res) => {
    res.render("vicente_lopez", { 
        titulo: "Estilista Canino a Domicilio - Baño y Corte Profesional para Perros", 
        ciudad: "Vicente López",
        canonical: "https://peluqueriaparaperros.com.ar/vicente_lopez",
        urlgooglemaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13148.540281926977!2d-58.48331462825573!3d-34.52480573907587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6a6386ba5c9%3A0xb8039ed75861da4d!2sVicente%20L%C3%B3pez%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1732204396590!5m2!1ses!2sar"});
};
const villa_del_parque = (req, res) => {
    res.render("villa_del_parque", { 
        titulo: "Baño y Corte Canino a Domicilio - Peluquería Especializada en Mascotas", 
        ciudad: "Villa Del Parque",
        canonical: "https://peluqueriaparaperros.com.ar/villa_del_parque",
        urlgooglemaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9288.494002341027!2d-58.49484950528578!3d-34.60470395826524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9df44319d89%3A0x72e02046997c8cef!2sVilla%20del%20Parque%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1732211318217!5m2!1ses!2sar"});
};
const olivos = (req, res) => {
    res.render("olivos", { 
        titulo: "Baño y Corte Canino a Domicilio - Peluquería Especializada en Mascotas", 
        ciudad: "Olivos",
        canonical: "https://peluqueriaparaperros.com.ar/olivos",
        urlgooglemaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9288.494002341027!2d-58.49484950528578!3d-34.60470395826524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9df44319d89%3A0x72e02046997c8cef!2sVilla%20del%20Parque%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1732211318217!5m2!1ses!2sar"});
};
const la_lucila = (req, res) => {
    res.render("la_lucila", { 
        titulo: "Baño y Corte Canino a Domicilio - Peluquería Especializada en Mascotas", 
        ciudad: "La Lucila",
        canonical: "https://peluqueriaparaperros.com.ar/la_lucila",
        urlgooglemaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9288.494002341027!2d-58.49484950528578!3d-34.60470395826524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9df44319d89%3A0x72e02046997c8cef!2sVilla%20del%20Parque%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1732211318217!5m2!1ses!2sar"});
};
const florida = (req, res) => {
    res.render("florida", { 
        titulo: "Baño y Corte Canino a Domicilio - Peluquería Especializada en Mascotas", 
        ciudad: "Florida",
        canonical: "https://peluqueriaparaperros.com.ar/florida",
        urlgooglemaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9288.494002341027!2d-58.49484950528578!3d-34.60470395826524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9df44319d89%3A0x72e02046997c8cef!2sVilla%20del%20Parque%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1732211318217!5m2!1ses!2sar"});
};
const martinez = (req, res) => {
    res.render("martinez", { 
        titulo: "Baño y Corte Canino a Domicilio - Peluquería Especializada en Mascotas", 
        ciudad: "Martinez",
        canonical: "https://peluqueriaparaperros.com.ar/martinez",
        urlgooglemaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9288.494002341027!2d-58.49484950528578!3d-34.60470395826524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9df44319d89%3A0x72e02046997c8cef!2sVilla%20del%20Parque%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1732211318217!5m2!1ses!2sar"});
};
const terminos_y_condiciones = (req, res) => {
    res.render("terminos_y_condiciones");
};
const localidades = (req, res) => {
    res.render("localidades");
};
//Exporto para que se puedad usar (llamar dedsde mainRouter)
module.exports = {
    index,
    agronomia,
    florida,
    martinez,
    la_lucila,
    olivos,
    villa_urquiza,
    belgrano,
    belgrano_r,
    chacarita,
    coghlan,
    colegiales,
    nunez,
    saavedra,
    san_isidro,
    vicente_lopez,
    villa_del_parque,
    terminos_y_condiciones,
    localidades
};