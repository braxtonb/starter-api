import request from 'supertest';
import app from '../src/server';

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true);
  });
});

describe('/ Test', () => {
  const HELLO_WORLD_PATH = '/';

  it(`should GET ${HELLO_WORLD_PATH}`, async () => {
    const response = await request(app).get(HELLO_WORLD_PATH);

    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello world!');
  });
});