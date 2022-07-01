const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;
const mainRoutes = require('./routes/mainRoutes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', mainRoutes);

// configuarcion de public static
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log("Server on port http://localhost:" + PORT);
});