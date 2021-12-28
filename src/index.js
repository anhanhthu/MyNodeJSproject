const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const url = require('url');

const { engine } = require('express-handlebars');

// DINH TUYEN ROUTE
const route = require('./routes/');

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

//Middleware ho tro cho url (du lieu cho form)
//Xu ly du lieu tu form
app.use(
    express.urlencoded({
        extended: true,
    }),
);
//Xu ly du lieu tu javascript
app.use(express.json());

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
