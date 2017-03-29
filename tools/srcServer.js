import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import promise from 'promise';

mongoose.connect(`mongodb://localhost:27017/mydashboard`);

mongoose.Promise = promise;

/* eslint-disable no-console */

const port = 3000;
const app = express();
const collections = require('../routes/collections');

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


app.use((req, res, next) => {
    req._db = mongoose;
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/collections', collections);


app.get('*', (req, res)  => {
    res.sendFile(path.join( __dirname, '../src/index.html'));
});


app.listen(port, err => {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});