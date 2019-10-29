'use strict'

const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const viajeSchema = new Schema({
  titulo: {
    type: String,
    required: true,
    unique: true
  },
  precio: {
    type: String,
    required: true
  },
  fechaIda:{
    type: String
  },
  fechaVuelta: {
    type: String,
  },
  imagen: {
    type: String,
  },
  descripcion: {
    type: [String],
  },
  disponibles: {
    type: String,
  },
}, {
  timestamps: true
});

const Viaje = mongoose.model('Viaje', viajeSchema);

module.exports = Viaje;