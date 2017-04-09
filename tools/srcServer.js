import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import connection from '../src/database/Database';
import favicon from 'serve-favicon';
import open from 'open';
// routes
import collections from '../routes/collections';
import types from '../routes/collectionTypes';
import seeds from '../routes/seeds';


/* eslint-disable no-console */

const port = 3000;
const app = express();

// Database

app.use((req, res, next) => {
    req._user = {id: 1, name: 'maarten', email: 'collections@maartendev.me'};
    next();
});


// Express parsing
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// Webpack
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// Routes
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
app.use(express.static('public'));

app.use('/api/v1/collections', collections);
app.use('/api/v1/types', types);
app.use('/api/v1/seeds', seeds);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/js/index.html'));
});


app.listen(port, err => {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});