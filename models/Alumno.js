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
    enum: ['man', 'woman']
  },
  description: {
    type: String
  }

}, {
  timestamps: true
});

const Alumno = mongoose.model('Alumno', alumnoSchema);

module.exports = Alumno;
