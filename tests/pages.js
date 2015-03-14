var app     = require('../app'),
    request = require('supertest'),
    assert  = require('assert');

describe('Pages', function() {
    it('Index GET /', function(done) {
      request(app)
        .get('/')
        .expect(200)
        .expect('content-type', 'text/html; charset=utf-8', done);
    });

    it('Index GET /index.html', function(done) {
      request(app)
        .get('/index.html')
        .expect(200)
        .expect('content-type', 'text/html; charset=utf-8', done);
    });

    it('GET /como-e-feito.html', function(done) {
      request(app)
        .get('/como-e-feito.html')
        .expect(200)
        .expect('content-type', 'text/html; charset=utf-8', done);
    });

    it('GET /onde-comprar.html', function(done) {
      request(app)
        .get('/onde-comprar.html')
        .expect(200)
        .expect('content-type', 'text/html; charset=utf-8', done);
    });

    it('GET /cardapio.html', function(done) {
      request(app)
        .get('/cardapio.html')
        .expect(200)
        .expect('content-type', 'text/html; charset=utf-8', done);
    });

    it('GET /strudel-de-maca.html', function(done) {
      request(app)
        .get('/strudel-de-maca.html')
        .expect(200)
        .expect('content-type', 'text/html; charset=utf-8', done);
    });

    it('GET /strudel-de-doce-de-leite.html', function(done) {
      request(app)
        .get('/strudel-de-doce-de-leite.html')
        .expect(200)
        .expect('content-type', 'text/html; charset=utf-8', done);
    });

    it('GET /strudel-de-banana.html', function(done) {
      request(app)
        .get('/strudel-de-banana.html')
        .expect(200)
        .expect('content-type', 'text/html; charset=utf-8', done);
    });

    it('GET /strudel-de-frango-com-catupiry.html', function(done) {
      request(app)
        .get('/strudel-de-frango-com-catupiry.html')
        .expect(200)
        .expect('content-type', 'text/html; charset=utf-8', done);
    });

    it('GET /strudel-de-palmito.html', function(done) {
      request(app)
        .get('/strudel-de-palmito.html')
        .expect(200)
        .expect('content-type', 'text/html; charset=utf-8', done);
    });

    it('GET /strudel-de-bacalhau.html', function(done) {
      request(app)
        .get('/strudel-de-bacalhau.html')
        .expect(200)
        .expect('content-type', 'text/html; charset=utf-8', done);
    });

    it('GET /strudel-de-chocolate.html', function(done) {
      request(app)
        .get('/strudel-de-chocolate.html')
        .expect(200)
        .expect('content-type', 'text/html; charset=utf-8', done);
    });

    it('GET /apfelstrudel.html', function(done) {
      request(app)
        .get('/apfelstrudel.html')
        .expect(200)
        .expect('content-type', 'text/html; charset=utf-8', done);
    });

    it('GET /mini-strudel.html', function(done) {
      request(app)
        .get('/mini-strudel.html')
        .expect(200)
        .expect('content-type', 'text/html; charset=utf-8', done);
    });
});
