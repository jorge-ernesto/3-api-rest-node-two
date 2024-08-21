'use strict' //Activamos el modo estricto, el cual nos permite usar ciertas mejoras del lenguaje de JS

// Requires
var express = require('express'); //Requerir o cargar la libreria o modulo de express
var bodyParser = require('body-parser'); //Requerir o cargar la libreria o modulo de body-parser

// Ejecutar Express
var app = express(); //Creamos la variable app y dentro invocamos a express, esto automaticamente activa el framework para poder trabajar con el

// Cargar archivos de rutas
var user_routes = require('./routes/user');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false })) //Activamos el body-parser para que me convierta lo que me llegue de las peticiones a objetos de JavaScript
app.use(bodyParser.json()); //Voy a utilizar el metodo JSON de body-parser, para convertir la peticion a un objeto JSON y poder trabajar con el en los controladores

// CORS
// Pendiente de implementar

// Configurar rutas / Reescribir rutas
app.use('/api/user', user_routes);

// Ruta/metodo de prueba con el metodo HTTP GET
// Esta seria la forma de probarla: http://localhost:3999/prueba
app.get('/prueba', (req, res) => { //app es el objeto de express, hacemos ruta de prueba con el metodo HTTP GET, req es lo que envio, res es lo que devuelvo
    // return res.status(200).send("<h1>Hola mundo soy el backend</h1>");

    return res.status(200).send({
        nombre: 'Ernesto Si',
        message: 'Hola mundo desde el back-end con NodeJS soy un metodo GET'
    });
})

// Ruta/metodo de prueba con el metodo HTTP POST
app.post('/prueba', (req, res) => {
    return res.status(200).send({
        nombre: 'Ernesto Si',
        message: 'Hola mundo desde el back-end con NodeJS soy un metodo POST'
    });
})

// Exportar el modulo
module.exports = app;
