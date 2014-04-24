var seo = require('./seo').seo,
    mail = require('./mail'),
    http = require('http');


exports.router = {
    index: function(req, res) {
        res.render('index', seo.index);
    },
    como: function(req, res) {
        res.render('como-e-feito', seo.como);
    },
    onde: function(req, res) {
        res.render('onde-comprar', seo.onde);
    },
    cardapio: function(req, res) {
        res.render('cardapio', seo.cardapio);
    },
    maca: function(req, res) {
        res.render('strudel-de-maca', seo.maca);
    },
    leite: function(req, res) {
        res.render('strudel-de-doce-de-leite', seo.leite);
    },
    banana: function(req, res) {
        res.render('strudel-de-banana', seo.banana);
    },
    frango: function(req, res) {
        res.render('strudel-de-frango-com-catupiry', seo.frango);
    },
    palmito: function(req, res) {
        res.render('strudel-de-palmito', seo.palmito);
    },
    apfelstrudel: function(req, res) {
        res.render('apfelstrudel', seo.apfelstrudel);
    },
    bacalhau: function(req, res) {
        res.render('strudel-de-bacalhau', seo.bacalhau);
    },
    chocolate: function(req, res) {
        res.render('strudel-de-chocolate', seo.chocolate);
    },
    mini: function(req, res) {
        res.render('mini-strudel', seo.mini);
    },
    geo: function(req, res) {
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
    },
    blog: function(req, res) {
        res.redirect(301, '/index.html');
    },
    notFound: function(req, res) {
        res.status(404);
        res.render('404');
    },
    order: function(req, res) {
        mail.send(req, res);
    }
};
