'use strict' //Activamos el modo estricto, el cual nos permite usar ciertas mejoras del lenguaje de JS

var mongoose = require('mongoose'); //Requerir o cargar la libreria o modulo de mongoose
var app = require('./app'); //Cargamos toda la configuracion del fichero app
var port = process.env.PORT || 3999; //Indicamos el puerto de mi API, si hay una variable de entorno configurado en el servidor sino toma 3999

mongoose.set('strictQuery', false);
mongoose.Promise = global.Promise; //Nos permite trabajar con promesas
mongoose.connect('mongodb://127.0.0.1:27017/api_rest_node', { useNewUrlParser: true, useUnifiedTopology: true }) //Configuramos la conexion a MongoDB, useNewUrlParser sirve para que la conexion se realize de mejor manera y tener nuevas funcionalidades activas dentro de MongoDB
    .then(() => { //Esto es posible por que habilitamos promesas
        console.log('La conexión a la base de datos de MongoDB se realizo correctamente');

        //Crear el servidor
        app.listen(port, () => { //app es el objeto de express, le decimos que escuche en el puerto configurado
            console.log(`El servidor http://127.0.0.1:${port} esta funcionando`)
        });
    })
    .catch((error) => {
        console.log(error)
    })
