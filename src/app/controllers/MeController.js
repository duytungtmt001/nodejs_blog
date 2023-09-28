const Movie = require('../models/Movie');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /stored/movies
    storedMovies(req, res, next) {
        Promise.all([Movie.find(), Movie.countDocumentsWithDeleted({ deleted: true })])
            .then(([movies, count]) => {
                res.render('me/stored-movies', {
                    count,
                    movies: multipleMongooseToObject(movies)
                });
            })
            .catch(next)
        
    }

    // [POST] /stored/blogs
    storedBlogs(req, res, next) {
        res.render('me/stored-blogs');
    }

    // [GET] /trash/movies
    trashMovies(req, res, next) {
        Movie.findWithDeleted({deleted: true})
            .then((movies) => res.render('me/trash-movies', {
                movies: multipleMongooseToObject(movies)
            }))
            .catch(next)  
    }
}

module.exports = new MeController();
