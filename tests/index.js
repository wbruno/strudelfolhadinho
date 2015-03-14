var app     = require('../app'),
    request = require('supertest'),
    assert  = require('assert');

describe('Routes', function(){

  it('Index', function(done){
    request(app)
      .get('/')
      .expect(200)
      .expect('content-type', 'text/html; charset=utf-8', done);
  });

}); //describe


