var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var express = require('express');
var passport = require('passport');
// CORS for Access-Controll-Allow
var cors = require('cors');
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
const config = require('./config');
// connect to the database and load models
require('./models').connect(config.dbUri);

// load passport strategies
var localSignupStrategy = require('./passport/local-signup');
var localLoginStrategy = require('./passport/local-login');

var index = require('./routes/index');
var users = require('./routes/users');
var products = require('./routes/products');
var auth = require('./routes/auth');

var app = express();
app.use(cors());
app.use(allowCrossDomain);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
var authCheckMiddleware = require('./middleware/auth-check');

// TODO check if this is a admin user
// restrict access on modifying database without login
// products get should be accessible without login
app.post('/products', authCheckMiddleware);
app.put('/products/:id', authCheckMiddleware);
app.delete('/products/:id', authCheckMiddleware);

app.use('/', index);
app.use('/users', users);
app.use('/products', products);
app.use('/auth', auth);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
