const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

const PORT = process.env.PORT || 4000;
const mainRoutes = require('./routes/mainRoutes');
const productsRoutes = require('./routes/productsRoutes');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// Routes
app.use('/', mainRoutes);

// http://localhost:4000/products
app.use('/products', productsRoutes);

// configuarcion de public static
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log("Server on port http://localhost:" + PORT);
});