const martin = require('./martin_abregu');
const zodiac = require('zodiac-signs')('es');

console.log(
    `Hola, soy ${martin[0]}, disfruto de ${martin[1]} y vivo en ${martin[2]}`
);

console.log(zodiac.getSignByDate());
console.log(zodiac.getSignByDate({ day: 15, month: 3 }));