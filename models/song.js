'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var SongSchema = schema({
    number: Number,
    name: String,
    duration: String,
    file: String,
    // PERMITE GUARDAR EL ObjectId de otro objeto 
    // Y tambien permite guardar toda la informacion de ese objeto
    album: {type: schema.ObjectId, ref: 'Album'}
});

module.exports = mongoose.model('Song', SongSchema);