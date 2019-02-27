const { server } = require('../../server');

describe('ping route', () => {
  it('should return pong', async () => {
    const options = {
      method: 'GET',
      url: '/ping',
    };
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
    expect(response.result).toEqual('pong');
  });
});
