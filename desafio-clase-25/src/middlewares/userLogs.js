const fs = require('fs');
const path = require('path');

const logPath = path.resolve(__dirname, '../logs/userLogs.txt');
//const log = fs.readFileSync(logPath, 'utf8');

function userLogs(req, res, next) {
    fs.appendFileSync(
        logPath, 
        `El usuario ingreso a la ruta: ${req.url} en el momento: ${new Date()} \n`
    );

    next();
}

module.exports = userLogs;