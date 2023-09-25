const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const port = 3004;
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');

const route = require('./routes');

const db = require('./config/db');

// Connect to DB
db.connect();

// Template Engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);

app.set('view engine', 'hbs');
app.set('views', 'src/resources/views');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Method Override
app.use(methodOverride('_method'));

// HTTP Logger
app.use(morgan('combined'));

// Route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
