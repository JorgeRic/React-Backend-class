'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alumnoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['estudiante', 'profesor']
  },
  description: {
    type: String
  },
  course: {
    type: String,
    required: true,
    enum: ['primero', 'segundo', 'tercero']
  }

}, {
  timestamps: true
});

const Alumno = mongoose.model('Alumno', alumnoSchema);

module.exports = Alumno;
