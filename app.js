var config = require('config');
/* istanbul ignore if */
if (config.get('newrelic')) {
  require('newrelic');
}

var express         = require('express'),
    methodOverride  = require('method-override'),
    bodyParser      = require('body-parser'),
    nunjucks        = require('nunjucks'),
    compression     = require('compression'),

    router          = require('./router')(express),
    products        = require('./products'),

    app             = express();


app.locals.products = products.products;
app.locals.phoneNumber = '(11) 9 9305 1486';
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  tags: ''
});


app.use(compression());
app.use(require('serve-static')('public/'));

app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', router);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).render('404', {
    title: 'Página não encontrada'
  });
});

app.use(function(err, req, res, next) {
  console.log(err);
  res.status(err.status || 500).render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;

