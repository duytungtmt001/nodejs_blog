const Movie = require('../models/Movie');
const {multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')

class SiteController {
    // [GET] /
    index(req, res, next) {
        // res.render('home');
        Movie.find({})
            .then(movies => {
                res.render('home', {
                    movies: multipleMongooseToObject(movies),
                });
            })
            .catch(next);                           
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
