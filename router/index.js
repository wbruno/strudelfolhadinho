module.exports = function(express) {
  var router    = express.Router();
    seo         = require('./seo').seo,
    mail        = require('./mail'),
    http        = require('http'),
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

  router.get('/geo/:pos', function(req, res) {
    var pos = encodeURI(req.params.pos),
      options = {
        host: "maps.google.com",
        port: 80,
        path: "/maps/api/geocode/json?address=" + pos + "&sensor=true"
      };


    var request = http.request(options, function (response) {
      var data = "";

      response.setEncoding('utf8');
      response.on('data', function (chunck) {
        data += chunck;
      });
      response.on('end', function(){
        res.writeHead(200, {'Content-Type': 'application/json'});

        try {
          var json = JSON.parse(data),
            obj = json.results[0],
            ret = {
              address: obj.formatted_address.replace(/([^,]+)(.*)/, '$1'),
              cep: obj.address_components[obj.address_components.length - 1].long_name
            };

          res.write(JSON.stringify(ret));

        } catch(e) {
          res.write(JSON.stringify({ address: "not_found" }));
        }
        res.end();
      });

    });
    request.on('error', function(e) {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify({ address: "not_found" }));
      res.end();
    });

    request.end();
  });
  router.get('/blog/?*', function(req, res) {
    res.redirect(301, '/index.html');
  });
  router.get('*', function(req, res) {
    res.status(404).render('404');
  });
  router.post('/', function(req, res) {
    mail.send(req, res);
  });

  return router;
};
