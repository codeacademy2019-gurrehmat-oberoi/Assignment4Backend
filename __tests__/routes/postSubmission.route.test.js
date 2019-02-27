const { server } = require('../../server');
const models = require('../../models');

describe('POST /submission/{formId} route', () => {
  beforeAll(async () => {
    await models.form.truncate();
    await models.submission.truncate();
  });
  afterEach(async () => {
    await models.form.truncate();
    await models.submission.truncate();
  });
  it('should add submission given in payload to the submission table', async (done) => {
    const formParams = {
      title: 'Testing title',
      fields: [
        'First Name',
        'Last Name',
      ],
    };
    const form1 = await models.form.addForm(formParams);
    const formId = form1[0].dataValues.id;
    const options = {
      method: 'POST',
      url: `/submission/${formId}`,
      payload: {
        'First Name': 'Jacky',
        'Last Name': 'Chan',
      },
    };
    const response = await server.inject(options);
    expect(typeof response.result).toEqual(typeof []);
    expect(response.result.length).toEqual(Object.keys(options.payload).length);
    done();
  });
});
