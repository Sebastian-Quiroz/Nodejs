'use strict'

var mongoose = require('mongoose');
// carga el Fichero que contendra las rutas,
var app = require('./app'); 
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://127.0.0.1:27017/curso_mean2', (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log(`LA CONEXION A LA BASE DE DATOS ESTA CORRIENDO DE MANERA CORRECTA...`)
        // Activacion del puerto en escucha
        app.listen(port, function() {
            console.log(`Servidor de API Rest de musica escucando en el servidor http://localhost:${port}`)
        });
    }
});