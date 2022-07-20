const express = require('express');
const router = express.Router();

const upload = require('../middlewares/multer');
const productsController = require('../controllers/productsController');
const { body } = require('express-validator');
const validate = [
    body('titulo')
        .notEmpty().withMessage('El titulo es requerido'),
    body('price')
        .notEmpty().withMessage('El precio es requerido'),
    body('image')
        .custom((value, { req }) => {
            if (req.files.length === 0) {
                return false;
            }
            return true;
        }
    ).withMessage('Debe subir una imagen')
];

// Route to get all products
router.get('/', productsController.getAllProducts);

// Route create a new product
router.get('/create', productsController.createProduct);
//router.post('/', upload.single('image'), productsController.storeProduct);
router.post('/', upload.array('image', 3), validate, productsController.storeProduct);

// Route to get a product by id
router.get('/:id', productsController.getProductById);

// Route edit a product
router.get('/edit/:id', productsController.editProduct);
router.put('/:id', productsController.updateProduct);

// Route to delete a product
router.delete('/:id', productsController.deleteProduct);

module.exports = router;