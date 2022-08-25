const express = require('express');
const router = express.Router();
const genresAPIController = require('../../controllers/api/genresAPIController');

//Rutas
//Listado de todos los generos
router.get('/', genresAPIController.list);
//Detalle del genero
router.get('/:id', genresAPIController.detail);
//Películas por genero
router.get('/:id/movies', genresAPIController.genreMovies);

module.exports = router;