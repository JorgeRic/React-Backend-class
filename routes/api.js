'use strict';
const express = require('express');
const router = express.Router();
const Alumno = require('../models/Alumno');

router.get('/alumnos', async (req, res, next) => {
  // Obtenemos la lista de la bd
  try {
    const listOfAlumnos = await Alumno.find();
    res.status(200).json({ listOfAlumnos });
  } catch (error) {
    next(error);
  }
});

router.post('/alumnos/new', async (req, res, next) => {
  // Creamos nuevos datos
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
    // for (const key in req.body) {
    //   if (req.body[key]) {
    //     query[key] = ['precio'].includes(key) ? { $lte: req.body[key] } : req.body[key];
    //   }
    // }

    const refer = await Alumno.find(query);
    res.status(200).json(refer);
  } catch (error) {
    next(error);
  }
});

// router.put('/apps/:id/update', async (req, res, next) => {
//   // Modificamos un elemento de la bd
//   try {
//     const { id } = req.params;
//     const appUpdated = req.body;
//     const updated = await Application.findByIdAndUpdate(id, appUpdated, { new: true });
//     res.status(200).json(updated);
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete('/apps/:id/delete', async (req, res, next) => {
//   // eliminamos unelemento de la bd
//   try {
//     const { id } = req.params;
//     await Application.findByIdAndDelete(id);
//     res.status(200).json({ message: 'app deleted' });
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
