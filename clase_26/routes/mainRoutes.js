const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');


router.get('/', mainController.index);
router.get('/detalle/:id', mainController.detalle);

router.get('/login',  mainController.login);
router.post('/login', mainController.processLogin);

router.get('/logout',  mainController.logout);

router.get('/register', mainController.register);
router.post('/register', mainController.processRegister);

module.exports = router;