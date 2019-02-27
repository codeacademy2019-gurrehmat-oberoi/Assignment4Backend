const models = require('../../models');

const formParams = {
  title: 'Testing title',
  fields: [
    'First Name',
    'Last Name',
  ],
};

const input = {
  'First Name': 'John',
  'Last Name': 'Doe',
};

const makeForm = () => models.form.addForm(formParams);
const makeSecondForm = () => models.form.addForm({
  title: 'TestForm2',
  fields: [
    'Name',
  ],
});

describe('addSubmissions()', () => {
  beforeAll(async () => {
    await models.form.truncate();
    await models.submission.truncate();
  });
  afterEach(async () => {
    await models.form.truncate();
    await models.submission.truncate();
  });
  it('should add provided submissions to table', async (done) => {
    const sampleForm = await makeForm();
    await models.submission.addSubmissions(sampleForm[0].id, input);
    expect(await models.submission.count()).toEqual(2);
    done();
    // expect(sampleForm).toEqual(1);
    // done();
  });
});

describe('getSubmissionByFormId()', () => {
  beforeAll(async () => {
    await models.form.truncate();
    await models.submission.truncate();
  });
  afterEach(async () => {
    await models.form.truncate();
    await models.submission.truncate();
  });
  it('should get all submissions of formId provided', async (done) => {
    const forms = [await makeForm(), await makeSecondForm()];
    await models.submission.addSubmissions(forms[0][0].id, input);
    await models.submission.addSubmissions(forms[1][0].id, { Name: 'Jane Doe' });
    const results = [
      await models.submission.getSubmissionsByFormId(forms[0][0].id),
      await models.submission.getSubmissionsByFormId(forms[1][0].id),
    ];
    expect(results[0]).toHaveLength(2);
    expect(results[1]).toHaveLength(1);
    done();
  });
});

afterAll(async () => {
  await models.sequelize.close();
});
