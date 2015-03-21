var config = require('config');
/* istanbul ignore if */
if (config.get('newrelic')) {
  require('newrelic');
}

var express         = require('express'),
    methodOverride  = require('method-override'),
    bodyParser      = require('body-parser'),
    hbs             = require('hbs'),

    router          = require('./router')(express),
    products        = require('./products'),

    app             = express(),
    fs              = require('fs');

app.locals.products = products.products;
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.engine('html', hbs.__express);


hbs.registerPartial('header', fs.readFileSync(__dirname + '/views/partials/header.html', 'utf8'));
hbs.registerPartial('midias', fs.readFileSync(__dirname + '/views/partials/midias.html', 'utf8'));
hbs.registerPartial('adcast', fs.readFileSync(__dirname + '/views/partials/adcast.html', 'utf8'));
hbs.registerPartial('footer', fs.readFileSync(__dirname + '/views/partials/footer.html', 'utf8'));
hbs.registerPartial('badge', fs.readFileSync(__dirname + '/views/partials/badge.html', 'utf8'));
hbs.registerPartial('contact_form', fs.readFileSync(__dirname + '/views/partials/contact-form.html', 'utf8'));
hbs.registerPartial('conversion', fs.readFileSync(__dirname + '/views/partials/conversion.html', 'utf8'));

hbs.registerPartial('phoneNumber', '(11) 9 6309-9227');


/* istanbul ignore else */
if (app.get('env') === 'development'){
  app.use(require('serve-static')('public/'));
}

app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', router);


module.exports = app;

