'use strict'

var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/curso_mean2', (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log(`LA CONEXION A LA BASE DE DATOS ESTA CORRIENDO DE MANERA CORRECTA...`)
    }
});