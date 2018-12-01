var express = require('express');
var path = require('path');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var photoRouter = require('./routes/photos');

var app = express();
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const config = require('./db');

;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );

  app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//mongoose.connect('mongodb://localhost:27017/Album');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/photos', photoRouter);

module.exports = app;
