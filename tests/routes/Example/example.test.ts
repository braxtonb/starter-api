import request from 'supertest';
import app from '../../../src/server';

describe('/api/example Test', () => {
  const EXAMPLE_PATH = '/api/example';
  const data = ['first', 'second', 'third'];

  it(`should GET ${EXAMPLE_PATH}`, async () => {
    const response = await request(app).get(EXAMPLE_PATH);

    expect(response.status).toBe(200);
    expect(response.body.data).toStrictEqual<string[]>(data);
  });

  const errorExample = {
    errorId: 'error',
  };
  const EXAMPLE_ERRORID_500_ERROR_PATH = `/api/example/${errorExample.errorId}`;

  it(`should GET ${EXAMPLE_ERRORID_500_ERROR_PATH}`, async () => {
    const response = await request(app).get(EXAMPLE_ERRORID_500_ERROR_PATH);

    expect(response.status).toBe(500);
    expect(response.body.message).toBe(`Error retrieving example ${errorExample.errorId}`)
    expect(response.body.data).toStrictEqual([]);
  });
});