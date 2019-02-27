const { server } = require('../../server');
const models = require('../../models');

describe('POST /form route', () => {
  beforeAll(async () => {
    await models.form.truncate();
  });
  afterEach(async () => {
    await models.form.truncate();
  });
  it('should add data from payload to form table', async () => {
    const options = {
      method: 'POST',
      url: '/form',
      payload: {
        title: 'test Form from post form route',
        fields: [
          'X-Field',
          'Y-Field',
        ],
      },
    };

    const response = await server.inject(options);
    expect(response.result[0]).toMatchObject(options.payload);
    expect(await models.form.count()).toEqual(1);
  });
});
