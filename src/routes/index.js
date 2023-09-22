const newsRouter = require('./news');

const route = (app) => {
    app.use('/news', newsRouter)
    
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.get('/search', (req, res) => {
        console.log(req.query.q);
        res.render('search');
    });

    app.post('/search', (req, res) => {
        console.log(req.body);
        res.render('search');
    });
}

module.exports = route
