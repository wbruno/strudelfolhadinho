var seo = require('./seo').seo,
    mail = require('./mail');

exports.router = {
    index: function(req, res){
        res.render('index', seo.index);
    },
    como: function(req, res){
        res.render('como-e-feito', seo.como);
    },
    onde: function(req, res){
        res.render('onde-comprar', seo.onde);
    },
    cardapio: function(req, res){
        res.render('cardapio', seo.cardapio);
    },
    maca: function(req, res){
        res.render('strudel-de-maca', seo.maca);
    },
    leite: function(req, res){
        res.render('strudel-de-doce-de-leite', seo.leite);
    },
    banana: function(req, res){
        res.render('strudel-de-banana', seo.banana);
    },
    frango: function(req, res){
        res.render('strudel-de-frango-com-catupiry', seo.frango);
    },
    apfelstrudel: function(req, res){
        res.render('apfelstrudel', seo.apfelstrudel);
    },
    notFound: function(req, res){
        res.render('404');
    },
    order: function(req, res) {
        mail.send(req, res);
    }
};
