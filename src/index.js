const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const port = 3004;
const morgan = require('morgan');
const path = require('path')

// Template Engine
app.engine('hbs', handlebars({
        extname: '.hbs',
    })
);

app.set('view engine', 'hbs');

app.set('views', 'src/resources/views');

app.use(express.static(path.join(__dirname, 'public')));

// HTTP Logger
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
