const db = require('../../database/models');

const genresAPIController = {
    'list': (req, res) => {
        db.Genre.findAll() // Promise
            .then(genres => {
                return res.json({
                    code: 200,
                    msg: 'success',
                    data: genres
                });
            })
        ;

    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)// Promise
            .then(genre => {
                return res.json({
                    code: 200,
                    msg: 'success',
                    data: genre
                });
            })
        ;
    }
};

module.exports = genresAPIController;