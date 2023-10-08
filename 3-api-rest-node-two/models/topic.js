'use strict' //Activamos el modo estricto, el cual nos permite usar ciertas mejoras del lenguaje de JS

var mongoose = require('mongoose'); //Requerir o cargar la libreria o modulo de mongoose
var Schema = mongoose.Schema; //Creamos la variable Schema, permitira crear esquemas de mongoose y definir todas las propiedades que tendra la clase o el esquema en si

// MODELO DE COMMENT
var CommentSchema = new Schema({
    content: String,
    date: { type: Date, default: Date.now },
    user: { type: Schema.ObjectId, ref: 'User' },
});
var Comment = mongoose.model('Comment', CommentSchema); //Esto no se utilizara, pero si quisieramos exportarlo, se haria algo como esto

// MODELO DE TOPIC
var TopicSchema = Schema({
    title: String,
    content: String,
    code: String,
    lang: String,
    date: { type: Date, default: Date.now }, //Tipo Date, sino se especifica por defecto la fecha actual
    user: { type: Schema.ObjectId, ref: 'User' }, //Hara referencia al modelo User
    comments: [CommentSchema]
});

module.exports = mongoose.model('Topic', TopicSchema); //Exportar el fichero o modulo, esto para que sea exportado y luego podamos requerirlo o importarlo como un modulo de Node en cualquier otro archivo, mongoose.model es un metodo que nos permite exportar el modelo
                                // Creara la coleccion de datos
                                // lowercase y pluralizar el nombre
                                // La coleccion se llamara topics -> documentos(schema)
                                // Dentro de la coleccion habra documentos con el esquema indicado en este modelo
