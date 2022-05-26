const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/calse', (req, res) => {
    //res.send('Hello Calse!');
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(PORT, () => {
    console.log('http://localhost:', PORT);
});