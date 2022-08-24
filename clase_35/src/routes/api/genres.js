const express = require('express');
const router = express.Router();
const genresAPIController = require('../../controllers/api/genresAPIController')

// Listado de todos los generos
router.get('/', genresAPIController.list);
// Detalle del genero
router.get('/:id', genresAPIController.detail);

module.exports = router;