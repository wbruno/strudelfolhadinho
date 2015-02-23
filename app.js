require('newrelic');
var express     = require('express'),
  methodOverride  = require('method-override'),
  bodyParser    = require('body-parser'),
  hbs       = require('hbs'),

  router      = require('./router')(express),
  products    = require('./products'),

  app       = express();



hbs.registerPartials(__dirname + '/views/partials');
hbs.registerPartial('phoneNumber', '(11) 9 6309-9227');


app.locals.products = products.products;
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.engine('html', hbs.__express);

// use
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


var server = app.listen(3002, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s, env', host, port, app.get('env'));
});

