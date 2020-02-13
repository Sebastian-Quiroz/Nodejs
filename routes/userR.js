'use strict'

var express = require('express');
var userController = require('../controllers/userC');

var api = express.Router();

api.get('/controller', userController.pruebas);


module.exports = api;