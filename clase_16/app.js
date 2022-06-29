const express = require('express');
const app = express();
app.use(express.static('public'));

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || 'localhost';

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.listen(PORT, ()=>{
    console.log(`Server running at http://${HOST}:${PORT}/`);
});