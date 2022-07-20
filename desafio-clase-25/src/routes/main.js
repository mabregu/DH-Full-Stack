const express = require('express');
const router = express.Router();

const controller = require('../controllers/main');

const middAdmin = require('../middlewares/admin');

router.get('/', controller.index);
router.get('/admin', middAdmin, controller.admin);

module.exports = router;