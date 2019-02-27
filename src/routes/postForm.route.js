const models = require('../../models');

module.exports = {
  method: 'POST',
  path: '/form',
  handler: async (request) => {
    const { payload } = request;
    const result = await models.form.addForm(payload);
    return result;
  },
};
