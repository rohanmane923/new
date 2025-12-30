var request = require('supertest');
var app = require('../index');

describe('GET /', function () {
  it('should return 200', function (done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});
