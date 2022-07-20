let admins = [
    'Rocko',
    'Tincho',
    'Pepe',
    'LosPibes'
];

function admin(req, res, next) {
    if (admins.includes(req.query.user)) {
        next();
    } else {
        res.send('No tienes permisos');
    }
}

module.exports = admin;