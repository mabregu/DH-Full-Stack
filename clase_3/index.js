const fs = require('fs');
const moment = require('moment');

const superHeroes = require('./superHeroes');
const series = require('./series');

let peliculas = fs.readFileSync('./peliculas.txt', 'utf8');

console.log("leyendo el archivo peliculas.txt", peliculas);

console.log(moment().format('YYYY-MM-DD HH:mm:ss'));

superHeroes.forEach(superHero => {
    console.log(superHero.sayHello());
});

series.map(serie => {
    console.log(serie.name);
});