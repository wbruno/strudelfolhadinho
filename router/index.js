module.exports = function(express) {
  var router    = express.Router();
    http        = require('http'),
    seo         = require('./seo').seo,
    mail        = require('./mail'),
    geo         = require('./geo'),
    moment      = require('moment'),
    redirect404 = require('./redirect404').redirect;

  /**
   * Pages
   */
  router.get('/', function(req, res) {
    res.render('index', seo.index);
  });
  router.get('/index.html', function(req, res) {
    res.render('index', seo.index);
  });
  router.get('/como-e-feito.html', function(req, res) {
    res.render('como-e-feito', seo.como);
  });
  router.get('/onde-comprar.html', function(req, res) {
    res.render('onde-comprar', seo.onde);
  });
  router.get('/cardapio.html', function(req, res) {
    res.render('cardapio', seo.cardapio);
  });
  router.get('/strudel-de-maca.html', function(req, res) {
    res.render('strudel-de-maca', seo.maca);
  });
  router.get('/strudel-de-doce-de-leite.html', function(req, res) {
    res.render('strudel-de-doce-de-leite', seo.leite);
  });
  router.get('/strudel-de-banana.html', function(req, res) {
    res.render('strudel-de-banana', seo.banana);
  });
  router.get('/strudel-de-frango-com-catupiry.html', function(req, res) {
    res.render('strudel-de-frango-com-catupiry', seo.frango);
  });
  router.get('/strudel-de-palmito.html', function(req, res) {
    res.render('strudel-de-palmito', seo.palmito);
  });
  router.get('/strudel-de-bacalhau.html', function(req, res) {
    res.render('strudel-de-bacalhau', seo.bacalhau);
  });
  router.get('/strudel-de-chocolate.html', function(req, res) {
    res.render('strudel-de-chocolate', seo.chocolate);
  });
  router.get('/strudel-de-uva-rosada.html', function(req, res) {
    res.render('strudel-de-uva-rosada', seo.uvarosada);
  });
  router.get('/apfelstrudel.html', function(req, res) {
    res.render('apfelstrudel', seo.apfelstrudel);
  });
  router.get('/mini-strudel.html', function(req, res) {
    res.render('mini-strudel', seo.mini);
  });

  redirect404.forEach(function(each){
    router.get(each.from, function(req, res){
      res.redirect(301, each.to);
    });
  });

  router.get('/telephone', function(req, res) {
    var now = moment(),
        until = moment('11:59am', 'h:mma');

    res.json({
      now: now,
      until: until,
      before: now.isBefore(until),
      telephone: now.isBefore(until) ? '(11) 3782-2391' : '(11) 9 6309-9227'
    });
  });

  router.get('/geo/:pos', geo.locate);

  router.get('/blog/?*', function(req, res) {
    res.redirect(301, '/index.html');
  });
  router.post('/', mail.send);

  return router;
};
