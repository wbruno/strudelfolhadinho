require('newrelic');
var express = require('express'),
    hbs = require('hbs'),
    router = require('./router').router,
    products = require('./products'),
    app = express(),
    redirect404 = require('./redirect404').redirect;



hbs.registerPartials(__dirname + '/views/partials');
hbs.registerPartial('phoneNumber', '(11) 9 6309-9227');


app.locals(products);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.engine('html', hbs.__express);


app.use(express.favicon(__dirname + '/public/favicon.ico'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.compress());
app.use(express.static(__dirname + '/public', { maxAge: 86400000 }));
app.use(app.router);


/**
 * Pages
 */
app.get('/', router.index);
app.get('/index.html', router.index);
app.get('/como-e-feito.html', router.como);
app.get('/onde-comprar.html', router.onde);
app.get('/cardapio.html', router.cardapio);
app.get('/strudel-de-maca.html', router.maca);
app.get('/strudel-de-doce-de-leite.html', router.leite);
app.get('/strudel-de-banana.html', router.banana);
app.get('/strudel-de-frango-com-catupiry.html', router.frango);
app.get('/strudel-de-palmito.html', router.palmito);
app.get('/strudel-de-bacalhau.html', router.bacalhau);
app.get('/strudel-de-chocolate.html', router.chocolate);
app.get('/apfelstrudel.html', router.apfelstrudel);
app.get('/mini-strudel.html', router.mini);




redirect404.forEach(function(each){
    app.get(each.from, function(req, res){
        res.redirect(301, each.to);
    });
});

app.get('/geo/:pos', router.geo);
app.get('/blog/?*', router.blog);
app.get('*', router.notFound);


app.post('/', router.order);


app.listen(3002);
