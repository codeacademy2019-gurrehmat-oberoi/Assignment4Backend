const { server } = require('../../server');
const models = require('../../models');

describe('GET /forms route', () => {
  beforeAll(async () => {
    await models.form.truncate();
  });
  afterEach(async () => {
    await models.form.truncate();
  });
  it('should return all rows in forms table', async (done) => {
    const options = {
      method: 'GET',
      url: '/forms',
    };
    await models.form.addForm({ title: 'XYZ', fields: ['some field'] });
    const response = await server.inject(options);
    expect(typeof (response.result)).toEqual(typeof []);
    console.log(response.result);
    expect(response.result[0].title).toEqual('XYZ');
    done();
  });
});
