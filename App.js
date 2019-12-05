var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var config = require('./config/database');
var bodyParser = require('body-parser')
var session = require('express-session')
var validation = require('express-validator');

//mongobd
mongoose.connect(config.database);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongodb');
});

var app = express();

//body parse
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Express session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

  //massage express
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

//express validator
app.use(validation());

app.set('views' ,path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

var page = require('./models/pages');
var pages = require('./routers/pages');
var pagesadmin = require('./routers/admin_pages');

app.use('/', pages);

app.use('/admin', pagesadmin);

var port =3001;
app.listen(port, function() {
    console.log('server berjalan dengan port' + port);
});