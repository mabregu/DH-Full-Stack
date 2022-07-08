const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

// Route to get all products
router.get('/', productsController.getAllProducts);

// Route create a new product
router.get('/create', productsController.createProduct);
router.post('/', productsController.storeProduct);

// Route to get a product by id
router.get('/:id', productsController.getProductById);

// Route edit a product
router.get('/edit/:id', productsController.editProduct);
router.put('/:id', productsController.updateProduct);

// Route to delete a product
router.delete('/:id', productsController.deleteProduct);

module.exports = router;