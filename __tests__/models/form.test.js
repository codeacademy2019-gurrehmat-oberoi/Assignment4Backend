const models = require('../../models');

const input = {
  title: 'Testing title',
  fields: [
    'Test Field 1',
    'Test Field 2',
    'Test Field 3',
  ],
};
const input2 = {
  title: 'Testing 2',
  fields: [
    'Test Field 1',
    'Test Field 2',
  ],
};

describe('addForm()', () => {
  beforeAll(async () => {
    await models.form.truncate();
  });
  afterEach(async () => {
    await models.form.truncate();
  });
  it('should add a row in form table', async (done) => {
    await models.form.addForm(input);
    expect(await models.form.count()).toEqual(1);
    done();
  });
  it('should add new row to table corresponding to given input', async (done) => {
    await models.form.addForm(input);
    const response = await models.form.findOne();
    expect(response.dataValues).toMatchObject(input);
    done();
  });
  it('should not add form if matching form exists', async (done) => {
    await models.form.addForm(input);
    await models.form.addForm(input);
    expect(await models.form.count()).toEqual(1);
    done();
  });
});

describe('getAllForms()', () => {
  beforeAll(async () => {
    await models.form.truncate();
  });
  afterEach(async () => {
    await models.form.truncate();
  });
  it('should fetch all the forms entered', async (done) => {
    await models.form.addForm(input);
    await models.form.addForm(input2);
    const response = await models.form.getAllForms();
    expect(response.length).toEqual(2);
    expect(response[0]).toMatchObject(input);
    expect(response[1]).toMatchObject(input2);
    done();
  });
});

describe('getFormById()', () => {
  beforeAll(async () => {
    await models.form.truncate();
  });
  afterEach(async () => {
    await models.form.truncate();
  });
  it('should return form matching given id', async (done) => {
    const responses = [await models.form.addForm(input), await models.form.addForm(input2)];
    const ids = [responses[0][0].id, responses[1][0].id];
    const res = [await models.form.getFormById(ids[0]), await models.form.getFormById(ids[1])];
    expect(res[0]).toEqual(responses[0][0].dataValues);
    expect(res[1]).toEqual(responses[1][0].dataValues);
    done();
  });
});

// afterAll(() => models.sequelize.close());
