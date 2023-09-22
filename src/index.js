const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const port = 3004;
const morgan = require('morgan');
const path = require('path')

const route = require('./routes');

// Template Engine
app.engine('hbs', handlebars({
        extname: '.hbs',
    })
);

app.set('view engine', 'hbs');

app.set('views', 'src/resources/views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// HTTP Logger
app.use(morgan('combined'));

// Route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
