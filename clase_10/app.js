const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3030;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});

// babbage
app.get('/babbage', (req, res) => {
    res.sendFile(path.join(__dirname, './views/babbage.html'));
});

// clarke
app.get('/clarke', (req, res) => {
    res.sendFile(path.join(__dirname, './views/clarke.html'));
});

// berners-lee
app.get('/berners-lee', (req, res) => {
    res.sendFile(path.join(__dirname, './views/berners-lee.html'));
});

// clarke
app.get('/clarke', (req, res) => {
    res.sendFile(path.join(__dirname, './views/clarke.html'));
});

// hamilton
app.get('/hamilton', (req, res) => {
    res.sendFile(path.join(__dirname, './views/hamilton.html'));
});

// turing
app.get('/turing', (req, res) => {
    res.sendFile(path.join(__dirname, './views/turing.html'));
});

// hamilton
app.get('/hamilton', (req, res) => {
    res.sendFile(path.join(__dirname, './views/hamilton.html'));
});

// lovelace
app.get('/lovelace', (req, res) => {
    res.sendFile(path.join(__dirname, './views/lovelace.html'));
});

// 404
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './views/404.html'));
});

app.listen(PORT, () => {
    console.log('http://localhost:'+PORT);
});