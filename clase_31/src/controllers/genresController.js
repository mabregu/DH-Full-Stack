const db = require('../database/models');
const sequelize = db.sequelize;
const genresController = {
    'list': (req, res) => {
        db.Genre.findAll() // Promise
            .then(genres => {
                res.json({
                    'status': 'ok',
                    'data': genres
                });
            }).catch(error => {
                res.json({
                    'status': 'error',
                    'message': error
                });
            }).finally(() => {
                sequelize.close();
            })
        ;
    },
    'detail': (req, res) => {
        let name = req.params.name;
        db.Genre.findOne({
            where: {
                name
            }
        }) // Promise
            .then(genre => {
                res.json({
                    'status': 'ok',
                    'data': genre
                });
            }).catch(error => {
                res.json({
                    'status': 'error',
                    'message': error
                });
            }).finally(() => {
                sequelize.close();
            })
        ;
    }
};

module.exports = genresController;