const { server } = require('../../server');
const models = require('../../models');

describe('GET /submission/{formId} route', () => {
  beforeAll(async () => {
    await models.form.truncate();
    await models.submission.truncate();
  });
  afterEach(async () => {
    await models.form.truncate();
    await models.submission.truncate();
  });
  it('should show all submissions to given form ID', async (done) => {
    const formParams = {
      title: 'Testing title',
      fields: [
        'First Name',
        'Last Name',
      ],
    };
    const form1 = await models.form.addForm(formParams);
    const formId = form1[0].dataValues.id;
    await models.submission.addSubmissions(formId, {
      'First Name': 'Johnny',
      'Last Name': 'Bravo',
    });
    const options = {
      method: 'GET',
      url: `/submission/${formId}`,
    };
    const response = await server.inject(options);
    expect(typeof (response.result)).toEqual(typeof []);
    expect(response.result.length).toEqual(formParams.fields.length);
    done();
  });
});
