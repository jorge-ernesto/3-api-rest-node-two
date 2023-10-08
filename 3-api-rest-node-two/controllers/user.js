'use strict' //Activamos el modo estricto, el cual nos permite usar ciertas mejoras del lenguaje de JS

var controller = {

    probando: function (req, res) {
        return res.status(200).send({
            message: "Yo soy el metodo PROBANDO"
        });
    },

    testeando: function (req, res) {
        return res.status(200).send({
            message: "Yo soy el metodo TESTEANDO"
        });
    },

    save: function (req, res) {
    }

};

module.exports = controller;
