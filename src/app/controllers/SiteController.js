const Movie = require('../models/Movie');

class SiteController {
    // [GET] /
    index(req, res) {
        // res.render('home');
        Movie.find({})
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
