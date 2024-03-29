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

    // [POST] /movies/store
    store(req, res, next) {
        const movie = new Movie(req.body);
        movie
            .save()
            .then(() => res.redirect(`/me/stored/movies`))
            .catch(next);
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

    // [DELETE] /movies/:id
    delete(req, res, next) {
        Movie.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /movies/:id/restore
    restore(req, res, next) {
        Movie.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /movies/:id/restore
    forceDelete(req, res, next) {
        Movie.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [POST] /movies/handle-form-actions
    handleFormActions(req, res, next) {
        switch(req.body.action) {
            case 'delete': 
                Movie.delete({ _id: { $in: req.body.movieIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default: 
                res.json({message: "Action is invalid"})
        }
    }
}

module.exports = new MovieController();
