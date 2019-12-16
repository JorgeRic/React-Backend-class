'use strict';
const express = require('express');
const router = express.Router();
const Alumno = require('../models/Alumno');

router.get('/alumnos', async (req, res, next) => {
  // Obtenemos la lista de la bd
  try {
    const listOfAlumnos = await Alumno.find();
    console.log(router.stack);
    res.status(200).json({ listOfAlumnos });
  } catch (error) {
    next(error);
  }
});

router.get('/alumnos/:id/detail', async (req, res, next) => {
  const { id } = req.params;
  try {
    const detail = await Alumno.findById(id);
    res.status(200).json(detail);
  } catch (error) {
    next(error);
  }
});

router.post('/alumnos/new', async (req, res, next) => {
  try {
    const newAlumno = req.body;
    const createdAlumno = await Alumno.create(newAlumno);
    res.status(200).json(createdAlumno);
  } catch (error) {
    next(error);
  }
});

router.post('/alumnos/search', async (req, res, next) => {
  try {
    const query = {};
    for (const key in req.body) {
      if (req.body[key]) {
        query[key] = ['age'].includes(key) ? { $lte: req.body[key] } : req.body[key];
      }
    }

    const refer = await Alumno.find(query);
    res.status(200).json(refer);
  } catch (error) {
    next(error);
  }
});

router.put('/alumnos/:id/updated', async (req, res, next) => {
  // Modificamos un elemento de la bd
  try {
    const { id } = req.params;
    const updatedAlumno = req.body;
    const updated = await Alumno.findByIdAndUpdate(id, updatedAlumno, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
});

router.delete('/alumnos/:id/delete', async (req, res, next) => {
  const { id } = req.params;
  try {
    await Alumno.findByIdAndDelete(id);
    res.status(200).json({ message: 'Alumno eliminado de la lista' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
