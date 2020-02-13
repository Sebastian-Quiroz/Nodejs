'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var AlbumSchema = schema({
    title: String,
    description: String,
    year: Number,
    image: String,
    // PERMITE GUARDAR EL ObjectId de otro objeto
    // Y tambien permite guardar toda la informacion de ese objeto
    artist: { type: schema.ObjectId, ref: 'Artist' }
});

module.exports = mongoose.model('Album', AlbumSchema);