'use strict' //Activamos el modo estricto, el cual nos permite usar ciertas mejoras del lenguaje de JS

var mongoose = require('mongoose'); //Requerir o cargar la libreria o modulo de mongoose
var Schema = mongoose.Schema; //Creamos la variable Schema, permitira crear esquemas de mongoose y definir todas las propiedades que tendra la clase o el esquema en si

// MODELO DE USER
var UserSchema = Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    image: String,
    role: String
});

module.exports = mongoose.model('User', UserSchema); //Exportar el fichero o modulo, esto para que sea exportado y luego podamos requerirlo o importarlo como un modulo de Node en cualquier otro archivo, mongoose.model es un metodo que nos permite exportar el modelo
                                // Creara la coleccion de datos
                                // lowercase y pluralizar el nombre
                                // La coleccion se llamara users -> documentos(schema)
                                // Dentro de la coleccion habra documentos con el esquema indicado en este modelo
