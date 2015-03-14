var app     = require('../app'),
    request = require('supertest'),
    assert  = require('assert');

describe('Routes', function() {
  it('Not Found', function(done) {
    request(app)
      .get('/notfound')
      .expect(404)
      .expect('content-type', 'text/html; charset=utf-8', done);
  });

  it('Geo', function(done) {
    request(app)
      .get('/geo/-23.602504999999997,-46.7883278')
      .expect(200)
      .expect('content-type', 'application/json')
      .end(function(err, res) {
        assert.deepEqual(res.body, { address: 'Rua Padre Jácome de Queirós', cep: '05570-060' });
        done();
      });
  });

  it('Moved Permanently', function(done) {
    request(app)
      .get('/apfelstrdl')
      .expect(301)
      .end(function(err, res) {
        assert.equal(res.header.location, '/apfelstrudel.html');
        done();
      })
  });

  it('Moved Permanently GET /blog/?*', function(done) {
    request(app)
      .get('/blog/foobar')
      .expect(301)
      .end(function(err, res) {
        assert.equal(res.header.location, '/index.html');
        done();
      })
  });
}); //describe


