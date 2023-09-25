const Movie = require('../models/Movie');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class MovieController {
    // [GET] /movies/:slug
    show(req, res, next) {
        Movie.findOne({ slug: req.params.slug })
            .then((movie) => res.render('movies/show', { movie: mongooseToObject(movie) }))
            .catch(next);
    }

    // [GET] /movies/create
    create(req, res, next) {
        res.render('movies/create');
    }

    // [GET] /movies/:id/edit
    edit(req, res, next) {
        Movie.findById(req.params.id)
            .then((movie) => {
                res.render('movies/edit', {
                    movie: mongooseToObject(movie),
                });
            })
            .catch(next);
    }

    // [PUT] /movies/:id
    update(req, res, next) {
        Movie.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/movies'))
            .catch(next);
    }

    // [POST] /movies/store
    store(req, res, next) {
        const movie = new Movie(req.body);
        movie.save().then(() => res.redirect(`/`));
    }
}

module.exports = new MovieController();
