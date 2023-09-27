const Movie = require('../models/Movie');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /stored/movies
    storedMovies(req, res, next) {
        Movie.find()
            .then((movies) =>
                res.render('me/stored-movies', {
                    movies: multipleMongooseToObject(movies),
                }),
            )
            .catch(next);
    }

    // [POST] /stored/blogs
    storedBlogs(req, res, next) {
        res.render('me/stored-blogs');
    }

    // [GET] /trash/movies
    trashMovies(req, res, next) {
        Movie.findDeleted({})
            .then((movies) => res.render('me/trash-movies', {
                movies: multipleMongooseToObject(movies)
            }))
            .catch(next)  
    }
}

module.exports = new MeController();
