const express = require('express');
const router = express.Router();
const actorsAPIController = require('../../controllers/api/actorsAPIController');

//Rutas
//Listado de todos los actores
router.get('/', actorsAPIController.list);
//Detalle del actor
router.get('/:id', actorsAPIController.detail);
//En que peliculas trabajo el actor con id tal
router.get('/:id/movies', actorsAPIController.actorMovies);

//Agregar un actor
router.post('/create', actorsAPIController.create);
//Modificar un actor
router.put('/update/:id', actorsAPIController.update);
//Eliminar un actor
router.delete('/delete/:id', actorsAPIController.destroy);

module.exports = router;