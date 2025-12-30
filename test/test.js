const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should return 200', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

