const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const mainRoutes = require('./routes/mainRoutes');

app.use(express.static('public'));

app.use('/', mainRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
});