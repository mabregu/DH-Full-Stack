const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


//Aqui tienen una forma de llamar a cada uno de los modelos
// const {Movies,Genres,Actor} = require('../database/models');

//Aquí tienen otra forma de llamar a los modelos creados
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;


const moviesController = {
    'list': (req, res) => {
        db.Movie.findAll({
                order: [
                    ['id', 'DESC']
                ],
            })
            .then(movies => {
                res.render('moviesList.ejs', {movies})
            })
        ;
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then(movie => {
                res.render('moviesDetail.ejs', {movie});
            });
    },
    'new': (req, res) => {
        db.Movie.findAll({
            order : [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', {movies});
            });
    },
    'recomended': (req, res) => {
        db.Movie.findAll({
            where: {
                rating: {[db.Sequelize.Op.gte] : 8}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', {movies});
            });
    },
    //Aqui dispongo las rutas para trabajar con el CRUD
    add: function (req, res) {
        Genres.findAll()
            .then(function (genres) {
                res.render('moviesAdd.ejs', {
                    allGenres: genres
                });
            })
            .catch(function (error) {
                console.log("Sin conexion", error);
            })
        ;
    },
    create: function (req,res) {
        // return res.json({
        //     params: req.body// esto me llega del formulario
        // });
        Movies
            .create({
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id,
            })
            .then(function (movie) {
                res.redirect('/movies');
            })
            .catch(function (error) {
                console.log("Sin conexion", error);
            })
        ;

    },
    edit: async function(req,res) {
        let movieId = req.params.id;
        let genres = await Genres.findAll(); // espera a tener los generos
        let movie = Movies.findByPk(movieId, {
            include: ['genre']
        });

        movie
            .then(function (movie) {
                return res.render('moviesEdit.ejs', { 
                    Movie: movie,
                    allGenres: genres
                });
            })
        ;
    },
    update: function (req,res) {
        let movieId = req.params.id;

        Movies
            .update({
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id,
            }, {
                where: {
                    id: movieId
                }
            })
            .then(function (movie) {
                res.redirect('/movies');
            })
        ;
        
    },
    delete: function (req,res) {
        let movieId = req.params.id;
        let movie = Movies.findByPk(movieId);
        movie
            .then(function (movie) {
                return res.render('moviesDelete.ejs', {
                    Movie: movie
                });
            })
        ;
    },
    destroy: function (req,res) {
        let movieId = req.params.id;

        Movies
            .destroy({
                where: {
                    id: movieId
                }
            })
            .then(() => {
                res.redirect('/movies');
            })
        ;
    }
}

module.exports = moviesController;