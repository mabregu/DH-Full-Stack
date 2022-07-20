const fs = require('fs');
const path = require('path');
const productListPath = path.resolve(__dirname, '../data/products.json');
const productList = JSON.parse(fs.readFileSync(productListPath, 'utf8'));

const mainController = {
    index: (req, res) => {
        res.render("index", { menu: productList });
    },
    detalle: (req, res) => {
        let id = req.params.id;
        let plato = productList.find(product => product.id == id);

        res.render("detalleMenu", { plato });
    }
}

module.exports = mainController;