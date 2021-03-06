const models = require('../../models');

module.exports = {
  method: 'POST',
  path: '/form',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: async (request) => {
    const { payload } = request;
    const result = await models.form.addForm(payload);
    return result;
  },
};
