const newsRouter = require('./news');
const siteRouter = require('./site');
const moviesRouter = require('./movies');
const meRouter = require('./me');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/movies', moviesRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter);
}

module.exports = route;
