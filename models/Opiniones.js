'use strict'

const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const opinionesSchema = new Schema({
  nombre: {
    type: String,
    required:true
  },
  mail: {
    type: String

  },
  mensaje: {
    type: String,
    required:true
  },
}, {
  timestamps: true
});

const Opiniones = mongoose.model('Opiniones', opinionesSchema);

module.exports = Opiniones;