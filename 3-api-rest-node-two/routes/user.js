// En este archivo cargamos toda la configuracion de rutas de user

'use strict' //Activamos el modo estricto, el cual nos permite usar ciertas mejoras del lenguaje de JS

var express = require('express'); //Requerir o cargar la libreria o modulo de express
var UserController = require('../controllers/user'); //Cargamos toda la configuracion del controlador user

var router = express(); //Creamos la variable router y dentro invocamos a express, esto automaticamente activa el framework para poder trabajar con el
// var router = express.Router(); //Tambien podemos usar la funcion Router(), esto hace lo mismo que solo usar express()

router.get('/probando', UserController.probando);
router.post('/testeando', UserController.testeando);

module.exports = router;
