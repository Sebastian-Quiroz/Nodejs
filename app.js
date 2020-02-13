'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar rutas

/**
 * Permite convertir a objetos JSON los datos que nos llegan 
 * por las peticiones HTTP
 */
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Configurar cabeceras http

// rutas bases
app.get('/pruebas', function(req, res){
    res.status(200).send({message: 'Bienvenidos a esta ruta de prueba'});
});
/**
 * Modulos que pueden ser usados por quien use la clase app.js
 */
module.exports = app;