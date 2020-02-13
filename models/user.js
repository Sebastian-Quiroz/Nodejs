'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var UserSchema = schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    role: String,
    image: String
});
/**
 *  Exporta el modelo de usario creado
 * Indica el objeto que se va a crear que es 'User'
 * que a su vez usa como modelo el esquema creado de UserSchema
 */
module.exports = mongoose.model('User', UserSchema);