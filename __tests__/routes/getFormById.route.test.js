const { server } = require('../../server');
const models = require('../../models');

describe('GET /form/{id} route', () => {
  beforeAll(async () => {
    await models.form.truncate();
  });
  afterEach(async () => {
    await models.form.truncate();
  });
  it('should return row asked from forms table', async (done) => {
    const form1 = await models.form.addForm({ title: 'XYZ', fields: ['some field'] });
    await models.form.addForm({ title: 'Y', fields: ['field'] });
    const formId = form1[0].id;
    const options = {
      method: 'GET',
      url: `/form/${formId}`,
    };
    const response = await server.inject(options);
    expect(typeof (response.result)).toEqual(typeof {});
    console.log(response.result);
    expect(response.result.title).toEqual('XYZ');
    done();
  });
});
