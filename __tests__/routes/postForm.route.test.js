const { server } = require('../../server');
const models = require('../../models');

describe('POST /form route', () => {
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
  });
});

afterAll(async () => {
  await models.form.truncate();
  await models.sequelize.close();
});
