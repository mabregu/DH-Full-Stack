const express = require('express');
const router = express.Router();
const moviesAPIController = require('../../controllers/api/moviesAPIController');


// Listado de todos los movies
router.get('/', moviesAPIController.list);
// Detalle del movieo
router.get('/:id', moviesAPIController.detail);
// Crear movie
router.post('/', moviesAPIController.create);
// Actualizar movie
router.put('/:id', moviesAPIController.update);
// Eliminar movie
router.delete('/:id', moviesAPIController.destroy);

module.exports = router;